import type { Metadata } from "next";
import { CalculadoraROI } from "@/components/calculadoras/roi";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Calculadora de ROI | HubInvestor",
    description: "Calcule o retorno sobre investimento (ROI). Descubra a eficiência dos seus investimentos de forma rápida.",
};

export default function ROIPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <Link href="/calculadoras" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" />Voltar para Calculadoras
                </Link>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Calculadora de <span className="text-cyan-500">ROI</span></h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Retorno sobre Investimento: meça a eficiência e lucratividade dos seus investimentos.</p>
                </div>
                <CalculadoraROI />
            </div>
        </main>
    );
}
