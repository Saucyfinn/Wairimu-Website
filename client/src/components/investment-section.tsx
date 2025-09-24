import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Property } from "@shared/schema";

export default function InvestmentSection() {
  const { data: property } = useQuery<Property>({
    queryKey: ["/api/property"],
  });

  const specifications = [
    { label: "Total Area", value: `${property?.area?.toLocaleString() || "637"} hectares` },
    { label: "Indigenous Bush", value: "215 hectares of forest (included in Carbon Credit scheme)" },
    { label: "Access", value: "All-weather forestry roads" },
    { label: "Zoning", value: property?.zoning || "Rural (Forestry permitted)" },
  ];



  return (
    <section id="investment" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Investment Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional forest investment opportunity with comprehensive property specifications and investment considerations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Property Specifications */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Property Specifications
              </h3>
              
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={spec.label} className="flex justify-between items-center py-4 border-b border-border">
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground" data-testid={`spec-${spec.label.toLowerCase().replace(/ /g, '-')}`}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
