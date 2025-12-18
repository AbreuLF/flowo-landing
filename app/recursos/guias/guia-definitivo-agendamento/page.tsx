import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Bell,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Guia Definitivo de Agendamento para Barbearias - Flowo",
  description:
    "Configure seu calendário, automatize lembretes e reduza faltas em até 70% na sua barbearia.",
};

const tableOfContents = [
  { id: "por-que-faltas", label: "Por que faltas são um problema" },
  { id: "configurando-horarios", label: "Configurando seus horários" },
  { id: "lembretes-automaticos", label: "Lembretes automáticos" },
  { id: "pagamento-antecipado", label: "Pagamento antecipado (PIX)" },
  { id: "liberacao-automatica", label: "Liberação automática de horários" },
];

export default function SchedulingGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="white" className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb
                items={[
                  { label: "Início", href: "/" },
                  { label: "Recursos", href: "/recursos" },
                  { label: "Guias", href: "/recursos/guias" },
                  { label: "Agendamento", href: "#" },
                ]}
              />

              <article className="mt-8">
                {/* Header */}
                <header className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      10 min de leitura
                    </span>
                    <span className="text-sm text-gray-500">
                      Atualizado em Janeiro 2025
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Guia Definitivo de Agendamento para Barbearias
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Aprenda a configurar o Flowo para reduzir faltas e otimizar
                    sua agenda. Menos telefone, mais clientes.
                  </p>
                </header>

                {/* Table of Contents */}
                <nav className="mb-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                    Neste guia
                  </h2>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Content */}
                <div className="prose prose-lg prose-gray max-w-none">
                  <section id="por-que-faltas" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-red-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Por que faltas são um problema
                      </h2>
                    </div>
                    <p>
                      Faltas custam caro. Cada horário vago é dinheiro perdido
                      que não volta. Pior: você recusou outros clientes para
                      reservar aquele horário.
                    </p>

                    <div className="not-prose my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Com lembretes automáticos e confirmação via WhatsApp,
                        você pode reduzir faltas em até 70%.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Baseado em dados reais de barbearias usando o Flowo.
                      </p>
                    </div>

                    <p>
                      Sem um sistema, você fica no telefone o dia todo
                      coordenando horários, lembrando clientes e lidando com
                      cancelamentos de última hora. O Flowo automatiza tudo
                      isso.
                    </p>
                  </section>

                  <section id="configurando-horarios" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Configurando seus horários
                      </h2>
                    </div>
                    <p>
                      No Flowo, você define os horários de funcionamento da
                      barbearia e de cada barbeiro individualmente. Isso
                      permite:
                    </p>

                    <div className="not-prose grid gap-4 my-8">
                      {[
                        {
                          title: "Agendas individuais",
                          description:
                            "Cada barbeiro tem sua própria agenda com folgas e horários diferentes",
                        },
                        {
                          title: "Escolha do cliente",
                          description:
                            "Clientes escolhem o barbeiro preferido ao agendar pelo WhatsApp",
                        },
                        {
                          title: "Sem conflitos",
                          description:
                            "O sistema evita conflitos de horário automaticamente",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="lembretes-automaticos" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Bell className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Lembretes automáticos
                      </h2>
                    </div>
                    <p>
                      O Flowo envia lembretes automáticos via WhatsApp em dois
                      momentos estratégicos:
                    </p>

                    <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-3xl font-bold text-primary mb-2">
                          24h
                        </div>
                        <div className="font-medium text-gray-900 mb-1">
                          Antes do horário
                        </div>
                        <p className="text-sm text-gray-600">
                          Tempo suficiente para o cliente remarcar se precisar
                        </p>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-3xl font-bold text-primary mb-2">
                          2h
                        </div>
                        <div className="font-medium text-gray-900 mb-1">
                          Antes do horário
                        </div>
                        <p className="text-sm text-gray-600">
                          Lembrete final para garantir que não esqueça
                        </p>
                      </div>
                    </div>

                    <p>
                      O cliente pode confirmar, remarcar ou cancelar direto pelo
                      WhatsApp - sem precisar ligar. A IA do Flowo entende e
                      processa tudo automaticamente.
                    </p>
                  </section>

                  <section id="pagamento-antecipado" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Pagamento antecipado (PIX)
                      </h2>
                    </div>
                    <p>
                      Para serviços de maior valor ou clientes novos, você pode
                      exigir pagamento antecipado via PIX. Isso funciona muito
                      bem para:
                    </p>
                    <ul>
                      <li>Tratamentos caros (progressiva, coloração)</li>
                      <li>Clientes novos sem histórico</li>
                      <li>Horários nobres de fim de semana</li>
                    </ul>

                    <div className="not-prose my-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Benefícios do PIX antecipado
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          Reduz drasticamente as faltas
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          Garante o compromisso do cliente
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          Você já recebe antes do serviço
                        </li>
                      </ul>
                    </div>

                    <p>
                      Configure por serviço (ex: só para tratamentos caros) ou
                      para todos os agendamentos. Você decide.
                    </p>
                  </section>

                  <section id="liberacao-automatica" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Liberação automática de horários
                      </h2>
                    </div>
                    <p>
                      Se o cliente não confirmar o lembrete em tempo hábil, o
                      Flowo pode liberar o horário automaticamente para outros
                      clientes. Assim você não perde o slot.
                    </p>
                    <p>
                      Essa funcionalidade é opcional e você define as regras:
                      quantas horas de antecedência, quantas tentativas de
                      contato, etc.
                    </p>
                  </section>
                </div>

                {/* CTA Box */}
                <div className="mt-16 p-8 bg-primary text-white rounded-2xl">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold mb-3">
                      Pronto para reduzir faltas?
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Configure sua barbearia em 5 minutos. Sem cartão de
                      crédito. 14 dias grátis para testar tudo.
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
              </article>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t">
                <Button variant="ghost" asChild>
                  <Link href="/recursos/guias">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar aos guias
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/recursos/guias/gerenciamento-equipe">
                    Gerenciamento de Equipe{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
