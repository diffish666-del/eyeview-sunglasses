import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Misure della Montatura degli Occhiali da Sole Spiegate: PD, Larghezza del Ponte, Lunghezza delle Aste',
  description: 'Un proprietario di fabbrica spiega le misure delle montature per occhiali da sole — PD, larghezza del ponte, lunghezza delle aste, larghezza della montatura — con dati reali del commercio all’ingrosso, così smetti di ordinare montature che non vanno bene ai tuoi clienti.',
  keywords: ['misure montatura occhiali da sole', 'PD distanza pupillare occhiali da sole', 'larghezza ponte occhiali da sole', 'lunghezza aste occhiali da sole', 'larghezza montatura occhiali da sole', 'guida taglie occhiali da sole ingrosso', 'come misurare montature occhiali da sole', 'guida vestibilità occhiali da sole ingrosso', 'Asian fit vs European fit occhiali da sole', 'dimensioni montature occhiali da sole spiegate'],
  alternates: {
    canonical: '/it/blog/guida-misure-montature-occhiali',
    languages: {
      'en': '/blog/sunglasses-frame-measurements-guide',
      'de': '/de/blog/sonnenbrillen-rahmenmessungen-leitfaden',
      'es': '/es/blog/guia-medidas-monturas-gafas',
      'fr': '/fr/blog/guide-mesures-montures-lunettes',
      'it': '/it/blog/guida-misure-montature-occhiali',
      'pt': '/pt/blog/guia-medidas-armacoes-oculos',
    },
  },
};

const takeaways = [
  'Le misure della montatura non sono solo specifiche tecniche — sono la differenza tra un paio di occhiali da sole che resta sullo scaffale del negozio e uno che viene davvero indossato; se sbagli la larghezza del ponte o la lunghezza delle aste, la tua montatura all’ingrosso da 8 $ diventa inventario invendibile, indipendentemente dalla qualità delle lenti',
  'La Distanza Pupillare (PD) è la misura più trascurata nell’occhialeria all’ingrosso — la maggior parte dei cataloghi di fabbrica elenca la PD della montatura come un unico numero, ma la finestra di tolleranza reale per una vestibilità comoda è solo ±2 mm per occhio, il che significa che una montatura con PD di 64 mm in realtà calza solo visi con PD tra 60 e 68 mm, prima che il disallineamento ottico provochi mal di testa',
  'Gli occhiali da sole Asian Fit non sono uno stratagemma di marketing — esistono perché il ponte nasale asiatico medio è 2–4 mm più basso e 3–5 mm più largo di quello caucasico medio, richiedendo montature con punti di appoggio più bassi, larghezza del ponte inferiore e naselli con maggiore regolazione verticale; se vendi nei mercati asiatici senza capirlo, metà delle tue montature scivolerà giù dal viso dei clienti',
  'La lunghezza delle aste è la dimensione che determina se le tue montature si adatteranno alle teste europee (media 140–145 mm), americane (140–150 mm) o asiatiche (125–140 mm) — un’asta da 145 mm è il default universale più sicuro, ma se punti a una regione specifica devi adattare la tua specifica OEM di conseguenza',
  'L’errore di misura più comune commesso dagli acquirenti all’ingrosso è ordinare montature in base a come appaiono nelle foto invece che in base alle misure — una montatura con lente da 55 mm sembra fantastica su un modello, ma calza comodamente solo il 40% circa dei volti adulti; la larghezza lente da 52 mm è il punto ottimale per una vestibilità universale tra generi e mercati',
];

const quickStats = [
  { label: 'PD universale ottimale della montatura', value: '62–64 mm' },
  { label: 'Tolleranza comfort PD per occhio', value: '±2 mm' },
  { label: 'Lunghezza aste media europea', value: '140–145 mm' },
  { label: 'Lunghezza aste media asiatica', value: '125–140 mm' },
  { label: 'Intervallo standard larghezza ponte', value: '14–24 mm' },
  { label: 'Larghezza lente più comune (universale)', value: '52 mm' },
  { label: 'Ponte nasale asiatico — più basso vs. caucasico', value: '2–4 mm più basso' },
  { label: 'Resi di montature per cattiva vestibilità', value: '12–18% dei resi B2C' },
];

