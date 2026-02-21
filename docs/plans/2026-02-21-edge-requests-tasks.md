# Tasks de Execução - Edge Requests (flowo-landing)

## Sprint Atual (redução imediata de custo)
- [x] **T1.1** Remover ícones dinâmicos em Edge (`/icon`, `/apple-icon`).
- [x] **T1.2** Substituir por assets estáticos (`app/icon.png`, `app/apple-icon.png`).
- [x] **T1.3** Reduzir prefetch global em links de navegação.
- [x] **T1.4** Aplicar cache headers em `/downloads/*`, `/images/*` e logos.
- [x] **T1.5** Desligar Sentry tunnel por padrão (ativação só via env flag).

## Em Execução (anti-abuso de endpoints)
- [x] **T2.1** Criar utilitário para captura de IP real (`lib/request-ip.ts`).
- [x] **T2.2** Criar rate limiter em memória (`lib/rate-limit.ts`).
- [x] **T2.3** Integrar rate limit no `/api/lead-capture`.
- [x] **T2.4** Integrar rate limit no `/api/contact-form`.
- [x] **T2.5** Adicionar honeypot nos formulários clientes (`company` hidden field).
- [ ] **T2.6** Ajustar limites por rota com base no tráfego real (após 48h).

## Próximo Lote (alto impacto fora do código)
- [ ] **T3.1** Criar regras WAF em modo monitor na Vercel.
- [ ] **T3.2** Aplicar challenge para UAs/ASNs/IPs com padrão de abuso.
- [ ] **T3.3** Aplicar deny para ofensores confirmados após janela de monitoramento.
- [ ] **T3.4** Definir allowlist explícita para bots de SEO essenciais.

## Observabilidade e Governança
- [ ] **T4.1** Consolidar baseline por rota + UA + ASN (`D-2` vs `D+2` deploy).
- [ ] **T4.2** Criar alerta de pico em `iad1` e alerta de 429 nas APIs.
- [ ] **T4.3** Revisão semanal com relatório de redução (%) e impacto em leads.

## Critério de Sucesso (30 dias)
- [ ] **S1** Redução de 40-60% nos Edge Requests totais.
- [ ] **S2** Redução da concentração de `iad1` para abaixo de 60%.
- [ ] **S3** Sem queda >5% na conversão de lead.
