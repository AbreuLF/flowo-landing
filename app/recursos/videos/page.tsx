import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { VideoHero } from '@/components/resources/video-hero'
import { VideoGrid } from '@/components/resources/video-grid'
import { VideoCategories } from '@/components/resources/video-categories'
import { VideoSearch } from '@/components/resources/video-search'
import { FeaturedVideo } from '@/components/resources/featured-video'
import { NewsletterSignup } from '@/components/resources/newsletter-signup'
import AIChatbot from '@/components/ai-chatbot'

export const metadata: Metadata = {
  title: 'Vídeos - Flowo',
  description: 'Explore nossa coleção de vídeos tutoriais e webinars para maximizar seu uso do Flowo.',
}

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-primary-50 to-white">
        <VideoHero />
        <VideoSearch />
        <FeaturedVideo />
        <VideoCategories />
        <VideoGrid />
        <NewsletterSignup />
      </main>
      <Footer />
      <AIChatbot />
    </>
  )
}

