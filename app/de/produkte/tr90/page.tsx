import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'TR90-Sonnenbrillen Großhandel | TR90-Brillen Hersteller - EyeView',
  description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
  keywords: 'TR90 Sonnenbrillen Großhandel, TR90 Brillen Hersteller, ultraleichte Brillen, Nylon Fassungen, Grilamid Brillen, Sport Sonnenbrillen',
  openGraph: {
    title: 'TR90-Sonnenbrillen Großhandel | TR90-Brillen Hersteller - EyeView',
    description: 'Hersteller von TR90-Sonnenbrillen im Großhandel. Ultraleichte Nylonfassungen (15-20g), Memory-Flexibilität, hypoallergen. Grilamid von EMS-Grivory. OEM/ODM. MOQ 100 Stk.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/produkte/tr90',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/tr90',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/tr90',
      'de': 'https://eyeviewsunglasses.com/de/produkte/tr90',
    },
  },
}

const tr90Faqs = [
  {
    question: 'Was genau ist TR90 und warum wird es für Sonnenbrillen verwendet?',
    answer: 'TR90 ist ein thermoplastisches Polyamid (Nylon), das ursprünglich von EMS-Grivory in der Schweiz unter dem Markennamen Grilamid TR90 entwickelt wurde. Es wurde speziell für optische Anwendungen konstruiert — also von Grund auf für die Herstellung von Brillenfassungen konzipiert. Die Schlüsseleigenschaften sind: ultraleicht (eine fertige Fassung wiegt nur 15-20 Gramm), extreme Flexibilität (man kann sie fast in der Mitte biegen und sie springt in ihre Form zurück), Memory-Effekt (behält die Form über Jahre täglicher Nutzung), hypoallergen (kein Nickel, kein BPA, keine Hautreaktionen) und hohe Hitzebeständigkeit (Verformungstemperatur bei ca. 120°C). Es wird im Spritzgussverfahren hergestellt, sodass die Produktion schnell und konsistent ist — was die Kosten niedrig hält. Im Grunde gibt Ihnen TR90 eine Fassung, die nichts wiegt, nie bricht und empfindliche Haut nie reizt. Deshalb ist es zum bevorzugten Material für Sportbrillen, Kinderbrillen und leichte Alltagsfassungen geworden.',
  },
  {
    question: 'Wie schneidet TR90 im Vergleich zu Acetat- und Metallfassungen ab?',
    answer: 'Am einfachsten versteht man TR90 im direkten Vergleich. Gewicht: TR90-Fassungen wiegen 15-20 Gramm, Acetat-Fassungen 25-35 Gramm und Metallfassungen 28-35 Gramm. TR90 ist also etwa 40-50% leichter als Acetat. Flexibilität: TR90 biegt sich und springt zurück; Acetat bricht, wenn man es zu weit biegt; Metall verbiegt sich dauerhaft. Haltbarkeit: TR90 ist bei normalem Gebrauch praktisch unzerbrechlich; Acetat kann absplittern oder reißen; Metall kann sich verformen. Farboptionen: Acetat gewinnt hier mit seinen satten geschichteten Mustern; TR90 ist auf Volltonfarben und Oberflächenveredelungen beschränkt. Premium-Wahrnehmung: Acetat hat ein Luxus-Feeling, das TR90 nicht erreichen kann; TR90 wirkt technisch und sportlich. Kosten: TR90-Fassungen kosten $4-8 pro Paar, Acetat $6-16, Metall $8-22. Fazit: TR90 für Leistung und Wert, Acetat für Luxus und Ästhetik, Metall für klassischen Stil.',
  },
  {
    question: 'Können TR90-Fassungen bedruckt oder in individuellen Designs gefärbt werden?',
    answer: 'Ja, aber die Möglichkeiten unterscheiden sich von Acetat. Die Farbe von TR90 wird beim Spritzguss bestimmt — wir fügen Masterbatch-Farbpellets zum rohen Grilamid-Harz hinzu, sodass die Farbe das gesamte Material durchdringt. Wir haben etwa 30 Standardfarben auf Lager (Mattschwarz, Glanzschwarz, Mattmarineblau, Grau, Rot, Orange, Weiß, Transparent usw.) und können Pantone-abgestimmte Sonderfarben ab einer Mindestmenge von 500 Stück liefern. Für Oberflächendekor bieten wir Tampondruck (Logos, Muster, Mehrfarbgrafiken auf dem Bügel), UV-Druck (fotorealistischer Vollfarbdruck auf ebenen Flächen), Hydrografie (Wasserumdruckverfahren für Tarn-, Karbonfaser-, Holzmaserungsmuster, die sich um Kurven schmiegen) und Lasergravur an. Wir machen auch Gummibeschichtung (ein weiches mattes Soft-Touch-Finish, das Grip und ein Premium-Gefühl verleiht) und metallische PVD-Beschichtung auf Bügelakzenten. Das Einzige, was TR90 nicht kann, ist die geschichtete Farbtiefe von Acetat nachzubilden — Schildpatt-, Marmor- und Kristallmuster sind im Spritzguss nicht möglich.',
  },
  {
    question: 'Ist TR90 sicher für Kinder-Sonnenbrillen?',
    answer: 'TR90 ist wohl das beste Material für Kinderbrillen, und hier ist der Grund. Erstens: Es ist praktisch unzerbrechlich — Kinder sind hart zu Brillen, und TR90 biegt sich, statt zu brechen. Wir haben unsere Kinderfassungen mit über 5.000 Scharnier-Öffnungs-/Schließzyklen ohne einen einzigen Ausfall getestet. Zweitens: Es ist hypoallergen — kein Nickel, kein BPA, keine Phthalate, kein Latex. Kinder haben empfindlichere Haut als Erwachsene, und Metallfassungen mit Nickelgehalt können Kontaktdermatitis verursachen. Drittens: Es ist ultraleicht mit 12-15 Gramm für Kinderfassungen — schwere Brillen rutschen von kleinen Nasen und Kinder nehmen sie einfach ab. Viertens: TR90 erfüllt die EN 71-Spielzeugsicherheitsstandards (wir können Prüfdokumentation bereitstellen), die einige Märkte für Brillen verlangen, die an Kinder unter 14 verkauft werden. Und fünftens: Die niedrigen Kosten ($3.50-6.00 pro Paar für Kinderfassungen) machen es wirtschaftlich für Eltern, die wissen, dass ihr Kind sie wahrscheinlich innerhalb von sechs Monaten verliert oder kaputtmacht.',
  },
  {
    question: 'Welche Temperatur hält TR90 aus?',
    answer: 'TR90 hat eine Wärmeformbeständigkeitstemperatur (HDT) von ca. 120°C (248°F) bei 1,8 MPa — deutlich höher als Standard-Nylon (ca. 75°C) und viel höher als Acetat (das bei 70-80°C weich wird). Praktisch bedeutet das: TR90-Fassungen überstehen problemlos das Liegen auf einem Auto-Armaturenbrett im Sommer (das 70-90°C erreichen kann), das Tragen in einer Sauna oder den Kontakt mit heißem Wasser, ohne sich zu verformen. Das ist ein echtes Verkaufsargument, besonders für Sport- und Outdoor-Marken — Athleten lassen ihre Brillen in heißen Autos, auf Boots-Armaturenbrettern und in Sporttaschen neben verschwitzter Kleidung. TR90 hält das alles aus. Das Kälte-Ende ist ebenso beeindruckend: TR90 bleibt flexibel bis -40°C, wird also bei Winterbedingungen nicht spröde. Zum Vergleich: Billige Polycarbonat-Fassungen können unter 0°C spröde werden.',
  },
  {
    question: 'Wie hoch ist die Mindestbestellmenge für TR90-Sonnenbrillen?',
    answer: 'Die Standard-MOQ beträgt 100 Stück pro Modell aus unserer bestehenden Formbibliothek — wir haben über 80 TR90-Fassungsdesigns auf Lager, darunter Sport-Wraps, Wayfarers, Runde, Rechteckige, Aviator-Stil und Kinderformen. Sie können Farben innerhalb dieser 100 Stück mischen. Für ein komplett individuelles Fassungsdesign berechnen wir eine Formgebühr von $1.500-3.000 je nach Komplexität (TR90-Formen sind teurer als CNC-Acetat-Werkzeuge, weil Spritzgussformen aus Stahl präzisionsgefertigt werden). Die MOQ für individuelle Formen beträgt 500 Stück bei der Erstbestellung. Für Pantone-abgestimmte Sonderfarben sind mindestens 500 Stück nötig, weil wir den Masterbatch mischen und testen müssen. Für Standardfarben ab Lager gibt es kein Minimum über die 100-Stück-Basis hinaus.',
  },
]

