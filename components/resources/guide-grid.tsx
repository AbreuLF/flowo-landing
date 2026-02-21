"use client";

import {
  Clock,
  ArrowRight,
  Calendar,
  Users,
  CreditCard,
  MessageCircle,
  Bell,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

const guides = [
  {
    title: "Guia Definitivo de Agendamento",
    description:
      "Configure seu calendário, automatize lembretes e reduza faltas em até 70%. O guia completo para otimizar sua agenda.",
    readTime: "10 min",
    category: "Agendamento",
    href: "/recursos/guias/guia-definitivo-agendamento",
    icon: Calendar,
    topics: ["Lembretes automáticos", "PIX antecipado", "Liberação de horários"],
  },
  {
    title: "Gerenciamento de Equipe",
    description:
      "Organize a agenda de cada barbeiro, acompanhe desempenho e distribua clientes de forma inteligente.",
    readTime: "15 min",
    category: "Equipe",
    href: "/recursos/guias/gerenciamento-equipe",
    icon: Users,
    topics: ["Agendas individuais", "Métricas de desempenho", "Comissões"],
  },
  {
    title: "Pagamentos com PIX",
    description:
      "Configure pagamentos antecipados via PIX, reduza faltas e receba antes mesmo do atendimento.",
    readTime: "12 min",
    category: "Pagamentos",
    href: "/recursos/guias/pagamentos-pix",
    icon: CreditCard,
    topics: ["PIX automático", "Política de reembolso", "Conta digital"],
  },
  {
    title: "Configurando WhatsApp com IA",
    description:
      "Transforme seu WhatsApp em um assistente que responde clientes 24/7 e agenda automaticamente.",
    readTime: "8 min",
    category: "WhatsApp",
    href: "/recursos/guias/configurando-whatsapp",
    icon: MessageCircle,
    topics: ["IA no WhatsApp", "Respostas automáticas", "Agendamento 24/7"],
  },
  {
    title: "Reduzindo Faltas na Barbearia",
    description:
      "Estratégias comprovadas para diminuir no-shows em até 80% com lembretes e políticas claras.",
    readTime: "10 min",
    category: "No-shows",
    href: "/recursos/guias/reduzindo-faltas",
    icon: Bell,
    topics: ["Lembretes 24h/2h", "PIX antecipado", "Política de cancelamento"],
  },
  {
    title: "Relatórios e Métricas",
    description:
      "Entenda as métricas essenciais para acompanhar o desempenho da sua barbearia e crescer.",
    readTime: "10 min",
    category: "Métricas",
    href: "/recursos/guias/relatorios-metricas",
    icon: BarChart3,
    topics: ["Taxa de ocupação", "Desempenho por barbeiro", "Horários de pico"],
  },
  {
    title: "Aumentar Ticket Médio",
    description:
      "Estratégias para vender mais por atendimento com combos, upgrades e oferta contextual.",
    readTime: "9 min",
    category: "Financeiro",
    href: "/recursos/guias/aumentar-ticket-medio",
    icon: CreditCard,
    topics: ["Combos", "Upsell inteligente", "Preço por valor"],
  },
  {
    title: "Escala de Equipe",
    description:
      "Monte uma escala eficiente para reduzir atrasos, conflitos e sobrecarga na operação.",
    readTime: "11 min",
    category: "Equipe",
    href: "/recursos/guias/escala-equipe",
    icon: Users,
    topics: ["Capacidade semanal", "Distribuição de agenda", "Turnos"],
  },
  {
    title: "Fidelização de Clientes",
    description:
      "Aumente a frequência de retorno com reativação e relacionamento contínuo no WhatsApp.",
    readTime: "10 min",
    category: "Marketing",
    href: "/recursos/guias/fidelizacao-clientes",
    icon: MessageCircle,
    topics: ["Reativação", "Recorrência", "Pós-atendimento"],
  },
  {
    title: "Controle Financeiro da Barbearia",
    description:
      "Aprenda a acompanhar caixa, margem e indicadores essenciais para tomar decisões melhores.",
    readTime: "12 min",
    category: "Financeiro",
    href: "/recursos/guias/controle-financeiro-barbearia",
    icon: BarChart3,
    topics: ["Fluxo de caixa", "Margem", "Metas semanais"],
  },
];

export function GuideGrid() {
  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Guias Disponíveis
        </h2>

        <div className="space-y-6">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              className="group block bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Icon */}
                <div className="p-3 bg-primary/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                  <guide.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime} de leitura
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{guide.description}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {guide.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center">
                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Quer ver o Flowo na prática?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Configure sua barbearia em 5 minutos. 14 dias grátis para testar
            tudo que você leu nos guias.
          </p>
          <LeadCaptureModal>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Começar teste grátis
            </Button>
          </LeadCaptureModal>
        </div>

        {/* More guides coming */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Mais guias em breve. Tem uma dúvida específica?{" "}
            <a
              href="mailto:contato@flowo.com.br"
              className="text-primary hover:underline"
            >
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
