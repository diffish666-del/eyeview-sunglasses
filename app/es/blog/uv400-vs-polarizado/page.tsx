import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UV400 vs Polarizado: ¿Cuál es la Diferencia y Necesitas Ambos?',
  description: 'Un dueño de fábrica explica la diferencia real entre lentes UV400 y polarizadas — qué hace cada una, impacto en costos al por mayor, y cuándo tu marca necesita una, ambas o ninguna.',
  keywords: 'UV400 vs polarizado gafas, protección UV400, lentes polarizadas, protección lentes gafas, diferencia UV400 polarizado',
  alternates: {
    canonical: '/es/blog/uv400-vs-polarizado',
    languages: {
      'en': '/blog/uv400-vs-polarized',
      'es': '/es/blog/uv400-vs-polarizado',
    },
  },
}

export default function Page() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "UV400 vs Polarizado: ¿Cuál es la Diferencia y Necesitas Ambos?",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica explica la diferencia real entre lentes UV400 y polarizadas — qué hace cada una, impacto en costos al por mayor, y cuándo tu marca necesita una, ambas o ninguna.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/uv400-vs-polarizado" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Cuál es la diferencia entre UV400 y polarizado?", "acceptedAnswer": { "@type": "Answer", "text": "UV400 bloquea la radiación ultravioleta dañina hasta 400 nanómetros — protege tus ojos del daño solar. Las lentes polarizadas reducen el deslumbramiento de superficies reflectantes como agua, carreteras y nieve — mejoran el confort visual. UV400 es sobre protección de salud. Polarizado es sobre rendimiento visual." } },
            { "@type": "Question", "name": "¿Las gafas polarizadas tienen protección UV?", "acceptedAnswer": { "@type": "Answer", "text": "No automáticamente. Polarización y protección UV son tecnologías separadas. Una lente polarizada sin recubrimiento UV seguirá dejando pasar rayos UV dañinos — lo cual es peligroso porque la lente oscurecida dilata tus pupilas." } },
            { "@type": "Question", "name": "¿Cuánto más cuestan las lentes polarizadas que UV400?", "acceptedAnswer": { "@type": "Answer", "text": "Al por mayor: lentes UV400 básicas cuestan $1,50-2/par. Lentes polarizadas TAC cuestan $3-5/par. Polarizadas CR-39 (grado óptico) cuestan $5-8/par." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Tecnología de Lentes</span>
            <span>3 de mayo de 2026</span>
            <span>•</span>
            <span>14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            UV400 vs Polarizado: ¿Cuál es la Diferencia y Necesitas Ambos?
          </h1>
          <p className="text-xl text-gray-600">
            Esta es la pregunta más mal entendida en el mundo de las gafas de sol. UV400 y polarizado no son lo mismo — ni siquiera están relacionados. Déjame explicar la diferencia de una vez por todas.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">

          <h2 className="text-3xl font-bold mt-16 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Cuál es la diferencia entre UV400 y polarizado?</h3><p className="text-gray-600">UV400 bloquea la radiación ultravioleta dañina hasta 400 nanómetros — protege tus ojos del daño solar. Las lentes polarizadas reducen el deslumbramiento de superficies reflectantes como agua, carreteras y nieve — mejoran el confort visual. UV400 es sobre protección de salud. Polarizado es sobre rendimiento visual.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Las gafas polarizadas tienen protección UV?</h3><p className="text-gray-600">No automáticamente. Polarización y protección UV son tecnologías separadas. Una lente polarizada sin recubrimiento UV seguirá dejando pasar rayos UV dañinos — lo cual es peligroso porque la lente oscurecida dilata tus pupilas.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Cuánto más cuestan las lentes polarizadas que UV400?</h3><p className="text-gray-600">Al por mayor: lentes UV400 básicas cuestan $1,50-2/par. Lentes polarizadas TAC cuestan $3-5/par. Polarizadas CR-39 (grado óptico) cuestan $5-8/par.</p></div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Tienes Preguntas? Hablemos.</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Hago llamadas de 15 minutos con nuevos dueños de marca cada semana. Sin discurso de ventas — solo consejos honestos basados en 20 años de experiencia.
            </p>
            <Link href="/es/contacto" className="btn-primary">
              Agenda una Llamada Gratis con Jacky
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200"><h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2><div className="grid md:grid-cols-2 gap-6"><Link href="/es/blog/guia-lentes-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guía de Lentes para Gafas de Sol</h3><p className="text-gray-600 text-sm">CR-39, policarbonato, nylon, TAC — la guía completa de materiales de lente.</p></Link><Link href="/es/blog/guia-recubrimientos-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guía de Recubrimientos para Gafas</h3><p className="text-gray-600 text-sm">Espejo, AR, hidrofóbico y más — costos reales y cómo combinarlos.</p></Link></div></div>
        </div>
      </div>
    </article>
  )
}
