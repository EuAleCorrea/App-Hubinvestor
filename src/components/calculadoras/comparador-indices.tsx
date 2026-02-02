"use client";

import { useState } from "react";
import { formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { BarChart3, Info, ArrowUpRight, TrendingUp, Calendar, DollarSign } from "lucide-react";

export function CalculadoraComparadorIndices() {
    const [valor, setValor] = useState<string>("10000");
    const [prazo, setPrazo] = useState<string>("12");
    const [cdi, setCdi] = useState<string>("12.25");
    const [ipca, setIpca] = useState<string>("4.5");

    const taxaCDI = (Number(cdi) || 0) / 100;
    const taxaIPCA = (Number(ipca) || 0) / 100;
    const meses = Number(prazo) || 12;
    const valorInicial = Number(valor) || 0;

    const taxaMensalCDI = Math.pow(1 + taxaCDI, 1 / 12) - 1;
    const taxaMensalIPCA = Math.pow(1 + taxaIPCA, 1 / 12) - 1;

    const valorFinalCDI = valorInicial * Math.pow(1 + taxaMensalCDI, meses);
    const valorFinalIPCA = valorInicial * Math.pow(1 + taxaMensalIPCA, meses);

    const rendimentoCDI = valorFinalCDI - valorInicial;
    const rendimentoIPCA = valorFinalIPCA - valorInicial;
    const rendimentoReal = rendimentoCDI - rendimentoIPCA;
    const taxaReal = taxaCDI - taxaIPCA;
    const melhor = rendimentoCDI > rendimentoIPCA ? 'CDI' : 'IPCA';

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Análise</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">CDI vs IPCA</h2>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Valor Investido</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={valor} onChange={(e) => setValor(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Prazo (Meses)</label><input type="number" value={prazo} onChange={(e) => setPrazo(e.target.value)} className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white text-center" /></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] font-black text-teal-600 uppercase mb-3">CDI (a.a.)</label><div className="relative"><input type="number" value={cdi} onChange={(e) => setCdi(e.target.value)} className="w-full h-14 pl-6 pr-10 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-2xl text-lg font-bold text-teal-700" step="0.25" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-500">%</span></div></div>
                            <div><label className="block text-[10px] font-black text-orange-600 uppercase mb-3">IPCA (a.a.)</label><div className="relative"><input type="number" value={ipca} onChange={(e) => setIpca(e.target.value)} className="w-full h-14 pl-6 pr-10 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl text-lg font-bold text-orange-700" step="0.25" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500">%</span></div></div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-8 rounded-[2rem] shadow-xl"><p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-2">Rendimento CDI</p><h2 className="text-4xl font-black text-white">{formatarMoeda(rendimentoCDI)}</h2><p className="text-white/60 mt-2">Valor final: {formatarMoeda(valorFinalCDI)}</p></div>
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-[2rem] shadow-xl"><p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-2">Inflação (IPCA)</p><h2 className="text-4xl font-black text-white">{formatarMoeda(rendimentoIPCA)}</h2><p className="text-white/60 mt-2">Perda de poder: {formatarMoeda(valorFinalIPCA)}</p></div>
                    </div>
                    <div className={`p-10 rounded-[2rem] shadow-xl ${rendimentoReal >= 0 ? 'bg-emerald-600' : 'bg-red-600'}`}><p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><TrendingUp className="w-4 h-4" />Rendimento Real</p><h1 className="text-5xl font-black text-white">{formatarMoeda(rendimentoReal)}</h1><p className="text-white/60 mt-3">{rendimentoReal >= 0 ? 'Seu dinheiro ganhou poder de compra' : 'Você perdeu poder de compra'}</p></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5"><TrendingUp className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Taxa Real (CDI - IPCA)</p><p className="text-3xl font-black text-slate-900 dark:text-white">{formatarPercentual(taxaReal)}</p></div>
                        <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 mb-5"><Calendar className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Período Analisado</p><p className="text-3xl font-black text-slate-900 dark:text-white">{prazo} meses</p></div>
                    </div>
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-[2rem] border border-teal-100 dark:border-teal-800/30"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-600"><Info className="w-5 h-5" /></div><div><h4 className="font-bold text-teal-800 dark:text-teal-200 mb-1">Rendimento Real</h4><p className="text-sm text-teal-700 dark:text-teal-300/80">O rendimento real é o que sobra após descontar a inflação. Um CDI de 12% com IPCA de 4% gera aproximadamente 8% de ganho real.</p></div></div></div>
                </div>
            </div>
        </div>
    );
}
