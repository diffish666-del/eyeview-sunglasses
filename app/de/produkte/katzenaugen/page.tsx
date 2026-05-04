import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Katzenaugen-Sonnenbrillen Großhandel | Hersteller von Cat-Eye-Brillen - EyeView',
  description: 'Hersteller von Katzenaugen-Sonnenbrillen im Großhandel. Damen Cat-Eye-Brillen in Acetat, Metall und MischMaterialien. Trendfarben, OEM/ODM. MOQ 100 Stk. Direkt ab Fabrik.',
  keywords: 'Katzenaugen Sonnenbrillen Großhandel, Cat-Eye Brillen Hersteller, Damen Sonnenbrillen Großhandel, Cat-Eye Fassungen, Sonnenbrillen Großhandel, Brillen Hersteller',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/katzenaugen',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/cat-eye',
      'de': 'https://eyeviewsunglasses.com/de/produkte/katzenaugen',
    },
  },
}

const catEyeFaqs = [
  {
    question: '¿Qué formas de rostro van bien con las Brillen ojo de gato?',
    answer: 'Casi todas, sinceramente. El ojo de gato es una de las formas más favorecedoras que existen. ¿Rostro ovalado? Perfecto. ¿Rostro redondo? Los ángulos elevados añaden definición — queda genial. ¿Forma de corazón? Combinación ideal. ¿Rostro cuadrado? Elige un ojo de gato más suave y redondeado para equilibrar los ángulos. La única forma de rostro que puede ser complicada es la muy alargada/estrecha, donde un ojo de gato oversized puede resultar excesivo. Pero incluso ahí, un ojo de gato petite funciona bien.',
  },
  {
    question: '¿Cuál es el MOQ para Brillen ojo de gato con Marke personalizada?',
    answer: '100 Stück por Farbe para nuestros Designs existentes. ¿Quieres tu propio molde personalizado, Farbees Pantone a medida y Verpackung con Marke? Son 300 Stück por Stil. Consejo pro: puedes mezclar diferentes Stils de ojo de gato en un Bestellung para alcanzar el mínimo. Así podrías hacer 100 negro clásico + 100 leopardo + 100 oro rosa = 300 en total. Somos flexibels.',
  },
  {
    question: '¿Se pueden hacer graduadas estas Fassungs?',
    answer: '¡Sí! Todas nuestras Fassungs ojo de gato de acetato y metal se pueden enviar con Gläser de Muster para que las ópticas coloquen Gläser graduadas. Acomodamos prescripciones monofocales, bifocales y progresivas. La profundidad de la Fassung y la curvatura de la Glas están diseñadas para ello. Es un exceGlas upsell para ópticas — Fassungs de moda con capacidad de graduación.',
  },
  {
    question: '¿Qué tendencias hay en ojo de gato para 2024-2025?',
    answer: 'Grandes tendencias ahora mismo: proporciones oversized (más grande es mejor), acetato transparente/cristal (especialmente rosa y champán), Materiales mixtos (frente de acetato + Bügels de metal), ojo de gato geométrico angular (menos curvo, más edgy), y pasteles suaves como lavanda y verde salvia. El revival del ojo de gato estrecho Y2K también sigue fuerte entre las compradoras jóvenes. Seguimos estas tendencias cada temporada y actualizamos nuestro catálogo en consecuencia.',
  },
  {
    question: '¿Puedo obtener Muster antes de comprometerme con un Bestellung grande?',
    answer: 'Por supuesto — nunca esperaríamos que pidas a ciegas. ¿Stils existentes del catálogo? Muster gratis, solo cubres el Versand (normalmente $30-50 vía DHL por 3-5 pares). ¿Quieres una Muster personalizada con tus modificaciones específicas? Pequeño cargo de $50-100 por Design, que acreditamos contra tu primer Bestellung de Produktion. Así que básicamente obtienes Muster personalizadas gratis si haces Bestellung. El plazo es de 7-10 días.',
  },
]

