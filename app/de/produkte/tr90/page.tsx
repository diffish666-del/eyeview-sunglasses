import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'TR90-Sonnenbrillen Großhandel | TR90-Brillen Hersteller - EyeView',
  description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
  keywords: 'TR90 Sonnenbrillen Großhandel, TR90 Brillen Hersteller, ultraleichte Brillen, Nylon Fassungen, Grilamid Brillen, Sport Sonnenbrillen',
  openGraph: {
    title: 'TR90-Sonnenbrillen Großhandel | TR90-Brillen Hersteller - EyeView',
    description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/produkte/tr90',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/tr90',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/tr90',
      'de': 'https://eyeviewsunglasses.com/de/produkte/tr90',
    },
  },
}

const tr90Faqs = [
  {
    question: '¿Qué es exactamente el TR90 y por qué se usa para Sonnenbrillen?',
    answer: 'El TR90 es una poliamida termoplástica (nylon) desarrollada originalmente por EMS-Grivory en Suiza bajo la Marke Grilamid TR90. Fue diseñado específicamente para aplicaciones ópticas — es decir, se creó ab cero para fabricar Fassungen de Brillen. Las propiedades clave son: ultraleicht (un Fassung terminado pesa solo 15-20 gramos), extrema flexibilidad (puedes doblarlo casi por la mitad y vuelve a su forma original), memoria (mantiene su forma durante años de uso diario), hipoalergénico (sin níquel, sin BPA, sin reacciones en la piel) y alta resistencia al calor (temperatura de deformación de aproximadamente 120°C). Se fabrica por moldeo por inyección, así que la Produktion es rápida y consistente — lo que mantiene los costos bajos. Básicamente, el TR90 te da un Fassung que no pesa nada, nunca se rompe y nunca irrita la piel sensible. Por eso se ha convertido en el Material preferido para Brillen deportivas, Brillen Kinderes y Fassungen leichts de uso diario.',
  },
  {
    question: '¿Cómo se compara el TR90 con los Fassungen de acetato y metal?',
    answer: 'La forma más fácil de entender el TR90 es compararlo directamente. Gewicht: los Fassungen TR90 pesan 15-20 gramos, los de acetato pesan 25-35 gramos y los de metal pesan 28-35 gramos. Así que el TR90 es aproximadamente un 40-50% más leicht que el acetato. Flexibilidad: el TR90 se dobla y vuelve a su forma; el acetato se parte si lo doblas demasiado; el metal se deforma permanentemente. Durabilidad: el TR90 es prácticamente irrompible en uso normal; el acetato puede astillarse o agrietarse; el metal puede deformarse. Opciones de Farbe: el acetato gana aquí con sus ricos patrones en capas; el TR90 está más limitado a Farbees sólidos y acabados superficiales. Percepción Premium: el acetato tiene una sensación de lujo que el TR90 no puede igualar; el TR90 se siente técnico y Sport. Costo: los Fassungen TR90 cuestan $4-8 pro Paar, el acetato $6-16 y el metal $8-22. Conclusión: TR90 para rendimiento y valor, acetato para lujo y estética, metal para Stil clásico.',
  },
  {
    question: '¿Se pueden imprimir o Farbeear los Fassungen TR90 con Designs personalizados?',
    answer: 'Sí, pero las opciones son diferentes al acetato. El Farbe del TR90 se determina durante el moldeo por inyección — añadimos pellets de Farbe masterbatch a la resina Grilamid cruda, así que el Farbe penetra todo el Material. Tenemos aproximadamente 30 Farbees estándar (negro mate, negro brillo, azul marino mate, gris, rojo, naranja, blanco, transparente, etc.) y podemos igualar Farbees Pantone personalizados con un mínimo de 500 Stück. Para decoración superficial, ofrecemos tampografía (logos, patrones, gráficos multiFarbe en la Bügel), impresión UV (impresión de Qualität fotográfica a todo Farbe en superficies planas), transferencia hidrográfica (impresión por inmersión en agua para patrones de camuflaje, fibra de carbono, veta de madera que envuelven las curvas) y grabado láser. También hacemos recubrimiento de caucho (un acabado mate de tacto suave que añade agarre y sensación Premium) y recubrimiento PVD metálico en acentos de Bügel. Lo único que el TR90 no puede hacer es replicar la profundidad de Farbe en capas del acetato — los patrones de carey, mármol y cristal no son posibles en Material moldeado por inyección.',
  },
  {
    question: '¿Es sicher el TR90 para Sonnenbrillen Kinderes?',
    answer: 'El TR90 es probablemente el mejor Material para Brillen Kinderes, y aquí explico por qué. Primero, es virtualmente irrompible — los Kinder son duros con las Brillen, y el TR90 se flexiona en vez de partirse. Hemos probado nuestros Fassungen Kinderes con más de 5,000 ciclos de apertura y cierre de Scharnier sin ningún fallo. Segundo, es hipoalergénico — sin níquel, sin BPA, sin ftalatos, sin látex. Los Kinder tienen piel más sensible que los adultos, y los Fassungen metálicos con contenido de níquel pueden causar dermatitis de contacto. Tercero, es ultraleicht con 12-15 gramos para Fassungen de Größe Kinder — las Brillen pesadas se resbalan por las narices pequeñas y los Kinder simplemente se las quitan. Cuarto, el TR90 cumple con los estándares de seguridad de juguetes EN 71 (podemos proporcionar documentación de pruebas), que algunos mercados requieren para Brillen vendidas a menores de 14 años. Y quinto, el bajo costo ($3.50-6.00 pro Paar para Fassungen Kinderes) lo hace económico para padres que saben que su hijo probablemente las perderá o romperá en seis meses de todas formas.',
  },
  {
    question: '¿Qué temperatura puede soportar el TR90?',
    answer: 'El TR90 tiene una temperatura de deflexión térmica (HDT) de aproximadamente 120°C (248°F) a 1.8 MPa — significativamente más alta que el nylon estándar (alrededor de 75°C) y mucho más alta que el acetato (que se ablanda a 70-80°C). En términos prácticos, esto significa que los Fassungen TR90 pueden sobrevivir sin problemas al ser dejados en el salpicadero de un coche en verano (que puede alcanzar 70-90°C), al ser usados en una sauna, o al ser expuestos a agua caliente sin deformarse. Este es un punto de venta real, especialmente para Markes deportivas y de actividades al aire libre — los atletas dejan sus Brillen en coches calientes, en salpicaderos de barcos y en bolsas de gimnasio junto a ropa sudada. El TR90 aguanta todo eso. El extremo frío es igualmente impresionante: el TR90 mantiene su flexibilidad hasta -40°C, así que no se vuelve quebradizo en condiciones invernales. Para comparar, los Fassungen baratos de policarbonato pueden volverse quebradizos por debajo de 0°C.',
  },
  {
    question: '¿Cuál es la cantidad mínima de Bestellung para Sonnenbrillen TR90?',
    answer: 'El MOQ estándar es de 100 Stück por modelo usando nuestra biblioteca de moldes existentes — tenemos más de 80 Designs de Fassungen TR90 en stock que cubren envolventes Sports, wayfarers, redondos, rectangulares, Stil aviador y formas Kinderes. Puedes mezclar Farbees dentro de esas 100 Stück. Para un Design de Fassung completamente personalizado, cobramos una tarifa de molde de $1,500-3,000 dependiendo de la complejidad (los moldes TR90 son más caros que el mecanizado CNC de acetato porque los moldes de inyección son de acero y mecanizados con precisión). El MOQ para molde personalizado es de 500 Stück en el primer Bestellung. Para Farbees Pantone personalizados, el mínimo es 500 Stück porque necesitamos mezclar y probar el masterbatch. Para Farbees estándar en stock, no hay mínimo más allá de las 100 Stück base.',
  },
]

