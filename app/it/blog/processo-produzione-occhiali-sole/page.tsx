import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Dallo Schizzo al Campione: Come Vengono Prodotti gli Occhiali da Sole su Misura in 4 Settimane',
  description: 'Un proprietario di fabbrica ti guida attraverso il processo completo di produzione di occhiali da sole su misura — revisione del design, creazione stampi, approvvigionamento materiali, assemblaggio, controllo qualità e spedizione. Tempi reali, costi reali.',
  keywords: ['produzione occhiali sole', 'processo fabbrica occhiali', 'occhiali OEM tempistiche', 'stampi occhiali sole', 'produzione acetato occhiali', 'sviluppo campioni occhiali', 'fabbrica occhiali Cina', 'occhiali sole su misura produzione'],
  alternates: {
    canonical: '/it/blog/processo-produzione-occhiali-sole',
  },
};

const takeaways = [
  'Un ciclo completo di produzione di occhiali da sole su misura — dalla ricezione del tuo schizzo alla spedizione dei campioni finiti — richiede 4 settimane in una fabbrica cinese ben organizzata, con ogni settimana dedicata a una fase distinta: revisione del design e creazione stampi, approvvigionamento materiali e primi campioni, assemblaggio e controllo qualità, e finitura e preparazione alla spedizione',
  'I costi degli stampi per montature in acetato su misura variano da $300 a $800 per stampo a seconda della complessità — questo è il maggior costo iniziale nella produzione OEM di occhiali, e saltare la verifica qualità dello stampo porta a montature che si deformano o si crepano alla cerniera (il guasto n°1 negli ordini personalizzati)',
  'L\'approvvigionamento dei materiali è dove gli importatori principianti perdono 1–2 settimane: i fogli di acetato richiedono 5–7 giorni dal fornitore, i componenti metallici richiedono fornitori separati, e la corrispondenza del colore senza un riferimento Pantone aggiunge almeno 3 giorni extra — spedisci sempre un campione fisico di colore con il tuo brief di design',
  'La fase di assemblaggio (Settimana 3) coinvolge 12–15 punti di controllo qualità separati per paio — pressione di inserimento lenti, tensione delle aste, allineamento cerniere, coppia di serraggio viti e simmetria della montatura sono tutti misurati con calibri, non a occhio — e ogni paio che non supera un controllo viene rimandato in rilavorazione o scartato',
  'Il controllo qualità finale nella Settimana 4 non è una, ma tre ispezioni: il team QC interno della fabbrica, un controllo a campione del supervisore di produzione, e (se prenotata) un\'ispezione di terze parti prima dell\'imballaggio — la differenza tra un tasso di difetti del 3% e dello 0,5% è semplicemente quanti controlli QC paghi',
  'La spedizione dalle fabbriche cinesi ai mercati occidentali richiede 3–30 giorni a seconda del metodo: trasporto aereo (3–7 giorni, $2–4/kg), trasporto marittimo (20–35 giorni, $0,30–0,80/kg) o ferrovia per l\'Europa (12–18 giorni, $1–1,50/kg) — e il più grande errore di spedizione è non considerare il tempo di sdoganamento',
];

const quickStats = [
  { label: 'Costo stampo acetato (per stampo)', value: '$300–800' },
  { label: 'Punti di controllo per paio', value: '12–15' },
  { label: 'Ordine minimo OEM', value: '300–500 unità' },
  { label: 'Trasporto aereo verso USA/UE', value: '3–7 giorni' },
  { label: 'Trasporto marittimo verso USA/UE', value: '20–35 giorni' },
];

