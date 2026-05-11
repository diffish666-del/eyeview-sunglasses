import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UV400 vs. Polarisiert: Was ist der Unterschied und brauchen Sie beides?',
  description: 'Ein Fabrikinhaber erklärt den echten Unterschied zwischen UV400 und polarisierten Gläsern — was jedes tut, Kostenauswirkung im Großhandel und wann Ihre Marke eins, beides oder keins braucht.',
  keywords: 'UV400 vs polarisiert, UV400 Schutz, polarisierte Gläser, Sonnenbrillen Glasschutz, UV Schutz Sonnenbrillen',
  alternates: { canonical: '/de/blog/uv400-vs-polarisiert', languages: { 'en': '/blog/uv400-vs-polarized', 'de': '/de/blog/uv400-vs-polarisiert' } },
}

export default function Uv400VsPolarisiertPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "UV400 vs. Polarisiert: Was ist der Unterschied und brauchen Sie beides?", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/uv400-vs-polarisiert" }, "inLanguage": "de" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Was ist der Unterschied zwischen UV400 und polarisierten Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "UV400 blockiert schädliche ultraviolette Strahlung bis 400 Nanometer — es schützt Ihre Augen vor Sonnenschäden. Polarisierte Gläser reduzieren Blendung von reflektierenden Oberflächen wie Wasser, Straßen und Schnee — sie verbessern den visuellen Komfort und die Klarheit. UV400 betrifft den Gesundheitsschutz. Polarisation betrifft die visuelle Leistung. Sie lösen völlig verschiedene Probleme und sind nicht austauschbar." } },
          { "@type": "Question", "name": "Haben polarisierte Sonnenbrillen UV-Schutz?", "acceptedAnswer": { "@type": "Answer", "text": "Nicht automatisch. Polarisation und UV-Schutz sind separate Technologien. Ein polarisiertes Glas ohne UV-Beschichtung reduziert Blendung wunderbar, lässt aber schädliche UV-Strahlen durch — was tatsächlich gefährlich ist, weil das dunklere Glas die Pupillen weitet und so mehr UV einlässt. Jeder seriöse Hersteller fügt UV400 zu polarisierten Gläsern hinzu, aber prüfen Sie immer nach." } },
          { "@type": "Question", "name": "Wie viel mehr kosten polarisierte Gläser als UV400?", "acceptedAnswer": { "@type": "Answer", "text": "Im Fabrik-Großhandel: Basis-UV400-Gläser kosten $1,50–2 pro Paar. Polarisierte TAC-Gläser $3–5. Polarisierte CR-39 (optische Qualität) $5–8. Polarisation addiert also $1,50–6 zu Ihren Stückkosten je nach Glasmaterial." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Technologie</span>
            <span>3. Mai 2026</span><span>•</span><span>10 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UV400 vs. Polarisiert: Was ist der Unterschied und brauchen Sie beides?</h1>
          <p className="text-xl text-gray-600">Zwei Technologien, zwei völlig verschiedene Aufgaben. Die eine schützt Ihre Augen, die andere verbessert Ihre Sicht. Hier ist, was jede Marke wissen muss.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Die häufigste Verwirrung, die ich bei neuen Markeninhabern sehe: &quot;Sind meine Sonnenbrillen UV400 ODER polarisiert?&quot; Die Antwort: Das sind zwei völlig verschiedene Dinge, und Sie brauchen wahrscheinlich beides.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">UV400: Der Gesundheitsschutz</h2>
          <p><strong>UV400 blockiert 99–100 % der UV-Strahlung bis 400 nm.</strong> Das schließt UVA (315–400 nm) und UVB (280–315 nm) ein. Ohne UV-Schutz können Sonnenbrillen tatsächlich <em>schädlicher</em> sein als keine — die dunkle Tönung weitet die Pupillen, und ohne UV-Blockierung gelangt mehr UV-Strahlung ins Auge.</p>
          <p>UV400 ist kein optionales Feature. Es ist der absolute Mindeststandard für jede Sonnenbrille, die Sie verkaufen. Gesetzlich vorgeschrieben in der EU (CE), den USA (FDA) und Australien.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Polarisation: Die visuelle Leistung</h2>
          <p><strong>Polarisation reduziert Blendung von reflektierenden Oberflächen.</strong> Wasser, nasse Straßen, Schnee, Autoscheiben — all das reflektiert horizontal polarisiertes Licht, das Blendung verursacht. Ein Polarisationsfilter blockiert dieses horizontale Licht und lässt nur vertikales Licht durch. Das Ergebnis: schärfere Sicht, bessere Kontraste, weniger Augenermüdung.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Der Direktvergleich</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Faktor</th><th className="px-6 py-4 text-left">UV400</th><th className="px-6 py-4 text-left">Polarisiert</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Was es tut</td><td className="px-6 py-4">Blockiert UV-Strahlung</td><td className="px-6 py-4">Reduziert Blendung</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Zweck</td><td className="px-6 py-4">Augenschutz</td><td className="px-6 py-4">Visueller Komfort</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Gesetzlich vorgeschrieben?</td><td className="px-6 py-4">Ja (EU, USA, AU)</td><td className="px-6 py-4">Nein</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Kosten/Paar</td><td className="px-6 py-4">$0 (im Material enthalten)</td><td className="px-6 py-4">+$1,50–$6,00</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Sichtbarer Unterschied?</td><td className="px-6 py-4">Nein</td><td className="px-6 py-4">Ja (deutlich weniger Blendung)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Was braucht Ihre Marke?</h2>
          <ul>
            <li><strong>UV400:</strong> IMMER. Nicht verhandelbar. Ohne UV400 dürfen Sie in den meisten Märkten nicht verkaufen.</li>
            <li><strong>Polarisiert:</strong> Empfohlen ab $50 Einzelhandel. Bei Sport-, Outdoor- und Autofahrer-Zielgruppen: unverzichtbar. Bei Mode-Sonnenbrillen: ein starkes Upgrade-Feature.</li>
            <li><strong>Beides:</strong> Die ideale Kombination. UV400 + Polarisation gibt Ihren Kunden Schutz UND Komfort. Der Großhandels-Mehrpreis von $1,50–5 ermöglicht einen Einzelhandelsaufschlag von $20–40.</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Marketing-Tipp</h3>
            <p className="text-amber-800">&quot;UV400 + Polarisiert&quot; auf Ihrem Anhänger und Ihrer Website ist ein starkes Verkaufsargument. Kunden verstehen vielleicht nicht die Technik, aber sie wissen: Beides zusammen = besserer Schutz = mehr Wert. Nutzen Sie es.</p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Haben polarisierte Gläser automatisch UV-Schutz?</h3>
              <p className="text-gray-600">Nicht automatisch. Seriöse Hersteller fügen UV400 immer hinzu, aber prüfen Sie die Testzertifikate. Ein polarisiertes Glas ohne UV-Schutz ist gefährlicher als gar keine Sonnenbrille.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Wie viel mehr kosten polarisierte Gläser?</h3>
              <p className="text-gray-600">TAC polarisiert: +$1,50–3 pro Paar. CR-39 polarisiert: +$3,50–6 pro Paar. Für eine Marke ab $50 Einzelhandel ist der Aufpreis ein Kinderspiel — Kunden zahlen gerne $20–40 mehr dafür.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/sonnenbrillen-glaeser-ratgeber" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen-Gläser: Kompletter Ratgeber</h3><p className="text-gray-600 text-sm">Alle Glasmaterialien, Farben und Beschichtungen erklärt.</p></Link>
              <Link href="/de/blog/sonnenbrillen-beschichtungen-ratgeber" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Beschichtungen-Ratgeber</h3><p className="text-gray-600 text-sm">Spiegel, AR, hydrophob — welche Beschichtungen lohnen sich?</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
