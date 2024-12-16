"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { LeadCaptureModal } from "./lead-capture-modal";
import { Section } from "./section";

const features = [
  {
    title: "Agendamento Inteligente",
    description: "IA que otimiza sua agenda automaticamente",
  },
  {
    title: "Lembretes via WhatsApp",
    description: "Reduz faltas em até 60%",
  },
  {
    title: "Sincronização em Tempo Real",
    description: "Integração com Google Calendar e Outlook",
  },
  {
    title: "Proteção Contra Spam",
    description: "Garante apenas reservas legítimas",
  },
];

export default function Hero() {
  return (
    <Section background="gradient" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            Mais de <span className="font-bold">50.000+</span> agendamentos
            realizados 🎉
          </span>
        </motion.div>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Impulsione seu
              <br />
              Negócio em até
              <br />
              <span className="gradient-text">
                <CountUp end={40} duration={2} />%
              </span>{" "}
              com IA
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              O Flowo utiliza Inteligência Artificial para otimizar sua agenda,
              reduzir faltas em até 60% e aumentar sua eficiência. Transforme
              seu negócio com agendamento inteligente e veja resultados reais em
              semanas.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LeadCaptureModal>
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </LeadCaptureModal>
              <Button
                variant="outline"
                className="inline-flex items-center justify-center"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Demo de 2 minutos
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 mr-3">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <Image
                src="/flowo-demo.gif"
                alt="Demonstração do Flowo"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-2xl text-primary">1.523</p>
                <p className="text-sm text-gray-600">Novos agendamentos hoje</p>
              </div>
              <div className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-2xl text-green-500">R$ 157.890</p>
                <p className="text-sm text-gray-600">
                  Faturamento extra este mês
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
