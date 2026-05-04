import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Rondes en Gros | Fabricant de Montures Circulaires Vintage - EyeView',
  description: 'Fabricant de lunettes de soleil rondes en gros. Montures circulaires vintage en métal et acétate. Style rétro John Lennon, options petites et oversize. MOQ 100 pcs. OEM/ODM direct usine.',
  keywords: 'lunettes rondes en gros, fabricant lunettes circulaires, montures rondes vintage, lunettes rétro en gros, lunettes John Lennon, montures rondes métal, lunettes rondes acétate en gros',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/rond',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/round',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/rond',
    },
  },
}

const products = [
  {
    name: 'Ronde Or Classique',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'L\u2019originale. Fil doré fin, verres parfaitement circulaires, plaquettes nasales ajustables en silicone. C\u2019est la monture que John Lennon a rendue iconique et que chaque amoureux du vintage cherche encore. Nous en vendons plus que tout autre style rond — et nous les fabriquons depuis 8 ans sans un seul changement de design. Parce qu\u2019on ne répare pas ce qui n\u2019est pas cassé.',
  },
  {
    name: 'Ronde Monture Argent',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Même forme ronde classique, ton plus frais. La finition argent brossé séduit le public minimaliste — fans du design scandinave, travailleurs tech, les adeptes du « moins c\u2019est plus ». Se marie parfaitement avec les garde-robes neutres. L\u2019un de nos distributeurs scandinaves ne stocke que des rondes argentées et écoule plus de 3 000 paires par trimestre.',
  },
  {
    name: 'Ronde Noire Vintage',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.50 - $12.50',
    moq: '100 pcs',
    description: 'Acétate noir épais avec un profil audacieux. Ce n\u2019est pas une monture en fil délicat — c\u2019est une déclaration. Pensez architecte, pensez professeur d\u2019art, pensez directeur de création. La construction substantielle lui donne un poids premium en main qui respire la qualité. Populaire auprès des boutiques de lunettes indépendantes qui veulent quelque chose de plus corsé que le métal.',
  },
  {
    name: 'Ronde Acétate Écaille',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Motif écaille chaud en acétate laminé. Les bruns et ambres multitonaux créent une profondeur que les montures unicolores ne peuvent tout simplement pas égaler. C\u2019est le « smart casual » des lunettes rondes — fonctionne avec un t-shirt, fonctionne avec un blazer. Systématiquement l\u2019un de nos top 5 en réapprovisionnement sur toutes les gammes de produits.',
  },
  {
    name: 'Ronde Verres Colorés',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pcs',
    description: 'Verres roses. Verres bleus. Verres jaunes. Verres verts. C\u2019est la monture de festival — Coachella, Glastonbury, Tomorrowland. La fine monture métallique dorée avec des verres colorés vifs capture cette énergie bohème esprit libre. Nous fournissons plusieurs vendeurs de merchandising de festivals musicaux qui les vendent sur place pour 5 à 8 fois le prix de gros. Les marges sont incroyables.',
  },
  {
    name: 'Ronde Oversize',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    description: 'La grande sœur spectaculaire. Verres de 56-60mm qui couvrent la moitié du visage et font une déclaration à l\u2019autre bout de la pièce. Les rondes oversize ont explosé sur les réseaux sociaux — les influenceurs adorent les proportions. Plus de couverture solaire que les rondes standard aussi, donc elles sont en fait plus protectrices. Actuellement notre style rond à la croissance la plus rapide, en hausse de 40 % d\u2019une année sur l\u2019autre.',
  },
]

