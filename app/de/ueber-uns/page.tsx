import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über EyeView | Sonnenbrillen-Hersteller seit 2006 | OEM- & ODM-Fabrik',
  description: 'EyeView Sunglasses ist ein führender OEM/ODM-Sonnenbrillen-Hersteller, gegründet 2006. Über 500 Markenkunden in mehr als 50 Ländern. CE-, FDA-, ISO 9001-zertifiziert. Direkte Fabrikpreise.',
  keywords: 'Sonnenbrillen Hersteller, Brillenfabrik, OEM Brillenunternehmen, Brillen Lieferant China, über EyeView, Brillen Hersteller',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/ueber-uns',
    languages: {
      'en': 'https://eyeviewsunglasses.com/about',
      'de': 'https://eyeviewsunglasses.com/de/ueber-uns',
    },
  },
  openGraph: {
    title: 'Über EyeView | Sonnenbrillen-Hersteller seit 2006',
    description: 'EyeView Sunglasses ist ein führender OEM/ODM-Sonnenbrillen-Hersteller, gegründet 2006. Über 500 Markenkunden in mehr als 50 Ländern.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/ueber-uns',
    locale: 'de_DE',
  },
}

export default function AboutPageDe() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EyeView Sunglasses",
          "url": "https://eyeviewsunglasses.com",
          "logo": "https://eyeviewsunglasses.com/logo.png",
          "foundingDate": "2006",
          "founder": { "@type": "Person", "name": "Jacky Chen" },
          "description": "Führender OEM/ODM-Sonnenbrillen-Hersteller mit über 500 Markenkunden in mehr als 50 Ländern. CE-, FDA-, ISO 9001-zertifizierte Fabrik.",
          "address": { "@type": "PostalAddress", "addressCountry": "CN" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100, "maxValue": 200 },
          "sameAs": [],
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Chinese", "German"] }
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Über EyeView Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von einer Zwei-Personen-Werkstatt im Jahr 2006 zu einer modernen Fabrik, die über 500 Marken 
            weltweit beliefert. Das ist, wer wir sind und warum wir tun, was wir tun.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EyeView begann 2006 in einer Werkstatt, die ehrlich gesagt kaum größer war als eine 
                  Doppelgarage. Wir waren nur ich — Jacky Chen — und ein Techniker, die Acetat-Fassungen 
                  von Hand polierten und Scharniere manuell montierten. Unsere erste &quot;Produktion&quot; 
                  waren 200 Paar für einen Surfshop in Sydney. Ich habe jede Schachtel persönlich verpackt.
                </p>
                <p>
                  Bis 2010 waren wir aus der Garage herausgewachsen und in unsere erste richtige 
                  Fabrikhalle umgezogen. Wir fügten Spritzguss hinzu, kauften unsere erste CNC-Maschine 
                  und stellten ein kleines Qualitätskontrollteam ein. Der Surfshop in Sydney? Die sind 
                  immer noch Kunden. Ihre Bestellungen sind nur etwas größer geworden.
                </p>
                <p>
                  Heute betreiben wir eine 5.000 m² große Anlage mit 5 Produktionslinien, über 150 
                  Mitarbeitern und der Kapazität, 10.000 Paar pro Tag zu produzieren. Wir haben über 
                  500 Marken in mehr als 50 Ländern beliefert — von Kickstarter-Startups, die 100 Paar 
                  bestellen, bis zu Einzelhandelsketten, die 50.000 bestellen. Die Werkstatt ist längst 
                  Geschichte, aber die Einstellung nicht: Jedes Paar wird immer noch so inspiziert, als 
                  wäre es für den Surfshop in Sydney.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-4">🏭</span>
                <span className="text-primary-600 font-medium">Seit 2006</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Unsere Mission</h2>
              <p className="text-gray-600">
                Qualitativ hochwertige Sonnenbrillen-Fertigung für Marken jeder Größe zugänglich machen. 
                Ob Sie ein Einzelunternehmer mit einer Skizze auf einer Serviette sind oder eine 
                Einzelhandelskette, die auf 100.000 Einheiten skaliert — Sie verdienen einen 
                Fertigungspartner, der Ihre Marke wie seine eigene behandelt. Kein Mindestbudget 
                erforderlich. Keine Überheblichkeit. Nur gutes Produkt und ehrliche Kommunikation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Unsere Vision</h2>
              <p className="text-gray-600">
                Die Fabrik zu sein, auf die die nächste Generation großer Brillenmarken zeigt und sagt: 
                &quot;Die haben uns beim Start geholfen.&quot; Wir haben bereits Hunderte von Marken 
                beim Start unterstützt. Wir wollen Tausende weitere unterstützen — und die, die wir 
                bereits gestartet haben, weiter wachsen lassen. Ihr Erfolg ist unser bestes Marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">EyeView in Zahlen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">19+</div>
              <div className="text-primary-100">Jahre im Geschäft</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Markenkunden</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Belieferte Länder</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Produzierte Paare / Jahr</div>
            </div>
          </div>
        </section>

        {/* Factory Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fabrikkapazitäten</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unsere Anlage ist auf Flexibilität ausgelegt — Kleinserien und Großaufträge, OEM und ODM, 
              einfache Designs und komplexe Konstruktionen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard
              icon="⚙️"
              title="5 Produktionslinien"
              description="Dedizierte Linien für Acetat-, Metall-, TR90/Spritzguss- und Mischmaterial-Fassungen. Jede Linie ist für ihren Materialtyp optimiert."
            />
            <CapabilityCard
              icon="📦"
              title="10.000 Paar / Tag"
              description="Tägliche Produktionskapazität über alle Linien. In der Hochsaison können wir mit zusätzlichen Schichten auf 15.000/Tag skalieren."
            />
            <CapabilityCard
              icon="📐"
              title="5.000 m² Anlage"
              description="Moderne Produktionsanlage mit separaten Bereichen für Schneiden, Montage, Polieren, Qualitätskontrolle und Verpackung. Sauber, organisiert und effizient."
            />
            <CapabilityCard
              icon="🔬"
              title="Hauseigenes QK-Labor"
              description="UV-Transmissionstests, Aufpralltests, Scharnier-Zyklusprüfungen und Maßverifizierung — alles wird intern durchgeführt, bevor etwas versendet wird."
            />
            <CapabilityCard
              icon="🎨"
              title="400+ ODM-Designs"
              description="Katalog von markenfertigen Fassungen, der Flieger, Wayfarer, Katzenaugen, Sport-Wraparounds, runde, Oversize- und Kinderstile umfasst."
            />
            <CapabilityCard
              icon="🛠️"
              title="Vollständige OEM-Kapazität"
              description="Von Ihrer CAD-Datei bis zum fertigen Produkt. Individuelle Formenfertigung, CNC-Prototyping und Kleinserienbemusterung vor der Serienproduktion."
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zertifizierungen & Compliance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jedes Produkt, das wir versenden, erfüllt internationale Sicherheits- und Qualitätsstandards. 
              Das sind keine Abzeichen, die wir sammeln — das sind Anforderungen, die wir ernst nehmen.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <CertCard
              name="CE"
              description="Europäische Konformität"
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
            />
            <CertCard
              name="FDA"
              description="US-Konformität"
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
            />
            <CertCard
              name="UV400"
              description="100% UV-Schutz"
            />
            <CertCard
              name="ISO 9001"
              description="Qualitätsmanagement"
              link="https://www.iso.org/iso-9001-quality-management.html"
            />
            <CertCard
              name="ANSI Z80.3"
              description="US-Optikstandard"
            />
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Die Menschen hinter dem Produkt</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir sind über 150 Mitarbeiter mit Leidenschaft für die Herstellung großartiger Sonnenbrillen. 
              Hier sind einige der Gesichter, mit denen Sie direkt zusammenarbeiten werden.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamCard
              initials="JC"
              name="Jacky Chen"
              role="Gründer & CEO"
              bio="Gründete EyeView 2006 aus einer Garagenwerkstatt. 20 Jahre Erfahrung in der Brillenfertigung. Prüft Muster immer noch persönlich."
            />
            <TeamCard
              initials="LW"
              name="Lisa Wang"
              role="Designleiterin"
              bio="Ehemalige Designerin bei einem großen italienischen Brillenhaus. Kam 2014 zu EyeView. Leitet unser 8-köpfiges Designteam und betreut alle OEM-Projekte."
            />
            <TeamCard
              initials="DZ"
              name="David Zhang"
              role="Produktionsleiter"
              bio="15 Jahre in der Fertigung. Überwacht alle 5 Produktionslinien und über 80 Produktionsmitarbeiter. Bekannt für seine Effizienz-Besessenheit."
            />
            <TeamCard
              initials="SC"
              name="Sarah Chen"
              role="Qualitätskontrollleiterin"
              bio="Ausgebildet in optischer Prüfung in einem Schweizer Labor. Leitet unsere QK-Abteilung mit einem Ziel von 0,5 % Fehlerquote. Nichts wird ohne ihre Freigabe versendet."
            />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Wir begannen mit 200 ODM-Paaren als Test. Drei Jahre später bestellen wir 5.000 individuelle OEM-Paare pro Quartal. EyeView ist mit uns gewachsen — sie haben uns nie gedrängt, mehr zu bestellen, als wir bereit waren."
              name="Rachel M."
              title="Gründerin, Coastal Shade Co."
              location="Melbourne, Australien"
            />
            <TestimonialCard
              quote="Ich hatte schlechte Erfahrungen mit zwei Fabriken gemacht, bevor ich EyeView fand. Der Unterschied war sofort spürbar — Jackys Team hat wirklich zugehört, was ich brauchte, anstatt mir einfach die billigste Option anzubieten. Die Qualität war über 12 Bestellungen hinweg konstant."
              name="Marcus T."
              title="CEO, Elevate Eyewear"
              location="Atlanta, USA"
            />
            <TestimonialCard
              quote="Der Bemusterungsprozess hat mich überzeugt. Sie schickten fünf Paare in verschiedenen Materialien, damit ich Seite an Seite vergleichen konnte. Keine andere Fabrik hat das angeboten. Wir arbeiten seit vier Jahren zusammen und ich habe keine einzige Beschwerde."
              name="Henrik S."
              title="Einkäufer, Nordic Optics"
              location="Stockholm, Schweden"
            />
            <TestimonialCard
              quote="Als Startup ohne Brillenerfahrung hatte ich erwartet, von echten Fabriken ignoriert zu werden. EyeView hat meine erste Bestellung von 100 Stück genauso ernst genommen wie ihre Großkunden. Diese Loyalität funktioniert in beide Richtungen — jetzt sind wir einer ihrer größten Kunden."
              name="Priya K."
              title="Gründerin, Dusk & Dawn Eyewear"
              location="Toronto, Kanada"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wofür wir stehen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="Qualität ohne Ausreden"
              description="Jedes Paar wird inspiziert. Jedes Glas UV-getestet. Jedes Scharnier durchläuft Zyklusprüfungen. Wir versenden kein Produkt, das wir nicht unter unserem eigenen Namen verkaufen würden."
            />
            <ValueCard
              icon="🤝"
              title="Partnerschaften, keine Transaktionen"
              description="80 % unseres Umsatzes stammen von Stammkunden. Wir verdienen lieber Ihre fünfte Bestellung durch großartigen Service, als Ihre erste Bestellung für maximale Marge auszupressen."
            />
            <ValueCard
              icon="💬"
              title="Ehrliche Kommunikation"
              description="Wenn etwas 60 Tage dauert, sagen wir 60 Tage — nicht 30. Wenn ein Material für Ihr Design nicht funktioniert, sagen wir es Ihnen, bevor Sie Geld für eine Form verschwenden. Keine Überraschungen."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Möchten Sie sehen, was wir für Ihre Marke tun können?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ob Sie Ihre erste Linie starten oder eine bestehende Marke skalieren — wir freuen uns auf 
            ein Gespräch. Keine Verpflichtung, kein Verkaufsdruck — nur ein ehrliches Gespräch darüber, 
            was möglich ist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">
              Kontaktieren Sie uns
            </Link>
            <Link href="/de/produkte" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Produkte ansehen
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function CapabilityCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function CertCard({ name, description, link }: { name: string; description: string; link?: string }) {
  const content = (
    <>
      <div className="text-2xl font-bold text-primary-600 mb-2">{name}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener" className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow block">
        {content}
      </a>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 text-center shadow">
      {content}
    </div>
  )
}

function TeamCard({ initials, name, role, bio }: { initials: string; name: string; role: string; bio: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {initials}
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-primary-600 text-sm font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, title, location }: { quote: string; name: string; title: string; location: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="text-primary-600 text-3xl mb-3">&ldquo;</div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-sm text-gray-400">{location}</div>
      </div>
    </div>
  )
}
