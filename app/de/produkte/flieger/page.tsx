import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Flieger-Sonnenbrillen Großhandel | OEM Aviator-Brillen Hersteller - EyeView',
  description: 'Führender Hersteller von Flieger-Sonnenbrillen im Großhandel. Individuelle Aviator-Brillen mit Logogravur, Metallfassungen, UV400/polarisierten Gläsern. MOQ 100 Stk. Direkt ab Fabrik. Jetzt Angebot anfordern!',
  keywords: 'Flieger Sonnenbrillen Großhandel, Aviator Brillen Hersteller, individuelle Aviator Sonnenbrillen, OEM Flieger Brillen, Sonnenbrillen Großhandel, Brillen Hersteller, Metallfassungen Großhandel',
  openGraph: {
    title: 'Flieger-Sonnenbrillen Großhandel | OEM Hersteller - EyeView',
    description: 'Führender Hersteller von Flieger-Sonnenbrillen im Großhandel. Individuelles Logo, Metallfassungen, UV400/polarisierte Gläser. MOQ 100 Stk. Fabrikpreise.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/produkte/flieger',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/flieger',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/aviator',
      'de': 'https://eyeviewsunglasses.com/de/produkte/flieger',
    },
  },
}

const aviatorFaqs = [
  {
    question: 'Wie hoch ist die Mindestbestellmenge für Flieger-Sonnenbrillen im Großhandel?',
    answer: 'Nur 100 Stück pro Modell. Und das Beste: Sie können innerhalb dieser 100 mischen. Sie könnten 20 goldfarbene Fassungen mit grauen Gläsern, 30 silberne mit blauem Spiegel und 50 schwarze mit Verlauf bestellen. So testen Sie, welche Kombinationen Ihre Kunden tatsächlich kaufen, statt zu raten. Die meisten unserer Flieger-Kunden starten mit 200–300 Stück in 2–3 Farbkombinationen und bestellen dann die Bestseller in größeren Mengen nach.',
  },
  {
    question: 'Welche Metalloptionen bieten Sie für Flieger-Fassungen an?',
    answer: 'Drei Hauptoptionen. Edelstahl ist am beliebtesten: robust, sieht großartig aus, rostet nicht und kostet 8–12 $/Paar. Aluminiumlegierung ist 40 % leichter (ideal für ganztägiges Tragen) und kostet 10–14 $/Paar. Und dann gibt es Beta-Titan für die Premium-Linie: hypoallergen (die Internationale Organisation für Normung klassifiziert Titan als biokompatibles Material gemäß ISO 5832), unglaublich leicht mit 15–20 Gramm und praktisch unzerstörbar. Titan kostet 14–22 $/Paar, aber damit können Sie im Einzelhandel 80–150 $+ verlangen, also sind die Margen tatsächlich besser. Alle können in Gold, Silber, Schwarz, Roségold oder individuellen Farben beschichtet werden.',
  },
  {
    question: 'Kann ich mein Logo auf Flieger-Brillen gravieren lassen?',
    answer: 'Natürlich, und ehrlich gesagt ist das der Bereich, in dem Metallflieger gegenüber Kunststofffassungen wirklich glänzen. Lasergravur sieht auf Metall fantastisch aus: scharf, dauerhaft und elegant. Wir können innen oder außen auf den Bügeln gravieren. Wenn Sie etwas Auffälligeres wollen, fertigen wir 3D-Metallabzeichen (Zinklegierung oder Edelstahl), die direkt an den Bügel oder Steg geschweißt werden. Dazu gibt es Glasbedruckung für dezente Logos in der Ecke und individuell gravierte Nasenpads, wenn Sie beim Branding wirklich aufs Ganze gehen wollen.',
  },
  {
    question: 'Bieten Sie polarisierte Gläser für Flieger-Brillen an?',
    answer: 'Ja, und ich empfehle es sehr. Unsere polarisierten TAC-Gläser verwenden eine 7-Schicht-Folie, die 99 % der Blendung eliminiert — der Unterschied ist enorm, besonders beim Fahren. Hier das Geschäftsargument: Polarisierte Flieger erzielen im Einzelhandel 25–40 % höhere Preise als Standard-UV400. Ein Paar, das ohne Polarisation für 40 $ verkauft wird, erreicht polarisiert locker 50–55 $. Wir fertigen auch photochrome Gläser (verdunkeln sich bei Sonnenlicht), Spiegelbeschichtungen, Antireflex und Verlaufsgläser. Mischen und kombinieren Sie nach Belieben.',
  },
  {
    question: 'Wie unterscheiden sich Flieger- von Wayfarer-Brillen im Großhandel?',
    answer: 'Gute Frage — die bekommen wir oft. Kurzfassung: Flieger sind aus Metall, Wayfarer aus Acetat/Kunststoff. Das bedeutet, Flieger kosten etwas mehr pro Paar (8–14 $ vs. 5–11 $), vermitteln aber auch ein hochwertigeres Gefühl. Flieger tendieren etwas maskuliner und haben dieses Militär-/Piloten-Erbe auf ihrer Seite. Wayfarer sind unisex und in viel mehr Farben erhältlich. Ehrlich? Die meisten erfolgreichen Marken führen beides. Wenn Sie sich für eines entscheiden müssen: Flieger für Premium-Positionierung, Wayfarer für Volumen.',
  },
  {
    question: 'Welche Verpackung kann ich für meine Flieger-Bestellung erhalten?',
    answer: 'Wir bieten das komplette Programm. Das beliebteste Setup ist ein Hartschalenetui (EVA mit Ihrem aufgedruckten Logo) plus ein Mikrofaserbeutel, der auch als Reinigungstuch dient. Kostet etwa 1,50–2,50 $ pro Set je nach Material. Wir fertigen auch Lederetuis, Metalldosen, individuell bedruckte Kartons mit Vollfarbdruck, Garantiekarten und Anhängeetiketten. Für Premium-Linien wählen manche Kunden Magnetverschluss-Boxen oder sogar Holzetuis. Die MOQ für Verpackung beträgt 500 Stück — aber Sie können für Ihre erste kleine Bestellung generische Verpackung verwenden und bei der Nachbestellung auf individuelle umsteigen.',
  },
]

