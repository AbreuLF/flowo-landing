import { motion } from 'framer-motion'
import { Calendar, Users, Zap, BarChart, MessageCircle, Shield } from 'lucide-react'
import Link from 'next/link'

const topics = [
  { name: 'Agendamento', icon: Calendar, href: '/recursos/agendamento' },
  { name: 'Gestão de Equipe', icon: Users, href: '/recursos/gestao-equipe' },
  { name: 'Produtividade', icon: Zap, href: '/recursos/produtividade' },
  { name: 'Análise de Dados', icon: BarChart, href: '/recursos/analise-dados' },
  { name: 'Integração WhatsApp', icon: MessageCircle, href: '/recursos/integracao-whatsapp' },
  { name: 'Segurança', icon: Shield, href: '/recursos/seguranca' },
]

export function PopularTopics() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tópicos Populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={topic.href} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <topic.icon className="w-12 h-12 text-primary mb-4" />
                <span className="text-lg font-semibold text-center">{topic.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

