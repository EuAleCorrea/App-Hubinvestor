
import React from 'react';

const plans = [
    {
        name: 'Free',
        price: '0',
        popular: true,
        btn: 'Começar Agora',
        features: [
            { text: 'Acesso básico ao painel', included: true },
            { text: 'Dados com 15min de atraso', included: true },
            { text: '1 Carteira monitorada', included: true },
            { text: 'Alertas via SMS/Telegram', included: false },
        ]
    },
    {
        name: 'Pro',
        price: '99',
        popular: false,
        btn: 'Assinar Pro',
        features: [
            { text: 'Dados em tempo real', included: true },
            { text: 'Alertas SMS Ilimitados', included: true },
            { text: '5 Carteiras monitoradas', included: true },
            { text: 'Filtros Avançados de Ativos', included: true },
        ]
    },
    {
        name: 'Premium',
        price: '199',
        popular: false,
        btn: 'Assinar Premium',
        features: [
            { text: 'Suporte VIP 24/7', included: true },
            { text: 'Análise Preditiva com IA', included: true },
            { text: 'Carteiras ilimitadas', included: true },
            { text: 'Webinars exclusivos mensais', included: true },
        ]
    }
];

export const PricingSection: React.FC = () => {
    return (
        <section id="precos" className="py-24 px-6 md:px-20 border-t border-lp-border bg-lp-card/10 text-left">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Planos que cabem no seu bolso</h2>
                    <p className="text-slate-400">Escolha a ferramenta ideal para o seu momento como investidor.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((p, i) => (
                        <div key={i} className={`flex flex-col p-10 rounded-3xl border-2 transition-all duration-300 relative ${p.popular ? 'border-lp-primary bg-lp-card shadow-2xl shadow-lp-primary/10 lg:scale-105 z-10' : 'border-lp-border bg-lp-card/50 hover:border-slate-700'}`}>
                            {p.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lp-primary text-lp-background px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                    Mais Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-white text-xl font-bold mb-4">{p.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-slate-400 text-2xl font-semibold">R$</span>
                                    <span className="text-white text-6xl font-black">{p.price}</span>
                                    <span className="text-slate-400 text-sm font-medium">/mês</span>
                                </div>
                            </div>
                            <button className={`w-full py-4 px-4 rounded-xl font-bold mb-10 transition-colors ${p.popular ? 'bg-lp-primary text-lp-background hover:bg-lp-primary/90' : 'bg-lp-border text-white hover:bg-slate-700'}`}>
                                {p.btn}
                            </button>
                            <ul className="space-y-5 flex-grow">
                                {p.features.map((f, fi) => (
                                    <li key={fi} className={`flex items-start gap-3 text-sm ${f.included ? 'text-slate-300' : 'text-slate-600 line-through'}`}>
                                        <span className={`material-symbols-outlined !text-xl ${f.included ? 'text-lp-primary' : 'text-slate-600'}`}>
                                            {f.included ? 'check_circle' : 'cancel'}
                                        </span>
                                        {f.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
