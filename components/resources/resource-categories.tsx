import { Book, Video, FileText, Users, Code, BarChart } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { name: 'Guias', icon: Book, href: '/recursos/guias' },
  { name: 'Vídeos', icon: Video, href: '/recursos/videos' },
  { name: 'Templates', icon: FileText, href: '/recursos/templates' },
  { name: 'Comunidade', icon: Users, href: '/recursos/comunidade' },
  { name: 'API', icon: Code, href: '/recursos/api' },
  { name: 'Relatórios', icon: BarChart, href: '/recursos/relatorios' },
]

export function ResourceCategories() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Explore Nossos Recursos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={category.href} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <category.icon className="w-12 h-12 text-primary mb-4" />
              <span className="text-lg font-semibold text-center">{category.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

