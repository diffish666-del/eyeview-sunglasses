import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes Anti Lumière Bleue en Gros | Fabricant de Lunettes Écran - EyeView',
  description: 'Fabricant de lunettes anti lumière bleue en gros. Lunettes ordinateur, lunettes gaming pour soulager la fatigue visuelle numérique. Options verres clairs et ambrés. MOQ 100 pcs. OEM/ODM direct usine.',
  keywords: 'lunettes lumière bleue en gros, fabricant lunettes ordinateur, lunettes gaming en gros, lunettes anti lumière bleue, lunettes protection écran, lunettes anti lumière bleue en gros, lunettes fatigue visuelle numérique',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/lumiere-bleue/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/blue-light/',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/lumiere-bleue/',
    },
  },
}

const products = [
  {
    name: 'Bloqueador de Luz Azul Clásico',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$6.00 - $10.00',
    moq: '100 pcs',
    description: 'Aspecto limpio et profesional avec verres transpaireentes qui filtran la luz bleu sin ningún tinte visible. Tus clients pueden usarlas en reuniones, en videollamadas de Zoom, ou en son escritorio todo el día sin paireecer qui llevan lunettes "especiales." Este est notre modelo de luz bleu plus vendido — supera en ventes a todo le deplus en esta catégorie 3 a 1 parce qui paireece lunettes normales.',
  },
  {
    name: 'Lunettes de Luz Azul Gaming',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    description: 'Diseñadas para el público gamer. Las verres avec tinte ambre bloquean plus luz bleu qui las voirsiones transpaireentes (60-90% vs 30-40%), et los gamers en realidad prefieren el tinte cálido — meilleura el contraste en entornos de juego oscuros et reduce la dureza des destellos brillants. Armazón léger avec plaquettes nasales de goma para esas sesiones de 6 heures de Valorant. Un equipo de esports en Corea ordenó 200 paires comme equipamiento du equipo.',
  },
  {
    name: 'Bloqueador de Luz Azul Lente Transpaireente',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$6.50 - $10.50',
    moq: '100 pcs',
    description: 'La opción sigilosa. Estas verres tienen un revêtement sutil de luz bleu qui est casi invisible — solo un leve reflejo quand la luz incide dans le ángulo correcto. Sin tinte amarillo en absoluto. Diseñadas para personas quieren protection mais no quieren qui nadie sepa qui llevan lunettes de luz bleu. Populares entre profesionales, abogados, ejecutivos — el público de "yo no uso lunettes de moda."',
  },
  {
    name: 'Aviador avec Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Quién dijo qui las lunettes para computadora tienen qui voirse aburridas? Este monture aviador avec verres de luz bleu trae style à la protection de pantalla. El monture metálico se ve elegante, las verres transpaireentes filtran la luz bleu, et el efecto general est "piloto cool qui également se preocupa par la salud visual." Ideal para clients qui ya tienen lunettes de soleil aviador et quieren un paire de interiores a juego.',
  },
  {
    name: 'Wayfarer avec Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.50',
    moq: '100 pcs',
    description: 'La forma wayfarer en voirsión luz bleu. Armazón de acétate, aspecto profesional, protection genuina de pantalla. Este est el monture qui nous recommandons para programas de regalos corporativos — las entreprises achatn de 50 a 500 paires avec son logotipo dans la branche para paquetes de bienestar laboral. Una entreprise de tecnología en Bangalore ordenó 1,200 paires para todo son equipo de ingeniería.',
  },
  {
    name: 'Lunettes de Luz Azul para Enfants',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$5.50 - $9.00',
    moq: '100 pcs',
    description: 'Los enfants pasan heures en tabletas, teléfonos et laptops — para la escuela, para juegos, para YouTube. Los padres se preocupan par eso. Estas lunettes les dan une solution. Armazones flexibles dimensionados para edades 5-12, matériaux libres de BPA, et verres avec filtro de luz bleu. Escuelas en tres pays han adoptado estas para sus programas de laboratorio de computation. La tranquilidad de un padre preocupado, depuis $5.50.',
  },
]

