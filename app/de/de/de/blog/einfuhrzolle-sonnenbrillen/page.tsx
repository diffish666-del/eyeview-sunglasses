import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Einfuhrzölle & Zolltarife für Sonnenbrillen 2026: Sätze für USA, EU, UK, AU, CA',
  description: 'Vollständiger Leitfaden zu Einfuhrzöllen für Sonnenbrillen. HS-Codes, Zollsätze nach Ländern, Freihandelsabkommen und Berechnung der Landed Cost. Praktischer Leitfaden eines Fabrikbesitzers zum Sparen beim Zoll.',
  keywords: ['Einfuhrzölle Sonnenbrillen', 'Zolltarife Sonnenbrillen', 'HS-Code Sonnenbrillen', 'Einfuhrzoll-Rechner', 'Zollabfertigung Sonnenbrillen', 'Brillen Einfuhrsteuer', 'US Zoll Sonnenbrillen', 'EU Zoll Sonnenbrillen'],
  alternates: {
    canonical: '/de/blog/einfuhrzolle-sonnenbrillen',
  },
};

const takeaways = [
  'HS-Code 9004.10: Sonnenbrillen fallen weltweit unter diesen harmonisierten Code — US-Zoll 2,0 %, EU 2,9 %, UK 2,0 %, Australien 5,0 % (aber oft 0 % durch FTAs), Kanada 0 % nach CPTPP-Regeln',
  'Die größten Kosten sind nicht der Zoll — sondern Versand- und Zollagentengebühren. Eine Brillenlieferung im Wert von 5.000 $ zahlt vielleicht 100 $ Zoll, aber 400 $ an Speditionsgebühren. Wählen Sie Ihren Logistikpartner mit Bedacht.',
  'Das Ursprungszeugnis ist Ihr stärkstes Werkzeug zur Zollsenkung. Wenn Ihre Sonnenbrillen in China (oder Vietnam/Indien) hergestellt werden, können Sie Präferenzzollsätze im Rahmen mehrerer FTAs beanspruchen — aber nur mit den richtigen Papieren.',
  'Section-301-Zölle auf chinesische Brillen (HS 9004.10.0000) fügen 7,5 % auf die Basiszoll von 2,0 % für US-Importe ab 2026 hinzu — effektiver Gesamtsatz beträgt 9,5 %, es sei denn, Sie qualifizieren sich für eine Ausnahme.',
  'Landed-Cost-Formel: (FOB-Preis × Menge + Fracht + Versicherung) × (1 + Zollsatz) + Zollagentengebühr + Hafengebühren + Letzte-Meile-Lieferung. Die meisten Neueinsteiger unterschätzen die Kosten bei ihrer ersten Bestellung um 15–20 %.',
  'Wertfreigrenzen sind wichtig: US-De-Minimis liegt bei 800 $ (Sendungen darunter sind zollfrei), das EU-IOSS-System erlaubt vorab erhobene Mehrwertsteuer bei Waren bis 150 €, UK hat eine Grenze von 135 £. Strukturieren Sie kleine Musterbestellungen so, dass sie unter diesen Grenzen bleiben.',
];

const quickStats = [
  { label: 'US-Basiszoll (HS 9004.10)', value: '2,0 %' },
  { label: 'US Section-301-Zuschlag', value: '+7,5 %' },
  { label: 'EU-Zollsatz', value: '2,9 %' },
  { label: 'UK-Zollsatz', value: '2,0 %' },
  { label: 'Australien-Zollsatz', value: '5,0 % (0 % mit UZ)' },
  { label: 'Kanada-Zollsatz', value: '0 % (CPTPP)' },
];

