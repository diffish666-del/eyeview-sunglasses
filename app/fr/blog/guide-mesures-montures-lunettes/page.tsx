import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Mesures des Montures de Lunettes de Soleil Expliquées : DP, Largeur du Pont, Longueur des Branches',
  description: 'Un propriétaire d\'usine détaille les mesures des montures de lunettes de soleil — DP, largeur du pont, longueur des branches, largeur de monture — avec de vraies données de gros pour que vous arrêtiez de commander des montures qui ne vont pas à vos clients.',
  keywords: ['mesures montures lunettes de soleil', 'DP distance pupillaire lunettes de soleil', 'largeur du pont lunettes de soleil', 'longueur des branches lunettes de soleil', 'largeur de monture lunettes de soleil', 'guide tailles lunettes de soleil gros', 'comment mesurer montures de lunettes', 'guide ajustement lunettes de soleil en gros', 'ajustement asiatique vs européen lunettes de soleil', 'dimensions montures lunettes de soleil expliquées'],
  alternates: {
    canonical: '/fr/blog/guide-mesures-montures-lunettes',
    languages: {
      'en': '/blog/sunglasses-frame-measurements-guide',
      'de': '/de/blog/sonnenbrillen-rahmenmessungen-leitfaden',
      'es': '/es/blog/guia-medidas-monturas-gafas',
      'fr': '/fr/blog/guide-mesures-montures-lunettes',
      'it': '/it/blog/guida-misure-montature-occhiali',
      'pt': '/pt/blog/guia-medidas-armacoes-oculos',
    },
  },
};

const takeaways = [
  'Les mesures de monture ne sont pas de simples spécifications techniques — ce sont elles qui font la différence entre une paire de lunettes de soleil qui reste sur un présentoir et une qui est réellement portée ; si vous vous trompez sur la largeur du pont ou la longueur des branches, votre monture de gros à 8 $ devient un stock invendable, quelle que soit la qualité des verres',
  'La Distance Pupillaire (DP) est la mesure la plus négligée en lunetterie de gros — la plupart des catalogues d\'usine indiquent la DP de la monture comme un chiffre unique, mais la fenêtre de tolérance réelle pour un ajustement confortable n\'est que de ±2 mm par œil, ce qui signifie qu\'une monture avec une DP de 64 mm ne convient en réalité qu\'aux visages dont la DP se situe entre 60 et 68 mm avant qu\'un désalignement optique ne provoque des maux de tête',
  'Les lunettes à ajustement asiatique ne sont pas un argument marketing — elles existent parce que le pont nasal asiatique moyen est 2 à 4 mm plus bas et 3 à 5 mm plus large que le pont nasal caucasien moyen, ce qui exige des montures avec des points de contact nasaux plus bas, une largeur de pont plus petite et des plaquettes de nez offrant plus de réglage vertical ; si vous vendez sur les marchés asiatiques sans comprendre cela, la moitié de vos montures glissera sur le visage de vos clients',
  'La longueur des branches est la dimension qui détermine si vos montures conviendront aux tailles de tête européennes (140–145 mm en moyenne), américaines (140–150 mm) ou asiatiques (125–140 mm) — une branche de 145 mm est le défaut universel le plus sûr, mais si vous ciblez spécifiquement une région, vous devez ajuster votre spécification OEM en conséquence',
  'L\'erreur de mesure de monture la plus courante chez les acheteurs en gros est de commander des montures en se basant sur leur apparence sur les photos plutôt que sur leurs mesures — une monture avec une largeur de verre de 55 mm est superbe sur un mannequin mais ne convient confortablement qu\'à environ 40 % des visages adultes ; la largeur de verre de 52 mm est le point idéal pour un ajustement universel, tous genres et marchés confondus',
];

const quickStats = [
  { label: 'Point idéal de DP de monture universelle', value: '62–64 mm' },
  { label: 'Tolérance de confort DP par œil', value: '±2 mm' },
  { label: 'Longueur moyenne des branches en Europe', value: '140–145 mm' },
  { label: 'Longueur moyenne des branches en Asie', value: '125–140 mm' },
  { label: 'Plage standard de largeur de pont', value: '14–24 mm' },
  { label: 'Largeur de verre la plus courante (universelle)', value: '52 mm' },
  { label: 'Pont nasal asiatique — plus bas vs caucasien', value: '2–4 mm plus bas' },
  { label: 'Retours de montures dus à un mauvais ajustement', value: '12–18 % des retours B2C' },
];

