import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats, ProsCons } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'B2B vs B2C Gafas de Sol: ¿Qué Modelo de Negocio Realmente Genera Dinero en 2026?',
  description: 'Un dueño de fábrica que suministra tanto a mayoristas B2B como a marcas DTC compara las cifras reales: márgenes, flujo de caja, costos de adquisición de clientes y qué modelo sobrevive a una crisis.',
  keywords: ['negocio B2B gafas sol', 'marca eyewear B2C', 'mayorista vs DTC gafas', 'modelo negocio gafas', 'márgenes beneficio eyewear', 'crear marca gafas', 'estrategia DTC gafas'],
  alternates: {
    canonical: '/es/blog/b2b-vs-b2c-gafas-sol',
  },
};

const takeaways = [
  'B2B mayorista es un juego de volumen con márgenes brutos del 25–40% — predecible, menor riesgo, pero necesitas $50K+ para empezar y paciencia para esperar 60–90 días a que se liquiden los plazos de pago neto',
  'DTC (directo al consumidor) ofrece márgenes brutos del 65–80% pero quema efectivo en adquisición — la marca DTC de gafas promedio gasta $18–35 para adquirir un cliente en Meta, y esa cifra sube cada trimestre',
  'El ganador oculto que la mayoría pasa por alto es el modelo híbrido: vende B2B para financiar operaciones, usa DTC para construir valor de marca — las marcas suministradas por fábrica que triunfan casi siempre empiezan primero por el canal mayorista',
  'El costo de adquisición de clientes (CAC) en eyewear DTC se ha duplicado desde 2020 — un par de gafas de $29 con un CAC de $25 te deja $4 antes de pagar el producto, embalaje, envío o devoluciones',
  'El flujo de caja B2B es el asesino silencioso: plazos de pago neto-60 significan que puedes esperar 90 días desde que haces tu pedido de fábrica hasta ver ingresos — planifica al menos 3 meses de capital operativo antes de que salga tu primer pedido mayorista',
  'La marca mínima viable son $8.000–15.000 para lanzamiento solo mayorista vs. $25.000–75.000 para DTC con sitio web profesional, presupuesto publicitario y colchón de inventario — y esa cifra DTC asume que aciertas con los anuncios a la primera',
];

const quickStats = [
  { label: 'Margen Bruto B2B Mayorista', value: '25–40%' },
  { label: 'Margen Bruto DTC', value: '65–80%' },
  { label: 'CAC DTC (Meta Ads, 2026)', value: '$18–35/cliente' },
  { label: 'Capital Mínimo Lanzamiento B2B', value: '$8K–15K' },
  { label: 'Capital Mínimo Lanzamiento DTC', value: '$25K–75K' },
  { label: 'Plazos de Pago Neto B2B', value: 'Neto 30–90 días' },
];

