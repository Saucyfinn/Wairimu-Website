import { useEffect } from "react";
import { Wheat, BarChart3, Calendar, TrendingUp, Users, Leaf, MapPin, DollarSign, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import pastoralImage1 from "@assets/w1_1758155810309.jpg";
import pastoralImage2 from "@assets/w2_1758155810310.jpg";
import pastoralImage3 from "@assets/w3_1758152454450.jpg";

export default function Grazing() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Grazing & Pastoral Opportunities - Wairimu Station | Kaikoura Agricultural Investment";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover pastoral farming opportunities at Wairimu Station. 400+ hectares of quality grazing land with established infrastructure and flexible lease arrangements in Kaikoura.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Discover pastoral farming opportunities at Wairimu Station. 400+ hectares of quality grazing land with established infrastructure and flexible lease arrangements in Kaikoura.';
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

  const landBreakdown = [
    {
      type: "Prime Pasture",
      area: "280 hectares",
      description: "High-quality grazing land suitable for cattle or sheep farming",
      soilType: "Free-draining coastal soils",
      stockingRate: "8-12 stock units/hectare"
    },
    {
      type: "Hill Country",
      area: "150 hectares",
      description: "Rolling hills ideal for extensive grazing systems",
      soilType: "Well-drained hill soils",
      stockingRate: "4-8 stock units/hectare"
    },
    {
      type: "Development Land",
      area: "210 hectares",
      description: "Potential for improvement through cultivation and fertilizer",
      soilType: "Mixed coastal and hill soils",
      stockingRate: "6-10 stock units/hectare (post-development)"
    }
  ];

  const revenueModels = [
    {
      model: "Grazing Lease",
      description: "Long-term lease arrangements with established farmers",
      revenueRange: "$120-180/hectare annually",
      minimumTerm: "3-5 year agreements",
      advantages: ["Stable income stream", "Tenant maintains land", "Flexible arrangements"]
    },
    {
      model: "Share Farming",
      description: "Partnership arrangements sharing costs and returns",
      revenueRange: "50-70% of gross income",
      minimumTerm: "5+ year partnerships",
      advantages: ["Shared risk/reward", "Active involvement option", "Higher potential returns"]
    },
    {
      model: "Contract Grazing",
      description: "Short-term grazing for external livestock owners",
      revenueRange: "$2-4/head/week",
      minimumTerm: "Seasonal contracts",
      advantages: ["Flexible timing", "Premium rates", "Land improvement"]
    }
  ];

  const existingInfrastructure = [
    {
      infrastructure: "Fencing",
      condition: "Good to Excellent",
      description: "Well-maintained boundary and internal fencing systems",
      recentWorks: "70% renewed in last 5 years"
    },
    {
      infrastructure: "Water Systems",
      condition: "Excellent",
      description: "Multiple water sources including streams and troughs",
      recentWorks: "Upgraded reticulation system"
    },
    {
      infrastructure: "Farm Tracks",
      condition: "Good",
      description: "All-weather access throughout property",
      recentWorks: "Recent grading and drainage"
    },
    {
      infrastructure: "Livestock Handling",
      description: "Traditional yards suitable for basic operations",
      condition: "Fair",
      recentWorks: "Modernization opportunity"
    }
  ];

  const grazingStats = [
    { 
      label: "Total Grazing Area", 
      value: "430 hectares", 
      description: "Available for pastoral use", 
      icon: Wheat 
    },
    { 
      label: "Carrying Capacity", 
      value: "2,500-3,200", 
      description: "Stock units potential", 
      icon: Users 
    },
    { 
      label: "Annual Rainfall", 
      value: "900-1,200mm", 
      description: "Reliable precipitation", 
      icon: Calendar 
    },
    { 
      label: "Growing Season", 
      value: "10-11 months", 
      description: "Extended productive period", 
      icon: TrendingUp 
    }
  ];

  const developmentOpportunities = [
    {
      opportunity: "Pasture Improvement",
      investment: "$800-1,200/hectare",
      returns: "30-50% increase in carrying capacity",
      timeframe: "2-3 years to full benefit",
      description: "Cultivation, re-seeding, and fertilizer programs on development blocks"
    },
    {
      opportunity: "Water Infrastructure",
      investment: "$25,000-40,000",
      returns: "Improved stock performance and land utilization",
      timeframe: "Immediate benefits",
      description: "Additional troughs, tank storage, and reticulation expansion"
    },
    {
      opportunity: "Livestock Facilities",
      investment: "$50,000-80,000",
      returns: "Premium lease rates and operational efficiency",
      timeframe: "1-2 years payback",
      description: "Modern yards, loading ramps, and shelter infrastructure"
    },
    {
      opportunity: "Subdivision Potential",
      investment: "$15,000-25,000",
      returns: "Flexible lease arrangements and better management",
      timeframe: "Enhanced long-term value",
      description: "Internal fencing to create smaller management units"
    }
  ];

  const seasonalManagement = [
    {
      season: "Spring (Sep-Nov)",
      activities: "Peak growing season, breeding programs, pasture management",
      stockingRate: "Maximum capacity",
      considerations: "Monitor grass growth rates, implement rotation systems"
    },
    {
      season: "Summer (Dec-Feb)",
      activities: "Harvest surplus feed, maintain water systems, shade management",
      stockingRate: "Reduced density on dry blocks",
      considerations: "Drought contingency plans, supplementary feeding"
    },
    {
      season: "Autumn (Mar-May)",
      activities: "Stock sales, breeding decisions, fertilizer applications",
      stockingRate: "Moderate levels",
      considerations: "Soil testing, winter feed preparation"
    },
    {
      season: "Winter (Jun-Aug)",
      activities: "Maintain stock condition, infrastructure maintenance, planning",
      stockingRate: "Minimal on wet areas",
      considerations: "Pugging prevention, animal welfare, feed quality"
    }
  ];

  const marketFactors = [
    {
      factor: "Regional Agriculture",
      description: "Kaikoura region known for quality livestock and agricultural products",
      impact: "Premium positioning for produce"
    },
    {
      factor: "Tourism Integration",
      description: "Agri-tourism opportunities complement existing tourism market",
      impact: "Additional revenue streams"
    },
    {
      factor: "Organic Potential",
      description: "Clean environment suitable for organic certification",
      impact: "Premium pricing opportunities"
    },
    {
      factor: "Processing Access",
      description: "Proximity to Christchurch and local processing facilities",
      impact: "Reduced transport costs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(${pastoralImage1})`
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="grazing-hero-title">
            Grazing & Pastoral Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="grazing-hero-description">
            430 hectares of quality grazing land with established infrastructure, offering flexible farming partnerships and sustainable income streams
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("land-breakdown")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="hero-land-button"
            >
              <Wheat className="mr-2 h-5 w-5" />
              Land Details
            </Button>
            <Button 
              onClick={() => navigateToSection("revenue-models")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="hero-revenue-button"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Revenue Models
            </Button>
          </div>
        </div>
      </section>

      {/* Grazing Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quality Pastoral Land
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wairimu Station's diverse topography and established infrastructure create ideal conditions for sustainable pastoral farming
            </p>
          </div>

          {/* Grazing Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {grazingStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="text-primary text-3xl mb-4 mx-auto" />
                    <div className="text-3xl font-bold text-foreground mb-2" data-testid={`grazing-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {stat.value}
                    </div>
                    <div className="font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-foreground">
                Established Pastoral Operation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 430 hectares of grazing land, Wairimu Station offers exceptional opportunities for livestock farming. 
                The property's diverse topography, reliable rainfall, and existing infrastructure create an ideal foundation 
                for both traditional and innovative farming operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    Established fencing and water systems
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-accent border-accent">
                    2,500-3,200 stock unit capacity
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    Flexible lease arrangements available
                  </Badge>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={pastoralImage2}
                alt="Quality grazing pastures at Wairimu Station showing the diverse topography suitable for livestock farming" 
                className="w-full h-full object-cover"
                data-testid="grazing-overview-pasture-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Land Breakdown Section */}
      <section id="land-breakdown" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Land Classification & Utilization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse land types provide flexibility for different farming systems and stock management approaches
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {landBreakdown.map((land, index) => (
              <Card key={land.type} className="p-6">
                <div className="grid lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`land-type-title-${index}`}>
                      {land.type}
                    </h3>
                    <div className="text-2xl font-bold text-primary">{land.area}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground" data-testid={`land-description-${index}`}>
                      {land.description}
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Soil Type</div>
                    <div className="font-medium">{land.soilType}</div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Stocking Rate</div>
                    <Badge variant="outline" className="text-xs">{land.stockingRate}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={pastoralImage3}
              alt="Aerial view of Wairimu Station showing the diverse land types and pastoral opportunities across the property" 
              className="w-full h-full object-cover"
              data-testid="land-breakdown-aerial-image"
            />
          </div>
        </div>
      </section>

      {/* Revenue Models Section */}
      <section id="revenue-models" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Flexible Revenue Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple partnership structures accommodate different risk profiles and involvement levels for pastoral income
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {revenueModels.map((model, index) => (
              <Card key={model.model} className="p-6 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground" data-testid={`revenue-model-title-${index}`}>
                    {model.model}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">{model.revenueRange}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground" data-testid={`revenue-model-description-${index}`}>
                    {model.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Minimum Term:</div>
                    <Badge variant="outline" className="text-accent border-accent">
                      {model.minimumTerm}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Key Advantages:</div>
                    <ul className="space-y-1">
                      {model.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="flex items-center text-sm" data-testid={`revenue-advantage-${index}-${advIndex}`}>
                          <Leaf className="text-primary w-3 h-3 mr-2 flex-shrink-0" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Existing Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Well-maintained farm infrastructure reduces operational costs and provides immediate farming capability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {existingInfrastructure.map((item, index) => (
              <Card key={item.infrastructure} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`infrastructure-title-${index}`}>
                    {item.infrastructure}
                  </h3>
                  <Badge variant="outline" className="text-primary border-primary">
                    {item.condition}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`infrastructure-description-${index}`}>
                  {item.description}
                </p>
                <div className="text-sm text-accent">{item.recentWorks}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Opportunities Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Development Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic improvements can significantly enhance carrying capacity and operational efficiency
            </p>
          </div>

          <div className="space-y-6">
            {developmentOpportunities.map((opportunity, index) => (
              <Card key={opportunity.opportunity} className="p-6">
                <div className="grid lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`development-opportunity-title-${index}`}>
                      {opportunity.opportunity}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`development-opportunity-description-${index}`}>
                      {opportunity.description}
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Investment</div>
                    <div className="font-bold text-primary">{opportunity.investment}</div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Returns</div>
                    <div className="font-medium">{opportunity.returns}</div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Timeframe</div>
                    <Badge variant="outline" className="text-xs">{opportunity.timeframe}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Management Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Seasonal Management Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Year-round management approach optimizes pasture utilization and livestock performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seasonalManagement.map((season, index) => (
              <Card key={season.season} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`seasonal-management-title-${index}`}>
                  {season.season}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Key Activities</div>
                    <p className="text-sm" data-testid={`seasonal-activities-${index}`}>{season.activities}</p>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Stocking Rate</div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {season.stockingRate}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Considerations</div>
                    <p className="text-sm text-muted-foreground" data-testid={`seasonal-considerations-${index}`}>
                      {season.considerations}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Factors Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Market Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regional factors and location advantages enhance the value proposition for pastoral farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketFactors.map((factor, index) => (
              <Card key={factor.factor} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`market-factor-title-${index}`}>
                  {factor.factor}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`market-factor-description-${index}`}>
                  {factor.description}
                </p>
                <Badge variant="outline" className="text-accent border-accent">
                  {factor.impact}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Grazing Partnership Inquiry
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Contact us to discuss pastoral lease opportunities, partnership arrangements, and agricultural development potential
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
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="contact-grazing-button"
          >
            Request Pastoral Information
          </Button>
        </div>
      </section>
    </div>
  );
}