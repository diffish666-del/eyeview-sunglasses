import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Del Boceto a la Muestra: Cómo se Fabrican Gafas de Sol Personalizadas en 4 Semanas',
  description: 'Un dueño de fábrica te guía por el proceso completo de fabricación de gafas de sol personalizadas — revisión de diseño, creación de moldes, abastecimiento de materiales, montaje, control de calidad y envío. Plazos reales, costes reales.',
  keywords: ['fabricación gafas de sol', 'proceso fábrica gafas', 'gafas sol OEM plazos', 'moldes gafas sol', 'producción acetato gafas', 'desarrollo muestras gafas', 'fábrica gafas China', 'gafas sol personalizadas fabricación'],
  alternates: {
    canonical: '/es/blog/proceso-fabricacion-gafas-sol',
  },
};

const takeaways = [
  'Un ciclo completo de producción de gafas de sol personalizadas — desde recibir tu boceto hasta enviar las muestras terminadas — toma 4 semanas en una fábrica china bien organizada, con cada semana dedicada a una fase distinta: revisión de diseño y moldes, abastecimiento de materiales y primeras muestras, montaje y control de calidad, y acabado y preparación de envío',
  'Los costes de moldes para monturas de acetato personalizadas oscilan entre $300 y $800 por molde según la complejidad — este es el mayor coste inicial en la fabricación OEM de gafas de sol, y saltarse la verificación de calidad del molde provoca monturas que se deforman o agrietan en la bisagra de la patilla (el fallo número uno en pedidos personalizados)',
  'El abastecimiento de materiales es donde los importadores novatos pierden 1–2 semanas: las láminas de acetato tardan 5–7 días en llegar del proveedor, los componentes metálicos requieren proveedores separados, y la igualación de color sin una referencia Pantone añade al menos 3 días extra — envía siempre una muestra física de color con tu diseño',
  'La fase de montaje (Semana 3) implica 12–15 puntos de control de calidad separados por par — presión de inserción de lentes, tensión de patillas, alineación de bisagras, par de apriete de tornillos y simetría de la montura se miden con calibres, no a ojo — y cualquier par que falle un control vuelve a retrabajo o descarte',
  'El control de calidad final en la Semana 4 no es una, sino tres inspecciones: el equipo de QC interno de la fábrica, una verificación puntual del supervisor de producción, y (si se contrata) una inspección de terceros antes del embalaje — la diferencia entre una tasa de defectos del 3% y del 0,5% es simplemente cuántos controles de QC pagas',
  'El envío desde fábricas chinas a mercados occidentales toma de 3 a 30 días según el método: carga aérea (3–7 días, $2–4/kg), carga marítima (20–35 días, $0,30–0,80/kg) o ferrocarril a Europa (12–18 días, $1–1,50/kg) — y el mayor error de envío es no contar el tiempo de despacho aduanero',
];

const quickStats = [
  { label: 'Coste de molde acetato (por molde)', value: '$300–800' },
  { label: 'Controles QC por par', value: '12–15' },
  { label: 'Pedido mínimo OEM', value: '300–500 uds.' },
  { label: 'Carga aérea a EE.UU./UE', value: '3–7 días' },
  { label: 'Carga marítima a EE.UU./UE', value: '20–35 días' },
];

