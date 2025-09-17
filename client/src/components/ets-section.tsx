import { useState, useEffect } from "react";
import { Leaf, Settings, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import type { Property } from "@shared/schema";

export default function ETSSection() {
  const [nzuPrice, setNzuPrice] = useState(62);
  const [calculations, setCalculations] = useState({
    annual: 186000,
    monthly: 15500,
    quarterly: 46500,
    roi: 12.8
  });

  const { data: property } = useQuery<Property>({
    queryKey: ["/api/property"],
  });

  const credits = property?.etsCredits || 3000;

  useEffect(() => {
    const annual = nzuPrice * credits;
    const monthly = annual / 12;
    const quarterly = annual / 4;
    const roi = property?.totalInvestmentValue ? (annual / property.totalInvestmentValue) * 100 : 12.8;

    setCalculations({
      annual: Math.round(annual),
      monthly: Math.round(monthly),
      quarterly: Math.round(quarterly),
      roi: Number(roi.toFixed(1))
    });
  }, [nzuPrice, credits, property?.totalInvestmentValue]);

  const etsInfo = [
    {
      icon: Leaf,
      title: "What is E.T.S?",
      description: "The New Zealand Emissions Trading Scheme (NZ ETS) is the government's primary tool for pricing greenhouse gas emissions and incentivizing a shift toward a lower-emissions economy. Launched in 2008, it helps New Zealand meet international climate obligations under the Paris Agreement.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Settings,
      title: "How it Works",
      description: "The NZ ETS is a \"cap-and-trade\" system where the government sets limits on emission units (NZUs). The scheme rewards activities that remove carbon from the atmosphere. Forest owners earn NZUs as their forests grow and absorb carbon dioxide.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Coins,
      title: "3,000 Credits",
      description: "Wairimu Station is already registered under the scheme with 3,000 credits. The significant forest generates yearly income based on ETS payouts, providing a stable, environmentally-positive revenue stream.",
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
            Success with E.T.S
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding New Zealand's Emissions Trading Scheme and your income potential
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {info.description}
                  </p>
                  {info.isHighlight && (
                    <>
                      <div className="text-3xl font-bold text-primary" data-testid="ets-annual-income">
                        ${calculations.annual.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Current Annual Income</div>
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Income Calculator */}
        <Card className="bg-muted">
          <CardContent className="p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              ETS Income Calculator
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="nzu-price" className="text-sm font-medium text-foreground mb-2">
                    NZU Price (NZD)
                  </Label>
                  <Input
                    id="nzu-price"
                    type="number"
                    value={nzuPrice}
                    onChange={(e) => setNzuPrice(Number(e.target.value))}
                    className="w-full bg-card border border-border"
                    data-testid="nzu-price-input"
                  />
                </div>
                <div>
                  <Label htmlFor="credits" className="text-sm font-medium text-foreground mb-2">
                    Number of Credits
                  </Label>
                  <Input
                    id="credits"
                    type="number"
                    value={credits}
                    readOnly
                    className="w-full bg-card/50 border border-border"
                    data-testid="credits-input"
                  />
                </div>
              </div>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="calculator-annual-income">
                    ${calculations.annual.toLocaleString()}
                  </div>
                  <div className="text-muted-foreground mb-4">Annual ETS Income Potential</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-foreground" data-testid="calculator-monthly-income">
                        ${calculations.monthly.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">Monthly</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground" data-testid="calculator-quarterly-income">
                        ${calculations.quarterly.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">Quarterly</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground" data-testid="calculator-roi">
                        {calculations.roi}%
                      </div>
                      <div className="text-muted-foreground">Estimated ROI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  * Calculations based on current NZU market prices. Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
