"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./section";

const reviews = [
  {
    rating: 5,
    text: "O Flowo revolucionou minha clínica. A sincronização de agenda e integração com WhatsApp reduziu as faltas em 70%!",
    author: "Dra. Ana Silva",
    role: "Clínica Saúde & Bem-estar",
    image: "/testimonials/ana-silva.jpg",
    industry: "Saúde",
  },
  {
    rating: 5,
    text: "Desde que implementamos o Flowo, nosso faturamento aumentou 40%. A IA realmente entende nossos padrões de agendamento.",
    author: "Carlos Mendes",
    role: "Studio Beleza Total",
    image: "/testimonials/carlos-mendes.jpg",
    industry: "Beleza",
  },
  {
    rating: 5,
    text: "A automação do Flowo me economiza 15 horas por semana. Os clientes adoram a facilidade de agendar pelo WhatsApp.",
    author: "Patricia Santos",
    role: "Espaço Terapêutico Equilíbrio",
    image: "/testimonials/patricia-santos.jpg",
    industry: "Terapia",
  },
];

export default function Testimonials() {
  return (
    <Section background="light">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          O Que Nossos Clientes Dizem{" "}
          <span className="inline-block text-yellow-400">💛</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubra como o Flowo está transformando negócios e impulsionando o
          sucesso de nossos clientes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">
                  &quot;{review.text}&quot;
                </p>

                <div className="flex items-center">
                  <Image
                    src={review.image}
                    alt={review.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{review.author}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {review.industry}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
