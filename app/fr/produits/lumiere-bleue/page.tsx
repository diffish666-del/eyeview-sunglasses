import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lunettes Anti Lumière Bleue en Gros | Fabricant de Lunettes Ordinateur - EyeView',
  description: 'Fabricant de lunettes anti lumière bleue en gros. Lunettes ordinateur, lunettes gaming pour soulager la fatigue visuelle numérique. Options verres clairs et ambrés. MOQ 100 pcs. OEM/ODM direct usine.',
  keywords: 'lunettes lumière bleue en gros, fabricant lunettes ordinateur, lunettes gaming en gros, lunettes anti lumière bleue, lunettes protection écran, lunettes fatigue visuelle numérique',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/lumiere-bleue',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/blue-light',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/lumiere-bleue',
    },
  },
}

const products = [
  {
    name: 'Bloqueur Lumière Bleue Classique',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$6.00 - $10.00',
    moq: '100 pcs',
    description: 'Look propre et professionnel avec des verres transparents qui filtrent la lumière bleue sans aucune teinte visible. Vos clients peuvent les porter en réunion, en visioconférence Zoom, ou à leur bureau toute la journée sans avoir l\u2019air de porter des lunettes « spéciales ». C\u2019est notre modèle lumière bleue le plus vendu — il surpasse tout le reste dans cette catégorie 3 contre 1 parce qu\u2019il ressemble à des lunettes normales.',
  },
  {
    name: 'Lunettes Gaming Lumière Bleue',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    description: 'Conçues pour le public gamer. Les verres teintés ambre bloquent plus de lumière bleue que les versions transparentes (60-90 % vs 30-40 %), et les gamers préfèrent en fait la teinte chaude — elle améliore le contraste dans les environnements de jeu sombres et réduit la dureté des éclairs lumineux. Monture légère avec plaquettes nasales en caoutchouc pour ces sessions de 6 heures de Valorant. Une équipe d\u2019esports en Corée a commandé 200 paires comme équipement d\u2019équipe.',
  },
  {
    name: 'Bloqueur Lumière Bleue Verres Clairs',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$6.50 - $10.50',
    moq: '100 pcs',
    description: 'L\u2019option discrète. Ces verres ont un revêtement subtil anti lumière bleue qui est presque invisible — juste un léger reflet quand la lumière frappe au bon angle. Aucune teinte jaune. Conçues pour les personnes qui veulent une protection mais ne veulent pas que quiconque sache qu\u2019elles portent des lunettes lumière bleue. Populaires auprès des professionnels, avocats, cadres — le public « je ne porte pas de lunettes gadget ».',
  },
  {
    name: 'Aviateur Lumière Bleue',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Qui a dit que les lunettes d\u2019ordinateur devaient être ennuyeuses ? Cette monture aviateur avec verres anti lumière bleue apporte du style à la protection d\u2019écran. La monture métallique a de l\u2019allure, les verres transparents filtrent la lumière bleue, et l\u2019effet global est « pilote stylé qui se soucie aussi de la santé de ses yeux ». Idéal pour les clients qui possèdent déjà des lunettes de soleil aviateur et veulent une paire d\u2019intérieur assortie.',
  },
  {
    name: 'Wayfarer Lumière Bleue',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.50',
    moq: '100 pcs',
    description: 'La forme wayfarer en version lumière bleue. Monture en acétate, look professionnel, véritable protection d\u2019écran. C\u2019est la monture que nous recommandons pour les programmes de cadeaux d\u2019entreprise — les entreprises achètent 50 à 500 paires à la fois avec leur logo sur la branche pour des packages bien-être des employés. Une entreprise tech à Bangalore a commandé 1 200 paires pour toute son équipe d\u2019ingénieurs.',
  },
  {
    name: 'Lunettes Lumière Bleue Enfants',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$5.50 - $9.00',
    moq: '100 pcs',
    description: 'Les enfants passent des heures sur les tablettes, téléphones et ordinateurs portables — pour l\u2019école, les jeux, YouTube. Les parents s\u2019en inquiètent. Ces lunettes leur offrent une solution. Montures flexibles dimensionnées pour les 5-12 ans, matériaux sans BPA, et verres filtrant la lumière bleue. Des écoles dans trois pays les ont adoptées pour leurs programmes de laboratoire informatique. La tranquillité d\u2019esprit d\u2019un parent inquiet, à partir de 5,50 $.',
  },
]

