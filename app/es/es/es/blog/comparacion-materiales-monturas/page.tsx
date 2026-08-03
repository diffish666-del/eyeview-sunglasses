import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TR90 vs Acetato vs Metal: ¿Qué Material de Montura Es el Adecuado para Tu Marca?',
  description: 'Un dueño de fábrica desglosa monturas TR90, acetato y metal -- datos reales de costos, comparaciones de peso, pruebas de durabilidad y qué material funciona mejor para cada estrategia de marca.',
  keywords: 'comparación materiales monturas gafas, gafas TR90, monturas acetato, monturas metal gafas, TR90 vs acetato, costo materiales gafas',
  alternates: {
    canonical: '/es/blog/comparacion-materiales-monturas',
    languages: {
      'en': '/blog/frame-material-comparison',
      'es': '/es/blog/comparacion-materiales-monturas',
    },
  },
}

export default function ComparacionMaterialesMonturaPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "TR90 vs Acetato vs Metal: ¿Qué Material de Montura Es el Adecuado para Tu Marca?",
          "datePublished": "2026-05-03",
          "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica desglosa monturas TR90, acetato y metal -- costos reales, peso, durabilidad y qué material se adapta a tu marca.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/comparacion-materiales-monturas" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué es TR90 y por qué se usa en gafas de sol?", "acceptedAnswer": { "@type": "Answer", "text": "TR90 es una poliamida termoplástica (polímero a base de nylon) desarrollada originalmente para uso médico y militar. Es extremadamente ligera -- unos 15-20 gramos por montura completa -- y prácticamente irrompible en uso normal. Se ha convertido en el material preferido para gafas deportivas porque se flexiona en vez de romperse, resiste el sudor y los químicos, y cuesta $3-8 por montura al por mayor." } },
            { "@type": "Question", "name": "¿Es el acetato mejor que el TR90 para gafas de sol?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de tu posicionamiento de marca. El acetato se ve y se siente más premium -- colores más ricos, patrones más profundos, peso más sustancioso que transmite calidad. Pero el TR90 es más ligero, más duradero y más barato. Si construyes una marca de moda o lujo, gana el acetato. Si apuntas a clientes deportivos u orientados al valor, el TR90 es mejor." } },
            { "@type": "Question", "name": "¿Cuánto cuestan los diferentes materiales de montura al por mayor?", "acceptedAnswer": { "@type": "Answer", "text": "Precios reales de fábrica: monturas TR90 cuestan $3-8 por par, monturas de acetato $5-11, y monturas metálicas de $8-22 dependiendo de la aleación y construcción. Estos son costos solo de montura -- añade $1,50-8 para lentes según tipo y recubrimientos." } },
            { "@type": "Question", "name": "¿Puedo mezclar materiales de montura en mi línea?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente -- y la mayoría de marcas exitosas hacen exactamente eso. Una marca típica podría tener monturas TR90 deportivas a $29-49 retail, monturas de acetato de moda a $79-149, y un par de aviadores metálicos a $99-179. Mezclar materiales te permite cubrir diferentes puntos de precio y segmentos de clientes." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Materiales</span>
            <span>3 de mayo de 2026</span>
            <span>•</span>
            <span>14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">TR90 vs Acetato vs Metal: ¿Qué Material de Montura Es el Adecuado para Tu Marca?</h1>
          <p className="text-xl text-gray-600">Cada semana alguien me pregunta: &quot;Jacky, ¿qué material de montura debería usar?&quot; Después de 20 años y unos 12 millones de monturas, aquí va la respuesta real -- con datos de costos reales de nuestra planta de producción.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice de Contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#por-que-importa" className="text-primary-600 hover:underline">Por Qué el Material Importa Más de lo que Crees</a></li>
            <li><a href="#tr90" className="text-primary-600 hover:underline">TR90: El Atleta</a></li>
            <li><a href="#acetato" className="text-primary-600 hover:underline">Acetato: El Ícono de la Moda</a></li>
            <li><a href="#metal" className="text-primary-600 hover:underline">Metal: El Clásico</a></li>
            <li><a href="#tabla-comparativa" className="text-primary-600 hover:underline">Tabla Comparativa</a></li>
            <li><a href="#costos-reales" className="text-primary-600 hover:underline">Desglose Real de Costos desde la Fábrica</a></li>
            <li><a href="#cual-elegir" className="text-primary-600 hover:underline">¿Qué Material para Qué Marca?</a></li>
            <li><a href="#mezclar" className="text-primary-600 hover:underline">La Jugada Inteligente: Mezcla tus Materiales</a></li>
            <li><a href="#preguntas" className="text-primary-600 hover:underline">Preguntas que Me Hacen Cada Semana</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Una dueña de marca de Portland me llamó el mes pasado. Llevaba seis semanas yendo y viniendo entre TR90 y acetato. Su diseñadora quería acetato. Su contable quería TR90. Sus seguidores de Instagram comentaban &quot;me encanta la onda metálica&quot; en sus mood boards. Estaba atascada.</p>
          <p>Le dije lo que le digo a todos: no hay un material de montura universalmente &quot;mejor&quot;. Solo hay el mejor material <em>para tu marca, tus clientes y tu presupuesto</em>.</p>

          <h2 id="por-que-importa" className="text-3xl font-bold mt-16 mb-6">Por Qué el Material Importa Más de lo que Crees</h2>
          <p>Los clientes no suelen saber nombrar el material de sus gafas. Pero <em>sienten</em> la diferencia al instante. Toman un par y en tres segundos ya han juzgado: &quot;estas se sienten baratas&quot; o &quot;estas se sienten caras.&quot; Esa reacción visceral tiene casi todo que ver con el material.</p>

          <h2 id="tr90" className="text-3xl font-bold mt-16 mb-6">TR90: El Atleta</h2>
          <p><a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener" className="text-primary-600 hover:underline">TR90 es una poliamida termoplástica</a> -- básicamente un nylon super-ingeniería. Fue desarrollado originalmente para equipos médicos y aplicaciones militares.</p>
          <p><strong>Peso:</strong> Una montura TR90 completa pesa 15-20 gramos. <strong>Durabilidad:</strong> Puedes doblarla, torcerla, sentarte encima. TR90 tiene &quot;memoria&quot; -- se deforma y vuelve a su forma original. <strong>Resistencia química:</strong> Sudor, protector solar, agua salada -- nada afecta al TR90. <strong>Costo:</strong> El moldeo por inyección es rápido y eficiente, $3-8 por montura.</p>
          <p><strong>Donde falla:</strong> Se ve y se siente como plástico. Rango de colores limitado (~40 colores sólidos). No grita &quot;lujo&quot;.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">TR90 en Cifras:</h3>
            <ul className="text-blue-800 space-y-1">
              <li><strong>Peso montura:</strong> 15-20g</li>
              <li><strong>Costo fábrica:</strong> $3-8 por montura</li>
              <li><strong>Rango retail típico:</strong> $19-69</li>
              <li><strong>Ideal para:</strong> Deporte, outdoor, niños, marcas de valor</li>
            </ul>
          </div>

          <h2 id="acetato" className="text-3xl font-bold mt-16 mb-6">Acetato: El Ícono de la Moda</h2>
          <p>El acetato es el material que construyó la industria de gafas de lujo. Está hecho de fibras de algodón y pulpa de madera procesadas en láminas de acetato de celulosa. El mejor viene de <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Mazzucchelli en Italia</a>.</p>
          <p><strong>Estética:</strong> Nada se le acerca. Profundidad de color, patrones carey con capas. <strong>200+ colores y patrones.</strong> <strong>Percepción premium:</strong> Pesa 25-35g, se calienta a la temperatura de la piel, hace un &quot;clic&quot; satisfactorio al cerrarse.</p>
          <p><strong>Donde falla:</strong> No flexiona como TR90 -- puede rajarse. Sensible a protector solar. 3-5x más lento de producir. Más pesado.</p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Acetato en Cifras:</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Peso montura:</strong> 25-35g</li>
              <li><strong>Costo fábrica:</strong> $5-11 por montura</li>
              <li><strong>Rango retail típico:</strong> $49-199</li>
              <li><strong>Ideal para:</strong> Moda, lifestyle, marcas premium y de lujo</li>
            </ul>
          </div>

          <h2 id="metal" className="text-3xl font-bold mt-16 mb-6">Metal: El Clásico</h2>
          <p>Las monturas metálicas existen desde el siglo XVIII. El aviador -- posiblemente la forma de gafas de sol más icónica -- es una montura metálica. Las gafas de hoy usan acero inoxidable, titanio, aluminio o aleaciones de níquel.</p>
          <p><strong>Perfiles delgados y elegantes:</strong> El metal permite monturas de 1-2mm de grosor. <strong>Atractivo atemporal.</strong> <strong>Máxima ajustabilidad.</strong> <strong>El titanio puede ser tan ligero como 12-15g</strong> -- más ligero que el TR90.</p>
          <p><strong>Donde falla:</strong> El más caro. Puede corroerse. Se deforma permanentemente si se dobla. Alergias al níquel (10-15% de la población).</p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-purple-900 mb-2">Metal en Cifras:</h3>
            <ul className="text-purple-800 space-y-1">
              <li><strong>Peso montura:</strong> 12-35g (varía por aleación)</li>
              <li><strong>Costo fábrica:</strong> $8-22 por montura</li>
              <li><strong>Rango retail típico:</strong> $59-249</li>
              <li><strong>Ideal para:</strong> Clásico, minimalista, marcas premium y profesionales</li>
            </ul>
          </div>

          <h2 id="tabla-comparativa" className="text-3xl font-bold mt-16 mb-6">Tabla Comparativa</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Factor</th>
                  <th className="px-6 py-4 text-left">TR90</th>
                  <th className="px-6 py-4 text-left">Acetato</th>
                  <th className="px-6 py-4 text-left">Metal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Peso</td><td className="px-6 py-4">15-20g</td><td className="px-6 py-4">25-35g</td><td className="px-6 py-4">12-35g</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Costo fábrica</td><td className="px-6 py-4">$3-8</td><td className="px-6 py-4">$5-11</td><td className="px-6 py-4">$8-22</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Precio retail típico</td><td className="px-6 py-4">$19-69</td><td className="px-6 py-4">$49-199</td><td className="px-6 py-4">$59-249</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Resistencia al impacto</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Aspecto/Tacto premium</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Opciones de color</td><td className="px-6 py-4">~40 colores sólidos</td><td className="px-6 py-4">200+ patrones</td><td className="px-6 py-4">5-8 tonos metálicos</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Ideal para</td><td className="px-6 py-4">Deporte, outdoor, niños</td><td className="px-6 py-4">Moda, lifestyle, lujo</td><td className="px-6 py-4">Clásico, minimalista</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="costos-reales" className="text-3xl font-bold mt-16 mb-6">Desglose Real de Costos desde la Fábrica</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Recuerda: Estos Son Costos Solo de Montura</h3>
            <p className="text-amber-800">Añade $1,50-8 por par para lentes, $0,30-1,50 para empaque, y $0,50-2,00 para envío por unidad. Tu costo total entregado por par es típicamente un 40-60% más alto que el costo de montura solo.</p>
          </div>

          <h2 id="cual-elegir" className="text-3xl font-bold mt-16 mb-6">¿Qué Material para Qué Marca?</h2>
          <p><strong>Marca deportiva/outdoor → TR90.</strong> Sin duda. Ligero, irrompible, resistente al sudor.</p>
          <p><strong>Marca de moda/lifestyle → Acetato.</strong> Colores ricos, tacto premium, justifica precios altos.</p>
          <p><strong>Marca minimalista/profesional → Metal.</strong> Perfiles ultra-finos, estética arquitectónica.</p>
          <p><strong>Marca familiar/niños → TR90.</strong> Los niños destruyen todo. TR90 sobrevive.</p>

          <h2 id="mezclar" className="text-3xl font-bold mt-16 mb-6">La Jugada Inteligente: Mezcla tus Materiales</h2>
          <p>La mayoría de marcas exitosas usan los tres. TR90 para tu línea deportiva/valor. Acetato para tu línea de moda. Metal para tus clásicos atemporales. Mezclar materiales te permite cubrir múltiples puntos de precio sin diluir tu marca.</p>

          <h2 id="preguntas" className="text-3xl font-bold mt-16 mb-6">Preguntas que Me Hacen Cada Semana</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Qué es TR90?</h3>
              <p className="text-gray-600">Una poliamida termoplástica -- tipo nylon de ingeniería. Pesa 15-20g, es prácticamente irrompible, resiste sudor y químicos, y cuesta $3-8 por montura al por mayor.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Es el acetato mejor que el TR90?</h3>
              <p className="text-gray-600">Depende de qué vendas. El acetato se ve más premium. El TR90 es más ligero, resistente y barato. ¿Marca de moda? Acetato. ¿Marca deportiva o de valor? TR90. ¿Colección completa? Usa ambos.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Cuál es el material más duradero?</h3>
              <p className="text-gray-600">TR90 gana en resistencia al impacto -- flexiona 90°+ sin romperse. El metal se deforma permanentemente. El acetato es resistente pero puede rajarse con impacto fuerte.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas Ayuda para Elegir Materiales?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Puedo recomendarte la mezcla de materiales perfecta para tu marca basándome en tu mercado objetivo, punto de precio y estética.</p>
            <Link href="/es/contacto" className="btn-primary">Consultar a Jacky sobre Materiales</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/es/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM en Gafas de Sol: Guía Completa</h3>
                <p className="text-gray-600 text-sm">La versión honesta desde la planta de producción.</p>
              </Link>
              <Link href="/es/blog/guia-lentes-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guía de Lentes para Gafas de Sol</h3>
                <p className="text-gray-600 text-sm">Las monturas llaman la atención, pero las lentes hacen el producto.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
