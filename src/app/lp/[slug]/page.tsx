"use client";

import Link from "next/link";
import { useState } from "react";
import { Wallet, Menu, X, ArrowLeft, Search } from "lucide-react";
import { useParams } from "next/navigation";

// Importar componentes de calculadoras
import {
    CalculadoraJurosCompostos,
    CalculadoraAportesMensais,
    CalculadoraRendaPassiva,
    CalculadoraIndependenciaFinanceira,
    CalculadoraFinanciamentoPrice,
    CalculadoraFinanciamentoSAC,
    CalculadoraAposentadoria,
    CalculadoraImpostoRenda,
    CalculadoraJurosSimples,
    CalculadoraROI,
    CalculadoraRendaFixa,
    CalculadoraSalarioLiquido,
    CalculadoraReservaEmergencia,
    CalculadoraComparadorIndices,
} from "@/components/calculadoras";

// Mapeamento de slugs para componentes e metadados
const calculadorasMap: Record<string, {
    component: React.ComponentType;
    nome: string;
    descricao: string;
}> = {
    "juros-compostos": {
        component: CalculadoraJurosCompostos,
        nome: "Juros Compostos",
        descricao: "Acompanhe o crescimento acelerado do seu capital ao longo do tempo.",
    },
    "aportes-mensais": {
        component: CalculadoraAportesMensais,
        nome: "Aportes Mensais",
        descricao: "Calcule quanto poupar mensalmente para atingir seu objetivo.",
    },
    "renda-passiva": {
        component: CalculadoraRendaPassiva,
        nome: "Renda Passiva",
        descricao: "Projeção de saques mensais para manter seu padrão de vida.",
    },
    "independencia-financeira": {
        component: CalculadoraIndependenciaFinanceira,
        nome: "Independência Financeira",
        descricao: "Otimize seu caminho para o FIRE.",
    },
    "financiamento-price": {
        component: CalculadoraFinanciamentoPrice,
        nome: "Tabela PRICE",
        descricao: "Financiamento com parcelas fixas para imóveis e veículos.",
    },
    "financiamento-sac": {
        component: CalculadoraFinanciamentoSAC,
        nome: "Tabela SAC",
        descricao: "Financiamento com parcelas decrescentes.",
    },
    "aposentadoria": {
        component: CalculadoraAposentadoria,
        nome: "Aposentadoria",
        descricao: "Planeje sua liberdade financeira futura.",
    },
    "imposto-renda": {
        component: CalculadoraImpostoRenda,
        nome: "Imposto de Renda",
        descricao: "Calcule o IR sobre seus rendimentos.",
    },
    "juros-simples": {
        component: CalculadoraJurosSimples,
        nome: "Juros Simples",
        descricao: "Cálculo básico de juros sobre o capital inicial.",
    },
    "roi": {
        component: CalculadoraROI,
        nome: "ROI",
        descricao: "Retorno sobre Investimento para suas decisões.",
    },
    "renda-fixa": {
        component: CalculadoraRendaFixa,
        nome: "Renda Fixa",
        descricao: "Simule rendimentos em CDB, LCI/LCA.",
    },
    "salario-liquido": {
        component: CalculadoraSalarioLiquido,
        nome: "Salário Líquido CLT",
        descricao: "Calcule INSS e IRRF do seu salário bruto.",
    },
    "reserva-emergencia": {
        component: CalculadoraReservaEmergencia,
        nome: "Reserva de Emergência",
        descricao: "Descubra quanto você precisa guardar.",
    },
    "comparador-indices": {
        component: CalculadoraComparadorIndices,
        nome: "Comparador de Índices",
        descricao: "Compare CDI, IPCA, Poupança e mais.",
    },
};

export default function CalculadoraPublicaPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const calculadora = calculadorasMap[slug];

    if (!calculadora) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Calculadora não encontrada</h1>
                    <Link href="/lp" className="text-primary font-bold hover:underline">Voltar para a LP</Link>
                </div>
            </div>
        );
    }

    const CalculadoraComponent = calculadora.component;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            {/* Navbar Pública */}
            <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/lp" className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Wallet className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white [word-spacing:0.05em]">HubInvestor</span>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/lp" className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Voltar às Ferramentas
                            </Link>
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
                        <Link href="/lp" className="block text-sm font-semibold hover:text-primary">← Voltar às Ferramentas</Link>
                        <Link href="/" className="block bg-primary text-white text-center px-6 py-3 rounded-2xl font-bold text-sm">
                            Acessar App
                        </Link>
                    </div>
                )}
            </nav>

            {/* Header da Calculadora */}
            <header className="py-10 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight [word-spacing:0.05em]">
                            {calculadora.nome}
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">
                            {calculadora.descricao}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl border border-blue-100 dark:border-primary/20 shrink-0">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        Simulador de Precisão
                    </div>
                </div>
            </header>

            {/* Calculadora */}
            <main className="px-4 pb-20 max-w-7xl mx-auto">
                <CalculadoraComponent />
            </main>

            {/* CTA para App */}
            <section className="py-16 px-4 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tight [word-spacing:0.05em]">
                        Gostou da ferramenta?
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
                        Acesse o Dashboard para mais recursos e salve suas simulações.
                    </p>
                    <Link href="/" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl shadow-primary/30">
                        Acessar Dashboard Completo
                    </Link>
                </div>
            </section>

            {/* Footer Público */}
            <footer className="bg-slate-950 text-white py-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white">
                            <Wallet className="w-4 h-4" />
                        </div>
                        <span className="text-xl font-black tracking-tight">HubInvestor</span>
                    </div>
                    <p className="text-slate-500 text-xs font-medium">
                        © 2024 HubInvestor. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
