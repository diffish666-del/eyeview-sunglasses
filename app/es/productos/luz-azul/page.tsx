import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gafas con Filtro de Luz Azul al Por Mayor | Fabricante de Gafas para Computadora - EyeView',
  description: 'Fabricante de gafas con filtro de luz azul al por mayor. Gafas para computadora, gafas gaming para alivio de fatiga visual digital. Opciones de lentes transparentes y ámbar. MOQ 100 pzas. OEM/ODM directo de fábrica.',
  keywords: 'gafas luz azul al por mayor, fabricante gafas para computadora, gafas gaming al por mayor, gafas filtro luz azul, gafas protección de pantalla, gafas anti luz azul a granel, gafas fatiga visual digital',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/productos/luz-azul/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/blue-light/',
      'es': 'https://eyeviewsunglasses.com/es/productos/luz-azul/',
    },
  },
}

const products = [
  {
    name: 'Bloqueador de Luz Azul Clásico',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$6.00 - $10.00',
    moq: '100 pzas',
    description: 'Aspecto limpio y profesional con lentes transparentes que filtran la luz azul sin ningún tinte visible. Tus clientes pueden usarlas en reuniones, en videollamadas de Zoom, o en su escritorio todo el día sin parecer que llevan gafas "especiales." Este es nuestro modelo de luz azul más vendido — supera en ventas a todo lo demás en esta categoría 3 a 1 porque parece gafas normales.',
  },
  {
    name: 'Gafas de Luz Azul Gaming',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$7.00 - $11.00',
    moq: '100 pzas',
    description: 'Diseñadas para el público gamer. Las lentes con tinte ámbar bloquean más luz azul que las versiones transparentes (60-90% vs 30-40%), y los gamers en realidad prefieren el tinte cálido — mejora el contraste en entornos de juego oscuros y reduce la dureza de los destellos brillantes. Armazón ligero con almohadillas nasales de goma para esas sesiones de 6 horas de Valorant. Un equipo de esports en Corea ordenó 200 pares como equipamiento del equipo.',
  },
  {
    name: 'Bloqueador de Luz Azul Lente Transparente',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$6.50 - $10.50',
    moq: '100 pzas',
    description: 'La opción sigilosa. Estas lentes tienen un recubrimiento sutil de luz azul que es casi invisible — solo un leve reflejo cuando la luz incide en el ángulo correcto. Sin tinte amarillo en absoluto. Diseñadas para personas que quieren protección pero no quieren que nadie sepa que llevan gafas de luz azul. Populares entre profesionales, abogados, ejecutivos — el público de "yo no uso gafas de moda."',
  },
  {
    name: 'Aviador con Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pzas',
    description: '¿Quién dijo que las gafas para computadora tienen que verse aburridas? Este armazón aviador con lentes de luz azul trae estilo a la protección de pantalla. El armazón metálico se ve elegante, las lentes transparentes filtran la luz azul, y el efecto general es "piloto cool que también se preocupa por la salud visual." Ideal para clientes que ya tienen gafas de sol aviador y quieren un par de interiores a juego.',
  },
  {
    name: 'Wayfarer con Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.50',
    moq: '100 pzas',
    description: 'La forma wayfarer en versión luz azul. Armazón de acetato, aspecto profesional, protección genuina de pantalla. Este es el armazón que recomendamos para programas de regalos corporativos — las empresas compran de 50 a 500 pares con su logotipo en la patilla para paquetes de bienestar laboral. Una empresa de tecnología en Bangalore ordenó 1,200 pares para todo su equipo de ingeniería.',
  },
  {
    name: 'Gafas de Luz Azul para Niños',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$5.50 - $9.00',
    moq: '100 pzas',
    description: 'Los niños pasan horas en tabletas, teléfonos y laptops — para la escuela, para juegos, para YouTube. Los padres se preocupan por eso. Estas gafas les dan una solución. Armazones flexibles dimensionados para edades 5-12, materiales libres de BPA, y lentes con filtro de luz azul. Escuelas en tres países han adoptado estas para sus programas de laboratorio de computación. La tranquilidad de un padre preocupado, desde $5.50.',
  },
]

