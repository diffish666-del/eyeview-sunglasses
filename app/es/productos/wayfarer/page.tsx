import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gafas de Sol Wayfarer al por Mayor | Fabricante de Gafas Wayfarer OEM - EyeView',
  description: 'Fabricante de gafas de sol wayfarer al por mayor. Monturas premium de acetato, lentes UV400/polarizadas, impresión de logo personalizado. MOQ 100 uds. Precios de fábrica desde $5/par. ¡Muestras gratis!',
  keywords: 'gafas de sol wayfarer al por mayor, fabricante de gafas wayfarer, gafas wayfarer personalizadas, gafas de acetato al por mayor, gafas de sol al por mayor, fabricante de gafas, OEM gafas wayfarer',
  openGraph: {
    title: 'Gafas de Sol Wayfarer al por Mayor | Fabricante OEM - EyeView',
    description: 'Fabricante de gafas de sol wayfarer al por mayor. Monturas premium de acetato, logo personalizado, lentes UV400/polarizadas. MOQ 100 uds. Directo de fábrica.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/es/productos/wayfarer',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/productos/wayfarer',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/wayfarer',
      'es': 'https://eyeviewsunglasses.com/es/productos/wayfarer',
    },
  },
}

const wayfarerFaqs = [
  {
    question: '¿Cuál es la diferencia entre gafas wayfarer de acetato y de plástico?',
    answer: 'Una diferencia grande, la verdad. El plástico estándar inyectado (PC o nylon) es barato y ligero pero también se ve y se siente barato: fino, brillante, algo hueco. El acetato es un material de origen vegetal (hecho de fibras de algodón y pulpa de madera) que se corta de láminas sólidas y se pule a mano. Tiene una profundidad de color real, patrones naturales que no se pueden falsificar con plástico, y un peso que se siente sustancial. Nuestro acetato proviene de proveedores italianos como Mazzucchelli que llevan fabricándolo desde 1849. La diferencia de precio es de unos $2-3 por par, pero el salto en valor percibido es enorme. Versión corta: si quieres cobrar más de $20 en retail, elige acetato.',
  },
  {
    question: '¿Cuántos colores y patrones ofrecen para monturas wayfarer?',
    answer: 'Más de 200 y sumando. Los clásicos — negro sólido, carey oscuro, carey miel — siempre están en stock y listos para enviar. Pero también tenemos colores transparentes (cristal, azul claro, rosa empolvado), combinaciones bicolor, efectos mármol, patrones de veta de madera y algunas cosas bastante llamativas como acetato con purpurina. Si tienes un color Pantone específico o un patrón en mente, podemos conseguir láminas de acetato personalizadas — eso tarda 7-10 días extra y el MOQ sube a 300 piezas, pero vale la pena si quieres algo que nadie más tenga.',
  },
  {
    question: '¿Cómo se comparan las wayfarer con las aviador para mi marca?',
    answer: 'Sinceramente, son los dos estilos que recomendamos a toda marca nueva para empezar, pero tienen diferentes puntos fuertes. Las wayfarer son de acetato, así que vienen en muchos más colores y patrones — eso significa más SKUs y más variedad visual en tu página de productos o estantería. También cuestan menos por par ($5-11 vs $8-14 para aviador) así que tus márgenes pueden ser mejores. Las aviador son de metal y tienen una sensación más premium y elegante. La wayfarer es más casual, más colorida, más unisex. Si tienes que elegir una: wayfarer para volumen y variedad, aviador para posicionamiento premium. Pero en serio, la mayoría de nuestros clientes exitosos llevan ambas.',
  },
  {
    question: '¿Qué opciones de logo funcionan mejor en gafas wayfarer?',
    answer: 'Las monturas de acetato te dan opciones diferentes a las de metal. El método más popular es el estampado en caliente (lámina dorada o plateada) en el interior de la patilla — se ve limpio y premium. También hacemos serigrafía (cualquier color, interior o exterior de la patilla), logos en relieve o bajo relieve presionados directamente en el acetato, e insignias de metal insertadas en la patilla. Para el frente de la montura, algunos clientes ponen un pequeño remache metálico o tachón decorativo con su logo. El estampado en caliente en el interior de la patilla es donde empiezan la mayoría de las marcas — cuesta unos $0.15-0.20 extra por par.',
  },
  {
    question: '¿Cuál es el MOQ para gafas wayfarer personalizadas?',
    answer: 'Igual que todo lo que fabricamos — 100 piezas por modelo. Puedes mezclar colores dentro de esas 100, lo cual es genial para probar. Un primer pedido típico de una marca nueva se ve algo así: 30 negras, 20 carey, 20 transparentes, 15 negro mate, 15 de algo divertido como azul o rosa. Eso te da cinco opciones en tu tienda sin un compromiso financiero enorme. Cuando repites pedido, la mayoría de los clientes duplican los 2-3 colores que mejor vendieron y eliminan los que no se movieron.',
  },
]

