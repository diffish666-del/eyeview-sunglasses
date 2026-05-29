import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guida ai Rivestimenti per Occhiali da Sole: Specchio, Anti-Riflesso, Idrofobico e Altro',
  description: 'Un proprietario di fabbrica analizza ogni tipo di rivestimento per occhiali -- specchio, AR, idrofobico, oleofobico, anti-appannamento, hard coat, filtro luce blu. Costi reali per paio e quali rivestimenti si combinano.',
  keywords: 'tipi rivestimenti occhiali, rivestimento specchio occhiali, rivestimento anti-riflesso, rivestimento idrofobico lenti, rivestimento oleofobico, hard coat lenti',
  alternates: { canonical: '/it/blog/guida-rivestimenti-occhiali', languages: { 'en': '/blog/sunglasses-coating-guide', 'it': '/it/blog/guida-rivestimenti-occhiali' } },
}

export default function GuidaRivestimentiPage() {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Guida ai Rivestimenti per Occhiali da Sole: Specchio, Anti-Riflesso, Idrofobico e Altro", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Un proprietario di fabbrica analizza ogni tipo di rivestimento per lenti -- specchio, AR, idrofobico, oleofobico, anti-appannamento, hard coat. Costi reali e quali si combinano.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/guida-rivestimenti-occhiali" }, "inLanguage": "it" })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Tecnologia</span>
            <span>3 maggio 2026</span><span>•</span><span>13 min di lettura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Guida ai Rivestimenti per Occhiali da Sole: Specchio, Anti-Riflesso, Idrofobico e Altro</h1>
          <p className="text-xl text-gray-600">I rivestimenti delle lenti sono la differenza tra occhiali &quot;buoni&quot; e occhiali &quot;wow, questi sono fantastici.&quot; Ecco quali valgono la pena -- e quali sono solo marketing.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div></div></div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">I 7 Rivestimenti che Contano</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Rivestimento a Specchio (Mirror)</h3>
          <p>Uno strato metallico riflettente applicato sulla superficie esterna della lente. Riduce la luce che passa del 10-60% aggiuntivo rispetto alla tinta base e aggiunge un appeal estetico innegabile. È il rivestimento più visibile -- letteralmente quello che i clienti vedono per primo.</p>
          <ul><li><strong>Costo:</strong> $0,30-1,00 per paio</li><li><strong>Colori disponibili:</strong> Argento, oro, blu, rosso, verde, arcobaleno, oro rosa</li><li><strong>Ideale per:</strong> Brand sportivi e fashion. I rivestimenti a specchio fotografano benissimo -- ottimi per i brand guidati dai social media.</li><li><strong>Attenzione:</strong> I rivestimenti a specchio possono graffiarsi più facilmente. Consiglio sempre di combinarli con un hard coat.</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Anti-Riflesso (AR)</h3>
          <p>Riduce i riflessi sulla superficie <em>interna</em> della lente -- quelli fastidiosi che vedi quando la luce arriva da dietro. Migliora il comfort visivo significativamente.</p>
          <ul><li><strong>Costo:</strong> $0,20-0,60 per paio</li><li><strong>Ideale per:</strong> Guida, tutti gli occhiali da sole di qualità superiore</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Idrofobico</h3>
          <p>Fa scivolare le gocce d&apos;acqua dalla superficie della lente invece di farle aderire. Essenziale per sport acquatici e uso in pioggia.</p>
          <ul><li><strong>Costo:</strong> $0,15-0,40 per paio</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Oleofobico</h3>
          <p>Resiste alle impronte digitali, al grasso e allo sporco. Rende la pulizia delle lenti molto più facile. I clienti adorano le lenti che restano pulite più a lungo.</p>
          <ul><li><strong>Costo:</strong> $0,15-0,40 per paio</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Hard Coat (Anti-Graffio)</h3>
          <p>Uno strato protettivo che migliora la resistenza ai graffi. Essenziale per le lenti in CR-39 e policarbonato, che si graffiano facilmente senza protezione.</p>
          <ul><li><strong>Costo:</strong> $0,10-0,30 per paio</li><li><strong>Nota:</strong> Questo è il rivestimento con il miglior rapporto costo/beneficio. Costa quasi nulla e riduce significativamente i resi per graffi.</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Anti-Appannamento</h3>
          <p>Previene la formazione di condensa sulla lente. Utile per chi passa da ambienti climatizzati all&apos;esterno, o per sport invernali.</p>
          <ul><li><strong>Costo:</strong> $0,30-0,80 per paio</li><li><strong>Limitazione:</strong> L&apos;effetto anti-appannamento si riduce nel tempo e con i lavaggi. Non è permanente.</li></ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">7. Filtro Luce Blu</h3>
          <p>Blocca parte della luce blu ad alta energia emessa dagli schermi digitali. Un trend in crescita, anche se l&apos;evidenza scientifica sui benefici è ancora dibattuta.</p>
          <ul><li><strong>Costo:</strong> $0,20-0,60 per paio</li><li><strong>Nota commerciale:</strong> Il filtro luce blu è un ottimo punto di vendita. I clienti lo cercano attivamente, anche sugli occhiali da sole.</li></ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">Le Mie Combinazioni Raccomandate</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Livello</th><th className="px-6 py-4 text-left">Rivestimenti</th><th className="px-6 py-4 text-left">Costo Totale</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Base</td><td className="px-6 py-4">Hard coat + UV400</td><td className="px-6 py-4">$0,10-0,30</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Buono</td><td className="px-6 py-4">Hard coat + AR + idrofobico</td><td className="px-6 py-4">$0,45-1,30</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Premium</td><td className="px-6 py-4">Hard coat + AR + idrofobico + oleofobico + specchio</td><td className="px-6 py-4">$0,90-2,70</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Vuoi Sapere Quali Rivestimenti Servono al Tuo Brand?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Mandami il tuo punto di prezzo e il tuo cliente target. Ti consiglierò la combinazione di rivestimenti che massimizza il valore percepito al tuo budget.</p>
            <Link href="/it/contatto" className="btn-primary">Chiedi a Jacky sui Rivestimenti</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/guida-lenti-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Tipi di Lenti per Occhiali da Sole: Guida Completa</h3><p className="text-gray-600 text-sm">I rivestimenti sono importanti, ma il materiale della lente è la base. Ecco tutto quello che devi sapere.</p></Link>
              <Link href="/it/blog/uv400-vs-polarizzate" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">UV400 vs Polarizzate: Qual è la Differenza?</h3><p className="text-gray-600 text-sm">Due tecnologie diverse che spesso vengono confuse. Ecco la verità.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}