export default function BlueLightPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d&apos;Ariane */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/fr" className="hover:text-primary-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/fr/produits" className="hover:text-primary-600">Produits</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Lunettes Lumière Bleue</span>
        </nav>

        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lunettes Anti Lumière Bleue en Gros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sept heures. C&apos;est le temps moyen qu&apos;un adulte passe devant un écran chaque jour.
            Yeux secs, maux de tête, troubles du sommeil — ça vous parle ? Les lunettes anti lumière bleue sont
            la catégorie à la croissance la plus rapide dans la lunetterie, et nous les fabriquons pour des marques dans
            plus de 40 pays. Verres transparents, verres ambrés, montures mode, tailles enfants. MOQ 100 pièces.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Lunettes Anti Lumière Bleue en Gros - Collection Lunettes Ordinateur"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Ce que fait la lumière bleue */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Que fait réellement la lumière bleue à vos yeux ?</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              La lumière bleue est partout. Le soleil en produit. Votre téléphone en produit. Votre
              ordinateur portable, votre télé, vos néons de bureau — tous bombardent vos yeux de lumière bleue
              toute la journée. Et voici le problème : nos yeux ne sont pas très bons pour la bloquer.
              La lumière bleue (longueurs d&apos;onde entre 380-500nm) traverse directement la cornée et
              le cristallin pour frapper la rétine directement.
            </p>
            <p>
              L&apos;<a href="https://www.aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Académie américaine d&apos;ophtalmologie</a> note
              que la fatigue visuelle numérique touche environ 65 % des adultes qui utilisent des écrans
              régulièrement. Les symptômes incluent les yeux secs, la vision floue, les maux de tête et les douleurs
              au cou et aux épaules.
              Mais le problème de sommeil est peut-être le plus important — la lumière bleue supprime la production de
              mélatonine, l&apos;hormone qui dit à votre cerveau « c&apos;est l&apos;heure de dormir ». Faites défiler votre téléphone
              à 23h et votre cerveau pense qu&apos;il est midi. Pas étonnant que les gens n&apos;arrivent pas à s&apos;endormir.
            </p>
            <p>
              C&apos;est pourquoi les lunettes anti lumière bleue ont explosé. Ce ne sont pas un dispositif médical et
              nous ne faisons pas de déclarations médicales — mais des millions de personnes rapportent moins de fatigue oculaire,
              moins de maux de tête et un meilleur sommeil en les portant devant les écrans. Le marché
              devrait atteindre 4,5 milliards de dollars à l&apos;échelle mondiale d&apos;ici 2026, selon les études du secteur.
              La <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA</a> réglemente
              les lunettes de soleil et les lunettes comme dispositifs médicaux, et toutes nos lunettes anti lumière bleue respectent leurs
              normes. Pour les acheteurs en gros, c&apos;est l&apos;une des catégories de croissance les plus fortes dans
              la lunetterie actuellement.
            </p>
          </div>
        </section>

        {/* Image Hero */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Lunettes Lumière Bleue en Gros" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Produits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Collection Lumière Bleue</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Technologie de filtrage lumière bleue</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Revêtement antireflet</li>
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

        {/* Options de verres */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transparent ou ambre — quel verre stocker ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔍 Verres transparents</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Aucune teinte visible. La protection est dans le revêtement, pas dans la couleur. Parfaits
                pour les personnes qui doivent voir des couleurs fidèles — designers, photographes,
                monteurs vidéo — et quiconque ne veut pas expliquer pourquoi ses lunettes ont l&apos;air
                jaunes. Bloquent 30-40 % de la lumière bleue dans la plage 415-455nm (les longueurs d&apos;onde
                les plus nocives). C&apos;est ce qui se vend en milieu de bureau et professionnel.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Protection invisible — aucune teinte</li>
                <li>• Fidélité des couleurs préservée</li>
                <li>• Bloque 30-40 % de la lumière bleue nocive</li>
                <li>• Idéal pour : bureau, design, usage professionnel</li>
                <li>• 70 % de nos commandes lumière bleue sont en transparent</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🟡 Verres ambre / jaunes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Teinte chaude visible. Bloque nettement plus de lumière bleue — 60-90 % selon
                la profondeur de teinte. La couleur ambre filtre les fréquences bleues agressives et
                crée une expérience visuelle plus chaude et plus confortable. Les gamers adorent. Les personnes
                qui utilisent des écrans le soir adorent. Le contraste amélioré est un véritable avantage
                pour le gaming et la lecture en conditions de faible luminosité.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Teinte ambre visible — ton chaud</li>
                <li>• Bloque 60-90 % de la lumière bleue</li>
                <li>• Contraste amélioré pour le gaming</li>
                <li>• Idéal pour : gaming, utilisation en soirée, lecture</li>
                <li>• Croissance rapide — surtout sur le marché du gaming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologie lumière bleue */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comment fonctionne le blocage de la lumière bleue</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🔬 Méthode par revêtement (verres transparents)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Un revêtement antireflet multicouche est appliqué sur la surface du verre. L&apos;une de
                  ces couches est spécifiquement calibrée pour réfléchir les longueurs d&apos;onde de lumière bleue (415-455nm)
                  loin de l&apos;œil. Vous pouvez le voir fonctionner — inclinez le verre et vous remarquerez
                  un léger reflet bleu-violet. C&apos;est la lumière bleue qui rebondit au lieu
                  de passer à travers.
                </p>
                <p className="text-sm text-gray-500">Idéal pour : usage professionnel, travail de précision des couleurs</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🧪 Méthode par substrat (verres ambrés)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Le matériau anti lumière bleue est mélangé directement dans la résine du verre lors de
                  la fabrication. Cela crée un verre qui absorbe la lumière bleue sur toute son
                  épaisseur — pas seulement en surface. Le résultat est un filtrage de lumière bleue plus puissant
                  et une teinte ambre visible. Comme le filtrage est dans le matériau du verre
                  lui-même, il ne peut pas s&apos;user ni être rayé.
                </p>
                <p className="text-sm text-gray-500">Idéal pour : gaming, temps d&apos;écran en soirée, filtrage maximal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques du marché */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Les chiffres parlent d&apos;eux-mêmes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="4,5 Md $" label="Marché mondial d&apos;ici 2026" />
            <StatCard number="12 %" label="Taux de croissance annuel" />
            <StatCard number="7h+" label="Temps d&apos;écran quotidien moyen" />
            <StatCard number="65 %" label="Adultes rapportent une fatigue oculaire" />
          </div>
          <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
            Les lunettes anti lumière bleue ne sont pas une mode — le temps d&apos;écran ne fait qu&apos;augmenter. Télétravail,
            apprentissage en ligne, gaming mobile, streaming... le marché continue de croître parce que
            le problème continue de croître.
          </p>
        </section>

        {/* Qui achète */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Qui achète des lunettes anti lumière bleue ?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TargetCard icon="👨‍💼" title="Employés de bureau" desc="Le plus gros segment. 8 heures d&apos;écran par jour, tous les jours." />
            <TargetCard icon="🎮" title="Gamers" desc="Sessions de jeu marathon. Les verres ambrés sont pratiquement un équipement standard." />
            <TargetCard icon="📱" title="Étudiants" desc="Cours en ligne, devoirs sur ordinateur, puis temps sur le téléphone. Écrans non-stop." />
            <TargetCard icon="👶" title="Enfants" desc="Tablettes pour l&apos;école, YouTube après l&apos;école. Les parents veulent une protection." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <TargetCard icon="🏢" title="Cadeaux d&apos;entreprise" desc="Les entreprises achètent 50-1000 paires pour des programmes de bien-être des employés." />
            <TargetCard icon="🎓" title="Écoles" desc="Les salles informatiques adoptent les lunettes lumière bleue pour les élèves." />
            <TargetCard icon="💻" title="Télétravailleurs" desc="Essentiels pour le bureau à domicile. Forte croissance depuis 2020." />
            <TargetCard icon="📖" title="Lecteurs" desc="Utilisateurs de liseuses et tablettes qui lisent pendant des heures le soir." />
          </div>
        </section>

        {/* Option Prescription */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Option prête pour la prescription</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Voici une grande opportunité que la plupart des acheteurs en gros manquent : les lunettes anti lumière bleue avec prescription.
              Environ 75 % des adultes ont besoin d&apos;une forme de correction visuelle. Cela signifie que 75 % des clients potentiels
              de lunettes anti lumière bleue ont aussi besoin de verres correcteurs. Nous fabriquons toutes nos montures
              anti lumière bleue en version Rx-ready — expédiées avec des verres de démonstration pour que les opticiens puissent installer des
              prescriptions personnalisées. Vision simple, bifocale, progressive — tout est compatible.
            </p>
            <p>
              La marge sur les lunettes anti lumière bleue avec prescription est encore meilleure que sur les plano (sans correction).
              Un opticien peut facturer 80-150 $ pour une paire de lunettes anti lumière bleue avec prescription qui
              lui coûte 8-12 $ en gros pour la monture. Ajoutez un verre de prescription à 15-25 $ de son laboratoire,
              et il a des marges de 3-5x. C&apos;est un excellent upsell pour tout détaillant optique
              qui stocke déjà nos montures.
            </p>
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produits associés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fr/produits/rond" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Rondes Lumière Bleue</h3>
              <p className="text-sm text-gray-600">Montures rondes vintage avec verres anti lumière bleue</p>
            </Link>
            <Link href="/fr/produits/enfants" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Lunettes Enfants</h3>
              <p className="text-sm text-gray-600">Collection complète de lunettes enfants avec protection UV</p>
            </Link>
            <Link href="/fr/produits/oeil-de-chat" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Œil de Chat Lumière Bleue</h3>
              <p className="text-sm text-gray-600">Montures mode œil de chat avec protection d&apos;écran</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions sur la lumière bleue — sans jargon</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Les lunettes anti lumière bleue fonctionnent-elles vraiment ?"
              answer="Voici la réponse honnête : la science débat encore de savoir si la lumière bleue cause des dommages oculaires à long terme. Ce qui EST bien documenté, c&apos;est que l&apos;utilisation prolongée des écrans cause la fatigue visuelle numérique — yeux secs, maux de tête, vision floue. De nombreux utilisateurs rapportent un soulagement réel en portant des lunettes anti lumière bleue. Le bénéfice sur le sommeil a des preuves plus solides — la lumière bleue supprime la mélatonine, et la filtrer le soir peut aider à s&apos;endormir plus vite. Nous ne faisons pas de déclarations médicales. Nous laissons les clients essayer et décider par eux-mêmes. Le taux de réapprovisionnement parle de lui-même."
            />
            <FaqItem
              question="Verres transparents ou ambrés — que dois-je stocker ?"
              answer="Les deux, idéalement. Mais si vous ne pouvez en choisir qu&apos;un, optez pour le transparent. Les verres transparents représentent environ 70 % de nos commandes lumière bleue parce qu&apos;ils ressemblent à des lunettes normales et n&apos;altèrent pas les couleurs. Les verres ambrés sont les favoris des gamers (filtrage plus fort, contraste amélioré) et se vendent bien dans les boutiques de gaming et aux utilisateurs d&apos;écrans en soirée. Conseil pro : stockez du transparent pour la vente générale, de l&apos;ambre pour les audiences gaming/tech."
            />
            <FaqItem
              question="Combien de lumière bleue bloquent-elles réellement ?"
              answer="Les verres transparents bloquent 30-40 % de la lumière bleue dans la plage 415-455nm (les longueurs d&apos;onde potentiellement les plus nocives). Les verres ambrés bloquent 60-90 % selon la profondeur de teinte. Nous fournissons des rapports de transmission spectrale avec les commandes en gros pour que vous puissiez montrer aux clients exactement ce qu&apos;ils obtiennent. Pas de vagues déclarations « bloque la lumière bleue » — de vrais chiffres, de vraies données de test."
            />
            <FaqItem
              question="Peuvent-elles être combinées avec des verres de prescription ?"
              answer="Absolument — et vous devriez ! Environ 75 % des adultes ont besoin d&apos;une correction visuelle, donc les montures anti lumière bleue Rx-ready sont un marché énorme. Toutes nos montures sont expédiées avec des verres de démonstration que les opticiens peuvent remplacer par des verres de prescription anti lumière bleue. Compatible vision simple, bifocale et progressive. La marge sur les lunettes anti lumière bleue avec prescription est remarquable — 80-150 $ au détail sur une monture en gros à 10 $."
            />
            <FaqItem
              question="Quelle est la meilleure façon de vendre des lunettes anti lumière bleue ?"
              answer="La démo qui tue : mettez une paire à votre client et faites-le regarder son téléphone pendant 30 secondes. Puis retirez-les. La plupart des gens remarquent immédiatement la différence — l&apos;écran semble plus agressif sans elles. Ce moment « ah-ha » conclut la vente. Pour les boutiques en ligne, concentrez-vous sur le problème (maux de tête, yeux secs, mauvais sommeil) et la solution. Les programmes de cadeaux d&apos;entreprise sont aussi massifs — les entreprises achètent des centaines de paires pour le bien-être des employés. Nous pouvons personnaliser avec les logos d&apos;entreprise."
            />
            <FaqItem
              question="Quel est le MOQ et le délai ?"
              answer="100 pièces par style et couleur. Les articles en stock sont expédiés en 3-5 jours. Les commandes personnalisées avec votre logo et votre branding prennent 15-25 jours. Nous faisons aussi de l&apos;emballage cadeau d&apos;entreprise — boîtes personnalisées avec le nom de votre entreprise, chiffons microfibre marqués, tout le nécessaire. Une startup tech a commandé 500 paires en emballage marqué comme cadeaux de bienvenue pour les nouveaux employés. Coût : environ 9 $ la paire tout compris. Valeur perçue du cadeau au détail ? 30-40 $ facile."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Le marché qui ne cesse de croître</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Le temps d&apos;écran ne diminue pas. Le télétravail ne disparaît pas. Le gaming ne fait que
            grossir. Les lunettes anti lumière bleue sont l&apos;un des paris les plus sûrs dans la lunetterie
            actuellement. Obtenez des échantillons, testez-les vous-même, et voyez pourquoi cette catégorie convertit si bien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">Obtenir le Catalogue Lumière Bleue</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Lunettes Lumière Bleue", "item": "https://eyeviewsunglasses.com/fr/produits/lumiere-bleue" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Les lunettes anti lumière bleue fonctionnent-elles vraiment ?",
            "acceptedAnswer": { "@type": "Answer", "text": "La science débat encore des dommages à long terme de la lumière bleue, mais le soulagement de la fatigue visuelle numérique est bien documenté. De nombreux utilisateurs rapportent moins de fatigue oculaire, moins de maux de tête et un meilleur sommeil. Le bénéfice sur le sommeil a des preuves plus solides — la lumière bleue supprime la production de mélatonine." }
          },
          {
            "@type": "Question",
            "name": "Verres transparents ou ambrés — que stocker ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Les deux idéalement, mais les verres transparents représentent 70 % des commandes. Ils ressemblent à des lunettes normales et n\u2019altèrent pas les couleurs. Les verres ambrés sont populaires auprès des gamers pour un filtrage plus fort et un contraste amélioré." }
          },
          {
            "@type": "Question",
            "name": "Combien de lumière bleue ces lunettes bloquent-elles ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Les verres transparents bloquent 30-40 % de la lumière bleue dans la plage 415-455nm. Les verres ambrés bloquent 60-90 % selon la profondeur de teinte. Nous fournissons des rapports de transmission spectrale avec les commandes en gros." }
          },
          {
            "@type": "Question",
            "name": "Peut-on combiner les lunettes anti lumière bleue avec des verres de prescription ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Oui — toutes les montures sont expédiées Rx-ready avec des verres de démonstration. Environ 75 % des adultes ont besoin d\u2019une correction visuelle, faisant des lunettes anti lumière bleue avec prescription un marché énorme avec d\u2019excellentes marges." }
          },
          {
            "@type": "Question",
            "name": "Quelle est la meilleure façon de vendre des lunettes anti lumière bleue ?",
            "acceptedAnswer": { "@type": "Answer", "text": "La démo qui tue : faites regarder un téléphone aux clients avec les lunettes, puis sans. La différence est immédiatement perceptible. En ligne, concentrez-vous sur le problème (maux de tête, yeux secs, mauvais sommeil). Les programmes de cadeaux d\u2019entreprise sont aussi un canal massif." }
          },
          {
            "@type": "Question",
            "name": "Quel est le MOQ et le délai ?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pièces par style. Articles en stock expédiés en 3-5 jours. Commandes personnalisées avec logo et branding en 15-25 jours. Emballage cadeau d\u2019entreprise disponible." }
          }
        ]
      })}} />
    </main>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function TargetCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
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
