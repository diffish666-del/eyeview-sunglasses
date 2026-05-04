import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricant de Lunettes de Soleil en Acétate | Usine de Lunettes Artisanales - EyeView',
  description: 'Fabricant de lunettes de soleil en acétate personnalisées. Acétate italien Mazzucchelli et acétate chinois premium. Montures polies à la main, plus de 200 couleurs. MOQ 100 pcs. Découpe CNC, polissage au tonneau, direct usine.',
  keywords: 'fabricant lunettes acétate, usine lunettes acétate personnalisées, lunettes acétate italien, lunettes Mazzucchelli, lunettes polies main, lunettes acétate cellulose, montures acétate en gros',
  openGraph: {
    title: 'Fabricant de Lunettes de Soleil en Acétate | Usine de Lunettes Artisanales - EyeView',
    description: 'Fabricant de lunettes de soleil en acétate personnalisées. Acétate italien Mazzucchelli et acétate chinois premium. Polies à la main, plus de 200 couleurs. MOQ 100 pcs. Direct usine.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/acetate',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/acetate',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/acetate',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/acetate',
    },
  },
}

const acetateFaqs = [
  {
    question: 'Quelle est la différence entre l\u2019acétate italien Mazzucchelli et l\u2019acétate chinois ?',
    answer: 'La réponse honnête est que l\u2019écart s\u2019est considérablement réduit au cours de la dernière décennie, mais il reste des différences réelles. Mazzucchelli (et d\u2019autres fabricants italiens comme Lapo) utilise un processus d\u2019extrusion plus lent et mieux contrôlé qui produit des plaques avec une profondeur de couleur et une distribution de motifs plus constantes — particulièrement visible dans les motifs complexes comme l\u2019écaille multicouche ou les couleurs cristal transparentes. L\u2019acétate italien tend également à se polir avec un brillant légèrement supérieur. L\u2019acétate chinois des producteurs de premier plan comme Shenzhen Xin Rui ou Taizhou Huangyan s\u2019est considérablement amélioré et est véritablement bon — excellente gamme de couleurs, bonne régularité, et environ 30 à 40 % moins cher. Pour la plupart des prix de vente au détail sous 80 $, l\u2019acétate chinois de haute qualité est le choix intelligent. Pour les marques premium vendant au-dessus de 100 $ où le client pourrait comparer votre monture côte à côte avec Céline ou Tom Ford, l\u2019acétate italien vous apporte ces derniers 10 % de raffinement.',
  },
  {
    question: 'Combien de temps prend le processus de production en acétate ?',
    answer: 'Plus longtemps qu\u2019on ne le pense — et c\u2019est justement ce qui rend l\u2019acétate spécial. De la découpe CNC au contrôle qualité final, une seule paire nécessite 5 à 7 jours de traitement effectif. Les étapes les plus chronophages sont le polissage au tonneau (3 à 5 jours pour lisser toutes les marques d\u2019usinage) et le polissage à la main (20 à 30 minutes par paire par des ouvriers qualifiés). Le délai total de production pour une commande est généralement de 20 à 28 jours car nous traitons par lots à chaque étape. Les commandes urgentes peuvent être réalisées en 14 à 18 jours, mais nous facturons un supplément de 15 % car nous devons interrompre d\u2019autres cycles de production. Les paires d\u2019échantillons prennent 5 à 7 jours ouvrables.',
  },
  {
    question: 'Quelles couleurs et quels motifs pouvez-vous réaliser en acétate ?',
    answer: 'Pratiquement illimité. Nous disposons de plus de 200 couleurs et motifs de plaques d\u2019acétate de nos fournisseurs — couleurs unies, écaille de tortue (classique brun, blond, foncé), cristal/transparent (clair, gris, champagne, bleu), marbre, veinage bois, effet corne, dégradé et motifs laminés multicouches. Pour les couleurs personnalisées, vous nous donnez un code Pantone et le fournisseur d\u2019acétate produit une plaque assortie. Le développement de motifs personnalisés (comme un mélange écaille unique ou un motif de marque) est également possible — la commande minimale de plaques est généralement de 50 à 100 kg, ce qui correspond à environ 500 à 1 000 paires selon la taille de la monture. Pour les commandes plus petites, nous recommandons fortement de choisir parmi les couleurs en stock — il y en a tellement que vous trouverez presque certainement ce dont vous avez besoin.',
  },
  {
    question: 'Comment les clients doivent-ils entretenir les lunettes en acétate ?',
    answer: 'L\u2019acétate est plus résistant que la plupart des gens ne le pensent, mais il y a quelques points à connaître. Premièrement, tenez-les éloignées de la chaleur extrême — ne les laissez pas sur le tableau de bord d\u2019une voiture en été. L\u2019acétate ramollit autour de 70-80 °C (158-176 °F), une chaleur prolongée peut donc déformer la monture. Deuxièmement, évitez l\u2019acétone et les solvants agressifs — le dissolvant pour vernis à ongles endommagera la surface. Troisièmement, nettoyez avec de l\u2019eau tiède et du savon doux, puis séchez avec un chiffon doux. Pas de nettoyants pour verres à base d\u2019alcool. La bonne nouvelle est que les montures en acétate peuvent être ajustées par votre opticien avec une chaleur douce, et les rayures mineures peuvent souvent être polies. Nous incluons des cartes d\u2019instructions d\u2019entretien avec chaque commande sans frais supplémentaires — cela évite à vos clients les erreurs les plus courantes et réduit votre taux de retour.',
  },
  {
    question: 'Quel est le MOQ pour les lunettes en acétate personnalisées ?',
    answer: 'Le MOQ standard est de 100 pièces par modèle. Vous pouvez mélanger les couleurs au sein de ces 100 — donc 30 noires, 30 écaille et 40 cristal transparent fonctionne parfaitement. Si vous souhaitez un design de monture entièrement personnalisé (votre propre forme, pas un de nos moules existants), il y a des frais de moule uniques de 800-1 500 $ selon la complexité, et le MOQ pour les formes personnalisées est de 300 pièces sur la première commande. Ensuite, les réapprovisionnements reviennent à 100 pièces. Pour les couleurs de plaques d\u2019acétate personnalisées (correspondance Pantone), le MOQ de plaques du fournisseur est généralement de 50 à 100 kg. Nous maintenons une large bibliothèque de couleurs en stock pour éviter ce minimum aux plus petites marques.',
  },
  {
    question: 'Pourquoi l\u2019acétate est-il plus cher que le plastique moulé par injection ?',
    answer: 'Parce que presque chaque étape nécessite des mains humaines qualifiées. Les montures moulées par injection (nylon, TR90, PC) sont fabriquées par une machine en environ 30 secondes — on injecte du plastique chaud dans un moule, on refroidit, on démonte, c\u2019est fait. Les montures en acétate commencent comme des plaques plates qui passent par un parcours de production de plusieurs jours : découpe CNC, polissage au tonneau, polissage à la main, assemblage et contrôle qualité. Le contenu en main-d\u2019œuvre est considérablement plus élevé. Le coût des matériaux est également plus élevé — un kilogramme de plaque d\u2019acétate de qualité coûte 3 à 5 fois plus que les granulés de nylon pour injection. Le bénéfice est que les montures en acétate ont un aspect et un toucher premium que le plastique moulé par injection ne peut tout simplement pas égaler. Les couleurs sont plus riches, la surface a plus de profondeur, et il y a une chaleur et un poids dans l\u2019acétate que les clients associent à la qualité. C\u2019est pourquoi les montures en acétate se vendent au détail entre 60 et 200 $+ alors que les montures moulées par injection plafonnent généralement à 40-60 $.',
  },
]

