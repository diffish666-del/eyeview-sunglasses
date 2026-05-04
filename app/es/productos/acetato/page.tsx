import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricante de Gafas de Sol de Acetato | Fábrica de Gafas Artesanales - EyeView',
  description: 'Fabricante de gafas de sol de acetato personalizadas. Acetato italiano Mazzucchelli y acetato chino premium. Monturas pulidas a mano, más de 200 colores. MOQ 100 uds. Corte CNC, tamboreado, directo de fábrica.',
  keywords: 'fabricante gafas acetato, fábrica gafas acetato personalizadas, gafas acetato italiano, gafas Mazzucchelli, gafas pulidas a mano, gafas acetato de celulosa, monturas acetato al por mayor',
  openGraph: {
    title: 'Fabricante de Gafas de Sol de Acetato | Fábrica de Gafas Artesanales - EyeView',
    description: 'Fabricante de gafas de sol de acetato personalizadas. Acetato italiano Mazzucchelli y acetato chino premium. Pulidas a mano, más de 200 colores. MOQ 100 uds. Directo de fábrica.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/es/productos/acetato',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/productos/acetato',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/acetate',
      'es': 'https://eyeviewsunglasses.com/es/productos/acetato',
    },
  },
}

const acetateFaqs = [
  {
    question: '¿Cuál es la diferencia entre el acetato italiano Mazzucchelli y el acetato chino?',
    answer: 'La respuesta honesta es que la brecha se ha reducido significativamente en la última década, pero todavía hay diferencias reales. Mazzucchelli (y otros fabricantes italianos como Lapo) usa un proceso de extrusión más lento y controlado que produce planchas con profundidad de color y distribución de patrón más consistente — especialmente visible en patrones complejos como carey multicapa o colores transparentes tipo cristal. El acetato italiano también tiende a pulirse a un brillo ligeramente superior. El acetato chino de productores de primera línea como Shenzhen Xin Rui o Taizhou Huangyan ha mejorado dramáticamente y es genuinamente bueno — excelente gama de colores, buena consistencia, y un 30-40% más barato. Para la mayoría de precios retail por debajo de $80, el acetato chino de alta calidad es la elección inteligente. Para marcas premium con retail por encima de $100 donde el cliente podría comparar tu montura lado a lado con Céline o Tom Ford, el acetato italiano te da ese último 10% de refinamiento.',
  },
  {
    question: '¿Cuánto tarda el proceso de producción de acetato?',
    answer: 'Más de lo que podrías pensar — y eso es realmente lo que hace especial al acetato. Desde el corte CNC hasta el control de calidad final, un solo par toma 5-7 días de tiempo de procesamiento real. Los grandes consumidores de tiempo son el tamboreado (3-5 días para suavizar todas las marcas del mecanizado) y el pulido a mano (20-30 minutos por par por trabajadores cualificados). El tiempo total de producción para un pedido es típicamente 20-28 días porque procesamos por lotes en cada etapa. Los pedidos urgentes se pueden hacer en 14-18 días pero cobramos un recargo del 15% porque tenemos que interrumpir otras tiradas de producción. Los pares de muestra tardan 5-7 días hábiles.',
  },
  {
    question: '¿Qué colores y patrones pueden hacer en acetato?',
    answer: 'Esencialmente ilimitados. Tenemos en stock más de 200 colores y patrones de planchas de acetato de nuestros proveedores — colores sólidos, carey (clásico marrón, rubio, oscuro), cristal/transparente (transparente, gris, champán, azul), mármol, veta de madera, efecto cuerno, degradado y patrones laminados multicapa. Para colores personalizados, nos das un código Pantone y el proveedor de acetato produce una plancha a medida. El desarrollo de patrones personalizados (como una mezcla de carey única o un patrón con tu marca) también es posible — el pedido mínimo de planchas es normalmente 50-100kg, lo que se traduce en aproximadamente 500-1.000 pares dependiendo del tamaño de la montura. Para pedidos más pequeños, recomendamos encarecidamente elegir de los colores en stock — hay tantos que casi seguro encontrarás lo que necesitas.',
  },
  {
    question: '¿Cómo deben cuidar los clientes las gafas de acetato?',
    answer: 'El acetato es más resistente de lo que la mayoría piensa, pero hay algunas cosas que saber. Primero, mantenerlas alejadas del calor extremo — no las dejes en el salpicadero del coche en verano. El acetato se ablanda alrededor de 70-80°C (158-176°F), así que el calor sostenido puede deformar la montura. Segundo, evitar acetona y solventes fuertes — el quitaesmalte dañará la superficie. Tercero, limpiar con agua tibia y jabón suave, luego secar con un paño suave. Nada de limpiadores de lentes a base de alcohol. La buena noticia es que las monturas de acetato pueden ser ajustadas por tu óptico con calor suave, y los arañazos menores a menudo pueden pulirse. Incluimos tarjetas de instrucciones de cuidado con cada pedido sin cargo extra — evita a tus clientes los errores más comunes y reduce tu tasa de devolución.',
  },
  {
    question: '¿Cuál es el MOQ para gafas de acetato personalizadas?',
    answer: 'El MOQ estándar es 100 unidades por modelo. Puedes mezclar colores dentro de esas 100 — así que 30 negro, 30 carey y 40 cristal transparente funciona bien. Si quieres un diseño de montura completamente personalizado (tu propia forma, no uno de nuestros moldes existentes), hay una tarifa única de molde de $800-1.500 dependiendo de la complejidad, y el MOQ para formas personalizadas es 300 unidades en el primer pedido. Después de eso, los repedidos vuelven a 100 unidades. Para colores de plancha de acetato personalizados (coincidencia Pantone), el MOQ de la plancha del proveedor es típicamente 50-100kg. Mantenemos una gran biblioteca de colores en stock para evitar este mínimo para marcas más pequeñas.',
  },
  {
    question: '¿Por qué el acetato es más caro que el plástico inyectado?',
    answer: 'Porque casi cada paso requiere manos humanas cualificadas. Las monturas inyectadas (nylon, TR90, PC) las hace una máquina en unos 30 segundos — inyectar plástico caliente en un molde, enfriar, sacarlo, listo. Las monturas de acetato empiezan como planchas planas que se cortan por CNC en formas toscas, luego se tamborean durante 3-5 días, luego se pulen a mano una por una durante 20-30 minutos. El contenido de mano de obra es dramáticamente mayor. El costo del material también es mayor — un kilogramo de plancha de acetato de calidad cuesta 3-5 veces más que pellets de nylon de grado inyección. La recompensa es que las monturas de acetato se ven y se sienten premium de una manera que el plástico inyectado simplemente no puede igualar. Los colores son más ricos, la superficie tiene más profundidad, y hay una calidez y peso en el acetato que los clientes asocian con calidad. Por eso las monturas de acetato se venden a $60-200+ mientras que las inyectadas típicamente alcanzan un máximo de $40-60.',
  },
]

