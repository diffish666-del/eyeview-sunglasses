import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricant de Lunettes de Soleil TR90 | Usine de Lunettes Ultra-Légères TR90 - EyeView',
  description: 'Fabricant de lunettes de soleil TR90. Montures ultra-légères en Grilamid TR90 (15-20g), matériau à mémoire flexible, hypoallergénique. Sport, enfants, quotidien. MOQ 100 pcs. Direct usine.',
  keywords: 'fabricant lunettes TR90, lunettes TR90 en gros, usine lunettes ultra-légères, Grilamid TR90, lunettes flexibles, fabricant lunettes sport, lunettes enfants en gros',
  openGraph: {
    title: 'Fabricant de Lunettes de Soleil TR90 | Usine de Lunettes Ultralégères TR90 - EyeView',
    description: 'Fabricant de lunettes de soleil TR90. Montures ultralégères en Grilamid TR90 (15-20g), flexibles, hypoallergéniques. Lunettes sport et enfants. MOQ 100 pièces.',
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
    question: 'Qu\u2019est-ce que le TR90 exactement et pourquoi est-il utilisé pour les lunettes de soleil ?',
    answer: 'Le TR90 est un polyamide thermoplastique (nylon) développé à l\u2019origine par EMS-Grivory en Suisse sous la marque Grilamid TR90. Il a été conçu spécifiquement pour les applications optiques — c\u2019est-à-dire qu\u2019il a été pensé dès le départ pour fabriquer des montures de lunettes. Ses propriétés clés sont : ultralégèreté (une monture finie ne pèse que 15-20 grammes), flexibilité extrême (on peut le plier presque en deux et il reprend sa forme), mémoire de forme (il conserve sa forme pendant des années d\u2019utilisation quotidienne), hypoallergénicité (sans nickel, sans BPA, sans réaction cutanée) et haute résistance thermique (température de déformation d\u2019environ 120 °C). Il est fabriqué par moulage par injection, ce qui rend la production rapide et constante — et maintient les coûts bas. En résumé, le TR90 vous offre une monture qui ne pèse rien, ne casse jamais et n\u2019irrite jamais les peaux sensibles. C\u2019est pourquoi il est devenu le matériau de référence pour les lunettes de sport, les lunettes pour enfants et les montures légères du quotidien.',
  },
  {
    question: 'Comment le TR90 se compare-t-il à l\u2019acétate et aux montures en métal ?',
    answer: 'La façon la plus simple de comprendre le TR90 est de le comparer directement. Poids : les montures TR90 pèsent 15-20 grammes, les montures en acétate pèsent 25-35 grammes et les montures en métal pèsent 28-35 grammes. Le TR90 est donc environ 40 à 50 % plus léger que l\u2019acétate. Flexibilité : le TR90 se plie et reprend sa forme ; l\u2019acétate casse si on le plie trop ; le métal se déforme de manière permanente. Durabilité : le TR90 est quasi incassable en usage normal ; l\u2019acétate peut s\u2019ébrécher ou se fissurer ; le métal peut se déformer. Options de couleur : l\u2019acétate l\u2019emporte ici avec ses riches motifs en couches ; le TR90 est plus limité aux couleurs unies et aux finitions de surface. Perception premium : l\u2019acétate a un toucher luxueux que le TR90 ne peut pas égaler ; le TR90 a un rendu technique et sportif. Coût : les montures TR90 coûtent 4-8 $ la paire, l\u2019acétate 6-16 $ et le métal 8-22 $. En résumé : TR90 pour la performance et le rapport qualité-prix, acétate pour le luxe et l\u2019esthétique, métal pour le style classique.',
  },
  {
    question: 'Peut-on imprimer ou colorer les montures TR90 avec des designs personnalisés ?',
    answer: 'Oui, mais les options sont différentes de celles de l\u2019acétate. La couleur du TR90 est déterminée lors du moulage par injection — nous ajoutons des granulés de couleur masterbatch à la résine Grilamid brute, de sorte que la couleur traverse tout le matériau. Nous disposons d\u2019environ 30 couleurs standard (noir mat, noir brillant, bleu marine mat, gris, rouge, orange, blanc, transparent, etc.) et nous pouvons reproduire des couleurs Pantone personnalisées avec un minimum de 500 pièces. Pour la décoration de surface, nous proposons la tampographie (logos, motifs, graphiques multicolores sur les branches), l\u2019impression UV (impression de qualité photographique en couleurs sur surfaces planes), le transfert hydrographique (impression par immersion pour motifs camouflage, fibre de carbone, veinage bois qui épousent les courbes) et la gravure laser. Nous réalisons également un revêtement caoutchouté (une finition mate au toucher doux qui ajoute de l\u2019adhérence et un toucher premium) et un revêtement PVD métallique sur les accents des branches. La seule chose que le TR90 ne peut pas reproduire est la profondeur de couleur en couches de l\u2019acétate — les motifs écaille, marbre et cristal ne sont pas réalisables en matériau moulé par injection.',
  },
  {
    question: 'Le TR90 est-il sûr pour les lunettes de soleil pour enfants ?',
    answer: 'Le TR90 est sans doute le meilleur matériau pour les lunettes pour enfants, et voici pourquoi. Premièrement, il est virtuellement incassable — les enfants sont durs avec leurs lunettes, et le TR90 fléchit au lieu de se casser. Nous avons testé nos montures enfants avec plus de 5 000 cycles d\u2019ouverture-fermeture de charnière sans aucune défaillance. Deuxièmement, il est hypoallergénique — sans nickel, sans BPA, sans phtalates, sans latex. Les enfants ont une peau plus sensible que les adultes, et les montures métalliques contenant du nickel peuvent provoquer des dermatites de contact. Troisièmement, il est ultralégèr avec 12-15 grammes pour les montures taille enfant — des lunettes lourdes glissent sur les petits nez et les enfants les enlèvent tout simplement. Quatrièmement, le TR90 est conforme aux normes de sécurité des jouets EN 71 (nous pouvons fournir la documentation de test), exigées par certains marchés pour les lunettes vendues aux enfants de moins de 14 ans. Et cinquièmement, le faible coût (3,50-6,00 $ la paire pour les montures enfants) le rend économique pour les parents qui savent que leur enfant les perdra ou les cassera probablement dans les six mois.',
  },
  {
    question: 'Quelle température le TR90 peut-il supporter ?',
    answer: 'Le TR90 a une température de fléchissement sous charge (HDT) d\u2019environ 120 °C (248 °F) à 1,8 MPa — nettement plus élevée que le nylon standard (environ 75 °C) et bien supérieure à celle de l\u2019acétate (qui ramollit à 70-80 °C). En termes pratiques, cela signifie que les montures TR90 peuvent sans problème survivre si on les laisse sur un tableau de bord en été (qui peut atteindre 70-90 °C), si on les porte dans un sauna ou si on les expose à de l\u2019eau chaude sans se déformer. C\u2019est un véritable argument de vente, surtout pour les marques de sport et de plein air — les athlètes laissent leurs lunettes dans des voitures chaudes, sur des tableaux de bord de bateaux et dans des sacs de sport à côté de vêtements en sueur. Le TR90 résiste à tout cela. La résistance au froid est tout aussi impressionnante : le TR90 reste flexible jusqu\u2019à -40 °C, il ne devient donc pas cassant en conditions hivernales. À titre de comparaison, les montures bon marché en polycarbonate peuvent devenir cassantes en dessous de 0 °C.',
  },
  {
    question: 'Quelle est la quantité minimum de commande pour les lunettes de soleil TR90 ?',
    answer: 'Le MOQ standard est de 100 pièces par modèle en utilisant notre bibliothèque de moules existants — nous disposons de plus de 80 designs de montures TR90 en stock couvrant les modèles sport enveloppants, wayfarer, ronds, rectangulaires, style aviateur et formes enfants. Vous pouvez mélanger les couleurs au sein de ces 100 pièces. Pour un design de monture entièrement personnalisé, nous facturons des frais de moule de 1 500 à 3 000 $ selon la complexité (les moules TR90 sont plus chers que l\u2019usinage CNC de l\u2019acétate car les moules d\u2019injection sont en acier et usinés avec précision). Le MOQ pour un moule personnalisé est de 500 pièces sur la première commande. Pour les couleurs Pantone personnalisées, le minimum est de 500 pièces car nous devons mélanger et tester le masterbatch. Pour les couleurs standard en stock, il n\u2019y a pas de minimum au-delà des 100 pièces de base.',
  },
]

