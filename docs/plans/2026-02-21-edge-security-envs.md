# Variáveis de Ambiente - Segurança e Redução de Custo

## Turnstile (Cloudflare)
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: chave pública usada nos formulários.
- `TURNSTILE_SECRET_KEY`: chave privada para validação server-side.

Sem `TURNSTILE_SECRET_KEY`, a validação é ignorada (modo compatibilidade).

## Upstash Redis (Rate Limit distribuído)
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Sem essas variáveis, a aplicação usa fallback local em memória.

## Sentry Tunnel (opcional)
- `SENTRY_TUNNEL_ROUTE=1` habilita `/monitoring`.
- Padrão recomendado para custo: desabilitado.
