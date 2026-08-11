import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Medidas de Monturas de Gafas de Sol Explicadas: DP, Ancho de Puente, Longitud de Varilla',
  description: 'El dueño de una fábrica desglosa las medidas de las monturas de gafas de sol — DP, ancho de puente, longitud de varilla, ancho de montura — con datos reales de venta al por mayor para que dejes de pedir monturas que no les quedan bien a tus clientes.',
  keywords: ['medidas de monturas de gafas de sol', 'DP distancia pupilar gafas de sol', 'ancho de puente gafas de sol', 'longitud de varilla gafas de sol', 'ancho de montura gafas de sol', 'guía de tallas de gafas de sol mayorista', 'cómo medir monturas de gafas de sol', 'guía de ajuste de gafas al por mayor', 'ajuste asiático vs ajuste europeo gafas de sol', 'dimensiones de monturas de gafas de sol explicadas'],
  alternates: {
    canonical: '/es/blog/guia-medidas-monturas-gafas',
    languages: {
      'en': '/blog/sunglasses-frame-measurements-guide',
      'de': '/de/blog/sonnenbrillen-rahmenmessungen-leitfaden',
      'es': '/es/blog/guia-medidas-monturas-gafas',
      'fr': '/fr/blog/guide-mesures-montures-lunettes',
      'it': '/it/blog/guida-misure-montature-occhiali',
      'pt': '/pt/blog/guia-medidas-armacoes-oculos',
    },
  },
};

const takeaways = [
  'Las medidas de las monturas no son solo especificaciones técnicas: son la diferencia entre unas gafas de sol que se quedan en el expositor y unas que de verdad se usan; si te equivocas con el ancho de puente o la longitud de varilla, tu montura mayorista de 8 USD se convierte en inventario invendible, sin importar la calidad de los lentes',
  'La distancia pupilar (DP) es la medida más ignorada en las gafas al por mayor: la mayoría de los catálogos de fábrica listan la DP de la montura como un solo número, pero la ventana real de tolerancia para un ajuste cómodo es de solo ±2 mm por ojo, lo que significa que una montura con una DP de 64 mm solo encaja realmente en caras con una DP de entre 60 y 68 mm antes de que la desalineación óptica cause dolores de cabeza',
  'Las gafas de sol de ajuste asiático no son un truco de marketing: existen porque el puente nasal asiático medio está 2–4 mm más bajo y es 3–5 mm más ancho que el puente nasal caucásico medio, lo que exige monturas con puntos de apoyo del puente más bajos, un ancho de puente menor y plaquetas nasales con más ajuste vertical; si vendes a mercados asiáticos sin entender esto, la mitad de tus monturas se deslizarán por la cara de tus clientes',
  'La longitud de varilla es la dimensión que determina si tus monturas se ajustarán a cabezas europeas (140–145 mm de media), americanas (140–150 mm) o asiáticas (125–140 mm) — una varilla de 145 mm es la opción universal por defecto más segura, pero si comercializas específicamente para una región, debes ajustar tu especificación OEM en consecuencia',
  'El error de medición de monturas más común que cometen los compradores mayoristas es pedir monturas según cómo se ven en las fotos en lugar de según sus medidas: una montura de 55 mm de ancho de lente se ve genial en un modelo, pero solo se ajusta cómodamente a alrededor del 40% de las caras adultas; los 52 mm de ancho de lente son el punto óptimo para un ajuste universal entre géneros y mercados',
];

const quickStats = [
  { label: 'Punto óptimo universal de DP de montura', value: '62–64mm' },
  { label: 'Tolerancia de confort de DP por ojo', value: '±2mm' },
  { label: 'Longitud media de varilla en Europa', value: '140–145mm' },
  { label: 'Longitud media de varilla en Asia', value: '125–140mm' },
  { label: 'Rango estándar de ancho de puente', value: '14–24mm' },
  { label: 'Ancho de lente más común (universal)', value: '52mm' },
  { label: 'Puente nasal asiático: más bajo que el caucásico', value: '2–4mm más bajo' },
  { label: 'Devoluciones de monturas por mal ajuste', value: '12–18% de devoluciones B2C' },
];

