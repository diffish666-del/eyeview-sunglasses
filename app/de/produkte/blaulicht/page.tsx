import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blaulichtfilter-Brillen Großhandel | Bildschirmbrillen Hersteller - EyeView',
  description: 'Hersteller von Blaulichtfilter-Brillen im Großhandel. Digitaler Augenschutz, blockiert 30-50% Blaulicht. Gaming-, Büro- und Wellness-Brillen. OEM/ODM. MOQ 50 Stk.',
  keywords: 'Blaulichtfilter Brillen Großhandel, Bildschirmbrillen Hersteller, Blaulicht Schutz, Gaming Brillen, Computer Brillen Großhandel',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/blaulicht/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/blue-light/',
      'de': 'https://eyeviewsunglasses.com/de/produkte/blaulicht/',
    },
  },
}

const products = [
  {
    name: 'Klassischer Blaulichtfilter',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$6.00 - $10.00',
    moq: '100 Stk.',
    description: 'Klarer, professioneller Look mit transparenten Gläsern, die Blaulicht filtern, ohne sichtbaren Farbton. Ihre Kunden können diese in Meetings, bei Zoom-Calls oder den ganzen Tag am Schreibtisch tragen, ohne auszusehen, als trügen sie „Spezialbrillen". Dies ist unser meistverkauftes Blaulicht-Modell — es übertrifft alles andere in dieser Kategorie 3 zu 1, weil es wie eine normale Brille aussieht.',
  },
  {
    name: 'Gaming-Blaulichtbrille',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$7.00 - $11.00',
    moq: '100 Stk.',
    description: 'Gebaut für die Gaming-Community. Bernsteinfarbene Gläser blockieren mehr Blaulicht als klare Versionen (60–90 % vs. 30–40 %), und Gamer bevorzugen sogar den warmen Farbton — er verbessert den Kontrast in dunklen Spielumgebungen und reduziert die Härte heller Blitze. Leichte Fassung mit Gummi-Nasenpads für diese 6-Stunden-Valorant-Sessions. Ein Esports-Team in Korea bestellte 200 Stück als Team-Ausrüstung.',
  },
  {
    name: 'Klarglas-Blaulichtfilter',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$6.50 - $10.50',
    moq: '100 Stk.',
    description: 'Die unauffällige Option. Diese Gläser haben eine dezente Blaulicht-Beschichtung, die nahezu unsichtbar ist — nur ein schwacher Schimmer, wenn Licht im richtigen Winkel auftrifft. Kein Gelbstich. Entwickelt für Menschen, die Schutz wollen, aber nicht möchten, dass jemand merkt, dass sie eine Blaulichtbrille tragen. Beliebt bei Berufstätigen, Anwälten, Führungskräften — den Leuten, die „keine Gimmick-Brillen tragen".',
  },
  {
    name: 'Blaulicht-Flieger',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'Wer sagt, dass Computerbrillen langweilig aussehen müssen? Diese Fliegerfassung mit Blaulichtgläsern bringt Stil in den Bildschirmschutz. Die Metallfassung sieht schick aus, die klaren Gläser filtern Blaulicht, und der Gesamteindruck ist „cooler Pilot, der sich auch um die Augengesundheit kümmert". Ideal für Kunden, die bereits eine Flieger-Sonnenbrille besitzen und ein passendes Indoor-Modell suchen.',
  },
  {
    name: 'Blaulicht-Wayfarer',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.50',
    moq: '100 Stk.',
    description: 'Die Wayfarer-Form in einer Blaulicht-Version. Acetat-Fassung, professioneller Look, echter Bildschirmschutz. Das ist die Fassung, die wir für Firmengeschenk-Programme empfehlen — Unternehmen kaufen 50–500 Stück mit ihrem Logo auf dem Bügel für Mitarbeiter-Wellness-Pakete. Ein Tech-Unternehmen in Bangalore bestellte 1.200 Stück für sein gesamtes Entwicklerteam.',
  },
  {
    name: 'Kinder-Blaulichtbrille',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$5.50 - $9.00',
    moq: '100 Stk.',
    description: 'Kinder verbringen Stunden an Tablets, Handys und Laptops — für die Schule, zum Spielen, für YouTube. Eltern machen sich Sorgen. Diese Brillen geben ihnen eine Lösung. Flexible Fassungen für 5–12 Jahre, BPA-freie Materialien und Blaulichtfilter-Gläser. Schulen in drei Ländern haben diese für ihre Computerraum-Programme eingeführt. Beruhigung für besorgte Eltern, ab 5,50 $.',
  },
]

