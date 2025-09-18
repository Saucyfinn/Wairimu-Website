import { Play, Phone, ChevronDown, ArrowRight } from "lucide-react";
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('${wairimarHeroImage}')`
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Wairimu Station
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Premium Forest Investment in Canterbury's Heart
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
          640 hectares of pristine native forest generating sustainable carbon credit income in one of New Zealand's most beautiful regions
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button
            onClick={() => scrollToSection("property")}
            size="lg"
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 sm:px-8 text-base sm:text-lg touch-target"
            data-testid="hero-explore-property"
          >
            Explore Property
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 text-base sm:text-lg touch-target"
            data-testid="hero-contact"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Andy
          </Button>
        </div>
        
        {/* Key Stats - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 bg-black/20 backdrop-blur-sm rounded-xl p-6 sm:p-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2" data-testid="hero-stat-area">
              640
            </div>
            <div className="text-sm sm:text-base text-white/80">Hectares</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2" data-testid="hero-stat-credits">
              215.5
            </div>
            <div className="text-sm sm:text-base text-white/80">ETS Credits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2" data-testid="hero-stat-income">
              $185K
            </div>
            <div className="text-sm sm:text-base text-white/80">Annual Income</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("property")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce touch-target"
        data-testid="hero-scroll-indicator"
        aria-label="Scroll to property section"
      >
        <ChevronDown className="text-white text-2xl sm:text-3xl" />
      </button>
    </section>
  );
}
