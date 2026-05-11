import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Qualitätskontrolle: Inspektions-Checkliste der Fabrik',
  description: 'Ein Fabrikinhaber teilt die komplette QK-Checkliste für Sonnenbrillen — Glastests, Fassungsinspektion, Scharnierprüfung, UV-Verifizierung und was vor der Produktionsfreigabe zu prüfen ist.',
  keywords: 'Sonnenbrillen Qualitätskontrolle, Brillen Inspektion, Sonnenbrillen Teststandards, QK Checkliste Sonnenbrillen, Sonnenbrillen Defekte',
  alternates: { canonical: '/de/blog/sonnenbrillen-qualitaetskontrolle', languages: { 'en': '/blog/sunglasses-quality-control', 'de': '/de/blog/sonnenbrillen-qualitaetskontrolle' } },
}

export default function SonnenbrillenQualitaetskontrollePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Sonnenbrillen-Qualitätskontrolle: Inspektions-Checkliste der Fabrik", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/sonnenbrillen-qualitaetskontrolle" }, "inLanguage": "de" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Was sollte man bei der Sonnenbrillen-Qualität prüfen?", "acceptedAnswer": { "@type": "Answer", "text": "Wichtigste Prüfpunkte: Glasklarheit (keine Verzerrung, Blasen oder Kratzer), UV400-Schutz-Verifizierung, Scharnierspannung und -gängigkeit, Fassungssymmetrie, Farbkonsistenz innerhalb der Charge, Logo-Platzierungsgenauigkeit, Nasensteg-Ausrichtung und allgemeine Verarbeitungsqualität." } },
          { "@type": "Question", "name": "Was ist AQL-Inspektion für Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "AQL (Acceptable Quality Level) ist eine statistische Stichprobenmethode. Standard: AQL 2,5 für Hauptfehler (funktionale Probleme wie Glasverzerrung, defekte Scharniere) und AQL 4,0 für Nebenfehler (kosmetische Probleme). Bei 1.000 Paar werden ca. 80 zufällig ausgewählt und geprüft." } },
          { "@type": "Question", "name": "Was kostet eine Drittanbieter-Inspektion?", "acceptedAnswer": { "@type": "Answer", "text": "$200–$400 pro Fabrikbesuch durch Unternehmen wie SGS, Bureau Veritas oder AsiaInspection. Sie prüfen Stichproben aus Ihrer Produktion gegen Ihre Spezifikationen. Jeden Cent wert, besonders bei Erstbestellungen." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Qualität</span>
            <span>4. Mai 2026</span><span>•</span><span>13 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sonnenbrillen-Qualitätskontrolle: Inspektions-Checkliste der Fabrik</h1>
          <p className="text-xl text-gray-600">Was wir in unserer Fabrik bei jedem einzelnen Paar prüfen — und was Sie vor der Freigabe Ihrer Produktionscharge prüfen sollten.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Qualitätskontrolle ist der Unterschied zwischen einer Rücksendequote von 2 % und 15 %. In 20 Jahren Produktion habe ich gesehen, wie gute QK eine durchschnittliche Marke rettet und fehlende QK eine großartige Marke zerstört.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Die 8 wichtigsten Prüfpunkte</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-3">Ihre QK-Checkliste:</h3>
            <ol className="text-blue-800 space-y-2">
              <li><strong>Glasklarheit:</strong> Glas vor Text halten — jede Verzerrung oder Welligkeit ist ein Ablehnungsgrund.</li>
              <li><strong>UV400-Verifizierung:</strong> Testzertifikate für jede Produktionscharge anfordern. Stichproben mit UV-Testkarte prüfen.</li>
              <li><strong>Scharnierspannung:</strong> 50× öffnen und schließen. Spannung sollte gleichmäßig bleiben. Locker nach 20 Zyklen = ablehnen.</li>
              <li><strong>Fassungssymmetrie:</strong> Flach auf den Tisch legen. Beide Seiten müssen gleichmäßig aufliegen. Kippeln = ablehnen.</li>
              <li><strong>Farbkonsistenz:</strong> 5 zufällige Paare nebeneinanderlegen. Farbe muss einheitlich sein. Farbabweichungen in derselben Charge = Problem.</li>
              <li><strong>Logo-Qualität:</strong> Scharf, zentriert, haltbar. Vorsichtig mit Fingernagel kratzen — wenn es sich löst, ist die Haftung schlecht.</li>
              <li><strong>Nasensteg-Ausrichtung:</strong> Aufsetzen und auf gleichmäßigen Sitz prüfen. Schiefes Aufliegen = schlechte Ausrichtung.</li>
              <li><strong>Verarbeitungsqualität:</strong> Mit dem Finger über alle Kanten fahren. Rauheit, scharfe Stellen oder Grate = Nacharbeit nötig.</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">AQL-Inspektion erklärt</h2>
          <p>AQL (Acceptable Quality Level) ist der Industriestandard für Stichproben-Qualitätskontrolle:</p>
          <ul>
            <li><strong>AQL 2,5 für Hauptfehler:</strong> Funktionale Probleme — Glasverzerrung, defekte Scharniere, fehlender UV-Schutz</li>
            <li><strong>AQL 4,0 für Nebenfehler:</strong> Kosmetische Probleme — kleine Kratzer, leichte Farbabweichung, minimale Unebenheiten</li>
          </ul>
          <p>Bei einer Charge von 1.000 Paar werden ca. 80 zufällig ausgewählt und geprüft. Liegen die Fehler unter dem AQL-Schwellenwert, wird die Charge freigegeben.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Wann eine Drittanbieter-Inspektion beauftragen?</h2>
          <ul>
            <li><strong>Erste Bestellung bei einer neuen Fabrik:</strong> Immer. Kein Verhandlungsspielraum.</li>
            <li><strong>Bestellungen über $5.000:</strong> Empfohlen. Die $200–400 Inspektionskosten sind eine Versicherung.</li>
            <li><strong>Folgebestellungen bei bewährtem Partner:</strong> Optional. Wenn die erste Lieferung perfekt war, können Sie auf Fotos und eigene Stichproben vertrauen.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was sollte ich bei der Qualität prüfen?</h3>
              <p className="text-gray-600">Glasklarheit, UV400-Schutz, Scharnierspannung, Fassungssymmetrie, Farbkonsistenz, Logo-Qualität, Nasensteg-Ausrichtung und Gesamtverarbeitung. Halten Sie jedes Glas vor Text — Verzerrung ist das häufigste und schlimmste Problem.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was kostet eine externe Inspektion?</h3>
              <p className="text-gray-600">$200–$400 pro Fabrikbesuch. SGS, Bureau Veritas und AsiaInspection sind die gängigsten Anbieter. Lohnt sich bei jeder Erstbestellung und bei Aufträgen über $5.000.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Fragen zur Qualitätskontrolle?</h3>
            <p className="text-gray-600 mb-6">Wir begrüßen Drittanbieter-Inspektionen und stellen QK-Berichte für jede Charge bereit.</p>
            <Link href="/de/kontakt" className="btn-primary">QK-Fragen an Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/fda-ce-zertifizierung-sonnenbrillen" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">FDA- & CE-Zertifizierung</h3><p className="text-gray-600 text-sm">Compliance-Anforderungen für alle Märkte.</p></Link>
              <Link href="/de/blog/sonnenbrillen-hersteller-finden" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Zuverlässigen Hersteller finden</h3><p className="text-gray-600 text-sm">10 Kriterien, die Qualität vorhersagen.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
