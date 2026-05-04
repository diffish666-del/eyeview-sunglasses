import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Umweltfreundliche Sonnenbrillen Großhandel | Nachhaltige Brillen Hersteller - EyeView',
  description: 'Hersteller von umweltfreundlichen Sonnenbrillen im Großhandel. Recyceltes Ozeanplastik, Bambus, Bio-Acetat. Nachhaltige Brillen für umweltbewusste Marken. OEM/ODM. MOQ 200 Stk.',
  keywords: 'Umweltfreundliche Sonnenbrillen Großhandel, nachhaltige Brillen Hersteller, recycelte Sonnenbrillen, Bio-Acetat Brillen, Bambus Sonnenbrillen',
  openGraph: {
    title: 'Umweltfreundliche Sonnenbrillen Großhandel | Nachhaltige Brillen Hersteller - EyeView',
    description: 'Hersteller nachhaltiger Brillen. Recyceltes Ozeanplastik, Bambus, Bio-Acetat-Fassungen. MOQ 200 Stk. Fabrikdirektpreise mit Grün-Zertifizierungen.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/produkte/umweltfreundlich',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/umweltfreundlich',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/eco-friendly',
      'de': 'https://eyeviewsunglasses.com/de/produkte/umweltfreundlich',
    },
  },
}

