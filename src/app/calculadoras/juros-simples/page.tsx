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
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Simulador</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Juros Simples
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Calcule o rendimento com juros simples, onde os juros incidem apenas sobre o capital inicial.
                </p>
            </header>
            <CalculadoraJurosSimples />
        </DashboardLayout>
    );
}
