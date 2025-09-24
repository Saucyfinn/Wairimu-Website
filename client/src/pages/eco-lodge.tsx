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
import VirtualTour360 from "@/components/360-virtual-tour";

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

  // Virtual tour scenes data - using placeholder panoramic images
  // Note: Replace with actual 360° panoramic images when available
  const virtualTourScenes = [
    {
      id: "lodge-overview",
      name: "Lodge Overview",
      description: "Panoramic view of the proposed eco-lodge site with mountain and coastal views",
      imageUrl: conceptImage1, // Placeholder - replace with 360° panoramic image
      hotspots: [
        {
          id: "mountain-view",
          position: { theta: 45, phi: 0 },
          title: "Mountain Views",
          description: "Spectacular Kaikoura mountain range backdrop for the eco-lodge",
          type: "info" as const
        },
        {
          id: "coastal-access",
          position: { theta: -45, phi: -10 },
          title: "Coastal Access",
          description: "Private beach access and marine wildlife viewing area",
          type: "info" as const
        },
        {
          id: "lodge-site",
          position: { theta: 0, phi: 15 },
          title: "Lodge Building Site",
          description: "Proposed location for the main lodge building at 520m elevation",
          targetScene: "building-platform",
          type: "navigation" as const
        }
      ]
    },
    {
      id: "building-platform",
      name: "Building Platform",
      description: "Detailed view of the proposed building platform and cabin locations",
      imageUrl: conceptImage2, // Placeholder - replace with 360° panoramic image
      hotspots: [
        {
          id: "cabin-locations",
          position: { theta: 90, phi: 0 },
          title: "Cabin Locations",
          description: "Proposed eco-cabin sites distributed across the natural landscape",
          type: "info" as const
        },
        {
          id: "sustainability-features",
          position: { theta: -90, phi: 10 },
          title: "Sustainability Features",
          description: "Solar panel locations, rainwater collection, and waste management areas",
          type: "info" as const
        },
        {
          id: "return-overview",
          position: { theta: 180, phi: 0 },
          title: "Return to Overview",
          description: "Navigate back to the main property overview",
          targetScene: "lodge-overview",
          type: "navigation" as const
        }
      ]
    },
    {
      id: "natural-environment",
      name: "Natural Environment",
      description: "Experience the pristine native forest and natural setting",
      imageUrl: conceptImage3, // Placeholder - replace with 360° panoramic image
      hotspots: [
        {
          id: "native-forest",
          position: { theta: 0, phi: 20 },
          title: "Native Bush",
          description: "Regenerating native forest that will be preserved and integrated with lodge design",
          type: "info" as const
        },
        {
          id: "wildlife-habitat",
          position: { theta: 120, phi: -15 },
          title: "Wildlife Habitat",
          description: "Natural habitat areas for native birds and wildlife viewing",
          type: "info" as const
        },
        {
          id: "walking-trails",
          position: { theta: -60, phi: 5 },
          title: "Nature Trails",
          description: "Proposed walking trails through the property for guest activities",
          type: "info" as const
        }
      ]
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

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={conceptImage2}
                alt="Conceptual view of eco-lodge placement within Wairimu Station's natural landscape" 
                className="w-full h-full object-cover"
                data-testid="concept-landscape-image"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={conceptImage3}
                alt="Scenic coastal and mountain views available to future eco-lodge guests" 
                className="w-full h-full object-cover"
                data-testid="concept-views-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 360° Virtual Tour Section */}
      <section id="virtual-tour" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              360° Virtual Property Tour
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore the proposed eco-lodge site through an immersive 360° virtual tour. Navigate between different viewpoints and discover key features of this exceptional development opportunity.
            </p>
          </div>
          
          <VirtualTour360 
            scenes={virtualTourScenes}
            initialScene="lodge-overview"
            className="max-w-6xl mx-auto"
          />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              <strong>Note:</strong> This virtual tour uses placeholder images to demonstrate the 360° functionality. 
              Professional 360° panoramic photography will be available to showcase the actual property views and proposed development areas.
            </p>
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