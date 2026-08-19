import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Auditoría de Fábrica de Gafas de Sol: Checklist de 20 Puntos',
  description: 'La checklist de 20 puntos de un dueño de fábrica para evaluar a un proveedor de gafas de sol antes de transferir dinero: instalaciones, certificaciones, control de calidad, muestras y señales de alerta de intermediarios.',
  keywords: ['auditoría fábrica gafas de sol', 'checklist evaluación proveedores', 'cómo auditar una fábrica', 'verificación fabricante gafas de sol', 'checklist auditoría fábrica', 'trading company vs fábrica', 'certificación fábrica gafas de sol', 'auditoría proveedor OEM gafas de sol', 'auditoría fábrica gafas de sol china', 'checklist auditoría calidad proveedores'],
  alternates: {
    canonical: '/es/blog/lista-auditoria-fabrica-gafas',
    languages: {
      'en': '/blog/sunglasses-factory-audit-checklist',
      'de': '/de/blog/sonnenbrillen-fabrik-audit-checkliste',
      'es': '/es/blog/lista-auditoria-fabrica-gafas',
      'fr': '/fr/blog/checklist-audit-usine-lunettes',
      'it': '/it/blog/checklist-audit-fabbrica-occhiali',
      'pt': '/pt/blog/checklist-auditoria-fabrica-oculos',
    },
  },
};

const takeaways = [
  'La mayoría de las "auditorías de fábrica" fracasan porque los compradores verifican lo incorrecto: un recorrido por el showroom y una pared llena de certificados no demuestran nada; una auditoría real demuestra que la fábrica posee y opera las máquinas que fabricarán tu producto exacto, porque es lo único que un intermediario no puede fingir en una videollamada',
  'La checklist de 20 puntos tiene un solo objetivo: demostrar la propiedad de la producción. Si un proveedor no puede mostrarte el molde de inyección de tu modelo de montura, los programas CNC del corte de acetato y los registros de control de calidad del mes pasado dentro de las 24 horas de que lo pidas, estás hablando con una oficina de ventas, no con una fábrica',
  'Las certificaciones son necesarias pero no suficientes: ISO 9001, marcado CE y registro FDA no significan nada si no verificas el número del certificado en la base de datos pública del organismo emisor, porque un informe CE falsificado cuesta unos 20 dólares en Shenzhen',
  'La forma más rápida de detectar una empresa comercial: una dirección comercial en Shenzhen con un teléfono de Wenzhou, una respuesta de "podemos hacer de todo", una muestra personalizada entregada en menos de 7 días y fotos de productos que aparecen en docenas de tiendas de Alibaba con nombres de empresa diferentes',
  'Tienes tres opciones de auditoría con tres precios: una auditoría remota (0 $, detecta aproximadamente el 60 % de las estafas), una visita presencial (1.500–3.000 $, detecta aproximadamente el 90 %) y una inspección de terceros como SGS o TÜV (400–800 $ por día-hombre, te da un informe defendible pero cero conocimiento de mercado)',
];

const quickStats = [
  { label: 'Informe CE falsificado en Shenzhen', value: '~20 $' },
  { label: '"Fábricas" de Alibaba que son en realidad traders', value: '60–70 %' },
  { label: 'Auditoría presencial (vuelo + hotel + traductor)', value: '1.500–3.000 $' },
  { label: 'Auditoría de terceros (SGS/BV/TÜV) por día-hombre', value: '400–800 $' },
  { label: 'Estafas detectadas por auditoría remota', value: '~60 %' },
];

