import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Maximize2, 
  RotateCcw, 
  Move3D, 
  Compass,
  Info,
  X
} from "lucide-react";

interface Scene {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  hotspots: Hotspot[];
}

interface Hotspot {
  id: string;
  position: { theta: number; phi: number }; // spherical coordinates
  title: string;
  description: string;
  targetScene?: string;
  type: 'info' | 'navigation' | 'media';
}

interface VirtualTour360Props {
  scenes: Scene[];
  initialScene?: string;
  className?: string;
}

export default function VirtualTour360({ 
  scenes, 
  initialScene,
  className = "" 
}: VirtualTour360Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const sphereRef = useRef<THREE.Mesh>();
  const hotspotsRef = useRef<THREE.Group>();
  const raycasterRef = useRef<THREE.Raycaster>();
  const animationIdRef = useRef<number>();
  const [currentScene, setCurrentScene] = useState(initialScene || scenes[0]?.id);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ lon: 0, lat: 0 });
  const currentRef = useRef({ lon: 0, lat: 0 });

  // Check WebGL support
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!gl;
    } catch (e) {
      return false;
    }
  };

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Check WebGL support first
    if (!checkWebGLSupport()) {
      setWebGLSupported(false);
      setInitError('WebGL is not supported in this browser or environment');
      setIsLoading(false);
      return;
    }

    try {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 0, 0);
      cameraRef.current = camera;

      // Renderer setup with error handling
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        failIfMajorPerformanceCaveat: false 
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;

    // Create sphere for panoramic image
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert for inside view
    const material = new THREE.MeshBasicMaterial();
    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;
    scene.add(sphere);

    // Hotspots group
    const hotspotsGroup = new THREE.Group();
    hotspotsRef.current = hotspotsGroup;
    scene.add(hotspotsGroup);

    // Raycaster for hotspot picking
    const raycaster = new THREE.Raycaster();
    raycasterRef.current = raycaster;

    mountRef.current.appendChild(renderer.domElement);

    // Hotspot interaction helper
    const checkHotspotIntersection = (clientX: number, clientY: number) => {
      if (!raycaster || !camera || !hotspotsGroup.children.length) return null;
      
      const rect = canvas.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1
      );
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hotspotsGroup.children, true);
      
      if (intersects.length > 0) {
        // Walk up to find the hotspot group with userData
        let object: THREE.Object3D | null = intersects[0].object;
        while (object && !object.userData.hotspot) {
          object = object.parent;
        }
        return object?.userData.hotspot || null;
      }
      return null;
    };

    // Mouse/touch controls
    const onPointerStart = (event: PointerEvent) => {
      setIsDragging(true);
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) {
        // Check for hotspot hover when not dragging
        const hotspot = checkHotspotIntersection(event.clientX, event.clientY);
        setHoveredHotspot(hotspot?.id || null);
        canvas.style.cursor = hotspot ? 'pointer' : 'grab';
        return;
      }
      
      const deltaX = event.clientX - mouseRef.current.x;
      const deltaY = event.clientY - mouseRef.current.y;
      
      targetRef.current.lon -= deltaX * 0.1;
      targetRef.current.lat += deltaY * 0.1;
      targetRef.current.lat = Math.max(-85, Math.min(85, targetRef.current.lat));
      
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const onPointerEnd = (event: PointerEvent) => {
      const wasDragging = isDragging;
      setIsDragging(false);
      
      // Only handle click if we weren't dragging
      if (!wasDragging) {
        const hotspot = checkHotspotIntersection(event.clientX, event.clientY);
        if (hotspot) {
          setSelectedHotspot(hotspot);
          
          // Auto-navigate for navigation type hotspots
          if (hotspot.type === 'navigation' && hotspot.targetScene) {
            setTimeout(() => {
              setCurrentScene(hotspot.targetScene!);
              setSelectedHotspot(null);
            }, 1500); // Give user time to see the hotspot info
          }
        }
      }
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('pointerdown', onPointerStart);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerEnd);
    canvas.style.cursor = 'grab';

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      // Smooth camera movement
      currentRef.current.lon += (targetRef.current.lon - currentRef.current.lon) * 0.05;
      currentRef.current.lat += (targetRef.current.lat - currentRef.current.lat) * 0.05;

      const phi = THREE.MathUtils.degToRad(90 - currentRef.current.lat);
      const theta = THREE.MathUtils.degToRad(currentRef.current.lon);

      camera.lookAt(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );

      renderer.render(scene, camera);
    };
    animate();

    // Handle fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

      return () => {
        // Cancel animation frame
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        
        // Remove event listeners
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        canvas.removeEventListener('pointerdown', onPointerStart);
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerup', onPointerEnd);
        
        // Clean up Three.js
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (error) {
      console.error('Error initializing 360° virtual tour:', error);
      setWebGLSupported(false);
      setInitError(`Failed to initialize virtual tour: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsLoading(false);
    }
  }, []);

  // Load panoramic image
  useEffect(() => {
    if (!currentScene || !sphereRef.current) return;

    const scene = scenes.find(s => s.id === currentScene);
    if (!scene) return;

    setIsLoading(true);
    
    const loader = new THREE.TextureLoader();
    loader.load(
      scene.imageUrl,
      (texture) => {
        if (sphereRef.current) {
          const material = sphereRef.current.material as THREE.MeshBasicMaterial;
          
          // Dispose old texture if it exists
          if (material.map) {
            material.map.dispose();
          }
          
          material.map = texture;
          material.needsUpdate = true;
        }
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading panoramic image:', error);
        setIsLoading(false);
      }
    );
  }, [currentScene, scenes]);

  // Create hotspots for current scene
  useEffect(() => {
    if (!hotspotsRef.current || !currentScene) return;

    // Clear existing hotspots with proper disposal
    hotspotsRef.current.children.forEach((hotspotGroup) => {
      hotspotGroup.children.forEach((mesh) => {
        if (mesh instanceof THREE.Mesh) {
          mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(material => material.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });
    });
    hotspotsRef.current.clear();

    const scene = scenes.find(s => s.id === currentScene);
    if (!scene) return;

    scene.hotspots.forEach(hotspot => {
      const phi = THREE.MathUtils.degToRad(90 - hotspot.position.phi);
      const theta = THREE.MathUtils.degToRad(hotspot.position.theta);

      const x = 480 * Math.sin(phi) * Math.cos(theta);
      const y = 480 * Math.cos(phi);
      const z = 480 * Math.sin(phi) * Math.sin(theta);

      // Create hotspot group for layered visuals
      const hotspotGroup = new THREE.Group();
      hotspotGroup.position.set(x, y, z);
      hotspotGroup.lookAt(0, 0, 0);
      hotspotGroup.userData = { hotspot };

      // Outer ring for better visibility
      const outerGeometry = new THREE.RingGeometry(6, 12, 16);
      const outerMaterial = new THREE.MeshBasicMaterial({ 
        color: hotspot.type === 'navigation' ? 0x00ff00 : 0xff4444,
        transparent: true,
        opacity: 0.3
      });
      const outerRing = new THREE.Mesh(outerGeometry, outerMaterial);
      hotspotGroup.add(outerRing);

      // Inner ring with stronger opacity
      const innerGeometry = new THREE.RingGeometry(2, 6, 12);
      const innerMaterial = new THREE.MeshBasicMaterial({ 
        color: hotspot.type === 'navigation' ? 0x00ff00 : 0xff4444,
        transparent: true,
        opacity: 0.8
      });
      const innerRing = new THREE.Mesh(innerGeometry, innerMaterial);
      hotspotGroup.add(innerRing);

      // Central dot for precise clicking
      const dotGeometry = new THREE.CircleGeometry(1.5, 8);
      const dotMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.9
      });
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      hotspotGroup.add(dot);

      // Store material references for hover effects
      hotspotGroup.userData.materials = {
        outer: outerMaterial,
        inner: innerMaterial,
        dot: dotMaterial
      };

      hotspotsRef.current?.add(hotspotGroup);
    });
  }, [currentScene, scenes]);

  // Update hotspot materials for hover effects without recreating
  useEffect(() => {
    if (!hotspotsRef.current) return;

    hotspotsRef.current.children.forEach((hotspotGroup) => {
      const hotspot = hotspotGroup.userData.hotspot;
      if (!hotspot) return;

      const isHovered = hoveredHotspot === hotspot.id;
      const materials = hotspotGroup.userData.materials;
      
      if (materials) {
        materials.inner.opacity = isHovered ? 1.0 : 0.8;
        materials.dot.opacity = isHovered ? 1.0 : 0.9;
      }
    });
  }, [hoveredHotspot]);

  const resetView = () => {
    targetRef.current = { lon: 0, lat: 0 };
  };

  const toggleFullscreen = async () => {
    if (!mountRef.current) return;

    try {
      if (!isFullscreen) {
        await mountRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  const currentSceneData = scenes.find(s => s.id === currentScene);

  return (
    <div className={`relative ${className}`}>
      <Card className={`overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 h-screen border-0 rounded-none' : ''}`}>
        <CardContent className="p-0">
          {/* Tour Header */}
          <div className="p-4 bg-background border-b">
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="secondary" className="mb-2">
                  <Camera className="w-4 h-4 mr-2" />
                  360° Virtual Tour
                </Badge>
                <h3 className="font-semibold text-lg" data-testid="virtual-tour-title">
                  {currentSceneData?.name || 'Virtual Property Tour'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentSceneData?.description || 'Explore the property in 360°'}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetView}
                  data-testid="button-reset-view"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleFullscreen}
                  data-testid="button-fullscreen-360"
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* 360° Viewer */}
          <div 
            ref={mountRef}
            className={`relative bg-black ${isFullscreen ? 'h-full' : 'aspect-video'}`}
            data-testid="360-tour-viewer"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* WebGL Not Supported Fallback */}
            {!webGLSupported && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
                <div className="text-center p-8">
                  <Info className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h4 className="text-lg font-semibold mb-2">360° Tour Not Available</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    WebGL support is required for the interactive 360° virtual tour.
                    {initError && (
                      <span className="block mt-2 text-xs text-gray-400">
                        {initError}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-gray-400">
                    Please try using a modern browser with WebGL support.
                  </p>
                </div>
              </div>
            )}

            {isLoading && webGLSupported && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2 mx-auto"></div>
                  <p>Loading panoramic view...</p>
                </div>
              </div>
            )}

            {/* Controls Overlay */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="bg-black/50 rounded-lg p-2 text-white text-xs">
                <div className="flex items-center gap-1 mb-1">
                  <Move3D className="w-3 h-3" />
                  <span>Drag to look around</span>
                </div>
                <div className="flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  <span>Click hotspots to explore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scene Navigation */}
          {scenes.length > 1 && (
            <div className="p-4 bg-muted/30">
              <div className="flex gap-2 overflow-x-auto">
                {scenes.map(scene => (
                  <Button
                    key={scene.id}
                    variant={currentScene === scene.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentScene(scene.id)}
                    className="shrink-0"
                    data-testid={`scene-button-${scene.id}`}
                  >
                    {scene.name}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Hotspot Info Modal */}
      {selectedHotspot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="max-w-md mx-4">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-lg">{selectedHotspot.title}</h4>
                  <Badge variant="outline" className="mt-1">
                    {selectedHotspot.type}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedHotspot(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                {selectedHotspot.description}
              </p>
              {selectedHotspot.targetScene && (
                <Button
                  onClick={() => {
                    setCurrentScene(selectedHotspot.targetScene!);
                    setSelectedHotspot(null);
                  }}
                  className="w-full"
                >
                  Go to {scenes.find(s => s.id === selectedHotspot.targetScene)?.name}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}