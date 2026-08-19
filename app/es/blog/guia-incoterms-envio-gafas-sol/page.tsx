import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Incoterms de gafas de sol y guía de envío: FOB, CIF, EXW, DDP explicados',
  description: 'Un dueño de fábrica explica FOB, CIF, EXW y DDP para importadores de gafas de sol: cifras reales de envío, quién paga qué y cómo elegir el Incoterm correcto para tu primer pedido.',
  keywords: ['incoterms gafas de sol', 'FOB vs CIF vs EXW vs DDP', 'guía de envío gafas de sol', 'importar gafas de sol de china', 'costo flete gafas de sol', 'incoterms explicados para importadores', 'precio FOB gafas de sol', 'envío DDP gafas de sol', 'envío gafas de sol china', 'despacho aduanero gafas de sol'],
  alternates: {
    canonical: '/es/blog/guia-incoterms-envio-gafas-sol',
    languages: {
      'en': '/blog/sunglasses-incoterms-shipping-guide',
      'de': '/de/blog/sonnenbrillen-incoterms-versand-ratgeber',
      'fr': '/fr/blog/guide-incoterms-expedition-lunettes',
      'it': '/it/blog/guida-incoterms-spedizione-occhiali',
      'pt': '/pt/blog/guia-incoterms-envio-oculos',
    },
  },
};

const takeaways = [
  'Los Incoterms son un contrato de transferencia de riesgo, no un menú de precios: FOB, CIF, EXW y DDP definen cada uno un punto de entrega concreto donde la responsabilidad (y el costo) de la carga pasa del vendedor al comprador, y equivocarse en ese punto es como los importadores pierden silenciosamente miles en un solo contenedor',
  'Para un importador de gafas de sol primerizo, FOB casi siempre es la respuesta correcta: la fábrica se encarga del despacho de exportación y carga la mercancía en el buque en un puerto chino designado, y tú controlas el transitario, el seguro y la entrega — el costo total en destino suele ser un 10–15 % más bajo que dejar que el vendedor gestione CIF o DDP',
  'EXW (en fábrica) parece barato en la cotización pero es una trampa para compradores nuevos — te carga cada tarea de exportación, cada documento de exportación y cada riesgo desde la puerta de la fábrica, y un comprador que no sabe manejar el despacho de exportación chino pagará más en errores de lo que jamás ahorró en el precio de lista',
  'DDP es el único término donde el vendedor es responsable de los aranceles e impuestos del país de destino, lo que lo hace tentador para Amazon FBA y vendedores minoristas — pero pagas una prima del 8–15 % para que el vendedor absorba el riesgo aduanero, y pierdes visibilidad sobre el costo real en destino que estás pagando',
  'Los tres costos ocultos que destruyen los márgenes del importador son las tarifas de demora y detención (que cobran $50–150 por día cuando un contenedor queda demasiado tiempo en el puerto), los cargos de manipulación de terminal en destino (a menudo $200–500 por contenedor) y la carga sin asegurar — y ninguno aparece en el precio unitario FOB que te cotizó tu proveedor',
];

const quickStats = [
  { label: 'Flete marítimo típico, contenedor 40ft CN→US', value: '$2.500–4.500' },
  { label: 'Prima de costo en destino de CIF/DDP vs FOB', value: '8–15 %' },
  { label: 'Tarifa de demora/detención por día, por contenedor', value: '$50–150' },
  { label: 'Cargo de manipulación de terminal en destino (THC)', value: '$200–500' },
  { label: 'Proporción de importadores primerizos que pagan de más en flete', value: '~40 %' },
];

