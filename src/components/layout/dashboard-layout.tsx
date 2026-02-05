"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    TrendingUp,
    Calculator,
    Target,
    Settings,
    Menu,
    X,
    Bell,
    Search,
    Wallet,
    LogOut,
    User,
    Moon,
    Sun
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    href: string;
    icon: React.ElementType;
    label: string;
    active?: boolean;
}

interface SidebarItemWithCloseProps extends SidebarItemProps {
    onClick?: () => void;
}

function SidebarItem({ href, icon: Icon, label, active, onClick }: SidebarItemWithCloseProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex items-center gap-3 px-4 py-3 min-h-[48px] rounded-2xl font-semibold transition-all duration-300 group",
                active
                    ? "bg-primary text-background shadow-premium"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
        >
            <Icon className={cn("w-5 h-5", active ? "text-background" : "text-slate-500 group-hover:text-primary transition-colors")} />
            <span>{label}</span>
        </Link>
    );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { href: "/", icon: LayoutDashboard, label: "Dashboard" },
        { href: "/investimentos", icon: TrendingUp, label: "Investimentos" },
        { href: "/calculadoras", icon: Calculator, label: "Calculadoras" },
        { href: "/metas", icon: Target, label: "Metas" },
        { href: "/configuracoes", icon: Settings, label: "Configurações" },
    ];

    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:flex flex-col w-72 border-r border-border h-screen sticky top-0 bg-background/50 backdrop-blur-xl transition-all">
                <div className="p-8">
                    <Link href="/" className="flex items-center gap-3 text-primary group">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                            <Wallet className="w-7 h-7 text-primary" />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-white">HubInvestor</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.href}
                            {...item}
                            active={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                        />
                    ))}
                </nav>

                <div className="p-6 mt-auto">
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 text-left relative z-10">Pro Plan</p>
                        <p className="text-xs text-slate-400 mb-4 text-left relative z-10">Desbloqueie análises de portfólio profissionais.</p>
                        <button className="w-full py-3 bg-primary text-background text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary-hover transition-all shadow-premium relative z-10">
                            Upgrade Agora
                        </button>
                    </div>

                    <button
                        onClick={() => router.push('/lp')}
                        className="w-full flex items-center gap-3 px-4 py-4 mt-6 text-slate-500 hover:text-red-400 hover:bg-red-400/5 rounded-2xl transition-all font-bold text-sm"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="text-left">Sair da Conta</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border p-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-primary">
                    <Wallet className="w-7 h-7" />
                    <span className="text-lg font-black tracking-tight text-white uppercase tracking-widest">HubInvestor</span>
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 hover:bg-white/5 rounded-2xl transition-all"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 min-w-0 flex flex-col pt-20 lg:pt-0 h-screen transition-all">
                {/* Topbar */}
                <header className="h-24 hidden lg:flex items-center justify-between px-10 border-b border-border shrink-0">
                    <div className="relative group flex-1 max-w-lg">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 transition-colors group-focus-within:text-primary" />
                        <input
                            type="text"
                            placeholder="Buscar ativos, cálculos ou ferramentas..."
                            className="w-full pl-14 pr-6 py-3.5 bg-card/50 border border-border focus:bg-card focus:ring-4 focus:ring-primary/10 focus:border-primary/40 rounded-[1.5rem] text-sm transition-all text-left placeholder:text-slate-600"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button aria-label="Notificações" className="p-3 text-slate-400 hover:bg-white/5 rounded-2xl transition-all relative group">
                            <Bell className="w-6 h-6 group-hover:text-primary transition-colors" />
                            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary border-2 border-background rounded-full"></span>
                        </button>

                        <div className="h-10 w-px bg-border mx-2"></div>

                        <div className="flex items-center gap-4 pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-white leading-none mb-1.5 text-left">Vincentius</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest text-left">Free Plan</p>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-border shadow-glow p-0.5">
                                <div className="w-full h-full rounded-[0.9rem] overflow-hidden">
                                    <img
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vincentius"
                                        alt="Avatar do usuário HubInvestor"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-12 custom-scrollbar bg-background">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <aside className="fixed top-0 bottom-0 left-0 w-72 bg-white dark:bg-slate-900 z-50 lg:hidden flex flex-col animate-in slide-in-from-left duration-300">
                        <div className="p-6 flex items-center justify-between">
                            <Link href="/" className="flex items-center gap-2 text-primary">
                                <Wallet className="w-7 h-7" />
                                <span className="text-xl font-bold tracking-tight">HubInvestor</span>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Fechar menu" className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                            {navItems.map((item) => (
                                <SidebarItem
                                    key={item.href}
                                    {...item}
                                    active={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                            ))}
                        </nav>

                        {/* Upgrade Plan + Sair - Mobile */}
                        <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800">
                            <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-2xl border border-primary/10 mb-3">
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Upgrade Plan</p>
                                <p className="text-xs text-slate-600 dark:text-slate-500 dark:text-slate-400 mb-3">Tenha análises avançadas de portfólio hoje.</p>
                                <button className="w-full min-h-[44px] py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                                    Saiba Mais
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    router.push('/lp');
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 min-h-[48px] text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all"
                            >
                                <LogOut className="w-5 h-5" />
                                <span className="font-medium text-sm">Sair</span>
                            </button>
                        </div>
                    </aside>
                </>
            )}
        </div>
    );
}
