import { Leaf } from "lucide-react";
import HeroSection from "@/components/hero-section";
import InvestmentHighlights from "@/components/investment-highlights";
import PropertyShowcase from "@/components/property-showcase";
import LocationSection from "@/components/location-section";
import ETSSection from "@/components/ets-section";
import InvestmentSection from "@/components/investment-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* ETS Registration Info Box */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Leaf className="h-8 w-8 text-green-600 flex-shrink-0" />
          <p className="text-lg md:text-xl font-semibold text-green-800 dark:text-green-300 text-center">
            215 hectares of forest is registered in the New Zealand Emissions Trading Scheme
          </p>
        </div>
      </div>
      
      <PropertyShowcase />
      <InvestmentHighlights />
      <LocationSection />
      <ETSSection />
      <InvestmentSection />
      <ContactSection />
      <Footer />
    </>
  );
}
