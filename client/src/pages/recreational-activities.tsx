import { useEffect } from "react";
import { MapPin, Binoculars, Fish, Bike, Waves, Anchor, Target, Camera, Mountain, TreePine, Sun, Wind, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function RecreationalActivities() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Recreational Activities - Wairimu Station | Kaikoura Outdoor Adventures";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover exceptional recreational activities at Wairimu Station, Kaikoura. From hunting red deer and wild pigs to fishing, surfing, diving, mountain biking, and bird watching in pristine natural surroundings.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Discover exceptional recreational activities at Wairimu Station, Kaikoura. From hunting red deer and wild pigs to fishing, surfing, diving, mountain biking, and bird watching in pristine natural surroundings.';
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

  const scrollToContact = () => {
    const element = document.getElementById('contact-andy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activities = [
    {
      id: "walking",
      title: "Walking & Hiking",
      icon: Mountain,
      description: "Explore pristine native forest trails and scenic coastal routes",
      highlights: [
        "15km of established walking tracks through native bush",
        "Coastal cliff walks with spectacular ocean views", 
        "Ancient Totara and Rimu forest sections",
        "Seasonal wildflower displays in spring"
      ]
    },
    {
      id: "bird-watching", 
      title: "Bird Watching",
      icon: Binoculars,
      description: "Discover New Zealand's unique native bird species in their natural habitat",
      highlights: [
        "Native Tui, Bellbird, and Fantail populations",
        "Rare Morepork owl calls at dusk",
        "Seasonal visits from Kereru (Native Pigeon)",
        "Coastal seabirds including Shags and Gannets"
      ]
    },
    {
      id: "fishing",
      title: "Fishing",
      icon: Fish,
      description: "Access premium freshwater and saltwater fishing opportunities", 
      highlights: [
        "Stream fishing for Brown and Rainbow Trout",
        "Seasonal salmon runs in nearby rivers",
        "Rock fishing access along Kaikoura coastline",
        "Blue Cod and Groper fishing offshore"
      ]
    },
    {
      id: "mountain-biking",
      title: "Mountain Biking", 
      icon: Bike,
      description: "Challenge yourself on varied terrain from gentle trails to steep climbs",
      highlights: [
        "25km of farm tracks suitable for cycling",
        "Challenging hill climbs with rewarding views",
        "Technical single-track sections through forest",
        "Coastal route connections to Kaikoura township"
      ]
    },
    {
      id: "surfing",
      title: "Surfing",
      icon: Waves, 
      description: "Experience world-class surf breaks along the Kaikoura coastline",
      highlights: [
        "Direct access to consistent reef and point breaks",
        "Meatworks Bay - renowned left-hand point break",
        "Mangamaunu Bay - perfect for beginners",
        "Year-round surfable conditions with wetsuit"
      ]
    },
    {
      id: "diving",
      title: "Diving & Snorkeling",
      icon: Anchor,
      description: "Explore the rich marine life of Kaikoura's protected waters",
      highlights: [
        "Kaikoura Marine Sanctuary access",
        "Paua (Abalone), Crayfish, and Blue Cod",
        "Kelp forest ecosystems with abundant marine life", 
        "Clear visibility averaging 8-15 meters"
      ]
    },
    {
      id: "hunting",
      title: "Hunting",
      icon: Target,
      description: "Sustainable hunting opportunities for red deer, wild pigs, goats, and chamois",
      highlights: [
        "Red deer with excellent trophy potential",
        "Wild pigs in bush and scrubland areas",
        "Large goat herds in coastal terrain",
        "Challenging chamois in alpine country"
      ]
    }
  ];

  const huntingSpecies = [
    {
      name: "Red Deer",
      season: "Year-round",
      description: "Excellent trophy potential in native forest habitat",
      bestTime: "March - July (roar season)",
      method: "Spot and stalk, guided hunts available"
    },
    {
      name: "Wild Pigs",
      season: "Year-round", 
      description: "Abundant populations in bush and scrubland areas",
      bestTime: "April - September",
      method: "Still hunting, tracking, dog hunting permitted"
    },
    {
      name: "Goats",
      season: "Year-round",
      description: "Large herds in steep coastal and inland terrain",  
      bestTime: "May - August",
      method: "Long-range shooting, spot and stalk"
    },
    {
      name: "Chamois",
      season: "April - September",
      description: "Alpine species in high country areas",
      bestTime: "May - July", 
      method: "Challenging mountain hunting, excellent trophy quality"
    }
  ];

  const sustainablePractices = [
    "All hunting conducted under New Zealand hunting regulations",
    "Sustainable population management in consultation with DOC",
    "Mandatory hunter safety certification required",
    "Professional guide services available for all experience levels",
    "Meat processing facilities available on-site",
    "Trophy preparation and taxidermy services arranged"
  ];

  const accessInfo = [
    {
      title: "Getting There",
      details: [
        "2.5 hours drive from Christchurch",
        "45 minutes from Kaikoura township", 
        "All-weather farm road access",
        "GPS coordinates provided upon booking"
      ]
    },
    {
      title: "What to Bring",
      details: [
        "Appropriate outdoor clothing and footwear",
        "Valid firearms license for hunting activities",
        "Personal safety equipment (life jackets for marine activities)",
        "Camera for wildlife photography opportunities"
      ]
    },
    {
      title: "Best Times to Visit", 
      details: [
        "Spring (Sep-Nov): Wildflowers, mild temperatures",
        "Summer (Dec-Feb): Best weather, all activities available",
        "Autumn (Mar-May): Hunting season, stable weather", 
        "Winter (Jun-Aug): Fishing, limited outdoor activities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(34, 139, 34, 0.8) 0%, rgba(0, 100, 0, 0.6) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><path d="M0,300 C300,100 600,500 900,200 C1000,150 1100,350 1200,300 L1200,600 L0,600 Z" fill="%23228B22" opacity="0.1"/></svg>')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="recreational-hero-title">
            Recreational Activities
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="recreational-hero-description">
            Discover exceptional outdoor adventures at Wairimu Station and the pristine Kaikoura region
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("activities-overview")}
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
              data-testid="hero-activities-button"
            >
              <Camera className="mr-2 h-5 w-5" />
              Explore Activities
            </Button>
            <Button 
              onClick={() => navigateToSection("hunting")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="hero-hunting-button"
            >
              <Target className="mr-2 h-5 w-5" />
              Hunting Information
            </Button>
          </div>
        </div>
      </section>

      {/* Activities Overview */}
      <section id="activities-overview" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Outdoor Adventures Await
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From pristine native forests to the spectacular Kaikoura coastline, experience New Zealand's natural beauty through diverse recreational activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={activity.id} className="hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                      <IconComponent className="text-primary h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground" data-testid={`activity-title-${index}`}>
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-center" data-testid={`activity-description-${index}`}>
                      {activity.description}
                    </p>
                    <ul className="space-y-3">
                      {activity.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hunting Section */}
      <section id="hunting" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Target className="text-primary h-12 w-12" />
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sustainable Hunting Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wairimu Station offers exceptional hunting opportunities with sustainable population management and professional guidance
            </p>
          </div>

          {/* Hunting Species */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {huntingSpecies.map((species, index) => (
              <Card key={species.name} className="border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-foreground" data-testid={`hunting-species-${index}`}>
                      {species.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {species.season}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{species.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-foreground mb-1 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        Best Time
                      </div>
                      <p className="text-muted-foreground">{species.bestTime}</p>
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-primary" />
                        Method
                      </div>
                      <p className="text-muted-foreground">{species.method}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sustainable Practices */}
          <div className="bg-primary/5 rounded-xl p-8 mb-12">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center">
              <TreePine className="mr-3 h-6 w-6 text-primary" />
              Sustainable Hunting Practices
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sustainablePractices.map((practice, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Plan Your Visit
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential information for making the most of your recreational activities at Wairimu Station
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {accessInfo.map((info, index) => (
              <Card key={info.title} className="border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm">
                        <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-andy" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Phone className="text-primary h-12 w-12" />
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready for Your Adventure?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact Andy Nurse to arrange your recreational activities, hunting expeditions, or to learn more about opportunities at Wairimu Station
            </p>
          </div>

          <div className="bg-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium text-foreground">Andy Nurse</span>
              </div>
              <p className="text-muted-foreground">
                Professional guidance and arrangements for all recreational activities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="floating-green-btn shadow-lg hover:shadow-xl transition-all"
                  data-testid="contact-andy-phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Andy
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  variant="outline"
                  className="floating-green-btn shadow-md hover:shadow-lg transition-all"
                  data-testid="contact-andy-email"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Inquiry
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              <strong>Note:</strong> All recreational activities require prior arrangement and may be subject to weather conditions, seasonal availability, and local regulations. 
              Professional guide services are recommended for hunting activities and are mandatory for international visitors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}