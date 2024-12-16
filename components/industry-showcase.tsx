"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./section";

const industries = [
  {
    name: "Saúde",
    description:
      "Reduza faltas em até 70% e aumente a satisfação dos pacientes com agendamento inteligente.",
    metrics: {
      revenue: "+45%",
      efficiency: "15h",
      satisfaction: "98%",
    },
    image: "/industries/healthcare.jpg",
    link: "/casos-de-sucesso/clinica-saude-total",
  },
  {
    name: "Beleza",
    description:
      "Otimize sua agenda e aumente seu faturamento com recomendações personalizadas de serviços.",
    metrics: {
      revenue: "+40%",
      efficiency: "12h",
      satisfaction: "96%",
    },
    image: "/industries/beauty.jpg",
    link: "/casos-de-sucesso/estudio-beleza-radiante",
  },
  {
    name: "Fitness",
    description:
      "Maximize a ocupação das aulas e aumente a retenção de alunos com lembretes inteligentes.",
    metrics: {
      revenue: "+35%",
      efficiency: "10h",
      satisfaction: "95%",
    },
    image: "/industries/fitness.jpg",
    link: "/casos-de-sucesso/academia-corpo-em-forma",
  },
];

export default function IndustryShowcase() {
  return (
    <Section background="gradient-reverse">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Soluções para Seu Segmento</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubra como o Flowo se adapta às necessidades específicas do seu
          negócio e impulsiona resultados reais.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="relative h-64">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                <p className="text-white/90 mb-4">{industry.description}</p>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {industry.metrics.revenue}
                  </p>
                  <p className="text-sm text-gray-600">Faturamento</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {industry.metrics.efficiency}
                  </p>
                  <p className="text-sm text-gray-600">Horas/semana</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {industry.metrics.satisfaction}
                  </p>
                  <p className="text-sm text-gray-600">Satisfação</p>
                </div>
              </div>

              <Link
                href={industry.link}
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
              >
                Ver caso de sucesso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
