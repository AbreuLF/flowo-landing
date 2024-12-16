import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const featuredResources = [
  {
    title: 'Guia Definitivo de Agendamento',
    description: 'Aprenda as melhores práticas para otimizar sua agenda e aumentar a produtividade.',
    image: '/resources/scheduling-guide.jpg',
    href: '/recursos/guias/guia-definitivo-agendamento',
  },
  {
    title: 'Integração com WhatsApp',
    description: 'Tutorial passo a passo para configurar a integração do Flowo com o WhatsApp Business.',
    image: '/resources/whatsapp-integration.jpg',
    href: '/recursos/guias/integracao-whatsapp',
  },
  {
    title: 'Webinar: Aumente suas Conversões',
    description: 'Assista ao nosso webinar sobre como aumentar as conversões de agendamentos.',
    image: '/resources/webinar-conversions.jpg',
    href: '/recursos/videos/webinar-aumento-conversoes',
  },
]

export function FeaturedResources() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Recursos em Destaque</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredResources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={resource.href} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Image src={resource.image} alt={resource.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="text-primary font-semibold flex items-center">
                  Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

