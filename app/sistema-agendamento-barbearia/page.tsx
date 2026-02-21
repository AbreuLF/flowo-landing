import { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck2,
  Clock3,
  MessageCircle,
  Scissors,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAContextual } from "@/components/cta-contextual";

export const metadata: Metadata = {
  title: "Sistema de Agendamento para Barbearia | Flowo",
  description:
    "Organize horários, reduza faltas e automatize confirmações com o sistema de agendamento para barbearia da Flowo.",
};

const benefits = [
  {
    icon: MessageCircle,
    title: "Agendamento via WhatsApp",
    description:
      "Cliente agenda no canal que já usa todos os dias, sem baixar app novo.",
  },
  {
    icon: CalendarCheck2,
    title: "Agenda centralizada",
    description:
      "Visualize horários por barbeiro, serviço e unidade em um único painel.",
  },
  {
    icon: Clock3,
    title: "Lembretes automáticos",
    description:
      "Confirmações antes do atendimento para diminuir no-show e horários vazios.",
  },
];

const fitCases = [
  "Barbearia solo que perde tempo respondendo mensagem o dia todo.",
  "Equipe com 2-10 barbeiros que precisa organizar escala e horários.",
  "Negócio em crescimento que quer padronizar atendimento e aumentar retorno.",
];

export default function SchedulingSystemPage() {
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
                  label: "Sistema de Agendamento para Barbearia",
                  href: "/sistema-agendamento-barbearia",
                },
              ]}
            />

            <div className="mt-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-white p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Scissors className="h-4 w-4" />
                Solução para barbearias
              </div>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Sistema de Agendamento para Barbearia com foco em resultado
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">
                O Flowo ajuda sua barbearia a lotar a agenda sem sobrecarregar a
                equipe. Centralize horários, automatize confirmações e mantenha o
                cliente comparecendo no horário certo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Redução de faltas
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Atendimento 24h
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Implantação rápida
                </span>
              </div>
            </div>
          </div>
        </Section>

        <Section background="light" className="py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900">
              O que muda na prática com o Flowo
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section background="white" className="py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Para quem esse sistema de agendamento é ideal
            </h2>
            <ul className="mt-6 space-y-4">
              {fitCases.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-700"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">
              <p className="flex items-start gap-2 text-sm text-green-900">
                <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0" />
                Quer entender como reduzir faltas com lembrete e PIX? Veja os
                guias em{" "}
                <Link
                  href="/recursos/guias"
                  className="font-semibold underline underline-offset-4"
                >
                  recursos para barbearias
                </Link>
                .
              </p>
            </div>

            <CTAContextual
              title="Transforme sua agenda em uma máquina de recorrência"
              description="Ganhe eficiência operacional e deixe o time focado no atendimento, não em troca de mensagens."
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
