import { FileText, Leaf, Map, Gavel, Download, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Property } from "@shared/schema";

export default function InvestmentSection() {
  const { data: property } = useQuery<Property>({
    queryKey: ["/api/property"],
  });

  const specifications = [
    { label: "Total Area", value: `${property?.area?.toLocaleString() || "2,400"} hectares` },
    { label: "Forest Type", value: property?.forestType || "Native New Zealand" },
    { label: "ETS Registration", value: `Active - ${property?.etsCredits?.toLocaleString() || "3,000"} credits` },
    { label: "Established", value: property?.yearEstablished?.toString() || "1887" },
    { label: "Location", value: property?.location || "Kaikoura, Canterbury" },
    { label: "Access", value: "All-weather road access" },
    { label: "Utilities", value: "Power, water, telecommunications" },
    { label: "Zoning", value: "Rural conservation" }
  ];

  const documents = [
    {
      icon: FileText,
      title: "Property Prospectus",
      description: "Detailed investment overview and financials",
      color: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Leaf,
      title: "ETS Documentation", 
      description: "Carbon credits registration and history",
      color: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Map,
      title: "Survey & Maps",
      description: "Topographical surveys and boundary maps",
      color: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Gavel,
      title: "Legal Documents",
      description: "Title deeds, certificates, and compliance",
      color: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  const highlights = [
    "Established ETS income stream with 3,000 registered credits",
    "Prime Kaikoura location with tourism development potential",
    "Sustainable investment aligned with climate goals",
    "Potential for eco-tourism and recreational development"
  ];

  const handleDownload = (documentType: string) => {
    // In a real application, this would trigger a document download
    alert(`Downloading ${documentType}. This would initiate a PDF download in a real application.`);
  };

  return (
    <section id="investment" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Investment Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive property specifications and investment documentation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
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
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Download Documents */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Download Documents
              </h3>
              
              <div className="space-y-4">
                {documents.map((doc, index) => {
                  const IconComponent = doc.icon;
                  return (
                    <Card 
                      key={doc.title}
                      className="hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => handleDownload(doc.title)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`${doc.color} p-3 rounded-lg`}>
                              <IconComponent className={`${doc.iconColor} text-xl`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{doc.title}</h4>
                              <p className="text-sm text-muted-foreground">{doc.description}</p>
                            </div>
                          </div>
                          <Download className="text-muted-foreground" data-testid={`download-${doc.title.toLowerCase().replace(/ /g, '-')}`} />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Financial Summary */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Financial Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current ETS Value</span>
                    <span className="font-semibold text-foreground" data-testid="financial-ets-value">
                      ${((property?.etsCredits || 3000) * (property?.currentNzuPrice || 62)).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Income Potential</span>
                    <span className="font-semibold text-foreground" data-testid="financial-annual-income">
                      ${property?.annualIncome?.toLocaleString() || "185,000"}+
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Land Valuation</span>
                    <span className="font-semibold text-foreground" data-testid="financial-land-value">
                      ${property?.landValuation ? (property.landValuation / 1000000).toFixed(1) + 'M' : "2.4M"}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="text-foreground font-medium">Total Investment Value</span>
                    <span className="font-bold text-primary text-lg" data-testid="financial-total-value">
                      ${property?.totalInvestmentValue ? (property.totalInvestmentValue / 1000000).toFixed(2) + 'M' : "2.59M"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
