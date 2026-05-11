import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estrategia de Precios para Gafas de Sol: Del Costo de Fábrica al Precio Retail',
  description: 'Un dueño de fábrica revela la economía real de los precios de gafas — costos de fábrica, márgenes mayoristas, márgenes retail y estrategias de precios que funcionan.',
  keywords: 'precios gafas de sol, margen gafas, precios mayorista gafas, margen beneficio gafas, estrategia precios retail gafas',
  alternates: {
    canonical: '/es/blog/estrategia-precios-gafas',
    languages: {
      'en': '/blog/sunglasses-pricing-strategy',
      'es': '/es/blog/estrategia-precios-gafas',
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
          "headline": "Estrategia de Precios para Gafas de Sol: Del Costo de Fábrica al Precio Retail",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica revela la economía real de los precios de gafas — costos de fábrica, márgenes mayoristas, márgenes retail y estrategias de precios que funcionan.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/estrategia-precios-gafas" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Cuál es el margen típico en gafas de sol?", "acceptedAnswer": { "@type": "Answer", "text": "La cadena típica: Costo fábrica × 2-3 = precio mayorista × 2-2,5 = precio retail. Total: 4-8x desde fábrica hasta retail. Las marcas DTC capturan el margen completo." } },
            { "@type": "Question", "name": "¿Cuánto cuesta fabricar gafas de sol?", "acceptedAnswer": { "@type": "Answer", "text": "ODM: $3-8/par. OEM: $5-15+/par. Materiales premium: $15-30/par. Estos son costos FOB — añade $2-5 por par para envío, aranceles y empaque." } },
            { "@type": "Question", "name": "¿A qué precio debo vender mis gafas?", "acceptedAnswer": { "@type": "Answer", "text": "Valor: $15-30. Gama media: $30-80. Premium: $80-150. Lujo: $150+. La mayoría de marcas DTC nuevas tienen éxito en el rango de $30-60." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Negocio</span>
            <span>4 de mayo de 2026</span>
            <span>•</span>
            <span>13 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Estrategia de Precios para Gafas de Sol: Del Costo de Fábrica al Precio Retail
          </h1>
          <p className="text-xl text-gray-600">
            Veo ambos lados de la ecuación de precios cada día — lo que cuesta fabricar gafas y a cuánto se venden. La brecha es mayor de lo que la mayoría cree, y entenderla es la clave para construir una marca rentable.
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
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Cuál es el margen típico en gafas de sol?</h3><p className="text-gray-600">La cadena típica: Costo fábrica × 2-3 = precio mayorista × 2-2,5 = precio retail. Total: 4-8x desde fábrica hasta retail. Las marcas DTC capturan el margen completo.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Cuánto cuesta fabricar gafas de sol?</h3><p className="text-gray-600">ODM: $3-8/par. OEM: $5-15+/par. Materiales premium: $15-30/par. Estos son costos FOB — añade $2-5 por par para envío, aranceles y empaque.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿A qué precio debo vender mis gafas?</h3><p className="text-gray-600">Valor: $15-30. Gama media: $30-80. Premium: $80-150. Lujo: $150+. La mayoría de marcas DTC nuevas tienen éxito en el rango de $30-60.</p></div>
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

          <div className="mt-16 pt-8 border-t border-gray-200"><h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2><div className="grid md:grid-cols-2 gap-6"><Link href="/es/blog/costo-iniciar-marca-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">¿Cuánto Cuesta Iniciar una Marca de Gafas?</h3><p className="text-gray-600 text-sm">Desglose completo de presupuesto desde $5K hasta $50K+.</p></Link><Link href="/es/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">OEM vs ODM: ¿Cuál es la Diferencia?</h3><p className="text-gray-600 text-sm">El modelo de fabricación que elijas impacta directamente tu poder de fijación de precios.</p></Link></div></div>
        </div>
      </div>
    </article>
  )
}