const products = [
  {
    name: 'Ojo de Gato Negro Clásico',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'La que toda colección necesita. Acetato negro, Scharniere pulidas, ese ángulo elevado perfecto. Es el equivaGlas en Sonnenbrillen del vestido negro pequeño — funciona con todo, se vende a todas. Es consistentemente nuestro número 1 en repetición de Bestellungs en todos los mercados.',
  },
  {
    name: 'Ojo de Gato Leopardo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 Stk.',
    description: 'Animal print bien hecho. El patrón carey no está pintado — se crea superponiendo láminas de acetato de diferentes Farbees, así cada par tiene genuina profundidad y riqueza. Una dueña de boutique en Melbourne nos dijo que estas superan en ventas a los Farbees sólidos 2 a 1 durante la primavera.',
  },
  {
    name: 'Ojo de Gato Metal Oro Rosa',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 Stk.',
    description: 'Fassung metálica fina con electrochapado oro rosa que parece que debería costar $200. No es así. La construcción de alambre delgado da una versión moderna y refinada del ojo de gato — perfecta para la mujer profesional que quiere Stil sin gritar. Combina de maravilla tanto con blazers como con vestidos de playa.',
  },
  {
    name: 'Ojo de Gato Oversized',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 Stk.',
    description: 'A lo grande o a casa. El ojo de gato oversized es básicamente cebo para Instagram — proporciones atrevidas, puntas dramáticamente elevadas, máxima cobertura facial. Un retailer online nos dijo que este Stil recibe más comentarios de "¿dónde las compraste?" que cualquier otra cosa en su tienda. También ofrece exceGlas UV-Schutz, lo cual es un buen bonus.',
  },
  {
    name: 'Ojo de Gato con Cristales',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$11.00 - $15.00',
    moq: '100 Stk.',
    description: 'Para la mujer que trata las Sonnenbrillen como joyas. Cristales colocados a mano a lo Länge de la línea de la ceja y las puntas de las Bügels captan la luz de una forma que detiene conversaciones. Ofrecemos piedras transparentes, de Farbees y de grado Swarovski. Se venden como pan caliente en tiendas de resort, boutiques nupciales y retailers de temática festiva.',
  },
  {
    name: 'Ojo de Gato Vintage',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 Stk.',
    description: 'Directo de 1958. Estrechas, con ángulos pronunciados, con Bügels gruesas de acetato que dicen "conozco mi historia de la moda." Son más pequeñas que la tendencia oversized — intencionalmente. Las coleccionistas y entusiastas del vintage se las llevan volando. Si tu mercado es retro, rockabilly o pin-up, esta es tu Fassung.',
  },
]

