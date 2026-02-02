import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraFinanciamentoSAC } from "@/components/calculadoras/financiamento-sac";

export const metadata: Metadata = {
    title: "Calculadora Tabela SAC | HubInvestor",
    description: "Simule financiamentos com parcelas decrescentes no sistema SAC. Compare com PRICE e economize em juros no longo prazo.",
    openGraph: {
        title: "Calculadora Tabela SAC | HubInvestor",
        description: "Simule financiamentos com parcelas decrescentes no sistema SAC.",
    },
};

export default function FinanciamentoSACPage() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Tabela <span className="text-emerald-600">SAC</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Parcelas decrescentes que diminuem ao longo do tempo. Pague menos juros no total.
                    </p>
                </div>
                <CalculadoraFinanciamentoSAC />
            </div>
        </DashboardLayout>
    );
}
