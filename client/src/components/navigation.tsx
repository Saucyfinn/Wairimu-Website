import { useState, useEffect } from "react";
import { Mountain, Menu, X, MapPin, FileText, Flower2, ChevronDown, Home, DollarSign, Building, Wheat, TrendingUp, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link, useLocation } from "wouter";
import YouTubeModal from "./youtube-modal";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Section exists on current page - scroll to it
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Section doesn't exist - redirect to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  const openPropertyVideo = () => {
    setIsVideoModalOpen(true);
    setIsOpen(false);
  };

  const homeNavItems = [
    { label: "Property", id: "property" },
    { label: "Location", id: "location" },
  ];

  const investmentItems = [
    { label: "Investment Opportunity", action: () => navigateToSection("investment"), icon: TrendingUp, testId: "link-investment-opportunity", isAction: true },
    { label: "NZ Investor", href: "/investment/nz-investor", icon: FileText, testId: "link-investment-nz-investor" },
    { label: "Manuka Honey", href: "/honey", icon: Flower2, testId: "link-investment-honey" },
    { label: "Carbon Credits", href: "/income/carbon-credits", icon: DollarSign, testId: "link-investment-carbon" },
    { label: "Eco Lodge Concept", href: "/income/eco-lodge", icon: Building, testId: "link-investment-eco-lodge" },
    { label: "Grazing", href: "/income/grazing", icon: Wheat, testId: "link-investment-grazing" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect border-b border-border/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm flex items-center space-x-1 touch-target" data-testid="nav-home">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            {homeNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm touch-target"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Investment Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm flex items-center space-x-1 touch-target" data-testid="dropdown-investment">
                  <TrendingUp className="h-4 w-4" />
                  <span>Investment</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" data-testid="dropdown-investment-content">
                {investmentItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <DropdownMenuItem key={item.href || `action-${index}`} asChild={!item.isAction}>
                      {item.isAction ? (
                        <button onClick={item.action} className="flex items-center space-x-2 w-full px-4 py-3 min-h-[44px] touch-target" data-testid={item.testId}>
                          <IconComponent className="h-4 w-4" />
                          <span>{item.label}</span>
                        </button>
                      ) : (
                        <Link href={item.href!} className="flex items-center space-x-2 w-full px-4 py-3 min-h-[44px] touch-target" data-testid={item.testId}>
                          <IconComponent className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/recreational-activities" className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm flex items-center space-x-1 touch-target" data-testid="nav-recreational-activities">
              <TreePine className="h-4 w-4" />
              <span>Recreational Activities</span>
            </Link>
            <Link href="/tourism" className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm flex items-center space-x-1 touch-target" data-testid="nav-tourism">
              <MapPin className="h-4 w-4" />
              <span>Tourism</span>
            </Link>
            <Button
              onClick={openPropertyVideo}
              variant="outline"
              className="min-h-[44px] floating-green-btn touch-target"
              data-testid="nav-virtual-tour"
            >
              Watch Property Video
            </Button>
            <Button
              onClick={() => navigateToSection("contact")}
              className="min-h-[44px] floating-green-btn touch-target"
              data-testid="nav-contact"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden min-h-[44px] min-w-[44px] touch-target" data-testid="mobile-menu-trigger">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-4">
              <div className="flex flex-col space-y-2 mt-8">
                <Link href="/" className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" data-testid="mobile-nav-home" onClick={() => setIsOpen(false)}>
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                {homeNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateToSection(item.id)}
                    className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm touch-target"
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Investment Collapsible */}
                <Collapsible>
                  <CollapsibleTrigger className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center justify-between w-full touch-target" data-testid="mobile-nav-investment-trigger">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5" />
                      <span>Investment</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 ml-4">
                    {investmentItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return item.isAction ? (
                        <button 
                          key={`action-${index}`}
                          onClick={item.action}
                          className="text-left text-base text-foreground font-medium hover:bg-primary/10 hover:text-primary rounded-md px-4 py-3 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" 
                          data-testid={item.testId}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span>{item.label}</span>
                        </button>
                      ) : (
                        <Link 
                          key={item.href} 
                          href={item.href!} 
                          className="text-left text-base text-foreground font-medium hover:bg-primary/10 hover:text-primary rounded-md px-4 py-3 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" 
                          data-testid={item.testId}
                          onClick={() => setIsOpen(false)}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>

                <Link href="/recreational-activities" className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" data-testid="mobile-nav-recreational-activities" onClick={() => setIsOpen(false)}>
                  <TreePine className="h-5 w-5" />
                  <span>Recreational Activities</span>
                </Link>
                <Link href="/tourism" className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" data-testid="mobile-nav-tourism" onClick={() => setIsOpen(false)}>
                  <MapPin className="h-5 w-5" />
                  <span>Tourism</span>
                </Link>
                <Button
                  onClick={openPropertyVideo}
                  className="floating-green-btn w-full min-h-[44px] mt-4 touch-target"
                  data-testid="mobile-nav-virtual-tour"
                >
                  Watch Property Video
                </Button>
                <Button
                  onClick={() => navigateToSection("contact")}
                  className="floating-green-btn w-full min-h-[44px] touch-target"
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* YouTube Modal */}
      <YouTubeModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="b7ypIkAsYLY"
        title="Wairimu Station Property Overview"
      />
    </nav>
  );
}