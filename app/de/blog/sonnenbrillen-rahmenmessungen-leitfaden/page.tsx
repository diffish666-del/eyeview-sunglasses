import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Sonnenbrillen-Rahmenmessungen erklärt: PD, Stegbreite, Bügellänge',
  description: 'Ein Fabrikbesitzer erklärt Sonnenbrillen-Rahmenmessungen — PD, Stegbreite, Bügellänge, Rahmenbreite — mit echten Großhandelsdaten, damit Sie keine Rahmen mehr bestellen, die Ihren Kunden nicht passen.',
  keywords: ['Sonnenbrillen Rahmenmessungen', 'PD Pupillardistanz Sonnenbrillen', 'Stegbreite Sonnenbrille', 'Bügellänge Sonnenbrille', 'Rahmenbreite Sonnenbrille', 'Sonnenbrillen Größenratgeber Großhandel', 'Sonnenbrillen messen', 'Sonnenbrillen Passform Großhandel', 'Asian Fit vs European Fit Sonnenbrillen', 'Sonnenbrillen Rahmendimensionen erklärt'],
  alternates: {
    canonical: '/de/blog/sonnenbrillen-rahmenmessungen-leitfaden',
    languages: {
      'en': '/blog/sunglasses-frame-measurements-guide',
      'es': '/es/blog/guia-medidas-monturas-gafas',
      'fr': '/fr/blog/guide-mesures-montures-lunettes',
      'it': '/it/blog/guida-misure-montature-occhiali',
      'pt': '/pt/blog/guia-medidas-armacoes-oculos',
    },
  },
};

const takeaways = [
  'Rahmenmessungen sind keine technischen Details — sie sind der Unterschied zwischen einer Sonnenbrille, die im Regal liegt, und einer, die tatsächlich getragen wird; falsche Stegbreite oder Bügellänge machen Ihren 8-€-Großhandelsrahmen zu unverkäuflicher Ware, unabhängig von der Glasqualität',
  'Die Pupillardistanz (PD) ist die am meisten übersehene Messung im Brillengroßhandel — die meisten Fabrikkataloge geben die Rahmen-PD als einzelne Zahl an, aber das Toleranzfenster für bequemen Sitz beträgt nur ±2 mm pro Auge',
  'Asian-Fit-Sonnenbrillen sind kein Marketing-Gag — sie existieren, weil der durchschnittliche asiatische Nasensteg 2–4 mm niedriger und 3–5 mm breiter ist als der durchschnittliche kaukasische Nasensteg, was Rahmen mit tieferen Stegpunkten und schmalerer Stegbreite erfordert',
  'Die Bügellänge bestimmt, ob Ihre Rahmen für europäische (140–145 mm), amerikanische (140–150 mm) oder asiatische (125–140 mm) Kopfgrößen passen — 145 mm ist der sicherste universelle Standard, aber für eine spezifische Region müssen Sie Ihre OEM-Spezifikation anpassen',
  'Der häufigste Messfehler von Großhandelskäufern ist die Bestellung von Rahmen nach Aussehen statt nach Maß — ein 55-mm-Glasbreitenrahmen sieht am Model toll aus, passt aber nur etwa 40 % der erwachsenen Gesichter; 52 mm Glasbreite ist der Sweet Spot für universelle Passform',
];

const quickStats = [
  { label: 'Universeller Rahmen-PD Sweet Spot', value: '62–64 mm' },
  { label: 'PD-Komforttoleranz pro Auge', value: '±2 mm' },
  { label: 'Europ. Ø Bügellänge', value: '140–145 mm' },
  { label: 'Asiat. Ø Bügellänge', value: '125–140 mm' },
  { label: 'Standard-Stegbreitenbereich', value: '14–24 mm' },
  { label: 'Häufigste Glasbreite (Universal)', value: '52 mm' },
  { label: 'Asiat. Nasensteg — niedriger vs. kaukasisch', value: '2–4 mm niedriger' },
  { label: 'Rahmenrücksendungen wegen schlechter Passform', value: '12–18 % der B2C-Rücksendungen' },
];