const products = [
  {
    name: 'Wayfarer Clásico Carey',
    description: 'El wayfarer carey es la montura de acetato más solicitada en la industria de las gafas — y con razón. El patrón ámbar y marrón favorece todos los tonos de piel, fotografía maravillosamente y transmite percepción premium instantánea. Lo producimos tanto en acetato italiano Mazzucchelli (para líneas premium) como en acetato chino de alta calidad (para posicionamiento de gama media). Cada par se pule a mano hasta un brillo profundo que capta la luz de una manera que el plástico inyectado simplemente no puede replicar. Si estás construyendo una marca de gafas y necesitas un primer SKU seguro, probablemente sea este.',
    price: '$6.00 - $11.00',
    moq: '100 uds',
    features: ['Patrón Carey', 'Pulido a Mano', 'Lentes UV400', 'Bisagra de 5 Barriles'],
  },
  {
    name: 'Redonda Cristal Transparente',
    description: 'El acetato transparente lleva tres años en tendencia fuerte y no muestra señales de frenarse. Nuestra montura redonda cristal transparente es ópticamente clara — sin tinte amarillo, sin turbidez — con ese satisfactorio peso de acetato que le dice al cliente que está sosteniendo algo real. La forma redonda es enorme con el público indie/vintage y funciona especialmente bien en mercados asiáticos donde las formas más redondas se adaptan a más tipos de cara. Podemos hacer totalmente transparente, o un sutil cristal gris, cristal champán o cristal azul si quieres un toque de color.',
    price: '$7.00 - $11.00',
    moq: '100 uds',
    features: ['Cristal Transparente', 'Forma Redonda', 'Claridad Óptica', 'Múltiples Opciones de Tinte'],
  },
  {
    name: 'Cat-Eye Efecto Mármol',
    description: 'El patrón de mármol se hace laminando dos o tres planchas de acetato de diferentes colores y prensándolas juntas, creando un efecto de piedra arremolinada que es completamente único para cada par. Combinado con la forma cat-eye — que ha estado dominando las gafas de mujer desde su regreso alrededor de 2018 — esta es una pieza declaración. Vemos que estas funcionan especialmente bien con marcas DTC de moda vanguardista y retailers boutique. El patrón de mármol está disponible en blanco/gris, negro/gris, verde/oro y rosa/blanco, o podemos desarrollar una mezcla de mármol personalizada.',
    price: '$8.00 - $12.00',
    moq: '100 uds',
    features: ['Patrón Mármol', 'Forma Cat-Eye', 'Acetato Multicapa', 'Único por Par'],
  },
  {
    name: 'Oversize Acetato Degradado',
    description: 'Acetato degradado bicolor — oscuro arriba, aclarándose hacia abajo. Esto se logra laminando dos planchas de acetato de diferentes colores y controlando la proporción de espesor. La montura oversize proporciona excelente cobertura solar y tiene ese look de marca de lujo que funciona bien en Instagram y en editoriales de moda. Disponible en degradados de negro a transparente, marrón a miel, azul a transparente y vino a rosa. Este estilo se vende fácilmente a $80-150 retail y el costo por par aún empieza por debajo de $10. Los márgenes son excelentes.',
    price: '$8.00 - $13.00',
    moq: '100 uds',
    features: ['Degradado Bicolor', 'Montura Oversize', 'Acetato Laminado', 'Posicionamiento Premium'],
  },
  {
    name: 'Cuadrada Premium Acetato Italiano',
    description: 'Para marcas que compiten en el extremo superior del mercado. Esta montura usa exclusivamente acetato Mazzucchelli M49 — el mismo grado usado por Tom Ford, Céline y Oliver Peoples. La diferencia es visible en la profundidad de color y la calidad del pulido. Nuestros trabajadores dedican más de 30 minutos puliendo a mano cada par para lograr ese acabado de cristal líquido. Bisagras de cinco barriles con hilo de alma personalizado con tu logo. La forma cuadrada es versátil — funciona tanto para hombres como para mujeres — y las proporciones están calibradas para un look moderno, ligeramente oversize, que fotografía bien. Este es el par que hace que un comprador tome tu montura en una feria y diga "oh, esto está bien."',
    price: '$10.00 - $16.00',
    moq: '100 uds',
    features: ['Mazzucchelli M49', 'Pulido Premium', 'Bisagras de 5 Barriles', 'Hilo de Alma Personalizado'],
  },
  {
    name: 'Browline Acetato Efecto Cuerno',
    description: 'El patrón efecto cuerno imita el cuerno de búfalo natural — estrías oscuras sobre una base más clara que crean una textura orgánica, casi de madera. Combinado con la forma browline (clubmaster), donde la mitad superior de la montura es acetato más grueso y la inferior es alambre metálico fino, este es un diseño híbrido distintivo. El patrón de cuerno es especialmente popular en los mercados japonés y coreano donde transmite una estética sofisticada e intelectual. Cada par tiene un patrón ligeramente diferente debido a la variación natural en la plancha de acetato. Usamos acero inoxidable de fabricación alemana para el aro de alambre inferior.',
    price: '$9.00 - $14.00',
    moq: '100 uds',
    features: ['Patrón Efecto Cuerno', 'Forma Browline', 'Híbrido Acetato + Metal', 'Acero Alemán'],
  },
]

