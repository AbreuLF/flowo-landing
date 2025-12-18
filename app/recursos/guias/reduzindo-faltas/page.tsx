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
  Bell,
  Ban,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  Users,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Reduzindo Faltas na Barbearia - Flowo",
  description:
    "Estratégias comprovadas para reduzir no-shows em até 80% usando lembretes, pagamentos antecipados e políticas inteligentes.",
};

const tableOfContents = [
  { id: "custo-falta", label: "O custo real de uma falta" },
  { id: "lembretes", label: "Sistema de lembretes que funciona" },
  { id: "pix-antecipado", label: "PIX antecipado: a arma secreta" },
  { id: "politica-cancelamento", label: "Política de cancelamento" },
  { id: "clientes-reincidentes", label: "Lidando com clientes que faltam" },
];

export default function ReducingNoShowsGuidePage() {
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
                  { label: "Reduzindo Faltas", href: "#" },
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
                    Reduzindo Faltas na Barbearia
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Estratégias comprovadas para diminuir no-shows em até 80%
                    usando lembretes inteligentes, pagamentos antecipados e
                    políticas claras.
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
                  <section id="custo-falta" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-50 rounded-lg">
                        <TrendingDown className="w-5 h-5 text-red-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        O custo real de uma falta
                      </h2>
                    </div>
                    <p>
                      Uma falta não é só um horário vago. É dinheiro perdido,
                      outro cliente que você poderia ter atendido, e tempo
                      desperdiçado. Vamos fazer a conta:
                    </p>

                    <div className="not-prose my-8 p-6 bg-red-50 rounded-xl border border-red-100">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Exemplo: Barbearia com 3 profissionais
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div className="p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-red-600">
                            2 faltas/dia
                          </div>
                          <div className="text-sm text-gray-600">
                            Média por profissional
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-red-600">
                            R$ 50
                          </div>
                          <div className="text-sm text-gray-600">
                            Ticket médio
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-red-600">
                          R$ 9.000/mês
                        </div>
                        <div className="text-sm text-gray-600">
                          Prejuízo com faltas (6 faltas × R$50 × 30 dias)
                        </div>
                      </div>
                    </div>

                    <p>
                      Por isso, reduzir faltas deveria ser prioridade. A boa
                      notícia: com as ferramentas certas, você consegue diminuir
                      em até 80%.
                    </p>
                  </section>

                  <section id="lembretes" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Bell className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Sistema de lembretes que funciona
                      </h2>
                    </div>
                    <p>
                      O Flowo envia lembretes automáticos em dois momentos
                      estratégicos:
                    </p>

                    <div className="not-prose my-8 grid sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-white rounded-xl border-2 border-blue-200">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">24h</span>
                          </div>
                          <h3 className="font-bold text-gray-900">
                            Lembrete de véspera
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Enviado 24 horas antes. Dá tempo do cliente cancelar
                          se tiver problema, liberando o horário para outro.
                        </p>
                        <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-600 italic">
                          &ldquo;Opa! Lembrando que amanhã às 15h você tem
                          horário marcado com o João. Confirma pra mim? 👍&rdquo;
                        </div>
                      </div>
                      <div className="p-6 bg-white rounded-xl border-2 border-green-200">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-green-600">2h</span>
                          </div>
                          <h3 className="font-bold text-gray-900">
                            Lembrete de última hora
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Enviado 2 horas antes. Pega quem esqueceu e dá o
                          empurrão final para não deixar pra lá.
                        </p>
                        <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-600 italic">
                          &ldquo;Daqui a 2 horas é seu horário com a gente! Te
                          vejo às 15h 🤙&rdquo;
                        </div>
                      </div>
                    </div>

                    <p>
                      Só os lembretes já reduzem faltas em cerca de 30%. Mas
                      para chegar aos 80%, você precisa combinar com PIX
                      antecipado.
                    </p>
                  </section>

                  <section id="pix-antecipado" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <CreditCard className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        PIX antecipado: a arma secreta
                      </h2>
                    </div>
                    <p>
                      Quando o cliente já pagou, ele tem um compromisso
                      financeiro. Ele não vai simplesmente &quot;esquecer&quot; ou &quot;dar
                      um jeito&quot; porque sabe que vai perder o dinheiro.
                    </p>

                    <div className="not-prose my-8 grid sm:grid-cols-3 gap-4">
                      <div className="p-5 bg-green-50 rounded-xl border border-green-100 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          -80%
                        </div>
                        <div className="text-sm text-gray-600">
                          Redução de faltas
                        </div>
                      </div>
                      <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          +R$ 7.200
                        </div>
                        <div className="text-sm text-gray-600">
                          Recuperados/mês*
                        </div>
                      </div>
                      <div className="p-5 bg-purple-50 rounded-xl border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">
                          Zero
                        </div>
                        <div className="text-sm text-gray-600">
                          Constrangimento
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500">
                      *Baseado no exemplo anterior: R$ 9.000 × 80% de redução
                    </p>

                    <div className="not-prose my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Quando cobrar PIX antecipado?
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Clientes novos (ainda não têm histórico)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Serviços caros (progressiva, coloração)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Horários nobres (sábado, fim do dia)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Clientes que já faltaram antes
                        </li>
                      </ul>
                    </div>

                    <Button variant="outline" asChild className="not-prose">
                      <Link href="/recursos/guias/pagamentos-pix">
                        Ver guia completo de PIX{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </section>

                  <section
                    id="politica-cancelamento"
                    className="scroll-mt-24 mt-16"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Ban className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Política de cancelamento clara
                      </h2>
                    </div>
                    <p>
                      Ter uma política clara e comunicá-la desde o início
                      evita atritos e educa o cliente sobre a importância de
                      avisar.
                    </p>

                    <div className="not-prose my-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Política recomendada:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Cancelamento com +24h de antecedência
                            </span>
                            <span className="text-gray-600">
                              {" "}
                              → Reembolso total ou remarcar sem problema
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Cancelamento entre 24h e 2h antes
                            </span>
                            <span className="text-gray-600">
                              {" "}
                              → Reembolso de 50% ou crédito para próxima
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Não apareceu ou cancelou com menos de 2h
                            </span>
                            <span className="text-gray-600">
                              {" "}
                              → Sem reembolso
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <p>
                      O Flowo deixa você configurar isso e comunica
                      automaticamente para o cliente quando ele agenda. Sem
                      surpresas para ninguém.
                    </p>
                  </section>

                  <section
                    id="clientes-reincidentes"
                    className="scroll-mt-24 mt-16"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Lidando com clientes que faltam
                      </h2>
                    </div>
                    <p>
                      Alguns clientes têm padrão de faltar. Com o Flowo, você
                      consegue identificar e tratar de forma diferente:
                    </p>

                    <div className="not-prose my-8 grid gap-4">
                      {[
                        {
                          title: "Identifique os reincidentes",
                          description:
                            "O Flowo mostra o histórico de cada cliente: quantas faltas, cancelamentos em cima da hora, etc.",
                        },
                        {
                          title: "Exija PIX para esses clientes",
                          description:
                            "Para clientes com histórico de falta, sempre cobre antecipado. A IA faz isso automaticamente.",
                        },
                        {
                          title: "Considere bloquear os piores casos",
                          description:
                            "Cliente que já faltou 3x sem avisar? Talvez não valha a pena manter na carteira.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 font-bold text-sm">
                              {index + 1}
                            </span>
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

                    <div className="not-prose my-8 p-6 bg-gray-100 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Resumo: combinação vencedora
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                          <Bell className="w-4 h-4" />
                          Lembretes 24h + 2h
                        </span>
                        <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                          <CreditCard className="w-4 h-4" />
                          PIX antecipado
                        </span>
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                          <Ban className="w-4 h-4" />
                          Política clara
                        </span>
                      </div>
                    </div>
                  </section>
                </div>

                {/* CTA Box */}
                <div className="mt-16 p-8 bg-primary text-white rounded-2xl">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold mb-3">
                      Pronto para reduzir suas faltas?
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Configure lembretes e pagamentos PIX no Flowo. Reduza
                      no-shows em até 80%.
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
                  <Link href="/recursos/guias/configurando-whatsapp">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Configurando WhatsApp
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/recursos/guias/relatorios-metricas">
                    Relatórios e Métricas{" "}
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