export default function RoundPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d&apos;Ariane */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes Rondes</span>
        </nav>

        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Rondes en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lennon les portait. Ozzy les portait. Harry Potter les portait. Et maintenant vos clients
            les veulent. Montures circulaires vintage en métal, acétate, et toutes les tailles de
            l&apos;intellectuel subtil à la déclaration oversize. Direct usine, MOQ 100 pièces.
          </p>
        </div>

        {/* Image Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Lunettes de Soleil Rondes en Gros - Montures Circulaires Vintage"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Histoire */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">La monture qui a façonné la culture</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              La monture ronde n&apos;a pas commencé comme un choix de mode. Au début des années 1900, c&apos;était
              simplement la forme la plus facile à fabriquer — les cercles étaient simples à meuler. Mais ensuite
              quelque chose s&apos;est passé. John Lennon a pris une paire de petites rondes en fil dans les années 1960
              et en a fait le symbole visuel de toute une génération. Paix, amour et
              verres parfaitement circulaires. Du jour au lendemain, la monture ronde est passée de &quot;fonctionnelle&quot; à
              &quot;révolutionnaire&quot;.
            </p>
            <p>
              La liste des personnes qui ont rendu les rondes célèbres ressemble à un panthéon culturel.
              Janis Joplin à Woodstock. Ozzy Osbourne sur scène. Gandhi menant une nation.
              Steve Jobs lançant l&apos;iPhone. Chacun a choisi des montures rondes — et chacun
              leur a fait signifier quelque chose de différent. Rébellion. Créativité. Sagesse. Simplicité.
              C&apos;est le pouvoir de cette forme : elle s&apos;adapte à celui qui la porte.
            </p>
            <p>
              Avançons jusqu&apos;à aujourd&apos;hui. La Gen Z a découvert la mode vintage et s&apos;y est plongée. Les lunettes de soleil
              rondes sont de nouveau dans le top 5 des meilleures ventes mondiales, portées par la culture du vintage, la
              mode de festival et le côté esthétique de TikTok. La demande est réelle et croissante — nos
              commandes de montures rondes ont augmenté de 35 % d&apos;une année sur l&apos;autre depuis 2022. Et avec l&apos;<a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">alerte de l&apos;OMS sur l&apos;exposition UV cumulative</a>,
              les lunettes de soleil mode qui protègent réellement vos yeux sont plus pertinentes que jamais.
              Si vous ne stockez pas de rondes, vous laissez de l&apos;argent sur la table.
            </p>
          </div>
        </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Lunettes Rondes en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Grille Produits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Collection Rondes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} en Gros - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protection UV400</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personnalisé disponible</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/fr/contact" className="btn-primary w-full block text-center">Devis</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guide des Tailles */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Petite, moyenne ou oversize ? C&apos;est plus important qu&apos;on ne le pense</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            La taille du verre change complètement la personnalité d&apos;une monture ronde. Un rond de 44mm murmure
            &quot;intellectuel&quot;. Un rond de 60mm crie &quot;regardez-moi&quot;. Voici comment choisir :
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔍 Petite (42-48mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La taille authentique « Lennon ». Petite et délibérée. Ce sont pour les gens qui
                tiennent à obtenir les proportions vintage exactement justes. Elles ne couvrent
                pas beaucoup de visage — c&apos;est le but. C&apos;est l&apos;esthétique qui compte, pas la couverture.
                Très populaire auprès des puristes du vintage, des acheteurs de lunettes de vue et de la
                « génération Harry Potter ». Meilleurs vendeurs dans les magasins d&apos;optique.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Idéal pour : visages petits à moyens</li>
                <li>• Ambiance : intellectuel, vintage authentique</li>
                <li>• Marché principal : opticiens, boutiques vintage</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">👓 Moyenne (49-53mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le pari sûr. Les rondes moyennes conviennent à la plus large gamme de visages et plaisent
                autant aux hommes qu&apos;aux femmes. Pas trop vintage, pas trop tendance — juste bien.
                Si vous êtes nouveau dans le stockage de montures rondes et ne connaissez pas encore votre marché,
                commencez ici. Celles-ci ont le taux de vente le plus élevé et le taux de retour le plus bas
                de toutes les tailles de rondes que nous produisons.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Idéal pour : la plupart des visages adultes</li>
                <li>• Ambiance : équilibrée, attrait universel</li>
                <li>• Marché principal : retail général, en ligne</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔮 Oversize (54-62mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La pièce de caractère. Les rondes oversize sont partout sur Instagram et TikTok.
                Grandes proportions, drame maximal, beaucoup de couverture solaire. Ce sont les
                montures qui suscitent les réactions « OMG où les avez-vous trouvées ». Actuellement
                notre segment à la croissance la plus rapide — en hausse de 40 % d&apos;une année sur l&apos;autre. Si vos clients
                ont moins de 35 ans, c&apos;est probablement ce qu&apos;ils veulent.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Idéal pour : visages moyens à grands</li>
                <li>• Ambiance : audacieuse, prête pour les réseaux sociaux</li>
                <li>• Marché principal : marques mode, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Caractéristiques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi les rondes reviennent toujours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🎭" title="Poids culturel" description="Plus de 60 ans de porteurs iconiques. Aucune autre forme ne porte autant d&apos;histoire et de sens." />
            <FeatureCard icon="👓" title="Géométrie flatteuse" description="Les cercles adoucissent magnifiquement les visages anguleux. Mâchoire carrée ? Visage en losange ? Les rondes vous équilibrent." />
            <FeatureCard icon="✨" title="Attrait unisexe" description="L&apos;une des rares formes qui se vend aussi bien aux hommes qu&apos;aux femmes. Doublez votre marché instantanément." />
          </div>
        </section>

        {/* Spécifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Spécifications techniques</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Caractéristique</th>
                  <th className="p-4 text-left font-semibold">Métal</th>
                  <th className="p-4 text-left font-semibold">Acétate</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Matériau</td><td className="p-4 text-gray-600">Acier inoxydable / Titane</td><td className="p-4 text-gray-600">Acétate style italien</td></tr>
                <tr><td className="p-4 font-medium">Largeur verre</td><td className="p-4 text-gray-600">42-58mm</td><td className="p-4 text-gray-600">46-62mm</td></tr>
                <tr><td className="p-4 font-medium">Pont</td><td className="p-4 text-gray-600">18-22mm</td><td className="p-4 text-gray-600">18-24mm</td></tr>
                <tr><td className="p-4 font-medium">Longueur branche</td><td className="p-4 text-gray-600">135-145mm</td><td className="p-4 text-gray-600">140-148mm</td></tr>
                <tr><td className="p-4 font-medium">Poids</td><td className="p-4 text-gray-600">15-22g</td><td className="p-4 text-gray-600">25-35g</td></tr>
                <tr><td className="p-4 font-medium">Options de verre</td><td className="p-4 text-gray-600">CR-39 / Verre minéral / TAC</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Plaquettes nasales</td><td className="p-4 text-gray-600">Silicone ajustable</td><td className="p-4 text-gray-600">Trou de serrure intégré</td></tr>
                <tr><td className="p-4 font-medium">Couleurs</td><td className="p-4 text-gray-600">12+ y compris teintes de couleur</td><td className="p-4 text-gray-600">10+ options</td></tr>
                <tr><td className="p-4 font-medium">Polarisé</td><td className="p-4 text-gray-600">TAC en option</td><td className="p-4 text-gray-600">TAC en option</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Styles associés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/oeil-de-chat" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Lunettes Œil de Chat</h3>
              <p className="text-sm text-gray-600">Une autre icône vintage — se marie bien dans les collections</p>
            </Link>
            <Link href="/fr/produits/polarise" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Rondes Polarisées</h3>
              <p className="text-sm text-gray-600">Ajoutez du TAC anti-éblouissement à n&apos;importe quel style rond</p>
            </Link>
            <Link href="/fr/produits/lumiere-bleue" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Rondes Lumière Bleue</h3>
              <p className="text-sm text-gray-600">Montures vintage avec protection d&apos;écran</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Les lunettes rondes conviennent-elles aux visages ronds ?"
              answer="Honnêtement ? Ça dépend. La sagesse conventionnelle dit « non — des cercles sur des cercles rendent tout plus rond ». Et c&apos;est vrai pour certaines personnes. Mais beaucoup de personnes avec des visages ronds les portent quand même parce qu&apos;elles aiment le look. Notre recommandation : si vous stockez pour la vente générale, privilégiez les rondes moyennes et oversize (qui fonctionnent sur plus de formes de visage). Si un client au visage rond demande, suggérez une forme angulaire comme notre œil de chat ou wayfarer à la place. Mais ne le refusez pas — les règles de mode sont faites pour être enfreintes."
            />
            <FaqItem
              question="Métal ou acétate — quelle est vraiment la différence ?"
              answer="Les rondes en métal sont plus légères (15-22g vs 25-35g), plus fines et d&apos;aspect plus délicat. Elles ont des plaquettes nasales ajustables pour s&apos;adapter à plus de formes de visage. Les rondes en acétate sont plus audacieuses, plus lourdes d&apos;une manière « premium », et disponibles dans beaucoup plus de couleurs et motifs — écaille, marbre, tons translucides. Les deux respectent les normes de protection UV de la FDA. Le métal dit « intellectuel minimaliste ». L&apos;acétate dit « créatif à la mode ». Les deux se vendent bien, mais à des clients différents."
            />
            <FaqItem
              question="Peut-on avoir des montures rondes avec des verres correcteurs ?"
              answer="Absolument. La ronde est en fait la forme la plus facile à équiper de verres correcteurs car le cercle symétrique distribue la correction optique uniformément. Nous expédions toutes nos montures rondes Rx-ready avec des verres de démonstration. Compatible vision simple, bifocale et progressive. Les montures rondes avec prescription sont un marché énorme — pensez à tous ces fans de Harry Potter qui ont réellement besoin de lunettes !"
            />
            <FaqItem
              question="Quelles couleurs de verres se vendent le mieux dans les montures rondes ?"
              answer="Les meilleures ventes dans l&apos;ordre : (1) Vert classique G-15 — le look vintage authentique, (2) Gris — neutre, va avec tout, (3) Brun/ambre — ton plus chaud, excellent contraste, (4) Miroir bleu — les jeunes adorent, (5) Teintés jaune/rose/orange — acheteurs de festivals et bohèmes. Les verres dégradés (foncés en haut, plus clairs en bas) sont aussi très tendance en ce moment, surtout dans les rondes oversize."
            />
            <FaqItem
              question="Quel est le MOQ et le délai ?"
              answer="100 pièces par style et couleur pour les designs en stock. 300 pièces pour du OEM personnalisé (votre logo, couleurs Pantone, emballage personnalisé). La production prend 15-25 jours pour les commandes personnalisées, 3-5 jours pour les articles en stock. Nous faisons aussi du ODM complet — envoyez-nous un croquis ou une photo de référence et nous créerons un nouveau design à partir de zéro. Un client nous a envoyé par email une photo vintage de lunettes de soleil des années 60 et nous avons recréé la monture en 3 semaines."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Le vintage ne vieillit jamais</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Marques de mode, opticiens, boutiques vintage, vendeurs de merchandising de festivals — les montures
            rondes se vendent partout. Obtenez des échantillons, voyez la qualité, puis parlons chiffres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Demander un Devis Gratuit</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes Rondes", "item": "https://eyeviewsunglasses.com/fr/produits/rond" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Les lunettes rondes conviennent-elles aux visages ronds ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Cela dépend de la personne. Conventionnellement, les formes angulaires sont recommandées pour les visages ronds, mais beaucoup les portent par choix. Les rondes moyennes et oversize fonctionnent sur plus de formes de visage que les petites rondes." }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre les montures rondes en métal et en acétate ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Les rondes en métal sont plus légères (15-22g), plus fines et plus minimalistes avec des plaquettes nasales ajustables. Les rondes en acétate sont plus audacieuses (25-35g), disponibles dans plus de couleurs et motifs, avec une sensation premium et substantielle." }
          },
          {
            "@type": "Question",
            "name": "Les montures rondes peuvent-elles être faites avec des verres de prescription ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — la ronde est la forme la plus facile pour les prescriptions grâce à sa géométrie symétrique. Toutes nos montures rondes sont expédiées Rx-ready avec des verres de démonstration pour vision simple, bifocale et progressive." }
          },
          {
            "@type": "Question",
            "name": "Quelles couleurs de verres se vendent le mieux dans les montures rondes ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Meilleures ventes : vert classique G-15, gris, brun/ambre, miroir bleu, et teintes colorées (jaune, rose, orange) pour les acheteurs de festivals. Les verres dégradés sont aussi très populaires dans les rondes oversize." }
          },
          {
            "@type": "Question",
            "name": "Quel est le MOQ et le délai ?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pièces par style pour les designs en stock. 300 pièces pour les commandes OEM personnalisées. Production : 15-25 jours en personnalisé, 3-5 jours en stock. Service de design ODM complet aussi disponible." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
