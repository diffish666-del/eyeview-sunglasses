import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricant de Lunettes de Soleil Écologiques | Lunettes Durables en Gros - EyeView',
  description: 'Fabricant de lunettes de soleil durables proposant des lunettes écologiques en gros. Plastique océanique recyclé, branches en bambou, montures en bio-acétate. MOQ 200 pcs. Certifications vertes disponibles.',
  keywords: 'fabricant lunettes durables, lunettes écologiques en gros, lunettes recyclées, lunettes bambou, lunettes bio-acétate, usine lunettes vertes, lunettes plastique océan',
  openGraph: {
    title: 'Fabricant de Lunettes de Soleil Écologiques | Lunettes Durables en Gros - EyeView',
    description: 'Fabricant de lunettes durables. Plastique océanique recyclé, bambou, montures en bio-acétate. MOQ 200 pcs. Prix direct usine avec certifications vertes.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/ecologique',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/ecologique',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/eco-friendly',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/ecologique',
    },
  },
}

const ecoFaqs = [
  {
    question: 'Quels matériaux durables proposez-vous pour la fabrication de lunettes de soleil ?',
    answer: 'Nous travaillons actuellement avec quatre matériaux écologiques principaux. Premièrement, le plastique océanique recyclé (rPET) — nous nous approvisionnons en plastique post-consommation collecté lors de nettoyages côtiers en Asie du Sud-Est et le transformons en granulés injectables. Deuxièmement, le bambou, que nous utilisons pour les branches (les bras de la monture). Troisièmement, le bio-acétate, spécifiquement Eastman Acetate Renew, qui remplace 60 % de la matière première fossile par du contenu recyclé certifié via le recyclage moléculaire. Et quatrièmement, l\u2019alliage d\u2019aluminium recyclé pour les composants métalliques de montures. Chaque matériau a des coûts, une esthétique et des arguments environnementaux différents, nous vous aidons donc à choisir celui qui convient à l\u2019histoire de votre marque et à votre positionnement prix.',
  },
  {
    question: 'Quelles certifications pouvez-vous fournir pour les lunettes écologiques ?',
    answer: 'Cela dépend de ce que votre marché exige et des déclarations que vous souhaitez faire. Pour les lunettes elles-mêmes, nous fournissons CE (EN ISO 12312-1), conformité FDA et tests UV400 — comme pour nos gammes standard. Pour les déclarations de durabilité spécifiquement, le bio-acétate d\u2019Eastman est accompagné de la certification de chaîne de traçabilité ISCC PLUS. Nos fournisseurs de bambou détiennent la certification FSC. Pour le plastique océanique recyclé, nous pouvons fournir la documentation de nos partenaires de collecte montrant la source et la chaîne de traçabilité. Nous détenons également la certification ISO 14001 (management environnemental) pour les opérations de notre usine. Si vous avez besoin de certifications spécifiques pour votre marché — par exemple, documentation B Corp ou calculs d\u2019empreinte carbone — nous pouvons travailler avec des auditeurs tiers pour les obtenir. Comptez environ 4 à 6 semaines supplémentaires.',
  },
  {
    question: 'Les lunettes écologiques sont-elles aussi durables que les lunettes classiques ?',
    answer: 'Honnêtement ? Cela dépend du matériau, mais la réponse courte est oui — elles tiennent parfaitement pour un usage normal. Le bio-acétate performe de manière identique à l\u2019acétate traditionnel car la structure chimique est la même. Le plastique océanique recyclé (rPET) est assez résistant — nous le moulons par injection de la même manière que le nylon vierge, et il passe tous nos tests standard de chute et de fatigue de charnière (2 000 cycles d\u2019ouverture-fermeture). Les branches en bambou sont naturellement solides et ont un magnifique veinage, bien qu\u2019elles puissent être sensibles à une exposition prolongée à l\u2019eau — nous appliquons un revêtement protecteur de laque pour gérer cela. L\u2019aluminium recyclé est métallurgiquement identique à l\u2019aluminium vierge une fois refondu, donc aucune différence de durabilité. La seule chose que je dirai est que le bio-acétate peut être légèrement plus sensible aux solvants à base d\u2019acétone, nous incluons donc des instructions d\u2019entretien pour vos clients finaux.',
  },
  {
    question: 'Quelle est la quantité minimum de commande pour les lunettes écologiques ?',
    answer: 'Le MOQ est de 200 pièces par modèle pour la plupart des matériaux éco — légèrement supérieur à notre minimum standard de 100 pièces car les matériaux durables nécessitent des séries de production séparées pour éviter la contamination avec les matériaux conventionnels. Pour les branches en bambou spécifiquement, le MOQ est de 300 pièces car les ébauches de bambou sont traitées par lots. Vous pouvez mélanger les couleurs et les options de verres au sein de ces minimums. Pour le bio-acétate, si vous souhaitez une couleur ou un motif personnalisé, le MOQ de plaque d\u2019acétate d\u2019Eastman est typiquement de 50 kg (suffisant pour environ 500-600 paires), nous suggérons donc de commencer avec leur bibliothèque de couleurs standard pour les commandes plus petites. Nous avons environ 15 couleurs de bio-acétate en stock pour les commandes de démarrage rapide.',
  },
  {
    question: 'Combien coûtent les lunettes écologiques de plus que les lunettes classiques ?',
    answer: 'Moins que ce que la plupart des gens pensent. Le bio-acétate ajoute environ 1-2 $ par paire par rapport à l\u2019acétate standard — donc une paire qui coûte normalement 6-8 $ revient à 7-10 $ en bio-acétate. Les branches en bambou ajoutent environ 0,50-1,00 $ par paire par rapport aux branches en plastique standard. Les montures en plastique océanique recyclé (rPET) coûtent à peu près la même chose que les montures en nylon vierge — parfois même moins, selon les prix du marché de la résine. L\u2019aluminium recyclé coûte typiquement 0,50-1,00 $ de plus par paire que l\u2019aluminium vierge. La vraie histoire est du côté retail : les lunettes durables bénéficient d\u2019une prime de prix de 30-50 % de la part des consommateurs. Une paire qui se vendrait à 35 $ en matériaux standard peut se vendre à 45-55 $ avec des références éco légitimes et la bonne histoire de marque. Vos marges s\u2019améliorent réellement.',
  },
  {
    question: 'Puis-je combiner différents matériaux éco dans une paire de lunettes ?',
    answer: 'Absolument, et certains des designs éco les plus vendus que nous produisons font exactement cela. La combinaison la plus populaire est une monture frontale en plastique océanique recyclé avec des branches en bambou — cela vous donne deux histoires de durabilité en un seul produit et le contraste visuel entre le plastique lisse et le veinage naturel du bambou est fantastique. Une autre bonne combinaison est une face avant en bio-acétate avec des accents en aluminium recyclé dans les branches. Nous avons également fait des branches en bambou sur des montures style aviateur en aluminium recyclé. La seule combinaison qui ne fonctionne pas bien est les montures frontales en bambou — le matériau n\u2019est pas assez stable dimensionnellement pour le corps principal de la monture où les verres sont enchâssés. Nous serons ravis de vous envoyer des échantillons de différentes combinaisons de matériaux pour que vous puissiez les voir et les toucher avant de vous engager.',
  },
]