export default function AcetatoPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Gafas de Sol de Acetato Personalizadas',
        description: 'Gafas de sol de acetato artesanales fabricadas con acetato italiano Mazzucchelli y acetato chino premium. Corte CNC, tamboreado, pulido a mano. Más de 200 colores y patrones. Personalización OEM completa.',
        minPrice: '6.00',
        maxPrice: '16.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Inicio', url: 'https://eyeviewsunglasses.com/es' },
        { name: 'Productos', url: 'https://eyeviewsunglasses.com/es/productos' },
        { name: 'Gafas de Acetato', url: 'https://eyeviewsunglasses.com/es/productos/acetato' }
      ]} />
      <FAQPageSchema faqs={acetateFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hover:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/es/productos" className="hover:text-primary-600">Productos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Gafas de Sol de Acetato</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Fabricante de Gafas de Sol de Acetato - Gafas Artesanales Mazzucchelli al por Mayor"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricante de Gafas de Sol de Acetato
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Si alguna vez has cogido un par de gafas de sol y has pensado inmediatamente &ldquo;estas se sienten caras,&rdquo; casi seguro estabas sosteniendo <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato de celulosa</a>. Hay una razón por la que cada gran marca de gafas de lujo — desde Tom Ford hasta Chanel pasando por Oliver Peoples — construye sus monturas con este material. El acetato tiene una profundidad y riqueza que el plástico inyectado no puede alcanzar. Los colores están en capas, no pintados en la superficie. El pulido tiene una calidez. Y el peso — unos 25-35 gramos para una montura típica — se asienta en tu cara con una sustancia que dice &ldquo;esto cuesta más de $20.&rdquo;
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Llevo 14 años fabricando gafas de sol de acetato, y el proceso aún me fascina. A diferencia del moldeo por inyección — donde inyectas plástico caliente en un molde y sacas una montura terminada en 30 segundos — las monturas de acetato empiezan como planchas planas de material que pasan por un viaje de producción de varios días: corte CNC, tamboreado, pulido a mano, ensamblaje y control de calidad. Cada par pasa por manos humanas múltiples veces. Eso es lo que hace que las monturas de acetato sean más caras, y también lo que las hace mejores.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Trabajamos con dos categorías de acetato. Para marcas premium, usamos acetato italiano de <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> — llevan fabricando el material desde 1849 y son el estándar de oro. Su biblioteca de colores tiene más de 2.000 patrones y su control de calidad es meticuloso. Para marcas posicionadas en la gama media ($40-80 retail), usamos acetato chino de primera línea de proveedores como Shenzhen Xin Rui, que ha mejorado enormemente en la última década y ofrece un gran valor. Ambos funcionan. Cuál elijas depende de tu punto de precio y tu competencia.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestra fábrica produce unas 300.000 gafas de acetato al año en todos los estilos — <Link href="/es/productos/wayfarer" className="text-primary-600 hover:underline">wayfarers</Link>, <Link href="/es/productos/ojo-de-gato" className="text-primary-600 hover:underline">cat-eyes</Link>, <Link href="/es/productos/redondo" className="text-primary-600 hover:underline">redondas</Link>, cuadradas, browlines y formas personalizadas. Tenemos 12 máquinas CNC, 6 tambores de pulido y empleamos a 45 trabajadores de pulido a mano. Déjame explicarte exactamente cómo convertimos una plancha plana de acetato en un par de gafas terminado.
              </p>
            </div>
          </div>

          {/* Production Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Cómo Fabricamos las Gafas de Acetato</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              De plancha plana a montura terminada en 5-7 días. Aquí va cada paso — sin atajos, sin secretos.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Selección de Plancha y Corte CNC</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Todo empieza con la plancha de acetato — un bloque de material de aproximadamente 6mm de espesor en el color o patrón que hayas elegido. Cargamos la plancha en una fresadora CNC (control numérico por computadora) que corta la montura frontal y las patillas con especificaciones precisas. La CNC sigue el archivo CAD 3D de tu montura, cortando las ranuras de las lentes, la forma del puente y las cavidades de las bisagras en una sola operación. Un operador CNC cualificado puede cortar unas 40-50 monturas frontales por hora. En esta etapa, la montura está tosca — puedes ver las marcas del mecanizado y los bordes están afilados.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tamboreado (3-5 Días)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este es el paso que sorprende a la gente — las monturas van a un tambor rotatorio lleno de virutas de madera, piedra pómez y una pequeña cantidad de agua. El tambor gira lentamente durante 3-5 días, y la fricción gradualmente suaviza todas las marcas del mecanizado y redondea los bordes. Es esencialmente un proceso de lijado muy lento y muy suave. No puedes acelerarlo. Lo hemos intentado. Si acortas el tamboreado, la superficie no está lo suficientemente suave para que el pulido final quede bien. Diferentes patrones requieren diferentes medios de tamboreado — por ejemplo, el acetato cristal transparente necesita medios más finos para evitar micro-rayaduras.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pulido a Mano (20-30 Minutos por Par)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aquí es donde ocurre la magia y de donde viene la mayor parte del costo. Un trabajador cualificado toma cada montura y la pule a mano contra una serie de ruedas de algodón para pulir, usando compuestos de pulido progresivamente más finos. La primera rueda elimina las marcas de tamboreado restantes. La segunda genera un semi-brillo. La tercera y última rueda produce ese brillo profundo de cristal líquido que hace que las monturas de acetato se vean tan premium. Nuestros trabajadores de pulido tienen una media de 6 años de experiencia — se necesita aproximadamente un año de formación antes de que alguien pueda pulir consistentemente a nuestro estándar. Este es el paso que las monturas de plástico de mercado masivo se saltan por completo, y es la razón por la que las monturas de acetato se ven y se sienten fundamentalmente diferentes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ensamblaje de Bisagras y Montaje de Lentes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Insertamos las bisagras (típicamente de acero inoxidable de 5 barriles con hilo de alma personalizado para tu logo), fijamos las patillas y montamos las lentes. Para monturas de acetato, las lentes se cortan para coincidir con la forma de la ranura y se insertan calentando suavemente la montura a unos 60°C, lo que hace que el acetato sea lo suficientemente flexible para aceptar la lente sin agrietamiento por estrés. Cada bisagra se prueba para acción suave y tensión adecuada. La alineación de las patillas se verifica para asegurar que la montura se asiente nivelada en una superficie plana.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Control de Calidad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cada par pasa por una inspección de 15 puntos: alineación de lentes, tensión de bisagra, simetría de patillas, acabado de superficie (comprobando rayaduras, picaduras o pulido desigual), consistencia de color, verificación de protección UV (probada con espectrómetro UV) y mediciones físicas contra la hoja de especificaciones. Nuestra tasa de rechazo en QC para monturas de acetato es de aproximadamente 3-5% — más alta que las monturas inyectadas (que rondan el 1-2%) porque los procesos manuales introducen más variabilidad. Los pares rechazados vuelven para re-pulido o se descartan por completo. No enviamos segundas calidades.
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
                    <span>Profundidad de color y consistencia de patrón superiores — especialmente en patrones complejos multicapa</span>
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
                    <span>&ldquo;Fabricado con acetato italiano&rdquo; es una declaración de marketing legítima que resuena con compradores premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>30-40% más caro que acetato chino equivalente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Plazos de entrega más largos para colores personalizados (6-8 semanas desde pedido hasta entrega de plancha)</span>
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
                    <span>Excelente calidad de productores de primera línea — genuinamente bueno, no un compromiso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>30-40% menos costo por kilogramo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Plazo más rápido para colores personalizados (3-4 semanas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>MOQ de plancha más bajo para colores personalizados (50kg vs 100kg para italiano)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Los patrones complejos (carey multicapa) pueden tener distribución ligeramente menos consistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Sin historia de marketing &ldquo;italiano&rdquo; (aunque &ldquo;acetato de celulosa premium&rdquo; sigue funcionando)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Mejor para: Retail $40-80</div>
              </div>
            </div>

            <p className="text-gray-500 text-center mt-8 text-sm">
              Mi recomendación: empieza con acetato chino para validar tus diseños y puntos de precio. Cambia a italiano para tus productos estrella una vez que hayas confirmado la demanda. Muchas marcas exitosas usan ambos — italiano para su línea insignia, chino para su colección diaria.
            </p>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Gafas de Sol de Acetato al por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Colección de Acetato</h2>
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
                      ['Material de Montura', 'Acetato de celulosa — Italiano (Mazzucchelli/Lapo) o chino premium'],
                      ['Peso de Montura', '25-35g dependiendo del tamaño y grosor de la montura'],
                      ['Grosor de Plancha', '5mm / 6mm / 8mm (más común: 6mm)'],
                      ['Patrones Disponibles', '200+ colores en stock: sólido, carey, cristal, mármol, degradado, cuerno, veta de madera, laminado'],
                      ['Colores Personalizados', 'Coincidencia Pantone disponible — MOQ de plancha 50kg (chino) / 100kg (italiano)'],
                      ['Material de Lente', 'Policarbonato / TAC Polarizado / CR-39 Óptico / Cristal'],
                      ['Ancho de Lente', '48mm - 58mm (varía según estilo de montura)'],
                      ['Ancho de Puente', '16mm - 22mm'],
                      ['Largo de Patilla', '140mm / 145mm / 150mm'],
                      ['Bisagras', 'Acero inoxidable de 5 barriles estándar / bisagras de muelle opcionales (+$0.30/par)'],
                      ['Protección UV', 'UV400 — bloquea el 100% de radiación UVA y UVB'],
                      ['Proceso de Producción', 'Corte CNC → tamboreado (3-5 días) → pulido a mano (20-30 min) → ensamblaje → QC'],
                      ['Certificaciones', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 unidades por modelo — mezcla de colores permitida / 300 uds para formas personalizadas'],
                      ['Tarifa de Molde (Forma Personalizada)', '$800 - $1.500 único — exento en pedidos superiores a 1.000 uds'],
                      ['Tiempo de Muestra', '5-7 días hábiles'],
                      ['Tiempo de Producción', '20-28 días estándar / 14-18 días urgente (+15%)'],
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

          {/* Color and Pattern Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Colores y Patrones</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Aquí es donde el acetato realmente brilla comparado con otros materiales. La gama de colores y patrones que puedes conseguir es esencialmente ilimitada.
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
                <p className="text-sm text-gray-600">Se consigue laminando y prensando planchas de acetato de diferentes colores. Mármol blanco, mármol negro, jade verde, ónix rosa. Cada par tiene patrones de remolino ligeramente diferentes — cada montura es única.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🌅 Degradado / Bicolor</h3>
                <p className="text-sm text-gray-600">Oscuro arriba, claro abajo (o de lado a lado). Negro a transparente, marrón a miel, azul marino a azul cielo, vino a rosa. Se crea laminando dos planchas de acetato en diferentes proporciones de espesor.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🎨 Colores Sólidos</h3>
                <p className="text-sm text-gray-600">Negro mate, negro brillante, azul marino, verde bosque, burdeos, crema, rosa pastel, azul cielo — y todo lo intermedio. Coincidencia Pantone para colores personalizados. La profundidad del pulido en acetato sólido es impresionante.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🦌 Efecto Cuerno y Madera</h3>
                <p className="text-sm text-gray-600">Patrones de acetato que imitan cuerno de búfalo natural o veta de madera. Populares en mercados japonés y coreano. Cada par se ve único debido a la variación natural en el patrón de la plancha de acetato.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Personalización</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Las monturas de acetato ofrecen la mayor gama de personalización de cualquier material de montura. Esto es lo que podemos hacer.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estampado en caliente</strong> — lámina dorada, plateada o de color en el interior de la patilla. Clásico, elegante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>En relieve/bajo relieve</strong> — prensado en la superficie del acetato. Sutil y permanente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hilo de alma personalizado</strong> — tu logo grabado a láser en el alambre metálico de la bisagra, visible cuando la patilla se despliega.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica en patilla</strong> — placa de logo en aleación de zinc o acero inoxidable remachada a la patilla.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📐 Diseño de Montura</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Formas personalizadas</strong> — envíanos un boceto o archivo CAD y cortaremos un molde CNC ($800-1.500 único)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Ancho de patilla</strong> — fina (4mm) para look minimal, gruesa (6-8mm) para declaración atrevida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Puente keyhole vs silla</strong> — diferentes estilos de puente nasal para diferentes formas de cara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estilo de punta de patilla</strong> — recta, curvada o tipo pala</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Empaque</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches de piel</strong> — cierre magnético, logo en bajo relieve. La opción premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches rígidos EVA</strong> — duraderos, ligeros, impresión de logo a todo color.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bolsa de microfibra</strong> — impresa personalizada, sirve también como paño de limpieza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cajas listas para retail</strong> — impresión a todo color, inserto personalizado, pestaña colgante, etiqueta con código de barras.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Acetate */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el Acetato Tiene Precio Premium</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Las monturas de acetato se venden a $60-200+. Aquí está por qué los clientes pagan ese premium — y por qué funciona para tus márgenes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">✋ Proceso Artesanal</h3>
                <p className="text-gray-300 text-sm">Cada par es tocado por manos humanas múltiples veces. En un mundo de producción masiva, eso importa. Los clientes pueden sentir la diferencia — y pagarán por ella. &ldquo;Pulido a mano&rdquo; es una declaración de marketing genuina que resuena.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🎨 Profundidad de Color</h3>
                <p className="text-gray-300 text-sm">Los colores del acetato están en capas a través del material, no pintados en la superficie. Un patrón carey tiene profundidad real — puedes ver diferentes capas desde diferentes ángulos. Esto es físicamente imposible con plástico inyectado.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">⚖️ Calidad Percibida</h3>
                <p className="text-gray-300 text-sm">El peso (25-35g), la calidez del material contra la piel, la profundidad del pulido — todo en el acetato comunica calidad. Tu cliente lo coge y sabe que esto no es un par de gafas de $15.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🌿 Origen Natural</h3>
                <p className="text-gray-300 text-sm">El acetato de celulosa se deriva de fibras de algodón y pulpa de madera — es un material de origen vegetal, no derivado del petróleo. Eso importa cada vez más a los consumidores eco-conscientes y te da un ángulo de sostenibilidad.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🔧 Ajustabilidad</h3>
                <p className="text-gray-300 text-sm">El acetato puede ser ajustado por cualquier óptico con calor suave. La montura puede remodelarse para un ajuste personalizado. Intenta eso con nylon inyectado — se rompe. Esta ajustabilidad extiende la vida útil del producto y reduce devoluciones.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">💰 Matemática de Márgenes</h3>
                <p className="text-gray-300 text-sm">Una montura de acetato cuesta $6-16 por par de producir. Se vende al retail a $60-200. Eso es un margen de 4-12x — mejor que la mayoría de productos de consumo. Incluso después de contabilizar marketing, empaque y distribución, los márgenes en gafas de acetato son excelentes.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes sobre Gafas de Acetato</h2>
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
            <h2 className="text-3xl font-bold text-center mb-10">Productos Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/es/productos/ojo-de-gato" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😸</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Cat-Eye</h3>
                <p className="text-gray-600 text-sm">Nuestro estilo de acetato más popular para marcas de mujer. Disponible en todos los colores y patrones de acetato.</p>
              </Link>
              <Link href="/es/productos/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Wayfarer</h3>
                <p className="text-gray-600 text-sm">La forma de acetato más vendida a nivel mundial. Clásica, versátil, y el primer producto más seguro para nuevas marcas.</p>
              </Link>
              <Link href="/es/productos/redondo" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Redondas</h3>
                <p className="text-gray-600 text-sm">Redondas de inspiración vintage en cristal, carey y acetato sólido. En fuerte tendencia en mercados asiáticos.</p>
              </Link>
              <Link href="/es/blog/oem-vs-odm" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Guía OEM vs ODM</h3>
                <p className="text-gray-600 text-sm">¿No sabes si usar nuestros diseños existentes o crear los tuyos propios? Esta guía desglosa los pros, contras y costos.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Listo para Crear Tu Colección de Acetato?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Envíanos tus ideas de montura, preferencias de color y punto de precio objetivo. Te recomendaremos el grado de acetato adecuado, te enviaremos muestras de material y tendrás muestras en tus manos en una semana. Acetato italiano o chino — te ayudaremos a tomar la decisión correcta.
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
