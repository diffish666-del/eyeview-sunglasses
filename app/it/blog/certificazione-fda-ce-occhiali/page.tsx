import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificazione FDA e CE per Occhiali da Sole: Guida Completa alla Conformità',
  description: 'Un proprietario di fabbrica spiega la registrazione FDA, la marcatura CE, i test UV e gli standard ANSI per gli occhiali da sole. Guida passo passo alla conformità per vendere eyewear negli USA, UE e nel mondo.',
  keywords: 'certificazione FDA occhiali da sole, marcatura CE occhiali, conformità eyewear, test UV occhiali, ANSI Z80.3, EN ISO 12312-1, normative occhiali da sole',
  alternates: {
    canonical: '/it/blog/certificazione-fda-ce-occhiali',
    languages: {
      'en': '/blog/fda-ce-certification-sunglasses',
      'it': '/it/blog/certificazione-fda-ce-occhiali',
    },
  },
}

export default function CertificazioneFdaCePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Certificazione FDA e CE per Occhiali da Sole: Guida Completa alla Conformità",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un proprietario di fabbrica spiega la registrazione FDA, la marcatura CE, i test UV e i requisiti di conformità per vendere occhiali da sole nel mondo.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/certificazione-fda-ce-occhiali" },
          "inLanguage": "it"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Gli occhiali da sole hanno bisogno dell'approvazione FDA per essere venduti negli USA?", "acceptedAnswer": { "@type": "Answer", "text": "Gli occhiali da sole non hanno bisogno dell'approvazione FDA ma devono essere conformi. La FDA classifica gli occhiali da sole come dispositivi medici (Classe I) sotto 21 CFR 886.5850. Produttori e importatori devono registrare il loro stabilimento presso la FDA e elencare i loro prodotti. Le lenti devono anche soddisfare i requisiti di resistenza agli urti sotto 21 CFR 801.410." } },
            { "@type": "Question", "name": "Cos'è la marcatura CE per gli occhiali da sole?", "acceptedAnswer": { "@type": "Answer", "text": "La marcatura CE indica che gli occhiali da sole sono conformi ai requisiti di sicurezza, salute e ambiente dell'UE. Per gli occhiali da sole, lo standard chiave è EN ISO 12312-1, che copre protezione UV, qualità ottica e resistenza meccanica. La marcatura CE è obbligatoria per vendere occhiali nell'UE, SEE e Regno Unito." } },
            { "@type": "Question", "name": "Quanto costa il test di conformità per gli occhiali da sole?", "acceptedAnswer": { "@type": "Answer", "text": "Test UV400 base: $100-300 per modello. Test di conformità completo (UV, resistenza urti, qualità ottica): $300-800 per modello. La registrazione FDA è gratuita. La documentazione per la marcatura CE costa $200-500 se assumi un consulente. La maggior parte delle fabbriche affidabili include i test base nei costi di produzione." } },
            { "@type": "Question", "name": "I miei occhiali possono essere sequestrati alla dogana per non conformità?", "acceptedAnswer": { "@type": "Answer", "text": "Sì. La dogana USA può trattenere occhiali senza registrazione FDA. La dogana UE sequestra regolarmente spedizioni senza marcatura CE. L'Australia è particolarmente severa. Ho personalmente visto clienti perdere intere spedizioni del valore di $10.000-50.000 per documentazione mancante. La conformità non è opzionale." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Conformità</span>
            <span>4 maggio 2026</span>
            <span>•</span>
            <span>15 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificazione FDA e CE per Occhiali da Sole: Guida Completa alla Conformità
          </h1>
          <p className="text-xl text-gray-600">
            Nessuno lancia un brand di occhiali da sole perché è entusiasta della conformità normativa.
            Ma salta questo passaggio e i tuoi occhiali potrebbero essere sequestrati alla dogana -- o peggio. Ecco
            tutto quello che devi sapere, semplificato.
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
            <li><a href="#perche-conformita" className="text-primary-600 hover:underline">Perché la Conformità è Importante (Storie Vere di Orrore)</a></li>
            <li><a href="#fda-usa" className="text-primary-600 hover:underline">Requisiti FDA: Vendere Occhiali negli USA</a></li>
            <li><a href="#ce-ue" className="text-primary-600 hover:underline">Marcatura CE: Vendere Occhiali nell&apos;UE</a></li>
            <li><a href="#protezione-uv" className="text-primary-600 hover:underline">Standard di Protezione UV</a></li>
            <li><a href="#ansi" className="text-primary-600 hover:underline">ANSI Z80.3: Lo Standard Ottico USA</a></li>
            <li><a href="#altri-mercati" className="text-primary-600 hover:underline">Altri Mercati: Australia, UK, Giappone</a></li>
            <li><a href="#costi-test" className="text-primary-600 hover:underline">Costi dei Test e Dove Farli</a></li>
            <li><a href="#checklist" className="text-primary-600 hover:underline">La Tua Checklist di Conformità</a></li>
            <li><a href="#domande" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Esporto occhiali da sole da 20 anni. In quel periodo, ho visto tre clienti perdere intere spedizioni per
            sequestri doganali -- per un totale di oltre $120.000 in prodotto distrutto. Ogni singolo caso era prevenibile.
            I test sarebbero costati meno di $500.
          </p>

          <h2 id="perche-conformita" className="text-3xl font-bold mt-16 mb-6">Perché la Conformità è Importante (Storie Vere di Orrore)</h2>
          <p>
            Ti racconto di Carlos. Era un proprietario di brand alle prime armi da Miami che ha ordinato 3.000
            paia di occhiali nel 2023. Montature bellissime, ottima qualità, investimento di $18.000. Li ha spediti
            via mare al Porto di Miami. La dogana USA ha bloccato la spedizione perché mancava la documentazione di
            registrazione FDA. La merce è stata trattenuta per 45 giorni mentre Carlos si affannava a registrarsi
            e mettere in ordine le carte. Quando ha ricevuto i suoi occhiali, aveva perso tutta la finestra di lancio estiva.
          </p>
          <p>
            La conformità non è glamour. Ma è la differenza tra un lancio tranquillo e un disastro molto costoso.
          </p>

          <h2 id="fda-usa" className="text-3xl font-bold mt-16 mb-6">Requisiti FDA: Vendere Occhiali negli USA</h2>
          <p>
            Ecco qualcosa che sorprende la maggior parte delle persone: <strong>la FDA classifica gli occhiali da sole come
            dispositivi medici</strong>. Nello specifico, dispositivi medici di Classe I sotto 21 CFR 886.5850. Niente panico --
            la Classe I è la categoria a rischio più basso, e i requisiti sono semplici.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Step 1: Registrazione dello Stabilimento FDA</h3>
            <p className="text-blue-800">
              Ogni produttore e importatore di occhiali da sole venduti negli USA deve registrarsi presso la FDA tramite il{' '}
              <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/device-registration-and-listing" target="_blank" rel="noopener" className="underline">sistema FURLS della FDA</a>.
              La registrazione è gratuita ma deve essere rinnovata annualmente.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Step 2: Elenco dei Prodotti</h3>
            <p className="text-blue-800">
              Dopo la registrazione, devi elencare i tuoi prodotti occhiali nel database FDA. Include codice prodotto (HQF per occhiali da sole non graduati), nome del brand e numeri di modello.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Step 3: Conformità alla Resistenza agli Urti</h3>
            <p className="text-blue-800">
              Sotto 21 CFR 801.410, tutte le lenti per occhiali da sole non graduati devono superare il test di resistenza agli urti FDA: una sfera d&apos;acciaio di 5/8 di pollice fatta cadere da 50 pollici non deve fratturare la lente. Questo è il &quot;drop ball test.&quot;
            </p>
          </div>

          <h2 id="ce-ue" className="text-3xl font-bold mt-16 mb-6">Marcatura CE: Vendere Occhiali nell&apos;UE</h2>
          <p>
            La marcatura CE è <strong>obbligatoria</strong> per vendere occhiali da sole nell&apos;Unione Europea, nello Spazio Economico Europeo (SEE) e nel Regno Unito.
          </p>
          <p>Lo standard chiave è <strong>EN ISO 12312-1:2022</strong> che copre:</p>
          <ul>
            <li><strong>Trasmittanza UV:</strong> Massima radiazione UV che può passare attraverso la lente, in base alla categoria del filtro</li>
            <li><strong>Qualità ottica:</strong> Tolleranze di potenza sferica, astigmatica e prismatica</li>
            <li><strong>Resistenza meccanica:</strong> Requisiti minimi di robustezza</li>
            <li><strong>Categorie filtro (0-4):</strong> Quanta luce visibile la lente trasmette</li>
            <li><strong>Rilascio di nichel:</strong> Per montature metalliche a contatto con la pelle</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Categorie Filtro della Marcatura CE</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Categoria</th>
                  <th className="px-6 py-4 text-left">Trasmittanza Luminosa</th>
                  <th className="px-6 py-4 text-left">Uso</th>
                  <th className="px-6 py-4 text-left">Guida?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Cat 0</td><td className="px-6 py-4">80-100%</td><td className="px-6 py-4">Moda/interni</td><td className="px-6 py-4">Sì</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 1</td><td className="px-6 py-4">43-80%</td><td className="px-6 py-4">Luce solare debole</td><td className="px-6 py-4">Sì</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 2</td><td className="px-6 py-4">18-43%</td><td className="px-6 py-4">Luce solare media</td><td className="px-6 py-4">Sì</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 3</td><td className="px-6 py-4">8-18%</td><td className="px-6 py-4">Luce solare forte</td><td className="px-6 py-4">Sì</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 4</td><td className="px-6 py-4">3-8%</td><td className="px-6 py-4">Estremo (ghiacciai, ecc.)</td><td className="px-6 py-4 text-red-600 font-bold">NO</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Importante: Autocertificazione</h3>
            <p className="text-amber-800">
              La marcatura CE per gli occhiali da sole è <strong>autocertificata</strong> -- non serve un organismo notificato per approvare il tuo prodotto. Tu (o la tua fabbrica) conducete i test, compilate il fascicolo tecnico e firmate la Dichiarazione di Conformità. Questo la rende accessibile, ma significa anche che sei legalmente responsabile dell&apos;accuratezza delle tue dichiarazioni. Non falsificarla.
            </p>
          </div>

          <h2 id="protezione-uv" className="text-3xl font-bold mt-16 mb-6">Standard di Protezione UV</h2>
          <p>
            La protezione UV è il requisito di conformità più importante per gli occhiali da sole. Le lenti che
            non bloccano adeguatamente la radiazione UV possono in realtà essere <em>più pericolose</em> del non indossare
            occhiali -- la tinta scura causa la dilatazione delle pupille, lasciando entrare più UV se la lente non lo blocca adeguatamente.
          </p>
          <p>
            <strong>UV400 significa che la lente blocca il 99-100% della radiazione UV fino a 400 nanometri</strong>,
            coprendo sia gli UVA (315-400nm) che gli UVB (280-315nm). Questo è lo standard minimo per qualsiasi occhiale da sole che vendi, ovunque nel mondo. Per saperne di più sulle differenze tra UV400 e polarizzate, leggi la nostra{' '}
            <Link href="/it/blog/uv400-vs-polarizzate" className="text-primary-600 hover:underline">guida UV400 vs polarizzate</Link>.
          </p>

          <h2 id="ansi" className="text-3xl font-bold mt-16 mb-6">ANSI Z80.3: Lo Standard Ottico USA</h2>
          <p>
            Mentre la FDA copre la resistenza agli urti e la sicurezza generale, <strong>ANSI Z80.3</strong> copre la qualità ottica degli occhiali da sole non graduati. È tecnicamente volontario negli USA, ma è il benchmark riconosciuto e la maggior parte dei rivenditori lo richiede.
          </p>

          <h2 id="altri-mercati" className="text-3xl font-bold mt-16 mb-6">Altri Mercati: Australia, UK, Giappone</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Australia e Nuova Zelanda (AS/NZS 1067)</h3>
          <p>L&apos;Australia ha le <strong>normative sugli occhiali da sole più severe al mondo</strong>. L&apos;AS/NZS 1067 è obbligatorio, non volontario. Gli occhiali non conformi vengono regolarmente sequestrati alla dogana e distrutti.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Regno Unito (UKCA)</h3>
          <p>Dopo la Brexit, il Regno Unito tecnicamente richiede il marchio UKCA invece del CE. Tuttavia, il governo UK ha esteso l&apos;accettazione del CE almeno fino al 2027.</p>

          <h2 id="costi-test" className="text-3xl font-bold mt-16 mb-6">Costi dei Test e Dove Farli</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Tipo di Test</th>
                  <th className="px-6 py-4 text-left">Costo per Modello</th>
                  <th className="px-6 py-4 text-left">Tempi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Solo trasmittanza UV400</td><td className="px-6 py-4">$100-$300</td><td className="px-6 py-4">3-5 giorni</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">EN ISO 12312-1 completo (CE)</td><td className="px-6 py-4">$300-$600</td><td className="px-6 py-4">5-10 giorni</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">ANSI Z80.3 completo</td><td className="px-6 py-4">$300-$500</td><td className="px-6 py-4">5-10 giorni</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">AS/NZS 1067 (Australia)</td><td className="px-6 py-4">$400-$800</td><td className="px-6 py-4">7-14 giorni</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Test drop ball FDA</td><td className="px-6 py-4">$50-$150</td><td className="px-6 py-4">1-3 giorni</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="checklist" className="text-3xl font-bold mt-16 mb-6">La Tua Checklist di Conformità</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Per il Mercato USA</h3>
          <ul>
            <li>☐ Registrazione stabilimento FDA (produttore e/o importatore)</li>
            <li>☐ Elenco prodotti FDA (codice prodotto HQF)</li>
            <li>☐ Registrazioni test resistenza urti in archivio</li>
            <li>☐ Certificato UV400 per ogni modello</li>
            <li>☐ Etichettatura corretta</li>
            <li>☐ Assicurazione responsabilità prodotto</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Per il Mercato UE</h3>
          <ul>
            <li>☐ Test secondo EN ISO 12312-1 da laboratorio accreditato</li>
            <li>☐ Fascicolo tecnico compilato e conservato</li>
            <li>☐ Dichiarazione di Conformità firmata</li>
            <li>☐ Marchio CE applicato al prodotto/packaging</li>
            <li>☐ Categoria filtro chiaramente etichettata</li>
            <li>☐ Importatore o rappresentante autorizzato nell&apos;UE identificato</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Hai Bisogno di Aiuto con la Conformità?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Gestiamo la conformità FDA, CE e UV per ogni ordine che produciamo. Il nostro team può guidarti
              attraverso i requisiti per i tuoi mercati specifici e fornire tutta la documentazione necessaria.
              Nessun costo extra per la conformità standard -- fa parte del fare le cose per bene.
            </p>
            <Link href="/it/contatto" className="btn-primary">
              Chiedi a Jacky sulla Conformità
            </Link>
          </div>

          <h2 id="domande" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Gli occhiali da sole hanno bisogno dell&apos;approvazione FDA?</h3>
              <p className="text-gray-600">Non &quot;approvazione&quot; -- ma conformità FDA, sì. Sono dispositivi medici di Classe I. Produttori/importatori devono registrarsi e le lenti devono superare i test di resistenza agli urti.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Cos&apos;è la marcatura CE per gli occhiali da sole?</h3>
              <p className="text-gray-600">La marcatura CE indica che i tuoi occhiali soddisfano i requisiti di sicurezza UE secondo EN ISO 12312-1. È obbligatoria per vendere nell&apos;UE/SEE/UK. Ti autocertifichi testando secondo lo standard, creando un fascicolo tecnico e firmando una Dichiarazione di Conformità.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">I miei occhiali possono essere sequestrati alla dogana?</h3>
              <p className="text-gray-600">Sì. La dogana USA può trattenere spedizioni senza registrazione FDA. La dogana UE sequestra regolarmente prodotti senza marcatura CE. L&apos;Australia è la più severa. I costi dei test di conformità sono una frazione di una spedizione sequestrata.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/controllo-qualita-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Controllo Qualità Occhiali da Sole: Checklist di Ispezione</h3>
                <p className="text-gray-600 text-sm">Cosa controllare prima di approvare un ciclo di produzione -- dalla chiarezza delle lenti alla tensione delle cerniere.</p>
              </Link>
              <Link href="/it/blog/guida-importazione-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Come Importare Occhiali da Sole dalla Cina</h3>
                <p className="text-gray-600 text-sm">Guida completa a dogana, dazi, spedizione e documentazione.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
