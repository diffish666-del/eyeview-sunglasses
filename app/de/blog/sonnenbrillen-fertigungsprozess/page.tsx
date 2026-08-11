import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Vom Entwurf zum Muster: Wie Sonnenbrillen in 4 Wochen gefertigt werden',
  description: 'Ein Fabrikbesitzer führt Sie durch den kompletten Fertigungsprozess für maßgeschneiderte Sonnenbrillen — Designprüfung, Formenbau, Materialbeschaffung, Montage, Qualitätskontrolle und Versand. Echte Zeitpläne, echte Kosten.',
  keywords: ['Sonnenbrillen Fertigung', 'Sonnenbrillen Fabrik Prozess', 'OEM Sonnenbrillen Zeitplan', 'Sonnenbrillen Formenbau', 'Acetat Sonnenbrillen Produktion', 'Sonnenbrillen Musterentwicklung', 'Sonnenbrillen Fabrik China', 'individuelle Sonnenbrillen Herstellung'],
  alternates: {
    canonical: '/de/blog/sonnenbrillen-fertigungsprozess',
  },
};

const takeaways = [
  'Ein vollständiger Produktionszyklus für maßgefertigte Sonnenbrillen — vom Eingang Ihrer Skizze bis zum Versand der fertigen Muster — dauert in einer gut organisierten chinesischen Fabrik 4 Wochen, wobei jede Woche einer eigenen Phase gewidmet ist: Designprüfung & Formenbau, Materialbeschaffung & erste Muster, Montage & Qualitätskontrolle sowie Endbearbeitung & Versandvorbereitung',
  'Die Formenkosten für maßgefertigte Acetatfassungen liegen je nach Komplexität zwischen 300 und 800 USD pro Form — dies sind die größten Vorabkosten bei der OEM-Sonnenbrillenfertigung, und das Überspringen der Formenqualitätsprüfung führt zu Fassungen, die sich verziehen oder am Scharnier brechen (die häufigste Fehlerursache bei Sonderanfertigungen)',
  'Bei der Materialbeschaffung verlieren unerfahrene Importeure 1–2 Wochen: Acetatplatten benötigen 5–7 Tage vom Plattenlieferanten, Metallkomponenten erfordern separate Lieferanten, und die Farbabstimmung ohne Pantone-Referenz fügt mindestens 3 zusätzliche Tage hinzu — senden Sie immer ein physisches Farbmuster mit Ihrem Design-Briefing',
  'Die Montagephase (Woche 3) umfasst 12–15 separate Qualitätsprüfpunkte pro Paar — Linseneinsatzdruck, Bügelspannung, Scharnierausrichtung, Schraubendrehmoment und Rahmensymmetrie werden alle mit Messgeräten geprüft, nicht nach Augenmaß — und jedes Paar, das eine Prüfung nicht besteht, geht zurück zur Nacharbeit oder wird ausgesondert',
  'Die Endkontrolle in Woche 4 ist nicht eine, sondern drei Inspektionen: das interne QC-Team der Fabrik, eine Stichprobe durch den Produktionsleiter und (falls gebucht) eine externe Prüfung vor der Verpackung — der Unterschied zwischen einer Fehlerquote von 3 % und 0,5 % liegt einfach in der Anzahl der QC-Prüfungen, die Sie bezahlen',
  'Der Versand von chinesischen Fabriken zu westlichen Märkten dauert je nach Methode 3–30 Tage: Luftfracht (3–7 Tage, 2–4 USD/kg), Seefracht (20–35 Tage, 0,30–0,80 USD/kg) oder Bahnfracht nach Europa (12–18 Tage, 1–1,50 USD/kg) — und der größte Versandfehler ist, die Zollabfertigungszeit nicht einzuplanen',
];

const quickStats = [
  { label: 'Acetat-Formenkosten (pro Form)', value: '300–800 $' },
  { label: 'QC-Prüfpunkte pro Paar', value: '12–15' },
  { label: 'Mindestbestellmenge OEM', value: '300–500 Stück' },
  { label: 'Luftfracht nach USA/EU', value: '3–7 Tage' },
  { label: 'Seefracht nach USA/EU', value: '20–35 Tage' },
];

