import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Œil de Chat en Gros | Fabricant Lunettes Cat Eye - EyeView',
  description: 'Fabricant de lunettes de soleil œil de chat en gros. Lunettes cat eye femme en acétate, métal et matériaux mixtes. Couleurs tendance, OEM/ODM. MOQ 100 pcs. Direct usine.',
  keywords: 'lunettes œil de chat en gros, fabricant lunettes cat eye, lunettes femme en gros, montures œil de chat, lunettes cat eye acétate, lunettes rétro vintage',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/oeil-de-chat',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/cat-eye',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/oeil-de-chat',
    },
  },
}

const products = [
  {
    name: 'Œil de Chat Noir Classique',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Celui dont chaque collection a besoin. Acétate noir, charnières polies, cet angle relevé parfait. C\u2019est l\u2019équivalent en lunettes de soleil de la petite robe noire — fonctionne avec tout, se vend à toutes. C\u2019est systématiquement notre n°1 en réapprovisionnement sur tous les marchés.',
  },
  {
    name: 'Œil de Chat Imprimé Léopard',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'L\u2019imprimé animal bien fait. Le motif écaille n\u2019est pas peint — il est créé en superposant des plaques d\u2019acétate de couleurs différentes, de sorte que chaque paire a une véritable profondeur et richesse. Une propriétaire de boutique à Melbourne nous a dit que celles-ci surpassent les couleurs unies 2 contre 1 au printemps.',
  },
  {
    name: 'Œil de Chat Métal Or Rose',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    description: 'Monture métallique fine avec électrodéposition or rose qui a l\u2019air de devoir coûter 200 $. Ce n\u2019est pas le cas. La construction en fil fin donne une version moderne et raffinée de l\u2019œil de chat — parfaite pour la femme professionnelle qui veut du style sans en faire trop. Se marie magnifiquement aussi bien avec les blazers qu\u2019avec les tenues de plage.',
  },
  {
    name: 'Œil de Chat Oversize',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pcs',
    description: 'Voir grand ou rentrer chez soi. L\u2019œil de chat oversize est essentiellement un aimant à Instagram — proportions audacieuses, pointes relevées spectaculaires, couverture maximale du visage. Un détaillant en ligne nous a dit que ce style génère plus de commentaires « où les avez-vous trouvées ? » que tout autre article de sa boutique. Excellente couverture UV aussi, ce qui est un bonus appréciable.',
  },
  {
    name: 'Œil de Chat Strass',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$11.00 - $15.00',
    moq: '100 pcs',
    description: 'Pour la femme qui traite les lunettes de soleil comme des bijoux. Des cristaux sertis à la main le long de la ligne du sourcil et des embouts de branches captent la lumière d\u2019une façon qui arrête les gens en pleine conversation. Nous proposons des pierres transparentes, colorées et de qualité Swarovski. Celles-ci se vendent comme des petits pains dans les boutiques de resort, les magasins de mariage et les détaillants thématiques festifs.',
  },
  {
    name: 'Œil de Chat Vintage',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Tout droit sorti de 1958. Étroites, avec des angles prononcés, avec des branches épaisses en acétate qui disent « je connais mon histoire de la mode ». Elles sont plus petites que la tendance oversize — intentionnellement. Les collectionneurs et passionnés de vintage se les arrachent. Si votre marché penche rétro, rockabilly ou pin-up, c\u2019est votre monture.',
  },
]

