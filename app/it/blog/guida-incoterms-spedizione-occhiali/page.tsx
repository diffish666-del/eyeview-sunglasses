import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Incoterms occhiali da sole e guida alla spedizione: FOB, CIF, EXW, DDP',
  description: 'Un proprietario di fabbrica spiega FOB, CIF, EXW e DDP per gli importatori di occhiali da sole: numeri reali di spedizione, chi paga cosa e come scegliere l\'Incoterm giusto per il tuo primo ordine.',
  keywords: ['incoterms occhiali da sole', 'FOB vs CIF vs EXW vs DDP', 'guida spedizione occhiali', 'importare occhiali dalla cina', 'costo trasporto occhiali', 'incoterms spiegati importatori', 'prezzo FOB occhiali', 'spedizione DDP occhiali', 'spedizione occhiali cina', 'sdoganamento occhiali da sole'],
  alternates: {
    canonical: '/it/blog/guida-incoterms-spedizione-occhiali',
    languages: {
      'en': '/blog/sunglasses-incoterms-shipping-guide',
      'de': '/de/blog/sonnenbrillen-incoterms-versand-ratgeber',
      'es': '/es/blog/guia-incoterms-envio-gafas-sol',
      'fr': '/fr/blog/guide-incoterms-expedition-lunettes',
      'pt': '/pt/blog/guia-incoterms-envio-oculos',
    },
  },
};

const takeaways = [
  'Gli Incoterms sono un contratto di trasferimento del rischio, non un listino prezzi: FOB, CIF, EXW e DDP definiscono ciascuno un punto di consegna preciso in cui la responsabilità (e il costo) della merce passa dal venditore all\'acquirente, e sbagliare quel punto è il modo in cui gli importatori perdono in silenzio migliaia di euro su un singolo container',
  'Per un importatore di occhiali da sole alla prima esperienza, FOB è quasi sempre la risposta giusta: la fabbrica gestisce lo sdoganamento all\'export e carica la merce sulla nave in un porto cinese designato, e tu controlli lo spedizioniere, l\'assicurazione e la consegna — il costo totale franco destino è di solito inferiore del 10–15% rispetto a lasciare che il venditore gestisca CIF o DDP',
  'EXW (franco fabbrica) sembra economico sul preventivo ma è una trappola per i nuovi acquirenti — ti carica ogni attività di export, ogni documento di export e ogni rischio dalla porta della fabbrica, e un acquirente che non sa gestire la dogana di export cinese pagherà in errori più di quanto abbia mai risparmiato sul prezzo esposto',
  'DDP è l\'unico termine in cui il venditore è responsabile dei dazi e delle tasse del paese di destinazione, il che lo rende allettante per Amazon FBA e i venditori al dettaglio — ma paghi un premio dell\'8–15% perché il venditore assorba il rischio doganale, e perdi la visibilità sul costo franco destino reale che stai pagando',
  'I tre costi nascosti che distruggono i margini degli importatori sono le spese di demurrage e detention (50–150 $ al giorno quando un container resta troppo a lungo in porto), le spese di movimentazione al terminale di destinazione (spesso 200–500 $ per container) e la merce non assicurata — e nessuno di essi compare sul prezzo unitario FOB che il tuo fornitore ha quotato',
];

const quickStats = [
  { label: 'Nolo marittimo tipico, container 40ft CN→US', value: '$2.500–4.500' },
  { label: 'Premio sul costo franco destino di CIF/DDP vs FOB', value: '8–15%' },
  { label: 'Spese di demurrage/detention al giorno, per container', value: '$50–150' },
  { label: 'Spese di movimentazione al terminale di destinazione (THC)', value: '$200–500' },
  { label: 'Quota di importatori al primo ordine che pagano troppo il nolo', value: '~40%' },
];

