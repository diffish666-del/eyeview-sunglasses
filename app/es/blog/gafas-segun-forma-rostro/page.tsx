import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Las Mejores Gafas de Sol según Tu Forma de Rostro: Guía Completa',
  description: 'Encuentra las gafas perfectas para tu forma de rostro -- redondo, ovalado, cuadrado, corazón, oblongo. Un dueño de fábrica explica qué monturas favorecen cada forma de rostro.',
  keywords: 'gafas según forma rostro, gafas cara redonda, gafas cara ovalada, gafas cara cuadrada, guía compra gafas de sol',
  alternates: {
    canonical: '/es/blog/gafas-segun-forma-rostro',
    languages: {
      'en': '/blog/sunglasses-face-shape-guide',
      'es': '/es/blog/gafas-segun-forma-rostro',
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
          "headline": "Las Mejores Gafas de Sol según Tu Forma de Rostro: Guía Completa",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Encuentra las gafas perfectas para tu forma de rostro -- redondo, ovalado, cuadrado, corazón, oblongo. Un dueño de fábrica explica qué monturas favorecen cada forma de rostro.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/gafas-segun-forma-rostro" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué gafas quedan mejor en un rostro redondo?", "acceptedAnswer": { "@type": "Answer", "text": "Monturas angulares y geométricas -- cuadradas, rectangulares, wayfarer y cat-eye añaden definición y contraste a las curvas suaves del rostro." } },
            { "@type": "Question", "name": "¿Qué gafas van bien con un rostro ovalado?", "acceptedAnswer": { "@type": "Answer", "text": "Los rostros ovalados son los más versátiles -- casi cualquier forma funciona. Aviadores, wayfarers, oversize cuadrados, cat-eye y redondos todos funcionan." } },
            { "@type": "Question", "name": "¿Qué gafas son mejores para un rostro cuadrado?", "acceptedAnswer": { "@type": "Answer", "text": "Monturas redondas y ovaladas suavizan los ángulos fuertes. Aviadores, monturas redondas, cat-eye curvos y estilo clubmaster funcionan bien." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Guía de Estilo</span>
            <span>4 de mayo de 2026</span>
            <span>•</span>
            <span>12 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Las Mejores Gafas de Sol según Tu Forma de Rostro: Guía Completa
          </h1>
          <p className="text-xl text-gray-600">
            Después de 20 años viendo a la gente probarse gafas, puedo decirte en tres segundos qué formas funcionarán para el rostro de alguien. Así es cómo descubrirlo tú mismo.
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
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Qué gafas quedan mejor en un rostro redondo?</h3><p className="text-gray-600">Monturas angulares y geométricas -- cuadradas, rectangulares, wayfarer y cat-eye añaden definición y contraste a las curvas suaves del rostro.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Qué gafas van bien con un rostro ovalado?</h3><p className="text-gray-600">Los rostros ovalados son los más versátiles -- casi cualquier forma funciona. Aviadores, wayfarers, oversize cuadrados, cat-eye y redondos todos funcionan.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Qué gafas son mejores para un rostro cuadrado?</h3><p className="text-gray-600">Monturas redondas y ovaladas suavizan los ángulos fuertes. Aviadores, monturas redondas, cat-eye curvos y estilo clubmaster funcionan bien.</p></div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Tienes Preguntas? Hablemos.</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Hago llamadas de 15 minutos con nuevos dueños de marca cada semana. Sin discurso de ventas -- solo consejos honestos basados en 20 años de experiencia.
            </p>
            <Link href="/es/contacto" className="btn-primary">
              Agenda una Llamada Gratis con Jacky
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200"><h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2><div className="grid md:grid-cols-2 gap-6"><Link href="/es/blog/tendencias-diseno-gafas-2026" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Tendencias de Diseño de Gafas para 2026</h3><p className="text-gray-600 text-sm">Qué formas y estilos están de moda -- basado en datos reales de pedidos.</p></Link><Link href="/es/blog/comparacion-materiales-monturas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metal</h3><p className="text-gray-600 text-sm">Qué material funciona mejor para cada forma de montura.</p></Link></div></div>
        </div>
      </div>
    </article>
  )
}
