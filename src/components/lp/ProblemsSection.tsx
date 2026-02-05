
import React from 'react';

const problems = [
    {
        icon: 'warning',
        color: 'text-red-500',
        bg: 'bg-red-500/10',
        title: 'Falta de Planejamento',
        desc: 'Você sente que seu dinheiro some sem que você consiga visualizar o futuro?'
    },
    {
        icon: 'account_tree',
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
        title: 'Gestão Fragmentada',
        desc: 'Dados espalhados em diversas planilhas e apps dificultam a visão clara.'
    },
    {
        icon: 'receipt_long',
        color: 'text-red-400',
        bg: 'bg-red-400/10',
        title: 'Impostos Ineficientes',
        desc: 'Pagamento indevido de taxas e multas por pura falta de visão fiscal.'
    },
    {
        icon: 'psychology',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        title: 'Complexidade Técnica',
        desc: 'Termos técnicos e gráficos impossíveis que travam sua tomada de decisão.'
    }
];

export const ProblemsSection: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 bg-lp-card/20 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Dores Financeiras que Resolvemos</h2>
                    <p className="text-slate-400">Identifique e elimine os gargalos que impedem o crescimento do seu patrimônio.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((p, i) => (
                        <div key={i} className="flex flex-col gap-4 rounded-2xl bg-lp-card p-8 border border-lp-border hover:border-slate-700 transition-colors">
                            <div className={`${p.color} ${p.bg} w-12 h-12 rounded-lg flex items-center justify-center`}>
                                <span className="material-symbols-outlined">{p.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{p.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
