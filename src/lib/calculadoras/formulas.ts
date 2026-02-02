/**
 * Biblioteca de cálculos financeiros do HubInvestor
 * Todas as fórmulas seguem padrões brasileiros
 */

/**
 * Juros Compostos: M = C * (1 + i)^n
 */
export function calcularJurosCompostos(params: {
    capitalInicial: number;
    taxaMensal: number; // em decimal (ex: 0.01 = 1%)
    meses: number;
}): {
    montanteFinal: number;
    totalJuros: number;
    evolucaoMensal: Array<{ mes: number; montante: number; juros: number }>;
} {
    const { capitalInicial, taxaMensal, meses } = params;
    const evolucaoMensal = [];

    let montanteAtual = capitalInicial;
    let jurosAcumulados = 0;

    for (let mes = 1; mes <= meses; mes++) {
        const jurosMes = montanteAtual * taxaMensal;
        montanteAtual += jurosMes;
        jurosAcumulados += jurosMes;

        evolucaoMensal.push({
            mes,
            montante: Number(montanteAtual.toFixed(2)),
            juros: Number(jurosMes.toFixed(2)),
        });
    }

    return {
        montanteFinal: Number(montanteAtual.toFixed(2)),
        totalJuros: Number(jurosAcumulados.toFixed(2)),
        evolucaoMensal,
    };
}

/**
 * Aportes Mensais (Série Uniforme): VF = PMT * [((1 + i)^n - 1) / i]
 */
export function calcularAportesMensais(params: {
    aporteMensal: number;
    taxaMensal: number;
    meses: number;
    capitalInicial?: number;
}): {
    valorFuturo: number;
    totalInvestido: number;
    totalJuros: number;
    evolucaoMensal: Array<{ mes: number; investido: number; montante: number }>;
} {
    const { aporteMensal, taxaMensal, meses, capitalInicial = 0 } = params;
    const evolucaoMensal = [];

    let montante = capitalInicial;
    let totalInvestido = capitalInicial;

    for (let mes = 1; mes <= meses; mes++) {
        // Juros sobre saldo anterior
        montante *= (1 + taxaMensal);
        // Adiciona aporte
        montante += aporteMensal;
        totalInvestido += aporteMensal;

        evolucaoMensal.push({
            mes,
            investido: Number(totalInvestido.toFixed(2)),
            montante: Number(montante.toFixed(2)),
        });
    }

    return {
        valorFuturo: Number(montante.toFixed(2)),
        totalInvestido: Number(totalInvestido.toFixed(2)),
        totalJuros: Number((montante - totalInvestido).toFixed(2)),
        evolucaoMensal,
    };
}

/**
 * Renda Passiva: quanto rende por mês dado um patrimônio
 * Usando regra dos 4% ao ano (0.33% ao mês seguro)
 */
export function calcularRendaPassiva(params: {
    patrimonio: number;
    taxaAnual?: number; // default 4%
}): {
    rendaMensal: number;
    rendaAnual: number;
    taxaUtilizada: number;
} {
    const { patrimonio, taxaAnual = 0.04 } = params;
    const rendaAnual = patrimonio * taxaAnual;
    const rendaMensal = rendaAnual / 12;

    return {
        rendaMensal: Number(rendaMensal.toFixed(2)),
        rendaAnual: Number(rendaAnual.toFixed(2)),
        taxaUtilizada: taxaAnual,
    };
}

/**
 * Independência Financeira: patrimônio necessário para despesas anuais
 * Regra: Patrimônio = Despesas Anuais * 25 (inverso de 4%)
 */
export function calcularIndependenciaFinanceira(params: {
    despesasMensais: number;
    taxaRetirada?: number; // default 4%
}): {
    patrimonioNecessario: number;
    despesasAnuais: number;
    taxaUtilizada: number;
} {
    const { despesasMensais, taxaRetirada = 0.04 } = params;
    const despesasAnuais = despesasMensais * 12;
    const patrimonioNecessario = despesasAnuais / taxaRetirada;

    return {
        patrimonioNecessario: Number(patrimonioNecessario.toFixed(2)),
        despesasAnuais: Number(despesasAnuais.toFixed(2)),
        taxaUtilizada: taxaRetirada,
    };
}

/**
 * Aposentadoria: quanto poupar por mês para atingir renda desejada
 */
