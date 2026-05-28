import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contrôle Qualité Lunettes de Soleil : Checklist d\'Inspection en Usine',
  description: 'Un propriétaire d\'usine partage la checklist complète de CQ pour les lunettes — tests de verres, inspection de montures, vérification des charnières, contrôle UV et quoi vérifier avant de valider la production.',
  keywords: 'contrôle qualité lunettes, inspection lunettes, normes test lunettes, checklist CQ lunettes, défauts lunettes',
  alternates: { canonical: '/fr/blog/controle-qualite-lunettes', languages: { 'en': '/blog/sunglasses-quality-control', 'fr': '/fr/blog/controle-qualite-lunettes' } },
}

export default function ControleQualiteLunettesPage() {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Contrôle Qualité Lunettes de Soleil : Checklist d'Inspection en Usine", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/controle-qualite-lunettes" }, "inLanguage": "fr" })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Qualité</span><span>4 mai 2026</span><span>•</span><span>12 min de lecture</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contrôle Qualité Lunettes de Soleil : Checklist d&apos;Inspection en Usine</h1>
          <p className="text-xl text-gray-600">Voici exactement ce que nous vérifions sur chaque paire qui sort de notre chaîne — et ce que vous devriez vérifier avant de valider n&apos;importe quelle production.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">Les 7 points de contrôle essentiels</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Clarté optique des verres</h3>
          <p>Tenez le verre à 30 cm et regardez un bord droit (cadre de porte). Bougez lentement le verre. Si la ligne se courbe ou se déforme, le verre a une distorsion optique — rejetez-le.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">2. Protection UV</h3>
          <p>Exigez le rapport de test UV400 pour chaque lot de production. Pas juste une fois — <strong>chaque lot</strong>. Un spectrophotomètre vérifie la transmittance à chaque longueur d&apos;onde de 280 à 780 nm.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">3. Tension des charnières</h3>
          <p>Ouvrez et fermez les branches 200 fois. La tension doit rester constante. Des charnières qui se relâchent après 50 cycles seront flasques en un mois d&apos;usage client.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">4. Symétrie de la monture</h3>
          <p>Posez les lunettes à plat sur une surface plane. Les deux branches doivent toucher la surface uniformément. Un déséquilibre indique un défaut d&apos;assemblage.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">5. Finition de surface</h3>
          <p>Passez le doigt sur chaque bord de la monture. Toute rugosité, bavure ou point coupant est un défaut. Pour l&apos;acétate, vérifiez l&apos;uniformité du polissage.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">6. Application du logo</h3>
          <p>Le logo doit être net, centré et durable. Essayez de le gratter légèrement avec l&apos;ongle. Un logo qui part au premier contact ne survivra pas à l&apos;usage réel.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">7. Cohérence des couleurs</h3>
          <p>Comparez les pièces de production avec l&apos;échantillon approuvé. Sous lumière naturelle, pas sous l&apos;éclairage d&apos;usine (qui peut masquer des variations).</p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Quand faire appel à un inspecteur tiers</h3>
            <p className="text-blue-800">Pour les commandes de plus de 3 000 $ avec une nouvelle usine, engagez SGS, Bureau Veritas ou QIMA (200-400 $ par inspection). Ils vérifient un échantillon aléatoire de votre production selon vos spécifications. C&apos;est l&apos;assurance la moins chère du métier.</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Notre CQ est Inclus</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Chaque commande chez EyeView passe par notre processus de CQ en 7 points. Photos et rapports fournis avant expédition.</p>
            <Link href="/fr/contact" className="btn-primary">Discutez Qualité avec Jacky</Link>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/certification-fda-ce-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Certification FDA et CE</h3><p className="text-gray-600 text-sm">Guide de conformité complet pour vendre dans le monde entier.</p></Link>
              <Link href="/fr/blog/trouver-fabricant-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Trouver un Fabricant Fiable</h3><p className="text-gray-600 text-sm">10 critères pour choisir le bon partenaire.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
