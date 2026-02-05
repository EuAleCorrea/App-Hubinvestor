
import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-lp-border bg-lp-background/80 backdrop-blur-md px-6 md:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-lp-primary">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h1 className="text-white text-xl font-bold tracking-tight">HubInvestor</h1>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    <a href="#solucoes" className="text-slate-300 hover:text-lp-primary text-sm font-medium transition-colors">Soluções</a>
                    <a href="#calculadoras" className="text-slate-300 hover:text-lp-primary text-sm font-medium transition-colors">Calculadoras</a>
                    <a href="#precos" className="text-slate-300 hover:text-lp-primary text-sm font-medium transition-colors">Preços</a>
                    <a href="#sobre" className="text-slate-300 hover:text-lp-primary text-sm font-medium transition-colors">Sobre</a>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden sm:block text-slate-300 hover:text-white text-sm font-bold transition-colors">
                        Login
                    </Link>
                    <Link href="/signup" className="hidden md:flex bg-lp-primary hover:bg-lp-primary/90 text-lp-background px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-lp-primary/20 items-center justify-center">
                        Começar Grátis
                    </Link>
                </div>
            </div>
        </header>
    );
};
