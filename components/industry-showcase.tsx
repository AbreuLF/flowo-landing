"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { User, Users, Building2 } from "lucide-react";

const useCases = [
  {
    icon: User,
    title: "Barbeiro Solo",
    subtitle: "1 cadeira • 8-12 clientes/dia",
    challenge: "Passava o dia respondendo WhatsApp em vez de cortar cabelo",
    result: "Hoje o Flowo responde sozinho, economiza 3h por dia e fatura 45% mais",
    metric: "+45%",
  },
  {
    icon: Users,
    title: "Barbearia Média",
    subtitle: "3-5 barbeiros • 25-40 clientes/dia",
    challenge: "Fila desorganizada, clientes esperando sem previsão",
    result: "Espera caiu de 45min pra 8min, avaliação foi de 3.8 pra 4.8 estrelas",
    metric: "+63%",
  },
  {
    icon: Building2,
    title: "Franquia",
    subtitle: "Múltiplas unidades • Alto ticket",
    challenge: "Cada unidade com sistema diferente, sem controle",
    result: "Padronizou tudo, vê dashboard geral, ticket médio subiu R$ 27",
    metric: "+127%",
  },
];

export default function IndustryShowcase() {
  return (
    <Section background="gradient-reverse">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Funciona pra Todo Tamanho</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De barbeiro solo até franquia, cada um tem seus desafios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Icon & Header */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{useCase.title}</h3>
                <p className="text-sm text-gray-500">{useCase.subtitle}</p>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="text-red-500 font-semibold">Antes: </span>
                  {useCase.challenge}
                </p>
              </div>

              {/* Result */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="text-green-600 font-semibold">Depois: </span>
                  {useCase.result}
                </p>
              </div>

              {/* Metric Badge */}
              <div className="pt-6 border-t border-gray-200">
                <div className="inline-flex items-center gap-2">
                  <span className="text-3xl font-bold gradient-text">
                    {useCase.metric}
                  </span>
                  <span className="text-sm text-gray-600">faturamento</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
