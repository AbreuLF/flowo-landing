import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FeaturedGuide() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Guia em Destaque
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <motion.div
              className="md:w-2/3 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/guides/featured-guide-image.jpg"
                alt="Imagem do guia em destaque"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="md:w-1/3 p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Guia Definitivo de Agendamento com o Flowo
              </h3>
              <p className="text-gray-600 mb-4">
                Aprenda as melhores práticas para otimizar sua agenda, reduzir
                faltas e aumentar sua produtividade em até 40% com o Flowo.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Tempo de leitura: 15 minutos
              </div>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Ler o guia <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