const faqs = [
  {
    question: 'Qual è la differenza tra FOB e CIF per l\'import di occhiali da sole?',
    answer: 'Con FOB (Free On Board), la fabbrica paga lo sdoganamento all\'export e il caricamento nel porto cinese designato, poi subentri tu — prenoti il nolo marittimo, stipuli l\'assicurazione e gestisci lo sdoganamento all\'import. Con CIF (Cost, Insurance, Freight), il venditore paga il nolo e una polizza base fino al porto di destinazione, poi ti consegna la merce. FOB ti dà il controllo del tuo spedizioniere e di solito costa meno; CIF è più semplice ma il venditore sceglie lo spedizioniere e tu paghi un margine su nolo e assicurazione. Per gli occhiali da sole — merce leggera e poco voluminosa — il margine di nolo che un venditore aggiunge in CIF può facilmente raggiungere l\'8–15%.',
  },
  {
    question: 'Qual è l\'Incoterm migliore per un importatore di occhiali da sole alla prima esperienza?',
    answer: 'FOB, in quasi tutti i casi. Costringe la fabbrica a gestire la parte difficile — lo sdoganamento all\'export cinese — lasciandoti il controllo dello spedizioniere, dell\'assicurazione e della consegna a destinazione, che è dove gli importatori alla prima esperienza perdono più soldi quando se ne occupa qualcun altro. L\'unica eccezione: se il tuo ordine è abbastanza piccolo da viaggiare via corriere aereo (DDP express), oppure se fai Amazon FBA e vuoi che il venditore consegni a un magazzino Amazon con dazi pagati, DDP vale davvero il premio per la semplicità. Per un primo container completo, parti da FOB.',
  },
  {
    question: 'Chi paga i dazi doganali e le tasse con ciascun Incoterm?',
    answer: 'Con EXW, FOB, CIF e CFR, l\'importatore (tu) paga tutti i dazi doganali, l\'IVA e le tasse di importazione del paese di destinazione — la responsabilità del venditore termina prima che la merce raggiunga il tuo paese. Con DDP (Delivered Duty Paid), il venditore è responsabile dei dazi e delle tasse di destinazione, ed è proprio per questo che DDP impone un premio. Nota che DDP su una spedizione marittima richiede comunque che il venditore (o il suo doganalista) sdoganino la merce a tuo nome in molti paesi, aggiungendo complessità e costo — la maggior parte dei venditori quota DDP l\'8–15% sopra FOB per coprire quel rischio.',
  },
  {
    question: 'Quanto costa spedire gli occhiali da sole dalla Cina?',
    answer: 'Dipende dal volume e dalla destinazione, ma ecco numeri reali. Un container da 40 piedi dalla Cina alla costa orientale degli Stati Uniti costa circa 2.500–4.500 $ di nolo marittimo a seconda della stagione; verso l\'Europa è spesso 2.000–3.500 $. Gli occhiali da sole sono leggeri e poco voluminosi, quindi un singolo container da 40ft può trasportare 100.000–150.000 paia in bustine, portando il costo del nolo a soli 0,02–0,05 $ per paio. L\'errore degli importatori al primo ordine è pagare il nolo aereo per una quantità da mare — il nolo aereo per gli occhiali costa 4–7 $ al chilogrammo, contro 0,05–0,15 $ al chilogrammo via mare, e quella differenza azzera il tuo margine.',
  },
  {
    question: 'Cosa sono le spese di demurrage e detention, e come le evito?',
    answer: 'Il demurrage è la spesa addebitata dalla compagnia marittima quando un container resta in porto oltre il tempo franco (di solito 3–7 giorni franchi); la detention è la spesa quando trattieni il container vuoto oltre la finestra di restituzione consentita (di solito 5–14 giorni franchi). Entrambe costano 50–150 $ al giorno. Gli importatori le subiscono quando i documenti doganali sono in ritardo o il trasportatore non ritira in tempo. Le eviti allineando doganalista, spedizioniere e appuntamento di consegna prima ancora che la nave arrivi — il container è sul cronometro dal momento in cui viene scaricato.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'guida-incoterms-spedizione-occhiali';

export default function GuidaIncotermsSpedizioneOcchiali() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Incoterms occhiali da sole e guida alla spedizione' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Incoterms occhiali da sole e guida alla spedizione: FOB, CIF, EXW, DDP spiegati per gli importatori",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un proprietario di fabbrica spiega FOB, CIF, EXW e DDP per gli importatori di occhiali da sole: numeri reali di spedizione, chi paga cosa e come scegliere l'Incoterm giusto per il tuo primo ordine.",
          "inLanguage": "it",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/it/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "it",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import &amp; Logistica</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Incoterms occhiali da sole e guida alla spedizione: FOB, CIF, EXW, DDP
          </h1>
          <p className="text-xl text-gray-600">
            Un acquirente mi ha inviato una volta il preventivo di un concorrente chiedendomi perché fosse il 12% più economico del mio. Stessa montatura, stesso MOQ, stesse specifiche. La differenza erano le tre lettere alla fine del prezzo: EXW. Il concorrente quotava franco fabbrica, il che significava che l\'acquirente avrebbe pagato di tasca propria lo sdoganamento all\'export, il trasporto al porto, il nolo marittimo, l\'assicurazione e i dazi di importazione — niente di tutto ciò compariva sul preventivo. Ecco tutto ciò che vorrei che gli importatori al primo ordine capissero sugli Incoterms prima di versare un acconto.
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
          <h2 className="font-bold mb-4">Indice dei contenuti</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Cosa sono davvero gli Incoterms (e perché gli importatori ci rimangono scottati)</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">FOB vs CIF vs EXW vs DDP: i numeri reali di un proprietario di fabbrica</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Come scegliere l\'Incoterm giusto per il tuo primo ordine</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Costi nascosti che gli importatori dimenticano sempre</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Domande frequenti</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Spedizione occhiali — Cifre chiave" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Cosa sono davvero gli Incoterms (e perché gli importatori ci rimangono scottati)</h2>

          <p>Gli Incoterms — abbreviazione di International Commercial Terms (termini commerciali internazionali) — sono un insieme di codici a tre lettere pubblicati dalla Camera di commercio internazionale che definiscono una sola cosa: <strong>il punto in cui il rischio e il costo della merce passano dal venditore all\'acquirente.</strong> Questa è l\'intera loro funzione. Non definiscono chi possiede la merce. Non definiscono i termini di pagamento. Definiscono la consegna.</p>

          <p>Se non ricordi altro di questa guida, ricorda quella frase. Gli Incoterms sono un punto di consegna. Tutto ciò che sta a valle di quel punto è un tuo problema e un tuo costo; tutto ciò che sta a monte è del venditore.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Perché il punto di consegna conta più del prezzo</h3>

          <p>Due fornitori possono quotarti gli "stessi" occhiali da sole a due prezzi molto diversi, e nessuno dei due mente. Una fabbrica che quota <strong>1,80 $ FOB Shenzhen</strong> sta dicendo: "Farò sdoganare questi occhiali per l\'export, li trasporterò al porto e li caricherò sulla nave per 1,80 $ al paio." Un commerciante che quota <strong>1,50 $ EXW</strong> sta dicendo: "Ti consegno questi nel parcheggio del mio magazzino per 1,50 $, e tu pensi al resto." Il "risparmio" di 0,30 $ svanisce nel momento in cui paghi il doganalista di export, il trasporto portuale, la movimentazione al terminale e gli errori che commetterai facendo tutto questo per la prima volta.</p>

          <p>È per questo che gli importatori esperti confrontano sempre i preventivi <em>sullo stesso Incoterm.</em> Confrontare un preventivo FOB con uno EXW è come confrontare mele con un sacchetto di pezzi di mela non assemblati. La cosa più preziosa che puoi fare come acquirente è costringere ogni fornitore sulla stessa base prima di confrontare i prezzi.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">I quattro termini che vedrai davvero</h3>

          <p>Esistono undici Incoterms nell\'edizione 2020, ma nel commercio degli occhiali da sole ne vedrai quattro il 95% delle volte. Ecco ciascuno in una frase semplice, perché sono le versioni giuridiche a far inciampare gli acquirenti.</p>

          <p><strong>EXW (Ex Works / franco fabbrica).</strong> L\'unico obbligo del venditore è avere la merce pronta nei propri locali. Sei responsabile di tutto, dal caricamento del camion alla sua porta di fabbrica fino allo sdoganamento all\'import nel tuo paese. È il preventivo che sembra più economico e il costo reale più alto per un nuovo acquirente.</p>

          <p><strong>FOB (Free On Board / franco a bordo).</strong> Il venditore gestisce lo sdoganamento all\'export e carica la merce sulla nave che designi nel porto designato. Rischio e costo ti vengono trasferiti nel momento in cui la merce è a bordo. È il termine di riferimento del commercio di importazione di occhiali da sole.</p>

          <p><strong>CIF (Cost, Insurance, Freight).</strong> Il venditore paga il nolo e una polizza base fino al porto di destinazione, poi ti consegna la merce (e i documenti) lì. Paghi comunque i dazi e sdoganhi. L\'inghippo: il venditore sceglie lo spedizioniere e applica un margine sia sul nolo sia sull\'assicurazione.</p>

          <p><strong>DDP (Delivered Duty Paid / reso sdoganato).</strong> Il venditore si assume la responsabilità fino alla tua destinazione designata, inclusi dazi e tasse del paese di destinazione. È il termine di massima responsabilità per il venditore, ed è proprio per questo che impone il prezzo più alto.</p>

          <p>Esistono anche <strong>CFR</strong> (come CIF ma senza assicurazione) e <strong>FCA</strong> (il cugino aereo di FOB), che incontrerai occasionalmente. Ma padroneggia prima EXW, FOB, CIF e DDP, e capirai il resto all\'istante.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">FOB vs CIF vs EXW vs DDP: i numeri reali di un proprietario di fabbrica</h2>

          <p>Lascia che metta numeri concreti su questo, perché gli Incoterms non significano nulla in astratto e tutto nel concreto. Ti mostro un ordine realistico: <strong>10.000 paia di occhiali da sole in acetato a 1,80 $ FOB Shenzhen</strong>, spediti via mare a un acquirente a Rotterdam, nei Paesi Bassi.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Voce di costo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">EXW</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">FOB</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">CIF</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DDP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Prezzo unitario (10.000 paia)</td>
                  <td className="border border-gray-300 px-4 py-2">1,50 $</td>
                  <td className="border border-gray-300 px-4 py-2">1,80 $</td>
                  <td className="border border-gray-300 px-4 py-2">1,95 $</td>
                  <td className="border border-gray-300 px-4 py-2">2,15 $</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sdoganamento export + camionaggio Cina</td>
                  <td className="border border-gray-300 px-4 py-2">Pagato dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Incluso</td>
                  <td className="border border-gray-300 px-4 py-2">Incluso</td>
                  <td className="border border-gray-300 px-4 py-2">Incluso</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Nolo marittimo (consolidato LCL)</td>
                  <td className="border border-gray-300 px-4 py-2">Pagato dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Pagato dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Incluso (con margine)</td>
                  <td className="border border-gray-300 px-4 py-2">Incluso</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Assicurazione</td>
                  <td className="border border-gray-300 px-4 py-2">Pagata dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Pagata dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Inclusa (copertura minima)</td>
                  <td className="border border-gray-300 px-4 py-2">Inclusa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Dazi + IVA a destinazione</td>
                  <td className="border border-gray-300 px-4 py-2">Pagati dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Pagati dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Pagati dall\'acquirente</td>
                  <td className="border border-gray-300 px-4 py-2">Pagati dal venditore</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Chi controlla lo spedizioniere?</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acquirente</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Acquirente</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Venditore</td>
                  <td className="border border-gray-300 px-4 py-2">Venditore</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Leggere la tabella: dove vanno davvero i soldi</h3>

          <p>Guarda i prezzi unitari. EXW sembra 0,30 $ più economico di FOB, ma quei 0,30 $ non ti comprano esattamente nulla — devi comunque pagare lo sdoganamento all\'export e il trasporto, che per 10.000 paia di occhiali da sole costano circa 300–600 $ indipendentemente dal prezzo unitario. Un acquirente che ha "risparmiato" 3.000 $ scegliendo EXW invece di FOB spenderà almeno altrettanto in doganalista cinese, trasporto portuale e spese di movimentazione al terminale che la fabbrica avrebbe assorbito in FOB.</p>

          <p>Ora guarda CIF. Il venditore ha aggiunto 0,15 $ al paio (1.500 $ in totale) per nolo e assicurazione. Per una spedizione LCL di 10.000 paia — gli occhiali sono leggeri, si tratta di circa 8–12 metri cubi — il nolo reale da Shenzhen a Rotterdam è di circa 400–700 $ in consolidato. Il venditore ti sta addebitando circa il doppio del costo reale del nolo e lo chiama comodità. È il margine CIF, ed è così che i venditori guadagnano in silenzio di più sulla tua logistica che sul loro stesso prodotto.</p>

          <p>E DDP a 2,15 $? Il venditore ha aggiunto 0,35 $ al paio per coprire i dazi a destinazione, la gestione dell\'IVA e il rischio di sbagliare la classificazione doganale. Per un acquirente che non ha mai importato, quei 0,35 $ (circa 3.500 $ su questo ordine) sono probabilmente denaro ben speso — paghi qualcuno per assorbire il rischio doganale. Per un acquirente che l\'ha già fatto qualche volta, quegli stessi 3.500 $ sono un margine che potresti tenere operando FOB e sdoganando da solo con un doganalista locale.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">L\'unico numero che cambia tutto: il nolo per paio</h3>

          <p>Ecco il segreto da proprietario di fabbrica che la maggior parte degli importatori non calcola mai: <strong>il costo del nolo per paio.</strong> Gli occhiali da sole sono assurdamente leggeri e poco voluminosi. Un paio di occhiali in acetato in bustina pesa circa 25–35 grammi e occupa circa 0,6–1 litro una volta imballato. Un container da 40 piedi trasporta circa 100.000–150.000 paia. Quindi un nolo di container di 3.000 $ distribuito su 120.000 paia equivale a 0,025 $ per paio — due centesimi e mezzo.</p>

          <p>Confronta questo con il nolo aereo a 4–7 $ al chilogrammo: un paio da 30 grammi costa 0,12–0,21 $ a volare. È da 5 a 8 volte di più per paio. Il nolo aereo ha senso solo per campioni, rifornimenti urgenti di una referenza che si vende velocemente, o marchi di fascia alta dove la rapidità vale il premio. Per un ordine all\'ingrosso di routine, il nolo marittimo a due centesimi per paio è l\'intera ragione per cui importare occhiali da sole dalla Cina è redditizio. Se un fornitore instrada di nascosto il tuo ordine "economico" via aereo senza dirtelo, ha appena cancellato il tuo margine — ecco perché confermi sempre l\'instradamento, non solo il prezzo.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Come scegliere l\'Incoterm giusto per il tuo primo ordine</h2>

          <p>Non esiste un singolo Incoterm "corretto" — esiste solo l\'Incoterm corretto per <em>la tua situazione.</em> Ecco il quadro decisionale che do ai miei acquirenti, in ordine di frequenza delle mie raccomandazioni.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Parti da FOB (quasi sempre)</h3>

          <p>Per un primo ordine completo via mare, FOB è la scelta predefinita. Il motivo è semplice: mette le due cose più difficili — lo sdoganamento all\'export cinese e il caricamento su una nave — nelle mani della parte che lo fa ogni giorno (la fabbrica), mantenendo nolo e sdoganamento a destinazione nelle tue mani, dove puoi controllare il costo e scegliere uno spedizioniere di fiducia. Il lavoro della fabbrica termina nettamente al parapetto della nave, e da lì in poi hai piena visibilità.</p>

          <p>L\'unica vera competenza che FOB richiede da te è trovare uno spedizioniere decente e un doganalista locale. Sono entrambi servizi di base — chiedi a tre spedizionieri un preventivo per la stessa spedizione e vedrai lo scarto. Questo non è un motivo per evitare FOB; è un motivo per passare un pomeriggio a ottenere tre preventivi.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Usa DDP per piccoli ordini, Amazon FBA e rapidità</h3>

          <p>DDP merita il suo premio in tre situazioni precise. Prima, <strong>i piccoli ordini</strong>: se importi 500 paia via corriere aereo, la semplicità di lasciare che il venditore gestisca i dazi batte il risparmio del farlo da solo. Seconda, <strong>Amazon FBA</strong>: un venditore che consegna la tua merce a un magazzino Amazon con dazi pagati e una corretta etichetta di cartone FBA elimina un\'enorme quantità di grattacapi operativi per un venditore FBA che non vuole toccare la dogana. Terza, <strong>il dropshipping al dettaglio o i lanci urgenti</strong> dove la prevedibilità conta più del margine.</p>

          <p>Entraci però con gli occhi aperti. DDP significa che il venditore controlla l\'intera catena, il che significa che perdi visibilità sulla scomposizione di ciò che stai davvero pagando. Va benissimo quando l\'ordine è piccolo e l\'alternativa è un incubo doganale; va meno bene quando importi 20.000 paia e il premio DDP è di 7.000 $ che avresti potuto tenere con un doganalista competente.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Considera CIF solo se non hai ancora uno spedizioniere</h3>

          <p>CIF è la via di mezzo: il venditore gestisce il nolo e ti consegna la merce al tuo porto di destinazione. È davvero utile quando non hai ancora uno spedizioniere e l\'ordine è troppo grande per il comfort di DDP ma troppo piccolo per giustificare la costruzione di una relazione di nolo. Il compromesso, ancora una volta, è il margine e la perdita di controllo — il venditore sceglie lo spedizioniere, e lo spedizioniere lavora per il venditore, non per te.</p>

          <p>Il mio consiglio onesto: salta del tutto CIF per gli affari ricorrenti. Usalo una volta, sul tuo primo ordine, mentre stai ancora imparando. Poi procurati il tuo spedizioniere al secondo ordine e sposta tutto su FOB. CIF sono le rotelle; FOB è la bicicletta.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Evita EXW finché non conosci a fondo la logistica di export cinese</h3>

          <p>EXW ha esattamente un caso d\'uso legittimo: hai già uno spedizioniere in Cina con licenza di export, un accordo di camionaggio cinese e un doganalista che gestisce lo sdoganamento all\'export per te, e vuoi togliere ogni centesimo di logistica dal prezzo unitario. È un assetto reale e sofisticato — alcuni grandi importatori lo fanno girare. Non è però da dove si comincia.</p>

          <p>Per un acquirente alle prime armi, EXW è una trappola con un adesivo di sconto. Pagherai un doganalista cinese per lo sdoganamento all\'export, un trasportatore per portare la merce al porto, la movimentazione al terminale — e se qualcosa va storto tra la porta della fabbrica e la nave, è tutto un tuo problema. La fabbrica, avendoti consegnato la merce alla sua porta, non ha alcuna responsabilità e alcun incentivo ad aiutare. Qualunque cosa tu abbia risparmiato sul prezzo unitario, la spenderai — e probabilmente oltre — imparando a tue spese.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La matrice decisionale in un colpo d\'occhio</h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">La tua situazione</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Incoterm consigliato</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Perché</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Primo container marittimo completo</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>FOB</strong></td>
                  <td className="border border-gray-300 px-4 py-2">La fabbrica gestisce l\'export; tu controlli nolo e destinazione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Piccolo ordine via corriere aereo</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">La semplicità batte il risparmio sui piccoli volumi</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Consegna Amazon FBA</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Dazi pagati, consegnato al magazzino, etichetta FBA gestita</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Nessuno spedizioniere ancora, ordine medio</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>CIF</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Il venditore gestisce il nolo mentre costruisci una relazione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Spedizioniere cinese proprio + licenza di export</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>EXW</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Togli il costo logistico quando sai gestirlo da solo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Costi nascosti che gli importatori dimenticano sempre</h2>

          <p>Il prezzo unitario non è mai il prezzo. Ogni volta che un importatore al primo ordine mi manda il suo "affare d\'oro" e chiede perché la merce sia arrivata al 40% in più del previsto, la risposta sono sempre gli stessi cinque costi nascosti. Eccoli, perché non ti colgano di sorpresa.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Demurrage e detention — il cronometro del porto</h3>

          <p>Quando il tuo container arriva, la compagnia marittima ti concede alcuni "giorni franchi" per ritirarlo — in genere 3–7 giorni per il demurrage (il container carico fermo in porto). Una volta che ce l\'hai, hai 5–14 giorni franchi di "detention" per scaricare e restituire la scatola vuota. Supera l\'una o l\'altra finestra e il cronometro parte: <strong>50–150 $ al giorno.</strong> Un fermo doganale di due settimane può aggiungere in silenzio 1.000–2.000 $ al tuo costo franco destino, ed è il modo più comune in cui gli importatori perdono denaro senza accorgersene. La soluzione è la preparazione: allinea doganalista, spedizioniere e appuntamento del camion prima ancora che la nave attraccchi.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Movimentazione al terminale di destinazione e spese locali</h3>

          <p>Anche su una spedizione FOB o CIF, il porto di destinazione ha un mucchio di spese che il preventivo del venditore non include mai: le spese di movimentazione al terminale (THC), le spese di documentazione, la tassa di sicurezza del vettore e il "costo di servizio portuale" che varia da terminale a terminale. Insieme rappresentano <strong>200–500 $ per container</strong> e vengono addebitate all\'importatore all\'arrivo. Chiedi al tuo spedizioniere un preventivo di destinazione <em>tutto incluso</em> in anticipo — quelli che dettagliano ogni voce — così la fattura di arrivo non sarà una sorpresa.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Dazi e IVA sul valore franco destino, non sul prezzo FOB</h3>

          <p>La maggior parte degli importatori sa che i dazi esistono; la maggior parte sottostima la base. Il dazio di importazione è calcolato sul <em>valore in dogana</em>, che nella maggior parte delle giurisdizioni è il prezzo FOB più nolo più assicurazione — essenzialmente il valore CIF — e non il prezzo FOB che hai negoziato con la fabbrica. Poi l\'IVA è addebitata sopra il valore comprensivo di dazi. Quindi il tuo dazio dell\'8% non è l\'8% di 1,80 $; è l\'8% del valore franco destino, e la tua IVA del 21% si somma sopra. Il carico fiscale effettivo è quasi sempre superiore all\'aliquota di dazio dichiarata. Fai modellare il costo franco destino reale dal tuo doganalista prima di impegnarti su un prezzo unitario.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. L\'assicurazione che non hai mai sottoscritto</h3>

          <p>In FOB ed EXW, l\'assicurazione è una tua responsabilità, e la maggior parte degli acquirenti al primo ordine la salta. È un errore. Un container perso o danneggiato senza assicurazione è una perdita totale — hai comunque pagato la fabbrica, e la responsabilità della compagnia marittima è limitata a un importo minuscolo per chilogrammo in base alle convenzioni internazionali. L\'assicurazione merci marittime costa circa <strong>0,3–0,5% del valore della merce</strong> — pochi euro per assicurare qualche migliaio di euro di occhiali. Sottoscrivila. Nel momento in cui possiedi il rischio (FOB a bordo, EXW alla porta), dovresti possedere anche l\'assicurazione.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Il costo di sbagliare il codice HS</h3>

          <p>Gli occhiali da sole rientrano in uno specifico codice del Sistema armonizzato (SA) — in genere 9004.10 per gli occhiali da sole, con sottocodici a seconda del materiale. Sbaglia la classificazione e la dogana riclassificherà la tua merce, spesso a un\'aliquota di dazio più alta, più sanzioni, più i giorni di ritardo (e le spese di demurrage del punto 1) mentre risolvono il problema. Un doganalista competente confermerà il codice SA corretto prima della spedizione. Uno economico copierà semplicemente il codice che compare sulla fattura del fornitore. Non è qui che devi risparmiare 50 $.</p>

          <p>Somma questi cinque elementi e capisci perché una montatura FOB a 1,80 $ arriva a 2,40–2,80 $ una volta nel tuo magazzino — e perché un acquirente che ha confrontato solo prezzi unitari crede di essere stato truffato quando il vero colpevole sono il nolo, i dazi e le spese portuali che non ha mai visto arrivare.</p>

          {/* ═══════ FAQ SECTION ═══════ */}
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
            <h2 className="text-3xl font-bold mb-4">Ottieni un preventivo di costo franco destino, non solo un prezzo unitario</h2>
            <p className="text-xl mb-6 opacity-90">Mandami la tua specifica e il tuo porto di destinazione. Ti darò il prezzo FOB, la stima del nolo e una scomposizione completa del costo franco destino — così saprai esattamente cosa arriva nel tuo magazzino prima di versare un acconto.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Ottieni un preventivo gratuito
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal reparto produttivo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sunglasses-factory-audit-checklist" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Checklist di audit della fabbrica di occhiali</h3>
                <p className="text-gray-600 text-sm">Una checklist di 20 punti per valutare un fornitore prima di versare denaro.</p>
              </Link>
              <Link href="/blog/how-to-choose-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Come scegliere un produttore di occhiali da sole</h3>
                <p className="text-gray-600 text-sm">I criteri di selezione che separano una vera fabbrica da un sito web patinato.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contattaci</h3>
                <p className="text-gray-600 text-sm">Ottieni un preventivo per il tuo ordine all\'ingrosso personalizzato di occhiali da sole.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
