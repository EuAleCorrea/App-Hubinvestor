"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    PieChart,
    BarChart3,
    Filter,
    Plus,
    Search,
    ChevronRight,
    Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InvestimentosPage() {
    return (
        <DashboardLayout>
            <div className="space-y-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Minha Carteira</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                            Seus <span className="text-primary italic">Investimentos</span>
                        </h1>
                        <p className="text-slate-500 font-medium mt-2 text-lg">
                            Gestão profissional e análise detalhada do seu patrimônio.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                        <Button variant="secondary" size="lg" className="rounded-2xl w-full sm:w-auto min-h-[56px]">
                            <Filter className="w-5 h-5 mr-2" /> Filtrar
                        </Button>
                        <Button variant="primary" size="lg" className="rounded-2xl bg-primary text-background shadow-glow w-full sm:w-auto min-h-[56px]">
                            <Plus className="w-5 h-5 mr-2" /> Novo Aporte
                        </Button>
                    </div>
                </div>

                {/* Resumo Financeiro - Estilo Premium Meta */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Total Investido", value: "R$ 412.890,00", change: "+12.5%", isPositive: true },
                        { label: "Rendimento Mensal", value: "R$ 3.412,02", change: "+2.1%", isPositive: true },
                        { label: "Dividendos Estimados", value: "R$ 1.890,45", change: "+5.4%", isPositive: true },
                        { label: "Patrimônio Total", value: "R$ 475.432,98", change: "-0.4%", isPositive: false },
                    ].map((item, i) => (
                        <div key={i} className="bg-card p-6 rounded-[2rem] border border-border shadow-card hover:shadow-premium transition-all group">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{item.label}</p>
                            <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">{item.value}</h3>
                            <div className={cn(
                                "inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                                item.isPositive
                                    ? "bg-primary/10 text-primary border-primary/20"
                                    : "bg-red-500/10 text-red-400 border-red-500/20"
                            )}>
                                {item.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                {item.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seção Central - Gráficos e Ativos */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Gráfico de Evolução */}
                    <Card className="lg:col-span-2 overflow-hidden border-border bg-card">
                        <CardHeader className="flex flex-row items-center justify-between pb-8">
                            <div>
                                <CardTitle className="text-xl">Evolução de Patrimônio</CardTitle>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Últimos 12 meses</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-primary text-background rounded-xl">Carteira</button>
                                <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">CDI</button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 sm:h-80 w-full relative mt-4">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGradientInv" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#13ecb6" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#13ecb6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0 25 Q 10 20, 20 22 T 40 15 T 60 18 T 80 10 T 100 8 L 100 30 L 0 30 Z"
                                        fill="url(#chartGradientInv)"
                                    />
                                    <path
                                        d="M0 25 Q 10 20, 20 22 T 40 15 T 60 18 T 80 10 T 100 8"
                                        fill="none"
                                        stroke="#13ecb6"
                                        strokeWidth="1.5"
                                        vectorEffect="non-scaling-stroke"
                                        className="drop-shadow-[0_0_10px_rgba(19,236,182,0.4)]"
                                    />
                                    <circle cx="80" cy="10" fill="#13ecb6" r="1.5" className="animate-pulse" />
                                    <circle cx="100" cy="8" fill="#13ecb6" r="1.5" />
                                </svg>
                                <div className="absolute top-0 left-[80%] -translate-x-1/2 -translate-y-8 glass py-2 px-4 rounded-xl shadow-premium border border-primary/20">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">R$ 442.100</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Alocação em Tempo Real */}
                    <Card className="border-border bg-card">
                        <CardHeader>
                            <CardTitle className="text-xl">Alocação Estratégica</CardTitle>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Diversificação por Classe</p>
                        </CardHeader>
                        <CardContent className="space-y-8 mt-4">
                            {[
                                { class: "Ações Brasil", percent: 35, color: "bg-primary" },
                                { class: "Renda Fixa", percent: 45, color: "bg-slate-600" },
                                { class: "FIIs", percent: 15, color: "bg-slate-800" },
                                { class: "Cripto", percent: 5, color: "bg-white/10" },
                            ].map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{item.class}</span>
                                        <span className="text-xs font-black text-primary">{item.percent}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                                        <div
                                            className={cn("h-full rounded-full transition-all duration-1000", item.color)}
                                            style={{ width: `${item.percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                            <button className="w-full min-h-[56px] mt-4 py-4 bg-white/5 hover:bg-white/10 border border-border rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all">
                                Ajustar Rebalanceamento
                            </button>
                        </CardContent>
                    </Card>
                </div>

                {/* Lista de Ativos Principais */}
                <div className="bg-card rounded-[2.5rem] border border-border shadow-card overflow-hidden">
                    <div className="p-8 sm:p-10 border-b border-border flex items-center justify-between">
                        <h3 className="text-xl font-black text-white tracking-tight">Top Ativos da Carteira</h3>
                        <div className="relative w-64 group hidden sm:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Filtrar ativos..."
                                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl text-xs placeholder:text-slate-600 focus:outline-none focus:border-primary/40 transition-all"
                            />
                        </div>
                    </div>
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-background/30">
                                <tr>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Ativo</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Classe</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Preço Médio</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Performance</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Alocação</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { ticker: "PETR4", name: "Petrobras PN", class: "Ação", pm: "R$ 31,40", perf: "+12.4%", aloc: "8.2%" },
                                    { ticker: "IVVB11", name: "iShares S&P 500", class: "ETF", pm: "R$ 242,10", perf: "+5.1%", aloc: "12.5%" },
                                    { ticker: "KNRI11", name: "Kinea Renda", class: "FII", pm: "R$ 158,02", perf: "-1.2%", aloc: "6.4%" },
                                    { ticker: "Tesouro 2029", name: "IPCA + 6%", class: "Renda Fixa", pm: "R$ 2.940,00", perf: "+8.9%", aloc: "15.0%" },
                                ].map((asset, i) => (
                                    <tr key={i} className="border-t border-border hover:bg-white/5 transition-all group cursor-pointer">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-background rounded-xl border border-border flex items-center justify-center font-black text-[10px] text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                                    {asset.ticker.substring(0, 2)}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-black text-white text-sm tracking-tight">{asset.ticker}</p>
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest truncate">{asset.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-white/5 border border-border rounded-lg text-[10px] font-black text-slate-300 uppercase tracking-widest">
                                                {asset.class}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 font-black text-white text-sm">{asset.pm}</td>
                                        <td className="px-8 py-6">
                                            <span className={cn(
                                                "font-black text-sm",
                                                asset.perf.startsWith('+') ? "text-primary" : "text-red-400"
                                            )}>{asset.perf}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-1.5 bg-background rounded-full overflow-hidden border border-border">
                                                    <div className="h-full bg-primary rounded-full" style={{ width: asset.aloc }}></div>
                                                </div>
                                                <span className="font-black text-white text-xs">{asset.aloc}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button aria-label="Ver mais" className="p-2.5 hover:bg-white/10 rounded-xl transition-all">
                                                <ChevronRight className="w-5 h-5 text-slate-500" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile List View */}
                    <div className="sm:hidden divide-y divide-border">
                        {[
                            { ticker: "PETR4", name: "Petrobras PN", class: "Ação", pm: "R$ 31,40", perf: "+12.4%", aloc: "8.2%" },
                            { ticker: "IVVB11", name: "iShares S&P 500", class: "ETF", pm: "R$ 242,10", perf: "+5.1%", aloc: "12.5%" },
                            { ticker: "KNRI11", name: "Kinea Renda", class: "FII", pm: "R$ 158,02", perf: "-1.2%", aloc: "6.4%" },
                            { ticker: "Tesouro 2029", name: "IPCA + 6%", class: "Renda Fixa", pm: "R$ 2.940,00", perf: "+8.9%", aloc: "15.0%" },
                        ].map((asset, i) => (
                            <div key={i} className="p-6 space-y-4 hover:bg-white/5 transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-background rounded-2xl border border-border flex items-center justify-center font-black text-[10px] text-primary">
                                            {asset.ticker.substring(0, 2)}
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-base tracking-tight">{asset.ticker}</p>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{asset.name}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-white text-base">{asset.pm}</p>
                                        <p className={cn(
                                            "text-[10px] font-black uppercase tracking-widest",
                                            asset.perf.startsWith('+') ? "text-primary" : "text-red-400"
                                        )}>{asset.perf}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="px-3 py-1 bg-white/5 border border-border rounded-lg text-[10px] font-black text-slate-300 uppercase tracking-widest">
                                        {asset.class}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-1.5 bg-background rounded-full overflow-hidden border border-border">
                                            <div className="h-full bg-primary rounded-full" style={{ width: asset.aloc }}></div>
                                        </div>
                                        <span className="font-black text-white text-xs">{asset.aloc}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
