import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos con Filtro de Luz Azul no Atacado | Fabricante de Óculos para Computadora - EyeView',
  description: 'Fabricante de óculos con filtro de luz azul no atacado. Óculos para computadora, óculos gaming para alivio de fatiga visual digital. Opciones de lentes transparentes y ámbar. MOQ 100 pçs. OEM/ODM direto de fábrica.',
  keywords: 'óculos luz azul no atacado, fabricante óculos para computadora, óculos gaming no atacado, óculos filtro luz azul, óculos proteção de pantalla, óculos anti luz azul a granel, óculos fatiga visual digital',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/luz-azul/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/blue-light/',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/luz-azul/',
    },
  },
}

const products = [
  {
    name: 'Bloqueador de Luz Azul Clásico',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$6.00 - $10.00',
    moq: '100 pçs',
    description: 'Aspecto limpio y profesional con lentes transparentes que filtran la luz azul sin ningún tinte visible. Tus clientes pueden usarlas en reuniones, en videollamadas de Zoom, o en su escritorio todo el día sin parecer que llevan óculos "especiales." Este es nosso modelo de luz azul más vendido — supera en ventas a todo lo demás en esta categoría 3 a 1 porque parece óculos normales.',
  },
  {
    name: 'Óculos de Luz Azul Gaming',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$7.00 - $11.00',
    moq: '100 pçs',
    description: 'Diseñadas para el público gamer. Las lentes con tinte ámbar bloquean más luz azul que las versiones transparentes (60-90% vs 30-40%), y los gamers en realidad prefieren el tinte cálido — mejora el contraste en entornos de juego oscuros y reduce la dureza de los destellos brillantes. Armação ligero con almofadas nasales de goma para esas sesiones de 6 horas de Valorant. Un equipo de esports en Corea ordenó 200 pares como equipamiento del equipo.',
  },
  {
    name: 'Bloqueador de Luz Azul Lente Transparente',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$6.50 - $10.50',
    moq: '100 pçs',
    description: 'La opción sigilosa. Estas lentes tienen un recubrimiento sutil de luz azul que es casi invisible — solo un leve reflejo cuando la luz incide en el ángulo correcto. Sin tinte amarillo en absoluto. Diseñadas para personas que quieren proteção pero no quieren que nadie sepa que llevan óculos de luz azul. Populares entre profesionales, abogados, ejecutivos — el público de "yo no uso óculos de moda."',
  },
  {
    name: 'Aviador con Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pçs',
    description: '¿Quién dijo que las óculos para computadora tienen que verse aburridas? Este armação aviador con lentes de luz azul trae estilo a la proteção de pantalla. El armação metálico se ve elegante, las lentes transparentes filtran la luz azul, y el efecto general es "piloto cool que também se preocupa por la salud visual." Ideal para clientes que ya tienen óculos de sol aviador y quieren un par de interiores a juego.',
  },
  {
    name: 'Wayfarer con Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.50',
    moq: '100 pçs',
    description: 'La forma wayfarer en versión luz azul. Armação de acetato, aspecto profesional, proteção genuina de pantalla. Este es el armação que recomendamos para programas de regalos corporativos — las empresas compran de 50 a 500 pares con su logotipo en la haste para paquetes de bienestar laboral. Una empresa de tecnología en Bangalore ordenó 1,200 pares para todo su equipo de ingeniería.',
  },
  {
    name: 'Óculos de Luz Azul para Crianças',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$5.50 - $9.00',
    moq: '100 pçs',
    description: 'Los crianças pasan horas en tabletas, teléfonos y laptops — para la escuela, para juegos, para YouTube. Los padres se preocupan por eso. Estas óculos les dan una solución. Armações flexibles dimensionados para edades 5-12, materiales libres de BPA, y lentes con filtro de luz azul. Escuelas en tres países han adoptado estas para sus programas de laboratorio de computación. La tranquilidad de un padre preocupado, a partir de $5.50.',
  },
]