const products = [
  {
    name: 'Wayfarer Écaille Classique',
    description: 'La wayfarer écaille est la monture en acétate la plus demandée dans l\u2019industrie de la lunetterie — et pour cause. Le motif ambre et brun flatte tous les tons de peau, se photographie magnifiquement et dégage instantanément une perception premium. Nous la produisons en acétate italien Mazzucchelli (pour les gammes premium) et en acétate chinois de haute qualité (pour le positionnement milieu de gamme). Chaque paire est polie à la main jusqu\u2019à un brillant profond qui capte la lumière d\u2019une manière que le plastique moulé par injection ne peut tout simplement pas reproduire. Si vous lancez une marque de lunettes et avez besoin d\u2019un premier SKU sûr, c\u2019est probablement celui-ci.',
    price: '$6.00 - $11.00',
    moq: '100 pcs',
    features: ['Motif Écaille', 'Poli à la Main', 'Verres UV400', 'Charnière 5 Barillets'],
  },
  {
    name: 'Ronde Cristal Transparent',
    description: 'L\u2019acétate transparent est en forte tendance depuis trois ans et ne montre aucun signe de ralentissement. Notre monture ronde cristal transparent est d\u2019une clarté optique — pas de teinte jaune, pas de trouble — avec ce poids satisfaisant de l\u2019acétate qui dit au client qu\u2019il tient quelque chose de vrai. La forme ronde est très populaire auprès du public indie/vintage et performe particulièrement bien sur les marchés asiatiques où les formes plus rondes conviennent à davantage de types de visages. Nous pouvons faire du totalement transparent, ou un subtil gris cristal, champagne cristal ou bleu cristal si vous voulez un soupçon de couleur.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Cristal Transparent', 'Forme Ronde', 'Clarté Optique', 'Plusieurs Options de Teinte'],
  },
  {
    name: 'Œil de Chat Effet Marbre',
    description: 'Le motif marbre est réalisé en superposant deux ou trois plaques d\u2019acétate de couleurs différentes et en les pressant ensemble, créant un effet de pierre tourbillonnée totalement unique à chaque paire. Associé à la forme œil de chat — qui domine la lunetterie féminine depuis son retour vers 2018 — c\u2019est une pièce de caractère. Nous voyons ces modèles performer particulièrement bien auprès des marques DTC avant-gardistes et des détaillants boutiques. Le motif marbre est disponible en blanc/gris, noir/gris, vert/or et rose/blanc, ou nous pouvons développer un mélange marbre personnalisé.',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    features: ['Motif Marbre', 'Forme Œil de Chat', 'Acétate Multicouche', 'Unique Par Paire'],
  },
  {
    name: 'Acétate Dégradé Oversize',
    description: 'Acétate dégradé bicolore — foncé en haut, s\u2019éclaircissant vers le bas. Cet effet est obtenu en laminant deux plaques d\u2019acétate de couleurs différentes et en contrôlant le ratio d\u2019épaisseur. La monture oversize offre une excellente couverture solaire et a ce look de marque de luxe qui performe bien sur Instagram et dans les éditoriaux de mode. Disponible en dégradés noir vers transparent, brun vers miel, bleu vers transparent et bordeaux vers rose. Ce style se vend facilement entre 80 et 150 $ au détail et le coût par paire commence sous les 10 $. Les marges sont excellentes.',
    price: '$8.00 - $13.00',
    moq: '100 pcs',
    features: ['Dégradé Bicolore', 'Monture Oversize', 'Acétate Laminé', 'Positionnement Premium'],
  },
  {
    name: 'Carré Premium en Acétate Italien',
    description: 'Pour les marques qui rivalisent au sommet du marché. Cette monture utilise exclusivement de l\u2019acétate Mazzucchelli M49 — le même grade utilisé par Tom Ford, Céline et Oliver Peoples. La différence est visible dans la profondeur de couleur et la qualité du polissage. Nos ouvriers passent plus de 30 minutes à polir chaque paire à la main pour obtenir cette finition verre liquide. Charnières cinq barillets avec fil d\u2019âme logo personnalisé. La forme carrée est polyvalente — convient aux hommes comme aux femmes — et les proportions sont calibrées pour un look moderne, légèrement oversize, qui se photographie bien. C\u2019est la paire qui fait qu\u2019un acheteur prend votre monture sur un salon professionnel et dit « oh, c\u2019est beau ».',
    price: '$10.00 - $16.00',
    moq: '100 pcs',
    features: ['Mazzucchelli M49', 'Polissage Premium', 'Charnières 5 Barillets', 'Fil d\u2019Âme Personnalisé'],
  },
  {
    name: 'Browline Acétate Effet Corne',
    description: 'Le motif effet corne imite la corne de buffle naturelle — des stries foncées sur une base plus claire qui créent une texture organique, presque boisée. Associé à la forme browline (clubmaster), où la moitié supérieure de la monture est en acétate plus épais et la partie inférieure en fil métallique fin, c\u2019est un design hybride distinctif. Le motif corne est particulièrement populaire sur les marchés japonais et coréen où il véhicule une esthétique sophistiquée et intellectuelle. Chaque paire a un motif légèrement différent en raison de la variation naturelle dans la plaque d\u2019acétate. Nous utilisons de l\u2019acier inoxydable de fabrication allemande pour le cerclage inférieur en fil.',
    price: '$9.00 - $14.00',
    moq: '100 pcs',
    features: ['Motif Effet Corne', 'Forme Browline', 'Hybride Acétate + Métal', 'Fil Acier Allemand'],
  },
]

