import { MessageSquare, CreditCard, Calendar, Bell, Zap } from "lucide-react";

const benefits = [
  { text: "Agendamento 24/7 via WhatsApp com IA", icon: MessageSquare },
  { text: "PIX antecipado opcional para reduzir faltas", icon: CreditCard },
  { text: "Sync com Google, Apple e Outlook Calendar", icon: Calendar },
  { text: "Lembretes automáticos reduzem faltas significativamente", icon: Bell },
  { text: "Setup em 30 minutos, sem complicação", icon: Zap },
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="gradient-bg-medium rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold">Menos</p>
                  <p className="text-sm opacity-80">Faltas</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold">24/7</p>
                  <p className="text-sm opacity-80">IA agendando</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold">Agenda</p>
                  <p className="text-sm opacity-80">Lotada</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold">30min</p>
                  <p className="text-sm opacity-80">Para configurar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">Por que Escolher o Flowo?</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <benefit.icon className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
