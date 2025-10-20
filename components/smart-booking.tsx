import { Calendar, Bell, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from './section'

const features = [
  {
    icon: Calendar,
    title: "Agendamento Simplificado",
    description: "Sistema intuitivo que elimina a necessidade de entrada manual de dados. Seus clientes agendam em segundos."
  },
  {
    icon: Bell,
    title: "Lembretes Inteligentes",
    description: "Notificações automáticas via WhatsApp que reduzem faltas em até 60%. Nunca mais perca um compromisso."
  },
  {
    icon: Zap,
    title: "Calendário Sempre Atualizado",
    description: "Sincronização em tempo real com Google Calendar e Outlook. Atualizações instantâneas para toda a equipe."
  },
  {
    icon: Shield,
    title: "Proteção Contra Spam",
    description: "Sistema de IA que identifica e bloqueia agendamentos falsos, garantindo apenas reservas legítimas."
  }
]

export default function SmartBooking() {
  return (
    <Section background="light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              className="inline-block text-primary font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Automação Inteligente
            </motion.span>
            
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Agenda no piloto automático
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Economize até 80% do tempo operacional com agendamento automático e gestão inteligente de lembretes.
            </motion.p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative gradient-bg-medium rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { icon: Calendar, label: "Agenda" },
                  { icon: Bell, label: "Lembretes" },
                  { icon: Zap, label: "Rápido" },
                  { icon: Shield, label: "Seguro" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white/90 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-2xl text-primary">80%</p>
                <p className="text-sm text-gray-600">Tempo economizado</p>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-2xl text-green-500">60%</p>
                <p className="text-sm text-gray-600">Menos faltas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

