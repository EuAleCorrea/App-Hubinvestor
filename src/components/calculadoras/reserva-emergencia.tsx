"use client";

import { useState } from "react";
import { formatarMoeda } from "@/lib/calculadoras";
import { Shield, Info, DollarSign, Calendar, AlertTriangle } from "lucide-react";

export function CalculadoraReservaEmergencia() {
    const [gastoMensal, setGastoMensal] = useState<string>("3000");
    const [mesesReserva, setMesesReserva] = useState<string>("6");
    const [reservaAtual, setReservaAtual] = useState<string>("5000");

    const reservaNecessaria = (Number(gastoMensal) || 0) * (Number(mesesReserva) || 0);
    const reservaAtualNum = Number(reservaAtual) || 0;
    const falta = Math.max(0, reservaNecessaria - reservaAtualNum);
    const progresso = reservaNecessaria > 0 ? Math.min(100, (reservaAtualNum / reservaNecessaria) * 100) : 0;
    const status = progresso >= 100 ? 'Completa' : progresso >= 50 ? 'Em progresso' : 'Iniciando';
    const statusColor = progresso >= 100 ? 'text-emerald-600' : progresso >= 50 ? 'text-amber-600' : 'text-rose-600';

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-6 sm:p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Segurança</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Reserva de Emergência</h2>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">Gasto Mensal</label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input type="number" value={gastoMensal} onChange={(e) => setGastoMensal(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm" />
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1">Meses de Reserva</label>
                            <div className="flex gap-2">
                                {[3, 6, 12].map((m) => (
                                    <button key={m} onClick={() => setMesesReserva(m.toString())} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${Number(mesesReserva) === m ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>{m} meses</button>
                                ))}
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-3 ml-1 group-focus-within:text-primary transition-colors">Reserva Atual</label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">R$</span>
                                <input type="number" value={reservaAtual} onChange={(e) => setReservaAtual(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 rounded-2xl text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    <div className="bg-gradient-to-br from-primary to-emerald-600 p-8 sm:p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                Reserva Necessária
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">{formatarMoeda(reservaNecessaria)}</h1>
                            <p className="text-white/60 font-medium mt-3">{mesesReserva} meses de segurança</p>
                        </div>
                        <Shield className="absolute bottom-6 right-8 w-24 h-24 text-white/10" />
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-500 dark:text-slate-400">Progresso</span>
                            <span className={`text-sm font-black ${statusColor}`}>{status}</span>
                        </div>
                        <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full transition-all duration-500" style={{ width: `${progresso}%` }} />
                        </div>
                        <p className="text-right text-sm font-bold text-slate-500 mt-2">{progresso.toFixed(0)}%</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Já Acumulado</p>
                            <p className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">{formatarMoeda(reservaAtualNum)}</p>
                        </div>
                        <div className={`p-7 rounded-[2rem] ${falta > 0 ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30' : 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30'}`}>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${falta > 0 ? 'bg-amber-500/10 text-amber-600' : 'bg-emerald-500/10 text-emerald-600'}`}>
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${falta > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}`}>Ainda Falta</p>
                            <p className={`text-2xl font-black tabular-nums ${falta > 0 ? 'text-amber-700 dark:text-amber-300' : 'text-emerald-700 dark:text-emerald-300'}`}>{formatarMoeda(falta)}</p>
                        </div>
                        <div className="bg-slate-900 dark:bg-slate-800 p-7 rounded-[2rem] shadow-card">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Cobertura</p>
                            <p className="text-2xl font-black text-white tabular-nums">{mesesReserva} meses</p>
                        </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-[2rem] border border-amber-100 dark:border-amber-800/30">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                <Info className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-1">Por que ter reserva?</h4>
                                <p className="text-sm text-amber-700 dark:text-amber-300/80 leading-relaxed">A reserva de emergência protege você de imprevistos como desemprego, doenças ou reparos urgentes. Recomenda-se 6-12 meses de gastos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
