import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiere degli Occhiali da Sole 2026: Guida per Trovare i Fornitori Giusti',
  description: 'Guida di un proprietario di fabbrica cinese alle fiere degli occhiali da sole nel 2026 — MIDO, SILMO, Vision Expo, IOFT, Fiera Ottica di HK. Costi degli stand, strategie di valutazione dei fornitori e follow-up che funzionano davvero.',
  keywords: 'fiere occhiali da sole 2026, esposizione eyewear 2026, MIDO occhiali, SILMO eyewear, approvvigionamento fiera ottica, trovare fornitori occhiali alle fiere',
  alternates: {
    canonical: '/it/blog/guida-fiere-occhiali-sole',
    languages: {
      'en': '/blog/sunglasses-trade-shows-guide',
      'it': '/it/blog/guida-fiere-occhiali-sole',
    },
  },
}

const faqs = [
  {
    question: 'Qual è la fiera migliore per trovare produttori di occhiali da sole?',
    answer: 'MIDO a Milano (febbraio) e la Fiera Ottica di Hong Kong (novembre) sono le prime due per accesso ai produttori. MIDO riunisce fabbriche europee e globali — Italia, Francia, Giappone, Cina — tutte nello stesso luogo. Hong Kong è più concentrata: circa il 70% degli espositori ha stabilimenti produttivi nella Cina continentale, quindi puoi incontrare i decisori della filiera direttamente, senza il sovrapprezzo italiano.',
  },
  {
    question: 'Quanto costa esporre a una fiera di occhiali da sole?',
    answer: 'Uno stand standard da 9m² a MIDO o SILMO costa $4.000–$6.000. Stand a isola più grandi (36m²+) possono arrivare a $25.000–$80.000 includendo allestimento personalizzato, illuminazione e noleggio arredi. Vision Expo negli USA è simile — $4.500+ per uno stand piccolo, $15.000–$50.000 per uno spazio brandizzato. La maggior parte delle fabbriche cinesi a queste fiere ha stand da 18–36m², il che ti dice che fanno sul serio con l\'export.',
  },
  {
    question: 'Devo registrarmi in anticipo per le fiere dell\'eyewear?',
    answer: 'Sì, sempre. MIDO, SILMO, Vision Expo e IOFT richiedono la pre-registrazione online. La registrazione in loco esiste ma perderai 45–60 minuti in fila. La maggior parte delle fiere apre le iscrizioni 3–4 mesi prima e offre prezzi early-bird — l\'anno scorso MIDO costava €35 in anticipo contro €55 alla porta. Porta i documenti di registrazione della tua azienda; alcune fiere verificano che tu sia un acquirente del settore prima di concedere l\'accesso.',
  },
  {
    question: 'Cosa devo portare a una fiera quando incontro i fornitori?',
    answer: 'Viaggia leggero ma specifico: 3–5 campioni della concorrenza come riferimento di qualità, 100+ biglietti da visita (li finirai più velocemente di quanto pensi), una scheda tecnica con il tuo prezzo al dettaglio target, preferenze sui materiali e requisiti UV400/certificazioni, un caricatore portatile, scarpe comode e un taccuino. La cosa più importante: foto stampate di esattamente ciò che vuoi — la barriera linguistica scompare quando puoi indicare un\'immagine.',
  },
  {
    question: 'Come faccio il follow-up con i fornitori dopo una fiera?',
    answer: 'Invia un\'email personalizzata entro 48 ore — non un messaggio template. Fai riferimento a qualcosa di specifico della conversazione allo stand ("Mi ricordo che hai menzionato il tuo fornitore di acetato Mazzucchelli"). Includi foto dei tuoi campioni di riferimento. Richiedi un preventivo con le tue quantità, non "qual è il vostro miglior prezzo". Le fabbriche ricevono 200+ email del tipo "inviatemi il catalogo" dopo ogni fiera; quelle che si distinguono sono quelle che sembrano un ordine vero, non una battuta di pesca.',
  },
]

