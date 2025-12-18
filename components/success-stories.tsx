import { motion } from "framer-motion";
import Image from "next/image";

const successStories = [
  {
    name: "Barbearia Dom Pedro",
    industry: "Barbearia",
    result: "Muito menos faltas",
    description:
      "Com pagamento PIX antecipado e lembretes automáticos, o Dom Pedro reduziu drasticamente as faltas e aumentou o faturamento.",
    image: "/images/barbershops/success-1.jpg",
    link: "#",
  },
  {
    name: "Barber House SP",
    industry: "Barbearia",
    result: "R$ 8.000 extras por mês",
    description:
      "Atendimento 24/7 via WhatsApp com IA garantiu agendamentos até de madrugada. Calendário sempre cheio.",
    image: "/images/barbershops/success-2.jpg",
    link: "#",
  },
  {
    name: "Corte Certo Barbearia",
    industry: "Barbearia",
    result: "5 barbeiros sincronizados",
    description:
      "Equipe inteira com agendas conectadas ao Google Calendar. Zero conflitos, cada barbeiro vê só os próprios horários.",
    image: "/images/barbershops/success-3.jpg",
    link: "#",
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
          Barbearias que Usam o Flowo
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
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-gray-600 mb-4">{story.industry}</p>
                <p className="text-2xl font-bold text-primary mb-4">
                  {story.result}
                </p>
                <p className="text-gray-700">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
