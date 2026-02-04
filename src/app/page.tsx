import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  Plus,
  MoreHorizontal,
  Rocket,
  Apple,
  ArrowRight,
  Search,
  ChevronUp,
  BarChart2,
  PieChart,
  Shield
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard | HubInvestor - Inteligência Financeira",
  description: "Gerencie seu patrimônio e investimentos com clareza. Calculadoras financeiras modernas para planejar seu futuro.",
  openGraph: {
    title: "Dashboard | HubInvestor",
    description: "Gerencie seu patrimônio e investimentos com clareza.",
  },
};

export default function Home() {
  return (
    <DashboardLayout>
      {/* Boas-vindas Mobile - Compacto */}
      <div className="lg:hidden mb-6 text-left">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Olá, Vincentius 👋</h1>
        <p className="text-sm text-slate-500 dark:text-slate-500 dark:text-slate-400">Seu resumo financeiro de hoje.</p>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 text-left">
        {/* Card de Patrimônio - Otimizado Mobile */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-card border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4 lg:gap-0">
            <div className="order-2 lg:order-1 w-full">
              <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 text-sm font-medium mb-1 lg:mb-0">Patrimônio Líquido Total</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-1 sm:mt-2 tracking-tight w-full truncate">R$ 475.432,98</h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-lg flex items-center">
                  <ChevronUp className="w-3.5 h-3.5 mr-1" /> 8.2%
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-medium hidden sm:inline">+R$ 41.234,72 de lucro este mês</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-end w-full lg:w-auto bg-transparent lg:bg-slate-100 lg:dark:bg-slate-800 p-0 lg:p-1.5 rounded-2xl">
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl lg:p-0 lg:bg-transparent lg:dark:bg-transparent">
                <button className="min-h-[48px] px-5 py-2.5 text-xs font-bold bg-white dark:bg-slate-700 shadow-sm rounded-xl transition-all">Anual</button>
                <button className="min-h-[48px] px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800 transition-all">Mensal</button>
              </div>
            </div>
          </div>

          {/* Gráfico SVG - Altura responsiva */}
          <div className="h-36 sm:h-48 relative mt-4 sm:mt-8">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
              <defs>
                <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#005BFF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#005BFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 25 Q 15 22, 25 15 T 50 10 T 75 18 T 100 5 L 100 30 L 0 30 Z"
                fill="url(#blueGradient)"
              />
              <path
                d="M0 25 Q 15 22, 25 15 T 50 10 T 75 18 T 100 5"
                fill="none"
                stroke="#005BFF"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="50" cy="10" fill="#005BFF" r="1" />
              <circle cx="100" cy="5" fill="#005BFF" r="1" />
            </svg>
            <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-8 bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-xl">
              R$ 412.890,00
            </div>
          </div>
          <div className="flex justify-between mt-6 text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
            <span>Jan</span><span>Mar</span><span>Mai</span><span>Jul</span><span>Set</span><span>Nov</span>
          </div>
        </div>

        {/* Sidebar Cards (Lado do Gráfico) */}
        <div className="space-y-6">
          {/* Meta de Economia - Compacto */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] shadow-card border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white">Meta de Reserva</h3>
              <button aria-label="Mais opções" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <MoreHorizontal className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              </button>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="3" />
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-black text-slate-900 dark:text-white">72%</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">R$ 4.342,71</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium">Alvo: R$ 6.000,00</p>
              </div>
            </div>
          </div>

          {/* CTA Investimento - Touch friendly */}
          <div className="bg-primary p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] shadow-lg shadow-primary/20 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-1">Novas Calculadoras</h3>
              <p className="text-xs text-blue-100 mb-6 leading-relaxed">Explore nossas ferramentas avançadas para planejar seu 2024.</p>
              <Link href="/calculadoras" className="inline-flex items-center bg-white text-primary min-h-[48px] px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all group-hover:px-7">
                Ver Ferramentas <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
            </div>
            <Rocket className="absolute -right-6 -bottom-6 text-white/10 w-40 h-40 -rotate-12 transition-transform group-hover:scale-110 group-hover:rotate-0" />
          </div>
        </div>
      </div>

      {/* Grid Inferior */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
        {/* Atividades Recentes - Otimizado Mobile */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-card border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Movimentações Recentes</h3>
            <button className="text-primary text-sm font-bold hover:underline underline-offset-4">Ver Tudo</button>
          </div>

          <div className="space-y-2">
            {[
              { name: "Aporte Tesouro Direto", type: "Investimento • 02 Fev 2024", amount: "+R$ 1.200,00", color: "text-emerald-700 dark:text-emerald-400", icon: TrendingUp },
              { name: "Taxa Administrativa", type: "Custos • 01 Fev 2024", amount: "-R$ 45,20", color: "text-red-600 dark:text-red-400", icon: TrendingDown },
              { name: "Dividendos Petrobras", type: "Renda Passiva • 28 Jan 2024", amount: "+R$ 380,12", color: "text-emerald-700 dark:text-emerald-400", icon: TrendingUp },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 rounded-xl flex items-center justify-center transition-colors">
                    <tx.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{tx.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 dark:text-slate-400 font-medium">{tx.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn("font-bold text-base", tx.color)}>{tx.amount}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Concluído</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alocação de Ativos - Otimizado Mobile */}
        <div className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-card border border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-8">Alocação de Ativos</h3>

          <div className="relative w-44 h-44 mx-auto mb-10">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="3" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="3" strokeDasharray="60, 100" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-emerald-500" strokeWidth="3" strokeDasharray="25, 100" strokeDashoffset="-60" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-amber-500" strokeWidth="3" strokeDasharray="15, 100" strokeDashoffset="-85" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-black tracking-widest">Total</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">100%</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Renda Fixa", value: "60%", color: "bg-primary" },
              { label: "Ações", value: "25%", color: "bg-emerald-500" },
              { label: "Fiis", value: "15%", color: "bg-amber-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-3 h-3 rounded-full", item.color)}></div>
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-500 dark:text-slate-400">{item.label}</span>
                </div>
                <span className="text-sm font-black text-slate-900 dark:text-white">{item.value}</span>
              </div>
            ))}
          </div>

          <button className="w-full min-h-[48px] mt-8 sm:mt-10 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl sm:rounded-2xl text-xs font-black hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase tracking-widest">
            Ajustar Portfólio
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
