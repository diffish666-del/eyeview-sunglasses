import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Sport en Gros | Fabricant de Lunettes Athlétiques Polarisées - EyeView',
  description: 'Fabricant de lunettes de soleil sport en gros. Verres polarisés TAC, montures TR90, design enveloppant pour cyclisme, course, pêche, golf, ski et baseball. MOQ 100 pcs. OEM/ODM disponible.',
  keywords: 'lunettes sport en gros, lunettes sport polarisées, fabricant lunettes sport, lunettes cyclisme en gros, lunettes course, lunettes pêche en gros, montures sport TR90, lunettes enveloppantes OEM',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/sport',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sport',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/sport',
    },
  },
}

const sportCategories = [
  {
    name: 'Lunettes de Cyclisme',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pcs',
    description: 'Vous faites du 40 km/h en descente. Un insecte vous frappe l\u2019œil. Terminé. C\u2019est pourquoi tout cycliste sérieux a besoin de lunettes adaptées — pas des lunettes de mode d\u2019une station-service. Nos lunettes de cyclisme enveloppent le visage pour bloquer le vent, la poussière et les insectes sous tous les angles. Le système de verres interchangeables permet de passer des verres transparents pour les sorties à l\u2019aube, aux jaunes pour les jours nuageux, et aux teintes foncées pour le plein midi. Et les plaquettes en caoutchouc antidérapant ? Elles agrippent réellement plus fort quand vous transpirez. Plus besoin de remonter vos lunettes en pleine montée.',
    features: ['Design enveloppant aérodynamique', 'Système 3 verres interchangeables', 'Grip caoutchouc activé par la sueur', 'Monture ventilée antibuée'],
  },
  {
    name: 'Lunettes de Course',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$9.50 - $14.00',
    moq: '100 pcs',
    description: 'Voici la chose importante avec les lunettes de running — si vous les sentez sur le visage, ce sont les mauvaises. Nos montures de course pèsent moins de 25 grammes. C\u2019est plus léger qu\u2019une pile AA. Les marathoniens les portent pendant plus de 4 heures sans même les remarquer. La monture flexible TR90 absorbe le rebond constant de la course, et les verres larges vous donnent une vision périphérique complète pour repérer ce nid-de-poule ou ce chien en liberté avant qu\u2019il ne soit trop tard. Nous avons eu des propriétaires de clubs de course qui ont commandé plus de 500 paires d\u2019un coup pour des équipements d\u2019équipe.',
    features: ['Moins de 25g — plus léger qu\u2019une pile', 'Plaquettes hydrophiles grip-sueur', 'Vision périphérique complète', 'Monture flexible absorbant les rebonds'],
  },
  {
    name: 'Lunettes de Pêche',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$11.00 - $16.00',
    moq: '100 pcs',
    description: 'Imaginez — vous êtes sur le lac à 6h du matin, le soleil rebondit sur l\u2019eau et vous ne voyez pas votre ligne. Chaque pêcheur connaît cet éblouissement aveuglant. Nos lunettes de pêche le suppriment complètement. Les verres polarisés éliminent le reflet de surface pour que vous puissiez voir dans l\u2019eau — repérer les poissons, lire la structure, observer votre leurre. Les teintes ambre et cuivre améliorent le contraste tant en eau douce qu\u2019en eau salée. Un guide de pêche en Floride nous a dit que ces lunettes « se sont rentabilisées dès la première sortie ». Nous proposons aussi des options de monture flottante parce que, soyons honnêtes, les lunettes de soleil et les bateaux ne font pas toujours bon ménage.',
    features: ['Verres polarisés anti-éblouissement', 'Teintes ambre/cuivre pour le contraste', 'Option monture flottante disponible', 'Charnières résistantes à l\u2019eau salée'],
  },
  {
    name: 'Lunettes de Golf',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$10.50 - $15.50',
    moq: '100 pcs',
    description: 'Le golf est un jeu de centimètres, et on ne peut pas jouer aux centimètres si on ne voit pas la balle. Nos lunettes de golf utilisent des teintes de verre rose et ambre qui font ressortir une balle blanche sur un fairway vert. Suivre le vol de la balle contre un ciel lumineux ? Facile. Lire la pente sur un green ensoleillé ? Beaucoup plus clair. La monture est si légère que vous oublierez que vous les portez en plein swing — ce qui est exactement le but. Nous fournissons plusieurs boutiques pro de resorts de golf à travers l\u2019Asie du Sud-Est, et les retours sont toujours les mêmes : « Les joueurs veulent vraiment les acheter après les avoir essayées. »',
    features: ['Verres rose/ambre pour suivre la balle', 'Ajustement ultralégèr pour le swing', 'Protection solaire latérale des branches', 'Testées et approuvées en boutiques pro'],
  },
  {
    name: 'Lunettes Ski et Snowboard',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$12.00 - $17.00',
    moq: '100 pcs',
    description: 'Saviez-vous que les niveaux d\u2019UV augmentent de 10 % tous les 1 000 mètres d\u2019altitude ? Au sommet d\u2019une piste de ski, vos yeux se font marteler. La cécité des neiges est réelle — et douloureuse. Nos lunettes de ski utilisent des verres foncés de Catégorie 3-4 qui bloquent 92-97 % de la lumière visible. Le design enveloppant et ajusté maintient le vent et la neige hors de vos yeux, tandis que les canaux de ventilation antibuée empêchent l\u2019embuage agaçant quand vous respirez fort dans les bosses. Les embouts de branches compatibles casque signifient zéro point de pression sous le casque. Un magasin de location de ski à Hokkaido nous commande 2 000 paires chaque saison.',
    features: ['Protection cécité des neiges Cat 3-4', 'Canaux de ventilation antibuée', 'Ajustement serré bloque-vent', 'Design compatible casque'],
  },
  {
    name: 'Lunettes de Baseball',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pcs',
    description: 'Un voltigeur qui fixe le soleil sur un fly ball — cet instant d\u2019aveuglement peut coûter le match. Nos lunettes de baseball sont faites exactement pour ce moment. Les verres polarisés ambre font ressortir une balle blanche contre le ciel bleu comme rien d\u2019autre. Et ce ne sont pas des montures fragiles — elles respectent les normes d\u2019impact ASTM F803, ce qui signifie qu\u2019elles peuvent encaisser une ligne directe au visage. Le design enveloppant sécurisé reste en place lors des plongeons et des glissades tête la première. Nous avons fourni des équipes de Little League, des programmes universitaires et des ligues récréatives dans 12 pays.',
    features: ['Protection impact ASTM F803', 'Polarisé ambre suivi de balle', 'Enveloppant sécurisé antidérapant', 'Verre polycarbonate incassable'],
  },
]

