import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats, ProsCons } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Occhiali da Sole B2B vs B2C: Quale Modello di Business Fa Davvero Guadagnare nel 2026?',
  description: 'Un proprietario di fabbrica che fornisce sia grossisti B2B che marchi DTC mette a confronto i numeri reali: margini, flusso di cassa, costi di acquisizione clienti e quale modello sopravvive a una crisi.',
  keywords: ['business occhiali da sole B2B', 'marchio eyewear B2C', 'ingrosso vs DTC occhiali da sole', 'modello di business occhiali', 'margini di profitto eyewear', 'avviare un marchio di occhiali', 'strategia DTC occhiali'],
  alternates: {
    canonical: '/it/blog/b2b-vs-b2c-occhiali-sole',
  },
};

const takeaways = [
  'Il B2B all\'ingrosso è un gioco di volumi con margini lordi del 25–40% — prevedibile, a rischio più basso, ma servono $50K+ per iniziare e la pazienza di aspettare 60–90 giorni perché i termini di pagamento netti vengano saldati',
  'Il DTC (direct-to-consumer) offre margini lordi del 65–80% ma brucia liquidità in acquisizione — un marchio DTC medio spende $18–35 per acquisire un cliente su Meta, e questo numero sale ogni trimestre',
  'Il vincitore nascosto che la maggior parte delle persone si perde è il modello ibrido: vendi B2B per finanziare le operazioni, usa il DTC per costruire il valore del marchio — i marchi forniti dalla fabbrica che hanno successo iniziano quasi sempre dall\'ingrosso',
  'Il costo di acquisizione cliente (CAC) nell\'eyewear DTC è raddoppiato dal 2020 — un paio di occhiali da $29 con CAC di $25 ti lascia $4 prima ancora di aver pagato il prodotto, l\'imballaggio, la spedizione o i resi',
  'Il flusso di cassa B2B è il killer silenzioso: termini di pagamento net-60 significano che puoi aspettare 90 giorni tra l\'ordine in fabbrica e l\'incasso dei ricavi — pianifica almeno 3 mesi di capitale operativo prima che il tuo primo ordine all\'ingrosso venga spedito',
  'Il marchio minimo realizzabile è $8.000–15.000 per il lancio solo all\'ingrosso contro $25.000–75.000 per il DTC con un sito web serio, budget pubblicitario e scorta di magazzino — e quel numero DTC presuppone che tu azzecchi le inserzioni al primo tentativo',
];

const quickStats = [
  { label: 'Margine Lordo B2B Ingrosso', value: '25–40% lordo' },
  { label: 'Margine Lordo DTC', value: '65–80%' },
  { label: 'CAC DTC (Meta Ads, 2026)', value: '$18–35/cliente' },
  { label: 'Capitale Minimo di Lancio B2B', value: '$8K–15K' },
  { label: 'Capitale Minimo di Lancio DTC', value: '$25K–75K' },
  { label: 'Termini di Pagamento Netti B2B', value: 'Net 30–90 giorni' },
];

