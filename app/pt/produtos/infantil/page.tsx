import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos de Sol para Crianças no Atacado | Fabricante de Óculos Infantiles con Proteção UV - EyeView',
  description: 'Fabricante de óculos de sol para crianças no atacado. Óculos infantiles seguras, libres de BPA, certificadas CPSIA y EN71 para edades 0-12. Armações flexibles irrompibles, proteção UV400. MOQ 100 peças.',
  keywords: 'óculos de sol crianças no atacado, fabricante óculos infantiles, óculos bebé no atacado, óculos de sol para crianças pequeños, óculos juveniles a granel, óculos proteção UV crianças, óculos libres de BPA crianças, óculos certificadas CPSIA',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/infantil/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/kids/',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/infantil/',
    },
  },
}

const products = [
  {
    name: 'Óculos de Sol para Bebés (0-3 anos)',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$5.50 - $8.50',
    moq: '100 pçs',
    description: 'Seamos honestos — los bebés mastican todo. Por eso estos armações están hechos de silicona de grado alimenticio, el mismo material de las tetinas de biberón. Literalmente podrías ponértelos en la boca (tu bebé lo hará). Completamente libres de BPA, ftalatos, y lo suficientemente suaves para no pinchar ni pellizcar. La correa ajustable los mantiene en su lugar incluso cuando tu pequeño está decidido a quitárselos. Lo cual hará. Repetidamente.',
  },
  {
    name: 'Óculos de Sol para Crianças Pequeños (3-5 anos)',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$6.00 - $9.00',
    moq: '100 pçs',
    description: '¿Sabes qué les pasa a las óculos de sol de crianças pequeños? Las pisan, se sientan sobre ellas, las lanzan por la habitación y las entierran en el arenero. Por eso las fabricamos con TPE — un material flexible que se dobla, tuerce y aguanta todo tipo de abuso, y luego vuelve a su forma original. Disponívels en mais de 15 colores porque aparentemente todo niño de 4 anos tiene una opinión muy firme sobre su color favorito. (Generalmente es rosa. O verde dinosaurio.)',
  },
  {
    name: 'Óculos de Sol Esportivos para Crianças (6-9 anos)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pçs',
    description: 'Para el niño que siempre está afuera — práctica de fútbol, clases de natación, paseos en bicicleta por el vecindario. Son versiones reducidas de nossos armações esportivos para adultos con armações flexibles de TR90 y cobertura envolvente. Opción polarizada disponível para viajes a la playa y dias de nieve. Una liga deportiva juvenil en California ordenó 800 pares el año pasado para su programa de verano. Su comentario: "Por fin, óculos esportivos que realmente le quedan a los crianças."',
  },
  {
    name: 'Óculos de Moda Olho de Gato para Niñas (6-10 anos)',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pçs',
    description: 'Mini ojos de gato para niñas que quieren verse como Mamá (o su YouTuber favorita). Acentos brillantes, colores pastel, decoraciones de corazón en las hastes — todo lo que hace que una niña de 7 anos grite "¡ME ENCANTAN!" Los mismos estándares de seguridad que todos nossos armações infantiles, solo que con mucha más purpurina. Son verdaderas estrellas en boutiques infantiles y tiendas de resorts de playa.',
  },
  {
    name: 'Aviador para Crianças (8-12 anos)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.00',
    moq: '100 pçs',
    description: 'Para el preadolescente que cree que es demasiado cool para óculos de sol "de niño chiquito." Estos aviadores se ven de adulto pero están dimensionados para rostros jóvenes (49-52mm de ancho de lente). Armação metálico ligero con dobradiças de resorte que se adaptan a diferentes tamanos de cabeza conforme los crianças crecen. Lentes de policarbonato resistentes al impacto para skateboarding, ciclismo, y lo que sea que los crianças de 10 anos hagan. (Spoiler: generalmente involucra saltar a partir de cosas.)',
  },
  {
    name: 'Óculos Polarizados Esportivos para Crianças',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pçs',
    description: 'Para los atletas junior que se toman su deporte en serio. Las lentes polarizados TAC cortan el resplandor del agua, la nieve y el pavimento — una diferencia real para crianças en natación, esquí o pescando con papá. Estos son nossos armações premium para crianças y los que los padres piden específicamente cuando quieren la mejor proteção que el dinero puede comprar. Una escuela de natación en Sídney los usa exclusivamente para sus clases al aire libre.',
  },
]

