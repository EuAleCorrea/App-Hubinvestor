"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function SidebarItem({ href, icon: Icon, label, active }: SidebarItemProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group",
                active
                    ? "bg-primary text-white shadow-premium"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            )}
        >
            <Icon className={cn("w-5 h-5", active ? "text-white" : "text-slate-500 group-hover:text-primary transition-colors")} />
            <span>{label}</span>
        </Link>
    );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: "/", icon: LayoutDashboard, label: "Dashboard" },
        { href: "/investimentos", icon: TrendingUp, label: "Investimentos" },
        { href: "/calculadoras", icon: Calculator, label: "Calculadoras" },
        { href: "/metas", icon: Target, label: "Metas" },
        { href: "/configuracoes", icon: Settings, label: "Configurações" },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl transition-all">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 text-primary group">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Wallet className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Vestgrow</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-1 mt-4">
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.href}
                            {...item}
                            active={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                        />
                    ))}
                </nav>

                <div className="p-4 mt-auto">
                    <div className="bg-primary/5 dark:bg-primary/10 p-5 rounded-3xl border border-primary/10">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 text-left">Upgrade Plan</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 text-left">Tenha análises avançadas de portfólio hoje.</p>
                        <button className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                            Saiba Mais
                        </button>
                    </div>

                    <button className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium text-sm text-left">Sair</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-primary">
                    <Wallet className="w-6 h-6" />
                    <span className="text-lg font-bold tracking-tight">Vestgrow</span>
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 min-w-0 flex flex-col pt-16 lg:pt-0 h-screen transition-all">
                {/* Topbar */}
                <header className="h-20 hidden lg:flex items-center justify-between px-8 border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <div className="relative group flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 transition-colors group-focus-within:text-primary" />
                        <input
                            type="text"
                            placeholder="Buscar ativos ou cálculos..."
                            className="w-full pl-11 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 rounded-2xl text-sm transition-all text-left"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
                        </button>

                        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

                        <div className="flex items-center gap-3 pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1 text-left">Vincentius</p>
                                <p className="text-[10px] font-medium text-slate-400 text-left">Free Plan</p>
                            </div>
                            <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm ring-2 ring-slate-100 dark:ring-slate-800">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vincentius"
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar bg-slate-50 dark:bg-slate-950/30">
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
                                <span className="text-xl font-bold tracking-tight">Vestgrow</span>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-slate-100">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex-1 px-4 space-y-1">
                            {navItems.map((item) => (
                                <SidebarItem
                                    key={item.href}
                                    {...item}
                                    active={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                                />
                            ))}
                        </nav>
                    </aside>
                </>
            )}
        </div>
    );
}
