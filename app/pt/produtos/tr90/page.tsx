import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricante de Óculos de Sol TR90 | Fábrica de Óculos Ultraligeras TR90 - EyeView',
  description: 'Fabricante de óculos de sol TR90. Armações ultraligeros de Grilamid TR90 (15-20g), material con memoria flexible, hipoalergénico. Esportivos, infantiles, uso diario. MOQ 100 peças. Direto de fábrica.',
  keywords: 'fabricante óculos TR90, óculos TR90 no atacado, fábrica óculos ultraligeras, Grilamid TR90, óculos flexibles, fabricante óculos esportivos, óculos infantiles no atacado',
  openGraph: {
    title: 'Fabricante de Óculos de Sol TR90 | Fábrica de Óculos Ultraligeras TR90 - EyeView',
    description: 'Fabricante de óculos de sol TR90. Armações ultraligeros de Grilamid TR90 (15-20g), flexibles, hipoalergénicos. Óculos esportivos e infantiles. MOQ 100 peças.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/produtos/tr90',
    locale: 'pt_BR',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/tr90',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/tr90',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/tr90',
    },
  },
}

const tr90Faqs = [
  {
    question: '¿Qué es exactamente el TR90 y por qué se usa para óculos de sol?',
    answer: 'El TR90 es una poliamida termoplástica (nylon) desarrollada originalmente por EMS-Grivory en Suiza bajo la marca Grilamid TR90. Fue diseñado específicamente para aplicaciones ópticas — es decir, se creó a partir de cero para fabricar armações de óculos. Las propiedades clave son: ultraligero (un armação terminado pesa solo 15-20 gramos), extrema flexibilidad (puedes doblarlo casi por la mitad y vuelve a su forma original), memoria (mantiene su forma durante anos de uso diario), hipoalergénico (sin níquel, sin BPA, sin reacciones en la piel) y alta resistencia al calor (temperatura de deformación de aproximadamente 120°C). Se fabrica por moldeo por inyección, así que la produção es rápida y consistente — lo que mantiene los costos bajos. Básicamente, el TR90 te da un armação que no pesa nada, nunca se rompe y nunca irrita la piel sensible. Por eso se ha convertido en el material preferido para óculos esportivos, óculos infantiles y armações ligeros de uso diario.',
  },
  {
    question: 'Como se compara el TR90 con los armações de acetato y metal?',
    answer: 'La forma más fácil de entender el TR90 es compararlo directamente. Peso: los armações TR90 pesan 15-20 gramos, los de acetato pesan 25-35 gramos y los de metal pesan 28-35 gramos. Así que el TR90 es aproximadamente un 40-50% más ligero que el acetato. Flexibilidad: el TR90 se dobla y vuelve a su forma; el acetato se parte si lo doblas demasiado; el metal se deforma permanentemente. Durabilidad: el TR90 es prácticamente irrompible en uso normal; el acetato puede astillarse o agrietarse; el metal puede deformarse. Opciones de color: el acetato gana aquí con sus ricos patrones en capas; el TR90 está más limitado a colores sólidos y acabados superficiales. Percepción premium: el acetato tiene una sensación de lujo que el TR90 no puede igualar; el TR90 se siente técnico y esportivo. Costo: los armações TR90 cuestan $4-8 por par, el acetato $6-16 y el metal $8-22. Conclusión: TR90 para rendimiento y valor, acetato para lujo y estética, metal para estilo clásico.',
  },
  {
    question: '¿Se pueden imprimir o colorear los armações TR90 con designs personalizados?',
    answer: 'Sí, pero las opciones son diferentes al acetato. El color del TR90 se determina durante el moldeo por inyección — añadimos pellets de color masterbatch a la resina Grilamid cruda, así que el color penetra todo el material. Tenemos aproximadamente 30 colores estándar (negro mate, negro brillo, azul marino mate, gris, rojo, naranja, blanco, transparente, etc.) y podemos igualar colores Pantone personalizados con un mínimo de 500 peças. Para decoración superficial, ofrecemos tampografía (logos, patrones, gráficos multicolor en la haste), impresión UV (impresión de qualidade fotográfica a todo color en superficies planas), transferencia hidrográfica (impresión por inmersión en agua para patrones de camuflaje, fibra de carbono, veta de madera que envuelven las curvas) y grabado láser. Também hacemos recubrimiento de caucho (un acabado mate de tacto suave que añade agarre y sensación premium) y recubrimiento PVD metálico en acentos de haste. Lo único que el TR90 no puede hacer es replicar la profundidad de color en capas del acetato — los patrones de carey, mármol y cristal no son posibles en material moldeado por inyección.',
  },
  {
    question: '¿Es seguro el TR90 para óculos de sol infantiles?',
    answer: 'El TR90 es probablemente el mejor material para óculos infantiles, y aquí explico por qué. Primero, es virtualmente irrompible — los crianças son duros con las óculos, y el TR90 se flexiona en vez de partirse. Hemos probado nossos armações infantiles con mais de 5,000 ciclos de apertura y cierre de dobradiça sin ningún fallo. Segundo, es hipoalergénico — sin níquel, sin BPA, sin ftalatos, sin látex. Los crianças tienen piel más sensible que los adultos, y los armações metálicos con contenido de níquel pueden causar dermatitis de contato. Tercero, es ultraligero con 12-15 gramos para armações de tamaño infantil — las óculos pesadas se resbalan por las narices pequeñas y los crianças simplemente se las quitan. Cuarto, el TR90 cumple con los estándares de seguridad de juguetes EN 71 (podemos proporcionar documentación de pruebas), que algunos mercados requieren para óculos vendidas a menores de 14 anos. Y quinto, el bajo costo ($3.50-6.00 por par para armações infantiles) lo hace económico para padres que saben que su hijo probablemente las perderá o romperá en seis meses de todas formas.',
  },
  {
    question: '¿Qué temperatura puede soportar el TR90?',
    answer: 'El TR90 tiene una temperatura de deflexión térmica (HDT) de aproximadamente 120°C (248°F) a 1.8 MPa — significativamente más alta que el nylon estándar (alrededor de 75°C) y mucho más alta que el acetato (que se ablanda a 70-80°C). En términos prácticos, esto significa que los armações TR90 pueden sobrevivir sin problemas al ser dejados en el salpicadero de un coche en verano (que puede alcanzar 70-90°C), al ser usados en una sauna, o al ser expuestos a agua caliente sin deformarse. Este es un punto de venta real, especialmente para marcas esportivos y de actividades al aire libre — los atletas dejan sus óculos en coches calientes, en salpicaderos de barcos y en bolsas de gimnasio junto a ropa sudada. El TR90 aguanta todo eso. El extremo frío es igualmente impresionante: el TR90 mantiene su flexibilidad hasta -40°C, así que no se vuelve quebradizo en condiciones invernales. Para comparar, los armações baratos de policarbonato pueden volverse quebradizos por debajo de 0°C.',
  },
  {
    question: '¿Cuál es la cantidad mínima de pedido para óculos de sol TR90?',
    answer: 'El MOQ estándar es de 100 peças por modelo usando nossa biblioteca de moldes existentes — tenemos mais de 80 designs de armações TR90 en stock que cubren envolventes esportivos, wayfarers, redondos, rectangulares, estilo aviador y formas infantiles. Puedes mezclar colores dentro de esas 100 peças. Para un design de armação completamente personalizado, cobramos una tarifa de molde de $1,500-3,000 dependiendo de la complejidad (los moldes TR90 son más caros que el mecanizado CNC de acetato porque los moldes de inyección son de acero y mecanizados con precisión). El MOQ para molde personalizado es de 500 peças en el primer pedido. Para colores Pantone personalizados, el mínimo es 500 peças porque necesitamos mezclar y probar el masterbatch. Para colores estándar en stock, no hay mínimo más allá de las 100 peças base.',
  },
]

