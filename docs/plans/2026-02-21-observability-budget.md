# Observabilidade, Alertas e Budget de Requests

## Budget operacional sugerido
- Edge Requests (30d): alvo inicial `<= 1.7M`.
- Concentração por região (`iad1`): alvo `<= 60%`.
- Taxa de erro APIs (`4xx+5xx`): `<= 3%`.
- 429 por endpoint: monitorar tendência diária.

## Alertas mínimos
1. Pico diário de Edge Requests > 120% da média dos últimos 7 dias.
2. `iad1` > 80% por 24h.
3. `/api/lead-capture` com 429 > 15% por 1h.
4. Queda de conversão de lead > 5% após mudanças de firewall.

## Checklist semanal
1. Comparar requests totais (`7d` e `30d`) antes/depois.
2. Revisar Top 20 user-agents e Top ASNs.
3. Revisar regras WAF que mais bloquearam/challenge.
4. Ajustar limites do rate limiter.
5. Revisar conversão e qualidade dos leads.

## Comandos úteis (local)
```bash
vercel whoami
vercel ls flowo-landing
vercel logs <deployment-url> --since=24h
```