const faqs = [
  {
    question: 'Wie lange dauert es wirklich, maßgefertigte Sonnenbrillen von Grund auf herzustellen?',
    answer: 'Bei EyeView beträgt der Standardzeitplan 4 Wochen von der Skizze bis zum fertigen Muster. Woche 1: Designprüfung und Formenbau. Woche 2: Materialbeschaffung, Farbabstimmung und erste Montagemuster. Woche 3: Vollständige Montage mit allen QC-Prüfungen. Woche 4: Endbearbeitung, Endkontrolle, Verpackung und Versandvorbereitung. Die Serienproduktion fügt nach der Musterfreigabe weitere 3–5 Wochen hinzu. Verzögerungen entstehen meist durch zwei Dinge: Der Käufer liefert keine klaren CAD-Dateien oder Farbreferenzen, und der Acetatplattenlieferant ist im Rückstand — beides ist durch gute Vorabkommunikation vermeidbar.',
  },
  {
    question: 'Was ist die Mindestbestellmenge für kundenspezifische OEM-Sonnenbrillen?',
    answer: 'Für kundenspezifische Formen (Ihr eigenes Fassungsdesign) beträgt die Mindestbestellmenge in der Regel 300–500 Stück pro Modell und Farbe. Bei 500 Stück × 3 Farben sind das 1.500 Paare pro Modell. Die Formenkosten sind separat — 300 bis 800 USD pro Form je nach Komplexität. Eine typische Acetatfassung benötigt 2 Formen (Vorderrahmen + Bügel). Bei Lagerfassungen mit individuellem Branding (nur Logo-Druck, Verpackung) sinkt die Mindestbestellmenge auf 100–200 Stück pro Modell. Die meisten Markengründer starten mit 3–5 Modellen à 300 Stück, insgesamt etwa 900–1.500 Paare — eine realistische Erstbestellung.',
  },
  {
    question: 'Welche Materialien kann ich für maßgefertigte Sonnenbrillenfassungen wählen?',
    answer: 'Die drei Hauptmaterialien sind Acetat, TR90 und Metall (Edelstahl oder Titan). Acetat ist die Premium-Wahl — handpoliert, satte Farben, schwereres Gefühl. TR90 ist leicht, flexibel und hervorragend für Sport- oder Kinderlinien geeignet. Metallfassungen eignen sich gut für minimalistische Designs und Aviator-Modelle. Jedes Material hat einen anderen Formenbau-Prozess: Acetat benötigt 5–7 Tage, TR90-Formen sind schneller (3–5 Tage), und Metall erfordert Stanzwerkzeuge statt Spritzgussformen. Wir arbeiten auch mit Bio-Acetat, recyceltem Nylon und Holz-Verbundwerkstoffen für umweltfreundliche Linien.',
  },
  {
    question: 'Wie funktioniert die Qualitätskontrolle während der kundenspezifischen Sonnenbrillenproduktion?',
    answer: 'Die Qualitätskontrolle erfolgt in drei Ebenen. Erstens, Inline-QC während der Produktion: Jedes Paar durchläuft 12–15 Prüfpunkte — Linseneinsatzdruck mit Kraftmessgerät, Bügelspannung bei Öffnungswinkeln, Scharnierschrauben mit Drehmomentschlüssel, Rahmensymmetrie auf Ausrichtungslehren. Zweitens, End-of-Line-QC: Ein spezielles QC-Team prüft 100 % der fertigen Paare unter standardisierter Beleuchtung auf Kratzer, Farbkonsistenz und Linsenklarheit. Drittens, AQL-Stichprobenprüfung: Wenn Sie eine externe Prüfung gebucht haben, zieht diese eine statistische Stichprobe basierend auf Ihrem akzeptablen Qualitätsniveau — typischerweise AQL 2,5 für Hauptfehler und AQL 4,0 für Nebenfehler.',
  },
  {
    question: 'Welche Versandoptionen gibt es für kundenspezifische Sonnenbrillenbestellungen aus China?',
    answer: 'Drei Hauptmethoden. Luftfracht (FedEx/DHL/UPS): 3–7 Tage Tür-zu-Tür, 2–4 USD pro kg, am besten für Muster und kleine Bestellungen unter 50 kg. Seefracht (LCL oder FCL): 20–35 Tage Hafen-zu-Hafen plus 3–5 Tage für Zoll und Inlandstransport, 0,30–0,80 USD pro kg, am besten für Großbestellungen über 200 kg. Bahnfracht nach Europa: 12–18 Tage, 1–1,50 USD pro kg, eine Mittelweg-Option. Für eine typische Erstbestellung von 500 Paaren (ca. 35–40 kg verpackt) ist Luftfracht die praktischste Wahl. Bei 3.000+ Paaren spart Seefracht 500–800 USD. Wir übernehmen alle Versanddokumente.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'sonnenbrillen-fertigungsprozess';

export default function SonnenbrillenFertigungsprozess() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Startseite', href: '/de/' },
          { name: 'Blog', href: '/de/blog/' },
          { name: 'Vom Entwurf zum Muster' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Vom Entwurf zum Muster: Wie Sonnenbrillen in 4 Wochen gefertigt werden",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Gründer", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Ein Fabrikbesitzer führt Sie durch den kompletten Fertigungsprozess für maßgeschneiderte Sonnenbrillen — Designprüfung, Formenbau, Materialbeschaffung, Montage, Qualitätskontrolle und Versand.",
          "inLanguage": "de",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/de/blog/sonnenbrillen-fertigungsprozess" }
        })}} />

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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fabrik-Know-how</span>
            <span>11. August 2026</span>
            <span>•</span>
            <span>9 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vom Entwurf zum Muster: Wie Sonnenbrillen in 4 Wochen gefertigt werden
          </h1>
          <p className="text-xl text-gray-600">
            Ich stelle seit 2006 Sonnenbrillen her, und die häufigste Frage, die mir gestellt wird, ist: „Was passiert eigentlich, nachdem ich Ihnen mein Design geschickt habe?&ldquo; Hier ist die ehrliche Erklärung — jeder Schritt, jede Prüfung und jede mögliche Verzögerung.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Gründer, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ INHALTSVERZEICHNIS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Inhaltsverzeichnis</h2>
          <ul className="space-y-2">
            <li><a href="#week-1" className="text-primary-600 hover:underline">Woche 1: Designprüfung &amp; Formenbau</a></li>
            <li><a href="#week-2" className="text-primary-600 hover:underline">Woche 2: Materialbeschaffung &amp; Erste Muster</a></li>
            <li><a href="#week-3" className="text-primary-600 hover:underline">Woche 3: Montage &amp; Qualitätskontrolle</a></li>
            <li><a href="#week-4" className="text-primary-600 hover:underline">Woche 4: Endbearbeitung, Verpackung &amp; Versandvorbereitung</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Häufig gestellte Fragen</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} title="Kernaussagen" />

          <QuickStats stats={quickStats} title="Schnelle Fakten" />

          {/* ─── Woche 1 ─── */}
          <h2 id="week-1" className="text-3xl font-bold mt-16 mb-6">Woche 1: Designprüfung &amp; Formenbau</h2>

          <p>Die Uhr beginnt zu ticken, sobald Ihre E-Mail in meinem Posteingang landet. Sie senden eine Skizze — manchmal eine richtige CAD-Datei von einem Industriedesigner, manchmal ein Foto einer Fassung, die Ihnen gefällt, mit der Notiz „so ähnlich, aber breiter und in Schildpatt&ldquo; auf einer Serviette. Beides ist machbar. Das Eine dauert nur länger.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Was wir bei der Designprüfung untersuchen</h3>
          <p>Bevor irgendetwas Physisches passiert, verbringt mein leitender Ingenieur 2–3 Stunden mit Ihrem Design. Er prüft sechs Dinge:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Verhältnis Fassungsbreite zu Linsenbreite.</strong> Wenn Ihre Fassung 140 mm breit ist, die Gläser aber 60 mm, sehen die Proportionen falsch aus. Wir passen das vor dem Formenbau an.</li>
            <li><strong>Bügel-Vorderteil-Winkel.</strong> Die Bügel benötigen einen bestimmten Öffnungswinkel (normalerweise 8–10°), damit die Fassung richtig auf dem Gesicht sitzt.</li>
            <li><strong>Scharnierplatzierung und -typ.</strong> Federscharnier, Tonnenscharnier oder verdecktes Scharnier? Jedes erfordert eine andere Formkavität. Federscharniere kosten 0,15–0,30 USD mehr pro Paar, reduzieren aber Bruch um ca. 40 %.</li>
            <li><strong>Brückendesign.</strong> Eine Schlüssellochbrücke sitzt anders als eine Sattelbrücke. Die Form muss die Nasenpad-Platzierung berücksichtigen.</li>
            <li><strong>Linsennut-Tiefe.</strong> Acetatfassungen benötigen eine 1,0–1,2 mm tiefe Nut für den Linseneinsatz. Zu flach und die Linse springt heraus. Zu tief und der Fassungsrand reißt.</li>
            <li><strong>Materialangabe.</strong> Ist es Acetat, TR90, Metall oder eine Kombination? Unterschiedliche Materialien bedeuten unterschiedliche Formenwerkstätten und Kosten.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Der Formenbau-Prozess</h3>
          <p>Für Acetatfassungen verwenden wir CNC-gefräste Stahlformen. Eine Vorderrahmen-Form und zwei Bügel-Formen (links und rechts). Jede Form kostet 300–800 USD je nach Komplexität. Einfache Wayfarer-Formen liegen am unteren Ende. Übergroße Cat-Eye-Fassungen mit komplexer Krümmung liegen am oberen Ende.</p>
          <p>Der Formenbau selbst dauert <strong>4–5 Arbeitstage</strong>. Die CNC-Werkstatt fräst die negative Kavität in einen Stahlblock, poliert die Kavitätsoberfläche (das verleiht Acetatfassungen ihr glänzendes Finish direkt aus der Form) und wir führen eine Testpressung durch, um Grate, Einfallstellen und Dickenkonsistenz zu prüfen.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>⚠️ Häufiger Fehler:</strong> Ich habe Käufer erlebt, die mir ein 3D-Rendering schickten, das auf dem Bildschirm wunderschön aussieht, aber physikalisch unmöglich zu formen ist. Acetat biegt sich nicht in unmögliche Kurven. Wenn Ihre CAD-Datei einen Bügel hat, der sich mit 2 mm Dicke um 90° krümmt, wird er an der Biegung brechen. <strong>Senden Sie immer eine Seitenansicht in Ihrer CAD-Einreichung.</strong></p>
          <p>Bis Freitag in Woche 1 sind Ihre Formen fertig. Wir haben eine Testfassung in rohem weißem Acetat — noch keine Farbe, keine Politur, nur die Grundform. Ich mache Fotos aus fünf Winkeln und schicke sie Ihnen zur Freigabe. Das ist der erste „Wow&ldquo;-Moment für die meisten neuen Markeninhaber.</p>

          {/* ─── Woche 2 ─── */}
          <h2 id="week-2" className="text-3xl font-bold mt-16 mb-6">Woche 2: Materialbeschaffung &amp; Erste Muster</h2>
          <p>Woche 2 dreht sich um Materialien und Farbe. In dieser Phase läuft es entweder reibungslos oder jeder Tag wird zu einem Spiel von „Wo ist meine Lieferung?&ldquo;</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Wie wir Acetatplatten beschaffen</h3>
          <p>Wir stellen Acetatplatten nicht selbst her. Niemand tut das — die Acetatplatten-Herstellung ist eine separate Industrie. Die Hauptlieferanten sind Mazzucchelli (Italien, Premium), Daicel (Japan, Mittel- bis Premiumklasse) und mehrere chinesische Acetatwerke (Provinzen Jiangsu und Zhejiang, gutes Preis-Leistungs-Verhältnis). Die Lieferzeit für Acetatplatten reicht von <strong>Abholung am selben Tag für Lagerfarben</strong> bis zu <strong>5–7 Tagen für kundenspezifisch laminierte Farbkombinationen</strong>.</p>
          <p>Die kundenspezifische Farbabstimmung ist die häufigste Verzögerungsquelle. Wenn Sie „dunkles Schildpatt mit einem Hauch Bernstein&ldquo; möchten, brauche ich eine physische Referenz — einen Pantone-Code, eine Stoffprobe oder eine vorhandene Fassung zum Abgleich. Ohne Referenz rechnen Sie mit mindestens 3 zusätzlichen Tagen Hin und Her.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>💡 Profi-Tipp:</strong> Senden Sie ein physisches Farbmuster mit Ihrem Design-Paket. Egal ob Pantone-Chip, ausgeschnittenes Stück einer alten Fassung oder eine bemalte Musterkarte. Alles Physische schlägt jeden Hex-Code — Bildschirmfarben lügen. Ich habe mehr Zeit mit Farbabstimmungen wegen unkalibrierter Monitore verloren als mit jedem anderen einzelnen Problem in 15 Jahren.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Metallkomponenten und Beschläge</h3>
          <p>Scharniere, Schrauben, Nasenpads und Bügelkerne kommen von separaten Metallkomponenten-Lieferanten — meist aus Dongguan oder Wenzhou. Standard-Tonnenscharniere sind auf Lager und werden am selben Tag versandt. Kundenspezifisch gebrandete Scharniere (mit Ihrem Logo gelasert) benötigen 3–5 Tage extra und eine Werkzeuggebühr von 100–200 USD.</p>
          <p>Für Vollmetallfassungen (Titan, Edelstahl oder Monel) wechseln wir zu einer komplett anderen Produktionslinie. Die Metallfassungsproduktion beginnt mit Drahtbiegen und Stanzwerkzeugen — andere Maschinen, andere Formenwerkstätten und ein etwas anderer Zeitplan. Wenn Ihre Kollektion Acetat-Vorderteile mit Metallbügeln kombiniert (ein beliebter Hybrid-Stil), fahren wir beide Linien parallel.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Erste Montagemuster</h3>
          <p>Bis Donnerstag oder Freitag in Woche 2 sind die Acetatplatten eingetroffen, die Formen laufen in Produktionspressqualität und wir produzieren Ihre ersten Montagemuster. Das sind <strong>5–10 Paare</strong> in Ihren gewählten Farben, vollständig montiert mit Gläsern, Scharnieren und Schrauben. Sie sind noch nicht auf Endstandard poliert — das passiert in Woche 4 — aber sie geben Ihnen ein vollständiges Gefühl für die Fassung: Gewicht, Proportionen, Bügelspannung und wie die Farben unter natürlichem Licht aussehen.</p>

          {/* ─── Woche 3 ─── */}
          <h2 id="week-3" className="text-3xl font-bold mt-16 mb-6">Woche 3: Montage &amp; Qualitätskontrolle</h2>
          <p>Woche 3 ist, wenn die Fabrikhalle geschäftig wird. Das ist die Montagephase und sie umfasst mehr Prüfpunkte, als die meisten Käufer realisieren. Ein einzelnes Paar Acetat-Sonnenbrillen durchläuft während der Montage <strong>12 bis 15 Hände</strong>, jede führt eine spezifische Aufgabe aus und prüft die Arbeit der Person vor ihr.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Linsenschneiden und -einsetzen</h3>
          <p>Linsen werden auf einer CNC-Linsenschleifmaschine geschnitten — nicht von Hand. Die Schleifmaschine liest die Fassungsnut-Abmessungen aus der CAD-Datei und schneidet jede Linse auf 0,1 mm Toleranz. Ein Bediener be- und entlädt die Maschine, aber der Schnitt ist automatisiert. Nach dem Schneiden fasen wir die Linsenkante an (eine 45°-Fase), damit sie ohne Abplatzen in die Fassungsnut gleitet.</p>
          <p>Der Linseneinsatz in Acetatfassungen erfordert Wärme. Die Vorderseite der Fassung wird auf etwa 60 °C erwärmt, um das Acetat gerade genug zu erweichen, damit die Linse eingedrückt werden kann. Zu niedrige Temperatur und die Linse zerkratzt die Nut. Zu hoch und die Fassung verzieht sich. Unsere Einsetz-Techniker machen das seit 8–15 Jahren — sie kennen die exakte Temperatur für jede Acetat-Rezeptur.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Die QC-Prüfpunkte (12–15 pro Paar)</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-6 text-gray-700">
            <li><strong>Sichtprüfung der Fassung</strong> — Kratzer, Blasen, Einfallstellen auf der Vorderrahmen-Oberfläche</li>
            <li><strong>Sichtprüfung der Gläser</strong> — Kratzer, Beschichtungsgleichmäßigkeit, eingebettete Staubpartikel</li>
            <li><strong>Linseneinsatzdruck</strong> — mit Kraftmessgerät, Zielbereich 8–15 N je nach Fassungsgröße</li>
            <li><strong>Öffnungsspannung der Bügel</strong> — beide Bügel müssen sich mit gleichem Widerstand sanft öffnen</li>
            <li><strong>Schließen der Bügel</strong> — beide Bügel müssen vollständig schließen und flach an der Fassungsfront anliegen</li>
            <li><strong>Scharnierausrichtung</strong> — auf einer Lehre geprüft; beide Scharniere müssen exakt auf gleicher Höhe sitzen</li>
            <li><strong>Schraubendrehmoment</strong> — jede Scharnierschraube mit 0,3–0,5 N·m angezogen, mit Drehmomentschlüssel geprüft</li>
            <li><strong>Fassungssymmetrie</strong> — auf einer Ausrichtungslehre mit Referenzmarkierungen gemessen</li>
            <li><strong>Brückenausrichtung</strong> — gegen die CAD-Spezifikation für Breite und Krümmung geprüft</li>
            <li><strong>Nasenpad-Befestigung</strong> (Metallfassungen) — Pad-Arme müssen symmetrisch sein, Pads fest angebracht</li>
            <li><strong>UV-Durchlässigkeitstest</strong> — jede Charge mit UV-Spektrometer geprüft; muss 99 %+ UV blockieren</li>
            <li><strong>Polarisationsachsen-Prüfung</strong> (falls zutreffend) — polarisierte Gläser müssen korrekte Achsenausrichtung haben</li>
            <li><strong>Schweißbeständigkeitstest</strong> (stichprobenartig) — Fassungen 24 Stunden in künstliche Schweißlösung getaucht, auf Verfärbung geprüft</li>
            <li><strong>Falltest</strong> (stichprobenartig) — 1,5 m Fall auf Beton, Fassung muss ohne Risse überstehen</li>
            <li><strong>Abschließende Gesamtinspektion</strong> — der QC-Leiter führt einen 20-Sekunden-Scan unter 1000-Lux-Beleuchtung durch</li>
          </ol>
          <p>Paare, die eine Prüfung nicht bestehen, werden mit einem roten Aufkleber markiert und zur Nacharbeitsstation geleitet. Wenn eine einzelne Station eine Ausfallrate von mehr als 5 % pro Tag produziert, stoppt der Produktionsleiter die Linie und untersucht — meist ein Maschinenkalibrierungsproblem oder eine fehlerhafte Komponentencharge vom Lieferanten.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>🔧 Aus der Fabrik:</strong> Der häufigste QC-Fehler bei Sonderanfertigungen ist <strong>asymmetrische Bügelspannung</strong>. Ein Bügel öffnet zu locker, der andere zu straff. Das passiert, weil der Scharnier-Einsatzpunkt in der Formkavität leicht abweicht — um nur 0,2 mm. Wir fangen das bei Prüfpunkt 4 und 5 ab, aber es bedeutet, dass die Formkavität neu bearbeitet werden muss. Deshalb ist die Formenprüfung in Woche 1 so wichtig.</p>
          <p>Bis Ende Woche 3 sind alle Produktionspaare Ihrer Musterbestellung vollständig montiert und haben die interne QC bestanden. Es sind komplette Sonnenbrillen — aber sie sehen noch nicht wie Einzelhandelsprodukte aus. Die Fassungen brauchen noch die Endpolitur, und nichts ist verpackt.</p>

          {/* ─── Woche 4 ─── */}
          <h2 id="week-4" className="text-3xl font-bold mt-16 mb-6">Woche 4: Endbearbeitung, Verpackung &amp; Versandvorbereitung</h2>
          <p>Woche 4 verwandelt Fabrikausstoß in Markenprodukte. Hier werden Fassungen auf Spiegelglanz poliert, Gläser erhalten eine Endreinigung, Ihr Logo wird aufgebracht, und alles wird für den Versand verpackt.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fassungspolitur und Endbearbeitung</h3>
          <p>Die Acetat-Politur ist ein 3-stufiger Prozess: erstens eine Grobpolitur mit Baumwollscheibe und Bimsstein-Paste, um Formlinien oder Mikrokratzer zu entfernen. Zweitens eine Mittelpolitur mit weicherer Scheibe und feinerer Paste. Drittens eine Glanz-Endpolitur — hier entsteht der „Nasslook&ldquo;. Jedes Paar erhält etwa <strong>4–6 Minuten Gesamtpolierzeit</strong>, von Hand auf einer Standpolierbank.</p>
          <p>TR90- und Metallfassungen überspringen die Polierstufe, erhalten aber eine andere Endbehandlung. TR90 erhält standardmäßig ein mattes Finish. Metallfassungen werden galvanisiert — Gold, Silber, Gunmetal, Roségold — ein separater Prozess, der 1–2 Tage hinzufügt, falls Beschichtung erforderlich ist.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Logo-Aufbringung</h3>
          <p>Ihr Markenlogo wird in dieser Phase aufgebracht. Optionen sind:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Heißprägung</strong> — Metallfolie in den Bügel oder die Linse gepresst. Kostet 0,05–0,15 USD pro Prägung. Gängigste Methode.</li>
            <li><strong>Lasergravur</strong> — brennt das Logo in die Acetat- oder Metalloberfläche. Dauerhaft und präzise. 0,10–0,25 USD pro Gravur.</li>
            <li><strong>Tampondruck</strong> — Farbe über Silikonpad übertragen. Gut für mehrfarbige Logos auf gekrümmten Oberflächen. 0,08–0,20 USD pro Druck.</li>
            <li><strong>Metallplakette-Nietung</strong> — eine winzige Metallplakette mit Ihrem Logo, am Bügel befestigt. Premium-Feeling. 0,30–0,80 USD pro Plakette.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Endkontrolle vor der Verpackung</h3>
          <p>Bevor etwas in eine Schachtel kommt, erhält jedes Paar eine Endinspektion. Anders als die Inline-QC in Woche 3 — dies ist eine eigenständige Bestanden/Durchgefallen-Prüfung durch einen leitenden QC-Inspektor, der nicht an der Produktion dieser spezifischen Paare beteiligt war.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Versand und Logistik</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Methode</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Laufzeit</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Kosten</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Am besten für</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 p-3 font-medium">Luftfracht (DHL/UPS/FedEx)</td><td className="border border-gray-200 p-3">3–7 Tage</td><td className="border border-gray-200 p-3">2–4 $/kg</td><td className="border border-gray-200 p-3 text-sm">Muster &amp; Bestellungen unter 50 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Bahnfracht (nach Europa)</td><td className="border border-gray-200 p-3">12–18 Tage</td><td className="border border-gray-200 p-3">1–1,50 $/kg</td><td className="border border-gray-200 p-3 text-sm">Mittelgroße EU-Bestellungen</td></tr>
                <tr><td className="border border-gray-200 p-3 font-medium">Seefracht LCL</td><td className="border border-gray-200 p-3">20–35 Tage</td><td className="border border-gray-200 p-3">0,30–0,80 $/kg</td><td className="border border-gray-200 p-3 text-sm">Bestellungen 50–500 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Seefracht FCL (20ft)</td><td className="border border-gray-200 p-3">20–35 Tage</td><td className="border border-gray-200 p-3">1.500–3.000 $/Container</td><td className="border border-gray-200 p-3 text-sm">Bestellungen 2.000 kg+</td></tr>
              </tbody>
            </table>
          </div>
          <p>Und das war&apos;s. Vier Wochen. Vom Entwurf zum versandten Produkt. Es klingt schnell, wenn ich es so aufschreibe — und ehrlich gesagt, es ist schnell. Der Grund, warum wir das schaffen, ist, dass wir diesen Prozess seit 2006 betreiben. Die Formen werden von derselben CNC-Werkstatt geschnitten, mit der wir seit 12 Jahren zusammenarbeiten. Das Acetat kommt von Lieferanten, mit denen wir Quartalsverträge haben. Wenn alles im Haus ist und jeder seine Aufgabe kennt, sind 4 Wochen keine Eile — es ist einfach der Standardzeitplan.</p>

          {/* ═══════ FAQ ═══════ */}
          <section className="mb-12">
            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-8">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════ CTA ═══════ */}
          <section className="bg-primary-700 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Haben Sie eine Skizze? Lassen Sie uns Sonnenbrillen daraus machen</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Senden Sie uns Ihr Design — CAD-Datei, Foto oder Serviettenskizze — und wir haben Musterfassungen innerhalb von 4 Wochen in Ihren Händen. Acetat, TR90, Metall, Bio-Materialien. Komplett-OEM mit Ihrem Branding.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/de/kontakt/" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
                Projekt starten
              </Link>
              <Link href="/de/produkte/" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-colors border-2 border-primary-400">
                Vorhandene Modelle ansehen
              </Link>
            </div>
          </section>

          {/* ═══════ VERWANDTE ARTIKEL ═══════ */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Verwandte Artikel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/de/blog/sonnenbrillen-import-ratgeber" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Import</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Sonnenbrillen-Import-Ratgeber: So importieren Sie aus China</h3>
                <p className="text-gray-600 text-sm">Schritt-für-Schritt-Anleitung zum Import von Sonnenbrillen aus China.</p>
              </Link>
              <Link href="/de/blog/vergleich-rahmenmaterialien" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fertigung</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">TR90 vs Acetat vs Metall: Welches Rahmenmaterial passt zu Ihrer Marke?</h3>
                <p className="text-gray-600 text-sm">Echte Kostendaten, Gewichtsvergleiche und Haltbarkeitstests.</p>
              </Link>
              <Link href="/de/blog/sonnenbrillen-mindestbestellmenge-ratgeber" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Beschaffung</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Mindestbestellmenge-Ratgeber für Sonnenbrillen</h3>
                <p className="text-gray-600 text-sm">Was Mindestbestellmengen auf Fabrikebene wirklich bedeuten.</p>
              </Link>
              <Link href="/de/blog/oem-vs-odm" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fertigung</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">OEM vs ODM Sonnenbrillen: Was ist der Unterschied?</h3>
                <p className="text-gray-600 text-sm">Echte Kosten, echte Zeitpläne und ein Entscheidungsrahmen, der funktioniert.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
