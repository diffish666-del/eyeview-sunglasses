import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gafas de Sol para Niños al Por Mayor | Fabricante de Gafas Infantiles con Protección UV - EyeView',
  description: 'Fabricante de gafas de sol para niños al por mayor. Gafas infantiles seguras, libres de BPA, certificadas CPSIA y EN71 para edades 0-12. Armazones flexibles irrompibles, protección UV400. MOQ 100 piezas.',
  keywords: 'gafas de sol niños al por mayor, fabricante gafas infantiles, gafas bebé al por mayor, gafas de sol para niños pequeños, gafas juveniles a granel, gafas protección UV niños, gafas libres de BPA niños, gafas certificadas CPSIA',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/productos/ninos/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/kids/',
      'es': 'https://eyeviewsunglasses.com/es/productos/ninos/',
    },
  },
}

const products = [
  {
    name: 'Gafas de Sol para Bebés (0-3 años)',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$5.50 - $8.50',
    moq: '100 pzas',
    description: 'Seamos honestos — los bebés mastican todo. Por eso estos armazones están hechos de silicona de grado alimenticio, el mismo material de las tetinas de biberón. Literalmente podrías ponértelos en la boca (tu bebé lo hará). Completamente libres de BPA, ftalatos, y lo suficientemente suaves para no pinchar ni pellizcar. La correa ajustable los mantiene en su lugar incluso cuando tu pequeño está decidido a quitárselos. Lo cual hará. Repetidamente.',
  },
  {
    name: 'Gafas de Sol para Niños Pequeños (3-5 años)',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$6.00 - $9.00',
    moq: '100 pzas',
    description: '¿Sabes qué les pasa a las gafas de sol de niños pequeños? Las pisan, se sientan sobre ellas, las lanzan por la habitación y las entierran en el arenero. Por eso las fabricamos con TPE — un material flexible que se dobla, tuerce y aguanta todo tipo de abuso, y luego vuelve a su forma original. Disponibles en más de 15 colores porque aparentemente todo niño de 4 años tiene una opinión muy firme sobre su color favorito. (Generalmente es rosa. O verde dinosaurio.)',
  },
  {
    name: 'Gafas de Sol Deportivas para Niños (6-9 años)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pzas',
    description: 'Para el niño que siempre está afuera — práctica de fútbol, clases de natación, paseos en bicicleta por el vecindario. Son versiones reducidas de nuestros armazones deportivos para adultos con armazones flexibles de TR90 y cobertura envolvente. Opción polarizada disponible para viajes a la playa y días de nieve. Una liga deportiva juvenil en California ordenó 800 pares el año pasado para su programa de verano. Su comentario: "Por fin, gafas deportivas que realmente le quedan a los niños."',
  },
  {
    name: 'Gafas de Moda Ojo de Gato para Niñas (6-10 años)',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pzas',
    description: 'Mini ojos de gato para niñas que quieren verse como Mamá (o su YouTuber favorita). Acentos brillantes, colores pastel, decoraciones de corazón en las patillas — todo lo que hace que una niña de 7 años grite "¡ME ENCANTAN!" Los mismos estándares de seguridad que todos nuestros armazones infantiles, solo que con mucha más purpurina. Son verdaderas estrellas en boutiques infantiles y tiendas de resorts de playa.',
  },
  {
    name: 'Aviador para Niños (8-12 años)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.00',
    moq: '100 pzas',
    description: 'Para el preadolescente que cree que es demasiado cool para gafas de sol "de niño chiquito." Estos aviadores se ven de adulto pero están dimensionados para rostros jóvenes (49-52mm de ancho de lente). Armazón metálico ligero con bisagras de resorte que se adaptan a diferentes tamaños de cabeza conforme los niños crecen. Lentes de policarbonato resistentes al impacto para skateboarding, ciclismo, y lo que sea que los niños de 10 años hagan. (Spoiler: generalmente involucra saltar desde cosas.)',
  },
  {
    name: 'Gafas Polarizadas Deportivas para Niños',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pzas',
    description: 'Para los atletas junior que se toman su deporte en serio. Las lentes polarizadas TAC cortan el resplandor del agua, la nieve y el pavimento — una diferencia real para niños en natación, esquí o pescando con papá. Estos son nuestros armazones premium para niños y los que los padres piden específicamente cuando quieren la mejor protección que el dinero puede comprar. Una escuela de natación en Sídney los usa exclusivamente para sus clases al aire libre.',
  },
]

