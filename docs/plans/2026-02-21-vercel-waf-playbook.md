# Playbook - WAF e Tráfego Abusivo (Vercel)

Objetivo: reduzir requests em Edge com impacto mínimo para usuários reais e SEO.

## 1) Baseline (antes de bloquear)
1. Coletar top `path`, `user-agent`, `ASN`, `country`, `status`.
2. Separar bots úteis (Googlebot, Bingbot) de scanners.
3. Definir limiar de abuso: exemplo `>120 req/min/IP` em rotas públicas.

## 2) Regras iniciais (modo monitor)
1. Criar regras WAF em monitor para:
- bursts de requests por IP
- user-agents suspeitos/repetitivos
- padrões de varredura (`/.env`, `/wp-admin`, etc.)
2. Rodar 24-48h e medir falso positivo.

## 3) Escalonamento controlado
1. Alterar para `challenge` em ofensores confirmados.
2. Após nova janela (24-48h), mover para `deny` em IP/ASN persistente.
3. Manter allowlist para bots legítimos de SEO.

## 4) Regras recomendadas
- `deny`: requests para paths de exploração comuns.
- `challenge`: UAs agressivos não-identificados.
- `rate-based`: limite por IP para `/api/lead-capture` e `/api/contact-form`.

## 5) Rollback rápido
1. Toda regra nova deve ter owner e horário.
2. Guardar snapshot de regras anteriores.
3. Se conversão cair >5%, rollback imediato das últimas regras.

## 6) Checklist semanal
- % de tráfego em `iad1`
- Requests totais Edge (7d e 30d)
- 429 por endpoint
- Conversão de lead e erros 4xx/5xx
