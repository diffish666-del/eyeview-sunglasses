import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Wayfarer-Sonnenbrillen Großhandel | OEM Wayfarer-Brillen Hersteller - EyeView',
  description: 'Hersteller von Wayfarer-Sonnenbrillen im Großhandel. Premium-Acetat-Fassungen, UV400/polarisierte Gläser, individueller Logodruck. MOQ 100 Stk. Fabrikpreise ab 5 $/Paar. Kostenlose Muster!',
  keywords: 'Wayfarer Sonnenbrillen Großhandel, Wayfarer Brillen Hersteller, individuelle Wayfarer, Acetat Sonnenbrillen Großhandel, Sonnenbrillen Großhandel, Brillen Hersteller, OEM Wayfarer',
  openGraph: {
    title: 'Wayfarer-Sonnenbrillen Großhandel | OEM Hersteller - EyeView',
    description: 'Hersteller von Wayfarer-Sonnenbrillen im Großhandel. Premium-Acetat-Fassungen, individuelles Logo, UV400/polarisierte Gläser. MOQ 100 Stk. Direkt ab Fabrik.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/produkte/wayfarer',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/wayfarer',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/wayfarer',
      'de': 'https://eyeviewsunglasses.com/de/produkte/wayfarer',
    },
  },
}

const wayfarerFaqs = [
  {
    question: 'Was ist der Unterschied zwischen Acetat- und Kunststoff-Wayfarer-Brillen?',
    answer: 'Ein großer Unterschied, ehrlich gesagt. Standard-Spritzguss-Kunststoff (PC oder Nylon) ist billig und leicht, sieht und fühlt sich aber auch billig an: dünn, glänzend, etwas hohl. Acetat ist ein pflanzliches Material (aus Baumwollfasern und Holzzellstoff), das aus massiven Platten geschnitten und von Hand poliert wird. Es hat echte Farbtiefe, natürliche Muster, die man mit Kunststoff nicht fälschen kann, und ein Gewicht, das sich substanziell anfühlt. Unser Acetat stammt von italienischen Lieferanten wie Mazzucchelli, die es seit 1849 herstellen. Der Preisunterschied beträgt etwa 2–3 $ pro Paar, aber der Sprung im wahrgenommenen Wert ist enorm. Kurzversion: Wenn Sie im Einzelhandel über 20 $ verlangen wollen, wählen Sie Acetat.',
  },
  {
    question: 'Wie viele Farben und Muster bieten Sie für Wayfarer-Fassungen an?',
    answer: 'Über 200 und es werden mehr. Die Klassiker — Schwarz, dunkles Schildpatt, Honig-Schildpatt — sind immer auf Lager und versandbereit. Aber wir haben auch transparente Farben (Kristall, Hellblau, Puderrosa), Zweifarbkombinationen, Marmoreffekte, Holzmaserungsmuster und einige ziemlich auffällige Optionen wie Glitzer-Acetat. Wenn Sie eine bestimmte Pantone-Farbe oder ein Muster im Kopf haben, können wir individuelle Acetat-Platten beschaffen — das dauert 7–10 Tage extra und die MOQ steigt auf 300 Stück, aber es lohnt sich, wenn Sie etwas Einzigartiges wollen.',
  },
  {
    question: 'Wie vergleichen sich Wayfarer mit Fliegerbrillen für meine Marke?',
    answer: 'Ehrlich gesagt sind es die zwei Stile, die wir jeder neuen Marke zum Start empfehlen, aber sie haben unterschiedliche Stärken. Wayfarer sind aus Acetat, also gibt es sie in viel mehr Farben und Mustern — das bedeutet mehr SKUs und mehr visuelle Vielfalt auf Ihrer Produktseite oder im Regal. Sie kosten auch weniger pro Paar (5–11 $ vs. 8–14 $ für Flieger), also können Ihre Margen besser sein. Flieger sind aus Metall und haben ein hochwertigeres, eleganteres Gefühl. Wayfarer sind lässiger, bunter, unisex. Wenn Sie sich für eines entscheiden müssen: Wayfarer für Volumen und Vielfalt, Flieger für Premium-Positionierung. Aber ernsthaft, die meisten unserer erfolgreichen Kunden führen beides.',
  },
  {
    question: 'Welche Logo-Optionen funktionieren am besten bei Wayfarer-Brillen?',
    answer: 'Acetat-Fassungen bieten andere Optionen als Metall. Die beliebteste Methode ist die Heißprägung (Gold- oder Silberfolie) an der Bügelinnenseite — sieht sauber und hochwertig aus. Wir machen auch Siebdruck (jede Farbe, Bügel innen oder außen), erhabene oder vertiefte Logos direkt ins Acetat gepresst, und Metallabzeichen, die in den Bügel eingesetzt werden. Für die Fassungsfront setzen manche Kunden eine kleine Metallniete oder dekorative Zierkappe mit ihrem Logo. Heißprägung auf der Bügelinnenseite ist der Startpunkt für die meisten Marken — kostet etwa 0,15–0,20 $ extra pro Paar.',
  },
  {
    question: 'Wie hoch ist die MOQ für individuelle Wayfarer-Brillen?',
    answer: 'Wie bei allem, was wir fertigen — 100 Stück pro Modell. Sie können Farben innerhalb dieser 100 mischen, was zum Testen großartig ist. Eine typische Erstbestellung einer neuen Marke sieht etwa so aus: 30 Schwarz, 20 Schildpatt, 20 Transparent, 15 Matt-Schwarz, 15 in etwas Auffälligem wie Blau oder Rosa. Das gibt Ihnen fünf Optionen in Ihrem Shop ohne riesige finanzielle Verpflichtung. Bei Nachbestellungen verdoppeln die meisten Kunden die 2–3 bestverkauften Farben und streichen die, die sich nicht bewegt haben.',
  },
]

