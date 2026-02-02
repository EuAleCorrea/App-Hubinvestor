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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        Reserva de <span className="text-primary">Emergência</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                        Calcule quanto precisa guardar para se proteger de imprevistos e crises.
                    </p>
                </div>
                <CalculadoraReservaEmergencia />
            </div>
        </DashboardLayout>
    );
}