const products = [
  {
    name: 'Wayfarer Negra Clásica',
    description: 'La que empezó todo y sigue superando en ventas a todas las demás. Acetato negro sólido, lentes grises UV400, acabado pulido. Es el equivalente en gafas de sol a una camiseta blanca — combina con todo y nunca pasa de moda. Hemos enviado más de este SKU individual que de cualquier otra wayfarer en nuestro catálogo. Si estás probando el mercado y solo puedes elegir un color, este es. Todas y cada una de las marcas de gafas del planeta tienen una wayfarer negra, y hay una razón para ello.',
    price: '$5.50 - $9.00',
    moq: '100 uds',
    features: ['Acetato Negro Sólido', 'Lente Gris UV400', 'Acabado Pulido', 'Bisagras de Muelle'],
  },
  {
    name: 'Wayfarer Carey',
    description: 'Acetato carey oscuro clásico — ese patrón de remolinos ámbar y marrón que ha sido un básico de moda masculina durante décadas. Cada par tiene un patrón ligeramente diferente por cómo se cortan las láminas de acetato, lo que en realidad añade a la sensación premium (no hay dos pares exactamente iguales). Usamos un carey profundo y cálido que se fotografía bien y atrae a todos los grupos de edad. Es el segundo más vendido en nuestra línea wayfarer y muchas marcas lo usan como su opción "premium" junto al negro.',
    price: '$6.00 - $10.00',
    moq: '100 uds',
    features: ['Patrón Carey Oscuro', 'Único por Par', 'Lente Degradada Marrón', 'Pulido a Mano'],
  },
  {
    name: 'Wayfarer Cristal Transparente',
    description: 'Montura de acetato transparente con un ligero brillo que atrapa la luz. Este estilo ha explotado en los últimos años — está por todo Instagram y TikTok, y el público joven (18-30) responde muy bien. Combinada con lentes ligeramente tintadas en gris o azul para un look limpio y moderno. La montura transparente también hace el logo más visible si haces branding en el interior de la patilla. Gran vendedor para marcas fashion-forward y tiendas de playa/resort. Espera que esta se fotografíe muy bien para tus listings.',
    price: '$6.50 - $10.50',
    moq: '100 uds',
    features: ['Acetato Transparente', 'Lente Tintada Suave', 'Favorita en Redes Sociales', 'Branding Visible'],
  },
  {
    name: 'Wayfarer Negro Mate',
    description: 'La misma forma que la negra clásica pero con un acabado mate soft-touch que cambia completamente la vibra. La superficie mate se consigue mediante un proceso especial de tamboreado que elimina el brillo sin afectar la durabilidad. Se siente más moderna, más discreta — como la diferencia entre una funda de móvil brillante y mate. Combinada con lentes ahumadas oscuras. Esta va bien con marcas streetwear, marcas minimalistas y cualquier marca que busque un look de "lujo discreto". Coste por par ligeramente más alto por el paso extra de acabado.',
    price: '$6.50 - $10.50',
    moq: '100 uds',
    features: ['Mate Soft-Touch', 'Acabado Tamboreado', 'Lente Ahumada Oscura', 'Estética Moderna'],
  },
  {
    name: 'Wayfarer Degradada Azul Océano',
    description: 'Una montura de acetato azul translúcido que se degrada de azul marino profundo arriba a azul más claro abajo — realmente llamativa en persona. Combinada con lentes degradadas azules que van a juego con el tono de la montura. Este es el tipo de producto que hace que alguien deje de hacer scroll. No es para todas las marcas (es más declaración que básico), pero para líneas resort, colecciones de verano y marcas que quieren destacar en una estantería llena, funciona. Vemos muchos pedidos de estas para ediciones limitadas y lanzamientos de temporada.',
    price: '$7.00 - $11.00',
    moq: '100 uds',
    features: ['Acetato Degradado Azul', 'Lente a Juego', 'Pieza Declaración', 'Lista para Edición Limitada'],
  },
  {
    name: 'Wayfarer Acetato Roja',
    description: 'Acetato rojo atrevido e indiscutible que exige atención. No es rojo cereza ni rojo bombero — es más un burdeos-rojo profundo y sofisticado que se lee como seguro sin ser ruidoso. Combinada con lentes marrones para calidez. Es un movimiento potente en una colección: atrae la mirada en la cuadrícula de tu web, destaca en Instagram y señala que tu marca no le tiene miedo al color. Se vende especialmente bien a mujeres y a marcas que apuntan al público consciente de la moda. Un añadido inteligente junto a tus básicos negro y carey.',
    price: '$7.00 - $11.00',
    moq: '100 uds',
    features: ['Acetato Rojo Profundo', 'Lente Cálida Marrón', 'Llamativa', 'Fashion Forward'],
  },
]