const products = [
  {
    name: 'Sport Wrap TR90',
    description: 'Notre modèle TR90 le plus vendu. Design enveloppant intégral qui bloque le vent, la poussière et la lumière périphérique. Les plaquettes nasales en caoutchouc et les embouts de branches offrent une adhérence antidérapante même quand vous transpirez. La forme enveloppante épouse la courbure du visage, offrant une couverture à 180 degrés sans l\u2019aspect « œil d\u2019insecte ». Ne pèse que 18 grammes — la plupart des clients oublient qu\u2019ils les portent en cinq minutes. C\u2019est la monture que les équipes cyclistes, les clubs de course et les marques de pêche commandent en grandes quantités. Disponible en 15 couleurs standard avec options de verres polarisés.',
    price: '$4.50 - $7.50',
    moq: '100 pcs',
    features: ['Design Enveloppant', 'Adhérence Caoutchouc', '18g Ultralégèr', 'Branche Antidérapante'],
  },
  {
    name: 'TR90 Wayfarer',
    description: 'La forme wayfarer classique en TR90 au lieu de l\u2019acétate. Vous perdez la profondeur de couleur en couches de l\u2019acétate, mais vous gagnez une monture qui pèse 16 grammes au lieu de 30, coûte 40 % de moins et est pratiquement impossible à casser. Pour les marques visant la gamme de prix retail de 20-40 $ où le prix de l\u2019acétate ne fonctionne pas, c\u2019est le point idéal. Nous pouvons appliquer un revêtement caoutchouté sur la surface pour une finition mate au toucher doux qui ajoute adhérence et sensation premium. Populaire auprès des marques DTC, des entreprises promotionnelles et des librairies universitaires.',
    price: '$4.00 - $6.50',
    moq: '100 pcs',
    features: ['Forme Wayfarer', '16g de Poids', 'Option Revêtement Caoutchouc', 'Prix Accessible'],
  },
  {
    name: 'Kids Flex TR90',
    description: 'Conçu pour les 4-12 ans avec une flexibilité supplémentaire intégrée au design. Les branches disposent d\u2019une zone de flexion intégrée qui leur permet de se plier vers l\u2019extérieur sans casser — important car les enfants attrapent leurs lunettes par une branche et tirent. Hypoallergénique, sans BPA, sans phtalates. Plaquettes nasales en caoutchouc dimensionnées pour les ponts plus petits. Disponible en couleurs vives et amusantes — bleu électrique, rose vif, vert citron, orange coucher de soleil, noir mat (pour le marché « enfant cool »). Ne pèse que 12 grammes. Les parents les achètent parce qu\u2019ils savent que les enfants les maltraiteront. Nous avons des clients qui les vendent en lots de 3 car les parents s\u2019attendent à devoir les remplacer.',
    price: '$3.50 - $6.00',
    moq: '100 pcs',
    features: ['Âges 4-12', 'Branches Extra Flex', '12g de Poids', 'Sans BPA/Phtalates'],
  },
  {
    name: 'TR90 Half-Frame Sport',
    description: 'Design semi-cerclé où la monture TR90 maintient le haut du verre et un fin cordon en nylon maintient le bord inférieur. Cela réduit le poids de 3-4 grammes supplémentaires par rapport à la monture complète, portant le poids total à environ 14 grammes. Le bord inférieur ouvert améliore également la visibilité vers le bas, ce qui est important pour les coureurs et les cyclistes qui ont besoin de voir la route sous eux. Le bord de verre exposé confère un aspect technique orienté performance. Populaire auprès des marques de course à pied, de triathlon et de gammes de lunettes de golf.',
    price: '$5.00 - $8.00',
    moq: '100 pcs',
    features: ['Semi-Cerclé', '14g de Poids', 'Vision Basse Améliorée', 'Cordon Nylon Inférieur'],
  },
  {
    name: 'TR90 + Metal Combo',
    description: 'Face avant en TR90 avec branches en acier inoxydable ou titane. Cet hybride vous offre la flexibilité légère du TR90 là où c\u2019est le plus important (la face avant qui touche votre visage) et le look premium des branches métalliques. Les branches en métal peuvent être gravées au laser avec votre logo — ce qui rend beaucoup mieux que l\u2019impression sur plastique. Pèse environ 20 grammes au total. C\u2019est notre recommandation privilégiée pour les marques qui veulent un look de transition sport-casual — suffisamment technique pour l\u2019extérieur, suffisamment élégant pour un dîner en ville.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Hybride TR90 + Métal', 'Gravure Laser', '20g de Poids', 'Crossover Sport-Casual'],
  },
  {
    name: 'TR90 Shield / Visière',
    description: 'Design écran à verre unique en TR90 — un verre continu couvrant les deux yeux avec une monture supérieure TR90 et un système de branches. C\u2019est le style que l\u2019on voit sur les cyclistes professionnels, les patineurs de vitesse et les skieurs de compétition. Champ de vision maximal, zéro obstruction de la monture dans la vue centrale et style aérodynamique agressif. Le verre unique est en polycarbonate avec revêtements optionnels miroir, polarisé ou photochromique. Plaquette nasale ajustable et orifices de ventilation pour prévenir la buée. Si votre marque cible les athlètes sérieux, c\u2019est la monture qui gagne en crédibilité.',
    price: '$6.00 - $9.00',
    moq: '100 pcs',
    features: ['Verre Écran Unique', 'Ventilation Antibuée', 'Champ Visuel Maximal', 'Design Aérodynamique'],
  },
]

