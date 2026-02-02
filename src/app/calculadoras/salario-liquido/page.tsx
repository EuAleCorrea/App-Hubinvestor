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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Calculadora <span className="text-primary">Salário Líquido</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Descubra quanto você recebe na conta após descontos de INSS e IRRF (tabelas 2024).
                    </p>
                </div>
                <CalculadoraSalarioLiquido />
            </div>
        </DashboardLayout>
    );
}
