import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraSalarioLiquido } from "@/components/calculadoras/salario-liquido";

export const metadata: Metadata = {
    title: "Calculadora de Salário Líquido CLT | HubInvestor",
    description: "Calcule seu salário líquido CLT. Descubra quanto você recebe após INSS e IRRF com as tabelas atualizadas de 2024.",
    openGraph: {
        title: "Calculadora de Salário Líquido CLT | HubInvestor",
        description: "Calcule seu salário líquido após INSS e IRRF.",
    },
};

export default function SalarioLiquidoPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">CLT</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Calculadora de Salário Líquido
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Descubra quanto você recebe na conta após descontos de INSS e IRRF (tabelas 2024).
                </p>
            </header>
            <CalculadoraSalarioLiquido />
        </DashboardLayout>
    );
}
