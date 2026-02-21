import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarDays,
  Clapperboard,
  Download,
  Play,
} from "lucide-react";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Shorts e Reels para Barbearias | Flowo",
  description:
    "8 roteiros prontos de Shorts e Reels para divulgar sua barbearia e gerar agendamentos.",
};

const shortsPlan = [
  {
    title: "Como aumentar ticket médio sem parecer venda forçada",
    duration: "45-60s",
    hook: "Seu cliente já ia gastar R$ 50. Como fazer virar R$ 72 com naturalidade?",
    steps: [
      "Mostre um combo simples (corte + barba + acabamento).",
      "Explique quando ofertar: no agendamento e na confirmação.",
      "Feche com exemplo real de ganho por semana.",
    ],
    cta: "Baixe a planilha de combos e aplique hoje.",
    sourceUrl: "/recursos/guias/aumentar-ticket-medio",
  },
  {
    title: "Fluxo de confirmação no WhatsApp que reduz no-show",
    duration: "45-60s",
    hook: "Você ainda confirma no braço? Esse fluxo de 3 mensagens resolve.",
    steps: [
      "Mensagem de lembrete 24h antes.",
      "Confirmação final 2h antes.",
      "Remarcação automática para horário liberado.",
    ],
    cta: "Pegue o checklist no link e copie o fluxo.",
    sourceUrl: "/agenda-barbearia-whatsapp",
  },
  {
    title: "Escala de equipe sem conflito de horários",
    duration: "45-60s",
    hook: "Sua equipe vive em conflito de agenda? Use essa regra semanal.",
    steps: [
      "Defina blocos fixos por barbeiro.",
      "Distribua por especialidade e demanda.",
      "Revise capacidade todo domingo.",
    ],
    cta: "Veja o passo a passo completo no guia.",
    sourceUrl: "/recursos/guias/escala-equipe",
  },
  {
    title: "Fidelização de clientes em 30 dias",
    duration: "45-60s",
    hook: "Parou de depender só de cliente novo? Faça este plano de 30 dias.",
    steps: [
      "Pós-atendimento em até 24h.",
      "Reativação segmentada para inativos 45+ dias.",
      "Oferta de retorno com contexto.",
    ],
    cta: "Abra o roteiro de reativação e adapte.",
    sourceUrl: "/recursos/guias/fidelizacao-clientes",
  },
  {
    title: "Controle financeiro que cabe na rotina da barbearia",
    duration: "45-60s",
    hook: "Barbearia cheia e caixa apertado? Falta este painel semanal.",
    steps: [
      "Separe faturamento de margem.",
      "Defina meta semanal por barbeiro.",
      "Acompanhe ticket e ocupação juntos.",
    ],
    cta: "Baixe o fluxo de caixa semanal no material gratuito.",
    sourceUrl: "/recursos/guias/controle-financeiro-barbearia",
  },
  {
    title: "Flowo vs Planilha: o custo oculto do manual",
    duration: "45-60s",
    hook: "Planilha parece barata, mas qual é o custo de oportunidade?",
    steps: [
      "Mostre o tempo perdido em retrabalho.",
      "Mostre os erros de conflito de horários.",
      "Mostre o impacto no no-show e no faturamento.",
    ],
    cta: "Veja o comparativo completo e decida com dados.",
    sourceUrl: "/flowo-vs-planilha",
  },
  {
    title: "No-show: lembrete + PIX antecipado",
    duration: "45-60s",
    hook: "Quer reduzir no-show rápido? Combine lembrete e sinal PIX.",
    steps: [
      "Escolha serviços e horários críticos.",
      "Aplique sinal somente nesses casos.",
      "Comunique política de forma transparente.",
    ],
    cta: "Confira o guia de pagamentos com PIX.",
    sourceUrl: "/software-barbearia-com-pix",
  },
  {
    title: "Flowo vs Agenda Manual: quando migrar",
    duration: "45-60s",
    hook: "Sua agenda manual virou gargalo? 3 sinais para migrar hoje.",
    steps: [
      "Mensagens repetitivas consumindo o dia.",
      "Conflitos de horário recorrentes.",
      "Falta de visão de desempenho por barbeiro.",
    ],
    cta: "Acesse o comparativo e veja o ponto de virada.",
    sourceUrl: "/flowo-vs-agenda-manual",
  },
];

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <Section background="white" className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb
                items={[
                  { label: "Início", href: "/" },
                  { label: "Recursos", href: "/recursos" },
                  { label: "Vídeos", href: "/recursos/videos" },
                ]}
              />

              {/* Hero */}
              <div className="mt-8 mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <Play className="w-4 h-4" />
                  Shorts & Reels (30 dias)
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  8 roteiros de vídeos curtos prontos para publicar
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Cada roteiro está conectado a um artigo estratégico do site.
                  Use estes scripts para transformar conteúdo em alcance e
                  gerar mais agendamentos.
                </p>
              </div>

              <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Pacote de distribuição pronto
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Inclui hook, estrutura de roteiro e CTA para cada tema.
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/downloads/lead-magnets/roteiros-shorts-reels-30-dias.csv">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar roteiro CSV
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {shortsPlan.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                          <Clapperboard className="h-3.5 w-3.5" />
                          Roteiro {index + 1}
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {item.duration}
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Hook:</span>{" "}
                      {item.hook}
                    </p>
                    <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-gray-600">
                      {item.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                    <p className="mt-4 text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">CTA:</span>{" "}
                      {item.cta}
                    </p>
                    <Link
                      href={item.sourceUrl}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Ver página base do roteiro
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-primary text-white rounded-2xl">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-3">
                    Quer transformar esses roteiros em agenda lotada?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Estruture sua operação com automação de WhatsApp e rode o
                    plano de conteúdo com conversão no final.
                  </p>
                  <LeadCaptureModal>
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Começar teste grátis
                    </Button>
                  </LeadCaptureModal>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
