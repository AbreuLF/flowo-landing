import { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  HandCoins,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAContextual } from "@/components/cta-contextual";
import { ProofResultsSection } from "@/components/proof-results-section";

export const metadata: Metadata = {
  title: "Software para Barbearia com PIX Antecipado e Sinal | Flowo",
  description:
    "Receba sinal via PIX antes do atendimento e reduza faltas com software para barbearia integrado ao WhatsApp.",
};

const pixOutcomes = [
  "Confirmação financeira antes do horário de alta demanda.",
  "Menos no-show em cortes premium e serviços longos.",
  "Maior previsibilidade de caixa semanal.",
];

const safeguards = [
  {
    title: "Regra por serviço",
    description:
      "Defina quando cobrar sinal (ex.: procedimentos longos ou horários concorridos).",
    icon: ShieldCheck,
  },
  {
    title: "Fluxo transparente",
    description:
      "Cliente recebe instrução clara no WhatsApp e confirmação automática após pagamento.",
    icon: CreditCard,
  },
  {
    title: "Experiência sem atrito",
    description:
      "Sem burocracia: cobrança simples, confirmação rápida e agenda atualizada.",
    icon: Sparkles,
  },
];

export default function PixSoftwarePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Section background="white" className="pt-32 pb-14">
          <div className="mx-auto max-w-5xl">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                {
                  label: "Software para Barbearia com PIX",
                  href: "/software-barbearia-com-pix",
                },
              ]}
            />

            <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                <HandCoins className="h-4 w-4" />
                PIX antecipado para reduzir faltas
              </div>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Software para barbearia com PIX antecipado: menos no-show, mais caixa previsível
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">
                No Flowo, você ativa cobrança antecipada por PIX para horários
                estratégicos. O cliente confirma presença, sua agenda fica protegida
                e o time opera com mais tranquilidade.
              </p>
            </div>
          </div>
        </Section>

        <Section background="light" className="py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Resultados esperados com PIX antecipado
            </h2>
            <ul className="mt-6 space-y-3">
              {pixOutcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 text-gray-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section background="white" className="py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Como manter uma experiência boa para o cliente
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {safeguards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <p className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                Dica: aplique sinal primeiro nos horários mais concorridos e em
                serviços de maior ticket. Veja exemplos no guia de{" "}
                <Link
                  href="/recursos/guias/pagamentos-pix"
                  className="font-semibold underline underline-offset-4"
                >
                  pagamentos com PIX
                </Link>
                .
              </p>
            </div>

            <ProofResultsSection />

            <p className="mt-6 text-sm text-gray-600">
              Se você controla financeiro no manual, compare em{" "}
              <Link
                href="/flowo-vs-planilha"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Flowo vs planilha
              </Link>
              .
            </p>

            <CTAContextual
              title="Use PIX para proteger horários críticos sem complicar a operação"
              description="Ative regras simples e combine agenda via WhatsApp com confirmação financeira no momento certo."
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
