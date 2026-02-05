"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
    Settings,
    User,
    Lock,
    Bell,
    CreditCard,
    Eye,
    ShieldCheck,
    Smartphone,
    Languages,
    HelpCircle,
    ChevronRight,
    Camera
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ConfiguracoesPage() {
    return (
        <DashboardLayout>
            <div className="space-y-12 pb-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <Settings className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Ambiente</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                            Ajustes e <span className="text-primary italic">Perfil</span>
                        </h1>
                        <p className="text-slate-500 font-medium mt-2 text-lg">
                            Personalize sua experiência e gerencie sua segurança.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-1 flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 no-scrollbar">
                        {[
                            { icon: User, label: "Perfil", active: true },
                            { icon: Lock, label: "Segurança", active: false },
                            { icon: CreditCard, label: "Assinatura", active: false },
                            { icon: Bell, label: "Notificações", active: false },
                            { icon: ShieldCheck, label: "Privacidade", active: false },
                            { icon: Languages, label: "Idioma", active: false },
                        ].map((item, i) => (
                            <button
                                key={i}
                                className={cn(
                                    "whitespace-nowrap flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all shrink-0",
                                    item.active
                                        ? "bg-primary text-background shadow-premium"
                                        : "text-slate-500 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Main Content Areas */}
                    <div className="lg:col-span-3 space-y-10">
                        {/* Profile Section */}
                        <section className="bg-card p-6 sm:p-10 rounded-[2.5rem] border border-border shadow-card text-left">
                            <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-background shadow-premium p-1">
                                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                                            <img
                                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vincentius"
                                                alt="Sua foto de perfil"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <button className="absolute -right-2 -bottom-2 w-10 h-10 bg-primary text-background rounded-xl flex items-center justify-center shadow-lg border-2 border-background hover:scale-110 transition-all">
                                        <Camera className="w-5 h-5" />
                                    </button>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight transition-colors">Informações Pessoais</h3>
                                    <p className="text-sm text-slate-500 font-medium">Sua foto será visível nos relatórios e exportações do HubInvestor.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Nome Completo</p>
                                    <input
                                        type="text"
                                        defaultValue="Vincentius Aurelius"
                                        className="w-full h-14 bg-background border border-border rounded-xl px-4 text-sm font-bold text-white focus:ring-4 focus:ring-primary/10 focus:border-primary/40 transition-all"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Email Principal</p>
                                    <input
                                        type="email"
                                        defaultValue="vincentius@hubinvestor.com.br"
                                        className="w-full h-14 bg-background border border-border rounded-xl px-4 text-sm font-bold text-white focus:ring-4 focus:ring-primary/10 focus:border-primary/40 transition-all opacity-70 cursor-not-allowed"
                                        disabled
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-4">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Mini Bio (Opcional)</p>
                                    <textarea
                                        rows={3}
                                        placeholder="Investidor focado em dividendos e crescimento de longo prazo."
                                        className="w-full bg-background border border-border rounded-xl p-4 text-sm font-bold text-white focus:ring-4 focus:ring-primary/10 focus:border-primary/40 transition-all resize-none"
                                    />
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-border flex flex-col xs:flex-row justify-end gap-3 sm:gap-4">
                                <Button variant="secondary" className="w-full xs:w-auto rounded-xl px-8 min-h-[50px]">Cancelar</Button>
                                <Button variant="primary" className="w-full xs:w-auto bg-primary text-background rounded-xl px-8 min-h-[50px] shadow-glow">Salvar Alterações</Button>
                            </div>
                        </section>

                        {/* Dangerous Zone / Account Controls */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-card p-6 sm:p-8 rounded-[2rem] border border-border shadow-card text-left flex flex-col justify-between group">
                                <div className="flex items-start gap-4 sm:gap-5 mb-8">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex-shrink-0 flex items-center justify-center border border-border">
                                        <Smartphone className="w-6 h-6 text-slate-400 group-hover:text-primary transition-all" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-black text-white mb-1 uppercase tracking-tight">Login em Duas Etapas</h4>
                                        <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-relaxed">Adicione uma camada extra de proteção.</p>
                                    </div>
                                </div>
                                <Button variant="secondary" className="w-full rounded-xl border-border bg-transparent text-slate-300 hover:bg-white/5 uppercase tracking-widest text-[10px] font-black min-h-[48px]">
                                    Configurar 2FA
                                </Button>
                            </div>

                            <div className="bg-card p-6 sm:p-8 rounded-[2rem] border border-border shadow-card text-left flex flex-col justify-between group">
                                <div className="flex items-start gap-4 sm:gap-5 mb-8">
                                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex-shrink-0 flex items-center justify-center border border-red-500/20">
                                        <HelpCircle className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-black text-white mb-1 uppercase tracking-tight">Exclusão de Conta</h4>
                                        <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-relaxed">Esta ação é irreversível e apaga todos os dados.</p>
                                    </div>
                                </div>
                                <button className="w-full h-12 rounded-xl text-red-500 hover:text-white hover:bg-red-500 transition-all text-[10px] font-black uppercase tracking-widest border border-red-500/30">
                                    Excluir permanentemente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
