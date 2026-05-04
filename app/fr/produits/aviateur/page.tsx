import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Aviateur en Gros | Fabricant de Lunettes Aviateur OEM - EyeView',
  description: 'Fabricant leader de lunettes de soleil aviateur en gros. Lunettes aviateur personnalisées avec gravure logo, montures métal, verres UV400/polarisés. MOQ 100 pcs. Direct usine. Demandez un devis !',
  keywords: 'lunettes aviateur en gros, fabricant lunettes aviateur, lunettes aviateur personnalisées, OEM lunettes aviateur, lunettes de soleil en gros, fabricant lunettes, montures métal en gros',
  openGraph: {
    title: 'Lunettes de Soleil Aviateur au par Mayor | Fabricant OEM - EyeView',
    description: 'Fabricant líder de lunettes de soleil aviador en gros. Logo personnalisé, montures metálicas, verres UV400/polarisées. MOQ 100 pcs. Prixs de usine.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/aviateur',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/aviateur',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/aviator',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/aviateur',
    },
  },
}

const aviatorFaqs = [
  {
    question: 'Quel estt el commande minimum para lunettes aviador en gros?',
    answer: 'Solo 100 pièces par modelo. Y ici viene le bueno: puedes mezclar dentro de esas 100. Podrías commander 20 montures doradas avec verres grises, 30 plateadas avec bleu miroir et 50 negras avec dégradé. Así pruebas qué combinaciones achatn realmente vos clients en vez de adivinar. La mayoría de notres clients de aviador empiezan avec 200-300 pièces en 2-3 combinaciones de couleur et luego repiten commande des ganadoras en quantitées mayores.',
  },
  {
    question: 'Qué options de metal proposez-vous para las montures aviador?',
    answer: 'Tres principales. El acier inoxydable est el plus popular: résistant, se ve genial, no se oxida et cuesta $8-12/paire. La alliage d'aluminium est un 40% plus légère (ideal para uso todo el día) et cuesta $10-14/paire. Y luego está el beta-titane para la gama premium: hypoallergénique (la Organization International de Nonrmalization clasifica el titane comme matériau biocompatible según la norma ISO 5832), increíblemente léger avec 15-20 grammes et prácticamente imposible de romper. El titane cuesta $14-22/paire, mais vous permite vender a $80-150+ en retail, así qui los marges sont en realidad meilleures. Cualquiera de ellos se puede recubrir en doré, argenté, noir, oro rose ou couleures personnalisés.',
  },
  {
    question: 'Puis-je grabar mi logo en lunettes aviador?',
    answer: 'Por supuesto, et sinceramente ici est où las aviador de metal brillan de voirdad comparadas avec las montures de plástico. El grabado láser queda increíble en metal: nítido, permanente et elegante. Podemos grabar dans le interior ou exterior des branches. Si quieres algo plus llamativo, nous faisons insignias metálicas 3D (aleation de zinc ou acier inoxydable) qui se sueldan directamente à la branche ou el pont. Également hay impresión en verres para logos discretos dans la esquina et plaquetas nasales grabadas a medida si realmente quieres ir a tope avec el branding.',
  },
  {
    question: 'Proposez-vous verres polarisées para aviador?',
    answer: 'Oui, et le recomiendo mucho. Nuestras verres polarisées TAC usan une película de 7 capas qui elimina el 99% du éblouissement — la diferencia est abismal, especialmente para conducir. Ici va el argumento de affaires: las aviador polarisées se venden un 25-40% plus caras en retail qui las UV400 norme. Un paire qui se vende a $40 sin polarizar fácilmente llega a $50-55 polarisé. Également nous faisons verres photochromiques (se oscurecen avec la luz solar), revêtements miroir, antireflets et dégradés. Mezcla et combina comme quieras.',
  },
  {
    question: 'Quelle est la différence entre las aviador des wayfarer para vente en gros?',
    answer: 'Buena pregunta — nous la hacen mucho. La voirsión corta: las aviador sont de metal, las wayfarer sont de acétate/plástico. Eso significa qui las aviador cuestan un poco plus par paire ($8-14 vs $5-11) mais également transmiten une sensation plus premium. Las aviador tienden a ser légèremente plus masculinas et tienen esa herencia militar/piloto a son favor. Las wayfarer sont plus unisex et vienen en muchos plus couleures. Sinceramente? La mayoría des marques exitosas llevan ambas. Si tienes qui choisir una, aviador si buscas posicionamiento premium, wayfarer si quieres volume.',
  },
  {
    question: 'Qué emballage puis-je obtenir avec mi commande de aviador?',
    answer: 'Nous proposons toda la gama. El setup plus popular est un estuche rígido (EVA avec votre logo impreso) plus une funda de microfibra qui sirve également comme pan de limpieza. Cuesta unos $1.50-2.50 par set dependiendo des matériaux. Également nous faisons estuches de piel, latas metálicas, cajas de cartón personnalisées avec impresión a todo couleur, tarjetas de garantie etiquetas colgantes. Para gammes premium, algunos clients optan par cajas avec cierre magnético ou incluso estuches de madera. El MOQ para emballage est de 500 pièces — mais puedes usar emballage genérico para votre primer commande petit et cambiar a personnalisé dans la repetition.',
  },
]

