import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAContextual } from "@/components/cta-contextual";
import { ProofResultsSection } from "@/components/proof-results-section";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Flowo vs Agenda Manual para Barbearias | Flowo",
  description:
    "Entenda a diferença entre Flowo e agenda manual para barbearias. Compare produtividade, faltas e experiência do cliente.",
};

const comparison = [
  {
    criteria: "Confirmação de horário automática",
    flowo: true,
    manual: false,
  },
  {
    criteria: "Tempo gasto com mensagens repetitivas",
    flowo: "baixo",
    manual: "alto",
  },
  {
    criteria: "Risco de esquecimento / conflito de horário",
    flowo: "baixo",
    manual: "alto",
  },
  {
    criteria: "Gestão por equipe e múltiplos barbeiros",
    flowo: true,
    manual: false,
  },
  {
    criteria: "Escala de atendimento sem aumentar caos",
    flowo: true,
    manual: false,
  },
];

function renderValue(value: boolean | string) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-gray-700">{value}</span>;
  }
  return value ? (
    <Check className="h-5 w-5 text-emerald-600" />
  ) : (
    <X className="h-5 w-5 text-red-500" />
  );
}

export default function FlowoVsAgendaManualPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Section background="white" className="pt-32 pb-12">
          <div className="mx-auto max-w-5xl">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                {
                  label: "Flowo vs Agenda Manual",
                  href: "/flowo-vs-agenda-manual",
                },
              ]}
            />

            <h1 className="mt-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Flowo vs agenda manual para barbearia: produtividade sem desgaste para sua equipe
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              Agenda manual funciona até certo ponto. Quando o volume aumenta,
              aparecem conflitos, faltas e retrabalho. O Flowo automatiza o que
              consome tempo e organiza o crescimento da barbearia.
            </p>
          </div>
        </Section>

        <Section background="light" className="py-14">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="grid grid-cols-3 border-b bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-700">
              <div>Critério</div>
              <div className="text-center">Flowo</div>
              <div className="text-center">Agenda manual</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.criteria}
                className="grid grid-cols-3 items-center border-b px-6 py-4 last:border-b-0"
              >
                <div className="text-sm text-gray-700">{row.criteria}</div>
                <div className="flex justify-center">{renderValue(row.flowo)}</div>
                <div className="flex justify-center">{renderValue(row.manual)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section background="white" className="py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-900">
                Conteúdos que aprofundam este comparativo
              </p>
              <div className="mt-3 grid gap-2 text-sm">
                <Link
                  href="/recursos/guias/escala-equipe"
                  className="text-primary hover:underline"
                >
                  Escala de equipe para barbearia
                </Link>
                <Link
                  href="/recursos/guias/gerenciamento-equipe"
                  className="text-primary hover:underline"
                >
                  Gerenciamento de equipe com dados
                </Link>
              </div>
            </div>
            <ProofResultsSection />
            <CTAContextual
              title="Pare de apagar incêndio na agenda todos os dias"
              description="Automatize confirmação, lembrete e fluxo de agendamento para ganhar tranquilidade operacional."
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
