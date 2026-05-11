import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog der Sonnenbrillen-Industrie | Herstellung & Branding',
  description: 'Expertenwissen von einem Sonnenbrillen-Hersteller mit 20 Jahren Erfahrung. OEM/ODM-Leitfäden, Glastechnologie, Beschaffungstipps und Strategien für Unternehmer.',
  keywords: 'Sonnenbrillen Blog, Brillen Industrie, Sonnenbrillen Herstellung, OEM Brillen Leitfaden, Sonnenbrillenmarke gründen, Gläser Ratgeber, Hersteller finden',
  alternates: {
    canonical: '/de/blog',
    languages: {
      'en': '/blog',
      'de': '/de/blog',
    },
  },
}

const posts = [
  {
    slug: 'sonnenbrillen-hersteller-finden',
    title: 'Zuverlässigen Sonnenbrillen-Hersteller finden: Leitfaden 2026',
    excerpt: 'Ein Fabrikinhaber verrät, wo Sie Hersteller finden, wie Sie Zwischenhändler auf Alibaba erkennen, 10 Bewertungskriterien und Verhandlungstipps von der anderen Seite des Tisches.',
    date: '28. April 2026',
    category: 'Beschaffung',
    readTime: '16 Min. Lesezeit',
    emoji: '🔍',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-glaeser-ratgeber',
    title: 'Sonnenbrillen-Gläser: Kompletter Ratgeber 2026',
    excerpt: 'Polycarbonat, CR-39, Mineralglas oder TAC? Grau, braun oder verspiegelt? Polarisiert oder nicht? Echte Kosten, ehrliche Vergleiche und die Glasstrategie für Ihre Marke.',
    date: '25. April 2026',
    category: 'Technologie',
    readTime: '14 Min. Lesezeit',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM Sonnenbrillen: Was ist der Unterschied? Kompletter Leitfaden',
    excerpt: 'Nach 3.000 Gesprächen über OEM vs ODM — hier die ehrliche Version. Echte Kosten, echte Lieferzeiten und ein Entscheidungsrahmen, der Ihnen wirklich hilft.',
    date: '20. April 2026',
    category: 'Fertigung',
    readTime: '12 Min. Lesezeit',
    emoji: '🏭',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-marke-gruenden',
    title: 'Eigene Sonnenbrillenmarke gründen: Kompletter Leitfaden',
    excerpt: 'Der komplette Fahrplan von der Idee zum ersten Verkauf — Marktforschung, Beschaffung, Branding, Preise und Marketing. Alles, was ich 2006 gerne gewusst hätte.',
    date: '28. März 2026',
    category: 'Business',
    readTime: '10 Min. Lesezeit',
    emoji: '🚀',
    featured: true,
  },
  {
    slug: 'fda-ce-zertifizierung-sonnenbrillen',
    title: 'FDA- & CE-Zertifizierung für Sonnenbrillen: Compliance-Leitfaden',
    excerpt: 'FDA-Registrierung, CE-Kennzeichnung, UV-Tests und ANSI-Standards erklärt. Schritt für Schritt — damit Ihre Sendung nicht am Zoll hängen bleibt.',
    date: '4. Mai 2026',
    category: 'Compliance',
    readTime: '15 Min. Lesezeit',
    emoji: '📋',
    featured: false,
  },
  {
    slug: 'individuelle-sonnenbrillen-verpackung',
    title: 'Individuelle Sonnenbrillen-Verpackung: Branding-Leitfaden 2026',
    excerpt: 'Hartschalenetuis, Mikrofaserbeutel, Einzelhandelsboxen und mehr — echte Kosten pro Stück und Tipps, die den wahrgenommenen Wert um 86 % steigern.',
    date: '3. Mai 2026',
    category: 'Branding',
    readTime: '14 Min. Lesezeit',
    emoji: '📦',
    featured: false,
  },
  {
    slug: 'vergleich-rahmenmaterialien',
    title: 'TR90 vs. Acetat vs. Metall: Welches Fassungsmaterial passt?',
    excerpt: 'Drei Materialien, drei Welten — echte Kostendaten, Gewichtsvergleiche und welches Material für welche Markenstrategie am besten funktioniert.',
    date: '3. Mai 2026',
    category: 'Materialien',
    readTime: '13 Min. Lesezeit',
    emoji: '🧪',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-import-ratgeber',
    title: 'Sonnenbrillen aus China importieren: Kompletter Leitfaden 2026',
    excerpt: 'Von der Beschaffung bis zur Lieferung — Versand, Zoll, Compliance und die 7 häufigsten Importfehler vermeiden.',
    date: '4. Mai 2026',
    category: 'Import',
    readTime: '14 Min. Lesezeit',
    emoji: '🚢',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-beschichtungen-ratgeber',
    title: 'Sonnenbrillen-Beschichtungen: Spiegel, AR, Hydrophob & mehr',
    excerpt: 'Jede Beschichtungsart erklärt — mit echten Kosten pro Paar und welche sich kombinieren lassen.',
    date: '3. Mai 2026',
    category: 'Technologie',
    readTime: '12 Min. Lesezeit',
    emoji: '✨',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-design-trends-2026',
    title: 'Sonnenbrillen-Design-Trends 2026: Was sich jetzt verkauft',
    excerpt: 'Echte Verkaufsdaten statt Modemagazin-Spekulation — übergroße Fassungen, Y2K-Revival, nachhaltige Materialien und die Farben, die tatsächlich gehen.',
    date: '4. Mai 2026',
    category: 'Trends',
    readTime: '11 Min. Lesezeit',
    emoji: '🔥',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-gesichtsform-ratgeber',
    title: 'Die beste Sonnenbrille für Ihre Gesichtsform',
    excerpt: 'Rund, oval, eckig, herzförmig oder länglich — welche Fassungen zu welcher Gesichtsform passen. Mit echten Beispielen.',
    date: '4. Mai 2026',
    category: 'Stil-Ratgeber',
    readTime: '10 Min. Lesezeit',
    emoji: '😎',
    featured: false,
  },
  {
    slug: 'uv400-vs-polarisiert',
    title: 'UV400 vs. Polarisiert: Was ist der Unterschied?',
    excerpt: 'Zwei Technologien, zwei Aufgaben — UV-Schutz vs. Blendreduktion. Kosten, Nutzen und wann Ihre Marke beides braucht.',
    date: '3. Mai 2026',
    category: 'Technologie',
    readTime: '10 Min. Lesezeit',
    emoji: '☀️',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-mindestbestellmenge-ratgeber',
    title: 'Sonnenbrillen-Mindestbestellmenge: Wie viele Paare zuerst?',
    excerpt: 'ODM ab 50 Stück, OEM ab 300+ — die kluge Skalierungsstrategie für Ihre erste Bestellung ohne Überinvestition.',
    date: '3. Mai 2026',
    category: 'Fertigung',
    readTime: '11 Min. Lesezeit',
    emoji: '📊',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-preisstrategie',
    title: 'Sonnenbrillen-Preisstrategie: Vom Fabrikpreis zum Einzelhandel',
    excerpt: 'Die echte Wirtschaft hinter Sonnenbrillenpreisen — Fabrikkosten, Aufschläge, Margen und die goldene Regel der Preisgestaltung.',
    date: '4. Mai 2026',
    category: 'Business',
    readTime: '12 Min. Lesezeit',
    emoji: '💰',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-qualitaetskontrolle',
    title: 'Sonnenbrillen-Qualitätskontrolle: Inspektions-Checkliste',
    excerpt: 'Die komplette QK-Checkliste — Glastests, Fassungsinspektion, Scharnierprüfung und wann Sie eine Drittanbieter-Inspektion beauftragen sollten.',
    date: '4. Mai 2026',
    category: 'Qualität',
    readTime: '13 Min. Lesezeit',
    emoji: '✅',
    featured: false,
  },
  {
    slug: 'sonnenbrillen-gruendungskosten',
    title: 'Kosten einer Sonnenbrillenmarke: Leitfaden 2026',
    excerpt: 'Jede Kostenposition aufgeschlüsselt — von $3.000 Bootstrap bis $50.000+ Premium-Launch. Echte Zahlen aus 20 Jahren Erfahrung.',
    date: '4. Mai 2026',
    category: 'Business',
    readTime: '12 Min. Lesezeit',
    emoji: '💵',
    featured: false,
  },
  {
    slug: 'nachhaltige-sonnenbrillen-herstellung',
    title: 'Nachhaltige Sonnenbrillen-Herstellung: Materialien & Prozesse',
    excerpt: 'Bio-Acetat, recyceltes Nylon, Ozeanplastik — was „nachhaltig" wirklich bedeutet und kostet. Ohne Greenwashing.',
    date: '4. Mai 2026',
    category: 'Nachhaltigkeit',
    readTime: '12 Min. Lesezeit',
    emoji: '🌱',
    featured: false,
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
            Direkt aus der Fabrik
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ungeschönte Einblicke in Sonnenbrillen-Herstellung, Beschaffung und Markenaufbau — 
            geschrieben von jemandem, der seit 2006 Sonnenbrillen produziert.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div className="text-left">
              <div className="font-medium text-gray-900 text-sm">Geschrieben von Jacky Chen</div>
              <div className="text-xs text-gray-500">Gründer, EyeView Sunglasses</div>
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
                <span className="text-primary-600 font-semibold text-sm mb-2">EMPFOHLEN</span>
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
                <Link href={`/de/blog/${featured.slug}`} className="btn-primary self-start">
                  Artikel lesen
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/de/blog/${post.slug}`} className="card group">
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
            Fabrik-Neuigkeiten direkt in Ihr Postfach
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Eine E-Mail pro Monat. Kein Füllmaterial — nur Fertigungstipps, Markttrends 
            und Beschaffungsstrategien, die Ihnen wirklich helfen, eine bessere Marke aufzubauen.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Abonnieren
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
