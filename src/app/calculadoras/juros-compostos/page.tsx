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
            <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 text-left shrink-0">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">Juros Compostos</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
                        Acompanhe o crescimento acelerado do seu capital ao longo do tempo.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl border border-blue-100 dark:border-primary/20">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        Simulador de Precisão
                    </div>
                </div>
            </header>

            <div className="relative">
                <CalculadoraJurosCompostos />
            </div>
        </DashboardLayout>
    );
}
