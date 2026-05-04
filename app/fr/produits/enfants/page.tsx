import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes de Soleil Enfants en Gros | Fabricant de Lunettes Protection UV Enfants - EyeView',
  description: 'Fabricant de lunettes de soleil enfants en gros. Lunettes enfants sûres, sans BPA, certifiées CPSIA et EN71 pour 0-12 ans. Montures flexibles incassables, protection UV400. MOQ 100 pcs.',
  keywords: 'lunettes enfants en gros, fabricant lunettes enfants, lunettes bébé en gros, lunettes tout-petits, lunettes jeunesse en gros, lunettes protection UV enfants, lunettes sans BPA enfants, lunettes certifiées CPSIA',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/enfants',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/kids',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/enfants',
    },
  },
}

const products = [
  {
    name: 'Lunettes Bébé (0-3 ans)',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$5.50 - $8.50',
    moq: '100 pcs',
    description: 'Soyons honnêtes — les bébés mâchent tout. C\u2019est pourquoi ces montures sont fabriquées en silicone alimentaire, le même matériau que les tétines de biberons. Vous pourriez littéralement les mettre dans votre bouche (votre bébé le fera). Entièrement sans BPA, sans phtalates, et assez souples pour ne pas piquer ni pincer. La sangle ajustable les maintient en place même quand votre petit est déterminé à les arracher. Ce qu\u2019il fera. À répétition.',
  },
  {
    name: 'Lunettes Tout-Petits (3-5 ans)',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$6.00 - $9.00',
    moq: '100 pcs',
    description: 'Vous savez ce qui arrive aux lunettes de soleil des tout-petits ? Elles sont écrasées, piétinées, lancées à travers la pièce et enterrées dans le bac à sable. C\u2019est pourquoi nous les fabriquons en TPE — un matériau flexible qui se plie, se tord et subit toutes sortes de mauvais traitements, puis reprend sa forme d\u2019origine. Disponibles en plus de 15 couleurs parce qu\u2019apparemment chaque enfant de 4 ans a un avis très tranché sur sa couleur préférée. (C\u2019est généralement le rose. Ou le vert dinosaure.)',
  },
  {
    name: 'Lunettes Sport Enfants (6-9 ans)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pcs',
    description: 'Pour l\u2019enfant qui est toujours dehors — entraînement de foot, cours de natation, balades à vélo dans le quartier. Ce sont des versions réduites de nos montures sport adultes avec des montures flexibles TR90 et une couverture enveloppante. Option polarisée disponible pour les sorties plage et les jours de neige. Une ligue sportive jeunesse en Californie a commandé 800 paires l\u2019an dernier pour leur programme d\u2019été. Leur retour : « Enfin, des lunettes de sport qui vont vraiment aux enfants. »',
  },
  {
    name: 'Œil de Chat Mode Fille (6-10 ans)',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pcs',
    description: 'Mini œil de chat pour les filles qui veulent ressembler à Maman (ou à leur YouTubeuse préférée). Accents scintillants, couleurs pastel, décorations en cœur sur les branches — tout ce qui fait dire à une fille de 7 ans « JE LES ADORE ! ». Mêmes normes de sécurité que toutes nos montures enfants, juste avec beaucoup plus de paillettes. Ce sont des stars absolues dans les boutiques enfants et les magasins de resorts balnéaires.',
  },
  {
    name: 'Aviateur Garçon (8-12 ans)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.00',
    moq: '100 pcs',
    description: 'Pour le préado qui se croit trop cool pour les lunettes « de petit ». Ces aviateurs ont un look adulte mais sont dimensionnés pour les jeunes visages (49-52mm de largeur de verre). Monture métallique légère avec charnières à ressort qui s\u2019adaptent aux différentes tailles de tête au fur et à mesure que les enfants grandissent. Verres en polycarbonate résistant aux chocs pour le skateboard, le vélo et tout ce que les garçons de 10 ans inventent. (Spoiler : ça implique généralement de sauter de choses.)',
  },
  {
    name: 'Sport Polarisé Enfants',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Pour les jeunes athlètes qui prennent leur sport au sérieux. Les verres polarisés TAC coupent l\u2019éblouissement de l\u2019eau, de la neige et du bitume — une vraie différence pour les enfants qui nagent, skient ou pêchent avec papa. Ce sont nos montures premium pour enfants et celles que les parents demandent spécifiquement quand ils veulent la meilleure protection que l\u2019argent puisse offrir. Une école de natation à Sydney les utilise exclusivement pour ses cours en plein air.',
  },
]

