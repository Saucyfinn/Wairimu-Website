import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function InvestmentHighlights() {
  const highlights = [
    "15 hectares of Pinus Radiata planted forest (included in the Carbon Credit Scheme)",
    "200 hectares of indigenous bush (included in Carbon Credit scheme)",
    "Established Carbon credit income from Post-1989 forest carbon sequestration",
    "All weather access",
    "Strategic location",
    "640 hectares of regenerating native bush"
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Investment Highlights
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Key features that make Wairimu Station an exceptional forestry investment opportunity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3 py-1 sm:py-2" data-testid={`highlight-${index}`}>
                    <CheckCircle className="text-primary mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">{highlight}</span>
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