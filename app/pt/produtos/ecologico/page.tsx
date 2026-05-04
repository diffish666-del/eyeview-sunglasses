import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricante de Óculos de Sol Ecológicos | Óculos Sostenibles al por Mayor - EyeView',
  description: 'Fabricante de óculos de sol sostenibles y ecológicos no atacado. Plástico reciclado del océano, hastes de bambú, armações de bio-acetato. MOQ 200 pçs. Certificações verdes disponívels.',
  keywords: 'fabricante óculos sostenibles, óculos ecológicos no atacado, óculos recicladas, óculos bambú, óculos bio-acetato, fábrica óculos verdes, óculos plástico océano',
  openGraph: {
    title: 'Fabricante de Óculos de Sol Ecológicos | Óculos Sostenibles al por Mayor - EyeView',
    description: 'Fabricante de óculos sostenibles. Plástico reciclado del océano, bambú, armações de bio-acetato. MOQ 200 pçs. Preços directos de fábrica con certificacoes verdes.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/produtos/ecologico',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/ecologico',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/eco-friendly',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/ecologico',
    },
  },
}

const ecoFaqs = [
  {
    question: '¿Qué materiales sostenibles ofrecen para la fabricação de óculos de sol?',
    answer: 'Trabajamos con cuatro materiales ecológicos principales ahora mismo. Primero está el plástico reciclado del océano (rPET) — obtenemos plástico post-consumo recolectado en limpeças costeras en el sudeste asiático y lo procesamos en pellets inyectables. Segundo es el bambú, que usamos para las hastes (los brazos de la armação). Tercero es el bio-acetato, específicamente Eastman Acetate Renew, que reemplaza el 60% de la materia prima fósil con contenido reciclado certificado mediante reciclaje molecular. Y cuarto es la aleación de aluminio reciclado para componentes metálicos de armações. Cada material tiene diferentes costos, estética y argumentos medioambientales, así que te ayudamos a elegir el adecuado para la historia de tu marca y tu punto de preço.',
  },
  {
    question: '¿Qué certificacoes pueden proporcionar para óculos ecológicos?',
    answer: 'Esto depende de lo que tu mercado requiera y qué declaraciones quieras hacer. Para las óculos en sí, proporcionamos CE (EN ISO 12312-1), conformidade FDA y pruebas UV400 — igual que nossas líneas estándar. Para declaraciones de sostenibilidad específicamente, el bio-acetato de Eastman viene con certificación de cadena de custodia ISCC PLUS. Nossos proveedores de bambú tienen certificación FSC. Para plástico reciclado del océano, podemos proporcionar documentación de nossos socios de recoleção mostrando la fuente y cadena de custodia. Também tenemos ISO 14001 (gestión medioambiental) para las operaciones de nossa fábrica. Si necesitas certificacoes específicas para tu mercado — digamos, documentación B Corp o cálculos de huella de carbono — podemos trabajar con auditores externos para conseguirlas. Toma unas 4-6 semanas extra.',
  },
  {
    question: '¿Las óculos ecológicos son tan duraderas como las normales?',
    answer: '¿Honestamente? Depende del material, pero la respuesta corta es sí — aguantan perfectamente para uso normal. El bio-acetato rinde de forma idéntica al acetato tradicional porque la estructura química es la misma. El plástico reciclado del océano (rPET) es bastante resistente — lo inyectamos de la misma manera que el nylon virgen, y pasa todas nossas pruebas estándar de caída y fatiga de dobradiça (2.000 ciclos de apertura-cierre). Las hastes de bambú son naturalmente fuertes y tienen un hermoso veteado, aunque pueden ser sensibles a la exposición prolongada al agua — aplicamos un recubrimiento protector de laca para manejar eso. El aluminio reciclado es metalúrgicamente idéntico al aluminio virgen una vez refundido, así que cero diferencia en durabilidad. Lo único que diré es que el bio-acetato puede ser ligeramente más sensible a solventes a base de acetona, así que incluimos instrucciones de cuidado para tus clientes finales.',
  },
  {
    question: '¿Cuál es el pedido mínimo para óculos ecológicos?',
    answer: 'El MOQ es de 200 unidades por modelo para la mayoría de materiales eco — ligeramente mayor que nosso mínimo estándar de 100 unidades porque los materiales sostenibles requieren tiradas de produção separadas para evitar contaminación con materiales convencionales. Para hastes de bambú específicamente, el MOQ es 300 unidades porque los blancos de bambú se procesan por lotes. Puedes mezclar colores y opciones de lente dentro de esos mínimos. Para bio-acetato, si quieres un color o patrón personalizado, el MOQ de la plancha de acetato de Eastman es típicamente 50kg (suficiente para aproximadamente 500-600 pares), así que sugerimos empezar con su biblioteca de colores estándar para pedidos más pequeños. Tenemos unos 15 colores de bio-acetato en stock para pedidos de inicio rápido.',
  },
  {
    question: '¿Cuánto más cuestan las óculos ecológicos comparadas con las normales?',
    answer: 'Menos de lo que la mayoría espera. El bio-acetato añade aproximadamente $1-2 por par comparado con acetato estándar — así que un par que normalmente cuesta $6-8 sale a $7-10 en bio-acetato. Las hastes de bambú añaden aproximadamente $0.50-1.00 por par versus hastes de plástico estándar. Las armações de plástico reciclado del océano (rPET) cuestan aproximadamente lo mismo que las de nylon virgen — a veces incluso menos, dependiendo de los preços del mercado de resina. El aluminio reciclado es típicamente $0.50-1.00 más por par que el aluminio virgen. La historia real está en el lado retail: las óculos sostenibles tienen un sobrepreço del 30-50% de los consumidores. Un par que se vendería a $35 en materiales estándar puede venderse a $45-55 con credenciales eco legítimas y la historia de marca correcta. Tus márgenes realmente mejoran.',
  },
  {
    question: '¿Puedo combinar diferentes materiales eco en un par de óculos?',
    answer: 'Absolutamente, y algunos de los designs eco más vendidos que producimos hacen exactamente eso. La combinación más popular es una armação frontal de plástico reciclado del océano con hastes de bambú — te da dos historias de sostenibilidad en un producto y el contraste visual entre el plástico suave y el veteado natural del bambú se ve fantástico. Otra buena combinación es frente de bio-acetato con acentos de aluminio reciclado en las hastes. Também hemos hecho hastes de bambú en armações estilo aviador de aluminio reciclado. La única combinación que no funciona bien es armações frontales de bambú — el material no es lo suficientemente estable dimensionalmente para el cuerpo principal de la armação donde se asientan las lentes. Estaremos encantados de enviarte amostras de diferentes combinaciones de materiales para que puedas verlas y sentirlas antes de comprometerte.',
  },
]

