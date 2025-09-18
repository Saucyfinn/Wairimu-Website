import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Maximize2, AlertCircle } from "lucide-react";

// Wairimu Station video from Dropbox
// Note: Dropbox folder links need to be converted to direct download links for embedding
const propertyVideoUrl = "https://www.dropbox.com/scl/fo/l69x1qjhznmmeiv6muaqb/AJvvFHYcdfEPHt82M2uDWog/Wairimu%20Station%20Final%20Master.mp4?rlkey=88mmp1ujmh10mdnhkltfisqxb&dl=1";

export default function VirtualTour() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
            Take a comprehensive video tour of the property and get a true sense of this exceptional investment opportunity.
          </p>
        </div>

        <div 
          ref={containerRef}
          className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'max-w-6xl mx-auto'}`}
        >
          <Card className={`overflow-hidden ${isFullscreen ? 'h-full border-0 rounded-none' : ''}`}>
            <CardContent className="p-0">
              {/* Video Player */}
              <div 
                className={`relative ${isFullscreen ? 'h-screen' : 'aspect-video'}`}
                data-testid="video-tour-viewer"
              >
                <video
                  ref={videoRef}
                  src={propertyVideoUrl}
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCA0MFY2MEw2MCA1MEw0MCA0MFoiIGZpbGw9IiM2MzY2RjEiLz4KPHR5cGUgc2l6ZT0iMTQiIGZpbGw9IiM2NDc0OCEiIHg9IjEwIiB5PSI4MCI+UHJvcGVydHkgVmlkZW8gVG91cjwvdGV4dD4KPC9zdmc+"
                  data-testid="property-video"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Fullscreen Control */}
                <div className="absolute top-4 right-4">
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

                {/* Video Info Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 max-w-sm">
                  <h3 className="font-semibold mb-1" data-testid="text-video-title">
                    Wairimu Station Tour
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-video-description">
                    Comprehensive video tour of the entire Wairimu Station property
                  </p>
                </div>
              </div>

              {/* Video Note */}
              <div className="p-6 bg-muted/30">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                      Video URL Configuration Required
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      The SharePoint video URL provided needs to be replaced with a publicly accessible video URL. 
                      SharePoint links require authentication and won't work for public viewing. Please provide a 
                      direct video file URL or upload the video to a public hosting service.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simple Instructions */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">▶</span>
              </div>
              <span>Click play to start the tour</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
              <span>Use fullscreen for better viewing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}