const faqs = [
  {
    question: 'Cosa significano i tre numeri sulle montature degli occhiali da sole (es. 52□18-145)?',
    answer: 'I tre numeri rappresentano lo standard internazionale di misura delle montature: il primo numero (52) è la larghezza della lente in millimetri, misurata orizzontalmente nel punto più largo di una singola lente. Il secondo numero (18) è la larghezza del ponte — la distanza tra le due lenti nel punto più stretto del ponte. Il terzo numero (145) è la lunghezza delle aste, misurata dalla vite della cerniera alla punta dell’asta, inclusa la curva dietro l’orecchio. Insieme, questi tre numeri ti dicono circa l’80% di ciò che devi sapere sulla vestibilità della montatura. Il quarto numero, che alcuni produttori includono, è l’altezza della lente — non sempre stampata, ma fondamentale per lenti progressive o graduate. Quando valuti le schede tecniche delle fabbriche, chiedi sempre tutti e quattro i numeri se hai intenzione di offrire montature predisposte per lenti graduate.',
  },
  {
    question: 'Come si misura la distanza pupillare (PD) per gli occhiali da sole?',
    answer: 'La PD è la distanza in millimetri tra i centri delle due pupille. Esistono due tipi: PD binoculare (distanza tra entrambe le pupille, in genere 54–74 mm negli adulti) e PD monoculare (distanza da ciascuna pupilla al centro del ponte nasale, in genere 27–37 mm per occhio). Per la progettazione della montatura, la relazione critica è: PD della montatura = larghezza lente + larghezza ponte. Quindi una montatura 52□18 ha una PD della montatura di 70 mm. Se il tuo cliente ha una PD binoculare di 62 mm, quella montatura è 8 mm troppo larga — i centri ottici delle lenti saranno disallineati rispetto alle pupille, con possibile affaticamento degli occhi e mal di testa. Come acquirente all’ingrosso, vuoi montature con una PD della montatura entro 4 mm dalla PD più comune nel tuo mercato di riferimento. La maggior parte delle PD degli adulti è concentrata tra 58 e 68 mm, quindi le montature con PD di 62–64 mm coprono la fascia più ampia.',
  },
  {
    question: 'Qual è la differenza tra occhiali da sole Asian Fit ed European Fit?',
    answer: 'Gli occhiali Asian Fit (chiamati anche low-bridge fit o vestibilità universale) presentano tre differenze chiave rispetto alle montature standard europee: (1) I naselli o il ponte sono posizionati 2–4 mm più in basso sulla parte frontale della montatura, perché il ponte nasale asiatico è più basso sul viso. (2) La larghezza del ponte è in genere 1–3 mm più stretta (15–17 mm contro 17–20 mm delle montature europee) perché la struttura ossea nasale asiatica offre meno supporto laterale — un ponte più largo farà scivolare la montatura verso il basso. (3) I naselli, se regolabili, hanno bracci più lunghi con maggiore escursione verticale (8–10 mm di regolazione dell’altezza rispetto ai 5–6 mm delle montature standard). Inoltre, la curvatura della montatura (angolo frontale) è spesso leggermente più piatta (3–5° rispetto al wrap standard di 5–8°) per ridurre la pressione sugli zigomi, che tendono a essere più prominenti nelle strutture facciali asiatiche. Non sono ritocchi da poco — una montatura progettata per volti europei semplicemente non resta in posizione su molti clienti asiatici, creando un continuo ciclo di scivolamento e risistemazione che rovina l’esperienza d’uso.',
  },
  {
    question: 'Quale lunghezza delle aste devo specificare per il mio ordine all’ingrosso di occhiali da sole?',
    answer: 'La lunghezza delle aste è la misura più legata alla regione. Per il mercato europeo, specifica aste da 140–145 mm — calzano circa l’85% degli adulti europei. Per il mercato nordamericano, 140–150 mm è l’intervallo sicuro, con 145 mm come valore più universale. Per i mercati asiatici, accorcia: 125–140 mm, perché la profondità media della testa asiatica (da davanti a dietro) è inferiore alla media europea. Per i mercati mediorientali e dell’Asia meridionale, 140–145 mm generalmente funziona, ma potresti ricevere richieste per 150 mm per taglie di testa più grandi. Se lanci una linea di occhiali da sole a vestibilità universale venduta su più continenti, specifica aste da 145 mm — leggermente lunghe per i volti asiatici e leggermente corte per le teste europee e americane grandi, ma è l’opzione meno sbagliata per un approccio one-size-fits-all. Per gli ordini OEM consiglio sempre di produrre due SKU di lunghezza aste (140 mm e 148 mm) per qualsiasi montatura unisex con larghezza lente superiore a 52 mm — la differenza di costo degli stampi è zero per le montature in acetato e minima per quelle stampate a iniezione, e raddoppi la copertura di vestibilità.',
  },
  {
    question: 'In che modo larghezza del ponte e design dei naselli influenzano il comfort degli occhiali da sole?',
    answer: 'La larghezza del ponte è la misura che gli acquirenti trascurano più spesso, ed è quella che causa il maggior numero di lamentele sul comfort. Il ponte sostiene l’80–90% del peso della montatura, quindi sbagliarlo significa che la montatura scivola (troppo largo) o pizzica il naso (troppo stretto). Le larghezze standard del ponte vanno da 14 mm (stretta, frequente nelle montature in metallo con naselli regolabili) a 24 mm (larga, comune nelle montature fashion oversize in acetato). Il punto ottimale per la maggior parte delle montature unisex per adulti è 17–19 mm con naselli regolabili o un ponte a serratura (keyhole) ben sagomato. Anche il design dei naselli conta allo stesso modo: i volti asiatici hanno bisogno di naselli con maggiore distanza verticale (il nasello si posiziona più in basso rispetto al bordo della montatura), i volti europei di una distanza moderata, e i volti africani traggono spesso beneficio da naselli più distanziati con un angolo più piatto. I ponti in acetato stampati (ponti a sella monopezzo) hanno un aspetto più pulito, ma sono intransigenti sulla vestibilità — se la curva del ponte non corrisponde al profilo del naso del cliente, non c’è alcuna regolazione possibile. I naselli regolabili in metallo su bracci offrono circa 8–10 mm di regolazione della vestibilità e dovrebbero essere il default per qualsiasi montatura all’ingrosso destinata a mercati diversi.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'guida-misure-montature-occhiali';

export default function GuidaMisureMontatureOcchiali() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/it/' },
          { name: 'Blog', href: '/it/blog/' },
          { name: 'Misure della Montatura degli Occhiali da Sole Spiegate' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Misure della Montatura degli Occhiali da Sole Spiegate: PD, Larghezza del Ponte, Lunghezza delle Aste — La Guida per Chi Compra in Fabbrica",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un proprietario di fabbrica spiega le misure delle montature per occhiali da sole — PD, larghezza del ponte, lunghezza delle aste, larghezza della montatura — con dati reali del commercio all’ingrosso, così smetti di ordinare montature che non vanno bene ai tuoi clienti.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Know-How di Fabbrica</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Misure della Montatura degli Occhiali da Sole Spiegate: PD, Larghezza del Ponte, Lunghezza delle Aste
          </h1>
          <p className="text-xl text-gray-600">
            La maggior parte degli acquirenti all’ingrosso sceglie le montature in base a come appaiono in una foto. Io le scelgo in base ai numeri — perché sono le misure a determinare se i tuoi clienti indosseranno davvero questi dannati occhiali. Ecco tutto quello che devi sapere sulle misure delle montature per occhiali da sole, da qualcuno che le produce da 20 anni.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Indice dei Contenuti</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Perché le Misure della Montatura Contano per gli Acquirenti all’Ingrosso</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">PD (Distanza Pupillare) — Cos’è e Perché le Fabbriche Ci Tengono</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Larghezza del Ponte — La Variabile di Vestibilità Nascosta</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Lunghezza delle Aste e Larghezza della Montatura — Trovare la Vestibilità Giusta</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Domande Frequenti</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Dati Rapidi sulle Misure delle Montature" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Perché le Misure della Montatura Contano per gli Acquirenti all’Ingrosso</h2>
          
          <p>Vi racconto la storia di un cliente che ha perso 18.000 $ su un solo container di occhiali da sole.</p>
          
          <p>Era un importatore alle prime armi dalla Germania. Aveva ordinato 3.000 wayfarer in acetato — buona qualità, buone lenti, prezzo competitivo a 6 $ FOB. I campioni erano bellissimi. Mi mandò le foto del disimballaggio, orgogliosissimo. Tre mesi dopo mi chiamò. I resi avevano raggiunto il 22%. I suoi rivenditori gli rimandavano indietro le scatole. Le montature erano troppo larghe per i volti europei — larghezza lente di 55 mm con un ponte da 20 mm. La larghezza totale della montatura risultava di 142 mm, che va bene per un volto americano grande, ma appare comicamente oversize sul maschio europeo medio. I suoi clienti le provavano, ridevano e le rimettevano giù.</p>
          
          <p>Quell’ordine gli costò 18.000 $ di prodotto, 4.200 $ di trasporto e sei mesi di tempo sprecato. Tutto perché nessuno aveva controllato le misure prima della produzione.</p>
          
          <p>Ho visto succedere la stessa cosa dozzine di volte in 20 anni. Gli acquirenti all’ingrosso — soprattutto i nuovi — scelgono le montature in base a foto, stile e colore. Guardano la scheda tecnica, vedono i numeri e pensano "sono solo dettagli tecnici, ci pensa la fabbrica". Non capiscono che le misure della montatura sono <strong>il fattore determinante in assoluto per il sell-through</strong>. Una montatura che non calza il tuo mercato di riferimento non è un prodotto — è inventario morto con una dichiarazione doganale.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Il Vero Costo di Sbagliare le Misure</h3>
          
          <p>Quando ordini montature che non vanno bene ai tuoi clienti, lo paghi in almeno quattro modi:</p>
          
          <p><strong>1. Resi diretti.</strong> Nel commercio elettronico B2C, i tassi di reso degli occhiali per cattiva vestibilità si aggirano in media sul 12–18% — e questo per i marchi che offrono prova virtuale e guide taglie dettagliate. Se sei un grossista che rifornisce negozi al dettaglio, il rivenditore non assorbe quel costo. Te lo rimanda indietro. O peggio: non fa più ordini.</p>
          
          <p><strong>2. Danno al marchio.</strong> Una brutta esperienza di vestibilità crea un cliente che associa il tuo marchio al disagio. Quel cliente non dice "la larghezza del ponte era 2 mm troppo larga". Dice "i tuoi occhiali da sole sono scomodi". E lo racconta a cinque amici. In una categoria in cui il riacquisto dipende quasi interamente dalla soddisfazione di vestibilità, una sola misura sbagliata può distruggere il valore del cliente nel tempo.</p>
          
          <p><strong>3. Inventario morto.</strong> Le montature che non calzano non si possono "sistemare". Non puoi ristampare l’acetato. Non puoi allungare un’asta in titanio. Quell’inventario resta in magazzino, accumulando costi di stoccaggio, finché non lo smaltisci al 40% del costo di approdo. Ho girato i magazzini dei miei acquirenti a Rotterdam, Los Angeles e Dubai — ognuno ha un angolo pieno di "le montature che non calzavano".</p>
          
          <p><strong>4. Opportunità perse.</strong> Ogni dollaro bloccato in montature sbagliate è un dollaro che non puoi spendere per riordinare le montature che vendono davvero. Nell’ingrosso di occhiali da sole, il giro d’inventario è tutto. Un lotto di montature sbagliate rallenta l’intero ciclo di cassa di 60–90 giorni.</p>
          
          <p>Le misure della montatura non sono dettagli facoltativi. Sono la specifica che separa un’attività di importazione redditizia da un’unità di stoccaggio piena di rimpianti. E la prima misura che devi capire è la PD.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">PD (Distanza Pupillare) — Cos’è e Perché le Fabbriche Ci Tengono</h2>
          
          <p>La Distanza Pupillare — PD — è la distanza tra i centri delle due pupille, misurata in millimetri. La PD tipica degli adulti va da 54 mm a 74 mm, con la stragrande maggioranza concentrata tra 58 e 68 mm. Per gli occhiali da sole, una PD di 62–64 mm calza il pubblico adulto più ampio.</p>
          
          <p>Ora, ecco cosa la maggior parte degli acquirenti non capisce: <strong>la PD della montatura è diversa dalla PD personale.</strong></p>
          
          <p>La PD della montatura si calcola come: <strong>Larghezza Lente + Larghezza Ponte.</strong> Se hai una montatura 52□18, la PD della montatura è 70 mm (52 + 18). Ciò significa che il centro ottico della lente sinistra dista 70 mm dal centro ottico della lente destra. Se il tuo cliente ha una PD personale di 62 mm, quei centri ottici sono 8 mm troppo distanti. Ogni volta che guarda attraverso quelle lenti, i suoi occhi si sforzano di 4 mm verso l’esterno per lato per allinearsi al centro ottico.</p>
          
          <p>Per gli occhiali da sole senza lenti graduate, qualche millimetro di disallineamento della PD è di solito tollerabile — le lenti neutre non hanno un centro ottico definito. Ma se vendi montature predisposte per lenti graduate, la PD diventa critica. Un disallineamento di 4 mm o più per occhio provoca affaticamento oculare, mal di testa e visione periferica offuscata. I tuoi clienti daranno la colpa alle lenti — ma il vero problema è nella specifica della montatura.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Intervalli di PD per Mercato — Cosa Dicono i Dati</h3>
          
          <p>In 20 anni di export in oltre 50 paesi, ecco cosa ho osservato sulla distribuzione della PD nei diversi mercati:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Mercato</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">PD media uomo adulto</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">PD media donna adulta</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Intervallo PD montatura sicuro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Nord America</td>
                  <td className="border border-gray-300 px-4 py-2">64–68 mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–64 mm</td>
                  <td className="border border-gray-300 px-4 py-2">63–66 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europa settentrionale</td>
                  <td className="border border-gray-300 px-4 py-2">63–67 mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63 mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europa meridionale</td>
                  <td className="border border-gray-300 px-4 py-2">62–66 mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–62 mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Asia orientale (Cina, Giappone, Corea)</td>
                  <td className="border border-gray-300 px-4 py-2">60–65 mm</td>
                  <td className="border border-gray-300 px-4 py-2">57–62 mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–63 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sud-est asiatico</td>
                  <td className="border border-gray-300 px-4 py-2">59–64 mm</td>
                  <td className="border border-gray-300 px-4 py-2">56–61 mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–62 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Medio Oriente</td>
                  <td className="border border-gray-300 px-4 py-2">63–68 mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63 mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">America Latina</td>
                  <td className="border border-gray-300 px-4 py-2">62–67 mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–63 mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 italic">Sono medie a livello di fabbrica basate sui modelli di ordinazione dei clienti e sul feedback sulla vestibilità raccolto in due decenni — non dati antropologici sottoposti a revisione paritaria, ma abbastanza accurati per progettare montature che calzano clienti reali.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Come Leggere la PD nella Scheda Tecnica di una Fabbrica</h3>
          
          <p>Quando ricevi una scheda tecnica da una fabbrica cinese, la PD di solito compare in una di queste tre forme:</p>
          
          <p><strong>1. PD della montatura.</strong> Indicata come un unico numero, di solito 62–70 mm. È la larghezza lente + la larghezza ponte. Ti dice la distanza centro-centro delle lenti. Se questo numero dista più di 4 mm dalla PD media del tuo mercato di riferimento, la montatura causerà problemi ottici a chi indossa lenti graduate e potrà dare un aspetto strabico o strabuzzato sul viso.</p>
          
          <p><strong>2. Intervallo di decentramento.</strong> Alcune fabbriche migliori indicano l’"intervallo di PD consigliato", come "PD 60–68 mm consigliata". Ti dice l’intervallo di PD dei clienti che possono indossare comodamente la montatura. Una montatura con PD della montatura di 66 mm e un intervallo di decentramento di 60–72 mm è più versatile di una con PD della montatura di 70 mm e intervallo 64–72 mm — più stretto è l’intervallo consigliato, più di nicchia è la vestibilità.</p>
          
          <p><strong>3. Nessuna PD indicata.</strong> Se una fabbrica non indica la PD nella scheda tecnica, chiedila. Se non sanno dirti la PD della montatura entro 24 ore, non ordinare da quella fabbrica. Dico sul serio. Qualsiasi fabbrica che produce davvero occhialeria conosce la PD della montatura di ogni SKU del proprio catalogo. Se non la conoscono o non sanno misurarla, probabilmente sono un’azienda di trading che rivende montature che non hanno progettato.</p>
          
          <p>La regola più semplice che do ai nuovi acquirenti: per una linea di occhiali da sole a vestibilità universale, la PD della montatura dovrebbe essere <strong>62–64 mm</strong>. Copre all’incirca il 70% del mercato adulto globale. Se punti a un target specifico — montature femminili strette, montature maschili oversize, bambini — adatta di conseguenza. Ma per la tua collezione unisex di base, la PD della montatura di 62–64 mm è l’ancora attorno a cui costruire.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Larghezza del Ponte — La Variabile di Vestibilità Nascosta</h2>
          
          <p>Se la PD è la misura su cui gli acquirenti discutono, la larghezza del ponte è quella che ignorano completamente — finché non arrivano i resi.</p>
          
          <p>Il ponte è la parte della montatura che poggia sul naso. Sostiene l’80–90% del peso della montatura. Su una montatura in acetato da 35 grammi, significa circa 30 grammi di pressione costante verso il basso su una striscia di pelle e cartilagine larga forse 6 mm. Sbaglia il ponte, e anche la montatura in titanio più leggera diventa scomoda entro 20 minuti di utilizzo.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Intervalli Standard di Larghezza del Ponte</h3>
          
          <p>La larghezza del ponte è di solito il secondo numero della tripletta standard di misura della montatura (es. la "18" in 52□18-145). L’intervallo del settore va da 14 mm a 24 mm, ma la maggior parte delle montature rientra in queste categorie:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Larghezza del ponte</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Uso tipico</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Mercati</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>14–16 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Montature in metallo con naselli regolabili, aviator, piccole montature femminili in acetato</td>
                  <td className="border border-gray-300 px-4 py-2">Asia, donne petite (tutti i mercati)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>17–19 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acetato unisex universale, la maggior parte dei wayfarer, montature ottiche standard</td>
                  <td className="border border-gray-300 px-4 py-2">Globale — l’intervallo più comune per le montature di largo consumo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>20–22 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Grandi montature maschili in acetato, montature fashion oversize, aviator senza naselli</td>
                  <td className="border border-gray-300 px-4 py-2">Nord America, Europa settentrionale, Medio Oriente — tratti più marcati</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>23–24 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Montature fashion oversize, occhiali da sole a scudo</td>
                  <td className="border border-gray-300 px-4 py-2">Fashion di nicchia — da non usare per la linea all’ingrosso di base se non richiesto</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Design del Ponte: Acetato vs Metallo vs Iniezione</h3>
          
          <p>La sola misura del ponte non ti dice se una montatura calzerà — il <strong>design del ponte</strong> è altrettanto importante. Ci sono tre tipi fondamentali:</p>
          
          <p><strong>Ponte a sella (acetato stampato).</strong> Un unico pezzo di acetato sagomato per poggiare sul naso. Look pulito, nessuna parte mobile. Lo svantaggio: zero regolabilità. Se la curva del ponte non corrisponde al naso del cliente, non c’è nulla da fare. I ponti a sella funzionano al meglio su montature con larghezza del ponte inferiore a 16 mm, dove il naso offre naturalmente più supporto. Per montature sopra i 18 mm, un ponte a sella è un azzardo — calza perfettamente forse il 40% dei volti e male tutti gli altri.</p>
          
          <p><strong>Ponte a serratura (keyhole).</strong> Un ponte in acetato o metallo scolpito che crea una forma "a serratura" — più larga in alto, più stretta nel punto di contatto. Visivamente distintivo, e la forma sagomata offre più punti di contatto di una sella piatta, migliorando la distribuzione del peso. Il design a serratura è stato reso famoso dai wayfarer Ray-Ban e resta la migliore opzione in acetato per montature sopra i 18 mm. Non è regolabile, ma la forma sagomata compensa in parte.</p>
          
          <p><strong>Naselli regolabili (bracci in metallo con cuscinetti in silicone).</strong> È ciò che raccomando per il 90% degli ordini all’ingrosso. Due bracci metallici indipendenti con morbidi cuscinetti in silicone o PVC che possono essere piegati verso l’interno, l’esterno, in alto o in basso. Questo dà a chi indossa o all’ottico circa 8–10 mm di regolazione complessiva della vestibilità — abbastanza per adattarsi a ponti nasali che vanno dallo stretto asiatico al largo europeo. Sì, i naselli regolabili aggiungono 0,30–0,50 $ al costo della montatura rispetto a una sella stampata. Sì, valgono la spesa. La sola flessibilità di vestibilità riduce i resi di una stima del 40–60% rispetto alle montature a ponte fisso, secondo quanto riportano i miei clienti storici.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Il Fattore Asian Fit</h3>
          
          <p>Non puoi parlare onestamente di larghezza del ponte senza affrontare il mercato Asian Fit. Ecco la realtà dalla linea di produzione:</p>
          
          <p>Il ponte nasale asiatico medio si trova 2–4 mm più in basso sul viso ed è 3–5 mm più largo nella struttura ossea rispetto al ponte nasale caucasico medio. Non è un’aneddoto — è misurabile e costante su grandi popolazioni. Le montature progettate per volti europei o americani, con punti di contatto del ponte più alti e larghezze del ponte più strette, non restano in posizione sulla maggior parte dei volti asiatici. La montatura poggerà troppo in alto, le punte delle aste non arriveranno correttamente dietro le orecchie e le lenti staranno troppo vicine agli occhi.</p>
          
          <p>Le montature Asian Fit correggono tutto questo con tre modifiche di design: (1) punto di contatto del ponte più basso sulla parte frontale della montatura, (2) larghezza del ponte leggermente inferiore (15–17 mm invece di 17–19 mm) e (3) naselli con discesa verticale maggiore (i cuscinetti sono posizionati più in basso rispetto al bordo della montatura). Se il 20% o più dei tuoi clienti all’ingrosso vende nei mercati asiatici, ti serve uno SKU Asian Fit nella tua linea. Non cercare di far funzionare una montatura European Fit sui volti asiatici — la geometria non collabora.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Lunghezza delle Aste e Larghezza della Montatura — Trovare la Vestibilità Giusta</h2>
          
          <p>Se la larghezza del ponte determina il comfort, la lunghezza delle aste e la larghezza complessiva della montatura determinano se gli occhiali da sole restano o no sul tuo viso.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Lunghezza delle Aste: La Variabile Regionale</h3>
          
          <p>La lunghezza delle aste si misura dalla vite della cerniera alla punta dell’asta, seguendo la curva dietro l’orecchio. Le lunghezze standard del settore vanno da 125 mm a 155 mm. Ecco cosa dico ai miei clienti all’ingrosso:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Lunghezza delle aste</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Etichetta taglia montatura</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ideale per</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Piccola / Giovani</td>
                  <td className="border border-gray-300 px-4 py-2">Bambini, donne petite, montature femminili asiatiche</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–140 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Piccola–Media</td>
                  <td className="border border-gray-300 px-4 py-2">Unisex asiatico, donne europee, mercato femminile generale</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">140–145 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Media</td>
                  <td className="border border-gray-300 px-4 py-2">Unisex europeo, vestibilità universale globale (default più sicuro)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–150 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Media–Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Uomini nordamericani, grandi taglie maschili europee</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">150–155 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande / XL</td>
                  <td className="border border-gray-300 px-4 py-2">Taglie speciali grandi, big &amp; tall, uomini mediorientali</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Gli errori sulla lunghezza delle aste sono brutali perché sono immediatamente evidenti a chi indossa. Un’asta troppo corta non raggiunge l’orecchio — la montatura sta in avanti sul viso, le lenti sono troppo vicine agli occhi e tutto sembra e risulta sbagliato. Un’asta troppo lunga supera l’orecchio e la curva finisce sul collo invece che dietro l’orecchio, facendo scivolare la montatura in avanti a ogni movimento della testa. Entrambi gli scenari sono decisivi per il cliente.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Come Specificare la Lunghezza delle Aste nel Tuo Ordine OEM</h3>
          
          <p>Quando fai un ordine OEM a una fabbrica cinese, specifichi la lunghezza delle aste nel tech pack o nell’ordine d’acquisto. Ecco le regole che do ai miei clienti:</p>
          
          <p><strong>Per montature in acetato:</strong> Specificare una lunghezza delle aste diversa è facile — la fabbrica taglia l’asta da un’asta grezza in acetato più lunga. Nessun cambio di stampo richiesto. Se chiedi aste da 145 mm su una montatura che di solito esce con 140 mm, è un semplice aggiustamento di taglio. Impatto sui costi: zero. Questo significa che puoi ordinare la stessa montatura in acetato con due lunghezze di aste per mercati diversi senza sovrapprezzo.</p>
          
          <p><strong>Per montature stampate a iniezione (TR90, policarbonato, nylon):</strong> La lunghezza delle aste è fissata dallo stampo. Cambiare la lunghezza richiede un nuovo inserto di stampo, che costa 200–400 $ per inserto dell’asta. Per una fabbrica con stampi a 4 cavità, sono 800–1.600 $ per modello di montatura per aggiungere una seconda lunghezza di aste. Questo costo ha senso solo se ordini 3.000+ unità per variante di lunghezza — sotto quel volume, assorbi il costo dello stampo nel primo ciclo di produzione.</p>
          
          <p><strong>Per montature in metallo:</strong> La lunghezza delle aste è determinata dall’asta grezza in metallo e dalla matrice che piega la curva dell’orecchio. Cambiare la lunghezza richiede una nuova matrice (100–200 $) e talvolta aste grezze diverse. Relativamente economico rispetto agli stampi a iniezione, ma vale comunque la pena confermare il costo prima di modificare le specifiche.</p>
          
          <p>La mia raccomandazione per la maggior parte degli acquirenti all’ingrosso: se ordini acetato, prendi due lunghezze di aste (140 mm e 148 mm) e dividi l’ordine 40/60 o 50/50. Il costo è identico e coprirai il 90% della tua base clienti. Per le montature stampate a iniezione, ordina aste da 145 mm come default universale, a meno che tu non abbia dati di vendita regionali che ti dicano il contrario.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Larghezza Complessiva della Montatura — La Somma di Tutte le Parti</h3>
          
          <p>La larghezza complessiva della montatura non è una delle tre misure standard, ma è il numero più pratico per la vestibilità. Si calcola come: <strong>(Larghezza Lente × 2) + Larghezza Ponte + circa 3–5 mm per lo spessore del cerchio della montatura su ciascun lato.</strong></p>
          
          <p>Ad esempio: una montatura 52□18-145 con uno spessore del cerchio di 2 mm per lato ha una larghezza complessiva di circa (52 × 2) + 18 + (2 × 2) = 126 mm. È la distanza orizzontale totale della montatura da una cerniera dell’asta all’altra.</p>
          
          <p>Ecco una guida indicativa alle taglie basata sulla larghezza complessiva della montatura:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Larghezza complessiva della montatura</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Taglia</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Vestibilità tipica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">115–125 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Piccola</td>
                  <td className="border border-gray-300 px-4 py-2">Donne petite, giovani, volti stretti</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Media</td>
                  <td className="border border-gray-300 px-4 py-2">Adulti unisex medi — la taglia più venduta al mondo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–145 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Uomini medio-grandi, fashion femminile oversize</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–155 mm</td>
                  <td className="border border-gray-300 px-4 py-2">XL</td>
                  <td className="border border-gray-300 px-4 py-2">Uomini grandi, taglie speciali</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>È nell’intervallo di larghezza complessiva 125–135 mm che avviene il 60–70% delle vendite globali di occhiali da sole. Una montatura con larghezza lente di 52 mm e ponte di 17–19 mm rientra quasi esattamente in questo intervallo. Se stai lanciando una nuova linea all’ingrosso e non hai dati di vendita regionali per guidare le tue scelte di taglia, parti con montature nella zona 125–130 mm di larghezza complessiva con aste da 145 mm. Questa combinazione calza il maggior numero di volti nel maggior numero di mercati con il minor numero di lamentele.</p>

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
            <h2 className="text-3xl font-bold mb-4">Hai Bisogno di Specifiche di Misura della Montatura per il Tuo Mercato?</h2>
            <p className="text-xl mb-6 opacity-90">Dimmi la tua regione di riferimento e la demografia dei tuoi clienti. Ti consiglierò le specifiche esatte di PD, larghezza del ponte, lunghezza delle aste e larghezza della montatura che massimizzano la vestibilità e minimizzano i resi — basate su 20 anni di dati di fabbrica, non su supposizioni.</p>
            <Link
              href="/it/contatti/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Richiedi un Preventivo Gratuito
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dalla Fabbrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/it/blog/confronto-materiali-montature" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metallo: Guida ai Materiali delle Montature</h3>
                <p className="text-gray-600 text-sm">Quale materiale per la montatura scegliere in base a vestibilità, durata e costo all’ingrosso.</p>
              </Link>
              <Link href="/it/blog/guida-occhiali-forma-viso" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guida agli Occhiali in Base alla Forma del Viso</h3>
                <p className="text-gray-600 text-sm">Abbina le misure della montatura alla forma del viso per un miglior sell-through.</p>
              </Link>
              <Link href="/it/contatti/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contattaci</h3>
                <p className="text-gray-600 text-sm">Richiedi un preventivo per il tuo ordine personalizzato di occhiali da sole all’ingrosso.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
