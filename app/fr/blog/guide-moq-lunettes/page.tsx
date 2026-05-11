import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide MOQ Lunettes de Soleil : Combien de Paires Commander en Premier ?',
  description: 'Un propriétaire d\'usine détaille les MOQ pour les commandes de lunettes en gros. ODM à partir de 50-200 pièces, OEM à 300-1 000+. La méthode intelligente pour dimensionner votre première commande.',
  keywords: 'MOQ lunettes de soleil gros, quantité minimale commande lunettes, lunettes gros commande, ODM MOQ, OEM MOQ lunettes',
  alternates: { canonical: '/fr/blog/guide-moq-lunettes', languages: { 'en': '/blog/sunglasses-moq-guide', 'fr': '/fr/blog/guide-moq-lunettes' } },
}

export default function GuideMoqLunettesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Guide MOQ Lunettes de Soleil : Combien de Paires Commander en Premier ?", "datePublished": "2026-05-03", "dateModified": "2026-05-03", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/guide-moq-lunettes" }, "inLanguage": "fr" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Quel est le MOQ typique pour les lunettes de soleil en gros ?", "acceptedAnswer": { "@type": "Answer", "text": "Ça dépend du modèle de production. ODM (designs existants) : 50-200 pièces par style. OEM (designs personnalisés avec moules existants) : 300-1 000 pièces par style. Moules entièrement personnalisés : 500+ pièces. Certaines usines, dont la nôtre, proposent des MOQ plus bas pour les premières commandes." } },
          { "@type": "Question", "name": "Peut-on commander moins de 100 paires ?", "acceptedAnswer": { "@type": "Answer", "text": "Certaines usines proposent des MOQ inférieurs à 100 pour l'ODM — nous commençons à 50 pièces pour les nouveaux clients. Mais attention : les très petites quantités signifient des coûts unitaires plus élevés, parfois 30-50 % de plus qu'à 200+ pièces." } },
          { "@type": "Question", "name": "Pourquoi les usines ont-elles des MOQ ?", "acceptedAnswer": { "@type": "Answer", "text": "Les MOQ existent à cause de l'économie de production. Le réglage d'une ligne — calibrage des machines, mélange de couleurs, configuration de la découpe des verres — prend du temps et de la main-d'œuvre, que vous fassiez 10 ou 10 000 paires. En dessous d'un certain seuil, les coûts de réglage par unité rendent la commande non rentable." } }
        ] })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Approvisionnement</span>
            <span>3 mai 2026</span><span>•</span><span>10 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Guide MOQ Lunettes de Soleil : Combien de Paires Commander en Premier ?</h1>
          <p className="text-xl text-gray-600">La question que chaque nouvelle marque me pose : « Combien dois-je commander ? » Voici la réponse intelligente qui évite le sur-stock comme le sous-stock.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div>
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">Les MOQ réels par type de commande</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Type</th><th className="px-6 py-4 text-left">MOQ/style</th><th className="px-6 py-4 text-left">Coût unitaire</th><th className="px-6 py-4 text-left">Délai</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">ODM (catalogue)</td><td className="px-6 py-4">50-200 pièces</td><td className="px-6 py-4">3-8 $</td><td className="px-6 py-4">20-45 jours</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">OEM (moule existant)</td><td className="px-6 py-4">300-1 000 pièces</td><td className="px-6 py-4">5-12 $</td><td className="px-6 py-4">30-60 jours</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">OEM (moule custom)</td><td className="px-6 py-4">500+ pièces</td><td className="px-6 py-4">6-15 $</td><td className="px-6 py-4">45-90 jours</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-16 mb-6">La stratégie de montée en volume intelligente</h2>
          <ol>
            <li className="mb-4"><strong>Première commande — testez :</strong> 3-5 styles × 50-100 pièces chacun = 150-500 paires totales. Budget : 1 500-5 000 $.</li>
            <li className="mb-4"><strong>Renouvellement — doublez les gagnants :</strong> Vos 2-3 best-sellers × 200-300 pièces. Abandonnez les styles qui ne se vendent pas.</li>
            <li className="mb-4"><strong>Montée en puissance — OEM :</strong> Avec des données de ventes solides, investissez dans 1-2 designs OEM personnalisés à 500+ pièces.</li>
          </ol>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 La règle de Jacky pour la première commande</h3>
            <p className="text-amber-800">Ne misez jamais plus de 30 % de votre budget sur un seul style. Diversifiez, testez, puis doublez les gagnants. Les données battent l&apos;intuition à chaque fois.</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Prêt à Dimensionner Votre Première Commande ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Je vous aide à trouver le juste équilibre entre budget, variété et quantité.</p>
            <Link href="/fr/contact" className="btn-primary">Planifiez avec Jacky</Link>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">OEM vs ODM : Guide Complet</h3><p className="text-gray-600 text-sm">Comprenez les modèles avant de choisir vos quantités.</p></Link>
              <Link href="/fr/blog/cout-lancement-marque-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Coût de Lancement d&apos;une Marque</h3><p className="text-gray-600 text-sm">Tous les budgets détaillés, de 3 000 $ à 50 000 $+.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
