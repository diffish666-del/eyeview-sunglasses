import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produzione Sostenibile di Occhiali da Sole: Materiali e Processi Eco-Friendly',
  description: 'Un proprietario di fabbrica spiega la produzione sostenibile di occhiali — bio-acetato, nylon riciclato, plastica oceanica, packaging eco-friendly e cosa significa davvero "sostenibile" nella produzione eyewear.',
  keywords: 'occhiali sostenibili, produzione eyewear eco-friendly, occhiali riciclati, bio-acetato occhiali, occhiali plastica oceanica, eyewear sostenibile',
  alternates: { canonical: '/it/blog/produzione-sostenibile-occhiali', languages: { 'en': '/blog/sustainable-sunglasses-manufacturing', 'it': '/it/blog/produzione-sostenibile-occhiali' } },
}

export default function ProduzioneSostenibilePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Produzione Sostenibile di Occhiali da Sole: Materiali e Processi Eco-Friendly", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Un proprietario di fabbrica spiega la produzione sostenibile di occhiali — materiali, processi e confronti onesti sui costi.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/produzione-sostenibile-occhiali" }, "inLanguage": "it" })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sostenibilità</span><span>4 maggio 2026</span><span>•</span><span>13 min di lettura</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Produzione Sostenibile di Occhiali da Sole: Materiali e Processi Eco-Friendly</h1>
          <p className="text-xl text-gray-600">La sostenibilità nell&apos;eyewear è passata da nicchia a mainstream. Ma non tutto quello che viene etichettato come &quot;eco&quot; lo è davvero. Ecco la versione onesta — da qualcuno che produce sia occhiali tradizionali che sostenibili.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">Materiali Sostenibili: Cosa Funziona Davvero</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Bio-Acetato</h3>
          <p>L&apos;acetato tradizionale è già parzialmente bio-based (da fibre di cotone), ma il bio-acetato va oltre usando plastificanti naturali invece del ftalato. <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Mazzucchelli M49</a> è il gold standard — biodegradabile in condizioni industriali di compostaggio.</p>
          <ul>
            <li><strong>Sovrapprezzo vs acetato tradizionale:</strong> +30-50% sul costo della lastra</li>
            <li><strong>Qualità:</strong> Identica all&apos;acetato tradizionale in termini di aspetto e lavorabilità</li>
            <li><strong>La verità:</strong> &quot;Biodegradabile&quot; richiede condizioni specifiche di compostaggio industriale. Non si decompone in una discarica normale. Ma è comunque un passo avanti rispetto all&apos;acetato convenzionale.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Nylon Riciclato (rNylon)</h3>
          <p>Nylon rigenerato da reti da pesca recuperate, scarti industriali o rifiuti tessili. È l&apos;alternativa sostenibile al TR90 tradizionale.</p>
          <ul>
            <li><strong>Sovrapprezzo vs nylon vergine:</strong> +20-40%</li>
            <li><strong>Performance:</strong> Praticamente identica al nylon vergine in termini di flessibilità e resistenza</li>
            <li><strong>Storytelling:</strong> Eccellente. &quot;Montatura fatta da reti da pesca recuperate dall&apos;oceano&quot; è una storia potente per il marketing.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Plastica Oceanica Riciclata</h3>
          <p>Plastica raccolta dagli oceani o dalle coste e riciclata in montature per occhiali. Brand come <a href="https://www.parley.tv/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Parley for the Oceans</a> hanno aperto la strada.</p>
          <ul>
            <li><strong>Sovrapprezzo:</strong> +40-80% — il costo di raccolta e pulizia è significativo</li>
            <li><strong>Limitazione:</strong> La qualità della plastica riciclata dall&apos;oceano è variabile. Spesso va mescolata con materiale vergine per mantenere standard di produzione.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Legno e Bambù</h3>
          <p>Montature in legno naturale o bambù. Esteticamente uniche — ogni paio ha venature diverse.</p>
          <ul>
            <li><strong>Costo:</strong> $4-12 per montatura (comparabile all&apos;acetato)</li>
            <li><strong>Sfide:</strong> Più fragili del TR90 o dell&apos;acetato. Sensibili all&apos;umidità. Richiedono trattamento protettivo.</li>
            <li><strong>Ideali per:</strong> Brand con posizionamento naturale, outdoor, boho.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">Packaging Sostenibile</h2>
          <p>Il packaging è dove puoi fare la differenza più grande con l&apos;investimento più piccolo:</p>
          <ul>
            <li><strong>Scatole in cartone riciclato/FSC:</strong> +$0,10-0,30 vs cartone standard</li>
            <li><strong>Pochette in cotone organico:</strong> +$0,15-0,30 vs microfibra sintetica</li>
            <li><strong>Eliminare la plastica:</strong> Usa carta velina al posto del pluriball, nastro in carta al posto dello scotch in plastica</li>
            <li><strong>Inchiostri a base di soia:</strong> Stesso costo degli inchiostri tradizionali nella maggior parte dei casi</li>
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">Il Costo Reale della Sostenibilità</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Componente</th><th className="px-6 py-4 text-left">Convenzionale</th><th className="px-6 py-4 text-left">Sostenibile</th><th className="px-6 py-4 text-left">Differenza</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Montatura acetato</td><td className="px-6 py-4">$6,00</td><td className="px-6 py-4">$8,50 (bio-acetato)</td><td className="px-6 py-4">+$2,50</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Custodia</td><td className="px-6 py-4">$1,50</td><td className="px-6 py-4">$2,00 (sughero/cotone)</td><td className="px-6 py-4">+$0,50</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Scatola</td><td className="px-6 py-4">$0,60</td><td className="px-6 py-4">$0,80 (cartone riciclato)</td><td className="px-6 py-4">+$0,20</td></tr>
                <tr className="bg-primary-50 font-bold"><td className="px-6 py-4">Totale</td><td className="px-6 py-4">$8,10</td><td className="px-6 py-4">$11,30</td><td className="px-6 py-4">+$3,20 (+40%)</td></tr>
              </tbody>
            </table>
          </div>
          <p>Il sovrapprezzo del 40% sembra tanto, ma i brand sostenibili tipicamente caricano il 20-40% in più al dettaglio. I consumatori eco-consapevoli sono disposti a pagare il premium — a patto che la storia sia autentica.</p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Il Mio Consiglio Onesto sulla Sostenibilità</h3>
            <p className="text-amber-800">Non fare greenwashing. Se usi bio-acetato per le montature ma spedisci in una montagna di plastica, i tuoi clienti lo noteranno. Meglio essere trasparenti su dove sei nel percorso sostenibile piuttosto che fingere di essere perfetti. &quot;Stiamo facendo passi verso la sostenibilità&quot; è molto più credibile di &quot;siamo 100% eco-friendly.&quot;</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Vuoi Esplorare Opzioni Sostenibili?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Offriamo bio-acetato, nylon riciclato e packaging eco-friendly. Posso mostrarti campioni e confronti di prezzo per il tuo progetto specifico.</p>
            <Link href="/it/contatto" className="btn-primary">Chiedi a Jacky sulle Opzioni Sostenibili</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/confronto-materiali-montature" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metallo</h3><p className="text-gray-600 text-sm">Confronto completo dei materiali per montature — incluse le opzioni sostenibili.</p></Link>
              <Link href="/it/blog/packaging-personalizzato-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Packaging Personalizzato per Occhiali</h3><p className="text-gray-600 text-sm">Opzioni di packaging eco-friendly incluse nel confronto completo.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
