import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TR90 vs Acétate vs Métal : Quel Matériau de Monture pour Votre Marque ?',
  description: 'Un propriétaire d\'usine compare les montures TR90, acétate et métal -- coûts réels, poids, durabilité et quel matériau convient le mieux à chaque stratégie de marque.',
  keywords: 'comparaison matériaux montures lunettes, lunettes TR90, montures acétate, montures métal, TR90 vs acétate, coût matériaux montures',
  alternates: {
    canonical: '/fr/blog/comparaison-materiaux-montures',
    languages: {
      'en': '/blog/frame-material-comparison',
      'fr': '/fr/blog/comparaison-materiaux-montures',
    },
  },
}

export default function ComparaisonMateriauxMonturesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          "headline": "TR90 vs Acétate vs Métal : Quel Matériau de Monture pour Votre Marque ?",
          "datePublished": "2026-05-03", "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Comparaison détaillée des montures TR90, acétate et métal -- coûts, poids, durabilité et recommandations par type de marque.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/comparaison-materiaux-montures" },
          "inLanguage": "fr"
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Qu'est-ce que le TR90 et pourquoi est-il utilisé dans les lunettes de soleil ?", "acceptedAnswer": { "@type": "Answer", "text": "Le TR90 est un polyamide thermoplastique (polymère à base de nylon) développé à l'origine pour des applications médicales et militaires. Il est extrêmement léger -- environ 15-20 grammes pour une monture complète -- et pratiquement incassable en usage normal. C'est devenu le matériau de référence pour les lunettes de sport et lifestyle car il se plie au lieu de casser, résiste à la sueur et aux produits chimiques, et coûte 3-8 $ par monture en gros." } },
            { "@type": "Question", "name": "L'acétate est-il mieux que le TR90 ?", "acceptedAnswer": { "@type": "Answer", "text": "Ça dépend de votre positionnement. L'acétate a un aspect et un toucher plus premium -- couleurs plus riches, motifs plus profonds, un poids qui évoque la qualité. Mais le TR90 est plus léger, plus résistant et moins cher. Pour une marque mode/luxe, l'acétate l'emporte. Pour le sport ou l'entrée de gamme, le TR90 est le meilleur choix." } },
            { "@type": "Question", "name": "Combien coûtent les différents matériaux de montures en gros ?", "acceptedAnswer": { "@type": "Answer", "text": "Prix usine réels : montures TR90 entre 3-8 $ la paire, acétate entre 5-11 $, métal entre 8-22 $ selon l'alliage et la construction. Ce sont des coûts monture seule -- ajoutez 1,50-8 $ pour les verres selon le type et les traitements." } },
            { "@type": "Question", "name": "Peut-on mélanger les matériaux dans sa gamme ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument -- et la plupart des marques qui réussissent le font. Une gamme typique peut inclure des montures sport TR90 à 29-49 $ au détail, des montures mode en acétate à 79-149 $, et quelques aviateurs en métal à 99-179 $. Mélanger les matériaux permet de couvrir différents segments de prix et de clientèle." } }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Matériaux</span>
            <span>3 mai 2026</span><span>•</span><span>14 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">TR90 vs Acétate vs Métal : Quel Matériau de Monture pour Votre Marque ?</h1>
          <p className="text-xl text-gray-600">Chaque semaine, on me demande : « Jacky, quel matériau de monture choisir ? » Après 20 ans et environ 12 millions de montures, voici la vraie réponse -- avec les vrais chiffres de notre atelier.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Sommaire</h2>
          <ul className="space-y-2">
            <li><a href="#pourquoi-materiau" className="text-primary-600 hover:underline">Pourquoi le matériau compte plus que vous ne le pensez</a></li>
            <li><a href="#tr90" className="text-primary-600 hover:underline">TR90 : l&apos;athlète</a></li>
            <li><a href="#acetate" className="text-primary-600 hover:underline">Acétate : l&apos;icône mode</a></li>
            <li><a href="#metal" className="text-primary-600 hover:underline">Métal : le classique</a></li>
            <li><a href="#tableau-comparatif" className="text-primary-600 hover:underline">Tableau comparatif</a></li>
            <li><a href="#couts" className="text-primary-600 hover:underline">Coûts réels depuis l&apos;atelier</a></li>
            <li><a href="#quel-materiau" className="text-primary-600 hover:underline">Quel matériau pour quelle marque ?</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Il n&apos;y a pas de matériau universellement « meilleur ». Il y a seulement le meilleur matériau <em>pour votre marque, vos clients et votre budget</em>.</p>

          <h2 id="pourquoi-materiau" className="text-3xl font-bold mt-16 mb-6">Pourquoi le matériau compte plus que vous ne le pensez</h2>
          <p>Les clients ne savent généralement pas nommer le matériau de leurs lunettes. Mais ils <em>sentent</em> la différence instantanément. En trois secondes, ils ont jugé : « ça fait cheap » ou « ça fait premium ». Cette réaction instinctive ? C&apos;est presque entièrement une question de matériau.</p>

          <h2 id="tr90" className="text-3xl font-bold mt-16 mb-6">TR90 : l&apos;athlète</h2>
          <p><a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Le TR90 est un polyamide thermoplastique</a> -- un nylon haute performance développé à l&apos;origine pour l&apos;équipement médical et militaire.</p>
          <ul>
            <li><strong>Poids :</strong> 15-20 g. L&apos;équivalent de quatre pièces de monnaie. Des clients les portent 14 heures par jour sans les sentir.</li>
            <li><strong>Durabilité :</strong> On peut le plier, le tordre, s&apos;asseoir dessus. Il revient à sa forme d&apos;origine.</li>
            <li><strong>Résistance chimique :</strong> Sueur, crème solaire, eau salée -- rien ne l&apos;affecte.</li>
            <li><strong>Coût :</strong> 3-8 $ par monture. Production rapide par injection.</li>
          </ul>
          <p><strong>Les limites :</strong> Le TR90 ressemble à du plastique. Les options de couleurs sont plus limitées (~40 couleurs unies vs 200+ pour l&apos;acétate). Et la perception « luxe » est plus difficile à obtenir.</p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">TR90 en bref :</h3>
            <ul className="text-blue-800 space-y-1">
              <li><strong>Poids monture :</strong> 15-20 g</li>
              <li><strong>Coût usine :</strong> 3-8 $</li>
              <li><strong>Prix détail typique :</strong> 19-69 $</li>
              <li><strong>Idéal pour :</strong> Sport, outdoor, enfants, marques accessibles</li>
            </ul>
          </div>

          <h2 id="acetate" className="text-3xl font-bold mt-16 mb-6">Acétate : l&apos;icône mode</h2>
          <p>L&apos;acétate est le matériau qui a bâti l&apos;industrie de la lunetterie de luxe. Quand vous pensez aux Ray-Ban Wayfarer ou aux montures Tom Ford -- c&apos;est de l&apos;acétate. Le meilleur vient de <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Mazzucchelli en Italie</a>, qui le fabrique depuis 1849.</p>
          <ul>
            <li><strong>Esthétique :</strong> Rien d&apos;autre ne s&apos;en approche. Profondeur des couleurs, motifs écaille uniques, sensation premium.</li>
            <li><strong>200+ couleurs et motifs</strong> disponibles, des classiques aux plus audacieux.</li>
            <li><strong>Perception premium :</strong> 25-35 g de poids qui évoque la qualité. Un clic satisfaisant des charnières.</li>
            <li><strong>Ajustable :</strong> On peut le reformer à chaud pour un ajustement parfait.</li>
          </ul>
          <p><strong>Les limites :</strong> Peut se fissurer sous un choc violent. Sensible aux produits chimiques (crème solaire, parfum). Production 3-5x plus lente que le TR90.</p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Acétate en bref :</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Poids monture :</strong> 25-35 g</li>
              <li><strong>Coût usine :</strong> 5-11 $</li>
              <li><strong>Prix détail typique :</strong> 49-199 $</li>
              <li><strong>Idéal pour :</strong> Mode, lifestyle, premium, luxe</li>
            </ul>
          </div>

          <h2 id="metal" className="text-3xl font-bold mt-16 mb-6">Métal : le classique</h2>
          <p>Les montures métalliques existent depuis le XVIIIe siècle. L&apos;aviateur -- sans doute la forme de lunettes la plus iconique -- est une monture métallique.</p>
          <ul>
            <li><strong>Profils fins et élégants :</strong> Le métal permet des montures de 1-2 mm d&apos;épaisseur -- impossible en acétate ou TR90.</li>
            <li><strong>Attrait intemporel :</strong> Les aviateurs se vendent depuis 90 ans et comptent.</li>
            <li><strong>Très ajustable :</strong> Un bon opticien peut affiner l&apos;ajustement en quelques minutes.</li>
            <li><strong>Poids variable :</strong> Le titane peut descendre à 12-15 g -- plus léger que le TR90.</li>
          </ul>
          <p><strong>Les limites :</strong> Le plus cher des trois. Les alliages bon marché peuvent corroder. Se déforme de façon permanente au-delà de la limite élastique. Risque d&apos;allergie au nickel (10-15 % de la population).</p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-purple-900 mb-2">Métal en bref :</h3>
            <ul className="text-purple-800 space-y-1">
              <li><strong>Poids monture :</strong> 12-35 g (selon l&apos;alliage)</li>
              <li><strong>Coût usine :</strong> 8-22 $</li>
              <li><strong>Prix détail typique :</strong> 59-249 $</li>
              <li><strong>Idéal pour :</strong> Classique, minimaliste, premium, professionnel</li>
            </ul>
          </div>

          <h2 id="tableau-comparatif" className="text-3xl font-bold mt-16 mb-6">Tableau comparatif</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Critère</th><th className="px-6 py-4 text-left">TR90</th><th className="px-6 py-4 text-left">Acétate</th><th className="px-6 py-4 text-left">Métal</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Poids</td><td className="px-6 py-4">15-20 g</td><td className="px-6 py-4">25-35 g</td><td className="px-6 py-4">12-35 g</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Coût usine</td><td className="px-6 py-4">3-8 $</td><td className="px-6 py-4">5-11 $</td><td className="px-6 py-4">8-22 $</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Prix détail</td><td className="px-6 py-4">19-69 $</td><td className="px-6 py-4">49-199 $</td><td className="px-6 py-4">59-249 $</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Résistance aux chocs</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Aspect premium</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Options couleurs</td><td className="px-6 py-4">~40 unies</td><td className="px-6 py-4">200+ motifs</td><td className="px-6 py-4">5-8 tons métalliques</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Idéal pour</td><td className="px-6 py-4">Sport, outdoor, enfants</td><td className="px-6 py-4">Mode, lifestyle, luxe</td><td className="px-6 py-4">Classique, minimaliste</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="couts" className="text-3xl font-bold mt-16 mb-6">Coûts réels depuis l&apos;atelier</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Rappel : ce sont des coûts monture seule</h3>
            <p className="text-amber-800">Ajoutez 1,50-8 $ par paire pour les verres, 0,30-1,50 $ pour le packaging, et 0,50-2,00 $ pour l&apos;expédition par unité. Votre coût rendu total est généralement 40-60 % supérieur au coût monture seule.</p>
          </div>

          <h2 id="quel-materiau" className="text-3xl font-bold mt-16 mb-6">Quel matériau pour quelle marque ?</h2>
          <ul>
            <li><strong>Marque sport/outdoor :</strong> TR90. Sans hésiter.</li>
            <li><strong>Marque mode/lifestyle :</strong> Acétate. Le matériau fait la moitié du marketing.</li>
            <li><strong>Marque minimaliste/professionnelle :</strong> Métal. Fins, architecturaux, élégants.</li>
            <li><strong>Marque enfants/famille :</strong> TR90. Indestructible par les petites mains.</li>
            <li><strong>Gamme complète :</strong> Mélangez les trois. TR90 pour le sport, acétate pour la mode, métal pour les classiques.</li>
          </ul>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qu&apos;est-ce que le TR90 ?</h3>
              <p className="text-gray-600">Un polyamide thermoplastique ultra-léger (15-20 g) et quasi incassable, idéal pour les lunettes de sport. Coût : 3-8 $ par monture en gros.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">L&apos;acétate est-il mieux que le TR90 ?</h3>
              <p className="text-gray-600">Ça dépend. L&apos;acétate est plus premium (look et toucher). Le TR90 est plus léger, résistant et abordable. Mode = acétate. Sport = TR90. Les deux = une gamme complète.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quel est le matériau le plus résistant ?</h3>
              <p className="text-gray-600">Le TR90, de loin. Il se plie à 90°+ sans casser et survit à tous les mauvais traitements du quotidien.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM : Guide Complet</h3>
                <p className="text-gray-600 text-sm">La version honnête depuis l&apos;atelier -- depuis 2006.</p>
              </Link>
              <Link href="/fr/blog/guide-verres-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guide des Verres de Lunettes de Soleil</h3>
                <p className="text-gray-600 text-sm">Les montures attirent l&apos;attention, mais les verres font le produit.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
