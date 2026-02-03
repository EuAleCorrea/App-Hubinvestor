import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraROI } from "@/components/calculadoras/roi";

export const metadata: Metadata = {
    title: "Calculadora de ROI | HubInvestor",
    description: "Calcule o retorno sobre investimento (ROI). Descubra a eficiência dos seus investimentos de forma rápida.",
    openGraph: {
        title: "Calculadora de ROI | HubInvestor",
        description: "Calcule o retorno sobre investimento (ROI).",
    },
};

export default function ROIPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Análise</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Retorno sobre Investimento (ROI)
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Meça a eficiência e lucratividade dos seus investimentos de forma rápida e precisa.
                </p>
            </header>
            <CalculadoraROI />
        </DashboardLayout>
    );
}
