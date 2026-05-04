import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: {
    absolute: 'Sonnenbrillen Großhandel Hersteller | OEM Brillenfabrik für individuelle Sonnenbrillen - EyeView',
  },
  description: 'EyeView ist ein führender Sonnenbrillen-Großhandelshersteller mit OEM- und ODM-Dienstleistungen. Über 15 Jahre Erfahrung, mehr als 500 globale Kunden. Fordern Sie noch heute Ihr kostenloses Angebot an.',
  openGraph: {
    title: 'Sonnenbrillen Großhandel Hersteller | OEM-Fabrik - EyeView',
    description: 'EyeView ist ein führender Sonnenbrillen-Großhandelshersteller mit OEM- und ODM-Dienstleistungen. Über 15 Jahre Erfahrung, mehr als 500 globale Kunden.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://eyeviewsunglasses.com/de',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de',
    languages: {
      'en': 'https://eyeviewsunglasses.com',
      'de': 'https://eyeviewsunglasses.com/de',
    },
  },
};

const stats = [
  { number: '15+', label: 'Jahre Erfahrung', emoji: '🏭' },
  { number: '500+', label: 'Globale Kunden', emoji: '🌍' },
  { number: '1M+', label: 'Produzierte Brillen', emoji: '🕶️' },
  { number: '100%', label: 'Qualitätsgarantie', emoji: '✅' },
];

const features = [
  {
    emoji: '🎨',
    title: 'Vollständige Individualisierung',
    description: 'Vom Fassungsdesign und der Glasfarbe bis zur Logogravur und individuellen Verpackung — wir verwirklichen Ihre Sonnenbrillen-Vision mit umfassenden OEM- und ODM-Fertigungskapazitäten.',
  },
  {
    emoji: '💰',
    title: 'Wettbewerbsfähige Fabrikpreise',
    description: 'Als Direkthersteller mit eigener Produktionsanlage eliminieren wir Zwischenhändlerkosten. Großhandelspreise ab 1,50 $ pro Paar mit Mengenrabatten verfügbar.',
  },
  {
    emoji: '⚡',
    title: 'Schnelle Lieferung',
    description: 'Unser optimierter Produktionsprozess liefert Muster in 5–7 Tagen und Großbestellungen in 15–25 Tagen. Eilbestellungen für saisonale Kollektionen und Markteinführungen verfügbar.',
  },
  {
    emoji: '🔒',
    title: 'Premium-Qualitätskontrolle',
    description: 'Jedes Paar durchläuft eine strenge 6-Punkte-Qualitätsprüfung. Unsere Brillen erfüllen internationale Standards einschließlich FDA, CE, UV400 und ANSI Z80.3-Zertifizierung.',
  },
  {
    emoji: '📦',
    title: 'Niedrige Mindestbestellmenge',
    description: 'Starten Sie mit nur 50 Stück pro Modell — ideal für neue Marken, die den Markt testen, Boutiquen und Werbekampagnen. Keine großen Lagerverpflichtungen.',
  },
  {
    emoji: '🌍',
    title: 'Weltweiter Versand & Logistik',
    description: 'Wir versenden in über 60 Länder per DHL, FedEx, UPS und Seefracht. Lieferung frei Haus mit vollständiger Zolldokumentation und Echtzeit-Sendungsverfolgung.',
  },
];

