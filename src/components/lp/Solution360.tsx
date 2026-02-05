
import React from 'react';

const pillars = [
    {
        title: 'Planejamento',
        desc: 'Trace metas claras e simule cenários de longo prazo com precisão estatística.',
        icon: 'calendar_today',
        img: 'https://picsum.photos/seed/planning/400/225'
    },
    {
        title: 'Gestão',
        desc: 'Controle total de ativos e passivos em uma única interface intuitiva e rápida.',
        icon: 'analytics',
        img: 'https://picsum.photos/seed/management/400/225'
    },
    {
        title: 'Fiscal',
        desc: 'Otimização tributária inteligente para você reter mais do que ganha.',
        icon: 'gavel',
        img: 'https://picsum.photos/seed/tax/400/225'
    },
    {
        title: 'IA Financeira',
        desc: 'Insights automáticos e preditivos sobre seus dados bancários e investimentos.',
        icon: 'auto_awesome',
        img: 'https://picsum.photos/seed/ai/400/225'
    }
];

export const Solution360: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 max-w-7xl mx-auto text-left">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 border-l-4 border-lp-primary pl-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa Solução 360°</h2>
                    <p className="text-slate-400 max-w-2xl">Quatro pilares fundamentais integrados para garantir a sua saúde financeira de forma automatizada.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((p, i) => (
                        <div key={i} className="group cursor-default">
                            <div className="w-full aspect-video rounded-xl bg-lp-card mb-4 overflow-hidden relative border border-lp-border">
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                                <div className="absolute inset-0 bg-lp-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="material-symbols-outlined text-4xl text-lp-primary">{p.icon}</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-white">{p.title}</h4>
                            <p className="text-sm text-slate-500">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
