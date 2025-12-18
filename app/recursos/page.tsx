import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  ArrowRight,
  Clock,
  CreditCard,
  MessageCircle,
  Bell,
  Download,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Recursos - Flowo",
  description:
    "Guias práticos e materiais gratuitos para reduzir faltas, automatizar agendamentos e fazer sua barbearia crescer.",
};

const guides = [
  {
    title: "Guia Definitivo de Agendamento",
    description:
      "Configure seu calendário, automatize lembretes e reduza faltas em até 70%.",
    readTime: "10 min",
    href: "/recursos/guias/guia-definitivo-agendamento",
    icon: Calendar,
    topics: ["Lembretes automáticos", "PIX antecipado", "Liberação de horários"],
  },
  {
    title: "Pagamentos com PIX",
    description:
      "Configure pagamentos antecipados via PIX e receba antes de atender.",
    readTime: "12 min",
    href: "/recursos/guias/pagamentos-pix",
    icon: CreditCard,
    topics: ["PIX automático", "Política de reembolso", "Conta digital"],
  },
  {
    title: "Configurando WhatsApp com IA",
    description:
      "Transforme seu WhatsApp em um assistente que agenda automaticamente 24/7.",
    readTime: "8 min",
    href: "/recursos/guias/configurando-whatsapp",
    icon: MessageCircle,
    topics: ["IA no WhatsApp", "Respostas automáticas", "Agendamento 24/7"],
  },
  {
    title: "Reduzindo Faltas",
    description:
      "Estratégias para diminuir no-shows em até 80% na sua barbearia.",
    readTime: "10 min",
    href: "/recursos/guias/reduzindo-faltas",
    icon: Bell,
    topics: ["Lembretes 24h/2h", "PIX antecipado", "Política clara"],
  },
];

const downloads = [
  {
    title: "Planilha de Precificação",
    description: "Calcule o preço ideal dos seus serviços",
    icon: FileSpreadsheet,
    href: "/recursos/materiais",
  },
  {
    title: "Calendário de Conteúdo",
    description: "30 dias de ideias para Instagram",
    icon: Calendar,
    href: "/recursos/materiais",
  },
  {
    title: "Planilha de Comissões",
    description: "Controle pagamentos da equipe",
    icon: FileSpreadsheet,
    href: "/recursos/materiais",
  },
];

export default function ResourcesPage() {
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
                ]}
              />

              {/* Hero */}
              <div className="mt-8 mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <BookOpen className="w-4 h-4" />
                  Central de Recursos
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Aprenda a Otimizar sua Barbearia
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Guias práticos e materiais gratuitos para reduzir faltas,
                  automatizar agendamentos e fazer sua barbearia crescer.
                </p>
              </div>

              {/* Guides Section */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Guias Disponíveis
                  </h2>
                  <Link
                    href="/recursos/guias"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    Ver todos (6) <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {guides.map((guide, index) => (
                    <Link
                      key={index}
                      href={guide.href}
                      className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                          <guide.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {guide.readTime}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {guide.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {guide.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Downloads Section */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Materiais Gratuitos
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Planilhas e templates para baixar
                    </p>
                  </div>
                  <Link
                    href="/recursos/materiais"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    Ver todos <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {downloads.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="group block bg-gray-50 rounded-xl border border-gray-100 p-5 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <item.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-8 bg-primary text-white rounded-2xl">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-3">
                    Quer ver o Flowo na prática?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Configure sua barbearia em 5 minutos. 14 dias grátis para
                    testar tudo que você leu nos guias.
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

              {/* More coming */}
              <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">
                  Mais guias e materiais em breve. Tem uma dúvida específica?{" "}
                  <a
                    href="mailto:contato@flowo.com.br"
                    className="text-primary hover:underline"
                  >
                    Fale conosco
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
