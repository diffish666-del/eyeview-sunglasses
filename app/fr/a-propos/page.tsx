import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos d\'EyeView | Fabricant de Lunettes de Soleil Depuis 2006 | Usine OEM et ODM'EyeView | Fabricant de Lunettes de Soleil Depuis 2006 | Usine OEM et ODM',
  description: 'EyeView Sunglasses est un fabricant leader de lunettes de soleil OEM/ODM fondé en 2006. Plus de 500 clients de marques dans plus de 50 pays. Certifié CE, FDA, ISO 9001. Prix direct usine.',
  keywords: 'fabricant lunettes de soleil, usine lunetterie, entreprise lunettes OEM, fournisseur lunettes Chine, à propos EyeView, fabricant lunettes',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/a-propos',
    languages: {
      'en': 'https://eyeviewsunglasses.com/about',
      'fr': 'https://eyeviewsunglasses.com/fr/a-propos',
    },
  },
  openGraph: {
    title: 'À Propos d'EyeView | Fabricant de Lunettes de Soleil Depuis 2006',
    description: 'EyeView Sunglasses est un fabricant líder de lunettes de soleil OEM/ODM fundado en 2006. Plus de 500 clients de marques en plus de 50 pays.',
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
          "description": "Fabricant líder de lunettes de soleil OEM/ODM avec plus de 500 clients de marques en plus de 50 pays. Usine certifichaque CE, FDA, ISO 9001.",
          "address": { "@type": "PostalAddress", "addressCountry": "CN" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100, "maxValue": 200 },
          "sameAs": [],
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Chinese", "Spanish"] }
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos d'EyeView Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De un taller de dos personas en 2006 a une usine moderna qui sirve a plus de 500 marques en todo el mundo. 
            Esto est quiénes somos et par qué nous faisons le qui nous faisons.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EyeView comenzó en 2006 en un taller que, honestamente, no era mucho plus grande qui 
                  un garaje para dos coches. Éramos yo — Jacky Chen — et un técnico, puliendo montures 
                  de acétate a mano et ensamblando charnières manualmente. Nuestra primera &quot;production&quot; 
                  fue de 200 paires para une boutique de surf en Ouidney. Empaqué chaque caja personalmente.
                </p>
                <p>
                  Para 2010, habíamos superado el garaje et nous mudamos a notre primer espacio de usine 
                  real. Añadimos moldeo par inyección, achatmos notre primera máquina CNC et contratamos 
                  un petit equipo de control de qualité. La boutique de surf en Ouidney? Siguen siendo 
                  clients. Sus commandes sont un poco plus grandes maintenant.
                </p>
                <p>
                  Aujourd'hui, operamos une instalation de 5,000 m² avec 5 gammes de production, plus de 150 
                  empleados et la capacidad de producir 10,000 paires par día. Hemos servido a plus de 
                  500 marques en plus de 50 pays — depuis startups de Kickstarter qui piden 100 paires 
                  jusqu'à cadenas retail qui piden 50,000. El taller desapaireeció hace tiempo, mais la 
                  mentalidad no: chaque paire sigue siendo inspeccionado comme si fuera para esa boutique de 
                  surf en Ouidney.
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
                Hacer qui la fabrication de lunettes de soleil de qualité sea accesible para marques de tous 
                los tailles. Ya seas un emprendedor individual avec un boceto en une servilleta ou une 
                cadena retail escalando a 100,000 unidades, mereces un socio de fabrication qui trate 
                votre marque comme la suya propia. Sin devis minimum requerido. Sin actitud. Solo buen 
                produit et comunication honesta.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Notre Vision</h2>
              <p className="text-gray-600">
                Ser la usine à la qui la próxima generation de grandes marques de lunettes signale et diga: 
                &quot;Ellos nous ayudaron a empezar.&quot; Ya hemos ayudado a lanzar cientos de marques. 
                Queremos ayudar a lanzar miles plus — et mantener creciendo a las qui ya hemos lanzado. 
                Votre éxito est notre meilleur marketing.
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
              <div className="text-primary-100">Ans dans le Negocio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Clients de Marques</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Países Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Paires Produites / An</div>
            </div>
          </div>
        </section>

        {/* Factory Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Capacidades de la Usine</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestra instalation está construida para la flexibilidad — producciones petites et commandes 
              grandes, OEM et ODM, designs simples e ingeniería compleja.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard
              icon="⚙️"
              title="5 Gammes de Production"
              description="Gammes dedichaques para montures de acétate, metal, TR90/inyección et matériaux mixtos. Chaque gamme optimizada para son tipo de matériau."
            />
            <CapabilityCard
              icon="📦"
              title="10,000 Pares / Día"
              description="Capacidad de production diaria en toutes las gammes. Podemos escalar jusqu'à 15,000/día durante la temporada alta avec turnos extra."
            />
            <CapabilityCard
              icon="📐"
              title="Instalation de 5,000 m²"
              description="Planta de production moderna avec zonas separadas para corte, ensamblaje, pulido, control de qualité et emballage. Limpia, organizada et eficiente."
            />
            <CapabilityCard
              icon="🔬"
              title="Laboratorio de QC Interno"
              description="Pruebas de transmisión UV, pruebas de impact, pruebas de ciclos de charnière et voirification dimensional — todo se realiza internamente antes de cualquier expédition."
            />
            <CapabilityCard
              icon="🎨"
              title="400+ Designs ODM"
              description="Catálogo de montures listos para marquer qui abarca aviadores, wayfarers, ojo de gato, envolventes deportivos, redondos, ovoirsized et styles infantiles."
            />
            <CapabilityCard
              icon="🛠️"
              title="Capacidad OEM Complète"
              description="Depuis votre archivo CAD jusqu'à el produit terminado. Fabrication de moldes personnalisés, prototipado CNC et muestreo de petits lotes antes de la production en masa."
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications et Conformité</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque produit qui nous expédions cumple avec los normees internationales de sécurité et qualité. 
              Estas no sont insignias qui coleccionamos — sont exigences qui nous tomamos en serio.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <CertCard
              name="CE"
              description="Conformidad Europea"
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
            />
            <CertCard
              name="FDA"
              description="Conformité EE.UU."
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
            />
            <CertCard
              name="UV400"
              description="100% Protection UV"
            />
            <CertCard
              name="ISO 9001"
              description="Gestión de Qualité"
              link="https://www.iso.org/iso-9001-quality-management.html"
            />
            <CertCard
              name="ANSI Z80.3"
              description="Nonrme Óptico EE.UU."
            />
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">L'Équipe Derrière le Produit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos plus de 150 personas apasionadas par fabricar exceverres lunettes de soleil. Ici están 
              algunas des caras avec las qui trabajarás directamente.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamCard
              initials="JC"
              name="Jacky Chen"
              role="Fundador et CEO"
              bio="Fundó EyeView en 2006 depuis un taller en un garaje. 20 ans de expérience en fabrication de lunettes. Sigue inspeccionando las échantillons personalmente."
            />
            <TeamCard
              initials="LW"
              name="Lisa Wang"
              role="Directora de Design"
              bio="Ex diseñadora de une importante casa de lunettes italiana. Se unió a EyeView en 2014. Lidera notre equipo de design de 8 personas et gestiona tous los proyectos OEM."
            />
            <TeamCard
              initials="DZ"
              name="David Zhang"
              role="Gerente de Production"
              bio="15 ans dans la planta de production. Supervisa las 5 gammes de production et plus de 80 trabajadores de production. Conocido par son obsesión avec la eficiencia."
            />
            <TeamCard
              initials="SC"
              name="Sarah Chen"
              role="Directora de Control de Qualité"
              bio="Formada en pruebas ópticas en un laboratorio suizo. Dirige notre depairetamento de QC avec un objetivo de tasa de defectos du 0.5%. Nada se envía sin son aprobation."
            />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce Que Disent Nons Clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Empezamos avec 200 paires ODM comme prueba. Tres ans después, pedimos 5,000 paires OEM personnalisés par trimestre. EyeView creció avec nosautres — jamais nous presionaron para commander plus de le qui estábamos preparados."
              name="Rachel M."
              title="Fundadora, Coastal Shade Co."
              location="Melbourne, Australia"
            />
            <TestimonialCard
              quote="Había tenido malas expériences avec dos usines antes de encontrar EyeView. La diferencia fue inmediata — el equipo de Jacky realmente escuchó le qui necesitaba en vez de simplemente cotizarme la opción plus barata. La qualité ha sido consistente en 12 commandes."
              name="Marcus T."
              title="CEO, Elevate Eyewear"
              location="Atlanta, EE.UU."
            />
            <TestimonialCard
              quote="El proceso de muestreo me convenció. Envoyeron cinco paires en diferentes matériaux para qui pudiera comparar lado a lado. Ninguna autre usine ofreció eso. Llevamos cuatro ans trabajando juntos et no tengo ninguna queja."
              name="Henrik S."
              title="Comprador, Nonrdic Optics"
              location="Estocolmo, Suecia"
            />
            <TestimonialCard
              quote="Comme startup sin expérience en lunettes, esperaba ser ignorado par las usines reales. EyeView trató mi primer commande de 100 pièces avec la même seriedad qui sus clients grandes. Esa lealtad funciona en ambas direcciones — maintenant somos une de sus cuentas plus grandes."
              name="Priya K."
              title="Fundadora, Dusk & Dawn Eyewear"
              location="Toronto, Canadá"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nons Valeurs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="Qualité Sin Excusas"
              description="Chaque paire se inspecciona. Chaque lente se prueba avec UV. Chaque charnière se somete a ciclos. Non nous expédions produit qui no pondríamos bajo notre propio nombre."
            />
            <ValueCard
              icon="🤝"
              title="Alianzas, Non Transacciones"
              description="El 80% de notres ingresos proviene de clients recurrentes. Preferimos ganarnos votre quinto commande a través de un gran servicio qui exprimir votre primer commande para el máximo marge."
            />
            <ValueCard
              icon="💬"
              title="Comunication Directa"
              description="Si algo va a tardar 60 jours, decimos 60 jours — no 30. Si un matériau no funciona para votre design, vous le decimos antes de qui desperdicies dinero en un molde. Sin sorpresas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Quieres Voir Lo Que Podemos Hacer par Votre Marque?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ya sea qui estés lanzando votre primera gamme ou escalando une marque existente, nous encantaría 
            convoirsar. Sin compromiso, sin presión de vente — solo une convoirsation honesta sur le qui 
            est posible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">
              Contactez-nous
            </Link>
            <Link href="/fr/produits" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hovoir:bg-white hovoir:text-gray-900 transition-couleurs">
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
      <a href={link} target="_blank" rel="noopener" className="bg-white rounded-xl p-6 text-center shadow hovoir:shadow-md transition-shadow block">
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
