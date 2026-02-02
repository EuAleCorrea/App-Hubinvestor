"use client";

import { useState } from "react";
import { calcularROI, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { TrendingUp, Info, ArrowUpRight, Target, DollarSign, Percent } from "lucide-react";

export function CalculadoraROI() {
    const [investimento, setInvestimento] = useState<string>("10000");
    const [retorno, setRetorno] = useState<string>("15000");
    const [meses, setMeses] = useState<string>("12");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularROI> | null>(null);

    const handleCalcular = () => {
        const result = calcularROI({ investimentoInicial: Number(investimento) || 0, retornoFinal: Number(retorno) || 0, meses: Number(meses) || 12 });
        setResultado(result);
    };

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Análise</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">ROI</h2>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Investimento Inicial</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={investimento} onChange={(e) => setInvestimento(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Retorno Final</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={retorno} onChange={(e) => setRetorno(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Período (Meses)</label><input type="number" value={meses} onChange={(e) => setMeses(e.target.value)} className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white text-center" /></div>
                    </div>
                    <button onClick={handleCalcular} className="w-full mt-10 h-14 bg-cyan-600 text-white rounded-2xl font-black text-xs uppercase hover:bg-cyan-700 flex items-center justify-center gap-2">Calcular ROI<ArrowUpRight className="w-4 h-4" /></button>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (<>
                        <div className={`p-10 rounded-[2rem] shadow-xl relative overflow-hidden ${resultado.roi >= 0 ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-red-500 to-rose-600'}`}>
                            <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><Percent className="w-4 h-4" />Retorno sobre Investimento</p>
                            <h1 className="text-5xl md:text-6xl font-black text-white">{formatarPercentual(resultado.roi)}</h1>
                            <p className="text-white/60 mt-3">{resultado.roi >= 0 ? 'Investimento lucrativo' : 'Investimento com prejuízo'}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className={`p-7 rounded-[2rem] ${resultado.lucro >= 0 ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30' : 'bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30'}`}><div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${resultado.lucro >= 0 ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'}`}><DollarSign className="w-6 h-6" /></div><p className={`text-[10px] font-black uppercase mb-2 ${resultado.lucro >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{resultado.lucro >= 0 ? 'Lucro' : 'Prejuízo'}</p><p className={`text-2xl font-black ${resultado.lucro >= 0 ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}`}>{formatarMoeda(Math.abs(resultado.lucro))}</p></div>
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5"><TrendingUp className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">ROI Anualizado</p><p className="text-2xl font-black text-slate-900 dark:text-white">{formatarPercentual(resultado.roiAnualizado)}</p></div>
                            <div className="bg-slate-900 p-7 rounded-[2rem]"><div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-5"><Target className="w-6 h-6" /></div><p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Múltiplo</p><p className="text-2xl font-black text-white">{(Number(retorno) / Number(investimento)).toFixed(2)}x</p></div>
                        </div>
                        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-[2rem] border border-cyan-100 dark:border-cyan-800/30"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-600"><Info className="w-5 h-5" /></div><div><h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-1">O que é ROI?</h4><p className="text-sm text-cyan-700 dark:text-cyan-300/80">ROI (Return on Investment) mede a eficiência de um investimento. Fórmula: (Ganho - Custo) / Custo × 100%</p></div></div></div>
                    </>) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center"><div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8"><Info className="w-12 h-12 text-slate-300" /></div><h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Calcule o ROI</h3><p className="text-slate-500 max-w-sm">Descubra o retorno percentual do seu investimento.</p></div>
                    )}
                </div>
            </div>
        </div>
    );
}
