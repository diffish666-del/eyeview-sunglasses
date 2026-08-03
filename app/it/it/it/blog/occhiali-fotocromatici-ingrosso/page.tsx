import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Guida agli occhiali fotocromatici all\'ingrosso: prezzi lenti Transitions, MOQ e approvvigionamento in fabbrica',
  description: 'Guida diretta dalla fabbrica agli occhiali fotocromatici all\'ingrosso: qualità delle lenti, prezzi all\'ingrosso per quantità, MOQ minimi, test di velocità di schiarimento e come evitare le lenti fotocromatiche economiche che rovinano la reputazione del tuo marchio.',
  keywords: ['occhiali fotocromatici ingrosso', 'lenti transitions stock', 'produttore occhiali fotocromatici', 'occhiali adattivi alla luce ingrosso', 'prezzo lenti fotocromatiche', 'fabbrica occhiali transitions', 'occhiali fotocromatici stock', 'MOQ occhiali fotocromatici', 'qualità lenti fotocromatiche', 'occhiali transitions ingrosso'],
  alternates: {
    canonical: '/it/blog/occhiali-fotocromatici-ingrosso',
  },
};

const takeaways = [
  'Non tutte le lenti fotocromatiche sono uguali — c\'è un enorme divario qualitativo tra le lenti fotocromatiche da 1,50 $/paio che trovi nei cataloghi generici all\'ingrosso e le lenti da 8–12 $/paio che si scuriscono velocemente, si schiariscono appena rientri al chiuso e durano oltre 2 anni senza degradarsi',
  'La qualità di una lente fotocromatica dipende da tre fattori: velocità di attivazione (quanto velocemente si scurisce al sole), velocità di schiarimento (quanto velocemente torna trasparente al chiuso) e durata dei cicli (quanti cicli scurimento/schiarimento prima che il colorante fotocromatico si degradi) — le lenti economiche falliscono su tutti e tre e i tuoi clienti se ne accorgeranno nel giro di poche settimane',
  'Le fabbriche cinesi offrono lenti fotocromatiche su tre livelli: entry-level (colorante fotocromatico solo sulla superficie della lente, ~1,50–3 $/paio), medio (fotocromatico in massa, ~3–6 $/paio) e alto (in massa con colorante stabilizzato UV, ~6–12 $/paio all\'ingrosso) — il livello medio è il punto di equilibrio ideale per la maggior parte degli acquirenti all\'ingrosso',
  'Il MOQ per occhiali fotocromatici personalizzati parte da 500–1.000 unità per modello, ma puoi testare il mercato con 300 unità di montature OEM a stock con lenti fotocromatiche — un ordine di prova da 900–1.500 $ che ti permette di validare la domanda prima di investire in stampi personalizzati',
  'La lamentela più comune degli utenti finali sugli occhiali fotocromatici è che "non funzionano in macchina" — la maggior parte delle lenti fotocromatiche si attiva con i raggi UV e i parabrezza delle auto bloccano gli UV, quindi rimangono chiare all\'interno del veicolo; se i tuoi clienti all\'ingrosso vendono a chi guida, devi specificare lenti fotocromatiche "da interno auto" o essere trasparente su questa limitazione',
  'Si prevede che il mercato globale delle lenti fotocromatiche raggiungerà gli 8,9 miliardi di dollari entro il 2030 (CAGR 8,2%), trainato dall\'invecchiamento della popolazione che necessita di lenti fotocromatiche graduate e dagli appassionati di outdoor che vogliono un unico paio di occhiali per tutte le condizioni di luce — i grossisti che aggiungono una linea fotocromatica ora si stanno posizionando in una categoria che cresce più velocemente degli occhiali da sole standard',
];

const quickStats = [
  { label: 'Mercato globale fotocromatico (2030)', value: '8,9 MLD $' },
  { label: 'CAGR del mercato (2024–2030)', value: '8,2%' },
  { label: 'Lente fotocromatica entry-level', value: '1,50–3,00 $/paio' },
  { label: 'Lente fotocromatica di fascia media', value: '3,00–6,00 $/paio' },
  { label: 'Lente fotocromatica di alta gamma', value: '6,00–12,00 $/paio' },
  { label: 'MOQ montatura personalizzata (fotocromatico)', value: '500–1.000 unità' },
  { label: 'Tempo di attivazione (lente di qualità)', value: '15–30 secondi' },
  { label: 'Tempo di schiarimento (al chiuso)', value: '2–5 minuti' },
];

