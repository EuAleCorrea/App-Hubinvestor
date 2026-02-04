import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraAportesMensais } from "@/components/calculadoras/aportes-mensais";

export const metadata: Metadata = {
    title: "Calculadora de Aportes Mensais | HubInvestor",
    description: "Simule o crescimento do seu patrimônio com aportes recorrentes e juros compostos.",
    openGraph: {
        title: "Calculadora de Aportes Mensais | HubInvestor",
        description: "Simule o crescimento do seu patrimônio com aportes recorrentes.",
    },
};

export default function AportesMensaisPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Simulador</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Aportes Mensais
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Visualize como aportes regulares combinados com juros compostos podem acelerar a construção do seu patrimônio.
                </p>
            </header>
            <CalculadoraAportesMensais />
        </DashboardLayout>
    );
}
