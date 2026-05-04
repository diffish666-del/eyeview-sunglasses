import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos de Sol Esportivos al por Mayor | Fabricante de Óculos Polarizados - EyeView',
  description: 'Fabricante de óculos de sol esportivos no atacado. Lentes polarizados TAC, armações TR90, design envolvente para ciclismo, running, pesca, golf, esquí y béisbol. MOQ 100 pçs. OEM/ODM disponível.',
  keywords: 'óculos de sol esportivos no atacado, óculos esportivos polarizados, fabricante óculos esportivos, óculos ciclismo no atacado, óculos running, óculos pesca mayorista, armações esportivos TR90, óculos envolventes OEM',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/esportivo',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sport',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/esportivo',
    },
  },
}

const sportCategories = [
  {
    name: 'Óculos de Ciclismo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pçs',
    description: 'Vas a 40 km/h en un descenso. Un insecto te golpea el ojo. Se acabó. Por eso todo ciclista serio necesita óculos adecuadas — no unas óculos de moda de una gasolinera. Nossas óculos de ciclismo envuelven la cara para bloquear viento, polvo e insectos a partir de todos los ángulos. El sistema de lentes intercambiables permite cambiar entre lentes transparentes para salidas al amanecer, amarillas para dias nublados y tintes oscuros para el mediodía. ¿Y las almofadas de goma antideslizante? Realmente se agarran más fuerte cuando sudas. Se acabó empujar las óculos hacia arriba en plena subida.',
    features: ['Design aerodinámico envolvente', 'Sistema de 3 lentes intercambiables', 'Almofadas de goma activadas por sudor', 'Armação ventilada antivaho'],
  },
  {
    name: 'Óculos de Running',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$9.50 - $14.00',
    moq: '100 pçs',
    description: 'Aquí va lo importante sobre las óculos de running — si las sientes en la cara, son las equivocadas. Nossas armações para correr pesan menos de 25 gramos. Eso es más ligero que una pila AA. Los maratonistas las llevan durante mais de 4 horas sin siquiera notarlas. La armação flexible TR90 absorbe el rebote constante al correr, y las lentes anchas te dan visión periférica completa para detectar ese bache o ese perro suelto antes de que sea demasiado tarde. Hemos tenido dueños de clubes de running que han pedido mais de 500 pares de una vez para equipos completos.',
    features: ['Menos de 25g — más ligeras que una pila', 'Almofadas hidrofílicas antideslizantes', 'Visión periférica completa', 'Armação flexible que absorbe impactos'],
  },
  {
    name: 'Óculos de Pesca',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$11.00 - $16.00',
    moq: '100 pçs',
    description: 'Imagina esto — estás en el lago a las 6 de la mañana, el sol rebota en el agua y no puedes ver tu línea. Todo pescador conoce ese brillo cegador. Nossas óculos de pesca lo eliminan por completo. Las lentes polarizados eliminan el reflejo de la superficie para que puedas ver dentro del agua — localizar los peces, leer la estructura, observar tu señuelo. Los tintes ámbar y cobre mejoran el contraste tanto en agua dulce como salada. Un guía de pesca en Florida nos dijo que estas óculos "se pagaron solas en la primera salida." Também ofrecemos opciones de armação flotante porque, seamos honestos, las óculos de sol y los barcos no siempre se llevan bien.',
    features: ['Lentes polarizados anti-reflejo', 'Tintes ámbar/cobre de alto contraste', 'Opción de armação flotante disponível', 'Dobradiças resistentes al agua salada'],
  },
  {
    name: 'Óculos de Golf',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$10.50 - $15.50',
    moq: '100 pçs',
    description: 'El golf es un juego de centímetros, y no puedes jugar centímetros si no ves la bola. Nossas óculos de golf usan tintes de lente rosa y ámbar que hacen que una bola blanca destaque contra un fairway verde. ¿Seguir el vuelo de la bola contra un cielo brillante? Fácil. ¿Leer la caída en un green soleado? Mucho más claro. La armação es tan ligera que te olvidarás de que las llevas puestas en pleno swing — que es exactamente el objetivo. Suministramos a varias tiendas pro de resorts de golf en todo el sudeste asiático, y los comentarios son siempre los mismos: "Los jugadores realmente quieren comprarlas después de probárselas."',
    features: ['Lentes rosa/ámbar para seguir la bola', 'Ajuste ultraligero para el swing', 'Proteção lateral de sol en las hastes', 'Probadas y aprobadas en tiendas pro'],
  },
  {
    name: 'Óculos de Esquí y Snowboard',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$12.00 - $17.00',
    moq: '100 pçs',
    description: '¿Sabías que los niveles de UV aumentan un 10% por cada 1.000 metros de altitud? En la cima de una pista de esquí, tus ojos están recibiendo una paliza. La ceguera de nieve es real — y dolorosa. Nossas óculos de esquí usan lentes oscuras de Categoría 3-4 que bloquean el 92-97% de la luz visible. El design envolvente y ajustado mantiene el viento y la nieve fuera de tus ojos, mientras que los canales de ventilación antivaho evitan ese molesto empañamiento cuando respiras fuerte en un descenso de baches. Las puntas de las hastes compatibles con casco significan cero puntos de presión bajo el casco. Una tienda de alquiler de esquí en Hokkaido nos pide 2.000 pares cada temporada.',
    features: ['Proteção Cat 3-4 contra ceguera de nieve', 'Canales de ventilación antivaho', 'Ajuste cerrado contra el viento', 'Design compatible con casco'],
  },
  {
    name: 'Óculos de Béisbol',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pçs',
    description: 'Un jardinero mirando al sol en un fly ball — ese instante de ceguera puede costar el partido. Nossas óculos de béisbol están hechas exactamente para ese momento. Las lentes polarizados ámbar destacan una bola blanca contra el cielo azul como nada más. Y estas no son armações frágiles — cumplen los estándares de impacto ASTM F803, lo que significa que pueden aguantar un línea directa a la cara. El design envolvente seguro se mantiene fijo durante atrapadas en plancha y deslizamientos de cabeza. Hemos suministrado a equipos de Little League, programas universitarios y ligas recreativas en 12 países.',
    features: ['Proteção de impacto ASTM F803', 'Polarizado ámbar para seguir la bola', 'Ajuste envolvente antideslizante', 'Lente de policarbonato irrompible'],
  },
]

