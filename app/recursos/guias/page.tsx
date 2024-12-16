import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { GuidesHero } from '@/components/resources/guides-hero'
import { GuideGrid } from '@/components/resources/guide-grid'
import { GuideSearch } from '@/components/resources/guide-search'
import { NewsletterSignup } from '@/components/resources/newsletter-signup'
import AIChatbot from '@/components/ai-chatbot'

export const metadata: Metadata = {
  title: 'Guias - Flowo',
  description: 'Explore nossa coleção de guias detalhados para maximizar seu uso do Flowo e impulsionar seu negócio.',
}

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-primary-50 to-white">
        <GuidesHero />
        <GuideSearch />
        <GuideGrid />
        <NewsletterSignup />
      </main>
      <Footer />
      <AIChatbot />
    </>
  )
}

