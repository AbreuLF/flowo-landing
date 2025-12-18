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
  Users,
  UserCheck,
  BarChart3,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Gerenciamento de Equipe para Barbearias - Flowo",
  description:
    "Organize a agenda de cada barbeiro, acompanhe desempenho e distribua clientes de forma inteligente.",
};

const tableOfContents = [
  { id: "por-que-organizar", label: "Por que organizar a equipe importa" },
  { id: "cadastrando-barbeiros", label: "Cadastrando barbeiros" },
  { id: "cliente-escolhe", label: "Cliente escolhe o barbeiro" },
  { id: "acompanhando-desempenho", label: "Acompanhando desempenho" },
  { id: "comissoes-pagamentos", label: "Comissões e pagamentos" },
];

export default function TeamManagementGuidePage() {
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
                  { label: "Equipe", href: "#" },
                ]}
              />

              <article className="mt-8">
                {/* Header */}
                <header className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      15 min de leitura
                    </span>
                    <span className="text-sm text-gray-500">
                      Atualizado em Janeiro 2025
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Gerenciamento de Equipe para Barbearias
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Organize a agenda de cada barbeiro e acompanhe o desempenho
                    da equipe. Dados que ajudam você a tomar decisões.
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
                  <section id="por-que-organizar" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Por que organizar a equipe importa
                      </h2>
                    </div>
                    <p>
                      Quando cada barbeiro tem sua própria agenda no sistema, os
                      clientes podem escolher com quem querem cortar. Isso
                      aumenta a fidelização e facilita sua vida.
                    </p>

                    <div className="not-prose my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Sem um sistema, você fica no telefone o dia todo
                        coordenando horários.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Com o Flowo, o cliente agenda direto pelo WhatsApp e
                        escolhe o barbeiro preferido.
                      </p>
                    </div>
                  </section>

                  <section id="cadastrando-barbeiros" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <UserCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Cadastrando barbeiros
                      </h2>
                    </div>
                    <p>Para cada barbeiro da equipe, você configura:</p>

                    <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
                      {[
                        {
                          title: "Horários de trabalho",
                          description:
                            "Cada barbeiro pode ter horários diferentes",
                          icon: Clock,
                          color: "blue",
                        },
                        {
                          title: "Dias de folga",
                          description:
                            "O sistema bloqueia automaticamente",
                          icon: CheckCircle2,
                          color: "green",
                        },
                        {
                          title: "Serviços",
                          description:
                            "Quais serviços cada barbeiro realiza",
                          icon: Users,
                          color: "purple",
                        },
                        {
                          title: "Tempo por serviço",
                          description:
                            "Alguns são mais rápidos, outros mais detalhistas",
                          icon: Clock,
                          color: "orange",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="p-5 bg-white rounded-xl border border-gray-200"
                        >
                          <div
                            className={`p-2 bg-${item.color}-50 rounded-lg w-fit mb-3`}
                          >
                            <item.icon
                              className={`w-5 h-5 text-${item.color}-600`}
                            />
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p>
                      Essas configurações garantem que a agenda de cada barbeiro
                      reflita a realidade do trabalho dele.
                    </p>
                  </section>

                  <section id="cliente-escolhe" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <UserCheck className="w-5 h-5 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Cliente escolhe o barbeiro
                      </h2>
                    </div>
                    <p>
                      Quando o cliente manda mensagem no WhatsApp, a IA do Flowo
                      pergunta com qual barbeiro ele quer agendar. Se não tiver
                      preferência, mostra os horários disponíveis de todos.
                    </p>

                    <div className="not-prose my-8 grid sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-2xl font-bold text-primary mb-2">
                          Clientes fiéis
                        </div>
                        <p className="text-gray-600">
                          Sempre agendam com o mesmo barbeiro de preferência
                        </p>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-2xl font-bold text-primary mb-2">
                          Novos clientes
                        </div>
                        <p className="text-gray-600">
                          São distribuídos entre a equipe conforme
                          disponibilidade
                        </p>
                      </div>
                    </div>

                    <p>
                      O Flowo lembra das preferências do cliente. Na próxima
                      vez, já sugere o mesmo barbeiro automaticamente.
                    </p>
                  </section>

                  <section id="acompanhando-desempenho" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Acompanhando desempenho
                      </h2>
                    </div>
                    <p>No painel do Flowo, você vê métricas de cada barbeiro:</p>

                    <div className="not-prose my-8 grid gap-3">
                      {[
                        {
                          metric: "Atendimentos no mês",
                          description:
                            "Quantos clientes cada barbeiro atendeu",
                        },
                        {
                          metric: "Faturamento por barbeiro",
                          description: "Quanto cada um gerou de receita",
                        },
                        {
                          metric: "Taxa de confirmação",
                          description: "Quem tem mais faltas de clientes",
                        },
                        {
                          metric: "Serviços mais realizados",
                          description:
                            "O que cada barbeiro mais faz (corte, barba, etc)",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200"
                        >
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-600 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {item.metric}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="not-prose my-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Decisões baseadas em dados
                      </h3>
                      <p className="text-gray-700">
                        Com essas métricas, você identifica quem precisa de mais
                        clientes e quem está sobrecarregado. Ajuste a
                        distribuição conforme necessário.
                      </p>
                    </div>
                  </section>

                  <section id="comissoes-pagamentos" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Wallet className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Comissões e pagamentos
                      </h2>
                    </div>
                    <p>
                      Se você trabalha com comissão, o Flowo calcula
                      automaticamente quanto cada barbeiro deve receber baseado
                      nos atendimentos realizados.
                    </p>

                    <div className="not-prose my-8 p-6 bg-green-50 rounded-xl border border-green-100">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Relatório de comissões
                          </h3>
                          <p className="text-gray-700">
                            No final do mês, você exporta um relatório com todos
                            os atendimentos e valores de comissão de cada
                            barbeiro. Sem contas manuais, sem erros.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      Configure a porcentagem de comissão por serviço ou um
                      valor fixo por atendimento. O sistema faz as contas.
                    </p>
                  </section>
                </div>

                {/* CTA Box */}
                <div className="mt-16 p-8 bg-primary text-white rounded-2xl">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold mb-3">
                      Tem equipe? Teste o plano Equipe.
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Até 5 barbeiros com agenda individual. 14 dias grátis para
                      você e sua equipe testarem.
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
                  <Link href="/recursos/guias/guia-definitivo-agendamento">
                    Guia de Agendamento <ArrowRight className="ml-2 h-4 w-4" />
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
