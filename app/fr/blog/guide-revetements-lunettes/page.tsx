import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide des Traitements de Verres : Miroir, Anti-Reflet, Hydrophobe et Plus',
  description: 'Un propriétaire d\'usine détaille chaque type de traitement de verre — miroir, AR, hydrophobe, oléophobe, anti-buée, anti-rayures, filtre lumière bleue. Coûts réels par paire et combinaisons optimales.',
  keywords: 'traitements verres lunettes, revêtement miroir lunettes, anti-reflet lunettes, hydrophobe verre, oléophobe, anti-buée lunettes, anti-rayures verres, filtre lumière bleue',
  alternates: { canonical: '/fr/blog/guide-revetements-lunettes', languages: { 'en': '/blog/sunglasses-coating-guide', 'fr': '/fr/blog/guide-revetements-lunettes' } },
}

export default function GuideRevetementsLunettesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Guide des Traitements de Verres : Miroir, Anti-Reflet, Hydrophobe et Plus", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/guide-revetements-lunettes" }, "inLanguage": "fr" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Quels sont les principaux types de traitements pour lunettes de soleil ?", "acceptedAnswer": { "@type": "Answer", "text": "Les sept principaux traitements sont : le miroir (flash) pour le style et la réduction de l'éblouissement, l'anti-reflet (AR) pour éliminer les reflets parasites, l'hydrophobe pour repousser l'eau, l'oléophobe pour résister aux traces de doigts, l'anti-buée pour éviter la condensation, le hard coat pour la résistance aux rayures, et le filtre lumière bleue. La plupart des verres de qualité combinent 3-4 de ces traitements." } },
          { "@type": "Question", "name": "Combien coûtent les traitements de verres par paire ?", "acceptedAnswer": { "@type": "Answer", "text": "À l'échelle usine : hard coat basique 0,15 $, anti-reflet 0,60-1,50 $, hydrophobe 0,20-0,50 $, oléophobe 0,30-0,60 $, anti-buée 0,40-0,80 $, miroir multicouche premium 1,80-3,00 $, filtre lumière bleue 0,50-1,20 $. Un pack premium complet de 4-5 traitements ajoute typiquement 2,50-5,00 $ par paire." } },
          { "@type": "Question", "name": "Peut-on combiner plusieurs traitements sur un verre ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, et c'est recommandé. L'ordre standard d'empilage, de la surface du verre vers l'extérieur : hard coat (couche de base), puis AR, puis miroir (si applicable), puis hydrophobe et oléophobe en couches externes. L'anti-buée s'applique sur la face interne du verre." } }
        ] })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Technologie</span><span>3 mai 2026</span><span>•</span><span>12 min de lecture</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Guide des Traitements de Verres : Miroir, Anti-Reflet, Hydrophobe et Plus</h1>
          <p className="text-xl text-gray-600">Les traitements transforment un verre basique en un produit premium. Voici chaque option, son coût réel, et les combinaisons qui fonctionnent.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">Les 7 traitements expliqués</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Hard coat (anti-rayures)</h3>
          <p>La couche de base indispensable. Renforce la surface du verre contre les rayures du quotidien. <strong>Coût : 0,15-0,40 $.</strong> Incluez-le toujours.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Anti-reflet (AR)</h3>
          <p>Élimine les reflets parasites sur la face interne du verre — ceux qui vous éblouissent quand le soleil est derrière vous. <strong>Coût : 0,60-1,50 $.</strong> Fortement recommandé pour les verres non-miroir.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Miroir (flash)</h3>
          <p>L&apos;effet miroir réduit la transmission lumineuse et donne un look distinctif. Disponible en argent, or, bleu, vert, rose, multicolore. <strong>Coût : 0,80-3,00 $</strong> selon le nombre de couches et la couleur.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Hydrophobe</h3>
          <p>Repousse l&apos;eau — les gouttes glissent au lieu de rester. Idéal pour les sports nautiques et le quotidien pluvieux. <strong>Coût : 0,20-0,50 $.</strong></p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Oléophobe</h3>
          <p>Résiste aux traces de doigts et aux huiles. Facilite le nettoyage. <strong>Coût : 0,30-0,60 $.</strong></p>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Anti-buée</h3>
          <p>Empêche la condensation quand on passe du froid au chaud. S&apos;applique sur la face interne. <strong>Coût : 0,40-0,80 $.</strong></p>

          <h3 className="text-2xl font-bold mt-8 mb-4">7. Filtre lumière bleue</h3>
          <p>Bloque la lumière bleue HEV. Argument marketing en croissance, surtout pour les lunettes à double usage (soleil/écran). <strong>Coût : 0,50-1,20 $.</strong></p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Combinaisons recommandées par segment</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Segment</th><th className="px-6 py-4 text-left">Traitements</th><th className="px-6 py-4 text-left">Surcoût/paire</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Entrée de gamme</td><td className="px-6 py-4">Hard coat + UV400</td><td className="px-6 py-4">0,20-0,50 $</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Milieu de gamme</td><td className="px-6 py-4">Hard coat + AR + hydrophobe</td><td className="px-6 py-4">1,00-2,50 $</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Premium</td><td className="px-6 py-4">Hard coat + AR + hydrophobe + oléophobe + miroir</td><td className="px-6 py-4">2,50-5,00 $</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Sport</td><td className="px-6 py-4">Hard coat + AR + hydrophobe + anti-buée</td><td className="px-6 py-4">1,50-3,00 $</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d&apos;Aide pour Choisir Vos Traitements ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Je vous aide à sélectionner la combinaison optimale pour votre positionnement et votre budget.</p>
            <Link href="/fr/contact" className="btn-primary">Demandez Conseil à Jacky</Link>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/guide-verres-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guide Complet des Verres</h3><p className="text-gray-600 text-sm">Matériaux, couleurs et polarisation — le guide de base.</p></Link>
              <Link href="/fr/blog/uv400-vs-polarisees" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">UV400 vs Polarisées</h3><p className="text-gray-600 text-sm">Deux technologies différentes — comprenez la distinction.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
