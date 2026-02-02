"use client";

import { useState } from "react";
import { calcularRendaFixa, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { Landmark, Info, ArrowUpRight, DollarSign, TrendingUp, Receipt } from "lucide-react";

type TipoInvestimento = 'cdb' | 'lci' | 'lca';

export function CalculadoraRendaFixa() {
    const [valor, setValor] = useState<string>("10000");
    const [taxaCDI, setTaxaCDI] = useState<string>("12.25");
    const [percentual, setPercentual] = useState<string>("100");
    const [meses, setMeses] = useState<string>("12");
    const [tipo, setTipo] = useState<TipoInvestimento>("cdb");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularRendaFixa> | null>(null);

    const handleCalcular = () => {
        const result = calcularRendaFixa({ valorInvestido: Number(valor) || 0, taxaAnual: (Number(taxaCDI) || 0) / 100, meses: Number(meses) || 0, tipo, percentualCDI: Number(percentual) || 100 });
        setResultado(result);
    };

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                            <Landmark className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Simulador</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Renda Fixa</h2>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="grid grid-cols-3 gap-2">
                            {(['cdb', 'lci', 'lca'] as TipoInvestimento[]).map((t) => (
                                <button key={t} onClick={() => setTipo(t)} className={`py-3 rounded-xl text-xs font-black uppercase ${tipo === t ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>{t.toUpperCase()}</button>
                            ))}
                        </div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Valor Investido</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={valor} onChange={(e) => setValor(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Taxa CDI a.a.</label><div className="relative"><input type="number" value={taxaCDI} onChange={(e) => setTaxaCDI(e.target.value)} className="w-full h-14 pl-6 pr-10 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" step="0.25" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span></div></div>
                            <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">% do CDI</label><div className="relative"><input type="number" value={percentual} onChange={(e) => setPercentual(e.target.value)} className="w-full h-14 pl-6 pr-10 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span></div></div>
                        </div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Prazo (Meses)</label><input type="number" value={meses} onChange={(e) => setMeses(e.target.value)} className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white text-center" /></div>
                    </div>
                    <button onClick={handleCalcular} className="w-full mt-8 h-14 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase hover:bg-indigo-700 flex items-center justify-center gap-2">Simular<ArrowUpRight className="w-4 h-4" /></button>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (<>
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                            <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><DollarSign className="w-4 h-4" />Valor Líquido Final</p>
                            <h1 className="text-5xl md:text-6xl font-black text-white">{formatarMoeda(resultado.valorLiquido)}</h1>
                            <div className="mt-4 flex items-center gap-3">{resultado.isento && <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">Isento de IR</span>}<span className="text-white/60">{tipo.toUpperCase()} • {percentual}% do CDI</span></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-7 rounded-[2rem] border border-emerald-100 dark:border-emerald-800/30"><div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-5"><TrendingUp className="w-6 h-6" /></div><p className="text-[10px] font-black text-emerald-600 uppercase mb-2">Rendimento Líquido</p><p className="text-2xl font-black text-emerald-700">{formatarMoeda(resultado.rendimentoLiquido)}</p></div>
                            {!resultado.isento && <div className="bg-red-50 dark:bg-red-900/20 p-7 rounded-[2rem] border border-red-100 dark:border-red-800/30"><div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-600 mb-5"><Receipt className="w-6 h-6" /></div><p className="text-[10px] font-black text-red-600 uppercase mb-2">IR Retido</p><p className="text-2xl font-black text-red-700">{formatarMoeda(resultado.imposto)}</p></div>}
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5"><DollarSign className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Rendimento Bruto</p><p className="text-2xl font-black text-slate-900 dark:text-white">{formatarMoeda(resultado.rendimentoBruto)}</p></div>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-[2rem] border border-indigo-100 dark:border-indigo-800/30"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600"><Info className="w-5 h-5" /></div><div><h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-1">{tipo === 'cdb' ? 'CDB' : tipo === 'lci' ? 'LCI' : 'LCA'}</h4><p className="text-sm text-indigo-700 dark:text-indigo-300/80">{tipo === 'cdb' ? 'Certificado de Depósito Bancário: tributado pela tabela regressiva de IR.' : 'Letras de Crédito: isentas de IR para pessoa física.'}</p></div></div></div>
                    </>) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center"><div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8"><Info className="w-12 h-12 text-slate-300" /></div><h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Simule Renda Fixa</h3><p className="text-slate-500 max-w-sm">Compare CDB, LCI e LCA com diferentes taxas.</p></div>
                    )}
                </div>
            </div>
        </div>
    );
}
