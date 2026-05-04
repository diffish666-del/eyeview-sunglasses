import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Zertifizierungen & Compliance | FDA, CE, ISO 9001, UV400 - EyeView',
  description: 'EyeView Sonnenbrillen erfüllen alle internationalen Sicherheitsstandards. FDA-registriert, CE-zertifiziert, ISO 9001, UV400, ANSI Z80.3-konform. Vollständige Dokumentation verfügbar.',
  keywords: 'Sonnenbrillen Zertifizierungen, FDA Brillen Konformität, CE Zertifizierung Brillen, UV400, ISO 9001 Brillen, ANSI Z80.3, CPSIA Kinderbrillen',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/zertifizierungen',
    languages: {
      'en': 'https://eyeviewsunglasses.com/certifications',
      'de': 'https://eyeviewsunglasses.com/de/zertifizierungen',
    },
  },
  openGraph: {
    title: 'Sonnenbrillen-Zertifizierungen & Compliance | FDA, CE, ISO 9001, UV400 - EyeView',
    description: 'EyeView Sonnenbrillen erfüllen alle internationalen Sicherheitsstandards. FDA-registriert, CE-zertifiziert, ISO 9001, UV400.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/de/zertifizierungen',
    locale: 'de_DE',
  },
}

export default function CertificationsPageDe() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Startseite",
              "item": "https://eyeviewsunglasses.com/de"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Zertifizierungen",
              "item": "https://eyeviewsunglasses.com/de/zertifizierungen"
            }
          ]
        })}} />

        {/* FAQPage Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Erfüllen Ihre Sonnenbrillen die FDA-Anforderungen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Alle EyeView Sonnenbrillen erfüllen die FDA 21 CFR 801.410, die Sonnenbrillen als rezeptfreie medizinische Geräte reguliert. Jedes Paar wird auf UV-Transmission und Schlagfestigkeit gemäß FDA-Anforderungen getestet. Wir liefern vollständige FDA-Compliance-Dokumentation mit jeder Sendung in die USA."
              }
            },
            {
              "@type": "Question",
              "name": "Können Sie CE-Zertifikate für den EU-Import bereitstellen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Selbstverständlich. Wir stellen CE-Zertifikate gemäß EN ISO 12312-1:2013 für alle an die Europäische Union versandten Sonnenbrillen aus. Jede Sendung enthält eine Konformitätserklärung, Prüfberichte von akkreditierten Laboren und CE-Kennzeichnung auf dem Produkt. Wir versenden seit 2008 CE-zertifizierte Sonnenbrillen an EU-Märkte."
              }
            },
            {
              "@type": "Question",
              "name": "Welchen UV-Schutzgrad bieten Ihre Gläser?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Alle EyeView Gläser bieten UV400-Schutz, der 99,9–100 % der UVA- und UVB-Strahlung bis 400 Nanometer blockiert. Dies ist die höchste verfügbare UV-Schutzklassifizierung für Sonnenbrillen. Jede Glascharge wird mit einem Spektrophotometer auf UV-Transmissionswerte getestet, bevor die Produktion fortgesetzt wird."
              }
            },
            {
              "@type": "Question",
              "name": "Bieten Sie Prüfberichte von Drittlaboren an?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Wir liefern Prüfberichte von akkreditierten Drittlaboren einschließlich SGS, Intertek und Bureau Veritas. Die Berichte decken UV-Transmission, Schlagfestigkeit, optische Leistung und Materialsicherheit ab. Diese Berichte sind ohne Aufpreis bei jeder Sendung enthalten."
              }
            },
            {
              "@type": "Question",
              "name": "Sind Ihre Kinderbrillen CPSIA-konform?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Alle EyeView Kinder-Sonnenbrillen erfüllen die CPSIA-Anforderungen (Consumer Product Safety Improvement Act), einschließlich Bleigehaltsgrenzen, Phthalatbeschränkungen und obligatorischer Drittlaborprüfung durch CPSC-zugelassene Labore. Wir liefern Kinderproduktzertifikate (CPC) für jede Kinderbrillenbestellung."
              }
            },
            {
              "@type": "Question",
              "name": "Kann ich Ihre Zertifikate für das Marketing meiner eigenen Marke verwenden?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Wenn wir Sonnenbrillen unter Ihrer Marke fertigen (OEM/ODM), werden alle Zertifikate und Prüfberichte auf den Namen Ihrer Marke und Ihre Produktspezifikationen ausgestellt. Sie können diese Zertifikate in Ihren Marketingmaterialien, der Einzelhandelsverpackung und der Compliance-Dokumentation verwenden. Wir kümmern uns um den gesamten Papierkram — Sie müssen uns nur Ihre Markendetails mitteilen."
              }
            }
          ]
        })}} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Zertifizierungen & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ich habe auf die harte Tour gelernt, warum Compliance wichtig ist. Vor einigen Jahren hatte 
            einer unserer Kunden eine Sendung von 8.000 Paaren am Hamburger Zoll beschlagnahmt — nicht 
            weil die Brillen schlecht waren, sondern weil ihr vorheriger Lieferant keine ordnungsgemäße 
            CE-Dokumentation bereitgestellt hatte. Achttausend Paare, in einem Lager sitzend, unverkäuflich. 
            Dieser Kunde kam zu uns, und wir haben dafür gesorgt, dass das nie wieder passiert. Jedes Paar, 
            das wir versenden, verlässt unsere{' '}
            <Link href="/de/ueber-uns" className="text-primary-600 hover:underline">Fabrik</Link> mit 
            der richtigen Dokumentation, den richtigen Tests und den richtigen Zertifizierungen. Ohne Ausnahme.
          </p>
        </div>

        {/* Certification Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Internationale Zertifizierungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Das sind nicht nur Logos auf einer Website. Jede Zertifizierung steht für echte Tests, 
              echte Audits und echte Compliance-Arbeit, die wir für jede Bestellung durchführen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              icon="🇺🇸"
              name="FDA-registriert"
              standard="21 CFR 801.410"
              description="Die FDA klassifiziert Sonnenbrillen als rezeptfreie medizinische Geräte in den USA. Unsere Anlage ist bei der FDA registriert, und jedes Paar, das wir in die USA versenden, erfüllt die Anforderungen an Schlagfestigkeit und UV-Schutz gemäß 21 CFR 801.410. Wir kümmern uns um die Compliance, damit Ihre Zollabfertigung reibungslos verläuft."
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
              linkText="FDA-Anforderungen für Sonnenbrillen ansehen →"
            />
            <CertificationCard
              icon="🇪🇺"
              name="CE-zertifiziert"
              standard="EN ISO 12312-1:2013"
              description="Wenn Sie in Europa verkaufen, ist die CE-Kennzeichnung keine Option — es ist Gesetz. Unsere Sonnenbrillen erfüllen EN ISO 12312-1:2013, abdeckend UV-Schutz, optische Qualität, mechanische Festigkeit und Kennzeichnung. Jede EU-Sendung enthält eine Konformitätserklärung. Keine Hamburger Überraschungen mehr."
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
              linkText="Mehr über CE-Kennzeichnung →"
            />
            <CertificationCard
              icon="🏭"
              name="ISO 9001:2015"
              standard="Qualitätsmanagementsystem"
              description="Unser gesamter Fertigungsprozess — von der Rohstoffprüfung bis zur Endverpackung — arbeitet unter einem ISO 9001:2015-zertifizierten Qualitätsmanagementsystem. Das bedeutet dokumentierte Verfahren, regelmäßige interne Audits und kontinuierliche Verbesserung. Nicht aufregend, aber der Grund, warum unsere Fehlerquote unter 0,5 % bleibt."
              link="https://www.iso.org/iso-9001-quality-management.html"
              linkText="Über ISO 9001 →"
            />
            <CertificationCard
              icon="☀️"
              name="UV400-Schutz"
              standard="100% UVA/UVB-Blockierung"
              description={<>
                UV400 bedeutet, dass unsere Gläser alle Lichtstrahlen mit Wellenlängen bis 400 Nanometer 
                blockieren — das umfasst 100 % der UVA- (315–400nm) und UVB-Strahlung (280–315nm). Wir 
                testen jede Glascharge mit einem Spektrophotometer, bevor die Produktion fortgesetzt wird. 
                Wenn eine Charge UV400 nicht erreicht, wird sie abgelehnt. Punkt. Erfahren Sie mehr über 
                unsere Tests in unserem{' '}
                <Link href="/de/produkte/polarisiert" className="text-primary-600 hover:underline">Gläser-Ratgeber</Link>.
              </>}
            />
            <CertificationCard
              icon="🔬"
              name="ANSI Z80.3"
              standard="US-Optikstandard"
              description={<>
                ANSI Z80.3 ist der Amerikanische Nationale Standard für nicht-verschreibungspflichtige 
                Sonnenbrillen. Er umfasst optische Qualität, UV-Durchlässigkeit, Schlagfestigkeit und 
                Entflammbarkeit. Obwohl nicht gesetzlich vorgeschrieben wie die FDA-Registrierung, erwarten 
                es die großen US-Einzelhändler — und wir erfüllen es. Unsere{' '}
                <Link href="/de/produkte/polarisiert" className="text-primary-600 hover:underline">polarisierten Gläser</Link> werden 
                nach ANSI Z80.3-Spezifikationen für optische Klarheit und Polarisationseffizienz getestet.
              </>}
              link="https://www.ansi.org/"
              linkText="ANSI besuchen →"
            />
            <CertificationCard
              icon="👶"
              name="CPSIA-konform"
              standard="Kinderproduktsicherheit"
              description={<>
                Unsere{' '}
                <Link href="/de/produkte/kinder" className="text-primary-600 hover:underline">Kinder-Sonnenbrillen</Link> erfüllen 
                die CPSIA-Anforderungen für Kinderprodukte, einschließlich Bleigehaltsgrenzen (unter 100 ppm), 
                Phthalatbeschränkungen und obligatorischer Drittlaborprüfung durch CPSC-zugelassene Labore. 
                Jede Kinderbestellung wird mit einem Kinderproduktzertifikat (CPC) versandt. Denn wenn es 
                um die Sicherheit von Kindern geht, gibt es keinen Spielraum für Abkürzungen.
              </>}
              link="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/CPSIA"
              linkText="CPSIA-Unternehmensratgeber →"
            />
          </div>
        </section>

        {/* Testing Process */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unsere 6-Punkte-Qualitätsprüfung</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jedes Paar Sonnenbrillen durchläuft unseren 6-Punkte-Qualitätskontrollprozess, bevor es 
              die Fabrik verlässt. So halten wir eine Fehlerquote unter 0,5 % bei Millionen produzierter Paare.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InspectionCard
              step={1}
              title="UV-Transmissionstest"
              description="Jede Glascharge wird mit einem Spektrophotometer getestet, um UV400-Schutzniveaus zu verifizieren. Wir messen die Durchlässigkeit über das gesamte UV-Spektrum (280–400nm). Jede Charge, die nicht 99,9 %+ der UV-Strahlung blockiert, wird abgelehnt — keine Nacharbeit, keine Ausnahmen."
            />
            <InspectionCard
              step={2}
              title="Schlagfestigkeitstest"
              description="Gläser werden dem Fallkugeltest gemäß FDA 21 CFR 801.410-Standards unterzogen. Eine 16g schwere Stahlkugel wird aus 127cm Höhe auf das Glas fallen gelassen. Wenn es reißt, splittert oder bricht, fällt die gesamte Charge durch. Dieser Test ist nicht verhandelbar für US-Sendungen."
            />
            <InspectionCard
              step={3}
              title="Scharnier-Zyklusprüfung"
              description="Wir öffnen und schließen jedes Scharnierdesign über 2.000 Mal mit automatisierten Prüfgeräten, um Jahre täglicher Nutzung zu simulieren. Federscharniere, Zylinderscharniere, Flex-Scharniere — jeder Typ hat seine eigene Zyklusanforderung. Lockere oder schwergängige Scharniere bedeuten ein Redesign, keine Freigabe."
            />
            <InspectionCard
              step={4}
              title="Maßverifizierung"
              description="Fassungsmaße werden mit digitalen Messschiebern und optischen Komparatoren gegen das Original-Spezifikationsblatt gemessen. Bügellänge, Stegbreite, Glashöhe — jedes Maß muss innerhalb einer Toleranz von ±0,5mm liegen. So gewährleisten wir Größenkonsistenz über Produktionsläufe hinweg."
            />
            <InspectionCard
              step={5}
              title="Glasklarheitskontrolle"
              description={<>
                Die optische Klarheit wird auf Verzerrung, Welligkeit und Brechkraftabweichung getestet. 
                Wir verwenden ein Scheitelbrechwertmessgerät, um zu verifizieren, dass nicht-verschreibungspflichtige 
                Gläser eine optische Brechkraft von null haben (max. ±0,06 Dioptrien). Niemand möchte 
                Sonnenbrillen, die Kopfschmerzen verursachen. Lesen Sie unseren{' '}
                <Link href="/de/produkte/polarisiert" className="text-primary-600 hover:underline">Glasttechnologie-Ratgeber</Link> für 
                mehr Informationen über unsere optische Qualitätssicherung.
              </>}
            />
            <InspectionCard
              step={6}
              title="Kosmetische Inspektion"
              description="Die abschließende Prüfung ist visuell. Jedes Paar wird unter standardisierter Beleuchtung auf Kratzer, Farbinkonsistenzen, ungleichmäßige Beschichtung, raue Kanten und Montagefehler inspiziert. Unser QK-Team verwendet eine standardisierte 22-Punkte-Kosmetik-Checkliste. Wenn es nicht gut aussieht, wird es nicht versendet."
            />
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Was mit jeder Bestellung mitgeliefert wird</h2>
              <p className="text-gray-600 mb-6">
                Compliance-Dokumentation ist kein Nachgedanke — sie ist Teil unseres Produktionsprozesses. 
                Jede Sendung verlässt unsere{' '}
                <Link href="/de/ueber-uns" className="text-primary-600 hover:underline">Fabrik</Link> mit 
                einem vollständigen Dokumentationspaket. Ihr Zollagent und Ihre Einzelhandelspartner haben 
                vom ersten Tag an alles, was sie brauchen.
              </p>
              <ul className="space-y-4">
                <DocumentItem
                  title="Prüfberichte von Drittlaboren"
                  description="UV-Transmissions-, Schlagfestigkeits- und Materialsicherheitsberichte von akkreditierten Laboren (SGS, Intertek oder Bureau Veritas). Ausgestellt auf Ihre Produktspezifikationen und Ihren Markennamen."
                />
                <DocumentItem
                  title="Compliance-Zertifikate"
                  description="CE-Zertifikate, FDA-Compliance-Schreiben und ISO 9001-Zertifizierungskopien. Alle aktuell und verifizierbar. Jährlich aktualisiert oder bei Standardänderungen."
                />
                <DocumentItem
                  title="Konformitätserklärung"
                  description="EU-Konformitätserklärung gemäß EN ISO 12312-1:2013, mit Ihrer Marke als Hersteller/Importeur. Bereit für die EU-Zollabfertigung."
                />
                <DocumentItem
                  title="Kinderproduktzertifikat (CPC)"
                  description="Für Kinderbrillenbestellungen: CPSIA-konformes CPC mit Details zum Drittlabor, anwendbaren Standards und Produktidentifikation. Erforderlich für alle Kinderprodukte, die in den USA verkauft werden."
                />
                <DocumentItem
                  title="Materialsicherheitsdatenblätter"
                  description="MSDS für alle in der Produktion verwendeten Materialien — Fassungsmaterialien, Glasbeschichtungen, Scharnierkomponenten, Verpackungsmaterialien. Unverzichtbar für die Import-Compliance in vielen Märkten."
                />
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
              <span className="text-8xl block mb-6">📋</span>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-primary-700 font-medium">Dokumentation inklusive</div>
                <div className="text-primary-600 text-sm mt-2">Jede Bestellung. Jede Sendung.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dies sind die Compliance-Fragen, die wir am häufigsten von neuen Kunden hören. Wenn 
              Ihre nicht dabei ist, fragen Sie einfach — wir gehen gerne ins Detail.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="Erfüllen Ihre Sonnenbrillen die FDA-Anforderungen?"
              answer="Ja. Alle EyeView Sonnenbrillen erfüllen die FDA 21 CFR 801.410, die Sonnenbrillen als rezeptfreie medizinische Geräte reguliert. Jedes Paar wird auf UV-Transmission und Schlagfestigkeit gemäß FDA-Anforderungen getestet. Wir liefern vollständige FDA-Compliance-Dokumentation mit jeder Sendung in die USA."
            />
            <FAQItem
              question="Können Sie CE-Zertifikate für den EU-Import bereitstellen?"
              answer="Selbstverständlich. Wir stellen CE-Zertifikate gemäß EN ISO 12312-1:2013 für alle an die Europäische Union versandten Sonnenbrillen aus. Jede Sendung enthält eine Konformitätserklärung, Prüfberichte von akkreditierten Laboren und CE-Kennzeichnung auf dem Produkt. Wir versenden seit 2008 CE-zertifizierte Sonnenbrillen an EU-Märkte."
            />
            <FAQItem
              question="Welchen UV-Schutzgrad bieten Ihre Gläser?"
              answer="Alle EyeView Gläser bieten UV400-Schutz, der 99,9–100 % der UVA- und UVB-Strahlung bis 400 Nanometer blockiert. Dies ist die höchste verfügbare UV-Schutzklassifizierung für Sonnenbrillen. Jede Glascharge wird mit einem Spektrophotometer auf UV-Transmissionswerte getestet, bevor die Produktion fortgesetzt wird."
            />
            <FAQItem
              question="Bieten Sie Prüfberichte von Drittlaboren an?"
              answer="Ja. Wir liefern Prüfberichte von akkreditierten Drittlaboren einschließlich SGS, Intertek und Bureau Veritas. Die Berichte decken UV-Transmission, Schlagfestigkeit, optische Leistung und Materialsicherheit ab. Diese Berichte sind ohne Aufpreis bei jeder Sendung enthalten."
            />
            <FAQItem
              question="Sind Ihre Kinderbrillen CPSIA-konform?"
              answer="Ja. Alle EyeView Kinder-Sonnenbrillen erfüllen die CPSIA-Anforderungen, einschließlich Bleigehaltsgrenzen (unter 100 ppm), Phthalatbeschränkungen und obligatorischer Drittlaborprüfung durch CPSC-zugelassene Labore. Jede Kinderbestellung wird mit einem Kinderproduktzertifikat (CPC) versandt."
            />
            <FAQItem
              question="Kann ich Ihre Zertifikate für das Marketing meiner eigenen Marke verwenden?"
              answer="Ja. Wenn wir Sonnenbrillen unter Ihrer Marke fertigen (OEM/ODM), werden alle Zertifikate und Prüfberichte auf den Namen Ihrer Marke und Ihre Produktspezifikationen ausgestellt. Sie können diese in Ihren Marketingmaterialien, der Einzelhandelsverpackung und der Compliance-Dokumentation verwenden. Wir kümmern uns um den gesamten Papierkram — Sie müssen uns nur Ihre Markendetails mitteilen."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Benötigen Sie Compliance-Dokumentation?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ob Sie Prüfberichte für eine bestehende Bestellung benötigen, Zertifikate für einen neuen 
            Markt oder einfach verstehen möchten, welche Dokumentation Sie brauchen — kontaktieren Sie uns. 
            Wir besorgen Ihnen die richtige Dokumentation, schnell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">
              Dokumentation anfordern
            </Link>
            <Link href="/de/produkte" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Produkte ansehen
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function CertificationCard({ icon, name, standard, description, link, linkText }: {
  icon: string
  name: string
  standard: string
  description: string | React.ReactNode
  link?: string
  linkText?: string
}) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm text-primary-600 font-medium mb-3">{standard}</p>
      <div className="text-gray-600 text-sm mb-4">{description}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 text-sm font-medium hover:underline"
        >
          {linkText}
        </a>
      )}
    </div>
  )
}

function InspectionCard({ step, title, description }: {
  step: number
  title: string
  description: string | React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  )
}

function DocumentItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex gap-3">
      <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </li>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl shadow p-6 cursor-pointer">
      <summary className="font-bold text-gray-900 list-none flex items-center justify-between">
        <span>{question}</span>
        <span className="text-primary-600 text-xl group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-600 mt-4">{answer}</p>
    </details>
  )
}
