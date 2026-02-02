"use client";

import { useState } from "react";
import { calcularAposentadoria, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { Users, Target, Wallet, Info, ArrowUpRight, Flame, Clock } from "lucide-react";

export function CalculadoraAposentadoria() {
    const [idadeAtual, setIdadeAtual] = useState<string>("30");
    const [idadeAposentadoria, setIdadeAposentadoria] = useState<string>("60");
    const [rendaDesejada, setRendaDesejada] = useState<string>("10000");
    const [patrimonioAtual, setPatrimonioAtual] = useState<string>("50000");
    const [taxaMensal, setTaxaMensal] = useState<string>("0.6");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularAposentadoria> | null>(null);

    const handleCalcular = () => {
        const result = calcularAposentadoria({
            idadeAtual: Number(idadeAtual) || 0,
            idadeAposentadoria: Number(idadeAposentadoria) || 0,
            rendaDesejada: Number(rendaDesejada) || 0,
            patrimonioAtual: Number(patrimonioAtual) || 0,
            taxaMensal: (Number(taxaMensal) || 0) / 100,
        });
        setResultado(result);
    };

    const anosRestantes = Number(idadeAposentadoria || 0) - Number(idadeAtual || 0);

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Planejamento</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Aposentadoria</h2>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Idade Atual</label><input type="number" value={idadeAtual} onChange={(e) => setIdadeAtual(e.target.value)} className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white text-center" /></div>
                            <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Aposentar</label><input type="number" value={idadeAposentadoria} onChange={(e) => setIdadeAposentadoria(e.target.value)} className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white text-center" /></div>
                        </div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Renda Desejada</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={rendaDesejada} onChange={(e) => setRendaDesejada(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Patrimônio Atual</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={patrimonioAtual} onChange={(e) => setPatrimonioAtual(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Rentabilidade Mensal</label><div className="relative"><input type="number" value={taxaMensal} onChange={(e) => setTaxaMensal(e.target.value)} className="w-full h-14 pl-6 pr-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" step="0.1" /><span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">%</span></div></div>
                    </div>
                    <button onClick={handleCalcular} className="w-full mt-8 h-14 bg-orange-600 text-white rounded-2xl font-black text-xs uppercase hover:bg-orange-700 flex items-center justify-center gap-2">Calcular Plano<ArrowUpRight className="w-4 h-4" /></button>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (<>
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                            <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><Flame className="w-4 h-4" />Aporte Mensal Necessário</p>
                            <h1 className="text-5xl md:text-6xl font-black text-white">{formatarMoeda(resultado.aporteMensalNecessario)}</h1>
                            <p className="text-white/60 mt-4">Invista todo mês para atingir sua meta.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5"><Target className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Patrimônio Necessário</p><p className="text-2xl font-black text-slate-900 dark:text-white">{formatarMoeda(resultado.patrimonioNecessario)}</p></div>
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-5"><Wallet className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Já Acumulado</p><p className="text-2xl font-black text-slate-900 dark:text-white">{formatarMoeda(resultado.patrimonioAtual)}</p><p className="text-xs text-slate-400 mt-1">{formatarPercentual(resultado.patrimonioAtual / resultado.patrimonioNecessario)} do objetivo</p></div>
                            <div className="bg-slate-900 p-7 rounded-[2rem]"><div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400 mb-5"><Clock className="w-6 h-6" /></div><p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Tempo Restante</p><p className="text-2xl font-black text-white">{resultado.mesesAteAposentadoria} meses</p><p className="text-xs text-slate-500 mt-1">{anosRestantes} anos</p></div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800"><h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Progresso</h3><div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: `${Math.min(100, (resultado.patrimonioAtual / resultado.patrimonioNecessario) * 100)}%` }} /></div><div className="flex justify-between text-sm mt-2"><span className="text-slate-500">{formatarMoeda(resultado.patrimonioAtual)}</span><span className="text-slate-900 dark:text-white">{formatarMoeda(resultado.patrimonioNecessario)}</span></div></div>
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-[2rem] border border-orange-100 dark:border-orange-800/30"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600"><Info className="w-5 h-5" /></div><div><h4 className="font-bold text-orange-800 dark:text-orange-200 mb-1">Regra dos 4%</h4><p className="text-sm text-orange-700 dark:text-orange-300/80">Você pode sacar 4% do patrimônio por ano sem esgotar seus recursos.</p></div></div></div>
                    </>) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center"><div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8"><Info className="w-12 h-12 text-slate-300" /></div><h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Planeje sua Aposentadoria</h3><p className="text-slate-500 max-w-sm">Informe sua idade e renda desejada para descobrir quanto investir.</p></div>
                    )}
                </div>
            </div>
        </div>
    );
}
