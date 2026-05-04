import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gafas de Sol Aviador al por Mayor | Fabricante de Gafas Aviador OEM - EyeView',
  description: 'Fabricante líder de gafas de sol aviador al por mayor. Gafas aviador personalizadas con grabado de logo, monturas de metal, lentes UV400/polarizadas. MOQ 100 uds. Directo de fábrica. ¡Solicita presupuesto!',
  keywords: 'gafas de sol aviador al por mayor, fabricante de gafas aviador, gafas aviador personalizadas, OEM gafas aviador, gafas de sol al por mayor, fabricante de gafas, monturas metálicas al por mayor',
  openGraph: {
    title: 'Gafas de Sol Aviador al por Mayor | Fabricante OEM - EyeView',
    description: 'Fabricante líder de gafas de sol aviador al por mayor. Logo personalizado, monturas metálicas, lentes UV400/polarizadas. MOQ 100 uds. Precios de fábrica.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/es/productos/aviador',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/productos/aviador',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/aviator',
      'es': 'https://eyeviewsunglasses.com/es/productos/aviador',
    },
  },
}

const aviatorFaqs = [
  {
    question: '¿Cuál es el pedido mínimo para gafas aviador al por mayor?',
    answer: 'Solo 100 piezas por modelo. Y aquí viene lo bueno: puedes mezclar dentro de esas 100. Podrías pedir 20 monturas doradas con lentes grises, 30 plateadas con azul espejo y 50 negras con degradado. Así pruebas qué combinaciones compran realmente tus clientes en vez de adivinar. La mayoría de nuestros clientes de aviador empiezan con 200-300 piezas en 2-3 combinaciones de color y luego repiten pedido de las ganadoras en cantidades mayores.',
  },
  {
    question: '¿Qué opciones de metal ofrecen para las monturas aviador?',
    answer: 'Tres principales. El acero inoxidable es el más popular: resistente, se ve genial, no se oxida y cuesta $8-12/par. La aleación de aluminio es un 40% más ligera (ideal para uso todo el día) y cuesta $10-14/par. Y luego está el beta-titanio para la gama premium: hipoalergénico (la Organización Internacional de Normalización clasifica el titanio como material biocompatible según la norma ISO 5832), increíblemente ligero con 15-20 gramos y prácticamente imposible de romper. El titanio cuesta $14-22/par, pero te permite vender a $80-150+ en retail, así que los márgenes son en realidad mejores. Cualquiera de ellos se puede recubrir en dorado, plateado, negro, oro rosa o colores personalizados.',
  },
  {
    question: '¿Puedo grabar mi logo en gafas aviador?',
    answer: 'Por supuesto, y sinceramente aquí es donde las aviador de metal brillan de verdad comparadas con las monturas de plástico. El grabado láser queda increíble en metal: nítido, permanente y elegante. Podemos grabar en el interior o exterior de las patillas. Si quieres algo más llamativo, hacemos insignias metálicas 3D (aleación de zinc o acero inoxidable) que se sueldan directamente a la patilla o el puente. También hay impresión en lentes para logos discretos en la esquina y plaquetas nasales grabadas a medida si realmente quieres ir a tope con el branding.',
  },
  {
    question: '¿Ofrecen lentes polarizadas para aviador?',
    answer: 'Sí, y lo recomiendo mucho. Nuestras lentes polarizadas TAC usan una película de 7 capas que elimina el 99% del deslumbramiento — la diferencia es abismal, especialmente para conducir. Aquí va el argumento de negocio: las aviador polarizadas se venden un 25-40% más caras en retail que las UV400 estándar. Un par que se vende a $40 sin polarizar fácilmente llega a $50-55 polarizado. También hacemos lentes fotocromáticas (se oscurecen con la luz solar), recubrimientos espejo, antirreflejantes y degradados. Mezcla y combina como quieras.',
  },
  {
    question: '¿En qué se diferencian las aviador de las wayfarer para venta al por mayor?',
    answer: 'Buena pregunta — nos la hacen mucho. La versión corta: las aviador son de metal, las wayfarer son de acetato/plástico. Eso significa que las aviador cuestan un poco más por par ($8-14 vs $5-11) pero también transmiten una sensación más premium. Las aviador tienden a ser ligeramente más masculinas y tienen esa herencia militar/piloto a su favor. Las wayfarer son más unisex y vienen en muchos más colores. ¿Sinceramente? La mayoría de las marcas exitosas llevan ambas. Si tienes que elegir una, aviador si buscas posicionamiento premium, wayfarer si quieres volumen.',
  },
  {
    question: '¿Qué packaging puedo obtener con mi pedido de aviador?',
    answer: 'Ofrecemos toda la gama. El setup más popular es un estuche rígido (EVA con tu logo impreso) más una funda de microfibra que sirve también como paño de limpieza. Cuesta unos $1.50-2.50 por set dependiendo de los materiales. También hacemos estuches de piel, latas metálicas, cajas de cartón personalizadas con impresión a todo color, tarjetas de garantía y etiquetas colgantes. Para líneas premium, algunos clientes optan por cajas con cierre magnético o incluso estuches de madera. El MOQ para packaging es de 500 piezas — pero puedes usar packaging genérico para tu primer pedido pequeño y cambiar a personalizado en la repetición.',
  },
]

