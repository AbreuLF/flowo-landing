"use client";

import { MessageSquare, Clock, Bell, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "./lead-capture-modal";

const steps = [
  {
    icon: MessageSquare,
    title: "Cliente Agenda pelo WhatsApp",
    description:
      "Seu cliente manda mensagem no WhatsApp da barbearia. A IA entende e oferece horários disponíveis automaticamente.",
  },
  {
    icon: Scissors,
    title: "Escolhe o Serviço",
    description:
      "Sistema mostra os serviços (corte, barba, degradê) com preços e duração. Cliente escolhe o que quer fazer.",
  },
  {
    icon: Clock,
    title: "Marca o Horário",
    description:
      "IA mostra horários livres na agenda dos seus barbeiros. Cliente escolhe melhor horário e pronto, agendado!",
  },
  {
    icon: Bell,
    title: "Lembrete Automático",
    description:
      "Sistema envia lembrete no WhatsApp 1 dia antes e 1 hora antes. Cliente não esquece e você não perde dinheiro.",
  },
];

export default function HowItWorks() {
  return (
    <Section background="light" id="como-funciona">
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
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Simples e Rápido: 4 Passos
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Veja como funciona o agendamento automático pelo WhatsApp.
              Seu cliente agenda, você só precisa aparecer pra cortar!
            </motion.p>

            <div className="space-y-6 md:space-y-8">
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
                    <p className="text-sm md:text-base text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative gradient-bg-medium rounded-2xl p-4 md:p-8 min-h-[400px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { icon: MessageSquare, label: "WhatsApp" },
                  { icon: Scissors, label: "Serviço" },
                  { icon: Clock, label: "Horário" },
                  { icon: Bell, label: "Lembrete" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white/90 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-2 md:p-4 rounded-lg shadow-xl">
                <p className="font-bold text-xl md:text-2xl text-primary">
                  4 Etapas
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Para transformar seu negócio
                </p>
              </div>

              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white p-2 md:p-4 rounded-lg shadow-xl">
                <p className="font-bold text-xl md:text-2xl text-green-500">
                  100%
                </p>
                <p className="text-xs md:text-sm text-gray-600">Automatizado</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Quer parar de perder clientes que não aparecem?
          </h3>
          <LeadCaptureModal>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Teste Grátis - Sem Cartão
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </LeadCaptureModal>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            ✓ 14 dias grátis • Sem compromisso • Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
