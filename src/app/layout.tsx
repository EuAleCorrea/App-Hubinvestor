import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#005BFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "HubInvestor | Inteligência Financeira",
  description: "Calculadoras financeiras modernas para planejar seu futuro e gerenciar investimentos.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HubInvestor",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "HubInvestor",
              "description": "Calculadoras financeiras e ferramentas de inteligência para investidores.",
              "url": "https://hubinvestor.com.br",
              "logo": "https://hubinvestor.com.br/icon.png",
              "image": "https://hubinvestor.com.br/icon.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "potentialAction": {
                "@type": "UseAction",
                "target": "https://hubinvestor.com.br/calculadoras"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
