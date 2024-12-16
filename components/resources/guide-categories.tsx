import { motion } from 'framer-motion'
import { Rocket, Users, Zap, BarChart, MessageCircle, Shield } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { name: 'Primeiros Passos', icon: Rocket, href: '/recursos/guias/primeiros-passos' },
  { name: 'Gestão de Equipe', icon: Users, href: '/recursos/guias/gestao-equipe' },
  { name: 'Produtividade', icon: Zap, href: '/recursos/guias/produtividade' },
  { name: 'Análise de Dados', icon: BarChart, href: '/recursos/guias/analise-dados' },
  { name: 'Integrações', icon: MessageCircle, href: '/recursos/guias/integracoes' },
  { name: 'Segurança', icon: Shield, href: '/recursos/guias/seguranca' },
]

export function GuideCategories() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Categorias de Guias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <category.icon className="w-12 h-12 text-primary mb-4" />
                <span className="text-lg font-semibold text-center">{category.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

