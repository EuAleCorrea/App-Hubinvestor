import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'HubInvestor - Inteligência Financeira',
        short_name: 'HubInvestor',
        description: 'Calculadoras financeiras e ferramentas de inteligência para investidores.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0F172A',
        theme_color: '#005BFF',
        icons: [
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            }
        ],
    }
}
