"use client";

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
    Search,
    ArrowUpRight,
    Menu,
    X,
    Building2,
    Landmark,
    Wallet as WalletIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const calculadoras = [
    {
        slug: "juros-compostos",
        nome: "Juros Compostos",
        descricao: "Simule a força do tempo no seu patrimônio e visualize o crescimento exponencial.",
        icon: TrendingUp,
        categoria: "Investimentos",
        popular: true,
    },
    {
        slug: "juros-simples",
        nome: "Juros Simples",
        descricao: "Cálculo básico de juros sobre o capital inicial para operações de curto prazo.",
        icon: Calculator,
        categoria: "Investimentos",
    },
    {
        slug: "aportes-mensais",
        nome: "Aportes Mensais",
        descricao: "Calcule quanto poupar mensalmente para atingir seu objetivo financeiro no prazo desejado.",
        icon: Wallet,
        categoria: "Investimentos",
    },
    {
        slug: "renda-passiva",
        nome: "Renda Passiva",
        descricao: "Projeção de saques mensais recorrentes para manter seu padrão de vida desejado.",
        icon: PiggyBank,
        categoria: "Planejamento",
    },
    {
        slug: "independencia-financeira",
        nome: "Independência Financeira",
        descricao: "Otimize seu caminho para o FIRE e saiba quando você poderá parar de trabalhar.",
        icon: Shield,
        categoria: "Metas",
    },
    {
        slug: "aposentadoria",
        nome: "Aposentadoria",
        descricao: "Planeje sua liberdade financeira futura considerando inflação e expectativa de vida.",
        icon: Target,
        categoria: "Metas",
    },
    {
        slug: "renda-fixa",
        nome: "Renda Fixa (CDB/LCI/LCA)",
        descricao: "Simule rendimentos em renda fixa com diferentes taxas e prazos.",
        icon: Landmark,
        categoria: "Investimentos",
        popular: true,
    },
    {
        slug: "salario-liquido",
        nome: "Salário Líquido CLT",
        descricao: "Calcule INSS e IRRF do seu salário bruto e descubra o valor líquido.",
        icon: WalletIcon,
        categoria: "Pessoal",
        popular: true,
    },
    {
        slug: "financiamento-price",
        nome: "Tabela PRICE",
        descricao: "Financiamento com parcelas fixas para imóveis e veículos.",
        icon: Building2,
        categoria: "Financiamento",
    },
];

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            {/* Navbar Pública */}
            <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Wallet className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">HubInvestor</span>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#ferramentas" className="text-sm font-semibold hover:text-primary transition-colors">Ferramentas</a>
                            <a href="#como-funciona" className="text-sm font-semibold hover:text-primary transition-colors">Como Funciona</a>
                            <Link href="/" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-2xl font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
                                Acessar App
                            </Link>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 space-y-4">
                        <a href="#ferramentas" className="block text-sm font-semibold hover:text-primary">Ferramentas</a>
                        <a href="#como-funciona" className="block text-sm font-semibold hover:text-primary">Como Funciona</a>
                        <Link href="/" className="block bg-primary text-white text-center px-6 py-3 rounded-2xl font-bold text-sm">
                            Acessar App
                        </Link>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <header className="pt-16 pb-20 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,91,255,0.08)_0%,transparent_60%)] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-[11px] font-black uppercase tracking-widest mb-10 border border-primary/20 shadow-sm">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        100% Gratuito e Seguro
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-slate-900 dark:text-white leading-[1.1] [word-spacing:0.15em]">
                        Domine suas Finanças<br />com Nossas
                        <span className="text-primary block md:inline"> Calculadoras</span>
                    </h1>

                    <p className="text-xl text-slate-500 dark:text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-14">
                        Ferramentas de análise profissional para potencializar seus resultados. Simule investimentos, planeje sua aposentadoria e alcance a liberdade financeira.
                    </p>

                    {/* Barra de Busca */}
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-slate-500 dark:text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Pesquisar ferramenta..."
                            className="block w-full pl-16 pr-8 py-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2rem] shadow-2xl shadow-slate-200/60 dark:shadow-none focus:ring-4 focus:ring-primary/10 focus:border-primary/40 text-slate-900 dark:text-white transition-all text-lg font-medium"
                        />
                    </div>
                </div>
            </header>

            {/* Filtros */}
            <section className="max-w-7xl mx-auto px-4 mb-16" id="ferramentas">
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="px-8 py-3 rounded-full bg-primary text-white text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Todas</button>
                    {["Investimentos", "Planejamento", "Metas", "Pessoal"].map((cat) => (
                        <button key={cat} className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-500 dark:text-slate-400 text-sm font-black uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all">
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
                        return (
                            <Link
                                key={calc.slug}
                                href={`/lp/${calc.slug}`}
                                className="group bg-white dark:bg-slate-900/60 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative text-left overflow-hidden flex flex-col h-full hover:border-primary/30 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-3 shadow-sm">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    {calc.popular && (
                                        <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl border border-emerald-500/10">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">{calc.categoria}</p>
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                                        {calc.nome}
                                    </h2>
                                    <p className="text-base text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                                        {calc.descricao}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-black uppercase tracking-widest text-primary group-hover:gap-2 transition-all">
                                    <span>Simular Agora</span>
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </Link>
                        );
                    })}
                </div>
            </main>

            {/* Seção Como Funciona */}
            <section className="bg-white dark:bg-slate-900/50 py-32 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden" id="como-funciona">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white [word-spacing:0.1em]">Como Funciona</h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
                        <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium text-lg">Três passos simples para dominar suas finanças.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        {[
                            { step: "01", title: "Escolha a Ferramenta", desc: "Selecione entre dezenas de simuladores específicos para sua necessidade atual." },
                            { step: "02", title: "Insira seus Dados", desc: "Preencha com seus valores, taxas e prazos. Nossa inteligência cuida dos cálculos." },
                            { step: "03", title: "Analise e Planeje", desc: "Visualize gráficos e tabelas detalhadas para tomar as melhores decisões." }
                        ].map((item, idx) => (
                            <div key={idx} className="group flex flex-col items-center">
                                <div className="w-24 h-24 bg-primary/5 dark:bg-primary/10 text-primary rounded-[2.5rem] flex items-center justify-center mb-8 text-3xl font-black group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-xl">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 dark:text-white [word-spacing:0.1em]">
                        Pronto para começar?
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-500 dark:text-slate-400 mb-10 font-medium">
                        Acesse gratuitamente todas as nossas ferramentas e domine suas finanças hoje.
                    </p>
                    <Link href="/" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl shadow-primary/30">
                        Acessar Calculadoras
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Footer Público */}
            <footer className="bg-slate-950 text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-12 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">HubInvestor</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium text-center md:text-right max-w-md">
                            Democratizando o acesso a ferramentas financeiras de elite para todos os brasileiros.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <p>© 2024 HubInvestor. Todos os direitos reservados.</p>
                        <div className="flex gap-8">
                            <a href="/termos" className="hover:text-primary transition-colors">Termos</a>
                            <a href="/privacidade" className="hover:text-primary transition-colors">Privacidade</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
