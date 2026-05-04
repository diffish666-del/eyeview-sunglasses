import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen Polarisierts im Großhandel | Hersteller de Gläser TAC Premium - EyeView',
  description: 'Hersteller de Sonnenbrillen polarisierts al por mayor. Gläser polarisierts TAC Premium de 7 capas, 99% de reducción de resplandor, UV-Schutz400. Stils para conducción, pesca, Sport. MOQ 100 pzas. Directo de Fabrik.',
  keywords: 'Sonnenbrillen polarisierts al por mayor, Gläser polarisierts TAC, Hersteller Brillen polarisierts, Brillen reducción de resplandor, Brillen polarisierts para conducir, Brillen polarisierts para pesca, Gläser polarisierts CR-39 a granel',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/polarisiert/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/polarized/',
      'de': 'https://eyeviewsunglasses.com/de/produkte/polarisiert/',
    },
  },
}

const products = [
  {
    name: 'Aviador Polarisiert',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$12.00 - $18.00',
    moq: '100 pzas',
    description: 'Hersteller von polarisierten Sonnenbrillen im Großhandel. TAC-Polarisationsgläser, 99% Blendungsreduzierung, alle Fassungsstile. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  },
  {
    name: 'Wayfarer Polarisiert',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$11.00 - $17.00',
    moq: '100 pzas',
    description: 'La forma clásica wayfarer se encuentra con la óptica seria. Las Gläser polarisierts TAC transforman este Fassung de moda en una potencia funcional — el resplandor de la playa, el reflejo de la acera de la ciudad, el brillo de la superficie del agua, todo desaparece. Los Kundes obtienen el Stil que quieren con protección que no sabían que necesitaban. Nuestro todoterreno más vendido.',
  },
  {
    name: 'Sport Envolvente Polarisiert',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pzas',
    description: 'Cobertura envolvente + Gläser polarisierts = sin resplandor ab ningún ángulo. Están diseñadas para atletas al aire libre que necesitan protección periférica — ciclistas en carreteras mojadas, corredores de trail en luz moteada, senderistas por encima de la línea de árboles. El Fassung de TR90 mantiene el Gewicht bajo los 26g. Un club de ciclismo en los Países Bajos ordenó 600 pares para todos sus miembros.',
  },
  {
    name: 'Brillen Polarisierts para Pesca',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$14.00 - $20.00',
    moq: '100 pzas',
    description: 'Pregúntale a cualquier pescador serio y te dirá — las Gläser polarisierts no son opcionales para pescar. Son esenciales. Nuestras Brillen polarisierts para pesca cortan el resplandor de la superficie para que puedas ver directamente dentro del agua. Localiza el pez, lee la estructura, observa tu señuelo. Gläser ámbar para agua dulce, gris-verde para agua salada. Una empresa de pesca chárter en Key West ha estado reordenando estos cada trimestre durante tres años seguidos.',
  },
  {
    name: 'Brillen Polarisierts para Conducir',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$12.50 - $18.50',
    moq: '100 pzas',
    description: 'Diseñadas específicamente para detrás del volante. Las Gläser grises mantienen la percepción real del Farbe (para que los semáforos se vean correctamente), mientras eliminan el resplandor horizontal cegador que rebota del pavimento mojado, capós y otros vehículos. Recubrimiento antirreflejante trasero para evitar que tu propio rostro se refleje en la Glas. Estas son las que piden los conductores profesionales.',
  },
  {
    name: 'Ojo de Gato Polarisiert',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pzas',
    description: 'Hersteller von polarisierten Sonnenbrillen im Großhandel. TAC-Polarisationsgläser, 99% Blendungsreduzierung, alle Fassungsstile. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  },
]

export default function PolarizedPageEs() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Sonnenbrillen Polarisierts</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sonnenbrillen Polarisierts im Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una vez que tus Kundes prueban las polarisierts, nunca vuelven atrás. El resplandor
            desaparece. Los Farbees resaltan. Todo simplemente se ve... mejor. Fabricamos Brillen de
            sol polarisierts TAC Premium en cada Stil — aviador, wayfarer, Sport, ojo de gato —
            con Gläser de 7 capas que bloquean el 99% del resplandor horizontal cegador.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
            alt="Colección de Sonnenbrillen Polarisierts im Großhandel - Gläser TAC Premium"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* How Polarization Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Cómo Funciona la Polarización (Versión Simple)</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Aquí va la explicación de 30 segundos. La luz solar viaja en todas las direcciones — arriba,
              abajo, hacia los lados. Cuando rebota en una superficie plana como el agua, una carretera o
              el capó de un auto, se &quot;organiza&quot; en ondas horizontales. Eso es el resplandor. Es
              cegador, es molesto, y es realmente peligroso cuando estás conduciendo o en el agua.
            </p>
            <p>
              Una <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Glas polarisiert</a> contiene
              una película química especial con franjas verticales microscópicas. Estas franjas actúan como
              persianas venecianas para la luz — dejan pasar la luz vertical (lo normal) pero bloquean la
              luz horizontal (el resplandor). ¿El resultado? El resplandor desaparece. Los Farbees se ven
              más ricos y naturales. El contraste se agudiza. Es como actualizar de definición estándar
              a 4K para tus ojos.
            </p>
            <p>
              Sin embargo, no todas las Gläser polarisierts son iguales. Las baratas usan una película
              polarizante delgada pegada a la superficie de la Glas — se despega, hace burbujas y se
              degrada en meses. Nuestras Gläser TAC intercalan la película polarizante entre 6 capas
              de Material protector, creando una unidad fusionada única que no se separará ni degradará.
              Esa es la diferencia entre las polarisierts de $2 de gasolinera y las polarisierts de verdad.
              Tus Kundes lo notan.
            </p>
          </div>
        </section>

        {/* Polarized vs Non-Polarized */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarisierts vs. No Polarisierts: La Diferencia Real</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Característica</th>
                  <th className="p-4 text-left font-semibold">Glas Tintada Regular</th>
                  <th className="p-4 text-left font-semibold">Glas Polarisiert</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Reducción de Resplandor</td><td className="p-4 text-gray-600">Oscurece todo por igual — resplandor incluido</td><td className="p-4 text-gray-600">Elimina específicamente el resplandor horizontal reflejado</td></tr>
                <tr><td className="p-4 font-medium">Claridad Visual</td><td className="p-4 text-gray-600">Más oscuro pero no más claro</td><td className="p-4 text-gray-600">Contraste más nítido, percepción de Farbe mejorada</td></tr>
                <tr><td className="p-4 font-medium">Seguridad al Conducir</td><td className="p-4 text-gray-600">Reduce brillo, el resplandor sigue presente</td><td className="p-4 text-gray-600">Elimina el resplandor de carretera/autos — significativamente más sicher</td></tr>
                <tr><td className="p-4 font-medium">Pesca / Agua</td><td className="p-4 text-gray-600">No puedes ver bajo la superficie</td><td className="p-4 text-gray-600">Ves a través de la superficie del agua claramente</td></tr>
                <tr><td className="p-4 font-medium">Fatiga Visual</td><td className="p-4 text-gray-600">Sigues entrecerrando los ojos por el resplandor</td><td className="p-4 text-gray-600">Los ojos se relajan — no necesitas entrecerrar los ojos</td></tr>
                <tr><td className="p-4 font-medium">Valor Percibido</td><td className="p-4 text-gray-600">Básico — los Kundes esperan UV como mínimo</td><td className="p-4 text-gray-600">Premium — los Kundes pagan $10-30 más al detalle</td></tr>
                <tr><td className="p-4 font-medium">Costo Adicional al Mayor</td><td className="p-4 text-gray-600">Línea base</td><td className="p-4 text-gray-600">+$1.50 - $3.00 pro Paar</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            La matemática es simple: las polarisierts te cuestan $1.50-3.00 más pro Paar pero te permiten cobrar $10-30 más al detalle. Ese es el mejor impulsor de margen en Brillen.
          </p>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop" alt="Sonnenbrillen Polarisierts im Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Colección Polarisiert por Stil</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} im Großhandel - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Glas polarisiert TAC de 7 capas</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% de reducción de resplandor</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>UV-Schutz400</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/de/kontakt" className="btn-primary w-full block text-center">Angebot anfordern</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lens Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tipos de Gläser Polarisierts: TAC vs. CR-39 vs. Cristal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-200">
              <h3 className="text-xl font-semibold mb-2">🏆 TAC Polarisiert</h3>
              <p className="text-xs text-primary-600 font-semibold mb-4">MÁS POPULAR — 80% de los Bestellungs</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TAC (Celulosa Triacetato) es el punto óptimo. Siete capas fusionadas: capa dura
                por fuera, capas estructurales TAC, película polarizante en el centro, recubrimiento
                UV debajo. Más ligera que el cristal, más beständig que CR-39, y aproximadamente
                la mitad del costo del cristal polarizado. Esto es lo que recomendamos para el 90%
                de los compradores al por mayor. Es el caballo de batalla de la industria por una razón.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Gewicht: Leicht (1.1mm estándar)</li>
                <li>• Impacto: Bueno — no se rompe</li>
                <li>• Óptica: Muy buena</li>
                <li>• Costo: $$ — mejor relación Qualität-Preis</li>
                <li>• Mejor para: la mayoría de aplicaciones</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🔬 CR-39 Polarisiert</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">OPCIÓN PREMIUM</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">CR-39</a> es
                una resina de grado óptico originalmente desarrollada para óptica militar. Ofrece
                la claridad visual más nítida de cualquier Material de Glas plástica — a los ópticos
                les encanta. Beständig a rayones, ligera y ópticamente superior a TAC. Pero cuesta
                más y es ligeramente menos beständig al impacto. Elige CR-39 cuando la Qualität
                óptica sea la máxima prioridad — Markes de lujo, especialistas en conducción, ópticas.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Gewicht: Leicht</li>
                <li>• Impacto: Moderado</li>
                <li>• Óptica: ExceGlas — grado óptico</li>
                <li>• Costo: $$$ — Premium</li>
                <li>• Mejor para: lujo, tiendas ópticas</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">💎 Cristal Polarisiert</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">CLARIDAD SUPREMA</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nada supera al cristal en pureza óptica. Cero distorsión, resistencia superior
                a rayones, y la polarización está integrada permanentemente — no se degradará con
                los años. Pero el cristal es más pesado, más caro, y se rompe con el impacto (no
                ideal para Sports). El cristal polarizado es para el Kunde purista que quiere
                la mejor óptica absoluta y no le importa el Gewicht. Piensa en entusiastas de la
                pesca, capitanes de barco, posicionamiento de lujo.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Gewicht: Pesado</li>
                <li>• Impacto: Bajo — puede romperse</li>
                <li>• Óptica: Perfecta — cero distorsión</li>
                <li>• Costo: $$$$ — el más Höhe</li>
                <li>• Mejor para: lujo, pesca, navegación</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7-Layer Construction */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Dentro de una Glas Polarisiert TAC: 7 Capas</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Cuando la gente pregunta &quot;¿por qué tus Gläser polarisierts cuestan más que las de
                Alibaba a $0.50?&quot; — esto es por qué. Cada Glas es un sándwich de 7 capas, fusionadas
                con precisión bajo calor y presión. ¿Las baratas? Pegan una película polarizante en un
                lado de una Glas regular. Se despega. Hace burbujas. Se empaña. Las nuestras no. Nunca.
                Llevamos más de 8 años fabricándolas y nuestra tasa de defectos está por debajo del 0.3%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>UV400 — probada en laboratorio, no solo etiquetada</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>99% del resplandor horizontal eliminado</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Beständig al impacto — no se rompe</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Recubrimiento duro beständig a rayones</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-4">Las 7 Capas:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">1</span><span>Capa Dura (protección contra rayones)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">2</span><span>Capa Estructural TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">3</span><span>Capa de Unión TAC</span></div>
                <div className="flex justify-between p-2 bg-primary-100 rounded font-semibold"><span>4</span><span>Película Polarizante (la magia)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">5</span><span>Capa de Unión TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">6</span><span>Capa Estructural TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">7</span><span>Recubrimiento de UV-Schutz400</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Donde las Polarisierts Hacen la Mayor Diferencia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AppCard icon="🚗" title="Conducción" desc="Resplandor de la carretera eliminado. Reflejo del tablero eliminado. Conducción más segura, punto." />
            <AppCard icon="🎣" title="Pesca" desc="Ve bajo la superficie del agua. Localiza peces. Lee la estructura. Un cambio total." />
            <AppCard icon="⛵" title="Navegación" desc="El resplandor del mar abierto es brutal. Las polarisierts lo hacen cómodo." />
            <AppCard icon="⛷️" title="Sports de Nieve" desc="La nieve refleja el 80% de los UV. Polarisierts + tinte oscuro = prevención de ceguera por nieve." />
            <AppCard icon="🏖️" title="Playa" desc="Arena y agua duplican el resplandor. Las polarisierts hacen los días de playa realmente relajantes." />
            <AppCard icon="🏌️" title="Golf" desc="Lee el green sin entrecerrar los ojos. Sigue la pelota contra el cielo." />
            <AppCard icon="🚴" title="Ciclismo" desc="Resplandor de carretera mojada en las rutas matutinas. Las Gläser polarisierts lo cortan de raíz." />
            <AppCard icon="🏃" title="Running" desc="Resplandor del pavimento con sol bajo. Las polarisierts mantienen tus ojos frescos por kilómetros." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Colecciones Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/Sport" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Brillen Deportivas</h3>
              <p className="text-sm text-gray-600">Todos nuestros Fassungen Sports con opciones polarisierts</p>
            </Link>
            <Link href="/de/produkte/ojo-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Brillen Ojo de Gato</h3>
              <p className="text-sm text-gray-600">Armazones de moda con mejoras polarisierts TAC</p>
            </Link>
            <Link href="/de/produkte/redondo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Brillen Redondas</h3>
              <p className="text-sm text-gray-600">Redondas vintage con opciones de Gläser polarisierts</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas sobre Polarisierts — Respondidas</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿Cómo puedo saber si las Gläser son realmente polarisierts?"
              answer="Prueba fácil: sostén las Sonnenbrillen frente a una pantalla LCD (teléfono o computadora) y gíralas 90 grados. Si están verdaderamente polarisierts, la pantalla se oscurecerá o cambiará de Farbe drásticamente en ciertos ángulos. Eso es el filtro polarizante bloqueando las ondas de luz de la pantalla. Incluimos una tarjeta de prueba de polarización con cada Bestellung para que tus Kundes puedan verificarlo ellos mismos. Es una gran herramienta de venta — a la gente le encanta la demostración."
            />
            <FaqItem
              question="¿Valen la pena las Gläser polarisierts por el costo extra?"
              answer="Ab la perspectiva de margen, ¿absolutamente? Las polarisierts agregan aproximadamente $1.50-3.00 a tu costo al por mayor pro Paar, pero los Kundes pagarán $10-30 más al detalle por 'polarizado' en la etiqueta. Es la mejor venta adicional en el negocio de Sonnenbrillen. Ab la perspectiva de rendimiento — si tus Kundes conducen, pescan o pasan tiempo cerca del agua, las polarisierts no son un lujo. Son una característica de seguridad. El resplandor causa accidentes."
            />
            <FaqItem
              question="¿Las Gläser polarisierts pueden afectar la visibilidad de pantallas de teléfono o GPS?"
              answer="A veces, sí — y vale la pena saberlo. Las Gläser polarisierts pueden hacer que algunas pantallas LCD se vean oscuras o muestren patrones de arcoíris en ciertos ángulos. La mayoría de las pantallas OLED modernas de teléfonos lo manejan bien, pero las unidades GPS más antiguas y algunas pantallas de tablero de auto pueden ser complicadas. Para Brillen de conducción específicamente, ofrecemos Gläser con un ángulo de polarización ligeramente desplazado que reduce este problema. Solo pregunta por nuestra opción polarisiert 'optimizada para conductor'."
            />
            <FaqItem
              question="TAC, CR-39 o cristal — ¿qué Glas polarisiert debería elegir?"
              answer="Para la mayoría de los compradores al por mayor: TAC. Es el mejor equilibrio de Qualität, durabilidad y costo — y representa aproximadamente el 80% de nuestros Bestellungs polarizados. Elige CR-39 si vendes a ópticas o mercados de lujo donde la claridad óptica es la prioridad #1. Elige cristal si te diriges a entusiastas serios de la pesca/navegación que quieren la mejor óptica absoluta y no les importan Fassungen más pesados. En caso de duda, empieza con TAC."
            />
            <FaqItem
              question="¿Qué Farbees de Gläser polarisierts ofrecen?"
              answer="Doce opciones: gris (neutral, Farbe real — mejor para conducir), marrón (contraste mejorado — ideal para uso diario), ámbar (máximo contraste — favorito para pesca), verde (aspecto clásico G-15), espejo azul, espejo rojo, espejo dorado, espejo plateado, amarillo (condiciones de poca luz), rosa (golf/tenis), y fotocromático (se ajusta automáticamente a la luz). Gris y marrón representan aproximadamente el 60% de todos los Bestellungs, pero los acabados espejados están creciendo rápidamente."
            />
            <FaqItem
              question="¿Cuál es el MOQ y puedo mezclar polarisierts con no polarisierts?"
              answer="100 Stück por Stil y Farbe. Y sí — puedes mezclar versiones polarisierts y no polarisierts del mismo Fassung en un Bestellung. Muchos de nuestros minoristas tienen ambas: no polarisierts a $15-20 al detalle como punto de entrada, y polarisierts a $25-35 como la venta adicional Premium. Mismo Fassung, diferente Glas, mayor valor promedio de Bestellung. Los minoristas inteligentes ofrecen la demostración comparativa directamente en el mostrador."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">La Venta Adicional Más Fácil en Brillen</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Las polarisierts te cuestan un poco más. Se venden por mucho más. Y los Kundes genuinamente
            aman la diferencia. Obtén Muster, haz la demostración con la pantalla LCD, y míralas
            venderse solas. Muster gratuitas disponibles — tú cubres el Versand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Solicitar Catálogo Polarisiert</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Sonnenbrillen Polarisierts", "item": "https://eyeviewglasses.com/de/produkte/polarisiert" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo puedo saber si las Gläser son realmente polarisierts?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sostén las Sonnenbrillen frente a una pantalla LCD y gíralas 90 grados. Las Gläser verdaderamente polarisierts harán que la pantalla se oscurezca o cambie de Farbe en ciertos ángulos. Incluimos una tarjeta de prueba de polarización con cada Bestellung." }
          },
          {
            "@type": "Question",
            "name": "¿Valen la pena las Gläser polarisierts por el costo extra?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. Las polarisierts agregan $1.50-3.00 de costo al por mayor pero te permiten cobrar $10-30 más al detalle. Es la mejor venta adicional en el negocio de Sonnenbrillen." }
          },
          {
            "@type": "Question",
            "name": "¿Las Gläser polarisierts pueden afectar la visibilidad de pantallas de teléfono o GPS?",
            "acceptedAnswer": { "@type": "Answer", "text": "Algunas pantallas LCD pueden verse oscuras en ciertos ángulos con Gläser polarisierts. La mayoría de los teléfonos OLED modernos lo manejan bien. Ofrecemos Gläser polarisierts optimizadas para conductor con polarización desplazada para reducir esto." }
          },
          {
            "@type": "Question",
            "name": "TAC, CR-39 o cristal — ¿qué Glas polarisiert debería elegir?",
            "acceptedAnswer": { "@type": "Answer", "text": "TAC para la mayoría de los compradores (mejor relación Qualität-Preis, 80% de los Bestellungs). CR-39 para mercados de lujo/óptica. Cristal para entusiastas serios de la pesca/navegación que quieren la mejor óptica absoluta." }
          },
          {
            "@type": "Question",
            "name": "¿Qué Farbees de Gläser polarisierts ofrecen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Doce opciones incluyendo gris, marrón, ámbar, verde G-15, espejo azul/rojo/dorado/plateado, amarillo, rosa y fotocromático. Gris y marrón representan aproximadamente el 60% de los Bestellungs." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es el MOQ y puedo mezclar polarisierts con no polarisierts?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 Stück por Stil y Farbe. Sí, puedes mezclar versiones polarisierts y no polarisierts del mismo Fassung. Muchos minoristas tienen ambas como niveles de entrada y Premium." }
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