const products = [
  {
    name: 'Klassische Schwarze Wayfarer',
    description: 'Die, mit der alles begann, und die immer noch alle anderen übertrifft. Schwarzes Vollacetat, graue UV400-Gläser, poliertes Finish. Sie ist das Sonnenbrillen-Äquivalent eines weißen T-Shirts — passt zu allem und geht nie aus der Mode. Wir haben mehr von dieser einzelnen SKU versandt als von jeder anderen Wayfarer in unserem Katalog. Wenn Sie den Markt testen und nur eine Farbe wählen können, ist dies die richtige.',
    price: '5,50 – 9,00 $',
    moq: '100 Stk.',
    features: ['Schwarzes Vollacetat', 'Graues UV400-Glas', 'Poliertes Finish', 'Federscharniere'],
  },
  {
    name: 'Schildpatt-Wayfarer',
    description: 'Klassisches dunkles Schildpatt-Acetat — dieses Muster aus Bernstein- und Braunwirbeln, das seit Jahrzehnten ein Herrenmode-Grundpfeiler ist. Jedes Paar hat durch den Schnitt der Acetat-Platten ein leicht unterschiedliches Muster, was tatsächlich zum Premium-Gefühl beiträgt (keine zwei Paare sind exakt gleich). Wir verwenden ein tiefes, warmes Schildpatt, das sich gut fotografieren lässt und alle Altersgruppen anspricht.',
    price: '6,00 – 10,00 $',
    moq: '100 Stk.',
    features: ['Dunkles Schildpatt', 'Einzigartig pro Paar', 'Braunes Verlaufsglas', 'Handpoliert'],
  },
  {
    name: 'Kristall-Transparente Wayfarer',
    description: 'Transparente Acetat-Fassung mit einem leichten Schimmer, der das Licht fängt. Dieser Stil hat in den letzten Jahren einen Boom erlebt — überall auf Instagram und TikTok, und das junge Publikum (18–30) reagiert sehr gut darauf. Kombiniert mit leicht grau oder blau getönten Gläsern für einen sauberen, modernen Look. Die transparente Fassung macht auch das Logo sichtbarer, wenn Sie Branding auf der Bügelinnenseite machen.',
    price: '6,50 – 10,50 $',
    moq: '100 Stk.',
    features: ['Transparentes Acetat', 'Leicht getöntes Glas', 'Social-Media-Favorit', 'Sichtbares Branding'],
  },
  {
    name: 'Matt-Schwarze Wayfarer',
    description: 'Dieselbe Form wie die klassische Schwarze, aber mit einem matten Soft-Touch-Finish, das die Stimmung komplett verändert. Die matte Oberfläche wird durch einen speziellen Trommelpolierprozess erreicht, der den Glanz entfernt, ohne die Haltbarkeit zu beeinträchtigen. Fühlt sich moderner, dezenter an. Kombiniert mit dunkel getönten Gläsern. Passt gut zu Streetwear-, Minimalismus- und „Quiet Luxury"-Marken.',
    price: '6,50 – 10,50 $',
    moq: '100 Stk.',
    features: ['Mattes Soft-Touch', 'Trommelpoliert', 'Dunkel getöntes Glas', 'Moderne Ästhetik'],
  },
  {
    name: 'Ozeanblau-Verlauf Wayfarer',
    description: 'Eine transluzente blaue Acetat-Fassung, die von tiefem Marineblau oben zu hellerem Blau unten verläuft — wirklich auffällig in Person. Kombiniert mit blauen Verlaufsgläsern, die zum Fassungston passen. Das ist der Typ Produkt, der jemanden beim Scrollen stoppen lässt. Nicht für jede Marke geeignet (eher Statement als Basic), aber für Resort-Linien, Sommerkollektionen und Marken, die in einem vollen Regal herausstechen wollen, funktioniert es.',
    price: '7,00 – 11,00 $',
    moq: '100 Stk.',
    features: ['Blaues Verlauf-Acetat', 'Passendes Glas', 'Statement-Stück', 'Limited-Edition-tauglich'],
  },
  {
    name: 'Rote Acetat-Wayfarer',
    description: 'Kühnes, unübersehbares rotes Acetat, das Aufmerksamkeit verlangt. Kein Kirschrot oder Feuerwehrrot — eher ein tiefes, raffiniertes Burgunder-Rot, das als selbstbewusst wirkt, ohne laut zu sein. Kombiniert mit braunen Gläsern für Wärme. Ein kraftvoller Zug in einer Kollektion: zieht den Blick auf Ihrer Website, sticht auf Instagram hervor und signalisiert, dass Ihre Marke keine Angst vor Farbe hat.',
    price: '7,00 – 11,00 $',
    moq: '100 Stk.',
    features: ['Tiefes rotes Acetat', 'Warmes braunes Glas', 'Blickfang', 'Fashion Forward'],
  },
]

