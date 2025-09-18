import { useState } from "react";
import { Network, TrendingUp, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Property } from "@shared/schema";
import { GOOGLE_EARTH_CONFIG } from "@shared/config";

export default function PropertyShowcase() {
  const [selectedImage, setSelectedImage] = useState(0);

  const openGoogleEarth = () => {
    const googleEarthUrl = GOOGLE_EARTH_CONFIG.generateUrl();
    window.open(googleEarthUrl, '_blank', 'noopener,noreferrer');
  };

  const { data: property } = useQuery<Property>({
    queryKey: ["/api/property"],
  });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675",
      alt: "Native New Zealand forest landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Forest canopy aerial view"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Mountain forest trail"
    },
    {
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Forest clearing with native plants"
    }
  ];

  return (
    <section id="property" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Forest Untouched
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the pristine beauty of native New Zealand forest, where ancient trees meet modern investment opportunity in perfect harmony
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-foreground">
              Premium Forest Investment
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wairimu Station spans across pristine native forest, offering not just breathtaking natural beauty but a sustainable investment opportunity through New Zealand's Emissions Trading Scheme.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Network className="text-primary text-2xl mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Native Forest</h4>
                  <p className="text-muted-foreground">Untouched wilderness with centuries-old native species</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <TrendingUp className="text-accent text-2xl mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Carbon Credit Registered</h4>
                  <p className="text-muted-foreground">215 hectares generating annual income</p>
                </CardContent>
              </Card>
            </div>
            <Button 
              onClick={openGoogleEarth}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="launch-virtual-tour"
            >
              <CircuitBoard className="mr-2 h-5 w-5" />
              Launch Virtual Tour
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                data-testid="main-property-image"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.slice(1).map((image, index) => (
                <img 
                  key={index + 1}
                  src={image.src}
                  alt={image.alt}
                  className="aspect-video rounded-lg object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
                  onClick={() => setSelectedImage(index + 1)}
                  data-testid={`gallery-image-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Property Statistics */}
        <div className="grid md:grid-cols-4 gap-8 bg-muted p-8 rounded-xl">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 animate-counter" data-testid="stat-area">
              {property?.area?.toLocaleString() || "2,400"}
            </div>
            <div className="text-muted-foreground">Hectares</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2 animate-counter" data-testid="stat-credits">
              {property?.etsCredits?.toLocaleString() || "3,000"}
            </div>
            <div className="text-muted-foreground">ETS Credits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 animate-counter" data-testid="stat-established">
              {property?.yearEstablished || "1887"}
            </div>
            <div className="text-muted-foreground">Established</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2 animate-counter" data-testid="stat-income">
              ${property?.annualIncome ? (property.annualIncome / 1000).toFixed(0) + 'K' : "185K"}
            </div>
            <div className="text-muted-foreground">Annual ETS Income</div>
          </div>
        </div>
      </div>
    </section>
  );
}
