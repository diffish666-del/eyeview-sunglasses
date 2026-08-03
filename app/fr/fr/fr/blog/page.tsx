import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog de l\'Industrie des Lunettes de Soleil | Fabrication et Branding',
  description: 'Conseils d\'expert d\'un fabricant de lunettes de soleil avec 20 ans d\'expérience. Guides OEM/ODM, technologie des verres, approvisionnement et stratégies pour entrepreneurs.',
  keywords: 'blog lunettes de soleil, industrie lunettes, fabrication lunettes, guide OEM lunettes, créer marque lunettes, guide verres, trouver fabricant',
  alternates: {
    canonical: '/fr/blog',
    languages: {
      'en': '/blog',
      'fr': '/fr/blog',
    },
  },
}

const posts = [
  {
    slug: 'guide-salons-professionnels-lunettes-soleil',
    title: 'Salons Professionnels Lunettes de Soleil 2026 : Guide pour Trouver les Bons Fournisseurs',
    excerpt: "Guide d'un fabricant chinois sur les salons de lunetterie — MIDO, SILMO, Vision Expo, IOFT, Hong Kong. Coûts des stands, stratégies d'évaluation et suivi qui fonctionne.",
    date: '20 juillet 2026',
    category: 'Approvisionnement',
    readTime: '8 min de lecture',
    emoji: '🎪',
    featured: false,
  },
  {
    slug: 'negocier-fabricants-chinois',
    title: 'Comment Négocier avec les Fabricants Chinois de Lunettes : Guide Initiation',
    excerpt: "Un propriétaire d'usine révèle comment négocier avec les fabricants chinois. Vraies grilles de prix, flexibilité des MOQ, phrases qui marchent et ce que pensent vraiment les patrons d'usine.",
    date: '20 juillet 2026',
    category: 'Approvisionnement',
    readTime: '9 min de lecture',
    emoji: '🤝',
    featured: false,
  },
  {
    slug: 'packaging-lunettes-personnalise',
    title: 'Packaging Lunettes Personnalisé : Guide Complet du Branding 2026',
    excerpt: 'Chaque option de packaging pour les marques de lunettes -- étuis rigides, pochettes, boîtes retail, étiquettes. Coûts réels par pièce et conseils d\'unboxing.',
    date: '3 mai 2026',
    category: 'Branding',
    readTime: '14 min de lecture',
    emoji: '📦',
    featured: false,
  },
  {
    slug: 'certification-fda-ce-lunettes',
    title: 'Certification FDA et CE pour Lunettes : Guide de Conformité Complet',
    excerpt: 'Enregistrement FDA, marquage CE, tests UV et normes ANSI -- guide étape par étape pour vendre aux États-Unis, en UE et dans le monde.',
    date: '4 mai 2026',
    category: 'Conformité',
    readTime: '15 min de lecture',
    emoji: '📋',
    featured: false,
  },
  {
    slug: 'guide-importation-lunettes',
    title: 'Comment Importer des Lunettes depuis la Chine : Guide Complet 2026',
    excerpt: 'Le processus complet d\'importation -- approvisionnement, expédition, droits de douane, contrôle qualité et erreurs à éviter.',
    date: '4 mai 2026',
    category: 'Approvisionnement',
    readTime: '16 min de lecture',
    emoji: '🚢',
    featured: false,
  },
  {
    slug: 'tendances-lunettes-2026',
    title: 'Tendances Design Lunettes de Soleil 2026 : Ce Qui Se Vend',
    excerpt: 'Les tendances vues depuis l\'atelier -- montures oversize, revival Y2K, acétate épais, matériaux durables. Avec les données de ventes pour le prouver.',
    date: '4 mai 2026',
    category: 'Tendances',
    readTime: '12 min de lecture',
    emoji: '🔥',
    featured: false,
  },
  {
    slug: 'cout-lancement-marque-lunettes',
    title: 'Combien Coûte le Lancement d\'une Marque de Lunettes en 2026 ?',
    excerpt: 'Chaque coût détaillé -- de 3 000 $ (bootstrap) à 50 000 $+ (lancement premium). Les vrais chiffres, pas les estimations vagues.',
    date: '4 mai 2026',
    category: 'Business',
    readTime: '14 min de lecture',
    emoji: '💰',
    featured: false,
  },
  {
    slug: 'strategie-prix-lunettes',
    title: 'Stratégie de Prix Lunettes : Du Coût Usine au Prix de Vente',
    excerpt: 'La vraie économie de la tarification -- coûts usine, markup wholesale, marges retail et stratégies qui fonctionnent.',
    date: '4 mai 2026',
    category: 'Business',
    readTime: '12 min de lecture',
    emoji: '🏷️',
    featured: false,
  },
  {
    slug: 'controle-qualite-lunettes',
    title: 'Contrôle Qualité Lunettes : Checklist d\'Inspection en Usine',
    excerpt: 'La checklist complète -- tests de verres, inspection de montures, vérification des charnières, contrôle UV. Quoi vérifier avant de valider.',
    date: '4 mai 2026',
    category: 'Qualité',
    readTime: '12 min de lecture',
    emoji: '✅',
    featured: false,
  },
  {
    slug: 'guide-forme-visage-lunettes',
    title: 'Les Meilleures Lunettes pour Votre Forme de Visage',
    excerpt: 'Trouvez les lunettes parfaites pour votre morphologie -- rond, ovale, carré, cœur, oblong. Avec des exemples concrets.',
    date: '4 mai 2026',
    category: 'Guide d\'Achat',
    readTime: '10 min de lecture',
    emoji: '👤',
    featured: false,
  },
  {
    slug: 'fabrication-lunettes-durables',
    title: 'Fabrication Durable de Lunettes : Matériaux Éco-Responsables',
    excerpt: 'Bio-acétate, nylon recyclé, plastique océanique -- ce qui est vraiment possible, ce que ça coûte, et ce qui relève du greenwashing.',
    date: '4 mai 2026',
    category: 'Durabilité',
    readTime: '12 min de lecture',
    emoji: '🌱',
    featured: false,
  },
  {
    slug: 'guide-revetements-lunettes',
    title: 'Guide des Traitements de Verres : Miroir, AR, Hydrophobe et Plus',
    excerpt: 'Chaque type de traitement -- miroir, anti-reflet, hydrophobe, oléophobe, anti-buée, anti-rayures. Coûts réels et combinaisons optimales.',
    date: '3 mai 2026',
    category: 'Technologie',
    readTime: '12 min de lecture',
    emoji: '✨',
    featured: false,
  },
  {
    slug: 'uv400-vs-polarisees',
    title: 'UV400 vs Polarisées : Quelle Différence et Faut-il les Deux ?',
    excerpt: 'Deux technologies, deux fonctions totalement différentes. Ce que chacune fait, ce qu\'elle coûte, et quand votre marque en a besoin.',
    date: '3 mai 2026',
    category: 'Technologie',
    readTime: '10 min de lecture',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'comparaison-materiaux-montures',
    title: 'TR90 vs Acétate vs Métal : Quel Matériau pour Votre Marque ?',
    excerpt: 'Coûts réels, poids, durabilité et quel matériau convient le mieux à chaque stratégie de marque. Avec les chiffres de l\'atelier.',
    date: '3 mai 2026',
    category: 'Matériaux',
    readTime: '14 min de lecture',
    emoji: '🔧',
    featured: false,
  },
  {
    slug: 'guide-moq-lunettes',
    title: 'Guide MOQ Lunettes : Combien de Paires Commander en Premier ?',
    excerpt: 'ODM à partir de 50 pièces, OEM à 300+. La méthode intelligente pour dimensionner votre première commande sans sur-stocker.',
    date: '3 mai 2026',
    category: 'Approvisionnement',
    readTime: '10 min de lecture',
    emoji: '📊',
    featured: false,
  },
  {
    slug: 'trouver-fabricant-lunettes',
    title: 'Comment Trouver un Fabricant de Lunettes Fiable en 2026',
    excerpt: 'Où chercher, comment détecter les intermédiaires sur Alibaba, 10 critères d\'évaluation et conseils de négociation depuis l\'autre côté de la table.',
    date: '28 avril 2026',
    category: 'Approvisionnement',
    readTime: '16 min de lecture',
    emoji: '🔍',
    featured: false,
  },
  {
    slug: 'guide-verres-lunettes',
    title: 'Types de Verres pour Lunettes de Soleil : Guide Complet 2026',
    excerpt: 'Polycarbonate, CR-39, verre minéral ou TAC ? Gris, marron ou miroir ? Polarisés ou non ? Coûts réels et comparaisons honnêtes.',
    date: '25 avril 2026',
    category: 'Technologie',
    readTime: '14 min de lecture',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM Lunettes de Soleil : Quelle Différence ? Guide Complet',
    excerpt: 'Après 3 000 conversations sur OEM vs ODM, voici la version honnête -- coûts réels, délais réels et un cadre de décision qui vous aide vraiment à choisir.',
    date: '20 avril 2026',
    category: 'Fabrication',
    readTime: '12 min de lecture',
    emoji: '🏭',
    featured: false,
  },
  {
    slug: 'creer-marque-lunettes',
    title: 'Comment Créer Votre Marque de Lunettes de Soleil : Guide Complet',
    excerpt: 'Le guide complet de l\'idée à la première vente -- étude de marché, approvisionnement, branding, prix et marketing. Tout ce que j\'aurais aimé savoir en 2006.',
    date: '28 mars 2026',
    category: 'Business',
    readTime: '10 min de lecture',
    emoji: '🚀',
    featured: true,
  },
]

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Direct Depuis l&apos;Atelier
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informations sans détour sur la fabrication de lunettes de soleil, l&apos;approvisionnement et la création
            de marques -- écrites par quelqu&apos;un qui fabrique des lunettes depuis 2006.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div className="text-left">
              <div className="font-medium text-gray-900 text-sm">Écrit par Jacky Chen</div>
              <div className="text-xs text-gray-500">Fondateur, EyeView Sunglasses</div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="card mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 aspect-video md:aspect-auto flex items-center justify-center">
                <span className="text-8xl">{featured.emoji}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary-600 font-semibold text-sm mb-2">À LA UNE</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <Link href={`/fr/blog/${featured.slug}`} className="btn-primary self-start">
                  Lire l&apos;Article
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/fr/blog/${post.slug}`} className="card group">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">{post.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <section className="mt-20 bg-primary-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Recevez les Nouvelles de l&apos;Atelier dans Votre Boîte Mail
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Un email par mois. Sans remplissage -- juste des conseils de fabrication, des tendances du marché
            et des stratégies d&apos;approvisionnement qui vous aident vraiment à construire une meilleure marque.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              S&apos;abonner
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
