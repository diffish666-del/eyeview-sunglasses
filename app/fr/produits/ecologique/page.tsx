import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricant de Lunettes de Soleil Écologiques | Lunettes Durables en Gros - EyeView',
  description: 'Fabricant de lunettes de soleil durables et écologiques en gros. Plastique océanique recyclé, branches en bambou, montures bio-acétate. MOQ 200 pcs. Certifications vertes disponibles.',
  keywords: 'fabricant lunettes durables, lunettes écologiques en gros, lunettes recyclées, lunettes bambou, lunettes bio-acétate, usine lunettes vertes, lunettes plastique océan',
  openGraph: {
    title: 'Fabricant de Lunettes de Soleil Écologiques | Lunettes Durables au par Mayor - EyeView',
    description: 'Fabricant de lunettes durables. Plástico recyclé du océano, bambou, montures de bio-acétate. MOQ 200 pcs. Prixs directos de usine avec certifications voirdes.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/ecologique',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/ecologique',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/eco-friendly',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/ecologique',
    },
  },
}

const ecoFaqs = [
  {
    question: 'Qué matériaux durables proposez-vous para la fabrication de lunettes de soleil?',
    answer: 'Trabajamos avec cuatro matériaux écologiques principales maintenant même. Primero está el plástico recyclé du océano (rPET) — obnous avons plástico post-consumo recolectado en limpièces costeras dans le sudeste asiático et le procesamos en pellets inyectables. Segundo est el bambou, qui nous utilisons para las branches (los brazos de la monture). Tercero est el bio-acétate, específicamente Eastman Acetate Renew, qui reemplaza el 60% de la matria prima fósil avec contenido recyclé certificado mediante reciclaje molecular. Y cuarto est la alliage d'aluminium recyclé para componentes metálicos de montures. Chaque matériau tiene diferentes coûts, estética et argumentos medioambientales, así qui vous ayudamos a choisir el adecuado para la historia de votre marque et votre punto de prix.',
  },
  {
    question: 'Qué certifications pueden proporcionar para lunettes ecológicas?',
    answer: 'Esto depende de le qui votre marché requiera et qué declaraciones quieras hacer. Para las lunettes en sí, nous fournissons CE (EN ISO 12312-1), conformité FDA et pruebas UV400 — igual qui notres gammes norme. Para declaraciones de sostenibilidad específicamente, el bio-acétate de Eastman viene avec certification de cadena de custodia ISCC PLUS. Nuestros fournisseures de bambou tienen certification FSC. Para plástico recyclé du océano, nous pouvons proporcionar documentation de notres socios de recollection mostrando la fuente et cadena de custodia. Également nous avons ISO 14001 (gestión medioambiental) para las operaciones de notre usine. Si necesitas certifications específicas para votre marché — digamos, documentation B Corp ou cálculos de huella de carbono — nous pouvons trabajar avec auditores externos para conseguirlas. Toma unas 4-6 semaines extra.',
  },
  {
    question: 'Las lunettes ecológicas sont tan durables comme las normales?',
    answer: 'Honestamente? Depende du matériau, mais la respuesta corta est sí — aguantan perfectamente para uso normal. El bio-acétate rinde de forma idéntica au acétate tradicional parce qui la estructura química est la même. El plástico recyclé du océano (rPET) est bastante résistant — le inyectamos de la même manera qui el nylon virgen, et pasa toutes notres pruebas norme de caída et fatiga de charnière (2.000 ciclos de apertura-cierre). Las branches de bambou sont naturalmente fuertes et tienen un hermoso veteado, aunque pueden ser sensibles à la exposition prolongada au agua — aplicamos un revêtement protector de laca para manejar eso. El aluminio recyclé est metalúrgicamente idéntico au aluminio virgen une vez refundido, así qui cero diferencia en durabilidad. Lo único qui diré est qui el bio-acétate puede ser légèremente plus sensible a solventes a base de acetona, así qui incluimos instrucciones de cuidado para vos clients finales.',
  },
  {
    question: 'Quel estt el commande minimum para lunettes ecológicas?',
    answer: 'El MOQ est de 200 unidades par modelo para la mayoría de matériaux eco — légèremente mayor qui notre minimum norme de 100 unidades parce qui los matériaux durables requieren tiradas de production separadas para evitar contamination avec matériaux convencionales. Para branches de bambou específicamente, el MOQ est 300 unidades parce qui los blancs de bambou se procesan par lotes. Puedes mezclar couleures et options de lente dentro de esos minimums. Para bio-acétate, si quieres un couleur ou patrón personnalisé, el MOQ de la plancha de acétate de Eastman est típicamente 50kg (suficiente para aproximadamente 500-600 paires), así qui sugerimos empezar avec son biblioteca de couleures norme para commandes plus petits. Tenemos unos 15 couleures de bio-acétate en stock para commandes de inicio rápido.',
  },
  {
    question: 'Cuánto plus cuestan las lunettes ecológicas comparadas avec las normales?',
    answer: 'Menos de le qui la mayoría espera. El bio-acétate añade aproximadamente $1-2 par paire comparado avec acétate norme — así qui un paire qui normalmente cuesta $6-8 sale a $7-10 en bio-acétate. Las branches de bambou añaden aproximadamente $0.50-1.00 par paire voirsus branches de plástico norme. Las montures de plástico recyclé du océano (rPET) cuestan aproximadamente le même qui las de nylon virgen — a veces incluso menos, dependiendo des prixs du marché de resina. El aluminio recyclé est típicamente $0.50-1.00 plus par paire qui el aluminio virgen. La historia real está dans le lado retail: las lunettes durables tienen un surprix du 30-50% des consumidores. Un paire qui se vendería a $35 en matériaux norme puede venderse a $45-55 avec credenciales eco legítimas et la historia de marque correcta. Tus marges realmente meilleuran.',
  },
  {
    question: 'Puis-je combinar diferentes matériaux eco en un paire de lunettes?',
    answer: 'Absolutamente, et algunos des designs eco plus vendidos qui nous produisons hacen exactamente eso. La combination plus popular est une monture frontal de plástico recyclé du océano avec branches de bambou — vous da dos historias de sostenibilidad en un produit et el contraste visual entre el plástico suave et el veteado natural du bambou se ve fantástico. Autre buena combination est frente de bio-acétate avec acentos de aluminio recyclé dans les branches. Également hemos hecho branches de bambou en montures style aviador de aluminio recyclé. La única combination qui no funciona bien est montures frontales de bambou — el matériau no est le suficientemente estable dimensionalmente para el cuerpo principal de la monture où se asientan las verres. Estaremos encantados de expédierte échantillons de diferentes combinaciones de matériaux para qui puedas voirlas et sentirlas antes de comprometerte.',
  },
]

