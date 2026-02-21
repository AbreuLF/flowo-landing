import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, WalletCards } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Controle Financeiro de Barbearia | Guia Flowo",
  description:
    "Guia de controle financeiro para barbearias com fluxo de caixa, metas semanais e indicadores de margem.",
};

export default function ControleFinanceiroGuidePage() {
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
                { label: "Controle Financeiro", href: "#" },
              ]}
            />

            <article className="mt-8">
              <header>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <WalletCards className="h-4 w-4" />
                  12 min de leitura
                </span>
                <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
                  Controle financeiro para barbearia: o que acompanhar toda semana
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  A barbearia pode estar cheia e mesmo assim sobrar pouco dinheiro.
                  Sem gestão financeira simples e constante, crescimento vira risco.
                </p>
              </header>

              <div className="prose prose-lg mt-10 max-w-none">
                <h2>1. Separe faturamento de lucro</h2>
                <p>
                  Faturar mais não garante margem. Controle custo variável por
                  serviço (produtos, comissão, taxas) para saber lucro real.
                </p>
                <h2>2. Defina meta semanal de caixa</h2>
                <p>
                  Metas curtas ajudam reação rápida. Exemplo: meta de caixa por dia
                  e por barbeiro para corrigir rota ainda na semana.
                </p>
                <h2>3. Monitore ticket médio e ocupação juntos</h2>
                <p>
                  Ticket alto com agenda vazia não sustenta o negócio. Equilibre
                  preço, ocupação e recorrência para estabilidade.
                </p>
                <h2>4. Planeje sazonalidade</h2>
                <p>
                  Meses mais fracos exigem ação antecipada (campanha, pacote,
                  reativação). Não espere o caixa apertar para agir.
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
                    Software para barbearia com PIX e previsibilidade de caixa
                  </Link>
                  <Link
                    href="/flowo-vs-planilha"
                    className="text-primary hover:underline"
                  >
                    Flowo vs planilha para gestão financeira da operação
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold">
                  Tenha visão financeira sem planilha caótica
                </h3>
                <p className="mt-2 text-primary-foreground/85">
                  Com o Flowo, você conecta agenda e performance para tomar decisão
                  com mais previsibilidade.
                </p>
                <div className="mt-5">
                  <LeadCaptureModal>
                    <Button className="bg-white text-primary hover:bg-white/90">
                      Testar o Flowo
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
                  href="/recursos/guias/escala-equipe"
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