const ecoFaqs = [
  {
    question: 'Welche nachhaltigen Materialien bieten Sie für die Sonnenbrillenherstellung an?',
    answer: 'Wir arbeiten derzeit mit vier umweltfreundlichen Hauptmaterialien. Erstens recyceltes Ozeanplastik (rPET) — wir beziehen Post-Consumer-Plastik aus Küstenreinigungen in Südostasien und verarbeiten es zu spritzgussfähigen Pellets. Zweitens Bambus, den wir für Bügel (die Arme der Fassung) verwenden. Drittens Bio-Acetat, speziell Eastman Acetate Renew, das 60% des fossilen Rohstoffs durch zertifizierte recycelte Inhalte mittels molekularem Recycling ersetzt. Und viertens recycelte Aluminiumlegierung für Metallrahmenkomponenten. Jedes Material hat unterschiedliche Kosten, Ästhetik und Umweltaussagen, daher helfen wir Ihnen, das richtige für Ihre Markenstory und Preispositionierung auszuwählen.',
  },
  {
    question: 'Welche Zertifizierungen können Sie für umweltfreundliche Sonnenbrillen bereitstellen?',
    answer: 'Das hängt davon ab, was Ihr Markt verlangt und welche Aussagen Sie treffen möchten. Für die Sonnenbrillen selbst liefern wir CE (EN ISO 12312-1), FDA-Konformität und UV400-Prüfung — wie bei unseren Standardlinien. Für Nachhaltigkeitsaussagen speziell: Bio-Acetat von Eastman kommt mit ISCC PLUS-Lieferkettenzertifizierung. Unsere Bambuslieferanten haben FSC-Zertifizierung. Für recyceltes Ozeanplastik können wir Dokumentation unserer Sammelpartner bereitstellen, die Quelle und Lieferkette zeigen. Wir halten auch ISO 14001 (Umweltmanagement) für unseren Fabrikbetrieb. Wenn Sie spezifische Zertifizierungen für Ihren Markt benötigen — etwa B-Corp-Dokumentation oder CO2-Fußabdruck-Berechnungen — können wir mit externen Auditoren zusammenarbeiten. Das dauert etwa 4-6 Wochen extra.',
  },
  {
    question: 'Sind umweltfreundliche Sonnenbrillen genauso haltbar wie normale?',
    answer: 'Ehrlich? Es kommt aufs Material an, aber die kurze Antwort ist ja — sie halten bei normalem Gebrauch einwandfrei. Bio-Acetat verhält sich identisch zu herkömmlichem Acetat, weil die chemische Struktur gleich ist. Recyceltes Ozeanplastik (rPET) ist tatsächlich ziemlich robust — wir spritzgießen es genauso wie Virgin-Nylon, und es besteht alle unsere Standard-Falltests und Scharnier-Ermüdungstests (2.000 Öffnungs-/Schließzyklen). Bambusbügel sind von Natur aus stark und haben eine wunderschöne Maserung, können aber empfindlich auf längere Wassereinwirkung reagieren — wir tragen eine schützende Lackbeschichtung auf. Recyceltes Aluminium ist metallurgisch identisch mit Virgin-Aluminium nach dem Umschmelzen, also null Unterschied in der Haltbarkeit. Eines möchte ich anmerken: Bio-Acetat kann etwas empfindlicher auf acetonbasierte Lösungsmittel reagieren, daher legen wir Pflegehinweise für Ihre Endkunden bei.',
  },
  {
    question: 'Wie hoch ist die Mindestbestellmenge für umweltfreundliche Sonnenbrillen?',
    answer: 'Die MOQ beträgt 200 Stück pro Modell für die meisten Öko-Materialien — etwas höher als unser Standard-Minimum von 100 Stück, weil nachhaltige Materialien separate Produktionsläufe erfordern, um Kontamination mit konventionellen Materialien zu vermeiden. Für Bambusbügel speziell beträgt die MOQ 300 Stück, weil die Bambusrohlinge chargenweise verarbeitet werden. Sie können Farben und Glasoptionen innerhalb dieser Mindestmengen mischen. Für Bio-Acetat: Wenn Sie eine individuelle Farbe oder ein Muster wollen, beträgt die Acetatplatten-MOQ von Eastman typischerweise 50 kg (genug für ca. 500-600 Paar), daher empfehlen wir für kleinere Bestellungen ihre Standardfarbpalette. Wir halten etwa 15 Bio-Acetat-Farben für Schnellstart-Bestellungen auf Lager.',
  },
  {
    question: 'Wie viel teurer sind umweltfreundliche Sonnenbrillen im Vergleich zu normalen?',
    answer: 'Weniger als die meisten erwarten. Bio-Acetat kostet etwa $1-2 mehr pro Paar im Vergleich zu Standard-Acetat — ein Paar, das normalerweise $6-8 kostet, kostet in Bio-Acetat $7-10. Bambusbügel kosten etwa $0.50-1.00 mehr pro Paar gegenüber Standard-Plastikbügeln. Recyceltes Ozeanplastik (rPET) kostet tatsächlich ungefähr dasselbe wie Virgin-Nylon — manchmal sogar weniger, je nach Harzmarktpreisen. Recyceltes Aluminium ist typischerweise $0.50-1.00 mehr pro Paar als Virgin-Aluminium. Die eigentliche Geschichte spielt sich auf der Einzelhandelsseite ab: Nachhaltige Sonnenbrillen erzielen einen Preisaufschlag von 30-50% bei Verbrauchern. Ein Paar, das in Standardmaterialien für $35 im Einzelhandel verkauft wird, kann mit legitimen Öko-Referenzen und der richtigen Markenstory für $45-55 verkauft werden. Ihre Margen verbessern sich tatsächlich.',
  },
  {
    question: 'Kann ich verschiedene Öko-Materialien in einem Paar Sonnenbrillen kombinieren?',
    answer: 'Absolut, und einige der bestverkauften Öko-Designs, die wir produzieren, machen genau das. Die beliebteste Kombination ist eine Frontfassung aus recyceltem Ozeanplastik mit Bambusbügeln — das gibt Ihnen zwei Nachhaltigkeitsgeschichten in einem Produkt, und der visuelle Kontrast zwischen dem glatten Plastik und der natürlichen Bambusmaserung sieht fantastisch aus. Eine weitere gute Kombination ist Bio-Acetat-Front mit recycelten Aluminium-Bügelakzenten. Wir haben auch Bambusbügel auf Aviator-Fassungen aus recyceltem Aluminium gemacht. Die einzige Kombination, die nicht gut funktioniert, sind Bambus-Frontfassungen — das Material ist dimensional nicht stabil genug für den Hauptrahmen, in dem die Gläser sitzen. Wir schicken Ihnen gerne Muster verschiedener Materialkombinationen, damit Sie sie sehen und anfassen können, bevor Sie sich festlegen.',
  },
]

