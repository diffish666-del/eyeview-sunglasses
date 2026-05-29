import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Beschichtungen: Spiegel, Antireflex, Hydrophob & mehr',
  description: 'Ein Fabrikinhaber erklärt alle Sonnenbrillen-Beschichtungstypen -- Spiegel, AR, hydrophob, oleophob, Anti-Beschlag, Hartbeschichtung, Blaulichtfilter. Echte Kosten und welche sich kombinieren lassen.',
  keywords: 'Sonnenbrillen Beschichtung Typen, Spiegelbeschichtung, Antireflex Beschichtung, hydrophobe Beschichtung, oleophobe Beschichtung',
  alternates: { canonical: '/de/blog/sonnenbrillen-beschichtungen-ratgeber', languages: { 'en': '/blog/sunglasses-coating-guide', 'de': '/de/blog/sonnenbrillen-beschichtungen-ratgeber' } },
}

export default function SonnenbrillenBeschichtungenPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Sonnenbrillen-Beschichtungen: Spiegel, Antireflex, Hydrophob & mehr", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/sonnenbrillen-beschichtungen-ratgeber" }, "inLanguage": "de" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Welche Beschichtungstypen gibt es für Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "Die sieben Haupttypen sind: Spiegelbeschichtung (Blendreduktion und Optik), Antireflex-Beschichtung (eliminiert Rückseitenblendung), hydrophobe Beschichtung (weist Wasser ab), oleophobe Beschichtung (widersteht Fingerabdrücken), Anti-Beschlag-Beschichtung, Hartbeschichtung (Kratzfestigkeit) und Blaulichtfilter. Qualitäts-Sonnenbrillen verwenden typischerweise 3-4 dieser Beschichtungen übereinander." } },
          { "@type": "Question", "name": "Was kosten Sonnenbrillen-Beschichtungen pro Paar?", "acceptedAnswer": { "@type": "Answer", "text": "Im Fabrikmaßstab: Hartbeschichtung $0,15, Antireflex $0,60-$1,50, hydrophob $0,20-$0,50, oleophob $0,30-$0,60, Anti-Beschlag $0,40-$0,80, Blaulichtfilter $0,50-$1,20, Premium-Spiegelbeschichtung $1,80-$3,00. Ein vollständiges Premium-Paket aus 4-5 Beschichtungen addiert typischerweise $2,50-$5,00 pro Paar." } },
          { "@type": "Question", "name": "Kann man mehrere Beschichtungen kombinieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja -- und das sollten Sie. Die meisten Beschichtungen sind für Schichtung konzipiert. Die Standardreihenfolge von der Glasoberfläche nach außen: Hartbeschichtung (Basis), dann AR, dann Spiegel (falls zutreffend), dann hydrophob und oleophob als äußerste Schichten. Anti-Beschlag wird auf die Innenseite aufgetragen." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Technologie</span>
            <span>3. Mai 2026</span><span>•</span><span>12 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sonnenbrillen-Beschichtungen: Spiegel, Antireflex, Hydrophob &amp; mehr</h1>
          <p className="text-xl text-gray-600">Die unsichtbare Technologie, die gute Sonnenbrillen von großartigen unterscheidet. Jede Beschichtung erklärt -- mit echten Fabrikpreisen.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Beschichtungen sind das, was eine $5-Sonnenbrille von einer $50-Sonnenbrille unterscheidet -- oft mehr als das Fassungsmaterial. Die richtigen Beschichtungen verbessern Sicht, Haltbarkeit und Kundenzufriedenheit erheblich. Hier ist alles, was Sie wissen müssen.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Die 7 wichtigsten Beschichtungstypen</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Hartbeschichtung (Hard Coat)</h3>
          <p>Die Basis aller Beschichtungspakete. Verbessert die Kratzfestigkeit um das 3-5-fache.</p>
          <ul><li><strong>Kosten:</strong> $0,15-$0,40 pro Paar</li><li><strong>Haltbarkeit:</strong> 2-3 Jahre bei normaler Nutzung</li><li><strong>Empfehlung:</strong> Immer einschließen. Nicht verhandelbar.</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Antireflex-Beschichtung (AR)</h3>
          <p>Eliminiert Rückseitenblendung -- Licht, das von der Glasinnenseite in die Augen reflektiert wird. Besonders wichtig bei hellen Lichtverhältnissen.</p>
          <ul><li><strong>Kosten:</strong> $0,60-$1,50 pro Paar</li><li><strong>Empfehlung:</strong> Ab $50 Einzelhandel einschließen. Kunden bemerken den Unterschied sofort.</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Spiegelbeschichtung (Mirror/Flash)</h3>
          <p>Der auffälligste Beschichtungstyp. Reflektiert Licht von der Außenseite und reduziert die Lichtdurchlässigkeit zusätzlich. Beliebt bei Sport- und Lifestyle-Marken.</p>
          <ul><li><strong>Kosten:</strong> $0,80-$3,00 pro Paar (je nach Qualität und Farbe)</li><li><strong>Farben:</strong> Blau, Gold, Silber, Grün, Rosa, Regenbogen</li><li><strong>Haltbarkeit:</strong> 1-3 Jahre. Günstige Spiegelbeschichtungen blättern schneller ab.</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Hydrophobe Beschichtung</h3>
          <p>Wasser perlt ab wie von einem Lotusblatt. Ideal für Sport, Outdoor und Regenwetter.</p>
          <ul><li><strong>Kosten:</strong> $0,20-$0,50 pro Paar</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Oleophobe Beschichtung</h3>
          <p>Widersteht Fingerabdrücken und Hautölen. Das Glas bleibt länger sauber -- ein Kundenmagnet.</p>
          <ul><li><strong>Kosten:</strong> $0,30-$0,60 pro Paar</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Anti-Beschlag-Beschichtung</h3>
          <p>Verhindert Kondensation beim Wechsel von kalt zu warm. Wird auf die Glasinnenseite aufgetragen.</p>
          <ul><li><strong>Kosten:</strong> $0,40-$0,80 pro Paar</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">7. Blaulichtfilter</h3>
          <p>Blockiert hochenergetisches blaues Licht (HEV). Hauptsächlich relevant für Brillen, aber zunehmend auch bei Sonnenbrillen als Marketing-Feature gefragt.</p>
          <ul><li><strong>Kosten:</strong> $0,50-$1,20 pro Paar</li></ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">Empfohlene Beschichtungspakete</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Paket</th><th className="px-6 py-4 text-left">Beschichtungen</th><th className="px-6 py-4 text-left">Kosten/Paar</th><th className="px-6 py-4 text-left">Für</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Basis</td><td className="px-6 py-4">Hart + UV400</td><td className="px-6 py-4">$0,15-$0,40</td><td className="px-6 py-4">Budget-Marken</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Standard</td><td className="px-6 py-4">Hart + AR + hydrophob</td><td className="px-6 py-4">$1,00-$2,40</td><td className="px-6 py-4">Mittelklasse</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Premium</td><td className="px-6 py-4">Hart + AR + hydrophob + oleophob</td><td className="px-6 py-4">$1,50-$3,00</td><td className="px-6 py-4">Premium-Marken</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Sport</td><td className="px-6 py-4">Hart + Spiegel + hydrophob + Anti-Beschlag</td><td className="px-6 py-4">$1,60-$4,30</td><td className="px-6 py-4">Sportmarken</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Wie lange halten Beschichtungen?</h3>
              <p className="text-gray-600">Hartbeschichtung und AR: 2-3 Jahre. Hydrophob/oleophob: 1-2 Jahre. Spiegelbeschichtung: 1-3 Jahre je nach Qualität. Günstige Beschichtungen degradieren schneller -- sparen Sie hier nicht.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Kann man Beschichtungen kombinieren?</h3>
              <p className="text-gray-600">Ja, die meisten sind für Schichtung konzipiert. Reihenfolge: Hart → AR → Spiegel → hydrophob/oleophob (außen). Anti-Beschlag auf der Innenseite. Einzige Einschränkung: Vollspiegel + AR auf derselben Seite funktioniert nicht.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Brauchen Sie Beratung zu Beschichtungen?</h3>
            <p className="text-gray-600 mb-6">Wir helfen Ihnen, das optimale Beschichtungspaket für Ihre Marke und Ihren Preispunkt zusammenzustellen.</p>
            <Link href="/de/kontakt" className="btn-primary">Beschichtungsberatung mit Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/sonnenbrillen-glaeser-ratgeber" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen-Gläser: Kompletter Ratgeber</h3><p className="text-gray-600 text-sm">Glasmaterialien, Farben und Polarisation erklärt.</p></Link>
              <Link href="/de/blog/uv400-vs-polarisiert" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">UV400 vs. Polarisiert</h3><p className="text-gray-600 text-sm">Der Unterschied zwischen UV-Schutz und Blendreduktion.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
