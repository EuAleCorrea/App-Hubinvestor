import type { Metadata } from "next";
import { CalculadoraJurosSimples } from "@/components/calculadoras/juros-simples";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Calculadora de Juros Simples | HubInvestor",
    description: "Calcule juros simples de forma rápida e fácil. Descubra quanto seu dinheiro rende com a fórmula J = C × i × n.",
};

export default function JurosSimplesPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <Link href="/calculadoras" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" />Voltar para Calculadoras
                </Link>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Juros <span className="text-amber-500">Simples</span></h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Calcule o rendimento com juros simples, onde os juros incidem apenas sobre o capital inicial.</p>
                </div>
                <CalculadoraJurosSimples />
            </div>
        </main>
    );
}
