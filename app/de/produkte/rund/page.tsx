import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Runde Sonnenbrillen Großhandel | Retro-Brillen Hersteller - EyeView',
  description: 'Hersteller von runden Sonnenbrillen im Großhandel. Vintage-Retro-Fassungen in Metall und Acetat. John-Lennon-Stil bis Oversize. OEM/ODM. MOQ 100 Stk. Fabrikpreise.',
  keywords: 'Runde Sonnenbrillen Großhandel, Retro Brillen Hersteller, Vintage Sonnenbrillen, runde Fassungen Großhandel, Brillen Hersteller',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/rund',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/round',
      'de': 'https://eyeviewsunglasses.com/de/produkte/rund',
    },
  },
}

const products = [
  {
    name: 'Klassische Runde Gold',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'Das Original. Dünner Golddraht, perfekt kreisförmige Gläser, verstellbare Silikon-Nasenpads. Das ist die Fassung, die John Lennon ikonisch machte und nach der jeder Vintage-Liebhaber immer noch greift. Wir verkaufen davon mehr als von jedem anderen runden Stil — und wir fertigen sie seit 8 Jahren ohne eine einzige Designänderung. Weil man nicht repariert, was nicht kaputt ist.',
  },
  {
    name: 'Runde Silberfassung',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'Gleiche klassische Rundform, kühlerer Ton. Die gebürstete Silberoberfläche spricht die Minimalisten an — skandinavische Designfans, Tech-Arbeiter, die „Weniger ist mehr"-Fraktion. Passt perfekt zu neutralen Garderoben. Einer unserer skandinavischen Distributoren führt ausschließlich silberne Runde und bewegt über 3.000 Paar pro Quartal.',
  },
  {
    name: 'Vintage Rund Schwarz',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.50 - $12.50',
    moq: '100 Stk.',
    description: 'Dickes schwarzes Acetat mit markantem Profil. Das ist keine zierliche Drahtfassung — es ist ein Statement. Denken Sie Architekt, Kunstprofessor, Kreativdirektor. Die substanzielle Konstruktion gibt ihr ein Premium-Gewicht in der Hand, das Qualität schreit. Beliebt bei unabhängigen Brillenboutiquen, die etwas Kräftigeres als Metall suchen.',
  },
  {
    name: 'Runde Acetat Schildpatt',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 Stk.',
    description: 'Warmes Schildpattmuster in geschichtetem Acetat. Die mehrfarbigen Braun- und Bernsteintöne erzeugen eine Tiefe, die einfarbige Fassungen nicht bieten können. Das ist die „Smart Casual" unter den runden Sonnenbrillen — funktioniert zum T-Shirt, funktioniert zum Blazer. Konstant eine unserer Top 5 bei Nachbestellungen über alle Produktlinien hinweg.',
  },
  {
    name: 'Runde Farbgläser',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 Stk.',
    description: 'Rosa Gläser. Blaue Gläser. Gelbe Gläser. Grüne Gläser. Das ist die Festival-Fassung — Coachella, Glastonbury, Tomorrowland. Die dünne Goldmetallfassung mit leuchtend gefärbten Gläsern fängt diese Freigeist-Bohemian-Energie ein. Wir beliefern mehrere Musikfestival-Merchandiser, die diese vor Ort für das 5-8-fache des Großhandelspreises verkaufen. Die Margen sind verrückt.',
  },
  {
    name: 'Oversize Rund',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 Stk.',
    description: 'Die dramatische Schwester. 56-60mm Gläser, die das halbe Gesicht bedecken und quer durch den Raum ein Statement setzen. Oversize-Runde sind in den sozialen Medien explodiert — Influencer lieben die Proportionen. Mehr Sonnenschutz als Standard-Runde obendrein, also tatsächlich schützender. Derzeit unser am schnellsten wachsender Rund-Stil, plus 40% im Jahresvergleich.',
  },
]

