import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Katzenaugen-Sonnenbrillen Großhandel | Hersteller von Cat-Eye-Brillen - EyeView',
  description: 'Hersteller von Katzenaugen-Sonnenbrillen im Großhandel. Damen Cat-Eye-Brillen in Acetat, Metall und MischMaterialien. Trendfarben, OEM/ODM. MOQ 100 Stk. Direkt ab Fabrik.',
  keywords: 'Katzenaugen Sonnenbrillen Großhandel, Cat-Eye Brillen Hersteller, Damen Sonnenbrillen Großhandel, Cat-Eye Fassungen, Sonnenbrillen Großhandel, Brillen Hersteller',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/katzenaugen',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/cat-eye',
      'de': 'https://eyeviewsunglasses.com/de/produkte/katzenaugen',
    },
  },
}

const products = [
  {
    name: 'Klassische Schwarze Cat-Eye',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'Das Must-have für jede Kollektion. Schwarzes Acetat, polierte Scharniere, der perfekte geschwungene Winkel. Die Cat-Eye ist das Sonnenbrillen-Äquivalent des kleinen Schwarzen — passt zu allem, verkauft sich an jede. Dies ist konstant unsere Nr. 1 bei Nachbestellungen in allen Märkten.',
  },
  {
    name: 'Leopardenmuster Cat-Eye',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 Stk.',
    description: 'Animal Print richtig gemacht. Das Schildpatt-Muster ist nicht aufgemalt — es entsteht durch die Schichtung verschiedenfarbiger Acetat-Platten, sodass jedes Paar echte Tiefe und Farbintensität besitzt. Eine Boutique-Besitzerin in Melbourne erzählte uns, dass diese im Frühling doppelt so gut verkaufen wie einfarbige Modelle.',
  },
  {
    name: 'Roségold Metall Cat-Eye',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 Stk.',
    description: 'Schlanke Metallfassung mit Roségold-Galvanisierung, die nach 200 $ aussieht. Tut sie aber nicht. Die dünne Drahtkonstruktion verleiht der Cat-Eye eine moderne, raffinierte Interpretation — perfekt für die Geschäftsfrau, die Stil ohne Aufsehen will. Passt wunderbar sowohl zu Blazern als auch zu Strandkleidern.',
  },
  {
    name: 'Oversize Cat-Eye',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 Stk.',
    description: 'Groß oder gar nicht. Die Oversize Cat-Eye ist praktisch Instagram-Gold — markante Proportionen, dramatisch geschwungene Spitzen, maximale Gesichtsabdeckung. Ein Online-Händler erzählte uns, dass dieses Modell mehr „Wo hast du die her?"-Kommentare bekommt als alles andere in seinem Sortiment. Hervorragender UV-Schutz als Bonus obendrauf.',
  },
  {
    name: 'Strass Cat-Eye',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$11.00 - $15.00',
    moq: '100 Stk.',
    description: 'Für die Frau, die Sonnenbrillen als Schmuck trägt. Handgesetzte Kristalle entlang der Brauenlinie und an den Bügelspitzen fangen das Licht so ein, dass es Leute mitten im Gespräch innehalten lässt. Wir bieten klare, farbige und Swarovski-Qualitätssteine an. Diese verkaufen sich bestens in Resort-Shops, Brautboutiquen und bei Party-Ausstattungs-Händlern.',
  },
  {
    name: 'Vintage Cat-Eye',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 Stk.',
    description: 'Direkt aus dem Jahr 1958. Schmal, scharf gewinkelt, mit dicken Acetat-Bügeln, die sagen: „Ich kenne meine Modegeschichte." Diese sind kleiner als der Oversize-Trend — absichtlich. Sammler und Vintage-Enthusiasten greifen sofort zu. Wenn Ihr Markt in Richtung Retro, Rockabilly oder Pin-up tendiert, ist dies Ihre Fassung.',
  },
]

