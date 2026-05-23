import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stratégie de Prix Lunettes de Soleil : Du Coût Usine au Prix de Vente',
  description: 'Un propriétaire d\'usine révèle la vraie économie de la tarification des lunettes — coûts usine, markup wholesale, marges retail et stratégies de prix qui fonctionnent.',
  keywords: 'stratégie prix lunettes, markup lunettes, prix gros lunettes, marge bénéficiaire lunettes, prix détail lunettes',
  alternates: { canonical: '/fr/blog/strategie-prix-lunettes', languages: { 'en': '/blog/sunglasses-pricing-strategy', 'fr': '/fr/blog/strategie-prix-lunettes' } },
}

export default function StrategiePrixLunettesPage() {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Stratégie de Prix Lunettes de Soleil : Du Coût Usine au Prix de Vente", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/strategie-prix-lunettes" }, "inLanguage": "fr" })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Business</span>
            <span>4 mai 2026</span><span>•</span><span>12 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stratégie de Prix Lunettes de Soleil : Du Coût Usine au Prix de Vente</h1>
          <p className="text-xl text-gray-600">La plupart des marques se trompent sur leur prix — soit trop bas (pas de marge), soit trop haut (pas de ventes). Voici comment trouver le juste milieu, avec les vrais chiffres.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">La formule de prix en DTC</h2>
          <p>La règle de base : <strong>prix de vente = coût rendu × 4-5x</strong>. Votre coût rendu inclut tout : produit, packaging, expédition, droits de douane.</p>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Segment</th><th className="px-6 py-4 text-left">Coût rendu</th><th className="px-6 py-4 text-left">Prix DTC</th><th className="px-6 py-4 text-left">Marge brute</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Entrée de gamme</td><td className="px-6 py-4">5-8 $</td><td className="px-6 py-4">25-39 $</td><td className="px-6 py-4">70-80 %</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Milieu de gamme</td><td className="px-6 py-4">10-16 $</td><td className="px-6 py-4">49-79 $</td><td className="px-6 py-4">70-80 %</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Premium</td><td className="px-6 py-4">15-25 $</td><td className="px-6 py-4">89-149 $</td><td className="px-6 py-4">75-83 %</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Luxe</td><td className="px-6 py-4">25-40 $</td><td className="px-6 py-4">149-249 $</td><td className="px-6 py-4">80-84 %</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">Wholesale vs DTC : l&apos;impact sur vos marges</h2>
          <p><strong>DTC (Direct-to-Consumer) :</strong> Markup 4-5x. Vous gardez toute la marge mais payez les coûts d&apos;acquisition client.</p>
          <p><strong>Wholesale :</strong> Markup 2-2,5x au prix wholesale. Le détaillant ajoute son propre markup 2x. Vous gagnez moins par unité mais en volume.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Ce que votre prix communique</h2>
          <ul>
            <li><strong>Moins de 25 $ :</strong> « Lunettes de plage jetables. » Difficile de construire une marque.</li>
            <li><strong>29-49 $ :</strong> « Bon rapport qualité-prix. » Le sweet spot pour les marques DTC débutantes.</li>
            <li><strong>59-99 $ :</strong> « Qualité sérieuse. » Le terrain de jeu des marques lifestyle établies.</li>
            <li><strong>100-199 $ :</strong> « Premium. » Le client attend des matériaux haut de gamme et un design unique.</li>
            <li><strong>200 $+ :</strong> « Luxe. » Il faut une histoire de marque forte et une distribution contrôlée.</li>
          </ul>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">Le conseil de Jacky</h3>
            <p className="text-primary-800">Ne fixez pas votre prix en fonction de votre coût. Fixez-le en fonction de la <em>valeur perçue</em>. Puis assurez-vous que votre coût vous laisse une marge saine. Le packaging, la marque et l&apos;expérience client peuvent transformer des lunettes à 12 $ en un produit qui se vend 89 $. Lisez notre <Link href="/fr/blog/packaging-lunettes-personnalise" className="text-primary-600 hover:underline">guide packaging</Link>.</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d&apos;Aide pour Votre Stratégie de Prix ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Je vous aide à calculer votre coût rendu réel et à positionner votre prix pour maximiser les marges.</p>
            <Link href="/fr/contact" className="btn-primary">Discutez Prix avec Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/cout-lancement-marque-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Coût de Lancement d&apos;une Marque</h3><p className="text-gray-600 text-sm">Tous les coûts détaillés pour démarrer.</p></Link>
              <Link href="/fr/blog/guide-moq-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guide MOQ Lunettes</h3><p className="text-gray-600 text-sm">Combien commander pour votre première commande.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
