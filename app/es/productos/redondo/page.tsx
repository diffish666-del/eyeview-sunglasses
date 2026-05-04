import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gafas de Sol Redondas al por Mayor | Fabricante de Monturas Circulares Vintage - EyeView',
  description: 'Fabricante de gafas de sol redondas al por mayor. Monturas circulares vintage en metal y acetato. Estilo retro John Lennon, opciones pequeñas y oversize. MOQ 100 uds. OEM/ODM directo de fábrica.',
  keywords: 'gafas de sol redondas al por mayor, fabricante gafas circulares, monturas redondas vintage, gafas retro al por mayor, gafas John Lennon, monturas redondas metal, gafas redondas acetato mayorista',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/productos/redondo',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/round',
      'es': 'https://eyeviewsunglasses.com/es/productos/redondo',
    },
  },
}

const products = [
  {
    name: 'Redonda Clásica Dorada',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 uds',
    description: 'La original. Alambre de oro fino, lentes perfectamente circulares, almohadillas nasales de silicona ajustables. Esta es la montura que John Lennon hizo icónica y que todo amante de lo vintage sigue eligiendo. Vendemos más de estas que de cualquier otro estilo redondo — y las hemos estado fabricando durante 8 años seguidos sin un solo cambio de diseño. Porque no arreglas lo que no está roto.',
  },
  {
    name: 'Redonda Plateada',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 uds',
    description: 'La misma forma redonda clásica, tono más fresco. El acabado en plata cepillada atrae al público minimalista — fans del diseño escandinavo, trabajadores tech, la gente de "menos es más". Combina perfectamente con armarios neutros. Uno de nuestros distribuidores escandinavos solo tiene redondas plateadas y mueve más de 3.000 pares por trimestre.',
  },
  {
    name: 'Redonda Vintage Negra',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.50 - $12.50',
    moq: '100 uds',
    description: 'Acetato negro grueso con un perfil contundente. Esta no es una montura delicada de alambre — es una declaración. Piensa en arquitecto, piensa en profesor de arte, piensa en director creativo. La construcción sólida le da un peso premium en la mano que grita calidad. Popular entre boutiques de gafas independientes que quieren algo con más cuerpo que el metal.',
  },
  {
    name: 'Redonda Acetato Carey',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 uds',
    description: 'Patrón carey cálido en acetato laminado. Los tonos marrones y ámbar multitonales crean una profundidad que las monturas de un solo color simplemente no pueden igualar. Esta es la versión "smart casual" de las gafas redondas — funciona con una camiseta, funciona con un blazer. Consistentemente uno de nuestros top 5 en reposiciones en todas las líneas de productos.',
  },
  {
    name: 'Redonda con Lentes de Color',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 uds',
    description: 'Lentes rosas. Lentes azules. Lentes amarillas. Lentes verdes. Esta es la montura de festival — Coachella, Glastonbury, Tomorrowland. La montura fina de metal dorado con lentes de colores vivos captura esa energía bohemia de espíritu libre. Suministramos a varios vendedores de merchandising de festivales de música que las venden en el lugar por 5-8 veces el costo mayorista. Los márgenes son increíbles.',
  },
  {
    name: 'Redonda Oversize',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 uds',
    description: 'La hermana dramática. Lentes de 56-60mm que cubren la mitad de tu cara y hacen una declaración desde el otro lado de la habitación. Las redondas oversize han explotado en redes sociales — los influencers aman las proporciones. Más cobertura solar que las redondas estándar también, así que en realidad son más protectoras. Actualmente nuestro estilo redondo de mayor crecimiento, un 40% más año tras año.',
  },
]

