import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: {
    absolute: 'Fabricant de Lunettes de Soleil en Gros | Usine OEM de Lunettes Personnalisées - EyeView',
  },
  description: 'EyeView est un fabricant leader de lunettes de soleil en gros offrant des services OEM et ODM. Plus de 15 ans d\'expérience, plus de 500 clients internationaux. Demandez votre devis gratuit aujourd\'hui.',
  openGraph: {
    title: 'Fabricant de Lunettes de Soleil en Gros | Usine OEM - EyeView',
    description: 'EyeView est un fabricant leader de lunettes de soleil en gros avec services OEM et ODM. Plus de 15 ans d\'expérience, plus de 500 clients internationaux.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://eyeviewsunglasses.com/fr',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr',
    languages: {
      'en': 'https://eyeviewsunglasses.com',
      'fr': 'https://eyeviewsunglasses.com/fr',
    },
  },
};

const stats = [
  { number: '15+', label: 'Années d\'Expérience', emoji: '🏭' },
  { number: '500+', label: 'Clients Internationaux', emoji: '🌍' },
  { number: '1M+', label: 'Paires Produites', emoji: '🕶️' },
  { number: '100%', label: 'Qualité Garantie', emoji: '✅' },
];

const features = [
  {
    emoji: '🎨',
    title: 'Personnalisation Complète',
    description: 'De la conception de la monture et la couleur des verres à la gravure du logo et l\'emballage personnalisé — nous donnons vie à votre vision de lunettes de soleil avec des capacités complètes de fabrication OEM et ODM.',
  },
  {
    emoji: '💰',
    title: 'Prix Compétitifs d\'Usine',
    description: 'En tant que fabricant direct avec notre propre usine de production, nous éliminons les coûts d\'intermédiaires. Profitez de prix de gros à partir de 1,50 $ la paire avec des remises sur volume disponibles.',
  },
  {
    emoji: '⚡',
    title: 'Livraison Rapide',
    description: 'Notre processus de production optimisé livre les échantillons en 5-7 jours et les commandes en gros en 15-25 jours. Commandes urgentes disponibles pour les lancements et collections saisonnières.',
  },
  {
    emoji: '🔒',
    title: 'Assurance Qualité Premium',
    description: 'Chaque paire passe par une inspection qualité rigoureuse en 6 points. Nos lunettes répondent aux normes internationales incluant FDA, CE, UV400 et certification ANSI Z80.3.',
  },
  {
    emoji: '📦',
    title: 'Quantité Minimum de Commande Faible',
    description: 'Commencez avec seulement 50 pièces par style — parfait pour les nouvelles marques testant le marché, les boutiques et les campagnes promotionnelles. Sans engagement d\'inventaire massif.',
  },
  {
    emoji: '🌍',
    title: 'Expédition et Logistique Mondiale',
    description: 'Nous expédions dans plus de 60 pays via DHL, FedEx, UPS et fret maritime. Livraison porte à porte avec documentation douanière complète et suivi en temps réel.',
  },
];

const products = [
  { name: 'Lunettes de Soleil Aviateur', href: '/fr/produits/aviateur/', emoji: '✈️', description: 'Aviateurs classiques avec monture en métal et verres en forme de goutte. Parfaits pour les collections de mode en gros.' },
  { name: 'Lunettes de Soleil Wayfarer', href: '/fr/produits/wayfarer/', emoji: '🎸', description: 'Iconiques lunettes wayfarer en acétate. Le style plus vendu pour le retail et les campagnes promotionnelles.' },
  { name: 'Lunettes de Soleil Œil de Chat', href: '/fr/produits/oeil-de-chat/', emoji: '😺', description: 'Montures œil de chat tendance conçues pour le marché de la mode féminine. Designs audacieux et élégants.' },
  { name: 'Lunettes de Soleil Sport', href: '/fr/produits/sport/', emoji: '🚴', description: 'Lunettes sport hautre performance avec designs enveloppants et verres résistants aux impacts.' },
  { name: 'Lunettes de Soleil Rondes', href: '/fr/produits/rond/', emoji: '🔵', description: 'Montures rondes d\'inspiration vintage au charme rétro. Populaires auprès des marques de mode et lifestyle.' },
  { name: 'Lunettes de Soleil Enfants', href: '/fr/produits/enfants/', emoji: '👶', description: 'Lunettes sûres, durables et colorées conçues spécifiquement pour les enfants de 3 à 12 ans.' },
  { name: 'Lunettes de Soleil Polarisées', href: '/fr/produits/polarise/', emoji: '🌊', description: 'Verres polarisés premium qui éliminent l\'éblouissement. Essentiels pour les sports de plein air et nautiques.' },
  { name: 'Lunettes Anti Lumière Bleue', href: '/fr/produits/lumiere-bleue/', emoji: '💻', description: 'Lunettes de protection numérique qui filtrent la lumière bleue nocive des écrans et appareils.' },
  { name: 'Lunettes de Soleil Écologiques', href: '/fr/produits/ecologique/', emoji: '🌱', description: 'Lunettes durables en plastique océanique recyclé, bambou et matériaux bio-acétate.' },
  { name: 'Lunettes de Soleil en Acétate', href: '/fr/produits/acetate/', emoji: '🎨', description: 'Montures en acétate artisanales aux motifs premium. Acétate italien Mazzucchelli disponible.' },
  { name: 'Lunettes de Soleil TR90', href: '/fr/produits/tr90/', emoji: '🏋️', description: 'Montures ultra-légères en nylon TR90 avec flexibilité mémoire pour le sport et l\'usage quotidien.' },
];

