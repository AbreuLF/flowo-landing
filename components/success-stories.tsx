import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const successStories = [
  {
    name: "Clínica Saúde Total",
    industry: "Saúde",
    result: "Aumento de 52% nos agendamentos",
    description:
      "A Clínica Saúde Total eliminou as faltas e aumentou sua eficiência operacional com o Flowo.",
    image: "/clinic-success.jpg",
    link: "/casos-de-sucesso/clinica-saude-total",
  },
  {
    name: "Estúdio Beleza Radiante",
    industry: "Beleza",
    result: "Crescimento de 40% no faturamento",
    description:
      "O Estúdio Beleza Radiante otimizou sua agenda e expandiu sua base de clientes usando o Flowo.",
    image: "/beauty-success.jpg",
    link: "/casos-de-sucesso/estudio-beleza-radiante",
  },
  {
    name: "Academia Corpo em Forma",
    industry: "Fitness",
    result: "Redução de 70% nas faltas",
    description:
      "A Academia Corpo em Forma melhorou significativamente a assiduidade dos alunos com os lembretes do Flowo.",
    image: "/gym-success.jpg",
    link: "/casos-de-sucesso/academia-corpo-em-forma",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Histórias de Sucesso com o Flowo
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Image
                src={story.image}
                alt={story.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-gray-600 mb-4">{story.industry}</p>
                <p className="text-2xl font-bold text-primary mb-4">
                  {story.result}
                </p>
                <p className="text-gray-700 mb-4">{story.description}</p>
                <Link
                  href={story.link}
                  className="text-primary font-semibold flex items-center hover:underline"
                >
                  Ler estudo de caso completo
                  <ArrowUpRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
