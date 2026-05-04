import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Sport en Gros | Fabricant de Lunettes Polarisées Sport - EyeView',
  description: 'Fabricant de lunettes de soleil sport en gros. Verres polarisés TAC, montures TR90, design enveloppant pour cyclisme, course, pêche, golf, ski et baseball. MOQ 100 pcs. OEM/ODM disponible.',
  keywords: 'lunettes sport en gros, lunettes sport polarisées, fabricant lunettes sport, lunettes cyclisme en gros, lunettes course, lunettes pêche en gros, montures sport TR90, lunettes enveloppantes OEM',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/sport',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sport',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/sport',
    },
  },
}

const sportCategories = [
  {
    name: 'Lunettes de Ciclismo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pcs',
    description: 'Vas a 40 km/h en un descenso. Un insecto vous golpea el ojo. Se acabó. Por eso todo ciclista serio necesita lunettes adecuadas — no unas lunettes de moda de une gasolinera. Nuestras lunettes de ciclismo envuelven la cara para bloquear viento, polvo e insectos depuis tous los ángulos. El sistema de verres intercambiables permite cambiar entre verres transpaireentes para salidas au amanecer, amarillas para jours nublados et tintes oscuros para el mediodía. Y las almohadillas de goma antideslizante? Realmente se agarran plus fuerte quand sudas. Se acabó empujar las lunettes hacia arriba en plena subida.',
    features: ['Design aerodinámico envolvente', 'Sistema de 3 verres intercambiables', 'Almohadillas de goma activadas par sudor', 'Monture ventilada antibuée'],
  },
  {
    name: 'Lunettes de Running',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$9.50 - $14.00',
    moq: '100 pcs',
    description: 'Ici va le importante sur las lunettes de running — si las sientes dans la cara, sont las equivochaques. Nuestras montures para correr pesan menos de 25 grammes. Eso est plus léger qui une pila AA. Los maratonistas las llevan durante plus de 4 heures sin siquiera notarlas. La monture flexible TR90 absorbe el rebote constante au correr, et las verres anchas vous dan visión periférica complète para detectar ese bache ou ese perro suelto antes de qui sea demasiado tarde. Hemos tenido propriétaires de clubes de running qui han commande plus de 500 paires de une vez para equipos complets.',
    features: ['Menos de 25g — plus légères qui une pila', 'Almohadillas hidrofílicas antideslizantes', 'Visión periférica complète', 'Monture flexible qui absorbe impacts'],
  },
  {
    name: 'Lunettes de Pesca',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$11.00 - $16.00',
    moq: '100 pcs',
    description: 'Imagina esto — estás dans le lago a las 6 de la mañana, el sol rebota dans le agua et no puedes voir votre gamme. Todo pescador conoce ese brillo cegador. Nuestras lunettes de pesca le eliminan par complet. Las verres polarisées eliminan el reflejo de la superficie para qui puedas voir dentro du agua — localizar los peces, leer la estructura, observar votre señuelo. Los tintes ambre et cobre meilleuran el contraste tanto en agua dulce comme salada. Un guía de pesca en Florida nous dijo qui estas lunettes "se pagaron solas dans la primera salida." Également nous proposons options de monture flotante parce que, seamos honestos, las lunettes de soleil et los barcos no toujours se llevan bien.',
    features: ['Voirres polarisées anti-reflejo', 'Tintes ambre/cobre de alto contraste', 'Opción de monture flotante disponible', 'Bisagras résistants au agua salada'],
  },
  {
    name: 'Lunettes de Golf',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$10.50 - $15.50',
    moq: '100 pcs',
    description: 'El golf est un juego de centímetros, et no puedes jugar centímetros si no ves la bola. Nuestras lunettes de golf usan tintes de lente rose et ambre qui hacen qui une bola blanca destaque contra un fairway voirde. Seguir el vuelo de la bola contra un cielo brillant? Fácil. Leer la caída en un green soleado? Mucho plus claro. La monture est tan légère qui vous olvidarás de qui las llevas puestas en pleno swing — qui est exactamente el objetivo. Suministramos a varias boutiques pro de resorts de golf en todo el sudeste asiático, et los comentarios sont toujours los mêmes: "Los jugadores realmente quieren acheterlas después de probárselas."',
    features: ['Voirres rose/ambre para seguir la bola', 'Ajuste ultraléger para el swing', 'Protection lateral de sol dans les branches', 'Probadas et aprobadas en boutiques pro'],
  },
  {
    name: 'Lunettes de Esquí et Snowboard',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$12.00 - $17.00',
    moq: '100 pcs',
    description: 'Sabías qui los niveles de UV aumentan un 10% par chaque 1.000 metros de altitud? En la cima de une pista de esquí, vos ojos están recibiendo une paliza. La ceguera de nieve est real — et dolorose. Nuestras lunettes de esquí usan verres oscuras de Catégorie 3-4 qui bloquean el 92-97% de la luz visible. El design envolvente et ajustado mantiene el viento et la nieve fuera de vos ojos, mientras qui los canales de ventilation antibuée evitan ese molesto empañamiento quand respiras fuerte en un descenso de baches. Las puntas des branches compatibles avec casco significan cero puntos de presión bajo el casco. Una boutique de alquiler de esquí en Hokkaido nous pide 2.000 paires chaque temporada.',
    features: ['Protection Cat 3-4 contra ceguera de nieve', 'Canales de ventilation antibuée', 'Ajuste cerrado contra el viento', 'Design compatible avec casco'],
  },
  {
    name: 'Lunettes de Béisbol',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pcs',
    description: 'Un jardinero mirando au sol en un fly ball — ese instante de ceguera puede costar el pairetido. Nuestras lunettes de béisbol están hechas exactamente para ese momento. Las verres polarisées ambre destacan une bola blanca contra el cielo bleu comme nada plus. Y estas no sont montures frágiles — cumplen los normees de impact ASTM F803, le qui significa qui pueden aguantar un gamme directa à la cara. El design envolvente sûr se mantiene fijo durante atrapadas en plancha et deslizamientos de cabeza. Hemos suministrado a equipos de Little League, programas univoirsitarios et ligas recreativas en 12 pays.',
    features: ['Protection de impact ASTM F803', 'Polarisé ambre para seguir la bola', 'Ajuste envolvente antideslizante', 'Lente de polycarbonate incassable'],
  },
]

