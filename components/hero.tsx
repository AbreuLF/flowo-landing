"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import { LeadCaptureModal } from "./lead-capture-modal";
import { Section } from "./section";

const features = [
  {
    title: "Agenda Otimizada com IA",
    description: "Organize cortes e barbas sem sobreposição",
  },
  {
    title: "Lembretes Automáticos",
    description: "Clientes recebem confirmação no WhatsApp",
  },
  {
    title: "Gestão de Fila",
    description: "Acompanhe quem está esperando em tempo real",
  },
  {
    title: "Histórico do Cliente",
    description: "Lembre-se do último corte de cada cliente",
  },
];

export default function Hero() {
  return (
    <Section background="gradient" className="pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
            Feito para <span className="font-bold">Barbearias</span>
          </span>
        </motion.div>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sua Barbearia
              <br />
              no <span className="gradient-text">Automático</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Agendamento via WhatsApp com IA, lembretes automáticos e gestão completa
              da sua equipe. Mais tempo cortando, menos tempo gerenciando.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LeadCaptureModal>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Teste Grátis - Sem Cartão <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </LeadCaptureModal>
              <Button
                variant="outline"
                className="w-full sm:w-auto inline-flex items-center justify-center"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Demo de 2 minutos
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-gray-500 mb-6 flex items-center justify-center sm:justify-start gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Check className="w-4 h-4 text-green-500" />
              Sem compromisso • Cancele quando quiser
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-4 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="gradient-bg-light p-4 rounded-xl border border-blue-200/50">
                <p className="text-2xl font-bold gradient-text">573+</p>
                <p className="text-xs text-gray-600">Barbearias</p>
              </div>
              <div className="gradient-bg-light p-4 rounded-xl border border-blue-200/50">
                <p className="text-2xl font-bold gradient-text">60%</p>
                <p className="text-xs text-gray-600">Menos faltas</p>
              </div>
              <div className="gradient-bg-light p-4 rounded-xl border border-blue-200/50">
                <p className="text-2xl font-bold gradient-text">4.8★</p>
                <p className="text-xs text-gray-600">Avaliação</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <motion.div
            className="relative mt-8 lg:mt-0 shrink grow basis-auto w-full lg:w-[unset]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative gradient-bg-medium rounded-2xl p-4 md:p-8 min-h-[400px] flex items-center justify-center">
              <div className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">
                  Sistema em Ação
                </p>
                <p className="text-white/80 text-sm">
                  Agendamento automático via WhatsApp
                </p>
              </div>

              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-2 md:p-4 rounded-lg shadow-xl">
                <p className="font-bold text-xl md:text-2xl text-primary">
                  320
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Cortes este mês
                </p>
              </div>

              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white p-2 md:p-4 rounded-lg shadow-xl">
                <p className="font-bold text-xl md:text-2xl text-green-500">
                  R$ 15.200
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Faturamento este mês
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
