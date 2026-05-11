import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Mindestbestellmenge: Wie viele Paare sollten Sie zuerst bestellen?',
  description: 'Ein Fabrikinhaber erklärt Mindestbestellmengen für Sonnenbrillen. ODM ab 50–200 Stück, OEM ab 300–1.000+. Die kluge Skalierungsstrategie für Ihre erste Bestellung.',
  keywords: 'Sonnenbrillen MOQ Großhandel, Mindestbestellmenge Sonnenbrillen, Sonnenbrillen Großhandel Bestellung, ODM MOQ, OEM MOQ Sonnenbrillen',
  alternates: { canonical: '/de/blog/sonnenbrillen-mindestbestellmenge-ratgeber', languages: { 'en': '/blog/sunglasses-moq-guide', 'de': '/de/blog/sonnenbrillen-mindestbestellmenge-ratgeber' } },
}

export default function SonnenbrillenMOQPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Sonnenbrillen-Mindestbestellmenge: Wie viele Paare sollten Sie zuerst bestellen?", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/sonnenbrillen-mindestbestellmenge-ratgeber" }, "inLanguage": "de" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Was ist die typische Mindestbestellmenge für Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "ODM (bestehende Designs): 50–200 Stück pro Modell. OEM (individuelle Designs mit vorhandenen Formen): 300–1.000 Stück. Komplett individuelle Formenbestellungen: ab 500+ Stück. Einige Fabriken, wie wir, bieten niedrigere MOQs für Erstbestellungen." } },
          { "@type": "Question", "name": "Kann ich weniger als 100 Paar bestellen?", "acceptedAnswer": { "@type": "Answer", "text": "Manche Fabriken bieten ODM unter 100 Stück an — wir starten bei 50 für Erstkunden. Aber: Sehr niedrige Mengen bedeuten 30–50 % höhere Stückkosten. Wenn eine Fabrik 'kein MOQ' bewirbt, ist sie wahrscheinlich ein Handelsunternehmen, das aus Lagerbeständen verkauft." } },
          { "@type": "Question", "name": "Warum haben Fabriken Mindestbestellmengen?", "acceptedAnswer": { "@type": "Answer", "text": "Produktionsökonomie. Die Einrichtung einer Linie — Maschinen kalibrieren, Farben mischen, Glasschneider konfigurieren — kostet Zeit und Arbeit, egal ob 10 oder 10.000 Paar. Unter einer bestimmten Menge sind die Einrichtungskosten pro Stück zu hoch." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fertigung</span>
            <span>3. Mai 2026</span><span>•</span><span>11 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sonnenbrillen-Mindestbestellmenge: Wie viele Paare sollten Sie zuerst bestellen?</h1>
          <p className="text-xl text-gray-600">Die kluge Antwort ist nicht &quot;so viele wie möglich&quot; — sondern &quot;genug, um zu lernen, ohne zu viel zu riskieren&quot;. Hier sind die echten Zahlen.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">&quot;Jacky, wie viel soll ich bestellen?&quot; — Diese Frage stellt mir jeder neue Kunde. Die Antwort hängt davon ab, ob Sie ODM oder OEM wählen, wie viele Modelle Sie testen möchten und wie risikobereit Sie sind.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">MOQ nach Produktionsmodell</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Typ</th><th className="px-6 py-4 text-left">Typische MOQ</th><th className="px-6 py-4 text-left">Unsere MOQ</th><th className="px-6 py-4 text-left">Stückkosten</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">ODM (Katalogmodelle)</td><td className="px-6 py-4">100–300/Modell</td><td className="px-6 py-4">Ab 50/Modell</td><td className="px-6 py-4">$3–$8</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">OEM (vorhandene Formen)</td><td className="px-6 py-4">300–1.000/Modell</td><td className="px-6 py-4">Ab 300/Modell</td><td className="px-6 py-4">$5–$15</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">OEM (neue Formen)</td><td className="px-6 py-4">500–2.000/Modell</td><td className="px-6 py-4">Ab 500/Modell</td><td className="px-6 py-4">$5–$15 + Formenkosten</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Die kluge Erstbestell-Strategie</h2>
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">Meine Empfehlung für Erstbesteller:</h3>
            <ol className="text-primary-800 space-y-2">
              <li><strong>Bestellen Sie 3–5 ODM-Modelle mit je 50–100 Stück.</strong> Gesamtinvestition: $1.000–$3.000. Genug, um den Markt zu testen.</li>
              <li><strong>Beobachten Sie 2–3 Monate, was sich verkauft.</strong> Welche Modelle gehen schnell? Welche Farben? Welcher Preispunkt?</li>
              <li><strong>Nachbestellen Sie die Bestseller in höherer Stückzahl.</strong> 200–500 Stück der bewährten Modelle zu besseren Stückpreisen.</li>
              <li><strong>Erst dann OEM in Betracht ziehen.</strong> Basierend auf echten Verkaufsdaten, nicht auf Vermutungen.</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Warum niedrige MOQs nicht immer gut sind</h2>
          <p>Vorsicht bei Fabriken, die &quot;kein MOQ&quot; oder extrem niedrige Mengen (unter 20 Stück) anbieten:</p>
          <ul>
            <li>Sie sind wahrscheinlich Handelsunternehmen, die aus Lagerbeständen verkaufen — nicht echte Hersteller.</li>
            <li>Die Stückpreise bei 10–20 Stück sind 50–100 % höher als bei 200+ Stück.</li>
            <li>Individuelle Anpassungen (Logo, Farbe) sind oft nicht möglich bei sehr kleinen Mengen.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was ist die typische MOQ?</h3>
              <p className="text-gray-600">ODM: 100–300 Stück pro Modell. OEM: 300–1.000+. Wir starten ODM bei 50 für Erstkunden.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Sollte ich mit ODM oder OEM starten?</h3>
              <p className="text-gray-600">ODM. Immer. Niedrigere Kosten, schnellere Lieferung, weniger Risiko. Wechseln Sie zu OEM, wenn Sie wissen, was sich verkauft. Mehr dazu in unserem <Link href="/de/blog/oem-vs-odm" className="text-primary-600 hover:underline">OEM vs. ODM Leitfaden</Link>.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Bereit für Ihre erste Bestellung?</h3>
            <p className="text-gray-600 mb-6">Wir helfen Ihnen, die richtige Menge und Modellauswahl für Ihren Start zu finden.</p>
            <Link href="/de/kontakt" className="btn-primary">Bestellberatung mit Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">OEM vs. ODM: Kompletter Leitfaden</h3><p className="text-gray-600 text-sm">Welches Produktionsmodell passt zu Ihnen?</p></Link>
              <Link href="/de/blog/sonnenbrillen-gruendungskosten" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Gründungskosten einer Sonnenbrillenmarke</h3><p className="text-gray-600 text-sm">Jede Kostenposition aufgeschlüsselt.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
