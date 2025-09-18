import HeroSection from "@/components/hero-section";
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
      <LocationSection />
      <ETSSection />
      <InvestmentSection />
      <ContactSection />
      <Footer />
    </>
  );
}
