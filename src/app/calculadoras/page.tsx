import { Metadata } from "next";
import Link from "next/link";
import {
    Calculator,
    TrendingUp,
    Wallet,
    Target,
    PiggyBank,
    Shield,
    BarChart3,
    Receipt,
    Home as HomeIcon,
    ChevronRight,
    Search,
    ArrowUpRight
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Calculadoras Financeiras Gratuitas | HubInvestor - Ferramentas de Precisão",
    description: "Acesse as melhores calculadoras financeiras do Brasil. Simuladores de Juros Compostos, Aposentadoria, Renda Passiva e muito mais. Gratuito e profissional.",
    openGraph: {
        title: "Calculadoras Financeiras Gratuitas | HubInvestor",
        description: "Mais de 15 ferramentas de precisão para potencializar seus investimentos e planejar seu futuro.",
    },
};

import { Building2, Landmark, Wallet as WalletIcon } from "lucide-react";

const calculadoras = [
    {
        slug: "juros-compostos",
        nome: "Juros Compostos",
        descricao: "Simule a força do tempo no seu patrimônio.",
        icon: TrendingUp,
        categoria: "Investimentos",
        popular: true,
    },
    {
        slug: "juros-simples",
        nome: "Juros Simples",
        descricao: "Cálculo básico de juros sobre capital.",
        icon: Calculator,
        categoria: "Investimentos",
    },
    {
        slug: "aportes-mensais",
        nome: "Aportes Mensais",
        descricao: "Calcule quanto poupar para seu objetivo.",
        icon: Wallet,
        categoria: "Investimentos",
    },
    {
        slug: "renda-passiva",
        nome: "Renda Passiva",
        descricao: "Projeção de saques mensais recorrentes.",
        icon: PiggyBank,
        categoria: "Planejamento",
    },
    {
        slug: "independencia-financeira",
        nome: "Independência Financeira",
        descricao: "Otimize seu caminho para o FIRE.",
        icon: Shield,
        categoria: "Metas",
    },
    {
        slug: "aposentadoria",
        nome: "Aposentadoria",
        descricao: "Planeje sua liberdade financeira futura.",
        icon: Target,
        categoria: "Metas",
    },
    {
        slug: "roi",
        nome: "ROI",
        descricao: "Retorno sobre investimento percentual.",
        icon: Target,
        categoria: "Análise",
    },
    {
        slug: "renda-fixa",
        nome: "Renda Fixa (CDB/LCI/LCA)",
        descricao: "Simule rendimentos em renda fixa.",
        icon: Landmark,
        categoria: "Investimentos",
        popular: true,
    },
    {
        slug: "salario-liquido",
        nome: "Salário Líquido CLT",
        descricao: "Calcule INSS e IRRF do seu salário.",
        icon: WalletIcon,
        categoria: "Pessoal",
        popular: true,
    },
    {
        slug: "financiamento-price",
        nome: "Tabela PRICE",
        descricao: "Financiamento com parcelas fixas.",
        icon: Building2,
        categoria: "Financiamento",
    },
    {
        slug: "financiamento-sac",
        nome: "Tabela SAC",
        descricao: "Parcelas decrescentes, menos juros.",
        icon: Building2,
        categoria: "Financiamento",
    },
    {
        slug: "imposto-renda",
        nome: "IR sobre Investimentos",
        descricao: "Calcule o imposto com tabela regressiva.",
        icon: Receipt,
        categoria: "Tributação",
    },
    {
        slug: "reserva-emergencia",
        nome: "Reserva de Emergência",
        descricao: "Segurança para imprevistos e crises.",
        icon: Shield,
        categoria: "Segurança",
    },
    {
        slug: "comparador-indices",
        nome: "Comparador CDI/IPCA",
        descricao: "Analise rendimentos reais vs inflação.",
        icon: BarChart3,
        categoria: "Investimentos",
    },
];

export default function CalculadorasPage() {
    return (
        <DashboardLayout>
            <div className="p-6 md:p-10">
                <header className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Calculadoras</h1>
                            <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-1">
                                Ferramentas de precisão para suas decisões financeiras.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl border border-blue-100 dark:border-primary/20">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                            Simuladores Profissionais
                        </div>
                    </div>

                    {/* Barra de Busca Simplificada */}
                    <div className="relative max-w-2xl group">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-slate-500 dark:text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar ferramenta..."
                            className="block w-full pl-14 pr-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary/40 text-slate-900 dark:text-white transition-all text-base font-medium"
                        />
                    </div>
                </header>

                {/* Filtros e Categorias */}
                <section className="mb-12">
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap scrollbar-hide">
                        <button className="shrink-0 px-5 sm:px-8 py-3 min-h-[44px] rounded-full bg-primary text-white text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Todas</button>
                        {["Investimentos", "Planejamento", "Metas", "Análise", "Pessoal"].map((cat) => (
                            <button key={cat} className="shrink-0 px-5 sm:px-8 py-3 min-h-[44px] rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500 dark:text-slate-400 text-sm font-black uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all whitespace-nowrap">
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Grade de Calculadoras */}
                <main className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {calculadoras.map((calc) => {
                            const Icon = calc.icon;
                            const isAtiva = !('emBreve' in calc && calc.emBreve);
                            const Wrapper = isAtiva ? Link : "div";

                            return (
                                <Wrapper
                                    key={calc.slug}
                                    href={isAtiva ? `/calculadoras/${calc.slug}` : "#"}
                                    className={cn(
                                        "group bg-white dark:bg-slate-900/60 p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 relative text-left overflow-hidden flex flex-col h-full",
                                        isAtiva
                                            ? "hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-2 cursor-pointer"
                                            : "opacity-60 cursor-not-allowed"
                                    )}
                                >
                                    <div className="flex items-start justify-between mb-5 sm:mb-8">
                                        <div className={cn(
                                            "w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                                            isAtiva
                                                ? "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-3 shadow-sm"
                                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                                        )}>
                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                        </div>
                                        {calc.popular && isAtiva && (
                                            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-emerald-500/10">
                                                Popular
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5 sm:mb-2">{calc.categoria}</p>
                                        <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 sm:mb-4 group-hover:text-primary transition-colors tracking-tight">
                                            {calc.nome}
                                        </h2>
                                        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-5 sm:mb-8">
                                            {calc.descricao}
                                        </p>
                                    </div>

                                    <div className={cn(
                                        "pt-4 sm:pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-black uppercase tracking-widest transition-all min-h-[44px]",
                                        isAtiva ? "text-primary group-hover:gap-2" : "text-slate-300"
                                    )}>
                                        <span>{isAtiva ? "Abrir Ferramenta" : "Em Breve"}</span>
                                        <ArrowUpRight className={cn("w-5 h-5 transition-transform duration-500", isAtiva && "group-hover:translate-x-1 group-hover:-translate-y-1")} />
                                    </div>

                                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </Wrapper>
                            );
                        })}
                    </div>
                </main>
            </div>
        </DashboardLayout>
    );
}

