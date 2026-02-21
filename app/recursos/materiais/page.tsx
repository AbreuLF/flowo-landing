import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileSpreadsheet,
  FileText,
  Calendar,
  DollarSign,
  Users,
  Instagram,
  Clock,
  MessageCircle,
} from "lucide-react";
import { DownloadGateModal } from "@/components/download-gate-modal";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Materiais Gratuitos para Barbearias - Flowo",
  description:
    "Baixe planilhas, templates e materiais gratuitos para organizar e fazer sua barbearia crescer.",
};

const downloadables = [
  // PDF Guides
  {
    id: "guia-completo",
    title: "Guia Completo para Barbearias",
    description:
      "O guia definitivo com checklist de abertura, precificação, fidelização e como automatizar sua barbearia.",
    icon: FileText,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    downloadUrl: "/downloads/guia-completo-barbearia.pdf",
    resourceType: "pdf" as const,
    tags: ["Guia", "Completo"],
  },
  {
    id: "templates-stories",
    title: "Templates de Stories para Instagram",
    description:
      "10 ideias de Stories prontas para usar na sua barbearia, com CTAs que convertem.",
    icon: Instagram,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    downloadUrl: "/downloads/templates-stories-barbearia.pdf",
    resourceType: "pdf" as const,
    tags: ["Marketing", "Instagram"],
  },
  {
    id: "referencia-rapida",
    title: "Cartão de Referência Rápida",
    description:
      "Métricas essenciais, checklist diário e metas para ter sempre à mão na sua barbearia.",
    icon: FileText,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    downloadUrl: "/downloads/referencia-rapida-barbearia.pdf",
    resourceType: "pdf" as const,
    tags: ["Gestão", "Métricas"],
  },
  // Spreadsheets
  {
    id: "planilha-precificacao",
    title: "Planilha de Precificação de Serviços",
    description:
      "Calcule o preço ideal dos seus serviços considerando custos, margem e concorrência.",
    icon: FileSpreadsheet,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    downloadUrl: "/downloads/planilha-precificacao-barbearia.xlsx",
    resourceType: "spreadsheet" as const,
    tags: ["Financeiro", "Preços"],
  },
  {
    id: "calendario-conteudo",
    title: "Calendário de Conteúdo para Instagram",
    description:
      "30 dias de ideias de posts para Instagram da sua barbearia com legendas prontas.",
    icon: Calendar,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    downloadUrl: "/downloads/calendario-conteudo-instagram.xlsx",
    resourceType: "spreadsheet" as const,
    tags: ["Marketing", "Instagram"],
  },
  {
    id: "checklist-abertura",
    title: "Checklist de Abertura de Barbearia",
    description:
      "Tudo que você precisa fazer antes de abrir: documentação, equipamentos, e mais.",
    icon: FileText,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    downloadUrl: "/downloads/checklist-abertura-barbearia.xlsx",
    resourceType: "spreadsheet" as const,
    tags: ["Gestão", "Iniciantes"],
  },
  {
    id: "planilha-comissoes",
    title: "Planilha de Comissões por Barbeiro",
    description:
      "Controle comissões, calcule automaticamente e evite erros no pagamento da equipe.",
    icon: DollarSign,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    downloadUrl: "/downloads/planilha-comissoes-barbearia.xlsx",
    resourceType: "spreadsheet" as const,
    tags: ["Financeiro", "Equipe"],
  },
  {
    id: "guia-fidelizacao",
    title: "Guia de Fidelização de Clientes",
    description:
      "Estratégias testadas para transformar clientes novos em clientes fiéis que voltam sempre.",
    icon: Users,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    downloadUrl: "/downloads/guia-fidelizacao-clientes.xlsx",
    resourceType: "spreadsheet" as const,
    tags: ["Marketing", "Clientes"],
  },
  // Lead magnets - Agendamento WhatsApp
  {
    id: "checklist-agendamento-whatsapp",
    title: "Checklist de Agendamento no WhatsApp",
    description:
      "Checklist prático para configurar fluxo de agendamento e confirmação via WhatsApp.",
    icon: MessageCircle,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    downloadUrl: "/downloads/lead-magnets/checklist-agendamento-whatsapp.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Agendamento WhatsApp"],
  },
  {
    id: "script-confirmacao-whatsapp",
    title: "Scripts de Confirmação no WhatsApp",
    description:
      "Mensagens prontas para confirmar horários, remarcar e recuperar no-show.",
    icon: MessageCircle,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    downloadUrl: "/downloads/lead-magnets/script-confirmacao-whatsapp.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Agendamento WhatsApp"],
  },
  // Lead magnets - Ticket Médio
  {
    id: "planilha-combos-ticket",
    title: "Planilha de Combos para Ticket Médio",
    description:
      "Modelo para montar combos e precificação para aumentar receita por atendimento.",
    icon: DollarSign,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    downloadUrl: "/downloads/lead-magnets/planilha-combos-ticket-medio.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Ticket Médio"],
  },
  {
    id: "calculadora-ticket",
    title: "Calculadora de Ticket Médio",
    description:
      "Planilha simples para acompanhar ticket médio e evolução semanal.",
    icon: FileSpreadsheet,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    downloadUrl: "/downloads/lead-magnets/calculadora-ticket-medio.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Ticket Médio"],
  },
  // Lead magnets - Fidelização
  {
    id: "checklist-fidelizacao-30",
    title: "Checklist de Fidelização (30 dias)",
    description:
      "Plano de ações para aumentar retorno de clientes em 30 dias.",
    icon: Users,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    downloadUrl: "/downloads/lead-magnets/checklist-fidelizacao-30-dias.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Fidelização"],
  },
  {
    id: "roteiro-reativacao",
    title: "Roteiro de Reativação de Clientes",
    description:
      "Mensagens segmentadas para recuperar clientes inativos pelo WhatsApp.",
    icon: Users,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    downloadUrl: "/downloads/lead-magnets/roteiro-reativacao-clientes.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Fidelização"],
  },
  // Lead magnets - Financeiro
  {
    id: "fluxo-caixa-semanal",
    title: "Fluxo de Caixa Semanal da Barbearia",
    description:
      "Modelo para acompanhar entradas, saídas e saldo semanal.",
    icon: DollarSign,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    downloadUrl: "/downloads/lead-magnets/fluxo-caixa-semanal-barbearia.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Financeiro"],
  },
  {
    id: "plano-metas-faturamento",
    title: "Plano de Metas de Faturamento",
    description:
      "Template para desdobrar meta mensal em meta semanal e diária.",
    icon: FileSpreadsheet,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    downloadUrl: "/downloads/lead-magnets/plano-metas-faturamento.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Financeiro"],
  },
  {
    id: "roteiros-shorts-reels",
    title: "Roteiros de Shorts e Reels (30 dias)",
    description:
      "8 roteiros prontos com hook, estrutura e CTA para transformar guias em vídeos curtos.",
    icon: Calendar,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    downloadUrl: "/downloads/lead-magnets/roteiros-shorts-reels-30-dias.csv",
    resourceType: "spreadsheet" as const,
    tags: ["Lead Magnet", "Marketing"],
  },
];