export default function BlueLightPageDe() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Blaulichtfilter-Brillen</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blaulichtfilter-Brillen im Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sieben Stunden. So lange starrt der durchschnittliche Erwachsene jeden Tag auf einen Bildschirm.
            Trockene Augen, Kopfschmerzen, Schlafprobleme — kommt Ihnen das bekannt vor? Blaulichtbrillen sind
            die am schnellsten wachsende Kategorie in der Brillenindustrie, und wir fertigen sie für Marken in
            über 40 Ländern. Klare Gläser, bernsteinfarbene Gläser, modische Fassungen, Kindergrößen. MOQ 100 Stück.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Blaulichtfilter-Brillen Großhandel - Computerbrillen-Kollektion"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* What Blue Light Does */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Was macht Blaulicht tatsächlich mit Ihren Augen?</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Blaulicht ist überall. Die Sonne erzeugt es. Ihr Handy erzeugt es. Ihr
              Laptop, Ihr Fernseher, Ihre Büro-Leuchtstoffröhren — alle bombardieren Ihre
              Augen den ganzen Tag mit Blaulicht. Und hier ist das Problem: Unsere Augen
              können es nicht gut blockieren. Blaulicht (Wellenlängen zwischen 380–500 nm)
              dringt direkt durch die Hornhaut und Linse und trifft unmittelbar auf die Netzhaut.
            </p>
            <p>
              Die <a href="https://www.aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">American Academy of Ophthalmology</a> stellt fest,
              dass digitale Augenbelastung etwa 65 % der Erwachsenen betrifft, die regelmäßig Bildschirme nutzen.
              Symptome sind trockene Augen, verschwommenes Sehen, Kopfschmerzen und Nacken-/Schulterschmerzen.
              Aber das Schlafproblem könnte das größte sein — Blaulicht unterdrückt die Melatonin-Produktion,
              das Hormon, das Ihrem Gehirn sagt: „Zeit zum Schlafen." Scrollen Sie um 23 Uhr auf Ihrem Handy,
              und Ihr Gehirn denkt, es ist Mittag. Kein Wunder, dass die Leute nicht einschlafen können.
            </p>
            <p>
              Deshalb sind Blaulichtbrillen explodiert. Sie sind kein Medizinprodukt und wir machen keine
              medizinischen Aussagen — aber Millionen von Menschen berichten über weniger Augenermüdung,
              weniger Kopfschmerzen und besseren Schlaf, wenn sie sie während der Bildschirmzeit tragen. Der
              Markt wird laut Branchenforschung bis 2026 voraussichtlich 4,5 Milliarden Dollar weltweit erreichen.
              Die <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA</a> reguliert
              Sonnenbrillen und Brillen als Medizinprodukte, und alle unsere Blaulichtbrillen erfüllen deren
              Standards. Für Großhandelskäufer ist dies eine der stärksten Wachstumskategorien in der
              Brillenbranche derzeit.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Blaulichtfilter-Brillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Blaulicht-Kollektion</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Blaulicht-Filtertechnologie</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Entspiegelungsbeschichtung</li>
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

        {/* Lens Options */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Klar vs. Bernstein — Welches Glas sollten Sie führen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔍 Klare Gläser</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Kein sichtbarer Farbton. Der Schutz liegt in der Beschichtung, nicht in der Farbe. Diese sind
                perfekt für Menschen, die farbechtes Sehen brauchen — Designer, Fotografen,
                Video-Editoren — und alle, die nicht erklären möchten, warum ihre Brille gelblich aussieht.
                Blockiert 30–40 % des Blaulichts im 415–455-nm-Bereich (die schädlichsten
                Wellenlängen). Das ist, was sich in Büro- und professionellen Umgebungen verkauft.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Unsichtbarer Schutz — kein Farbton</li>
                <li>• Echte Farbgenauigkeit bleibt erhalten</li>
                <li>• Blockiert 30–40 % des schädlichen Blaulichts</li>
                <li>• Am besten für: Büro, Design, professionelle Nutzung</li>
                <li>• 70 % unserer Blaulicht-Bestellungen sind klar</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🟡 Bernstein- / Gelb-Gläser</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sichtbarer warmer Farbton. Blockiert deutlich mehr Blaulicht — 60–90 % je nach
                Farbtiefe. Die Bernsteinfarbe filtert die harten blauen Frequenzen und
                schafft ein wärmeres, angenehmeres Seherlebnis. Gamer lieben es. Menschen,
                die abends Bildschirme nutzen, lieben es. Der verbesserte Kontrast ist ein echter Vorteil
                beim Gaming und Lesen bei schwachem Licht.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sichtbarer Bernsteinfarbton — warmer Ton</li>
                <li>• Blockiert 60–90 % des Blaulichts</li>
                <li>• Verbesserter Kontrast für Gaming</li>
                <li>• Am besten für: Gaming, Abendnutzung, Lesen</li>
                <li>• Wächst schnell — besonders im Gaming-Markt</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blue Light Technology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wie Blaulicht-Blockierung funktioniert</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🔬 Beschichtungsmethode (Klare Gläser)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Eine mehrschichtige Entspiegelungsbeschichtung wird auf die Glasoberfläche aufgetragen. Eine
                  dieser Schichten ist speziell darauf abgestimmt, Blaulichtwellenlängen (415–455 nm)
                  vom Auge weg zu reflektieren. Man kann es funktionieren sehen — kippen Sie das Glas und Sie
                  bemerken eine schwache blau-violette Reflexion. Das ist das Blaulicht, das abprallt,
                  anstatt durchzudringen.
                </p>
                <p className="text-sm text-gray-500">Am besten für: professionelle Nutzung, farbechte Arbeit</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🧪 Substratmethode (Bernstein-Gläser)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Das blaulichtblockierende Material wird direkt in das Glasharz während der
                  Herstellung eingemischt. Das erzeugt ein Glas, das Blaulicht über seine
                  gesamte Dicke absorbiert — nicht nur an der Oberfläche. Das Ergebnis ist eine stärkere
                  Blaulichtfilterung und ein sichtbarer Bernsteinfarbton. Da die Filterung im Glasmaterial
                  selbst steckt, kann sie nicht abgenutzt oder abgekratzt werden.
                </p>
                <p className="text-sm text-gray-500">Am besten für: Gaming, abendliche Bildschirmzeit, maximale Filterung</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Die Zahlen sprechen für sich</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="$4,5 Mrd." label="Globaler Markt bis 2026" />
            <StatCard number="12 %" label="Jährliche Wachstumsrate" />
            <StatCard number="7+ Std." label="Durchschn. tägliche Bildschirmzeit" />
            <StatCard number="65 %" label="Erwachsene berichten von Augenbelastung" />
          </div>
          <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
            Blaulichtbrillen sind kein vorübergehender Trend — die Bildschirmzeit nimmt nur zu. Remote-Arbeit,
            Online-Lernen, Mobile Gaming, Streaming … der Markt wächst weiter, weil
            das Problem weiter wächst.
          </p>
        </section>

        {/* Who Buys These */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wer kauft Blaulichtbrillen?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TargetCard icon="👨‍💼" title="Büroangestellte" desc="Das größte Segment. 8 Stunden Bildschirmzeit pro Tag, jeden Tag." />
            <TargetCard icon="🎮" title="Gamer" desc="Marathon-Gaming-Sessions. Bernsteingläser sind praktisch Standard-Ausrüstung." />
            <TargetCard icon="📱" title="Studierende" desc="Online-Kurse, Hausaufgaben am Laptop, dann Handy-Zeit. Non-Stop-Bildschirme." />
            <TargetCard icon="👶" title="Kinder" desc="Tablets für die Schule, YouTube nach der Schule. Eltern wollen Schutz." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <TargetCard icon="🏢" title="Firmengeschenke" desc="Unternehmen kaufen 50–1.000 Stück für Mitarbeiter-Wellness-Programme." />
            <TargetCard icon="🎓" title="Schulen" desc="Computerräume führen Blaulichtbrillen für Schüler ein." />
            <TargetCard icon="💻" title="Remote-Arbeiter" desc="Essentials für das Home-Office. Großes Wachstum nach 2020." />
            <TargetCard icon="📖" title="Leser" desc="E-Reader- und Tablet-Nutzer, die abends stundenlang lesen." />
          </div>
        </section>

        {/* Prescription Option */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Brillenglas-fähige Option</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Hier liegt eine große Chance, die die meisten Großhandelskäufer übersehen: Blaulichtbrillen mit Sehstärke.
              Etwa 75 % der Erwachsenen benötigen eine Form der Sehkorrektur. Das bedeutet, 75 % der potenziellen
              Blaulicht-Kunden brauchen auch Korrektionsgläser. Wir fertigen alle unsere Blaulicht-Fassungen
              als Rx-ready — wir liefern sie mit Demo-Gläsern, damit Optiker individuelle
              Sehstärken einsetzen können. Einstärke, Bifokal, Gleitsicht — alle kompatibel.
            </p>
            <p>
              Der Aufschlag bei Blaulichtbrillen mit Sehstärke ist sogar besser als bei Plangläsern (ohne Sehstärke).
              Ein Optiker kann 80–150 $ für ein Paar Blaulichtbrille mit Sehstärke verlangen, das
              im Großhandel 8–12 $ für die Fassung kostet. Dazu ein 15–25-$-Korrektionsglas aus ihrem
              Labor, und sie haben 3–5-fache Margen. Es ist ein großartiger Zusatzverkauf für jeden
              Optik-Händler, der bereits unsere Fassungen führt.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Verwandte Produkte</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/rund" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Runde Blaulichtbrillen</h3>
              <p className="text-sm text-gray-600">Vintage-Rundfassungen mit Blaulichtgläsern</p>
            </Link>
            <Link href="/de/produkte/kinder" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Kinderbrillen</h3>
              <p className="text-sm text-gray-600">Komplette Kinderbrillen-Kollektion mit UV-Schutz</p>
            </Link>
            <Link href="/de/produkte/katzenaugen" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Cat-Eye Blaulichtbrillen</h3>
              <p className="text-sm text-gray-600">Modische Cat-Eye-Fassungen mit Bildschirmschutz</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Blaulicht-Fragen — ohne Fachchinesisch</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Funktionieren Blaulichtbrillen wirklich?"
              answer="Hier ist die ehrliche Antwort: Die Wissenschaft diskutiert noch, ob Blaulicht selbst langfristige Augenschäden verursacht. Was GUT dokumentiert ist, ist, dass längere Bildschirmnutzung digitale Augenbelastung verursacht — trockene Augen, Kopfschmerzen, verschwommenes Sehen. Viele Nutzer berichten von echter Linderung beim Tragen von Blaulichtbrillen. Der Schlafvorteil hat stärkere Evidenz — Blaulicht unterdrückt Melatonin, und das Filtern am Abend kann helfen, schneller einzuschlafen. Wir machen keine medizinischen Aussagen. Wir lassen Kunden sie ausprobieren und selbst entscheiden. Die Nachbestellrate spricht für sich."
            />
            <FaqItem
              question="Klare oder bernsteinfarbene Gläser — was sollte ich auf Lager haben?"
              answer="Beides, idealerweise. Aber wenn Sie nur eines wählen können, nehmen Sie klar. Klare Gläser machen etwa 70 % unserer Blaulicht-Bestellungen aus, weil sie wie normale Brillen aussehen und keine Farben verändern. Bernsteingläser sind der Gaming-Favorit (stärkere Filterung, verbesserter Kontrast) und verkaufen sich gut in Gaming-Shops und an Abend-Bildschirmnutzer. Profi-Tipp: Führen Sie klar für den allgemeinen Einzelhandel, bernsteinfarben für Gaming-/Tech-Zielgruppen."
            />
            <FaqItem
              question="Wie viel Blaulicht blockieren diese tatsächlich?"
              answer="Klare Gläser blockieren 30–40 % des Blaulichts im 415–455-nm-Bereich (die potenziell schädlichsten Wellenlängen). Bernsteingläser blockieren 60–90 % je nach Farbtiefe. Wir liefern spektrale Transmissionsberichte bei Großbestellungen, damit Sie Kunden genau zeigen können, was sie bekommen. Keine vagen ‚blockiert Blaulicht'-Behauptungen — echte Zahlen, echte Testdaten."
            />
            <FaqItem
              question="Können diese mit Korrektionsgläsern kombiniert werden?"
              answer="Absolut — und das sollten Sie! Etwa 75 % der Erwachsenen brauchen Sehkorrektur, also sind Rx-fähige Blaulicht-Fassungen ein riesiger Markt. Alle unsere Fassungen werden mit Demo-Gläsern geliefert, die Optiker durch Blaulicht-Korrektionsgläser ersetzen können. Funktioniert mit Einstärke, Bifokal und Gleitsicht. Die Marge bei Blaulichtbrillen mit Sehstärke ist hervorragend — 80–150 $ Verkaufspreis bei einer 10-$-Großhandelsfassung."
            />
            <FaqItem
              question="Was ist der beste Weg, Blaulichtbrillen zu verkaufen?"
              answer="Die Killer-Demo: Setzen Sie Ihrem Kunden ein Paar auf und lassen Sie ihn 30 Sekunden auf sein Handy schauen. Dann nehmen Sie sie ab. Die meisten Menschen bemerken sofort den Unterschied — der Bildschirm sieht ohne sie härter aus. Dieser ‚Aha-Moment' schließt den Verkauf ab. Für Online-Shops: Konzentrieren Sie sich auf das Problem (Kopfschmerzen, trockene Augen, schlechter Schlaf) und die Lösung. Firmengeschenk-Programme sind ebenfalls riesig — Unternehmen kaufen Hunderte von Stücken für Mitarbeiter-Wellness. Wir können mit Firmenlogos individualisieren."
            />
            <FaqItem
              question="Wie hoch ist die Mindestbestellmenge und Lieferzeit?"
              answer="100 Stück pro Stil und Farbe. Lagerartikel werden in 3–5 Tagen versendet. Individuelle Bestellungen mit Ihrem Logo und Branding dauern 15–25 Tage. Wir machen auch Firmengeschenk-Verpackungen — individuelle Boxen mit Ihrem Firmennamen, gebrandete Mikrofasertücher, das volle Programm. Ein Tech-Startup bestellte 500 Stück in individueller Verpackung als Willkommensgeschenke für neue Mitarbeiter. Kostete sie etwa 9 $ pro Paar alles inklusive. Wahrgenommener Einzelhandelswert des Geschenks? Locker 30–40 $."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Der Markt, der weiter wächst</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Die Bildschirmzeit geht nicht zurück. Remote-Arbeit verschwindet nicht. Gaming wird nur
            größer. Blaulichtbrillen sind eine der sichersten Wetten in der Brillenbranche
            derzeit. Bestellen Sie Muster, testen Sie sie selbst und sehen Sie, warum diese Kategorie so gut konvertiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Blaulicht-Katalog anfordern</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Blaulichtfilter-Brillen", "item": "https://eyeviewglasses.com/de/produkte/blaulicht" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Funktionieren Blaulichtbrillen wirklich?",
            "acceptedAnswer": { "@type": "Answer", "text": "Die Wissenschaft zum langfristigen Blaulichtschaden wird noch diskutiert, aber die Linderung digitaler Augenbelastung ist gut dokumentiert. Viele Nutzer berichten über weniger Augenermüdung, weniger Kopfschmerzen und besseren Schlaf. Der Schlafvorteil hat stärkere Evidenz — Blaulicht unterdrückt die Melatonin-Produktion." }
          },
          {
            "@type": "Question",
            "name": "Klare oder bernsteinfarbene Gläser — was sollte ich auf Lager haben?",
            "acceptedAnswer": { "@type": "Answer", "text": "Beides idealerweise, aber klare Gläser machen 70 % der Bestellungen aus. Sie sehen wie normale Brillen aus und verändern keine Farben. Bernsteingläser sind bei Gamern wegen stärkerer Filterung und verbessertem Kontrast beliebt." }
          },
          {
            "@type": "Question",
            "name": "Wie viel Blaulicht blockieren diese Brillen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Klare Gläser blockieren 30–40 % des Blaulichts im 415–455-nm-Bereich. Bernsteingläser blockieren 60–90 % je nach Farbtiefe. Wir liefern spektrale Transmissionsberichte bei Großbestellungen." }
          },
          {
            "@type": "Question",
            "name": "Können Blaulichtbrillen mit Korrektionsgläsern kombiniert werden?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ja — alle Fassungen werden Rx-fertig mit Demo-Gläsern geliefert. Etwa 75 % der Erwachsenen benötigen Sehkorrektur, was Blaulichtbrillen mit Sehstärke zu einem riesigen Markt mit hervorragenden Margen macht." }
          },
          {
            "@type": "Question",
            "name": "Was ist der beste Weg, Blaulichtbrillen zu verkaufen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Die Killer-Demo: Lassen Sie Kunden mit der Brille auf ihr Handy schauen, dann ohne. Der Unterschied ist sofort spürbar. Online: Konzentrieren Sie sich auf das Problem (Kopfschmerzen, trockene Augen, schlechter Schlaf). Firmengeschenk-Programme sind ebenfalls ein riesiger Kanal." }
          },
          {
            "@type": "Question",
            "name": "Wie hoch ist die Mindestbestellmenge und Lieferzeit?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 Stück pro Stil. Lagerartikel werden in 3–5 Tagen versendet. Individuelle Bestellungen mit Logo und Branding dauern 15–25 Tage. Firmengeschenk-Verpackung verfügbar." }
          }
        ]
      })}} />
    </main>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function TargetCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
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
