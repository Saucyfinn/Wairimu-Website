import { Play, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import wairimarHeroImage from "@assets/w3_1758152454450.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('${wairimarHeroImage}')`
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Own Slice of
          <span className="block text-secondary">Paradise</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover Wairimu Station - a premium forest property investment in the heart of Kaikoura, New Zealand, with proven ETS income potential
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
            onClick={() => scrollToSection("property")}
            data-testid="watch-tour-button"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Virtual Tour
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-all"
            onClick={() => scrollToSection("contact")}
            data-testid="enquire-now-button"
          >
            <Phone className="mr-2 h-5 w-5" />
            Enquire Now
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
