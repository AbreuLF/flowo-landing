import { getSiteUrl } from "@/lib/site-url";

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400";

export function GET() {
  const siteUrl = getSiteUrl();
  const content = `# Flowo
> Plataforma de agendamento para barbearias com WhatsApp, IA, lembretes e PIX antecipado.

## Canonical website
- ${siteUrl}

## Core pages
- [Home](${siteUrl}/)
- [Precos](${siteUrl}/precos)
- [Recursos](${siteUrl}/recursos)
- [Casos de sucesso](${siteUrl}/casos-de-sucesso)

## Money pages
- [Sistema de agendamento para barbearia](${siteUrl}/sistema-agendamento-barbearia)
- [Agenda de barbearia no WhatsApp](${siteUrl}/agenda-barbearia-whatsapp)
- [Software para barbearia com PIX](${siteUrl}/software-barbearia-com-pix)

## Comparative pages
- [Flowo vs planilha](${siteUrl}/flowo-vs-planilha)
- [Flowo vs agenda manual](${siteUrl}/flowo-vs-agenda-manual)

## Guides hub
- [Guias para barbearias](${siteUrl}/recursos/guias)
- [Guia definitivo de agendamento](${siteUrl}/recursos/guias/guia-definitivo-agendamento)
- [Configurando WhatsApp com IA](${siteUrl}/recursos/guias/configurando-whatsapp)
- [Pagamentos com PIX](${siteUrl}/recursos/guias/pagamentos-pix)
- [Reducao de faltas](${siteUrl}/recursos/guias/reduzindo-faltas)
- [Aumentar ticket medio](${siteUrl}/recursos/guias/aumentar-ticket-medio)
- [Escala de equipe](${siteUrl}/recursos/guias/escala-equipe)
- [Fidelizacao de clientes](${siteUrl}/recursos/guias/fidelizacao-clientes)
- [Controle financeiro da barbearia](${siteUrl}/recursos/guias/controle-financeiro-barbearia)

## Media and lead magnets
- [Roteiros de Shorts e Reels](${siteUrl}/recursos/videos)
- [Materiais gratuitos](${siteUrl}/recursos/materiais)

## Support
- [Sobre](${siteUrl}/sobre)
- [Politica de privacidade](${siteUrl}/privacidade)
- [Termos de uso](${siteUrl}/termos)
- Contato: contato@flowo.com.br
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": CACHE_HEADER,
    },
  });
}
