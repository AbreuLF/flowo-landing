import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    name: "Saúde",
    image: "/health-industry.jpg",
    link: "/casos-de-sucesso/clinica-saude-total",
  },
  {
    name: "Beleza",
    image: "/beauty-industry.jpg",
    link: "/casos-de-sucesso/estudio-beleza-radiante",
  },
  {
    name: "Fitness",
    image: "/fitness-industry.jpg",
    link: "/casos-de-sucesso/academia-corpo-em-forma",
  },
];

export default function IndustryExamples() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Flowo em Ação: Casos de Sucesso por Indústria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={industry.image}
                alt={industry.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                <Link
                  href={industry.link}
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  Ver caso de sucesso
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