export default function KatzenaugenPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Katzenaugen-Sonnenbrillen</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Katzenaugen-Sonnenbrillen Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die Cat-Eye geht nie aus der Mode. Ernsthaft — Audrey Hepburn trug sie in den
            60ern und sie sind immer noch die Nr. 1 unter den Damen-Sonnenbrillenformen. Wir
            fertigen Cat-Eye-Fassungen in Acetat, Metall und Materialmix mit vollständiger
            OEM-Anpassung. Ihr Logo, Ihre Farben, Ihre Marke — unsere Fabrik.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop"
            alt="Katzenaugen-Sonnenbrillen Großhandel Kollektion - Damen Modebrillen"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why Cat Eye */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Warum Cat-Eye alles andere übertrifft</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Hier ist eine Tatsache, die viele überrascht: Die Cat-Eye-Form ist seit über 70
              Jahren die meistverkaufte Damen-Sonnenbrillensilhouette. Nicht der Aviator. Nicht
              der Wayfarer. Die Cat-Eye. Warum? Weil sie etwas kann, was keine andere Form
              kann — sie hebt. Der geschwungene Winkel erzeugt die Illusion höherer Wangenknochen
              und einer definierteren Kieferlinie. Es ist praktisch ein Mini-Facelift, das man
              für 15 $ kaufen kann.
            </p>
            <p>
              Die Form wurde 1939 von der New Yorker Designerin Altina Schinasi erfunden, die
              &quot;hässliche&quot; Brillen leid war. Sie nannte sie &quot;Harlequin&quot;-Fassungen.
              Marilyn Monroe machte sie berühmt. Audrey Hepburn machte sie ikonisch. Und jetzt,
              in 2024, sind sie größer denn je — wortwörtlich. Die Oversize Cat-Eye dominiert
              Instagram, TikTok und jede Fashion Week von Mailand bis Seoul.
            </p>
            <p>
              Für Großhandelskäufer sind Katzenaugen-Sonnenbrillen so nah an einer sicheren
              Sache, wie es im Brillengeschäft nur geht. Sie sprechen alle Altersgruppen an
              (20-60+), funktionieren das ganze Jahr und haben einen hohen wahrgenommenen Wert.
              Alle unsere Cat-Eye-Fassungen erfüllen die <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA UV-Schutzstandards</a> —
              denn gut aussehen sollte nicht bedeuten, beim Augenschutz Kompromisse einzugehen.
              Unsere Fabrik produziert über 200.000 Cat-Eye-Fassungen pro Monat in über 40
              Länder. Wir kennen diese Form in- und auswendig.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop" alt="Katzenaugen-Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Die Kollektion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} Großhandel - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/de/kontakt" className="btn-primary w-full block text-center">
                    Angebot anfordern
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Material Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Acetat vs. Metall vs. Materialmix — Was passt zu Ihnen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏛️ Acetat</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Wenn Sie Premium-Einzelhandelspreise verlangen möchten, wählen Sie Acetat. Es wird aus <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Baumwolle
                und Holzzellstoff</a> hergestellt (ja, wirklich), und die erzielbaren Farben und
                Muster sind unglaublich — tiefes Schildpatt, Marmorwirbel, transparente Bonbontöne.
                Jedes Paar wird von Hand poliert für diesen glänzenden Finish. Acetat <em>fühlt sich</em> teuer
                an. Ihre Kunden werden es bemerken. Zudem hypoallergen — also keine Beschwerden über Hautreaktionen.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Satte Farben — Schildpatt, Marmor, Verlauf</li>
                <li>• Handpoliertes Premium-Finish</li>
                <li>• Hypoallergen, umweltfreundlich</li>
                <li>• Am besten für: Boutiquen, Luxus-Positionierung</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">⚙️ Metall</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dünn, elegant, modern. Metall-Cat-Eyes verwenden Edelstahl oder nickelfreie
                Legierungen mit galvanisierten Oberflächen — Gold, Silber, Roségold, Mattschwarz.
                Das schlanke Profil erzeugt einen raffinierten Look, den Acetat nicht bieten kann.
                Das sind die Fassungen für Frauen, die ihre Sonnenbrillen flüstern lassen wollen,
                statt zu schreien. Ideal für Business- und Büro-Kollektionen. Leichter als
                Acetat — die meisten wiegen unter 22 Gramm.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Schlank, elegant, leicht (unter 22g)</li>
                <li>• Gold-, Silber-, Roségold-Oberflächen</li>
                <li>• Nickelfreie Optionen verfügbar</li>
                <li>• Am besten für: Büro-Mode, minimalistische Marken</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔗 Materialmix</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Das Beste aus beiden Welten. Acetat-Front mit dünnen Metallbügeln — oder umgekehrt.
                Der Zweifarbige Materialkontrast liegt gerade voll im Trend. Denken Sie an:
                transparente rosa Acetat-Front mit dünnen goldenen Bügeln. Oder schwarzes Acetat
                mit silbernen Drahtbügeln. Das sind die Fassungen, bei denen die Leute stehen bleiben
                und fragen: &quot;Wo hast du die her?&quot; Derzeit unsere am schnellsten wachsende Kategorie.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Trendige Zweifarbig-Optik</li>
                <li>• Kreative Designmöglichkeiten</li>
                <li>• Am schnellsten wachsende Kategorie 2024</li>
                <li>• Am besten für: trendorientierte Marken, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Color Trends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Welche Farben sich gerade verkaufen</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🔥 Heiß diese Saison</h3>
                <div className="space-y-4">
                  <ColorTrend color="bg-red-800" name="Burgunder & Weinrot" description="Tiefe, warme Töne, die in Herbst/Winter den Ton angeben. Mit braunen Verlaufsgläsern kombinieren für den gemütlichen Luxus-Look." />
                  <ColorTrend color="bg-pink-300" name="Zartrosa & Blush" description="Immer noch stark. Klares rosa Acetat ist die am schnellsten wachsende Farbe in der Damen-Brillenmode." />
                  <ColorTrend color="bg-green-700" name="Waldgrün" description="Der Überraschungshit des Jahres. Eine raffinierte Alternative zu Schildpatt, mit der niemand gerechnet hat." />
                  <ColorTrend color="bg-amber-100 border border-gray-300" name="Transparent / Kristall" description="Durchsichtige Fassungen in Klar, Champagner, Hellgrau. Seit 3 Jahren im Trend und kein Ende in Sicht." />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">📊 Die Evergreens (Immer nachbestellt)</h3>
                <div className="space-y-4">
                  <ColorTrend color="bg-black" name="Klassisch Schwarz" description="30-35% aller Cat-Eye-Bestellungen. Immer. Jede. Saison. Auf Lager haben oder bereuen." />
                  <ColorTrend color="bg-amber-700" name="Schildpatt" description="Der Nr. 2-Seller. Mehrfarbige Brauntöne funktionieren ganzjährig, bei jedem, überall." />
                  <ColorTrend color="bg-yellow-600" name="Gold Metall" description="Unverzichtbar für jede Luxus- oder Business-Linie. Goldene Cat-Eyes strahlen Raffinesse aus." />
                  <ColorTrend color="bg-gray-400" name="Verlauf Zweifarbig" description="Fassungen, die von einer Farbe zur anderen übergehen — Schwarz zu Klar, Rosa zu Pfirsich. Sehr instagrammable." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technische Daten</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Spezifikation</th>
                  <th className="p-4 text-left font-semibold">Acetat</th>
                  <th className="p-4 text-left font-semibold">Metall</th>
                  <th className="p-4 text-left font-semibold">Materialmix</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Glasbreite</td><td className="p-4 text-gray-600">52-58mm</td><td className="p-4 text-gray-600">54-60mm</td><td className="p-4 text-gray-600">53-58mm</td></tr>
                <tr><td className="p-4 font-medium">Steg</td><td className="p-4 text-gray-600">16-20mm</td><td className="p-4 text-gray-600">14-18mm</td><td className="p-4 text-gray-600">15-19mm</td></tr>
                <tr><td className="p-4 font-medium">Bügellänge</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td></tr>
                <tr><td className="p-4 font-medium">Gewicht</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">18-24g</td><td className="p-4 text-gray-600">22-30g</td></tr>
                <tr><td className="p-4 font-medium">Glas</td><td className="p-4 text-gray-600">CR-39 / TAC</td><td className="p-4 text-gray-600">CR-39 / Nylon</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Scharnier</td><td className="p-4 text-gray-600">5-Zylinder / Feder</td><td className="p-4 text-gray-600">Flex-Feder</td><td className="p-4 text-gray-600">5-Zylinder / Feder</td></tr>
                <tr><td className="p-4 font-medium">Nasenpads</td><td className="p-4 text-gray-600">Integrierter Schlüssellochsteg</td><td className="p-4 text-gray-600">Verstellbares Silikon</td><td className="p-4 text-gray-600">Verstellbares Silikon</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Weitere Styles, die sich lohnen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/rund" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Runde Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Vintage-Kreise für Retro-Liebhaber</p>
            </Link>
            <Link href="/de/produkte/polarisiert" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarisierte Optionen</h3>
              <p className="text-sm text-gray-600">TAC-Polarisation für jede Cat-Eye verfügbar</p>
            </Link>
            <Link href="/de/produkte/kinder" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👧</div>
              <h3 className="font-semibold mb-2">Kinder Cat-Eye</h3>
              <p className="text-sm text-gray-600">Mini-Cat-Eyes für Mädchen — entzückende Bestseller</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ihre Fragen, ehrliche Antworten</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Welche Gesichtsformen passen zur Cat-Eye?"
              answer="Fast alle, ehrlich gesagt. Die Cat-Eye ist eine der vielseitigsten Formen überhaupt. Ovales Gesicht? Perfekt. Rundes Gesicht? Die geschwungenen Winkel verleihen Definition — sieht toll aus. Herzförmig? Ideale Kombination. Quadratisches Gesicht? Wählen Sie eine weichere, rundere Cat-Eye, um die Winkel auszugleichen. Die einzige Gesichtsform, die etwas knifflig sein kann, sind sehr lange/schmale Gesichter, bei denen eine Oversize Cat-Eye überwältigen könnte. Aber selbst da funktioniert eine zierliche Cat-Eye gut."
            />
            <FaqItem
              question="Wie hoch ist die Mindestbestellmenge für gebrandete Cat-Eyes?"
              answer="100 Stück pro Farbe für unsere bestehenden Designs. Sie möchten eine eigene Gussform, Pantone-abgestimmte Farben und gebrandete Verpackung? Das sind 300 Stück pro Stil. Profi-Tipp: Sie können verschiedene Cat-Eye-Stile in einer Bestellung mischen, um das Minimum zu erreichen. Also z.B. 100 klassisch schwarz + 100 Leopard + 100 Roségold = 300 insgesamt. Wir sind flexibel."
            />
            <FaqItem
              question="Können diese als Korrektionsbrillen gefertigt werden?"
              answer="Ja! Alle unsere Acetat- und Metall-Cat-Eyes können mit Demogläsern geliefert werden, damit Optiker Korrektionsgläser einsetzen können. Wir berücksichtigen Einstärken-, Bifokal- und Gleitsichtgläser. Rahmenbreite und Glaswölbung sind dafür konzipiert. Ein tolles Upselling-Potenzial für Optik-Einzelhändler — modische Fassungen mit Korrektionsmöglichkeit."
            />
            <FaqItem
              question="Was sind die Cat-Eye-Trends 2024-2025?"
              answer="Große Trends aktuell: Oversize-Proportionen (größer ist besser), transparentes/kristallklares Acetat (besonders in Rosa und Champagner), Materialmix (Acetat-Front + Metallbügel), geometrisch-eckige Cat-Eyes (weniger kurvig, kantiger) und zarte Pastelltöne wie Lavendel und Salbeigrün. Die Y2K-Renaissance der schmalen Cat-Eye ist bei jüngeren Käufern ebenfalls weiterhin stark. Wir verfolgen diese Trends jede Saison und aktualisieren unseren Katalog entsprechend."
            />
            <FaqItem
              question="Kann ich Muster erhalten, bevor ich eine Großbestellung aufgebe?"
              answer="Natürlich — wir würden nie erwarten, dass Sie blind bestellen. Bestehende Katalogmodelle? Kostenlose Muster, Sie übernehmen nur den Versand (normalerweise 30-50 $ per DHL für 3-5 Paar). Möchten Sie ein individuelles Muster mit Ihren spezifischen Änderungen? Kleine Gebühr von 50-100 $ pro Design, die wir auf Ihre erste Produktionsbestellung anrechnen. Sie bekommen also quasi kostenlose Individualmuster, wenn Sie bestellen. Lieferzeit: 7-10 Tage."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Bereit, die Form zu führen, die sich von selbst verkauft?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiquen, Online-Shops, Markenhändler — wir arbeiten mit allen zusammen. Unser
            Damen-Cat-Eye-Großhandelsprogramm bietet Ihnen wettbewerbsfähige Preise, schnelle
            Produktion und vollständige Individualisierung. Fordern Sie einen kostenlosen Katalog an
            und sehen Sie, was möglich ist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Katalog anfordern</Link>
            <Link href="/de/produkte" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Alle Produkte ansehen</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://eyeviewglasses.com/de" },
          { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://eyeviewglasses.com/de/produkte" },
          { "@type": "ListItem", "position": 3, "name": "Katzenaugen-Sonnenbrillen", "item": "https://eyeviewglasses.com/de/produkte/katzenaugen" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Welche Gesichtsformen passen zur Cat-Eye-Sonnenbrille?",
            "acceptedAnswer": { "@type": "Answer", "text": "Fast alle. Cat-Eye passt hervorragend zu ovalen, runden, herzförmigen und quadratischen Gesichtern. Die geschwungenen Winkel verleihen den meisten Gesichtsstrukturen Definition und Lift." }
          },
          {
            "@type": "Question",
            "name": "Wie hoch ist die Mindestbestellmenge für gebrandete Cat-Eye-Sonnenbrillen?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 Stück pro Farbe für bestehende Designs. Eigene Gussformen und Branding ab 300 Stück pro Stil. Sie können verschiedene Cat-Eye-Stile in einer Bestellung mischen, um das Minimum zu erreichen." }
          },
          {
            "@type": "Question",
            "name": "Können Cat-Eye-Fassungen als Korrektionsbrillen gefertigt werden?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle Acetat- und Metall-Cat-Eyes können mit Demogläsern für den Korrektionseinsatz geliefert werden. Wir berücksichtigen Einstärken-, Bifokal- und Gleitsichtgläser." }
          },
          {
            "@type": "Question",
            "name": "Was sind die Trends bei Cat-Eye-Sonnenbrillen 2024-2025?",
            "acceptedAnswer": { "@type": "Answer", "text": "Große Trends: Oversize-Proportionen, transparentes Acetat, Materialmix, geometrisch-eckige Formen, zarte Pastelltöne und die Y2K-Renaissance der schmalen Cat-Eye für jüngere Käufer." }
          },
          {
            "@type": "Question",
            "name": "Kann ich Muster vor einer Großbestellung erhalten?",
            "acceptedAnswer": { "@type": "Answer", "text": "Selbstverständlich. Kostenlose Muster bestehender Modelle — Sie zahlen nur den Versand (30-50 $ per DHL). Individuelle Muster kosten 50-100 $ pro Design und werden auf Ihre erste Produktionsbestellung angerechnet." }
          }
        ]
      })}} />
    </main>
  )
}

function ColorTrend({ color, name, description }: { color: string; name: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${color} flex-shrink-0 mt-1`}></div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
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
