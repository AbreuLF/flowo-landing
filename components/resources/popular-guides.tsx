import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const popularGuides = [
  {
    title: 'Integração com WhatsApp',
    description: 'Aumente o engajamento dos clientes em 40% com lembretes via WhatsApp!',
    href: '/recursos/guias/integracao-whatsapp',
  },
  {
    title: 'Análise de Dados e Relatórios',
    description: 'Tome decisões baseadas em dados e aumente seu faturamento em até 25%!',
    href: '/recursos/guias/analise-dados-relatorios',
  },
  {
    title: 'Maximizando a Produtividade com o Flowo',
    description: 'Economize até 15 horas por semana com automação inteligente!',
    href: '/recursos/guias/maximizando-produtividade',
  },
]

export function PopularGuides() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Guias Mais Populares</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {popularGuides.map((guide, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
            <p className="text-gray-600 mb-4">{guide.description}</p>
            <Link href={guide.href} className="text-primary font-semibold flex items-center">
              Ler mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