const steps = [
  { step: '01', title: 'Consultation Initiale', description: 'Partagez vos besoins — style, quantité, personnalisation et budget. Notre équipe offre des conseils experts pour vous aider à choisir les produits adaptés à votre marché.' },
  { step: '02', title: 'Design et Échantillonnage', description: 'Nous créons des designs détaillés selon vos spécifications. Recevez des échantillons physiques en 5-7 jours ouvrables pour votre révision et approbation avant la production en série.' },
  { step: '03', title: 'Approbation et Production', description: 'Une fois les échantillons approuvés, nous lançons la production à grande échelle. Notre capacité gère des commandes de 50 à 100 000+ pièces avec un contrôle qualité constant.' },
  { step: '04', title: 'Inspection Qualité', description: 'Chaque lot passe par une inspection qualité complète en 6 points incluant des tests de protection UV, durabilité des charnières, clarté des verres et alignement des montures.' },
  { step: '05', title: 'Expédition et Livraison', description: 'Nous nous chargeons de tout l\'emballage, étiquetage et logistique. Choisissez entre le fret aérien express (5-7 jours) ou le transport maritime économique (20-30 jours) avec suivi complet assistance douanière.' },
];

const faqs = [
  {
    question: 'Quelle est la quantité minimum de commande (MOQ) pour les lunettes de soleil en gros ?',
    answer: 'Notre MOQ standard est de 50 pièces par style et combinaison de couleurs. Pour les nouveaux clients souhaitant tester le marché, nous proposons des packs de démarrage flexibles. Pour les commandes OEM personnalisées avec gravure de logo ou designs uniques, le MOQ peut commencer à 100-300 pièces selon la complexité. Contactez-nous pour vos besoins spécifiques.',
  },
  {
    question: 'Combien de temps faut-il pour produire une commande de lunettes de soleil en gros ?',
    answer: 'Les délais de production varient selon la taille de la commande et le niveau de personnalisation. Les commandes standard (designs existants) sont généralement expédiées en 15-20 jours ouvrables. Les commandes OEM personnalisées avec nouveaux designs nécessitent 20-30 jours ouvrables incluant l\'échantillonnage. La production urgente est disponible moyennant un supplément, réduisant le délai à 10-15 jours.',
  },
  {
    question: 'Proposez-vous des services de fabrication OEM et ODM pour les lunettes de soleil ?',
    answer: 'Oui, nous proposons des services OEM (Fabrication d\'Équipement Original) et ODM (Fabrication de Design Original). Avec l\'OEM, vous fournissez le design et nous fabriquons. Avec l\'ODM, notre équipe de design crée des styles uniques selon la direction de votre marque. Les deux options incluent le placement personnalisé du logo, l\'emballage et l\'étiquetage.',
  },
  {
    question: 'Quelles certifications de qualité vos lunettes de soleil respectent-elles ?',
    answer: 'Toutes nos lunettes respectent ou dépassent les normes internationales de qualité incluant la protection UV400 (bloquant 99,9% des rayons UVA et UVB), la certification CE pour les marchés européens, la conformité FDA pour les États-Unis, et les normes ANSI Z80.3. Nous proposons également la certification EN ISO 12312-1 sur demande.',
  },
  {
    question: 'Pouvez-vous personnaliser des lunettes de soleil avec notre logo et emballage de marque ?',
    answer: 'Absolument. Nous proposons des services de branding complets incluant la gravure laser du logo sur les montures et verres, des étuis imprimés ou gravés personnalisés, des chiffons en microfibre à votre marque, des étiquettes volantes, des codes-barres et un emballage prêt pour la vente. Notre équipe de design peut vous aider à créer un emballage qui valorise l\'identité de votre marque.',
  },
  {
    question: 'Quels types de verres sont disponibles pour les commandes en gros ?',
    answer: 'Nous proposons une large gamme d\'options de verres incluant les verres UV400 standard, les verres polarisés (TAC et verre), les verres photochromiques (transition), les verres anti lumière bleue, les verres miroir, les verres dégradés et les montures prêtes pour prescription. Chaque type de verre est disponible en plusieurs couleurs et traitements.',
  },
  {
    question: 'Expédiez-vous à l\'international ? Quelles sont les options d\'expédition ?',
    answer: 'Oui, nous expédions dans plus de 60 pays dans le monde. Les options d\'expédition incluent DHL Express (3-5 jours ouvrables), FedEx (3-7 jours ouvrables), UPS (5-8 jours ouvrables) et le fret maritime (20-35 jours pour les grosses commandes). Nous gérons toute la documentation d\'exportation et pouvons expédier en DDP (Rendu Droits Acquittés) ou FOB selon votre préférence.',
  },
  {
    question: 'Comment démarrer une commande de lunettes de soleil en gros ?',
    answer: 'Commencer est simple : 1) Contactez-nous par email à jacky@eyeviewsunglasses.com ou WhatsApp au +86-18850281211 avec vos besoins. 2) Notre équipe fournira un devis détaillé sous 24 heures. 3) Examinez et approuvez les échantillons. 4) Passez votre commande et nous nous occupons du reste. Nous accueillons aussi bien les primo-acheteurs que les marques établies.',
  },
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment Commander des Lunettes de Soleil en Gros chez EyeView',
  description: 'Notre simple processus en 5 étapes rend la commande de lunettes de soleil personnalisées en gros facile, de la consultation initiale à la livraison.',
  totalTime: 'P25D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '1.50',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Consultation Initiale',
      text: 'Partagez vos besoins — style, quantité, personnalisation et budget. Notre équipe offre des conseils experts.',
      url: 'https://eyeviewsunglasses.com/fr/contact/',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design et Échantillonnage',
      text: 'Nous créons des designs détaillés selon vos spécifications. Recevez des échantillons physiques en 5-7 jours ouvrables.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Approbation et Production',
      text: 'Une fois les échantillons approuvés, nous lançons la production à grande échelle avec un contrôle qualité constant.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Inspection Qualité',
      text: 'Chaque lot passe par une inspection qualité en 6 points incluant des tests UV, durabilité des charnières et clarté des verres.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Expédition et Livraison',
      text: 'Nous nous chargeons de l\'emballage, étiquetage et logistique. Fret aérien express (5-7 jours) ou transport maritime (20-30 jours) avec suivi complet.',
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://eyeviewsunglasses.com/fr' },
  ],
};

