import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface ComparisonItem {
  before: string
  after: string
}

interface BeforeAfterComparisonProps {
  items: ComparisonItem[]
}

export default function BeforeAfterComparison({ items }: BeforeAfterComparisonProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Antes e Depois do Flowo</h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-lg p-4 flex-1 mr-4">
              <p className="text-gray-600">{item.before}</p>
            </div>
            <ArrowRight className="text-primary w-8 h-8 flex-shrink-0" />
            <div className="bg-primary text-white rounded-lg p-4 flex-1 ml-4">
              <p>{item.after}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

