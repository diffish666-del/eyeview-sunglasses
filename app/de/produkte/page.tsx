import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { BreadcrumbListSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Großhandelskollektion | Alle Stile und Kategorien',
  description: 'Entdecken Sie unsere komplette Sonnenbrillen-Großhandelskollektion: Flieger, Wayfarer, Katzenaugen, Sport, Rund, Kinder, Polarisiert, Blaulicht, Umweltfreundlich, Acetat und TR90. OEM-Individualisierung verfügbar. MOQ 50 Stück.',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/',
      'de': 'https://eyeviewsunglasses.com/de/produkte/',
    },
  },
  openGraph: {
    title: 'Sonnenbrillen-Großhandelskollektion | Alle Stile',
    description: 'Entdecken Sie unsere komplette Sonnenbrillen-Großhandelskollektion. OEM- und ODM-Individualisierung für alle Stile verfügbar.',
    url: 'https://eyeviewsunglasses.com/de/produkte/',
    locale: 'de_DE',
  },
};

const products = [
  {
    name: 'Flieger-Sonnenbrillen',
    href: '/de/produkte/flieger/',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'Flieger Sonnenbrillen Großhandel',
    description: 'Das zeitlose Flieger-Design mit klassischen Tropfenform-Metallfassungen. Ursprünglich für Piloten entwickelt, heute eine globale Mode-Ikone. Erhältlich in Gold, Silber, Gunmetal und Roségold mit einer breiten Auswahl an Glasfarben einschließlich Verlauf, Spiegel und Polarisation. Perfekt für Herren- und Unisex-Großhandelskollektionen.',
    moq: 'MOQ: 50 Paar',
    price: 'Ab 2,50 $/Paar',
  },
  {
    name: 'Wayfarer-Sonnenbrillen',
    href: '/de/produkte/wayfarer/',
    emoji: '🎸',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'Wayfarer Sonnenbrillen Großhandel',
    description: 'Die ikonische Wayfarer-Silhouette aus Premium-Acetat. Dieser universell schmeichelhafte Stil ist seit Jahrzehnten ein Bestseller. Erhältlich in Vollfarben, Schildpatt-Mustern und transparenten Fassungen. Ideal für Einzelhandel, Online-Marken und Werbeartikel.',
    moq: 'MOQ: 50 Paar',
    price: 'Ab 2,00 $/Paar',
  },
  {
    name: 'Katzenaugen-Sonnenbrillen',
    href: '/de/produkte/katzenaugen/',
    emoji: '😺',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
    keywords: 'Katzenaugen Sonnenbrillen Großhandel',
    description: 'Auffällige und feminine Cat-Eye-Fassungen, die den Damenmode-Brillenmarkt dominieren. Erhältlich in Oversize-, klassischen und dezenten Variationen mit Verzierungsoptionen einschließlich Kristallen, Metallakzenten und Verlaufsfinish. Ein Muss für jede Damen-Accessoire-Marke.',
    moq: 'MOQ: 50 Paar',
    price: 'Ab 2,30 $/Paar',
  },
  {
    name: 'Sport-Sonnenbrillen',
    href: '/de/produkte/sport/',
    emoji: '🚴',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'Sport Sonnenbrillen Großhandel',
    description: 'Hochleistungs-Wraparound-Sportbrillen für aktive Lebensstile. Gefertigt aus stoßfesten TR90- und Polycarbonat-Fassungen, Gummi-Nasenpads und rutschfesten Bügelenden. Ideal für Rad-, Lauf-, Angel-, Golf- und Outdoor-Marken.',
    moq: 'MOQ: 100 Paar',
    price: 'Ab 3,00 $/Paar',
  },
  {
    name: 'Runde Sonnenbrillen',
    href: '/de/produkte/rund/',
    emoji: '🔵',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'Runde Sonnenbrillen Großhandel',
    description: 'Vintage-inspirierte runde Fassungen mit zeitloser Retro-Ästhetik. Erhältlich in Metall- und Acetat-Konstruktionen mit Optionen von kleinen John-Lennon-Kreisen bis zu übergroßen runden Fassungen. Beliebt bei Avantgarde-Modemarken und Festival-Merchandising.',
    moq: 'MOQ: 50 Paar',
    price: 'Ab 2,00 $/Paar',
  },
  {
    name: 'Kinder-Sonnenbrillen',
    href: '/de/produkte/kinder/',
    emoji: '👶',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop',
    keywords: 'Kinder Sonnenbrillen Großhandel',
    description: 'Sichere, langlebige und farbenfrohe Brillen, speziell für Kinder von 3 bis 12 Jahren. Gefertigt aus flexiblen, BPA-freien Materialien, die raue Behandlung aushalten. UV400-Schutz mit bruchsicheren Gläsern. Erhältlich in lustigen Farben, Charakterthemen und altersgerechten Designs.',
    moq: 'MOQ: 100 Paar',
    price: 'Ab 1,50 $/Paar',
  },
  {
    name: 'Polarisierte Sonnenbrillen',
    href: '/de/produkte/polarisiert/',
    emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'Polarisierte Sonnenbrillen Großhandel',
    description: 'Premium-polarisierte Brillen mit TAC-Gläsern, die Blendung von Wasser, Schnee und Straßenoberflächen eliminieren. Erhältlich in allen Fassungsstilen einschließlich Flieger, Wayfarer, Sport und Wraparound. Unverzichtbar für Outdoor-, Angel- und Fahrmarken.',
    moq: 'MOQ: 100 Paar',
    price: 'Ab 3,50 $/Paar',
  },
  {
    name: 'Blaulichtfilter-Brillen',
    href: '/de/produkte/blaulicht/',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'Blaulicht Brillen Großhandel',
    description: 'Digitale Augenschutz-Brillen mit fortschrittlicher Blaulichtfilter-Technologie. Blockieren 30–50 % des schädlichen Blaulichts von Computer-, Smartphone- und LED-Bildschirmen. Erhältlich mit und ohne Sehstärke. Wachsende Nachfrage bei Unternehmens-, Gaming- und Wellness-Marken.',
    moq: 'MOQ: 50 Paar',
    price: 'Ab 2,50 $/Paar',
  },
  {
    name: 'Umweltfreundliche Sonnenbrillen',
    href: '/de/produkte/umweltfreundlich/',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'Nachhaltige Sonnenbrillen Hersteller',
    description: 'Nachhaltige Brillen aus recyceltem Ozeanplastik (rPET), Bambus, Bio-Acetat und recyceltem Aluminium. Perfekt für Marken, die umweltbewusste Verbraucher ansprechen. Wachsendes Premium-Einzelhandels-Positionierungspotenzial von 30–50 %.',
    moq: 'MOQ: 100 Paar',
    price: 'Ab 3,00 $/Paar',
  },
  {
    name: 'Acetat-Sonnenbrillen',
    href: '/de/produkte/acetat/',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'Acetat Brillen Hersteller',
    description: 'Handgefertigte Acetat-Fassungen in Schildpatt-, Kristall-, Marmor- und individuellen Mustern. Premium-Acetat von Mazzucchelli (Italien) und hochwertigem chinesischem Acetat verfügbar. CNC-Schnitt und Handpolitur für ein Luxus-Finish.',
    moq: 'MOQ: 100 Paar',
    price: 'Ab 4,00 $/Paar',
  },
  {
    name: 'TR90-Sonnenbrillen',
    href: '/de/produkte/tr90/',
    emoji: '🏋️',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'TR90 Brillen Hersteller',
    description: 'Ultraleichte TR90-Nylonfassungen (15–20g) mit Memory-Flexibilität und hypoallergenen Eigenschaften. Gefertigt aus Schweizer Grilamid von EMS-Grivory. Ideal für Sport-, Kinder- und Alltagslinien.',
    moq: 'MOQ: 100 Paar',
    price: 'Ab 2,50 $/Paar',
  },
];

export default function ProductsPageDe() {
  return (
    <>
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
      ]} />

      <Breadcrumb items={[
        { name: 'Startseite', href: '/de/' },
        { name: 'Produkte' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sonnenbrillen-Großhandelskollektion</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Entdecken Sie unser komplettes Sortiment an Sonnenbrillen-Großhandelsstilen. Als professioneller Brillenhersteller bieten wir vollständige OEM- und ODM-Individualisierung für jede Kategorie. Alle Fassungen sind mit individuellem Branding, Glasoptionen und Verpackung nach Ihren Markenwünschen erhältlich.
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
                  <img src={product.image} alt={`${product.name} Großhandel - EyeView`} loading="lazy" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
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
                    Details ansehen →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Brauchen Sie individuelle Sonnenbrillen im Großhandel?"
        description="Teilen Sie uns Ihre Anforderungen mit und wir erstellen Ihnen innerhalb von 24 Stunden ein detailliertes Angebot. Alle Stile sind vollständig mit Ihrem Branding individualisierbar."
        primaryText="Kostenloses Angebot"
        primaryHref="/de/kontakt"
        secondaryText="Produkte ansehen"
        secondaryHref="/de/produkte"
      />
    </>
  );
}
