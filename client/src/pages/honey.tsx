import { useEffect } from "react";
import { Flower2, Droplets, Heart, Shield, Star, TreePine, MapPin, Phone, Mail, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import nativeBushFlowersImage from "@assets/stock_images/manuka_flowers_bees.png";
import beehivesImage2 from "@assets/stock_images/beehives_honey_bee_f_a6c82ccb.jpg";
import honeyJarsImage2 from "@assets/stock_images/honey_jars_productio_08c8d0e1.jpg";

export default function Honey() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Kaikoura Native Bush Honey | Premium New Zealand Honey | Wairimu Station";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Kaikoura\'s premium Native Bush honey. Learn about sustainable beekeeping, health benefits, and the unique environment that creates world-class New Zealand honey.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Discover Kaikoura\'s premium Native Bush honey. Learn about sustainable beekeeping, health benefits, and the unique environment that creates world-class New Zealand honey.';
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

  const nativeBushGrades = [
    {
      grade: "MGO 100+",
      description: "Mild therapeutic activity, everyday consumption",
      uses: "Daily wellness, culinary use",
      color: "text-green-600 border-green-600"
    },
    {
      grade: "MGO 250+",
      description: "Moderate therapeutic activity",
      uses: "Immune support, wound care",
      color: "text-yellow-600 border-yellow-600"
    },
    {
      grade: "MGO 400+",
      description: "High therapeutic activity",
      uses: "Digestive health, skin conditions",
      color: "text-orange-600 border-orange-600"
    },
    {
      grade: "MGO 550+",
      description: "Superior therapeutic activity",
      uses: "Medical grade applications",
      color: "text-red-600 border-red-600"
    }
  ];

  const healthBenefits = [
    {
      icon: Shield,
      title: "Antibacterial Properties",
      description: "Natural methylglyoxal (MGO) provides powerful antimicrobial benefits",
      research: "Clinically proven against resistant bacteria"
    },
    {
      icon: Heart,
      title: "Digestive Health",
      description: "Supports gut health and aids in digestive system healing",
      research: "Studies show benefits for stomach ulcers"
    },
    {
      icon: Droplets,
      title: "Wound Healing",
      description: "Accelerates healing process for cuts, burns, and skin conditions",
      research: "Medical grade honey used in hospitals"
    },
    {
      icon: Star,
      title: "Immune Support",
      description: "Rich in antioxidants and nutrients that boost immune function",
      research: "Contains unique bioactive compounds"
    }
  ];


  const kaikouraAdvantages = [
    {
      icon: TreePine,
      title: "Pristine Environment",
      description: "Pollution-free coastal environment with abundant native bush forests",
      highlight: "No industrial contamination"
    },
    {
      icon: MapPin,
      title: "Ideal Climate",
      description: "Temperate maritime climate perfect for native bush flower growth",
      highlight: "Extended flowering season"
    },
    {
      icon: Flower2,
      title: "Native Flora Diversity",
      description: "Rich biodiversity supporting healthy bee populations and honey quality",
      highlight: "Unique terroir characteristics"
    },
    {
      icon: Award,
      title: "Sustainable Practices",
      description: "Environmentally responsible beekeeping supporting ecosystem health",
      highlight: "Carbon-neutral operations"
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="honey-hero-title">
                Kaikoura Native Bush Honey
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="honey-hero-description">
                Premium New Zealand honey from pristine coastal forests, where native bush flowers create liquid gold
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigateToSection("benefits")}
                  size="lg"
                  className="floating-green-btn"
                  data-testid="hero-benefits-button"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Health Benefits
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={nativeBushFlowersImage}
                  alt="Native bush flowers with bees collecting nectar for premium New Zealand honey" 
                  className="w-full h-full object-cover"
                  data-testid="native-bush-flowers-bees-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honey Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kaikoura's Liquid Gold
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nestled between mountains and sea, Kaikoura's unique environment produces some of the world's finest native bush honey, 
              treasured for its exceptional therapeutic properties and distinctive flavor
            </p>
          </div>


          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-foreground">
                What Makes Native Bush Honey Special?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
Native bush honey is derived from the nectar of New Zealand's diverse native flowering trees and shrubs, creating a complex multifloral honey with unique therapeutic properties. 
                This extraordinary honey contains unique compounds like methylglyoxal (MGO) that give it powerful therapeutic properties 
                not found in regular honey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section id="benefits" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Therapeutic Health Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scientifically proven health benefits that have made native bush honey a trusted natural remedy worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {healthBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={benefit.title} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-primary text-2xl mr-4" />
                      <h4 className="font-semibold text-foreground text-lg" data-testid={`benefit-title-${index}`}>
                        {benefit.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground mb-4" data-testid={`benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {benefit.research}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* UMF Grading System */}
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              MGO Grading System
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              The MGO (Methylglyoxal) rating system measures the therapeutic potency of native bush honey
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nativeBushGrades.map((grade, index) => (
                <Card key={grade.grade} className="text-center">
                  <CardContent className="p-6">
                    <Badge variant="outline" className={`text-lg px-4 py-2 mb-4 ${grade.color}`}>
                      {grade.grade}
                    </Badge>
                    <h4 className="font-semibold text-foreground mb-2" data-testid={`grade-title-${index}`}>
                      {grade.description}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`grade-uses-${index}`}>
                      {grade.uses}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Kaikoura Advantages Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kaikoura's Natural Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why Kaikoura's unique environment produces exceptional native bush honey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {kaikouraAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={advantage.title} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-primary text-2xl mr-4" />
                      <h4 className="font-semibold text-foreground text-lg" data-testid={`advantage-title-${index}`}>
                        {advantage.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground mb-4" data-testid={`advantage-description-${index}`}>
                      {advantage.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {advantage.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={beehivesImage2}
                alt="Beehives nestled in Kaikoura's coastal forest environment showing ideal conditions for honey making" 
                className="w-full h-full object-cover"
                data-testid="kaikoura-environment-image"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={honeyJarsImage2}
                alt="Artisanal honey showcasing the quality and care that goes into every jar of Kaikoura honey" 
                className="w-full h-full object-cover"
                data-testid="kaikoura-honey-quality-image"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}