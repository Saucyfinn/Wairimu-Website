import { useEffect } from "react";
import { DollarSign, Clock, Globe, Users, CheckCircle, AlertTriangle, TrendingUp, MapPin, FileText, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Visa() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "New Zealand Active Investor Plus Visa | Official Guide & Requirements | Wairimu Station";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive guide to New Zealand\'s Active Investor Plus Visa program. Growth category: $5M NZD, Balanced category: $10M NZD. Path to permanent residency and citizenship.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Comprehensive guide to New Zealand\'s Active Investor Plus Visa program. Growth category: $5M NZD, Balanced category: $10M NZD. Path to permanent residency and citizenship.';
      document.head.appendChild(newMetaElement);
    }
    
    // Cleanup on unmount
    return () => {
      document.title = "Wairimu Station - Premium Forest Property Investment | Kaikoura, New Zealand";
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    // First check if the section exists on the current page
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to cross-page navigation for sections that don't exist locally
      window.location.href = `/#${sectionId}`;
    }
  };

  const investmentCategories = [
    {
      name: "Growth Category",
      amount: "$5 Million NZD",
      duration: "3 Years",
      presence: "21 Days Annually",
      description: "For high-growth investments focused on emerging sectors and innovation",
      color: "text-primary border-primary",
      benefits: [
        "Minimum 3-year investment period",
        "Focused on growth investments",
        "Reduced physical presence requirement",
        "Accelerated pathway to residency"
      ],
      eligibility: [
        "Demonstrate investment experience",
        "Commit to minimum 3-year period",
        "Maintain complying investments",
        "Meet physical presence requirements"
      ]
    },
    {
      name: "Balanced Category",
      amount: "$10 Million NZD",
      duration: "5 Years",
      presence: "105 Days (reducible)",
      description: "For diversified investments across multiple asset classes and sectors",
      color: "text-accent border-accent",
      benefits: [
        "Minimum 5-year investment period",
        "Flexible investment portfolio",
        "Reducible presence requirements",
        "Premium pathway to residency"
      ],
      eligibility: [
        "Higher investment threshold",
        "Longer commitment period",
        "Greater investment flexibility",
        "Potential presence reductions"
      ]
    }
  ];

  const programBenefits = [
    {
      icon: CheckCircle,
      title: "No English Language Requirements",
      description: "Eliminated as of 2025 policy updates",
      color: "text-green-600"
    },
    {
      icon: CheckCircle,
      title: "No Age Restrictions",
      description: "No maximum age limit for applicants",
      color: "text-green-600"
    },
    {
      icon: CheckCircle,
      title: "No Business Experience Required",
      description: "Removed requirement for prior business management experience",
      color: "text-green-600"
    },
    {
      icon: Globe,
      title: "Path to Citizenship",
      description: "Permanent residency leads to citizenship eligibility",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Family Inclusion",
      description: "Include spouse/partner and dependent children",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Investment Flexibility",
      description: "Multiple qualifying investment options available",
      color: "text-primary"
    }
  ];

  const programStats = [
    { label: "Total Applications", value: "308", description: "received since program launch", icon: FileText },
    { label: "Approvals", value: "39", description: "successful visa grants", icon: CheckCircle },
    { label: "Capital Committed", value: "$248.8M", description: "total investment committed", icon: DollarSign },
    { label: "Approval Rate", value: "12.7%", description: "of submitted applications", icon: TrendingUp }
  ];

  const investmentOptions = [
    "New Zealand government or local authority bonds",
    "Listed New Zealand companies on NZX",
    "New Zealand unit trusts and managed funds",
    "Direct investment in New Zealand businesses",
    "New Zealand residential property development (commercial scale)",
    "Philanthropic investments in approved areas"
  ];

  const taxAdvantages = [
    {
      title: "Non-Resident Tax Status",
      description: "Potential to maintain non-resident status for tax purposes with limited presence"
    },
    {
      title: "Investment Income",
      description: "Favorable tax treatment for certain types of investment income"
    },
    {
      title: "Capital Gains",
      description: "No general capital gains tax on most investments"
    },
    {
      title: "Double Tax Agreements",
      description: "New Zealand's extensive network of double tax agreements"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Expression of Interest",
      description: "Submit EOI with basic eligibility details",
      timeframe: "Immediate"
    },
    {
      step: 2,
      title: "Invitation to Apply",
      description: "Receive invitation if EOI meets criteria",
      timeframe: "Variable"
    },
    {
      step: 3,
      title: "Full Application",
      description: "Submit complete application with documentation",
      timeframe: "4 months to submit"
    },
    {
      step: 4,
      title: "Assessment & Decision",
      description: "Immigration assessment and decision",
      timeframe: "6-12 months"
    },
    {
      step: 5,
      title: "Investment Transfer",
      description: "Transfer funds and establish investments",
      timeframe: "12 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570735845169-94b6d75b7927?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="visa-hero-title">
            New Zealand Active Investor Plus Visa
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="visa-hero-description">
            Active Investor Plus Visa Program - Your pathway to New Zealand permanent residency through strategic investment
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("categories")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="hero-categories-button"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Investment Categories
            </Button>
            <Button 
              onClick={() => navigateToSection("benefits")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="hero-benefits-button"
            >
              <Globe className="mr-2 h-5 w-5" />
              Program Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Active Investor Plus Visa Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              New Zealand's premier investment immigration program offers a direct pathway to permanent residency 
              for high-net-worth individuals committed to significant investment in the country's economy
            </p>
          </div>

          {/* Program Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {programStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="text-primary text-3xl mb-4 mx-auto" />
                    <div className="text-3xl font-bold text-foreground mb-2" data-testid={`program-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {stat.value}
                    </div>
                    <div className="font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              The Active Investor Plus Visa replaced the Investor Plus Visa in 2022, introducing enhanced requirements 
              and streamlined benefits. Recent 2025 policy updates have eliminated English language, age, and business 
              experience requirements.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Investment Categories */}
      <section id="categories" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Investment Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose between two investment pathways based on your investment strategy and presence preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {investmentCategories.map((category, index) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-serif mb-2">{category.name}</CardTitle>
                  <div className="space-y-2">
                    <Badge variant="outline" className={`text-lg px-4 py-2 ${category.color}`}>
                      {category.amount}
                    </Badge>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <Clock className="text-primary text-xl mb-2 mx-auto" />
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold" data-testid={`category-duration-${index}`}>
                        {category.duration}
                      </div>
                    </div>
                    <div>
                      <MapPin className="text-primary text-xl mb-2 mx-auto" />
                      <div className="text-sm text-muted-foreground">Presence</div>
                      <div className="font-semibold" data-testid={`category-presence-${index}`}>
                        {category.presence}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2" data-testid={`category-benefit-${index}-${benefitIndex}`}>
                          <CheckCircle className="text-green-600 text-sm mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Eligibility Requirements</h4>
                    <ul className="space-y-2">
                      {category.eligibility.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2" data-testid={`category-requirement-${index}-${reqIndex}`}>
                          <Shield className="text-primary text-sm mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{requirement}</span>
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

      {/* Program Benefits */}
      <section id="benefits" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Program Benefits & Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recent policy updates have streamlined requirements while maintaining program integrity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={benefit.title} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 text-center">
                    <IconComponent className={`${benefit.color} text-3xl mb-4 mx-auto`} />
                    <h4 className="font-semibold text-foreground mb-3" data-testid={`benefit-title-${index}`}>
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              2025 Policy Updates - Simplified Requirements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="text-green-600 text-2xl mb-3 mx-auto" />
                <h4 className="font-semibold text-foreground mb-2">English Language</h4>
                <p className="text-sm text-muted-foreground">No longer required for any applicants</p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-green-600 text-2xl mb-3 mx-auto" />
                <h4 className="font-semibold text-foreground mb-2">Age Restrictions</h4>
                <p className="text-sm text-muted-foreground">Removed maximum age limits</p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-green-600 text-2xl mb-3 mx-auto" />
                <h4 className="font-semibold text-foreground mb-2">Business Experience</h4>
                <p className="text-sm text-muted-foreground">No prior management experience required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Qualifying Investment Options
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your investment must be maintained in approved asset classes throughout the investment period
              </p>
              <ul className="space-y-4">
                {investmentOptions.map((option, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`investment-option-${index}`}>
                    <CheckCircle className="text-primary text-lg mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{option}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Tax Advantages
              </h3>
              <div className="space-y-4">
                {taxAdvantages.map((advantage, index) => (
                  <Card key={advantage.title} className="p-4">
                    <h4 className="font-semibold text-foreground mb-2" data-testid={`tax-advantage-title-${index}`}>
                      {advantage.title}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`tax-advantage-description-${index}`}>
                      {advantage.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Application Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined 5-step process from initial expression of interest to investment transfer
            </p>
          </div>

          <div className="space-y-8">
            {applicationProcess.map((step, index) => (
              <Card key={step.step} className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground" data-testid={`process-step-title-${index}`}>
                        {step.title}
                      </h3>
                      <Badge variant="outline" className="text-primary border-primary mt-2 md:mt-0">
                        {step.timeframe}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground" data-testid={`process-step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wairimu Station Connection */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Wairimu Station Investment Opportunity
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our premium forest property investment presents an excellent opportunity for Active Investor Plus Visa applicants 
                seeking qualifying New Zealand investments with strong environmental and economic returns.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 text-lg" />
                  <span className="text-muted-foreground">Qualifying direct business investment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 text-lg" />
                  <span className="text-muted-foreground">Sustainable forestry with ETS income potential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 text-lg" />
                  <span className="text-muted-foreground">Strategic location near premium tourism destinations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 text-lg" />
                  <span className="text-muted-foreground">Professional investment management available</span>
                </div>
              </div>
              <Button
                onClick={() => navigateToSection("investment")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="wairimu-investment-button"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Explore Investment Details
              </Button>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Sustainable forest investment opportunity in New Zealand suitable for Active Investor Plus Visa" 
                className="w-full h-full object-cover"
                data-testid="wairimu-forest-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="space-y-4">
              <div>
                <strong>Important Legal Disclaimers:</strong>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• This information is for general guidance only and does not constitute immigration or investment advice</li>
                <li>• Immigration regulations and requirements are subject to change by the New Zealand government</li>
                <li>• Professional immigration advice should be sought before making any application or investment decisions</li>
                <li>• All investments carry risk and due diligence is essential before committing funds</li>
                <li>• Visa approval is not guaranteed and depends on meeting all eligibility criteria and assessment requirements</li>
                <li>• Investment performance and returns are not guaranteed and past performance does not indicate future results</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-6">
            Start Your New Zealand Journey
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Connect with our investment specialists to explore how Wairimu Station can support your 
            Active Investor Plus Visa application
          </p>
          <Button
            onClick={() => navigateToSection("contact")}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            data-testid="contact-specialist-button"
          >
            <Users className="mr-2 h-5 w-5" />
            Contact Investment Specialists
          </Button>
        </div>
      </section>
    </div>
  );
}