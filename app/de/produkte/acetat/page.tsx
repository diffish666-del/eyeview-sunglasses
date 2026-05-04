import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Acetat-Sonnenbrillen Großhandel | Acetat-Brillen Hersteller - EyeView',
  description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
  keywords: 'Acetat Sonnenbrillen Großhandel, Acetat Brillen Hersteller, Mazzucchelli Acetat, handgefertigte Brillen, Premium Sonnenbrillen Großhandel',
  openGraph: {
    title: 'Acetat-Sonnenbrillen Großhandel | Acetat-Brillen Hersteller - EyeView',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/produkte/acetat',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/acetat',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/acetate',
      'de': 'https://eyeviewsunglasses.com/de/produkte/acetat',
    },
  },
}

const acetateFaqs = [
  {
    question: '¿Cuál es la diferencia entre el acetato italiano Mazzucchelli y el acetato chino?',
    answer: 'La respuesta honesta es que la brecha se ha reducido significativamente en la última década, pero todavía hay diferencias reales. Mazzucchelli (y otros Herstellers italianos como Lapo) usa un proceso de extrusión más lento y controlado que produce planchas con profundidad de Farbe y distribución de patrón más consistente — especialmente visible en patrones complejos como carey multicapa o Farbees transparentes tipo cristal. El acetato italiano también tiende a pulirse a un brillo ligeramente superior. El acetato chino de Produktres de primera línea como Shenzhen Xin Rui o Taizhou Huangyan ha mejorado dramáticamente y es genuinamente bueno — exceGlas gama de Farbees, buena consistencia, y un 30-40% más barato. Para la mayoría de Preiss retail por debajo de $80, el acetato chino de alta Qualität es la elección inteligente. Para Markes Premium con retail por encima de $100 donde el Kunde podría comparar tu Fassung lado a lado con Céline o Tom Ford, el acetato italiano te da ese último 10% de refinamiento.',
  },
  {
    question: '¿Cuánto tarda el proceso de Produktion de acetato?',
    answer: 'Más de lo que podrías pensar — y eso es realmente lo que hace especial al acetato. Ab el corte CNC hasta el Qualitätskontrolle final, un solo par toma 5-7 días de tiempo de procesamiento real. Los grandes consumidores de tiempo son el tamboreado (3-5 días para suavizar todas las Markes del mecanizado) y el pulido a mano (20-30 minutos pro Paar por trabajadores cualificados). El tiempo total de Produktion para un Bestellung es típicamente 20-28 días porque procesamos por lotes en cada etapa. Los Bestellungs urgentes se pueden hacer en 14-18 días pero cobramos un recargo del 15% porque tenemos que interrumpir otras tiradas de Produktion. Los pares de Muster tardan 5-7 Werktage.',
  },
  {
    question: '¿Qué Farbees y patrones pueden hacer en acetato?',
    answer: 'Esencialmente ilimitados. Tenemos en stock más de 200 Farbees y patrones de planchas de acetato de nuestros proveedores — Farbees sólidos, carey (clásico marrón, rubio, oscuro), cristal/transparente (transparente, gris, champán, azul), mármol, veta de madera, efecto cuerno, degradado y patrones laminados multicapa. Para Farbees personalizados, nos das un código Pantone y el proveedor de acetato produce una plancha a medida. El desarrollo de patrones personalizados (como una mezcla de carey única o un patrón con tu Marke) también es posible — el Mindestbestellmenge de planchas es normalmente 50-100kg, lo que se traduce en aproximadamente 500-1.000 pares dependiendo del Größe de la Fassung. Para Bestellungs más pequeños, recomendamos encarecidamente elegir de los Farbees en stock — hay tantos que casi sicher encontrarás lo que necesitas.',
  },
  {
    question: '¿Cómo deben cuidar los Kundes las Brillen de acetato?',
    answer: 'El acetato es más beständig de lo que la mayoría piensa, pero hay algunas cosas que saber. Primero, mantenerlas alejadas del calor extremo — no las dejes en el salpicadero del coche en verano. El acetato se ablanda alrededor de 70-80°C (158-176°F), así que el calor sostenido puede deformar la Fassung. Segundo, evitar acetona y solventes fuertes — el quitaesmalte dañará la superficie. Tercero, limpiar con agua tibia y jabón suave, luego secar con un paño suave. Nada de limpiadores de Gläser a base de alcohol. La buena noticia es que las Fassungs de acetato pueden ser ajustadas por tu óptico con calor suave, y los arañazos menores a menudo pueden pulirse. Incluimos tarjetas de instrucciones de cuidado con cada Bestellung sin cargo extra — evita a tus Kundes los errores más comunes y reduce tu tasa de devolución.',
  },
  {
    question: '¿Cuál es el MOQ para Brillen de acetato personalizadas?',
    answer: 'El MOQ estándar es 100 unidades por modelo. Puedes mezclar Farbees dentro de esas 100 — así que 30 negro, 30 carey y 40 cristal transparente funciona bien. Si quieres un Design de Fassung completamente personalizado (tu propia forma, no uno de nuestros moldes existentes), hay una tarifa única de molde de $800-1.500 dependiendo de la complejidad, y el MOQ para formas personalizadas es 300 unidades en el primer Bestellung. Después de eso, los reBestellungs vuelven a 100 unidades. Para Farbees de plancha de acetato personalizados (coincidencia Pantone), el MOQ de la plancha del proveedor es típicamente 50-100kg. Mantenemos una gran biblioteca de Farbees en stock para evitar este mínimo para Markes más pequeñas.',
  },
  {
    question: '¿Por qué el acetato es más caro que el plástico inyectado?',
    answer: 'Porque casi cada paso requiere manos humanas cualificadas. Las Fassungs inyectadas (nylon, TR90, PC) las hace una máquina en unos 30 segundos — inyectar plástico caliente en un molde, enfriar, sacarlo, listo. Las Fassungs de acetato empiezan como planchas planas que se cortan por CNC en formas toscas, luego se tamborean durante 3-5 días, luego se pulen a mano una por una durante 20-30 minutos. El contenido de mano de obra es dramáticamente mayor. El costo del Material también es mayor — un kilogramo de plancha de acetato de Qualität cuesta 3-5 veces más que pellets de nylon de grado inyección. La recompensa es que las Fassungs de acetato se ven y se sienten Premium de una manera que el plástico inyectado simplemente no puede igualar. Los Farbees son más ricos, la superficie tiene más profundidad, y hay una calidez y Gewicht en el acetato que los Kundes asocian con Qualität. Por eso las Fassungs de acetato se venden a $60-200+ mientras que las inyectadas típicamente alcanzan un máximo de $40-60.',
  },
]

