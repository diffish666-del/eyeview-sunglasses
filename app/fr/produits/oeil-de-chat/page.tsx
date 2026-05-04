import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Œil de Chat en Gros | Fabricant de Lunettes Cat Eye - EyeView',
  description: 'Fabricant de lunettes de soleil œil de chat en gros. Lunettes cat eye femme en acétate, métal et matériaux mixtes. Couleurs tendance, OEM/ODM. MOQ 100 pcs. Direct usine.',
  keywords: 'lunettes œil de chat en gros, fabricant lunettes cat eye, lunettes femme en gros, montures œil de chat, lunettes de soleil en gros, fabricant lunettes, lunettes cat eye acétate, lunettes rétro vintage',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/oeil-de-chat',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/cat-eye',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/oeil-de-chat',
    },
  },
}

const catEyeFaqs = [
  {
    question: 'Qué formas de rostro van bien avec las lunettes ojo de gato?',
    answer: 'Casi toutes, sinceramente. El ojo de gato est une des formas plus favorecedoras qui existen. Rostro ovalado? Perfecto. Rostro redondo? Los ángulos elevados añaden definition — queda genial. Forma de corazón? Combination ideal. Rostro cuadrado? Elige un ojo de gato plus suave et reoùado para equilibrar los ángulos. La única forma de rostro qui puede ser complichaque est la très alargada/estrecha, où un ojo de gato ovoirsized puede resultar excesivo. Mais incluso ahí, un ojo de gato petite funciona bien.',
  },
  {
    question: 'Quel estt el MOQ para lunettes ojo de gato avec marque personnalisée?',
    answer: '100 pièces par couleur para notres designs existentes. Quieres votre propio molde personnalisé, couleures Pantone a medida et emballage avec marque? Son 300 pièces par style. Consejo pro: puedes mezclar diferentes styles de ojo de gato en un commande para alcanzar el minimum. Así podrías hacer 100 noir clásico + 100 leopairedo + 100 oro rose = 300 en total. Somos flexibles.',
  },
  {
    question: 'Se pueden hacer graduadas estas montures?',
    answer: 'Oui! Toutes notres montures ojo de gato de acétate et metal se pueden expédier avec verres de échantillon para qui las ópticas coloquen verres graduadas. Acommedamos prescripciones monofocales, bifocales et progresivas. La profundidad de la monture et la curvatura de la lente están diseñadas para ello. Es un excelente upsell para ópticas — montures de moda avec capacidad de graduation.',
  },
  {
    question: 'Qué tendencias hay en ojo de gato para 2024-2025?',
    answer: 'Grandes tendencias maintenant même: proporciones ovoirsized (plus grande est meilleur), acétate transpaireente/cristal (especialmente rose et champán), matériaux mixtos (frente de acétate + branches de metal), ojo de gato geométrico angular (menos curvo, plus edgy), et pasteles suaves comme lavanda et voirde salvia. El revival du ojo de gato estrecho Y2K également sigue fuerte entre las achatdoras jóvenes. Seguimos estas tendencias chaque temporada et actualizamos notre catálogo en consecuencia.',
  },
  {
    question: 'Puis-je obtenir échantillons antes de comprometerme avec un commande grande?',
    answer: 'Por supuesto — jamais esperaríamos qui pidas a ciegas. Styles existentes du catálogo? Échantillons gratuit, solo cubres el expédition (normalmente $30-50 vía DHL par 3-5 paires). Quieres une échantillon personnalisée avec vos modificaciones específicas? Pequeño cargo de $50-100 par design, qui acreditamos contra votre primer commande de production. Así qui básicamente obtienes échantillons personnalisées gratuit si haces commande. El plazo est de 7-10 jours.',
  },
]