const products = [
  {
    name: 'Sport Wrap TR90',
    description: 'Unser meistverkauftes TR90-Modell. Umlaufendes Design, das Wind, Staub und peripheres Licht blockiert. Gummi-Nasenpads und -Bügelspitzen bieten rutschfesten Halt auch beim Schwitzen. Die Wrap-Form folgt der Gesichtskrümmung und bietet 180-Grad-Abdeckung ohne den „Insektenaugen"-Look. Wiegt nur 18 Gramm — die meisten Kunden vergessen innerhalb von fünf Minuten, dass sie sie tragen. Das ist die Fassung, die Radsportteams, Laufclubs und Angelmarken in Großmengen bestellen. In 15 Lagerfarben mit polarisierten Glasoptionen erhältlich.',
    price: '$4.50 - $7.50',
    moq: '100 Stk.',
    features: ['Umlaufendes Design', 'Gummi-Grip', '18g ultraleicht', 'Anti-Rutsch-Bügel'],
  },
  {
    name: 'TR90 Wayfarer',
    description: 'Die klassische Wayfarer-Form in TR90 statt Acetat. Man verliert die geschichtete Farbtiefe des Acetats, gewinnt aber eine Fassung, die 16 Gramm statt 30 wiegt, 40% weniger kostet und praktisch unzerbrechlich ist. Für Marken, die den $20-40 Einzelhandelsbereich anpeilen, wo Acetat-Preise nicht funktionieren, ist dies der Sweet Spot. Wir können die Oberfläche gummibeschichten für ein Soft-Touch-Mattfinish, das Grip und Premium-Gefühl verleiht. Beliebt bei DTC-Marken, Werbeartikelfirmen und Uni-Buchhandlungen.',
    price: '$4.00 - $6.50',
    moq: '100 Stk.',
    features: ['Wayfarer-Form', '16g Gewicht', 'Gummibeschichtungs-Option', 'Preisfreundlich'],
  },
  {
    name: 'Kids Flex TR90',
    description: 'Dimensioniert für 4-12 Jahre mit extra eingebauter Flexibilität. Die Bügel haben eine integrierte Flexzone, die ein Ausbiegen ohne Bruch ermöglicht — wichtig, weil Kinder ihre Brillen an einem Bügel greifen und ziehen. Hypoallergen, BPA-frei, phthalatfrei. Gummi-Nasenpads für kleinere Stege dimensioniert. In leuchtenden, lustigen Farben erhältlich — Elektro-Blau, Knallpink, Limettengrün, Sonnenuntergang-Orange, Mattschwarz (für den „coolen Kind"-Markt). Wiegt nur 12 Gramm. Eltern kaufen diese, weil sie wissen, dass Kinder sie misshandeln werden. Wir haben Kunden, die sie im 3er-Pack verkaufen, weil Eltern damit rechnen, sie zu ersetzen.',
    price: '$3.50 - $6.00',
    moq: '100 Stk.',
    features: ['Alter 4-12', 'Extra-Flex-Bügel', '12g Gewicht', 'BPA-/Phthalatfrei'],
  },
  {
    name: 'TR90 Halbrand-Sport',
    description: 'Halbrandloses Design, bei dem die TR90-Fassung den oberen Glasrand hält und ein dünner Nylonfaden den unteren Rand. Das spart weitere 3-4 Gramm im Vergleich zur Vollfassung und bringt das Gesamtgewicht auf etwa 14 Gramm. Der offene untere Rand verbessert auch die Sicht nach unten, was für Läufer und Radfahrer wichtig ist, die die Straße unter sich sehen müssen. Der freiliegende Glasrand verleiht ihnen einen technischen, leistungsorientierten Look. Beliebt bei Laufmarken, Triathlon-Marken und Golf-Brillenlinien.',
    price: '$5.00 - $8.00',
    moq: '100 Stk.',
    features: ['Halbrandlos', '14g Gewicht', 'Verbesserte Abwärtssicht', 'Nylonfaden unten'],
  },
  {
    name: 'TR90 + Metall Kombi',
    description: 'TR90-Frontfassung mit Edelstahl- oder Titan-Bügeln. Dieser Hybrid bietet die leichte Flexibilität von TR90 dort, wo es am wichtigsten ist (die Frontfassung, die Ihr Gesicht berührt) und den Premium-Look von Metallbügeln. Die Metallbügel können mit Ihrem Logo lasergraviert werden — was viel schärfer aussieht als Druck auf Plastik. Wiegt insgesamt etwa 20 Gramm. Das ist unsere Standardempfehlung für Marken, die einen Sport-to-Casual-Crossover-Look wollen — technisch genug für Outdoor-Nutzung, stilvoll genug fürs Abendessen.',
    price: '$7.00 - $11.00',
    moq: '100 Stk.',
    features: ['TR90 + Metall Hybrid', 'Lasergravierbar', '20g Gewicht', 'Sport-Casual Crossover'],
  },
  {
    name: 'TR90 Schild / Visier',
    description: 'Einglas-Schilddesign in TR90 — ein durchgehendes Glas über beide Augen mit TR90-Oberfassung und Bügelsystem. Das ist der Stil, den man bei Profi-Radfahrern, Eisschnellläufern und Skirennfahrern sieht. Maximales Sichtfeld, null Fassungsobstruktion im zentralen Blickfeld und aggressive aerodynamische Optik. Das Einzelglas ist Polycarbonat mit optionaler Spiegel-, Polarisations- oder photochromer Beschichtung. Verstellbare Nasenpads und Belüftungsöffnungen gegen Beschlagen. Wenn Ihre Marke auf ernsthafte Athleten abzielt, ist dies die Fassung, die Glaubwürdigkeit schafft.',
    price: '$6.00 - $9.00',
    moq: '100 Stk.',
    features: ['Einzelglas-Schild', 'Anti-Beschlag-Öffnungen', 'Max. Sichtfeld', 'Aero-Design'],
  },
]