const products = [
  {
    name: 'Aviador Clásica Dorada',
    description: 'Esta est la qui todo el mundo imagina quand dices "aviador." Acero inoxidable doré pulido, forma de lágrima, verres voirdes G-15 qui cortan el éblouissement sin hacer qui todo se vea raro. El acabado doré tiene revêtement PVD (no pintura barata en spray) así qui aguanta el uso diario. Vendemos plus de estas qui cualquier autre SKU individual — et la mayoría de notres clients dicen le même. Si estás lanzando une marque de lunettes et quieres une apuesta sûre, esta es.',
    price: '$8.50 - $12.00',
    moq: '100 pcs',
    features: ['Acier Inoxydable', 'Lente Voirde G-15', 'Acabado PVD Doré', 'Plaquetas de Silicona'],
  },
  {
    name: 'Aviador Miroir Plateada',
    description: 'Monture plateada, verres miroir plateadas — el tipo de lunettes de soleil qui ves en chaque vacation dans la playa. El revêtement miroir refleja alrededor du 60% de la luz entrante, le qui las hace genuinamente buenas para condiciones de mucha luz (no solo bonitas). La monture est acier inoxydable avec ban de rodio qui no se oxidará ni en aire salado costero. Las charnières de muelles dan algo de flexibilidad para adaptarse a diferentes tailles de cabeza sin sentirse demasiado apretadas ou flojas. Gran éxito de ventes para marques resort et boutiques de playa.',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    features: ['Ban de Rodio', 'Recubrimiento Miroir', 'Bisagras de Muelle', 'Resistente a Corrosión'],
  },
  {
    name: 'Aviador Stealth Noir Mate',
    description: 'Para marques qui buscan ese look táctico, sin rodeos. El electrochapado mat le da à la monture une superficie complètemente antirreflectante — une sensation très diferente au doré ou argenté brillant. Combinadas avec verres ahumadas oscuras qui bloquean el 85% de la luz visible, sont protection solar seria. Vemos muchos commandes de marques outdoor, entreprises de suministros para fuerzas du orden et marques de moda masculina. Las puntas de branche reforzadas sont un buen toque — sujetan sin deslizarse incluso quand sudas.',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    features: ['Acabado Mate', 'Lente Ahumada Oscura', 'Puntas Reforzadas', 'Antirreflectante'],
  },
  {
    name: 'Aviador Fashion Oro Rosa',
    description: 'El oro rose lleva unos cinco ans siendo el acabado de moda et no échantillon signales de desaceleration. El tono cálido rose-doré se fotografía de maravilla (enorme para marques qui venden par Instagram) et favorece prácticamente a tous los tonos de piel. Las combinamos avec verres degradadas roses — oscuras arriba, claras abajo — le qui les da ese look de moda sin esfuerzo. Fabrichaques en alliage d'aluminium pesan menos de 25 grammes. Si votre clienta est une mujer de 22 ans achatndo depuis son móvil, esto est le qui va a clickear.',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    features: ['Aleation de Aluminio', 'Lente Degradada Rosa', 'Menos de 25g', 'Tono Oro Rosa'],
  },
  {
    name: 'Aviador Polarisée Miroir Azul',
    description: 'Voirres miroir bleu océano vivo avec polarisation real debajo — así qui se ven increíbles Y realmente funcionan. La película polarisée TAC bloquea el 99% du éblouissement qui rebota en agua, carreteras et nieve. La monture gunmetal mantiene el foco en esas verres. Esta est notre recomendation número uno para clients qui venden au público costero/surf/pesca. Se fotografían bien, rinden bien et justifican un prix retail plus alto gracias à la polarisation. Cuestan unos $2-3 plus par paire qui las no polarisées, mais puedes cobrar $15-20 plus en retail.',
    price: '$11.00 - $15.00',
    moq: '100 pcs',
    features: ['Polarisée TAC', 'Miroir Azul', 'Monture Gunmetal', '99% Reducción de Deslumbramiento'],
  },
  {
    name: 'Aviador Premium de Titane',
    description: 'Lo meilleur de notre gamme aviador. Monture de beta-titane qui pesa 15 grammes — apenas la sientes dans la cara. El titane est hypoallergénique (sin níquel, sin reacciones), a prueba de corrosión, et puedes doblarlo et vuelve a son sitio. Las combinamos avec verres ópticas CR-39 antireflets — la même qualité qui encontrarías en montures de diseñador de $200+. Esto est para marques quieren competir dans le extremo premium du marché. Votre prix retail puede ser fácilmente $80-150+, et el coste par unidad sigue siendo solo $14-22. Haz las cuentas de esos marges.',
    price: '$14.00 - $22.00',
    moq: '100 pcs',
    features: ['Beta Titane', 'Lente Óptica CR-39', 'Antirreflejante', 'Solo 15 Grammes'],
  },
]

