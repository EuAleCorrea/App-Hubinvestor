import type { Metadata } from "next";
import { CalculadoraReservaEmergencia } from "@/components/calculadoras/reserva-emergencia";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Calculadora de Reserva de Emergência | HubInvestor",
    description: "Calcule quanto guardar para sua reserva de emergência. Proteja-se de imprevistos com segurança financeira.",
};

export default function ReservaEmergenciaPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <Link href="/calculadoras" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" />Voltar para Calculadoras
                </Link>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Reserva de <span className="text-rose-500">Emergência</span></h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Calcule quanto precisa guardar para se proteger de imprevistos e crises.</p>
                </div>
                <CalculadoraReservaEmergencia />
            </div>
        </main>
    );
}