export default function TR90Page() {
  return (
    <>
      <ProductSchema product={{
        name: 'TR90 Ultraleichte Sonnenbrillen',
        description: 'Ultraleichte TR90 Grilamid Sonnenbrillen. 15-20g Fassungen, flexibles Memory-Material, hypoallergen. Sport-, Kinder- und Alltagsstile. Vollständige OEM-Anpassung.',
        minPrice: '3.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'TR90 Sonnenbrillen', url: 'https://eyeviewsunglasses.com/de/produkte/tr90' }
      ]} />
      <FAQPageSchema faqs={tr90Faqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">TR90 Sonnenbrillen</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
              alt="TR90-Sonnenbrillen Hersteller - Ultraleichte Nylon-Sportbrillen Großhandel"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              TR90-Sonnenbrillen Hersteller
            </h1>
          </div>

          {/* Product Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Lassen Sie mich Ihnen etwas zeigen. Nehmen Sie eine normale Sonnenbrille in die Hand — die Art, die man an der Tankstelle kauft. Biegen Sie jetzt die Bügel. Hören Sie das Knarren? Das ist billiges Polycarbonat, das Ihnen sagt, es ist kurz davor zu brechen. Versuchen Sie dasselbe mit einer TR90-Fassung. Sie können sie praktisch in der Mitte falten. Sie springt sofort zurück. Kein Knarren, kein Knacken, keine dauerhafte Verformung. Diese Flexibilität ist kein Gimmick — sie ist der zentrale technische Vorteil von <a href="https://www.emsgrivory.com/en/products/grilamid-tr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grilamid TR90</a>, einem thermoplastischen <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Polyamid</a>, das vom Schweizer Chemieunternehmen EMS-Grivory speziell für optische Anwendungen entwickelt wurde.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hier sind die Zahlen, die zählen: Eine fertige TR90-Fassung wiegt 15-20 Gramm. Zum Vergleich: Acetat-Fassungen wiegen 25-35 Gramm und Metallfassungen 28-35 Gramm. Dieser Unterschied von 10-15 Gramm klingt auf dem Papier vielleicht nicht nach viel, aber setzen Sie eine TR90-Fassung auf, nachdem Sie den ganzen Tag Acetat getragen haben, und Sie verstehen sofort, warum Athleten, Outdoor-Profis und zunehmend auch Alltagskonsumenten umsteigen. Man vergisst, dass sie da ist. Kein Druck auf der Nase, kein Rutschen, keine roten Druckstellen hinter den Ohren. Für <Link href="/de/produkte/sport" className="text-primary-600 hover:underline">Sportmarken</Link> und <Link href="/de/produkte/kinder" className="text-primary-600 hover:underline">Kinderbrillen</Link> ist TR90 nicht nur eine gute Option — es ist die offensichtliche Wahl.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Aus Fertigungssicht wird TR90 im Spritzguss hergestellt — wir füttern Grilamid-Pellets in einen beheizten Zylinder, spritzen das geschmolzene Material unter hohem Druck in eine Präzisions-Stahlform und entnehmen eine fertige Fassung in etwa 45 Sekunden. Vergleichen Sie das mit Acetat-Fassungen, die 5-7 Tage Schneiden, Trommeln und Handpolitur benötigen. Das Ergebnis ist schnellere Produktion, niedrigere Stückkosten und extrem konsistente Qualität. Unsere TR90-Fehlerquote liegt unter 0,5% — gegenüber 3-5% bei Acetat. Wenn Sie große Mengen zu wettbewerbsfähigen Preisen brauchen, ohne bei der Qualität Abstriche zu machen, ist TR90 das Material, das es möglich macht.
              </p>
              <p className="text-lg leading-relaxed">
                Wir produzieren etwa 500.000 TR90-Fassungen pro Jahr in Sport-Wraps, Casual-Wayfarers, Kinderstilen und hybriden Sport-Casual-Designs. Unsere Formbibliothek umfasst über 80 sofort verfügbare Designs, und wir betreiben vier dedizierte Spritzgussmaschinen für die TR90-Produktion. Ob Sie eine Sportbrillenmarke starten, eine Kinderlinie hinzufügen oder eine leichte Alltagskollektion aufbauen — hier ist alles, was Sie wissen müssen.
              </p>
            </div>
          </div>

          {/* Weight Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Der Gewichtsvorteil</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Gewicht ist der wichtigste Grund, warum Marken TR90 wählen. So schneidet es im Vergleich zu jedem anderen Fassungsmaterial ab, das wir anbieten.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">TR90 (Grilamid)</span>
                    <span className="text-primary-600 font-bold">15 - 20g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-primary-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Die leichteste Option. Kaum spürbar im Gesicht. Ideal für Ganztages- und Aktivnutzung.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Aluminiumlegierung</span>
                    <span className="text-gray-600 font-bold">18 - 22g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Nahe am TR90-Gewicht, aber starr — keine Flexibilität. Premium-Metallgefühl bei guter Leichtigkeit.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acetat</span>
                    <span className="text-gray-600 font-bold">25 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Das Luxusmaterial. Schön, aber schwerer. Dieses Gewicht gehört zum „Premium-Gefühl" — aber nicht ideal für Sport.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Edelstahl</span>
                    <span className="text-gray-600 font-bold">28 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Klassische Metallfassungen. Das Gewicht vermittelt Qualität, kann aber bei längerem Tragen ermüden.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Standard-Polycarbonat</span>
                    <span className="text-gray-600 font-bold">22 - 28g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Günstiger als TR90, aber schwerer, weniger flexibel und spröder. Die Budget-Option, die TR90 übertrifft.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="TR90-Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Unsere TR90-Kollektion</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🏃</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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
            <h2 className="text-3xl font-bold text-center mb-10">TR90 Sonnenbrillen FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {tr90Faqs.map((faq, index) => (
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
              <Link href="/de/produkte/sport" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Sport-Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Unsere komplette Sportbrillen-Kollektion — Wraps, Schilde, Halbrand. Die meisten Stile in TR90 mit polarisierten und photochromen Glasoptionen verfügbar.</p>
              </Link>
              <Link href="/de/produkte/kinder" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Kinder-Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">TR90 ist das ideale Material für Kinderbrillen — unzerbrechlich, ultraleicht, hypoallergen. Dimensioniert für Alter 0-14.</p>
              </Link>
              <Link href="/de/produkte/polarisiert" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Polarisierte Brillen</h3>
                <p className="text-gray-600 text-sm">Vollständiger Leitfaden zu polarisierten Gläsern — TAC, photochrom, Spiegel. Erfahren Sie, welche Glasoptionen am besten zu TR90-Fassungen passen.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bereit, TR90-Fassungen zu bestellen?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Sagen Sie uns, was Sie brauchen — Sport-Wraps, Kinderfassungen, Casual-Stile oder etwas Individuelles. Wir senden Ihnen Muster aus unserer über 80 Formen umfassenden Bibliothek innerhalb von 3-5 Tagen. Preise, Produktionszeitplan und Anpassungsoptionen inklusive. Keine Verpflichtung, bis Sie bereit sind zu bestellen.
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
