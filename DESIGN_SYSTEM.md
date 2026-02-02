# 📔 Design System: InvestGrow (Vestgrow)

Este documento define as regras visuais mandatórias para garantir que o HubInvestor mantenha uma estética premium, limpa e "tech-forward".

---

## 🎨 Paleta de Cores

| Nome | Valor Hex | Uso |
| :--- | :--- | :--- |
| **Primary Blue** | `#005BFF` | Ações principais, ícones ativos, marca. |
| **Primary Hover** | `#004ecc` | Estados de hover em botões primários. |
| **Background Light** | `#F8FAFC` | Fundo principal da aplicação (Slate-50). |
| **Background Dark** | `#0F172A` | Fundo principal no Dark Mode (Slate-900). |
| **Text Primary** | `#0F172A` | Títulos e textos com alto contraste. |
| **Text Secondary** | `#64748B` | Subtítulos e informações de apoio. |

---

## 🔡 Tipografia
- **Fonte Única**: `Inter` (Sans-serif moderna).
- **Configuração**: `--font-inter`.
- **Pesos**: 400 (Regular), 700 (Bold), 900 (Black - para números e ênfase giga).
- **Estilo**: Sem fontes serifadas. Foco em clareza técnica e legibilidade.

---

## 🏗️ Estrutura e Layout

### 1. DashboardLayout (Obrigatório)
Todas as páginas internas (calculadoras, dashboard, metas) **DEVEM** ser envolvidas pelo componente `<DashboardLayout />`.
- **Sidebar**: Fundo branco translúcido (`bg-white/80 backdrop-blur-xl`), borda lateral direita `slate-200`.
- **Header**: Barra de pesquisa integrada e perfil do usuário.

### 2. Cards e Containers
- **Bordas**: `rounded-[2rem]` (32px) para cards principais. `rounded-2xl` (16px) para inputs e botões internos.
- **Sombra**: `shadow-card` para elevação sutil. `shadow-premium` (com glow azul) para itens em destaque.
- **Espaçamento**: Padding padrão `p-8` para cards de dashboard.

---

## 📊 Gráficos e Visualização de Dados
- **Charts**: Usar `recharts` com `AreaChart`.
- **Stroke**: Azul primário (`#005BFF`) com largura `4px`.
- **Fill**: Usar a classe `chart-gradient` (definida em globals.css).
- **Tooltips**: Estilo customizado com fundo branco, bordas `2xl` e tipografia `tabular-nums`.

---

## 🌓 Dark Mode
- O projeto usa a classe `dark` no elemento `html`.
- Variações de cores Slate automáticas via variáveis CSS.

---

## 🚀 Diretrizes de UX
- **Micro-interações**: Hover em cards deve incluir `hover:-translate-y-1` e `transition-all`.
- **Iconografia**: Usar exclusivamente `lucide-react`.
- **Status**: Usar badges com `bg-primary/10` e `text-primary`.
