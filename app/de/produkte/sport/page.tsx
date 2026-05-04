import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sport-Sonnenbrillen Großhandel | Sportbrillen Hersteller - EyeView',
  description: 'Hersteller von Sport-Sonnenbrillen im Großhandel. Wraparound-Sportbrillen mit TR90-Fassungen, stoßfesten Gläsern und rutschfestem Design. OEM/ODM. MOQ 100 Stk.',
  keywords: 'Sport Sonnenbrillen Großhandel, Sportbrillen Hersteller, Wraparound Brillen, TR90 Sportbrillen, Sonnenbrillen Großhandel',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/sport',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sport',
      'de': 'https://eyeviewsunglasses.com/de/produkte/sport',
    },
  },
}

const sportCategories = [
  {
    name: 'Radsport-Sonnenbrillen',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 Stk.',
    description: 'Sie fahren 40 km/h bergab. Ein Insekt trifft Ihr Auge. Aus und vorbei. Deshalb braucht jeder ernsthafte Radfahrer eine vernünftige Brille — keine Modebrillen von der Tankstelle. Unsere Radsport-Sonnenbrillen umschließen das Gesicht und blocken Wind, Staub und Insekten aus jedem Winkel. Das Wechselglas-System ermöglicht den Tausch zwischen klaren Gläsern für Morgenfahrten, gelben für bewölkte Tage und dunklen Tönungen für die Mittagshitze. Und die Anti-Rutsch-Gummipads? Die greifen tatsächlich fester, wenn Sie schwitzen. Kein Brillen-Hochschieben mehr mitten im Anstieg.',
    features: ['Aerodynamisches Wraparound-Design', 'Wechselbares 3-Gläser-System', 'Schweiß-aktivierte Gummipads', 'Belüftete Anti-Beschlag-Fassung'],
  },
  {
    name: 'Lauf-Sonnenbrillen',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$9.50 - $14.00',
    moq: '100 Stk.',
    description: 'Die Sache mit Lauf-Sonnenbrillen ist — wenn Sie sie im Gesicht spüren, sind sie falsch. Unsere Lauffassungen wiegen unter 25 Gramm. Das ist leichter als eine AA-Batterie. Marathonläufer tragen sie über 4 Stunden, ohne es zu bemerken. Die flexible TR90-Fassung absorbiert das ständige Auf und Ab beim Laufen, und die breiten Gläser geben Ihnen volles peripheres Sehen, damit Sie das Schlagloch oder den freilaufenden Hund rechtzeitig sehen. Laufclub-Besitzer bestellen regelmäßig über 500 Paar für Team-Ausstattungen.',
    features: ['Unter 25g — leichter als eine Batterie', 'Hydrophile Schweiß-Grip-Pads', 'Volles peripheres Sehen', 'Stoßabsorbierende flexible Fassung'],
  },
  {
    name: 'Angel-Sonnenbrillen',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$11.00 - $16.00',
    moq: '100 Stk.',
    description: 'Stellen Sie sich vor — Sie sind um 6 Uhr morgens auf dem See, die Sonne reflektiert auf dem Wasser und Sie können Ihre Schnur nicht sehen. Jeder Angler kennt diese blendende Spiegelung. Unsere Angel-Sonnenbrillen schneiden direkt durch. Die polarisierten Gläser entfernen die Oberflächenreflexion, sodass Sie tatsächlich ins Wasser sehen können — Fische erkennen, Strukturen lesen, den Köder beobachten. Bernstein- und Kupfertönungen verstärken den Kontrast in Süß- und Salzwasser. Ein Angelführer in Florida sagte uns, diese Brillen „haben sich bei der ersten Charter bezahlt gemacht." Wir bieten auch schwimmende Fassungsoptionen an, denn seien wir ehrlich — Sonnenbrillen und Boote vertragen sich nicht immer gut.',
    features: ['Polarisierte Blendschutz-Gläser', 'Bernstein/Kupfer Kontrast-Tönungen', 'Schwimmende Fassungsoption verfügbar', 'Salzwasserresistente Scharniere'],
  },
  {
    name: 'Golf-Sonnenbrillen',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$10.50 - $15.50',
    moq: '100 Stk.',
    description: 'Golf ist ein Spiel der Zentimeter, und Sie können keine Zentimeter spielen, wenn Sie den Ball nicht sehen. Unsere Golf-Sonnenbrillen verwenden Rosé- und Bernstein-Glastönungen, die einen weißen Ball vor grünem Fairway hervorstechen lassen. Den Ballflug vor hellem Himmel verfolgen? Leicht. Den Break auf einem sonnenbeschienenen Grün lesen? Viel klarer. Die Fassung ist so leicht, dass Sie sie beim Schwung vergessen — genau das ist der Punkt. Wir beliefern mehrere Golf-Resort-Pro-Shops in Südostasien, und das Feedback ist immer dasselbe: „Spieler wollen sie tatsächlich kaufen, nachdem sie sie probiert haben."',
    features: ['Rosé/Bernstein Ball-Tracking-Gläser', 'Federleichter schwungfreundlicher Sitz', 'Breiter Bügel-Sonnenschutz', 'Im Pro-Shop getestet und bewährt'],
  },
  {
    name: 'Ski- & Snowboard-Sonnenbrillen',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$12.00 - $17.00',
    moq: '100 Stk.',
    description: 'Wussten Sie, dass UV-Werte um 10% pro 1.000 Höhenmeter steigen? Oben an der Skipiste werden Ihre Augen regelrecht bombardiert. Schneeblindheit ist real — und schmerzhaft. Unsere Ski-Sonnenbrillen verwenden Kategorie 3-4 dunkle Gläser, die 92-97% des sichtbaren Lichts blockieren. Das enganliegende Wraparound-Design hält Wind und Schnee von Ihren Augen fern, während Anti-Beschlag-Belüftungskanäle das nervige Beschlagen verhindern, wenn Sie auf der Buckelpiste hart atmen. Helmkompatible Bügelspitzen bedeuten keine Druckstellen unter dem Helm. Ein Skiverleih in Hokkaido bestellt jede Saison 2.000 Paar bei uns.',
    features: ['Kat. 3-4 Schneeblindheitsschutz', 'Anti-Beschlag-Belüftungskanäle', 'Windblockierender enger Sitz', 'Helmkompatibles Design'],
  },
  {
    name: 'Baseball-Sonnenbrillen',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 Stk.',
    description: 'Ein Außenfeldspieler, der in die Sonne starrt bei einem Fly Ball — dieser Sekundenbruchteil der Blindheit kann das Spiel kosten. Unsere Baseball-Sonnenbrillen sind genau für diesen Moment gebaut. Die bernsteinfarbenen polarisierten Gläser schärfen einen weißen Ball vor blauem Himmel wie nichts anderes. Und das sind keine dünnen Fassungen — sie erfüllen ASTM F803 Stoßfestigkeitsstandards, können also einen Line Drive ins Gesicht verkraften. Das sichere Wraparound bleibt bei Hechtfängen und Kopfvoran-Slides an Ort und Stelle. Wir haben Little-League-Teams, College-Programme und Freizeitligen in 12 Ländern beliefert.',
    features: ['ASTM F803 Aufprallschutz', 'Bernstein-polarisiertes Ball-Tracking', 'Sicherer rutschfester Wraparound', 'Splitterfestes Polycarbonat-Glas'],
  },
]

