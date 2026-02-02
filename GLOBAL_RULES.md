# 📜 Regras Globais do Projeto (HubInvestor)

Este arquivo contém diretrizes mandatórias que devem ser seguidas em todos os ciclos de desenvolvimento deste projeto.

---

## 📦 Gestão de Repositórios (Git/GitHub)
- **Visibilidade**: Todo novo repositório criado para este projeto **DEVE** ser configurado como **PÚBLICO**.
- **Justificativa**: Facilitar o deploy automatizado via EasyPanel/Nixpacks na infraestrutura Hostinger sem necessidade de tokens complexos de repositório privado.

---

## 🌐 DNS e Domínios (Cloudflare)
Todos os domínios deste projeto **DEVEM** ser gerenciados via **Cloudflare**.

### Configuração Padrão:
1. **Nameservers**: Alterar os nameservers do domínio na Hostinger para os do Cloudflare.
2. **Registros A**: Apontar para o IP da VPS Hostinger (`195.200.4.198`).

| Domínio | Tipo | Nome | Conteúdo | Proxy |
|---------|------|------|----------|-------|
| hubinvestor.com.br | A | `@` | `195.200.4.198` | ✅ Proxied |
| hubinvestor.com.br | A | `www` | `195.200.4.198` | ✅ Proxied |
| hubinvestor.com.br | A | `app` | `195.200.4.198` | ✅ Proxied |

### SSL/TLS (Cloudflare):
- **Modo**: Full (strict)
- **Always Use HTTPS**: Ativado

---

## 🎨 Design e UI
- Seguir rigorosamente o guia em `DESIGN_SYSTEM.md`.
- Priorizar a identidade **InvestGrow** (Azul #005BFF).

---

## 🧹 Manutenção
- Seguir os comandos de limpeza global definidos na memória do usuário.