const products = [
  { name: 'Flieger-Sonnenbrillen', href: '/de/produkte/flieger/', emoji: '✈️', description: 'Klassische Flieger mit Metallrahmen und Tropfenform-Gläsern. Perfekt für modische Großhandelskollektionen.' },
  { name: 'Wayfarer-Sonnenbrillen', href: '/de/produkte/wayfarer/', emoji: '🎸', description: 'Ikonische Wayfarer aus Acetat. Der meistverkaufte Stil für Einzelhandel und Werbekampagnen.' },
  { name: 'Katzenaugen-Sonnenbrillen', href: '/de/produkte/katzenaugen/', emoji: '😺', description: 'Trendige Cat-Eye-Fassungen für den Damenmode-Markt. Auffällige und elegante Designs.' },
  { name: 'Sport-Sonnenbrillen', href: '/de/produkte/sport/', emoji: '🚴', description: 'Hochleistungs-Sportbrillen mit Wraparound-Design und stoßfesten Gläsern.' },
  { name: 'Runde Sonnenbrillen', href: '/de/produkte/rund/', emoji: '🔵', description: 'Vintage-inspirierte runde Fassungen mit Retro-Charme. Beliebt bei Mode- und Lifestyle-Marken.' },
  { name: 'Kinder-Sonnenbrillen', href: '/de/produkte/kinder/', emoji: '👶', description: 'Sichere, langlebige und farbenfrohe Brillen, speziell für Kinder von 3 bis 12 Jahren.' },
  { name: 'Polarisierte Sonnenbrillen', href: '/de/produkte/polarisiert/', emoji: '🌊', description: 'Premium-Polarisationsgläser, die Blendung eliminieren. Unverzichtbar für Outdoor- und Wassersport.' },
  { name: 'Blaulichtfilter-Brillen', href: '/de/produkte/blaulicht/', emoji: '💻', description: 'Digitaler Augenschutz, der schädliches Blaulicht von Bildschirmen und Geräten filtert.' },
  { name: 'Umweltfreundliche Sonnenbrillen', href: '/de/produkte/umweltfreundlich/', emoji: '🌱', description: 'Nachhaltige Brillen aus recyceltem Ozeanplastik, Bambus und Bio-Acetat-Materialien.' },
  { name: 'Acetat-Sonnenbrillen', href: '/de/produkte/acetat/', emoji: '🎨', description: 'Handgefertigte Acetat-Fassungen in Premium-Mustern. Italienisches Mazzucchelli-Acetat verfügbar.' },
  { name: 'TR90-Sonnenbrillen', href: '/de/produkte/tr90/', emoji: '🏋️', description: 'Ultraleichte TR90-Nylonfassungen mit Memory-Flexibilität für Sport und Alltag.' },
];

const steps = [
  { step: '01', title: 'Erstberatung', description: 'Teilen Sie uns Ihre Anforderungen mit — Stil, Menge, Individualisierungswünsche und Budget. Unser Team bietet fachkundige Beratung bei der Auswahl der richtigen Produkte für Ihren Markt.' },
  { step: '02', title: 'Design & Muster', description: 'Wir erstellen detaillierte Designs nach Ihren Spezifikationen. Erhalten Sie physische Muster in 5–7 Werktagen zur Prüfung und Freigabe vor der Serienproduktion.' },
  { step: '03', title: 'Freigabe & Produktion', description: 'Nach Musterfreigabe starten wir die Serienproduktion. Unsere Kapazität bewältigt Bestellungen von 50 bis über 100.000 Stück bei gleichbleibender Qualitätskontrolle.' },
  { step: '04', title: 'Qualitätsprüfung', description: 'Jede Charge durchläuft eine umfassende 6-Punkte-Qualitätsprüfung einschließlich UV-Schutz-Tests, Scharnier-Haltbarkeit, Glasklarheit und Fassungsausrichtung.' },
  { step: '05', title: 'Versand & Lieferung', description: 'Wir übernehmen Verpackung, Etikettierung und Logistik. Wählen Sie zwischen Express-Luftfracht (5–7 Tage) oder wirtschaftlichem Seeversand (20–30 Tage) mit vollständiger Sendungsverfolgung und Zollunterstützung.' },
];

