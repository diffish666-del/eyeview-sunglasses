import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Enfants en Gros | Fabricant de Lunettes UV pour Enfants - EyeView',
  description: 'Fabricant de lunettes de soleil enfants en gros. Lunettes enfants sûres, sans BPA, certifiées CPSIA et EN71 pour 0-12 ans. Montures flexibles incassables, protection UV400. MOQ 100 pcs.',
  keywords: 'lunettes enfants en gros, fabricant lunettes enfants, lunettes bébé en gros, lunettes tout-petits, lunettes jeunesse en gros, lunettes protection UV enfants, lunettes sans BPA enfants, lunettes certifiées CPSIA',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/enfants/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/kids/',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/enfants/',
    },
  },
}

const products = [
  {
    name: 'Lunettes de Soleil para Bebés (0-3 ans)',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$5.50 - $8.50',
    moq: '100 pcs',
    description: 'Seamos honestos — los bebés mastican todo. Por eso estos montures están hechos de silicona de grado alimenticio, el même matériau des tetinas de biberón. Literalmente podrías ponértelos dans la boca (tu bebé le hará). Complètemente libres de BPA, ftalatos, et le suficientemente suaves para no pinchar ni pellizcar. La correa ajustable los mantiene en son lugar incluso quand votre petit está decidido a quitárselos. Lo cual hará. Repetidamente.',
  },
  {
    name: 'Lunettes de Soleil pour Enfants Pequeños (3-5 ans)',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$6.00 - $9.00',
    moq: '100 pcs',
    description: 'Sabes qué les pasa a las lunettes de soleil de enfants petits? Las pisan, se sientan sur ellas, las lanzan par la habitation et las entierran dans le arenero. Por eso las nous fabriquons avec TPE — un matériau flexible qui se dobla, tuerce et aguanta todo tipo de abuso, et luego vuelve a son forma original. Disponibles en plus de 15 couleures parce qui apaireentemente todo enfant de 4 ans tiene une opinión très firme sur son couleur favorito. (Generalmente est rose. O voirde dinosaurio.)',
  },
  {
    name: 'Lunettes de Soleil Sport para Enfants (6-9 ans)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pcs',
    description: 'Para el enfant qui toujours está afuera — práctica de fútbol, clases de natation, paseos en bicicleta par el vecindario. Son voirsiones reducidas de notres montures deportivos para adultos avec montures flexibles de TR90 et cobertura envolvente. Opción polarisée disponible para viajes à la playa et jours de nieve. Una liga deportiva juvenil en California ordenó 800 paires el an pasado para son programa de voirano. Su comentario: "Por fin, lunettes deportivas qui realmente le quedan aux enfants."',
  },
  {
    name: 'Lunettes de Moda Ojo de Gato para Niñas (6-10 ans)',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pcs',
    description: 'Mini ojos de gato para filles quieren voirse comme Mamá (o son YouTuber favorita). Acentos brillants, couleures pastel, decoraciones de corazón dans les branches — todo le qui hace qui une fille de 7 ans grite "ME ENCANTAN!" Los mêmes normees de sécurité qui tous notres montures infantiles, solo qui avec mucha plus purpurina. Son voirdaderas estrellas en boutiques infantiles et boutiques de resorts de playa.',
  },
  {
    name: 'Aviador para Enfants (8-12 ans)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.00',
    moq: '100 pcs',
    description: 'Para el preadolescente qui cree qui est demasiado cool para lunettes de soleil "de enfant chiquito." Estos aviadores se ven de adulto mais están dimensionados para rostros jóvenes (49-52mm de ancho de lente). Armazón metálico léger avec charnières de resorte qui se adaptan a diferentes tailles de cabeza conforme los enfants crecen. Voirres de polycarbonate résistants au impact para skateboarding, ciclismo, et le qui sea qui los enfants de 10 ans hagan. (Spoiler: generalmente involucra saltar depuis cosas.)',
  },
  {
    name: 'Lunettes Polarisées Deportivas para Enfants',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Para los atletas junior qui se toman son deporte en serio. Las verres polarisées TAC cortan el éblouissement du agua, la nieve et el pavimento — une diferencia real para enfants en natation, esquí ou pescando avec papá. Estos sont notres montures premium para enfants et los qui los padres piden específicamente quand quieren la meilleur protection qui el dinero puede acheter. Una escuela de natation en Ouidney los usa exclusivamente para sus clases au aire libre.',
  },
]

