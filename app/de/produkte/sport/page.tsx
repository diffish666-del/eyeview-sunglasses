import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sport-Sonnenbrillen Großhandel | Sportbrillen Hersteller - EyeView',
  description: 'Hersteller von Sport-Sonnenbrillen im Großhandel. Wraparound-Sportbrillen mit TR90-Fassungen, stoßfesten Gläsern und rutschfestem Design. OEM/ODM. MOQ 100 Stk.',
  keywords: 'Sport Sonnenbrillen Großhandel, Sportbrillen Hersteller, Wraparound Brillen, TR90 Sportbrillen, Sonnenbrillen Großhandel',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/sport',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sport',
      'de': 'https://eyeviewsunglasses.com/de/produkte/sport',
    },
  },
}

const sportCategories = [
  {
    name: 'Brillen de Ciclismo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 Stk.',
    description: 'Vas a 40 km/h en un descenso. Un insecto te golpea el ojo. Se acabó. Por eso todo ciclista serio necesita Brillen adecuadas — no unas Brillen de moda de una gasolinera. Nuestras Brillen de ciclismo envuelven la cara para bloquear viento, polvo e insectos ab todos los ángulos. El sistema de Gläser intercambiables permite cambiar entre Gläser transparentes para salidas al amanecer, amarillas para días nublados y tintes oscuros para el mediodía. ¿Y las almohadillas de goma antideslizante? Realmente se agarran más fuerte cuando sudas. Se acabó empujar las Brillen hacia arriba en plena subida.',
    features: ['Design aerodinámico envolvente', 'Sistema de 3 Gläser intercambiables', 'Almohadillas de goma activadas por sudor', 'Fassung ventilada antivaho'],
  },
  {
    name: 'Brillen de Running',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$9.50 - $14.00',
    moq: '100 Stk.',
    description: 'Aquí va lo importante sobre las Brillen de running — si las sientes en la cara, son las equivocadas. Nuestras Fassungs para correr pesan menos de 25 gramos. Eso es más leicht que una pila AA. Los maratonistas las llevan durante más de 4 horas sin siquiera notarlas. La Fassung flexibel TR90 absorbe el rebote constante al correr, y las Gläser anchas te dan visión periférica completa para detectar ese bache o ese perro suelto antes de que sea demasiado tarde. Hemos tenido dueños de clubes de running que han Bestellung más de 500 pares de una vez para equipos completos.',
    features: ['Menos de 25g — más ligeras que una pila', 'Almohadillas hidrofílicas antideslizantes', 'Visión periférica completa', 'Fassung flexibel que absorbe impactos'],
  },
  {
    name: 'Brillen de Pesca',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$11.00 - $16.00',
    moq: '100 Stk.',
    description: 'Imagina esto — estás en el lago a las 6 de la mañana, el sol rebota en el agua y no puedes ver tu línea. Todo pescador conoce ese brillo cegador. Nuestras Brillen de pesca lo eliminan por completo. Las Gläser polarisierts eliminan el reflejo de la superficie para que puedas ver dentro del agua — localizar los peces, leer la estructura, observar tu señuelo. Los tintes ámbar y cobre mejoran el contraste tanto en agua dulce como salada. Un guía de pesca en Florida nos dijo que estas Brillen "se pagaron solas en la primera salida." También ofrecemos opciones de Fassung flotante porque, seamos honestos, las Sonnenbrillen y los barcos no siempre se llevan bien.',
    features: ['Gläser polarisierts anti-reflejo', 'Tintes ámbar/cobre de Höhe contraste', 'Opción de Fassung flotante disponible', 'Scharniere beständigs al agua salada'],
  },
  {
    name: 'Brillen de Golf',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$10.50 - $15.50',
    moq: '100 Stk.',
    description: 'El golf es un juego de centímetros, y no puedes jugar centímetros si no ves la bola. Nuestras Brillen de golf usan tintes de Glas rosa y ámbar que hacen que una bola blanca destaque contra un fairway verde. ¿Seguir el vuelo de la bola contra un cielo brillante? Fácil. ¿Leer la caída en un green soleado? Mucho más claro. La Fassung es tan ligera que te olvidarás de que las llevas puestas en pleno swing — que es exactamente el objetivo. Suministramos a varias tiendas pro de resorts de golf en todo el sudeste asiático, y los comentarios son siempre los mismos: "Los jugadores realmente quieren comprarlas después de probárselas."',
    features: ['Gläser rosa/ámbar para seguir la bola', 'Ajuste ultraleicht para el swing', 'Protección lateral de sol en las Bügels', 'Probadas y aprobadas en tiendas pro'],
  },
  {
    name: 'Brillen de Esquí y Snowboard',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$12.00 - $17.00',
    moq: '100 Stk.',
    description: '¿Sabías que los niveles de UV aumentan un 10% por cada 1.000 metros de altitud? En la cima de una pista de esquí, tus ojos están recibiendo una paliza. La ceguera de nieve es real — y dolorosa. Nuestras Brillen de esquí usan Gläser oscuras de Categoría 3-4 que bloquean el 92-97% de la luz visible. El Design envolvente y ajustado mantiene el viento y la nieve fuera de tus ojos, mientras que los canales de ventilación antivaho evitan ese molesto empañamiento cuando respiras fuerte en un descenso de baches. Las puntas de las Bügels compatibles con casco significan cero puntos de presión bajo el casco. Una tienda de alquiler de esquí en Hokkaido nos pide 2.000 pares cada temporada.',
    features: ['Protección Cat 3-4 contra ceguera de nieve', 'Canales de ventilación antivaho', 'Ajuste cerrado contra el viento', 'Design compatible con casco'],
  },
  {
    name: 'Brillen de Béisbol',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 Stk.',
    description: 'Un jardinero mirando al sol en un fly ball — ese instante de ceguera puede costar el partido. Nuestras Brillen de béisbol están hechas exactamente para ese momento. Las Gläser polarisierts ámbar destacan una bola blanca contra el cielo azul como nada más. Y estas no son Fassungs frágiles — cumplen los estándares de impacto ASTM F803, lo que significa que pueden aguantar un línea directa a la cara. El Design envolvente sicher se mantiene fijo durante atrapadas en plancha y deslizamientos de cabeza. Hemos suministrado a equipos de Little League, programas universitarios y ligas recreativas en 12 países.',
    features: ['Protección de impacto ASTM F803', 'Polarisiert ámbar para seguir la bola', 'Ajuste envolvente antideslizante', 'Glas de policarbonato irrompible'],
  },
]

