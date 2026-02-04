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
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Financiamento</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Tabela SAC
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Parcelas decrescentes que diminuem ao longo do tempo. Pague menos juros no total.
                </p>
            </header>
            <CalculadoraFinanciamentoSAC />
        </DashboardLayout>
    );
}
