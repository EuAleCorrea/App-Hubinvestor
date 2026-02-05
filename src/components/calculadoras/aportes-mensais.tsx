"use client";

import { useState } from "react";
import { calcularAportesMensais, formatarMoeda, formatarPercentual } from "@/lib/calculadoras";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Wallet, Calculator, PiggyBank, TrendingUp, ArrowUp, Info, ArrowUpRight } from "lucide-react";

export function CalculadoraAportesMensais() {
    const [capitalInicial, setCapitalInicial] = useState<string>("5000");
    const [aporteMensal, setAporteMensal] = useState<string>("500");
    const [taxaMensal, setTaxaMensal] = useState<string>("0.8");
    const [meses, setMeses] = useState<string>("60");
    const [resultado, setResultado] = useState<ReturnType<typeof calcularAportesMensais> | null>(null);

    const handleCalcular = () => {
        const result = calcularAportesMensais({
            capitalInicial: Number(capitalInicial) || 0,
            aporteMensal: Number(aporteMensal) || 0,
            taxaMensal: (Number(taxaMensal) || 0) / 100,
            meses: Number(meses) || 0,
        });
        setResultado(result);
    };

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Painel de Controle (Inputs) */}
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-6 sm:p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10">
                            <Wallet className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Configuração</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Aportes Mensais</h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Capital Inicial
                            </label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input
                                    type="number"
                                    value={capitalInicial}
                                    onChange={(e) => setCapitalInicial(e.target.value)}
                                    className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="5.000"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Aporte Mensal
                            </label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input
                                    type="number"
                                    value={aporteMensal}
                                    onChange={(e) => setAporteMensal(e.target.value)}
                                    className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="500"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Taxa de Juros Mensal
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={taxaMensal}
                                    onChange={(e) => setTaxaMensal(e.target.value)}
                                    className="w-full h-14 pl-6 pr-12 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="0.8"
                                    step="0.1"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">%</span>
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">
                                Período Total
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={meses}
                                    onChange={(e) => setMeses(e.target.value)}
                                    className="w-full h-14 pl-6 pr-16 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                    placeholder="60"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Meses</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleCalcular}
                        className="w-full mt-10 h-14 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                    >
                        Realizar Projeção
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Dashboard de Resultados */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    {resultado ? (
                        <>
                            {/* Card de Valor Final */}
                            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                        Valor Futuro Projetado
                                    </p>
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                        <div>
                                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                                                {formatarMoeda(resultado.valorFuturo)}
                                            </h1>
                                            <div className="mt-4 flex flex-wrap gap-3">
                                                <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
                                                    <ArrowUp className="w-3.5 h-3.5" /> Lucro: {formatarMoeda(resultado.totalJuros)}
                                                </span>
                                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-xl text-xs font-bold tabular-nums">
                                                    Rentabilidade: {formatarPercentual(resultado.totalJuros / resultado.totalInvestido)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Total Investido</p>
                                            <p className="text-xl font-black text-slate-700 dark:text-slate-200">{formatarMoeda(resultado.totalInvestido)}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Visual Decor */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                            </div>

                            {/* Grid de Estatísticas Rápidas */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-5">
                                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary">
                                        <PiggyBank className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Total de Aportes</p>
                                        <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                                            {Number(meses)} meses
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-slate-900 dark:bg-slate-800 p-7 rounded-[2rem] shadow-card flex items-center gap-5">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary">
                                        <TrendingUp className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Taxa Efetiva Anual</p>
                                        <p className="text-2xl font-black text-white tabular-nums">
                                            {formatarPercentual(Math.pow(1 + Number(taxaMensal) / 100, 12) - 1)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Gráfico de Evolução Patrimonial */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card">
                                <div className="flex items-center justify-between mb-10">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Evolução do Patrimônio</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                                            Montante
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                                            Investido
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[300px] w-full mt-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={resultado.evolucaoMensal}>
                                            <defs>
                                                <linearGradient id="primaryGradientAportes" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#13ecb6" stopOpacity={0.2} />
                                                    <stop offset="100%" stopColor="#13ecb6" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="investidoGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.15} />
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
                                                dy={10}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: "bold" }}
                                                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
                                                dx={-10}
                                            />
                                            <Tooltip
                                                cursor={{ stroke: '#13ecb6', strokeWidth: 1.5, strokeDasharray: '4 4' }}
                                                content={({ active, payload, label }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="bg-white dark:bg-slate-800 p-5 shadow-premium rounded-2xl border border-slate-100 dark:border-slate-700 text-left min-w-[200px]">
                                                                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Mês {label}</p>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-xs text-slate-500">Montante:</span>
                                                                        <span className="text-lg font-black text-primary tabular-nums">{formatarMoeda(Number(payload[0]?.value))}</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-xs text-slate-500">Investido:</span>
                                                                        <span className="text-sm font-bold text-emerald-600 tabular-nums">{formatarMoeda(Number(payload[1]?.value))}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="montante"
                                                stroke="#13ecb6"
                                                strokeWidth={3}
                                                fill="url(#primaryGradientAportes)"
                                                animationDuration={1500}
                                                activeDot={{ r: 5, fill: '#13ecb6', stroke: '#fff', strokeWidth: 2 }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="investido"
                                                stroke="#10b981"
                                                strokeWidth={2}
                                                strokeDasharray="4 4"
                                                fill="url(#investidoGradient)"
                                                animationDuration={1500}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
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
                                Configure seu capital inicial, aporte mensal e taxa de rendimento para visualizar a evolução do seu patrimônio.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