export default function BlueLightPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Luz Azul</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos con Filtro de Luz Azul no Atacado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siete horas. Eso es lo que el adulto promedio mira una pantalla cada día. Ojos secos,
            dolores de cabeza, problemas para dormir — ¿te suena familiar? Las óculos de luz azul
            son la categoría de mayor crecimiento en óculos, y las fabricamos para marcas en mais de
            40 países. Lentes transparentes, lentes ámbar, armações de moda, tallas infantiles. MOQ 100 peças.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Óculos con Filtro de Luz Azul no Atacado - Coleção de Óculos para Computadora"
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
              con luz azul todo el día. Y aquí está la cuestión: nossos ojos no son buenos
              bloqueándola. La luz azul (longitudes de onda entre 380-500nm) pasa directamente
              a través de la córnea y el cristalino para golpear la retina directamente.
            </p>
            <p>
              La <a href="https://www.aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Academia Americana de Oftalmología</a> señala
              que la fatiga visual digital afecta aproximadamente al 65% de los adultos que usan
              pantallas regularmente. Los síntomas incluyen ojos secos, visión borrosa, dolores de
              cabeza y dolor de cuello/hombros. Pero el problema del sueño podría ser el más grave —
              la luz azul suprime la produção de melatonina, la hormona que le dice a tu cerebro
              &quot;hora de dormir.&quot; Mira tu teléfono a las 11pm y tu cerebro piensa que es
              mediodía. No es de extrañar que la gente no pueda dormirse.
            </p>
            <p>
              Por eso las óculos de luz azul han explotado. No son un dispositivo médico y no hacemos
              afirmaciones médicas — pero millones de personas reportan menos fatiga visual, menos
              dolores de cabeza y mejor sueño al usarlas durante el tiempo de pantalla. Se proyecta
              que el mercado alcance los $4.5 mil millones globalmente para 2026, según investigaciones
              de la industria. La <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA</a> regula
              las óculos de sol y óculos como dispositivos médicos, y todas nossas óculos de luz azul
              cumplen sus estándares. Para compradores no atacado, esta es una de las categorías de
              mayor crecimiento en óculos en este momento.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Óculos con Filtro de Luz Azul no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Coleção de Luz Azul</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} no Atacado - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Tecnología de filtrado de luz azul</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Recubrimiento antirreflejante</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personalizado disponível</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/pt/contato" className="btn-primary w-full block text-center">Solicitar Orçamento</Link>
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
                Sin tinte visible. La proteção está en el recubrimiento, no en el color. Son
                perfectas para personas que necesitan ver colores precisos — diseñadores, fotógrafos,
                editores de video — y cualquiera que no quiera explicar por qué sus óculos se ven
                amarillas. Bloquean 30-40% de la luz azul en el rango de 415-455nm (las longitudes
                de onda más dañinas). Esto es lo que se vende en entornos de oficina y profesionales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Proteção invisible — sin tinte</li>
                <li>• Precisión real de color mantenida</li>
                <li>• Bloquea 30-40% de luz azul dañina</li>
                <li>• Mejor para: oficina, design, uso profesional</li>
                <li>• 70% de nossos pedidos de luz azul son transparentes</li>
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
          <h2 className="text-3xl font-bold text-center mb-8">Como Funciona el Bloqueo de Luz Azul</h2>
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
                  la fabricação. Esto crea una lente que absorbe la luz azul en todo su espesor — no
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
            Las óculos de luz azul no son una moda pasajera — el tiempo de pantalla solo va en aumento.
            Trabajo remoto, aprendizaje en línea, gaming móvil, streaming... el mercado sigue creciendo
            porque el problema sigue creciendo.
          </p>
        </section>

        {/* Who Buys These */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">¿Quién Compra Óculos de Luz Azul?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TargetCard icon="👨‍💼" title="Oficinistas" desc="El segmento más grande. 8 horas de tiempo de pantalla por día, todos los dias." />
            <TargetCard icon="🎮" title="Gamers" desc="Sesiones maratónicas de gaming. Las lentes ámbar son prácticamente equipo estándar ahora." />
            <TargetCard icon="📱" title="Estudiantes" desc="Clases en línea, tareas en laptop, luego tiempo de teléfono. Pantallas sin parar." />
            <TargetCard icon="👶" title="Crianças" desc="Tabletas para la escuela, YouTube después de la escuela. Los padres quieren proteção." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <TargetCard icon="🏢" title="Regalos Corporativos" desc="Las empresas compran 50-1000 pares para programas de bienestar laboral." />
            <TargetCard icon="🎓" title="Escuelas" desc="Laboratorios de computación adoptando óculos de luz azul para estudiantes." />
            <TargetCard icon="💻" title="Trabajadores Remotos" desc="Esenciales para la oficina en casa. Gran crecimiento post-2020." />
            <TargetCard icon="📖" title="Lectores" desc="Usuarios de e-readers y tabletas que leen por horas en la noche." />
          </div>
        </section>

        {/* Prescription Option */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Opción Lista para Prescripción</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Aquí hay una gran oportunidad que la mayoría de los compradores no atacado pasan por alto:
              óculos de luz azul con prescripción. Aproximadamente el 75% de los adultos necesitan alguna
              forma de corrección visual. Eso significa que el 75% de los clientes potenciales de luz
              azul também necesitan lentes con prescripción. Fabricamos todos nossos armações de
              luz azul listos para Rx — los enviamos con lentes de demostración para que las ópticas
              puedan instalar prescripciones personalizadas. Monofocal, bifocal, progresivo — todos
              compatibles.
            </p>
            <p>
              El margen en las óculos de luz azul con prescripción es incluso mejor que las planas (sin
              prescripción). Una óptica puede cobrar $80-150 por un par de óculos de luz azul con
              prescripción que les cuesta $8-12 no atacado por el armação. Agrega una lente con
              prescripción de $15-25 de su laboratorio, y están viendo márgenes de 3-5x. Es una
              excelente venta adicional para cualquier óptica que ya tenga nossos armações.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produtos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/redondo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Redondos con Luz Azul</h3>
              <p className="text-sm text-gray-600">Armações redondos vintage con lentes de luz azul</p>
            </Link>
            <Link href="/pt/produtos/infantil" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Óculos para Crianças</h3>
              <p className="text-sm text-gray-600">Coleção completa de óculos infantiles con proteção UV</p>
            </Link>
            <Link href="/pt/produtos/olho-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Olho de Gato con Luz Azul</h3>
              <p className="text-sm text-gray-600">Armações olho de gato de moda con proteção de pantalla</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas sobre Luz Azul — Sin Tecnicismos</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿Las óculos de luz azul realmente funcionan?"
              answer="Aquí va la respuesta honesta: la ciencia aún debate si la luz azul en sí causa daño ocular a largo plazo. Lo que SÍ está bien documentado es que el uso prolongado de pantallas causa fatiga visual digital — ojos secos, dolores de cabeza, visión borrosa. Muchos usuarios reportan alivio genuino al usar óculos de luz azul. El beneficio para el sueño tiene evidencia más fuerte — la luz azul suprime la melatonina, y filtrarla por la noche puede ayudarte a dormirte más rápido. No hacemos afirmaciones médicas. Dejamos que los clientes las prueben y decidan por sí mismos. La tasa de recompra habla por sí sola."
            />
            <FaqItem
              question="Lentes transparentes o ámbar — ¿qué debería tener en stock?"
              answer="Ambas, idealmente. Pero si solo puedes elegir una, ve por transparentes. Las lentes transparentes representan aproximadamente el 70% de nossos pedidos de luz azul porque parecen óculos normales y no alteran los colores. Las lentes ámbar son las favoritas de los gamers (filtrado más fuerte, contraste mejorado) y se venden bien en tiendas de gaming y para usuarios de pantalla nocturnos. Consejo profesional: ten transparentes para retail general, ámbar para audiencias gaming/tech."
            />
            <FaqItem
              question="¿Cuánta luz azul bloquean realmente?"
              answer="Las lentes transparentes bloquean 30-40% de la luz azul en el rango de 415-455nm (las longitudes de onda potencialmente más dañinas). Las lentes ámbar bloquean 60-90% dependiendo de la profundidad del tinte. Proporcionamos informes de transmisión espectral con pedidos a granel para que puedas mostrar a los clientes exactamente lo que están obteniendo. Sin afirmaciones vagas de 'bloquea luz azul' — números reales, datos de prueba reales."
            />
            <FaqItem
              question="¿Se pueden combinar con lentes de prescripción?"
              answer="Absolutamente — ¡y deberías! Aproximadamente el 75% de los adultos necesitan corrección visual, así que los armações de luz azul listos para Rx son un mercado enorme. Todos nossos armações se envían con lentes de demostración que las ópticas pueden reemplazar con lentes de luz azul con prescripción. Funciona con monofocal, bifocal y progresivo. El margen en óculos de luz azul con prescripción es sobresaliente — $80-150 al detalle en un armação de $10 no atacado."
            />
            <FaqItem
              question="¿Cuál es la mejor manera de vender óculos de luz azul?"
              answer="La demostración definitiva: pon un par a tu cliente y haz que mire su teléfono durante 30 segundos. Luego quítaselas. La mayoría de la gente nota inmediatamente la diferencia — la pantalla se ve más dura sin ellas. Ese momento de 'ahá' cierra la venta. Para tiendas en línea, enfócate en el problema (dolores de cabeza, ojos secos, mal sueño) y la solución. Los programas de regalos corporativos também son masivos — las empresas compran cientos de pares para bienestar laboral. Podemos personalizar con logotipos de empresa."
            />
            <FaqItem
              question="¿Cuál es el MOQ y tiempo de entrega?"
              answer="100 peças por estilo y color. Artículos en stock se envían en 3-5 dias. Pedidos personalizados con tu logotipo y branding toman 15-25 dias. Também hacemos embalagems de regalo corporativo — cajas personalizadas con el nombre de tu empresa, panos de microfibra con marca, todo incluido. Una startup de tecnología ordenó 500 pares en embalagem personalizado como regalos de bienvenida para nuevos empleados. Les costó aproximadamente $9 por par todo incluido. ¿Valor al detalle del regalo percibido? $30-40 fácilmente."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">El Mercado que Sigue Creciendo</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            El tiempo de pantalla no va a bajar. El trabajo remoto no se va a ir. El gaming solo
            se hace más grande. Las óculos de luz azul son una de las apuestas más seguras en óculos
            en este momento. Obtén amostras, pruébalas tú mismo, y descubre por qué esta categoría
            convierte tan bien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Obter Catálogo de Luz Azul</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Óculos de Luz Azul", "item": "https://eyeviewglasses.com/pt/produtos/luz-azul" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Las óculos de luz azul realmente funcionan?",
            "acceptedAnswer": { "@type": "Answer", "text": "La ciencia sobre el daño a largo plazo de la luz azul aún se debate, pero el alivio de la fatiga visual digital está bien documentado. Muchos usuarios reportan menos fatiga ocular, menos dolores de cabeza y mejor sueño. El beneficio para el sueño tiene evidencia más fuerte — la luz azul suprime la produção de melatonina." }
          },
          {
            "@type": "Question",
            "name": "Lentes transparentes o ámbar — ¿qué debería tener en stock?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ambas idealmente, pero las lentes transparentes representan el 70% de los pedidos. Parecen óculos normales y no alteran los colores. Las lentes ámbar son populares entre gamers por su filtrado más fuerte y contraste mejorado." }
          },
          {
            "@type": "Question",
            "name": "¿Cuánta luz azul bloquean estas óculos?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las lentes transparentes bloquean 30-40% de la luz azul en el rango de 415-455nm. Las lentes ámbar bloquean 60-90% dependiendo de la profundidad del tinte. Proporcionamos informes de transmisión espectral con pedidos a granel." }
          },
          {
            "@type": "Question",
            "name": "¿Se pueden combinar las óculos de luz azul con lentes de prescripción?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — todos los armações se envían listos para Rx con lentes de demostración. Aproximadamente el 75% de los adultos necesitan corrección visual, haciendo de las óculos de luz azul con prescripción un mercado enorme con márgenes sobresalientes." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la mejor manera de vender óculos de luz azul?",
            "acceptedAnswer": { "@type": "Answer", "text": "La demostración definitiva: haz que los clientes miren su teléfono con las óculos puestas, luego sin ellas. La diferencia se nota inmediatamente. Para tiendas en línea, enfócate en el problema (dolores de cabeza, ojos secos, mal sueño). Los programas de regalos corporativos também son un canal masivo." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es el MOQ y tiempo de entrega?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 peças por estilo. Artículos en stock se envían en 3-5 dias. Pedidos personalizados con logotipo y branding toman 15-25 dias. Embalagem de regalo corporativo disponível." }
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
