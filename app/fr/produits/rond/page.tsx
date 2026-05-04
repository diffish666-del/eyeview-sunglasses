import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Rondes en Gros | Fabricant de Montures Circulaires Vintage - EyeView',
  description: 'Fabricant de lunettes de soleil rondes en gros. Montures circulaires vintage en métal et acétate. Style rétro John Lennon, options petites et oversize. MOQ 100 pcs. OEM/ODM direct usine.',
  keywords: 'lunettes rondes en gros, fabricant lunettes circulaires, montures rondes vintage, lunettes rétro en gros, lunettes John Lennon, montures rondes métal, lunettes rondes acétate en gros',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/rond',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/round',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/rond',
    },
  },
}

const products = [
  {
    name: 'Redonda Clásica Dorada',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'La original. Alambre de oro fino, verres perfectamente circulares, plaquettes nasales de silicona ajustables. Esta est la monture qui John Lennon hizo icónica et qui todo amante de le vintage sigue eligiendo. Vendemos plus de estas qui de cualquier autre style redondo — et las hemos estado fabricando durante 8 ans seguidos sin un solo cambio de design. Parce qui no arreglas le qui no está roto.',
  },
  {
    name: 'Redonda Plateada',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'La même forma redonda clásica, tono plus fresco. El acabado en plata cepillada atrae au público minimalista — fans du design escandinavo, trabajadores tech, la gente de "menos est plus". Combina perfectamente avec armarios neutros. Uno de notres distributeures escandinavos solo tiene redondas plateadas et mueve plus de 3.000 paires par trimestre.',
  },
  {
    name: 'Redonda Vintage Negra',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.50 - $12.50',
    moq: '100 pcs',
    description: 'Acétate noir grueso avec un perfil contundente. Esta no est une monture delichaque de alambre — est une declaration. Piensa en arquitecto, piensa en profesor de arte, piensa en director creativo. La construcción sólida le da un poids premium dans la mano qui grita qualité. Popular entre boutiques de lunettes independientes quieren algo avec plus cuerpo qui el metal.',
  },
  {
    name: 'Redonda Acétate Carey',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Patrón carey cálido en acétate laminado. Los tonos marrones et ambre multitonales crean une profundidad qui las montures de un solo couleur simplemente no pueden igualar. Esta est la voirsión "smart casual" des lunettes redondas — funciona avec une camiseta, funciona avec un blazer. Consistentemente uno de notres top 5 en reposiciones en toutes las gammes de produits.',
  },
  {
    name: 'Redonda avec Voirres de Couleur',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pcs',
    description: 'Voirres roses. Voirres bleues. Voirres amarillas. Voirres voirdes. Esta est la monture de festival — Coachella, Glastonbury, Tomorrowland. La monture fina de metal doré avec verres de couleures vivos captura esa energía bohemia de espíritu libre. Suministramos a varios vendedores de merchandising de festivales de música qui las venden dans le lugar par 5-8 veces el coût grossiste. Los marges sont increíbles.',
  },
  {
    name: 'Redonda Ovoirsize',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    description: 'La hermana dramática. Voirres de 56-60mm qui cubren la mitad de votre cara et hacen une declaration depuis el autre lado de la habitation. Las redondas ovoirsize han explotado en redes sociales — los influencers aman las proporciones. Más cobertura solar qui las redondas norme également, así qui en realidad sont plus protectoras. Actualmente notre style redondo de mayor crecimiento, un 40% plus an tras an.',
  },
]