const faqs = [
  {
    question: 'Wie hoch ist die Mindestbestellmenge (MOQ) für Sonnenbrillen im Großhandel?',
    answer: 'Unsere Standard-MOQ beträgt 50 Stück pro Modell und Farbkombination. Für Neukunden, die den Markt testen möchten, bieten wir flexible Starterpakete an. Bei individuellen OEM-Bestellungen mit Logogravur oder einzigartigen Designs kann die MOQ bei 100–300 Stück beginnen, je nach Komplexität. Kontaktieren Sie uns für spezifische Anforderungen.',
  },
  {
    question: 'Wie lange dauert die Produktion einer Sonnenbrillen-Großhandelsbestellung?',
    answer: 'Die Produktionszeiten variieren je nach Bestellgröße und Individualisierungsgrad. Standardbestellungen (vorhandene Designs) werden in der Regel innerhalb von 15–20 Werktagen versandt. Individuelle OEM-Bestellungen mit neuen Designs benötigen 20–30 Werktage inklusive Bemusterung. Eilproduktion ist gegen Aufpreis möglich und verkürzt die Zeit auf 10–15 Tage.',
  },
  {
    question: 'Bieten Sie OEM- und ODM-Fertigungsdienstleistungen für Sonnenbrillen an?',
    answer: 'Ja, wir bieten sowohl OEM- (Original Equipment Manufacturing) als auch ODM-Dienstleistungen (Original Design Manufacturing). Bei OEM liefern Sie das Design und wir fertigen. Bei ODM erstellt unser Designteam einzigartige Modelle basierend auf Ihrer Markenausrichtung. Beide Optionen umfassen individuelle Logoplatzierung, Verpackung und Etikettierung.',
  },
  {
    question: 'Welche Qualitätszertifizierungen erfüllen Ihre Sonnenbrillen?',
    answer: 'Alle unsere Sonnenbrillen erfüllen oder übertreffen internationale Qualitätsstandards einschließlich UV400-Schutz (blockiert 99,9 % der UVA- und UVB-Strahlen), CE-Zertifizierung für europäische Märkte, FDA-Konformität für die USA und ANSI Z80.3-Standards. Wir bieten auf Anfrage auch die Zertifizierung nach EN ISO 12312-1 an.',
  },
  {
    question: 'Können Sie Sonnenbrillen mit unserem Logo und Markenverpackung individualisieren?',
    answer: 'Selbstverständlich. Wir bieten umfassende Branding-Dienstleistungen einschließlich Lasergravur des Logos auf Fassungen und Gläsern, individuell bedruckte oder gravierte Etuis, gebrandete Mikrofasertücher, Anhängeetiketten, Barcode-Labels und verkaufsfertige Verpackung. Unser Designteam kann bei der Erstellung einer Verpackung helfen, die Ihre Markenidentität unterstreicht.',
  },
  {
    question: 'Welche Glastypen sind für Großhandelsbestellungen verfügbar?',
    answer: 'Wir bieten eine breite Palette an Glasoptionen: Standard-UV400-Gläser, polarisierte Gläser (TAC und Glas), photochrome Gläser (selbsttönend), Blaulichtfilter-Gläser, verspiegelte Gläser, Verlaufsgläser und verschreibungsfähige Fassungen. Jeder Glastyp ist in mehreren Farben und Beschichtungen erhältlich.',
  },
  {
    question: 'Liefern Sie international? Welche Versandoptionen gibt es?',
    answer: 'Ja, wir versenden in über 60 Länder weltweit. Die Versandoptionen umfassen DHL Express (3–5 Werktage), FedEx (3–7 Werktage), UPS (5–8 Werktage) und Seefracht (20–35 Tage für Großbestellungen). Wir übernehmen die gesamte Exportdokumentation und können DDP (geliefert verzollt) oder FOB nach Ihrer Präferenz versenden.',
  },
  {
    question: 'Wie beginne ich mit einer Sonnenbrillen-Großhandelsbestellung?',
    answer: 'Der Einstieg ist einfach: 1) Kontaktieren Sie uns per E-Mail an jacky@eyeviewsunglasses.com oder WhatsApp unter +86-18850281211 mit Ihren Anforderungen. 2) Unser Team erstellt Ihnen innerhalb von 24 Stunden ein detailliertes Angebot. 3) Prüfen und genehmigen Sie die Muster. 4) Geben Sie Ihre Bestellung auf und wir kümmern uns um den Rest. Wir heißen sowohl Erstkäufer als auch etablierte Marken willkommen.',
  },
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So bestellen Sie Sonnenbrillen im Großhandel bei EyeView',
  description: 'Unser einfacher 5-Schritte-Prozess macht die Bestellung individueller Sonnenbrillen im Großhandel leicht, von der Erstberatung bis zur Lieferung.',
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
      name: 'Erstberatung',
      text: 'Teilen Sie uns Ihre Anforderungen mit — Stil, Menge, Individualisierungswünsche und Budget. Unser Team bietet fachkundige Beratung.',
      url: 'https://eyeviewsunglasses.com/de/kontakt/',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design & Muster',
      text: 'Wir erstellen detaillierte Designs nach Ihren Spezifikationen. Erhalten Sie physische Muster in 5–7 Werktagen.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Freigabe & Produktion',
      text: 'Nach Musterfreigabe starten wir die Serienproduktion mit gleichbleibender Qualitätskontrolle.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Qualitätsprüfung',
      text: 'Jede Charge durchläuft eine 6-Punkte-Qualitätsprüfung einschließlich UV-Tests, Scharnier-Haltbarkeit und Glasklarheit.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Versand & Lieferung',
      text: 'Wir übernehmen Verpackung, Etikettierung und Logistik. Express-Luftfracht (5–7 Tage) oder Seeversand (20–30 Tage) mit vollständiger Sendungsverfolgung.',
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://eyeviewsunglasses.com/de' },
  ],
};

