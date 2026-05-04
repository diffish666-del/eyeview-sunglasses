import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Polarisées en Gros | Fabricant de Verres TAC Premium - EyeView',
  description: 'Fabricant de lunettes de soleil polarisées en gros. Verres polarisés TAC premium 7 couches, 99 % de réduction de l\'éblouissement, protection UV400. Styles conduite, pêche, sport. MOQ 100 pcs. Direct usine.',
  keywords: 'lunettes polarisées en gros, verres polarisés TAC, fabricant lunettes polarisées, lunettes anti-éblouissement, lunettes polarisées conduite, lunettes polarisées pêche, verres polarisés CR-39 en gros',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/polarise',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/polarized',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/polarise',
    },
  },
}

const products = [
  {
    name: 'Aviateur Polarisé',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$12.00 - $18.00',
    moq: '100 pcs',
    description: 'L\u2019aviateur a littéralement été conçu pour des pilotes qui devaient voir à travers l\u2019éblouissement du cockpit. Ajoutez la polarisation et il devient les lunettes de conduite ultimes. Notre aviateur polarisé coupe l\u2019éblouissement de la route, le reflet du tableau de bord et cet éclair aveuglant de la voiture devant. Nous les fournissons à une entreprise de location de voitures à Dubaï qui les donne à chaque client — c\u2019est dire à quel point elles sont bonnes pour la conduite.',
  },
  {
    name: 'Wayfarer Polarisée',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$11.00 - $17.00',
    moq: '100 pcs',
    description: 'La forme wayfarer classique rencontre l\u2019optique sérieuse. Les verres polarisés TAC transforment cette monture mode en une puissance fonctionnelle — l\u2019éblouissement de la plage, le reflet des trottoirs, le miroitement de la surface de l\u2019eau, tout disparaît. Les clients obtiennent le style qu\u2019ils veulent avec une protection qu\u2019ils ne savaient pas nécessaire. Notre meilleur vendeur polyvalent.',
  },
  {
    name: 'Sport Enveloppant Polarisé',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pcs',
    description: 'Couverture enveloppante + verres polarisés = zéro éblouissement sous tous les angles. Conçues pour les athlètes de plein air qui ont besoin d\u2019une protection périphérique — cyclistes sur routes mouillées, coureurs de trail en lumière tachetée, randonneurs au-dessus de la limite des arbres. La monture TR90 maintient le poids sous les 26g. Un club de cyclisme aux Pays-Bas a commandé 600 paires pour tous ses membres.',
  },
  {
    name: 'Lunettes Polarisées Pêche',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$14.00 - $20.00',
    moq: '100 pcs',
    description: 'Demandez à n\u2019importe quel pêcheur sérieux et il vous dira — les verres polarisés ne sont pas optionnels pour la pêche. Ils sont essentiels. Nos lunettes polarisées de pêche coupent l\u2019éblouissement de surface pour que vous puissiez voir directement dans l\u2019eau. Repérez le poisson, lisez la structure, observez votre leurre. Verres ambrés pour l\u2019eau douce, gris-vert pour l\u2019eau salée. Une entreprise de pêche en charter à Key West réapprovisionne celles-ci chaque trimestre depuis trois ans consécutifs.',
  },
  {
    name: 'Lunettes Polarisées Conduite',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$12.50 - $18.50',
    moq: '100 pcs',
    description: 'Conçues spécifiquement pour le volant. Les verres gris maintiennent la perception réelle des couleurs (pour que les feux de circulation aient l\u2019air corrects), tout en éliminant l\u2019éblouissement horizontal aveuglant qui rebondit sur le bitume mouillé, les capots et les autres véhicules. Revêtement antireflet arrière pour empêcher votre propre visage de se refléter dans le verre. Ce sont celles que les conducteurs professionnels demandent.',
  },
  {
    name: 'Œil de Chat Polarisé',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pcs',
    description: 'Qui a dit que le polarisé devait avoir l\u2019air sportif ? Cette monture œil de chat avec verres polarisés TAC prouve qu\u2019on peut avoir la mode ET la fonction. Les femmes qui conduisent, qui passent du temps à la plage, qui s\u2019installent au bord de la piscine — elles obtiennent la protection anti-éblouissement dont elles ont besoin dans une monture qu\u2019elles veulent vraiment porter. Style + substance. Notre n°1 en ventes de polarisé femme.',
  },
]

