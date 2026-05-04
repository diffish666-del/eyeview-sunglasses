import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: {
    absolute: 'Fabricante de Gafas de Sol al Por Mayor | Fábrica OEM de Gafas Personalizadas - EyeView',
  },
  description: 'EyeView es un fabricante líder de gafas de sol al por mayor con servicios OEM y ODM. Más de 15 años de experiencia, más de 500 clientes globales. Solicita tu cotización gratis hoy.',
  openGraph: {
    title: 'Fabricante de Gafas de Sol al Por Mayor | Fábrica OEM - EyeView',
    description: 'EyeView es un fabricante líder de gafas de sol al por mayor con servicios OEM y ODM. Más de 15 años de experiencia, más de 500 clientes globales.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://eyeviewsunglasses.com/es',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es',
    languages: {
      'en': 'https://eyeviewsunglasses.com',
      'es': 'https://eyeviewsunglasses.com/es',
    },
  },
};

const stats = [
  { number: '15+', label: 'Años de Experiencia', emoji: '🏭' },
  { number: '500+', label: 'Clientes Globales', emoji: '🌍' },
  { number: '1M+', label: 'Pares Producidos', emoji: '🕶️' },
  { number: '100%', label: 'Calidad Garantizada', emoji: '✅' },
];

const features = [
  {
    emoji: '🎨',
    title: 'Personalización Total',
    description: 'Desde el diseño del armazón y el color de las lentes hasta el grabado del logo y el empaque personalizado — hacemos realidad tu visión de gafas de sol con capacidades completas de fabricación OEM y ODM.',
  },
  {
    emoji: '💰',
    title: 'Precios Competitivos de Fábrica',
    description: 'Como fabricante directo con nuestra propia planta de producción, eliminamos los costos de intermediarios. Disfruta precios al por mayor desde $1.50 por par con descuentos por volumen disponibles.',
  },
  {
    emoji: '⚡',
    title: 'Entrega Rápida',
    description: 'Nuestro proceso de producción optimizado entrega muestras en 5-7 días y pedidos en masa en 15-25 días. Pedidos urgentes disponibles para lanzamientos y colecciones de temporada.',
  },
  {
    emoji: '🔒',
    title: 'Control de Calidad Premium',
    description: 'Cada par pasa por una rigurosa inspección de calidad de 6 puntos. Nuestras gafas cumplen estándares internacionales incluyendo FDA, CE, UV400 y certificación ANSI Z80.3.',
  },
  {
    emoji: '📦',
    title: 'Pedido Mínimo Bajo',
    description: 'Comienza con tan solo 50 piezas por estilo — perfecto para nuevas marcas probando el mercado, tiendas boutique y campañas promocionales. Sin compromisos de inventario masivos.',
  },
  {
    emoji: '🌍',
    title: 'Envío y Logística Global',
    description: 'Enviamos a más de 60 países por DHL, FedEx, UPS y transporte marítimo. Entrega puerta a puerta con documentación aduanera completa y seguimiento en tiempo real.',
  },
];

const products = [
  { name: 'Gafas de Sol Aviador', href: '/es/productos/aviador/', emoji: '✈️', description: 'Aviadores clásicos con armazón de metal y lentes en forma de gota. Perfectos para colecciones al por mayor de moda.' },
  { name: 'Gafas de Sol Wayfarer', href: '/es/productos/wayfarer/', emoji: '🎸', description: 'Icónicas gafas wayfarer de acetato. El estilo más vendido para retail y campañas promocionales.' },
  { name: 'Gafas de Sol Ojo de Gato', href: '/es/productos/ojo-de-gato/', emoji: '😺', description: 'Armazones ojo de gato de tendencia diseñados para el mercado de moda femenina. Diseños audaces y elegantes.' },
  { name: 'Gafas de Sol Deportivas', href: '/es/productos/deportivo/', emoji: '🚴', description: 'Gafas deportivas de alto rendimiento con diseños envolventes y lentes resistentes a impactos.' },
  { name: 'Gafas de Sol Redondas', href: '/es/productos/redondo/', emoji: '🔵', description: 'Armazones redondos de inspiración vintage con encanto retro. Populares en marcas de moda y lifestyle.' },
  { name: 'Gafas de Sol para Niños', href: '/es/productos/ninos/', emoji: '👶', description: 'Gafas seguras, duraderas y coloridas diseñadas específicamente para niños de 3 a 12 años.' },
  { name: 'Gafas de Sol Polarizadas', href: '/es/productos/polarizado/', emoji: '🌊', description: 'Lentes polarizadas premium que eliminan el resplandor. Esenciales para deportes al aire libre y acuáticos.' },
  { name: 'Gafas con Filtro de Luz Azul', href: '/es/productos/luz-azul/', emoji: '💻', description: 'Gafas de protección digital que filtran la luz azul dañina de pantallas y dispositivos.' },
  { name: 'Gafas de Sol Ecológicas', href: '/es/productos/ecologico/', emoji: '🌱', description: 'Gafas sostenibles de plástico oceánico reciclado, bambú y materiales bio-acetato.' },
  { name: 'Gafas de Sol de Acetato', href: '/es/productos/acetato/', emoji: '🎨', description: 'Armazones de acetato artesanales en patrones premium. Mazzucchelli italiano disponible.' },
  { name: 'Gafas de Sol TR90', href: '/es/productos/tr90/', emoji: '🏋️', description: 'Armazones ultraligeros de nylon TR90 con flexibilidad de memoria para deportes y uso diario.' },
];