export default function SportPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Sport-Sonnenbrillen</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sport-Sonnenbrillen Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gebaut für Athleten, die ihre Sonnenbrillen wirklich brauchen — nicht nur gut aussehen
            wollen. Polarisierte TAC-Gläser, federleichte TR90-Fassungen und Wraparound-Designs,
            die bei Höchstleistung an Ort und Stelle bleiben. Von Radsportclubs bis zu Angel-Chartern
            liefern wir die Brillen, die genauso hart arbeiten wie die Menschen, die sie tragen.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
            alt="Sport-Sonnenbrillen Kollektion - Polarisierte Sportbrillen für Radfahren Laufen Angeln"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why Sport Sunglasses Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Warum billige Sonnenbrillen es für Sport nicht bringen</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Seien wir direkt: Diese 3-€-Sonnenbrillen von der Kasse fallen Ihnen vom Gesicht,
              sobald Sie anfangen zu schwitzen. Sie beschlagen beim harten Atmen. Sie hüpfen bei
              jedem Schritt. Und das Schlimmste — manche blocken nicht einmal UV richtig, was
              bedeutet, sie sind tatsächlich <em>gefährlicher</em> als gar keine Brille. (Dunkle
              Gläser ohne UV-Schutz weiten die Pupillen und lassen mehr schädliche Strahlung ein.
              Nicht gut.)
            </p>
            <p>
              Echte Sport-Sonnenbrillen lösen Probleme, die Athleten tatsächlich haben. Blendung
              von nassen Straßen bei der Morgenfahrt? Polarisierte TAC-Gläser eliminieren sie.
              Fassungen, die bei Aufprall splittern? TR90-Nylon biegt sich, statt zu brechen —
              Sie können sie buchstäblich 90 Grad verdrehen und sie springen zurück. Brillen,
              die eine verschwitzte Nase hinunterrutschen? Hydrophile Gummipads greifen
              <em> fester</em>, wenn sie nass sind. Das sind keine Spielereien. Es ist der
              Unterschied zwischen Ausrüstung, die Leistung unterstützt, und Ausrüstung, die
              im Weg steht. Die <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Weltgesundheitsorganisation</a> empfiehlt
              UV-schützende Brillen für jeden, der längere Zeit im Freien verbringt — und Athleten
              stehen ganz oben auf dieser Liste.
            </p>
            <p>
              Wir fertigen Sport-Sonnenbrillen seit über 8 Jahren und liefern an Outdoor-Händler,
              Sportteams, Fitnessstudio-Ketten und Werbeartikel-Unternehmen in über 50 Ländern.
              Ob Sie 100 Paar für ein Radsportteam oder 10.000 für einen Retail-Launch brauchen —
              wir haben Sie abgedeckt, und wir bringen auch Ihr Logo drauf.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Sport-Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Sport-Sonnenbrillen nach Aktivität</h2>
          <div className="space-y-12">
            {sportCategories.map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} Großhandel - EyeView`}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-semibold text-primary-600">{product.price}</span>
                    <span className="text-sm text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/de/kontakt" className="btn-primary inline-block">
                    Angebot anfordern
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Technology */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Die Technik hinter der Robustheit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🔬 TR90-Fassungen — Biegen, ohne zu brechen</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TR90 ist ein thermoplastisches Nylon, das ursprünglich in der Schweiz entwickelt
                wurde. Es gehört zur gleichen Materialfamilie wie Hochleistungs-Sportgeräte. Was
                es besonders macht? Es ist 35% leichter als normale Kunststofffassungen — die
                meisten unserer Sportfassungen wiegen zwischen 22-28 Gramm. Sie können eine
                TR90-Fassung 90 Grad biegen und sie springt sofort zurück. Versuchen Sie das mal
                mit einem Billigpaar vom Markt. Zudem hypoallergen — also keine juckenden roten
                Stellen nach einer langen Fahrt. Funktioniert bei eisigen Skibedingungen (-40°C)
                und verformt sich nicht im heißen Auto (bis 120°C).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>35% leichter als Standardkunststoff</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Übersteht 90°-Biegung — kein Bruch</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hält -40°C bis 120°C aus</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hypoallergen & BPA-frei</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🛡️ TAC-Polarisationsgläser — 7 Schichten &quot;Wow&quot;</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unsere TAC-Gläser sind nicht einfach ein getöntes Stück Plastik. Sie sind ein
                7-Schicht-Sandwich: Hartbeschichtung außen für Kratzfestigkeit, TAC-Materialschichten
                für strukturelle Stärke, eine Polarisationsfolie im Zentrum, die 99% der Blendung
                eliminiert, und UV-Beschichtung darunter, die alles bis 400nm blockiert. Das Ergebnis?
                Sie setzen sie auf und die Welt wird einfach... klar. Straßenblendung verschwindet.
                Wasserreflexion löst sich auf. Farben wirken satter. Es ist die Art Unterschied, die
                Leute sagen lässt: &quot;Ich kann nie wieder normale Gläser tragen.&quot;
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>7-Schicht-Polarisationskonstruktion</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% horizontale Blendung eliminiert</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Vollständiger UV400-Schutz</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Stoßfeste Polycarbonat-Option</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Was diese Brillen auszeichnet</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🏃" title="Unfassbar leicht" description="Unter 28g. Sie vergessen, dass sie auf Ihrer Nase sitzen — bis jemand fragt, wo Sie die herhaben." />
            <FeatureCard icon="🛡️" title="Stoßfest" description="Polycarbonat-Gläser nach ANSI Z87.1. Ein Steinschlag ruiniert nicht Ihre Fahrt." />
            <FeatureCard icon="💧" title="Nie beschlagen" description="Belüftungskanäle halten die Luft in Bewegung. Sprinten Sie den Berg hoch — Gläser bleiben klar." />
            <FeatureCard icon="☀️" title="Echtes UV400" description="Laborgeprüft, zertifiziert. Blockiert 100% UVA/UVB/UVC. Nicht nur ein Aufkleber." />
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technische Daten auf einen Blick</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Spezifikation</th>
                  <th className="p-4 text-left font-semibold">Standard-Linie</th>
                  <th className="p-4 text-left font-semibold">Premium-Linie</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Fassungsmaterial</td><td className="p-4 text-gray-600">PC (Polycarbonat)</td><td className="p-4 text-gray-600">TR90 Nylon</td></tr>
                <tr><td className="p-4 font-medium">Glasmaterial</td><td className="p-4 text-gray-600">AC (Acryl)</td><td className="p-4 text-gray-600">TAC Polarisiert</td></tr>
                <tr><td className="p-4 font-medium">Glasbreite</td><td className="p-4 text-gray-600">65-68mm</td><td className="p-4 text-gray-600">65-72mm</td></tr>
                <tr><td className="p-4 font-medium">Stegbreite</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">14-18mm</td></tr>
                <tr><td className="p-4 font-medium">Bügellänge</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">130-140mm</td></tr>
                <tr><td className="p-4 font-medium">Gewicht</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">22-28g</td></tr>
                <tr><td className="p-4 font-medium">UV-Schutz</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Polarisation</td><td className="p-4 text-gray-600">Optional</td><td className="p-4 text-gray-600">Standard (TAC 1,1mm)</td></tr>
                <tr><td className="p-4 font-medium">Glasfarben</td><td className="p-4 text-gray-600">5 Optionen</td><td className="p-4 text-gray-600">12+ Optionen</td></tr>
                <tr><td className="p-4 font-medium">Nasenpads</td><td className="p-4 text-gray-600">Festes Gummi</td><td className="p-4 text-gray-600">Verstellbares hydrophiles Gummi</td></tr>
                <tr><td className="p-4 font-medium">Scharnier</td><td className="p-4 text-gray-600">Standard-Zylinder</td><td className="p-4 text-gray-600">Federscharnier</td></tr>
                <tr><td className="p-4 font-medium">Zertifizierungen</td><td className="p-4 text-gray-600">CE, FDA</td><td className="p-4 text-gray-600">CE, FDA, ANSI Z87.1</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Das könnte Sie auch interessieren</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/polarisiert" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarisierte Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Alle unsere polarisierten Stile an einem Ort</p>
            </Link>
            <Link href="/de/produkte/kinder" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Kinder-Sport-Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Sichere, robuste Brillen für junge Athleten</p>
            </Link>
            <Link href="/de/produkte" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Blaulichtbrillen</h3>
              <p className="text-sm text-gray-600">Für wenn das Training nach drinnen verlegt wird</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Fragen, die wir ständig bekommen</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Wie hoch ist die Mindestbestellmenge? Kann ich klein anfangen?"
              answer="Ja — 100 Stück pro Stil und Farbe ist unsere Standard-MOQ. Wenn Sie Ihr eigenes Logo und individuelle Farben wollen, erhöht sich das auf 300 Stück. Aber ehrlich gesagt beginnen die meisten Erstkäufer mit einer gemischten Musterbestellung, um den Markt zu testen. Sagen Sie uns einfach, was Sie suchen, und wir finden einen Weg, es möglich zu machen."
            />
            <FaqItem
              question="TR90 vs. Polycarbonat — was soll ich nehmen?"
              answer="Kurze Antwort: TR90, wenn Sie es sich leisten können. Es ist 35% leichter, viel flexibler (Sie können es buchstäblich flach biegen und es springt zurück) und fühlt sich premium an. Polycarbonat ist völlig in Ordnung für Budget-Linien — es ist trotzdem stoßfest und erfüllt seinen Zweck. Aber wenn Ihre Kunden ernsthafte Athleten sind oder Sie sich als Premium-Marke positionieren, nehmen Sie TR90. Der Preisunterschied beträgt meist nur $1-2 pro Paar."
            />
            <FaqItem
              question="Sind alle Ihre Sport-Sonnenbrillen polarisiert?"
              answer="Polarisation ist bei jedem Modell verfügbar, aber nicht immer standardmäßig in der Standard-Linie enthalten — es ist optional. Bei unserer Premium-Linie sind TAC-polarisierte Gläser Standard. Wir bieten über 12 Glasfarben an, darunter Grau, Braun, Bernstein, Gelb (toll bei wenig Licht), Blau-Spiegel, Rot-Spiegel und Klar. Wir machen auch photochrome Gläser, die sich automatisch ans Sonnenlicht anpassen. Die sind bei Radfahrern beliebt, die von der Dämmerung bis zum Mittag fahren."
            />
            <FaqItem
              question="Können Sie unser Logo darauf bringen?"
              answer="Absolut. Wir machen Logodruck auf Bügeln (Tampondruck oder Lasergravur), Glasgravur, individuelle Fassungsfarben mit Pantone-Abgleich, individuelle Verpackung — das volle Programm. Ein Kunde schickte uns eine Serviettenskizze eines Fassungsdesigns und wir haben daraus in zwei Wochen einen 3D-Prototyp gemacht. Wenn Sie es sich vorstellen können, können wir es wahrscheinlich herstellen."
            />
            <FaqItem
              question="Welche Zertifizierungen kommen mit?"
              answer="Jedes Paar wird mit CE- und FDA-Konformität geliefert. Unsere Premium-Linie erfüllt auch ANSI Z87.1 — das ist der industrielle Stoßfestigkeitsstandard, der bedeutet, dass diese Gläser einen Treffer von einer Stahlkugel bei hoher Geschwindigkeit aushalten, ohne zu splittern. Wir liefern UV400-Laborprüfberichte von unabhängigen Labors. Brauchen Sie AS/NZS 1067 für den australischen Markt? Können wir auch."
            />
            <FaqItem
              question="Wie schnell können Sie liefern?"
              answer="Lagerartikel ohne Individualisierung? 3-5 Werktage. Individualbestellungen mit Ihrem Logo und Farben? 15-25 Tage Produktion, dann 5-7 Tage Luftfracht in die meisten Länder. Seefracht ist günstiger, dauert aber 20-35 Tage. Wir versenden per DHL, FedEx, UPS — Ihre Wahl. Eilbestellungen? Sprechen Sie uns an. Wir haben schon 10-Tage-Durchlaufzeiten geschafft, wenn ein Kunde eine Deadline hatte."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Starten Sie Ihre Sport-Linie</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Sportteams, Outdoor-Shops, Fitnessmarken, Werbeartikel-Firmen — wir haben mit
            allen gearbeitet. Sagen Sie uns, was Sie brauchen, und wir schicken Ihnen Muster,
            damit Sie die Qualität selbst sehen können. Kein Druck, keine Verpflichtung bei
            Mustern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Team-Preise anfordern</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Sport-Sonnenbrillen", "item": "https://eyeviewglasses.com/de/produkte/sport" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wie hoch ist die Mindestbestellmenge? Kann ich klein anfangen?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 Stück pro Stil und Farbe ist unsere Standard-MOQ. Individualbestellungen mit Logo ab 300 Stück. Die meisten Erstkäufer beginnen mit einer gemischten Musterbestellung, um den Markt zu testen." }
          },
          {
            "@type": "Question",
            "name": "TR90 vs. Polycarbonat — was soll ich wählen?",
            "acceptedAnswer": { "@type": "Answer", "text": "TR90, wenn Sie können — es ist 35% leichter, viel flexibler und fühlt sich premium an. Polycarbonat ist für Budget-Linien in Ordnung. Der Preisunterschied beträgt meist nur $1-2 pro Paar." }
          },
          {
            "@type": "Question",
            "name": "Sind alle Sport-Sonnenbrillen polarisiert?",
            "acceptedAnswer": { "@type": "Answer", "text": "Polarisation ist bei jedem Modell verfügbar. Optional bei der Standard-Linie, standardmäßig bei der Premium-Linie. Wir bieten über 12 Glasfarben an, einschließlich photochromer Optionen." }
          },
          {
            "@type": "Question",
            "name": "Können Sie unser Logo anbringen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolut — Logodruck auf Bügeln, Glasgravur, individuelle Fassungsfarben mit Pantone-Abgleich und individuelle Verpackung. Wir können auch komplett neue Fassungsdesigns nach Ihrem Konzept erstellen." }
          },
          {
            "@type": "Question",
            "name": "Welche Zertifizierungen sind enthalten?",
            "acceptedAnswer": { "@type": "Answer", "text": "CE und FDA bei jedem Paar. Premium-Linie erfüllt auch ANSI Z87.1 für Stoßfestigkeit. UV400-Laborprüfberichte inklusive. AS/NZS 1067 auf Anfrage verfügbar." }
          },
          {
            "@type": "Question",
            "name": "Wie schnell können Sie liefern?",
            "acceptedAnswer": { "@type": "Answer", "text": "Lagerartikel in 3-5 Werktagen. Individualbestellungen 15-25 Tage Produktion plus 5-7 Tage Luftfracht. Eilbestellungen möglich — wir haben schon 10-Tage-Durchlaufzeiten geschafft." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
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
