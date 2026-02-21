import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Escala de Equipe para Barbearia | Guia Flowo",
  description:
    "Aprenda a organizar escala da equipe da barbearia com previsibilidade de horários e melhor distribuição de agenda.",
};

export default function EscalaEquipeGuidePage() {
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
                { label: "Escala de Equipe", href: "#" },
              ]}
            />

            <article className="mt-8">
              <header>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Users className="h-4 w-4" />
                  11 min de leitura
                </span>
                <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
                  Escala de equipe para barbearia: como evitar caos nos horários
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Escala ruim gera atraso, sobrecarga e cliente insatisfeito. Com
                  processo simples e visível para todos, você melhora operação e
                  experiência.
                </p>
              </header>

              <div className="prose prose-lg mt-10 max-w-none">
                <h2>1. Defina blocos fixos por barbeiro</h2>
                <p>
                  Reserve horários de maior demanda para profissionais mais
                  experientes e distribua janelas de encaixe sem canibalizar agenda.
                </p>
                <h2>2. Crie regra de distribuição</h2>
                <p>
                  Sem regra, a carga concentra em poucos profissionais. Configure
                  lógica de distribuição por especialidade e disponibilidade.
                </p>
                <h2>3. Tenha visão de capacidade semanal</h2>
                <p>
                  Capacidade planejada evita “promessa” de horário que não existe.
                  Trabalhe com ocupação alvo e limite por barbeiro.
                </p>
                <h2>4. Faça revisão de escala toda semana</h2>
                <p>
                  Ajuste turnos com base em demanda real, não em percepção. Pico de
                  sexta/sábado exige plano diferente de terça-feira.
                </p>
              </div>

              <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">
                  Leitura relacionada
                </p>
                <div className="mt-3 grid gap-2 text-sm">
                  <Link
                    href="/sistema-agendamento-barbearia"
                    className="text-primary hover:underline"
                  >
                    Sistema de agendamento para barbearia
                  </Link>
                  <Link
                    href="/flowo-vs-agenda-manual"
                    className="text-primary hover:underline"
                  >
                    Flowo vs agenda manual para barbearia
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold">
                  Organize sua equipe com menos retrabalho
                </h3>
                <p className="mt-2 text-primary-foreground/85">
                  Use o Flowo para distribuir agenda, reduzir conflito e melhorar
                  previsibilidade da operação.
                </p>
                <div className="mt-5">
                  <LeadCaptureModal>
                    <Button className="bg-white text-primary hover:bg-white/90">
                      Testar agora
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
                  href="/recursos/guias/controle-financeiro-barbearia"
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
