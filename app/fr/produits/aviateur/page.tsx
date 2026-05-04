import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Aviateur en Gros | Fabricant de Lunettes Aviateur OEM - EyeView',
  description: 'Fabricant leader de lunettes de soleil aviateur en gros. Lunettes aviateur personnalisées avec gravure logo, montures métal, verres UV400/polarisés. MOQ 100 pcs. Direct usine. Demandez un devis !',
  keywords: 'lunettes aviateur en gros, fabricant lunettes aviateur, lunettes aviateur personnalisées, OEM lunettes aviateur, lunettes de soleil en gros, fabricant lunettes, montures métal en gros',
  openGraph: {
    title: 'Lunettes de Soleil Aviateur en Gros | Fabricant OEM - EyeView',
    description: 'Fabricant leader de lunettes de soleil aviateur en gros. Logo personnalisé, montures métalliques, verres UV400/polarisés. MOQ 100 pcs. Prix direct usine.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/aviateur',
    locale: 'fr_FR',
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
    question: 'Quelle est la commande minimum pour les lunettes aviateur en gros ?',
    answer: 'Seulement 100 pièces par modèle. Et voici le bon côté — vous pouvez mélanger au sein de ces 100. Vous pourriez donc faire 20 montures dorées avec des verres gris, 30 argentées avec du miroir bleu, et 50 noires avec du dégradé. Cela vous permet de tester quelles combinaisons vos clients achètent réellement au lieu de deviner. La plupart de nos clients aviateur commencent avec 200-300 pièces sur 2-3 combinaisons de couleurs, puis réapprovisionnent les gagnantes en plus grandes quantités.',
  },
  {
    question: 'Quelles options de métal proposez-vous pour les montures aviateur ?',
    answer: 'Trois principales. L\u2019acier inoxydable est notre option la plus populaire — robuste, beau, ne ternit pas, et coûte 8-12 $/paire. L\u2019alliage d\u2019aluminium est environ 40 % plus léger (idéal pour un port toute la journée), coûte 10-14 $/paire. Et puis il y a le bêta-titane pour le haut de gamme — hypoallergénique (l\u2019Organisation internationale de normalisation classe le titane comme matériau biocompatible selon la norme ISO 5832), incroyablement léger à 15-20 grammes, et quasiment impossible à casser. Le titane coûte 14-22 $/paire mais il vous permet de facturer 80-150 $+ au détail, donc les marges sont en fait meilleures. Tous peuvent être plaqués en or, argent, noir, or rose ou couleurs personnalisées.',
  },
  {
    question: 'Puis-je faire graver mon logo sur les lunettes aviateur ?',
    answer: 'Absolument, et honnêtement c\u2019est là que les aviateurs en métal brillent vraiment par rapport aux montures en plastique. La gravure laser est magnifique sur le métal — nette, permanente et élégante. Nous pouvons graver à l\u2019intérieur ou à l\u2019extérieur des branches. Si vous voulez quelque chose de plus audacieux, nous faisons des badges métalliques 3D (alliage de zinc ou acier inoxydable) soudés directement sur la branche ou le pont. Il y a aussi l\u2019impression sur verre pour des logos discrets dans le coin et les plaquettes nasales personnalisées gravées si vous voulez vraiment aller au bout du branding.',
  },
  {
    question: 'Proposez-vous des verres polarisés pour les aviateurs ?',
    answer: 'Oui, et je les recommande vivement. Nos verres polarisés TAC utilisent un film 7 couches qui élimine 99 % de l\u2019éblouissement — la différence est radicale, surtout pour la conduite. Voici l\u2019argument commercial : les aviateurs polarisés se vendent 25 à 40 % plus cher au détail que les UV400 standard. Donc une paire qui se vend 40 $ sans polarisation peut facilement se vendre 50-55 $ avec polarisation. Nous faisons également des verres photochromiques (qui s\u2019assombrissent au soleil), des revêtements miroir, des revêtements antireflet et des teintes dégradées. Mélangez et combinez comme vous voulez.',
  },
  {
    question: 'Quelle est la différence entre aviateurs et wayfarers pour la vente en gros ?',
    answer: 'Bonne question — on nous la pose souvent. En résumé : les aviateurs sont en métal, les wayfarers en acétate/plastique. Cela signifie que les aviateurs coûtent un peu plus par paire (8-14 $ vs 5-11 $) mais ils dégagent aussi une sensation plus premium. Les aviateurs tendent à être légèrement plus masculins et bénéficient de cet héritage militaire/pilote. Les wayfarers sont plus unisexes et disponibles dans beaucoup plus de couleurs. Honnêtement ? La plupart des marques à succès proposent les deux. Si vous devez en choisir un, aviateurs si vous visez un positionnement premium, wayfarers si vous voulez du volume.',
  },
  {
    question: 'Quel emballage puis-je obtenir avec ma commande d\u2019aviateurs ?',
    answer: 'Nous proposons toute la gamme. La configuration la plus populaire est un étui rigide avec votre marque (EVA avec votre logo imprimé) plus une pochette microfibre qui sert aussi de chiffon de nettoyage. Cela revient à environ 1,50-2,50 $ par ensemble selon les matériaux. Nous faisons aussi des étuis en cuir, des boîtes métalliques, des boîtes en carton personnalisées avec impression couleurs, des cartes de garantie et des étiquettes. Pour les gammes premium, certains clients optent pour des boîtes à fermeture magnétique ou même des étuis en bois. Le MOQ emballage est de 500 pièces — mais vous pouvez utiliser un emballage générique pour votre première petite commande et passer au personnalisé au réapprovisionnement.',
  },
]