const products = [
  {
    name: 'Wayfarer Reciclado del Océano',
    description: 'Fabricado con plástico post-consumo certificado del océano, recolectado de las costas de Indonesia y Tailandia. Cada par usa aproximadamente 10 gramos de rPET recuperado — no es un número enorme, pero multiplícalo por unos cuantos miles de pares y se acumula. La armação inyectada se ve y se siente como cualquier armação premium de nylon. Podemos igualar colores Pantone, aunque los acabados más populares son azul océano mate, coral y negro carbón. Viene con una tarjeta explicativa sobre la procedencia del plástico oceánico — a tus clientes les encanta eso.',
    price: '$5.50 - $9.00',
    moq: '200 pçs',
    features: ['Plástico Reciclado del Océano', 'Proteção UV400', 'Coincidencia de Color Pantone', 'Tarjeta Informativa Incluida'],
  },
  {
    name: 'Clásica con Hastes de Bambú',
    description: 'Armação frontal de acetato estándar o rPET combinada con hastes de bambú Moso acabadas a mano. Cada pieza de bambú se seca en horno, se moldea por CNC, luego se lija a mano y se lacra para un acabado suave. El veteado natural significa que no hay dos pares exactamente iguales — lo cual es realmente un punto de venta para marcas de estilo artesanal. El bambú proviene de plantaciones certificadas FSC en la provincia de Zhejiang. El bambú crece hasta tamaño de cosecha en 3-5 anos versus décadas para la madera dura, haciéndolo uno de los materiales más renovables del planeta.',
    price: '$6.00 - $10.00',
    moq: '300 pçs',
    features: ['Bambú FSC', 'Acabado a Mano', 'Veteado Único', 'Protegido con Laca'],
  },
  {
    name: 'Bio-Acetato Premium',
    description: 'Eastman Acetate Renew es lo real en óculos sostenibles ahora mismo. Usa tecnología de reciclaje molecular para reemplazar el 60% del material fósil tradicional con contenido reciclado certificado — y el acetato resultante es químicamente idéntico al acetato convencional. Mismos colores, mismos patrones, mismo acabado pulido a mano, misma durabilidad. La diferencia está puramente en la cadena de suministro, que es exactamente el tipo de declaración verificable que mantiene a tu marca fuera de problemas de greenwashing. Ofrecemos todos los colores estándar de Eastman más coincidencia Pantone personalizada.',
    price: '$7.00 - $11.00',
    moq: '200 pçs',
    features: ['Eastman Acetate Renew', 'Certificado ISCC PLUS', 'Pulido a Mano', '60% Contenido Reciclado'],
  },
  {
    name: 'Aviador de Aluminio Reciclado',
    description: 'Nossa armação aviador clásica, rehecha con aleación de aluminio reciclado. El aluminio proviene de chatarra post-industrial — recortes de fabricação automotriz y aeroespacial que de otro modo se infra-reciclarían. Una vez refundido y recolado, es metalúrgicamente idéntico a la aleación 6061-T6 virgen. Misma resistencia, mismo peso (18-22g), mismos hermosos acabados anodizados. Podemos grabar "aluminio reciclado" en el interior del brazo de la haste para tu marketing. Combina bien con lentes polarizados para un paquete eco premium completo.',
    price: '$10.00 - $15.00',
    moq: '200 pçs',
    features: ['6061-T6 Reciclado', 'Acabado Anodizado', 'Ligero 18-22g', 'Fuente Post-Industrial'],
  },
  {
    name: 'Combo Eco Completo',
    description: 'Nossa opción más sostenible — armação frontal de plástico reciclado del océano combinada con hastes de bambú FSC. Dos historias eco en un producto. El contraste visual entre el plástico mate suave y el veteado natural del bambú se fotografía hermosamente para redes sociales y e-commerce. Incluimos un estuche de fibra de bambú con tu marca y una etiqueta colgante de cartón reciclado con tu mensaje de sostenibilidad. Este es el par que conquista al cliente Gen Z que lee cada etiqueta y verifica cada declaración. Varios de nossos clientes DTC reportan este estilo como su más vendido por ingresos.',
    price: '$8.00 - $12.00',
    moq: '300 pçs',
    features: ['Plástico Oceánico + Bambú', 'Estuche de Fibra de Bambú', 'Etiqueta Reciclada', 'Listo para Instagram'],
  },
  {
    name: 'Eco Explorer para Crianças',
    description: 'Óculos sostenibles para la próxima generación — literalmente. Armação de nylon bio-basado (derivado del aceite de ricino) con dobradiças de muelle flexibles para edades de 4-12. Los padres que compran para crianças son algunos de los consumidores más eco-conscientes que hay, y están dispuestos a pagar un premium por produtos seguros y sostenibles. Las armações son libres de BPA, ftalatos e hipoalergénicas. Podemos hacer colores divertidos — azul océano, verde bosque, naranja atardecer — con embalagem eco a juego. El MOQ es un poco más alto porque las armações infantiles requieren herramientas separadas.',
    price: '$4.50 - $7.00',
    moq: '500 pçs',
    features: ['Nylon Bio-Basado', 'Libre de BPA/Ftalatos', 'Edades 4-12', 'Dobradiças de Muelle'],
  },
]

