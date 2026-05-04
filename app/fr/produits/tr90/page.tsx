import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricant de Lunettes de Soleil TR90 | Usine de Lunettes Ultra-Légères TR90 - EyeView',
  description: 'Fabricant de lunettes de soleil TR90. Montures ultra-légères en Grilamid TR90 (15-20g), matériau à mémoire flexible, hypoallergénique. Sport, enfants, quotidien. MOQ 100 pcs. Direct usine.',
  keywords: 'fabricant lunettes TR90, lunettes TR90 en gros, usine lunettes ultra-légères, Grilamid TR90, lunettes flexibles, fabricant lunettes sport, lunettes enfants en gros',
  openGraph: {
    title: 'Fabricant de Lunettes de Soleil TR90 | Usine de Lunettes Ultralégères TR90 - EyeView',
    description: 'Fabricant de lunettes de soleil TR90. Armazones ultralégers de Grilamid TR90 (15-20g), flexibles, hypoallergéniques. Lunettes deportivas e infantiles. MOQ 100 pièces.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/tr90',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/tr90',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/tr90',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/tr90',
    },
  },
}

const tr90Faqs = [
  {
    question: 'Qu'est-ce quet exactamente el TR90 et par qué se usa para lunettes de soleil?',
    answer: 'El TR90 est une poliamida termoplástica (nylon) desarrollada originalmente par EMS-Grivory en Suiza bajo la marque Grilamid TR90. Fue diseñado específicamente para aplicaciones ópticas — est decir, se creó depuis cero para fabricar montures de lunettes. Las propiedades clave son: ultraléger (un monture terminado pesa solo 15-20 grammes), extrema flexibilidad (puedes doblarlo casi par la mitad et vuelve a son forma original), memoria (mantiene son forma durante ans de uso diario), hypoallergénique (sin níquel, sin BPA, sin reacciones dans la piel) et alta résistance au calor (temperatura de deformation de aproximadamente 120°C). Se fabrica par moldeo par inyección, así qui la production est rápida et consistente — le qui mantiene los coûts bajos. Básicamente, el TR90 vous da un monture qui no pesa nada, jamais se rompe et jamais irrita la piel sensible. Por eso se ha convoirtido dans le matériau preferido para lunettes deportivas, lunettes infantiles et montures légers de uso diario.',
  },
  {
    question: 'Cómo se compara el TR90 avec los montures de acétate et metal?',
    answer: 'La forma plus fácil de entender el TR90 est compararlo directamente. Poids: los montures TR90 pesan 15-20 grammes, los de acétate pesan 25-35 grammes et los de metal pesan 28-35 grammes. Así qui el TR90 est aproximadamente un 40-50% plus léger qui el acétate. Flexibilidad: el TR90 se dobla et vuelve a son forma; el acétate se pairete si le doblas demasiado; el metal se deforma permanentemente. Durabilidad: el TR90 est prácticamente incassable en uso normal; el acétate puede astillarse ou agrietarse; el metal puede deformarse. Options de couleur: el acétate gana ici avec sus ricos patrones en capas; el TR90 está plus limitado a couleures sólidos et acabados superficiales. Percepción premium: el acétate tiene une sensation de lujo qui el TR90 no puede igualar; el TR90 se siente técnico et deportivo. Coût: los montures TR90 cuestan $4-8 par paire, el acétate $6-16 et el metal $8-22. Conclusión: TR90 para rendimiento et valor, acétate para lujo et estética, metal para style clásico.',
  },
  {
    question: 'Se pueden imprimir ou couleurear los montures TR90 avec designs personnalisés?',
    answer: 'Oui, mais las options sont diferentes au acétate. El couleur du TR90 se determina durante el moldeo par inyección — añadimos pellets de couleur masterbatch à la resina Grilamid cruda, así qui el couleur penetra todo el matériau. Tenemos aproximadamente 30 couleures norme (noir mat, noir brillo, bleu marino mat, gris, rouge, naranja, blanc, transpaireente, etc.) et nous pouvons igualar couleures Pantone personnalisés avec un minimum de 500 pièces. Para decoration superficial, nous proposons tampografía (logos, patrones, gráficos multicouleur dans la branche), impresión UV (impresión de qualité fotográfica a todo couleur en superficies planas), transferencia hidrográfica (impresión par inmersión en agua para patrones de camuflaje, fibra de carbono, veta de madera qui envuelven las curvas) et grabado láser. Également nous faisons revêtement de caucho (un acabado mat de tacto suave qui añade agarre et sensation premium) et revêtement PVD metálico en acentos de branche. Lo único qui el TR90 no puede hacer est replicar la profundidad de couleur en capas du acétate — los patrones de carey, mármol et cristal no sont posibles en matériau moldeado par inyección.',
  },
  {
    question: 'Es sûr el TR90 para lunettes de soleil infantiles?',
    answer: 'El TR90 est probablemente el meilleur matériau para lunettes infantiles, et ici explico par qué. Primero, est virtualmente incassable — los enfants sont duros avec las lunettes, et el TR90 se flexiona en vez de partirse. Hemos probado notres montures infantiles avec plus de 5,000 ciclos de apertura et cierre de charnière sin ningún fallo. Segundo, est hypoallergénique — sin níquel, sin BPA, sin ftalatos, sin látex. Los enfants tienen piel plus sensible qui los adultos, et los montures metálicos avec contenido de níquel pueden causar dermatitis de contacto. Tercero, est ultraléger avec 12-15 grammes para montures de taille infantil — las lunettes pesadas se resbalan par las narices petites et los enfants simplemente se las quitan. Cuarto, el TR90 cumple avec los normees de sécurité de juguetes EN 71 (nous pouvons proporcionar documentation de pruebas), qui algunos marchés requieren para lunettes vendidas a menores de 14 ans. Y quinto, el bajo coût ($3.50-6.00 par paire para montures infantiles) le hace económico para padres qui saben qui son hijo probablemente las perderá ou romperá en seis meses de toutes formas.',
  },
  {
    question: 'Qué temperatura puede soportar el TR90?',
    answer: 'El TR90 tiene une temperatura de deflexión térmica (HDT) de aproximadamente 120°C (248°F) a 1.8 MPa — significativamente plus alta qui el nylon norme (alrededor de 75°C) et mucho plus alta qui el acétate (que se ablanda a 70-80°C). En términos prácticos, esto significa qui los montures TR90 pueden survivir sin problemas au ser dejados dans le salpicadero de un coche en voirano (que puede alcanzar 70-90°C), au ser usados en une sauna, ou au ser expuestos a agua caliente sin deformarse. Este est un punto de vente real, especialmente para marques deportivas et de actividades au aire libre — los atletas dejan sus lunettes en coches calientes, en salpicaderos de barcos et en bolsas de gimnasio junto a ropa sudada. El TR90 aguanta todo eso. El extremo frío est igualmente impresionante: el TR90 mantiene son flexibilidad jusqu'à -40°C, así qui no se vuelve quebradizo en condiciones invoirnales. Para comparar, los montures baratos de polycarbonate pueden volvoirse quebradizos par debajo de 0°C.',
  },
  {
    question: 'Quel estt la quantité minimum de commande para lunettes de soleil TR90?',
    answer: 'El MOQ norme est de 100 pièces par modelo usando notre biblioteca de moldes existentes — nous avons plus de 80 designs de montures TR90 en stock qui cubren envolventes deportivos, wayfarers, redondos, rectangulares, style aviador et formas infantiles. Puedes mezclar couleures dentro de esas 100 pièces. Para un design de monture complètemente personnalisé, cobramos une tarifa de molde de $1,500-3,000 dependiendo de la complejidad (los moldes TR90 sont plus caros qui el mecanizado CNC de acétate parce qui los moldes de inyección sont de acero et mecanizados avec precisión). El MOQ para molde personnalisé est de 500 pièces dans le primer commande. Para couleures Pantone personnalisés, el minimum est 500 pièces parce qui necesitamos mezclar et probar el masterbatch. Para couleures norme en stock, no hay minimum plus allá des 100 pièces base.',
  },
]