export default function SportPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d&apos;Ariane */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes Sport</span>
        </nav>

        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Sport en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conçues pour les athlètes qui ont réellement besoin que leurs lunettes performent — pas seulement qu&apos;elles aient l&apos;air bien.
            Verres polarisés TAC, montures ultralégères TR90 et designs enveloppants qui restent en place
            quand vous poussez vos limites. Des clubs de cyclisme aux charters de pêche, nous fournissons les
            lunettes qui travaillent aussi dur que ceux qui les portent.
          </p>
        </div>

        {/* Image Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
            alt="Collection Lunettes Sport - Lunettes Athlétiques Polarisées Cyclisme Course Pêche"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Pourquoi les lunettes sport comptent */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Pourquoi les lunettes bon marché ne suffisent pas pour le sport</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Soyons francs : ces lunettes à 3 $ de la caisse du magasin tomberont de votre visage
              dès que vous commencerez à transpirer. Elles s&apos;embueront quand vous respirerez fort. Elles rebondiront
              à chaque foulée. Et le pire — certaines ne bloquent même pas les UV correctement,
              ce qui signifie qu&apos;elles sont en fait <em>plus dangereuses</em> que de ne rien porter du tout. (Les verres
              foncés sans protection UV dilatent vos pupilles, laissant entrer plus de rayonnement nocif.
              Pas bon.)
            </p>
            <p>
              Les vraies lunettes de sport résolvent des problèmes que les athlètes rencontrent réellement. L&apos;éblouissement des routes mouillées
              pendant une sortie matinale ? Les verres polarisés TAC l&apos;éliminent. Les montures qui se brisent aux chocs ?
              Le nylon TR90 fléchit au lieu de casser — vous pouvez littéralement les tordre à 90 degrés et elles
              reprennent leur forme. Les lunettes qui glissent sur un nez en sueur ? Les plaquettes en caoutchouc hydrophile agrippent
              <em> plus fort</em> quand elles sont mouillées. Ce ne sont pas des gadgets. C&apos;est la différence entre
              un équipement qui vous aide à performer et un équipement qui vous gêne. L&apos;<a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Organisation mondiale de la Santé</a> recommande
              des lunettes de protection UV pour toute personne passant du temps prolongé en extérieur — et les athlètes sont en tête de cette liste.
            </p>
            <p>
              Nous fabriquons des lunettes de sport depuis plus de 8 ans, expédiant à des détaillants outdoor,
              des équipes sportives, des chaînes de salles de sport et des entreprises promotionnelles dans plus de 50 pays.
              Que vous ayez besoin de 100 paires pour une équipe cycliste ou de 10 000 pour un lancement en magasin, nous
              vous couvrons — et nous mettrons votre logo dessus aussi.
            </p>
          </div>
        </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Lunettes Sport en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Produits par activité */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Lunettes Sport par Activité</h2>
          <div className="space-y-12">
            {sportCategories.map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} en Gros - EyeView`}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-semibold text-primary-600">{product.price}</span>
                    <span className="text-sm text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/fr/contact" className="btn-primary inline-block">Devis</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Matériaux et Technologie */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">La technologie derrière la résistance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🔬 Montures TR90 — Pliez-les, elles ne casseront pas</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le TR90 est un nylon thermoplastique développé à l&apos;origine en Suisse. C&apos;est la même
                famille de matériaux utilisée dans les équipements sportifs haut de gamme. Ce qui le rend spécial ? Il est
                35 % plus léger que les montures en plastique ordinaire — la plupart de nos montures sport pèsent entre
                22 et 28 grammes. Vous pouvez plier une monture TR90 à 90 degrés et elle reprend sa forme. Essayez
                ça avec une paire bon marché du marché. C&apos;est aussi hypoallergénique, donc pas de marques rouges qui grattent
                après une longue sortie. Fonctionne parfaitement dans les conditions de ski glaciales (-40 °C) et ne se
                déformera pas dans une voiture chaude (jusqu&apos;à 120 °C).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>35 % plus léger que le plastique standard</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Survit à une flexion de 90° — pas de casse</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Supporte de -40 °C à 120 °C</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hypoallergénique et sans BPA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🛡️ Verres Polarisés TAC — 7 couches de &quot;ouah&quot;</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos verres TAC ne sont pas juste un morceau de plastique teinté. C&apos;est un sandwich à 7 couches :
                revêtement dur à l&apos;extérieur pour la résistance aux rayures, couches structurelles TAC pour la solidité,
                un film polarisant au centre qui élimine 99 % de l&apos;éblouissement, et un revêtement UV
                en dessous qui bloque tout jusqu&apos;à 400nm. Le résultat ? Vous les mettez et le
                monde se... clarifie. L&apos;éblouissement de la route disparaît. Le reflet de l&apos;eau s&apos;évanouit. Les couleurs
                sont plus riches. C&apos;est le genre de différence qui fait dire aux gens &quot;je ne peux plus revenir aux
                verres normaux&quot;.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Construction polarisée 7 couches</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99 % d&apos;éblouissement horizontal éliminé</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protection UV400 complète</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Option polycarbonate résistant aux chocs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Caractéristiques clés */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ce qui les distingue</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🏃" title="Incroyablement légères" description="Moins de 28g. Vous oublierez qu&apos;elles sont sur votre visage — jusqu&apos;à ce qu&apos;on vous demande où vous les avez trouvées." />
            <FeatureCard icon="🛡️" title="Résistantes aux chocs" description="Verres en polycarbonate conformes ANSI Z87.1. Un éclat de caillou ne gâchera pas votre sortie." />
            <FeatureCard icon="💧" title="Jamais de buée" description="Des canaux de ventilation maintiennent la circulation d&apos;air. Sprintez en montée — les verres restent clairs." />
            <FeatureCard icon="☀️" title="Vrai UV400" description="Testé en laboratoire, certifié. Bloque 100 % des UVA/UVB/UVC. Pas juste un autocollant." />
          </div>
        </section>

        {/* Tableau des spécifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Spécifications en un coup d&apos;œil</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Caractéristique</th>
                  <th className="p-4 text-left font-semibold">Gamme Standard</th>
                  <th className="p-4 text-left font-semibold">Gamme Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Matériau monture</td><td className="p-4 text-gray-600">PC (Polycarbonate)</td><td className="p-4 text-gray-600">Nylon TR90</td></tr>
                <tr><td className="p-4 font-medium">Matériau verre</td><td className="p-4 text-gray-600">AC (Acrylique)</td><td className="p-4 text-gray-600">TAC Polarisé</td></tr>
                <tr><td className="p-4 font-medium">Largeur verre</td><td className="p-4 text-gray-600">65-68mm</td><td className="p-4 text-gray-600">65-72mm</td></tr>
                <tr><td className="p-4 font-medium">Largeur pont</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">14-18mm</td></tr>
                <tr><td className="p-4 font-medium">Longueur branche</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">130-140mm</td></tr>
                <tr><td className="p-4 font-medium">Poids</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">22-28g</td></tr>
                <tr><td className="p-4 font-medium">Protection UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Polarisation</td><td className="p-4 text-gray-600">En option</td><td className="p-4 text-gray-600">Standard (TAC 1,1mm)</td></tr>
                <tr><td className="p-4 font-medium">Couleurs de verre</td><td className="p-4 text-gray-600">5 options</td><td className="p-4 text-gray-600">12+ options</td></tr>
                <tr><td className="p-4 font-medium">Plaquettes nasales</td><td className="p-4 text-gray-600">Caoutchouc fixe</td><td className="p-4 text-gray-600">Caoutchouc hydrophile ajustable</td></tr>
                <tr><td className="p-4 font-medium">Charnière</td><td className="p-4 text-gray-600">Barillet standard</td><td className="p-4 text-gray-600">Charnière à ressort</td></tr>
                <tr><td className="p-4 font-medium">Certifications</td><td className="p-4 text-gray-600">CE, FDA</td><td className="p-4 text-gray-600">CE, FDA, ANSI Z87.1</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Vous pourriez aussi aimer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/polarise" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Lunettes Polarisées</h3>
              <p className="text-sm text-gray-600">Tous nos styles polarisés en un seul endroit</p>
            </Link>
            <Link href="/fr/produits/enfants" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Lunettes Sport Enfants</h3>
              <p className="text-sm text-gray-600">Lunettes sûres et résistantes pour les jeunes athlètes</p>
            </Link>
            <Link href="/fr/produits/lumiere-bleue" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Lunettes Lumière Bleue</h3>
              <p className="text-sm text-gray-600">Pour quand l&apos;entraînement se fait en intérieur</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions qu&apos;on nous pose tout le temps</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Quelle est la commande minimum ? Puis-je commencer petit ?"
              answer="Oui — 100 pièces par style et couleur est notre MOQ standard. Si vous voulez votre propre logo et des couleurs personnalisées, ça monte à 300 pièces. Mais honnêtement, la plupart des premiers acheteurs commencent avec une commande d&apos;échantillons mixte pour tester le marché. Dites-nous simplement ce que vous cherchez et nous trouverons un moyen de le faire fonctionner."
            />
            <FaqItem
              question="TR90 ou polycarbonate — lequel choisir ?"
              answer="Réponse courte : TR90 si vous pouvez vous le permettre. Il est 35 % plus léger, beaucoup plus flexible (vous pouvez littéralement le plier à plat et il reprend sa forme), et il fait premium. Le polycarbonate est tout à fait correct pour les gammes budget — il est quand même résistant aux chocs et fait le travail. Mais si vos clients sont des athlètes sérieux ou si vous vous positionnez comme une marque premium, optez pour le TR90. La différence de prix n&apos;est généralement que de 1-2 $ par paire."
            />
            <FaqItem
              question="Toutes vos lunettes sport sont-elles polarisées ?"
              answer="La polarisation est disponible sur chaque modèle, mais elle n&apos;est pas toujours incluse par défaut sur la gamme standard — c&apos;est en option. Sur notre gamme premium, les verres polarisés TAC sont inclus de série. Nous proposons 12+ couleurs de verres dont gris, brun, ambre, jaune (idéal pour la faible luminosité), miroir bleu, miroir rouge et transparent. Nous faisons aussi des verres photochromiques qui s&apos;ajustent automatiquement au soleil. Ceux-ci sont populaires auprès des cyclistes qui roulent de l&apos;aube à midi."
            />
            <FaqItem
              question="Pouvez-vous mettre notre logo dessus ?"
              answer="Absolument. Nous faisons l&apos;impression de logo sur les branches (tampographie ou gravure laser), la gravure sur verre, les couleurs de monture personnalisées avec correspondance Pantone, l&apos;emballage personnalisé — tout. Un client nous a envoyé un croquis sur une serviette d&apos;un design de monture et nous l&apos;avons transformé en prototype 3D en deux semaines. Si vous pouvez l&apos;imaginer, nous pouvons probablement le fabriquer."
            />
            <FaqItem
              question="Quelles certifications accompagnent ces lunettes ?"
              answer="Chaque paire est livrée avec la conformité CE et FDA. Notre gamme premium respecte aussi la norme ANSI Z87.1 — c&apos;est la norme de résistance aux chocs industriels, ce qui signifie que ces verres peuvent encaisser un impact de bille d&apos;acier à haute vélocité sans se briser. Nous fournissons des rapports de test UV400 de laboratoires indépendants. Besoin de l&apos;AS/NZS 1067 pour le marché australien ? Nous pouvons le faire aussi."
            />
            <FaqItem
              question="À quelle vitesse pouvez-vous expédier ?"
              answer="Articles en stock sans personnalisation ? 3-5 jours ouvrables. Commandes personnalisées avec votre logo et vos couleurs ? 15-25 jours de production, puis 5-7 jours de fret aérien vers la plupart des pays. Le fret maritime est moins cher mais prend 20-35 jours. Nous expédions via DHL, FedEx, UPS — à vous de choisir. Commandes urgentes ? Parlez-nous. Nous avons déjà réussi des délais de 10 jours quand un client avait une échéance."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Lançons votre gamme sport</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Équipes sportives, magasins outdoor, marques fitness, entreprises promotionnelles — nous avons travaillé avec tous.
            Dites-nous ce dont vous avez besoin, et nous vous enverrons des échantillons pour que vous puissiez voir la qualité par vous-même.
            Aucune pression, aucun engagement sur les échantillons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Obtenir les Prix Équipe</Link>
            <Link href="/fr/produits" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Voir Tous les Produits</Link>
          </div>
        </section>
      </div>

      {/* Schémas JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://eyeviewsunglasses.com/fr" },
          { "@type": "ListItem", "position": 2, "name": "Produits", "item": "https://eyeviewsunglasses.com/fr/produits" },
          { "@type": "ListItem", "position": 3, "name": "Lunettes Sport", "item": "https://eyeviewsunglasses.com/fr/produits/sport" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quelle est la commande minimum ? Puis-je commencer petit ?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pièces par style et couleur est notre MOQ standard. Les commandes avec logo personnalisé commencent à 300 pièces. La plupart des premiers acheteurs commencent avec une commande d\u2019échantillons mixte pour tester le marché." }
          },
          {
            "@type": "Question",
            "name": "TR90 ou polycarbonate — lequel choisir ?",
            "acceptedAnswer": { "@type": "Answer", "text": "TR90 si vous pouvez vous le permettre — il est 35 % plus léger, beaucoup plus flexible et fait premium. Le polycarbonate est correct pour les gammes budget. La différence de prix n\u2019est généralement que de 1-2 $ par paire." }
          },
          {
            "@type": "Question",
            "name": "Toutes vos lunettes sport sont-elles polarisées ?",
            "acceptedAnswer": { "@type": "Answer", "text": "La polarisation est disponible sur chaque modèle. Elle est en option sur la gamme standard et incluse par défaut sur la gamme premium. Nous proposons 12+ couleurs de verres dont des options photochromiques." }
          },
          {
            "@type": "Question",
            "name": "Pouvez-vous mettre notre logo dessus ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolument — impression de logo sur les branches, gravure sur verre, couleurs de monture personnalisées avec correspondance Pantone, et emballage personnalisé. Nous pouvons aussi créer des designs de monture entièrement nouveaux à partir de votre concept." }
          },
          {
            "@type": "Question",
            "name": "Quelles certifications accompagnent ces lunettes ?",
            "acceptedAnswer": { "@type": "Answer", "text": "CE et FDA sur chaque paire. La gamme premium respecte aussi l\u2019ANSI Z87.1 pour la résistance aux chocs. Rapports de test UV400 inclus. AS/NZS 1067 disponible sur demande." }
          },
          {
            "@type": "Question",
            "name": "À quelle vitesse pouvez-vous expédier ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Articles en stock expédiés en 3-5 jours ouvrables. Commandes personnalisées en 15-25 jours de production plus 5-7 jours de fret aérien. Commandes urgentes possibles — nous avons fait des délais de 10 jours." }
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