export default function KidsPageEs() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/es" className="hover:text-primary-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/es/productos" className="hover:text-primary-600">Productos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Gafas de Sol para Niños</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gafas de Sol para Niños al Por Mayor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los padres no se andan con juegos cuando se trata de los ojos de sus hijos. Nosotros tampoco.
            Cada par es libre de BPA, certificado UV400, y cumple con los estándares de seguridad
            CPSIA, ASTM F963 y EN71. Armazones flexibles que sobreviven al caos infantil. Protección UV
            real — no solo plástico tintado. Edades 0-12, desde $5.50.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop"
            alt="Gafas de Sol para Niños al Por Mayor - Protección UV Segura para Niños de 0-12 Años"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Algo Que la Mayoría de los Padres No Saben</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Los ojos de un niño dejan pasar mucha más radiación UV que los ojos de un adulto. Mucha más. Antes
              de los 10 años, el cristalino de un niño transmite más del 75% de los rayos UV-A y el 70% de los
              rayos UV-B directamente a la retina. ¿El cristalino de un adulto? Solo alrededor del 10%. Eso
              significa que los ojos de tu hijo absorben aproximadamente 6-7 veces más daño UV en el mismo día
              soleado. Y aquí viene la parte preocupante — la <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">OMS dice que hasta el 80%</a> de la exposición
              UV de toda la vida de una persona ocurre antes de los 18 años.
            </p>
            <p>
              Entonces, cuando un padre compra esas lindas gafas de sol de novedad por $2 en una tienda barata,
              esas lentes oscuras tintadas en realidad podrían estar empeorando las cosas. Las lentes oscuras
              sin protección UV real hacen que las pupilas se dilaten, dejando entrar <em>más</em> radiación
              dañina que si no llevaran gafas de sol. Es un problema. Uno real.
            </p>
            <p>
              Exactamente por eso nos tomamos las gafas de sol para niños tan en serio. Cada par que fabricamos
              es probado en laboratorio para cumplir con UV400 — lo que significa que bloquean el 99.9% de la
              radiación UV hasta 400 nanómetros. Proporcionamos los informes de prueba. Tenemos las
              certificaciones. Cuando un padre toma un par de nuestras gafas de sol para niños, puede confiar
              en que los ojos de su hijo están realmente protegidos. No solo sombreados. Protegidos.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop" alt="Gafas de Sol para Niños al Por Mayor" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">La Colección Infantil</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} al Por Mayor - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Materiales seguros libres de BPA</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Armazón flexible irrompible</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>100% protección UV400</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/es/contacto" className="btn-primary w-full block text-center">Solicitar Cotización</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Certifications */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certificaciones en las que los Padres Pueden Confiar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">CPSIA</h3>
              <p className="text-sm text-gray-600">La más importante para el mercado de EE.UU. Plomo por debajo de 100ppm, cero ftalatos. Si vendes productos infantiles en América, <a href="https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">esto no es opcional — es la ley</a>. Lo tenemos cubierto.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">ASTM F963</h3>
              <p className="text-sm text-gray-600">El estándar de seguridad de juguetes de EE.UU. Pruebas de riesgos mecánicos (bordes afilados, piezas pequeñas), inflamabilidad y químicos tóxicos. Nuestros armazones pasan las tres secciones.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold mb-2">EN71</h3>
              <p className="text-sm text-gray-600">El estándar europeo de seguridad de juguetes. Tres partes que cubren seguridad mecánica, inflamabilidad y migración de elementos tóxicos. Requerido para vender en la UE.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-2">CE & FDA</h3>
              <p className="text-sm text-gray-600">CE para Europa, FDA para el mercado óptico de EE.UU. Ambos verifican que nuestras afirmaciones de protección UV son reales — no solo etiquetas de marketing en armazones baratos.</p>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">¿De Qué Están Hechas? (Los Padres Siempre Preguntan)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🍼 Silicona de Grado Alimenticio (0-3 Años)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El mismo material de las tetinas de biberón y los mordedores. Si es seguro para
                ir a la boca de un bebé — y va a ir a su boca, garantizado — es seguro para
                las gafas de sol. Infinitamente doblables, imposiblemente suaves, libres de BPA,
                ftalatos, PVC y látex. No irritan la piel sensible del bebé. Diseñamos estas
                para el padre que se preocupa por todo. (Lo entendemos. Nosotros también somos padres.)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔄 Armazones Flexibles de TPE (3-8 Años)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El TPE (Elastómero Termoplástico) es el equivalente en materiales a &quot;intenta
                romperme, te reto.&quot; Dóblalo. Tuércelo. Siéntate encima. Tíralo desde un
                cochecito en movimiento. Vuelve a su forma original. Los hemos probado para
                sobrevivir caídas desde 1.5 metros (aproximadamente la altura de una mesa) y
                más de 500 ciclos de flexión. Porque los niños pequeños encontrarán formas de
                ponerlos a prueba que ningún ingeniero jamás imaginó.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏃 Nylon TR90 (8-12 Años)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para los niños mayores que practican deportes, andan en bicicleta y generalmente
                son rudos con todo lo que poseen. El TR90 es un 35% más ligero que el plástico
                regular, se flexiona sin romperse, y soporta temperaturas de -40°C a 120°C (así
                que sí, sobrevive al ser olvidado en un auto caliente). Hipoalergénico también —
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
                  <th className="p-4 text-left font-semibold">Puente</th>
                  <th className="p-4 text-left font-semibold">Patilla</th>
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
          <h2 className="text-3xl font-bold text-center mb-8">Hechas para Niños Reales, No para Niños Cuidadosos</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🛡️" title="Cero Químicos Dañinos" description="Libres de BPA. Libres de ftalatos. Libres de PVC. Libres de plomo. Probamos todo lo que preocupa a los padres." />
            <FeatureCard icon="🔄" title="Intenta Romperlas" description="Dóblalas. Tuércelas. Písalas. Vuelven a su forma. Retamos a tu niño pequeño a destruirlas." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Probadas en laboratorio, no solo declaradas en la etiqueta. Proporcionamos informes de prueba. Los hijos de tus clientes están genuinamente protegidos." />
            <FeatureCard icon="💪" title="Lentes Irrompibles" description="Lentes de policarbonato que no se rompen con el impacto. Porque los niños se caen. Mucho." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Productos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/es/productos/deportivo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Gafas Deportivas</h3>
              <p className="text-sm text-gray-600">Armazones deportivos para adultos — ¡padres e hijos pueden combinar!</p>
            </Link>
            <Link href="/es/productos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Opciones Polarizadas</h3>
              <p className="text-sm text-gray-600">Protección premium contra el resplandor para playa y nieve</p>
            </Link>
            <Link href="/es/productos/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Gafas de Luz Azul para Niños</h3>
              <p className="text-sm text-gray-600">Protección de pantalla para tabletas y clases en línea</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas de Padres (Las Recibimos a Diario)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="¿A qué edad es demasiado pronto para las gafas de sol?"
              answer="La Academia Americana de Oftalmología dice que a los 6 meses. Antes de eso, mantén a los bebés en la sombra con sombreros y toldos de cochecito. Pero una vez que tienen 6 meses y pasan tiempo al aire libre, sus ojos necesitan protección UV. Sabemos que suena temprano — pero recuerda, sus ojitos dejan pasar 6-7 veces más UV que los tuyos. Cuanto antes empieces, mejor."
            />
            <FaqItem
              question="¿Son realmente protectoras o solo bonitas?"
              answer="¡Las dos cosas! Pero la protección va primero. Cada par bloquea el 99.9% de la radiación UV hasta 400 nanómetros — verificado por pruebas de laboratorio independientes. Te enviamos los informes de prueba si los quieres. Cuidado con las gafas de sol baratas para niños que son solo plástico oscuro tintado sin filtro UV. Esas en realidad empeoran las cosas al dilatar las pupilas y dejar entrar más rayos dañinos. Nuestras gafas son bonitas Y seguras."
            />
            <FaqItem
              question="Mi hijo destruye todo. ¿Sobrevivirán estas?"
              answer="Literalmente las diseñamos para eso. ¿Los armazones de silicona para bebés? Infinitamente doblables. ¿Los armazones de TPE para niños pequeños? Los probamos para sobrevivir más de 500 ciclos de flexión y caídas desde 1.5 metros. ¿Los armazones de TR90 para niños mayores? Dóblalos 90 grados — vuelven a su posición. No podemos prometer que sean 100% indestructibles (los niños son creativos), pero son los armazones más resistentes que sabemos hacer."
            />
            <FaqItem
              question="¿Qué certificaciones tienen? Necesito saberlo para mi tienda."
              answer="Todo lo que necesitas: CPSIA (obligatorio para productos infantiles en EE.UU. — plomo bajo 100ppm, cero ftalatos), ASTM F963 (seguridad de juguetes de EE.UU.), EN71 (seguridad de juguetes de la UE), marcado CE, y estándares ópticos FDA. Proporcionamos documentación completa de certificación con cada pedido al por mayor. Si aduanas hace preguntas, tendrás el papeleo listo."
            />
            <FaqItem
              question="¿Puedo personalizarlas con nuestra marca o personajes de caricatura?"
              answer="Totalmente. Colores personalizados (más de 20 estándar más coincidencia Pantone), diseños de personajes en las patillas, tu logotipo de marca, armazones con purpurina, patillas que brillan en la oscuridad — lo que quieras. MOQ para diseños personalizados es de 300 piezas por estilo. Hemos hecho colaboraciones de personajes con licencia, diseños de mascotas escolares, e incluso sets combinados padre-hijo. Solo envíanos tu idea y te haremos un mock-up."
            />
            <FaqItem
              question="¿Las gafas de sol para bebés vienen con correas?"
              answer="Sí — correas de neopreno ajustables desmontables, ajustables de 14cm a 18cm. Suaves con la piel del bebé, lo suficientemente seguras para mantenerse en un bebé inquieto. Para armazones de niños pequeños (3-5 años), ofrecemos accesorios de correa opcionales que se enganchan y desenganchan. La mayoría de los padres usan la correa hasta los 3-4 años, luego cambian a patillas regulares una vez que el niño es lo suficientemente grande para mantenerlas puestas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Protege los Ojitos. Gana la Confianza de los Padres.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiques infantiles, jugueterías, consultorios pediátricos, campamentos de verano, resorts
            de playa, tiendas de útiles escolares — nuestras gafas de sol para niños se venden en todos
            los lugares donde compran los padres. Documentación completa de seguridad incluida. Muestras
            gratuitas disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/contacto" className="btn-primary">Obtener Catálogo de Colección Infantil</Link>
            <Link href="/es/productos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos los Productos</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://eyeviewglasses.com/es" },
          { "@type": "ListItem", "position": 2, "name": "Productos", "item": "https://eyeviewglasses.com/es/productos" },
          { "@type": "ListItem", "position": 3, "name": "Gafas de Sol para Niños", "item": "https://eyeviewglasses.com/es/productos/ninos" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿A qué edad es demasiado pronto para las gafas de sol?",
            "acceptedAnswer": { "@type": "Answer", "text": "La Academia Americana de Oftalmología recomienda gafas de sol con protección UV a partir de los 6 meses de edad. Los ojos de los niños transmiten 6-7 veces más radiación UV que los ojos de los adultos." }
          },
          {
            "@type": "Question",
            "name": "¿Las gafas de sol para niños son realmente protectoras o solo decorativas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Cada par bloquea el 99.9% de la radiación UV hasta 400nm, verificado por pruebas de laboratorio independientes. Proporcionamos informes de prueba. Cuidado con las gafas de sol de novedad baratas sin protección UV real." }
          },
          {
            "@type": "Question",
            "name": "¿Estas gafas de sol sobrevivirán a mi hijo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Diseñadas para ello. Los armazones de silicona para bebés son infinitamente doblables. Los armazones de TPE para niños pequeños sobreviven más de 500 ciclos de flexión y caídas de 1.5m. Los armazones de TR90 para niños mayores se doblan 90° sin romperse." }
          },
          {
            "@type": "Question",
            "name": "¿Qué certificaciones de seguridad tienen estas gafas de sol para niños?",
            "acceptedAnswer": { "@type": "Answer", "text": "CPSIA (plomo bajo 100ppm, cero ftalatos), ASTM F963, EN71, marcado CE, y estándares ópticos FDA. Documentación completa de certificación proporcionada con cada pedido al por mayor." }
          },
          {
            "@type": "Question",
            "name": "¿Puedo personalizar las gafas de sol para niños con logotipos de marca o personajes?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — colores personalizados, diseños de personajes, logotipos de marca, armazones con purpurina, patillas que brillan en la oscuridad. MOQ para diseños personalizados es de 300 piezas por estilo." }
          },
          {
            "@type": "Question",
            "name": "¿Las gafas de sol para bebés vienen con correas para la cabeza?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí — correas de neopreno ajustables desmontables (14-18cm). Los armazones para niños pequeños tienen correas opcionales con clip. La mayoría de los padres usan correas hasta los 3-4 años." }
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
