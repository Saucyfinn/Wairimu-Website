import { Waves, Mountain, Fish, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function LocationSection() {
  const activities = [
    {
      icon: Waves,
      title: "Whale Watching",
      description: "World-renowned sperm whale encounters year-round",
      color: "text-accent"
    },
    {
      icon: Mountain,
      title: "Mountain Adventures",
      description: "Hiking, hunting, and scenic alpine experiences",
      color: "text-primary"
    },
    {
      icon: Fish,
      title: "Marine Wildlife",
      description: "Seals, dolphins, and rare seabirds in their habitat",
      color: "text-accent"
    },
    {
      icon: Utensils,
      title: "Culinary Excellence",
      description: "Fresh crayfish and premium local cuisine",
      color: "text-primary"
    }
  ];

  const stats = [
    { label: "Annual Visitors", value: "1.2M+", key: "visitors" },
    { label: "Tourism Revenue", value: "$180M", key: "revenue" },
    { label: "Peak Season", value: "Oct - Apr", key: "season" },
    { label: "Growth Rate", value: "8.5% YoY", key: "growth" }
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Talk Kaikoura
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why Kaikoura is New Zealand's premier destination for wildlife, adventure, and natural beauty
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Dramatic Coastal Beauty
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Kaikōura is a coastal town on the South Island of New Zealand known for its dramatic landscape, abundant marine life, and significant Māori and whaling history. Positioned between the Seaward Kaikōura Range mountains and the Pacific Ocean, it offers unparalleled natural beauty.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wairimu Station is positioned perfectly to take advantage of everything Kaikoura has to offer, from world-class whale watching to mountain adventures.
              </p>
            </div>

            {/* Activities Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <Card key={activity.title} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className={`${activity.color} text-2xl mb-3`} />
                      <h4 className="font-semibold text-foreground mb-2">{activity.title}</h4>
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
                alt="Kaikoura coastline with mountains and ocean" 
                className="w-full h-full object-cover"
                data-testid="kaikoura-main-image"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Whale watching experience in Kaikoura" 
                className="aspect-video rounded-lg object-cover"
                data-testid="whale-watching-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Seals on Kaikoura rocky coast" 
                className="aspect-video rounded-lg object-cover"
                data-testid="seals-image"
              />
            </div>

            {/* Tourism Statistics */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Tourism Statistics</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {stats.map((stat) => (
                    <div key={stat.key}>
                      <span className="text-muted-foreground">{stat.label}:</span>
                      <div className="font-semibold text-primary" data-testid={`tourism-stat-${stat.key}`}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
