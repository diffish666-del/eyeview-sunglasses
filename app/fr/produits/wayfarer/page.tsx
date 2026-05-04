import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Wayfarer en Gros | Fabricant de Lunettes Wayfarer OEM - EyeView',
  description: 'Fabricant de lunettes de soleil wayfarer en gros. Montures acétate premium, verres UV400/polarisés, impression logo personnalisée. MOQ 100 pcs. Prix usine à partir de 5$/paire. Échantillons gratuits !',
  keywords: 'lunettes wayfarer en gros, fabricant lunettes wayfarer, lunettes wayfarer personnalisées, lunettes acétate en gros, lunettes de soleil en gros, fabricant lunettes, OEM lunettes wayfarer',
  openGraph: {
    title: 'Lunettes de Soleil Wayfarer au par Mayor | Fabricant OEM - EyeView',
    description: 'Fabricant de lunettes de soleil wayfarer en gros. Montures premium de acétate, logo personnalisé, verres UV400/polarisées. MOQ 100 pcs. Directo de usine.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/wayfarer',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/wayfarer',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/wayfarer',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/wayfarer',
    },
  },
}

const wayfarerFaqs = [
  {
    question: 'Quel estt la diferencia entre lunettes wayfarer de acétate et de plástico?',
    answer: 'Una diferencia grande, la voirdad. El plástico norme inyectado (PC ou nylon) est barato et léger mais également se ve et se siente barato: fino, brillant, algo hueco. El acétate est un matériau de origen vegetal (hecho de fibras de algodón et pulpa de madera) qui se corta de láminas sólidas et se pule a mano. Tiene une profundidad de couleur real, patrones naturales qui no se pueden falsificar avec plástico, et un poids qui se siente sustancial. Nuestro acétate proviene de fournisseures italianos comme Mazzucchelli qui llevan fabricándolo depuis 1849. La diferencia de prix est de unos $2-3 par paire, mais el salto en valor percibido est enorme. Voirsión corta: si quieres cobrar plus de $20 en retail, elige acétate.',
  },
  {
    question: 'Cuántos couleures et patrones proposez-vous para montures wayfarer?',
    answer: 'Plus de 200 et sumando. Los clásicos — noir sólido, carey oscuro, carey miel — toujours están en stock et listos para expédier. Mais également nous avons couleures transpaireentes (cristal, bleu claro, rose empolvado), combinaciones bicouleur, efectos mármol, patrones de veta de madera et algunas cosas bastante llamativas comme acétate avec purpurina. Si tienes un couleur Pantone específico ou un patrón en mente, nous pouvons conseguir láminas de acétate personnalisées — eso tarda 7-10 jours extra et el MOQ sube a 300 pièces, mais vale la pena si quieres algo qui nadie plus tenga.',
  },
  {
    question: 'Cómo se comparan las wayfarer avec las aviador para mi marque?',
    answer: 'Sinceramente, sont los dos styles qui nous recommandons a toda marque nouvelle para empezar, mais tienen diferentes puntos fuertes. Las wayfarer sont de acétate, así qui vienen en muchos plus couleures et patrones — eso significa plus SKUs et plus variedad visual en votre página de produits ou estantería. Également cuestan menos par paire ($5-11 vs $8-14 para aviador) así qui vos marges pueden ser meilleures. Las aviador sont de metal et tienen une sensation plus premium et elegante. La wayfarer est plus casual, plus couleurida, plus unisex. Si tienes qui choisir una: wayfarer para volume et variedad, aviador para posicionamiento premium. Mais en serio, la mayoría de notres clients exitosos llevan ambas.',
  },
  {
    question: 'Qué options de logo funcionan meilleur en lunettes wayfarer?',
    answer: 'Las montures de acétate vous dan options diferentes a las de metal. El método plus popular est el estampado en caliente (lámina dorada ou plateada) dans le interior de la branche — se ve limpio et premium. Également nous faisons serigrafía (cualquier couleur, interior ou exterior de la branche), logos en relieve ou bajo relieve presionados directamente dans le acétate, e insignias de metal insertadas dans la branche. Para el frente de la monture, algunos clients ponen un petit remache metálico ou tachón decorativo avec son logo. El estampado en caliente dans le interior de la branche est où empiezan la mayoría des marques — cuesta unos $0.15-0.20 extra par paire.',
  },
  {
    question: 'Quel estt el MOQ para lunettes wayfarer personnalisées?',
    answer: 'Igual qui todo le qui nous fabriquons — 100 pièces par modelo. Puedes mezclar couleures dentro de esas 100, le cual est genial para probar. Un primer commande típico de une marque nouvelle se ve algo así: 30 negras, 20 carey, 20 transpaireentes, 15 noir mat, 15 de algo divoirtido comme bleu ou rose. Eso vous da cinco options en votre boutique sin un compromiso financiero enorme. Quand repites commande, la mayoría des clients duplican los 2-3 couleures qui meilleur vendieron et eliminan los qui no se movieron.',
  },
]

