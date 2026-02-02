"use client";

import { useState } from "react";
import { calcularFinanciamentoSAC, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Building2, TrendingDown, Info, ArrowUpRight, Banknote, PieChart, ArrowDown } from "lucide-react";

export function CalculadoraFinanciamentoSAC() {
    const [valorFinanciado, setValorFinanciado] = useState<string>("300000");
    const [taxaMensal, setTaxaMensal] = useState<string>("0.9");
    const [prazoMeses, setPrazoMeses] = useState<string>("360");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularFinanciamentoSAC> | null>(null);

    const handleCalcular = () => {
        const result = calcularFinanciamentoSAC({
            valorFinanciado: Number(valorFinanciado) || 0,
            taxaMensal: (Number(taxaMensal) || 0) / 100,
            prazoMeses: Number(prazoMeses) || 0,
        });
        setResultado(result);
    };

    // Dados para o gráfico (amostragem)
    const dadosGrafico = resultado?.parcelas
        .filter((_, i) => i % Math.ceil(resultado.parcelas.length / 24) === 0 || i === resultado.parcelas.length - 1)
        .map(p => ({
            mes: p.numero,
            parcela: p.parcela,
            juros: p.juros,
            amortizacao: p.amortizacao,
        })) || [];

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Painel de Controle */}
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/10">
                            <Building2 className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Simulador</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Tabela SAC</h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1">
                                Valor Financiado
                            </label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
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
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1">
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
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1">
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
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Meses</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-2 ml-1">{Math.floor(Number(prazoMeses || 0) / 12)} anos</p>
                        </div>
                    </div>

                    <button
                        onClick={handleCalcular}
                        className="w-full mt-10 h-14 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                    >
                        Simular Financiamento
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Dashboard de Resultados */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (
                        <>
                            {/* Cards de Primeira e Última Parcela */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-2">Primeira Parcela</p>
                                    <h2 className="text-4xl font-black text-white tracking-tighter">
                                        {formatarMoeda(resultado.primeiraParcela)}
                                    </h2>
                                    <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm">
                                        <ArrowDown className="w-4 h-4 text-emerald-400" />
                                        Parcelas decrescem mensalmente
                                    </div>
                                </div>
                                <div className="bg-emerald-600 p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                                    <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-2">Última Parcela</p>
                                    <h2 className="text-4xl font-black text-white tracking-tighter">
                                        {formatarMoeda(resultado.ultimaParcela)}
                                    </h2>
                                    <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                                        Economia: {formatarMoeda(resultado.primeiraParcela - resultado.ultimaParcela)}/mês
                                    </div>
                                </div>
                            </div>

                            {/* Grid de Estatísticas */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                        <Banknote className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Pago</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarMoeda(resultado.totalPago)}
                                    </p>
                                </div>

                                <div className="bg-red-50 dark:bg-red-900/20 p-7 rounded-[2rem] border border-red-100 dark:border-red-800/30">
                                    <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-600 mb-5">
                                        <TrendingDown className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">Total de Juros</p>
                                    <p className="text-2xl font-black text-red-700 dark:text-red-300 tabular-nums">
                                        {formatarMoeda(resultado.totalJuros)}
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 mb-5">
                                        <PieChart className="w-6 h-6" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">% de Juros</p>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                        {formatarPercentual(resultado.totalJuros / Number(valorFinanciado))}
                                    </p>
                                </div>
                            </div>

                            {/* Gráfico de Evolução das Parcelas */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Evolução das Parcelas</h3>
                                <div className="h-[280px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={dadosGrafico}>
                                            <defs>
                                                <linearGradient id="parcelaGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                                                    <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                                            <XAxis
                                                dataKey="mes"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: "bold" }}
                                                tickFormatter={(value) => `${value}m`}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: "bold" }}
                                                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
                                            />
                                            <Tooltip
                                                content={({ active, payload, label }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-xl border border-slate-100 dark:border-slate-700 text-left">
                                                                <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Mês {label}</p>
                                                                <p className="text-lg font-black text-emerald-600">{formatarMoeda(Number(payload[0]?.value))}</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="parcela"
                                                stroke="#10b981"
                                                strokeWidth={3}
                                                fill="url(#parcelaGradient)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Card Explicativo */}
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-[2rem] border border-emerald-100 dark:border-emerald-800/30">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <Info className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-1">Sistema SAC</h4>
                                        <p className="text-sm text-emerald-700 dark:text-emerald-300/80 leading-relaxed">
                                            O Sistema de Amortização Constante (SAC) tem parcelas decrescentes. A amortização é fixa,
                                            enquanto os juros diminuem ao longo do tempo. Você paga mais no início, mas menos juros no total comparado ao PRICE.
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
                            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm leading-relaxed">
                                Configure o valor, taxa e prazo para visualizar as parcelas decrescentes do sistema SAC.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
