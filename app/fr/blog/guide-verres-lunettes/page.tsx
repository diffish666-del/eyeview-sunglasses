import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types de Verres pour Lunettes de Soleil : Guide Complet 2026',
  description: 'Un propriétaire d\'usine détaille les matériaux, couleurs, traitements et polarisation des verres de lunettes de soleil. Coûts réels, comparaisons honnêtes et conseils de 20 ans d\'expérience.',
  keywords: 'types verres lunettes de soleil, verres polarisés, matériaux verres, CR-39 vs polycarbonate, couleurs verres lunettes, verres photochromiques, traitements verres, verres TAC',
  alternates: {
    canonical: '/fr/blog/guide-verres-lunettes',
    languages: {
      'en': '/blog/sunglasses-lens-guide',
      'fr': '/fr/blog/guide-verres-lunettes',
    },
  },
}

export default function GuideVerresLunettesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Types de Verres pour Lunettes de Soleil : Guide Complet 2026",
          "datePublished": "2026-04-25",
          "dateModified": "2026-05-02",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un propriétaire d'usine détaille les matériaux, couleurs, traitements et polarisation des verres de lunettes de soleil.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/guide-verres-lunettes" },
          "inLanguage": "fr"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quel est le meilleur matériau de verre pour les lunettes de soleil ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il n'y a pas de « meilleur » universel — tout dépend de l'usage. Le polycarbonate excelle en résistance aux chocs (sport, enfants). Le CR-39 offre la meilleure clarté optique pour la mode et le quotidien. Le verre minéral est la référence premium pour la résistance aux rayures et la clarté parfaite. Le TAC est le roi du rapport qualité-prix pour les verres polarisés." }
            },
            {
              "@type": "Question",
              "name": "Les verres polarisés valent-ils le coup ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Pour la conduite, la pêche et les sports nautiques ? Absolument oui. La réduction de l'éblouissement est radicale. Pour la mode et un usage intérieur/extérieur décontracté ? Agréable mais pas indispensable. Le surcoût en gros est de 0,50-2,00 $ par paire, mais vous pouvez facturer 30-60 % de plus au détail." }
            },
            {
              "@type": "Question",
              "name": "Quelle est la meilleure couleur de verre pour les lunettes de soleil ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Le gris est le plus polyvalent — il réduit la luminosité sans altérer les couleurs. Le marron améliore le contraste et la perception de la profondeur (idéal pour la conduite). Le vert offre un bon équilibre entre contraste et fidélité des couleurs. Le jaune/ambre améliore le contraste en faible luminosité. Le miroir est surtout esthétique avec une légère réduction supplémentaire de l'éblouissement." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Technologie</span>
            <span>25 avril 2026</span>
            <span>•</span>
            <span>14 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Types de Verres pour Lunettes de Soleil : Guide Complet 2026
          </h1>
          <p className="text-xl text-gray-600">
            Polycarbonate, CR-39, verre minéral ou TAC ? Gris, marron ou miroir ? Polarisés ou non ?
            Coûts réels, comparaisons honnêtes et la stratégie de verres pour votre marque.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Sommaire</h2>
          <ul className="space-y-2">
            <li><a href="#materiaux" className="text-primary-600 hover:underline">Les quatre matériaux de verres</a></li>
            <li><a href="#polarisation" className="text-primary-600 hover:underline">Polarisation : ce que c&apos;est vraiment</a></li>
            <li><a href="#couleurs" className="text-primary-600 hover:underline">Couleurs de verres : que choisir et pourquoi</a></li>
            <li><a href="#traitements" className="text-primary-600 hover:underline">Traitements : miroir, AR, hydrophobe</a></li>
            <li><a href="#comparaison-couts" className="text-primary-600 hover:underline">Comparaison des coûts réels</a></li>
            <li><a href="#strategie" className="text-primary-600 hover:underline">Quelle stratégie de verres pour votre marque ?</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Les montures attirent l&apos;attention, mais ce sont les verres qui font le produit. Après avoir
            monté des millions de paires de verres, voici tout ce que vous devez savoir — sans le jargon.
          </p>

          <h2 id="materiaux" className="text-3xl font-bold mt-16 mb-6">Les quatre matériaux de verres</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">TAC (Triacétate de Cellulose)</h3>
          <p>Le verre le plus utilisé dans les lunettes de soleil économiques et milieu de gamme. Léger, facile à polariser, et le moins cher de tous.</p>
          <ul>
            <li><strong>Coût :</strong> 0,50–1,50 $ la paire</li>
            <li><strong>Avantages :</strong> Prix imbattable, excellente polarisation, léger</li>
            <li><strong>Inconvénients :</strong> Se raye facilement, clarté optique moyenne</li>
            <li><strong>Idéal pour :</strong> Marques d&apos;entrée de gamme, lunettes promotionnelles</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Polycarbonate</h3>
          <p>Le champion de la résistance aux chocs. Pratiquement incassable, ce qui en fait le choix par défaut pour le sport et les enfants.</p>
          <ul>
            <li><strong>Coût :</strong> 1,00–2,50 $ la paire</li>
            <li><strong>Avantages :</strong> Résistance aux chocs exceptionnelle, protection UV400 naturelle, léger</li>
            <li><strong>Inconvénients :</strong> Se raye plus facilement que le CR-39 ou le verre, clarté optique légèrement inférieure</li>
            <li><strong>Idéal pour :</strong> Lunettes de sport, enfants, marques axées sécurité</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">CR-39</h3>
          <p>La référence qualité pour les lunettes de mode. Clarté optique excellente, bonne résistance aux rayures, et un poids agréable.</p>
          <ul>
            <li><strong>Coût :</strong> 2,00–5,00 $ la paire</li>
            <li><strong>Avantages :</strong> Excellente clarté optique, bonne résistance aux rayures, polarisation disponible</li>
            <li><strong>Inconvénients :</strong> Moins résistant aux chocs que le polycarbonate, plus cher</li>
            <li><strong>Idéal pour :</strong> Marques de mode, lifestyle, milieu et haut de gamme</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Verre minéral</h3>
          <p>Le nec plus ultra en clarté optique et résistance aux rayures. C&apos;est ce que portent les puristes.</p>
          <ul>
            <li><strong>Coût :</strong> 3,00–8,00 $ la paire</li>
            <li><strong>Avantages :</strong> Clarté optique parfaite, résistance aux rayures supérieure, sensation premium</li>
            <li><strong>Inconvénients :</strong> Plus lourd, peut se briser sur impact, plus cher</li>
            <li><strong>Idéal pour :</strong> Marques premium et luxe, positionnement $150+</li>
          </ul>

          <h2 id="polarisation" className="text-3xl font-bold mt-16 mb-6">Polarisation : ce que c&apos;est vraiment</h2>
          <p>
            La polarisation n&apos;est pas un traitement de surface — c&apos;est un filtre intégré au verre qui bloque la
            lumière réfléchie horizontalement (l&apos;éblouissement). Pour la conduite, la pêche et les sports nautiques,
            la différence est spectaculaire.
          </p>
          <p>
            Surcoût en gros : seulement 0,50–2,00 $ par paire. Mais vous pouvez facturer 30-60 % de plus au détail.
            Du point de vue commercial, proposer des verres polarisés est presque toujours rentable. Pour comprendre
            la différence avec la protection UV, lisez notre{' '}
            <Link href="/fr/blog/uv400-vs-polarisees" className="text-primary-600 hover:underline">guide UV400 vs polarisées</Link>.
          </p>

          <h2 id="couleurs" className="text-3xl font-bold mt-16 mb-6">Couleurs de verres : que choisir et pourquoi</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Couleur</th>
                  <th className="px-6 py-4 text-left">Meilleur usage</th>
                  <th className="px-6 py-4 text-left">Conduite ?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Gris</td><td className="px-6 py-4">Usage général — réduit la luminosité sans altérer les couleurs</td><td className="px-6 py-4">✅ Excellent</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Marron</td><td className="px-6 py-4">Conduite, outdoor — améliore le contraste</td><td className="px-6 py-4">✅ Excellent</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Vert</td><td className="px-6 py-4">Usage général — bon équilibre contraste/fidélité</td><td className="px-6 py-4">✅ Bon</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Jaune/Ambre</td><td className="px-6 py-4">Faible luminosité, tir, ski</td><td className="px-6 py-4">⚠️ Jour nuageux uniquement</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Miroir</td><td className="px-6 py-4">Style + réduction supplémentaire de l&apos;éblouissement</td><td className="px-6 py-4">✅ Selon la teinte de base</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="traitements" className="text-3xl font-bold mt-16 mb-6">Traitements : miroir, AR, hydrophobe</h2>
          <p>
            La plupart des verres de qualité combinent 3-4 traitements empilés. Pour un guide complet, consultez
            notre{' '}
            <Link href="/fr/blog/guide-revetements-lunettes" className="text-primary-600 hover:underline">guide des traitements de verres</Link>.
          </p>
          <ul>
            <li><strong>Miroir :</strong> 0,80–3,00 $ — esthétique et réduction de l&apos;éblouissement</li>
            <li><strong>Anti-reflet (AR) :</strong> 0,60–1,50 $ — élimine les reflets parasites sur la face interne</li>
            <li><strong>Hydrophobe :</strong> 0,20–0,50 $ — repousse l&apos;eau</li>
            <li><strong>Oléophobe :</strong> 0,30–0,60 $ — résiste aux traces de doigts</li>
            <li><strong>Anti-rayures (hard coat) :</strong> 0,15–0,40 $ — couche de base indispensable</li>
          </ul>

          <h2 id="comparaison-couts" className="text-3xl font-bold mt-16 mb-6">Comparaison des coûts réels</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Matériau</th>
                  <th className="px-6 py-4 text-left">Coût/paire</th>
                  <th className="px-6 py-4 text-left">+ Polarisation</th>
                  <th className="px-6 py-4 text-left">+ Miroir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">TAC</td><td className="px-6 py-4">0,50–1,50 $</td><td className="px-6 py-4">+0,30 $</td><td className="px-6 py-4">+0,80 $</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Polycarbonate</td><td className="px-6 py-4">1,00–2,50 $</td><td className="px-6 py-4">+0,80 $</td><td className="px-6 py-4">+1,00 $</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">CR-39</td><td className="px-6 py-4">2,00–5,00 $</td><td className="px-6 py-4">+1,50 $</td><td className="px-6 py-4">+1,50 $</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Verre minéral</td><td className="px-6 py-4">3,00–8,00 $</td><td className="px-6 py-4">+2,00 $</td><td className="px-6 py-4">+2,00 $</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="strategie" className="text-3xl font-bold mt-16 mb-6">Quelle stratégie de verres pour votre marque ?</h2>
          <ul>
            <li><strong>Marque sport/outdoor :</strong> Polycarbonate polarisé. Résistance aux chocs + anti-éblouissement.</li>
            <li><strong>Marque mode DTC :</strong> CR-39 polarisé. Le meilleur rapport qualité optique/prix.</li>
            <li><strong>Marque premium :</strong> CR-39 ou verre minéral avec traitement complet (AR + hydrophobe + anti-rayures).</li>
            <li><strong>Marque entrée de gamme :</strong> TAC polarisé. Prix imbattable avec un bon argument de vente.</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d&apos;Aide pour Choisir Vos Verres ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Je vous aide à choisir la combinaison matériau/couleur/traitement optimale pour votre positionnement
              et votre budget.
            </p>
            <Link href="/fr/contact" className="btn-primary">
              Demandez Conseil à Jacky
            </Link>
          </div>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quel est le meilleur matériau de verre ?</h3>
              <p className="text-gray-600">Ça dépend de l&apos;usage. Polycarbonate pour le sport. CR-39 pour la mode. Verre minéral pour le luxe. TAC pour le budget.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Les verres polarisés valent-ils le coup ?</h3>
              <p className="text-gray-600">Pour la conduite et les sports nautiques, absolument. Le surcoût de 0,50-2,00 $ permet de facturer 30-60 % de plus au détail.</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/uv400-vs-polarisees" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">UV400 vs Polarisées : Quelle Différence ?</h3>
                <p className="text-gray-600 text-sm">Deux technologies différentes qui protègent vos yeux de deux manières distinctes.</p>
              </Link>
              <Link href="/fr/blog/comparaison-materiaux-montures" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acétate vs Métal</h3>
                <p className="text-gray-600 text-sm">Les montures attirent l&apos;attention — voici comment choisir le bon matériau.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
