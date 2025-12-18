import { motion } from "framer-motion";
import Image from "next/image";
import { User, Users, Building2 } from "lucide-react";

const scenarios = [
  {
    name: "Barbeiro Autônomo",
    description: "Um profissional, agenda simples, sem conflitos. PIX garante o horário.",
    image: "/images/barbershops/scenario-solo.jpg",
    icon: User,
    features: ["Até 200 agendamentos/mês", "WhatsApp com IA básica", "PIX automático"],
  },
  {
    name: "Barbearia com Equipe",
    description: "Vários barbeiros, cada um com sua agenda sincronizada. Cliente escolhe o profissional.",
    image: "/images/barbershops/scenario-team.jpg",
    icon: Users,
    features: ["Agendamentos ilimitados", "Sync Google/Apple/Outlook", "Webhooks e integrações"],
  },
  {
    name: "Rede de Barbearias",
    description: "Múltiplas unidades, dashboard consolidado, gestão centralizada.",
    image: "/images/barbershops/scenario-chain.jpg",
    icon: Building2,
    features: ["Unidades ilimitadas", "API completa", "Gerente de conta dedicado"],
  },
];

export default function IndustryExamples() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Para Todo Tamanho de Barbearia
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          De barbeiro autônomo a redes com dezenas de unidades, o Flowo se adapta ao seu negócio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={scenario.image}
                alt={scenario.name}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <scenario.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{scenario.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <ul className="space-y-1">
                  {scenario.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500">• {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