const products = [
  {
    name: 'Ojo de Gato Noir Clásico',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'La qui toda collection necesita. Acétate noir, charnières pulidas, ese ángulo elevado perfecto. Es el equivalente en lunettes de soleil du vestido noir petit — funciona avec todo, se vende a toutes. Es consistentemente notre número 1 en repetition de commandes en tous los marchés.',
  },
  {
    name: 'Ojo de Gato Leopairedo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Animal print bien hecho. El patrón carey no está pintado — se crea superponiendo láminas de acétate de diferentes couleures, así chaque paire tiene genuina profundidad et riqueza. Una dueña de boutique en Melbourne nous dijo qui estas superan en ventes aux couleures sólidos 2 a 1 durante la primavoira.',
  },
  {
    name: 'Ojo de Gato Metal Oro Rosa',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    description: 'Monture metálica fina avec electrochapado oro rose qui paireece qui debería costar $200. Non est así. La construcción de alambre delgado da une voirsión moderna et refinada du ojo de gato — perfecta para la mujer profesional quiere style sin gritar. Combina de maravilla tanto avec blazers comme avec vestidos de playa.',
  },
  {
    name: 'Ojo de Gato Ovoirsized',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pcs',
    description: 'A le grande ou a casa. El ojo de gato ovoirsized est básicamente cebo para Instagram — proporciones atrevidas, puntas dramáticamente elevadas, máxima cobertura facial. Un retailer online nous dijo qui este style recibe plus comentarios de "dónde las achatste?" qui cualquier autre cosa en son boutique. Également ofrece excelente protection UV, le cual est un buen bonus.',
  },
  {
    name: 'Ojo de Gato avec Cristales',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$11.00 - $15.00',
    moq: '100 pcs',
    description: 'Para la mujer qui trata las lunettes de soleil comme joyas. Cristales colocados a mano a le largo de la gamme de la ceja et las puntas des branches captan la luz de une forma qui detiene convoirsaciones. Nous proposons piedras transpaireentes, de couleures et de grado Swarovski. Se venden comme pan caliente en boutiques de resort, boutiques nupciales et retailers de temática festiva.',
  },
  {
    name: 'Ojo de Gato Vintage',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Directo de 1958. Estrechas, avec ángulos pronunciados, avec branches gruesas de acétate qui dicen "conozco mi historia de la moda." Son plus petites qui la tendencia ovoirsized — intencionalmente. Las coleccionistas et entusiastas du vintage se las llevan volando. Si votre marché est retro, rockabilly ou pin-up, esta est votre monture.',
  },
]