export default function EcologicoPagePt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Ecológicos Sostenibles',
        description: 'Óculos de sol sostenibles fabricadas con plástico reciclado del océano, bambú, bio-acetato y aluminio reciclado. Proteção UV400, personalização OEM completa. Certificações verdes disponívels.',
        minPrice: '4.50',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos Ecológicos', url: 'https://eyeviewsunglasses.com/pt/produtos/ecologico' }
      ]} />
      <FAQPageSchema faqs={ecoFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Óculos de Sol Ecológicos</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
              alt="Óculos de Sol Ecológicos Sostenibles al por Mayor - Bambú y Materiales Reciclados"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricante de Óculos de Sol Ecológicos
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Voy a ser directo — hace cinco anos, cuando las marcas me preguntaban sobre &ldquo;óculos sostenibles,&rdquo; era escéptico. Pensaba que era un truco de marketing que se desvanecería en una temporada o dos. Estaba equivocado. Completamente equivocado. En 2024, aproximadamente el 35% de las consultas de nuevos clientes mencionan específicamente la sostenibilidad como un requisito. No un nice-to-have — un requisito. El cambio ha sido dramático, y está siendo impulsado por una cosa: la demanda del consumidor, especialmente de compradores Gen Z y millennials que realmente verifican de qué están hechas sus óculos de sol.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Así que invertimos. Durante los últimos tres anos, hemos construido cadenas de suministro dedicadas a materiales eco, obtenido la <Link href="/pt/certificacoes" className="text-primary-600 hover:underline">certificación ISO 14001 de gestión medioambiental</Link> para nossa fábrica, y desarrollado procesos de produção para cuatro materiales sostenibles principales: plástico reciclado del océano (rPET), bambú certificado FSC, <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Eastman Acetate Renew</a> (bio-acetato), y aluminio reciclado. Cada uno tiene diferentes propiedades, diferentes costos y diferentes historias — y honestamente, cuál es el correcto para ti depende enteramente de tu posicionamiento de marca y tus clientes.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Aquí va el caso de negocio en una frase: las <strong>óculos de sol sostenibles</strong> típicamente cuestan $0.50-2.00 más por par de producir, pero tienen un sobrepreço retail del 30-50%. Un wayfarer convencional que se vende a $35 puede venderse a $45-55 con credenciales eco legítimas. He visto a docenas de nossos clientes DTC hacer que esta matemática funcione maravillosamente. Una marca en Ámsterdam cambió toda su línea a bio-acetato en 2023 y vio su valor medio de pedido subir un 28% — mismas armações, mismas lentes, solo diferente material y una mejor historia.
              </p>
              <p className="text-lg leading-relaxed">
                La palabra clave ahí es &ldquo;legítimo.&rdquo; El greenwashing destruirá una marca más rápido que un mal producto. Cada material que ofrecemos viene con documentación trazable — cadena de custodia ISCC PLUS para bio-acetato, certificación FSC para bambú, registros de socios de recoleção para plástico oceánico. Cuando tu cliente escanea el código QR en la etiqueta y ve de dónde vino realmente el material, eso construye el tipo de confianza que el dinero no puede comprar. Déjame explicarte lo que ofrecemos.
              </p>
            </div>
          </div>

          {/* Sustainable Materials Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Nossos Materiales Sostenibles</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Cuatro materiales, cuatro historias diferentes. Aquí tienes una mirada honesta a lo que realmente es cada uno, cuánto cuesta y para quién es mejor.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">Plástico Reciclado del Océano (rPET)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nos asociamos con organizaciones de recoleção costera en Indonesia, Tailandia y Filipinas que recogen residuos plásticos post-consumo de playas y aguas poco profundas. El PET recolectado se clasifica, limpia, tritura y reprocesa en pellets de grado inyección. Químicamente, es polietileno tereftalato — resistente, ligero y estable a los UV. Lo inyectamos de la misma manera que manejamos el nylon virgen. El resultado se ve y se siente como cualquier armação de plástico premium. Los colores son ligeramente más limitados que el material virgen (los negros profundos y colores oscuros funcionan mejor), pero podemos igualar la mayoría de tonos Pantone. El costo es aproximadamente el mismo que el nylon estándar — a veces incluso menos, dependiendo de los preços del mercado de resina virgen.
                </p>
                <div className="text-primary-600 font-bold">$5.50 - $9.00 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🎋</div>
                <h3 className="text-xl font-bold mb-3">Hastes de Bambú</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bambú Moso (<em>Phyllostachys edulis</em>) de plantaciones certificadas FSC en la provincia de Zhejiang, China. El bambú alcanza la madurez de cosecha en 3-5 anos — comparado con 20-60 anos para la madera dura — y se regenera a partir de el mismo sistema de raíces sin necesidad de replantación. Cada blanco de haste se seca en horno al 8-10% de humedad, se corta por CNC, se lija a mano en tres granulometrías y se acaba con una laca de grado alimentario. El veteado natural significa que cada par tiene un aspecto ligeramente único. Las hastes de bambú añaden aproximadamente $0.50-1.00 por par sobre las hastes de plástico estándar. Combinan maravillosamente con armações frontales de rPET o bio-acetato para un paquete eco completo. Una nota: el bambú no es adecuado para armações frontales (la parte que sostiene las lentes) porque carece de la precisión dimensional necesaria para sostener las lentes de forma segura.
                </p>
                <div className="text-primary-600 font-bold">Añade $0.50 - $1.00 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">♻️</div>
                <h3 className="text-xl font-bold mb-3">Bio-Acetato (Eastman Acetate Renew)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esta es la opción sostenible premium y la que más me entusiasma. El <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato de celulosa</a> ha sido el material de armação de referencia durante décadas — y el <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Acetate Renew de Eastman</a> usa tecnología de reciclaje molecular para reemplazar el 60% del material fósil tradicional con contenido reciclado certificado. Lo genial es que el resultado es químicamente idéntico al acetato convencional. Misma dureza, mismo pulido, misma viveza de color, mismo todo. La diferencia está puramente en la cadena de suministro, que es exactamente el tipo de declaración verificable que mantiene a tu marca fuera de problemas de greenwashing. Lleva certificación de balance de masa ISCC PLUS, que es el estándar para declaraciones verificadas de contenido reciclado. Añade $1-2 por par. Si tu marca está posicionada como premium y tus clientes leen las etiquetas, este es el material.
                </p>
                <div className="text-primary-600 font-bold">Añade $1.00 - $2.00 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">Aluminio Reciclado</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para estilos de armação metálica — especialmente <Link href="/pt/produtos/aviador" className="text-primary-600 hover:underline">aviadores</Link> — el aluminio reciclado es una mejora de sostenibilidad directa. Obtenemos chatarra de aluminio post-industrial (recortes de fabricação automotriz y aeroespacial) y la refundimos en lingotes de aleación 6061-T6. Una vez recolado, el aluminio reciclado es metalúrgicamente idéntico al material virgen. Misma resistencia, mismo peso, misma capacidad de anodizado en cualquier color. El beneficio medioambiental es significativo: reciclar aluminio usa un 95% menos de energía que producir aluminio virgen a partir de mineral de bauxita. Añade aproximadamente $0.50-1.00 por par. La única limitación es la documentación de trazabilidad — mantenemos registros por lote vinculando cada tirada de produção a la fuente de chatarra, pero no es una historia tan elegante de cara al consumidor como el plástico oceánico o el bambú.
                </p>
                <div className="text-primary-600 font-bold">Añade $0.50 - $1.00 / par</div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Óculos de Sol Ecológicos al por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nossa Coleção Ecológica</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🌿</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/pt/contato" className="btn-primary text-sm">Solicitar Orçamento</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Materiales Eco de un Vistazo</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Plástico Reciclado del Océano (rPET)', 'PET post-consumo inyectado de limpeças costeras. Mismo aspecto/tacto que el nylon virgen.'],
                      ['Bambú (Moso)', 'Certificado FSC, secado en horno, cortado CNC, lijado a mano, recubierto con laca. Solo para hastes.'],
                      ['Bio-Acetato (Eastman Renew)', '60% contenido reciclado certificado mediante reciclaje molecular. Certificado ISCC PLUS. Químicamente idéntico al acetato estándar.'],
                      ['Aluminio Reciclado', 'Chatarra post-industrial 6061-T6, refundida. 95% menos energía vs aluminio virgen. Rendimiento idéntico.'],
                      ['Material de Lente', 'Igual que estándar: Policarbonato / TAC Polarizado / CR-39 — sin compromiso en óptica'],
                      ['Proteção UV', 'UV400 — bloquea el 100% de UVA (315-380nm) y UVB (280-315nm)'],
                      ['Certificações Disponívels', 'CE · FDA · UV400 · ISO 9001 · ISO 14001 · ISCC PLUS (bio-acetato) · FSC (bambú)'],
                      ['Opciones de Embalagem Eco', 'Estuches de fibra de bambú, cajas de cartón reciclado, bolsas de almidón de maíz, impresión con tinta de soja'],
                      ['MOQ', '200 pçs (rPET, bio-acetato, aluminio reciclado) / 300 pçs (haste de bambú)'],
                      ['Sobrecoste vs Estándar', 'rPET: $0 / Bambú: +$0.50-1.00 / Bio-acetato: +$1-2 / Aluminio reciclado: +$0.50-1.00'],
                      ['Tiempo de Amostra', '5-7 dias hábiles (materiales eco pueden necesitar tiempo de abastecimiento)'],
                      ['Tiempo de Produção', '18-25 dias estándar / 12-15 dias urgente'],
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

          {/* The Business Case for Eco */}
          <section className="mb-20 bg-green-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">El Caso de Negocio para Ser Verde</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              La sostenibilidad no es caridad — es negocio inteligente. Aquí están los números.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📈 30-50% de Sobrepreço Retail</h3>
                <p className="text-sm text-gray-600">Los consumidores consistentemente pagan más por produtos sostenibles verificados. Un wayfarer estándar de $35 se convierte en un wayfarer eco de $45-55. Tu margen por par realmente mejora incluso con el mayor costo de material.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎯 La Gen Z lo Exige</h3>
                <p className="text-sm text-gray-600">El 73% de los consumidores Gen Z están dispuestos a pagar más por produtos sostenibles (First Insight, 2023). Si tu mercado objetivo tiene menos de 35 anos, la sostenibilidad no es opcional — es requisito para captar su atención.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📰 Mina de Oro para PR y Marketing</h3>
                <p className="text-sm text-gray-600">Los produtos eco generan cobertura mediática gratuita. Hemos visto clientes aparecer en Vogue, GQ y blogs de sostenibilidad puramente por la historia de su material. Intenta conseguir esa prensa con una armação de acetato estándar.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🔄 Mayor Compra Recurrente</h3>
                <p className="text-sm text-gray-600">Las marcas sostenibles ven un 20-30% mais de retención de clientes. Cuando alguien compra tu misión eco, vuelve por la siguiente coleção. Se convierten en embajadores, no solo en clientes.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏪 Preferencia de Compradores Retail</h3>
                <p className="text-sm text-gray-600">Grandes retailers (Nordstrom, REI, Whole Foods Market, boutiques independientes) buscan activamente marcas de óculos sostenibles para tener en stock. Una línea eco abre puertas que los produtos convencionales no pueden.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌍 Vientos Regulatorios a Favor</h3>
                <p className="text-sm text-gray-600">Las regulaciones de la UE sobre plásticos de un solo uso y responsabilidad extendida del productor se están endureciendo. Las marcas que cambian a materiales sostenibles ahora van por delante en lugar de correr para cumplir después.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opciones de Personalização Eco</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Ser verde no significa ser genérico. Así es como hacemos que tus óculos eco sean distintivamente tuyas.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Grabado láser</strong> en hastes de bambú — se ve increíble con el veteado natural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Logo en relieve</strong> en armações de bio-acetato o rPET — prensado, sin tinta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Impresión en esquina de lente</strong> — branding sutil que no compromete el mensaje eco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Etiqueta colgante con QR</strong> — enlace a tu página de historia de sostenibilidad</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Colores y Acabados</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>rPET:</strong> Azul océano mate, coral, negro carbón, oliva — o coincidencia Pantone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bio-acetato:</strong> Gama completa de colores — carey, cristal, mármol, degradado, colores sólidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bambú:</strong> Natural, carbonizado (más oscuro), o teñido en tonos tierra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Aluminio reciclado:</strong> Cualquier color anodizado — mate o brillante</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Embalagem Eco</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Estuche rígido de fibra de bambú</strong> — biodegradable, con tu logo en relieve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Caja de cartón reciclado</strong> — impresión con tinta de soja, papel FSC, sin plástico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bolsa de algodón orgánico</strong> — sirve também como paño de limpieza, certificación GOTS disponível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bolsa de almidón de maíz</strong> — envoltorio interior compostable reemplaza el plástico estándar</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">¿Quién Compra Óculos de Sol Ecológicos?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              El mercado de óculos sostenibles ha explotado. Esto es para quién estamos produciendo ahora mismo.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🌱 Marcas DTC Sostenibles</h3>
                <p className="text-gray-300 text-sm">El segmento de mayor crecimiento. Son marcas nativas de Shopify construidas alrededor de una misión de sostenibilidad. Necesitan materiales con declaraciones eco verificables, buena fotografía y una historia que aguante el escrutinio. Bio-acetato y plástico oceánico son sus favoritos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏄 Marcas Outdoor y Surf</h3>
                <p className="text-gray-300 text-sm">Las marcas del sector outdoor están bajo intensa presión para ser sostenibles. Las óculos de plástico oceánico encajan naturalmente — la historia del material conecta directamente con el estilo de vida de su cliente. Varios de nossos clientes de marcas de surf han pasado al 100% eco.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏨 Hoteles y Resorts Eco</h3>
                <p className="text-gray-300 text-sm">Marcas de hospitalidad sostenible ofreciendo óculos eco como amenidades para huéspedes o artículos de tienda de regalos. Armações con hastes de bambú con el logo del resort grabado a láser son las más vendidas aquí. Los huéspedes las guardan como recuerdo.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🎁 Programas Corporativos ESG</h3>
                <p className="text-gray-300 text-sm">Empresas cumpliendo objetivos ESG (Medioambiental, Social, Gobernanza) cambiando regalos corporativos a produtos sostenibles. Óculos eco con el logo de la empresa son un éxito en conferencias y eventos de equipo — mucho mejor que otro bolígrafo con marca.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">👶 Marcas de Óculos Infantiles</h3>
                <p className="text-gray-300 text-sm">Los padres que compran para crianças son hiper-conscientes sobre los materiales — tanto por seguridad como por razones medioambientales. Las armações de nylon bio-basado y bambú cumplen ambos requisitos. Este segmento crece mais del 40% año tras año para nosotros.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🛒 Marcas Mainstream Siendo Verdes</h3>
                <p className="text-gray-300 text-sm">Marcas de óculos establecidas añadiendo una sub-línea eco. Ya tienen la distribución — solo necesitan un producto sostenible creíble. El bio-acetato es el cambio más fácil porque encaja directamente en su proceso de produção de acetato existente.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes sobre Óculos Ecológicos</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {ecoFaqs.map((faq, index) => (
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
              <Link href="/pt/produtos/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Wayfarer</h3>
                <p className="text-gray-600 text-sm">Nosso wayfarer clásico está disponível en bio-acetato. Misma forma icónica, mismo acabado pulido a mano — ahora con 60% de contenido reciclado certificado.</p>
              </Link>
              <Link href="/pt/produtos/aviador" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Aviador</h3>
                <p className="text-gray-600 text-sm">Aviadores de metal disponívels en aluminio reciclado. Mismo tacto ligero, mismos acabados anodizados, con un 95% menos de energía en produção de material.</p>
              </Link>
              <Link href="/pt/certificacoes" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Nossas Certificações</h3>
                <p className="text-gray-600 text-sm">CE, FDA, ISO 9001, ISO 14001, ISCC PLUS, FSC — consulta la lista completa de certificacoes y documentación de conformidade que proporcionamos.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Ser Sostenible?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Cuéntanos sobre tu marca, tu cliente objetivo y tus metas de sostenibilidad. Te recomendaremos los materiales eco adecuados y te enviaremos amostras en una semana. Sin compromiso, sin presión — solo consejos honestos de alguien que ha ayudado a mais de 100 marcas a hacer esta transición.
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