export default function CatEyePageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d&apos;Ariane */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes Œil de Chat</span>
        </nav>

        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Œil de Chat en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L&apos;œil de chat ne se démode jamais. Sérieusement — Audrey Hepburn les portait dans les
            années 60 et elles restent la forme n°1 de lunettes de soleil pour femmes aujourd&apos;hui. Nous fabriquons
            des montures œil de chat en acétate, métal et matériaux mixtes avec personnalisation OEM complète.
            Votre logo, vos couleurs, votre marque — notre usine.
          </p>
        </div>

        {/* Image Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop"
            alt="Lunettes de Soleil Œil de Chat en Gros - Collection Lunettes Mode Femme"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Pourquoi l&apos;œil de chat */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Pourquoi l&apos;œil de chat surpasse tout le reste en ventes</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Voici un fait qui surprend : la forme œil de chat est la silhouette de lunettes de soleil
              femme la plus vendue depuis plus de 70 ans. Pas l&apos;aviateur. Pas la wayfarer.
              L&apos;œil de chat. Pourquoi ? Parce qu&apos;elle fait quelque chose qu&apos;aucune autre forme ne peut faire — elle relève. Cet
              angle relevé crée l&apos;illusion de pommettes plus hautes et d&apos;une mâchoire plus définie.
              C&apos;est essentiellement un mini lifting que vous pouvez acheter pour 15 $.
            </p>
            <p>
              La forme a été inventée en 1939 par une designer new-yorkaise nommée Altina Schinasi qui en avait
              assez des lunettes &quot;laides&quot;. Elle les a appelées montures &quot;Harlequin&quot;. Marilyn Monroe
              les a rendues célèbres. Audrey Hepburn les a rendues iconiques. Et maintenant, en 2024, elles sont plus grandes
              que jamais — littéralement. L&apos;œil de chat oversize domine Instagram, TikTok et
              chaque fashion week de Milan à Séoul.
            </p>
            <p>
              Pour les acheteurs en gros, les lunettes œil de chat sont ce qui se rapproche le plus d&apos;une valeur sûre dans
              la lunetterie. Elles plaisent à toutes les tranches d&apos;âge (20-60+), fonctionnent toute l&apos;année et dégagent
              une forte valeur perçue. Toutes nos montures œil de chat sont conformes aux <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">normes de protection UV de la FDA</a> —
              parce qu&apos;avoir du style ne devrait pas signifier compromettre la sécurité oculaire. Notre usine
              produit plus de 200 000 montures œil de chat par mois dans plus de 40 pays. Nous connaissons cette
              forme sur le bout des doigts.
            </p>
          </div>
        </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop" alt="Lunettes Œil de Chat en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Grille Produits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Collection</h2>
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

        {/* Guide Matériaux */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Acétate, métal ou mixte — lequel choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏛️ Acétate</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Si vous voulez facturer des prix retail premium, optez pour l&apos;acétate. Il est fabriqué à partir de <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">coton
                et pâte de bois</a> (oui, vraiment), et les couleurs et motifs réalisables sont
                incroyables — écaille profonde, tourbillons de marbre, tons bonbon translucides. Chaque paire
                est polie à la main pour cette finition brillante. L&apos;acétate <em>a l&apos;air</em> cher. Vos
                clients le remarqueront. Hypoallergénique aussi, donc pas de plaintes pour réactions cutanées.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Couleurs riches — écaille, marbre, dégradé</li>
                <li>• Finition premium polie à la main</li>
                <li>• Hypoallergénique, éco-responsable</li>
                <li>• Idéal pour : boutiques, positionnement luxe</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">⚙️ Métal</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Fin, élégant, moderne. Les œil de chat en métal utilisent de l&apos;acier inoxydable ou un alliage sans nickel avec
                des finitions électroplaquées — or, argent, or rose, noir mat. Le profil fin
                crée un look raffiné que l&apos;acétate ne peut pas égaler. Ce sont les montures pour les femmes
                qui veulent que leurs lunettes murmurent, pas crient. Idéal pour les gammes professionnelles et de bureau.
                Plus légères que l&apos;acétate aussi — la plupart pèsent moins de 22 grammes.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Fines, élégantes, légères (moins de 22g)</li>
                <li>• Finitions or, argent, or rose</li>
                <li>• Options sans nickel disponibles</li>
                <li>• Idéal pour : bureau, marques minimalistes</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔗 Matériaux Mixtes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le meilleur des deux mondes. Face avant en acétate avec branches métalliques fines — ou l&apos;inverse.
                Le contraste bimatière est très tendance en ce moment. Imaginez : face avant en acétate rose
                transparent avec des bras dorés fins. Ou de l&apos;acétate noir avec des branches en fil argenté.
                Ce sont les montures qui font dire aux gens &quot;où les avez-vous trouvées ?&quot;
                Actuellement notre catégorie à la croissance la plus rapide.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Esthétique bicolore tendance</li>
                <li>• Possibilités de design créatives</li>
                <li>• Catégorie à la croissance la plus rapide en 2024</li>
                <li>• Idéal pour : marques axées tendance, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tendances Couleurs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Quelles couleurs se vendent en ce moment</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🔥 Tendances de la saison</h3>
                <div className="space-y-4">
                  <ColorTrend color="bg-red-800" name="Bordeaux et lie-de-vin" description="Les tons profonds et chauds cartonnent en automne/hiver. Associez-les avec des verres dégradés bruns pour cette ambiance luxe cosy." />
                  <ColorTrend color="bg-pink-300" name="Rose tendre et blush" description="Toujours en pleine forme. L&apos;acétate rose transparent est la couleur à la croissance la plus rapide dans la lunetterie femme actuellement." />
                  <ColorTrend color="bg-green-700" name="Vert forêt" description="La surprise de l&apos;année. Une alternative sophistiquée à l&apos;écaille que personne n&apos;avait vu venir." />
                  <ColorTrend color="bg-amber-100 border border-gray-300" name="Transparent / Cristal" description="Montures transparentes en clair, champagne, gris clair. Tendance depuis 3 ans et ne montre aucun signe de ralentissement." />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">📊 Les incontournables (toujours réapprovisionnés)</h3>
                <div className="space-y-4">
                  <ColorTrend color="bg-black" name="Noir classique" description="30-35 % de toutes les commandes œil de chat. Toujours. Chaque. Saison. Stockez-le ou regrettez-le." />
                  <ColorTrend color="bg-amber-700" name="Écaille de tortue" description="Le n°2 en ventes. Les bruns multitonaux fonctionnent toute l&apos;année, avec tout le monde, partout." />
                  <ColorTrend color="bg-yellow-600" name="Métal or" description="Essentiel pour toute gamme luxe ou professionnelle. L&apos;œil de chat doré crie la sophistication." />
                  <ColorTrend color="bg-gray-400" name="Dégradé bicolore" description="Montures qui passent d&apos;une couleur à l&apos;autre — noir vers transparent, rose vers pêche. Très Instagram." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spécifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Spécifications</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Caractéristique</th>
                  <th className="p-4 text-left font-semibold">Acétate</th>
                  <th className="p-4 text-left font-semibold">Métal</th>
                  <th className="p-4 text-left font-semibold">Mixte</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Largeur verre</td><td className="p-4 text-gray-600">52-58mm</td><td className="p-4 text-gray-600">54-60mm</td><td className="p-4 text-gray-600">53-58mm</td></tr>
                <tr><td className="p-4 font-medium">Pont</td><td className="p-4 text-gray-600">16-20mm</td><td className="p-4 text-gray-600">14-18mm</td><td className="p-4 text-gray-600">15-19mm</td></tr>
                <tr><td className="p-4 font-medium">Longueur branche</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td></tr>
                <tr><td className="p-4 font-medium">Poids</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">18-24g</td><td className="p-4 text-gray-600">22-30g</td></tr>
                <tr><td className="p-4 font-medium">Verre</td><td className="p-4 text-gray-600">CR-39 / TAC</td><td className="p-4 text-gray-600">CR-39 / Nylon</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Charnière</td><td className="p-4 text-gray-600">5 barillets / Ressort</td><td className="p-4 text-gray-600">Ressort flexible</td><td className="p-4 text-gray-600">5 barillets / Ressort</td></tr>
                <tr><td className="p-4 font-medium">Plaquettes nasales</td><td className="p-4 text-gray-600">Trou de serrure intégré</td><td className="p-4 text-gray-600">Silicone ajustable</td><td className="p-4 text-gray-600">Silicone ajustable</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">D&apos;autres styles à découvrir</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/rond" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Lunettes Rondes</h3>
              <p className="text-sm text-gray-600">Cercles vintage pour les amoureux du rétro</p>
            </Link>
            <Link href="/fr/produits/polarise" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Options Polarisées</h3>
              <p className="text-sm text-gray-600">Ajoutez du TAC polarisé à n&apos;importe quel œil de chat</p>
            </Link>
            <Link href="/fr/produits/enfants" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👧</div>
              <h3 className="font-semibold mb-2">Œil de Chat Enfants</h3>
              <p className="text-sm text-gray-600">Mini œil de chat pour filles — des best-sellers adorables</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Vos questions, des réponses franches</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Quelles formes de visage conviennent à l&apos;œil de chat ?"
              answer="Presque toutes, honnêtement. L&apos;œil de chat est l&apos;une des formes les plus flatteuses qui existent. Visage ovale ? Parfait. Visage rond ? Les angles relevés ajoutent de la définition — superbe. En forme de cœur ? Combinaison idéale. Visage carré ? Choisissez un œil de chat plus doux et arrondi pour équilibrer les angles. La seule forme de visage qui peut être délicate est le visage très allongé/étroit, où un œil de chat oversize peut faire trop. Mais même là, un œil de chat petit fonctionne bien."
            />
            <FaqItem
              question="Quel est le MOQ pour des œil de chat avec marque personnalisée ?"
              answer="100 pièces par couleur pour nos designs existants. Vous voulez votre propre moule personnalisé, des couleurs Pantone sur mesure et un emballage avec votre marque ? C&apos;est 300 pièces par style. Conseil pro : vous pouvez mélanger différents styles d&apos;œil de chat dans une commande pour atteindre le minimum. Vous pourriez donc faire 100 noir classique + 100 léopard + 100 or rose = 300 au total. Nous sommes flexibles."
            />
            <FaqItem
              question="Peuvent-elles être faites prêtes pour la prescription ?"
              answer="Oui ! Toutes nos montures œil de chat en acétate et métal peuvent être expédiées avec des verres de démonstration pour que les opticiens puissent installer des verres correcteurs. Nous acceptons les prescriptions simple vision, bifocale et progressive. La profondeur de la monture et la courbure du verre sont conçues pour cela. C&apos;est un excellent upsell pour les détaillants optiques — des montures mode avec capacité de correction."
            />
            <FaqItem
              question="Quelles sont les tendances en œil de chat pour 2024-2025 ?"
              answer="Grandes tendances actuelles : proportions oversize (plus c&apos;est grand, mieux c&apos;est), acétate transparent/cristal (surtout rose et champagne), matériaux mixtes (face acétate + branches métal), œil de chat géométrique angulaire (moins courbé, plus edgy), et pastels doux comme lavande et vert sauge. Le revival de l&apos;œil de chat étroit Y2K est aussi toujours fort auprès des jeunes acheteuses. Nous suivons ces tendances chaque saison et mettons à jour notre catalogue en conséquence."
            />
            <FaqItem
              question="Puis-je avoir des échantillons avant de m&apos;engager sur une commande en gros ?"
              answer="Bien sûr — nous ne nous attendrions jamais à ce que vous commandiez à l&apos;aveugle. Styles du catalogue existant ? Échantillons gratuits, vous ne payez que le transport (généralement 30-50 $ via DHL pour 3-5 paires). Vous voulez un échantillon personnalisé avec vos modifications spécifiques ? Petits frais de 50-100 $ par design, que nous créditons sur votre première commande de production. Donc vous obtenez essentiellement des échantillons personnalisés gratuitement si vous commandez. Délai de 7-10 jours."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Prête à stocker la forme qui se vend toute seule ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiques, magasins en ligne, distributeurs de marques — nous travaillons avec tous. Notre
            programme de gros de lunettes œil de chat femme vous offre des prix compétitifs, une production rapide
            et une personnalisation complète. Demandez un catalogue gratuit et découvrez ce qui est possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Demander le Catalogue</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes Œil de Chat", "item": "https://eyeviewsunglasses.com/fr/produits/oeil-de-chat" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quelles formes de visage conviennent aux lunettes œil de chat ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Presque toutes. L\u2019œil de chat fonctionne très bien avec les visages ovales, ronds, en forme de cœur et carrés. Les angles relevés ajoutent de la définition et du lift à la plupart des structures faciales." }
          },
          {
            "@type": "Question",
            "name": "Quel est le MOQ pour des lunettes œil de chat personnalisées ?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pièces par couleur pour les designs existants. Moules et branding personnalisés à partir de 300 pièces par style. Vous pouvez mélanger différents styles d\u2019œil de chat dans une commande pour atteindre le minimum." }
          },
          {
            "@type": "Question",
            "name": "Les montures œil de chat peuvent-elles être faites prêtes pour la prescription ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui, toutes les montures œil de chat en acétate et métal peuvent être expédiées avec des verres de démonstration pour l\u2019installation de prescriptions. Nous acceptons les prescriptions simple vision, bifocale et progressive." }
          },
          {
            "@type": "Question",
            "name": "Quelles sont les tendances en lunettes œil de chat pour 2024-2025 ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Grandes tendances : proportions oversize, acétate transparent, matériaux mixtes, formes géométriques angulaires, pastels doux et revival de l\u2019œil de chat étroit Y2K pour les jeunes acheteuses." }
          },
          {
            "@type": "Question",
            "name": "Puis-je obtenir des échantillons avant une commande en gros ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolument. Échantillons gratuits des styles existants — frais de port uniquement (30-50 $ via DHL). Les échantillons personnalisés coûtent 50-100 $ par design, crédités sur votre première commande de production." }
          }
        ]
      })}} />
    </main>
  )
}

function ColorTrend({ color, name, description }: { color: string; name: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${color} flex-shrink-0 mt-1`}></div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
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
