"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Users,
  DollarSign,
  Clock,
  Smile,
} from "lucide-react";
import SuccessStoryLayout from "@/components/success-story-layout";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";
import KeyResults from "@/components/key-results";
import BeforeAfterComparison from "@/components/before-after-comparison";
import { Section } from "@/components/section";
import FAQ from "@/components/faq";

const keyResults = [
  { icon: Users, value: 52, suffix: "%", label: "Aumento nos agendamentos" },
  { icon: DollarSign, value: 40, suffix: "%", label: "Aumento na receita" },
  { icon: Clock, value: 20, label: "Horas economizadas por semana" },
  { icon: Smile, value: 98, suffix: "%", label: "Satisfação dos clientes" },
];

const beforeAfterItems = [
  {
    before: "30% de faltas em consultas",
    after: "Apenas 5% de faltas em consultas",
  },
  {
    before: "20 horas/semana em tarefas administrativas",
    after: "5 horas/semana em tarefas administrativas",
  },
  {
    before: "Dificuldade em preencher horários vagos",
    after: "Agenda otimizada e preenchida",
  },
  {
    before: "Comunicação manual com pacientes",
    after: "Lembretes e confirmações automáticas via WhatsApp",
  },
];

export default function ClinicaSaudeTotalPage() {
  return (
    <SuccessStoryLayout
      title="Clínica Saúde Total"
      industry="Saúde"
      result="Aumento de 52% nos agendamentos e 40% na receita"
    >
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <KeyResults results={keyResults} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/clinic-success.jpg"
              alt="Clínica Saúde Total"
              width={800}
              height={400}
              className="rounded-lg shadow-xl mb-8"
            />
          </motion.div>

          <h2 className="text-3xl font-bold mb-6">O Desafio</h2>
          <p className="text-xl mb-8">
            A Clínica Saúde Total enfrentava desafios significativos que
            impactavam diretamente sua eficiência e lucratividade:
          </p>
          <ul className="list-disc pl-6 mb-8 text-lg space-y-2">
            <li>Alto índice de faltas em consultas (30%)</li>
            <li>Processo manual de agendamento ineficiente</li>
            <li>Dificuldade em gerenciar múltiplos profissionais</li>
            <li>Comunicação limitada com pacientes</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6">A Solução Flowo</h2>
          <p className="text-xl mb-8">
            Implementamos uma solução personalizada do Flowo, focando em:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Sistema de agendamento inteligente com IA",
              "Integração automática com WhatsApp",
              "Gestão centralizada de agenda",
              "Sistema de lembretes automatizados",
              "Análise de dados em tempo real",
              "Interface intuitiva para pacientes e equipe",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Check className="text-primary mr-2" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold mb-6">
            Resultados Transformadores
          </h2>
          <BeforeAfterComparison items={beforeAfterItems} />

          <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl">
            &quot;O Flowo não é apenas uma ferramenta, é um parceiro de negócios
            que transformou completamente nossa operação. O aumento na
            eficiência e na satisfação dos pacientes superou todas as nossas
            expectativas.&quot;
            <footer className="text-right mt-4 text-gray-600">
              - Dr. Carlos Mendes, Diretor Clínico
            </footer>
          </blockquote>

          <h2 className="text-3xl font-bold mb-6">
            Como o Flowo Fez a Diferença
          </h2>
          <ul className="list-disc pl-6 mb-8 text-lg space-y-2">
            <li>
              Integração perfeita com WhatsApp para lembretes e confirmações
              automáticas
            </li>
            <li>
              IA avançada para otimização de agenda e sugestão de horários
              ideais
            </li>
            <li>
              Análise de dados em tempo real para tomada de decisões
              estratégicas
            </li>
            <li>
              Interface intuitiva que reduziu o tempo gasto em tarefas
              administrativas
            </li>
          </ul>

          <div className="bg-primary text-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para revolucionar sua clínica?
            </h3>
            <p className="mb-6">
              Junte-se a centenas de clínicas que já estão colhendo os
              benefícios do Flowo. Agende uma demonstração gratuita e descubra
              como podemos impulsionar seus resultados.
            </p>
            <LeadCaptureModal>
              <Button variant="secondary" size="lg">
                Agende sua demo personalizada
                <ArrowRight className="ml-2" />
              </Button>
            </LeadCaptureModal>
          </div>

          <Section background="gradient-reverse">
            <FAQ />
          </Section>
        </div>
      </Section>
    </SuccessStoryLayout>
  );
}
