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
  title: "Flowo vs Planilha para Barbearia: Comparativo Completo | Flowo",
  description:
    "Compare Flowo vs planilha para gestão de agenda da barbearia. Veja ganhos em organização, no-show e crescimento.",
};

const comparison = [
  {
    criteria: "Agendamento automático no WhatsApp",
    flowo: true,
    spreadsheet: false,
  },
  {
    criteria: "Lembrete de confirmação",
    flowo: true,
    spreadsheet: false,
  },
  {
    criteria: "Controle de equipe em tempo real",
    flowo: true,
    spreadsheet: false,
  },
  {
    criteria: "Risco de erro manual",
    flowo: "baixo",
    spreadsheet: "alto",
  },
  {
    criteria: "Escalabilidade (crescimento da operação)",
    flowo: true,
    spreadsheet: false,
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

export default function FlowoVsPlanilhaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Section background="white" className="pt-32 pb-12">
          <div className="mx-auto max-w-5xl">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Flowo vs Planilha", href: "/flowo-vs-planilha" },
              ]}
            />

            <h1 className="mt-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Flowo vs planilha para barbearia: qual opção cresce com a sua operação?
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              Planilha pode funcionar no começo, mas vira gargalo quando a
              operação cresce. O Flowo automatiza agenda, confirmação e
              relacionamento para você ganhar escala com previsibilidade.
            </p>
          </div>
        </Section>

        <Section background="light" className="py-14">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="grid grid-cols-3 border-b bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-700">
              <div>Critério</div>
              <div className="text-center">Flowo</div>
              <div className="text-center">Planilha</div>
            </div>
            {comparison.map((row) => (
              <div
                key={row.criteria}
                className="grid grid-cols-3 items-center border-b px-6 py-4 last:border-b-0"
              >
                <div className="text-sm text-gray-700">{row.criteria}</div>
                <div className="flex justify-center">{renderValue(row.flowo)}</div>
                <div className="flex justify-center">
                  {renderValue(row.spreadsheet)}
                </div>
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
                  href="/recursos/guias/controle-financeiro-barbearia"
                  className="text-primary hover:underline"
                >
                  Controle financeiro para barbearia
                </Link>
                <Link
                  href="/recursos/guias/aumentar-ticket-medio"
                  className="text-primary hover:underline"
                >
                  Como aumentar ticket médio na barbearia
                </Link>
              </div>
            </div>
            <ProofResultsSection />
            <CTAContextual
              title="Saia da operação no improviso e evolua para gestão profissional"
              description="Troque controles manuais por automação prática e visão clara da agenda."
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
