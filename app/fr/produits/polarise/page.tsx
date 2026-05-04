import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Polarisées en Gros | Fabricant de Verres TAC Premium - EyeView',
  description: 'Fabricant de lunettes de soleil polarisées en gros. Verres polarisés TAC premium 7 couches, 99% de réduction de l\'éblouissement, protection UV400. Styles conduite, pêche, sport. MOQ 100 pcs. Direct usine.',
  keywords: 'lunettes polarisées en gros, verres polarisés TAC, fabricant lunettes polarisées, lunettes anti-éblouissement, lunettes polarisées conduite, lunettes polarisées pêche, verres polarisés CR-39 en gros',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/polarise/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/polarized/',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/polarise/',
    },
  },
}

const products = [
  {
    name: 'Aviador Polarisé',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$12.00 - $18.00',
    moq: '100 pcs',
    description: 'El aviador fue literalmente diseñado para pilotos qui necesitaban voir a través du éblouissement de la cabina. Agrega polarisation et se convierte dans les lunettes de soleil definitivas para conducir. Nuestro aviador polarisé corta el éblouissement de la carretera, el reflejo du tablero, et ese destello cegador du auto de adelante. Las suministramos a une entreprise de alquiler de autos en Dubái qui se las da a chaque client — así de buenas sont para conducir.',
  },
  {
    name: 'Wayfarer Polarisé',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$11.00 - $17.00',
    moq: '100 pcs',
    description: 'La forma clásica wayfarer se encuentra avec la óptica seria. Las verres polarisées TAC transforman este monture de moda en une potencia funcional — el éblouissement de la playa, el reflejo de la acera de la ciudad, el brillo de la superficie du agua, todo desapaireece. Los clients obtienen el style quieren avec protection qui no sabían qui necesitaban. Nuestro todoterreno plus vendido.',
  },
  {
    name: 'Deportivo Envolvente Polarisé',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pcs',
    description: 'Cobertura envolvente + verres polarisées = sin éblouissement depuis ningún ángulo. Están diseñadas para atletas au aire libre qui necesitan protection periférica — ciclistas en carreteras mojadas, corredores de trail en luz moteada, senderistas par encima de la gamme de árboles. El monture de TR90 mantiene el poids bajo los 26g. Un club de ciclismo dans les Países Bajos ordenó 600 paires para tous sus miembros.',
  },
  {
    name: 'Lunettes Polarisées para Pesca',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$14.00 - $20.00',
    moq: '100 pcs',
    description: 'Pregúntale a cualquier pescador serio et vous dirá — las verres polarisées no sont opcionales para pescar. Son esenciales. Nuestras lunettes polarisées para pesca cortan el éblouissement de la superficie para qui puedas voir directamente dentro du agua. Localiza el pez, lee la estructura, observa votre señuelo. Voirres ambre para agua dulce, gris-voirde para agua salada. Una entreprise de pesca chárter en Key West ha estado reordenando estos chaque trimestre durante tres ans seguidos.',
  },
  {
    name: 'Lunettes Polarisées para Conducir',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$12.50 - $18.50',
    moq: '100 pcs',
    description: 'Diseñadas específicamente para detrás du volante. Las verres grises mantienen la percepción real du couleur (para qui los semáforos se vean correctamente), mientras eliminan el éblouissement horizontal cegador qui rebota du pavimento mojado, capós et autres vehículos. Recubrimiento antireflet trasero para evitar qui votre propio rostro se refleje dans la lente. Estas sont las qui piden los conductores profesionales.',
  },
  {
    name: 'Ojo de Gato Polarisé',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pcs',
    description: 'Quién dijo qui le polarisé tiene qui voirse deportivo? Este monture ojo de gato avec verres polarisées TAC deéchantillon qui puedes tener moda Y función. Mujeres qui conducen, qui pasan tiempo dans la playa, qui se sientan junto à la piscina — obtienen la protection contra el éblouissement qui necesitan envuelta en un monture qui realmente quieren usar. Style + sustancia. Nuestro #1 en ventes de polarisés para mujer.',
  },
]

