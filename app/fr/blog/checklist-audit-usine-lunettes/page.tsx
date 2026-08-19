import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Audit d\'usine de lunettes : checklist de 20 points fournisseur',
  description: 'La checklist de 20 points d\'un propriétaire d\'usine pour évaluer un fournisseur de lunettes de soleil avant de virer de l\'argent : installations, certifications, contrôle qualité, échantillons et signaux d\'alerte des sociétés de négoce.',
  keywords: ['audit usine lunettes de soleil', 'checklist évaluation fournisseur', 'comment auditer une usine', 'vérification fabricant lunettes', 'checklist audit usine', 'société de négoce vs usine', 'certification usine lunettes', 'audit fournisseur OEM lunettes', 'audit usine lunettes chine', 'checklist audit qualité fournisseur'],
  alternates: {
    canonical: '/fr/blog/checklist-audit-usine-lunettes',
    languages: {
      'en': '/blog/sunglasses-factory-audit-checklist',
      'de': '/de/blog/sonnenbrillen-fabrik-audit-checkliste',
      'es': '/es/blog/lista-auditoria-fabrica-gafas',
      'fr': '/fr/blog/checklist-audit-usine-lunettes',
      'it': '/it/blog/checklist-audit-fabbrica-occhiali',
      'pt': '/pt/blog/checklist-auditoria-fabrica-oculos',
    },
  },
};

const takeaways = [
  'La plupart des "audits d\'usine" échouent parce que les acheteurs vérifient la mauvaise chose : une visite du showroom et un mur de certificats ne prouvent rien ; un vrai audit prouve que l\'usine possède et exploite les machines qui fabriqueront votre produit exact, car c\'est la seule chose qu\'un intermédiaire ne peut pas simuler lors d\'un appel vidéo',
  'La checklist de 20 points n\'a qu\'une mission : prouver la propriété de la production. Si un fournisseur ne peut pas vous montrer le moule d\'injection de votre modèle de monture, les programmes CNC de découpe de l\'acétate et les registres de contrôle qualité du mois dernier dans les 24 heures suivant votre demande, vous parlez à un bureau de vente, pas à une usine',
  'Les certifications sont nécessaires mais pas suffisantes — ISO 9001, marquage CE et enregistrement FDA ne signifient rien si vous ne vérifiez pas le numéro du certificat dans la base publique de l\'organisme émetteur, car un rapport CE falsifié coûte environ 20 $ à Shenzhen',
  'Le moyen le plus rapide de repérer une société de négoce : une adresse à Shenzhen avec un numéro de téléphone de Wenzhou, une réponse "on peut tout faire", un échantillon personnalisé livré en moins de 7 jours et des photos de produits qui apparaissent dans des dizaines de boutiques Alibaba sous des noms différents',
  'Vous avez trois options d\'audit à trois prix : un audit à distance (0 $, détecte environ 60 % des arnaques), une visite sur site (1 500–3 000 $, détecte environ 90 %) et une inspection tierce comme SGS ou TÜV (400–800 $ par jour-homme, vous donne un rapport défendable mais zéro connaissance du marché)',
];

const quickStats = [
  { label: 'Rapport CE falsifié à Shenzhen', value: '~20 $' },
  { label: '"Usines" Alibaba qui sont en réalité des négociants', value: '60–70 %' },
  { label: 'Audit sur site (vol + hôtel + traducteur)', value: '1 500–3 000 $' },
  { label: 'Audit tierce partie (SGS/BV/TÜV) par jour-homme', value: '400–800 $' },
  { label: 'Arnaques détectées par audit à distance', value: '~60 %' },
];