export default function TR90PageFr() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Ultralégères TR90',
        description: 'Lunettes de soleil ultralégères en Grilamid TR90. Montures de 15-20g, matériau à mémoire flexible, hypoallergénique. Styles sport, enfants et quotidien. Personnalisation OEM complète.',
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
            <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes de Soleil TR90</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
              alt="Fabricant de Lunettes de Soleil TR90 - Lunettes Sport Légères en Nylon en Gros"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricant de Lunettes de Soleil TR90
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Laissez-moi vous montrer quelque chose. Prenez une paire de lunettes de soleil ordinaires — celles que vous achetez dans une station-service. Maintenant, pliez les branches. Vous entendez ce craquement ? C&apos;est du polycarbonate bon marché qui vous dit qu&apos;il est sur le point de casser. Maintenant, essayez la même chose avec une monture TR90. Vous pouvez pratiquement la plier en deux. Elle reprend sa forme immédiatement. Pas de craquement, pas de fissure, pas de déformation permanente. Cette flexibilité n&apos;est pas un gadget — c&apos;est l&apos;avantage technique fondamental du <a href="https://www.emsgrivory.com/en/products/grilamid-tr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grilamid TR90</a>, un <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">polyamide</a> thermoplastique développé par l&apos;entreprise chimique suisse EMS-Grivory spécifiquement pour les applications optiques.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Voici les chiffres qui comptent : une monture TR90 finie pèse 15-20 grammes. À titre de comparaison, les montures en acétate pèsent 25-35 grammes et les montures en métal pèsent 28-35 grammes. Cette différence de 10-15 grammes peut ne pas sembler importante sur le papier, mais portez une monture TR90 après avoir porté de l&apos;acétate toute la journée et vous comprendrez immédiatement pourquoi les athlètes, les professionnels du plein air et de plus en plus de consommateurs au quotidien font le changement. On les oublie complètement. Pas de pression sur le nez, pas de glissement, pas de marques rouges derrière les oreilles. Pour les <Link href="/fr/produits/sport" className="text-primary-600 hover:underline">marques de sport</Link> et les <Link href="/fr/produits/enfants" className="text-primary-600 hover:underline">lunettes pour enfants</Link>, le TR90 n&apos;est pas seulement une bonne option — c&apos;est le choix évident.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Du point de vue de la fabrication, le TR90 est moulé par injection — ce qui signifie que nous alimentons des granulés de Grilamid dans un cylindre chauffé, injectons le matériau fondu dans un moule en acier de précision sous haute pression et obtenons une monture finie en environ 45 secondes. Comparez cela avec les montures en acétate qui nécessitent 5 à 7 jours de découpe, de polissage au tonneau et de polissage à la main. Le résultat est une production plus rapide, un coût unitaire inférieur et une qualité extrêmement constante. Notre taux de défauts en TR90 est inférieur à 0,5 % — contre 3-5 % pour l&apos;acétate. Si vous avez besoin de grands volumes à des prix compétitifs sans sacrifier la qualité, le TR90 est le matériau qui le rend possible.
              </p>
              <p className="text-lg leading-relaxed">
                Nous produisons environ 500 000 montures TR90 par an entre modèles sport enveloppants, wayfarers décontractés, styles enfants et designs hybrides sport-casual. Notre bibliothèque de moules comprend plus de 80 designs prêts à l&apos;emploi, et nous exploitons quatre machines de moulage par injection dédiées à la production de TR90. Que vous lanciez une marque de lunettes de sport, ajoutiez une gamme enfants ou construisiez une collection légère pour le quotidien, voici tout ce que vous devez savoir.
              </p>
            </div>
          </div>

          {/* Weight Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">L&apos;avantage du poids</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Le poids est la raison principale pour laquelle les marques choisissent le TR90. Voici comment il se compare à tous les autres matériaux de monture que nous proposons.
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
                  <p className="text-sm text-gray-500 mt-2">L&apos;option la plus légère. À peine perceptible sur le visage. Idéal pour le port toute la journée et l&apos;utilisation active.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Alliage d&apos;Aluminium</span>
                    <span className="text-gray-600 font-bold">18 - 22g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Proche du TR90 en poids, mais rigide — pas de flexion. Sensation métallique premium avec une bonne légèreté.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acétate</span>
                    <span className="text-gray-600 font-bold">25 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Le matériau de luxe. Magnifique mais plus lourd. Ce poids fait partie de sa &ldquo;sensation premium&rdquo; — mais n&apos;est pas idéal pour le sport.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acier Inoxydable</span>
                    <span className="text-gray-600 font-bold">28 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Les montures métalliques classiques. Le poids communique la qualité mais peut causer de la fatigue lors d&apos;un port prolongé.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Polycarbonate Standard</span>
                    <span className="text-gray-600 font-bold">22 - 28g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Moins cher que le TR90 mais plus lourd, moins flexible et plus fragile. L&apos;option économique que le TR90 surpasse.</p>
                </div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Lunettes de Soleil TR90 en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Notre Collection TR90</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🏃</span>
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
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Matériau de la Monture', 'EMS-Grivory Grilamid TR90 (polyamide thermoplastique d\u2019ingénierie suisse)'],
                      ['Poids de la Monture', '15-20g (monture complète) / 12-15g (enfant) / 14g (semi-cerclé)'],
                      ['Flexibilité', 'Matériau à mémoire de forme — se plie à 90°+ et reprend sa forme d\u2019origine. Plus de 5 000 cycles de flexion testés.'],
                      ['Résistance à la Chaleur', 'HDT 120 °C (248 °F) — résiste aux tableaux de bord, saunas, eau chaude'],
                      ['Résistance au Froid', 'Reste flexible jusqu\u2019à -40 °C (-40 °F) — pas de fragilité en hiver'],
                      ['Hypoallergénique', 'Oui — sans nickel, sans BPA, sans phtalates, sans latex'],
                      ['Matériau des Verres', 'Polycarbonate / TAC Polarisé / Photochromique'],
                      ['Protection UV', 'UV400 — bloque 100 % des UVA (315-380nm) et UVB (280-315nm)'],
                      ['Plaquettes Nasales', 'Caoutchouc TPE intégré (antidérapant) ou plaquettes en silicone ajustables'],
                      ['Embouts de Branches', 'Adhérence en caoutchouc TPE co-moulé — antidérapant même mouillé'],
                      ['Couleurs en Stock', '30+ standard : noir mat, noir brillant, bleu marine, gris, rouge, orange, blanc, transparent, etc.'],
                      ['Couleurs Personnalisées', 'Correspondance Pantone disponible — MOQ 500 pcs pour masterbatch personnalisé'],
                      ['Finitions de Surface', 'Mat, brillant, revêtement caoutchouté (toucher doux), accents PVD métalliques'],
                      ['Options d\u2019Impression', 'Tampographie, impression UV, transfert hydrographique (camouflage, fibre de carbone), gravure laser'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA · UV400 · ISO 9001 · EN 71 (enfants)'],
                      ['MOQ', '100 pcs par modèle (moules en stock) / 500 pcs (moules personnalisés)'],
                      ['Frais de Moule (Personnalisé)', '1 500 - 3 000 $ paiement unique — moule d\u2019injection en acier'],
                      ['Délai d\u2019Échantillon', '3-5 jours ouvrables'],
                      ['Délai de Production', '12-18 jours standard / 8-10 jours urgent'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hover:bg-gray-50">
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
            <h2 className="text-3xl font-bold text-center mb-4">Pourquoi le TR90 surpasse les autres plastiques</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Toutes les montures en plastique ne se valent pas. Voici ce qui distingue le TR90 du polycarbonate standard et du nylon bon marché.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🪶 Ultralégèr</h3>
                <p className="text-sm text-gray-600">Avec une densité de 1,14 g/cm³, le TR90 est l&apos;un des matériaux de monture les plus légers disponibles. Un modèle sport enveloppant à monture complète ne pèse que 18 grammes — à peu près le poids de trois feuilles de papier. Les clients oublient littéralement qu&apos;ils les portent, ce qui est exactement ce dont les athlètes ont besoin.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">💪 Flexibilité à mémoire de forme</h3>
                <p className="text-sm text-gray-600">Le TR90 possède une véritable mémoire de forme — pliez-le, tordez-le, asseyez-vous dessus, il reprend sa forme d&apos;origine. Nous testons chaque design de monture avec plus de 5 000 cycles d&apos;ouverture-fermeture et une flexion de branche à 90 degrés sans déformation permanente. Le polycarbonate standard échoue à ce test à environ 500 cycles.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌡️ Résistant aux températures</h3>
                <p className="text-sm text-gray-600">Un fléchissement thermique à 120 °C signifie que le TR90 résiste à des situations qui détruisent les autres plastiques. Laissées sur un tableau de bord à Phoenix ? Aucun problème. Tombées dans un jacuzzi ? Aucun problème. Rangées dans un casier de sauna ? Aucun problème. L&apos;acétate se déformerait. Le PC standard pourrait se déformer. Le TR90, lui, s&apos;en moque.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🧪 Résistant aux produits chimiques</h3>
                <p className="text-sm text-gray-600">Résistant à la crème solaire, au répulsif anti-insectes, à la sueur, à l&apos;eau salée et à la plupart des produits chimiques courants. C&apos;est important pour l&apos;utilisation sportive et en extérieur où les montures sont constamment exposées à ces substances. L&apos;acétate, en revanche, peut être endommagé par les produits chimiques de la crème solaire au fil du temps.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛡️ Résistant aux impacts</h3>
                <p className="text-sm text-gray-600">Le TR90 absorbe l&apos;énergie d&apos;impact par la flexion plutôt que par la fissuration. Laissez tomber une monture TR90 de la hauteur de la tête sur du béton et elle rebondit. Laissez tomber une monture en acétate et elle peut s&apos;ébrécher. Pour les lunettes de sport et les lunettes pour enfants, c&apos;est une caractéristique de sécurité, pas seulement de durabilité.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏭 Efficacité de production</h3>
                <p className="text-sm text-gray-600">Le temps de cycle de moulage par injection est d&apos;environ 45 secondes par monture — contre 5-7 jours pour l&apos;acétate. Cela signifie une livraison plus rapide (12-18 jours contre 20-28 jours), un coût unitaire inférieur et des taux de défauts inférieurs à 0,5 %. Pour les commandes en volume, l&apos;avantage en termes de coût et de rapidité est significatif.</p>
              </div>
            </div>
          </section>

          {/* Best Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">À qui s&apos;adresse le TR90 ?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Le TR90 n&apos;est pas le matériau adapté à toutes les marques. Voici où il excelle et où vous pourriez préférer autre chose.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-600">✅ Parfait pour</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Les marques de sport</strong> — cyclisme, course, pêche, golf, ski. Le TR90 est le standard de l&apos;industrie pour les lunettes de performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Les lunettes pour enfants</strong> — incassables, ultralégères, hypoallergéniques. Le matériau a pratiquement été conçu pour les enfants.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Les gammes confort au quotidien</strong> — pour les marques qui misent sur le port toute la journée et le message &ldquo;vous oubliez que vous les portez&rdquo;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Les marques volume/rapport qualité-prix</strong> — faible coût unitaire avec une qualité réelle. Point optimal retail de 20-50 $.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Promotionnel / corporate</strong> — suffisamment abordable pour les cadeaux mais avec une qualité suffisante pour que les gens les portent vraiment.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-yellow-200">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">⚡ Bonne option hybride</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Combos TR90 + métal</strong> — face avant TR90 avec branches métalliques pour un look de transition sport-casual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Sport avec prescription</strong> — TR90 avec rainures de verre compatibles RX pour insert optique ou montage direct.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Marques multi-gammes</strong> — beaucoup de nos clients utilisent le TR90 pour leur gamme sport/active et l&apos;acétate pour leur gamme mode.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">❌ Pas idéal pour</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Le luxe / haute couture</strong> — le TR90 n&apos;a pas la richesse visuelle de l&apos;acétate. Pas d&apos;écaille, pas de marbre, pas de profondeur cristalline.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Positionnement retail à 100 $+</strong> — le matériau ne transmet pas la sensation premium nécessaire à ce prix (sauf s&apos;il s&apos;agit d&apos;une marque performance/technologie).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Style classique/héritage</strong> — les aviateurs et wayfarers en TR90 fonctionnent mais manquent de la chaleur et du caractère du métal ou de l&apos;acétate.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Options de personnalisation TR90</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Le TR90 est moulé par injection, mais cela ne veut pas dire générique. Voici comment nous rendons chaque paire unique.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Couleurs et Finitions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Couleur intégrale</strong> — 30+ couleurs standard, ou correspondance Pantone (MOQ 500 pcs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Revêtement caoutchouté</strong> — finition mate au toucher doux qui ajoute adhérence et sensation premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hydrographique</strong> — impression par transfert dans l&apos;eau pour motifs camouflage, fibre de carbone, veinage bois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bicolore</strong> — couleurs différentes pour la face et les branches grâce au moulage multi-injection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🏷️ Logo et Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tampographie</strong> — logo multicolore sur les branches, jusqu&apos;à 4 couleurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impression UV</strong> — qualité photographique, en couleurs, détails fins sur surfaces planes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Gravure laser</strong> — permanente, fonctionne aussi sur les surfaces caoutchoutées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Plaque métallique</strong> — plaque logo en alliage de zinc incrustée dans la branche lors du moulage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Emballage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Étui sport</strong> — EVA semi-rigide avec clip mousqueton, marqué. 1,00-1,80 $ par set.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Pochette microfibre</strong> — à cordon avec logo imprimé. 0,30-0,60 $ pièce.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cordon de maintien</strong> — cordon néoprène marqué. Excellent complément pour les gammes sport. 0,40-0,80 $.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Boîte retail</strong> — impression couleurs, insert personnalisé, fiche technique. 0,80-1,50 $.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lens Options for Sport */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Options de verres pour montures TR90</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Le verre compte autant que la monture. Voici les options que nous associons au TR90 — en particulier pour l&apos;usage sportif et actif.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🔵 TAC Polarisé</h3>
                <p className="text-gray-300 text-sm">L&apos;amélioration la plus populaire pour les montures TR90 sport. Le film polarisé 7 couches élimine 99 % de l&apos;éblouissement réfléchi par l&apos;eau, les routes et la neige. Essentiel pour la pêche, le cyclisme et la conduite. Ajoute 2-3 $ par paire mais permet de facturer 15-20 $ de plus en retail. Consultez notre <Link href="/fr/produits/polarise" className="text-blue-400 hover:underline">guide des verres</Link> pour le détail complet.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌗 Photochromique</h3>
                <p className="text-gray-300 text-sm">S&apos;assombrit au soleil, s&apos;éclaircit en intérieur. De Catégorie 0-1 en intérieur à Catégorie 2-3 en extérieur en environ 30 secondes. Excellent argument de vente pour l&apos;usage sportif toute la journée — commencez votre course à l&apos;aube, terminez à midi, une seule paire gère tout. Ajoute 3-4 $ par paire.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🪞 Revêtements Miroir</h3>
                <p className="text-gray-300 text-sm">Argent, bleu, rouge, or, vert, violet, rose — appliqués sur des verres polarisés ou en PC standard. Le look agressif se marie parfaitement avec les montures TR90 sport. Le miroir bleu sur un modèle enveloppant TR90 noir mat est l&apos;un de nos best-sellers de tous les temps.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🟡 Jaune/Ambre (Faible luminosité)</h3>
                <p className="text-gray-300 text-sm">Teinte de Catégorie 1 qui améliore le contraste par temps couvert, brumeux ou en faible luminosité. Populaire pour le cyclisme, le tir, le ski et la conduite au crépuscule. Pas assez sombre pour le plein soleil — commercialisé comme option de verre dédiée aux faibles luminosités.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">💧 Hydrophobe + Oléophobe</h3>
                <p className="text-gray-300 text-sm">Revêtements hydrofuges et anti-traces de doigts. La pluie perle, la sueur s&apos;essuie facilement, les traces ne collent pas. Ajoute 0,50-1,00 $ par paire. Fortement recommandé pour les verres sport qui seront exposés à la pluie, la sueur et manipulés avec les doigts sales.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌫️ Antibuée</h3>
                <p className="text-gray-300 text-sm">Revêtement hydrophile qui empêche la condensation. Critique pour les sports par temps froid (ski, snowboard) et les activités à haute intensité où la chaleur corporelle rencontre l&apos;air froid. Efficace pendant environ 6-12 mois d&apos;utilisation régulière. Ajoute 1-2 $ par paire.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ Lunettes de Soleil TR90</h2>
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
            <h2 className="text-3xl font-bold text-center mb-10">Produits associés</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/sport" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes de Soleil Sport</h3>
                <p className="text-gray-600 text-sm">Notre collection complète de lunettes sport — enveloppantes, écrans, semi-cerclées. La plupart des styles disponibles en TR90 avec options de verres polarisés et photochromiques.</p>
              </Link>
              <Link href="/fr/produits/enfants" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes de Soleil Enfants</h3>
                <p className="text-gray-600 text-sm">Le TR90 est le matériau idéal pour les lunettes pour enfants — incassables, ultralégères, hypoallergéniques. Tailles pour les 0-14 ans.</p>
              </Link>
              <Link href="/fr/produits/polarise" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Polarisées</h3>
                <p className="text-gray-600 text-sm">Guide complet des verres pour lunettes de soleil — polarisés, photochromiques, miroir, CR-39. Découvrez quelles options de verres s&apos;associent le mieux aux montures TR90.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commander des montures TR90 ?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Dites-nous ce dont vous avez besoin — modèles sport enveloppants, montures enfants, styles décontractés ou quelque chose de personnalisé. Nous vous enverrons des échantillons de notre bibliothèque de plus de 80 moules sous 3-5 jours. Prix, calendrier de production et options de personnalisation inclus. Aucun engagement tant que vous n&apos;êtes pas prêt à commander.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Demander un Devis
              </Link>
              <Link href="/fr/produits" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Voir Tous les Produits
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