const faqs = [
  {
    question: 'Quale modello è più redditizio: B2B all\'ingrosso o DTC per occhiali da sole?',
    answer: 'Per unità, il DTC è molto più redditizio — 65–80% di margine lordo contro il 25–40% dell\'ingrosso. Ma la redditività non è solo margine; è margine meno costo di acquisizione, meno resi, meno spese generali. Un marchio DTC che vende 1.000 paia/mese a $59 con il 70% di margine ma spendendo $25 di CAC su ogni paio guadagna circa $16,30/unità prima delle spese generali. Un grossista B2B che muove 10.000 paia a $8 FOB verso una singola catena di negozi può guadagnare $1,50/unità ma in una sola transazione con zero spesa pubblicitaria. Volume × margine, non solo la percentuale di margine, determina quale modello fa guadagnare di più.',
  },
  {
    question: 'Quanti soldi mi servono per avviare un marchio di occhiali da sole?',
    answer: 'Per un marchio B2B solo all\'ingrosso: $8.000–15.000 coprono campionari (3–5 modelli × $50–100 ciascuno), scorte iniziali (300–500 unità su 5 modelli a $3–8/unità FOB), branding di base, un sito web semplice e la trasferta a una fiera di settore. Per un marchio DTC: $25.000–75.000 coprono tutto questo più una piattaforma e-commerce seria, fotografia professionale del prodotto, 2–3 mesi di budget pubblicitario a $3.000–10.000/mese, invio prodotti agli influencer e un buffer di magazzino più ampio (1.000–3.000 unità). L\'errore più grande che vedo sono i marchi che lanciano DTC con $10K — finiscono il budget pubblicitario prima di aver imparato cosa funziona.',
  },
  {
    question: 'Posso fare sia B2B che DTC con lo stesso marchio?',
    answer: 'Sì, ma sii strategico sui prezzi. Se vendi occhiali all\'ingrosso a $8 FOB a rivenditori che li rivendono a $39,99, e allo stesso tempo vendi gli stessi modelli DTC sul tuo sito a $29,99, hai appena tagliato l\'erba sotto i piedi ai tuoi partner rivenditori. I rivenditori ti lasceranno. La strategia ibrida è: (1) vendere SKU diversi all\'ingrosso vs. DTC, o (2) vendere al prezzo di listino consigliato sul tuo canale DTC e offrire ai rivenditori un margine con cui possano competere, o (3) usare il tuo business all\'ingrosso per finanziare la crescita DTC — costruire il marchio in diretta mantenendo le relazioni con i rivenditori attraverso finestre di esclusiva o collezioni specifiche per canale.',
  },
  {
    question: 'Qual è il più grosso costo nascosto nel modello DTC per occhiali da sole?',
    answer: 'I resi. Il tasso medio di reso per l\'eyewear online è del 15–25% — molto più alto della maggior parte delle categorie DTC perché la vestibilità è soggettiva. Ogni paio restituito ti costa spedizione in uscita, spedizione di ritorno, ispezione, riconfezionamento e potenziali danni. Su un paio da $59 con $4 di spedizione in uscita, un reso può costare $12–15 in logistica totale. Se il 20% degli ordini torna indietro, è effettivamente un costo di $2,40–3,00 per unità che non compare nel tuo conto economico iniziale. Aggiungi a questo le frodi da chargeback (clienti che sostengono di non aver mai ricevuto l\'articolo), e il tuo margine DTC reale può ridursi di 8–12 punti percentuali.',
  },
  {
    question: 'Quanto tempo ci vuole prima che un marchio di occhiali da sole diventi redditizio?',
    answer: 'B2B all\'ingrosso: 6–12 mesi per raggiungere la redditività se ottieni 2–3 conti rivenditori decenti (ordini da $3K–10K ciascuno) nel primo trimestre. DTC: 12–24 mesi è realistico, e 18+ mesi è comune. Il primo anno di DTC è quasi sempre in perdita — stai pagando per imparare quali creatività funzionano, quali audience convertono e qual è il tuo CAC sostenibile. I marchi che puntano alla redditività al sesto mese spesso tagliano il budget pubblicitario in modo troppo aggressivo e bloccano la crescita. I marchi che hanno successo trattano il primo anno come un investimento in dati e infrastruttura di acquisizione clienti.',
  },
];

const b2bPros = [
  'Ricavi prevedibili da conti all\'ingrosso ricorrenti',
  'Zero spesa pubblicitaria — i tuoi rivenditori gestiscono l\'acquisizione clienti',
  'Capitale iniziale richiesto più basso ($8K–15K)',
  'Nessun mal di testa da resi — i rivenditori se ne fanno carico, non tu',
  'Più facile da scalare — un singolo ordine di acquisto può valere 5.000+ unità',
];

const b2bCons = [
  'Termini di pagamento net-60 = 90 giorni tra l\'ordine e i contanti in cassa',
  'Margini del 25–40% lasciano poco margine d\'errore sul prezzo di fabbrica',
  'Basta che un compratore di una catena lasci il lavoro per farti perdere il 40% dei ricavi',
  'Chargeback e sconti di ribasso erodono i tuoi ricavi netti',
  'Valore del marchio limitato: il cliente conosce il rivenditore, non te',
];

const dtcPros = [
  '65–80% di margine lordo — ogni vendita sembra una vittoria',
  'Possiedi i dati dei clienti, la lista email e il valore del marchio',
  'Controllo creativo — la tua visione, il tuo marchio, i tuoi prezzi',
  'Potenziale illimitato — nessun compratore a fare da guardiano alla tua crescita',
  'Multipli di uscita più alti — i marchi DTC si vendono a 2–4× i ricavi',
];

