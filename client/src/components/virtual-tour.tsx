import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, RotateCcw, Maximize2, Info } from "lucide-react";

interface TourSpot {
  id: string;
  name: string;
  description: string;
  image: string;
  hotspots?: Array<{
    x: number;
    y: number;
    title: string;
    description: string;
  }>;
}

const tourSpots: TourSpot[] = [
  {
    id: "entrance",
    name: "Property Entrance",
    description: "Welcome to Wairimu Station - main entrance with native forest backdrop",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000",
    hotspots: [
      { x: 20, y: 30, title: "Native Forest", description: "800-year-old native trees providing natural carbon sequestration" },
      { x: 80, y: 60, title: "Access Road", description: "All-weather access road suitable for timber harvesting equipment" }
    ]
  },
  {
    id: "forest-canopy",
    name: "Forest Canopy View",
    description: "Aerial perspective showing the density and health of the native forest",
    image: "https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000",
    hotspots: [
      { x: 50, y: 25, title: "Carbon Credits Area", description: "Primary area generating ETS credits worth $185,000 annually" },
      { x: 15, y: 70, title: "Regenerating Zone", description: "Natural regeneration area with high growth potential" }
    ]
  },
  {
    id: "mountain-trail",
    name: "Mountain Trail",
    description: "Walking trail through the property showcasing the pristine Kaikoura landscape",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000",
    hotspots: [
      { x: 60, y: 40, title: "Boundary Marker", description: "Property boundary clearly marked for investment clarity" },
      { x: 25, y: 80, title: "Water Source", description: "Natural spring providing year-round water access" }
    ]
  },
  {
    id: "clearing",
    name: "Forest Clearing",
    description: "Natural clearing perfect for future development or recreational activities",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000",
    hotspots: [
      { x: 40, y: 50, title: "Development Site", description: "Potential site for eco-lodge or visitor facilities" },
      { x: 75, y: 30, title: "View Point", description: "Stunning views of Kaikoura coastline and mountains" }
    ]
  }
];

export default function VirtualTour() {
  const [currentSpot, setCurrentSpot] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTourSpot = tourSpots[currentSpot];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
      y: prev.y + deltaX * 0.5
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Virtual Property Tour
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Explore Wairimu Station</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take an immersive virtual tour of the property. Click and drag to look around, 
            discover key features, and get a true sense of this exceptional investment opportunity.
          </p>
        </div>

        <div 
          ref={containerRef}
          className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'max-w-6xl mx-auto'}`}
        >
          <Card className={`overflow-hidden ${isFullscreen ? 'h-full border-0 rounded-none' : ''}`}>
            <CardContent className="p-0">
              {/* Virtual Tour Viewer */}
              <div 
                className={`relative overflow-hidden cursor-grab select-none ${
                  isFullscreen ? 'h-screen' : 'aspect-video'
                } ${isDragging ? 'cursor-grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                data-testid="virtual-tour-viewer"
              >
                <div
                  ref={imageRef}
                  className="w-full h-full transition-transform duration-100 ease-out"
                  style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.1)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <img
                    src={currentTourSpot.image}
                    alt={currentTourSpot.description}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Information Hotspots */}
                  {currentTourSpot.hotspots?.map((hotspot, index) => (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedHotspot(selectedHotspot === index ? null : index);
                      }}
                      data-testid={`hotspot-${index}`}
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <Info className="w-4 h-4 text-white" />
                      </div>
                      
                      {/* Hotspot Information */}
                      {selectedHotspot === index && (
                        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border">
                          <h4 className="font-semibold mb-2">{hotspot.title}</h4>
                          <p className="text-sm text-muted-foreground">{hotspot.description}</p>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-gray-800"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tour Controls */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetRotation}
                    className="bg-white/90 hover:bg-white"
                    data-testid="button-reset-rotation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleFullscreen}
                    className="bg-white/90 hover:bg-white"
                    data-testid="button-fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Current Location Info */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 max-w-sm">
                  <h3 className="font-semibold mb-1" data-testid="text-location-name">
                    {currentTourSpot.name}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-location-description">
                    {currentTourSpot.description}
                  </p>
                </div>
              </div>

              {/* Tour Navigation */}
              <div className="p-6 bg-muted/30">
                <h3 className="font-semibold mb-4">Tour Locations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tourSpots.map((spot, index) => (
                    <button
                      key={spot.id}
                      onClick={() => {
                        setCurrentSpot(index);
                        setSelectedHotspot(null);
                        resetRotation();
                      }}
                      className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                        currentSpot === index 
                          ? 'ring-2 ring-blue-500 scale-105' 
                          : 'hover:scale-102 hover:shadow-md'
                      }`}
                      data-testid={`tour-location-${index}`}
                    >
                      <img
                        src={spot.image}
                        alt={spot.name}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white text-sm font-medium">{spot.name}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Instructions */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">1</span>
              </div>
              <span>Click and drag to look around</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">2</span>
              </div>
              <span>Click blue dots for information</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">3</span>
              </div>
              <span>Switch locations below</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}