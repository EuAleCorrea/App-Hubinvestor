"use client";

import { useState } from "react";
import { formatarMoeda } from "@/lib/calculadoras";
import { Shield, Info, ArrowUpRight, DollarSign, Calendar, AlertTriangle } from "lucide-react";

export function CalculadoraReservaEmergencia() {
    const [gastoMensal, setGastoMensal] = useState<string>("3000");
    const [mesesReserva, setMesesReserva] = useState<string>("6");
    const [reservaAtual, setReservaAtual] = useState<string>("5000");

    const reservaNecessaria = (Number(gastoMensal) || 0) * (Number(mesesReserva) || 0);
    const reservaAtualNum = Number(reservaAtual) || 0;
    const falta = Math.max(0, reservaNecessaria - reservaAtualNum);
    const progresso = reservaNecessaria > 0 ? Math.min(100, (reservaAtualNum / reservaNecessaria) * 100) : 0;
    const status = progresso >= 100 ? 'Completa' : progresso >= 50 ? 'Em progresso' : 'Iniciando';
    const statusColor = progresso >= 100 ? 'text-emerald-600' : progresso >= 50 ? 'text-amber-600' : 'text-red-600';

    return (
        <div className="space-y-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card p-8 text-left">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Segurança</p>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Reserva de Emergência</h2>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Gasto Mensal</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={gastoMensal} onChange={(e) => setGastoMensal(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Meses de Reserva</label><div className="flex gap-2">{[3, 6, 12].map((m) => (<button key={m} onClick={() => setMesesReserva(m.toString())} className={`flex-1 py-3 rounded-xl text-sm font-black ${Number(mesesReserva) === m ? 'bg-rose-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}>{m} meses</button>))}</div></div>
                        <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-3">Reserva Atual</label><div className="relative"><span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">R$</span><input type="number" value={reservaAtual} onChange={(e) => setReservaAtual(e.target.value)} className="w-full h-14 pl-12 pr-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-lg font-bold text-slate-900 dark:text-white" /></div></div>
                    </div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                        <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-3 flex items-center gap-2"><Shield className="w-4 h-4" />Reserva Necessária</p>
                        <h1 className="text-5xl md:text-6xl font-black text-white">{formatarMoeda(reservaNecessaria)}</h1>
                        <p className="text-white/60 mt-3">{mesesReserva} meses de segurança</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-4"><span className="text-sm font-bold text-slate-600 dark:text-slate-400">Progresso</span><span className={`text-sm font-black ${statusColor}`}>{status}</span></div>
                        <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 rounded-full transition-all duration-500" style={{ width: `${progresso}%` }} /></div>
                        <p className="text-right text-sm font-bold text-slate-500 mt-2">{progresso.toFixed(0)}%</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5"><DollarSign className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Já Acumulado</p><p className="text-2xl font-black text-slate-900 dark:text-white">{formatarMoeda(reservaAtualNum)}</p></div>
                        <div className={`p-7 rounded-[2rem] ${falta > 0 ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30' : 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30'}`}><div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${falta > 0 ? 'bg-amber-500/10 text-amber-600' : 'bg-emerald-500/10 text-emerald-600'}`}><AlertTriangle className="w-6 h-6" /></div><p className={`text-[10px] font-black uppercase mb-2 ${falta > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>Ainda Falta</p><p className={`text-2xl font-black ${falta > 0 ? 'text-amber-700' : 'text-emerald-700'}`}>{formatarMoeda(falta)}</p></div>
                        <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800"><div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 mb-5"><Calendar className="w-6 h-6" /></div><p className="text-[10px] font-black text-slate-400 uppercase mb-2">Cobertura</p><p className="text-2xl font-black text-slate-900 dark:text-white">{mesesReserva} meses</p></div>
                    </div>
                    <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-[2rem] border border-rose-100 dark:border-rose-800/30"><div className="flex items-start gap-4"><div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-600"><Info className="w-5 h-5" /></div><div><h4 className="font-bold text-rose-800 dark:text-rose-200 mb-1">Por que ter reserva?</h4><p className="text-sm text-rose-700 dark:text-rose-300/80">A reserva de emergência protege você de imprevistos como desemprego, doenças ou reparos urgentes. Recomenda-se 6-12 meses de gastos.</p></div></div></div>
                </div>
            </div>
        </div>
    );
}