export default function WayfarerPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Gafas de Sol Wayfarer al por Mayor',
        description: 'Gafas de sol wayfarer clásicas con monturas premium de acetato. Más de 200 colores y patrones disponibles. Opciones de lentes UV400 y polarizadas. Personalización OEM completa con impresión de logo.',
        minPrice: '5.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Inicio', url: 'https://eyeviewsunglasses.com/es' },
        { name: 'Productos', url: 'https://eyeviewsunglasses.com/es/productos' },
        { name: 'Gafas Wayfarer', url: 'https://eyeviewsunglasses.com/es/productos/wayfarer' }
      ]} />
      <FAQPageSchema faqs={wayfarerFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hover:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/es/productos" className="hover:text-primary-600">Productos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Gafas Wayfarer</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gafas de Sol Wayfarer al por Mayor
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Gafas de Sol Wayfarer al por Mayor - Fabricante de Monturas de Acetato Personalizadas"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                La wayfarer tiene una historia que ningún otro modelo de gafas de sol puede igualar. En 1952, un <a href="https://en.wikipedia.org/wiki/Ray-Ban_Wayfarer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">diseñador llamado Raymond Stegeman</a> en Bausch &amp; Lomb hizo algo radical: abandonó el metal por completo y diseñó una montura de gafas hecha de un nuevo material llamado acetato. El resultado era atrevido, angular y completamente diferente a todo lo que la gente había visto antes. Parecía el futuro.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hollywood se fijó rápido. James Dean llevó wayfarer en <em>Rebelde sin causa</em>. Audrey Hepburn las llevó en <em>Desayuno con diamantes</em>. Para los años 60, las wayfarer estaban en todas partes — en estrellas de rock, políticos, artistas y gente corriente que simplemente quería verse bien. Las ventas bajaron en los 70 y 80, pero luego <em>Top Gun</em> y <em>The Breakfast Club</em> las trajeron de vuelta con fuerza. El patrón se ha repetido cada década desde entonces: las wayfarer bajan ligeramente, luego vuelven más fuertes. A estas alturas, llamarlas &ldquo;tendencia&rdquo; no tiene sentido. Son un fijo permanente.
              </p>
              <p className="text-lg leading-relaxed">
                Como <strong>fabricante de gafas wayfarer</strong>, producimos estas monturas en <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato de grado italiano</a> premium — el mismo tipo de material que usan las marcas de lujo que cobran $200-400 en retail. El acetato es de origen vegetal (fibras de algodón y pulpa de madera), hipoalergénico, y tiene una riqueza de color que el plástico inyectado simplemente no puede replicar. Tenemos más de 200 colores y patrones en stock, y podemos conseguir acetato personalizado para requisitos únicos de marca. Con precios desde solo $5.50 por par, las wayfarer al por mayor ofrecen algunos de los mejores márgenes en todo el negocio de gafas.
              </p>
            </div>
          </div>

          {/* Aviator vs Wayfarer Comparison */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-6">Wayfarer vs Aviador: Comparación Rápida</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Muchos de nuestros clientes preguntan con cuál empezar. Aquí va la comparación honesta.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left font-semibold text-gray-700"></th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">🔲 Wayfarer</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">✈️ <Link href="/es/productos/aviador" className="text-primary-600 hover:underline">Aviador</Link></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-6 py-3 font-medium">Material de Montura</td><td className="px-6 py-3 text-gray-600">Acetato / Plástico PC</td><td className="px-6 py-3 text-gray-600">Acero inoxidable / Aluminio / Titanio</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Rango de Precio</td><td className="px-6 py-3 text-gray-600">$5 - $11 / par</td><td className="px-6 py-3 text-gray-600">$8 - $22 / par</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Opciones de Color</td><td className="px-6 py-3 text-gray-600">200+ (gran variedad)</td><td className="px-6 py-3 text-gray-600">5-8 colores de recubrimiento</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Peso</td><td className="px-6 py-3 text-gray-600">25-32g</td><td className="px-6 py-3 text-gray-600">15-32g (varía según metal)</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Mejor Método de Logo</td><td className="px-6 py-3 text-gray-600">Estampado en caliente / relieve</td><td className="px-6 py-3 text-gray-600">Grabado láser</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Estilo</td><td className="px-6 py-3 text-gray-600">Casual, colorida, atrevida</td><td className="px-6 py-3 text-gray-600">Elegante, clásica, premium</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Ideal Para</td><td className="px-6 py-3 text-gray-600">Volumen, variedad, moda</td><td className="px-6 py-3 text-gray-600">Posicionamiento premium</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Gafas de Sol Wayfarer al por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Colección Wayfarer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/es/contacto" className="btn-primary text-sm">Pedir Presupuesto</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Especificaciones Completas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Material de Montura', 'Acetato de grado italiano (Mazzucchelli / similar) o Plástico PC'],
                      ['Peso de Montura', 'Acetato: 28-32g | Plástico PC: 20-24g'],
                      ['Material de Lente', 'Policarbonato / TAC Polarizada / CR-39 Óptica'],
                      ['Ancho de Lente', '50mm / 52mm / 54mm / 56mm'],
                      ['Ancho de Puente', '18mm / 20mm / 22mm'],
                      ['Largo de Patilla', '140mm / 145mm / 150mm'],
                      ['Altura de Lente', '38mm - 44mm'],
                      ['Protección UV', 'UV400 — bloquea el 100% de la radiación UVA y UVB'],
                      ['Polarización', 'Opcional película TAC de 7 capas — 99% de reducción de deslumbramiento'],
                      ['Colores de Montura', '200+ colores de acetato: sólido, carey, transparente, mármol, degradado, personalizado'],
                      ['Colores de Lente', 'Gris, Marrón, Verde, Azul, Rosa, Amarillo, Espejo, Degradado — todos disponibles'],
                      ['Bisagras', 'Bisagras de muelle de 5 barriles (estándar) o 7 barriles (premium)'],
                      ['Puente Nasal', 'Puente integrado keyhole o silla — moldeado en la montura'],
                      ['Certificaciones', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 piezas por modelo — se permite mezclar colores'],
                      ['Tiempo de Muestra', '3-5 días laborables'],
                      ['Tiempo de Producción', '15-20 días estándar / 10-12 días urgente'],
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

          {/* Acetate Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el Acetato Importa (Y Por Qué el Plástico Barato No Funciona)</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Si vas a vender wayfarer, necesitas entender el material. Es el factor más importante en lo premium que se siente tu producto.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-green-700">✅ Acetato (Lo Que Recomendamos)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato</a> se fabrica a partir de fibras de algodón y pulpa de madera — técnicamente es un material de origen vegetal, lo que es un buen ángulo de sostenibilidad para el marketing. Se corta de láminas sólidas (no se inyecta en moldes), lo que significa que los colores van de lado a lado. Rasca la superficie y el color sigue ahí. El material tiene una calidez y profundidad naturales que se ven caras. También es hipoalergénico y ajustable — los ópticos pueden ajustar monturas de acetato con calor para un ajuste personalizado.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro acetato proviene de fabricantes italianos establecidos como <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> (fundada en 1849) que suministran la misma materia prima a casas de gafas de lujo. La diferencia de coste vs plástico es de $2-3/par, pero el salto en valor percibido en retail es de $20-40. Es la mejor mejora en retorno de inversión que puedes hacer.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-500">⚠️ PC / Plástico Inyectado</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  También lo ofrecemos, y tiene su lugar — principalmente para productos promocionales, líneas económicas por debajo de $15 en retail y gafas para niños donde la durabilidad importa más que la sensación. El plástico PC es más ligero (20-24g vs 28-32g del acetato), más barato ($3.50-6/par) y virtualmente indestructible.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Pero no se siente premium. El color es superficial (se puede rayar), el acabado es brillante de una forma que grita &ldquo;barato&rdquo; y no hay variación natural de patrón. Si tu marca está posicionada por encima de las gafas de gasolinera, ve con acetato. Si estás haciendo un regalo promocional de $5 para una feria, el plástico está bien. No juzgamos — fabricamos ambos.
                </p>
              </div>
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Personalización para Gafas Wayfarer</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El acetato abre opciones de branding que no tienes con monturas metálicas. Esto es lo que mejor funciona.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Opciones de Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estampado en caliente</strong> — lámina dorada o plateada presionada en la patilla. Limpio, lujoso, nuestro más popular para wayfarer. ~$0.15-0.20/par.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Serigrafía</strong> — cualquier color, interior o exterior de la patilla. Más visible que el estampado en caliente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Relieve / bajo relieve</strong> — logo presionado directamente en el acetato. Sutil, táctil, muy premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Insignia metálica</strong> — pequeño logo de metal insertado en la patilla. Efecto 3D que destaca.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Color y Patrón</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>200+ colores de acetato en stock</strong> — sólido, carey, transparente, mármol, veta de madera, degradado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Igualación Pantone personalizada</strong> — danos un código de color y conseguimos el acetato a medida (MOQ 300 uds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Monturas bicolor</strong> — diferente color interior vs exterior para un look en capas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Acabado mate o brillante</strong> — brillante es estándar, mate cuesta ~$0.30/par extra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches rígidos:</strong> EVA, polipiel o cartón — todos con tu logo. $0.80-2.50/ud según material.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Fundas de microfibra:</strong> impresas con tu marca, sirven como paño de limpieza. $0.30-0.50/ud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cajas retail:</strong> impresión a todo color, tamaño personalizado, con inserto de espuma o cartón. $0.60-1.50/ud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> paños de limpieza ($0.15), tarjetas de garantía ($0.08), etiquetas colgantes ($0.10), pegatinas ($0.05)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys */}
          <section className="mb-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">¿Quién Pide Wayfarer al por Mayor?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Las wayfarer son la forma de montura más versátil en gafas. Esto es quién las compra y por qué.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🚀 Lanzamientos de Marcas Nuevas</h3>
                <p className="text-gray-600 text-sm">Marcas de gafas primerizas que quieren un estilo seguro y que guste a todo el mundo para lanzar. El bajo coste por par deja más presupuesto para marketing y packaging.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛒 Vendedores E-Commerce</h3>
                <p className="text-gray-600 text-sm">Vendedores de Shopify, Amazon y Etsy que necesitan un catálogo profundo de colores. Las 200+ opciones de acetato significan que puedes tener 10-20 listings únicos con una sola forma de montura.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎪 Empresas de Eventos y Promoción</h3>
                <p className="text-gray-600 text-sm">Eventos corporativos, festivales de música, bodas, ferias — wayfarer de color personalizado con logo son el regalo perfecto. La gente realmente las conserva y las usa.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏬 Tiendas Retail y Boutiques</h3>
                <p className="text-gray-600 text-sm">Tiendas físicas que quieren su propia marca. La variedad de colores te permite llenar un expositor con una sola forma de montura — lo que simplifica el inventario.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">👗 Marcas de Moda y Ropa</h3>
                <p className="text-gray-600 text-sm">Marcas de ropa que añaden gafas de sol como línea de accesorios. Las wayfarer combinan con prácticamente cualquier estética de moda, y la gama de colores permite hacer colecciones de temporada.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏖️ Resort y Turismo</h3>
                <p className="text-gray-600 text-sm">Hoteles, cruceros y tiendas de turistas. Wayfarer personalizadas con el nombre del destino son excelentes souvenirs que la gente realmente usa — no otro imán de nevera.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes sobre Gafas Wayfarer</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {wayfarerFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">También Te Puede Interesar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/es/productos/aviador" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Aviador</h3>
                <p className="text-gray-600 text-sm">Monturas metálicas, forma de lágrima, sensación premium. El otro &ldquo;imprescindible&rdquo; en cualquier colección de gafas. La mayoría de las marcas llevan tanto aviador como wayfarer.</p>
              </Link>
              <Link href="/es/productos/ojo-de-gato" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😺</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Ojo de Gato</h3>
                <p className="text-gray-600 text-sm">Si tu marca apunta a mujeres, las ojo de gato son el complemento perfecto a las wayfarer. Monturas de acetato con puntas elevadas y un aire retro-glam.</p>
              </Link>
              <Link href="/es/productos/polarizado" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Polarizadas</h3>
                <p className="text-gray-600 text-sm">Añade lentes polarizadas a cualquier wayfarer para un upgrade premium. Cuesta $2-3 más por par, te permite cobrar $15-20 más en retail.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Listo para Pedir Wayfarer?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos qué colores y especificaciones necesitas y tendrás un presupuesto en 24 horas.
              Las muestras se envían en 3-5 días. Sin compromiso hasta que des el visto bueno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/contacto" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Pedir Presupuesto
              </Link>
              <Link href="/es/productos" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Ver Todos los Productos
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