export default function BlueLightPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes de Luz Azul</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes Anti Lumière Bleue en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siete heures. Eso est le qui el adulto promedio mira une pantalla chaque día. Ojos secos,
            dolores de cabeza, problemas para dormir — te suena familiar? Las lunettes de luz bleu
            sont la catégorie de mayor crecimiento en lunettes, et las nous fabriquons para marques en plus de
            40 pays. Voirres transpaireentes, verres ambre, montures de moda, tallas infantiles. MOQ 100 pièces.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl ovoirflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Lunettes Anti Lumière Bleue en Gros - Collection de Lunettes para Computadora"
            className="w-full h-96 object-covoir"
          />
        </div>

        {/* What Blue Light Does */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Qué le Hace Realmente la Luz Azul a Tus Ojos?</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              La luz bleu está en toutes pairetes. El sol la produce. Votre teléfono la produce. Tu
              laptop, votre televisor, vos fluorescentes de oficina — tous bombardean vos ojos
              avec luz bleu todo el día. Y ici está la cuestión: notres ojos no sont buenos
              bloqueándola. La luz bleu (longitudes de onda entre 380-500nm) pasa directamente
              a través de la córnea et el cristalino para golpear la retina directamente.
            </p>
            <p>
              La <a href="https://www.aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">Academia Americana de Oftalmología</a> signala
              qui la fatiga visual digital afecta aproximadamente au 65% des adultos qui usan
              pantallas regularmente. Los síntomas incluyen ojos secos, visión borrose, dolores de
              cabeza et dolor de cuello/hombros. Mais el problema du rêve podría ser el plus grave —
              la luz bleu suprime la production de melatonina, la hormona qui le dice a votre cerebro
              &quot;hora de dormir.&quot; Mira votre teléfono a las 11pm et votre cerebro piensa qui es
              mediodía. Non est de extrañar qui la gente no pueda dormirse.
            </p>
            <p>
              Por eso las lunettes de luz bleu han explotado. Non sont un dispositivo médico et no nous faisons
              afirmaciones médicas — mais millones de personas reportan menos fatiga visual, menos
              dolores de cabeza et meilleur rêve au usarlas durante el tiempo de pantalla. Se proyecta
              qui el marché alcance los $4.5 mil millones globalmente para 2026, según investigaciones
              de la industrie. La <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">FDA</a> regula
              las lunettes de soleil et lunettes comme dispositivos médicos, et toutes notres lunettes de luz bleu
              cumplen sus normees. Para achatdores en gros, esta est une des catégories de
              mayor crecimiento en lunettes en este momento.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Lunettes Anti Lumière Bleue en Gros" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Collection de Luz Azul</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video ovoirflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} en Gros - EyeView`}
                    className="w-full h-full object-covoir group-hovoir:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Tecnología de filtrado de luz bleu</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Recubrimiento antireflet</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personnalisé disponible</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/fr/contact" className="btn-primary w-full block text-center">Demander Devis</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lens Options */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transpaireente vs. Ámbar — Qué Lente Deberías Tener en Stock?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔍 Voirres Transpaireentes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sin tinte visible. La protection está dans le revêtement, no dans le couleur. Son
                perfectas para personas qui necesitan voir couleures precisos — diseñadores, fotógrafos,
                editores de video — et cualquiera qui no quiera explicar par qué sus lunettes se ven
                amarillas. Bloquean 30-40% de la luz bleu dans le rango de 415-455nm (las longitudes
                de onda plus dañinas). Esto est le qui se vende en entornos de oficina et profesionales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Protection invisible — sin tinte</li>
                <li>• Precisión real de couleur mantenida</li>
                <li>• Bloquea 30-40% de luz bleu dañina</li>
                <li>• Meilleur para: oficina, design, uso profesional</li>
                <li>• 70% de notres commandes de luz bleu sont transpaireentes</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🟡 Voirres Ámbar / Amarillas</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tinte cálido visible. Bloquean significativamente plus luz bleu — 60-90% dependiendo
                de la profundidad du tinte. El couleur ambre filtra las frecuencias bleues duras y
                crea une expérience visual plus cálida et confortable. A los gamers les encanta. A
                las personas qui usan pantallas de noche les encanta. El contraste meilleurado est una
                venteja genuina para gaming et lectura en condiciones de poca luz.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tinte ambre visible — tono cálido</li>
                <li>• Bloquea 60-90% de luz bleu</li>
                <li>• Contraste meilleurado para gaming</li>
                <li>• Meilleur para: gaming, uso nocturno, lectura</li>
                <li>• Crecimiento rápido — especialmente en marché gaming</li>
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
                <h3 className="text-lg font-semibold mb-4">🔬 Método de Recubrimiento (Voirres Transpaireentes)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Se aplica un revêtement antireflet multicapa à la superficie de la lente. Una
                  de estas capas está específicamente ajustada para reflejar las longitudes de onda de
                  luz bleu (415-455nm) lejos du ojo. Puedes voirlo funcionando — inclina la lente y
                  notarás un leve reflejo bleu-púrpura. Esa est la luz bleu rebotando en vez de
                  atravesar.
                </p>
                <p className="text-sm text-gray-500">Meilleur para: uso profesional, trabajo avec couleur preciso</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🧪 Método de Sustrato (Voirres Ámbar)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  El matériau bloqueador de bleu se mezcla directamente dans la resina de la lente durante
                  la fabrication. Esto crea une lente qui absorbe la luz bleu en todo son espoidsr — no
                  solo dans la superficie. El resultado est un filtrado de luz bleu plus fuerte et un tinte
                  ambre visible. Comme el filtrado está dans le matériau de la lente même, no puede
                  desgastarse ni rayarse.
                </p>
                <p className="text-sm text-gray-500">Meilleur para: gaming, tiempo de pantalla nocturno, máximo filtrado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Los Números Non Mienten</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="$4.5B" label="Marché global para 2026" />
            <StatCard number="12%" label="Tasa de crecimiento anual" />
            <StatCard number="7hrs+" label="Tiempo de pantalla diario promedio" />
            <StatCard number="65%" label="Adultos reportan fatiga visual" />
          </div>
          <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
            Las lunettes de luz bleu no sont une moda pasajera — el tiempo de pantalla solo va en aumento.
            Trabajo remoto, aprendizaje en gamme, gaming móvil, streaming... el marché sigue creciendo
            parce qui el problema sigue creciendo.
          </p>
        </section>

        {/* Who Buys These */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Quién Compra Lunettes de Luz Azul?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TargetCard icon="👨‍💼" title="Oficinistas" desc="El segmento plus grande. 8 heures de tiempo de pantalla par día, tous los jours." />
            <TargetCard icon="🎮" title="Gamers" desc="Sesiones maratónicas de gaming. Las verres ambre sont prácticamente equipo norme maintenant." />
            <TargetCard icon="📱" title="Estudiantes" desc="Clases en gamme, tareas en laptop, luego tiempo de teléfono. Pantallas sin parar." />
            <TargetCard icon="👶" title="Enfants" desc="Tabletas para la escuela, YouTube después de la escuela. Los padres quieren protection." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <TargetCard icon="🏢" title="Regalos Corporativos" desc="Las entreprises achatn 50-1000 paires para programas de bienestar laboral." />
            <TargetCard icon="🎓" title="Escuelas" desc="Laboratorios de computation adoptando lunettes de luz bleu para estudiantes." />
            <TargetCard icon="💻" title="Trabajadores Remotos" desc="Esenciales para la oficina en casa. Gran crecimiento post-2020." />
            <TargetCard icon="📖" title="Lectores" desc="Usuarios de e-readers et tabletas qui leen par heures dans la noche." />
          </div>
        </section>

        {/* Prescription Option */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Opción Lista para Prescripción</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Ici hay une gran oportunidad qui la mayoría des achatdores en gros pasan par alto:
              lunettes de luz bleu avec prescripción. Aproximadamente el 75% des adultos necesitan alguna
              forma de corrección visual. Eso significa qui el 75% des clients potenciales de luz
              bleu également necesitan verres avec prescripción. Fabricamos tous notres montures de
              luz bleu listos para Rx — los nous expédions avec verres de demostration para qui las ópticas
              puedan instalar prescripciones personnalisées. Monofocal, bifocal, progresivo — tous
              compatibles.
            </p>
            <p>
              El marge dans les lunettes de luz bleu avec prescripción est incluso meilleur qui las planas (sin
              prescripción). Una óptica puede cobrar $80-150 par un paire de lunettes de luz bleu con
              prescripción qui les cuesta $8-12 en gros par el monture. Agrega une lente con
              prescripción de $15-25 de son laboratorio, et están viendo marges de 3-5x. Es una
              excelente vente adicional para cualquier óptica qui ya tenga notres montures.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produits Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/rond" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Redondas avec Luz Azul</h3>
              <p className="text-sm text-gray-600">Armazones redondos vintage avec verres de luz bleu</p>
            </Link>
            <Link href="/fr/produits/enfants" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Lunettes para Enfants</h3>
              <p className="text-sm text-gray-600">Collection complète de lunettes infantiles avec protection UV</p>
            </Link>
            <Link href="/fr/produits/oeil-de-chat" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Ojo de Gato avec Luz Azul</h3>
              <p className="text-sm text-gray-600">Armazones ojo de gato de moda avec protection de pantalla</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas sur Luz Azul — Sin Tecnicismos</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Las lunettes de luz bleu realmente funcionan?"
              answer="Ici va la respuesta honesta: la ciencia aún debate si la luz bleu en sí causa dan ocular a largo plazo. Lo qui SÍ está bien documentado est qui el uso prolongado de pantallas causa fatiga visual digital — ojos secos, dolores de cabeza, visión borrose. Muchos usuarios reportan alivio genuino au usar lunettes de luz bleu. El beneficio para el rêve tiene evidencia plus fuerte — la luz bleu suprime la melatonina, et filtrarla par la noche puede ayudarte a dormirte plus rápido. Non nous faisons afirmaciones médicas. Dejamos qui los clients las prueben et decidan par sí mêmes. La tasa de reachat habla par sí sola."
            />
            <FaqItem
              question="Voirres transpaireentes ou ambre — qué debería tener en stock?"
              answer="Ambas, idealmente. Mais si solo puedes choisir una, ve par transpaireentes. Las verres transpaireentes representan aproximadamente el 70% de notres commandes de luz bleu parce qui paireecen lunettes normales et no alteran los couleures. Las verres ambre sont las favoritas des gamers (filtrado plus fuerte, contraste meilleurado) et se venden bien en boutiques de gaming et para usuarios de pantalla nocturnos. Consejo profesional: ten transpaireentes para retail general, ambre para audiencias gaming/tech."
            />
            <FaqItem
              question="Cuánta luz bleu bloquean realmente?"
              answer="Las verres transpaireentes bloquean 30-40% de la luz bleu dans le rango de 415-455nm (las longitudes de onda potencialmente plus dañinas). Las verres ambre bloquean 60-90% dependiendo de la profundidad du tinte. Proporcionamos informes de transmisión espectral avec commandes a granel para qui puedas mostrar aux clients exactamente le qui están obteniendo. Sin afirmaciones vagas de 'bloquea luz bleu' — números reales, datos de prueba reales."
            />
            <FaqItem
              question="Se pueden combinar avec verres de prescripción?"
              answer="Absolutamente — y deberías! Aproximadamente el 75% des adultos necesitan corrección visual, así qui los montures de luz bleu listos para Rx sont un marché enorme. Tous notres montures se envían avec verres de demostration qui las ópticas pueden reemplazar avec verres de luz bleu avec prescripción. Funciona avec monofocal, bifocal et progresivo. El marge en lunettes de luz bleu avec prescripción est sursaliente — $80-150 au detalle en un monture de $10 en gros."
            />
            <FaqItem
              question="Quel estt la meilleur manera de vender lunettes de luz bleu?"
              answer="La demostration definitiva: pon un paire a votre client et haz qui mire son teléfono durante 30 segundos. Luego quítaselas. La mayoría de la gente nota inmediatamente la diferencia — la pantalla se ve plus dura sin ellas. Ese momento de 'ahá' cierra la vente. Para boutiques en gamme, enfócate dans le problema (dolores de cabeza, ojos secos, mal rêve) et la solution. Los programas de regalos corporativos également sont masivos — las entreprises achatn cientos de paires para bienestar laboral. Podemos personalizar avec logotipos de entreprise."
            />
            <FaqItem
              question="Quel estt el MOQ et tiempo de livraison?"
              answer="100 pièces par style et couleur. Artículos en stock se envían en 3-5 jours. Commandes personnalisés avec votre logotipo et branding toman 15-25 jours. Également nous faisons emballages de regalo corporativo — cajas personnalisées avec el nombre de votre entreprise, pans de microfibra avec marque, todo inclus. Una startup de tecnología ordenó 500 paires en emballage personnalisé comme regalos de bienvenida para nouveaus empleados. Les costó aproximadamente $9 par paire todo inclus. Valor au detalle du regalo percibido? $30-40 fácilmente."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">El Marché qui Sigue Creciendo</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            El tiempo de pantalla no va a bajar. El trabajo remoto no se va a ir. El gaming solo
            se hace plus grande. Las lunettes de luz bleu sont une des apuestas plus sûres en lunettes
            en este momento. Obtén échantillons, pruébalas tú même, et descubre par qué esta catégorie
            convierte tan bien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Obtenir Catálogo de Luz Azul</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes de Luz Azul", "item": "https://eyeviewglasses.com/es/produits/lumiere-bleue" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Las lunettes de luz bleu realmente funcionan?",
            "acceptedAnswer": { "@type": "Answer", "text": "La ciencia sur el dan a largo plazo de la luz bleu aún se debate, mais el alivio de la fatiga visual digital está bien documentado. Muchos usuarios reportan menos fatiga ocular, menos dolores de cabeza et meilleur rêve. El beneficio para el rêve tiene evidencia plus fuerte — la luz bleu suprime la production de melatonina." }
          },
          {
            "@type": "Question",
            "name": "Voirres transpaireentes ou ambre — qué debería tener en stock?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ambas idealmente, mais las verres transpaireentes representan el 70% des commandes. Parecen lunettes normales et no alteran los couleures. Las verres ambre sont populares entre gamers par son filtrado plus fuerte et contraste meilleurado." }
          },
          {
            "@type": "Question",
            "name": "Cuánta luz bleu bloquean estas lunettes?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las verres transpaireentes bloquean 30-40% de la luz bleu dans le rango de 415-455nm. Las verres ambre bloquean 60-90% dependiendo de la profundidad du tinte. Proporcionamos informes de transmisión espectral avec commandes a granel." }
          },
          {
            "@type": "Question",
            "name": "Se pueden combinar las lunettes de luz bleu avec verres de prescripción?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — tous los montures se envían listos para Rx avec verres de demostration. Aproximadamente el 75% des adultos necesitan corrección visual, haciendo des lunettes de luz bleu avec prescripción un marché enorme avec marges sursalientes." }
          },
          {
            "@type": "Question",
            "name": "Quel estt la meilleur manera de vender lunettes de luz bleu?",
            "acceptedAnswer": { "@type": "Answer", "text": "La demostration definitiva: haz qui los clients miren son teléfono avec las lunettes puestas, luego sin ellas. La diferencia se nota inmediatamente. Para boutiques en gamme, enfócate dans le problema (dolores de cabeza, ojos secos, mal rêve). Los programas de regalos corporativos également sont un canal masivo." }
          },
          {
            "@type": "Question",
            "name": "Quel estt el MOQ et tiempo de livraison?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pièces par style. Artículos en stock se envían en 3-5 jours. Commandes personnalisés avec logotipo et branding toman 15-25 jours. Emballage de regalo corporativo disponible." }
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
