import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Guía de Gafas Fotocromáticas al por Mayor: Precios de Lentes Transition, MOQ y Proveedores de Fábrica',
  description: 'Guía directa de fábrica sobre gafas fotocromáticas al por mayor: calidades de lente, precios por volumen, pedidos mínimos, pruebas de velocidad de activación, y cómo evitar los lentes fotocromáticos baratos que arruinan la reputación de tu marca.',
  keywords: ['gafas fotocromáticas al por mayor', 'lentes transition por volumen', 'fabricante gafas fotocromáticas', 'gafas adaptativas al por mayor', 'precios lentes fotocromáticos', 'fábrica gafas transition', 'gafas fotocromáticas por mayoreo', 'MOQ gafas fotocromáticas', 'calidades lentes fotocromáticos', 'gafas transition mayoristas'],
  alternates: {
    canonical: '/es/blog/gafas-fotocromaticas-por-mayor',
    languages: {
      'en': '/blog/photochromic-sunglasses-wholesale-guide',
      'es': '/es/blog/gafas-fotocromaticas-por-mayor',
    },
  },
};

const takeaways = [
  'No todas las lentes fotocromáticas son iguales: existe una diferencia de calidad enorme entre las lentes fotocromáticas de $1.50/par que ves en los catálogos mayoristas genéricos y las de $8–12/par que realmente se oscurecen rápido, vuelven a aclararse al entrar en interiores y duran más de 2 años sin degradarse',
  'La calidad de las lentes fotocromáticas se reduce a tres factores: velocidad de activación (qué tan rápido se oscurecen al sol), velocidad de retroceso (qué tan rápido se aclaran en interiores) y vida útil de los ciclos (cuántos ciclos de oscurecimiento/aclarado soportan antes de que el tinte fotocromático se degrade). Las lentes baratas fallan en los tres aspectos y tus clientes lo notarán en cuestión de semanas',
  'Las fábricas chinas ofrecen lentes fotocromáticas en tres niveles: grado básico (tinte fotocromático solo en la superficie, ~$1.50–3/par), grado medio (fotocromático en masa, ~$3–6/par) y grado premium (en masa con tinte estabilizado UV, ~$6–12/par por volumen). El nivel medio es el punto ideal para la mayoría de los compradores mayoristas',
  'El MOQ para gafas fotocromáticas personalizadas comienza en 500–1,000 unidades por modelo, pero puedes probar el mercado con 300 unidades de monturas OEM estándar con lentes fotocromáticas: un pedido de prueba de $900–1,500 que te permite validar la demanda antes de comprometerte con moldes personalizados',
  'La queja más común de los clientes sobre las gafas fotocromáticas es que "no funcionan dentro del coche". La mayoría de las lentes fotocromáticas se activan por UV y los parabrisas bloquean los rayos UV, así que se mantienen claras dentro del vehículo. Si tus clientes mayoristas venden a conductores, necesitas especificar lentes fotocromáticas "para coche" o ser transparente sobre esta limitación',
  'Se proyecta que el mercado global de lentes fotocromáticas alcance los $8.9 mil millones para 2030 (CAGR del 8.2%), impulsado por el envejecimiento de la población que necesita fotocromáticos de prescripción y los entusiastas del aire libre que quieren un solo par que funcione en todas las condiciones de luz. Los mayoristas que añadan una línea fotocromática ahora se están posicionando en una categoría que crece más rápido que las gafas de sol estándar',
];

const quickStats = [
  { label: 'Mercado Fotocromático Global (2030)', value: '$8.9MM' },
  { label: 'CAGR del Mercado (2024–2030)', value: '8.2%' },
  { label: 'Lente Fotocromática Básica', value: '$1.50–3.00/par' },
  { label: 'Lente Fotocromática Grado Medio', value: '$3.00–6.00/par' },
  { label: 'Lente Fotocromática Premium', value: '$6.00–12.00/par' },
  { label: 'MOQ Montura Personalizada (Fotocromática)', value: '500–1,000 unids.' },
  { label: 'Tiempo de Activación (Lente de Calidad)', value: '15–30 segundos' },
  { label: 'Tiempo de Retroceso (Interiores)', value: '2–5 minutos' },
];

