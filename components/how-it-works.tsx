"use client";

import { MessageSquare, Bell, CreditCard, Clock, CheckCircle2, Calendar, Users, MoreHorizontal, Scissors } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "./lead-capture-modal";
import { useState, useEffect } from "react";
import Image from "next/image";

const steps = [
  {
    icon: MessageSquare,
    title: "Cliente Manda Mensagem",
    description:
      "Seu cliente manda mensagem no WhatsApp da barbearia. A IA entende e oferece horários disponíveis automaticamente.",
  },
  {
    icon: Scissors,
    title: "Escolhe Serviço e Horário",
    description:
      "Sistema mostra serviços com preços e horários livres. Cliente escolhe o que quer fazer e quando.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Antecipado (Opcional)",
    description:
      "Configure pagamento antecipado via PIX para garantir o agendamento. Cliente paga antes, você reduz faltas drasticamente.",
  },
  {
    icon: Bell,
    title: "Lembrete Automático",
    description:
      "Sistema envia lembrete 24h antes e 2h antes. Cliente confirma, remarca ou cancela pelo próprio WhatsApp.",
  },
];

// Notification timeline for the phone mockup
const notifications = [
  {
    id: 1,
    type: "booking",
    title: "Novo Agendamento",
    message: "João Silva • Corte + Barba • 14:00",
    time: "Agora",
    icon: Calendar,
    color: "bg-emerald-500",
  },
  {
    id: 2,
    type: "reminder",
    title: "Lembrete Enviado",
    message: "24h antes • João Silva notificado",
    time: "Automático",
    icon: Bell,
    color: "bg-cyan-500",
  },
  {
    id: 3,
    type: "reminder",
    title: "Último Lembrete",
    message: "2h antes • João Silva notificado",
    time: "Automático",
    icon: Clock,
    color: "bg-amber-500",
  },
  {
    id: 4,
    type: "confirmed",
    title: "Presença Confirmada",
    message: "João Silva confirmou via WhatsApp",
    time: "Agora",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
];


// Home icon for bottom nav
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PhoneMockup() {
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [stats, setStats] = useState({ agendamentos: 35, clientes: 78, taxa: 94 });

  useEffect(() => {
    // Reset and start animation cycle
    const startAnimation = () => {
      setVisibleNotifications([]);
      setCurrentStep(0);
      setStats({ agendamentos: 35, clientes: 78, taxa: 94 });

      notifications.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNotifications(prev => [...prev, index]);
          setCurrentStep(index);
          // Update stats as notifications come in
          if (index === 0) setStats({ agendamentos: 36, clientes: 79, taxa: 94 });
          if (index === 3) setStats({ agendamentos: 36, clientes: 79, taxa: 97 });
        }, 1500 * (index + 1));
      });
    };

    startAnimation();

    // Loop the animation
    const interval = setInterval(() => {
      startAnimation();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto" style={{ maxWidth: "320px" }}>
      {/* iPhone Frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Side buttons */}
        <div className="absolute left-[-3px] top-24 w-[3px] h-8 bg-gray-700 rounded-l-lg" />
        <div className="absolute left-[-3px] top-36 w-[3px] h-12 bg-gray-700 rounded-l-lg" />
        <div className="absolute left-[-3px] top-52 w-[3px] h-12 bg-gray-700 rounded-l-lg" />
        <div className="absolute right-[-3px] top-32 w-[3px] h-16 bg-gray-700 rounded-r-lg" />

        {/* Screen */}
        <div className="bg-[#f8f7f4] rounded-[2.5rem] overflow-hidden relative">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
            <div className="w-28 h-7 bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-800 mr-2" />
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-[#f8f7f4] pt-12 pb-2 px-6 flex items-center justify-between text-xs font-medium">
            <span className="text-gray-900">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-1 h-3 rounded-sm ${i <= 3 ? 'bg-gray-900' : 'bg-gray-300'}`} />
                ))}
              </div>
              <span className="ml-1 text-gray-900">5G</span>
              <div className="w-6 h-3 border border-gray-900 rounded-sm ml-1 relative">
                <div className="absolute inset-[2px] bg-gray-900 rounded-sm" style={{ width: '75%' }} />
              </div>
            </div>
          </div>

          {/* App Header - Flowo style */}
          <div className="bg-[#f8f7f4] px-4 pb-2">
            <div className="flex items-center justify-between">
              <Image src="/flowo-logo.svg" alt="Flowo" width={60} height={16} />
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 border border-gray-200 text-[10px] text-gray-400 w-32">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path d="m21 21-4.35-4.35" strokeWidth="2" />
                  </svg>
                  Buscar...
                </div>
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="bg-[#f8f7f4] px-4 py-3">
            <h2 className="text-lg font-semibold text-gray-900">Olá, Gustavo</h2>
            <p className="text-[11px] text-gray-500">Terça-feira, 17 de dezembro de 2025</p>
          </div>

          {/* Action Card - Review presence */}
          <div className="px-4 pb-3">
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-900" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Revisar presenças</p>
                    <p className="text-[10px] text-gray-500">1 agendamento para revisar</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="px-4 pb-3">
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500">Saldo disponível</p>
                    <p className="text-sm font-bold text-gray-900">R$ 1.255,00</p>
                    <p className="text-[9px] text-emerald-600">+ R$ 150,00 a liberar</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className="text-[10px] text-gray-500">Acesse o Financeiro</span>
                <span className="text-[10px] font-medium text-gray-900 flex items-center gap-1">
                  ↗ Sacar
                </span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="px-4 pb-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded-xl p-2 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-1">
                  <div className="p-0.5 rounded bg-gray-900/5">
                    <Calendar className="w-2.5 h-2.5 text-gray-700" />
                  </div>
                  <span className="text-[8px] text-gray-500 truncate">Agenda</span>
                </div>
                <motion.p
                  key={stats.agendamentos}
                  initial={{ scale: 1.2, color: '#10b981' }}
                  animate={{ scale: 1, color: '#111827' }}
                  className="text-base font-bold text-gray-900"
                >
                  {stats.agendamentos}
                </motion.p>
                <p className="text-[8px] text-emerald-600">↗ 12%</p>
              </div>
              <div className="bg-white rounded-xl p-2 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-1">
                  <div className="p-0.5 rounded bg-gray-900/5">
                    <Users className="w-2.5 h-2.5 text-gray-700" />
                  </div>
                  <span className="text-[8px] text-gray-500 truncate">Clientes</span>
                </div>
                <motion.p
                  key={stats.clientes}
                  initial={{ scale: 1.2, color: '#10b981' }}
                  animate={{ scale: 1, color: '#111827' }}
                  className="text-base font-bold text-gray-900"
                >
                  {stats.clientes}
                </motion.p>
                <p className="text-[8px] text-emerald-600">↗ +8%</p>
              </div>
              <div className="bg-white rounded-xl p-2 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-1">
                  <div className="p-0.5 rounded bg-gray-900/5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-gray-700" />
                  </div>
                  <span className="text-[8px] text-gray-500 truncate">Confirmados</span>
                </div>
                <motion.p
                  key={stats.taxa}
                  initial={{ scale: 1.2, color: '#10b981' }}
                  animate={{ scale: 1, color: '#111827' }}
                  className="text-base font-bold text-gray-900"
                >
                  {stats.taxa}%
                </motion.p>
                <p className="text-[8px] text-emerald-600">↗ 5%</p>
              </div>
            </div>
          </div>

          {/* Notification Toast Overlay */}
          <div className="absolute top-20 left-4 right-4 z-30">
            <AnimatePresence mode="popLayout">
              {visibleNotifications.length > 0 && (
                <motion.div
                  key={notifications[currentStep].id}
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                  className="bg-white rounded-xl p-3 shadow-lg border border-gray-200"
                >
                  <div className="flex gap-3">
                    <div className={`w-9 h-9 rounded-full ${notifications[currentStep].color} flex items-center justify-center flex-shrink-0`}>
                      {(() => {
                        const Icon = notifications[currentStep].icon;
                        return <Icon className="w-4 h-4 text-white" />;
                      })()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-xs font-semibold text-gray-900">
                          {notifications[currentStep].title}
                        </p>
                        <span className="text-[9px] text-gray-400 flex-shrink-0 ml-2">
                          {notifications[currentStep].time}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-600">
                        {notifications[currentStep].message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Nav - Flowo style */}
          <div className="bg-white border-t border-gray-100 px-2 py-2 pb-6">
            <div className="flex justify-around">
              {[
                { icon: HomeIcon, label: "Início", active: true },
                { icon: Calendar, label: "Agenda", active: false },
                { icon: MessageSquare, label: "Conversas", active: false },
                { icon: Users, label: "Clientes", active: false },
                { icon: MoreHorizontal, label: "Configurações", active: false },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-gray-900' : 'text-gray-400'}`} />
                  <span className={`text-[8px] mt-1 ${item.active ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <Section background="light" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              className="inline-block text-primary font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Como Funciona
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Simples e Automático
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Agendamento via WhatsApp com lembretes automáticos.
              Cliente agenda, confirma e você só precisa atender!
            </motion.p>

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <PhoneMockup />

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 md:-bottom-6 -left-4 md:left-0 bg-white p-2 md:p-4 rounded-lg shadow-xl z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-bold text-xl md:text-2xl text-primary">
                  24/7
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Funcionando sempre
                </p>
              </motion.div>

              <motion.div
                className="absolute -top-4 md:-top-6 -right-4 md:right-0 bg-white p-2 md:p-4 rounded-lg shadow-xl z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-bold text-lg md:text-xl text-green-500">
                      Zero Faltas
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">Confirmações automáticas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Quer parar de perder dinheiro com faltas?
          </h3>
          <LeadCaptureModal>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Teste 14 Dias Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </LeadCaptureModal>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Sem cartão de crédito • Sem compromisso • Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
