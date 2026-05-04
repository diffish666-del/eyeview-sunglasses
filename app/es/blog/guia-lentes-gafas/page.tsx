import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tipos de Lentes para Gafas de Sol: Guía Completa 2026',
  description: 'Un dueño de fábrica desglosa materiales, colores, recubrimientos y polarización de lentes para gafas de sol. Costos reales, comparaciones honestas y consejos con 20 años de experiencia.',
  keywords: 'tipos lentes gafas de sol, lentes polarizadas, materiales lentes, CR-39 vs policarbonato, colores lentes gafas, lentes fotocromáticas, recubrimientos lentes, lentes TAC',
  alternates: {
    canonical: '/es/blog/guia-lentes-gafas',
    languages: {
      'en': '/blog/sunglasses-lens-guide',
      'es': '/es/blog/guia-lentes-gafas',
    },
  },
}

export default function GuiaLentesGafasPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Tipos de Lentes para Gafas de Sol: Guía Completa 2026",
          "datePublished": "2026-04-25",
          "dateModified": "2026-05-02",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Un dueño de fábrica desglosa materiales, colores, recubrimientos y polarización de lentes — con costos reales y comparaciones honestas.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/es/blog/guia-lentes-gafas" },
          "inLanguage": "es"
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Cuál es el mejor material de lente para gafas de sol?",
              "acceptedAnswer": { "@type": "Answer", "text": "No hay un único 'mejor' — depende del uso. El policarbonato gana en resistencia al impacto (deportes, niños). El CR-39 ofrece la óptica más nítida para moda y uso diario. El cristal es el estándar de oro para marcas premium que buscan resistencia a rayaduras y claridad perfecta. El TAC es el rey del presupuesto para gafas polarizadas. He enviado millones de cada uno." }
            },
            {
              "@type": "Question",
              "name": "¿Valen la pena los lentes polarizados?",
              "acceptedAnswer": { "@type": "Answer", "text": "¿Para conducir, pescar y deportes acuáticos? 100% sí. La reducción de deslumbramiento es como la noche y el día. ¿Para moda y uso casual? Agradable pero no esencial. La diferencia de costo al por mayor es solo $0.50-2.00 por par, pero puedes cobrar 30-60% más en retail. Así que desde la perspectiva de negocio, polarizado casi siempre vale la pena ofrecerlo." }
            },
            {
              "@type": "Question",
              "name": "¿Qué color de lente es mejor para gafas de sol?",
              "acceptedAnswer": { "@type": "Answer", "text": "El gris es la apuesta segura — reduce el brillo sin cambiar los colores. El marrón/ámbar mejora el contraste, ideal para conducir y golf. El verde da ese look clásico de Ray-Ban con color equilibrado. El amarillo es solo para poca luz. ¿Azul y espejo? Mayormente moda. Si eres dueño de marca y solo puedes elegir dos colores, ve con gris y marrón — cubren el 70% de la demanda." }
            },
            {
              "@type": "Question",
              "name": "¿Qué son los lentes fotocromáticos?",
              "acceptedAnswer": { "@type": "Answer", "text": "Se oscurecen automáticamente con la luz solar y se aclaran en interiores. Tecnología interesante, pero con advertencias: no funcionan bien detrás de parabrisas de coches (que bloquean los UV que activan la reacción), son más lentos con calor, y el efecto fotocromático se degrada después de 2-3 años. Buenos para entusiastas del aire libre que odian cambiar entre gafas normales y de sol." }
            },
            {
              "@type": "Question",
              "name": "¿Qué recubrimientos deben tener las gafas de sol?",
              "acceptedAnswer": { "@type": "Answer", "text": "UV400 es obligatorio — innegociable. El antirreflectante es un segundo cercano (elimina el molesto reflejo trasero). Después: resistente a rayaduras para durabilidad, hidrofóbico si tus clientes son aventureros, oleofóbico si odian las huellas dactilares. Un paquete completo de recubrimientos añade $0.80-2.50 por par al por mayor pero te permite cobrar $20-40 más en retail." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Tecnología</span>
            <span>25 de abril de 2026</span>
            <span>•</span>
            <span>14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tipos de Lentes para Gafas de Sol: Guía Completa 2026
          </h1>
          <p className="text-xl text-gray-600">
            He probado, roto y enviado más lentes de gafas de sol de los que puedo contar. Esto es lo que 
            20 años en la línea de producción me enseñaron sobre lo que realmente importa — y lo que es solo marketing.
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
            <li><a href="#por-que-importan" className="text-primary-600 hover:underline">Por Qué la Elección de Lentes Importa Más que la Montura</a></li>
            <li><a href="#materiales" className="text-primary-600 hover:underline">Los Cuatro Materiales de Lentes (Y Cuándo Usar Cada Uno)</a></li>
            <li><a href="#colores" className="text-primary-600 hover:underline">Colores de Lentes: Qué Hace Realmente Cada Tinte</a></li>
            <li><a href="#recubrimientos" className="text-primary-600 hover:underline">Recubrimientos: Las Mejoras Invisibles que Importan</a></li>
            <li><a href="#polarizado-vs-no" className="text-primary-600 hover:underline">Polarizado vs No Polarizado: La Historia Real</a></li>
            <li><a href="#fotocromatico" className="text-primary-600 hover:underline">Lentes Fotocromáticos: Tecnología Interesante, Limitaciones Reales</a></li>
            <li><a href="#elegir-lentes" className="text-primary-600 hover:underline">Elegir Lentes por Actividad</a></li>
            <li><a href="#para-marcas" className="text-primary-600 hover:underline">Estrategia de Lentes por Nivel de Precio</a></li>
            <li><a href="#preguntas" className="text-primary-600 hover:underline">Preguntas que Escucho Cada Semana</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Hace tres meses, un dueño de marca de Toronto me envió dos muestras de la competencia. &quot;Jacky, 
            estas se ven idénticas. Misma forma de montura, mismo color. Pero una se vende a $29 y la otra a $149. 
            ¿Qué pasa?&quot;
          </p>
          <p>
            Las sostuve ambas frente a la ventana. La de $29 tenía un ligero tono amarillento, distorsión visible 
            cerca de los bordes, y el recubrimiento ya mostraba micro-rayaduras solo por el manejo en el envío. 
            ¿La de $149? Cristalina. Cero distorsión. La limpié con el pulgar y la huella simplemente resbaló.
          </p>
          <p>
            Misma montura. Diferentes lentes. Esa es la diferencia.
          </p>
          <p>
            La mayoría de la gente dedica el 90% de su tiempo eligiendo estilos de montura y el 10% pensando en 
            los lentes. Debería ser al revés. La montura te hace ver bien. El lente te hace <em>ver</em> bien. 
            Y en este negocio, las devoluciones y las malas reseñas casi siempre se remontan a la calidad del 
            lente, no al diseño de la montura.
          </p>

          {/* Por Qué Importan los Lentes */}
          <h2 id="por-que-importan" className="text-3xl font-bold mt-16 mb-6">Por Qué la Elección de Lentes Importa Más que la Montura</h2>
          <p>
            Algo que me quita el sueño: lentes oscuros baratos sin protección UV adecuada son <strong>peores 
            que no llevar gafas de sol.</strong> La{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/ultraviolet-radiation" target="_blank" rel="noopener" className="text-primary-600 hover:underline">hoja informativa de la OMS sobre radiación UV</a>{' '}
            lo explica claramente.
          </p>
          <p>
            ¿Por qué? El tinte oscuro hace que tus pupilas se dilaten — se abren porque creen que está oscureciendo. 
            Pero si esos lentes no bloquean UV, ahora estás canalizando <em>más</em> radiación dañina hacia pupilas 
            bien abiertas. Es como abrir las ventanas durante una tormenta de arena porque te pusiste una venda 
            en los ojos.
          </p>
          <p>Contra qué protegen los lentes de calidad:</p>
          <ul>
            <li><strong>Rayos UVA (320–400nm):</strong> Los sigilosos. Penetran profundamente en tu ojo. Vinculados a cataratas y degeneración macular con años de exposición.</li>
            <li><strong>Rayos UVB (280–320nm):</strong> Los agresivos. Queman. ¿Has oído hablar de la fotoqueratitis? Es básicamente una quemadura solar en tu córnea. Nada agradable.</li>
            <li><strong>Deslumbramiento:</strong> Luz reflejada en agua, carreteras, nieve, capós de coches. No es solo molesto — es un problema de seguridad vial. Los lentes polarizados existen por algo.</li>
          </ul>
          <p>
            Para dueños de marca: la protección UV no es opcional. Es un requisito legal —{' '}
            <a href="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses" target="_blank" rel="noopener" className="text-primary-600 hover:underline">la FDA regula las gafas de sol</a>{' '}
            como productos emisores de radiación en EE.UU., y la UE requiere marcado CE. 
            Si te pillan vendiendo gafas sin certificación UV adecuada, tu envío queda confiscado en aduanas. 
            Vi cómo le pasó al cliente de un competidor en Hamburgo. €40.000 en producto, confiscado. No dejes 
            que te pase a ti.
          </p>

          {/* Materiales de Lentes */}
          <h2 id="materiales" className="text-3xl font-bold mt-16 mb-6">Los Cuatro Materiales de Lentes (Y Cuándo Usar Cada Uno)</h2>
          <p>
            Cuatro materiales dominan el mundo de las gafas de sol. Cada uno tiene su punto fuerte, y cada uno 
            tiene cosas en las que es terrible. He trabajado con todos durante dos décadas. Aquí va la versión 
            sin filtro.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Policarbonato — El Tipo Duro</h3>
          <p>
            Desarrollado originalmente para cúpulas de aviones de combate y viseras de cascos de astronautas. 
            Eso debería decirte algo sobre su resistencia al impacto. Una vez vi a un trabajador de fábrica pisar 
            accidentalmente un lente de policarbonato. Se flexionó. No se rompió. Intenta eso con cristal.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">En Lo que Destaca</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>10 veces más resistente al impacto que CR-39 o cristal</li>
                <li>Ligero — gravedad específica 1,20</li>
                <li>Protección UV incorporada (no necesita recubrimiento extra)</li>
                <li>No se rompe en tus ojos si algo lo golpea</li>
                <li>Delgado incluso en graduaciones fuertes</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Donde Falla</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>La claridad óptica no es tan nítida como CR-39 o cristal</li>
                <li>Se raya más fácil — necesita recubrimiento duro</li>
                <li>Ligera aberración cromática en los bordes</li>
                <li>Más caro que TAC</li>
              </ul>
            </div>
          </div>
          <p><strong>Quién debería usarlo:</strong> Marcas deportivas, gafas infantiles, gafas de seguridad, cualquier cosa activa. Si tu cliente puede dejar caer, sentarse sobre o lanzar sus gafas, policarbonato.</p>
          <p><strong>Costo al por mayor del lente:</strong> $1.50–$4.00 por par.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">CR-39 — El Todoterreno</h3>
          <p>
            El CR-39 ha sido el caballo de batalla de la industria óptica desde 1947. El nombre significa 
            &quot;Columbia Resin #39&quot; — fue literalmente la fórmula número 39 que probaron. Menos mal que 
            no pararon en la #38. 
            (<a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 hover:underline">La historia es fascinante</a> si te interesa la ciencia de materiales.)
          </p>
          <p>
            Este es mi favorito personal para gafas de moda. La claridad óptica es notablemente mejor que el 
            policarbonato — pon un lente CR-39 y uno de policarbonato lado a lado, mira a través de ellos a un 
            texto fino, y verás la diferencia inmediatamente. Los colores son más fieles, los bordes más nítidos.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">En Lo que Destaca</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Excelente claridad óptica (número Abbe: 58 — técnico pero importa)</li>
                <li>Mejor resistencia a rayaduras que policarbonato</li>
                <li>Acepta tintado de forma preciosa — cualquier color, cualquier degradado</li>
                <li>Suficientemente ligero para uso todo el día</li>
                <li>Buena relación calidad-precio</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Donde Falla</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Puede romperse con impacto fuerte (no para deportes)</li>
                <li>La protección UV necesita añadirse como recubrimiento</li>
                <li>Más grueso en graduaciones altas</li>
                <li>No tan &quot;fino&quot; como el policarbonato para moda</li>
              </ul>
            </div>
          </div>
          <p><strong>Quién debería usarlo:</strong> Marcas de moda, uso diario, gafas de sol graduadas, cualquiera que apunte a mercados de gama media a premium. Es lo que recomiendo al 60% de nuestros clientes de moda.</p>
          <p><strong>Costo al por mayor del lente:</strong> $1.00–$3.50 por par.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Cristal — El Viejo Rey</h3>
          <p>
            Hay una razón por la que Ray-Ban usó cristal exclusivamente durante décadas. Nada lo supera en pureza 
            óptica. Cuando sostengo un lente de cristal de calidad y miro a través de él, es como mirar a través 
            de nada. La claridad es así de buena.
          </p>
          <p>
            Pero el cristal es pesado. Y se rompe. Tuve un cliente en 2019 que insistió en lentes de cristal para 
            su línea premium. Producto precioso. Luego tuvo un susto de responsabilidad cuando el lente de un 
            cliente se agrietó durante un partido de voley playa. Cambió a CR-39 la siguiente temporada.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">En Lo que Destaca</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>La mejor claridad óptica que el dinero puede comprar (Abbe: 59+)</li>
                <li>Resistencia a rayaduras que se ríe de llaves y monedas</li>
                <li>No se deforma, distorsiona ni degrada con el tiempo</li>
                <li>Sensación premium — sientes la calidad en la mano</li>
                <li>Resistencia química (no reacciona al protector solar ni al sudor)</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Donde Falla</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Pesado. Notablemente pesado. (Gravedad específica: 2,54)</li>
                <li>Puede romperse — preocupación de seguridad para uso activo</li>
                <li>Más caro de producir y enviar</li>
                <li>Compatibilidad limitada con monturas (lente pesado necesita montura robusta)</li>
                <li>No apto para niños, deportes ni aplicaciones de seguridad</li>
              </ul>
            </div>
          </div>
          <p><strong>Quién debería usarlo:</strong> Marcas de lujo, líneas de moda premium, gafas para conducir, cualquiera que venda a $100+ en retail y quiera &quot;la mejor óptica&quot; como argumento de venta.</p>
          <p><strong>Costo al por mayor del lente:</strong> $3.00–$8.00+ por par.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">TAC — El Campeón del Presupuesto</h3>
          <p>
            TAC (Celulosa de Triacetato) es el caballo de batalla del mercado de gafas polarizadas asequibles. 
            Si alguna vez compraste gafas polarizadas por menos de $30, casi seguro tenían lentes TAC. Es un 
            sándwich — una película polarizante prensada entre capas de acetato de celulosa.
          </p>
          <p>
            Seré honesto: TAC no va a ganar premios por calidad óptica o durabilidad. Pero hace una cosa muy bien: 
            hace que las gafas polarizadas sean accesibles. Y para una marca que vende a $15–$40 en retail, eso 
            es exactamente lo que importa.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">En Lo que Destaca</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>La opción de lente polarizado más barata — punto</li>
                <li>El material de lente más ligero del mercado</li>
                <li>Buena eficiencia de polarización (bloquea 99%+ del deslumbramiento)</li>
                <li>Protección UV400 de serie</li>
                <li>Disponible en todos los colores bajo el sol</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Donde Falla</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>La claridad óptica es... aceptable. No excelente.</li>
                <li>Se raya con solo mirarlo</li>
                <li>Puede deformarse en un salpicadero caliente</li>
                <li>La capa de polarización puede delaminarse en 1-2 años</li>
                <li>No apto para uso con graduación</li>
              </ul>
            </div>
          </div>
          <p><strong>Quién debería usarlo:</strong> Marcas económicas, gafas promocionales, líneas de polarizadas de entrada, productos de gasolinera y tiendas de souvenirs. Sin desprecio — hay un mercado enorme para gafas polarizadas asequibles.</p>
          <p><strong>Costo al por mayor del lente:</strong> $0.50–$2.00 por par. Sí, leíste bien.</p>

          {/* Tabla Comparativa de Materiales */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Propiedad</th>
                  <th className="px-4 py-3 text-left">Policarbonato</th>
                  <th className="px-4 py-3 text-left">CR-39</th>
                  <th className="px-4 py-3 text-left">Cristal</th>
                  <th className="px-4 py-3 text-left">TAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Claridad Óptica</td><td className="px-4 py-3">Buena</td><td className="px-4 py-3">Excelente</td><td className="px-4 py-3">La Mejor</td><td className="px-4 py-3">Aceptable</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Resistencia al Impacto</td><td className="px-4 py-3">La Mejor</td><td className="px-4 py-3">Aceptable</td><td className="px-4 py-3">Pobre</td><td className="px-4 py-3">Aceptable</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Resistencia a Rayaduras</td><td className="px-4 py-3">Aceptable</td><td className="px-4 py-3">Buena</td><td className="px-4 py-3">La Mejor</td><td className="px-4 py-3">Pobre</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Peso</td><td className="px-4 py-3">Ligero</td><td className="px-4 py-3">Ligero</td><td className="px-4 py-3">Pesado</td><td className="px-4 py-3">El Más Ligero</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Protección UV</td><td className="px-4 py-3">Incorporada</td><td className="px-4 py-3">Añadida</td><td className="px-4 py-3">Añadida</td><td className="px-4 py-3">Incorporada</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Costo</td><td className="px-4 py-3">$$</td><td className="px-4 py-3">$$</td><td className="px-4 py-3">$$$</td><td className="px-4 py-3">$</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Mi Elección Para</td><td className="px-4 py-3">Deporte</td><td className="px-4 py-3">Moda</td><td className="px-4 py-3">Lujo</td><td className="px-4 py-3">Polarizado económico</td></tr>
              </tbody>
            </table>
          </div>

          {/* Colores de Lentes */}
          <h2 id="colores" className="text-3xl font-bold mt-16 mb-6">Colores de Lentes: Qué Hace Realmente Cada Tinte</h2>
          <p>
            La mayoría de la gente elige el color de lente según lo que queda mejor. Eso está bien para marcas 
            de moda. Pero si estás construyendo una línea deportiva o de rendimiento, o si simplemente quieres 
            dar a tus clientes consejos genuinamente útiles, esto es lo que cada color realmente le hace a la luz.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                <h3 className="font-bold text-lg">Gris</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                La Suiza de los colores de lente — neutral, fiable, no ofende a nadie. Reduce el brillo uniformemente 
                en todo el espectro sin alterar los colores. Lo que ves a través del gris es lo que verías sin gafas, 
                solo más oscuro.
              </p>
              <p className="text-sm"><strong>Úsalo para:</strong> Conducir, uso diario, cualquier cosa</p>
              <p className="text-sm"><strong>Mi opinión:</strong> Si solo puedes tener un color en stock, que sea gris. Supera a todos los demás 3 a 1 en nuestros datos de fábrica.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-700"></div>
                <h3 className="font-bold text-lg">Marrón / Ámbar</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Filtra la luz azul, lo que mejora el contraste y la percepción de profundidad. Las cosas se ven 
                &quot;más cálidas&quot; y los bordes resaltan más. Los golfistas los adoran porque hacen que la 
                pelota destaque contra el césped verde.
              </p>
              <p className="text-sm"><strong>Úsalo para:</strong> Conducir, golf, pesca, senderismo</p>
              <p className="text-sm"><strong>Mi opinión:</strong> Segundo más vendido. Combina gris + marrón y cubres el 70% de la demanda.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-700"></div>
                <h3 className="font-bold text-lg">Verde</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Piensa en Ray-Ban G-15. Mejora ligeramente el contraste manteniendo los colores naturales. Un buen 
                punto medio entre la neutralidad del gris y la calidez del marrón. Tiene un aire clásico, vintage, 
                que a ciertos grupos demográficos les encanta.
              </p>
              <p className="text-sm"><strong>Úsalo para:</strong> Exteriores en general, golf, tenis</p>
              <p className="text-sm"><strong>Mi opinión:</strong> Sólido #3. Especialmente popular en el grupo de 35-55 años. Lo clásico nunca muere.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                <h3 className="font-bold text-lg">Amarillo / Naranja</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                El especialista en poca luz. Mejora drásticamente el contraste en condiciones nubladas, con niebla 
                o al amanecer/atardecer. No es lo suficientemente oscuro para sol intenso. Tiradores y pilotos han 
                usado lentes amarillos durante décadas para detectar objetivos contra cielos grises.
              </p>
              <p className="text-sm"><strong>Úsalo para:</strong> Días nublados, amanecer/atardecer, tiro, esquí</p>
              <p className="text-sm"><strong>Mi opinión:</strong> Nicho pero con base de clientes leal. Ideal para líneas deportivas específicas.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <h3 className="font-bold text-lg">Azul</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Seamos realistas — azul es 90% moda, 10% función. Reduce algo de deslumbramiento y mejora 
                ligeramente los tonos cálidos, pero la gente compra lentes azules porque quedan genial. Y esa 
                es una razón perfectamente válida en este negocio.
              </p>
              <p className="text-sm"><strong>Úsalo para:</strong> Moda, uso casual, deportes de nieve</p>
              <p className="text-sm"><strong>Mi opinión:</strong> Instagrameable. Vende bien en el público de 18-30 años.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-300"></div>
                <h3 className="font-bold text-lg">Espejo</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Un recubrimiento reflectante aplicado sobre un tinte base. El espejo rebota la luz antes de que 
                entre al lente, dándote reducción extra de deslumbramiento sobre el tinte base. Además, la gente 
                no puede ver tus ojos. A algunos les encanta. A otros les molesta.
              </p>
              <p className="text-sm"><strong>Úsalo para:</strong> Alto deslumbramiento (playa, nieve, agua), moda</p>
              <p className="text-sm"><strong>Mi opinión:</strong> Espejo añade $0.30–0.80/par al por mayor pero te permite cobrar $10–20 más en retail. Mejora de alto margen.</p>
            </div>
          </div>

          {/* Recubrimientos */}
          <h2 id="recubrimientos" className="text-3xl font-bold mt-16 mb-6">Recubrimientos: Las Mejoras Invisibles que Importan</h2>
          <p>
            Los recubrimientos no son noticia. Nadie publica &quot;¡miren el recubrimiento hidrofóbico de mis 
            nuevas gafas!&quot; en Instagram. Pero los recubrimientos son lo que separa unas gafas de $30 de 
            unas de $130 — y cuestan centavos añadirlos a nivel de fábrica.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recubrimiento Antirreflectante (AR)</h3>
          <p>
            Este me saca de quicio porque muchas marcas se lo saltan. El problema: la luz no solo viene de 
            adelante. También rebota en la superficie <em>trasera</em> de tu lente — la luz reflejada desde 
            detrás de ti golpea la superficie interna del lente y rebota directo a tus ojos. Es esa molesta 
            imagen fantasma que ves cuando el sol está detrás de ti. El recubrimiento AR elimina el 99,5% de eso.
          </p>
          <p><strong>Costo:</strong> $0.30–$1.00 por par al por mayor. Lo pongo en todo lo que enviamos. En todo.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recubrimiento Hidrofóbico</h3>
          <p>
            El agua forma gotas y rueda en lugar de mancharse por todo el lente. Un cambio radical para cualquiera 
            cerca del agua, la lluvia o la humedad. Le hice una demostración a un cliente sosteniendo un lente 
            con recubrimiento y otro sin él bajo un grifo. El recubierto estaba seco en segundos. El otro parecía 
            una mampara de ducha. Ese día pidió hidrofóbico en toda su línea.
          </p>
          <p><strong>Costo:</strong> $0.20–$0.80 por par al por mayor.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recubrimiento Oleofóbico</h3>
          <p>
            Misma idea que el hidrofóbico pero para aceites — huellas dactilares, grasa facial, residuos de 
            protector solar. ¿Sabes cómo la pantalla de tu móvil repele las huellas? Misma tecnología. Tus 
            clientes no sabrán por qué sus gafas se mantienen más limpias que las anteriores. Solo sabrán que 
            les gustan más las tuyas.
          </p>
          <p><strong>Costo:</strong> $0.25–$0.80 por par al por mayor.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recubrimiento Resistente a Rayaduras</h3>
          <p>
            Ningún lente es a prueba de rayaduras. Quien diga lo contrario te está vendiendo algo. Pero un 
            buen recubrimiento duro marca una diferencia real. Un policarbonato sin recubrimiento anti-rayaduras 
            parecerá que perdió una pelea con un gato en un mes. Con el recubrimiento, se verá limpio durante 
            un año de uso normal.
          </p>
          <p><strong>Costo:</strong> $0.15–$0.50 por par al por mayor. Debería ser estándar. Punto.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recubrimiento Antivaho</h3>
          <p>
            Previene el empañamiento cuando pasas del aire acondicionado al calor (o viceversa). El recubrimiento 
            cambia la tensión superficial para que la humedad se extienda en una película fina e invisible en 
            lugar de formar gotas visibles. Más útil para gafas deportivas y mercados con alta humedad.
          </p>
          <p><strong>Costo:</strong> $0.30–$1.00 por par al por mayor.</p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 El Truco del Paquete de Recubrimientos</h3>
            <p className="text-amber-800">
              Esto es lo que le digo a cada dueño de marca: un paquete completo de recubrimientos (AR + hidrofóbico + 
              oleofóbico + anti-rayaduras) añade $0.80–$2.50 por par al por mayor. Puedes cobrar $20–$40 más en retail. 
              Esa es la mejora de mayor margen en todo el negocio de las gafas de sol. Ofrecemos paquetes de{' '}
              <Link href="/es/productos" className="text-amber-900 underline">recubrimientos personalizables</Link> exactamente por esta razón.
            </p>
          </div>

          {/* Polarizado vs No Polarizado */}
          <h2 id="polarizado-vs-no" className="text-3xl font-bold mt-16 mb-6">Polarizado vs No Polarizado: La Historia Real</h2>
          <p>
            Tuve una discusión acalorada con un dueño de marca el año pasado sobre polarización. Quería ahorrar 
            $1.50 por par yendo sin polarizar. Le dije que perdería $15 por par en poder de fijación de precios 
            en retail. No me escuchó. Seis meses después llamó para volver a pedir — polarizado esta vez. 
            &quot;Tenías razón, Jacky. Los clientes no paraban de preguntar.&quot;
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cómo Funciona Realmente la Polarización</h3>
          <p>
            Clase rápida de física — seré breve. La luz normal vibra en todas las direcciones. Cuando rebota 
            en una superficie plana (carretera, agua, nieve, capó de coche), se &quot;polariza horizontalmente&quot; — 
            vibra mayormente de lado a lado. Esa luz horizontal concentrada es lo que tu cerebro percibe como 
            deslumbramiento cegador.
          </p>
          <p>
            Un lente polarizado tiene un filtro con diminutas franjas verticales. La luz horizontal se bloquea. 
            La luz vertical pasa. Resultado: el deslumbramiento desaparece, pero puedes ver todo lo demás con 
            claridad. La <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 hover:underline">física detrás de la polarización</a> está 
            bien documentada si quieres profundizar. Pero el efecto práctico es genuinamente impresionante — 
            pon un lente polarizado sobre el agua y mira cómo desaparece el deslumbramiento. Puedes ver hasta el fondo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dónde Brillan los Lentes Polarizados</h3>
          <ul>
            <li><strong>Conducción:</strong> El deslumbramiento de la carretera desaparece. Reflejos de otros coches — eliminados. Esta es una característica de seguridad genuina.</li>
            <li><strong>Pesca:</strong> Puedes ver los peces a través de la superficie del agua. Los pescadores serios no compran sin polarizar.</li>
            <li><strong>Deportes acuáticos:</strong> Corta el deslumbramiento de la superficie como nada más.</li>
            <li><strong>Nieve:</strong> Reduce el intenso brillo blanco que causa la ceguera de nieve.</li>
            <li><strong>Uso diario:</strong> Menos fatiga visual por el deslumbramiento ambiental urbano. Tus ojos simplemente se sienten más relajados.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dónde lo Polarizado Se Pone Incómodo</h3>
          <ul>
            <li><strong>Pantallas de móvil y portátil:</strong> Las pantallas LCD pueden verse oscuras o mostrar patrones arcoíris en ciertos ángulos. La generación TikTok nota esto inmediatamente.</li>
            <li><strong>Pilotos:</strong> Los instrumentos de cabina usan pantallas LCD. Los lentes polarizados pueden dificultar su lectura. La mayoría de las autoridades de aviación desaconsejan su uso.</li>
            <li><strong>Algunos escenarios de esquí:</strong> Algunos esquiadores experimentados prefieren no polarizado porque la polarización puede enmascarar la apariencia de placas de hielo.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">El Caso de Negocio para Polarizado</h3>
            <p className="text-blue-800">
              Añadir polarización cuesta $0.50–$2.00 por par al por mayor. ¿La prima en retail? 30–60% más de precio. 
              Un par de $25 sin polarizar se convierte en un par polarizado de $35–$40. La demanda de polarizado 
              ha crecido un 15% anual en los últimos cinco años. Si no lo ofreces, estás dejando dinero sobre la mesa.
            </p>
          </div>

          {/* Fotocromático */}
          <h2 id="fotocromatico" className="text-3xl font-bold mt-16 mb-6">Lentes Fotocromáticos: Tecnología Interesante, Limitaciones Reales</h2>
          <p>
            Los lentes fotocromáticos (quizás los conozcas como &quot;Transitions&quot;) se oscurecen automáticamente 
            con la luz solar y se aclaran en interiores. Usan moléculas reactivas a UV — cloruro de plata o compuestos 
            orgánicos — que cambian de forma cuando los UV los golpean, absorbiendo más luz visible.
          </p>
          <p>
            Creo que son una tecnología genuinamente interesante. Pero también creo que se sobrevaloran. Esto es 
            lo que el marketing no te dice:
          </p>
          <ul>
            <li><strong>Los parabrisas bloquean UV.</strong> Los parabrisas modernos tienen capas de filtrado UV. Como los lentes fotocromáticos necesitan UV para oscurecerse, a menudo no funcionan bien dentro de un coche. Conduces bajo un sol intenso, entrecerrado los ojos, preguntándote por qué tus lentes &quot;automáticos&quot; no hacen nada. Las fórmulas más nuevas son mejores, pero sigue siendo un problema conocido.</li>
            <li><strong>El calor los hace perezosos.</strong> Por encima de 35°C, las reacciones fotocromáticas se ralentizan. Los lentes pueden no oscurecerse completamente en el pico del verano — exactamente cuando más los necesitas.</li>
            <li><strong>Se desgastan.</strong> El efecto fotocromático se degrada con 2-3 años de uso diario. Siguen protegiendo contra UV, pero el oscurecimiento se vuelve más lento y menos dramático.</li>
            <li><strong>La velocidad de transición no es instantánea.</strong> Oscurecerse toma 30-60 segundos. Aclararse toma 2-5 minutos. Si entras en un restaurante oscuro, llevarás gafas de sol en interiores durante uno o dos minutos. Ligeramente incómodo.</li>
          </ul>
          <p>
            Dicho esto, para entusiastas del aire libre que genuinamente pasan tiempo moviéndose entre sol y 
            sombra — senderistas, ciclistas, trabajadores de la construcción — los lentes fotocromáticos son 
            una conveniencia real. Solo gestiona las expectativas.
          </p>
          <p><strong>Costo al por mayor:</strong> 2–4 veces más que los lentes tintados estándar. Vale la pena ofrecerlo como opción premium, no como estándar.</p>

          {/* Elegir por Actividad */}
          <h2 id="elegir-lentes" className="text-3xl font-bold mt-16 mb-6">Elegir Lentes por Actividad</h2>
          <p>
            Me preguntan &quot;¿qué lente debería usar para X?&quot; unas cinco veces al día. Aquí está mi 
            chuleta — la misma que tengo pegada en la pared junto a mi escritorio:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Actividad</th>
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Color</th>
                  <th className="px-4 py-3 text-left">¿Polarizado?</th>
                  <th className="px-4 py-3 text-left">Recubrimientos Esenciales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Conducción</td><td className="px-4 py-3">CR-39 o Cristal</td><td className="px-4 py-3">Gris o Marrón</td><td className="px-4 py-3">Sí ✅</td><td className="px-4 py-3">AR, Antivaho</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Pesca</td><td className="px-4 py-3">Policarbonato</td><td className="px-4 py-3">Marrón o Verde</td><td className="px-4 py-3">Sin duda ✅</td><td className="px-4 py-3">Hidrofóbico, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Running / Ciclismo</td><td className="px-4 py-3">Policarbonato</td><td className="px-4 py-3">Gris o Naranja</td><td className="px-4 py-3">Recomendable</td><td className="px-4 py-3">Antivaho, Hidrofóbico</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Playa / Agua</td><td className="px-4 py-3">Policarbonato</td><td className="px-4 py-3">Gris o Espejo</td><td className="px-4 py-3">Sí ✅</td><td className="px-4 py-3">Hidrofóbico, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Esquí</td><td className="px-4 py-3">Policarbonato</td><td className="px-4 py-3">Marrón o Amarillo</td><td className="px-4 py-3">Discutible</td><td className="px-4 py-3">Antivaho, AR</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Moda / Casual</td><td className="px-4 py-3">CR-39 o Cristal</td><td className="px-4 py-3">Lo que quieras</td><td className="px-4 py-3">Opcional</td><td className="px-4 py-3">Oleofóbico, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Golf</td><td className="px-4 py-3">CR-39</td><td className="px-4 py-3">Marrón o Verde</td><td className="px-4 py-3">Sí ✅</td><td className="px-4 py-3">AR, Anti-rayaduras</td></tr>
              </tbody>
            </table>
          </div>

          {/* Para Dueños de Marca */}
          <h2 id="para-marcas" className="text-3xl font-bold mt-16 mb-6">Estrategia de Lentes por Nivel de Precio</h2>
          <p>
            Esta es la sección que ojalá hubiera existido cuando empecé a ayudar a marcas hace 15 años. Tus 
            elecciones de lentes necesitan coincidir con tu precio de venta — gastar de más mata tus márgenes, 
            gastar de menos destruye tus reseñas.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Marcas Económicas ($10–$30 en retail)</h3>
          <p>Los márgenes son ajustados. Cada centavo cuenta. Así es como se hace funcionar:</p>
          <ul>
            <li>TAC polarizado para tus SKU &quot;polarizados&quot; — los clientes a este precio no notarán la diferencia óptica con CR-39</li>
            <li>Policarbonato no polarizado para tu línea estándar</li>
            <li>UV400 obligatorio (obviamente)</li>
            <li>Gris y marrón cubren el 80% de la demanda — no acumules demasiados colores</li>
            <li>Acabado espejo añade $0.30–0.80/par pero te permite cobrar $5–10 más. Alto ROI.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Marcas de Gama Media ($30–$80 en retail)</h3>
          <p>Aquí es donde la calidad de lentes se convierte en ventaja competitiva:</p>
          <ul>
            <li>CR-39 para estilos de moda, policarbonato para estilos deportivos</li>
            <li>Polarizado debería estar disponible en todos los modelos clave — se espera a este precio</li>
            <li>Paquete de recubrimiento AR + hidrofóbico (el cliente puede sentir la diferencia)</li>
            <li>Gama completa de colores con opciones de espejo estacionales para fotos de producto de Instagram</li>
            <li>Considera fotocromático como SKU premium limitado — genera expectación</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Marcas Premium ($80+ en retail)</h3>
          <p>A este nivel, compites con Maui Jim y Ray-Ban. Los lentes necesitan respaldar el precio:</p>
          <ul>
            <li>Cristal o CR-39 premium — nada menos</li>
            <li>Paquete completo de recubrimientos: AR + hidrofóbico + oleofóbico + anti-rayaduras</li>
            <li>Polarizado como <em>estándar</em>, no como mejora</li>
            <li>Fotocromático disponible como opción</li>
            <li>Considera colores de tinte exclusivos personalizados — &quot;solo disponible de [tu marca]&quot;</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">¿No Estás Seguro de Qué Lentes Van con Tu Marca?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Envíame tu precio objetivo de venta y tu cliente objetivo, y te diré exactamente qué configuración 
              de lentes maximiza tus márgenes sin sacrificar calidad. He hecho esto para más de 500 marcas — 
              toma unos 10 minutos.
            </p>
            <Link href="/es/contacto" className="btn-primary">
              Pregúntale a Jacky sobre Lentes
            </Link>
          </div>

          {/* Preguntas Frecuentes */}
          <h2 id="preguntas" className="text-3xl font-bold mt-16 mb-6">Preguntas que Escucho Cada Semana</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Cuál es el mejor material de lente para gafas de sol?</h3>
              <p className="text-gray-600">
                No hay un único &quot;mejor.&quot; Policarbonato para deportes y durabilidad. CR-39 para la óptica 
                más nítida en uso diario. Cristal para marcas premium que quieren la mejor claridad absoluta y 
                resistencia a rayaduras. TAC para polarizado asequible. He enviado millones de cada uno — todos 
                tienen su lugar.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Valen la pena los lentes polarizados?</h3>
              <p className="text-gray-600">
                Para conducir, pescar y deportes acuáticos — 100% sí. El aumento de costo al por mayor es solo 
                $0.50–$2.00 por par, pero puedes cobrar 30–60% más en retail. Desde la perspectiva de negocio, 
                es una de las mejores jugadas de margen de la industria.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Qué color de lente es mejor para gafas de sol?</h3>
              <p className="text-gray-600">
                Gris es el todoterreno seguro. Marrón mejora el contraste — ideal para conducir y golf. Verde es 
                el estilo clásico Ray-Ban. Amarillo es solo para poca luz. Azul y espejo son jugadas de moda. Si 
                eres marca y solo puedes elegir dos, ve con gris y marrón — cubren el 70% de la demanda del cliente.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Qué son los lentes fotocromáticos?</h3>
              <p className="text-gray-600">
                Se oscurecen con la luz solar y se aclaran en interiores. Tecnología interesante con advertencias: 
                no funcionan bien detrás de parabrisas, son más lentos con calor, y el efecto se degrada después 
                de 2-3 años. Ideales para entusiastas del aire libre que odian cambiar entre gafas normales y de sol.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">¿Qué recubrimientos deberían tener las gafas de sol?</h3>
              <p className="text-gray-600">
                UV400 es innegociable. AR es un segundo cercano. Después: anti-rayaduras para durabilidad, 
                hidrofóbico para clientes aventureros, oleofóbico para los que odian las huellas. Un paquete 
                completo añade $0.80–$2.50 por par al por mayor pero te permite cobrar $20–$40 más en retail. 
                Haz las cuentas.
              </p>
            </div>
          </div>

          {/* Artículos Relacionados */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Más Desde la Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/es/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM en Gafas de Sol: Guía Completa</h3>
                <p className="text-gray-600 text-sm">El desglose honesto de ambos modelos de fabricación — de alguien que dirige una fábrica.</p>
              </Link>
              <Link href="/es/blog/crear-marca-gafas" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Cómo Crear tu Marca de Gafas de Sol</h3>
                <p className="text-gray-600 text-sm">La guía completa desde la idea hasta la primera venta. Todo lo que me hubiera gustado saber en 2006.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