const faqs = [
  {
    question: '¿Cuál es la diferencia entre lentes fotocromáticas y polarizadas?',
    answer: 'Las lentes fotocromáticas cambian de tono según la exposición a la luz UV: se oscurecen al aire libre y se aclaran en interiores. Las lentes polarizadas tienen un tinte fijo con una película química que bloquea el deslumbramiento horizontal. Cumplen funciones completamente distintas. Las fotocromáticas ofrecen comodidad (un solo par para interior y exterior), las polarizadas reducen reflejos (especialmente en agua, nieve y carreteras). Puedes conseguir lentes fotocromáticas polarizadas, pero cuestan más ($8–18/par al por mayor) porque combinas dos tecnologías en una sola lente. La mayoría de los compradores mayoristas empiezan con fotocromáticas estándar y añaden las fotocromáticas polarizadas como un SKU premium más adelante.',
  },
  {
    question: '¿Cuánto duran las lentes fotocromáticas antes de dejar de funcionar?',
    answer: 'Las lentes fotocromáticas de calidad (tinte en masa, estabilizado UV) suelen durar de 2 a 3 años de uso diario antes de que el efecto de oscurecimiento se debilite notablemente. La degradación es gradual: las lentes ya no se oscurecen tanto como antes y el tiempo de aclarado se vuelve más largo. Las lentes fotocromáticas básicas con recubrimiento superficial pueden empezar a degradarse en 6 a 12 meses, especialmente si el usuario pasa más de 4 horas al día al aire libre. Esta es la razón número uno para evitar las lentes fotocromáticas más baratas si te importa que tus clientes vuelvan a comprar. Las moléculas del tinte fotocromático literalmente se desgastan por la exposición repetida a los rayos UV: cada ciclo de oscurecimiento/aclarado provoca una pequeña fatiga molecular. En la fábrica, probamos la vida útil usando una lámpara UV y un temporizador: una buena lente debe mantener más del 80% de su capacidad de oscurecimiento después de 3,000 ciclos.',
  },
  {
    question: '¿Por qué las gafas fotocromáticas cuestan más que las gafas de sol normales?',
    answer: 'La diferencia de costo viene del tinte fotocromático en sí mismo y de la complejidad de fabricación. Las lentes de sol normales usan un tinte fijo que se mezcla con el monómero antes del moldeo por inyección o colado: simple, barato, tecnología consolidada. Las lentes fotocromáticas requieren incrustar moléculas fotocromáticas en todo el material de la lente (método en masa) o aplicar un recubrimiento fotocromático en la superficie. El método en masa usa tintes fotocromáticos patentados que cuestan de 5 a 10 veces más que los tintes estándar, y el proceso de fabricación requiere un control de temperatura más estricto porque el calor degrada el compuesto fotocromático. Al por mayor, una lente polarizada TAC estándar puede costar $1.20/par por volumen; una lente fotocromática de grado medio cuesta $3.50–5.00/par. La diferencia es real: no es solo margen de marketing.',
  },
  {
    question: '¿Puedo conseguir gafas fotocromáticas de prescripción al por mayor?',
    answer: 'Sí, pero las fotocromáticas de prescripción usan una cadena de suministro distinta a las fotocromáticas sin graduación. Las gafas fotocromáticas sin prescripción se producen en serie en la fábrica usando lentes moldeadas por inyección o coladas. Las lentes fotocromáticas de prescripción suelen fabricarse en laboratorios ópticos que tallan la graduación en un bloque de lente fotocromática. Algunas fábricas chinas con laboratorios ópticos internos pueden producir gafas fotocromáticas Rx al por mayor (más de 500 unidades), pero el precio es más alto: calcula entre $12–25/par para fotocromáticas monofocales y $25–50/par para fotocromáticas progresivas, según la complejidad de la prescripción y la integración con la montura. Para compradores mayoristas que quieren entrar al mercado de fotocromáticas Rx, la estrategia más sencilla es ofrecer monturas fotocromáticas con lentes de demostración y asociarse con un laboratorio óptico local para la adaptación de prescripciones. Así evitas la pesadilla logística de mantener inventario para cada combinación posible de graduación.',
  },
  {
    question: '¿Qué debo verificar al comprar gafas fotocromáticas de una fábrica china?',
    answer: 'Tres cosas que debes probar antes de hacer un pedido grande: (1) Velocidad de activación y retroceso: lleva un par de muestra al exterior, a la luz solar directa, y cuenta cuánto tarda en oscurecerse por completo (debería ser menos de 30 segundos para lentes de calidad) y cuánto tarda en aclararse en interiores (menos de 5 minutos). (2) Sensibilidad a la temperatura: las lentes fotocromáticas se oscurecen más en clima frío y menos en clima cálido; una buena lente debería alcanzar al menos un 70% de tintado a 35°C. Las lentes baratas apenas se oscurecen en días calurosos. (3) Vida útil de ciclos: pídele a la fábrica el nombre de su proveedor de tinte fotocromático y el informe de prueba de ciclos. Las fábricas serias usan tintes de empresas como Transitions Optical (ahora propiedad de EssilorLuxottica), Hoya o Corning, o sus equivalentes chinos como Conant Optical o Mingyue Optical. Si la fábrica no puede nombrar a su proveedor de tinte, busca otra opción. Además, especifica siempre que las lentes deben cumplir con las normas ANSI Z80.3 o EN ISO 12312-1 de protección UV: fotocromático no significa automáticamente UV400, y necesitas ambas cosas.',
  },
  {
    question: '¿Cuáles son los colores de lentes fotocromáticas más populares para venta al por mayor?',
    answer: 'El fotocromático gris es el más vendido en todos los mercados: ofrece la percepción de color más natural y combina bien con cualquier color de montura. El fotocromático marrón/ámbar es el segundo más popular, especialmente en mercados con clima variable (Reino Unido, norte de Europa, Pacífico Noroeste) porque mejora el contraste en días nublados. El fotocromático verde (a menudo comercializado como G-15 fotocromático) tiene un nicho de seguidores entre entusiastas del aire libre y compradores militares o policiales. El fotocromático azul está creciendo en el segmento de moda, particularmente en los mercados coreano y japonés. Para un primer pedido mayorista de fotocromáticas, recomiendo 60% gris, 30% marrón, 10% verde/otros: esta proporción cubre el 95% de las preferencias en la mayoría de los mercados. Evita acumular colores extravagantes (fotocromático rosa, morado, amarillo) a menos que tengas un comprador específico que los solicite: se ven interesantes en la ficha técnica pero se quedan en el inventario.',
  },
];