const faqs = [
  {
    question: 'Welcher HS-Code gilt für Sonnenbrillen?',
    answer: 'Sonnenbrillen fallen unter den HS-Code 9004.10 — „Brillen, Schutzbrillen und ähnliche Waren, Korrektionsbrillen, Schutzbrillen oder andere, Sonnenbrillen." Dies ist der weltweit harmonisierte Code. Die US-spezifische Unterposition ist 9004.10.0000. Für Korrektionssonnenbrillen verwenden Sie 9004.90.0000. Für Sicherheits-/Industriebrillen gilt 9004.90.0090. Stimmen Sie sich immer mit Ihrem Zollagenten ab — Strafen für Falschklassifizierung beginnen beim 2-fachen des geschuldeten Zolls.',
  },
  {
    question: 'Wie viel Einfuhrzoll zahle ich für Sonnenbrillen aus China in die USA?',
    answer: 'Der US-Basiszoll für HS 9004.10 beträgt 2,0 %. Allerdings fügen die Section-301-Zölle auf Waren chinesischen Ursprungs 7,5 % hinzu (Stand 2026), was einen effektiven Satz von 9,5 % ergibt. Bei einer FOB-Sendung im Wert von 10.000 $ sind das 950 $ Zoll, bevor Fracht, Versicherung und Zollagentengebühren hinzukommen. Wenn Sie in Vietnam, Indien oder Bangladesch produzieren, entfällt der Section-301-Zuschlag vollständig — es gilt nur der Basissatz von 2,0 %.',
  },
  {
    question: 'Wie hoch ist der EU-Einfuhrzoll auf Sonnenbrillen aus China?',
    answer: 'Die EU erhebt einen Zollsatz von 2,9 % auf HS 9004.10 Sonnenbrillen aus China. Keine zusätzlichen Zölle über den Standardsatz hinaus. Bei einer Sendung im Wert von 8.000 € sind das etwa 232 € Zoll. Die EU hat kein Section-301-Äquivalent. Allerdings fällt Mehrwertsteuer mit dem Satz des Bestimmungslandes an (19–27 % je nach Mitgliedstaat). Nutzen Sie das IOSS-System (Import One-Stop Shop) für Sendungen unter 150 €, um die Mehrwertsteuer vorab zu erheben und die Zollabfertigung zu vereinfachen.',
  },
  {
    question: 'Brauche ich ein Ursprungszeugnis, um Einfuhrzölle zu senken?',
    answer: 'Ja — ein Ursprungszeugnis (Certificate of Origin, CoO) ist das wichtigste Einzeldokument zur Zollsenkung. Für US-Importe aus China verringert ein UZ derzeit nicht den Section-301-Zuschlag, ist aber für FTA-Ansprüche bei anderen Herkunftsländern unerlässlich. Für Importe nach Australien, Kanada oder ins UK im Rahmen von CPTPP oder bilateralen FTAs kann ein gültiges UZ den Zoll auf 0 % senken. Ihre Fabrik sollte dies als Teil der Versanddokumente bereitstellen — wenn sie das nicht kann oder will, suchen Sie einen anderen Lieferanten. Das UZ muss von CCPIT (China Council for the Promotion of International Trade) gestempelt sein, um gültig zu sein, kostet etwa 30–50 $ und dauert 2–3 Werktage.',
  },
  {
    question: 'Wie berechne ich die gesamten Landed Cost für eine Sonnenbrillenbestellung?',
    answer: 'Landed Cost = FOB-Preis × Menge + Seefracht (oder Luftfracht) + Versicherung (typisch 0,3–0,5 % des CIF-Werts) + Zoll (% des CIF) + Zollagentengebühr (75–200 $ pro Eintrag) + Hafen-/Bestimmungsgebühren + Letzte-Meile-Lieferung. Beispiel: 1.000 Stück à 5 $/Stück FOB = 5.000 $. Seefracht = 600 $. Versicherung = 28 $. CIF = 5.628 $. US-Zoll zu 9,5 % = 535 $. Zollagent = 125 $. Hafengebühren = 85 $. Lieferung = 250 $. Gesamte Landed Cost = 6.623 $. Stückkosten = 6,62 $. Planen Sie immer einen Puffer von 5–10 % für Währungsschwankungen und unerwartete Gebühren ein.',
  },
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'einfuhrzolle-sonnenbrillen';

export default function EinfuhrzolleSonnenbrillenPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Startseite', href: '/de/' },
          { name: 'Blog', href: '/de/blog/' },
          { name: 'Einfuhrzölle & Zolltarife für Sonnenbrillen 2026' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Einfuhrzölle & Zolltarife für Sonnenbrillen 2026: Sätze für USA, EU, UK, AU, CA",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Vollständiger Leitfaden zu Einfuhrzöllen für Sonnenbrillen. HS-Codes, Zollsätze nach Ländern, Freihandelsabkommen und Berechnung der Landed Cost. Praktischer Leitfaden eines Fabrikbesitzers zum Sparen beim Zoll.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/de/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}} />

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import & Logistik</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>13 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Einfuhrzölle & Zolltarife für Sonnenbrillen 2026: Länderspezifische Sätze im Überblick
          </h1>
          <p className="text-xl text-gray-600">
            Nach 20 Jahren Erfahrung im Brillenexport aus China in über 50 Länder: Hier ist die Wahrheit über Zölle — die Zahlen, die Spielräume und die Dokumente, die Ihnen tatsächlich Geld sparen.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Inhaltsverzeichnis</h2>
          <ul className="space-y-2">
            <li><a href="#hs-codes" className="text-primary-600 hover:underline">HS-Codes für Sonnenbrillen: Die richtige Klassifizierung</a></li>
            <li><a href="#us-duties" className="text-primary-600 hover:underline">US-Einfuhrzölle: Section 301 &amp; die 9,5-%-Realität</a></li>
            <li><a href="#eu-duties" className="text-primary-600 hover:underline">EU-Einfuhrzölle: Niedrige Zölle, hohe Mehrwertsteuer</a></li>
            <li><a href="#uk-au-ca" className="text-primary-600 hover:underline">UK, Australien &amp; Kanada: FTA-Chancen</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">So berechnen Sie die Landed Cost (mit echten Zahlen)</a></li>
            <li><a href="#duty-reduction" className="text-primary-600 hover:underline">7 Wege zur Senkung Ihrer Einfuhrzölle</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Häufig gestellte Fragen</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="Einfuhrzollsätze für Sonnenbrillen auf einen Blick" />

          {/* ─── Section 1: HS Codes ─── */}
          <h2 id="hs-codes" className="text-3xl font-bold mt-16 mb-6">HS-Codes für Sonnenbrillen: Die richtige Klassifizierung</h2>
          <p>
            Bevor wir über Zollsätze sprechen, eines vorweg: Wenn Ihr Zollagent den falschen HS-Code anmeldet, sparen Sie kein Geld — Sie schaffen eine Haftung. Ich habe Importeure erlebt, die versuchten, Sonnenbrillen als „Kunststoffzubehör" (HS 3926) zu deklarieren, um einen niedrigeren Satz zu bekommen. CBP hat jeden einzelnen erwischt.
          </p>
          <p>
            Sonnenbrillen fallen unter <strong>HS 9004.10</strong> — „Brillen, Schutzbrillen und ähnliche Waren, Korrektionsbrillen, Schutzbrillen oder andere, Sonnenbrillen." Dies ist weltweit harmonisiert, d. h. jedes Land verwendet die gleichen ersten sechs Ziffern. Die wichtigsten Unterklassifizierungen:
          </p>
          <ul>
            <li><strong>9004.10.0000 (US):</strong> Sonnenbrillen — ohne Sehstärke, inkl. Mode- und Sportsonnenbrillen</li>
            <li><strong>9004.90.0000 (US):</strong> Andere Brillen — Korrektionssonnenbrillen, Schutzbrillen, Lesebrillen</li>
            <li><strong>9004.10.1000 (EU):</strong> Sonnenbrillen mit optisch bearbeiteten Gläsern</li>
            <li><strong>9004.10.9100 (EU):</strong> Sonnenbrillen mit einfach geformten Gläsern (die meisten chinesischen Exporte fallen hierunter)</li>
          </ul>
          <p>
            <strong>Profitipp direkt aus der Fabrik:</strong> Wenn Ihre Sonnenbrillen UV400-Schutz haben (was bei unseren standardmäßig der Fall ist), fallen sie trotzdem unter 9004.10. Die Unterscheidung „Korrektionsbrille vs. Schutzbrille" ist nur relevant, wenn Sie Brillen mit Sehstärke importieren. Die meisten Großhandelsbestellungen von Lieferanten wie EyeView werden unabhängig von den Glaseigenschaften korrekt als 9004.10 klassifiziert.
          </p>

          {/* ─── Section 2: US Duties ─── */}
          <h2 id="us-duties" className="text-3xl font-bold mt-16 mb-6">US-Einfuhrzölle: Section 301 &amp; die 9,5-%-Realität</h2>
          <p>
            Die Vereinigten Staaten sind der größte Markt für Sonnenbrillenimporte — und der teuerste in Bezug auf Zölle, wenn Sie aus China beziehen. Hier die Aufschlüsselung:
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">MFN-Basissatz: 2,0 %</h3>
          <p>
            Im Rahmen normaler Handelsbeziehungen (MFN) unterliegt HS 9004.10.0000 einem Wertzoll von 2,0 %. Das sind 20 $ pro 1.000 $ deklariertem Wert. Nicht schlecht.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Section-301-Zuschlag: +7,5 %</h3>
          <p>
            Hier wird es teuer. Die Section-301-Zölle — seit 2018 auf Waren chinesischen Ursprungs erhoben — fügen ab 2026 zusätzliche 7,5 % auf HS 9004.10.0000 hinzu. Der ursprüngliche Satz von 25 % wurde 2020 auf 7,5 % gesenkt und ist seither unverändert. <strong>Effektiver US-Gesamtzoll auf chinesische Sonnenbrillen: 9,5 %.</strong>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <p className="font-bold text-amber-800 mb-2">⚠️ Section 301 gilt für das Herstellungsland, nicht für das Versandland</p>
            <p className="text-amber-700 text-sm">Wenn Ihre Sonnenbrillen in China hergestellt, aber aus einem Lager in Hongkong versendet werden, gilt Section 301 trotzdem. Der US-Zoll prüft, wo die Waren hergestellt wurden, nicht, wo sie aufs Schiff geladen wurden. Der einzige Weg, Section 301 zu vermeiden, ist die vollständige Produktion außerhalb Chinas.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">De Minimis: Das 800-$-Schlupfloch</h3>
          <p>
            Gemäß Section 321 gehen Sendungen im Wert von 800 $ oder weniger zollfrei in die USA ein — einschließlich Section-301-Waren. So starten viele kleine Marken: 50–100 Stück als Muster bestellen, auf mehrere Sendungen unter je 800 $ aufteilen und null Zoll zahlen. Das ist völlig legal, solange jede Sendung echt unter der Grenze liegt und Sie Bestellungen nicht künstlich aufteilen, um Zölle zu umgehen (das nennt man „strukturierten De-Minimis-Missbrauch", und CBP geht dagegen vor).
          </p>

          {/* ─── Section 3: EU Duties ─── */}
          <h2 id="eu-duties" className="text-3xl font-bold mt-16 mb-6">EU-Einfuhrzölle: Niedrige Zölle, hohe Mehrwertsteuer</h2>
          <p>
            Die EU ist erfrischend unkompliziert im Vergleich zu den USA — kein Section 301, keine Handelskriegszuschläge. Aber die Mehrwertsteuer ist der eigentliche Kostenfaktor.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Standardzoll: 2,9 %</h3>
          <p>
            Nach dem Gemeinsamen Zolltarif der EU (TARIC) unterliegt HS 9004.10.9100 (Sonnenbrillen mit einfach geformten Gläsern, was die meisten Großhandelsimporte abdeckt) einem Zollsatz von 2,9 %. Das ist weniger als die Hälfte des effektiven US-Satzes. Für eine CIF-Sendung im Wert von 10.000 € zahlen Sie 290 € Zoll.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Mehrwertsteuer: Die eigentlichen Kosten</h3>
          <p>
            Das ist es, worüber neue Importeure stolpern: Die EU erhebt Mehrwertsteuer auf den verzollten Wert. Wenn Ihre Ware in Deutschland ankommt (19 % MwSt.), lautet die Rechnung:
          </p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 font-mono text-sm">
            <p>CIF-Wert: 10.000 €</p>
            <p>Zoll (2,9 %): +290 €</p>
            <p>Verzollter Wert: 10.290 €</p>
            <p>MwSt. (19 %): +1.955 €</p>
            <p className="font-bold">Gesamtkosten beim Zoll: 12.245 €</p>
          </div>
          <p>
            <strong>Wichtig:</strong> Die Mehrwertsteuer ist in der Regel erstattungsfähig, wenn Sie ein mehrwertsteuerlich registriertes Unternehmen sind. Sie zahlen sie beim Import und holen sie sich mit der nächsten Umsatzsteuervoranmeldung zurück. Aber Sie brauchen Liquidität, um die 90–120 Tage zwischen Zahlung und Erstattung zu überbrücken.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IOSS: Vorausgezahlte MwSt. für Kleinbestellungen</h3>
          <p>
            Der Import One-Stop Shop (IOSS) ermöglicht es Ihnen, die Mehrwertsteuer bereits am Verkaufspunkt für Sendungen unter 150 € zu erheben. Der Käufer zahlt die MwSt. beim Checkout, Sie führen sie monatlich an eine einzige EU-Steuerbehörde ab, und die Ware passiert den Zoll, ohne dass der Empfänger bei Lieferung etwas zahlen muss. EyeView unterstützt IOSS-konforme Rechnungsstellung — teilen Sie uns dies bei der Bestellung mit, und wir formatieren Ihre Handelsrechnung entsprechend.
          </p>

          {/* ─── Section 4: UK, AU, CA ─── */}
          <h2 id="uk-au-ca" className="text-3xl font-bold mt-16 mb-6">UK, Australien &amp; Kanada: FTA-Chancen</h2>
          <p>
            Diese drei Märkte bieten die besten Möglichkeiten zur Zollsenkung, wenn Sie die Handelsabkommen kennen.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Vereinigtes Königreich: 2,0 % Basissatz, GSP verfügbar</h3>
          <p>
            Nach dem Brexit erhebt das UK einen Zoll von 2,0 % auf HS 9004.10 Sonnenbrillen. Im Rahmen des UK Generalised Scheme of Preferences (GSP) kommen Waren aus China für Präferenzsätze in Frage — aber die Präferenzmarge bei 9004.10 ist null (der MFN-Satz ist bereits der GSP-Mindestsatz). Was die Rechnung ändert: Das UK Developing Countries Trading Scheme (DCTS) bietet 0 % Zoll für Sonnenbrillen aus 65 berechtigten Ländern, darunter Indien und Pakistan. Wenn Sie Acetat-Fassungen von einer indischen Fabrik beziehen können, sinkt der UK-Zoll auf null.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Australien: 5,0 % Standard, 0 % im Rahmen des FTA</h3>
          <p>
            Australiens Standardzoll auf HS 9004.10 beträgt 5,0 % — der höchste unter den großen Märkten. Aber das China-Australia Free Trade Agreement (ChAFTA) hat die Zölle auf Sonnenbrillen 2019 abgeschafft. <strong>Mit einem gültigen Ursprungszeugnis beträgt der australische Zoll 0 %.</strong> Jeder australische Kunde, den ich beliefert habe, spart die vollen 5 % mit ordnungsgemäßer UZ-Dokumentation. Der Papierkram kostet 35 $ bei CCPIT und dauert 3 Tage. Bei einer Bestellung von 20.000 $ sind das 1.000 $ Ersparnis.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Kanada: 0 % im Rahmen des CPTPP</h3>
          <p>
            Kanada hat Zölle auf Sonnenbrillen chinesischen Ursprungs im Rahmen des Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP) abgeschafft. <strong>Kanadische Importeure zahlen 0 % Zoll auf HS 9004.10 aus China</strong> — eine der wenigen Kategorien, in denen die chinesisch-kanadischen Handelsbeziehungen zugunsten des Importeurs wirken. Achten Sie nur darauf, dass Ihre Handelsrechnung das Ursprungsland China und den HS-Code 9004.10 eindeutig ausweist.
          </p>

          {/* ─── Section 5: Landed Cost ─── */}
          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">So berechnen Sie die Landed Cost (mit echten Zahlen)</h2>
          <p>
            Die meisten neuen Importeure schauen auf den FOB-Stückpreis und denken, das seien ihre Kosten. Ist es nicht. Hier eine echte Landed-Cost-Berechnung für eine typische Bestellung:
          </p>

          <div className="bg-gray-100 rounded-lg p-6 my-6 font-mono text-sm space-y-1">
            <p className="font-bold text-base mb-3">Beispiel: 1.000 Acetat-Sonnenbrillen → USA</p>
            <p>FOB-Preis (1.000 × 5,00 $): <span className="float-right">5.000,00 $</span></p>
            <p>Seefracht (LCL, Shanghai→LA): <span className="float-right">+600,00 $</span></p>
            <p>Transportversicherung (0,5 % des CIF): <span className="float-right">+28,00 $</span></p>
            <p className="border-t border-gray-300 pt-1">CIF-Wert (Zollbemessungsgrundlage): <span className="float-right">5.628,00 $</span></p>
            <p>US-Zoll (9,5 % des CIF): <span className="float-right">+534,66 $</span></p>
            <p>Zollagentengebühr: <span className="float-right">+125,00 $</span></p>
            <p>MPF (Merchandise Processing Fee): <span className="float-right">+29,66 $</span></p>
            <p>HMF (Harbor Maintenance Fee, 0,125 %): <span className="float-right">+7,04 $</span></p>
            <p>Hafen-/CFS-Gebühren: <span className="float-right">+85,00 $</span></p>
            <p>Letzte-Meile-Transport (Hafen→Lager): <span className="float-right">+250,00 $</span></p>
            <p className="border-t border-gray-300 pt-1 font-bold">Gesamte Landed Cost: <span className="float-right">6.659,36 $</span></p>
            <p className="font-bold text-primary-600">Landed Cost pro Stück: <span className="float-right">6,66 $</span></p>
          </div>

          <p>
            Dieses 5,00-$-FOB-Stück kostet tatsächlich 6,66 $, wenn es in Ihrem Lager ankommt — ein Aufschlag von 33 % auf den Fabrikpreis. Und das ist das Best-Case-Szenario mit Seefracht. Luftfracht würde 800–1.200 $ zusätzlich kosten und die Landed Cost auf über 7,50 $/Stück treiben.
          </p>

          {/* ─── Section 6: Duty Reduction ─── */}
          <h2 id="duty-reduction" className="text-3xl font-bold mt-16 mb-6">7 Wege zur Senkung Ihrer Einfuhrzölle</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">1. Besorgen Sie das Ursprungszeugnis — jedes Mal</h3>
          <p>
            Das ist nicht verhandelbar für Australien, Kanada und jeden Markt, in dem FTAs gelten. Bitten Sie Ihre Fabrik, jeder Sendung über 500 $ Warenwert ein CCPIT-gestempeltes UZ beizulegen. Kosten: 30–50 $. Potenzielle Ersparnis: 5 % des CIF-Werts. ROI: 100-fach oder mehr.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Nutzen Sie De Minimis für Muster und Kleinbestellungen</h3>
          <p>
            Halten Sie erste Musterbestellungen unter 800 $ (US), 150 € (EU) oder 135 £ (UK), um zollfrei einzuführen. Das ist der beste Hack, um neue Styles zu testen, bevor Sie sich auf größere Mengen festlegen.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. Ziehen Sie eine aufgeteilte Produktion in Betracht</h3>
          <p>
            Wenn Sie in die USA liefern und der 7,5-%-Section-301-Zuschlag Ihre Margen auffrisst, erwägen Sie die Produktion in Vietnam oder Indien statt in China. Vietnam hat nur MFN-Sätze (2,0 %) ohne Section 301. Die Fabrikstückkosten mögen 0,30–0,50 $ höher sein, aber die Zollersparnis übersteigt oft den Produktionsaufschlag bei Bestellungen über 10.000 $.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Deklarieren Sie genaue — aber nicht überhöhte — Werte</h3>
          <p>
            Den Zollwert zu niedrig anzugeben ist illegal. Aber zu hoch zu deklarieren ist reine Geldverschwendung. Geben Sie den tatsächlichen Transaktionswert an (was Sie der Fabrik gezahlt haben). Erhöhen Sie ihn nicht „für Versicherungszwecke" — schließen Sie stattdessen eine separate Transportversicherung ab. Eine Überdeklaration von 1.000 $ bei einer US-Sendung kostet 95 $ unnötigen Zoll.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. Versenden Sie FCL statt LCL, wenn möglich</h3>
          <p>
            Wenn Sie 3.000+ Stück bestellen, ist eine volle Containerladung (FCL) pro Einheit günstiger als Teilladung (LCL) und vermeidet CFS-Gebühren (Container Freight Station) am Zielort. Der Break-Even-Punkt liegt typischerweise bei etwa 5–8 Kubikmetern Brillenware — etwa 2.000–3.000 Stück mit Verpackung.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Beauftragen Sie einen lizenzierten Zollagenten, nicht den Standarddienst Ihres Spediteurs</h3>
          <p>
            Spediteure bündeln die Zollabfertigung oft zu überhöhten Preisen. Ein eigener lizenzierter Zollagent berechnet 75–150 $ pro Eintrag gegenüber 200–350 $ von Spediteuren, die die Arbeit weitervergeben. Für Vielimporteure (12+ Sendungen/Jahr) ist eine Dauerverzollungsbürgschaft (500 $/Jahr) günstiger als Einzelbürgschaften (50–75 $ pro Vorgang).
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Planen Sie Ihre Sendungen außerhalb der Hochsaison</h3>
          <p>
            Seefrachtraten steigen während der Hochsaison um 40–80 % (August–Oktober für Weihnachtsware, Januar–Februar vor dem chinesischen Neujahr). Da die Fracht Teil Ihres CIF-Werts ist — und Zölle auf den CIF-Wert berechnet werden — bedeutet höhere Fracht höhere Zölle. Versenden Sie im März–Mai oder November, um niedrigere Frachtraten und damit niedrigere Zollberechnungen zu erhalten.
          </p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Versanddokumente? Übernehmen wir.</h2>
            <p className="text-xl mb-6 opacity-90">Jede EyeView-Bestellung enthält ein CCPIT-gestempeltes Ursprungszeugnis, eine Handelsrechnung mit korrekten HS-Codes und eine Packliste, formatiert nach den Zollanforderungen Ihres Landes. Nennen Sie uns Ihr Zielland, und wir optimieren Ihre Dokumente zur Minimierung der Zölle.</p>
            <Link
              href="/de/kontakt"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Kostenloses Angebot anfordern
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrikhalle</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/de/blog/import-sonnenbrillen-aus-china" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen aus China importieren</h3>
                <p className="text-gray-600 text-sm">Schritt-für-Schritt-Importleitfaden: Zoll, Versand, Qualitätskontrolle.</p>
              </Link>
              <Link href="/de/blog/mindestbestellmenge-sonnenbrillen" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">MOQ-Leitfaden für Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Wie viele Stück sollten Sie zuerst bestellen? Intelligente Skalierungsstrategien.</p>
              </Link>
              <Link href="/de/kontakt" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Kontakt</h3>
                <p className="text-gray-600 text-sm">Angebot für Ihre individuelle Sonnenbrillen-Großbestellung anfordern.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
