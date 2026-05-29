import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Preisstrategie: Vom Fabrikpreis zum Einzelhandelspreis',
  description: 'Ein Fabrikinhaber enthüllt die echte Wirtschaft der Sonnenbrillenpreisgestaltung -- Fabrikkosten, Großhandelsaufschlag, Einzelhandelsmargen und Preisstrategien für neue und etablierte Marken.',
  keywords: 'Sonnenbrillen Preisstrategie, Brillen Aufschlag, Großhandel Sonnenbrillen Preise, Sonnenbrillen Gewinnmarge, Einzelhandelspreis Strategie',
  alternates: { canonical: '/de/blog/sonnenbrillen-preisstrategie', languages: { 'en': '/blog/sunglasses-pricing-strategy', 'de': '/de/blog/sonnenbrillen-preisstrategie' } },
}

export default function SonnenbrillenPreisstrategiePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Sonnenbrillen-Preisstrategie: Vom Fabrikpreis zum Einzelhandelspreis", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/sonnenbrillen-preisstrategie" }, "inLanguage": "de" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Was ist der typische Aufschlag bei Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "Die typische Aufschlagskette: Fabrikkosten × 2-3 = Großhandelspreis × 2-2,5 = Einzelhandelspreis. Ein Paar, das $5 in der Herstellung kostet, wird für $12-15 im Großhandel und $25-35 im Einzelhandel verkauft. Direct-to-Consumer-Marken (DTC) überspringen den Großhandel und verkaufen dasselbe $5-Paar für $25-45." } },
          { "@type": "Question", "name": "Was kosten Sonnenbrillen in der Herstellung?", "acceptedAnswer": { "@type": "Answer", "text": "ODM: $3-8 pro Paar (inkl. polarisierte Gläser und Basisverpackung). OEM individuell: $5-15+ pro Paar. Premium-Materialien (italienisches Acetat, Zeiss-Gläser) können $15-30 pro Paar erreichen. Das sind FOB-Fabrikkosten -- addieren Sie $2-5 pro Paar für Versand, Zoll und Verpackung." } },
          { "@type": "Question", "name": "Zu welchem Preis sollte ich meine Sonnenbrillen verkaufen?", "acceptedAnswer": { "@type": "Answer", "text": "Ziel: 60-70 % Bruttomarge bei DTC. Wenn Ihre Gesamtkosten (Produkt + Versand + Verpackung) $10 pro Paar betragen, verkaufen Sie für mindestens $30 (3× Aufschlag). Für $50+ Einzelhandel brauchen Sie polarisierte Gläser, ordentliche Verpackung und eine überzeugende Markengeschichte." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Business</span>
            <span>4. Mai 2026</span><span>•</span><span>12 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sonnenbrillen-Preisstrategie: Vom Fabrikpreis zum Einzelhandelspreis</h1>
          <p className="text-xl text-gray-600">Die Zahlen, die Ihre Großhandels-Vertreter nicht teilen. Ein Blick hinter die Kulissen der Sonnenbrillen-Ökonomie -- direkt vom Fabrikinhaber.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Die meisten Sonnenbrillen, die für $150 im Laden verkauft werden, kosten $10-20 in der Herstellung. Das ist kein Geheimnis -- es ist die Realität einer Branche, die von Markenwahrnehmung lebt. Aber wie finden Sie den richtigen Preis für Ihre Marke?</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Die Aufschlagskette</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Fabrikkosten → Großhandel → Einzelhandel</h3>
            <ul className="text-blue-800 space-y-1">
              <li><strong>Fabrikkosten (FOB):</strong> $3-$15 pro Paar (je nach Material und Modell)</li>
              <li><strong>Gesamtkosten (gelandet):</strong> Fabrikkosten + 20-30 % (Versand, Zoll, Verpackung)</li>
              <li><strong>Großhandelspreis:</strong> Gesamtkosten × 2-3</li>
              <li><strong>Einzelhandelspreis:</strong> Großhandel × 2-2,5</li>
              <li><strong>DTC-Preis:</strong> Gesamtkosten × 4-8 (Sie behalten die volle Marge)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Rechenbeispiel: ODM-Sonnenbrille</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Position</th><th className="px-6 py-4 text-left">Budget</th><th className="px-6 py-4 text-left">Mittelklasse</th><th className="px-6 py-4 text-left">Premium</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Fabrikkosten</td><td className="px-6 py-4">$3,50</td><td className="px-6 py-4">$6,00</td><td className="px-6 py-4">$12,00</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Verpackung</td><td className="px-6 py-4">$0,30</td><td className="px-6 py-4">$2,00</td><td className="px-6 py-4">$5,00</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Versand + Zoll</td><td className="px-6 py-4">$1,00</td><td className="px-6 py-4">$1,50</td><td className="px-6 py-4">$2,00</td></tr>
                <tr className="bg-gray-50 font-bold"><td className="px-6 py-4">Gesamtkosten</td><td className="px-6 py-4">$4,80</td><td className="px-6 py-4">$9,50</td><td className="px-6 py-4">$19,00</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">DTC-Einzelhandel (5×)</td><td className="px-6 py-4">$24</td><td className="px-6 py-4">$49</td><td className="px-6 py-4">$95</td></tr>
                <tr className="bg-primary-50 font-bold"><td className="px-6 py-4">Bruttomarge (DTC)</td><td className="px-6 py-4">80 %</td><td className="px-6 py-4">81 %</td><td className="px-6 py-4">80 %</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Preispositionierung: Wo stehen Sie?</h2>
          <ul>
            <li><strong>Budget ($15-$40):</strong> ODM, TAC-Gläser, einfache Verpackung. Volumen-Strategie. Amazon-freundlich.</li>
            <li><strong>Mittelklasse ($40-$100):</strong> ODM/OEM, CR-39 polarisiert, gebrandete Verpackung. Der Sweet Spot für DTC-Marken.</li>
            <li><strong>Premium ($100-$200):</strong> OEM, Premium-Materialien, volle Verpackung. Starke Markengeschichte nötig.</li>
            <li><strong>Luxus ($200+):</strong> Vollständig individuelles OEM, italienisches Acetat oder Titan, Premium-Verpackung. Exklusivität und Storytelling entscheidend.</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Jackys goldene Regel</h3>
            <p className="text-amber-800">Setzen Sie den Preis nicht nach Kosten, sondern nach Wert. Fragen Sie: Was ist dieses Paar meinem Kunden wert? Dann stellen Sie sicher, dass Ihre Kosten eine gesunde Marge (60 %+) bei diesem Preis erlauben. Wenn nicht, senken Sie die Kosten -- nicht den Preis.</p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was ist der typische Aufschlag?</h3>
              <p className="text-gray-600">Fabrik × 2-3 = Großhandel × 2-2,5 = Einzelhandel. DTC-Marken können 4-8× Fabrikkosten verlangen und die volle Marge behalten.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Zu welchem Preis sollte ich verkaufen?</h3>
              <p className="text-gray-600">Ziel: 60-70 % Bruttomarge. Bei $10 Gesamtkosten: mindestens $30 DTC. Für Premium ($80+) brauchen Sie einzigartiges Design, Premium-Materialien und überzeugendes Branding.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Brauchen Sie Hilfe bei der Preisgestaltung?</h3>
            <p className="text-gray-600 mb-6">Ich helfe Ihnen, den richtigen Preispunkt basierend auf Ihren Kosten, Ihrer Zielgruppe und Ihrem Wettbewerb zu finden.</p>
            <Link href="/de/kontakt" className="btn-primary">Preisberatung mit Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/sonnenbrillen-gruendungskosten" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Gründungskosten einer Sonnenbrillenmarke</h3><p className="text-gray-600 text-sm">Jede Kostenposition aufgeschlüsselt.</p></Link>
              <Link href="/de/blog/sonnenbrillen-marke-gruenden" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Sonnenbrillenmarke gründen</h3><p className="text-gray-600 text-sm">Der komplette Fahrplan von der Idee zum Verkauf.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
