"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Check, Phone, Video, MoreVertical, ChevronLeft, Smile, Paperclip, Mic } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LeadCaptureModal } from "./lead-capture-modal";
import { Section } from "./section";

const features = [
  {
    title: "IA no WhatsApp 24h",
    description: "Responde, agenda e confirma sozinha",
  },
  {
    title: "PIX Antecipado (Opcional)",
    description: "Ative e reduza faltas drasticamente",
  },
  {
    title: "Sync com Seus Calendários",
    description: "Google, Apple e Outlook em tempo real",
  },
  {
    title: "Lembretes que Funcionam",
    description: "Cliente confirma ou libera o horário",
  },
];

export default function Hero() {
  return (
    <Section background="gradient" className="pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                +500 Barbearias Já Usam
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Agendamento para Barbearia
              <br />
              <span className="gradient-text">via WhatsApp com IA</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              IA responde no WhatsApp 24h. Lembretes confirmam presença.
              Cliente na cadeira, não no vácuo.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LeadCaptureModal>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Começar Teste de 14 Dias <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </LeadCaptureModal>
              <Button
                variant="outline"
                className="w-full sm:w-auto inline-flex items-center justify-center"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Como Funciona
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-gray-500 mb-6 flex items-center justify-center sm:justify-start gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Check className="w-4 h-4 text-green-500" />
              Sem cartão de crédito • Cancele quando quiser
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-4 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="gradient-bg-light p-4 rounded-xl border border-primary/20">
                <p className="text-2xl font-bold gradient-text">-70%</p>
                <p className="text-xs text-gray-600">Faltas</p>
              </div>
              <div className="gradient-bg-light p-4 rounded-xl border border-primary/20">
                <p className="text-2xl font-bold gradient-text">Agenda</p>
                <p className="text-xs text-gray-600">Lotada</p>
              </div>
              <div className="gradient-bg-light p-4 rounded-xl border border-primary/20">
                <p className="text-2xl font-bold gradient-text">24/7</p>
                <p className="text-xs text-gray-600">Atendimento IA</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 mr-3">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative mt-8 lg:mt-0 shrink grow basis-auto w-full lg:w-[unset] flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Phone Mockup */}
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[300px] md:w-[340px] bg-black rounded-[2.5rem] p-[10px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-gray-800">
                {/* Dynamic Island */}
                <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />

                {/* Side buttons - Volume */}
                <div className="absolute -left-[3px] top-[120px] w-[3px] h-[30px] bg-gray-700 rounded-l-lg" />
                <div className="absolute -left-[3px] top-[160px] w-[3px] h-[30px] bg-gray-700 rounded-l-lg" />
                {/* Side button - Power */}
                <div className="absolute -right-[3px] top-[140px] w-[3px] h-[40px] bg-gray-700 rounded-r-lg" />

                {/* Phone screen */}
                <div className="bg-black rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#075e54] text-white px-6 pt-3 pb-1 flex items-center justify-between text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.73v3.1c0 .4.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z"/>
                      </svg>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 22h20V2z" opacity="0.3"/>
                        <path d="M17 4h3v16h-3V4zm-4 4h3v12h-3V8zm-4 4h3v8H9v-8zm-4 4h3v4H5v-4z"/>
                      </svg>
                      <div className="flex items-center">
                        <div className="w-6 h-3 border border-white rounded-sm relative">
                          <div className="absolute inset-[2px] right-[3px] bg-white rounded-[1px]" />
                        </div>
                        <div className="w-[2px] h-[6px] bg-white rounded-r-sm ml-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp header */}
                  <div className="bg-[#075e54] text-white px-2 py-2 flex items-center gap-2">
                    <ChevronLeft className="w-6 h-6 opacity-90" />
                    <div className="w-9 h-9 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 ring-2 ring-white/20">
                      BC
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[15px] truncate">Barbearia Central</p>
                      <p className="text-[11px] text-green-200">online</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Video className="w-5 h-5 opacity-90" />
                      <Phone className="w-5 h-5 opacity-90" />
                      <MoreVertical className="w-5 h-5 opacity-90" />
                    </div>
                  </div>

                  {/* Chat background with pattern */}
                  <div
                    className="relative min-h-[480px] md:min-h-[520px]"
                    style={{
                      backgroundColor: '#efeae2',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cfc4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  >
                    {/* Date badge */}
                    <div className="flex justify-center py-2">
                      <span className="bg-white/80 text-gray-600 text-[11px] px-3 py-1 rounded-lg shadow-sm">
                        HOJE
                      </span>
                    </div>

                    {/* Chat messages */}
                    <div className="px-3 space-y-1">
                      {/* Customer message */}
                      <motion.div
                        className="flex justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="bg-[#d9fdd3] rounded-lg rounded-tr-none px-2.5 py-1.5 max-w-[80%] shadow-sm relative">
                          <p className="text-[13px] text-gray-800 pr-12">Oi, quero marcar um corte pra amanhã</p>
                          <span className="absolute bottom-1 right-2 flex items-center gap-0.5 text-[10px] text-gray-500">
                            14:32
                            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                            </svg>
                          </span>
                        </div>
                      </motion.div>

                      {/* AI response - human-like */}
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%] shadow-sm">
                          <p className="text-[13px] text-gray-800">E aí, beleza! Amanhã tenho esses horários:</p>
                          <div className="flex flex-wrap gap-1.5 mt-1.5 mb-1">
                            {['09:00', '10:30', '14:00', '16:30'].map((time) => (
                              <span key={time} className="bg-gray-100 text-gray-700 text-[12px] px-2 py-0.5 rounded-full font-medium">
                                {time}
                              </span>
                            ))}
                          </div>
                          <p className="text-[13px] text-gray-800">Qual fica melhor pra você?</p>
                          <p className="text-[10px] text-gray-500 text-right mt-0.5">14:32</p>
                        </div>
                      </motion.div>

                      {/* Customer reply */}
                      <motion.div
                        className="flex justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 }}
                      >
                        <div className="bg-[#d9fdd3] rounded-lg rounded-tr-none px-2.5 py-1.5 max-w-[80%] shadow-sm relative">
                          <p className="text-[13px] text-gray-800 pr-12">10:30 com o Rafael</p>
                          <span className="absolute bottom-1 right-2 flex items-center gap-0.5 text-[10px] text-gray-500">
                            14:33
                            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                            </svg>
                          </span>
                        </div>
                      </motion.div>

                      {/* AI confirmation - plain text like real WhatsApp */}
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 }}
                      >
                        <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%] shadow-sm">
                          <div className="text-[13px] text-gray-800">
                            <p>Show, fechado com o Rafael! 🤙</p>
                            <p className="mt-2"><span className="font-semibold">Corte Degradê</span></p>
                            <p>📅 Amanhã (terça), 10:30</p>
                            <p>💰 R$ 45,00</p>
                            <p className="mt-2">Quer garantir? Antecipa via PIX e evita fila 👇</p>
                          </div>
                          <p className="text-[10px] text-gray-500 text-right mt-0.5">14:33</p>
                        </div>
                      </motion.div>

                      {/* PIX QR Code as image message */}
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.0 }}
                      >
                        <div className="bg-white rounded-lg rounded-tl-none p-1.5 max-w-[75%] shadow-sm">
                          {/* PIX payment card */}
                          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            {/* Header with PIX logo */}
                            <div className="bg-[#32bcad] text-white py-2 px-3 flex items-center gap-2">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.45 16.52l-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.52c-.34.34-.87.34-1.21 0l-.71-.71c-.34-.34-.34-.87 0-1.21l3.01-3.01c.11-.11.13-.24.13-.31s-.02-.2-.13-.31L6.88 7.96c-.34-.34-.34-.87 0-1.21l.71-.71c.34-.34.87-.34 1.21 0l3.01 3.01c.11.11.24.13.31.13s.2-.02.31-.13l3.01-3.01c.34-.34.87-.34 1.21 0l.71.71c.34.34.34.87 0 1.21l-3.01 3.01c-.11.11-.13.24-.13.31s.02.2.13.31l3.01 3.01c.34.34.34.87 0 1.21l-.71.71c-.34.34-.87.34-1.21 0z"/>
                              </svg>
                              <span className="text-[12px] font-semibold">PIX</span>
                            </div>

                            {/* QR Code */}
                            <div className="p-3 bg-white flex justify-center">
                              <div className="w-24 h-24 bg-white p-1">
                                <Image
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29 29'%3E%3Crect width='29' height='29' fill='white'/%3E%3Cpath d='M0 0h7v7H0zM8 0h1v1H8zM10 0h3v1h-3zM14 0h1v2h-1zM16 0h2v1h-2zM19 0h3v1h-3zM22 0h7v7h-7zM1 1v5h5V1zM23 1v5h5V1zM2 2h3v3H2zM24 2h3v3h-3zM8 2h1v1H8zM10 2h1v2h-1zM12 2h1v1h-1zM15 2h1v1h-1zM17 2h1v1h-1zM19 2h2v1h-2zM8 4h2v1H8zM12 4h3v1h-3zM16 4h1v3h-1zM18 4h1v1h-1zM20 4h1v2h-1zM9 5h1v1H9zM11 5h1v1h-1zM14 5h1v2h-1zM17 5h1v1h-1zM8 6h1v1H8zM10 6h1v2h-1zM12 6h2v1h-2zM18 6h2v1h-2zM0 8h1v1H0zM2 8h1v1H2zM4 8h2v1H4zM8 8h1v1H8zM13 8h1v2h-1zM15 8h1v1h-1zM17 8h4v1h-4zM22 8h1v1h-1zM24 8h2v1h-2zM27 8h2v1h-2zM1 9h1v1H1zM3 9h3v1H3zM9 9h1v1H9zM11 9h1v1h-1zM14 9h1v1h-1zM16 9h1v1h-1zM21 9h1v1h-1zM23 9h1v1h-1zM28 9h1v1h-1zM0 10h1v2H0zM2 10h2v1H2zM5 10h1v1H5zM8 10h2v1H8zM12 10h1v1h-1zM17 10h2v1h-2zM20 10h1v2h-1zM22 10h2v1h-2zM25 10h1v1h-1zM27 10h1v1h-1zM1 11h1v1H1zM4 11h1v1H4zM6 11h2v1H6zM10 11h3v1h-3zM14 11h2v1h-2zM18 11h1v1h-1zM21 11h1v1h-1zM23 11h1v2h-1zM26 11h1v1h-1zM28 11h1v1h-1zM2 12h1v1H2zM5 12h1v1H5zM8 12h1v1H8zM11 12h1v1h-1zM13 12h1v1h-1zM15 12h2v1h-2zM18 12h2v1h-2zM24 12h2v1h-2zM27 12h2v1h-2zM0 13h2v1H0zM3 13h2v1H3zM6 13h3v1H6zM10 13h1v1h-1zM12 13h1v2h-1zM14 13h3v1h-3zM19 13h1v1h-1zM22 13h1v1h-1zM25 13h1v1h-1zM1 14h1v1H1zM4 14h1v1H4zM8 14h3v1H8zM13 14h1v1h-1zM17 14h1v1h-1zM20 14h2v1h-2zM23 14h1v1h-1zM26 14h1v1h-1zM28 14h1v1h-1zM0 15h1v1H0zM2 15h1v1H2zM5 15h2v1H5zM9 15h2v1H9zM14 15h2v1h-2zM18 15h1v1h-1zM21 15h1v1h-1zM24 15h1v1h-1zM27 15h1v1h-1zM1 16h1v1H1zM3 16h1v1H3zM6 16h1v1H6zM8 16h1v1H8zM10 16h3v1h-3zM15 16h1v1h-1zM19 16h1v1h-1zM22 16h2v1h-2zM25 16h3v1h-3zM0 17h2v1H0zM4 17h1v1H4zM7 17h1v1H7zM11 17h1v1h-1zM14 17h1v1h-1zM17 17h1v1h-1zM20 17h1v1h-1zM23 17h1v1h-1zM26 17h1v1h-1zM28 17h1v1h-1zM2 18h1v1H2zM5 18h1v1H5zM8 18h2v1H8zM12 18h2v1h-2zM16 18h1v1h-1zM18 18h2v1h-2zM21 18h1v1h-1zM24 18h2v1h-2zM1 19h1v1H1zM3 19h2v1H3zM6 19h1v2H6zM9 19h1v1H9zM11 19h1v1h-1zM14 19h1v1h-1zM17 19h1v1h-1zM19 19h1v1h-1zM22 19h1v1h-1zM25 19h1v1h-1zM27 19h2v1h-2zM0 20h1v1H0zM4 20h1v1H4zM8 20h1v1H8zM10 20h1v1h-1zM13 20h2v1h-2zM16 20h2v1h-2zM20 20h1v1h-1zM23 20h1v1h-1zM26 20h1v1h-1zM28 20h1v1h-1zM8 21h2v1H8zM11 21h1v1h-1zM14 21h1v1h-1zM18 21h1v1h-1zM21 21h1v1h-1zM24 21h2v1h-2zM0 22h7v7H0zM9 22h1v1H9zM12 22h2v1h-2zM15 22h2v1h-2zM19 22h1v1h-1zM22 22h1v1h-1zM25 22h1v1h-1zM27 22h1v1h-1zM1 23v5h5v-5zM8 23h1v1H8zM11 23h1v1h-1zM14 23h1v1h-1zM17 23h1v1h-1zM20 23h1v2h-1zM23 23h1v1h-1zM26 23h2v1h-2zM2 24h3v3H2zM9 24h2v1H9zM13 24h1v1h-1zM16 24h1v1h-1zM18 24h1v1h-1zM21 24h2v1h-2zM24 24h1v1h-1zM28 24h1v1h-1zM8 25h1v1H8zM11 25h1v1h-1zM14 25h1v1h-1zM17 25h1v1h-1zM22 25h1v2h-1zM25 25h1v1h-1zM27 25h1v1h-1zM9 26h1v1H9zM12 26h2v1h-2zM15 26h1v1h-1zM19 26h2v1h-2zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h1v1h-1zM8 27h2v1H8zM11 27h1v1h-1zM14 27h1v1h-1zM17 27h1v1h-1zM20 27h1v1h-1zM23 27h1v1h-1zM25 27h3v1h-3zM9 28h1v1H9zM12 28h1v1h-1zM16 28h2v1h-2zM21 28h1v1h-1zM24 28h1v1h-1zM27 28h1v1h-1z' fill='black'/%3E%3C/svg%3E"
                                  alt="QR Code PIX"
                                  width={96}
                                  height={96}
                                  className="w-full h-full"
                                />
                              </div>
                            </div>

                            {/* Amount */}
                            <div className="text-center py-2 border-t border-gray-200">
                              <p className="text-[10px] text-gray-500">Valor</p>
                              <p className="text-[16px] font-bold text-gray-900">R$ 45,00</p>
                            </div>

                            {/* Copia e cola */}
                            <div className="bg-gray-100 p-2 border-t border-gray-200">
                              <p className="text-[9px] text-gray-500 mb-1">Copia e Cola:</p>
                              <p className="text-[8px] text-gray-600 font-mono break-all leading-tight">00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890</p>
                            </div>
                          </div>
                          <p className="text-[10px] text-gray-500 text-right mt-1">14:33</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Input bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#f0f0f0] px-2 py-2 flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-white rounded-full flex-1 px-3 py-2">
                        <Smile className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-400 text-[14px] flex-1">Mensagem</span>
                        <Paperclip className="w-5 h-5 text-gray-500" />
                      </div>
                      <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center">
                        <Mic className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect behind phone */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-primary/40 via-green-400/30 to-primary/40 rounded-full scale-110" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
