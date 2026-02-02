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
            {/* Hero Section */}
            <header className="pt-8 pb-12 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,91,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/10">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        100% Gratuito e Seguro
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                        Domine suas Finanças com Nossas<br />
                        <span className="text-primary italic">Calculadoras Gratuitas</span>
                    </h1>

                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                        Ferramentas de análise profissional para potencializar seus resultados. Simule investimentos, planeje sua aposentadoria e alcance a liberdade financeira.
                    </p>

                    {/* Barra de Busca Centralizada */}
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Pesquisar ferramenta (ex: Juros Compostos, Aposentadoria...)"
                            className="block w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-4 focus:ring-primary/10 focus:border-primary/40 text-slate-900 dark:text-white transition-all text-lg font-medium"
                        />
                    </div>
                </div>
            </header>

            {/* Filtros e Categorias */}
            <section className="max-w-7xl mx-auto px-4 mb-16">
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <button className="px-6 py-2 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Todas</button>
                    {["Investimentos", "Planejamento", "Metas", "Análise", "Pessoal"].map((cat) => (
                        <button key={cat} className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all">
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grade de Calculadoras */}
            <main className="max-w-7xl mx-auto px-4 mb-32">
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
                                    "group bg-white dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 relative text-left overflow-hidden flex flex-col h-full",
                                    isAtiva
                                        ? "hover:border-primary/30 hover:shadow-premium hover:-translate-y-1 cursor-pointer"
                                        : "opacity-60 cursor-not-allowed"
                                )}
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                                        isAtiva
                                            ? "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-3 shadow-sm"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                    )}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    {calc.popular && isAtiva && (
                                        <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border border-emerald-500/10 animate-pulse">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{calc.categoria}</p>
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                                        {calc.nome}
                                    </h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                                        {calc.descricao}
                                    </p>
                                </div>

                                <div className={cn(
                                    "pt-6 border-t border-slate-50 dark:border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest transition-all",
                                    isAtiva ? "text-primary group-hover:gap-2" : "text-slate-300"
                                )}>
                                    <span>{isAtiva ? "Simular Agora" : "Em Breve"}</span>
                                    <ArrowUpRight className={cn("w-4 h-4 transition-transform duration-500", isAtiva && "group-hover:translate-x-1 group-hover:-translate-y-1")} />
                                </div>

                                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </Wrapper>
                        );
                    })}
                </div>
            </main>

            {/* Seção Como Funciona */}
            <section className="bg-white dark:bg-slate-900/40 py-32 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white">Como Funciona</h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Três passos simples para dominar suas finanças.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        {[
                            { step: "01", title: "Escolha a Ferramenta", desc: "Selecione entre dezenas de simuladores específicos para sua necessidade atual." },
                            { step: "02", title: "Insira seus Dados", desc: "Preencha com seus valores, taxas e prazos. Nossa inteligência cuida dos cálculos complexos." },
                            { step: "03", title: "Analise e Planeje", desc: "Visualize gráficos e tabelas detalhadas para tomar as melhores decisões de investimento." }
                        ].map((item, idx) => (
                            <div key={idx} className="group flex flex-col items-center">
                                <div className="w-24 h-24 bg-primary/5 dark:bg-primary/10 text-primary rounded-[2.5rem] flex items-center justify-center mb-8 text-3xl font-black group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-premium">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Customizado para LP (Baseado no Mockup) */}
            <footer className="bg-slate-950 text-white pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <span className="text-2xl font-black tracking-tighter italic">HubInvestor</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                Democratizando o acesso a ferramentas financeiras de elite para todos os brasileiros. Inteligência financeira ao seu alcance.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-8">Plataforma</h4>
                            <ul className="space-y-4 text-sm font-medium text-slate-400">
                                <li><Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">Dashboard</Link></li>
                                <li><Link href="/investimentos" className="hover:text-primary transition-colors flex items-center gap-2">Investimentos</Link></li>
                                <li><Link href="/calculadoras" className="hover:text-primary transition-colors flex items-center gap-2">Calculadoras</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-8">Legal</h4>
                            <ul className="space-y-4 text-sm font-medium text-slate-400">
                                <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-8">Conecte-se</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110">
                                    <TrendingUp className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110">
                                    <Target className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <p>© 2024 HUBINVESTOR HUB. TODOS OS DIREITOS RESERVADOS.</p>
                        <div className="flex gap-8">
                            <Link href="/termos" className="hover:text-primary transition-colors">TERMOS</Link>
                            <Link href="/privacidade" className="hover:text-primary transition-colors">PRIVACIDADE</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </DashboardLayout>
    );
}