export function calcularAposentadoria(params: {
    idadeAtual: number;
    idadeAposentadoria: number;
    rendaDesejada: number;
    patrimonioAtual?: number;
    taxaMensal?: number;
}): {
    patrimonioNecessario: number;
    mesesAteAposentadoria: number;
    aporteMensalNecessario: number;
    patrimonioAtual: number;
} {
    const {
        idadeAtual,
        idadeAposentadoria,
        rendaDesejada,
        patrimonioAtual = 0,
        taxaMensal = 0.005, // 0.5% ao mês (6% ao ano)
    } = params;

    const mesesAteAposentadoria = (idadeAposentadoria - idadeAtual) * 12;

    // Patrimônio necessário (regra dos 4%)
    const patrimonioNecessario = (rendaDesejada * 12) / 0.04;

    // Quanto o patrimônio atual vai render
    const patrimonioFuturo = patrimonioAtual * Math.pow(1 + taxaMensal, mesesAteAposentadoria);

    // Gap a ser preenchido
    const gap = patrimonioNecessario - patrimonioFuturo;

    // Aporte mensal necessário (fórmula inversa da série uniforme)
    let aporteMensalNecessario = 0;
    if (gap > 0 && mesesAteAposentadoria > 0) {
        const fator = (Math.pow(1 + taxaMensal, mesesAteAposentadoria) - 1) / taxaMensal;
        aporteMensalNecessario = gap / fator;
    }

    return {
        patrimonioNecessario: Number(patrimonioNecessario.toFixed(2)),
        mesesAteAposentadoria,
        aporteMensalNecessario: Number(Math.max(0, aporteMensalNecessario).toFixed(2)),
        patrimonioAtual,
    };
}

/**
 * Reserva de Emergência: valor necessário baseado em meses de despesas
 */
export function calcularReservaEmergencia(params: {
    despesasMensais: number;
    mesesCobertura?: number;
}): {
    valorNecessario: number;
    mesesCobertura: number;
} {
    const { despesasMensais, mesesCobertura = 6 } = params;

    return {
        valorNecessario: Number((despesasMensais * mesesCobertura).toFixed(2)),
        mesesCobertura,
    };
}

/**
 * Parcelado vs À Vista: compara opções de pagamento
 */
export function calcularParceladoVsAvista(params: {
    valorTotal: number;
    numeroParcelas: number;
    descontoAvista: number; // em decimal
    taxaRendimento?: number; // taxa de rendimento do dinheiro se investido
}): {
    valorAvista: number;
    valorParcela: number;
    economiaAvista: number;
    melhorOpcao: 'avista' | 'parcelado';
    justificativa: string;
} {
    const { valorTotal, numeroParcelas, descontoAvista, taxaRendimento = 0.01 } = params;

    const valorAvista = valorTotal * (1 - descontoAvista);
    const valorParcela = valorTotal / numeroParcelas;
    const economiaAvista = valorTotal - valorAvista;

    // Calcula quanto renderia investir as parcelas
    let valorFuturoInvestido = 0;
    for (let i = 0; i < numeroParcelas; i++) {
        valorFuturoInvestido += valorParcela * Math.pow(1 + taxaRendimento, numeroParcelas - i);
    }

    const ganhoInvestindo = valorFuturoInvestido - valorTotal;

    const melhorOpcao = economiaAvista > ganhoInvestindo ? 'avista' : 'parcelado';

    const justificativa = melhorOpcao === 'avista'
        ? `Economia de R$ ${economiaAvista.toFixed(2)} pagando à vista supera rendimento de R$ ${ganhoInvestindo.toFixed(2)} investindo as parcelas.`
        : `Rendimento de R$ ${ganhoInvestindo.toFixed(2)} investindo supera economia de R$ ${economiaAvista.toFixed(2)} à vista.`;

    return {
        valorAvista: Number(valorAvista.toFixed(2)),
        valorParcela: Number(valorParcela.toFixed(2)),
        economiaAvista: Number(economiaAvista.toFixed(2)),
        melhorOpcao,
        justificativa,
    };
}

/**
 * Financiamento SAC: Sistema de Amortização Constante
 */
export function calcularFinanciamentoSAC(params: {
    valorFinanciado: number;
    taxaMensal: number;
    prazoMeses: number;
}): {
    totalPago: number;
    totalJuros: number;
    primeiraParcela: number;
    ultimaParcela: number;
    parcelas: Array<{
        numero: number;
        amortizacao: number;
        juros: number;
        parcela: number;
        saldoDevedor: number;
    }>;
} {
    const { valorFinanciado, taxaMensal, prazoMeses } = params;

    const amortizacao = valorFinanciado / prazoMeses;
    const parcelas = [];
    let saldoDevedor = valorFinanciado;
    let totalJuros = 0;

    for (let i = 1; i <= prazoMeses; i++) {
        const juros = saldoDevedor * taxaMensal;
        const parcela = amortizacao + juros;
        saldoDevedor -= amortizacao;
        totalJuros += juros;

        parcelas.push({
            numero: i,
            amortizacao: Number(amortizacao.toFixed(2)),
            juros: Number(juros.toFixed(2)),
            parcela: Number(parcela.toFixed(2)),
            saldoDevedor: Number(Math.max(0, saldoDevedor).toFixed(2)),
        });
    }

    return {
        totalPago: Number((valorFinanciado + totalJuros).toFixed(2)),
        totalJuros: Number(totalJuros.toFixed(2)),
        primeiraParcela: parcelas[0].parcela,
        ultimaParcela: parcelas[parcelas.length - 1].parcela,
        parcelas,
    };
}

/**
 * Financiamento PRICE: Parcelas fixas
 */
