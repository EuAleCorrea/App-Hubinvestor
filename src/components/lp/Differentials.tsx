
import React from 'react';

const diffs = [
    {
        icon: 'cable',
        title: 'Sem Integrações Complexas',
        desc: 'Privacidade em primeiro lugar, sem conectar senhas bancárias se não quiser.'
    },
    {
        icon: 'forum',
        title: 'IA que Explica',
        desc: 'Receba explicações em linguagem humana, sem jargões financeiros.'
    },
    {
        icon: 'target',
        title: 'Foco na Decisão',
        desc: 'Não apenas dados, mas recomendações do que fazer agora.'
    }
];

export const Differentials: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 text-left">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {diffs.map((d, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-lp-card text-white border border-lp-border">
                            <span className="material-symbols-outlined text-4xl text-lp-primary">{d.icon}</span>
                            <div>
                                <h4 className="font-bold text-sm mb-1">{d.title}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">{d.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