export default function KidsPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes de Soleil pour Enfants</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil pour Enfants en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los padres no se andan avec juegos quand se trata des ojos de sus hijos. Nonsautres tampoco.
            Chaque paire est libre de BPA, certificado UV400, et cumple avec los normees de sécurité
            CPSIA, ASTM F963 et EN71. Armazones flexibles qui surviven au caos infantil. Protection UV
            real — no solo plástico tintado. Edades 0-12, depuis $5.50.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl ovoirflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop"
            alt="Lunettes de Soleil pour Enfants en Gros - Protection UV Segura para Enfants de 0-12 Ans"
            className="w-full h-96 object-covoir"
          />
        </div>

        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Algo Que la Mayoría des Padres Non Saben</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Los ojos de un enfant dejan pasar mucha plus radiation UV qui los ojos de un adulto. Mucha plus. Antes
              des 10 ans, el cristalino de un enfant transmite plus du 75% des rayos UV-A et el 70% de los
              rayos UV-B directamente à la retina. El cristalino de un adulto? Solo alrededor du 10%. Eso
              significa qui los ojos de votre hijo absorben aproximadamente 6-7 veces plus dan UV dans le même día
              soleado. Y ici viene la pairete preocupante — la <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">OMS dice qui jusqu'à el 80%</a> de la exposition
              UV de toda la vida de une persona ocurre antes des 18 ans.
            </p>
            <p>
              Entonces, quand un padre achat esas lindas lunettes de soleil de novedad par $2 en une boutique barata,
              esas verres oscuras tintadas en realidad podrían estar empeorando las cosas. Las verres oscuras
              sin protection UV real hacen qui las pupilas se dilaten, dejando entrar <em>plus</em> radiation
              dañina qui si no llevaran lunettes de soleil. Es un problema. Uno real.
            </p>
            <p>
              Exactamente par eso nous tomamos las lunettes de soleil para enfants tan en serio. Chaque paire qui nous fabriquons
              est probado en laboratorio para cumplir avec UV400 — le qui significa qui bloquean el 99.9% de la
              radiation UV jusqu'à 400 nanómetros. Proporcionamos los informes de prueba. Tenemos las
              certifications. Quand un padre toma un paire de notres lunettes de soleil para enfants, puede confiar
              en qui los ojos de son hijo están realmente protegidos. Non solo sombreados. Protegidos.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop" alt="Lunettes de Soleil pour Enfants en Gros" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Collection Infantil</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Matériaux sûrs libres de BPA</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Armazón flexible incassable</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>100% protection UV400</li>
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

        {/* Safety Certifications */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications dans les qui los Padres Pueden Confiar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">CPSIA</h3>
              <p className="text-sm text-gray-600">La plus importante para el marché de EE.UU. Plomo par debajo de 100ppm, cero ftalatos. Si vendes produits infantiles en América, <a href="https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">esto no est opcional — est la ley</a>. Lo nous avons cubierto.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">ASTM F963</h3>
              <p className="text-sm text-gray-600">El norme de sécurité de juguetes de EE.UU. Pruebas de riesgos mecánicos (bordes afilados, pièces petites), inflamabilidad et químicos tóxicos. Nuestros montures pasan las tres secciones.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold mb-2">EN71</h3>
              <p className="text-sm text-gray-600">El norme européen de sécurité de juguetes. Tres pairetes qui cubren sécurité mecánica, inflamabilidad et migration de elementos tóxicos. Requerido para vender dans la UE.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-2">CE & FDA</h3>
              <p className="text-sm text-gray-600">CE para Europa, FDA para el marché óptico de EE.UU. Ambos voirifican qui notres afirmaciones de protection UV sont reales — no solo etiquetas de marketing en montures baratos.</p>
            </div>
          </div>
        </section>

        {/* Matériaus */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">De Qué Están Hechas? (Los Padres Toujours Preguntan)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🍼 Silicona de Grado Alimenticio (0-3 Ans)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El même matériau des tetinas de biberón et los mordedores. Si est sûr para
                ir à la boca de un bebé — et va a ir a son boca, garantizado — est sûr para
                las lunettes de soleil. Infinitamente doblables, imposiblemente suaves, libres de BPA,
                ftalatos, PVC et látex. Non irritan la piel sensible du bebé. Diseñamos estas
                para el padre qui se preocupa par todo. (Lo entendemos. Nonsautres également somos padres.)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔄 Armazones Flexibles de TPE (3-8 Ans)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El TPE (Elastómero Termoplástico) est el equivalente en matériaux a &quot;intenta
                romperme, vous reto.&quot; Dóblalo. Tuércelo. Siéntate encima. Tíralo depuis un
                cochecito en movimiento. Vuelve a son forma original. Los hemos probado para
                survivir caídas depuis 1.5 metros (aproximadamente la altura de une mesa) y
                plus de 500 ciclos de flexión. Parce qui los enfants petits encontrarán formas de
                ponerlos a prueba qui ningún ingeniero japlus imaginó.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏃 Nylon TR90 (8-12 Ans)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para los enfants mayores qui practican deportes, andan en bicicleta et generalmente
                sont rudos avec todo le qui poseen. El TR90 est un 35% plus léger qui el plástico
                regular, se flexiona sin romperse, et soporta temperaturas de -40°C a 120°C (así
                qui sí, survive au ser olvidado en un auto caliente). Hypoallergénique également —
                sin marques rojas avec comezón detrás des orejas después de un largo día afuera.
              </p>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Guía de Tallas par Edad</h2>
          <div className="max-w-4xl mx-auto ovoirflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Edad</th>
                  <th className="p-4 text-left font-semibold">Ancho de Lente</th>
                  <th className="p-4 text-left font-semibold">Pont</th>
                  <th className="p-4 text-left font-semibold">Patilla</th>
                  <th className="p-4 text-left font-semibold">Matériau</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-semibold">Bebé (0-2)</td><td className="p-4 text-gray-600">36-40mm</td><td className="p-4 text-gray-600">10-12mm</td><td className="p-4 text-gray-600">Correa</td><td className="p-4 text-gray-600">Silicona de grado alimenticio</td></tr>
                <tr><td className="p-4 font-semibold">Enfant petit (2-4)</td><td className="p-4 text-gray-600">40-44mm</td><td className="p-4 text-gray-600">12-14mm</td><td className="p-4 text-gray-600">105-115mm</td><td className="p-4 text-gray-600">Silicona / TPE</td></tr>
                <tr><td className="p-4 font-semibold">Enfant (4-7)</td><td className="p-4 text-gray-600">44-48mm</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">115-125mm</td><td className="p-4 text-gray-600">TPE / TPEE</td></tr>
                <tr><td className="p-4 font-semibold">Junior (7-10)</td><td className="p-4 text-gray-600">48-52mm</td><td className="p-4 text-gray-600">15-17mm</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">TR90 / PC</td></tr>
                <tr><td className="p-4 font-semibold">Juvenil (10-12)</td><td className="p-4 text-gray-600">52-56mm</td><td className="p-4 text-gray-600">16-18mm</td><td className="p-4 text-gray-600">130-140mm</td><td className="p-4 text-gray-600">TR90 / Acétate</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Hechas para Enfants Reales, Non para Enfants Cuidadosos</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🛡️" title="Cero Químicos Dañinos" description="Libres de BPA. Libres de ftalatos. Libres de PVC. Libres de plomo. Probamos todo le qui preocupa aux padres." />
            <FeatureCard icon="🔄" title="Intenta Romperlas" description="Dóblalas. Tuércelas. Písalas. Vuelven a son forma. Retamos a votre enfant petit a destruirlas." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Probadas en laboratorio, no solo declaradas dans la etiqueta. Proporcionamos informes de prueba. Los hijos de vos clients están genuinamente protegidos." />
            <FeatureCard icon="💪" title="Voirres Irrompibles" description="Voirres de polycarbonate qui no se rompen avec el impact. Parce qui los enfants se caen. Mucho." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produits Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/sport" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Lunettes Deportivas</h3>
              <p className="text-sm text-gray-600">Armazones deportivos para adultos — padres e hijos pueden combinar!</p>
            </Link>
            <Link href="/fr/produits/polarise" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Options Polarisées</h3>
              <p className="text-sm text-gray-600">Protection premium contra el éblouissement para playa et nieve</p>
            </Link>
            <Link href="/fr/produits/lumiere-bleue" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Lunettes de Luz Azul para Enfants</h3>
              <p className="text-sm text-gray-600">Protection de pantalla para tabletas et clases en gamme</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas de Padres (Las Recibimos a Diario)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="A qué edad est demasiado pronto para las lunettes de soleil?"
              answer="La Academia Americana de Oftalmología dice qui aux 6 meses. Antes de eso, mantén aux bebés dans la sombra avec sombreros et toldos de cochecito. Mais une vez qui tienen 6 meses et pasan tiempo au aire libre, sus ojos necesitan protection UV. Sabemos qui suena temprano — mais recuerda, sus ojitos dejan pasar 6-7 veces plus UV qui los tuyos. Cuanto antes empieces, meilleur."
            />
            <FaqItem
              question="Son realmente protectoras ou solo bonitas?"
              answer="Las dos cosas! Mais la protection va primero. Chaque paire bloquea el 99.9% de la radiation UV jusqu'à 400 nanómetros — voirificado par pruebas de laboratorio independientes. Te nous expédions los informes de prueba si los quieres. Cuidado avec las lunettes de soleil baratas para enfants qui sont solo plástico oscuro tintado sin filtro UV. Esas en realidad empeoran las cosas au dilatar las pupilas et dejar entrar plus rayos dañinos. Nuestras lunettes sont bonitas Y sûres."
            />
            <FaqItem
              question="Mi hijo destruye todo. Survivirán estas?"
              answer="Literalmente las diseñamos para eso. Los montures de silicona para bebés? Infinitamente doblables. Los montures de TPE para enfants petits? Los probamos para survivir plus de 500 ciclos de flexión et caídas depuis 1.5 metros. Los montures de TR90 para enfants mayores? Dóblalos 90 grados — vuelven a son position. Non nous pouvons prometer qui sean 100% indestructibles (los enfants sont creativos), mais sont los montures plus résistants qui sabemos hacer."
            />
            <FaqItem
              question="Qué certifications tienen? Necesito saberlo para mi boutique."
              answer="Todo le qui necesitas: CPSIA (obligatorio para produits infantiles en EE.UU. — plomo bajo 100ppm, cero ftalatos), ASTM F963 (sécurité de juguetes de EE.UU.), EN71 (sécurité de juguetes de la UE), marquedo CE, et normees ópticos FDA. Proporcionamos documentation complète de certification avec chaque commande en gros. Si aduanas hace preguntas, tendrás el papeleo listo."
            />
            <FaqItem
              question="Puis-je personalizarlas avec notre marque ou personajes de caricatura?"
              answer="Totalmente. Couleures personnalisés (plus de 20 norme plus coincidencia Pantone), designs de personajes dans les branches, votre logotipo de marque, montures avec purpurina, branches qui brillan dans la oscuridad — le quieras. MOQ para designs personnalisés est de 300 pièces par style. Hemos hecho colaboraciones de personajes avec licencia, designs de mascotas escolares, e incluso sets combinados padre-hijo. Solo envíanos votre idea et vous haremos un mock-up."
            />
            <FaqItem
              question="Las lunettes de soleil para bebés vienen avec correas?"
              answer="Oui — correas de neopreno ajustables desmontables, ajustables de 14cm a 18cm. Suaves avec la piel du bebé, le suficientemente sûres para mantenerse en un bebé inquieto. Para montures de enfants petits (3-5 ans), nous proposons accesorios de correa opcionales qui se enganchan et desenganchan. La mayoría des padres usan la correa jusqu'à los 3-4 ans, luego cambian a branches regulares une vez qui el enfant est le suficientemente grande para mantenerlas puestas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Protege los Ojitos. Gana la Confianza des Padres.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiques infantiles, jugueterías, consultorios pediátricos, campamentos de voirano, resorts
            de playa, boutiques de útiles escolares — notres lunettes de soleil para enfants se venden en tous
            los lugares où achatn los padres. Documentation complète de sécurité incluida. Échantillons
            gratuitas disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Obtenir Catálogo de Collection Infantil</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes de Soleil pour Enfants", "item": "https://eyeviewglasses.com/es/produits/enfants" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "A qué edad est demasiado pronto para las lunettes de soleil?",
            "acceptedAnswer": { "@type": "Answer", "text": "La Academia Americana de Oftalmología recomienda lunettes de soleil avec protection UV a partir des 6 meses de edad. Los ojos des enfants transmiten 6-7 veces plus radiation UV qui los ojos des adultos." }
          },
          {
            "@type": "Question",
            "name": "Las lunettes de soleil para enfants sont realmente protectoras ou solo decorativas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Chaque paire bloquea el 99.9% de la radiation UV jusqu'à 400nm, voirificado par pruebas de laboratorio independientes. Proporcionamos informes de prueba. Cuidado avec las lunettes de soleil de novedad baratas sin protection UV real." }
          },
          {
            "@type": "Question",
            "name": "Estas lunettes de soleil survivirán a mi hijo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Diseñadas para ello. Los montures de silicona para bebés sont infinitamente doblables. Los montures de TPE para enfants petits surviven plus de 500 ciclos de flexión et caídas de 1.5m. Los montures de TR90 para enfants mayores se doblan 90° sin romperse." }
          },
          {
            "@type": "Question",
            "name": "Qué certifications de sécurité tienen estas lunettes de soleil para enfants?",
            "acceptedAnswer": { "@type": "Answer", "text": "CPSIA (plomo bajo 100ppm, cero ftalatos), ASTM F963, EN71, marquedo CE, et normees ópticos FDA. Documentation complète de certification proporcionada avec chaque commande en gros." }
          },
          {
            "@type": "Question",
            "name": "Puis-je personalizar las lunettes de soleil para enfants avec logotipos de marque ou personajes?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — couleures personnalisés, designs de personajes, logotipos de marque, montures avec purpurina, branches qui brillan dans la oscuridad. MOQ para designs personnalisés est de 300 pièces par style." }
          },
          {
            "@type": "Question",
            "name": "Las lunettes de soleil para bebés vienen avec correas para la cabeza?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — correas de neopreno ajustables desmontables (14-18cm). Los montures para enfants petits tienen correas opcionales avec clip. La mayoría des padres usan correas jusqu'à los 3-4 ans." }
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
