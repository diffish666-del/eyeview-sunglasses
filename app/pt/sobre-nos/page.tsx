import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a EyeView | Fabricante de Óculos de Sol A partir de 2006 | Fábrica OEM y ODM',
  description: 'EyeView Sunglasses es un fabricante líder de óculos de sol OEM/ODM fundado en 2006. Mais de 500 clientes de marcas en mais de 50 países. Certificados CE, FDA, ISO 9001. Preços directos de fábrica.',
  keywords: 'fabricante de óculos de sol, fábrica de óculos, empresa de óculos OEM, proveedor de óculos China, sobre EyeView, fabricante de óculos',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/sobre-nos',
    languages: {
      'en': 'https://eyeviewsunglasses.com/about',
      'pt': 'https://eyeviewsunglasses.com/pt/sobre-nos',
    },
  },
  openGraph: {
    title: 'Sobre a EyeView | Fabricante de Óculos de Sol A partir de 2006',
    description: 'EyeView Sunglasses es un fabricante líder de óculos de sol OEM/ODM fundado en 2006. Mais de 500 clientes de marcas en mais de 50 países.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/sobre-nos',
    locale: 'pt_BR',
  },
}

export default function AboutPagePt() {
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
          "description": "Fabricante líder de óculos de sol OEM/ODM con mais de 500 clientes de marcas en mais de 50 países. Fábrica certificada CE, FDA, ISO 9001.",
          "address": { "@type": "PostalAddress", "addressCountry": "CN" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100, "maxValue": 200 },
          "sameAs": [],
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Chinese", "Spanish"] }
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a EyeView Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De un taller de dos personas en 2006 a una fábrica moderna que sirve a mais de 500 marcas en todo el mundo. 
            Esto es quiénes somos y por qué hacemos lo que hacemos.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EyeView comenzó en 2006 en un taller que, honestamente, no era mucho más grande que 
                  un garaje para dos coches. Éramos yo — Jacky Chen — y un técnico, puliendo armações 
                  de acetato a mano y ensamblando dobradiças manualmente. Nossa primera &quot;produção&quot; 
                  fue de 200 pares para una tienda de surf en Sídney. Empaqué cada caja personalmente.
                </p>
                <p>
                  Para 2010, habíamos superado el garaje y nos mudamos a nosso primer espacio de fábrica 
                  real. Añadimos moldeo por inyección, compramos nossa primera máquina CNC y contratamos 
                  un pequeño equipo de control de qualidade. ¿La tienda de surf en Sídney? Siguen siendo 
                  clientes. Sus pedidos son un poco más grandes ahora.
                </p>
                <p>
                  Hoy, operamos una instalación de 5,000 m² con 5 líneas de produção, mais de 150 
                  empleados y la capacidad de producir 10,000 pares por día. Hemos servido a mais de 
                  500 marcas en mais de 50 países — a partir de startups de Kickstarter que piden 100 pares 
                  hasta cadenas retail que piden 50,000. El taller desapareció hace tiempo, pero la 
                  mentalidad no: cada par sigue siendo inspeccionado como si fuera para esa tienda de 
                  surf en Sídney.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-4">🏭</span>
                <span className="text-primary-600 font-medium">A partir de 2006</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nossa Misión</h2>
              <p className="text-gray-600">
                Hacer que la fabricação de óculos de sol de qualidade sea accesible para marcas de todos 
                los tamanos. Ya seas un emprendedor individual con un boceto en una servilleta o una 
                cadena retail escalando a 100,000 unidades, mereces un socio de fabricação que trate 
                tu marca como la suya propia. Sin presupuesto mínimo requerido. Sin actitud. Solo buen 
                producto y comunicación honesta.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Nossa Visión</h2>
              <p className="text-gray-600">
                Ser la fábrica a la que la próxima generación de grandes marcas de óculos señale y diga: 
                &quot;Ellos nos ayudaron a empezar.&quot; Ya hemos ayudado a lanzar cientos de marcas. 
                Queremos ayudar a lanzar miles más — y mantener creciendo a las que ya hemos lanzado. 
                Tu éxito es nosso mejor marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">EyeView em Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">19+</div>
              <div className="text-primary-100">Anos en el Negocio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Clientes de Marcas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Países Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Pares Producidos / Año</div>
            </div>
          </div>
        </section>

        {/* Factory Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Capacidades da Fábrica</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa instalación está construida para la flexibilidad — producciones pequeñas y pedidos 
              grandes, OEM y ODM, designs simples e ingeniería compleja.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard
              icon="⚙️"
              title="5 Líneas de Produção"
              description="Líneas dedicadas para armações de acetato, metal, TR90/inyección y materiales mixtos. Cada línea optimizada para su tipo de material."
            />
            <CapabilityCard
              icon="📦"
              title="10,000 Pares / Día"
              description="Capacidad de produção diaria en todas las líneas. Podemos escalar hasta 15,000/día durante la temporada alta con turnos extra."
            />
            <CapabilityCard
              icon="📐"
              title="Instalación de 5,000 m²"
              description="Planta de produção moderna con zonas separadas para corte, ensamblaje, pulido, control de qualidade y embalagem. Limpia, organizada y eficiente."
            />
            <CapabilityCard
              icon="🔬"
              title="Laboratorio de QC Interno"
              description="Pruebas de transmisión UV, pruebas de impacto, pruebas de ciclos de dobradiça y verificación dimensional — todo se realiza internamente antes de cualquier envio."
            />
            <CapabilityCard
              icon="🎨"
              title="400+ Designs ODM"
              description="Catálogo de armações listos para marcar que abarca aviadores, wayfarers, olho de gato, envolventes esportivos, redondos, oversized y estilos infantiles."
            />
            <CapabilityCard
              icon="🛠️"
              title="Capacidad OEM Completa"
              description="A partir de tu archivo CAD hasta el producto terminado. Fabricação de moldes personalizados, prototipado CNC y muestreo de pequeños lotes antes de la produção en masa."
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificações y Conformidade</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada producto que enviamos cumple con los estándares internacionales de seguridad y qualidade. 
              Estas no son insignias que coleccionamos — son requisitos que nos tomamos en serio.
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
              description="Conformidade EE.UU."
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
            />
            <CertCard
              name="UV400"
              description="100% Proteção UV"
            />
            <CertCard
              name="ISO 9001"
              description="Gestión de Qualidade"
              link="https://www.iso.org/iso-9001-quality-management.html"
            />
            <CertCard
              name="ANSI Z80.3"
              description="Estándar Óptico EE.UU."
            />
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">As Pessoas Por Trás do Produto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos mais de 150 personas apasionadas por fabricar excelentes óculos de sol. Aquí están 
              algunas de las caras con las que trabajarás directamente.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamCard
              initials="JC"
              name="Jacky Chen"
              role="Fundador y CEO"
              bio="Fundó EyeView en 2006 a partir de un taller en un garaje. 20 anos de experiencia en fabricação de óculos. Sigue inspeccionando las amostras personalmente."
            />
            <TeamCard
              initials="LW"
              name="Lisa Wang"
              role="Directora de Design"
              bio="Ex diseñadora de una importante casa de óculos italiana. Se unió a EyeView en 2014. Lidera nosso equipo de design de 8 personas y gestiona todos los proyectos OEM."
            />
            <TeamCard
              initials="DZ"
              name="David Zhang"
              role="Gerente de Produção"
              bio="15 anos en la planta de produção. Supervisa las 5 líneas de produção y mais de 80 trabajadores de produção. Conocido por su obsesión con la eficiencia."
            />
            <TeamCard
              initials="SC"
              name="Sarah Chen"
              role="Directora de Control de Qualidade"
              bio="Formada en pruebas ópticas en un laboratorio suizo. Dirige nosso departamento de QC con un objetivo de tasa de defectos del 0.5%. Nada se envía sin su aprobación."
            />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo Que Dicen Nossos Clientes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Empezamos con 200 pares ODM como prueba. Tres anos después, pedimos 5,000 pares OEM personalizados por trimestre. EyeView creció con nosotros — nunca nos presionaron para pedir mais de lo que estábamos preparados."
              name="Rachel M."
              title="Fundadora, Coastal Shade Co."
              location="Melbourne, Australia"
            />
            <TestimonialCard
              quote="Había tenido malas experiencias con dos fábricas antes de encontrar EyeView. La diferencia fue inmediata — el equipo de Jacky realmente escuchó lo que necesitaba en vez de simplemente cotizarme la opción más barata. La qualidade ha sido consistente en 12 pedidos."
              name="Marcus T."
              title="CEO, Elevate Eyewear"
              location="Atlanta, EE.UU."
            />
            <TestimonialCard
              quote="El proceso de muestreo me convenció. Enviaron cinco pares en diferentes materiales para que pudiera comparar lado a lado. Ninguna otra fábrica ofreció eso. Llevamos cuatro anos trabajando juntos y no tengo ninguna queja."
              name="Henrik S."
              title="Comprador, Nordic Optics"
              location="Estocolmo, Suecia"
            />
            <TestimonialCard
              quote="Como startup sin experiencia en óculos, esperaba ser ignorado por las fábricas reales. EyeView trató mi primer pedido de 100 peças con la misma seriedad que sus clientes grandes. Esa lealtad funciona en ambas direcciones — ahora somos una de sus cuentas más grandes."
              name="Priya K."
              title="Fundadora, Dusk & Dawn Eyewear"
              location="Toronto, Canadá"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O Que Defendemos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="Qualidade Sin Excusas"
              description="Cada par se inspecciona. Cada lente se prueba con UV. Cada dobradiça se somete a ciclos. No enviamos producto que no pondríamos bajo nosso propio nombre."
            />
            <ValueCard
              icon="🤝"
              title="Alianzas, No Transacciones"
              description="El 80% de nossos ingresos proviene de clientes recurrentes. Preferimos ganarnos tu quinto pedido a través de un gran servicio que exprimir tu primer pedido para el máximo margen."
            />
            <ValueCard
              icon="💬"
              title="Comunicación Directa"
              description="Si algo va a tardar 60 dias, decimos 60 dias — no 30. Si un material no funciona para tu design, te lo decimos antes de que desperdicies dinero en un molde. Sin sorpresas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Quer Ver Lo Que Podemos Hacer por Tu Marca?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ya sea que estés lanzando tu primera línea o escalando una marca existente, nos encantaría 
            conversar. Sin compromiso, sin presión de venta — solo una conversación honesta sobre lo que 
            es posible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">
              Entre em Contato
            </Link>
            <Link href="/pt/produtos" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Ver Produtos
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