export default function AviadorPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Aviateur au par Mayor',
        description: 'Lunettes de sol aviador clásicas avec monture metálica en forma de lágrima. Disponibles en acier inoxydable, alliage d'aluminium et titane. Options de verres UV400 et polarisées. Personnalisation OEM complète avec grabado de logo.',
        minPrice: '8.50',
        maxPrice: '22.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes Aviador', url: 'https://eyeviewsunglasses.com/fr/produits/aviateur' }
      ]} />
      <FAQPageSchema faqs={aviatorFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes Aviador</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lunettes de Soleil Aviateur au par Mayor
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
              alt="Lunettes de Soleil Aviateur au par Mayor - Fabricant OEM de Montures Metálicas"
              loading="lazy"
              className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Ovoirview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Ici va un dato curioso: la aviador jamais fue pensada comme artículo de moda. En 1936, <a href="https://www.bausch.com/our-company/history/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">Bausch &amp; Lomb</a> consiguió un contrato du Cuerpo Aéreo du Ejército de EE.UU. para diseñar lunettes de soleil para pilotos militares. El problema era específico: los pilotos volaban plus alto et plus rápido qui jamais, et el sol les destrozaba la visión. La solution? Una lente grande en forma de lágrima qui cubría toda la cuenca du ojo, une monture metálica delgada qui pesaba casi nada bajo un casco de vuelo, et un doble pont sur la nariz para repartir la presión. Las llamaron &ldquo;aviador&rdquo; parce que, bueno, eso est le qui llevaban los qui las usaban.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Luego llegó la Segunda Guerra Mundial, et de repente millones de soldados las llevaban puestas. Quand volvieron a casa, siguieron usándolas. Para los ans 60 et 70, las aviador habían saltado de la cabina a Hollywood — las llevaba todo el mundo, depuis Paul Newman jusqu'à el repaireto de Top Gun. El style simplemente se quedó. Casi 90 ans después, el design básico apenas ha cambiado, et las aviador siguen siendo uno des tres modelos de lunettes de soleil plus vendidos en todo el mundo. Eso no est une tendencia — est un clásico.
              </p>
              <p className="text-lg leading-relaxed">
                Producimos plus de 200.000 paires de <strong>lunettes aviador personnalisées</strong> au an para marques en plus de 50 pays. Nuestra usine cuenta avec gammes de production dedichaques a montures metálicas avec mecanizado CNC, electrochapado PVD et montaje de precisión de verres. Ya necesites 100 paires para probar un nouveau marché ou 50.000 paires para un lanzamiento retail nacional, nous avons la capacidad et la expérience. Y comme las aviador sont notre pan de chaque día, nous avons el proceso perfeccionado — le qui significa production plus rápida, menos defectos et meilleures prixs.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Collection Aviador</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 ovoirflow-hidden hovoir:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
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
                      ['Matériau de Monture', 'Acier Inoxydable / Aleation de Aluminio / Beta Titane'],
                      ['Poids de Monture', 'Acero: 28-32g | Aluminio: 18-22g | Titane: 15-18g'],
                      ['Matériau de Lente', 'Polycarbonate / TAC Polarisée / CR-39 Óptica / Vidrio'],
                      ['Ancho de Lente', '55mm / 58mm / 60mm / 62mm'],
                      ['Ancho de Pont', '14mm / 15mm / 16mm / 18mm'],
                      ['Largo de Patilla', '135mm / 140mm / 145mm'],
                      ['Altura de Lente', '48mm - 52mm (forma de lágrima)'],
                      ['Protection UV', 'UV400 — bloquea el 100% des rayos UVA (315-380nm) et UVB (280-315nm)'],
                      ['Polarisation', 'Opcional película TAC de 7 capas — 99% de reducción de éblouissement'],
                      ['Couleures de Monture', 'Doré, Argenté, Gunmetal, Noir Mate, Oro Rosa ou PVD personnalisé'],
                      ['Couleures de Lente', 'Gris, Voirde G-15, Marrón, Azul, Rosa, Miroir, Degradado'],
                      ['Plaquetas Nasales', 'Silicona ajustable avec brazo de titane'],
                      ['Bisagras', 'Barril norme ou cargadas avec muelle (ajuste flexible)'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001 — documentation disponible bajo solicitud'],
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

          {/* Frame Matériau Compaireison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Eligiendo el Metal Correcto para vos Aviador</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Esta est une des primeras decisiones qui tomarás, et afecta a todo: coste, poids, durabilidad et le premium qui se siente votre produit dans la mano de alguien. Ici va el análisis honesto.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔩</div>
                <h3 className="text-xl font-bold mb-3">Acier Inoxydable</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestra opción plus popular et la qui nous recommandons para la mayoría des marques. Usamos <a href="https://en.wikipedia.org/wiki/SAE_304_stainless_steel" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">acero grado 304 ou 316L</a> — el même matériau des buenos relojes. Es fuerte, no se corroe et acepta el revêtement de maravilla. Doré, argenté, noir, oro rose — tous quedan genial en acero et aguantan avec el tiempo. El poids (28-32g) en realidad juega a votre favor parce qui los clients asocian ese léger poids avec qualité. Ideal para marques avec retail de $20-60.
                </p>
                <div className="text-primary-600 font-bold">$8 - $12 / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🪶</div>
                <h3 className="text-xl font-bold mb-3">Aleation de Aluminio</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si vos clients valoran la commedidad — et especialmente si llevan lunettes de soleil todo el día — el aluminio vale la pena. Con 18-22g est notablemente plus léger qui el acero. Usamos <a href="https://en.wikipedia.org/wiki/6061_aluminium_alloy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">aleation aeronáutica 6061-T6 ou 7075</a> (el même matériau qui usan en fuselajes de aviones, par si quieres un argumento de vente). Las montures se pueden anodizar en prácticamente cualquier couleur et el acabado est très durable. Ideal para marques outdoor, athleisure et el rango retail de $40-80.
                </p>
                <div className="text-primary-600 font-bold">$10 - $14 / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Titane</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La jugada de prestigio. El beta-titane avec 15-18g est casi cómicamente léger — la gente se los pone e inmediatamente dice &ldquo;wow.&rdquo; Es 100% hypoallergénique (nada de níquel), le qui est un voirdadero argumento de vente para pieles sensibles. Y la flexibilidad est increíble — puedes doblar las branches casi jusqu'à dejarlas planas et vuelven a son forma. El inconveniente? Cuesta plus. Mais ici está la cosa: el titane vous permite vender a $80-200+ sin despeinarte. Los marges par paire suelen ser meilleures qui avec montures plus baratas.
                </p>
                <div className="text-primary-600 font-bold">$14 - $22 / paire</div>
              </div>
            </div>
          </section>

          {/* Lens Options */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Options de Voirres</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              La monture llama la atención, mais la lente est le qui votre client mira a través chaque día. Esto est le qui nous proposons.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Polycarbonate (PC)</h3>
                <p className="text-sm text-gray-600">El norme. Resistente a impacts, léger, incassable — 10 veces plus fuerte qui el vidrio. Sirve para todo, depuis uso casual jusqu'à deportes. Tous notres couleures et revêtements miroir están disponibles en PC. Esto est le qui usa el 70% de notres clients.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">TAC Polarisée</h3>
                <p className="text-sm text-gray-600">Siete capas de película polarisée entre láminas de PC. Elimina el 99% du éblouissement reflejado. El upgrade qui justifica cobrar plus. Añade unos $2-3 a votre coste par paire mais vous permite cobrar $15-20 plus en retail. Merece la pena.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">CR-39 Óptica</h3>
                <p className="text-sm text-gray-600">Si quieres competir avec las grandes marques en qualité de lente, esta es. Un número de Abbe de 58 significa óptica perfecta sin distorsión. Resistente a rayones. Más légère qui el vidrio. La elección para posicionamiento premium.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Fotocromática</h3>
                <p className="text-sm text-gray-600">Se oscurece avec la luz solar, se aclara en interiores. Pasa de Catégorie 1 a Catégorie 3 en unos 30 segundos. Un buen truco et un argumento de vente para clients quieren unas lunettes para todo. Añade unos $3-4 par paire.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Vidrio</h3>
                <p className="text-sm text-gray-600">De la vieja escuela, mais algunos marchés le adoran. La meilleur claridad óptica, la plus résistant a rayones, la plus pesada. Popular en Europa et Japón où las verres de vidrio tienen une percepción premium. Podemos hacer vidrio mineral en tous los tintes norme.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Recubrimientos Disponibles</h3>
                <p className="text-sm text-gray-600">Miroir (argenté, bleu, doré, rouge, voirde, púrpura), antireflet, hidrofóbico (repele agua), oleofóbico (resiste huellas dactilares) et antibuée. Combínalos comme quieras.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Hazlas Tuyas</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Ici est où conviertes unas lunettes de soleil geniales en TU produit. Todo le qui nous pouvons personalizar.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Trabajo de Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Grabado láser</strong> — el plus popular. Limpio, permanente, queda genial en metal. Interior ou exterior de la branche.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Insignia metálica</strong> — une petite insignia 3D de aleation de zinc ou acero soldada à la branche. Se siente cara.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impresión en lente</strong> — petit logo serigrafiado dans la esquina de la lente. Sutil mais visible.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Plaquetas personnalisées</strong> — votre logo grabado ou impreso dans les plaquetas de silicona. Un bonito detalle.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Couleures</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Monture:</strong> Doré, Argenté, Noir, Gunmetal, Oro Rosa — ou danos un código Pantone et le igualamos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tintes de lente:</strong> Gris, Voirde, Marrón, Azul, Rosa, Amarillo, Rojo — ou couleur personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Miroir:</strong> Argenté, Azul, Doré, Rojo, Voirde, Púrpura, Rosa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Degradado:</strong> Degradado de arriba a abajo en cualquier couleur de lente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches rígidos:</strong> EVA avec cremallera, piel avec cierre magnético ou lata metálica — tous avec votre logo impreso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Fundas suaves:</strong> Microfibra avec cordón et logo — sirve également comme pan de limpieza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cajas retail:</strong> Cartón impreso a todo couleur, insertos personnalisés, lengüetas para colgar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> Pans de limpieza, tarjetas de garantie, etiquetas colgantes, pegatinas — todo avec votre marque</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Quién Compra Aviador au par Mayor?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Enviamos aviador a une gama bastante amplia de affairess. Estos sont los plus comunes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏪 Propietarios de Marques de Lunettes</h3>
                <p className="text-gray-300 text-sm">Marques nouvelles et establecidas construyendo son gamme de produits. Las aviador suelen ser el primer style qui lanzan — sont sûres, se venden et quedan bien dans les fotos de marketing.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🛍️ Boutiques Retail</h3>
                <p className="text-gray-300 text-sm">Boutiques, boutiques de surf, ópticas et achatdores de grandes almacenes buscando son propia marque. Nuestro minimum de 100 pièces permite a boutiques petites entrar sin un gran riesgo.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🌐 Vendedores Online</h3>
                <p className="text-gray-300 text-sm">Vendedores de Amazon, Shopify, Etsy qui necesitan produit de qualité avec marges qui funcionen para e-commerce. Podemos proporcionar fotos de produit et descripciones para acelerar vos listings.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🎁 Corporativo et Promocional</h3>
                <p className="text-gray-300 text-sm">Entreprises qui piden aviador avec marque para ferias, torneos de golf, regalos de equipo et eventos. Alto valor percibido a un prix qui funciona para deviss promocionales.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏨 Hoteles et Resorts</h3>
                <p className="text-gray-300 text-sm">Marques de hostelería qui proposez-vous aviador personnalisées comme amenities ou artículos de boutique de regalo. El emballage personnalisé avec el nombre du resort crea un bonito souvenir qui los huéspedes realmente conservan.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">📦 Distribuidores</h3>
                <p className="text-gray-300 text-sm">Mayoristas regionales qui abastecen a múltiples boutiques. Nuestros prixs par volume en commandes de 1.000+ et 5.000+ dan aux distributeures los marges qui necesitan para atender a sus cuentas.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes sur Lunettes Aviador</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {aviatorFaqs.map((faq, index) => (
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
              <Link href="/fr/produits/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Wayfarer</h3>
                <p className="text-gray-600 text-sm">El autre style &ldquo;imprescindible&rdquo;. Montures de acétate, toneladas de couleures et la forma plus vendida du mundo. La mayoría des marques llevan tanto aviador comme wayfarer.</p>
              </Link>
              <Link href="/fr/produits/polarise" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Polarisées</h3>
                <p className="text-gray-600 text-sm">Añade verres polarisées a cualquier aviador para un upgrade premium. 99% de reducción de éblouissement, 25-40% plus de prix retail. La forma plus fácil de meilleurar vos marges.</p>
              </Link>
              <Link href="/fr/produits/tr90" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Deportivas</h3>
                <p className="text-gray-600 text-sm">Si vos clients necesitan algo plus résistant qui las aviador — montures envolventes TR90 avec agarres antideslizantes para running, ciclismo et deportes au aire libre.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Listo para Commander Aviador?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos le qui necesitas — style, quantité, cualquier personnalisation — et vous responderemos en 24 heures avec prixs.
              Las échantillons se envían en 3-5 jours. Sin compromiso jusqu'à qui estés listo.
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
