"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "./lead-capture-modal";
import { Section } from "./section";
import { motion } from "framer-motion";

export default function SupportSection() {
  return (
    <Section background="gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold mb-2 block">
              Suporte Dedicado
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Estamos aqui para apoiar seu negócio 🙌
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              O Flowo é uma ferramenta completa de agendamento, gestão de
              calendário e automação. Oferecemos suporte total para garantir o
              máximo aproveitamento e sucesso da sua operação.
            </p>
            <div className="flex items-center gap-6">
              <Image
                src="/support-team.jpg"
                alt="Equipe de Suporte Flowo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">
                  Nossa equipe está pronta para ajudar
                </p>
                <p className="text-gray-600">Resposta em até 5 minutos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Onboarding Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Configuração completa do sistema e treinamento da sua equipe
                    para garantir o máximo aproveitamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Suporte 24/7</h3>
                  <p className="text-gray-600">
                    Atendimento via chat e e-mail com tempo de resposta de até 5
                    minutos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Base de Conhecimento</h3>
                  <p className="text-gray-600">
                    Acesso a tutoriais, guias e melhores práticas para maximizar
                    seus resultados.
                  </p>
                </div>
              </div>

              <LeadCaptureModal>
                <Button size="lg" className="w-full">
                  Agende uma demonstração
                </Button>
              </LeadCaptureModal>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
