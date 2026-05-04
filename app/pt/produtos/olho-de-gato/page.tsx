import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Óculos de Sol Olho de Gato al por Mayor | Fabricante de Óculos Olho de Gato - EyeView',
  description: 'Fabricante de óculos de sol olho de gato no atacado. Óculos olho de gato para mujer en acetato, metal y materiales mixtos. Colores de tendencia, OEM/ODM. MOQ 100 pçs. Direto de fábrica.',
  keywords: 'óculos de sol olho de gato no atacado, fabricante de óculos olho de gato, óculos de mujer no atacado, armações olho de gato, óculos de sol no atacado, fabricante de óculos, óculos olho de gato acetato, óculos retro vintage',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/olho-de-gato',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/cat-eye',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/olho-de-gato',
    },
  },
}

const catEyeFaqs = [
  {
    question: '¿Qué formas de rostro van bien con las óculos olho de gato?',
    answer: 'Casi todas, sinceramente. El olho de gato es una de las formas más favorecedoras que existen. ¿Rostro ovalado? Perfecto. ¿Rostro redondo? Los ángulos elevados añaden definición — queda genial. ¿Forma de corazón? Combinación ideal. ¿Rostro cuadrado? Elige un olho de gato más suave y redondeado para equilibrar los ángulos. La única forma de rostro que puede ser complicada es la muy alargada/estrecha, donde un olho de gato oversized puede resultar excesivo. Pero incluso ahí, un olho de gato petite funciona bien.',
  },
  {
    question: '¿Cuál es el MOQ para óculos olho de gato con marca personalizada?',
    answer: '100 peças por color para nossos designs existentes. Quer tu propio molde personalizado, colores Pantone a medida y packaging con marca? Son 300 peças por estilo. Consejo pro: puedes mezclar diferentes estilos de olho de gato en un pedido para alcanzar el mínimo. Así podrías hacer 100 negro clásico + 100 leopardo + 100 oro rosa = 300 en total. Somos flexibles.',
  },
  {
    question: '¿Se pueden hacer graduadas estas armações?',
    answer: '¡Sí! Todas nossas armações olho de gato de acetato y metal se pueden enviar con lentes de amostra para que las ópticas coloquen lentes graduadas. Acomodamos prescripciones monofocales, bifocales y progresivas. La profundidad de la armação y la curvatura de la lente están diseñadas para ello. Es un excelente upsell para ópticas — armações de moda con capacidad de graduación.',
  },
  {
    question: '¿Qué tendencias hay en olho de gato para 2024-2025?',
    answer: 'Grandes tendencias ahora mismo: proporciones oversized (más grande es mejor), acetato transparente/cristal (especialmente rosa y champán), materiales mixtos (frente de acetato + hastes de metal), olho de gato geométrico angular (menos curvo, más edgy), y pasteles suaves como lavanda y verde salvia. El revival del olho de gato estrecho Y2K também sigue fuerte entre las compradoras jóvenes. Seguimos estas tendencias cada temporada y actualizamos nosso catálogo en consecuencia.',
  },
  {
    question: '¿Puedo obtener amostras antes de comprometerme con un pedido grande?',
    answer: 'Por supuesto — nunca esperaríamos que pidas a ciegas. ¿Estilos existentes del catálogo? Amostras grátis, solo cubres el envio (normalmente $30-50 vía DHL por 3-5 pares). Quer una amostra personalizada con tus modificaciones específicas? Pequeño cargo de $50-100 por design, que acreditamos contra tu primer pedido de produção. Así que básicamente obtienes amostras personalizadas grátis si haces pedido. El plazo es de 7-10 dias.',
  },
]

