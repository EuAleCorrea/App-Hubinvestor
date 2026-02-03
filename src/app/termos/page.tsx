import type { Metadata } from "next";
import Link from "next/link";
import { Wallet, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Termos de Uso | HubInvestor",
    description: "Leia os Termos de Uso do HubInvestor. Condições para utilização de nossas ferramentas financeiras gratuitas.",
    openGraph: {
        title: "Termos de Uso | HubInvestor",
        description: "Condições de uso das ferramentas financeiras HubInvestor.",
    },
};

export default function TermosPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            {/* Navbar */}
            <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/lp" className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Wallet className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">HubInvestor</span>
                        </Link>
                        <Link href="/lp" className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Voltar
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Conteúdo */}
            <main className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
                    Termos de Uso
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                        Última atualização: Fevereiro de 2026
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Aceitação dos Termos</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Ao acessar e usar o HubInvestor, você concorda em cumprir e estar vinculado a estes Termos de Uso.
                            Se você não concordar com qualquer parte destes termos, não deverá usar nosso site ou serviços.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Descrição do Serviço</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            O HubInvestor oferece calculadoras e ferramentas financeiras gratuitas para fins educacionais e de planejamento pessoal.
                            Nossas ferramentas incluem simuladores de juros compostos, calculadoras de aposentadoria, planejadores de independência financeira, entre outros.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Uso Permitido</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Você pode usar o HubInvestor para:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Realizar simulações financeiras pessoais</li>
                            <li>Planejamento de investimentos e aposentadoria</li>
                            <li>Fins educacionais sobre finanças pessoais</li>
                            <li>Comparação de cenários de investimento</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Limitações de Responsabilidade</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            As informações e cálculos fornecidos pelo HubInvestor são apenas para fins informativos e educacionais.
                            <strong className="text-slate-900 dark:text-white"> Não constituem aconselhamento financeiro, de investimento, tributário ou jurídico.</strong>
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                            Recomendamos que você consulte profissionais qualificados antes de tomar decisões financeiras importantes.
                            O HubInvestor não se responsabiliza por decisões tomadas com base nas informações fornecidas em nossa plataforma.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Precisão dos Cálculos</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Embora nos esforcemos para manter a precisão de nossas calculadoras, não garantimos que os resultados estejam livres de erros.
                            Os cálculos são baseados em fórmulas matemáticas padrão e podem não considerar todas as variáveis do mundo real,
                            como impostos específicos, taxas bancárias ou mudanças de mercado.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Propriedade Intelectual</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Todo o conteúdo do HubInvestor, incluindo textos, gráficos, logotipos, ícones e software, é protegido por direitos autorais.
                            Você não pode reproduzir, distribuir ou criar trabalhos derivados sem nossa autorização expressa por escrito.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Modificações dos Termos</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Reservamo-nos o direito de modificar estes termos a qualquer momento.
                            As alterações entrarão em vigor imediatamente após a publicação no site.
                            O uso continuado do HubInvestor após as modificações constitui aceitação dos novos termos.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Contato</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Para dúvidas sobre estes Termos de Uso, entre em contato através do email:
                            <a href="mailto:contato@hubinvestor.com.br" className="text-primary hover:underline ml-1">contato@hubinvestor.com.br</a>
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white">
                            <Wallet className="w-4 h-4" />
                        </div>
                        <span className="text-xl font-black tracking-tighter">HubInvestor</span>
                    </div>
                    <div className="flex justify-center gap-8 mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <Link href="/termos" className="hover:text-primary transition-colors">Termos</Link>
                        <Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
                    </div>
                    <p className="text-slate-500 text-xs font-medium">
                        © 2024 HubInvestor. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
