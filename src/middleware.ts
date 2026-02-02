import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Lista de caminhos conhecidos ou padrões do site antigo (Exemplos comuns)
    const oldPaths = [
        '/contato',
        '/sobre',
        '/blog',
        '/servicos',
        '/investimentos-antigo',
        '/home',
    ]

    // Se o caminho atual for um dos antigos, redireciona para a home ou calculadoras
    if (oldPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/calculadoras', request.url), {
            status: 301 // Permanente para SEO
        })
    }

    return NextResponse.next()
}

// Configura o middleware para rodar em todos os caminhos exceto estáticos e APIs
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|icon.png|manifest.json).*)',
    ],
}