const steps = [
  { step: '01', title: 'Consulta Inicial', description: 'Comparte tus requisitos — estilo, cantidad, necesidades de personalización y presupuesto. Nuestro equipo ofrece orientación experta para ayudarte a elegir los productos adecuados para tu mercado.' },
  { step: '02', title: 'Diseño y Muestreo', description: 'Creamos diseños detallados basados en tus especificaciones. Recibe muestras físicas en 5-7 días hábiles para tu revisión y aprobación antes de la producción en masa.' },
  { step: '03', title: 'Aprobación y Producción', description: 'Una vez que apruebes las muestras, iniciamos la producción a gran escala. Nuestra capacidad maneja pedidos de 50 a 100,000+ piezas con control de calidad constante.' },
  { step: '04', title: 'Inspección de Calidad', description: 'Cada lote pasa por una inspección de calidad integral de 6 puntos incluyendo pruebas de protección UV, durabilidad de bisagras, claridad de lentes y alineación de armazones.' },
  { step: '05', title: 'Envío y Entrega', description: 'Nos encargamos de todo el empaque, etiquetado y logística. Elige entre flete aéreo express (5-7 días) o envío marítimo económico (20-30 días) con seguimiento completo y soporte aduanero.' },
];

const faqs = [
  {
    question: '¿Cuál es el pedido mínimo (MOQ) para gafas de sol al por mayor?',
    answer: 'Nuestro MOQ estándar es de 50 piezas por estilo y combinación de color. Para nuevos clientes que quieran probar el mercado, ofrecemos paquetes de inicio flexibles. Para pedidos OEM personalizados con grabado de logo o diseños únicos, el MOQ puede comenzar en 100-300 piezas según la complejidad. Contáctanos para requisitos específicos.',
  },
  {
    question: '¿Cuánto tiempo toma producir un pedido de gafas de sol al por mayor?',
    answer: 'Los tiempos de producción varían según el tamaño del pedido y nivel de personalización. Los pedidos estándar (diseños existentes) típicamente se envían en 15-20 días hábiles. Los pedidos OEM personalizados con nuevos diseños requieren 20-30 días hábiles incluyendo muestreo. La producción urgente está disponible por un costo adicional, reduciendo el tiempo a 10-15 días.',
  },
  {
    question: '¿Ofrecen servicios de fabricación OEM y ODM de gafas de sol?',
    answer: 'Sí, proporcionamos tanto servicios OEM (Fabricación de Equipo Original) como ODM (Fabricación de Diseño Original). Con OEM, tú proporcionas el diseño y nosotros fabricamos. Con ODM, nuestro equipo de diseño crea estilos únicos basados en la dirección de tu marca. Ambas opciones incluyen colocación personalizada de logo, empaque y etiquetado.',
  },
  {
    question: '¿Qué certificaciones de calidad cumplen sus gafas de sol?',
    answer: 'Todas nuestras gafas cumplen o superan los estándares internacionales de calidad incluyendo protección UV400 (bloqueando el 99.9% de rayos UVA y UVB), certificación CE para mercados europeos, cumplimiento FDA para Estados Unidos, y estándares ANSI Z80.3. También ofrecemos certificación EN ISO 12312-1 bajo solicitud.',
  },
  {
    question: '¿Pueden personalizar gafas de sol con nuestro logo y empaque de marca?',
    answer: 'Absolutamente. Ofrecemos servicios integrales de branding incluyendo grabado láser de logo en armazones y lentes, estuches impresos o grabados personalizados, paños de microfibra de marca, etiquetas colgantes, etiquetas con código de barras y empaque listo para retail. Nuestro equipo de diseño puede ayudar a crear un empaque que eleve la identidad de tu marca.',
  },
  {
    question: '¿Qué tipos de lentes están disponibles para pedidos al por mayor?',
    answer: 'Ofrecemos una amplia gama de opciones de lentes incluyendo lentes estándar UV400, lentes polarizadas (TAC y vidrio), lentes fotocromáticas (transición), lentes de filtro de luz azul, lentes espejadas, lentes degradadas y armazones listos para prescripción. Cada tipo de lente está disponible en múltiples colores y recubrimientos.',
  },
  {
    question: '¿Realizan envíos internacionales? ¿Cuáles son las opciones de envío?',
    answer: 'Sí, enviamos a más de 60 países en todo el mundo. Las opciones de envío incluyen DHL Express (3-5 días hábiles), FedEx (3-7 días hábiles), UPS (5-8 días hábiles) y flete marítimo (20-35 días para pedidos grandes). Manejamos toda la documentación de exportación y podemos enviar DDP (Entregado con Derechos Pagados) o FOB según tu preferencia.',
  },
  {
    question: '¿Cómo empiezo con un pedido de gafas de sol al por mayor?',
    answer: 'Comenzar es sencillo: 1) Contáctanos por email a jacky@eyeviewsunglasses.com o WhatsApp al +86-18850281211 con tus requisitos. 2) Nuestro equipo proporcionará una cotización detallada en 24 horas. 3) Revisa y aprueba las muestras. 4) Realiza tu pedido y nosotros nos encargamos del resto. Damos la bienvenida tanto a compradores primerizos como a marcas establecidas.',
  },
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo Pedir Gafas de Sol al Por Mayor en EyeView',
  description: 'Nuestro sencillo proceso de 5 pasos hace que pedir gafas de sol personalizadas al por mayor sea fácil, desde la consulta inicial hasta la entrega.',
  totalTime: 'P25D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '1.50',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Consulta Inicial',
      text: 'Comparte tus requisitos — estilo, cantidad, necesidades de personalización y presupuesto. Nuestro equipo ofrece orientación experta.',
      url: 'https://eyeviewsunglasses.com/es/contacto/',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Diseño y Muestreo',
      text: 'Creamos diseños detallados basados en tus especificaciones. Recibe muestras físicas en 5-7 días hábiles.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Aprobación y Producción',
      text: 'Una vez que apruebes las muestras, iniciamos la producción a gran escala con control de calidad constante.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Inspección de Calidad',
      text: 'Cada lote pasa por una inspección de calidad de 6 puntos incluyendo pruebas UV, durabilidad de bisagras y claridad de lentes.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Envío y Entrega',
      text: 'Nos encargamos del empaque, etiquetado y logística. Flete aéreo express (5-7 días) o envío marítimo (20-30 días) con seguimiento completo.',
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://eyeviewsunglasses.com/es' },
  ],
};

