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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Planeje sua <span className="text-orange-600">Aposentadoria</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Descubra quanto precisa investir todo mês para garantir a renda desejada na terceira idade.
                    </p>
                </div>
                <CalculadoraAposentadoria />
            </div>
        </DashboardLayout>
    );
}