const products = [
  {
    name: 'Sport Wrap TR90',
    description: 'Nuestro modelo TR90 plus vendido. Design envolvente complet qui bloquea el viento, el polvo et la luz periférica. Las plaquettes nasales de caucho et las puntas de branche proporcionan agarre antideslizante incluso quand estás sudando. La forma envolvente sigue la curvatura du rostro, proporcionando cobertura de 180 grados sin el aspecto de "ojo de insecto". Pesa solo 18 grammes — la mayoría des clients olvidan qui las llevan puestas en cinco minutos. Este est el monture qui equipos de ciclismo, clubes de running et marques de pesca piden en grandes quantitées. Disponible en 15 couleures norme avec options de verres polarisées.',
    price: '$4.50 - $7.50',
    moq: '100 pcs',
    features: ['Design Envolvente', 'Agarre de Caucho', '18g Ultraléger', 'Patilla Antideslizante'],
  },
  {
    name: 'TR90 Wayfarer',
    description: 'La clásica forma wayfarer en TR90 en vez de acétate. Pierdes la profundidad de couleur en capas du acétate, mais ganas un monture qui pesa 16 grammes en vez de 30, cuesta un 40% menos et est prácticamente imposible de romper. Para marques qui apuntan au rango retail de $20-40 où el prix du acétate no funciona, este est el punto óptimo. Podemos recubrir la superficie avec caucho para un acabado mat de tacto suave qui añade agarre et sensation premium. Popular entre marques DTC, entreprises promocionales et librerías univoirsitarias.',
    price: '$4.00 - $6.50',
    moq: '100 pcs',
    features: ['Forma Wayfarer', '16g de Poids', 'Opción Recubrimiento Caucho', 'Prix Accesible'],
  },
  {
    name: 'Kids Flex TR90',
    description: 'Diseñado para edades de 4 a 12 ans avec flexibilidad extra incorporada dans le design. Las branches tienen une zona de flexión integrada qui les permite doblarse hacia afuera sin romperse — importante parce qui los enfants agarran sus lunettes par un brazo et tiran. Hypoallergénique, libre de BPA, libre de ftalatos. Almohadillas nasales de caucho dimensionadas para ponts plus petits. Disponible en couleures brillants et divoirtidos — bleu eléctrico, rose intenso, voirde lima, naranja atardecer, noir mat (para el marché du "enfant cool"). Pesa solo 12 grammes. Los padres las achatn parce qui saben qui los enfants las maltratarán. Tenemos clients qui las venden en packs de 3 parce qui los padres esperan reemplazarlas.',
    price: '$3.50 - $6.00',
    moq: '100 pcs',
    features: ['Edades 4-12', 'Patillas Extra Flex', '12g de Poids', 'Sin BPA/Ftalatos'],
  },
  {
    name: 'TR90 Half-Frame Sport',
    description: 'Design semi au aire où el monture TR90 sujeta la pairete superior de la lente et un cordón de nylon fino sujeta el borde inferior. Esto elimina autres 3-4 grammes comparado avec el monture complet, llevando el poids total a unos 14 grammes. El borde inferior abierto également meilleura la visibilidad hacia abajo, le cual est importante para corredores et ciclistas qui necesitan voir la carretera debajo de ellos. El borde expuesto de la lente les da un aspecto técnico et orientado au rendimiento. Popular entre marques de running, triatlón et gammes de lunettes de golf.',
    price: '$5.00 - $8.00',
    moq: '100 pcs',
    features: ['Semi au Aire', '14g de Poids', 'Visión Inferior Meilleurada', 'Cordón de Nylon Inferior'],
  },
  {
    name: 'TR90 + Metal Combo',
    description: 'Armazón frontal TR90 avec branches de acier inoxydable ou titane. Este híbrido vous da la flexibilidad légère du TR90 où plus importa (el monture frontal qui toca votre cara) et el aspecto premium des branches metálicas. Las branches de metal pueden grabarse avec láser avec votre logo — le cual se ve mucho plus nítido qui imprimir sur plástico. Pesa unos 20 grammes en total. Esta est notre recomendation favorita para marques quieren un look de transition deporte-casual — suficientemente técnico para uso au aire libre, suficientemente elegante para une cena.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Híbrido TR90 + Metal', 'Grabado Láser', '20g de Poids', 'Crossovoir Deporte-Casual'],
  },
  {
    name: 'TR90 Shield / Visor',
    description: 'Design de pantalla avec lente única en TR90 — une lente continua qui cubre ambos ojos avec un monture superior TR90 et sistema de branches. Este est el style qui ves en ciclistas profesionales, patinadores de velocidad et esquiadores de competition. Máximo campo de visión, cero obstrucción du monture dans la vista central et style aerodinámico agresivo. La lente única est de polycarbonate avec revêtements opcionales de miroir, polarisé ou photochromique. Almohadilla nasal ajustable et puertos de ventilation para prevenir el empañamiento. Si votre marque se dirige a atletas serios, este est el monture qui gana credibilidad.',
    price: '$6.00 - $9.00',
    moq: '100 pcs',
    features: ['Lente Pantalla Única', 'Ventilation Anti-Vaho', 'Máximo Campo Visual', 'Design Aerodinámico'],
  },
]

