import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OEM vs ODM Lunettes de Soleil : Quelle Différence ? Guide Complet',
  description: 'Un propriétaire d\'usine explique les vraies différences entre la fabrication OEM et ODM de lunettes de soleil. Coûts réels, délais et conseils pour choisir le bon modèle pour votre marque.',
  keywords: 'OEM vs ODM lunettes de soleil, fabricant OEM lunettes, ODM lunettes, fabrication personnalisée lunettes, marque propre lunettes, différence OEM ODM',
  alternates: {
    canonical: '/fr/blog/oem-vs-odm',
    languages: {
      'en': '/blog/oem-vs-odm',
      'fr': '/fr/blog/oem-vs-odm',
    },
  },
}

export default function OemVsOdmPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "OEM vs ODM Lunettes de Soleil : Quelle Différence ? Guide Complet",
          "datePublished": "2026-04-20",
          "dateModified": "2026-05-02",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un propriétaire d'usine explique les vraies différences entre la fabrication OEM et ODM de lunettes de soleil — coûts réels, délais et conseils.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/oem-vs-odm" },
          "inLanguage": "fr"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quelle est la différence entre lunettes de soleil OEM et ODM ?",
              "acceptedAnswer": { "@type": "Answer", "text": "OEM (Original Equipment Manufacturer) signifie que l'usine fabrique les lunettes à partir de vos propres designs — vous apportez le plan, ils fournissent la chaîne de production. ODM (Original Design Manufacturer) signifie que l'usine dispose déjà de designs prêts ; vous en choisissez un et y apposez votre logo. OEM = contrôle créatif total mais coût plus élevé. ODM = plus rapide et moins cher mais moins unique." }
            },
            {
              "@type": "Question",
              "name": "Lequel est le moins cher, OEM ou ODM ?",
              "acceptedAnswer": { "@type": "Answer", "text": "L'ODM est moins cher au départ. Comptez 3 à 8 $ par unité avec un MOQ d'environ 100 à 300 pièces — sans frais de moule. L'OEM coûte 5 à 15 $+ par unité, plus 500 à 3 000 $ d'outillage par modèle. Mais attention : les coûts unitaires OEM baissent rapidement en volume. À 5 000+ unités, l'OEM peut revenir moins cher par paire que l'ODM." }
            },
            {
              "@type": "Question",
              "name": "Combien de temps prend la production OEM de lunettes de soleil ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Concrètement ? 45 à 90 jours du design approuvé au produit expédié. Cela se décompose en 15 à 25 jours pour la fabrication des moules, 7 à 14 jours pour l'échantillonnage, et 20 à 45 jours pour la production de masse. L'ODM prend environ la moitié — 20 à 45 jours au total puisque les moules existent déjà." }
            },
            {
              "@type": "Question",
              "name": "Peut-on passer de l'ODM à l'OEM plus tard ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Absolument — et c'est ce que je recommande à la plupart des créateurs de marque débutants. Commencez en ODM, apprenez ce que vos clients achètent vraiment, puis investissez dans des designs OEM personnalisés pour vos best-sellers avérés. Environ 40 % de nos clients de longue date ont suivi exactement ce parcours." }
            },
            {
              "@type": "Question",
              "name": "Quel MOQ faut-il prévoir pour les lunettes OEM et ODM ?",
              "acceptedAnswer": { "@type": "Answer", "text": "ODM : généralement 100 à 300 pièces par modèle. OEM : 300 à 1 000+ par modèle en raison de l'investissement en outillage. Cela dit, les MOQ varient beaucoup d'une usine à l'autre. Nous proposons l'ODM à partir de 50 pièces pour les premières commandes, car nous préférons construire une relation à long terme plutôt que de pressurer une startup sur sa première commande." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fabrication</span>
            <span>20 avril 2026</span>
            <span>•</span>
            <span>12 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            OEM vs ODM Lunettes de Soleil : Quelle Différence ? Guide Complet
          </h1>
          <p className="text-xl text-gray-600">
            Après 20 ans à la tête d&apos;une usine de lunettes de soleil, j&apos;ai eu cette conversation environ 3 000 fois.
            Voici la version honnête — sans jargon, sans discours commercial.
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
            <li><a href="#quest-ce-que-oem" className="text-primary-600 hover:underline">Ce que signifie vraiment OEM (pas ce que dit Google)</a></li>
            <li><a href="#quest-ce-que-odm" className="text-primary-600 hover:underline">Ce que signifie vraiment ODM</a></li>
            <li><a href="#differences-cles" className="text-primary-600 hover:underline">Face à face : les vraies différences</a></li>
            <li><a href="#comparaison-couts" className="text-primary-600 hover:underline">Parlons argent : ce que vous allez réellement dépenser</a></li>
            <li><a href="#comparaison-delais" className="text-primary-600 hover:underline">Délais : combien de temps les choses prennent vraiment</a></li>
            <li><a href="#avantages-inconvenients" className="text-primary-600 hover:underline">Le bon, le mauvais et le coûteux</a></li>
            <li><a href="#lequel-choisir" className="text-primary-600 hover:underline">Lequel est fait pour vous ?</a></li>
            <li><a href="#approche-hybride" className="text-primary-600 hover:underline">Le coup malin : commencer en ODM, passer à l&apos;OEM</a></li>
            <li><a href="#choisir-fabricant" className="text-primary-600 hover:underline">Choisir la bonne usine</a></li>
            <li><a href="#questions" className="text-primary-600 hover:underline">Questions qu&apos;on me pose chaque semaine</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Le mois dernier, un gars d&apos;Austin m&apos;a écrit : « Hé Jacky, c&apos;est quoi la différence entre OEM et ODM ?
            J&apos;ai lu dix articles et je suis encore plus perdu qu&apos;au départ. »
          </p>
          <p>
            Je comprends. La plupart des explications en ligne sont rédigées par des gens qui n&apos;ont jamais mis les pieds
            dans une usine. Ils recopient les définitions les uns sur les autres, ajoutent quelques conseils vagues, et basta.
            Alors voici ma version — de quelqu&apos;un qui est sur le terrain depuis 2006, quand on polissait des montures
            en acétate à la main dans un atelier de la taille d&apos;un garage deux places.
          </p>

          <h2 id="quest-ce-que-oem" className="text-3xl font-bold mt-16 mb-6">Ce que signifie vraiment OEM (pas ce que dit Google)</h2>
          <p>
            OEM signifie Original Equipment Manufacturer (Fabricant d&apos;Équipement d&apos;Origine). Ça sonne bien. En clair :
            <strong>vous concevez, nous fabriquons.</strong>
          </p>
          <p>
            Vous venez nous voir avec votre design de monture — peut-être un fichier CAD, peut-être un modèle 3D,
            parfois littéralement un croquis sur une serviette (oui, c&apos;est arrivé plus d&apos;une fois). Vous spécifiez les
            matériaux, le type de verre, les charnières, la couleur, la finition, tout. Notre boulot, c&apos;est de
            transformer votre vision en produit physique.
          </p>
          <p>
            Le design est le vôtre. Point. On ne peut pas le vendre à quelqu&apos;un d&apos;autre. Ni même le montrer à d&apos;autres
            clients. Il vous appartient.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Ce que vous apportez dans une commande OEM :</h3>
            <ul className="text-blue-800 space-y-1">
              <li>Design de monture (dessins CAD, modèles 3D ou croquis détaillés)</li>
              <li>Spécifications matériaux — quel acétate, quel alliage métallique, quel type de charnière</li>
              <li>Exigences pour les verres — matériau, couleur, traitements, polarisation</li>
              <li>Palette de couleurs et finitions de surface</li>
              <li>Emplacement du logo et détails de branding</li>
              <li>Design du packaging</li>
            </ul>
          </div>

          <p>
            Un exemple concret : l&apos;année dernière, une marque de Copenhague nous a envoyé un design inspiré des
            lunettes de ski des années 70. Monture enveloppante surdimensionnée, verres miroir dégradés, acétate mat.
            Rien de tel n&apos;existait dans le catalogue de qui que ce soit. On a fabriqué des moules sur mesure, trouvé
            un acétate italien spécifique qu&apos;ils voulaient, et produit 2 000 paires. Ça, c&apos;est de l&apos;OEM. Impossible en ODM.
          </p>

          <h2 id="quest-ce-que-odm" className="text-3xl font-bold mt-16 mb-6">Ce que signifie vraiment ODM</h2>
          <p>
            ODM signifie Original Design Manufacturer (Fabricant de Design Original). Traduction :
            <strong>nous concevons, vous y apposez votre marque.</strong>
          </p>
          <p>
            On a déjà des centaines de designs de montures — testés, outillés et prêts à produire. Vous parcourez
            notre catalogue, choisissez les styles qui vous plaisent, et on les personnalise avec votre logo, vos
            couleurs et votre packaging. Le design de base reste le même, mais le branding est entièrement le vôtre.
          </p>
          <p>
            Voyez ça comme acheter une maison versus en construire une de zéro. La maison existe déjà. Vous choisissez
            les couleurs de peinture, le mobilier et la plaque avec votre nom sur la porte. Vous n&apos;avez pas dessiné
            les plans, mais c&apos;est quand même chez vous.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Ce que l&apos;usine fournit en ODM :</h3>
            <ul className="text-green-800 space-y-1">
              <li>Designs de montures prêts à l&apos;emploi (nous avons plus de 400 styles actifs)</li>
              <li>Moules existants — pas de frais d&apos;outillage</li>
              <li>Combinaisons éprouvées de matériaux et de verres</li>
              <li>Personnalisation : votre logo, vos couleurs, votre packaging</li>
              <li>Certaines usines permettent des ajustements mineurs (forme de branche, style de plaquette nasale)</li>
            </ul>
          </div>

          <p>
            Un truc que la plupart des articles ne vous diront pas : <strong>il n&apos;y a rien de mal avec l&apos;ODM.</strong> Certains
            de nos clients les plus prospères — des marques qui font plus de 2 M$ de chiffre annuel — ont commencé
            en ODM pur et l&apos;utilisent encore pour 60-70 % de leur gamme. Les montures sont bonnes. Elles ont fait
            leurs preuves. Elles se vendent.
          </p>

          <h2 id="differences-cles" className="text-3xl font-bold mt-16 mb-6">Face à face : les vraies différences</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Critère</th>
                  <th className="px-6 py-4 text-left">OEM</th>
                  <th className="px-6 py-4 text-left">ODM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Propriété du design</td><td className="px-6 py-4">100 % le vôtre</td><td className="px-6 py-4">Design de l&apos;usine, votre branding</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Personnalisation</td><td className="px-6 py-4">Tout — monture, verre, charnière, finition</td><td className="px-6 py-4">Logo, couleur, teinte du verre, packaging</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Coût initial</td><td className="px-6 py-4">2 000–5 000 $+ par modèle (moules + design)</td><td className="px-6 py-4">0–100 $ par modèle</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Prix unitaire</td><td className="px-6 py-4">5–15 $+</td><td className="px-6 py-4">3–8 $</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">MOQ</td><td className="px-6 py-4">300–1 000+ par modèle</td><td className="px-6 py-4">100–300 par modèle</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Délai</td><td className="px-6 py-4">45–90 jours</td><td className="px-6 py-4">20–45 jours</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Exclusivité</td><td className="px-6 py-4">Personne d&apos;autre n&apos;a vos montures</td><td className="px-6 py-4">D&apos;autres marques pourraient utiliser la même base</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Risque</td><td className="px-6 py-4">Plus élevé — design non testé</td><td className="px-6 py-4">Plus faible — succès de vente prouvé</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Compétences en design requises ?</td><td className="px-6 py-4">Oui (CAD ou designer produit)</td><td className="px-6 py-4">Non</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="comparaison-couts" className="text-3xl font-bold mt-16 mb-6">Parlons argent : ce que vous allez réellement dépenser</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">OEM : l&apos;investissement complet</h3>
          <ul>
            <li><strong>Moule/outillage :</strong> 800–2 500 $. Moule d&apos;injection simple ? 800 $. Moule acétate complexe multi-pièces avec charnière personnalisée ? 2 500 $.</li>
            <li><strong>Affinage du design :</strong> 200–800 $ si notre équipe vous aide à passer du croquis aux spécifications de production.</li>
            <li><strong>Échantillons :</strong> 50–200 $ la paire. Prévoyez 2-3 séries.</li>
            <li><strong>Coût unitaire à 500 pièces :</strong> 6–12 $ la paire.</li>
            <li><strong>Total pour votre premier modèle :</strong> 4 000–10 000 $ tout compris pour 500 paires.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">ODM : le démarrage lean</h3>
          <ul>
            <li><strong>Moule/outillage :</strong> 0 $. Les moules existent déjà.</li>
            <li><strong>Mise en place du logo :</strong> 0–50 $.</li>
            <li><strong>Échantillons :</strong> 20–60 $ la paire.</li>
            <li><strong>Coût unitaire à 200 pièces :</strong> 3,50–7 $ la paire.</li>
            <li><strong>Total pour votre premier modèle :</strong> 800–1 800 $ tout compris pour 200 paires.</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Les coûts cachés que personne ne mentionne</h3>
            <p className="text-amber-800">
              Expédition, droits de douane (2-5 % pour les lunettes entrant aux États-Unis et en UE), inspection
              qualité par un tiers (200–400 $ par inspection), et packaging — ces postes ajoutent 15-25 % à votre
              coût unitaire. J&apos;ai vu trop de primo-acheteurs oublier les droits de douane et avoir une mauvaise
              surprise au port. Intégrez-les dès le jour un.
            </p>
          </div>

          <h2 id="comparaison-delais" className="text-3xl font-bold mt-16 mb-6">Délais : combien de temps les choses prennent vraiment</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">OEM : 45–90 jours (réaliste)</h3>
          <ol>
            <li><strong>Finalisation du design (5–10 jours) :</strong> Allers-retours sur les spécifications.</li>
            <li><strong>Fabrication du moule (15–25 jours) :</strong> C&apos;est la partie qu&apos;on ne peut pas brusquer.</li>
            <li><strong>Premiers échantillons (7–14 jours) :</strong> On fabrique 3-5 paires d&apos;échantillons.</li>
            <li><strong>Révisions (5–14 jours) :</strong> Normal. Prévoyez au moins un tour de révision.</li>
            <li><strong>Production de masse (20–45 jours) :</strong> Dépend de la quantité.</li>
            <li><strong>CQ et expédition (5–10 jours) :</strong> Inspection, emballage et mise en route.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-8 mb-4">ODM : 20–45 jours (réaliste)</h3>
          <ol>
            <li><strong>Choisissez vos modèles et envoyez votre brief (2–5 jours)</strong></li>
            <li><strong>Échantillons avec votre marque (5–10 jours)</strong></li>
            <li><strong>Validation (3–5 jours)</strong></li>
            <li><strong>Production (15–25 jours)</strong></li>
            <li><strong>CQ et expédition (5–10 jours)</strong></li>
          </ol>

          <h2 id="avantages-inconvenients" className="text-3xl font-bold mt-16 mb-6">Le bon, le mauvais et le coûteux</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">OEM — Les avantages ✅</h3>
          <ul>
            <li><strong>Les montures sont à vous et à vous seul.</strong></li>
            <li><strong>Contrôle qualité total.</strong> Charnières japonaises ? Verres qualité Zeiss ? Acétate italien Mazzucchelli ? C&apos;est fait.</li>
            <li><strong>Vous pouvez breveter vos designs.</strong></li>
            <li><strong>Pouvoir de tarification premium.</strong></li>
            <li><strong>Les marges s&apos;améliorent avec le volume.</strong></li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">OEM — Les inconvénients ❌</h3>
          <ul>
            <li><strong>Votre portefeuille le sent.</strong></li>
            <li><strong>Lent.</strong> Deux à trois mois minimum.</li>
            <li><strong>Le risque design est réel.</strong></li>
            <li><strong>MOQ plus élevés.</strong></li>
            <li><strong>Compétences en design requises.</strong></li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">ODM — Les avantages ✅</h3>
          <ul>
            <li><strong>Barrière d&apos;entrée basse.</strong> Vous pouvez lancer une marque pour moins de 2 000 $.</li>
            <li><strong>Rapidité.</strong> Produit en main en 3-6 semaines.</li>
            <li><strong>Risque réduit.</strong> Ces designs se vendent déjà.</li>
            <li><strong>Petits MOQ.</strong></li>
            <li><strong>Pas besoin d&apos;expérience en design.</strong></li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">ODM — Les contreparties ❌</h3>
          <ul>
            <li><strong>Vous ne serez pas le seul.</strong></li>
            <li><strong>Personnalisation limitée.</strong></li>
            <li><strong>Pas de protection PI.</strong></li>
            <li><strong>Plus difficile de créer une perception « luxe ».</strong></li>
          </ul>

          <h2 id="lequel-choisir" className="text-3xl font-bold mt-16 mb-6">Lequel est fait pour vous ?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Choisissez l&apos;OEM si :</h3>
          <ul>
            <li>Vous avez un design spécifique qui n&apos;existe dans aucun catalogue</li>
            <li>Vous pouvez investir 5 000 $+ par modèle sans stress</li>
            <li>Vous êtes prêt à attendre 2-3 mois</li>
            <li>Vous construisez une marque où « personne d&apos;autre n&apos;a ces lunettes » fait partie du discours</li>
            <li>Vous avez des compétences en design</li>
            <li>Vous êtes confiant de pouvoir vendre 500+ unités par modèle</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Choisissez l&apos;ODM si :</h3>
          <ul>
            <li>C&apos;est votre première fois — vous n&apos;avez jamais vendu de lunettes</li>
            <li>Votre budget total est inférieur à 5 000 $</li>
            <li>Vous avez besoin du produit en 6 semaines ou moins</li>
            <li>Vous voulez tester 3-5 styles pour voir ce que votre public achète vraiment</li>
            <li>Vous ne distinguez pas le CAD du CAT</li>
            <li>Vous misez sur l&apos;histoire de marque et le marketing — pas sur le design de monture</li>
          </ul>

          <h2 id="approche-hybride" className="text-3xl font-bold mt-16 mb-6">Le coup malin : commencer en ODM, passer à l&apos;OEM</h2>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">La stratégie en trois phases :</h3>
            <ol className="text-primary-800 space-y-3">
              <li>
                <strong>Phase 1 — Lancement en ODM (Mois 1-6) :</strong> Choisissez 3-5 styles éprouvés de notre
                catalogue. Ajoutez votre branding. Arrivez vite sur le marché. Votre mission : apprendre ce que
                vos clients veulent vraiment.
              </li>
              <li>
                <strong>Phase 2 — Analyse et planification (Mois 6-12) :</strong> Maintenant vous avez des données.
                Utilisez-les pour concevoir votre premier modèle OEM — une version améliorée de ce qui fonctionne déjà.
              </li>
              <li>
                <strong>Phase 3 — Passage au sur-mesure (Année 2+) :</strong> Vos designs OEM sont basés sur de vrais
                retours clients, pas sur des suppositions. Vous maintenez vos best-sellers ODM tout en les remplaçant
                progressivement par des exclusifs OEM.
              </li>
            </ol>
          </div>

          <h2 id="choisir-fabricant" className="text-3xl font-bold mt-16 mb-6">Choisir la bonne usine</h2>
          <p>
            Que vous optiez pour l&apos;OEM ou l&apos;ODM, votre fabricant est votre partenaire le plus important.
          </p>
          <ul>
            <li><strong>Spécialisation :</strong> L&apos;usine se consacre-t-elle exclusivement aux lunettes de soleil ?</li>
            <li><strong>Certifications :</strong> CE, <a href="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses" target="_blank" rel="noopener" className="text-primary-600 hover:underline">conformité FDA</a>, UV400, ISO 9001.</li>
            <li><strong>Réactivité :</strong> Si une usine met plus de 48h à répondre à votre première demande, elle mettra une semaine en cas de problème de production.</li>
            <li><strong>Échantillons :</strong> Ne passez jamais de commande de production sans avoir vu et touché un échantillon.</li>
            <li><strong>Flexibilité MOQ :</strong> Les meilleures usines investissent dans les relations, pas seulement dans les commandes.</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Encore des doutes ? Parlons-en.</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Je fais des appels de 15 minutes avec les nouveaux créateurs de marque chaque semaine. Sans
              discours commercial — juste des conseils honnêtes sur ce qui convient à votre situation.
            </p>
            <Link href="/fr/contact" className="btn-primary">
              Réservez un Appel Gratuit avec Jacky
            </Link>
          </div>

          <h2 id="questions" className="text-3xl font-bold mt-16 mb-6">Questions qu&apos;on me pose chaque semaine</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quelle est la différence entre lunettes OEM et ODM ?</h3>
              <p className="text-gray-600">
                Version courte : OEM = vous concevez, nous fabriquons. ODM = nous concevons, vous y mettez votre marque.
                L&apos;OEM vous donne un contrôle créatif total mais coûte plus cher et prend plus de temps. L&apos;ODM vous
                met sur le marché rapidement et à moindre coût.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Lequel est le moins cher ?</h3>
              <p className="text-gray-600">
                L&apos;ODM. Comptez 3–8 $ par unité sans frais de moule contre 5–15 $+ par unité plus 500–3 000 $ d&apos;outillage
                pour l&apos;OEM. Mais à gros volumes (5 000+), l&apos;OEM peut revenir moins cher.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Combien de temps prend la production OEM ?</h3>
              <p className="text-gray-600">
                45–90 jours du design approuvé au produit expédié. La fabrication du moule seule prend 15–25 jours.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Peut-on passer de l&apos;ODM à l&apos;OEM ?</h3>
              <p className="text-gray-600">
                Absolument — et c&apos;est ce que je recommande. Commencez en ODM, apprenez ce qui se vend, puis investissez
                dans des designs OEM personnalisés. Environ 40 % de nos clients de longue date ont suivi ce parcours.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quel MOQ prévoir ?</h3>
              <p className="text-gray-600">
                ODM : 100–300 pièces par modèle. Nous commençons à 50 pour les premières commandes. OEM : 300–1 000+
                par modèle en raison de l&apos;investissement en outillage.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Depuis l&apos;Atelier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fr/blog/creer-marque-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Comment Créer Votre Marque de Lunettes de Soleil</h3>
                <p className="text-gray-600 text-sm">Le guide complet — de l&apos;idée à la première vente.</p>
              </Link>
              <Link href="/fr/blog/trouver-fabricant-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Comment Trouver un Fabricant de Lunettes Fiable</h3>
                <p className="text-gray-600 text-sm">10 critères que je vérifierais si j&apos;étais de l&apos;autre côté de la table.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