const faqs = [
  {
    question: '¿Qué significan los tres números de las monturas de gafas de sol (p. ej., 52□18-145)?',
    answer: 'Los tres números son el estándar internacional de medición de monturas: el primer número (52) es el ancho de lente en milímetros, medido horizontalmente en la parte más ancha de un solo lente. El segundo número (18) es el ancho de puente: la distancia entre los dos lentes en el punto más estrecho del puente. El tercer número (145) es la longitud de varilla, medida desde el tornillo de la bisagra hasta la punta de la varilla, incluyendo la curva detrás de la oreja. Estos tres números juntos te dan alrededor del 80% de lo que necesitas saber sobre el ajuste de la montura. El cuarto número, que algunos fabricantes incluyen, es la altura del lente: no siempre se imprime, pero es crítico para lentes progresivas o graduadas. Al evaluar las fichas técnicas de las fábricas, pide siempre los cuatro números si planeas ofrecer monturas listas para lentes graduadas.',
  },
  {
    question: '¿Cómo mido la distancia pupilar (DP) para gafas de sol?',
    answer: 'La DP es la distancia en milímetros entre los centros de tus dos pupilas. Hay dos tipos: la DP binocular (distancia entre ambas pupilas, normalmente 54–74 mm en adultos) y la DP monocular (distancia de cada pupila al centro del puente nasal, normalmente 27–37 mm por ojo). Para el diseño de monturas de gafas de sol, la relación crítica es: DP de montura = ancho de lente + ancho de puente. Así, una montura 52□18 tiene una DP de montura de 70 mm. Si tu cliente tiene una DP binocular de 62 mm, esa montura es 8 mm demasiado ancha: los centros ópticos de los lentes quedarán desalineados con las pupilas, lo que puede causar fatiga visual y dolores de cabeza. Como comprador mayorista, quieres que tus monturas tengan una DP de montura que esté dentro de los 4 mm de la DP más común en tu mercado objetivo. La mayoría de las DP de adultos se concentran entre 58 y 68 mm, así que las monturas con una DP de 62–64 mm se ajustan al rango más amplio.',
  },
  {
    question: '¿Cuál es la diferencia entre las gafas de sol de ajuste asiático y las de ajuste europeo?',
    answer: 'Las gafas de sol de ajuste asiático (también llamado ajuste de puente bajo o ajuste universal) tienen tres diferencias clave frente a las monturas estándar de ajuste europeo: (1) Las plaquetas nasales o el puente se colocan 2–4 mm más abajo en el frontal de la montura, porque el puente nasal asiático se asienta más bajo en la cara. (2) El ancho de puente suele ser 1–3 mm más estrecho (15–17 mm frente a 17–20 mm en las monturas europeas) porque la estructura ósea nasal asiática ofrece menos soporte lateral: un puente más ancho hará que la montura se deslice hacia abajo. (3) Las plaquetas nasales, si son ajustables, tienen brazos más largos con más recorrido vertical (8–10 mm de ajuste de altura de la plaqueta frente a 5–6 mm en las monturas estándar). Además, la curvatura de la montura (ángulo de forma facial) suele ser ligeramente más plana (3–5° frente al envolvente estándar de 5–8°) para reducir la presión sobre los pómulos, que tienden a ser más prominentes en las estructuras faciales asiáticas. No son ajustes menores: una montura diseñada para caras europeas literalmente no se mantiene en su lugar en muchos clientes asiáticos, creando un ciclo constante de deslizarse y empujarla hacia arriba que arruina la experiencia de uso.',
  },
  {
    question: '¿Qué longitud de varilla debo especificar en mi pedido mayorista de gafas de sol?',
    answer: 'La longitud de varilla es la medida de montura que más depende de la región. Para el mercado europeo, especifica varillas de 140–145 mm: se ajustan a aproximadamente el 85% de los adultos europeos. Para el mercado norteamericano, el rango seguro es de 140–150 mm, siendo 145 mm la más universal. Para los mercados asiáticos, opta por longitudes más cortas: 125–140 mm, porque la profundidad media de la cabeza asiática (de delante hacia atrás) es menor que la media europea. Para los mercados de Oriente Medio y el sur de Asia, 140–145 mm suele funcionar, pero es posible que recibas solicitudes de 150 mm para cabezas más grandes. Si vas a lanzar una línea de gafas de sol de ajuste universal que se venda en varios continentes, especifica varillas de 145 mm: son ligeramente largas para las caras asiáticas y ligeramente cortas para las cabezas europeas y americanas de montura grande, pero es la opción menos mala para un enfoque de talla única. Para pedidos OEM, siempre recomiendo producir dos SKU de longitud de varilla (140 mm y 148 mm) para cualquier montura unisex con más de 52 mm de ancho de lente: la diferencia de costo de utillaje es cero en monturas de acetato y mínima en monturas de inyección, y duplica tu cobertura de ajuste.',
  },
  {
    question: '¿Cómo afectan el ancho de puente y el diseño de las plaquetas nasales a la comodidad de las gafas de sol?',
    answer: 'El ancho de puente es la medida que los compradores pasan por alto con más frecuencia, y es la que causa más quejas de comodidad. El puente soporta el 80–90% del peso de la montura, así que equivocarse significa que la montura se desliza (demasiado ancha) o pellizca la nariz (demasiado estrecha). Los anchos de puente estándar van de 14 mm (estrecho, frecuente en monturas metálicas con plaquetas nasales ajustables) a 24 mm (ancho, habitual en monturas de acetato de moda sobredimensionadas). El punto óptimo para la mayoría de las monturas unisex para adultos es de 17–19 mm con plaquetas nasales ajustables o un puente tipo ojo de cerradura bien contorneado. El diseño de las plaquetas nasales importa igualmente: las caras asiáticas necesitan plaquetas con más separación vertical (la plaqueta queda más abajo del aro de la montura), las caras europeas necesitan una separación moderada, y las caras africanas suelen beneficiarse de plaquetas más separadas y con un ángulo más plano. Los puentes de acetato moldeado (puentes silla de una sola pieza) tienen un aspecto más limpio, pero son implacables con el ajuste: si la curva del puente no coincide con el perfil nasal del cliente, no hay ningún ajuste posible. Las plaquetas nasales metálicas ajustables con brazos te ofrecen unos 8–10 mm de ajuste y deberían ser la opción por defecto para cualquier montura mayorista dirigida a mercados diversos.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'guia-medidas-monturas-gafas';

export default function GuiaMedidasMonturasGafas() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/es/blog/' },
          { name: 'Medidas de Monturas de Gafas de Sol Explicadas' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Medidas de Monturas de Gafas de Sol Explicadas: DP, Ancho de Puente, Longitud de Varilla — Guía de un Comprador de Fábrica",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "El dueño de una fábrica desglosa las medidas de las monturas de gafas de sol — DP, ancho de puente, longitud de varilla, ancho de montura — con datos reales de venta al por mayor para que dejes de pedir monturas que no les quedan bien a tus clientes.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Conocimiento de Fábrica</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Medidas de Monturas de Gafas de Sol Explicadas: DP, Ancho de Puente, Longitud de Varilla
          </h1>
          <p className="text-xl text-gray-600">
            La mayoría de los compradores mayoristas eligen las monturas por cómo se ven en una foto. Yo las elijo por los números, porque las medidas son lo que determina si tus clientes realmente se las ponen. Aquí tienes todo lo que necesitas saber sobre las medidas de las monturas de gafas de sol, de parte de alguien que lleva 20 años fabricándolas.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Tabla de Contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Por qué importan las medidas de las monturas para los compradores mayoristas</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">DP (Distancia Pupilar): qué es y por qué les importa a las fábricas</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Ancho de puente: la variable de ajuste oculta</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Longitud de varilla y ancho de montura: cómo conseguir el ajuste global correcto</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas frecuentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Datos Rápidos sobre Medidas de Monturas" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Por qué importan las medidas de las monturas para los compradores mayoristas</h2>
          
          <p>Déjame contarte la historia de un cliente que perdió 18.000 USD en un solo contenedor de gafas de sol.</p>
          
          <p>Era un importador primerizo de Alemania. Pidió 3.000 wayfarers de acetato: buena calidad, buenos lentes, precio competitivo de 6 USD FOB. Las muestras se veían hermosas. Me envió fotos del desempaque, orgullosísimo. Tres meses después, me llamó. Las devoluciones llegaban al 22%. Sus minoristas le devolvían cajas enteras. Las monturas eran demasiado anchas para las caras europeas: 55 mm de ancho de lente con un puente de 20 mm. El ancho total de la montura resultó ser de 142 mm, lo cual está bien para una cara americana grande, pero se ve ridículamente sobredimensionado en el hombre europeo medio. Sus clientes se las probaban, se reían y las devolvían a su lugar.</p>
          
          <p>Ese pedido le costó 18.000 USD en producto, 4.200 USD en flete y seis meses de tiempo perdido. Todo porque nadie revisó las medidas antes de la producción.</p>
          
          <p>He visto que esto pasa docenas de veces en 20 años. Los compradores mayoristas — sobre todo los nuevos — eligen monturas según las fotos, el estilo y el color. Miran la ficha técnica, ven los números y piensan «esos son solo detalles técnicos, la fábrica se encarga de eso». No se dan cuenta de que las medidas de la montura son <strong>el mayor factor determinante de la rotación de ventas</strong>. Una montura que no se ajusta a tu mercado objetivo no es un producto: es inventario muerto con una declaración de aduanas.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">El costo real de equivocarse con las medidas</h3>
          
          <p>Cuando pides monturas que no se ajustan a tus clientes, lo pagas de al menos cuatro maneras:</p>
          
          <p><strong>1. Devoluciones directas.</strong> En el comercio electrónico B2C, las tasas de devolución de gafas por mal ajuste rondan el 12–18% de media — y eso es para marcas que ofrecen prueba virtual y guías de tallas detalladas. Si eres un mayorista que suministra tiendas minoristas, el minorista no absorbe ese costo. Te lo devuelve a ti. O peor: no vuelve a pedir.</p>
          
          <p><strong>2. Daño a la marca.</strong> Una mala experiencia de ajuste crea un cliente que asocia tu marca con incomodidad. Ese cliente no dice «el ancho de puente era 2 mm demasiado ancho». Dice «tus gafas de sol son incómodas». Y se lo cuenta a cinco amigos. En una categoría donde la compra repetida depende casi por completo de la satisfacción con el ajuste, una mala medida puede matar el valor de por vida del cliente.</p>
          
          <p><strong>3. Inventario muerto.</strong> Las monturas que no ajustan no se pueden «arreglar». No puedes volver a moldear el acetato. No puedes estirar una varilla de titanio. Ese inventario se queda en el almacén acumulando costos de almacenamiento hasta que lo liquidas al 40% de tu costo de importación. He recorrido almacenes de compradores en Róterdam, Los Ángeles y Dubái — todos y cada uno tienen un rincón lleno de «las monturas que no ajustaron».</p>
          
          <p><strong>4. Oportunidad perdida.</strong> Cada dólar atado a monturas mal ajustadas es un dólar que no puedes gastar en reponer las monturas que sí se venden. En el mayorista de gafas de sol, la rotación de inventario lo es todo. Un lote de monturas mal ajustadas ralentiza todo tu ciclo de caja entre 60 y 90 días.</p>
          
          <p>Las medidas de las monturas no son detalles opcionales. Son la especificación que separa un negocio de importación rentable de un trastero lleno de arrepentimiento. Y la primera medida que necesitas entender es la DP.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">DP (Distancia Pupilar): qué es y por qué les importa a las fábricas</h2>
          
          <p>La distancia pupilar — DP — es la distancia entre los centros de tus dos pupilas, medida en milímetros. La DP típica de un adulto va de 54 mm a 74 mm, y la gran mayoría se concentra entre 58 y 68 mm. Para gafas de sol, una DP de 62–64 mm se ajusta al público adulto más amplio.</p>
          
          <p>Ahora, esto es lo que la mayoría de los compradores no entienden: <strong>la DP de la montura es diferente de la DP personal.</strong></p>
          
          <p>La DP de la montura se calcula como: <strong>Ancho de lente + ancho de puente.</strong> Si tienes una montura 52□18, la DP de la montura es 70 mm (52 + 18). Eso significa que el centro óptico del lente izquierdo está a 70 mm del centro óptico del lente derecho. Si tu cliente tiene una DP personal de 62 mm, esos centros ópticos están 8 mm demasiado separados. Cada vez que mira a través de esos lentes, sus ojos se esfuerzan 4 mm hacia afuera por lado para alinearse con el centro óptico.</p>
          
          <p>Para gafas de sol sin graduación, unos pocos milímetros de desajuste de DP suelen ser tolerables: los lentes planos no tienen un centro óptico definido. Pero si vendes monturas listas para lentes graduadas, la DP se vuelve crítica. Un desajuste de 4 mm o más por ojo causará fatiga visual, dolores de cabeza y visión periférica borrosa. Tus clientes culparán a tus lentes, pero el verdadero problema está en la especificación de la montura.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Rangos de DP por mercado: qué dicen los datos</h3>
          
          <p>En 20 años exportando a más de 50 países, esto es lo que he observado sobre la distribución de la DP en diferentes mercados:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Mercado</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DP media hombres adultos</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DP media mujeres adultas</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Rango seguro de DP de montura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">América del Norte</td>
                  <td className="border border-gray-300 px-4 py-2">64–68mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–64mm</td>
                  <td className="border border-gray-300 px-4 py-2">63–66mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europa del Norte</td>
                  <td className="border border-gray-300 px-4 py-2">63–67mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europa del Sur</td>
                  <td className="border border-gray-300 px-4 py-2">62–66mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–62mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Asia Oriental (China, Japón, Corea)</td>
                  <td className="border border-gray-300 px-4 py-2">60–65mm</td>
                  <td className="border border-gray-300 px-4 py-2">57–62mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–63mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sudeste Asiático</td>
                  <td className="border border-gray-300 px-4 py-2">59–64mm</td>
                  <td className="border border-gray-300 px-4 py-2">56–61mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–62mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Oriente Medio</td>
                  <td className="border border-gray-300 px-4 py-2">63–68mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">América Latina</td>
                  <td className="border border-gray-300 px-4 py-2">62–67mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 italic">Estas son medias a nivel de fábrica basadas en los patrones de pedidos de los clientes y en los comentarios de ajuste durante dos décadas — no son datos antropológicos revisados por pares, pero sí lo bastante precisos para diseñar monturas que se ajusten a clientes reales.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Cómo leer la DP en una ficha técnica de fábrica</h3>
          
          <p>Cuando recibes una ficha técnica de una fábrica china, la DP suele aparecer de una de estas tres formas:</p>
          
          <p><strong>1. DP de la montura.</strong> Se lista como un solo número, normalmente 62–70 mm. Es el ancho de lente más el ancho de puente. Te indica la distancia de centro a centro de los lentes. Si este número está a más de 4 mm de la DP media de tu mercado objetivo, la montura causará problemas ópticos a quienes usen lentes graduadas y puede verse bizca o estrábica en la cara.</p>
          
          <p><strong>2. Rango de descentramiento.</strong> Algunas fábricas mejores listan el «rango de DP de ajuste», como «DP 60–68 mm recomendada». Esto te indica el rango de DP de clientes que pueden usar la montura cómodamente. Una montura con una DP de 66 mm y un rango de descentramiento de 60–72 mm es más versátil que una con una DP de 70 mm y un rango de 64–72 mm: cuanto más estrecho es el rango recomendado, más de nicho es el ajuste.</p>
          
          <p><strong>3. Sin DP listada.</strong> Si una fábrica no lista la DP en su ficha técnica, pregunta. Si no pueden decirte la DP de la montura en 24 horas, no pidas a esa fábrica. Lo digo en serio. Cualquier fábrica que realmente fabrique gafas conoce la DP de montura de cada SKU de su catálogo. Si no lo saben o no pueden medirlo, probablemente son una empresa comercial que revende monturas que no diseñaron.</p>
          
          <p>La regla más simple que les doy a los compradores nuevos: para una línea de gafas de sol de ajuste universal, la DP de la montura debe ser de <strong>62–64 mm</strong>. Eso cubre aproximadamente el 70% del mercado adulto mundial. Si apuntas a un grupo demográfico específico — monturas femeninas de ajuste estrecho, monturas masculinas sobredimensionadas, niños — ajusta en consecuencia. Pero para tu colección unisex principal, una DP de montura de 62–64 mm es el ancla alrededor de la cual construir.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Ancho de puente: la variable de ajuste oculta</h2>
          
          <p>Si la DP es la medida sobre la que los compradores discuten, el ancho de puente es la que ignoran por completo — hasta que empiezan a llegar las devoluciones.</p>
          
          <p>El puente es la parte de la montura que se apoya en la nariz. Soporta el 80–90% del peso de la montura. En una montura de acetato de 35 gramos, eso son unos 30 gramos de presión constante hacia abajo sobre una franja de piel y cartílago de quizá 6 mm de ancho. Si te equivocas con el puente, hasta la montura de titanio más ligera se vuelve incómoda a los 20 minutos de uso.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Rangos estándar de ancho de puente</h3>
          
          <p>El ancho de puente suele ser el segundo número de la tripleta estándar de medidas de monturas (por ejemplo, el «18» de 52□18-145). El rango de la industria va de 14 mm a 24 mm, pero la mayoría de las monturas caen en estas categorías:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Ancho de puente</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Uso típico</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Mercados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>14–16mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Monturas metálicas con plaquetas nasales ajustables, aviador, monturas femeninas pequeñas de acetato</td>
                  <td className="border border-gray-300 px-4 py-2">Asiático, mujeres menudas (todos los mercados)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>17–19mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acetato unisex universal, la mayoría de las wayfarers, monturas ópticas estándar</td>
                  <td className="border border-gray-300 px-4 py-2">Global: el rango más común para monturas de mercado masivo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>20–22mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acetato masculino grande, monturas de moda sobredimensionadas, aviador sin plaquetas nasales</td>
                  <td className="border border-gray-300 px-4 py-2">América del Norte, Europa del Norte, Oriente Medio: rasgos más grandes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>23–24mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Declaraciones de moda sobredimensionadas, gafas de sol tipo escudo</td>
                  <td className="border border-gray-300 px-4 py-2">Moda de nicho: no usar en la línea mayorista principal salvo que se solicite</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Diseño del puente: acetato vs metal vs inyección</h3>
          
          <p>La medida del puente por sí sola no te dice si una montura ajustará bien — el <strong>diseño del puente</strong> es igual de importante. Hay tres tipos básicos:</p>
          
          <p><strong>Puente silla (acetato moldeado).</strong> Una sola pieza continua de acetato con forma para apoyarse en la nariz. Aspecto limpio, sin piezas móviles. La desventaja: cero ajustabilidad. Si la curva del puente no coincide con la nariz del cliente, no hay nada que puedas hacer. Los puentes silla funcionan mejor en monturas de menos de 16 mm de ancho de puente, donde la nariz aporta naturalmente más soporte. Para monturas de más de 18 mm, un puente silla es una apuesta: ajusta perfectamente en quizá el 40% de las caras y mal en el resto.</p>
          
          <p><strong>Puente tipo ojo de cerradura.</strong> Un puente de acetato o metal esculpido que crea una forma de «ojo de cerradura»: más ancho arriba, más estrecho en el punto de contacto. Visualmente distintivo, y la forma esculpida ofrece más puntos de contacto que un puente silla plano, lo que mejora la distribución del peso. El diseño de ojo de cerradura fue popularizado por las wayfarers de Ray-Ban y sigue siendo la mejor opción de puente de acetato para monturas de más de 18 mm. No es ajustable, pero la forma contorneada compensa en parte.</p>
          
          <p><strong>Plaquetas nasales ajustables (brazos metálicos con plaquetas de silicona).</strong> Esto es lo que recomiendo para el 90% de los pedidos mayoristas. Dos brazos metálicos independientes con plaquetas suaves de silicona o PVC que se pueden doblar hacia adentro, hacia afuera, hacia arriba o hacia abajo. Esto le da al usuario o al óptico unos 8–10 mm de ajuste total — suficiente para acomodar puentes nasales desde perfiles asiáticos estrechos hasta europeos anchos. Sí, las plaquetas nasales ajustables añaden 0,30–0,50 USD al costo de la montura frente a una silla moldeada. Sí, valen la pena. Solo la flexibilidad de ajuste reduce las devoluciones en un estimado del 40–60% en comparación con las monturas de puente fijo, según lo que reportan mis clientes de largo plazo.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">El factor del ajuste asiático</h3>
          
          <p>No se puede hablar con honestidad del ancho de puente sin abordar el mercado del ajuste asiático. Esta es la realidad desde el piso de la fábrica:</p>
          
          <p>El puente nasal asiático medio se asienta 2–4 mm más abajo en la cara y es 3–5 mm más ancho en estructura ósea que el puente nasal caucásico medio. Esto no es anecdótico: es medible y consistente en poblaciones grandes. Las monturas diseñadas para caras europeas o americanas, con sus puntos de contacto del puente más altos y anchos de puente más estrechos, no se asentarán correctamente en la mayoría de las caras asiáticas. La montura descansará demasiado alta, las puntas de las varillas no llegarán correctamente detrás de las orejas y los lentes quedarán demasiado cerca de los ojos.</p>
          
          <p>Las monturas de ajuste asiático corrigen esto con tres cambios de diseño: (1) un punto de contacto del puente más bajo en el frontal de la montura, (2) un ancho de puente ligeramente más estrecho (15–17 mm en lugar de 17–19 mm) y (3) plaquetas nasales con más caída vertical (las plaquetas se colocan más abajo del aro de la montura). Si el 20% o más de tus clientes mayoristas venden en mercados asiáticos, necesitas un SKU de ajuste asiático en tu línea. No intentes hacer que una montura de ajuste europeo funcione para caras asiáticas: la geometría no coopera.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Longitud de varilla y ancho de montura: cómo conseguir el ajuste global correcto</h2>
          
          <p>Si el ancho de puente determina la comodidad, la longitud de varilla y el ancho total de la montura determinan si las gafas de sol se quedan siquiera en tu cara.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Longitud de varilla: la variable regional</h3>
          
          <p>La longitud de varilla se mide desde el tornillo de la bisagra hasta la punta de la varilla, siguiendo la curva detrás de la oreja. Las longitudes estándar de la industria van de 125 mm a 155 mm. Esto es lo que les digo a mis clientes mayoristas:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Longitud de varilla</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Etiqueta de talla de montura</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135mm</td>
                  <td className="border border-gray-300 px-4 py-2">Pequeña / Juvenil</td>
                  <td className="border border-gray-300 px-4 py-2">Niños, mujeres menudas, monturas femeninas asiáticas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–140mm</td>
                  <td className="border border-gray-300 px-4 py-2">Pequeña–Mediana</td>
                  <td className="border border-gray-300 px-4 py-2">Unisex asiático, mujer europea, mercado femenino general</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">140–145mm</td>
                  <td className="border border-gray-300 px-4 py-2">Mediana</td>
                  <td className="border border-gray-300 px-4 py-2">Unisex europeo, ajuste universal global (opción segura por defecto)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–150mm</td>
                  <td className="border border-gray-300 px-4 py-2">Mediana–Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Hombre norteamericano, hombre europeo de talla grande</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">150–155mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande / XL</td>
                  <td className="border border-gray-300 px-4 py-2">Tallas grandes especiales, tallas grandes y altas, hombre de Oriente Medio</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Los errores en la longitud de varilla son brutales porque son inmediatamente obvios para quien las usa. Una varilla demasiado corta no llega a la oreja: la montura se asienta hacia adelante en la cara, los lentes quedan demasiado cerca de los ojos y todo se ve y se siente mal. Una varilla demasiado larga se extiende más allá de la oreja y la curva cae en el cuello en lugar de detrás de la oreja, lo que hace que la montura se deslice hacia adelante con el movimiento de la cabeza. Ambos son motivos de rechazo para el cliente.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Cómo especificar la longitud de varilla en tu pedido OEM</h3>
          
          <p>Cuando haces un pedido OEM con una fábrica china, especificas la longitud de varilla en la ficha técnica o en la orden de compra. Estas son las reglas que les doy a mis clientes:</p>
          
          <p><strong>Para monturas de acetato:</strong> Especificar una longitud de varilla diferente es fácil: la fábrica corta la varilla de un bloque de acetato más largo. No se requiere ningún cambio de utillaje. Si pides varillas de 145 mm en una montura que normalmente se envía con 140 mm, es un simple ajuste de corte. Impacto en el costo: cero. Esto significa que puedes pedir la misma montura de acetato con dos longitudes de varilla para diferentes mercados sin costo adicional.</p>
          
          <p><strong>Para monturas de inyección (TR90, policarbonato, nailon):</strong> La longitud de varilla está fijada por el molde. Cambiar la longitud de varilla requiere un inserto de molde nuevo, que cuesta 200–400 USD por inserto de varilla. Para una fábrica que opera moldes de 4 cavidades, eso son 800–1.600 USD por modelo de montura para añadir una segunda longitud de varilla. Este costo solo tiene sentido si pides 3.000+ unidades por variante de longitud de varilla: por debajo de ese volumen, absorbe el costo de utillaje en la primera tanda de producción.</p>
          
          <p><strong>Para monturas metálicas:</strong> La longitud de varilla la determina el bloque de brazo metálico y el troquel que dobla la curva de la oreja. Cambiar la longitud requiere un troquel nuevo (100–200 USD) y a veces bloques de brazo diferentes. Es relativamente barato en comparación con los moldes de inyección, pero igualmente vale la pena confirmar el costo antes de cambiar las especificaciones.</p>
          
          <p>Mi recomendación para la mayoría de los compradores mayoristas: si pides acetato, consigue dos longitudes de varilla (140 mm y 148 mm) y divide tu pedido 40/60 o 50/50. El costo es idéntico y cubrirás el 90% de tu base de clientes. Para monturas de inyección, pide varillas de 145 mm como opción universal por defecto, a menos que tengas datos de ventas regionales que te digan lo contrario.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Ancho total de la montura: la suma de todas las partes</h3>
          
          <p>El ancho total de la montura no es una de las tres medidas estándar, pero es el número más práctico para el ajuste. Se calcula como: <strong>(Ancho de lente × 2) + ancho de puente + aproximadamente 3–5 mm por el grosor del aro de la montura en cada lado.</strong></p>
          
          <p>Por ejemplo: una montura 52□18-145 con un grosor de aro de 2 mm en cada lado tiene un ancho total de aproximadamente (52 × 2) + 18 + (2 × 2) = 126 mm. Este es el tramo horizontal total de la montura, de bisagra a bisagra.</p>
          
          <p>Esta es una guía aproximada de tallas basada en el ancho total de la montura:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Ancho total de la montura</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Talla</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ajuste típico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">115–125mm</td>
                  <td className="border border-gray-300 px-4 py-2">Pequeña</td>
                  <td className="border border-gray-300 px-4 py-2">Mujeres menudas, jóvenes, caras estrechas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135mm</td>
                  <td className="border border-gray-300 px-4 py-2">Mediana</td>
                  <td className="border border-gray-300 px-4 py-2">Adulto unisex medio: la talla más vendida a nivel mundial</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–145mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Hombres medios a grandes, moda femenina sobredimensionada</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–155mm</td>
                  <td className="border border-gray-300 px-4 py-2">XL</td>
                  <td className="border border-gray-300 px-4 py-2">Hombres grandes, tallas especiales</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>El rango de ancho total de 125–135 mm es donde ocurre el 60–70% de las ventas globales de gafas de sol. Una montura con ancho de lente de 52 mm y un puente de 17–19 mm cae casi exactamente en este rango. Si vas a lanzar una nueva línea mayorista y no tienes datos de ventas regionales que guíen tus decisiones de tallas, empieza con monturas en la zona de ancho total de 125–130 mm con varillas de 145 mm. Esa combinación se ajusta a la mayor cantidad de caras en la mayor cantidad de mercados con la menor cantidad de quejas.</p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Preguntas Frecuentes</h2>
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
            <h2 className="text-3xl font-bold mb-4">¿Necesitas especificar las medidas de las monturas para tu mercado?</h2>
            <p className="text-xl mb-6 opacity-90">Cuéntame tu región objetivo y el perfil demográfico de tus clientes. Te recomendaré las especificaciones exactas de DP, ancho de puente, longitud de varilla y ancho de montura que maximizan el ajuste y minimizan las devoluciones — basadas en 20 años de datos de fábrica, no en suposiciones.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicita un Presupuesto Gratuito
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/frame-material-comparison" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metal: Guía de Materiales de Monturas</h3>
                <p className="text-gray-600 text-sm">Qué material de montura elegir según el ajuste, la durabilidad y el costo al por mayor.</p>
              </Link>
              <Link href="/blog/sunglasses-face-shape-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guía de Formas de Cara para Gafas de Sol</h3>
                <p className="text-gray-600 text-sm">Combina las medidas de las monturas con las formas de cara para mejorar la rotación de ventas.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contáctanos</h3>
                <p className="text-gray-600 text-sm">Solicita un presupuesto para tu pedido mayorista personalizado de gafas de sol.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
