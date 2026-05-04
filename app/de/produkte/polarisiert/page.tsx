import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polarisierte Sonnenbrillen Großhandel | Premium TAC-Gläser Hersteller - EyeView',
  description: 'Hersteller von polarisierten Sonnenbrillen im Großhandel. Premium 7-Schicht TAC-Polarisationsgläser, 99% Blendungsreduzierung, UV400-Schutz. Stile für Autofahren, Angeln, Sport. MOQ 100 Stk. Direkt ab Fabrik.',
  keywords: 'polarisierte Sonnenbrillen Großhandel, TAC Polarisationsgläser, polarisierte Brillen Hersteller, Blendschutz Sonnenbrillen, polarisierte Fahrbrillen, polarisierte Angelbrillen, CR-39 Polarisationsgläser',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/polarisiert/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/polarized/',
      'de': 'https://eyeviewsunglasses.com/de/produkte/polarisiert/',
    },
  },
}

const products = [
  {
    name: 'Polarisierter Aviator',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$12.00 - $18.00',
    moq: '100 Stk.',
    description: 'Der Aviator wurde buchstäblich für Piloten entwickelt, die durch die Cockpit-Blendung sehen mussten. Fügt man Polarisation hinzu, wird er zur ultimativen Fahrsonnenbrille. Unser polarisierter Aviator eliminiert Straßenblendung, Armaturenbrett-Reflexion und diesen blendenden Blitz vom vorausfahrenden Auto. Wir beliefern damit eine Mietwagenfirma in Dubai, die jedem Kunden ein Paar gibt — so gut sind sie fürs Fahren.',
  },
  {
    name: 'Polarisierter Wayfarer',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$11.00 - $17.00',
    moq: '100 Stk.',
    description: 'Klassische Wayfarer-Form trifft auf ernsthafte Optik. Die TAC-polarisierten Gläser verwandeln diese Modefassung in ein funktionales Kraftpaket — Strandblendung, Gehwegspiegelungen, Wasseroberflächen-Schimmern — alles weg. Kunden bekommen den Stil, den sie wollen, mit einem Schutz, den sie nicht für möglich hielten. Unser meistverkaufter Allrounder.',
  },
  {
    name: 'Polarisierter Sport-Wrap',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 Stk.',
    description: 'Umlaufende Abdeckung + polarisierte Gläser = keine Blendung aus jedem Winkel. Gebaut für Outdoor-Athleten, die peripheren Schutz brauchen — Radfahrer auf nassen Straßen, Trailrunner im Wechsellicht, Wanderer oberhalb der Baumgrenze. Die TR90-Fassung hält das Gewicht unter 26g. Ein Radsportverein in den Niederlanden bestellte 600 Paar für ihre gesamte Mitgliedschaft.',
  },
  {
    name: 'Polarisierte Angelbrille',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$14.00 - $20.00',
    moq: '100 Stk.',
    description: 'Fragen Sie jeden ernsthaften Angler und er wird Ihnen sagen — polarisierte Gläser sind beim Angeln nicht optional. Sie sind unverzichtbar. Unsere polarisierten Angelbrillen eliminieren die Oberflächenblendung, sodass Sie direkt ins Wasser sehen können. Den Fisch erkennen, die Struktur lesen, den Köder beobachten. Bernsteingläser für Süßwasser, grau-grün für Salzwasser. Eine Charter-Angelgesellschaft in Key West bestellt diese seit drei Jahren jedes Quartal nach.',
  },
  {
    name: 'Polarisierte Fahrbrille',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$12.50 - $18.50',
    moq: '100 Stk.',
    description: 'Speziell fürs Fahren entwickelt. Graue Gläser bewahren die natürliche Farbwahrnehmung (damit Ampeln richtig aussehen), während sie die blendende horizontale Blendung eliminieren, die von nasser Fahrbahn, Motorhauben und anderen Fahrzeugen reflektiert wird. Antireflexbeschichtung auf der Rückseite verhindert, dass Ihr eigenes Gesicht im Glas spiegelt. Diese werden von Berufskraftfahrern bevorzugt.',
  },
  {
    name: 'Polarisierte Cat-Eye',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 Stk.',
    description: 'Wer sagt, polarisiert muss sportlich aussehen? Diese Cat-Eye-Fassung mit TAC-polarisierten Gläsern beweist, dass Mode UND Funktion zusammengehen. Frauen, die Auto fahren, am Strand sind oder am Pool sitzen — sie bekommen den Blendschutz, den sie brauchen, verpackt in einer Fassung, die sie wirklich tragen wollen. Stil + Substanz. Unser Nr. 1-Seller bei polarisierten Damenbrillen.',
  },
]

