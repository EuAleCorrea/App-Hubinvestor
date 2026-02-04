import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraImpostoRenda } from "@/components/calculadoras/imposto-renda";

export const metadata: Metadata = {
    title: "Calculadora IR sobre Investimentos | HubInvestor",
    description: "Calcule o Imposto de Renda sobre seus rendimentos de renda fixa. Veja a alíquota da tabela regressiva e o valor líquido.",
    openGraph: {
        title: "Calculadora IR sobre Investimentos | HubInvestor",
        description: "Calcule o Imposto de Renda sobre seus rendimentos.",
    },
};

export default function ImpostoRendaPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Tributação</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Imposto de Renda sobre Investimentos
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Calcule o imposto de renda sobre rendimentos de renda fixa usando a tabela regressiva.
                </p>
            </header>
            <CalculadoraImpostoRenda />
        </DashboardLayout>
    );
}