export default function OjoDeGatoPageDe() {
  return (
    <>
      <ProductSchema product={{
        name: 'Sonnenbrillen Ojo de Gato im Großhandel',
        description: 'Brillen de sol ojo de gato para mujer con Fassungs de acetato, metal y Materiales mixtos. Designs de tendencia con Individualisierung OEM completa. UV400 y opciones polarisierts.',
        minPrice: '8.00',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'Brillen Ojo de Gato', url: 'https://eyeviewsunglasses.com/de/produkte/katzenaugen' }
      ]} />
      <FAQPageSchema faqs={catEyeFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Brillen Ojo de Gato</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sonnenbrillen Ojo de Gato im Großhandel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El ojo de gato nunca pasa de moda. En serio — Audrey Hepburn las llevó en los
              &apos;60 y siguen siendo la forma #1 en Sonnenbrillen para mujer hoy. Fabricamos
              Fassungs ojo de gato en acetato, metal y Materiales mixtos con Individualisierung OEM completa.
              Tu logo, tus Farbees, tu Marke — nuestra Fabrik.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop"
              alt="Colección de Sonnenbrillen Ojo de Gato im Großhandel - Brillen de Moda para Mujer"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Why Cat Eye */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Por Qué el Ojo de Gato Supera en Ventas a Todo lo Demás</h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p>
                Aquí va un dato que sorprende a la gente: la forma ojo de gato ha sido la silueta
                de Sonnenbrillen femeninas más vendida durante más de 70 años. No la aviador. No la
                wayfarer. El ojo de gato. ¿Por qué? Porque hace algo que ninguna otra forma puede — eleva.
                Ese ángulo ascendente crea la ilusión de pómulos más Höhes y una mandíbula más definida.
                Es básicamente un mini lifting que puedes comprar por $15.
              </p>
              <p>
                La forma fue inventada en 1939 por una diseñadora neoyorquina llamada Altina Schinasi que estaba
                cansada de las Brillen &quot;feas&quot;. Las llamó Fassungs &quot;Arlequín&quot;. Marilyn Monroe
                las hizo famosas. Audrey Hepburn las hizo icónicas. Y ahora, en 2024, son más grandes
                que nunca — literalmente. El ojo de gato oversized domina Instagram, TikTok y
                todas las semanas de la moda ab Milán hasta Seúl.
              </p>
              <p>
                Para compradores al por mayor, las Sonnenbrillen ojo de gato son lo más parecido a una
                apuesta segura en Brillen. Atraen a todos los grupos de edad (20-60+), funcionan todo el año y tienen
                un fuerte valor percibido. Todas nuestras Fassungs ojo de gato cumplen con los <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">estándares de UV-Schutz de la FDA</a> —
                porque verse genial no debería significar comprometer la seguridad ocular. Nuestra Fabrik
                produce más de 200.000 Fassungs ojo de gato al mes en más de 40 países. Conocemos esta
                forma por dentro y por fuera.
              </p>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop" alt="Sonnenbrillen Ojo de Gato im Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">La Colección</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="card group">
                  <div className="aspect-video overflow-hidden">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} im Großhandel - EyeView`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary-600 font-semibold">{product.price}</span>
                      <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                    </div>
                    <Link href="/de/kontakt" className="btn-primary w-full block text-center">
                      Angebot anfordern
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Material Guide */}
          <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Acetato vs. Metal vs. Mixto — ¿Cuál Es el Adecuado?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">🏛️ Acetato</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Si quieres cobrar Preiss retail Premium, elige acetato. Está hecho de <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">algodón
                  y pulpa de madera</a> (sí, de verdad), y los Farbees y patrones que se pueden conseguir son
                  increíbles — carey profundo, remolinos de mármol, tonos caramelo translúcidos. Cada par
                  se pule a mano para ese acabado brillante. El acetato <em>se siente</em> caro. Tus
                  clientas lo notarán. También es hipoalergénico, así que no habrá quejas por reacciones en la piel.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Farbees ricos — carey, mármol, degradado</li>
                  <li>• Acabado Premium pulido a mano</li>
                  <li>• Hipoalergénico, eco-friendly</li>
                  <li>• Ideal para: boutiques, posicionamiento de lujo</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">⚙️ Metal</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Finas, elegantes, modernas. Las ojo de gato metálicas usan acero inoxidable o aleación libre de níquel con
                  acabados electrochapados — dorado, plateado, oro rosa, negro mate. El perfil delgado
                  crea un look refinado que el acetato no puede igualar. Son las Fassungs para mujeres
                  que quieren que sus Brillen susurren, no griten. Geniales para líneas profesionales y de oficina.
                  Más ligeras que el acetato también — la mayoría pesan menos de 22 gramos.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Finas, elegantes, ligeras (menos de 22g)</li>
                  <li>• Acabados dorado, plateado, oro rosa</li>
                  <li>• Opciones libres de níquel disponibles</li>
                  <li>• Ideal para: oficina, Markes minimalistas</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">🔗 Material Mixto</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Lo mejor de ambos mundos. Frente de acetato con Bügels finas de metal — o viceversa.
                  El contraste de dos Materiales está en plena tendencia ahora mismo. Piensa: frente de
                  acetato rosa transparente con Bügels finas doradas. O acetato negro con Bügels de alambre plateado.
                  Son las Fassungs que hacen que la gente pare y pregunte &quot;¿dónde las conseguiste?&quot;
                  Actualmente nuestra categoría de más rápido crecimiento.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Estética biFarbe de tendencia</li>
                  <li>• Posibilidades de Design creativo</li>
                  <li>• Categoría de más rápido crecimiento en 2024</li>
                  <li>• Ideal para: Markes de tendencia, venta directa</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Farbe Trends */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Qué Farbees Se Están Vendiendo Ahora</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🔥 En Tendencia Esta Temporada</h3>
                  <div className="space-y-4">
                    <FarbeTrend Farbe="bg-red-800" name="Burdeos y Vino" description="Tonos profundos y cálidos arrasando en otoño/invierno. Combina con Gläser degradadas marrones para esa vibra de lujo acogedor." />
                    <FarbeTrend Farbe="bg-pink-300" name="Rosa Suave y Empolvado" description="Sigue fuerte. El acetato rosa transparente es el Farbe individual de más rápido crecimiento en Brillen femeninas ahora mismo." />
                    <FarbeTrend Farbe="bg-green-700" name="Verde Bosque" description="El hit sorpresa del año. Una alternativa sofisticada al carey que nadie esperaba." />
                    <FarbeTrend Farbe="bg-amber-100 border border-gray-300" name="Transparente / Cristal" description="Fassungs see-through en transparente, champán, gris claro. Llevan 3 años en tendencia y no Mustern señales de desaceleración." />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">📊 Los Clásicos Eternos (Siempre se Repiten)</h3>
                  <div className="space-y-4">
                    <FarbeTrend Farbe="bg-black" name="Negro Clásico" description="30-35% de todos los Bestellungs de ojo de gato. Siempre. Cada. Temporada. Tenlo en stock o arrepiéntete." />
                    <FarbeTrend Farbe="bg-amber-700" name="Carey" description="El #2 en ventas. Los marrones multitono funcionan todo el año, con todo el mundo, en todas partes." />
                    <FarbeTrend Farbe="bg-yellow-600" name="Metal Dorado" description="Esencial para cualquier línea de lujo o profesional. Las ojo de gato doradas gritan sofisticación." />
                    <FarbeTrend Farbe="bg-gray-400" name="Degradado BiFarbe" description="Fassungs que se degradan de un Farbe a otro — negro a transparente, rosa a melocotón. Muy Instagram." />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Especificaciones</h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left font-semibold">Especificación</th>
                    <th className="p-4 text-left font-semibold">Acetato</th>
                    <th className="p-4 text-left font-semibold">Metal</th>
                    <th className="p-4 text-left font-semibold">Mixto</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-4 font-medium">Breite de Glas</td><td className="p-4 text-gray-600">52-58mm</td><td className="p-4 text-gray-600">54-60mm</td><td className="p-4 text-gray-600">53-58mm</td></tr>
                  <tr><td className="p-4 font-medium">Steg</td><td className="p-4 text-gray-600">16-20mm</td><td className="p-4 text-gray-600">14-18mm</td><td className="p-4 text-gray-600">15-19mm</td></tr>
                  <tr><td className="p-4 font-medium">Länge de Bügel</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td></tr>
                  <tr><td className="p-4 font-medium">Gewicht</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">18-24g</td><td className="p-4 text-gray-600">22-30g</td></tr>
                  <tr><td className="p-4 font-medium">Glas</td><td className="p-4 text-gray-600">CR-39 / TAC</td><td className="p-4 text-gray-600">CR-39 / Nylon</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                  <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                  <tr><td className="p-4 font-medium">Bisagra</td><td className="p-4 text-gray-600">5 barriles / Muelle</td><td className="p-4 text-gray-600">Muelle flexibel</td><td className="p-4 text-gray-600">5 barriles / Muelle</td></tr>
                  <tr><td className="p-4 font-medium">Plaquetas Nasales</td><td className="p-4 text-gray-600">Keyhole integrado</td><td className="p-4 text-gray-600">Silicona ajustable</td><td className="p-4 text-gray-600">Silicona ajustable</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Más Stils que Vale la Pena Ver</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/de/produkte/wayfarer" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="font-semibold mb-2">Brillen Wayfarer</h3>
                <p className="text-sm text-gray-600">Clásicas de acetato para todos los públicos</p>
              </Link>
              <Link href="/de/produkte/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="font-semibold mb-2">Opciones Polarisierts</h3>
                <p className="text-sm text-gray-600">Añade TAC polarisiert a cualquier ojo de gato</p>
              </Link>
              <Link href="/de/produkte/ninos" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">👧</div>
                <h3 className="font-semibold mb-2">Ojo de Gato Kinder</h3>
                <p className="text-sm text-gray-600">Mini ojo de gato para niñas — se venden solas</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tus Preguntas, Respuestas Directas</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {catEyeFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">¿Lista para Vender la Forma que Se Vende Sola?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Boutiques, tiendas online, distribuidores de Markes — trabajamos con todos ellos. Nuestro
              programa mayorista de ojo de gato para mujer te ofrece Preiss competitivos, Produktion rápida
              y Individualisierung completa. Pide un catálogo gratis y descubre lo que es posible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/de/kontakt" className="btn-primary">Solicitar Catálogo</Link>
              <Link href="/de/produkte" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-Farbes">Ver Todos los Produkte</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function FarbeTrend({ Farbe, name, description }: { Farbe: string; name: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${Farbe} flex-shrink-0 mt-1`}></div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
