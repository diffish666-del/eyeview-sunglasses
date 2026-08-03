import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nachhaltige Sonnenbrillen-Herstellung: Umweltfreundliche Materialien & Prozesse',
  description: 'Ein Fabrikinhaber erklärt nachhaltige Sonnenbrillenherstellung -- Bio-Acetat, recyceltes Nylon, Ozeanplastik, umweltfreundliche Verpackung und was „nachhaltig" in der Brillenproduktion wirklich bedeutet.',
  keywords: 'nachhaltige Sonnenbrillen, umweltfreundliche Brillen Herstellung, recycelte Sonnenbrillen, Bio-Acetat Sonnenbrillen, Ozeanplastik Sonnenbrillen',
  alternates: { canonical: '/de/blog/nachhaltige-sonnenbrillen-herstellung', languages: { 'en': '/blog/sustainable-sunglasses-manufacturing', 'de': '/de/blog/nachhaltige-sonnenbrillen-herstellung' } },
}

export default function NachhaltigeSonnenbrillenPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Nachhaltige Sonnenbrillen-Herstellung: Umweltfreundliche Materialien & Prozesse", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/nachhaltige-sonnenbrillen-herstellung" }, "inLanguage": "de" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Woraus werden nachhaltige Sonnenbrillen hergestellt?", "acceptedAnswer": { "@type": "Answer", "text": "Die gängigsten nachhaltigen Materialien sind: Bio-Acetat (aus Baumwollsamen und Holzzellstoff statt Erdöl), recyceltes Nylon/TR90 (aus Ozeanplastik oder Post-Consumer-Abfall), recycelte Metalle (Aluminium, Edelstahl), Bambus und Holz (für Bügel oder komplette Fassungen) und biobasierte Kunststoffe wie Rizinusöl-basiertes Nylon." } },
          { "@type": "Question", "name": "Wie viel mehr kosten nachhaltige Sonnenbrillen in der Herstellung?", "acceptedAnswer": { "@type": "Answer", "text": "Nachhaltige Materialien addieren typischerweise 10-25 % zu den Herstellungskosten. Bio-Acetat kostet ca. 15 % mehr als herkömmliches. Recyceltes Nylon ist 10-20 % teurer als neues. Allerdings kann der Einzelhandelsaufschlag für 'nachhaltig' 30-50 % höher liegen, was es zu einer profitablen Positionierungsstrategie macht." } },
          { "@type": "Question", "name": "Ist Bio-Acetat so haltbar wie normales Acetat?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Bio-Acetat (z.B. Mazzucchelli M49 oder Eastman Acetate Renew) ist in Optik, Haptik und Haltbarkeit von herkömmlichem Acetat nicht zu unterscheiden. Es wird identisch verarbeitet und hat dieselben mechanischen Eigenschaften. Der einzige Unterschied: die Rohstoffquelle." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Nachhaltigkeit</span>
            <span>4. Mai 2026</span><span>•</span><span>12 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nachhaltige Sonnenbrillen-Herstellung: Umweltfreundliche Materialien &amp; Prozesse</h1>
          <p className="text-xl text-gray-600">Was &quot;nachhaltig&quot; in der Sonnenbrillenherstellung wirklich bedeutet -- ehrliche Kostenvergleiche, echte Materialoptionen und wo Greenwashing aufhört und echte Nachhaltigkeit anfängt.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">12 % unserer Kunden bestellen jetzt mindestens ein Modell in nachhaltigen Materialien -- ein Anstieg von 3 % vor drei Jahren. Nachhaltigkeit ist kein Nischentrend mehr. Es ist Mainstream. Aber es gibt viel Greenwashing in der Branche, und als Fabrikinhaber sehe ich beide Seiten.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Nachhaltige Materialien im Überblick</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Bio-Acetat</h3>
          <p>Hergestellt aus Baumwollsamen und Holzzellstoff statt aus Erdöl. Optisch und haptisch identisch mit herkömmlichem Acetat. Mazzucchelli M49 und Eastman Acetate Renew sind die führenden Marken.</p>
          <ul>
            <li><strong>Mehrkosten:</strong> ca. 15 % mehr als herkömmliches Acetat</li>
            <li><strong>Haltbarkeit:</strong> Identisch</li>
            <li><strong>Verfügbarkeit:</strong> Gut -- die meisten Farben und Muster verfügbar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recyceltes Nylon / TR90</h3>
          <p>Aus Ozeanplastik, Fischernetzen oder Post-Consumer-Abfall gewonnen. Besonders beliebt bei Sport- und Outdoor-Marken mit Nachhaltigkeitspositionierung.</p>
          <ul>
            <li><strong>Mehrkosten:</strong> 10-20 % mehr als neues Nylon</li>
            <li><strong>Haltbarkeit:</strong> Identisch mit neuem TR90</li>
            <li><strong>Marketing-Wert:</strong> Hoch -- &quot;aus Ozeanplastik&quot; ist eine starke Geschichte</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Holz & Bambus</h3>
          <p>Natürlich, erneuerbar, einzigartiger Look. Aber: schwerer, weniger flexibel und aufwendiger in der Produktion. Am besten für Nischenmarken mit starker Öko-Positionierung.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recycelte Metalle</h3>
          <p>Edelstahl und Aluminium lassen sich gut recyceln. Recyceltes Titan ist ebenfalls verfügbar, aber teurer.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Nachhaltige Verpackung</h2>
          <p>Die Fassungsmaterialien sind nur die halbe Geschichte. Nachhaltige Verpackung vervollständigt das Bild:</p>
          <ul>
            <li><strong>Recycelter Karton:</strong> Für Einzelhandelsboxen, +10 % Kosten</li>
            <li><strong>Kork-Etuis:</strong> Natürlich, erneuerbar, einzigartiger Look, $2-4 pro Stück</li>
            <li><strong>Bio-Baumwoll-Beutel:</strong> Statt Mikrofaser, $0,30-0,60 pro Stück</li>
            <li><strong>Sojabasierte Druckfarben:</strong> Für Karton und Karten, minimaler Aufpreis</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Die ehrliche Wahrheit über Nachhaltigkeit</h3>
            <p className="text-green-800">Keine Sonnenbrille ist zu 100 % nachhaltig. Produktion verbraucht Energie, Versand erzeugt CO₂, und selbst Bio-Acetat muss chemisch verarbeitet werden. Aber jeder Schritt in Richtung nachhaltigerer Materialien und Prozesse ist besser als nichts. Seien Sie ehrlich in Ihrem Marketing -- Kunden durchschauen Greenwashing.</p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Wie viel mehr kosten nachhaltige Materialien?</h3>
              <p className="text-gray-600">10-25 % Aufpreis in der Herstellung. Aber der Einzelhandelsaufschlag für &quot;nachhaltig&quot; kann 30-50 % höher liegen. Es ist also profitabel, nicht nur ethisch.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Ist Bio-Acetat so gut wie normales?</h3>
              <p className="text-gray-600">Ja. Identische Optik, Haptik und Haltbarkeit. Wird identisch verarbeitet. Der einzige Unterschied ist die Rohstoffquelle -- pflanzenbasiert statt erdölbasiert.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Nachhaltige Sonnenbrillen produzieren?</h3>
            <p className="text-gray-600 mb-6">Wir bieten Bio-Acetat, recyceltes Nylon und nachhaltige Verpackungsoptionen. Sprechen Sie mit uns über Ihre Nachhaltigkeitsziele.</p>
            <Link href="/de/kontakt" className="btn-primary">Nachhaltigkeitsberatung mit Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/vergleich-rahmenmaterialien" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">TR90 vs. Acetat vs. Metall</h3><p className="text-gray-600 text-sm">Alle Materialien im Vergleich -- inkl. nachhaltige Optionen.</p></Link>
              <Link href="/de/blog/individuelle-sonnenbrillen-verpackung" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Individuelle Verpackung</h3><p className="text-gray-600 text-sm">Nachhaltige Verpackungsoptionen für Ihre Marke.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
