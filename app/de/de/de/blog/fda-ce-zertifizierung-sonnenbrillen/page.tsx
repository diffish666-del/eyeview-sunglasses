import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FDA- & CE-Zertifizierung für Sonnenbrillen: Kompletter Compliance-Leitfaden',
  description: 'Ein Fabrikinhaber erklärt FDA-Registrierung, CE-Kennzeichnung, UV-Tests und ANSI-Standards für Sonnenbrillen. Schritt-für-Schritt-Compliance-Leitfaden für den Verkauf in USA, EU und weltweit.',
  keywords: 'Sonnenbrillen FDA Zertifizierung, CE Kennzeichnung Sonnenbrillen, Brillen Compliance, Sonnenbrillen UV Test, ANSI Z80.3, EN ISO 12312-1, Sonnenbrillen Vorschriften',
  alternates: {
    canonical: '/de/blog/fda-ce-zertifizierung-sonnenbrillen',
    languages: {
      'en': '/blog/fda-ce-certification-sunglasses',
      'de': '/de/blog/fda-ce-zertifizierung-sonnenbrillen',
    },
  },
}

export default function FdaCeZertifizierungPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "FDA- & CE-Zertifizierung für Sonnenbrillen: Kompletter Compliance-Leitfaden",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Ein Fabrikinhaber erklärt FDA-Registrierung, CE-Kennzeichnung, UV-Tests und Compliance-Anforderungen für den weltweiten Sonnenbrillenverkauf.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/fda-ce-zertifizierung-sonnenbrillen" },
          "inLanguage": "de"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Brauchen Sonnenbrillen eine FDA-Zulassung für den US-Verkauf?", "acceptedAnswer": { "@type": "Answer", "text": "Sonnenbrillen brauchen keine FDA-'Zulassung', aber FDA-Konformität. Die FDA klassifiziert Sonnenbrillen als Medizinprodukte (Klasse I) unter 21 CFR 886.5850. Hersteller und Importeure müssen ihren Betrieb bei der FDA registrieren und ihre Produkte listen. Die Gläser müssen auch Schlagfestigkeitsanforderungen gemäß 21 CFR 801.410 erfüllen." } },
            { "@type": "Question", "name": "Was ist die CE-Kennzeichnung für Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "Die CE-Kennzeichnung zeigt, dass Sonnenbrillen EU-Sicherheits-, Gesundheits- und Umweltanforderungen entsprechen. Der Schlüsselstandard ist EN ISO 12312-1, der UV-Schutz, optische Qualität und mechanische Festigkeit abdeckt. CE-Kennzeichnung ist Pflicht für den Verkauf in EU, EWR und UK." } },
            { "@type": "Question", "name": "Was kostet die Compliance-Prüfung für Sonnenbrillen?", "acceptedAnswer": { "@type": "Answer", "text": "Basis-UV400-Tests kosten $100-$300 pro Modell. Volle Compliance-Prüfung (UV, Schlagfestigkeit, optische Qualität) liegt bei $300-$800 pro Modell. FDA-Registrierung ist kostenlos. CE-Dokumentation kostet $200-$500 mit Berater. Die meisten seriösen Fabriken integrieren Basistests in die Produktionskosten." } },
            { "@type": "Question", "name": "Können Sonnenbrillen am Zoll beschlagnahmt werden?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. US-Zoll kann Sonnenbrillen ohne FDA-Registrierung zurückhalten. EU-Zoll beschlagnahmt regelmäßig Sendungen ohne CE-Kennzeichnung. Australien ist besonders streng. Ich habe persönlich erlebt, wie Kunden Sendungen im Wert von $10.000-$50.000 wegen fehlender Dokumentation verloren haben." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Compliance</span>
            <span>4. Mai 2026</span>
            <span>•</span>
            <span>15 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FDA- &amp; CE-Zertifizierung für Sonnenbrillen: Kompletter Compliance-Leitfaden
          </h1>
          <p className="text-xl text-gray-600">
            Niemand gründet eine Sonnenbrillenmarke, weil er sich für regulatorische Compliance begeistert. 
            Aber überspringen Sie diesen Schritt, und Ihre Sonnenbrillen könnten am Zoll beschlagnahmt werden -- 
            oder Schlimmeres. Hier ist alles, was Sie wissen müssen, vereinfacht erklärt.
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
            <li><a href="#warum-compliance" className="text-primary-600 hover:underline">Warum Compliance wichtig ist (echte Horrorgeschichten)</a></li>
            <li><a href="#fda-usa" className="text-primary-600 hover:underline">FDA-Anforderungen: Sonnenbrillenverkauf in den USA</a></li>
            <li><a href="#ce-eu" className="text-primary-600 hover:underline">CE-Kennzeichnung: Sonnenbrillenverkauf in der EU</a></li>
            <li><a href="#uv-tests" className="text-primary-600 hover:underline">UV-Schutzstandards</a></li>
            <li><a href="#andere-maerkte" className="text-primary-600 hover:underline">Andere Märkte: Australien, UK, Japan</a></li>
            <li><a href="#testkosten" className="text-primary-600 hover:underline">Testkosten &amp; Prüflabore</a></li>
            <li><a href="#checkliste" className="text-primary-600 hover:underline">Ihre Compliance-Checkliste</a></li>
            <li><a href="#fragen" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Ich exportiere seit 20 Jahren Sonnenbrillen. In dieser Zeit habe ich drei Kunden ganze 
            Sendungen an den Zoll verlieren sehen -- insgesamt über $120.000 an zerstörtem Produkt. 
            Jeder einzelne Fall war vermeidbar. Die Tests hätten weniger als $500 gekostet.
          </p>

          <h2 id="warum-compliance" className="text-3xl font-bold mt-16 mb-6">Warum Compliance wichtig ist (echte Horrorgeschichten)</h2>
          <p>
            Carlos, ein Erstgründer aus Miami, bestellte 2023 3.000 Paar Sonnenbrillen. Schöne 
            Fassungen, gute Qualität, $18.000 Investition. Per Seefracht nach Port Miami. Der US-Zoll 
            hielt die Sendung auf, weil FDA-Registrierungsdokumente fehlten. Die Ware lag 45 Tage 
            fest, während Carlos sich um die Registrierung bemühte. Als er seine Sonnenbrillen 
            endlich hatte, war sein gesamtes Sommer-Launch-Fenster verpasst.
          </p>
          <p>
            Dann Lisa, die Sonnenbrillen auf Amazon UK verkaufte. Ein Wettbewerber meldete ihr Listing 
            wegen fehlender CE-Kennzeichnung. Amazon entfernte das Listing, fror ihren Bestand ein 
            (600 Paar im Wert von £9.000) und es dauerte 3 Monate, bis es wiederhergestellt war.
          </p>

          <h2 id="fda-usa" className="text-3xl font-bold mt-16 mb-6">FDA-Anforderungen: Sonnenbrillenverkauf in den USA</h2>
          <p>
            Überraschung: <strong>Die FDA klassifiziert Sonnenbrillen als Medizinprodukte</strong>. 
            Genauer: Klasse-I-Medizinprodukte unter 21 CFR 886.5850. Keine Panik -- Klasse I ist die 
            niedrigste Risikokategorie, und die Anforderungen sind überschaubar.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Schritt 1: FDA-Betriebsregistrierung</h3>
            <p className="text-blue-800">
              Jeder Hersteller und Importeur muss sich bei der FDA registrieren -- online über das{' '}
              <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/device-registration-and-listing" target="_blank" rel="noopener" className="underline">FDA FURLS-System</a>. 
              Kostenlos, muss aber jährlich erneuert werden (1. Oktober - 31. Dezember).
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Schritt 2: Schlagfestigkeits-Compliance</h3>
            <p className="text-blue-800">
              Gemäß 21 CFR 801.410 müssen alle nicht-verschreibungspflichtigen Sonnenbrillen-Gläser den 
              FDA-Schlagfestigkeitstest bestehen: Eine 16-mm-Stahlkugel wird aus 127 cm Höhe fallen 
              gelassen und darf das Glas nicht brechen. Polycarbonat und CR-39 bestehen problemlos.
            </p>
          </div>

          <h2 id="ce-eu" className="text-3xl font-bold mt-16 mb-6">CE-Kennzeichnung: Sonnenbrillenverkauf in der EU</h2>
          <p>
            CE-Kennzeichnung ist <strong>Pflicht</strong> für den Sonnenbrillenverkauf in der EU, dem EWR 
            und dem UK. Der Schlüsselstandard ist <strong>EN ISO 12312-1:2022</strong>.
          </p>
          <p>Dieser Standard umfasst:</p>
          <ul>
            <li><strong>UV-Durchlässigkeit:</strong> Maximal erlaubte UV-Strahlung je nach Filterkategorie</li>
            <li><strong>Optische Qualität:</strong> Sphärische, astigmatische und prismatische Toleranzen</li>
            <li><strong>Mechanische Festigkeit:</strong> Mindest-Robustheitsanforderungen</li>
            <li><strong>Filterkategorien (0-4):</strong> Wie viel sichtbares Licht das Glas durchlässt</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">CE-Filterkategorien</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Kategorie</th>
                  <th className="px-6 py-4 text-left">Lichtdurchlässigkeit</th>
                  <th className="px-6 py-4 text-left">Einsatzbereich</th>
                  <th className="px-6 py-4 text-left">Autofahren?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Kat. 0</td><td className="px-6 py-4">80-100 %</td><td className="px-6 py-4">Mode/Innenbereich</td><td className="px-6 py-4">Ja</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Kat. 1</td><td className="px-6 py-4">43-80 %</td><td className="px-6 py-4">Wenig Sonne</td><td className="px-6 py-4">Ja</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Kat. 2</td><td className="px-6 py-4">18-43 %</td><td className="px-6 py-4">Mittlere Sonne</td><td className="px-6 py-4">Ja</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Kat. 3</td><td className="px-6 py-4">8-18 %</td><td className="px-6 py-4">Starke Sonne</td><td className="px-6 py-4">Ja</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Kat. 4</td><td className="px-6 py-4">3-8 %</td><td className="px-6 py-4">Extrem (Gletscher etc.)</td><td className="px-6 py-4 text-red-600 font-bold">NEIN</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Wichtig: Selbstzertifizierung</h3>
            <p className="text-amber-800">
              Die CE-Kennzeichnung für Sonnenbrillen ist <strong>selbstzertifiziert</strong> -- Sie brauchen 
              keine benannte Stelle. Sie (oder Ihre Fabrik) führen die Tests durch, erstellen die technische 
              Dokumentation und unterzeichnen die Konformitätserklärung. Erschwinglich, aber Sie haften 
              rechtlich für die Richtigkeit Ihrer Angaben.
            </p>
          </div>

          <h2 id="uv-tests" className="text-3xl font-bold mt-16 mb-6">UV-Schutzstandards</h2>
          <p>
            <strong>UV400 bedeutet, dass das Glas 99-100 % der UV-Strahlung bis 400 Nanometer blockiert</strong> -- 
            sowohl UVA (315-400 nm) als auch UVB (280-315 nm). Das ist der weltweite Mindeststandard. 
            Mehr Details in unserem{' '}
            <Link href="/de/blog/uv400-vs-polarisiert" className="text-primary-600 hover:underline">UV400 vs. Polarisiert Ratgeber</Link>.
          </p>

          <h2 id="andere-maerkte" className="text-3xl font-bold mt-16 mb-6">Andere Märkte: Australien, UK, Japan</h2>
          <ul>
            <li><strong>Australien (AS/NZS 1067):</strong> Die <strong>strengsten Sonnenbrillen-Vorschriften der Welt</strong>. Pflicht, nicht freiwillig. Nicht-konforme Brillen werden regelmäßig am Zoll beschlagnahmt und vernichtet.</li>
            <li><strong>UK (UKCA):</strong> Post-Brexit technisch UKCA statt CE erforderlich, aber CE wird mindestens bis 2027 akzeptiert.</li>
            <li><strong>Japan (JIS T 7333):</strong> Ähnlich wie ISO 12312-1 mit einigen Japan-spezifischen Anforderungen.</li>
          </ul>

          <h2 id="testkosten" className="text-3xl font-bold mt-16 mb-6">Testkosten &amp; Prüflabore</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Testart</th>
                  <th className="px-6 py-4 text-left">Kosten/Modell</th>
                  <th className="px-6 py-4 text-left">Dauer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Nur UV400-Durchlässigkeit</td><td className="px-6 py-4">$100-$300</td><td className="px-6 py-4">3-5 Tage</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Vollständig EN ISO 12312-1 (CE)</td><td className="px-6 py-4">$300-$600</td><td className="px-6 py-4">5-10 Tage</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">ANSI Z80.3 komplett</td><td className="px-6 py-4">$300-$500</td><td className="px-6 py-4">5-10 Tage</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">AS/NZS 1067 (Australien)</td><td className="px-6 py-4">$400-$800</td><td className="px-6 py-4">7-14 Tage</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">FDA-Falltest</td><td className="px-6 py-4">$50-$150</td><td className="px-6 py-4">1-3 Tage</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Empfohlene Prüflabore:</strong> SGS, Bureau Veritas, Intertek, TÜV Rheinland. 
            Lokale Uni-Labore sind oft 30-50 % günstiger für Basis-UV-Tests -- prüfen Sie die Akkreditierung.
          </p>

          <h2 id="checkliste" className="text-3xl font-bold mt-16 mb-6">Ihre Compliance-Checkliste</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Für den US-Markt</h3>
          <ul>
            <li>☐ FDA-Betriebsregistrierung (Hersteller und/oder Importeur)</li>
            <li>☐ FDA-Produktlisting (Produktcode HQF)</li>
            <li>☐ Schlagfestigkeitstest-Protokolle</li>
            <li>☐ UV400-Testzertifikat pro Modell</li>
            <li>☐ Korrekte Kennzeichnung (UV-Angaben, Herstellerinfo)</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Für den EU-Markt</h3>
          <ul>
            <li>☐ Prüfung nach EN ISO 12312-1 durch akkreditiertes Labor</li>
            <li>☐ Technische Dokumentation erstellt und archiviert</li>
            <li>☐ Konformitätserklärung unterschrieben</li>
            <li>☐ CE-Kennzeichnung auf Produkt/Verpackung</li>
            <li>☐ Filterkategorie klar gekennzeichnet</li>
            <li>☐ EU-Importeur oder Bevollmächtigter benannt</li>
          </ul>

          <h2 id="fragen" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Brauchen Sonnenbrillen eine FDA-Zulassung?</h3>
              <p className="text-gray-600">Keine &quot;Zulassung&quot;, aber FDA-Konformität. Sonnenbrillen sind Klasse-I-Medizinprodukte. Hersteller/Importeure müssen sich registrieren und Produkte listen. Gläser müssen Schlagfestigkeitstests bestehen.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Was kostet Compliance-Prüfung?</h3>
              <p className="text-gray-600">Basis-UV: $100-$300/Modell. Volle CE-Compliance: $300-$600/Modell. FDA-Registrierung ist kostenlos. Die meisten guten Fabriken integrieren Basistests in die Produktionskosten.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Können Sonnenbrillen am Zoll beschlagnahmt werden?</h3>
              <p className="text-gray-600">Ja. US-Zoll hält Sendungen ohne FDA-Registrierung zurück. EU-Zoll beschlagnahmt ohne CE-Kennzeichnung. Australien ist am strengsten. Die Compliance-Prüfung kostet einen Bruchteil möglicher Verluste.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Brauchen Sie Hilfe bei der Compliance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Wir kümmern uns um FDA-, CE- und UV-Compliance für jede Bestellung. Unser Team begleitet 
              Sie durch die Anforderungen für Ihre spezifischen Märkte und stellt alle nötige 
              Dokumentation bereit. Ohne Aufpreis -- das gehört zum professionellen Geschäft.
            </p>
            <Link href="/de/kontakt" className="btn-primary">Jacky zu Compliance fragen</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/de/blog/sonnenbrillen-qualitaetskontrolle" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen-Qualitätskontrolle: Inspektions-Checkliste</h3>
                <p className="text-gray-600 text-sm">Was vor der Produktionsfreigabe geprüft werden muss.</p>
              </Link>
              <Link href="/de/blog/sonnenbrillen-import-ratgeber" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen aus China importieren</h3>
                <p className="text-gray-600 text-sm">Kompletter Leitfaden zu Zoll, Abgaben, Versand und Dokumentation.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
