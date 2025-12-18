import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";
import {
  Building2,
  Target,
  Zap,
  Heart,
  MessageCircle,
  Brain,
  Clock,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre o Flowo: Sistema de Agendamento para Barbearia com IA",
  description:
    "Conheça o Flowo: a plataforma brasileira de agendamento via WhatsApp com IA para barbearias e negócios de serviços.",
};

const values = [
  {
    icon: Zap,
    title: "Simplicidade",
    description:
      "Tecnologia poderosa que qualquer pessoa consegue usar. Sem complicação.",
  },
  {
    icon: Heart,
    title: "Foco no Cliente",
    description:
      "Seu sucesso é nosso sucesso. Estamos aqui para fazer seu negócio crescer.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Seus dados e dos seus clientes são tratados com máxima segurança.",
  },
  {
    icon: Brain,
    title: "Inovação",
    description:
      "IA de verdade que funciona, não promessas vazias. Resultados reais.",
  },
];

const differentials = [
  {
    icon: MessageCircle,
    title: "WhatsApp Nativo",
    description:
      "Usa seu próprio número de WhatsApp. Seus clientes não precisam baixar nada novo.",
  },
  {
    icon: Brain,
    title: "IA que Entende",
    description:
      "Nossa IA entende linguagem natural e agenda automaticamente, 24 horas por dia.",
  },
  {
    icon: Clock,
    title: "Lembretes Automáticos",
    description:
      "Reduz faltas drasticamente com lembretes personalizados 24h e 2h antes.",
  },
  {
    icon: Building2,
    title: "Feito no Brasil",
    description:
      "Desenvolvido para a realidade brasileira, com suporte em português.",
  },
];

export default function AboutPage() {
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
                  { label: "Sobre", href: "/sobre" },
                ]}
              />

              {/* Hero */}
              <div className="mt-8 mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <Building2 className="w-4 h-4" />
                  Sobre Nós
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Simplificando o agendamento para quem faz acontecer
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  O Flowo nasceu de uma frustração real: donos de barbearias perdendo
                  horas respondendo WhatsApp, clientes não aparecendo, e muito dinheiro
                  deixado na mesa. Criamos a solução que gostaríamos de ter.
                </p>
              </div>

              {/* Mission */}
              <div className="mb-16 p-8 bg-gray-50 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Nossa Missão
                    </h2>
                    <p className="text-lg text-gray-600">
                      Dar a todo profissional de serviços as mesmas ferramentas de
                      agendamento e automação que grandes redes têm, de forma simples
                      e acessível. Porque quem trabalha com as mãos merece tecnologia
                      que trabalha por eles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Tudo começou observando o dia a dia de uma barbearia. O barbeiro
                    parava no meio do corte para responder WhatsApp. Clientes ligavam
                    para remarcar. Outros simplesmente não apareciam. No final do mês,
                    a conta não fechava como deveria.
                  </p>
                  <p>
                    Percebemos que o problema não era falta de clientes, era falta de
                    organização. E que a solução não poderia ser um app complicado que
                    ninguém ia usar. Tinha que ser algo que funcionasse onde os clientes
                    já estão: no WhatsApp.
                  </p>
                  <p>
                    Assim nasceu o Flowo: uma IA que responde pelo WhatsApp, agenda
                    automaticamente, envia lembretes e reduz faltas. Simples assim.
                    Hoje ajudamos centenas de barbearias e negócios de serviços a
                    economizarem tempo e ganharem mais.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Nossos Valores
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="p-6 bg-white border border-gray-200 rounded-xl hover:border-primary/30 transition-colors"
                    >
                      <value.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Differentials */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Por que o Flowo?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {differentials.map((diff) => (
                    <div key={diff.title} className="flex gap-4">
                      <div className="p-3 bg-primary/5 rounded-xl h-fit">
                        <diff.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {diff.title}
                        </h3>
                        <p className="text-gray-600">{diff.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 bg-primary text-white rounded-2xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Pronto para simplificar seu agendamento?
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                  Teste o Flowo por 14 dias grátis. Sem cartão de crédito, sem
                  compromisso.
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
        </Section>
      </main>
      <Footer />
    </>
  );
}
