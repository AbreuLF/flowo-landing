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
  MessageCircle,
  Smartphone,
  Bot,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Configurando WhatsApp com IA - Flowo",
  description:
    "Configure a IA do Flowo no WhatsApp Business para responder clientes, agendar automaticamente e reduzir trabalho manual.",
};

const tableOfContents = [
  { id: "por-que-whatsapp", label: "Por que integrar com WhatsApp" },
  { id: "conectando", label: "Conectando seu WhatsApp Business" },
  { id: "o-que-ia-faz", label: "O que a IA faz automaticamente" },
  { id: "personalizando", label: "Personalizando respostas" },
  { id: "dicas-sucesso", label: "Dicas para melhor resultado" },
];

export default function WhatsAppSetupGuidePage() {
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
                  { label: "Configurando WhatsApp", href: "#" },
                ]}
              />

              <article className="mt-8">
                {/* Header */}
                <header className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      8 min de leitura
                    </span>
                    <span className="text-sm text-gray-500">
                      Atualizado em Janeiro 2025
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Configurando WhatsApp com IA
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Transforme seu WhatsApp Business em um assistente que
                    responde clientes 24/7, agenda automaticamente e libera seu
                    tempo.
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
                  <section id="por-que-whatsapp" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Por que integrar com WhatsApp
                      </h2>
                    </div>
                    <p>
                      Seus clientes já estão no WhatsApp. É onde eles se sentem
                      confortáveis para conversar, pedir informações e agendar.
                      O problema? Você não pode ficar respondendo mensagem o dia
                      todo.
                    </p>

                    <div className="not-prose my-8 grid sm:grid-cols-3 gap-4">
                      <div className="p-5 bg-green-50 rounded-xl border border-green-100 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          24/7
                        </div>
                        <div className="text-sm text-gray-600">
                          Respostas automáticas
                        </div>
                      </div>
                      <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          -90%
                        </div>
                        <div className="text-sm text-gray-600">
                          Mensagens manuais
                        </div>
                      </div>
                      <div className="p-5 bg-purple-50 rounded-xl border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">
                          5s
                        </div>
                        <div className="text-sm text-gray-600">
                          Tempo médio de resposta
                        </div>
                      </div>
                    </div>

                    <p>
                      Com a IA do Flowo, suas mensagens são respondidas em
                      segundos, mesmo de madrugada ou enquanto você está
                      atendendo outro cliente.
                    </p>
                  </section>

                  <section id="conectando" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Conectando seu WhatsApp Business
                      </h2>
                    </div>
                    <p>
                      O processo de conexão é simples e leva cerca de 2 minutos:
                    </p>

                    <div className="not-prose grid gap-4 my-8">
                      {[
                        {
                          title: "Acesse Configurações no Flowo",
                          description:
                            "Vá em Integrações → WhatsApp Business",
                        },
                        {
                          title: "Escaneie o QR Code",
                          description:
                            "Abra o WhatsApp no celular e escaneie o código exibido",
                        },
                        {
                          title: "Pronto! IA conectada",
                          description:
                            "A IA já começa a responder automaticamente",
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

                    <div className="not-prose my-8 p-6 bg-orange-50 border-l-4 border-orange-400 rounded-r-xl">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-900 font-medium mb-1">
                            Use um número dedicado para a barbearia
                          </p>
                          <p className="text-gray-600 text-sm">
                            Recomendamos usar o WhatsApp Business com um número
                            exclusivo da barbearia, não seu número pessoal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="o-que-ia-faz" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Bot className="w-5 h-5 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        O que a IA faz automaticamente
                      </h2>
                    </div>
                    <p>
                      A IA do Flowo foi treinada especificamente para barbearias
                      e sabe lidar com as situações mais comuns:
                    </p>

                    <div className="not-prose my-8 grid gap-4">
                      {[
                        {
                          icon: CheckCircle2,
                          color: "green",
                          title: "Responde perguntas sobre serviços e preços",
                          description:
                            "Quanto custa o corte? Tem progressiva? A IA responde baseado nos seus serviços cadastrados",
                        },
                        {
                          icon: CheckCircle2,
                          color: "green",
                          title: "Verifica disponibilidade de horários",
                          description:
                            "Consulta a agenda em tempo real e mostra os horários livres para o cliente",
                        },
                        {
                          icon: CheckCircle2,
                          color: "green",
                          title: "Agenda automaticamente",
                          description:
                            "Quando o cliente escolhe um horário, a IA já reserva e confirma",
                        },
                        {
                          icon: CheckCircle2,
                          color: "green",
                          title: "Envia lembretes automáticos",
                          description:
                            "Lembra o cliente 24h e 2h antes do horário marcado",
                        },
                        {
                          icon: CheckCircle2,
                          color: "green",
                          title: "Processa cancelamentos e reagendamentos",
                          description:
                            "O cliente pode cancelar ou remarcar direto pelo WhatsApp",
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

                    <div className="not-prose my-8 p-6 bg-gray-100 rounded-xl">
                      <p className="text-sm text-gray-500 mb-2">
                        Exemplo de conversa:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                          <p className="text-gray-800">
                            Opa, quero marcar um corte pra amanhã
                          </p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 max-w-[80%] ml-auto">
                          <p className="text-gray-800">
                            Opa! 🤙 Vou ver os horários de amanhã pra você. Qual
                            barbeiro você prefere: João, Pedro ou qualquer um
                            que tiver disponível?
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="personalizando" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Settings className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Personalizando as respostas
                      </h2>
                    </div>
                    <p>
                      A IA se adapta ao estilo da sua barbearia. Você pode
                      configurar:
                    </p>

                    <div className="not-prose my-8 grid sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-white rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-3">
                          Tom da conversa
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Defina se a IA deve ser mais formal, descontraída ou
                          usar gírias da sua região.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            Formal
                          </span>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                            Descontraído
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            Gírias
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-white rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-3">
                          Informações personalizadas
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          A IA pode mencionar promoções, novidades ou regras
                          específicas da sua barbearia.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            Promoções
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            Horários especiais
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="dicas-sucesso" className="scroll-mt-24 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">
                        Dicas para melhor resultado
                      </h2>
                    </div>

                    <div className="not-prose my-8 grid gap-4">
                      {[
                        "Mantenha seus serviços e preços sempre atualizados no Flowo",
                        "Configure os horários de funcionamento corretos",
                        "Adicione fotos de cortes no perfil - a IA pode enviar quando pedido",
                        "Responda manualmente apenas casos complexos - a IA avisa quando não consegue resolver",
                        "Avise seus clientes que agora eles podem agendar pelo WhatsApp 24h",
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
                      Experimente a IA do Flowo no WhatsApp
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      14 dias grátis para testar. Configure em menos de 5
                      minutos.
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
                  <Link href="/recursos/guias/pagamentos-pix">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Pagamentos PIX
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/recursos/guias/reduzindo-faltas">
                    Reduzindo Faltas <ArrowRight className="ml-2 h-4 w-4" />
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
