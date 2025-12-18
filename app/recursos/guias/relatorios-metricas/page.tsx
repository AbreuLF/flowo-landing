import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Target,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Relatórios e Métricas para Barbearias - Flowo",
  description:
    "Entenda as métricas essenciais para acompanhar o desempenho da sua barbearia e tomar decisões baseadas em dados.",
};

const tableOfContents = [
  { id: "metricas-essenciais", label: "Métricas essenciais" },
  { id: "taxa-ocupacao", label: "Taxa de ocupação" },
  { id: "desempenho-profissional", label: "Desempenho por profissional" },
  { id: "horarios-pico", label: "Horários de pico" },
  { id: "usando-dados", label: "Usando dados para crescer" },
];

export default function MetricsGuidePage() {
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
                  { label: "Relatórios e Métricas", href: "#" },
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
                    Relatórios e Métricas para Barbearias
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Entenda quais números realmente importam e como usá-los para
                    tomar decisões melhores no seu negócio.
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
                  <section id="metricas-essenciais" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Métricas essenciais para acompanhar
                      </h2>
                    </div>
                    <p>
                      Não precisa acompanhar dezenas de números. Focando em 5
                      métricas principais você já consegue entender a saúde do
                      seu negócio:
                    </p>

                    <div className="not-prose my-8 grid gap-4">
                      {[
                        {
                          icon: Calendar,
                          color: "blue",
                          title: "Agendamentos do dia/semana/mês",
                          description:
                            "Quantos clientes você atendeu? Está crescendo ou estagnado?",
                        },
                        {
                          icon: DollarSign,
                          color: "green",
                          title: "Faturamento",
                          description:
                            "Quanto entrou? Qual o ticket médio por cliente?",
                        },
                        {
                          icon: Target,
                          color: "purple",
                          title: "Taxa de ocupação",
                          description:
                            "Quantos horários disponíveis foram ocupados?",
                        },
                        {
                          icon: Users,
                          color: "orange",
                          title: "Clientes atendidos",
                          description:
                            "Novos vs recorrentes. Sua base está crescendo?",
                        },
                        {
                          icon: TrendingUp,
                          color: "red",
                          title: "Taxa de no-show (faltas)",
                          description:
                            "Quantos não apareceram? Está melhorando?",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                        >
                          <div
                            className={`p-2 bg-${item.color}-50 rounded-lg flex-shrink-0`}
                          >
                            <item.icon
                              className={`w-5 h-5 text-${item.color}-600`}
                            />
                          </div>
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

                    <div className="not-prose my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                      <p className="text-gray-900 font-medium mb-2">
                        O dashboard do Flowo mostra tudo isso em tempo real.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Você acompanha os números do dia atual, compara com dias
                        anteriores e vê tendências sem precisar fazer contas.
                      </p>
                    </div>
                  </section>

                  <section id="taxa-ocupacao" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Target className="w-5 h-5 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Taxa de ocupação
                      </h2>
                    </div>
                    <p>
                      A taxa de ocupação mostra quanto da sua capacidade você
                      está usando. É calculada assim:
                    </p>

                    <div className="not-prose my-8 p-6 bg-gray-100 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        Taxa de Ocupação = (Horários ocupados ÷ Horários
                        disponíveis) × 100
                      </div>
                    </div>

                    <div className="not-prose my-8 grid sm:grid-cols-3 gap-4">
                      <div className="p-5 bg-red-50 rounded-xl border border-red-100 text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          &lt; 50%
                        </div>
                        <div className="text-sm text-gray-600">
                          Precisa de mais clientes
                        </div>
                      </div>
                      <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-100 text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">
                          50-75%
                        </div>
                        <div className="text-sm text-gray-600">
                          Bom, mas tem espaço
                        </div>
                      </div>
                      <div className="p-5 bg-green-50 rounded-xl border border-green-100 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          &gt; 75%
                        </div>
                        <div className="text-sm text-gray-600">
                          Excelente! Boa demanda
                        </div>
                      </div>
                    </div>

                    <p>
                      Se sua taxa está abaixo de 50%, você pode investir em
                      marketing, promoções ou ajustar seus horários de
                      funcionamento. Se está acima de 90%, pode ser hora de
                      contratar mais um profissional.
                    </p>
                  </section>

                  <section
                    id="desempenho-profissional"
                    className="scroll-mt-24 mt-16"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Users className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Desempenho por profissional
                      </h2>
                    </div>
                    <p>
                      Se você tem mais de um barbeiro, é importante acompanhar
                      o desempenho individual:
                    </p>

                    <div className="not-prose my-8">
                      <div className="overflow-hidden rounded-xl border border-gray-200">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="text-left p-4 font-semibold text-gray-900">
                                Métrica
                              </th>
                              <th className="text-left p-4 font-semibold text-gray-900">
                                O que mostra
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr>
                              <td className="p-4 text-gray-700">
                                Atendimentos
                              </td>
                              <td className="p-4 text-gray-600">
                                Quantos clientes cada um atendeu
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 text-gray-700">Faturamento</td>
                              <td className="p-4 text-gray-600">
                                Quanto cada profissional gerou
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 text-gray-700">Ticket médio</td>
                              <td className="p-4 text-gray-600">
                                Valor médio por atendimento
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 text-gray-700">
                                Taxa de ocupação
                              </td>
                              <td className="p-4 text-gray-600">
                                % dos horários que foram preenchidos
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 text-gray-700">
                                Clientes novos
                              </td>
                              <td className="p-4 text-gray-600">
                                Quantos primeiros atendimentos fez
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <p>
                      Isso ajuda a entender quem precisa de mais treinamento,
                      quem está trazendo mais resultado e como distribuir
                      comissões de forma justa.
                    </p>
                  </section>

                  <section id="horarios-pico" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Horários de pico
                      </h2>
                    </div>
                    <p>
                      Saber quando sua barbearia tem mais demanda ajuda a
                      otimizar escalas e preços:
                    </p>

                    <div className="not-prose my-8 p-6 bg-white rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Padrão típico de barbearias:
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">
                              Segunda a Quarta
                            </span>
                            <span className="text-sm text-gray-500">
                              Menor movimento
                            </span>
                          </div>
                          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">
                              Quinta e Sexta
                            </span>
                            <span className="text-sm text-gray-500">
                              Movimento médio
                            </span>
                          </div>
                          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-400 rounded-full"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Sábado</span>
                            <span className="text-sm text-gray-500">
                              Pico máximo
                            </span>
                          </div>
                          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: "95%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="not-prose my-8 grid gap-4">
                      {[
                        "Escale mais profissionais nos dias de pico",
                        "Considere preços diferenciados para horários nobres",
                        "Ofereça descontos para dias de baixo movimento",
                        "Exija PIX antecipado para sábados",
                      ].map((tip, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="usando-dados" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Usando dados para crescer
                      </h2>
                    </div>
                    <p>
                      Ter os dados é só o começo. O importante é usar para tomar
                      decisões. Alguns exemplos:
                    </p>

                    <div className="not-prose my-8 grid gap-4">
                      {[
                        {
                          situation: "Taxa de ocupação baixa nas segundas",
                          action:
                            'Crie promoção "Segunda do Corte" com 10% de desconto',
                        },
                        {
                          situation:
                            "Um barbeiro tem ticket médio menor que outros",
                          action:
                            "Treine ele para oferecer serviços adicionais",
                        },
                        {
                          situation:
                            "Muitos clientes novos mas poucos recorrentes",
                          action:
                            "Foque em fidelização: cartão fidelidade, lembretes",
                        },
                        {
                          situation: "Taxa de no-show alta com certos clientes",
                          action:
                            "Exija PIX antecipado para esses clientes específicos",
                        },
                        {
                          situation: "Sábados sempre lotados demais",
                          action:
                            "Considere abrir mais cedo ou contratar freelancer",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="p-4 bg-white rounded-xl border border-gray-200"
                        >
                          <div className="text-sm text-gray-500 mb-1">
                            Se você identificar:
                          </div>
                          <div className="font-medium text-gray-900 mb-2">
                            {item.situation}
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">
                              {item.action}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="not-prose my-8 p-6 bg-gray-100 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Dica final
                      </h3>
                      <p className="text-gray-600">
                        Não precisa olhar os relatórios todo dia. Reserve 15
                        minutos por semana para analisar os números e identificar
                        oportunidades de melhoria. Com consistência, os
                        resultados aparecem.
                      </p>
                    </div>
                  </section>
                </div>

                {/* CTA Box */}
                <div className="mt-16 p-8 bg-primary text-white rounded-2xl">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold mb-3">
                      Acompanhe suas métricas no Flowo
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Dashboard completo com todos os números da sua barbearia
                      em tempo real.
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
                  <Link href="/recursos/guias/reduzindo-faltas">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Reduzindo Faltas
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/recursos/guias">
                    Ver todos os guias
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
