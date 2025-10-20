import SEO from "@/components/seo";
import SchemaMarkup from "@/components/schema-markup";
import UrgencyBanner from "@/components/urgency-banner";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
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
        title="Sistema de Agendamento para Barbearia | WhatsApp + IA - Flowo"
        description="Software de agendamento via WhatsApp para barbearias. Reduza faltas em 60%, gerencie barbeiros e aumente faturamento. Teste grátis 14 dias sem cartão. Usado por 573+ barbearias."
      />
      <SchemaMarkup />
      <UrgencyBanner />
      <Navbar />
      <main>
        <Hero />
        <Section id="como-funciona" background="gradient">
          <HowItWorks />
        </Section>
        <Section id="recursos" background="white">
          <Features />
        </Section>
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
