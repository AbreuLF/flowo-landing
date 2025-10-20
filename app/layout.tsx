import type { Metadata } from "next"
import { Poppins, Lora } from 'next/font/google'
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const lora = Lora({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: "Sistema de Agendamento para Barbearia | WhatsApp + IA - Flowo",
  description: "Software de agendamento via WhatsApp para barbearias. Reduza faltas em 60%, gerencie barbeiros e aumente faturamento. Teste grátis 14 dias sem cartão.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${lora.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

