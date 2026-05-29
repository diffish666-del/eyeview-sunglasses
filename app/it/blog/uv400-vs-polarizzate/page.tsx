import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UV400 vs Occhiali Polarizzati: Qual è la Differenza e Ti Servono Entrambi?',
  description: 'Un proprietario di fabbrica spiega la vera differenza tra lenti UV400 e polarizzate -- cosa fa ciascuna, impatto sui costi all\'ingrosso e quando il tuo brand ha bisogno di una, entrambe o nessuna.',
  keywords: 'UV400 vs polarizzate, protezione UV400, lenti polarizzate, protezione lenti occhiali, differenza UV400 polarizzate',
  alternates: { canonical: '/it/blog/uv400-vs-polarizzate', languages: { 'en': '/blog/uv400-vs-polarized', 'it': '/it/blog/uv400-vs-polarizzate' } },
}

export default function Uv400VsPolarizzatePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "UV400 vs Occhiali Polarizzati: Qual è la Differenza e Ti Servono Entrambi?", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Un proprietario di fabbrica spiega UV400 vs lenti polarizzate -- cosa fa ciascuna, impatto sui costi e quando il tuo brand ha bisogno di una o entrambe.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/uv400-vs-polarizzate" }, "inLanguage": "it" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Qual è la differenza tra UV400 e polarizzate?", "acceptedAnswer": { "@type": "Answer", "text": "UV400 e polarizzazione fanno due cose completamente diverse. UV400 blocca le radiazioni ultraviolette dannose -- è una protezione per la salute. La polarizzazione riduce il riverbero riflesso dalle superfici -- è una protezione per il comfort. Puoi avere UV400 senza polarizzazione, polarizzazione senza UV400 (raro ma possibile), o entrambe. Per la massima protezione, vuoi entrambe." } },
          { "@type": "Question", "name": "Tutte le lenti polarizzate sono anche UV400?", "acceptedAnswer": { "@type": "Answer", "text": "No -- ed è un errore comune. La polarizzazione e la protezione UV sono tecnologie separate. Una lente può essere polarizzata ma non bloccare completamente gli UV (raro nei prodotti di qualità, ma possibile nei prodotti ultra-economici). Le lenti di qualità hanno sia UV400 che polarizzazione. Verifica sempre il certificato UV400 separatamente." } },
          { "@type": "Question", "name": "Quanto costa aggiungere la polarizzazione?", "acceptedAnswer": { "@type": "Answer", "text": "Il sovrapprezzo all'ingrosso per la polarizzazione è sorprendentemente modesto: $0,50-2,00 per paio a seconda del materiale della lente. Lenti TAC polarizzate costano solo $0,50-0,80 in più delle non polarizzate. CR-39 polarizzate aggiungono $1,00-2,00. Ma al dettaglio, puoi caricare il 30-60% in più per le polarizzate -- è uno dei migliori rapporti investimento/ritorno nel settore eyewear." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Tecnologia</span>
            <span>3 maggio 2026</span><span>•</span><span>12 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UV400 vs Occhiali Polarizzati: Qual è la Differenza e Ti Servono Entrambi?</h1>
          <p className="text-xl text-gray-600">La domanda che ricevo più spesso da chi è alle prime armi: &quot;Polarizzate e UV400 sono la stessa cosa?&quot; No. E confonderle può costare alla salute dei tuoi clienti -- e alla reputazione del tuo brand.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Dopo 20 anni di produzione di occhiali da sole, posso dirti che la confusione tra UV400 e polarizzate è il malinteso numero uno nel settore. Facciamo chiarezza una volta per tutte.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">UV400: La Protezione per la Salute</h2>
          <p><strong>UV400 significa che la lente blocca il 99-100% delle radiazioni ultraviolette fino a 400 nanometri</strong>, coprendo sia UVA che UVB. Questa è protezione per la salute -- i raggi UV possono causare cataratta, degenerazione maculare e danni alla cornea con l&apos;esposizione prolungata.</p>
          <p>La protezione UV400 è <strong>non negoziabile</strong>. Ogni paio di occhiali da sole che vendi dovrebbe averla. Non è un upgrade -- è il minimo. Le lenti senza protezione UV adeguata sono in realtà <em>peggio</em> del non indossare occhiali, perché la tinta scura dilata le pupille, lasciando entrare più UV.</p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">UV400 in Breve:</h3>
            <ul className="text-blue-800 space-y-1">
              <li><strong>Cosa fa:</strong> Blocca le radiazioni UV dannose (UVA + UVB)</li>
              <li><strong>Costo aggiuntivo:</strong> $0 -- integrato in tutte le lenti di qualità</li>
              <li><strong>È obbligatorio?</strong> Sì, legalmente nella maggior parte dei mercati</li>
              <li><strong>Effetto visibile:</strong> Nessuno -- non cambia quello che vedi</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Polarizzazione: Il Comfort Visivo</h2>
          <p><strong>La polarizzazione elimina il riverbero</strong> -- quella luce intensa riflessa dall&apos;acqua, dalla strada bagnata, dalla neve o dalle superfici metalliche. Lo fa filtrando le onde luminose che oscillano orizzontalmente (che è come la luce si comporta quando rimbalza da superfici piatte).</p>
          <p>La differenza è immediata e drammatica. Metti un paio di occhiali polarizzati mentre guidi in una giornata di sole e improvvisamente la strada non brilla più, i riflessi sui cofani delle auto scompaiono, e puoi vedere attraverso la superficie dell&apos;acqua.</p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Polarizzazione in Breve:</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Cosa fa:</strong> Elimina il riverbero riflesso dalle superfici</li>
              <li><strong>Costo aggiuntivo:</strong> $0,50-2,00 per paio all&apos;ingrosso</li>
              <li><strong>È obbligatoria?</strong> No -- è un upgrade di comfort</li>
              <li><strong>Effetto visibile:</strong> Sì -- riduzione drammatica del riverbero</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">La Differenza Chiave</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Caratteristica</th>
                  <th className="px-6 py-4 text-left">UV400</th>
                  <th className="px-6 py-4 text-left">Polarizzazione</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Scopo</td><td className="px-6 py-4">Protezione salute occhi</td><td className="px-6 py-4">Comfort visivo</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Cosa blocca</td><td className="px-6 py-4">Radiazioni UV invisibili</td><td className="px-6 py-4">Riverbero visibile</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Obbligatoria?</td><td className="px-6 py-4">Sì (legalmente)</td><td className="px-6 py-4">No (upgrade)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Costo extra</td><td className="px-6 py-4">$0</td><td className="px-6 py-4">$0,50-2,00/paio</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Markup retail</td><td className="px-6 py-4">Incluso nel prezzo base</td><td className="px-6 py-4">+30-60% possibile</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Essenziale per</td><td className="px-6 py-4">Tutti gli occhiali da sole</td><td className="px-6 py-4">Guida, pesca, sport acquatici</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Ti Servono Entrambe? La Risposta Commerciale</h2>
          <p><strong>UV400: Sempre. Non è opzionale.</strong> Ogni paio che produciamo ha la protezione UV400 di serie.</p>
          <p><strong>Polarizzazione: Quasi sempre conviene offrirla.</strong> Il sovrapprezzo all&apos;ingrosso è modesto ($0,50-2,00/paio) ma il markup al dettaglio è significativo (30-60%). I clienti sanno che &quot;polarizzato&quot; = qualità superiore e sono disposti a pagare di più.</p>
          <p>La mia raccomandazione per i nuovi brand: offri almeno il 50% della tua linea in versione polarizzata. Lascia che il mercato ti dica se spingerti al 100%.</p>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Vuoi Saperne di Più sulle Lenti?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Consulta la nostra guida completa sui tipi di lenti per un confronto approfondito di tutti i materiali, colori e rivestimenti disponibili.</p>
            <Link href="/it/blog/guida-lenti-occhiali" className="btn-primary">Leggi la Guida Completa alle Lenti</Link>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Domande Frequenti</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qual è la differenza tra UV400 e polarizzate?</h3>
              <p className="text-gray-600">Fanno due cose diverse. UV400 blocca le radiazioni ultraviolette dannose (protezione salute). La polarizzazione riduce il riverbero riflesso (comfort visivo). Per la massima protezione, vuoi entrambe.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Tutte le lenti polarizzate sono anche UV400?</h3>
              <p className="text-gray-600">Non necessariamente. Sono tecnologie separate. Le lenti di qualità hanno entrambe, ma i prodotti ultra-economici potrebbero essere polarizzati senza protezione UV completa. Verifica sempre il certificato UV400 separatamente.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto costa aggiungere la polarizzazione?</h3>
              <p className="text-gray-600">$0,50-2,00 per paio all&apos;ingrosso. Ma puoi caricare il 30-60% in più al dettaglio. È uno dei migliori rapporti investimento/ritorno nel settore eyewear.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/guida-lenti-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Tipi di Lenti per Occhiali da Sole: Guida Completa</h3>
                <p className="text-gray-600 text-sm">CR-39, policarbonato, vetro, TAC -- tutto quello che devi sapere sui materiali per lenti.</p>
              </Link>
              <Link href="/it/blog/guida-rivestimenti-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guida ai Rivestimenti per Occhiali da Sole</h3>
                <p className="text-gray-600 text-sm">Specchio, anti-riflesso, idrofobico -- quali rivestimenti valgono la pena per il tuo brand.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
