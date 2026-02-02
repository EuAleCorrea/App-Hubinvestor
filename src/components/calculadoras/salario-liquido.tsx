"use client";

import { useState } from "react";
import { calcularSalarioLiquido, formatarMoeda } from "@/lib/calculadoras";
import { Wallet, Info, ArrowUpRight, DollarSign, Users, Receipt, Building } from "lucide-react";

export function CalculadoraSalarioLiquido() {
    const [bruto, setBruto] = useState<string>("5000");
    const [dependentes, setDependentes] = useState<string>("0");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularSalarioLiquido> | null>(null);

    const handleCalcular = () => {
        const result = calcularSalarioLiquido({ salarioBruto: Number(bruto) || 0, dependentes: Number(dependentes) || 0 });
        setResultado(result);
    };

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculadora</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Salário Líquido</h2>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Salário Bruto</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={bruto} onChange={(e) => setBruto(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Dependentes</label><input type="number" value={dependentes} onChange={(e) => setDependentes(e.target.value)} min="0" className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white text-center" /></div>
                    </div>
                    <button onClick={handleCalcular} className="w-full mt-10 h-14 bg-green-600 text-white rounded-2xl font-black text-xs uppercase hover:bg-green-700 flex items-center justify-center gap-2">Calcular<ArrowUpRight className="w-4 h-4" /></button>
                    <div className="mt-8 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl"><p className="text-[10px] font-black text-slate-400 uppercase mb-3">Tabelas 2024</p><p className="text-xs text-slate-600 dark:text-slate-400">INSS: Alíquotas de 7,5% a 14%</p><p className="text-xs text-slate-600 dark:text-slate-400 mt-1">IRRF: Isento até R$ 2.259,20</p></div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (<>
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                            <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><Wallet className="w-4 h-4" />Salário Líquido</p>
                            <h1 className="text-5xl md:text-6xl font-black text-white">{formatarMoeda(resultado.salarioLiquido)}</h1>
                            <p className="text-white/60 mt-3">Valor que você recebe na conta</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-7 rounded-[2rem] border border-orange-100 dark:border-orange-800/30"><div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-600 mb-5"><Building className="w-6 h-6" /></div><p className="text-[10px] font-black text-orange-600 uppercase mb-1">INSS</p><p className="text-3xl font-black text-orange-700">{formatarMoeda(resultado.inss)}</p><p className="text-xs text-orange-600 mt-2">Faixa: {resultado.faixaINSS}</p></div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-7 rounded-[2rem] border border-blue-100 dark:border-blue-800/30"><div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 mb-5"><Receipt className="w-6 h-6" /></div><p className="text-[10px] font-black text-blue-600 uppercase mb-1">IRRF</p><p className="text-3xl font-black text-blue-700">{formatarMoeda(resultado.irrf)}</p><p className="text-xs text-blue-600 mt-2">Faixa: {resultado.faixaIRRF}</p></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5"><DollarSign className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Salário Bruto</p><p className="text-2xl font-black text-slate-900 dark:text-white">{formatarMoeda(Number(bruto))}</p></div>
                            <div className="bg-red-50 dark:bg-red-900/20 p-7 rounded-[2rem] border border-red-100 dark:border-red-800/30"><div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-600 mb-5"><Receipt className="w-6 h-6" /></div><p className="text-[10px] font-black text-red-600 uppercase mb-2">Total Descontos</p><p className="text-2xl font-black text-red-700">{formatarMoeda(resultado.totalDescontos)}</p></div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-[2rem] border border-green-100 dark:border-green-800/30"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600"><Info className="w-5 h-5" /></div><div><h4 className="font-bold text-green-800 dark:text-green-200 mb-1">Cálculo CLT</h4><p className="text-sm text-green-700 dark:text-green-300/80">Descontos obrigatórios: INSS (progressivo) e IRRF (com deduções). Dependentes reduzem a base do IRRF em R$ 189,59 cada.</p></div></div></div>
                    </>) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center"><div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-8"><Info className="w-12 h-12 text-slate-300" /></div><h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Calcule seu Líquido</h3><p className="text-slate-500 max-w-sm">Descubra quanto você recebe após INSS e IRRF com as tabelas 2024.</p></div>
                    )}
                </div>
            </div>
        </div>
    );
}
