import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Wayfarer en Gros | Fabricant OEM Wayfarer - EyeView',
  description: 'Fabricant de lunettes de soleil wayfarer en gros. Montures acétate premium, verres UV400/polarisés, impression logo personnalisée. MOQ 100 pcs. Prix usine à partir de 5$/paire. Échantillons gratuits !',
  keywords: 'lunettes wayfarer en gros, fabricant lunettes wayfarer, lunettes wayfarer personnalisées, lunettes acétate en gros, lunettes de soleil en gros, fabricant lunettes, OEM lunettes wayfarer',
  openGraph: {
    title: 'Lunettes de Soleil Wayfarer en Gros | Fabricant OEM - EyeView',
    description: 'Fabricant de lunettes de soleil wayfarer en gros. Montures acétate premium, logo personnalisé, verres UV400/polarisés. MOQ 100 pcs. Prix direct usine.',
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
    question: 'Quelle est la différence entre les lunettes wayfarer en acétate et en plastique ?',
    answer: 'La différence est considérable. Le plastique standard moulé par injection (PC ou nylon) est bon marché et léger, mais il fait et paraît bon marché aussi — fin, brillant, un peu creux. L\'acétate est un matériau d\'origine végétale (fabriqué à partir de fibres de coton et de pâte de bois) qui est découpé dans des plaques massives et poli à la main. Il offre une véritable profondeur de couleur, des motifs naturels impossibles à reproduire avec du plastique, et un poids qui donne une sensation de solidité. Notre acétate provient de fournisseurs italiens comme Mazzucchelli, qui le fabriquent depuis 1849. La différence de prix est d\'environ 2 à 3 $ par paire, mais le saut en valeur perçue est considérable. En résumé : si vous voulez vendre au-dessus de 20 $ en prix de détail, choisissez l\'acétate.',
  },
  {
    question: 'Combien de couleurs et de motifs proposez-vous pour les montures wayfarer ?',
    answer: 'Plus de 200, et ça ne cesse d\'augmenter. Les classiques — noir uni, écaille foncée, écaille miel — sont toujours en stock et prêts à être expédiés. Mais nous proposons aussi des couleurs transparentes (cristal, bleu clair, rose poudré), des combinaisons bicolores, des effets marbre, des motifs veinés bois et des finitions plus audacieuses comme l\'acétate à paillettes. Si vous avez une couleur Pantone ou un motif précis en tête, nous pouvons nous procurer des plaques d\'acétate sur mesure — cela prend 7 à 10 jours supplémentaires et le MOQ passe à 300 pièces, mais ça en vaut la peine si vous voulez quelque chose d\'unique.',
  },
  {
    question: 'Comment les wayfarer se comparent-elles aux aviateur pour ma marque ?',
    answer: 'Ce sont honnêtement les deux styles que nous recommandons à toute nouvelle marque pour démarrer, mais ils ont des atouts différents. Les wayfarer sont en acétate, donc disponibles dans bien plus de couleurs et de motifs — ce qui signifie plus de références et plus de variété visuelle sur votre page produits ou en rayon. Elles coûtent aussi moins cher par paire (5-11 $ contre 8-14 $ pour les aviateur), donc vos marges peuvent être meilleures. Les aviateur sont en métal et ont un rendu plus premium et élégant. La wayfarer est plus décontractée, plus colorée, plus unisexe. Si vous ne devez en choisir qu\'une : wayfarer pour le volume et la variété, aviateur pour le positionnement premium. Mais sérieusement, la plupart de nos clients à succès proposent les deux.',
  },
  {
    question: 'Quelles options de logo fonctionnent le mieux sur les lunettes wayfarer ?',
    answer: 'Les montures en acétate offrent des options différentes par rapport au métal. La méthode la plus populaire est le marquage à chaud (feuille dorée ou argentée) à l\'intérieur de la branche — c\'est net et premium. Nous proposons aussi la sérigraphie (toute couleur, intérieur ou extérieur de la branche), les logos en relief ou en creux pressés directement dans l\'acétate, et les badges métalliques insérés dans la branche. Pour la face avant de la monture, certains clients ajoutent un petit rivet métallique ou un clou décoratif avec leur logo. Le marquage à chaud à l\'intérieur de la branche est le choix de départ de la plupart des marques — comptez environ 0,15 à 0,20 $ de supplément par paire.',
  },
  {
    question: 'Quel est le MOQ pour les lunettes wayfarer personnalisées ?',
    answer: 'Comme pour tout ce que nous fabriquons : 100 pièces par modèle. Vous pouvez panacher les couleurs au sein de ces 100 pièces, ce qui est idéal pour tester. Une première commande type d\'une nouvelle marque ressemble à ceci : 30 noires, 20 écaille, 20 transparentes, 15 noir mat, 15 dans une couleur plus originale comme le bleu ou le rose. Cela vous donne cinq options dans votre boutique sans engagement financier excessif. Lors de la commande suivante, la plupart des clients doublent les 2-3 couleurs qui se sont le mieux vendues et abandonnent celles qui n\'ont pas marché.',
  },
]

