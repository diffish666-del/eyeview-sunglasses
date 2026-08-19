import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Incoterms lunettes de soleil et guide d\'expédition : FOB, CIF, EXW, DDP',
  description: 'Un propriétaire d\'usine explique FOB, CIF, EXW et DDP pour les importateurs de lunettes de soleil : chiffres d\'expédition réels, qui paie quoi et comment choisir le bon Incoterm pour votre première commande.',
  keywords: ['incoterms lunettes de soleil', 'FOB vs CIF vs EXW vs DDP', 'guide expédition lunettes', 'importer lunettes de soleil de chine', 'coût fret lunettes', 'incoterms expliqués importateurs', 'prix FOB lunettes', 'expédition DDP lunettes', 'expédition lunettes chine', 'dédouanement lunettes de soleil'],
  alternates: {
    canonical: '/fr/blog/guide-incoterms-expedition-lunettes',
    languages: {
      'en': '/blog/sunglasses-incoterms-shipping-guide',
      'de': '/de/blog/sonnenbrillen-incoterms-versand-ratgeber',
      'es': '/es/blog/guia-incoterms-envio-gafas-sol',
      'it': '/it/blog/guida-incoterms-spedizione-occhiali',
      'pt': '/pt/blog/guia-incoterms-envio-oculos',
    },
  },
};

const takeaways = [
  'Les Incoterms sont un contrat de transfert de risque, pas un menu de prix : FOB, CIF, EXW et DDP définissent chacun un point de remise précis où la responsabilité (et le coût) de la marchandise passe du vendeur à l\'acheteur, et se tromper sur ce point est la façon dont les importateurs perdent discrètement des milliers sur un seul conteneur',
  'Pour un importateur de lunettes de soleil débutant, FOB est presque toujours la bonne réponse : l\'usine gère le dédouanement à l\'export et charge la marchandise sur le navire dans un port chinois désigné, et vous contrôlez le transitaire, l\'assurance et la livraison — le coût total rendu est généralement 10–15 % inférieur à celui d\'une gestion CIF ou DDP par le vendeur',
  'EXW (départ usine) semble bon marché sur le devis mais c\'est un piège pour les nouveaux acheteurs — il vous charge chaque tâche d\'export, chaque document d\'export et chaque risque depuis la porte de l\'usine, et un acheteur qui ne maîtrise pas le dédouanement à l\'export chinois paiera plus en erreurs qu\'il n\'a jamais économisé sur le prix affiché',
  'DDP est le seul terme où le vendeur est responsable des droits et taxes du pays de destination, ce qui le rend séduisant pour Amazon FBA et les vendeurs au détail — mais vous payez une prime de 8–15 % pour que le vendeur absorbe le risque douanier, et vous perdez la visibilité sur le coût rendu réel que vous payez',
  'Les trois coûts cachés qui détruisent les marges des importateurs sont les frais de surestaries et de détention (50–150 $ par jour quand un conteneur reste trop longtemps au port), les frais de manutention au terminal de destination (souvent 200–500 $ par conteneur) et la marchandise non assurée — et aucun n\'apparaît sur le prix unitaire FOB cité par votre fournisseur',
];

const quickStats = [
  { label: 'Fret maritime typique, conteneur 40ft CN→US', value: '$2 500–4 500' },
  { label: 'Prime de coût rendu de CIF/DDP vs FOB', value: '8–15 %' },
  { label: 'Frais de surestaries/détention par jour, par conteneur', value: '$50–150' },
  { label: 'Frais de manutention au terminal de destination (THC)', value: '$200–500' },
  { label: 'Part des primo-importateurs qui surpaient le fret', value: '~40 %' },
];

