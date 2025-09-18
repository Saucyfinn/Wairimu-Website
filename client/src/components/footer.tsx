import { Mountain } from "lucide-react";
import { useState } from "react";
import YouTubeModal from "./youtube-modal";

export default function Footer() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPropertyVideo = () => {
    setIsVideoModalOpen(true);
  };

  const footerSections = {
    property: [
      { label: "Property Showcase", id: "property" },
      { label: "Kaikoura Location", id: "location" },
      { label: "Carbon Credits", id: "ets" },
      { label: "Investment Details", id: "investment" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Mountain className="text-primary text-xl sm:text-2xl" />
              <span className="font-serif text-lg sm:text-xl font-semibold">Wairimu Station</span>
            </div>
            <p className="text-background/80 text-sm sm:text-base leading-relaxed">
              Wairimu Station ad Outstanding investment with proven income. The perfect place for your slice of heaven. Hunting, recreation and tourism options or simply the perfect bolthole for your home or lodge.
            </p>
          </div>
          
          {/* Property Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Property</h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerSections.property.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => item.id === 'property' ? openPropertyVideo() : scrollToSection(item.id)}
                    className="hover:text-background transition-colors text-left min-h-[44px] py-2 px-1 text-sm sm:text-base text-background/80 touch-target w-full sm:w-auto"
                    data-testid={`footer-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <div className="space-y-2 text-sm sm:text-base text-background/80">
              <p data-testid="footer-agent-name" className="font-medium">Andy Nurse</p>
              <p data-testid="footer-company" className="text-xs sm:text-sm">Nurse Property</p>
              <a 
                href="tel:+6433195555" 
                className="block hover:text-background transition-colors min-h-[44px] py-2 touch-target"
                data-testid="footer-phone"
              >
                +64 3 319 5555
              </a>
              <a 
                href="mailto:andy@nurseproperty.co.nz" 
                className="block hover:text-background transition-colors min-h-[44px] py-2 touch-target break-all"
                data-testid="footer-email"
              >
                andy@nurseproperty.co.nz
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-background/60 text-center md:text-left" data-testid="footer-copyright">
              © 2024 Wairimu Station. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm text-background/60">
              {footerSections.legal.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="hover:text-background transition-colors min-h-[44px] py-2 px-2 text-center touch-target"
                  data-testid={`footer-legal-${index}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* YouTube Modal */}
      <YouTubeModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="b7ypIkAsYLY"
        title="Wairimu Station Property Overview"
      />
    </footer>
  );
}
