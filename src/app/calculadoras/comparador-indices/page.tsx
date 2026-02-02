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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Comparador <span className="text-primary">CDI vs IPCA</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Analise se seus rendimentos estão superando a inflação e gerando ganho real.
                    </p>
                </div>
                <CalculadoraComparadorIndices />
            </div>
        </DashboardLayout>
    );
}
