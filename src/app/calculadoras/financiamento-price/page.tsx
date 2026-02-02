import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraFinanciamentoPrice } from "@/components/calculadoras/financiamento-price";

export const metadata: Metadata = {
    title: "Calculadora Tabela PRICE | HubInvestor",
    description: "Simule financiamentos com parcelas fixas no sistema PRICE. Calcule amortização, juros e total pago em seu financiamento imobiliário ou de veículos.",
    openGraph: {
        title: "Calculadora Tabela PRICE | HubInvestor",
        description: "Simule financiamentos com parcelas fixas no sistema PRICE.",
    },
};

export default function FinanciamentoPricePage() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Tabela <span className="text-primary">PRICE</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Simule seu financiamento com parcelas fixas e veja o detalhamento de amortização e juros mês a mês.
                    </p>
                </div>
                <CalculadoraFinanciamentoPrice />
            </div>
        </DashboardLayout>
    );
}