export default function RedondoPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes de Soleil Rondes</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Rondes au par Mayor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lennon las usó. Ozzy las usó. Harry Potter las usó. Y maintenant vos clients
            las quieren. Montures circulares vintage en metal, acétate et tous los tailles, depuis
            intelectual sutil jusqu'à declaration ovoirsize. Directo de usine, MOQ 100 unidades.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl ovoirflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Collection de Lunettes de Soleil Rondes au par Mayor - Montures Circulares Vintage"
            className="w-full h-96 object-covoir"
          />
        </div>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">La Monture Que Moldeó la Cultura</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              La monture redonda no empezó comme une elección de moda. A principios de 1900, era
              simplemente la forma plus fácil de fabricar — los círculos eran simples de pulir. Mais entonces
              pasó algo. John Lennon cogió un paire de redondas petites de alambre dans les ans 60
              et las convirtió dans le símbolo visual de toda une generation. Paz, amor y
              verres perfectamente circulares. De la noche à la mañana, la monture redonda pasó de &quot;funcional&quot; a
              &quot;revolucionaria.&quot;
            </p>
            <p>
              La lista de personas qui hicieron famosas las redondas se lee comme un salón de la fama cultural.
              Janis Joplin en Woodstock. Ozzy Osbourne dans le escenario. Gandhi liderando une nation.
              Steve Jobs lanzando el iPhone. Chaque uno eligió montures redondas — et chaque uno
              las hizo significar algo diferente. Rebeldía. Creatividad. Sabiduría. Simplicidad.
              Ese est el poder de esta forma: se adapta a quien la lleva.
            </p>
            <p>
              Avancemos jusqu'à maintenant. La Gen Z descubrió la moda vintage et se lanzó de lleno. Las lunettes
              de sol redondas sont un top-5 en ventes globales de nouveau, impulsadas par la cultura thrift, la
              moda de festivales et el lado estético de TikTok. La demanda est real et creciente — notres
              commandes de montures redondas han aumentado un 35% an tras an depuis 2022. Y avec la <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">advoirtencia de la OMS sur la exposition UV acumulativa</a>,
              las lunettes de moda qui realmente protegen vos ojos sont plus relevantes qui jamais.
              Si no tienes redondas en stock, estás dejando dinero sur la mesa.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Rondes au par Mayor" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Collection Redonda</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video ovoirflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} au par Mayor - EyeView`}
                    className="w-full h-full object-covoir group-hovoir:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protection UV400</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personnalisé disponible</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/fr/contact" className="btn-primary w-full block text-center">Commander Devis</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Pequeñas, Medianas u Ovoirsize? Importa Plus de le Que Crees</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            El taille de la lente cambia complètemente la personalidad de une monture redonda. Una redonda de 44mm
            susurra &quot;intelectual.&quot; Una redonda de 60mm grita &quot;mírame.&quot; Así est cómo choisir:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔍 Pequeña (42-48mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El taille auténtico &quot;Lennon&quot;. Pequeña et deliberada. Estas sont para personas que
                se preocupan par conseguir las proporciones vintage exactamente correctas. Non cubren
                mucha cara — ese est el punto. Se trata de la estética, no de la cobertura.
                Muy popular avec puristas vintage, achatdores de lunettes graduadas et la
                &quot;generation Harry Potter.&quot; Más vendidas en ópticas.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Meilleur para: caras petites a medianas</li>
                <li>• Vibe: intelectual, vintage auténtico</li>
                <li>• Marché top: ópticas, boutiques vintage</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">👓 Mediana (49-53mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La apuesta sûre. Las redondas medianas se adaptan à la mayor variedad de caras et atraen
                tanto a hombres comme a mujeres par igual. Ni demasiado vintage, ni demasiado trendy — justo le correcto.
                Si eres nouveau en tener montures redondas en stock et no conoces votre marché todavía,
                empieza ici. Estas tienen la tasa de vente plus alta et la tasa de devolution plus baja
                de cualquier taille redondo qui nous produisons.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Meilleur para: la mayoría de caras adultas</li>
                <li>• Vibe: equilibrado, univoirsalmente atractivo</li>
                <li>• Marché top: retail general, online</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔮 Ovoirsize (54-62mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La pieza declaration. Las redondas ovoirsize están par todo Instagram et TikTok.
                Proporciones grandes, máximo drama, mucha cobertura solar. Estas sont las
                montures qui generan las reacciones de &quot;OMG dónde las conseguiste?&quot;. Actualmente
                notre segmento de mayor crecimiento — un 40% plus an tras an. Si vos clients
                tienen menos de 35 ans, probablemente esto est le quieren.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Meilleur para: caras medianas a grandes</li>
                <li>• Vibe: atrevido, listo para redes sociales</li>
                <li>• Marché top: marques de moda, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Por Qué las Redondas Toujours Vuelven</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🎭" title="Poids Cultural" description="Plus de 60 ans de usuarios icónicos. Ninguna autre forma tiene tanta historia et significado." />
            <FeatureCard icon="👓" title="Geometría Favorecedora" description="Los círculos suavizan las caras angulares maravillosamente. Mandíbula cuadrada? Cara de diamante? Las redondas vous equilibran." />
            <FeatureCard icon="✨" title="Atractivo Unisex" description="Una des pocas formas qui se vende igual de bien a hombres et mujeres. Duplica votre marché au instante." />
          </div>
        </section>

        {/* Specs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Spécifications Técnicas</h2>
          <div className="max-w-4xl mx-auto ovoirflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Especification</th>
                  <th className="p-4 text-left font-semibold">Metal</th>
                  <th className="p-4 text-left font-semibold">Acétate</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Matériau</td><td className="p-4 text-gray-600">Acero inoxidable / Titane</td><td className="p-4 text-gray-600">Acétate style italiano</td></tr>
                <tr><td className="p-4 font-medium">Ancho de Lente</td><td className="p-4 text-gray-600">42-58mm</td><td className="p-4 text-gray-600">46-62mm</td></tr>
                <tr><td className="p-4 font-medium">Pont</td><td className="p-4 text-gray-600">18-22mm</td><td className="p-4 text-gray-600">18-24mm</td></tr>
                <tr><td className="p-4 font-medium">Largo de Patilla</td><td className="p-4 text-gray-600">135-145mm</td><td className="p-4 text-gray-600">140-148mm</td></tr>
                <tr><td className="p-4 font-medium">Poids</td><td className="p-4 text-gray-600">15-22g</td><td className="p-4 text-gray-600">25-35g</td></tr>
                <tr><td className="p-4 font-medium">Options de Lente</td><td className="p-4 text-gray-600">CR-39 / Cristal / TAC</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Almohadillas Nasales</td><td className="p-4 text-gray-600">Silicona ajustable</td><td className="p-4 text-gray-600">Pont keyhole integrado</td></tr>
                <tr><td className="p-4 font-medium">Couleures</td><td className="p-4 text-gray-600">12+ incluyendo tintes de couleur</td><td className="p-4 text-gray-600">10+ options</td></tr>
                <tr><td className="p-4 font-medium">Polarisé</td><td className="p-4 text-gray-600">TAC opcional</td><td className="p-4 text-gray-600">TAC opcional</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Styles Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/oeil-de-chat" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Lunettes Cat Eye</h3>
              <p className="text-sm text-gray-600">Autre icono vintage — combina bien en colecciones</p>
            </Link>
            <Link href="/fr/produits/polarise" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Redondas Polarisées</h3>
              <p className="text-sm text-gray-600">Añade TAC anti-reflejo a cualquier style redondo</p>
            </Link>
            <Link href="/fr/produits/lumiere-bleue" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Redondas Luz Azul</h3>
              <p className="text-sm text-gray-600">Montures vintage avec protection de pantalla</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions Fréquentes</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Las lunettes redondas quedan bien en caras redondas?"
              answer="Honestamente, depende. La sabiduría convencional dice 'no — círculos sur círculos hace todo plus redondo.' Y eso est cierto para algunas personas. Mais mucha gente avec cara redonda las usa igualmente parce qui les gusta el look. Nuestra recomendation: si estás surtiendo para retail general, lidera avec redondas medianas et ovoirsize (que funcionan en plus formas de cara). Si un client avec cara redonda pregunta, sugiere une forma angular comme notre cat eye ou wayfarer. Mais no los rechaces — las reglas de moda están para romperse."
            />
            <FaqItem
              question="Metal ou acétate — cuál est la diferencia realmente?"
              answer="Las redondas de metal sont plus légères (15-22g vs 25-35g), plus finas et de aspecto plus delicado. Tienen plaquettes nasales ajustables para qui se adapten a plus formas de cara. Las redondas de acétate sont plus atrevidas, plus pesadas de une forma 'premium', et vienen en muchos plus couleures et patrones — carey, mármol, tonos translúcidos. Ambas cumplen los normees de protection UV de la FDA. El metal dice 'intelectual minimalista.' El acétate dice 'creativo à la moda.' Ambas se venden bien, mais para clients diferentes."
            />
            <FaqItem
              question="Puis-je obtenir montures redondas avec verres graduadas?"
              answer="Por supuesto. La forma redonda est en realidad la plus fácil de equipaire avec verres graduadas parce qui el círculo simétrico distribuye la corrección óptica uniformemente. Enviamos toutes notres montures redondas listas para graduation avec verres de demostration. Funciona para visión simple, bifocal et progresiva. Las montures redondas graduadas sont un marché enorme — piensa en tous esos fans de Harry Potter qui realmente necesitan lunettes!"
            />
            <FaqItem
              question="Qué couleures de lente se venden meilleur en montures redondas?"
              answer="Los plus vendidos en orden: (1) Voirde clásico G-15 — el look vintage auténtico, (2) Gris — neutro, combina avec todo, (3) Marrón/ambre — tono plus cálido, gran contraste, (4) Miroir bleu — el público joven los adora, (5) Tintados amarillo/rose/naranja — achatdores de festivales et bohemios. Las verres degradadas (oscuras arriba, plus claras abajo) également están très de moda maintenant, especialmente en redondas ovoirsize."
            />
            <FaqItem
              question="Quel estt el MOQ et el tiempo de livraison?"
              answer="100 unidades par style et couleur para designs en stock. 300 unidades para OEM personnalisé (tu logo, couleures Pantone, emballage personnalisé). La production tarda 15-25 jours para commandes personnalisés, 3-5 jours para artículos en stock. Également nous faisons ODM complet — envíanos un boceto ou foto de referencia et crearemos un nouveau design depuis cero. Un client nous envió par email une foto vintage de lunettes de soleil des ans 60 et recreamos la monture en 3 semaines."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Lo Vintage Jamais Pasa de Moda</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Marques de moda, ópticas, boutiques vintage, vendedores de merch de festivales — las montures
            redondas se venden en toutes pairetes. Pide échantillons, comprueba la qualité, et luego hablamos de números.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Demander un Devis Gratuit</Link>
            <Link href="/fr/produits" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hovoir:bg-primary-50 transition-couleurs">Voir Tous les Produits</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://eyeviewglasses.com/es" },
          { "@type": "ListItem", "position": 2, "name": "Produits", "item": "https://eyeviewglasses.com/es/produits" },
          { "@type": "ListItem", "position": 3, "name": "Lunettes de Soleil Rondes", "item": "https://eyeviewglasses.com/es/produits/rond" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Las lunettes redondas quedan bien en caras redondas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Depende de la persona. Convencionalmente, se recomiendan formas angulares para caras redondas, mais mucha gente avec caras redondas las usa par elección. Las redondas medianas et ovoirsize funcionan en plus formas de cara qui las petites." }
          },
          {
            "@type": "Question",
            "name": "Quel estt la diferencia entre montures redondas de metal et acétate?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las redondas de metal sont plus légères (15-22g), plus finas et plus minimalistas avec plaquettes nasales ajustables. Las redondas de acétate sont plus atrevidas (25-35g), vienen en plus couleures et patrones, et tienen une sensation premium et sólida." }
          },
          {
            "@type": "Question",
            "name": "Se pueden hacer montures redondas avec verres graduadas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — la forma redonda est la plus fácil para verres graduadas debido à la geometría simétrica. Toutes notres montures redondas se envían listas para graduation avec verres de demostration para visión simple, bifocal et progresiva." }
          },
          {
            "@type": "Question",
            "name": "Qué couleures de lente se venden meilleur en montures redondas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Los plus vendidos: voirde clásico G-15, gris, marron/ambre, miroir bleu et tintes de couleur (amarillo, rose, naranja) para achatdores de festivales. Las verres degradadas également sont très populares en redondas ovoirsize." }
          },
          {
            "@type": "Question",
            "name": "Quel estt el MOQ et el tiempo de livraison?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 unidades par style para designs en stock. 300 unidades para commandes OEM personnalisés. Production: 15-25 jours personnalisé, 3-5 jours stock. Servicio de design ODM complet également disponible." }
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
