import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ResourcesHero } from '@/components/resources/resources-hero'
import { ResourceCategories } from '@/components/resources/resource-categories'
import { FeaturedResources } from '@/components/resources/featured-resources'
import { NewsletterSignup } from '@/components/resources/newsletter-signup'

export const metadata: Metadata = {
  title: 'Recursos - Flowo',
  description: 'Explore nossa biblioteca de recursos para maximizar sua produtividade com o Flowo.',
}

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ResourcesHero />
        <ResourceCategories />
        <FeaturedResources />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  )
}