const products = [
  {
    name: 'Wayfarer Clásico Carey',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    price: '$6.00 - $11.00',
    moq: '100 Stk.',
    features: ['Patrón Carey', 'Pulido a Mano', 'Gläser UV400', 'Bisagra de 5 Barriles'],
  },
  {
    name: 'Redonda Cristal Transparente',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    price: '$7.00 - $11.00',
    moq: '100 Stk.',
    features: ['Cristal Transparente', 'Forma Redonda', 'Claridad Óptica', 'Múltiples Opciones de Tinte'],
  },
  {
    name: 'Cat-Eye Efecto Mármol',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    features: ['Patrón Mármol', 'Forma Cat-Eye', 'Acetato Multicapa', 'Único por Par'],
  },
  {
    name: 'Oversize Acetato Degradado',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    price: '$8.00 - $13.00',
    moq: '100 Stk.',
    features: ['Degradado BiFarbe', 'Fassung Oversize', 'Acetato Laminado', 'Posicionamiento Premium'],
  },
  {
    name: 'Cuadrada Premium Acetato Italiano',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    price: '$10.00 - $16.00',
    moq: '100 Stk.',
    features: ['Mazzucchelli M49', 'Pulido Premium', 'Scharniere de 5 Barriles', 'Hilo de Alma Individualisierendo'],
  },
  {
    name: 'Browline Acetato Efecto Cuerno',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    price: '$9.00 - $14.00',
    moq: '100 Stk.',
    features: ['Patrón Efecto Cuerno', 'Forma Browline', 'Híbrido Acetato + Metal', 'Acero Alemán'],
  },
]

