import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ResourcesHero } from '@/components/resources/resources-hero'
import { ResourceGrid } from '@/components/resources/resource-grid'
import { ResourceSearch } from '@/components/resources/resource-search'
import { NewsletterSignup } from '@/components/resources/newsletter-signup'
import { ResourceNavigation } from '@/components/resources/resource-navigation'
import AIChatbot from '@/components/ai-chatbot'

export const metadata: Metadata = {
  title: 'Recursos - Flowo',
  description: 'Explore nossa biblioteca de recursos interativos para maximizar sua produtividade e crescimento com o Flowo.',
}

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-primary-50 to-white">
        <ResourcesHero />
        <ResourceSearch />
        <ResourceNavigation />
        <ResourceGrid />
        <NewsletterSignup />
      </main>
      <Footer />
      <AIChatbot />
    </>
  )
}