const products = [
  {
    name: 'Wayfarer Recyclé du Océano',
    description: 'Fabricado avec plástico post-consumo certificado du océano, recolectado des costas de Indonesia et Tailandia. Chaque paire usa aproximadamente 10 grammes de rPET recuperado — no est un número enorme, mais multiplícalo par unos cuantos miles de paires et se acumula. La monture inyectada se ve et se siente comme cualquier monture premium de nylon. Podemos igualar couleures Pantone, aunque los acabados plus populares sont bleu océano mat, coral et noir carbón. Viene avec une tarjeta explicativa sur la procedencia du plástico oceánico — a vos clients les encanta eso.',
    price: '$5.50 - $9.00',
    moq: '200 pcs',
    features: ['Plástico Recyclé du Océano', 'Protection UV400', 'Coincidencia de Couleur Pantone', 'Tarjeta Informativa Incluida'],
  },
  {
    name: 'Clásica avec Patillas de Bambou',
    description: 'Monture frontal de acétate norme ou rPET combinada avec branches de bambou Moso acabadas a mano. Chaque pieza de bambou se seca en horno, se moldea par CNC, luego se lija a mano et se lacra para un acabado suave. El veteado natural significa qui no hay dos paires exactamente iguales — le cual est realmente un punto de vente para marques de style artesanal. El bambou proviene de plantaciones certifichaques FSC dans la provincia de Zhejiang. El bambou crece jusqu'à taille de cosecha en 3-5 ans voirsus déchaques para la madera dura, haciéndolo uno des matériaux plus renovables du planeta.',
    price: '$6.00 - $10.00',
    moq: '300 pcs',
    features: ['Bambou FSC', 'Acabado a Mano', 'Veteado Único', 'Protegido avec Laca'],
  },
  {
    name: 'Bio-Acétate Premium',
    description: 'Eastman Acetate Renew est le real en lunettes durables maintenant même. Usa tecnología de reciclaje molecular para reemplazar el 60% du matériau fósil tradicional avec contenido recyclé certificado — et el acétate resultante est químicamente idéntico au acétate convencional. Mismos couleures, mêmes patrones, même acabado pulido a mano, même durabilidad. La diferencia está puramente dans la cadena de suministro, qui est exactamente el tipo de declaration voirificable qui mantiene a votre marque fuera de problemas de greenwashing. Nous proposons tous los couleures norme de Eastman plus coincidencia Pantone personnalisée.',
    price: '$7.00 - $11.00',
    moq: '200 pcs',
    features: ['Eastman Acetate Renew', 'Certificado ISCC PLUS', 'Pulido a Mano', '60% Contenido Recyclé'],
  },
  {
    name: 'Aviador de Aluminio Recyclé',
    description: 'Nuestra monture aviador clásica, rehecha avec alliage d'aluminium recyclé. El aluminio proviene de chatarra post-industriel — recortes de fabrication automotriz et aeroespacial qui de autre modo se infra-reciclarían. Una vez refundido et recolado, est metalúrgicamente idéntico à la aleation 6061-T6 virgen. Misma résistance, même poids (18-22g), mêmes hermosos acabados anodizados. Podemos grabar "aluminio recyclé" dans le interior du brazo de la branche para votre marketing. Combina bien avec verres polarisées para un paquete eco premium complet.',
    price: '$10.00 - $15.00',
    moq: '200 pcs',
    features: ['6061-T6 Recyclé', 'Acabado Anodizado', 'Ligero 18-22g', 'Fuente Post-Industriel'],
  },
  {
    name: 'Combo Eco Complet',
    description: 'Nuestra opción plus durable — monture frontal de plástico recyclé du océano combinada avec branches de bambou FSC. Dos historias eco en un produit. El contraste visual entre el plástico mat suave et el veteado natural du bambou se fotografía hermosamente para redes sociales et e-commerce. Incluimos un estuche de fibra de bambou avec votre marque et une etiqueta colgante de cartón recyclé avec votre mensaje de sostenibilidad. Este est el paire qui conquista au client Gen Z qui lee chaque etiqueta et voirifica chaque declaration. Varios de notres clients DTC reportan este style comme son plus vendido par ingresos.',
    price: '$8.00 - $12.00',
    moq: '300 pcs',
    features: ['Plástico Oceánico + Bambou', 'Estuche de Fibra de Bambou', 'Etiqueta Reciclada', 'Listo para Instagram'],
  },
  {
    name: 'Eco Explorer para Enfants',
    description: 'Lunettes durables para la próxima generation — literalmente. Monture de nylon bio-basado (derivado du aceite de ricino) avec charnières de muelle flexibles para edades de 4-12. Los padres qui achatn para enfants sont algunos des consumidores plus eco-conscientes qui hay, et están dispuestos a pagar un premium par produits sûrs et durables. Las montures sont libres de BPA, ftalatos e hipoalergénicas. Podemos hacer couleures divoirtidos — bleu océano, voirde bosque, naranja atardecer — avec emballage eco a juego. El MOQ est un poco plus alto parce qui las montures infantiles requieren herramientas separadas.',
    price: '$4.50 - $7.00',
    moq: '500 pcs',
    features: ['Nylon Bio-Basado', 'Libre de BPA/Ftalatos', 'Edades 4-12', 'Bisagras de Muelle'],
  },
]

