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
      

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
