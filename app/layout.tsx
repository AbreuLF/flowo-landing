import type { Metadata } from "next"
import { Suspense } from "react"
import { Poppins, Lora } from 'next/font/google'
import "./globals.css"
import { SegmentProvider } from "@/providers/segment-provider"
import { CookieBanner } from "@/components/cookie-banner"
import { ConsentInitializer } from "@/components/consent-initializer"

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
  metadataBase: new URL('https://flowo.com.br'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Sistema de Agendamento para Barbearia | WhatsApp + IA - Flowo',
    template: '%s | Flowo',
  },
  description: "Software de agendamento via WhatsApp para barbearias. Reduza faltas, gerencie barbeiros e aumente faturamento. Teste grátis 14 dias sem cartão.",
  keywords: ['agendamento barbearia', 'sistema barbearia', 'whatsapp barbearia', 'agenda barbearia', 'gestão barbearia', 'software barbearia', 'lembrete agendamento', 'reduzir faltas barbearia'],
  openGraph: {
    title: 'Flowo | Sistema de Agendamento para Barbearia via WhatsApp',
    description:
      'Automatize agendamento, confirmação e lembretes no WhatsApp para reduzir faltas e aumentar faturamento.',
    url: 'https://flowo.com.br',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Flowo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flowo - Sistema de Agendamento para Barbearia via WhatsApp com IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowo | Sistema de Agendamento para Barbearia',
    description:
      'Agendamento no WhatsApp com IA, lembretes automáticos e PIX antecipado.',
    creator: '@flowoapp',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${lora.variable}`}>
      <head>
        {/* Google Consent Mode v2 - Initialize BEFORE any tracking scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'granted',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Flowo',
              url: 'https://flowo.com.br',
              logo: 'https://flowo.com.br/flowo-logo.svg',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  email: 'contato@flowo.com.br',
                  availableLanguage: ['pt-BR'],
                },
              ],
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Flowo',
              url: 'https://flowo.com.br',
              inLanguage: 'pt-BR',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://flowo.com.br/recursos/guias',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <ConsentInitializer />
        <Suspense fallback={null}>
          <SegmentProvider writeKey={process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY}>
            {children}
          </SegmentProvider>
        </Suspense>
        <CookieBanner />
      </body>
    </html>
  )
}