export default function KidsPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Sol para Crianças</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos de Sol para Crianças no Atacado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los padres no se andan con juegos cuando se trata de los ojos de sus hijos. Nosotros tampoco.
            Cada par es libre de BPA, certificado UV400, y cumple con los estándares de seguridad
            CPSIA, ASTM F963 y EN71. Armações flexibles que sobreviven al caos infantil. Proteção UV
            real — no solo plástico tintado. Edades 0-12, a partir de $5.50.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop"
            alt="Óculos de Sol para Crianças no Atacado - Proteção UV Segura para Crianças de 0-12 Anos"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Algo Que la Mayoría de los Padres No Saben</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Los ojos de un niño dejan pasar mucha más radiación UV que los ojos de un adulto. Mucha más. Antes
              de los 10 anos, el cristalino de un niño transmite mais del 75% de los rayos UV-A y el 70% de los
              rayos UV-B directamente a la retina. ¿El cristalino de un adulto? Solo alrededor del 10%. Eso
              significa que los ojos de tu hijo absorben aproximadamente 6-7 veces más daño UV en el mismo día
              soleado. Y aquí viene la parte preocupante — la <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">OMS dice que hasta el 80%</a> de la exposición
              UV de toda la vida de una persona ocurre antes de los 18 anos.
            </p>
            <p>
              Entonces, cuando un padre compra esas lindas óculos de sol de novedad por $2 en una tienda barata,
              esas lentes oscuras tintadas en realidad podrían estar empeorando las cosas. Las lentes oscuras
              sin proteção UV real hacen que las pupilas se dilaten, dejando entrar <em>más</em> radiación
              dañina que si no llevaran óculos de sol. Es un problema. Uno real.
            </p>
            <p>
              Exactamente por eso nos tomamos las óculos de sol para crianças tan en serio. Cada par que fabricamos
              es probado en laboratorio para cumplir con UV400 — lo que significa que bloquean el 99.9% de la
              radiación UV hasta 400 nanómetros. Proporcionamos los informes de prueba. Tenemos las
              certificacoes. Cuando un padre toma un par de nossas óculos de sol para crianças, puede confiar
              en que los ojos de su hijo están realmente protegidos. No solo sombreados. Protegidos.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop" alt="Óculos de Sol para Crianças no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Coleção Infantil</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} no Atacado - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Materiales seguros libres de BPA</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Armação flexible irrompible</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>100% proteção UV400</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/pt/contato" className="btn-primary w-full block text-center">Solicitar Orçamento</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Certifications */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certificações en las que los Padres Pueden Confiar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">CPSIA</h3>
              <p className="text-sm text-gray-600">La más importante para el mercado de EE.UU. Plomo por debajo de 100ppm, cero ftalatos. Si vendes produtos infantiles en América, <a href="https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">esto no es opcional — es la ley</a>. Lo tenemos cubierto.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">ASTM F963</h3>
              <p className="text-sm text-gray-600">El estándar de seguridad de juguetes de EE.UU. Pruebas de riesgos mecánicos (bordes afilados, peças pequeñas), inflamabilidad y químicos tóxicos. Nossos armações pasan las tres secciones.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold mb-2">EN71</h3>
              <p className="text-sm text-gray-600">El estándar europeo de seguridad de juguetes. Tres partes que cubren seguridad mecánica, inflamabilidad y migración de elementos tóxicos. Requerido para vender en la UE.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-2">CE & FDA</h3>
              <p className="text-sm text-gray-600">CE para Europa, FDA para el mercado óptico de EE.UU. Ambos verifican que nossas afirmaciones de proteção UV son reales — no solo etiquetas de marketing en armações baratos.</p>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">¿De Qué Están Hechas? (Los Padres Siempre Preguntan)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🍼 Silicona de Grado Alimenticio (0-3 Anos)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El mismo material de las tetinas de biberón y los mordedores. Si es seguro para
                ir a la boca de un bebé — y va a ir a su boca, garantizado — es seguro para
                las óculos de sol. Infinitamente doblables, imposiblemente suaves, libres de BPA,
                ftalatos, PVC y látex. No irritan la piel sensible del bebé. Diseñamos estas
                para el padre que se preocupa por todo. (Lo entendemos. Nosotros também somos padres.)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔄 Armações Flexibles de TPE (3-8 Anos)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El TPE (Elastómero Termoplástico) es el equivalente en materiales a &quot;intenta
                romperme, te reto.&quot; Dóblalo. Tuércelo. Siéntate encima. Tíralo a partir de un
                cochecito en movimiento. Vuelve a su forma original. Los hemos probado para
                sobrevivir caídas a partir de 1.5 metros (aproximadamente la altura de una mesa) y
                mais de 500 ciclos de flexión. Porque los crianças pequeños encontrarán formas de
                ponerlos a prueba que ningún ingeniero jamás imaginó.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏃 Nylon TR90 (8-12 Anos)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para los crianças mayores que practican deportes, andan en bicicleta y generalmente
                son rudos con todo lo que poseen. El TR90 es un 35% más ligero que el plástico
                regular, se flexiona sin romperse, y soporta temperaturas de -40°C a 120°C (así
                que sí, sobrevive al ser olvidado en un auto caliente). Hipoalergénico também —
                sin marcas rojas con comezón detrás de las orejas después de un largo día afuera.
              </p>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Guía de Tallas por Edad</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Edad</th>
                  <th className="p-4 text-left font-semibold">Ancho de Lente</th>
                  <th className="p-4 text-left font-semibold">Ponte</th>
                  <th className="p-4 text-left font-semibold">Haste</th>
                  <th className="p-4 text-left font-semibold">Material</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-semibold">Bebé (0-2)</td><td className="p-4 text-gray-600">36-40mm</td><td className="p-4 text-gray-600">10-12mm</td><td className="p-4 text-gray-600">Correa</td><td className="p-4 text-gray-600">Silicona de grado alimenticio</td></tr>
                <tr><td className="p-4 font-semibold">Niño pequeño (2-4)</td><td className="p-4 text-gray-600">40-44mm</td><td className="p-4 text-gray-600">12-14mm</td><td className="p-4 text-gray-600">105-115mm</td><td className="p-4 text-gray-600">Silicona / TPE</td></tr>
                <tr><td className="p-4 font-semibold">Niño (4-7)</td><td className="p-4 text-gray-600">44-48mm</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">115-125mm</td><td className="p-4 text-gray-600">TPE / TPEE</td></tr>
                <tr><td className="p-4 font-semibold">Junior (7-10)</td><td className="p-4 text-gray-600">48-52mm</td><td className="p-4 text-gray-600">15-17mm</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">TR90 / PC</td></tr>
                <tr><td className="p-4 font-semibold">Juvenil (10-12)</td><td className="p-4 text-gray-600">52-56mm</td><td className="p-4 text-gray-600">16-18mm</td><td className="p-4 text-gray-600">130-140mm</td><td className="p-4 text-gray-600">TR90 / Acetato</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Hechas para Crianças Reales, No para Crianças Cuidadosos</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🛡️" title="Cero Químicos Dañinos" description="Libres de BPA. Libres de ftalatos. Libres de PVC. Libres de plomo. Probamos todo lo que preocupa a los padres." />
            <FeatureCard icon="🔄" title="Intenta Romperlas" description="Dóblalas. Tuércelas. Písalas. Vuelven a su forma. Retamos a tu niño pequeño a destruirlas." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Probadas en laboratorio, no solo declaradas en la etiqueta. Proporcionamos informes de prueba. Los hijos de tus clientes están genuinamente protegidos." />
            <FeatureCard icon="💪" title="Lentes Irrompibles" description="Lentes de policarbonato que no se rompen con el impacto. Porque los crianças se caen. Mucho." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produtos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/esportivo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Óculos Esportivos</h3>
              <p className="text-sm text-gray-600">Armações esportivos para adultos — ¡padres e hijos pueden combinar!</p>
            </Link>
            <Link href="/pt/produtos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Opciones Polarizados</h3>
              <p className="text-sm text-gray-600">Proteção premium contra el resplandor para playa y nieve</p>
            </Link>
            <Link href="/pt/produtos/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Óculos de Luz Azul para Crianças</h3>
              <p className="text-sm text-gray-600">Proteção de pantalla para tabletas y clases en línea</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas de Padres (Las Recibimos a Diario)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿A qué edad es demasiado pronto para las óculos de sol?"
              answer="La Academia Americana de Oftalmología dice que a los 6 meses. Antes de eso, mantén a los bebés en la sombra con sombreros y toldos de cochecito. Pero una vez que tienen 6 meses y pasan tiempo al aire libre, sus ojos necesitan proteção UV. Sabemos que suena temprano — pero recuerda, sus ojitos dejan pasar 6-7 veces más UV que los tuyos. Cuanto antes empieces, mejor."
            />
            <FaqItem
              question="¿Son realmente protectoras o solo bonitas?"
              answer="¡Las dos cosas! Pero la proteção va primero. Cada par bloquea el 99.9% de la radiación UV hasta 400 nanómetros — verificado por pruebas de laboratorio independientes. Te enviamos los informes de prueba si los quieres. Cuidado con las óculos de sol baratas para crianças que son solo plástico oscuro tintado sin filtro UV. Esas en realidad empeoran las cosas al dilatar las pupilas y dejar entrar más rayos dañinos. Nossas óculos son bonitas Y seguras."
            />
            <FaqItem
              question="Mi hijo destruye todo. ¿Sobrevivirán estas?"
              answer="Literalmente las diseñamos para eso. ¿Los armações de silicona para bebés? Infinitamente doblables. ¿Los armações de TPE para crianças pequeños? Los probamos para sobrevivir mais de 500 ciclos de flexión y caídas a partir de 1.5 metros. ¿Los armações de TR90 para crianças mayores? Dóblalos 90 grados — vuelven a su posición. No podemos prometer que sean 100% indestructibles (los crianças son creativos), pero son los armações más resistentes que sabemos hacer."
            />
            <FaqItem
              question="¿Qué certificacoes tienen? Necesito saberlo para mi tienda."
              answer="Todo lo que necesitas: CPSIA (obligatorio para produtos infantiles en EE.UU. — plomo bajo 100ppm, cero ftalatos), ASTM F963 (seguridad de juguetes de EE.UU.), EN71 (seguridad de juguetes de la UE), marcado CE, y estándares ópticos FDA. Proporcionamos documentación completa de certificación con cada pedido no atacado. Si aduanas hace preguntas, tendrás el papeleo listo."
            />
            <FaqItem
              question="¿Puedo personalizarlas con nossa marca o personajes de caricatura?"
              answer="Totalmente. Colores personalizados (mais de 20 estándar más coincidencia Pantone), designs de personajes en las hastes, tu logotipo de marca, armações con purpurina, hastes que brillan en la oscuridad — lo que quieras. MOQ para designs personalizados es de 300 peças por estilo. Hemos hecho colaboraciones de personajes con licencia, designs de mascotas escolares, e incluso sets combinados padre-hijo. Solo envíanos tu idea y te haremos un mock-up."
            />
            <FaqItem
              question="¿Las óculos de sol para bebés vienen con correas?"
              answer="Sí — correas de neopreno ajustables desmontables, ajustables de 14cm a 18cm. Suaves con la piel del bebé, lo suficientemente seguras para mantenerse en un bebé inquieto. Para armações de crianças pequeños (3-5 anos), ofrecemos accesorios de correa opcionales que se enganchan y desenganchan. La mayoría de los padres usan la correa hasta los 3-4 anos, luego cambian a hastes regulares una vez que el niño es lo suficientemente grande para mantenerlas puestas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Protege los Ojitos. Gana la Confianza de los Padres.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiques infantiles, jugueterías, consultorios pediátricos, campamentos de verano, resorts
            de playa, tiendas de útiles escolares — nossas óculos de sol para crianças se venden en todos
            los lugares donde compran los padres. Documentación completa de seguridad incluida. Amostras
            gratuitas disponívels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Obter Catálogo de Coleção Infantil</Link>
            <Link href="/pt/produtos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos los Produtos</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://eyeviewglasses.com/pt" },
          { "@type": "ListItem", "position": 2, "name": "Produtos", "item": "https://eyeviewglasses.com/pt/produtos" },
          { "@type": "ListItem", "position": 3, "name": "Óculos de Sol para Crianças", "item": "https://eyeviewglasses.com/pt/produtos/infantil" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿A qué edad es demasiado pronto para las óculos de sol?",
            "acceptedAnswer": { "@type": "Answer", "text": "La Academia Americana de Oftalmología recomienda óculos de sol con proteção UV a partir de los 6 meses de edad. Los ojos de los crianças transmiten 6-7 veces más radiación UV que los ojos de los adultos." }
          },
          {
            "@type": "Question",
            "name": "¿Las óculos de sol para crianças son realmente protectoras o solo decorativas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Cada par bloquea el 99.9% de la radiación UV hasta 400nm, verificado por pruebas de laboratorio independientes. Proporcionamos informes de prueba. Cuidado con las óculos de sol de novedad baratas sin proteção UV real." }
          },
          {
            "@type": "Question",
            "name": "¿Estas óculos de sol sobrevivirán a mi hijo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Diseñadas para ello. Los armações de silicona para bebés son infinitamente doblables. Los armações de TPE para crianças pequeños sobreviven mais de 500 ciclos de flexión y caídas de 1.5m. Los armações de TR90 para crianças mayores se doblan 90° sin romperse." }
          },
          {
            "@type": "Question",
            "name": "¿Qué certificacoes de seguridad tienen estas óculos de sol para crianças?",
            "acceptedAnswer": { "@type": "Answer", "text": "CPSIA (plomo bajo 100ppm, cero ftalatos), ASTM F963, EN71, marcado CE, y estándares ópticos FDA. Documentación completa de certificación proporcionada con cada pedido no atacado." }
          },
          {
            "@type": "Question",
            "name": "¿Puedo personalizar las óculos de sol para crianças con logotipos de marca o personajes?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — colores personalizados, designs de personajes, logotipos de marca, armações con purpurina, hastes que brillan en la oscuridad. MOQ para designs personalizados es de 300 peças por estilo." }
          },
          {
            "@type": "Question",
            "name": "¿Las óculos de sol para bebés vienen con correas para la cabeza?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — correas de neopreno ajustables desmontables (14-18cm). Los armações para crianças pequeños tienen correas opcionales con clip. La mayoría de los padres usan correas hasta los 3-4 anos." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}
