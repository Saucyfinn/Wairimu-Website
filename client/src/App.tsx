import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import Tourism from "@/pages/tourism";
import Visa from "@/pages/visa";
import Honey from "@/pages/honey";
import CarbonCredits from "@/pages/carbon-credits";
import EcoLodge from "@/pages/eco-lodge";
import Grazing from "@/pages/grazing";
import Forestry from "@/pages/forestry";
import RecreationalActivities from "@/pages/recreational-activities";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navigation />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/tourism" component={Tourism} />
          <Route path="/investment/nz-investor" component={Visa} />
          <Route path="/recreational-activities" component={RecreationalActivities} />
          <Route path="/honey" component={Honey} />
          <Route path="/income/carbon-credits" component={CarbonCredits} />
          <Route path="/forestry" component={Forestry} />
          <Route path="/income/eco-lodge" component={EcoLodge} />
          <Route path="/income/grazing" component={Grazing} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
