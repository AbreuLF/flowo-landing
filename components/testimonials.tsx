"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./section";

const reviews = [
  {
    rating: 5,
    text: "Antes perdia muito tempo respondendo WhatsApp no meio do corte. Hoje o Flowo cuida disso sozinho, agenda automático e manda lembretes. Passei de 120 pra 180 clientes/mês e faturei R$ 8.400 a mais em 60 dias!",
    author: "Rafael 'Ratão' Souza",
    role: "Barbearia do Ratão - Tatuapé, SP",
    initials: "RS",
  },
  {
    rating: 5,
    text: "Com 4 barbeiros, era impossível controlar fila e agenda. O Flowo organizou tudo. Reduzimos espera de 45min pra 12min e os clientes avaliam 4.9 estrelas no Google agora.",
    author: "Leonardo Silva",
    role: "BarberHouse Premium - Copacabana, RJ",
    initials: "LS",
  },
  {
    rating: 5,
    text: "Perdíamos 18 clientes/semana por não confirmar. Com os lembretes automáticos caiu pra 2! Isso representa R$ 2.800 a mais por mês só de faltas evitadas.",
    author: "Thiago Barbosa",
    role: "Cortes & Estilo - Savassi, BH",
    initials: "TB",
  },
  {
    rating: 5,
    text: "Tenho 3 unidades da franquia. Antes cada uma tinha um jeito diferente de agendar. O Flowo padronizou tudo e aumentamos o ticket médio de R$ 45 pra R$ 68 com upsell automático.",
    author: "Marcelo 'Marcelinho' Ferreira",
    role: "Kings Barbershop - Rede com 3 unidades, PR",
    initials: "MF",
  },
  {
    rating: 5,
    text: "Sou barbeiro há 15 anos e sempre trabalhei só com encaixe. Com o Flowo, comecei a agendar e organizei minha vida. Trabalho 2h a menos por dia e ganho 40% mais. Devia ter feito isso antes!",
    author: "Rodrigo 'Digão' Almeida",
    role: "Barbearia Clássica do Digão - Centro, SP",
    initials: "RA",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderTestimonialCard = (review: typeof reviews[0]) => (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 md:p-6">
        <div className="flex mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
            />
          ))}
        </div>

        <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 italic">
          &quot;{review.text}&quot;
        </p>

        <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
            <span className="text-white font-semibold text-sm md:text-base">
              {review.initials}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-sm md:text-base">
              {review.author}
            </h4>
            <p className="text-xs md:text-sm text-gray-600">
              {review.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Section background="light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mais de <span className="text-primary">570 Barbearias</span> Já Faturam Mais com Flowo ✂️
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Barbearias de todo Brasil economizam em média <strong>3h por dia</strong> e faturam <strong>+50% a mais</strong> nos primeiros 90 dias.
          </p>
        </motion.div>

        {/* Desktop: Show 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % reviews.length;
            const review = reviews[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: offset * 0.1 }}
              >
                {renderTestimonialCard(review)}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Show 1 card with carousel */}
        <div className="lg:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {renderTestimonialCard(reviews[currentIndex])}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </Section>
  );
}
