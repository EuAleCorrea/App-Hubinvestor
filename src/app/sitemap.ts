import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hubinvestor.com.br'

    const calculadoras = [
        'juros-compostos',
        'aportes-mensais',
        'aposentadoria',
        'renda-passiva',
        'independencia-financeira',
        'salario-liquido',
        'reserva-emergencia',
        'juros-simples',
        'renda-fixa',
        'comparador-indices',
        'imposto-renda',
        'financiamento-price',
        'financiamento-sac',
        'roi',
    ]

    const calculadorasUrls: MetadataRoute.Sitemap = calculadoras.map((calc) => ({
        url: `${baseUrl}/calculadoras/${calc}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/lp`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/calculadoras`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/termos`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacidade`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...calculadorasUrls,
    ]
}