const products = [
  {
    name: 'Klassischer Gold-Flieger',
    description: 'Das ist die Brille, die sich jeder vorstellt, wenn man „Flieger" sagt. Polierter Edelstahl in Gold, Tropfenform, grüne G-15-Gläser, die Blendung reduzieren, ohne alles seltsam aussehen zu lassen. Das goldene Finish hat eine PVD-Beschichtung (kein billiger Sprühlack), also hält es den täglichen Gebrauch aus. Wir verkaufen mehr davon als jede andere einzelne SKU — und die meisten unserer Kunden sagen dasselbe. Wenn Sie eine Brillenmarke starten und eine sichere Wette suchen, ist dies die richtige.',
    price: '8,50 – 12,00 $',
    moq: '100 Stk.',
    features: ['Edelstahl', 'G-15-Glas', 'PVD-Goldbeschichtung', 'Silikon-Nasenpads'],
  },
  {
    name: 'Silberner Spiegel-Flieger',
    description: 'Silberne Fassung, silberne Spiegelgläser — die Art Sonnenbrille, die man bei jedem Strandurlaub sieht. Die Spiegelbeschichtung reflektiert etwa 60 % des einfallenden Lichts, was sie wirklich gut für helle Bedingungen macht (nicht nur hübsch). Die Fassung ist Edelstahl mit Rhodium-Beschichtung, die selbst in salziger Küstenluft nicht oxidiert. Die Federscharniere geben etwas Flexibilität für verschiedene Kopfgrößen, ohne sich zu eng oder zu locker anzufühlen. Großer Verkaufsschlager für Resort-Marken und Strandshops.',
    price: '9,00 – 13,00 $',
    moq: '100 Stk.',
    features: ['Rhodium-Beschichtung', 'Spiegelbeschichtung', 'Federscharniere', 'Korrosionsbeständig'],
  },
  {
    name: 'Stealth Matt-Schwarz Flieger',
    description: 'Für Marken, die diesen taktischen, schnörkellosen Look suchen. Die matte Galvanisierung gibt der Fassung eine komplett reflexionsfreie Oberfläche — ein ganz anderes Gefühl als glänzendes Gold oder Silber. Kombiniert mit dunkel getönten Gläsern, die 85 % des sichtbaren Lichts blockieren, bieten sie ernsthaften Sonnenschutz. Wir sehen viele Bestellungen von Outdoor-Marken, Sicherheitsausrüstungs-Unternehmen und Herrenmode-Marken. Die verstärkten Bügelenden sind ein nettes Detail — sie halten, ohne zu rutschen, selbst wenn man schwitzt.',
    price: '9,00 – 13,00 $',
    moq: '100 Stk.',
    features: ['Mattes Finish', 'Dunkel getöntes Glas', 'Verstärkte Bügelenden', 'Antireflektierend'],
  },
  {
    name: 'Fashion Roségold-Flieger',
    description: 'Roségold ist seit etwa fünf Jahren das angesagte Finish und zeigt keine Anzeichen einer Verlangsamung. Der warme Rosa-Gold-Ton fotografiert sich wunderbar (riesig für Marken, die über Instagram verkaufen) und schmeichelt praktisch jedem Hautton. Wir kombinieren sie mit rosa Verlaufsgläsern — oben dunkel, unten hell — was ihnen diesen mühelosen Fashion-Look verleiht. Gefertigt aus Aluminiumlegierung wiegen sie unter 25 Gramm. Wenn Ihre Kundin eine 22-jährige Frau ist, die vom Smartphone kauft, ist das hier, worauf sie klicken wird.',
    price: '10,00 – 14,00 $',
    moq: '100 Stk.',
    features: ['Aluminiumlegierung', 'Rosa Verlaufsglas', 'Unter 25g', 'Roségold-Ton'],
  },
  {
    name: 'Polarisierter Blau-Spiegel Flieger',
    description: 'Lebhafte ozeanblau verspiegelte Gläser mit echter Polarisation darunter — sie sehen also großartig aus UND funktionieren wirklich. Die TAC-Polarisationsfolie blockiert 99 % der Blendung, die von Wasser, Straßen und Schnee reflektiert wird. Die Gunmetal-Fassung hält den Fokus auf diesen Gläsern. Dies ist unsere Nummer-eins-Empfehlung für Kunden, die an Küsten-/Surf-/Angel-Publikum verkaufen. Sie fotografieren sich gut, leisten gut und rechtfertigen einen höheren Einzelhandelspreis dank der Polarisation. Sie kosten etwa 2–3 $ mehr pro Paar als nicht-polarisierte, aber Sie können im Einzelhandel 15–20 $ mehr verlangen.',
    price: '11,00 – 15,00 $',
    moq: '100 Stk.',
    features: ['TAC-Polarisation', 'Blauer Spiegel', 'Gunmetal-Fassung', '99% Blendungsreduzierung'],
  },
  {
    name: 'Premium Titan-Flieger',
    description: 'Das Beste unserer Flieger-Linie. Beta-Titan-Fassung mit nur 15 Gramm Gewicht — kaum spürbar im Gesicht. Titan ist hypoallergen (kein Nickel, keine Reaktionen), korrosionsbeständig und biegsam — es kehrt in seine Form zurück. Wir kombinieren sie mit antireflex-beschichteten optischen CR-39-Gläsern — dieselbe Qualität, die man in 200-$+-Designerfassungen findet. Das ist für Marken, die im Premium-Segment konkurrieren wollen. Ihr Einzelhandelspreis kann locker 80–150 $+ betragen, und die Stückkosten liegen trotzdem nur bei 14–22 $. Rechnen Sie die Margen aus.',
    price: '14,00 – 22,00 $',
    moq: '100 Stk.',
    features: ['Beta-Titan', 'CR-39-Optikglas', 'Antireflex', 'Nur 15 Gramm'],
  },
]