export default function HomePageDe() {
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
              Ihr vertrauenswürdiger <span className="text-yellow-300">Sonnenbrillen-Großhandelshersteller</span> und OEM-Fabrik
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              EyeView Sunglasses ist ein führender Sonnenbrillen-Großhandelshersteller mit über 15 Jahren Erfahrung in OEM- und ODM-Produktion. Wir unterstützen Marken, Einzelhändler und Distributoren weltweit dabei, individuelle Premium-Sonnenbrillen zu wettbewerbsfähigen Fabrikpreisen zu beziehen. Von klassischen Fliegerbrillen bis zu trendigen Katzenaugen-Fassungen fertigen wir jeden Stil mit Präzision und Qualität.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/de/kontakt/" className="inline-block bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                🕶️ Kostenloses Angebot anfordern
              </Link>
              <Link href="/de/produkte/" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
                Produkte ansehen →
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum EyeView als Ihren Brillenhersteller wählen?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Als etablierte Sonnenbrillen-Fabrik verbinden wir Fertigungsexpertise, hochwertige Materialien und wettbewerbsfähige Preise, um außergewöhnlichen Wert für Ihre Marke zu liefern.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Sonnenbrillen-Großhandelssortiment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Entdecken Sie unsere umfangreiche Kollektion von Sonnenbrillen-Großhandelsstilen. Jede Kategorie ist vollständig individualisierbar mit Ihrem Branding, Glasoptionen und Fassungsanpassungen.
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
                  Mehr erfahren →
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">So bestellen Sie Sonnenbrillen im Großhandel</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Unser einfacher 5-Schritte-Prozess macht die Bestellung individueller Sonnenbrillen im Großhandel leicht, von der Erstberatung bis zur Lieferung frei Haus.
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
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zu Sonnenbrillen im Großhandel" />

      {/* CTA */}
      <CTASection
        title="Bereit, Ihre Sonnenbrillenmarke zu starten?"
        description="Holen Sie sich noch heute Ihr kostenloses Angebot. Keine Mindestanfrage. Muster in 5 Tagen verfügbar. Antwort innerhalb von 24 Stunden."
        primaryText="Kostenloses Angebot"
        primaryHref="/de/kontakt"
        secondaryText="Produkte ansehen"
        secondaryHref="/de/produkte"
      />
    </>
  );
}
