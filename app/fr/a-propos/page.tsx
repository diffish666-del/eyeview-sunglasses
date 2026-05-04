import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '\u00c0 Propos d\u2019EyeView | Fabricant de Lunettes de Soleil Depuis 2006 | Usine OEM et ODM',
  description: 'EyeView Sunglasses est un fabricant leader de lunettes de soleil OEM/ODM fond\u00e9 en 2006. Plus de 500 clients de marques dans plus de 50 pays. Certifi\u00e9 CE, FDA, ISO 9001. Prix direct usine.',
  keywords: 'fabricant lunettes de soleil, usine lunetterie, entreprise lunettes OEM, fournisseur lunettes Chine, \u00e0 propos EyeView, fabricant lunettes',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/a-propos',
    languages: {
      'en': 'https://eyeviewsunglasses.com/about',
      'fr': 'https://eyeviewsunglasses.com/fr/a-propos',
    },
  },
  openGraph: {
    title: '\u00c0 Propos d\u2019EyeView | Fabricant de Lunettes de Soleil Depuis 2006',
    description: 'EyeView Sunglasses est un fabricant leader de lunettes de soleil OEM/ODM fond\u00e9 en 2006. Plus de 500 clients de marques dans plus de 50 pays.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/a-propos',
    locale: 'fr_FR',
  },
}

