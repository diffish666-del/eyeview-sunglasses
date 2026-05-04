import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Acetat-Sonnenbrillen Großhandel | Acetat-Brillen Hersteller - EyeView',
  description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
  keywords: 'Acetat Sonnenbrillen Großhandel, Acetat Brillen Hersteller, Mazzucchelli Acetat, handgefertigte Brillen, Premium Sonnenbrillen Großhandel',
  openGraph: {
    title: 'Acetat-Sonnenbrillen Großhandel | Acetat-Brillen Hersteller - EyeView',
    description: 'Hersteller von Acetat-Sonnenbrillen im Großhandel. Handgefertigte Fassungen, italienisches Mazzucchelli-Acetat, über 200 Farben und Muster. CNC-Schnitt, Handpolitur. OEM/ODM. MOQ 100 Stk.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/produkte/acetat',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/acetat',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/acetate',
      'de': 'https://eyeviewsunglasses.com/de/produkte/acetat',
    },
  },
}

const acetateFaqs = [
  {
    question: 'Was ist der Unterschied zwischen italienischem Mazzucchelli-Acetat und chinesischem Acetat?',
    answer: 'Die ehrliche Antwort ist, dass der Unterschied in den letzten zehn Jahren deutlich kleiner geworden ist, aber es gibt immer noch echte Unterschiede. Mazzucchelli (und andere italienische Hersteller wie Lapo) verwenden einen langsameren, kontrollierteren Extrusionsprozess, der Platten mit gleichmäßigerer Farbtiefe und Musterverteilung erzeugt — besonders sichtbar bei komplexen Mustern wie mehrschichtigem Schildpatt oder kristallklaren transparenten Farben. Italienisches Acetat lässt sich auch zu einem etwas höheren Glanz polieren. Chinesisches Acetat von Top-Herstellern wie Shenzhen Xin Rui oder Taizhou Huangyan hat sich dramatisch verbessert und ist wirklich gut — hervorragende Farbauswahl, gute Konsistenz und etwa 30–40 % günstiger. Für die meisten Verkaufspreise unter 80 $ ist hochwertiges chinesisches Acetat die kluge Wahl. Für Premium-Marken mit Verkaufspreisen über 100 $, bei denen der Kunde Ihre Fassung direkt neben Céline oder Tom Ford vergleichen könnte, gibt Ihnen italienisches Acetat die letzten 10 % Verfeinerung.',
  },
  {
    question: 'Wie lange dauert der Acetat-Produktionsprozess?',
    answer: 'Länger als man denkt — und genau das macht Acetat besonders. Vom CNC-Schnitt bis zur finalen Qualitätskontrolle dauert die tatsächliche Bearbeitungszeit eines einzelnen Paares 5–7 Tage. Die größten Zeitfresser sind das Trommelpolieren (3–5 Tage zum Glätten aller Bearbeitungsspuren) und das Handpolieren (20–30 Minuten pro Paar durch erfahrene Arbeiter). Die gesamte Produktionsvorlaufzeit für eine Bestellung beträgt typischerweise 20–28 Tage, da wir in jeder Phase chargenweise arbeiten. Eilaufträge können in 14–18 Tagen erledigt werden, aber wir berechnen einen Aufpreis von 15 %, da wir andere Produktionsläufe unterbrechen müssen. Musterpaare benötigen 5–7 Werktage.',
  },
  {
    question: 'Welche Farben und Muster können Sie in Acetat herstellen?',
    answer: 'Im Grunde unbegrenzt. Wir haben über 200 Acetat-Plattenfarben und -muster unserer Lieferanten auf Lager — Volltonfarben, Schildpatt (klassisches Braun, Blond, Dunkel), Kristall/Transparent (Klar, Grau, Champagner, Blau), Marmor, Holzmaserung, Horn-Effekt, Verlauf und mehrschichtige laminierte Muster. Für individuelle Farben geben Sie uns einen Pantone-Code und der Acetat-Lieferant produziert eine passende Platte. Die Entwicklung individueller Muster (wie eine einzigartige Schildpatt-Mischung oder ein Marken-Muster) ist ebenfalls möglich — die Mindestbestellmenge für Platten beträgt in der Regel 50–100 kg, was je nach Fassungsgröße etwa 500–1.000 Paaren entspricht. Für kleinere Bestellungen empfehlen wir dringend, aus den vorhandenen Lagerfarben zu wählen — es gibt so viele, dass Sie mit ziemlicher Sicherheit finden werden, was Sie brauchen.',
  },
  {
    question: 'Wie sollten Kunden Acetat-Sonnenbrillen pflegen?',
    answer: 'Acetat ist widerstandsfähiger als die meisten Leute denken, aber es gibt ein paar Dinge zu beachten. Erstens: Halten Sie sie von extremer Hitze fern — lassen Sie sie nicht im Sommer auf dem Armaturenbrett liegen. Acetat wird bei etwa 70–80 °C (158–176 °F) weich, sodass anhaltende Hitze die Fassung verformen kann. Zweitens: Vermeiden Sie Aceton und aggressive Lösungsmittel — Nagellackentferner beschädigt die Oberfläche. Drittens: Mit warmem Wasser und milder Seife reinigen, dann mit einem weichen Tuch trocknen. Keine alkoholhaltigen Linsenreiniger. Die gute Nachricht ist, dass Acetat-Fassungen von jedem Optiker mit sanfter Wärme angepasst werden können und kleinere Kratzer oft auspoliert werden können. Wir legen jeder Bestellung kostenlos Pflegekarten bei — das bewahrt Ihre Kunden vor den häufigsten Fehlern und reduziert Ihre Rücksendequote.',
  },
  {
    question: 'Wie hoch ist die Mindestbestellmenge für individuelle Acetat-Sonnenbrillen?',
    answer: 'Die Standard-Mindestbestellmenge beträgt 100 Stück pro Modell. Sie können innerhalb dieser 100 Farben mischen — also 30 Schwarz, 30 Schildpatt und 40 Kristallklar funktioniert einwandfrei. Wenn Sie ein komplett individuelles Fassungsdesign möchten (Ihre eigene Form, nicht einer unserer vorhandenen Formen), fällt eine einmalige Formgebühr von 800–1.500 $ an, je nach Komplexität, und die Mindestbestellmenge für individuelle Formen beträgt 300 Stück bei der ersten Bestellung. Danach sinken Nachbestellungen wieder auf 100 Stück. Für individuelle Acetat-Plattenfarben (Pantone-Abgleich) beträgt die Platten-Mindestbestellmenge beim Lieferanten typischerweise 50–100 kg. Wir führen eine große Bibliothek an Lagerfarben, um dieses Minimum für kleinere Marken zu umgehen.',
  },
  {
    question: 'Warum ist Acetat teurer als spritzgegossener Kunststoff?',
    answer: 'Weil fast jeder Schritt geschickte menschliche Hände erfordert. Spritzgegossene Fassungen (Nylon, TR90, PC) werden von einer Maschine in etwa 30 Sekunden hergestellt — heißen Kunststoff in eine Form spritzen, abkühlen, herausnehmen, fertig. Acetat-Fassungen beginnen als flache Platten, die per CNC in Rohformen geschnitten, dann 3–5 Tage trommelpoliert und anschließend einzeln 20–30 Minuten handpoliert werden. Der Arbeitsanteil ist dramatisch höher. Auch die Materialkosten sind höher — ein Kilogramm hochwertige Acetat-Platte kostet 3–5-mal mehr als Nylon-Granulat für den Spritzguss. Der Lohn dafür ist, dass Acetat-Fassungen auf eine Weise hochwertig aussehen und sich anfühlen, die spritzgegossener Kunststoff einfach nicht erreichen kann. Die Farben sind satter, die Oberfläche hat mehr Tiefe, und es gibt eine Wärme und ein Gewicht beim Acetat, das Kunden mit Qualität verbinden. Deshalb werden Acetat-Fassungen für 60–200 $+ verkauft, während spritzgegossene Fassungen typischerweise bei maximal 40–60 $ liegen.',
  },
]

