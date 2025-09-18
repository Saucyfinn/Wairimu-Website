import { useState, useEffect } from "react";
import { Mountain, Menu, X, MapPin, FileText, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    // Check if we're on the tourism page
    if (location.includes('/tourism')) {
      // Navigate to home page with section hash
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If on home page, scroll directly to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const openPropertyVideo = () => {
    setIsVideoModalOpen(true);
    setIsOpen(false);
  };

  const navItems = [
    { label: "Property", id: "property" },
    { label: "Location", id: "location" },
    { label: "Carbon Credits", id: "ets" },
    { label: "Investment", id: "investment" },
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm touch-target"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Link href="/tourism" className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm flex items-center space-x-1 touch-target" data-testid="nav-tourism">
              <MapPin className="h-4 w-4" />
              <span>Tourism</span>
            </Link>
            <Link href="/visa" className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm flex items-center space-x-1 touch-target" data-testid="nav-visa">
              <FileText className="h-4 w-4" />
              <span>NZ Investor Visa</span>
            </Link>
            <Link href="/honey" className="px-4 py-3 min-h-[44px] text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md transition-all duration-200 hover:shadow-sm flex items-center space-x-1 touch-target" data-testid="nav-honey">
              <Flower2 className="h-4 w-4" />
              <span>Manuka Honey</span>
            </Link>
            <Button
              onClick={openPropertyVideo}
              variant="outline"
              className="min-h-[44px] border-primary text-primary hover:bg-primary hover:text-primary-foreground touch-target"
              data-testid="nav-virtual-tour"
            >
              Watch Property Video
            </Button>
            <Button
              onClick={() => navigateToSection("contact")}
              className="min-h-[44px] bg-primary text-primary-foreground hover:bg-primary/90 touch-target"
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
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateToSection(item.id)}
                    className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm touch-target"
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                <Link href="/tourism" className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" data-testid="mobile-nav-tourism" onClick={() => setIsOpen(false)}>
                  <MapPin className="h-5 w-5" />
                  <span>Tourism</span>
                </Link>
                <Link href="/visa" className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" data-testid="mobile-nav-visa" onClick={() => setIsOpen(false)}>
                  <FileText className="h-5 w-5" />
                  <span>NZ Investor Visa</span>
                </Link>
                <Link href="/honey" className="text-left text-lg text-foreground font-semibold hover:bg-primary/10 hover:text-primary rounded-md px-4 py-4 min-h-[44px] transition-all duration-200 hover:shadow-sm flex items-center space-x-2 w-full touch-target" data-testid="mobile-nav-honey" onClick={() => setIsOpen(false)}>
                  <Flower2 className="h-5 w-5" />
                  <span>Manuka Honey</span>
                </Link>
                <Button
                  onClick={openPropertyVideo}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full min-h-[44px] mt-4 touch-target"
                  data-testid="mobile-nav-virtual-tour"
                >
                  Watch Property Video
                </Button>
                <Button
                  onClick={() => navigateToSection("contact")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full min-h-[44px] touch-target"
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