const products = [
  {
    name: 'Olho de Gato Negro Clásico',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pçs',
    description: 'La que toda coleção necesita. Acetato negro, dobradiças pulidas, ese ángulo elevado perfecto. Es el equivalente en óculos de sol del vestido negro pequeño — funciona con todo, se vende a todas. Es consistentemente nosso número 1 en repetición de pedidos en todos los mercados.',
  },
  {
    name: 'Olho de Gato Leopardo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pçs',
    description: 'Animal print bien hecho. El patrón carey no está pintado — se crea superponiendo láminas de acetato de diferentes colores, así cada par tiene genuina profundidad y riqueza. Una dueña de boutique en Melbourne nos dijo que estas superan en ventas a los colores sólidos 2 a 1 durante la primavera.',
  },
  {
    name: 'Olho de Gato Metal Oro Rosa',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pçs',
    description: 'Armação metálica fina con electrochapado oro rosa que parece que debería costar $200. No es así. La construcción de alambre delgado da una versión moderna y refinada del olho de gato — perfecta para la mujer profesional que quiere estilo sin gritar. Combina de maravilla tanto con blazers como con vestidos de playa.',
  },
  {
    name: 'Olho de Gato Oversized',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pçs',
    description: 'A lo grande o a casa. El olho de gato oversized es básicamente cebo para Instagram — proporciones atrevidas, puntas dramáticamente elevadas, máxima cobertura facial. Un retailer online nos dijo que este estilo recibe más comentarios de "¿dónde las compraste?" que cualquier otra cosa en su tienda. Também ofrece excelente proteção UV, lo cual es un buen bonus.',
  },
  {
    name: 'Olho de Gato con Cristales',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$11.00 - $15.00',
    moq: '100 pçs',
    description: 'Para la mujer que trata las óculos de sol como joyas. Cristales colocados a mano a lo largo de la línea de la ceja y las puntas de las hastes captan la luz de una forma que detiene conversaciones. Ofrecemos piedras transparentes, de colores y de grado Swarovski. Se venden como pan caliente en tiendas de resort, boutiques nupciales y retailers de temática festiva.',
  },
  {
    name: 'Olho de Gato Vintage',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pçs',
    description: 'Directo de 1958. Estrechas, con ángulos pronunciados, con hastes gruesas de acetato que dicen "conozco mi historia de la moda." Son más pequeñas que la tendencia oversized — intencionalmente. Las coleccionistas y entusiastas del vintage se las llevan volando. Si tu mercado es retro, rockabilly o pin-up, esta es tu armação.',
  },
]