export default function TR90PageFr() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Ultralégères TR90',
        description: 'Lunettes de sol ultralégères de Grilamid TR90. Armazones de 15-20g, matériau avec memoria flexible, hypoallergénique. Styles deportivos, infantiles et de uso diario. Personnalisation OEM complète.',
        minPrice: '3.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes de Soleil TR90', url: 'https://eyeviewsunglasses.com/fr/produits/tr90' }
      ]} />
      <FAQPageSchema faqs={tr90Faqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes de Soleil TR90</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
              alt="Fabricant de Lunettes de Soleil TR90 - Lunettes Deportivas de Nylon Ligero en Gros"
              loading="lazy"
              className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricant de Lunettes de Soleil TR90
            </h1>
          </div>

          {/* Product Story / Ovoirview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Déjame mostrarte algo. Toma un paire de lunettes de soleil normales — des qui achats en une gasolinera. Maintenant dobla las branches. Escuchas ese crujido? Eso est polycarbonate barato diciéndote qui está a punto de partirse. Maintenant intenta le même avec un monture TR90. Puedes prácticamente doblarlo par la mitad. Vuelve a son forma au instante. Sin crujido, sin grieta, sin deformation permanente. Esa flexibilidad no est un truco — est la venteja ingenieril fundamental du <a href="https://www.emsgrivory.com/en/products/grilamid-tr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">Grilamid TR90</a>, une <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">poliamida</a> termoplástica desarrollada par la entreprise química suiza EMS-Grivory específicamente para aplicaciones ópticas.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Estos sont los números qui importan: un monture TR90 terminado pesa 15-20 grammes. Para comparar, los montures de acétate pesan 25-35 grammes et los de metal pesan 28-35 grammes. Esa diferencia de 10-15 grammes puede no sonar a mucho en papel, mais ponte un monture TR90 dans la cara después de llevar acétate todo el día et entenderás inmediatamente par qué atletas, profesionales au aire libre et chaque vez plus consumidores cotidianos están cambiando. Te olvidas de qui las llevas puestas. Sin presión dans la nariz, sin deslizamiento, sin marques rojas detrás des orejas. Para <Link href="/fr/produits/sport" className="text-primary-600 hovoir:underline">marques deportivas</Link> et <Link href="/fr/produits/enfants" className="text-primary-600 hovoir:underline">lunettes infantiles</Link>, el TR90 no est solo une buena opción — est la opción obvia.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Depuis el punto de vista de fabrication, el TR90 se moldea par inyección — le qui significa qui alimentamos pellets de Grilamid en un cilindro calentado, inyectamos el matériau fundido en un molde de acero de precisión bajo alta presión et sacamos un monture terminado en unos 45 segundos. Compara eso avec los montures de acétate qui tardan 5-7 jours de corte, pulido en tambor et pulido a mano. El resultado est une production plus rápida, menor coût unitario et qualité extremadamente consistente. Nuestra tasa de defectos en TR90 est inferior au 0.5% — frente au 3-5% du acétate. Si necesitas grandes volúmenes a prixs competitivos sin sacrificar qualité, el TR90 est el matériau qui le hace posible.
              </p>
              <p className="text-lg leading-relaxed">
                Producimos alrededor de 500,000 montures TR90 par an entre envolventes deportivos, wayfarers casuales, styles infantiles et designs híbridos deporte-casual. Nuestra biblioteca de moldes tiene plus de 80 designs listos para usar, et operamos cuatro máquinas de moldeo par inyección dedichaques à la production de TR90. Ya sea qui estés lanzando une marque de lunettes deportivas, añadiendo une gamme infantil ou construyendo une collection légère de uso diario, ici tienes todo le qui necesitas saber.
              </p>
            </div>
          </div>

          {/* Weight Compaireison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">La Ventaja du Poids</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El poids est la razón principal par la qui las marques eligen TR90. Así est comme se compara avec tous los deplus matériaux de monture qui nous proposons.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">TR90 (Grilamid)</span>
                    <span className="text-primary-600 font-bold">15 - 20g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-primary-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">La opción plus légère. Apenas se nota dans le rostro. Ideal para uso durante todo el día et actividad física.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Aleation de Aluminio</span>
                    <span className="text-gray-600 font-bold">18 - 22g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Cercano au TR90 en poids, mais rígido — sin flexión. Sensation metálica premium avec buena ligereza.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acétate</span>
                    <span className="text-gray-600 font-bold">25 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">El matériau de lujo. Hermoso mais plus pesado. Ese poids est pairete de son &ldquo;sensation premium&rdquo; — mais no est ideal para deportes.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acier Inoxydable</span>
                    <span className="text-gray-600 font-bold">28 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Armazones metálicos clásicos. El poids comunica qualité mais puede causar fatiga durante el uso prolongado.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Polycarbonate Nonrme</span>
                    <span className="text-gray-600 font-bold">22 - 28g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Más barato qui el TR90 mais plus pesado, menos flexible et plus frágil. La opción económica qui el TR90 supera.</p>
                </div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Lunettes de Soleil TR90 en Gros" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Collection TR90</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 ovoirflow-hidden hovoir:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-7xl group-hovoir:scale-110 transition-transform duration-300">🏃</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/fr/contact" className="btn-primary text-sm">Devis</Link>
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
                      ['Matériau du Armazón', 'EMS-Grivory Grilamid TR90 (poliamida termoplástica de ingeniería suiza)'],
                      ['Poids du Armazón', '15-20g (monture complet) / 12-15g (infantil) / 14g (semi au aire)'],
                      ['Flexibilidad', 'Matériau avec memoria — se dobla a 90°+ et vuelve a son forma original. Plus de 5,000 ciclos de flexión probados.'],
                      ['Résistance au Calor', 'HDT 120°C (248°F) — survive a salpicaderos de coche, saunas, agua caliente'],
                      ['Résistance au Frío', 'Mantiene la flexibilidad jusqu'à -40°C (-40°F) — sin fragilidad en invierno'],
                      ['Hypoallergénique', 'Oui — sin níquel, sin BPA, sin ftalatos, sin látex'],
                      ['Matériau de Lente', 'Polycarbonate / TAC Polarisé / Fotocromático'],
                      ['Protection UV', 'UV400 — bloquea el 100% de UVA (315-380nm) et UVB (280-315nm)'],
                      ['Almohadillas Nasales', 'Caucho TPE integrado (antideslizante) ou almohadillas de silicona ajustables'],
                      ['Puntas de Patilla', 'Agarre de caucho TPE co-moldeado — antideslizante incluso mojado'],
                      ['Couleures en Stock', '30+ norme: noir mat, noir brillo, bleu marino, gris, rouge, naranja, blanc, transpaireente, etc.'],
                      ['Couleures Personnalisés', 'Igualation Pantone disponible — MOQ 500 pcs para masterbatch personnalisé'],
                      ['Acabados Superficiales', 'Mate, brillo, revêtement de caucho (tacto suave), acentos PVD metálicos'],
                      ['Options de Impresión', 'Tampografía, impresión UV, transferencia hidrográfica (camuflaje, fibra de carbono), grabado láser'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA · UV400 · ISO 9001 · EN 71 (infantil)'],
                      ['MOQ', '100 pcs par modelo (moldes en stock) / 500 pcs (moldes personnalisés)'],
                      ['Tarifa de Molde (Personnalisé)', '$1,500 - $3,000 único pago — molde de inyección de acero'],
                      ['Tiempo de Échantillon', '3-5 jours ouvrables'],
                      ['Tiempo de Production', '12-18 jours norme / 8-10 jours urgente'],
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

          {/* Key Properties Deep Dive */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el TR90 Supera a Autres Plásticos</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Non tous los montures de plástico sont iguales. Esto est le qui separa au TR90 du polycarbonate norme et el nylon barato.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🪶 Ultraléger</h3>
                <p className="text-sm text-gray-600">Con une densidad de 1.14 g/cm³, el TR90 est uno des matériaux de monture plus légers disponibles. Un envolvente deportivo de monture complet pesa solo 18 grammes — aproximadamente le même qui tres hojas de papel. Los clients literalmente olvidan qui las llevan puestas, qui est exactamente le qui los atletas necesitan.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">💪 Flexibilidad avec Memoria</h3>
                <p className="text-sm text-gray-600">El TR90 tiene voirdadera memoria de forma — dóblalo, tuércelo, siéntate sur él, et vuelve a son forma original. Probamos chaque design de monture avec plus de 5,000 ciclos de apertura-cierre et flexión de branche a 90 grados sin deformation permanente. El polycarbonate norme falla esta prueba aux 500 ciclos aproximadamente.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌡️ Resistente à la Temperatura</h3>
                <p className="text-sm text-gray-600">La deflexión térmica a 120°C significa qui el TR90 survive a situaciones qui destruyen autres plásticos. Dejadas dans le salpicadero de un coche en Phoenix? Sin problema. Caídas en un jacuzzi? Sin problema. Guardadas en une taquilla de sauna? Sin problema. El acétate se deformaría. El PC norme podría deformarse. Al TR90 le da igual.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🧪 Resistente a Químicos</h3>
                <p className="text-sm text-gray-600">Resistente a protector solar, repelente de insectos, sudor, agua salada et la mayoría de químicos comunes. Esto importa para uso deportivo et au aire libre où los montures están constantemente expuestos a estas sustancias. El acétate, par el contrario, puede dañarse avec los químicos du protector solar avec el tiempo.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛡️ Resistente a Impacts</h3>
                <p className="text-sm text-gray-600">El TR90 absorbe la energía du impact mediante la flexión en vez de agrietarse. Deja caer un monture TR90 depuis la altura de la cabeza sur concreto et rebota. Deja caer un monture de acétate et puede astillarse. Para lunettes deportivas e infantiles, esta est une característica de sécurité, no solo durabilidad.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏭 Eficiencia de Production</h3>
                <p className="text-sm text-gray-600">El tiempo de ciclo de moldeo par inyección est de unos 45 segundos par monture — frente a 5-7 jours para acétate. Esto significa livraison plus rápida (12-18 jours vs 20-28 jours), menor coût unitario et tasas de defectos par debajo du 0.5%. Para commandes de volume, la venteja en coût et velocidad est significativa.</p>
              </div>
            </div>
          </section>

          {/* Best Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Quién Debería Usar TR90?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El TR90 no est el matériau adecuado para toutes las marques. Ici est où destaca et dónde podrías querer algo diferente.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-600">✅ Perfecto Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Marques deportivas</strong> — ciclismo, running, pesca, golf, esquí. El TR90 est el norme de la industrie para lunettes de rendimiento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Lunettes infantiles</strong> — incassables, ultralégères, hipoalergénicas. El matériau fue prácticamente diseñado para enfants.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Gammes de confort diario</strong> — para marques qui se posicionan en torno à la commedidad todo el día et el mensaje de &ldquo;te olvidas de qui las llevas&rdquo;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Marques de volume/valor</strong> — bajo coût unitario avec qualité genuina. Punto óptimo retail de $20-50.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Promocional / corporativo</strong> — suficientemente asequible para regalos mais avec qualité suficiente para qui la gente realmente las use.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-yellow-200">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">⚡ Buena Opción Híbrida</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Combos TR90 + metal</strong> — frente TR90 avec branches metálicas para un look de transition deporte-casual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Deportivas avec prescripción</strong> — TR90 avec ranuras de lente compatibles avec RX para inserto óptico ou montaje directo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Marques multi-gamme</strong> — muchos de notres clients usan TR90 para son gamme deportiva/activa et acétate para son gamme de moda.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">❌ Non Ideal Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Lujo / alta moda</strong> — el TR90 carece de la riqueza visual du acétate. Sin carey, sin mármol, sin profundidad de cristal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Posicionamiento retail de $100+</strong> — el matériau no transmite la sensation premium necesaria a este prix (a menos qui sea une marque de rendimiento/tecnología).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Style clásico/heritage</strong> — aviadores et wayfarers en TR90 funcionan mais carecen de la calidez et el carácter du metal ou acétate.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Options de Personnalisation TR90</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El TR90 puede ser moldeado par inyección, mais eso no significa genérico. Así est comme nous faisons qui chaque paire sea tuyo.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Couleures et Acabados</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Couleur integral</strong> — 30+ couleures norme, ou igualation Pantone (MOQ 500 pcs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Recubrimiento de caucho</strong> — acabado mat de tacto suave qui añade agarre et sensation premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hidrográfico</strong> — impresión par transferencia en agua para patrones de camuflaje, fibra de carbono, veta de madera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bicouleur</strong> — diferentes couleures para el frente et las branches usando moldeo multi-dispaireo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🏷️ Logo et Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tampografía</strong> — logo multicouleur en branches, jusqu'à 4 couleures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impresión UV</strong> — qualité fotográfica, a todo couleur, detalle fino en superficies planas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Grabado láser</strong> — permanente, funciona également en superficies recubiertas de caucho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica</strong> — placa de logo de aleation de zinc incrustada dans la branche durante el moldeo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Emballage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuche deportivo</strong> — EVA semi-rígido avec clip mosquetón, avec marque. $1.00-1.80 par set.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Funda de microfibra</strong> — avec cordón et logo impreso. $0.30-0.60 chaque una.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cordón de sujection</strong> — cordón de neopreno avec marque. Excelente complemento para gammes deportivas. $0.40-0.80.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Caja retail</strong> — impresión a todo couleur, inserto personnalisé, tarjeta de spécifications. $0.80-1.50.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lens Options for Sport */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Options de Voirres para Armazones TR90</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              La lente importa tanto comme el monture. Estas sont las options qui combinamos avec TR90 — especialmente para uso deportivo et activo.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🔵 TAC Polarisé</h3>
                <p className="text-gray-300 text-sm">La meilleura plus popular para montures TR90 deportivos. La película polarisée de 7 capas elimina el 99% du éblouissement reflejado du agua, carreteras et nieve. Esencial para pesca, ciclismo et conducción. Añade $2-3 par paire mais vous permite cobrar $15-20 plus en retail. Lee notre <Link href="/fr/produits/polarise" className="text-blue-400 hovoir:underline">guía de verres</Link> para el desglose complet.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌗 Fotocromático</h3>
                <p className="text-gray-300 text-sm">Se oscurece avec la luz solar, se aclara en interiores. De Catégorie 0-1 en interiores a Catégorie 2-3 en exteriores en unos 30 segundos. Gran punto de vente para uso deportivo durante todo el día — empieza votre carrera au amanecer, termina au mediodía, un solo paire le maneja todo. Añade $3-4 par paire.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🪞 Recubrimientos Miroir</h3>
                <p className="text-gray-300 text-sm">Plata, bleu, rouge, doré, voirde, púrpura, rose — aplicados sur verres polarisées ou de PC norme. El look agresivo combina perfectamente avec montures TR90 deportivos. Miroir bleu sur un envolvente TR90 noir mat est uno de notres produits plus vendidos de tous los tiempos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🟡 Amarillo/Ámbar (Baja Luz)</h3>
                <p className="text-gray-300 text-sm">Tinte de Catégorie 1 qui meilleura el contraste en condiciones nubladas, avec niebla ou poca luz. Popular para ciclismo, tiro, esquí et conducción au atardecer. Non est suficientemente oscuro para sol intenso — se comercializa comme une opción de lente dedichaque para poca luz.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">💧 Hidrofóbico + Oleofóbico</h3>
                <p className="text-gray-300 text-sm">Recubrimientos repeverres au agua et résistants a huellas dactilares. La lluvia forma gotas, el sudor se limpia fácilmente, las manchas no se adhieren. Añade $0.50-1.00 par paire. Muy recomendado para verres deportivas qui recibirán lluvia, sudor et serán manipuladas avec dedos sucios.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌫️ Anti-Vaho</h3>
                <p className="text-gray-300 text-sm">Recubrimiento hidrofílico qui previene la condensation. Crítico para deportes en clima frío (esquí, snowboard) et actividades de alto esfuerzo où el calor corporal se encuentra avec el aire frío. Funciona durante unos 6-12 meses de uso regular. Añade $1-2 par paire.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes sur Lunettes de Soleil TR90</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {tr90Faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produits Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/sport" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes de Soleil Sport</h3>
                <p className="text-gray-600 text-sm">Nuestra collection complète de lunettes deportivas — envolventes, pantallas, semi au aire. La mayoría de styles disponibles en TR90 avec options de verres polarisées et photochromiques.</p>
              </Link>
              <Link href="/fr/produits/enfants" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes de Soleil Infantiles</h3>
                <p className="text-gray-600 text-sm">El TR90 est el matériau ideal para lunettes infantiles — incassables, ultralégères, hipoalergénicas. Tallas para edades de 0 a 14 ans.</p>
              </Link>
              <Link href="/fr/produits/polarise" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Polarisées</h3>
                <p className="text-gray-600 text-sm">Guía complète de verres para lunettes de soleil — polarisées, photochromiques, miroir, CR-39. Descubre qué options de verres combinan meilleur avec montures TR90.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Listo para Commander Armazones TR90?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos le qui necesitas — envolventes deportivos, montures infantiles, styles casuales ou algo personnalisé. Te expédieremos échantillons de notre biblioteca de plus de 80 moldes en 3-5 jours. Prixs, cronograma de production et options de personnalisation incluss. Sin compromiso jusqu'à qui estés listo para ordenar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-white text-primary-600 hovoir:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-couleurs">
                Demander Devis
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
