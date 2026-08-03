import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Controllo Qualità Occhiali da Sole: Checklist di Ispezione in Fabbrica',
  description: 'Un proprietario di fabbrica condivide la checklist QC completa per occhiali da sole -- test delle lenti, ispezione montature, controllo cerniere, verifica UV e cosa cercare prima di approvare la produzione.',
  keywords: 'controllo qualità occhiali, ispezione eyewear, standard test occhiali, checklist QC occhiali, difetti occhiali da sole',
  alternates: { canonical: '/it/blog/controllo-qualita-occhiali', languages: { 'en': '/blog/sunglasses-quality-control', 'it': '/it/blog/controllo-qualita-occhiali' } },
}

export default function ControlloQualitaPage() {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Controllo Qualità Occhiali da Sole: Checklist di Ispezione in Fabbrica", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Un proprietario di fabbrica condivide la checklist QC completa -- dal test delle lenti all'ispezione del packaging.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/controllo-qualita-occhiali" }, "inLanguage": "it" })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Qualità</span><span>4 maggio 2026</span><span>•</span><span>13 min di lettura</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Controllo Qualità Occhiali da Sole: Checklist di Ispezione in Fabbrica</h1>
          <p className="text-xl text-gray-600">Ho visto brand perdere decine di migliaia di dollari per aver saltato il QC. Ecco esattamente cosa controlliamo su ogni lotto di produzione -- e cosa dovresti controllare anche tu.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">La Nostra Checklist QC in 8 Punti</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Test delle Lenti</h3>
          <ul>
            <li>☐ <strong>Protezione UV400:</strong> Test con spettrofotometro su ogni lotto. Trasmittanza UV &lt;1% sotto i 400nm.</li>
            <li>☐ <strong>Chiarezza ottica:</strong> Tieni la lente a 30cm dall&apos;occhio e guarda una linea retta (bordo di una porta). Qualsiasi distorsione = rifiuto.</li>
            <li>☐ <strong>Polarizzazione:</strong> Sovrapponi due lenti a 90°. Devono diventare completamente scure. Se passa luce, la polarizzazione è debole.</li>
            <li>☐ <strong>Colore coerente:</strong> Confronta le lenti dello stesso lotto. Differenze di colore visibili = rifiuto.</li>
            <li>☐ <strong>Difetti superficiali:</strong> Graffi, bolle, inclusioni, striature -- ispeziona ogni lente sotto luce intensa.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Ispezione della Montatura</h3>
          <ul>
            <li>☐ <strong>Simmetria:</strong> Appoggia gli occhiali su una superficie piana. Devono stare dritti, senza inclinazioni.</li>
            <li>☐ <strong>Finitura superficiale:</strong> Passa il dito lungo ogni bordo. Nessuna ruvidità, sbavatura o spigolo vivo.</li>
            <li>☐ <strong>Colore coerente:</strong> Confronta con il campione approvato. Tolleranza massima: variazione minima sotto luce naturale.</li>
            <li>☐ <strong>Peso:</strong> Pesa 5 paia a campione. La variazione massima accettabile è ±2g dal campione approvato.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Test delle Cerniere</h3>
          <ul>
            <li>☐ <strong>Tensione:</strong> Apri e chiudi le aste 200 volte. La tensione deve rimanere costante.</li>
            <li>☐ <strong>Allineamento:</strong> Quando chiuse, le aste devono essere parallele e combaciare perfettamente.</li>
            <li>☐ <strong>Viti:</strong> Tutte serrate, nessuna sporgenza. Per le cerniere a molla, il meccanismo deve essere fluido.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Logo e Branding</h3>
          <ul>
            <li>☐ Posizionamento preciso (confronta con campione approvato)</li>
            <li>☐ Leggibilità e nitidezza</li>
            <li>☐ Resistenza allo sfregamento (prova a grattare delicatamente con l&apos;unghia)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Test di Caduta</h3>
          <ul>
            <li>☐ Fai cadere gli occhiali da altezza vita su superficie dura, 5 volte</li>
            <li>☐ Controlla crepe, allentamenti o lenti che si staccano</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Test di Calore</h3>
          <ul>
            <li>☐ Lascia gli occhiali alla luce solare diretta per 4 ore</li>
            <li>☐ Controlla deformazioni, sbiadimento colore o bolle nei rivestimenti</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">7. Ispezione Packaging</h3>
          <ul>
            <li>☐ Logo corretto e allineato su custodia, scatola e panno</li>
            <li>☐ Nessun danno alla scatola o alla custodia</li>
            <li>☐ Tutti gli inserti presenti (garanzia, panno, cartellino)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">8. Documentazione</h3>
          <ul>
            <li>☐ Certificato UV400 per il lotto</li>
            <li>☐ Report del test drop ball (per il mercato USA)</li>
            <li>☐ Dichiarazione di Conformità CE (per il mercato UE)</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Livello di Ispezione AQL</h3>
            <p className="text-amber-800">Per ordini superiori a 500 paia, usiamo il sistema AQL (Acceptable Quality Level) -- ispezione statistica a campione secondo lo standard ISO 2859. Livello AQL 2.5 per difetti maggiori, AQL 4.0 per difetti minori. Se il campione supera questi livelli, il lotto viene approvato. Altrimenti, viene rilavorato al 100%.</p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Quando Usare un Ispettore di Terze Parti</h2>
          <p>Per il tuo primo ordine con una nuova fabbrica, o per ordini superiori a $5.000, consiglio sempre un&apos;ispezione di terze parti. Aziende come <a href="https://www.sgs.com/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">SGS</a>, Bureau Veritas e AsiaInspection inviano un ispettore in fabbrica per $200-400 per visita.</p>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Il Nostro QC È Incluso</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Ogni ordine che produciamo passa attraverso la nostra checklist QC completa. Inviamo foto e video di ispezione prima della spedizione. Nessun costo extra -- fa parte del servizio.</p>
            <Link href="/it/contatto" className="btn-primary">Scopri il Nostro Processo QC</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/certificazione-fda-ce-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Certificazione FDA e CE</h3><p className="text-gray-600 text-sm">La conformità è il prerequisito del QC. Ecco cosa serve.</p></Link>
              <Link href="/it/blog/trovare-produttore-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Come Trovare un Produttore Affidabile</h3><p className="text-gray-600 text-sm">Il processo QC di una fabbrica è uno dei 10 criteri di valutazione.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}
