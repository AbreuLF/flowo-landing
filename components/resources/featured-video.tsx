"use client";

import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FeaturedVideo() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Vídeo em Destaque
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
                src="/videos/featured-video-thumbnail.jpg"
                alt="Thumbnail do vídeo em destaque"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Play className="mr-2 h-5 w-5" /> Assistir agora
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/3 p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Masterclass: Otimizando seu Fluxo de Trabalho com o Flowo
              </h3>
              <p className="text-gray-600 mb-4">
                Aprenda técnicas avançadas para maximizar sua produtividade e
                eficiência usando os recursos mais poderosos do Flowo.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                45 minutos
              </div>
              <Button variant="outline" className="w-full">
                Adicionar à lista
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
