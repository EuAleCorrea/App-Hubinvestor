
import React from 'react';

const steps = [
    {
        num: 'looks_one',
        icon: 'database',
        title: 'Use',
        desc: 'Acesse dados consolidados em tempo real e utilize ferramentas profissionais para análise de ativos.'
    },
    {
        num: 'looks_two',
        icon: 'schedule',
        title: 'Salve',
        desc: 'Economize horas de estudo manual. Automatizamos o processamento de relatórios e indicadores complexos.'
    },
    {
        num: 'looks_3',
        icon: 'trending_up',
        title: 'Evolua',
        desc: 'Cresça seu patrimônio com decisões fundamentadas e estratégias de investidores institucionais.'
    }
];

export const ProcessSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-lp-border text-center">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Use, Salve, Evolua</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Nossa metodologia foi desenhada para transformar sua relação com o mercado financeiro em 3 passos simples.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                {steps.map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="mb-8 relative">
                            <span className="material-symbols-outlined text-9xl text-lp-primary/5 absolute -top-12 -left-12 select-none">{s.num}</span>
                            <div className="w-24 h-24 rounded-3xl bg-lp-primary/10 flex items-center justify-center text-lp-primary relative z-10 border border-lp-primary/20 group-hover:scale-110 transition-all duration-300">
                                <span className="material-symbols-outlined !text-5xl">{s.icon}</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
