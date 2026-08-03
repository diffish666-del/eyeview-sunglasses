import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Droits d\'Importation des Lunettes de Soleil 2026 : Taux pour États-Unis, UE, Royaume-Uni, Australie, Canada',
  description: 'Guide complet des droits d\'importation pour lunettes de soleil. Codes SH, taux tarifaires par pays, accords de libre-échange et comment calculer le coût rendu. Guide pratique du propriétaire d\'usine pour économiser sur les douanes.',
  keywords: ['droits importation lunettes soleil', 'taux tarifaires lunettes soleil', 'code SH lunettes soleil', 'calculateur droits douane', 'dédouanement lunettes', 'taxe importation optique', 'tarif américain lunettes', 'droit UE lunettes'],
  alternates: {
    canonical: '/fr/blog/droits-importation-lunettes-soleil',
  },
};

const takeaways = [
  'Code SH 9004.10 : Les lunettes de soleil relèvent de ce code harmonisé mondial — droit américain 2,0 %, UE 2,9 %, Royaume-Uni 2,0 %, Australie 5,0 % (mais souvent 0 % via les ALE), Canada 0 % selon les règles du CPTPP',
  'Le plus gros coût n\'est pas le droit de douane — ce sont les frais d\'expédition et de courtage. Un envoi de lunettes de 5 000 $ peut payer 100 $ de droits mais 400 $ de frais de transitaire. Choisissez votre partenaire logistique avec soin.',
  'Le Certificat d\'Origine est votre outil le plus puissant pour réduire les droits. Si vos lunettes sont fabriquées en Chine (ou au Vietnam/Inde), vous pouvez demander des taux préférentiels dans le cadre de multiples ALE — mais uniquement avec les documents appropriés',
  'Les droits de la Section 301 sur les lunettes chinoises (SH 9004.10.0000) ont ajouté 7,5 % en plus du taux de base de 2,0 % pour les importations américaines en 2026 — le taux effectif total est de 9,5 % sauf si vous bénéficiez d\'une exemption',
  'Formule du coût rendu : (Prix FOB × Quantité + Fret + Assurance) × (1 + Taux de droit) + Courtage + Frais portuaires + Livraison finale. La plupart des nouveaux importateurs sous-estiment de 15 à 20 % lors de leur première commande',
  'Les seuils de valeur comptent : le seuil de minimis américain est de 800 $ (les envois en dessous paient zéro droit), le système IOSS de l\'UE permet la perception préalable de la TVA jusqu\'à 150 €, le Royaume-Uni a un seuil de 135 £. Structurez les petites commandes d\'échantillons pour rester sous ces limites',
];

const quickStats = [
  { label: 'Droit de Base É.-U. (SH 9004.10)', value: '2,0 %' },
  { label: 'Surtaxe Section 301 É.-U.', value: '+7,5 %' },
  { label: 'Taux de Droit UE', value: '2,9 %' },
  { label: 'Taux de Droit R.-U.', value: '2,0 %' },
  { label: 'Taux de Droit Australie', value: '5,0 % (0 % avec CoO)' },
  { label: 'Taux de Droit Canada', value: '0 % (CPTPP)' },
];

