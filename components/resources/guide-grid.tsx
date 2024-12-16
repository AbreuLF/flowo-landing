"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  Zap,
  Users,
  BarChart,
  MessageCircle,
  Shield,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const guides = [
  {
    title: "Primeiros Passos com o Flowo",
    description:
      "Um guia completo para começar a usar o Flowo e configurar sua conta.",
    readTime: "10 min",
    category: "Primeiros Passos",
    icon: Rocket,
    href: "/recursos/guias/primeiros-passos",
  },
  {
    title: "Otimizando seu Fluxo de Trabalho",
    description:
      "Aprenda a maximizar sua produtividade com as ferramentas avançadas do Flowo.",
    readTime: "15 min",
    category: "Produtividade",
    icon: Zap,
    href: "/recursos/guias/otimizando-fluxo-trabalho",
  },
  {
    title: "Integrando o Flowo com WhatsApp",
    description:
      "Guia passo a passo para configurar e utilizar a integrguia-definitivo-agendamentoação com WhatsApp.",
    readTime: "8 min",
    category: "Integrações",
    icon: MessageCircle,
    href: "/recursos/guias/integracao-whatsapp",
  },
  {
    title: "Análise de Dados para Tomada de Decisões",
    description:
      "Como utilizar os relatórios do Flowo para impulsionar seu negócio.",
    readTime: "12 min",
    category: "Análise de Dados",
    icon: BarChart,
    href: "/recursos/guias/analise-dados-decisoes",
  },
  {
    title: "Gerenciando Equipes Remotas",
    description:
      "Estratégias para coordenar equipes distribuídas usando o Flowo.",
    readTime: "15 min",
    category: "Gestão de Equipe",
    icon: Users,
    href: "/recursos/guias/equipes-remotas",
  },
  {
    title: "Segurança e Conformidade no Flowo",
    description:
      "Melhores práticas para proteger seus dados e manter a conformidade.",
    readTime: "9 min",
    category: "Segurança",
    icon: Shield,
    href: "/recursos/guias/seguranca-conformidade",
  },
  {
    title: "Automatizando Tarefas Repetitivas",
    description:
      "Como usar a automação do Flowo para economizar tempo e reduzir erros.",
    readTime: "11 min",
    category: "Produtividade",
    icon: Zap,
    href: "/recursos/guias/automatizando-tarefas",
  },
  {
    title: "Maximizando o Engajamento de Clientes",
    description:
      "Estratégias para melhorar a comunicação e retenção de clientes com o Flowo.",
    readTime: "13 min",
    category: "Marketing",
    icon: Users,
    href: "/recursos/guias/engajamento-clientes",
  },
];

export function GuideGrid() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Nossos Guias
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <guide.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{guide.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {guide.readTime}
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {guide.category}
                  </span>
                </div>
                <Button asChild className="w-full">
                  <Link href={guide.href}>
                    Ler guia <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
