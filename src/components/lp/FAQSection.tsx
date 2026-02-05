"use client";

import React, { useState } from 'react';

const faqs = [
    {
        q: 'Como funciona o período de teste?',
        a: 'Você pode utilizar todas as ferramentas do plano Pro por 7 dias sem custo algum para validar a plataforma.'
    },
    {
        q: 'Os dados são realmente em tempo real?',
        a: 'Sim, nos planos Pro e Premium temos integração direta com a B3 e bolsas internacionais (NYSE/NASDAQ) via API de baixa latência.'
    },
    {
        q: 'Posso cancelar minha assinatura quando quiser?',
        a: 'Sim, não há fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel de controle.'
    },
    {
        q: 'Quais métodos de pagamento são aceitos?',
        a: 'Aceitamos cartões de crédito, PIX e boleto bancário para assinaturas anuais.'
    }
];

export const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 md:px-20 border-t border-lp-border text-left">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-4xl font-bold text-white mb-6">Dúvidas Frequentes</h2>
                    <p className="text-slate-400 text-lg">Tudo o que você precisa saber sobre a HubInvestor para começar hoje mesmo.</p>
                </div>
                <div className="md:col-span-8 space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-lp-border bg-lp-card/30 transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between text-left"
                            >
                                <h4 className="text-white font-semibold text-lg">{f.q}</h4>
                                <span className={`material-symbols-outlined text-slate-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
                                    {openIndex === i ? 'expand_less' : 'add'}
                                </span>
                            </button>
                            {openIndex === i && (
                                <div className="mt-4 text-slate-400 leading-relaxed border-t border-lp-border pt-4">
                                    {f.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
