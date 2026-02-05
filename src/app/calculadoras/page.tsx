import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Calculadoras Financeiras Gratuitas | HubInvestor - Ferramentas de Precisão",
    description: "Acesse as melhores calculadoras financeiras do Brasil. Simuladores de Juros Compostos, Aposentadoria, Renda Passiva e muito mais. Gratuito e profissional.",
    openGraph: {
        title: "Calculadoras Financeiras Gratuitas | HubInvestor",
        description: "Mais de 15 ferramentas de precisão para potencializar seus investimentos e planejar seu futuro.",
    },
};
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
    ArrowUpRight,
    ArrowRight,
    Building2,
    Landmark,
    TrendingDown,
    MoreHorizontal,
    Rocket
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { cn } from "@/lib/utils";

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
        icon: Wallet,
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
            <div className="p-5 sm:p-10">
                <header className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 text-left">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Ecossistema</span>
                            </div>
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                                Ferramentas <span className="text-primary italic">Inteligentes</span>
                            </h1>
                            <p className="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed">
                                Simuladores de alta precisão para embasar suas decisões financeiras com dados, não suposições.
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center gap-4 p-2 bg-card border border-border rounded-[2rem] shadow-premium">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-card bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                                        UA
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-card bg-primary flex items-center justify-center text-[10px] font-black text-background">
                                    +5k
                                </div>
                            </div>
                            <div className="pr-4">
                                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Destaque</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Usuários ativos hoje</p>
                            </div>
                        </div>
                    </div>

                    {/* Busca Modernizada */}
                    <div className="relative max-w-3xl group mx-auto md:mx-0">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="w-6 h-6 text-slate-500 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Qual ferramenta você precisa agora?"
                            className="block w-full h-16 pl-16 pr-8 bg-card border border-border rounded-2xl shadow-premium focus:ring-4 focus:ring-primary/10 focus:border-primary/40 text-white transition-all text-lg placeholder:text-slate-600 font-medium"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:block">
                            <kbd className="px-3 py-1.5 bg-background border border-border rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-widest">Shift + S</kbd>
                        </div>
                    </div>
                </header>

                {/* Filtros e Categorias Premium */}
                <section className="mb-16">
                    <div className="flex gap-3 overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap no-scrollbar">
                        <button className="shrink-0 min-h-[56px] px-8 rounded-2xl bg-primary text-background text-[10px] font-black uppercase tracking-widest shadow-premium hover:scale-105 transition-all">Todas</button>
                        {["Investimentos", "Planejamento", "Metas", "Análise", "Pessoal"].map((cat) => (
                            <button key={cat} className="shrink-0 min-h-[56px] px-8 rounded-2xl bg-card border border-border text-slate-500 text-[10px] font-black uppercase tracking-widest hover:border-primary/40 hover:text-white transition-all whitespace-nowrap">
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Grade de Calculadoras Refinada */}
                <main className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {calculadoras.map((calc) => {
                            const Icon = calc.icon;
                            const isAtiva = !('emBreve' in calc && calc.emBreve);
                            const Wrapper = isAtiva ? Link : "div";

                            return (
                                <Wrapper
                                    key={calc.slug}
                                    href={isAtiva ? `/calculadoras/${calc.slug}` : "#"}
                                    className={cn(
                                        "group bg-card p-7 sm:p-10 rounded-[2.5rem] border border-border shadow-card transition-all duration-500 relative text-left overflow-hidden flex flex-col h-full",
                                        isAtiva
                                            ? "hover:shadow-premium hover:border-primary/30 hover:-translate-y-2 cursor-pointer"
                                            : "opacity-60 cursor-not-allowed"
                                    )}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all duration-700"></div>

                                    <div className="flex items-start justify-between mb-10 relative z-10">
                                        <div className={cn(
                                            "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                                            isAtiva
                                                ? "bg-background text-primary group-hover:rotate-3 shadow-premium border border-border"
                                                : "bg-background/50 text-slate-600"
                                        )}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        {calc.popular && isAtiva && (
                                            <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border border-primary/20">
                                                Destaque
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex-1 relative z-10">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">{calc.categoria}</p>
                                        <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                            {calc.nome}
                                        </h2>
                                        <p className="text-slate-500 font-medium leading-relaxed mb-10">
                                            {calc.descricao}
                                        </p>
                                    </div>

                                    <div className={cn(
                                        "pt-8 border-t border-border flex items-center justify-between text-[10px] font-black uppercase tracking-widest transition-all min-h-[44px] relative z-10",
                                        isAtiva ? "text-primary group-hover:gap-2" : "text-slate-600"
                                    )}>
                                        <span>{isAtiva ? "Simular Agora" : "Lançamento em Breve"}</span>
                                        <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                                            <ArrowRight className="w-5 h-5 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </Wrapper>
                            );
                        })}
                    </div>
                </main>
            </div>
        </DashboardLayout>
    );
}

