import { useEffect } from "react";
import { Leaf, TreePine, Target, ShieldCheck, DollarSign, FileCheck, Globe, TrendingUp, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import forestImage1 from "@assets/w1_1758155810309.jpg";
import forestImage2 from "@assets/w2_1758155810310.jpg";
import forestImage3 from "@assets/w3_1758152454450.jpg";

export default function CarbonCredits() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Carbon Credits & ETS - Wairimu Station | Kaikoura Forest Carbon Sequestration";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Wairimu Station\'s established carbon credit through the ETS scheme. 215.5 hectares of forest generating verified carbon credits.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Discover Wairimu Station\'s established carbon credit through the ETS scheme. 215.5 hectares of forest generating verified carbon credits.';
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
      type: "Indigenous Bush",
      area: "215 hectares of forest",
      description: "Native New Zealand forest providing long-term carbon storage",
      ageRange: "Mixed ages",
      carbonRate: "3-6 tonnes CO2/ha/year"
    }
  ];

  const etsAdvantages = [
    {
      icon: DollarSign,
      title: "Established Carbon Credits",
      description: "Generating verified carbon credits under New Zealand's ETS since registration",
      benefit: "Proven track record"
    },
    {
      icon: TrendingUp,
      title: "Growing Market Value",
      description: "Carbon credit prices trending upward with increasing global climate commitments",
      benefit: "Appreciating asset value"
    },
    {
      icon: ShieldCheck,
      title: "Government Backed",
      description: "New Zealand ETS provides regulatory certainty and long-term market stability",
      benefit: "Low investment risk"
    },
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Directly contributing to global carbon reduction and climate change mitigation",
      benefit: "Positive environmental legacy"
    }
  ];

  const complianceStandards = [
    "New Zealand Emissions Trading Scheme (ETS) registered",
    "Ministry for Primary Industries oversight",
    "Annual forest measurement and reporting",
    "Verified carbon stock assessments",
    "Climate Change Commission approved methodologies",
    "International carbon accounting standards compliance"
  ];



  const managementPractices = [
    {
      practice: "Forest Health Monitoring",
      description: "Regular assessments of tree health, growth rates, and forest composition",
      frequency: "Quarterly site visits"
    },
    {
      practice: "Pest and Weed Control",
      description: "Integrated management of invasive species to maintain forest productivity",
      frequency: "Ongoing as required"
    },
    {
      practice: "Fire Risk Management",
      description: "Firebreaks maintenance and emergency response planning",
      frequency: "Annual preparation"
    },
    {
      practice: "ETS Compliance Reporting",
      description: "Detailed documentation and reporting to meet ETS requirements",
      frequency: "Annual submissions"
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
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="carbon-hero-title">
            Carbon Credits at Wairimu Station
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="carbon-hero-description">
            Established carbon credit through New Zealand's ETS scheme, with 215.5 hectares of registered forest generating verified carbon credits
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("ets-overview")}
              size="lg"
              className="floating-green-btn"
              data-testid="hero-ets-button"
            >
              <Target className="mr-2 h-5 w-5" />
              ETS Overview
            </Button>
          </div>
        </div>
      </section>

      {/* Carbon Credits Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proven Carbon Credit Generation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wairimu Station's established carbon credit portfolio provides verified forest carbon sequestration under the ETS scheme
            </p>
          </div>


          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-foreground">
                New Zealand Emissions Trading Scheme
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The New Zealand ETS is the government's main tool for reducing greenhouse gas emissions. 
                Wairimu Station's 215.5 hectares of registered forest land generates New Zealand Units (NZUs) 
                through verified carbon sequestration, with established credits and strong growth potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-accent border-accent">
                    Government verified credits
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    Immediate tradeable credits
                  </Badge>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={forestImage2}
                alt="Dense native forest at Wairimu Station contributing to carbon sequestration and ETS credits" 
                className="w-full h-full object-cover"
                data-testid="carbon-overview-forest-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forest Composition Section */}
      <section id="ets-overview" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Forest Composition & Carbon Potential
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two distinct forest types provide diversified carbon sequestration with different growth patterns and carbon credit timelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {forestComposition.map((forest, index) => (
              <Card key={forest.type} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground" data-testid={`forest-type-title-${index}`}>
                    {forest.type}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">{forest.area}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground" data-testid={`forest-description-${index}`}>
                    {forest.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Age Range:</span>
                      <span className="text-sm font-medium">{forest.ageRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Carbon Rate:</span>
                      <span className="text-sm font-medium text-primary">{forest.carbonRate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={forestImage3}
              alt="Aerial view of Wairimu Station showing the diverse forest composition including pine plantation and native bush" 
              className="w-full h-full object-cover"
              data-testid="forest-composition-aerial-image"
            />
          </div>
        </div>
      </section>

      {/* ETS Advantages Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              ETS Investment Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple benefits make carbon credits an attractive component of Wairimu Station's investment portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {etsAdvantages.map((advantage, index) => {
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



      {/* Compliance Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Compliance & Verification
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full compliance with New Zealand ETS requirements ensures verified and tradeable carbon credits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="p-6 text-center">
                <FileCheck className="text-primary text-2xl mb-4 mx-auto" />
                <p className="text-foreground font-medium" data-testid={`compliance-standard-${index}`}>
                  {standard}
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
            Carbon Credits Investment Inquiry
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Contact us for detailed carbon credit information, ETS documentation, and investment opportunities
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

        </div>
      </section>
    </div>
  );
}