"use client";

import { useState } from "react";
import { calcularBrutoLiquido, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { Receipt, TrendingUp, Info, ArrowUpRight, Percent, Calendar, DollarSign } from "lucide-react";

const FAIXAS_IR = [
    { prazo: "Até 180 dias", aliquota: 22.5, cor: "text-red-500" },
    { prazo: "181 a 360 dias", aliquota: 20, cor: "text-orange-500" },
    { prazo: "361 a 720 dias", aliquota: 17.5, cor: "text-yellow-500" },
    { prazo: "Acima de 720 dias", aliquota: 15, cor: "text-emerald-500" },
];

export function CalculadoraImpostoRenda() {
    const [valorBruto, setValorBruto] = useState<string>("10000");
    const [dias, setDias] = useState<string>("730");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularBrutoLiquido> | null>(null);

    const handleCalcular = () => {
        const result = calcularBrutoLiquido({ valorBruto: Number(valorBruto) || 0, diasAplicacao: Number(dias) || 0 });
        setResultado(result);
    };

    const mesesEquivalente = Math.round(Number(dias || 0) / 30);

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center">
                            <Receipt className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tributação</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">IR Investimentos</h2>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Rendimento Bruto</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={valorBruto} onChange={(e) => setValorBruto(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Prazo (Dias)</label><div className="relative"><input type="number" value={dias} onChange={(e) => setDias(e.target.value)} className="w-full h-14 pl-6 pr-16 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /><span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase">Dias</span></div><p className="text-xs text-slate-400 mt-2">≈ {mesesEquivalente} meses ({(mesesEquivalente / 12).toFixed(1)} anos)</p></div>
                    </div>
                    <button onClick={handleCalcular} className="w-full mt-10 h-14 bg-violet-600 text-white rounded-2xl font-black text-xs uppercase hover:bg-violet-700 flex items-center justify-center gap-2">Calcular IR<ArrowUpRight className="w-4 h-4" /></button>
                    <div className="mt-8 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-3">Tabela Regressiva IR</p>
                        <div className="space-y-2">
                            {FAIXAS_IR.map((f, i) => (<div key={i} className="flex items-center justify-between text-sm"><span className="text-slate-600 dark:text-slate-400">{f.prazo}</span><span className={`font-bold ${f.cor}`}>{f.aliquota}%</span></div>))}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (<>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-emerald-600 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                                <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><DollarSign className="w-4 h-4" />Valor Líquido</p>
                                <h1 className="text-5xl font-black text-white">{formatarMoeda(resultado.valorLiquido)}</h1>
                                <p className="text-white/60 mt-3">Valor após desconto do IR</p>
                            </div>
                            <div className="bg-red-500 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                                <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><Receipt className="w-4 h-4" />IR Retido</p>
                                <h1 className="text-5xl font-black text-white">{formatarMoeda(resultado.imposto)}</h1>
                                <p className="text-white/60 mt-3">Imposto de Renda na fonte</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-600 mb-5"><Percent className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Alíquota Aplicada</p><p className="text-3xl font-black text-slate-900 dark:text-white">{formatarPercentual(resultado.aliquota)}</p></div>
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5"><TrendingUp className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Rendimento Bruto</p><p className="text-2xl font-black text-slate-900 dark:text-white">{formatarMoeda(Number(valorBruto))}</p></div>
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 mb-5"><Calendar className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Prazo</p><p className="text-2xl font-black text-slate-900 dark:text-white">{dias} dias</p></div>
                        </div>
                        <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-[2rem] border border-violet-100 dark:border-violet-800/30"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-600"><Info className="w-5 h-5" /></div><div><h4 className="font-bold text-violet-800 dark:text-violet-200 mb-1">Tabela Regressiva</h4><p className="text-sm text-violet-700 dark:text-violet-300/80">Quanto mais tempo você mantém o investimento, menor a alíquota de IR. Após 2 anos (720 dias), você paga apenas 15% sobre os rendimentos.</p></div></div></div>
                    </>) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center"><div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8"><Info className="w-12 h-12 text-slate-300" /></div><h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Calcule o IR</h3><p className="text-slate-500 max-w-sm">Informe o rendimento bruto e prazo em dias para calcular o imposto de renda.</p></div>
                    )}
                </div>
            </div>
        </div>
    );
}