const products = [
  {
    name: 'Sport Wrap TR90',
    description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
    price: '$4.50 - $7.50',
    moq: '100 pzas',
    features: ['Design Envolvente', 'Agarre de Caucho', '18g Ultraleicht', 'Bügel Antideslizante'],
  },
  {
    name: 'TR90 Wayfarer',
    description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
    price: '$4.00 - $6.50',
    moq: '100 pzas',
    features: ['Forma Wayfarer', '16g de Gewicht', 'Opción Recubrimiento Caucho', 'Preis Accesible'],
  },
  {
    name: 'Kids Flex TR90',
    description: 'Diseñado para edades de 4 a 12 años con flexibilidad extra incorporada en el Design. Las Bügels tienen una zona de flexión integrada que les permite doblarse hacia afuera sin romperse — importante porque los Kinder agarran sus Brillen por un brazo y tiran. Hipoalergénico, libre de BPA, libre de ftalatos. Almohadillas nasales de caucho dimensionadas para Stegs más pequeños. Disponible en Farbees brillantes y divertidos — azul eléctrico, rosa intenso, verde lima, naranja atardecer, negro mate (para el mercado del "niño cool"). Pesa solo 12 gramos. Los padres las compran porque saben que los Kinder las maltratarán. Tenemos Kundes que las venden en packs de 3 porque los padres esperan reemplazarlas.',
    price: '$3.50 - $6.00',
    moq: '100 pzas',
    features: ['Edades 4-12', 'Bügels Extra Flex', '12g de Gewicht', 'Sin BPA/Ftalatos'],
  },
  {
    name: 'TR90 Half-Frame Sport',
    description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
    price: '$5.00 - $8.00',
    moq: '100 pzas',
    features: ['Semi al Aire', '14g de Gewicht', 'Visión Inferior Mejorada', 'Cordón de Nylon Inferior'],
  },
  {
    name: 'TR90 + Metal Combo',
    description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
    price: '$7.00 - $11.00',
    moq: '100 pzas',
    features: ['Híbrido TR90 + Metal', 'Grabado Láser', '20g de Gewicht', 'Crossover Sport-Casual'],
  },
  {
    name: 'TR90 Shield / Visor',
    description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
    price: '$6.00 - $9.00',
    moq: '100 pzas',
    features: ['Glas Pantalla Única', 'Ventilación Anti-Vaho', 'Máximo Campo Visual', 'Design Aerodinámico'],
  },
]

