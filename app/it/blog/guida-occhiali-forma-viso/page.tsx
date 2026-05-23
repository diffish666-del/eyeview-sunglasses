import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'I Migliori Occhiali da Sole per la Tua Forma del Viso: Guida Completa',
  description: 'Trova gli occhiali da sole perfetti per la tua forma del viso — rotondo, ovale, quadrato, a cuore, oblungo. Un proprietario di fabbrica spiega quali montature valorizzano ogni forma con esempi reali.',
  keywords: 'occhiali forma viso, migliori occhiali viso rotondo, occhiali viso ovale, occhiali viso quadrato, occhiali viso cuore, guida acquisto occhiali',
  alternates: { canonical: '/it/blog/guida-occhiali-forma-viso', languages: { 'en': '/blog/sunglasses-face-shape-guide', 'it': '/it/blog/guida-occhiali-forma-viso' } },
}

export default function GuidaFormaVisoPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
      }) }} />
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "I Migliori Occhiali da Sole per la Tua Forma del Viso: Guida Completa", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondatore", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Trova gli occhiali perfetti per viso rotondo, ovale, quadrato, a cuore e oblungo. Consigli esperti con esempi reali.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/it/blog/guida-occhiali-forma-viso" }, "inLanguage": "it" })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Stile</span><span>4 maggio 2026</span><span>•</span><span>10 min di lettura</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">I Migliori Occhiali da Sole per la Tua Forma del Viso: Guida Completa</h1>
          <p className="text-xl text-gray-600">Dopo aver visto migliaia di persone provare occhiali nella nostra showroom, so esattamente quali forme funzionano per ogni tipo di viso. Ecco la guida che do ai miei clienti brand per aiutarli a consigliare i loro consumatori.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondatore, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">La Regola d&apos;Oro: Contrasto</h2>
          <p>Il principio base è semplice: <strong>scegli montature che contrastino con la forma del tuo viso</strong>. Un viso rotondo sta bene con montature angolari. Un viso spigoloso sta bene con montature morbide e arrotondate. Il contrasto crea equilibrio.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Viso Rotondo</h2>
          <p><strong>Caratteristiche:</strong> Guance piene, fronte e mascella di larghezza simile, linee morbide.</p>
          <p><strong>Montature ideali:</strong> Quadrate, rettangolari, wayfarer, cat-eye angolari. Queste aggiungono definizione e allungano visivamente il viso.</p>
          <p><strong>Da evitare:</strong> Montature rotonde (amplificano la rotondità), montature troppo piccole.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Viso Ovale</h2>
          <p><strong>Caratteristiche:</strong> Proporzionato, leggermente più stretto a fronte e mascella, zigomi prominenti.</p>
          <p><strong>Montature ideali:</strong> Praticamente tutto! Il viso ovale è il più versatile. Wayfarer, aviator, cat-eye, rotondi — prova tutto.</p>
          <p><strong>Consiglio:</strong> Scegli montature larghe quanto il punto più largo del viso per mantenere le proporzioni naturali.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Viso Quadrato</h2>
          <p><strong>Caratteristiche:</strong> Mascella forte e angolare, fronte larga, viso largo quanto lungo.</p>
          <p><strong>Montature ideali:</strong> Rotondi, ovali, aviator, montature con curve morbide. Ammorbidiscono le linee angolari del viso.</p>
          <p><strong>Da evitare:</strong> Montature quadrate o rettangolari troppo rigide (amplificano l&apos;angolarità).</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Viso a Cuore (Triangolo Invertito)</h2>
          <p><strong>Caratteristiche:</strong> Fronte larga, zigomi alti, mento stretto e appuntito.</p>
          <p><strong>Montature ideali:</strong> Aviator, montature a goccia, cat-eye delicati, montature con la parte inferiore più ampia. Bilanciano la larghezza superiore del viso.</p>
          <p><strong>Da evitare:</strong> Montature oversize che enfatizzano la fronte, montature molto decorate nella parte superiore.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Viso Oblungo (Rettangolare)</h2>
          <p><strong>Caratteristiche:</strong> Viso più lungo che largo, fronte alta, guance lunghe.</p>
          <p><strong>Montature ideali:</strong> Oversize, wayfarer larghi, aviator grandi, montature con decorazioni laterali. Aggiungono larghezza e accorciano visivamente il viso.</p>
          <p><strong>Da evitare:</strong> Montature strette e sottili che allungano ulteriormente il viso.</p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-2">Consiglio per i Brand:</h3>
            <p className="text-primary-800">Includi una guida alla forma del viso sul tuo sito web. È uno dei contenuti più cercati nel settore eyewear e aiuta i clienti a sentirsi sicuri nell&apos;acquisto — soprattutto online dove non possono provare. I brand che includono questa guida vedono tassi di reso inferiori del 15-20%.</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Cerchi Montature per Ogni Forma del Viso?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Il nostro catalogo include modelli ottimizzati per ogni tipo di viso. Possiamo aiutarti a costruire una collezione che copra tutte le forme.</p>
            <Link href="/it/contatto" className="btn-primary">Sfoglia le Nostre Collezioni</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Altro dal Reparto Produzione</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/it/blog/tendenze-design-occhiali-2026" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Tendenze Design Occhiali 2026</h3><p className="text-gray-600 text-sm">Cosa si vende adesso — dati reali dalla nostra fabbrica.</p></Link>
              <Link href="/it/blog/confronto-materiali-montature" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metallo</h3><p className="text-gray-600 text-sm">Quale materiale è giusto per il tuo brand?</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
