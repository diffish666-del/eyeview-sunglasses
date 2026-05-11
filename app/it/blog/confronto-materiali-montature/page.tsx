import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TR90 vs Acetato vs Metallo: Quale Materiale per la Montatura È Giusto per il Tuo Brand?',
  description: 'Un proprietario di fabbrica analizza le montature in TR90, acetato e metallo — dati reali sui costi, confronti di peso, test di resistenza e quale materiale funziona meglio per diverse strategie di brand.',
  keywords: 'confronto materiali montature occhiali, occhiali TR90, montature acetato, montature metallo, TR90 vs acetato, costo materiali montature',
  alternates: {
    canonical: '/it/blog/confronto-materiali-montature',
    languages: {
      'en': '/blog/frame-material-comparison',
      'it': '/it/blog/confronto-materiali-montature',
    },
  },
}

export default function ConfrontoMaterialiMontaturePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "TR90 vs Acetato vs Metallo: Quale Materiale per la Montatura È Giusto per il Tuo Brand?",
          "datePublished": "2026-05-03",
          "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un proprietario di fabbrica analizza le montature in TR90, acetato e metallo — dati reali sui costi, confronti di peso, resistenza e quale materiale si adatta al tuo brand.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/confronto-materiali-montature" },
          "inLanguage": "it"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Cos'è il TR90 e perché viene usato negli occhiali da sole?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il TR90 è una poliammide termoplastica (polimero a base di nylon) sviluppata originariamente per uso medico e militare. È estremamente leggero — circa 15-20 grammi per una montatura completa — e praticamente infrangibile nell'uso normale. È diventato il materiale preferito per occhiali sportivi e lifestyle perché si flette invece di rompersi, resiste al sudore e ai prodotti chimici, e costa $3-8 per montatura all'ingrosso." }
            },
            {
              "@type": "Question",
              "name": "L'acetato è migliore del TR90 per gli occhiali da sole?",
              "acceptedAnswer": { "@type": "Answer", "text": "Dipende dal posizionamento del tuo brand. L'acetato ha un aspetto e una sensazione più premium — colori più ricchi, pattern più profondi, un peso maggiore che comunica qualità. Ma il TR90 è più leggero, più resistente e più economico. Se stai costruendo un brand di moda o lusso, l'acetato vince. Se punti a clienti sportivi, outdoor o attenti al prezzo, il TR90 è la scelta migliore." }
            },
            {
              "@type": "Question",
              "name": "Quanto costano i diversi materiali delle montature all'ingrosso?",
              "acceptedAnswer": { "@type": "Answer", "text": "Prezzi reali di fabbrica: le montature in TR90 vanno da $3-8 per paio, quelle in acetato costano $5-11, e quelle in metallo variano da $8-22 a seconda della lega e della costruzione. Questi sono costi solo per la montatura — aggiungi $1,50-8 per le lenti a seconda del tipo e dei rivestimenti." }
            },
            {
              "@type": "Question",
              "name": "Quale materiale per montature è il più resistente?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il TR90 vince sulla resistenza agli urti — può flettersi oltre 90 gradi senza rompersi e sopravvive se ci si siede sopra, se viene calpestato o fatto cadere ripetutamente. Il metallo è rigido e può deformarsi permanentemente o perdere la forma. L'acetato è a metà strada — è robusto ma può creparsi con impatti forti. Per la resistenza nell'uso attivo, il TR90 è il re." }
            },
            {
              "@type": "Question",
              "name": "Posso combinare diversi materiali nella mia linea di occhiali?",
              "acceptedAnswer": { "@type": "Answer", "text": "Assolutamente — e la maggior parte dei brand di successo fa esattamente questo. Un brand tipico potrebbe avere montature sportive in TR90 a $29-49 al dettaglio, montature fashion in acetato a $79-149 e un paio di aviator in metallo a $99-179. Combinare i materiali ti permette di coprire diversi punti di prezzo e segmenti di clientela senza diluire il tuo brand." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Materiali</span>
            <span>3 maggio 2026</span>
            <span>•</span>
            <span>14 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TR90 vs Acetato vs Metallo: Quale Materiale per la Montatura È Giusto per il Tuo Brand?
          </h1>
          <p className="text-xl text-gray-600">
            Ogni settimana qualcuno mi chiede: &quot;Jacky, quale materiale per la montatura dovrei usare?&quot;
            Dopo 20 anni e circa 12 milioni di montature, ecco la risposta vera — con dati reali sui costi dal nostro reparto produzione.
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
            <li><a href="#perche-il-materiale-conta" className="text-primary-600 hover:underline">Perché il Materiale della Montatura Conta Più di Quanto Pensi</a></li>
            <li><a href="#tr90" className="text-primary-600 hover:underline">TR90: L&apos;Atleta</a></li>
            <li><a href="#acetato" className="text-primary-600 hover:underline">Acetato: L&apos;Icona della Moda</a></li>
            <li><a href="#metallo" className="text-primary-600 hover:underline">Metallo: Il Classico</a></li>
            <li><a href="#tabella-confronto" className="text-primary-600 hover:underline">Tabella di Confronto</a></li>
            <li><a href="#costi-reali" className="text-primary-600 hover:underline">Costi Reali dal Reparto Produzione</a></li>
            <li><a href="#prezzi-retail" className="text-primary-600 hover:underline">Strategia di Prezzo al Dettaglio per Materiale</a></li>
            <li><a href="#casi-duso" className="text-primary-600 hover:underline">Quale Materiale per Quale Brand?</a></li>
            <li><a href="#combinare-materiali" className="text-primary-600 hover:underline">La Mossa Intelligente: Combina i Tuoi Materiali</a></li>
            <li><a href="#domande" className="text-primary-600 hover:underline">Domande che Mi Fanno Ogni Settimana</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Il mese scorso mi ha chiamato una proprietaria di brand da Portland. Andava avanti e indietro tra TR90 e acetato da sei settimane.
            Il suo designer voleva l&apos;acetato. Il suo commercialista voleva il TR90. I suoi follower su Instagram continuavano a commentare &quot;adoro le vibes metalliche&quot;
            sulle sue moodboard. Era bloccata.
          </p>
          <p>
            Le ho detto quello che dico a tutti: non esiste un materiale per montature universalmente &quot;migliore&quot;. Esiste solo il materiale migliore
            <em> per il tuo brand, i tuoi clienti e il tuo budget</em>. E dopo due decenni a piegare, rompere e
            costruire montature con ogni materiale sul mercato, posso dirti esattamente come fare questa scelta.
          </p>

          <h2 id="perche-il-materiale-conta" className="text-3xl font-bold mt-16 mb-6">Perché il Materiale della Montatura Conta Più di Quanto Pensi</h2>
          <p>
            Ecco qualcosa che mi ha sorpreso all&apos;inizio della mia carriera: i clienti di solito non sanno nominare il materiale dei
            loro occhiali da sole. Non entrano in un negozio dicendo &quot;Vorrei un paio di montature in poliammide termoplastica, per favore.&quot;
          </p>
          <p>
            Ma <em>sentono</em> la differenza all&apos;istante. Prendono in mano un paio e in tre secondi hanno già emesso un
            giudizio: &quot;questi sembrano economici&quot; o &quot;questi sembrano costosi.&quot; Quella reazione istintiva? È quasi interamente legata al materiale.
            Il peso nella mano. La flessibilità quando si aprono le aste. Il suono che fa la cerniera. La texture sulla pelle.
          </p>

          <h2 id="tr90" className="text-3xl font-bold mt-16 mb-6">TR90: L&apos;Atleta</h2>
          <p>
            <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Il TR90 è una poliammide termoplastica</a> —
            fondamentalmente un nylon super-ingegnerizzato. È stato sviluppato originariamente per apparecchiature mediche e applicazioni militari dove
            serviva qualcosa che non si rompesse, non irritasse la pelle e non pesasse praticamente nulla. L&apos;industria dell&apos;eyewear lo ha preso in prestito,
            e ora è ovunque.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cosa Fa Bene il TR90</h3>
          <p>
            <strong>Peso:</strong> Una montatura completa in TR90 pesa 15-20 grammi. Per riferimento, è circa il peso di quattro
            monete in tasca. Ho clienti i cui consumatori indossano montature TR90 per 14 ore al giorno e dimenticano di averle addosso.
            Nessun segno rosso sul naso, nessun punto dolente dietro le orecchie.
          </p>
          <p>
            <strong>Durabilità:</strong> Tengo una montatura in TR90 sulla scrivania per le demo. La piego, la torco, ci mi siedo sopra,
            la lancio attraverso la stanza. Lo faccio da tre anni con lo stesso paio. Funziona ancora perfettamente. Il TR90 ha
            quella che gli ingegneri chiamano &quot;memoria&quot; — puoi deformarlo e torna alla forma originale.
          </p>
          <p>
            <strong>Resistenza chimica:</strong> Sudore, crema solare, acqua salata, repellente per insetti — niente di tutto ciò influisce sul TR90.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">TR90 in Breve:</h3>
            <ul className="text-blue-800 space-y-1">
              <li><strong>Peso montatura:</strong> 15-20g</li>
              <li><strong>Costo di fabbrica:</strong> $3-8 per montatura</li>
              <li><strong>Fascia retail tipica:</strong> $19-69</li>
              <li><strong>Velocità di produzione:</strong> Veloce — stampaggio a iniezione in secondi</li>
              <li><strong>Ideale per:</strong> Sport, outdoor, bambini, brand value</li>
              <li><strong>Test di flessione:</strong> Si piega oltre 90° senza rompersi</li>
            </ul>
          </div>

          <h2 id="acetato" className="text-3xl font-bold mt-16 mb-6">Acetato: L&apos;Icona della Moda</h2>
          <p>
            L&apos;acetato è il materiale che ha costruito l&apos;industria dell&apos;eyewear di lusso. Quando pensi ai Ray-Ban Wayfarer,
            alle montature Tom Ford o agli occhiali oversize Celine — quello è acetato. È fatto con fibre di cotone
            e pasta di legno trasformate in lastre di acetato di cellulosa, che vengono poi tagliate, sagomate e lucidate a mano.
            Il migliore viene da <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Mazzucchelli in Italia</a>,
            che lo producono dal 1849.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cosa Fa Bene l&apos;Acetato</h3>
          <p>
            <strong>Estetica:</strong> Nient&apos;altro si avvicina. L&apos;acetato ha profondità. Tieni una buona montatura in acetato tartarugato
            controluce e vedrai strati di ambra, marrone e oro che turbinano attraverso il materiale —
            ogni paio leggermente diverso. Non è un pattern stampato; è letteralmente integrato nel materiale.
          </p>
          <p>
            <strong>Gamma colori:</strong> Oltre 200 colori e pattern, dal nero classico a design multi-strato con
            colori interni ed esterni contrastanti. Trasparente, opaco, sfumato, marmorizzato — l&apos;acetato può fare tutto.
          </p>
          <p>
            <strong>Percezione premium:</strong> L&apos;acetato ha peso — 25-35 grammi per una montatura tipica. Si riscalda
            a temperatura corporea. Fa un &quot;click&quot; soddisfacente quando le cerniere si chiudono. Questi sono dettagli minimi, ma
            si sommano in una sensazione di qualità che giustifica prezzi premium.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Acetato in Breve:</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Peso montatura:</strong> 25-35g</li>
              <li><strong>Costo di fabbrica:</strong> $5-11 per montatura</li>
              <li><strong>Fascia retail tipica:</strong> $49-199</li>
              <li><strong>Velocità di produzione:</strong> Lenta — processo multi-giorno per montatura</li>
              <li><strong>Ideale per:</strong> Moda, lifestyle, brand premium e lusso</li>
              <li><strong>Test di flessione:</strong> Moderato — resiste alla piegatura, può creparsi sotto forza</li>
            </ul>
          </div>

          <h2 id="metallo" className="text-3xl font-bold mt-16 mb-6">Metallo: Il Classico</h2>
          <p>
            Le montature in metallo esistono dal 1700. Benjamin Franklin indossava occhiali in metallo. L&apos;aviator —
            probabilmente la forma di occhiali da sole più iconica di sempre — è una montatura in metallo.
          </p>
          <p>
            Gli occhiali da sole in metallo di oggi usano acciaio inossidabile, titanio, alluminio, leghe di nichel o
            Monel (una miscela nichel-rame). Ogni lega ha proprietà diverse, e la scelta influisce drasticamente
            sia sulla sensazione che sul costo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cosa Fa Bene il Metallo</h3>
          <p>
            <strong>Profili sottili ed eleganti:</strong> Il metallo permette di creare montature incredibilmente sottili.
            Un design wire-frame in metallo può essere spesso 1-2mm — provaci con acetato o TR90 e si spezzerebbe.
            Se l&apos;estetica del tuo brand è minimalista, sleek o architettonica, il metallo è il tuo materiale.
          </p>
          <p>
            <strong>Fascino senza tempo:</strong> Gli aviator in metallo sono di moda da 90 anni e continuano. Le stesse forme base in metallo
            si vendono decennio dopo decennio.
          </p>
          <p>
            <strong>Percezione premium:</strong> Le montature in metallo sembrano costose. Il tocco fresco dell&apos;acciaio inossidabile spazzolato,
            la flessibilità del titanio, la lucentezza del tono oro lucidato — sono segnali sensoriali che giustificano
            prezzi premium.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-purple-900 mb-2">Metallo in Breve:</h3>
            <ul className="text-purple-800 space-y-1">
              <li><strong>Peso montatura:</strong> 12-35g (varia in base alla lega)</li>
              <li><strong>Costo di fabbrica:</strong> $8-22 per montatura</li>
              <li><strong>Fascia retail tipica:</strong> $59-249</li>
              <li><strong>Velocità di produzione:</strong> Media — fabbricazione multi-step</li>
              <li><strong>Ideale per:</strong> Brand classici, minimalisti, premium, professionali</li>
              <li><strong>Test di flessione:</strong> Basso — si piega permanentemente sotto forza</li>
            </ul>
          </div>

          <h2 id="tabella-confronto" className="text-3xl font-bold mt-16 mb-6">Tabella di Confronto</h2>
          <p>
            Ecco il cheat sheet che avrei voluto avere quando ho iniziato in questo business.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Fattore</th>
                  <th className="px-6 py-4 text-left">TR90</th>
                  <th className="px-6 py-4 text-left">Acetato</th>
                  <th className="px-6 py-4 text-left">Metallo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Peso Montatura</td><td className="px-6 py-4">15-20g</td><td className="px-6 py-4">25-35g</td><td className="px-6 py-4">12-35g</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Costo Fabbrica (solo montatura)</td><td className="px-6 py-4">$3-8</td><td className="px-6 py-4">$5-11</td><td className="px-6 py-4">$8-22</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Prezzo Retail Tipico</td><td className="px-6 py-4">$19-69</td><td className="px-6 py-4">$49-199</td><td className="px-6 py-4">$59-249</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Resistenza agli Urti</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Flessibilità</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Look/Sensazione Premium</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Opzioni Colore</td><td className="px-6 py-4">~40 colori solidi</td><td className="px-6 py-4">200+ pattern e colori</td><td className="px-6 py-4">5-8 toni metallici</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Velocità Produzione</td><td className="px-6 py-4">Veloce (secondi per montatura)</td><td className="px-6 py-4">Lenta (giorni per montatura)</td><td className="px-6 py-4">Media (ore per montatura)</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Resistenza Chimica</td><td className="px-6 py-4">Eccellente</td><td className="px-6 py-4">Moderata</td><td className="px-6 py-4">Varia in base alla lega</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Regolabilità</td><td className="px-6 py-4">Limitata</td><td className="px-6 py-4">Buona (con calore)</td><td className="px-6 py-4">Eccellente</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Rischio Allergie</td><td className="px-6 py-4">Molto basso</td><td className="px-6 py-4">Molto basso</td><td className="px-6 py-4">Moderato (nichel)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Ideale Per</td><td className="px-6 py-4">Sport, outdoor, bambini, value</td><td className="px-6 py-4">Moda, lifestyle, lusso</td><td className="px-6 py-4">Classico, minimalista, premium</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="costi-reali" className="text-3xl font-bold mt-16 mb-6">Costi Reali dal Reparto Produzione</h2>
          <p>
            Ecco i numeri che nessun altro pubblica. Questi sono costi di produzione reali dalla nostra
            fabbrica — non stime, non medie, ma quello che pagherai quando fai un ordine.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Costi Montatura TR90</h3>
          <ul>
            <li><strong>Granuli TR90 grezzi:</strong> $0,80-1,20 di materiale per montatura</li>
            <li><strong>Stampaggio a iniezione:</strong> $0,50-1,00 (tempo ciclo 30-60 secondi)</li>
            <li><strong>Cerniere:</strong> $0,30-0,80 (cerniere a molla aggiungono $0,40)</li>
            <li><strong>Trattamento superficiale:</strong> $0,20-0,50 (rivestimento opaco, soft-touch, ecc.)</li>
            <li><strong>Assemblaggio e QC:</strong> $0,40-0,80</li>
            <li><strong>Applicazione logo:</strong> $0,10-0,30</li>
            <li><strong>Costo totale montatura:</strong> $3-8 a seconda della complessità</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Costi Montatura Acetato</h3>
          <ul>
            <li><strong>Lastra di acetato:</strong> $1,50-3,00 per montatura (il Mazzucchelli italiano aggiunge $1-2 rispetto all&apos;acetato cinese)</li>
            <li><strong>Taglio CNC:</strong> $0,60-1,00</li>
            <li><strong>Burattatura e lucidatura:</strong> $0,80-1,50 (qui avviene la magia — 24-48 ore di burattatura danno all&apos;acetato la sua lucentezza caratteristica)</li>
            <li><strong>Cerniere:</strong> $0,40-1,00 (cerniere a cinque cilindri per il premium, tre cilindri per lo standard)</li>
            <li><strong>Finitura a mano:</strong> $0,50-1,50</li>
            <li><strong>Assemblaggio e QC:</strong> $0,50-1,00</li>
            <li><strong>Costo totale montatura:</strong> $5-11 a seconda della provenienza dell&apos;acetato e della complessità</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Costi Montatura Metallo</h3>
          <ul>
            <li><strong>Filo/lamiera metallica:</strong> $1,50-5,00 (acciaio inossidabile al minimo, titanio al massimo)</li>
            <li><strong>Stampaggio/pressofusione:</strong> $1,00-3,00</li>
            <li><strong>Saldatura:</strong> $0,80-1,50</li>
            <li><strong>Placcatura:</strong> $1,00-3,00 (placcatura IP per durabilità, PVD per finitura di lusso)</li>
            <li><strong>Naselli e viti:</strong> $0,30-0,80</li>
            <li><strong>Lucidatura:</strong> $0,60-1,50</li>
            <li><strong>Assemblaggio e QC:</strong> $0,80-1,50</li>
            <li><strong>Costo totale montatura:</strong> $8-22 a seconda della lega e della finitura</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Ricorda: Questi Sono Costi Solo per la Montatura</h3>
            <p className="text-amber-800">
              Aggiungi $1,50-8 per paio per le lenti (UV400 base al minimo, CR-39 polarizzate al massimo),
              $0,30-1,50 per il packaging, e $0,50-2,00 per la spedizione per unità. Il tuo costo totale consegnato per paio
              è tipicamente il 40-60% più alto del solo costo della montatura.
            </p>
          </div>

          <h2 id="prezzi-retail" className="text-3xl font-bold mt-16 mb-6">Strategia di Prezzo al Dettaglio per Materiale</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Strategia Retail TR90</h3>
          <p>
            Costo consegnato: $6-14 per paio. Sweet spot retail: $29-59. Questo ti dà un markup 4-5x, che è
            salutare per i brand DTC. A $69+ al dettaglio, i clienti iniziano a confrontare le tue montature in TR90 con opzioni in acetato
            allo stesso prezzo — e l&apos;acetato sembra più premium. Mantieni il TR90 nella fascia value-to-midrange.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Strategia Retail Acetato</h3>
          <p>
            Costo consegnato: $9-18 per paio. Sweet spot retail: $79-149. Qui è dove vivono la maggior parte dei brand di
            eyewear indipendenti — ed è una fascia comprovata. Acetato italiano con lenti polarizzate? Puoi
            spingerti fino a $149-199 al dettaglio se il tuo branding lo supporta.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Strategia Retail Metallo</h3>
          <p>
            Costo consegnato: $14-32 per paio. Sweet spot retail: $89-179. Il metallo ti dà la fascia di prezzo più ampia
            perché la scelta della lega crea enormi differenze di costo. Una montatura base in acciaio inossidabile
            a $89 al dettaglio e una in titanio a $249 possono essere entrambe redditizie.
          </p>

          <h2 id="casi-duso" className="text-3xl font-bold mt-16 mb-6">Quale Materiale per Quale Brand?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 1: Brand Sport/Outdoor</h3>
          <p>
            <strong>Scegli TR90.</strong> Senza dubbio. Un brand di ciclismo dal Colorado ci ha chiesto montature che
            sopravvivono alle cadute, non scivolano col sudore e non pesano quasi nulla. Gli abbiamo fatto una montatura
            avvolgente in TR90 con naselli e terminali in gomma. Costo: $5,50 per montatura. Vendono a $49.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 2: Brand Moda/Lifestyle</h3>
          <p>
            <strong>Scegli acetato.</strong> Un brand DTC di Brooklyn voleva montature chunky e audaci in colorazioni
            stagionali. Abbiamo trovato lastre di acetato personalizzate — una stagione era verde smeraldo con pagliuzze d&apos;oro,
            un&apos;altra era rosa cipria. Le montature sembrano costare $300. Vendono a $129.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 3: Brand Minimalista/Professionale</h3>
          <p>
            <strong>Scegli metallo.</strong> Un brand scandinavo voleva montature ultra-sottili e architettoniche in
            argento spazzolato e nero opaco. Gliele abbiamo fatte in acciaio inossidabile con aste in beta-titanio giapponese.
            Pulite, precise, eleganti. Vendono a $159.
          </p>

          <h2 id="combinare-materiali" className="text-3xl font-bold mt-16 mb-6">La Mossa Intelligente: Combina i Tuoi Materiali</h2>
          <p>
            I migliori brand non scelgono un solo materiale — li usano tutti e tre strategicamente. Ecco
            una struttura di collezione che raccomando ai nuovi proprietari di brand:
          </p>
          <ul>
            <li><strong>2-3 modelli TR90 ($29-49 retail):</strong> Il tuo entry-level. Porta i clienti nella porta.
            Modelli sportivi e casual che vendono su funzione e valore.</li>
            <li><strong>3-4 modelli acetato ($79-129 retail):</strong> La tua linea core. Design fashion-forward
            con colorazioni stagionali. Da qui viene la maggior parte del tuo fatturato.</li>
            <li><strong>1-2 modelli metallo ($99-179 retail):</strong> Il tuo livello premium. Forme classiche che
            danno al tuo brand un effetto alone &quot;facciamo eyewear serio&quot;.</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Hai Bisogno di Aiuto per Scegliere?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Mandami il tuo concetto di brand e il prezzo retail target. Ti dirò esattamente quale
              materiale — o combinazione di materiali — ti dà il miglior prodotto al tuo punto di prezzo.
              Nessun costo, nessun obbligo.
            </p>
            <Link href="/it/contatto" className="btn-primary">
              Ottieni una Raccomandazione Gratuita sui Materiali
            </Link>
          </div>

          <h2 id="domande" className="text-3xl font-bold mt-16 mb-6">Domande che Mi Fanno Ogni Settimana</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Cos&apos;è il TR90 e perché viene usato negli occhiali da sole?</h3>
              <p className="text-gray-600">
                Il TR90 è una poliammide termoplastica — un tipo di polimero a base di nylon sviluppato originariamente per
                applicazioni mediche e militari. Pesa circa 15-20 grammi per una montatura completa ed è
                praticamente infrangibile nell&apos;uso normale. È il preferito per occhiali sportivi e lifestyle
                perché si flette invece di rompersi, resiste al sudore e ai prodotti chimici, e costa $3-8 per
                montatura all&apos;ingrosso.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">L&apos;acetato è migliore del TR90 per gli occhiali da sole?</h3>
              <p className="text-gray-600">
                Dipende da cosa vendi. L&apos;acetato ha un aspetto e una sensazione più premium — colori più ricchi,
                pattern più profondi, un peso soddisfacente che comunica qualità. Il TR90 è più leggero, più resistente e
                più economico. Stai costruendo un brand di moda? Acetato. Un brand sportivo o value? TR90.
                Una collezione completa? Usa entrambi.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto costano i diversi materiali all&apos;ingrosso?</h3>
              <p className="text-gray-600">
                Direttamente dal nostro reparto produzione: montature TR90 $3-8 per paio, acetato $5-11,
                e metallo da $8-22 a seconda della lega. Sono prezzi solo montatura — aggiungi
                $1,50-8 per lenti, rivestimenti e assemblaggio.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quale materiale è il più resistente?</h3>
              <p className="text-gray-600">
                Il TR90 vince sulla resistenza agli urti — si flette oltre 90° senza rompersi e sopravvive se ci si siede sopra,
                viene calpestato e fatto cadere. Il metallo è rigido e può deformarsi permanentemente. L&apos;acetato è robusto ma può
                creparsi con impatti forti. Per l&apos;uso attivo e la resistenza, il TR90 è il re.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Posso combinare diversi materiali nella mia linea?</h3>
              <p className="text-gray-600">
                Dovresti assolutamente. La maggior parte dei brand di successo ha montature sportive in TR90 a $29-49,
                montature fashion in acetato a $79-149 e classici in metallo a $99-179. Combinare i materiali ti permette di coprire
                più punti di prezzo e tipi di clienti senza diluire il tuo brand.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM Occhiali da Sole: Guida Completa</h3>
                <p className="text-gray-600 text-sm">La versione onesta di OEM vs ODM — da qualcuno che sta nel reparto produzione dal 2006.</p>
              </Link>
              <Link href="/it/blog/guida-lenti-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guida alle Lenti per Occhiali da Sole: Tutto Quello che Devi Sapere</h3>
                <p className="text-gray-600 text-sm">Le montature attirano l&apos;attenzione, ma le lenti fanno il prodotto. Ecco l&apos;analisi completa.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
