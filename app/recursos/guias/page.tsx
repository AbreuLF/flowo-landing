import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GuidesHero } from "@/components/resources/guides-hero";
import { GuideGrid } from "@/components/resources/guide-grid";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guias para Barbearias - Flowo",
  description:
    "Aprenda a usar o Flowo para reduzir faltas, organizar sua agenda e fazer sua barbearia crescer.",
};

export default function GuidesPage() {
  const strategicLinks = [
    {
      title: "Sistema de Agendamento para Barbearia",
      description: "Página comercial focada em operação e recorrência.",
      href: "/sistema-agendamento-barbearia",
    },
    {
      title: "Agenda da Barbearia no WhatsApp",
      description: "Solução para captação e confirmação no canal principal.",
      href: "/agenda-barbearia-whatsapp",
    },
    {
      title: "Software para Barbearia com PIX",
      description: "Fluxo para reduzir no-show e proteger horários premium.",
      href: "/software-barbearia-com-pix",
    },
    {
      title: "Flowo vs Planilha",
      description: "Comparativo para quem ainda opera no manual.",
      href: "/flowo-vs-planilha",
    },
    {
      title: "Flowo vs Agenda Manual",
      description: "Comparativo para equipe em crescimento.",
      href: "/flowo-vs-agenda-manual",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <GuidesHero />
        <GuideGrid />
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Páginas estratégicas para continuar sua jornada
              </h2>
              <p className="mt-2 text-gray-600">
                Estes links conectam conteúdo educacional com páginas de decisão
                comercial, reduzindo dispersão e melhorando navegação por
                intenção.
              </p>
              <div className="mt-6 grid gap-3">
                {strategicLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
