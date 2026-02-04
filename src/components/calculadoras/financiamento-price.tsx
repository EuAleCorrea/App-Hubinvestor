"use client";

import { useState } from "react";
import { calcularFinanciamentoPrice, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import { Building2, Calculator, TrendingDown, Info, ArrowUpRight, Banknote, Calendar, PieChart } from "lucide-react";

export function CalculadoraFinanciamentoPrice() {
    const [valorFinanciado, setValorFinanciado] = useState<string>("300000");
    const [taxaMensal, setTaxaMensal] = useState<string>("0.9");
    const [prazoMeses, setPrazoMeses] = useState<string>("360");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularFinanciamentoPrice> | null>(null);

    const handleCalcular = () => {
        const result = calcularFinanciamentoPrice({
            valorFinanciado: Number(valorFinanciado) || 0,
            taxaMensal: (Number(taxaMensal) || 0) / 100,
            prazoMeses: Number(prazoMeses) || 0,
        });
        setResultado(result);
    };

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Painel de Controle */}
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10">
                            <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Simulador</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Tabela PRICE</h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1">
                                Valor Financiado
                            </label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input
                                    type="number"
                                    value={valorFinanciado}
                                    onChange={(e) => setValorFinanciado(e.target.value)}
                                    className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="300.000"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1">
                                Taxa de Juros Mensal
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={taxaMensal}
                                    onChange={(e) => setTaxaMensal(e.target.value)}
                                    className="w-full h-14 pl-6 pr-12 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="0.9"
                                    step="0.1"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">%</span>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1">
                                Prazo (Meses)
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={prazoMeses}
                                    onChange={(e) => setPrazoMeses(e.target.value)}
                                    className="w-full h-14 pl-6 pr-16 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="360"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Meses</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 ml-1">{Math.floor(Number(prazoMeses || 0) / 12)} anos</p>
                        </div>
                    </div>

                    <button
                        onClick={handleCalcular}
                        className="w-full mt-10 h-14 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                    >
                        Simular Financiamento
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Dashboard de Resultados */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (
                        <>
                            {/* Card Principal */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                        Parcela Fixa Mensal
                                    </p>
                                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                        {formatarMoeda(resultado.parcelaFixa)}
                                    </h1>
                                    <p className="text-white/60 font-medium mt-3">
                                        Valor fixo durante todo o financiamento (Sistema PRICE)
                                    </p>
                                </div>
                                <Building2 className="absolute bottom-6 right-8 w-24 h-24 text-white/10" />
                            </div>

                            {/* Grid de Estatísticas */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                        <Banknote className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Total Pago</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarMoeda(resultado.totalPago)}
                                    </p>
                                </div>

                                <div className="bg-red-50 dark:bg-red-900/20 p-7 rounded-[2rem] border border-red-100 dark:border-red-800/30">
                                    <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-600 mb-5">
                                        <TrendingDown className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-red-600 dark:text-red-400 uppercase tracking-widest mb-2">Total de Juros</p>
                                    <p className="text-2xl font-black text-red-700 dark:text-red-300 tabular-nums">
                                        {formatarMoeda(resultado.totalJuros)}
                                    </p>
                                </div>

                                <div className="bg-slate-900 dark:bg-slate-800 p-7 rounded-[2rem] shadow-card">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                        <PieChart className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">% de Juros</p>
                                    <p className="text-2xl font-black text-white tabular-nums">
                                        {formatarPercentual(resultado.totalJuros / Number(valorFinanciado))}
                                    </p>
                                </div>
                            </div>

                            {/* Tabela de Parcelas */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Primeiras e Últimas Parcelas</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                                <th className="text-left py-3 px-4 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Parcela</th>
                                                <th className="text-right py-3 px-4 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Amortização</th>
                                                <th className="text-right py-3 px-4 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Juros</th>
                                                <th className="text-right py-3 px-4 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Valor</th>
                                                <th className="text-right py-3 px-4 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Saldo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {resultado.parcelas.slice(0, 3).map((p) => (
                                                <tr key={p.numero} className="border-b border-slate-50 dark:border-slate-800/50">
                                                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{p.numero}ª</td>
                                                    <td className="py-3 px-4 text-right text-emerald-600 font-medium">{formatarMoeda(p.amortizacao)}</td>
                                                    <td className="py-3 px-4 text-right text-red-600 font-medium">{formatarMoeda(p.juros)}</td>
                                                    <td className="py-3 px-4 text-right font-bold text-slate-900 dark:text-white">{formatarMoeda(p.parcela)}</td>
                                                    <td className="py-3 px-4 text-right text-slate-500">{formatarMoeda(p.saldoDevedor)}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan={5} className="py-2 text-center text-slate-500 dark:text-slate-400">...</td>
                                            </tr>
                                            {resultado.parcelas.slice(-2).map((p) => (
                                                <tr key={p.numero} className="border-b border-slate-50 dark:border-slate-800/50">
                                                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{p.numero}ª</td>
                                                    <td className="py-3 px-4 text-right text-emerald-600 font-medium">{formatarMoeda(p.amortizacao)}</td>
                                                    <td className="py-3 px-4 text-right text-red-600 font-medium">{formatarMoeda(p.juros)}</td>
                                                    <td className="py-3 px-4 text-right font-bold text-slate-900 dark:text-white">{formatarMoeda(p.parcela)}</td>
                                                    <td className="py-3 px-4 text-right text-slate-500">{formatarMoeda(p.saldoDevedor)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Card Explicativo */}
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-[2rem] border border-amber-100 dark:border-amber-800/30">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <Info className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-1">Sistema PRICE</h4>
                                        <p className="text-sm text-amber-700 dark:text-amber-300/80 leading-relaxed">
                                            A Tabela PRICE mantém parcelas fixas durante todo o financiamento. No início, você paga mais juros
                                            e menos amortização. Com o tempo, essa proporção se inverte. É o sistema mais comum em financiamentos imobiliários.
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
                                Configure o valor, taxa e prazo do financiamento para visualizar as parcelas no sistema PRICE.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
