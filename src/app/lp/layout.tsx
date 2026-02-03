import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadoras Financeiras Gratuitas | HubInvestor - Ferramentas de Precisão",
    description: "Acesse as melhores calculadoras financeiras do Brasil. Simuladores de Juros Compostos, Aposentadoria, Renda Passiva e muito mais. Gratuito e profissional.",
    openGraph: {
        title: "Calculadoras Financeiras Gratuitas | HubInvestor",
        description: "Mais de 15 ferramentas de precisão para potencializar seus investimentos e planejar seu futuro.",
    },
};

export default function LPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