const products = [
  {
    name: 'Wayfarer Negra Clásica',
    description: 'La qui empezó todo et sigue superando en ventes a toutes las deplus. Acétate noir sólido, verres grises UV400, acabado pulido. Es el equivalente en lunettes de soleil a une camiseta blanca — combina avec todo et jamais pasa de moda. Hemos enviado plus de este SKU individual qui de cualquier autre wayfarer en notre catálogo. Si estás probando el marché et solo puedes choisir un couleur, este es. Toutes et chaque une des marques de lunettes du planeta tienen une wayfarer negra, et hay une razón para ello.',
    price: '$5.50 - $9.00',
    moq: '100 pcs',
    features: ['Acétate Noir Sólido', 'Lente Gris UV400', 'Acabado Pulido', 'Bisagras de Muelle'],
  },
  {
    name: 'Wayfarer Carey',
    description: 'Acétate carey oscuro clásico — ese patrón de remolinos ambre et marron qui ha sido un básico de moda masculina durante déchaques. Chaque paire tiene un patrón légèremente diferente par cómo se cortan las láminas de acétate, le qui en realidad añade à la sensation premium (no hay dos paires exactamente iguales). Usamos un carey profundo et cálido qui se fotografía bien et atrae a tous los grupos de edad. Es el segundo plus vendido en notre gamme wayfarer et muchas marques le usan comme son opción "premium" junto au noir.',
    price: '$6.00 - $10.00',
    moq: '100 pcs',
    features: ['Patrón Carey Oscuro', 'Único par Par', 'Lente Degradada Marrón', 'Pulido a Mano'],
  },
  {
    name: 'Wayfarer Cristal Transpaireente',
    description: 'Monture de acétate transpaireente avec un léger brillo qui atrapa la luz. Este style ha explotado dans les últimos ans — está par todo Instagram et TikTok, et el público joven (18-30) responde très bien. Combinada avec verres légèremente tintadas en gris ou bleu para un look limpio et moderno. La monture transpaireente également hace el logo plus visible si haces branding dans le interior de la branche. Gran vendedor para marques fashion-forward et boutiques de playa/resort. Espera qui esta se fotografíe très bien para vos listings.',
    price: '$6.50 - $10.50',
    moq: '100 pcs',
    features: ['Acétate Transpaireente', 'Lente Tintada Suave', 'Favorita en Redes Sociales', 'Branding Visible'],
  },
  {
    name: 'Wayfarer Noir Mate',
    description: 'La même forma qui la negra clásica mais avec un acabado mat soft-touch qui cambia complètemente la vibra. La superficie mat se consigue mediante un proceso especial de tamboreado qui elimina el brillo sin afectar la durabilidad. Se siente plus moderna, plus discreta — comme la diferencia entre une funda de móvil brillant et mat. Combinada avec verres ahumadas oscuras. Esta va bien avec marques streetwear, marques minimalistas et cualquier marque qui busque un look de "lujo discreto". Coste par paire légèremente plus alto par el paso extra de acabado.',
    price: '$6.50 - $10.50',
    moq: '100 pcs',
    features: ['Mate Soft-Touch', 'Acabado Tamboreado', 'Lente Ahumada Oscura', 'Estética Moderna'],
  },
  {
    name: 'Wayfarer Degradada Azul Océano',
    description: 'Una monture de acétate bleu translúcido qui se degrada de bleu marino profundo arriba a bleu plus claro abajo — realmente llamativa en persona. Combinada avec verres degradadas bleues qui van a juego avec el tono de la monture. Este est el tipo de produit qui hace qui alguien deje de hacer scroll. Non est para toutes las marques (es plus declaration qui básico), mais para gammes resort, colecciones de voirano et marques quieren destacar en une estantería llena, funciona. Vemos muchos commandes de estas para ediciones limitadas et lanzamientos de temporada.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Acétate Degradado Azul', 'Lente a Juego', 'Pieza Declaration', 'Lista para Edition Limitada'],
  },
  {
    name: 'Wayfarer Acétate Roja',
    description: 'Acétate rouge atrevido e indiscutible qui exige atención. Non est rouge cereza ni rouge bombero — est plus un burdeos-rouge profundo et sofisticado qui se lee comme sûr sin ser ruidoso. Combinada avec verres marrones para calidez. Es un movimiento potente en une collection: atrae la mirada dans la cuadrícula de votre web, destaca en Instagram et signala qui votre marque no le tiene miedo au couleur. Se vende especialmente bien a mujeres et a marques qui apuntan au público consciente de la moda. Un añadido inteligente junto a vos básicos noir et carey.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Acétate Rojo Profundo', 'Lente Cálida Marrón', 'Llamativa', 'Fashion Forward'],
  },
]

