import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guía MOQ para Gafas de Sol: ¿Cuántos Pares Deberías Pedir Primero?',
  description: 'Un dueño de fábrica desglosa el MOQ para pedidos al por mayor de gafas. ODM desde 50-200 piezas, OEM desde 300-1.000+. Aprende la forma inteligente de escalar sin sobrecomprometerte.',
  keywords: 'MOQ gafas de sol al por mayor, cantidad mínima pedido gafas, pedido mayorista gafas, MOQ ODM, MOQ OEM gafas',
  alternates: {
    canonical: '/es/blog/guia-moq-gafas',
    languages: {
      'en': '/blog/sunglasses-moq-guide',
      'es': '/es/blog/guia-moq-gafas',
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
          "headline": "Guía MOQ para Gafas de Sol: ¿Cuántos Pares Deberías Pedir Primero?",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica desglosa el MOQ para pedidos al por mayor de gafas. ODM desde 50-200 piezas, OEM desde 300-1.000+. Aprende la forma inteligente de escalar sin sobrecomprometerte.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/guia-moq-gafas" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Cuál es el MOQ típico para gafas al por mayor?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del modelo de producción. ODM: 50-200 piezas por estilo. OEM: 300-1.000 piezas. Moldes personalizados: 500+ piezas." } },
            { "@type": "Question", "name": "¿Puedo pedir menos de 100 pares a una fábrica?", "acceptedAnswer": { "@type": "Answer", "text": "Algunas fábricas ofrecen MOQ por debajo de 100 para ODM — nosotros empezamos en 50 piezas para clientes primerizos. Ten en cuenta que cantidades muy bajas significan costos unitarios más altos." } },
            { "@type": "Question", "name": "¿Debo empezar con ODM u OEM?", "acceptedAnswer": { "@type": "Answer", "text": "Empieza con ODM. Siempre. A menos que tengas bolsillos profundos y audiencia probada. Usa tus primeros 2-3 pedidos ODM para aprender qué compran realmente tus clientes." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Mayorista</span>
            <span>3 de mayo de 2026</span>
            <span>•</span>
            <span>14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guía MOQ para Gafas de Sol: ¿Cuántos Pares Deberías Pedir Primero?
          </h1>
          <p className="text-xl text-gray-600">
            La pregunta número uno que recibo de nuevos dueños de marca no es sobre precio. Es sobre cantidad. Aquí va cómo calcular tu primer pedido sin arruinarte ni acabar con un garaje lleno de aviadores sin vender.
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
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Cuál es el MOQ típico para gafas al por mayor?</h3><p className="text-gray-600">Depende del modelo de producción. ODM: 50-200 piezas por estilo. OEM: 300-1.000 piezas. Moldes personalizados: 500+ piezas.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Puedo pedir menos de 100 pares a una fábrica?</h3><p className="text-gray-600">Algunas fábricas ofrecen MOQ por debajo de 100 para ODM — nosotros empezamos en 50 piezas para clientes primerizos. Ten en cuenta que cantidades muy bajas significan costos unitarios más altos.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Debo empezar con ODM u OEM?</h3><p className="text-gray-600">Empieza con ODM. Siempre. A menos que tengas bolsillos profundos y audiencia probada. Usa tus primeros 2-3 pedidos ODM para aprender qué compran realmente tus clientes.</p></div>
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

          <div className="mt-16 pt-8 border-t border-gray-200"><h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2><div className="grid md:grid-cols-2 gap-6"><Link href="/es/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">OEM vs ODM: ¿Cuál es la Diferencia?</h3><p className="text-gray-600 text-sm">Desglose completo de costos, plazos y cómo elegir el modelo adecuado.</p></Link><Link href="/es/blog/crear-marca-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Cómo Crear una Marca de Gafas de Sol</h3><p className="text-gray-600 text-sm">La guía completa desde la idea hasta la primera venta.</p></Link></div></div>
        </div>
      </div>
    </article>
  )
}
