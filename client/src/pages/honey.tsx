import { useEffect } from "react";
import { Flower2, Droplets, Heart, Shield, Star, TreePine, MapPin, Phone, Mail, Award, Beaker, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import manukaFlowersImage1 from "@assets/stock_images/manuka_flowers_honey_859306ad.jpg";
import manukaFlowersImage2 from "@assets/stock_images/manuka_flowers_honey_57a5a89b.jpg";
import beehivesImage1 from "@assets/stock_images/beehives_honey_bee_f_e4c67446.jpg";
import beehivesImage2 from "@assets/stock_images/beehives_honey_bee_f_a6c82ccb.jpg";
import honeyJarsImage1 from "@assets/stock_images/honey_jars_productio_2f10a520.jpg";
import honeyJarsImage2 from "@assets/stock_images/honey_jars_productio_08c8d0e1.jpg";

export default function Honey() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Kaikoura Native Bush Honey Production | Premium New Zealand Honey | Wairimu Station";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Kaikoura\'s premium Native Bush honey production. Learn about sustainable beekeeping, health benefits, and the unique environment that creates world-class New Zealand honey.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Discover Kaikoura\'s premium Native Bush honey production. Learn about sustainable beekeeping, health benefits, and the unique environment that creates world-class New Zealand honey.';
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

  const manukaGrades = [
    {
      grade: "UMF 5+",
      description: "Mild therapeutic activity, everyday consumption",
      uses: "Daily wellness, culinary use",
      color: "text-green-600 border-green-600"
    },
    {
      grade: "UMF 10+",
      description: "Moderate therapeutic activity",
      uses: "Immune support, wound care",
      color: "text-yellow-600 border-yellow-600"
    },
    {
      grade: "UMF 15+",
      description: "High therapeutic activity",
      uses: "Digestive health, skin conditions",
      color: "text-orange-600 border-orange-600"
    },
    {
      grade: "UMF 20+",
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

  const productionSteps = [
    {
      step: 1,
      title: "Manuka Forest Management",
      description: "Sustainable management of native Manuka forests in pristine Kaikoura environment",
      season: "Year-round forest care"
    },
    {
      step: 2,
      title: "Hive Placement",
      description: "Strategic placement of beehives near Manuka trees during flowering season",
      season: "Spring preparation (September-November)"
    },
    {
      step: 3,
      title: "Honey Collection",
      description: "Careful harvesting when Manuka nectar concentration is optimal",
      season: "Summer harvest (December-February)"
    },
    {
      step: 4,
      title: "Testing & Grading",
      description: "Rigorous laboratory testing for UMF levels and purity standards",
      season: "Post-harvest processing"
    },
    {
      step: 5,
      title: "Processing & Packaging",
      description: "Minimal processing to preserve natural properties and beneficial compounds",
      season: "Year-round operations"
    }
  ];

  const kaikouraAdvantages = [
    {
      icon: TreePine,
      title: "Pristine Environment",
      description: "Pollution-free coastal environment with abundant native Manuka forests",
      highlight: "No industrial contamination"
    },
    {
      icon: MapPin,
      title: "Ideal Climate",
      description: "Temperate maritime climate perfect for Manuka flower production",
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

  const qualityStandards = [
    "UMF (Unique Manuka Factor) certified testing",
    "New Zealand Ministry for Primary Industries compliance",
    "Monofloral Manuka honey verification",
    "Heavy metal and pesticide testing",
    "Moisture content and HMF level monitoring",
    "DNA authentication for source verification"
  ];

  const honeyStats = [
    { label: "UMF Rating", value: "5+ to 20+", description: "Therapeutic activity levels", icon: Star },
    { label: "Annual Production", value: "150+ tons", description: "Kaikoura region output", icon: Droplets },
    { label: "Active Beekeepers", value: "25+", description: "Licensed local operators", icon: MapPin },
    { label: "Manuka Forest", value: "2,000 ha", description: "Native flowering area", icon: TreePine }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(${manukaFlowersImage1})`
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="honey-hero-title">
            Kaikoura Native Bush Honey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="honey-hero-description">
            Premium New Zealand honey from pristine coastal forests, where native Manuka flowers create liquid gold
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("benefits")}
              size="lg"
              className="floating-green-btn"
              data-testid="hero-benefits-button"
            >
              <Heart className="mr-2 h-5 w-5" />
              Health Benefits
            </Button>
            <Button 
              onClick={() => navigateToSection("production")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="hero-production-button"
            >
              <Beaker className="mr-2 h-5 w-5" />
              Production Process
            </Button>
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
              Nestled between mountains and sea, Kaikoura's unique environment produces some of the world's finest Manuka honey, 
              treasured for its exceptional therapeutic properties and distinctive flavor
            </p>
          </div>

          {/* Honey Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {honeyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="text-primary text-3xl mb-4 mx-auto" />
                    <div className="text-3xl font-bold text-foreground mb-2" data-testid={`honey-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
                What Makes Manuka Honey Special?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Manuka honey is derived exclusively from the nectar of New Zealand's native Manuka tree (Leptospermum scoparium). 
                This extraordinary honey contains unique compounds like methylglyoxal (MGO) that give it powerful therapeutic properties 
                not found in regular honey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    Monofloral Manuka honey certification
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-accent border-accent">
                    UMF grading system verification
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    Sustainable wild-harvested nectar
                  </Badge>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={manukaFlowersImage2}
                alt="Native Manuka flowers in bloom showing the source of premium New Zealand honey with therapeutic properties" 
                className="w-full h-full object-cover"
                data-testid="honey-overview-manuka-image"
              />
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
              Scientifically proven health benefits that have made Manuka honey a trusted natural remedy worldwide
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
              UMF Grading System
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              The Unique Manuka Factor (UMF) rating system measures the therapeutic potency of Manuka honey
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {manukaGrades.map((grade, index) => (
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

      {/* Production Process Section */}
      <section id="production" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sustainable Production Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From forest to jar: our commitment to sustainable beekeeping and premium quality honey production
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {productionSteps.map((step, index) => (
              <Card key={step.step} className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground" data-testid={`production-step-title-${index}`}>
                        {step.title}
                      </h3>
                      <Badge variant="outline" className="text-accent border-accent mt-2 md:mt-0">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.season}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground" data-testid={`production-step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={beehivesImage1}
                alt="Professional beehives positioned in Kaikoura's pristine environment for sustainable Manuka honey production" 
                className="w-full h-full object-cover"
                data-testid="production-beehives-image"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={honeyJarsImage1}
                alt="Premium Manuka honey jars showcasing the final product of sustainable beekeeping practices" 
                className="w-full h-full object-cover"
                data-testid="production-honey-jars-image"
              />
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
              Why Kaikoura's unique environment produces exceptional Manuka honey
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
                alt="Beehives nestled in Kaikoura's coastal forest environment showing ideal conditions for honey production" 
                className="w-full h-full object-cover"
                data-testid="kaikoura-environment-image"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={honeyJarsImage2}
                alt="Artisanal honey production showcasing the quality and care that goes into every jar of Kaikoura honey" 
                className="w-full h-full object-cover"
                data-testid="kaikoura-honey-quality-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Quality Assurance & Standards
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every jar of Kaikoura Manuka honey meets the highest international standards for purity, 
                potency, and authenticity through rigorous testing and certification processes.
              </p>
              <ul className="space-y-4">
                {qualityStandards.map((standard, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`quality-standard-${index}`}>
                    <Award className="text-primary text-lg mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Industry Certifications
                </h3>
                <div className="space-y-3">
                  <Badge variant="outline" className="text-primary border-primary block w-fit">
                    UMF Honey Association Licensed
                  </Badge>
                  <Badge variant="outline" className="text-accent border-accent block w-fit">
                    MPI Export Certified
                  </Badge>
                  <Badge variant="outline" className="text-primary border-primary block w-fit">
                    ISO 17025 Laboratory Tested
                  </Badge>
                  <Badge variant="outline" className="text-accent border-accent block w-fit">
                    Organic & Sustainable Practices
                  </Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Testing Parameters
                </h3>
                <p className="text-muted-foreground text-sm">
                  Every batch undergoes comprehensive laboratory analysis including MGO content, 
                  DHA levels, HMF testing, moisture content, and DNA authentication to ensure 
                  genuine Manuka honey from verified sources.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Connect with Kaikoura Honey Producers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about our sustainable honey production, wholesale opportunities, 
              or investment in local beekeeping operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <Phone className="text-primary text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Phone Inquiry</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our honey production team</p>
              <Button variant="outline" className="w-full" data-testid="contact-phone-button">
                Call +64 3 319 5641
              </Button>
            </Card>

            <Card className="text-center p-8">
              <Mail className="text-primary text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Email Contact</h3>
              <p className="text-muted-foreground mb-4">Detailed inquiries and wholesale information</p>
              <Button variant="outline" className="w-full" data-testid="contact-email-button">
                honey@wairimustation.com
              </Button>
            </Card>

            <Card className="text-center p-8">
              <MapPin className="text-primary text-3xl mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Visit Our Apiaries</h3>
              <p className="text-muted-foreground mb-4">Guided tours during honey season</p>
              <Button 
                onClick={() => {
                  // Navigate to contact section on home page
                  window.location.href = "/#contact";
                }}
                variant="outline" 
                className="w-full" 
                data-testid="contact-visit-button"
              >
                Schedule Visit
              </Button>
            </Card>
          </div>

          <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Investment Opportunities
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in investing in sustainable honey production and beekeeping operations? 
              Kaikoura's growing honey industry offers compelling opportunities for environmentally conscious investors.
            </p>
            <Button
              onClick={() => {
                window.location.href = "/#investment";
              }}
              size="lg"
              className="floating-green-btn"
              data-testid="honey-investment-button"
            >
              <Droplets className="mr-2 h-5 w-5" />
              Explore Investment Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}