export default function WayfarerPageDe() {
  return (
    <>
      <ProductSchema product={{
        name: 'Wayfarer-Sonnenbrillen Großhandel',
        description: 'Klassische Wayfarer-Sonnenbrillen mit Premium-Acetat-Fassungen. Über 200 Farben und Muster verfügbar. UV400- und polarisierte Glasoptionen. Vollständige OEM-Individualisierung mit Logodruck.',
        minPrice: '5.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'Wayfarer-Brillen', url: 'https://eyeviewsunglasses.com/de/produkte/wayfarer' }
      ]} />
      <FAQPageSchema faqs={wayfarerFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Wayfarer-Brillen</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wayfarer-Sonnenbrillen Großhandel
            </h1>
          </div>

          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Wayfarer-Sonnenbrillen Großhandel - Hersteller individueller Acetat-Fassungen" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Die Wayfarer hat eine Geschichte, die kein anderes Sonnenbrillenmodell erreichen kann. 1952 tat ein <a href="https://en.wikipedia.org/wiki/Ray-Ban_Wayfarer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Designer namens Raymond Stegeman</a> bei Bausch &amp; Lomb etwas Radikales: Er verzichtete komplett auf Metall und entwarf eine Brillenfassung aus einem neuen Material namens Acetat. Das Ergebnis war kühn, kantig und völlig anders als alles, was die Leute zuvor gesehen hatten. Es sah nach Zukunft aus.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hollywood wurde schnell aufmerksam. James Dean trug Wayfarer in <em>Denn sie wissen nicht, was sie tun</em>. Audrey Hepburn trug sie in <em>Frühstück bei Tiffany</em>. In den 60ern waren Wayfarer überall — bei Rockstars, Politikern, Künstlern und normalen Leuten, die einfach gut aussehen wollten. Die Verkäufe gingen in den 70ern und 80ern zurück, aber dann brachten <em>Top Gun</em> und <em>The Breakfast Club</em> sie mit Macht zurück. Das Muster hat sich seitdem jedes Jahrzehnt wiederholt: Wayfarer sinken leicht, kommen dann stärker zurück. An diesem Punkt macht es keinen Sinn mehr, sie &ldquo;Trend&rdquo; zu nennen. Sie sind ein fester Bestandteil.
              </p>
              <p className="text-lg leading-relaxed">
                Als <strong>Wayfarer-Brillen-Hersteller</strong> produzieren wir diese Fassungen aus <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">italienischem Premium-Acetat</a> — derselbe Materialtyp, den Luxusmarken verwenden, die im Einzelhandel 200–400 $ verlangen. Acetat ist pflanzlichen Ursprungs (Baumwollfasern und Holzzellstoff), hypoallergen und hat eine Farbtiefe, die Spritzguss-Kunststoff einfach nicht replizieren kann. Wir haben über 200 Farben und Muster auf Lager und können individuelles Acetat für einzigartige Markenanforderungen beschaffen. Mit Preisen ab nur 5,50 $ pro Paar bieten Wayfarer im Großhandel einige der besten Margen im gesamten Brillengeschäft.
              </p>
            </div>
          </div>

          {/* Wayfarer vs Aviator Comparison */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-6">Wayfarer vs. Flieger: Schnellvergleich</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Viele unserer Kunden fragen, womit sie anfangen sollen. Hier der ehrliche Vergleich.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left font-semibold text-gray-700"></th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">🔲 Wayfarer</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">✈️ <Link href="/de/produkte/flieger" className="text-primary-600 hover:underline">Flieger</Link></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-6 py-3 font-medium">Fassungsmaterial</td><td className="px-6 py-3 text-gray-600">Acetat / PC-Kunststoff</td><td className="px-6 py-3 text-gray-600">Edelstahl / Aluminium / Titan</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Preisbereich</td><td className="px-6 py-3 text-gray-600">5 – 11 $ / Paar</td><td className="px-6 py-3 text-gray-600">8 – 22 $ / Paar</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Farboptionen</td><td className="px-6 py-3 text-gray-600">200+ (große Vielfalt)</td><td className="px-6 py-3 text-gray-600">5–8 Beschichtungsfarben</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Gewicht</td><td className="px-6 py-3 text-gray-600">25–32g</td><td className="px-6 py-3 text-gray-600">15–32g (je nach Metall)</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Beste Logo-Methode</td><td className="px-6 py-3 text-gray-600">Heißprägung / Prägung</td><td className="px-6 py-3 text-gray-600">Lasergravur</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Stil</td><td className="px-6 py-3 text-gray-600">Lässig, bunt, mutig</td><td className="px-6 py-3 text-gray-600">Elegant, klassisch, premium</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Ideal für</td><td className="px-6 py-3 text-gray-600">Volumen, Vielfalt, Mode</td><td className="px-6 py-3 text-gray-600">Premium-Positionierung</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Unsere Wayfarer-Kollektion</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Vollständige Spezifikationen</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Fassungsmaterial', 'Italienisches Acetat (Mazzucchelli / vergleichbar) oder PC-Kunststoff'],
                      ['Fassungsgewicht', 'Acetat: 28–32g | PC-Kunststoff: 20–24g'],
                      ['Glasmaterial', 'Polycarbonat / TAC Polarisiert / CR-39 Optisch'],
                      ['Glasbreite', '50mm / 52mm / 54mm / 56mm'],
                      ['Stegbreite', '18mm / 20mm / 22mm'],
                      ['Bügellänge', '140mm / 145mm / 150mm'],
                      ['Glashöhe', '38mm – 44mm'],
                      ['UV-Schutz', 'UV400 — blockiert 100% der UVA- und UVB-Strahlung'],
                      ['Polarisation', 'Optionale 7-Schicht TAC-Folie — 99% Blendungsreduzierung'],
                      ['Fassungsfarben', '200+ Acetat-Farben: Uni, Schildpatt, Transparent, Marmor, Verlauf, Individuell'],
                      ['Glasfarben', 'Grau, Braun, Grün, Blau, Rosa, Gelb, Spiegel, Verlauf — alle verfügbar'],
                      ['Scharniere', '5-Zylinder-Federscharniere (Standard) oder 7-Zylinder (Premium)'],
                      ['Nasensteg', 'Integrierter Schlüsselloch- oder Sattelsteg — in die Fassung geformt'],
                      ['Zertifizierungen', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 Stück pro Modell — Farbmischung erlaubt'],
                      ['Musterzeit', '3–5 Werktage'],
                      ['Produktionszeit', '15–20 Tage Standard / 10–12 Tage Eilauftrag'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Häufig gestellte Fragen zu Wayfarer-Brillen</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {wayfarerFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Das könnte Sie auch interessieren</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/de/produkte/flieger" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Flieger-Brillen</h3>
                <p className="text-gray-600 text-sm">Metallfassungen, Tropfenform, Premium-Gefühl. Der andere &ldquo;Must-Have&rdquo; in jeder Brillenkollektion. Die meisten Marken führen sowohl Flieger als auch Wayfarer.</p>
              </Link>
              <Link href="/de/produkte/katzenaugen" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😺</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Katzenaugen-Brillen</h3>
                <p className="text-gray-600 text-sm">Wenn Ihre Marke auf Frauen abzielt, sind Katzenaugen die perfekte Ergänzung zu Wayfarer. Acetat-Fassungen mit erhöhten Spitzen und Retro-Glamour.</p>
              </Link>
              <Link href="/de/produkte/polarisiert" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Polarisierte Brillen</h3>
                <p className="text-gray-600 text-sm">Fügen Sie jeder Wayfarer polarisierte Gläser für ein Premium-Upgrade hinzu. Kostet 2–3 $ mehr pro Paar, ermöglicht 15–20 $ höheren Einzelhandelspreis.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bereit, Wayfarer zu bestellen?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Sagen Sie uns, welche Farben und Spezifikationen Sie brauchen, und Sie erhalten innerhalb von 24 Stunden ein Angebot.
              Muster werden in 3–5 Tagen versandt. Keine Verpflichtung, bis Sie grünes Licht geben.
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