export default function PolarisiertPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Polarisierte Sonnenbrillen</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Polarisierte Sonnenbrillen Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wenn Ihre Kunden einmal polarisiert probiert haben, gibt es kein Zurück. Die Blendung
            verschwindet. Die Farben leuchten. Alles sieht einfach... besser aus. Wir fertigen
            Premium-TAC-polarisierte Sonnenbrillen in jedem Stil — Aviator, Wayfarer, Sport,
            Cat-Eye — mit 7-Schicht-Gläsern, die 99% der blendenden horizontalen Blendung blockieren.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
            alt="Polarisierte Sonnenbrillen Großhandel Kollektion - Premium TAC-Gläser"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* How Polarization Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Wie Polarisation funktioniert (einfach erklärt)</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Hier die 30-Sekunden-Erklärung. Sonnenlicht bewegt sich in alle Richtungen — hoch,
              runter, seitwärts. Wenn es auf eine flache Oberfläche wie Wasser, eine Straße oder
              eine Motorhaube trifft, wird es in horizontale Wellen &quot;organisiert&quot;. Das ist
              Blendung. Sie ist blendend, nervig und tatsächlich gefährlich beim Fahren oder auf dem
              Wasser.
            </p>
            <p>
              Ein <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">polarisiertes Glas</a> enthält
              eine spezielle chemische Folie mit mikroskopisch kleinen vertikalen Streifen. Diese
              Streifen funktionieren wie Jalousien für Licht — sie lassen vertikales Licht durch
              (das normale) und blockieren horizontales Licht (die Blendung). Das Ergebnis? Blendung
              verschwindet. Farben wirken satter und natürlicher. Kontraste werden schärfer. Es ist
              wie ein Upgrade von Standard auf 4K für Ihre Augen.
            </p>
            <p>
              Allerdings sind nicht alle polarisierten Gläser gleich. Billige verwenden eine dünne
              Polarisationsfolie, die auf die Glasoberfläche geklebt wird — sie schält sich ab,
              bildet Blasen und verschlechtert sich in Monaten. Unsere TAC-Gläser betten die
              Polarisationsfolie zwischen 6 Schutzschichten ein und bilden eine einzige verschmolzene
              Einheit, die sich nicht ablöst oder verschlechtert. Das ist der Unterschied zwischen
              2-€-Tankstellen-Polarisation und echter Polarisation. Ihre Kunden merken den Unterschied.
            </p>
          </div>
        </section>

        {/* Polarized vs Non-Polarized */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarisiert vs. Nicht-Polarisiert: Der echte Unterschied</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Merkmal</th>
                  <th className="p-4 text-left font-semibold">Normales getöntes Glas</th>
                  <th className="p-4 text-left font-semibold">Polarisiertes Glas</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Blendungsreduzierung</td><td className="p-4 text-gray-600">Dunkelt alles gleichmäßig ab — Blendung inklusive</td><td className="p-4 text-gray-600">Eliminiert gezielt reflektierte horizontale Blendung</td></tr>
                <tr><td className="p-4 font-medium">Sehschärfe</td><td className="p-4 text-gray-600">Dunkler, aber nicht klarer</td><td className="p-4 text-gray-600">Schärferer Kontrast, verbesserte Farbwahrnehmung</td></tr>
                <tr><td className="p-4 font-medium">Fahrsicherheit</td><td className="p-4 text-gray-600">Reduziert Helligkeit, Blendung bleibt</td><td className="p-4 text-gray-600">Eliminiert Straßen-/Fahrzeugblendung — deutlich sicherer</td></tr>
                <tr><td className="p-4 font-medium">Angeln / Wasser</td><td className="p-4 text-gray-600">Unter die Oberfläche sehen unmöglich</td><td className="p-4 text-gray-600">Klar durch die Wasseroberfläche sehen</td></tr>
                <tr><td className="p-4 font-medium">Augenermüdung</td><td className="p-4 text-gray-600">Weiterhin Blinzeln bei Blendung</td><td className="p-4 text-gray-600">Augen entspannen sich — kein Blinzeln nötig</td></tr>
                <tr><td className="p-4 font-medium">Wahrgenommener Wert</td><td className="p-4 text-gray-600">Basis — Kunden erwarten mindestens UV</td><td className="p-4 text-gray-600">Premium — Kunden zahlen 10-30 $ mehr im Einzelhandel</td></tr>
                <tr><td className="p-4 font-medium">Großhandel-Aufpreis</td><td className="p-4 text-gray-600">Basispreis</td><td className="p-4 text-gray-600">+$1.50 - $3.00 pro Paar</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Die Rechnung ist einfach: Polarisiert kostet Sie $1.50-3.00 mehr pro Paar, aber Sie können im Einzelhandel $10-30 mehr verlangen. Das ist der beste Margenverstärker in der Brillenbranche.
          </p>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop" alt="Polarisierte Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Polarisierte Kollektion nach Stil</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>7-Schicht TAC-Polarisationsglas</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% Blendungsreduzierung</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>UV400-Schutz</li>
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

        {/* Lens Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarisierte Glastypen: TAC vs. CR-39 vs. Mineralglas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-200">
              <h3 className="text-xl font-semibold mb-2">🏆 TAC Polarisiert</h3>
              <p className="text-xs text-primary-600 font-semibold mb-4">AM BELIEBTESTEN — 80% der Bestellungen</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TAC (Triacetat-Zellulose) ist der goldene Mittelweg. Sieben Schichten verschmolzen:
                Hartbeschichtung außen, TAC-Strukturschichten, Polarisationsfolie im Zentrum,
                UV-Beschichtung darunter. Leichter als Glas, widerstandsfähiger als CR-39 und
                etwa halb so teuer wie Glas-Polarisation. Das empfehlen wir 90% unserer
                Großhandelskäufer. Es ist aus gutem Grund der Industriestandard.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Gewicht: Leicht (1,1mm Standard)</li>
                <li>• Stoßfestigkeit: Gut — splittert nicht</li>
                <li>• Optik: Sehr gut</li>
                <li>• Kosten: $$ — bestes Preis-Leistungs-Verhältnis</li>
                <li>• Am besten für: die meisten Anwendungen</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🔬 CR-39 Polarisiert</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">PREMIUM-OPTION</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">CR-39</a> ist
                ein optisches Harz, das ursprünglich für militärische Optik entwickelt wurde.
                Es bietet die schärfste visuelle Klarheit aller Kunststoff-Glasmaterialien —
                Optiker lieben es. Kratzfest, leicht und optisch CR-39 überlegen. Es kostet
                aber mehr und ist etwas weniger stoßfest. Wählen Sie CR-39, wenn optische
                Qualität oberste Priorität hat — Luxusmarken, Fahr-Spezialisten, Optiker.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Gewicht: Leicht</li>
                <li>• Stoßfestigkeit: Mittel</li>
                <li>• Optik: Ausgezeichnet — optische Qualität</li>
                <li>• Kosten: $$$ — Premium</li>
                <li>• Am besten für: Luxus, Optikgeschäfte</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">💎 Mineralglas Polarisiert</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">ULTIMATIVE KLARHEIT</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nichts übertrifft Mineralglas in optischer Reinheit. Null Verzerrung, überlegene
                Kratzfestigkeit, und die Polarisation ist dauerhaft eingebettet — sie verschlechtert
                sich nicht über Jahre. Aber Glas ist schwerer, teurer und splittert bei Aufprall
                (nicht ideal für Sport). Mineralglas-Polarisation ist für den puristischen Kunden,
                der die absolut beste Optik will und das Mehrgewicht akzeptiert. Ideal für
                Angelenthusiasten, Bootskapitäne und Luxus-Positionierung.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Gewicht: Schwer</li>
                <li>• Stoßfestigkeit: Niedrig — kann splittern</li>
                <li>• Optik: Perfekt — null Verzerrung</li>
                <li>• Kosten: $$$$ — am höchsten</li>
                <li>• Am besten für: Luxus, Angeln, Bootfahren</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7-Layer Construction */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Im Inneren eines TAC-Polarisationsglases: 7 Schichten</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Wenn Leute fragen: &quot;Warum kosten Ihre polarisierten Gläser mehr als die auf
                Alibaba für $0.50?&quot; — deshalb. Jedes Glas ist ein 7-Schicht-Sandwich,
                präzisionsverschmolzen unter Hitze und Druck. Die billigen? Die kleben eine
                Polarisationsfolie auf eine Seite eines normalen Glases. Sie schält sich ab.
                Sie bildet Blasen. Sie beschlägt. Unsere nicht. Nie. Wir stellen diese seit
                über 8 Jahren her und unsere Fehlerquote liegt unter 0,3%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>UV400 — laborgeprüft, nicht nur etikettiert</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>99% horizontale Blendung eliminiert</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Stoßfest — splittert nicht</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Kratzfeste Hartbeschichtung</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-4">Die 7 Schichten:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">1</span><span>Hartbeschichtung (Kratzschutz)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">2</span><span>TAC-Strukturschicht</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">3</span><span>TAC-Verbindungsschicht</span></div>
                <div className="flex justify-between p-2 bg-primary-100 rounded font-semibold"><span>4</span><span>Polarisationsfolie (die Magie)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">5</span><span>TAC-Verbindungsschicht</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">6</span><span>TAC-Strukturschicht</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">7</span><span>UV400-Schutzbeschichtung</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wo Polarisation den größten Unterschied macht</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AppCard icon="🚗" title="Autofahren" desc="Straßenblendung weg. Armaturenbrett-Reflexion weg. Sicherer fahren, Punkt." />
            <AppCard icon="🎣" title="Angeln" desc="Unter die Wasseroberfläche sehen. Fische erkennen. Strukturen lesen. Gamechanger." />
            <AppCard icon="⛵" title="Bootfahren" desc="Offenes Wasser blendet brutal. Polarisiert macht es erträglich." />
            <AppCard icon="⛷️" title="Wintersport" desc="Schnee reflektiert 80% der UV-Strahlung. Polarisiert + dunkle Tönung = Schneeblindheit vorbeugen." />
            <AppCard icon="🏖️" title="Strand" desc="Sand und Wasser verdoppeln die Blendung. Polarisiert macht Strandtage wirklich entspannend." />
            <AppCard icon="🏌️" title="Golf" desc="Das Grün lesen ohne zu blinzeln. Den Ball vor dem hellen Himmel verfolgen." />
            <AppCard icon="🚴" title="Radfahren" desc="Nasse Straßenblendung bei Morgenfahrten. Polarisierte Gläser schneiden glatt durch." />
            <AppCard icon="🏃" title="Laufen" desc="Asphaltblendung bei flachem Sonnenstand. Polarisiert hält die Augen über Kilometer frisch." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Verwandte Kollektionen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/sport" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Sport-Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Alle unsere Sportfassungen mit polarisierten Optionen</p>
            </Link>
            <Link href="/de/produkte/katzenaugen" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Katzenaugen-Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Modefassungen mit TAC-Polarisations-Upgrade</p>
            </Link>
            <Link href="/de/produkte/rund" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Runde Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Vintage-Runde mit polarisierten Glasoptionen</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Fragen zur Polarisation — beantwortet</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Wie erkenne ich, ob Gläser wirklich polarisiert sind?"
              answer="Einfacher Test: Halten Sie die Sonnenbrille vor einen LCD-Bildschirm (Handy oder Computer) und drehen Sie sie um 90 Grad. Wenn sie wirklich polarisiert sind, wird der Bildschirm in bestimmten Winkeln dunkel oder verfärbt sich dramatisch. Das ist der Polarisationsfilter, der die Lichtwellen des Bildschirms blockiert. Wir legen jeder Bestellung eine Polarisations-Testkarte bei, damit Ihre Kunden es selbst überprüfen können. Das ist ein großartiges Verkaufstool — Leute lieben die Demo."
            />
            <FaqItem
              question="Lohnen sich polarisierte Gläser die Mehrkosten?"
              answer="Aus Margen-Perspektive? Absolut. Polarisation fügt etwa $1.50-3.00 zu Ihren Großhandelskosten pro Paar hinzu, aber Kunden zahlen im Einzelhandel $10-30 mehr für ‚polarisiert' auf dem Etikett. Es ist das beste Upselling im Sonnenbrillen-Geschäft. Von der Leistung her — wenn Ihre Kunden Auto fahren, angeln oder Zeit am Wasser verbringen, ist Polarisation kein Luxus. Es ist eine Sicherheitsfunktion. Blendung verursacht Unfälle."
            />
            <FaqItem
              question="Können polarisierte Gläser die Sicht auf Handy- oder GPS-Bildschirme beeinflussen?"
              answer="Manchmal ja — und es lohnt sich, das zu wissen. Polarisierte Gläser können manche LCD-Bildschirme in bestimmten Winkeln dunkel erscheinen lassen oder Regenbogenmuster zeigen. Die meisten modernen OLED-Handybildschirme kommen damit gut klar, aber ältere GPS-Geräte und einige Auto-Armaturenbrett-Displays können problematisch sein. Für Fahrbrillen speziell bieten wir Gläser mit einem leicht versetzten Polarisationswinkel an, der dieses Problem reduziert. Fragen Sie einfach nach unserer ‚fahrer-optimierten' polarisierten Option."
            />
            <FaqItem
              question="TAC, CR-39 oder Mineralglas — welches polarisierte Glas soll ich wählen?"
              answer="Für die meisten Großhandelskäufer: TAC. Es ist die beste Balance aus Qualität, Haltbarkeit und Kosten — und macht etwa 80% unserer polarisierten Bestellungen aus. Wählen Sie CR-39, wenn Sie an Optiker oder Luxusmärkte verkaufen, wo optische Klarheit die Nr. 1-Priorität ist. Wählen Sie Mineralglas, wenn Sie ernsthafte Angel-/Boots-Enthusiasten ansprechen, die die absolut beste Optik wollen und schwerere Fassungen akzeptieren. Im Zweifel: mit TAC anfangen."
            />
            <FaqItem
              question="Welche Farben polarisierter Gläser bieten Sie an?"
              answer="Zwölf Optionen: Grau (neutral, natürliche Farben — am besten zum Fahren), Braun (verstärkter Kontrast — ideal für den Alltag), Bernstein (maximaler Kontrast — Favorit beim Angeln), Grün (klassischer G-15-Look), Blau-Spiegel, Rot-Spiegel, Gold-Spiegel, Silber-Spiegel, Gelb (bei schwachem Licht), Rosé (Golf/Tennis) und photochrom (passt sich automatisch ans Licht an). Grau und Braun machen etwa 60% aller Bestellungen aus, aber Spiegelungen wachsen schnell."
            />
            <FaqItem
              question="Wie hoch ist die MOQ und kann ich polarisiert mit nicht-polarisiert mischen?"
              answer="100 Stück pro Stil und Farbe. Und ja — Sie können polarisierte und nicht-polarisierte Versionen derselben Fassung in einer Bestellung mischen. Viele unserer Händler lagern beides: nicht-polarisiert zu $15-20 Einzelhandel als Einstieg und polarisiert zu $25-35 als Premium-Upsell. Gleiche Fassung, anderes Glas, höherer durchschnittlicher Bestellwert. Kluge Händler bieten die Vergleichs-Demo direkt an der Theke an."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Das einfachste Upselling in der Brillenbranche</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Polarisiert kostet Sie etwas mehr. Es verkauft sich für deutlich mehr. Und Kunden
            lieben den Unterschied wirklich. Holen Sie sich Muster, machen Sie den LCD-Test-Demo,
            und beobachten Sie, wie sie sich von selbst verkaufen. Kostenlose Muster verfügbar —
            Sie übernehmen den Versand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Polarisierten Katalog anfordern</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Polarisierte Sonnenbrillen", "item": "https://eyeviewglasses.com/de/produkte/polarisiert" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wie erkenne ich, ob Gläser wirklich polarisiert sind?",
            "acceptedAnswer": { "@type": "Answer", "text": "Halten Sie die Sonnenbrille vor einen LCD-Bildschirm und drehen Sie sie um 90 Grad. Wirklich polarisierte Gläser lassen den Bildschirm in bestimmten Winkeln dunkel werden oder verfärben ihn. Wir legen jeder Bestellung eine Polarisations-Testkarte bei." }
          },
          {
            "@type": "Question",
            "name": "Lohnen sich polarisierte Gläser die Mehrkosten?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolut. Polarisation fügt $1.50-3.00 Großhandelskosten hinzu, ermöglicht aber $10-30 mehr im Einzelhandel. Es ist das beste Upselling im Sonnenbrillen-Geschäft." }
          },
          {
            "@type": "Question",
            "name": "Können polarisierte Gläser die Sicht auf Handy- oder GPS-Bildschirme beeinflussen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Manche LCD-Bildschirme können in bestimmten Winkeln mit polarisierten Gläsern dunkel erscheinen. Die meisten modernen OLED-Handys kommen damit gut klar. Wir bieten fahrer-optimierte polarisierte Gläser mit versetzter Polarisation an." }
          },
          {
            "@type": "Question",
            "name": "TAC, CR-39 oder Mineralglas — welches polarisierte Glas soll ich wählen?",
            "acceptedAnswer": { "@type": "Answer", "text": "TAC für die meisten Käufer (bestes Preis-Leistungs-Verhältnis, 80% der Bestellungen). CR-39 für Luxus-/Optikmärkte. Mineralglas für ernsthafte Angel-/Boots-Enthusiasten, die die absolut beste Optik wollen." }
          },
          {
            "@type": "Question",
            "name": "Welche Farben polarisierter Gläser bieten Sie an?",
            "acceptedAnswer": { "@type": "Answer", "text": "Zwölf Optionen: Grau, Braun, Bernstein, Grün G-15, Blau-/Rot-/Gold-/Silber-Spiegel, Gelb, Rosé und photochrom. Grau und Braun machen etwa 60% der Bestellungen aus." }
          },
          {
            "@type": "Question",
            "name": "Wie hoch ist die MOQ und kann ich polarisiert mit nicht-polarisiert mischen?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 Stück pro Stil und Farbe. Ja, Sie können polarisierte und nicht-polarisierte Versionen derselben Fassung mischen. Viele Händler lagern beides als Einstiegs- und Premium-Stufe." }
          }
        ]
      })}} />
    </main>
  )
}

function AppCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
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
