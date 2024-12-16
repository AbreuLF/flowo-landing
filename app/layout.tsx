import type { Metadata } from "next"
import { Inter, Outfit } from 'next/font/google'
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: "Flowo - Agendamento Inteligente com IA",
  description: "Simplifique seu agendamento com ferramentas alimentadas por IA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