export default function PolarizedPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d&apos;Ariane */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes Polarisées</span>
        </nav>

        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Polarisées en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une fois que vos clients essaient le polarisé, ils ne reviennent jamais en arrière. L&apos;éblouissement disparaît.
            Les couleurs ressortent. Tout a juste l&apos;air... mieux. Nous fabriquons des lunettes polarisées TAC
            premium dans tous les styles — aviateur, wayfarer, sport, œil de chat — avec
            des verres 7 couches qui bloquent 99 % de l&apos;éblouissement horizontal aveuglant.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
            alt="Lunettes de Soleil Polarisées en Gros - Verres TAC Premium"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Comment fonctionne la polarisation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Comment fonctionne réellement la polarisation (version simple)</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Voici l&apos;explication en 30 secondes. La lumière du soleil voyage dans toutes les directions — haut,
              bas, latéralement. Quand elle rebondit sur une surface plate comme l&apos;eau, une route ou un capot
              de voiture, elle s&apos;« organise » en ondes horizontales. C&apos;est l&apos;éblouissement. C&apos;est
              aveuglant, c&apos;est agaçant, et c&apos;est réellement dangereux quand vous conduisez
              ou êtes sur l&apos;eau.
            </p>
            <p>
              Un <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">verre polarisé</a> contient
              un film chimique spécial avec des stries verticales microscopiques. Ces stries agissent comme
              des stores vénitiens pour la lumière — elles laissent passer la lumière verticale (la normale)
              mais bloquent la lumière horizontale (l&apos;éblouissement). Le résultat ? L&apos;éblouissement disparaît. Les couleurs paraissent
              plus riches et plus naturelles. Le contraste s&apos;aiguise. C&apos;est comme passer de la définition
              standard à la 4K pour vos yeux.
            </p>
            <p>
              Tous les verres polarisés ne se valent pas cependant. Les bon marché utilisent un film
              polarisant fin collé sur la surface du verre — il se décolle, fait des bulles et se dégrade en quelques mois. Nos
              verres TAC prennent en sandwich le film polarisant entre 6 couches de matériau protecteur,
              créant une unité fusionnée unique qui ne se séparera ni ne se dégradera. C&apos;est la
              différence entre du polarisé de station-service à 2 $ et du vrai polarisé. Vos clients
              voient la différence.
            </p>
          </div>
        </section>

        {/* Polarisé vs Non-Polarisé */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarisé vs Non-Polarisé : la vraie différence</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Caractéristique</th>
                  <th className="p-4 text-left font-semibold">Verre teinté standard</th>
                  <th className="p-4 text-left font-semibold">Verre polarisé</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Réduction éblouissement</td><td className="p-4 text-gray-600">Assombrit tout uniformément — éblouissement inclus</td><td className="p-4 text-gray-600">Élimine spécifiquement l&apos;éblouissement horizontal réfléchi</td></tr>
                <tr><td className="p-4 font-medium">Clarté visuelle</td><td className="p-4 text-gray-600">Plus sombre mais pas plus clair</td><td className="p-4 text-gray-600">Contraste plus net, perception des couleurs améliorée</td></tr>
                <tr><td className="p-4 font-medium">Sécurité routière</td><td className="p-4 text-gray-600">Réduit la luminosité, éblouissement toujours présent</td><td className="p-4 text-gray-600">Élimine l&apos;éblouissement route/voiture — nettement plus sûr</td></tr>
                <tr><td className="p-4 font-medium">Pêche / Eau</td><td className="p-4 text-gray-600">Ne voit pas sous la surface</td><td className="p-4 text-gray-600">Voit à travers la surface de l&apos;eau clairement</td></tr>
                <tr><td className="p-4 font-medium">Fatigue oculaire</td><td className="p-4 text-gray-600">Plisse toujours les yeux face à l&apos;éblouissement</td><td className="p-4 text-gray-600">Les yeux se détendent — plus besoin de plisser</td></tr>
                <tr><td className="p-4 font-medium">Valeur perçue</td><td className="p-4 text-gray-600">Basique — les clients attendent l&apos;UV au minimum</td><td className="p-4 text-gray-600">Premium — les clients paient 10-30 $ de plus au détail</td></tr>
                <tr><td className="p-4 font-medium">Surcoût gros</td><td className="p-4 text-gray-600">Base</td><td className="p-4 text-gray-600">+1,50 - 3,00 $ par paire</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Le calcul est simple : le polarisé vous coûte 1,50-3,00 $ de plus par paire mais vous permet de facturer 10-30 $ de plus au détail. C&apos;est le meilleur levier de marge dans la lunetterie.
          </p>
        </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop" alt="Lunettes Polarisées en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Produits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Collection Polarisée par Style</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Verre polarisé TAC 7 couches</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99 % de réduction de l&apos;éblouissement</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protection UV400</li>
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

        {/* Types de verres */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Types de verres polarisés : TAC vs CR-39 vs Verre minéral</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-200">
              <h3 className="text-xl font-semibold mb-2">🏆 TAC Polarisé</h3>
              <p className="text-xs text-primary-600 font-semibold mb-4">LE PLUS POPULAIRE — 80 % des commandes</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le TAC (Triacétate de Cellulose) est le juste milieu. Sept couches fusionnées ensemble :
                revêtement dur à l&apos;extérieur, couches structurelles TAC, film polarisant au centre,
                revêtement UV en dessous. Plus léger que le verre, plus résistant que le CR-39, et environ la moitié
                du coût du verre polarisé. C&apos;est ce que nous recommandons pour 90 % des acheteurs en gros.
                C&apos;est le cheval de bataille de l&apos;industrie pour une bonne raison.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Poids : Léger (1,1mm standard)</li>
                <li>• Impact : Bon — ne se brise pas</li>
                <li>• Optique : Très bon</li>
                <li>• Coût : $$ — meilleur rapport qualité-prix</li>
                <li>• Idéal pour : la plupart des applications</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🔬 CR-39 Polarisé</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">OPTION PREMIUM</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le <a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">CR-39</a> est
                une résine de qualité optique développée à l&apos;origine pour l&apos;optique militaire. Il offre
                la clarté visuelle la plus nette de tous les matériaux de verre en plastique — les opticiens l&apos;adorent.
                Résistant aux rayures, léger et optiquement supérieur au TAC. Mais il coûte
                plus cher et est légèrement moins résistant aux chocs. Choisissez le CR-39 quand la qualité optique
                est la priorité — marques de luxe, spécialistes conduite, détaillants optiques.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Poids : Léger</li>
                <li>• Impact : Modéré</li>
                <li>• Optique : Excellent — qualité optique</li>
                <li>• Coût : $$$ — premium</li>
                <li>• Idéal pour : luxe, opticiens</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">💎 Verre Minéral Polarisé</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">CLARTÉ ULTIME</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Rien ne bat le verre minéral pour la pureté optique. Zéro distorsion, résistance aux rayures supérieure,
                et la polarisation est intégrée de manière permanente — elle ne se dégradera pas
                au fil des années. Mais le verre est plus lourd, plus cher et se brise aux
                chocs (pas idéal pour le sport). Le verre polarisé est pour le client puriste
                qui veut la meilleure optique absolue et ne craint pas le poids. Pensez
                passionnés de pêche, capitaines de bateaux, positionnement luxe.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Poids : Lourd</li>
                <li>• Impact : Faible — peut se briser</li>
                <li>• Optique : Parfait — zéro distorsion</li>
                <li>• Coût : $$$$ — le plus élevé</li>
                <li>• Idéal pour : luxe, pêche, nautisme</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Construction 7 couches */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">À l&apos;intérieur d&apos;un verre polarisé TAC : 7 couches</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Quand les gens demandent &quot;pourquoi vos verres polarisés coûtent-ils plus que ceux sur
                Alibaba à 0,50 $ ?&quot; — voici pourquoi. Chaque verre est un sandwich à 7 couches, fusionné avec précision
                sous chaleur et pression. Les bon marché ? Ils collent un film polarisant sur un côté
                d&apos;un verre ordinaire. Il se décolle. Il fait des bulles. Il s&apos;embue. Les nôtres, jamais. Nous
                les fabriquons depuis plus de 8 ans et notre taux de défaut est inférieur à 0,3 %.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>UV400 — testé en laboratoire, pas juste étiqueté</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>99 % d&apos;éblouissement horizontal éliminé</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Résistant aux chocs — ne se brise pas</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Revêtement dur anti-rayures</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-4">Les 7 couches :</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">1</span><span>Revêtement dur (protection rayures)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">2</span><span>Couche structurelle TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">3</span><span>Couche de liaison TAC</span></div>
                <div className="flex justify-between p-2 bg-primary-100 rounded font-semibold"><span>4</span><span>Film polarisant (la magie)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">5</span><span>Couche de liaison TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">6</span><span>Couche structurelle TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">7</span><span>Revêtement protection UV400</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Cas d&apos;utilisation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Où le polarisé fait la plus grande différence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AppCard icon="🚗" title="Conduite" desc="Éblouissement de la route disparu. Reflet du tableau de bord disparu. Conduite plus sûre, point." />
            <AppCard icon="🎣" title="Pêche" desc="Voir sous la surface de l&apos;eau. Repérer les poissons. Lire la structure. Révolutionnaire." />
            <AppCard icon="⛵" title="Nautisme" desc="L&apos;éblouissement en eau libre est brutal. Le polarisé le rend confortable." />
            <AppCard icon="⛷️" title="Sports de neige" desc="La neige réfléchit 80 % des UV. Polarisé + teinte foncée = prévention de la cécité des neiges." />
            <AppCard icon="🏖️" title="Plage" desc="Double éblouissement sable et eau. Le polarisé rend les journées plage vraiment relaxantes." />
            <AppCard icon="🏌️" title="Golf" desc="Lire le green sans plisser les yeux. Suivre la balle contre le ciel." />
            <AppCard icon="🚴" title="Cyclisme" desc="Éblouissement des routes mouillées lors des sorties matinales. Les verres polarisés le coupent net." />
            <AppCard icon="🏃" title="Course" desc="Éblouissement du bitume en soleil rasant. Le polarisé garde vos yeux frais sur les kilomètres." />
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Collections associées</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/sport" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Lunettes Sport</h3>
              <p className="text-sm text-gray-600">Toutes nos montures sport avec options polarisées</p>
            </Link>
            <Link href="/fr/produits/oeil-de-chat" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Lunettes Œil de Chat</h3>
              <p className="text-sm text-gray-600">Montures mode avec amélioration TAC polarisé</p>
            </Link>
            <Link href="/fr/produits/rond" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Lunettes Rondes</h3>
              <p className="text-sm text-gray-600">Rondes vintage avec options de verres polarisés</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions sur le polarisé — réponses claires</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Comment savoir si les verres sont vraiment polarisés ?"
              answer="Test facile : tenez les lunettes devant un écran LCD (téléphone ou ordinateur) et tournez-les de 90 degrés. Si elles sont vraiment polarisées, l&apos;écran s&apos;assombrira ou changera de couleur de manière spectaculaire à certains angles. C&apos;est le filtre polarisant qui bloque les ondes lumineuses de l&apos;écran. Nous incluons une carte de test de polarisation avec chaque commande pour que vos clients puissent le vérifier eux-mêmes. C&apos;est un excellent outil de vente — les gens adorent la démonstration."
            />
            <FaqItem
              question="Les verres polarisés valent-ils le surcoût ?"
              answer="Du point de vue des marges ? Absolument. Le polarisé ajoute environ 1,50-3,00 $ à votre coût de gros par paire, mais les clients paient 10-30 $ de plus au détail pour « polarisé » sur l&apos;étiquette. C&apos;est le meilleur upsell dans le commerce des lunettes. Du point de vue performance — si vos clients conduisent, pêchent ou passent du temps près de l&apos;eau, le polarisé n&apos;est pas un luxe. C&apos;est une caractéristique de sécurité. L&apos;éblouissement cause des accidents."
            />
            <FaqItem
              question="Les verres polarisés affectent-ils la vision des écrans de téléphone ou GPS ?"
              answer="Parfois, oui — et c&apos;est bon à savoir. Les verres polarisés peuvent rendre certains écrans LCD sombres ou afficher des motifs arc-en-ciel à certains angles. La plupart des écrans OLED modernes gèrent bien la situation, mais les anciens GPS et certains affichages de tableau de bord peuvent être problématiques. Pour les lunettes de conduite spécifiquement, nous proposons des verres avec un angle de polarisation légèrement décalé qui réduit ce problème. Demandez simplement notre option polarisée « optimisée conduite »."
            />
            <FaqItem
              question="TAC, CR-39 ou verre minéral — quel verre polarisé choisir ?"
              answer="Pour la plupart des acheteurs en gros : TAC. C&apos;est le meilleur équilibre qualité, durabilité et coût — et il représente environ 80 % de nos commandes polarisées. Optez pour le CR-39 si vous vendez aux opticiens ou aux marchés de luxe où la clarté optique est la priorité n°1. Optez pour le verre minéral si vous ciblez les passionnés de pêche/nautisme qui veulent la meilleure optique absolue et ne craignent pas les montures plus lourdes. En cas de doute, commencez par le TAC."
            />
            <FaqItem
              question="Quelles couleurs de verres polarisés proposez-vous ?"
              answer="Douze options : gris (neutre, couleurs fidèles — idéal pour la conduite), brun (contraste amélioré — excellent au quotidien), ambre (contraste maximal — favori des pêcheurs), vert (look classique G-15), miroir bleu, miroir rouge, miroir or, miroir argent, jaune (faible luminosité), rose (golf/tennis), et photochromique (s&apos;ajuste automatiquement à la lumière). Gris et brun représentent environ 60 % de toutes les commandes, mais les finitions miroir croissent rapidement."
            />
            <FaqItem
              question="Quel est le MOQ et peut-on mélanger polarisé et non-polarisé ?"
              answer="100 pièces par style et couleur. Et oui — vous pouvez mélanger des versions polarisées et non-polarisées de la même monture dans une commande. Beaucoup de nos détaillants stockent les deux : non-polarisé à 15-20 $ au détail comme point d&apos;entrée, et polarisé à 25-35 $ comme upsell premium. Même monture, verre différent, valeur moyenne de commande plus élevée. Les détaillants malins proposent la démo comparative directement au comptoir."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">L&apos;upsell le plus facile dans la lunetterie</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Le polarisé vous coûte un peu plus. Il se vend beaucoup plus cher. Et les clients adorent véritablement
            la différence. Obtenez des échantillons, faites la démo avec l&apos;écran LCD, et regardez-les se vendre
            tout seuls. Échantillons gratuits disponibles — vous ne payez que le transport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Demander le Catalogue Polarisé</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes Polarisées", "item": "https://eyeviewsunglasses.com/fr/produits/polarise" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment savoir si les verres sont vraiment polarisés ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tenez les lunettes devant un écran LCD et tournez-les de 90 degrés. Les verres vraiment polarisés feront s\u2019assombrir ou changer de couleur l\u2019écran à certains angles. Nous incluons une carte de test de polarisation avec chaque commande." }
          },
          {
            "@type": "Question",
            "name": "Les verres polarisés valent-ils le surcoût ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolument. Le polarisé ajoute 1,50-3,00 $ au coût de gros mais permet de facturer 10-30 $ de plus au détail. C\u2019est le meilleur upsell dans le commerce des lunettes." }
          },
          {
            "@type": "Question",
            "name": "Les verres polarisés affectent-ils la vision des écrans de téléphone ou GPS ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Certains écrans LCD peuvent apparaître sombres à certains angles avec des verres polarisés. La plupart des téléphones OLED modernes gèrent bien la situation. Nous proposons des verres polarisés optimisés conduite avec polarisation décalée pour réduire ce problème." }
          },
          {
            "@type": "Question",
            "name": "TAC, CR-39 ou verre minéral — quel verre polarisé choisir ?",
            "acceptedAnswer": { "@type": "Answer", "text": "TAC pour la plupart des acheteurs (meilleur rapport qualité-prix, 80 % des commandes). CR-39 pour les marchés luxe/optique. Verre minéral pour les passionnés de pêche/nautisme voulant la meilleure optique absolue." }
          },
          {
            "@type": "Question",
            "name": "Quelles couleurs de verres polarisés proposez-vous ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Douze options dont gris, brun, ambre, vert G-15, miroir bleu/rouge/or/argent, jaune, rose et photochromique. Gris et brun représentent environ 60 % des commandes." }
          },
          {
            "@type": "Question",
            "name": "Quel est le MOQ et peut-on mélanger polarisé et non-polarisé ?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pièces par style et couleur. Oui, vous pouvez mélanger des versions polarisées et non-polarisées de la même monture. Beaucoup de détaillants stockent les deux comme gammes d\u2019entrée et premium." }
          }
        ]
      })}} />
    </main>
  )
}

function AppCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
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