const PUBLISH_DATE = '2026-08-04';
const SLUG = 'gafas-fotocromaticas-por-mayor';

export default function PhotochromicSunglassesWholesaleGuide() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/es/' },
          { name: 'Blog', href: '/es/blog/' },
          { name: 'Guía de Gafas Fotocromáticas al por Mayor' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Guía de Gafas Fotocromáticas al por Mayor: Precios de Lentes Transition, MOQ y Proveedores de Fábrica",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guía directa de fábrica sobre gafas fotocromáticas al por mayor: calidades de lente, precios por volumen, pedidos mínimos, pruebas de velocidad de activación, y cómo evitar los lentes fotocromáticos baratos que arruinan la reputación de tu marca.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/es/blog/${SLUG}` },
          "inLanguage": "es"
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

        {/* ═══════ ENCABEZADO DEL ARTÍCULO ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Guía de Producto</span>
            <span>4 de agosto de 2026</span>
            <span>•</span>
            <span>14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guía de Gafas Fotocromáticas al por Mayor: Precios de Lentes Transition, MOQ y Proveedores de Fábrica
          </h1>
          <p className="text-xl text-gray-600">
            La mayoría de los compradores mayoristas saben que las lentes fotocromáticas existen. Lo que no saben es que la diferencia de calidad entre una lente fotocromática de $1.50 y una de $8 es la diferencia entre un cliente que compra una sola vez y un cliente que le dice a todo el mundo que no confíe en tu marca. Esta guía cubre lo que he aprendido enviando gafas fotocromáticas a compradores en más de 40 países.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLA DE CONTENIDOS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Tabla de Contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#como-funcionan" className="text-primary-600 hover:underline">Cómo Funcionan Realmente las Lentes Fotocromáticas</a></li>
            <li><a href="#niveles-calidad" className="text-primary-600 hover:underline">Los Tres Niveles de Calidad: Por Qué Pagas lo Que Pagas</a></li>
            <li><a href="#precios-moq" className="text-primary-600 hover:underline">Precios por Volumen y MOQ: Cómo Es un Pedido Real de Fábrica</a></li>
            <li><a href="#demanda-mercado" className="text-primary-600 hover:underline">Quién Está Comprando Fotocromáticas al por Mayor Ahora Mismo</a></li>
            <li><a href="#control-calidad" className="text-primary-600 hover:underline">Control de Calidad: Cómo Probar Lentes Fotocromáticas Antes de Comprar</a></li>
            <li><a href="#problemas-comunes" className="text-primary-600 hover:underline">Los 4 Problemas de los Que Nadie Te Advierte</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </nav>

        {/* ═══════ CUERPO DEL ARTÍCULO ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Puntos Clave */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Datos Rápidos */}
          <QuickStats stats={quickStats} title="Datos Rápidos" />

          {/* ─── Sección 1: Cómo Funcionan ─── */}
          <h2 id="como-funcionan" className="text-3xl font-bold mt-16 mb-6">Cómo Funcionan Realmente las Lentes Fotocromáticas</h2>
          
          <p>Casi todos los compradores mayoristas nuevos me hacen una versión de esta pregunta: &quot;¿Las lentes fotocromáticas son un recubrimiento o van dentro de la lente?&quot; Es una pregunta justa. La respuesta determina lo que realmente estás pagando.</p>
          
          <p>Las moléculas fotocromáticas — generalmente compuestos de halogenuro de plata o naftopiranos orgánicos — se incorporan al material de la lente. Cuando la luz UV incide sobre estas moléculas, sufren una reacción química que modifica su estructura molecular, haciéndolas absorber más luz visible. Eso es lo que hace que la lente se vea más oscura. Cuando la fuente UV desaparece (entras a un lugar cerrado), las moléculas vuelven a su estructura original y la lente se aclara.</p>
          
          <p>Hay dos maneras en que las fábricas incorporan estas moléculas en una lente:</p>
          
          <p><strong>Fotocromático en masa:</strong> El tinte fotocromático se mezcla con el monómero líquido de la lente antes de que la lente sea colada o inyectada. El tinte queda distribuido por todo el espesor de la lente. Esto es lo que Transitions Optical fue pionero en los años 90, y es lo que toda lente fotocromática de calidad usa hoy. La desventaja: cuesta más porque estás usando tinte fotocromático en toda la lente, no solo en la superficie.</p>
          
          <p><strong>Fotocromático con recubrimiento superficial:</strong> El tinte fotocromático se aplica como un recubrimiento en la superficie frontal de una lente estándar. Es más barato — el tinte solo va en la superficie — pero se desgasta. Cada rayón, cada limpieza con un paño áspero, cada gota de protector solar que cae sobre la lente degrada el recubrimiento un poquito más. Después de 6 a 12 meses de uso regular, tienes unas gafas de sol que apenas se oscurecen.</p>
          
          <p>Cuando un proveedor te cotiza $1.50/par por lentes fotocromáticas, es recubrimiento superficial. Punto. Nadie puede producir fotocromático en masa de forma rentable a ese precio. Solo la materia prima del tinte cuesta más.</p>

          {/* ─── Sección 2: Niveles de Calidad ─── */}
          <h2 id="niveles-calidad" className="text-3xl font-bold mt-16 mb-6">Los Tres Niveles de Calidad: Por Qué Pagas lo Que Pagas</h2>
          
          <p>He estado en la planta de producción cuando un comprador discutía que &quot;fotocromático es fotocromático&quot; y que todas las lentes son iguales. No lo son. Esto es lo que realmente ofrece el mercado, desde abajo hacia arriba.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Nivel 1: Grado Básico (Recubrimiento Superficial) — $1.50–$3.00/par</h3>
          
          <p>Estas son las gafas fotocromáticas que ves en Alibaba a $0.80–$1.20 FOB. La lente es de TAC o policarbonato estándar con una fina capa fotocromática aplicada en la superficie. Se oscurecen lentamente — 60 a 90 segundos para alcanzar el tono completo — y se aclaran todavía más lento, a veces 8 a 10 minutos. Después de 6 meses de uso diario, apenas se oscurecen. El rango de activación es limitado: funcionan aceptablemente entre 15 y 25°C pero apenas se activan por encima de 30°C.</p>
          
          <p>Lo peor: estas lentes a menudo no cumplen con los estándares UV400 de forma consistente. El recubrimiento fotocromático puede tener poros o aplicación irregular que deja pasar los rayos UV. Si vendes en mercados con leyes fuertes de protección al consumidor (UE, Australia, EE.UU.), estas lentes son un problema legal. He visto envíos rechazados en aduanas europeas porque la prueba de laboratorio mostró bloqueo UV inconsistente en la superficie de la lente.</p>
          
          <p><strong>Quién compra esto:</strong> Vendedores ambulantes, tiendas de todo a un dólar, regalos de feria, mercados donde nadie demanda por unas gafas de sol. No es para quien construye una marca.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Nivel 2: Grado Medio (En Masa, Tinte Estándar) — $3.00–$6.00/par</h3>
          
          <p>Aquí es donde la cosa se pone interesante. Las lentes fotocromáticas de grado medio usan tinte en masa: el compuesto fotocromático se mezcla con el material de la lente antes del moldeo. El tiempo de activación baja a 20–40 segundos, el retroceso es de 3–5 minutos, y las lentes mantienen un rendimiento decente durante 18 a 24 meses. La protección UV400 es consistente en toda la superficie porque los agentes bloqueadores UV también están en masa.</p>
          
          <p>El tinte que se usa en este nivel suele ser un compuesto de naftopirano genérico de proveedores químicos chinos como Conant Optical. No es calidad Transitions, pero es funcional. La principal limitación es la sensibilidad térmica: estas lentes se oscurecen poco en un día de verano a 35°C, lo cual es un problema real si tus clientes están en climas cálidos.</p>
          
          <p><strong>Quién compra esto:</strong> Marcas de gama media, vendedores de Amazon, ópticas boutique, empresas de productos promocionales que se preocupan por la recompra. Aquí es donde aterriza el 70% de nuestros pedidos fotocromáticos. La propuesta de valor funciona para la mayoría de los compradores mayoristas: las lentes realmente funcionan, los clientes quedan contentos y el precio deja margen para márgenes minoristas saludables.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Nivel 3: Grado Premium (En Masa, Tinte Estabilizado UV) — $6.00–$12.00/par</h3>
          
          <p>Estas usan tintes fotocromáticos premium, ya sea con licencia de Transitions Optical, Hoya, o equivalentes chinos de alta gama que igualan su rendimiento. La activación es de 10–20 segundos, el retroceso en menos de 2 minutos, y la estabilidad térmica es mucho mejor: estas lentes alcanzan un 75–85% de tintado incluso a 35°C. La vida útil supera los 3,000 ciclos de oscurecimiento/aclarado con degradación mínima.</p>
          
          <p>El costo adicional viene de tres factores: el tinte premium (3–4 veces el costo del grado medio), un compuesto estabilizador UV añadido al monómero que protege las moléculas fotocromáticas de la fatiga, y un control de calidad más estricto (cada lote se prueba en velocidad de activación, velocidad de retroceso y bloqueo UV antes de salir).</p>
          
          <p><strong>Quién compra esto:</strong> Marcas premium, cadenas ópticas, cualquiera que venda gafas de sol por encima de $50 al público. Si el posicionamiento de tu marca es &quot;calidad&quot;, este es tu nivel. La diferencia en la experiencia del cliente entre una lente de Nivel 2 y una de Nivel 3 se nota, y tus clientes lo van a notar.</p>
          
          <p>Una nota práctica: algunas fábricas comercializan lentes de Nivel 2 como &quot;calidad Transitions&quot; o &quot;comparables a Transitions.&quot; No lo son. Si una fábrica no puede darte el nombre del proveedor de tinte y un informe de prueba por lote, asume que como mucho te están ofreciendo Nivel 2.</p>

          {/* ─── Sección 3: Precios y MOQ ─── */}
          <h2 id="precios-moq" className="text-3xl font-bold mt-16 mb-6">Precios por Volumen y MOQ: Cómo Es un Pedido Real de Fábrica</h2>
          
          <p>Te voy a dar cifras reales, no precios de catálogo. Estas son cotizaciones FOB Xiamen que enviaría hoy mismo a un comprador mayorista, asumiendo monturas estándar de acetato o TR90 con lentes fotocromáticas.</p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Cantidad</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nivel 1 (Superficial)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nivel 2 (En Masa)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nivel 3 (Premium)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">300–500 unidades</td>
                  <td className="border border-gray-300 px-4 py-2">$2.80–3.50</td>
                  <td className="border border-gray-300 px-4 py-2">$5.00–7.00</td>
                  <td className="border border-gray-300 px-4 py-2">$10.00–14.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">1,000–3,000 unidades</td>
                  <td className="border border-gray-300 px-4 py-2">$2.00–2.80</td>
                  <td className="border border-gray-300 px-4 py-2">$3.80–5.00</td>
                  <td className="border border-gray-300 px-4 py-2">$7.50–10.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">3,000–10,000 unidades</td>
                  <td className="border border-gray-300 px-4 py-2">$1.50–2.00</td>
                  <td className="border border-gray-300 px-4 py-2">$3.00–3.80</td>
                  <td className="border border-gray-300 px-4 py-2">$6.00–7.50</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">10,000+ unidades</td>
                  <td className="border border-gray-300 px-4 py-2">$1.20–1.50</td>
                  <td className="border border-gray-300 px-4 py-2">$2.50–3.00</td>
                  <td className="border border-gray-300 px-4 py-2">$5.00–6.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Estos precios incluyen la montura, las lentes fotocromáticas, el empaque básico (bolsa plástica + paño de limpieza) y el control de calidad estándar. El empaque personalizado, la impresión de logo, las etiquetas colgantes y los estuches premium añaden entre $0.30 y $1.50/unidad dependiendo de la complejidad.</p>
          
          <p><strong>Realidad del MOQ:</strong> La mayoría de las fábricas en Xiamen y Wenzhou te van a cotizar un MOQ de 1,000–2,000 unidades para gafas fotocromáticas. Pero esto es lo que realmente pasa en la planta: si pides monturas OEM estándar (moldes existentes) y solo cambias a lentes fotocromáticas, muchas fábricas aceptan 300–500 unidades para un pedido de prueba, especialmente si pides 3 o más modelos. El precio por unidad sube con cantidades bajas, pero un pedido de prueba de $1,500 es mucho más inteligente que comprometer $10,000 en un producto que no has probado en tu mercado.</p>
          
          <p><strong>Moldes para montura personalizada:</strong> Si quieres tu propio diseño de montura con lentes fotocromáticas, los moldes cuestan $300–800 por molde, y necesitarás de 2 a 4 moldes por modelo (distintas tallas o colores). El MOQ sube a 1,000–2,000 unidades por modelo porque la fábrica necesita amortizar el costo del molde. Pedido total inicial para una línea fotocromática personalizada con 3 modelos × 1,000 unidades cada uno: aproximadamente $12,000–$18,000 con precios de Nivel 2, más $2,000–$3,000 en moldes.</p>
          
          <p><strong>Tiempo de producción:</strong> 25–35 días para OEM estándar con lentes fotocromáticas. 45–60 días para monturas personalizadas con fotocromáticas. Añade 2 semanas si vas a hacer empaque personalizado con cajas de marca. La producción de lentes fotocromáticas en sí no añade mucho tiempo: el cuello de botella casi siempre está en la producción de monturas, no en las lentes.</p>

          {/* ─── Sección 4: Demanda del Mercado ─── */}
          <h2 id="demanda-mercado" className="text-3xl font-bold mt-16 mb-6">Quién Está Comprando Fotocromáticas al por Mayor Ahora Mismo</h2>
          
          <p>Hago seguimiento trimestral de nuestros datos de pedidos fotocromáticos. Así se ve la demanda a mediados de 2026.</p>
          
          <p><strong>Ópticas y optometristas</strong> son el segmento de mayor crecimiento. Están añadiendo gafas fotocromáticas sin graduación como venta adicional para sus clientes de gafas de prescripción. La propuesta es simple: &quot;Ya tienes tus gafas graduadas. Aquí tienes unas fotocromáticas para cuando estés al aire libre.&quot; Pedido promedio: 200–500 unidades, principalmente Nivel 2, lentes grises.</p>
          
          <p><strong>Tiendas de deportes y aire libre</strong> son el segundo segmento más grande: senderismo, pesca, ciclismo, golf. Estos compradores quieren fotocromáticas polarizadas (Nivel 2 o 3) y son muy exigentes con la durabilidad de la montura. Preguntan por la calidad de las bisagras, la resistencia al rayado de las lentes y si la montura flota. Pedido promedio: 300–800 unidades.</p>
          
          <p><strong>Empresas de productos promocionales</strong> están comprando fotocromáticas para regalos corporativos y obsequios de eventos. Suelen pedir Nivel 1 porque el presupuesto es ajustado y el usuario final no está pagando por las gafas. Pero algunos clientes corporativos de alto nivel (bancos, aseguradoras, concesionarios de autos de lujo) piden Nivel 2 con logo personalizado como regalo premium para clientes. Pedido promedio: 500–2,000 unidades.</p>
          
          <p><strong>Vendedores de Amazon y e-commerce</strong> son un grupo variado. Los inteligentes piden Nivel 2, ponen precio de $25–40 al público y construyen una marca alrededor de &quot;fotocromáticas asequibles.&quot; Los menos experimentados piden Nivel 1, ponen precio de $15 y se ahogan en reseñas de una estrella sobre lentes que dejaron de funcionar. He visto al menos una docena de listados de fotocromáticas en Amazon morir de esta manera. No seas uno de ellos.</p>
          
          <p><strong>Patrones geográficos de demanda:</strong> El norte de Europa y el Reino Unido adoran las fotocromáticas: el clima cambia constantemente y la gente no quiere cargar con dos pares de gafas. Australia y Medio Oriente son mercados difíciles porque las altas temperaturas reducen la activación fotocromática. Si vendes en estas regiones, las lentes de Nivel 3 son casi obligatorias. El mercado estadounidense se divide aproximadamente 60/40 entre ópticas (cercanas a la prescripción) y venta directa al consumidor por e-commerce.</p>

          {/* ─── Sección 5: Control de Calidad ─── */}
          <h2 id="control-calidad" className="text-3xl font-bold mt-16 mb-6">Control de Calidad: Cómo Probar Lentes Fotocromáticas Antes de Comprar</h2>
          
          <p>No necesitas un laboratorio para detectar lentes fotocromáticas malas. Esto es lo que le digo a cada comprador que haga con sus muestras antes de hacer un pedido.</p>
          
          <p><strong>1. La prueba del marco de la puerta.</strong> Ponte de pie en una habitación interior bien iluminada. Sostén una lente a medio camino a través de una puerta abierta hacia la luz solar directa. Cuenta cuántos segundos tardan hasta que la mitad expuesta esté visiblemente más oscura que la mitad interior. Menos de 20 segundos: excelente. 20–40 segundos: aceptable. Más de 60 segundos: recházala. Esta es la prueba más simple y detecta las peores lentes inmediatamente.</p>
          
          <p><strong>2. La prueba de retroceso.</strong> Después de que la lente esté completamente oscurecida al aire libre, entra a un lugar interior y coloca las gafas sobre un papel blanco. Cronometra cuánto tarda la lente en volver a estar casi transparente. Menos de 3 minutos: excelente. 3–5 minutos: aceptable. Más de 8 minutos: recházala. Tus clientes entrarán a un restaurante y se quedarán sentados con cara de estar usando gafas de sol durante la cena por 10 minutos.</p>
          
          <p><strong>3. La prueba del día caluroso.</strong> Prueba las lentes en un día caluroso (más de 30°C). Las lentes fotocromáticas naturalmente se oscurecen menos con el calor, pero una lente de calidad debería alcanzar al menos el 70% de su tintado máximo. Si la lente apenas cambia en un día caluroso, será inútil en verano, que es justo cuando la mayoría de la gente usa gafas de sol.</p>
          
          <p><strong>4. La prueba de la tarjeta UV.</strong> Compra una tarjeta de prueba UV (cuestan unos $2 en Amazon). Apunta una linterna UV a través de la lente hacia la tarjeta. La tarjeta debería mostrar cero o casi cero transmisión UV. Si la tarjeta se ilumina en morado, la lente no está bloqueando los rayos UV, y la protección UV es justamente el propósito de las gafas de sol, sean fotocromáticas o no.</p>
          
          <p><strong>5. La prueba del rayón (opcional pero reveladora).</strong> Raya ligeramente la superficie de la lente con una llave, una sola vez, en el borde. Si el rayón revela una capa base transparente debajo de una capa superficial más oscura, tienes una lente fotocromática con recubrimiento superficial. Las lentes fotocromáticas en masa se ven del mismo color en todo su espesor. Esta es una prueba destructiva, pero te dice exactamente por lo que estás pagando.</p>
          
          <p>Para pedidos grandes, exige esto a la fábrica: un informe de espectrometría de transmisión UV (que demuestre cumplimiento UV400 en toda la superficie de la lente, no solo en el centro), un video o informe de prueba de velocidad de activación y retroceso, y un certificado de lote que nombre al proveedor del tinte fotocromático. Una fábrica que no pueda proporcionar esto está ocultando algo o no sabe lo que está vendiendo. Ninguna de las dos opciones es aceptable.</p>

          {/* ─── Sección 6: Problemas Comunes ─── */}
          <h2 id="problemas-comunes" className="text-3xl font-bold mt-16 mb-6">Los 4 Problemas de los Que Nadie Te Advierte</h2>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 1: No Funcionan Dentro del Coche</h3>
          
          <p>La mayoría de los parabrisas son de vidrio laminado con una capa intermedia que bloquea los rayos UV. Esa capa bloquea el 98–99% de la radiación UV, lo cual es excelente para tu piel pero mata la activación fotocromática. Tus gafas fotocromáticas se quedarán claras o apenas teñidas mientras conduces. Esta es la queja número uno de los clientes sobre las lentes fotocromáticas, y no es un defecto: es física. Algunas lentes fotocromáticas premium (como Transitions XTRActive) están formuladas para reaccionar también a la luz visible, además de la UV, así que sí funcionan parcialmente detrás del parabrisas. Pero son más caras ($12–18/par al por mayor) y aún así no se oscurecen tanto como bajo la luz solar directa. Si tus clientes mayoristas venden a conductores, especifica lentes fotocromáticas &quot;para coche&quot; o pon un aviso claro en el empaque.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 2: La Temperatura Arruina el Rendimiento</h3>
          
          <p>Las moléculas fotocromáticas son sensibles a la temperatura por naturaleza. A 0°C se oscurecen profundamente y se aclaran lentamente. A 35°C, la misma lente puede alcanzar solo el 50–60% de su tintado máximo. Esta es una limitación fundamental de la química fotocromática: la energía térmica a altas temperaturas empuja las moléculas hacia su estado claro más rápido de lo que la radiación UV puede empujarlas hacia su estado oscuro. Las lentes de Nivel 3 mitigan esto con tintes estabilizados UV que desplazan el punto de equilibrio, pero ninguna lente fotocromática rinde igual a 35°C que a 20°C. Si vendes en climas cálidos (Sudeste Asiático, Medio Oriente, sur de EE.UU. en verano), sé honesto con tus compradores. O mejor, véndeles gafas polarizadas.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 3: Oscurecimiento Irregular en el Primer Mes</h3>
          
          <p>Las lentes fotocromáticas nuevas a veces se oscurecen de forma irregular: el centro alcanza el tono completo antes que los bordes, o viceversa. Esto suele ser un defecto de fabricación por distribución desigual del tinte durante el proceso de colado o inyección. Es más común en lentes de Nivel 1 (aplicación irregular del recubrimiento) pero puede ocurrir en Nivel 2 si el proceso de mezcla de la fábrica es descuidado. Revisa siempre de 5 a 10 muestras aleatorias de distintas posiciones del lote de producción para verificar un oscurecimiento uniforme. Si más del 10% muestra irregularidad, rechaza el lote. Este problema no se arregla solo: empeora a medida que la lente envejece.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 4: La Etiqueta &quot;Fotocromático&quot; a Veces Es Mentira</h3>
          
          <p>He pillado a proveedores vendiendo lentes tintadas con degradado y llamándolas fotocromáticas. La lente está permanentemente tintada, más oscura arriba y más clara abajo: parece una lente fotocromática parcialmente activada, pero nunca cambia. La forma de detectarlo: guarda las gafas en un cajón oscuro durante una hora, luego revisa si la lente está completamente transparente. Si todavía tiene un tinte visible, no es fotocromática: es un degradado fijo. Esta estafa es más común de lo que crees, especialmente en plataformas B2B donde el comprador pide a distancia y confía en las fotos. Siempre, siempre prueba las muestras tú mismo antes de transferir dinero.</p>

          {/* ═══════ SECCIÓN DE PREGUNTAS FRECUENTES ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ LLAMADA A LA ACCIÓN ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas Gafas Fotocromáticas para Tu Línea Mayorista?</h2>
            <p className="text-xl mb-6 opacity-90">Cuéntame tu mercado objetivo, el rango de cantidades y qué nivel te interesa. Te envío especificaciones de muestra y cotización en menos de 24 horas. Sin presión, solo cifras reales de una fábrica que lleva 20 años en esto.</p>
            <Link
              href="/es/contacto"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Muestras y Cotización de Fotocromáticas
            </Link>
          </div>

          {/* ═══════ CONTENIDO RELACIONADO ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/es/blog/uv400-vs-polarizado" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">UV400 vs Polarizado: Lo Que Realmente Importa</h3>
                <p className="text-gray-600 text-sm">La diferencia explicada por alguien que fabrica ambos tipos todos los días.</p>
              </Link>
              <Link href="/es/blog/guia-lentes-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guía de Lentes para Gafas de Sol</h3>
                <p className="text-gray-600 text-sm">TAC, policarbonato, nylon, vidrio: qué material de lente se adapta a tu mercado.</p>
              </Link>
              <Link href="/es/contacto" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contáctanos</h3>
                <p className="text-gray-600 text-sm">Solicita una cotización para tu pedido personalizado de gafas de sol al por mayor.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