const products = [
  {
    name: 'Wayfarer Noire Classique',
    description: 'Celle qui a tout lancé et qui continue de surpasser toutes les autres en ventes. Acétate noir uni, verres gris UV400, finition polie. C\'est l\'équivalent du t-shirt blanc pour les lunettes de soleil — ça va avec tout et ça ne se démode jamais. Nous avons expédié plus de cette seule référence que de n\'importe quelle autre wayfarer de notre catalogue. Si vous testez le marché et ne pouvez choisir qu\'une seule couleur, c\'est celle-ci. Toutes les marques de lunettes au monde proposent une wayfarer noire, et ce n\'est pas un hasard.',
    price: '5,50 $ - 9,00 $',
    moq: '100 pcs',
    features: ['Acétate Noir Uni', 'Verre Gris UV400', 'Finition Polie', 'Charnières à Ressort'],
  },
  {
    name: 'Wayfarer Écaille',
    description: 'Acétate écaille foncée classique — ce motif tourbillonnant ambre et brun qui est un incontournable de la mode masculine depuis des décennies. Chaque paire présente un motif légèrement différent en raison de la découpe des plaques d\'acétate, ce qui ajoute en fait au caractère premium (aucune paire n\'est exactement identique). Nous utilisons une écaille profonde et chaleureuse qui est très photogénique et plaît à toutes les tranches d\'âge. C\'est le deuxième meilleur vendeur de notre gamme wayfarer, et beaucoup de marques l\'utilisent comme option « premium » aux côtés de la noire.',
    price: '6,00 $ - 10,00 $',
    moq: '100 pcs',
    features: ['Motif Écaille Foncée', 'Unique par Paire', 'Verre Dégradé Brun', 'Poli à la Main'],
  },
  {
    name: 'Wayfarer Cristal Transparente',
    description: 'Monture en acétate transparent avec un poli subtil qui capte la lumière. Ce style a explosé ces dernières années — il est partout sur Instagram et TikTok, et le public jeune (18-30 ans) y est très réceptif. Associée à des verres légèrement teintés gris ou bleu pour un look épuré et moderne. La monture transparente rend aussi le logo plus visible si vous optez pour un marquage à l\'intérieur de la branche. Excellent vendeur pour les marques avant-gardistes et les boutiques plage/resort. Attendez-vous à ce que ce modèle soit très photogénique pour vos fiches produits.',
    price: '6,50 $ - 10,50 $',
    moq: '100 pcs',
    features: ['Acétate Transparent', 'Verre Légèrement Teinté', 'Favorite des Réseaux Sociaux', 'Marquage Visible'],
  },
  {
    name: 'Wayfarer Noir Mat',
    description: 'Même forme que la noire classique, mais avec une finition mate soft-touch qui change complètement l\'allure. La surface mate est obtenue par un procédé spécial de polissage en tambour qui élimine le brillant sans affecter la durabilité. Elle paraît plus moderne, plus discrète — un peu comme la différence entre une coque de téléphone brillante et mate. Associée à des verres fumés foncés. Ce modèle plaît aux marques streetwear, aux labels minimalistes et à toute marque recherchant un look « luxe discret ». Coût par paire légèrement supérieur en raison de l\'étape de finition supplémentaire.',
    price: '6,50 $ - 10,50 $',
    moq: '100 pcs',
    features: ['Mate Soft-Touch', 'Finition Tambour', 'Verre Fumé Foncé', 'Esthétique Moderne'],
  },
  {
    name: 'Wayfarer Dégradé Bleu Océan',
    description: 'Une monture en acétate bleu translucide qui passe du bleu marine profond en haut au bleu plus clair en bas — vraiment saisissante en main. Associée à des verres dégradés bleus assortis au ton de la monture. C\'est le genre de produit qui fait s\'arrêter de défiler. Ce n\'est pas pour toutes les marques (c\'est plus une pièce forte qu\'un basique), mais pour les collections resort, les lignes estivales et les marques qui veulent se démarquer dans un rayon chargé, ça fonctionne. Nous recevons beaucoup de commandes de ce modèle pour des éditions limitées et des lancements saisonniers.',
    price: '7,00 $ - 11,00 $',
    moq: '100 pcs',
    features: ['Acétate Dégradé Bleu', 'Verre Assorti', 'Pièce Forte', 'Idéale Édition Limitée'],
  },
  {
    name: 'Wayfarer Acétate Rouge',
    description: 'Un acétate rouge audacieux et assumé qui attire tous les regards. Pas un rouge cerise ni un rouge pompier — plutôt un bordeaux-rouge profond et sophistiqué qui inspire confiance sans être tapageur. Associée à des verres bruns pour la chaleur. C\'est un ajout puissant à une collection : il attire le regard sur la grille de votre site, il ressort sur Instagram et il montre que votre marque n\'a pas peur de la couleur. Se vend particulièrement bien auprès des femmes et des marques ciblant un public sensible à la mode. Un complément judicieux à côté de vos basiques noir et écaille.',
    price: '7,00 $ - 11,00 $',
    moq: '100 pcs',
    features: ['Acétate Rouge Profond', 'Verre Brun Chaud', 'Accrocheur', 'Fashion Forward'],
  },
]

