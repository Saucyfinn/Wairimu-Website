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

  const locationAdvantages = [
    {
      advantage: "Exclusive Coastal Access",
      description: "Private beach frontage and marine wildlife viewing opportunities",
      marketValue: "Premium positioning vs. commercial accommodations"
    },
    {
      advantage: "Mountain Backdrop",
      description: "Stunning Kaikoura Ranges provide dramatic scenic setting",
      marketValue: "Year-round photogenic appeal for guests"
    },
    {
      advantage: "Wildlife Proximity",
      description: "Seals, dolphins, whales, and native birds on-property or nearby",
      marketValue: "Unique selling proposition for nature tourism"
    },
    {
      advantage: "Sustainable Tourism Focus",
      description: "Growing market demand for authentic eco-tourism experiences",
      marketValue: "Premium pricing for conscious travelers"
    }
  ];

  const proposedAmenities = [
    {
      category: "Accommodation",
      features: [
        "Luxury eco-cabins with private decks",
        "Panoramic ocean and mountain views",
        "Premium bedding and furnishings",
        "Private bathrooms with eco-fixtures"
      ]
    },
    {
      category: "Facilities",
      features: [
        "Central lodge with dining and lounge",
        "Organic garden and farm-to-table dining",
        "Yoga and wellness pavilion",
        "Conference/event space for retreats"
      ]
    },
    {
      category: "Activities",
      features: [
        "Guided nature walks and birdwatching",
        "Mountain biking and hiking trails",
        "Marine wildlife boat excursions",
        "Cultural experiences and workshops"
      ]
    },
    {
      category: "Sustainability",
      features: [
        "Solar power and battery storage",
        "Rainwater collection systems",
        "Organic waste composting",
        "Native forest restoration programs"
      ]
    }
  ];

  const marketAnalysis = [
    {
      metric: "Kaikoura Tourism",
      value: "600,000+ visitors",
      period: "annually",
      trend: "Growing 8% year-on-year"
    },
    {
      metric: "Eco-Tourism Market",
      value: "$89 billion",
      period: "globally",
      trend: "15% annual growth rate"
    },
    {
      metric: "Average Stay",
      value: "2.3 nights",
      period: "Kaikoura region",
      trend: "Opportunity to extend stays"
    },
    {
      metric: "Premium Accommodation",
      value: "$350-600/night",
      period: "regional market",
      trend: "Limited luxury options"
    }
  ];


  const developmentPhases = [
    {
      phase: 1,
      title: "Planning & Permits",
      duration: "6-12 months",
      description: "Resource consent, environmental assessments, detailed design",
      investment: "$150,000-250,000"
    },
    {
      phase: 2,
      title: "Infrastructure",
      duration: "8-12 months",
      description: "Access roads, utilities, water systems, waste management",
      investment: "$800,000-1,200,000"
    },
    {
      phase: 3,
      title: "Construction Phase 1",
      duration: "12-18 months",
      description: "Central lodge, 4-6 initial cabins, core amenities",
      investment: "$2,500,000-3,500,000"
    },
    {
      phase: 4,
      title: "Operations & Expansion",
      duration: "Ongoing",
      description: "Open for guests, build reputation, add remaining cabins",
      investment: "$500,000-1,000,000"
    }
  ];

  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: "Renewable Energy",
      description: "100% solar power with battery storage for energy independence"
    },
    {
      icon: TreePine,
      title: "Forest Conservation",
      description: "Active native forest restoration and pest management programs"
    },
    {
      icon: Mountain,
      title: "Minimal Footprint",
      description: "Elevated structures to minimize ground disturbance and erosion"
    },
    {
      icon: Star,
      title: "Circular Systems",
      description: "Closed-loop water, waste, and energy systems with regenerative practices"
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
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                Architectural Design Variations
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore multiple design concepts and layout options for the eco-lodge development, showcasing versatile approaches to integrate luxury accommodation with the natural environment.
              </p>
            </div>
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
                Professional architectural concepts demonstrating various design approaches and site integration options
              </figcaption>
            </figure>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Professional architectural concepts demonstrating various design approaches and site integration options
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Market Analysis Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tourism Market Opportunity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strong tourism fundamentals and growing eco-tourism demand create compelling investment opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {marketAnalysis.map((metric, index) => (
              <Card key={metric.metric} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`market-metric-value-${index}`}>
                    {metric.value}
                  </div>
                  <div className="font-medium text-foreground mb-1">{metric.metric}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.period}</div>
                  <Badge variant="outline" className="text-xs text-accent border-accent">
                    {metric.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locationAdvantages.map((advantage, index) => (
              <Card key={advantage.advantage} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`location-advantage-${index}`}>
                  {advantage.advantage}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`location-description-${index}`}>
                  {advantage.description}
                </p>
                <Badge variant="outline" className="text-primary border-primary">
                  {advantage.marketValue}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proposed Amenities Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proposed Amenities & Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive facilities designed to deliver exceptional guest experiences while maintaining environmental integrity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {proposedAmenities.map((category, index) => (
              <Card key={category.category} className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`amenity-category-${index}`}>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground" data-testid={`amenity-feature-${index}-${featureIndex}`}>
                      <Star className="text-primary w-4 h-4 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sustainability & Environmental Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading-edge sustainable design principles create positive environmental impact while reducing operational costs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow h-full p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-primary text-2xl mr-4" />
                    <h4 className="font-semibold text-foreground text-lg" data-testid={`sustainability-feature-title-${index}`}>
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground" data-testid={`sustainability-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Timeline Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Development Timeline & Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Phased development approach minimizes risk while building sustainable tourism operation
            </p>
          </div>

          <div className="space-y-8">
            {developmentPhases.map((phase, index) => (
              <Card key={phase.phase} className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {phase.phase}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground" data-testid={`development-phase-title-${index}`}>
                        {phase.title}
                      </h3>
                      <div className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0">
                        <Badge variant="outline" className="text-accent border-accent mb-2 md:mb-0">
                          {phase.duration}
                        </Badge>
                        <Badge variant="outline" className="text-primary border-primary">
                          {phase.investment}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground" data-testid={`development-phase-description-${index}`}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Eco Lodge Investment Inquiry
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Contact us for detailed feasibility studies, development timelines, and partnership opportunities
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Phone className="text-primary text-2xl mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+64 27 123 4567</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="text-primary text-2xl mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">andy@nurseproperty.co.nz</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="text-primary text-2xl mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Kaikoura, New Zealand</p>
            </Card>
          </div>

          <Button 
            size="lg"
            className="floating-green-btn"
            data-testid="contact-eco-lodge-button"
          >
            Request Development Information
          </Button>
        </div>
      </section>
    </div>
  );
}