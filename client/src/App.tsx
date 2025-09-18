import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import Tourism from "@/pages/tourism";
import Visa from "@/pages/visa";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/">{() => <Home />}</Route>
      <Route path="/tourism">{() => <Tourism />}</Route>
      <Route path="/visa">{() => <Visa />}</Route>
      <Route>{() => <NotFound />}</Route>
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