const dtcCons = [
  'Un CAC di $18–35/cliente si mangia la maggior parte di quel margine prima delle spese generali',
  'Il tasso di reso del 15–25% nell\'eyewear riduce il margine netto di 8–12 punti',
  'Richiede competenza approfondita in Meta Ads, email marketing e CRO',
  '$25K–75K di capitale minimo di lancio; la maggior parte dei fondatori al primo tentativo sbaglia i calcoli pubblicitari',
  'Affamato di liquidità: reinvestirai i profitti in pubblicità per 12–18 mesi prima di vedere un reddito netto reale',
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'b2b-vs-b2c-occhiali-sole';

export default function B2BvsB2CSunglassesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/it/' },
          { name: 'Blog', href: '/it/blog/' },
          { name: 'Occhiali da Sole B2B vs B2C: Quale Modello di Business Fa Davvero Guadagnare' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Occhiali da Sole B2B vs B2C: Quale Modello di Business Fa Davvero Guadagnare nel 2026?",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un proprietario di fabbrica che fornisce sia grossisti B2B che marchi DTC mette a confronto i numeri reali: margini, flusso di cassa, costi di acquisizione clienti e quale modello sopravvive a una crisi.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/it/blog/${SLUG}` }
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Strategia Aziendale</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Occhiali da Sole B2B vs B2C: Quale Modello di Business Fa Davvero Guadagnare nel 2026?
          </h1>
          <p className="text-xl text-gray-600">
            Ho visto marchi provare entrambe le strade dal pavimento della fabbrica. Alcuni oggi fanno $2M all&apos;anno. Altri hanno bruciato sei cifre e sono scomparsi. Ecco i numeri che separano questi due destini.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Indice dei Contenuti</h2>
          <ul className="space-y-2">
            <li><a href="#the-real-numbers" className="text-primary-600 hover:underline">I Numeri Reali: Economia Unitaria B2B vs B2C</a></li>
            <li><a href="#b2b-deep" className="text-primary-600 hover:underline">B2B Ingrosso: Il Costruttore di Imperi a Fuoco Lento</a></li>
            <li><a href="#dtc-deep" className="text-primary-600 hover:underline">DTC: Margini Alti, Rischi Alti</a></li>
            <li><a href="#hybrid" className="text-primary-600 hover:underline">Il Modello Ibrido: Perché i Marchi Più Furbi Fanno Entrambi</a></li>
            <li><a href="#which-for-you" className="text-primary-600 hover:underline">Quale Modello Fa per Te?</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Domande Frequenti</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="B2B vs DTC a Colpo d'Occhio" />

          {/* ─── Section 1: The Real Numbers ─── */}
          <h2 id="the-real-numbers" className="text-3xl font-bold mt-16 mb-6">I Numeri Reali: Economia Unitaria B2B vs B2C</h2>
          <p>Lascia che ti parli di un paio di occhiali da sole reale. Non ipotetico. Una montatura sportiva TR90 con lenti polarizzate — uno dei nostri modelli all&apos;ingrosso più venduti. Prezzo FOB di fabbrica per 500 unità: <strong>$4,80</strong> al paio, incluso branding di base e custodia in microfibra.</p>

          <p>Se vendi quel paio <strong>B2B all&apos;ingrosso</strong> a un rivenditore a $8,00 per unità, il tuo margine lordo è del 40%. Il rivenditore lo rivende a $29,99 e trattiene il proprio margine. Tu guadagni $3,20 a paio, moltiplicato per quante unità ordina il rivenditore. Un ordine da catena di 2.000 unità = $6.400 di profitto lordo con praticamente zero costi di marketing oltre alla tua prima attività di outreach.</p>

          <p>Se vendi lo stesso paio <strong>DTC</strong> a $49,99 sul tuo sito web, il tuo margine lordo è del 90,4% sul costo delle merci. Sembra incredibile. Ma ecco cosa succede in realtà: l&apos;annuncio su Facebook/Instagram per acquisire quel cliente costa in media $22. Commissioni carta di credito: $1,45. Imballaggio premium per l&apos;unboxing DTC: $1,20. Spedizione in uscita: $4,50. Sei già a $29,15 di costi prima di aver pagato il tuo sito web, la tua piattaforma email, le tue foto prodotto o il tuo stesso stipendio. Quel margine del 90% diventa il 42% netto prima delle spese generali — ancora buono, ma non è roba da &quot;mi ritiro con questo&quot;, e solo se le tue inserzioni convertono costantemente.</p>

          <p>Tre anni fa, avevo un cliente di nome Marcus che ha lanciato un marchio DTC con uno dei nostri modelli in acetato a $69 al dettaglio. I primi tre mesi, il CAC era di $14 ed era al settimo cielo. Al sesto mese, i cambiamenti sulla privacy di iOS avevano degradato il suo targeting e il CAC era salito a $31. Stava perdendo $7 su ogni nuovo cliente. Ha fatto pivot verso l&apos;ingrosso — stesse montature, stesso branding — e in quattro mesi era presente in 12 negozi di ottica indipendenti in California, fatturando $35K/mese al 35% di margine con zero spesa pubblicitaria. Ha ancora un sito DTC, ma ora è una vetrina del marchio che indirizza ai suoi rivenditori, non il suo motore di ricavi principale.</p>

          {/* ─── Section 2: B2B Deep Dive ─── */}
          <h2 id="b2b-deep" className="text-3xl font-bold mt-16 mb-6">B2B Ingrosso: Il Costruttore di Imperi a Fuoco Lento</h2>

          <p>Il B2B all&apos;ingrosso non è sexy. Non vedrai marchi all&apos;ingrosso su TechCrunch. Non ci sono influencer &quot;fondatore all&apos;ingrosso&quot; su TikTok. Ma entra in un Sunglass Hut, in un negozio di ottica indipendente, in un negozio di souvenir in un resort — ogni singolo paio su quegli scaffali è passato attraverso una filiera all&apos;ingrosso. Qualcuno ha fatto il 25–40% di margine su quella vendita, e l&apos;ha fatto senza spendere un dollaro in inserzioni Instagram.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Come Funziona Davvero il B2B</h3>
          <p>Ti procuri gli occhiali da una fabbrica (o sei tu la fabbrica). Costruisci un catalogo — tipicamente 20–50 modelli in 3–5 varianti colore ciascuno. Identifichi i compratori retail: catene di ottica, boutique indipendenti, negozi di souvenir nei resort, compagnie di crociera, acquirenti di regali aziendali, distributori di articoli promozionali. Invii campioni, negozi i prezzi e spedisci contro ordini di acquisto. Ordine tipico: 100–500 unità per modello. Ciclo di riordino tipico: ogni 3–6 mesi per conto.</p>
          <p>La magia del B2B sono i <strong>conti che si accumulano</strong>. Ottieni cinque conti che fanno $5K ciascuno a trimestre, e sei a $100K di ricavi annuali con spese di marketing quasi nulle. Ottieni venti conti a quel livello, e sei a $400K. Il fattore limitante non è il budget pubblicitario — è quanti compratori riesci a mettere al telefono.</p>

          <ProsCons good={b2bPros} bad={b2bCons} title="B2B Ingrosso" />

          <h3 className="text-2xl font-bold mt-10 mb-4">La Trappola del Flusso di Cassa nel B2B</h3>
          <p>Ecco cosa i numeri di margine non ti dicono: il B2B funziona a credito. Paghi la tua fabbrica il 30% di acconto per avviare la produzione, il 70% prima della spedizione. Nel frattempo, il tuo cliente retail ti paga a 30 o 60 giorni netti. Traduzione: puoi pagare la fabbrica $12.000 nella prima settimana e non ricevere un dollaro dal tuo cliente fino alla dodicesima settimana. Se hai tre ordini in corso contemporaneamente — che è l&apos;aspetto della crescita — potresti avere $36.000+ di capitale tuo immobilizzato in qualsiasi momento.</p>
          <p>Ecco perché dico ai proprietari di marchi all&apos;ingrosso al primo tentativo: abbiate sei mesi di capitale operativo prima di prendere il vostro primo ordine. Non tre mesi. Sei. Perché il compratore che ha promesso un ordine di acquisto a marzo potrebbe non firmare fino a maggio, e il suo ufficio contabilità potrebbe impiegare altri 45 giorni per emettere il tuo primo assegno. Stai gestendo un&apos;impresa, non un&apos;organizzazione benefica, e i buchi di flusso di cassa uccidono le aziende più velocemente di quanto faranno mai i prodotti scadenti.</p>

          {/* ─── Section 3: DTC Deep Dive ─── */}
          <h2 id="dtc-deep" className="text-3xl font-bold mt-16 mb-6">DTC: Margini Alti, Rischi Alti</h2>

          <p>Ogni proprietario di fabbrica in Cina ha visto un marchio DTC esplodere da un ordine test di $3.000 a un riordino mensile di $50.000 in sei mesi. Succede. È anche l&apos;eccezione, non la regola. Per ogni Warby Parker, ci sono 500 marchi di cui non hai mai sentito parlare che hanno bruciato il loro capitale di lancio e hanno chiuso in silenzio.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">I Calcoli DTC Che Nessuno Pubblica su LinkedIn</h3>
          <p>Un paio di occhiali da $59. Costo delle merci: $5,00 franco destino. Margine lordo: 91,5%. Sembra fantastico su un pitch deck.</p>
          <p>Costi reali per unità venduta DTC:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Occhiali (FOB + spedizione): <strong>$5,00</strong></li>
            <li>Imballaggio premium (scatola personalizzata, custodia, panno per la pulizia, biglietto di ringraziamento): <strong>$2,20</strong></li>
            <li>Acquisizione cliente (Meta/Google/TikTok combinati): <strong>$22,00</strong></li>
            <li>Commissioni carta di credito (2,9% + $0,30): <strong>$2,01</strong></li>
            <li>Spedizione in uscita (media USPS/UPS): <strong>$4,80</strong></li>
            <li>Fondo resi (20% di tasso di reso × $12 di costo per reso): <strong>$2,40</strong></li>
          </ul>
          <p>Costo totale per unità venduta: <strong>$38,41</strong>. Contribuzione netta per unità: $20,59. È un margine netto del 35% — ancora sano, ma a anni luce dal 91,5% di margine lordo che tutti citano. E quei $20,59 devono coprire il tuo abbonamento Shopify, la tua piattaforma email Klaviyo, la fotografia del prodotto, l&apos;invio agli influencer, lo sviluppo del sito web, il tuo stipendio e il profitto. Improvvisamente, vendere 1.000 paia al mese a $20,59 di contribuzione = $20.590 per coprire tutte le spese generali. Se i tuoi costi fissi mensili sono $12.000 (stipendio, software, collaboratori, magazzino), il tuo guadagno netto è $8.590. Non male. Ma hai venduto $59.000 di prodotto per arrivarci.</p>

          <ProsCons good={dtcPros} bad={dtcCons} title="Occhiali da Sole DTC" />

          <h3 className="text-2xl font-bold mt-10 mb-4">La Tassa delle Piattaforme Pubblicitarie</h3>
          <p>I marchi DTC non competono sul prodotto — competono sull&apos;attenzione. E l&apos;attenzione nel 2026 è costosa. I CPM Meta (costo per mille impression) nella categoria eyewear sono saliti da $12–18 nel 2020 a $28–45 nel 2026. Lo stesso dollaro pubblicitario compra la metà delle impression che comprava cinque anni fa. TikTok offre CPM più bassi ma tassi di conversione notoriamente volubili — ottimo per la notorietà, pessimo per un ROAS prevedibile.</p>
          <p>I marchi che vincono nel DTC nel 2026 non sono quelli con le migliori inserzioni. Sono quelli con la migliore <strong>retention</strong>. Se il tuo cliente medio compra 1,0 volte e sparisce, quasi sicuramente perderai soldi sul primo acquisto senza mai recuperarli. Se il tuo cliente medio compra 2,5 volte in due anni — attraverso acquisti ripetuti, campagne email e lancio di nuove collezioni — la matematica si ribalta. I migliori marchi eyewear DTC che fornisco hanno un tasso di riacquisto superiore al 30% entro 12 mesi. Quelli che falliscono restano bloccati sotto il 10%.</p>

          {/* ─── Section 4: Hybrid Model ─── */}
          <h2 id="hybrid" className="text-3xl font-bold mt-16 mb-6">Il Modello Ibrido: Perché i Marchi Più Furbi Fanno Entrambi</h2>

          <p>C&apos;è una terza via che non riceve abbastanza attenzione: prima ingrosso, poi DTC. Ecco perché funziona.</p>
          <p>Lanci come marchio all&apos;ingrosso. Piazzi i tuoi occhiali in 10–15 rivenditori indipendenti che gestiscono il lavoro a contatto col cliente. Costruisci flusso di cassa — ordini di acquisto prevedibili con il 35% di margine e zero spesa pubblicitaria. Impari quali modelli vendono, quali colori funzionano e cosa vogliono davvero i clienti — dati che arrivano gratis dai tuoi partner retail invece di costarti $22 per punto dati in test pubblicitari.</p>
          <p>Dopo 12–18 mesi, hai una linea di prodotti validata, un nome di marchio riconoscibile (perché il tuo logo è su 15 scaffali di negozi) e capitale operativo dai profitti all&apos;ingrosso. Ora lanci il DTC — non come una scommessa disperata, ma come un&apos;espansione strategica. Il tuo business all&apos;ingrosso finanzia i tuoi test pubblicitari. La tua presenza retail dà credibilità al tuo sito web. I tuoi clienti esistenti possono comprarti nella loro boutique di quartiere E online. E poiché non stai bruciando venture capital per sopravvivere, puoi permetterti di essere paziente con la tua crescita DTC.</p>
          <p>Ho visto questo identico playbook funzionare per almeno sei marchi che fornisco. Hanno iniziato con un ordine all&apos;ingrosso da $10K, sono cresciuti fino a $200K–400K di ricavi all&apos;ingrosso in 18–24 mesi, poi hanno lanciato il DTC da una posizione di forza. Nessuno di loro è famoso. Tutti sono redditizi.</p>

          {/* ─── Section 5: Which Model Fits You ─── */}
          <h2 id="which-for-you" className="text-3xl font-bold mt-16 mb-6">Quale Modello Fa per Te?</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">Scegli Prima l&apos;Ingrosso Se:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Hai $8.000–15.000 e una buona rete di contatti nel retail, nell&apos;ospitalità o nei regali aziendali</li>
            <li>Preferisci passare il tempo al telefono con 50 compratori piuttosto che ottimizzare inserzioni Facebook</li>
            <li>Vuoi ricavi prevedibili e cumulativi senza il rischio piattaforma legato ai cambiamenti degli algoritmi Meta/Google</li>
            <li>Accetti una crescita più lenta e margini unitari più bassi in cambio di un rischio drasticamente inferiore</li>
            <li>Prevedi di lanciare il DTC in futuro e vuoi una pista finanziata per testare le inserzioni senza bruciare i tuoi risparmi personali</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Scegli Prima il DTC Se:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Hai $25.000–75.000 di capitale di lancio e sei a tuo agio a perdere soldi per 12–18 mesi</li>
            <li>Hai competenza approfondita (o un co-fondatore con competenza approfondita) in social ads, email marketing e ottimizzazione del tasso di conversione</li>
            <li>Il concept del tuo marchio è visivamente abbastanza distintivo da fermare un pollice durante lo scroll — un generico &quot;occhiali premium per persone di stile&quot; non basterà</li>
            <li>Hai un motore di contenuti: storia del fondatore, contenuti dietro le quinte della fabbrica, UGC lifestyle — i marchi DTC vivono e muoiono per la velocità creativa</li>
            <li>Il tuo obiettivo è un&apos;uscita in scala venture (multiplo di 50×+ i ricavi) piuttosto che un business lifestyle — il DTC può scalare più velocemente dell&apos;ingrosso quando funziona</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Scegli l&apos;Ibrido Se:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Hai esperienza nell&apos;ingrosso o accesso a compratori retail, ma vuoi anche costruire valore del marchio a lungo termine</li>
            <li>Riesci a gestire il conflitto di canale — SKU diversi per canale, prezzi MAP, finestre di esclusiva per i rivenditori</li>
            <li>Sei paziente: 18–24 mesi di costruzione dell&apos;ingrosso, poi lancio DTC da una posizione di forza nel flusso di cassa</li>
          </ul>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Domande Frequenti</h2>
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
            <h2 className="text-3xl font-bold mb-4">Pronto a Produrre la Tua Prima Collezione?</h2>
            <p className="text-xl mb-6 opacity-90">Che tu stia lanciando all&apos;ingrosso, DTC o ibrido — ti aiuteremo a costruire la linea di prodotti giusta per il tuo modello di business. MOQ a partire da 100 pezzi per modello.</p>
            <Link
              href="/it/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Richiedi un Preventivo Gratuito
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Pavimento della Fabbrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/wholesale-sunglasses-pricing-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guida ai Prezzi Occhiali all&apos;Ingrosso 2026</h3>
                <p className="text-gray-600 text-sm">Prezzi reali diretto fabbrica per materiale, stile e quantità.</p>
              </Link>
              <Link href="/blog/start-sunglasses-brand" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Come Avviare un Marchio di Occhiali</h3>
                <p className="text-gray-600 text-sm">La roadmap completa dal concept alla prima vendita.</p>
              </Link>
              <Link href="/blog/sunglasses-pricing-strategy" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guida alla Strategia di Prezzo per Occhiali</h3>
                <p className="text-gray-600 text-sm">Come fissare i prezzi della tua linea per ingrosso, retail e DTC.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
