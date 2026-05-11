import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UV400 vs Polarisées : Quelle Différence et Faut-il les Deux ?',
  description: 'Un propriétaire d\'usine de lunettes explique la vraie différence entre UV400 et verres polarisés — ce que chacun fait, l\'impact sur le coût en gros, et quand votre marque a besoin de l\'un, des deux ou d\'aucun.',
  keywords: 'UV400 vs polarisées lunettes, protection UV400, verres polarisés, protection verres lunettes, UV vs polarisation différence',
  alternates: { canonical: '/fr/blog/uv400-vs-polarisees', languages: { 'en': '/blog/uv400-vs-polarized', 'fr': '/fr/blog/uv400-vs-polarisees' } },
}

export default function Uv400VsPolariseesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "UV400 vs Polarisées : Quelle Différence et Faut-il les Deux ?", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/uv400-vs-polarisees" }, "inLanguage": "fr" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Quelle est la différence entre UV400 et polarisé ?", "acceptedAnswer": { "@type": "Answer", "text": "Ce sont deux technologies différentes qui protègent vos yeux de deux manières distinctes. UV400 bloque les rayons ultraviolets nocifs (UVA et UVB) — c'est une protection sanitaire essentielle. La polarisation bloque l'éblouissement réfléchi (reflets sur l'eau, la route, la neige) — c'est un confort visuel. Toutes les lunettes devraient être UV400. La polarisation est un plus, pas un remplacement." } },
          { "@type": "Question", "name": "Faut-il les deux, UV400 et polarisé ?", "acceptedAnswer": { "@type": "Answer", "text": "UV400 est non négociable — toute paire de lunettes de soleil doit bloquer les UV. La polarisation est un excellent ajout pour la conduite, la pêche et les sports nautiques, mais elle n'est pas indispensable pour un usage mode décontracté. Le surcoût en gros est de 0,50-2,00 $ par paire seulement, donc proposer les deux est généralement rentable." } },
          { "@type": "Question", "name": "Les verres polarisés protègent-ils contre les UV ?", "acceptedAnswer": { "@type": "Answer", "text": "Pas automatiquement. La polarisation et la protection UV sont deux traitements distincts. Un verre peut être polarisé sans bloquer les UV (dangereux), ou UV400 sans être polarisé (sûr mais sans réduction de l'éblouissement). Les verres de qualité combinent les deux, mais vérifiez toujours — demandez le certificat UV400 en plus de la polarisation." } }
        ] })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Technologie</span><span>3 mai 2026</span><span>•</span><span>10 min de lecture</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UV400 vs Polarisées : Quelle Différence et Faut-il les Deux ?</h1>
          <p className="text-xl text-gray-600">Deux technologies, deux fonctions totalement différentes. Voici comment elles fonctionnent, ce qu&apos;elles coûtent, et quand votre marque a besoin de l&apos;une, des deux ou d&apos;aucune.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">UV400 : la protection santé (non négociable)</h2>
          <p><strong>UV400 signifie que le verre bloque 99-100 % des rayonnements UV jusqu&apos;à 400 nanomètres.</strong> Cela couvre les UVA (315-400 nm) et les UVB (280-315 nm), les deux types de rayons nocifs pour les yeux.</p>
          <p>C&apos;est une protection sanitaire, pas un luxe. Des verres teintés sans protection UV sont <em>plus dangereux</em> que pas de lunettes du tout — la teinte dilate les pupilles, laissant entrer plus d&apos;UV si le verre ne les bloque pas.</p>
          <p><strong>Coût :</strong> Pratiquement nul. Le polycarbonate bloque naturellement les UV400. Le CR-39 et le TAC nécessitent un traitement UV, mais le coût est minime (0,05-0,20 $ par paire).</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Polarisation : le confort visuel (fortement recommandé)</h2>
          <p><strong>La polarisation est un filtre qui bloque la lumière réfléchie horizontalement</strong> — l&apos;éblouissement sur l&apos;eau, la route mouillée, la neige, les surfaces métalliques.</p>
          <p><strong>Coût en gros :</strong> 0,50-2,00 $ de surcoût par paire. <strong>Valeur au détail :</strong> vous pouvez facturer 30-60 % de plus. Le retour sur investissement est excellent.</p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Critère</th><th className="px-6 py-4 text-left">UV400</th><th className="px-6 py-4 text-left">Polarisé</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Ce que ça fait</td><td className="px-6 py-4">Bloque les rayons UV nocifs</td><td className="px-6 py-4">Réduit l&apos;éblouissement réfléchi</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Protection santé ?</td><td className="px-6 py-4">✅ Essentielle</td><td className="px-6 py-4">❌ Confort, pas santé</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Obligatoire ?</td><td className="px-6 py-4">✅ Oui (légalement dans la plupart des marchés)</td><td className="px-6 py-4">❌ Non, mais très apprécié</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Surcoût en gros</td><td className="px-6 py-4">Quasi nul</td><td className="px-6 py-4">0,50-2,00 $/paire</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Idéal pour</td><td className="px-6 py-4">Toutes les lunettes de soleil</td><td className="px-6 py-4">Conduite, pêche, sports nautiques, neige</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Le piège à éviter</h3>
            <p className="text-amber-800">Ne vendez <strong>jamais</strong> des verres « polarisés » sans vérifier qu&apos;ils sont aussi UV400. Un verre polarisé sans protection UV est pire qu&apos;inutile — il réduit l&apos;éblouissement (confortable) mais laisse passer les UV (dangereux). Exigez toujours le double certificat.</p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Recommandation pour votre marque</h2>
          <ul>
            <li><strong>Minimum absolu :</strong> UV400 sur chaque paire. Non négociable.</li>
            <li><strong>Recommandé :</strong> UV400 + polarisé pour au moins 50 % de votre gamme. L&apos;argument commercial est fort.</li>
            <li><strong>Premium :</strong> UV400 + polarisé + anti-reflet + hydrophobe. Le pack complet pour justifier un prix élevé.</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Questions sur les Verres ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Je vous aide à choisir la bonne combinaison UV/polarisation/traitements pour votre positionnement.</p>
            <Link href="/fr/contact" className="btn-primary">Demandez Conseil à Jacky</Link>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/guide-verres-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guide Complet des Verres</h3><p className="text-gray-600 text-sm">Matériaux, couleurs, traitements — tout sur les verres.</p></Link>
              <Link href="/fr/blog/certification-fda-ce-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Certification FDA et CE</h3><p className="text-gray-600 text-sm">La conformité UV est une obligation légale — voici comment s&apos;y conformer.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
