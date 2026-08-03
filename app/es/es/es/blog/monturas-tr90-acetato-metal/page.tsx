import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monturas TR90 vs Acetato vs Metal: Guía Completa para Compradores 2026',
  description: 'Un dueño de fábrica explica las diferencias reales entre monturas TR90, acetato y metal -- durabilidad, peso, costo, y cuál material es correcto para tu marca.',
  keywords: 'TR90 vs acetato vs metal gafas, materiales monturas gafas, monturas TR90, monturas acetato, monturas metal, gafas ligeras, gafas flexibles, monturas gafas al por mayor',
  alternates: {
    canonical: '/es/blog/monturas-tr90-acetato-metal',
    languages: {
      'en': '/blog/tr90-vs-acetate-vs-metal',
      'es': '/es/blog/monturas-tr90-acetato-metal',
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
          "headline": "Monturas TR90 vs Acetato vs Metal: Guía Completa para Compradores 2026",
          "datePublished": "2026-05-23",
          "dateModified": "2026-05-23",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica explica las diferencias reales entre monturas TR90, acetato y metal -- durabilidad, peso, costo, y cuál material es correcto para tu marca.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/monturas-tr90-acetato-metal" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué material de montura es más duradero?", "acceptedAnswer": { "@type": "Answer", "text": "TR90 es el más duradero por resistencia al impacto y flexibilidad -- puede doblarse y volver a su forma sin romperse. El acetato es duradero para uso diario pero puede agrietarse bajo estrés extremo. Las monturas de metal son fuertes pero pueden deformarse y son más difíciles de reparar. Para deportes activos o niños, TR90 es el claro ganador." } },
            { "@type": "Question", "name": "¿Qué material de montura es más ligero?", "acceptedAnswer": { "@type": "Answer", "text": "TR90 es el más ligero -- una montura TR90 típica pesa 15-20 gramos. Las monturas de metal son las siguientes con 20-30 gramos dependiendo de la aleación. El acetato es el más pesado con 25-40 gramos porque se talla de bloques sólidos de material. Si el peso es tu prioridad, TR90 es la mejor opción." } },
            { "@type": "Question", "name": "¿Qué material de montura es mejor para gafas de moda?", "acceptedAnswer": { "@type": "Answer", "text": "El acetato es el estándar de oro para gafas de moda. Puede cortarse en formas audaces y gruesas, pulirse a alto brillo, y viene en cientos de colores y patrones (tortuga, mármol, degradado, transparente). Marcas de lujo como Tom Ford, Gucci y Prada usan casi exclusivamente acetato." } },
            { "@type": "Question", "name": "¿Cuánto cuestan diferentes materiales de montura al por mayor?", "acceptedAnswer": { "@type": "Answer", "text": "Al por mayor en fábrica: monturas TR90 cuestan $3-8/par dependiendo de la complejidad. Monturas de acetato cuestan $5-15/par (acetato premium pulido a mano puede alcanzar $20+). Monturas de metal cuestan $4-12/par dependiendo de la aleación y chapado." } },
            { "@type": "Question", "name": "¿Las monturas de metal son mejores para personas con alergias?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del metal. El acero inoxidable y el titanio son hipoalergénicos y seguros para piel sensible. Sin embargo, algunas aleaciones metálicas más baratas contienen níquel, que puede causar reacciones alérgicas. Si buscas monturas de metal para una marca, especifica siempre aleaciones libres de níquel." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Materiales</span>
            <span>23 de mayo de 2026</span>
            <span>•</span>
            <span>16 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Monturas TR90 vs Acetato vs Metal: Guía Completa para Compradores 2026
          </h1>
          <p className="text-xl text-gray-600">
            Llevo más de 10 años fabricando monturas de gafas. Y la pregunta #1 que me hacen los dueños de marcas: 
            ¿Qué material debo usar? La respuesta depende de tu punto de precio, tu cliente y lo que estés tratando de lograr. Déjame desglosarlo.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Tabla de Contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#los-tres-materiales" className="text-primary-600 hover:underline">Los Tres Materiales Principales</a></li>
            <li><a href="#tr90" className="text-primary-600 hover:underline">TR90: La Maravilla Flexible</a></li>
            <li><a href="#acetato" className="text-primary-600 hover:underline">Acetato: El Estándar de Moda</a></li>
            <li><a href="#metal" className="text-primary-600 hover:underline">Metal: La Elección Clásica</a></li>
            <li><a href="#comparacion" className="text-primary-600 hover:underline">Comparación Lado a Lado</a></li>
            <li><a href="#costo" className="text-primary-600 hover:underline">Desglose de Costos para Tu Marca</a></li>
            <li><a href="#elegir" className="text-primary-600 hover:underline">Cómo Elegir el Material Correcto</a></li>
            <li><a href="#tendencias" className="text-primary-600 hover:underline">Tendencias de Materiales 2026</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas que Me Hacen Cada Semana</a></li>
          </ul>
        </nav>

        <section id="los-tres-materiales" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Los Tres Materiales Principales</h2>
          <p className="text-gray-700 mb-4">
            Cuando buscas gafas de sol para tu marca, básicamente estás eligiendo entre tres materiales de montura:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>TR90</strong> -- Un termoplástico flexible y ultraligero de Suiza (Gril TR90 es la versión premium)</li>
            <li><strong>Acetato</strong> -- Un plástico de origen vegetal tallado y pulido en formas audaces y premium</li>
            <li><strong>Metal</strong> -- Monturas de acero inoxidable, aluminio o titanio para un look clásico y elegante</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Cada uno tiene fortalezas y debilidades. Ninguno es el &quot;mejor&quot; en todo. La elección correcta depende del posicionamiento de tu marca, tu cliente objetivo y tu punto de precio.
          </p>
        </section>

        <section id="tr90" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TR90: La Maravilla Flexible</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es TR90?</h3>
          <p className="text-gray-700 mb-4">
            TR90 es un material termoplástico desarrollado por la empresa suiza EMS-Chimie. Técnicamente se llama &quot;Gril TR90&quot; (ese es el nombre de marca), pero todos en la industria simplemente lo llaman TR90. Es conocido por ser increíblemente ligero y flexible.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Características Clave</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Peso:</strong> 15-20 gramos por montura -- la opción más ligera disponible</li>
            <li><strong>Flexibilidad:</strong> Puede doblarse significativamente y volver a su forma sin romperse</li>
            <li><strong>Resistencia al impacto:</strong> Extremadamente alta -- sobrevive caídas, sentadas y pisotones</li>
            <li><strong>Acabado superficial:</strong> Mate o semibrillante, no puede pulirse a alto brillo como el acetato</li>
            <li><strong>Opciones de color:</strong> Limitadas a colores moldeados por inyección -- sin patrones de tortuga, mármol o capas</li>
            <li><strong>Hipoalergénico:</strong> Sí -- seguro para todos los tipos de piel</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mejor Para</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Gafas de sol deportivas y de estilo de vida activo</li>
            <li>Gafas de sol para niños (flexibles, ligeras, irrompibles)</li>
            <li>Líneas de moda económicas</li>
            <li>Diseños envolventes y de rendimiento</li>
            <li>Clientes que quieren comodidad todo el día</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-800 font-medium">💡 Consejo de Fábrica: Si buscas TR90, pide &quot;Gril TR90&quot; (el original suizo) en lugar de TR90 genérico. La diferencia de calidad es notable -- mejor flexibilidad, mejor consistencia de color y menos riesgo de deformación con el tiempo.</p>
          </div>
        </section>

        <section id="acetato" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Acetato: El Estándar de Moda</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es el Acetato?</h3>
          <p className="text-gray-700 mb-4">
            El acetato (acetato de celulosa) es un plástico de origen vegetal hecho de fibras de algodón o pulpa de madera. Es el material premium de elección para gafas de moda. Marcas de lujo como Tom Ford, Gucci, Prada y Ray-Ban usan casi exclusivamente acetato para sus monturas de moda.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Características Clave</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Peso:</strong> 25-40 gramos por montura -- la opción más pesada</li>
            <li><strong>Flexibilidad:</strong> Baja -- rígido y sustancial, puede agrietarse bajo estrés extremo</li>
            <li><strong>Acabado superficial:</strong> Pulido de alto brillo, sensación rica y premium</li>
            <li><strong>Opciones de color:</strong> Virtualmente ilimitadas -- colores sólidos, tortuga, mármol, degradado, transparente, capas, patrones mixtos</li>
            <li><strong>Opciones de forma:</strong> Audaces, gruesas, esculturales -- el acetato puede tallarse en cualquier forma</li>
            <li><strong>Hipoalergénico:</strong> Sí -- de origen vegetal, seguro para piel sensible</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mejor Para</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Marcas de moda y lujo</li>
            <li>Piezas de declaración y diseños audaces</li>
            <li>Precios premium al por menor ($80-$300+)</li>
            <li>Marcas que quieren combinaciones únicas de color/patrón</li>
            <li>Clientes que valoran la artesanía y la sensación premium</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
            <p className="text-amber-800 font-medium">🔥 Consejo de Fábrica: La calidad del acetato varía dramáticamente por origen. El acetato italiano (de Mazza o Albini) es el estándar de oro -- colores más ricos, mejor pulido, material más consistente. El acetato chino es más barato pero puede verse plano y opaco. Para una marca premium, insiste en acetato italiano.</p>
          </div>
        </section>

        <section id="metal" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Metal: La Elección Clásica</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">De Qué Están Hechas las Monturas de Metal</h3>
          <p className="text-gray-700 mb-4">
            Las monturas de gafas de metal típicamente están hechas de:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Acero inoxidable:</strong> El más común, buen equilibrio de resistencia y costo</li>
            <li><strong>Titanio:</strong> Premium, ligero, hipoalergénico, más caro</li>
            <li><strong>Aluminio:</strong> Muy ligero, look moderno, menos común</li>
            <li><strong>Níquel plata (Monel):</strong> Barato, fácil de trabajar, pero puede causar alergias -- evitar para marcas premium</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Características Clave</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Peso:</strong> 20-30 gramos por montura -- peso medio</li>
            <li><strong>Flexibilidad:</strong> Baja a media -- puede doblarse pero puede no volver a su forma</li>
            <li><strong>Acabado superficial:</strong> Puede chaparse en oro, plata, oro rosa, gunmetal, negro mate, etc.</li>
            <li><strong>Opciones de forma:</strong> Diseños delgados, elegantes, de alambre -- no puede hacer looks audaces/gruesos</li>
            <li><strong>Durabilidad:</strong> Fuerte pero las bisagras son el punto débil -- el metal se fatiga con el tiempo</li>
            <li><strong>Hipoalergénico:</strong> Depende de la aleación -- el acero inoxidable y titanio son seguros, las aleaciones de níquel no</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-800 font-medium">⚠️ Advertencia de Fábrica: Especifica siempre &quot;libre de níquel&quot; cuando busques monturas de metal. La alergia al níquel es una de las alergias de contacto más comunes en el mundo. Pide a tu proveedor certificación SGS o RoHS para verificar la composición de la aleación.</p>
          </div>
        </section>

        <section id="comparacion" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparación Lado a Lado</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left font-bold">Característica</th>
                  <th className="border p-3 text-left font-bold">TR90</th>
                  <th className="border p-3 text-left font-bold">Acetato</th>
                  <th className="border p-3 text-left font-bold">Metal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Peso</td>
                  <td className="border p-3">15-20g ⭐ Más ligero</td>
                  <td className="border p-3">25-40g</td>
                  <td className="border p-3">20-30g</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Flexibilidad</td>
                  <td className="border p-3">Muy Alta ⭐</td>
                  <td className="border p-3">Baja</td>
                  <td className="border p-3">Baja-Media</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Durabilidad</td>
                  <td className="border p-3">Excelente ⭐</td>
                  <td className="border p-3">Buena</td>
                  <td className="border p-3">Buena (bisagras se debilitan)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Sensación Premium</td>
                  <td className="border p-3">Básica</td>
                  <td className="border p-3">Excelente ⭐</td>
                  <td className="border p-3">Buena</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Opciones de Color</td>
                  <td className="border p-3">Limitadas</td>
                  <td className="border p-3">Ilimitadas ⭐</td>
                  <td className="border p-3">Media (chapado)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Costo al Por Mayor</td>
                  <td className="border p-3">$3-8 ⭐ Más barato</td>
                  <td className="border p-3">$5-20</td>
                  <td className="border p-3">$4-12</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Tiempo de Producción</td>
                  <td className="border p-3">3-5 días ⭐ Más rápido</td>
                  <td className="border p-3">2-3 semanas</td>
                  <td className="border p-3">1-2 semanas</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Mejor Precio al Por Menor</td>
                  <td className="border p-3">$20-80</td>
                  <td className="border p-3">$80-300+</td>
                  <td className="border p-3">$50-150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas que Me Hacen Cada Semana</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué material de montura es más duradero?</h3>
              <p className="text-gray-700">
                TR90 es el más duradero por resistencia al impacto y flexibilidad -- puede doblarse y volver a su forma sin romperse. El acetato es duradero para uso diario pero puede agrietarse bajo estrés extremo. Las monturas de metal son fuertes pero pueden deformarse y son más difíciles de reparar. Para deportes activos o niños, TR90 es el claro ganador. Para líneas enfocadas en moda, el acetato ofrece el mejor equilibrio de durabilidad y sensación premium.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué material de montura es más ligero?</h3>
              <p className="text-gray-700">
                TR90 es el más ligero -- una montura TR90 típica pesa 15-20 gramos. Las monturas de metal son las siguientes con 20-30 gramos dependiendo de la aleación. El acetato es el más pesado con 25-40 gramos porque se talla de bloques sólidos de material. Si el peso es tu prioridad (para comodidad todo el día o gafas de sol para niños), TR90 es la mejor opción.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Qué material de montura es mejor para gafas de moda?</h3>
              <p className="text-gray-700">
                El acetato es el estándar de oro para gafas de moda. Puede cortarse en formas audaces y gruesas, pulirse a alto brillo, y viene en cientos de colores y patrones (tortuga, mármol, degradado, transparente). Marcas de lujo como Tom Ford, Gucci y Prada usan casi exclusivamente acetato. Si tu marca se posiciona en el segmento premium o de moda, el acetato es lo que tus clientes esperan.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Cuánto cuestan diferentes materiales de montura al por mayor?</h3>
              <p className="text-gray-700">
                Al por mayor en fábrica: monturas TR90 cuestan $3-8/par dependiendo de la complejidad. Monturas de acetato cuestan $5-15/par (acetato premium pulido a mano puede alcanzar $20+). Monturas de metal cuestan $4-12/par dependiendo de la aleación y chapado. Así que TR90 es el más económico, el acetato tiene el rango más amplio, y el metal se queda en el medio.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Las monturas de metal son mejores para personas con alergias?</h3>
              <p className="text-gray-700">
                Depende del metal. El acero inoxidable y el titanio son hipoalergénicos y seguros para piel sensible. Sin embargo, algunas aleaciones metálicas más baratas contienen níquel, que puede causar reacciones alérgicas. Si buscas monturas de metal para una marca, especifica siempre aleaciones libres de níquel y pide certificación SGS o RoHS. TR90 y acetato son naturalmente hipoalergénicos.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Buscar las Monturas Correctas?</h2>
          <p className="text-xl mb-6 opacity-90">
            Ya sea que necesites TR90 para rendimiento, acetato para moda, o metal para estilo clásico -- te ayudaremos a encontrar la montura perfecta para tu marca.
          </p>
          <Link 
            href="/es/contacto" 
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Obtener Cotización Gratuita
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/es/productos/tr90" className="block group">
              <div className="bg-gray-100 rounded-lg p-6 text-center group-hover:bg-gray-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Gafas TR90</h3>
                <p className="text-sm text-gray-600">Ligeras y flexibles</p>
              </div>
            </Link>
            <Link href="/es/productos/acetato" className="block group">
              <div className="bg-gray-100 rounded-lg p-6 text-center group-hover:bg-gray-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Gafas de Acetato</h3>
                <p className="text-sm text-gray-600">Monturas de moda premium</p>
              </div>
            </Link>
            <Link href="/es/productos/metal" className="block group">
              <div className="bg-gray-100 rounded-lg p-6 text-center group-hover:bg-gray-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Gafas de Metal</h3>
                <p className="text-sm text-gray-600">Clásicas y elegantes</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </article>
  )
}
