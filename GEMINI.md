---
trigger: always_on
---

# GEMINI.md - HubInvestor Project Rules

> Regras específicas do projeto HubInvestor que devem ser seguidas em todas as sessões.

---

## 📋 Regras do Projeto

### 1. Identidade da Marca
- **Nome oficial:** HubInvestor
- **Slogan:** Inteligência Financeira
- **Cor primária:** `#005BFF` (variável CSS `--primary`)
- **NUNCA** usar "Vestgrow" ou outras marcas

### 2. SEO e Novas Páginas

> 🔴 **OBRIGATÓRIO:** Sempre que uma nova página for criada, o agente `@seo-specialist` deve ser consultado.

**Checklist para novas páginas:**

- [ ] Adicionar `metadata` com `title` e `description`
- [ ] Adicionar `openGraph` com `title` e `description`
- [ ] Atualizar `sitemap.ts` se for uma página pública
- [ ] Verificar conformidade com SEO usando:
  ```bash
  python .agent\.agent\skills\seo-fundamentals\scripts\seo_checker.py ./web/src/app
  ```

**Padrão de título:**
```
"[Nome da Página] | HubInvestor"
```

**Exemplo de metadados:**
```typescript
export const metadata: Metadata = {
    title: "Calculadora de X | HubInvestor",
    description: "Descrição persuasiva com palavras-chave relevantes.",
    openGraph: {
        title: "Calculadora de X | HubInvestor",
        description: "Versão curta para compartilhamento.",
    },
};
```

### 3. Arquivos SEO

| Arquivo | Caminho | Descrição |
|---------|---------|-----------|
| `robots.ts` | `web/src/app/robots.ts` | Permissões para crawlers e IAs |
| `sitemap.ts` | `web/src/app/sitemap.ts` | Mapa do site dinâmico |

### 4. Design System

- **Padrão visual:** HubInvestor Calculator v2 (baseado em PRICE)
- **Purple Ban:** NUNCA usar cores roxas/violetas
- **Border-radius:** `2rem` para cards, `xl` para inputs
- **Botões:** `h-14` (56px) para touch targets

### 5. Mobile First

- Todos os componentes devem ser responsivos
- Touch targets mínimo: 44-48px
- Consultar `@mobile-developer` para validação mobile

### 6. Calculadoras

> 🔴 **OBRIGATÓRIO:** Toda calculadora criada DEVE estar presente em AMBOS os locais:

| Local | Arquivo | Função |
|-------|---------|--------|
| **Dashboard** | `web/src/app/calculadoras/page.tsx` | Lista interna para usuários logados |
| **Landing Page** | `web/src/app/lp/page.tsx` | Vitrine pública para SEO e conversão |

**Checklist para nova calculadora:**
- [ ] Criar componente em `web/src/components/calculadoras/`
- [ ] Exportar no `web/src/components/calculadoras/index.ts`
- [ ] Adicionar página em `web/src/app/calculadoras/[slug]/page.tsx`
- [ ] Adicionar ao array `calculadoras` em `/calculadoras/page.tsx` (Dashboard)
- [ ] Adicionar ao array `calculadoras` em `/lp/page.tsx` (LP)
- [ ] Registrar no mapeamento `calculadorasMap` em `/lp/[slug]/page.tsx`
- [ ] Atualizar `sitemap.ts` com o novo slug

---

## 🛠️ Deploy

### EasyPanel + Nixpacks
- Ver regras globais em `MEMORY[user_global]` para configuração de deploy
- Sempre usar `output: "standalone"` no `next.config.ts`

### Git (Repositório em /web)
- **Remote:** `Hubinvestor` (com 'i' minúsculo)
- **Diretório:** Todos os comandos git devem ser executados em `/web`
- **PowerShell:** Usar `;` ao invés de `&&` para encadear comandos

```powershell
# ✅ CORRETO
cd web; git add -A; git commit -m "msg"; git push Hubinvestor main

# ❌ ERRADO
git add -A && git commit -m "msg"  # && não funciona no PowerShell
git push HubInvestor main          # 'I' maiúsculo está errado
```

---

## 📁 Estrutura de Diretórios

```
HubInvestor/
├── .agent/             # Antigravity Kit
├── Documentos do Projeto/  # Documentação de negócio
└── web/                # Aplicação Next.js
    ├── src/app/        # Páginas e rotas
    ├── src/components/ # Componentes React
    └── src/lib/        # Funções e utilitários
```

---

## 🎯 Acessibilidade (PageSpeed)

> 🔴 **OBRIGATÓRIO:** Seguir estas regras para manter score 100 de Acessibilidade.

### Viewport
- **NUNCA** usar `user-scalable=no` ou `maximum-scale=1`
- Permitir zoom para usuários com baixa visão:
```typescript
export const viewport: Viewport = {
  themeColor: "#005BFF",
  width: "device-width",
  initialScale: 1,
  // NÃO adicionar maximumScale ou userScalable!
};
```

### aria-label em Botões
- **TODO botão com apenas ícone DEVE ter aria-label**
- Exemplos:
```tsx
// ❌ ERRADO
<button className="p-2"><Menu /></button>

// ✅ CORRETO
<button aria-label="Abrir menu" className="p-2"><Menu /></button>
```

### Contraste de Cores (Mínimo 4.5:1)
| Cor Antiga | Cor Correta | Uso |
|------------|-------------|-----|
| `text-slate-400` | `text-slate-500` | Textos secundários |
| `text-emerald-500` | `text-emerald-600/700` | Valores positivos |
| `text-red-500` | `text-red-600` | Valores negativos/erros |
| `text-blue-100/80` | `text-blue-100` | Texto sobre fundo azul |

---

## 🔒 Headers de Segurança (next.config.ts)

**Sempre incluir estes headers no `next.config.ts`:**

```typescript
async headers() {
  return [
    {
      source: "/:path*",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
      ],
    },
  ];
},
```

| Header | Proteção |
|--------|----------|
| X-Frame-Options | Clickjacking |
| X-Content-Type-Options | MIME sniffing |
| Referrer-Policy | Vazamento de informações |
| HSTS | Forçar HTTPS |

---

> **Lembre-se:** Qualidade > Velocidade. SEO e acessibilidade são prioridades.

