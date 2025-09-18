import { useState } from "react";
import { Network, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Property } from "@shared/schema";
import YouTubeModal from "./youtube-modal";

export default function PropertyShowcase() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openPropertyVideo = () => {
    setIsVideoModalOpen(true);
  };

  const { data: property } = useQuery<Property>({
    queryKey: ["/api/property"],
  });


  return (
    <section id="property" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Wairimu Where Regenerating Native Bush Shelters Both Birdsong And Big Game
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Experience the pristine beauty of native New Zealand forest, where ancient trees meet modern investment opportunity in perfect harmony
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Wairimu Station spans across pristine native forest, offering not just breathtaking natural beauty but a sustainable investment opportunity through New Zealand's Emissions Trading Scheme.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <Network className="text-primary text-xl sm:text-2xl mb-2 sm:mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Native Forest</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Native bush and wildlife thrive, and sustainable hunting goes hand in hand with nature's renewal</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <TrendingUp className="text-accent text-xl sm:text-2xl mb-2 sm:mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Carbon Credit Registered</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Registered forest generating annual income</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="order-first lg:order-last">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/b7ypIkAsYLY"
                title="Wairimu Station Property Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                data-testid="property-video-embed"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Property Overview
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Take a closer look at this exceptional forest investment opportunity
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-muted">
              <iframe
                src="https://www.youtube-nocookie.com/embed/DAd1staY8wQ?modestbranding=1&rel=0&autoplay=0&playsinline=1"
                title="Wairimu Station Property Overview"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
                data-testid="property-overview-video"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Property Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 bg-muted p-6 sm:p-8 rounded-xl">
          <div className="text-center py-2">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2 animate-counter" data-testid="stat-area">
              {property?.area?.toLocaleString() || "640"}
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">Hectares</div>
          </div>
          <div className="text-center py-2">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2 animate-counter" data-testid="stat-credits">
              {property?.etsCredits?.toLocaleString() || "215.5"}
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">ETS Credits</div>
          </div>
          <div className="text-center py-2">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2 animate-counter" data-testid="stat-income">
              ${property?.annualIncome ? (property.annualIncome / 1000).toFixed(0) + 'K' : "185K"}
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">Annual Carbon Credits</div>
          </div>
        </div>
        
        {/* YouTube Modal */}
        <YouTubeModal 
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoId="DAd1staY8wQ"
          title="Wairimu Station Property Overview"
        />
      </div>
    </section>
  );
}
