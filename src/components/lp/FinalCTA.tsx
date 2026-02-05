
import React from 'react';
import Link from 'next/link';

export const FinalCTA: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-20 text-center">
            <div className="max-w-7xl mx-auto">
                <div className="bg-lp-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    {/* Decorative Dot Grid */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-black text-lp-background mb-8 max-w-4xl leading-[1.1]">
                            Pronto para tomar decisões financeiras <br className="hidden md:block" /> mais inteligentes?
                        </h2>
                        <p className="text-lp-background/80 text-xl mb-12 max-w-2xl font-semibold">
                            Junte-se a mais de 50.000 investidores que já transformaram seus resultados com inteligência de dados.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link href="/signup" className="w-full md:w-auto px-12 py-6 bg-lp-background text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-black/30 flex items-center justify-center">
                                Começar Grátis Agora
                            </Link>
                            <p className="text-lp-background font-bold text-sm">
                                Sem cartão de crédito necessário
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
