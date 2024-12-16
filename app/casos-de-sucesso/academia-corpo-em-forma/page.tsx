"use client";

import SuccessStoryLayout from "@/components/success-story-layout";
import KeyResults from "@/components/key-results";
import BeforeAfterComparison from "@/components/before-after-comparison";
import FloatingCTA from "@/components/floating-cta";
import Image from "next/image";
import { Users, DollarSign, Clock, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import FAQ from "@/components/faq";

const keyResults = [
  { icon: Users, value: 70, suffix: "%", label: "Redução nas faltas" },
  { icon: DollarSign, value: 45, suffix: "%", label: "Aumento na receita" },
  { icon: Clock, value: 25, label: "Horas economizadas/semana" },
  { icon: Smile, value: 92, suffix: "%", label: "Retenção de membros" },
];

const beforeAfterItems = [
  {
    before: "40% de faltas em aulas agendadas",
    after: "Apenas 12% de faltas em aulas",
  },
  {
    before: "Taxa de retenção de 60% após 6 meses",
    after: "Taxa de retenção de 92% após 6 meses",
  },
  {
    before: "20 horas/semana em gestão de agenda",
    after: "5 horas/semana em gestão de agenda",
  },
  {
    before: "Dificuldade em preencher horários de baixo movimento",
    after: "Otimização de horários com promoções automáticas",
  },
];

export default function AcademiaCorpoEmFormaPage() {
  return (
    <SuccessStoryLayout
      title="Academia Corpo em Forma"
      industry="Fitness e Bem-estar"
      result="Redução de 70% nas faltas e aumento de 45% na receita"
    >
      <KeyResults results={keyResults} />
      <Image
        src="/gym-success.jpg"
        alt="Academia Corpo em Forma"
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      <h2 className="text-3xl font-bold mb-6">
        Transformação Fitness com Tecnologia Flowo
      </h2>
      <p className="text-xl mb-8">
        A Academia Corpo em Forma enfrentava desafios com altas taxas de faltas
        em aulas e baixa retenção de membros. Com a implementação do Flowo, a
        academia não apenas superou esses obstáculos, mas também alcançou um
        crescimento significativo em sua operação e satisfação dos clientes.
      </p>
      <BeforeAfterComparison items={beforeAfterItems} />
      <h2 className="text-3xl font-bold mb-6">
        Como o Flowo Revolucionou a Academia
      </h2>
      <ul className="list-disc pl-6 mb-8 text-lg space-y-2">
        <li>
          Sistema de agendamento inteligente que otimiza a ocupação das aulas
        </li>
        <li>
          Lembretes personalizados via WhatsApp que reduziram drasticamente as
          faltas
        </li>
        <li>
          Análise de dados para identificar tendências e ajustar a programação
          de aulas
        </li>
        <li>
          Gamificação da experiência do membro, aumentando o engajamento e a
          retenção
        </li>
      </ul>
      <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl">
        &quot;O Flowo transformou completamente a maneira como gerenciamos nossa
        academia. Não só reduzimos significativamente as faltas, mas também
        melhoramos a experiência geral de nossos membros. O resultado foi um
        aumento impressionante em nossa receita e na satisfação dos
        clientes.&quot;
        <footer className="text-right mt-4 text-gray-600">
          - Pedro Oliveira, Gerente da Academia Corpo em Forma
        </footer>
      </blockquote>
      <div className="bg-primary text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">
          Pronto para revolucionar sua academia?
        </h3>
        <p className="mb-6">
          Junte-se a centenas de academias que já estão maximizando seus
          resultados com o Flowo. Agende uma demonstração gratuita e descubra
          como podemos transformar seu negócio fitness.
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
