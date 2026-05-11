import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Control de Calidad de Gafas de Sol: Checklist de Inspección de Fábrica',
  description: 'Un dueño de fábrica comparte el checklist completo de QC para gafas — pruebas de lentes, inspección de monturas, verificación de bisagras, verificación UV y qué buscar antes de aprobar la producción.',
  keywords: 'control calidad gafas, inspección gafas, estándares pruebas gafas, checklist QC gafas, defectos gafas de sol',
  alternates: {
    canonical: '/es/blog/control-calidad-gafas',
    languages: {
      'en': '/blog/sunglasses-quality-control',
      'es': '/es/blog/control-calidad-gafas',
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
          "headline": "Control de Calidad de Gafas de Sol: Checklist de Inspección de Fábrica",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica comparte el checklist completo de QC para gafas — pruebas de lentes, inspección de monturas, verificación de bisagras, verificación UV y qué buscar antes de aprobar la producción.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/control-calidad-gafas" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué debo verificar al inspeccionar la calidad de gafas?", "acceptedAnswer": { "@type": "Answer", "text": "Verificaciones clave: claridad de lentes (sin distorsión, burbujas ni rayaduras), verificación UV400, tensión y suavidad de bisagras, simetría de montura, consistencia de color, precisión de colocación de logo." } },
            { "@type": "Question", "name": "¿Qué es la inspección AQL para gafas?", "acceptedAnswer": { "@type": "Answer", "text": "AQL (Nivel de Calidad Aceptable) es un método de muestreo estadístico. El estándar: AQL 2,5 para defectos mayores, AQL 4,0 para defectos menores." } },
            { "@type": "Question", "name": "¿Cuánto cuesta una inspección por terceros?", "acceptedAnswer": { "@type": "Answer", "text": "$200-$400 por inspección de un día. La mejor inversión de $200-$400 que puedes hacer." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fabricación</span>
            <span>4 de mayo de 2026</span>
            <span>•</span>
            <span>14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Control de Calidad de Gafas de Sol: Checklist de Inspección de Fábrica
          </h1>
          <p className="text-xl text-gray-600">
            Voy a compartir el checklist exacto de QC que usan nuestros inspectores en cada producción. Este es el checklist que mantiene nuestra tasa de defectos por debajo del 1%.
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
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Qué debo verificar al inspeccionar la calidad de gafas?</h3><p className="text-gray-600">Verificaciones clave: claridad de lentes (sin distorsión, burbujas ni rayaduras), verificación UV400, tensión y suavidad de bisagras, simetría de montura, consistencia de color, precisión de colocación de logo.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Qué es la inspección AQL para gafas?</h3><p className="text-gray-600">AQL (Nivel de Calidad Aceptable) es un método de muestreo estadístico. El estándar: AQL 2,5 para defectos mayores, AQL 4,0 para defectos menores.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Cuánto cuesta una inspección por terceros?</h3><p className="text-gray-600">$200-$400 por inspección de un día. La mejor inversión de $200-$400 que puedes hacer.</p></div>
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

          <div className="mt-16 pt-8 border-t border-gray-200"><h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2><div className="grid md:grid-cols-2 gap-6"><Link href="/es/blog/certificacion-fda-ce-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guía de Certificación FDA y CE</h3><p className="text-gray-600 text-sm">Las pruebas de cumplimiento son parte del control de calidad.</p></Link><Link href="/es/blog/encontrar-fabricante-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Cómo Encontrar un Fabricante Fiable</h3><p className="text-gray-600 text-sm">Las capacidades de QC son un factor clave al elegir fábrica.</p></Link></div></div>
        </div>
      </div>
    </article>
  )
}
