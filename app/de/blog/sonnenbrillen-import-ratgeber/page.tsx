import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen aus China importieren: Kompletter Leitfaden 2026',
  description: 'Ein chinesischer Sonnenbrillen-Fabrikinhaber erklärt den Import von Sonnenbrillen aus China — Beschaffung, Versand, Zollgebühren, Qualitätskontrolle und häufige Fehler.',
  keywords: 'Sonnenbrillen aus China importieren, Großhandel Sonnenbrillen China, Sonnenbrillen Importzoll, Sonnenbrillen kaufen China',
  alternates: { canonical: '/de/blog/sonnenbrillen-import-ratgeber', languages: { 'en': '/blog/import-sunglasses-guide', 'de': '/de/blog/sonnenbrillen-import-ratgeber' } },
}

export default function SonnenbrillenImportRatgeberPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Sonnenbrillen aus China importieren: Kompletter Leitfaden 2026", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Ein chinesischer Fabrikinhaber erklärt den Import von Sonnenbrillen aus China.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/sonnenbrillen-import-ratgeber" }, "inLanguage": "de" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Wie hoch ist der Importzoll auf Sonnenbrillen aus China?", "acceptedAnswer": { "@type": "Answer", "text": "Für die USA beträgt der Standard-Importzoll auf nicht-verschreibungspflichtige Sonnenbrillen (HTS 9004.10) 2 %. Der EU-Zollsatz liegt bei 2,9 %. Australien erhebt 5 %. Beachten Sie, dass je nach aktueller Handelspolitik zusätzliche Zölle gelten können. Prüfen Sie aktuelle Sätze immer bei einem Zollmakler." } },
          { "@type": "Question", "name": "Wie finde ich eine zuverlässige Sonnenbrillen-Fabrik in China?", "acceptedAnswer": { "@type": "Answer", "text": "Starten Sie auf Alibaba mit 'Verified Manufacturer'-Filter, besuchen Sie die Canton Fair oder SILMO, fordern Sie Audit-Berichte und Muster von 3–5 Fabriken an. Suchen Sie nach spezialisierten Sonnenbrillen-Fabriken, nicht Allgemein-Zubehör. Lesen Sie unseren detaillierten Leitfaden zum Finden zuverlässiger Hersteller." } },
          { "@type": "Question", "name": "Wie lange dauert der Import von Sonnenbrillen aus China?", "acceptedAnswer": { "@type": "Answer", "text": "ODM: 20–45 Tage Produktion + 5–30 Tage Versand. OEM: 45–90 Tage Produktion + Versand. Luftfracht: 5–7 Tage, Seefracht: 20–30 Tage. Erstbestellungen dauern immer länger. Gesamtzeitrahmen von Bestellung bis Lieferung: 6–16 Wochen realistisch." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import</span>
            <span>4. Mai 2026</span><span>•</span><span>14 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sonnenbrillen aus China importieren: Kompletter Leitfaden 2026</h1>
          <p className="text-xl text-gray-600">Ein chinesischer Fabrikinhaber erklärt den gesamten Importprozess — von der Beschaffung bis zur Lieferung. Ohne Beschönigung, mit echten Zahlen.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Inhaltsverzeichnis</h2>
          <ul className="space-y-2">
            <li><a href="#warum-china" className="text-primary-600 hover:underline">Warum China? Die Fakten</a></li>
            <li><a href="#schritt-fuer-schritt" className="text-primary-600 hover:underline">Schritt für Schritt: Von der Anfrage bis zur Lieferung</a></li>
            <li><a href="#versandoptionen" className="text-primary-600 hover:underline">Versandoptionen: Luft vs. See vs. Express</a></li>
            <li><a href="#zoll-und-abgaben" className="text-primary-600 hover:underline">Zoll und Abgaben: Was Sie wirklich zahlen</a></li>
            <li><a href="#compliance" className="text-primary-600 hover:underline">Compliance: FDA, CE und UV-Dokumentation</a></li>
            <li><a href="#haeufige-fehler" className="text-primary-600 hover:underline">Die 7 häufigsten Importfehler</a></li>
            <li><a href="#fragen" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Über 80 % aller weltweit verkauften Sonnenbrillen werden in China hergestellt. Das ist kein Zufall — es ist das Ergebnis von Jahrzehnten der Spezialisierung, Investition in Produktionsinfrastruktur und einem Ökosystem von Materiallieferanten, das nirgendwo sonst existiert. Ich sage das als jemand, der seit 2006 Teil dieses Ökosystems ist.</p>

          <h2 id="warum-china" className="text-3xl font-bold mt-16 mb-6">Warum China? Die Fakten</h2>
          <p>China dominiert die Sonnenbrillenherstellung aus drei Gründen:</p>
          <ul>
            <li><strong>Kosten:</strong> Produktionskosten sind 40–60 % niedriger als in Italien oder Japan — bei vergleichbarer Qualität in den oberen Segmenten.</li>
            <li><strong>Infrastruktur:</strong> Alles unter einem Dach — Glaslieferanten, Fassungsmaterialien, Beschichtungen, Verpackung. Kurze Wege, schnelle Reaktionszeiten.</li>
            <li><strong>Skalierung:</strong> Von 50 Stück bis 50.000 — chinesische Fabriken können jede Größenordnung bedienen.</li>
          </ul>
          <p>Die zwei wichtigsten Produktionszentren sind <strong>Wenzhou</strong> (Zhejiang-Provinz) und <strong>Shenzhen/Dongguan</strong> (Guangdong-Provinz). Unsere Fabrik liegt in Wenzhou, dem historischen Zentrum der chinesischen Brillenindustrie.</p>

          <h2 id="schritt-fuer-schritt" className="text-3xl font-bold mt-16 mb-6">Schritt für Schritt: Von der Anfrage bis zur Lieferung</h2>
          <ol>
            <li><strong>Hersteller finden und Anfrage senden</strong> — Nutzen Sie unseren{' '}<Link href="/de/blog/sonnenbrillen-hersteller-finden" className="text-primary-600 hover:underline">Leitfaden zur Herstellersuche</Link>. Senden Sie detaillierte Anfragen an 3–5 Fabriken.</li>
            <li><strong>Muster bestellen und prüfen</strong> — $20–200 pro Paar. Vergleichen Sie 2–3 Fabriken.</li>
            <li><strong>Bestellung aufgeben</strong> — 30 % Anzahlung, 70 % vor Versand ist Standard.</li>
            <li><strong>Produktion überwachen</strong> — Fordern Sie Fortschrittsfotos an. Optional: Drittanbieter-Inspektion.</li>
            <li><strong>Versandart wählen</strong> — Luft (5–7 Tage, teurer) oder See (20–30 Tage, günstiger).</li>
            <li><strong>Zollabwicklung</strong> — Haben Sie Ihre Dokumente bereit: Handelsrechnung, Packliste, Ursprungszeugnis, Compliance-Zertifikate.</li>
          </ol>

          <h2 id="versandoptionen" className="text-3xl font-bold mt-16 mb-6">Versandoptionen: Luft vs. See vs. Express</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Methode</th><th className="px-6 py-4 text-left">Dauer</th><th className="px-6 py-4 text-left">Kosten (500 Paar)</th><th className="px-6 py-4 text-left">Am besten für</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Express (DHL/FedEx)</td><td className="px-6 py-4">3–5 Tage</td><td className="px-6 py-4">$300–$600</td><td className="px-6 py-4">Eilbestellungen, Muster</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Luftfracht</td><td className="px-6 py-4">5–7 Tage</td><td className="px-6 py-4">$200–$400</td><td className="px-6 py-4">Mittlere Bestellungen</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Seefracht</td><td className="px-6 py-4">20–30 Tage</td><td className="px-6 py-4">$100–$200</td><td className="px-6 py-4">Große Bestellungen (2.000+)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="zoll-und-abgaben" className="text-3xl font-bold mt-16 mb-6">Zoll und Abgaben: Was Sie wirklich zahlen</h2>
          <ul>
            <li><strong>USA (HTS 9004.10):</strong> 2 % Standardzoll. Zusätzliche Section-301-Zölle möglich — aktuell prüfen.</li>
            <li><strong>EU:</strong> 2,9 % Zoll + 19–27 % Einfuhrumsatzsteuer (je nach Land).</li>
            <li><strong>UK:</strong> 2,9 % Zoll + 20 % VAT.</li>
            <li><strong>Australien:</strong> 5 % Zoll + 10 % GST.</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Vergessen Sie nicht die versteckten Kosten</h3>
            <p className="text-amber-800">Zollmaklergebühren ($50–$150 pro Sendung), Hafengebühren, Lagerung bei Verzögerungen. Kalkulieren Sie 20–30 % auf den FOB-Preis für Ihre wahren Gesamtkosten.</p>
          </div>

          <h2 id="compliance" className="text-3xl font-bold mt-16 mb-6">Compliance: FDA, CE und UV-Dokumentation</h2>
          <p>Ohne korrekte Dokumentation wird Ihre Sendung am Zoll aufgehalten. Stellen Sie sicher, dass Ihre Fabrik liefert:</p>
          <ul>
            <li>UV400-Testzertifikate für jedes Modell</li>
            <li>CE-Konformitätserklärung (für EU-Verkauf)</li>
            <li>FDA-Registrierungsnachweis (für US-Verkauf)</li>
            <li>Materialsicherheitsdatenblätter</li>
          </ul>
          <p>Mehr Details in unserem{' '}<Link href="/de/blog/fda-ce-zertifizierung-sonnenbrillen" className="text-primary-600 hover:underline">FDA- & CE-Compliance-Leitfaden</Link>.</p>

          <h2 id="haeufige-fehler" className="text-3xl font-bold mt-16 mb-6">Die 7 häufigsten Importfehler</h2>
          <ol>
            <li><strong>Keine Muster bestellt</strong> — Die $100–200 für Muster ersparen Ihnen potenziell $10.000+ an schlechtem Produkt.</li>
            <li><strong>Zollgebühren nicht einkalkuliert</strong> — Ihr FOB-Preis ist nicht Ihr Endpreis. Planen Sie 20–30 % Aufschlag ein.</li>
            <li><strong>Compliance-Dokumentation fehlt</strong> — Sendungen werden am Zoll beschlagnahmt. Prüfen Sie vor dem Versand.</li>
            <li><strong>Nur nach dem Preis gewählt</strong> — Der günstigste Anbieter ist selten der beste. Qualität und Zuverlässigkeit zählen mehr.</li>
            <li><strong>Zu viel auf einmal bestellt</strong> — Starten Sie klein (200–500 Stück), testen Sie den Markt, skalieren Sie dann.</li>
            <li><strong>Versandversicherung vergessen</strong> — Für $30–50 versichern Sie Ihre gesamte Sendung. Unverzichtbar.</li>
            <li><strong>Keine Drittanbieter-Inspektion</strong> — Besonders bei der ersten Bestellung: $200–400 gut investiert.</li>
          </ol>

          <h2 id="fragen" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Wie hoch ist der Importzoll?</h3>
              <p className="text-gray-600">USA: 2 %. EU: 2,9 %. Australien: 5 %. Zusätzliche Zölle je nach Handelspolitik möglich. Immer aktuell prüfen.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Wie lange dauert der Import?</h3>
              <p className="text-gray-600">Produktion: 20–90 Tage (ODM vs. OEM). Versand: 5–30 Tage (Luft vs. See). Gesamtzeit: 6–16 Wochen realistisch für Erstbestellungen.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was kostet der Versand?</h3>
              <p className="text-gray-600">Für 500 Paar: Express $300–600, Luftfracht $200–400, Seefracht $100–200. Bei größeren Mengen sinken die Kosten pro Stück erheblich.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Bereit zu importieren?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Wir kümmern uns um die gesamte Exportdokumentation und beraten Sie zum Versand. Direkt ab Fabrik — kein Zwischenhändler.</p>
            <Link href="/de/kontakt" className="btn-primary">Import-Beratung mit Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/sonnenbrillen-hersteller-finden" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Zuverlässigen Hersteller finden</h3>
                <p className="text-gray-600 text-sm">10 Kriterien, Warnsignale und Verhandlungstipps.</p>
              </Link>
              <Link href="/de/blog/fda-ce-zertifizierung-sonnenbrillen" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">FDA- & CE-Zertifizierung</h3>
                <p className="text-gray-600 text-sm">Kompletter Compliance-Leitfaden für alle Märkte.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