const products = [
  {
    name: 'Aviateur Or Classique',
    description: 'C\u2019est celui que tout le monde imagine quand on dit « aviateur ». Acier inoxydable ton or poli, forme en goutte d\u2019eau, verres teintés vert G-15 qui coupent l\u2019éblouissement sans rendre les couleurs bizarres. La finition dorée est revêtue PVD (pas de la peinture bon marché) donc elle résiste à l\u2019usage quotidien. Nous en vendons plus que tout autre SKU — et la plupart de nos clients disent la même chose. Si vous lancez une marque de lunettes et voulez un pari sûr, c\u2019est celui-ci.',
    price: '$8.50 - $12.00',
    moq: '100 pcs',
    features: ['Acier Inoxydable', 'Verre Vert G-15', 'Finition Or PVD', 'Plaquettes Silicone'],
  },
  {
    name: 'Aviateur Miroir Argent',
    description: 'Monture argentée, verres miroir argent — le genre de lunettes qu\u2019on voit à chaque vacances à la plage. Le revêtement miroir réfléchit environ 60 % de la lumière entrante, ce qui les rend véritablement efficaces en conditions lumineuses (pas seulement stylées). La monture est en acier inoxydable plaqué rhodium qui ne ternira pas même dans l\u2019air salin côtier. Les charnières à ressort leur donnent un peu de flexibilité pour s\u2019adapter à différentes tailles de tête sans serrer trop ou pas assez. Gros vendeur pour les marques balnéaires et les boutiques de plage.',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    features: ['Plaqué Rhodium', 'Revêtement Miroir', 'Charnières à Ressort', 'Résistant à la Corrosion'],
  },
  {
    name: 'Aviateur Stealth Noir Mat',
    description: 'Pour les marques qui visent un look tactique, sans fioritures. L\u2019électrodéposition mate donne à la monture une surface complètement non réfléchissante — une sensation très différente de l\u2019or ou de l\u2019argent brillant. Associés à des verres fumés foncés qui bloquent 85 % de la lumière visible, ce sont de véritables protections solaires. Nous voyons beaucoup de commandes de marques outdoor, d\u2019entreprises de fournitures pour les forces de l\u2019ordre et de marques de mode masculine. Les embouts de branches renforcés sont un plus appréciable — ils agrippent sans glisser même quand vous transpirez.',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    features: ['Finition Mate', 'Verre Fumé Foncé', 'Embouts Renforcés', 'Non Réfléchissant'],
  },
  {
    name: 'Aviateur Mode Or Rose',
    description: 'L\u2019or rose est la finition tendance depuis environ cinq ans et ne montre aucun signe de ralentissement. Le ton rose-doré chaud se photographie magnifiquement (crucial pour les marques qui vendent via Instagram), et il flatte pratiquement tous les tons de peau. Nous les associons à des verres dégradés roses — foncés en haut, clairs en bas — ce qui leur donne ce look mode sans effort. Fabriqués en alliage d\u2019aluminium pour un poids sous les 25 grammes. Si votre cliente est une femme de 22 ans qui achète sur son téléphone, c\u2019est sur ça qu\u2019elle clique.',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    features: ['Alliage d\u2019Aluminium', 'Verre Dégradé Rose', 'Moins de 25g', 'Ton Or Rose'],
  },
  {
    name: 'Aviateur Polarisé Miroir Bleu',
    description: 'Verres miroir bleu océan vif avec une véritable polarisation en dessous — ils sont donc superbes ET fonctionnent réellement. Le film polarisé TAC bloque 99 % de l\u2019éblouissement réfléchi par l\u2019eau, les routes et la neige. La monture gunmetal garde l\u2019attention sur ces verres. C\u2019est notre recommandation pour les clients qui vendent au public côtier/surf/pêche. Ils se photographient bien, ils performent bien, et ils justifient un prix de détail plus élevé grâce à la polarisation. Coûte environ 2-3 $ de plus par paire que le non-polarisé, mais vous pouvez facturer 15-20 $ de plus au détail.',
    price: '$11.00 - $15.00',
    moq: '100 pcs',
    features: ['Polarisé TAC', 'Miroir Bleu', 'Monture Gunmetal', '99 % Réduction Éblouissement'],
  },
  {
    name: 'Aviateur Premium en Titane',
    description: 'Le sommet de notre gamme aviateur. Monture en bêta-titane qui pèse 15 grammes — vous la sentez à peine sur le visage. Le titane est hypoallergénique (sans nickel, sans réaction), résistant à la corrosion, et on peut le plier, il reprend sa forme immédiatement. Nous les associons à des verres optiques CR-39 antireflet — le même grade que celui des montures de créateurs à 200 $+. C\u2019est pour les marques qui veulent rivaliser au sommet du marché. Votre prix de détail peut facilement être 80-150 $+, et le coût unitaire n\u2019est que de 14-22 $. Faites le calcul sur ces marges.',
    price: '$14.00 - $22.00',
    moq: '100 pcs',
    features: ['Bêta-Titane', 'Verre Optique CR-39', 'Antireflet', 'Seulement 15 Grammes'],
  },
]

