import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Aranceles de Importación de Gafas de Sol 2026: Tasas para EE.UU., UE, Reino Unido, Australia y Canadá',
  description: 'Guía completa de aranceles de importación para gafas de sol. Códigos HS, tasas arancelarias por país, tratados de libre comercio y cómo calcular el costo de importación. Guía práctica del dueño de fábrica para ahorrar en aduanas.',
  keywords: ['aranceles importación gafas sol', 'tasas arancelarias gafas sol', 'código HS gafas sol', 'calculadora aranceles importación', 'despacho aduanero gafas', 'impuesto importación óptica', 'arancel EE.UU. gafas', 'arancel UE gafas'],
  alternates: {
    canonical: '/es/blog/aranceles-importacion-gafas-sol',
  },
};

const takeaways = [
  'Código HS 9004.10: Las gafas de sol se clasifican bajo este código armonizado globalmente — arancel EE.UU. 2,0%, UE 2,9%, Reino Unido 2,0%, Australia 5,0% (pero a menudo 0% mediante TLC), Canadá 0% bajo normas CPTPP',
  'El mayor costo no es el arancel — son los gastos de envío y agencia aduanera. Un envío de gafas de $5.000 puede pagar $100 en aranceles pero $400 en honorarios del transitario. Elige a tu socio logístico con cuidado.',
  'El Certificado de Origen es tu herramienta más poderosa para reducir aranceles. Si tus gafas se fabrican en China (o Vietnam/India), puedes solicitar tasas preferenciales bajo múltiples TLC — pero solo con la documentación adecuada',
  'Los aranceles de la Sección 301 sobre gafas chinas (HS 9004.10.0000) añadieron un 7,5% adicional sobre el 2,0% base para importaciones a EE.UU. en 2026 — la tasa efectiva total es del 9,5% a menos que califiques para una exención',
  'Fórmula de costo CIF (Cost, Insurance, Freight): (Precio FOB × Cantidad + Flete + Seguro) × (1 + Tasa Arancelaria) + Agencia + Gastos Portuarios + Entrega Final. La mayoría de los nuevos importadores subestiman entre un 15-20% en su primer pedido',
  'Los umbrales de valor importan: el mínimo de EE.UU. es $800 (envíos por debajo pagan cero arancel), el sistema IOSS de la UE permite IVA pre-recaudado para pedidos de 150 € o menos, Reino Unido tiene umbral de £135. Estructura los pedidos pequeños de muestras para mantenerse bajo estos límites',
];

const quickStats = [
  { label: 'Arancel Base EE.UU. (HS 9004.10)', value: '2,0%' },
  { label: 'Recargo Sección 301 EE.UU.', value: '+7,5%' },
  { label: 'Tasa Arancelaria UE', value: '2,9%' },
  { label: 'Tasa Arancelaria Reino Unido', value: '2,0%' },
  { label: 'Tasa Arancelaria Australia', value: '5,0% (0% con CoO)' },
  { label: 'Tasa Arancelaria Canadá', value: '0% (CPTPP)' },
];

