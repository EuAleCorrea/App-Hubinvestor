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
    title: "Calculadoras | Vestgrow",
    description: "Ferramentas financeiras de precisão para seu portfólio.",
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
            <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 text-left">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Calculadoras Financeiras</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
                        Ferramentas de análise para potencializar seus resultados.
                    </p>
                </div>

                <div className="relative group min-w-[300px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 transition-colors group-focus-within:text-primary" />
                    <input
                        className="w-full pl-11 pr-5 py-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm focus:ring-primary focus:border-primary text-sm transition-all"
                        placeholder="Pesquisar ferramenta..."
                        type="text"
                    />
                </div>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {calculadoras.map((calc) => {
                    const Icon = calc.icon;
                    const isAtiva = !('emBreve' in calc && calc.emBreve);
                    const Wrapper = isAtiva ? Link : "div";

                    return (
                        <Wrapper
                            key={calc.slug}
                            href={isAtiva ? `/calculadoras/${calc.slug}` : "#"}
                            className={cn(
                                "group bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card transition-all duration-300 relative text-left overflow-hidden flex flex-col",
                                isAtiva
                                    ? "hover:border-primary/30 hover:shadow-premium cursor-pointer"
                                    : "opacity-60 cursor-not-allowed"
                            )}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors",
                                    isAtiva
                                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                )}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                {calc.popular && isAtiva && (
                                    <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border border-primary/20">
                                        Popular
                                    </span>
                                )}
                                {!isAtiva && (
                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl">
                                        Em breve
                                    </span>
                                )}
                            </div>

                            <div className="flex-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{calc.categoria}</p>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    {calc.nome}
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                    {calc.descricao}
                                </p>
                            </div>

                            <div className={cn(
                                "mt-6 pt-5 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between text-xs font-black uppercase tracking-widest transition-all",
                                isAtiva ? "text-primary opacity-100" : "text-slate-300 opacity-50"
                            )}>
                                {isAtiva ? "Acessar Simulador" : "Não Disponível"}
                                <ArrowUpRight className={cn("w-4 h-4 transition-transform", isAtiva && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5")} />
                            </div>

                            {/* Efito de fundo decorativo */}
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Wrapper>
                    );
                })}
            </div>

            {/* CTA Final */}
            <div className="mt-12 bg-slate-900 dark:bg-primary p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden text-left">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Sugira uma nova ferramenta</h3>
                        <p className="text-slate-400 dark:text-blue-100 text-base max-w-lg">Sua necessidade pode ser a próxima funcionalidade da nossa plataforma.</p>
                    </div>
                    <button className="bg-primary dark:bg-white text-white dark:text-primary px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                        Enviar Sugestão
                    </button>
                </div>
                <Calculator className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 -rotate-12" />
            </div>
        </DashboardLayout>
    );
}
