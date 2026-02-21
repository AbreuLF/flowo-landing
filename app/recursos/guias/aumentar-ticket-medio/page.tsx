import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Como Aumentar Ticket Médio na Barbearia | Guia Prático Flowo",
  description:
    "Guia prático para aumentar ticket médio com combos, upgrades e confirmação inteligente de serviços.",
};

export default function TicketMedioGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="white" className="pt-32 pb-16">
          <div className="mx-auto max-w-4xl">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Recursos", href: "/recursos" },
                { label: "Guias", href: "/recursos/guias" },
                { label: "Aumentar Ticket Médio", href: "#" },
              ]}
            />

            <article className="mt-8">
              <header>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <DollarSign className="h-4 w-4" />
                  9 min de leitura
                </span>
                <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
                  Como aumentar ticket médio na barbearia sem perder clientes
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Ticket médio cresce quando oferta e contexto estão alinhados. O
                  segredo não é empurrar serviço, e sim estruturar jornada com
                  proposta de valor clara.
                </p>
              </header>

              <div className="prose prose-lg mt-10 max-w-none">
                <h2>1. Crie pacotes com lógica de rotina</h2>
                <p>
                  Monte combos que fazem sentido para frequência real dos clientes:
                  corte + barba, corte + hidratação, manutenção mensal.
                </p>
                <h2>2. Use upgrades no momento certo</h2>
                <p>
                  A sugestão deve acontecer no agendamento e na confirmação. Ex.:
                  “Quer incluir alinhamento de sobrancelha hoje?”.
                </p>
                <h2>3. Padronize oferta por perfil</h2>
                <p>
                  Cliente novo, recorrente e premium pedem abordagens diferentes.
                  Automatize esse fluxo no WhatsApp para consistência.
                </p>
                <h2>4. Acompanhe métrica semanal</h2>
                <p>
                  Sem medir ticket médio por barbeiro/serviço, você melhora no
                  escuro. Defina meta semanal e revise proposta comercial.
                </p>
              </div>

              <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">
                  Leitura relacionada
                </p>
                <div className="mt-3 grid gap-2 text-sm">
                  <Link
                    href="/software-barbearia-com-pix"
                    className="text-primary hover:underline"
                  >
                    Software para barbearia com PIX antecipado
                  </Link>
                  <Link
                    href="/flowo-vs-planilha"
                    className="text-primary hover:underline"
                  >
                    Flowo vs planilha: custo oculto do manual
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold">
                  Quer aumentar ticket médio com automação de agenda?
                </h3>
                <p className="mt-2 text-primary-foreground/85">
                  Teste o Flowo por 14 dias e aplique essa estratégia no WhatsApp.
                </p>
                <div className="mt-5">
                  <LeadCaptureModal>
                    <Button className="bg-white text-primary hover:bg-white/90">
                      Começar teste grátis
                    </Button>
                  </LeadCaptureModal>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <Link
                  href="/recursos/guias"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para guias
                </Link>
                <Link
                  href="/recursos/guias/fidelizacao-clientes"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Próximo guia
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
