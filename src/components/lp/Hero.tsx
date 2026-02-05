
import React from 'react';
import Link from 'next/link';

export const Hero: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-12 md:py-24 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 text-left">
                <div className="flex flex-col gap-8 flex-1 text-center md:text-left">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                            Tome Decisões Financeiras <br />
                            <span className="text-lp-primary">Mais Inteligentes</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto md:mx-0">
                            A plataforma de inteligência financeira definitiva para planejar, gerir e otimizar seu patrimônio com IA de última geração.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link href="/signup" className="h-14 px-8 bg-lp-primary text-lp-background rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-lp-primary/30 transition-all flex items-center justify-center">
                            Começar Grátis
                        </Link>
                        <Link href="#calculadoras" className="h-14 px-8 border-2 border-lp-border rounded-xl font-bold text-lg hover:bg-lp-card text-white transition-all flex items-center justify-center">
                            Ver Calculadoras
                        </Link>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-lp-border shadow-2xl">
                        <img
                            src="https://picsum.photos/seed/dashboard/800/600"
                            alt="HubInvestor Dashboard"
                            className="w-full h-auto block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-lp-background via-transparent to-transparent opacity-40"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