const products = [
  {
    name: 'Aviador Clásica Dorada',
    description: 'Esta es la que todo el mundo imagina cuando dices "aviador." Acero inoxidable dorado pulido, forma de lágrima, lentes verdes G-15 que cortan el deslumbramiento sin hacer que todo se vea raro. El acabado dorado tiene recubrimiento PVD (no pintura barata en spray) así que aguanta el uso diario. Vendemos más de estas que cualquier otro SKU individual — y la mayoría de nuestros clientes dicen lo mismo. Si estás lanzando una marca de gafas y quieres una apuesta segura, esta es.',
    price: '$8.50 - $12.00',
    moq: '100 uds',
    features: ['Acero Inoxidable', 'Lente Verde G-15', 'Acabado PVD Dorado', 'Plaquetas de Silicona'],
  },
  {
    name: 'Aviador Espejo Plateada',
    description: 'Montura plateada, lentes espejo plateadas — el tipo de gafas de sol que ves en cada vacación en la playa. El recubrimiento espejo refleja alrededor del 60% de la luz entrante, lo que las hace genuinamente buenas para condiciones de mucha luz (no solo bonitas). La montura es acero inoxidable con baño de rodio que no se oxidará ni en aire salado costero. Las bisagras de muelle les dan algo de flexibilidad para adaptarse a diferentes tamaños de cabeza sin sentirse demasiado apretadas o flojas. Gran éxito de ventas para marcas resort y tiendas de playa.',
    price: '$9.00 - $13.00',
    moq: '100 uds',
    features: ['Baño de Rodio', 'Recubrimiento Espejo', 'Bisagras de Muelle', 'Resistente a Corrosión'],
  },
  {
    name: 'Aviador Stealth Negro Mate',
    description: 'Para marcas que buscan ese look táctico, sin rodeos. El electrochapado mate le da a la montura una superficie completamente antirreflectante — una sensación muy diferente al dorado o plateado brillante. Combinadas con lentes ahumadas oscuras que bloquean el 85% de la luz visible, son protección solar seria. Vemos muchos pedidos de marcas outdoor, empresas de suministros para fuerzas del orden y marcas de moda masculina. Las puntas de patilla reforzadas son un buen toque — sujetan sin deslizarse incluso cuando sudas.',
    price: '$9.00 - $13.00',
    moq: '100 uds',
    features: ['Acabado Mate', 'Lente Ahumada Oscura', 'Puntas Reforzadas', 'Antirreflectante'],
  },
  {
    name: 'Aviador Fashion Oro Rosa',
    description: 'El oro rosa lleva unos cinco años siendo el acabado de moda y no muestra señales de desaceleración. El tono cálido rosa-dorado se fotografía de maravilla (enorme para marcas que venden por Instagram) y favorece prácticamente a todos los tonos de piel. Las combinamos con lentes degradadas rosas — oscuras arriba, claras abajo — lo que les da ese look de moda sin esfuerzo. Fabricadas en aleación de aluminio pesan menos de 25 gramos. Si tu clienta es una mujer de 22 años comprando desde su móvil, esto es lo que va a clickear.',
    price: '$10.00 - $14.00',
    moq: '100 uds',
    features: ['Aleación de Aluminio', 'Lente Degradada Rosa', 'Menos de 25g', 'Tono Oro Rosa'],
  },
  {
    name: 'Aviador Polarizada Espejo Azul',
    description: 'Lentes espejo azul océano vivo con polarización real debajo — así que se ven increíbles Y realmente funcionan. La película polarizada TAC bloquea el 99% del deslumbramiento que rebota en agua, carreteras y nieve. La montura gunmetal mantiene el foco en esas lentes. Esta es nuestra recomendación número uno para clientes que venden al público costero/surf/pesca. Se fotografían bien, rinden bien y justifican un precio retail más alto gracias a la polarización. Cuestan unos $2-3 más por par que las no polarizadas, pero puedes cobrar $15-20 más en retail.',
    price: '$11.00 - $15.00',
    moq: '100 uds',
    features: ['Polarizada TAC', 'Espejo Azul', 'Montura Gunmetal', '99% Reducción de Deslumbramiento'],
  },
  {
    name: 'Aviador Premium de Titanio',
    description: 'Lo mejor de nuestra línea aviador. Montura de beta-titanio que pesa 15 gramos — apenas la sientes en la cara. El titanio es hipoalergénico (sin níquel, sin reacciones), a prueba de corrosión, y puedes doblarlo y vuelve a su sitio. Las combinamos con lentes ópticas CR-39 antirreflejantes — la misma calidad que encontrarías en monturas de diseñador de $200+. Esto es para marcas que quieren competir en el extremo premium del mercado. Tu precio retail puede ser fácilmente $80-150+, y el coste por unidad sigue siendo solo $14-22. Haz las cuentas de esos márgenes.',
    price: '$14.00 - $22.00',
    moq: '100 uds',
    features: ['Beta Titanio', 'Lente Óptica CR-39', 'Antirreflejante', 'Solo 15 Gramos'],
  },
]