const faqs = [
  {
    question: 'Qual è la differenza tra lenti fotocromatiche e lenti polarizzate?',
    answer: 'Le lenti fotocromatiche cambiano tonalità in base all\'esposizione ai raggi UV — si scuriscono all\'aperto e si schiariscono al chiuso. Le lenti polarizzate hanno una tinta fissa con una pellicola chimica che blocca i riflessi orizzontali. Servono a scopi completamente diversi. Le fotocromatiche puntano sulla praticità (un unico paio per interno/esterno), le polarizzate sulla riduzione dei riflessi (soprattutto su acqua, neve e strade). Esistono anche lenti fotocromatiche polarizzate, ma costano di più (8–18 $/paio all\'ingrosso) perché combinano due tecnologie in una sola lente. La maggior parte degli acquirenti all\'ingrosso inizia con le fotocromatiche standard e aggiunge le fotocromatiche polarizzate come referenza premium in un secondo momento.',
  },
  {
    question: 'Quanto durano le lenti fotocromatiche prima di smettere di funzionare?',
    answer: 'Le lenti fotocromatiche di qualità (colorante in massa, stabilizzato UV) durano generalmente 2–3 anni di utilizzo quotidiano prima che l\'effetto scurimento si indebolisca in modo evidente. Il degrado è graduale — le lenti non diventano più così scure come prima e il tempo di schiarimento si allunga. Le lenti fotocromatiche entry-level con rivestimento superficiale possono iniziare a degradarsi dopo 6–12 mesi, soprattutto se l\'utilizzatore sta all\'aperto più di 4 ore al giorno. Questo è il motivo numero uno per evitare le lenti fotocromatiche più economiche per qualsiasi marchio che tenga ai clienti abituali. Le molecole del colorante fotocromatico si consumano letteralmente a causa della ripetuta esposizione ai raggi UV — ogni ciclo scurimento/schiarimento provoca un minuscolo affaticamento molecolare. A livello di fabbrica, testiamo la durata dei cicli con una lampada UV e un timer: una buona lente dovrebbe mantenere oltre l\'80% della sua capacità di scurimento dopo 3.000 cicli.',
  },
  {
    question: 'Perché gli occhiali fotocromatici costano più degli occhiali da sole normali?',
    answer: 'La differenza di prezzo deriva dal colorante fotocromatico stesso e dalla complessità produttiva. Le lenti per occhiali da sole normali usano un colorante fisso mescolato al monomero della lente prima dell\'iniezione o della colata — semplice, economico, collaudato. Le lenti fotocromatiche richiedono invece l\'incorporazione delle molecole fotocromatiche in tutto il materiale della lente (metodo in massa) oppure l\'applicazione di un rivestimento fotocromatico sulla superficie. Il metodo in massa utilizza coloranti fotocromatici proprietari che costano da 5 a 10 volte più dei coloranti standard, e il processo produttivo richiede un controllo della temperatura più rigoroso perché il calore degrada il composto fotocromatico. All\'ingrosso, una lente polarizzata TAC standard può costare 1,20 $/paio in grandi volumi; una lente fotocromatica di fascia media costa 3,50–5,00 $/paio. Il sovrapprezzo è reale — non è solo marketing.',
  },
  {
    question: 'Posso acquistare occhiali fotocromatici graduati all\'ingrosso?',
    answer: 'Sì, ma il fotocromatico graduato segue una filiera diversa rispetto al fotocromatico piano (non graduato). Gli occhiali fotocromatici piani sono prodotti in serie a livello di fabbrica usando lenti stampate a iniezione o per colata. Le lenti fotocromatiche graduate sono generalmente realizzate da laboratori ottici che fresano la gradazione su un semilavorato fotocromatico. Alcune fabbriche cinesi con laboratori ottici interni possono produrre occhiali fotocromatici graduati in serie (oltre 500 unità), ma il prezzo è più alto — considera 12–25 $/paio per fotocromatico graduato monofocale e 25–50 $/paio per fotocromatico graduato progressivo, a seconda della complessità della prescrizione e dell\'integrazione con la montatura. Per gli acquirenti all\'ingrosso che vogliono entrare nel mercato del fotocromatico graduato, l\'approccio più semplice è offrire montature fotocromatiche con lenti demo e collaborare con un laboratorio ottico locale per la realizzazione delle prescrizioni — così si evita l\'incubo di gestire un magazzino con ogni possibile combinazione di gradazione.',
  },
  {
    question: 'Cosa devo controllare quando acquisto occhiali fotocromatici da una fabbrica cinese?',
    answer: 'Tre cose da testare prima di effettuare un ordine all\'ingrosso: (1) Velocità di attivazione e schiarimento — prendi un paio di campioni ed esponili alla luce diretta del sole, contando quanto tempo impiegano a scurirsi completamente (meno di 30 secondi per lenti di qualità) e quanto a schiarirsi al chiuso (meno di 5 minuti). (2) Sensibilità alla temperatura — le lenti fotocromatiche si scuriscono di più con il freddo e di meno con il caldo; una buona lente dovrebbe comunque raggiungere oltre il 70% di tinta a 35 °C. Le lenti economiche a malapena si scuriscono nelle giornate calde. (3) Durata dei cicli — chiedi alla fabbrica il nome del fornitore del colorante fotocromatico e il report del test dei cicli. Le fabbriche affidabili usano coloranti di aziende come Transitions Optical (ora di proprietà EssilorLuxottica), Hoya o Corning — o i loro equivalenti cinesi come Conant Optical o Mingyue Optical. Se la fabbrica non sa indicare il nome del fornitore del colorante, lascia perdere. Inoltre, specifica sempre che le lenti devono soddisfare gli standard ANSI Z80.3 o EN ISO 12312-1 per la protezione UV — fotocromatico non significa automaticamente UV400, e servono entrambi.',
  },
  {
    question: 'Quali sono i colori di lenti fotocromatiche più richiesti all\'ingrosso?',
    answer: 'Il fotocromatico grigio è il bestseller in tutti i mercati — offre la percezione cromatica più naturale e si abbina bene con qualsiasi colore di montatura. Il fotocromatico marrone/ambra è il secondo più popolare, specialmente nei mercati con tempo variabile (Regno Unito, Nord Europa, Pacifico nord-occidentale) perché migliora il contrasto nelle giornate nuvolose. Il fotocromatico verde (spesso commercializzato come G-15 fotocromatico) ha un seguito di nicchia tra gli appassionati di outdoor e gli acquirenti del settore militare e delle forze dell\'ordine. Il fotocromatico blu sta crescendo nel segmento moda, in particolare nei mercati coreano e giapponese. Per un primo ordine all\'ingrosso di fotocromatico, consiglio il 60% grigio, 30% marrone, 10% verde/altro — questa ripartizione copre il 95% delle preferenze dei clienti nella maggior parte dei mercati. Evita di tenere a magazzino colori eccentrici (fotocromatico rosa, viola, giallo) a meno che tu non abbia un acquirente specifico che li richiede — fanno scena su una scheda tecnica ma restano in magazzino.',
  },
];

