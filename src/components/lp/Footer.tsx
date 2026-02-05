
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-lp-background border-t border-lp-border pt-24 pb-12 px-6 md:px-20 text-left">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-16 mb-24">
                    <div className="col-span-2 md:col-span-4">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="text-lp-primary">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-white text-xl font-bold">HubInvestor</h2>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                            A plataforma definitiva para investidores que buscam performance e clareza no mercado financeiro global.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-lp-border flex items-center justify-center text-slate-400 hover:text-lp-primary hover:border-lp-primary transition-all">
                                <span className="material-symbols-outlined !text-2xl">share</span>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-lp-border flex items-center justify-center text-slate-400 hover:text-lp-primary hover:border-lp-primary transition-all">
                                <span className="material-symbols-outlined !text-2xl">mail</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-start-6">
                        <h4 className="text-white font-bold mb-8">Produto</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Funcionalidades</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Preços</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Roadmap</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Integrações</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-white font-bold mb-8">Empresa</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Carreiras</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-white font-bold mb-8">Suporte</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Central de Ajuda</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">API Docs</a></li>
                            <li><a href="#" className="hover:text-lp-primary transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-lp-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-600">
                    <p>© 2024 HubInvestor Inteligência Financeira LTDA. Todos os direitos reservados.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-slate-400 transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
