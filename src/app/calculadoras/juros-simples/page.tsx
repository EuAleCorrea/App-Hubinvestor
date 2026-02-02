import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraJurosSimples } from "@/components/calculadoras/juros-simples";

export const metadata: Metadata = {
    title: "Calculadora de Juros Simples | HubInvestor",
    description: "Calcule juros simples de forma rápida e fácil. Descubra quanto seu dinheiro rende com a fórmula J = C × i × n.",
    openGraph: {
        title: "Calculadora de Juros Simples | HubInvestor",
        description: "Calcule juros simples com a fórmula J = C × i × n.",
    },
};

export default function JurosSimplesPage() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Juros <span className="text-primary">Simples</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Calcule o rendimento com juros simples, onde os juros incidem apenas sobre o capital inicial.
                    </p>
                </div>
                <CalculadoraJurosSimples />
            </div>
        </DashboardLayout>
    );
}
