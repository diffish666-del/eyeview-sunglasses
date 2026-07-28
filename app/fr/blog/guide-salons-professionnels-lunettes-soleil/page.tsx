import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Salons Professionnels Lunettes de Soleil 2026 : Guide pour Trouver les Bons Fournisseurs',
  description: "Guide d'un fabricant chinois sur les salons professionnels de lunetterie en 2026 — MIDO, SILMO, Vision Expo, IOFT, Salon Optique de Hong Kong. Coûts des stands, stratégies d'évaluation et suivi efficace.",
  keywords: 'salons lunettes de soleil 2026, salon optique 2026, MIDO lunettes, SILMO eyewear, sourcing optique, trouver fournisseurs lunettes salon professionnel',
  alternates: {
    canonical: '/fr/blog/guide-salons-professionnels-lunettes-soleil',
    languages: {
      'en': '/blog/sunglasses-trade-shows-guide',
      'fr': '/fr/blog/guide-salons-professionnels-lunettes-soleil',
    },
  },
}

const PUBLISH_DATE = '2026-07-20'
const SLUG = 'guide-salons-professionnels-lunettes-soleil'

export default function GuideSalonsProfessionnelsLunettesSoleilPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Blog', href: '/fr/blog/' },
          { name: 'Salons Professionnels Lunettes de Soleil 2026 : Guide pour Trouver les Bons Fournisseurs' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Salons Professionnels Lunettes de Soleil 2026 : Guide du Fabricant pour Trouver les Bons Fournisseurs",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fondateur", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guide d'un fabricant chinois sur les salons professionnels de lunetterie en 2026 — MIDO, SILMO, Vision Expo, IOFT, Salon Optique de Hong Kong. Coûts des stands, stratégies d'évaluation et suivi qui fonctionne vraiment.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/fr/blog/${SLUG}` },
          "inLanguage": "fr"
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quel est le meilleur salon professionnel pour trouver des fabricants de lunettes de soleil ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Le MIDO à Milan (février) et le Salon Optique de Hong Kong (novembre) sont les deux meilleurs pour l'accès aux fabricants. Le MIDO réunit des usines européennes et mondiales — Italie, France, Japon, Chine — au même endroit. Hong Kong est plus concentré : environ 70 % des exposants ont des usines en Chine continentale, vous pouvez donc rencontrer directement les décideurs de la chaîne d'approvisionnement sans le surcoût italien." }
            },
            {
              "@type": "Question",
              "name": "Combien coûte l'exposition dans un salon de lunetterie ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Un stand standard de 9 m² au MIDO ou au SILMO coûte entre 4 000 et 6 000 $. Les stands plus grands en îlot (36 m²+) peuvent atteindre 25 000 à 80 000 $ avec l'aménagement sur mesure, l'éclairage et la location de mobilier. Vision Expo aux États-Unis est similaire — 4 500 $+ pour un petit stand, 15 000 à 50 000 $ pour un espace de marque. La plupart des usines chinoises présentes ont des stands de 18 à 36 m², ce qui indique leur sérieux dans l'export." }
            },
            {
              "@type": "Question",
              "name": "Faut-il s'inscrire à l'avance pour les salons de lunetterie ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Oui, absolument. MIDO, SILMO, Vision Expo et IOFT exigent une pré-inscription en ligne. L'inscription sur place existe mais vous perdrez 45 à 60 minutes dans la file d'attente. La plupart des salons ouvrent les inscriptions 3 à 4 mois à l'avance et proposent des tarifs early-bird — le MIDO était à 35 € en prévente contre 55 € sur place l'année dernière. Apportez vos documents d'enregistrement d'entreprise ; certains salons vérifient que vous êtes un acheteur professionnel avant d'accorder l'accès." }
            },
            {
              "@type": "Question",
              "name": "Que faut-il apporter à un salon pour rencontrer des fournisseurs ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Voyagez léger mais précis : 3 à 5 échantillons de concurrents comme références de qualité, 100+ cartes de visite (vous les utiliserez plus vite que prévu), une fiche technique avec votre prix de vente cible, vos préférences de matériaux et vos exigences de certification UV400, un chargeur portable, des chaussures confortables et un petit carnet. Le plus important : des photos imprimées de ce que vous voulez exactement — la barrière de la langue disparaît quand vous pouvez montrer une image." }
            },
            {
              "@type": "Question",
              "name": "Comment assurer le suivi avec les fournisseurs après un salon ?",
              "acceptedAnswer": { "@type": "Answer", "text": "Envoyez un e-mail personnalisé dans les 48 heures — pas un message générique. Faites référence à un élément spécifique de votre conversation au stand (« Je me souviens que vous avez mentionné votre fournisseur d'acétate chez Mazzucchelli »). Incluez des photos de vos échantillons de référence. Demandez un devis avec vos quantités, pas « quel est votre meilleur prix ? ». Les usines reçoivent 200+ e-mails « envoyez-moi votre catalogue » après chaque salon ; ceux qui se démarquent sont ceux qui ressemblent à une vraie commande, pas à une partie de pêche." }
            }
          ]
        })}} />

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Approvisionnement</span>
            <span>20 juillet 2026</span>
            <span>•</span>
            <span>8 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Salons Professionnels Lunettes de Soleil 2026&nbsp;: Guide du Fabricant pour Trouver les Bons Fournisseurs
          </h1>
          <p className="text-xl text-gray-600">
            J&rsquo;ai tenu des stands dans plus de 30&nbsp;salons professionnels. La plupart des acheteurs visitent mal le salon. Voici comment bien faire.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fondateur, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE DES MATIÈRES ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Sommaire</h2>
          <ul className="space-y-2">
            <li><a href="#pourquoi-salons" className="text-primary-600 hover:underline">Pourquoi les Salons Restent Incontournables à l&rsquo;Ère d&rsquo;Alibaba</a></li>
            <li><a href="#calendrier" className="text-primary-600 hover:underline">Le Calendrier des Grands Salons 2026</a></li>
            <li><a href="#preparer" className="text-primary-600 hover:underline">Ce qu&rsquo;il Faut Préparer Avant de Partir</a></li>
            <li><a href="#evaluer" className="text-primary-600 hover:underline">Comment Évaluer les Fournisseurs sur un Salon</a></li>
            <li><a href="#strategie-stand" className="text-primary-600 hover:underline">La Stratégie de Visite que la Plupart des Acheteurs Ratent</a></li>
            <li><a href="#suivi" className="text-primary-600 hover:underline">Le Suivi Post-Salon Qui Marche Vraiment</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Foire Aux Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ CORPS DE L'ARTICLE ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* ─── Introduction ─── */}
          <p className="text-xl text-gray-600 mb-8">
            En 2019, un acheteur est entré dans notre stand au MIDO Milan, a pris une de nos montures en acétate,
            a plié la branche presque à plat contre la face, l&rsquo;a maintenue trois secondes, puis l&rsquo;a reposée.
            Il n&rsquo;a rien dit. Juste un hochement de tête, il a pris une carte de visite, et il est parti.
            Deux mois plus tard, il passait une commande de 45&nbsp;000&nbsp;$.
          </p>
          <p>
            C&rsquo;est ça, la magie des salons. Vous ne pouvez pas reproduire ce moment sur Alibaba. Vous ne pouvez pas
            sentir la tension d&rsquo;une charnière à ressort par message privé. Vous ne pouvez pas humer l&rsquo;acétate
            frais ni tenir un verre polarisé sous les lumières du hall à travers une fiche produit. Depuis 15&nbsp;ans
            que je dirige une usine de lunettes en Chine, les salons sont là où nos meilleures relations clients ont
            commencé — pas dans une boîte mail, pas sur une plateforme B2B, mais autour d&rsquo;une table de stand de
            3&nbsp;mètres avec des échantillons entre nous.
          </p>
          <p>
            Mais voici ce que personne ne vous dit&nbsp;: <strong>la plupart des acheteurs sont nuls en salon.</strong>{' '}
            Ils arpentent les allées comme des touristes, ramassent des catalogues comme des souvenirs, et rentrent avec
            un sac plein de cartes de visite qu&rsquo;ils ne regarderont jamais. Je l&rsquo;ai observé depuis l&rsquo;autre
            côté du stand pendant plus d&rsquo;une décennie. Ce guide est l&rsquo;inverse de ça — c&rsquo;est comment
            entrer dans n&rsquo;importe quel salon de lunetterie en 2026 et en ressortir avec de vraies relations
            fournisseurs, pas juste une pile de brochures.
          </p>

          {/* ─── Section 1 : Pourquoi les Salons ─── */}
          <h2 id="pourquoi-salons" className="text-3xl font-bold mt-16 mb-6">Pourquoi les Salons Restent Incontournables à l&rsquo;Ère d&rsquo;Alibaba</h2>
          <p>
            On me pose cette question en permanence&nbsp;: «&nbsp;Pourquoi dépenser 3&nbsp;000&nbsp;$ en vols et hôtels
            alors que je peux parcourir les fournisseurs sur Alibaba gratuitement&nbsp;?&nbsp;»
          </p>
          <p>
            Voici la réponse honnête&nbsp;: <strong>environ 40 à 50&nbsp;% des «&nbsp;fabricants&nbsp;» sur Alibaba sont
            des sociétés de négoce.</strong> Ils ne possèdent pas une seule machine d&rsquo;injection. Ils prennent votre
            commande, la margent de 15 à 30&nbsp;%, et l&rsquo;envoient à une usine dont vous ne connaîtrez jamais le nom.
            J&rsquo;ai vu des sociétés de négoce entrer dans notre stand, photographier nos échantillons, et les lister
            sur Alibaba comme leurs propres produits le soir même. Je le sais parce que des acheteurs m&rsquo;ont envoyé
            des captures d&rsquo;écran me demandant pourquoi «&nbsp;nos&nbsp;» montures étaient listées sous un autre
            nom d&rsquo;entreprise.
          </p>
          <p>
            Sur un salon, vous éliminez l&rsquo;intermédiaire par défaut. Le stand coûte minimum 4&nbsp;000&nbsp;$ — les
            sociétés de négoce n&rsquo;investissent pas ce genre d&rsquo;argent pour un seul salon. Vous êtes face à
            quelqu&rsquo;un qui possède l&rsquo;usine ou dirige les opérations. Vous pouvez demander «&nbsp;où se trouve
            votre site de production&nbsp;?&nbsp;» et observer leur réaction en temps réel. Vous pouvez ouvrir les tiroirs
            derrière le présentoir, vérifier l&rsquo;intérieur des embouts de branches pour les marques de moule, et voir
            comment les échantillons sont réellement finis — pas comment ils ont été photographiés sous un éclairage
            studio.
          </p>
          <p>
            Un autre point important&nbsp;: <strong>l&rsquo;usine qui expose au MIDO ou au SILMO a passé un filtre.</strong>{' '}
            Elle a une documentation d&rsquo;exportation. Elle a du personnel anglophone. Elle comprend les normes de
            qualité internationales. Elle a investi des sommes sérieuses pour être là — un stand de 18&nbsp;m² avec un
            éclairage et des vitrines corrects au MIDO coûte environ 12&nbsp;000 à 15&nbsp;000&nbsp;$ tout compris.
            Personne ne dépense ça pour vous arnaquer.
          </p>

          {/* ─── Section 2 : Le Calendrier ─── */}
          <h2 id="calendrier" className="text-3xl font-bold mt-16 mb-6">Le Calendrier des Grands Salons 2026</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">MIDO Milan — 7 au 9 février 2026</h3>
          <p>
            C&rsquo;est le grand rendez-vous. Plus de 1&nbsp;300&nbsp;exposants de plus de 50&nbsp;pays, plus de
            55&nbsp;000&nbsp;visiteurs et une industrie de 38&nbsp;milliards d&rsquo;euros réunie au parc des expositions
            Fiera Milano Rho. Si vous ne pouvez assister qu&rsquo;à un seul salon cette année, choisissez le MIDO.
          </p>
          <p>
            Le salon est organisé par pavillons — Design, Tech, Fashion, Lens et Asia. Pour le sourcing, visez le{' '}
            <strong>Pavillon Asie</strong> et certaines parties du Pavillon Fashion. C&rsquo;est là que vous trouverez
            les fabricants chinois, coréens et hongkongais qui produisent à des volumes compétitifs. Le Pavillon Design
            regroupe surtout des marques italiennes et françaises d&rsquo;acétate premium — magnifique à regarder, mais
            attendez-vous à des prix FOB autour de 12–25&nbsp;$ l&rsquo;unité en OEM contre 5–12&nbsp;$ dans le Pavillon
            Asie pour une qualité équivalente.
          </p>
          <p>
            Je me souviens d&rsquo;un client canadien qui a passé deux jours entiers dans le Pavillon Design, est tombé
            amoureux des montures en acétate italien, a reçu un devis à 22&nbsp;€/unité FOB, et a paniqué en réalisant
            que son prix de vente devrait dépasser 120&nbsp;$ rien que pour couvrir ses coûts. Il nous a trouvés dans le
            Pavillon Asie le troisième jour, a vu des montures en acétate Mazzucchelli à 9,50&nbsp;$/unité, et a failli
            me serrer dans ses bras. Même matériau. Chaîne d&rsquo;approvisionnement différente. C&rsquo;est pour ça
            qu&rsquo;il faut parcourir tout le salon avant de prendre des décisions.
          </p>
          <blockquote className="border-l-4 border-primary-600 pl-4 my-6 italic text-gray-700">
            <strong>Astuce de pro&nbsp;:</strong> le MIDO se tient du samedi au lundi. Le samedi, c&rsquo;est le chaos
            — tous les acheteurs se précipitent. Le lundi après-midi, le salon est calme, les exposants sont fatigués
            mais détendus, et vous pouvez avoir de vraies conversations. J&rsquo;ai accordé de meilleurs prix le lundi
            à 15&nbsp;h que je ne l&rsquo;aurais jamais fait le samedi à 11&nbsp;h quand il y a une file d&rsquo;attente
            derrière vous.
          </blockquote>

          <h3 className="text-2xl font-bold mt-8 mb-4">Vision Expo East (New York) — 12 au 15 mars 2026</h3>
          <h3 className="text-2xl font-bold mt-8 mb-4">Vision Expo West (Las Vegas) — 16 au 19 septembre 2026</h3>
          <p>
            Les deux salons Vision Expo sont les plus grands événements d&rsquo;achat aux États-Unis, mais il y a une
            distinction à comprendre&nbsp;: sur environ 450&nbsp;exposants à chaque salon, seuls{' '}
            <strong>180 à 200 sont de véritables fabricants de lunettes.</strong> Le reste, ce sont des laboratoires
            de verres, des fournisseurs d&rsquo;équipement, des marques de montures, des éditeurs de logiciels et des
            services d&rsquo;optométrie. Si vous entrez en cherchant une usine sans pré-filtrer le plan du salon, vous
            gaspillerez la moitié de votre journée à parler à des gens qui veulent vous vendre un logiciel de gestion
            de cabinet.
          </p>
          <p>
            Vision Expo West à Las Vegas a tendance à avoir une présence internationale de fabricants plus forte — plus
            d&rsquo;usines chinoises, coréennes et japonaises qu&rsquo;au salon de New York. Le salon de Vegas a aussi
            l&rsquo;avantage d&rsquo;être juste avant le SILMO Paris, donc beaucoup de fabricants asiatiques font le
            doublé&nbsp;: Vision Expo West en septembre, puis vol pour Paris pour le SILMO la semaine suivante.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">SILMO Paris — 25 au 28 septembre 2026</h3>
          <p>
            Le SILMO, c&rsquo;est le salon du design et des tendances. 1&nbsp;000&nbsp;exposants, dont la moitié sont
            français ou italiens, et l&rsquo;ambiance est résolument premium. Si le MIDO est l&rsquo;endroit où l&rsquo;on
            négocie les prix unitaires, le SILMO est celui où l&rsquo;on repère quelles couleurs, formes et matériaux
            domineront le marché en 2027.
          </p>
          <p>
            Je visite le SILMO chaque année en tant qu&rsquo;acheteur, pas en tant qu&rsquo;exposant. Je parcours le
            salon avec un carnet et je photographie chaque tendance que je vois — l&rsquo;année dernière, c&rsquo;était
            les acétates caramel translucides et les silhouettes oversize inspirées des années 70. Cette année, je mise
            sur le titane fin avec des verres dégradés. Si vous créez une marque, le SILMO vous fera gagner six mois de
            recherche de tendances en deux jours.
          </p>
          <p>
            Un bémol&nbsp;: exposer au SILMO coûte cher pour les fabricants, ce qui signifie que la présence des usines
            chinoises est plus faible qu&rsquo;au MIDO ou à Hong Kong. Vous trouverez davantage de studios de design et
            de spécialistes OEM haut de gamme que de fabricants en volume. Parfait pour l&rsquo;inspiration. Moins idéal
            pour négocier votre première commande de 500&nbsp;pièces.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">IOFT Tokyo — octobre 2026 (dates à confirmer)</h3>
          <p>
            L&rsquo;International Optical Fair Tokyo est plus petit — plus de 260&nbsp;exposants — mais boxe largement
            au-dessus de sa catégorie en qualité. Si vous cherchez des montures en titane japonais, de l&rsquo;acétate
            de précision ou des charnières usinées avec des tolérances qui feraient transpirer la plupart des usines,
            l&rsquo;IOFT est votre salon.
          </p>
          <p>
            Les fabricants japonais sont réputés pour être sélectifs. Ils ne courent pas après les volumes comme les
            usines chinoises. Les MOQ à l&rsquo;IOFT tournent autour de 300 à 500&nbsp;pièces, et les prix démarrent
            plus haut — comptez 15–30&nbsp;$ FOB pour des montures en acétate contre 5–12&nbsp;$ depuis la Chine.
            Mais la qualité de fabrication est indéniable. J&rsquo;ai envoyé des acheteurs à l&rsquo;IOFT quand ils
            avaient besoin de quelque chose que nous ne pouvions pas égaler en précision, et je le dis en tant que
            propriétaire d&rsquo;usine.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Salon Optique de Hong Kong — 4 au 6 novembre 2026</h3>
          <p>
            Si vous voulez rencontrer des fabricants chinois sans la complexité d&rsquo;un voyage en Chine continentale,
            Hong Kong est la réponse. Plus de 700&nbsp;exposants, dont la grande majorité avec des usines à Shenzhen,
            Dongguan, Wenzhou et Xiamen — les quatre principaux centres de fabrication de lunettes.
          </p>
          <p>
            Hong Kong a deux grands avantages par rapport aux autres salons. Premièrement&nbsp;:{' '}
            <strong>pas de visa requis</strong> pour la plupart des nationalités, ce qui supprime un énorme point de
            friction. Deuxièmement&nbsp;: les exposants sont aguerris à l&rsquo;export. Toute usine chinoise avec un
            stand à Hong Kong fait du commerce international depuis des années — elle comprend vos exigences de
            certification, vos standards d&rsquo;emballage, vos attentes en matière d&rsquo;expédition. Vous ne devez
            pas les former&nbsp;; ils sont prêts.
          </p>
          <p>
            Le salon de Hong Kong se déroule également en parallèle d&rsquo;une zone dédiée aux marques, ce qui vous
            permet de voir ce que les marques établies vendent aux détaillants tout en rencontrant les usines derrière
            elles. Cette double perspective vaut le déplacement à elle seule.
          </p>

          {/* ─── Section 3 : Préparation ─── */}
          <h2 id="preparer" className="text-3xl font-bold mt-16 mb-6">Ce qu&rsquo;il Faut Préparer Avant de Partir</h2>
          <p>
            J&rsquo;ai vu trop d&rsquo;acheteurs arriver avec juste un téléphone et de bonnes intentions. C&rsquo;est
            du gaspillage pour un voyage à 3&nbsp;000&nbsp;$. Voici ce que les acheteurs sérieux apportent&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>3 à 5 échantillons physiques de référence.</strong> Apportez des lunettes de concurrents ou de
            marques que vous admirez. Quand vous me tendez un échantillon en disant «&nbsp;Je veux cette qualité, à ce
            prix, avec cette sensation de charnière&nbsp;», je peux vous dire en 30&nbsp;secondes si c&rsquo;est
            faisable. Sans référence, on avance tous les deux à l&rsquo;aveugle.</li>
            <li><strong>Plus de 100 cartes de visite.</strong> Pas 20. Pas 50. Vous en distribuerez plus que prévu, et
            tomber à court vous fait paraître mal préparé. Des cartes pro, pas les gratuites VistaPrint aux bords
            prédécoupés.</li>
            <li><strong>Une fiche technique d&rsquo;une page.</strong> Fourchette de prix de vente cible, matériaux
            préférés (acétate, TR90, métal, titane), exigences de verres (polarisés, UV400, dégradés, photochromiques),
            certifications nécessaires (FDA, CE, AS/NZS) et quantité estimée pour la première commande. Imprimez-en
            20&nbsp;exemplaires. Remettez-en un à chaque fournisseur sérieux que vous rencontrez.</li>
            <li><strong>Plan du salon avec les cibles pré-marquées.</strong> Téléchargez la liste des exposants et le
            plan du salon au moins deux semaines avant. Surlignez chaque fabricant dans votre catégorie. Planifiez votre
            parcours pour ne pas zigzaguer entre les halls. Jour un&nbsp;: visitez toutes vos cibles rapidement (5–10
            minutes chacune). Jour deux&nbsp;: revenez voir votre top 3–5 pour des conversations approfondies.</li>
            <li><strong>Un chargeur portable et un carnet physique.</strong> Votre téléphone sera à plat vers 14&nbsp;h.
            Prendre des notes sur papier est aussi plus rapide que taper — notez le numéro de stand, le nom du contact,
            deux choses spécifiques discutées, et une note de 1 à 10. Vous oublierez quel stand était lequel au dîner.
            Tout le monde oublie.</li>
          </ul>

          {/* ─── Section 4 : Évaluation des Fournisseurs ─── */}
          <h2 id="evaluer" className="text-3xl font-bold mt-16 mb-6">Comment Évaluer les Fournisseurs sur un Salon</h2>
          <p>
            Vous êtes devant un stand. Les échantillons sont beaux. Le commercial est sympathique. Et maintenant&nbsp;?
            Voici ce que je vérifierais si j&rsquo;étais de votre côté de la table&nbsp;:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Les Cinq Questions Qui Séparent les Usines des Imposteurs</h3>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>«&nbsp;Où se trouve votre usine&nbsp;? Combien de lignes de production avez-vous&nbsp;?&nbsp;»</strong>{' '}
            — Une vraie usine répond instantanément. Une société de négoce hésite, donne une réponse vague ou dit
            «&nbsp;nous travaillons avec plusieurs usines partenaires&nbsp;». C&rsquo;est le signal pour passer au
            suivant.</li>
            <li><strong>«&nbsp;Puis-je voir l&rsquo;intérieur de l&rsquo;embout de branche&nbsp;?&nbsp;»</strong> —
            Prenez un échantillon, regardez attentivement la finition. Les lignes de moule sont-elles visibles&nbsp;?
            La vis de charnière est-elle affleurante&nbsp;? L&rsquo;acétate semble-t-il solide ou creux&nbsp;? Pas
            besoin d&rsquo;être ingénieur. Il suffit de prendre le temps de regarder. L&rsquo;exposant qui vous observe
            faire sans broncher est confiant dans son produit.</li>
            <li><strong>«&nbsp;Quel est votre délai type pour une commande OEM de 500&nbsp;pièces&nbsp;?&nbsp;»</strong>{' '}
            — La bonne réponse est 30 à 45&nbsp;jours. S&rsquo;ils disent 15&nbsp;jours, soit ils font de l&rsquo;ODM
            sur stock, soit ils mentent sur le fait d&rsquo;être une usine. S&rsquo;ils disent 90&nbsp;jours, leur
            production est saturée et vous serez dépriorisé en tant que petit acheteur.</li>
            <li><strong>«&nbsp;Quelles certifications vos montures portent-elles&nbsp;? Puis-je voir la
            documentation&nbsp;?&nbsp;»</strong> — CE, FDA, UV400 et ISO&nbsp;9001 sont le minimum. Une usine sérieuse
            a les documents au stand ou peut les envoyer par e-mail dans l&rsquo;heure. S&rsquo;ils cherchent une
            réponse, soit ils ne sont pas certifiés, soit ils empruntent les certificats de quelqu&rsquo;un d&rsquo;autre
            — les deux sont rédhibitoires.</li>
            <li><strong>«&nbsp;Comment gérez-vous le contrôle qualité sur les commandes export&nbsp;?&nbsp;»</strong> —
            Écoutez les détails&nbsp;: «&nbsp;Nous appliquons l&rsquo;AQL&nbsp;2,5 sur chaque commande, envoyons des
            photos avant expédition et proposons une inspection par un tiers.&nbsp;» Un vague «&nbsp;nous garantissons
            la qualité&nbsp;» ne veut rien dire. Une usine qui peut décrire son processus QC en détail en a un. Une
            usine qui ne peut pas, n&rsquo;en a pas.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Les Signaux d&rsquo;Alerte Que J&rsquo;ai Appris à Repérer</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Pas de tiroir d&rsquo;échantillons.</strong> Un stand avec seulement des vitrines et aucun
            échantillon de secours vous dit qu&rsquo;ils montrent des prototypes, pas des pièces de production. Demandez
            à voir «&nbsp;à quoi ressemble la 500ᵉ unité, pas la première&nbsp;».</li>
            <li><strong>Un prix donné trop vite.</strong> Si vous posez une question sur une monture et qu&rsquo;ils
            donnent un prix en 10&nbsp;secondes sans demander la quantité, les matériaux ou la personnalisation — ils
            vendent sur stock. Pas forcément mauvais, mais vous ne parlez pas à un fabricant.</li>
            <li><strong>Pas d&rsquo;adresse d&rsquo;usine sur la carte de visite.</strong> Si l&rsquo;adresse est une
            tour de bureaux dans un quartier d&rsquo;affaires et non une zone industrielle, c&rsquo;est un signal
            d&rsquo;alerte. Les usines de Dongguan sont à Dongguan, pas dans un bureau enregistré à Hong Kong Central.</li>
          </ul>

          {/* ─── Section 5 : Stratégie de Visite de Stand ─── */}
          <h2 id="strategie-stand" className="text-3xl font-bold mt-16 mb-6">La Stratégie de Visite Que la Plupart des Acheteurs Ratent</h2>
          <p>
            La plupart des acheteurs font ceci&nbsp;: s&rsquo;approcher d&rsquo;un stand, prendre une monture, demander
            «&nbsp;combien&nbsp;?&nbsp;», prendre un catalogue, repartir. Ce n&rsquo;est pas du sourcing. C&rsquo;est du
            lèche-vitrine avec des étapes supplémentaires.
          </p>
          <p>
            Voici la stratégie qui fonctionne vraiment, apprise en observant les acheteurs les plus performants qui
            visitent notre stand&nbsp;:
          </p>
          <p>
            <strong>Jour un&nbsp;: reconnaissance.</strong> Parcourez tout le salon. Passez 5 à 7&nbsp;minutes par stand
            cible — assez longtemps pour évaluer la qualité des échantillons, poser les cinq questions ci-dessus et
            obtenir une fourchette de prix approximative. Ne négociez pas. Ne vous engagez pas. Prenez des photos des
            échantillons qui vous plaisent (demandez d&rsquo;abord la permission — certains exposants sont sensibles à
            la copie de design), notez votre évaluation de 1 à 10, et passez au suivant. À la fin du premier jour, vous
            devriez avoir visité 15 à 25&nbsp;stands et réduit votre liste à 5&nbsp;candidats sérieux.
          </p>
          <p>
            <strong>Jour deux&nbsp;: entretiens approfondis.</strong> Revenez voir votre top&nbsp;5. Cette fois,
            asseyez-vous. Demandez de l&rsquo;eau. Ouvrez leur catalogue au-delà des pièces exposées — demandez à
            voir{' '}
            <Link href="/fr/products/" className="text-primary-600 hover:underline">leur gamme complète</Link>, pas
            seulement ce qui est au mur. Discutez de votre fiche technique en détail. Renseignez-vous sur{' '}
            <Link href="/fr/blog/guide-moq-lunettes" className="text-primary-600 hover:underline">la flexibilité des MOQ</Link>{' '}
            pour une première commande. L&rsquo;objectif du deuxième jour est d&rsquo;avoir une conversation assez
            approfondie pour comparer réellement les fournisseurs — prix, capacité, qualité de communication et
            ressenti.
          </p>
          <p>
            <strong>Jour trois&nbsp;: la conclusion tranquille.</strong> La plupart des acheteurs sont déjà repartis
            au troisième jour, surtout au MIDO où le lundi est le jour le plus calme. C&rsquo;est votre avantage.
            Revenez voir votre top&nbsp;2–3. Le personnel du stand est moins stressé, plus disposé à discuter, et plus
            ouvert à la négociation. J&rsquo;ai accordé de meilleurs prix et partagé des informations plus franches les
            lundis après-midi que pendant la cohue du samedi — parce que les acheteurs qui restent jusqu&rsquo;à la fin
            sont les sérieux.
          </p>
          <p>
            <strong>L&rsquo;erreur fatale&nbsp;:</strong> se disperser sur trop de stands. Si vous visitez 80&nbsp;stands
            en trois jours, vous n&rsquo;avez eu de vraie conversation avec aucun d&rsquo;eux. Vous avez collecté
            80&nbsp;catalogues et zéro relation. Visez 15 à 25&nbsp;stands au total, avec des conversations de suivi
            approfondies avec 5 à 7 d&rsquo;entre eux.
          </p>

          {/* ─── Section 6 : Suivi ─── */}
          <h2 id="suivi" className="text-3xl font-bold mt-16 mb-6">Le Suivi Post-Salon Qui Marche Vraiment</h2>
          <p>
            Après chaque grand salon, je reçois environ 250&nbsp;e-mails dans la première semaine. Peut-être 10 d&rsquo;entre
            eux aboutissent à du vrai business. Les 240&nbsp;autres sont des variantes de «&nbsp;Ravi de vous avoir
            rencontré, merci d&rsquo;envoyer catalogue et meilleur prix&nbsp;».
          </p>
          <p>
            Voici à quoi ressemblent les 10 qui fonctionnent&nbsp;:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Envoyez dans les 48&nbsp;heures.</strong> Pas deux semaines plus tard. Je ne peux pas me souvenir
            lequel des 200&nbsp;visages que j&rsquo;ai vus ce jour-là était le vôtre, sauf si vous me le rappelez quand
            la mémoire est encore fraîche. Le deuxième jour après le salon est la fenêtre idéale.</li>
            <li><strong>Faites référence à quelque chose de spécifique.</strong> «&nbsp;Nous avons parlé de vos modèles
            en acétate avec charnières à ressort — vous avez mentionné votre relation avec le fournisseur Mazzucchelli&nbsp;»
            — cela me montre que vous étiez attentif et que ce n&rsquo;est pas un message générique envoyé à
            50&nbsp;usines.</li>
            <li><strong>Joignez votre fiche technique et vos photos de référence.</strong> Celles que vous m&rsquo;avez
            remises au stand. Je les ai probablement quelque part dans ma pile, mais les joindre à votre e-mail
            m&rsquo;évite de chercher et me rend plus susceptible de répondre le jour même.</li>
            <li><strong>Indiquez vos quantités et votre calendrier.</strong> «&nbsp;Nous souhaitons passer une commande
            d&rsquo;essai de 300&nbsp;pièces en octobre pour trois SKU&nbsp;» a 10&nbsp;fois plus de chances d&rsquo;obtenir
            une réponse sérieuse que «&nbsp;quel est votre meilleur prix&nbsp;?&nbsp;». Le premier message ressemble à
            un client. Le second ressemble à du tourisme.</li>
            <li><strong>Demandez une prochaine étape précise.</strong> «&nbsp;Pouvez-vous m&rsquo;envoyer un devis formel
            avec les prix FOB pour les SKU&nbsp;A, B et C d&rsquo;ici vendredi&nbsp;?&nbsp;» Cela me donne une action
            claire avec une échéance. Je peux dire oui ou non. Dans les deux cas, la conversation avance.</li>
          </ol>
          <p>
            Une dernière chose&nbsp;: si un fournisseur ne répond pas dans les 3 à 4&nbsp;jours ouvrés, relancez une
            fois. S&rsquo;il ne répond toujours pas, rayez-le de votre liste. Une usine qui ne peut pas répondre à une
            demande post-salon d&rsquo;un acheteur qualifié dans la semaine vous dit tout sur la façon dont elle gérera
            votre communication de production plus tard.
          </p>

          {/* ═══════ FAQ ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Foire Aux Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quel est le meilleur salon professionnel pour trouver des fabricants de lunettes de soleil&nbsp;?</h3>
              <p className="text-gray-600">Le MIDO à Milan (février) et le Salon Optique de Hong Kong (novembre) sont les deux meilleurs pour l&rsquo;accès aux fabricants. Le MIDO réunit des usines européennes et mondiales — Italie, France, Japon, Chine — au même endroit. Hong Kong est plus concentré&nbsp;: environ 70&nbsp;% des exposants ont des usines en Chine continentale, vous pouvez donc rencontrer directement les décideurs de la chaîne d&rsquo;approvisionnement sans le surcoût italien.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Combien coûte l&rsquo;exposition dans un salon de lunetterie&nbsp;?</h3>
              <p className="text-gray-600">Un stand standard de 9&nbsp;m² au MIDO ou au SILMO coûte entre 4&nbsp;000 et 6&nbsp;000&nbsp;$. Les stands plus grands en îlot (36&nbsp;m²+) peuvent atteindre 25&nbsp;000 à 80&nbsp;000&nbsp;$ avec l&rsquo;aménagement sur mesure, l&rsquo;éclairage et la location de mobilier. Vision Expo aux États-Unis est similaire — 4&nbsp;500&nbsp;$+ pour un petit stand, 15&nbsp;000 à 50&nbsp;000&nbsp;$ pour un espace de marque. La plupart des usines chinoises présentes ont des stands de 18 à 36&nbsp;m², ce qui indique leur sérieux dans l&rsquo;export.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Faut-il s&rsquo;inscrire à l&rsquo;avance pour les salons de lunetterie&nbsp;?</h3>
              <p className="text-gray-600">Oui, absolument. MIDO, SILMO, Vision Expo et IOFT exigent une pré-inscription en ligne. L&rsquo;inscription sur place existe mais vous perdrez 45 à 60&nbsp;minutes dans la file d&rsquo;attente. La plupart des salons ouvrent les inscriptions 3 à 4&nbsp;mois à l&rsquo;avance et proposent des tarifs early-bird — le MIDO était à 35&nbsp;€ en prévente contre 55&nbsp;€ sur place l&rsquo;année dernière. Apportez vos documents d&rsquo;enregistrement d&rsquo;entreprise&nbsp;; certains salons vérifient que vous êtes un acheteur professionnel avant d&rsquo;accorder l&rsquo;accès.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Que faut-il apporter à un salon pour rencontrer des fournisseurs&nbsp;?</h3>
              <p className="text-gray-600">Voyagez léger mais précis&nbsp;: 3 à 5&nbsp;échantillons de concurrents comme références de qualité, plus de 100&nbsp;cartes de visite (vous les utiliserez plus vite que prévu), une fiche technique avec votre prix de vente cible, vos préférences de matériaux et vos exigences de certification UV400, un chargeur portable, des chaussures confortables et un petit carnet. Le plus important&nbsp;: des photos imprimées de ce que vous voulez exactement — la barrière de la langue disparaît quand vous pouvez montrer une image.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Comment assurer le suivi avec les fournisseurs après un salon&nbsp;?</h3>
              <p className="text-gray-600">Envoyez un e-mail personnalisé dans les 48&nbsp;heures — pas un message générique. Faites référence à un élément spécifique de votre conversation au stand («&nbsp;Je me souviens que vous avez mentionné votre fournisseur d&rsquo;acétate chez Mazzucchelli&nbsp;»). Incluez des photos de vos échantillons de référence. Demandez un devis avec vos quantités, pas «&nbsp;quel est votre meilleur prix&nbsp;?&nbsp;». Les usines reçoivent 200+ e-mails «&nbsp;envoyez-moi votre catalogue&nbsp;» après chaque salon&nbsp;; ceux qui se démarquent sont ceux qui ressemblent à une vraie commande, pas à une partie de pêche.</p>
            </div>
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Évitez le Salon — Commencez Directement</h2>
            <p className="text-xl mb-6 opacity-90">
              Si vous ne pouvez pas vous rendre au MIDO ou à Hong Kong cette année, discutons. Nous fabriquons des
              lunettes de soleil depuis 2006 — échantillons en 3 à 7&nbsp;jours, OEM à partir de 300&nbsp;pièces,
              et chaque paire certifiée UV400.
            </p>
            <Link
              href="/fr/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Demander un Devis Gratuit
            </Link>
          </div>

          {/* ═══════ CONTENU CONNEXE ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Plus Depuis l&rsquo;Atelier</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fr/products/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Voir Notre Catalogue Complet</h3>
                <p className="text-gray-600 text-sm">Parcourez plus de 500 designs ODM et OEM de lunettes — acétate, métal, TR90 et plus.</p>
              </Link>
              <Link href="/fr/blog/trouver-fabricant-lunettes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Comment Trouver un Fabricant Fiable</h3>
                <p className="text-gray-600 text-sm">10 critères de vérification, arnaques Alibaba à éviter et vrais conseils de négociation depuis l&rsquo;usine.</p>
              </Link>
              <Link href="/fr/contact" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contactez-Nous</h3>
                <p className="text-gray-600 text-sm">Obtenez un devis personnalisé pour votre commande de lunettes sur mesure. Échantillons en 3 à 7&nbsp;jours.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}