export default function OlhoDeGatoPagePt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Olho de Gato al por Mayor',
        description: 'Óculos de sol olho de gato para mujer con armações de acetato, metal y materiales mixtos. Designs de tendencia con personalização OEM completa. UV400 y opciones polarizados.',
        minPrice: '8.00',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos Olho de Gato', url: 'https://eyeviewsunglasses.com/pt/produtos/olho-de-gato' }
      ]} />
      <FAQPageSchema faqs={catEyeFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Óculos Olho de Gato</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Óculos de Sol Olho de Gato al por Mayor
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El olho de gato nunca pasa de moda. En serio — Audrey Hepburn las llevó en los
              &apos;60 y siguen siendo la forma #1 en óculos de sol para mujer hoy. Fabricamos
              armações olho de gato en acetato, metal y materiales mixtos con personalização OEM completa.
              Tu logo, tus colores, tu marca — nossa fábrica.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop"
              alt="Coleção de Óculos de Sol Olho de Gato al por Mayor - Óculos de Moda para Mujer"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Why Olho de Gato */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Por Qué el Olho de Gato Supera en Ventas a Todo lo Demás</h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p>
                Aquí va un dato que sorprende a la gente: la forma olho de gato ha sido la silueta
                de óculos de sol femeninas más vendida durante mais de 70 anos. No la aviador. No la
                wayfarer. El olho de gato. ¿Por qué? Porque hace algo que ninguna otra forma puede — eleva.
                Ese ángulo ascendente crea la ilusión de pómulos más altos y una mandíbula mais definida.
                Es básicamente un mini lifting que puedes comprar por $15.
              </p>
              <p>
                La forma fue inventada en 1939 por una diseñadora neoyorquina llamada Altina Schinasi que estaba
                cansada de las óculos &quot;feas&quot;. Las llamó armações &quot;Arlequín&quot;. Marilyn Monroe
                las hizo famosas. Audrey Hepburn las hizo icónicas. Y ahora, en 2024, son más grandes
                que nunca — literalmente. El olho de gato oversized domina Instagram, TikTok y
                todas las semanas de la moda a partir de Milán hasta Seúl.
              </p>
              <p>
                Para compradores no atacado, las óculos de sol olho de gato son lo más parecido a una
                apuesta segura en óculos. Atraen a todos los grupos de edad (20-60+), funcionan todo el año y tienen
                un fuerte valor percibido. Todas nossas armações olho de gato cumplen con los <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">estándares de proteção UV de la FDA</a> —
                porque verse genial no debería significar comprometer la seguridad ocular. Nossa fábrica
                produce mais de 200.000 armações olho de gato al mes en mais de 40 países. Conocemos esta
                forma por dentro y por fuera.
              </p>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop" alt="Óculos de Sol Olho de Gato al por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">La Coleção</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="card group">
                  <div className="aspect-video overflow-hidden">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} al por Mayor - EyeView`}
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
                    <Link href="/pt/contato" className="btn-primary w-full block text-center">
                      Solicitar Orçamento
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
                  Si quieres cobrar preços retail premium, elige acetato. Está hecho de <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">algodón
                  y pulpa de madera</a> (sí, de verdad), y los colores y patrones que se pueden conseguir son
                  increíbles — carey profundo, remolinos de mármol, tonos caramelo translúcidos. Cada par
                  se pule a mano para ese acabado brillante. El acetato <em>se siente</em> caro. Tus
                  clientas lo notarán. Também es hipoalergénico, así que no habrá quejas por reacciones en la piel.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Colores ricos — carey, mármol, degradado</li>
                  <li>• Acabado premium pulido a mano</li>
                  <li>• Hipoalergénico, eco-friendly</li>
                  <li>• Ideal para: boutiques, posicionamiento de lujo</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">⚙️ Metal</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Finas, elegantes, modernas. Las olho de gato metálicas usan acero inoxidable o aleación libre de níquel con
                  acabados electrochapados — dorado, plateado, oro rosa, negro mate. El perfil delgado
                  crea un look refinado que el acetato no puede igualar. Son las armações para mujeres
                  que quieren que sus óculos susurren, no griten. Geniales para líneas profesionales y de oficina.
                  Más ligeras que el acetato também — la mayoría pesan menos de 22 gramos.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Finas, elegantes, ligeras (menos de 22g)</li>
                  <li>• Acabados dorado, plateado, oro rosa</li>
                  <li>• Opciones libres de níquel disponívels</li>
                  <li>• Ideal para: oficina, marcas minimalistas</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">🔗 Material Mixto</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Lo mejor de ambos mundos. Frente de acetato con hastes finas de metal — o viceversa.
                  El contraste de dos materiales está en plena tendencia ahora mismo. Piensa: frente de
                  acetato rosa transparente con hastes finas doradas. O acetato negro con hastes de alambre plateado.
                  Son las armações que hacen que la gente pare y pregunte &quot;¿dónde las conseguiste?&quot;
                  Actualmente nossa categoría de más rápido crecimiento.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Estética bicolor de tendencia</li>
                  <li>• Posibilidades de design creativo</li>
                  <li>• Categoría de más rápido crecimiento en 2024</li>
                  <li>• Ideal para: marcas de tendencia, venta directa</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Color Trends */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Qué Colores Se Están Vendiendo Ahora</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🔥 En Tendencia Esta Temporada</h3>
                  <div className="space-y-4">
                    <ColorTrend color="bg-red-800" name="Burdeos y Vino" description="Tonos profundos y cálidos arrasando en otoño/invierno. Combina con lentes degradadas marrones para esa vibra de lujo acogedor." />
                    <ColorTrend color="bg-pink-300" name="Rosa Suave y Empolvado" description="Sigue fuerte. El acetato rosa transparente es el color individual de más rápido crecimiento en óculos femeninas ahora mismo." />
                    <ColorTrend color="bg-green-700" name="Verde Bosque" description="El hit sorpresa del año. Una alternativa sofisticada al carey que nadie esperaba." />
                    <ColorTrend color="bg-amber-100 border border-gray-300" name="Transparente / Cristal" description="Armações see-through en transparente, champán, gris claro. Llevan 3 anos en tendencia y no amostran señales de desaceleración." />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">📊 Los Clásicos Eternos (Siempre se Repiten)</h3>
                  <div className="space-y-4">
                    <ColorTrend color="bg-black" name="Negro Clásico" description="30-35% de todos los pedidos de olho de gato. Siempre. Cada. Temporada. Tenlo en stock o arrepiéntete." />
                    <ColorTrend color="bg-amber-700" name="Carey" description="El #2 en ventas. Los marrones multitono funcionan todo el año, con todo el mundo, en todas partes." />
                    <ColorTrend color="bg-yellow-600" name="Metal Dorado" description="Esencial para cualquier línea de lujo o profesional. Las olho de gato doradas gritan sofisticación." />
                    <ColorTrend color="bg-gray-400" name="Degradado Bicolor" description="Armações que se degradan de un color a otro — negro a transparente, rosa a melocotón. Muy Instagram." />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Especificações</h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left font-semibold">Especificação</th>
                    <th className="p-4 text-left font-semibold">Acetato</th>
                    <th className="p-4 text-left font-semibold">Metal</th>
                    <th className="p-4 text-left font-semibold">Mixto</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-4 font-medium">Ancho de Lente</td><td className="p-4 text-gray-600">52-58mm</td><td className="p-4 text-gray-600">54-60mm</td><td className="p-4 text-gray-600">53-58mm</td></tr>
                  <tr><td className="p-4 font-medium">Ponte</td><td className="p-4 text-gray-600">16-20mm</td><td className="p-4 text-gray-600">14-18mm</td><td className="p-4 text-gray-600">15-19mm</td></tr>
                  <tr><td className="p-4 font-medium">Largo de Haste</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td></tr>
                  <tr><td className="p-4 font-medium">Peso</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">18-24g</td><td className="p-4 text-gray-600">22-30g</td></tr>
                  <tr><td className="p-4 font-medium">Lente</td><td className="p-4 text-gray-600">CR-39 / TAC</td><td className="p-4 text-gray-600">CR-39 / Nylon</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                  <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                  <tr><td className="p-4 font-medium">Dobradiça</td><td className="p-4 text-gray-600">5 barriles / Muelle</td><td className="p-4 text-gray-600">Muelle flexible</td><td className="p-4 text-gray-600">5 barriles / Muelle</td></tr>
                  <tr><td className="p-4 font-medium">Plaquetas Nasais</td><td className="p-4 text-gray-600">Keyhole integrado</td><td className="p-4 text-gray-600">Silicona ajustable</td><td className="p-4 text-gray-600">Silicona ajustable</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Más Estilos que Vale la Pena Ver</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/produtos/wayfarer" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="font-semibold mb-2">Óculos Wayfarer</h3>
                <p className="text-sm text-gray-600">Clásicas de acetato para todos los públicos</p>
              </Link>
              <Link href="/pt/produtos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="font-semibold mb-2">Opciones Polarizados</h3>
                <p className="text-sm text-gray-600">Añade TAC polarizada a cualquier olho de gato</p>
              </Link>
              <Link href="/pt/produtos/infantil" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">👧</div>
                <h3 className="font-semibold mb-2">Olho de Gato Infantil</h3>
                <p className="text-sm text-gray-600">Mini olho de gato para niñas — se venden solas</p>
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
              Boutiques, tiendas online, distribuidores de marcas — trabajamos con todos ellos. Nosso
              programa mayorista de olho de gato para mujer te ofrece preços competitivos, produção rápida
              y personalização completa. Pide un catálogo grátis y descubre lo que es posible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pt/contato" className="btn-primary">Solicitar Catálogo</Link>
              <Link href="/pt/produtos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos los Produtos</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function ColorTrend({ color, name, description }: { color: string; name: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${color} flex-shrink-0 mt-1`}></div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
