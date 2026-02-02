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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Simulador <span className="text-primary">Renda Fixa</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Compare CDB, LCI e LCA. Veja rendimento líquido após impostos.
                    </p>
                </div>
                <CalculadoraRendaFixa />
            </div>
        </DashboardLayout>
    );
}