const faqs = [
  {
    question: '¿Cuál es la diferencia entre FOB y CIF para importar gafas de sol?',
    answer: 'Bajo FOB (Free On Board), la fábrica paga el despacho de exportación y la carga en el puerto chino designado, y tú tomas el control desde ahí — reservas el flete marítimo, contratas el seguro y gestionas el despacho de importación. Bajo CIF (Cost, Insurance, Freight), el vendedor paga el flete y una póliza de seguro básica hasta el puerto de destino, y luego te entrega la carga. FOB te da control de tu propio transitario y suele resultar más barato; CIF es más simple pero el vendedor elige el transitario y pagas un recargo sobre flete y seguro. Para gafas de sol — carga ligera y de bajo volumen — el margen de flete que un vendedor añade en CIF puede ser fácilmente del 8–15 %.',
  },
  {
    question: '¿Qué Incoterm es mejor para un importador de gafas de sol primerizo?',
    answer: 'FOB, en casi todos los casos. Obliga a la fábrica a gestionar la parte difícil — el despacho de exportación chino — mientras te da el control del transitario, el seguro y la entrega en destino, que es donde los importadores primerizos pierden más dinero cuando alguien más lo gestiona. La única excepción: si tu pedido es lo bastante pequeño para enviar por mensajería aérea (DDP por express), o si haces Amazon FBA y quieres que el vendedor entregue en un almacén de Amazon con los aranceles pagados, DDP realmente vale la prima por la simplicidad. Para un primer contenedor completo, empieza con FOB.',
  },
  {
    question: '¿Quién paga los aranceles e impuestos bajo cada Incoterm?',
    answer: 'Bajo EXW, FOB, CIF y CFR, el importador (tú) paga todos los aranceles, el IVA y los impuestos de importación del país de destino — la responsabilidad del vendedor termina antes de que la mercancía llegue a tu país. Bajo DDP (Delivered Duty Paid), el vendedor es responsable de los aranceles e impuestos de destino, y esa es toda la razón por la que DDP exige una prima. Ten en cuenta que DDP en un envío marítimo aún requiere que el vendedor (o su agente aduanal) despache la mercancía a tu nombre en muchos países, lo que añade complejidad y costo — la mayoría de los vendedores cotizan DDP un 8–15 % por encima de FOB para cubrir ese riesgo.',
  },
  {
    question: '¿Cuánto cuesta enviar gafas de sol desde China?',
    answer: 'Depende del volumen y el destino, pero aquí van cifras reales. Un contenedor de 40 pies de China a la costa este de EE. UU. cuesta aproximadamente $2.500–4.500 de flete marítimo según la temporada; a Europa suele ser $2.000–3.500. Las gafas de sol son ligeras y de bajo volumen, así que un solo contenedor de 40ft puede llevar 100.000–150.000 pares en bolsas de polietileno, lo que deja el costo de flete en solo $0,02–0,05 por par. El error de los importadores primerizos es pagar flete aéreo por una cantidad de marítimo — el flete aéreo para gafas de sol cuesta $4–7 por kilogramo, frente a $0,05–0,15 por kilogramo por mar, y esa diferencia borra tu margen.',
  },
  {
    question: '¿Qué son las tarifas de demora y detención, y cómo las evito?',
    answer: 'La demora (demurrage) es la tarifa que cobra la naviera cuando un contenedor queda en el puerto más allá de su tiempo libre (típicamente 3–7 días libres); la detención (detention) es la tarifa cuando retienes el contenedor vacío más allá de la ventana de devolución permitida (típicamente 5–14 días libres). Ambas cuestan $50–150 por día. Los importadores las sufren cuando su documentación aduanera llega tarde o su transportista no recoge a tiempo. Las evitas teniendo a tu agente aduanal, tu transitario y tu cita de entrega alineados antes de que el buque siquiera llegue — el contenedor corre contra el reloj desde el momento en que se descarga.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'guia-incoterms-envio-gafas-sol';

export default function GuiaIncotermsEnvioGafasSol() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Incoterms de gafas de sol y guía de envío' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Incoterms de gafas de sol y guía de envío: FOB, CIF, EXW, DDP explicados para importadores",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica explica FOB, CIF, EXW y DDP para importadores de gafas de sol: cifras reales de envío, quién paga qué y cómo elegir el Incoterm correcto para tu primer pedido.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Importación y logística</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Incoterms de gafas de sol y guía de envío: FOB, CIF, EXW, DDP explicados
          </h1>
          <p className="text-xl text-gray-600">
            Un comprador me envió una vez la cotización de un competidor y preguntó por qué era un 12 % más barata que la mía. Misma montura, misma MOQ, mismas especificaciones. La diferencia eran las tres letras al final del precio: EXW. El competidor cotizaba en fábrica, lo que significaba que el comprador pagaría el despacho de exportación, el transporte al puerto, el flete marítimo, el seguro y los aranceles de importación de su propio bolsillo — nada de lo cual aparecía en la cotización. Aquí está todo lo que desearía que los importadores primerizos entendieran sobre Incoterms antes de transferir un depósito.
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
          <h2 className="font-bold mb-4">Tabla de contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Qué son realmente los Incoterms (y por qué los importadores salen perjudicados)</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">FOB vs CIF vs EXW vs DDP: las cifras reales de un dueño de fábrica</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Cómo elegir el Incoterm correcto para tu primer pedido</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Costos ocultos que los importadores siempre pasan por alto</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas frecuentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Envío de gafas de sol — Datos rápidos" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Qué son realmente los Incoterms (y por qué los importadores salen perjudicados)</h2>

          <p>Los Incoterms — abreviatura de International Commercial Terms (Términos Comerciales Internacionales) — son un conjunto de códigos de tres letras publicados por la Cámara de Comercio Internacional que definen una sola cosa: <strong>el punto en el que el riesgo y el costo de la mercancía se transfieren del vendedor al comprador.</strong> Esa es toda su función. No definen quién es dueño de la mercancía. No definen las condiciones de pago. Definen la entrega.</p>

          <p>Si no recuerdas nada más de esta guía, recuerda esa frase. Los Incoterms son un punto de entrega. Todo lo que esté después de ese punto es tu problema y tu costo; todo lo anterior es del vendedor.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Por qué el punto de entrega importa más que el precio</h3>

          <p>Dos proveedores pueden cotizarte las "mismas" gafas de sol a dos precios muy distintos, y ninguno miente. Una fábrica que cotiza <strong>$1,80 FOB Shenzhen</strong> está diciendo: "Voy a despacharlas para exportación, transportarlas al puerto y cargarlas en el buque por $1,80 el par." Un intermediario que cotiza <strong>$1,50 EXW</strong> está diciendo: "Te entrego esto en mi aparcamiento por $1,50, y tú te ocupas del resto." El "ahorro" de $0,30 se evapora en el momento en que pagas el agente de despacho de exportación, el transporte portuario, la manipulación de terminal y los errores que cometerás al hacerlo todo por primera vez.</p>

          <p>Por eso los importadores experimentados siempre comparan cotizaciones <em>sobre el mismo Incoterm.</em> Comparar una cotización FOB con una EXW es comparar manzanas con una bolsa de piezas de manzana sin montar. Lo más valioso que puedes hacer como comprador es forzar a cada proveedor a la misma base antes de comparar precios.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Los cuatro términos que realmente verás</h3>

          <p>Hay once Incoterms en la edición 2020, pero en el comercio de gafas de sol verás cuatro de ellos el 95 % de las veces. Aquí va cada uno en una frase sencilla, porque son las versiones legales las que hacen tropezar a los compradores.</p>

          <p><strong>EXW (Ex Works / En fábrica).</strong> La única obligación del vendedor es tener la mercancía lista en sus instalaciones. Tú eres responsable de todo, desde cargar el camión en su puerta de fábrica hasta despachar la importación en tu propio país. Esta es la cotización que parece más barata y el costo real más caro para un comprador nuevo.</p>

          <p><strong>FOB (Free On Board / Franco a bordo).</strong> El vendedor se encarga del despacho de exportación y carga la mercancía en el buque que tú designes en el puerto designado. El riesgo y el costo se te transfieren en el momento en que la mercancía está a bordo. Este es el término de trabajo del comercio de importación de gafas de sol.</p>

          <p><strong>CIF (Cost, Insurance, Freight).</strong> El vendedor paga el flete y una póliza de seguro básica hasta el puerto de destino, y te entrega la mercancía (y los documentos) allí. Tú sigues pagando aranceles y despachando aduanas. La trampa: el vendedor elige el transitario y recarga tanto el flete como el seguro.</p>

          <p><strong>DDP (Delivered Duty Paid / Entregada con derechos pagados).</strong> El vendedor asume la responsabilidad hasta tu destino designado, incluidos los aranceles e impuestos del país de destino. Es el término de máxima responsabilidad para el vendedor, y exactamente por eso exige el precio más alto.</p>

          <p>También están <strong>CFR</strong> (como CIF pero sin seguro) y <strong>FCA</strong> (el hermano aéreo de FOB), y te los encontrarás ocasionalmente. Pero domina primero EXW, FOB, CIF y DDP, y entenderás el resto al instante.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">FOB vs CIF vs EXW vs DDP: las cifras reales de un dueño de fábrica</h2>

          <p>Déjame poner cifras reales, porque los Incoterms no significan nada en abstracto y lo significan todo en concreto. Voy a recorrer un pedido realista: <strong>10.000 pares de gafas de sol de acetato a $1,80 FOB Shenzhen</strong>, enviadas por mar a un comprador en Róterdam, Países Bajos.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Partida de costo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">EXW</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">FOB</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">CIF</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DDP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Precio unitario (10.000 pares)</td>
                  <td className="border border-gray-300 px-4 py-2">$1,50</td>
                  <td className="border border-gray-300 px-4 py-2">$1,80</td>
                  <td className="border border-gray-300 px-4 py-2">$1,95</td>
                  <td className="border border-gray-300 px-4 py-2">$2,15</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Despacho de exportación + transporte China</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Incluido</td>
                  <td className="border border-gray-300 px-4 py-2">Incluido</td>
                  <td className="border border-gray-300 px-4 py-2">Incluido</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Flete marítimo (consolidado LCL)</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Incluido (con recargo)</td>
                  <td className="border border-gray-300 px-4 py-2">Incluido</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Seguro</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Incluido (cobertura mínima)</td>
                  <td className="border border-gray-300 px-4 py-2">Incluido</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Aranceles + IVA en destino</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Paga el vendedor</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>¿Quién controla el transitario?</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Comprador</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Comprador</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Vendedor</td>
                  <td className="border border-gray-300 px-4 py-2">Vendedor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Leyendo la tabla: a dónde va realmente el dinero</h3>

          <p>Mira los precios unitarios. EXW parece $0,30 más barato que FOB, pero esos $0,30 no te compran absolutamente nada — aún tienes que pagar el despacho de exportación y el transporte, lo que para 10.000 pares de gafas de sol cuesta aproximadamente $300–600 sin importar cuán barato fuera el precio unitario. Un comprador que "ahorró" $3.000 eligiendo EXW en lugar de FOB gastará al menos esa cantidad en un agente de exportación chino, transporte portuario y el cargo de manipulación de terminal que la fábrica habría absorbido bajo FOB.</p>

          <p>Ahora mira CIF. El vendedor ha añadido $0,15 por par ($1.500 en total) por flete y seguro. Para un envío LCL de 10.000 pares — las gafas de sol son ligeras, esto son quizá 8–12 metros cúbicos — el flete real de Shenzhen a Róterdam es de unos $400–700 en carga consolidada. El vendedor te cobra aproximadamente el doble del costo real del flete y lo llama comodidad. Ese es el recargo CIF, y así es como los vendedores ganan silenciosamente más con tu logística que con su propio producto.</p>

          <p>¿Y DDP a $2,15? El vendedor ha añadido $0,35 por par para cubrir aranceles de destino, gestión del IVA y el riesgo de equivocarse en la clasificación arancelaria. Para un comprador que nunca ha importado, esos $0,35 (unos $3.500 en este pedido) son probablemente dinero bien gastado — estás pagando a alguien para que asuma el riesgo aduanero. Para un comprador que ya lo ha hecho varias veces, esos mismos $3.500 son margen que podrías conservar operando FOB y despachando tú mismo con un agente local.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La única cifra que lo cambia todo: flete por par</h3>

          <p>Aquí está el secreto de dueño de fábrica que la mayoría de importadores nunca calcula: <strong>el costo de flete por par.</strong> Las gafas de sol son absurdamente ligeras y de bajo volumen. Un par de gafas de acetato en bolsa de polietileno pesa unos 25–35 gramos y ocupa unos 0,6–1 litro empaquetado. Un contenedor de 40 pies lleva unas 100.000–150.000 pares. Así que un flete de contenedor de $3.000 repartido entre 120.000 pares resulta en $0,025 por par — dos centavos y medio.</p>

          <p>Compáralo con el flete aéreo a $4–7 por kilogramo: un par de 30 gramos cuesta $0,12–0,21 en volar. Eso es 5–8 veces más por par. El flete aéreo solo tiene sentido para muestras, reposiciones urgentes de un SKU que se vende rápido, o marcas de alto valor donde la velocidad vale la prima. Para un pedido mayorista rutinario, el flete marítimo a dos centavos por par es toda la razón por la que importar gafas de sol de China es rentable en absoluto. Si un proveedor está enrutando silenciosamente tu pedido "barato" por aire sin decírtelo, acaba de borrar tu margen — por eso siempre confirmas la ruta, no solo el precio.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Cómo elegir el Incoterm correcto para tu primer pedido</h2>

          <p>No hay un único Incoterm "correcto" — solo hay el Incoterm correcto para <em>tu situación.</em> Aquí está el marco de decisión que doy a mis compradores, en orden de cuántas veces recomiendo cada uno.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Empieza con FOB (casi siempre)</h3>

          <p>Para un primer pedido completo por mar, FOB es el valor por defecto. La razón es simple: pone las dos cosas más difíciles — el despacho de exportación chino y la carga en un buque — en manos de la parte que lo hace todos los días (la fábrica), mientras mantiene el flete y el despacho de destino en tus manos, donde puedes controlar el costo y elegir un transitario de confianza. El trabajo de la fábrica termina limpiamente en la barandilla del buque, y desde ahí tienes visibilidad total.</p>

          <p>La única habilidad real que FOB requiere de ti es encontrar un transitario decente y un agente aduanal local. Ambos son servicios de consumo — pide a tres transitarios una cotización para el mismo envío y verás la diferencia. Esto no es una razón para evitar FOB; es una razón para pasar una tarde consiguiendo tres cotizaciones.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Usa DDP para pedidos pequeños, Amazon FBA y velocidad</h3>

          <p>DDP se gana su prima en tres situaciones concretas. Primero, <strong>pedidos pequeños</strong>: si importas 500 pares por mensajería aérea, la simplicidad de que el vendedor gestione los aranceles supera el ahorro de hacerlo tú mismo. Segundo, <strong>Amazon FBA</strong>: un vendedor que entregue tu mercancía en un almacén de Amazon con aranceles pagados y una etiqueta de caja FBA correcta elimina una enorme cantidad de dolor operativo para un vendedor FBA que no quiere tocar aduanas. Tercero, <strong>dropshipping minorista o lanzamientos urgentes</strong> donde la previsibilidad importa más que el margen.</p>

          <p>Solo entra con los ojos abiertos. DDP significa que el vendedor controla toda la cadena, lo que significa que pierdes visibilidad sobre el desglose de lo que realmente estás pagando. Eso está bien cuando el pedido es pequeño y la alternativa es una pesadilla aduanera; está menos bien cuando importas 20.000 pares y la prima DDP es de $7.000 que podrías haber conservado con un agente competente.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Considera CIF solo si aún no tienes transitario</h3>

          <p>CIF es el punto medio: el vendedor gestiona el flete y te entrega la mercancía en tu puerto de destino. Es genuinamente útil cuando aún no tienes un transitario y el pedido es demasiado grande para la comodidad de DDP pero demasiado pequeño para justificar construir una relación de flete. El intercambio, de nuevo, es el recargo y la pérdida de control — el vendedor elige el transitario, y el transitario trabaja para el vendedor, no para ti.</p>

          <p>Mi consejo honesto: omite CIF por completo para negocios recurrentes. Úsalo una vez, en tu primer pedido, mientras sigues aprendiendo. Luego consigue tu propio transitario en el pedido dos y mueve todo a FOB. CIF son ruedas de entrenamiento; FOB es la bicicleta.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Evita EXW hasta que domines la logística de exportación china</h3>

          <p>EXW tiene exactamente un caso de uso legítimo: ya tienes un transitario en China con licencia de exportación, un acuerdo de transporte chino y un agente aduanal que gestiona el despacho de exportación por ti, y quieres sacar cada centavo de logística del precio unitario. Ese es un montaje real y sofisticado — algunos importadores grandes lo operan. No es, sin embargo, donde nadie empieza.</p>

          <p>Para un comprador primerizo, EXW es una trampa con etiqueta de descuento. Pagarás a un agente chino por el despacho de exportación, pagarás a un transportista por mover la mercancía al puerto, pagarás la manipulación de terminal — y si algo sale mal entre la puerta de la fábrica y el buque, es enteramente tu problema. La fábrica, habiéndote entregado la mercancía en su puerta, tiene cero responsabilidad y cero incentivo para ayudar. Lo que ahorraste en el precio unitario, lo gastarás — y probablemente lo sobrepasarás — aprendiendo por las malas.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">La matriz de decisión de un vistazo</h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Tu situación</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Incoterm recomendado</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Por qué</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Primer contenedor marítimo completo</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>FOB</strong></td>
                  <td className="border border-gray-300 px-4 py-2">La fábrica gestiona la exportación; tú controlas flete y destino</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Pedido pequeño por mensajería aérea</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">La simplicidad supera el ahorro en volúmenes pequeños</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Entrega a Amazon FBA</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Aranceles pagados, entregado al almacén, etiqueta FBA gestionada</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sin transitario aún, pedido mediano</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>CIF</strong></td>
                  <td className="border border-gray-300 px-4 py-2">El vendedor gestiona el flete mientras construyes relación de transitario</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Transitario propio en China + licencia de exportación</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>EXW</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Saca el costo logístico cuando puedes operarlo tú mismo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Costos ocultos que los importadores siempre pasan por alto</h2>

          <p>El precio unitario nunca es el precio. Cada vez que un importador primerizo me envía su "gran oferta" y pregunta por qué la mercancía llegó un 40 % más cara de lo esperado, la respuesta son los mismos cinco costos ocultos. Aquí están, para que no te sorprendan.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Demora y detención — el reloj del puerto</h3>

          <p>Cuando tu contenedor llega, la naviera te da unos "días libres" para recogerlo — típicamente 3–7 días para la demora (el contenedor cargado en el puerto). Una vez lo tienes, tienes 5–14 días libres de "detención" para descargar y devolver la caja vacía. Excede cualquiera de las ventanas y el reloj arranca: <strong>$50–150 por día.</strong> Una retención aduanera de dos semanas puede añadir silenciosamente $1.000–2.000 a tu costo en destino, y es la forma más común en que los importadores sangran dinero sin notarlo. La solución es la preparación: ten a tu agente, tu transitario y tu cita de camión alineados antes de que el buque atraque.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Manipulación de terminal en destino y cargos locales</h3>

          <p>Incluso en un envío FOB o CIF, el puerto de destino tiene un montón de tarifas que la cotización del vendedor nunca incluye: el cargo de manipulación de terminal (THC), tarifas de documentación, la tarifa de seguridad del transportista y el "cargo de servicio portuario" que varía por terminal. Juntos suman <strong>$200–500 por contenedor</strong> y se facturan al importador a la llegada. Pide a tu transitario una cotización de destino <em>todo incluido</em> por adelantado — las que detallan todo — para que la factura de llegada no sea una sorpresa.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Arancel e IVA sobre el valor en destino, no sobre el precio FOB</h3>

          <p>La mayoría de importadores saben que los aranceles existen; la mayoría subestima la base. El arancel de importación se calcula sobre el <em>valor aduanero</em>, que en la mayoría de jurisdicciones es el precio FOB más flete más seguro — esencialmente el valor CIF — y no el precio FOB que negociaste con la fábrica. Luego el IVA se cobra encima del valor con arancel incluido. Así que tu arancel del 8 % no es el 8 % de $1,80; es el 8 % del valor en destino, y tu IVA del 21 % se apila encima. El golpe fiscal efectivo casi siempre es más alto que la tasa arancelaria nominal. Haz que tu agente modele el costo real en destino antes de comprometerte a un precio unitario.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. El seguro que nunca compraste</h3>

          <p>Bajo FOB y EXW, el seguro es tu responsabilidad, y la mayoría de compradores primerizos lo omiten. Eso es un error. Un contenedor perdido o dañado sin seguro es una pérdida total — igual pagaste a la fábrica, y la responsabilidad de la naviera está limitada a una cantidad minúscula por kilogramo bajo convenios internacionales. El seguro de carga marítima cuesta aproximadamente <strong>0,3–0,5 % del valor de la carga</strong> — unos pocos dólares para asegurar unos miles de dólares de gafas de sol. Cómpralo. En el momento en que posees el riesgo (FOB a bordo, EXW en la puerta), también deberías poseer el seguro.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. El costo de equivocarse en el código HS</h3>

          <p>Las gafas de sol caen bajo un código específico del Sistema Armonizado (HS) — típicamente 9004.10 para gafas de sol, con subcódigos según el material. Si te equivocas en la clasificación, la aduana reclasificará tu mercancía, a menudo a una tasa arancelaria más alta, más penalizaciones, más los días de retraso (y las tarifas de demora del punto 1) mientras lo resuelven. Un agente aduanal competente confirmará el código HS correcto antes de que envíes. Uno barato copiará cualquier código que la factura del proveedor tenga listado. Aquí no es el lugar para ahorrar $50.</p>

          <p>Suma esos cinco y verás por qué una montura FOB de $1,80 aterriza en $2,40–2,80 cuando está en tu almacén — y por qué un comprador que solo comparó precios unitarios cree que lo están estafando cuando el verdadero culpable son el flete, los aranceles y los cargos portuarios que nunca vio venir.</p>

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
            <h2 className="text-3xl font-bold mb-4">Obtén una cotización de costo en destino, no solo un precio unitario</h2>
            <p className="text-xl mb-6 opacity-90">Envíame tu especificación y puerto de destino. Te daré el precio FOB, la estimación de flete y un desglose completo del costo en destino — para que sepas exactamente qué aterriza en tu almacén antes de transferir un depósito.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Obtén una cotización gratis
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más desde la planta de fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sunglasses-factory-audit-checklist" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Lista de auditoría de fábrica de gafas de sol</h3>
                <p className="text-gray-600 text-sm">Una lista de 20 puntos para evaluar a un proveedor antes de transferir dinero.</p>
              </Link>
              <Link href="/blog/how-to-choose-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Cómo elegir un fabricante de gafas de sol</h3>
                <p className="text-gray-600 text-sm">Los criterios de selección que separan una fábrica real de un sitio web pulido.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contacto</h3>
                <p className="text-gray-600 text-sm">Obtén una cotización para tu pedido mayorista personalizado de gafas de sol.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
