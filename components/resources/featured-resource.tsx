import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function FeaturedResource() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-100 to-primary-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Guia Definitivo de Agendamento</h2>
            <p className="text-lg text-gray-600 mb-6">
              Aprenda as melhores práticas para otimizar sua agenda, reduzir faltas e aumentar sua produtividade em até 40%.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Ler o guia <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/resources/featured-guide-image.jpg"
              alt="Guia Definitivo de Agendamento"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