const faqs = [
  {
    question: '¿Cuál es el código HS para gafas de sol?',
    answer: 'Las gafas de sol se clasifican bajo el Código HS 9004.10 — "Gafas, anteojos y artículos similares, correctores, protectores u otros, gafas de sol." Este es el código armonizado utilizado globalmente. La subpartida específica de EE.UU. es 9004.10.0000. Para gafas de sol graduadas, usa 9004.90.0000. Para gafas de seguridad/industriales, usa 9004.90.0090. Siempre confirma con tu agente de aduanas — las sanciones por clasificación incorrecta comienzan en 2× el arancel debido.',
  },
  {
    question: '¿Cuánto arancel de importación pago por gafas de sol de China a EE.UU.?',
    answer: 'El arancel base de EE.UU. para HS 9004.10 es del 2,0%. Sin embargo, los aranceles de la Sección 301 sobre productos de origen chino añaden un 7,5% (a fecha de 2026), lo que eleva la tasa efectiva al 9,5%. En un envío FOB de $10.000, eso son $950 en aranceles antes de añadir flete, seguro y gastos de agencia. Si fabricas en Vietnam, India o Bangladesh, evitas el recargo de la Sección 301 por completo — solo se aplica el 2,0% base.',
  },
  {
    question: '¿Cuál es el arancel de importación de la UE para gafas de sol de China?',
    answer: 'La UE aplica una tasa arancelaria del 2,9% sobre las gafas de sol HS 9004.10 procedentes de China. No hay aranceles adicionales más allá de la tasa estándar. Para un envío de 8.000 €, eso equivale aproximadamente a 232 € en aranceles. La UE no tiene un equivalente a la Sección 301. Sin embargo, el IVA se aplica a la tasa del país de destino (19-27% según el estado miembro). Usa el sistema IOSS (Ventanilla Única de Importación) para envíos inferiores a 150 € para pre-recaudar el IVA y agilizar el despacho aduanero.',
  },
  {
    question: '¿Necesito un Certificado de Origen para reducir los aranceles de importación?',
    answer: 'Sí — el Certificado de Origen (CoO) es el documento más importante para la reducción de aranceles. Para importaciones a EE.UU. desde China, un CoO no reduce actualmente el recargo de la Sección 301, pero es esencial para reclamar beneficios de TLC con otros orígenes. Para importaciones a Australia, Canadá o Reino Unido bajo el CPTPP o TLC bilaterales, un CoO válido puede reducir el arancel al 0%. Tu fábrica debe proporcionarlo como parte de los documentos de envío — si no pueden o no quieren, busca otro proveedor. El CoO debe estar sellado por CCPIT (Consejo Chino para la Promoción del Comercio Internacional) para ser válido, lo cual cuesta aproximadamente $30-50 y tarda 2-3 días hábiles.',
  },
  {
    question: '¿Cómo calculo el costo total de importación de un pedido de gafas de sol?',
    answer: 'Costo CIF = Precio FOB × Cantidad + Flete Marítimo (o Aéreo) + Seguro (típicamente 0,3-0,5% del valor CIF) + Arancel Aduanero (% del CIF) + Honorarios de Agencia ($75-200 por entrada) + Gastos Portuarios/Destino + Entrega Final. Ejemplo: 1.000 pares a $5/par FOB = $5.000. Flete marítimo = $600. Seguro = $28. CIF = $5.628. Arancel EE.UU. al 9,5% = $535. Agencia = $125. Gastos portuarios = $85. Entrega = $250. Costo total CIF = $6.623. Costo por unidad = $6,62. Añade siempre un margen del 5-10% para fluctuaciones de divisa y gastos imprevistos.',
  },
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'aranceles-importacion-gafas-sol';

export default function ArancelesImportacionGafasSolPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/es/' },
          { name: 'Blog', href: '/es/blog/' },
          { name: 'Aranceles de Importación de Gafas de Sol 2026' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Aranceles de Importación de Gafas de Sol 2026: Tasas para EE.UU., UE, Reino Unido, Australia y Canadá",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guía completa de aranceles de importación para gafas de sol. Códigos HS, tasas arancelarias por país, tratados de libre comercio y cómo calcular el costo de importación. Guía práctica del dueño de fábrica para ahorrar en aduanas.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/es/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
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

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Importación y Logística</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>13 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aranceles de Importación de Gafas de Sol 2026: Tasas País por País
          </h1>
          <p className="text-xl text-gray-600">
            Después de 20 años enviando gafas desde China a más de 50 países, esta es la verdad sobre los aranceles — los números, los atajos y la documentación que realmente te ahorra dinero.
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
          <h2 className="font-bold mb-4">Índice de Contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#hs-codes" className="text-primary-600 hover:underline">Códigos HS para Gafas de Sol: Acertar con la Clasificación</a></li>
            <li><a href="#us-duties" className="text-primary-600 hover:underline">Aranceles de Importación en EE.UU.: Sección 301 y la Realidad del 9,5%</a></li>
            <li><a href="#eu-duties" className="text-primary-600 hover:underline">Aranceles de Importación en la UE: Aranceles Bajos, IVA Alto</a></li>
            <li><a href="#uk-au-ca" className="text-primary-600 hover:underline">Reino Unido, Australia y Canadá: Oportunidades de TLC</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">Cómo Calcular el Costo CIF (Con Cifras Reales)</a></li>
            <li><a href="#duty-reduction" className="text-primary-600 hover:underline">7 Formas de Reducir tus Aranceles de Importación</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="Tasas de Aranceles de Importación de Gafas de Sol de un Vistazo" />

          {/* ─── Section 1: HS Codes ─── */}
          <h2 id="hs-codes" className="text-3xl font-bold mt-16 mb-6">Códigos HS para Gafas de Sol: Acertar con la Clasificación</h2>
          <p>
            Antes de hablar de tasas arancelarias, dejemos una cosa clara: si tu agente de aduanas presenta un código HS incorrecto, no estás ahorrando dinero — estás creando un pasivo. He visto a importadores intentar clasificar gafas de sol como &quot;accesorios de plástico&quot; (HS 3926) para obtener una tasa más baja, y la CBP atrapó a todos y cada uno de ellos.
          </p>
          <p>
            Las gafas de sol se clasifican bajo <strong>HS 9004.10</strong> — &quot;Gafas, anteojos y artículos similares, correctores, protectores u otros, gafas de sol.&quot; Este código está armonizado globalmente, lo que significa que cada país usa los mismos primeros seis dígitos. Las sub-clasificaciones clave:
          </p>
          <ul>
            <li><strong>9004.10.0000 (EE.UU.):</strong> Gafas de sol — sin graduación, incluyendo gafas de moda y deportivas</li>
            <li><strong>9004.90.0000 (EE.UU.):</strong> Otras gafas — gafas de sol graduadas, gafas de seguridad, gafas de lectura</li>
            <li><strong>9004.10.1000 (UE):</strong> Gafas de sol con lentes trabajadas ópticamente</li>
            <li><strong>9004.10.9100 (UE):</strong> Gafas de sol con lentes simplemente conformadas (la mayoría de las exportaciones chinas entran aquí)</li>
          </ul>
          <p>
            <strong>Consejo profesional desde la fábrica:</strong> Si tus gafas de sol tienen protección UV400 (que las nuestras tienen por defecto), siguen clasificándose bajo 9004.10. La distinción &quot;correctoras vs. protectoras&quot; solo importa si estás importando gafas graduadas. La mayoría de los pedidos de gafas al por mayor de proveedores como EyeView se clasifican correctamente como 9004.10 independientemente de las características de las lentes.
          </p>

          {/* ─── Section 2: US Duties ─── */}
          <h2 id="us-duties" className="text-3xl font-bold mt-16 mb-6">Aranceles de Importación en EE.UU.: Sección 301 y la Realidad del 9,5%</h2>
          <p>
            Estados Unidos es el mayor mercado para importaciones de gafas de sol — y el más caro en términos de aranceles si compras desde China. Aquí está el desglose:
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Tasa NMF Base: 2,0%</h3>
          <p>
            Bajo relaciones comerciales normales (NMF), HS 9004.10.0000 tiene un arancel ad valorem del 2,0%. Eso son $20 por cada $1.000 de valor declarado. No está mal.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Recargo Sección 301: +7,5%</h3>
          <p>
            Aquí es donde se pone caro. Los aranceles de la Sección 301 — impuestos sobre productos de origen chino desde 2018 — aplican un 7,5% adicional sobre HS 9004.10.0000 a fecha de 2026. La tasa original del 25% se redujo al 7,5% en 2020 y se ha mantenido ahí. <strong>Arancel efectivo total de EE.UU. sobre gafas chinas: 9,5%.</strong>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <p className="font-bold text-amber-800 mb-2">⚠️ La Sección 301 se Aplica al País de Origen, No al País de Embarque</p>
            <p className="text-amber-700 text-sm">Si tus gafas se fabrican en China pero se envían desde un almacén de Hong Kong, la Sección 301 sigue aplicándose. La Aduana de EE.UU. mira dónde se fabricaron los productos, no desde dónde se cargaron en el barco. La única forma de evitar la Sección 301 es fabricar completamente fuera de China.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">De Minimis: El Atajo de los $800</h3>
          <p>
            Bajo la Sección 321, los envíos valorados en $800 o menos entran a EE.UU. libres de aranceles — incluyendo productos de la Sección 301. Así es como muchas marcas pequeñas empiezan: pide 50-100 pares como muestras, divide en múltiples envíos por debajo de $800 cada uno, y paga cero arancel. Es completamente legal siempre que cada envío esté genuinamente por debajo del umbral y no estés dividiendo pedidos artificialmente para evadir aranceles (eso se llama &quot;abuso estructurado de minimis&quot; y la CBP está tomando medidas).
          </p>

          {/* ─── Section 3: EU Duties ─── */}
          <h2 id="eu-duties" className="text-3xl font-bold mt-16 mb-6">Aranceles de Importación en la UE: Aranceles Bajos, IVA Alto</h2>
          <p>
            La UE es refrescantemente sencilla en comparación con EE.UU. — sin Sección 301, sin recargos de guerra comercial. Pero el IVA es donde se esconde el verdadero costo.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Arancel Estándar: 2,9%</h3>
          <p>
            Bajo el Arancel Aduanero Común de la UE (TARIC), HS 9004.10.9100 (gafas de sol con lentes simplemente conformadas, que cubre la mayoría de las importaciones al por mayor) tiene una tasa arancelaria del 2,9%. Eso es menos de la mitad de la tasa efectiva de EE.UU. Para un pedido valorado en 10.000 € CIF, pagas 290 € en aranceles.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IVA: El Costo Real</h3>
          <p>
            Esto es lo que sorprende a los nuevos importadores: la UE añade IVA sobre el valor con aranceles incluidos. Si tu mercancía llega a Alemania (19% de IVA), el cálculo es:
          </p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 font-mono text-sm">
            <p>Valor CIF: 10.000 €</p>
            <p>Arancel (2,9%): +290 €</p>
            <p>Valor con Aranceles: 10.290 €</p>
            <p>IVA (19%): +1.955 €</p>
            <p className="font-bold">Total en Aduana: 12.245 €</p>
          </div>
          <p>
            <strong>Importante:</strong> El IVA generalmente es recuperable si eres una empresa registrada a efectos de IVA. Lo pagas en la importación y lo reclamas en tu siguiente declaración de IVA. Pero necesitas flujo de caja para cubrir el desfase de 90-120 días entre el pago y el reembolso.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IOSS: IVA Pre-Pagado para Pedidos Pequeños</h3>
          <p>
            La Ventanilla Única de Importación (IOSS) te permite pre-recaudar el IVA en el momento de la venta para envíos inferiores a 150 €. El comprador paga el IVA al realizar el pedido, tú lo remites a una única autoridad fiscal de la UE mensualmente, y las mercancías pasan la aduana sin que el destinatario pague nada en la entrega. EyeView admite facturación compatible con IOSS — indícanoslo al hacer el pedido y formatearemos tu factura comercial en consecuencia.
          </p>

          {/* ─── Section 4: UK, AU, CA ─── */}
          <h2 id="uk-au-ca" className="text-3xl font-bold mt-16 mb-6">Reino Unido, Australia y Canadá: Oportunidades de TLC</h2>
          <p>
            Estos tres mercados tienen las mejores oportunidades de reducción de aranceles si conoces los acuerdos comerciales.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Reino Unido: 2,0% Base, SPG Disponible</h3>
          <p>
            Después del Brexit, el Reino Unido aplica un arancel del 2,0% sobre las gafas de sol HS 9004.10. Bajo el Sistema de Preferencias Generalizadas del Reino Unido (SPG), los productos de China califican para tasas preferenciales — pero el margen de preferencia en 9004.10 es cero (la tasa NMF ya es el mínimo del SPG). Lo que cambia el cálculo: el Sistema de Comercio para Países en Desarrollo (DCTS) del Reino Unido ofrece arancel 0% para gafas fabricadas en 65 países elegibles, incluyendo India y Pakistán. Si puedes conseguir monturas de acetato de una fábrica india, el arancel británico baja a cero.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Australia: 5,0% Estándar, 0% Bajo TLC</h3>
          <p>
            El arancel estándar de Australia sobre HS 9004.10 es del 5,0% — el más alto entre los principales mercados. Pero el Tratado de Libre Comercio China-Australia (ChAFTA) eliminó los aranceles sobre gafas de sol en 2019. <strong>Con un Certificado de Origen válido, el arancel australiano es del 0%.</strong> Cada cliente australiano al que he enviado ahorra el 5% completo con la documentación CoO adecuada. El papeleo cuesta $35 en CCPIT y tarda 3 días. Para un pedido de $20.000, eso supone $1.000 ahorrados.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Canadá: 0% Bajo CPTPP</h3>
          <p>
            Canadá eliminó los aranceles sobre gafas de sol de origen chino bajo el Tratado Integral y Progresista de Asociación Transpacífico (CPTPP). <strong>Los importadores canadienses pagan 0% de arancel sobre HS 9004.10 desde China</strong> — una de las pocas categorías donde la relación comercial China-Canadá favorece al importador. Solo asegúrate de que tu factura comercial indique claramente el país de origen como China y el código HS como 9004.10.
          </p>

          {/* ─── Section 5: Landed Cost ─── */}
          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">Cómo Calcular el Costo CIF (Con Cifras Reales)</h2>
          <p>
            La mayoría de los nuevos importadores miran el precio FOB por unidad y piensan que ese es su costo. No lo es. Aquí tienes un cálculo real de costo CIF para un pedido típico:
          </p>

          <div className="bg-gray-100 rounded-lg p-6 my-6 font-mono text-sm space-y-1">
            <p className="font-bold text-base mb-3">Ejemplo: 1.000 Pares de Gafas de Acetato → EE.UU.</p>
            <p>Precio FOB (1.000 × $5,00): <span className="float-right">$5.000,00</span></p>
            <p>Flete Marítimo (LCL, Shanghái→LA): <span className="float-right">+$600,00</span></p>
            <p>Seguro Marítimo (0,5% del CIF): <span className="float-right">+$28,00</span></p>
            <p className="border-t border-gray-300 pt-1">Valor CIF (Base Aduanera): <span className="float-right">$5.628,00</span></p>
            <p>Arancel EE.UU. (9,5% del CIF): <span className="float-right">+$534,66</span></p>
            <p>Honorarios Agente Aduanas: <span className="float-right">+$125,00</span></p>
            <p>MPF (Tarifa Procesamiento Mercancía): <span className="float-right">+$29,66</span></p>
            <p>HMF (Tarifa Mantenimiento Portuario, 0,125%): <span className="float-right">+$7,04</span></p>
            <p>Gastos Puerto/CFS: <span className="float-right">+$85,00</span></p>
            <p>Transporte Último Tramo (Puerto→Almacén): <span className="float-right">+$250,00</span></p>
            <p className="border-t border-gray-300 pt-1 font-bold">Costo Total CIF: <span className="float-right">$6.659,36</span></p>
            <p className="font-bold text-primary-600">Costo CIF Por Par: <span className="float-right">$6,66</span></p>
          </div>

          <p>
            Ese par a $5,00 FOB realmente cuesta $6,66 cuando llega a tu almacén — un incremento del 33% sobre el precio de fábrica. Y este es el mejor escenario posible con flete marítimo. El flete aéreo añadiría $800-1.200, llevando el costo CIF por encima de $7,50/par.
          </p>

          {/* ─── Section 6: Duty Reduction ─── */}
          <h2 id="duty-reduction" className="text-3xl font-bold mt-16 mb-6">7 Formas de Reducir tus Aranceles de Importación</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">1. Consigue el Certificado de Origen — Siempre</h3>
          <p>
            Esto no es negociable para Australia, Canadá y cualquier mercado donde se apliquen TLC. Pide a tu fábrica que incluya un CoO sellado por CCPIT con cada envío de valor superior a $500. Costo: $30-50. Ahorro potencial: 5% del valor CIF. ROI: 100× o más.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Usa De Minimis para Muestras y Pedidos Pequeños</h3>
          <p>
            Mantén los pedidos iniciales de muestras por debajo de $800 (EE.UU.), 150 € (UE) o £135 (Reino Unido) para entrar libres de aranceles. Este es el mejor truco para probar nuevos estilos antes de comprometerte con volumen.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. Considera la Fabricación Dividida</h3>
          <p>
            Si envías a EE.UU. y el recargo del 7,5% de la Sección 301 está matando tus márgenes, considera fabricar en Vietnam o India en lugar de China. Vietnam tiene solo tasas NMF (2,0%) sin Sección 301. El costo de fábrica por unidad puede ser $0,30-0,50 más alto, pero el ahorro en aranceles a menudo supera el sobrecosto de fabricación en pedidos superiores a $10.000.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Declara Valores Precisos — Pero No Inflados</h3>
          <p>
            Declarar un valor en aduana inferior al real es ilegal. Pero declarar de más es simplemente tirar el dinero. Declara el valor real de la transacción (lo que pagaste a la fábrica). No lo infles &quot;por razones de seguro&quot; — contrata un seguro de carga por separado. Una sobre-declaración de $1.000 en un envío con destino a EE.UU. cuesta $95 en aranceles innecesarios.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. Envía FCL en Lugar de LCL Cuando Sea Posible</h3>
          <p>
            Si pides más de 3.000 pares, un contenedor completo (FCL) es más barato por unidad que la carga consolidada (LCL) y evita los gastos de CFS (Estación de Carga de Contenedores) en destino. El punto de equilibrio suele estar alrededor de 5-8 metros cúbicos de gafas — aproximadamente 2.000-3.000 pares con embalaje.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Usa un Agente de Aduanas Autorizado, No el que te Impone el Transitario</h3>
          <p>
            Los transitarios a menudo incluyen el despacho de aduanas a tarifas infladas. Un agente de aduanas autorizado independiente cobra $75-150 por entrada frente a $200-350 de los transitarios que subcontratan el trabajo. Para importadores frecuentes (más de 12 envíos/año), una fianza aduanera continua ($500/año) es más barata que las fianzas por envío individual ($50-75 cada una).
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Programa tus Envíos Fuera de Temporada Alta</h3>
          <p>
            Las tarifas de flete marítimo se disparan un 40-80% durante la temporada alta (agosto-octubre para inventario navideño, enero-febrero antes del Año Nuevo Chino). Como el flete es parte de tu valor CIF — y los aranceles se calculan sobre el CIF — un flete más alto significa aranceles más altos. Envía en marzo-mayo o noviembre para conseguir tarifas de flete más bajas y, por extensión, cálculos de aranceles más bajos.
          </p>

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
            <h2 className="text-3xl font-bold mb-4">¿Documentos de Envío? Nosotros los Gestionamos.</h2>
            <p className="text-xl mb-6 opacity-90">Cada pedido de EyeView incluye un Certificado de Origen sellado por CCPIT, factura comercial con códigos HS correctos y lista de empaque formateada para los requisitos aduaneros de tu país. Dinos tu destino y optimizaremos tu documentación para minimizar los aranceles.</p>
            <Link
              href="/es/contacto"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Cotización Gratis
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/es/blog/guia-importar-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Importar Gafas de Sol desde China</h3>
                <p className="text-gray-600 text-sm">Guía de importación paso a paso: aduanas, envío, control de calidad.</p>
              </Link>
              <Link href="/es/blog/guia-moq-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guía de Pedido Mínimo para Gafas</h3>
                <p className="text-gray-600 text-sm">¿Cuántos pares deberías pedir primero? Estrategias inteligentes de escalado.</p>
              </Link>
              <Link href="/es/contacto" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contáctanos</h3>
                <p className="text-gray-600 text-sm">Recibe una cotización para tu pedido personalizado de gafas al por mayor.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
