import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Gläser: Kompletter Ratgeber 2026',
  description: 'Ein Fabrikinhaber erklärt Sonnenbrillen-Glasmaterialien, Farben, Beschichtungen und Polarisation. Echte Kosten, ehrliche Vergleiche und Beratung aus 20 Jahren Produktionserfahrung.',
  keywords: 'Sonnenbrillen Gläser Typen, polarisierte Gläser, Glasmaterialien, CR-39 vs Polycarbonat, Sonnenbrillen Glasfarben, photochrome Gläser, Glasbeschichtungen, TAC Gläser',
  alternates: {
    canonical: '/de/blog/sonnenbrillen-glaeser-ratgeber',
    languages: {
      'en': '/blog/sunglasses-lens-guide',
      'de': '/de/blog/sonnenbrillen-glaeser-ratgeber',
    },
  },
}

export default function SonnenbrillenGlaeserRatgeberPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sonnenbrillen-Gläser: Kompletter Ratgeber 2026",
          "datePublished": "2026-04-25",
          "dateModified": "2026-05-02",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Ein Fabrikinhaber erklärt Sonnenbrillen-Glasmaterialien, Farben, Beschichtungen und Polarisation — mit echten Kosten und ehrlichen Vergleichen.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/sonnenbrillen-glaeser-ratgeber" },
          "inLanguage": "de"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Was ist das beste Glasmaterial für Sonnenbrillen?",
              "acceptedAnswer": { "@type": "Answer", "text": "Es gibt kein einzelnes 'Bestes' — es kommt auf den Einsatzzweck an. Polycarbonat gewinnt bei der Schlagfestigkeit (Sport, Kinder). CR-39 bietet die schärfste Optik für Mode und Alltag. Mineralglas ist der Goldstandard für Premium-Marken, die Kratzfestigkeit und perfekte Klarheit wollen. TAC ist der Budget-König für polarisierte Sonnenbrillen." }
            },
            {
              "@type": "Question",
              "name": "Lohnen sich polarisierte Gläser?",
              "acceptedAnswer": { "@type": "Answer", "text": "Zum Autofahren, Angeln und Wassersport? Zu 100 % ja. Die Blendreduktion ist ein Tag-und-Nacht-Unterschied. Für Mode und gelegentliche Nutzung? Schön, aber nicht unbedingt nötig. Der Großhandels-Kostenunterschied beträgt nur $0,50–2,00 pro Paar, aber Sie können 30–60 % mehr im Einzelhandel verlangen. Aus Geschäftssicht lohnt sich Polarisation fast immer." }
            },
            {
              "@type": "Question",
              "name": "Welche Sonnenbrillen-Glasfarbe ist am besten?",
              "acceptedAnswer": { "@type": "Answer", "text": "Grau ist die vielseitigste Farbe — es reduziert die Helligkeit gleichmäßig ohne Farbverfälschung. Braun/Bernstein verstärkt Kontraste und ist ideal zum Autofahren und für Outdoor-Aktivitäten. Grün bietet natürliche Farbwahrnehmung bei guter Kontrastverstärkung. Gelb/Orange eignet sich bei schlechten Lichtverhältnissen. Rosé/Rot verbessert Tiefenwahrnehmung und Kontrast." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Technologie</span>
            <span>25. April 2026</span>
            <span>•</span>
            <span>14 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sonnenbrillen-Gläser: Kompletter Ratgeber 2026
          </h1>
          <p className="text-xl text-gray-600">
            Polycarbonat, CR-39, Mineralglas oder TAC? Grau, braun oder verspiegelt? Polarisiert oder nicht? 
            Echte Kosten, ehrliche Vergleiche und die richtige Glasstrategie für Ihre Marke.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Inhaltsverzeichnis</h2>
          <ul className="space-y-2">
            <li><a href="#glasmaterialien" className="text-primary-600 hover:underline">Glasmaterialien im Vergleich</a></li>
            <li><a href="#polarisation" className="text-primary-600 hover:underline">Polarisation: Brauchen Sie sie wirklich?</a></li>
            <li><a href="#glasfarben" className="text-primary-600 hover:underline">Glasfarben und wofür sie taugen</a></li>
            <li><a href="#beschichtungen" className="text-primary-600 hover:underline">Beschichtungen, die sich lohnen</a></li>
            <li><a href="#kosten" className="text-primary-600 hover:underline">Echte Kosten pro Paar</a></li>
            <li><a href="#empfehlung" className="text-primary-600 hover:underline">Meine Empfehlung nach Markentyp</a></li>
            <li><a href="#fragen" className="text-primary-600 hover:underline">Häufig gestellte Fragen</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            &quot;Jacky, welches Glas soll ich nehmen?&quot; — diese Frage höre ich mindestens fünfmal pro Woche. 
            Und die Antwort ist nie einfach, weil es vom Einsatzzweck, Ihrer Markenpositionierung und Ihrem 
            Budget abhängt. Aber nach 20 Jahren Glasproduktion und Millionen gelieferter Paare kann ich Ihnen 
            zumindest sagen, welches Material wofür am besten funktioniert.
          </p>

          <h2 id="glasmaterialien" className="text-3xl font-bold mt-16 mb-6">Glasmaterialien im Vergleich</h2>
          <p>
            Es gibt vier Hauptmaterialien für Sonnenbrillen-Gläser. Jedes hat seine Stärken und Schwächen — 
            und ich habe Millionen von jedem geliefert.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">CR-39 (Kolumbianisches Harz)</h3>
          <p>
            CR-39 ist das Arbeitspferd der optischen Industrie. Es bietet die beste optische Klarheit aller 
            Kunststoff-Gläser — fast so gut wie Mineralglas, aber bei halber Dicke und halbem Gewicht. Es ist 
            das, was die meisten Optiker empfehlen, und es ist das, was wir für Mode- und Lifestyle-Marken 
            am häufigsten verwenden.
          </p>
          <ul>
            <li><strong>Kosten:</strong> $2,50–$5 pro Paar (unpolarisiert), $5–$8 polarisiert</li>
            <li><strong>Gewicht:</strong> Mittel — leichter als Glas, schwerer als Polycarbonat</li>
            <li><strong>Optische Qualität:</strong> Exzellent — Abbe-Zahl von 58 (sehr wenig chromatische Aberration)</li>
            <li><strong>Schlagfestigkeit:</strong> Mittel — besteht den FDA-Falltest, aber nicht ideal für Sport</li>
            <li><strong>Am besten für:</strong> Mode, Lifestyle, Premium-Marken, Alltagsgebrauch</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Polycarbonat (PC)</h3>
          <p>
            Polycarbonat ist praktisch unzerstörbar. Es ist das Material, das für Schutzausrüstung, 
            Motorradvisiere und kugelsicheres Glas verwendet wird. Für Sonnenbrillen ist es die erste 
            Wahl bei Sport, Kindern und jedem Einsatz, bei dem Schlagfestigkeit zählt.
          </p>
          <ul>
            <li><strong>Kosten:</strong> $1,50–$3 pro Paar (unpolarisiert), $3–$5 polarisiert</li>
            <li><strong>Gewicht:</strong> Sehr leicht — das leichteste aller Materialien</li>
            <li><strong>Optische Qualität:</strong> Gut, aber nicht perfekt — Abbe-Zahl von 30 (mehr chromatische Aberration als CR-39)</li>
            <li><strong>Schlagfestigkeit:</strong> Hervorragend — 10× stärker als CR-39</li>
            <li><strong>Am besten für:</strong> Sport, Outdoor, Kinder, Sicherheitsbrillen, Budget-Marken</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">TAC (Triacetat-Cellulose)</h3>
          <p>
            TAC ist der Budget-König für polarisierte Gläser. Es ist ein laminiertes Material — eine 
            Polarisationsfolie zwischen zwei Kunststoffschichten. Die optische Qualität ist geringer als 
            bei CR-39 oder Polycarbonat, aber der Preis ist unschlagbar, wenn Sie polarisierte Gläser 
            zu niedrigen Kosten brauchen.
          </p>
          <ul>
            <li><strong>Kosten:</strong> $1–$2,50 pro Paar (immer polarisiert)</li>
            <li><strong>Gewicht:</strong> Leicht</li>
            <li><strong>Optische Qualität:</strong> Ordentlich — akzeptabel für den Preispunkt</li>
            <li><strong>Schlagfestigkeit:</strong> Mäßig</li>
            <li><strong>Am besten für:</strong> Budget-Marken, Aktionsprodukte, hohe Stückzahlen</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mineralglas</h3>
          <p>
            Mineralglas ist der Goldstandard für Kratzfestigkeit und optische Klarheit. Es bietet die 
            natürlichste Sicht und ist extrem kratzfest. Der Nachteil: Es ist schwerer und zerbrechlicher 
            als Kunststoff-Alternativen. Premium-Marken wie Ray-Ban verwenden Mineralglas in ihren 
            Spitzenmodellen.
          </p>
          <ul>
            <li><strong>Kosten:</strong> $4–$10 pro Paar (unpolarisiert), $8–$15 polarisiert</li>
            <li><strong>Gewicht:</strong> Schwer — doppelt so schwer wie Polycarbonat</li>
            <li><strong>Optische Qualität:</strong> Die beste — perfekte Klarheit</li>
            <li><strong>Kratzfestigkeit:</strong> Hervorragend — weitaus besser als jedes Kunststoff-Glas</li>
            <li><strong>Am besten für:</strong> Premium-Marken ($100+), Liebhaber, Heritage-Designs</li>
          </ul>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Material</th>
                  <th className="px-6 py-4 text-left">Kosten/Paar</th>
                  <th className="px-6 py-4 text-left">Optik</th>
                  <th className="px-6 py-4 text-left">Schlagfestigkeit</th>
                  <th className="px-6 py-4 text-left">Gewicht</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">CR-39</td><td className="px-6 py-4">$2,50–$5</td><td className="px-6 py-4">Exzellent</td><td className="px-6 py-4">Mittel</td><td className="px-6 py-4">Mittel</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Polycarbonat</td><td className="px-6 py-4">$1,50–$3</td><td className="px-6 py-4">Gut</td><td className="px-6 py-4">Hervorragend</td><td className="px-6 py-4">Sehr leicht</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">TAC</td><td className="px-6 py-4">$1–$2,50</td><td className="px-6 py-4">Ordentlich</td><td className="px-6 py-4">Mäßig</td><td className="px-6 py-4">Leicht</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Mineralglas</td><td className="px-6 py-4">$4–$10</td><td className="px-6 py-4">Perfekt</td><td className="px-6 py-4">Niedrig</td><td className="px-6 py-4">Schwer</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="polarisation" className="text-3xl font-bold mt-16 mb-6">Polarisation: Brauchen Sie sie wirklich?</h2>
          <p>
            Polarisierte Gläser reduzieren Blendung von reflektierenden Oberflächen — Wasser, Straßen, 
            Schnee, Autoscheiben. Sie tun das durch einen eingebetteten Filter, der horizontal reflektiertes 
            Licht blockiert. Für Details zur Unterscheidung zwischen UV-Schutz und Polarisation lesen Sie 
            unseren{' '}
            <Link href="/de/blog/uv400-vs-polarisiert" className="text-primary-600 hover:underline">UV400 vs. Polarisiert Ratgeber</Link>.
          </p>
          <p>
            <strong>Meine Empfehlung:</strong> Wenn Ihre Marke über $50 im Einzelhandel verkauft, bieten 
            Sie polarisierte Gläser als Standard oder Upgrade-Option an. Der Großhandelszuschlag von $1,50–5 
            pro Paar ermöglicht einen Einzelhandelsaufschlag von $20–40. Das ist ein ausgezeichnetes 
            Preis-Leistungs-Verhältnis für Ihre Kunden und eine gesunde Marge für Sie.
          </p>

          <h2 id="glasfarben" className="text-3xl font-bold mt-16 mb-6">Glasfarben und wofür sie taugen</h2>
          <ul>
            <li><strong>Grau:</strong> Der Allrounder. Reduziert Helligkeit ohne Farbveränderung. Am besten zum Autofahren und für den Alltag. Unser meistverkaufter Farbton.</li>
            <li><strong>Braun/Bernstein:</strong> Verstärkt Kontraste und Tiefenwahrnehmung. Ideal zum Autofahren, Angeln und bei wechselnden Lichtverhältnissen.</li>
            <li><strong>Grün (G-15):</strong> Der klassische Ray-Ban-Farbton. Natürliche Farbwahrnehmung mit guter Kontrastverstärkung. Zeitlos.</li>
            <li><strong>Verspiegelt:</strong> Reduziert Lichtdurchlässigkeit und sieht sportlich aus. Beliebt bei Sport- und Lifestyle-Marken. Kostet $0,80–$2,50 extra pro Paar.</li>
            <li><strong>Verlauf (Gradient):</strong> Oben dunkel, unten klar. Modisch und praktisch — dunkler Bereich schützt vor Sonnenlicht von oben, klarer Bereich ermöglicht Lesen und Nahsicht.</li>
          </ul>

          <h2 id="beschichtungen" className="text-3xl font-bold mt-16 mb-6">Beschichtungen, die sich lohnen</h2>
          <p>
            Moderne Sonnenbrillen-Gläser verwenden typischerweise 3–5 Beschichtungsschichten. Die wichtigsten:
          </p>
          <ul>
            <li><strong>UV400-Beschichtung:</strong> Nicht verhandelbar. Blockiert 99–100 % der UV-Strahlung. Bei den meisten Materialien standardmäßig enthalten.</li>
            <li><strong>Hartbeschichtung:</strong> Verbessert Kratzfestigkeit. Kostet $0,15–$0,40 pro Paar. Sollte immer enthalten sein.</li>
            <li><strong>Antireflexbeschichtung (AR):</strong> Reduziert Rückseitenblendung. Kostet $0,60–$1,50 pro Paar. Lohnt sich bei Premium-Produkten.</li>
            <li><strong>Hydrophobe Beschichtung:</strong> Wasser perlt ab. Kostet $0,20–$0,50 pro Paar. Gut für Sport und Outdoor.</li>
            <li><strong>Oleophobe Beschichtung:</strong> Widersteht Fingerabdrücken. Kostet $0,30–$0,60 pro Paar. Kunden lieben es.</li>
          </ul>
          <p>
            Mehr Details finden Sie in unserem{' '}
            <Link href="/de/blog/sonnenbrillen-beschichtungen-ratgeber" className="text-primary-600 hover:underline">Beschichtungen-Ratgeber</Link>.
          </p>

          <h2 id="kosten" className="text-3xl font-bold mt-16 mb-6">Echte Kosten pro Paar</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Gesamtkosten-Rechnung für ein Paar Gläser</h3>
            <p className="text-amber-800">
              Budget (TAC polarisiert + Hartbeschichtung): $1,50–$3 pro Paar<br />
              Mittelklasse (CR-39 polarisiert + Hart + AR): $6–$10 pro Paar<br />
              Premium (CR-39 polarisiert + Hart + AR + hydrophob + oleophob): $8–$14 pro Paar<br />
              Luxus (Mineralglas polarisiert + volle Beschichtung): $12–$20 pro Paar
            </p>
          </div>

          <h2 id="empfehlung" className="text-3xl font-bold mt-16 mb-6">Meine Empfehlung nach Markentyp</h2>
          <ul>
            <li><strong>Budget-Marke ($15–$40 Einzelhandel):</strong> TAC polarisiert. Günstig, funktional, der Kunde bekommt Polarisation zu einem guten Preis.</li>
            <li><strong>Mittelklasse ($40–$100):</strong> CR-39 polarisiert mit Hartbeschichtung und AR. Das ist der Sweet Spot — exzellente Optik bei vernünftigen Kosten.</li>
            <li><strong>Premium ($100–$200):</strong> CR-39 oder Polycarbonat polarisiert mit vollem Beschichtungspaket. Alternativ Mineralglas für Heritage-Positionierung.</li>
            <li><strong>Sport/Outdoor:</strong> Polycarbonat polarisiert mit hydrophober Beschichtung. Leicht, robust, wetterbeständig.</li>
          </ul>

          <h2 id="fragen" className="text-3xl font-bold mt-16 mb-6">Häufig gestellte Fragen</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was ist das beste Glasmaterial für Sonnenbrillen?</h3>
              <p className="text-gray-600">
                Es kommt auf den Einsatz an. CR-39 für die beste Optik (Mode, Alltag). Polycarbonat für 
                Schlagfestigkeit (Sport, Kinder). Mineralglas für Kratzfestigkeit und Klarheit (Premium). 
                TAC für günstige Polarisation (Budget-Marken).
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Lohnen sich polarisierte Gläser?</h3>
              <p className="text-gray-600">
                Zum Autofahren und bei Wassersport: absolut ja. Für Mode und Gelegenheitsnutzung: nett, 
                aber nicht essenziell. Der Großhandels-Mehrpreis beträgt nur $0,50–2 pro Paar, aber Sie 
                können 30–60 % mehr im Einzelhandel verlangen. Geschäftlich lohnt es sich fast immer.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Welche Glasfarbe ist am vielseitigsten?</h3>
              <p className="text-gray-600">
                Grau. Es reduziert die Helligkeit gleichmäßig, ohne Farben zu verfälschen. Geeignet für 
                alle Lichtverhältnisse, alle Aktivitäten, alle Gesichter. Deshalb ist es unsere 
                meistverkaufte Farbe — und wahrscheinlich auch Ihre beste Wahl für ein erstes Produkt.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Brauchen Sie Beratung zu Gläsern?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Die richtige Glaskombination hängt von Ihrer Marke, Ihrem Preispunkt und Ihrer Zielgruppe ab. 
              Ich helfe Ihnen, die optimale Lösung zu finden — kostenlos und unverbindlich.
            </p>
            <Link href="/de/kontakt" className="btn-primary">
              Glasberatung mit Jacky buchen
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/uv400-vs-polarisiert" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">UV400 vs. Polarisiert: Was ist der Unterschied?</h3>
                <p className="text-gray-600 text-sm">Was jeder tut, Kostenauswirkung und wann Ihre Marke eins, beides oder keins braucht.</p>
              </Link>
              <Link href="/de/blog/sonnenbrillen-beschichtungen-ratgeber" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen-Beschichtungen: Spiegel, AR, Hydrophob & mehr</h3>
                <p className="text-gray-600 text-sm">Jede Beschichtungsart erklärt — mit echten Kosten pro Paar und welche sich kombinieren lassen.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
