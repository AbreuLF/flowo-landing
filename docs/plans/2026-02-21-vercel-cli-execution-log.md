# Execução via Vercel CLI/API

Projeto: `flowo-landing` (`prj_EpxnwSuyCTa4d2FypLyW7q9RLDSl`)

## Ajustes aplicados
1. Região padrão de funções alterada para `gru1`:
```bash
vercel api /v9/projects/prj_EpxnwSuyCTa4d2FypLyW7q9RLDSl -X PATCH -F serverlessFunctionRegion=gru1
```

2. Firewall habilitado e regras adicionadas:
- `deny` em paths comuns de exploração (`/wp-admin`, `/.env`, `/.git`, etc.).
- `challenge` para user-agents automatizados/AI crawlers não essenciais
  (`curl`, `python-requests`, `wget`, `go-http-client`, `sqlmap`, `GPTBot`, `ClaudeBot`, `Bytespider`, etc.).

## Comando para validar config ativa
```bash
vercel api "/v1/security/firewall/config?projectId=prj_EpxnwSuyCTa4d2FypLyW7q9RLDSl&teamId=team_gJAQ98PaEOnXqmZPSmVevO0h"
```

## Observação de plano Hobby
- Limite de regras WAF detectado: `3`.
- Estratégia adotada: consolidar user-agents em regex para maximizar cobertura.
