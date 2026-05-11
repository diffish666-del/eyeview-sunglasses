import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificación FDA y CE para Gafas de Sol: Guía Completa de Cumplimiento',
  description: 'Un dueño de fábrica explica el registro FDA, marcado CE, pruebas UV y estándares ANSI para gafas de sol. Guía paso a paso para vender gafas en EE.UU., la UE y globalmente.',
  keywords: 'certificación FDA gafas de sol, marcado CE gafas, cumplimiento normativo gafas, pruebas UV gafas, ANSI Z80.3, EN ISO 12312-1, regulaciones gafas de sol',
  alternates: {
    canonical: '/es/blog/certificacion-fda-ce-gafas',
    languages: {
      'en': '/blog/fda-ce-certification-sunglasses',
      'es': '/es/blog/certificacion-fda-ce-gafas',
    },
  },
}

export default function CertificacionFdaCeGafasPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Certificación FDA y CE para Gafas de Sol: Guía Completa de Cumplimiento",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica explica el registro FDA, marcado CE, pruebas UV y requisitos de cumplimiento para vender gafas de sol globalmente.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/certificacion-fda-ce-gafas" },
          "inLanguage": "es"
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Las gafas de sol necesitan aprobación FDA para venderse en EE.UU.?",
              "acceptedAnswer": { "@type": "Answer", "text": "Las gafas de sol no necesitan 'aprobación' FDA pero sí cumplimiento FDA. La FDA clasifica las gafas como dispositivos médicos (Clase I) bajo 21 CFR 886.5850. Los fabricantes e importadores deben registrar su establecimiento con la FDA y listar sus productos. Las lentes también deben cumplir requisitos de resistencia al impacto bajo 21 CFR 801.410." }
            },
            {
              "@type": "Question",
              "name": "¿Qué es el marcado CE para gafas de sol?",
              "acceptedAnswer": { "@type": "Answer", "text": "El marcado CE indica que las gafas cumplen los requisitos de seguridad, salud y medio ambiente de la UE. Para gafas de sol, el estándar clave es EN ISO 12312-1, que cubre protección UV, calidad óptica y resistencia mecánica. Es obligatorio para vender en la UE, EEE y Reino Unido." }
            },
            {
              "@type": "Question",
              "name": "¿Cuánto cuestan las pruebas de cumplimiento para gafas de sol?",
              "acceptedAnswer": { "@type": "Answer", "text": "Pruebas UV400 básicas cuestan $100-$300 por estilo. Pruebas completas de cumplimiento (UV, resistencia al impacto, calidad óptica, verificación de categoría de lente) cuestan $300-$800 por estilo. El registro FDA es gratuito. La documentación CE cuesta $200-$500 si contratas un consultor." }
            },
            {
              "@type": "Question",
              "name": "¿Pueden confiscar mis gafas de sol en aduanas por incumplimiento?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las aduanas de EE.UU. pueden retener gafas sin registro FDA adecuado. Las aduanas de la UE confiscan regularmente envíos sin marcado CE. Australia es particularmente estricta — las gafas no conformes son rutinariamente destruidas. He visto personalmente a clientes perder envíos completos de $10.000-$50.000 por documentación faltante." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Cumplimiento</span>
            <span>4 de mayo de 2026</span>
            <span>•</span>
            <span>15 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificación FDA y CE para Gafas de Sol: Guía Completa de Cumplimiento
          </h1>
          <p className="text-xl text-gray-600">
            Nadie empieza una marca de gafas porque le emocione el cumplimiento normativo. 
            Pero si te saltas este paso, tus gafas podrían ser confiscadas en aduanas — o algo peor. 
            Aquí va todo lo que necesitas saber, simplificado.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice de Contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#por-que-importa" className="text-primary-600 hover:underline">Por Qué el Cumplimiento Importa (Historias Reales de Terror)</a></li>
            <li><a href="#fda-eeuu" className="text-primary-600 hover:underline">Requisitos FDA: Vender Gafas en EE.UU.</a></li>
            <li><a href="#ce-ue" className="text-primary-600 hover:underline">Marcado CE: Vender Gafas en la UE</a></li>
            <li><a href="#proteccion-uv" className="text-primary-600 hover:underline">Estándares de Protección UV</a></li>
            <li><a href="#ansi" className="text-primary-600 hover:underline">ANSI Z80.3: El Estándar Óptico de EE.UU.</a></li>
            <li><a href="#otros-mercados" className="text-primary-600 hover:underline">Otros Mercados: Australia, Reino Unido, Japón</a></li>
            <li><a href="#costos-pruebas" className="text-primary-600 hover:underline">Costos de Pruebas y Dónde Hacerlas</a></li>
            <li><a href="#rol-fabrica" className="text-primary-600 hover:underline">Qué Debe Proporcionarte Tu Fábrica</a></li>
            <li><a href="#checklist" className="text-primary-600 hover:underline">Tu Checklist de Cumplimiento</a></li>
            <li><a href="#preguntas" className="text-primary-600 hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Llevo exportando gafas de sol 20 años. En ese tiempo, he visto a tres clientes perder envíos 
            completos por confiscación en aduanas — más de $120.000 en producto destruido en total. Cada 
            caso era prevenible. Las pruebas habrían costado menos de $500.
          </p>

          <h2 id="por-que-importa" className="text-3xl font-bold mt-16 mb-6">Por Qué el Cumplimiento Importa (Historias Reales de Terror)</h2>
          <p>
            Déjame contarte sobre Carlos. Era un dueño de marca primerizo de Miami que pidió 3.000 pares 
            de gafas en 2023. Monturas hermosas, gran calidad, $18.000 de inversión. Las envió por mar a 
            Port Miami. Las aduanas de EE.UU. marcaron el envío porque carecía de documentación de registro 
            FDA. La mercancía fue retenida 45 días mientras Carlos se apresuraba a registrarse y poner el 
            papeleo en orden. Para cuando recibió sus gafas, había perdido toda su ventana de lanzamiento de verano.
          </p>
          <p>
            El cumplimiento no es glamuroso. Pero es la diferencia entre un lanzamiento fluido y un desastre muy costoso.
          </p>

          <h2 id="fda-eeuu" className="text-3xl font-bold mt-16 mb-6">Requisitos FDA: Vender Gafas de Sol en EE.UU.</h2>
          <p>
            Algo que sorprende a la mayoría: <strong>la FDA clasifica las gafas de sol como dispositivos 
            médicos</strong>. Específicamente, dispositivos médicos Clase I bajo 21 CFR 886.5850. No te 
            asustes — Clase I es la categoría de menor riesgo, y los requisitos son directos.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Paso 1: Registro de Establecimiento FDA</h3>
            <p className="text-blue-800">
              Todo fabricante e importador de gafas vendidas en EE.UU. debe registrarse con la FDA a través del{' '}
              <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/device-registration-and-listing" target="_blank" rel="noopener" className="underline">sistema FURLS de la FDA</a>. 
              El registro es gratuito pero debe renovarse anualmente.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Paso 2: Listado de Productos</h3>
            <p className="text-blue-800">
              Después del registro, debes listar tus productos en la base de datos de la FDA. Incluye código 
              de producto (HQF para gafas sin prescripción), nombre de marca y números de modelo. También 
              gratuito, también a través de FURLS.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Paso 3: Cumplimiento de Resistencia al Impacto</h3>
            <p className="text-blue-800">
              Bajo 21 CFR 801.410, todas las lentes de gafas sin prescripción deben pasar la prueba de resistencia 
              al impacto: una bola de acero de 5/8 pulgadas lanzada desde 50 pulgadas no debe fracturar la lente. 
              Las lentes de policarbonato y CR-39 generalmente pasan fácilmente.
            </p>
          </div>

          <h2 id="ce-ue" className="text-3xl font-bold mt-16 mb-6">Marcado CE: Vender Gafas de Sol en la UE</h2>
          <p>
            El marcado CE es <strong>obligatorio</strong> para vender gafas de sol en la Unión Europea, el 
            Espacio Económico Europeo (EEE) y el Reino Unido.
          </p>
          <p>
            El estándar clave es <strong>EN ISO 12312-1:2022</strong> que cubre transmitancia UV, calidad 
            óptica, resistencia mecánica y categorías de filtro (0-4).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Categorías de Filtro del Marcado CE</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Categoría</th>
                  <th className="px-6 py-4 text-left">Transmitancia de Luz</th>
                  <th className="px-6 py-4 text-left">Uso</th>
                  <th className="px-6 py-4 text-left">¿Para Conducir?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Cat 0</td><td className="px-6 py-4">80-100%</td><td className="px-6 py-4">Moda/interior</td><td className="px-6 py-4">Sí</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 1</td><td className="px-6 py-4">43-80%</td><td className="px-6 py-4">Luz solar baja</td><td className="px-6 py-4">Sí</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 2</td><td className="px-6 py-4">18-43%</td><td className="px-6 py-4">Luz solar media</td><td className="px-6 py-4">Sí</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 3</td><td className="px-6 py-4">8-18%</td><td className="px-6 py-4">Luz solar fuerte</td><td className="px-6 py-4">Sí</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 4</td><td className="px-6 py-4">3-8%</td><td className="px-6 py-4">Extrema (glaciares)</td><td className="px-6 py-4 text-red-600 font-bold">NO</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Importante: Autocertificación</h3>
            <p className="text-amber-800">
              El marcado CE para gafas es <strong>autocertificado</strong> — no necesitas un organismo 
              notificado para aprobar tu producto. Tú (o tu fábrica) realizan las pruebas, compilan el 
              expediente técnico y firman la Declaración de Conformidad. Esto lo hace asequible, pero 
              también significa que eres legalmente responsable de la exactitud de tus declaraciones.
            </p>
          </div>

          <h2 id="proteccion-uv" className="text-3xl font-bold mt-16 mb-6">Estándares de Protección UV</h2>
          <p>
            <strong>UV400 significa que la lente bloquea el 99-100% de la radiación UV hasta 400 nanómetros</strong>, 
            cubriendo tanto UVA (315-400nm) como UVB (280-315nm). Es el estándar mínimo que debes cumplir 
            para cualquier gafa que vendas, en cualquier parte del mundo. Más sobre esto en nuestra{' '}
            <Link href="/es/blog/uv400-vs-polarizado" className="text-primary-600 hover:underline">guía UV400 vs polarizado</Link>.
          </p>

          <h2 id="ansi" className="text-3xl font-bold mt-16 mb-6">ANSI Z80.3: El Estándar Óptico de EE.UU.</h2>
          <p>
            <strong>ANSI Z80.3</strong> cubre la calidad óptica de gafas de sol sin prescripción: potencia 
            óptica, potencia prismática, defectos cosméticos, transmitancia UV y resistencia al impacto.
          </p>

          <h2 id="otros-mercados" className="text-3xl font-bold mt-16 mb-6">Otros Mercados: Australia, Reino Unido, Japón</h2>
          <p>
            <strong>Australia</strong> tiene las regulaciones más estrictas del mundo (AS/NZS 1067, obligatorio). 
            <strong>Reino Unido</strong> técnicamente requiere marca UKCA pero acepta CE hasta 2027. 
            <strong>Japón</strong> sigue JIS T 7333.
          </p>

          <h2 id="costos-pruebas" className="text-3xl font-bold mt-16 mb-6">Costos de Pruebas y Dónde Hacerlas</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Tipo de Prueba</th>
                  <th className="px-6 py-4 text-left">Costo por Estilo</th>
                  <th className="px-6 py-4 text-left">Plazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Solo transmitancia UV400</td><td className="px-6 py-4">$100–$300</td><td className="px-6 py-4">3-5 días</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">EN ISO 12312-1 completa (CE)</td><td className="px-6 py-4">$300–$600</td><td className="px-6 py-4">5-10 días</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Suite completa ANSI Z80.3</td><td className="px-6 py-4">$300–$500</td><td className="px-6 py-4">5-10 días</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">AS/NZS 1067 (Australia)</td><td className="px-6 py-4">$400–$800</td><td className="px-6 py-4">7-14 días</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Prueba de bola FDA</td><td className="px-6 py-4">$50–$150</td><td className="px-6 py-4">1-3 días</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="rol-fabrica" className="text-3xl font-bold mt-16 mb-6">Qué Debe Proporcionarte Tu Fábrica</h2>
          <ul>
            <li><strong>Certificado de prueba UV400</strong> para cada lote de producción</li>
            <li><strong>Plantilla de Declaración de Conformidad CE</strong></li>
            <li><strong>Registros de prueba de bola FDA</strong></li>
            <li><strong>Hojas de datos de seguridad de materiales (MSDS)</strong></li>
            <li><strong>Certificación libre de níquel</strong> para componentes metálicos</li>
            <li><strong>Certificación ISO 9001</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-red-900 mb-2">🚩 Señales de Alerta</h3>
            <p className="text-red-800">
              Si una fábrica no puede proporcionarte certificados UV en 24 horas desde que los pides, 
              aléjate. Si dicen &quot;todas nuestras lentes son UV400&quot; pero no pueden mostrarte los 
              datos de prueba, aléjate. La documentación de cumplimiento es el mínimo de una operación profesional.
            </p>
          </div>

          <h2 id="checklist" className="text-3xl font-bold mt-16 mb-6">Tu Checklist de Cumplimiento</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para el Mercado de EE.UU.</h3>
          <ul>
            <li>☐ Registro de establecimiento FDA</li>
            <li>☐ Listado de productos FDA (código HQF)</li>
            <li>☐ Registros de prueba de impacto de bola</li>
            <li>☐ Certificado UV400 para cada estilo</li>
            <li>☐ Etiquetado adecuado</li>
            <li>☐ Seguro de responsabilidad de producto</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para el Mercado de la UE</h3>
          <ul>
            <li>☐ Pruebas según EN ISO 12312-1 por laboratorio acreditado</li>
            <li>☐ Expediente técnico compilado y almacenado</li>
            <li>☐ Declaración de Conformidad firmada</li>
            <li>☐ Marca CE aplicada al producto/empaque</li>
            <li>☐ Categoría de filtro claramente etiquetada</li>
            <li>☐ Importador o representante autorizado en la UE identificado</li>
          </ul>

          <h2 id="preguntas" className="text-3xl font-bold mt-16 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Las gafas necesitan aprobación FDA para venderse en EE.UU.?</h3>
              <p className="text-gray-600">No &quot;aprobación&quot; — pero sí cumplimiento FDA. Las gafas son dispositivos médicos Clase I. Los fabricantes/importadores deben registrarse y listar sus productos.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Cuánto cuestan las pruebas de cumplimiento?</h3>
              <p className="text-gray-600">Pruebas UV básicas: $100-$300/estilo. Cumplimiento CE completo: $300-$600/estilo. ANSI Z80.3: $300-$500/estilo. El registro FDA es gratuito.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Pueden confiscar mis gafas en aduanas?</h3>
              <p className="text-gray-600">Sí. Las aduanas de EE.UU. pueden retener envíos sin registro FDA. La UE confisca productos sin marcado CE. Australia es la más estricta. Las pruebas de cumplimiento cuestan una fracción de un envío confiscado.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas Ayuda con el Cumplimiento?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos encargamos del cumplimiento FDA, CE y UV en cada pedido que producimos. Nuestro equipo 
              puede guiarte por los requisitos de tus mercados específicos y proporcionarte toda la documentación necesaria.
            </p>
            <Link href="/es/contacto" className="btn-primary">
              Consultar a Jacky sobre Cumplimiento
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/es/blog/control-calidad-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Control de Calidad de Gafas: Checklist de Inspección</h3>
                <p className="text-gray-600 text-sm">Qué verificar antes de aprobar una producción.</p>
              </Link>
              <Link href="/es/blog/guia-importar-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Cómo Importar Gafas de Sol desde China</h3>
                <p className="text-gray-600 text-sm">Guía completa de aduanas, aranceles, envío y documentación.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