const faqs = [
  {
    question: '¿Cuánto cuesta auditar una fábrica de gafas de sol?',
    answer: 'Depende del método. Una auditoría remota — recorridos por video en vivo, verificación de documentos y solicitudes de fotos de moldes — no cuesta nada más que tu tiempo y detecta aproximadamente el 60 % de las estafas. Una visita presencial cuesta 1.500–3.000 $ si incluyes vuelos, hoteles y un traductor, y detecta cerca del 90 %. Una empresa de inspección externa como SGS, Bureau Veritas o TÜV cobra 400–800 $ por día-hombre por un informe estandarizado. Mi regla: empieza siempre en remoto, gasta el dinero del viaje solo en pedidos superiores a 20.000 $, y trae a un tercero solo cuando tu comprador minorista exija una auditoría de cumplimiento específica.',
  },
  {
    question: '¿Puedo auditar una fábrica de gafas de sol de forma remota?',
    answer: 'Sí, y deberías — pero solo si haces la auditoría de forma adversarial. Una videollamada en vivo en la que ves a la fábrica llevar un teléfono desde la puerta principal hasta las máquinas de inyección, con la fecha de hoy escrita en una pizarra, demuestra más que un PDF brillante. Pide ver el molde de tu modelo de montura exacto con el número de cavidades, solicita los registros de defectos del control de calidad del mes pasado y pide que sostengan la licencia comercial frente a la cámara para verificar el nombre y la dirección en el registro nacional. Si un proveedor no puede producir esto en 24 horas, trátalo como un suspenso.',
  },
  {
    question: '¿Qué certificaciones debe tener una fábrica de gafas de sol legítima?',
    answer: 'Como mínimo, ISO 9001 para gestión de calidad, un informe de pruebas CE según EN ISO 12312-1 si vendes en la UE, registro de establecimiento FDA si vendes en EE. UU., e informes de pruebas de lentes UV400 por lote de un espectrofotómetro. Si tus compradores minoristas exigen abastecimiento ético, busca también una auditoría BSCI, Sedex o SMETA. La clave es la verificación: cada una de estas tiene una base de datos pública que puedes consultar. Pide el número del certificado y valídalo tú mismo: un certificado en la pared que no has comprobado es decoración, no garantía.',
  },
  {
    question: '¿Cómo distingo una empresa comercial de una fábrica real?',
    answer: 'Haz cuatro preguntas: (1) ¿Puedo ver el molde de inyección de mi modelo de montura y cuántas cavidades tiene? (2) ¿Puedo ver las máquinas CNC que cortan monturas de acetato? (3) ¿Cuál es el MOQ para una montura OEM personalizada? (4) ¿Puedo ver los registros de inspección AQL del mes pasado? Una fábrica real responde las cuatro con detalles, fotos y números. Una empresa comercial responde "tenemos muchas fábricas asociadas", ofrece un MOQ de 100 piezas y envía muestras más rápido de lo que una fábrica podría fabricar el herramental. El herramental OEM real tarda 15–30 días: una "muestra personalizada" en 3 días es una muestra comprada.',
  },
  {
    question: '¿Qué debo revisar en las muestras antes de hacer un pedido al por mayor?',
    answer: 'No estás comprobando si la muestra "se ve bien": estás comprobando si es un estándar sellado y reproducible. Confirma que la muestra de preproducción (PPS) esté firmada y fechada por ambas partes, porque esa es la muestra dorada que tu pedido al por mayor debe igualar. Verifica el grado de material real de la ficha técnica (qué lámina de acetato, qué grado TR90, qué policarbonato), no el vago "plástico de alta calidad". Comprueba la tensión de las bisagras, el par de los tornillos, la inserción de lentes y los resultados UV400 contra la especificación. Luego confirma por escrito que la producción en masa coincidirá con la PPS con una inspección AQL 2.5 antes del envío.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'sunglasses-factory-audit-checklist';

export default function ListaAuditoriaFabricaGafas() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Checklist de Auditoría de Fábrica' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cómo auditar una fábrica de gafas de sol: la checklist de 20 puntos para evaluar proveedores",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "La checklist de 20 puntos de un dueño de fábrica para evaluar a un proveedor de gafas de sol antes de transferir dinero: instalaciones, certificaciones, control de calidad, muestras y señales de alerta de intermediarios.",
          "inLanguage": "es",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/es/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "es",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sourcing</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cómo Auditar una Fábrica de Gafas de Sol: La Checklist de 20 Puntos
          </h1>
          <p className="text-xl text-gray-600">
            El año pasado un comprador transfirió 34.000 $ a una "fábrica" en Shenzhen por 8.000 gafas de sol de acetato. Había hecho su auditoría: un recorrido en video por un taller limpio, un PDF de un certificado ISO 9001, tres muestras que parecían perfectas. Lo que no sabía: el taller se alquilaba por horas, el certificado era un montaje de Photoshop y las muestras venían de otra fábrica a 60 kilómetros. Esta es la checklist de 20 puntos que uso para asegurarme de que eso nunca le pase a uno de mis clientes.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Por qué la mayoría de las "auditorías de fábrica" son una pérdida de tiempo</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">La checklist de 20 puntos: qué verificar antes de enviar dinero</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Señales de alerta: indicios de que tratas con una empresa comercial, no con una fábrica</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Cómo ejecutar la auditoría: remota vs presencial vs de terceros</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas frecuentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Auditoría de fábrica de gafas de sol — Datos rápidos" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Por qué la mayoría de las "auditorías de fábrica" son una pérdida de tiempo</h2>

          <p>He estado en ambos lados de esta mesa. Durante 20 años he dirigido una fábrica de gafas de sol y he visto a cientos de compradores volar a China, recorrer un edificio, estrechar manos y transferir dinero — solo para descubrir meses después que el edificio que recorrieron no era la fábrica que fabricó su pedido.</p>

          <p>La verdad incómoda es que la mayoría de las auditorías de fábrica comprueban lo incorrecto. Comprueban las cosas que son fáciles de falsificar. Y en el triángulo manufacturero Shenzhen-Wenzhou-Xiamen, "fácil de falsificar" es toda una industria.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lo que los compradores suelen comprobar — y por qué no demuestra nada</h3>

          <p><strong>El showroom.</strong> Una sala limpia con muestras en la pared es la prueba más sobrevalorada del sourcing. Toda empresa comercial de Shenzhen tiene un showroom. Algunos son más bonitos que el mío. Los alquilan, los llenan de muestras compradas a fábricas reales y llevan allí a los compradores porque un comprador que ve "producto" deja de preguntar por la producción. Un showroom solo demuestra que alguien quiere venderte algo.</p>

          <p><strong>La pared de certificados.</strong> Certificados ISO 9001 enmarcados, certificados CE, placas BSCI — son decoración. Un certificado ISO falsificado cuesta unos 20 dólares y tarda un día en producirse. He visto personalmente el mismo número de certificado aparecer en tres sitios web de "fábricas" diferentes con tres nombres de empresa distintos. Si no verificaste el número en la base de datos pública del organismo emisor, no comprobaste un certificado. Miraste un trozo de papel.</p>

          <p><strong>La muestra.</strong> Esta es la trampa que atrapa a más compradores. Un trader te envía una muestra preciosa, la apruebas y crees que la auditoría está hecha. Pero la muestra la hizo una fábrica real — solo que no la que te está hablando. El trader la compró a la Fábrica A, te la envió, y cuando pides al por mayor, buscan al postor más barato, la Fábrica B, que nunca ha visto tu muestra. Tu muestra "aprobada" y tu producción ya no tienen nada en común salvo el nombre del modelo.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lo que una auditoría real comprueba de verdad</h3>

          <p>Una auditoría real tiene exactamente un objetivo: <strong>demostrar que la entidad a la que pagas posee y opera los medios de producción de tu producto.</strong> No "tiene acceso a una fábrica". No "trabaja con socios". Posee las máquinas, opera las máquinas y puede mostrarte las máquinas fabricando tu producto exacto hoy.</p>

          <p>Esto es lo único que un intermediario no puede fingir, porque es físico. Una empresa comercial no puede materializar un molde de inyección con tu logo en la cavidad. No puede producir los registros de defectos del control de calidad del mes pasado con números de serie reales. No puede llevar una cámara desde su puerta principal hasta una línea de producción en marcha porque no posee una línea de producción. Todo lo demás — documentos, fotos, videos, showrooms, muestras — se puede comprar, alquilar o retocar con Photoshop. La línea de producción física no.</p>

          <p>Así que cuando audites, ignora el brillo. Ignora la oficina bonita, el buen inglés en los correos y el discurso de venta pulido. Eso es marketing. Concéntrate en una pregunta, repetida de veinte formas distintas: <em>¿puedes demostrar que fabricas tú mismo este producto?</em> El resto de esta guía son esas veinte preguntas.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">La checklist de 20 puntos: qué verificar antes de enviar dinero</h2>

          <p>Esta es la checklist que entrego a los compradores primerizos antes de que transfieran un depósito. Está organizada en cinco grupos — instalaciones, equipos, certificaciones, muestras y control de calidad — porque un proveedor puede falsificar un grupo, pero falsificar los cinco a la vez es casi imposible. Revisa cada punto. Si fallan más de tres, retírate.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Instalaciones y ubicación (Puntos 1–4)</h3>

          <p><strong>1. La licencia comercial coincide con la dirección física.</strong> Pide la licencia comercial (营业执照) y verifica la dirección registrada, el representante legal y — críticamente — el objeto social. El objeto debe decir "fabricación" (制造), no "comercio" o "venta al por mayor" (贸易/批发). Una empresa registrada como empresa comercial nunca se convertirá en fábrica, sin importar lo que diga su web. Cruza la dirección en el registro nacional.</p>

          <p><strong>2. El tamaño de la fábrica tiene sentido para lo que afirma.</strong> Una fábrica de gafas de sol integrada de verdad — inyección, pulido, pintura y ensamblaje bajo un mismo techo — necesita al menos 1.500–3.000 m². Si un proveedor afirma producción interna completa y su dirección es una oficina de 200 m² en una torre comercial de Shenzhen, las matemáticas no cuadran. Pide la superficie total y la plantilla, y pregúntate si esa huella puede contener físicamente las máquinas que dicen operar.</p>

          <p><strong>3. Recorrido por planta en vivo, no un video grabado.</strong> Insiste en una videollamada en vivo donde recorran la planta desde la puerta principal. Haz que escriban la fecha de hoy y tu nombre en una pizarra y la sostengan frente a la cámara primero. Un video grabado es reutilizable y no significa nada; un recorrido en vivo con pizarra fechada es difícil de montar. Si la conexión es "mala" todas y cada una de las veces, esa es tu respuesta.</p>

          <p><strong>4. Ocupan el edificio que te muestran.</strong> Pregunta a nombre de quién está el alquiler o la escritura de propiedad. El truco del taller alquilado por horas es real: un intermediario reserva un espacio de taller compartido para una tarde, lo monta con muestras y hace tres recorridos de compradores seguidos. El contrato de alquiler de una fábrica real lleva el nombre de la fábrica, y te mostrarán las facturas de servicios o el registro de propiedad sin pestañear.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Equipos y herramental (Puntos 5–8)</h3>

          <p><strong>5. Máquinas de moldeo por inyección — cantidad y tonelaje.</strong> Si tus monturas son inyectadas (TR90, policarbonato, nailon, acetato inyectado), la fábrica debe poseer máquinas de inyección, típicamente de 80–250 toneladas. Pregunta cuántas, de qué marca (Haitian, Chen Hsong, etc.) y cuántas están en marcha. Sin máquinas de inyección no hay monturas inyectadas internas, punto.</p>

          <p><strong>6. El molde de TU modelo de montura.</strong> Esta es la solicitud más reveladora de toda la lista. Pide fotos del molde de inyección real de tu montura, incluido el número de cavidades. Un molde de 4 cavidades produce unas 1.500 monturas al día. Si el proveedor posee el molde, lo fotografiará de inmediato. Si poseen tu diseño pero no el molde, son un trader. Y confirma siempre quién paga el molde y quién lo posee cuando termina el pedido — esto se escribe en todo contrato OEM serio.</p>

          <p><strong>7. Máquinas CNC para acetato.</strong> Las monturas de acetato se cortan de lámina, no se inyectan. Si un proveedor afirma fabricar monturas de acetato y no tiene routers CNC ni fresadoras, está comprando monturas de acetato terminadas a Wenzhou y revendiéndolas. Pide ver el CNC cortando tu forma de acetato y pide el archivo CAD de tu montura — una fábrica real puede enviarte el archivo .dxf o .stp de tu propio modelo en un día.</p>

          <p><strong>8. Equipo de acabado.</strong> Una fábrica completa tiene también la línea de acabado: bombos de pulido, cabinas de pintura, línea de recubrimiento UV, grabado láser y tampografía para logos. Si subcontratan la pintura o el láser, eso no es automáticamente descalificante — muchas buenas fábricas lo hacen — pero deben poder nombrar al subcontratista y mostrarte los registros de inspección de entrada cuando vuelven las piezas.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Certificaciones y cumplimiento (Puntos 9–12)</h3>

          <p><strong>9. ISO 9001 — verificado, no enmarcado.</strong> Pide el número del certificado y el nombre del organismo certificador, y búscalo en la base de datos pública del organismo. Un certificado ISO enmarcado que no está en el registro no vale nada. Un ISO 9001 válido te dice que la fábrica tiene procesos de calidad documentados — no te dice que los sigan, pero uno ausente te dice algo importante.</p>

          <p><strong>10. Informe de pruebas CE según EN ISO 12312-1.</strong> Si vendes en la UE, tus gafas de sol necesitan un marcado CE respaldado por un informe de pruebas real que muestre protección UV400, calidad de lente y seguridad de montura. Pide el número de informe y el laboratorio emisor (TÜV, SGS, Intertek, etc.) y verifícalo con el laboratorio. Un informe CE falsificado es uno de los documentos falsos más comunes de la industria.</p>

          <p><strong>11. Registro de establecimiento FDA (mercado EE. UU.).</strong> Las gafas de sol son un dispositivo médico de Clase I en EE. UU., lo que significa que la fábrica debe tener un registro de establecimiento FDA. Puedes verificarlo tú mismo en la base de datos pública de registro de establecimientos de la FDA en menos de cinco minutos. Si la fábrica dice "aprobado por la FDA" — ten cuidado con esa frase; la FDA registra establecimientos y autoriza dispositivos, no "aprueba" gafas de sol. El lenguaje descuidado sobre la FDA es una señal de alerta por sí misma.</p>

          <p><strong>12. Informes de pruebas UV400 y de lentes — a nivel de lote.</strong> Este es el único certificado que realmente protege los ojos de tu cliente, y el que la mayoría de los compradores nunca pide. Cada lote de producción de lentes debe venir con un informe de espectrofotómetro que muestre la transmitancia UVA y UVB. Pide el informe del lote más reciente, no una prueba de tipo de hace cinco años. Una fábrica que hace control de calidad de lentes real puede producirlo en minutos.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Muestras y preproducción (Puntos 13–16)</h3>

          <p><strong>13. Muestra de preproducción sellada y firmada.</strong> Antes de la producción en masa, apruebas una muestra de preproducción (PPS). Esa muestra debe estar firmada y fechada por ambas partes, sellada y almacenada como la "muestra dorada" que la producción en masa debe igualar. Si la fábrica no ofrece una etapa PPS, o la trata como opcional, trátalo como un suspenso. Sin muestra dorada, no hay base legal para una disputa de calidad después.</p>

          <p><strong>14. Ficha técnica del material, no adjetivos.</strong> "Plástico de alta calidad" no es un material. Consigue la ficha técnica real: qué lámina de acetato (p. ej., Mazzucchelli M49 o equivalente), qué grado de TR90, qué resina de policarbonato y proveedor. La ficha técnica tiene un fabricante, un número de grado y propiedades físicas. Una fábrica que no puede producir una ficha técnica de material está comprando plástico misterioso.</p>

          <p><strong>15. Igualación de color con un muestrario físico.</strong> El color es donde mueren los pedidos al por mayor. Aprueba los colores contra un muestrario físico y fija un código Pantone o de fábrica. Luego especifica la fuente de luz bajo la que se juzga la igualación (la luz de día D65 es estándar). "Se parecerá a la muestra" no es una especificación de color. Consigue el código exacto por escrito.</p>

          <p><strong>16. Especificación de herrajes y bisagras.</strong> La bisagra es lo primero que falla en las gafas baratas, y los compradores nunca piensan en ello. Especifica el tipo de bisagra (de barril, de resorte o flex), el par del tornillo y si la bisagra es de acero inoxidable chapado o metal base. Pide el proveedor de la bisagra y la especificación del chapado. Una bisagra de 0,02 $ en una montura de 4 $ es cómo consigues una tasa de devolución del 15 %.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Proceso de control de calidad y producción (Puntos 17–20)</h3>

          <p><strong>17. Registros de control de calidad de la última tirada, no una promesa.</strong> Pide los informes de inspección AQL de la tirada de producción más reciente — los recuentos de defectos reales, el plan de muestreo y la disposición. Toda fábrica real los tiene. Un proveedor que responde "comprobamos todo al 100 %" sin mostrarte un solo registro es un trader con un guion.</p>

          <p><strong>18. Estándar AQL por escrito.</strong> Para gafas de sol, el estándar de la industria es AQL 2.5 en defectos mayores y 4.0 en menores, muestreo nivel II. Consigue que la fábrica se comprometa a esto en la orden de compra. Si se resisten a poner un estándar de defectos por escrito, planean enviarte lo que salga de la línea.</p>

          <p><strong>19. Inspección en línea vs final.</strong> Una fábrica competente hace control de calidad en múltiples etapas — inspección de material entrante, controles en línea después de la inyección y después de la pintura, y una inspección AQL final antes del embalaje. Pídeles que te guíen por sus puntos de control de calidad en la llamada en vivo. "Comprobamos al final" es cómo una fábrica acaba con 8.000 pares de tornillos pelados descubiertos solo después de que aterrizan en tu almacén.</p>

          <p><strong>20. Capacidad de embalaje y etiquetado.</strong> El embalaje listo para retail — código de barras, etiqueta colgante, marcado de caja y etiquetas de cumplimiento — es donde muchas "fábricas" se entregan silenciosamente a una oficina comercial. Confirma que la fábrica hace su propio embalaje y puede producir tu caja con el marcado correcto y un código de barras que puedas verificar. Si el embalaje ocurre "en nuestro socio", acabas de encontrar al intermediario.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Señales de alerta: indicios de que tratas con una empresa comercial, no con una fábrica</h2>

          <p>Entre el 60 % y el 70 % de las "fábricas" que anuncian OEM de gafas de sol en Alibaba y Made-in-China son empresas comerciales. Algunas son honestas — un buen trader puede conseguirte un mejor precio del que negociarías tú solo. Pero la mayoría no son honestas, y la diferencia entre una montura de 6 $ y una de 1,50 $ que se deshace es si la persona a la que pagas controla realmente la producción. Estas son las señales de alerta que enseño a mis clientes a reconocer.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La discrepancia dirección-teléfono</h3>

          <p>Wenzhou es la capital del acetato de China. Xiamen y Taizhou dominan las monturas de metal y deportivas. Shenzhen es donde viven las oficinas comerciales. Así que cuando una "fábrica" pone una dirección de Shenzhen con un teléfono de Wenzhou — o una dirección de Wenzhou con una cuenta bancaria de Hong Kong — casi seguro tratas con un intermediario. Pide el teléfono fijo y llámalo. Pregunta quién responde y en qué ciudad. Una llamada de dos minutos revela más que diez páginas de un sitio web.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">"Podemos hacer de todo"</h3>

          <p>Una fábrica real fabrica lo que sus máquinas pueden fabricar. Tiene 200–500 SKU en los que se especializa y te dirá "hacemos monturas de acetato e inyectadas, pero el metal no es nuestro fuerte". Una empresa comercial dice sí a todo — acetato, metal, madera, titanio, infantil, deportivas, graduadas. "Podemos hacer de todo" no es una declaración de capacidad; es una admisión de que el hablante no posee máquinas específicas y buscará lo que pidas de quien sea más barato esta semana.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">El plazo de muestra imposible</h3>

          <p>El herramental OEM personalizado lleva tiempo. Un molde de inyección nuevo para tu diseño de montura son 15–30 días. La programación CNC y el corte de una nueva forma de acetato son 1–2 semanas. Así que cuando una "fábrica" promete una muestra personalizada en 3–5 días, no te están haciendo una muestra — están comprando una montura existente y pegándole tu logo. Las fábricas reales dan plazos reales y te dirán que no cuando pidas lo imposible. Los traders nunca dicen que no; solo dicen sí y resuelven la mentira después.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Las fotos que están en todas partes</h3>

          <p>Haz una búsqueda inversa de imágenes de las fotos del producto en su tienda. Si la misma montura aparece bajo 50 nombres de empresa diferentes, ninguna de esas empresas la fabricó — las fotos de la fábrica real se filtraron y todos los traders del ecosistema las usan. Lo mismo con las fotos de "nuestra fábrica" del sitio web: si la foto es una imagen de stock de una sala blanca genérica, o aparece en una docena de sitios, no es su fábrica. Las fotos de una fábrica real son un poco desordenadas, un poco anticuadas y únicamente suyas.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">El MOQ sospechosamente bajo</h3>

          <p>Las fábricas OEM reales tienen mínimos reales. Para monturas personalizadas con tu propio molde, el MOQ es típicamente de 1.000–3.000 piezas por color. Para embalaje personalizado en monturas de stock, quizás 500. Una empresa comercial aceptará felizmente 100 piezas porque no fabrican nada — compran a otro y añaden un margen. Si el MOQ es bajo y el precio es bajo y el plazo es corto, no estás consiguiendo una ganga; estás consiguiendo un trader.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">El precio que no puede ser real</h3>

          <p>Haz las matemáticas del material. Una buena lámina de acetato, un par de lentes CR-39 o policarbonato de calidad con UV400, bisagras decentes y trabajo de acabado — el costo de material solo para una montura decente ronda los 1,20–1,50 $. Así que cuando alguien te ofrece una montura "de alta calidad" a 0,80 $ FOB, una de dos cosas es cierta: los materiales no son lo que dicen, o alguien en la cadena está perdiendo dinero (y no serán ellos). Un precio por debajo del costo del material no es competitivo; es evidencia de una mentira.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Las condiciones de pago que gritan trader</h3>

          <p>Las fábricas reales trabajan con 30 % de depósito, 70 % de saldo antes del envío, por T/T — a veces con carta de crédito para pedidos grandes. Venden capacidad de producción y tienen flujo de caja. Una empresa comercial, en cambio, necesita tu dinero antes de poder pagar a la fábrica real, así que presionan por el 100 % por adelantado o te empujan a canales no asegurados. Sospecha de cualquiera que necesite el 100 % de prepago y no pueda mostrarte una máquina. Y nunca — nunca — envíes un depósito a una cuenta personal o a una cuenta con un nombre distinto al de la empresa de la licencia.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Cómo ejecutar la auditoría: remota vs presencial vs de terceros</h2>

          <p>Tienes tres formas de ejecutar esta auditoría, y responden a preguntas diferentes a costos diferentes. Este es el desglose honesto de alguien que ha visto fallar y triunfar a las tres.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Método</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Costo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Qué detecta</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Auditoría remota</strong></td>
                  <td className="border border-gray-300 px-4 py-2">0 $ + tu tiempo</td>
                  <td className="border border-gray-300 px-4 py-2">~60 % de las estafas (verificación de licencia, recorrido por planta en vivo, fotos de moldes, registros de QC)</td>
                  <td className="border border-gray-300 px-4 py-2">Todo pedido — hazla primero, siempre</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Visita presencial</strong></td>
                  <td className="border border-gray-300 px-4 py-2">1.500–3.000 $ (vuelo, hotel, traductor)</td>
                  <td className="border border-gray-300 px-4 py-2">~90 % de las estafas (tocas el molde, hueles la línea de pintura, ves el QC)</td>
                  <td className="border border-gray-300 px-4 py-2">Pedidos superiores a 20.000 $ o una asociación a largo plazo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Terceros (SGS/BV/TÜV)</strong></td>
                  <td className="border border-gray-300 px-4 py-2">400–800 $ por día-hombre</td>
                  <td className="border border-gray-300 px-4 py-2">Cumplimiento documentado, pero no conocimiento de mercado ni producto</td>
                  <td className="border border-gray-300 px-4 py-2">Cuando un comprador minorista exige una auditoría específica (BSCI, SMETA, etc.)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">La auditoría remota — gratis, rápida e innegociable</h3>

          <p>Una auditoría remota no te cuesta nada más que una hora y un tono firme. Detectará las estafas perezosas — aquellas en las que la "fábrica" no puede producir una licencia, una foto de molde o un recorrido en vivo. Ejecuta la checklist de 20 puntos por video: licencia comercial frente a la cámara, pizarra fechada, recorrido por planta en vivo, fotos de moldes, registros de QC del mes pasado. Una auditoría remota no sustituye a las otras dos, pero es un filtro. Cualquier proveedor que la suspenda no debería recibir ni un centavo. Cualquier proveedor que la apruebe se ha ganado una conversación.</p>

          <p>El error más común que cometen los compradores en remoto es ser demasiado educados. Preguntan "¿podrías quizás mostrarme la fábrica?" y aceptan un PDF brillante a cambio. No hagas eso. Sé específico y adversarial — educadamente. "Envíame una foto del molde de inyección de la montura EV-204 con el número de cavidades, y el informe AQL de tu última tirada, en 24 horas". Las solicitudes específicas no pueden satisfacerse con material de marketing. Las vagas sí.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La visita presencial — cuando el dinero justifica el viaje</h3>

          <p>Nada supera estar en la planta de la fábrica. Hueles la línea de pintura, oyes las máquinas de inyección, ves al equipo de QC rechazar un par malo en tiempo real y estrechas la mano de la persona que firma el programa de producción. Ese viaje cuesta 1.500–3.000 $ una vez sumas vuelos, hoteles y un traductor, así que solo tiene sentido cuando el tamaño del pedido lo justifica — mi regla general es pedidos superiores a 20.000 $, o cualquier proveedor que planees usar durante años.</p>

          <p>Cuando vayas, lleva la checklist. No dejes que controlen el itinerario — una empresa comercial organizará un día de reuniones, comidas y showrooms y te mantendrá alejado de cualquier planta de producción real. Quieres ver tres cosas con tus propios ojos: el molde de tu producto, las máquinas que fabrican tu categoría de producto y los registros de QC del último lote. Si el "recorrido por la fábrica" nunca te muestra una máquina en marcha, recorriste una oficina de ventas.</p>

          <p>Y lleva a alguien que hable el idioma y la industria. Un traductor general asentirá ante las afirmaciones de un gerente de fábrica y no sabrá que una "máquina de inyección de 250 toneladas" no puede producir una montura de 20 gramos al ritmo que el proveedor acaba de cotizar. Quieres a alguien que pueda distinguir entre una línea de producción real y una montada.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La auditoría de terceros — defendible, pero limitada</h3>

          <p>Empresas como SGS, Bureau Veritas y TÜV Rheinland auditarán una fábrica y te entregarán un informe estandarizado — instalaciones, plantilla, documentación, cumplimiento. Esto es genuinamente valioso en una situación específica: cuando un gran comprador minorista exige un estándar de auditoría específico antes de poner tu marca en sus estantes. Las auditorías BSCI, SMETA y SEDEX existen porque los minoristas necesitan un rastro documental defendible sobre cumplimiento laboral y ambiental, y un informe de terceros es la moneda de ese mundo.</p>

          <p>Pero entiende lo que una auditoría de terceros no hace. El auditor comprueba el cumplimiento contra una checklist, no si la fábrica hace buenas gafas de sol ni si el precio es justo ni si el molde de tu montura existe de verdad. Un auditor confirmará que la fábrica tiene un extintor y una política de RR. HH. y no te dirá que la máquina de inyección está fabricando la montura de tu competidor, no la tuya. Las auditorías de terceros responden "¿es una fábrica que cumple?", no "¿es la fábrica adecuada para mí?".</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mi recomendación, en una frase</h3>

          <p>Ejecuta la auditoría remota con cada proveedor, vuela presencialmente cuando el pedido supere los 20.000 $ o la relación se vuelva de largo plazo, y trae a un tercero solo cuando un informe de cumplimiento específico sea la puerta a una gran cuenta minorista. Y nunca, bajo ninguna circunstancia, envíes dinero a alguien que suspendió la auditoría remota porque "parecía simpático en la videollamada". Ser simpático es gratis. Una fábrica real es verificable.</p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Preguntas frecuentes</h2>
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para saltarte a los intermediarios?</h2>
            <p className="text-xl mb-6 opacity-90">Envíame tu especificación. Te guiaré por una fábrica real en una llamada en vivo — el molde, las máquinas y los registros de QC del mes pasado — para que puedas evaluarnos con esta misma checklist antes de transferir un solo dólar.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicita un Presupuesto Gratis
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más desde la Planta de la Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/es/blog/como-encontrar-fabricante-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Cómo encontrar un fabricante de gafas de sol</h3>
                <p className="text-gray-600 text-sm">Dónde buscar, qué preguntar y cómo construir una lista corta sin que te estafen.</p>
              </Link>
              <Link href="/es/blog/como-elegir-fabricante-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Cómo elegir un fabricante de gafas de sol</h3>
                <p className="text-gray-600 text-sm">Los criterios de selección que separan una fábrica real de un sitio web pulido.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contáctanos</h3>
                <p className="text-gray-600 text-sm">Obtén un presupuesto para tu pedido personalizado de gafas de sol al por mayor.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
