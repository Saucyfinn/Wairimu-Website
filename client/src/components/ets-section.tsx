import { Leaf, Settings, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Property } from "@shared/schema";

export default function ETSSection() {
  const { data: property } = useQuery<Property>({
    queryKey: ["/api/property"],
  });

  const etsInfo = [
    {
      icon: Leaf,
      title: "What is New Zealand's Carbon Credit Scheme?",
      description: "New Zealand's Carbon Credit Scheme is the government's primary tool for pricing greenhouse gas emissions and incentivizing a shift toward a lower-emissions economy. Launched in 2008, it helps New Zealand meet international climate obligations under the Paris Agreement.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Settings,
      title: "How it Works",
      description: "New Zealand's Carbon Credit Scheme is a \"cap-and-trade\" system where the government sets limits on emission units (NZUs). The scheme rewards activities that remove carbon from the atmosphere. Forest owners earn NZUs as their forests grow and absorb carbon dioxide.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Coins,
      title: "Registered Forest",
      description: "Wairimu Station has 215 hectares registered under New Zealand's Carbon Credit Scheme. The significant forest generates yearly income based on carbon credit payouts, providing a stable, environmentally-positive revenue stream.",
      bgColor: "bg-primary/5",
      iconColor: "text-primary",
      isHighlight: true
    }
  ];

  return (
    <section id="ets" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            New Zealand's Carbon Credit Scheme
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding how Wairimu Station participates in New Zealand's environmental initiative
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {etsInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={info.title} className={info.isHighlight ? "bg-primary/5 border-primary/20" : "bg-background"}>
                <CardContent className="p-8">
                  <div className={`${info.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`${info.iconColor} text-2xl`} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
