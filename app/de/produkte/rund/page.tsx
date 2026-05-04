import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Runde Sonnenbrillen Großhandel | Retro-Brillen Hersteller - EyeView',
  description: 'Hersteller von runden Sonnenbrillen im Großhandel. Vintage-Retro-Fassungen in Metall und Acetat. John-Lennon-Stil bis Oversize. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  keywords: 'Runde Sonnenbrillen Großhandel, Retro Brillen Hersteller, Vintage Sonnenbrillen, runde Fassungen Großhandel, Brillen Hersteller',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/rund',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/round',
      'de': 'https://eyeviewsunglasses.com/de/produkte/rund',
    },
  },
}

const products = [
  {
    name: 'Redonda Clásica Dorada',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'Hersteller von runden Sonnenbrillen im Großhandel. Vintage-Retro-Fassungen in Metall und Acetat. John-Lennon-Stil bis Oversize. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  },
  {
    name: 'Redonda Plateada',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'Hersteller von runden Sonnenbrillen im Großhandel. Vintage-Retro-Fassungen in Metall und Acetat. John-Lennon-Stil bis Oversize. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  },
  {
    name: 'Redonda Vintage Negra',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.50 - $12.50',
    moq: '100 Stk.',
    description: 'Acetato negro grueso con un perfil contundente. Esta no es una Fassung delicada de alambre — es una declaración. Piensa en arquitecto, piensa en profesor de arte, piensa en director creativo. La construcción sólida le da un Gewicht Premium en la mano que grita Qualität. Popular entre boutiques de Brillen independientes que quieren algo con más cuerpo que el metal.',
  },
  {
    name: 'Redonda Acetato Carey',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 Stk.',
    description: 'Hersteller von runden Sonnenbrillen im Großhandel. Vintage-Retro-Fassungen in Metall und Acetat. John-Lennon-Stil bis Oversize. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  },
  {
    name: 'Redonda con Gläser de Farbe',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 Stk.',
    description: 'Gläser rosas. Gläser azules. Gläser amarillas. Gläser verdes. Esta es la Fassung de festival — Coachella, Glastonbury, Tomorrowland. La Fassung fina de metal dorado con Gläser de Farbees vivos captura esa energía bohemia de espíritu libre. Suministramos a varios vendedores de merchandising de festivales de música que las venden en el lugar por 5-8 veces el costo mayorista. Los márgenes son increíbles.',
  },
  {
    name: 'Redonda Oversize',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 Stk.',
    description: 'Hersteller von runden Sonnenbrillen im Großhandel. Vintage-Retro-Fassungen in Metall und Acetat. John-Lennon-Stil bis Oversize. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  },
]

export default function RedondoPageDe() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Sonnenbrillen Redondas</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sonnenbrillen Redondas im Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lennon las usó. Ozzy las usó. Harry Potter las usó. Y ahora tus Kundes
            las quieren. Fassungs circulares vintage en metal, acetato y todos los Größes, ab
            intelectual sutil hasta declaración oversize. Directo de Fabrik, MOQ 100 unidades.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Colección de Sonnenbrillen Redondas im Großhandel - Fassungs Circulares Vintage"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">La Fassung Que Moldeó la Cultura</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              La Fassung redonda no empezó como una elección de moda. A principios de 1900, era
              simplemente la forma más fácil de fabricar — los círculos eran simples de pulir. Pero entonces
              pasó algo. John Lennon cogió un par de redondas pequeñas de alambre en los años 60
              y las convirtió en el símbolo visual de toda una generación. Paz, amor y
              Gläser perfectamente circulares. De la noche a la mañana, la Fassung redonda pasó de &quot;funcional&quot; a
              &quot;revolucionaria.&quot;
            </p>
            <p>
              La lista de personas que hicieron famosas las redondas se lee como un salón de la fama cultural.
              Janis Joplin en Woodstock. Ozzy Osbourne en el escenario. Gandhi liderando una nación.
              Steve Jobs lanzando el iPhone. Cada uno eligió Fassungs redondas — y cada uno
              las hizo significar algo diferente. Rebeldía. Creatividad. Sabiduría. Simplicidad.
              Ese es el poder de esta forma: se adapta a quien la lleva.
            </p>
            <p>
              Avancemos hasta ahora. La Gen Z descubrió la moda vintage y se lanzó de lleno. Las Brillen
              de sol redondas son un top-5 en ventas globales de nuevo, impulsadas por la cultura thrift, la
              moda de festivales y el lado estético de TikTok. La demanda es real y creciente — nuestros
              Bestellungs de Fassungs redondas han aumentado un 35% año tras año ab 2022. Y con la <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">advertencia de la OMS sobre la exposición UV acumulativa</a>,
              las Brillen de moda que realmente protegen tus ojos son más relevantes que nunca.
              Si no tienes redondas en stock, estás dejando dinero sobre la mesa.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Sonnenbrillen Redondas im Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
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
                    alt={`${product.name} im Großhandel - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>UV-Schutz400</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personalizado disponible</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/de/kontakt" className="btn-primary w-full block text-center">Angebot anfordern</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">¿Pequeñas, Medianas u Oversize? Importa Más de lo Que Crees</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            El Größe de la Glas cambia completamente la personalidad de una Fassung redonda. Una redonda de 44mm
            susurra &quot;intelectual.&quot; Una redonda de 60mm grita &quot;mírame.&quot; Así es cómo elegir:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔍 Pequeña (42-48mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El Größe auténtico &quot;Lennon&quot;. Pequeña y deliberada. Estas son para personas que
                se preocupan por conseguir las proporciones vintage exactamente correctas. No cubren
                mucha cara — ese es el punto. Se trata de la estética, no de la cobertura.
                Muy popular con puristas vintage, compradores de Brillen graduadas y la
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
                Si eres nuevo en tener Fassungs redondas en stock y no conoces tu mercado todavía,
                empieza aquí. Estas tienen la tasa de venta más alta y la tasa de devolución más baja
                de cualquier Größe redondo que producimos.
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
                Fassungs que generan las reacciones de &quot;OMG ¿dónde las conseguiste?&quot;. Actualmente
                nuestro segmento de mayor crecimiento — un 40% más año tras año. Si tus Kundes
                tienen menos de 35 años, probablemente esto es lo que quieren.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor para: caras medianas a grandes</li>
                <li>• Vibe: atrevido, listo para redes sociales</li>
                <li>• Mercado top: Markes de moda, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Por Qué las Redondas Siempre Vuelven</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🎭" title="Gewicht Cultural" description="Más de 60 años de usuarios icónicos. Ninguna otra forma tiene tanta historia y significado." />
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
                <tr><td className="p-4 font-medium">Material</td><td className="p-4 text-gray-600">Acero inoxidable / Titanio</td><td className="p-4 text-gray-600">Acetato Stil italiano</td></tr>
                <tr><td className="p-4 font-medium">Breite de Glas</td><td className="p-4 text-gray-600">42-58mm</td><td className="p-4 text-gray-600">46-62mm</td></tr>
                <tr><td className="p-4 font-medium">Steg</td><td className="p-4 text-gray-600">18-22mm</td><td className="p-4 text-gray-600">18-24mm</td></tr>
                <tr><td className="p-4 font-medium">Länge de Bügel</td><td className="p-4 text-gray-600">135-145mm</td><td className="p-4 text-gray-600">140-148mm</td></tr>
                <tr><td className="p-4 font-medium">Gewicht</td><td className="p-4 text-gray-600">15-22g</td><td className="p-4 text-gray-600">25-35g</td></tr>
                <tr><td className="p-4 font-medium">Opciones de Glas</td><td className="p-4 text-gray-600">CR-39 / Cristal / TAC</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Almohadillas Nasales</td><td className="p-4 text-gray-600">Silicona ajustable</td><td className="p-4 text-gray-600">Steg keyhole integrado</td></tr>
                <tr><td className="p-4 font-medium">Farbees</td><td className="p-4 text-gray-600">12+ incluyendo tintes de Farbe</td><td className="p-4 text-gray-600">10+ opciones</td></tr>
                <tr><td className="p-4 font-medium">Polarisiert</td><td className="p-4 text-gray-600">TAC opcional</td><td className="p-4 text-gray-600">TAC opcional</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Stils Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/ojo-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Brillen Cat Eye</h3>
              <p className="text-sm text-gray-600">Otro icono vintage — combina bien en colecciones</p>
            </Link>
            <Link href="/de/produkte/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Redondas Polarisierts</h3>
              <p className="text-sm text-gray-600">Añade TAC anti-reflejo a cualquier Stil redondo</p>
            </Link>
            <Link href="/de/produkte/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Redondas Luz Azul</h3>
              <p className="text-sm text-gray-600">Fassungs vintage con protección de pantalla</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Häufig gestellte Fragen</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿Las Brillen redondas quedan bien en caras redondas?"
              answer="Honestamente, depende. La sabiduría convencional dice 'no — círculos sobre círculos hace todo más redondo.' Y eso es cierto para algunas personas. Pero mucha gente con cara redonda las usa igualmente porque les gusta el look. Nuestra recomendación: si estás surtiendo para retail general, lidera con redondas medianas y oversize (que funcionan en más formas de cara). Si un Kunde con cara redonda pregunta, sugiere una forma angular como nuestro cat eye o wayfarer. Pero no los rechaces — las reglas de moda están para romperse."
            />
            <FaqItem
              question="¿Metal o acetato — cuál es la diferencia realmente?"
              answer="Las redondas de metal son más ligeras (15-22g vs 25-35g), más finas y de aspecto más delicado. Tienen almohadillas nasales ajustables para que se adapten a más formas de cara. Las redondas de acetato son más atrevidas, más pesadas de una forma 'Premium', y vienen en muchos más Farbees y patrones — carey, mármol, tonos translúcidos. Ambas cumplen los estándares de UV-Schutz de la FDA. El metal dice 'intelectual minimalista.' El acetato dice 'creativo a la moda.' Ambas se venden bien, pero para Kundes diferentes."
            />
            <FaqItem
              question="¿Puedo obtener Fassungs redondas con Gläser graduadas?"
              answer="Por supuesto. La forma redonda es en realidad la más fácil de equipar con Gläser graduadas porque el círculo simétrico distribuye la corrección óptica uniformemente. Enviamos todas nuestras Fassungs redondas listas para graduación con Gläser de demostración. Funciona para visión simple, bifocal y progresiva. Las Fassungs redondas graduadas son un mercado enorme — ¡piensa en todos esos fans de Harry Potter que realmente necesitan Brillen!"
            />
            <FaqItem
              question="¿Qué Farbees de Glas se venden mejor en Fassungs redondas?"
              answer="Los más vendidos en orden: (1) Verde clásico G-15 — el look vintage auténtico, (2) Gris — neutro, combina con todo, (3) Marrón/ámbar — tono más cálido, gran contraste, (4) Espejo azul — el público joven los adora, (5) Tintados amarillo/rosa/naranja — compradores de festivales y bohemios. Las Gläser degradadas (oscuras arriba, más claras abajo) también están muy de moda ahora, especialmente en redondas oversize."
            />
            <FaqItem
              question="¿Cuál es el MOQ y el tiempo de Lieferung?"
              answer="100 unidades por Stil y Farbe para Designs en stock. 300 unidades para OEM personalizado (tu logo, Farbees Pantone, Verpackung personalizado). La Produktion tarda 15-25 días para Bestellungs personalizados, 3-5 días para artículos en stock. También hacemos ODM completo — envíanos un boceto o foto de referencia y crearemos un nuevo Design ab cero. Un Kunde nos envió por email una foto vintage de Sonnenbrillen de los años 60 y recreamos la Fassung en 3 semanas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Lo Vintage Nunca Pasa de Moda</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Markes de moda, ópticas, boutiques vintage, vendedores de merch de festivales — las Fassungs
            redondas se venden en todas partes. Pide Muster, comprueba la Qualität, y luego hablamos de números.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Solicitar Angebot Gratis</Link>
            <Link href="/de/produkte" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-Farbes">Ver Todos los Produkte</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://eyeviewglasses.com/es" },
          { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://eyeviewglasses.com/de/produkte" },
          { "@type": "ListItem", "position": 3, "name": "Sonnenbrillen Redondas", "item": "https://eyeviewglasses.com/de/produkte/rund" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Las Brillen redondas quedan bien en caras redondas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Depende de la persona. Convencionalmente, se recomiendan formas angulares para caras redondas, pero mucha gente con caras redondas las usa por elección. Las redondas medianas y oversize funcionan en más formas de cara que las pequeñas." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la diferencia entre Fassungs redondas de metal y acetato?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las redondas de metal son más ligeras (15-22g), más finas y más minimalistas con almohadillas nasales ajustables. Las redondas de acetato son más atrevidas (25-35g), vienen en más Farbees y patrones, y tienen una sensación Premium y sólida." }
          },
          {
            "@type": "Question",
            "name": "¿Se pueden hacer Fassungs redondas con Gläser graduadas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — la forma redonda es la más fácil para Gläser graduadas debido a la geometría simétrica. Todas nuestras Fassungs redondas se envían listas para graduación con Gläser de demostración para visión simple, bifocal y progresiva." }
          },
          {
            "@type": "Question",
            "name": "¿Qué Farbees de Glas se venden mejor en Fassungs redondas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Los más vendidos: verde clásico G-15, gris, marrón/ámbar, espejo azul y tintes de Farbe (amarillo, rosa, naranja) para compradores de festivales. Las Gläser degradadas también son muy populares en redondas oversize." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es el MOQ y el tiempo de Lieferung?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 unidades por Stil para Designs en stock. 300 unidades para Bestellungs OEM personalizados. Produktion: 15-25 días personalizado, 3-5 días stock. Servicio de Design ODM completo también disponible." }
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
