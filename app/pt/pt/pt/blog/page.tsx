import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog da Indústria de Óculos de Sol | Fabricação e Branding',
  description: 'Conhecimento especializado de um fabricante de óculos de sol com 20 anos de experiência. Guias OEM/ODM, tecnologia de lentes, dicas de fornecimento e estratégias para empreendedores.',
  keywords: 'blog óculos de sol, indústria óculos, fabricação óculos de sol, guia OEM óculos, criar marca óculos, guia lentes, encontrar fabricante',
  alternates: {
    canonical: '/pt/blog',
    languages: {
      'en': '/blog',
      'pt': '/pt/blog',
    },
  },
}

const posts = [
  {
    slug: 'guia-feiras-comerciais-oculos-sol',
    title: 'Feiras de Óculos de Sol 2026: Guia do Fabricante para Encontrar Fornecedores',
    excerpt: 'Guia de um fabricante chinês sobre as principais feiras de óculos em 2026 — MIDO, SILMO, Vision Expo, IOFT, Feira Óptica de Hong Kong. Custos de estande, estratégias de avaliação e follow-up que funciona.',
    date: '20 de julho de 2026',
    category: 'Fornecimento',
    readTime: '8 min de leitura',
    emoji: '🎪',
    featured: false,
  },
  {
    slug: 'negociar-fabricantes-chineses',
    title: 'Como Negociar com Fabricantes Chineses de Óculos de Sol: Guia Interno',
    excerpt: 'Dono de fábrica revela exatamente como negociar com fabricantes chineses. Faixas de preço reais, flexibilidade de MOQ, frases que funcionam e o que os donos de fábrica realmente pensam.',
    date: '20 de julho de 2026',
    category: 'Fornecimento',
    readTime: '9 min de leitura',
    emoji: '🤝',
    featured: false,
  },
  {
    slug: 'certificacao-fda-ce-oculos-sol',
    title: 'Certificação FDA e CE para Óculos de Sol: Guia Completo de Conformidade',
    excerpt: 'Um dono de fábrica explica registro FDA, marcação CE, testes UV e normas ANSI para óculos de sol. Guia passo a passo para vender óculos nos EUA, UE e globalmente.',
    date: '4 de maio de 2026',
    category: 'Conformidade',
    readTime: '12 min de leitura',
    emoji: '📋',
    featured: false,
  },
  {
    slug: 'tendencias-design-oculos-2026',
    title: 'Principais Tendências de Design de Óculos de Sol para 2026',
    excerpt: 'Dados reais de vendas sobre o que está bombando -- armações oversized, revival Y2K, materiais sustentáveis, estilos rimless e mais. Direto do chão de fábrica.',
    date: '4 de maio de 2026',
    category: 'Tendências',
    readTime: '10 min de leitura',
    emoji: '🔥',
    featured: false,
  },
  {
    slug: 'guia-formato-rosto-oculos',
    title: 'Melhores Óculos de Sol para Cada Formato de Rosto: Guia Completo',
    excerpt: 'Rosto redondo, oval, quadrado, coração ou oblongo? Descubra quais armações valorizam cada formato com exemplos reais e dicas de compra.',
    date: '4 de maio de 2026',
    category: 'Estilo',
    readTime: '10 min de leitura',
    emoji: '👤',
    featured: false,
  },
  {
    slug: 'estrategia-precos-oculos-sol',
    title: 'Estratégia de Preços para Óculos de Sol: Do Custo de Fábrica ao Varejo',
    excerpt: 'A economia real de preços de óculos -- custos de fábrica, markup de atacado, margens de varejo e estratégias que funcionam para marcas novas e estabelecidas.',
    date: '4 de maio de 2026',
    category: 'Negócios',
    readTime: '12 min de leitura',
    emoji: '💰',
    featured: false,
  },
  {
    slug: 'controle-qualidade-oculos-sol',
    title: 'Controle de Qualidade de Óculos de Sol: Checklist de Inspeção de Fábrica',
    excerpt: 'O checklist completo de QC para óculos -- teste de lentes, inspeção de armação, verificação de dobradiças, verificação UV e o que conferir antes de aprovar a produção.',
    date: '4 de maio de 2026',
    category: 'Qualidade',
    readTime: '12 min de leitura',
    emoji: '✅',
    featured: false,
  },
  {
    slug: 'custo-criar-marca-oculos-sol',
    title: 'Quanto Custa Criar uma Marca de Óculos de Sol em 2026?',
    excerpt: 'Cada custo detalhado -- do desenvolvimento de produto ao marketing. Números reais de US$3.000 econômico a US$50.000+ premium.',
    date: '4 de maio de 2026',
    category: 'Negócios',
    readTime: '13 min de leitura',
    emoji: '🧮',
    featured: false,
  },
  {
    slug: 'fabricacao-sustentavel-oculos-sol',
    title: 'Fabricação Sustentável de Óculos de Sol: Materiais e Processos Ecológicos',
    excerpt: 'Bio-acetato, nylon reciclado, plástico oceânico, embalagem ecológica -- o que "sustentável" realmente significa na produção de óculos e quanto custa a mais.',
    date: '4 de maio de 2026',
    category: 'Sustentabilidade',
    readTime: '12 min de leitura',
    emoji: '🌿',
    featured: false,
  },
  {
    slug: 'guia-importacao-oculos-sol',
    title: 'Como Importar Óculos de Sol da China: Guia Completo 2026',
    excerpt: 'Fornecimento, envio, taxas alfandegárias, controle de qualidade e erros comuns a evitar. Escrito por um dono de fábrica chinesa que está do outro lado.',
    date: '4 de maio de 2026',
    category: 'Importação',
    readTime: '14 min de leitura',
    emoji: '🚢',
    featured: false,
  },
  {
    slug: 'embalagem-personalizada-oculos-sol',
    title: 'Embalagem Personalizada para Óculos de Sol: Guia Completo de Branding',
    excerpt: 'Estojos rígidos, bolsas, caixas de varejo, tags e mais -- cada opção de embalagem com custos reais por peça e dicas de unboxing que geram vendas repetidas.',
    date: '3 de maio de 2026',
    category: 'Branding',
    readTime: '14 min de leitura',
    emoji: '📦',
    featured: false,
  },
  {
    slug: 'comparacao-materiais-armacoes',
    title: 'TR90 vs Acetato vs Metal: Qual Material de Armação é Ideal?',
    excerpt: 'Custos reais, comparações de peso, testes de durabilidade e qual material funciona melhor para diferentes estratégias de marca. Dados de fábrica incluídos.',
    date: '3 de maio de 2026',
    category: 'Materiais',
    readTime: '13 min de leitura',
    emoji: '🔧',
    featured: false,
  },
  {
    slug: 'guia-revestimentos-oculos-sol',
    title: 'Guia de Revestimentos: Espelhado, Antirreflexo, Hidrofóbico e Mais',
    excerpt: 'Cada tipo de revestimento detalhado -- espelhado, AR, hidrofóbico, oleofóbico, anti-embaçante, hard coat. Custos reais por par e combinações que funcionam.',
    date: '3 de maio de 2026',
    category: 'Tecnologia',
    readTime: '12 min de leitura',
    emoji: '✨',
    featured: false,
  },
  {
    slug: 'uv400-vs-polarizado',
    title: 'UV400 vs Polarizado: Qual a Diferença e Você Precisa dos Dois?',
    excerpt: 'A diferença real entre lentes UV400 e polarizadas -- o que cada uma faz, impacto no custo e quando sua marca precisa de uma, ambas ou nenhuma.',
    date: '3 de maio de 2026',
    category: 'Tecnologia',
    readTime: '11 min de leitura',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'guia-moq-oculos-sol',
    title: 'Guia de MOQ para Óculos de Sol: Quantos Pares Pedir?',
    excerpt: 'ODM começa em 50-200 peças, OEM em 300-1.000+. A forma inteligente de escalar seu primeiro pedido sem se comprometer demais.',
    date: '3 de maio de 2026',
    category: 'Fornecimento',
    readTime: '11 min de leitura',
    emoji: '📊',
    featured: false,
  },
  {
    slug: 'encontrar-fabricante-oculos-sol',
    title: 'Como Encontrar um Fabricante de Óculos de Sol Confiável em 2026',
    excerpt: 'Onde encontrar fabricantes, como identificar intermediários no Alibaba, 10 critérios de avaliação e dicas de negociação do outro lado da mesa.',
    date: '28 de abril de 2026',
    category: 'Fornecimento',
    readTime: '16 min de leitura',
    emoji: '🔍',
    featured: false,
  },
  {
    slug: 'guia-lentes-oculos-sol',
    title: 'Tipos de Lentes para Óculos de Sol: Guia Completo 2026',
    excerpt: 'Policarbonato, CR-39, vidro ou TAC? Cinza, marrom ou espelhado? Polarizado ou não? Custos reais, comparações honestas e a estratégia de lentes para sua marca.',
    date: '25 de abril de 2026',
    category: 'Tecnologia',
    readTime: '14 min de leitura',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM em Óculos de Sol: Qual é a Diferença? Guia Completo',
    excerpt: 'Depois de 3.000 conversas sobre OEM vs ODM, aqui vai a versão honesta -- custos reais, prazos reais e um framework de decisão que realmente ajuda a escolher.',
    date: '20 de abril de 2026',
    category: 'Fabricação',
    readTime: '12 min de leitura',
    emoji: '🏭',
    featured: false,
  },
  {
    slug: 'criar-marca-oculos-sol',
    title: 'Como Criar Sua Marca de Óculos de Sol: Guia Completo',
    excerpt: 'O guia completo da ideia à primeira venda -- pesquisa de mercado, fornecimento, branding, preços e marketing. Tudo que eu gostaria de ter sabido quando comecei em 2006.',
    date: '28 de março de 2026',
    category: 'Negócios',
    readTime: '10 min de leitura',
    emoji: '🚀',
    featured: true,
  },
]

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Direto da Fábrica
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informação sem rodeios sobre fabricação de óculos de sol, fornecimento e criação de marcas -- 
            escrita por alguém que fabrica óculos desde 2006.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div className="text-left">
              <div className="font-medium text-gray-900 text-sm">Escrito por Jacky Chen</div>
              <div className="text-xs text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="card mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 aspect-video md:aspect-auto flex items-center justify-center">
                <span className="text-8xl">{featured.emoji}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary-600 font-semibold text-sm mb-2">DESTAQUE</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <Link href={`/pt/blog/${featured.slug}`} className="btn-primary self-start">
                  Ler Artigo
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/pt/blog/${post.slug}`} className="card group">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">{post.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <section className="mt-20 bg-primary-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Receba Novidades da Fábrica no Seu Email
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Um email por mês. Sem enrolação -- apenas dicas de fabricação, tendências de mercado 
            e estratégias de fornecimento que realmente ajudam a construir uma marca melhor.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Digite seu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Assinar
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
