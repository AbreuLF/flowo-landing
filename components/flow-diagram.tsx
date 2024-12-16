"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MessageCircle, Calendar, Bell, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contato via WhatsApp",
    description:
      "O cliente entra em contato pelo WhatsApp a qualquer momento, 24/7.",
    detail:
      "Nossa integração com o WhatsApp permite que seus clientes agendem horários de forma conveniente, a qualquer hora do dia.",
  },
  {
    icon: Calendar,
    title: "IA Agenda",
    description:
      "A IA do Flowo responde instantaneamente e agenda o horário ideal.",
    detail:
      "Nossa IA avançada analisa sua agenda, preferências do cliente e histórico para sugerir o melhor horário, aumentando a eficiência.",
  },
  {
    icon: Bell,
    title: "Lembretes Automáticos",
    description: "Lembretes personalizados são enviados para reduzir faltas.",
    detail:
      "Lembretes inteligentes são enviados em momentos estratégicos, reduzindo faltas em até 60%.",
  },
  {
    icon: TrendingUp,
    title: "Aumento no Faturamento",
    description: "A otimização resulta em mais negócios e maior satisfação.",
    detail:
      "Clientes relatam um aumento médio de 30% no faturamento após 3 meses de uso do Flowo.",
  },
];

export default function FlowDiagram() {
  const [currentStep, setCurrentStep] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    controls.start({ width: `${(currentStep + 1) * (100 / steps.length)}%` });
  }, [currentStep, controls]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative mb-16">
        {/* Linha de progresso */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 transform -translate-y-1/2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Passos do fluxo */}
        <div className="relative z-10 flex justify-between">
          {steps.map((step, index) => (
            <motion.button
              key={index}
              className="flex flex-col items-center focus:outline-none"
              initial={{ opacity: 0.5, y: 20 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0.5,
                y: 0,
                scale: index === currentStep ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrentStep(index)}
              aria-label={`Ver detalhes do passo: ${step.title}`}
            >
              <div
                className={`bg-white border-2 ${
                  index <= currentStep ? "border-primary" : "border-gray-300"
                } rounded-full p-4 mb-4`}
              >
                <step.icon
                  className={`w-8 h-8 ${
                    index <= currentStep ? "text-primary" : "text-gray-400"
                  }`}
                />
              </div>
              <h3
                className={`text-sm font-semibold mb-1 text-center ${
                  index <= currentStep ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step.title}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Descrição do passo atual */}
      <motion.div
        className="text-center"
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl font-semibold mb-4">
          {steps[currentStep].title}
        </h4>
        <p className="text-lg text-gray-600 mb-4">
          {steps[currentStep].description}
        </p>
        <p className="text-md text-gray-500">{steps[currentStep].detail}</p>
      </motion.div>
    </div>
  );
}