const faqs = [
  {
    question: 'Quelle est la différence entre FOB et CIF pour l\'import de lunettes de soleil ?',
    answer: 'En FOB (Free On Board), l\'usine paie le dédouanement à l\'export et le chargement au port chinois désigné, puis vous prenez le relais — vous réservez le fret maritime, souscrivez l\'assurance et gérez le dédouanement à l\'import. En CIF (Cost, Insurance, Freight), le vendeur paie le fret et une assurance de base jusqu\'au port de destination, puis vous remet la marchandise. FOB vous donne le contrôle de votre propre transitaire et revient généralement moins cher ; CIF est plus simple mais le vendeur choisit le transitaire et vous payez une marge sur le fret et l\'assurance. Pour les lunettes de soleil — marchandise légère et peu volumineuse — la marge de fret ajoutée par un vendeur en CIF peut facilement atteindre 8–15 %.',
  },
  {
    question: 'Quel Incoterm est le meilleur pour un primo-importateur de lunettes de soleil ?',
    answer: 'FOB, dans presque tous les cas. Il force l\'usine à gérer la partie difficile — le dédouanement à l\'export chinois — tout en vous donnant le contrôle du transitaire, de l\'assurance et de la livraison à destination, là où les primo-importateurs perdent le plus d\'argent quand quelqu\'un d\'autre s\'en occupe. La seule exception : si votre commande est assez petite pour partir en messagerie aérienne (DDP par express), ou si vous faites du Amazon FBA et voulez que le vendeur livre dans un entrepôt Amazon droits acquittés, DDP vaut alors vraiment sa prime pour la simplicité. Pour un premier conteneur complet, commencez par FOB.',
  },
  {
    question: 'Qui paie les droits de douane et taxes sous chaque Incoterm ?',
    answer: 'En EXW, FOB, CIF et CFR, l\'importateur (vous) paie tous les droits de douane, la TVA et les taxes d\'importation du pays de destination — la responsabilité du vendeur s\'arrête avant que la marchandise n\'atteigne votre pays. En DDP (Delivered Duty Paid), le vendeur est responsable des droits et taxes de destination, et c\'est toute la raison pour laquelle DDP exige une prime. Notez que DDP sur un envoi maritime exige tout de même que le vendeur (ou son commissionnaire en douane) dédouane la marchandise en votre nom dans de nombreux pays, ce qui ajoute complexité et coût — la plupart des vendeurs cotent DDP 8–15 % au-dessus de FOB pour couvrir ce risque.',
  },
  {
    question: 'Combien coûte l\'expédition de lunettes de soleil depuis la Chine ?',
    answer: 'Cela dépend du volume et de la destination, mais voici des chiffres réels. Un conteneur de 40 pieds de la Chine vers la côte est des États-Unis coûte environ 2 500–4 500 $ de fret maritime selon la saison ; vers l\'Europe, c\'est souvent 2 000–3 500 $. Les lunettes de soleil sont légères et peu volumineuses, si bien qu\'un seul conteneur de 40ft peut transporter 100 000–150 000 paires en sachets, ce qui ramène le coût du fret à seulement 0,02–0,05 $ par paire. L\'erreur des primo-importateurs est de payer du fret aérien pour une quantité maritime — le fret aérien pour les lunettes coûte 4–7 $ par kilogramme, contre 0,05–0,15 $ par kilogramme par mer, et cette différence efface votre marge.',
  },
  {
    question: 'Que sont les frais de surestaries et de détention, et comment les éviter ?',
    answer: 'La surestarie (demurrage) est le frais facturé par la compagnie maritime quand un conteneur reste au port au-delà de son délai de franchise (généralement 3–7 jours francs) ; la détention est le frais quand vous gardez le conteneur vide au-delà de la fenêtre de restitution autorisée (généralement 5–14 jours francs). Les deux coûtent 50–150 $ par jour. Les importateurs les subissent quand leurs documents douaniers sont en retard ou que leur transporteur ne récupère pas à temps. Vous les évitez en alignant commissionnaire en douane, transitaire et rendez-vous de livraison avant même l\'arrivée du navire — le conteneur est sur le compte-tours dès qu\'il est déchargé.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'guide-incoterms-expedition-lunettes';

export default function GuideIncotermsExpeditionLunettes() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Accueil', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Incoterms lunettes de soleil et guide d\'expédition' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Incoterms lunettes de soleil et guide d'expédition : FOB, CIF, EXW, DDP expliqués pour les importateurs",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un propriétaire d'usine explique FOB, CIF, EXW et DDP pour les importateurs de lunettes de soleil : chiffres d'expédition réels, qui paie quoi et comment choisir le bon Incoterm pour votre première commande.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import &amp; Logistique</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Incoterms lunettes de soleil et guide d\'expédition : FOB, CIF, EXW, DDP
          </h1>
          <p className="text-xl text-gray-600">
            Un acheteur m\'a un jour envoyé le devis d\'un concurrent en me demandant pourquoi il était 12 % moins cher que le mien. Même monture, même MOQ, mêmes spécifications. La différence tenait aux trois lettres à la fin du prix : EXW. Le concurrent cotait départ usine, ce qui signifiait que l\'acheteur paierait de sa poche le dédouanement à l\'export, le transport au port, le fret maritime, l\'assurance et les droits d\'importation — rien de tout cela ne figurait sur le devis. Voici tout ce que j\'aimerais que les primo-importateurs comprennent sur les Incoterms avant de virer un acompte.
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
          <h2 className="font-bold mb-4">Table des matières</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Ce que sont vraiment les Incoterms (et pourquoi les importateurs se font avoir)</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">FOB vs CIF vs EXW vs DDP : les chiffres réels d\'un propriétaire d\'usine</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Comment choisir le bon Incoterm pour votre première commande</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Coûts cachés que les importateurs oublient toujours</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions fréquentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Expédition de lunettes — Chiffres clés" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Ce que sont vraiment les Incoterms (et pourquoi les importateurs se font avoir)</h2>

          <p>Les Incoterms — abréviation d\'International Commercial Terms (termes commerciaux internationaux) — sont un ensemble de codes à trois lettres publiés par la Chambre de commerce internationale qui définissent une seule chose : <strong>le point auquel le risque et le coût de la marchandise passent du vendeur à l\'acheteur.</strong> C\'est toute leur fonction. Ils ne définissent pas à qui appartient la marchandise. Ils ne définissent pas les conditions de paiement. Ils définissent la remise.</p>

          <p>Si vous ne retenez qu\'une phrase de ce guide, retenez celle-là. Les Incoterms sont un point de remise. Tout ce qui se trouve en aval de ce point est votre problème et votre coût ; tout ce qui est en amont appartient au vendeur.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pourquoi le point de remise compte plus que le prix</h3>

          <p>Deux fournisseurs peuvent vous coter les « mêmes » lunettes de soleil à deux prix très différents, et aucun ne ment. Une usine qui cote <strong>1,80 $ FOB Shenzhen</strong> dit : « Je vais faire dédouaner ces paires à l\'export, les transporter au port et les charger sur le navire pour 1,80 $ la paire. » Un négociant qui cote <strong>1,50 $ EXW</strong> dit : « Je vous remets ceci sur le parking de mon entrepôt pour 1,50 $, et vous vous occupez du reste. » L\'« économie » de 0,30 $ s\'évapore dès que vous payez le courtier en dédouanement à l\'export, le transport portuaire, la manutention au terminal et les erreurs que vous commettrez en faisant tout cela pour la première fois.</p>

          <p>C\'est pourquoi les importateurs expérimentés comparent toujours les devis <em>sur le même Incoterm.</em> Comparer un devis FOB à un devis EXW, c\'est comparer des pommes à un sac de pièces de pomme non assemblées. La chose la plus précieuse que vous puissiez faire en tant qu\'acheteur est de forcer chaque fournisseur sur la même base avant de comparer les prix.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Les quatre termes que vous verrez réellement</h3>

          <p>Il existe onze Incoterms dans l\'édition 2020, mais dans le commerce des lunettes de soleil, vous en verrez quatre 95 % du temps. Voici chacun en une phrase simple, car ce sont les versions juridiques qui font trébucher les acheteurs.</p>

          <p><strong>EXW (Ex Works / départ usine).</strong> La seule obligation du vendeur est d\'avoir la marchandise prête dans ses locaux. Vous êtes responsable de tout, du chargement du camion à sa porte d\'usine jusqu\'au dédouanement à l\'import dans votre propre pays. C\'est le devis qui paraît le moins cher et le coût réel le plus élevé pour un nouvel acheteur.</p>

          <p><strong>FOB (Free On Board / franco à bord).</strong> Le vendeur gère le dédouanement à l\'export et charge la marchandise sur le navire que vous désignez au port désigné. Le risque et le coût vous sont transférés dès que la marchandise est à bord. C\'est le terme de référence du commerce d\'import de lunettes de soleil.</p>

          <p><strong>CIF (Cost, Insurance, Freight).</strong> Le vendeur paie le fret et une assurance de base jusqu\'au port de destination, puis vous remet la marchandise (et les documents) sur place. Vous payez toujours les droits et dédouanez. Le piège : le vendeur choisit le transitaire et majore à la fois le fret et l\'assurance.</p>

          <p><strong>DDP (Delivered Duty Paid / rendu droits acquittés).</strong> Le vendeur assume la responsabilité jusqu\'à votre destination désignée, y compris les droits et taxes du pays de destination. C\'est le terme de responsabilité maximale pour le vendeur, et c\'est exactement pourquoi il exige le prix le plus élevé.</p>

          <p>Il existe aussi <strong>CFR</strong> (comme CIF mais sans assurance) et <strong>FCA</strong> (le cousin aérien de FOB), que vous croiserez occasionnellement. Mais maîtrisez d\'abord EXW, FOB, CIF et DDP, et vous comprendrez le reste instantanément.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">FOB vs CIF vs EXW vs DDP : les chiffres réels d\'un propriétaire d\'usine</h2>

          <p>Laissez-moi poser des chiffres concrets, car les Incoterms ne veulent rien dire dans l\'abstrait et tout dans le concret. Je vais dérouler une commande réaliste : <strong>10 000 paires de lunettes de soleil en acétate à 1,80 $ FOB Shenzhen</strong>, expédiées par mer vers un acheteur à Rotterdam, aux Pays-Bas.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Poste de coût</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">EXW</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">FOB</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">CIF</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DDP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Prix unitaire (10 000 paires)</td>
                  <td className="border border-gray-300 px-4 py-2">1,50 $</td>
                  <td className="border border-gray-300 px-4 py-2">1,80 $</td>
                  <td className="border border-gray-300 px-4 py-2">1,95 $</td>
                  <td className="border border-gray-300 px-4 py-2">2,15 $</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Dédouanement export + camionnage Chine</td>
                  <td className="border border-gray-300 px-4 py-2">Payé par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Inclus</td>
                  <td className="border border-gray-300 px-4 py-2">Inclus</td>
                  <td className="border border-gray-300 px-4 py-2">Inclus</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Fret maritime (groupage LCL)</td>
                  <td className="border border-gray-300 px-4 py-2">Payé par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Payé par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Inclus (majoré)</td>
                  <td className="border border-gray-300 px-4 py-2">Inclus</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Assurance</td>
                  <td className="border border-gray-300 px-4 py-2">Payée par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Payée par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Incluse (couverture minimale)</td>
                  <td className="border border-gray-300 px-4 py-2">Incluse</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Droits + TVA à destination</td>
                  <td className="border border-gray-300 px-4 py-2">Payés par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Payés par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Payés par l\'acheteur</td>
                  <td className="border border-gray-300 px-4 py-2">Payés par le vendeur</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Qui contrôle le transitaire ?</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acheteur</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Acheteur</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Vendeur</td>
                  <td className="border border-gray-300 px-4 py-2">Vendeur</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lire le tableau : où va vraiment l\'argent</h3>

          <p>Regardez les prix unitaires. EXW paraît 0,30 $ moins cher que FOB, mais ces 0,30 $ ne vous achètent exactement rien — vous devez quand même payer le dédouanement à l\'export et le transport, ce qui, pour 10 000 paires de lunettes de soleil, coûte environ 300–600 $ quel que soit le prix unitaire. Un acheteur qui a « économisé » 3 000 $ en choisissant EXW plutôt que FOB dépensera au moins cette somme en courtier d\'export chinois, transport portuaire et frais de manutention au terminal que l\'usine aurait absorbés en FOB.</p>

          <p>Regardez maintenant CIF. Le vendeur a ajouté 0,15 $ par paire (1 500 $ au total) pour le fret et l\'assurance. Pour un envoi LCL de 10 000 paires — les lunettes sont légères, cela représente environ 8–12 mètres cubes — le fret réel de Shenzhen à Rotterdam est d\'environ 400–700 $ en groupage. Le vendeur vous facture environ le double du coût réel du fret et appelle cela de la commodité. C\'est la marge CIF, et c\'est ainsi que les vendeurs gagnent discrètement plus sur votre logistique que sur leur propre produit.</p>

          <p>Et DDP à 2,15 $ ? Le vendeur a ajouté 0,35 $ par paire pour couvrir les droits à destination, la gestion de la TVA et le risque de se tromper de classification douanière. Pour un acheteur qui n\'a jamais importé, ces 0,35 $ (environ 3 500 $ sur cette commande) sont sans doute de l\'argent bien dépensé — vous payez quelqu\'un pour absorber le risque douanier. Pour un acheteur qui a déjà fait cela plusieurs fois, ces mêmes 3 500 $ sont une marge que vous pourriez conserver en opérant FOB et en dédouanant vous-même avec un courtier local.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Le seul chiffre qui change tout : le fret par paire</h3>

          <p>Voici le secret de propriétaire d\'usine que la plupart des importateurs ne calculent jamais : <strong>le coût du fret par paire.</strong> Les lunettes de soleil sont absurdement légères et peu volumineuses. Une paire de lunettes en acétate en sachet pèse environ 25–35 grammes et occupe environ 0,6–1 litre une fois emballée. Un conteneur de 40 pieds transporte environ 100 000–150 000 paires. Ainsi, un fret de conteneur de 3 000 $ réparti sur 120 000 paires revient à 0,025 $ par paire — deux centimes et demi.</p>

          <p>Comparez cela au fret aérien à 4–7 $ par kilogramme : une paire de 30 grammes coûte 0,12–0,21 $ à faire voler. C\'est 5 à 8 fois plus par paire. Le fret aérien n\'a de sens que pour les échantillons, les réassorts urgents d\'une référence qui se vend vite, ou les marques haut de gamme où la rapidité vaut la prime. Pour une commande de gros de routine, le fret maritime à deux centimes par paire est toute la raison pour laquelle importer des lunettes de soleil de Chine est rentable. Si un fournisseur route discrètement votre commande « bon marché » par avion sans vous le dire, il vient d\'effacer votre marge — c\'est pourquoi vous confirmez toujours le routage, pas seulement le prix.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Comment choisir le bon Incoterm pour votre première commande</h2>

          <p>Il n\'y a pas d\'Incoterm « correct » unique — il n\'y a que l\'Incoterm correct pour <em>votre situation.</em> Voici le cadre de décision que je donne à mes acheteurs, dans l\'ordre de fréquence de mes recommandations.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Commencez par FOB (presque toujours)</h3>

          <p>Pour une première commande complète par mer, FOB est le choix par défaut. La raison est simple : il place les deux choses les plus difficiles — le dédouanement à l\'export chinois et le chargement sur un navire — entre les mains de la partie qui le fait tous les jours (l\'usine), tout en gardant le fret et le dédouanement à destination entre vos mains, là où vous pouvez contrôler le coût et choisir un transitaire de confiance. Le travail de l\'usine s\'arrête proprement au bastingage, et à partir de là, vous avez une visibilité totale.</p>

          <p>La seule compétence réelle que FOB exige de vous est de trouver un transitaire correct et un courtier en douane local. Ce sont tous deux des services de commodité — demandez à trois transitaires un devis pour le même envoi et vous verrez l\'écart. Ce n\'est pas une raison d\'éviter FOB ; c\'est une raison de passer un après-midi à obtenir trois devis.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Utilisez DDP pour les petites commandes, Amazon FBA et la rapidité</h3>

          <p>DDP mérite sa prime dans trois situations précises. Premièrement, <strong>les petites commandes</strong> : si vous importez 500 paires en messagerie aérienne, la simplicité de laisser le vendeur gérer les droits l\'emporte sur l\'économie de le faire vous-même. Deuxièmement, <strong>Amazon FBA</strong> : un vendeur qui livre votre marchandise dans un entrepôt Amazon droits acquittés avec une étiquette de carton FBA correcte élimine énormément de casse-tête opérationnel pour un vendeur FBA qui ne veut pas toucher à la douane. Troisièmement, <strong>le dropshipping au détail ou les lancements urgents</strong> où la prévisibilité compte plus que la marge.</p>

          <p>Entrez-y simplement les yeux ouverts. DDP signifie que le vendeur contrôle toute la chaîne, ce qui signifie que vous perdez la visibilité sur la décomposition de ce que vous payez réellement. C\'est très bien quand la commande est petite et que l\'alternative est un cauchemar douanier ; c\'est moins bien quand vous importez 20 000 paires et que la prime DDP est de 7 000 $ que vous auriez pu conserver avec un courtier compétent.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">N\'envisagez CIF que si vous n\'avez pas encore de transitaire</h3>

          <p>CIF est le juste milieu : le vendeur gère le fret et vous remet la marchandise à votre port de destination. Il est réellement utile quand vous n\'avez pas encore de transitaire et que la commande est trop grosse pour le confort de DDP mais trop petite pour justifier de bâtir une relation de fret. Le compromis, encore une fois, est la marge et la perte de contrôle — le vendeur choisit le transitaire, et le transitaire travaille pour le vendeur, pas pour vous.</p>

          <p>Mon conseil honnête : sautez entièrement CIF pour les affaires récurrentes. Utilisez-le une fois, sur votre première commande, pendant que vous apprenez encore. Ensuite, obtenez votre propre transitaire à la commande deux et basculez tout sur FOB. CIF, ce sont les roulettes ; FOB, c\'est le vélo.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Évitez EXW jusqu\'à maîtriser parfaitement la logistique d\'export chinoise</h3>

          <p>EXW a exactement un cas d\'usage légitime : vous avez déjà un transitaire en Chine avec licence d\'export, un accord de camionnage chinois et un courtier qui gère le dédouanement à l\'export pour vous, et vous voulez retirer chaque centime de logistique du prix unitaire. C\'est un montage réel et sophistiqué — certains grands importateurs le font tourner. Ce n\'est cependant pas là que l\'on commence.</p>

          <p>Pour un acheteur débutant, EXW est un piège avec un autocollant de remise. Vous paierez un courtier chinois pour le dédouanement à l\'export, un transporteur pour amener la marchandise au port, la manutention au terminal — et si quoi que ce soit tourne mal entre la porte de l\'usine et le navire, c\'est entièrement votre problème. L\'usine, vous ayant remis la marchandise à sa porte, n\'a aucune responsabilité et aucun intérêt à aider. Ce que vous avez économisé sur le prix unitaire, vous le dépenserez — et probablement au-delà — en apprenant à la dure.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La matrice de décision en un coup d\'œil</h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Votre situation</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Incoterm recommandé</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Pourquoi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Premier conteneur maritime complet</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>FOB</strong></td>
                  <td className="border border-gray-300 px-4 py-2">L\'usine gère l\'export ; vous contrôlez fret et destination</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Petite commande en messagerie aérienne</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">La simplicité bat l\'économie sur les petits volumes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Livraison Amazon FBA</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Droits acquittés, livré à l\'entrepôt, étiquette FBA gérée</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Pas encore de transitaire, commande moyenne</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>CIF</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Le vendeur gère le fret pendant que vous bâtissez une relation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Transitaire chinois propre + licence d\'export</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>EXW</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Retirez le coût logistique quand vous savez le gérer vous-même</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Coûts cachés que les importateurs oublient toujours</h2>

          <p>Le prix unitaire n\'est jamais le prix. Chaque fois qu\'un primo-importateur m\'envoie sa « super affaire » et demande pourquoi la marchandise est arrivée 40 % plus chère que prévu, la réponse est toujours les mêmes cinq coûts cachés. Les voici, pour qu\'ils ne vous surprennent pas.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Surestaries et détention — l\'horloge du port</h3>

          <p>Quand votre conteneur arrive, la compagnie maritime vous accorde quelques « jours francs » pour le récupérer — typiquement 3–7 jours pour la surestarie (le conteneur chargé au port). Une fois que vous l\'avez, vous disposez de 5–14 jours francs de « détention » pour décharger et restituer la boîte vide. Dépassez l\'une ou l\'autre fenêtre et le compte-tours démarre : <strong>50–150 $ par jour.</strong> Une retenue douanière de deux semaines peut discrètement ajouter 1 000–2 000 $ à votre coût rendu, et c\'est la façon la plus courante dont les importateurs saignent de l\'argent sans s\'en apercevoir. La solution est la préparation : alignez courtier, transitaire et rendez-vous camion avant même l\'accostage du navire.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Manutention au terminal de destination et frais locaux</h3>

          <p>Même sur un envoi FOB ou CIF, le port de destination a un tas de frais que le devis du vendeur n\'inclut jamais : les frais de manutention au terminal (THC), les frais de dossier, les frais de sécurité du transporteur et le « frais de service portuaire » qui varie selon le terminal. Ensemble, ils représentent <strong>200–500 $ par conteneur</strong> et sont facturés à l\'importateur à l\'arrivée. Demandez à votre transitaire un devis de destination <em>tout compris</em> à l\'avance — ceux qui détaillent tout — pour que la facture d\'arrivée ne soit pas une surprise.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Droits et TVA sur la valeur rendue, pas sur le prix FOB</h3>

          <p>La plupart des importateurs savent que les droits existent ; la plupart sous-estiment la base. Le droit d\'importation est calculé sur la <em>valeur en douane</em>, qui dans la plupart des juridictions est le prix FOB plus le fret plus l\'assurance — essentiellement la valeur CIF — et non le prix FOB que vous avez négocié avec l\'usine. Puis la TVA est prélevée en plus de la valeur droits inclus. Votre droit de 8 % n\'est donc pas 8 % de 1,80 $ ; c\'est 8 % de la valeur rendue, et votre TVA de 21 % s\'empile par-dessus. La charge fiscale effective est presque toujours supérieure au taux de droit affiché. Faites modéliser le coût rendu réel par votre courtier avant de vous engager sur un prix unitaire.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. L\'assurance que vous n\'avez jamais souscrite</h3>

          <p>En FOB et EXW, l\'assurance est votre responsabilité, et la plupart des primo-acheteurs la sautent. C\'est une erreur. Un conteneur perdu ou endommagé sans assurance est une perte totale — vous avez quand même payé l\'usine, et la responsabilité de la compagnie maritime est plafonnée à un montant minuscule par kilogramme en vertu des conventions internationales. L\'assurance transport maritime coûte environ <strong>0,3–0,5 % de la valeur de la marchandise</strong> — quelques dollars pour assurer quelques milliers de dollars de lunettes. Souscrivez-la. Dès que vous possédez le risque (FOB à bord, EXW à la porte), vous devriez aussi posséder l\'assurance.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Le coût de se tromper de code SH</h3>

          <p>Les lunettes de soleil relèvent d\'un code spécifique du Système harmonisé (SH) — typiquement 9004.10 pour les lunettes de soleil, avec des sous-codes selon le matériau. Trompez-vous de classification et la douane reclassera votre marchandise, souvent à un taux de droit plus élevé, plus des pénalités, plus les jours de retard (et les frais de surestarie du point 1) pendant qu\'ils règlent le problème. Un courtier en douane compétent confirmera le bon code SH avant l\'expédition. Un courtier bon marché copiera simplement le code qui figure sur la facture du fournisseur. Ce n\'est pas là qu\'il faut économiser 50 $.</p>

          <p>Additionnez ces cinq éléments et vous voyez pourquoi une monture FOB à 1,80 $ atterrit à 2,40–2,80 $ une fois dans votre entrepôt — et pourquoi un acheteur qui n\'a comparé que des prix unitaires croit avoir été arnaqué alors que le vrai coupable est le fret, les droits et les frais portuaires qu\'il n\'a jamais vu venir.</p>

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
            <h2 className="text-3xl font-bold mb-4">Obtenez un devis de coût rendu, pas seulement un prix unitaire</h2>
            <p className="text-xl mb-6 opacity-90">Envoyez-moi votre spécification et votre port de destination. Je vous donnerai le prix FOB, l\'estimation du fret et une décomposition complète du coût rendu — pour que vous sachiez exactement ce qui atterrit dans votre entrepôt avant de virer un acompte.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Obtenir un devis gratuit
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Plus depuis l\'atelier de l\'usine</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sunglasses-factory-audit-checklist" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Liste d\'audit d\'usine de lunettes de soleil</h3>
                <p className="text-gray-600 text-sm">Une liste de 20 points pour évaluer un fournisseur avant de virer de l\'argent.</p>
              </Link>
              <Link href="/blog/how-to-choose-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Comment choisir un fabricant de lunettes de soleil</h3>
                <p className="text-gray-600 text-sm">Les critères de sélection qui séparent une vraie usine d\'un site web léché.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">Obtenez un devis pour votre commande de gros personnalisée de lunettes de soleil.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