const products = [
  {
    name: 'Ozean-Recycling Wayfarer',
    description: 'Hergestellt aus zertifiziertem Post-Consumer-Ozeanplastik, das vor den Küsten Indonesiens und Thailands gesammelt wurde. Jedes Paar verwendet etwa 10 Gramm wiedergewonnenes rPET — keine riesige Zahl, aber multiplizieren Sie das mit ein paar tausend Paaren und es summiert sich. Die spritzgegossene Fassung sieht aus und fühlt sich an wie jede Premium-Nylonfassung. Wir können Pantone-Farbabgleich machen, obwohl die beliebtesten Oberflächen Matte-Ozeanblau, Koralle und Karbonschwarz sind. Kommt mit einer Story-Karte, die die Ozeanplastik-Beschaffung erklärt — Ihre Kunden lieben das.',
    price: '$5.50 - $9.00',
    moq: '200 Stk.',
    features: ['Recyceltes Ozeanplastik', 'UV400-Schutz', 'Pantone-Farbabgleich', 'Story-Karte inklusive'],
  },
  {
    name: 'Bambusbügel Klassik',
    description: 'Standard-Acetat- oder rPET-Frontfassung gepaart mit handgefertigten Moso-Bambusbügeln. Jedes Bambusstück wird ofengetrocknet, CNC-geformt, dann handgeschliffen und lackiert für ein glattes Finish. Die natürliche Maserung bedeutet, dass kein Paar exakt gleich ist — was tatsächlich ein Verkaufsargument für Handwerks-Marken ist. Der Bambus stammt aus FSC-zertifizierten Plantagen in der Provinz Zhejiang. Bambus wächst in 3-5 Jahren zur Erntereife — im Vergleich zu Jahrzehnten bei Hartholz — und ist damit eines der erneuerbarsten Materialien der Welt.',
    price: '$6.00 - $10.00',
    moq: '300 Stk.',
    features: ['FSC-Bambus', 'Handgefertigt', 'Einzigartiges Maserungsmuster', 'Lackgeschützt'],
  },
  {
    name: 'Bio-Acetat Premium',
    description: 'Eastman Acetate Renew ist das echte Ding in der nachhaltigen Brillenbranche. Es nutzt molekulare Recyclingtechnologie, um 60% des traditionellen fossilen Rohstoffs durch zertifizierte recycelte Inhalte zu ersetzen — und das resultierende Acetat ist chemisch identisch mit konventionellem Acetat. Gleiche Farben, gleiche Muster, gleiche handpolierte Oberfläche, gleiche Haltbarkeit. Der Unterschied liegt rein in der Lieferkette, was genau die Art von überprüfbarer Aussage ist, die Ihre Marke vor Greenwashing-Vorwürfen schützt. Wir bieten alle Eastman-Standardfarben plus individuellen Pantone-Abgleich an.',
    price: '$7.00 - $11.00',
    moq: '200 Stk.',
    features: ['Eastman Acetate Renew', 'ISCC PLUS zertifiziert', 'Handpoliert', '60% recycelter Anteil'],
  },
  {
    name: 'Recycling-Aluminium Aviator',
    description: 'Unsere klassische Aviator-Fassung, neu gemacht mit recycelter Aluminiumlegierung. Das Aluminium stammt aus postindustriellem Abfall — Abschnitte aus der Automobil- und Luftfahrtfertigung, die sonst downgerecycelt würden. Einmal umgeschmolzen und neu gegossen, ist es metallurgisch identisch mit Virgin 6061-T6-Legierung. Gleiche Festigkeit, gleiches Gewicht (18-22g), gleiche schöne eloxierte Oberflächen. Wir können „recyceltes Aluminium" auf die Bügelinnenseite prägen für Ihr Marketing. Passt hervorragend zu polarisierten Gläsern für ein komplettes Premium-Öko-Paket.',
    price: '$10.00 - $15.00',
    moq: '200 Stk.',
    features: ['Recyceltes 6061-T6', 'Eloxierte Oberfläche', 'Leicht 18-22g', 'Postindustrielle Quelle'],
  },
  {
    name: 'Komplett-Öko Kombination',
    description: 'Unsere nachhaltigste Option — Frontfassung aus recyceltem Ozeanplastik kombiniert mit FSC-Bambusbügeln. Zwei Öko-Geschichten in einem Produkt. Der visuelle Kontrast zwischen dem glatten matten Plastik und der natürlichen Bambusmaserung fotografiert wunderschön für Social Media und E-Commerce. Wir legen ein gebrandetes Bambusfaser-Etui und einen Recycling-Karton-Hangtag mit Ihrer Nachhaltigkeitsbotschaft bei. Das ist das Paar, das den Gen-Z-Kunden überzeugt, der jedes Etikett liest und jede Aussage prüft. Mehrere unserer DTC-Kunden berichten, dass dieser Stil ihr umsatzstärkster Bestseller ist.',
    price: '$8.00 - $12.00',
    moq: '300 Stk.',
    features: ['Ozeanplastik + Bambus', 'Bambusfaser-Etui', 'Recycling-Hangtag', 'Instagram-tauglich'],
  },
  {
    name: 'Kinder Öko-Entdecker',
    description: 'Nachhaltige Brillen für die nächste Generation — wortwörtlich. Biobasierte Nylon-Fassung (aus Rizinusöl gewonnen) mit flexiblen Federscharnieren, dimensioniert für Alter 4-12. Eltern, die für Kinder kaufen, gehören zu den umweltbewusstesten Verbrauchern überhaupt, und sie sind bereit, einen Aufpreis für sichere, nachhaltige Produkte zu zahlen. Die Fassungen sind BPA-frei, phthalatfrei und hypoallergen. Wir können lustige Farben machen — Ozeanblau, Waldgrün, Sonnenuntergang-Orange — mit passender Öko-Verpackung. MOQ ist etwas höher, weil Kinderfassungen separate Werkzeuge benötigen.',
    price: '$4.50 - $7.00',
    moq: '500 Stk.',
    features: ['Biobasiertes Nylon', 'BPA-/Phthalatfrei', 'Alter 4-12', 'Federscharniere'],
  },
]

