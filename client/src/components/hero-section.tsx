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
