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
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Financiamento</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Tabela PRICE
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Simule seu financiamento com parcelas fixas e veja o detalhamento de amortização e juros mês a mês.
                </p>
            </header>
            <CalculadoraFinanciamentoPrice />
        </DashboardLayout>
    );
}
