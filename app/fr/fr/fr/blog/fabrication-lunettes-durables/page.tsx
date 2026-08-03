import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabrication Durable de Lunettes de Soleil : Matériaux et Procédés Éco-Responsables',
  description: 'Un propriétaire d\'usine explique la fabrication durable de lunettes -- bio-acétate, nylon recyclé, plastique océanique, packaging éco-responsable et ce que « durable » signifie vraiment dans la production de lunettes.',
  keywords: 'lunettes durables, fabrication éco-responsable lunettes, lunettes recyclées, bio-acétate lunettes, lunettes plastique océanique, lunettes écologiques',
  alternates: { canonical: '/fr/blog/fabrication-lunettes-durables', languages: { 'en': '/blog/sustainable-sunglasses-manufacturing', 'fr': '/fr/blog/fabrication-lunettes-durables' } },
}

export default function FabricationLunettesDurablesPage() {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Fabrication Durable de Lunettes de Soleil : Matériaux et Procédés Éco-Responsables", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/fabrication-lunettes-durables" }, "inLanguage": "fr" })}} />
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Durabilité</span><span>4 mai 2026</span><span>•</span><span>12 min de lecture</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fabrication Durable de Lunettes : Matériaux et Procédés Éco-Responsables</h1>
          <p className="text-xl text-gray-600">La durabilité dans la lunetterie n&apos;est plus une niche -- c&apos;est une attente. Voici ce qui est réellement possible, ce que ça coûte, et ce qui relève du greenwashing.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200"><div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div><div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div></div>
        </header>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-16 mb-6">Les matériaux durables disponibles</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Bio-acétate</h3>
          <p>Fabriqué à partir de coton et de pulpe de bois -- biodégradable dans les bonnes conditions. Aspect et toucher identiques à l&apos;acétate traditionnel. Surcoût : +15-25 % par rapport à l&apos;acétate standard.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Nylon recyclé (rPET, Econyl)</h3>
          <p>Fabriqué à partir de filets de pêche et de déchets plastiques récupérés. Performances similaires au TR90. Surcoût : +20-30 %. Excellent argument marketing.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Plastique océanique</h3>
          <p>Plastique récupéré des océans et des zones côtières, retraité en granulés pour injection. L&apos;histoire marketing est puissante. Surcoût : +25-40 %. Vérifiez les certifications de traçabilité.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Bois et bambou</h3>
          <p>Esthétique distinctive mais limitations de production (plus difficile à produire en masse, ajustabilité limitée). Niche mais fidélise une clientèle engagée.</p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Packaging éco-responsable</h2>
          <ul>
            <li><strong>Étuis en liège ou carton recyclé :</strong> +0,50-1,50 $ vs étuis standards</li>
            <li><strong>Pochettes en coton bio :</strong> +0,20-0,40 $ vs microfibre synthétique</li>
            <li><strong>Boîtes en carton recyclé avec encres végétales :</strong> +0,30-0,80 $</li>
            <li><strong>Suppression du plastique :</strong> Remplacez les sachets poly par du papier de soie</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Le vrai conseil de Jacky sur la durabilité</h3>
            <p className="text-green-800">Ne prétendez pas être 100 % durable si vous ne l&apos;êtes pas. Les consommateurs détectent le greenwashing. Soyez honnête : « Nos montures sont en bio-acétate mais nos verres et charnières sont conventionnels. Nous travaillons à améliorer chaque composant. » L&apos;honnêteté construit plus de confiance que des allégations exagérées.</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Envie de Passer au Durable ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Nous proposons du bio-acétate, du nylon recyclé et du packaging éco-responsable. Parlons de ce qui est faisable pour votre marque et votre budget.</p>
            <Link href="/fr/contact" className="btn-primary">Explorez les Options Durables</Link>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/comparaison-materiaux-montures" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">TR90 vs Acétate vs Métal</h3><p className="text-gray-600 text-sm">Comparaison complète des matériaux de montures.</p></Link>
              <Link href="/fr/blog/tendances-lunettes-2026" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Tendances Lunettes 2026</h3><p className="text-gray-600 text-sm">Le durable est une tendance majeure -- voici les chiffres.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}