export default function HomePageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tu <span className="text-yellow-300">Fabricante de Gafas de Sol al Por Mayor</span> y Fábrica OEM de Confianza
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              EyeView Sunglasses es un fabricante líder de gafas de sol al por mayor con más de 15 años de experiencia en producción OEM y ODM. Ayudamos a marcas, minoristas y distribuidores de todo el mundo a obtener gafas de sol personalizadas premium a precios competitivos directos de fábrica. Desde aviadores clásicos hasta armazones ojo de gato de tendencia, fabricamos cada estilo con precisión y calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/contacto/" className="inline-block bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                🕶️ Solicitar Cotización Gratis
              </Link>
              <Link href="/es/productos/" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
                Ver Productos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 px-4 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl mb-2 block">{stat.emoji}</span>
                <div className="text-3xl md:text-4xl font-bold text-primary-700">{stat.number}</div>
                <div className="text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegir EyeView como Tu Fabricante de Gafas?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Como fábrica de gafas de sol establecida, combinamos experiencia en fabricación, materiales de calidad y precios competitivos para entregar un valor excepcional a tu marca.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{feature.emoji}</span>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Gama de Gafas de Sol al Por Mayor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explora nuestra extensa colección de estilos de gafas de sol al por mayor. Cada categoría es totalmente personalizable con tu marca, opciones de lentes y modificaciones de armazón.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border group"
              >
                <span className="text-5xl mb-4 block text-center">{product.emoji}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <span className="inline-block mt-4 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Ver Más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Pedir Gafas de Sol al Por Mayor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nuestro sencillo proceso de 5 pasos hace que pedir gafas personalizadas al por mayor sea fácil, desde la consulta inicial hasta la entrega en tu puerta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Preguntas Frecuentes sobre Gafas de Sol al Por Mayor" />

      {/* CTA */}
      <CTASection
        title="¿Listo para Iniciar Tu Marca de Gafas de Sol?"
        description="Obtén tu cotización gratis hoy. Sin mínimo de consulta. Muestras disponibles en 5 días. Respondemos en 24 horas."
        primaryText="Cotización Gratis"
        primaryHref="/es/contacto"
        secondaryText="Ver Productos"
        secondaryHref="/es/productos"
      />
    </>
  );
}