const PUBLISH_DATE = '2026-08-04';
const SLUG = 'photochromic-sunglasses-wholesale-guide';

export default function GuidaOcchialiFotocromaticiIngrosso() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/it/blog/' },
          { name: 'Guida agli occhiali fotocromatici all\'ingrosso' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Guida agli occhiali fotocromatici all'ingrosso: prezzi lenti Transitions, MOQ e approvvigionamento in fabbrica",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guida diretta dalla fabbrica agli occhiali fotocromatici all'ingrosso: qualità delle lenti, prezzi all'ingrosso, MOQ, test di velocità di schiarimento e come evitare lenti fotocromatiche economiche che danneggiano il tuo marchio.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/blog/${SLUG}` }
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

        {/* ═══════ INTESTAZIONE ARTICOLO ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Guida Prodotto</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>14 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guida agli occhiali fotocromatici all&apos;ingrosso: prezzi lenti Transitions, MOQ e approvvigionamento in fabbrica
          </h1>
          <p className="text-xl text-gray-600">
            La maggior parte degli acquirenti all&apos;ingrosso sa che le lenti fotocromatiche esistono. Quello che non sanno è che il divario qualitativo tra una lente fotocromatica da 1,50 $ e una da 8 $ è la differenza tra un cliente che compra una volta sola e un cliente che dice a tutti quelli che conosce di non fidarsi del tuo marchio. Questa guida raccoglie ciò che ho imparato spedendo occhiali fotocromatici ad acquirenti in oltre 40 paesi.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ INDICE ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Indice</h2>
          <ul className="space-y-2">
            <li><a href="#come-funzionano" className="text-primary-600 hover:underline">Come funzionano davvero le lenti fotocromatiche</a></li>
            <li><a href="#livelli-qualita" className="text-primary-600 hover:underline">I tre livelli di qualità: per cosa paghi veramente</a></li>
            <li><a href="#prezzi-moq" className="text-primary-600 hover:underline">Prezzi all&apos;ingrosso e MOQ: l&apos;aspetto reale di un ordine in fabbrica</a></li>
            <li><a href="#domanda-mercato" className="text-primary-600 hover:underline">Chi compra fotocromatico all&apos;ingrosso in questo momento</a></li>
            <li><a href="#controllo-qualita" className="text-primary-600 hover:underline">Controllo qualità: come testare le lenti fotocromatiche prima di acquistare</a></li>
            <li><a href="#problemi-comuni" className="text-primary-600 hover:underline">I 4 problemi di cui nessuno ti avverte</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Domande frequenti</a></li>
          </ul>
        </nav>

        {/* ═══════ CORPO ARTICOLO ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="Dati Rapidi" />

          {/* ─── Sezione 1: Come Funzionano ─── */}
          <h2 id="come-funzionano" className="text-3xl font-bold mt-16 mb-6">Come funzionano davvero le lenti fotocromatiche</h2>
          
          <p>Quasi ogni nuovo acquirente all&apos;ingrosso mi pone una versione di questa domanda: &quot;Le lenti fotocromatiche sono un rivestimento o sono dentro la lente?&quot; Domanda legittima — la risposta determina per cosa stai pagando.</p>
          
          <p>Le molecole fotocromatiche — di solito alogenuro d&apos;argento o composti organici naftopiranici — sono incorporate nel materiale della lente. Quando i raggi UV colpiscono queste molecole, subiscono una reazione chimica che modifica la loro struttura molecolare, facendo sì che assorbano più luce visibile. È questo che fa apparire la lente più scura. Quando la sorgente UV scompare (entri al chiuso), le molecole tornano alla loro struttura originale e la lente si schiarisce.</p>
          
          <p>Ci sono due modi in cui le fabbriche inseriscono queste molecole in una lente:</p>
          
          <p><strong>Fotocromatico in massa:</strong> il colorante fotocromatico viene mescolato al monomero liquido della lente prima della colata o dell&apos;iniezione. Il colorante è distribuito in tutto lo spessore della lente. È la tecnologia che Transitions Optical ha introdotto negli anni &apos;90, ed è ciò che ogni lente fotocromatica di qualità utilizza oggi. Lo svantaggio: costa di più perché si usa colorante fotocromatico in tutta la lente, non solo in superficie.</p>
          
          <p><strong>Fotocromatico a rivestimento superficiale:</strong> il colorante fotocromatico viene applicato come rivestimento sulla superficie anteriore di una lente standard. È più economico — il colorante si applica solo in superficie — ma si consuma. Ogni graffio, ogni passata con un panno ruvido, ogni goccia di crema solare che finisce sulla lente degrada un po&apos; il rivestimento. Dopo 6–12 mesi di uso regolare, ti ritrovi con un paio di occhiali da sole che a malapena si scuriscono.</p>
          
          <p>Quando un fornitore ti quota 1,50 $/paio per lenti fotocromatiche, stai acquistando il rivestimento superficiale. Punto. Nessuno può produrre in modo redditizio il fotocromatico in massa a quel prezzo. Costa di più la sola materia prima del colorante.</p>

          {/* ─── Sezione 2: Livelli di Qualità ─── */}
          <h2 id="livelli-qualita" className="text-3xl font-bold mt-16 mb-6">I tre livelli di qualità: per cosa paghi veramente</h2>
          
          <p>Mi è capitato di essere in fabbrica mentre un acquirente sosteneva che &quot;il fotocromatico è fotocromatico&quot; e che tutte le lenti sono uguali. Non lo sono. Ecco cosa offre realmente il mercato, dal basso verso l&apos;alto.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Livello 1: Entry-Level (rivestimento superficiale) — 1,50–3,00 $/paio</h3>
          
          <p>Sono gli occhiali fotocromatici che vedi su Alibaba a 0,80–1,20 $ FOB. La lente è una lente TAC o in policarbonato standard con un sottile rivestimento fotocromatico applicato sulla superficie. Si scuriscono lentamente — 60–90 secondi per raggiungere la tinta piena — e si schiariscono ancora più lentamente, a volte 8–10 minuti. Dopo 6 mesi di uso quotidiano, a malapena si scuriscono. L&apos;intervallo di attivazione è ristretto: funzionano decentemente a 15–25 °C ma a malapena si attivano sopra i 30 °C.</p>
          
          <p>La parte peggiore: queste lenti spesso non soddisfano in modo costante gli standard UV400. Il rivestimento fotocromatico può presentare microfori o un&apos;applicazione non uniforme che lascia passare gli UV. Se vendi in mercati con leggi forti sulla tutela dei consumatori (UE, Australia, Stati Uniti), queste lenti sono una responsabilità legale. Ho visto spedizioni respinte alla dogana europea perché il test di laboratorio mostrava un blocco UV non uniforme sulla superficie della lente.</p>
          
          <p><strong>Chi compra queste lenti:</strong> venditori ambulanti, negozi tutto-a-un-dollaro, omaggi da fiera, mercati dove nessuno fa causa per gli occhiali da sole. Non per chi sta costruendo un marchio.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Livello 2: Fascia Media (in massa, colorante standard) — 3,00–6,00 $/paio</h3>
          
          <p>Qui le cose si fanno interessanti. Le lenti fotocromatiche di fascia media usano il colorante in massa — il composto fotocromatico è mescolato nel materiale della lente prima dello stampaggio. Il tempo di attivazione scende a 20–40 secondi, lo schiarimento è di 3–5 minuti e le lenti mantengono prestazioni decenti per 18–24 mesi. L&apos;UV400 è uniforme su tutta la superficie della lente perché anche gli agenti bloccanti UV sono in massa.</p>
          
          <p>Il colorante usato a questo livello è generalmente un composto naftopiranico generico proveniente da fornitori chimici cinesi come Conant Optical. Non è al livello di Transitions, ma è funzionale. Il limite principale è la sensibilità alla temperatura — queste lenti si scuriranno meno in una giornata estiva a 35 °C, il che è un problema concreto se i tuoi clienti vivono in climi caldi.</p>
          
          <p><strong>Chi compra queste lenti:</strong> marchi di fascia media, venditori Amazon, negozi di ottica boutique, aziende di articoli promozionali che tengono agli acquisti ripetuti. È qui che atterra il 70% dei nostri ordini fotocromatici. La proposta di valore funziona per la maggior parte degli acquirenti all&apos;ingrosso: le lenti funzionano davvero, i clienti sono soddisfatti e il prezzo lascia spazio a margini al dettaglio sani.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Livello 3: Alta Gamma (in massa, colorante stabilizzato UV) — 6,00–12,00 $/paio</h3>
          
          <p>Queste usano coloranti fotocromatici premium — su licenza Transitions Optical, Hoya, o equivalenti cinesi di fascia alta che ne eguagliano le prestazioni. L&apos;attivazione è di 10–20 secondi, lo schiarimento è inferiore a 2 minuti e la stabilità termica è molto migliore: queste lenti raggiungono comunque il 75–85% di tinta anche a 35 °C. La durata dei cicli supera i 3.000 cicli scurimento/schiarimento con un degrado minimo.</p>
          
          <p>Il costo aggiuntivo deriva da tre fattori: il colorante premium (3–4 volte il costo della fascia media), un composto stabilizzante UV aggiunto al monomero della lente che protegge le molecole fotocromatiche dall&apos;affaticamento, e un controllo qualità più rigoroso (ogni lotto viene testato per velocità di attivazione, velocità di schiarimento e blocco UV prima del rilascio).</p>
          
          <p><strong>Chi compra queste lenti:</strong> marchi premium, catene di ottica, chiunque venda occhiali da sole sopra i 50 $ al dettaglio. Se il posizionamento del tuo marchio è &quot;qualità&quot;, questo è il tuo livello. La differenza nell&apos;esperienza del cliente tra una lente di Livello 2 e una di Livello 3 è percepibile — e i tuoi clienti la noteranno.</p>
          
          <p>Una nota pratica: alcune fabbriche commercializzano le lenti di Livello 2 come &quot;di qualità Transitions&quot; o &quot;paragonabili a Transitions&quot;. Non lo sono. Se una fabbrica non può fornire il nome del fornitore del colorante e un report di test del lotto, parti dal presupposto che stai ottenendo al massimo il Livello 2.</p>

          {/* ─── Sezione 3: Prezzi e MOQ ─── */}
          <h2 id="prezzi-moq" className="text-3xl font-bold mt-16 mb-6">Prezzi all&apos;ingrosso e MOQ: l&apos;aspetto reale di un ordine in fabbrica</h2>
          
          <p>Lasciate che vi dia numeri reali, non prezzi da catalogo. Questi sono preventivi FOB Xiamen che invierei oggi a un acquirente all&apos;ingrosso, ipotizzando montature standard in acetato o TR90 con lenti fotocromatiche.</p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Quantità</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Livello 1 (Superficie)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Livello 2 (In Massa)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Livello 3 (Premium)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">300–500 unità</td>
                  <td className="border border-gray-300 px-4 py-2">2,80–3,50 $</td>
                  <td className="border border-gray-300 px-4 py-2">5,00–7,00 $</td>
                  <td className="border border-gray-300 px-4 py-2">10,00–14,00 $</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">1.000–3.000 unità</td>
                  <td className="border border-gray-300 px-4 py-2">2,00–2,80 $</td>
                  <td className="border border-gray-300 px-4 py-2">3,80–5,00 $</td>
                  <td className="border border-gray-300 px-4 py-2">7,50–10,00 $</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">3.000–10.000 unità</td>
                  <td className="border border-gray-300 px-4 py-2">1,50–2,00 $</td>
                  <td className="border border-gray-300 px-4 py-2">3,00–3,80 $</td>
                  <td className="border border-gray-300 px-4 py-2">6,00–7,50 $</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Oltre 10.000 unità</td>
                  <td className="border border-gray-300 px-4 py-2">1,20–1,50 $</td>
                  <td className="border border-gray-300 px-4 py-2">2,50–3,00 $</td>
                  <td className="border border-gray-300 px-4 py-2">5,00–6,00 $</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Questi prezzi includono la montatura, le lenti fotocromatiche, l&apos;imballaggio base (sacchetto di plastica + panno per la pulizia) e il controllo qualità standard. Imballaggio personalizzato, stampa del logo, cartellini e astucci premium aggiungono 0,30–1,50 $/unità a seconda della complessità.</p>
          
          <p><strong>Verifica realistica del MOQ:</strong> la maggior parte delle fabbriche di Xiamen e Wenzhou quota un MOQ di 1.000–2.000 unità per gli occhiali fotocromatici. Ma ecco cosa succede realmente in produzione: se ordini montature OEM a stock (stampi esistenti) e ti limiti a montare lenti fotocromatiche, molte fabbriche accettano 300–500 unità per un ordine di prova — specialmente se ordini almeno 3 modelli. Il prezzo unitario sale con quantità basse, ma un ordine di prova da 1.500 $ è molto più intelligente che impegnare 10.000 $ in un prodotto che non hai ancora testato sul tuo mercato.</p>
          
          <p><strong>Stampaggio montature personalizzate:</strong> se desideri un tuo design di montatura con lenti fotocromatiche, i costi degli stampi variano da 300 a 800 $ per stampo e ti serviranno 2–4 stampi per modello (diverse misure o colori). Il MOQ sale a 1.000–2.000 unità per modello perché la fabbrica deve ammortizzare il costo degli stampi. Totale primo ordine per una linea fotocromatica personalizzata con 3 modelli × 1.000 unità ciascuno: circa 12.000–18.000 $ con prezzi di Livello 2, più 2.000–3.000 $ di costi stampi.</p>
          
          <p><strong>Tempi di consegna:</strong> 25–35 giorni per OEM a stock con lenti fotocromatiche. 45–60 giorni per montature personalizzate con lenti fotocromatiche. Aggiungi 2 settimane se prevedi un imballaggio personalizzato con scatole brandizzate. La produzione delle lenti fotocromatiche in sé non aggiunge tempi significativi — il collo di bottiglia è quasi sempre la produzione delle montature, non le lenti.</p>

          {/* ─── Sezione 4: Domanda di Mercato ─── */}
          <h2 id="domanda-mercato" className="text-3xl font-bold mt-16 mb-6">Chi compra fotocromatico all&apos;ingrosso in questo momento</h2>
          
          <p>Tengo traccia dei nostri dati sugli ordini fotocromatici trimestralmente. Ecco come si presenta la domanda a metà 2026.</p>
          
          <p><strong>Negozi di ottica e optometristi</strong> sono il segmento in più rapida crescita. Stanno aggiungendo occhiali fotocromatici piani (non graduati) come vendita aggiuntiva per i clienti che già acquistano occhiali da vista. La proposta è semplice: &quot;Hai già gli occhiali da vista. Ecco un paio di occhiali fotocromatici per quando sei all&apos;aperto.&quot; Ordine medio: 200–500 unità, prevalentemente Livello 2, lenti grigie.</p>
          
          <p><strong>Rivenditori outdoor e sportivi</strong> sono il secondo segmento più grande — negozi di escursionismo, pesca, ciclismo, golf. Questi acquirenti vogliono fotocromatico polarizzato (Livello 2 o 3) e sono pignoli sulla durata delle montature. Chiedono della qualità delle cerniere, della resistenza ai graffi delle lenti e se la montatura galleggia. Ordine medio: 300–800 unità.</p>
          
          <p><strong>Aziende di articoli promozionali</strong> acquistano fotocromatico per regali aziendali e omaggi per eventi. Di solito ordinano Livello 1 perché il budget è limitato e l&apos;utente finale non paga per gli occhiali. Ma alcuni clienti aziendali di fascia più alta (banche, compagnie assicurative, concessionarie di auto di lusso) ordinano fotocromatico Livello 2 con logo personalizzato come regalo premium per i clienti. Ordine medio: 500–2.000 unità.</p>
          
          <p><strong>Venditori Amazon ed e-commerce</strong> sono un gruppo eterogeneo. Quelli più furbi ordinano Livello 2, fissano il prezzo al dettaglio a 25–40 $ e costruiscono un marchio intorno al concetto di &quot;fotocromatico accessibile&quot;. Quelli meno esperti ordinano Livello 1, fissano il prezzo a 15 $ e affogano nelle recensioni a una stella per le lenti che hanno smesso di funzionare. Ho visto almeno una dozzina di inserzioni Amazon di fotocromatico morire in questo modo. Non essere uno di loro.</p>
          
          <p><strong>Modelli geografici della domanda:</strong> il Nord Europa e il Regno Unito amano il fotocromatico — il tempo cambia di continuo e la gente non vuole portarsi dietro due paia di occhiali. L&apos;Australia e il Medio Oriente sono mercati difficili perché le alte temperature riducono l&apos;attivazione fotocromatica — se vendi in queste regioni, le lenti di Livello 3 sono quasi obbligatorie. Il mercato statunitense si divide circa 60/40 tra negozi di ottica (abbinati alla gradazione) ed e-commerce diretto al consumatore.</p>

          {/* ─── Sezione 5: Controllo Qualità ─── */}
          <h2 id="controllo-qualita" className="text-3xl font-bold mt-16 mb-6">Controllo qualità: come testare le lenti fotocromatiche prima di acquistare</h2>
          
          <p>Non ti serve un laboratorio per individuare le lenti fotocromatiche scadenti. Ecco cosa consiglio a ogni acquirente di fare con i campioni prima di effettuare un ordine.</p>
          
          <p><strong>1. Il test della porta.</strong> Mettiti in una stanza ben illuminata al chiuso. Tieni una lente a metà attraverso una porta aperta verso la luce diretta del sole. Conta quanti secondi ci vogliono perché la metà esposta diventi visibilmente più scura della metà al chiuso. Meno di 20 secondi: eccellente. 20–40 secondi: accettabile. Oltre 60 secondi: rifiuta. È il test più semplice e individua immediatamente le lenti peggiori.</p>
          
          <p><strong>2. Il test di schiarimento.</strong> Dopo che la lente si è completamente scurita all&apos;aperto, rientra al chiuso e appoggia gli occhiali da sole su un foglio di carta bianco. Cronometra quanto tempo impiega la lente a tornare quasi trasparente. Meno di 3 minuti: eccellente. 3–5 minuti: accettabile. Oltre 8 minuti: rifiuta — i tuoi clienti entreranno in un ristorante e resteranno seduti per 10 minuti con l&apos;aria di chi porta gli occhiali da sole a cena.</p>
          
          <p><strong>3. Il test della giornata calda.</strong> Testa le lenti in una giornata calda (oltre 30 °C). Le lenti fotocromatiche naturalmente si scuriscono meno con il caldo, ma una lente di qualità dovrebbe comunque raggiungere oltre il 70% della sua tinta massima. Se la lente cambia a malapena in una giornata calda, sarà inutile d&apos;estate — che è esattamente quando la maggior parte delle persone indossa gli occhiali da sole.</p>
          
          <p><strong>4. Il test con la scheda UV.</strong> Compra una scheda di test UV (costano circa 2 $ su Amazon). Illumina la lente con una torcia UV puntando sulla scheda. La scheda dovrebbe mostrare una trasmissione UV pari a zero o quasi. Se la scheda si illumina di viola, la lente non blocca gli UV — e la protezione UV è l&apos;intera ragion d&apos;essere degli occhiali da sole, fotocromatici o meno.</p>
          
          <p><strong>5. Il test del graffio (opzionale ma rivelatore).</strong> Graffia leggermente la superficie della lente con una chiave — una sola volta, sul bordo. Se il graffio rivela uno strato di base trasparente sotto uno strato superficiale più scuro, hai una lente fotocromatica a rivestimento superficiale. Le lenti fotocromatiche in massa mostrano lo stesso colore in tutto lo spessore. È un test distruttivo, ma ti dice esattamente per cosa stai pagando.</p>
          
          <p>Per gli ordini all&apos;ingrosso, insisti per ottenere dalla fabbrica: un report dello spettrometro di trasmissione UV (che dimostri la conformità UV400 su tutta la superficie della lente, non solo al centro), un video o report del test di velocità di attivazione/schiarimento e un certificato di lotto che indichi il nome del fornitore del colorante fotocromatico. Una fabbrica che non può fornire questi documenti o sta nascondendo qualcosa o non sa cosa sta vendendo — nessuna delle due cose è accettabile.</p>

          {/* ─── Sezione 6: Problemi Comuni ─── */}
          <h2 id="problemi-comuni" className="text-3xl font-bold mt-16 mb-6">I 4 problemi di cui nessuno ti avverte</h2>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 1: non funzionano in auto</h3>
          
          <p>La maggior parte dei parabrezza delle auto è in vetro laminato con uno strato intermedio che blocca i raggi UV. Questo strato blocca il 98–99% degli UV — ottimo per la pelle, ma letale per l&apos;attivazione fotocromatica. I tuoi occhiali fotocromatici resteranno chiari o quasi mentre guidi. È la lamentela numero uno dei clienti sulle lenti fotocromatiche, e non è un difetto — è fisica. Alcune lenti fotocromatiche premium (come le Transitions XTRActive) sono formulate per reagire anche alla luce visibile oltre che agli UV, quindi funzionano parzialmente dietro un parabrezza. Ma sono più costose (12–18 $/paio all&apos;ingrosso) e comunque non diventano così scure come alla luce diretta del sole. Se i tuoi clienti all&apos;ingrosso vendono a chi guida, specifica lenti fotocromatiche &quot;da interno auto&quot; oppure metti una chiara avvertenza sulla confezione.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 2: la temperatura uccide le prestazioni</h3>
          
          <p>Le molecole fotocromatiche sono sensibili alla temperatura per natura. A 0 °C si scuriscono profondamente e si schiariscono lentamente. A 35 °C, la stessa lente potrebbe raggiungere solo il 50–60% della sua tinta massima. È una limitazione fondamentale della chimica fotocromatica — l&apos;energia termica alle alte temperature spinge le molecole verso lo stato chiaro più velocemente di quanto gli UV riescano a spingerle verso lo stato scuro. Le lenti di Livello 3 attenuano questo effetto con coloranti stabilizzati UV che spostano il punto di equilibrio, ma nessuna lente fotocromatica ha le stesse prestazioni a 35 °C che a 20 °C. Se vendi in climi caldi (Sud-est asiatico, Medio Oriente, Stati Uniti meridionali in estate), sii trasparente con i tuoi acquirenti. Oppure vendi loro occhiali da sole polarizzati.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 3: scurimento non uniforme nel primo mese</h3>
          
          <p>Le lenti fotocromatiche nuove a volte si scuriscono in modo non uniforme — il centro raggiunge la tinta piena prima dei bordi, o viceversa. Di solito è un difetto di fabbricazione dovuto a una distribuzione non uniforme del colorante durante il processo di colata o iniezione. È più comune nelle lenti di Livello 1 (applicazione non uniforme del rivestimento) ma può verificarsi anche nel Livello 2 se il processo di miscelazione della fabbrica è approssimativo. Controlla sempre 5–10 campioni casuali da diverse posizioni nel lotto di produzione per verificare l&apos;uniformità dello scurimento. Se più del 10% mostra disuniformità, rifiuta il lotto. Questo problema non si risolve da solo — peggiora con l&apos;invecchiamento della lente.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 4: l&apos;etichetta &quot;fotocromatico&quot; a volte è una bugia</h3>
          
          <p>Ho beccato fornitori che vendevano lenti colorate con una sfumatura sfumata spacciandole per fotocromatiche. La lente è permanentemente colorata più scura in alto e più chiara in basso — sembra una lente fotocromatica parzialmente attivata, ma non cambia mai. Il modo per smascherarlo: metti gli occhiali da sole in un cassetto buio per un&apos;ora, poi controlla se la lente è completamente trasparente. Se c&apos;è ancora una tinta visibile, non è fotocromatica — è una tinta sfumata fissa. Questa truffa è più comune di quanto si pensi, specialmente sulle piattaforme B2B dove l&apos;acquirente ordina a distanza e si fida delle foto. Testa sempre, sempre i campioni di persona prima di inviare denaro.</p>

          {/* ═══════ SEZIONE FAQ ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Domande frequenti</h2>
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
            <h2 className="text-3xl font-bold mb-4">Ti servono occhiali fotocromatici per la tua linea all&apos;ingrosso?</h2>
            <p className="text-xl mb-6 opacity-90">Dimmi qual è il tuo mercato di riferimento, la fascia di quantità e quale livello ti interessa. Ti invierò le specifiche dei campioni e un preventivo entro 24 ore — nessuna pressione, solo numeri reali da una fabbrica che opera in questo settore da 20 anni.</p>
            <Link
              href="/it/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Richiedi campioni fotocromatici e preventivo
            </Link>
          </div>

          {/* ═══════ CONTENUTI CORRELATI ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal reparto produzione</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/it/blog/uv400-vs-polarizzato" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">UV400 vs Polarizzato: cosa conta davvero</h3>
                <p className="text-gray-600 text-sm">La differenza spiegata da chi produce entrambi i tipi ogni giorno.</p>
              </Link>
              <Link href="/it/blog/guida-lenti-occhiali-da-sole" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guida alle lenti per occhiali da sole</h3>
                <p className="text-gray-600 text-sm">TAC, policarbonato, nylon, vetro — quale materiale delle lenti si adatta al tuo mercato.</p>
              </Link>
              <Link href="/it/contact" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contattaci</h3>
                <p className="text-gray-600 text-sm">Richiedi un preventivo per il tuo ordine personalizzato di occhiali da sole all&apos;ingrosso.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