export default function AviatorPageFr() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil Aviateur en Gros',
        description: 'Lunettes de soleil aviateur classiques en forme de goutte d\u2019eau avec montures métalliques. Disponibles en acier inoxydable, alliage d\u2019aluminium et titane. Options de verres UV400 et polarisés. Personnalisation OEM complète avec gravure logo.',
        minPrice: '8.50',
        maxPrice: '22.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes Aviateur', url: 'https://eyeviewsunglasses.com/fr/produits/aviateur' }
      ]} />
      <FAQPageSchema faqs={aviatorFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fil d&apos;Ariane */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes Aviateur</span>
          </nav>

          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lunettes de Soleil Aviateur en Gros
            </h1>
          </div>

          {/* Image Hero */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
              alt="Lunettes de Soleil Aviateur en Gros - Fabricant OEM de Montures Métalliques Personnalisées"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Présentation / Vue d&apos;ensemble */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Voici un fait historique amusant : l&apos;aviateur n&apos;était jamais censé être un accessoire de mode. En 1936, <a href="https://www.bausch.com/our-company/history/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bausch &amp; Lomb</a> a obtenu un contrat de l&apos;Army Air Corps américain pour concevoir des lunettes de soleil pour les pilotes militaires. Le problème était spécifique — les pilotes volaient plus haut et plus vite que jamais, et le soleil détruisait leur vision. La solution ? Un grand verre en forme de goutte d&apos;eau couvrant toute l&apos;orbite, une fine monture métallique qui ne pesait presque rien sous un casque de vol, et un double pont nasal pour répartir la pression. Ils les ont appelées &ldquo;aviateurs&rdquo; parce que, eh bien, c&apos;est qui les portait.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Puis la Seconde Guerre mondiale est arrivée, et soudain des millions de soldats les portaient. Quand ils sont rentrés chez eux, ils ont continué à les porter. Dans les années 60 et 70, les aviateurs sont passés du cockpit à Hollywood — portés par tout le monde, de Paul Newman au casting de Top Gun. Le style s&apos;est tout simplement imposé. Près de 90 ans plus tard, le design de base n&apos;a pratiquement pas changé, et les aviateurs restent l&apos;une des trois formes de lunettes de soleil les plus vendues au monde. Ce n&apos;est pas une tendance — c&apos;est un classique.
              </p>
              <p className="text-lg leading-relaxed">
                Nous produisons plus de 200 000 paires de <strong>lunettes aviateur personnalisées</strong> par an pour des marques dans plus de 50 pays. Notre usine exploite des lignes de production dédiées aux montures métalliques avec usinage CNC, électrodéposition PVD et montage de verres de précision. Que vous ayez besoin de 100 paires pour tester un nouveau marché ou de 50 000 paires pour un déploiement national en magasin, nous avons la capacité et l&apos;expérience. Et comme les aviateurs sont notre spécialité, nous maîtrisons le processus — ce qui signifie une production plus rapide, moins de défauts et de meilleurs prix.
              </p>
            </div>
          </div>

          {/* Grille Produits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Notre Collection Aviateur</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
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
                      ['Matériau de la Monture', 'Acier inoxydable / Alliage d\u2019aluminium / Bêta-titane'],
                      ['Poids de la Monture', 'Acier : 28-32g | Aluminium : 18-22g | Titane : 15-18g'],
                      ['Matériau des Verres', 'Polycarbonate / TAC Polarisé / CR-39 Optique / Verre minéral'],
                      ['Largeur de Verre', '55mm / 58mm / 60mm / 62mm'],
                      ['Largeur du Pont', '14mm / 15mm / 16mm / 18mm'],
                      ['Longueur des Branches', '135mm / 140mm / 145mm'],
                      ['Hauteur de Verre', '48mm - 52mm (forme goutte d\u2019eau)'],
                      ['Protection UV', 'UV400 — bloque 100 % des UVA (315-380nm) et UVB (280-315nm)'],
                      ['Polarisation', 'Film TAC 7 couches en option — 99 % de réduction de l\u2019éblouissement'],
                      ['Couleurs de Monture', 'Or, Argent, Gunmetal, Noir mat, Or rose, ou PVD personnalisé'],
                      ['Couleurs de Verres', 'Gris, Vert G-15, Brun, Bleu, Rose, Miroir, Dégradé'],
                      ['Plaquettes Nasales', 'Silicone ajustable avec bras en titane'],
                      ['Charnières', 'Barillets standard ou à ressort (ajustement flexible)'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001 — documents disponibles sur demande'],
                      ['MOQ', '100 pièces par modèle — mélange de couleurs autorisé'],
                      ['Délai d\u2019Échantillon', '3-5 jours ouvrables'],
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

          {/* Comparaison des Matériaux de Monture */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Choisir le bon métal pour vos aviateurs</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              C&apos;est l&apos;une des premières décisions que vous prendrez, et elle affecte tout — le coût, le poids, la durabilité et le niveau de premium que votre produit dégage en main. Voici l&apos;analyse honnête.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔩</div>
                <h3 className="text-xl font-bold mb-3">Acier inoxydable</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Notre option la plus populaire et ce que nous recommandons à la plupart des marques. Nous utilisons de l&apos;<a href="https://en.wikipedia.org/wiki/SAE_304_stainless_steel" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acier grade 304 ou 316L</a> — le même que dans les bonnes montres. Il est solide, ne corrode pas et prend magnifiquement le placage. Or, argent, noir, or rose — tout est beau sur l&apos;acier et tient dans le temps. Le poids (28-32g) joue en fait en votre faveur car les clients associent cette légère heftiness à la qualité. Idéal pour les marques vendant entre 20 et 60 $ au détail.
                </p>
                <div className="text-primary-600 font-bold">8 - 12 $ / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🪶</div>
                <h3 className="text-xl font-bold mb-3">Alliage d&apos;aluminium</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si vos clients se soucient du confort — et surtout s&apos;ils portent des lunettes toute la journée — l&apos;aluminium vaut la mise à niveau. À 18-22g, il est nettement plus léger que l&apos;acier. Nous utilisons de l&apos;<a href="https://en.wikipedia.org/wiki/6061_aluminium_alloy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">alliage 6061-T6 ou 7075 de qualité aéronautique</a> (le même que dans les fuselages d&apos;avions, si vous cherchez un argument de vente). Les montures peuvent être anodisées dans pratiquement n&apos;importe quelle couleur, et la finition est vraiment durable. Idéal pour les marques outdoor, les gammes athleisure et la fourchette de prix 40-80 $ au détail.
                </p>
                <div className="text-primary-600 font-bold">10 - 14 $ / paire</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Titane</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Le choix prestige. Le bêta-titane à 15-18g est presque comiquement léger — les gens les mettent et disent immédiatement &ldquo;ouah&rdquo;. Il est 100 % hypoallergénique (pas du tout de nickel), ce qui est un vrai argument de vente pour les peaux sensibles. Et la flexibilité est incroyable — on peut plier les branches presque à plat et elles reprennent leur forme. L&apos;inconvénient ? Ça coûte plus cher. Mais voici le truc : le titane vous permet de vendre au détail à 80-200 $+ sans sourciller. Les marges par paire sont souvent meilleures qu&apos;avec des montures moins chères.
                </p>
                <div className="text-primary-600 font-bold">14 - 22 $ / paire</div>
              </div>
            </div>
          </section>

          {/* Options de Verres */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Options de verres</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              La monture attire l&apos;attention, mais le verre est ce à travers quoi votre client regarde chaque jour. Voici ce que nous proposons.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Polycarbonate (PC)</h3>
                <p className="text-sm text-gray-600">Le standard. Résistant aux chocs, léger, incassable — 10 fois plus solide que le verre. Convient à tout, du port décontracté au sport. Toutes nos couleurs et revêtements miroir sont disponibles en PC. C&apos;est ce que 70 % de nos clients utilisent.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">TAC Polarisé</h3>
                <p className="text-sm text-gray-600">Sept couches de film polarisé prises en sandwich entre du PC. Élimine 99 % de l&apos;éblouissement réfléchi. L&apos;amélioration qui justifie de facturer plus. Ajoute environ 2-3 $ au coût par paire mais permet de facturer 15-20 $ de plus au détail. Ça vaut le coup.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">CR-39 Optique</h3>
                <p className="text-sm text-gray-600">Si vous voulez rivaliser avec les grandes marques sur la qualité de verre, c&apos;est le choix. Un nombre d&apos;Abbe de 58 signifie une optique d&apos;une netteté absolue sans distorsion. Résistant aux rayures. Plus léger que le verre minéral. Le choix pour le positionnement premium.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Photochromique</h3>
                <p className="text-sm text-gray-600">S&apos;assombrit au soleil, s&apos;éclaircit en intérieur. Passe de la Catégorie 1 à la Catégorie 3 en environ 30 secondes. Un bon tour et un bon argument de vente pour les clients qui veulent une paire pour tout. Ajoute environ 3-4 $ par paire.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Verre minéral</h3>
                <p className="text-sm text-gray-600">Classique, mais certains marchés l&apos;adorent. Meilleure clarté optique, plus résistant aux rayures, le plus lourd. Populaire en Europe et au Japon où les verres minéraux véhiculent une perception premium. Nous pouvons faire du verre minéral dans toutes les teintes standard.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Revêtements disponibles</h3>
                <p className="text-sm text-gray-600">Miroir (argent, bleu, or, rouge, vert, violet), antireflet, hydrophobe (repousse l&apos;eau), oléophobe (résiste aux traces de doigts), et antibuée. Combinez-les comme vous voulez.</p>
              </div>
            </div>
          </section>

          {/* Personnalisation */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Faites-en les vôtres</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              C&apos;est ici que vous transformez une belle paire de lunettes en VOTRE produit. Voici tout ce que nous pouvons personnaliser.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Travail de Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Gravure laser</strong> — notre option la plus populaire. Nette, permanente, magnifique sur le métal. Intérieur ou extérieur de la branche.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Badge métallique</strong> — un petit badge 3D en alliage de zinc ou acier soudé sur la branche. Fait cher.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impression sur verre</strong> — petit logo sérigraphié dans le coin du verre. Subtil mais visible.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Plaquettes nasales personnalisées</strong> — votre logo gravé ou imprimé sur les plaquettes en silicone. Un beau détail.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Couleurs</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Monture :</strong> Or, Argent, Noir, Gunmetal, Or rose — ou donnez-nous un code Pantone et nous le reproduisons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Teintes de verres :</strong> Gris, Vert, Brun, Bleu, Rose, Jaune, Rouge — ou correspondance personnalisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Miroir :</strong> Argent, Bleu, Or, Rouge, Vert, Violet, Rose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Dégradé :</strong> Fondu du haut vers le bas dans n&apos;importe quelle couleur de verre</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Emballage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Étuis rigides :</strong> EVA à fermeture éclair, cuir magnétique, ou boîte métallique — tous avec votre logo imprimé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Pochettes souples :</strong> Microfibre à cordon avec logo — sert aussi de chiffon de nettoyage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Boîtes retail :</strong> Carton imprimé en couleurs, inserts personnalisés, languettes de suspension</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras :</strong> Chiffons de nettoyage, cartes de garantie, étiquettes, autocollants — tout marqué à votre marque</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Qui achète */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Qui achète des aviateurs en gros ?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Nous expédions des aviateurs à un éventail assez large d&apos;entreprises. Voici les plus courantes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏪 Propriétaires de marques de lunettes</h3>
                <p className="text-gray-300 text-sm">Marques débutantes et établies qui construisent leur gamme de produits. Les aviateurs sont généralement le premier style qu&apos;ils lancent — ils sont sûrs, ils se vendent et ils rendent bien en photos marketing.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🛍️ Boutiques</h3>
                <p className="text-gray-300 text-sm">Boutiques, magasins de surf, opticiens et acheteurs de grands magasins cherchant leur propre marque maison. Notre minimum de 100 pièces permet aux petites boutiques de se lancer sans gros risque.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🌐 Vendeurs en ligne</h3>
                <p className="text-gray-300 text-sm">Vendeurs Amazon, Shopify, Etsy qui ont besoin de produits de qualité avec des marges qui fonctionnent pour le e-commerce. Nous pouvons fournir des photos produits et des descriptions pour accélérer la mise en ligne.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🎁 Corporate et Promotionnel</h3>
                <p className="text-gray-300 text-sm">Entreprises commandant des aviateurs personnalisés pour des salons professionnels, des tournois de golf, des cadeaux d&apos;équipe et des événements. Valeur perçue élevée à un prix qui fonctionne pour les budgets promotionnels.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏨 Hôtels et Resorts</h3>
                <p className="text-gray-300 text-sm">Marques hôtelières proposant des aviateurs personnalisés comme amenités ou articles de boutique. L&apos;emballage personnalisé avec le nom du resort crée un beau souvenir que les clients gardent vraiment.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">📦 Distributeurs</h3>
                <p className="text-gray-300 text-sm">Grossistes régionaux approvisionnant plusieurs détaillants. Nos prix volume à partir de 1 000 et 5 000 pièces donnent aux distributeurs les marges nécessaires pour servir leurs comptes.</p>
              </div>
            </div>
          </section>

          {/* Section FAQ */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ Lunettes Aviateur</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {aviatorFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Produits Associés */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Vous pourriez aussi aimer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/produits/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Wayfarer</h3>
                <p className="text-gray-600 text-sm">L&apos;autre style &ldquo;incontournable&rdquo;. Montures en acétate, des tonnes de couleurs, et la forme la plus vendue au monde. La plupart des marques proposent à la fois des aviateurs et des wayfarers.</p>
              </Link>
              <Link href="/fr/produits/polarise" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Polarisées</h3>
                <p className="text-gray-600 text-sm">Ajoutez des verres polarisés à n&apos;importe quel aviateur pour une amélioration premium. 99 % de réduction de l&apos;éblouissement, 25-40 % de prix retail en plus. Le moyen le plus simple de booster vos marges.</p>
              </Link>
              <Link href="/fr/produits/sport" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lunettes Sport</h3>
                <p className="text-gray-600 text-sm">Si vos clients ont besoin de quelque chose de plus résistant que les aviateurs — montures enveloppantes TR90 avec grip antidérapant pour la course, le cyclisme et les sports en plein air.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commander des aviateurs ?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Dites-nous ce dont vous avez besoin — style, quantité, personnalisations — et nous vous répondrons sous 24 heures avec les prix.
              Les échantillons sont expédiés en 3-5 jours. Aucun engagement tant que vous n&apos;êtes pas prêt.
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
