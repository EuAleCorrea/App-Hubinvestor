
import { Metadata } from "next";
import { Header } from "@/components/lp/Header";
import { Hero } from "@/components/lp/Hero";
import { ProblemsSection } from "@/components/lp/ProblemsSection";
import { Solution360 } from "@/components/lp/Solution360";
import { CalculatorsSection } from "@/components/lp/CalculatorsSection";
import { Differentials } from "@/components/lp/Differentials";
import { ProcessSection } from "@/components/lp/ProcessSection";
import { PricingSection } from "@/components/lp/PricingSection";
import { FAQSection } from "@/components/lp/FAQSection";
import { FinalCTA } from "@/components/lp/FinalCTA";
import { Footer } from "@/components/lp/Footer";

export const metadata: Metadata = {
    title: "A Plataforma Definitiva de Inteligência Financeira | HubInvestor",
    description: "Trabalhe seu patrimônio com inteligência. Calculadoras, gestão de ativos e IA financeira em um só lugar. Comece grátis hoje.",
    openGraph: {
        title: "HubInvestor - Inteligência Financeira para Investidores",
        description: "Tome decisões mais inteligentes e planeje seu futuro com ferramentas de precisão.",
    },
};

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-lp-background text-white selection:bg-lp-primary selection:text-lp-background font-sans overflow-x-hidden">
            <Header />
            <main className="flex-grow">
                <Hero />
                <ProblemsSection />
                <Solution360 />
                <CalculatorsSection />
                <Differentials />
                <ProcessSection />
                <PricingSection />
                <FAQSection />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