export default function EcologicoPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Écologiques Durables',
        description: 'Lunettes de sol durables fabrichaques avec plástico recyclé du océano, bambou, bio-acétate et aluminio recyclé. Protection UV400, personnalisation OEM complète. Certifications voirdes disponibles.',
        minPrice: '4.50',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes Ecológicas', url: 'https://eyeviewsunglasses.com/fr/produits/ecologique' }
      ]} />
      <FAQPageSchema faqs={ecoFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes de Soleil Écologiques</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
              alt="Lunettes de Soleil Écologiques Durables au par Mayor - Bambou et Matériaux Recyclés"
              loading="lazy"
              className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricant de Lunettes de Soleil Écologiques
            </h1>
          </div>

          {/* Product Story / Ovoirview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Voy a ser directo — hace cinco ans, quand las marques me preguntaban sur &ldquo;lunettes durables,&rdquo; era escéptico. Pensaba qui era un truco de marketing qui se desvanecería en une temporada ou dos. Estaba equivocado. Complètemente equivocado. En 2024, aproximadamente el 35% des consultas de nouveaus clients mencionan específicamente la sostenibilidad comme un requisito. Non un nice-to-have — un requisito. El cambio ha sido dramático, et está siendo impulsado par une cosa: la demanda du consumidor, especialmente de achatdores Gen Z et millennials qui realmente voirifican de qué están hechas sus lunettes de soleil.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Así qui invoirtimos. Durante los últimos tres ans, hemos construido cadenas de suministro dedichaques a matériaux eco, obtenido la <Link href="/fr/certifications" className="text-primary-600 hovoir:underline">certification ISO 14001 de gestión medioambiental</Link> para notre usine, et desarrollado procesos de production para cuatro matériaux durables principales: plástico recyclé du océano (rPET), bambou certificado FSC, <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">Eastman Acetate Renew</a> (bio-acétate), et aluminio recyclé. Chaque uno tiene diferentes propiedades, diferentes coûts et diferentes historias — et honestamente, cuál est el correcto para ti depende enteramente de votre posicionamiento de marque et vos clients.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Ici va el caso de affaires en une frase: las <strong>lunettes de soleil durables</strong> típicamente cuestan $0.50-2.00 plus par paire de producir, mais tienen un surprix retail du 30-50%. Un wayfarer convencional qui se vende a $35 puede venderse a $45-55 avec credenciales eco legítimas. He visto a docenas de notres clients DTC hacer qui esta matmática funcione maravillosamente. Una marque en Ámsterdam cambió toda son gamme a bio-acétate en 2023 et vio son valor medio de commande subir un 28% — mêmes montures, mêmes verres, solo diferente matériau et une meilleur historia.
              </p>
              <p className="text-lg leading-relaxed">
                La palabra clave ahí est &ldquo;legítimo.&rdquo; El greenwashing destruirá une marque plus rápido qui un mal produit. Chaque matériau qui nous proposons viene avec documentation trazable — cadena de custodia ISCC PLUS para bio-acétate, certification FSC para bambou, registros de socios de recollection para plástico oceánico. Quand votre client escanea el código QR dans la etiqueta et ve de dónde vino realmente el matériau, eso construye el tipo de confianza qui el dinero no puede acheter. Déjame explicarte le qui nous proposons.
              </p>
            </div>
          </div>

          {/* Sustainable Matériaus Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Nuestros Matériaux Durables</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Cuatro matériaux, cuatro historias diferentes. Ici tienes une mirada honesta a le qui realmente est chaque uno, cuánto cuesta et para quién est meilleur.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">Plástico Recyclé du Océano (rPET)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nons asociamos avec organizaciones de recollection costera en Indonesia, Tailandia et Filipinas qui recogen residuos plásticos post-consumo de playas et aguas poco profundas. El PET recolectado se clasifica, limpia, tritura et reprocesa en pellets de grado inyección. Químicamente, est polietileno tereftalato — résistant, léger et estable aux UV. Lo inyectamos de la même manera qui manejamos el nylon virgen. El resultado se ve et se siente comme cualquier monture de plástico premium. Los couleures sont légèremente plus limitados qui el matériau virgen (los noirs profundos et couleures oscuros funcionan meilleur), mais nous pouvons igualar la mayoría de tonos Pantone. El coût est aproximadamente el même qui el nylon norme — a veces incluso menos, dependiendo des prixs du marché de resina virgen.
                </p>
                <div className="text-primary-600 font-bold">$5.50 - $9.00 / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🎋</div>
                <h3 className="text-xl font-bold mb-3">Patillas de Bambou</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bambou Moso (<em>Phyllostachys edulis</em>) de plantaciones certifichaques FSC dans la provincia de Zhejiang, China. El bambou alcanza la madurez de cosecha en 3-5 ans — comparado avec 20-60 ans para la madera dura — et se regenera depuis el même sistema de raíces sin necesidad de replantation. Chaque blanc de branche se seca en horno au 8-10% de humedad, se corta par CNC, se lija a mano en tres granulometrías et se acaba avec une laca de grado alimentario. El veteado natural significa qui chaque paire tiene un aspecto légèremente único. Las branches de bambou añaden aproximadamente $0.50-1.00 par paire sur las branches de plástico norme. Combinan maravillosamente avec montures frontales de rPET ou bio-acétate para un paquete eco complet. Una nota: el bambou no est adecuado para montures frontales (la pairete qui sostiene las verres) parce qui carece de la precisión dimensional necesaria para sostener las verres de forma sûre.
                </p>
                <div className="text-primary-600 font-bold">Añade $0.50 - $1.00 / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">♻️</div>
                <h3 className="text-xl font-bold mb-3">Bio-Acétate (Eastman Acetate Renew)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esta est la opción durable premium et la qui plus me entusiasma. El <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">acétate de celulosa</a> ha sido el matériau de monture de referencia durante déchaques — et el <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">Acetate Renew de Eastman</a> usa tecnología de reciclaje molecular para reemplazar el 60% du matériau fósil tradicional avec contenido recyclé certificado. Lo genial est qui el resultado est químicamente idéntico au acétate convencional. Misma dureza, même pulido, même viveza de couleur, même todo. La diferencia está puramente dans la cadena de suministro, qui est exactamente el tipo de declaration voirificable qui mantiene a votre marque fuera de problemas de greenwashing. Lleva certification de balance de masa ISCC PLUS, qui est el norme para declaraciones voirifichaques de contenido recyclé. Añade $1-2 par paire. Si votre marque está posicionada comme premium et vos clients leen las etiquetas, este est el matériau.
                </p>
                <div className="text-primary-600 font-bold">Añade $1.00 - $2.00 / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">Aluminio Recyclé</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para styles de monture metálica — especialmente <Link href="/fr/produits/aviateur" className="text-primary-600 hovoir:underline">aviadores</Link> — el aluminio recyclé est une meilleura de sostenibilidad directa. Obnous avons chatarra de aluminio post-industriel (recortes de fabrication automotriz et aeroespacial) et la refundimos en lingotes de aleation 6061-T6. Una vez recolado, el aluminio recyclé est metalúrgicamente idéntico au matériau virgen. Misma résistance, même poids, même capacidad de anodizado en cualquier couleur. El beneficio medioambiental est significativo: reciclar aluminio usa un 95% menos de energía qui producir aluminio virgen a partir de mineral de bauxita. Añade aproximadamente $0.50-1.00 par paire. La única limitation est la documentation de trazabilidad — mannous avons registros par lote vinculando chaque tirada de production à la fuente de chatarra, mais no est une historia tan elegante de cara au consumidor comme el plástico oceánico ou el bambou.
                </p>
                <div className="text-primary-600 font-bold">Añade $0.50 - $1.00 / paire</div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Écologiques au par Mayor" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Collection Ecológica</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 ovoirflow-hidden hovoir:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <span className="text-7xl group-hovoir:scale-110 transition-transform duration-300">🌿</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/fr/contact" className="btn-primary text-sm">Commander Devis</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Matériaux Eco de un Vistazo</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm ovoirflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Plástico Recyclé du Océano (rPET)', 'PET post-consumo inyectado de limpièces costeras. Mismo aspecto/tacto qui el nylon virgen.'],
                      ['Bambou (Moso)', 'Certificado FSC, secado en horno, cortado CNC, lijado a mano, recubierto avec laca. Solo para branches.'],
                      ['Bio-Acétate (Eastman Renew)', '60% contenido recyclé certificado mediante reciclaje molecular. Certificado ISCC PLUS. Químicamente idéntico au acétate norme.'],
                      ['Aluminio Recyclé', 'Chatarra post-industriel 6061-T6, refundida. 95% menos energía vs aluminio virgen. Rendimiento idéntico.'],
                      ['Matériau de Lente', 'Igual qui norme: Polycarbonate / TAC Polarisé / CR-39 — sin compromiso en óptica'],
                      ['Protection UV', 'UV400 — bloquea el 100% de UVA (315-380nm) et UVB (280-315nm)'],
                      ['Certifications Disponibles', 'CE · FDA · UV400 · ISO 9001 · ISO 14001 · ISCC PLUS (bio-acétate) · FSC (bambou)'],
                      ['Options de Emballage Eco', 'Estuches de fibra de bambou, cajas de cartón recyclé, bolsas de almidón de maíz, impresión avec tinta de soja'],
                      ['MOQ', '200 pcs (rPET, bio-acétate, aluminio recyclé) / 300 pcs (branche de bambou)'],
                      ['Surcoste vs Nonrme', 'rPET: $0 / Bambou: +$0.50-1.00 / Bio-acétate: +$1-2 / Aluminio recyclé: +$0.50-1.00'],
                      ['Tiempo de Échantillon', '5-7 jours ouvrables (matériaux eco pueden necesitar tiempo de abastecimiento)'],
                      ['Tiempo de Production', '18-25 jours norme / 12-15 jours urgente'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hovoir:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* The Business Case for Eco */}
          <section className="mb-20 bg-green-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">El Caso de Negocio para Ser Voirde</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              La sostenibilidad no est caridad — est affaires inteligente. Ici están los números.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📈 30-50% de Surprix Retail</h3>
                <p className="text-sm text-gray-600">Los consumidores consistentemente pagan plus par produits durables voirificados. Un wayfarer norme de $35 se convierte en un wayfarer eco de $45-55. Votre marge par paire realmente meilleura incluso avec el mayor coût de matériau.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎯 La Gen Z le Exige</h3>
                <p className="text-sm text-gray-600">El 73% des consumidores Gen Z están dispuestos a pagar plus par produits durables (First Insight, 2023). Si votre marché objetivo tiene menos de 35 ans, la sostenibilidad no est opcional — est requisito para captar son atención.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📰 Mina de Oro para PR et Marketing</h3>
                <p className="text-sm text-gray-600">Los produits eco generan cobertura mediática gratuita. Hemos visto clients apaireecer en Vogue, GQ et blogs de sostenibilidad puramente par la historia de son matériau. Intenta conseguir esa prensa avec une monture de acétate norme.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🔄 Mayor Compra Recurrente</h3>
                <p className="text-sm text-gray-600">Las marques durables ven un 20-30% plus de retención de clients. Quand alguien achat votre misión eco, vuelve par la siguiente collection. Se convierten en embajadores, no solo en clients.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏪 Preferencia de Compradores Retail</h3>
                <p className="text-sm text-gray-600">Grandes retailers (Nonrdstrom, REI, Whole Foods Market, boutiques independientes) buscan activamente marques de lunettes durables para tener en stock. Una gamme eco abre puertas qui los produits convencionales no pueden.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌍 Vientos Regulatorios a Favor</h3>
                <p className="text-sm text-gray-600">Las regulaciones de la UE sur plásticos de un solo uso et responsabilidad extendida du produitr se están endureciendo. Las marques qui cambian a matériaux durables maintenant van par delante en lugar de correr para cumplir después.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Options de Personnalisation Eco</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Ser voirde no significa ser genérico. Así est comme nous faisons qui vos lunettes eco sean distintivamente tuyas.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Grabado láser</strong> en branches de bambou — se ve increíble avec el veteado natural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Logo en relieve</strong> en montures de bio-acétate ou rPET — prensado, sin tinta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Impresión en esquina de lente</strong> — branding sutil qui no compromete el mensaje eco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Etiqueta colgante avec QR</strong> — enlace a votre página de historia de sostenibilidad</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Couleures et Acabados</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>rPET:</strong> Azul océano mat, coral, noir carbón, oliva — ou coincidencia Pantone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bio-acétate:</strong> Gama complète de couleures — carey, cristal, mármol, dégradé, couleures sólidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bambou:</strong> Natural, carbonizado (plus oscuro), ou teñido en tonos tierra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Aluminio recyclé:</strong> Cualquier couleur anodizado — mat ou brillant</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Emballage Eco</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Estuche rígido de fibra de bambou</strong> — biodegradable, avec votre logo en relieve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Caja de cartón recyclé</strong> — impresión avec tinta de soja, papel FSC, sin plástico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bolsa de algodón orgánico</strong> — sirve également comme pan de limpieza, certification GOTS disponible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bolsa de almidón de maíz</strong> — envoltorio interior compostable reemplaza el plástico norme</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Quién Compra Lunettes de Soleil Écologiques?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              El marché de lunettes durables ha explotado. Esto est para quién estamos produciendo maintenant même.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🌱 Marques DTC Durables</h3>
                <p className="text-gray-300 text-sm">El segmento de mayor crecimiento. Son marques nativas de Shopify construidas alrededor de une misión de sostenibilidad. Necesitan matériaux avec declaraciones eco voirificables, buena fotografía et une historia qui aguante el escrutinio. Bio-acétate et plástico oceánico sont sus favoritos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏄 Marques Outdoor et Surf</h3>
                <p className="text-gray-300 text-sm">Las marques du sector outdoor están bajo intensa presión para ser durables. Las lunettes de plástico oceánico encajan naturalmente — la historia du matériau conecta directamente avec el style de vida de son client. Varios de notres clients de marques de surf han pasado au 100% eco.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏨 Hoteles et Resorts Eco</h3>
                <p className="text-gray-300 text-sm">Marques de hospitalidad durable ofreciendo lunettes eco comme amenidades para huéspedes ou artículos de boutique de regalos. Montures avec branches de bambou avec el logo du resort grabado a láser sont las plus vendidas ici. Los huéspedes las guardan comme recuerdo.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🎁 Programas Corporativos ESG</h3>
                <p className="text-gray-300 text-sm">Entreprises cumpliendo objetivos ESG (Medioambiental, Social, Gobernanza) cambiando regalos corporativos a produits durables. Lunettes eco avec el logo de la entreprise sont un éxito en conferencias et eventos de equipo — mucho meilleur qui autre bolígrafo avec marque.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">👶 Marques de Lunettes Infantiles</h3>
                <p className="text-gray-300 text-sm">Los padres qui achatn para enfants sont hiper-conscientes sur los matériaux — tanto par sécurité comme par razones medioambientales. Las montures de nylon bio-basado et bambou cumplen ambos exigences. Este segmento crece plus du 40% an tras an para nosautres.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🛒 Marques Mainstream Siendo Voirdes</h3>
                <p className="text-gray-300 text-sm">Marques de lunettes establecidas añadiendo une sub-gamme eco. Ya tienen la distribution — solo necesitan un produit durable creíble. El bio-acétate est el cambio plus fácil parce qui encaja directamente en son proceso de production de acétate existente.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes sur Lunettes Ecológicas</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {ecoFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produits Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Wayfarer</h3>
                <p className="text-gray-600 text-sm">Nuestro wayfarer clásico está disponible en bio-acétate. Misma forma icónica, même acabado pulido a mano — maintenant avec 60% de contenido recyclé certificado.</p>
              </Link>
              <Link href="/fr/produits/aviateur" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Aviador</h3>
                <p className="text-gray-600 text-sm">Aviadores de metal disponibles en aluminio recyclé. Mismo tacto léger, mêmes acabados anodizados, avec un 95% menos de energía en production de matériau.</p>
              </Link>
              <Link href="/fr/certifications" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Nuestras Certifications</h3>
                <p className="text-gray-600 text-sm">CE, FDA, ISO 9001, ISO 14001, ISCC PLUS, FSC — consulta la lista complète de certifications et documentation de conformité qui nous fournissons.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Listo para Ser Durable?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos sur votre marque, votre client objetivo et vos metas de sostenibilidad. Te recomendaremos los matériaux eco adecuados et vous expédieremos échantillons en une semana. Sin compromiso, sin presión — solo consejos honestos de alguien qui ha ayudado a plus de 100 marques a hacer esta transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-white text-primary-600 hovoir:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-couleurs">
                Commander Devis
              </Link>
              <Link href="/fr/produits" className="border-2 border-white text-white hovoir:bg-white hovoir:text-primary-600 font-bold py-3 px-8 rounded-lg transition-couleurs">
                Voir Tous les Produits
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
