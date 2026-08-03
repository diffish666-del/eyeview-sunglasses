import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { BreadcrumbListSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Collection de Lunettes de Soleil en Gros | Tous les Styles et Catégories',
  description: 'Découvrez notre collection complète de lunettes de soleil en gros : Aviateur, Wayfarer, Œil de Chat, Sport, Rondes, Enfants, Polarisées, Lumière Bleue, Écologiques, Acétate et TR90. Personnalisation OEM disponible. MOQ 50 pièces.',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/',
    },
  },
  openGraph: {
    title: 'Collection de Lunettes de Soleil en Gros | Tous les Styles',
    description: 'Découvrez notre collection complète de lunettes de soleil en gros. Personnalisation OEM et ODM disponible pour tous les styles.',
    url: 'https://eyeviewsunglasses.com/fr/produits/',
    locale: 'fr_FR',
  },
};

const products = [
  {
    name: 'Lunettes de Soleil Aviateur',
    href: '/fr/produits/aviateur/',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'lunettes aviateur en gros',
    description: 'Le design aviateur intemporel avec montures métalliques classiques en forme de goutte. Conçues à l\'origine pour les pilotes, devenues un incontournable de la mode mondiale. Disponibles en montures or, argent, gunmetal et or rose avec un large choix de couleurs de verres incluant dégradé, miroir et polarisé. Parfaites pour les collections homme et unisexe en gros.',
    moq: 'MOQ : 50 paires',
    price: 'À partir de 2,50 $/paire',
  },
  {
    name: 'Lunettes de Soleil Wayfarer',
    href: '/fr/produits/wayfarer/',
    emoji: '🎸',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'lunettes wayfarer en gros',
    description: 'L\'iconique silhouette wayfarer en acétate premium. Ce style universellement flatteur est un best-seller depuis des décennies. Disponible en couleurs unies, écaille de tortue et montures transparentes. Idéal pour les boutiques, les marques en ligne et les campagnes promotionnelles.',
    moq: 'MOQ : 50 paires',
    price: 'À partir de 2,00 $/paire',
  },
  {
    name: 'Lunettes de Soleil Œil de Chat',
    href: '/fr/produits/oeil-de-chat/',
    emoji: '😺',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
    keywords: 'lunettes œil de chat en gros',
    description: 'Montures œil de chat audacieuses et féminines qui dominent le marché de la lunetterie féminine. Disponibles en versions oversize, classique et subtile avec options d\'embellissement incluant strass, accents métalliques et finitions dégradées. Incontournables pour toute marque d\'accessoires féminins.',
    moq: 'MOQ : 50 paires',
    price: 'À partir de 2,30 $/paire',
  },
  {
    name: 'Lunettes de Soleil Sport',
    href: '/fr/produits/sport/',
    emoji: '🚴',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'lunettes sport en gros',
    description: 'Lunettes de soleil sport hautre performance à design enveloppant conçues pour les modes de vie actifs. Fabriquées avec des montures TR90 et polycarbonate résistantes aux impacts, des plaquettes nasales en caoutchouc et des embouts de branches antidérapants. Idéales pour les marques de cyclisme, course, pêche, golf et loisirs de plein air.',
    moq: 'MOQ : 100 paires',
    price: 'À partir de 3,00 $/paire',
  },
  {
    name: 'Lunettes de Soleil Rondes',
    href: '/fr/produits/rond/',
    emoji: '🔵',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'lunettes rondes en gros',
    description: 'Montures rondes d\'inspiration vintage avec une esthétique rétro intemporelle. Disponibles en constructions métal et acétate avec des options allant du petit style John Lennon aux grandes montures rondes oversize. Populaires auprès des marques de mode et du merchandising festival.',
    moq: 'MOQ : 50 paires',
    price: 'À partir de 2,00 $/paire',
  },
  {
    name: 'Lunettes de Soleil Enfants',
    href: '/fr/produits/enfants/',
    emoji: '👶',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop',
    keywords: 'lunettes enfants en gros',
    description: 'Lunettes de soleil sûres, durables et colorées conçues spécifiquement pour les enfants de 3 à 12 ans. Fabriquées avec des matériaux flexibles sans BPA qui résistent aux manipulations brusques. Protection UV400 avec verres incassables. Disponibles en couleurs amusantes, thèmes de personnages et designs adaptés à l\'âge.',
    moq: 'MOQ : 100 paires',
    price: 'À partir de 1,50 $/paire',
  },
  {
    name: 'Lunettes de Soleil Polarisées',
    href: '/fr/produits/polarise/',
    emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'lunettes polarisées en gros',
    description: 'Lunettes de soleil polarisées premium avec verres TAC polarisés qui éliminent l\'éblouissement de l\'eau, la neige et les surfaces routières. Disponibles dans tous les styles de montures incluant aviateur, wayfarer, sport et enveloppant. Essentielles pour les marques outdoor, pêche et conduite.',
    moq: 'MOQ : 100 paires',
    price: 'À partir de 3,50 $/paire',
  },
  {
    name: 'Lunettes Anti Lumière Bleue',
    href: '/fr/produits/lumiere-bleue/',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'lunettes lumière bleue en gros',
    description: 'Lunettes de protection oculaire numérique avec technologie avancée de filtrage de la lumière bleue. Bloquent 30-50% de la lumière bleue nocive des écrans d\'ordinateurs, smartphones et éclairage LED. Disponibles en montures avec ou sans correction. Demande croissante des marques corporate, gaming et bien-être.',
    moq: 'MOQ : 50 paires',
    price: 'À partir de 2,50 $/paire',
  },
  {
    name: 'Lunettes de Soleil Écologiques',
    href: '/fr/produits/ecologique/',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'fabricant lunettes durables',
    description: 'Lunettes durables fabriquées à partir de plastique océanique recyclé (rPET), bambou, bio-acétate et aluminium recyclé. Parfaites pour les marques ciblant les consommateurs éco-responsables. Positionnement retail premium de 30-50% en croissance.',
    moq: 'MOQ : 100 paires',
    price: 'À partir de 3,00 $/paire',
  },
  {
    name: 'Lunettes de Soleil en Acétate',
    href: '/fr/produits/acetate/',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'fabricant lunettes acétate',
    description: 'Montures en acétate artisanales en écaille de tortue, cristal, marbre et motifs personnalisés. Acétate italien premium Mazzucchelli et acétate chinois de hautre qualité disponibles. Découpe CNC et polissage à la main pour une finition luxueuse.',
    moq: 'MOQ : 100 paires',
    price: 'À partir de 4,00 $/paire',
  },
  {
    name: 'Lunettes de Soleil TR90',
    href: '/fr/produits/tr90/',
    emoji: '🏋️',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'fabricant lunettes TR90',
    description: 'Montures ultra-légères en nylon TR90 (15-20g) avec flexibilité mémoire et propriétés hypoallergéniques. Fabriquées en Grilamid EMS-Grivory suisse. Idéales pour les gammes sport, enfants et confort quotidien.',
    moq: 'MOQ : 100 paires',
    price: 'À partir de 2,50 $/paire',
  },
];

export default function ProductsPageFr() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Produits', href: '/fr/produits/' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Collection de Lunettes de Soleil en Gros</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Explorez notre gamme complète de styles de lunettes de soleil en gros. En tant que fabricant professionnel de lunettes de soleil, nous offrons une personnalisation OEM et ODM complète pour chaque catégorie. Toutes les montures sont disponibles avec votre marque, options de verres et emballage personnalisés pour correspondre à l&apos;identité de votre marque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border group flex gap-6"
              >
                {product.image ? (
                  <img src={product.image} alt={`${product.name} en Gros - EyeView`} loading="lazy" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                ) : (
                  <span className="text-6xl flex-shrink-0">{product.emoji}</span>
                )}
                <div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{product.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary-600 font-semibold">{product.moq}</span>
                    <span className="text-green-600 font-semibold">{product.price}</span>
                  </div>
                  <span className="inline-block mt-3 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Voir les Détails →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Besoin de Lunettes de Soleil Personnalisées en Gros ?" description="Indiquez-nous vos besoins et nous vous fournirons un devis détaillé sous 24 heures. Tous les styles sont entièrement personnalisables avec votre marque." />
    </>
  );
}
