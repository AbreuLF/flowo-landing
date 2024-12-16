import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Os guias do Flowo me ajudaram a aumentar a eficiência do meu consultório em 35%!",
    author: "Dra. Ana Silva, Clínica Saúde Total",
  },
  {
    quote:
      "Graças aos guias do Flowo, reduzi as faltas de clientes em 60% e aumentei minha receita.",
    author: "Carlos Mendes, Studio Beleza Total",
  },
  {
    quote:
      "Os guias de integração do Flowo me economizam 10 horas por semana em tarefas administrativas.",
    author: "Patricia Santos, Espaço Terapêutico Equilíbrio",
  },
];

export function GuideTestimonials() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        O que nossos usuários dizem
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg"
          >
            <p className="text-lg mb-4 italic">
              &quot;{testimonial.quote}&quot;
            </p>
            <p className="font-semibold">{testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
