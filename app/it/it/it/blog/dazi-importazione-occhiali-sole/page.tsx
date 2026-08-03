import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Dazi di Importazione Occhiali da Sole 2026: Aliquote per USA, UE, Regno Unito, Australia, Canada',
  description: 'Guida completa ai dazi di importazione per occhiali da sole. Codici SA, aliquote daziarie per paese, accordi di libero scambio e come calcolare il costo di importazione. Guida pratica del proprietario di fabbrica per risparmiare in dogana.',
  keywords: ['dazi importazione occhiali sole', 'aliquote daziarie occhiali', 'codice SA occhiali sole', 'calcolatore dazi importazione', 'sdoganamento occhiali', 'tassa importazione eyewear', 'dazio USA occhiali', 'dazio UE occhiali'],
  alternates: {
    canonical: '/it/blog/dazi-importazione-occhiali-sole',
  },
};

const takeaways = [
  'Codice SA 9004.10: Gli occhiali da sole rientrano in questo codice armonizzato globale — dazio USA 2,0%, UE 2,9%, Regno Unito 2,0%, Australia 5,0% (ma spesso 0% tramite ALS), Canada 0% secondo le regole CPTPP',
  'Il costo maggiore non è il dazio — sono le spese di spedizione e intermediazione doganale. Una spedizione di occhiali da $5.000 può pagare $100 di dazi ma $400 di onorari dello spedizioniere. Scegli attentamente il tuo partner logistico.',
  'Il Certificato di Origine è il tuo strumento più potente per ridurre i dazi. Se i tuoi occhiali sono fabbricati in Cina (o Vietnam/India), puoi richiedere aliquote preferenziali nell\'ambito di molteplici ALS — ma solo con la documentazione adeguata',
  'I dazi della Sezione 301 sugli occhiali cinesi (SA 9004.10.0000) hanno aggiunto il 7,5% sull\'aliquota base del 2,0% per le importazioni USA nel 2026 — l\'aliquota effettiva totale è del 9,5% a meno che non si qualifichi per un\'esenzione',
  'Formula del costo totale: (Prezzo FOB × Quantità + Nolo + Assicurazione) × (1 + Aliquota Daziaria) + Intermediazione + Spese Portuali + Consegna Finale. La maggior parte dei nuovi importatori sottostima del 15-20% al primo ordine',
  'Le soglie di valore contano: il de minimis USA è $800 (le spedizioni sotto pagano dazio zero), il sistema IOSS dell\'UE consente l\'IVA pre-riscossa a 150 € o meno, il Regno Unito ha una soglia di £135. Struttura i piccoli ordini campione per rimanere sotto questi limiti',
];

const quickStats = [
  { label: 'Dazio Base USA (SA 9004.10)', value: '2,0%' },
  { label: 'Sovrattassa Sezione 301 USA', value: '+7,5%' },
  { label: 'Aliquota Daziaria UE', value: '2,9%' },
  { label: 'Aliquota Daziaria Regno Unito', value: '2,0%' },
  { label: 'Aliquota Daziaria Australia', value: '5,0% (0% con CoO)' },
  { label: 'Aliquota Daziaria Canada', value: '0% (CPTPP)' },
];

