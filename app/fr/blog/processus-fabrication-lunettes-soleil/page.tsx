import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Du Croquis à l\'Échantillon : Comment les Lunettes de Soleil Sur Mesure sont Fabriquées en 4 Semaines',
  description: 'Un propriétaire d\'usine vous guide à travers le processus complet de fabrication de lunettes de soleil sur mesure — révision du design, fabrication de moules, approvisionnement, assemblage, contrôle qualité et expédition. Délais réels, coûts réels.',
  keywords: ['fabrication lunettes soleil', 'processus usine lunettes', 'lunettes OEM délais', 'moules lunettes soleil', 'production acétate lunettes', 'développement échantillons lunettes', 'usine lunettes Chine', 'lunettes soleil sur mesure fabrication'],
  alternates: {
    canonical: '/fr/blog/processus-fabrication-lunettes-soleil',
  },
};

const takeaways = [
  'Un cycle complet de production de lunettes de soleil sur mesure — de la réception de votre croquis à l\'expédition des échantillons finis — prend 4 semaines dans une usine chinoise bien organisée, chaque semaine étant dédiée à une phase distincte : révision du design et fabrication des moules, approvisionnement en matériaux et premiers échantillons, assemblage et contrôle qualité, puis finition et préparation à l\'expédition',
  'Les coûts de moule pour les montures en acétate sur mesure varient de 300 à 800 $ par moule selon la complexité — c\'est le plus gros coût initial dans la fabrication OEM de lunettes, et sauter la vérification qualité du moule entraîne des montures qui se déforment ou se fissurent à la charnière (la défaillance n°1 des commandes personnalisées)',
  'L\'approvisionnement en matériaux est là où les importateurs débutants perdent 1–2 semaines : les feuilles d\'acétate prennent 5–7 jours du fournisseur, les composants métalliques nécessitent des fournisseurs séparés, et la correspondance des couleurs sans référence Pantone ajoute au moins 3 jours supplémentaires — expédiez toujours un échantillon physique de couleur avec votre dossier de conception',
  'La phase d\'assemblage (Semaine 3) implique 12–15 points de contrôle qualité distincts par paire — pression d\'insertion des verres, tension des branches, alignement des charnières, couple de serrage des vis et symétrie de la monture sont tous mesurés avec des jauges, pas à l\'œil — et toute paire qui échoue à un contrôle est renvoyée en retouche ou rebut',
  'Le contrôle qualité final en Semaine 4 n\'est pas une, mais trois inspections : l\'équipe QC interne de l\'usine, un contrôle ponctuel du superviseur de production, et (si réservée) une inspection tierce avant l\'emballage — la différence entre un taux de défauts de 3% et 0,5% est simplement le nombre de contrôles QC que vous payez',
  'L\'expédition depuis les usines chinoises vers les marchés occidentaux prend 3 à 30 jours selon la méthode : fret aérien (3–7 jours, 2–4 $/kg), fret maritime (20–35 jours, 0,30–0,80 $/kg) ou fret ferroviaire vers l\'Europe (12–18 jours, 1–1,50 $/kg) — et la plus grande erreur d\'expédition est de ne pas compter le temps de dédouanement',
];

const quickStats = [
  { label: 'Coût moule acétate (par moule)', value: '300–800 $' },
  { label: 'Points de contrôle par paire', value: '12–15' },
  { label: 'Quantité minimum commande OEM', value: '300–500 unités' },
  { label: 'Fret aérien vers USA/UE', value: '3–7 jours' },
  { label: 'Fret maritime vers USA/UE', value: '20–35 jours' },
];