export default function AcetatePageFr() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil en Acétate Personnalisées',
        description: 'Lunettes de soleil en acétate artisanales fabriquées avec de l\u2019acétate italien Mazzucchelli et de l\u2019acétate chinois premium. Découpe CNC, polissage au tonneau, polissage à la main. Plus de 200 couleurs et motifs. Personnalisation OEM complète.',
        minPrice: '6.00',
        maxPrice: '16.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes en Acétate', url: 'https://eyeviewsunglasses.com/fr/produits/acetate' }
      ]} />
      <FAQPageSchema faqs={acetateFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fil d&apos;Ariane */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes en Acétate</span>
          </nav>

          {/* Image Hero */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Fabricant de Lunettes de Soleil en Acétate - Lunettes Artisanales Mazzucchelli Italien en Gros"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricant de Lunettes de Soleil en Acétate
            </h1>
          </div>

          {/* Présentation / Vue d&apos;ensemble */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Si vous avez déjà pris en main une paire de lunettes de soleil et immédiatement pensé &ldquo;celles-ci ont l&apos;air chères&rdquo;, vous teniez presque certainement de l&apos;<a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acétate de cellulose</a>. Il y a une raison pour laquelle chaque grande marque de lunettes de luxe — de Tom Ford à Chanel en passant par Oliver Peoples — construit ses montures avec ce matériau. L&apos;acétate a une profondeur et une richesse que le plastique moulé par injection ne peut pas égaler. Les couleurs sont en couches, pas peintes en surface. Le polissage dégage une chaleur. Et le poids — environ 25-35 grammes pour une monture typique — se pose sur votre visage avec une substance qui dit &ldquo;ceci coûte plus de 20 $&rdquo;.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Je fabrique des lunettes de soleil en acétate depuis 14 ans, et le processus me fascine toujours. Contrairement au moulage par injection — où l&apos;on injecte du plastique chaud dans un moule et on obtient une monture finie en 30 secondes — les montures en acétate commencent comme des plaques plates de matériau qui passent par un parcours de production de plusieurs jours : découpe CNC, polissage au tonneau, polissage à la main, assemblage et contrôle qualité. Chaque paire passe entre des mains humaines plusieurs fois. C&apos;est ce qui rend les montures en acétate plus chères, et c&apos;est aussi ce qui les rend meilleures.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Nous travaillons avec deux catégories d&apos;acétate. Pour les marques premium, nous utilisons l&apos;acétate italien <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> — ils fabriquent ce matériau depuis 1849 et sont la référence. Leur bibliothèque de couleurs compte plus de 2 000 motifs et leur contrôle qualité est méticuleux. Pour les marques positionnées en milieu de gamme (40-80 $ au détail), nous utilisons de l&apos;acétate chinois de premier plan provenant de fournisseurs comme Shenzhen Xin Rui, qui s&apos;est considérablement amélioré au cours de la dernière décennie et offre un excellent rapport qualité-prix. Les deux fonctionnent. Lequel choisir dépend de votre prix cible et de votre concurrence.
              </p>
              <p className="text-lg leading-relaxed">
                Notre usine produit environ 300 000 paires de lunettes de soleil en acétate par an dans tous les styles — <Link href="/fr/produits/wayfarer" className="text-primary-600 hover:underline">wayfarers</Link>, <Link href="/fr/produits/oeil-de-chat" className="text-primary-600 hover:underline">œil de chat</Link>, <Link href="/fr/produits/rond" className="text-primary-600 hover:underline">rondes</Link>, carrées, browlines et formes personnalisées. Nous exploitons 12 machines CNC, 6 tambours de polissage et employons 45 ouvriers de polissage à la main. Laissez-moi vous expliquer exactement comment nous transformons une plaque plate d&apos;acétate en une paire de lunettes de soleil finie.
              </p>
            </div>
          </div>

          {/* Processus de Production */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Comment nous fabriquons les lunettes en acétate</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              De la plaque plate à la monture finie en 5 à 7 jours. Voici chaque étape — sans raccourcis, sans secrets.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sélection des plaques et découpe CNC</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tout commence avec la plaque d&apos;acétate — un bloc de matériau d&apos;environ 6 mm d&apos;épaisseur dans la couleur ou le motif que vous avez choisi. Nous chargeons la plaque dans une machine de fraisage CNC (commande numérique par ordinateur) qui découpe la face avant et les branches selon des spécifications précises. La CNC suit le fichier CAO 3D de votre monture, découpant les rainures de verres, la forme du pont et les logements de charnières en une seule opération. Un opérateur CNC qualifié peut découper environ 40 à 50 faces avant par heure. À ce stade, la monture est brute — on peut voir les marques d&apos;usinage et les bords sont vifs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Polissage au tonneau (3 à 5 jours)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    C&apos;est l&apos;étape qui surprend — les montures sont placées dans un tambour rotatif rempli de copeaux de bois, de pierre ponce et d&apos;une petite quantité d&apos;eau. Le tambour tourne lentement pendant 3 à 5 jours, et la friction lisse progressivement toutes les marques d&apos;usinage et arrondit les bords. C&apos;est essentiellement un processus de ponçage très lent et très doux. On ne peut pas accélérer cette étape. Nous avons essayé. Si l&apos;on raccourcit le temps de tonneau, la surface n&apos;est pas assez lisse pour que le polissage final soit réussi. Les différents motifs nécessitent des médias de polissage différents — par exemple, l&apos;acétate cristal transparent nécessite un média plus fin pour éviter les micro-rayures.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Polissage à la main (20 à 30 minutes par paire)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    C&apos;est ici que la magie opère et d&apos;où provient l&apos;essentiel du coût. Un ouvrier qualifié prend chaque monture et la polit à la main contre une série de roues de lustrage en coton, en utilisant des composés de polissage progressivement plus fins. La première roue élimine les marques résiduelles du tonneau. La deuxième apporte un semi-brillant. La troisième et dernière roue produit ce brillant profond, cette finition verre liquide qui donne aux montures en acétate leur aspect si premium. Nos ouvriers de polissage ont en moyenne 6 ans d&apos;expérience — il faut environ un an de formation avant qu&apos;une personne puisse polir de manière constante selon notre standard. C&apos;est l&apos;étape que les montures en plastique grand public sautent entièrement, et c&apos;est la raison pour laquelle les montures en acétate ont un aspect et un toucher fondamentalement différents.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Assemblage des charnières et montage des verres</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous insérons les charnières (typiquement 5 barillets en acier inoxydable avec fil d&apos;âme personnalisé pour votre logo), attachons les branches et montons les verres. Pour les montures en acétate, les verres sont découpés pour correspondre à la forme de la rainure et insérés en chauffant doucement la monture à environ 60 °C, ce qui rend l&apos;acétate suffisamment flexible pour accepter le verre sans fissuration de contrainte. Chaque charnière est testée pour une action fluide et une tension correcte. L&apos;alignement des branches est vérifié pour s&apos;assurer que la monture repose de niveau sur une surface plane.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contrôle qualité</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque paire passe par une inspection en 15 points : alignement des verres, tension des charnières, symétrie des branches, finition de surface (vérification des rayures, piqûres ou polissage irrégulier), régularité de couleur, vérification de la protection UV (testée avec un spectromètre UV) et mesures physiques par rapport à la fiche technique. Notre taux de rejet en contrôle qualité pour les montures en acétate est d&apos;environ 3-5 % — plus élevé que pour les montures moulées par injection (environ 1-2 %) car les processus manuels introduisent plus de variabilité. Les paires rejetées retournent au re-polissage ou sont entièrement mises au rebut. Nous n&apos;expédions pas de secondes qualités.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acétate Italien vs Chinois */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Acétate italien vs chinois : la vraie histoire</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              On me pose cette question à presque chaque appel. Voici une comparaison honnête de quelqu&apos;un qui travaille avec les deux au quotidien.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-3">Acétate italien (Mazzucchelli, Lapo)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Profondeur de couleur et régularité des motifs supérieures — surtout dans les motifs multicouches complexes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Se polit à un brillant légèrement supérieur avec moins d&apos;effort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Bibliothèque de plus de 2 000 motifs avec des décennies de R&amp;D derrière chacun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>&ldquo;Fabriqué avec de l&apos;acétate italien&rdquo; est un argument marketing légitime qui parle aux acheteurs premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>30 à 40 % plus cher que l&apos;acétate chinois équivalent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Délais plus longs pour les couleurs personnalisées (6 à 8 semaines de la commande à la livraison des plaques)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Idéal pour : vente au détail 80 $+</div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-3">Acétate chinois premium</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Excellente qualité des producteurs de premier plan — véritablement bon, pas un compromis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Coût par kilogramme inférieur de 30 à 40 %</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Délai de couleur personnalisée plus rapide (3 à 4 semaines)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>MOQ de plaques plus bas pour les couleurs personnalisées (50 kg vs 100 kg pour l&apos;italien)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Les motifs complexes (écaille multicouche) peuvent avoir une distribution légèrement moins régulière</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Pas de story marketing &ldquo;italien&rdquo; (bien que &ldquo;acétate de cellulose premium&rdquo; fonctionne toujours)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Idéal pour : vente au détail 40-80 $</div>
              </div>
            </div>

            <p className="text-gray-500 text-center mt-8 text-sm">
              Ma recommandation : commencez avec l&apos;acétate chinois pour valider vos designs et vos prix. Passez à l&apos;italien pour vos produits phares une fois la demande confirmée. De nombreuses marques à succès utilisent les deux — l&apos;italien pour leur gamme flagship, le chinois pour leur collection quotidienne.
            </p>
          </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Lunettes de Soleil en Acétate en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Grille Produits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Notre Collection Acétate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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
            <h2 className="text-3xl font-bold text-center mb-10">Spécifications complètes</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Matériau de la Monture', 'Acétate de cellulose — Italien (Mazzucchelli/Lapo) ou chinois premium'],
                      ['Poids de la Monture', '25-35g selon la taille et l\u2019épaisseur de la monture'],
                      ['Épaisseur de la Plaque', '5mm / 6mm / 8mm (le plus courant : 6mm)'],
                      ['Motifs Disponibles', '200+ couleurs en stock : uni, écaille, cristal, marbre, dégradé, corne, veinage bois, laminé'],
                      ['Couleurs Personnalisées', 'Correspondance Pantone disponible — MOQ plaque 50kg (chinois) / 100kg (italien)'],
                      ['Matériau des Verres', 'Polycarbonate / TAC Polarisé / CR-39 Optique / Verre minéral'],
                      ['Largeur de Verre', '48mm - 58mm (varie selon le style de monture)'],
                      ['Largeur du Pont', '16mm - 22mm'],
                      ['Longueur des Branches', '140mm / 145mm / 150mm'],
                      ['Charnières', '5 barillets en acier inoxydable standard / charnières à ressort en option (+0,30 $/paire)'],
                      ['Protection UV', 'UV400 — bloque 100 % des rayonnements UVA et UVB'],
                      ['Processus de Production', 'Découpe CNC → polissage au tonneau (3-5 jours) → polissage à la main (20-30 min) → assemblage → CQ'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 pièces par modèle — mélange de couleurs autorisé / 300 pcs pour formes personnalisées'],
                      ['Frais de Moule (Forme Personnalisée)', '800 - 1 500 $ paiement unique — offerts sur commandes de plus de 1 000 pcs'],
                      ['Délai d\u2019Échantillon', '5-7 jours ouvrables'],
                      ['Délai de Production', '20-28 jours standard / 14-18 jours urgent (+15 %)'],
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

          {/* Options de Couleurs et Motifs */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Couleurs et motifs</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              C&apos;est là que l&apos;acétate brille vraiment par rapport aux autres matériaux. La gamme de couleurs et de motifs réalisables est essentiellement illimitée.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🐢 Écaille de Tortue</h3>
                <p className="text-sm text-gray-600">Le classique. Disponible en brun/ambre (traditionnel), blond/miel (plus clair, plus tendance), Havane foncé (riche, presque noir) et vert/olive (unique). L&apos;écaille multicouche italienne offre le plus de profondeur et de variation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">💎 Cristal / Transparent</h3>
                <p className="text-sm text-gray-600">Totalement transparent ou avec une teinte subtile. Cristal clair, gris cristal, champagne cristal, bleu cristal, rose cristal. La clé est la clarté optique — l&apos;acétate transparent bon marché a un aspect laiteux. Pas le nôtre.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🪨 Marbre et Pierre</h3>
                <p className="text-sm text-gray-600">Obtenu en superposant et pressant des plaques d&apos;acétate de couleurs différentes. Marbre blanc, marbre noir, jade vert, onyx rose. Chaque paire a des motifs de tourbillons légèrement différents — chaque monture est unique.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🌅 Dégradé / Bicolore</h3>
                <p className="text-sm text-gray-600">Foncé en haut, clair en bas (ou d&apos;un côté à l&apos;autre). Noir vers transparent, brun vers miel, bleu marine vers bleu ciel, bordeaux vers rose. Créé en laminant deux plaques d&apos;acétate à des ratios d&apos;épaisseur différents.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🎨 Couleurs Unies</h3>
                <p className="text-sm text-gray-600">Noir mat, noir brillant, bleu marine, vert forêt, bordeaux, crème, rose pastel, bleu ciel — et tout entre les deux. Correspondance Pantone pour les couleurs personnalisées. La profondeur de polissage sur l&apos;acétate uni est époustouflante.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🦌 Effet Corne et Bois</h3>
                <p className="text-sm text-gray-600">Des motifs d&apos;acétate qui imitent la corne de buffle naturelle ou le veinage du bois. Populaires sur les marchés japonais et coréen. Chaque paire est unique en raison de la variation naturelle du motif dans la plaque d&apos;acétate.</p>
              </div>
            </div>
          </section>

          {/* Personnalisation */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Options de personnalisation</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Les montures en acétate offrent la plus large gamme de personnalisation de tous les matériaux de monture. Voici ce que nous pouvons faire.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Marquage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Marquage à chaud</strong> — feuille or, argent ou couleur à l&apos;intérieur de la branche. Classique, élégant.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Gaufrage/dégaufrage</strong> — pressé dans la surface de l&apos;acétate. Subtil et permanent.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Fil d&apos;âme personnalisé</strong> — votre logo gravé au laser sur le fil métallique de la charnière visible quand la branche se déplie.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Badge métallique sur branche</strong> — plaque logo en alliage de zinc ou acier inoxydable rivetée sur la branche.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📐 Design de Monture</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Formes personnalisées</strong> — envoyez-nous un croquis ou un fichier CAO et nous découpons un moule CNC (800-1 500 $ paiement unique)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Largeur de branche</strong> — fine (4 mm) pour un look minimaliste, épaisse (6-8 mm) pour une déclaration audacieuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Pont trou de serrure vs pont sellier</strong> — différents styles de pont nasal pour différentes formes de visage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Style d&apos;embout de branche</strong> — droit, courbé ou en spatule</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Emballage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Étuis en cuir</strong> — fermeture magnétique, logo en creux. Le choix premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Étuis rigides EVA</strong> — durables, légers, impression logo en couleurs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Pochette microfibre</strong> — impression personnalisée, sert aussi de chiffon de nettoyage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Boîtes prêtes pour la vente</strong> — impression couleurs, insert personnalisé, languette de suspension, étiquette code-barres.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pourquoi l&apos;Acétate */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Pourquoi l&apos;acétate justifie un prix premium</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Les montures en acétate se vendent entre 60 et 200 $+ au détail. Voici pourquoi les clients paient ce premium — et pourquoi cela fonctionne pour vos marges.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">✋ Processus artisanal</h3>
                <p className="text-gray-300 text-sm">Chaque paire est touchée par des mains humaines plusieurs fois. Dans un monde de production de masse, cela compte. Les clients sentent la différence — et ils sont prêts à payer pour cela. &ldquo;Poli à la main&rdquo; est un argument marketing authentique qui résonne.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🎨 Profondeur de couleur</h3>
                <p className="text-gray-300 text-sm">Les couleurs de l&apos;acétate sont en couches à travers le matériau, pas peintes en surface. Un motif écaille a une véritable profondeur — on peut voir différentes couches sous différents angles. C&apos;est physiquement impossible avec du plastique moulé par injection.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">⚖️ Qualité perçue</h3>
                <p className="text-gray-300 text-sm">Le poids (25-35g), la chaleur du matériau sur la peau, la profondeur du polissage — tout dans l&apos;acétate communique la qualité. Votre client le prend en main et sait que ce n&apos;est pas une paire de lunettes à 15 $.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🌿 Origine naturelle</h3>
                <p className="text-gray-300 text-sm">L&apos;acétate de cellulose est dérivé de linters de coton et de pâte de bois — c&apos;est un matériau d&apos;origine végétale, pas pétrolière. Cela compte de plus en plus pour les consommateurs éco-responsables et vous donne un angle de durabilité.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🔧 Ajustabilité</h3>
                <p className="text-gray-300 text-sm">L&apos;acétate peut être ajusté par n&apos;importe quel opticien avec une chaleur douce. La monture peut être remodelée pour un ajustement sur mesure. Essayez cela avec du nylon moulé par injection — il casse. Cette ajustabilité prolonge la durée de vie utile du produit et réduit les retours.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">💰 Le calcul des marges</h3>
                <p className="text-gray-300 text-sm">Une monture en acétate coûte 6-16 $ la paire à produire. Elle se vend entre 60 et 200 $ au détail. C&apos;est un multiplicateur de 4 à 12x — mieux que la plupart des produits de consommation. Même après avoir pris en compte le marketing, l&apos;emballage et la distribution, les marges sur les lunettes en acétate sont excellentes.</p>
              </div>
            </div>
          </section>

          {/* Section FAQ */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ Lunettes de Soleil en Acétate</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {acetateFaqs.map((faq, index) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/fr/produits/oeil-de-chat" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😸</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Œil de Chat</h3>
                <p className="text-gray-600 text-sm">Notre style acétate le plus populaire pour les marques féminines. Disponible dans toutes les couleurs et motifs d&apos;acétate.</p>
              </Link>
              <Link href="/fr/produits/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Wayfarer</h3>
                <p className="text-gray-600 text-sm">La forme acétate la plus vendue au monde. Classique, polyvalente, et le premier produit le plus sûr pour les nouvelles marques.</p>
              </Link>
              <Link href="/fr/produits/rond" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Rondes</h3>
                <p className="text-gray-600 text-sm">Rondes d&apos;inspiration vintage en cristal, écaille et acétate uni. Forte tendance sur les marchés asiatiques.</p>
              </Link>
              <Link href="/fr/produits" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Tous les Produits</h3>
                <p className="text-gray-600 text-sm">Découvrez notre gamme complète de lunettes de soleil — acétate, métal, TR90, sport, enfants et plus encore.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à créer votre collection en acétate ?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Envoyez-nous vos idées de montures, vos préférences de couleurs et votre prix cible. Nous vous recommanderons le bon grade d&apos;acétate, vous enverrons des échantillons de matériaux et aurons des échantillons entre vos mains sous une semaine. Acétate italien ou chinois — nous vous aiderons à faire le bon choix.
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
