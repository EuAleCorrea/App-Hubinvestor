"use client";

import { useState } from "react";
import { calcularJurosSimples, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { TrendingUp, Info, ArrowUpRight, DollarSign, Percent } from "lucide-react";

export function CalculadoraJurosSimples() {
    const [capital, setCapital] = useState<string>("10000");
    const [taxa, setTaxa] = useState<string>("1");
    const [meses, setMeses] = useState<string>("12");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularJurosSimples> | null>(null);

    const handleCalcular = () => {
        const result = calcularJurosSimples({ capitalInicial: Number(capital) || 0, taxaMensal: (Number(taxa) || 0) / 100, meses: Number(meses) || 0 });
        setResultado(result);
    };

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Simulador</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Juros Simples</h2>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">Capital Inicial</label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input type="number" value={capital} onChange={(e) => setCapital(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm" />
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">Taxa Mensal</label>
                            <div className="relative">
                                <input type="number" value={taxa} onChange={(e) => setTaxa(e.target.value)} className="w-full h-14 pl-6 pr-12 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm" step="0.1" />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">%</span>
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">Período (Meses)</label>
                            <input type="number" value={meses} onChange={(e) => setMeses(e.target.value)} className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white text-center transition-all shadow-sm" />
                        </div>
                    </div>
                    <button onClick={handleCalcular} className="w-full mt-10 h-14 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95">
                        Calcular
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (<>
                        <div className="bg-gradient-to-br from-primary to-blue-600 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                    Montante Final
                                </p>
                                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">{formatarMoeda(resultado.montanteFinal)}</h1>
                                <p className="text-white/60 font-medium mt-3">Capital + juros após {meses} meses</p>
                            </div>
                            <DollarSign className="absolute bottom-6 right-8 w-24 h-24 text-white/10" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Capital Inicial</p>
                                <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">{formatarMoeda(Number(capital))}</p>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-7 rounded-[2rem] border border-emerald-100 dark:border-emerald-800/30">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-5">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">Total de Juros</p>
                                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300 tabular-nums">{formatarMoeda(resultado.totalJuros)}</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-5">
                                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary mb-5">
                                    <Percent className="w-6 h-6" />
                                </div>
                                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Rendimento Total</p>
                                <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">{formatarPercentual(resultado.totalJuros / Number(capital))}</p>
                            </div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-[2rem] border border-amber-100 dark:border-amber-800/30">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                    <Info className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-1">Juros Simples vs Compostos</h4>
                                    <p className="text-sm text-amber-700 dark:text-amber-300/80 leading-relaxed">Nos juros simples, os juros são calculados sempre sobre o capital inicial. Nos compostos, incidem sobre o montante acumulado (juros sobre juros).</p>
                                </div>
                            </div>
                        </div>
                    </>) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center">
                            <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8">
                                <Info className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Simulação Pendente</h3>
                            <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium max-w-sm leading-relaxed">Fórmula: J = C × i × n</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