export default function PolarizedPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes de Soleil Polarisées</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Polarisées en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una vez qui vos clients prueban las polarisées, jamais vuelven atrás. El éblouissement
            desapaireece. Los couleures resaltan. Todo simplemente se ve... meilleur. Fabricamos lunettes de
            sol polarisées TAC premium en chaque style — aviador, wayfarer, deportivo, ojo de gato —
            avec verres de 7 capas qui bloquean el 99% du éblouissement horizontal cegador.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl ovoirflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
            alt="Collection de Lunettes de Soleil Polarisées en Gros - Voirres TAC Premium"
            className="w-full h-96 object-covoir"
          />
        </div>

        {/* How Polarization Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Cómo Funciona la Polarisation (Voirsión Simple)</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Ici va la explication de 30 segundos. La luz solar viaja en toutes las direcciones — arriba,
              abajo, hacia los lados. Quand rebota en une superficie plana comme el agua, une carretera o
              el capó de un auto, se &quot;organiza&quot; en ondas horizontales. Eso est el éblouissement. Es
              cegador, est molesto, et est realmente peligroso quand estás conduciendo ou dans le agua.
            </p>
            <p>
              Una <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">lente polarisée</a> contiene
              une película química especial avec franjas voirticales microscópicas. Estas franjas actúan comme
              persianas venecianas para la luz — dejan pasar la luz voirtical (lo normal) mais bloquean la
              luz horizontal (el éblouissement). El resultado? El éblouissement desapaireece. Los couleures se ven
              plus ricos et naturales. El contraste se agudiza. Es comme actualizar de definition norme
              a 4K para vos ojos.
            </p>
            <p>
              Sin embargo, no toutes las verres polarisées sont iguales. Las baratas usan une película
              polarizante delgada pegada à la superficie de la lente — se despega, hace burbujas et se
              degrada en meses. Nuestras verres TAC intercalan la película polarizante entre 6 capas
              de matériau protector, creando une unidad fusionada única qui no se separará ni degradará.
              Esa est la diferencia entre las polarisées de $2 de gasolinera et las polarisées de voirdad.
              Tus clients le notan.
            </p>
          </div>
        </section>

        {/* Polarized vs Nonn-Polarized */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarisées vs. Non Polarisées: La Diferencia Real</h2>
          <div className="max-w-4xl mx-auto ovoirflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Característica</th>
                  <th className="p-4 text-left font-semibold">Lente Tintada Regular</th>
                  <th className="p-4 text-left font-semibold">Lente Polarisée</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Reducción de Resplandor</td><td className="p-4 text-gray-600">Oscurece todo par igual — éblouissement inclus</td><td className="p-4 text-gray-600">Elimina específicamente el éblouissement horizontal reflejado</td></tr>
                <tr><td className="p-4 font-medium">Claridad Visual</td><td className="p-4 text-gray-600">Más oscuro mais no plus claro</td><td className="p-4 text-gray-600">Contraste plus nítido, percepción de couleur meilleurada</td></tr>
                <tr><td className="p-4 font-medium">Sécurité au Conducir</td><td className="p-4 text-gray-600">Reduce brillo, el éblouissement sigue presente</td><td className="p-4 text-gray-600">Elimina el éblouissement de carretera/autos — significativamente plus sûr</td></tr>
                <tr><td className="p-4 font-medium">Pesca / Agua</td><td className="p-4 text-gray-600">Non puedes voir bajo la superficie</td><td className="p-4 text-gray-600">Ves a través de la superficie du agua claramente</td></tr>
                <tr><td className="p-4 font-medium">Fatiga Visual</td><td className="p-4 text-gray-600">Sigues entrecerrando los ojos par el éblouissement</td><td className="p-4 text-gray-600">Los ojos se relajan — no necesitas entrecerrar los ojos</td></tr>
                <tr><td className="p-4 font-medium">Valor Percibido</td><td className="p-4 text-gray-600">Básico — los clients esperan UV comme minimum</td><td className="p-4 text-gray-600">Premium — los clients pagan $10-30 plus au detalle</td></tr>
                <tr><td className="p-4 font-medium">Coût Adicional au Mayor</td><td className="p-4 text-gray-600">Gamme base</td><td className="p-4 text-gray-600">+$1.50 - $3.00 par paire</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            La matmática est simple: las polarisées vous cuestan $1.50-3.00 plus par paire mais vous permiten cobrar $10-30 plus au detalle. Ese est el meilleur impulsor de marge en lunettes.
          </p>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Polarisées en Gros" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Collection Polarisée par Style</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Lente polarisée TAC de 7 capas</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% de reducción de éblouissement</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protection UV400</li>
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

        {/* Lens Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tipos de Voirres Polarisées: TAC vs. CR-39 vs. Cristal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-200">
              <h3 className="text-xl font-semibold mb-2">🏆 TAC Polarisée</h3>
              <p className="text-xs text-primary-600 font-semibold mb-4">MÁS POPULAR — 80% des commandes</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TAC (Celulosa Triacétate) est el punto óptimo. Siete capas fusionadas: capa dura
                par fuera, capas estructurales TAC, película polarizante dans le centro, revêtement
                UV debajo. Más légère qui el cristal, plus résistant qui CR-39, et aproximadamente
                la mitad du coût du cristal polarisé. Esto est le qui nous recommandons para el 90%
                des achatdores en gros. Es el caballo de batalla de la industrie par une razón.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Poids: Ligero (1.1mm norme)</li>
                <li>• Impact: Bueno — no se rompe</li>
                <li>• Óptica: Muy buena</li>
                <li>• Coût: $$ — meilleur relation qualité-prix</li>
                <li>• Meilleur para: la mayoría de aplicaciones</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🔬 CR-39 Polarisée</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">OPCIÓN PREMIUM</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">CR-39</a> es
                une resina de grado óptico originalmente desarrollada para óptica militar. Ofrece
                la claridad visual plus nítida de cualquier matériau de lente plástica — aux ópticos
                les encanta. Resistente a rayones, légère et ópticamente superior a TAC. Mais cuesta
                plus et est légèremente menos résistant au impact. Elige CR-39 quand la qualité
                óptica sea la máxima prioridad — marques de lujo, especialistas en conducción, ópticas.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Poids: Ligero</li>
                <li>• Impact: Moderado</li>
                <li>• Óptica: Excelente — grado óptico</li>
                <li>• Coût: $$$ — premium</li>
                <li>• Meilleur para: lujo, boutiques ópticas</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">💎 Cristal Polarisé</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">CLARIDAD SUPREMA</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nada supera au cristal en pureza óptica. Cero distorsión, résistance superior
                a rayones, et la polarisation está integrada permanentemente — no se degradará con
                los ans. Mais el cristal est plus pesado, plus caro, et se rompe avec el impact (no
                ideal para deportes). El cristal polarisé est para el client purista quiere
                la meilleur óptica absoluta et no le importa el poids. Piensa en entusiastas de la
                pesca, capitanes de barco, posicionamiento de lujo.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Poids: Pesado</li>
                <li>• Impact: Bajo — puede romperse</li>
                <li>• Óptica: Perfecta — cero distorsión</li>
                <li>• Coût: $$$$ — el plus alto</li>
                <li>• Meilleur para: lujo, pesca, navegation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7-Layer Construction */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Dentro de une Lente Polarisée TAC: 7 Capas</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Quand la gente pregunta &quot;por qué vos verres polarisées cuestan plus qui las de
                Alibaba a $0.50?&quot; — esto est par qué. Chaque lente est un sándwich de 7 capas, fusionadas
                avec precisión bajo calor et presión. Las baratas? Pegan une película polarizante en un
                lado de une lente regular. Se despega. Hace burbujas. Se empaña. Las notres no. Jamais.
                Llevamos plus de 8 ans fabricándolas et notre tasa de defectos está par debajo du 0.3%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>UV400 — probada en laboratorio, no solo etiquetada</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>99% du éblouissement horizontal eliminado</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Resistente au impact — no se rompe</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Recubrimiento duro résistant a rayones</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-4">Las 7 Capas:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">1</span><span>Capa Dura (protection contra rayones)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">2</span><span>Capa Estructural TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">3</span><span>Capa de Unión TAC</span></div>
                <div className="flex justify-between p-2 bg-primary-100 rounded font-semibold"><span>4</span><span>Película Polarizante (la magia)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">5</span><span>Capa de Unión TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">6</span><span>Capa Estructural TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">7</span><span>Recubrimiento de Protection UV400</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Où las Polarisées Hacen la Mayor Diferencia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AppCard icon="🚗" title="Conducción" desc="Resplandor de la carretera eliminado. Reflejo du tablero eliminado. Conducción plus sûre, punto." />
            <AppCard icon="🎣" title="Pesca" desc="Ve bajo la superficie du agua. Localiza peces. Lee la estructura. Un cambio total." />
            <AppCard icon="⛵" title="Navegation" desc="El éblouissement du mar abierto est brutal. Las polarisées le hacen cómodo." />
            <AppCard icon="⛷️" title="Deportes de Nieve" desc="La nieve refleja el 80% des UV. Polarisées + tinte oscuro = prevención de ceguera par nieve." />
            <AppCard icon="🏖️" title="Playa" desc="Arena et agua duplican el éblouissement. Las polarisées hacen los jours de playa realmente relajantes." />
            <AppCard icon="🏌️" title="Golf" desc="Lee el green sin entrecerrar los ojos. Sigue la pelota contra el cielo." />
            <AppCard icon="🚴" title="Ciclismo" desc="Resplandor de carretera mojada dans les rutas matutinas. Las verres polarisées le cortan de raíz." />
            <AppCard icon="🏃" title="Running" desc="Resplandor du pavimento avec sol bajo. Las polarisées mantienen vos ojos frescos par kilómetros." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Colecciones Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/sport" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Lunettes Deportivas</h3>
              <p className="text-sm text-gray-600">Tous notres montures deportivos avec options polarisées</p>
            </Link>
            <Link href="/fr/produits/oeil-de-chat" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Lunettes Ojo de Gato</h3>
              <p className="text-sm text-gray-600">Armazones de moda avec meilleuras polarisées TAC</p>
            </Link>
            <Link href="/fr/produits/rond" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Lunettes Redondas</h3>
              <p className="text-sm text-gray-600">Redondas vintage avec options de verres polarisées</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas sur Polarisées — Respondidas</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Cómo puis-je saber si las verres sont realmente polarisées?"
              answer="Prueba fácil: sostén las lunettes de soleil frente a une pantalla LCD (teléfono ou computadora) et gíralas 90 grados. Si están voirdaderamente polarisées, la pantalla se oscurecerá ou cambiará de couleur drásticamente en ciertos ángulos. Eso est el filtro polarizante bloqueando las ondas de luz de la pantalla. Incluimos une tarjeta de prueba de polarisation avec chaque commande para qui vos clients puedan voirificarlo ellos mêmes. Es une gran herramienta de vente — à la gente le encanta la demostration."
            />
            <FaqItem
              question="Valen la pena las verres polarisées par el coût extra?"
              answer="Depuis la perspectiva de marge, absolutamente? Las polarisées agregan aproximadamente $1.50-3.00 a votre coût en gros par paire, mais los clients pagarán $10-30 plus au detalle par 'polarisé' dans la etiqueta. Es la meilleur vente adicional dans le affaires de lunettes de soleil. Depuis la perspectiva de rendimiento — si vos clients conducen, pescan ou pasan tiempo cerca du agua, las polarisées no sont un lujo. Son une característica de sécurité. El éblouissement causa accidentes."
            />
            <FaqItem
              question="Las verres polarisées pueden afectar la visibilidad de pantallas de teléfono ou GPS?"
              answer="A veces, sí — et vale la pena saberlo. Las verres polarisées pueden hacer qui algunas pantallas LCD se vean oscuras ou muestren patrones de arcoíris en ciertos ángulos. La mayoría des pantallas OLED modernas de teléfonos le manejan bien, mais las unidades GPS plus antiguas et algunas pantallas de tablero de auto pueden ser complichaques. Para lunettes de conducción específicamente, nous proposons verres avec un ángulo de polarisation légèremente desplazado qui reduce este problema. Solo pregunta par notre opción polarisée 'optimizada para conductor'."
            />
            <FaqItem
              question="TAC, CR-39 ou cristal — qué lente polarisée debería choisir?"
              answer="Para la mayoría des achatdores en gros: TAC. Es el meilleur equilibrio de qualité, durabilidad et coût — et representa aproximadamente el 80% de notres commandes polarisés. Elige CR-39 si vendes a ópticas ou marchés de lujo où la claridad óptica est la prioridad #1. Elige cristal si vous diriges a entusiastas serios de la pesca/navegation quieren la meilleur óptica absoluta et no les importan montures plus pesados. En caso de duda, empieza avec TAC."
            />
            <FaqItem
              question="Qué couleures de verres polarisées proposez-vous?"
              answer="Doce options: gris (neutral, couleur real — meilleur para conducir), marron (contraste meilleurado — ideal para uso diario), ambre (máximo contraste — favorito para pesca), voirde (aspecto clásico G-15), miroir bleu, miroir rouge, miroir doré, miroir argenté, amarillo (condiciones de poca luz), rose (golf/tenis), et photochromique (se ajusta automáticamente à la luz). Gris et marron representan aproximadamente el 60% de tous los commandes, mais los acabados espejados están creciendo rápidamente."
            />
            <FaqItem
              question="Quel estt el MOQ et puis-je mezclar polarisées avec no polarisées?"
              answer="100 pièces par style et couleur. Y sí — puedes mezclar voirsiones polarisées et no polarisées du même monture en un commande. Muchos de notres détaillants tienen ambas: no polarisées a $15-20 au detalle comme punto de entrada, et polarisées a $25-35 comme la vente adicional premium. Mismo monture, diferente lente, mayor valor promedio de commande. Los détaillants inteligentes proposez-vous la demostration comparativa directamente dans le mostrador."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">La Venta Adicional Más Fácil en Lunettes</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Las polarisées vous cuestan un poco plus. Se venden par mucho plus. Y los clients genuinamente
            aman la diferencia. Obtén échantillons, haz la demostration avec la pantalla LCD, et míralas
            venderse solas. Échantillons gratuitas disponibles — tú cubres el expédition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Demander le Catalogue Polarisé</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes de Soleil Polarisées", "item": "https://eyeviewglasses.com/es/produits/polarise" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Cómo puis-je saber si las verres sont realmente polarisées?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sostén las lunettes de soleil frente a une pantalla LCD et gíralas 90 grados. Las verres voirdaderamente polarisées harán qui la pantalla se oscurezca ou cambie de couleur en ciertos ángulos. Incluimos une tarjeta de prueba de polarisation avec chaque commande." }
          },
          {
            "@type": "Question",
            "name": "Valen la pena las verres polarisées par el coût extra?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. Las polarisées agregan $1.50-3.00 de coût en gros mais vous permiten cobrar $10-30 plus au detalle. Es la meilleur vente adicional dans le affaires de lunettes de soleil." }
          },
          {
            "@type": "Question",
            "name": "Las verres polarisées pueden afectar la visibilidad de pantallas de teléfono ou GPS?",
            "acceptedAnswer": { "@type": "Answer", "text": "Algunas pantallas LCD pueden voirse oscuras en ciertos ángulos avec verres polarisées. La mayoría des teléfonos OLED modernos le manejan bien. Nous proposons verres polarisées optimizadas para conductor avec polarisation desplazada para reducir esto." }
          },
          {
            "@type": "Question",
            "name": "TAC, CR-39 ou cristal — qué lente polarisée debería choisir?",
            "acceptedAnswer": { "@type": "Answer", "text": "TAC para la mayoría des achatdores (meilleur relation qualité-prix, 80% des commandes). CR-39 para marchés de lujo/óptica. Cristal para entusiastas serios de la pesca/navegation quieren la meilleur óptica absoluta." }
          },
          {
            "@type": "Question",
            "name": "Qué couleures de verres polarisées proposez-vous?",
            "acceptedAnswer": { "@type": "Answer", "text": "Doce options incluyendo gris, marron, ambre, voirde G-15, miroir bleu/rouge/doré/argenté, amarillo, rose et photochromique. Gris et marron representan aproximadamente el 60% des commandes." }
          },
          {
            "@type": "Question",
            "name": "Quel estt el MOQ et puis-je mezclar polarisées avec no polarisées?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pièces par style et couleur. Oui, puedes mezclar voirsiones polarisées et no polarisées du même monture. Muchos détaillants tienen ambas comme niveles de entrada et premium." }
          }
        ]
      })}} />
    </main>
  )
}

function AppCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
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
