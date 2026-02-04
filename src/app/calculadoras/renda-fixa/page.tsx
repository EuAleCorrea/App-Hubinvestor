import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraRendaFixa } from "@/components/calculadoras/renda-fixa";

export const metadata: Metadata = {
    title: "Simulador de Renda Fixa CDB LCI LCA | HubInvestor",
    description: "Simule investimentos em CDB, LCI e LCA. Compare rendimentos líquidos considerando IR e encontre a melhor opção.",
    openGraph: {
        title: "Simulador de Renda Fixa | HubInvestor",
        description: "Simule investimentos em CDB, LCI e LCA.",
    },
};

export default function RendaFixaPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Comparador</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Simulador de Renda Fixa
                </h1>
                <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Compare CDB, LCI e LCA. Veja rendimento líquido após impostos e escolha a melhor opção.
                </p>
            </header>
            <CalculadoraRendaFixa />
        </DashboardLayout>
    );
}