const faqs = [
  {
    question: 'Qual è il codice SA per gli occhiali da sole?',
    answer: 'Gli occhiali da sole sono classificati sotto il Codice SA 9004.10 — "Occhiali, occhiali protettivi e articoli simili, correttivi, protettivi o altri, occhiali da sole." Questo è il codice armonizzato utilizzato a livello globale. La sottovoce specifica USA è 9004.10.0000. Per gli occhiali da sole da vista, utilizzare 9004.90.0000. Per occhiali di sicurezza/industriali, utilizzare 9004.90.0090. Conferma sempre con il tuo spedizioniere doganale — le sanzioni per errata classificazione partono da 2× il dazio dovuto.',
  },
  {
    question: 'Quanto dazio di importazione pago sugli occhiali da sole dalla Cina agli USA?',
    answer: 'Il dazio base USA per SA 9004.10 è del 2,0%. Tuttavia, i dazi della Sezione 301 sulle merci di origine cinese aggiungono il 7,5% (nel 2026), portando l\'aliquota effettiva al 9,5%. Su una spedizione FOB di $10.000, sono $950 di dazi prima di aggiungere nolo, assicurazione e spese di intermediazione. Se produci in Vietnam, India o Bangladesh, eviti completamente la sovrattassa della Sezione 301 — si applica solo il 2,0% base.',
  },
  {
    question: 'Qual è il dazio di importazione dell\'UE sugli occhiali da sole dalla Cina?',
    answer: 'L\'UE applica un\'aliquota daziaria del 2,9% sugli occhiali da sole SA 9004.10 dalla Cina. Nessun dazio aggiuntivo oltre l\'aliquota standard. Per una spedizione di 8.000 €, sono circa 232 € di dazi. L\'UE non ha un equivalente della Sezione 301. Tuttavia, l\'IVA si applica all\'aliquota del paese di destinazione (19-27% a seconda dello Stato membro). Utilizza il sistema IOSS (Sportello Unico di Importazione) per le spedizioni inferiori a 150 € per pre-riscuotere l\'IVA e semplificare lo sdoganamento.',
  },
  {
    question: 'Ho bisogno di un Certificato di Origine per ridurre i dazi di importazione?',
    answer: 'Sì — il Certificato di Origine (CoO) è il documento più importante per la riduzione dei dazi. Per le importazioni USA dalla Cina, un CoO non riduce attualmente la sovrattassa della Sezione 301, ma è essenziale per le richieste ALS con altre origini. Per le importazioni in Australia, Canada o Regno Unito nell\'ambito del CPTPP o ALS bilaterali, un CoO valido può ridurre il dazio allo 0%. La tua fabbrica dovrebbe fornirlo come parte dei documenti di spedizione — se non possono o non vogliono, trova un altro fornitore. Il CoO deve essere timbrato dal CCPIT (Consiglio Cinese per la Promozione del Commercio Internazionale) per essere valido, il che costa circa $30-50 e richiede 2-3 giorni lavorativi.',
  },
  {
    question: 'Come calcolo il costo totale di importazione per un ordine di occhiali da sole?',
    answer: 'Costo totale = Prezzo FOB × Quantità + Nolo Marittimo (o Aereo) + Assicurazione (tipicamente 0,3-0,5% del valore CIF) + Dazio Doganale (% del CIF) + Commissione di Intermediazione ($75-200 per voce) + Spese Portuali/Destinazione + Consegna Finale. Esempio: 1.000 paia a $5/paio FOB = $5.000. Nolo marittimo = $600. Assicurazione = $28. CIF = $5.628. Dazio USA al 9,5% = $535. Intermediazione = $125. Spese portuali = $85. Consegna = $250. Costo totale = $6.623. Costo unitario = $6,62. Aggiungi sempre un margine del 5-10% per fluttuazioni valutarie e spese impreviste.',
  },
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'dazi-importazione-occhiali-sole';

export default function DaziImportazioneOcchialiSolePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/it/' },
          { name: 'Blog', href: '/it/blog/' },
          { name: 'Dazi di Importazione Occhiali da Sole 2026' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Dazi di Importazione Occhiali da Sole 2026: Aliquote per USA, UE, Regno Unito, Australia, Canada",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guida completa ai dazi di importazione per occhiali da sole. Codici SA, aliquote daziarie per paese, accordi di libero scambio e come calcolare il costo di importazione. Guida pratica del proprietario di fabbrica per risparmiare in dogana.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import & Logistica</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>13 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dazi di Importazione Occhiali da Sole 2026: Aliquote Paese per Paese
          </h1>
          <p className="text-xl text-gray-600">
            Dopo 20 anni di spedizioni di occhiali dalla Cina verso oltre 50 paesi, ecco la verità sui dazi — i numeri, le scorciatoie e la documentazione che ti fa davvero risparmiare.
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
            <li><a href="#hs-codes" className="text-primary-600 hover:underline">Codici SA per Occhiali da Sole: Azzeccare la Classificazione</a></li>
            <li><a href="#us-duties" className="text-primary-600 hover:underline">Dazi di Importazione USA: Sezione 301 e la Realtà del 9,5%</a></li>
            <li><a href="#eu-duties" className="text-primary-600 hover:underline">Dazi di Importazione UE: Dazi Bassi, IVA Alta</a></li>
            <li><a href="#uk-au-ca" className="text-primary-600 hover:underline">Regno Unito, Australia e Canada: Opportunità ALS</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">Come Calcolare il Costo Totale (Con Numeri Reali)</a></li>
            <li><a href="#duty-reduction" className="text-primary-600 hover:underline">7 Modi per Ridurre i Tuoi Dazi di Importazione</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Domande Frequenti</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="Aliquote dei Dazi di Importazione per Occhiali da Sole a Colpo d&apos;Occhio" />

          {/* ─── Section 1: HS Codes ─── */}
          <h2 id="hs-codes" className="text-3xl font-bold mt-16 mb-6">Codici SA per Occhiali da Sole: Azzeccare la Classificazione</h2>
          <p>
            Prima di parlare di aliquote daziarie, chiariamo una cosa: se il tuo spedizioniere doganale presenta un codice SA sbagliato, non stai risparmiando — stai creando una passività. Ho visto importatori provare a classificare gli occhiali da sole come &quot;accessori in plastica&quot; (SA 3926) per ottenere un&apos;aliquota più bassa, e la CBP li ha beccati tutti.
          </p>
          <p>
            Gli occhiali da sole rientrano nel <strong>SA 9004.10</strong> — &quot;Occhiali, occhiali protettivi e articoli simili, correttivi, protettivi o altri, occhiali da sole.&quot; Questo codice è armonizzato globalmente, il che significa che ogni paese usa le stesse prime sei cifre. Le principali sotto-classificazioni:
          </p>
          <ul>
            <li><strong>9004.10.0000 (USA):</strong> Occhiali da sole — non da vista, inclusi occhiali moda e sportivi</li>
            <li><strong>9004.90.0000 (USA):</strong> Altri occhiali — occhiali da sole da vista, occhiali di sicurezza, occhiali da lettura</li>
            <li><strong>9004.10.1000 (UE):</strong> Occhiali da sole con lenti otticamente lavorate</li>
            <li><strong>9004.10.9100 (UE):</strong> Occhiali da sole con lenti semplicemente sagomate (la maggior parte delle esportazioni cinesi rientra qui)</li>
          </ul>
          <p>
            <strong>Consiglio professionale dalla fabbrica:</strong> Se i tuoi occhiali da sole hanno protezione UV400 (che i nostri hanno di default), rientrano comunque sotto 9004.10. La distinzione &quot;correttivo vs. protettivo&quot; conta solo se importi occhiali da vista. La maggior parte degli ordini all&apos;ingrosso da fornitori come EyeView è correttamente classificata come 9004.10, indipendentemente dalle caratteristiche delle lenti.
          </p>

          {/* ─── Section 2: US Duties ─── */}
          <h2 id="us-duties" className="text-3xl font-bold mt-16 mb-6">Dazi di Importazione USA: Sezione 301 e la Realtà del 9,5%</h2>
          <p>
            Gli Stati Uniti sono il più grande mercato per le importazioni di occhiali da sole — e il più costoso in termini di dazi se ti rifornisci dalla Cina. Ecco la ripartizione:
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Aliquota NPF Base: 2,0%</h3>
          <p>
            In condizioni di normali relazioni commerciali (NPF), SA 9004.10.0000 comporta un dazio ad valorem del 2,0%. Sono $20 per ogni $1.000 di valore dichiarato. Niente male.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Sovrattassa Sezione 301: +7,5%</h3>
          <p>
            È qui che diventa costoso. I dazi della Sezione 301 — imposti sulle merci di origine cinese dal 2018 — applicano un ulteriore 7,5% su SA 9004.10.0000 nel 2026. L&apos;aliquota originale del 25% è stata ridotta al 7,5% nel 2020 e vi è rimasta. <strong>Dazio effettivo totale USA sugli occhiali cinesi: 9,5%.</strong>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <p className="font-bold text-amber-800 mb-2">⚠️ La Sezione 301 si Applica al Paese di Origine, Non al Paese di Spedizione</p>
            <p className="text-amber-700 text-sm">Se i tuoi occhiali sono fabbricati in Cina ma spediti da un magazzino di Hong Kong, la Sezione 301 si applica comunque. La dogana USA guarda dove sono state fabbricate le merci, non da dove sono state caricate sulla nave. L&apos;unico modo per evitare la Sezione 301 è produrre interamente al di fuori della Cina.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">De Minimis: La Scorciatoia degli $800</h3>
          <p>
            Ai sensi della Sezione 321, le spedizioni del valore di $800 o meno entrano negli USA in esenzione da dazi — comprese le merci della Sezione 301. È così che molti piccoli marchi iniziano: ordina 50-100 paia come campioni, dividi in più spedizioni sotto $800 ciascuna e paga dazio zero. È perfettamente legale purché ogni spedizione sia effettivamente sotto la soglia e tu non stia dividendo artificialmente gli ordini per eludere i dazi (questo si chiama &quot;abuso strutturato di de minimis&quot; e la CBP sta reprimendo).
          </p>

          {/* ─── Section 3: EU Duties ─── */}
          <h2 id="eu-duties" className="text-3xl font-bold mt-16 mb-6">Dazi di Importazione UE: Dazi Bassi, IVA Alta</h2>
          <p>
            L&apos;UE è rinfrescante nella sua semplicità rispetto agli USA — nessuna Sezione 301, nessuna sovrattassa da guerra commerciale. Ma l&apos;IVA è dove si nasconde il vero costo.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Dazio Standard: 2,9%</h3>
          <p>
            Nell&apos;ambito della Tariffa Doganale Comune dell&apos;UE (TARIC), SA 9004.10.9100 (occhiali da sole con lenti semplicemente sagomate, che copre la maggior parte delle importazioni all&apos;ingrosso) ha un&apos;aliquota daziaria del 2,9%. È meno della metà dell&apos;aliquota effettiva USA. Per un ordine del valore CIF di 10.000 €, paghi 290 € di dazi.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IVA: Il Costo Reale</h3>
          <p>
            Ecco cosa coglie di sorpresa i nuovi importatori: l&apos;UE aggiunge l&apos;IVA sul valore sdoganato. Se le tue merci arrivano in Germania (19% di IVA), il calcolo è:
          </p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 font-mono text-sm">
            <p>Valore CIF: 10.000 €</p>
            <p>Dazio (2,9%): +290 €</p>
            <p>Valore Sdoganato: 10.290 €</p>
            <p>IVA (19%): +1.955 €</p>
            <p className="font-bold">Totale in Dogana: 12.245 €</p>
          </div>
          <p>
            <strong>Importante:</strong> L&apos;IVA è generalmente recuperabile se sei un&apos;azienda registrata ai fini IVA. La paghi all&apos;importazione e la recuperi nella dichiarazione IVA successiva. Ma hai bisogno di liquidità per coprire il gap di 90-120 giorni tra pagamento e rimborso.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IOSS: IVA Pre-Riscossa per Piccoli Ordini</h3>
          <p>
            Lo Sportello Unico di Importazione (IOSS) ti consente di pre-riscuotere l&apos;IVA al punto vendita per spedizioni inferiori a 150 €. L&apos;acquirente paga l&apos;IVA al checkout, tu la versi mensilmente a un&apos;unica autorità fiscale dell&apos;UE e le merci passano la dogana senza che il destinatario paghi nulla alla consegna. EyeView supporta la fatturazione compatibile IOSS — comunicacelo al momento dell&apos;ordine e formatteremo la tua fattura commerciale di conseguenza.
          </p>

          {/* ─── Section 4: UK, AU, CA ─── */}
          <h2 id="uk-au-ca" className="text-3xl font-bold mt-16 mb-6">Regno Unito, Australia e Canada: Opportunità ALS</h2>
          <p>
            Questi tre mercati offrono le migliori opportunità di riduzione dei dazi se conosci gli accordi commerciali.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Regno Unito: 2,0% Base, SPG Disponibile</h3>
          <p>
            Dopo la Brexit, il Regno Unito applica un dazio del 2,0% sugli occhiali da sole SA 9004.10. Nell&apos;ambito del Sistema di Preferenze Generalizzate del Regno Unito (SPG), le merci dalla Cina si qualificano per aliquote preferenziali — ma il margine di preferenza sul 9004.10 è zero (l&apos;aliquota NPF è già il minimo SPG). Ciò che cambia il calcolo: il Sistema Commerciale per i Paesi in Via di Sviluppo (DCTS) del Regno Unito offre dazio 0% per occhiali fabbricati in 65 paesi idonei, tra cui India e Pakistan. Se riesci a procurarti montature in acetato da una fabbrica indiana, il dazio britannico scende a zero.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Australia: 5,0% Standard, 0% con ALS</h3>
          <p>
            La tariffa standard australiana su SA 9004.10 è del 5,0% — la più alta tra i principali mercati. Ma l&apos;Accordo di Libero Scambio Cina-Australia (ChAFTA) ha eliminato i dazi sugli occhiali da sole nel 2019. <strong>Con un Certificato di Origine valido, il dazio australiano è 0%.</strong> Ogni cliente australiano a cui ho spedito risparmia il 5% completo con una documentazione CoO adeguata. Le pratiche costano $35 al CCPIT e richiedono 3 giorni. Per un ordine di $20.000, sono $1.000 risparmiati.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Canada: 0% con CPTPP</h3>
          <p>
            Il Canada ha eliminato i dazi sugli occhiali da sole di origine cinese nell&apos;ambito dell&apos;Accordo Globale e Progressivo per il Partenariato Trans-Pacifico (CPTPP). <strong>Gli importatori canadesi pagano dazio 0% su SA 9004.10 dalla Cina</strong> — una delle poche categorie in cui la relazione commerciale Cina-Canada favorisce l&apos;importatore. Assicurati solo che la tua fattura commerciale indichi chiaramente il paese di origine come Cina e il codice SA come 9004.10.
          </p>

          {/* ─── Section 5: Landed Cost ─── */}
          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">Come Calcolare il Costo Totale (Con Numeri Reali)</h2>
          <p>
            La maggior parte dei nuovi importatori guarda il prezzo FOB unitario e pensa che quello sia il loro costo. Non lo è. Ecco un calcolo reale del costo totale per un ordine tipico:
          </p>

          <div className="bg-gray-100 rounded-lg p-6 my-6 font-mono text-sm space-y-1">
            <p className="font-bold text-base mb-3">Esempio: 1.000 Paia di Occhiali in Acetato → USA</p>
            <p>Prezzo FOB (1.000 × $5,00): <span className="float-right">$5.000,00</span></p>
            <p>Nolo Marittimo (LCL, Shanghai→LA): <span className="float-right">+$600,00</span></p>
            <p>Assicurazione Marittima (0,5% del CIF): <span className="float-right">+$28,00</span></p>
            <p className="border-t border-gray-300 pt-1">Valore CIF (Base Doganale): <span className="float-right">$5.628,00</span></p>
            <p>Dazio USA (9,5% del CIF): <span className="float-right">+$534,66</span></p>
            <p>Commissione Spedizioniere Doganale: <span className="float-right">+$125,00</span></p>
            <p>MPF (Tassa Elaborazione Merci): <span className="float-right">+$29,66</span></p>
            <p>HMF (Tassa Manutenzione Portuale, 0,125%): <span className="float-right">+$7,04</span></p>
            <p>Spese Portuali/CFS: <span className="float-right">+$85,00</span></p>
            <p>Trasporto Ultimo Miglio (Porto→Magazzino): <span className="float-right">+$250,00</span></p>
            <p className="border-t border-gray-300 pt-1 font-bold">Costo Totale: <span className="float-right">$6.659,36</span></p>
            <p className="font-bold text-primary-600">Costo Totale Per Paio: <span className="float-right">$6,66</span></p>
          </div>

          <p>
            Quel paio da $5,00 FOB in realtà costa $6,66 quando arriva al tuo magazzino — un ricarico del 33% sul prezzo di fabbrica. E questo è lo scenario migliore con il nolo marittimo. Il nolo aereo aggiungerebbe $800-1.200, portando il costo totale sopra $7,50/paio.
          </p>

          {/* ─── Section 6: Duty Reduction ─── */}
          <h2 id="duty-reduction" className="text-3xl font-bold mt-16 mb-6">7 Modi per Ridurre i Tuoi Dazi di Importazione</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">1. Ottieni il Certificato di Origine — Ogni Volta</h3>
          <p>
            Questo non è negoziabile per Australia, Canada e qualsiasi mercato in cui si applichino ALS. Chiedi alla tua fabbrica di includere un CoO timbrato CCPIT con ogni spedizione di valore superiore a $500. Costo: $30-50. Risparmio potenziale: 5% del valore CIF. ROI: 100× o più.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Usa De Minimis per Campioni e Piccoli Ordini</h3>
          <p>
            Mantieni gli ordini campione iniziali sotto $800 (USA), 150 € (UE) o £135 (Regno Unito) per entrare in esenzione daziaria. Questo è il miglior trucco per testare nuovi modelli prima di impegnarti sui volumi.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. Considera la Produzione Suddivisa</h3>
          <p>
            Se spedisci negli USA e la sovrattassa del 7,5% della Sezione 301 sta uccidendo i tuoi margini, considera di produrre in Vietnam o India invece che in Cina. Il Vietnam ha solo aliquote NPF (2,0%) senza Sezione 301. Il costo unitario di fabbrica potrebbe essere $0,30-0,50 più alto, ma il risparmio sui dazi spesso supera il premio di produzione su ordini superiori a $10.000.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Dichiara Valori Precisi — Ma Non Gonfiati</h3>
          <p>
            Sottodichiarare il valore doganale è illegale. Ma sovradichiarare è solo buttare via soldi. Dichiara il valore effettivo della transazione (quanto hai pagato la fabbrica). Non gonfiarlo &quot;a fini assicurativi&quot; — sottoscrivi un&apos;assicurazione merci separata. Una sovradichiarazione di $1.000 su una spedizione diretta negli USA costa $95 in dazi inutili.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. Spedisci FCL Invece di LCL Quando Possibile</h3>
          <p>
            Se ordini più di 3.000 paia, un container completo (FCL) è più economico per unità rispetto al carico consolidato (LCL) ed evita le spese CFS (Stazione di Carico Container) a destinazione. Il punto di pareggio è tipicamente intorno a 5-8 metri cubi di occhiali — circa 2.000-3.000 paia con imballaggio.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Usa uno Spedizioniere Doganale Autorizzato, Non Quello Predefinito del Tuo Corriere</h3>
          <p>
            I corrieri spesso raggruppano lo sdoganamento a tariffe gonfiate. Uno spedizioniere doganale autorizzato indipendente addebita $75-150 per dichiarazione contro $200-350 dei corrieri che subappaltano il lavoro. Per importatori frequenti (più di 12 spedizioni/anno), una cauzione doganale continua ($500/anno) è più economica delle cauzioni per singola spedizione ($50-75 ciascuna).
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Programma le Tue Spedizioni Fuori dall&apos;Alta Stagione</h3>
          <p>
            Le tariffe del nolo marittimo aumentano del 40-80% durante l&apos;alta stagione (agosto-ottobre per le scorte natalizie, gennaio-febbraio prima del Capodanno Cinese). Poiché il nolo fa parte del tuo valore CIF — e i dazi sono calcolati sul CIF — un nolo più alto significa dazi più alti. Spedisci a marzo-maggio o novembre per ottenere tariffe di nolo più basse e, di conseguenza, calcoli daziari più bassi.
          </p>

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
            <h2 className="text-3xl font-bold mb-4">Documenti di Spedizione? Ci Pensiamo Noi.</h2>
            <p className="text-xl mb-6 opacity-90">Ogni ordine EyeView include un Certificato di Origine timbrato CCPIT, fattura commerciale con codici SA corretti e packing list formattata per i requisiti doganali del tuo paese. Comunicaci la tua destinazione e ottimizzeremo la documentazione per minimizzare i dazi.</p>
            <Link
              href="/it/contatto"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Richiedi un Preventivo Gratuito
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro Dalla Fabbrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/it/blog/guida-importazione-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Importare Occhiali da Sole dalla Cina</h3>
                <p className="text-gray-600 text-sm">Guida all&apos;importazione passo dopo passo: dogana, spedizione, controllo qualità.</p>
              </Link>
              <Link href="/it/blog/guida-moq-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guida alle Quantità Minime d&apos;Ordine</h3>
                <p className="text-gray-600 text-sm">Quanti paia ordinare per primi? Strategie intelligenti di crescita.</p>
              </Link>
              <Link href="/it/contatto" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contattaci</h3>
                <p className="text-gray-600 text-sm">Ricevi un preventivo per il tuo ordine personalizzato di occhiali all&apos;ingrosso.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