const categories = [
  { name: "Todos", count: downloadables.length },
  { name: "Guias PDF", count: downloadables.filter((d) => d.resourceType === "pdf").length },
  { name: "Financeiro", count: downloadables.filter((d) => d.tags.includes("Financeiro")).length },
  { name: "Marketing", count: downloadables.filter((d) => d.tags.includes("Marketing")).length },
  { name: "Gestão", count: downloadables.filter((d) => d.tags.includes("Gestão")).length },
];

export default function MaterialsPage() {
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
                  { label: "Materiais", href: "/recursos/materiais" },
                ]}
              />

              {/* Hero */}
              <div className="mt-8 mb-12">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <Download className="w-4 h-4" />
                  Downloads Gratuitos
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Materiais para sua Barbearia
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Planilhas, templates e guias gratuitos para organizar seu
                  negócio, atrair mais clientes e aumentar seu faturamento.
                </p>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {category.name}{" "}
                    <span className="text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* Downloadables Grid */}
              <div className="grid gap-6">
                {downloadables.map((item) => (
                  <DownloadGateModal
                    key={item.id}
                    resourceTitle={item.title}
                    resourceDescription={item.description}
                    downloadUrl={item.downloadUrl}
                    resourceType={item.resourceType}
                  >
                    <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                        {/* Icon */}
                        <div
                          className={`p-4 ${item.iconBg} rounded-xl w-fit group-hover:scale-105 transition-transform`}
                        >
                          <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>

                        {/* Download Button */}
                        <div className="sm:flex-shrink-0">
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Baixar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DownloadGateModal>
                ))}
              </div>

              {/* More Coming */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <Clock className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Mais materiais em breve
                </h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Estamos criando mais templates, planilhas e guias para ajudar
                  sua barbearia a crescer. Volte em breve!
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-primary text-white rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Instagram className="w-6 h-6" />
                      <h3 className="text-xl font-bold">
                        Quer mais dicas para sua barbearia?
                      </h3>
                    </div>
                    <p className="text-primary-foreground/80">
                      Teste o Flowo grátis por 14 dias e veja como automatizar
                      agendamentos, reduzir faltas e ganhar tempo.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <LeadCaptureModal>
                      <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 w-full md:w-auto"
                      >
                        Começar teste grátis
                      </Button>
                    </LeadCaptureModal>
                  </div>
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
