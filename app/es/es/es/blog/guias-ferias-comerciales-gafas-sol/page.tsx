import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Ferias de Gafas de Sol 2026: Guía para Encontrar los Mejores Proveedores',
  description: 'Guía de un dueño de fábrica china sobre las ferias de gafas de sol en 2026 — MIDO, SILMO, Vision Expo, IOFT, Feria Óptica de Hong Kong. Costos de stand, estrategias para evaluar proveedores y seguimiento que realmente funciona.',
  keywords: ['ferias gafas de sol 2026', 'exhibición óptica 2026', 'MIDO gafas', 'SILMO óptica', 'aprovisionamiento feria óptica', 'encontrar proveedores gafas en ferias'],
  alternates: {
    canonical: '/es/blog/guias-ferias-comerciales-gafas-sol',
    languages: {
      'en': '/blog/sunglasses-trade-shows-guide',
      'es': '/es/blog/guias-ferias-comerciales-gafas-sol',
    },
  },
}

const faqs = [
  {
    question: '¿Qué feria de gafas de sol es mejor para encontrar fabricantes?',
    answer: 'MIDO en Milán (febrero) y la Feria Óptica de Hong Kong (noviembre) son las dos mejores para acceder a fabricantes. MIDO reúne fábricas europeas y globales — Italia, Francia, Japón, China — en un solo lugar. Hong Kong está más concentrado: aproximadamente el 70% de los expositores tienen operaciones de fábrica en China continental, así que puedes reunirte directamente con los responsables de la cadena de suministro sin el sobreprecio italiano.',
  },
  {
    question: '¿Cuánto cuesta exponer en una feria de gafas de sol?',
    answer: 'Un stand estándar de 9m² en MIDO o SILMO cuesta entre $4.000 y $6.000. Los stands tipo isla más grandes (36m²+) pueden llegar a $25.000–$80.000 cuando incluyes construcción personalizada, iluminación y alquiler de mobiliario. Vision Expo en EE.UU. es similar — $4.500+ para un stand pequeño, $15.000–$50.000 para un espacio con marca. La mayoría de las fábricas chinas en estas ferias tienen stands de 18–36m², lo que te indica que van en serio con la exportación.',
  },
  {
    question: '¿Necesito registrarme con anticipación para las ferias ópticas?',
    answer: 'Sí, siempre. MIDO, SILMO, Vision Expo e IOFT requieren preinscripción en línea. Existe la inscripción presencial pero perderás 45–60 minutos haciendo fila. La mayoría de las ferias abren el registro con 3–4 meses de anticipación y ofrecen precio anticipado — MIDO costaba €35 anticipado vs. €55 en puerta el año pasado. Lleva tus documentos de registro mercantil; algunas ferias verifican que eres comprador del sector antes de darte acceso.',
  },
  {
    question: '¿Qué debo llevar a una feria para reunirme con proveedores?',
    answer: 'Viaja ligero pero específico: 3–5 muestras de la competencia como referencia de calidad, 100+ tarjetas de presentación (se acaban más rápido de lo que crees), una hoja de especificaciones con tu precio de venta objetivo, preferencias de materiales y requisitos de certificación UV400, un cargador portátil, zapatos cómodos y una libreta pequeña. Lo más importante: fotos impresas de exactamente lo que buscas — la barrera del idioma desaparece cuando puedes señalar una imagen.',
  },
  {
    question: '¿Cómo hago el seguimiento con proveedores después de una feria?',
    answer: 'Envía un email personalizado en las primeras 48 horas — no un mensaje genérico. Haz referencia a algo específico de tu conversación en el stand ("Recuerdo que mencionaste tu proveedor de acetato en Mazzucchelli"). Incluye fotos de tus muestras de referencia. Solicita una cotización con tus cantidades concretas, no "cuál es tu mejor precio". Las fábricas reciben más de 200 emails de "envíame tu catálogo" después de cada feria; los que destacan son los que parecen un pedido real, no una expedición de pesca.',
  },
]

const PUBLISH_DATE = '20 de julio de 2026'

export default function GuiasFeriasComercialesGafasSolPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }) }} />
      <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Inicio', href: '/es/' },
          { name: 'Blog', href: '/es/blog/' },
          { name: 'Ferias de Gafas de Sol 2026: Guía para Encontrar los Mejores Proveedores' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Aprovisionamiento</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ferias de Gafas de Sol 2026: Guía para Encontrar los Mejores Proveedores
          </h1>
          <p className="text-xl text-gray-600">
            He trabajado en stands en más de 30 ferias. La mayoría de los compradores recorren la feria de forma equivocada. Esto es lo que deberías hacer.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice de Contenidos</h2>
          <ul className="space-y-2">
            <li><a href="#por-que-ferias" className="text-primary-600 hover:underline">Por Qué las Ferias Siguen Siendo Clave en la Era de Alibaba</a></li>
            <li><a href="#calendario" className="text-primary-600 hover:underline">Calendario de las Principales Ferias 2026</a></li>
            <li><a href="#preparacion" className="text-primary-600 hover:underline">Qué Preparar Antes de Ir</a></li>
            <li><a href="#evaluar" className="text-primary-600 hover:underline">Cómo Evaluar Proveedores en una Feria</a></li>
            <li><a href="#estrategia-stand" className="text-primary-600 hover:underline">La Estrategia de Visita que la Mayoría Hace Mal</a></li>
            <li><a href="#seguimiento" className="text-primary-600 hover:underline">Seguimiento Post-Feria que Realmente Funciona</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">

          {/* Intro */}
          <p className="text-xl text-gray-600 mb-8">
            En 2019, un comprador entró en nuestro stand en MIDO Milán, tomó una de nuestras monturas de acetato,
            dobló la patilla casi plana contra el frente, la mantuvo así tres segundos y la dejó.
            No dijo nada. Solo asintió, cogió una tarjeta y se fue. Dos meses después, hizo un pedido
            de $45.000.
          </p>
          <p>
            Eso es lo que pasa en las ferias. No puedes replicar ese momento en Alibaba. No puedes
            sentir la tensión de un resorte de bisagra por mensaje directo. No puedes oler el acetato recién
            fabricado ni sostener un lente polarizado bajo las luces del pabellón a través de una ficha de producto.
            En los 15 años que llevo dirigiendo una fábrica de gafas en China, las ferias han sido donde comenzaron
            nuestras mejores relaciones con clientes — no en una bandeja de entrada, no en una plataforma B2B,
            sino frente a una mesa de stand de 3 metros con muestras entre nosotros.
          </p>
          <p>
            Pero esto es lo que nadie te dice: <strong>la mayoría de los compradores son pésimos en las ferias.</strong>
            Recorren los pasillos como turistas, acumulan catálogos como souvenirs y se van a casa con una bolsa
            llena de tarjetas que nunca volverán a mirar. Lo he visto desde detrás del mostrador durante más de
            una década. Esta guía es lo contrario — es cómo entrar a cualquier feria óptica en 2026 y salir
            con relaciones reales con proveedores, no solo un montón de folletos.
          </p>

          {/* Section 1: Why Trade Shows Still Matter */}
          <h2 id="por-que-ferias" className="text-2xl font-bold mt-12 mb-4">Por Qué las Ferias Siguen Siendo Clave en la Era de Alibaba</h2>
          <p>
            Me hacen esta pregunta constantemente: &quot;¿Por qué gastar $3.000 en vuelos y hoteles cuando puedo
            buscar proveedores en Alibaba gratis?&quot;
          </p>
          <p>
            Aquí va la respuesta honesta: <strong>entre el 40% y el 50% de los &quot;fabricantes&quot; en Alibaba
            son empresas comerciales.</strong> No tienen ni una sola máquina de moldeo por inyección. Toman tu
            pedido, le añaden un 15–30% de margen y lo envían a una fábrica cuyo nombre nunca conocerás. He visto
            a empresas comerciales entrar en nuestro stand, fotografiar nuestras muestras y publicarlas en Alibaba
            como productos propios esa misma noche. Lo sé porque compradores me enviaron capturas de pantalla
            preguntando por qué &quot;nuestras&quot; monturas aparecían bajo otro nombre de empresa.
          </p>
          <p>
            En una feria, eliminas al intermediario por defecto. El stand cuesta mínimo $4.000 — las empresas
            comerciales no invierten ese dinero en una sola feria. Estás frente a alguien que es dueño de la
            fábrica o dirige las operaciones. Puedes preguntar &quot;¿dónde está tu planta de producción?&quot;
            y observar su reacción en tiempo real. Puedes abrir cajones detrás del mostrador, revisar el interior
            de las patillas en busca de marcas de molde y ver cómo están realmente terminadas las muestras — no
            cómo fueron fotografiadas bajo iluminación de estudio.
          </p>
          <p>
            Un detalle más que importa: <strong>la fábrica que expone en MIDO o SILMO ya pasó un filtro.</strong>
            Tienen documentación de exportación. Tienen personal que habla inglés. Entienden los estándares
            internacionales de calidad. Han invertido dinero serio en estar allí — un stand de 18m² con
            iluminación adecuada y vitrinas en MIDO cuesta unos $12.000–$15.000 todo incluido. Nadie gasta eso
            para estafarte.
          </p>

          {/* Section 2: The Calendar */}
          <h2 id="calendario" className="text-2xl font-bold mt-12 mb-4">Calendario de las Principales Ferias 2026</h2>

          <h3 className="text-xl font-bold mt-8 mb-4">MIDO Milán — 7 al 9 de febrero de 2026</h3>
          <p>
            Esta es la grande. Más de 1.300 expositores de más de 50 países, más de 55.000 visitantes y una
            industria de €38 mil millones concentrada en el centro de convenciones Fiera Milano Rho. Si solo
            puedes asistir a una feria este año, que sea MIDO.
          </p>
          <p>
            El pabellón está organizado por secciones — Design, Tech, Fashion, Lens y Asia. Para aprovisionamiento,
            busca el <strong>Pabellón Asia</strong> y partes del Pabellón Fashion. Allí encontrarás fabricantes
            chinos, coreanos y de Hong Kong que producen a volúmenes competitivos. El Pabellón Design es
            principalmente marcas italianas y francesas de acetato premium — bonito de ver, pero espera precios
            FOB de $12–$25 por unidad para OEM frente a $5–$12 en el Pabellón Asia con calidad equivalente.
          </p>
          <p>
            Recuerdo a un cliente de Canadá que pasó dos días enteros en el Pabellón Design, se enamoró de
            monturas italianas de acetato, le cotizaron €22/unidad FOB y entró en pánico cuando se dio cuenta
            de que su precio de venta tendría que ser $120+ solo para cubrir costos. Nos encontró en el Pabellón
            Asia al tercer día, vio monturas con acetato Mazzucchelli a $9,50/unidad y casi me abraza. Mismo
            material. Distinta cadena de suministro. Por eso recorres todo el pabellón antes de decidir.
          </p>
          <blockquote className="border-l-4 border-primary-600 pl-4 my-6 italic text-gray-700">
            <strong>Consejo práctico:</strong> MIDO va de sábado a lunes. El sábado es un caos — todos los
            compradores llegan en tropel. El lunes por la tarde el pabellón está tranquilo, los expositores
            están cansados pero relajados y puedes tener conversaciones reales. He dado mejores precios un
            lunes a las 3 PM que un sábado a las 11 AM cuando hay una fila de gente esperando detrás de ti.
          </blockquote>

          <h3 className="text-xl font-bold mt-8 mb-4">Vision Expo East (Nueva York) — 12 al 15 de marzo de 2026</h3>
          <h3 className="text-xl font-bold mt-8 mb-4">Vision Expo West (Las Vegas) — 16 al 19 de septiembre de 2026</h3>
          <p>
            Las dos ferias Vision Expo son los eventos de compra más grandes de EE.UU., pero hay una distinción
            que necesitas entender: de los ~450 expositores en cada feria, solo unos <strong>180–200 son
            fabricantes reales de gafas.</strong> El resto son laboratorios de lentes, proveedores de equipos,
            marcas de monturas, empresas de software y servicios optométricos. Si entras buscando una fábrica
            sin filtrar previamente el mapa del pabellón, perderás la mitad del día hablando con gente que
            quiere venderte un sistema de gestión de consultorio.
          </p>
          <p>
            Vision Expo West en Las Vegas tiende a tener una presencia más fuerte de fabricantes
            internacionales — más fábricas chinas, coreanas y japonesas que la feria de Nueva York. La feria
            de Las Vegas también tiene la ventaja de ser justo antes de SILMO París, por lo que muchos
            fabricantes asiáticos hacen el doblete: Vision Expo West en septiembre y luego vuelan a París
            para SILMO la semana siguiente.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">SILMO París — 25 al 28 de septiembre de 2026</h3>
          <p>
            SILMO es la feria de diseño y tendencias. 1.000 expositores, la mitad franceses o italianos, y
            la energía es claramente premium. Si MIDO es donde negocias precios unitarios, SILMO es donde
            detectas qué colores, formas y materiales dominarán el mercado en 2027.
          </p>
          <p>
            Visito SILMO cada año como comprador, no como expositor. Recorro el pabellón con una libreta y
            fotografío cada tendencia que veo — el año pasado fueron acetatos color caramelo translúcido y
            siluetas oversize estilo años 70. Este año apuesto por titanio fino con lentes degradados. Si
            estás construyendo una marca, SILMO te ahorrará seis meses de investigación de tendencias en
            dos días.
          </p>
          <p>
            Una advertencia: SILMO es caro para exponer, lo que significa que la presencia de fábricas chinas
            es menor que en MIDO o Hong Kong. Encontrarás más estudios de diseño y especialistas en OEM de
            alta gama que fabricantes de volumen. Ideal para inspiración. Menos ideal para negociar tu primer
            pedido de 500 piezas.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">IOFT Tokio — Octubre 2026 (Fechas por confirmar)</h3>
          <p>
            La Feria Óptica Internacional de Tokio es más pequeña — más de 260 expositores — pero destaca en
            calidad. Si necesitas monturas japonesas de titanio, acetato de precisión o bisagras mecanizadas
            con tolerancias que hacen sudar a la mayoría de las fábricas, IOFT es tu feria.
          </p>
          <p>
            Los fabricantes japoneses son notoriamente selectivos. No persiguen el volumen como las fábricas
            chinas. Los pedidos mínimos en IOFT suelen ser de 300–500 piezas y los precios empiezan más altos
            — piensa en $15–$30 FOB para monturas de acetato frente a $5–$12 de China. Pero la artesanía es
            innegable. He enviado compradores a IOFT cuando necesitaban algo que nosotros no podíamos igualar
            en precisión, y lo digo como dueño de fábrica.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Feria Óptica de Hong Kong — 4 al 6 de noviembre de 2026</h3>
          <p>
            Si quieres conocer fabricantes chinos sin la complejidad de viajar a China continental, Hong Kong
            es tu respuesta. Más de 700 expositores, la gran mayoría con respaldo de fábrica en Shenzhen,
            Dongguan, Wenzhou y Xiamen — los cuatro centros principales de fabricación de gafas.
          </p>
          <p>
            Hong Kong tiene dos grandes ventajas sobre otras ferias. Primero: <strong>no requiere visa</strong> para
            la mayoría de las nacionalidades, lo que elimina un gran punto de fricción. Segundo: los expositores
            están curtidos en exportación. Cualquier fábrica china con stand en Hong Kong lleva años haciendo
            negocio internacional — entienden tus requisitos de certificación, tus estándares de empaque, tus
            expectativas de envío. No tienes que entrenarlos; ya vienen preparados.
          </p>
          <p>
            La feria de Hong Kong también se celebra simultáneamente con una zona de marcas dedicada, así
            que puedes ver lo que las marcas establecidas venden a los minoristas mientras conoces a las
            fábricas que están detrás. Esa doble perspectiva vale el viaje por sí sola.
          </p>

          {/* Section 3: Preparation */}
          <h2 id="preparacion" className="text-2xl font-bold mt-12 mb-4">Qué Preparar Antes de Ir</h2>
          <p>
            He visto a demasiados compradores llegar sin nada más que un teléfono y buenas intenciones. Es
            un desperdicio de un viaje de $3.000. Esto es lo que traen los compradores serios:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>3–5 muestras físicas de referencia.</strong> Trae gafas de sol de competidores o marcas
            que admires. Cuando me entregas una muestra y dices &quot;quiero esta calidad, a este precio,
            con esta sensación de bisagra&quot;, puedo decirte en 30 segundos si podemos hacerlo. Sin una
            referencia, ambos estamos adivinando.</li>
            <li><strong>100+ tarjetas de presentación.</strong> No 20. No 50. Repartirás más tarjetas de las
            que esperas y quedarte sin ellas te hace parecer poco preparado. Tarjetas profesionales, no las
            gratuitas de imprenta barata con bordes perforados.</li>
            <li><strong>Una hoja de especificaciones de una página.</strong> Rango de precio de venta objetivo,
            materiales preferidos (acetato, TR90, metal, titanio), requisitos de lentes (polarizados, UV400,
            degradados, fotocromáticos), necesidades de certificación (FDA, CE, AS/NZS) y cantidad estimada
            del primer pedido. Imprime 20 copias. Entrégalas a cada proveedor serio que conozcas.</li>
            <li><strong>Mapa del pabellón con objetivos pre-marcados.</strong> Descarga la lista de expositores
            y el plano al menos dos semanas antes de la feria. Marca cada fabricante de tu categoría. Planifica
            tu ruta para no ir dando zigzag entre pabellones. Día uno: visita todos tus objetivos rápidamente
            (5–10 minutos cada uno). Día dos: vuelve a tus 3–5 principales para conversaciones más profundas.</li>
            <li><strong>Un cargador portátil y una libreta física.</strong> Tu teléfono se quedará sin batería
            a las 2 PM. Tomar notas en papel también es más rápido que escribir — anota número de stand, nombre
            del contacto, dos cosas específicas que hablaron y una puntuación del 1 al 10. Olvidarás qué stand
            era cuál a la hora de cenar. A todos nos pasa.</li>
          </ul>

          {/* Section 4: Evaluating Suppliers */}
          <h2 id="evaluar" className="text-2xl font-bold mt-12 mb-4">Cómo Evaluar Proveedores en una Feria</h2>
          <p>
            Estás en un stand. Las muestras se ven bien. El vendedor es amable. ¿Ahora qué? Esto es lo que
            yo revisaría si estuviera de tu lado de la mesa:
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Las Cinco Preguntas que Separan Fábricas de Impostores</h3>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>&quot;¿Dónde está ubicada su fábrica? ¿Cuántas líneas de producción tienen?&quot;</strong> —
            Una fábrica real responde esto al instante. Una empresa comercial duda, da una respuesta vaga o dice
            &quot;trabajamos con varias fábricas asociadas&quot;. Esa es tu señal para seguir adelante.</li>
            <li><strong>&quot;¿Puede mostrarme el interior de la patilla?&quot;</strong> — Toma una muestra, mira
            de cerca el acabado. ¿Se ven líneas de molde? ¿Está el tornillo de la bisagra al ras? ¿El acetato
            se siente sólido o hueco? No necesitas ser ingeniero. Solo necesitas interesarte lo suficiente para
            mirar. El expositor que te observa hacer esto sin inmutarse confía en su producto.</li>
            <li><strong>&quot;¿Cuál es su plazo de entrega típico para un pedido OEM de 500 piezas?&quot;</strong> —
            La respuesta correcta es 30–45 días. Si dicen 15 días, o están haciendo ODM de stock o mienten
            sobre ser una fábrica. Si dicen 90 días, su producción está sobresaturada y te dejarán en segundo
            plano como comprador pequeño.</li>
            <li><strong>&quot;¿Qué certificaciones tienen sus monturas? ¿Puedo ver la documentación?&quot;</strong> —
            CE, FDA, UV400 e ISO 9001 son lo mínimo. Una fábrica seria tiene los documentos en el stand o puede
            enviarlos por correo en menos de una hora. Si titubean, o no están certificados o están usando
            certificados ajenos — ambas son razones para descartarlos.</li>
            <li><strong>&quot;¿Cómo manejan el control de calidad en pedidos de exportación?&quot;</strong> —
            Escucha detalles específicos: &quot;Hacemos AQL 2.5 en cada pedido, enviamos fotos previas al
            embarque y ofrecemos inspección de terceros&quot;. Un vago &quot;garantizamos calidad&quot; no
            sirve. Una fábrica que describe su proceso de QC en detalle lo tiene. Una que no puede, no lo tiene.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Señales de Alerta que He Aprendido a Detectar</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Sin cajón de muestras de reserva.</strong> Un stand con solo vitrinas y sin muestras de
            respaldo te dice que están mostrando prototipos, no piezas de producción. Pide ver &quot;cómo se
            ve la unidad número 500, no la primera&quot;.</li>
            <li><strong>Cotizan demasiado rápido.</strong> Si preguntas por una montura y te dan precio en 10
            segundos sin preguntar por cantidad, materiales o personalización — están vendiendo de stock. No
            es necesariamente malo, pero no estás hablando con un fabricante.</li>
            <li><strong>Sin dirección de fábrica en la tarjeta.</strong> Si la dirección es una torre de oficinas
            en un distrito comercial y no una zona industrial, es una señal de alerta. Las fábricas de Dongguan
            están en Dongguan, no en una oficina virtual en Hong Kong Central.</li>
          </ul>

          {/* Section 5: Booth Visit Strategy */}
          <h2 id="estrategia-stand" className="text-2xl font-bold mt-12 mb-4">La Estrategia de Visita que la Mayoría Hace Mal</h2>
          <p>
            La mayoría de los compradores hacen esto: se acercan a un stand, toman una montura, preguntan
            &quot;¿cuánto cuesta?&quot;, toman un catálogo y se van. Eso no es aprovisionamiento. Es mirar
            escaparates con pasos adicionales.
          </p>
          <p>
            Esta es la estrategia que realmente funciona, aprendida observando a los compradores más exitosos
            que visitan nuestro stand:
          </p>
          <p>
            <strong>Día uno: reconocimiento.</strong> Recorre todo el pabellón. Dedica 5–7 minutos por stand
            objetivo — lo suficiente para evaluar calidad de muestras, hacer las cinco preguntas anteriores y
            obtener un rango de precios aproximado. No negocies. No te comprometas. Toma fotos de las muestras
            que te gusten (pide permiso primero — algunos expositores son sensibles con la copia de diseños),
            anota tu puntuación del 1 al 10 y sigue adelante. Al final del primer día, deberías haber visitado
            15–25 stands y tener 5 candidatos serios.
          </p>
          <p>
            <strong>Día dos: profundización.</strong> Vuelve a tus 5 principales. Esta vez, siéntate. Pide agua.
            Abre su catálogo más allá de las piezas expuestas — pide ver&nbsp;
            <Link href="/es/productos/" className="text-primary-600 hover:underline">su gama completa</Link>, no
            solo lo que está en la pared. Discute tu hoja de especificaciones en detalle. Pregunta sobre&nbsp;
            <Link href="/es/blog/guia-moq-gafas" className="text-primary-600 hover:underline">flexibilidad de pedido mínimo</Link> para
            un primer pedido. El objetivo del día dos es que la conversación sea lo suficientemente profunda para
            hacer una comparación real entre proveedores — precio, capacidad, calidad de comunicación e intuición.
          </p>
          <p>
            <strong>Día tres: el cierre tranquilo.</strong> La mayoría de los compradores ya se han ido a casa
            para el tercer día, especialmente en MIDO donde el lunes es el día más tranquilo. Esa es tu ventaja.
            Vuelve a tus 2–3 mejores proveedores. El personal del stand está menos estresado, más dispuesto a
            hablar y más abierto a negociar. He dado mejores precios y compartido información más franca los
            lunes por la tarde que durante el caos del sábado — porque los compradores que se quedan hasta el
            final son los serios.
          </p>
          <p>
            <strong>El error crítico:</strong> dispersarte entre demasiados stands. Si visitas 80 stands en tres
            días, no has tenido una conversación real con ninguno. Has acumulado 80 catálogos y cero relaciones.
            Apunta a 15–25 stands en total, con conversaciones de seguimiento significativas en 5–7 de ellos.
          </p>

          {/* Section 6: Follow-Up */}
          <h2 id="seguimiento" className="text-2xl font-bold mt-12 mb-4">Seguimiento Post-Feria que Realmente Funciona</h2>
          <p>
            Después de cada feria importante, recibo unos 250 emails en la primera semana. Quizás 10 de ellos
            se convierten en negocio real. Los otros 240 son alguna variación de &quot;Un placer conocerte,
            por favor envía catálogo y mejor precio&quot;.
          </p>
          <p>
            Así son los 10 que funcionan:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Envía en las primeras 48 horas.</strong> No dos semanas después. No puedo recordar cuál
            de las 200 caras que vi ese día era la tuya a menos que me lo recuerdes mientras la memoria está
            fresca. El segundo día después de la feria es la ventana ideal.</li>
            <li><strong>Haz referencia a algo específico.</strong> &quot;Hablamos de tus modelos de acetato con
            bisagras de resorte — mencionaste tu relación con el proveedor Mazzucchelli&quot; — esto me dice
            que prestaste atención y que esto no es un mensaje genérico enviado a 50 fábricas.</li>
            <li><strong>Adjunta tu hoja de especificaciones y fotos de referencia.</strong> Las mismas que me
            entregaste en el stand. Probablemente las tengo en algún lugar de mi pila, pero adjuntarlas a tu
            email me ahorra la búsqueda y hace más probable que responda el mismo día.</li>
            <li><strong>Indica tus cantidades y plazos.</strong> &quot;Queremos hacer un pedido de prueba de
            300 piezas en octubre para tres SKUs&quot; tiene 10 veces más probabilidades de obtener una
            respuesta seria que &quot;¿cuál es tu mejor precio?&quot; El primer email suena a cliente. El
            segundo suena a curioso sin intención real.</li>
            <li><strong>Pide un siguiente paso concreto.</strong> &quot;¿Puedes enviarme una cotización formal
            con precios FOB para los SKUs A, B y C antes del viernes?&quot; Esto me da una acción clara con
            fecha límite. Puedo decir sí o no. En cualquier caso, la conversación avanza.</li>
          </ol>
          <p>
            Una cosa más: si un proveedor no responde en 3–4 días hábiles, haz un seguimiento una vez. Si
            sigue sin responder, tácha de tu lista. Una fábrica que no puede responder a una consulta
            post-feria de un comprador cualificado en una semana te está diciendo todo sobre cómo manejará
            la comunicación de tu producción después.
          </p>

          {/* FAQ Section */}
          <h2 id="faq" className="text-2xl font-bold mt-12 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Sáltate la Feria — Empieza Directo</h2>
            <p className="text-xl mb-6 opacity-90">
              Si no puedes ir a MIDO o Hong Kong este año, hablemos. Fabricamos gafas de sol desde 2006 —
              muestras en 3–7 días, OEM desde 300 piezas y cada par con certificación UV400.
            </p>
            <Link
              href="/es/contacto"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Cotización Gratis
            </Link>
          </div>

          {/* Related Content */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/es/productos/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Ver Nuestro Catálogo Completo</h3>
                <p className="text-gray-600 text-sm">Explora más de 500 diseños ODM y OEM de gafas de sol — acetato, metal, TR90 y más.</p>
              </Link>
              <Link href="/es/blog/encontrar-fabricante-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Cómo Encontrar un Fabricante Fiable</h3>
                <p className="text-gray-600 text-sm">10 criterios de evaluación, estafas de Alibaba y consejos reales de negociación desde el lado de la fábrica.</p>
              </Link>
              <Link href="/es/contacto" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contáctanos</h3>
                <p className="text-gray-600 text-sm">Recibe una cotización personalizada para tu pedido de gafas de sol personalizadas. Muestras en 3–7 días.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
    </>
  )
}