const products = [
  {
    name: 'Sport Wrap TR90',
    description: 'Nosso modelo TR90 más vendido. Design envolvente completo que bloquea el viento, el polvo y la luz periférica. Las almofadas nasales de caucho y las puntas de haste proporcionan agarre antideslizante incluso cuando estás sudando. La forma envolvente sigue la curvatura del rostro, proporcionando cobertura de 180 grados sin el aspecto de "ojo de insecto". Pesa solo 18 gramos — la mayoría de los clientes olvidan que las llevan puestas en cinco minutos. Este es el armação que equipos de ciclismo, clubes de running y marcas de pesca piden en grandes cantidades. Disponível en 15 colores estándar con opciones de lentes polarizados.',
    price: '$4.50 - $7.50',
    moq: '100 pçs',
    features: ['Design Envolvente', 'Agarre de Caucho', '18g Ultraligero', 'Haste Antideslizante'],
  },
  {
    name: 'TR90 Wayfarer',
    description: 'La clásica forma wayfarer en TR90 en vez de acetato. Pierdes la profundidad de color en capas del acetato, pero ganas un armação que pesa 16 gramos en vez de 30, cuesta un 40% menos y es prácticamente imposible de romper. Para marcas que apuntan al rango retail de $20-40 donde el preço del acetato no funciona, este es el punto óptimo. Podemos recubrir la superficie con caucho para un acabado mate de tacto suave que añade agarre y sensación premium. Popular entre marcas DTC, empresas promocionales y librerías universitarias.',
    price: '$4.00 - $6.50',
    moq: '100 pçs',
    features: ['Forma Wayfarer', '16g de Peso', 'Opción Recubrimiento Caucho', 'Preço Accesible'],
  },
  {
    name: 'Kids Flex TR90',
    description: 'Diseñado para edades de 4 a 12 anos con flexibilidad extra incorporada en el design. Las hastes tienen una zona de flexión integrada que les permite doblarse hacia afuera sin romperse — importante porque los crianças agarran sus óculos por un brazo y tiran. Hipoalergénico, libre de BPA, libre de ftalatos. Almofadas nasales de caucho dimensionadas para pontes más pequeños. Disponível en colores brillantes y divertidos — azul eléctrico, rosa intenso, verde lima, naranja atardecer, negro mate (para el mercado del "niño cool"). Pesa solo 12 gramos. Los padres las compran porque saben que los crianças las maltratarán. Tenemos clientes que las venden en packs de 3 porque los padres esperan reemplazarlas.',
    price: '$3.50 - $6.00',
    moq: '100 pçs',
    features: ['Edades 4-12', 'Hastes Extra Flex', '12g de Peso', 'Sin BPA/Ftalatos'],
  },
  {
    name: 'TR90 Half-Frame Sport',
    description: 'Design semi al aire donde el armação TR90 sujeta la parte superior de la lente y un cordón de nylon fino sujeta el borde inferior. Esto elimina otros 3-4 gramos comparado con el armação completo, llevando el peso total a unos 14 gramos. El borde inferior abierto também mejora la visibilidad hacia abajo, lo cual es importante para corredores y ciclistas que necesitan ver la carretera debajo de ellos. El borde expuesto de la lente les da un aspecto técnico y orientado al rendimiento. Popular entre marcas de running, triatlón y líneas de óculos de golf.',
    price: '$5.00 - $8.00',
    moq: '100 pçs',
    features: ['Semi al Aire', '14g de Peso', 'Visión Inferior Mejorada', 'Cordón de Nylon Inferior'],
  },
  {
    name: 'TR90 + Metal Combo',
    description: 'Armação frontal TR90 con hastes de acero inoxidable o titanio. Este híbrido te da la flexibilidad ligera del TR90 donde más importa (el armação frontal que toca tu cara) y el aspecto premium de las hastes metálicas. Las hastes de metal pueden grabarse con láser con tu logo — lo cual se ve mucho más nítido que imprimir sobre plástico. Pesa unos 20 gramos en total. Esta es nossa recomendación favorita para marcas que quieren un look de transición deporte-casual — suficientemente técnico para uso al aire libre, suficientemente elegante para una cena.',
    price: '$7.00 - $11.00',
    moq: '100 pçs',
    features: ['Híbrido TR90 + Metal', 'Grabado Láser', '20g de Peso', 'Crossover Deporte-Casual'],
  },
  {
    name: 'TR90 Shield / Visor',
    description: 'Design de pantalla con lente única en TR90 — una lente continua que cubre ambos ojos con un armação superior TR90 y sistema de hastes. Este es el estilo que ves en ciclistas profesionales, patinadores de velocidad y esquiadores de competición. Máximo campo de visión, cero obstrucción del armação en la vista central y estilo aerodinámico agresivo. La lente única es de policarbonato con recubrimientos opcionales de espejo, polarizado o fotocromático. Almohadilla nasal ajustable y puertos de ventilación para prevenir el empañamiento. Si tu marca se dirige a atletas serios, este es el armação que gana credibilidad.',
    price: '$6.00 - $9.00',
    moq: '100 pçs',
    features: ['Lente Pantalla Única', 'Ventilación Anti-Vaho', 'Máximo Campo Visual', 'Design Aerodinámico'],
  },
]

