import { Metadata } from 'next'
import { PricingSection } from '@/components/pricing/pricing-section'
import { FeatureComparisonTable } from '@/components/pricing/feature-comparison-table'
import { FeaturedResource } from '@/components/pricing/featured-resource'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SupportSection from '@/components/support-section'
import Testimonials from '@/components/testimonials'
import FAQ from "@/components/faq"
import { Section } from '@/components/section'
import CallToAction from "@/components/call-to-action"
import { featuredResources } from '@/data/pricing-data'

export const metadata: Metadata = {
  title: 'Preços e Planos de Sistema de Agendamento para Barbearia',
  description: 'Planos a partir de R$ 97/mês. Agendamento via WhatsApp com IA, lembretes automáticos e redução de faltas. 14 dias grátis sem cartão.',
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PricingSection showHeader showTrustSignals />
        
        <Section background="white">
          <FeatureComparisonTable />
        </Section>

        <Section background="gradient" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Recursos que Transformam seu Negócio
              </h2>
              <p className="text-xl text-gray-600">
                Tecnologia avançada com foco em resultados reais
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {featuredResources.map((resource, index) => (
                <FeaturedResource key={index} {...resource} />
              ))}
            </div>
          </div>
        </Section>

        <Section background="white">
            <Testimonials />
        </Section>

        <SupportSection />
        
        <CallToAction />
        
        <Section background="white">
          <FAQ />
        </Section>
      </main>
      <Footer />
    </>
  )
}