export default function WayfarerPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Wayfarer en Gros',
        description: 'Lunettes de soleil wayfarer classiques avec montures acétate premium. Plus de 200 couleurs et motifs disponibles. Options de verres UV400 et polarisés. Personnalisation OEM complète avec impression de logo.',
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
          {/* Fil d'Ariane */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes Wayfarer</span>
          </nav>

          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lunettes de Soleil Wayfarer en Gros
            </h1>
          </div>

          {/* Image principale */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Lunettes de Soleil Wayfarer en Gros - Fabricant de Montures Acétate Personnalisées"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Histoire du produit / Présentation */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                La wayfarer a une histoire qu&apos;aucun autre modèle de lunettes de soleil ne peut égaler. En 1952, un <a href="https://en.wikipedia.org/wiki/Ray-Ban_Wayfarer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">designer nommé Raymond Stegeman</a> chez Bausch &amp; Lomb a fait quelque chose de radical : il a complètement abandonné le métal et conçu une monture en un nouveau matériau appelé acétate. Le résultat était audacieux, angulaire et totalement différent de tout ce que les gens avaient vu auparavant. Ça ressemblait au futur.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hollywood l&apos;a remarqué très vite. James Dean portait des wayfarer dans <em>La Fureur de vivre</em>. Audrey Hepburn les portait dans <em>Diamants sur canapé</em>. Dans les années 60, les wayfarer étaient partout — sur les rock stars, les politiciens, les artistes et les gens ordinaires qui voulaient simplement avoir du style. Les ventes ont baissé dans les années 70 et 80, puis <em>Top Gun</em> et <em>The Breakfast Club</em> les ont ramenées en force. Ce schéma s&apos;est répété chaque décennie depuis : les wayfarer reculent légèrement, puis reviennent plus fortes. À ce stade, les qualifier de &ldquo;tendance&rdquo; n&apos;a plus de sens. Elles sont un classique permanent.
              </p>
              <p className="text-lg leading-relaxed">
                En tant que <strong>fabricant de lunettes wayfarer</strong>, nous produisons ces montures en <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acétate de qualité italienne</a> premium — le même type de matériau utilisé par les marques de luxe qui vendent entre 200 et 400 $ en prix de détail. L&apos;acétate est d&apos;origine végétale (fibres de coton et pâte de bois), hypoallergénique, et offre une richesse de couleur que le plastique moulé par injection ne peut tout simplement pas reproduire. Nous avons plus de 200 couleurs et motifs en stock, et nous pouvons nous procurer de l&apos;acétate sur mesure pour des exigences de marque spécifiques. Avec des prix à partir de seulement 5,50 $ la paire, les wayfarer en gros offrent parmi les meilleures marges de toute l&apos;industrie de la lunetterie.
              </p>
            </div>
          </div>

          {/* Comparaison Aviateur vs Wayfarer */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-6">Wayfarer vs Aviateur : Comparaison Rapide</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Beaucoup de nos clients demandent par lequel commencer. Voici la comparaison honnête.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left font-semibold text-gray-700"></th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">🔲 Wayfarer</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">✈️ <Link href="/fr/produits/aviateur" className="text-primary-600 hover:underline">Aviateur</Link></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-6 py-3 font-medium">Matériau de Monture</td><td className="px-6 py-3 text-gray-600">Acétate / Plastique PC</td><td className="px-6 py-3 text-gray-600">Acier inoxydable / Aluminium / Titane</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Gamme de Prix</td><td className="px-6 py-3 text-gray-600">5 - 11 $ / paire</td><td className="px-6 py-3 text-gray-600">8 - 22 $ / paire</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Options de Couleur</td><td className="px-6 py-3 text-gray-600">200+ (grande variété)</td><td className="px-6 py-3 text-gray-600">5-8 couleurs de placage</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Poids</td><td className="px-6 py-3 text-gray-600">25-32g</td><td className="px-6 py-3 text-gray-600">15-32g (selon le métal)</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Meilleure Méthode de Logo</td><td className="px-6 py-3 text-gray-600">Marquage à chaud / relief</td><td className="px-6 py-3 text-gray-600">Gravure laser</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Style</td><td className="px-6 py-3 text-gray-600">Décontracté, coloré, audacieux</td><td className="px-6 py-3 text-gray-600">Élégant, classique, premium</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Idéal Pour</td><td className="px-6 py-3 text-gray-600">Volume, variété, mode</td><td className="px-6 py-3 text-gray-600">Positionnement premium</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Wayfarer en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Grille de Produits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Notre Collection Wayfarer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
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
                        <div className="text-xs text-gray-400">MOQ : {product.moq}</div>
                      </div>
                      <Link href="/fr/contact" className="btn-primary text-sm">Demander un Devis</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tableau des Spécifications */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Spécifications Complètes</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Matériau de Monture', 'Acétate de qualité italienne (Mazzucchelli / similaire) ou Plastique PC'],
                      ['Poids de la Monture', 'Acétate : 28-32g | Plastique PC : 20-24g'],
                      ['Matériau des Verres', 'Polycarbonate / TAC Polarisé / CR-39 Optique'],
                      ['Largeur des Verres', '50mm / 52mm / 54mm / 56mm'],
                      ['Largeur du Pont', '18mm / 20mm / 22mm'],
                      ['Longueur des Branches', '140mm / 145mm / 150mm'],
                      ['Hauteur des Verres', '38mm - 44mm'],
                      ['Protection UV', 'UV400 — bloque 100 % des rayons UVA et UVB'],
                      ['Polarisation', 'Film TAC 7 couches en option — réduction de 99 % de l\'éblouissement'],
                      ['Couleurs de Monture', '200+ couleurs acétate : uni, écaille, transparent, marbre, dégradé, sur mesure'],
                      ['Couleurs de Verres', 'Gris, Brun, Vert, Bleu, Rose, Jaune, Miroir, Dégradé — tous disponibles'],
                      ['Charnières', 'Charnières à ressort 5 barillets (standard) ou 7 barillets (premium)'],
                      ['Pont Nasal', 'Pont intégré trou de serrure ou selle — moulé dans la monture'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 pièces par modèle — panachage de couleurs autorisé'],
                      ['Délai Échantillon', '3-5 jours ouvrés'],
                      ['Délai de Production', '15-20 jours standard / 10-12 jours urgent'],
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

          {/* L'acétate en détail */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Pourquoi l&apos;Acétate Compte (Et Pourquoi le Plastique Bon Marché Ne Suffit Pas)</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Si vous allez vendre des wayfarer, vous devez comprendre le matériau. C&apos;est le facteur déterminant pour le caractère premium de votre produit.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-green-700">✅ Acétate (Notre Recommandation)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  L&apos;<a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acétate</a> est fabriqué à partir de fibres de coton et de pâte de bois — c&apos;est techniquement un matériau d&apos;origine végétale, ce qui constitue un bon argument de durabilité pour le marketing. Il est découpé dans des plaques massives (pas moulé par injection), ce qui signifie que les couleurs traversent toute l&apos;épaisseur. Rayez la surface et la couleur est toujours là. Le matériau a une chaleur et une profondeur naturelles qui font « cher ». Il est aussi hypoallergénique et ajustable — les opticiens peuvent ajuster les montures en acétate à la chaleur pour un ajustement sur mesure.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Notre acétate provient de fabricants italiens reconnus comme <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> (fondé en 1849) qui fournissent la même matière première aux maisons de lunetterie de luxe. La différence de coût par rapport au plastique est de 2-3 $/paire, mais le saut en valeur perçue au détail est de 20-40 $. C&apos;est le meilleur retour sur investissement que vous puissiez faire.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-500">⚠️ PC / Plastique Moulé par Injection</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nous le proposons aussi, et il a sa place — principalement pour les produits promotionnels, les gammes économiques en dessous de 15 $ au détail et les lunettes pour enfants où la durabilité compte plus que le toucher. Le plastique PC est plus léger (20-24g contre 28-32g pour l&apos;acétate), moins cher (3,50-6 $/paire) et pratiquement indestructible.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mais il ne fait pas premium. La couleur est superficielle (elle peut s&apos;écailler), la finition est brillante d&apos;une façon qui crie &ldquo;bon marché&rdquo;, et il n&apos;y a pas de variation naturelle de motif. Si votre marque se positionne au-dessus des lunettes de station-service, optez pour l&apos;acétate. Si vous faites un cadeau promotionnel à 5 $ pour un salon professionnel, le plastique convient. On ne juge pas — on fabrique les deux.
                </p>
              </div>
            </div>
          </section>

          {/* Options de Personnalisation */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Personnalisation des Lunettes Wayfarer</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              L&apos;acétate ouvre des possibilités de marquage que vous n&apos;avez pas avec les montures métalliques. Voici ce qui fonctionne le mieux.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Options de Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Marquage à chaud</strong> — feuille dorée ou argentée pressée sur la branche. Net, luxueux, notre option la plus populaire pour les wayfarer. ~0,15-0,20 $/paire.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Sérigraphie</strong> — toute couleur, intérieur ou extérieur de la branche. Plus visible que le marquage à chaud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Relief / creux</strong> — logo pressé directement dans l&apos;acétate. Subtil, tactile, très premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Badge métallique</strong> — petit logo en métal inséré dans la branche. Effet 3D qui se démarque.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Couleur et Motif</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>200+ couleurs d&apos;acétate en stock</strong> — uni, écaille, transparent, marbre, veiné bois, dégradé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Correspondance Pantone sur mesure</strong> — donnez-nous un code couleur et nous nous procurons l&apos;acétate assorti (MOQ 300 pcs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Montures bicolores</strong> — couleur différente intérieur vs extérieur pour un look en couches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Finition mate ou brillante</strong> — brillant est standard, mat coûte ~0,30 $/paire en supplément</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Étuis rigides :</strong> EVA, similicuir ou carton — tous avec votre logo. 0,80-2,50 $/pce selon le matériau.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Pochettes microfibre :</strong> imprimées à votre marque, servent aussi de chiffon de nettoyage. 0,30-0,50 $/pce.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Boîtes retail :</strong> impression quadri, taille sur mesure, avec insert mousse ou carton. 0,60-1,50 $/pce.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras :</strong> chiffons de nettoyage (0,15 $), cartes de garantie (0,08 $), étiquettes volantes (0,10 $), autocollants (0,05 $)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Qui achète */}
          <section className="mb-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Qui Commande des Wayfarer en Gros ?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Les wayfarer sont la forme de monture la plus polyvalente en lunetterie. Voici qui les achète et pourquoi.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🚀 Lancements de Nouvelles Marques</h3>
                <p className="text-gray-600 text-sm">Marques de lunettes qui démarrent et veulent un style sûr et universellement apprécié pour leur lancement. Le faible coût par paire laisse plus de budget pour le marketing et le packaging.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛒 Vendeurs E-Commerce</h3>
                <p className="text-gray-600 text-sm">Vendeurs Shopify, Amazon et Etsy qui ont besoin d&apos;un catalogue profond de couleurs. Les 200+ options d&apos;acétate signifient que vous pouvez avoir 10 à 20 fiches produits uniques avec une seule forme de monture.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎪 Événementiel et Promotion</h3>
                <p className="text-gray-600 text-sm">Événements d&apos;entreprise, festivals de musique, mariages, salons professionnels — des wayfarer aux couleurs personnalisées avec un logo font le cadeau parfait. Les gens les gardent et les portent vraiment.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏬 Boutiques et Commerces</h3>
                <p className="text-gray-600 text-sm">Boutiques physiques qui veulent leur propre marque. La variété de couleurs permet de remplir un présentoir avec une seule forme de monture — ce qui simplifie la gestion des stocks.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">👗 Marques de Mode et Prêt-à-Porter</h3>
                <p className="text-gray-600 text-sm">Marques de vêtements qui ajoutent les lunettes de soleil comme gamme d&apos;accessoires. Les wayfarer s&apos;accordent avec pratiquement toute esthétique mode, et la palette de couleurs permet de créer des collections saisonnières.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏖️ Resort et Tourisme</h3>
                <p className="text-gray-600 text-sm">Hôtels, compagnies de croisière et boutiques de souvenirs. Des wayfarer personnalisées avec le nom de la destination font d&apos;excellents souvenirs que les gens utilisent vraiment — pas un énième magnet de frigo.</p>
              </div>
            </div>
          </section>

          {/* Section FAQ */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes sur les Lunettes Wayfarer</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {wayfarerFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Produits Associés */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Vous Pourriez Aussi Aimer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/aviateur" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Aviateur</h3>
                <p className="text-gray-600 text-sm">Montures métalliques, forme en goutte d&apos;eau, toucher premium. L&apos;autre &ldquo;incontournable&rdquo; de toute collection de lunettes. La plupart des marques proposent à la fois des aviateur et des wayfarer.</p>
              </Link>
              <Link href="/fr/produits/oeil-de-chat" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😺</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Œil-de-Chat</h3>
                <p className="text-gray-600 text-sm">Si votre marque cible les femmes, les œil-de-chat sont le complément parfait des wayfarer. Montures acétate aux pointes relevées avec un style rétro-glamour.</p>
              </Link>
              <Link href="/fr/produits/polarise" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Polarisées</h3>
                <p className="text-gray-600 text-sm">Ajoutez des verres polarisés à n&apos;importe quelle wayfarer pour une montée en gamme. Coûte 2-3 $ de plus par paire, vous permet de facturer 15-20 $ de plus au détail.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à Commander des Wayfarer ?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Dites-nous quelles couleurs et spécifications vous souhaitez et nous vous enverrons un devis sous 24 heures.
              Les échantillons sont expédiés en 3-5 jours. Aucun engagement tant que vous n&apos;avez pas donné le feu vert.
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