const faqs = [
  {
    question: 'Quel est le code SH pour les lunettes de soleil ?',
    answer: 'Les lunettes de soleil sont classées sous le Code SH 9004.10 — "Lunettes, lunettes de protection et articles similaires, correcteurs, protecteurs ou autres, lunettes de soleil." C\'est le code harmonisé utilisé mondialement. La sous-position spécifique américaine est 9004.10.0000. Pour les lunettes de soleil correctrices, utilisez 9004.90.0000. Pour les lunettes de sécurité/industrielles, utilisez 9004.90.0090. Confirmez toujours avec votre courtier en douane — les pénalités pour mauvaise classification commencent à 2× le droit dû.',
  },
  {
    question: 'Combien de droits d\'importation dois-je payer sur des lunettes de soleil de Chine vers les États-Unis ?',
    answer: 'Le droit américain de base pour le SH 9004.10 est de 2,0 %. Cependant, les droits de la Section 301 sur les produits d\'origine chinoise ajoutent 7,5 % (en 2026), portant le taux effectif à 9,5 %. Sur un envoi FOB de 10 000 $, cela représente 950 $ de droits avant d\'ajouter le fret, l\'assurance et les frais de courtage. Si vous fabriquez au Vietnam, en Inde ou au Bangladesh, vous évitez entièrement la surtaxe de la Section 301 — seul le taux de base de 2,0 % s\'applique.',
  },
  {
    question: 'Quel est le droit d\'importation de l\'UE sur les lunettes de soleil en provenance de Chine ?',
    answer: 'L\'UE applique un taux de droit de 2,9 % sur les lunettes de soleil SH 9004.10 en provenance de Chine. Aucun droit supplémentaire au-delà du taux standard. Pour un envoi de 8 000 €, cela représente environ 232 € de droits. L\'UE n\'a pas d\'équivalent à la Section 301. Cependant, la TVA s\'applique au taux du pays de destination (19-27 % selon l\'État membre). Utilisez le système IOSS (Guichet Unique d\'Importation) pour les envois inférieurs à 150 € afin de pré-collecter la TVA et de simplifier le dédouanement.',
  },
  {
    question: 'Ai-je besoin d\'un Certificat d\'Origine pour réduire les droits d\'importation ?',
    answer: 'Oui — le Certificat d\'Origine (CoO) est le document le plus important pour la réduction des droits. Pour les importations américaines en provenance de Chine, un CoO ne réduit pas actuellement la surtaxe de la Section 301, mais il est essentiel pour les demandes d\'ALE avec d\'autres origines. Pour les importations en Australie, au Canada ou au Royaume-Uni dans le cadre du CPTPP ou d\'ALE bilatéraux, un CoO valide peut réduire le droit à 0 %. Votre usine doit le fournir dans les documents d\'expédition — si elle ne peut pas ou ne veut pas, trouvez un autre fournisseur. Le CoO doit être tamponné par la CCPIT (Conseil Chinois pour la Promotion du Commerce International) pour être valide, ce qui coûte environ 30 à 50 $ et prend 2 à 3 jours ouvrés.',
  },
  {
    question: 'Comment calculer le coût total rendu pour une commande de lunettes de soleil ?',
    answer: 'Coût rendu = Prix FOB × Quantité + Fret Maritime (ou Aérien) + Assurance (généralement 0,3-0,5 % de la valeur CIF) + Droit de Douane (% du CIF) + Frais de Courtage (75-200 $ par entrée) + Frais Portuaires/De Destination + Livraison Finale. Exemple : 1 000 paires à 5 $/paire FOB = 5 000 $. Fret maritime = 600 $. Assurance = 28 $. CIF = 5 628 $. Droit américain à 9,5 % = 535 $. Courtage = 125 $. Frais portuaires = 85 $. Livraison = 250 $. Coût total rendu = 6 623 $. Coût unitaire = 6,62 $. Ajoutez toujours une marge de 5 à 10 % pour les fluctuations de change et les frais imprévus.',
  },
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'droits-importation-lunettes-soleil';

export default function DroitsImportationLunettesSoleilPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Accueil', href: '/fr/' },
          { name: 'Blog', href: '/fr/blog/' },
          { name: 'Droits d\'Importation des Lunettes de Soleil 2026' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Droits d'Importation des Lunettes de Soleil 2026 : Taux pour États-Unis, UE, Royaume-Uni, Australie, Canada",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guide complet des droits d'importation pour lunettes de soleil. Codes SH, taux tarifaires par pays, accords de libre-échange et comment calculer le coût rendu. Guide pratique du propriétaire d'usine pour économiser sur les douanes.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/fr/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import & Logistique</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>13 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Droits d&apos;Importation des Lunettes de Soleil 2026 : Taux Pays par Pays
          </h1>
          <p className="text-xl text-gray-600">
            Après 20 ans d&apos;expédition de lunettes de la Chine vers plus de 50 pays, voici la vérité sur les droits de douane — les chiffres, les astuces et les documents qui vous font vraiment économiser de l&apos;argent.
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
          <h2 className="font-bold mb-4">Table des Matières</h2>
          <ul className="space-y-2">
            <li><a href="#hs-codes" className="text-primary-600 hover:underline">Codes SH pour Lunettes de Soleil : Bien Choisir la Classification</a></li>
            <li><a href="#us-duties" className="text-primary-600 hover:underline">Droits d&apos;Importation aux É.-U. : Section 301 et la Réalité des 9,5 %</a></li>
            <li><a href="#eu-duties" className="text-primary-600 hover:underline">Droits d&apos;Importation dans l&apos;UE : Droits Faibles, TVA Élevée</a></li>
            <li><a href="#uk-au-ca" className="text-primary-600 hover:underline">Royaume-Uni, Australie et Canada : Opportunités d&apos;ALE</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">Comment Calculer le Coût Rendu (Avec des Chiffres Réels)</a></li>
            <li><a href="#duty-reduction" className="text-primary-600 hover:underline">7 Façons de Réduire vos Droits d&apos;Importation</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions Fréquentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="Taux des Droits d&apos;Importation des Lunettes de Soleil en un Coup d&apos;Œil" />

          {/* ─── Section 1: HS Codes ─── */}
          <h2 id="hs-codes" className="text-3xl font-bold mt-16 mb-6">Codes SH pour Lunettes de Soleil : Bien Choisir la Classification</h2>
          <p>
            Avant de parler des taux de droits, clarifions une chose : si votre courtier en douane déclare un mauvais code SH, vous n&apos;économisez pas d&apos;argent — vous créez un passif. J&apos;ai vu des importateurs essayer de classer les lunettes de soleil comme &quot;accessoires en plastique&quot; (SH 3926) pour obtenir un taux plus bas, et la CBP les a tous attrapés.
          </p>
          <p>
            Les lunettes de soleil relèvent du <strong>SH 9004.10</strong> — &quot;Lunettes, lunettes de protection et articles similaires, correcteurs, protecteurs ou autres, lunettes de soleil.&quot; Ce code est harmonisé mondialement, ce qui signifie que chaque pays utilise les six mêmes premiers chiffres. Les principales sous-classifications :
          </p>
          <ul>
            <li><strong>9004.10.0000 (É.-U.) :</strong> Lunettes de soleil — sans correction, y compris les lunettes de mode et de sport</li>
            <li><strong>9004.90.0000 (É.-U.) :</strong> Autres lunettes — lunettes de soleil correctrices, lunettes de sécurité, lunettes de lecture</li>
            <li><strong>9004.10.1000 (UE) :</strong> Lunettes de soleil avec verres optiquement travaillés</li>
            <li><strong>9004.10.9100 (UE) :</strong> Lunettes de soleil avec verres simplement façonnés (la plupart des exportations chinoises entrent ici)</li>
          </ul>
          <p>
            <strong>Conseil de pro depuis l&apos;usine :</strong> Si vos lunettes de soleil ont une protection UV400 (ce que les nôtres ont par défaut), elles restent classées sous 9004.10. La distinction &quot;correcteur vs. protecteur&quot; n&apos;a d&apos;importance que si vous importez des lunettes correctrices. La plupart des commandes de lunettes en gros auprès de fournisseurs comme EyeView sont correctement classées sous 9004.10, quelles que soient les caractéristiques des verres.
          </p>

          {/* ─── Section 2: US Duties ─── */}
          <h2 id="us-duties" className="text-3xl font-bold mt-16 mb-6">Droits d&apos;Importation aux É.-U. : Section 301 et la Réalité des 9,5 %</h2>
          <p>
            Les États-Unis sont le plus grand marché pour les importations de lunettes de soleil — et le plus cher en termes de droits si vous vous approvisionnez en Chine. Voici la ventilation :
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Taux NPF de Base : 2,0 %</h3>
          <p>
            Dans le cadre des relations commerciales normales (NPF), le SH 9004.10.0000 supporte un droit ad valorem de 2,0 %. Cela représente 20 $ par tranche de 1 000 $ de valeur déclarée. Pas mal.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Surtaxe Section 301 : +7,5 %</h3>
          <p>
            C&apos;est là que ça devient cher. Les droits de la Section 301 — imposés sur les produits d&apos;origine chinoise depuis 2018 — appliquent 7,5 % supplémentaires sur le SH 9004.10.0000 en 2026. Le taux initial de 25 % a été réduit à 7,5 % en 2020 et y est resté. <strong>Droit effectif total des É.-U. sur les lunettes chinoises : 9,5 %.</strong>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <p className="font-bold text-amber-800 mb-2">⚠️ La Section 301 s&apos;Applique au Pays d&apos;Origine, Pas au Pays d&apos;Expédition</p>
            <p className="text-amber-700 text-sm">Si vos lunettes sont fabriquées en Chine mais expédiées depuis un entrepôt de Hong Kong, la Section 301 s&apos;applique toujours. Les douanes américaines examinent où les marchandises ont été fabriquées, pas d&apos;où elles ont été chargées sur le navire. La seule façon d&apos;éviter la Section 301 est de fabriquer entièrement en dehors de la Chine.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">De Minimis : L&apos;Astuce des 800 $</h3>
          <p>
            En vertu de la Section 321, les envois d&apos;une valeur de 800 $ ou moins entrent aux É.-U. en franchise de droits — y compris les marchandises de la Section 301. C&apos;est ainsi que de nombreuses petites marques démarrent : commandez 50 à 100 paires comme échantillons, répartissez-les en plusieurs envois de moins de 800 $ chacun, et payez zéro droit. C&apos;est parfaitement légal tant que chaque envoi est réellement en dessous du seuil et que vous ne fractionnez pas artificiellement les commandes pour échapper aux droits (cela s&apos;appelle &quot;abus structuré de minimis&quot; et la CBP sévit).
          </p>

          {/* ─── Section 3: EU Duties ─── */}
          <h2 id="eu-duties" className="text-3xl font-bold mt-16 mb-6">Droits d&apos;Importation dans l&apos;UE : Droits Faibles, TVA Élevée</h2>
          <p>
            L&apos;UE est rafraîchissante de simplicité par rapport aux É.-U. — pas de Section 301, pas de surtaxes de guerre commerciale. Mais la TVA est là où se cache le vrai coût.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Droit Standard : 2,9 %</h3>
          <p>
            Dans le cadre du Tarif Douanier Commun de l&apos;UE (TARIC), le SH 9004.10.9100 (lunettes de soleil avec verres simplement façonnés, qui couvre la plupart des importations en gros) supporte un taux de droit de 2,9 %. C&apos;est moins de la moitié du taux effectif américain. Pour une commande d&apos;une valeur CIF de 10 000 €, vous payez 290 € de droits.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">TVA : Le Coût Réel</h3>
          <p>
            Voici ce qui surprend les nouveaux importateurs : l&apos;UE ajoute la TVA sur la valeur droits acquittés. Si vos marchandises arrivent en Allemagne (TVA à 19 %), le calcul est le suivant :
          </p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 font-mono text-sm">
            <p>Valeur CIF : 10 000 €</p>
            <p>Droit (2,9 %) : +290 €</p>
            <p>Valeur Droits Acquittés : 10 290 €</p>
            <p>TVA (19 %) : +1 955 €</p>
            <p className="font-bold">Total en Douane : 12 245 €</p>
          </div>
          <p>
            <strong>Important :</strong> La TVA est généralement récupérable si vous êtes une entreprise assujettie à la TVA. Vous la payez à l&apos;importation, la récupérez lors de votre prochaine déclaration de TVA. Mais vous avez besoin de trésorerie pour couvrir l&apos;écart de 90 à 120 jours entre le paiement et le remboursement.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IOSS : TVA Prépayée pour les Petites Commandes</h3>
          <p>
            Le Guichet Unique d&apos;Importation (IOSS) vous permet de pré-collecter la TVA au point de vente pour les envois inférieurs à 150 €. L&apos;acheteur paie la TVA lors du paiement, vous la reversez mensuellement à une seule autorité fiscale de l&apos;UE, et les marchandises passent la douane sans que le destinataire ne paie rien à la livraison. EyeView prend en charge la facturation compatible IOSS — informez-nous lors de la commande et nous formaterons votre facture commerciale en conséquence.
          </p>

          {/* ─── Section 4: UK, AU, CA ─── */}
          <h2 id="uk-au-ca" className="text-3xl font-bold mt-16 mb-6">Royaume-Uni, Australie et Canada : Opportunités d&apos;ALE</h2>
          <p>
            Ces trois marchés offrent les meilleures opportunités de réduction des droits si vous connaissez les accords commerciaux.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Royaume-Uni : 2,0 % de Base, SPG Disponible</h3>
          <p>
            Après le Brexit, le Royaume-Uni applique un droit de 2,0 % sur les lunettes de soleil SH 9004.10. Dans le cadre du Système de Préférences Généralisées du Royaume-Uni (SPG), les produits chinois sont éligibles aux taux préférentiels — mais la marge de préférence sur le 9004.10 est nulle (le taux NPF est déjà le plancher SPG). Ce qui change le calcul : le Système Commercial pour les Pays en Développement (DCTS) du Royaume-Uni offre 0 % de droit pour les lunettes fabriquées dans 65 pays éligibles, notamment l&apos;Inde et le Pakistan. Si vous pouvez vous approvisionner en montures en acétate auprès d&apos;une usine indienne, le droit britannique tombe à zéro.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Australie : 5,0 % Standard, 0 % avec l&apos;ALE</h3>
          <p>
            Le tarif standard australien sur le SH 9004.10 est de 5,0 % — le plus élevé parmi les principaux marchés. Mais l&apos;Accord de Libre-Échange Chine-Australie (ChAFTA) a éliminé les droits sur les lunettes de soleil en 2019. <strong>Avec un Certificat d&apos;Origine valide, le droit australien est de 0 %.</strong> Chaque client australien à qui j&apos;ai expédié économise la totalité des 5 % avec une documentation CoO appropriée. Les formalités coûtent 35 $ à la CCPIT et prennent 3 jours. Pour une commande de 20 000 $, cela représente 1 000 $ d&apos;économisés.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Canada : 0 % avec le CPTPP</h3>
          <p>
            Le Canada a éliminé les droits sur les lunettes de soleil d&apos;origine chinoise dans le cadre de l&apos;Accord de Partenariat Transpacifique Global et Progressiste (CPTPP). <strong>Les importateurs canadiens paient 0 % de droit sur le SH 9004.10 en provenance de Chine</strong> — l&apos;une des rares catégories où la relation commerciale sino-canadienne favorise l&apos;importateur. Assurez-vous simplement que votre facture commerciale indique clairement le pays d&apos;origine comme étant la Chine et le code SH comme 9004.10.
          </p>

          {/* ─── Section 5: Landed Cost ─── */}
          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">Comment Calculer le Coût Rendu (Avec des Chiffres Réels)</h2>
          <p>
            La plupart des nouveaux importateurs regardent le prix FOB unitaire et pensent que c&apos;est leur coût. Ce n&apos;est pas le cas. Voici un calcul réel du coût rendu pour une commande type :
          </p>

          <div className="bg-gray-100 rounded-lg p-6 my-6 font-mono text-sm space-y-1">
            <p className="font-bold text-base mb-3">Exemple : 1 000 Paires de Lunettes en Acétate → É.-U.</p>
            <p>Prix FOB (1 000 × 5,00 $) : <span className="float-right">5 000,00 $</span></p>
            <p>Fret Maritime (LCL, Shanghai→LA) : <span className="float-right">+600,00 $</span></p>
            <p>Assurance Maritime (0,5 % du CIF) : <span className="float-right">+28,00 $</span></p>
            <p className="border-t border-gray-300 pt-1">Valeur CIF (Base Douanière) : <span className="float-right">5 628,00 $</span></p>
            <p>Droit É.-U. (9,5 % du CIF) : <span className="float-right">+534,66 $</span></p>
            <p>Frais de Courtage Douanier : <span className="float-right">+125,00 $</span></p>
            <p>MPF (Frais de Traitement des Marchandises) : <span className="float-right">+29,66 $</span></p>
            <p>HMF (Frais d&apos;Entretien Portuaire, 0,125 %) : <span className="float-right">+7,04 $</span></p>
            <p>Frais Portuaires/CFS : <span className="float-right">+85,00 $</span></p>
            <p>Transport Final (Port→Entrepôt) : <span className="float-right">+250,00 $</span></p>
            <p className="border-t border-gray-300 pt-1 font-bold">Coût Total Rendu : <span className="float-right">6 659,36 $</span></p>
            <p className="font-bold text-primary-600">Coût Rendu Par Paire : <span className="float-right">6,66 $</span></p>
          </div>

          <p>
            Cette paire à 5,00 $ FOB coûte en réalité 6,66 $ une fois arrivée à votre entrepôt — une majoration de 33 % par rapport au prix d&apos;usine. Et c&apos;est le meilleur scénario avec le fret maritime. Le fret aérien ajouterait 800 à 1 200 $, portant le coût rendu au-dessus de 7,50 $/paire.
          </p>

          {/* ─── Section 6: Duty Reduction ─── */}
          <h2 id="duty-reduction" className="text-3xl font-bold mt-16 mb-6">7 Façons de Réduire vos Droits d&apos;Importation</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">1. Obtenez le Certificat d&apos;Origine — À Chaque Fois</h3>
          <p>
            C&apos;est non négociable pour l&apos;Australie, le Canada et tout marché où les ALE s&apos;appliquent. Demandez à votre usine d&apos;inclure un CoO tamponné par la CCPIT avec chaque envoi d&apos;une valeur supérieure à 500 $. Coût : 30 à 50 $. Économies potentielles : 5 % de la valeur CIF. ROI : 100× ou plus.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Utilisez le De Minimis pour les Échantillons et Petites Commandes</h3>
          <p>
            Gardez les commandes d&apos;échantillons initiales sous 800 $ (É.-U.), 150 € (UE) ou 135 £ (R.-U.) pour entrer en franchise de droits. C&apos;est la meilleure astuce pour tester de nouveaux styles avant de vous engager sur du volume.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. Envisagez la Fabrication Répartie</h3>
          <p>
            Si vous expédiez aux É.-U. et que la surtaxe de 7,5 % de la Section 301 tue vos marges, envisagez de fabriquer au Vietnam ou en Inde plutôt qu&apos;en Chine. Le Vietnam n&apos;a que des taux NPF (2,0 %) sans Section 301. Le coût unitaire en usine peut être supérieur de 0,30 à 0,50 $, mais les économies de droits dépassent souvent le surcoût de fabrication sur les commandes supérieures à 10 000 $.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Déclarez des Valeurs Exactes — Mais Pas Gonflées</h3>
          <p>
            Sous-déclarer la valeur en douane est illégal. Mais sur-déclarer, c&apos;est jeter de l&apos;argent. Déclarez la valeur réelle de la transaction (ce que vous avez payé à l&apos;usine). Ne la gonflez pas &quot;pour des raisons d&apos;assurance&quot; — souscrivez une assurance marchandise séparée. Une sur-déclaration de 1 000 $ sur un envoi à destination des É.-U. coûte 95 $ en droits inutiles.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. Expédiez en FCL Plutôt qu&apos;en LCL Quand C&apos;est Possible</h3>
          <p>
            Si vous commandez plus de 3 000 paires, un conteneur complet (FCL) est moins cher par unité que le groupage (LCL) et évite les frais de CFS (Station de Fret Conteneur) à destination. Le point mort se situe généralement autour de 5 à 8 mètres cubes de lunettes — environ 2 000 à 3 000 paires avec emballage.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Utilisez un Courtier en Douane Agréé, Pas Celui Imposé par Votre Transitaire</h3>
          <p>
            Les transitaires regroupent souvent le dédouanement à des tarifs gonflés. Un courtier en douane agréé indépendant facture 75 à 150 $ par déclaration contre 200 à 350 $ pour les transitaires qui sous-traitent le travail. Pour les importateurs fréquents (plus de 12 envois/an), une caution douanière continue (500 $/an) est moins chère que les cautions par envoi (50 à 75 $ chacune).
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Programmez vos Envois Hors Saison Haute</h3>
          <p>
            Les tarifs du fret maritime augmentent de 40 à 80 % pendant la haute saison (août-octobre pour les stocks de Noël, janvier-février avant le Nouvel An Chinois). Comme le fret fait partie de votre valeur CIF — et que les droits sont calculés sur le CIF — un fret plus élevé signifie des droits plus élevés. Expédiez en mars-mai ou en novembre pour obtenir des tarifs de fret plus bas et, par extension, des calculs de droits plus bas.
          </p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Questions Fréquentes</h2>
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
            <h2 className="text-3xl font-bold mb-4">Documents d&apos;Expédition ? On S&apos;en Occupe.</h2>
            <p className="text-xl mb-6 opacity-90">Chaque commande EyeView comprend un Certificat d&apos;Origine tamponné par la CCPIT, une facture commerciale avec les codes SH corrects et une liste de colisage formatée pour les exigences douanières de votre pays. Dites-nous votre destination et nous optimiserons vos documents pour minimiser les droits.</p>
            <Link
              href="/fr/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Demander un Devis Gratuit
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Plus de l&apos;Usine</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/blog/guide-importation-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Importer des Lunettes de Soleil de Chine</h3>
                <p className="text-gray-600 text-sm">Guide d&apos;importation étape par étape : douanes, expédition, contrôle qualité.</p>
              </Link>
              <Link href="/fr/blog/guide-moq-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guide des Quantités Minimum de Commande</h3>
                <p className="text-gray-600 text-sm">Combien de paires commander en premier ? Stratégies intelligentes de montée en échelle.</p>
              </Link>
              <Link href="/fr/contact" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contactez-Nous</h3>
                <p className="text-gray-600 text-sm">Obtenez un devis pour votre commande personnalisée de lunettes en gros.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