export default function TR90PagePtPt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Ultraligeras TR90',
        description: 'Óculos de sol ultraligeras de Grilamid TR90. Armações de 15-20g, material con memoria flexible, hipoalergénico. Estilos esportivos, infantiles y de uso diario. Personalização OEM completa.',
        minPrice: '3.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos de Sol TR90', url: 'https://eyeviewsunglasses.com/pt/produtos/tr90' }
      ]} />
      <FAQPageSchema faqs={tr90Faqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Óculos de Sol TR90</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
              alt="Fabricante de Óculos de Sol TR90 - Óculos Esportivos de Nylon Ligero no Atacado"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricante de Óculos de Sol TR90
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Déjame mostrarte algo. Toma un par de óculos de sol normales — de las que compras en una gasolinera. Ahora dobla las hastes. ¿Escuchas ese crujido? Eso es policarbonato barato diciéndote que está a punto de partirse. Ahora intenta lo mismo con un armação TR90. Puedes prácticamente doblarlo por la mitad. Vuelve a su forma al instante. Sin crujido, sin grieta, sin deformación permanente. Esa flexibilidad no es un truco — es la ventaja ingenieril fundamental del <a href="https://www.emsgrivory.com/en/products/grilamid-tr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grilamid TR90</a>, una <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">poliamida</a> termoplástica desarrollada por la empresa química suiza EMS-Grivory específicamente para aplicaciones ópticas.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Estos son los números que importan: un armação TR90 terminado pesa 15-20 gramos. Para comparar, los armações de acetato pesan 25-35 gramos y los de metal pesan 28-35 gramos. Esa diferencia de 10-15 gramos puede no sonar a mucho en papel, pero ponte un armação TR90 en la cara después de llevar acetato todo el día y entenderás inmediatamente por qué atletas, profesionales al aire libre y cada vez más consumidores cotidianos están cambiando. Te olvidas de que las llevas puestas. Sin presión en la nariz, sin deslizamiento, sin marcas rojas detrás de las orejas. Para <Link href="/pt/produtos/esportivo" className="text-primary-600 hover:underline">marcas esportivos</Link> y <Link href="/pt/produtos/infantil" className="text-primary-600 hover:underline">óculos infantiles</Link>, el TR90 no es solo una buena opción — es la opción obvia.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                A partir de el punto de vista de fabricação, el TR90 se moldea por inyección — lo que significa que alimentamos pellets de Grilamid en un cilindro calentado, inyectamos el material fundido en un molde de acero de precisión bajo alta presión y sacamos un armação terminado en unos 45 segundos. Compara eso con los armações de acetato que tardan 5-7 dias de corte, pulido en tambor y pulido a mano. El resultado es una produção más rápida, menor costo unitario y qualidade extremadamente consistente. Nossa tasa de defectos en TR90 es inferior al 0.5% — frente al 3-5% del acetato. Si necesitas grandes volúmenes a preços competitivos sin sacrificar qualidade, el TR90 es el material que lo hace posible.
              </p>
              <p className="text-lg leading-relaxed">
                Producimos alrededor de 500,000 armações TR90 por año entre envolventes esportivos, wayfarers casuales, estilos infantiles y designs híbridos deporte-casual. Nossa biblioteca de moldes tiene mais de 80 designs listos para usar, y operamos cuatro máquinas de moldeo por inyección dedicadas a la produção de TR90. Ya sea que estés lanzando una marca de óculos esportivos, añadiendo una línea infantil o construyendo una coleção ligera de uso diario, aquí tienes todo lo que necesitas saber.
              </p>
            </div>
          </div>

          {/* Weight Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">La Ventaja del Peso</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El peso es la razón principal por la que las marcas eligen TR90. Así es como se compara con todos los demás materiales de armação que ofrecemos.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">TR90 (Grilamid)</span>
                    <span className="text-primary-600 font-bold">15 - 20g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-primary-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">La opción más ligera. Apenas se nota en el rostro. Ideal para uso durante todo el día y actividad física.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Aleación de Aluminio</span>
                    <span className="text-gray-600 font-bold">18 - 22g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Cercano al TR90 en peso, pero rígido — sin flexión. Sensación metálica premium con buena ligereza.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acetato</span>
                    <span className="text-gray-600 font-bold">25 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">El material de lujo. Hermoso pero más pesado. Ese peso es parte de su &ldquo;sensación premium&rdquo; — pero no es ideal para deportes.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acero Inoxidable</span>
                    <span className="text-gray-600 font-bold">28 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Armações metálicos clásicos. El peso comunica qualidade pero puede causar fatiga durante el uso prolongado.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Policarbonato Estándar</span>
                    <span className="text-gray-600 font-bold">22 - 28g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Más barato que el TR90 pero más pesado, menos flexible y más frágil. La opción económica que el TR90 supera.</p>
                </div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Óculos de Sol TR90 no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nossa Coleção TR90</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🏃</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/pt/contato" className="btn-primary text-sm">Cotización</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Especificações Completas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Material del Armação', 'EMS-Grivory Grilamid TR90 (poliamida termoplástica de ingeniería suiza)'],
                      ['Peso del Armação', '15-20g (armação completo) / 12-15g (infantil) / 14g (semi al aire)'],
                      ['Flexibilidad', 'Material con memoria — se dobla a 90°+ y vuelve a su forma original. Mais de 5,000 ciclos de flexión probados.'],
                      ['Resistencia al Calor', 'HDT 120°C (248°F) — sobrevive a salpicaderos de coche, saunas, agua caliente'],
                      ['Resistencia al Frío', 'Mantiene la flexibilidad hasta -40°C (-40°F) — sin fragilidad en invierno'],
                      ['Hipoalergénico', 'Sí — sin níquel, sin BPA, sin ftalatos, sin látex'],
                      ['Material de Lente', 'Policarbonato / TAC Polarizado / Fotocromático'],
                      ['Proteção UV', 'UV400 — bloquea el 100% de UVA (315-380nm) y UVB (280-315nm)'],
                      ['Almofadas Nasales', 'Caucho TPE integrado (antideslizante) o almofadas de silicona ajustables'],
                      ['Puntas de Haste', 'Agarre de caucho TPE co-moldeado — antideslizante incluso mojado'],
                      ['Colores en Stock', '30+ estándar: negro mate, negro brillo, azul marino, gris, rojo, naranja, blanco, transparente, etc.'],
                      ['Colores Personalizados', 'Igualación Pantone disponível — MOQ 500 pçs para masterbatch personalizado'],
                      ['Acabados Superficiales', 'Mate, brillo, recubrimiento de caucho (tacto suave), acentos PVD metálicos'],
                      ['Opciones de Impresión', 'Tampografía, impresión UV, transferencia hidrográfica (camuflaje, fibra de carbono), grabado láser'],
                      ['Certificações', 'CE (EN ISO 12312-1) · FDA · UV400 · ISO 9001 · EN 71 (infantil)'],
                      ['MOQ', '100 pçs por modelo (moldes en stock) / 500 pçs (moldes personalizados)'],
                      ['Tarifa de Molde (Personalizado)', '$1,500 - $3,000 único pago — molde de inyección de acero'],
                      ['Tiempo de Amostra', '3-5 dias hábiles'],
                      ['Tiempo de Produção', '12-18 dias estándar / 8-10 dias urgente'],
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

          {/* Key Properties Deep Dive */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el TR90 Supera a Otros Plásticos</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              No todos los armações de plástico son iguales. Esto es lo que separa al TR90 del policarbonato estándar y el nylon barato.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🪶 Ultraligero</h3>
                <p className="text-sm text-gray-600">Con una densidad de 1.14 g/cm³, el TR90 es uno de los materiales de armação más ligeros disponívels. Un envolvente esportivo de armação completo pesa solo 18 gramos — aproximadamente lo mismo que tres hojas de papel. Los clientes literalmente olvidan que las llevan puestas, que es exactamente lo que los atletas necesitan.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">💪 Flexibilidad con Memoria</h3>
                <p className="text-sm text-gray-600">El TR90 tiene verdadera memoria de forma — dóblalo, tuércelo, siéntate sobre él, y vuelve a su forma original. Probamos cada design de armação con mais de 5,000 ciclos de apertura-cierre y flexión de haste a 90 grados sin deformación permanente. El policarbonato estándar falla esta prueba a los 500 ciclos aproximadamente.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌡️ Resistente a la Temperatura</h3>
                <p className="text-sm text-gray-600">La deflexión térmica a 120°C significa que el TR90 sobrevive a situaciones que destruyen otros plásticos. ¿Dejadas en el salpicadero de un coche en Phoenix? Sin problema. ¿Caídas en un jacuzzi? Sin problema. ¿Guardadas en una taquilla de sauna? Sin problema. El acetato se deformaría. El PC estándar podría deformarse. Al TR90 le da igual.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🧪 Resistente a Químicos</h3>
                <p className="text-sm text-gray-600">Resistente a protector solar, repelente de insectos, sudor, agua salada y la mayoría de químicos comunes. Esto importa para uso esportivo y al aire libre donde los armações están constantemente expuestos a estas sustancias. El acetato, por el contrario, puede dañarse con los químicos del protector solar con el tiempo.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛡️ Resistente a Impactos</h3>
                <p className="text-sm text-gray-600">El TR90 absorbe la energía del impacto mediante la flexión en vez de agrietarse. Deja caer un armação TR90 a partir de la altura de la cabeza sobre concreto y rebota. Deja caer un armação de acetato y puede astillarse. Para óculos esportivos e infantiles, esta es una característica de seguridad, no solo durabilidad.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏭 Eficiencia de Produção</h3>
                <p className="text-sm text-gray-600">El tiempo de ciclo de moldeo por inyección es de unos 45 segundos por armação — frente a 5-7 dias para acetato. Esto significa entrega más rápida (12-18 dias vs 20-28 dias), menor costo unitario y tasas de defectos por debajo del 0.5%. Para pedidos de volumen, la ventaja en costo y velocidad es significativa.</p>
              </div>
            </div>
          </section>

          {/* Best Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">¿Quién Debería Usar TR90?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El TR90 no es el material adecuado para todas las marcas. Aquí es donde destaca y dónde podrías querer algo diferente.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-600">✅ Perfecto Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Marcas esportivos</strong> — ciclismo, running, pesca, golf, esquí. El TR90 es el estándar de la industria para óculos de rendimiento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Óculos infantiles</strong> — irrompibles, ultraligeras, hipoalergénicas. El material fue prácticamente diseñado para crianças.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Líneas de confort diario</strong> — para marcas que se posicionan en torno a la comodidad todo el día y el mensaje de &ldquo;te olvidas de que las llevas&rdquo;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Marcas de volumen/valor</strong> — bajo costo unitario con qualidade genuina. Punto óptimo retail de $20-50.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Promocional / corporativo</strong> — suficientemente asequible para regalos pero con qualidade suficiente para que la gente realmente las use.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-yellow-200">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">⚡ Buena Opción Híbrida</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Combos TR90 + metal</strong> — frente TR90 con hastes metálicas para un look de transición deporte-casual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Esportivos con prescripción</strong> — TR90 con ranuras de lente compatibles con RX para inserto óptico o montaje directo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Marcas multi-línea</strong> — muchos de nossos clientes usan TR90 para su línea deportiva/activa y acetato para su línea de moda.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">❌ No Ideal Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Lujo / alta moda</strong> — el TR90 carece de la riqueza visual del acetato. Sin carey, sin mármol, sin profundidad de cristal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Posicionamiento retail de $100+</strong> — el material no transmite la sensación premium necesaria a este preço (a menos que sea una marca de rendimiento/tecnología).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Estilo clásico/heritage</strong> — aviadores y wayfarers en TR90 funcionan pero carecen de la calidez y el carácter del metal o acetato.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Personalização TR90</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              El TR90 puede ser moldeado por inyección, pero eso no significa genérico. Así es como hacemos que cada par sea tuyo.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Colores y Acabados</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Color integral</strong> — 30+ colores estándar, o igualación Pantone (MOQ 500 pçs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Recubrimiento de caucho</strong> — acabado mate de tacto suave que añade agarre y sensación premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hidrográfico</strong> — impresión por transferencia en agua para patrones de camuflaje, fibra de carbono, veta de madera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bicolor</strong> — diferentes colores para el frente y las hastes usando moldeo multi-disparo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🏷️ Logo y Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tampografía</strong> — logo multicolor en hastes, hasta 4 colores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impresión UV</strong> — qualidade fotográfica, a todo color, detalle fino en superficies planas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Grabado láser</strong> — permanente, funciona também en superficies recubiertas de caucho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica</strong> — placa de logo de aleación de zinc incrustada en la haste durante el moldeo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Embalagem</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuche esportivo</strong> — EVA semi-rígido con clip mosquetón, con marca. $1.00-1.80 por set.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Funda de microfibra</strong> — con cordón y logo impreso. $0.30-0.60 cada una.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cordón de sujeción</strong> — cordón de neopreno con marca. Excelente complemento para líneas esportivos. $0.40-0.80.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Caja retail</strong> — impresión a todo color, inserto personalizado, tarjeta de especificaciones. $0.80-1.50.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lens Options for Sport */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Lentes para Armações TR90</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              La lente importa tanto como el armação. Estas son las opciones que combinamos con TR90 — especialmente para uso esportivo y activo.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🔵 TAC Polarizado</h3>
                <p className="text-gray-300 text-sm">La mejora más popular para armações TR90 esportivos. La película polarizada de 7 capas elimina el 99% del resplandor reflejado del agua, carreteras y nieve. Esencial para pesca, ciclismo y conducción. Añade $2-3 por par pero te permite cobrar $15-20 más en retail. Lee nossa <Link href="/pt/produtos/polarizado" className="text-blue-400 hover:underline">guía de lentes</Link> para el desglose completo.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌗 Fotocromático</h3>
                <p className="text-gray-300 text-sm">Se oscurece con la luz solar, se aclara en interiores. De Categoría 0-1 en interiores a Categoría 2-3 en exteriores en unos 30 segundos. Gran punto de venta para uso esportivo durante todo el día — empieza tu carrera al amanecer, termina al mediodía, un solo par lo maneja todo. Añade $3-4 por par.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🪞 Recubrimientos Espejo</h3>
                <p className="text-gray-300 text-sm">Plata, azul, rojo, dorado, verde, púrpura, rosa — aplicados sobre lentes polarizados o de PC estándar. El look agresivo combina perfectamente con armações TR90 esportivos. Espejo azul sobre un envolvente TR90 negro mate es uno de nossos produtos más vendidos de todos los tiempos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🟡 Amarillo/Ámbar (Baja Luz)</h3>
                <p className="text-gray-300 text-sm">Tinte de Categoría 1 que mejora el contraste en condiciones nubladas, con niebla o poca luz. Popular para ciclismo, tiro, esquí y conducción al atardecer. No es suficientemente oscuro para sol intenso — se comercializa como una opción de lente dedicada para poca luz.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">💧 Hidrofóbico + Oleofóbico</h3>
                <p className="text-gray-300 text-sm">Recubrimientos repelentes al agua y resistentes a huellas dactilares. La lluvia forma gotas, el sudor se limpia fácilmente, las manchas no se adhieren. Añade $0.50-1.00 por par. Muy recomendado para lentes esportivos que recibirán lluvia, sudor y serán manipuladas con dedos sucios.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌫️ Anti-Vaho</h3>
                <p className="text-gray-300 text-sm">Recubrimiento hidrofílico que previene la condensación. Crítico para deportes en clima frío (esquí, snowboard) y actividades de alto esfuerzo donde el calor corporal se encuentra con el aire frío. Funciona durante unos 6-12 meses de uso regular. Añade $1-2 por par.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes sobre Óculos de Sol TR90</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {tr90Faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produtos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/produtos/esportivo" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos de Sol Esportivos</h3>
                <p className="text-gray-600 text-sm">Nossa coleção completa de óculos esportivos — envolventes, pantallas, semi al aire. La mayoría de estilos disponívels en TR90 con opciones de lentes polarizados y fotocromáticas.</p>
              </Link>
              <Link href="/pt/produtos/infantil" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos de Sol Infantiles</h3>
                <p className="text-gray-600 text-sm">El TR90 es el material ideal para óculos infantiles — irrompibles, ultraligeras, hipoalergénicas. Tallas para edades de 0 a 14 anos.</p>
              </Link>
              <Link href="/pt/produtos/polarizado" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Polarizados</h3>
                <p className="text-gray-600 text-sm">Guía completa de lentes para óculos de sol — polarizados, fotocromáticas, espejo, CR-39. Descubre qué opciones de lentes combinan mejor con armações TR90.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Pedir Armações TR90?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos lo que necesitas — envolventes esportivos, armações infantiles, estilos casuales o algo personalizado. Te enviaremos amostras de nossa biblioteca de mais de 80 moldes en 3-5 dias. Preços, cronograma de produção y opciones de personalização incluidos. Sin compromiso hasta que estés listo para ordenar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pt/contato" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Solicitar Orçamento
              </Link>
              <Link href="/pt/produtos" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Ver Todos los Produtos
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