export default function WayfarerPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Wayfarer au par Mayor',
        description: 'Lunettes de sol wayfarer clásicas avec montures premium de acétate. Plus de 200 couleures et patrones disponibles. Options de verres UV400 et polarisées. Personnalisation OEM complète avec impresión de logo.',
        minPrice: '5.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes Wayfarer', url: 'https://eyeviewsunglasses.com/fr/produits/wayfarer' }
      ]} />
      <FAQPageSchema faqs={wayfarerFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes Wayfarer</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lunettes de Soleil Wayfarer au par Mayor
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Lunettes de Soleil Wayfarer au par Mayor - Fabricant de Montures de Acétate Personalizadas"
              loading="lazy"
              className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Ovoirview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                La wayfarer tiene une historia qui ningún autre modelo de lunettes de soleil puede igualar. En 1952, un <a href="https://en.wikipedia.org/wiki/Ray-Ban_Wayfarer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">diseñador llamado Raymond Stegeman</a> en Bausch &amp; Lomb hizo algo radical: abandonó el metal par complet diseñó une monture de lunettes hecha de un nouveau matériau llamado acétate. El resultado era atrevido, angular et complètemente diferente a todo le qui la gente había visto antes. Parecía el futuro.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hollywood se fijó rápido. James Dean llevó wayfarer en <em>Rebelde sin causa</em>. Audrey Hepburn las llevó en <em>Desayuno avec diamantes</em>. Para los ans 60, las wayfarer estaban en toutes pairetes — en estrellas de rock, políticos, artistas et gente corriente qui simplemente quería voirse bien. Las ventes bajaron dans les 70 et 80, mais luego <em>Top Gun</em> et <em>The Breakfast Club</em> las trajeron de vuelta avec fuerza. El patrón se ha repetido chaque déchaque depuis entonces: las wayfarer bajan légèremente, luego vuelven plus fuertes. A estas alturas, llamarlas &ldquo;tendencia&rdquo; no tiene sentido. Son un fijo permanente.
              </p>
              <p className="text-lg leading-relaxed">
                Comme <strong>fabricant de lunettes wayfarer</strong>, nous produisons estas montures en <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">acétate de grado italiano</a> premium — el même tipo de matériau qui usan las marques de lujo qui cobran $200-400 en retail. El acétate est de origen vegetal (fibras de algodón et pulpa de madera), hypoallergénique, et tiene une riqueza de couleur qui el plástico inyectado simplemente no puede replicar. Tenemos plus de 200 couleures et patrones en stock, et nous pouvons conseguir acétate personnalisé para exigences únicos de marque. Con prixs depuis solo $5.50 par paire, las wayfarer en gros proposez-vous algunos des meilleures marges en todo el affaires de lunettes.
              </p>
            </div>
          </div>

          {/* Aviator vs Wayfarer Compaireison */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-6">Wayfarer vs Aviador: Comparation Rápida</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Muchos de notres clients preguntan avec cuál empezar. Ici va la comparation honesta.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl ovoirflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left font-semibold text-gray-700"></th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">🔲 Wayfarer</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">✈️ <Link href="/fr/produits/aviateur" className="text-primary-600 hovoir:underline">Aviador</Link></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-6 py-3 font-medium">Matériau de Monture</td><td className="px-6 py-3 text-gray-600">Acétate / Plástico PC</td><td className="px-6 py-3 text-gray-600">Acero inoxidable / Aluminio / Titane</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Rango de Prix</td><td className="px-6 py-3 text-gray-600">$5 - $11 / paire</td><td className="px-6 py-3 text-gray-600">$8 - $22 / paire</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Options de Couleur</td><td className="px-6 py-3 text-gray-600">200+ (gran variedad)</td><td className="px-6 py-3 text-gray-600">5-8 couleures de revêtement</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Poids</td><td className="px-6 py-3 text-gray-600">25-32g</td><td className="px-6 py-3 text-gray-600">15-32g (varía según metal)</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Meilleur Método de Logo</td><td className="px-6 py-3 text-gray-600">Estampado en caliente / relieve</td><td className="px-6 py-3 text-gray-600">Grabado láser</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Style</td><td className="px-6 py-3 text-gray-600">Casual, couleurida, atrevida</td><td className="px-6 py-3 text-gray-600">Elegante, clásica, premium</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Ideal Para</td><td className="px-6 py-3 text-gray-600">Volumen, variedad, moda</td><td className="px-6 py-3 text-gray-600">Posicionamiento premium</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Wayfarer au par Mayor" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Collection Wayfarer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 ovoirflow-hidden hovoir:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className="text-7xl group-hovoir:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/fr/contact" className="btn-primary text-sm">Commander Devis</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Spécifications Complètes</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm ovoirflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Matériau de Monture', 'Acétate de grado italiano (Mazzucchelli / similar) ou Plástico PC'],
                      ['Poids de Monture', 'Acétate: 28-32g | Plástico PC: 20-24g'],
                      ['Matériau de Lente', 'Polycarbonate / TAC Polarisée / CR-39 Óptica'],
                      ['Ancho de Lente', '50mm / 52mm / 54mm / 56mm'],
                      ['Ancho de Pont', '18mm / 20mm / 22mm'],
                      ['Largo de Patilla', '140mm / 145mm / 150mm'],
                      ['Altura de Lente', '38mm - 44mm'],
                      ['Protection UV', 'UV400 — bloquea el 100% de la radiation UVA et UVB'],
                      ['Polarisation', 'Opcional película TAC de 7 capas — 99% de reducción de éblouissement'],
                      ['Couleures de Monture', '200+ couleures de acétate: sólido, carey, transpaireente, mármol, dégradé, personnalisé'],
                      ['Couleures de Lente', 'Gris, Marrón, Voirde, Azul, Rosa, Amarillo, Miroir, Degradado — tous disponibles'],
                      ['Bisagras', 'Bisagras de muelle de 5 barriles (norme) ou 7 barriles (premium)'],
                      ['Pont Nasal', 'Pont integrado keyhole ou silla — moldeado dans la monture'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 pièces par modelo — se permite mezclar couleures'],
                      ['Tiempo de Échantillon', '3-5 jours laborables'],
                      ['Tiempo de Production', '15-20 jours norme / 10-12 jours urgente'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hovoir:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Acetate Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el Acétate Importa (Y Por Qué el Plástico Barato Non Funciona)</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Si vas a vender wayfarer, necesitas entender el matériau. Es el factor plus importante en le premium qui se siente votre produit.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-green-700">✅ Acétate (Lo Que Recomendamos)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">acétate</a> se fabrica a partir de fibras de algodón et pulpa de madera — técnicamente est un matériau de origen vegetal, le qui est un buen ángulo de sostenibilidad para el marketing. Se corta de láminas sólidas (no se inyecta en moldes), le qui significa qui los couleures van de lado a lado. Rasca la superficie et el couleur sigue ahí. El matériau tiene une calidez et profundidad naturales qui se ven caras. Également est hypoallergénique et ajustable — los ópticos pueden ajustar montures de acétate avec calor para un ajuste personnalisé.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro acétate proviene de fabricants italianos establecidos comme <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">Mazzucchelli</a> (fundada en 1849) qui suministran la même matria prima a casas de lunettes de lujo. La diferencia de coste vs plástico est de $2-3/paire, mais el salto en valor percibido en retail est de $20-40. Es la meilleur meilleura en retorno de invoirsión qui puedes hacer.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-500">⚠️ PC / Plástico Inyectado</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Également le nous proposons, et tiene son lugar — principalmente para produits promocionales, gammes económicas par debajo de $15 en retail et lunettes para enfants où la durabilidad importa plus qui la sensation. El plástico PC est plus léger (20-24g vs 28-32g du acétate), plus barato ($3.50-6/paire) et virtualmente indestructible.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mais no se siente premium. El couleur est superficial (se puede rayar), el acabado est brillant de une forma qui grita &ldquo;barato&rdquo; et no hay variation natural de patrón. Si votre marque está posicionada par encima des lunettes de gasolinera, ve avec acétate. Si estás haciendo un regalo promocional de $5 para une feria, el plástico está bien. Non juzgamos — nous fabriquons ambos.
                </p>
              </div>
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Personnalisation para Lunettes Wayfarer</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El acétate abre options de branding qui no tienes avec montures metálicas. Esto est le qui meilleur funciona.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Options de Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estampado en caliente</strong> — lámina dorada ou plateada presionada dans la branche. Limpio, lujoso, notre plus popular para wayfarer. ~$0.15-0.20/paire.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Serigrafía</strong> — cualquier couleur, interior ou exterior de la branche. Más visible qui el estampado en caliente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Relieve / bajo relieve</strong> — logo presionado directamente dans le acétate. Sutil, táctil, très premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Insignia metálica</strong> — petit logo de metal insertado dans la branche. Efecto 3D qui destaca.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Couleur et Patrón</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>200+ couleures de acétate en stock</strong> — sólido, carey, transpaireente, mármol, veta de madera, dégradé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Igualation Pantone personnalisée</strong> — danos un código de couleur et conseguimos el acétate a medida (MOQ 300 pcs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Montures bicouleur</strong> — diferente couleur interior vs exterior para un look en capas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Acabado mat ou brillant</strong> — brillant est norme, mat cuesta ~$0.30/paire extra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches rígidos:</strong> EVA, polipiel ou cartón — tous avec votre logo. $0.80-2.50/ud según matériau.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Fundas de microfibra:</strong> impresas avec votre marque, sirven comme pan de limpieza. $0.30-0.50/ud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cajas retail:</strong> impresión a todo couleur, taille personnalisé, avec inserto de espuma ou cartón. $0.60-1.50/ud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> pans de limpieza ($0.15), tarjetas de garantie ($0.08), etiquetas colgantes ($0.10), pegatinas ($0.05)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys */}
          <section className="mb-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Quién Pide Wayfarer au par Mayor?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Las wayfarer sont la forma de monture plus voirsátil en lunettes. Esto est quién las achat et par qué.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🚀 Lanzamientos de Marques Nouvelles</h3>
                <p className="text-gray-600 text-sm">Marques de lunettes primerizas quieren un style sûr et qui guste a todo el mundo para lanzar. El bajo coste par paire deja plus devis para marketing et emballage.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛒 Vendedores E-Commerce</h3>
                <p className="text-gray-600 text-sm">Vendedores de Shopify, Amazon et Etsy qui necesitan un catálogo profundo de couleures. Las 200+ options de acétate significan qui puedes tener 10-20 listings únicos avec une sola forma de monture.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎪 Entreprises de Eventos et Promoción</h3>
                <p className="text-gray-600 text-sm">Eventos corporativos, festivales de música, bodas, ferias — wayfarer de couleur personnalisé avec logo sont el regalo perfecto. La gente realmente las conserva et las usa.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏬 Boutiques Retail et Boutiques</h3>
                <p className="text-gray-600 text-sm">Boutiques físicas quieren son propia marque. La variedad de couleures vous permite llenar un expositor avec une sola forma de monture — le qui simplifica el inventerio.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">👗 Marques de Moda et Ropa</h3>
                <p className="text-gray-600 text-sm">Marques de ropa qui añaden lunettes de soleil comme gamme de accesorios. Las wayfarer combinan avec prácticamente cualquier estética de moda, et la gama de couleures permite hacer colecciones de temporada.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏖️ Resort et Turismo</h3>
                <p className="text-gray-600 text-sm">Hoteles, cruceros et boutiques de turistas. Wayfarer personnalisées avec el nombre du destino sont exceverres souvenirs qui la gente realmente usa — no autre imán de nevoira.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes sur Lunettes Wayfarer</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {wayfarerFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Également Te Puede Interesar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/aviateur" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Aviador</h3>
                <p className="text-gray-600 text-sm">Montures metálicas, forma de lágrima, sensation premium. El autre &ldquo;imprescindible&rdquo; en cualquier collection de lunettes. La mayoría des marques llevan tanto aviador comme wayfarer.</p>
              </Link>
              <Link href="/fr/produits/oeil-de-chat" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😺</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Ojo de Gato</h3>
                <p className="text-gray-600 text-sm">Si votre marque apunta a mujeres, las ojo de gato sont el complemento perfecto a las wayfarer. Montures de acétate avec puntas elevadas et un aire retro-glam.</p>
              </Link>
              <Link href="/fr/produits/polarise" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Polarisées</h3>
                <p className="text-gray-600 text-sm">Añade verres polarisées a cualquier wayfarer para un upgrade premium. Cuesta $2-3 plus par paire, vous permite cobrar $15-20 plus en retail.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Listo para Commander Wayfarer?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos qué couleures et spécifications necesitas et tendrás un devis en 24 heures.
              Las échantillons se envían en 3-5 jours. Sin compromiso jusqu'à qui des el visto bueno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-white text-primary-600 hovoir:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-couleurs">
                Commander Devis
              </Link>
              <Link href="/fr/produits" className="border-2 border-white text-white hovoir:bg-white hovoir:text-primary-600 font-bold py-3 px-8 rounded-lg transition-couleurs">
                Voir Tous les Produits
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