export default function EsportivoPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Sol Esportivos</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos de Sol Esportivos al por Mayor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñadas para atletas que realmente necesitan que sus óculos de sol rindan — no solo que se vean bien.
            Lentes polarizados TAC, armações ultraligeras TR90 y designs envolventes que se mantienen en su sitio
            cuando estás dando el máximo. A partir de clubes de ciclismo hasta chárteres de pesca, suministramos las
            óculos que trabajan tan duro como la gente que las lleva.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
            alt="Coleção de Óculos de Sol Esportivos - Óculos Polarizados para Ciclismo Running Pesca"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why Sport Sunglasses Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Por Qué las Óculos Baratas No Sirven para el Deporte</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Seamos directos: esas óculos de $3 del mostrador de la caja se caerán de tu cara
              en cuanto empieces a sudar. Se empañarán cuando respires fuerte. Rebotarán
              con cada zancada. Y lo peor de todo — algunas ni siquiera bloquean los UV correctamente,
              lo que significa que son en realidad <em>más peligrosas</em> que no llevar nada. (Las
              lentes oscuras sin proteção UV dilatan las pupilas, dejando entrar más radiación
              dañina. Nada bueno.)
            </p>
            <p>
              Las óculos esportivos de verdad resuelven problemas que los atletas realmente tienen. ¿Deslumbramiento
              en carreteras mojadas durante una salida matutina? Las lentes polarizados TAC lo eliminan. ¿Armações que
              se rompen con un impacto? El nylon TR90 se dobla en vez de romperse — literalmente puedes torcerlas
              90 grados y vuelven a su forma original. ¿Óculos que se deslizan por una nariz sudada? Las almofadas
              de goma hidrofílica se agarran <em>más fuerte</em> cuando están mojadas. Esto no es marketing. Es la diferencia
              entre un equipo que te ayuda a rendir y un equipo que se interpone en tu camino. La <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Organización Mundial de la Salud</a> recomienda
              óculos con proteção UV para cualquiera que pase tiempo prolongado al aire libre — y los atletas están en lo más alto de esa lista.
            </p>
            <p>
              Llevamos mais de 8 anos fabricando óculos de sol esportivos, enviando a minoristas outdoor,
              equipos esportivos, cadenas de gimnasios y empresas promocionales en mais de 50 países.
              Ya sea que necesites 100 pares para un equipo de ciclismo o 10.000 para un lanzamiento retail,
              te cubrimos — y também les ponemos tu logo.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Óculos de Sol Esportivos al por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products with Unique Descriptions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Óculos Esportivos por Actividad</h2>
          <div className="space-y-12">
            {sportCategories.map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} al por Mayor - EyeView`}
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
                  <Link href="/pt/contato" className="btn-primary inline-block">
                    Solicitar Orçamento
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
              <h3 className="text-xl font-semibold mb-4">🔬 Armações TR90 — Dóblalas, No Se Rompen</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TR90 es un nylon termoplástico desarrollado originalmente en Suiza. Es la misma
                familia de materiales usados en equipamiento esportivo de alta gama. ¿Qué lo hace especial? Es
                un 35% más ligero que las armações de plástico normales — la mayoría de nossas armações esportivos pesan
                entre 22-28 gramos. Puedes doblar una armação TR90 90 grados y vuelve a su forma original. Intenta
                eso con un par barato del mercado. Também es hipoalergénico, así que nada de marcas rojas con picor
                después de una salida larga. Funciona perfectamente en condiciones de esquí bajo cero (-40°C) y no se
                deforma en un coche caliente (hasta 120°C).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>35% más ligero que el plástico estándar</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Soporta doblado de 90° — sin rotura</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Resiste de -40°C a 120°C</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hipoalergénico y libre de BPA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🛡️ Lentes Polarizados TAC — 7 Capas de Impresionante</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossas lentes TAC no son simplemente un trozo de plástico tintado. Son un sándwich de 7 capas:
                recubrimiento duro en el exterior para resistencia a rayaduras, capas de material TAC para resistencia
                estructural, una película polarizante en el centro que elimina el 99% del deslumbramiento, y recubrimiento
                UV debajo que bloquea todo hasta 400nm. ¿El resultado? Te las pones y el mundo simplemente... se aclara.
                El deslumbramiento de la carretera desaparece. El reflejo del agua se esfuma. Los colores se ven más ricos.
                Es el tipo de diferencia que hace que la gente diga &quot;ya no puedo volver a las lentes normales.&quot;
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Construcción polarizada de 7 capas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% del deslumbramiento horizontal eliminado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Proteção UV400 completa</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Opción de policarbonato resistente a impactos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Lo Que las Hace Diferentes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🏃" title="Increíblemente Ligeras" description="Menos de 28g. Te olvidarás de que las llevas puestas — hasta que alguien te pregunte dónde las conseguiste." />
            <FeatureCard icon="🛡️" title="Resistentes al Impacto" description="Lentes de policarbonato que cumplen ANSI Z87.1. Una piedra no arruinará tu salida." />
            <FeatureCard icon="💧" title="Sin Vaho, Nunca" description="Canales ventilados mantienen el aire en movimiento. Sube una cuesta esprintando — las lentes se mantienen claras." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Probado en laboratorio, certificado. Bloquea el 100% de UVA/UVB/UVC. No es solo una pegatina." />
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Especificações de un Vistazo</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Especificação</th>
                  <th className="p-4 text-left font-semibold">Línea Estándar</th>
                  <th className="p-4 text-left font-semibold">Línea Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Material de Armação</td><td className="p-4 text-gray-600">PC (Policarbonato)</td><td className="p-4 text-gray-600">Nylon TR90</td></tr>
                <tr><td className="p-4 font-medium">Material de Lente</td><td className="p-4 text-gray-600">AC (Acrílico)</td><td className="p-4 text-gray-600">TAC Polarizado</td></tr>
                <tr><td className="p-4 font-medium">Ancho de Lente</td><td className="p-4 text-gray-600">65-68mm</td><td className="p-4 text-gray-600">65-72mm</td></tr>
                <tr><td className="p-4 font-medium">Ancho de Ponte</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">14-18mm</td></tr>
                <tr><td className="p-4 font-medium">Largo de Haste</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">130-140mm</td></tr>
                <tr><td className="p-4 font-medium">Peso</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">22-28g</td></tr>
                <tr><td className="p-4 font-medium">Proteção UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Polarización</td><td className="p-4 text-gray-600">Opcional</td><td className="p-4 text-gray-600">Estándar (TAC 1.1mm)</td></tr>
                <tr><td className="p-4 font-medium">Colores de Lente</td><td className="p-4 text-gray-600">5 opciones</td><td className="p-4 text-gray-600">12+ opciones</td></tr>
                <tr><td className="p-4 font-medium">Almofadas Nasales</td><td className="p-4 text-gray-600">Goma fija</td><td className="p-4 text-gray-600">Goma hidrofílica ajustable</td></tr>
                <tr><td className="p-4 font-medium">Dobradiça</td><td className="p-4 text-gray-600">Barril estándar</td><td className="p-4 text-gray-600">Dobradiça de muelle</td></tr>
                <tr><td className="p-4 font-medium">Certificações</td><td className="p-4 text-gray-600">CE, FDA</td><td className="p-4 text-gray-600">CE, FDA, ANSI Z87.1</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Também Te Puede Interesar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Óculos Polarizados</h3>
              <p className="text-sm text-gray-600">Todos nossos estilos polarizados en un solo lugar</p>
            </Link>
            <Link href="/pt/produtos/infantil" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Óculos Esportivos para Crianças</h3>
              <p className="text-sm text-gray-600">Óculos seguras y resistentes para jóvenes atletas</p>
            </Link>
            <Link href="/pt/produtos/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Óculos de Luz Azul</h3>
              <p className="text-sm text-gray-600">Para cuando el entrenamiento se traslada al interior</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas Que Nos Hacen Todo el Tiempo</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿Cuál es el pedido mínimo? ¿Puedo empezar con poco?"
              answer="Sí — 100 unidades por estilo y color es nosso MOQ estándar. Si quieres tu propio logo y colores personalizados, sube a 300 unidades. Pero honestamente, la mayoría de los compradores primerizos empiezan con un pedido de amostras mixtas para probar el mercado. Solo dinos qué buscas y encontraremos la manera de hacerlo funcionar."
            />
            <FaqItem
              question="TR90 vs. policarbonato — ¿cuál debería elegir?"
              answer="Respuesta corta: TR90 si puedes permitírtelo. Es un 35% más ligero, mucho más flexible (literalmente puedes doblarlo completamente y vuelve a su forma), y se siente premium. El policarbonato está totalmente bien para líneas económicas — sigue siendo resistente a impactos y cumple su función. Pero si tus clientes son atletas serios o te posicionas como marca premium, elige TR90. La diferencia de preço suele ser solo $1-2 por par."
            />
            <FaqItem
              question="¿Todas sus óculos esportivos son polarizados?"
              answer="La polarización está disponível en todos los modelos, pero no siempre viene incluida por defecto en la línea estándar — es opcional. En nossa línea premium, las lentes polarizados TAC vienen de serie. Ofrecemos mais de 12 colores de lente incluindo gris, marrón, ámbar, amarillo (ideal para poca luz), espejo azul, espejo rojo y transparente. Também hacemos lentes fotocromáticas que se ajustan automáticamente a la luz solar. Son populares entre ciclistas que pedalean a partir de el amanecer hasta el mediodía."
            />
            <FaqItem
              question="¿Pueden poner nosso logo?"
              answer="Por supuesto. Hacemos impresión de logo en hastes (tampografía o grabado láser), grabado en lentes, colores de armação personalizados con coincidencia Pantone, embalagem personalizado — todo lo que necesites. Un cliente nos envió un boceto en una servilleta de un design de armação y lo convertimos en un prototipo 3D en dos semanas. Si puedes soñarlo, probablemente podemos hacerlo."
            />
            <FaqItem
              question="¿Qué certificacoes incluyen?"
              answer="Cada par se envía con conformidade CE y FDA. Nossa línea premium também cumple ANSI Z87.1 — ese es el estándar de resistencia a impactos industriales, lo que significa que estas lentes pueden recibir el golpe de una bola de acero a alta velocidad sin romperse. Proporcionamos informes de pruebas UV400 de laboratorios independientes. Precisa de AS/NZS 1067 para el mercado australiano? Também podemos hacerlo."
            />
            <FaqItem
              question="¿Qué tan rápido pueden enviar?"
              answer="Artículos en stock sin personalização: 3-5 dias hábiles. Pedidos personalizados con tu logo y colores: 15-25 dias de produção, luego 5-7 dias de flete aéreo a la mayoría de países. El flete marítimo es más barato pero tarda 20-35 dias. Enviamos por DHL, FedEx, UPS — tú eliges. ¿Pedidos urgentes? Habla con nosotros. Hemos logrado entregas en 10 dias cuando un cliente tenía una fecha límite."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Empecemos con Tu Línea Deportiva</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Equipos esportivos, tiendas outdoor, marcas fitness, empresas promocionales — hemos trabajado con todos.
            Cuéntanos qué necesitas y te enviaremos amostras para que veas la qualidade por ti mismo.
            Sin presión, sin compromiso en las amostras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Preços para Equipos</Link>
            <Link href="/pt/produtos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos los Produtos</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://eyeviewglasses.com/pt" },
          { "@type": "ListItem", "position": 2, "name": "Produtos", "item": "https://eyeviewglasses.com/pt/produtos" },
          { "@type": "ListItem", "position": 3, "name": "Óculos de Sol Esportivos", "item": "https://eyeviewglasses.com/pt/produtos/esportivo" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuál es el pedido mínimo? ¿Puedo empezar con poco?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 unidades por estilo y color es nosso MOQ estándar. Pedidos con logo personalizado empiezan en 300 unidades. La mayoría de compradores primerizos empiezan con un pedido de amostras mixtas para probar el mercado." }
          },
          {
            "@type": "Question",
            "name": "TR90 vs. policarbonato — ¿cuál debería elegir?",
            "acceptedAnswer": { "@type": "Answer", "text": "TR90 si puedes permitírtelo — es un 35% más ligero, mucho más flexible y se siente premium. El policarbonato está bien para líneas económicas. La diferencia de preço suele ser solo $1-2 por par." }
          },
          {
            "@type": "Question",
            "name": "¿Todas sus óculos esportivos son polarizados?",
            "acceptedAnswer": { "@type": "Answer", "text": "La polarización está disponível en todos los modelos. Es opcional en la línea estándar e incluida por defecto en la línea premium. Ofrecemos mais de 12 colores de lente incluindo opciones fotocromáticas." }
          },
          {
            "@type": "Question",
            "name": "¿Pueden poner nosso logo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto — impresión de logo en hastes, grabado en lentes, colores de armação personalizados con coincidencia Pantone y embalagem personalizado. Também podemos crear designs de armação completamente nuevos a partir de tu concepto." }
          },
          {
            "@type": "Question",
            "name": "¿Qué certificacoes incluyen?",
            "acceptedAnswer": { "@type": "Answer", "text": "CE y FDA en cada par. La línea premium também cumple ANSI Z87.1 para resistencia a impactos. Informes de pruebas UV400 incluidos. AS/NZS 1067 disponível bajo pedido." }
          },
          {
            "@type": "Question",
            "name": "¿Qué tan rápido pueden enviar?",
            "acceptedAnswer": { "@type": "Answer", "text": "Artículos en stock se envían en 3-5 dias hábiles. Pedidos personalizados tardan 15-25 dias de produção más 5-7 dias de flete aéreo. Pedidos urgentes posibles — hemos logrado entregas en 10 dias." }
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
