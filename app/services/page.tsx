import ClientSay from "@/components/ClientSay";
import VisionCTA from "@/components/CTA";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import FeaturesApart from "@/components/services/Features";
import Hero from "@/components/services/Hero";
import ServicesList from "@/components/services/ServicesList";

function page() {
  return (
    <>
      <Hero />
      <FeaturesApart />
      <ServicesList />
      <ClientSay />
      <VisionCTA />
      <FAQSection />
      <Footer />
    </>
  );
}

export default page;
