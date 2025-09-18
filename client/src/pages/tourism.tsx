import { useEffect } from "react";
import { Waves, Wine, MapPin, Camera, Utensils, Mountain, Calendar, Users, Anchor, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Tourism() {
  useEffect(() => {
    // Set unique page title and meta description for SEO
    document.title = "Kaikoura & Marlborough Tourism | Wairimu Station Investment Opportunity";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore world-class whale watching, wine tours, and marine adventures in Kaikoura & Marlborough. Premium tourism investment opportunities at Wairimu Station, New Zealand.');
    } else {
      const newMetaElement = document.createElement('meta') as HTMLMetaElement;
      newMetaElement.name = 'description';
      newMetaElement.content = 'Explore world-class whale watching, wine tours, and marine adventures in Kaikoura & Marlborough. Premium tourism investment opportunities at Wairimu Station, New Zealand.';
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
      // If section exists locally, scroll to it smoothly
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to cross-page navigation for sections that don't exist locally
      window.location.href = `/#${sectionId}`;
    }
  };

  const getOperatorLink = (operator: string) => {
    // Generate appropriate URLs for tourism operators
    const operatorUrls: { [key: string]: string } = {
      "Whale Watch Kaikoura": "https://www.whalewatch.co.nz/",
      "Dolphin Encounter Kaikoura": "https://www.dolphinencounter.co.nz/",
      "Kaikoura Kayaks": "https://www.kaikourakayaks.co.nz/", 
      "Wings Over Whales": "https://www.whales.co.nz/",
      "Hop 'n Grape Tours": "https://www.hopngrape.co.nz/",
      "Explore Marlborough Biking": "https://www.exploremarlborough.co.nz/"
    };
    return operatorUrls[operator] || null;
  };

  const kaikouraActivities = [
    {
      icon: Waves,
      title: "Whale Watching",
      description: "World-renowned sperm whale encounters with 95% success rate",
      operator: "Whale Watch Kaikoura",
      duration: "3.5 hours",
      price: "$150-200",
      color: "text-accent",
      seasonal: "Year-round"
    },
    {
      icon: Anchor,
      title: "Swimming with Dolphins",
      description: "Interactive experience with acrobatic Dusky dolphins",
      operator: "Dolphin Encounter Kaikoura",
      duration: "3 hours",
      price: "$210",
      color: "text-primary",
      seasonal: "Year-round"
    },
    {
      icon: Mountain,
      title: "Wildlife Kayaking",
      description: "Close encounters with seals, dolphins, and seabirds",
      operator: "Kaikoura Kayaks",
      duration: "3 hours",
      price: "$100-150",
      color: "text-accent",
      seasonal: "Year-round"
    },
    {
      icon: Camera,
      title: "Scenic Flights",
      description: "Aerial whale watching and coastal photography",
      operator: "Wings Over Whales",
      duration: "40 minutes",
      price: "$200-300",
      color: "text-primary",
      seasonal: "Seasonal availability"
    },
    {
      icon: MapPin,
      title: "Peninsula Seal Colony",
      description: "Free access to fur seal viewing at Point Kean",
      operator: "Self-guided",
      duration: "2-3 hours",
      price: "Free",
      color: "text-accent",
      seasonal: "Best Dec-Feb"
    },
    {
      icon: Utensils,
      title: "Fresh Crayfish",
      description: "World-famous Kaikoura crayfish and local cuisine",
      operator: "Local restaurants",
      duration: "Dining experience",
      price: "Varies",
      color: "text-primary",
      seasonal: "Year-round"
    }
  ];

  const marlboroughActivities = [
    {
      icon: Wine,
      title: "Premium Wine Tours",
      description: "World-class Sauvignon Blanc tasting at 30+ cellar doors",
      operator: "Hop 'n Grape Tours",
      duration: "5.5 hours",
      price: "$165-230",
      color: "text-primary",
      highlight: "Winemaker-led tours"
    },
    {
      icon: Mountain,
      title: "Queen Charlotte Track",
      description: "73.5km of premier hiking and mountain biking",
      operator: "Queen Charlotte Track",
      duration: "3-5 days",
      price: "Track fees + accommodation",
      color: "text-accent",
      highlight: "Water taxi transfers available"
    },
    {
      icon: Anchor,
      title: "Marlborough Sounds Cruises",
      description: "Wildlife spotting and scenic cruises through pristine sounds",
      operator: "Various operators",
      duration: "Half/full day",
      price: "$80-150",
      color: "text-primary",
      highlight: "20% of NZ's coastline"
    },
    {
      icon: TreePine,
      title: "Cycling Wine Tours",
      description: "Self-guided bike tours through flat vineyard terrain",
      operator: "Explore Marlborough Biking",
      duration: "Half/full day",
      price: "$60-120",
      color: "text-accent",
      highlight: "All fitness levels"
    },
    {
      icon: Mountain,
      title: "Mt Fishtail Hiking",
      description: "1643m summit with panoramic valley views",
      operator: "Self-guided",
      duration: "Full day",
      price: "Free",
      color: "text-primary",
      highlight: "Pine Valley Hut access"
    },
    {
      icon: Utensils,
      title: "Food & Wine Festivals",
      description: "Annual Marlborough Food and Wine Festival",
      operator: "Various venues",
      duration: "Festival weekend",
      price: "$40-80",
      color: "text-accent",
      highlight: "Second Saturday in February"
    }
  ];

  const seasonalInfo = [
    {
      season: "Summer (Dec-Feb)",
      weather: "Warm, calm seas",
      activities: "Peak whale watching, seal pupping season, wine harvest",
      visitor: "High season - book in advance",
      temperature: "18-25°C"
    },
    {
      season: "Autumn (Mar-May)",
      weather: "Mild, fewer crowds",
      activities: "Excellent wildlife viewing, comfortable hiking",
      visitor: "Shoulder season - good value",
      temperature: "12-20°C"
    },
    {
      season: "Winter (Jun-Aug)",
      weather: "Cool, dramatic seas",
      activities: "Migrating whales and orcas, cozy wine tastings",
      visitor: "Low season - potential weather delays",
      temperature: "7-15°C"
    },
    {
      season: "Spring (Sep-Nov)",
      weather: "Mild, growing season",
      activities: "Wildlife returns, vineyard awakening",
      visitor: "Shoulder season - pleasant conditions",
      temperature: "10-18°C"
    }
  ];

  const tourismStats = [
    { label: "Annual Visitors", value: "1.2M+", description: "to Marlborough region", icon: Users },
    { label: "Tourism Revenue", value: "$180M", description: "annual economic impact", icon: MapPin },
    { label: "Whale Success Rate", value: "95%", description: "year-round sightings", icon: Waves },
    { label: "Wine Exports", value: "$2.1B", description: "global wine industry", icon: Wine }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" data-testid="tourism-hero-title">
            Discover Kaikoura & Marlborough
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="tourism-hero-description">
            Gateway to world-class marine wildlife, premium wine experiences, and pristine natural adventures
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigateToSection("kaikoura")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="hero-kaikoura-button"
            >
              <Waves className="mr-2 h-5 w-5" />
              Explore Kaikoura
            </Button>
            <Button 
              onClick={() => navigateToSection("marlborough")}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="hero-marlborough-button"
            >
              <Wine className="mr-2 h-5 w-5" />
              Visit Marlborough
            </Button>
          </div>
        </div>
      </section>

      {/* Tourism Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tourism Investment Opportunity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wairimu Station is strategically positioned to capitalize on the region's thriving tourism industry, 
              with direct access to world-renowned attractions and year-round visitor flow
            </p>
          </div>

          {/* Tourism Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {tourismStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="text-primary text-3xl mb-4 mx-auto" />
                    <div className="text-3xl font-bold text-foreground mb-2" data-testid={`tourism-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
                Strategic Location Advantage
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Positioned between Kaikoura's world-famous marine sanctuary and Marlborough's premium wine region, 
                Wairimu Station offers unique development potential for eco-tourism and luxury accommodation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    30 minutes to Kaikoura whale watching
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-accent border-accent">
                    45 minutes to Marlborough wine region
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    Year-round tourism season
                  </Badge>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Kaikoura whale watching experience" 
                className="w-full h-full object-cover"
                data-testid="tourism-overview-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kaikoura Activities Section */}
      <section id="kaikoura" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kaikoura Marine Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-renowned destination for whale watching and marine wildlife experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {kaikouraActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={activity.title} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <IconComponent className={`${activity.color} text-2xl mr-3`} />
                      <h4 className="font-semibold text-foreground">{activity.title}</h4>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">{activity.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Operator:</span>
                        {getOperatorLink(activity.operator) ? (
                          <a 
                            href={getOperatorLink(activity.operator)!} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:text-primary/80 underline transition-colors" 
                            data-testid={`activity-operator-${index}`}
                          >
                            {activity.operator}
                          </a>
                        ) : (
                          <span className="font-medium text-foreground" data-testid={`activity-operator-${index}`}>
                            {activity.operator}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground">{activity.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-semibold text-primary" data-testid={`activity-price-${index}`}>
                          {activity.price}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Season:</span>
                        <span className="text-accent">{activity.seasonal}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Fur seals on Kaikoura rocky coastline" 
                className="w-full h-full object-cover"
                data-testid="kaikoura-seals-image"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Dolphin swimming in clear blue water" 
                className="w-full h-full object-cover"
                data-testid="kaikoura-dolphin-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marlborough Region Section */}
      <section id="marlborough" className="py-20 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Marlborough Wine & Adventure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              New Zealand's premier wine region with world-class outdoor adventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {marlboroughActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={activity.title} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <IconComponent className={`${activity.color} text-2xl mr-3`} />
                      <h4 className="font-semibold text-foreground">{activity.title}</h4>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">{activity.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Operator:</span>
                        {getOperatorLink(activity.operator) ? (
                          <a 
                            href={getOperatorLink(activity.operator)!} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:text-primary/80 underline transition-colors" 
                            data-testid={`marlborough-operator-${index}`}
                          >
                            {activity.operator}
                          </a>
                        ) : (
                          <span className="font-medium text-foreground" data-testid={`marlborough-operator-${index}`}>
                            {activity.operator}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground">{activity.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-semibold text-primary" data-testid={`marlborough-price-${index}`}>
                          {activity.price}
                        </span>
                      </div>
                      {activity.highlight && (
                        <div className="mt-3">
                          <Badge variant="secondary" className="text-xs">
                            {activity.highlight}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506377247774-c97d5e0e9c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Marlborough vineyard landscape with mountains" 
                className="w-full h-full object-cover"
                data-testid="marlborough-vineyard-image"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574391884720-bbc3278ec4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Queen Charlotte Sound scenic waterway" 
                className="w-full h-full object-cover"
                data-testid="marlborough-sound-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Year-Round Tourism Calendar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each season offers unique experiences and visitor opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalInfo.map((season, index) => (
              <Card key={season.season} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-primary text-xl mr-3" />
                    <h4 className="font-semibold text-foreground">{season.season}</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Weather:</span>
                      <p className="text-muted-foreground">{season.weather}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Temperature:</span>
                      <p className="text-primary font-semibold" data-testid={`season-temp-${index}`}>
                        {season.temperature}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Key Activities:</span>
                      <p className="text-muted-foreground">{season.activities}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Visitor Info:</span>
                      <p className="text-accent">{season.visitor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Investment in New Zealand's Tourism Future
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            With 1.2 million annual visitors and $180 million in tourism revenue, 
            the Kaikoura-Marlborough corridor represents one of New Zealand's strongest tourism investment opportunities.
          </p>
          <Button 
            onClick={() => navigateToSection("contact")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="tourism-contact-button"
          >
            Explore Investment Opportunities
          </Button>
        </div>
      </section>
    </div>
  );
}