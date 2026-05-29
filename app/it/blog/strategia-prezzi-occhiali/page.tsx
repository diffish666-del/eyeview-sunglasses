import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategia di Prezzo per Occhiali da Sole: Dal Costo di Fabbrica al Prezzo al Dettaglio',
  description: 'Un proprietario di fabbrica rivela l\'economia reale dei prezzi degli occhiali -- costi di fabbrica, markup all\'ingrosso, margini retail e strategie di prezzo che funzionano per brand nuovi e affermati.',
  keywords: 'prezzi occhiali da sole, markup eyewear, prezzi ingrosso occhiali, margine profitto occhiali, strategia prezzo retail occhiali',
  alternates: { canonical: '/it/blog/strategia-prezzi-occhiali', languages: { 'en': '/blog/sunglasses-pricing-strategy', 'it': '/it/blog/strategia-prezzi-occhiali' } },
}

export default function StrategiaPrezziPage() {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Strategia di Prezzo per Occhiali da Sole: Dal Costo di Fabbrica al Prezzo al Dettaglio", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Un proprietario di fabbrica rivela l'economia reale dei prezzi degli occhiali -- dal reparto produzione allo scaffale del negozio.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/strategia-prezzi-occhiali" }, "inLanguage": "it" })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Business</span><span>4 maggio 2026</span><span>•</span><span>13 min di lettura</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Strategia di Prezzo per Occhiali da Sole: Dal Costo di Fabbrica al Prezzo al Dettaglio</h1>
          <p className="text-xl text-gray-600">I numeri reali che nessun altro pubblica. Dal costo del materiale grezzo nella nostra fabbrica al prezzo sul cartellino nel tuo negozio -- ecco come funziona davvero l&apos;economia degli occhiali da sole.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">L&apos;Anatomia del Prezzo di un Paio di Occhiali</h2>
          <p>Prendiamo un esempio concreto: un paio di occhiali in acetato con lenti CR-39 polarizzate, custodia EVA e scatola retail.</p>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Voce di Costo</th><th className="px-6 py-4 text-left">Costo</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Montatura acetato</td><td className="px-6 py-4">$6,00-8,00</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Lenti CR-39 polarizzate</td><td className="px-6 py-4">$2,50-4,00</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Packaging (custodia + scatola + panno)</td><td className="px-6 py-4">$2,00-3,50</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Logo e branding</td><td className="px-6 py-4">$0,30-0,60</td></tr>
                <tr className="bg-white font-bold"><td className="px-6 py-4">Costo FOB (franco bordo)</td><td className="px-6 py-4">$10,80-16,10</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Spedizione + dazi (stimato)</td><td className="px-6 py-4">$2,00-4,00</td></tr>
                <tr className="bg-primary-50 font-bold"><td className="px-6 py-4">Costo Consegnato Totale</td><td className="px-6 py-4">$12,80-20,10</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Strategie di Markup</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">DTC (Direct to Consumer)</h3>
          <p>La vendita diretta ti dà i margini migliori. La formula standard è un markup 4-6x sul costo consegnato:</p>
          <ul>
            <li>Costo consegnato: $15 → Prezzo retail: $59-89</li>
            <li>Costo consegnato: $20 → Prezzo retail: $79-119</li>
            <li><strong>Margine lordo tipico: 70-85%</strong></li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Wholesale (Vendita all&apos;Ingrosso)</h3>
          <p>Se vendi a negozi, devi lasciare margine anche al rivenditore:</p>
          <ul>
            <li>Il tuo prezzo wholesale = 2-3x il costo consegnato</li>
            <li>Il rivenditore fa markup 2-2,5x sul wholesale</li>
            <li>Esempio: costo $15 → wholesale $35 → retail $79</li>
            <li><strong>Il tuo margine: 55-65%</strong></li>
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-6">Fasce di Prezzo che Funzionano</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Fascia Retail</th><th className="px-6 py-4 text-left">Budget Costo</th><th className="px-6 py-4 text-left">Posizionamento</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">$19-39</td><td className="px-6 py-4">$3-8</td><td className="px-6 py-4">Value -- TR90, lenti base, packaging minimo</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">$39-79</td><td className="px-6 py-4">$8-15</td><td className="px-6 py-4">Mid-range -- acetato/TR90 premium, lenti polarizzate</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">$79-149</td><td className="px-6 py-4">$12-22</td><td className="px-6 py-4">Premium -- acetato italiano, CR-39 polarizzate, packaging curato</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">$149-249</td><td className="px-6 py-4">$18-35</td><td className="px-6 py-4">Lusso -- titanio/acetato premium, vetro, packaging luxury</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Errori di Prezzo Comuni</h2>
          <ul>
            <li><strong>Prezzo troppo basso:</strong> Molti nuovi brand hanno paura di caricare troppo. Ma un prezzo basso comunica qualità bassa. Se i tuoi occhiali costano $15 da produrre e li vendi a $29, il cliente pensa che siano economici.</li>
            <li><strong>Non considerare tutti i costi:</strong> Il costo FOB non è il tuo costo reale. Aggiungi spedizione, dazi, resi (prevedi 5-10%), marketing (20-30% del fatturato), e costi operativi.</li>
            <li><strong>Confrontarsi con i brand sbagliati:</strong> Non competere sul prezzo con Luxottica. Competi su storia, esperienza e nicchia.</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Vuoi un&apos;Analisi dei Prezzi per il Tuo Brand?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Mandami il tuo posizionamento e i tuoi canali di vendita. Ti aiuterò a trovare il punto di prezzo che massimizza sia le vendite che i margini.</p>
            <Link href="/it/contatto" className="btn-primary">Parla di Prezzi con Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/costi-avvio-brand-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Quanto Costa Lanciare un Brand di Occhiali?</h3><p className="text-gray-600 text-sm">Budget completo da $3.000 bootstrap a $50.000+ lancio premium.</p></Link>
              <Link href="/it/blog/guida-moq-occhiali" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guida MOQ: Quante Paia Ordinare?</h3><p className="text-gray-600 text-sm">La strategia intelligente per scalare senza sovrainvestire.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}
