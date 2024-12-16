import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import IndustryShowcase from "@/components/industry-showcase";
import Testimonials from "@/components/testimonials";
import HomePricingSection from "@/components/home-pricing-section";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import SupportSection from "@/components/support-section";
import Footer from "@/components/footer";
import AIChatbot from "@/components/ai-chatbot";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <>
      <SEO
        title="Flowo - Impulsione seu Negócio em até 40% com IA de Agendamento e um super CRM"
        description="Otimize seu tempo, reduza faltas em 60% e aumente seu faturamento com agendamento inteligente integrado ao WhatsApp."
      />
      <Navbar />
      <main>
        <Hero />
        <Section id="como-funciona" background="gradient">
          <HowItWorks />
        </Section>
        <Section id="recursos" background="white">
          <Features />
        </Section>
        <IndustryShowcase />
        <Section background="gradient">
          <Testimonials />
        </Section>
        <Section id="precos" background="white">
          <HomePricingSection />
        </Section>
        <SupportSection />
        <CallToAction />
        <Section background="gradient-reverse">
          <FAQ />
        </Section>
      </main>
      <Footer />
      <AIChatbot />
    </>
  );
}