const products = [
  {
    name: 'Klassische Schildpatt-Wayfarer',
    description: 'Die Schildpatt-Wayfarer ist die am häufigsten nachgefragte Acetat-Fassung der Brillenindustrie — und das aus gutem Grund. Das bernstein-braune Muster schmeichelt jedem Hautton, sieht auf Fotos wunderschön aus und vermittelt sofort einen Premium-Eindruck. Wir produzieren diese sowohl in italienischem Mazzucchelli-Acetat (für Premium-Linien) als auch in hochwertigem chinesischem Acetat (für die mittlere Preispositionierung). Jedes Paar wird von Hand auf einen tiefen Glanz poliert, der Licht auf eine Weise einfängt, die spritzgegossener Kunststoff einfach nicht nachahmen kann. Wenn Sie eine Brillenmarke aufbauen und eine sichere erste Artikelnummer brauchen, ist dies wahrscheinlich die richtige.',
    price: '$6.00 - $11.00',
    moq: '100 Stk.',
    features: ['Schildpatt-Muster', 'Handpoliert', 'UV400-Gläser', '5-Zylinder-Scharnier'],
  },
  {
    name: 'Kristallklare Runde',
    description: 'Transparentes Acetat ist seit drei Jahren im Trend und zeigt keine Anzeichen einer Verlangsamung. Unsere kristallklare runde Fassung ist optisch klar — kein Gelbstich, keine Trübung — mit dem zufriedenstellenden Acetat-Gewicht, das dem Kunden sagt, dass er etwas Echtes in der Hand hält. Die runde Form ist bei der Indie-/Vintage-Szene sehr beliebt und schneidet besonders gut auf asiatischen Märkten ab, wo rundere Formen zu mehr Gesichtstypen passen. Wir können komplett klar oder mit einem dezenten Kristallgrau, Kristallchampagner oder Kristallblau liefern, wenn Sie einen Hauch von Farbe möchten.',
    price: '$7.00 - $11.00',
    moq: '100 Stk.',
    features: ['Kristallklar', 'Runde Form', 'Optische Klarheit', 'Mehrere Tönungsoptionen'],
  },
  {
    name: 'Marmor-Effekt Cat-Eye',
    description: 'Das Marmor-Muster entsteht durch das Schichten von zwei oder drei verschiedenfarbigen Acetat-Platten, die zusammengepresst werden, wodurch ein gewirbelter, steinartiger Effekt entsteht, der bei jedem Paar einzigartig ist. Kombiniert mit der Cat-Eye-Form — die seit ihrem Comeback um 2018 die Damen-Brillenmode dominiert — ist dies ein echtes Statement-Stück. Wir sehen diese besonders gut bei modebewussten DTC-Marken und Boutique-Einzelhändlern laufen. Das Marmor-Muster ist in Weiß/Grau, Schwarz/Grau, Grün/Gold und Rosa/Weiß erhältlich, oder wir können eine individuelle Marmor-Mischung entwickeln.',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    features: ['Marmor-Muster', 'Cat-Eye-Form', 'Mehrschichtiges Acetat', 'Jedes Paar einzigartig'],
  },
  {
    name: 'Acetat-Verlauf Oversized',
    description: 'Zweifarbiges Verlauf-Acetat — oben dunkel, nach unten hell auslaufend. Dies wird durch das Laminieren von zwei Acetat-Platten verschiedener Farben und die Steuerung des Dickenverhältnisses erreicht. Die übergroße Fassung bietet hervorragenden Sonnenschutz und hat den Luxusmarken-Look, der auf Instagram und in Mode-Editorials gut ankommt. Erhältlich in Schwarz-zu-Klar, Braun-zu-Honig, Blau-zu-Klar und Wein-zu-Rosa Verläufen. Dieser Stil lässt sich leicht für 80–150 $ verkaufen, und die Stückkosten beginnen immer noch unter 10 $. Die Margen sind hervorragend.',
    price: '$8.00 - $13.00',
    moq: '100 Stk.',
    features: ['Zweifarbiger Verlauf', 'Oversize-Fassung', 'Laminiertes Acetat', 'Premium-Positionierung'],
  },
  {
    name: 'Italienische Acetat Premium-Eckig',
    description: 'Für Marken, die im oberen Marktsegment konkurrieren. Diese Fassung verwendet ausschließlich Mazzucchelli M49-Acetat — die gleiche Qualität, die von Tom Ford, Céline und Oliver Peoples verwendet wird. Der Unterschied ist in der Farbtiefe und der Politurqualität sichtbar. Unsere Arbeiter verbringen 30+ Minuten mit dem Handpolieren jedes Paares, um diesen flüssig-glatten Glanz zu erzielen. Fünf-Zylinder-Scharniere mit individuellem Logo-Kerndraht. Die eckige Form ist vielseitig — funktioniert für Damen und Herren — und die Proportionen sind auf einen modernen, leicht übergroßen Look kalibriert, der gut auf Fotos wirkt. Das ist das Paar, bei dem ein Einkäufer auf einer Messe die Fassung in die Hand nimmt und sagt: „Oh, die ist schön."',
    price: '$10.00 - $16.00',
    moq: '100 Stk.',
    features: ['Mazzucchelli M49', 'Premium-Politur', '5-Zylinder-Scharniere', 'Individueller Kerndraht'],
  },
  {
    name: 'Horn-Effekt Acetat Browline',
    description: 'Das Horn-Effekt-Muster ahmt natürliches Büffelhorn nach — dunkle Streifen auf einem helleren Grund, die eine organische, fast holzartige Textur erzeugen. Kombiniert mit der Browline-Form (Clubmaster), bei der die obere Hälfte der Fassung aus dickerem Acetat und die untere aus dünnem Metalldraht besteht, ist dies ein markantes Hybrid-Design. Das Horn-Muster ist besonders auf dem japanischen und koreanischen Markt beliebt, wo es eine anspruchsvolle, intellektuelle Ästhetik vermittelt. Jedes Paar hat ein leicht anderes Muster aufgrund natürlicher Variationen in der Acetat-Platte. Wir verwenden deutschen Edelstahl für den unteren Drahtrand.',
    price: '$9.00 - $14.00',
    moq: '100 Stk.',
    features: ['Horn-Effekt-Muster', 'Browline-Form', 'Acetat + Metall Hybrid', 'Deutscher Edelstahl-Draht'],
  },
]

