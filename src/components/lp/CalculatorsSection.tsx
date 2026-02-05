
import React from 'react';
import Link from 'next/link';

const calcs = [
    {
        title: 'Juros Compostos',
        desc: 'Simule o poder do tempo sobre seus aportes mensais.',
        icon: 'trending_up',
        slug: 'juros-compostos'
    },
    {
        title: 'Renda Fixa',
        desc: 'Compare CDB, LCI, LCA e Tesouro Direto com inflação.',
        icon: 'account_balance',
        slug: 'renda-fixa'
    },
    {
        title: 'Salário Líquido',
        desc: 'Calcule descontos de INSS, FGTS e IRRF em segundos.',
        icon: 'payments',
        slug: 'salario-liquido'
    }
];

export const CalculatorsSection: React.FC = () => {
    return (
        <section id="calculadoras" className="px-6 md:px-20 py-20 bg-lp-primary/5 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-bold text-white">Calculadoras Mais Utilizadas</h2>
                    <Link href="/calculadoras" className="text-lp-primary font-bold text-sm flex items-center gap-2 hover:underline">
                        Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {calcs.map((c, i) => (
                        <div key={i} className="bg-lp-background border border-lp-border p-8 rounded-2xl relative group hover:border-lp-primary transition-all">
                            <div className="absolute top-4 right-4 bg-lp-primary/20 text-lp-primary text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs fill-1">star</span> Mais usada
                            </div>
                            <span className="material-symbols-outlined text-4xl text-lp-primary mb-4">{c.icon}</span>
                            <h3 className="text-xl font-bold mb-2 text-white">{c.title}</h3>
                            <p className="text-sm text-slate-500 mb-8">{c.desc}</p>
                            <Link href={`/calculadoras/${c.slug}`} className="w-full py-4 bg-lp-card text-white rounded-xl font-bold group-hover:bg-lp-primary group-hover:text-lp-background transition-all flex items-center justify-center">
                                Calcular agora
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
