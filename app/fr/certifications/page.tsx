import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certifications et Conformité des Lunettes de Soleil | FDA, CE, ISO 9001, UV400 - EyeView',
  description: 'Les lunettes de soleil EyeView répondent à toutes les normes internationales de sécurité. Enregistré FDA, certifié CE, ISO 9001, UV400, conforme ANSI Z80.3. Documentation complète disponible.',
  keywords: 'certifications lunettes de soleil, conformité FDA lunettes, certification CE lunettes, UV400, ISO 9001 lunettes, ANSI Z80.3, CPSIA lunettes enfants',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/certifications',
    languages: {
      'en': 'https://eyeviewsunglasses.com/certifications',
      'fr': 'https://eyeviewsunglasses.com/fr/certifications',
    },
  },
  openGraph: {
    title: 'Certifications et Conformité de Lunettes de Soleil | FDA, CE, ISO 9001, UV400 - EyeView',
    description: 'Las lunettes de soleil EyeView répondent à toutes les normes internationales de sécurité. Registrados en FDA, certificados CE, ISO 9001, UV400.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/certifications',
    locale: 'fr_FR',
  },
}

export default function CertificationsPageFr() {
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
              "name": "Accueil",
              "item": "https://eyeviewsunglasses.com/fr"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Certifications",
              "item": "https://eyeviewsunglasses.com/fr/certifications"
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
              "name": "Sus lunettes de soleil cumplen los exigences de la FDA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui. Toutes las lunettes de soleil EyeView cumplen avec la FDA 21 CFR 801.410, qui regula las lunettes de soleil comme dispositivos médicos de vente libre. Chaque paire se somete a pruebas de transmisión UV et résistance au impact según los exigences de la FDA. Proporcionamos documentation complète de conformité FDA avec chaque expédition a États-Unis."
              }
            },
            {
              "@type": "Question",
              "name": "Pueden proporcionar certificados CE para importation à la UE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutamente. Proporcionamos certificados CE conformes avec EN ISO 12312-1:2013 para toutes las lunettes de soleil enviadas à la Unión Europea. Chaque expédition incluye une Declaration de Conformidad, informes de pruebas de laboratorios acreditados et marquedo CE dans le produit. Hemos estado enviando lunettes de soleil avec certification CE a marchés de la UE depuis 2008."
              }
            },
            {
              "@type": "Question",
              "name": "Qué nivel de protection UV proporcionan sus verres?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Toutes las verres EyeView proporcionan protection UV400, qui bloquea el 99.9-100% de la radiation UVA et UVB jusqu'à 400 nanómetros. Esta est la clasification de protection UV plus alta disponible para lunettes de soleil. Chaque lote de verres se prueba avec un espectrofotómetro para voirificar los niveles de transmisión UV antes de qui continúe la production."
              }
            },
            {
              "@type": "Question",
              "name": "Proposez-vous informes de pruebas de terceros?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui. Proporcionamos informes de pruebas de terceros de laboratorios acreditados incluyendo SGS, Intertek et Bureau Voiritas. Los informes cubren transmisión UV, résistance au impact, potencia óptica et sécurité de matériaux. Estos informes se incluyen avec chaque expédition sin coût adicional."
              }
            },
            {
              "@type": "Question",
              "name": "Sus lunettes infantiles cumplen avec CPSIA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui. Toutes las lunettes de soleil infantiles EyeView cumplen avec los exigences CPSIA (Ley de Meilleura de la Sécurité de Produits de Consumo), incluyendo límites de contenido de plomo, restricciones de ftalatos et pruebas obligatorias de terceros par laboratorios aceptados par CPSC. Proporcionamos Certificados de Produit Infantil (CPC) para chaque commande de lunettes infantiles."
              }
            },
            {
              "@type": "Question",
              "name": "Puis-je usar sus certificados para el marketing de mi propia marque?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui. Quand nous fabriquons lunettes de soleil bajo votre marque (OEM/ODM), tous los certificados e informes de pruebas se emiten para el nombre de votre marque et las spécifications de votre produit. Puedes usar estos certificados en vos matériaux de marketing, emballage retail et documentation de conformité. Nonsautres nous encargamos de todo el papeleo — solo necesitas decirnos los detalles de votre marque."
              }
            }
          ]
        })}} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestras Certifications et Conformité
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprendí par las malas par qué el conformité importa. Hace unos ans, uno de notres clients 
            tuvo un expédition de 8,000 paires confiscado dans la aduana de Hamburgo — no parce qui las lunettes fueran 
            malas, sino parce qui son fournisseur anterior no había proporcionado la documentation CE adecuada. 
            Ocho mil paires, sentados en un almacén, invendibles. Ese client vino a nosautres, et nous asûremos 
            de qui jamais volviera a pasar. Chaque paire qui nous expédions sale de notre{' '}
            <Link href="/fr/a-propos" className="text-primary-600 hovoir:underline">usine</Link> avec 
            la documentation correcta, las pruebas correctas et las certifications correctas. Sin excepciones.
          </p>
        </div>

        {/* Certification Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications Internationales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos no sont solo logos en un sitio web. Chaque certification representa pruebas reales, 
              auditorías reales et trabajo de conformité real qui nous faisons para chaque commande.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              icon="🇺🇸"
              name="Enregistré FDA"
              standard="21 CFR 801.410"
              description="La FDA clasifica las lunettes de soleil comme dispositivos médicos de vente libre en EE.UU. Nuestra instalation está registrada dans la FDA, et chaque paire qui nous expédions a États-Unis cumple los exigences de résistance au impact et protection UV bajo 21 CFR 801.410. Nonsautres nous encargamos du conformité para qui votre despacho aduanero sea fluido."
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
              linkText="Voir Exigences FDA para Lunettes de Soleil →"
            />
            <CertificationCard
              icon="🇪🇺"
              name="Certifié CE"
              standard="EN ISO 12312-1:2013"
              description="Si vendes en Europa, el marquedo CE no est opcional — est la ley. Nuestras lunettes de soleil cumplen avec EN ISO 12312-1:2013, cubriendo protection UV, qualité óptica, résistance mecánica etiquetado. Chaque expédition à la UE incluye une Declaration de Conformidad. Sin plus sorpresas tipo Hamburgo."
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
              linkText="Más Sur el Marquedo CE →"
            />
            <CertificationCard
              icon="🏭"
              name="ISO 9001:2015"
              standard="Sistema de Gestión de Qualité"
              description="Todo notre proceso de fabrication — depuis la inspection de matrias primas jusqu'à el emballage final — opera bajo un sistema de gestión de qualité certificado ISO 9001:2015. Esto significa procedimientos documentados, auditorías internas regulares et meilleura continua. Non est emocionante, mais est la razón par la qui notre tasa de defectos se mantiene par debajo du 0.5%."
              link="https://www.iso.org/iso-9001-quality-management.html"
              linkText="Sur ISO 9001 →"
            />
            <CertificationCard
              icon="☀️"
              name="Protection UV400"
              standard="100% Bloqueo UVA/UVB"
              description={<>
                UV400 significa qui notres verres bloquean tous los rayos de luz avec longitudes de onda 
                de jusqu'à 400 nanómetros — eso cubre el 100% de la radiation UVA (315–400nm) et UVB (280–315nm). 
                Probamos chaque lote de verres avec un espectrofotómetro antes de qui continúe la production. 
                Si un lote no alcanza UV400, se rechaza. Punto. Conoce plus sur cómo probamos en notre{' '}
                <Link href="/fr/produits/polarise" className="text-primary-600 hovoir:underline">guía de verres</Link>.
              </>}
            />
            <CertificationCard
              icon="🔬"
              name="ANSI Z80.3"
              standard="Nonrme Óptico de EE.UU."
              description={<>
                ANSI Z80.3 est el Nonrme Nacional Americano para lunettes de soleil sin prescripción. Cubre 
                qualité óptica, transmitancia UV, résistance au impact e inflamabilidad. Aunque no est 
                legalmente requerido comme el registro FDA, los principales détaillants de EE.UU. le esperan — 
                et nosautres le cumplimos. Nuestras{' '}
                <Link href="/fr/produits/polarise" className="text-primary-600 hovoir:underline">verres polarisées</Link> se 
                prueban según las spécifications ANSI Z80.3 para claridad óptica et eficiencia de polarisation.
              </>}
              link="https://www.ansi.org/"
              linkText="Visitar ANSI →"
            />
            <CertificationCard
              icon="👶"
              name="Conformité CPSIA"
              standard="Sécurité de Produits Infantiles"
              description={<>
                Nuestras{' '}
                <Link href="/fr/produits/enfants" className="text-primary-600 hovoir:underline">lunettes de soleil infantiles</Link> cumplen 
                avec los exigences CPSIA para produits infantiles, incluyendo límites de contenido de plomo 
                (menos de 100 ppm), restricciones de ftalatos et pruebas obligatorias de terceros par laboratorios 
                aceptados par CPSC. Chaque commande infantil se envía avec un Certificado de Produit Infantil (CPC). 
                Parce qui quand se trata de la sécurité des enfants, no hay marge para atajos.
              </>}
              link="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/CPSIA"
              linkText="Guía Entrepriserial CPSIA →"
            />
          </div>
        </section>

        {/* Testing Process */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestra Inspection de QC de 6 Puntos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque paire de lunettes de soleil pasa par notre proceso de control de qualité de 6 puntos antes 
              de salir de la usine. Así est comme mannous avons une tasa de defectos par debajo du 0.5% 
              en millones de paires producidos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InspectionCard
              step={1}
              title="Prueba de Transmisión UV"
              description="Chaque lote de verres se prueba avec un espectrofotómetro para voirificar los niveles de protection UV400. Medimos la transmitancia en todo el espectro UV (280–400nm). Cualquier lote qui no bloquee el 99.9%+ de la radiation UV se rechaza — sin retrabajo, sin excepciones."
            />
            <InspectionCard
              step={2}
              title="Prueba de Résistance au Impact"
              description="Las verres se someten à la prueba de impact de bola caída según los normees FDA 21 CFR 801.410. Se deja caer une bola de acero de 16g depuis 127cm sur la lente. Si se agrieta, astilla ou rompe, el lote complet falla. Esta prueba est innegociable para expéditions a EE.UU."
            />
            <InspectionCard
              step={3}
              title="Prueba de Ciclos de Bisagra"
              description="Abrimos et cerramos chaque design de charnière plus de 2,000 veces usando equipos de prueba automatizados para simular ans de uso diario. Bisagras de resorte, charnières de barril, charnières flex — chaque tipo tiene son propio requisito de conteo de ciclos. Bisagras sueltas ou duras significan un redesign, no une aprobation."
            />
            <InspectionCard
              step={4}
              title="Voirification Dimensional"
              description="Las dimensiones du monture se miden contra la hoja de spécifications original usando calibres digitales et comparadores ópticos. Longitud de branche, ancho de pont, altura de lente — chaque medida debe estar dentro de la tolerancia de ±0.5mm. Así est comme asûremos la consistencia de tallas entre producciones."
            />
            <InspectionCard
              step={5}
              title="Control de Claridad de Lente"
              description={<>
                La claridad óptica se prueba para distorsión, ondulation et desviation de potencia. Usamos un 
                lensómetro para voirificar qui las verres sin prescripción tengan potencia óptica cero (±0.06 
                dioptrías máximo). Nadie quiere lunettes de soleil qui le den dolor de cabeza. Consulta notre{' '}
                <Link href="/fr/produits/polarise" className="text-primary-600 hovoir:underline">guía de tecnología de verres</Link> para 
                plus information sur cómo asûremos la qualité óptica.
              </>}
            />
            <InspectionCard
              step={6}
              title="Inspection Cosmética"
              description="La voirification final est visual. Chaque paire se inspecciona bajo ilumination estandarizada en busca de rayones, inconsistencias de couleur, revêtement desigual, bordes ásmaiss et defectos de ensamblaje. Nuestro equipo de QC usa une lista de voirification cosmética estandarizada de 22 puntos. Si no se ve bien, no se envía."
            />
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Lo Que Se Envía Con Chaque Commande</h2>
              <p className="text-gray-600 mb-6">
                La documentation de conformité no est algo secundario — est pairete de notre proceso de 
                production. Chaque expédition sale de notre{' '}
                <Link href="/fr/a-propos" className="text-primary-600 hovoir:underline">usine</Link> avec 
                un paquete de documentation complet. Votre agente aduanero et socios retail tendrán 
                todo le qui necesitan depuis el primer día.
              </p>
              <ul className="space-y-4">
                <DocumentItem
                  title="Informes de Pruebas de Terceros"
                  description="Informes de transmisión UV, résistance au impact et sécurité de matériaux de laboratorios acreditados (SGS, Intertek ou Bureau Voiritas). Emitidos según las spécifications de votre produit et nombre de marque."
                />
                <DocumentItem
                  title="Certificados de Conformité"
                  description="Certificados CE, cartas de conformité FDA et copias de certification ISO 9001. Tous vigentes et voirificables. Actualizados anualmente ou quand cambian los normees."
                />
                <DocumentItem
                  title="Declaration de Conformidad"
                  description="Declaration de Conformidad de la UE según EN ISO 12312-1:2013, listando votre marque comme fabricant/importador de registro. Lista para despacho aduanero de la UE."
                />
                <DocumentItem
                  title="Certificado de Produit Infantil (CPC)"
                  description="Para commandes de lunettes infantiles: CPC conforme avec CPSIA avec detalles du laboratorio de pruebas de terceros, normees aplicables e identification du produit. Requerido para tous los produits infantiles vendidos en EE.UU."
                />
                <DocumentItem
                  title="Hojas de Datos de Sécurité de Matériaux"
                  description="MSDS para tous los matériaux usados en production — matériaux de monture, revêtements de verres, componentes de charnière, matériaux de emballage. Esenciales para el conformité de importation en muchos marchés."
                />
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
              <span className="text-8xl block mb-6">📋</span>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-primary-700 font-medium">Documentation Incluida</div>
                <div className="text-primary-600 text-sm mt-2">Chaque commande. Chaque expédition.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estas sont las preguntas de conformité qui escuchamos avec plus frecuencia de nouveaus clients. 
              Si la tuya no está ici, solo pregunta — estamos encantados de ser específicos.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="Sus lunettes de soleil cumplen los exigences de la FDA?"
              answer="Oui. Toutes las lunettes de soleil EyeView cumplen avec la FDA 21 CFR 801.410, qui regula las lunettes de soleil comme dispositivos médicos de vente libre. Chaque paire se somete a pruebas de transmisión UV et résistance au impact según los exigences de la FDA. Proporcionamos documentation complète de conformité FDA avec chaque expédition a États-Unis."
            />
            <FAQItem
              question="Pueden proporcionar certificados CE para importation à la UE?"
              answer="Absolutamente. Proporcionamos certificados CE conformes avec EN ISO 12312-1:2013 para toutes las lunettes de soleil enviadas à la Unión Europea. Chaque expédition incluye une Declaration de Conformidad, informes de pruebas de laboratorios acreditados et marquedo CE dans le produit. Hemos estado enviando lunettes de soleil avec certification CE a marchés de la UE depuis 2008."
            />
            <FAQItem
              question="Qué nivel de protection UV proporcionan sus verres?"
              answer="Toutes las verres EyeView proporcionan protection UV400, qui bloquea el 99.9–100% de la radiation UVA et UVB jusqu'à 400 nanómetros. Esta est la clasification de protection UV plus alta disponible para lunettes de soleil. Chaque lote de verres se prueba avec un espectrofotómetro para voirificar los niveles de transmisión UV antes de qui continúe la production."
            />
            <FAQItem
              question="Proposez-vous informes de pruebas de terceros?"
              answer="Oui. Proporcionamos informes de pruebas de terceros de laboratorios acreditados incluyendo SGS, Intertek et Bureau Voiritas. Los informes cubren transmisión UV, résistance au impact, potencia óptica et sécurité de matériaux. Estos informes se incluyen avec chaque expédition sin coût adicional."
            />
            <FAQItem
              question="Sus lunettes infantiles cumplen avec CPSIA?"
              answer="Oui. Toutes las lunettes de soleil infantiles EyeView cumplen avec los exigences CPSIA, incluyendo límites de contenido de plomo (menos de 100 ppm), restricciones de ftalatos et pruebas obligatorias de terceros par laboratorios aceptados par CPSC. Chaque commande infantil se envía avec un Certificado de Produit Infantil (CPC)."
            />
            <FAQItem
              question="Puis-je usar sus certificados para el marketing de mi propia marque?"
              answer="Oui. Quand nous fabriquons lunettes de soleil bajo votre marque (OEM/ODM), tous los certificados e informes de pruebas se emiten para el nombre de votre marque et las spécifications de votre produit. Puedes usarlos en vos matériaux de marketing, emballage retail et documentation de conformité. Nonsautres nous encargamos de todo el papeleo — solo necesitas decirnos los detalles de votre marque."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Necesitas Documentation de Conformité?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ya sea qui necesites informes de pruebas para un commande existente, certificados para un nouveau 
            marché, ou simplemente quieras entender qué documentation necesitarás — contactez-nous. Te 
            conseguiremos la documentation correcta, rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="btn-primary">
              Demander la Documentation
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
          className="text-primary-600 text-sm font-medium hovoir:underline"
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
