import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Fidelização de Clientes em Barbearia | Guia Flowo",
  description:
    "Estratégias práticas para aumentar retenção e frequência dos clientes da sua barbearia com WhatsApp e automação.",
};

export default function FidelizacaoGuidePage() {
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
                { label: "Fidelização de Clientes", href: "#" },
              ]}
            />

            <article className="mt-8">
              <header>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <HeartHandshake className="h-4 w-4" />
                  10 min de leitura
                </span>
                <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
                  Fidelização de clientes na barbearia: como aumentar retorno mensal
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Crescer não é só trazer cliente novo. A barbearia rentável tem
                  rotina de retorno bem estruturada e relacionamento contínuo.
                </p>
              </header>

              <div className="prose prose-lg mt-10 max-w-none">
                <h2>1. Tenha cadência de contato pós-atendimento</h2>
                <p>
                  Mensagem de pós-serviço + sugestão de próximo agendamento melhora
                  lembrança de marca e aumenta recorrência.
                </p>
                <h2>2. Segmente por frequência</h2>
                <p>
                  Clientes que somem por 45+ dias precisam de fluxo de reativação
                  diferente de clientes recorrentes.
                </p>
                <h2>3. Ofereça benefício por continuidade</h2>
                <p>
                  Clube, combo mensal ou benefício progressivo criam motivo para
                  voltar e reduzem sensibilidade a preço.
                </p>
                <h2>4. Reative com contexto, não spam</h2>
                <p>
                  Reativação funciona quando a mensagem é útil e personalizada.
                  Evite disparo genérico para toda a base.
                </p>
              </div>

              <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">
                  Leitura relacionada
                </p>
                <div className="mt-3 grid gap-2 text-sm">
                  <Link
                    href="/agenda-barbearia-whatsapp"
                    className="text-primary hover:underline"
                  >
                    Agenda da barbearia no WhatsApp com IA
                  </Link>
                  <Link
                    href="/sistema-agendamento-barbearia"
                    className="text-primary hover:underline"
                  >
                    Sistema de agendamento para retenção e recorrência
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold">
                  Transforme cliente eventual em cliente recorrente
                </h3>
                <p className="mt-2 text-primary-foreground/85">
                  Com o Flowo, você automatiza reativação e mantém agenda aquecida.
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
                  href="/recursos/guias/aumentar-ticket-medio"
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
