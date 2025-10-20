export default function SchemaMarkup() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Flowo",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "97",
      "priceCurrency": "BRL",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://flowo.com.br/precos"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "219",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Sistema de agendamento para barbearias via WhatsApp com IA. Reduza faltas em 60%, gerencie barbeiros e aumente o faturamento da sua barbearia.",
    "screenshot": "https://flowo.com.br/how-it-works-demo.png",
    "featureList": [
      "Agendamento pelo WhatsApp",
      "Lembretes automáticos",
      "Gestão de múltiplos barbeiros",
      "Histórico de clientes",
      "Relatórios de faturamento",
      "IA para otimização de agenda"
    ],
    "softwareVersion": "2.0",
    "datePublished": "2024-01-15",
    "author": {
      "@type": "Organization",
      "name": "Flowo",
      "url": "https://flowo.com.br"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowo",
    "url": "https://flowo.com.br",
    "logo": "https://flowo.com.br/flowo-logo.svg",
    "description": "Software de agendamento para barbearias via WhatsApp com inteligência artificial",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://instagram.com/flowo",
      "https://facebook.com/flowo",
      "https://linkedin.com/company/flowo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "availableLanguage": ["Portuguese"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona o agendamento pelo WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O cliente manda mensagem no WhatsApp da sua barbearia. Nossa IA entende a solicitação, mostra horários disponíveis e serviços, e o cliente escolhe o melhor horário. Tudo automático, sem você precisar atender durante o corte."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa o Flowo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temos 3 planos: Solo (R$ 97/mês para até 150 cortes), Barbearia (R$ 197/mês com cortes ilimitados e até 5 barbeiros), e Franquia (preço personalizado para múltiplas unidades). Todos os planos incluem 14 dias de teste grátis sem cartão de crédito."
        }
      },
      {
        "@type": "Question",
        "name": "Como o Flowo reduz faltas de clientes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O sistema envia lembretes automáticos via WhatsApp 1 dia antes e 1 hora antes do horário marcado. Isso reduz esquecimentos e aumenta a taxa de comparecimento em até 60%, economizando cerca de R$ 2.100/mês em horários perdidos."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso de conhecimento técnico para usar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não! O Flowo foi feito especialmente para barbeiros. A configuração leva apenas 5 minutos e nossa equipe te ajuda em todo o processo. Se você sabe usar WhatsApp, você sabe usar Flowo."
        }
      },
      {
        "@type": "Question",
        "name": "Posso cancelar quando quiser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento sem multas ou taxas extras. Oferecemos 14 dias de teste grátis para você experimentar sem compromisso."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sistema de Agendamento para Barbearias",
    "provider": {
      "@type": "Organization",
      "name": "Flowo"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos Flowo",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Solo"
          },
          "price": "97",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano Barbearia"
          },
          "price": "197",
          "priceCurrency": "BRL"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "219"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
