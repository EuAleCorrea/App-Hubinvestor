"use client";

import { useState } from "react";
import { calcularIndependenciaFinanceira, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { Shield, Target, Wallet, TrendingUp, Info, ArrowUpRight, Flame, CheckCircle2 } from "lucide-react";

export function CalculadoraIndependenciaFinanceira() {
    const [despesasMensais, setDespesasMensais] = useState<string>("5000");
    const [taxaRetirada, setTaxaRetirada] = useState<string>("4");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularIndependenciaFinanceira> | null>(null);

    const handleCalcular = () => {
        const result = calcularIndependenciaFinanceira({
            despesasMensais: Number(despesasMensais) || 0,
            taxaRetirada: (Number(taxaRetirada) || 4) / 100,
        });
        setResultado(result);
    };

    const multiplo = 100 / Number(taxaRetirada || 4);

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Painel de Controle (Inputs) */}
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Configuração</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Número FIRE</h2>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Despesas Mensais
                            </label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input
                                    type="number"
                                    value={despesasMensais}
                                    onChange={(e) => setDespesasMensais(e.target.value)}
                                    className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="5.000"
                                />
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 ml-1">Quanto você gasta por mês atualmente</p>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Taxa de Retirada Anual
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={taxaRetirada}
                                    onChange={(e) => setTaxaRetirada(e.target.value)}
                                    className="w-full h-14 pl-6 pr-12 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="4"
                                    step="0.5"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">%</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 ml-1">Múltiplo resultante: <span className="font-bold text-primary">{multiplo.toFixed(0)}x</span></p>
                        </div>
                    </div>

                    <button
                        onClick={handleCalcular}
                        className="w-full mt-10 h-14 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                    >
                        Calcular Meta FIRE
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Dashboard de Resultados */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (
                        <>
                            {/* Card Principal - Patrimônio Necessário */}
                            <div className="bg-slate-900 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                        <Flame className="w-4 h-4" />
                                        Seu Número FIRE
                                    </p>
                                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                        {formatarMoeda(resultado.patrimonioNecessario)}
                                    </h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-4 max-w-md">
                                        Patrimônio necessário para cobrir suas despesas indefinidamente com a taxa de retirada escolhida.
                                    </p>
                                </div>
                                {/* Visual Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                <Shield className="absolute bottom-6 right-8 w-24 h-24 text-white/5" />
                            </div>

                            {/* Grid de Estatísticas */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                        <Wallet className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Despesas Anuais</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarMoeda(resultado.despesasAnuais)}
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-5">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Taxa de Retirada</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarPercentual(resultado.taxaUtilizada)} <span className="text-sm font-medium text-slate-500 dark:text-slate-400">ao ano</span>
                                    </p>
                                </div>

                                <div className="bg-primary/5 dark:bg-primary/10 p-7 rounded-[2rem] border border-primary/10">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Múltiplo FIRE</p>
                                    <p className="text-2xl font-black text-primary tabular-nums">
                                        {multiplo.toFixed(0)}x <span className="text-sm font-medium text-primary/60">despesas anuais</span>
                                    </p>
                                </div>
                            </div>

                            {/* Card Explicativo - Checklist FIRE */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-orange-500" />
                                    Próximos Passos para o FIRE
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Calcule sua taxa de poupança atual",
                                        "Reduza despesas desnecessárias",
                                        "Aumente suas fontes de renda",
                                        "Invista em ativos que geram renda passiva",
                                        "Reavalie seu número FIRE anualmente",
                                        "Considere inflação e gastos de saúde futuros"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center">
                            <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8">
                                <Info className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Descubra seu Número FIRE</h3>
                            <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium max-w-sm leading-relaxed">
                                Informe suas despesas mensais para calcular o patrimônio necessário para alcançar a independência financeira.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
