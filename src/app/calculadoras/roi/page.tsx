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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Calculadora de <span className="text-primary">ROI</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Retorno sobre Investimento: meça a eficiência e lucratividade dos seus investimentos.
                    </p>
                </div>
                <CalculadoraROI />
            </div>
        </DashboardLayout>
    );
}
