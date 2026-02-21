import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightLeft,
  CheckCheck,
  MessageSquareText,
  Smartphone,
  UserRound,
  Wallet,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAContextual } from "@/components/cta-contextual";
import { ProofResultsSection } from "@/components/proof-results-section";

export const metadata: Metadata = {
  title: "Agenda de Barbearia no WhatsApp com IA | Flowo",
  description:
    "Automatize sua agenda da barbearia no WhatsApp com IA, confirmação de horário e gestão simples para toda a equipe.",
};

const flowSteps = [
  {
    title: "Cliente chama no WhatsApp",
    description:
      "A IA entende serviço, dia e horário desejado sem precisar de atendimento manual.",
    icon: Smartphone,
  },
  {
    title: "Horário confirmado automaticamente",
    description:
      "A agenda é atualizada e o cliente recebe confirmação no mesmo chat.",
    icon: CheckCheck,
  },
  {
    title: "Lembrete e retorno",
    description:
      "Disparos automáticos reduzem faltas e aumentam retorno para próximos serviços.",
    icon: ArrowRightLeft,
  },
];

export default function WhatsappAgendaPage() {
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
                  label: "Agenda da Barbearia no WhatsApp",
                  href: "/agenda-barbearia-whatsapp",
                },
              ]}
            />

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <MessageSquareText className="h-4 w-4" />
                WhatsApp como canal principal
              </div>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Agenda de barbearia no WhatsApp com IA, sem confusão e sem retrabalho
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">
                Com o Flowo, o cliente agenda e confirma pelo WhatsApp em poucos
                minutos. Sua equipe para de perder tempo com conversa repetitiva e
                passa a focar no atendimento.
              </p>
            </div>
          </div>
        </Section>

        <Section background="gradient" className="py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Como funciona a agenda via WhatsApp
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {flowSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <span className="text-xs font-semibold text-primary">
                    Etapa {index + 1}
                  </span>
                  <step.icon className="mt-2 h-6 w-6 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section background="white" className="py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Benefícios para dono e equipe
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 text-gray-900">
                  <UserRound className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Atendimento consistente</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Respostas padronizadas, confirmação clara e menos ruído na agenda.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 text-gray-900">
                  <Wallet className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Mais receita por horário</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Menos faltas e mais encaixes elevam ocupação e faturamento mensal.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              Quer ver scripts e processos para WhatsApp? Acesse os{" "}
              <Link
                href="/recursos/guias"
                className="font-semibold text-primary underline underline-offset-4"
              >
                guias práticos da Flowo
              </Link>
              .
            </p>

            <ProofResultsSection />

            <p className="mt-6 text-sm text-gray-600">
              Quer validar se já passou da fase de agenda manual? Veja{" "}
              <Link
                href="/flowo-vs-agenda-manual"
                className="font-semibold text-primary underline underline-offset-4"
              >
                este comparativo objetivo
              </Link>
              .
            </p>

            <CTAContextual
              title="Coloque sua agenda para rodar no WhatsApp em poucos dias"
              description="Implante rápido, mantenha controle da equipe e aumente a previsibilidade da operação."
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
