import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraImpostoRenda } from "@/components/calculadoras/imposto-renda";

export const metadata: Metadata = {
    title: "Calculadora IR sobre Investimentos | HubInvestor",
    description: "Calcule o Imposto de Renda sobre seus rendimentos de renda fixa. Veja a alíquota da tabela regressiva e o valor líquido.",
    openGraph: {
        title: "Calculadora IR sobre Investimentos | HubInvestor",
        description: "Calcule o Imposto de Renda sobre seus rendimentos.",
    },
};

export default function ImpostoRendaPage() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        IR sobre <span className="text-violet-600">Investimentos</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Calcule o imposto de renda sobre rendimentos de renda fixa usando a tabela regressiva.
                    </p>
                </div>
                <CalculadoraImpostoRenda />
            </div>
        </DashboardLayout>
    );
}
