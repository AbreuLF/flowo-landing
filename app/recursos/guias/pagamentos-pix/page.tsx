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
  CreditCard,
  Shield,
  Zap,
  CheckCircle2,
  AlertCircle,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Pagamentos com PIX na Barbearia - Flowo",
  description:
    "Configure pagamentos antecipados via PIX, reduza faltas e receba antes mesmo do atendimento.",
};

const tableOfContents = [
  { id: "por-que-cobrar", label: "Por que cobrar antecipado funciona" },
  { id: "configurando-conta", label: "Configurando sua conta" },
  { id: "pix-automatico", label: "PIX automático vs manual" },
  { id: "politica-reembolso", label: "Política de reembolso" },
  { id: "comunicando-clientes", label: "Comunicando aos clientes" },
];

export default function PixPaymentsGuidePage() {
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
                  { label: "Pagamentos PIX", href: "#" },
                ]}
              />

              <article className="mt-8">
                {/* Header */}
                <header className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      12 min de leitura
                    </span>
                    <span className="text-sm text-gray-500">
                      Atualizado em Janeiro 2025
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Pagamentos com PIX na Barbearia
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Configure pagamentos antecipados, reduza faltas drasticamente
                    e receba antes mesmo do atendimento.
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
                  <section id="por-que-cobrar" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <CreditCard className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Por que cobrar antecipado funciona
                      </h2>
                    </div>
                    <p>
                      Quando o cliente paga antes, ele tem um compromisso
                      financeiro com o horário. Isso muda completamente o
                      comportamento: ele não vai simplesmente &quot;esquecer&quot; de ir.
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
                          Antes
                        </div>
                        <div className="text-sm text-gray-600">
                          Receba antes de atender
                        </div>
                      </div>
                      <div className="p-5 bg-purple-50 rounded-xl border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">
                          Zero
                        </div>
                        <div className="text-sm text-gray-600">
                          Constrangimento na cobrança
                        </div>
                      </div>
                    </div>

                    <p>
                      O PIX antecipado é especialmente eficaz para serviços
                      caros (progressiva, coloração) e horários nobres de fim de
                      semana que você não quer arriscar perder.
                    </p>
                  </section>

                  <section id="configurando-conta" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Wallet className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Configurando sua conta de recebimento
                      </h2>
                    </div>
                    <p>
                      O Flowo usa uma conta digital integrada para processar
                      seus pagamentos. Na configuração inicial, você cadastra:
                    </p>

                    <div className="not-prose grid gap-4 my-8">
                      {[
                        {
                          title: "Dados pessoais ou da empresa",
                          description:
                            "CPF ou CNPJ, nome completo, data de nascimento",
                        },
                        {
                          title: "Endereço comercial",
                          description:
                            "Para fins de cadastro e segurança",
                        },
                        {
                          title: "Telefone para verificação",
                          description:
                            "Um SMS de confirmação será enviado",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold text-sm">
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

                    <div className="not-prose my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Seus pagamentos caem direto na sua conta digital Flowo.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Você pode transferir para sua conta bancária quando
                        quiser, sem taxas de transferência.
                      </p>
                    </div>
                  </section>

                  <section id="pix-automatico" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        PIX automático vs manual
                      </h2>
                    </div>
                    <p>
                      Você pode escolher como e quando cobrar o PIX antecipado:
                    </p>

                    <div className="not-prose my-8 grid sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-white rounded-xl border-2 border-primary">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-5 h-5 text-primary" />
                          <h3 className="font-bold text-gray-900">
                            Automático (Recomendado)
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          O Flowo envia o PIX automaticamente quando o cliente
                          agenda. Ele só confirma o horário após pagar.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Sem trabalho manual
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Horário só reserva após pagamento
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Melhor para serviços caros
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 bg-white rounded-xl border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <CreditCard className="w-5 h-5 text-gray-600" />
                          <h3 className="font-bold text-gray-900">Manual</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Você decide caso a caso se quer cobrar antecipado ou
                          não, gerando o PIX manualmente.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-gray-400" />
                            Flexibilidade total
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-gray-400" />
                            Bom para clientes de confiança
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <AlertCircle className="w-4 h-4 text-orange-500" />
                            Mais trabalho para você
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p>
                      Nossa recomendação: use o automático para serviços acima
                      de R$ 80 e clientes novos. Para clientes fiéis com
                      histórico bom, você pode deixar manual.
                    </p>
                  </section>

                  <section id="politica-reembolso" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Shield className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Política de reembolso e cancelamento
                      </h2>
                    </div>
                    <p>
                      Defina regras claras para cancelamentos. No Flowo, você
                      configura:
                    </p>

                    <div className="not-prose my-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Exemplo de política que funciona:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Cancelou com mais de 24h?
                            </span>
                            <span className="text-gray-600">
                              {" "}
                              → Reembolso total
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Cancelou com menos de 24h?
                            </span>
                            <span className="text-gray-600">
                              {" "}
                              → Reembolso de 50%
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Não apareceu (no-show)?
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
                      O Flowo processa os reembolsos automaticamente baseado na
                      sua política. Você não precisa fazer nada manual.
                    </p>
                  </section>

                  <section id="comunicando-clientes" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Comunicando aos clientes
                      </h2>
                    </div>
                    <p>
                      A chave é ser transparente desde o início. Quando o
                      cliente agenda, a IA do Flowo já explica:
                    </p>

                    <div className="not-prose my-8 p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-700 italic">
                        &quot;Para garantir seu horário, vou enviar um PIX de R$
                        [valor]. Assim que confirmar o pagamento, seu horário
                        fica reservado. Se precisar cancelar, é só avisar com
                        24h de antecedência que devolvemos o valor total.&quot;
                      </p>
                    </div>

                    <p>
                      A maioria dos clientes entende e aceita. Os que não
                      aceitam, geralmente são os que dariam falta mesmo.
                    </p>

                    <div className="not-prose my-8 grid gap-4">
                      {[
                        "Seja claro sobre a política de cancelamento",
                        "Destaque que é para garantir o horário dele",
                        "Mostre que outros clientes já usam e funciona",
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
                </div>

                {/* CTA Box */}
                <div className="mt-16 p-8 bg-primary text-white rounded-2xl">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold mb-3">
                      Ative pagamentos PIX no seu Flowo
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Disponível nos planos Pro e Empresarial. Comece a receber
                      antes de atender.
                    </p>
                    <LeadCaptureModal>
                      <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90"
                      >
                        Conhecer planos
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
                  <Link href="/recursos/guias/configurando-whatsapp">
                    Configurando WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
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