const faqs = [
  {
    question: '¿Cuánto tiempo se tarda realmente en fabricar gafas de sol personalizadas desde cero?',
    answer: 'En EyeView, el plazo estándar es de 4 semanas desde el boceto hasta la muestra terminada. Semana 1: revisión de diseño y creación de moldes. Semana 2: abastecimiento de materiales, igualación de color y primeras muestras de montaje. Semana 3: montaje completo con todos los controles de calidad. Semana 4: acabado, control final, embalaje y preparación del envío. La producción en serie añade otras 3–5 semanas tras la aprobación de la muestra. Los retrasos suelen deberse a dos cosas: el comprador no proporciona archivos CAD claros ni referencias de color, y el proveedor de láminas de acetato va con retraso — ambos evitables con buena comunicación previa.',
  },
  {
    question: '¿Cuál es el pedido mínimo para gafas de sol OEM personalizadas?',
    answer: 'Para moldes personalizados (tu propio diseño de montura), el pedido mínimo suele ser de 300–500 unidades por modelo y color. Con 500 unidades × 3 colores, son 1.500 pares por modelo. Los costes de molde son aparte — $300 a $800 por molde según la complejidad. Una montura de acetato típica necesita 2 moldes (frontal + patillas). Para monturas de stock con marca personalizada (solo impresión de logo, embalaje), el pedido mínimo baja a 100–200 unidades por modelo. La mayoría de nuevos emprendedores empiezan con 3–5 modelos de 300 unidades cada uno, unos 900–1.500 pares en total.',
  },
  {
    question: '¿Qué materiales puedo elegir para monturas de gafas de sol personalizadas?',
    answer: 'Los tres materiales principales son acetato, TR90 y metal (acero inoxidable o titanio). El acetato es la opción premium — pulido a mano, colores intensos, tacto más pesado. El TR90 es ligero, flexible y excelente para líneas deportivas o infantiles. Las monturas metálicas funcionan bien para diseños minimalistas y aviador. Cada material tiene un proceso de molde diferente: acetato 5–7 días, TR90 más rápido (3–5 días), y metal requiere matrices de estampación. También trabajamos con bio-acetato, nailon reciclado y composite de madera para líneas ecológicas.',
  },
  {
    question: '¿Cómo funciona el control de calidad durante la producción de gafas de sol personalizadas?',
    answer: 'El QC funciona en tres niveles. Primero, QC en línea durante la producción: cada par pasa por 12–15 puntos de control — presión de inserción con medidor de fuerza, tensión de patillas, tornillos de bisagra con llave dinamométrica, simetría en plantillas de alineación. Segundo, QC de fin de línea: un equipo dedicado inspecciona el 100% de los pares bajo iluminación estandarizada. Tercero, muestreo AQL: si has contratado inspección de terceros (SGS, Bureau Veritas), toman una muestra estadística basada en tu Nivel de Calidad Aceptable — típicamente AQL 2,5 para defectos mayores y AQL 4,0 para menores.',
  },
  {
    question: '¿Qué opciones de envío hay para pedidos de gafas de sol personalizadas desde China?',
    answer: 'Tres métodos principales. Carga aérea (FedEx/DHL/UPS): 3–7 días puerta a puerta, $2–4 por kg, ideal para muestras y pedidos pequeños. Carga marítima (LCL o FCL): 20–35 días puerto a puerto más 3–5 días para aduana, $0,30–0,80 por kg, ideal para pedidos grandes. Ferrocarril a Europa: 12–18 días, $1–1,50 por kg, opción intermedia. Para un primer pedido típico de 500 pares (unos 35–40 kg embalados), la carga aérea es lo más práctico. Para más de 3.000 pares, la carga marítima ahorra $500–800. Gestionamos toda la documentación de envío.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'proceso-fabricacion-gafas-sol';

export default function ProcesoFabricacionGafasSol() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/es/' },
          { name: 'Blog', href: '/es/blog/' },
          { name: 'Del Boceto a la Muestra' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Del Boceto a la Muestra: Cómo se Fabrican Gafas de Sol Personalizadas en 4 Semanas",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica te guía por el proceso completo de fabricación de gafas de sol personalizadas. Plazos reales, costes reales.",
          "inLanguage": "es",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/proceso-fabricacion-gafas-sol" }
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Know-How de Fábrica</span>
            <span>11 de agosto de 2026</span>
            <span>•</span>
            <span>9 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Del Boceto a la Muestra: Cómo se Fabrican Gafas de Sol Personalizadas en 4 Semanas
          </h1>
          <p className="text-xl text-gray-600">
            Llevo fabricando gafas de sol desde 2006, y la pregunta que más me hacen es: &quot;¿Qué pasa exactamente después de enviarte mi diseño?&quot; Esta es la explicación honesta — cada paso, cada control y cada posible retraso.
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
            <li><a href="#week-1" className="text-primary-600 hover:underline">Semana 1: Revisión de Diseño y Creación de Moldes</a></li>
            <li><a href="#week-2" className="text-primary-600 hover:underline">Semana 2: Abastecimiento de Materiales y Primeras Muestras</a></li>
            <li><a href="#week-3" className="text-primary-600 hover:underline">Semana 3: Montaje y Control de Calidad</a></li>
            <li><a href="#week-4" className="text-primary-600 hover:underline">Semana 4: Acabado, Embalaje y Preparación de Envío</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <KeyTakeaways items={takeaways} title="Puntos Clave" />
          <QuickStats stats={quickStats} title="Datos Rápidos" />

          {/* Semana 1 */}
          <h2 id="week-1" className="text-3xl font-bold mt-16 mb-6">Semana 1: Revisión de Diseño y Creación de Moldes</h2>
          <p>El reloj empieza a correr en el momento en que tu correo llega a mi bandeja de entrada. Me envías un boceto — a veces es un archivo CAD profesional de un diseñador industrial, a veces es una foto de una montura que te gusta con &quot;hazlo así pero más ancho y en carey&quot; garabateado en una servilleta. Ambos son viables. Uno solo tarda más.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Qué Revisamos en el Diseño</h3>
          <p>Antes de que ocurra algo físico, mi ingeniero jefe dedica 2–3 horas a tu diseño. Revisa seis cosas:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Relación ancho de montura vs. ancho de lente.</strong> Si tu montura mide 140 mm de ancho pero las lentes son de 60 mm, las proporciones se verán mal. Lo ajustamos antes del molde.</li>
            <li><strong>Ángulo patilla-frente.</strong> Las patillas necesitan un ángulo de apertura específico (normalmente 8–10°) para que la montura se asiente correctamente en la cara.</li>
            <li><strong>Colocación y tipo de bisagra.</strong> ¿Bisagra de resorte, de barril u oculta? Cada tipo requiere una cavidad de molde diferente. Las de resorte añaden $0,15–0,30 por par pero reducen roturas un 40%.</li>
            <li><strong>Diseño del puente.</strong> Un puente de ojo de cerradura se asienta diferente a uno de silla de montar. El molde debe prever la colocación de plaquetas nasales.</li>
            <li><strong>Profundidad de la ranura de la lente.</strong> Las monturas de acetato necesitan una ranura de 1,0–1,2 mm para insertar la lente. Demasiado superficial y la lente salta. Demasiado profunda y el borde se agrieta.</li>
            <li><strong>Especificación del material.</strong> ¿Es acetato, TR90, metal o una combinación? Materiales diferentes implican talleres de molde y costes diferentes.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">El Proceso de Creación de Moldes</h3>
          <p>Para monturas de acetato, usamos moldes de acero mecanizados por CNC. Un molde para el frente y dos para las patillas (izquierda y derecha). Cada molde cuesta $300–800 según la complejidad. Los moldes sencillos tipo Wayfarer están en el rango bajo. Las monturas cat-eye sobredimensionadas con curvatura compleja, en el alto.</p>
          <p>La fabricación del molde lleva <strong>4–5 días laborables</strong>. El taller CNC fresa la cavidad negativa en un bloque de acero, pule la superficie de la cavidad (esto da a las monturas de acetato su acabado brillante directamente del molde) y realizamos una prueba de prensado para comprobar rebabas, marcas de hundimiento y consistencia de grosor.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>⚠️ Error Común:</strong> He tenido compradores que me enviaron un render 3D precioso en pantalla pero físicamente imposible de moldear. El acetato no se curva en ángulos imposibles. Si tu CAD tiene una patilla que se curva 90° con 2 mm de grosor, se romperá en la curva. <strong>Incluye siempre una vista de perfil en tu envío CAD.</strong></p>
          <p>Para el viernes de la Semana 1, tus moldes están listos. Tenemos una montura de prueba en acetato blanco crudo — sin color aún, sin pulir, solo la forma base. Hago fotos desde cinco ángulos y te las envío para aprobación. Es el primer momento &quot;wow&quot; para la mayoría de los nuevos dueños de marca.</p>

          {/* Semana 2 */}
          <h2 id="week-2" className="text-3xl font-bold mt-16 mb-6">Semana 2: Abastecimiento de Materiales y Primeras Muestras</h2>
          <p>La Semana 2 trata sobre materiales y color. Es la fase donde las cosas o fluyen suavemente o cada día se convierte en un juego de &quot;¿dónde está mi envío?&quot;</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cómo Conseguimos las Láminas de Acetato</h3>
          <p>No fabricamos las láminas de acetato internamente. Nadie lo hace — la fabricación de láminas de acetato es una industria separada. Los principales proveedores son Mazzucchelli (Italia, premium), Daicel (Japón, medio a premium) y varios fabricantes chinos (provincias de Jiangsu y Zhejiang, buena relación calidad-precio). El plazo va desde <strong>recogida el mismo día para colores de stock</strong> hasta <strong>5–7 días para combinaciones de color laminadas a medida</strong>.</p>
          <p>La igualación de color personalizada es donde ocurren la mayoría de los retrasos. Si quieres &quot;carey oscuro con un toque ámbar&quot;, necesito una referencia física — un código Pantone, una muestra de tela o una montura existente. Sin referencia, espera al menos 3 días extra de idas y venidas.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>💡 Consejo Pro:</strong> Envía una muestra física de color con tu paquete de diseño. No importa si es un chip Pantone, un trozo recortado de una montura vieja o una tarjeta pintada. Cualquier cosa física supera cualquier código hexadecimal — los colores de pantalla mienten. He perdido más tiempo en igualación de color por monitores no calibrados que por cualquier otro problema en 15 años.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Componentes Metálicos y Herrajes</h3>
          <p>Bisagras, tornillos, plaquetas nasales y núcleos de patilla provienen de proveedores de componentes metálicos separados — normalmente en Dongguan o Wenzhou. Las bisagras de barril estándar están en stock y se envían el mismo día. Las bisagras con marca personalizada (con tu logo grabado a láser) añaden 3–5 días y un coste de utilería de $100–200.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Primeras Muestras de Montaje</h3>
          <p>Para el jueves o viernes de la Semana 2, las láminas de acetato han llegado, los moldes funcionan con calidad de producción y producimos tus primeras muestras de montaje. Son <strong>5–10 pares</strong> en tus colores elegidos, completamente montados con lentes, bisagras y tornillos. Aún no están pulidos al estándar final — eso ocurre en la Semana 4 — pero te dan una sensación completa de la montura: peso, proporciones, tensión de patillas y cómo se ven los colores bajo luz natural.</p>

          {/* Semana 3 */}
          <h2 id="week-3" className="text-3xl font-bold mt-16 mb-6">Semana 3: Montaje y Control de Calidad</h2>
          <p>La Semana 3 es cuando la fábrica se pone en marcha. Es la fase de montaje e implica más controles de los que la mayoría de compradores imagina. Un solo par de gafas de acetato pasa por <strong>12 a 15 manos</strong> durante el montaje, cada una haciendo una tarea específica y revisando el trabajo de la persona anterior.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Corte e Inserción de Lentes</h3>
          <p>Las lentes se cortan en una pulidora CNC — no a mano. La máquina lee las dimensiones de la ranura de la montura desde el archivo CAD y corta cada lente con tolerancia de 0,1 mm. Un operario carga y descarga la máquina, pero el corte es automatizado. Después del corte, biselamos el borde de la lente (un chaflán de 45°) para que se deslice en la ranura sin astillarse.</p>
          <p>La inserción de lentes en monturas de acetato requiere calor. El frente de la montura se calienta a unos 60 °C para ablandar el acetato lo justo para que la lente entre a presión. Demasiado frío y la lente raya la ranura. Demasiado caliente y la montura se deforma. Nuestros técnicos de inserción llevan 8–15 años haciendo esto — conocen la temperatura exacta para cada formulación de acetato.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Los Puntos de Control de Calidad (12–15 por Par)</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-6 text-gray-700">
            <li><strong>Inspección visual de la montura</strong> — arañazos, burbujas, marcas en la superficie frontal</li>
            <li><strong>Inspección visual de lentes</strong> — arañazos, uniformidad del recubrimiento, partículas de polvo</li>
            <li><strong>Presión de inserción de lente</strong> — medida con calibre de fuerza, rango objetivo 8–15 N</li>
            <li><strong>Tensión de apertura de patillas</strong> — ambas deben abrirse suavemente con igual resistencia</li>
            <li><strong>Cierre de patillas</strong> — ambas deben cerrar completamente y quedar planas contra el frente</li>
            <li><strong>Alineación de bisagras</strong> — comprobada en plantilla; ambas a exactamente la misma altura</li>
            <li><strong>Par de apriete de tornillos</strong> — cada tornillo a 0,3–0,5 N·m, verificado con llave dinamométrica</li>
            <li><strong>Simetría de la montura</strong> — medida en plantilla de alineación con marcas de referencia</li>
            <li><strong>Alineación del puente</strong> — verificada contra la especificación CAD</li>
            <li><strong>Fijación de plaquetas nasales</strong> (monturas metálicas) — brazos simétricos, plaquetas firmes</li>
            <li><strong>Prueba de transmisión UV</strong> — cada lote muestreado con espectrómetro UV; debe bloquear 99%+ UV</li>
            <li><strong>Verificación del eje de polarización</strong> (si aplica) — orientación correcta del eje</li>
            <li><strong>Prueba de resistencia al sudor</strong> (muestreo) — 24 horas en sudor artificial, verificar decoloración</li>
            <li><strong>Prueba de caída</strong> (muestreo) — caída de 1,5 m sobre hormigón, sin grietas</li>
            <li><strong>Inspección final general</strong> — escaneo de 20 segundos bajo iluminación de 1000 lux</li>
          </ol>
          <p>Los pares que fallan cualquier control reciben una etiqueta roja y se envían a retrabajo. Si una estación produce más del 5% de fallos en un día, el supervisor detiene la línea e investiga — normalmente un problema de calibración o un lote defectuoso de componentes.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>🔧 Dentro de la Fábrica:</strong> El fallo QC más común en pedidos personalizados es <strong>asimetría en la tensión de patillas</strong>. Una patilla abre demasiado floja, la otra demasiado ajustada. Ocurre porque el punto de inserción de la bisagra en el molde está ligeramente desviado — tan solo 0,2 mm. Lo detectamos en los controles 4 y 5, pero significa volver a mecanizar esa cavidad del molde. Por eso la revisión del molde en la Semana 1 es tan importante.</p>
          <p>Al final de la Semana 3, todos los pares de producción de tu pedido de muestras están completamente montados y han superado el QC interno. Son gafas de sol completas — pero aún no parecen producto de venta al público. Las monturas necesitan el pulido final, y nada está embalado.</p>

          {/* Semana 4 */}
          <h2 id="week-4" className="text-3xl font-bold mt-16 mb-6">Semana 4: Acabado, Embalaje y Preparación de Envío</h2>
          <p>La Semana 4 transforma la producción de fábrica en producto de marca. Aquí las monturas se pulen a brillo espejo, las lentes reciben una limpieza final, tu logo se aplica y todo se embala para el envío.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pulido y Acabado de Monturas</h3>
          <p>El pulido de acetato es un proceso de 3 etapas: primero, un pulido basto con disco de algodón y compuesto de piedra pómez para eliminar líneas de molde. Segundo, un pulido medio con disco más suave y compuesto más fino. Tercero, un pulido final de brillo — aquí se consigue el &quot;efecto mojado&quot;. Cada par recibe <strong>4–6 minutos de pulido total</strong>, a mano en una pulidora de banco.</p>
          <p>TR90 y metal se saltan el pulido pero reciben otro tratamiento. TR90 tiene acabado mate por defecto. El metal recibe galvanoplastia — oro, plata, gunmetal, oro rosa — un proceso separado que añade 1–2 días.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Aplicación del Logo</h3>
          <p>El logo de tu marca se aplica en esta fase. Las opciones incluyen:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Estampado en caliente</strong> — lámina metálica prensada en la patilla o lente. $0,05–0,15 por estampado.</li>
            <li><strong>Grabado láser</strong> — quema el logo en la superficie. Permanente y preciso. $0,10–0,25 por grabado.</li>
            <li><strong>Tampografía</strong> — tinta transferida mediante almohadilla de silicona. $0,08–0,20 por impresión.</li>
            <li><strong>Remachado de placa metálica</strong> — pequeña placa con tu logo en la patilla. Sensación premium. $0,30–0,80 por placa.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Control de Calidad Final Antes del Embalaje</h3>
          <p>Antes de que nada entre en una caja, cada par recibe una inspección final. Diferente del QC en línea de la Semana 3 — es una verificación independiente de aprobado/rechazado por un inspector senior que no participó en la producción de esos pares específicos.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Envío y Logística</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Método</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Tránsito</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Coste</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 p-3 font-medium">Carga aérea (DHL/UPS/FedEx)</td><td className="border border-gray-200 p-3">3–7 días</td><td className="border border-gray-200 p-3">$2–4/kg</td><td className="border border-gray-200 p-3 text-sm">Muestras y pedidos &lt;50 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Ferrocarril (a Europa)</td><td className="border border-gray-200 p-3">12–18 días</td><td className="border border-gray-200 p-3">$1–1,50/kg</td><td className="border border-gray-200 p-3 text-sm">Pedidos medios a la UE</td></tr>
                <tr><td className="border border-gray-200 p-3 font-medium">Marítimo LCL</td><td className="border border-gray-200 p-3">20–35 días</td><td className="border border-gray-200 p-3">$0,30–0,80/kg</td><td className="border border-gray-200 p-3 text-sm">Pedidos 50–500 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Marítimo FCL (20 pies)</td><td className="border border-gray-200 p-3">20–35 días</td><td className="border border-gray-200 p-3">$1.500–3.000/contenedor</td><td className="border border-gray-200 p-3 text-sm">Pedidos 2.000 kg+</td></tr>
              </tbody>
            </table>
          </div>
          <p>Y eso es todo. Cuatro semanas. Del boceto al producto enviado. Suena rápido cuando lo escribo así — y honestamente, es rápido. La razón por la que podemos hacerlo es que llevamos ejecutando este proceso desde 2006. Los moldes los corta el mismo taller CNC con el que trabajamos desde hace 12 años. El acetato viene de proveedores con los que tenemos contratos trimestrales. Cuando todo está internamente y cada uno conoce su trabajo, 4 semanas no es una urgencia — es simplemente el plazo estándar.</p>

          {/* FAQ */}
          <section className="mb-12">
            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-8">Preguntas Frecuentes</h2>
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
            <h2 className="text-3xl font-bold mb-4">¿Tienes un Boceto? Convirtámoslo en Gafas de Sol</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Envíanos tu diseño — archivo CAD, foto o boceto en servilleta — y tendrás monturas de muestra en tus manos en 4 semanas. Acetato, TR90, metal, biomateriales. OEM completo con tu marca.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/es/contacto/" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
                Inicia tu Proyecto
              </Link>
              <Link href="/es/productos/" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-colors border-2 border-primary-400">
                Ver Modelos Existentes
              </Link>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/es/blog/guia-importar-gafas" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Importación</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guía para Importar Gafas de Sol desde China</h3>
                <p className="text-gray-600 text-sm">Proceso paso a paso para importar gafas de sol desde China.</p>
              </Link>
              <Link href="/es/blog/comparacion-materiales-monturas" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fabricación</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">TR90 vs Acetato vs Metal: ¿Qué Material se Adapta a tu Marca?</h3>
                <p className="text-gray-600 text-sm">Datos reales de costes, comparativas de peso y pruebas de durabilidad.</p>
              </Link>
              <Link href="/es/blog/guia-moq-gafas" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Abastecimiento</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guía de Pedidos Mínimos para Gafas de Sol</h3>
                <p className="text-gray-600 text-sm">Qué significa realmente el MOQ a nivel de fábrica.</p>
              </Link>
              <Link href="/es/blog/oem-vs-odm" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fabricación</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">OEM vs ODM en Gafas de Sol: ¿Cuál es la Diferencia?</h3>
                <p className="text-gray-600 text-sm">Costes reales, plazos reales y un marco de decisión que funciona.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