export default function RedondoPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hover:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/es/productos" className="hover:text-primary-600">Productos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Gafas de Sol Redondas</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gafas de Sol Redondas al por Mayor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lennon las usó. Ozzy las usó. Harry Potter las usó. Y ahora tus clientes
            las quieren. Monturas circulares vintage en metal, acetato y todos los tamaños, desde
            intelectual sutil hasta declaración oversize. Directo de fábrica, MOQ 100 unidades.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Colección de Gafas de Sol Redondas al por Mayor - Monturas Circulares Vintage"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">La Montura Que Moldeó la Cultura</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              La montura redonda no empezó como una elección de moda. A principios de 1900, era
              simplemente la forma más fácil de fabricar — los círculos eran simples de pulir. Pero entonces
              pasó algo. John Lennon cogió un par de redondas pequeñas de alambre en los años 60
              y las convirtió en el símbolo visual de toda una generación. Paz, amor y
              lentes perfectamente circulares. De la noche a la mañana, la montura redonda pasó de &quot;funcional&quot; a
              &quot;revolucionaria.&quot;
            </p>
            <p>
              La lista de personas que hicieron famosas las redondas se lee como un salón de la fama cultural.
              Janis Joplin en Woodstock. Ozzy Osbourne en el escenario. Gandhi liderando una nación.
              Steve Jobs lanzando el iPhone. Cada uno eligió monturas redondas — y cada uno
              las hizo significar algo diferente. Rebeldía. Creatividad. Sabiduría. Simplicidad.
              Ese es el poder de esta forma: se adapta a quien la lleva.
            </p>
            <p>
              Avancemos hasta ahora. La Gen Z descubrió la moda vintage y se lanzó de lleno. Las gafas
              de sol redondas son un top-5 en ventas globales de nuevo, impulsadas por la cultura thrift, la
              moda de festivales y el lado estético de TikTok. La demanda es real y creciente — nuestros
              pedidos de monturas redondas han aumentado un 35% año tras año desde 2022. Y con la <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">advertencia de la OMS sobre la exposición UV acumulativa</a>,
              las gafas de moda que realmente protegen tus ojos son más relevantes que nunca.
              Si no tienes redondas en stock, estás dejando dinero sobre la mesa.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Gafas de Sol Redondas al por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Colección Redonda</h2>
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
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protección UV400</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personalizado disponible</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/es/contacto" className="btn-primary w-full block text-center">Pedir Presupuesto</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">¿Pequeñas, Medianas u Oversize? Importa Más de lo Que Crees</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            El tamaño de la lente cambia completamente la personalidad de una montura redonda. Una redonda de 44mm
            susurra &quot;intelectual.&quot; Una redonda de 60mm grita &quot;mírame.&quot; Así es cómo elegir:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔍 Pequeña (42-48mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El tamaño auténtico &quot;Lennon&quot;. Pequeña y deliberada. Estas son para personas que
                se preocupan por conseguir las proporciones vintage exactamente correctas. No cubren
                mucha cara — ese es el punto. Se trata de la estética, no de la cobertura.
                Muy popular con puristas vintage, compradores de gafas graduadas y la
                &quot;generación Harry Potter.&quot; Más vendidas en ópticas.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor para: caras pequeñas a medianas</li>
                <li>• Vibe: intelectual, vintage auténtico</li>
                <li>• Mercado top: ópticas, tiendas vintage</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">👓 Mediana (49-53mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La apuesta segura. Las redondas medianas se adaptan a la mayor variedad de caras y atraen
                tanto a hombres como a mujeres por igual. Ni demasiado vintage, ni demasiado trendy — justo lo correcto.
                Si eres nuevo en tener monturas redondas en stock y no conoces tu mercado todavía,
                empieza aquí. Estas tienen la tasa de venta más alta y la tasa de devolución más baja
                de cualquier tamaño redondo que producimos.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor para: la mayoría de caras adultas</li>
                <li>• Vibe: equilibrado, universalmente atractivo</li>
                <li>• Mercado top: retail general, online</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔮 Oversize (54-62mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La pieza declaración. Las redondas oversize están por todo Instagram y TikTok.
                Proporciones grandes, máximo drama, mucha cobertura solar. Estas son las
                monturas que generan las reacciones de &quot;OMG ¿dónde las conseguiste?&quot;. Actualmente
                nuestro segmento de mayor crecimiento — un 40% más año tras año. Si tus clientes
                tienen menos de 35 años, probablemente esto es lo que quieren.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor para: caras medianas a grandes</li>
                <li>• Vibe: atrevido, listo para redes sociales</li>
                <li>• Mercado top: marcas de moda, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Por Qué las Redondas Siempre Vuelven</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🎭" title="Peso Cultural" description="Más de 60 años de usuarios icónicos. Ninguna otra forma tiene tanta historia y significado." />
            <FeatureCard icon="👓" title="Geometría Favorecedora" description="Los círculos suavizan las caras angulares maravillosamente. ¿Mandíbula cuadrada? ¿Cara de diamante? Las redondas te equilibran." />
            <FeatureCard icon="✨" title="Atractivo Unisex" description="Una de las pocas formas que se vende igual de bien a hombres y mujeres. Duplica tu mercado al instante." />
          </div>
        </section>

        {/* Specs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Especificaciones Técnicas</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Especificación</th>
                  <th className="p-4 text-left font-semibold">Metal</th>
                  <th className="p-4 text-left font-semibold">Acetato</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Material</td><td className="p-4 text-gray-600">Acero inoxidable / Titanio</td><td className="p-4 text-gray-600">Acetato estilo italiano</td></tr>
                <tr><td className="p-4 font-medium">Ancho de Lente</td><td className="p-4 text-gray-600">42-58mm</td><td className="p-4 text-gray-600">46-62mm</td></tr>
                <tr><td className="p-4 font-medium">Puente</td><td className="p-4 text-gray-600">18-22mm</td><td className="p-4 text-gray-600">18-24mm</td></tr>
                <tr><td className="p-4 font-medium">Largo de Patilla</td><td className="p-4 text-gray-600">135-145mm</td><td className="p-4 text-gray-600">140-148mm</td></tr>
                <tr><td className="p-4 font-medium">Peso</td><td className="p-4 text-gray-600">15-22g</td><td className="p-4 text-gray-600">25-35g</td></tr>
                <tr><td className="p-4 font-medium">Opciones de Lente</td><td className="p-4 text-gray-600">CR-39 / Cristal / TAC</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Almohadillas Nasales</td><td className="p-4 text-gray-600">Silicona ajustable</td><td className="p-4 text-gray-600">Puente keyhole integrado</td></tr>
                <tr><td className="p-4 font-medium">Colores</td><td className="p-4 text-gray-600">12+ incluyendo tintes de color</td><td className="p-4 text-gray-600">10+ opciones</td></tr>
                <tr><td className="p-4 font-medium">Polarizado</td><td className="p-4 text-gray-600">TAC opcional</td><td className="p-4 text-gray-600">TAC opcional</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Estilos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/es/productos/ojo-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Gafas Cat Eye</h3>
              <p className="text-sm text-gray-600">Otro icono vintage — combina bien en colecciones</p>
            </Link>
            <Link href="/es/productos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Redondas Polarizadas</h3>
              <p className="text-sm text-gray-600">Añade TAC anti-reflejo a cualquier estilo redondo</p>
            </Link>
            <Link href="/es/productos/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Redondas Luz Azul</h3>
              <p className="text-sm text-gray-600">Monturas vintage con protección de pantalla</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿Las gafas redondas quedan bien en caras redondas?"
              answer="Honestamente, depende. La sabiduría convencional dice 'no — círculos sobre círculos hace todo más redondo.' Y eso es cierto para algunas personas. Pero mucha gente con cara redonda las usa igualmente porque les gusta el look. Nuestra recomendación: si estás surtiendo para retail general, lidera con redondas medianas y oversize (que funcionan en más formas de cara). Si un cliente con cara redonda pregunta, sugiere una forma angular como nuestro cat eye o wayfarer. Pero no los rechaces — las reglas de moda están para romperse."
            />
            <FaqItem
              question="¿Metal o acetato — cuál es la diferencia realmente?"
              answer="Las redondas de metal son más ligeras (15-22g vs 25-35g), más finas y de aspecto más delicado. Tienen almohadillas nasales ajustables para que se adapten a más formas de cara. Las redondas de acetato son más atrevidas, más pesadas de una forma 'premium', y vienen en muchos más colores y patrones — carey, mármol, tonos translúcidos. Ambas cumplen los estándares de protección UV de la FDA. El metal dice 'intelectual minimalista.' El acetato dice 'creativo a la moda.' Ambas se venden bien, pero para clientes diferentes."
            />
            <FaqItem
              question="¿Puedo obtener monturas redondas con lentes graduadas?"
              answer="Por supuesto. La forma redonda es en realidad la más fácil de equipar con lentes graduadas porque el círculo simétrico distribuye la corrección óptica uniformemente. Enviamos todas nuestras monturas redondas listas para graduación con lentes de demostración. Funciona para visión simple, bifocal y progresiva. Las monturas redondas graduadas son un mercado enorme — ¡piensa en todos esos fans de Harry Potter que realmente necesitan gafas!"
            />
            <FaqItem
              question="¿Qué colores de lente se venden mejor en monturas redondas?"
              answer="Los más vendidos en orden: (1) Verde clásico G-15 — el look vintage auténtico, (2) Gris — neutro, combina con todo, (3) Marrón/ámbar — tono más cálido, gran contraste, (4) Espejo azul — el público joven los adora, (5) Tintados amarillo/rosa/naranja — compradores de festivales y bohemios. Las lentes degradadas (oscuras arriba, más claras abajo) también están muy de moda ahora, especialmente en redondas oversize."
            />
            <FaqItem
              question="¿Cuál es el MOQ y el tiempo de entrega?"
              answer="100 unidades por estilo y color para diseños en stock. 300 unidades para OEM personalizado (tu logo, colores Pantone, empaque personalizado). La producción tarda 15-25 días para pedidos personalizados, 3-5 días para artículos en stock. También hacemos ODM completo — envíanos un boceto o foto de referencia y crearemos un nuevo diseño desde cero. Un cliente nos envió por email una foto vintage de gafas de sol de los años 60 y recreamos la montura en 3 semanas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Lo Vintage Nunca Pasa de Moda</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Marcas de moda, ópticas, boutiques vintage, vendedores de merch de festivales — las monturas
            redondas se venden en todas partes. Pide muestras, comprueba la calidad, y luego hablamos de números.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="btn-primary">Solicitar Presupuesto Gratis</Link>
            <Link href="/es/productos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos los Productos</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://eyeviewglasses.com/es" },
          { "@type": "ListItem", "position": 2, "name": "Productos", "item": "https://eyeviewglasses.com/es/productos" },
          { "@type": "ListItem", "position": 3, "name": "Gafas de Sol Redondas", "item": "https://eyeviewglasses.com/es/productos/redondo" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Las gafas redondas quedan bien en caras redondas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Depende de la persona. Convencionalmente, se recomiendan formas angulares para caras redondas, pero mucha gente con caras redondas las usa por elección. Las redondas medianas y oversize funcionan en más formas de cara que las pequeñas." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la diferencia entre monturas redondas de metal y acetato?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las redondas de metal son más ligeras (15-22g), más finas y más minimalistas con almohadillas nasales ajustables. Las redondas de acetato son más atrevidas (25-35g), vienen en más colores y patrones, y tienen una sensación premium y sólida." }
          },
          {
            "@type": "Question",
            "name": "¿Se pueden hacer monturas redondas con lentes graduadas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — la forma redonda es la más fácil para lentes graduadas debido a la geometría simétrica. Todas nuestras monturas redondas se envían listas para graduación con lentes de demostración para visión simple, bifocal y progresiva." }
          },
          {
            "@type": "Question",
            "name": "¿Qué colores de lente se venden mejor en monturas redondas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Los más vendidos: verde clásico G-15, gris, marrón/ámbar, espejo azul y tintes de color (amarillo, rosa, naranja) para compradores de festivales. Las lentes degradadas también son muy populares en redondas oversize." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es el MOQ y el tiempo de entrega?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 unidades por estilo para diseños en stock. 300 unidades para pedidos OEM personalizados. Producción: 15-25 días personalizado, 3-5 días stock. Servicio de diseño ODM completo también disponible." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}
