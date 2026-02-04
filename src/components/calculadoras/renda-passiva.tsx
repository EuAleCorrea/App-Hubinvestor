"use client";

import { useState } from "react";
import { calcularRendaPassiva, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { PiggyBank, Calculator, Wallet, TrendingUp, Info, ArrowUpRight, DollarSign, Calendar } from "lucide-react";

export function CalculadoraRendaPassiva() {
    const [patrimonio, setPatrimonio] = useState<string>("1000000");
    const [taxaAnual, setTaxaAnual] = useState<string>("4");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularRendaPassiva> | null>(null);

    const handleCalcular = () => {
        const result = calcularRendaPassiva({
            patrimonio: Number(patrimonio) || 0,
            taxaAnual: (Number(taxaAnual) || 4) / 100,
        });
        setResultado(result);
    };

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Painel de Controle (Inputs) */}
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10">
                            <PiggyBank className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Configuração</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Renda Passiva</h2>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Patrimônio Acumulado
                            </label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input
                                    type="number"
                                    value={patrimonio}
                                    onChange={(e) => setPatrimonio(e.target.value)}
                                    className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="1.000.000"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Taxa de Retirada Anual
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={taxaAnual}
                                    onChange={(e) => setTaxaAnual(e.target.value)}
                                    className="w-full h-14 pl-6 pr-12 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="4"
                                    step="0.5"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">%</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 ml-1">Regra dos 4% é o padrão FIRE seguro</p>
                        </div>
                    </div>

                    <button
                        onClick={handleCalcular}
                        className="w-full mt-10 h-14 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                    >
                        Calcular Renda
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Dashboard de Resultados */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (
                        <>
                            {/* Card Principal - Renda Mensal */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                        Renda Mensal Estimada
                                    </p>
                                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                        {formatarMoeda(resultado.rendaMensal)}
                                    </h1>
                                    <p className="text-white/60 font-medium mt-3">
                                        Valor que você pode sacar mensalmente sem comprometer seu patrimônio.
                                    </p>
                                </div>
                                {/* Visual Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                <DollarSign className="absolute bottom-6 right-8 w-24 h-24 text-white/10" />
                            </div>

                            {/* Grid de Estatísticas */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Renda Anual</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarMoeda(resultado.rendaAnual)}
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-5">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Taxa Utilizada</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarPercentual(resultado.taxaUtilizada)} <span className="text-sm font-medium text-slate-500 dark:text-slate-400">ao ano</span>
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary mb-5">
                                        <Wallet className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Patrimônio Base</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarMoeda(Number(patrimonio))}
                                    </p>
                                </div>
                            </div>

                            {/* Card Explicativo */}
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-[2rem] border border-amber-100 dark:border-amber-800/30">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <Info className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-1">Regra dos 4%</h4>
                                        <p className="text-sm text-amber-700 dark:text-amber-300/80 leading-relaxed">
                                            A regra dos 4% é um princípio do movimento FIRE que sugere que você pode sacar 4% do seu patrimônio
                                            por ano sem esgotar seus recursos ao longo de 30 anos, considerando inflação e retornos do mercado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center">
                            <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8">
                                <Info className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Simulação Pendente</h3>
                            <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium max-w-sm leading-relaxed">
                                Informe seu patrimônio acumulado para descobrir quanto pode sacar mensalmente sem comprometer sua independência financeira.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
