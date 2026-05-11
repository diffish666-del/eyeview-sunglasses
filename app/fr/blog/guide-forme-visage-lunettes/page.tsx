import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Les Meilleures Lunettes de Soleil pour Votre Forme de Visage : Guide d\'Achat Complet',
  description: 'Trouvez les lunettes parfaites pour votre forme de visage — rond, ovale, carré, cœur, oblong. Un propriétaire d\'usine explique quelles montures mettent en valeur chaque morphologie.',
  keywords: 'lunettes forme visage, lunettes visage rond, lunettes visage ovale, lunettes visage carré, lunettes visage cœur, guide achat lunettes',
  alternates: { canonical: '/fr/blog/guide-forme-visage-lunettes', languages: { 'en': '/blog/sunglasses-face-shape-guide', 'fr': '/fr/blog/guide-forme-visage-lunettes' } },
}

export default function GuideFormeVisageLunettesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Les Meilleures Lunettes de Soleil pour Votre Forme de Visage", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/guide-forme-visage-lunettes" }, "inLanguage": "fr" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Quelles lunettes vont le mieux sur un visage rond ?", "acceptedAnswer": { "@type": "Answer", "text": "Les montures angulaires et géométriques — carrées, rectangulaires, wayfarer et cat-eye — ajoutent de la définition et du contraste aux courbes douces du visage. Évitez les montures parfaitement rondes. Privilégiez des montures légèrement plus larges que le visage avec des angles marqués." } },
          { "@type": "Question", "name": "Quelles lunettes conviennent à un visage ovale ?", "acceptedAnswer": { "@type": "Answer", "text": "Le visage ovale est le plus polyvalent — presque toutes les formes de montures fonctionnent. La clé : choisir des montures aussi larges (ou légèrement plus larges) que la partie la plus large du visage. Aviateurs, wayfarer, carrées oversize, cat-eye et rondes fonctionnent toutes." } },
          { "@type": "Question", "name": "Quelles lunettes conviennent à un visage carré ?", "acceptedAnswer": { "@type": "Answer", "text": "Les montures rondes et ovales adoucissent les angles d'un visage carré. Les aviateurs, les rondes oversize et les cat-eye arrondies fonctionnent très bien. Évitez les montures carrées qui accentuent la mâchoire. Optez pour des montures qui sont aussi larges que votre mâchoire ou légèrement plus larges." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Guide d&apos;Achat</span>
            <span>4 mai 2026</span><span>•</span><span>10 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Les Meilleures Lunettes de Soleil pour Votre Forme de Visage</h1>
          <p className="text-xl text-gray-600">Après avoir vu des milliers de visages essayer nos montures, voici les combinaisons qui fonctionnent à coup sûr — et celles à éviter.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">Visage rond</h2>
          <p><strong>Choisissez :</strong> Montures angulaires — carrées, rectangulaires, wayfarer, cat-eye. Elles ajoutent de la structure.</p>
          <p><strong>Évitez :</strong> Les rondes qui accentuent la rondeur.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Visage ovale</h2>
          <p><strong>Choisissez :</strong> Quasiment tout ! Le visage ovale est le plus polyvalent. Aviateurs, wayfarer, oversize, cat-eye, rondes — tout fonctionne.</p>
          <p><strong>Évitez :</strong> Les montures trop étroites ou trop grandes par rapport à vos proportions.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Visage carré</h2>
          <p><strong>Choisissez :</strong> Montures rondes et ovales pour adoucir les angles. Aviateurs, rondes oversize, cat-eye arrondies.</p>
          <p><strong>Évitez :</strong> Les montures carrées qui accentuent la mâchoire.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Visage en cœur</h2>
          <p><strong>Choisissez :</strong> Montures qui s&apos;élargissent vers le bas — aviateurs, montures à fond arrondi. Cat-eye fonctionne aussi si les angles ne sont pas trop prononcés.</p>
          <p><strong>Évitez :</strong> Les montures top-heavy (lourdes en haut) qui accentuent un front large.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Visage oblong</h2>
          <p><strong>Choisissez :</strong> Montures larges et oversize qui ajoutent de la largeur. Wayfarer, carrées oversize, écrans.</p>
          <p><strong>Évitez :</strong> Les montures étroites et allongées qui étirent davantage le visage.</p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">Le conseil de Jacky</h3>
            <p className="text-primary-800">Ces règles sont des guides, pas des lois. La confiance est le meilleur accessoire. Si une monture vous plaît et que vous vous sentez bien dedans, portez-la — peu importe ce que disent les guides de morphologie.</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Trouvez Vos Montures Parfaites</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Parcourez notre collection — nous avons des styles pour chaque forme de visage.</p>
            <Link href="/fr/produits" className="btn-primary">Voir la Collection</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/comparaison-materiaux-montures" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">TR90 vs Acétate vs Métal</h3><p className="text-gray-600 text-sm">Quel matériau pour quel style et budget ?</p></Link>
              <Link href="/fr/blog/tendances-lunettes-2026" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Tendances Lunettes 2026</h3><p className="text-gray-600 text-sm">Les styles qui cartonnent cette année.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
