import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog de la Industria de Gafas de Sol | Fabricación y Branding',
  description: 'Conocimientos expertos de un fabricante de gafas de sol con 20 años de experiencia. Guías OEM/ODM, tecnología de lentes, consejos de aprovisionamiento y estrategias para emprendedores.',
  keywords: 'blog gafas de sol, industria gafas, fabricación gafas de sol, guía OEM gafas, crear marca gafas, guía lentes, encontrar fabricante',
  alternates: {
    canonical: '/es/blog',
    languages: {
      'en': '/blog',
      'es': '/es/blog',
    },
  },
}

const posts = [
  {
    slug: 'negociar-fabricantes-chinos',
    title: 'Cómo Negociar con Fabricantes Chinos de Gafas de Sol: Guía Interna',
    excerpt: 'Un dueño de fábrica revela exactamente cómo negociar con fabricantes chinos. Niveles reales de precios, flexibilidad de pedido mínimo, frases que funcionan y lo que realmente piensa la fábrica cuando pides "tu mejor precio".',
    date: '20 de julio de 2026',
    category: 'Aprovisionamiento',
    readTime: '9 min de lectura',
    emoji: '🤝',
    featured: false,
  },
  {
    slug: 'guias-ferias-comerciales-gafas-sol',
    title: 'Ferias de Gafas de Sol 2026: Guía para Encontrar los Mejores Proveedores',
    excerpt: 'Guía desde el lado de la fábrica sobre las principales ferias de gafas — MIDO, SILMO, Vision Expo, IOFT, Feria Óptica de Hong Kong. Costos de stand, cómo evaluar proveedores y seguimiento que realmente funciona.',
    date: '20 de julio de 2026',
    category: 'Aprovisionamiento',
    readTime: '8 min de lectura',
    emoji: '🏪',
    featured: false,
  },
  {
    slug: 'tendencias-diseno-gafas-2026',
    title: 'Tendencias de Diseño de Gafas de Sol para 2026: Qué Se Vende Ahora',
    excerpt: 'Un dueño de fábrica revela las tendencias más calientes de gafas para 2026 con datos reales de ventas -- monturas oversize, revival Y2K, materiales sostenibles y más.',
    date: '4 de mayo de 2026',
    category: 'Tendencias',
    readTime: '13 min de lectura',
    emoji: '📈',
    featured: false,
  },
  {
    slug: 'costo-iniciar-marca-gafas',
    title: '¿Cuánto Cuesta Iniciar una Marca de Gafas de Sol en 2026?',
    excerpt: 'Desglose completo de costos -- desde desarrollo de producto hasta marketing. Cifras reales desde $3.000 bootstrap hasta $50.000+ lanzamiento premium.',
    date: '4 de mayo de 2026',
    category: 'Negocio',
    readTime: '15 min de lectura',
    emoji: '💰',
    featured: false,
  },
  {
    slug: 'estrategia-precios-gafas',
    title: 'Estrategia de Precios para Gafas de Sol: Del Costo de Fábrica al Precio Retail',
    excerpt: 'La economía real de los precios de gafas -- costos de fábrica, márgenes mayoristas, márgenes retail y estrategias de precios que funcionan para marcas nuevas y establecidas.',
    date: '4 de mayo de 2026',
    category: 'Negocio',
    readTime: '13 min de lectura',
    emoji: '🏷️',
    featured: false,
  },
  {
    slug: 'control-calidad-gafas',
    title: 'Control de Calidad de Gafas de Sol: Checklist de Inspección de Fábrica',
    excerpt: 'El checklist completo de QC -- pruebas de lentes, inspección de monturas, verificación de bisagras, verificación UV y qué buscar antes de aprobar la producción.',
    date: '4 de mayo de 2026',
    category: 'Fabricación',
    readTime: '14 min de lectura',
    emoji: '✅',
    featured: false,
  },
  {
    slug: 'certificacion-fda-ce-gafas',
    title: 'Certificación FDA y CE para Gafas de Sol: Guía Completa de Cumplimiento',
    excerpt: 'Registro FDA, marcado CE, pruebas UV y estándares ANSI -- guía paso a paso para vender gafas en EE.UU., la UE y globalmente.',
    date: '4 de mayo de 2026',
    category: 'Cumplimiento',
    readTime: '15 min de lectura',
    emoji: '📋',
    featured: false,
  },
  {
    slug: 'guia-importar-gafas',
    title: 'Cómo Importar Gafas de Sol desde China: Guía Completa 2026',
    excerpt: 'Desde el otro lado de la ecuación -- aprovisionamiento, envío, aranceles, control de calidad y los errores que veo cometer cada mes.',
    date: '4 de mayo de 2026',
    category: 'Aprovisionamiento',
    readTime: '16 min de lectura',
    emoji: '🚢',
    featured: false,
  },
  {
    slug: 'fabricacion-sostenible-gafas',
    title: 'Fabricación Sostenible de Gafas de Sol: Materiales y Procesos Ecológicos',
    excerpt: 'Bio-acetato, nylon reciclado, plástico oceánico, empaque ecológico -- qué significa realmente "sostenible" en la producción de gafas y cuánto cuesta.',
    date: '4 de mayo de 2026',
    category: 'Sostenibilidad',
    readTime: '13 min de lectura',
    emoji: '🌿',
    featured: false,
  },
  {
    slug: 'gafas-segun-forma-rostro',
    title: 'Las Mejores Gafas de Sol según Tu Forma de Rostro: Guía Completa',
    excerpt: 'Encuentra las gafas perfectas para tu forma de rostro -- redondo, ovalado, cuadrado, corazón, oblongo. Con ejemplos reales y consejos de compra.',
    date: '4 de mayo de 2026',
    category: 'Guía de Estilo',
    readTime: '12 min de lectura',
    emoji: '😎',
    featured: false,
  },
  {
    slug: 'empaque-personalizado-gafas',
    title: 'Empaque Personalizado para Gafas de Sol: Guía Completa de Branding 2026',
    excerpt: 'Cada opción de empaque desglosada -- estuches rígidos, fundas, cajas retail, etiquetas y más. Costos reales por pieza y consejos de unboxing.',
    date: '3 de mayo de 2026',
    category: 'Branding',
    readTime: '14 min de lectura',
    emoji: '📦',
    featured: false,
  },
  {
    slug: 'comparacion-materiales-monturas',
    title: 'TR90 vs Acetato vs Metal: ¿Qué Material de Montura Es el Adecuado?',
    excerpt: 'Datos reales de costos, comparaciones de peso, pruebas de durabilidad y qué material funciona mejor para cada estrategia de marca.',
    date: '3 de mayo de 2026',
    category: 'Materiales',
    readTime: '14 min de lectura',
    emoji: '🔧',
    featured: false,
  },
  {
    slug: 'guia-recubrimientos-gafas',
    title: 'Guía de Recubrimientos para Gafas: Espejo, Antirreflejo, Hidrofóbico y Más',
    excerpt: 'Cada tipo de recubrimiento desglosado -- qué hace, cuánto cuesta y cuáles combinar. Costos reales de producción incluidos.',
    date: '3 de mayo de 2026',
    category: 'Tecnología',
    readTime: '14 min de lectura',
    emoji: '✨',
    featured: false,
  },
  {
    slug: 'guia-moq-gafas',
    title: 'Guía MOQ para Gafas de Sol: ¿Cuántos Pares Deberías Pedir Primero?',
    excerpt: 'ODM desde 50 piezas, OEM desde 300+. La forma inteligente de escalar tu primer pedido sin sobrecomprometerte ni arruinarte.',
    date: '3 de mayo de 2026',
    category: 'Mayorista',
    readTime: '14 min de lectura',
    emoji: '📊',
    featured: false,
  },
  {
    slug: 'uv400-vs-polarizado',
    title: 'UV400 vs Polarizado: ¿Cuál es la Diferencia y Necesitas Ambos?',
    excerpt: 'La diferencia real entre UV400 y polarizado -- qué hace cada una, impacto en costos al por mayor y cuándo tu marca necesita una, ambas o ninguna.',
    date: '3 de mayo de 2026',
    category: 'Tecnología',
    readTime: '14 min de lectura',
    emoji: '🕶️',
    featured: false,
  },
  {
    slug: 'encontrar-fabricante-gafas',
    title: 'Cómo Encontrar un Fabricante de Gafas de Sol Fiable en 2026',
    excerpt: 'Un dueño de fábrica revela dónde encontrar fabricantes, cómo detectar intermediarios en Alibaba, 10 criterios de evaluación y consejos de negociación desde el otro lado de la mesa.',
    date: '28 de abril de 2026',
    category: 'Aprovisionamiento',
    readTime: '16 min de lectura',
    emoji: '🔍',
    featured: false,
  },
  {
    slug: 'guia-lentes-gafas',
    title: 'Tipos de Lentes para Gafas de Sol: Guía Completa 2026',
    excerpt: '¿Policarbonato, CR-39, cristal o TAC? ¿Gris, marrón o espejo? ¿Polarizadas o no? Costos reales, comparaciones honestas y la estrategia de lentes para tu marca.',
    date: '25 de abril de 2026',
    category: 'Tecnología',
    readTime: '14 min de lectura',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM en Gafas de Sol: ¿Cuál es la Diferencia? Guía Completa',
    excerpt: 'Después de 3.000 conversaciones sobre OEM vs ODM, aquí va la versión honesta -- costos reales, plazos reales y un marco de decisión que realmente te ayuda a elegir.',
    date: '20 de abril de 2026',
    category: 'Fabricación',
    readTime: '12 min de lectura',
    emoji: '🏭',
    featured: false,
  },
  {
    slug: 'crear-marca-gafas',
    title: 'Cómo Crear tu Propia Marca de Gafas de Sol: Guía Completa',
    excerpt: 'La guía completa desde la idea hasta la primera venta -- investigación de mercado, aprovisionamiento, branding, precios y marketing. Todo lo que me hubiera gustado saber cuando empecé en 2006.',
    date: '28 de marzo de 2026',
    category: 'Negocio',
    readTime: '10 min de lectura',
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
            Directo Desde la Fábrica
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información sin rodeos sobre fabricación de gafas de sol, aprovisionamiento y creación de marcas -- 
            escrita por alguien que fabrica gafas desde 2006.
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
                <span className="text-primary-600 font-semibold text-sm mb-2">DESTACADO</span>
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
                <Link href={`/es/blog/${featured.slug}`} className="btn-primary self-start">
                  Leer Artículo
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/es/blog/${post.slug}`} className="card group">
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
            Recibe Novedades de Fábrica en tu Correo
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Un email al mes. Sin relleno -- solo consejos de fabricación, tendencias del mercado 
            y estrategias de aprovisionamiento que realmente te ayudan a construir una mejor marca.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Suscribirse
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
