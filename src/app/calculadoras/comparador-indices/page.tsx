import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraComparadorIndices } from "@/components/calculadoras/comparador-indices";

export const metadata: Metadata = {
    title: "Comparador CDI vs IPCA | HubInvestor",
    description: "Compare rendimentos do CDI com a inflação (IPCA). Descubra seu rendimento real após a inflação.",
    openGraph: {
        title: "Comparador CDI vs IPCA | HubInvestor",
        description: "Compare rendimentos do CDI com a inflação (IPCA).",
    },
};

export default function ComparadorIndicesPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Comparador</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    CDI vs IPCA
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Analise se seus rendimentos estão superando a inflação e gerando ganho real.
                </p>
            </header>
            <CalculadoraComparadorIndices />
        </DashboardLayout>
    );
}
