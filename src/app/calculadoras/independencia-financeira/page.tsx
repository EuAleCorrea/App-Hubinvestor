import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraIndependenciaFinanceira } from "@/components/calculadoras/independencia-financeira";

export const metadata: Metadata = {
    title: "Calculadora de Independência Financeira | HubInvestor",
    description: "Calcule seu número FIRE e descubra o patrimônio necessário para viver de renda passiva.",
    openGraph: {
        title: "Calculadora FIRE | HubInvestor",
        description: "Descubra o patrimônio necessário para alcançar a liberdade financeira.",
    },
};

export default function IndependenciaFinanceiraPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Simulador FIRE</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Independência Financeira
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Descubra seu número FIRE: o patrimônio necessário para cobrir suas despesas e alcançar a liberdade financeira.
                </p>
            </header>
            <CalculadoraIndependenciaFinanceira />
        </DashboardLayout>
    );
}
