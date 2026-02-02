export type PerfilRisco = 'conservador' | 'moderado' | 'arrojado';
export type StatusMeta = 'ativa' | 'pausada' | 'concluida';

export type TipoCalculadora =
    | 'juros-compostos'
    | 'aportes-mensais'
    | 'renda-passiva'
    | 'aposentadoria'
    | 'independencia-financeira'
    | 'reserva-emergencia'
    | 'comparador-indices'
    | 'parcelado-vs-avista'
    | 'financiamento'
    | 'bruto-liquido';

export interface Usuario {
    id: string;
    nome: string;
    email: string;
    avatar_url?: string;
    created_at: string;
    updated_at: string;
}

export interface PerfilFinanceiro {
    id: string;
    usuario_id: string;
    renda_mensal?: number;
    despesas_mensais?: number;
    perfil_risco?: PerfilRisco;
    objetivo_principal?: string;
    conhecimento_financeiro?: number;
    created_at: string;
    updated_at: string;
}

export interface Cenario {
    id: string;
    usuario_id: string;
    tipo_calculadora: TipoCalculadora;
    nome: string;
    parametros: Record<string, unknown>;
    resultado: Record<string, unknown>;
    created_at: string;
    updated_at: string;
}

export interface MetaFinanceira {
    id: string;
    usuario_id: string;
    tipo_meta: string;
    nome: string;
    valor_objetivo: number;
    valor_atual: number;
    prazo_meses?: number;
    status: StatusMeta;
    created_at: string;
    updated_at: string;
}

export interface TaxaIndicador {
    id: string;
    codigo: string;
    nome: string;
    valor: number;
    data_referencia: string;
    fonte: string;
    created_at: string;
}

export interface Insight {
    id: string;
    usuario_id?: string;
    cenario_id?: string;
    tipo: string;
    conteudo: string;
    metadata?: Record<string, unknown>;
    created_at: string;
}
