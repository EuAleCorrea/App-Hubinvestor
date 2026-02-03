import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraAposentadoria } from "@/components/calculadoras/aposentadoria";

export const metadata: Metadata = {
    title: "Calculadora de Aposentadoria | HubInvestor",
    description: "Planeje sua aposentadoria. Descubra quanto precisa investir mensalmente para atingir a renda desejada na terceira idade.",
    openGraph: {
        title: "Calculadora de Aposentadoria | HubInvestor",
        description: "Planeje sua aposentadoria e descubra quanto investir mensalmente.",
    },
};

export default function AposentadoriaPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Planejamento</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Aposentadoria
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Descubra quanto precisa investir mensalmente para garantir a renda desejada na terceira idade.
                </p>
            </header>
            <CalculadoraAposentadoria />
        </DashboardLayout>
    );
}