const products = [
  {
    name: 'Wayfarer Océan Recyclé',
    description: 'Fabriquée à partir de plastique océanique post-consommation certifié, collecté au large des côtes de l\u2019Indonésie et de la Thaïlande. Chaque paire utilise environ 10 grammes de rPET récupéré — pas un chiffre énorme, mais multipliez par quelques milliers de paires et ça s\u2019additionne. La monture moulée par injection a le même aspect et le même toucher qu\u2019une monture en nylon premium. Nous pouvons reproduire les couleurs Pantone, bien que les finitions les plus populaires soient le bleu océan mat, le corail et le noir carbone. Livré avec une carte explicative sur l\u2019approvisionnement en plastique océanique — vos clients adorent ça.',
    price: '$5.50 - $9.00',
    moq: '200 pcs',
    features: ['Plastique Océan Recyclé', 'Protection UV400', 'Correspondance Pantone', 'Carte Explicative Incluse'],
  },
  {
    name: 'Classique à Branches Bambou',
    description: 'Monture frontale en acétate standard ou rPET associée à des branches en bambou Moso finies à la main. Chaque pièce de bambou est séchée au four, découpée CNC, puis poncée à la main et laquée pour une finition lisse. Le veinage naturel signifie qu\u2019aucune paire n\u2019est exactement identique — ce qui est en fait un argument de vente pour les marques de style artisanal. Le bambou provient de plantations certifiées FSC dans la province du Zhejiang. Le bambou atteint la taille de récolte en 3-5 ans contre des décennies pour le bois dur, ce qui en fait l\u2019un des matériaux les plus renouvelables de la planète.',
    price: '$6.00 - $10.00',
    moq: '300 pcs',
    features: ['Bambou FSC', 'Fini à la Main', 'Veinage Unique', 'Protection Laque'],
  },
  {
    name: 'Bio-Acétate Premium',
    description: 'Eastman Acetate Renew est la référence actuelle en lunetterie durable. Il utilise la technologie de recyclage moléculaire pour remplacer 60 % des matières premières fossiles par du contenu recyclé certifié — et l\u2019acétate résultant est chimiquement identique à l\u2019acétate conventionnel. Mêmes couleurs, mêmes motifs, même finition polie à la main, même durabilité. La différence est purement dans la chaîne d\u2019approvisionnement, ce qui est exactement le type de déclaration vérifiable qui protège votre marque du greenwashing. Nous proposons toutes les couleurs standard d\u2019Eastman plus la correspondance Pantone personnalisée.',
    price: '$7.00 - $11.00',
    moq: '200 pcs',
    features: ['Eastman Acetate Renew', 'Certifié ISCC PLUS', 'Poli à la Main', '60 % Contenu Recyclé'],
  },
  {
    name: 'Aviateur Aluminium Recyclé',
    description: 'Notre monture aviateur classique, refabriquée en alliage d\u2019aluminium recyclé. L\u2019aluminium provient de déchets post-industriels — des chutes de fabrication automobile et aérospatiale qui seraient autrement sous-recyclées. Une fois refondu et reformé, il est métallurgiquement identique à l\u2019alliage vierge 6061-T6. Même résistance, même poids (18-22g), mêmes magnifiques finitions anodisées. Nous pouvons estampiller « aluminium recyclé » à l\u2019intérieur de la branche pour votre marketing. Se marie parfaitement avec des verres polarisés pour un package éco premium complet.',
    price: '$10.00 - $15.00',
    moq: '200 pcs',
    features: ['6061-T6 Recyclé', 'Finition Anodisée', 'Léger 18-22g', 'Source Post-Industrielle'],
  },
  {
    name: 'Combo Éco Complet',
    description: 'Notre option la plus durable — monture frontale en plastique océanique recyclé combinée avec des branches en bambou FSC. Deux histoires éco en un seul produit. Le contraste visuel entre le plastique mat lisse et le veinage naturel du bambou se photographie magnifiquement pour les réseaux sociaux et le e-commerce. Nous incluons un étui en fibre de bambou avec votre marque et une étiquette en carton recyclé avec votre message de durabilité. C\u2019est la paire qui séduit le client Gen Z qui lit chaque étiquette et vérifie chaque déclaration. Plusieurs de nos clients DTC rapportent que ce style est leur meilleur vendeur en chiffre d\u2019affaires.',
    price: '$8.00 - $12.00',
    moq: '300 pcs',
    features: ['Plastique Océan + Bambou', 'Étui Fibre de Bambou', 'Étiquette Recyclée', 'Prêt pour Instagram'],
  },
  {
    name: 'Éco Explorateur Enfants',
    description: 'Des lunettes durables pour la prochaine génération — littéralement. Monture en nylon bio-sourcé (dérivé de l\u2019huile de ricin) avec charnières à ressort flexibles dimensionnées pour les 4-12 ans. Les parents qui achètent pour leurs enfants sont parmi les consommateurs les plus éco-conscients, et ils sont prêts à payer un premium pour des produits sûrs et durables. Les montures sont sans BPA, sans phtalates et hypoallergéniques. Nous pouvons faire des couleurs amusantes — bleu océan, vert forêt, orange coucher de soleil — avec un emballage éco assorti. Le MOQ est un peu plus élevé car les montures enfants nécessitent un outillage séparé.',
    price: '$4.50 - $7.00',
    moq: '500 pcs',
    features: ['Nylon Bio-Sourcé', 'Sans BPA/Phtalates', 'Âges 4-12', 'Charnières à Ressort'],
  },
]

