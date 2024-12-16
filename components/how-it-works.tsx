"use client";

import { Calendar, Bell, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "./section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "./lead-capture-modal";

const steps = [
  {
    icon: Calendar,
    title: "Integração Simples",
    description:
      "Conecte o Flowo ao seu calendário existente em minutos. Compatível com Google Calendar, Outlook e iCal.",
  },
  {
    icon: Zap,
    title: "IA Analisa Seus Dados",
    description:
      "Nossa IA avançada aprende seus padrões de agendamento, preferências de clientes e histórico de compromissos.",
  },
  {
    icon: Shield,
    title: "Otimização Automática",
    description:
      "Sua agenda é continuamente otimizada para máxima eficiência, reduzindo tempos ociosos.",
  },
  {
    icon: Bell,
    title: "Lembretes Inteligentes",
    description:
      "Envio automático de lembretes personalizados via WhatsApp, reduzindo drasticamente as faltas.",
  },
];

export default function HowItWorks() {
  return (
    <Section background="light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              className="inline-block text-primary font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Como Funciona
            </motion.span>

            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transforme seu Negócio em 4 Etapas
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubra como nossa tecnologia de IA revoluciona seu processo de
              agendamento de forma simples e eficiente.
            </motion.p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-gradient-to-br from-cyan-400 to-purple-400 rounded-2xl p-8">
              <Image
                src="/how-it-works-demo.png"
                alt="Como o Flowo funciona"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-2xl text-primary">4 Etapas</p>
                <p className="text-sm text-gray-600">
                  Para transformar seu negócio
                </p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-2xl text-green-500">100%</p>
                <p className="text-sm text-gray-600">Automatizado</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Pronto para revolucionar seu agendamento?
          </h3>
          <LeadCaptureModal>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Comece seu teste gratuito de 14 dias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </LeadCaptureModal>
          <p className="mt-4 text-gray-600">
            Não é necessário cartão de crédito. Cancele a qualquer momento.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