const faqs = [
  {
    question: 'Quanto tempo ci vuole davvero per produrre occhiali da sole su misura da zero?',
    answer: 'Da EyeView, la tempistica standard è di 4 settimane dallo schizzo al campione finito. Settimana 1: revisione del design e creazione stampi. Settimana 2: approvvigionamento materiali, corrispondenza colore e primi campioni di assemblaggio. Settimana 3: assemblaggio completo con tutti i controlli qualità. Settimana 4: finitura, controllo finale, imballaggio e preparazione alla spedizione. La produzione in serie aggiunge altre 3–5 settimane dopo l\'approvazione del campione. I ritardi più comuni derivano da due cose: l\'acquirente non fornisce file CAD chiari o riferimenti colore, e il fornitore di fogli di acetato è in ritardo — entrambi evitabili con una buona comunicazione.',
  },
  {
    question: 'Qual è l\'ordine minimo per occhiali da sole OEM su misura?',
    answer: 'Per stampi personalizzati (il tuo design di montatura), l\'ordine minimo è tipicamente di 300–500 unità per modello e colore. A 500 unità × 3 colori, sono 1.500 paia per modello. I costi degli stampi sono separati — $300 a $800 per stampo a seconda della complessità. Una tipica montatura in acetato richiede 2 stampi (frontale + aste). Per montature di stock con marchio personalizzato (solo stampa logo, imballaggio), l\'ordine minimo scende a 100–200 unità per modello. La maggior parte dei nuovi brand parte con 3–5 modelli da 300 unità ciascuno, circa 900–1.500 paia in totale.',
  },
  {
    question: 'Quali materiali posso scegliere per le montature di occhiali da sole su misura?',
    answer: 'I tre materiali principali sono acetato, TR90 e metallo (acciaio inossidabile o titanio). L\'acetato è la scelta premium — lucidato a mano, colori ricchi, sensazione più pesante. Il TR90 è leggero, flessibile ed eccellente per linee sportive o per bambini. Le montature in metallo funzionano bene per design minimalisti e aviator. Ogni materiale ha un diverso processo di stampo: acetato 5–7 giorni, TR90 più veloce (3–5 giorni), e il metallo richiede stampi di tranciatura invece di stampi a iniezione. Lavoriamo anche con bio-acetato, nylon riciclato e composito di legno per linee eco-friendly.',
  },
  {
    question: 'Come funziona il controllo qualità durante la produzione di occhiali da sole su misura?',
    answer: 'Il QC funziona su tre livelli. Primo, QC in linea durante la produzione: ogni paio passa attraverso 12–15 punti di controllo — pressione di inserimento lenti con dinamometro, tensione delle aste agli angoli di apertura, viti delle cerniere con chiave dinamometrica, simmetria della montatura su dime di allineamento. Secondo, QC di fine linea: un team QC dedicato ispeziona il 100% delle paia finite sotto illuminazione standardizzata. Terzo, campionamento AQL: se hai prenotato un\'ispezione di terze parti (SGS, Bureau Veritas), prelevano un campione statistico basato sul tuo Livello di Qualità Accettabile — tipicamente AQL 2,5 per difetti maggiori e AQL 4,0 per difetti minori.',
  },
  {
    question: 'Quali opzioni di spedizione sono disponibili per ordini di occhiali da sole su misura dalla Cina?',
    answer: 'Tre metodi principali. Trasporto aereo (FedEx/DHL/UPS): 3–7 giorni porta a porta, $2–4 per kg, ideale per campioni e piccoli ordini. Trasporto marittimo (LCL o FCL): 20–35 giorni porto a porto più 3–5 giorni per dogana, $0,30–0,80 per kg, ideale per grandi ordini. Ferrovia per l\'Europa: 12–18 giorni, $1–1,50 per kg, un\'opzione intermedia. Per un primo ordine tipico di 500 paia (circa 35–40 kg imballati), il trasporto aereo è la scelta più pratica. Per oltre 3.000 paia, il trasporto marittimo fa risparmiare $500–800. Gestiamo tutta la documentazione di spedizione.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'processo-produzione-occhiali-sole';

export default function ProcessoProduzioneOcchialiSole() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/it/' },
          { name: 'Blog', href: '/it/blog/' },
          { name: 'Dallo Schizzo al Campione' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Dallo Schizzo al Campione: Come Vengono Prodotti gli Occhiali da Sole su Misura in 4 Settimane",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un proprietario di fabbrica ti guida attraverso il processo completo di produzione di occhiali da sole su misura. Tempi reali, costi reali.",
          "inLanguage": "it",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/processo-produzione-occhiali-sole" }
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

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Know-How di Fabbrica</span>
            <span>11 agosto 2026</span>
            <span>•</span>
            <span>9 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dallo Schizzo al Campione: Come Vengono Prodotti gli Occhiali da Sole su Misura in 4 Settimane
          </h1>
          <p className="text-xl text-gray-600">
            Produco occhiali da sole dal 2006, e la domanda che mi fanno più spesso è: &quot;Cosa succede esattamente dopo che ti invio il mio design?&quot; Questa è la spiegazione onesta — ogni passaggio, ogni controllo e ogni possibile ritardo.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Indice dei Contenuti</h2>
          <ul className="space-y-2">
            <li><a href="#week-1" className="text-primary-600 hover:underline">Settimana 1: Revisione del Design e Creazione Stampo</a></li>
            <li><a href="#week-2" className="text-primary-600 hover:underline">Settimana 2: Approvvigionamento Materiali e Primi Campioni</a></li>
            <li><a href="#week-3" className="text-primary-600 hover:underline">Settimana 3: Assemblaggio e Controllo Qualità</a></li>
            <li><a href="#week-4" className="text-primary-600 hover:underline">Settimana 4: Finitura, Imballaggio e Preparazione alla Spedizione</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Domande Frequenti</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <KeyTakeaways items={takeaways} title="Punti Chiave" />
          <QuickStats stats={quickStats} title="Fatti Rapidi" />

          {/* Settimana 1 */}
          <h2 id="week-1" className="text-3xl font-bold mt-16 mb-6">Settimana 1: Revisione del Design e Creazione dello Stampo</h2>
          <p>Il cronometro parte nel momento in cui la tua email arriva nella mia casella di posta. Mi invii uno schizzo — a volte è un file CAD professionale di un designer industriale, a volte è una foto di una montatura che ti piace con &quot;falla così ma più larga e in tartaruga&quot; scarabocchiato su un tovagliolo. Entrambi sono fattibili. Uno richiede solo più tempo.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cosa Controlliamo nella Revisione del Design</h3>
          <p>Prima che accada qualcosa di fisico, il mio ingegnere capo dedica 2–3 ore al tuo design. Controlla sei cose:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Rapporto larghezza montatura / larghezza lente.</strong> Se la tua montatura è larga 140 mm ma le lenti sono 60 mm, le proporzioni saranno sbagliate. Lo sistemiamo prima della creazione dello stampo.</li>
            <li><strong>Angolo asta-frontale.</strong> Le aste hanno bisogno di un angolo di apertura specifico (di solito 8–10°) perché la montatura si appoggi correttamente sul viso.</li>
            <li><strong>Posizionamento e tipo di cerniera.</strong> Cerniera a molla, a barilotto o nascosta? Ognuna richiede una diversa cavità dello stampo. Le cerniere a molla aggiungono $0,15–0,30 al paio ma riducono le rotture di circa il 40%.</li>
            <li><strong>Design del ponte.</strong> Un ponte a buco di serratura si appoggia diversamente da un ponte a sella. Lo stampo deve prevedere il posizionamento dei naselli.</li>
            <li><strong>Profondità della scanalatura della lente.</strong> Le montature in acetato necessitano di una scanalatura di 1,0–1,2 mm per l\'inserimento della lente. Troppo superficiale e la lente salta fuori. Troppo profonda e il bordo si crepa.</li>
            <li><strong>Specifica del materiale.</strong> È acetato, TR90, metallo o una combinazione? Materiali diversi significano officine di stampo e costi diversi.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Il Processo di Creazione dello Stampo</h3>
          <p>Per le montature in acetato, utilizziamo stampi in acciaio lavorati a CNC. Uno stampo per il frontale e due per le aste (sinistra e destra). Ogni stampo costa $300–800 a seconda della complessità. Gli stampi semplici Wayfarer sono nella fascia bassa. Le montature cat-eye sovradimensionate con curvatura complessa sono nella fascia alta.</p>
          <p>La creazione dello stampo richiede <strong>4–5 giorni lavorativi</strong>. L\'officina CNC fresata la cavità negativa in un blocco di acciaio, lucida la superficie della cavità (questo dà alle montature in acetato la loro finitura lucida direttamente dallo stampo) ed eseguiamo una prova di pressatura per verificare bave, segni di affondamento e consistenza dello spessore.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>⚠️ Errore Comune:</strong> Ho avuto acquirenti che mi hanno inviato un rendering 3D bellissimo sullo schermo ma fisicamente impossibile da stampare. L\'acetato non si piega in curve impossibili. Se il tuo file CAD ha un\'asta che curva di 90° con 2 mm di spessore, si romperà alla curva. <strong>Includi sempre una vista laterale nella tua presentazione CAD.</strong></p>
          <p>Entro venerdì della Settimana 1, i tuoi stampi sono pronti. Abbiamo una montatura di prova in acetato bianco grezzo — nessun colore ancora, nessuna lucidatura, solo la forma base. Scatto foto da cinque angolazioni e te le invio per approvazione. È il primo momento &quot;wow&quot; per la maggior parte dei nuovi proprietari di brand.</p>

          {/* Settimana 2 */}
          <h2 id="week-2" className="text-3xl font-bold mt-16 mb-6">Settimana 2: Approvvigionamento Materiali e Primi Campioni</h2>
          <p>La Settimana 2 riguarda materiali e colore. È la fase in cui le cose o filano lisce o ogni giorno diventa un gioco di &quot;dov\'è la mia spedizione?&quot;</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Come Ci Approvvigioniamo dei Fogli di Acetato</h3>
          <p>Non produciamo i fogli di acetato internamente. Nessuno lo fa — la produzione di fogli di acetato è un\'industria separata. I principali fornitori sono Mazzucchelli (Italia, premium), Daicel (Giappone, medio-premium) e diversi produttori cinesi (province di Jiangsu e Zhejiang, buon rapporto qualità-prezzo). I tempi di consegna vanno dal <strong>ritiro in giornata per i colori di stock</strong> a <strong>5–7 giorni per combinazioni di colore laminate su misura</strong>.</p>
          <p>La corrispondenza del colore personalizzata è dove si verificano la maggior parte dei ritardi. Se vuoi &quot;tartaruga scura con un accenno di ambra&quot;, ho bisogno di un riferimento fisico — un codice Pantone, un campione di tessuto o una montatura esistente. Senza riferimento, aspettati almeno 3 giorni extra di avanti e indietro.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>💡 Consiglio Pro:</strong> Spedisci un campione fisico di colore con il tuo pacchetto di design. Non importa se è un chip Pantone, un pezzo ritagliato di una vecchia montatura o una cartella dipinta. Qualsiasi cosa fisica batte qualsiasi codice esadecimale — i colori dello schermo mentono. Ho perso più tempo sulla corrispondenza dei colori a causa di monitor non calibrati che per qualsiasi altro problema in 15 anni.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Componenti Metallici e Ferramenta</h3>
          <p>Cerniere, viti, naselli e anime delle aste provengono da fornitori di componenti metallici separati — di solito a Dongguan o Wenzhou. Le cerniere a barilotto standard sono a stock e spedite in giornata. Le cerniere con marchio personalizzato (con il tuo logo inciso al laser) aggiungono 3–5 giorni e un costo di attrezzatura di $100–200.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Primi Campioni di Assemblaggio</h3>
          <p>Entro giovedì o venerdì della Settimana 2, i fogli di acetato sono arrivati, gli stampi funzionano a qualità di produzione e produciamo i tuoi primi campioni di assemblaggio. Sono <strong>5–10 paia</strong> nei tuoi colori scelti, completamente assemblati con lenti, cerniere e viti. Non sono ancora lucidati allo standard finale — questo avviene nella Settimana 4 — ma ti danno una sensazione completa della montatura: peso, proporzioni, tensione delle aste e come appaiono i colori sotto luce naturale.</p>

          {/* Settimana 3 */}
          <h2 id="week-3" className="text-3xl font-bold mt-16 mb-6">Settimana 3: Assemblaggio e Controllo Qualità</h2>
          <p>La Settimana 3 è quando la fabbrica si anima. È la fase di assemblaggio e coinvolge più controlli di quanto la maggior parte degli acquirenti immagini. Un singolo paio di occhiali in acetato passa attraverso <strong>12-15 mani</strong> durante l\'assemblaggio, ognuna che svolge un compito specifico e controlla il lavoro della persona precedente.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Taglio e Inserimento delle Lenti</h3>
          <p>Le lenti vengono tagliate su una molatrice CNC — non a mano. La macchina legge le dimensioni della scanalatura della montatura dal file CAD e taglia ogni lente con tolleranza di 0,1 mm. Un operatore carica e scarica la macchina, ma il taglio è automatizzato. Dopo il taglio, smussiamo il bordo della lente (uno smusso a 45°) in modo che scivoli nella scanalatura senza scheggiarsi.</p>
          <p>L\'inserimento delle lenti nelle montature in acetato richiede calore. La parte frontale della montatura viene riscaldata a circa 60 °C per ammorbidire l\'acetato quel tanto che basta perché la lente si inserisca a pressione. Troppo freddo e la lente graffia la scanalatura. Troppo caldo e la montatura si deforma. I nostri tecnici di inserimento lo fanno da 8–15 anni — conoscono la temperatura esatta per ogni formulazione di acetato.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">I Punti di Controllo Qualità (12–15 per Paio)</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-6 text-gray-700">
            <li><strong>Controllo visivo montatura</strong> — graffi, bolle, segni di affondamento sulla superficie frontale</li>
            <li><strong>Controllo visivo lenti</strong> — graffi, uniformità del rivestimento, particelle di polvere incorporate</li>
            <li><strong>Pressione di inserimento lente</strong> — misurata con dinamometro, intervallo target 8–15 N</li>
            <li><strong>Tensione di apertura aste</strong> — entrambe le aste devono aprirsi dolcemente con uguale resistenza</li>
            <li><strong>Chiusura aste</strong> — entrambe le aste devono chiudersi completamente e appoggiarsi piatte contro il frontale</li>
            <li><strong>Allineamento cerniere</strong> — verificato su dima; entrambe le cerniere esattamente alla stessa altezza</li>
            <li><strong>Coppia di serraggio viti</strong> — ogni vite serrata a 0,3–0,5 N·m, verificata con chiave dinamometrica</li>
            <li><strong>Simmetria montatura</strong> — misurata su dima di allineamento con marcature di riferimento</li>
            <li><strong>Allineamento ponte</strong> — verificato rispetto alle specifiche CAD</li>
            <li><strong>Fissaggio naselli</strong> (montature in metallo) — bracci simmetrici, naselli saldamente fissati</li>
            <li><strong>Test di trasmissione UV</strong> — ogni lotto campionato con spettrometro UV; deve bloccare 99%+ UV</li>
            <li><strong>Verifica asse di polarizzazione</strong> (se applicabile) — orientamento corretto dell\'asse</li>
            <li><strong>Test di resistenza al sudore</strong> (campionato) — 24 ore in soluzione di sudore artificiale, verificare scolorimento</li>
            <li><strong>Test di caduta</strong> (campionato) — caduta di 1,5 m su cemento, la montatura deve sopravvivere senza crepe</li>
            <li><strong>Ispezione finale complessiva</strong> — scansione di 20 secondi sotto illuminazione a 1000 lux</li>
          </ol>
          <p>Le paia che non superano un controllo ricevono un\'etichetta rossa e vengono indirizzate alla stazione di rilavorazione. Se una singola stazione produce più del 5% di guasti al giorno, il supervisore ferma la linea e indaga — di solito un problema di calibrazione della macchina o un lotto difettoso di componenti.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>🔧 Dentro la Fabbrica:</strong> Il guasto QC più comune sugli ordini personalizzati è <strong>l\'asimmetria della tensione delle aste</strong>. Un\'asta si apre troppo lentamente, l\'altra troppo rapidamente. Succede perché il punto di inserimento della cerniera nella cavità dello stampo è leggermente fuori — di appena 0,2 mm. Lo rileviamo ai controlli 4 e 5, ma significa rilavorare quella cavità dello stampo. Ecco perché la revisione dello stampo nella Settimana 1 è così importante.</p>
          <p>Entro la fine della Settimana 3, tutte le paia di produzione del tuo ordine campione sono completamente assemblate e hanno superato il QC interno. Sono occhiali da sole completi — ma non sembrano ancora un prodotto da vendita al dettaglio. Le montature hanno bisogno della lucidatura finale, e nulla è imballato.</p>

          {/* Settimana 4 */}
          <h2 id="week-4" className="text-3xl font-bold mt-16 mb-6">Settimana 4: Finitura, Imballaggio e Preparazione alla Spedizione</h2>
          <p>La Settimana 4 trasforma la produzione di fabbrica in prodotto di marca. È qui che le montature vengono lucidate a specchio, le lenti ricevono una pulizia finale, il tuo logo viene applicato e tutto viene imballato per la spedizione.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lucidatura e Finitura delle Montature</h3>
          <p>La lucidatura dell\'acetato è un processo in 3 fasi: prima, una lucidatura grossolana con disco di cotone e composto di pomice per rimuovere le linee di stampo. Poi, una lucidatura media con disco più morbido e composto più fine. Infine, una lucidatura a specchio — è qui che si ottiene l\'effetto &quot;bagnato&quot;. Ogni paio riceve circa <strong>4–6 minuti di lucidatura totale</strong>, a mano su una lucidatrice da banco.</p>
          <p>TR90 e metallo saltano la fase di lucidatura ma ricevono un trattamento diverso. Il TR90 ha una finitura opaca di default. Il metallo riceve galvanizzazione — oro, argento, gunmetal, oro rosa — un processo separato che aggiunge 1–2 giorni.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Applicazione del Logo</h3>
          <p>Il logo del tuo marchio viene applicato in questa fase. Le opzioni includono:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Stampa a caldo</strong> — lamina metallica pressata sull\'asta o sulla lente. $0,05–0,15 per stampa.</li>
            <li><strong>Incisione laser</strong> — brucia il logo sulla superficie. Permanente e preciso. $0,10–0,25 per incisione.</li>
            <li><strong>Tampografia</strong> — inchiostro trasferito tramite tampone in silicone. $0,08–0,20 per stampa.</li>
            <li><strong>Placca metallica rivettata</strong> — piccola placca con il tuo logo sull\'asta. Sensazione premium. $0,30–0,80 per placca.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Controllo Qualità Finale Prima dell\'Imballaggio</h3>
          <p>Prima che qualsiasi cosa vada in una scatola, ogni paio riceve un\'ispezione finale. Diversa dal QC in linea della Settimana 3 — è una verifica indipendente superato/non superato da un ispettore QC senior che non ha partecipato alla produzione di quelle paia specifiche.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Spedizione e Logistica</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Metodo</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Transito</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Costo</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Ideale per</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 p-3 font-medium">Aereo (DHL/UPS/FedEx)</td><td className="border border-gray-200 p-3">3–7 giorni</td><td className="border border-gray-200 p-3">$2–4/kg</td><td className="border border-gray-200 p-3 text-sm">Campioni e ordini &lt;50 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Ferrovia (verso Europa)</td><td className="border border-gray-200 p-3">12–18 giorni</td><td className="border border-gray-200 p-3">$1–1,50/kg</td><td className="border border-gray-200 p-3 text-sm">Ordini medi UE</td></tr>
                <tr><td className="border border-gray-200 p-3 font-medium">Marittimo LCL</td><td className="border border-gray-200 p-3">20–35 giorni</td><td className="border border-gray-200 p-3">$0,30–0,80/kg</td><td className="border border-gray-200 p-3 text-sm">Ordini 50–500 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Marittimo FCL (20 piedi)</td><td className="border border-gray-200 p-3">20–35 giorni</td><td className="border border-gray-200 p-3">$1.500–3.000/container</td><td className="border border-gray-200 p-3 text-sm">Ordini 2.000 kg+</td></tr>
              </tbody>
            </table>
          </div>
          <p>Ed ecco fatto. Quattro settimane. Dallo schizzo al prodotto spedito. Sembra veloce quando lo scrivo così — e onestamente, è veloce. Il motivo per cui possiamo farlo è che eseguiamo questo processo dal 2006. Gli stampi sono tagliati dalla stessa officina CNC con cui lavoriamo da 12 anni. L\'acetato viene da fornitori con cui abbiamo contratti trimestrali. Quando tutto è interno e ognuno conosce il proprio lavoro, 4 settimane non sono una corsa — è semplicemente la tempistica standard.</p>

          {/* FAQ */}
          <section className="mb-12">
            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-8">Domande Frequenti</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-700 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Hai uno Schizzo? Trasformiamolo in Occhiali da Sole</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Inviaci il tuo design — file CAD, foto o schizzo su tovagliolo — e avrai montature campione in mano entro 4 settimane. Acetato, TR90, metallo, bio-materiali. OEM completo con il tuo marchio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/it/contatti/" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
                Avvia il Tuo Progetto
              </Link>
              <Link href="/it/prodotti/" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-colors border-2 border-primary-400">
                Vedi Modelli Esistenti
              </Link>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/it/blog/guida-importazione-occhiali" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Importazione</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guida all&apos;Importazione di Occhiali da Sole dalla Cina</h3>
                <p className="text-gray-600 text-sm">Processo passo passo per importare occhiali dalla Cina.</p>
              </Link>
              <Link href="/it/blog/confronto-materiali-montature" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Produzione</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">TR90 vs Acetato vs Metallo: Quale Materiale per il Tuo Brand?</h3>
                <p className="text-gray-600 text-sm">Dati reali sui costi, confronti di peso e test di durabilità.</p>
              </Link>
              <Link href="/it/blog/guida-moq-occhiali" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Approvvigionamento</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guida alle Quantità Minime per Occhiali da Sole</h3>
                <p className="text-gray-600 text-sm">Cosa significa realmente il MOQ a livello di fabbrica.</p>
              </Link>
              <Link href="/it/blog/oem-vs-odm" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Produzione</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">OEM vs ODM Occhiali da Sole: Qual è la Differenza?</h3>
                <p className="text-gray-600 text-sm">Costi reali, tempistiche reali e un quadro decisionale che funziona.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