const faqs = [
  {
    question: '¿Qué es más rentable: B2B mayorista o DTC en gafas de sol?',
    answer: 'Por unidad, DTC es mucho más rentable — 65–80% de margen bruto vs. 25–40% para mayorista. Pero la rentabilidad no es solo margen; es margen menos costo de adquisición menos devoluciones menos gastos generales. Una marca DTC que vende 1.000 pares/mes a $59 con 70% de margen pero gastando $25 de CAC por par está ganando aproximadamente $16,30/unidad antes de gastos generales. Un mayorista B2B moviendo 10.000 pares a $8 FOB a una cadena minorista puede ganar $1,50/unidad pero en una sola transacción sin gasto publicitario. Volumen × margen, no solo el porcentaje de margen, determina qué modelo genera más dinero.',
  },
  {
    question: '¿Cuánto dinero necesito para empezar una marca de gafas de sol?',
    answer: 'Para una marca B2B solo mayorista: $8.000–15.000 cubre muestras (3–5 estilos × $50–100 cada uno), inventario inicial (300–500 unidades en 5 estilos a $3–8/unidad FOB), branding básico, un sitio web sencillo y viaje a una feria comercial. Para una marca DTC: $25.000–75.000 cubre lo anterior más un e-commerce serio, fotografía profesional de producto, 2–3 meses de presupuesto publicitario a $3.000–10.000/mes, envío de producto a influencers y un mayor colchón de inventario (1.000–3.000 unidades). El mayor error que veo son marcas que lanzan DTC con $10K — se quedan sin presupuesto publicitario antes de aprender qué funciona.',
  },
  {
    question: '¿Puedo hacer tanto B2B como DTC con la misma marca?',
    answer: 'Sí, pero sé estratégico con los precios. Si vendes gafas al por mayor a $8 FOB a minoristas que las venden a $39,99, y también vendes los mismos modelos DTC en tu web a $29,99, acabas de perjudicar a tus socios minoristas. Los minoristas te abandonarán. La jugada híbrida es: (1) vende SKUs diferentes en mayorista vs. DTC, o (2) vende a PVP en tu canal DTC y ofrece a los minoristas un margen con el que puedan competir, o (3) usa tu negocio mayorista para financiar tu crecimiento DTC — construye la marca directa mientras mantienes las relaciones minoristas mediante ventanas de exclusividad o colecciones específicas por canal.',
  },
  {
    question: '¿Cuál es el mayor costo oculto en el modelo DTC de gafas?',
    answer: 'Las devoluciones. La tasa media de devolución para eyewear online es del 15–25% — mucho más alta que en la mayoría de categorías DTC porque el ajuste es subjetivo. Cada par devuelto te cuesta envío de salida, envío de retorno, inspección, reempaquetado y posible daño. En un par de $59 con $4 de envío de salida, una devolución puede costar $12–15 en logística total. Si el 20% de los pedidos vuelven, eso es efectivamente un costo de $2,40–3,00 por unidad que no aparece en tu P&L inicial. Añade el fraude por contracargo (clientes que afirman no haber recibido el artículo), y tu margen DTC real puede reducirse en 8–12 puntos porcentuales.',
  },
  {
    question: '¿Cuánto tiempo hasta que una marca de gafas sea rentable?',
    answer: 'B2B mayorista: 6–12 meses para ser rentable si consigues 2–3 cuentas minoristas decentes (pedidos de $3K–10K cada una) en tu primer trimestre. DTC: 12–24 meses es realista, y más de 18 meses es común. El primer año de DTC es casi siempre a pérdida — estás pagando por aprender qué creatividades funcionan, qué audiencias convierten y cuál es tu CAC sostenible. Las marcas que fuerzan la rentabilidad en el mes 6 a menudo recortan demasiado el gasto publicitario y estancan su crecimiento. Las marcas que triunfan tratan el primer año como una inversión en datos e infraestructura de adquisición de clientes.',
  },
];

const b2bPros = [
  'Ingresos predecibles de cuentas mayoristas recurrentes',
  'Cero gasto publicitario — tus minoristas se encargan de la captación',
  'Menor capital inicial requerido ($8K–15K)',
  'Sin quebraderos de cabeza por devoluciones — los minoristas las asumen',
  'Más fácil de escalar — un solo pedido puede ser de 5.000+ unidades',
];

const b2bCons = [
  'Plazos de pago neto-60 = 90 días entre pedido y dinero en mano',
  'Márgenes del 25–40% dejan poco margen de error en precios de fábrica',
  'Estás a un comprador de cadena cambiando de trabajo de perder el 40% de tus ingresos',
  'Contracargos y descuentos por rebajas erosionan tus ingresos netos',
  'Valor de marca limitado: el cliente conoce al minorista, no a ti',
];

const dtcPros = [
  '65–80% de márgenes brutos — cada venta se siente como una victoria',
  'Eres dueño de los datos del cliente, lista de email y valor de marca',
  'Control creativo — tu visión, tu marca, tus precios',
  'Potencial ilimitado — sin compradores bloqueando tu crecimiento',
  'Múltiplos de salida más altos — las marcas DTC se venden por 2–4× ingresos',
];