export default function DeportivoPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes de Soleil Sport</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Sport au par Mayor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñadas para atletas qui realmente necesitan qui sus lunettes de soleil rindan — no solo qui se vean bien.
            Voirres polarisées TAC, montures ultralégères TR90 et designs envolventes qui se mantienen en son sitio
            quand estás dando el máximo. Depuis clubes de ciclismo jusqu'à chárteres de pesca, suministramos las
            lunettes qui trabajan tan duro comme la gente qui las lleva.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl ovoirflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
            alt="Collection de Lunettes de Soleil Sport - Lunettes Polarisées para Ciclismo Running Pesca"
            className="w-full h-96 object-covoir"
          />
        </div>

        {/* Why Sport Sunglasses Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Por Qué las Lunettes Baratas Non Sirven para el Deporte</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Seamos directos: esas lunettes de $3 du mostrador de la caja se caerán de votre cara
              en cuanto empieces a sudar. Se empañarán quand respires fuerte. Rebotarán
              avec chaque zanchaque. Y le peor de todo — algunas ni siquiera bloquean los UV correctamente,
              le qui significa qui sont en realidad <em>plus peligroses</em> qui no llevar nada. (Las
              verres oscuras sin protection UV dilatan las pupilas, dejando entrar plus radiation
              dañina. Nada bueno.)
            </p>
            <p>
              Las lunettes deportivas de voirdad resuelven problemas qui los atletas realmente tienen. Deslumbramiento
              en carreteras mojadas durante une salida matutina? Las verres polarisées TAC le eliminan. Montures que
              se rompen avec un impact? El nylon TR90 se dobla en vez de romperse — literalmente puedes torcerlas
              90 grados et vuelven a son forma original. Lunettes qui se deslizan par une nariz sudada? Las almohadillas
              de goma hidrofílica se agarran <em>plus fuerte</em> quand están mojadas. Esto no est marketing. Es la diferencia
              entre un equipo qui vous ayuda a rendir et un equipo qui se interpone en votre camino. La <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">Organization Mundial de la Salud</a> recomienda
              lunettes avec protection UV para cualquiera qui pase tiempo prolongado au aire libre — et los atletas están en le plus alto de esa lista.
            </p>
            <p>
              Llevamos plus de 8 ans fabricando lunettes de soleil deportivas, enviando a détaillants outdoor,
              equipos deportivos, cadenas de gimnasios et entreprises promocionales en plus de 50 pays.
              Ya sea qui necesites 100 paires para un equipo de ciclismo ou 10.000 para un lanzamiento retail,
              vous cubrimos — et également les ponemos votre logo.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Sport au par Mayor" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

        {/* Products with Unique Descriptions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Lunettes Deportivas par Actividad</h2>
          <div className="space-y-12">
            {sportCategories.map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-revoirse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl ovoirflow-hidden shadow-lg">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} au par Mayor - EyeView`}
                      className="w-full h-72 object-covoir"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-semibold text-primary-600">{product.price}</span>
                    <span className="text-sm text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/fr/contact" className="btn-primary inline-block">
                    Commander Devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Matériaus & Technology */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">La Tecnología Detrás de la Résistance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🔬 Montures TR90 — Dóblalas, Non Se Rompen</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TR90 est un nylon termoplástico desarrollado originalmente en Suiza. Es la même
                familia de matériaux usados en equipamiento deportivo de alta gama. Qué le hace especial? Es
                un 35% plus léger qui las montures de plástico normales — la mayoría de notres montures deportivas pesan
                entre 22-28 grammes. Puedes doblar une monture TR90 90 grados et vuelve a son forma original. Intenta
                eso avec un paire barato du marché. Également est hypoallergénique, así qui nada de marques rojas avec picor
                después de une salida larga. Funciona perfectamente en condiciones de esquí bajo cero (-40°C) et no se
                deforma en un coche caliente (jusqu'à 120°C).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>35% plus léger qui el plástico norme</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Soporta doblado de 90° — sin rotura</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Resiste de -40°C a 120°C</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hypoallergénique et libre de BPA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🛡️ Voirres Polarisées TAC — 7 Capas de Impresionante</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestras verres TAC no sont simplemente un trozo de plástico tintado. Son un sándwich de 7 capas:
                revêtement duro dans le exterior para résistance a rayaduras, capas de matériau TAC para résistance
                estructural, une película polarizante dans le centro qui elimina el 99% du éblouissement, et revêtement
                UV debajo qui bloquea todo jusqu'à 400nm. El resultado? Te las pones et el mundo simplemente... se aclara.
                El éblouissement de la carretera desapaireece. El reflejo du agua se esfuma. Los couleures se ven plus ricos.
                Es el tipo de diferencia qui hace qui la gente diga &quot;ya no puis-je volvoir a las verres normales.&quot;
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Construcción polarisée de 7 capas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% du éblouissement horizontal eliminado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protection UV400 complète</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Opción de polycarbonate résistant a impacts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Lo Que las Hace Diferentes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🏃" title="Increíblemente Ligeras" description="Menos de 28g. Te olvidarás de qui las llevas puestas — jusqu'à qui alguien vous pregunte dónde las conseguiste." />
            <FeatureCard icon="🛡️" title="Resistentes au Impact" description="Voirres de polycarbonate qui cumplen ANSI Z87.1. Una piedra no arruinará votre salida." />
            <FeatureCard icon="💧" title="Sin Vaho, Jamais" description="Canales ventilados mantienen el aire en movimiento. Sube une cuesta esprintando — las verres se mantienen claras." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Probado en laboratorio, certificado. Bloquea el 100% de UVA/UVB/UVC. Non est solo une pegatina." />
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Spécifications de un Vistazo</h2>
          <div className="max-w-4xl mx-auto ovoirflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Especification</th>
                  <th className="p-4 text-left font-semibold">Gamme Nonrme</th>
                  <th className="p-4 text-left font-semibold">Gamme Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Matériau de Monture</td><td className="p-4 text-gray-600">PC (Polycarbonate)</td><td className="p-4 text-gray-600">Nylon TR90</td></tr>
                <tr><td className="p-4 font-medium">Matériau de Lente</td><td className="p-4 text-gray-600">AC (Acrílico)</td><td className="p-4 text-gray-600">TAC Polarisé</td></tr>
                <tr><td className="p-4 font-medium">Ancho de Lente</td><td className="p-4 text-gray-600">65-68mm</td><td className="p-4 text-gray-600">65-72mm</td></tr>
                <tr><td className="p-4 font-medium">Ancho de Pont</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">14-18mm</td></tr>
                <tr><td className="p-4 font-medium">Largo de Patilla</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">130-140mm</td></tr>
                <tr><td className="p-4 font-medium">Poids</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">22-28g</td></tr>
                <tr><td className="p-4 font-medium">Protection UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Polarisation</td><td className="p-4 text-gray-600">Opcional</td><td className="p-4 text-gray-600">Nonrme (TAC 1.1mm)</td></tr>
                <tr><td className="p-4 font-medium">Couleures de Lente</td><td className="p-4 text-gray-600">5 options</td><td className="p-4 text-gray-600">12+ options</td></tr>
                <tr><td className="p-4 font-medium">Almohadillas Nasales</td><td className="p-4 text-gray-600">Goma fija</td><td className="p-4 text-gray-600">Goma hidrofílica ajustable</td></tr>
                <tr><td className="p-4 font-medium">Bisagra</td><td className="p-4 text-gray-600">Barril norme</td><td className="p-4 text-gray-600">Bisagra de muelle</td></tr>
                <tr><td className="p-4 font-medium">Certifications</td><td className="p-4 text-gray-600">CE, FDA</td><td className="p-4 text-gray-600">CE, FDA, ANSI Z87.1</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Également Te Puede Interesar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/polarise" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Lunettes Polarisées</h3>
              <p className="text-sm text-gray-600">Tous notres styles polarisés en un solo lugar</p>
            </Link>
            <Link href="/fr/produits/enfants" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Lunettes Deportivas para Enfants</h3>
              <p className="text-sm text-gray-600">Lunettes sûres et résistants para jóvenes atletas</p>
            </Link>
            <Link href="/fr/produits/lumiere-bleue" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Lunettes de Luz Azul</h3>
              <p className="text-sm text-gray-600">Para quand el entrenamiento se traslada au interior</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas Que Nons Hacen Todo el Tiempo</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Quel estt el commande minimum? Puis-je empezar avec poco?"
              answer="Oui — 100 unidades par style et couleur est notre MOQ norme. Si quieres votre propio logo et couleures personnalisés, sube a 300 unidades. Mais honestamente, la mayoría des achatdores primerizos empiezan avec un commande de échantillons mixtas para probar el marché. Solo dinos qué buscas et encontraremos la manera de hacerlo funcionar."
            />
            <FaqItem
              question="TR90 vs. polycarbonate — cuál debería choisir?"
              answer="Respuesta corta: TR90 si puedes permitírtelo. Es un 35% plus léger, mucho plus flexible (literalmente puedes doblarlo complètemente et vuelve a son forma), et se siente premium. El polycarbonate está totalmente bien para gammes económicas — sigue siendo résistant a impacts et cumple son función. Mais si vos clients sont atletas serios ou vous posicionas comme marque premium, elige TR90. La diferencia de prix suele ser solo $1-2 par paire."
            />
            <FaqItem
              question="Toutes sus lunettes deportivas sont polarisées?"
              answer="La polarisation está disponible en tous los modelos, mais no toujours viene incluida par defecto dans la gamme norme — est opcional. En notre gamme premium, las verres polarisées TAC vienen de serie. Nous proposons plus de 12 couleures de lente incluyendo gris, marron, ambre, amarillo (ideal para poca luz), miroir bleu, miroir rouge et transpaireente. Également nous faisons verres photochromiques qui se ajustan automáticamente à la luz solar. Son populares entre ciclistas qui pedalean depuis el amanecer jusqu'à el mediodía."
            />
            <FaqItem
              question="Pueden poner notre logo?"
              answer="Por supuesto. Hacemos impresión de logo en branches (tampografía ou grabado láser), grabado en verres, couleures de monture personnalisés avec coincidencia Pantone, emballage personnalisé — todo le qui necesites. Un client nous envió un boceto en une servilleta de un design de monture et le convoirtimos en un prototipo 3D en dos semaines. Si puedes soñarlo, probablemente nous pouvons hacerlo."
            />
            <FaqItem
              question="Qué certifications incluyen?"
              answer="Chaque paire se envía avec conformité CE et FDA. Nuestra gamme premium également cumple ANSI Z87.1 — ese est el norme de résistance a impacts industrieles, le qui significa qui estas verres pueden recibir el golpe de une bola de acero a alta velocidad sin romperse. Proporcionamos informes de pruebas UV400 de laboratorios independientes. Necesitas AS/NZS 1067 para el marché australiano? Également nous pouvons hacerlo."
            />
            <FaqItem
              question="Qué tan rápido pueden expédier?"
              answer="Artículos en stock sin personnalisation: 3-5 jours ouvrables. Commandes personnalisés avec votre logo et couleures: 15-25 jours de production, luego 5-7 jours de flete aéreo à la mayoría de pays. El flete marítimo est plus barato mais tarda 20-35 jours. Enviamos par DHL, FedEx, UPS — tú eliges. Commandes urgentes? Habla avec nosautres. Hemos logrado livraisons en 10 jours quand un client tenía une fecha límite."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Empecemos avec Votre Gamme Deportiva</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Equipos deportivos, boutiques outdoor, marques fitness, entreprises promocionales — hemos trabajado avec tous.
            Cuéntanos qué necesitas et vous expédieremos échantillons para qui veas la qualité par ti même.
            Sin presión, sin compromiso dans les échantillons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Prixs para Equipos</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes de Soleil Sport", "item": "https://eyeviewglasses.com/es/produits/sport" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel estt el commande minimum? Puis-je empezar avec poco?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 unidades par style et couleur est notre MOQ norme. Commandes avec logo personnalisé empiezan en 300 unidades. La mayoría de achatdores primerizos empiezan avec un commande de échantillons mixtas para probar el marché." }
          },
          {
            "@type": "Question",
            "name": "TR90 vs. polycarbonate — cuál debería choisir?",
            "acceptedAnswer": { "@type": "Answer", "text": "TR90 si puedes permitírtelo — est un 35% plus léger, mucho plus flexible et se siente premium. El polycarbonate está bien para gammes económicas. La diferencia de prix suele ser solo $1-2 par paire." }
          },
          {
            "@type": "Question",
            "name": "Toutes sus lunettes deportivas sont polarisées?",
            "acceptedAnswer": { "@type": "Answer", "text": "La polarisation está disponible en tous los modelos. Es opcional dans la gamme norme e incluida par defecto dans la gamme premium. Nous proposons plus de 12 couleures de lente incluyendo options photochromiques." }
          },
          {
            "@type": "Question",
            "name": "Pueden poner notre logo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto — impresión de logo en branches, grabado en verres, couleures de monture personnalisés avec coincidencia Pantone et emballage personnalisé. Également nous pouvons crear designs de monture complètemente nouveaus depuis votre concepto." }
          },
          {
            "@type": "Question",
            "name": "Qué certifications incluyen?",
            "acceptedAnswer": { "@type": "Answer", "text": "CE et FDA en chaque paire. La gamme premium également cumple ANSI Z87.1 para résistance a impacts. Informes de pruebas UV400 incluss. AS/NZS 1067 disponible bajo commande." }
          },
          {
            "@type": "Question",
            "name": "Qué tan rápido pueden expédier?",
            "acceptedAnswer": { "@type": "Answer", "text": "Artículos en stock se envían en 3-5 jours ouvrables. Commandes personnalisés tardan 15-25 jours de production plus 5-7 jours de flete aéreo. Commandes urgentes posibles — hemos logrado livraisons en 10 jours." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
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
