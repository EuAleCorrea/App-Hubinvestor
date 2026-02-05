"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
    Target,
    Plus,
    Calendar,
    CheckCircle2,
    Circle,
    TrendingUp,
    Clock,
    Flame,
    Gem,
    Home,
    Car
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function MetasPage() {
    const goals = [
        {
            id: 1,
            title: "Independência Financeira",
            description: "Meta total para viver de renda passiva.",
            target: 1000000,
            current: 412890,
            dueDate: "Jan 2035",
            icon: Flame,
            color: "text-orange-400",
            bg: "bg-orange-400/10",
        },
        {
            id: 2,
            title: "Reserva de Emergência",
            description: "6 meses de gastos essenciais garantidos.",
            target: 30000,
            current: 30000,
            dueDate: "Concluído",
            icon: Gem,
            color: "text-primary",
            bg: "bg-primary/10",
            completed: true,
        },
        {
            id: 3,
            title: "Casa de Praia",
            description: "Entrada para imóvel no litoral norte.",
            target: 150000,
            current: 45000,
            dueDate: "Dez 2026",
            icon: Home,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
        },
        {
            id: 4,
            title: "Troca de Veículo",
            description: "Upgrade para SUV híbrido.",
            target: 120000,
            current: 12000,
            dueDate: "Mar 2027",
            icon: Car,
            color: "text-slate-400",
            bg: "bg-slate-400/10",
        }
    ];

    return (
        <DashboardLayout>
            <div className="space-y-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Caminho Crítico</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                            Suas <span className="text-primary italic">Metas</span>
                        </h1>
                        <p className="text-slate-500 font-medium mt-2 text-lg">
                            Visualize seu progresso e mantenha o foco nos seus objetivos de longo prazo.
                        </p>
                    </div>
                    <Button variant="primary" size="lg" className="w-full sm:w-auto rounded-2xl bg-primary text-background shadow-glow min-h-[56px] px-8">
                        <Plus className="w-5 h-5 mr-3" /> Criar Novo Objetivo
                    </Button>
                </div>

                {/* Progress Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 bg-primary p-7 sm:p-10 rounded-[2.5rem] shadow-premium relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-700"></div>
                        <h3 className="text-[10px] font-black text-background uppercase tracking-[0.3em] mb-4">Status Geral</h3>
                        <div className="mb-6 sm:mb-8">
                            <p className="text-3xl sm:text-4xl font-black text-background mb-1 sm:mb-2">41.3%</p>
                            <p className="text-[10px] font-bold text-background/70 uppercase tracking-widest">Concluído do plano FIRE</p>
                        </div>
                        <div className="h-2 w-full bg-background/20 rounded-full border border-background/10">
                            <div className="h-full bg-background rounded-full" style={{ width: "41.3%" }}></div>
                        </div>
                        <p className="text-xs font-bold text-background/80 mt-6 leading-relaxed">
                            Você está 2 anos adiantado em relação ao seu planejamento original. <br />
                            <span className="underline decoration-background/30 font-black cursor-pointer">Ver projeção detalhada</span>
                        </p>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-card p-6 sm:p-8 rounded-[2rem] border border-border shadow-card flex flex-col justify-between group">
                            <div className="flex items-start justify-between">
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Montante Acumulado</p>
                                    <h4 className="text-xl sm:text-2xl font-black text-white text-left truncate">R$ 499.890,00</h4>
                                </div>
                                <div className="w-12 h-12 bg-white/5 rounded-xl border border-border flex-shrink-0 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <span className="text-primary font-black text-[11px] sm:text-xs tracking-tight">+R$ 12.400 este mês</span>
                                <span className="w-1 h-1 bg-border rounded-full hidden xs:block"></span>
                                <span className="text-slate-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Excelente Ritmo</span>
                            </div>
                        </div>

                        <div className="bg-card p-6 sm:p-8 rounded-[2rem] border border-border shadow-card flex flex-col justify-between group">
                            <div className="flex items-start justify-between">
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Próximo Milestone</p>
                                    <h4 className="text-xl sm:text-2xl font-black text-white text-left truncate">R$ 500k Club</h4>
                                </div>
                                <div className="w-12 h-12 bg-white/5 rounded-xl border border-border flex-shrink-0 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-slate-400" />
                                </div>
                            </div>
                            <div className="mt-8 flex items-center gap-3">
                                <div className="flex-1 h-1.5 bg-background rounded-full border border-border">
                                    <div className="h-full bg-primary rounded-full shadow-glow" style={{ width: "95%" }}></div>
                                </div>
                                <span className="text-xs font-black text-primary">95%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {goals.map((goal) => (
                        <div key={goal.id} className="bg-card p-7 sm:p-10 rounded-[2.5rem] border border-border shadow-card hover:shadow-premium hover:-translate-y-1 transition-all group relative overflow-hidden text-left flex flex-col">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/2 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/5 transition-all duration-700"></div>

                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-3", goal.bg)}>
                                    <goal.icon className={cn("w-7 h-7", goal.color)} />
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-lg">
                                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{goal.dueDate}</span>
                                </div>
                            </div>

                            <div className="mb-8 relative z-10">
                                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors tracking-tight">{goal.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{goal.description}</p>
                            </div>

                            <div className="mt-auto space-y-4 relative z-10">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Acumulado</p>
                                        <p className="text-lg font-black text-white">
                                            {goal.current.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Meta</p>
                                        <p className="text-lg font-black text-slate-400">
                                            {goal.target.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </p>
                                    </div>
                                </div>
                                <div className="h-3 w-full bg-background rounded-full border border-border overflow-hidden p-0.5">
                                    <div
                                        className={cn(
                                            "h-full rounded-full transition-all duration-1000",
                                            goal.completed ? "bg-primary shadow-glow" : "bg-primary/60"
                                        )}
                                        style={{ width: `${(goal.current / goal.target) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                                        {Math.round((goal.current / goal.target) * 100)}% Concluído
                                    </span>
                                    {goal.completed && (
                                        <div className="flex items-center gap-2 text-primary">
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Concluída</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* New Goal CTA */}
                    <button className="bg-background border-2 border-dashed border-border rounded-[2.5rem] p-10 flex flex-col items-center justify-center group hover:border-primary/40 hover:bg-primary/5 transition-all text-center min-h-[300px]">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-border group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                            <Plus className="w-10 h-10 text-slate-600 group-hover:text-primary" />
                        </div>
                        <h3 className="text-xl font-black text-white mb-2 tracking-tight">Nova Meta</h3>
                        <p className="text-sm text-slate-500 font-medium max-w-[200px]">Transforme seus sonhos em planos executáveis.</p>
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
