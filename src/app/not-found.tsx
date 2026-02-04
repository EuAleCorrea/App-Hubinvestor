import Link from "next/link";
import { Calculator, ArrowLeft, Search, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8 relative inline-block">
                    <div className="w-32 h-32 bg-primary/10 rounded-[2.5rem] flex items-center justify-center animate-pulse">
                        <Search className="w-16 h-16 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-sm font-black px-3 py-1 rounded-xl shadow-lg">
                        404
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                    Conteúdo em <span className="text-primary">Evolução</span>
                </h1>

                <p className="text-lg text-slate-500 dark:text-slate-500 dark:text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
                    O HubInvestor mudou para uma nova plataforma de inteligência financeira. O link que você buscou pode ter sido atualizado ou movido.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    <Link
                        href="/calculadoras"
                        className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card hover:border-primary/30 hover:shadow-premium transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Calculator className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-slate-900 dark:text-white">Calculadoras</p>
                                <p className="text-xs text-slate-500">16 novas ferramentas</p>
                            </div>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-slate-300 group-hover:text-primary rotate-180 transition-all" />
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-card hover:border-primary/30 hover:shadow-premium transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-colors">
                                <Home className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-slate-900 dark:text-white">Dashboard</p>
                                <p className="text-xs text-slate-500">Voltar ao início</p>
                            </div>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white rotate-180 transition-all" />
                    </Link>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-[2rem] border border-amber-100 dark:border-amber-800/30 inline-block">
                    <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                        💡 Dica: Tente buscar o que você precisa na nossa nova aba de calculadoras.
                    </p>
                </div>
            </div>
        </div>
    );
}