export default function BlueLightPageEs() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hover:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/es/productos" className="hover:text-primary-600">Productos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Gafas de Luz Azul</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gafas con Filtro de Luz Azul al Por Mayor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siete horas. Eso es lo que el adulto promedio mira una pantalla cada día. Ojos secos,
            dolores de cabeza, problemas para dormir — ¿te suena familiar? Las gafas de luz azul
            son la categoría de mayor crecimiento en gafas, y las fabricamos para marcas en más de
            40 países. Lentes transparentes, lentes ámbar, armazones de moda, tallas infantiles. MOQ 100 piezas.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Gafas con Filtro de Luz Azul al Por Mayor - Colección de Gafas para Computadora"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* What Blue Light Does */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">¿Qué le Hace Realmente la Luz Azul a Tus Ojos?</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              La luz azul está en todas partes. El sol la produce. Tu teléfono la produce. Tu
              laptop, tu televisor, tus fluorescentes de oficina — todos bombardean tus ojos
              con luz azul todo el día. Y aquí está la cuestión: nuestros ojos no son buenos
              bloqueándola. La luz azul (longitudes de onda entre 380-500nm) pasa directamente
              a través de la córnea y el cristalino para golpear la retina directamente.
            </p>
            <p>
              La <a href="https://www.aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Academia Americana de Oftalmología</a> señala
              que la fatiga visual digital afecta aproximadamente al 65% de los adultos que usan
              pantallas regularmente. Los síntomas incluyen ojos secos, visión borrosa, dolores de
              cabeza y dolor de cuello/hombros. Pero el problema del sueño podría ser el más grave —
              la luz azul suprime la producción de melatonina, la hormona que le dice a tu cerebro
              &quot;hora de dormir.&quot; Mira tu teléfono a las 11pm y tu cerebro piensa que es
              mediodía. No es de extrañar que la gente no pueda dormirse.
            </p>
            <p>
              Por eso las gafas de luz azul han explotado. No son un dispositivo médico y no hacemos
              afirmaciones médicas — pero millones de personas reportan menos fatiga visual, menos
              dolores de cabeza y mejor sueño al usarlas durante el tiempo de pantalla. Se proyecta
              que el mercado alcance los $4.5 mil millones globalmente para 2026, según investigaciones
              de la industria. La <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA</a> regula
              las gafas de sol y gafas como dispositivos médicos, y todas nuestras gafas de luz azul
              cumplen sus estándares. Para compradores al por mayor, esta es una de las categorías de
              mayor crecimiento en gafas en este momento.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Gafas con Filtro de Luz Azul al Por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Colección de Luz Azul</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} al Por Mayor - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Tecnología de filtrado de luz azul</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Recubrimiento antirreflejante</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personalizado disponible</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/es/contacto" className="btn-primary w-full block text-center">Solicitar Cotización</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lens Options */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transparente vs. Ámbar — ¿Qué Lente Deberías Tener en Stock?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔍 Lentes Transparentes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sin tinte visible. La protección está en el recubrimiento, no en el color. Son
                perfectas para personas que necesitan ver colores precisos — diseñadores, fotógrafos,
                editores de video — y cualquiera que no quiera explicar por qué sus gafas se ven
                amarillas. Bloquean 30-40% de la luz azul en el rango de 415-455nm (las longitudes
                de onda más dañinas). Esto es lo que se vende en entornos de oficina y profesionales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Protección invisible — sin tinte</li>
                <li>• Precisión real de color mantenida</li>
                <li>• Bloquea 30-40% de luz azul dañina</li>
                <li>• Mejor para: oficina, diseño, uso profesional</li>
                <li>• 70% de nuestros pedidos de luz azul son transparentes</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🟡 Lentes Ámbar / Amarillas</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tinte cálido visible. Bloquean significativamente más luz azul — 60-90% dependiendo
                de la profundidad del tinte. El color ámbar filtra las frecuencias azules duras y
                crea una experiencia visual más cálida y confortable. A los gamers les encanta. A
                las personas que usan pantallas de noche les encanta. El contraste mejorado es una
                ventaja genuina para gaming y lectura en condiciones de poca luz.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tinte ámbar visible — tono cálido</li>
                <li>• Bloquea 60-90% de luz azul</li>
                <li>• Contraste mejorado para gaming</li>
                <li>• Mejor para: gaming, uso nocturno, lectura</li>
                <li>• Crecimiento rápido — especialmente en mercado gaming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blue Light Technology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Cómo Funciona el Bloqueo de Luz Azul</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🔬 Método de Recubrimiento (Lentes Transparentes)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Se aplica un recubrimiento antirreflejante multicapa a la superficie de la lente. Una
                  de estas capas está específicamente ajustada para reflejar las longitudes de onda de
                  luz azul (415-455nm) lejos del ojo. Puedes verlo funcionando — inclina la lente y
                  notarás un leve reflejo azul-púrpura. Esa es la luz azul rebotando en vez de
                  atravesar.
                </p>
                <p className="text-sm text-gray-500">Mejor para: uso profesional, trabajo con color preciso</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🧪 Método de Sustrato (Lentes Ámbar)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  El material bloqueador de azul se mezcla directamente en la resina de la lente durante
                  la fabricación. Esto crea una lente que absorbe la luz azul en todo su espesor — no
                  solo en la superficie. El resultado es un filtrado de luz azul más fuerte y un tinte
                  ámbar visible. Como el filtrado está en el material de la lente mismo, no puede
                  desgastarse ni rayarse.
                </p>
                <p className="text-sm text-gray-500">Mejor para: gaming, tiempo de pantalla nocturno, máximo filtrado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Los Números No Mienten</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="$4.5B" label="Mercado global para 2026" />
            <StatCard number="12%" label="Tasa de crecimiento anual" />
            <StatCard number="7hrs+" label="Tiempo de pantalla diario promedio" />
            <StatCard number="65%" label="Adultos reportan fatiga visual" />
          </div>
          <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
            Las gafas de luz azul no son una moda pasajera — el tiempo de pantalla solo va en aumento.
            Trabajo remoto, aprendizaje en línea, gaming móvil, streaming... el mercado sigue creciendo
            porque el problema sigue creciendo.
          </p>
        </section>

        {/* Who Buys These */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">¿Quién Compra Gafas de Luz Azul?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TargetCard icon="👨‍💼" title="Oficinistas" desc="El segmento más grande. 8 horas de tiempo de pantalla por día, todos los días." />
            <TargetCard icon="🎮" title="Gamers" desc="Sesiones maratónicas de gaming. Las lentes ámbar son prácticamente equipo estándar ahora." />
            <TargetCard icon="📱" title="Estudiantes" desc="Clases en línea, tareas en laptop, luego tiempo de teléfono. Pantallas sin parar." />
            <TargetCard icon="👶" title="Niños" desc="Tabletas para la escuela, YouTube después de la escuela. Los padres quieren protección." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <TargetCard icon="🏢" title="Regalos Corporativos" desc="Las empresas compran 50-1000 pares para programas de bienestar laboral." />
            <TargetCard icon="🎓" title="Escuelas" desc="Laboratorios de computación adoptando gafas de luz azul para estudiantes." />
            <TargetCard icon="💻" title="Trabajadores Remotos" desc="Esenciales para la oficina en casa. Gran crecimiento post-2020." />
            <TargetCard icon="📖" title="Lectores" desc="Usuarios de e-readers y tabletas que leen por horas en la noche." />
          </div>
        </section>

        {/* Prescription Option */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Opción Lista para Prescripción</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Aquí hay una gran oportunidad que la mayoría de los compradores al por mayor pasan por alto:
              gafas de luz azul con prescripción. Aproximadamente el 75% de los adultos necesitan alguna
              forma de corrección visual. Eso significa que el 75% de los clientes potenciales de luz
              azul también necesitan lentes con prescripción. Fabricamos todos nuestros armazones de
              luz azul listos para Rx — los enviamos con lentes de demostración para que las ópticas
              puedan instalar prescripciones personalizadas. Monofocal, bifocal, progresivo — todos
              compatibles.
            </p>
            <p>
              El margen en las gafas de luz azul con prescripción es incluso mejor que las planas (sin
              prescripción). Una óptica puede cobrar $80-150 por un par de gafas de luz azul con
              prescripción que les cuesta $8-12 al por mayor por el armazón. Agrega una lente con
              prescripción de $15-25 de su laboratorio, y están viendo márgenes de 3-5x. Es una
              excelente venta adicional para cualquier óptica que ya tenga nuestros armazones.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Productos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/es/productos/redondo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Redondas con Luz Azul</h3>
              <p className="text-sm text-gray-600">Armazones redondos vintage con lentes de luz azul</p>
            </Link>
            <Link href="/es/productos/ninos" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Gafas para Niños</h3>
              <p className="text-sm text-gray-600">Colección completa de gafas infantiles con protección UV</p>
            </Link>
            <Link href="/es/productos/ojo-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Ojo de Gato con Luz Azul</h3>
              <p className="text-sm text-gray-600">Armazones ojo de gato de moda con protección de pantalla</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas sobre Luz Azul — Sin Tecnicismos</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿Las gafas de luz azul realmente funcionan?"
              answer="Aquí va la respuesta honesta: la ciencia aún debate si la luz azul en sí causa daño ocular a largo plazo. Lo que SÍ está bien documentado es que el uso prolongado de pantallas causa fatiga visual digital — ojos secos, dolores de cabeza, visión borrosa. Muchos usuarios reportan alivio genuino al usar gafas de luz azul. El beneficio para el sueño tiene evidencia más fuerte — la luz azul suprime la melatonina, y filtrarla por la noche puede ayudarte a dormirte más rápido. No hacemos afirmaciones médicas. Dejamos que los clientes las prueben y decidan por sí mismos. La tasa de recompra habla por sí sola."
            />
            <FaqItem
              question="Lentes transparentes o ámbar — ¿qué debería tener en stock?"
              answer="Ambas, idealmente. Pero si solo puedes elegir una, ve por transparentes. Las lentes transparentes representan aproximadamente el 70% de nuestros pedidos de luz azul porque parecen gafas normales y no alteran los colores. Las lentes ámbar son las favoritas de los gamers (filtrado más fuerte, contraste mejorado) y se venden bien en tiendas de gaming y para usuarios de pantalla nocturnos. Consejo profesional: ten transparentes para retail general, ámbar para audiencias gaming/tech."
            />
            <FaqItem
              question="¿Cuánta luz azul bloquean realmente?"
              answer="Las lentes transparentes bloquean 30-40% de la luz azul en el rango de 415-455nm (las longitudes de onda potencialmente más dañinas). Las lentes ámbar bloquean 60-90% dependiendo de la profundidad del tinte. Proporcionamos informes de transmisión espectral con pedidos a granel para que puedas mostrar a los clientes exactamente lo que están obteniendo. Sin afirmaciones vagas de 'bloquea luz azul' — números reales, datos de prueba reales."
            />
            <FaqItem
              question="¿Se pueden combinar con lentes de prescripción?"
              answer="Absolutamente — ¡y deberías! Aproximadamente el 75% de los adultos necesitan corrección visual, así que los armazones de luz azul listos para Rx son un mercado enorme. Todos nuestros armazones se envían con lentes de demostración que las ópticas pueden reemplazar con lentes de luz azul con prescripción. Funciona con monofocal, bifocal y progresivo. El margen en gafas de luz azul con prescripción es sobresaliente — $80-150 al detalle en un armazón de $10 al por mayor."
            />
            <FaqItem
              question="¿Cuál es la mejor manera de vender gafas de luz azul?"
              answer="La demostración definitiva: pon un par a tu cliente y haz que mire su teléfono durante 30 segundos. Luego quítaselas. La mayoría de la gente nota inmediatamente la diferencia — la pantalla se ve más dura sin ellas. Ese momento de 'ahá' cierra la venta. Para tiendas en línea, enfócate en el problema (dolores de cabeza, ojos secos, mal sueño) y la solución. Los programas de regalos corporativos también son masivos — las empresas compran cientos de pares para bienestar laboral. Podemos personalizar con logotipos de empresa."
            />
            <FaqItem
              question="¿Cuál es el MOQ y tiempo de entrega?"
              answer="100 piezas por estilo y color. Artículos en stock se envían en 3-5 días. Pedidos personalizados con tu logotipo y branding toman 15-25 días. También hacemos empaques de regalo corporativo — cajas personalizadas con el nombre de tu empresa, paños de microfibra con marca, todo incluido. Una startup de tecnología ordenó 500 pares en empaque personalizado como regalos de bienvenida para nuevos empleados. Les costó aproximadamente $9 por par todo incluido. ¿Valor al detalle del regalo percibido? $30-40 fácilmente."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">El Mercado que Sigue Creciendo</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            El tiempo de pantalla no va a bajar. El trabajo remoto no se va a ir. El gaming solo
            se hace más grande. Las gafas de luz azul son una de las apuestas más seguras en gafas
            en este momento. Obtén muestras, pruébalas tú mismo, y descubre por qué esta categoría
            convierte tan bien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="btn-primary">Obtener Catálogo de Luz Azul</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Gafas de Luz Azul", "item": "https://eyeviewglasses.com/es/productos/luz-azul" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Las gafas de luz azul realmente funcionan?",
            "acceptedAnswer": { "@type": "Answer", "text": "La ciencia sobre el daño a largo plazo de la luz azul aún se debate, pero el alivio de la fatiga visual digital está bien documentado. Muchos usuarios reportan menos fatiga ocular, menos dolores de cabeza y mejor sueño. El beneficio para el sueño tiene evidencia más fuerte — la luz azul suprime la producción de melatonina." }
          },
          {
            "@type": "Question",
            "name": "Lentes transparentes o ámbar — ¿qué debería tener en stock?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ambas idealmente, pero las lentes transparentes representan el 70% de los pedidos. Parecen gafas normales y no alteran los colores. Las lentes ámbar son populares entre gamers por su filtrado más fuerte y contraste mejorado." }
          },
          {
            "@type": "Question",
            "name": "¿Cuánta luz azul bloquean estas gafas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las lentes transparentes bloquean 30-40% de la luz azul en el rango de 415-455nm. Las lentes ámbar bloquean 60-90% dependiendo de la profundidad del tinte. Proporcionamos informes de transmisión espectral con pedidos a granel." }
          },
          {
            "@type": "Question",
            "name": "¿Se pueden combinar las gafas de luz azul con lentes de prescripción?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — todos los armazones se envían listos para Rx con lentes de demostración. Aproximadamente el 75% de los adultos necesitan corrección visual, haciendo de las gafas de luz azul con prescripción un mercado enorme con márgenes sobresalientes." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la mejor manera de vender gafas de luz azul?",
            "acceptedAnswer": { "@type": "Answer", "text": "La demostración definitiva: haz que los clientes miren su teléfono con las gafas puestas, luego sin ellas. La diferencia se nota inmediatamente. Para tiendas en línea, enfócate en el problema (dolores de cabeza, ojos secos, mal sueño). Los programas de regalos corporativos también son un canal masivo." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es el MOQ y tiempo de entrega?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 piezas por estilo. Artículos en stock se envían en 3-5 días. Pedidos personalizados con logotipo y branding toman 15-25 días. Empaque de regalo corporativo disponible." }
          }
        ]
      })}} />
    </main>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function TargetCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
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