export default function AcetatPageDe() {
  return (
    <>
      <ProductSchema product={{
        name: 'Individuelle Acetat-Sonnenbrillen',
        description: 'Handgefertigte Acetat-Sonnenbrillen aus italienischem Mazzucchelli- und Premium-chinesischem Acetat. CNC-geschnitten, trommelpoliert, handpoliert. Über 200 Farben und Muster. Vollständige OEM-Individualisierung.',
        minPrice: '6.00',
        maxPrice: '16.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Startseite', url: 'https://eyeviewsunglasses.com/de' },
        { name: 'Produkte', url: 'https://eyeviewsunglasses.com/de/produkte' },
        { name: 'Acetat-Sonnenbrillen', url: 'https://eyeviewsunglasses.com/de/produkte/acetat' }
      ]} />
      <FAQPageSchema faqs={acetateFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/de" className="hover:text-primary-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Acetat-Sonnenbrillen</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Acetat-Sonnenbrillen Hersteller - Italienische Mazzucchelli handgefertigte Brillen Großhandel"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Acetat-Sonnenbrillen Hersteller
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Wenn Sie jemals eine Sonnenbrille in die Hand genommen und sofort gedacht haben &ldquo;die fühlt sich teuer an&rdquo;, dann hielten Sie mit ziemlicher Sicherheit <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Zelluloseacetat</a> in der Hand. Es gibt einen Grund, warum jede große Luxus-Brillenmarke — von Tom Ford über Chanel bis Oliver Peoples — ihre Fassungen aus diesem Material fertigt. Acetat hat eine Tiefe und Reichhaltigkeit, die spritzgegossener Kunststoff nicht erreichen kann. Die Farben sind geschichtet, nicht oberflächlich aufgemalt. Die Politur hat eine Wärme. Und das Gewicht — etwa 25–35 Gramm für eine typische Fassung — sitzt mit einer Substanz auf Ihrem Gesicht, die sagt &ldquo;das kostet mehr als 20 $&rdquo;.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Ich fertige seit 14 Jahren Acetat-Sonnenbrillen, und der Prozess fasziniert mich immer noch. Im Gegensatz zum Spritzguss — wo man heißen Kunststoff in eine Form spritzt und in 30 Sekunden eine fertige Fassung herausholt — beginnen Acetat-Fassungen als flache Materialplatten, die eine mehrtägige Produktionsreise durchlaufen: CNC-Schnitt, Trommelpolieren, Handpolieren, Montage und Qualitätskontrolle. Jedes einzelne Paar geht mehrfach durch menschliche Hände. Das ist es, was Acetat-Fassungen teurer macht, und es ist auch das, was sie besser macht.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Wir arbeiten mit zwei Kategorien von Acetat. Für Premium-Marken verwenden wir italienisches <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a>-Acetat — sie stellen das Material seit 1849 her und sind der Goldstandard. Ihre Farbbibliothek umfasst über 2.000 Muster und ihre Qualitätskontrolle ist akribisch. Für Marken im mittleren Preissegment (40–80 $ Verkaufspreis) verwenden wir erstklassiges chinesisches Acetat von Lieferanten wie Shenzhen Xin Rui, das sich im letzten Jahrzehnt enorm verbessert hat und ein hervorragendes Preis-Leistungs-Verhältnis bietet. Beides funktioniert. Welches Sie wählen, hängt von Ihrem Preispunkt und Ihrer Konkurrenz ab.
              </p>
              <p className="text-lg leading-relaxed">
                Unsere Fabrik produziert etwa 300.000 Paar Acetat-Sonnenbrillen pro Jahr in allen Stilen — <Link href="/de/produkte/wayfarer" className="text-primary-600 hover:underline">Wayfarers</Link>, <Link href="/de/produkte/katzenaugen" className="text-primary-600 hover:underline">Cat-Eyes</Link>, <Link href="/de/produkte/rund" className="text-primary-600 hover:underline">Runde</Link>, Eckige, Browlines und individuelle Formen. Wir betreiben 12 CNC-Maschinen, 6 Poliertrommeln und beschäftigen 45 Handpolierer. Lassen Sie mich Ihnen genau zeigen, wie wir eine flache Acetat-Platte in ein fertiges Paar Sonnenbrillen verwandeln.
              </p>
            </div>
          </div>

          {/* Production Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">So fertigen wir Acetat-Sonnenbrillen</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Von der flachen Platte zur fertigen Fassung in 5–7 Tagen. Hier ist jeder Schritt — ohne Abkürzungen, ohne Geheimnisse.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Plattenauswahl &amp; CNC-Schnitt</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Es beginnt mit der Acetat-Platte — einem Materialblock von etwa 6 mm Dicke in der von Ihnen gewählten Farbe oder dem gewählten Muster. Wir laden die Platte in eine CNC-Fräsmaschine (computergesteuerte numerische Steuerung), die die Frontfassung und Bügel nach genauen Spezifikationen schneidet. Die CNC folgt der 3D-CAD-Datei Ihrer Fassung und schneidet die Glasnuten, Stegform und Scharniertaschen in einem Arbeitsgang. Ein erfahrener CNC-Bediener kann etwa 40–50 Frontfassungen pro Stunde schneiden. In diesem Stadium ist die Fassung roh — man kann die Bearbeitungsspuren sehen und die Kanten sind scharf.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Trommelpolieren (3–5 Tage)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Das ist der Schritt, der die Leute überrascht — die Fassungen kommen in eine rotierende Trommel, gefüllt mit Holzspänen, Bimsstein und einer kleinen Menge Wasser. Die Trommel dreht sich langsam 3–5 Tage lang, und die Reibung glättet nach und nach alle Bearbeitungsspuren und rundet die Kanten ab. Es ist im Wesentlichen ein sehr langsamer, sehr schonender Schleifprozess. Man kann das nicht beschleunigen. Wir haben es versucht. Wenn man die Trommelzeit verkürzt, ist die Oberfläche nicht glatt genug, damit die finale Politur gut aussieht. Verschiedene Muster erfordern unterschiedliche Trommelmedien — zum Beispiel benötigt kristallklares Acetat feinere Medien, um Mikrokratzer zu vermeiden.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Handpolitur (20–30 Minuten pro Paar)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hier passiert die Magie und hier entsteht der größte Teil der Kosten. Ein erfahrener Arbeiter nimmt jede Fassung und poliert sie von Hand an einer Reihe von Baumwoll-Polierscheiben mit zunehmend feineren Poliermitteln. Die erste Scheibe entfernt alle verbliebenen Trommelspuren. Die zweite bringt einen Halbglanz hervor. Die dritte und letzte Scheibe erzeugt diesen tiefen, flüssig-glasartigen Glanz, der Acetat-Fassungen so hochwertig aussehen lässt. Unsere Polierarbeiter haben durchschnittlich 6 Jahre Erfahrung — es dauert etwa ein Jahr Ausbildung, bevor jemand konstant auf unserem Standard polieren kann. Das ist der Schritt, den Massenfassungen aus Kunststoff komplett überspringen, und es ist der Grund, warum Acetat-Fassungen sich grundlegend anders anfühlen und aussehen.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scharniermontage &amp; Glaseinpassung</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wir setzen die Scharniere ein (typischerweise 5-Zylinder-Edelstahl mit individuellem Kerndraht für Ihr Logo), befestigen die Bügel und montieren die Gläser. Bei Acetat-Fassungen werden die Gläser passend zur Nutform geschnitten und durch sanftes Erwärmen der Fassung auf etwa 60 °C eingesetzt, was das Acetat flexibel genug macht, um das Glas ohne Spannungsrisse aufzunehmen. Jedes Scharnier wird auf reibungslosen Lauf und richtige Spannung getestet. Die Bügelausrichtung wird überprüft, um sicherzustellen, dass die Fassung eben auf einer flachen Oberfläche aufliegt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Qualitätskontrolle</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jedes Paar durchläuft eine 15-Punkte-Inspektion: Glasausrichtung, Scharnierspannung, Bügelsymmetrie, Oberflächenfinish (Prüfung auf Kratzer, Vertiefungen oder ungleichmäßige Politur), Farbkonsistenz, UV-Schutz-Verifizierung (getestet mit einem UV-Spektrometer) und physische Messungen gegen das Datenblatt. Unsere QC-Ablehnungsrate bei Acetat-Fassungen liegt bei etwa 3–5 % — höher als bei spritzgegossenen Fassungen (die bei etwa 1–2 % liegen), da die manuellen Prozesse mehr Variabilität einführen. Abgelehnte Paare gehen zum Nachpolieren zurück oder werden komplett aussortiert. Wir versenden keine B-Ware.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Italian vs Chinese Acetate */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Italienisches vs. chinesisches Acetat: Die wahre Geschichte</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Diese Frage bekomme ich bei fast jedem Gespräch. Hier ist ein ehrlicher Vergleich von jemandem, der täglich mit beidem arbeitet.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-3">Italienisches Acetat (Mazzucchelli, Lapo)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Überlegene Farbtiefe und Musterkonsistenz — besonders bei komplexen mehrschichtigen Mustern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Lässt sich mit weniger Aufwand zu einem etwas höheren Glanz polieren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Bibliothek mit über 2.000 Mustern, hinter denen Jahrzehnte Forschung &amp; Entwicklung stecken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>&ldquo;Hergestellt mit italienischem Acetat&rdquo; ist ein berechtigter Marketing-Claim, der bei Premium-Käufern ankommt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>30–40 % teurer als vergleichbares chinesisches Acetat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Längere Lieferzeiten für individuelle Farben (6–8 Wochen von Bestellung bis Plattenlieferung)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Am besten für: Verkaufspreis ab 80 $</div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-3">Premium chinesisches Acetat</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Hervorragende Qualität von Top-Herstellern — wirklich gut, kein Kompromiss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>30–40 % geringere Kosten pro Kilogramm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Schnellere Lieferung individueller Farben (3–4 Wochen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Geringere Platten-Mindestbestellmenge für individuelle Farben (50 kg vs. 100 kg bei italienischem)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Komplexe Muster (mehrschichtiges Schildpatt) können eine etwas weniger konsistente Verteilung aufweisen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Keine &ldquo;italienische&rdquo; Marketing-Story (obwohl &ldquo;Premium-Zelluloseacetat&rdquo; immer noch funktioniert)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Am besten für: Verkaufspreis 40–80 $</div>
              </div>
            </div>

            <p className="text-gray-500 text-center mt-8 text-sm">
              Meine Empfehlung: Beginnen Sie mit chinesischem Acetat, um Ihre Designs und Preispunkte zu validieren. Wechseln Sie zu italienischem für Ihre Flaggschiff-Produkte, sobald Sie die Nachfrage bestätigt haben. Viele erfolgreiche Marken verwenden beides — Italienisches für ihre Premium-Linie, Chinesisches für ihre Alltagskollektion.
            </p>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Acetat-Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Unsere Acetat-Kollektion</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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
                      ['Fassungsmaterial', 'Zelluloseacetat — Italienisch (Mazzucchelli/Lapo) oder Premium-chinesisch'],
                      ['Fassungsgewicht', '25–35 g je nach Fassungsgröße und -dicke'],
                      ['Plattendicke', '5 mm / 6 mm / 8 mm (am häufigsten: 6 mm)'],
                      ['Verfügbare Muster', '200+ Lagerfarben: Uni, Schildpatt, Kristall, Marmor, Verlauf, Horn, Holzmaserung, laminiert'],
                      ['Individuelle Farben', 'Pantone-Abgleich verfügbar — Platten-MOQ 50 kg (chinesisch) / 100 kg (italienisch)'],
                      ['Glasmaterial', 'Polycarbonat / TAC polarisiert / CR-39 optisch / Mineralglas'],
                      ['Glasbreite', '48 mm – 58 mm (variiert je nach Fassungsstil)'],
                      ['Stegbreite', '16 mm – 22 mm'],
                      ['Bügellänge', '140 mm / 145 mm / 150 mm'],
                      ['Scharniere', '5-Zylinder-Edelstahl Standard / Federscharniere optional (+0,30 $/Paar)'],
                      ['UV-Schutz', 'UV400 — blockiert 100 % der UVA- und UVB-Strahlung'],
                      ['Produktionsprozess', 'CNC-Schnitt → Trommelpolieren (3–5 Tage) → Handpolitur (20–30 Min.) → Montage → QK'],
                      ['Zertifizierungen', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 Stück pro Modell — Farbmischung erlaubt / 300 Stk. für individuelle Fassungsformen'],
                      ['Formgebühr (Individuelle Form)', '800 – 1.500 $ einmalig — entfällt bei Bestellungen über 1.000 Stk.'],
                      ['Musterzeit', '5–7 Werktage'],
                      ['Produktionszeit', '20–28 Tage Standard / 14–18 Tage Eilauftrag (+15 %)'],
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

          {/* Color and Pattern Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Farben &amp; Muster</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Hier zeigt Acetat im Vergleich zu anderen Materialien seine wahre Stärke. Die Bandbreite an Farben und Mustern, die Sie erzielen können, ist praktisch grenzenlos.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🐢 Schildpatt</h3>
                <p className="text-sm text-gray-600">Der Klassiker. Erhältlich in Braun/Bernstein (traditionell), Blond/Honig (heller, trendiger), dunklem Havanna (satt, fast schwarz) und Grün/Oliv (einzigartig). Mehrschichtiges italienisches Schildpatt hat die meiste Tiefe und Variation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">💎 Kristall / Transparent</h3>
                <p className="text-sm text-gray-600">Vollständig transparent oder mit einem dezenten Farbton. Kristallklar, Kristallgrau, Kristallchampagner, Kristallblau, Kristallrosa. Entscheidend ist die optische Klarheit — billiges klares Acetat sieht milchig aus. Unseres nicht.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🪨 Marmor &amp; Stein</h3>
                <p className="text-sm text-gray-600">Wird durch Schichten und Pressen verschiedenfarbiger Acetat-Platten erzeugt. Weißer Marmor, schwarzer Marmor, grüne Jade, rosa Onyx. Jedes Paar hat leicht unterschiedliche Wirbelmuster — jede Fassung ist ein Unikat.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🌅 Verlauf / Zweifarbig</h3>
                <p className="text-sm text-gray-600">Oben dunkel, unten hell (oder seitlich). Schwarz zu Klar, Braun zu Honig, Marineblau zu Himmelblau, Wein zu Rosa. Wird durch Laminieren von zwei Acetat-Platten in unterschiedlichen Dickenverhältnissen erzeugt.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🎨 Unifarben</h3>
                <p className="text-sm text-gray-600">Mattschwarz, Glanzschwarz, Marineblau, Waldgrün, Burgunder, Creme, Pastellrosa, Himmelblau — und alles dazwischen. Pantone-Abgleich für individuelle Farben. Die Politurtiefe bei unifarbenem Acetat ist beeindruckend.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🦌 Horn- &amp; Holz-Effekt</h3>
                <p className="text-sm text-gray-600">Acetat-Muster, die natürliches Büffelhorn oder Holzmaserung nachahmen. Beliebt auf dem japanischen und koreanischen Markt. Jedes Paar sieht aufgrund natürlicher Variationen im Acetat-Plattenmuster einzigartig aus.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Individualisierungsoptionen</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Acetat-Fassungen bieten die größte Bandbreite an Individualisierungsmöglichkeiten aller Fassungsmaterialien. Hier ist, was wir können.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Heißprägung</strong> — Gold-, Silber- oder Farbfolie auf der Bügelinnenseite. Klassisch, elegant.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Prägung/Einprägung</strong> — in die Acetat-Oberfläche gepresst. Dezent und dauerhaft.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Individueller Kerndraht</strong> — Ihr Logo lasergraviert auf dem Metall-Scharnierdraht, sichtbar wenn der Bügel ausgeklappt wird.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Metall-Bügelplakette</strong> — Zinklegierung- oder Edelstahl-Logoplatte, am Bügel genietet.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📐 Fassungsdesign</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Individuelle Formen</strong> — senden Sie uns eine Skizze oder CAD-Datei und wir schneiden eine CNC-Form (800–1.500 $ einmalig)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bügelbreite</strong> — dünn (4 mm) für einen minimalen Look, dick (6–8 mm) für ein markantes Statement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Schlüsselloch- vs. Sattelsteg</strong> — verschiedene Nasensteg-Stile für verschiedene Gesichtsformen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bügelenden-Stil</strong> — gerade, gebogen oder paddelförmig</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Verpackung</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Lederetuis</strong> — Magnetverschluss, geprägtes Logo. Die Premium-Wahl.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hartschalen-EVA-Etuis</strong> — langlebig, leicht, Vollfarbdruck des Logos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Mikrofaserbeutel</strong> — individuell bedruckt, dient auch als Reinigungstuch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Verkaufsfertige Boxen</strong> — Vollfarbdruck, individuelle Einlage, Aufhängelasche, Barcode-Etikett.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Acetate */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Warum Acetat Premium-Preise erzielt</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Acetat-Fassungen werden für 60–200 $+ verkauft. Hier ist, warum Kunden diesen Aufpreis zahlen — und warum es für Ihre Margen funktioniert.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">✋ Handwerklicher Prozess</h3>
                <p className="text-gray-300 text-sm">Jedes Paar wird mehrfach von menschlichen Händen berührt. In einer Welt der Massenproduktion zählt das. Kunden spüren den Unterschied — und sie zahlen dafür. &ldquo;Handpoliert&rdquo; ist ein echtes Marketing-Argument, das ankommt.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🎨 Farbtiefe</h3>
                <p className="text-gray-300 text-sm">Acetat-Farben sind durch das Material geschichtet, nicht auf die Oberfläche gemalt. Ein Schildpatt-Muster hat echte Tiefe — man sieht verschiedene Schichten aus verschiedenen Winkeln. Das ist mit spritzgegossenem Kunststoff physisch unmöglich.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">⚖️ Wahrgenommene Qualität</h3>
                <p className="text-gray-300 text-sm">Das Gewicht (25–35 g), die Wärme des Materials auf der Haut, die Tiefe der Politur — alles an Acetat kommuniziert Qualität. Ihr Kunde nimmt es in die Hand und weiß: Das ist keine 15-Dollar-Sonnenbrille.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🌿 Natürlicher Ursprung</h3>
                <p className="text-gray-300 text-sm">Zelluloseacetat wird aus Baumwollfasern und Holzzellstoff gewonnen — es ist ein pflanzliches Material, nicht erdölbasiert. Das ist für umweltbewusste Verbraucher zunehmend wichtig und gibt Ihnen einen Nachhaltigkeitsaspekt.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🔧 Anpassbarkeit</h3>
                <p className="text-gray-300 text-sm">Acetat kann von jedem Optiker mit sanfter Wärme angepasst werden. Die Fassung kann für eine individuelle Passform umgeformt werden. Versuchen Sie das mit spritzgegossenem Nylon — es bricht. Diese Anpassbarkeit verlängert die Nutzungsdauer des Produkts und reduziert Retouren.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">💰 Margen-Rechnung</h3>
                <p className="text-gray-300 text-sm">Eine Acetat-Fassung kostet 6–16 $ pro Paar in der Herstellung. Sie wird für 60–200 $ verkauft. Das ist ein 4–12-facher Aufschlag — besser als die meisten Konsumgüter. Selbst nach Abzug von Marketing, Verpackung und Distribution sind die Margen bei Acetat-Brillen hervorragend.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Häufig gestellte Fragen zu Acetat-Sonnenbrillen</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {acetateFaqs.map((faq, index) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/de/produkte/katzenaugen" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😸</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Katzenaugen-Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Unser beliebtester Acetat-Stil für Damenmarken. In allen Acetat-Farben und -Mustern erhältlich.</p>
              </Link>
              <Link href="/de/produkte/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Wayfarer-Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Die meistverkaufte Acetat-Form weltweit. Klassisch, vielseitig und das sicherste Erstprodukt für neue Marken.</p>
              </Link>
              <Link href="/de/produkte/rund" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Runde Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Vintage-inspirierte Runde in Kristall, Schildpatt und Uni-Acetat. Stark im Trend auf asiatischen Märkten.</p>
              </Link>
              <Link href="/de/produkte" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">OEM vs. ODM Leitfaden</h3>
                <p className="text-gray-600 text-sm">Nicht sicher, ob Sie unsere vorhandenen Designs nutzen oder eigene erstellen sollen? Dieser Leitfaden erläutert die Vor- und Nachteile sowie Kosten.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bereit, Ihre Acetat-Kollektion zu erstellen?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Senden Sie uns Ihre Fassungsideen, Farbpräferenzen und Ihren Zielpreis. Wir empfehlen Ihnen die richtige Acetat-Qualität, senden Ihnen Materialmuster und haben innerhalb einer Woche Proben in Ihren Händen. Italienisches oder chinesisches Acetat — wir helfen Ihnen bei der richtigen Entscheidung.
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
