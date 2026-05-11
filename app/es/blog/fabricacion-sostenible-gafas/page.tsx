import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabricación Sostenible de Gafas de Sol: Materiales y Procesos Ecológicos',
  description: 'Un dueño de fábrica explica la fabricación sostenible de gafas — bio-acetato, nylon reciclado, plástico oceánico, empaque ecológico y qué significa realmente "sostenible" en la producción de gafas.',
  keywords: 'gafas sostenibles, fabricación ecológica gafas, gafas recicladas, bio-acetato gafas, plástico oceánico gafas',
  alternates: {
    canonical: '/es/blog/fabricacion-sostenible-gafas',
    languages: {
      'en': '/blog/sustainable-sunglasses-manufacturing',
      'es': '/es/blog/fabricacion-sostenible-gafas',
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
          "headline": "Fabricación Sostenible de Gafas de Sol: Materiales y Procesos Ecológicos",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica explica la fabricación sostenible de gafas — bio-acetato, nylon reciclado, plástico oceánico, empaque ecológico y qué significa realmente "sostenible" en la producción de gafas.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/fabricacion-sostenible-gafas" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿De qué están hechas las gafas sostenibles?", "acceptedAnswer": { "@type": "Answer", "text": "Los materiales más comunes: bio-acetato (de semilla de algodón y pulpa de madera), nylon/TR90 reciclado (de plástico oceánico), metales reciclados, bambú y madera, y bioplásticos." } },
            { "@type": "Question", "name": "¿Cuánto más cuestan las gafas sostenibles de fabricar?", "acceptedAnswer": { "@type": "Answer", "text": "Los materiales sostenibles típicamente añaden un 10-25% a los costos. El bio-acetato cuesta un 15% más que el acetato tradicional. Sin embargo, el premium retail por branding \"sostenible\" puede ser 30-50% más alto." } },
            { "@type": "Question", "name": "¿Es el bio-acetato tan duradero como el acetato normal?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. El bio-acetato moderno de proveedores como Mazzucchelli (M49) tiene propiedades prácticamente idénticas al acetato convencional." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sostenibilidad</span>
            <span>4 de mayo de 2026</span>
            <span>•</span>
            <span>13 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fabricación Sostenible de Gafas de Sol: Materiales y Procesos Ecológicos
          </h1>
          <p className="text-xl text-gray-600">
            La sostenibilidad en gafas está llena de greenwashing. Déjame contarte qué es real, qué es marketing, y cuánto cuesta realmente hacerlo bien.
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
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿De qué están hechas las gafas sostenibles?</h3><p className="text-gray-600">Los materiales más comunes: bio-acetato (de semilla de algodón y pulpa de madera), nylon/TR90 reciclado (de plástico oceánico), metales reciclados, bambú y madera, y bioplásticos.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Cuánto más cuestan las gafas sostenibles de fabricar?</h3><p className="text-gray-600">Los materiales sostenibles típicamente añaden un 10-25% a los costos. El bio-acetato cuesta un 15% más que el acetato tradicional. Sin embargo, el premium retail por branding "sostenible" puede ser 30-50% más alto.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">¿Es el bio-acetato tan duradero como el acetato normal?</h3><p className="text-gray-600">Sí. El bio-acetato moderno de proveedores como Mazzucchelli (M49) tiene propiedades prácticamente idénticas al acetato convencional.</p></div>
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

          <div className="mt-16 pt-8 border-t border-gray-200"><h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2><div className="grid md:grid-cols-2 gap-6"><Link href="/es/blog/comparacion-materiales-monturas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metal</h3><p className="text-gray-600 text-sm">Comparación completa de materiales de montura.</p></Link><Link href="/es/blog/tendencias-diseno-gafas-2026" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Tendencias de Diseño 2026</h3><p className="text-gray-600 text-sm">Los materiales sostenibles son una de las tendencias más fuertes.</p></Link></div></div>
        </div>
      </div>
    </article>
  )
}