export default function KidsPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d&apos;Ariane */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes Enfants</span>
        </nav>

        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes de Soleil Enfants en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les parents ne plaisantent pas quand il s&apos;agit des yeux de leurs enfants. Nous non plus.
            Chaque paire est sans BPA, certifiée UV400 et conforme aux normes de sécurité CPSIA, ASTM F963 et EN71.
            Montures flexibles qui survivent au chaos des tout-petits. Protection UV réelle
            — pas juste du plastique teinté. Âges 0-12, à partir de 5,50 $.
          </p>
        </div>

        {/* Image Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop"
            alt="Lunettes de Soleil Enfants en Gros - Protection UV Sûre pour Enfants de 0 à 12 ans"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Pourquoi c&apos;est important */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Ce que la plupart des parents ne savent pas</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Les yeux d&apos;un enfant laissent passer beaucoup plus de rayonnement UV que les yeux d&apos;un adulte. Beaucoup plus. Avant
              l&apos;âge de 10 ans, le cristallin d&apos;un enfant transmet plus de 75 % des rayons UV-A et 70 % des rayons UV-B directement
              sur la rétine. Le cristallin d&apos;un adulte ? Seulement environ 10 %. Cela signifie que les yeux de votre enfant
              absorbent environ 6 à 7 fois plus de dommages UV le même jour ensoleillé. Et voici le
              plus inquiétant — l&apos;<a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">OMS indique que jusqu&apos;à 80 %</a> de l&apos;exposition UV à vie d&apos;une personne se produit
              avant 18 ans.
            </p>
            <p>
              Alors quand un parent achète ces jolies lunettes de soleil fantaisie à 2 $ dans un magasin discount ?
              Ces verres teintés foncés pourraient en fait aggraver les choses. Les verres
              foncés sans véritable protection UV font dilater les pupilles, laissant entrer encore plus
              de rayonnement nocif que pas de lunettes du tout. C&apos;est un problème. Un vrai.
            </p>
            <p>
              C&apos;est exactement pourquoi nous prenons les lunettes pour enfants si au sérieux. Chaque paire que nous
              fabriquons est testée en laboratoire pour la conformité UV400 — ce qui signifie qu&apos;elles bloquent 99,9 % du
              rayonnement UV jusqu&apos;à 400 nanomètres. Nous fournissons les rapports de test. Nous avons les
              certifications. Quand un parent prend une paire de nos lunettes pour enfants, il
              peut avoir confiance que les yeux de son enfant sont réellement protégés. Pas juste ombragés.
              Protégés.
            </p>
          </div>
        </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop" alt="Lunettes de Soleil Enfants en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Grille Produits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Collection Enfants</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Matériaux sûrs sans BPA</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Monture flexible incassable</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Protection UV400 100 %</li>
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

        {/* Certifications de Sécurité */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications auxquelles les parents peuvent faire confiance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">CPSIA</h3>
              <p className="text-sm text-gray-600">La norme la plus importante pour le marché américain. Plomb en dessous de 100 ppm, zéro phtalates. Si vous vendez des produits pour enfants en Amérique, <a href="https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">ce n&apos;est pas optionnel — c&apos;est la loi</a>. C&apos;est couvert.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">ASTM F963</h3>
              <p className="text-sm text-gray-600">La norme de sécurité des jouets américaine. Tests pour les risques mécaniques (bords tranchants, petites pièces), l&apos;inflammabilité et les produits chimiques toxiques. Nos montures passent les trois sections.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold mb-2">EN71</h3>
              <p className="text-sm text-gray-600">La norme européenne de sécurité des jouets. Trois parties couvrant la sécurité mécanique, l&apos;inflammabilité et la migration d&apos;éléments toxiques. Obligatoire pour la vente dans l&apos;UE.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-2">CE et FDA</h3>
              <p className="text-sm text-gray-600">CE pour l&apos;Europe, FDA pour le marché optique américain. Les deux vérifient que nos déclarations de protection UV sont réelles — pas juste des autocollants marketing sur des montures bon marché.</p>
            </div>
          </div>
        </section>

        {/* Matériaux */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">De quoi sont-elles faites ? (Les parents demandent toujours)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🍼 Silicone alimentaire (0-3 ans)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le même matériau que les tétines de biberons et les anneaux de dentition. Si c&apos;est assez sûr pour
                aller dans la bouche d&apos;un bébé — et ça ira dans sa bouche, c&apos;est garanti — c&apos;est assez sûr
                pour des lunettes. Infiniment pliables, incroyablement souples, sans BPA, sans phtalates,
                sans PVC, sans latex. N&apos;irritent pas la peau sensible du bébé. Nous avons conçu celles-ci
                pour le parent qui s&apos;inquiète de tout. (On comprend. Nous sommes parents aussi.)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔄 Montures flexibles TPE (3-8 ans)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le TPE (élastomère thermoplastique) est l&apos;équivalent matériau de &quot;essaie de me casser,
                je te mets au défi.&quot; Pliez-le. Tordez-le. Asseyez-vous dessus. Lancez-le depuis une
                poussette en mouvement. Il rebondit immédiatement. Nous les avons testées pour survivre à des chutes de
                1,5 mètre (à peu près la hauteur d&apos;une table) et à plus de 500 cycles de flexion. Parce que les tout-petits
                et les jeunes enfants trouveront des moyens de les tester qu&apos;aucun ingénieur n&apos;a jamais imaginés.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏃 Nylon TR90 (8-12 ans)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pour les enfants plus grands qui font du sport, du vélo et qui sont généralement
                durs avec tout ce qu&apos;ils possèdent. Le TR90 est 35 % plus léger que le plastique ordinaire,
                fléchit sans casser et supporte des températures de -40 °C à 120 °C (donc
                oui, il survit à un oubli dans une voiture en plein soleil). Hypoallergénique aussi — pas de marques rouges
                qui grattent derrière les oreilles après une longue journée dehors.
              </p>
            </div>
          </div>
        </section>

        {/* Guide des Tailles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Guide des tailles par âge</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Âge</th>
                  <th className="p-4 text-left font-semibold">Largeur verre</th>
                  <th className="p-4 text-left font-semibold">Pont</th>
                  <th className="p-4 text-left font-semibold">Branche</th>
                  <th className="p-4 text-left font-semibold">Matériau</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-semibold">Bébé (0-2)</td><td className="p-4 text-gray-600">36-40mm</td><td className="p-4 text-gray-600">10-12mm</td><td className="p-4 text-gray-600">Sangle</td><td className="p-4 text-gray-600">Silicone alimentaire</td></tr>
                <tr><td className="p-4 font-semibold">Tout-petit (2-4)</td><td className="p-4 text-gray-600">40-44mm</td><td className="p-4 text-gray-600">12-14mm</td><td className="p-4 text-gray-600">105-115mm</td><td className="p-4 text-gray-600">Silicone / TPE</td></tr>
                <tr><td className="p-4 font-semibold">Enfant (4-7)</td><td className="p-4 text-gray-600">44-48mm</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">115-125mm</td><td className="p-4 text-gray-600">TPE / TPEE</td></tr>
                <tr><td className="p-4 font-semibold">Junior (7-10)</td><td className="p-4 text-gray-600">48-52mm</td><td className="p-4 text-gray-600">15-17mm</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">TR90 / PC</td></tr>
                <tr><td className="p-4 font-semibold">Jeune (10-12)</td><td className="p-4 text-gray-600">52-56mm</td><td className="p-4 text-gray-600">16-18mm</td><td className="p-4 text-gray-600">130-140mm</td><td className="p-4 text-gray-600">TR90 / Acétate</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Caractéristiques de Sécurité */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Conçues pour de vrais enfants, pas des enfants soigneux</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🛡️" title="Zéro produit chimique nocif" description="Sans BPA. Sans phtalates. Sans PVC. Sans plomb. Nous testons tout ce qui préoccupe les parents." />
            <FeatureCard icon="🔄" title="Essayez de les casser" description="Pliez-les. Tordez-les. Marchez dessus. Elles rebondissent. Nous défions votre tout-petit de les détruire." />
            <FeatureCard icon="☀️" title="Vrai UV400" description="Testé en laboratoire, pas juste déclaré sur l&apos;étiquette. Nous fournissons les rapports de test. Les enfants de vos clients sont véritablement protégés." />
            <FeatureCard icon="💪" title="Verres incassables" description="Verres en polycarbonate qui ne se brisent pas aux chocs. Parce que les enfants tombent. Beaucoup." />
          </div>
        </section>

        {/* Liens Internes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produits associés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/sport" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Lunettes Sport</h3>
              <p className="text-sm text-gray-600">Montures sport adultes — parents et enfants peuvent être assortis !</p>
            </Link>
            <Link href="/fr/produits/polarise" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Options Polarisées</h3>
              <p className="text-sm text-gray-600">Protection premium contre l&apos;éblouissement pour la plage et la neige</p>
            </Link>
            <Link href="/fr/produits/lumiere-bleue" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Lunettes Lumière Bleue Enfants</h3>
              <p className="text-sm text-gray-600">Protection d&apos;écran pour les tablettes et l&apos;école en ligne</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions de parents (nous les recevons tous les jours)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="À partir de quel âge peut-on mettre des lunettes de soleil ?"
              answer="L&apos;Académie américaine d&apos;ophtalmologie recommande à partir de 6 mois. Avant cela, gardez les bébés à l&apos;ombre avec des chapeaux et des pare-soleil de poussette. Mais dès 6 mois et du temps passé en extérieur, leurs yeux ont besoin de protection UV. Nous savons que ça semble tôt — mais rappelez-vous, leurs petits yeux laissent passer 6 à 7 fois plus d&apos;UV que les vôtres. Plus tôt on commence, mieux c&apos;est."
            />
            <FaqItem
              question="Ces lunettes protègent-elles vraiment ou sont-elles juste jolies ?"
              answer="Les deux ! Mais la protection passe en premier. Chaque paire bloque 99,9 % du rayonnement UV jusqu&apos;à 400 nanomètres — vérifié par des tests de laboratoire indépendants. Nous vous enverrons les rapports de test si vous le souhaitez. Méfiez-vous des lunettes enfants bon marché qui ne sont que du plastique teinté foncé sans filtre UV. Celles-ci aggravent en fait les choses en dilatant les pupilles et en laissant entrer plus de rayons nocifs. Nos lunettes sont jolies ET sûres."
            />
            <FaqItem
              question="Mon enfant détruit tout. Celles-ci vont-elles survivre ?"
              answer="C&apos;est littéralement pour cela que nous les avons conçues. Les montures en silicone bébé ? Infiniment pliables. Les montures TPE pour tout-petits ? Nous les avons testées pour survivre à plus de 500 cycles de flexion et des chutes de 1,5 mètre. Les montures TR90 pour les plus grands ? Pliez-les à 90 degrés — elles reprennent leur forme immédiatement. Nous ne pouvons pas promettre qu&apos;elles sont 100 % indestructibles (les enfants sont créatifs), mais ce sont les montures les plus résistantes que nous savons fabriquer."
            />
            <FaqItem
              question="Quelles certifications ont-elles ? J&apos;ai besoin de savoir pour ma boutique."
              answer="Tout ce dont vous avez besoin : CPSIA (obligatoire pour les produits pour enfants aux États-Unis — plomb sous 100 ppm, zéro phtalates), ASTM F963 (sécurité des jouets US), EN71 (sécurité des jouets UE), marquage CE et normes optiques FDA. Nous fournissons les documents de certification complets avec chaque commande en gros. Si la douane pose des questions, vous aurez la documentation prête."
            />
            <FaqItem
              question="Puis-je personnaliser avec notre marque ou des personnages de dessins animés ?"
              answer="Tout à fait. Couleurs personnalisées (20+ standards plus correspondance Pantone), designs de personnages sur les branches, votre logo de marque, montures infusées de paillettes, branches phosphorescentes — vous n&apos;avez qu&apos;à demander. Le MOQ pour les designs personnalisés est de 300 pièces par style. Nous avons fait des collaborations de personnages sous licence, des designs de mascottes d&apos;école, et même des ensembles assortis parent-enfant. Envoyez-nous simplement votre idée et nous en ferons une maquette."
            />
            <FaqItem
              question="Les lunettes bébé sont-elles livrées avec des sangles ?"
              answer="Oui — sangles en néoprène détachables et ajustables, réglables de 14 cm à 18 cm. Douces sur la peau de bébé, suffisamment sécurisées pour rester sur un bébé qui gigote. Pour les montures tout-petits (3-5 ans), nous proposons des attaches de sangle optionnelles qui se clipsent et se déclipsent. La plupart des parents utilisent la sangle jusqu&apos;à environ 3-4 ans, puis passent aux branches classiques une fois que l&apos;enfant est assez grand pour les garder."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Protégez les petits yeux. Gagnez la confiance des parents.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiques enfants, magasins de jouets, cabinets pédiatriques, colonies de vacances, resorts balnéaires,
            magasins de fournitures scolaires — nos lunettes enfants se vendent partout où les parents font leurs achats. Documentation
            de sécurité complète incluse. Échantillons gratuits disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Obtenir le Catalogue Enfants</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes Enfants", "item": "https://eyeviewsunglasses.com/fr/produits/enfants" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "À partir de quel âge peut-on mettre des lunettes de soleil à un enfant ?",
            "acceptedAnswer": { "@type": "Answer", "text": "L\u2019Académie américaine d\u2019ophtalmologie recommande des lunettes de soleil avec protection UV dès 6 mois. Les yeux des enfants transmettent 6 à 7 fois plus de rayonnement UV que les yeux des adultes." }
          },
          {
            "@type": "Question",
            "name": "Les lunettes de soleil pour enfants protègent-elles vraiment ou sont-elles juste décoratives ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Chaque paire bloque 99,9 % du rayonnement UV jusqu\u2019à 400 nm, vérifié par des tests de laboratoire indépendants. Nous fournissons les rapports de test. Méfiez-vous des lunettes fantaisie bon marché sans véritable protection UV." }
          },
          {
            "@type": "Question",
            "name": "Ces lunettes vont-elles survivre à mon enfant ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Conçues pour ça. Les montures en silicone bébé sont infiniment pliables. Les montures TPE pour tout-petits survivent à plus de 500 cycles de flexion et des chutes de 1,5 m. Les montures TR90 pour les plus grands se plient à 90° sans casser." }
          },
          {
            "@type": "Question",
            "name": "Quelles certifications de sécurité ont ces lunettes pour enfants ?",
            "acceptedAnswer": { "@type": "Answer", "text": "CPSIA (plomb sous 100 ppm, zéro phtalates), ASTM F963, EN71, marquage CE et normes optiques FDA. Documents de certification complets fournis avec chaque commande en gros." }
          },
          {
            "@type": "Question",
            "name": "Puis-je personnaliser les lunettes enfants avec des logos de marque ou des personnages ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — couleurs personnalisées, designs de personnages, logos de marque, montures pailletées, branches phosphorescentes. MOQ pour les designs personnalisés : 300 pièces par style." }
          },
          {
            "@type": "Question",
            "name": "Les lunettes bébé sont-elles livrées avec des sangles de tête ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — sangles en néoprène détachables et ajustables (14-18 cm). Les montures tout-petits ont des sangles optionnelles à clipser. La plupart des parents utilisent les sangles jusqu\u2019à 3-4 ans." }
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
