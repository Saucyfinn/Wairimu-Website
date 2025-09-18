import { useEffect } from "react";
import { Trees, TreePine, Target, ShieldCheck, DollarSign, BarChart3, Calendar, TrendingUp, MapPin, Phone, Mail, Leaf, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import forestImage1 from "@assets/w1_1758155810309.jpg";
import forestImage2 from "@assets/w2_1758155810310.jpg";
import forestImage3 from "@assets/w3_1758152454450.jpg";

export default function Forestry() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Forestry Investment Opportunities - Wairimu Station | Kaikoura Sustainable Forestry";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover sustainable forestry investment opportunities at Wairimu Station. Premium timber production, environmental benefits, and long-term asset appreciation in Kaikoura, New Zealand.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Discover sustainable forestry investment opportunities at Wairimu Station. Premium timber production, environmental benefits, and long-term asset appreciation in Kaikoura, New Zealand.';
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

  const forestComposition = [
    {
      type: "Radiata Pine Plantation",
      area: "150 hectares",
      description: "Commercial grade pine forest with excellent growth rates and timber quality",
      ageRange: "5-25 years",
      harvestProjection: "2030-2045"
    },
    {
      type: "Native Forest Reserve",
      area: "300 hectares",
      description: "Protected indigenous forest providing biodiversity conservation and carbon storage",
      ageRange: "Mixed mature growth",
      harvestProjection: "Conservation only"
    },
    {
      type: "Future Development",
      area: "100 hectares",
      description: "Available land suitable for additional forestry plantations or selective planting",
      ageRange: "Potential plantings",
      harvestProjection: "2035-2055"
    }
  ];

  const investmentAdvantages = [
    {
      icon: DollarSign,
      title: "Long-term Asset Appreciation",
      description: "Forestry investments typically provide stable returns over 15-30 year cycles",
      benefit: "Inflation-hedged returns"
    },
    {
      icon: TrendingUp,
      title: "Timber Market Growth",
      description: "Global demand for sustainable timber continues to increase with housing market expansion",
      benefit: "Growing market demand"
    },
    {
      icon: ShieldCheck,
      title: "Environmental Benefits",
      description: "Forest investments provide carbon sequestration and biodiversity conservation benefits",
      benefit: "ESG investment compliance"
    },
    {
      icon: Trees,
      title: "Diversification Asset",
      description: "Forestry provides portfolio diversification with low correlation to traditional assets",
      benefit: "Risk mitigation strategy"
    }
  ];

  const managementPractices = [
    "Sustainable harvesting rotations",
    "Pest and disease monitoring",
    "Fire prevention and management",
    "Soil health maintenance programs",
    "Wildlife habitat preservation",
    "Access road maintenance and development"
  ];

  const forestryStats = [
    { 
      label: "Total Forest Area", 
      value: "550 hectares", 
      description: "Across all forest types", 
      icon: Trees 
    },
    { 
      label: "Mature Timber Volume", 
      value: "85,000 m³", 
      description: "Harvestable pine timber", 
      icon: BarChart3 
    },
    { 
      label: "Annual Growth Rate", 
      value: "18-25 m³/ha", 
      description: "Per hectare productivity", 
      icon: TrendingUp 
    },
    { 
      label: "Harvest Timeline", 
      value: "2030-2045", 
      description: "Primary harvest window", 
      icon: Calendar 
    }
  ];

  const revenueProjections = [
    {
      period: "2025-2030",
      timberHarvest: "Selective thinning operations",
      projectedRevenue: "$150,000-250,000",
      notes: "Early thinning and quality improvement"
    },
    {
      period: "2030-2040",
      timberHarvest: "Major harvest cycles begin",
      projectedRevenue: "$2.5M-4.2M",
      notes: "Primary mature timber harvest"
    },
    {
      period: "2040-2050",
      timberHarvest: "Second rotation establishment",
      projectedRevenue: "$3.8M-6.5M",
      notes: "Full maturity harvest and replanting"
    }
  ];

  const sustainabilityFeatures = [
    {
      feature: "FSC Certification Eligible",
      description: "Management practices meet Forest Stewardship Council standards",
      impact: "Premium timber pricing"
    },
    {
      feature: "Biodiversity Conservation",
      description: "Native forest reserves and wildlife corridors maintained",
      impact: "Environmental compliance"
    },
    {
      feature: "Carbon Neutral Operations",
      description: "Forest growth offsets all operational carbon emissions",
      impact: "Climate positive investment"
    },
    {
      feature: "Water Quality Protection",
      description: "Riparian buffers and erosion control systems",
      impact: "Watershed preservation"
    }
  ];

  const marketFactors = [
    {
      factor: "Construction Demand",
      description: "Growing housing market drives structural timber demand",
      trend: "Increasing"
    },
    {
      factor: "Export Opportunities",
      description: "New Zealand timber exports to Asia-Pacific markets",
      trend: "Strong growth"
    },
    {
      factor: "Sustainable Sourcing",
      description: "Corporate buyers prioritizing certified sustainable timber",
      trend: "Premium pricing"
    },
    {
      factor: "Processing Infrastructure",
      description: "Regional sawmills and processing facilities nearby",
      trend: "Cost competitive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(${forestImage1})`
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="forestry-hero-title">
            Sustainable Forestry Investment
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="forestry-hero-description">
            550 hectares of premium forest land offering sustainable timber production and long-term asset appreciation in New Zealand's pristine environment
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("forest-composition")}
              size="lg"
              className="floating-green-btn"
              data-testid="hero-composition-button"
            >
              <Trees className="mr-2 h-5 w-5" />
              Forest Overview
            </Button>
            <Button 
              onClick={() => navigateToSection("investment-returns")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="hero-returns-button"
            >
              <Target className="mr-2 h-5 w-5" />
              Investment Returns
            </Button>
          </div>
        </div>
      </section>

      {/* Forestry Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium Forest Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wairimu Station's diverse forest portfolio combines commercial timber production with environmental stewardship for sustainable long-term returns
            </p>
          </div>

          {/* Forestry Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {forestryStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="text-primary text-3xl mb-4 mx-auto" />
                    <div className="text-3xl font-bold text-foreground mb-2" data-testid={`forestry-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
                Sustainable Forest Management
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our forestry operations balance commercial timber production with environmental responsibility. 
                The diverse forest portfolio includes established pine plantations, protected native reserves, and 
                development opportunities, creating multiple revenue streams while maintaining ecological integrity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    FSC certification eligible
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-accent border-accent">
                    25-year harvest rotation
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    Sustainable yield management
                  </Badge>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={forestImage2}
                alt="Mature pine forest at Wairimu Station showing sustainable forestry management practices" 
                className="w-full h-full object-cover"
                data-testid="forestry-overview-forest-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forest Composition Section */}
      <section id="forest-composition" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Forest Portfolio Composition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diversified forest assets provide multiple revenue streams and risk mitigation across different harvest cycles
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {forestComposition.map((forest, index) => (
              <Card key={forest.type} className="p-6">
                <div className="grid lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`forest-type-title-${index}`}>
                      {forest.type}
                    </h3>
                    <div className="text-2xl font-bold text-primary">{forest.area}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground" data-testid={`forest-description-${index}`}>
                      {forest.description}
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Age Range</div>
                    <div className="font-medium">{forest.ageRange}</div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-sm text-muted-foreground mb-1">Harvest Projection</div>
                    <Badge variant="outline" className="text-xs">{forest.harvestProjection}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={forestImage3}
              alt="Aerial view of Wairimu Station forest showing diverse composition of pine plantation and native forest" 
              className="w-full h-full object-cover"
              data-testid="forest-composition-aerial-image"
            />
          </div>
        </div>
      </section>

      {/* Investment Advantages Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Forestry Investment Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple benefits make forestry an attractive addition to any investment portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentAdvantages.map((advantage, index) => {
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
                      {advantage.benefit}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Returns Section */}
      <section id="investment-returns" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projected Investment Returns
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conservative timber harvest projections based on current growth rates and market conditions
            </p>
          </div>

          <div className="space-y-6">
            {revenueProjections.map((projection, index) => (
              <Card key={projection.period} className="p-6">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`projection-period-${index}`}>
                      {projection.period}
                    </h3>
                    <div className="text-2xl font-bold text-primary">{projection.projectedRevenue}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="text-sm text-muted-foreground mb-1">Harvest Activity</div>
                    <div className="font-medium">{projection.timberHarvest}</div>
                  </div>
                  <div className="lg:col-span-1">
                    <Badge variant="outline" className="text-xs">{projection.notes}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sustainability & Environmental Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Environmental stewardship practices ensure long-term forest health and positive ecological impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <Card key={feature.feature} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`sustainability-feature-${index}`}>
                  {feature.feature}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`sustainability-description-${index}`}>
                  {feature.description}
                </p>
                <Badge variant="outline" className="text-accent border-accent">
                  {feature.impact}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Timber Market Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strong market fundamentals support positive long-term outlook for timber investments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketFactors.map((factor, index) => (
              <Card key={factor.factor} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`market-factor-${index}`}>
                    {factor.factor}
                  </h3>
                  <Badge variant="outline" className="text-primary border-primary">
                    {factor.trend}
                  </Badge>
                </div>
                <p className="text-muted-foreground" data-testid={`market-description-${index}`}>
                  {factor.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Forestry Investment Inquiry
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Contact us for detailed forest valuations, harvest projections, and investment partnership opportunities
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
            data-testid="contact-forestry-button"
          >
            Request Forestry Investment Information
          </Button>
        </div>
      </section>
    </div>
  );
}