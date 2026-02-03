import { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { CalculadoraReservaEmergencia } from "@/components/calculadoras/reserva-emergencia";

export const metadata: Metadata = {
    title: "Calculadora de Reserva de Emergência | HubInvestor",
    description: "Calcule quanto guardar para sua reserva de emergência. Proteja-se de imprevistos com segurança financeira.",
    openGraph: {
        title: "Calculadora de Reserva de Emergência | HubInvestor",
        description: "Calcule quanto guardar para sua reserva de emergência.",
    },
};

export default function ReservaEmergenciaPage() {
    return (
        <DashboardLayout>
            <header className="mb-10 text-left">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Planejamento</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Reserva de Emergência
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mt-2 max-w-2xl">
                    Calcule quanto precisa guardar para se proteger de imprevistos e crises.
                </p>
            </header>
            <CalculadoraReservaEmergencia />
        </DashboardLayout>
    );
}
