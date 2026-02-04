import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraRendaPassiva } from "@/components/calculadoras/renda-passiva";

export const metadata: Metadata = {
    title: "Calculadora de Renda Passiva | HubInvestor",
    description: "Calcule quanto você pode sacar mensalmente do seu patrimônio usando a regra dos 4%.",
    openGraph: {
        title: "Calculadora de Renda Passiva | HubInvestor",
        description: "Calcule sua renda passiva mensal usando a regra dos 4%.",
    },
};

export default function RendaPassivaPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Simulador</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Renda Passiva
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Descubra quanto você pode sacar mensalmente do seu patrimônio sem comprometer sua independência financeira.
                </p>
            </header>
            <CalculadoraRendaPassiva />
        </DashboardLayout>
    );
}
