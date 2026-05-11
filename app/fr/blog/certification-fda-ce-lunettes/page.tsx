import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certification FDA et CE pour Lunettes de Soleil : Guide de Conformité Complet',
  description: 'Un propriétaire d\'usine explique l\'enregistrement FDA, le marquage CE, les tests UV et les normes ANSI pour les lunettes de soleil. Guide étape par étape pour vendre aux États-Unis, en UE et dans le monde.',
  keywords: 'certification FDA lunettes, marquage CE lunettes de soleil, conformité lunettes, test UV lunettes, ANSI Z80.3, EN ISO 12312-1, réglementation lunettes',
  alternates: { canonical: '/fr/blog/certification-fda-ce-lunettes', languages: { 'en': '/blog/fda-ce-certification-sunglasses', 'fr': '/fr/blog/certification-fda-ce-lunettes' } },
}

export default function CertificationFdaCeLunettesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Certification FDA et CE pour Lunettes de Soleil : Guide de Conformité Complet", "datePublished": "2026-05-04", "dateModified": "2026-05-04", "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } }, "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" }, "description": "Guide complet de conformité FDA, CE et UV pour la vente de lunettes de soleil dans le monde entier.", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/certification-fda-ce-lunettes" }, "inLanguage": "fr" })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Les lunettes de soleil ont-elles besoin d'une approbation FDA pour être vendues aux États-Unis ?", "acceptedAnswer": { "@type": "Answer", "text": "Les lunettes n'ont pas besoin d'une « approbation » FDA mais elles doivent être conformes à la FDA. La FDA classe les lunettes de soleil comme dispositifs médicaux de classe I. Les fabricants et importateurs doivent enregistrer leur établissement auprès de la FDA et lister leurs produits. Les verres doivent aussi répondre aux exigences de résistance aux chocs." } },
          { "@type": "Question", "name": "Qu'est-ce que le marquage CE pour les lunettes de soleil ?", "acceptedAnswer": { "@type": "Answer", "text": "Le marquage CE indique que les lunettes sont conformes aux exigences de sécurité de l'UE. La norme clé est EN ISO 12312-1, qui couvre la protection UV, la qualité optique et la résistance mécanique. Le marquage CE est obligatoire pour vendre dans l'UE, l'EEE et le Royaume-Uni." } },
          { "@type": "Question", "name": "Combien coûtent les tests de conformité pour les lunettes ?", "acceptedAnswer": { "@type": "Answer", "text": "Test UV400 de base : 100-300 $ par style. Test complet de conformité (UV, résistance aux chocs, qualité optique) : 300-800 $ par style. L'enregistrement FDA est gratuit. La plupart des usines réputées incluent les tests de base dans leurs coûts de production." } },
          { "@type": "Question", "name": "Mes lunettes peuvent-elles être saisies en douane ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Les douanes américaines peuvent retenir les lunettes sans enregistrement FDA. Les douanes européennes saisissent régulièrement les envois sans marquage CE. L'Australie est la plus stricte — les lunettes non conformes sont systématiquement saisies et détruites. J'ai vu des clients perdre des envois de 10 000-50 000 $." } }
        ] })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Conformité</span>
            <span>4 mai 2026</span><span>•</span><span>15 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certification FDA et CE pour Lunettes de Soleil : Guide de Conformité Complet</h1>
          <p className="text-xl text-gray-600">Personne ne lance une marque de lunettes par passion pour la conformité réglementaire. Mais sautez cette étape et vos lunettes pourraient être saisies en douane — ou pire. Voici tout ce que vous devez savoir, simplifié.</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div></div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Sommaire</h2>
          <ul className="space-y-2">
            <li><a href="#pourquoi-conformite" className="text-primary-600 hover:underline">Pourquoi la conformité compte (histoires vraies)</a></li>
            <li><a href="#fda-us" className="text-primary-600 hover:underline">Exigences FDA : vendre aux États-Unis</a></li>
            <li><a href="#ce-ue" className="text-primary-600 hover:underline">Marquage CE : vendre dans l&apos;UE</a></li>
            <li><a href="#normes-uv" className="text-primary-600 hover:underline">Normes de protection UV</a></li>
            <li><a href="#autres-marches" className="text-primary-600 hover:underline">Autres marchés : Australie, Royaume-Uni, Japon</a></li>
            <li><a href="#couts-tests" className="text-primary-600 hover:underline">Coûts des tests et laboratoires</a></li>
            <li><a href="#checklist" className="text-primary-600 hover:underline">Votre checklist de conformité</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">J&apos;exporte des lunettes depuis 20 ans. En ce temps, j&apos;ai vu trois clients perdre des envois entiers saisis en douane — totalisant plus de 120 000 $ de produit détruit. Chaque cas était évitable. Les tests auraient coûté moins de 500 $.</p>

          <h2 id="pourquoi-conformite" className="text-3xl font-bold mt-16 mb-6">Pourquoi la conformité compte (histoires vraies)</h2>
          <p>Carlos, un créateur de marque de Miami, a commandé 3 000 paires en 2023 pour 18 000 $. Les douanes américaines ont bloqué l&apos;envoi faute de documentation d&apos;enregistrement FDA. 45 jours de retenue. Il a raté toute sa fenêtre de lancement estival.</p>

          <h2 id="fda-us" className="text-3xl font-bold mt-16 mb-6">Exigences FDA : vendre aux États-Unis</h2>
          <p>Surprise : <strong>la FDA classe les lunettes de soleil comme dispositifs médicaux</strong>. Classe I, la catégorie de risque la plus basse. Les exigences sont simples :</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Étape 1 : Enregistrement de l&apos;établissement FDA</h3>
            <p className="text-blue-800">Chaque fabricant et importateur doit s&apos;enregistrer via le <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/device-registration-and-listing" target="_blank" rel="noopener" className="underline">système FURLS de la FDA</a>. Gratuit, renouvelable chaque année.</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Étape 2 : Listage des produits</h3>
            <p className="text-blue-800">Listez vos lunettes dans la base FDA avec le code produit HQF.</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Étape 3 : Conformité résistance aux chocs</h3>
            <p className="text-blue-800">Test de la bille d&apos;acier (21 CFR 801.410) : une bille de 16 mm lâchée de 127 cm ne doit pas fracturer le verre.</p>
          </div>

          <h2 id="ce-ue" className="text-3xl font-bold mt-16 mb-6">Marquage CE : vendre dans l&apos;UE</h2>
          <p>Le marquage CE est <strong>obligatoire</strong> pour vendre dans l&apos;Union européenne. La norme clé est <strong>EN ISO 12312-1:2022</strong>.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Catégories de filtres CE</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Catégorie</th><th className="px-6 py-4 text-left">Transmission lumineuse</th><th className="px-6 py-4 text-left">Usage</th><th className="px-6 py-4 text-left">Conduite ?</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Cat 0</td><td className="px-6 py-4">80-100 %</td><td className="px-6 py-4">Mode/intérieur</td><td className="px-6 py-4">Oui</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 1</td><td className="px-6 py-4">43-80 %</td><td className="px-6 py-4">Faible luminosité</td><td className="px-6 py-4">Oui</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 2</td><td className="px-6 py-4">18-43 %</td><td className="px-6 py-4">Luminosité moyenne</td><td className="px-6 py-4">Oui</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 3</td><td className="px-6 py-4">8-18 %</td><td className="px-6 py-4">Forte luminosité</td><td className="px-6 py-4">Oui</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 4</td><td className="px-6 py-4">3-8 %</td><td className="px-6 py-4">Extrême (glaciers)</td><td className="px-6 py-4 text-red-600 font-bold">NON</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Important : auto-certification</h3>
            <p className="text-amber-800">Le marquage CE pour les lunettes est <strong>auto-certifié</strong> — pas besoin d&apos;organisme notifié. Vous réalisez les tests, compilez le dossier technique et signez la Déclaration de Conformité. Abordable, mais vous êtes juridiquement responsable.</p>
          </div>

          <h2 id="normes-uv" className="text-3xl font-bold mt-16 mb-6">Normes de protection UV</h2>
          <p><strong>UV400 signifie que le verre bloque 99-100 % des rayonnements UV jusqu&apos;à 400 nanomètres</strong>, couvrant les UVA et UVB. C&apos;est le standard minimum mondial. Pour en savoir plus, consultez notre <Link href="/fr/blog/uv400-vs-polarisees" className="text-primary-600 hover:underline">guide UV400 vs polarisées</Link>.</p>

          <h2 id="autres-marches" className="text-3xl font-bold mt-16 mb-6">Autres marchés</h2>
          <ul>
            <li><strong>Australie (AS/NZS 1067) :</strong> La réglementation la plus stricte au monde. Obligatoire, pas volontaire. Saisies systématiques en cas de non-conformité.</li>
            <li><strong>Royaume-Uni (UKCA) :</strong> Accepte encore le marquage CE jusqu&apos;en 2027 au moins.</li>
            <li><strong>Japon (JIS T 7333) :</strong> Similaire à ISO 12312-1 avec des exigences spécifiques.</li>
          </ul>

          <h2 id="couts-tests" className="text-3xl font-bold mt-16 mb-6">Coûts des tests</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gray-900 text-white"><th className="px-6 py-4 text-left">Type de test</th><th className="px-6 py-4 text-left">Coût/style</th><th className="px-6 py-4 text-left">Délai</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Transmittance UV400 seule</td><td className="px-6 py-4">100–300 $</td><td className="px-6 py-4">3-5 jours</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">EN ISO 12312-1 complète (CE)</td><td className="px-6 py-4">300–600 $</td><td className="px-6 py-4">5-10 jours</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">ANSI Z80.3 complète</td><td className="px-6 py-4">300–500 $</td><td className="px-6 py-4">5-10 jours</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">AS/NZS 1067 (Australie)</td><td className="px-6 py-4">400–800 $</td><td className="px-6 py-4">7-14 jours</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="checklist" className="text-3xl font-bold mt-16 mb-6">Votre checklist de conformité</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Marché américain</h3>
          <ul><li>☐ Enregistrement FDA</li><li>☐ Listage produit FDA</li><li>☐ Test de résistance aux chocs</li><li>☐ Certificat UV400</li><li>☐ Étiquetage conforme</li></ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Marché européen</h3>
          <ul><li>☐ Test EN ISO 12312-1</li><li>☐ Dossier technique</li><li>☐ Déclaration de Conformité signée</li><li>☐ Marquage CE apposé</li><li>☐ Catégorie de filtre indiquée</li><li>☐ Importateur UE identifié</li></ul>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">Les lunettes ont-elles besoin d&apos;une approbation FDA ?</h3><p className="text-gray-600">Pas une « approbation » mais une conformité. Enregistrement de l&apos;établissement + listage produit + test de résistance aux chocs.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">Qu&apos;est-ce que le marquage CE ?</h3><p className="text-gray-600">Conformité aux exigences de sécurité UE (EN ISO 12312-1). Auto-certifié. Obligatoire pour vendre dans l&apos;UE.</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-6"><h3 className="font-bold text-lg mb-2">Mes lunettes peuvent-elles être saisies ?</h3><p className="text-gray-600">Oui. US, UE et surtout Australie saisissent régulièrement les envois non conformes. Le coût des tests est une fraction de ce que vous risquez de perdre.</p></div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d&apos;Aide avec la Conformité ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Nous gérons la conformité FDA, CE et UV pour chaque commande. Documentation incluse, sans frais supplémentaires.</p>
            <Link href="/fr/contact" className="btn-primary">Demandez à Jacky</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/controle-qualite-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Contrôle Qualité Lunettes</h3><p className="text-gray-600 text-sm">Quoi vérifier avant de valider une production.</p></Link>
              <Link href="/fr/blog/guide-importation-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Guide d&apos;Importation depuis la Chine</h3><p className="text-gray-600 text-sm">Guide complet douanes, droits, expédition et documentation.</p></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