const dtcCons = [
  'CAC de $18–35/cliente se come la mayor parte del margen antes de gastos generales',
  'Tasa de devolución del 15–25% en eyewear reduce el margen neto 8–12 puntos',
  'Requiere experiencia profunda en Meta Ads, email marketing y CRO',
  '$25K–75K de capital mínimo de lanzamiento; la mayoría de fundadores primerizos fallan en los números de anuncios',
  'Sediento de efectivo: reinvertirás beneficios en anuncios durante 12–18 meses antes de ver ingresos netos reales',
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'b2b-vs-b2c-gafas-sol';

export default function B2BvsB2CGafasSolPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/es/' },
          { name: 'Blog', href: '/es/blog/' },
          { name: 'B2B vs B2C Gafas de Sol: ¿Qué Modelo de Negocio Genera Dinero Realmente?' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "B2B vs B2C Gafas de Sol: ¿Qué Modelo de Negocio Realmente Genera Dinero en 2026?",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica que suministra tanto a mayoristas B2B como a marcas DTC compara las cifras reales: márgenes, flujo de caja, costos de adquisición de clientes y qué modelo sobrevive a una crisis.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Estrategia de Negocio</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            B2B vs B2C Gafas de Sol: ¿Qué Modelo de Negocio Realmente Genera Dinero en 2026?
          </h1>
          <p className="text-xl text-gray-600">
            He visto marcas intentar ambos caminos desde la fábrica. Algunas facturan $2M/año. Otras quemaron seis cifras y desaparecieron. Estas son las matemáticas que separan los dos resultados.
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
            <li><a href="#the-real-numbers" className="text-primary-600 hover:underline">Las Cifras Reales: Economía Unitaria B2B vs B2C</a></li>
            <li><a href="#b2b-deep" className="text-primary-600 hover:underline">B2B Mayorista: El Constructor de Imperios de Crecimiento Lento</a></li>
            <li><a href="#dtc-deep" className="text-primary-600 hover:underline">DTC: Márgenes Altos, Riesgo Alto</a></li>
            <li><a href="#hybrid" className="text-primary-600 hover:underline">El Modelo Híbrido: Por Qué las Marcas Más Inteligentes Hacen Ambas Cosas</a></li>
            <li><a href="#which-for-you" className="text-primary-600 hover:underline">¿Qué Modelo se Adapta a tu Situación?</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="B2B vs DTC de un Vistazo" />

          {/* ─── Section 1: The Real Numbers ─── */}
          <h2 id="the-real-numbers" className="text-3xl font-bold mt-16 mb-6">Las Cifras Reales: Economía Unitaria B2B vs B2C</h2>
          <p>Déjame guiarte a través de un par real de gafas de sol. No hipotético. Una montura deportiva TR90 con lentes polarizadas — uno de nuestros estilos mayoristas más vendidos. Precio FOB de fábrica a 500 unidades: <strong>$4,80</strong> por par, incluyendo marca básica y una funda de microfibra.</p>

          <p>Si vendes ese par <strong>B2B mayorista</strong> a un minorista a $8,00 por unidad, tu margen bruto es del 40%. El minorista lo marca hasta $29,99 y se queda con su propio margen. Tú ganas $3,20 por par, multiplicado por los que pida el minorista. Un pedido de cadena de 2.000 unidades = $6.400 de beneficio bruto con esencialmente cero costo de marketing más allá de tu contacto inicial.</p>

          <p>Si vendes el mismo par <strong>DTC</strong> a $49,99 en tu propio sitio web, tu margen bruto es del 90,4% sobre el costo de producto. Suena increíble. Pero esto es lo que realmente sucede: el anuncio de Facebook/Instagram para adquirir ese cliente cuesta $22 de media. Procesamiento de tarjeta de crédito: $1,45. Mejora de embalaje para unboxing DTC: $1,20. Envío de salida: $4,50. Ya vas por $29,15 en costos antes de pagar tu sitio web, tu plataforma de email, tu fotografía de producto o tu propio salario. Ese margen del 90% se convierte en 42% neto antes de gastos generales — sigue siendo bueno, pero no &quot;me voy a jubilar con esto&quot;, y solo si tus anuncios convierten de forma consistente.</p>

          <p>Hace tres años, tuve un cliente llamado Marcus que lanzó una marca DTC con uno de nuestros estilos de acetato a $69 de venta. Sus primeros tres meses, el CAC era $14 y estaba eufórico. Para el sexto mes, los cambios de privacidad de iOS habían degradado su segmentación y el CAC subió a $31. Estaba perdiendo $7 por cada nuevo cliente. Pivotó a mayorista — mismas monturas, mismo branding — y en cuatro meses tenía presencia en 12 ópticas independientes por toda California, facturando $35K/mes con márgenes del 35% y cero gasto publicitario. Todavía tiene sitio DTC, pero ahora es un escaparate de marca que dirige a sus distribuidores minoristas, no su motor principal de ingresos.</p>

          {/* ─── Section 2: B2B Deep Dive ─── */}
          <h2 id="b2b-deep" className="text-3xl font-bold mt-16 mb-6">B2B Mayorista: El Constructor de Imperios de Crecimiento Lento</h2>

          <p>El B2B mayorista no es sexy. No verás marcas mayoristas en TechCrunch. No hay influencers &quot;fundador mayorista&quot; en TikTok. Pero entra en cualquier Sunglass Hut, cualquier óptica independiente, cualquier tienda de regalos de resort — cada par en esas estanterías llegó a través de una cadena de suministro mayorista. Alguien hizo un margen del 25–40% en esa venta, y lo hizo sin gastar un dólar en anuncios de Instagram.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Cómo Funciona Realmente el B2B</h3>
          <p>Consigues gafas de sol de una fábrica (o tú eres la fábrica). Construyes un catálogo — típicamente 20–50 estilos con 3–5 colores cada uno. Identificas compradores minoristas: cadenas de ópticas, boutiques independientes, tiendas de regalos de resort, líneas de cruceros, compradores de regalos corporativos, distribuidores de productos promocionales. Envías muestras, negocias precios y envías contra órdenes de compra. Pedido típico: 100–500 unidades por estilo. Ciclo típico de repedido: cada 3–6 meses por cuenta.</p>
          <p>La magia del B2B son las <strong>cuentas que se acumulan</strong>. Consigue cinco cuentas que hagan $5K cada una por trimestre, y estás en $100K de ingresos anuales con un coste de marketing casi nulo. Consigue veinte cuentas a ese nivel, y estás en $400K. El factor limitante no es el presupuesto publicitario — es a cuántos compradores puedes llamar por teléfono.</p>

          <ProsCons good={b2bPros} bad={b2bCons} title="B2B Mayorista" />

          <h3 className="text-2xl font-bold mt-10 mb-4">La Trampa del Flujo de Caja B2B</h3>
          <p>Esto es lo que las cifras de margen no te cuentan: el B2B funciona a crédito. Pagas a tu fábrica un 30% de depósito para empezar la producción, 70% antes del envío. Mientras tanto, tu cliente minorista te paga a neto-30 o neto-60 días. Traducción: puedes pagar a la fábrica $12.000 en la primera semana y no recibir ni un dólar de tu cliente hasta la semana doce. Si tienes tres pedidos en curso simultáneamente — que es lo que implica crecer — podrías tener $36.000+ de tu propio dinero inmovilizado en cualquier momento.</p>
          <p>Por eso le digo a los dueños de marcas mayoristas primerizos: ten seis meses de capital operativo antes de aceptar tu primer pedido. No tres meses. Seis. Porque el comprador que prometió un pedido en marzo puede no firmar hasta mayo, y su departamento de contabilidad puede tardar otros 45 días en emitir tu primer cheque. Estás dirigiendo un negocio, no una ONG, y los problemas de flujo de caja matan negocios más rápido de lo que nunca lo harán los malos productos.</p>

          {/* ─── Section 3: DTC Deep Dive ─── */}
          <h2 id="dtc-deep" className="text-3xl font-bold mt-16 mb-6">DTC: Márgenes Altos, Riesgo Alto</h2>

          <p>Todos los dueños de fábrica en China han visto una marca DTC explotar de un pedido de prueba de $3.000 a un repedido mensual de $50.000 en seis meses. Sucede. También es la excepción, no la regla. Por cada Warby Parker, hay 500 marcas de las que nunca has oído hablar que quemaron su capital de lanzamiento y cerraron silenciosamente.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Las Matemáticas DTC que Nadie Publica en LinkedIn</h3>
          <p>Un par de gafas de sol de $59. Coste de producto: $5,00 puesto en almacén. Margen bruto: 91,5%. Se ve increíble en una presentación.</p>
          <p>Costes reales por unidad vendida DTC:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Gafas de sol (FOB + envío): <strong>$5,00</strong></li>
            <li>Embalaje premium (caja personalizada, funda, paño, tarjeta de agradecimiento): <strong>$2,20</strong></li>
            <li>Adquisición de clientes (Meta/Google/TikTok combinado): <strong>$22,00</strong></li>
            <li>Procesamiento de tarjeta (2,9% + $0,30): <strong>$2,01</strong></li>
            <li>Envío de salida (media USPS/UPS): <strong>$4,80</strong></li>
            <li>Reserva para devoluciones (20% tasa devolución × $12 coste por devolución): <strong>$2,40</strong></li>
          </ul>
          <p>Coste total por unidad vendida: <strong>$38,41</strong>. Contribución neta por unidad: $20,59. Eso es un margen neto del 35% — todavía saludable, pero a años luz del 91,5% de margen bruto que todo el mundo cita. Y esos $20,59 tienen que cubrir tu suscripción de Shopify, plataforma de email Klaviyo, fotografía de producto, envío a influencers, desarrollo web, tu salario y el beneficio. De repente, vender 1.000 pares al mes con $20,59 de contribución = $20.590 para cubrir todos los gastos generales. Si tus costes fijos mensuales son $12.000 (salario, software, freelancers, almacén), te llevas a casa $8.590. No está mal. Pero vendiste $59.000 en producto para llegar ahí.</p>

          <ProsCons good={dtcPros} bad={dtcCons} title="DTC Gafas de Sol" />

          <h3 className="text-2xl font-bold mt-10 mb-4">El Impuesto de las Plataformas Publicitarias</h3>
          <p>Las marcas DTC no compiten en producto — compiten en atención. Y la atención en 2026 es cara. Los CPM de Meta (coste por mil impresiones) en la categoría de eyewear han subido de $12–18 en 2020 a $28–45 en 2026. El mismo dólar publicitario compra la mitad de impresiones que hace cinco años. TikTok ofrece CPM más bajos pero tasas de conversión notoriamente variables — excelente para notoriedad, terrible para ROAS predecible.</p>
          <p>Las marcas que ganan en DTC en 2026 no son las que tienen los mejores anuncios. Son las que tienen la mejor <strong>retención</strong>. Si tu cliente promedio compra 1,0 veces y desaparece, casi seguro perderás dinero en la primera compra y nunca lo recuperarás. Si tu cliente promedio compra 2,5 veces en dos años — a través de recompras, campañas de email y lanzamientos de nuevas colecciones — las matemáticas se invierten. Las mejores marcas DTC de eyewear que suministro tienen una tasa de recompra superior al 30% en 12 meses. Las que fracasan están atrapadas por debajo del 10%.</p>

          {/* ─── Section 4: Hybrid Model ─── */}
          <h2 id="hybrid" className="text-3xl font-bold mt-16 mb-6">El Modelo Híbrido: Por Qué las Marcas Más Inteligentes Hacen Ambas Cosas</h2>

          <p>Hay un tercer camino que no recibe suficiente atención: primero mayorista, después DTC. He aquí por qué funciona.</p>
          <p>Lanzas como marca mayorista. Colocas tus gafas en 10–15 minoristas independientes que se encargan del trabajo de cara al cliente. Construyes flujo de caja — órdenes de compra predecibles con márgenes del 35% y cero gasto publicitario. Aprendes qué estilos se venden, qué colores funcionan y qué quieren realmente los clientes — datos que obtienes gratis de tus socios minoristas en lugar de costarte $22 por dato en pruebas de anuncios.</p>
          <p>Después de 12–18 meses, tienes una línea de producto validada, un nombre de marca reconocible (porque tu logo está en 15 escaparates) y capital operativo de los beneficios mayoristas. Ahora lanzas DTC — no como una apuesta desesperada, sino como una expansión estratégica. Tu negocio mayorista financia tus pruebas de anuncios. Tu presencia minorista da credibilidad a tu sitio web. Tus clientes existentes pueden comprarte en su boutique local Y online. Y como no estás quemando capital de riesgo para sobrevivir, puedes permitirte ser paciente con tu crecimiento DTC.</p>
          <p>He visto este manual exacto funcionar para al menos seis marcas a las que suministro. Empezaron con un pedido mayorista de $10K, crecieron hasta $200K–400K en ingresos mayoristas en 18–24 meses, luego lanzaron DTC desde una posición de fuerza. Ninguna es famosa. Todas son rentables.</p>

          {/* ─── Section 5: Which Model Fits You ─── */}
          <h2 id="which-for-you" className="text-3xl font-bold mt-16 mb-6">¿Qué Modelo se Adapta a tu Situación?</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">Ve Primero a Mayorista Si:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Tienes $8.000–15.000 y una red sólida en retail, hostelería o regalos corporativos</li>
            <li>Prefieres pasar tiempo al teléfono con 50 compradores que optimizando anuncios de Facebook</li>
            <li>Quieres ingresos predecibles y acumulativos sin el riesgo de plataforma de los cambios de algoritmo de Meta/Google</li>
            <li>Te parece bien un crecimiento más lento y márgenes unitarios más bajos a cambio de un riesgo drásticamente menor</li>
            <li>Planeas eventualmente lanzar DTC y quieres una pista financiada para probar anuncios sin quemar tus ahorros</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Ve Primero a DTC Si:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Tienes $25.000–75.000 de capital de lanzamiento y te sientes cómodo perdiendo dinero durante 12–18 meses</li>
            <li>Tienes experiencia profunda (o un cofundador con experiencia profunda) en social paid, email marketing y optimización de tasa de conversión</li>
            <li>Tu concepto de marca es lo suficientemente distintivo visualmente como para detener un pulgar a mitad de scroll — un genérico &quot;gafas premium para gente con estilo&quot; no funciona</li>
            <li>Tienes un motor de contenido: historia del fundador, contenido de fábrica entre bastidores, UGC de estilo de vida — las marcas DTC viven y mueren por la velocidad creativa</li>
            <li>Tu objetivo es una salida a escala venture (50×+ múltiplo de ingresos) en lugar de un negocio de estilo de vida — DTC puede escalar más rápido que el mayorista cuando funciona</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Ve a Híbrido Si:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Tienes experiencia mayorista o acceso a compradores minoristas, pero también quieres construir valor de marca a largo plazo</li>
            <li>Puedes gestionar el conflicto de canal — diferentes SKUs por canal, precios MAP, ventanas de exclusividad para minoristas</li>
            <li>Eres paciente: 18–24 meses de construcción mayorista, luego lanzamiento DTC desde una posición de fortaleza de flujo de caja</li>
          </ul>

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
            <h2 className="text-3xl font-bold mb-4">¿Listo para Fabricar tu Primera Colección?</h2>
            <p className="text-xl mb-6 opacity-90">Ya sea que lances como mayorista, DTC o híbrido — te ayudaremos a construir la línea de producto adecuada para tu modelo de negocio. Pedido mínimo desde 100 piezas por estilo.</p>
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
              <Link href="/es/blog/guia-precios-mayoristas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guía de Precios Mayoristas de Gafas 2026</h3>
                <p className="text-gray-600 text-sm">Precios reales directos de fábrica por material, estilo y cantidad.</p>
              </Link>
              <Link href="/es/blog/crear-marca-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Cómo Crear una Marca de Gafas de Sol</h3>
                <p className="text-gray-600 text-sm">La hoja de ruta completa desde el concepto hasta la primera venta.</p>
              </Link>
              <Link href="/es/blog/estrategia-precios-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guía de Estrategia de Precios para Gafas</h3>
                <p className="text-gray-600 text-sm">Cómo fijar el precio de tu línea para mayorista, retail y DTC.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
