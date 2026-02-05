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
      <div className="lg:hidden mb-10 text-left">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Visão Geral</p>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">Olá, Vincentius 👋</h1>
        <p className="text-sm text-slate-500 font-medium">Seu resumo financeiro de hoje.</p>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 text-left">
        {/* Card de Patrimônio - Otimizado Mobile */}
        <div className="lg:col-span-2 bg-card p-5 sm:p-10 rounded-[2.5rem] shadow-premium border border-border group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all duration-700"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-6 lg:gap-0 relative z-10">
            <div className="order-2 lg:order-1 w-full min-w-0">
              <p className="text-slate-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-2">Patrimônio Líquido Total</p>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter w-full truncate mb-1">R$ 475.432,98</h2>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl border border-primary/20 flex items-center">
                  <ChevronUp className="w-4 h-4 mr-1" /> 8.2%
                </span>
                <span className="text-slate-500 text-[10px] sm:text-xs font-bold">+R$ 41.234,72 este mês</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-start lg:justify-end w-full lg:w-auto p-1 bg-background rounded-2xl border border-border">
              <div className="flex w-full sm:w-auto">
                <button className="flex-1 sm:flex-none min-h-[44px] px-5 sm:px-6 py-2.5 text-[10px] font-black uppercase tracking-widest bg-primary text-background shadow-premium rounded-xl transition-all">Anual</button>
                <button className="flex-1 sm:flex-none min-h-[44px] px-5 sm:px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">Mensal</button>
              </div>
            </div>
          </div>

          {/* Gráfico SVG - Altura responsiva */}
          <div className="h-40 sm:h-56 relative mt-6 sm:mt-10 relative z-10">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
              <defs>
                <linearGradient id="primaryGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#13ecb6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#13ecb6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 25 Q 15 22, 25 15 T 50 10 T 75 18 T 100 5 L 100 30 L 0 30 Z"
                fill="url(#primaryGradient)"
              />
              <path
                d="M0 25 Q 15 22, 25 15 T 50 10 T 75 18 T 100 5"
                fill="none"
                stroke="#13ecb6"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_8px_rgba(19,236,182,0.4)]"
              />
              <circle cx="50" cy="10" fill="#13ecb6" r="1.5" className="animate-pulse shadow-glow" />
              <circle cx="100" cy="5" fill="#13ecb6" r="1.5" className="shadow-glow" />
            </svg>
            <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-8 glass py-2 px-4 rounded-xl shadow-premium border border-primary/20">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">R$ 412.890,00</span>
            </div>
          </div>
          <div className="flex justify-between mt-6 text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
            <span>Jan</span><span>Mar</span><span>Mai</span><span>Jul</span><span>Set</span><span>Nov</span>
          </div>
        </div>

        {/* Sidebar Cards (Lado do Gráfico) */}
        <div className="space-y-8">
          {/* Meta de Economia - Compacto */}
          <div className="bg-card p-5 sm:p-8 rounded-[2rem] shadow-card border border-border group">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">Meta de Reserva</h3>
              <button aria-label="Mais opções" className="p-2.5 hover:bg-white/5 rounded-2xl transition-all">
                <MoreHorizontal className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
              </button>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="3" />
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary drop-shadow-[0_0_8px_rgba(19,236,182,0.4)]" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm sm:text-base font-black text-white">72%</span>
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tight truncate">R$ 4.342,71</p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Alvo: R$ 6.000</p>
              </div>
            </div>
          </div>

          {/* CTA Investimento - Touch friendly */}
          <div className="bg-primary p-6 sm:p-10 rounded-[2.5rem] shadow-premium text-background relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-black text-xl sm:text-2xl mb-2 uppercase tracking-tight">Cálculos Favoritos</h3>
              <p className="text-[13px] sm:text-sm text-background/80 mb-8 font-medium leading-relaxed">Acesse suas ferramentas mais usadas com um toque.</p>
              <Link href="/calculadoras" className="w-full xs:w-auto inline-flex items-center justify-center bg-background text-primary min-h-[56px] px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-background/90 transition-all shadow-xl group-hover:scale-105">
                Simular Agora <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </div>
            <Rocket className="absolute -right-8 -bottom-8 text-background/5 w-40 h-40 sm:w-48 sm:h-48 -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0" />
          </div>
        </div>
      </div>

      {/* Grid Inferior */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {/* Atividades Recentes - Otimizado Mobile */}
        <div className="lg:col-span-2 bg-card p-5 sm:p-10 rounded-[2.5rem] shadow-card border border-border overflow-hidden relative">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4 mb-10 relative z-10">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">Movimentações Recentes</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Últimos 30 dias</p>
            </div>
            <button className="w-full xs:w-auto px-5 py-2.5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-background rounded-xl transition-all border border-primary/20">Ver Extrato</button>
          </div>

          <div className="space-y-3 relative z-10">
            {[
              { name: "Aporte Tesouro Direto", type: "Investimento • 02 Fev 2024", amount: "+R$ 1.200,00", color: "text-primary", icon: TrendingUp },
              { name: "Dividendos Petrobras", type: "Renda Passiva • 28 Jan 2024", amount: "+R$ 380,12", color: "text-primary", icon: TrendingUp },
              { name: "Resgate CDB Sofisa", type: "Renda Fixa • 25 Jan 2024", amount: "-R$ 500,00", color: "text-red-400", icon: TrendingDown },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 rounded-[1.5rem] transition-all cursor-pointer group border border-transparent hover:border-border gap-3">
                <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-background rounded-2xl flex-shrink-0 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 shadow-premium">
                    <tx.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-black text-white tracking-tight text-sm sm:text-base truncate">{tx.name}</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5 sm:mt-1 truncate">{tx.type}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={cn("font-black text-base sm:text-lg", tx.color)}>{tx.amount}</p>
                  <span className="text-[9px] sm:text-[10px] text-slate-600 font-black uppercase tracking-widest">Concluído</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alocação de Ativos - Otimizado Mobile */}
        <div className="bg-card p-6 sm:p-10 rounded-[2.5rem] shadow-card border border-border">
          <div className="mb-10">
            <h3 className="text-xl font-black text-white tracking-tight">Alocação de Ativos</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Sua diversificação real</p>
          </div>

          <div className="relative w-48 h-48 mx-auto mb-12">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="4" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary drop-shadow-[0_0_12px_rgba(19,236,182,0.4)]" strokeWidth="4" strokeDasharray="60, 100" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-600" strokeWidth="4" strokeDasharray="25, 100" strokeDashoffset="-60" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-800" strokeWidth="4" strokeDasharray="15, 100" strokeDashoffset="-85" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Total</p>
              <p className="text-3xl font-black text-white">R$ 475k</p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { label: "Renda Fixa", value: "60%", color: "bg-primary" },
              { label: "Ações", value: "25%", color: "bg-slate-600" },
              { label: "Fiis", value: "15%", color: "bg-slate-800" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn("w-3.5 h-3.5 rounded-full shadow-glow", item.color)}></div>
                  <span className="text-sm font-bold text-slate-400">{item.label}</span>
                </div>
                <span className="text-sm font-black text-white leading-none">{item.value}</span>
              </div>
            ))}
          </div>

          <button className="w-full min-h-[56px] mt-12 py-4 bg-white/5 hover:bg-white/10 border border-border rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all">
            Balancear Carteira
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
