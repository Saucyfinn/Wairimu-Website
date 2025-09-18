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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tourism" component={Tourism} />
      <Route path="/visa" component={Visa} />
      <Route path="/honey" component={Honey} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navigation />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
