import ClientSay from "@/components/ClientSay";
import VisionCTA from "@/components/CTA";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import Global from "@/components/Global";
import Hero from "@/components/Hero";
import TechnologySection from "@/components/PortFolio";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Process />
      <Global />
      <TechnologySection />
      <ClientSay />
      <VisionCTA />
      <FAQSection />
      <Footer />
    </>
  );
}
