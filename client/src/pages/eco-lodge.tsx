import { useEffect } from "react";
import { 
  Building, 
  Leaf, 
  Mountain, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  TreePine, 
  Sunset, 
  Camera, 
  MapPin, 
  Phone, 
  Mail, 
  FileText 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import conceptImage1 from "@assets/w1_1758155810309.jpg";
import conceptImage2 from "@assets/w2_1758155810310.jpg";
import conceptImage3 from "@assets/w3_1758152454450.jpg";
import architecturalConceptsGrid from "@assets/architectural_concepts_grid.png";
import conceptPdf from "@assets/Concept Design Kaikoura_1758166391369.pdf";

// Eco-lodge architectural visualization imports
import exteriorView1 from "@assets/Screenshot 2025-09-24 at 6.42.49 PM_1758699554835.png";
import exteriorView2 from "@assets/Screenshot 2025-09-24 at 7.39.50 PM_1758699601136.png";
import exteriorView3 from "@assets/Screenshot 2025-09-24 at 7.40.41 PM_1758699654349.png";
import exteriorView4 from "@assets/Screenshot 2025-09-24 at 7.42.08 PM_1758699738667.png";
import exteriorView5 from "@assets/Screenshot 2025-09-24 at 7.42.48 PM_1758699778247.png";
import interiorView1 from "@assets/Screenshot 2025-09-24 at 7.41.31 PM_1758699701558.png";
import interiorView2 from "@assets/Screenshot 2025-09-24 at 7.43.33 PM_1758699823079.png";
import interiorView3 from "@assets/Screenshot 2025-09-24 at 7.44.30 PM_1758699880234.png";
import floorPlan from "@assets/Screenshot 2025-09-24 at 7.47.56 PM_1758700085134.png";

export default function EcoLodge() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Eco Lodge Development Concept - Wairimu Station | Kaikoura Tourism Investment";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore the eco lodge development opportunity at Wairimu Station. Sustainable tourism accommodation concept in pristine Kaikoura environment with strong investment potential.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Explore the eco lodge development opportunity at Wairimu Station. Sustainable tourism accommodation concept in pristine Kaikoura environment with strong investment potential.';
      document.head.appendChild(newMetaElement);
    }
    
    // Cleanup on unmount
    return () => {
      document.title = "Wairimu Station - Premium Forest Property Investment | Kaikoura, New Zealand";
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const conceptFeatures = [
    {
      icon: Building,
      title: "Boutique Accommodation",
      description: "8-12 luxury eco-cabins with panoramic views of mountains and coastline",
      capacity: "24-36 guests maximum"
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Solar power, rainwater harvesting, and locally sourced materials",
      capacity: "Net-zero carbon footprint"
    },
    {
      icon: Mountain,
      title: "Natural Integration",
      description: "Minimal impact design blending with existing landscape and forest",
      capacity: "95% native vegetation retained"
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "High-end amenities targeting luxury eco-tourism market",
      capacity: "$400-800/night potential"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(${conceptImage1})`
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="eco-lodge-hero-title">
            Eco Lodge Development Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="eco-lodge-hero-description">
            Premium eco-tourism accommodation concept combining luxury hospitality with environmental stewardship in Kaikoura's pristine landscape
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("concept-overview")}
              size="lg"
              className="floating-green-btn"
              data-testid="hero-concept-button"
            >
              <Building className="mr-2 h-5 w-5" />
              View Concept
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Overview */}
      <section id="concept-overview" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Luxury Eco-Lodge Concept
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A boutique eco-lodge offering guests an immersive nature experience while generating sustainable revenue for Wairimu Station
            </p>
            
          </div>

          {/* Architectural Concepts Grid */}
          <div className="mb-16">
            <figure className="rounded-xl overflow-hidden shadow-lg bg-card dark:bg-card">
              <img 
                src={architecturalConceptsGrid}
                alt="Architectural concepts grid showing multiple design variations for the eco-lodge development at Wairimu Station" 
                className="w-full h-auto object-contain aspect-video"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                data-testid="architectural-concepts-grid"
              />
              <figcaption className="sr-only">
                Professional architectural concept design demonstrating possible design approach and site integration
              </figcaption>
            </figure>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Professional architectural concept design demonstrating possible design approach and site integration
              </p>
            </div>
          </div>

          {/* 3D Architectural Renderings Gallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                3D Architectural Visualizations
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional 3D renderings showcasing the eco-lodge design from multiple perspectives, highlighting the seamless integration with Kaikoura's stunning natural landscape.
              </p>
            </div>
            
            {/* Exterior Views */}
            <div className="mb-12">
              <h4 className="font-semibold text-xl text-foreground mb-6 text-center">Exterior Views</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={exteriorView1}
                    alt="Front exterior view of the eco-lodge showing modern timber cladding and expansive glass walls with mountain backdrop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-exterior-1"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={exteriorView2}
                    alt="Side angle view demonstrating the eco-lodge's integration with the natural landscape and sustainable materials" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-exterior-2"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={exteriorView3}
                    alt="Deck and terrace area with spectacular ocean and mountain views showcasing outdoor living spaces" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-exterior-3"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={exteriorView4}
                    alt="Evening view of the eco-lodge highlighting sustainable design elements and guest accommodation areas" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-exterior-4"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={exteriorView5}
                    alt="Outdoor courtyard and deck area with pergola showing premium outdoor amenities and entertainment spaces" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-exterior-5"
                  />
                </div>
              </div>
            </div>

            {/* Interior Views */}
            <div className="mb-12">
              <h4 className="font-semibold text-xl text-foreground mb-6 text-center">Interior Views</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={interiorView1}
                    alt="Interior bathroom and hallway area featuring modern fixtures with panoramic mountain and forest views" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-interior-1"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={interiorView2}
                    alt="Open-plan dining and kitchen area with premium appliances and floor-to-ceiling windows" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-interior-2"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={interiorView3}
                    alt="Luxury living area with panoramic windows showcasing breathtaking views of Kaikoura's mountain ranges" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-interior-3"
                  />
                </div>
              </div>
            </div>

            {/* Floor Plan */}
            <div className="mt-12">
              <h4 className="font-semibold text-xl text-foreground mb-6 text-center">Floor Plan</h4>
              <div className="flex justify-center">
                <div className="max-w-4xl w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={floorPlan}
                    alt="Detailed architectural floor plan showing room layouts, spatial organization, and design flow of the eco-lodge" 
                    className="w-full h-full object-contain bg-card hover:scale-105 transition-transform duration-500"
                    data-testid="eco-lodge-floor-plan"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                These professional 3D architectural visualizations and floor plan demonstrate the thoughtful integration of luxury accommodation with sustainable design principles, 
                showcasing how the eco-lodge will blend seamlessly into Kaikoura's pristine natural environment while providing guests with exceptional comfort and spectacular views.
              </p>
            </div>
          </div>

        </div>
      </section>



    </div>
  );
}