export default function TR90PageEs() {
  return (
    <>
      <ProductSchema product={{
        name: 'Sonnenbrillen Ultraligeras TR90',
        description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
        minPrice: '3.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'Sonnenbrillen TR90', url: 'https://eyeviewsunglasses.com/de/produkte/tr90' }
      ]} />
      <FAQPageSchema faqs={tr90Faqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Sonnenbrillen TR90</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
              alt="Hersteller de Sonnenbrillen TR90 - Brillen Deportivas de Nylon Leicht im Großhandel"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hersteller de Sonnenbrillen TR90
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Déjame mostrarte algo. Toma un par de Sonnenbrillen normales — de las que compras en una gasolinera. Ahora dobla las Bügels. ¿Escuchas ese crujido? Eso es policarbonato barato diciéndote que está a punto de partirse. Ahora intenta lo mismo con un Fassung TR90. Puedes prácticamente doblarlo por la mitad. Vuelve a su forma al instante. Sin crujido, sin grieta, sin deformación permanente. Esa flexibilidad no es un truco — es la ventaja ingenieril fundamental del <a href="https://www.emsgrivory.com/en/products/grilamid-tr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grilamid TR90</a>, una <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">poliamida</a> termoplástica desarrollada por la empresa química suiza EMS-Grivory específicamente para aplicaciones ópticas.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Estos son los números que importan: un Fassung TR90 terminado pesa 15-20 gramos. Para comparar, los Fassungen de acetato pesan 25-35 gramos y los de metal pesan 28-35 gramos. Esa diferencia de 10-15 gramos puede no sonar a mucho en papel, pero ponte un Fassung TR90 en la cara después de llevar acetato todo el día y entenderás inmediatamente por qué atletas, profesionales al aire libre y cada vez más consumidores cotidianos están cambiando. Te olvidas de que las llevas puestas. Sin presión en la nariz, sin deslizamiento, sin Markes rojas detrás de las orejas. Para <Link href="/de/produkte/Sport" className="text-primary-600 hover:underline">Markes deportivas</Link> y <Link href="/de/produkte/ninos" className="text-primary-600 hover:underline">Brillen Kinderes</Link>, el TR90 no es solo una buena opción — es la opción obvia.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Ab el punto de vista de fabricación, el TR90 se moldea por inyección — lo que significa que alimentamos pellets de Grilamid en un cilindro calentado, inyectamos el Material fundido en un molde de acero de precisión bajo alta presión y sacamos un Fassung terminado en unos 45 segundos. Compara eso con los Fassungen de acetato que tardan 5-7 días de corte, pulido en tambor y pulido a mano. El resultado es una Produktion más rápida, menor costo unitario y Qualität extremadamente consistente. Nuestra tasa de defectos en TR90 es inferior al 0.5% — frente al 3-5% del acetato. Si necesitas grandes volúmenes a Preiss competitivos sin sacrificar Qualität, el TR90 es el Material que lo hace posible.
              </p>
              <p className="text-lg leading-relaxed">
                Producimos alrededor de 500,000 Fassungen TR90 por año entre envolventes Sports, wayfarers casuales, Stils Kinderes y Designs híbridos Sport-casual. Nuestra biblioteca de moldes tiene más de 80 Designs listos para usar, y operamos cuatro máquinas de moldeo por inyección dedicadas a la Produktion de TR90. Ya sea que estés lanzando una Marke de Brillen deportivas, añadiendo una línea Kinder o construyendo una colección ligera de uso diario, aquí tienes todo lo que necesitas saber.
              </p>
            </div>
          </div>

          {/* Weight Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">La Ventaja del Gewicht</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El Gewicht es la razón principal por la que las Markes eligen TR90. Así es como se compara con todos los demás Materiales de Fassung que ofrecemos.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">TR90 (Grilamid)</span>
                    <span className="text-primary-600 font-bold">15 - 20g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-primary-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">La opción más ligera. Apenas se nota en el rostro. Ideal para uso durante todo el día y actividad física.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Aleación de Aluminio</span>
                    <span className="text-gray-600 font-bold">18 - 22g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Cercano al TR90 en Gewicht, pero rígido — sin flexión. Sensación metálica Premium con buena ligereza.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acetato</span>
                    <span className="text-gray-600 font-bold">25 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">El Material de lujo. Hermoso pero más pesado. Ese Gewicht es parte de su &ldquo;sensación Premium&rdquo; — pero no es ideal para Sports.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acero Inoxidable</span>
                    <span className="text-gray-600 font-bold">28 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Armazones metálicos clásicos. El Gewicht comunica Qualität pero puede causar fatiga durante el uso prolongado.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Policarbonato Estándar</span>
                    <span className="text-gray-600 font-bold">22 - 28g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Más barato que el TR90 pero más pesado, menos flexibel y más frágil. La opción económica que el TR90 supera.</p>
                </div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Sonnenbrillen TR90 im Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Unsere Kollektion TR90</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🏃</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/de/kontakt" className="btn-primary text-sm">Angebot</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Vollständige Spezifikationen</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Material del Armazón', 'EMS-Grivory Grilamid TR90 (poliamida termoplástica de ingeniería suiza)'],
                      ['Gewicht del Armazón', '15-20g (Fassung completo) / 12-15g (Kinder) / 14g (semi al aire)'],
                      ['Flexibilidad', 'Material con memoria — se dobla a 90°+ y vuelve a su forma original. Más de 5,000 ciclos de flexión probados.'],
                      ['Resistencia al Calor', 'HDT 120°C (248°F) — sobrevive a salpicaderos de coche, saunas, agua caliente'],
                      ['Resistencia al Frío', 'Mantiene la flexibilidad hasta -40°C (-40°F) — sin fragilidad en invierno'],
                      ['Hipoalergénico', 'Sí — sin níquel, sin BPA, sin ftalatos, sin látex'],
                      ['Material de Glas', 'Policarbonato / TAC Polarisiert / Fotocromático'],
                      ['UV-Schutz', 'UV400 — bloquea el 100% de UVA (315-380nm) y UVB (280-315nm)'],
                      ['Almohadillas Nasales', 'Caucho TPE integrado (antideslizante) o almohadillas de silicona ajustables'],
                      ['Puntas de Bügel', 'Agarre de caucho TPE co-moldeado — antideslizante incluso mojado'],
                      ['Farbees en Stock', '30+ estándar: negro mate, negro brillo, azul marino, gris, rojo, naranja, blanco, transparente, etc.'],
                      ['Farbees Individualisierendos', 'Igualación Pantone disponible — MOQ 500 pzas para masterbatch personalizado'],
                      ['Acabados Superficiales', 'Mate, brillo, recubrimiento de caucho (tacto suave), acentos PVD metálicos'],
                      ['Opciones de Impresión', 'Tampografía, impresión UV, transferencia hidrográfica (camuflaje, fibra de carbono), grabado láser'],
                      ['Zertifizierungen', 'CE (EN ISO 12312-1) · FDA · UV400 · ISO 9001 · EN 71 (Kinder)'],
                      ['MOQ', '100 pzas por modelo (moldes en stock) / 500 pzas (moldes personalizados)'],
                      ['Tarifa de Molde (Individualisierendo)', '$1,500 - $3,000 único pago — molde de inyección de acero'],
                      ['Tiempo de Muestra', '3-5 Werktage'],
                      ['Tiempo de Produktion', '12-18 días estándar / 8-10 días urgente'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Key Properties Deep Dive */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el TR90 Supera a Otros Plásticos</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              No todos los Fassungen de plástico son iguales. Esto es lo que separa al TR90 del policarbonato estándar y el nylon barato.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🪶 Ultraleicht</h3>
                <p className="text-sm text-gray-600">Con una densidad de 1.14 g/cm³, el TR90 es uno de los Materiales de Fassung más leichts disponibles. Un envolvente Sport de Fassung completo pesa solo 18 gramos — aproximadamente lo mismo que tres hojas de papel. Los Kundes literalmente olvidan que las llevan puestas, que es exactamente lo que los atletas necesitan.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">💪 Flexibilidad con Memoria</h3>
                <p className="text-sm text-gray-600">El TR90 tiene verdadera memoria de forma — dóblalo, tuércelo, siéntate sobre él, y vuelve a su forma original. Probamos cada Design de Fassung con más de 5,000 ciclos de apertura-cierre y flexión de Bügel a 90 grados sin deformación permanente. El policarbonato estándar falla esta prueba a los 500 ciclos aproximadamente.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌡️ Beständig a la Temperatura</h3>
                <p className="text-sm text-gray-600">La deflexión térmica a 120°C significa que el TR90 sobrevive a situaciones que destruyen otros plásticos. ¿Dejadas en el salpicadero de un coche en Phoenix? Sin problema. ¿Caídas en un jacuzzi? Sin problema. ¿Guardadas en una taquilla de sauna? Sin problema. El acetato se deformaría. El PC estándar podría deformarse. Al TR90 le da igual.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🧪 Beständig a Químicos</h3>
                <p className="text-sm text-gray-600">Beständig a protector solar, repeGlas de insectos, sudor, agua salada y la mayoría de químicos comunes. Esto importa para uso Sport y al aire libre donde los Fassungen están constantemente expuestos a estas sustancias. El acetato, por el contrario, puede dañarse con los químicos del protector solar con el tiempo.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛡️ Beständig a Impactos</h3>
                <p className="text-sm text-gray-600">El TR90 absorbe la energía del impacto mediante la flexión en vez de agrietarse. Deja caer un Fassung TR90 ab la altura de la cabeza sobre concreto y rebota. Deja caer un Fassung de acetato y puede astillarse. Para Brillen deportivas e Kinderes, esta es una característica de seguridad, no solo durabilidad.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏭 Eficiencia de Produktion</h3>
                <p className="text-sm text-gray-600">El tiempo de ciclo de moldeo por inyección es de unos 45 segundos por Fassung — frente a 5-7 días para acetato. Esto significa Lieferung más rápida (12-18 días vs 20-28 días), menor costo unitario y tasas de defectos por debajo del 0.5%. Para Bestellungs de volumen, la ventaja en costo y velocidad es significativa.</p>
              </div>
            </div>
          </section>

          {/* Best Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">¿Quién Debería Usar TR90?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El TR90 no es el Material adecuado para todas las Markes. Aquí es donde destaca y dónde podrías querer algo diferente.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-600">✅ Perfecto Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Markes deportivas</strong> — ciclismo, running, pesca, golf, esquí. El TR90 es el estándar de la industria para Brillen de rendimiento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Brillen Kinderes</strong> — irrompibles, ultraligeras, hipoalergénicas. El Material fue prácticamente diseñado para Kinder.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Líneas de confort diario</strong> — para Markes que se posicionan en torno a la comodidad todo el día y el mensaje de &ldquo;te olvidas de que las llevas&rdquo;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Markes de volumen/valor</strong> — bajo costo unitario con Qualität genuina. Punto óptimo retail de $20-50.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Promocional / corporativo</strong> — suficientemente asequible para regalos pero con Qualität suficiente para que la gente realmente las use.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-yellow-200">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">⚡ Buena Opción Híbrida</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Combos TR90 + metal</strong> — frente TR90 con Bügels metálicas para un look de transición Sport-casual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Deportivas con prescripción</strong> — TR90 con ranuras de Glas compatibles con RX para inserto óptico o montaje directo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Markes multi-línea</strong> — muchos de nuestros Kundes usan TR90 para su línea deportiva/activa y acetato para su línea de moda.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">❌ No Ideal Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Lujo / alta moda</strong> — el TR90 carece de la riqueza visual del acetato. Sin carey, sin mármol, sin profundidad de cristal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Posicionamiento retail de $100+</strong> — el Material no transmite la sensación Premium necesaria a este Preis (a menos que sea una Marke de rendimiento/tecnología).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Stil clásico/heritage</strong> — aviadores y wayfarers en TR90 funcionan pero carecen de la calidez y el carácter del metal o acetato.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Individualisierung TR90</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El TR90 puede ser moldeado por inyección, pero eso no significa genérico. Así es como hacemos que cada par sea tuyo.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Farbees y Acabados</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Farbe integral</strong> — 30+ Farbees estándar, o igualación Pantone (MOQ 500 pzas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Recubrimiento de caucho</strong> — acabado mate de tacto suave que añade agarre y sensación Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hidrográfico</strong> — impresión por transferencia en agua para patrones de camuflaje, fibra de carbono, veta de madera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>BiFarbe</strong> — diferentes Farbees para el frente y las Bügels usando moldeo multi-disparo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🏷️ Logo y Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tampografía</strong> — logo multiFarbe en Bügels, hasta 4 Farbees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impresión UV</strong> — Qualität fotográfica, a todo Farbe, detalle fino en superficies planas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Grabado láser</strong> — permanente, funciona también en superficies recubiertas de caucho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica</strong> — placa de logo de aleación de zinc incrustada en la Bügel durante el moldeo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Verpackung</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuche Sport</strong> — EVA semi-rígido con clip mosquetón, con Marke. $1.00-1.80 por set.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Funda de microfibra</strong> — con cordón y logo impreso. $0.30-0.60 cada una.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cordón de sujeción</strong> — cordón de neopreno con Marke. ExceGlas complemento para líneas deportivas. $0.40-0.80.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Caja retail</strong> — impresión a todo Farbe, inserto personalizado, tarjeta de especificaciones. $0.80-1.50.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lens Options for Sport */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Gläser para Armazones TR90</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              La Glas importa tanto como el Fassung. Estas son las opciones que combinamos con TR90 — especialmente para uso Sport y activo.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🔵 TAC Polarisiert</h3>
                <p className="text-gray-300 text-sm">La mejora más popular para Fassungen TR90 Sports. La película polarisiert de 7 capas elimina el 99% del resplandor reflejado del agua, carreteras y nieve. Esencial para pesca, ciclismo y conducción. Añade $2-3 pro Paar pero te permite cobrar $15-20 más en retail. Lee nuestra <Link href="/de/produkte/polarizado" className="text-blue-400 hover:underline">guía de Gläser</Link> para el desglose completo.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌗 Fotocromático</h3>
                <p className="text-gray-300 text-sm">Se oscurece con la luz solar, se aclara en interiores. De Categoría 0-1 en interiores a Categoría 2-3 en exteriores en unos 30 segundos. Gran punto de venta para uso Sport durante todo el día — empieza tu carrera al amanecer, termina al mediodía, un solo par lo maneja todo. Añade $3-4 pro Paar.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🪞 Recubrimientos Espejo</h3>
                <p className="text-gray-300 text-sm">Plata, azul, rojo, dorado, verde, púrpura, rosa — aplicados sobre Gläser polarisierts o de PC estándar. El look agresivo combina perfectamente con Fassungen TR90 Sports. Espejo azul sobre un envolvente TR90 negro mate es uno de nuestros Produkts más vendidos de todos los tiempos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🟡 Amarillo/Ámbar (Baja Luz)</h3>
                <p className="text-gray-300 text-sm">Tinte de Categoría 1 que mejora el contraste en condiciones nubladas, con niebla o poca luz. Popular para ciclismo, tiro, esquí y conducción al atardecer. No es suficientemente oscuro para sol intenso — se comercializa como una opción de Glas dedicada para poca luz.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">💧 Hidrofóbico + Oleofóbico</h3>
                <p className="text-gray-300 text-sm">Recubrimientos repeGläser al agua y beständigs a huellas dactilares. La lluvia forma gotas, el sudor se limpia fácilmente, las manchas no se adhieren. Añade $0.50-1.00 pro Paar. Muy recomendado para Gläser deportivas que recibirán lluvia, sudor y serán manipuladas con dedos sucios.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌫️ Anti-Vaho</h3>
                <p className="text-gray-300 text-sm">Recubrimiento hidrofílico que previene la condensación. Crítico para Sports en clima frío (esquí, snowboard) y actividades de Höhe esfuerzo donde el calor corporal se encuentra con el aire frío. Funciona durante unos 6-12 meses de uso regular. Añade $1-2 pro Paar.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Häufig gestellte Fragen sobre Sonnenbrillen TR90</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {tr90Faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produkte Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/de/produkte/Sport" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-Farbes mb-2">Sonnenbrillen Deportivas</h3>
                <p className="text-gray-600 text-sm">Nuestra colección completa de Brillen deportivas — envolventes, pantallas, semi al aire. La mayoría de Stils disponibles en TR90 con opciones de Gläser polarisierts y fotocromáticas.</p>
              </Link>
              <Link href="/de/produkte/ninos" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-Farbes mb-2">Sonnenbrillen Kinderes</h3>
                <p className="text-gray-600 text-sm">El TR90 es el Material ideal para Brillen Kinderes — irrompibles, ultraligeras, hipoalergénicas. Tallas para edades de 0 a 14 años.</p>
              </Link>
              <Link href="/de/produkte/polarizado" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-Farbes mb-2">Brillen Polarisierts</h3>
                <p className="text-gray-600 text-sm">Guía completa de Gläser para Sonnenbrillen — polarisierts, fotocromáticas, espejo, CR-39. Descubre qué opciones de Gläser combinan mejor con Fassungen TR90.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bereit zu bestellen Armazones TR90?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Sagen Sie uns lo que necesitas — envolventes Sports, Fassungen Kinderes, Stils casuales o algo personalizado. Te enviaremos Muster de nuestra biblioteca de más de 80 moldes en 3-5 días. Preiss, cronograma de Produktion y opciones de Individualisierung incluidos. Sin compromiso hasta que estés listo para ordenar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/de/kontakt" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-Farbes">
                Angebot anfordern
              </Link>
              <Link href="/de/produkte" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-Farbes">
                Ver Todos los Produkte
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