export default function AboutPageFr() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EyeView Sunglasses",
          "url": "https://eyeviewsunglasses.com",
          "logo": "https://eyeviewsunglasses.com/logo.png",
          "foundingDate": "2006",
          "founder": { "@type": "Person", "name": "Jacky Chen" },
          "description": "Fabricant leader de lunettes de soleil OEM/ODM avec plus de 500 clients de marques dans plus de 50 pays. Usine certifi\u00e9e CE, FDA, ISO 9001.",
          "address": { "@type": "PostalAddress", "addressCountry": "CN" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100, "maxValue": 200 },
          "sameAs": [],
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Chinese", "French"] }
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            &Agrave; Propos d&apos;EyeView Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            D&apos;un atelier de deux personnes en 2006 &agrave; une usine moderne au service de plus de 500 marques dans le monde entier.
            Voici qui nous sommes et pourquoi nous faisons ce que nous faisons.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EyeView a d&eacute;marr&eacute; en 2006 dans un atelier qui, honn&ecirc;tement, n&apos;&eacute;tait pas beaucoup plus grand qu&apos;un
                  garage pour deux voitures. C&apos;&eacute;tait moi — Jacky Chen — et un technicien, polissant des montures
                  en ac&eacute;tate &agrave; la main et assemblant des charni&egrave;res manuellement. Notre premi&egrave;re &quot;production&quot;
                  &eacute;tait de 200 paires pour une boutique de surf &agrave; Sydney. J&apos;ai emball&eacute; chaque bo&icirc;te personnellement.
                </p>
                <p>
                  En 2010, nous avions d&eacute;pass&eacute; le garage et avons emm&eacute;nag&eacute; dans notre premier v&eacute;ritable espace d&apos;usine.
                  Nous avons ajout&eacute; le moulage par injection, achet&eacute; notre premi&egrave;re machine CNC et embauch&eacute;
                  une petite &eacute;quipe de contr&ocirc;le qualit&eacute;. La boutique de surf &agrave; Sydney ? Ils sont toujours
                  clients. Leurs commandes sont un peu plus importantes maintenant.
                </p>
                <p>
                  Aujourd&apos;hui, nous exploitons une installation de 5 000 m&sup2; avec 5 lignes de production, plus de 150
                  employ&eacute;s et la capacit&eacute; de produire 10 000 paires par jour. Nous avons servi plus de
                  500 marques dans plus de 50 pays — des startups Kickstarter commandant 100 paires
                  aux cha&icirc;nes de distribution commandant 50 000. L&apos;atelier a disparu depuis longtemps, mais pas
                  l&apos;&eacute;tat d&apos;esprit : chaque paire est toujours inspect&eacute;e comme si elle &eacute;tait destin&eacute;e &agrave; cette boutique de
                  surf &agrave; Sydney.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-4">🏭</span>
                <span className="text-primary-600 font-medium">Depuis 2006</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
              <p className="text-gray-600">
                Rendre la fabrication de lunettes de soleil de qualit&eacute; accessible aux marques de toutes tailles. Que vous soyez
                un entrepreneur solo avec un croquis sur une serviette ou une cha&icirc;ne de distribution passant &agrave; 100 000 unit&eacute;s,
                vous m&eacute;ritez un partenaire de fabrication qui traite votre marque comme la sienne. Pas de budget minimum
                requis. Pas d&apos;attitude. Juste un bon produit et une communication honn&ecirc;te.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Notre Vision</h2>
              <p className="text-gray-600">
                &Ecirc;tre l&apos;usine que la prochaine g&eacute;n&eacute;ration de grandes marques de lunettes d&eacute;signera en disant :
                &quot;Ils nous ont aid&eacute;s &agrave; d&eacute;marrer.&quot; Nous avons d&eacute;j&agrave; aid&eacute; &agrave; lancer des centaines de marques.
                Nous voulons en aider des milliers d&apos;autres — et continuer &agrave; faire grandir celles que nous avons d&eacute;j&agrave; lanc&eacute;es.
                Votre succ&egrave;s est notre meilleur marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">EyeView en Chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">19+</div>
              <div className="text-primary-100">Ann&eacute;es d&apos;activit&eacute;</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Clients de marques</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Pays desservis</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Paires produites / an</div>
            </div>
          </div>
        </section>

        {/* Factory Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Capacit&eacute;s de l&apos;Usine</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre installation est con&ccedil;ue pour la flexibilit&eacute; — petites s&eacute;ries et grandes commandes, OEM et ODM,
              designs simples et ing&eacute;nierie complexe.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard
              icon="⚙️"
              title="5 Lignes de Production"
              description="Lignes d&eacute;di&eacute;es pour les montures en ac&eacute;tate, m&eacute;tal, TR90/injection et mat&eacute;riaux mixtes. Chaque ligne optimis&eacute;e pour son type de mat&eacute;riau."
            />
            <CapabilityCard
              icon="📦"
              title="10 000 Paires / Jour"
              description="Capacit&eacute; de production quotidienne sur toutes les lignes. Nous pouvons monter &agrave; 15 000/jour en haute saison avec des &eacute;quipes suppl&eacute;mentaires."
            />
            <CapabilityCard
              icon="📐"
              title="Installation de 5 000 m&sup2;"
              description="Usine moderne avec des zones s&eacute;par&eacute;es pour la d&eacute;coupe, l&apos;assemblage, le polissage, le contr&ocirc;le qualit&eacute; et l&apos;emballage. Propre, organis&eacute;e et efficace."
            />
            <CapabilityCard
              icon="🔬"
              title="Laboratoire CQ Interne"
              description="Tests de transmission UV, tests d&apos;impact, tests de cycles de charni&egrave;re et v&eacute;rification dimensionnelle — tout est r&eacute;alis&eacute; sur place avant toute exp&eacute;dition."
            />
            <CapabilityCard
              icon="🎨"
              title="400+ Designs ODM"
              description="Catalogue de montures pr&ecirc;tes &agrave; marquer couvrant aviateurs, wayfarers, &oelig;il-de-chat, sport enveloppants, ronds, oversize et styles enfants."
            />
            <CapabilityCard
              icon="🛠️"
              title="Capacit&eacute; OEM Compl&egrave;te"
              description="De votre fichier CAO au produit fini. Fabrication de moules personnalis&eacute;s, prototypage CNC et &eacute;chantillonnage en petites s&eacute;ries avant la production de masse."
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications et Conformit&eacute;</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque produit que nous exp&eacute;dions respecte les normes internationales de s&eacute;curit&eacute; et de qualit&eacute;.
              Ce ne sont pas des badges que nous collectionnons — ce sont des exigences que nous prenons au s&eacute;rieux.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <CertCard
              name="CE"
              description="Conformit&eacute; Europ&eacute;enne"
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
            />
            <CertCard
              name="FDA"
              description="Conformit&eacute; &Eacute;tats-Unis"
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
            />
            <CertCard
              name="UV400"
              description="100% Protection UV"
            />
            <CertCard
              name="ISO 9001"
              description="Management Qualit&eacute;"
              link="https://www.iso.org/iso-9001-quality-management.html"
            />
            <CertCard
              name="ANSI Z80.3"
              description="Norme Optique US"
            />
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">L&apos;&Eacute;quipe Derri&egrave;re le Produit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous sommes plus de 150 personnes passionn&eacute;es par la fabrication de lunettes de soleil de qualit&eacute;. Voici
              quelques-uns des visages avec lesquels vous travaillerez directement.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamCard
              initials="JC"
              name="Jacky Chen"
              role="Fondateur et PDG"
              bio="A fond&eacute; EyeView en 2006 depuis un atelier-garage. 20 ans d&apos;exp&eacute;rience dans la fabrication de lunettes. Inspecte toujours les &eacute;chantillons personnellement."
            />
            <TeamCard
              initials="LW"
              name="Lisa Wang"
              role="Directrice du Design"
              bio="Ancienne designer dans une grande maison de lunettes italienne. A rejoint EyeView en 2014. Dirige notre &eacute;quipe de design de 8 personnes et g&egrave;re tous les projets OEM."
            />
            <TeamCard
              initials="DZ"
              name="David Zhang"
              role="Directeur de Production"
              bio="15 ans sur le terrain de production. Supervise les 5 lignes de production et plus de 80 ouvriers de production. Connu pour son obsession de l&apos;efficacit&eacute;."
            />
            <TeamCard
              initials="SC"
              name="Sarah Chen"
              role="Directrice du Contr&ocirc;le Qualit&eacute;"
              bio="Form&eacute;e aux tests optiques dans un laboratoire suisse. Dirige notre d&eacute;partement CQ avec un objectif de taux de d&eacute;fauts de 0,5 %. Rien ne part sans son approbation."
            />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce Que Disent Nos Clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Nous avons commenc&eacute; avec 200 paires ODM comme test. Trois ans plus tard, nous commandons 5 000 paires OEM personnalis&eacute;es par trimestre. EyeView a grandi avec nous — ils ne nous ont jamais pouss&eacute;s &agrave; commander plus que ce que nous &eacute;tions pr&ecirc;ts &agrave; absorber."
              name="Rachel M."
              title="Fondatrice, Coastal Shade Co."
              location="Melbourne, Australie"
            />
            <TestimonialCard
              quote="J&apos;avais eu de mauvaises exp&eacute;riences avec deux autres usines avant de trouver EyeView. La diff&eacute;rence a &eacute;t&eacute; imm&eacute;diate — l&apos;&eacute;quipe de Jacky a vraiment &eacute;cout&eacute; ce dont j&apos;avais besoin au lieu de simplement me proposer l&apos;option la moins ch&egrave;re. La qualit&eacute; est constante sur 12 commandes."
              name="Marcus T."
              title="PDG, Elevate Eyewear"
              location="Atlanta, &Eacute;tats-Unis"
            />
            <TestimonialCard
              quote="Le processus d&apos;&eacute;chantillonnage m&apos;a convaincu. Ils ont envoy&eacute; cinq paires dans diff&eacute;rents mat&eacute;riaux pour que je puisse comparer c&ocirc;te &agrave; c&ocirc;te. Aucune autre usine n&apos;a propos&eacute; cela. Nous travaillons ensemble depuis quatre ans et je n&apos;ai aucune plainte."
              name="Henrik S."
              title="Acheteur, Nordic Optics"
              location="Stockholm, Su&egrave;de"
            />
            <TestimonialCard
              quote="En tant que startup sans exp&eacute;rience dans la lunetterie, je m&apos;attendais &agrave; &ecirc;tre ignor&eacute; par les vraies usines. EyeView a trait&eacute; ma premi&egrave;re commande de 100 pi&egrave;ces avec le m&ecirc;me s&eacute;rieux que ses gros clients. Cette loyaut&eacute; fonctionne dans les deux sens — nous sommes maintenant l&apos;un de leurs plus gros comptes."
              name="Priya K."
              title="Fondatrice, Dusk &amp; Dawn Eyewear"
              location="Toronto, Canada"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="La Qualit&eacute; Sans Excuses"
              description="Chaque paire est inspect&eacute;e. Chaque verre est test&eacute; aux UV. Chaque charni&egrave;re est soumise &agrave; des cycles. Nous n&apos;exp&eacute;dions pas un produit sur lequel nous ne mettrions pas notre propre nom."
            />
            <ValueCard
              icon="🤝"
              title="Des Partenariats, Pas des Transactions"
              description="80 % de notre chiffre d&apos;affaires provient de clients r&eacute;currents. Nous pr&eacute;f&eacute;rons gagner votre cinqui&egrave;me commande gr&acirc;ce &agrave; un excellent service plut&ocirc;t que de pressurer votre premi&egrave;re commande pour la marge maximale."
            />
            <ValueCard
              icon="💬"
              title="La Franchise"
              description="Si quelque chose prendra 60 jours, nous disons 60 jours — pas 30. Si un mat&eacute;riau ne convient pas &agrave; votre design, nous vous le disons avant que vous ne gaspilliez de l&apos;argent dans un moule. Pas de surprises."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Envie de voir ce que nous pouvons faire pour votre marque ?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Que vous lanciez votre premi&egrave;re collection ou que vous d&eacute;veloppiez une marque existante, nous serions ravis d&apos;&eacute;changer.
            Aucun engagement, aucune pression commerciale — juste une conversation honn&ecirc;te sur ce qui est possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">
              Contactez-nous
            </Link>
            <Link href="/fr/produits" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Voir les Produits
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function CapabilityCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function CertCard({ name, description, link }: { name: string; description: string; link?: string }) {
  const content = (
    <>
      <div className="text-2xl font-bold text-primary-600 mb-2">{name}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener" className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow block">
        {content}
      </a>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 text-center shadow">
      {content}
    </div>
  )
}

function TeamCard({ initials, name, role, bio }: { initials: string; name: string; role: string; bio: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {initials}
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-primary-600 text-sm font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, title, location }: { quote: string; name: string; title: string; location: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="text-primary-600 text-3xl mb-3">&ldquo;</div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-sm text-gray-400">{location}</div>
      </div>
    </div>
  )
}
