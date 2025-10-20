"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Star, DollarSign, Calendar } from "lucide-react";
import { Section } from "./section";
import { globalMetrics, specificMetrics } from "@/data/success-metrics";

const stats = [
  {
    icon: TrendingUp,
    value: `+${globalMetrics.avgRevenueIncrease}%`,
    label: "Aumento Médio de Faturamento",
    detail: "Nos primeiros 90 dias de uso",
  },
  {
    icon: Clock,
    value: `${globalMetrics.avgTimeSaved}h`,
    label: "Economizadas por Dia",
    detail: "Tempo livre para cortar mais cabelo",
  },
  {
    icon: Calendar,
    value: `-${globalMetrics.avgNoShowReduction}%`,
    label: "Redução de Faltas",
    detail: "Com lembretes automáticos por IA",
  },
  {
    icon: Users,
    value: `${globalMetrics.totalBarbers.toLocaleString('pt-BR')}+`,
    label: "Barbeiros Ativos",
    detail: "Em todo Brasil usando Flowo",
  },
  {
    icon: Star,
    value: globalMetrics.avgCustomerSatisfaction.toFixed(1),
    label: "Satisfação dos Clientes",
    detail: "Avaliação média no Google",
  },
  {
    icon: DollarSign,
    value: `R$ ${(specificMetrics.revenueIncrease.solo.absolute / 1000).toFixed(1)}k`,
    label: "Faturamento Extra/Mês",
    detail: "Média barbeiro solo em 60 dias",
  },
];

export default function SuccessStats() {
  return (
    <Section background="gradient">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Resultados Reais de Barbeiros que Usam Flowo
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
          Não é teoria. São números reais de <strong>{globalMetrics.totalBarbershops}+ barbearias</strong> que transformaram
          seus negócios com o Flowo nos últimos 12 meses.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="mb-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                {stat.label}
              </p>
            </div>

            <p className="text-sm text-gray-600">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Destaque adicional */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/30">
          <p className="text-white text-lg md:text-xl font-semibold">
            ⚡ Tempo médio para ver resultados:{" "}
            <span className="text-yellow-300 font-bold">{globalMetrics.firstMonthResults} dias</span>
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
