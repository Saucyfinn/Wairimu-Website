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
      { label: "ETS Income", id: "ets" },
      { label: "Investment Details", id: "investment" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="text-primary text-2xl" />
              <span className="font-serif text-xl font-semibold">Wairimu Station</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Wairimu Station ad Outstanding investment with proven income. The perfect place for your slice of heaven. Hunting, recreationand tourisim options or simply the perfect bolthole for your home or lodge.
            </p>
          </div>
          
          {/* Property Links */}
          <div>
            <h4 className="font-semibold mb-4">Property</h4>
            <ul className="space-y-2 text-sm text-background/80">
              {footerSections.property.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => item.id === 'property' ? openPropertyVideo() : scrollToSection(item.id)}
                    className="hover:text-background transition-colors text-left"
                    data-testid={`footer-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p data-testid="footer-agent-name">Andy Nurse</p>
              <p data-testid="footer-company">Nurse Property</p>
              <p data-testid="footer-phone">+64 3 319 5555</p>
              <p data-testid="footer-email">andy@nurseproperty.co.nz</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-background/60 mb-4 md:mb-0" data-testid="footer-copyright">
              © 2024 Wairimu Station. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-background/60">
              {footerSections.legal.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="hover:text-background transition-colors"
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
