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
