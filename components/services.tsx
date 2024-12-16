import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Plano Básico",
    price: "R$49/mês",
    features: [
      "Agendamento com IA",
      "Integração com calendário",
      "Lembretes automáticos",
      "Até 100 agendamentos/mês",
    ],
    cta: "Experimente Grátis",
  },
  {
    title: "Plano Profissional",
    price: "R$99/mês",
    features: [
      "Tudo do Plano Básico",
      "Análises avançadas",
      "Personalização de marca",
      "Agendamentos ilimitados",
      "Suporte prioritário",
    ],
    cta: "Comece Agora",
    highlighted: true,
  },
  {
    title: "Plano Empresarial",
    price: "Sob consulta",
    features: [
      "Tudo do Plano Profissional",
      "API personalizada",
      "Gerenciamento de equipe",
      "Treinamento dedicado",
      "SLA garantido",
    ],
    cta: "Fale Conosco",
  },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Escolha o Plano Ideal para Seu Negócio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col p-6 bg-white rounded-lg shadow-lg ${service.highlighted ? 'border-2 border-primary' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-3xl font-bold mb-6">{service.price}</p>
              <ul className="mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <Check className="mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${service.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}>
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

