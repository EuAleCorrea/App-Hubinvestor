import { Metadata } from "next";
import { CalculadoraJurosCompostos } from "@/components/calculadoras";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export const metadata: Metadata = {
    title: "Calculadora de Juros Compostos | HubInvestor",
    description: "Entenda o poder do tempo sobre seus investimentos com nossa calculadora de precisão. Simule a força do tempo no seu patrimônio.",
    openGraph: {
        title: "Calculadora de Juros Compostos | HubInvestor",
        description: "Simule a força do tempo no seu patrimônio.",
    },
};

export default function JurosCompostosPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Simulador</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Juros Compostos
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Acompanhe o crescimento acelerado do seu capital ao longo do tempo com o poder dos juros compostos.
                </p>
            </header>
            <CalculadoraJurosCompostos />
        </DashboardLayout>
    );
}