export default function HomePageFr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre <span className="text-yellow-300">Fabricant de Lunettes de Soleil en Gros</span> et Usine OEM de Confiance
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              EyeView Sunglasses est un fabricant leader de lunettes de soleil en gros avec plus de 15 ans d&apos;expérience en production OEM et ODM. Nous aidons les marques, détaillants et distributeurs du monde entier à se procurer des lunettes de soleil personnalisées premium à des prix compétitifs directement d&apos;usine. Des aviateurs classiques aux montures œil de chat tendance, nous fabriquons chaque style avec précision et qualité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact/" className="inline-block bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                🕶️ Demander un Devis Gratuit
              </Link>
              <Link href="/fr/produits/" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
                Voir les Produits →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 px-4 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl mb-2 block">{stat.emoji}</span>
                <div className="text-3xl md:text-4xl font-bold text-primary-700">{stat.number}</div>
                <div className="text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir EyeView comme Votre Fabricant de Lunettes ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              En tant qu&apos;usine de lunettes de soleil établie, nous combinons expertise en fabrication, matériaux de qualité et prix compétitifs pour offrir une valeur exceptionnelle à votre marque.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{feature.emoji}</span>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Gamme de Lunettes de Soleil en Gros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explorez notre vaste collection de styles de lunettes de soleil en gros. Chaque catégorie est entièrement personnalisable avec votre marque, options de verres et modifications de monture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border group"
              >
                <span className="text-5xl mb-4 block text-center">{product.emoji}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <span className="inline-block mt-4 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  En Savoir Plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment Commander des Lunettes de Soleil en Gros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Notre simple processus en 5 étapes rend la commande de lunettes personnalisées en gros facile, de la consultation initiale à la livraison à votre porte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Questions Fréquentes sur les Lunettes de Soleil en Gros" />

      {/* CTA */}
      <CTASection
        title="Prêt à Lancer Votre Marque de Lunettes de Soleil ?"
        description="Obtenez votre devis gratuit aujourd'hui. Aucun minimum pour la consultation. Échantillons disponibles en 5 jours. Nous répondons sous 24 heures."
        primaryText="Devis Gratuit"
        primaryHref="/fr/contact"
        secondaryText="Voir les Produits"
        secondaryHref="/fr/produits"
      />
    </>
  );
}
