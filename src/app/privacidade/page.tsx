import type { Metadata } from "next";
import Link from "next/link";
import { Wallet, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Política de Privacidade | HubInvestor",
    description: "Saiba como o HubInvestor protege seus dados. Política de privacidade e tratamento de informações pessoais.",
    openGraph: {
        title: "Política de Privacidade | HubInvestor",
        description: "Como o HubInvestor protege seus dados pessoais.",
    },
};

export default function PrivacidadePage() {
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
                    Política de Privacidade
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-500 dark:text-slate-500 dark:text-slate-400 text-sm mb-8">
                        Última atualização: Fevereiro de 2026
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introdução</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            O HubInvestor está comprometido em proteger sua privacidade. Esta política descreve como coletamos,
                            usamos e protegemos suas informações quando você utiliza nosso site e serviços.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Informações que Coletamos</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            <strong className="text-slate-900 dark:text-white">Dados inseridos nas calculadoras:</strong> Os valores que você insere em nossas ferramentas
                            (como montantes, taxas e prazos) são processados localmente no seu navegador e não são armazenados em nossos servidores.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            <strong className="text-slate-900 dark:text-white">Dados de uso:</strong> Podemos coletar informações anônimas sobre como você usa nosso site,
                            incluindo páginas visitadas, tempo de permanência e tipo de dispositivo.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            <strong className="text-slate-900 dark:text-white">Cookies:</strong> Utilizamos cookies para melhorar sua experiência de navegação e
                            lembrar suas preferências (como tema claro/escuro).
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Como Usamos suas Informações</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Utilizamos as informações coletadas para:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Fornecer e melhorar nossos serviços</li>
                            <li>Personalizar sua experiência no site</li>
                            <li>Analisar o uso do site para aprimorar nossas ferramentas</li>
                            <li>Responder a suas solicitações de suporte</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Compartilhamento de Dados</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            <strong className="text-slate-900 dark:text-white">Não vendemos, alugamos ou compartilhamos suas informações pessoais</strong> com terceiros
                            para fins de marketing. Podemos compartilhar dados agregados e anônimos com parceiros de análise para melhorar nossos serviços.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Segurança dos Dados</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado,
                            alteração, divulgação ou destruição. Utilizamos conexão segura (HTTPS) em todo o site.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Seus Direitos (LGPD)</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li>Acessar os dados que temos sobre você</li>
                            <li>Solicitar a correção de dados incompletos ou desatualizados</li>
                            <li>Solicitar a exclusão de seus dados pessoais</li>
                            <li>Revogar o consentimento para tratamento de dados</li>
                            <li>Solicitar a portabilidade dos dados</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Cookies e Tecnologias Similares</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Utilizamos os seguintes tipos de cookies:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
                            <li><strong className="text-slate-900 dark:text-white">Cookies essenciais:</strong> Necessários para o funcionamento básico do site</li>
                            <li><strong className="text-slate-900 dark:text-white">Cookies de preferência:</strong> Guardam suas configurações (tema, idioma)</li>
                            <li><strong className="text-slate-900 dark:text-white">Cookies analíticos:</strong> Nos ajudam a entender como o site é utilizado</li>
                        </ul>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                            Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Alterações nesta Política</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página
                            regularmente para estar ciente de quaisquer alterações. Alterações significativas serão comunicadas através do site.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Contato</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                            <a href="mailto:privacidade@hubinvestor.com.br" className="text-primary hover:underline ml-1">privacidade@hubinvestor.com.br</a>
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