const faqs = [
  {
    question: 'Que signifient les trois chiffres sur les montures de lunettes de soleil (par exemple 52□18-145) ?',
    answer: 'Les trois chiffres constituent la norme internationale de mesure des montures : le premier chiffre (52) est la largeur du verre en millimètres, mesurée horizontalement sur la partie la plus large d\'un seul verre. Le deuxième chiffre (18) est la largeur du pont — la distance entre les deux verres au point le plus étroit du pont. Le troisième chiffre (145) est la longueur des branches, mesurée de la vis de charnière à l\'extrémité de la branche, y compris la courbe derrière l\'oreille. Ces trois chiffres vous donnent environ 80 % de ce que vous devez savoir sur l\'ajustement d\'une monture. Le quatrième chiffre, que certains fabricants incluent, est la hauteur du verre — pas toujours imprimée mais essentielle pour les verres progressifs ou correcteurs. Lorsque vous évaluez les fiches techniques d\'usine, demandez toujours les quatre chiffres si vous prévoyez de proposer des montures prêtes pour la correction.',
  },
  {
    question: 'Comment mesurer la distance pupillaire (DP) pour des lunettes de soleil ?',
    answer: 'La DP est la distance en millimètres entre les centres de vos deux pupilles. Il en existe deux types : la DP binoculaire (distance entre les deux pupilles, généralement 54–74 mm chez l\'adulte) et la DP monoculaire (distance de chaque pupille au centre du pont nasal, généralement 27–37 mm par œil). Pour la conception des montures de lunettes de soleil, la relation essentielle est : DP de la monture = largeur du verre + largeur du pont. Ainsi, une monture 52□18 a une DP de monture de 70 mm. Si votre client a une DP binoculaire de 62 mm, cette monture est 8 mm trop large — les centres optiques des verres seront désalignés par rapport aux pupilles, ce qui peut provoquer une fatigue oculaire et des maux de tête. En tant qu\'acheteur en gros, vous voulez des montures dont la DP de monture se situe à moins de 4 mm de la DP la plus courante de votre marché cible. La plupart des DP adultes se concentrent entre 58 et 68 mm, donc les montures avec une DP de 62–64 mm conviennent à la plus large gamme.',
  },
  {
    question: 'Quelle est la différence entre les lunettes de soleil à ajustement asiatique et à ajustement européen ?',
    answer: 'Les lunettes à ajustement asiatique (également appelées ajustement à pont bas ou ajustement universel) présentent trois différences clés par rapport aux montures standard à ajustement européen : (1) Les plaquettes de nez ou le pont sont positionnés 2 à 4 mm plus bas sur le devant de la monture, car le pont nasal asiatique est situé plus bas sur le visage. (2) La largeur du pont est généralement de 1 à 3 mm plus étroite (15–17 mm contre 17–20 mm sur les montures européennes) car la structure osseuse nasale asiatique offre moins de soutien latéral — un pont plus large fera glisser la monture vers le bas. (3) Les plaquettes de nez, si elles sont réglables, ont des bras plus longs avec une course verticale plus importante (8–10 mm de réglage de hauteur contre 5–6 mm sur les montures standard). De plus, la courbure de la monture (angle de face) est souvent légèrement plus plate (3–5° contre l\'enroulement standard de 5–8°) pour réduire la pression sur les pommettes, qui ont tendance à être plus saillantes dans les structures faciales asiatiques. Ce ne sont pas des ajustements mineurs — une monture conçue pour des visages européens ne tiendra littéralement pas en place sur de nombreux clients asiatiques, créant un cycle constant de glissement et de repoussage qui ruine l\'expérience de port.',
  },
  {
    question: 'Quelle longueur de branches dois-je spécifier pour ma commande de lunettes de soleil en gros ?',
    answer: 'La longueur des branches est la mesure de monture la plus dépendante de la région. Pour le marché européen, spécifiez des branches de 140–145 mm — cela convient à environ 85 % des adultes européens. Pour le marché nord-américain, 140–150 mm est la plage sûre, 145 mm étant la plus universelle. Pour les marchés asiatiques, optez pour plus court : 125–140 mm, car la profondeur moyenne de la tête asiatique (d\'avant en arrière) est inférieure à la moyenne européenne. Pour les marchés du Moyen-Orient et d\'Asie du Sud, 140–145 mm fonctionne généralement, mais vous pouvez recevoir des demandes de 150 mm pour les grandes tailles de tête. Si vous lancez une ligne de lunettes de soleil à ajustement universel vendue sur plusieurs continents, spécifiez des branches de 145 mm — c\'est légèrement long pour les visages asiatiques et légèrement court pour les grandes têtes européennes et américaines, mais c\'est l\'option la moins mauvaise pour une approche taille unique. Pour les commandes OEM, je recommande toujours de produire deux références de longueur de branches (140 mm et 148 mm) pour toute monture unisexe de plus de 52 mm de largeur de verre — la différence de coût d\'outillage est nulle pour les montures en acétate et minime pour les montures injectées, et cela double votre couverture d\'ajustement.',
  },
  {
    question: 'Comment la largeur du pont et la conception des plaquettes de nez affectent-elles le confort des lunettes de soleil ?',
    answer: 'La largeur du pont est la mesure que les acheteurs négligent le plus souvent, et c\'est celle qui provoque le plus de plaintes de confort. Le pont supporte 80–90 % du poids de la monture, donc une erreur signifie que la monture glisse (trop large) ou pince le nez (trop étroite). Les largeurs de pont standard vont de 14 mm (étroite, souvent sur les montures en métal avec plaquettes de nez réglables) à 24 mm (large, courante sur les montures de mode en acétate surdimensionnées). Le point idéal pour la plupart des montures unisexes adultes est de 17–19 mm avec des plaquettes de nez réglables ou un pont en trou de serrure bien profilé. La conception des plaquettes de nez compte tout autant : les visages asiatiques ont besoin de plaquettes avec un dégagement vertical plus important (la plaquette est positionnée plus bas sous le cercle de la monture), les visages européens ont besoin d\'un dégagement modéré, et les visages africains bénéficient souvent de plaquettes plus écartées avec un angle plus plat. Les ponts en acétate moulé (ponts selles monobloc) ont un aspect plus net mais sont impitoyables sur l\'ajustement — si la courbe du pont ne correspond pas au profil nasal du client, aucun réglage n\'est possible. Les plaquettes de nez métalliques réglables sur bras offrent environ 8–10 mm de réglage d\'ajustement et devraient être la norme pour toute monture en gros ciblant des marchés diversifiés.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'guide-mesures-montures-lunettes';

export default function GuideMesuresMonturesLunettes() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Accueil', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Mesures des Montures de Lunettes de Soleil Expliquées' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Mesures des Montures de Lunettes de Soleil Expliquées : DP, Largeur du Pont, Longueur des Branches — Guide de l'Acheteur en Gros",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un propriétaire d'usine détaille les mesures des montures de lunettes de soleil — DP, largeur du pont, longueur des branches, largeur de monture — avec de vraies données de gros pour que vous arrêtiez de commander des montures qui ne vont pas à vos clients.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Savoir-Faire d'Usine</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mesures des Montures de Lunettes de Soleil Expliquées : DP, Largeur du Pont, Longueur des Branches
          </h1>
          <p className="text-xl text-gray-600">
            La plupart des acheteurs en gros choisissent leurs montures en se basant sur leur apparence sur une photo. Moi, je les choisis en me basant sur les chiffres — parce que ce sont les mesures qui déterminent si vos clients porteront réellement ces fichues lunettes. Voici tout ce que vous devez savoir sur les mesures des montures de lunettes de soleil, de la part de quelqu'un qui les fabrique depuis 20 ans.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table des matières</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Pourquoi les mesures de monture comptent pour les acheteurs en gros</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">DP (Distance Pupillaire) — Ce que c'est et pourquoi les usines s'y intéressent</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Largeur du Pont — La variable d'ajustement cachée</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Longueur des Branches et Largeur de Monture — Réussir l'ajustement global</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions Fréquemment Posées</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} title="Points Clés à Retenir" />

          {/* 🟡 GEO: Quick Stats */}
          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Chiffres Clés des Mesures de Monture" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Pourquoi les mesures de monture comptent pour les acheteurs en gros</h2>
          
          <p>Laissez-moi vous parler d'un client qui a perdu 18 000 $ sur un seul conteneur de lunettes de soleil.</p>
          
          <p>C'était un importateur débutant venu d'Allemagne. Il a commandé 3 000 wayfarers en acétate — belle qualité, bons verres, prix compétitif à 6 $ FOB. Les échantillons étaient magnifiques. Il m'a envoyé des photos du déballage, fier comme un paon. Trois mois plus tard, il m'a appelé. Les retours atteignaient 22 %. Ses détaillants lui renvoyaient les cartons. Les montures étaient trop larges pour les visages européens — 55 mm de largeur de verre avec un pont de 20 mm. La largeur totale de la monture ressortait à 142 mm, ce qui convient à un grand visage américain mais paraît comiquement surdimensionné sur l'homme européen moyen. Ses clients les essayaient, riaient, et les reposaient.</p>
          
          <p>Cette commande lui a coûté 18 000 $ de produits, 4 200 $ de fret et six mois de temps perdu. Tout cela parce que personne n'avait vérifié les mesures avant la production.</p>
          
          <p>J'ai vu cela se produire des dizaines de fois en 20 ans. Les acheteurs en gros — surtout les nouveaux — choisissent leurs montures en se basant sur les photos, le style et la couleur. Ils regardent la fiche technique, voient les chiffres, et pensent « ce ne sont que des détails techniques, l'usine s'en occupe ». Ils ne réalisent pas que les mesures de monture sont <strong>le facteur déterminant n°1 du taux d'écoulement</strong>. Une monture qui ne va pas à votre marché cible n'est pas un produit — c'est un stock mort avec une déclaration en douane.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Le vrai coût d'une erreur de mesures</h3>
          
          <p>Lorsque vous commandez des montures qui ne vont pas à vos clients, vous le payez d'au moins quatre manières :</p>
          
          <p><strong>1. Retours directs.</strong> En e-commerce B2C, les taux de retour en lunetterie pour mauvais ajustement atteignent 12–18 % en moyenne — et c'est pour les marques qui proposent un essayage virtuel et des guides de tailles détaillés. Si vous êtes un grossiste qui approvisionne les magasins de détail, le détaillant n'absorbe pas ce coût. Il vous le renvoie. Ou pire, il ne repasse pas commande.</p>
          
          <p><strong>2. Atteinte à la marque.</strong> Une mauvaise expérience d'ajustement crée un client qui associe votre marque à l'inconfort. Ce client ne dit pas « la largeur du pont était 2 mm trop large ». Il dit « vos lunettes de soleil sont inconfortables ». Et il le répète à cinq amis. Dans une catégorie où l'achat répété dépend presque entièrement de la satisfaction d'ajustement, une seule mauvaise mesure peut tuer la valeur à vie du client.</p>
          
          <p><strong>3. Stock mort.</strong> Les montures qui ne vont pas ne peuvent pas être « réparées ». On ne peut pas remouler l'acétate. On ne peut pas étirer une branche en titane. Ce stock reste dans un entrepôt, accumulant des frais de stockage, jusqu'à ce que vous le liquidiez à 40 % de votre coût débarqué. J'ai parcouru des entrepôts d'acheteurs à Rotterdam, Los Angeles et Dubaï — chacun a son coin rempli de « montures qui n'allaient pas ».</p>
          
          <p><strong>4. Opportunité perdue.</strong> Chaque dollar immobilisé dans des montures mal ajustées est un dollar que vous ne pouvez pas consacrer à une réassort des montures qui se vendent réellement. Dans le gros de lunettes de soleil, la rotation des stocks est tout. Un lot de montures mal ajustées ralentit tout votre cycle de trésorerie de 60 à 90 jours.</p>
          
          <p>Les mesures de monture ne sont pas des détails optionnels. C'est la spécification qui sépare une entreprise d'importation rentable d'un garde-meuble plein de regrets. Et la première mesure que vous devez comprendre, c'est la DP.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">DP (Distance Pupillaire) — Ce que c'est et pourquoi les usines s'y intéressent</h2>
          
          <p>La Distance Pupillaire — DP — est la distance entre les centres de vos deux pupilles, mesurée en millimètres. La DP typique d'un adulte va de 54 mm à 74 mm, la grande majorité se concentrant entre 58 et 68 mm. Pour les lunettes de soleil, une DP de 62–64 mm convient au public adulte le plus large.</p>
          
          <p>Voici ce que la plupart des acheteurs ne comprennent pas : <strong>la DP de la monture est différente de la DP personnelle.</strong></p>
          
          <p>La DP de la monture se calcule ainsi : <strong>Largeur du verre + Largeur du pont.</strong> Si vous avez une monture 52□18, la DP de la monture est de 70 mm (52 + 18). Cela signifie que le centre optique du verre gauche est à 70 mm du centre optique du verre droit. Si votre client a une DP personnelle de 62 mm, ces centres optiques sont 8 mm trop écartés. Chaque fois qu'il regarde à travers ces verres, ses yeux forcent de 4 mm vers l'extérieur de chaque côté pour s'aligner sur le centre optique.</p>
          
          <p>Pour les lunettes de soleil non correctrices, un écart de DP de quelques millimètres est généralement tolérable — les verres plan n'ont pas de centre optique défini. Mais si vous vendez des montures prêtes pour la correction, la DP devient critique. Un écart de 4 mm ou plus par œil provoquera une fatigue oculaire, des maux de tête et une vision périphérique floue. Vos clients blâmeront vos verres — mais le vrai problème vient de la spécification de la monture.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Plages de DP par marché — Ce que disent les données</h3>
          
          <p>En 20 ans d'exportation vers plus de 50 pays, voici ce que j'ai observé à propos de la distribution des DP sur les différents marchés :</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Marché</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DP moyenne homme adulte</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DP moyenne femme adulte</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Plage de DP de monture sûre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Amérique du Nord</td>
                  <td className="border border-gray-300 px-4 py-2">64–68 mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–64 mm</td>
                  <td className="border border-gray-300 px-4 py-2">63–66 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europe du Nord</td>
                  <td className="border border-gray-300 px-4 py-2">63–67 mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63 mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europe du Sud</td>
                  <td className="border border-gray-300 px-4 py-2">62–66 mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–62 mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Asie de l'Est (Chine, Japon, Corée)</td>
                  <td className="border border-gray-300 px-4 py-2">60–65 mm</td>
                  <td className="border border-gray-300 px-4 py-2">57–62 mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–63 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Asie du Sud-Est</td>
                  <td className="border border-gray-300 px-4 py-2">59–64 mm</td>
                  <td className="border border-gray-300 px-4 py-2">56–61 mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–62 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Moyen-Orient</td>
                  <td className="border border-gray-300 px-4 py-2">63–68 mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63 mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65 mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Amérique latine</td>
                  <td className="border border-gray-300 px-4 py-2">62–67 mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–63 mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 italic">Ce sont des moyennes de niveau usine basées sur les habitudes de commandes des clients et les retours d'ajustement sur deux décennies — pas des données anthropologiques évaluées par des pairs, mais suffisamment précises pour concevoir des montures qui vont à de vrais clients.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Comment lire la DP sur une fiche technique d'usine</h3>
          
          <p>Lorsque vous recevez une fiche technique d'une usine chinoise, la DP apparaît généralement sous l'une de ces trois formes :</p>
          
          <p><strong>1. DP de la monture.</strong> Indiquée comme un chiffre unique, généralement 62–70 mm. C'est la largeur du verre + la largeur du pont. Elle vous donne la distance centre à centre des verres. Si ce chiffre s'écarte de plus de 4 mm de la DP moyenne de votre marché cible, la monture provoquera des problèmes optiques pour les porteurs de verres correcteurs et pourra donner un air louche ou exorbité sur le visage.</p>
          
          <p><strong>2. Plage de décentration.</strong> Certaines meilleures usines indiquent la « plage de DP adaptée », comme « DP 60–68 mm recommandée ». Cela vous donne la plage de DP des clients qui peuvent porter la monture confortablement. Une monture avec une DP de monture de 66 mm et une plage de décentration de 60–72 mm est plus polyvalente qu'une avec une DP de monture de 70 mm et une plage de 64–72 mm — plus la plage recommandée est étroite, plus l'ajustement est de niche.</p>
          
          <p><strong>3. Aucune DP indiquée.</strong> Si une usine n'indique pas la DP sur sa fiche technique, demandez-la. Si elle ne peut pas vous donner la DP de la monture sous 24 heures, ne commandez pas chez cette usine. Je suis sérieux. Toute usine qui fabrique réellement de la lunetterie connaît la DP de monture de chaque référence (SKU) de son catalogue. Si elle ne la connaît pas ou ne peut pas la mesurer, c'est probablement une société de négoce qui revend des montures qu'elle n'a pas conçues.</p>
          
          <p>La règle la plus simple que je donne aux nouveaux acheteurs : pour une ligne de lunettes de soleil à ajustement universel, la DP de la monture doit être de <strong>62–64 mm</strong>. Cela couvre environ 70 % du marché adulte mondial. Si vous ciblez un segment démographique précis — montures femmes étroites, montures hommes surdimensionnées, enfants — ajustez en conséquence. Mais pour votre collection unisexe de base, une DP de monture de 62–64 mm est l'ancre autour de laquelle construire.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Largeur du Pont — La variable d'ajustement cachée</h2>
          
          <p>Si la DP est la mesure dont les acheteurs débattent, la largeur du pont est celle qu'ils ignorent complètement — jusqu'à ce que les retours commencent à affluer.</p>
          
          <p>Le pont est la partie de la monture qui repose sur votre nez. Il supporte 80–90 % du poids de la monture. Sur une monture en acétate de 35 grammes, cela représente environ 30 grammes de pression constante vers le bas sur une bande de peau et de cartilage d'à peine 6 mm de large. Si le pont est mal conçu, même la monture en titane la plus légère devient inconfortable en moins de 20 minutes de port.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Plages standard de largeur de pont</h3>
          
          <p>La largeur du pont est généralement le deuxième chiffre du triplet standard de mesures de monture (par exemple, le « 18 » dans 52□18-145). La plage industrielle s'étend de 14 mm à 24 mm, mais la plupart des montures se répartissent dans ces catégories :</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Largeur du pont</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Utilisation typique</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Marchés</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>14–16 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Montures en métal avec plaquettes de nez réglables, aviateurs, petites montures femmes en acétate</td>
                  <td className="border border-gray-300 px-4 py-2">Asiatique, petites montures femmes (tous marchés)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>17–19 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acétate unisexe universel, la plupart des wayfarers, montures optiques standard</td>
                  <td className="border border-gray-300 px-4 py-2">Mondial — la plage la plus courante pour les montures grand public</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>20–22 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Grandes montures hommes en acétate, montures de mode surdimensionnées, aviateurs sans plaquettes de nez</td>
                  <td className="border border-gray-300 px-4 py-2">Amérique du Nord, Europe du Nord, Moyen-Orient — traits plus marqués</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>23–24 mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Déclarations de mode surdimensionnées, lunettes de soleil type écran</td>
                  <td className="border border-gray-300 px-4 py-2">Mode de niche — à éviter pour la ligne de gros principale sauf demande explicite</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Conception du pont : acétate vs métal vs injection</h3>
          
          <p>La seule mesure du pont ne vous dit pas si une monture ira bien — la <strong>conception du pont</strong> est tout aussi importante. Il existe trois grands types :</p>
          
          <p><strong>Pont selle (acétate moulé).</strong> Une pièce continue d'acétate profilée pour reposer sur le nez. Aspect net, aucune pièce mobile. L'inconvénient : zéro réglage possible. Si la courbe du pont ne correspond pas au nez du client, il n'y a rien à faire. Les ponts selles fonctionnent mieux sur les montures de moins de 16 mm de largeur de pont, où le nez apporte naturellement plus de soutien. Au-delà de 18 mm, un pont selle est un pari — il convient parfaitement à environ 40 % des visages et mal au reste.</p>
          
          <p><strong>Pont en trou de serrure.</strong> Un pont en acétate ou en métal sculpté qui crée une forme de « trou de serrure » — plus large en haut, plus étroit au point de contact. Visuellement distinctif, et la forme sculptée offre plus de points de contact qu'une selle plate, ce qui améliore la répartition du poids. Le design en trou de serrure a été popularisé par les wayfarers Ray-Ban et reste la meilleure option en acétate pour les montures de plus de 18 mm. Il n'est pas réglable, mais la forme profilée compense en partie.</p>
          
          <p><strong>Plaquettes de nez réglables (bras métalliques avec plaquettes en silicone).</strong> C'est ce que je recommande pour 90 % des commandes en gros. Deux bras métalliques indépendants avec des plaquettes souples en silicone ou en PVC qui peuvent être pliées vers l'intérieur, l'extérieur, le haut ou le bas. Cela offre au porteur ou à l'opticien environ 8–10 mm de réglage d'ajustement total — suffisant pour s'adapter aux ponts nasaux, des plus étroits asiatiques aux plus larges européens. Oui, les plaquettes de nez réglables ajoutent 0,30 à 0,50 $ au coût de la monture par rapport à une selle moulée. Oui, elles en valent la peine. À elles seules, la flexibilité d'ajustement réduit les retours d'environ 40 à 60 % par rapport aux montures à pont fixe, d'après ce que rapportent mes clients de longue date.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Le facteur d'ajustement asiatique</h3>
          
          <p>On ne peut pas parler honnêtement de la largeur du pont sans aborder le marché de l'ajustement asiatique. Voici la réalité vue de l'atelier :</p>
          
          <p>Le pont nasal asiatique moyen se situe 2 à 4 mm plus bas sur le visage et sa structure osseuse est 3 à 5 mm plus large que le pont nasal caucasien moyen. Ce n'est pas anecdotique — c'est mesurable et constant sur de larges populations. Les montures conçues pour les visages européens ou américains, avec leurs points de contact nasaux plus hauts et leurs largeurs de pont plus étroites, ne tiendront pas correctement sur la plupart des visages asiatiques. La monture reposera trop haut, les extrémités des branches n'atteindront pas correctement derrière les oreilles, et les verres seront trop près des yeux.</p>
          
          <p>Les montures à ajustement asiatique corrigent cela avec trois changements de conception : (1) un point de contact nasal plus bas sur le devant de la monture, (2) une largeur de pont légèrement plus étroite (15–17 mm au lieu de 17–19 mm), et (3) des plaquettes de nez avec un dégagement vertical plus important (les plaquettes sont positionnées plus bas sous le cercle de la monture). Si 20 % ou plus de vos clients grossistes vendent sur les marchés asiatiques, vous avez besoin d'une référence à ajustement asiatique dans votre ligne. N'essayez pas de faire fonctionner une monture à ajustement européen pour des visages asiatiques — la géométrie ne coopère pas.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Longueur des Branches et Largeur de Monture — Réussir l'ajustement global</h2>
          
          <p>Si la largeur du pont détermine le confort, la longueur des branches et la largeur totale de la monture déterminent si les lunettes de soleil restent sur votre visage.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Longueur des branches : la variable régionale</h3>
          
          <p>La longueur des branches se mesure de la vis de charnière à l'extrémité de la branche, en suivant la courbe derrière l'oreille. Les longueurs industrielles standard vont de 125 mm à 155 mm. Voici ce que je dis à mes clients grossistes :</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Longueur des branches</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Étiquette de taille de monture</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Petite / Jeune</td>
                  <td className="border border-gray-300 px-4 py-2">Enfants, femmes petites, montures femmes asiatiques</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–140 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Petite–Moyenne</td>
                  <td className="border border-gray-300 px-4 py-2">Unisexe asiatique, femmes européennes, marché féminin général</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">140–145 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Moyenne</td>
                  <td className="border border-gray-300 px-4 py-2">Unisexe européen, ajustement universel mondial (défaut le plus sûr)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–150 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Moyenne–Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Hommes nord-américains, grands formats hommes européens</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">150–155 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande / XL</td>
                  <td className="border border-gray-300 px-4 py-2">Grandes tailles spécialisées, tailles grandes & fortes, hommes du Moyen-Orient</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Les erreurs de longueur de branches sont brutales car immédiatement visibles pour le porteur. Une branche trop courte n'atteindra pas l'oreille — la monture se place en avant sur le visage, les verres sont trop près des yeux, et tout semble et ressent faux. Une branche trop longue dépasse l'oreille et la courbe atterrit sur le cou au lieu de derrière l'oreille, ce qui fait glisser la monture vers l'avant au moindre mouvement de tête. Les deux cas sont rédhibitoires pour le client.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Comment spécifier la longueur des branches dans votre commande OEM</h3>
          
          <p>Lorsque vous passez une commande OEM auprès d'une usine chinoise, vous spécifiez la longueur des branches dans le dossier technique ou le bon de commande. Voici les règles que je donne à mes clients :</p>
          
          <p><strong>Pour les montures en acétate :</strong> spécifier une longueur de branches différente est simple — l'usine découpe la branche dans une ébauche d'acétate plus longue. Aucun changement d'outillage requis. Si vous demandez des branches de 145 mm sur une monture qui sort normalement avec du 140 mm, c'est un simple ajustement de découpe. Impact sur le coût : zéro. Cela signifie que vous pouvez commander la même monture en acétate avec deux longueurs de branches pour différents marchés sans frais supplémentaires.</p>
          
          <p><strong>Pour les montures injectées (TR90, polycarbonate, nylon) :</strong> la longueur des branches est fixée par le moule. Changer la longueur des branches nécessite un nouvel insert de moule, qui coûte 200 à 400 $ par insert de branche. Pour une usine qui utilise des moules à 4 cavités, cela représente 800 à 1 600 $ par modèle de monture pour ajouter une deuxième longueur de branches. Ce coût n'a de sens que si vous commandez 3 000 unités ou plus par variante de longueur — en dessous de ce volume, absorbez le coût d'outillage sur la première série de production.</p>
          
          <p><strong>Pour les montures en métal :</strong> la longueur des branches est déterminée par l'ébauche du bras métallique et la matrice qui plie la courbe de l'oreille. Changer la longueur nécessite une nouvelle matrice (100 à 200 $) et parfois des ébauches de bras différentes. Relativement peu coûteux par rapport aux moules d'injection, mais il vaut toujours la peine de confirmer le coût avant de modifier les spécifications.</p>
          
          <p>Ma recommandation pour la plupart des acheteurs en gros : si vous commandez de l'acétate, prenez deux longueurs de branches (140 mm et 148 mm) et répartissez votre commande à 40/60 ou 50/50. Le coût est identique et vous couvrirez 90 % de votre clientèle. Pour les montures injectées, commandez des branches de 145 mm comme défaut universel, sauf si vos données de ventes régionales vous indiquent le contraire.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Largeur totale de la monture — La somme de toutes les parties</h3>
          
          <p>La largeur totale de la monture ne fait pas partie des trois mesures standard, mais c'est le chiffre le plus pratique pour l'ajustement. Elle se calcule ainsi : <strong>(Largeur du verre × 2) + Largeur du pont + environ 3–5 mm pour l'épaisseur du cercle de la monture de chaque côté.</strong></p>
          
          <p>Par exemple : une monture 52□18-145 avec une épaisseur de cercle de 2 mm de chaque côté a une largeur totale d'environ (52 × 2) + 18 + (2 × 2) = 126 mm. C'est l'étendue horizontale totale de la monture, d'une charnière à l'autre.</p>
          
          <p>Voici un guide de tailles approximatif basé sur la largeur totale de la monture :</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Largeur totale de la monture</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Taille</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ajustement typique</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">115–125 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Petite</td>
                  <td className="border border-gray-300 px-4 py-2">Femmes petites, jeunes, visages étroits</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Moyenne</td>
                  <td className="border border-gray-300 px-4 py-2">Adulte unisexe moyen — la taille la plus vendue au monde</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–145 mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Hommes moyens à grands, mode féminine surdimensionnée</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–155 mm</td>
                  <td className="border border-gray-300 px-4 py-2">XL</td>
                  <td className="border border-gray-300 px-4 py-2">Grands hommes, tailles spécialisées</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>La plage de largeur totale de 125–135 mm concentre 60 à 70 % des ventes mondiales de lunettes de soleil. Une monture avec une largeur de verre de 52 mm et un pont de 17–19 mm tombe presque exactement dans cette plage. Si vous lancez une nouvelle ligne en gros sans données de ventes régionales pour guider vos choix de tailles, commencez avec des montures dans la zone de largeur totale de 125–130 mm avec des branches de 145 mm. Cette combinaison convient au plus grand nombre de visages sur le plus de marchés avec le moins de plaintes.</p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Questions Fréquemment Posées</h2>
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
            <h2 className="text-3xl font-bold mb-4">Besoin de spécifications de mesures de monture pour votre marché ?</h2>
            <p className="text-xl mb-6 opacity-90">Dites-moi votre région cible et le profil démographique de vos clients. Je vous recommanderai les spécifications exactes de DP, de largeur de pont, de longueur de branches et de largeur de monture qui maximisent l'ajustement et minimisent les retours — sur la base de 20 ans de données d'usine, pas de conjectures.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Obtenez un Devis Gratuit
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Plus Depuis l'Atelier de l'Usine</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/blog/montures-tr90-acetate-metal" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acétate vs Métal : Guide des Matériaux de Monture</h3>
                <p className="text-gray-600 text-sm">Quel matériau de monture choisir selon l'ajustement, la durabilité et le coût de gros.</p>
              </Link>
              <Link href="/fr/blog/guide-forme-visage-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guide des Formes de Visage pour Lunettes de Soleil</h3>
                <p className="text-gray-600 text-sm">Faites correspondre les mesures de monture aux formes de visage pour un meilleur taux d'écoulement.</p>
              </Link>
              <Link href="/fr/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contactez-Nous</h3>
                <p className="text-gray-600 text-sm">Obtenez un devis pour votre commande personnalisée de lunettes de soleil en gros.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