const faqs = [
  {
    question: 'Was bedeuten die drei Zahlen auf Sonnenbrillenrahmen (z. B. 52□18-145)?',
    answer: 'Die drei Zahlen sind der internationale Rahmenmessstandard: Die erste Zahl (52) ist die Glasbreite in Millimetern, gemessen horizontal an der breitesten Stelle eines einzelnen Glases. Die zweite Zahl (18) ist die Stegbreite — der Abstand zwischen den beiden Gläsern an der schmalsten Stelle des Stegs. Die dritte Zahl (145) ist die Bügellänge, gemessen von der Scharnierschraube bis zur Bügelspitze, einschließlich der Kurve hinter dem Ohr. Diese drei Zahlen geben Ihnen etwa 80 % dessen, was Sie über die Rahmenpassform wissen müssen. Die vierte Zahl, die einige Hersteller angeben, ist die Glashöhe — nicht immer aufgedruckt, aber entscheidend für Gleitsicht- oder Korrektionsbrillen.',
  },
  {
    question: 'Wie messe ich die Pupillardistanz (PD) für Sonnenbrillen?',
    answer: 'Die PD ist der Abstand in Millimetern zwischen den Mittelpunkten Ihrer beiden Pupillen. Es gibt zwei Arten: binokulare PD (Abstand zwischen beiden Pupillen, typischerweise 54–74 mm bei Erwachsenen) und monokulare PD (Abstand jeder Pupille zur Nasenmitte, typischerweise 27–37 mm pro Auge). Für das Rahmendesign ist die entscheidende Beziehung: Rahmen-PD = Glasbreite + Stegbreite. Ein 52□18-Rahmen hat also eine Rahmen-PD von 70 mm. Wenn Ihr Kunde eine binokulare PD von 62 mm hat, ist dieser Rahmen 8 mm zu breit — die optischen Zentren der Gläser sind falsch ausgerichtet, was zu Augenbelastung und Kopfschmerzen führen kann.',
  },
  {
    question: 'Was ist der Unterschied zwischen Asian Fit und European Fit Sonnenbrillen?',
    answer: 'Asian-Fit-Sonnenbrillen (auch Low-Bridge-Fit genannt) haben drei wesentliche Unterschiede zu europäischen Standardrahmen: (1) Die Nasenpads oder der Steg sind 2–4 mm tiefer an der Rahmenfront positioniert, da der asiatische Nasensteg tiefer im Gesicht sitzt. (2) Die Stegbreite ist typischerweise 1–3 mm schmaler (15–17 mm vs. 17–20 mm bei europäischen Rahmen), da die asiatische Nasenknochenstruktur weniger seitlichen Halt bietet. (3) Die Nasenpads haben längere Arme mit mehr vertikalem Spielraum (8–10 mm vs. 5–6 mm bei Standardrahmen). Zusätzlich ist die Rahmenkrümmung oft etwas flacher (3–5° vs. 5–8°), um den Druck auf die Wangenknochen zu reduzieren.',
  },
  {
    question: 'Welche Bügellänge sollte ich für meine Großhandels-Sonnenbrillenbestellung angeben?',
    answer: 'Die Bügellänge ist die regionalste Rahmenmessung. Für den europäischen Markt geben Sie 140–145 mm an — das passt etwa 85 % der europäischen Erwachsenen. Für den nordamerikanischen Markt sind 140–150 mm sicher, wobei 145 mm am universellsten ist. Für asiatische Märkte kürzer: 125–140 mm, da die durchschnittliche asiatische Kopftiefe geringer ist. Für Nahost- und südasiatische Märkte funktionieren 140–145 mm generell, aber Anfragen nach 150 mm für größere Kopfgrößen sind möglich. Wenn Sie eine universelle Sonnenbrillenlinie für mehrere Kontinente auf den Markt bringen, geben Sie 145-mm-Bügel an — für asiatische Gesichter etwas lang, für große europäische und amerikanische Köpfe etwas kurz, aber die beste Einheitsgröße.',
  },
  {
    question: 'Wie beeinflussen Stegbreite und Nasenpaddesign den Tragekomfort von Sonnenbrillen?',
    answer: 'Die Stegbreite ist die Messung, die Käufer am häufigsten übersehen, und sie verursacht die meisten Komfortbeschwerden. Der Steg trägt 80–90 % des Rahmgewichts — zu breit und die Brille rutscht, zu schmal und sie kneift. Standard-Stegbreiten reichen von 14 mm (schmal, oft bei Metallrahmen mit verstellbaren Nasenpads) bis 24 mm (breit, üblich bei übergroßen Acetat-Modebrillen). Der Sweet Spot für die meisten Unisex-Erwachsenenrahmen liegt bei 17–19 mm mit verstellbaren Nasenpads oder einem gut konturierten Schlüssellochsteg. Asiatische Gesichter brauchen Nasenpads mit mehr vertikalem Abstand, europäische Gesichter moderaten Abstand, und afrikanische Gesichter profitieren oft von breiter gesetzten Nasenpads mit flacherem Winkel.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'sonnenbrillen-rahmenmessungen-leitfaden';

export default function SonnenbrillenRahmenmessungenLeitfaden() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Startseite', href: '/de/' },
          { name: 'Blog', href: '/de/blog/' },
          { name: 'Sonnenbrillen-Rahmenmessungen erklärt' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sonnenbrillen-Rahmenmessungen erklärt: PD, Stegbreite, Bügellänge — Ein Leitfaden für Fabrikkäufer",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Ein Fabrikbesitzer erklärt Sonnenbrillen-Rahmenmessungen — PD, Stegbreite, Bügellänge, Rahmenbreite — mit echten Großhandelsdaten für bessere Passform.",
          "inLanguage": "de",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/de/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "de",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fabrik-Know-how</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sonnenbrillen-Rahmenmessungen erklärt: PD, Stegbreite, Bügellänge
          </h1>
          <p className="text-xl text-gray-600">
            Die meisten Großhandelskäufer wählen Rahmen nach Fotos aus. Ich wähle sie nach den Zahlen — denn Messungen entscheiden, ob Ihre Kunden die Dinger tatsächlich tragen. Hier erfahren Sie alles über Sonnenbrillen-Rahmenmessungen, von jemandem, der sie seit 20 Jahren herstellt.
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
            <li><a href="#section-1" className="text-primary-600 hover:underline">Warum Rahmenmessungen für Großhandelskäufer wichtig sind</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">PD (Pupillardistanz) — Was sie ist und warum Fabriken darauf achten</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Stegbreite — Die versteckte Passform-Variable</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Bügellänge und Rahmenbreite — Die Gesamtpassform optimieren</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Häufig gestellte Fragen</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Rahmenmessungen — Schnelle Fakten" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Warum Rahmenmessungen für Großhandelskäufer wichtig sind</h2>
          
          <p>Lassen Sie mich von einem Kunden erzählen, der 18.000 $ mit einem Container Sonnenbrillen verloren hat.</p>
          
          <p>Er war ein Erstimporter aus Deutschland. Bestellte 3.000 Acetat-Wayfarer — gute Qualität, gute Gläser, wettbewerbsfähiger Preis von 6 $ FOB. Die Muster sahen wunderschön aus. Er schickte mir Fotos vom Auspacken, stolz wie Oskar. Drei Monate später rief er an. Die Retourenquote lag bei 22 %. Seine Händler schickten Kartons zurück. Die Rahmen waren zu breit für europäische Gesichter — 55 mm Glasbreite mit 20 mm Steg. Die Gesamtrahmenbreite betrug 142 mm, was für ein großes amerikanisches Gesicht passt, aber am durchschnittlichen europäischen Mann komisch übergroß aussieht. Seine Kunden probierten sie an, lachten und legten sie zurück.</p>
          
          <p>Diese Bestellung kostete ihn 18.000 $ für die Ware, 4.200 $ für den Transport und sechs Monate verschwendete Zeit. Alles nur, weil niemand die Messungen vor der Produktion geprüft hatte.</p>
          
          <p>Ich habe das in 20 Jahren dutzende Male gesehen. Großhandelskäufer — besonders neue — wählen Rahmen nach Fotos, Stil und Farbe aus. Sie schauen auf das Datenblatt, sehen die Zahlen und denken „das sind nur technische Details, die Fabrik kümmert sich darum." Sie erkennen nicht, dass Rahmenmessungen <strong>der größte Einzelfaktor für den Abverkauf</strong> sind. Ein Rahmen, der Ihrem Zielmarkt nicht passt, ist kein Produkt — es ist totes Inventar mit Zollanmeldung.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Die wahren Kosten falscher Messungen</h3>
          
          <p>Wenn Sie Rahmen bestellen, die Ihren Kunden nicht passen, zahlen Sie auf mindestens vier Arten:</p>
          
          <p><strong>1. Direkte Retouren.</strong> Im B2C-E-Commerce liegen die Retourenquoten für Brillen wegen schlechter Passform im Schnitt bei 12–18 %. Wenn Sie Großhändler für Einzelhandelsgeschäfte sind, trägt der Händler diese Kosten nicht. Er schickt sie an Sie zurück. Oder schlimmer: Er bestellt nicht nach.</p>
          
          <p><strong>2. Markenschaden.</strong> Eine schlechte Passform-Erfahrung schafft einen Kunden, der Ihre Marke mit Unbehagen verbindet. Er sagt nicht „die Stegbreite war 2 mm zu breit." Er sagt „Ihre Sonnenbrillen sind unbequem." Und erzählt es fünf Freunden.</p>
          
          <p><strong>3. Totes Inventar.</strong> Rahmen, die nicht passen, können nicht „repariert" werden. Man kann Acetat nicht umformen. Man kann einen Titanbügel nicht dehnen. Dieses Inventar liegt im Lager, sammelt Lagerkosten, bis Sie es zu 40 % des Einstandspreises liquidieren.</p>
          
          <p><strong>4. Verpasste Chancen.</strong> Jeder Dollar, der in schlecht passenden Rahmen gebunden ist, ist ein Dollar, den Sie nicht in eine Nachbestellung der tatsächlich verkaufenden Rahmen investieren können.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">PD (Pupillardistanz) — Was sie ist und warum Fabriken darauf achten</h2>
          
          <p>Die Pupillardistanz — PD — ist der Abstand zwischen den Mittelpunkten Ihrer beiden Pupillen in Millimetern. Typische Erwachsenen-PD reicht von 54 mm bis 74 mm, wobei die große Mehrheit zwischen 58–68 mm liegt. Für Sonnenbrillen passt eine 62–64 mm PD dem breitesten erwachsenen Publikum.</p>
          
          <p>Was die meisten Käufer nicht verstehen: <strong>Rahmen-PD ist nicht gleich persönliche PD.</strong></p>
          
          <p>Rahmen-PD wird berechnet als: <strong>Glasbreite + Stegbreite.</strong> Bei einem 52□18-Rahmen beträgt die Rahmen-PD 70 mm (52 + 18). Das bedeutet, das optische Zentrum des linken Glases ist 70 mm vom optischen Zentrum des rechten Glases entfernt. Wenn Ihr Kunde eine persönliche PD von 62 mm hat, sind diese optischen Zentren 8 mm zu weit auseinander.</p>
          
          <p>Für nicht-verschreibungspflichtige Sonnenbrillen sind einige Millimeter PD-Abweichung in der Regel tolerierbar. Aber wenn Sie brillentaugliche Rahmen verkaufen, wird die PD kritisch. Eine Abweichung von 4 mm+ pro Auge verursacht Augenbelastung, Kopfschmerzen und verschwommenes peripheres Sehen.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">PD-Bereiche nach Markt — Was die Daten sagen</h3>
          
          <p>Nach 20 Jahren Export in über 50 Länder, hier ist, was ich über die PD-Verteilung in verschiedenen Märkten beobachtet habe:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Markt</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Erw. Männer Ø PD</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Erw. Frauen Ø PD</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Sichere Rahmen-PD</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Nordamerika</td><td className="border border-gray-300 px-4 py-2">64–68 mm</td><td className="border border-gray-300 px-4 py-2">60–64 mm</td><td className="border border-gray-300 px-4 py-2">63–66 mm</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Nordeuropa</td><td className="border border-gray-300 px-4 py-2">63–67 mm</td><td className="border border-gray-300 px-4 py-2">59–63 mm</td><td className="border border-gray-300 px-4 py-2">62–65 mm</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Südeuropa</td><td className="border border-gray-300 px-4 py-2">62–66 mm</td><td className="border border-gray-300 px-4 py-2">58–62 mm</td><td className="border border-gray-300 px-4 py-2">61–64 mm</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Ostasien (China, Japan, Korea)</td><td className="border border-gray-300 px-4 py-2">60–65 mm</td><td className="border border-gray-300 px-4 py-2">57–62 mm</td><td className="border border-gray-300 px-4 py-2">60–63 mm</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Südostasien</td><td className="border border-gray-300 px-4 py-2">59–64 mm</td><td className="border border-gray-300 px-4 py-2">56–61 mm</td><td className="border border-gray-300 px-4 py-2">59–62 mm</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Naher Osten</td><td className="border border-gray-300 px-4 py-2">63–68 mm</td><td className="border border-gray-300 px-4 py-2">59–63 mm</td><td className="border border-gray-300 px-4 py-2">62–65 mm</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Lateinamerika</td><td className="border border-gray-300 px-4 py-2">62–67 mm</td><td className="border border-gray-300 px-4 py-2">58–63 mm</td><td className="border border-gray-300 px-4 py-2">61–64 mm</td></tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 italic">Dies sind Durchschnittswerte auf Fabrikebene basierend auf Kundenbestellmustern und Passform-Feedback über zwei Jahrzehnte — keine begutachteten anthropologischen Daten, aber genau genug, um Rahmen zu entwerfen, die echten Kunden passen.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Stegbreite — Die versteckte Passform-Variable</h2>
          
          <p>Wenn PD die Messung ist, über die Käufer streiten, ist die Stegbreite die, die sie völlig ignorieren — bis die Retouren anfangen.</p>
          
          <p>Der Steg ist der Teil des Rahmens, der auf Ihrer Nase sitzt. Er trägt 80–90 % des Rahmgewichts. Bei einem 35-Gramm-Acetatrahmen sind das etwa 30 Gramm konstanter Abwärtsdruck auf einen Haut- und Knorpelstreifen von vielleicht 6 mm Breite. Falscher Steg — selbst der leichteste Titanrahmen wird innerhalb von 20 Minuten unbequem.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Standard-Stegbreitenbereiche</h3>
          
          <p>Die Stegbreite ist normalerweise die zweite Zahl im Standard-Rahmenmessungstripel (z. B. die „18" in 52□18-145). Die Industrie reicht von 14 mm bis 24 mm:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Stegbreite</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Typische Verwendung</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Märkte</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2"><strong>14–16 mm</strong></td><td className="border border-gray-300 px-4 py-2">Metallrahmen mit verstellbaren Pads, Aviators, kleine Damen-Acetat</td><td className="border border-gray-300 px-4 py-2">Asien, zierliche Damen (alle Märkte)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2"><strong>17–19 mm</strong></td><td className="border border-gray-300 px-4 py-2">Universelle Unisex-Acetat, die meisten Wayfarer, optische Standardrahmen</td><td className="border border-gray-300 px-4 py-2">Global — häufigster Bereich für Massenmarkt</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2"><strong>20–22 mm</strong></td><td className="border border-gray-300 px-4 py-2">Große Herren-Acetat, übergroße Mode, Aviators ohne Pads</td><td className="border border-gray-300 px-4 py-2">Nordamerika, Nordeuropa, Naher Osten</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2"><strong>23–24 mm</strong></td><td className="border border-gray-300 px-4 py-2">Übergroße Mode-Statements, Shield-Sonnenbrillen</td><td className="border border-gray-300 px-4 py-2">Nischen-Mode — nicht für Kern-Großhandelslinie</td></tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Stegdesign: Acetat vs. Metall vs. Spritzguss</h3>
          
          <p>Die Stegbreite allein sagt nicht, ob ein Rahmen passt — das <strong>Stegdesign</strong> ist genauso wichtig. Es gibt drei Grundtypen:</p>
          
          <p><strong>Sattelsteg (geformtes Acetat).</strong> Ein durchgehendes Acetatstück, geformt zum Sitzen auf der Nase. Sauberes Aussehen, keine beweglichen Teile. Der Nachteil: null Einstellbarkeit. Wenn die Stegkurve nicht zum Nasenprofil des Kunden passt, können Sie nichts tun. Sattelstege funktionieren am besten bei Rahmen unter 16 mm Stegbreite.</p>
          
          <p><strong>Schlüssellochsteg.</strong> Ein geformter Acetat- oder Metallsteg, der eine „Schlüsselloch"-Form bildet — oben breiter, am Kontaktpunkt schmaler. Visuell markant, und die geformte Form bietet mehr Kontaktpunkte als ein flacher Sattel, was die Gewichtsverteilung verbessert.</p>
          
          <p><strong>Verstellbare Nasenpads (Metallarme mit Silikonpads).</strong> Das empfehle ich für 90 % der Großhandelsbestellungen. Zwei unabhängige Metallarme mit weichen Silikon- oder PVC-Pads, die nach innen, außen, oben oder unten gebogen werden können. Dies gibt dem Träger oder Optiker etwa 8–10 mm Gesamtanpassung. Ja, verstellbare Nasenpads kosten 0,30–0,50 $ mehr als ein geformter Sattel. Ja, sie sind es wert.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Der Asian-Fit-Faktor</h3>
          
          <p>Sie können nicht ehrlich über Stegbreite sprechen, ohne den Asian-Fit-Markt anzusprechen. Hier die Realität von der Fabrikhalle:</p>
          
          <p>Der durchschnittliche asiatische Nasensteg sitzt 2–4 mm tiefer im Gesicht und ist 3–5 mm breiter in der Knochenstruktur als der durchschnittliche kaukasische Nasensteg. Rahmen, die für europäische oder amerikanische Gesichter mit höheren Stegkontaktpunkten und schmaleren Stegbreiten entworfen wurden, sitzen auf den meisten asiatischen Gesichtern nicht richtig.</p>
          
          <p>Asian-Fit-Rahmen korrigieren dies mit drei Designänderungen: (1) tieferer Stegkontaktpunkt an der Rahmenfront, (2) etwas schmalere Stegbreite (15–17 mm statt 17–19 mm) und (3) Nasenpads mit mehr vertikalem Abfall. Wenn 20 % oder mehr Ihrer Großhandelskunden in asiatische Märkte verkaufen, brauchen Sie eine Asian-Fit-SKU in Ihrer Linie.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Bügellänge und Rahmenbreite — Die Gesamtpassform optimieren</h2>
          
          <p>Wenn die Stegbreite den Komfort bestimmt, bestimmen Bügellänge und Gesamtrahmenbreite, ob die Sonnenbrille überhaupt auf dem Gesicht bleibt.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Bügellänge: Die regionale Variable</h3>
          
          <p>Die Bügellänge wird von der Scharnierschraube bis zur Bügelspitze gemessen, der Kurve hinter dem Ohr folgend. Standard-Industrielängen reichen von 125 mm bis 155 mm:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Bügellänge</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Größenlabel</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Am besten für</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">125–135 mm</td><td className="border border-gray-300 px-4 py-2">Klein / Jugend</td><td className="border border-gray-300 px-4 py-2">Kinder, zierliche Damen, asiatische Damen</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">135–140 mm</td><td className="border border-gray-300 px-4 py-2">Klein–Mittel</td><td className="border border-gray-300 px-4 py-2">Asiatisch Unisex, europäische Damen</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">140–145 mm</td><td className="border border-gray-300 px-4 py-2">Mittel</td><td className="border border-gray-300 px-4 py-2">Europäisch Unisex, globaler Universal-Fit (sicherster Standard)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">145–150 mm</td><td className="border border-gray-300 px-4 py-2">Mittel–Groß</td><td className="border border-gray-300 px-4 py-2">Nordamerikanische Herren, europäische Herren groß</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">150–155 mm</td><td className="border border-gray-300 px-4 py-2">Groß / XL</td><td className="border border-gray-300 px-4 py-2">Spezialgrößen, Big & Tall, nahöstliche Herren</td></tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Gesamtrahmenbreite — Die Summe aller Teile</h3>
          
          <p>Die Gesamtrahmenbreite ist keine der drei Standardmessungen, aber die praktischste Zahl für die Passform. Sie wird berechnet als: <strong>(Glasbreite × 2) + Stegbreite + ca. 3–5 mm für die Rahmenranddicke auf jeder Seite.</strong></p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Gesamtrahmenbreite</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Größe</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Typische Passform</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">115–125 mm</td><td className="border border-gray-300 px-4 py-2">Klein</td><td className="border border-gray-300 px-4 py-2">Zierliche Damen, Jugend, schmale Gesichter</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">125–135 mm</td><td className="border border-gray-300 px-4 py-2">Mittel</td><td className="border border-gray-300 px-4 py-2">Durchschnitt Erwachsene Unisex — meistverkaufte Größe weltweit</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">135–145 mm</td><td className="border border-gray-300 px-4 py-2">Groß</td><td className="border border-gray-300 px-4 py-2">Durchschnittlich-große Herren, übergroße Damenmode</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">145–155 mm</td><td className="border border-gray-300 px-4 py-2">XL</td><td className="border border-gray-300 px-4 py-2">Große Herren, Spezialgrößen</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>Der 125–135-mm-Bereich der Gesamtbreite ist, wo 60–70 % des globalen Sonnenbrillenumsatzes stattfinden. Ein 52-mm-Glasbreitenrahmen mit 17–19 mm Steg trifft diesen Bereich fast genau. Wenn Sie eine neue Großhandelslinie starten, beginnen Sie mit Rahmen in der 125–130-mm-Gesamtbreitenzone mit 145-mm-Bügeln.</p>

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
            <h2 className="text-3xl font-bold mb-4">Brauchen Sie Rahmenmessungen für Ihren Markt spezifiziert?</h2>
            <p className="text-xl mb-6 opacity-90">Nennen Sie mir Ihre Zielregion und Kundendemografie. Ich empfehle die exakten PD-, Stegbreiten-, Bügellängen- und Rahmenbreiten-Spezifikationen, die Passform maximieren und Retouren minimieren — basierend auf 20 Jahren Fabrikdaten, nicht auf Raten.</p>
            <Link
              href="/de/kontakt/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Kostenloses Angebot anfordern
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mehr aus der Fabrikhalle</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/de/blog/vergleich-rahmenmaterialien" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetat vs Metall: Rahmenmaterial-Leitfaden</h3>
                <p className="text-gray-600 text-sm">Welches Rahmenmaterial für Passform, Haltbarkeit und Großhandelskosten zu wählen ist.</p>
              </Link>
              <Link href="/de/blog/sonnenbrillen-gesichtsform-ratgeber" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sonnenbrillen-Gesichtsform-Ratgeber</h3>
                <p className="text-gray-600 text-sm">Rahmenmessungen auf Gesichtsformen abstimmen für besseren Abverkauf.</p>
              </Link>
              <Link href="/de/kontakt/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Kontakt</h3>
                <p className="text-gray-600 text-sm">Holen Sie sich ein Angebot für Ihre individuelle Großhandels-Sonnenbrillenbestellung.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
