import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Property } from "@shared/schema";

export default function InvestmentSection() {
  const { data: property } = useQuery<Property>({
    queryKey: ["/api/property"],
  });

  const specifications = [
    { label: "Total Area", value: `${property?.area?.toLocaleString() || "640"} hectares` },
    { label: "Planted Forest Area", value: "485 hectares (Pinus radiata)" },
    { label: "Native Forest Reserve", value: "155 hectares (protected)" },
    { label: "ETS Registration", value: `${property?.etsCredits?.toLocaleString() || "485"} hectares (Post-1989 forest)` },
    { label: "Location", value: property?.location || "Kaikoura, Canterbury" },
    { label: "Access", value: "All-weather forestry roads" },
    { label: "Zoning", value: property?.zoning || "Rural (Forestry permitted)" },
    { label: "Data Source", value: "Forest X Valuation Report, April 2021" }
  ];


  const highlights = [
    "485 hectares of Pinus radiata plantation forest area",
    "155 hectares of native forest reserve (protected)",
    "ETS registration for Post-1989 forest carbon sequestration",
    "Established forestry infrastructure with all-weather access",
    "Strategic Canterbury location near established forestry operations",
    "Professional forest management and operational planning"
  ];


  return (
    <section id="investment" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Investment Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional forest investment opportunity. All financial data requires verification from the complete Forest X Valuation Report (April 2021).
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

            {/* Investment Highlights */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Investment Highlights</h4>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Investment Analysis Disclaimer */}
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Investment Analysis</h4>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Source:</strong> Forest X Valuation Report, April 2021<br/>
                    <strong>Data Limitations:</strong> Financial projections and valuations require verification from the complete report. 
                    Market conditions, regulatory changes, and operational factors may significantly impact actual returns.
                  </p>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <h5 className="font-medium text-foreground mb-2">Key Investment Considerations:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Forest valuations subject to market volatility</li>
                      <li>• ETS carbon credit prices fluctuate with regulatory changes</li>
                      <li>• Harvest timing and yields dependent on growth conditions</li>
                      <li>• Long-term investment (20+ year rotation cycle)</li>
                      <li>• Professional forestry advice required for due diligence</li>
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <strong>Disclaimer:</strong> This information is for preliminary assessment only. 
                    Professional financial and forestry advice should be obtained before making investment decisions.
                    All financial data must be verified from the complete Forest X Valuation Report.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