export default function UmweltfreundlichPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Umweltfreundliche nachhaltige Sonnenbrillen',
        description: 'Nachhaltige Sonnenbrillen aus recyceltem Ozeanplastik, Bambus, Bio-Acetat und recyceltem Aluminium. UV400-Schutz, vollständige OEM-Anpassung. Grün-Zertifizierungen verfügbar.',
        minPrice: '4.50',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'Umweltfreundliche Sonnenbrillen', url: 'https://eyeviewsunglasses.com/de/produkte/umweltfreundlich' }
      ]} />
      <FAQPageSchema faqs={ecoFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Umweltfreundliche Sonnenbrillen</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
              alt="Umweltfreundliche nachhaltige Sonnenbrillen Großhandel - Bambus und recycelte Materialien"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Umweltfreundliche Sonnenbrillen Hersteller
            </h1>
          </div>

          {/* Product Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Ich bin ehrlich mit Ihnen — vor fünf Jahren, als Marken mich nach &ldquo;nachhaltigen Sonnenbrillen&rdquo; fragten, war ich skeptisch. Ich dachte, es sei ein Marketing-Gimmick, das in ein oder zwei Saisons verschwinden würde. Ich lag falsch. Komplett falsch. Im Jahr 2024 erwähnen etwa 35% unserer Neukundenanfragen Nachhaltigkeit als Anforderung. Kein Nice-to-have — eine Anforderung. Der Wandel war dramatisch, und er wird von einer Sache angetrieben: Verbrauchernachfrage, besonders von Gen-Z- und Millennial-Käufern, die tatsächlich prüfen, woraus ihre Sonnenbrillen bestehen.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Also haben wir investiert. In den letzten drei Jahren haben wir dedizierte Öko-Material-Lieferketten aufgebaut, die <Link href="/de/zertifizierungen" className="text-primary-600 hover:underline">ISO 14001 Umweltmanagement-Zertifizierung</Link> für unsere Fabrik erlangt und Produktionsprozesse für vier nachhaltige Hauptmaterialien entwickelt: Recyceltes Ozeanplastik (rPET), FSC-zertifizierter Bambus, <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Eastman Acetate Renew</a> (Bio-Acetat) und recyceltes Aluminium. Jedes hat andere Eigenschaften, andere Kosten und andere Geschichten — und ehrlich gesagt, welches das richtige für Sie ist, hängt ganz von Ihrer Markenpositionierung und Ihren Kunden ab.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hier ist der Business Case in einem Satz: <strong>Nachhaltige Sonnenbrillen</strong> kosten typischerweise $0.50-2.00 mehr pro Paar in der Produktion, erzielen aber 30-50% höhere Einzelhandelspreise. Ein konventioneller Wayfarer, der für $35 im Einzelhandel verkauft wird, kann mit legitimen Öko-Referenzen für $45-55 verkauft werden. Ich habe dutzende unserer DTC-Kunden beobachtet, wie sie diese Rechnung wunderbar aufgehen lassen. Eine Marke in Amsterdam stellte 2023 ihre gesamte Linie auf Bio-Acetat um und sah ihren durchschnittlichen Bestellwert um 28% steigen — gleiche Fassungen, gleiche Gläser, nur anderes Material und eine bessere Geschichte.
              </p>
              <p className="text-lg leading-relaxed">
                Das Schlüsselwort dort ist &ldquo;legitim.&rdquo; Greenwashing zerstört eine Marke schneller als ein schlechtes Produkt. Jedes Material, das wir anbieten, kommt mit nachverfolgbarer Dokumentation — ISCC PLUS-Lieferkette für Bio-Acetat, FSC-Zertifizierung für Bambus, Sammelpartner-Aufzeichnungen für Ozeanplastik. Wenn Ihr Kunde den QR-Code auf dem Hangtag scannt und sieht, woher das Material tatsächlich kommt, baut das die Art von Vertrauen auf, die man nicht kaufen kann. Lassen Sie mich Ihnen zeigen, was wir anbieten.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Umweltfreundliche Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Unsere umweltfreundliche Kollektion</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🌿</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/de/kontakt" className="btn-primary text-sm">Angebot anfordern</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Umweltfreundliche Sonnenbrillen FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {ecoFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Verwandte Produkte</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/de/produkte/rund" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Runde Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Unsere klassischen Runden sind in Bio-Acetat erhältlich. Gleiche ikonische Form, gleiche handpolierte Oberfläche — jetzt mit 60% zertifiziertem recyceltem Anteil.</p>
              </Link>
              <Link href="/de/produkte/katzenaugen" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😎</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Katzenaugen-Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Cat-Eye-Fassungen in Bio-Acetat verfügbar. Gleicher eleganter Stil mit nachhaltiger Materialwahl.</p>
              </Link>
              <Link href="/de/produkte/tr90" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">TR90-Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Ultraleichte Sportfassungen — auch als biobasierte Variante aus Rizinusöl-Nylon für Kinder und Aktivsport verfügbar.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bereit für den nachhaltigen Weg?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Erzählen Sie uns von Ihrer Marke, Ihrer Zielgruppe und Ihren Nachhaltigkeitszielen. Wir empfehlen die richtigen Öko-Materialien und senden Ihnen innerhalb einer Woche Muster. Keine Verpflichtung, kein Druck — nur ehrliche Beratung von jemandem, der über 100 Marken bei diesem Übergang begleitet hat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/de/kontakt" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Angebot anfordern
              </Link>
              <Link href="/de/produkte" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Alle Produkte ansehen
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
