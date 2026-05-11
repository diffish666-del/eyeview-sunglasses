import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TR90 vs. Acetat vs. Metall: Welches Fassungsmaterial passt zu Ihrer Marke?',
  description: 'Ein Fabrikinhaber vergleicht TR90, Acetat und Metall-Sonnenbrillen — echte Kostendaten, Gewichtsvergleiche, Haltbarkeitstests und welches Material für welche Markenstrategie am besten funktioniert.',
  keywords: 'Sonnenbrillen Fassungsmaterial Vergleich, TR90 Sonnenbrillen, Acetat Sonnenbrillen, Metall Sonnenbrillen, TR90 vs Acetat, Fassungsmaterial Kosten',
  alternates: { canonical: '/de/blog/vergleich-rahmenmaterialien', languages: { 'en': '/blog/frame-material-comparison', 'de': '/de/blog/vergleich-rahmenmaterialien' } },
}

export default function VergleichRahmenmaterialienPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "TR90 vs. Acetat vs. Metall: Welches Fassungsmaterial passt zu Ihrer Marke?", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Ein Fabrikinhaber vergleicht TR90, Acetat und Metall-Fassungen — Kosten, Gewicht, Haltbarkeit und Markenpassung.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/vergleich-rahmenmaterialien" }, "inLanguage": "de" })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Was ist TR90 und warum wird es für Sonnenbrillen verwendet?", "acceptedAnswer": { "@type": "Answer", "text": "TR90 ist ein thermoplastisches Polyamid (nylonbasiertes Polymer), ursprünglich für Medizin und Militär entwickelt. Es ist extrem leicht — etwa 15–20 Gramm für eine komplette Fassung — und unter normaler Nutzung praktisch unzerbrechlich. Es ist das Go-to-Material für Sport- und Lifestyle-Sonnenbrillen, weil es biegt statt bricht, schweiß- und chemikalienresistent ist und $3–8 pro Fassung im Großhandel kostet." } },
          { "@type": "Question", "name": "Ist Acetat besser als TR90 für Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "Es hängt von Ihrer Markenpositionierung ab. Acetat sieht und fühlt sich hochwertiger an — reichere Farben, tiefere Muster, höheres Gewicht das Qualität signalisiert. TR90 ist leichter, haltbarer und günstiger. Für Mode- oder Luxusmarken gewinnt Acetat. Für Sport, Outdoor oder preisbewusste Kunden ist TR90 die bessere Wahl." } },
          { "@type": "Question", "name": "Was kosten verschiedene Fassungsmaterialien im Großhandel?", "acceptedAnswer": { "@type": "Answer", "text": "Echte Fabrikpreise: TR90-Fassungen $3–8 pro Paar, Acetat-Fassungen $5–11, Metallfassungen $8–22 je nach Legierung und Konstruktion. Das sind reine Fassungskosten — rechnen Sie $1,50–8 für Gläser hinzu." } },
          { "@type": "Question", "name": "Welches Fassungsmaterial ist am haltbarsten?", "acceptedAnswer": { "@type": "Answer", "text": "TR90 gewinnt die Haltbarkeitskrone. Es ist flexibel (biegt statt bricht), leicht, chemikalienresistent und behält seine Form bei Hitze besser als Acetat. Metallfassungen sind ebenfalls langlebig, aber anfällig für Korrosion. Acetat kann bei extremer Hitze verformen, ist aber bei normaler Pflege jahrelang haltbar." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Materialien</span>
            <span>3. Mai 2026</span>
            <span>•</span>
            <span>13 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">TR90 vs. Acetat vs. Metall: Welches Fassungsmaterial passt zu Ihrer Marke?</h1>
          <p className="text-xl text-gray-600">Drei Materialien, drei völlig verschiedene Welten. Hier erfahren Sie, welches für Ihre Marke am besten funktioniert — mit echten Fabrikzahlen.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Inhaltsverzeichnis</h2>
          <ul className="space-y-2">
            <li><a href="#tr90" className="text-primary-600 hover:underline">TR90: Der Sport-Champion</a></li>
            <li><a href="#acetat" className="text-primary-600 hover:underline">Acetat: Der Premium-Klassiker</a></li>
            <li><a href="#metall" className="text-primary-600 hover:underline">Metall: Der Zeitlose</a></li>
            <li><a href="#vergleich" className="text-primary-600 hover:underline">Direktvergleich: Alle Faktoren auf einen Blick</a></li>
            <li><a href="#welches-material" className="text-primary-600 hover:underline">Welches Material für welche Marke?</a></li>
            <li><a href="#fragen" className="text-primary-600 hover:underline">Häufig gestellte Fragen</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">&quot;Jacky, welches Material soll ich nehmen?&quot; — nach &quot;Was ist der Unterschied zwischen OEM und ODM?&quot; ist das die Frage, die ich am häufigsten höre. Und die Antwort hängt davon ab, was für eine Marke Sie aufbauen wollen.</p>

          <h2 id="tr90" className="text-3xl font-bold mt-16 mb-6">TR90: Der Sport-Champion</h2>
          <p>TR90 ist ein thermoplastisches Polyamid — ursprünglich für Medizin und Militär entwickelt. Es ist das leichteste und flexibelste aller Fassungsmaterialien. Wenn Sie eine TR90-Fassung biegen, springt sie in ihre Originalform zurück. Versuchen Sie das mit Acetat — es bricht.</p>
          <ul>
            <li><strong>Gewicht:</strong> 15–20 g für eine komplette Fassung (halb so viel wie Acetat)</li>
            <li><strong>Kosten:</strong> $3–8 pro Fassung im Großhandel</li>
            <li><strong>Haltbarkeit:</strong> Praktisch unzerbrechlich. Biegt statt zu brechen. Schweiß- und chemikalienresistent.</li>
            <li><strong>Designfreiheit:</strong> Begrenzt — TR90 wird spritzgegossen, was die Farbpalette und Muster einschränkt. Keine Schildpatt-Optik oder Marmorierung möglich.</li>
            <li><strong>Haptik:</strong> Leicht, glatt, eher technisch als luxuriös</li>
            <li><strong>Am besten für:</strong> Sportmarken, Outdoor, aktiver Lebensstil, Budget bis Mittelklasse ($15–$60 Einzelhandel)</li>
          </ul>

          <h2 id="acetat" className="text-3xl font-bold mt-16 mb-6">Acetat: Der Premium-Klassiker</h2>
          <p>Acetat ist ein pflanzliches Material (aus Baumwollsamen und Holzzellstoff). Es ist das, was Ihnen in den Sinn kommt, wenn Sie an &quot;Premium-Sonnenbrillen&quot; denken — tiefe, leuchtende Farben, Schildpattmuster, eine gewisse Schwere, die Qualität signalisiert.</p>
          <ul>
            <li><strong>Gewicht:</strong> 30–45 g für eine komplette Fassung</li>
            <li><strong>Kosten:</strong> $5–11 pro Fassung (Standard-Acetat), $8–16 (italienisches Mazzucchelli-Acetat)</li>
            <li><strong>Haltbarkeit:</strong> Gut bei normaler Pflege. Kann bei extremer Hitze verformen (nicht im Auto liegen lassen). Kratzempfindlicher als TR90.</li>
            <li><strong>Designfreiheit:</strong> Hervorragend — unbegrenzte Farben, Muster, Transparenzen, Marmorierungen. Jede Platte ist einzigartig.</li>
            <li><strong>Haptik:</strong> Warm, schwer, luxuriös. &quot;Fühlt sich teuer an&quot;</li>
            <li><strong>Am besten für:</strong> Mode, Premium, Luxus, Heritage-Marken ($50–$300+ Einzelhandel)</li>
          </ul>

          <h2 id="metall" className="text-3xl font-bold mt-16 mb-6">Metall: Der Zeitlose</h2>
          <p>Metallfassungen umfassen verschiedene Legierungen — Edelstahl, Titanium, Monel, Berylliumkupfer. Die klassischen Aviator- und Pilotenbrillen-Designs sind fast immer Metall.</p>
          <ul>
            <li><strong>Gewicht:</strong> 20–40 g je nach Legierung (Titan am leichtesten)</li>
            <li><strong>Kosten:</strong> $8–22 pro Fassung (Edelstahl günstigster, Titan teuerster)</li>
            <li><strong>Haltbarkeit:</strong> Langlebig, aber anfällig für Verbiegen und Korrosion (außer Titan und Edelstahl)</li>
            <li><strong>Designfreiheit:</strong> Gut für filigrane, dünne Designs. Weniger Farboptionen als Acetat.</li>
            <li><strong>Haptik:</strong> Kühl, dünn, elegant, technisch</li>
            <li><strong>Am besten für:</strong> Klassisch-elegante Marken, Business, Pilotenbrillen, Minimalismus ($60–$250+ Einzelhandel)</li>
          </ul>

          <h2 id="vergleich" className="text-3xl font-bold mt-16 mb-6">Direktvergleich: Alle Faktoren auf einen Blick</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Faktor</th>
                  <th className="px-6 py-4 text-left">TR90</th>
                  <th className="px-6 py-4 text-left">Acetat</th>
                  <th className="px-6 py-4 text-left">Metall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Kosten/Fassung</td><td className="px-6 py-4">$3–$8</td><td className="px-6 py-4">$5–$11</td><td className="px-6 py-4">$8–$22</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Gewicht</td><td className="px-6 py-4">15–20 g</td><td className="px-6 py-4">30–45 g</td><td className="px-6 py-4">20–40 g</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Haltbarkeit</td><td className="px-6 py-4">Hervorragend</td><td className="px-6 py-4">Gut</td><td className="px-6 py-4">Gut–Hervorragend</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Farboptionen</td><td className="px-6 py-4">Begrenzt</td><td className="px-6 py-4">Unbegrenzt</td><td className="px-6 py-4">Begrenzt</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Premium-Haptik</td><td className="px-6 py-4">Mittel</td><td className="px-6 py-4">Hoch</td><td className="px-6 py-4">Hoch</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Positionierung</td><td className="px-6 py-4">Sport/Lifestyle</td><td className="px-6 py-4">Mode/Premium</td><td className="px-6 py-4">Klassisch/Elegant</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Mindestbestellmenge</td><td className="px-6 py-4">200–500</td><td className="px-6 py-4">300–500</td><td className="px-6 py-4">300–1.000</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="welches-material" className="text-3xl font-bold mt-16 mb-6">Welches Material für welche Marke?</h2>
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">Meine Empfehlung:</h3>
            <ul className="text-primary-800 space-y-2">
              <li><strong>Sportmarke / Outdoor / Fitness:</strong> TR90. Leicht, robust, erschwinglich. Ihre Kunden wollen Funktion, nicht Ästhetik.</li>
              <li><strong>Modemarke / Lifestyle / DTC:</strong> Acetat. Die Farbvielfalt und Premium-Haptik rechtfertigen den Aufpreis. Ihre Kunden wollen, dass die Brille sich besonders anfühlt.</li>
              <li><strong>Klassisch / Business / Minimalismus:</strong> Metall. Dünn, elegant, zeitlos. Pilotenbrillen, runde Designs, filigrane Linien.</li>
              <li><strong>Budget-Marke / Massenmarkt:</strong> TR90 für solide Qualität zum kleinen Preis. Oder gemischte Materialien (Metall-Bügel + TR90-Frontpartie) für einen Premium-Look bei Budget-Kosten.</li>
            </ul>
          </div>

          <h2 id="fragen" className="text-3xl font-bold mt-16 mb-6">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was ist TR90?</h3>
              <p className="text-gray-600">Ein thermoplastisches Polyamid — extrem leicht (15–20 g), flexibel und praktisch unzerbrechlich. Das Go-to-Material für Sport- und Lifestyle-Sonnenbrillen. Kostet $3–8 pro Fassung im Großhandel.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Ist Acetat besser als TR90?</h3>
              <p className="text-gray-600">Für Mode und Premium: ja. Acetat bietet reichere Farben, tiefere Muster und eine luxuriösere Haptik. Für Sport und Budget: nein. TR90 ist leichter, haltbarer und günstiger. Es kommt auf die Markenpositionierung an.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Welches Material ist am haltbarsten?</h3>
              <p className="text-gray-600">TR90 gewinnt bei der Haltbarkeit. Es biegt statt zu brechen, widersteht Chemikalien und Schweiß und behält bei Hitze besser seine Form als Acetat. Für den Alltagsgebrauch sind alle drei Materialien langlebig genug.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Nicht sicher, welches Material passt?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Senden Sie mir eine kurze Beschreibung Ihrer Marke und Zielgruppe, und ich empfehle Ihnen das passende Material — kostenlos und unverbindlich.</p>
            <Link href="/de/kontakt" className="btn-primary">Material-Beratung mit Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/sonnenbrillen-glaeser-ratgeber" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen-Gläser: Kompletter Ratgeber</h3>
                <p className="text-gray-600 text-sm">CR-39, Polycarbonat, TAC oder Mineralglas — welches Glas passt zu welchem Material?</p>
              </Link>
              <Link href="/de/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs. ODM: Kompletter Leitfaden</h3>
                <p className="text-gray-600 text-sm">Material gewählt? Jetzt entscheiden, wie Sie produzieren lassen.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