export default function RundPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Runde Sonnenbrillen</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Runde Sonnenbrillen Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lennon trug sie. Ozzy trug sie. Harry Potter trug sie. Und jetzt wollen Ihre
            Kunden sie. Vintage-Kreisfassungen in Metall, Acetat und jeder Größe vom subtilen
            Intellektuellen bis zum Oversize-Statement. Direkt ab Fabrik, MOQ 100 Stück.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Runde Sonnenbrillen Großhandel Kollektion - Vintage Kreisfassungen"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Die Fassung, die Kultur prägte</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Die runde Fassung begann nicht als modische Wahl. In den frühen 1900er Jahren war
              sie einfach die am einfachsten herzustellende Form — Kreise waren leicht zu schleifen.
              Aber dann geschah etwas. John Lennon griff in den 1960ern zu einem Paar kleiner
              Drahtrunder und machte sie zum visuellen Symbol einer ganzen Generation. Frieden,
              Liebe und perfekt kreisförmige Gläser. Über Nacht ging die runde Fassung von
              &quot;funktional&quot; zu &quot;revolutionär.&quot;
            </p>
            <p>
              Die Liste derer, die Runde berühmt machten, liest sich wie eine kulturelle
              Ruhmeshalle. Janis Joplin in Woodstock. Ozzy Osbourne auf der Bühne. Gandhi beim
              Anführen einer Nation. Steve Jobs beim iPhone-Launch. Jeder wählte runde Fassungen —
              und jeder gab ihnen eine andere Bedeutung. Rebellion. Kreativität. Weisheit.
              Schlichtheit. Das ist die Kraft dieser Form: Sie passt sich an, wer sie trägt.
            </p>
            <p>
              Schnellvorlauf bis heute. Die Gen Z entdeckte Vintage-Mode und ging voll rein.
              Runde Sonnenbrillen gehören wieder zu den weltweiten Top 5-Bestsellern, angetrieben
              von Second-Hand-Kultur, Festival-Fashion und der ästhetischen Seite von TikTok.
              Die Nachfrage ist real und wächst — unsere Bestellungen für runde Fassungen sind
              seit 2022 jährlich um 35% gestiegen. Und mit der <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">WHO-Warnung vor kumulativer UV-Belastung</a>,
              sind modische Sonnenbrillen, die tatsächlich die Augen schützen, relevanter denn je.
              Wenn Sie keine Runden führen, lassen Sie Geld auf dem Tisch liegen.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Runde Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Die Rund-Kollektion</h2>
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
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>UV400-Schutz</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Individuelles Logo möglich</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/de/kontakt" className="btn-primary w-full block text-center">Angebot anfordern</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Klein, Mittel oder Oversize? Das ist wichtiger als Sie denken</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Die Glasgröße verändert die Persönlichkeit einer runden Fassung komplett. Eine 44mm-Runde
            flüstert &quot;Intellektueller.&quot; Eine 60mm-Runde schreit &quot;Schaut mich an.&quot;
            So wählen Sie richtig:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔍 Klein (42-48mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Die authentische „Lennon"-Größe. Klein und bewusst. Diese sind für Leute, die
                Wert darauf legen, die Vintage-Proportionen exakt richtig zu treffen. Sie bedecken
                nicht viel Gesicht — das ist der Punkt. Es geht um die Ästhetik, nicht um die
                Abdeckung. Sehr beliebt bei Vintage-Puristen, Korrektionsbrillen-Käufern und
                der „Harry Potter-Generation." Bestseller in Optikgeschäften.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Am besten für: kleine bis mittlere Gesichter</li>
                <li>• Ausstrahlung: intellektuell, authentisch vintage</li>
                <li>• Top-Markt: Optiker, Vintage-Läden</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">👓 Mittel (49-53mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Die sichere Wahl. Mittlere Runde passen zur breitesten Palette von Gesichtern
                und sprechen Männer und Frauen gleichermaßen an. Nicht zu vintage, nicht zu
                trendy — genau richtig. Wenn Sie neu im Sortiment runder Fassungen sind und
                Ihren Markt noch nicht kennen, fangen Sie hier an. Diese haben die höchste
                Verkaufsquote und niedrigste Rücksendequote aller runden Größen, die wir
                produzieren.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Am besten für: die meisten Erwachsenengesichter</li>
                <li>• Ausstrahlung: ausgewogen, universell ansprechend</li>
                <li>• Top-Markt: Einzelhandel allgemein, Online</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔮 Oversize (54-62mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Das Statement-Stück. Oversize-Runde sind überall auf Instagram und TikTok.
                Große Proportionen, maximales Drama, viel Sonnenschutz. Das sind die Fassungen,
                die „OMG, wo hast du die her"-Reaktionen auslösen. Derzeit unser am schnellsten
                wachsendes Segment — plus 40% im Jahresvergleich. Wenn Ihre Kunden unter 35
                sind, ist das wahrscheinlich, was sie wollen.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Am besten für: mittlere bis große Gesichter</li>
                <li>• Ausstrahlung: mutig, Social-Media-tauglich</li>
                <li>• Top-Markt: Modemarken, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Warum Runde immer wiederkommen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🎭" title="Kulturelles Gewicht" description="Über 60 Jahre ikonischer Träger. Keine andere Form hat so viel Geschichte und Bedeutung." />
            <FeatureCard icon="👓" title="Schmeichelhafte Geometrie" description="Kreise mildern eckige Gesichter wunderbar. Eckiger Kiefer? Diamantgesicht? Runde gleichen aus." />
            <FeatureCard icon="✨" title="Unisex-Appeal" description="Eine der wenigen Formen, die sich gleich gut an Männer und Frauen verkauft. Verdoppeln Sie Ihren Markt sofort." />
          </div>
        </section>

        {/* Specs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technische Daten</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Spezifikation</th>
                  <th className="p-4 text-left font-semibold">Metall</th>
                  <th className="p-4 text-left font-semibold">Acetat</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Material</td><td className="p-4 text-gray-600">Edelstahl / Titan</td><td className="p-4 text-gray-600">Acetat im italienischen Stil</td></tr>
                <tr><td className="p-4 font-medium">Glasbreite</td><td className="p-4 text-gray-600">42-58mm</td><td className="p-4 text-gray-600">46-62mm</td></tr>
                <tr><td className="p-4 font-medium">Steg</td><td className="p-4 text-gray-600">18-22mm</td><td className="p-4 text-gray-600">18-24mm</td></tr>
                <tr><td className="p-4 font-medium">Bügellänge</td><td className="p-4 text-gray-600">135-145mm</td><td className="p-4 text-gray-600">140-148mm</td></tr>
                <tr><td className="p-4 font-medium">Gewicht</td><td className="p-4 text-gray-600">15-22g</td><td className="p-4 text-gray-600">25-35g</td></tr>
                <tr><td className="p-4 font-medium">Glasoptionen</td><td className="p-4 text-gray-600">CR-39 / Glas / TAC</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Nasenpads</td><td className="p-4 text-gray-600">Verstellbares Silikon</td><td className="p-4 text-gray-600">Integrierter Schlüssellochsteg</td></tr>
                <tr><td className="p-4 font-medium">Farben</td><td className="p-4 text-gray-600">12+ inkl. Farbtönungen</td><td className="p-4 text-gray-600">10+ Optionen</td></tr>
                <tr><td className="p-4 font-medium">Polarisiert</td><td className="p-4 text-gray-600">Optional TAC</td><td className="p-4 text-gray-600">Optional TAC</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Verwandte Stile</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/katzenaugen" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Katzenaugen-Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Eine weitere Vintage-Ikone — passt gut in Kollektionen</p>
            </Link>
            <Link href="/de/produkte/polarisiert" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarisierte Runde</h3>
              <p className="text-sm text-gray-600">Blendschutz-TAC für jeden runden Stil verfügbar</p>
            </Link>
            <Link href="/de/produkte" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Blaulicht Rund</h3>
              <p className="text-sm text-gray-600">Vintage-Fassungen mit Bildschirmschutz</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Häufige Fragen</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Passen runde Sonnenbrillen zu runden Gesichtern?"
              answer="Ehrlich? Kommt drauf an. Die gängige Meinung sagt: ‚Nein — Kreise auf Kreisen machen alles runder.' Und das stimmt für manche. Aber viele Leute mit runden Gesichtern tragen sie trotzdem gern. Unsere Empfehlung: Wenn Sie für den allgemeinen Einzelhandel einkaufen, setzen Sie auf mittlere und Oversize-Runde (die passen zu mehr Gesichtsformen). Wenn ein Kunde mit rundem Gesicht fragt, schlagen Sie stattdessen eine eckige Form wie unsere Cat-Eye oder Wayfarer vor. Aber weisen Sie niemanden ab — Moderegeln sind dazu da, gebrochen zu werden."
            />
            <FaqItem
              question="Metall oder Acetat — was ist der wirkliche Unterschied?"
              answer="Metall-Runde sind leichter (15-22g vs. 25-35g), dünner und filigraner. Sie haben verstellbare Nasenpads, passen also zu mehr Gesichtsformen. Acetat-Runde sind markanter, schwerer auf die ‚Premium'-Art und in viel mehr Farben und Mustern erhältlich — Schildpatt, Marmor, transparente Töne. Beide erfüllen FDA UV-Schutzstandards. Metall sagt ‚minimalistischer Intellektueller.' Acetat sagt ‚modebewusster Kreativer.' Beide verkaufen sich gut, aber an unterschiedliche Kunden."
            />
            <FaqItem
              question="Können runde Fassungen mit Korrektionsgläsern bestückt werden?"
              answer="Absolut. Rund ist tatsächlich die einfachste Form für Korrektionsgläser, weil der symmetrische Kreis die optische Korrektur gleichmäßig verteilt. Wir liefern alle unsere runden Fassungen korrektionsfertig mit Demogläsern. Funktioniert für Einstärke, Bifokal und Gleitsicht. Runde Korrektionsfassungen sind ein riesiger Markt — denken Sie an all die Harry-Potter-Fans, die tatsächlich eine Brille brauchen!"
            />
            <FaqItem
              question="Welche Glasfarben verkaufen sich am besten bei runden Fassungen?"
              answer="Topseller in der Reihenfolge: (1) Klassisches Grün G-15 — der authentische Vintage-Look, (2) Grau — neutral, passt zu allem, (3) Braun/Bernstein — wärmerer Ton, toller Kontrast, (4) Blau-Spiegel — jüngere Zielgruppe liebt diese, (5) Gelb/Rosa/Orange getönt — Festival- und Bohemian-Käufer. Verlaufsgläser (oben dunkel, unten heller) sind gerade auch ein Riesentrend, besonders bei Oversize-Runden."
            />
            <FaqItem
              question="Wie hoch ist die MOQ und wie schnell geht es?"
              answer="100 Stück pro Stil und Farbe für Lagerdesigns. 300 Stück für individuelles OEM (Ihr Logo, Pantone-Farben, individuelle Verpackung). Produktion dauert 15-25 Tage für Individualbestellungen, 3-5 Tage für Lagerartikel. Wir machen auch komplettes ODM — schicken Sie uns eine Skizze oder ein Referenzfoto und wir erstellen ein neues Design von Grund auf. Ein Kunde mailte uns ein Vintage-Foto von Sonnenbrillen aus den 1960ern und wir haben die Fassung in 3 Wochen nachgebaut."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Vintage wird nie alt</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Modemarken, Optikgeschäfte, Vintage-Boutiquen, Festival-Merchandiser — runde
            Fassungen verkaufen sich überall. Holen Sie sich Muster, überzeugen Sie sich von
            der Qualität, dann reden wir über Zahlen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Kostenloses Angebot anfordern</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Runde Sonnenbrillen", "item": "https://eyeviewglasses.com/de/produkte/rund" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Passen runde Sonnenbrillen zu runden Gesichtern?",
            "acceptedAnswer": { "@type": "Answer", "text": "Kommt auf die Person an. Konventionell werden für runde Gesichter eckige Formen empfohlen, aber viele Menschen mit runden Gesichtern tragen sie bewusst. Mittlere und Oversize-Runde passen zu mehr Gesichtsformen als kleine Runde." }
          },
          {
            "@type": "Question",
            "name": "Was ist der Unterschied zwischen Metall- und Acetat-Rundfassungen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Metall-Runde sind leichter (15-22g), dünner und minimalistischer mit verstellbaren Nasenpads. Acetat-Runde sind markanter (25-35g), kommen in mehr Farben und Mustern und haben ein substanzielles Premium-Gefühl." }
          },
          {
            "@type": "Question",
            "name": "Können runde Fassungen mit Korrektionsgläsern bestückt werden?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ja — rund ist die einfachste Form für Korrektionsgläser dank symmetrischer Geometrie. Alle unsere runden Fassungen werden korrektionsfertig mit Demogläsern für Einstärke, Bifokal und Gleitsicht geliefert." }
          },
          {
            "@type": "Question",
            "name": "Welche Glasfarben verkaufen sich am besten bei runden Fassungen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Topseller: klassisches Grün G-15, Grau, Braun/Bernstein, Blau-Spiegel und farbige Tönungen (Gelb, Rosa, Orange) für Festival-Käufer. Verlaufsgläser sind ebenfalls sehr beliebt bei Oversize-Runden." }
          },
          {
            "@type": "Question",
            "name": "Wie hoch ist die MOQ und Lieferzeit?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 Stück pro Stil für Lagerdesigns. 300 Stück für individuelle OEM-Bestellungen. Produktion: 15-25 Tage individuell, 3-5 Tage Lagerware. Vollständiger ODM-Designservice ebenfalls verfügbar." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
