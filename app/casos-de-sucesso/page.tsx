import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";
import {
  Trophy,
  ArrowRight,
  Dumbbell,
  Sparkles,
  Heart,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Sucesso - Flowo",
  description:
    "Veja como barbearias e negócios de serviços estão crescendo com o Flowo. Histórias reais de redução de faltas e aumento de faturamento.",
};

const successStories = [
  {
    slug: "academia-corpo-em-forma",
    title: "Academia Corpo em Forma",
    industry: "Fitness e Bem-estar",
    icon: Dumbbell,
    result: "70% menos faltas",
    secondaryResult: "+45% receita",
    description:
      "Como uma academia reduziu drasticamente as faltas em aulas e aumentou a retenção de membros.",
    metrics: [
      { label: "Redução de faltas", value: "70%" },
      { label: "Aumento na receita", value: "45%" },
      { label: "Horas economizadas/semana", value: "25h" },
    ],
  },
  {
    slug: "estudio-beleza-radiante",
    title: "Estúdio Beleza Radiante",
    industry: "Beleza e Estética",
    icon: Sparkles,
    result: "85% menos faltas",
    secondaryResult: "+60% agendamentos",
    description:
      "Salão de beleza que transformou a gestão de agenda e aumentou significativamente os agendamentos.",
    metrics: [
      { label: "Redução de faltas", value: "85%" },
      { label: "Mais agendamentos", value: "60%" },
      { label: "Economia mensal", value: "R$ 4.200" },
    ],
  },
  {
    slug: "clinica-saude-total",
    title: "Clínica Saúde Total",
    industry: "Saúde e Bem-estar",
    icon: Heart,
    result: "90% confirmação",
    secondaryResult: "+35% pacientes",
    description:
      "Clínica que otimizou agendamentos e reduziu o tempo de espera dos pacientes.",
    metrics: [
      { label: "Taxa de confirmação", value: "90%" },
      { label: "Mais pacientes/mês", value: "35%" },
      { label: "Redução no tempo de espera", value: "40%" },
    ],
  },
];

const stats = [
  { icon: TrendingUp, value: "75%", label: "Redução média de faltas" },
  { icon: Users, value: "500+", label: "Negócios atendidos" },
  { icon: Clock, value: "20h", label: "Economizadas por semana" },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <Section background="white" className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Breadcrumb
                items={[
                  { label: "Início", href: "/" },
                  { label: "Casos de Sucesso", href: "/casos-de-sucesso" },
                ]}
              />

              {/* Hero */}
              <div className="mt-8 mb-16 text-center">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <Trophy className="w-4 h-4" />
                  Histórias Reais
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Casos de Sucesso
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Veja como negócios como o seu estão reduzindo faltas, economizando
                  tempo e aumentando faturamento com o Flowo.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 p-6 bg-gray-50 rounded-2xl">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl md:text-4xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Success Stories Grid */}
              <div className="grid gap-8">
                {successStories.map((story) => (
                  <Link
                    key={story.slug}
                    href={`/casos-de-sucesso/${story.slug}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Icon */}
                        <div className="p-4 bg-primary/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                          <story.icon className="w-8 h-8 text-primary" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {story.industry}
                            </span>
                            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded">
                              {story.result}
                            </span>
                            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                              {story.secondaryResult}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {story.title}
                          </h2>
                          <p className="text-gray-600 mb-4">
                            {story.description}
                          </p>

                          {/* Metrics */}
                          <div className="flex flex-wrap gap-4 md:gap-8">
                            {story.metrics.map((metric) => (
                              <div key={metric.label}>
                                <div className="text-lg md:text-xl font-bold text-gray-900">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex items-center">
                          <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-16 p-8 bg-primary text-white rounded-2xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Quer resultados como esses?
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                  Comece seu teste gratuito de 14 dias e veja como o Flowo pode
                  transformar seu negócio.
                </p>
                <LeadCaptureModal>
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Começar teste grátis
                  </Button>
                </LeadCaptureModal>
                <p className="mt-4 text-sm text-primary-foreground/60">
                  Sem cartão de crédito. Cancele quando quiser.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