export default function EcoFriendlyPageFr() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Écologiques Durables',
        description: 'Lunettes de soleil durables fabriquées à partir de plastique océanique recyclé, bambou, bio-acétate et aluminium recyclé. Protection UV400, personnalisation OEM complète. Certifications vertes disponibles.',
        minPrice: '4.50',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes Écologiques', url: 'https://eyeviewsunglasses.com/fr/produits/ecologique' }
      ]} />
      <FAQPageSchema faqs={ecoFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fil d&apos;Ariane */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes Écologiques</span>
          </nav>

          {/* Image Hero */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
              alt="Lunettes de Soleil Écologiques Durables en Gros - Bambou et Matériaux Recyclés"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricant de Lunettes de Soleil Écologiques
            </h1>
          </div>

          {/* Présentation */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Je vais être honnête avec vous — il y a cinq ans, quand les marques me demandaient des &ldquo;lunettes durables&rdquo;, j&apos;étais sceptique. Je pensais que c&apos;était un coup marketing qui s&apos;estomperait en une saison ou deux. J&apos;avais tort. Complètement tort. En 2024, environ 35 % de nos demandes de nouveaux clients mentionnent spécifiquement la durabilité comme une exigence. Pas un bonus — une exigence. Le changement a été spectaculaire, et il est porté par une chose : la demande des consommateurs, en particulier des acheteurs Gen Z et millennials qui vérifient vraiment de quoi leurs lunettes sont faites.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Alors nous avons investi. Au cours des trois dernières années, nous avons construit des chaînes d&apos;approvisionnement dédiées aux matériaux éco, obtenu la <Link href="/fr/certifications" className="text-primary-600 hover:underline">certification ISO 14001 de management environnemental</Link> pour notre usine, et développé des processus de production pour quatre matériaux durables majeurs : le plastique océanique recyclé (rPET), le bambou certifié FSC, l&apos;<a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Eastman Acetate Renew</a> (bio-acétate) et l&apos;aluminium recyclé. Chacun a des propriétés, des coûts et des histoires différents — et honnêtement, lequel vous convient dépend entièrement du positionnement de votre marque et de vos clients.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Voici l&apos;argument commercial en une phrase : les <strong>lunettes durables</strong> coûtent typiquement 0,50-2,00 $ de plus par paire à produire, mais elles bénéficient de prix de détail 30-50 % plus élevés. Une wayfarer conventionnelle qui se vend 35 $ au détail peut se vendre à 45-55 $ avec des références éco légitimes. J&apos;ai vu des dizaines de nos clients DTC faire fonctionner ce calcul magnifiquement. Une marque à Amsterdam a basculé toute sa gamme en bio-acétate en 2023 et a vu sa valeur moyenne de commande bondir de 28 % — mêmes montures, mêmes verres, juste un matériau différent et une meilleure histoire.
              </p>
              <p className="text-lg leading-relaxed">
                Le mot clé ici est &ldquo;légitime&rdquo;. Le greenwashing détruira une marque plus vite qu&apos;un mauvais produit. Chaque matériau que nous proposons est accompagné d&apos;une documentation traçable — chaîne de traçabilité ISCC PLUS pour le bio-acétate, certification FSC pour le bambou, registres des partenaires de collecte pour le plastique océanique. Quand votre client scanne le QR code sur l&apos;étiquette et voit d&apos;où vient réellement le matériau, cela construit le type de confiance que l&apos;argent ne peut pas acheter. Laissez-moi vous présenter ce que nous proposons.
              </p>
            </div>
          </div>

          {/* Matériaux Durables en Détail */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Nos matériaux durables</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Quatre matériaux, quatre histoires différentes. Voici un regard honnête sur ce qu&apos;est réellement chacun, ce qu&apos;il coûte, et à qui il convient le mieux.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">Plastique océanique recyclé (rPET)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nous collaborons avec des organisations de collecte côtière en Indonésie, en Thaïlande et aux Philippines qui ramassent les déchets plastiques post-consommation sur les plages et dans les eaux peu profondes. Le PET collecté est trié, nettoyé, broyé et retransformé en granulés de qualité injection. Chimiquement, c&apos;est du polyéthylène téréphtalate — résistant, léger et stable aux UV. Nous le moulons par injection de la même manière que le nylon vierge. Le résultat a le même aspect et le même toucher que n&apos;importe quelle monture en plastique premium. Les couleurs sont légèrement plus limitées que le matériau vierge (les noirs profonds et les couleurs foncées fonctionnent le mieux), mais nous pouvons reproduire la plupart des teintes Pantone. Le coût est à peu près le même que le nylon standard — parfois même moins cher quand les prix de la résine vierge augmentent.
                </p>
                <div className="text-primary-600 font-bold">5,50 - 9,00 $ / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🎋</div>
                <h3 className="text-xl font-bold mb-3">Branches en bambou</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bambou Moso (<em>Phyllostachys edulis</em>) provenant de plantations certifiées FSC dans la province du Zhejiang, en Chine. Le bambou atteint sa maturité de récolte en 3-5 ans — contre 20-60 ans pour le bois dur — et se régénère à partir du même système racinaire sans replantation. Chaque ébauche de branche est séchée au four à 8-10 % d&apos;humidité, découpée CNC, poncée à la main avec trois grains, et finie avec une laque alimentaire. Le veinage naturel signifie que chaque paire a un aspect légèrement unique. Les branches en bambou ajoutent environ 0,50-1,00 $ par paire par rapport aux branches en plastique standard. Elles se marient magnifiquement avec des montures frontales en rPET ou bio-acétate pour un package éco complet. Note : le bambou n&apos;est pas adapté aux montures frontales (la partie qui tient les verres) car il manque de la précision dimensionnelle nécessaire pour maintenir les verres de manière sécurisée.
                </p>
                <div className="text-primary-600 font-bold">Ajoute 0,50 - 1,00 $ / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">♻️</div>
                <h3 className="text-xl font-bold mb-3">Bio-acétate (Eastman Acetate Renew)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  C&apos;est l&apos;option durable premium et celle qui m&apos;enthousiasme le plus. L&apos;<a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acétate de cellulose</a> est le matériau de monture de référence depuis des décennies — et l&apos;<a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Acetate Renew d&apos;Eastman</a> utilise le recyclage moléculaire pour remplacer 60 % des matières premières fossiles par du contenu recyclé certifié. Le génie est que le résultat est chimiquement identique à l&apos;acétate conventionnel. Même dureté, même polissage, même vivacité des couleurs, même tout. Vos clients ne peuvent pas faire la différence en le regardant ou en le portant — mais l&apos;empreinte environnementale est véritablement inférieure. Il porte la certification ISCC PLUS à bilan massique, qui est le standard pour les déclarations vérifiées de contenu recyclé. Ajoute 1-2 $ par paire. Si votre marque est positionnée premium et que vos clients lisent les étiquettes, c&apos;est le matériau.
                </p>
                <div className="text-primary-600 font-bold">Ajoute 1,00 - 2,00 $ / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">Aluminium recyclé</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pour les styles de montures métalliques — en particulier les <Link href="/fr/produits/aviateur" className="text-primary-600 hover:underline">aviateurs</Link> — l&apos;aluminium recyclé est une amélioration durable simple. Nous nous approvisionnons en chutes d&apos;aluminium post-industriel (chutes de fabrication automobile et aérospatiale) et les refondons en billettes d&apos;alliage 6061-T6. Une fois reformé, l&apos;aluminium recyclé est métallurgiquement identique au matériau vierge. Même résistance, même poids, même capacité d&apos;anodisation dans n&apos;importe quelle couleur. Le bénéfice environnemental est significatif : le recyclage de l&apos;aluminium utilise 95 % moins d&apos;énergie que la production d&apos;aluminium vierge à partir de minerai de bauxite. Ajoute environ 0,50-1,00 $ par paire. La seule contrainte est la documentation de traçabilité — nous maintenons des registres de lots reliant chaque série de production à la source de chutes, mais ce n&apos;est pas une histoire aussi élégante pour le consommateur que le plastique océanique ou le bambou.
                </p>
                <div className="text-primary-600 font-bold">Ajoute 0,50 - 1,00 $ / paire</div>
              </div>
            </div>
          </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Écologiques en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Grille Produits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Notre Collection Écologique</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🌿</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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

          {/* Tableau des Spécifications */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Matériaux éco en un coup d&apos;œil</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Plastique Océan Recyclé (rPET)', 'PET post-consommation moulé par injection, provenant de nettoyages côtiers. Même aspect/toucher que le nylon vierge.'],
                      ['Bambou (Moso)', 'Certifié FSC, séché au four, découpé CNC, poncé à la main, revêtement laque. Utilisé pour les branches uniquement.'],
                      ['Bio-Acétate (Eastman Renew)', '60 % de contenu recyclé certifié via recyclage moléculaire. Certifié ISCC PLUS. Chimiquement identique à l\u2019acétate standard.'],
                      ['Aluminium Recyclé', 'Chutes post-industrielles 6061-T6, refondues. 95 % moins d\u2019énergie vs aluminium vierge. Performance identique.'],
                      ['Matériau des Verres', 'Identique au standard : Polycarbonate / TAC Polarisé / CR-39 — aucun compromis sur l\u2019optique'],
                      ['Protection UV', 'UV400 — bloque 100 % des UVA (315-380nm) et UVB (280-315nm)'],
                      ['Certifications Disponibles', 'CE · FDA · UV400 · ISO 9001 · ISO 14001 · ISCC PLUS (bio-acétate) · FSC (bambou)'],
                      ['Options Emballage Éco', 'Étuis fibre de bambou, boîtes carton recyclé, sachets amidon de maïs, impression encre de soja'],
                      ['MOQ', '200 pcs (rPET, bio-acétate, alu recyclé) / 300 pcs (branches bambou)'],
                      ['Surcoût vs Standard', 'rPET : 0 $ / Bambou : +0,50-1,00 $ / Bio-acétate : +1-2 $ / Alu recyclé : +0,50-1,00 $'],
                      ['Délai d\u2019Échantillon', '5-7 jours ouvrables (les matériaux éco peuvent nécessiter un délai d\u2019approvisionnement)'],
                      ['Délai de Production', '18-25 jours standard / 12-15 jours urgent'],
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

          {/* L&apos;argument commercial du vert */}
          <section className="mb-20 bg-green-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">L&apos;argument commercial du vert</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              La durabilité n&apos;est pas de la charité — c&apos;est du commerce intelligent. Voici les chiffres.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📈 Prime retail de 30-50 %</h3>
                <p className="text-sm text-gray-600">Les consommateurs paient systématiquement plus pour des produits durables vérifiés. Une wayfarer standard à 35 $ devient une wayfarer éco à 45-55 $. Votre marge par paire s&apos;améliore même avec le coût matériau plus élevé.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎯 La Gen Z l&apos;exige</h3>
                <p className="text-sm text-gray-600">73 % des consommateurs Gen Z sont prêts à payer plus pour des produits durables (First Insight, 2023). Si votre marché cible a moins de 35 ans, la durabilité n&apos;est pas optionnelle — c&apos;est le minimum pour capter leur attention.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📰 Mine d&apos;or RP et marketing</h3>
                <p className="text-sm text-gray-600">Les produits éco génèrent de la couverture média gratuite. Nous avons vu des clients être présentés dans Vogue, GQ et des blogs de durabilité uniquement grâce à leur histoire matériau. Essayez d&apos;obtenir ce type de presse avec une monture acétate standard.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🔄 Rachat plus élevé</h3>
                <p className="text-sm text-gray-600">Les marques durables voient une rétention client 20-30 % plus élevée. Quand quelqu&apos;un adhère à votre mission éco, il revient pour la prochaine collection. Il devient un ambassadeur, pas juste un client.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏪 Préférence des acheteurs retail</h3>
                <p className="text-sm text-gray-600">Les grands détaillants (Nordstrom, REI, Whole Foods Market, boutiques indépendantes) recherchent activement des marques de lunettes durables à référencer. Une gamme éco ouvre des portes que les produits conventionnels ne peuvent pas.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌍 Vents réglementaires favorables</h3>
                <p className="text-sm text-gray-600">Les réglementations de l&apos;UE sur les plastiques à usage unique et la responsabilité élargie des producteurs se durcissent. Les marques qui passent aux matériaux durables maintenant sont en avance au lieu de se dépêcher pour se conformer plus tard.</p>
              </div>
            </div>
          </section>

          {/* Personnalisation */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Options de personnalisation éco</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Passer au vert ne signifie pas passer au générique. Voici comment nous rendons vos lunettes éco distinctement vôtres.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Marquage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Gravure laser</strong> sur les branches en bambou — magnifique avec le veinage naturel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Logo en creux</strong> sur les montures bio-acétate ou rPET — pressé, sans encre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Impression coin de verre</strong> — marquage subtil qui ne compromet pas le message éco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Étiquette QR code</strong> — lien vers votre page d&apos;histoire de durabilité</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Couleurs et finitions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>rPET :</strong> Bleu océan mat, corail, noir carbone, olive — ou correspondance Pantone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bio-acétate :</strong> Gamme complète — écaille, cristal, marbre, dégradé, couleurs unies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bambou :</strong> Naturel, carbonisé (plus foncé), ou teinté tons terre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Aluminium recyclé :</strong> Toute couleur anodisée — mat ou brillant</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Emballage éco</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Étui rigide fibre de bambou</strong> — biodégradable, avec votre logo en relief</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Boîte carton recyclé</strong> — impression encre de soja, papier FSC, sans film plastique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Pochette coton bio</strong> — sert aussi de chiffon de nettoyage, certification GOTS disponible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Sachet amidon de maïs</strong> — emballage intérieur compostable remplaçant le plastique standard</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Qui achète */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Qui achète des lunettes écologiques ?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Le marché de la lunetterie durable a explosé. Voici pour qui nous produisons en ce moment.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🌱 Marques DTC durables</h3>
                <p className="text-gray-300 text-sm">Le segment à la croissance la plus rapide. Ce sont des marques natives Shopify construites autour d&apos;une mission de durabilité. Elles ont besoin de matériaux avec des déclarations éco vérifiables, de belles photos et une histoire qui résiste à l&apos;examen. Le bio-acétate et le plastique océanique sont leurs favoris.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏄 Marques outdoor et surf</h3>
                <p className="text-gray-300 text-sm">Les marques du secteur outdoor sont sous forte pression pour passer au durable. Les lunettes en plastique océanique sont un choix naturel — l&apos;histoire du matériau se connecte directement au mode de vie de leurs clients. Plusieurs de nos clients marques de surf sont passés à 100 % éco.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏨 Hôtels et resorts éco</h3>
                <p className="text-gray-300 text-sm">Marques hôtelières durables proposant des lunettes éco comme amenités ou articles de boutique. Les montures à branches bambou avec le logo du resort gravé au laser sont le meilleur vendeur ici. Les clients les gardent comme souvenirs.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🎁 Programmes ESG corporate</h3>
                <p className="text-gray-300 text-sm">Entreprises atteignant leurs objectifs ESG (Environnement, Social, Gouvernance) en passant les cadeaux corporate aux produits durables. Les lunettes éco avec le logo de l&apos;entreprise sont un succès lors des conférences et événements d&apos;équipe — bien mieux qu&apos;un autre stylo griffé.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">👶 Marques de lunettes enfants</h3>
                <p className="text-gray-300 text-sm">Les parents qui achètent pour les enfants sont hyper-conscients des matériaux — tant pour la sécurité que pour les raisons environnementales. Le nylon bio-sourcé et les montures en bambou cochent les deux cases. Ce segment croît de 40 %+ par an chez nous.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🛒 Marques grand public passant au vert</h3>
                <p className="text-gray-300 text-sm">Marques de lunettes établies ajoutant une sous-gamme éco. Elles ont déjà la distribution — elles ont juste besoin d&apos;un produit durable crédible. Le bio-acétate est le basculement le plus facile car il s&apos;intègre directement dans leur processus de production acétate existant.</p>
              </div>
            </div>
          </section>

          {/* Section FAQ */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ Lunettes Écologiques</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {ecoFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Produits Associés */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produits associés</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Wayfarer</h3>
                <p className="text-gray-600 text-sm">Notre wayfarer classique est disponible en bio-acétate. Même forme iconique, même finition polie à la main — maintenant avec 60 % de contenu recyclé certifié.</p>
              </Link>
              <Link href="/fr/produits/aviateur" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Aviateur</h3>
                <p className="text-gray-600 text-sm">Aviateurs métalliques disponibles en aluminium recyclé. Même légèreté, mêmes finitions anodisées, avec 95 % d&apos;énergie en moins dans la production du matériau.</p>
              </Link>
              <Link href="/fr/produits" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Tous les Produits</h3>
                <p className="text-gray-600 text-sm">CE, FDA, ISO 9001, ISO 14001, ISCC PLUS, FSC — consultez la liste complète des certifications et de la documentation de conformité que nous fournissons.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à passer au durable ?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Parlez-nous de votre marque, de votre client cible et de vos objectifs de durabilité. Nous vous recommanderons les bons matériaux éco et vous enverrons des échantillons sous une semaine. Aucun engagement, aucune pression — juste des conseils honnêtes de quelqu&apos;un qui a aidé plus de 100 marques à faire cette transition.
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