export default function AviadorPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Gafas de Sol Aviador al por Mayor',
        description: 'Gafas de sol aviador clásicas con montura metálica en forma de lágrima. Disponibles en acero inoxidable, aleación de aluminio y titanio. Opciones de lentes UV400 y polarizadas. Personalización OEM completa con grabado de logo.',
        minPrice: '8.50',
        maxPrice: '22.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Inicio', url: 'https://eyeviewsunglasses.com/es' },
        { name: 'Productos', url: 'https://eyeviewsunglasses.com/es/productos' },
        { name: 'Gafas Aviador', url: 'https://eyeviewsunglasses.com/es/productos/aviador' }
      ]} />
      <FAQPageSchema faqs={aviatorFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hover:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/es/productos" className="hover:text-primary-600">Productos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Gafas Aviador</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gafas de Sol Aviador al por Mayor
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
              alt="Gafas de Sol Aviador al por Mayor - Fabricante OEM de Monturas Metálicas"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Aquí va un dato curioso: la aviador nunca fue pensada como artículo de moda. En 1936, <a href="https://www.bausch.com/our-company/history/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bausch &amp; Lomb</a> consiguió un contrato del Cuerpo Aéreo del Ejército de EE.UU. para diseñar gafas de sol para pilotos militares. El problema era específico: los pilotos volaban más alto y más rápido que nunca, y el sol les destrozaba la visión. ¿La solución? Una lente grande en forma de lágrima que cubría toda la cuenca del ojo, una montura metálica delgada que pesaba casi nada bajo un casco de vuelo, y un doble puente sobre la nariz para repartir la presión. Las llamaron &ldquo;aviador&rdquo; porque, bueno, eso es lo que llevaban los que las usaban.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Luego llegó la Segunda Guerra Mundial, y de repente millones de soldados las llevaban puestas. Cuando volvieron a casa, siguieron usándolas. Para los años 60 y 70, las aviador habían saltado de la cabina a Hollywood — las llevaba todo el mundo, desde Paul Newman hasta el reparto de Top Gun. El estilo simplemente se quedó. Casi 90 años después, el diseño básico apenas ha cambiado, y las aviador siguen siendo uno de los tres modelos de gafas de sol más vendidos en todo el mundo. Eso no es una tendencia — es un clásico.
              </p>
              <p className="text-lg leading-relaxed">
                Producimos más de 200.000 pares de <strong>gafas aviador personalizadas</strong> al año para marcas en más de 50 países. Nuestra fábrica cuenta con líneas de producción dedicadas a monturas metálicas con mecanizado CNC, electrochapado PVD y montaje de precisión de lentes. Ya necesites 100 pares para probar un nuevo mercado o 50.000 pares para un lanzamiento retail nacional, tenemos la capacidad y la experiencia. Y como las aviador son nuestro pan de cada día, tenemos el proceso perfeccionado — lo que significa producción más rápida, menos defectos y mejores precios.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Colección Aviador</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/es/contacto" className="btn-primary text-sm">Pedir Presupuesto</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Especificaciones Completas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Material de Montura', 'Acero Inoxidable / Aleación de Aluminio / Beta Titanio'],
                      ['Peso de Montura', 'Acero: 28-32g | Aluminio: 18-22g | Titanio: 15-18g'],
                      ['Material de Lente', 'Policarbonato / TAC Polarizada / CR-39 Óptica / Vidrio'],
                      ['Ancho de Lente', '55mm / 58mm / 60mm / 62mm'],
                      ['Ancho de Puente', '14mm / 15mm / 16mm / 18mm'],
                      ['Largo de Patilla', '135mm / 140mm / 145mm'],
                      ['Altura de Lente', '48mm - 52mm (forma de lágrima)'],
                      ['Protección UV', 'UV400 — bloquea el 100% de los rayos UVA (315-380nm) y UVB (280-315nm)'],
                      ['Polarización', 'Opcional película TAC de 7 capas — 99% de reducción de deslumbramiento'],
                      ['Colores de Montura', 'Dorado, Plateado, Gunmetal, Negro Mate, Oro Rosa o PVD personalizado'],
                      ['Colores de Lente', 'Gris, Verde G-15, Marrón, Azul, Rosa, Espejo, Degradado'],
                      ['Plaquetas Nasales', 'Silicona ajustable con brazo de titanio'],
                      ['Bisagras', 'Barril estándar o cargadas con muelle (ajuste flexible)'],
                      ['Certificaciones', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001 — documentación disponible bajo solicitud'],
                      ['MOQ', '100 piezas por modelo — se permite mezclar colores'],
                      ['Tiempo de Muestra', '3-5 días laborables'],
                      ['Tiempo de Producción', '15-20 días estándar / 10-12 días urgente'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Frame Material Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Eligiendo el Metal Correcto para tus Aviador</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Esta es una de las primeras decisiones que tomarás, y afecta a todo: coste, peso, durabilidad y lo premium que se siente tu producto en la mano de alguien. Aquí va el análisis honesto.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔩</div>
                <h3 className="text-xl font-bold mb-3">Acero Inoxidable</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestra opción más popular y la que recomendamos para la mayoría de las marcas. Usamos <a href="https://en.wikipedia.org/wiki/SAE_304_stainless_steel" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acero grado 304 o 316L</a> — el mismo material de los buenos relojes. Es fuerte, no se corroe y acepta el recubrimiento de maravilla. Dorado, plateado, negro, oro rosa — todos quedan genial en acero y aguantan con el tiempo. El peso (28-32g) en realidad juega a tu favor porque los clientes asocian ese ligero peso con calidad. Ideal para marcas con retail de $20-60.
                </p>
                <div className="text-primary-600 font-bold">$8 - $12 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🪶</div>
                <h3 className="text-xl font-bold mb-3">Aleación de Aluminio</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si tus clientes valoran la comodidad — y especialmente si llevan gafas de sol todo el día — el aluminio vale la pena. Con 18-22g es notablemente más ligero que el acero. Usamos <a href="https://en.wikipedia.org/wiki/6061_aluminium_alloy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">aleación aeronáutica 6061-T6 o 7075</a> (el mismo material que usan en fuselajes de aviones, por si quieres un argumento de venta). Las monturas se pueden anodizar en prácticamente cualquier color y el acabado es muy duradero. Ideal para marcas outdoor, athleisure y el rango retail de $40-80.
                </p>
                <div className="text-primary-600 font-bold">$10 - $14 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Titanio</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La jugada de prestigio. El beta-titanio con 15-18g es casi cómicamente ligero — la gente se los pone e inmediatamente dice &ldquo;wow.&rdquo; Es 100% hipoalergénico (nada de níquel), lo que es un verdadero argumento de venta para pieles sensibles. Y la flexibilidad es increíble — puedes doblar las patillas casi hasta dejarlas planas y vuelven a su forma. ¿El inconveniente? Cuesta más. Pero aquí está la cosa: el titanio te permite vender a $80-200+ sin despeinarte. Los márgenes por par suelen ser mejores que con monturas más baratas.
                </p>
                <div className="text-primary-600 font-bold">$14 - $22 / par</div>
              </div>
            </div>
          </section>

          {/* Lens Options */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Lentes</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              La montura llama la atención, pero la lente es lo que tu cliente mira a través cada día. Esto es lo que ofrecemos.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Policarbonato (PC)</h3>
                <p className="text-sm text-gray-600">El estándar. Resistente a impactos, ligero, irrompible — 10 veces más fuerte que el vidrio. Sirve para todo, desde uso casual hasta deportes. Todos nuestros colores y recubrimientos espejo están disponibles en PC. Esto es lo que usa el 70% de nuestros clientes.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">TAC Polarizada</h3>
                <p className="text-sm text-gray-600">Siete capas de película polarizada entre láminas de PC. Elimina el 99% del deslumbramiento reflejado. El upgrade que justifica cobrar más. Añade unos $2-3 a tu coste por par pero te permite cobrar $15-20 más en retail. Merece la pena.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">CR-39 Óptica</h3>
                <p className="text-sm text-gray-600">Si quieres competir con las grandes marcas en calidad de lente, esta es. Un número de Abbe de 58 significa óptica perfecta sin distorsión. Resistente a rayones. Más ligera que el vidrio. La elección para posicionamiento premium.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Fotocromática</h3>
                <p className="text-sm text-gray-600">Se oscurece con la luz solar, se aclara en interiores. Pasa de Categoría 1 a Categoría 3 en unos 30 segundos. Un buen truco y un argumento de venta para clientes que quieren unas gafas para todo. Añade unos $3-4 por par.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Vidrio</h3>
                <p className="text-sm text-gray-600">De la vieja escuela, pero algunos mercados lo adoran. La mejor claridad óptica, la más resistente a rayones, la más pesada. Popular en Europa y Japón donde las lentes de vidrio tienen una percepción premium. Podemos hacer vidrio mineral en todos los tintes estándar.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Recubrimientos Disponibles</h3>
                <p className="text-sm text-gray-600">Espejo (plateado, azul, dorado, rojo, verde, púrpura), antirreflejante, hidrofóbico (repele agua), oleofóbico (resiste huellas dactilares) y antivaho. Combínalos como quieras.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Hazlas Tuyas</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Aquí es donde conviertes unas gafas de sol geniales en TU producto. Todo lo que podemos personalizar.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Trabajo de Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Grabado láser</strong> — el más popular. Limpio, permanente, queda genial en metal. Interior o exterior de la patilla.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Insignia metálica</strong> — una pequeña insignia 3D de aleación de zinc o acero soldada a la patilla. Se siente cara.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impresión en lente</strong> — pequeño logo serigrafiado en la esquina de la lente. Sutil pero visible.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Plaquetas personalizadas</strong> — tu logo grabado o impreso en las plaquetas de silicona. Un bonito detalle.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Colores</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Montura:</strong> Dorado, Plateado, Negro, Gunmetal, Oro Rosa — o danos un código Pantone y lo igualamos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tintes de lente:</strong> Gris, Verde, Marrón, Azul, Rosa, Amarillo, Rojo — o color personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Espejo:</strong> Plateado, Azul, Dorado, Rojo, Verde, Púrpura, Rosa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Degradado:</strong> Degradado de arriba a abajo en cualquier color de lente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches rígidos:</strong> EVA con cremallera, piel con cierre magnético o lata metálica — todos con tu logo impreso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Fundas suaves:</strong> Microfibra con cordón y logo — sirve también como paño de limpieza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cajas retail:</strong> Cartón impreso a todo color, insertos personalizados, lengüetas para colgar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> Paños de limpieza, tarjetas de garantía, etiquetas colgantes, pegatinas — todo con tu marca</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">¿Quién Compra Aviador al por Mayor?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Enviamos aviador a una gama bastante amplia de negocios. Estos son los más comunes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏪 Propietarios de Marcas de Gafas</h3>
                <p className="text-gray-300 text-sm">Marcas nuevas y establecidas construyendo su línea de productos. Las aviador suelen ser el primer estilo que lanzan — son seguras, se venden y quedan bien en las fotos de marketing.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🛍️ Tiendas Retail</h3>
                <p className="text-gray-300 text-sm">Boutiques, tiendas de surf, ópticas y compradores de grandes almacenes buscando su propia marca. Nuestro mínimo de 100 piezas permite a tiendas pequeñas entrar sin un gran riesgo.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🌐 Vendedores Online</h3>
                <p className="text-gray-300 text-sm">Vendedores de Amazon, Shopify, Etsy que necesitan producto de calidad con márgenes que funcionen para e-commerce. Podemos proporcionar fotos de producto y descripciones para acelerar tus listings.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🎁 Corporativo y Promocional</h3>
                <p className="text-gray-300 text-sm">Empresas que piden aviador con marca para ferias, torneos de golf, regalos de equipo y eventos. Alto valor percibido a un precio que funciona para presupuestos promocionales.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏨 Hoteles y Resorts</h3>
                <p className="text-gray-300 text-sm">Marcas de hostelería que ofrecen aviador personalizadas como amenities o artículos de tienda de regalo. El packaging personalizado con el nombre del resort crea un bonito souvenir que los huéspedes realmente conservan.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">📦 Distribuidores</h3>
                <p className="text-gray-300 text-sm">Mayoristas regionales que abastecen a múltiples tiendas. Nuestros precios por volumen en pedidos de 1.000+ y 5.000+ dan a los distribuidores los márgenes que necesitan para atender a sus cuentas.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes sobre Gafas Aviador</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {aviatorFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">También Te Puede Interesar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/es/productos/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Wayfarer</h3>
                <p className="text-gray-600 text-sm">El otro estilo &ldquo;imprescindible&rdquo;. Monturas de acetato, toneladas de colores y la forma más vendida del mundo. La mayoría de las marcas llevan tanto aviador como wayfarer.</p>
              </Link>
              <Link href="/es/productos/polarizado" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Polarizadas</h3>
                <p className="text-gray-600 text-sm">Añade lentes polarizadas a cualquier aviador para un upgrade premium. 99% de reducción de deslumbramiento, 25-40% más de precio retail. La forma más fácil de mejorar tus márgenes.</p>
              </Link>
              <Link href="/es/productos/tr90" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Gafas Deportivas</h3>
                <p className="text-gray-600 text-sm">Si tus clientes necesitan algo más resistente que las aviador — monturas envolventes TR90 con agarres antideslizantes para running, ciclismo y deportes al aire libre.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Listo para Pedir Aviador?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos lo que necesitas — estilo, cantidad, cualquier personalización — y te responderemos en 24 horas con precios.
              Las muestras se envían en 3-5 días. Sin compromiso hasta que estés listo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/contacto" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Pedir Presupuesto
              </Link>
              <Link href="/es/productos" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Ver Todos los Productos
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