const faqs = [
  {
    question: 'Combien coûte un audit d\'usine de lunettes de soleil ?',
    answer: 'Cela dépend de la méthode. Un audit à distance — visites vidéo en direct, vérification de documents et demandes de photos de moules — ne coûte que votre temps et détecte environ 60 % des arnaques. Une visite sur site coûte 1 500–3 000 $ en incluant vols, hôtels et traducteur, et détecte environ 90 %. Une société d\'inspection tierce comme SGS, Bureau Veritas ou TÜV facture 400–800 $ par jour-homme pour un rapport standardisé. Ma règle : commencez toujours à distance, dépensez l\'argent du voyage uniquement pour les commandes de plus de 20 000 $, et faites appel à un tiers uniquement quand votre acheteur de détail exige un audit de conformité spécifique.',
  },
  {
    question: 'Puis-je auditer une usine de lunettes à distance ?',
    answer: 'Oui, et vous devriez — mais seulement si vous rendez l\'audit contradictoire. Un appel vidéo en direct où vous regardez l\'usine porter un téléphone de la porte principale aux machines d\'injection, avec la date du jour écrite sur un tableau blanc, prouve plus qu\'un PDF brillant. Demandez à voir le moule de votre modèle de monture exact avec le nombre de cavités, réclamez les registres de défauts du contrôle qualité du mois dernier et demandez que la licence commerciale soit tenue face à la caméra pour vérifier le nom et l\'adresse dans le registre national. Si un fournisseur ne peut pas les produire dans les 24 heures, considérez cela comme un échec.',
  },
  {
    question: 'Quelles certifications une usine de lunettes légitime doit-elle avoir ?',
    answer: 'Au minimum, ISO 9001 pour la gestion de la qualité, un rapport d\'essai CE selon EN ISO 12312-1 si vous vendez dans l\'UE, un enregistrement d\'établissement FDA si vous vendez aux États-Unis, et des rapports d\'essai de lentilles UV400 par lot issus d\'un spectrophotomètre. Si vos acheteurs de détail exigent un approvisionnement éthique, cherchez aussi un audit BSCI, Sedex ou SMETA. La clé est la vérification : chacun d\'eux possède une base de données publique que vous pouvez consulter. Demandez le numéro du certificat et validez-le vous-même — un certificat au mur que vous n\'avez pas vérifié est de la décoration, pas une assurance.',
  },
  {
    question: 'Comment distinguer une société de négoce d\'une vraie usine ?',
    answer: 'Posez quatre questions : (1) Puis-je voir le moule d\'injection de mon modèle de monture, et combien de cavités a-t-il ? (2) Puis-je voir les machines CNC qui découpent les montures en acétate ? (3) Quel est le MOQ pour une monture OEM personnalisée ? (4) Puis-je voir les registres d\'inspection AQL du mois dernier ? Une vraie usine répond aux quatre avec des détails, des photos et des chiffres. Une société de négoce répond "nous avons de nombreuses usines partenaires", propose un MOQ de 100 pièces et envoie des échantillons plus vite qu\'une usine ne pourrait fabriquer l\'outillage. Le vrai outillage OEM prend 15–30 jours : un "échantillon personnalisé" en 3 jours est un échantillon acheté.',
  },
  {
    question: 'Que dois-je vérifier sur les échantillons avant de passer une commande en gros ?',
    answer: 'Vous ne vérifiez pas si l\'échantillon "est joli" — vous vérifiez si c\'est un standard scellé et reproductible. Confirmez que l\'échantillon de pré-production (PPS) est signé et daté par les deux parties, car c\'est l\'échantillon de référence que votre commande en gros doit égaler. Vérifiez le grade de matériau réel sur la fiche technique (quelle feuille d\'acétate, quel grade TR90, quel polycarbonate), pas le vague "plastique de haute qualité". Contrôlez la tension des charnières, le couple des vis, l\'insertion des lentilles et les résultats UV400 par rapport à la spécification. Puis confirmez par écrit que la production en série correspondra au PPS avec une inspection AQL 2.5 avant expédition.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'sunglasses-factory-audit-checklist';

export default function ChecklistAuditUsineLunettes() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Accueil', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Checklist d\'audit d\'usine' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Comment auditer une usine de lunettes : la checklist de 20 points fournisseur",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "La checklist de 20 points d'un propriétaire d'usine pour évaluer un fournisseur de lunettes de soleil avant de virer de l'argent : installations, certifications, contrôle qualité, échantillons et signaux d'alerte.",
          "inLanguage": "fr",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/fr/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "fr",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}} />

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sourcing</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comment Auditer une Usine de Lunettes : La Checklist de 20 Points
          </h1>
          <p className="text-xl text-gray-600">
            L\'année dernière, un acheteur a viré 34 000 $ à une « usine » de Shenzhen pour 8 000 lunettes de soleil en acétate. Il avait fait son audit : une visite vidéo d\'un atelier propre, un PDF d\'un certificat ISO 9001, trois échantillons qui semblaient parfaits. Ce qu\'il ignorait : l\'atelier était loué à l\'heure, le certificat était un montage Photoshop et les échantillons venaient d\'une autre usine située à 60 kilomètres. Voici la checklist de 20 points que j\'utilise pour m\'assurer que cela n\'arrive jamais à l\'un de mes clients.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Sommaire</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Pourquoi la plupart des « audits d\'usine » sont une perte de temps</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">La checklist de 20 points : quoi vérifier avant d\'envoyer de l\'argent</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Signaux d\'alerte : les signes que vous traitez avec une société de négoce, pas une usine</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Comment mener l\'audit : à distance vs sur site vs tierce partie</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions fréquentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Audit d'usine de lunettes — Faits rapides" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Pourquoi la plupart des « audits d\'usine » sont une perte de temps</h2>

          <p>J\'ai été des deux côtés de cette table. Pendant 20 ans, j\'ai dirigé une usine de lunettes de soleil et j\'ai regardé des centaines d\'acheteurs s\'envoler pour la Chine, visiter un bâtiment, serrer des mains et virer de l\'argent — pour découvrir des mois plus tard que le bâtiment qu\'ils avaient visité n\'était pas l\'usine qui avait fabriqué leur commande.</p>

          <p>La vérité inconfortable est que la plupart des audits d\'usine vérifient la mauvaise chose. Ils vérifient les choses faciles à falsifier. Et dans le triangle manufacturier Shenzhen-Wenzhou-Xiamen, « facile à falsifier » est toute une industrie.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ce que les acheteurs vérifient d\'habitude — et pourquoi cela ne prouve rien</h3>

          <p><strong>Le showroom.</strong> Une salle propre avec des échantillons au mur est la preuve la plus surévaluée du sourcing. Chaque société de négoce de Shenzhen a un showroom. Certains sont plus beaux que le mien. Ils les louent, les garnissent d\'échantillons achetés à de vraies usines et y emmènent les acheteurs parce qu\'un acheteur qui voit du « produit » cesse de poser des questions sur la production. Un showroom ne prouve que le fait que quelqu\'un veut vous vendre quelque chose.</p>

          <p><strong>Le mur de certificats.</strong> Des certificats ISO 9001 encadrés, des certificats CE, des plaques BSCI — c\'est de la décoration. Un certificat ISO falsifié coûte environ 20 $ et prend une journée à produire. J\'ai personnellement vu le même numéro de certificat apparaître sur trois sites web d\'« usines » différents avec trois noms de société différents. Si vous n\'avez pas vérifié le numéro dans la base publique de l\'organisme émetteur, vous n\'avez pas vérifié un certificat. Vous avez regardé un bout de papier.</p>

          <p><strong>L\'échantillon.</strong> Voici le piège qui attrape le plus d\'acheteurs. Un négociant vous envoie un bel échantillon, vous l\'approuvez et vous pensez que l\'audit est terminé. Mais l\'échantillon a été fabriqué par une vraie usine — simplement pas celle à qui vous parlez. Le négociant l\'a acheté à l\'Usine A, vous l\'a expédié, et quand vous commandez en gros, il s\'approvisionne auprès du moins-disant, l\'Usine B, qui n\'a jamais vu votre échantillon. Votre échantillon « approuvé » et votre production n\'ont plus rien en commun à part le nom du modèle.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ce qu\'un vrai audit vérifie réellement</h3>

          <p>Un vrai audit a exactement un objectif : <strong>prouver que l\'entité que vous payez possède et exploite les moyens de production de votre produit.</strong> Pas « a accès à une usine ». Pas « travaille avec des partenaires ». Possède les machines, fait tourner les machines et peut vous montrer les machines en train de fabriquer votre produit exact aujourd\'hui.</p>

          <p>C\'est la seule chose qu\'un intermédiaire ne peut pas simuler, parce que c\'est physique. Une société de négoce ne peut pas faire apparaître un moule d\'injection avec votre logo sur la cavité. Elle ne peut pas produire les registres de défauts du contrôle qualité du mois dernier avec de vrais numéros de série. Elle ne peut pas promener une caméra de sa porte d\'entrée à une ligne de production en marche parce qu\'elle ne possède pas de ligne de production. Tout le reste — documents, photos, vidéos, showrooms, échantillons — peut être acheté, loué ou retouché. La ligne de production physique, non.</p>

          <p>Alors quand vous auditez, ignorez le vernis. Ignorez le beau bureau, le bon anglais dans les e-mails et le discours de vente rodé. C\'est du marketing. Concentrez-vous sur une question, répétée de vingt manières différentes : <em>pouvez-vous prouver que vous fabriquez vous-même ce produit ?</em> Le reste de ce guide, ce sont ces vingt questions.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">La checklist de 20 points : quoi vérifier avant d\'envoyer de l\'argent</h2>

          <p>Voici la checklist que je remets aux primo-acheteurs avant qu\'ils ne virent un acompte. Elle est organisée en cinq groupes — installations, équipements, certifications, échantillons et contrôle qualité — parce qu\'un fournisseur peut falsifier un groupe, mais falsifier les cinq à la fois est presque impossible. Passez en revue chaque point. Si plus de trois échouent, partez.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Installations et localisation (Points 1–4)</h3>

          <p><strong>1. La licence commerciale correspond à l\'adresse physique.</strong> Demandez la licence commerciale (营业执照) et vérifiez l\'adresse enregistrée, le représentant légal et — surtout — l\'objet social. L\'objet doit indiquer « fabrication » (制造), pas « négoce » ou « vente en gros » (贸易/批发). Une société enregistrée comme société de négoce ne deviendra jamais une usine, quoi que prétende son site web. Recoupez l\'adresse dans le registre national.</p>

          <p><strong>2. La taille de l\'usine correspond aux affirmations.</strong> Une vraie usine de lunettes intégrée — injection, polissage, peinture et assemblage sous un même toit — a besoin d\'au moins 1 500–3 000 m². Si un fournisseur prétend une production interne complète et que son adresse est un bureau de 200 m² dans une tour commerciale de Shenzhen, les mathématiques ne tiennent pas. Demandez la surface totale et l\'effectif, puis demandez-vous si cette empreinte peut physiquement contenir les machines qu\'ils prétendent faire tourner.</p>

          <p><strong>3. Visite de l\'atelier en direct, pas une vidéo enregistrée.</strong> Insistez sur un appel vidéo en direct où ils parcourent l\'atelier depuis la porte principale. Faites-leur écrire la date du jour et votre nom sur un tableau blanc et le tenir face à la caméra d\'abord. Une vidéo enregistrée est réutilisable et ne signifie rien ; une visite en direct avec tableau blanc daté est difficile à mettre en scène. Si la connexion est « mauvaise » à chaque fois, c\'est votre réponse.</p>

          <p><strong>4. Ils occupent le bâtiment qu\'ils vous montrent.</strong> Demandez à quel nom est le bail ou l\'acte de propriété. Le truc de l\'atelier loué à l\'heure est réel : un intermédiaire réserve un espace d\'atelier partagé pour un après-midi, le met en scène avec des échantillons et enchaîne trois visites d\'acheteurs à la suite. Le bail d\'une vraie usine porte le nom de l\'usine, et ils vous montreront les factures d\'électricité ou l\'enregistrement de propriété sans broncher.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Équipements et outillage (Points 5–8)</h3>

          <p><strong>5. Machines de moulage par injection — nombre et tonnage.</strong> Si vos montures sont injectées (TR90, polycarbonate, nylon, acétate injecté), l\'usine doit posséder des machines d\'injection, typiquement de 80–250 tonnes. Demandez combien, de quelle marque (Haitian, Chen Hsong, etc.) et combien tournent actuellement. Pas de machines d\'injection, pas de montures injectées en interne, point.</p>

          <p><strong>6. Le moule de VOTRE modèle de monture.</strong> C\'est la demande la plus révélatrice de toute la liste. Demandez des photos du moule d\'injection réel de votre monture, y compris le nombre de cavités. Un moule à 4 cavités produit environ 1 500 montures par jour. Si le fournisseur possède le moule, il le photographiera immédiatement. S\'ils possèdent votre design mais pas le moule, ce sont des négociants. Et confirmez toujours qui paie le moule et qui le possède à la fin de la commande — c\'est écrit dans tout contrat OEM sérieux.</p>

          <p><strong>7. Machines CNC pour l\'acétate.</strong> Les montures en acétate sont découpées dans une feuille, pas injectées. Si un fournisseur prétend fabriquer des montures en acétate et n\'a ni routeur CNC ni fraiseuse, il achète des montures en acétate finies à Wenzhou et les revend. Demandez à voir la CNC découper votre forme d\'acétate, et demandez le fichier CAO de votre monture — une vraie usine peut vous envoyer le fichier .dxf ou .stp de votre propre modèle en une journée.</p>

          <p><strong>8. Équipement de finition.</strong> Une usine complète a aussi la ligne de finition : tonneaux de polissage, cabines de peinture, ligne de revêtement UV, gravure laser et tampographie pour les logos. S\'ils sous-traitent la peinture ou le laser, ce n\'est pas automatiquement disqualifiant — beaucoup de bonnes usines le font — mais ils doivent pouvoir nommer le sous-traitant et vous montrer les registres d\'inspection d\'entrée quand les pièces reviennent.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Certifications et conformité (Points 9–12)</h3>

          <p><strong>9. ISO 9001 — vérifié, pas encadré.</strong> Demandez le numéro du certificat et le nom de l\'organisme certificateur, puis cherchez-le dans la base publique de l\'organisme. Un certificat ISO encadré qui n\'est pas au registre ne vaut rien. Un ISO 9001 valide vous dit que l\'usine a des processus qualité documentés — il ne vous dit pas qu\'ils les suivent, mais un certificat manquant vous dit quelque chose d\'important.</p>

          <p><strong>10. Rapport d\'essai CE selon EN ISO 12312-1.</strong> Si vous vendez dans l\'UE, vos lunettes ont besoin d\'un marquage CE adossé à un vrai rapport d\'essai montrant la protection UV400, la qualité des lentilles et la sécurité des montures. Demandez le numéro du rapport et le laboratoire émetteur (TÜV, SGS, Intertek, etc.), puis vérifiez auprès du laboratoire. Un rapport CE falsifié est l\'un des documents contrefaits les plus courants de l\'industrie.</p>

          <p><strong>11. Enregistrement d\'établissement FDA (marché américain).</strong> Les lunettes de soleil sont un dispositif médical de Classe I aux États-Unis, ce qui signifie que l\'usine doit avoir un enregistrement d\'établissement FDA. Vous pouvez le vérifier vous-même dans la base publique d\'enregistrement des établissements de la FDA en moins de cinq minutes. Si l\'usine dit « approuvé par la FDA » — méfiez-vous de cette formulation ; la FDA enregistre les établissements et autorise les dispositifs, elle n\'« approuve » pas les lunettes de soleil. Un langage approximatif sur la FDA est un signal d\'alerte à lui seul.</p>

          <p><strong>12. Rapports d\'essai UV400 et de lentilles — par lot.</strong> C\'est le seul certificat qui protège réellement les yeux de votre client, et celui que la plupart des acheteurs ne demandent jamais. Chaque lot de production de lentilles doit venir avec un rapport de spectrophotomètre montrant la transmittance UVA et UVB. Demandez le rapport du lot le plus récent, pas un essai de type vieux de cinq ans. Une usine qui fait un vrai contrôle qualité des lentilles peut le produire en quelques minutes.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Échantillons et pré-production (Points 13–16)</h3>

          <p><strong>13. Échantillon de pré-production scellé et signé.</strong> Avant la production en série, vous approuvez un échantillon de pré-production (PPS). Cet échantillon doit être signé et daté par les deux parties, scellé et conservé comme l\'« échantillon de référence » que la production en série doit égaler. Si l\'usine ne propose pas d\'étape PPS, ou la traite comme facultative, considérez cela comme un échec. Pas d\'échantillon de référence, pas de base légale pour un litige qualité plus tard.</p>

          <p><strong>14. Fiche technique du matériau, pas des adjectifs.</strong> « Plastique de haute qualité » n\'est pas un matériau. Obtenez la vraie fiche technique : quelle feuille d\'acétate (ex. Mazzucchelli M49 ou équivalent), quel grade TR90, quelle résine polycarbonate et quel fournisseur. La fiche technique a un fabricant, un numéro de grade et des propriétés physiques. Une usine qui ne peut pas produire de fiche technique matériau achète du plastique mystère.</p>

          <p><strong>15. Correspondance des couleurs avec un nuancier physique.</strong> La couleur est là où les commandes en gros meurent. Approuvez les couleurs sur un nuancier physique et verrouillez un code Pantone ou un code couleur usine. Puis précisez la source lumineuse sous laquelle la correspondance est jugée (la lumière du jour D65 est standard). « Ce sera proche de l\'échantillon » n\'est pas une spécification couleur. Obtenez le code exact par écrit.</p>

          <p><strong>16. Spécification des charnières et de la quincaillerie.</strong> La charnière est la première chose qui casse sur les lunettes bon marché, et les acheteurs n\'y pensent jamais. Précisez le type de charnière (barillet, ressort ou flex), le couple des vis et si la charnière est en acier inoxydable plaqué ou en métal de base. Demandez le fournisseur de la charnière et la spécification du placage. Une charnière à 0,02 $ sur une monture à 4 $, c\'est comme ça qu\'on obtient un taux de retour de 15 %.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Processus de contrôle qualité et de production (Points 17–20)</h3>

          <p><strong>17. Les registres QC de la dernière série, pas une promesse.</strong> Demandez les rapports d\'inspection AQL de la série de production la plus récente — les comptages de défauts réels, le plan d\'échantillonnage et la disposition. Toute vraie usine les a. Un fournisseur qui répond « on vérifie tout à 100 % » sans vous montrer un seul registre est un négociant avec un script.</p>

          <p><strong>18. Norme AQL par écrit.</strong> Pour les lunettes de soleil, la norme de l\'industrie est AQL 2.5 sur les défauts majeurs et 4.0 sur les mineurs, échantillonnage niveau II. Faites engager l\'usine sur ce point dans le bon de commande. S\'ils rechignent à mettre une norme de défauts par écrit, ils prévoient de vous expédier tout ce qui sort de la ligne.</p>

          <p><strong>19. Inspection en ligne vs finale.</strong> Une usine compétente fait du contrôle qualité à plusieurs étapes — inspection des matériaux entrants, contrôles en ligne après injection et après peinture, et une inspection AQL finale avant emballage. Demandez-leur de vous guider à travers leurs points de contrôle qualité lors de l\'appel en direct. « On vérifie à la fin », c\'est comme ça qu\'une usine se retrouve avec 8 000 paires de vis dénudées découvertes seulement après leur arrivée dans votre entrepôt.</p>

          <p><strong>20. Capacité d\'emballage et d\'étiquetage.</strong> L\'emballage prêt pour la vente — code-barres, étiquette pendante, marquage de carton et étiquettes de conformité — est l\'endroit où beaucoup d\'« usines » passent discrètement la main à un bureau de négoce. Confirmez que l\'usine fait son propre emballage et peut produire votre carton avec les marquages corrects et un code-barres que vous pouvez vérifier. Si l\'emballage se fait « chez notre partenaire », vous venez de trouver l\'intermédiaire.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Signaux d\'alerte : les signes que vous traitez avec une société de négoce, pas une usine</h2>

          <p>Entre 60 % et 70 % des « usines » qui font de la publicité pour l\'OEM de lunettes sur Alibaba et Made-in-China sont des sociétés de négoce. Certaines sont honnêtes — un bon négociant peut vous obtenir un meilleur prix que celui que vous négocieriez seul. Mais la plupart ne sont pas honnêtes, et la différence entre une monture à 6 $ et une monture à 1,50 $ qui se désagrège, c\'est de savoir si la personne que vous payez contrôle réellement la production. Voici les signaux d\'alerte que j\'apprends à mes clients à reconnaître.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La discordance adresse-téléphone</h3>

          <p>Wenzhou est la capitale de l\'acétate en Chine. Xiamen et Taizhou dominent les montures en métal et de sport. Shenzhen est là où vivent les bureaux de négoce. Alors quand une « usine » affiche une adresse à Shenzhen avec un numéro de téléphone de Wenzhou — ou une adresse à Wenzhou avec un compte bancaire à Hong Kong — vous traitez presque certainement avec un intermédiaire. Demandez la ligne fixe et appelez-la. Demandez qui répond et dans quelle ville. Un appel de deux minutes révèle plus que dix pages d\'un site web.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">« On peut tout faire »</h3>

          <p>Une vraie usine fabrique ce que ses machines peuvent fabriquer. Elle a 200–500 SKU dans lesquels elle se spécialise et vous dira « on fait des montures en acétate et injectées, mais le métal n\'est pas notre point fort ». Une société de négoce dit oui à tout — acétate, métal, bois, titane, enfants, sport, ordonnance. « On peut tout faire » n\'est pas une déclaration de capacité ; c\'est l\'aveu que l\'interlocuteur ne possède aucune machine spécifique et s\'approvisionnera auprès du moins cher de la semaine.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Le délai d\'échantillon impossible</h3>

          <p>L\'outillage OEM personnalisé prend du temps. Un nouveau moule d\'injection pour votre design de monture, c\'est 15–30 jours. La programmation CNC et la découpe d\'une nouvelle forme d\'acétate, c\'est 1–2 semaines. Alors quand une « usine » promet un échantillon personnalisé en 3–5 jours, elle ne vous fabrique pas un échantillon — elle achète une monture existante et y colle votre logo. Les vraies usines donnent de vrais délais et vous diront non quand vous demandez l\'impossible. Les négociants ne disent jamais non ; ils disent oui et règlent le mensonge plus tard.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Les photos qui sont partout</h3>

          <p>Faites une recherche d\'image inversée sur les photos du produit dans leur boutique. Si la même monture apparaît sous 50 noms de société différents, aucune de ces sociétés ne l\'a fabriquée — les photos de la vraie usine ont fuité et tous les négociants de l\'écosystème les utilisent. Idem pour les photos de « notre usine » sur le site : si la photo est une image de stock d\'une salle blanche générique, ou apparaît sur une douzaine de sites, ce n\'est pas leur usine. Les photos d\'une vraie usine sont un peu désordonnées, un peu datées et uniquement les leurs.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Le MOQ étrangement bas</h3>

          <p>Les vraies usines OEM ont de vrais minimums. Pour des montures personnalisées avec votre propre moule, le MOQ est typiquement de 1 000–3 000 pièces par couleur. Pour un emballage personnalisé sur des montures de stock, peut-être 500. Une société de négoce acceptera volontiers 100 pièces parce qu\'elle ne fabrique rien — elle achète à quelqu\'un d\'autre et ajoute une marge. Si le MOQ est bas et le prix bas et le délai court, vous n\'obtenez pas une bonne affaire ; vous obtenez un négociant.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Le prix qui ne peut pas être réel</h3>

          <p>Faites le calcul des matériaux. Une bonne feuille d\'acétate, une paire de lentilles CR-39 ou polycarbonate de qualité avec UV400, des charnières correctes et le travail de finition — le seul coût matériau d\'une monture correcte tourne autour de 1,20–1,50 $. Alors quand quelqu\'un vous propose une monture « de haute qualité » à 0,80 $ FOB, l\'une de ces deux choses est vraie : les matériaux ne sont pas ce qu\'ils prétendent, ou quelqu\'un dans la chaîne perd de l\'argent (et ce ne sera pas eux). Un prix inférieur au coût matériau n\'est pas compétitif ; c\'est la preuve d\'un mensonge.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Les conditions de paiement qui crient négociant</h3>

          <p>Les vraies usines travaillent sur 30 % d\'acompte, 70 % de solde avant expédition, par T/T — parfois avec une lettre de crédit pour les grosses commandes. Elles vendent de la capacité de production et ont de la trésorerie. Une société de négoce, au contraire, a besoin de votre argent avant de pouvoir payer la vraie usine, donc elle pousse au 100 % d\'avance ou vous oriente vers des canaux non sécurisés. Méfiez-vous de quiconque exige 100 % de prépaiement sans pouvoir vous montrer une machine. Et ne versez jamais — jamais — un acompte sur un compte personnel ou un compte au nom différent de celui de la société sur la licence.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Comment mener l\'audit : à distance vs sur site vs tierce partie</h2>

          <p>Vous avez trois façons de mener cet audit, et elles répondent à des questions différentes à des coûts différents. Voici la ventilation honnête de quelqu\'un qui a vu les trois échouer et les trois réussir.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Méthode</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Coût</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ce qu\'elle détecte</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Idéale pour</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Audit à distance</strong></td>
                  <td className="border border-gray-300 px-4 py-2">0 $ + votre temps</td>
                  <td className="border border-gray-300 px-4 py-2">~60 % des arnaques (vérification de licence, visite d\'atelier en direct, photos de moules, registres QC)</td>
                  <td className="border border-gray-300 px-4 py-2">Chaque commande — faites-le en premier, toujours</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Visite sur site</strong></td>
                  <td className="border border-gray-300 px-4 py-2">1 500–3 000 $ (vol, hôtel, traducteur)</td>
                  <td className="border border-gray-300 px-4 py-2">~90 % des arnaques (vous touchez le moule, sentez la ligne de peinture, regardez le QC)</td>
                  <td className="border border-gray-300 px-4 py-2">Commandes de plus de 20 000 $ ou un partenariat à long terme</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Tierce partie (SGS/BV/TÜV)</strong></td>
                  <td className="border border-gray-300 px-4 py-2">400–800 $ par jour-homme</td>
                  <td className="border border-gray-300 px-4 py-2">Conformité documentée, mais pas de connaissance du marché ni du produit</td>
                  <td className="border border-gray-300 px-4 py-2">Quand un acheteur de détail exige un audit spécifique (BSCI, SMETA, etc.)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">L\'audit à distance — gratuit, rapide et non négociable</h3>

          <p>Un audit à distance ne vous coûte rien d\'autre qu\'une heure et un ton ferme. Il attrapera les arnaques paresseuses — celles où l\'« usine » ne peut pas produire une licence, une photo de moule ou une visite en direct. Exécutez la checklist de 20 points en vidéo : licence commerciale face à la caméra, tableau blanc daté, visite d\'atelier en direct, photos de moules, registres QC du mois dernier. Un audit à distance ne remplace pas les deux autres, mais c\'est un filtre. Tout fournisseur qui y échoue ne devrait jamais recevoir un centime. Tout fournisseur qui y réussit a gagné une conversation.</p>

          <p>L\'erreur la plus courante que commettent les acheteurs à distance est d\'être trop polis. Ils demandent « pourriez-vous éventuellement me montrer l\'usine ? » et acceptent un PDF brillant en retour. Ne faites pas ça. Soyez précis et contradictoire — poliment. « Envoyez-moi une photo du moule d\'injection de la monture EV-204 avec le nombre de cavités, et le rapport AQL de votre dernière série, dans les 24 heures. » Les demandes précises ne peuvent pas être satisfaites par du matériel marketing. Les demandes vagues, si.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La visite sur site — quand l\'argent justifie le voyage</h3>

          <p>Rien ne vaut le fait d\'être dans l\'atelier de l\'usine. Vous sentez la ligne de peinture, vous entendez les machines d\'injection, vous regardez l\'équipe QC rejeter une mauvaise paire en temps réel et vous serrez la main de la personne qui signe réellement le planning de production. Ce voyage coûte 1 500–3 000 $ une fois que vous ajoutez les vols, les hôtels et un traducteur, donc il n\'a de sens que lorsque la taille de la commande le justifie — ma règle empirique est les commandes de plus de 20 000 $, ou tout fournisseur que vous prévoyez d\'utiliser pendant des années.</p>

          <p>Quand vous y allez, emportez la checklist. Ne les laissez pas contrôler l\'itinéraire — une société de négoce organisera une journée de réunions, de repas et de showrooms et vous tiendra éloigné de tout atelier de production réel. Vous voulez voir trois choses de vos propres yeux : le moule de votre produit, les machines qui fabriquent votre catégorie de produit et les registres QC du dernier lot. Si la « visite d\'usine » ne vous montre jamais une machine en marche, vous avez visité un bureau de vente.</p>

          <p>Et emmenez quelqu\'un qui parle la langue et connaît l\'industrie. Un traducteur généraliste acquiescera aux affirmations d\'un directeur d\'usine sans savoir qu\'une « machine d\'injection de 250 tonnes » ne peut pas produire une monture de 20 grammes au rythme que le fournisseur vient de citer. Vous voulez quelqu\'un qui peut distinguer une vraie ligne de production d\'une mise en scène.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">L\'audit tierce partie — défendable, mais limité</h3>

          <p>Des sociétés comme SGS, Bureau Veritas et TÜV Rheinland auditeront une usine et vous remettront un rapport standardisé — installations, effectif, documentation, conformité. C\'est réellement précieux dans une situation précise : quand un grand acheteur de détail exige une norme d\'audit spécifique avant de référencer votre marque. Les audits BSCI, SMETA et SEDEX existent parce que les détaillants ont besoin d\'une trace documentaire défendable sur la conformité sociale et environnementale, et un rapport tierce partie est la monnaie de ce monde.</p>

          <p>Mais comprenez ce qu\'un audit tierce partie ne fait pas. L\'auditeur vérifie la conformité par rapport à une checklist, pas si l\'usine fabrique de bonnes lunettes ni si le prix est juste ni si le moule de votre monture existe réellement. Un auditeur confirmera que l\'usine a un extincteur et une politique RH et ne vous dira pas que la machine d\'injection fabrique la monture de votre concurrent, pas la vôtre. Les audits tierce partie répondent à « est-ce une usine conforme », pas à « est-ce la bonne usine pour moi ».</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ma recommandation, en une phrase</h3>

          <p>Menez l\'audit à distance avec chaque fournisseur, prenez l\'avion sur site quand la commande dépasse 20 000 $ ou que la relation devient à long terme, et faites appel à un tiers uniquement quand un rapport de conformité spécifique est la porte d\'entrée vers un grand compte de détail. Et ne versez jamais, en aucune circonstance, de l\'argent à quelqu\'un qui a échoué à l\'audit à distance parce qu\'il « semblait sympathique en appel vidéo ». Être sympathique est gratuit. Une vraie usine est vérifiable.</p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Prêt à éviter les intermédiaires ?</h2>
            <p className="text-xl mb-6 opacity-90">Envoyez-moi votre spécification. Je vous guiderai dans une vraie usine lors d\'un appel en direct — le moule, les machines et les registres QC du mois dernier — pour que vous puissiez nous évaluer avec cette même checklist avant de virer un seul dollar.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Demandez un Devis Gratuit
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Plus depuis l\'atelier de l\'usine</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/blog/trouver-fabricant-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Comment trouver un fabricant de lunettes</h3>
                <p className="text-gray-600 text-sm">Où chercher, quoi demander et comment bâtir une liste restreinte sans se faire arnaquer.</p>
              </Link>
              <Link href="/fr/blog/choisir-fabricant-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Comment choisir un fabricant de lunettes</h3>
                <p className="text-gray-600 text-sm">Les critères de sélection qui séparent une vraie usine d\'un site web poli.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contactez-nous</h3>
                <p className="text-gray-600 text-sm">Obtenez un devis pour votre commande personnalisée de lunettes en gros.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
