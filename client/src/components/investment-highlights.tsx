import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function InvestmentHighlights() {
  const highlights = [
    "15.5 hectares of Pinus radiata planted forest",
    "200 hectares of indigenous bush (included in Carbon Credit scheme)",
    "Established Carbon credit income from Post-1989 forest carbon sequestration",
    "Established forestry infrastructure with all-weather access",
    "Strategic Canterbury location near established forestry operations",
    "Professional forest management and operational planning"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investment Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key features that make Wairimu Station an exceptional forestry investment opportunity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3" data-testid={`highlight-${index}`}>
                    <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}