export default function SportPageDe() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Sonnenbrillen Deportivas</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sonnenbrillen Deportivas im Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñadas para atletas que realmente necesitan que sus Sonnenbrillen rindan — no solo que se vean bien.
            Gläser polarisierts TAC, Fassungs ultraligeras TR90 y Designs envolventes que se mantienen en su sitio
            cuando estás dando el máximo. Ab clubes de ciclismo hasta chárteres de pesca, suministramos las
            Brillen que trabajan tan duro como la gente que las lleva.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
            alt="Colección de Sonnenbrillen Deportivas - Brillen Polarisierts para Ciclismo Running Pesca"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why Sport Sunglasses Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Por Qué las Brillen Baratas No Sirven para el Sport</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Seamos directos: esas Brillen de $3 del mostrador de la caja se caerán de tu cara
              en cuanto empieces a sudar. Se empañarán cuando respires fuerte. Rebotarán
              con cada zancada. Y lo peor de todo — algunas ni siquiera bloquean los UV correctamente,
              lo que significa que son en realidad <em>más peligrosas</em> que no llevar nada. (Las
              Gläser oscuras sin UV-Schutz dilatan las pupilas, dejando entrar más radiación
              dañina. Nada bueno.)
            </p>
            <p>
              Las Brillen deportivas de verdad resuelven problemas que los atletas realmente tienen. ¿Deslumbramiento
              en carreteras mojadas durante una salida matutina? Las Gläser polarisierts TAC lo eliminan. ¿Fassungs que
              se rompen con un impacto? El nylon TR90 se dobla en vez de romperse — literalmente puedes torcerlas
              90 grados y vuelven a su forma original. ¿Brillen que se deslizan por una nariz sudada? Las almohadillas
              de goma hidrofílica se agarran <em>más fuerte</em> cuando están mojadas. Esto no es marketing. Es la diferencia
              entre un equipo que te ayuda a rendir y un equipo que se interpone en tu camino. La <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Organización Mundial de la Salud</a> recomienda
              Brillen con UV-Schutz para cualquiera que pase tiempo prolongado al aire libre — y los atletas están en lo más Höhe de esa lista.
            </p>
            <p>
              Llevamos más de 8 años fabricando Sonnenbrillen deportivas, enviando a minoristas outdoor,
              equipos Sports, cadenas de gimnasios y empresas promocionales en más de 50 países.
              Ya sea que necesites 100 pares para un equipo de ciclismo o 10.000 para un lanzamiento retail,
              te cubrimos — y también les ponemos tu logo.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Sonnenbrillen Deportivas im Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products with Unique Descriptions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Brillen Deportivas por Actividad</h2>
          <div className="space-y-12">
            {sportCategories.map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} im Großhandel - EyeView`}
                      className="w-full h-72 object-cover"
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
                  <Link href="/de/kontakt" className="btn-primary inline-block">
                    Angebot anfordern
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Technology */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">La Tecnología Detrás de la Resistencia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🔬 Fassungs TR90 — Dóblalas, No Se Rompen</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TR90 es un nylon termoplástico desarrollado originalmente en Suiza. Es la misma
                familia de Materiales usados en equipamiento Sport de alta gama. ¿Qué lo hace especial? Es
                un 35% más leicht que las Fassungs de plástico normales — la mayoría de nuestras Fassungs deportivas pesan
                entre 22-28 gramos. Puedes doblar una Fassung TR90 90 grados y vuelve a su forma original. Intenta
                eso con un par barato del mercado. También es hipoalergénico, así que nada de Markes rojas con picor
                después de una salida larga. Funciona perfectamente en condiciones de esquí bajo cero (-40°C) y no se
                deforma en un coche caliente (hasta 120°C).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>35% más leicht que el plástico estándar</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Soporta doblado de 90° — sin rotura</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Resiste de -40°C a 120°C</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hipoalergénico y libre de BPA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🛡️ Gläser Polarisierts TAC — 7 Capas de Impresionante</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestras Gläser TAC no son simplemente un trozo de plástico tintado. Son un sándwich de 7 capas:
                recubrimiento duro en el exterior para resistencia a rayaduras, capas de Material TAC para resistencia
                estructural, una película polarizante en el centro que elimina el 99% del deslumbramiento, y recubrimiento
                UV debajo que bloquea todo hasta 400nm. ¿El resultado? Te las pones y el mundo simplemente... se aclara.
                El deslumbramiento de la carretera desaparece. El reflejo del agua se esfuma. Los Farbees se ven más ricos.
                Es el tipo de diferencia que hace que la gente diga &quot;ya no puedo volver a las Gläser normales.&quot;
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Construcción polarisiert de 7 capas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% del deslumbramiento horizontal eliminado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>UV-Schutz400 completa</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Opción de policarbonato beständig a impactos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Lo Que las Hace Diferentes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🏃" title="Increíblemente Ligeras" description="Menos de 28g. Te olvidarás de que las llevas puestas — hasta que alguien te pregunte dónde las conseguiste." />
            <FeatureCard icon="🛡️" title="Beständigs al Impacto" description="Gläser de policarbonato que cumplen ANSI Z87.1. Una piedra no arruinará tu salida." />
            <FeatureCard icon="💧" title="Sin Vaho, Nunca" description="Canales ventilados mantienen el aire en movimiento. Sube una cuesta esprintando — las Gläser se mantienen claras." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Probado en laboratorio, certificado. Bloquea el 100% de UVA/UVB/UVC. No es solo una pegatina." />
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Especificaciones de un Vistazo</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Especificación</th>
                  <th className="p-4 text-left font-semibold">Línea Estándar</th>
                  <th className="p-4 text-left font-semibold">Línea Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Material de Fassung</td><td className="p-4 text-gray-600">PC (Policarbonato)</td><td className="p-4 text-gray-600">Nylon TR90</td></tr>
                <tr><td className="p-4 font-medium">Material de Glas</td><td className="p-4 text-gray-600">AC (Acrílico)</td><td className="p-4 text-gray-600">TAC Polarisiert</td></tr>
                <tr><td className="p-4 font-medium">Breite de Glas</td><td className="p-4 text-gray-600">65-68mm</td><td className="p-4 text-gray-600">65-72mm</td></tr>
                <tr><td className="p-4 font-medium">Breite de Steg</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">14-18mm</td></tr>
                <tr><td className="p-4 font-medium">Länge de Bügel</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">130-140mm</td></tr>
                <tr><td className="p-4 font-medium">Gewicht</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">22-28g</td></tr>
                <tr><td className="p-4 font-medium">UV-Schutz</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Polarización</td><td className="p-4 text-gray-600">Opcional</td><td className="p-4 text-gray-600">Estándar (TAC 1.1mm)</td></tr>
                <tr><td className="p-4 font-medium">Farbees de Glas</td><td className="p-4 text-gray-600">5 opciones</td><td className="p-4 text-gray-600">12+ opciones</td></tr>
                <tr><td className="p-4 font-medium">Almohadillas Nasales</td><td className="p-4 text-gray-600">Goma fija</td><td className="p-4 text-gray-600">Goma hidrofílica ajustable</td></tr>
                <tr><td className="p-4 font-medium">Bisagra</td><td className="p-4 text-gray-600">Barril estándar</td><td className="p-4 text-gray-600">Bisagra de muelle</td></tr>
                <tr><td className="p-4 font-medium">Zertifizierungen</td><td className="p-4 text-gray-600">CE, FDA</td><td className="p-4 text-gray-600">CE, FDA, ANSI Z87.1</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Das könnte Sie auch interessieren</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Brillen Polarisierts</h3>
              <p className="text-sm text-gray-600">Todos nuestros Stils polarizados en un solo lugar</p>
            </Link>
            <Link href="/de/produkte/ninos" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Brillen Deportivas para Kinder</h3>
              <p className="text-sm text-gray-600">Brillen seguras y beständigs para jóvenes atletas</p>
            </Link>
            <Link href="/de/produkte/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Brillen de Luz Azul</h3>
              <p className="text-sm text-gray-600">Para cuando el entrenamiento se traslada al interior</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas Que Nos Hacen Todo el Tiempo</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿Cuál es el Mindestbestellmenge? ¿Puedo empezar con poco?"
              answer="Sí — 100 unidades por Stil y Farbe es nuestro MOQ estándar. Si quieres tu propio logo y Farbees personalizados, sube a 300 unidades. Pero honestamente, la mayoría de los compradores primerizos empiezan con un Bestellung de Muster mixtas para probar el mercado. Solo dinos qué buscas y encontraremos la manera de hacerlo funcionar."
            />
            <FaqItem
              question="TR90 vs. policarbonato — ¿cuál debería elegir?"
              answer="Respuesta corta: TR90 si puedes permitírtelo. Es un 35% más leicht, mucho más flexibel (literalmente puedes doblarlo completamente y vuelve a su forma), y se siente Premium. El policarbonato está totalmente bien para líneas económicas — sigue siendo beständig a impactos y cumple su función. Pero si tus Kundes son atletas serios o te posicionas como Marke Premium, elige TR90. La diferencia de Preis suele ser solo $1-2 pro Paar."
            />
            <FaqItem
              question="¿Todas sus Brillen deportivas son polarisierts?"
              answer="La polarización está disponible en todos los modelos, pero no siempre viene incluida por defecto en la línea estándar — es opcional. En nuestra línea Premium, las Gläser polarisierts TAC vienen de serie. Ofrecemos más de 12 Farbees de Glas incluyendo gris, marrón, ámbar, amarillo (ideal para poca luz), espejo azul, espejo rojo y transparente. También hacemos Gläser fotocromáticas que se ajustan automáticamente a la luz solar. Son populares entre ciclistas que pedalean ab el amanecer hasta el mediodía."
            />
            <FaqItem
              question="¿Pueden poner nuestro logo?"
              answer="Por supuesto. Hacemos impresión de logo en Bügels (tampografía o grabado láser), grabado en Gläser, Farbees de Fassung personalizados con coincidencia Pantone, Verpackung personalizado — todo lo que necesites. Un Kunde nos envió un boceto en una servilleta de un Design de Fassung y lo convertimos en un prototipo 3D en dos semanas. Si puedes soñarlo, probablemente podemos hacerlo."
            />
            <FaqItem
              question="¿Qué Zertifizierungen incluyen?"
              answer="Cada par se envía con cumplimiento CE y FDA. Nuestra línea Premium también cumple ANSI Z87.1 — ese es el estándar de resistencia a impactos industriales, lo que significa que estas Gläser pueden recibir el golpe de una bola de acero a alta velocidad sin romperse. Proporcionamos informes de pruebas UV400 de laboratorios independientes. ¿Necesitas AS/NZS 1067 para el mercado australiano? También podemos hacerlo."
            />
            <FaqItem
              question="¿Qué tan rápido pueden enviar?"
              answer="Artículos en stock sin Individualisierung: 3-5 Werktage. Bestellungs personalizados con tu logo y Farbees: 15-25 días de Produktion, luego 5-7 días de flete aéreo a la mayoría de países. El flete marítimo es más barato pero tarda 20-35 días. Enviamos por DHL, FedEx, UPS — tú eliges. ¿Bestellungs urgentes? Habla con nosotros. Hemos logrado Lieferungs en 10 días cuando un Kunde tenía una fecha límite."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Empecemos con Tu Línea Deportiva</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Equipos Sports, tiendas outdoor, Markes fitness, empresas promocionales — hemos trabajado con todos.
            Sagen Sie uns qué necesitas y te enviaremos Muster para que veas la Qualität por ti mismo.
            Sin presión, sin compromiso en las Muster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Preiss para Equipos</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Sonnenbrillen Deportivas", "item": "https://eyeviewglasses.com/de/produkte/sport" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuál es el Mindestbestellmenge? ¿Puedo empezar con poco?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 unidades por Stil y Farbe es nuestro MOQ estándar. Bestellungs con logo personalizado empiezan en 300 unidades. La mayoría de compradores primerizos empiezan con un Bestellung de Muster mixtas para probar el mercado." }
          },
          {
            "@type": "Question",
            "name": "TR90 vs. policarbonato — ¿cuál debería elegir?",
            "acceptedAnswer": { "@type": "Answer", "text": "TR90 si puedes permitírtelo — es un 35% más leicht, mucho más flexibel y se siente Premium. El policarbonato está bien para líneas económicas. La diferencia de Preis suele ser solo $1-2 pro Paar." }
          },
          {
            "@type": "Question",
            "name": "¿Todas sus Brillen deportivas son polarisierts?",
            "acceptedAnswer": { "@type": "Answer", "text": "La polarización está disponible en todos los modelos. Es opcional en la línea estándar e incluida por defecto en la línea Premium. Ofrecemos más de 12 Farbees de Glas incluyendo opciones fotocromáticas." }
          },
          {
            "@type": "Question",
            "name": "¿Pueden poner nuestro logo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto — impresión de logo en Bügels, grabado en Gläser, Farbees de Fassung personalizados con coincidencia Pantone y Verpackung personalizado. También podemos crear Designs de Fassung completamente nuevos ab tu concepto." }
          },
          {
            "@type": "Question",
            "name": "¿Qué Zertifizierungen incluyen?",
            "acceptedAnswer": { "@type": "Answer", "text": "CE y FDA en cada par. La línea Premium también cumple ANSI Z87.1 para resistencia a impactos. Informes de pruebas UV400 incluidos. AS/NZS 1067 disponible bajo Bestellung." }
          },
          {
            "@type": "Question",
            "name": "¿Qué tan rápido pueden enviar?",
            "acceptedAnswer": { "@type": "Answer", "text": "Artículos en stock se envían en 3-5 Werktage. Bestellungs personalizados tardan 15-25 días de Produktion más 5-7 días de flete aéreo. Bestellungs urgentes posibles — hemos logrado Lieferungs en 10 días." }
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
