import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificações y Conformidade de Óculos de Sol | FDA, CE, ISO 9001, UV400 - EyeView',
  description: 'Las óculos de sol EyeView cumplen todos los estándares internacionales de seguridad. Registrados en FDA, certificados CE, ISO 9001, UV400, conformidade ANSI Z80.3. Documentación completa disponível.',
  keywords: 'certificacoes óculos de sol, conformidade FDA óculos, certificación CE óculos, UV400, ISO 9001 óculos, ANSI Z80.3, CPSIA óculos infantiles',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/certificacoes',
    languages: {
      'en': 'https://eyeviewsunglasses.com/certifications',
      'pt': 'https://eyeviewsunglasses.com/pt/certificacoes',
    },
  },
  openGraph: {
    title: 'Certificações y Conformidade de Óculos de Sol | FDA, CE, ISO 9001, UV400 - EyeView',
    description: 'Las óculos de sol EyeView cumplen todos los estándares internacionales de seguridad. Registrados en FDA, certificados CE, ISO 9001, UV400.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/certificacoes',
    locale: 'pt_BR',
  },
}

export default function CertificationsPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": "https://eyeviewsunglasses.com/pt"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Certificações",
              "item": "https://eyeviewsunglasses.com/pt/certificacoes"
            }
          ]
        })}} />

        {/* FAQPage Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Sus óculos de sol cumplen los requisitos de la FDA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Todas las óculos de sol EyeView cumplen con la FDA 21 CFR 801.410, que regula las óculos de sol como dispositivos médicos de venta libre. Cada par se somete a pruebas de transmisión UV y resistencia al impacto según los requisitos de la FDA. Proporcionamos documentación completa de conformidade FDA con cada envio a Estados Unidos."
              }
            },
            {
              "@type": "Question",
              "name": "¿Pueden proporcionar certificados CE para importación a la UE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutamente. Proporcionamos certificados CE conformes con EN ISO 12312-1:2013 para todas las óculos de sol enviadas a la Unión Europea. Cada envio incluye una Declaración de Conformidad, informes de pruebas de laboratorios acreditados y marcado CE en el producto. Hemos estado enviando óculos de sol con certificación CE a mercados de la UE a partir de 2008."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué nivel de proteção UV proporcionan sus lentes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Todas las lentes EyeView proporcionan proteção UV400, que bloquea el 99.9-100% de la radiación UVA y UVB hasta 400 nanómetros. Esta es la clasificación de proteção UV más alta disponível para óculos de sol. Cada lote de lentes se prueba con un espectrofotómetro para verificar los niveles de transmisión UV antes de que continúe la produção."
              }
            },
            {
              "@type": "Question",
              "name": "¿Ofrecen informes de pruebas de terceros?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Proporcionamos informes de pruebas de terceros de laboratorios acreditados incluindo SGS, Intertek y Bureau Veritas. Los informes cubren transmisión UV, resistencia al impacto, potencia óptica y seguridad de materiales. Estos informes se incluyen con cada envio sin costo adicional."
              }
            },
            {
              "@type": "Question",
              "name": "¿Sus óculos infantiles cumplen con CPSIA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Todas las óculos de sol infantiles EyeView cumplen con los requisitos CPSIA (Ley de Mejora de la Seguridad de Produtos de Consumo), incluindo límites de contenido de plomo, restricciones de ftalatos y pruebas obligatorias de terceros por laboratorios aceptados por CPSC. Proporcionamos Certificados de Producto Infantil (CPC) para cada pedido de óculos infantiles."
              }
            },
            {
              "@type": "Question",
              "name": "¿Puedo usar sus certificados para el marketing de mi propia marca?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Cuando fabricamos óculos de sol bajo tu marca (OEM/ODM), todos los certificados e informes de pruebas se emiten para el nombre de tu marca y las especificaciones de tu producto. Puedes usar estos certificados en tus materiales de marketing, embalagem retail y documentación de conformidade. Nosotros nos encargamos de todo el papeleo — solo necesitas decirnos los detalles de tu marca."
              }
            }
          ]
        })}} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Certificações y Conformidade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprendí por las malas por qué el conformidade importa. Hace unos anos, uno de nossos clientes 
            tuvo un envio de 8,000 pares confiscado en la aduana de Hamburgo — no porque las óculos fueran 
            malas, sino porque su proveedor anterior no había proporcionado la documentación CE adecuada. 
            Ocho mil pares, sentados en un almacén, invendibles. Ese cliente vino a nosotros, y nos aseguramos 
            de que nunca volviera a pasar. Cada par que enviamos sale de nossa{' '}
            <Link href="/pt/sobre-nos" className="text-primary-600 hover:underline">fábrica</Link> con 
            la documentación correcta, las pruebas correctas y las certificacoes correctas. Sin excepciones.
          </p>
        </div>

        {/* Certification Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificações Internacionales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos no son solo logos en un sitio web. Cada certificación representa pruebas reales, 
              auditorías reales y trabajo de conformidade real que hacemos para cada pedido.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              icon="🇺🇸"
              name="Registrado en FDA"
              standard="21 CFR 801.410"
              description="La FDA clasifica las óculos de sol como dispositivos médicos de venta libre en EE.UU. Nossa instalación está registrada en la FDA, y cada par que enviamos a Estados Unidos cumple los requisitos de resistencia al impacto y proteção UV bajo 21 CFR 801.410. Nosotros nos encargamos del conformidade para que tu despacho aduanero sea fluido."
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
              linkText="Ver Requisitos FDA para Óculos de Sol →"
            />
            <CertificationCard
              icon="🇪🇺"
              name="Certificado CE"
              standard="EN ISO 12312-1:2013"
              description="Si vendes en Europa, el marcado CE no es opcional — es la ley. Nossas óculos de sol cumplen con EN ISO 12312-1:2013, cubriendo proteção UV, qualidade óptica, resistencia mecánica y etiquetado. Cada envio a la UE incluye una Declaración de Conformidad. Sin más sorpresas tipo Hamburgo."
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
              linkText="Más Sobre el Marcado CE →"
            />
            <CertificationCard
              icon="🏭"
              name="ISO 9001:2015"
              standard="Sistema de Gestión de Qualidade"
              description="Todo nosso proceso de fabricação — a partir de la inspección de materias primas hasta el embalagem final — opera bajo un sistema de gestión de qualidade certificado ISO 9001:2015. Esto significa procedimientos documentados, auditorías internas regulares y mejora continua. No es emocionante, pero es la razón por la que nossa tasa de defectos se mantiene por debajo del 0.5%."
              link="https://www.iso.org/iso-9001-quality-management.html"
              linkText="Sobre ISO 9001 →"
            />
            <CertificationCard
              icon="☀️"
              name="Proteção UV400"
              standard="100% Bloqueo UVA/UVB"
              description={<>
                UV400 significa que nossas lentes bloquean todos los rayos de luz con longitudes de onda 
                de hasta 400 nanómetros — eso cubre el 100% de la radiación UVA (315–400nm) y UVB (280–315nm). 
                Probamos cada lote de lentes con un espectrofotómetro antes de que continúe la produção. 
                Si un lote no alcanza UV400, se rechaza. Punto. Conoce más sobre cómo probamos en nossa{' '}
                <Link href="/pt/produtos/polarizado" className="text-primary-600 hover:underline">guía de lentes</Link>.
              </>}
            />
            <CertificationCard
              icon="🔬"
              name="ANSI Z80.3"
              standard="Estándar Óptico de EE.UU."
              description={<>
                ANSI Z80.3 es el Estándar Nacional Americano para óculos de sol sin prescripción. Cubre 
                qualidade óptica, transmitancia UV, resistencia al impacto e inflamabilidad. Aunque no es 
                legalmente requerido como el registro FDA, los principales minoristas de EE.UU. lo esperan — 
                y nosotros lo cumplimos. Nossas{' '}
                <Link href="/pt/produtos/polarizado" className="text-primary-600 hover:underline">lentes polarizados</Link> se 
                prueban según las especificaciones ANSI Z80.3 para claridad óptica y eficiencia de polarización.
              </>}
              link="https://www.ansi.org/"
              linkText="Visitar ANSI →"
            />
            <CertificationCard
              icon="👶"
              name="Conformidade CPSIA"
              standard="Seguridad de Produtos Infantiles"
              description={<>
                Nossas{' '}
                <Link href="/pt/produtos/infantil" className="text-primary-600 hover:underline">óculos de sol infantiles</Link> cumplen 
                con los requisitos CPSIA para produtos infantiles, incluindo límites de contenido de plomo 
                (menos de 100 ppm), restricciones de ftalatos y pruebas obligatorias de terceros por laboratorios 
                aceptados por CPSC. Cada pedido infantil se envía con un Certificado de Producto Infantil (CPC). 
                Porque cuando se trata de la seguridad de los crianças, no hay margen para atajos.
              </>}
              link="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/CPSIA"
              linkText="Guía Empresarial CPSIA →"
            />
          </div>
        </section>

        {/* Testing Process */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Inspección de QC de 6 Puntos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada par de óculos de sol pasa por nosso proceso de control de qualidade de 6 puntos antes 
              de salir de la fábrica. Así es como mantenemos una tasa de defectos por debajo del 0.5% 
              en millones de pares producidos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InspectionCard
              step={1}
              title="Prueba de Transmisión UV"
              description="Cada lote de lentes se prueba con un espectrofotómetro para verificar los niveles de proteção UV400. Medimos la transmitancia en todo el espectro UV (280–400nm). Cualquier lote que no bloquee el 99.9%+ de la radiación UV se rechaza — sin retrabajo, sin excepciones."
            />
            <InspectionCard
              step={2}
              title="Prueba de Resistencia al Impacto"
              description="Las lentes se someten a la prueba de impacto de bola caída según los estándares FDA 21 CFR 801.410. Se deja caer una bola de acero de 16g a partir de 127cm sobre la lente. Si se agrieta, astilla o rompe, el lote completo falla. Esta prueba es innegociable para envios a EE.UU."
            />
            <InspectionCard
              step={3}
              title="Prueba de Ciclos de Dobradiça"
              description="Abrimos y cerramos cada design de dobradiça mais de 2,000 veces usando equipos de prueba automatizados para simular anos de uso diario. Dobradiças de resorte, dobradiças de barril, dobradiças flex — cada tipo tiene su propio requisito de conteo de ciclos. Dobradiças sueltas o duras significan un redesign, no una aprobación."
            />
            <InspectionCard
              step={4}
              title="Verificación Dimensional"
              description="Las dimensiones del armação se miden contra la hoja de especificaciones original usando calibres digitales y comparadores ópticos. Longitud de haste, ancho de ponte, altura de lente — cada medida debe estar dentro de la tolerancia de ±0.5mm. Así es como aseguramos la consistencia de tallas entre producciones."
            />
            <InspectionCard
              step={5}
              title="Control de Claridad de Lente"
              description={<>
                La claridad óptica se prueba para distorsión, ondulación y desviación de potencia. Usamos un 
                lensómetro para verificar que las lentes sin prescripción tengan potencia óptica cero (±0.06 
                dioptrías máximo). Nadie quiere óculos de sol que le den dolor de cabeza. Consulta nossa{' '}
                <Link href="/pt/produtos/polarizado" className="text-primary-600 hover:underline">guía de tecnología de lentes</Link> para 
                más información sobre cómo aseguramos la qualidade óptica.
              </>}
            />
            <InspectionCard
              step={6}
              title="Inspección Cosmética"
              description="La verificación final es visual. Cada par se inspecciona bajo iluminación estandarizada en busca de rayones, inconsistencias de color, recubrimiento desigual, bordes ásperos y defectos de ensamblaje. Nosso equipo de QC usa una lista de verificación cosmética estandarizada de 22 puntos. Si no se ve bien, no se envía."
            />
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O Que É Enviado Com Cada Pedido</h2>
              <p className="text-gray-600 mb-6">
                La documentación de conformidade no es algo secundario — es parte de nosso proceso de 
                produção. Cada envio sale de nossa{' '}
                <Link href="/pt/sobre-nos" className="text-primary-600 hover:underline">fábrica</Link> con 
                un paquete de documentación completo. Tu agente aduanero y socios retail tendrán 
                todo lo que necesitan a partir de el primer día.
              </p>
              <ul className="space-y-4">
                <DocumentItem
                  title="Informes de Pruebas de Terceros"
                  description="Informes de transmisión UV, resistencia al impacto y seguridad de materiales de laboratorios acreditados (SGS, Intertek o Bureau Veritas). Emitidos según las especificaciones de tu producto y nombre de marca."
                />
                <DocumentItem
                  title="Certificados de Conformidade"
                  description="Certificados CE, cartas de conformidade FDA y copias de certificación ISO 9001. Todos vigentes y verificables. Actualizados anualmente o cuando cambian los estándares."
                />
                <DocumentItem
                  title="Declaración de Conformidad"
                  description="Declaración de Conformidad de la UE según EN ISO 12312-1:2013, listando tu marca como fabricante/importador de registro. Lista para despacho aduanero de la UE."
                />
                <DocumentItem
                  title="Certificado de Producto Infantil (CPC)"
                  description="Para pedidos de óculos infantiles: CPC conforme con CPSIA con detalles del laboratorio de pruebas de terceros, estándares aplicables e identificación del producto. Requerido para todos los produtos infantiles vendidos en EE.UU."
                />
                <DocumentItem
                  title="Hojas de Datos de Seguridad de Materiales"
                  description="MSDS para todos los materiales usados en produção — materiales de armação, recubrimientos de lentes, componentes de dobradiça, materiales de embalagem. Esenciales para el conformidade de importación en muchos mercados."
                />
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
              <span className="text-8xl block mb-6">📋</span>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-primary-700 font-medium">Documentación Incluida</div>
                <div className="text-primary-600 text-sm mt-2">Cada pedido. Cada envio.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estas son las preguntas de conformidade que escuchamos con más frecuencia de nuevos clientes. 
              Si la tuya no está aquí, solo pregunta — estamos encantados de ser específicos.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="¿Sus óculos de sol cumplen los requisitos de la FDA?"
              answer="Sí. Todas las óculos de sol EyeView cumplen con la FDA 21 CFR 801.410, que regula las óculos de sol como dispositivos médicos de venta libre. Cada par se somete a pruebas de transmisión UV y resistencia al impacto según los requisitos de la FDA. Proporcionamos documentación completa de conformidade FDA con cada envio a Estados Unidos."
            />
            <FAQItem
              question="¿Pueden proporcionar certificados CE para importación a la UE?"
              answer="Absolutamente. Proporcionamos certificados CE conformes con EN ISO 12312-1:2013 para todas las óculos de sol enviadas a la Unión Europea. Cada envio incluye una Declaración de Conformidad, informes de pruebas de laboratorios acreditados y marcado CE en el producto. Hemos estado enviando óculos de sol con certificación CE a mercados de la UE a partir de 2008."
            />
            <FAQItem
              question="¿Qué nivel de proteção UV proporcionan sus lentes?"
              answer="Todas las lentes EyeView proporcionan proteção UV400, que bloquea el 99.9–100% de la radiación UVA y UVB hasta 400 nanómetros. Esta es la clasificación de proteção UV más alta disponível para óculos de sol. Cada lote de lentes se prueba con un espectrofotómetro para verificar los niveles de transmisión UV antes de que continúe la produção."
            />
            <FAQItem
              question="¿Ofrecen informes de pruebas de terceros?"
              answer="Sí. Proporcionamos informes de pruebas de terceros de laboratorios acreditados incluindo SGS, Intertek y Bureau Veritas. Los informes cubren transmisión UV, resistencia al impacto, potencia óptica y seguridad de materiales. Estos informes se incluyen con cada envio sin costo adicional."
            />
            <FAQItem
              question="¿Sus óculos infantiles cumplen con CPSIA?"
              answer="Sí. Todas las óculos de sol infantiles EyeView cumplen con los requisitos CPSIA, incluindo límites de contenido de plomo (menos de 100 ppm), restricciones de ftalatos y pruebas obligatorias de terceros por laboratorios aceptados por CPSC. Cada pedido infantil se envía con un Certificado de Producto Infantil (CPC)."
            />
            <FAQItem
              question="¿Puedo usar sus certificados para el marketing de mi propia marca?"
              answer="Sí. Cuando fabricamos óculos de sol bajo tu marca (OEM/ODM), todos los certificados e informes de pruebas se emiten para el nombre de tu marca y las especificaciones de tu producto. Puedes usarlos en tus materiales de marketing, embalagem retail y documentación de conformidade. Nosotros nos encargamos de todo el papeleo — solo necesitas decirnos los detalles de tu marca."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Documentación de Conformidade?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ya sea que necesites informes de pruebas para un pedido existente, certificados para un nuevo 
            mercado, o simplemente quieras entender qué documentación necesitarás — contáctanos. Te 
            conseguiremos la documentación correcta, rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">
              Solicitar Documentação
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

function CertificationCard({ icon, name, standard, description, link, linkText }: {
  icon: string
  name: string
  standard: string
  description: string | React.ReactNode
  link?: string
  linkText?: string
}) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm text-primary-600 font-medium mb-3">{standard}</p>
      <div className="text-gray-600 text-sm mb-4">{description}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 text-sm font-medium hover:underline"
        >
          {linkText}
        </a>
      )}
    </div>
  )
}

function InspectionCard({ step, title, description }: {
  step: number
  title: string
  description: string | React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  )
}

function DocumentItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex gap-3">
      <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </li>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl shadow p-6 cursor-pointer">
      <summary className="font-bold text-gray-900 list-none flex items-center justify-between">
        <span>{question}</span>
        <span className="text-primary-600 text-xl group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-600 mt-4">{answer}</p>
    </details>
  )
}