export default function OjoDeGatoPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Œil de Chat au par Mayor',
        description: 'Lunettes de sol ojo de gato para mujer avec montures de acétate, metal et matériaux mixtos. Designs de tendencia avec personnalisation OEM complète. UV400 et options polarisées.',
        minPrice: '8.00',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes Ojo de Gato', url: 'https://eyeviewsunglasses.com/fr/produits/oeil-de-chat' }
      ]} />
      <FAQPageSchema faqs={catEyeFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Lunettes Ojo de Gato</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lunettes de Soleil Œil de Chat au par Mayor
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El ojo de gato jamais pasa de moda. En serio — Audrey Hepburn las llevó en los
              &apos;60 et siguen siendo la forma #1 en lunettes de soleil para mujer aujourd'hui. Fabricamos
              montures ojo de gato en acétate, metal et matériaux mixtos avec personnalisation OEM complète.
              Votre logo, vos couleures, votre marque — notre usine.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl ovoirflow-hidden shadow-xl">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop"
              alt="Collection de Lunettes de Soleil Œil de Chat au par Mayor - Lunettes de Moda para Mujer"
              className="w-full h-96 object-covoir"
            />
          </div>

          {/* Why Cat Eye */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Por Qué el Ojo de Gato Supera en Ventas a Todo le Deplus</h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p>
                Ici va un dato qui sorprende à la gente: la forma ojo de gato ha sido la silueta
                de lunettes de soleil femeninas plus vendida durante plus de 70 ans. Non la aviador. Non la
                wayfarer. El ojo de gato. Por qué? Parce qui hace algo qui ninguna autre forma puede — eleva.
                Ese ángulo ascendente crea la ilusión de pómulos plus altos et une mandíbula plus definida.
                Es básicamente un mini lifting qui puedes acheter par $15.
              </p>
              <p>
                La forma fue inventeda en 1939 par une diseñadora neoyorquina llamada Altina Schinasi qui estaba
                cansada des lunettes &quot;feas&quot;. Las llamó montures &quot;Arlequín&quot;. Marilyn Monroe
                las hizo famosas. Audrey Hepburn las hizo icónicas. Y maintenant, en 2024, sont plus grandes
                qui jamais — literalmente. El ojo de gato ovoirsized domina Instagram, TikTok y
                toutes las semaines de la moda depuis Milán jusqu'à Seúl.
              </p>
              <p>
                Para achatdores en gros, las lunettes de soleil ojo de gato sont le plus paireecido a una
                apuesta sûre en lunettes. Atraen a tous los grupos de edad (20-60+), funcionan todo el an et tienen
                un fuerte valor percibido. Toutes notres montures ojo de gato cumplen avec los <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">normees de protection UV de la FDA</a> —
                parce qui voirse genial no debería significar comprometer la sécurité ocular. Nuestra usine
                produce plus de 200.000 montures ojo de gato au mes en plus de 40 pays. Conocemos esta
                forma par dentro et par fuera.
              </p>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Œil de Chat au par Mayor" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">La Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="card group">
                  <div className="aspect-video ovoirflow-hidden">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} au par Mayor - EyeView`}
                      className="w-full h-full object-covoir group-hovoir:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary-600 font-semibold">{product.price}</span>
                      <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                    </div>
                    <Link href="/fr/contact" className="btn-primary w-full block text-center">
                      Commander Devis
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Matériau Guide */}
          <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Acétate vs. Metal vs. Mixto — Cuál Es el Adecuado?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">🏛️ Acétate</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Si quieres cobrar prixs retail premium, elige acétate. Está hecho de <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener" className="text-primary-600 underline hovoir:text-primary-800">algodón
                  et pulpa de madera</a> (sí, de voirdad), et los couleures et patrones qui se pueden conseguir son
                  increíbles — carey profundo, remolinos de mármol, tonos caramelo translúcidos. Chaque paire
                  se pule a mano para ese acabado brillant. El acétate <em>se siente</em> caro. Tus
                  clientas le notarán. Également est hypoallergénique, así qui no habrá quejas par reacciones dans la piel.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Couleures ricos — carey, mármol, dégradé</li>
                  <li>• Acabado premium pulido a mano</li>
                  <li>• Hypoallergénique, eco-friendly</li>
                  <li>• Ideal para: boutiques, posicionamiento de lujo</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">⚙️ Metal</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Finas, elegantes, modernas. Las ojo de gato metálicas usan acier inoxydable ou aleation libre de níquel con
                  acabados electrochapados — doré, argenté, oro rose, noir mat. El perfil delgado
                  crea un look refinado qui el acétate no puede igualar. Son las montures para mujeres
                  quieren qui sus lunettes susurren, no griten. Geniales para gammes profesionales et de oficina.
                  Más légères qui el acétate également — la mayoría pesan menos de 22 grammes.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Finas, elegantes, légères (menos de 22g)</li>
                  <li>• Acabados doré, argenté, oro rose</li>
                  <li>• Options libres de níquel disponibles</li>
                  <li>• Ideal para: oficina, marques minimalistas</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">🔗 Matériau Mixto</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Lo meilleur de ambos mundos. Frente de acétate avec branches finas de metal — ou vicevoirsa.
                  El contraste de dos matériaux está en plena tendencia maintenant même. Piensa: frente de
                  acétate rose transpaireente avec branches finas doradas. O acétate noir avec branches de alambre argenté.
                  Son las montures qui hacen qui la gente pairee et pregunte &quot;dónde las conseguiste?&quot;
                  Actualmente notre catégorie de plus rápido crecimiento.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Estética bicouleur de tendencia</li>
                  <li>• Posibilidades de design creativo</li>
                  <li>• Catégorie de plus rápido crecimiento en 2024</li>
                  <li>• Ideal para: marques de tendencia, vente directa</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Couleur Trends */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Qué Couleures Se Están Vendiendo Maintenant</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🔥 En Tendencia Esta Temporada</h3>
                  <div className="space-y-4">
                    <CouleurTrend couleur="bg-red-800" name="Burdeos et Vino" description="Tonos profundos et cálidos arrasando en otoño/invierno. Combina avec verres degradadas marrones para esa vibra de lujo acogedor." />
                    <CouleurTrend couleur="bg-pink-300" name="Rosa Suave et Empolvado" description="Sigue fuerte. El acétate rose transpaireente est el couleur individual de plus rápido crecimiento en lunettes femeninas maintenant même." />
                    <CouleurTrend couleur="bg-green-700" name="Voirde Bosque" description="El hit sorpresa du an. Una alternativa sofistichaque au carey qui nadie esperaba." />
                    <CouleurTrend couleur="bg-amber-100 border border-gray-300" name="Transpaireente / Cristal" description="Montures see-through en transpaireente, champán, gris claro. Llevan 3 ans en tendencia et no échantillonn signales de desaceleration." />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">📊 Los Clásicos Eternos (Toujours se Repiten)</h3>
                  <div className="space-y-4">
                    <CouleurTrend couleur="bg-black" name="Noir Clásico" description="30-35% de tous los commandes de ojo de gato. Toujours. Chaque. Temporada. Tenlo en stock ou arrepiéntete." />
                    <CouleurTrend couleur="bg-amber-700" name="Carey" description="El #2 en ventes. Los marrones multitono funcionan todo el an, avec todo el mundo, en toutes pairetes." />
                    <CouleurTrend couleur="bg-yellow-600" name="Metal Doré" description="Esencial para cualquier gamme de lujo ou profesional. Las ojo de gato doradas gritan sofistication." />
                    <CouleurTrend couleur="bg-gray-400" name="Degradado Bicouleur" description="Montures qui se degradan de un couleur a autre — noir a transpaireente, rose a melocotón. Muy Instagram." />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Spécifications</h2>
            <div className="max-w-4xl mx-auto ovoirflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left font-semibold">Especification</th>
                    <th className="p-4 text-left font-semibold">Acétate</th>
                    <th className="p-4 text-left font-semibold">Metal</th>
                    <th className="p-4 text-left font-semibold">Mixto</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-4 font-medium">Ancho de Lente</td><td className="p-4 text-gray-600">52-58mm</td><td className="p-4 text-gray-600">54-60mm</td><td className="p-4 text-gray-600">53-58mm</td></tr>
                  <tr><td className="p-4 font-medium">Pont</td><td className="p-4 text-gray-600">16-20mm</td><td className="p-4 text-gray-600">14-18mm</td><td className="p-4 text-gray-600">15-19mm</td></tr>
                  <tr><td className="p-4 font-medium">Largo de Patilla</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td></tr>
                  <tr><td className="p-4 font-medium">Poids</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">18-24g</td><td className="p-4 text-gray-600">22-30g</td></tr>
                  <tr><td className="p-4 font-medium">Lente</td><td className="p-4 text-gray-600">CR-39 / TAC</td><td className="p-4 text-gray-600">CR-39 / Nylon</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                  <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                  <tr><td className="p-4 font-medium">Bisagra</td><td className="p-4 text-gray-600">5 barriles / Muelle</td><td className="p-4 text-gray-600">Muelle flexible</td><td className="p-4 text-gray-600">5 barriles / Muelle</td></tr>
                  <tr><td className="p-4 font-medium">Plaquetas Nasales</td><td className="p-4 text-gray-600">Keyhole integrado</td><td className="p-4 text-gray-600">Silicona ajustable</td><td className="p-4 text-gray-600">Silicona ajustable</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Más Styles qui Vale la Pena Voir</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/wayfarer" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="font-semibold mb-2">Lunettes Wayfarer</h3>
                <p className="text-sm text-gray-600">Clásicas de acétate para tous los públicos</p>
              </Link>
              <Link href="/fr/produits/polarise" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="font-semibold mb-2">Options Polarisées</h3>
                <p className="text-sm text-gray-600">Añade TAC polarisée a cualquier ojo de gato</p>
              </Link>
              <Link href="/fr/produits/enfants" className="card p-6 text-center hovoir:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">👧</div>
                <h3 className="font-semibold mb-2">Ojo de Gato Infantil</h3>
                <p className="text-sm text-gray-600">Mini ojo de gato para filles — se venden solas</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tus Preguntas, Respuestas Directas</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {catEyeFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Lista para Vender la Forma qui Se Vende Sola?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Boutiques, boutiques online, distributeures de marques — nous travaillons avec tous ellos. Nuestro
              programa grossiste de ojo de gato para mujer vous ofrece prixs competitivos, production rápida
              et personnalisation complète. Pide un catálogo gratuit et descubre le qui est posible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="btn-primary">Demander le Catalogue</Link>
              <Link href="/fr/produits" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hovoir:bg-primary-50 transition-couleurs">Voir Tous les Produits</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function CouleurTrend({ couleur, name, description }: { couleur: string; name: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${couleur} flex-shrink-0 mt-1`}></div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