const faqs = [
  {
    question: 'Combien de temps faut-il vraiment pour fabriquer des lunettes de soleil sur mesure à partir de zéro ?',
    answer: 'Chez EyeView, le délai standard est de 4 semaines du croquis à l\'échantillon fini. Semaine 1 : révision du design et fabrication des moules. Semaine 2 : approvisionnement en matériaux, correspondance des couleurs et premiers échantillons d\'assemblage. Semaine 3 : assemblage complet avec tous les contrôles qualité. Semaine 4 : finition, contrôle final, emballage et préparation à l\'expédition. La production en série ajoute 3–5 semaines supplémentaires après approbation de l\'échantillon. Les retards viennent le plus souvent de deux choses : l\'acheteur ne fournit pas de fichiers CAD clairs ni de références couleur, et le fournisseur de feuilles d\'acétate prend du retard — les deux sont évitables avec une bonne communication.',
  },
  {
    question: 'Quelle est la quantité minimum de commande pour des lunettes de soleil OEM sur mesure ?',
    answer: 'Pour les moules personnalisés (votre propre design de monture), la quantité minimum est généralement de 300–500 unités par modèle et couleur. À 500 unités × 3 couleurs, cela fait 1 500 paires par modèle. Les frais de moule sont séparés — 300 à 800 $ par moule selon la complexité. Une monture en acétate typique nécessite 2 moules (façade + branches). Pour les montures de stock avec marquage personnalisé (impression du logo, emballage seulement), la quantité minimum descend à 100–200 unités par modèle. La plupart des nouveaux créateurs de marque commencent avec 3–5 modèles à 300 unités chacun, soit environ 900–1 500 paires au total.',
  },
  {
    question: 'Quels matériaux puis-je choisir pour les montures de lunettes de soleil sur mesure ?',
    answer: 'Les trois principaux matériaux sont l\'acétate, le TR90 et le métal (acier inoxydable ou titane). L\'acétate est le choix premium — poli à la main, couleurs riches, sensation plus lourde. Le TR90 est léger, flexible et excellent pour les lignes sport ou enfants. Les montures métalliques conviennent bien aux designs minimalistes et aviateur. Chaque matériau a un processus de moule différent : acétate 5–7 jours, TR90 plus rapide (3–5 jours), et le métal nécessite des matrices d\'emboutissage plutôt que des moules d\'injection. Nous travaillons également avec du bio-acétate, du nylon recyclé et du composite bois pour les lignes éco-responsables.',
  },
  {
    question: 'Comment fonctionne le contrôle qualité pendant la production de lunettes de soleil sur mesure ?',
    answer: 'Le QC fonctionne en trois niveaux. Premièrement, le QC en ligne pendant la production : chaque paire passe par 12–15 points de contrôle — pression d\'insertion des verres avec jauge de force, tension des branches aux angles d\'ouverture, vis de charnière avec clé dynamométrique, symétrie de la monture sur gabarits d\'alignement. Deuxièmement, le QC de fin de ligne : une équipe QC dédiée inspecte 100% des paires finies sous éclairage standardisé. Troisièmement, l\'échantillonnage AQL : si vous avez réservé une inspection tierce (SGS, Bureau Veritas), ils prélèvent un échantillon statistique basé sur votre Niveau de Qualité Acceptable — typiquement AQL 2,5 pour les défauts majeurs et AQL 4,0 pour les défauts mineurs.',
  },
  {
    question: 'Quelles sont les options d\'expédition pour les commandes de lunettes de soleil sur mesure depuis la Chine ?',
    answer: 'Trois méthodes principales. Fret aérien (FedEx/DHL/UPS) : 3–7 jours porte-à-porte, 2–4 $ par kg, idéal pour les échantillons et petites commandes. Fret maritime (LCL ou FCL) : 20–35 jours port-à-port plus 3–5 jours pour la douane, 0,30–0,80 $ par kg, idéal pour les grosses commandes. Fret ferroviaire vers l\'Europe : 12–18 jours, 1–1,50 $ par kg, une option intermédiaire. Pour une première commande typique de 500 paires (environ 35–40 kg emballées), le fret aérien est le plus pratique. Pour plus de 3 000 paires, le fret maritime économise 500–800 $. Nous gérons tous les documents d\'expédition.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'processus-fabrication-lunettes-soleil';

export default function ProcessusFabricationLunettesSoleil() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Accueil', href: '/fr/' },
          { name: 'Blog', href: '/fr/blog/' },
          { name: 'Du Croquis à l\'Échantillon' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Du Croquis à l'Échantillon : Comment les Lunettes de Soleil Sur Mesure sont Fabriquées en 4 Semaines",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un propriétaire d'usine vous guide à travers le processus complet de fabrication de lunettes de soleil sur mesure. Délais réels, coûts réels.",
          "inLanguage": "fr",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/fr/blog/processus-fabrication-lunettes-soleil" }
        })}} />

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

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Savoir-Faire d\'Usine</span>
            <span>11 août 2026</span>
            <span>•</span>
            <span>9 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Du Croquis à l&apos;Échantillon : Comment les Lunettes de Soleil Sur Mesure sont Fabriquées en 4 Semaines
          </h1>
          <p className="text-xl text-gray-600">
            Je fabrique des lunettes de soleil depuis 2006, et la question qu&apos;on me pose le plus souvent est : &quot;Que se passe-t-il exactement après que je vous ai envoyé mon design ?&quot; Voici l&apos;explication honnête — chaque étape, chaque contrôle et chaque retard possible.
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
          <h2 className="font-bold mb-4">Table des Matières</h2>
          <ul className="space-y-2">
            <li><a href="#week-1" className="text-primary-600 hover:underline">Semaine 1 : Révision du Design et Fabrication des Moules</a></li>
            <li><a href="#week-2" className="text-primary-600 hover:underline">Semaine 2 : Approvisionnement et Premiers Échantillons</a></li>
            <li><a href="#week-3" className="text-primary-600 hover:underline">Semaine 3 : Assemblage et Contrôle Qualité</a></li>
            <li><a href="#week-4" className="text-primary-600 hover:underline">Semaine 4 : Finition, Emballage et Préparation à l&apos;Expédition</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions Fréquentes</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <KeyTakeaways items={takeaways} title="Points Clés" />
          <QuickStats stats={quickStats} title="Faits Rapides" />

          {/* Semaine 1 */}
          <h2 id="week-1" className="text-3xl font-bold mt-16 mb-6">Semaine 1 : Révision du Design et Fabrication des Moules</h2>
          <p>Le chronomètre démarre dès que votre email atterrit dans ma boîte de réception. Vous m&apos;envoyez un croquis — parfois c&apos;est un fichier CAD professionnel d&apos;un designer industriel, parfois c&apos;est une photo d&apos;une monture qui vous plaît avec &quot;faites-la comme ça mais plus large et en écaille&quot; griffonné sur une serviette. Les deux sont faisables. L&apos;un prend juste plus de temps.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ce Que Nous Examinons Lors de la Révision du Design</h3>
          <p>Avant que quoi que ce soit de physique ne se produise, mon ingénieur en chef passe 2–3 heures sur votre design. Il vérifie six choses :</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Ratio largeur de monture / largeur de verre.</strong> Si votre monture fait 140 mm de large mais que vos verres font 60 mm, les proportions seront mauvaises. Nous ajustons cela avant la fabrication du moule.</li>
            <li><strong>Angle branche-façade.</strong> Les branches ont besoin d&apos;un angle d&apos;ouverture spécifique (généralement 8–10°) pour que la monture repose correctement sur le visage.</li>
            <li><strong>Emplacement et type de charnière.</strong> Charnière à ressort, à barillet ou cachée ? Chacune nécessite une cavité de moule différente. Les charnières à ressort ajoutent 0,15–0,30 $ par paire mais réduisent la casse d&apos;environ 40 %.</li>
            <li><strong>Design du pont.</strong> Un pont en trou de serrure repose différemment d&apos;un pont en selle. Le moule doit tenir compte de l&apos;emplacement des plaquettes de nez.</li>
            <li><strong>Profondeur de la rainure du verre.</strong> Les montures en acétate nécessitent une rainure de 1,0–1,2 mm pour l&apos;insertion du verre. Trop peu profonde et le verre saute. Trop profonde et le bord de la monture se fissure.</li>
            <li><strong>Spécification du matériau.</strong> Est-ce de l&apos;acétate, du TR90, du métal ou une combinaison ? Des matériaux différents signifient des ateliers de moule et des coûts différents.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Le Processus de Fabrication des Moules</h3>
          <p>Pour les montures en acétate, nous utilisons des moules en acier usinés CNC. Un moule pour la façade et deux pour les branches (gauche et droite). Chaque moule coûte 300–800 $ selon la complexité. Les moules Wayfarer simples sont dans la fourchette basse. Les montures œil-de-chat surdimensionnées avec courbure complexe sont dans la fourchette haute.</p>
          <p>La fabrication du moule elle-même prend <strong>4–5 jours ouvrés</strong>. L&apos;atelier CNC fraise la cavité négative dans un bloc d&apos;acier, polit la surface de la cavité (c&apos;est ce qui donne aux montures en acétate leur finition brillante directement du moule) et nous effectuons un test de pressage pour vérifier les bavures, les marques d&apos;enfoncement et la consistance de l&apos;épaisseur.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>⚠️ Erreur Courante :</strong> J&apos;ai eu des acheteurs qui m&apos;ont envoyé un rendu 3D magnifique à l&apos;écran mais physiquement impossible à mouler. L&apos;acétate ne se plie pas en courbes impossibles. Si votre fichier CAD a une branche qui se courbe à 90° avec 2 mm d&apos;épaisseur, elle va se casser à la courbure. <strong>Fournissez toujours une vue de profil dans votre soumission CAD.</strong></p>
          <p>D&apos;ici le vendredi de la Semaine 1, vos moules sont prêts. Nous avons une monture de test en acétate blanc brut — pas encore de couleur, pas de polissage, juste la forme de base. Je prends des photos sous cinq angles et je vous les envoie pour approbation. C&apos;est le premier moment &quot;wow&quot; pour la plupart des nouveaux créateurs de marque.</p>

          {/* Semaine 2 */}
          <h2 id="week-2" className="text-3xl font-bold mt-16 mb-6">Semaine 2 : Approvisionnement en Matériaux et Premiers Échantillons</h2>
          <p>La Semaine 2 concerne les matériaux et la couleur. C&apos;est la phase où soit tout se passe bien, soit chaque jour devient un jeu de &quot;où est ma livraison ?&quot;</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Comment Nous Approvisionnons les Feuilles d&apos;Acétate</h3>
          <p>Nous ne fabriquons pas les feuilles d&apos;acétate en interne. Personne ne le fait — la fabrication de feuilles d&apos;acétate est une industrie distincte. Les principaux fournisseurs sont Mazzucchelli (Italie, premium), Daicel (Japon, milieu à premium) et plusieurs fabricants chinois (provinces du Jiangsu et du Zhejiang, bon rapport qualité-prix). Le délai va de <strong>retrait le jour même pour les couleurs de stock</strong> à <strong>5–7 jours pour les combinaisons de couleurs laminées sur mesure</strong>.</p>
          <p>La correspondance de couleur personnalisée est la principale source de retards. Si vous voulez &quot;écaille foncée avec une pointe d&apos;ambre&quot;, j&apos;ai besoin d&apos;une référence physique — un code Pantone, un échantillon de tissu ou une monture existante. Sans référence, comptez au moins 3 jours supplémentaires d&apos;allers-retours.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>💡 Conseil Pro :</strong> Expédiez un échantillon physique de couleur avec votre dossier de conception. Peu importe si c&apos;est un nuancier Pantone, un morceau découpé d&apos;une vieille monture ou une carte peinte. Tout ce qui est physique bat n&apos;importe quel code hexadécimal — les couleurs d&apos;écran mentent. J&apos;ai perdu plus de temps sur la correspondance des couleurs à cause de moniteurs non calibrés que sur tout autre problème en 15 ans.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Composants Métalliques et Quincaillerie</h3>
          <p>Les charnières, vis, plaquettes de nez et noyaux de branche proviennent de fournisseurs de composants métalliques distincts — généralement à Dongguan ou Wenzhou. Les charnières à barillet standard sont en stock et expédiées le jour même. Les charnières personnalisées (avec votre logo gravé au laser) ajoutent 3–5 jours et des frais d&apos;outillage de 100–200 $.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Premiers Échantillons d&apos;Assemblage</h3>
          <p>D&apos;ici jeudi ou vendredi de la Semaine 2, les feuilles d&apos;acétate sont arrivées, les moules fonctionnent en qualité de production et nous produisons vos premiers échantillons d&apos;assemblage. Ce sont <strong>5–10 paires</strong> dans vos couleurs choisies, entièrement assemblées avec verres, charnières et vis. Elles ne sont pas encore polies au standard final — cela se fait en Semaine 4 — mais elles vous donnent une sensation complète de la monture : poids, proportions, tension des branches et apparence des couleurs sous lumière naturelle.</p>

          {/* Semaine 3 */}
          <h2 id="week-3" className="text-3xl font-bold mt-16 mb-6">Semaine 3 : Assemblage et Contrôle Qualité</h2>
          <p>La Semaine 3, c&apos;est quand l&apos;usine s&apos;anime. C&apos;est la phase d&apos;assemblage et elle implique plus de contrôles que la plupart des acheteurs ne l&apos;imaginent. Une seule paire de lunettes en acétate passe par <strong>12 à 15 mains</strong> pendant l&apos;assemblage, chacune effectuant une tâche spécifique et vérifiant le travail de la personne précédente.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Découpe et Insertion des Verres</h3>
          <p>Les verres sont découpés sur une meuleuse CNC — pas à la main. La machine lit les dimensions de la rainure de la monture depuis le fichier CAD et découpe chaque verre avec une tolérance de 0,1 mm. Un opérateur charge et décharge la machine, mais la découpe est automatisée. Après la découpe, nous chanfreinons le bord du verre (un biseau à 45°) pour qu&apos;il glisse dans la rainure sans s&apos;écailler.</p>
          <p>L&apos;insertion des verres dans les montures en acétate nécessite de la chaleur. La façade de la monture est chauffée à environ 60 °C pour ramollir l&apos;acétate juste assez pour que le verre s&apos;insère. Trop froid et le verre raye la rainure. Trop chaud et la monture se déforme. Nos techniciens d&apos;insertion font cela depuis 8–15 ans — ils connaissent la température exacte pour chaque formulation d&apos;acétate.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Les Points de Contrôle Qualité (12–15 par Paire)</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-6 text-gray-700">
            <li><strong>Contrôle visuel de la monture</strong> — rayures, bulles, marques sur la surface avant</li>
            <li><strong>Contrôle visuel des verres</strong> — rayures, uniformité du revêtement, particules de poussière</li>
            <li><strong>Pression d&apos;insertion du verre</strong> — mesurée avec une jauge de force, plage cible 8–15 N</li>
            <li><strong>Tension d&apos;ouverture des branches</strong> — les deux branches doivent s&apos;ouvrir avec une résistance égale</li>
            <li><strong>Fermeture des branches</strong> — les deux branches doivent se fermer complètement à plat contre la façade</li>
            <li><strong>Alignement des charnières</strong> — vérifié sur gabarit ; les deux charnières à exactement la même hauteur</li>
            <li><strong>Couple de serrage des vis</strong> — chaque vis serrée à 0,3–0,5 N·m, vérifié avec une clé dynamométrique</li>
            <li><strong>Symétrie de la monture</strong> — mesurée sur gabarit d&apos;alignement avec marquages de référence</li>
            <li><strong>Alignement du pont</strong> — vérifié par rapport aux spécifications CAD</li>
            <li><strong>Fixation des plaquettes de nez</strong> (montures métalliques) — bras symétriques, plaquettes fermement fixées</li>
            <li><strong>Test de transmission UV</strong> — chaque lot échantillonné avec spectromètre UV ; doit bloquer 99 %+ des UV</li>
            <li><strong>Vérification de l&apos;axe de polarisation</strong> (le cas échéant) — orientation correcte de l&apos;axe</li>
            <li><strong>Test de résistance à la sueur</strong> (échantillonné) — 24 h dans une solution de sueur artificielle, vérifier la décoloration</li>
            <li><strong>Test de chute</strong> (échantillonné) — chute de 1,5 m sur béton, la monture doit survivre sans fissure</li>
            <li><strong>Inspection finale générale</strong> — scan de 20 secondes sous éclairage 1000 lux</li>
          </ol>
          <p>Les paires qui échouent à un contrôle reçoivent une étiquette rouge et sont acheminées vers le poste de retouche. Si un poste produit plus de 5 % de défaillances par jour, le superviseur arrête la ligne et enquête — généralement un problème de calibrage machine ou un lot défectueux de composants.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>🔧 Dans l&apos;Usine :</strong> La défaillance QC la plus courante sur les commandes personnalisées est <strong>l&apos;asymétrie de tension des branches</strong>. Une branche s&apos;ouvre trop facilement, l&apos;autre trop difficilement. Cela arrive parce que le point d&apos;insertion de la charnière dans la cavité du moule est légèrement décalé — d&apos;à peine 0,2 mm. Nous le détectons aux contrôles 4 et 5, mais cela signifie réusiner cette cavité de moule. Voilà pourquoi la révision du moule en Semaine 1 est si importante.</p>
          <p>À la fin de la Semaine 3, toutes les paires de votre commande d&apos;échantillons sont entièrement assemblées et ont passé le QC interne. Ce sont des lunettes de soleil complètes — mais elles ne ressemblent pas encore à un produit de vente au détail. Les montures ont besoin du polissage final, et rien n&apos;est emballé.</p>

          {/* Semaine 4 */}
          <h2 id="week-4" className="text-3xl font-bold mt-16 mb-6">Semaine 4 : Finition, Emballage et Préparation à l&apos;Expédition</h2>
          <p>La Semaine 4 transforme la production d&apos;usine en produit de marque. C&apos;est là que les montures sont polies à un fini miroir, les verres reçoivent un nettoyage final, votre logo est appliqué et tout est emballé pour l&apos;expédition.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Polissage et Finition des Montures</h3>
          <p>Le polissage de l&apos;acétate est un processus en 3 étapes : d&apos;abord, un polissage grossier avec un disque en coton et un composé de pierre ponce pour éliminer les lignes de moule. Ensuite, un polissage moyen avec un disque plus doux et un composé plus fin. Enfin, un polissage brillant — c&apos;est là que vient l&apos;effet &quot;mouillé&quot;. Chaque paire reçoit <strong>4–6 minutes de polissage total</strong>, à la main sur une polisseuse d&apos;établi.</p>
          <p>Le TR90 et le métal sautent l&apos;étape de polissage mais reçoivent un traitement différent. Le TR90 a une finition mate par défaut. Le métal reçoit un placage électrolytique — or, argent, gunmetal, or rose — un processus séparé qui ajoute 1–2 jours.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Application du Logo</h3>
          <p>Votre logo de marque est appliqué à cette étape. Les options incluent :</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Marquage à chaud</strong> — feuille métallique pressée dans la branche ou le verre. 0,05–0,15 $ par marquage.</li>
            <li><strong>Gravure laser</strong> — brûle le logo dans la surface. Permanent et précis. 0,10–0,25 $ par gravure.</li>
            <li><strong>Tampographie</strong> — encre transférée via tampon en silicone. 0,08–0,20 $ par impression.</li>
            <li><strong>Plaque métallique rivetée</strong> — petite plaque avec votre logo sur la branche. Sensation premium. 0,30–0,80 $ par plaque.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Contrôle Qualité Final Avant Emballage</h3>
          <p>Avant que quoi que ce soit n&apos;entre dans une boîte, chaque paire reçoit une inspection finale. Différente du QC en ligne de la Semaine 3 — c&apos;est une vérification indépendante réussite/échec par un inspecteur QC senior qui n&apos;a pas participé à la production de ces paires spécifiques.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Expédition et Logistique</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Méthode</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Délai</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Coût</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 p-3 font-medium">Fret aérien (DHL/UPS/FedEx)</td><td className="border border-gray-200 p-3">3–7 jours</td><td className="border border-gray-200 p-3">2–4 $/kg</td><td className="border border-gray-200 p-3 text-sm">Échantillons et commandes &lt;50 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Fret ferroviaire (vers Europe)</td><td className="border border-gray-200 p-3">12–18 jours</td><td className="border border-gray-200 p-3">1–1,50 $/kg</td><td className="border border-gray-200 p-3 text-sm">Commandes moyennes UE</td></tr>
                <tr><td className="border border-gray-200 p-3 font-medium">Fret maritime LCL</td><td className="border border-gray-200 p-3">20–35 jours</td><td className="border border-gray-200 p-3">0,30–0,80 $/kg</td><td className="border border-gray-200 p-3 text-sm">Commandes 50–500 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Fret maritime FCL (20 pieds)</td><td className="border border-gray-200 p-3">20–35 jours</td><td className="border border-gray-200 p-3">1 500–3 000 $/conteneur</td><td className="border border-gray-200 p-3 text-sm">Commandes 2 000 kg+</td></tr>
              </tbody>
            </table>
          </div>
          <p>Et voilà. Quatre semaines. Du croquis au produit expédié. Ça paraît rapide quand je l&apos;écris comme ça — et honnêtement, c&apos;est rapide. La raison pour laquelle nous pouvons le faire, c&apos;est que nous exécutons ce processus depuis 2006. Les moules sont découpés par le même atelier CNC avec lequel nous travaillons depuis 12 ans. L&apos;acétate vient de fournisseurs avec lesquels nous avons des contrats trimestriels. Quand tout est en interne et que chacun connaît son travail, 4 semaines, ce n&apos;est pas une urgence — c&apos;est simplement le délai standard.</p>

          {/* FAQ */}
          <section className="mb-12">
            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-8">Questions Fréquentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-700 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Vous Avez un Croquis ? Transformons-le en Lunettes de Soleil</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Envoyez-nous votre design — fichier CAD, photo ou croquis sur serviette — et vous aurez des montures d&apos;échantillon en main sous 4 semaines. Acétate, TR90, métal, bio-matériaux. OEM complet avec votre marque.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/fr/contact/" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
                Lancez Votre Projet
              </Link>
              <Link href="/fr/produits/" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-colors border-2 border-primary-400">
                Voir les Modèles Existants
              </Link>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/fr/blog/guide-importation-lunettes" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Importation</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guide d&apos;Importation de Lunettes de Soleil depuis la Chine</h3>
                <p className="text-gray-600 text-sm">Processus étape par étape pour importer des lunettes depuis la Chine.</p>
              </Link>
              <Link href="/fr/blog/comparaison-materiaux-montures" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fabrication</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">TR90 vs Acétate vs Métal : Quel Matériau pour Votre Marque ?</h3>
                <p className="text-gray-600 text-sm">Données réelles de coûts, comparaisons de poids et tests de durabilité.</p>
              </Link>
              <Link href="/fr/blog/guide-moq-lunettes" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Approvisionnement</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guide des Quantités Minimum pour Lunettes de Soleil</h3>
                <p className="text-gray-600 text-sm">Ce que signifie vraiment le MOQ au niveau de l&apos;usine.</p>
              </Link>
              <Link href="/fr/blog/oem-vs-odm" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fabrication</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">OEM vs ODM Lunettes de Soleil : Quelle est la Différence ?</h3>
                <p className="text-gray-600 text-sm">Coûts réels, délais réels et un cadre de décision qui fonctionne.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