export default function GuidaFiereOcchialiSolePage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }) }} />

    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Fiere degli Occhiali da Sole 2026: Guida per Trovare i Fornitori Giusti",
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guida di un proprietario di fabbrica cinese alle fiere degli occhiali da sole nel 2026 — MIDO, SILMO, Vision Expo, IOFT, Fiera Ottica di HK. Costi degli stand, strategie di valutazione dei fornitori e follow-up che funzionano davvero.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/guida-fiere-occhiali-sole" },
          "inLanguage": "it"
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Approvvigionamento</span>
            <span>20 luglio 2026</span>
            <span>•</span>
            <span>8 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fiere degli Occhiali da Sole 2026: Guida per Trovare i Fornitori Giusti
          </h1>
          <p className="text-xl text-gray-600">
            Ho lavorato agli stand di oltre 30 fiere. La maggior parte degli acquirenti gira i padiglioni nel modo sbagliato. Ecco come farlo bene.
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
            <li><a href="#perche-fiere" className="text-primary-600 hover:underline">Perché le Fiere Contano Ancora nell&apos;Era di Alibaba</a></li>
            <li><a href="#calendario" className="text-primary-600 hover:underline">Il Calendario delle Principali Fiere 2026</a></li>
            <li><a href="#preparazione" className="text-primary-600 hover:underline">Cosa Preparare Prima di Andare</a></li>
            <li><a href="#valutare" className="text-primary-600 hover:underline">Come Valutare i Fornitori a una Fiera</a></li>
            <li><a href="#strategia-stand" className="text-primary-600 hover:underline">La Strategia di Visita agli Stand che la Maggior Parte degli Acquirenti Sbaglia</a></li>
            <li><a href="#follow-up" className="text-primary-600 hover:underline">Follow-Up Post-Fiera che Funziona Davvero</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Domande Frequenti</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">

          <p className="lead text-xl text-gray-600 mb-8">
            Nel 2019, un acquirente è entrato nel nostro stand a MIDO Milano, ha preso una delle nostre montature in acetato,
            ha piegato l&apos;astina quasi completamente contro la parte frontale, l&apos;ha tenuta così per tre secondi e l&apos;ha posata.
            Non ha detto nulla. Ha solo annuito, preso un biglietto da visita e se n&apos;è andato. Due mesi dopo, ha fatto
            un ordine da $45.000.
          </p>
          <p>
            Ecco il punto sulle fiere. Non puoi replicare quel momento su Alibaba. Non puoi
            sentire la tensione della cerniera a molla tramite un messaggio diretto. Non puoi
            annusare l&apos;acetato fresco o tenere una lente polarizzata contro le luci del padiglione attraverso una scheda prodotto.
            Nei 15 anni in cui gestisco una fabbrica di occhiali da sole in Cina, le fiere sono state il luogo dove sono nate
            le nostre migliori relazioni con i clienti — non in una casella email,
            non su una piattaforma B2B, ma attraverso un tavolo da stand di 3 metri con i campioni tra di noi.
          </p>
          <p>
            Ma ecco cosa nessuno ti dice: <strong>la maggior parte degli acquirenti è pessima alle fiere.</strong> Girano
            i padiglioni come turisti, raccolgono cataloghi come souvenir e tornano a casa con una borsa piena di
            biglietti da visita che non guarderanno mai più. L&apos;ho osservato da dietro lo stand per oltre un
            decennio. Questa guida è l&apos;esatto opposto — è come entrare in qualsiasi fiera dell&apos;eyewear nel 2026
            e uscirne con vere relazioni con i fornitori, non solo una pila di brochure.
          </p>

          {/* ─── Sezione 1: Perché le Fiere Contano Ancora ─── */}
          <h2 id="perche-fiere" className="text-2xl font-bold mt-12 mb-4">Perché le Fiere Contano Ancora nell&apos;Era di Alibaba</h2>
          <p>
            Mi fanno questa domanda di continuo: &quot;Perché dovrei spendere $3.000 in voli e hotel quando posso
            cercare fornitori su Alibaba gratuitamente?&quot;
          </p>
          <p>
            Ecco la risposta onesta: <strong>circa il 40–50% dei &quot;produttori&quot; su Alibaba sono società
            commerciali.</strong> Non possiedono una sola macchina per stampaggio a iniezione. Prendono il tuo ordine,
            lo maggiorano del 15–30% e lo inviano a una fabbrica di cui non saprai mai il nome. Ho visto società
            commerciali entrare nel nostro stand, fotografare i nostri campioni e metterli in vendita su Alibaba
            come prodotti propri quella stessa sera. Lo so perché gli acquirenti mi hanno poi inviato screenshot
            chiedendo perché le &quot;nostre&quot; montature fossero in vendita sotto un nome aziendale diverso.
          </p>
          <p>
            A una fiera, elimini l&apos;intermediario per definizione. Lo stand costa almeno $4.000 — le società
            commerciali non investono quel tipo di denaro per una singola fiera. Sei di fronte a qualcuno
            che possiede la fabbrica o ne gestisce le operazioni. Puoi chiedere &quot;dov&apos;è il vostro reparto
            produttivo?&quot; e osservare la loro reazione in tempo reale. Puoi aprire i cassetti dietro il display,
            controllare l&apos;interno delle astine per i segni di stampo e vedere come sono realmente rifiniti
            i campioni — non come sono stati fotografati sotto luci da studio.
          </p>
          <p>
            Un&apos;altra cosa importante: <strong>la fabbrica che espone a MIDO o SILMO ha superato un filtro.</strong>
            Ha la documentazione per l&apos;export. Ha personale che parla inglese. Comprende gli standard
            di qualità internazionali. Ha investito soldi seri per essere lì — uno stand da 18m² con illuminazione
            adeguata e vetrine a MIDO costa circa $12.000–$15.000 tutto incluso. Nessuno spende tanto per truffarti.
          </p>

          {/* ─── Sezione 2: Il Calendario ─── */}
          <h2 id="calendario" className="text-2xl font-bold mt-12 mb-4">Il Calendario delle Principali Fiere 2026</h2>

          <h3 className="text-xl font-semibold mt-8 mb-4">MIDO Milano — 7–9 Febbraio 2026</h3>
          <p>
            Questa è la più importante. 1.300+ espositori da 50+ paesi, 55.000+ visitatori e un&apos;industria da
            €38 miliardi concentrata nel centro congressi Fiera Milano Rho. Se puoi partecipare a una sola fiera
            quest&apos;anno, che sia MIDO.
          </p>
          <p>
            I padiglioni sono organizzati per settore — Design, Tech, Fashion, Lens e Asia. Per
            l&apos;approvvigionamento, cerca il <strong>Padiglione Asia</strong> e parti del Padiglione Fashion.
            È lì che troverai i produttori cinesi, coreani e di Hong Kong che producono a volumi competitivi.
            Il Padiglione Design è principalmente marchi italiani e francesi che producono acetato premium — belli
            da vedere, ma aspettati prezzi FOB intorno a $12–$25 per unità per OEM rispetto a $5–$12 nel Padiglione
            Asia per una qualità equivalente.
          </p>
          <p>
            Ricordo un cliente canadese che ha passato due giorni interi nel Padiglione Design, si è innamorato
            delle montature italiane in acetato, ha ricevuto un preventivo di €22/unità FOB ed è andato nel panico
            quando ha capito che il suo prezzo al dettaglio sarebbe dovuto essere $120+ solo per andare in pari.
            Ci ha trovato nel Padiglione Asia il terzo giorno, ha visto montature con acetato Mazzucchelli a
            $9,50/unità e mi ha quasi abbracciato. Stesso materiale. Filiera diversa. Ecco perché giri tutto
            il padiglione prima di prendere decisioni.
          </p>
          <blockquote className="border-l-4 border-primary-600 pl-4 my-6 italic text-gray-700">
            <strong>Consiglio da insider:</strong> MIDO si tiene da sabato a lunedì. Il sabato è caos — tutti gli
            acquirenti si precipitano dentro. Il lunedì pomeriggio il padiglione è tranquillo, gli espositori
            sono stanchi ma rilassati e puoi avere conversazioni vere. Ho fatto prezzi migliori il lunedì alle 15:00
            di quanto avrei mai fatto il sabato alle 11:00 quando c&apos;è una fila di persone che aspettano dietro di te.
          </blockquote>

          <h3 className="text-xl font-semibold mt-8 mb-4">Vision Expo East (NYC) — 12–15 Marzo 2026</h3>
          <h3 className="text-xl font-semibold mt-8 mb-4">Vision Expo West (Las Vegas) — 16–19 Settembre 2026</h3>
          <p>
            I due eventi Vision Expo sono i più grandi appuntamenti d&apos;acquisto negli USA, ma c&apos;è una
            distinzione che devi capire: su circa 450 espositori a ogni fiera, solo <strong>180–200 sono veri
            produttori di occhiali.</strong> Il resto sono laboratori di lenti, fornitori di attrezzature, marchi di
            montature, aziende di software e servizi optometrici. Se entri cercando una fabbrica e non pre-filtri
            la mappa del padiglione, sprecherai metà giornata a parlare con persone che vogliono venderti un sistema
            di gestione per ottici.
          </p>
          <p>
            Vision Expo West a Las Vegas tende ad avere una presenza più forte di produttori internazionali — più
            fabbriche cinesi, coreane e giapponesi rispetto alla fiera di New York. La fiera di Las Vegas ha anche
            il vantaggio di essere subito prima di SILMO Paris, quindi molti produttori asiatici fanno la doppietta:
            Vision Expo West a settembre, poi volano a Parigi per SILMO la settimana successiva.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">SILMO Paris — 25–28 Settembre 2026</h3>
          <p>
            SILMO è la fiera del design e delle tendenze. 1.000 espositori, metà francesi o italiani, e l&apos;energia
            è decisamente premium. Se MIDO è dove negozi i prezzi unitari, SILMO è dove scopri quali colori,
            forme e materiali domineranno il mercato nel 2027.
          </p>
          <p>
            Visito SILMO ogni anno come acquirente, non come espositore. Giro il padiglione con un taccuino e
            fotografo ogni tendenza che vedo — l&apos;anno scorso erano gli acetati caramello traslucido e le silhouette
            oversize anni &apos;70. Quest&apos;anno punto sul titanio sottile con lenti sfumate. Se stai creando un brand,
            SILMO ti farà risparmiare sei mesi di ricerca sulle tendenze in due giorni.
          </p>
          <p>
            Una precisazione: SILMO è costoso per i produttori come espositori, il che significa che la presenza
            di fabbriche cinesi è più ridotta rispetto a MIDO o Hong Kong. Troverai più studi di design e
            specialisti OEM di fascia alta che produttori di volume. Ottimo per l&apos;ispirazione. Meno indicato
            per negoziare il tuo primo ordine da 500 pezzi.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">IOFT Tokyo — Ottobre 2026 (Date da Confermare)</h3>
          <p>
            L&apos;International Optical Fair Tokyo è più piccola — 260+ espositori — ma supera il suo peso in
            qualità. Se hai bisogno di montature giapponesi in titanio, acetato di precisione o cerniere
            lavorate con tolleranze che fanno sudare la maggior parte delle fabbriche, IOFT è la tua fiera.
          </p>
          <p>
            I produttori giapponesi sono notoriamente selettivi. Non inseguono i volumi come fanno le fabbriche
            cinesi. I MOQ a IOFT tendono a essere 300–500 pezzi e i prezzi partono più alti — diciamo $15–$30 FOB
            per montature in acetato contro $5–$12 dalla Cina. Ma la maestria artigianale è innegabile. Ho
            mandato acquirenti a IOFT quando avevano bisogno di qualcosa che non potevamo eguagliare in precisione,
            e lo dico da proprietario di fabbrica.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Fiera Ottica di Hong Kong — 4–6 Novembre 2026</h3>
          <p>
            Se vuoi incontrare produttori cinesi senza la complessità di viaggiare nella Cina continentale, Hong Kong
            è la risposta. 700+ espositori, la stragrande maggioranza con stabilimenti produttivi a Shenzhen,
            Dongguan, Wenzhou e Xiamen — i quattro principali poli manifatturieri dell&apos;eyewear.
          </p>
          <p>
            Hong Kong ha due grandi vantaggi rispetto alle altre fiere. Primo: <strong>nessun visto richiesto</strong>
            per la maggior parte delle nazionalità, il che elimina un grosso ostacolo. Secondo: gli espositori sono
            rodati sull&apos;export. Qualsiasi fabbrica cinese con uno stand a Hong Kong fa affari internazionali
            da anni — conosce i tuoi requisiti di certificazione, i tuoi standard di packaging, le tue aspettative
            di spedizione. Non devi formarli; sono già pronti.
          </p>
          <p>
            La fiera di Hong Kong si svolge anche in contemporanea con una zona brand dedicata, quindi puoi vedere
            cosa vendono i marchi finiti ai rivenditori mentre incontri anche le fabbriche che li producono.
            Quella doppia prospettiva vale da sola il viaggio.
          </p>

          {/* ─── Sezione 3: Preparazione ─── */}
          <h2 id="preparazione" className="text-2xl font-bold mt-12 mb-4">Cosa Preparare Prima di Andare</h2>
          <p>
            Ho visto troppi acquirenti presentarsi solo con il telefono e buone intenzioni. È uno spreco di un
            viaggio da $3.000. Ecco cosa portano gli acquirenti seri:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>3–5 campioni fisici di riferimento.</strong> Porta occhiali da sole di concorrenti o marchi
            che ammiri. Quando mi passi un campione e dici &quot;Voglio questa qualità, a questa fascia di prezzo,
            con questa sensazione di cerniera,&quot; posso dirti in 30 secondi se possiamo farlo. Senza un
            riferimento, stiamo entrambi tirando a indovinare.</li>
            <li><strong>100+ biglietti da visita.</strong> Non 20. Non 50. Consegnerai più biglietti di quanto
            ti aspetti e finirli ti fa sembrare impreparato. Biglietti professionali, non quelli gratis di
            VistaPrint con i bordi perforati.</li>
            <li><strong>Una scheda tecnica di una pagina.</strong> Fascia di prezzo al dettaglio target, materiali
            preferiti (acetato, TR90, metallo, titanio), requisiti delle lenti (polarizzate, UV400, sfumate,
            fotocromatiche), esigenze di certificazione (FDA, CE, AS/NZS) e quantità stimata del primo ordine.
            Stampa 20 copie. Consegnale a ogni fornitore serio che incontri.</li>
            <li><strong>Mappa del padiglione con obiettivi pre-segnati.</strong> Scarica la lista espositori e la
            planimetria almeno due settimane prima della fiera. Evidenzia ogni produttore nella tua categoria.
            Pianifica il percorso in modo da non fare zigzag tra i padiglioni. Giorno uno: visita tutti i tuoi
            obiettivi rapidamente (5–10 minuti ciascuno). Giorno due: torna dai tuoi 3–5 migliori per conversazioni
            più approfondite.</li>
            <li><strong>Un caricatore portatile e un taccuino fisico.</strong> Il telefono sarà scarico per le 14:00.
            Prendere appunti su carta è anche più veloce che digitare — annota il numero dello stand, il nome del
            contatto, due cose specifiche di cui avete parlato e un voto da 1 a 10. Dimenticherai quale stand era
            quale entro cena. Succede a tutti.</li>
          </ul>

          {/* ─── Sezione 4: Valutare i Fornitori ─── */}
          <h2 id="valutare" className="text-2xl font-bold mt-12 mb-4">Come Valutare i Fornitori a una Fiera</h2>
          <p>
            Sei in piedi in uno stand. I campioni sembrano buoni. Il venditore è cordiale. E adesso? Ecco cosa
            controllerei se fossi dalla tua parte del tavolo:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Le Cinque Domande che Separano le Fabbriche dai Falsi</h3>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>&quot;Dov&apos;è situata la vostra fabbrica? Quante linee di produzione avete?&quot;</strong> —
            Una vera fabbrica risponde all&apos;istante. Una società commerciale esita, dà una risposta vaga o dice
            &quot;lavoriamo con diverse fabbriche partner.&quot; È il segnale per andare avanti.</li>
            <li><strong>&quot;Potete mostrarmi l&apos;interno dell&apos;astina?&quot;</strong> — Prendi un campione, guarda
            attentamente la finitura. Si vedono le linee di stampo? La vite della cerniera è a filo? L&apos;acetato
            sembra solido o cavo? Non serve essere un ingegnere. Devi solo avere la voglia di guardare. L&apos;espositore
            che ti guarda fare questo senza battere ciglio è sicuro del suo prodotto.</li>
            <li><strong>&quot;Qual è il vostro tempo di consegna tipico per un ordine OEM da 500 pezzi?&quot;</strong> —
            La risposta giusta è 30–45 giorni. Se dicono 15 giorni, o stanno facendo ODM da stock o mentono
            sull&apos;essere una fabbrica. Se dicono 90 giorni, la produzione è sovraccarica e verrai messo in
            secondo piano come piccolo acquirente.</li>
            <li><strong>&quot;Quali certificazioni hanno le vostre montature? Posso vedere la documentazione?&quot;</strong> —
            CE, FDA, UV400 e ISO 9001 sono il minimo indispensabile. Una fabbrica seria ha i documenti nello stand
            o può inviarli via email entro un&apos;ora. Se balbettano una risposta, o non sono certificati o stanno
            usando certificati altrui — entrambi sono inaccettabili.</li>
            <li><strong>&quot;Come gestite il controllo qualità sugli ordini di export?&quot;</strong> — Ascolta i
            dettagli: &quot;Facciamo AQL 2.5 su ogni ordine, inviamo foto pre-spedizione e offriamo ispezioni di
            terze parti.&quot; Un vago &quot;garantiamo la qualità&quot; non significa nulla. Una fabbrica che sa
            descrivere il proprio processo QC in dettaglio ne ha uno. Una fabbrica che non lo sa fare, no.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Segnali d&apos;Allarme che Ho Imparato a Riconoscere</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Nessun cassetto dei campioni.</strong> Uno stand con solo vetrine espositive e nessun campione
            di riserva ti dice che stanno mostrando prototipi, non pezzi di produzione. Chiedi di vedere &quot;come
            appare il 500º pezzo, non il primo.&quot;</li>
            <li><strong>Prezzo troppo rapido.</strong> Se chiedi di una montatura e ti danno un prezzo in 10 secondi
            senza chiedere quantità, materiali o personalizzazioni — stanno vendendo da stock. Non necessariamente
            negativo, ma non stai parlando con un produttore.</li>
            <li><strong>Nessun indirizzo della fabbrica sul biglietto da visita.</strong> Se l&apos;indirizzo è una
            torre di uffici in un quartiere direzionale e non una zona industriale, è un campanello d&apos;allarme.
            Le fabbriche di Dongguan sono a Dongguan, non in un ufficio attrezzato a Hong Kong Central.</li>
          </ul>

          {/* ─── Sezione 5: Strategia di Visita agli Stand ─── */}
          <h2 id="strategia-stand" className="text-2xl font-bold mt-12 mb-4">La Strategia di Visita agli Stand che la Maggior Parte degli Acquirenti Sbaglia</h2>
          <p>
            La maggior parte degli acquirenti fa così: si avvicina a uno stand, prende una montatura, chiede
            &quot;quanto costa?&quot;, prende un catalogo, se ne va. Non è approvvigionamento. È shopping da
            vetrina con qualche passaggio in più.
          </p>
          <p>
            Ecco la strategia che funziona davvero, imparata osservando gli acquirenti di maggior successo che
            visitano il nostro stand:
          </p>
          <p>
            <strong>Giorno uno: ricognizione.</strong> Gira tutto il padiglione. Dedica 5–7 minuti per ogni stand
            target — abbastanza per valutare la qualità dei campioni, fare le cinque domande sopra e ottenere una
            fascia di prezzo indicativa. Non negoziare. Non impegnarti. Scatta foto dei campioni che ti piacciono
            (chiedi prima il permesso — alcuni espositori sono sensibili alla copia dei design), annota il tuo voto
            da 1 a 10 e vai avanti. Entro la fine del primo giorno dovresti aver visitato 15–25 stand e ristretto
            a 5 candidati seri.
          </p>
          <p>
            <strong>Giorno due: approfondimenti.</strong> Torna dai tuoi 5 migliori. Questa volta siediti. Chiedi
            dell&apos;acqua. Apri il loro catalogo oltre i pezzi in mostra — chiedi di vedere&nbsp;
            <Link href="/products/" className="text-primary-600 hover:underline">la loro gamma completa</Link>,
            non solo ciò che è in esposizione. Discuti la tua scheda tecnica in dettaglio. Chiedi della&nbsp;
            <Link href="/it/blog/guida-moq-occhiali" className="text-primary-600 hover:underline">flessibilità MOQ</Link>
            per un primo ordine. L&apos;obiettivo del secondo giorno è che la conversazione vada abbastanza in profondità
            da permetterti un confronto reale tra fornitori — prezzo, capacità, qualità della comunicazione e
            sensazione istintiva.
          </p>
          <p>
            <strong>Giorno tre: la chiusura tranquilla.</strong> La maggior parte degli acquirenti è già tornata a
            casa entro il terzo giorno, specialmente a MIDO dove il lunedì è il giorno più lento. Questo è il tuo
            vantaggio. Torna dai tuoi 2–3 fornitori migliori. Il personale dello stand è meno stressato, più
            disponibile a parlare e più aperto a negoziare. Ho fatto prezzi migliori e condiviso informazioni
            più sincere il lunedì pomeriggio che durante la ressa del sabato — perché gli acquirenti che restano
            fino alla fine sono quelli seri.
          </p>
          <p>
            <strong>L&apos;errore critico:</strong> disperdersi su troppi stand. Se visiti 80 stand in tre giorni,
            non hai avuto una vera conversazione con nessuno. Hai raccolto 80 cataloghi e zero relazioni.
            Punta a 15–25 stand in totale, con conversazioni di follow-up significative in 5–7 di essi.
          </p>

          {/* ─── Sezione 6: Follow-Up ─── */}
          <h2 id="follow-up" className="text-2xl font-bold mt-12 mb-4">Follow-Up Post-Fiera che Funziona Davvero</h2>
          <p>
            Dopo ogni grande fiera, ricevo circa 250 email nella prima settimana. Forse 10 portano a veri affari.
            Le altre 240 sono qualche variante di &quot;Piacere di averti conosciuto, per favore invia catalogo e
            miglior prezzo.&quot;
          </p>
          <p>
            Ecco come sono fatte le 10 che funzionano:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Invia entro 48 ore.</strong> Non due settimane dopo. Non posso ricordare quale delle 200
            facce che ho visto quel giorno sia la tua, a meno che tu non me lo ricordi mentre il ricordo è fresco.
            Il secondo giorno dopo la fiera è la finestra ideale.</li>
            <li><strong>Fai riferimento a qualcosa di specifico.</strong> &quot;Abbiamo parlato dei tuoi modelli in
            acetato con le cerniere a molla — hai menzionato il tuo rapporto con il fornitore Mazzucchelli&quot; —
            questo mi dice che stavi prestando attenzione e non è un messaggio template inviato a 50 fabbriche.</li>
            <li><strong>Includi la tua scheda tecnica e le foto di riferimento.</strong> Le stesse che mi hai
            consegnato allo stand. Probabilmente ce l&apos;ho da qualche parte nella mia pila, ma allegarla alla tua
            email mi risparmia la ricerca e mi rende più propenso a rispondere in giornata.</li>
            <li><strong>Indica le tue quantità e la tempistica.</strong> &quot;Vorrei fare un ordine di prova da 300
            pezzi a ottobre per tre SKU&quot; ha 10 volte più probabilità di ottenere una risposta seria rispetto a
            &quot;qual è il vostro miglior prezzo?&quot; La prima email sembra quella di un cliente. La seconda
            sembra un tentativo a vuoto.</li>
            <li><strong>Chiedi un passo successivo specifico.</strong> &quot;Potete inviarmi un preventivo formale
            con prezzi FOB per le SKU A, B e C entro venerdì?&quot; Questo mi dà un&apos;azione chiara con una
            scadenza. Posso dire sì o no. In entrambi i casi, la conversazione va avanti.</li>
          </ol>
          <p>
            Un&apos;altra cosa: se un fornitore non risponde entro 3–4 giorni lavorativi, fai un solo follow-up.
            Se ancora non risponde, depenna il nome dalla lista. Una fabbrica che non sa rispondere a una richiesta
            post-fiera di un acquirente qualificato entro una settimana ti sta dicendo tutto su come gestirà
            la comunicazione della tua produzione in seguito.
          </p>

          {/* ═══════ FAQ ═══════ */}
          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4">Domande Frequenti</h2>
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
            <h2 className="text-3xl font-bold mb-4">Salta i Padiglioni — Inizia Direttamente</h2>
            <p className="text-xl mb-6 opacity-90">
              Se non riesci ad andare a MIDO o Hong Kong quest&apos;anno, parliamone. Produciamo occhiali
              da sole dal 2006 — campioni in 3–7 giorni, OEM da 300 pezzi e ogni paio certificato UV400.
            </p>
            <Link
              href="/it/contatto"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Richiedi un Preventivo Gratuito
            </Link>
          </div>

          {/* ═══════ CONTENUTI CORRELATI ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dalla Fabbrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Vedi il Nostro Catalogo Completo</h3>
                <p className="text-gray-600 text-sm">Sfoglia 500+ design ODM e OEM di occhiali da sole — acetato, metallo, TR90 e altro.</p>
              </Link>
              <Link href="/it/blog/trovare-produttore-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Come Trovare un Produttore Affidabile</h3>
                <p className="text-gray-600 text-sm">10 criteri di valutazione, truffe Alibaba da evitare e veri consigli di negoziazione dal lato della fabbrica.</p>
              </Link>
              <Link href="/it/contatto" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contattaci</h3>
                <p className="text-gray-600 text-sm">Ottieni un preventivo personalizzato per il tuo ordine di occhiali da sole. Campioni in 3–7 giorni.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
    </>
  )
}
