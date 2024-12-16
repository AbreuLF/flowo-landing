"use client";

import SuccessStoryLayout from "@/components/success-story-layout";
import KeyResults from "@/components/key-results";
import BeforeAfterComparison from "@/components/before-after-comparison";
import FloatingCTA from "@/components/floating-cta";
import Image from "next/image";
import { Users, DollarSign, Clock, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/faq";
import { Section } from "@/components/section";

const keyResults = [
  { icon: Users, value: 35, suffix: "%", label: "Mais clientes atendidos" },
  { icon: DollarSign, value: 40, suffix: "%", label: "Aumento na receita" },
  { icon: Clock, value: 15, label: "Horas economizadas/semana" },
  { icon: Smile, value: 95, suffix: "%", label: "Satisfação dos clientes" },
];

const beforeAfterItems = [
  {
    before: "25% de horários não preenchidos",
    after: "Apenas 5% de horários vagos",
  },
  {
    before: "15 horas/semana em agendamentos manuais",
    after: "2 horas/semana em gestão de agenda",
  },
  {
    before: "Dificuldade em fidelizar clientes",
    after: "Sistema de lembretes e recompensas automático",
  },
  {
    before: "Comunicação ineficiente com clientes",
    after: "Interação personalizada via WhatsApp",
  },
];

export default function EstudioBelezaRadiantePage() {
  return (
    <SuccessStoryLayout
      title="Estúdio Beleza Radiante"
      industry="Beleza e Estética"
      result="Aumento de 40% na receita e 35% mais clientes atendidos"
    >
      <KeyResults results={keyResults} />

      <Image
        src="/beauty-success.jpg"
        alt="Estúdio Beleza Radiante"
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />

      <h2 className="text-3xl font-bold mb-6">
        Revolução na Gestão de Beleza com o Flowo
      </h2>
      <p className="text-xl mb-8">
        O Estúdio Beleza Radiante enfrentava desafios com horários ociosos e
        dificuldades na fidelização de clientes. Com a implementação do Flowo, o
        salão não apenas superou esses obstáculos, mas também alcançou um
        crescimento exponencial.
      </p>

      <BeforeAfterComparison items={beforeAfterItems} />

      <h2 className="text-3xl font-bold mb-6">
        Como o Flowo Transformou o Negócio
      </h2>
      <ul className="list-disc pl-6 mb-8 text-lg space-y-2">
        <li>
          Agendamento inteligente que maximiza a ocupação dos profissionais
        </li>
        <li>Sistema de lembretes via WhatsApp que reduziu faltas em 70%</li>
        <li>
          Recomendações personalizadas de serviços baseadas no histórico do
          cliente
        </li>
        <li>Gestão de estoque integrada para otimização de recursos</li>
      </ul>

      <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl">
        &quot;O Flowo não apenas simplificou nossa operação, mas também nos
        ajudou a criar uma experiência verdadeiramente personalizada para nossos
        clientes. O resultado? Mais fidelidade, mais indicações e um aumento
        significativo em nossa receita.&quot;
        <footer className="text-right mt-4 text-gray-600">
          - Ana Silva, Proprietária do Estúdio Beleza Radiante
        </footer>
      </blockquote>

      <div className="bg-primary text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">
          Pronto para transformar seu salão de beleza?
        </h3>
        <p className="mb-6">
          Junte-se a centenas de profissionais de beleza que já estão elevando
          seus negócios com o Flowo. Agende uma demonstração gratuita e descubra
          como podemos impulsionar seus resultados.
        </p>
        <Button size="lg" variant="secondary" className="w-full md:w-auto">
          Agende sua demo personalizada
        </Button>
      </div>

      <Section background="gradient-reverse">
        <FAQ />
      </Section>

      <FloatingCTA />
    </SuccessStoryLayout>
  );
}