export function calcularFinanciamentoPrice(params: {
    valorFinanciado: number;
    taxaMensal: number;
    prazoMeses: number;
}): {
    totalPago: number;
    totalJuros: number;
    parcelaFixa: number;
    parcelas: Array<{
        numero: number;
        amortizacao: number;
        juros: number;
        parcela: number;
        saldoDevedor: number;
    }>;
} {
    const { valorFinanciado, taxaMensal, prazoMeses } = params;

    // PMT = PV * [i * (1+i)^n] / [(1+i)^n - 1]
    const fator = Math.pow(1 + taxaMensal, prazoMeses);
    const parcelaFixa = valorFinanciado * (taxaMensal * fator) / (fator - 1);

    const parcelas = [];
    let saldoDevedor = valorFinanciado;
    let totalJuros = 0;

    for (let i = 1; i <= prazoMeses; i++) {
        const juros = saldoDevedor * taxaMensal;
        const amortizacao = parcelaFixa - juros;
        saldoDevedor -= amortizacao;
        totalJuros += juros;

        parcelas.push({
            numero: i,
            amortizacao: Number(amortizacao.toFixed(2)),
            juros: Number(juros.toFixed(2)),
            parcela: Number(parcelaFixa.toFixed(2)),
            saldoDevedor: Number(Math.max(0, saldoDevedor).toFixed(2)),
        });
    }

    return {
        totalPago: Number((parcelaFixa * prazoMeses).toFixed(2)),
        totalJuros: Number(totalJuros.toFixed(2)),
        parcelaFixa: Number(parcelaFixa.toFixed(2)),
        parcelas,
    };
}

/**
 * Bruto para Líquido: converte valor bruto considerando IR
 * Tabela regressiva de IR para renda fixa
 */
export function calcularBrutoLiquido(params: {
    valorBruto: number;
    diasAplicacao: number;
    tipo?: 'renda-fixa' | 'alugueis' | 'dividendos';
}): {
    valorLiquido: number;
    imposto: number;
    aliquota: number;
    isento: boolean;
} {
    const { valorBruto, diasAplicacao, tipo = 'renda-fixa' } = params;

    // Dividendos e alguns FIIs são isentos
    if (tipo === 'dividendos') {
        return {
            valorLiquido: valorBruto,
            imposto: 0,
            aliquota: 0,
            isento: true,
        };
    }

    // Tabela regressiva de IR para renda fixa
    let aliquota: number;
    if (diasAplicacao <= 180) {
        aliquota = 0.225; // 22.5%
    } else if (diasAplicacao <= 360) {
        aliquota = 0.20; // 20%
    } else if (diasAplicacao <= 720) {
        aliquota = 0.175; // 17.5%
    } else {
        aliquota = 0.15; // 15%
    }

    const imposto = valorBruto * aliquota;
    const valorLiquido = valorBruto - imposto;

    return {
        valorLiquido: Number(valorLiquido.toFixed(2)),
        imposto: Number(imposto.toFixed(2)),
        aliquota,
        isento: false,
    };
}

/**
 * Comparador de Índices: compara rendimento entre CDI, IPCA e Selic
 */
export function calcularComparadorIndices(params: {
    valorInicial: number;
    meses: number;
    taxaCDI: number; // taxa mensal
    taxaIPCA: number; // taxa mensal
    taxaSelic: number; // taxa mensal
}): {
    resultadoCDI: { valorFinal: number; rendimento: number; rentabilidade: number };
    resultadoIPCA: { valorFinal: number; rendimento: number; rentabilidade: number };
    resultadoSelic: { valorFinal: number; rendimento: number; rentabilidade: number };
    melhorOpcao: string;
} {
    const { valorInicial, meses, taxaCDI, taxaIPCA, taxaSelic } = params;

    const calcular = (taxa: number) => {
        const valorFinal = valorInicial * Math.pow(1 + taxa, meses);
        const rendimento = valorFinal - valorInicial;
        const rentabilidade = (rendimento / valorInicial) * 100;

        return {
            valorFinal: Number(valorFinal.toFixed(2)),
            rendimento: Number(rendimento.toFixed(2)),
            rentabilidade: Number(rentabilidade.toFixed(2)),
        };
    };

    const resultadoCDI = calcular(taxaCDI);
    const resultadoIPCA = calcular(taxaIPCA);
    const resultadoSelic = calcular(taxaSelic);

    const melhor = Math.max(
        resultadoCDI.valorFinal,
        resultadoIPCA.valorFinal,
        resultadoSelic.valorFinal
    );

    let melhorOpcao = 'CDI';
    if (resultadoIPCA.valorFinal === melhor) melhorOpcao = 'IPCA+';
    if (resultadoSelic.valorFinal === melhor) melhorOpcao = 'Selic';

    return {
        resultadoCDI,
        resultadoIPCA,
        resultadoSelic,
        melhorOpcao,
    };
}

/**
 * Formata valor para moeda brasileira
 */
export function formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);
}

/**
 * Formata percentual
 */
export function formatarPercentual(valor: number, casasDecimais = 2): string {
    return `${(valor * 100).toFixed(casasDecimais)}%`;
}
