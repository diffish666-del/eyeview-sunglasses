import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guida MOQ Occhiali da Sole: Quante Paia Ordinare al Primo Ordine?',
  description: 'Un proprietario di fabbrica spiega il MOQ per ordini all\'ingrosso di occhiali. ODM da 50-200 pezzi, OEM da 300-1.000+. La strategia intelligente per scalare senza sovrainvestire.',
  keywords: 'MOQ occhiali da sole ingrosso, quantità minima ordine occhiali, ordine ingrosso occhiali, MOQ ODM, MOQ OEM occhiali',
  alternates: { canonical: '/it/blog/guida-moq-occhiali', languages: { 'en': '/blog/sunglasses-moq-guide', 'it': '/it/blog/guida-moq-occhiali' } },
}

export default function GuidaMoqPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
      }) }} />

    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Guida MOQ Occhiali da Sole: Quante Paia Ordinare al Primo Ordine?", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Un proprietario di fabbrica spiega il MOQ per ordini all'ingrosso — ODM, OEM e stampi personalizzati con una strategia pratica di scaling per nuovi brand.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/guida-moq-occhiali" }, "inLanguage": "it" })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Ordini</span><span>3 maggio 2026</span><span>•</span><span>11 min di lettura</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Guida MOQ Occhiali da Sole: Quante Paia Ordinare al Primo Ordine?</h1>
          <p className="text-xl text-gray-600">&quot;Qual è il vostro MOQ?&quot; è probabilmente la seconda domanda che ricevo dopo &quot;Quanto costa?&quot; Ecco la risposta completa — non solo i nostri numeri, ma la strategia dietro a quante paia ordinare davvero.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">MOQ per Tipo di Produzione</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Tipo</th><th className="px-6 py-4 text-left">MOQ Standard</th><th className="px-6 py-4 text-left">Il Nostro MOQ</th><th className="px-6 py-4 text-left">Perché</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">ODM (design esistenti)</td><td className="px-6 py-4">100-300/modello</td><td className="px-6 py-4">50/modello (primo ordine)</td><td className="px-6 py-4">Nessun costo di stampo, setup minimo</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">OEM (design personalizzato)</td><td className="px-6 py-4">300-1.000/modello</td><td className="px-6 py-4">300/modello</td><td className="px-6 py-4">Costo dello stampo da ammortizzare</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Solo packaging personalizzato</td><td className="px-6 py-4">500-1.000</td><td className="px-6 py-4">300</td><td className="px-6 py-4">Costi di setup della stampa</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Perché i MOQ Esistono (Non È per Renderti la Vita Difficile)</h2>
          <p>I MOQ non sono arbitrari. Riflettono costi reali di produzione:</p>
          <ul>
            <li><strong>Costi di setup:</strong> Ogni cambio di modello sulla linea di produzione richiede tempo di configurazione. Per 20 paia, il setup costa più della produzione stessa.</li>
            <li><strong>Acquisto materiali:</strong> L&apos;acetato si compra in lastre, le lenti in lotti, le cerniere in scatole. Sotto certe quantità, gli scarti superano il prodotto finito.</li>
            <li><strong>Controllo qualità:</strong> Il processo QC ha costi fissi che non cambiano se fai 50 o 500 paia.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">La Strategia di Scaling Intelligente</h2>
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">Il Mio Consiglio per il Primo Ordine:</h3>
            <ol className="text-primary-800 space-y-3">
              <li><strong>Primo ordine (test):</strong> 3-5 modelli ODM × 50-100 paia ciascuno = 150-500 paia totali. Investimento: $1.000-4.000. Obiettivo: scoprire cosa si vende.</li>
              <li><strong>Riordino (validazione):</strong> 2-3 modelli bestseller × 200-300 paia = 400-900 paia. Ora sai cosa funziona.</li>
              <li><strong>Scaling (crescita):</strong> Aggiungi 1-2 modelli OEM personalizzati basati sui dati dei tuoi bestseller + riordini ODM dei vincitori.</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Come il MOQ Influisce sul Prezzo</h2>
          <p>Più ordini, meno paghi per unità. Ecco un esempio reale dalla nostra fabbrica per un modello in acetato con lenti polarizzate:</p>
          <ul>
            <li><strong>50 paia:</strong> $9,50/paio</li>
            <li><strong>200 paia:</strong> $7,80/paio</li>
            <li><strong>500 paia:</strong> $6,50/paio</li>
            <li><strong>1.000 paia:</strong> $5,80/paio</li>
            <li><strong>5.000 paia:</strong> $4,90/paio</li>
          </ul>
          <p>Nota il calo più significativo tra 50 e 200 paia. Dopo i 500, i risparmi diventano incrementali. Per questo 200-500 è il sweet spot per la maggior parte dei nuovi brand.</p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 L&apos;Errore più Comune</h3>
            <p className="text-amber-800">Il più grande errore che vedo? Brand nuovi che ordinano 2.000 paia di un singolo modello perché &quot;il prezzo per unità è migliore.&quot; Poi scoprono che quel modello non si vende. Ora hanno $12.000 di inventario fermo. Meglio pagare $1-2 in più per unità e ordinare quantità che puoi vendere in 3-6 mesi.</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Primo Ordine? Partiamo dal MOQ Giusto.</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Dimmi il tuo budget e il tuo mercato target. Ti consiglierò il mix di modelli e quantità che massimizza le tue probabilità di successo.</p>
            <Link href="/it/contatto" className="btn-primary">Pianifica il Tuo Primo Ordine con Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">OEM vs ODM: Guida Completa</h3><p className="text-gray-600 text-sm">Capire la differenza è fondamentale per scegliere il MOQ giusto.</p></Link>
              <Link href="/it/blog/costi-avvio-brand-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Quanto Costa Lanciare un Brand di Occhiali?</h3><p className="text-gray-600 text-sm">Budget completo dal prodotto al marketing.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