export default function FliegerPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Flieger-Sonnenbrillen Großhandel',
        description: 'Klassische Flieger-Sonnenbrillen mit Tropfenform-Metallfassungen. Erhältlich in Edelstahl, Aluminiumlegierung und Titan. UV400- und polarisierte Glasoptionen. Vollständige OEM-Individualisierung mit Logogravur.',
        minPrice: '8.50',
        maxPrice: '22.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'Flieger-Brillen', url: 'https://eyeviewsunglasses.com/de/produkte/flieger' }
      ]} />
      <FAQPageSchema faqs={aviatorFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Flieger-Brillen</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flieger-Sonnenbrillen Großhandel
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
              alt="Flieger-Sonnenbrillen Großhandel - OEM Metallfassungen Hersteller"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Hier ein interessantes Detail: Die Fliegerbrille war nie als Modeartikel gedacht. 1936 erhielt <a href="https://www.bausch.com/our-company/history/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bausch &amp; Lomb</a> einen Auftrag des US Army Air Corps, Sonnenbrillen für Militärpiloten zu entwerfen. Das Problem war spezifisch: Piloten flogen höher und schneller als je zuvor, und die Sonne ruinierte ihre Sicht. Die Lösung? Ein großes, tropfenförmiges Glas, das die gesamte Augenhöhle abdeckt, eine dünne Metallfassung, die unter einem Flughelm praktisch nichts wiegt, und ein Doppelsteg über der Nase zur Druckverteilung. Man nannte sie &ldquo;Aviator&rdquo;, weil, nun ja, Flieger sie trugen.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Dann kam der Zweite Weltkrieg, und plötzlich trugen Millionen von Soldaten sie. Als sie nach Hause kamen, trugen sie sie weiter. In den 60er und 70er Jahren waren Fliegerbrillen vom Cockpit nach Hollywood gesprungen — getragen von allen, von Paul Newman bis zum Cast von Top Gun. Der Stil blieb einfach. Fast 90 Jahre später hat sich das Grunddesign kaum verändert, und Flieger gehören nach wie vor zu den drei meistverkauften Sonnenbrillenmodellen weltweit. Das ist kein Trend — das ist ein Klassiker.
              </p>
              <p className="text-lg leading-relaxed">
                Wir produzieren über 200.000 Paar <strong>individuelle Flieger-Brillen</strong> pro Jahr für Marken in über 50 Ländern. Unsere Fabrik verfügt über dedizierte Metallfassungs-Produktionslinien mit CNC-Bearbeitung, PVD-Galvanisierung und Präzisions-Glasmontage. Ob Sie 100 Paar brauchen, um einen neuen Markt zu testen, oder 50.000 Paar für einen nationalen Einzelhandelsstart — wir haben die Kapazität und Erfahrung. Und da Flieger unser Kerngeschäft sind, haben wir den Prozess perfektioniert — das bedeutet schnellere Produktion, weniger Fehler und bessere Preise.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Unsere Flieger-Kollektion</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
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
                      ['Fassungsmaterial', 'Edelstahl / Aluminiumlegierung / Beta-Titan'],
                      ['Fassungsgewicht', 'Stahl: 28–32g | Aluminium: 18–22g | Titan: 15–18g'],
                      ['Glasmaterial', 'Polycarbonat / TAC Polarisiert / CR-39 Optisch / Mineralglas'],
                      ['Glasbreite', '55mm / 58mm / 60mm / 62mm'],
                      ['Stegbreite', '14mm / 15mm / 16mm / 18mm'],
                      ['Bügellänge', '135mm / 140mm / 145mm'],
                      ['Glashöhe', '48mm – 52mm (Tropfenform)'],
                      ['UV-Schutz', 'UV400 — blockiert 100% der UVA- (315–380nm) und UVB-Strahlen (280–315nm)'],
                      ['Polarisation', 'Optionale 7-Schicht TAC-Folie — 99% Blendungsreduzierung'],
                      ['Fassungsfarben', 'Gold, Silber, Gunmetal, Matt-Schwarz, Roségold oder individuelles PVD'],
                      ['Glasfarben', 'Grau, Grün G-15, Braun, Blau, Rosa, Spiegel, Verlauf'],
                      ['Nasenpads', 'Verstellbares Silikon mit Titanarm'],
                      ['Scharniere', 'Standard-Zylinder oder Federscharnier (flexibler Sitz)'],
                      ['Zertifizierungen', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001 — Dokumentation auf Anfrage'],
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

          {/* Frame Material Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Das richtige Metall für Ihre Flieger wählen</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Das ist eine der ersten Entscheidungen, die Sie treffen, und sie beeinflusst alles: Kosten, Gewicht, Haltbarkeit und wie hochwertig sich Ihr Produkt in der Hand anfühlt. Hier die ehrliche Analyse.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔩</div>
                <h3 className="text-xl font-bold mb-3">Edelstahl</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Unsere beliebteste Option und die, die wir den meisten Marken empfehlen. Wir verwenden <a href="https://en.wikipedia.org/wiki/SAE_304_stainless_steel" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Stahl der Güte 304 oder 316L</a> — dasselbe Material wie bei guten Uhren. Er ist stark, korrodiert nicht und nimmt Beschichtungen hervorragend an. Gold, Silber, Schwarz, Roségold — alles sieht auf Stahl großartig aus und hält langfristig. Das Gewicht (28–32g) spielt sogar zu Ihrem Vorteil, weil Kunden dieses leichte Gewicht mit Qualität assoziieren. Ideal für Marken mit einem Einzelhandelspreis von 20–60 $.
                </p>
                <div className="text-primary-600 font-bold">8 – 12 $ / Paar</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🪶</div>
                <h3 className="text-xl font-bold mb-3">Aluminiumlegierung</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wenn Ihren Kunden Komfort wichtig ist — besonders wenn sie Sonnenbrillen den ganzen Tag tragen — lohnt sich Aluminium. Mit 18–22g ist es spürbar leichter als Stahl. Wir verwenden <a href="https://en.wikipedia.org/wiki/6061_aluminium_alloy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Luftfahrtlegierung 6061-T6 oder 7075</a> (dasselbe Material wie in Flugzeugrümpfen, falls Sie ein Verkaufsargument brauchen). Die Fassungen können in praktisch jeder Farbe eloxiert werden, und das Finish ist sehr haltbar. Ideal für Outdoor-, Athleisure- und Marken im Preissegment 40–80 $ Einzelhandel.
                </p>
                <div className="text-primary-600 font-bold">10 – 14 $ / Paar</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Titan</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Der Prestige-Zug. Beta-Titan mit 15–18g ist geradezu komisch leicht — Leute setzen sie auf und sagen sofort &ldquo;Wow.&rdquo; Es ist 100 % hypoallergen (kein Nickel), was ein echtes Verkaufsargument für empfindliche Haut ist. Und die Flexibilität ist unglaublich — Sie können die Bügel fast flach biegen und sie kehren in ihre Form zurück. Der Nachteil? Höhere Kosten. Aber hier ist der Punkt: Titan erlaubt Ihnen, im Einzelhandel 80–200 $+ zu verlangen, ohne mit der Wimper zu zucken. Die Margen pro Paar sind oft besser als bei günstigeren Fassungen.
                </p>
                <div className="text-primary-600 font-bold">14 – 22 $ / Paar</div>
              </div>
            </div>
          </section>

          {/* Lens Options */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Glasoptionen</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Die Fassung fängt den Blick, aber das Glas ist das, durch das Ihr Kunde jeden Tag schaut. Das bieten wir an.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Polycarbonat (PC)</h3>
                <p className="text-sm text-gray-600">Der Standard. Schlagfest, leicht, bruchsicher — 10-mal stärker als Glas. Funktioniert für alles von Freizeitnutzung bis Sport. Alle unsere Farben und Spiegelbeschichtungen sind in PC erhältlich. Das verwenden 70 % unserer Kunden.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">TAC Polarisiert</h3>
                <p className="text-sm text-gray-600">Sieben Schichten Polarisationsfolie zwischen PC-Schichten. Eliminiert 99 % der reflektierten Blendung. Das Upgrade, das höhere Preise rechtfertigt. Fügt etwa 2–3 $ zu Ihren Stückkosten hinzu, aber Sie können im Einzelhandel 15–20 $ mehr verlangen. Lohnt sich.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">CR-39 Optisch</h3>
                <p className="text-sm text-gray-600">Wenn Sie bei der Glasqualität mit den großen Marken konkurrieren wollen, ist das hier die Wahl. Eine Abbe-Zahl von 58 bedeutet perfekte Optik ohne Verzerrung. Kratzfest. Leichter als Glas. Die Wahl für Premium-Positionierung.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Photochrom</h3>
                <p className="text-sm text-gray-600">Verdunkelt sich bei Sonnenlicht, wird drinnen wieder klar. Wechselt in etwa 30 Sekunden von Kategorie 1 zu Kategorie 3. Ein netter Trick und ein Verkaufsargument für Kunden, die eine Allround-Brille wollen. Fügt etwa 3–4 $ pro Paar hinzu.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Mineralglas</h3>
                <p className="text-sm text-gray-600">Alte Schule, aber einige Märkte lieben es. Beste optische Klarheit, höchste Kratzfestigkeit, schwerstes Gewicht. Beliebt in Europa und Japan, wo Mineralgläser ein Premium-Image haben. Wir fertigen Mineralglas in allen Standardtönungen.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Verfügbare Beschichtungen</h3>
                <p className="text-sm text-gray-600">Spiegel (Silber, Blau, Gold, Rot, Grün, Lila), Antireflex, Hydrophob (wasserabweisend), Oleophob (fingerabdruckresistent) und Antibeschlag. Kombinieren Sie nach Belieben.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Machen Sie sie zu Ihren eigenen</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Hier verwandeln Sie großartige Sonnenbrillen in IHR Produkt. Alles, was wir individualisieren können.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Logo-Arbeit</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Lasergravur</strong> — am beliebtesten. Sauber, dauerhaft, sieht auf Metall großartig aus. Innen oder außen am Bügel.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Metallabzeichen</strong> — ein kleines 3D-Abzeichen aus Zinklegierung oder Edelstahl, an den Bügel geschweißt. Fühlt sich hochwertig an.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Glasbedruckung</strong> — kleines Logo per Siebdruck in der Glasecke. Dezent aber sichtbar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Individuelle Nasenpads</strong> — Ihr Logo graviert oder gedruckt auf den Silikon-Nasenpads. Ein schönes Detail.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Farben</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Fassung:</strong> Gold, Silber, Schwarz, Gunmetal, Roségold — oder geben Sie uns einen Pantone-Code und wir gleichen ihn ab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Glastönungen:</strong> Grau, Grün, Braun, Blau, Rosa, Gelb, Rot — oder Sonderfarbe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Spiegel:</strong> Silber, Blau, Gold, Rot, Grün, Lila, Rosa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Verlauf:</strong> Von oben nach unten in jeder Glasfarbe</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Verpackung</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hartschalenetuis:</strong> EVA mit Reißverschluss, Leder mit Magnetverschluss oder Metalldose — alle mit Ihrem aufgedruckten Logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Weiche Hüllen:</strong> Mikrofaser mit Kordelzug und Logo — dient auch als Reinigungstuch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Einzelhandelsverpackung:</strong> Vollfarbig bedruckter Karton, individuelle Einlagen, Aufhängelaschen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> Reinigungstücher, Garantiekarten, Anhängeetiketten, Aufkleber — alles mit Ihrem Branding</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Wer kauft Flieger-Brillen im Großhandel?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Wir versenden Flieger an ein ziemlich breites Spektrum von Unternehmen. Hier die häufigsten.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏪 Brillenmarken-Inhaber</h3>
                <p className="text-gray-300 text-sm">Neue und etablierte Marken, die ihre Produktlinie aufbauen. Flieger sind oft der erste Stil, den sie lancieren — sie sind sicher, verkaufen sich gut und sehen auf Marketing-Fotos gut aus.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🛍️ Einzelhändler</h3>
                <p className="text-gray-300 text-sm">Boutiquen, Surfshops, Optiker und Kaufhauseinkäufer, die ihre eigene Marke suchen. Unser Minimum von 100 Stück ermöglicht kleinen Geschäften den Einstieg ohne großes Risiko.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🌐 Online-Verkäufer</h3>
                <p className="text-gray-300 text-sm">Amazon-, Shopify-, Etsy-Verkäufer, die Qualitätsprodukte mit E-Commerce-tauglichen Margen brauchen. Wir können Produktfotos und Beschreibungen liefern, um Ihre Listings zu beschleunigen.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🎁 Firmenkunden & Werbeartikel</h3>
                <p className="text-gray-300 text-sm">Unternehmen, die gebrandete Flieger für Messen, Golfturniere, Teamgeschenke und Events bestellen. Hoher wahrgenommener Wert zu einem Preis, der für Werbebudgets funktioniert.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏨 Hotels & Resorts</h3>
                <p className="text-gray-300 text-sm">Gastgewerbe-Marken, die individuelle Flieger als Amenities oder Geschenkladen-Artikel anbieten. Individuelle Verpackung mit dem Resort-Namen schafft ein schönes Souvenir, das Gäste tatsächlich behalten.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">📦 Distributoren</h3>
                <p className="text-gray-300 text-sm">Regionale Großhändler, die mehrere Geschäfte beliefern. Unsere Mengenpreise bei Bestellungen ab 1.000 und 5.000 Stück geben Distributoren die Margen, die sie brauchen, um ihre Kunden zu bedienen.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Häufig gestellte Fragen zu Flieger-Brillen</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {aviatorFaqs.map((faq, index) => (
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
              <Link href="/de/produkte/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Wayfarer-Brillen</h3>
                <p className="text-gray-600 text-sm">Der andere &ldquo;Must-Have&rdquo;-Stil. Acetat-Fassungen, jede Menge Farben und die meistverkaufte Form der Welt. Die meisten erfolgreichen Marken führen sowohl Flieger als auch Wayfarer.</p>
              </Link>
              <Link href="/de/produkte/polarisiert" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Polarisierte Brillen</h3>
                <p className="text-gray-600 text-sm">Fügen Sie jedem Flieger polarisierte Gläser für ein Premium-Upgrade hinzu. 99 % Blendungsreduzierung, 25–40 % höherer Einzelhandelspreis. Der einfachste Weg, Ihre Margen zu verbessern.</p>
              </Link>
              <Link href="/de/produkte/tr90" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Sportbrillen</h3>
                <p className="text-gray-600 text-sm">Wenn Ihre Kunden etwas Robusteres als Flieger brauchen — TR90-Wraparound-Fassungen mit rutschfesten Griffen für Laufen, Radfahren und Outdoor-Sport.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bereit, Flieger-Brillen zu bestellen?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Sagen Sie uns, was Sie brauchen — Stil, Menge, eventuelle Individualisierungen — und wir antworten innerhalb von 24 Stunden mit Preisen.
              Muster werden in 3–5 Tagen versandt. Keine Verpflichtung, bis Sie bereit sind.
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