export default function AcetatoPageDe() {
  return (
    <>
      <ProductSchema product={{
        name: 'Sonnenbrillen de Acetato Individualisierendas',
        description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
        minPrice: '6.00',
        maxPrice: '16.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'Brillen de Acetato', url: 'https://eyeviewsunglasses.com/de/produkte/acetat' }
      ]} />
      <FAQPageSchema faqs={acetateFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Sonnenbrillen de Acetato</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Hersteller de Sonnenbrillen de Acetato - Brillen Artesanales Mazzucchelli im Großhandel"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hersteller de Sonnenbrillen de Acetato
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Si alguna vez has cogido un par de Sonnenbrillen y has pensado inmediatamente &ldquo;estas se sienten caras,&rdquo; casi sicher estabas sosteniendo <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato de celulosa</a>. Hay una razón por la que cada gran Marke de Brillen de lujo — ab Tom Ford hasta Chanel pasando por Oliver Peoples — construye sus Fassungs con este Material. El acetato tiene una profundidad y riqueza que el plástico inyectado no puede alcanzar. Los Farbees están en capas, no pintados en la superficie. El pulido tiene una calidez. Y el Gewicht — unos 25-35 gramos para una Fassung típica — se asienta en tu cara con una sustancia que dice &ldquo;esto cuesta más de $20.&rdquo;
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Llevo 14 años fabricando Sonnenbrillen de acetato, y el proceso aún me fascina. A diferencia del moldeo por inyección — donde inyectas plástico caliente en un molde y sacas una Fassung terminada en 30 segundos — las Fassungs de acetato empiezan como planchas planas de Material que pasan por un viaje de Produktion de varios días: corte CNC, tamboreado, pulido a mano, ensamblaje y Qualitätskontrolle. Cada par pasa por manos humanas múltiples veces. Eso es lo que hace que las Fassungs de acetato sean más caras, y también lo que las hace mejores.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Trabajamos con dos categorías de acetato. Para Markes Premium, usamos acetato italiano de <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> — llevan fabricando el Material ab 1849 y son el estándar de oro. Su biblioteca de Farbees tiene más de 2.000 patrones y su Qualitätskontrolle es meticuloso. Para Markes posicionadas en la gama media ($40-80 retail), usamos acetato chino de primera línea de proveedores como Shenzhen Xin Rui, que ha mejorado enormemente en la última década y ofrece un gran valor. Ambos funcionan. Cuál elijas depende de tu punto de Preis y tu competencia.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestra Fabrik produce unas 300.000 Brillen de acetato al año en todos los Stils — <Link href="/de/produkte/wayfarer" className="text-primary-600 hover:underline">wayfarers</Link>, <Link href="/de/produkte/ojo-de-gato" className="text-primary-600 hover:underline">cat-eyes</Link>, <Link href="/de/produkte/redondo" className="text-primary-600 hover:underline">redondas</Link>, cuadradas, browlines y formas personalizadas. Tenemos 12 máquinas CNC, 6 tambores de pulido y empleamos a 45 trabajadores de pulido a mano. Déjame explicarte exactamente cómo convertimos una plancha plana de acetato en un par de Brillen terminado.
              </p>
            </div>
          </div>

          {/* Production Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Cómo Fabricamos las Brillen de Acetato</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              De plancha plana a Fassung terminada en 5-7 días. Aquí va cada paso — sin atajos, sin secretos.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Selección de Plancha y Corte CNC</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Todo empieza con la plancha de acetato — un bloque de Material de aproximadamente 6mm de esGewichtr en el Farbe o patrón que hayas elegido. Cargamos la plancha en una fresadora CNC (control numérico por computadora) que corta la Fassung frontal y las Bügels con especificaciones precisas. La CNC sigue el archivo CAD 3D de tu Fassung, cortando las ranuras de las Gläser, la forma del Steg y las cavidades de las Scharniere en una sola operación. Un operador CNC cualificado puede cortar unas 40-50 Fassungs frontales por hora. En esta etapa, la Fassung está tosca — puedes ver las Markes del mecanizado y los bordes están afilados.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tamboreado (3-5 Días)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este es el paso que sorprende a la gente — las Fassungs van a un tambor rotatorio lleno de virutas de madera, piedra pómez y una pequeña cantidad de agua. El tambor gira lentamente durante 3-5 días, y la fricción gradualmente suaviza todas las Markes del mecanizado y redondea los bordes. Es esencialmente un proceso de lijado muy lento y muy suave. No puedes acelerarlo. Lo hemos intentado. Si acortas el tamboreado, la superficie no está lo suficientemente suave para que el pulido final quede bien. Diferentes patrones requieren diferentes medios de tamboreado — por ejemplo, el acetato cristal transparente necesita medios más finos para evitar micro-rayaduras.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pulido a Mano (20-30 Minutos por Par)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aquí es donde ocurre la magia y de donde viene la mayor parte del costo. Un trabajador cualificado toma cada Fassung y la pule a mano contra una serie de ruedas de algodón para pulir, usando compuestos de pulido progresivamente más finos. La primera rueda elimina las Markes de tamboreado restantes. La segunda genera un semi-brillo. La tercera y última rueda produce ese brillo profundo de cristal líquido que hace que las Fassungs de acetato se vean tan Premium. Nuestros trabajadores de pulido tienen una media de 6 años de experiencia — se necesita aproximadamente un año de formación antes de que alguien pueda pulir consistentemente a nuestro estándar. Este es el paso que las Fassungs de plástico de mercado masivo se saltan por completo, y es la razón por la que las Fassungs de acetato se ven y se sienten fundamentalmente diferentes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ensamblaje de Scharniere y Montaje de Gläser</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Insertamos las Scharniere (típicamente de acero inoxidable de 5 barriles con hilo de alma personalizado para tu logo), fijamos las Bügels y montamos las Gläser. Para Fassungs de acetato, las Gläser se cortan para coincidir con la forma de la ranura y se insertan calentando suavemente la Fassung a unos 60°C, lo que hace que el acetato sea lo suficientemente flexibel para aceptar la Glas sin agrietamiento por estrés. Cada Scharnier se prueba para acción suave y tensión adecuada. La alineación de las Bügels se verifica para asegurar que la Fassung se asiente nivelada en una superficie plana.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Qualitätskontrolle</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cada par pasa por una Inspektion de 15 puntos: alineación de Gläser, tensión de Scharnier, simetría de Bügels, acabado de superficie (comprobando rayaduras, picaduras o pulido desigual), consistencia de Farbe, verificación de UV-Schutz (probada con espectrómetro UV) y mediciones físicas contra la hoja de especificaciones. Nuestra tasa de rechazo en QC para Fassungs de acetato es de aproximadamente 3-5% — más alta que las Fassungs inyectadas (que rondan el 1-2%) porque los procesos manuales introducen más variabilidad. Los pares rechazados vuelven para re-pulido o se descartan por completo. No enviamos segundas Qualitätes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Italian vs Chinese Acetate */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Acetato Italiano vs. Chino: La Verdadera Historia</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Me preguntan esto en casi cada llamada. Aquí va una comparación honesta de alguien que trabaja con ambos todos los días.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-3">Acetato Italiano (Mazzucchelli, Lapo)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Profundidad de Farbe y consistencia de patrón superiores — especialmente en patrones complejos multicapa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Se pule a un brillo ligeramente superior con menos esfuerzo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Biblioteca de más de 2.000 patrones con décadas de I+D detrás de cada uno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>&ldquo;Fabricado con acetato italiano&rdquo; es una declaración de marketing legítima que resuena con compradores Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>30-40% más caro que acetato chino equivaGlas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Plazos de Lieferung más Länges para Farbees personalizados (6-8 semanas ab Bestellung hasta Lieferung de plancha)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Mejor para: Retail $80+</div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-3">Acetato Chino Premium</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>ExceGlas Qualität de Produktres de primera línea — genuinamente bueno, no un compromiso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>30-40% menos costo por kilogramo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Plazo más rápido para Farbees personalizados (3-4 semanas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>MOQ de plancha más bajo para Farbees personalizados (50kg vs 100kg para italiano)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Los patrones complejos (carey multicapa) pueden tener distribución ligeramente menos consistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Sin historia de marketing &ldquo;italiano&rdquo; (aunque &ldquo;acetato de celulosa Premium&rdquo; sigue funcionando)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Mejor para: Retail $40-80</div>
              </div>
            </div>

            <p className="text-gray-500 text-center mt-8 text-sm">
              Mi recomendación: empieza con acetato chino para validar tus Designs y puntos de Preis. Cambia a italiano para tus Produkts estrella una vez que hayas confirmado la demanda. Muchas Markes exitosas usan ambos — italiano para su línea insignia, chino para su colección diaria.
            </p>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Sonnenbrillen de Acetato im Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Unsere Kollektion de Acetato</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/de/kontakt" className="btn-primary text-sm">Angebot anfordern</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Vollständige Spezifikationen</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Material de Fassung', 'Acetato de celulosa — Italiano (Mazzucchelli/Lapo) o chino Premium'],
                      ['Gewicht de Fassung', '25-35g dependiendo del Größe y grosor de la Fassung'],
                      ['Grosor de Plancha', '5mm / 6mm / 8mm (más común: 6mm)'],
                      ['Patrones Disponibles', '200+ Farbees en stock: sólido, carey, cristal, mármol, degradado, cuerno, veta de madera, laminado'],
                      ['Farbees Individualisierendos', 'Coincidencia Pantone disponible — MOQ de plancha 50kg (chino) / 100kg (italiano)'],
                      ['Material de Glas', 'Policarbonato / TAC Polarisiert / CR-39 Óptico / Cristal'],
                      ['Breite de Glas', '48mm - 58mm (varía según Stil de Fassung)'],
                      ['Breite de Steg', '16mm - 22mm'],
                      ['Länge de Bügel', '140mm / 145mm / 150mm'],
                      ['Scharniere', 'Acero inoxidable de 5 barriles estándar / Scharniere de muelle opcionales (+$0.30/par)'],
                      ['UV-Schutz', 'UV400 — bloquea el 100% de radiación UVA y UVB'],
                      ['Proceso de Produktion', 'Corte CNC → tamboreado (3-5 días) → pulido a mano (20-30 min) → ensamblaje → QC'],
                      ['Zertifizierungen', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 unidades por modelo — mezcla de Farbees permitida / 300 Stk. para formas personalizadas'],
                      ['Tarifa de Molde (Forma Individualisierenda)', '$800 - $1.500 único — exento en Bestellungs superiores a 1.000 Stk.'],
                      ['Tiempo de Muestra', '5-7 Werktage'],
                      ['Tiempo de Produktion', '20-28 días estándar / 14-18 días urgente (+15%)'],
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

          {/* Farbe and Pattern Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Farbees y Patrones</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Aquí es donde el acetato realmente brilla comparado con otros Materiales. La gama de Farbees y patrones que puedes conseguir es esencialmente ilimitada.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🐢 Carey</h3>
                <p className="text-sm text-gray-600">El clásico. Disponible en marrón/ámbar (tradicional), rubio/miel (más claro, más trendy), Havana oscuro (rico, casi negro) y verde/oliva (único). El carey multicapa italiano tiene más profundidad y variación.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">💎 Cristal / Transparente</h3>
                <p className="text-sm text-gray-600">Totalmente transparente o con un tinte sutil. Cristal transparente, cristal gris, cristal champán, cristal azul, cristal rosa. La clave es la claridad óptica — el acetato transparente barato se ve lechoso. El nuestro no.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🪨 Mármol y Piedra</h3>
                <p className="text-sm text-gray-600">Se consigue laminando y prensando planchas de acetato de diferentes Farbees. Mármol blanco, mármol negro, jade verde, ónix rosa. Cada par tiene patrones de remolino ligeramente diferentes — cada Fassung es única.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🌅 Degradado / BiFarbe</h3>
                <p className="text-sm text-gray-600">Oscuro arriba, claro abajo (o de lado a lado). Negro a transparente, marrón a miel, azul marino a azul cielo, vino a rosa. Se crea laminando dos planchas de acetato en diferentes proporciones de esGewichtr.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🎨 Farbees Sólidos</h3>
                <p className="text-sm text-gray-600">Negro mate, negro brillante, azul marino, verde bosque, burdeos, crema, rosa pastel, azul cielo — y todo lo intermedio. Coincidencia Pantone para Farbees personalizados. La profundidad del pulido en acetato sólido es impresionante.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🦌 Efecto Cuerno y Madera</h3>
                <p className="text-sm text-gray-600">Patrones de acetato que imitan cuerno de búfalo natural o veta de madera. Populares en mercados japonés y coreano. Cada par se ve único debido a la variación natural en el patrón de la plancha de acetato.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Individualisierung</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Las Fassungs de acetato ofrecen la mayor gama de Individualisierung de cualquier Material de Fassung. Esto es lo que podemos hacer.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estampado en caliente</strong> — lámina dorada, plateada o de Farbe en el interior de la Bügel. Clásico, elegante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>En relieve/bajo relieve</strong> — prensado en la superficie del acetato. Sutil y permanente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hilo de alma personalizado</strong> — tu logo grabado a láser en el alambre metálico de la Scharnier, visible cuando la Bügel se despliega.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica en Bügel</strong> — placa de logo en aleación de zinc o acero inoxidable remachada a la Bügel.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📐 Design de Fassung</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Formas personalizadas</strong> — envíanos un boceto o archivo CAD y cortaremos un molde CNC ($800-1.500 único)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Breite de Bügel</strong> — fina (4mm) para look minimal, gruesa (6-8mm) para declaración atrevida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Steg keyhole vs silla</strong> — diferentes Stils de Steg nasal para diferentes formas de cara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Stil de punta de Bügel</strong> — recta, curvada o tipo pala</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Verpackung</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches de piel</strong> — cierre magnético, logo en bajo relieve. La opción Premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches rígidos EVA</strong> — langlebigs, leichts, impresión de logo a todo Farbe.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bolsa de microfibra</strong> — impresa personalizada, sirve también como paño de limpieza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cajas listas para retail</strong> — impresión a todo Farbe, inserto personalizado, pestaña colgante, etiqueta con código de barras.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Acetate */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el Acetato Tiene Preis Premium</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Las Fassungs de acetato se venden a $60-200+. Aquí está por qué los Kundes pagan ese Premium — y por qué funciona para tus márgenes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">✋ Proceso Artesanal</h3>
                <p className="text-gray-300 text-sm">Cada par es tocado por manos humanas múltiples veces. En un mundo de Produktion masiva, eso importa. Los Kundes pueden sentir la diferencia — y pagarán por ella. &ldquo;Pulido a mano&rdquo; es una declaración de marketing genuina que resuena.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🎨 Profundidad de Farbe</h3>
                <p className="text-gray-300 text-sm">Los Farbees del acetato están en capas a través del Material, no pintados en la superficie. Un patrón carey tiene profundidad real — puedes ver diferentes capas ab diferentes ángulos. Esto es físicamente imposible con plástico inyectado.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">⚖️ Qualität Percibida</h3>
                <p className="text-gray-300 text-sm">El Gewicht (25-35g), la calidez del Material contra la piel, la profundidad del pulido — todo en el acetato comunica Qualität. Tu Kunde lo coge y sabe que esto no es un par de Brillen de $15.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🌿 Origen Natural</h3>
                <p className="text-gray-300 text-sm">El acetato de celulosa se deriva de fibras de algodón y pulpa de madera — es un Material de origen vegetal, no derivado del petróleo. Eso importa cada vez más a los consumidores eco-conscientes y te da un ángulo de sostenibilidad.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🔧 Ajustabilidad</h3>
                <p className="text-gray-300 text-sm">El acetato puede ser ajustado por cualquier óptico con calor suave. La Fassung puede remodelarse para un ajuste personalizado. Intenta eso con nylon inyectado — se rompe. Esta ajustabilidad extiende la vida útil del Produkt y reduce devoluciones.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">💰 Matemática de Márgenes</h3>
                <p className="text-gray-300 text-sm">Una Fassung de acetato cuesta $6-16 pro Paar de producir. Se vende al retail a $60-200. Eso es un margen de 4-12x — mejor que la mayoría de Produkts de consumo. Incluso después de contabilizar marketing, Verpackung y distribución, los márgenes en Brillen de acetato son exceGläser.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Häufig gestellte Fragen sobre Brillen de Acetato</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {acetateFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produkte Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/de/produkte/ojo-de-gato" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😸</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-Farbes mb-2">Brillen Cat-Eye</h3>
                <p className="text-gray-600 text-sm">Nuestro Stil de acetato más popular para Markes de mujer. Disponible en todos los Farbees y patrones de acetato.</p>
              </Link>
              <Link href="/de/produkte/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-Farbes mb-2">Brillen Wayfarer</h3>
                <p className="text-gray-600 text-sm">La forma de acetato más vendida a nivel mundial. Clásica, versátil, y el primer Produkt más sicher para nuevas Markes.</p>
              </Link>
              <Link href="/de/produkte/redondo" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-Farbes mb-2">Brillen Redondas</h3>
                <p className="text-gray-600 text-sm">Redondas de inspiración vintage en cristal, carey y acetato sólido. En fuerte tendencia en mercados asiáticos.</p>
              </Link>
              <Link href="/de/produkte" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-Farbes mb-2">Guía OEM vs ODM</h3>
                <p className="text-gray-600 text-sm">¿No sabes si usar nuestros Designs existentes o crear los tuyos propios? Esta guía desglosa los pros, contras y costos.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Listo para Crear Tu Colección de Acetato?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Envíanos tus ideas de Fassung, preferencias de Farbe y punto de Preis objetivo. Te recomendaremos el grado de acetato adecuado, te enviaremos Muster de Material y tendrás Muster en tus manos en una semana. Acetato italiano o chino — te ayudaremos a tomar la decisión correcta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/de/kontakt" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-Farbes">
                Angebot anfordern
              </Link>
              <Link href="/de/produkte" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-Farbes">
                Ver Todos los Produkte
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
