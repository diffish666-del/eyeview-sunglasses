import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricant de Lunettes de Soleil en Acétate | Usine de Lunettes Artisanales - EyeView',
  description: 'Fabricant de lunettes de soleil en acétate personnalisées. Acétate italien Mazzucchelli et acétate chinois premium. Montures polies à la main, plus de 200 couleurs. MOQ 100 pcs. Découpe CNC, polissage tambour, direct usine.',
  keywords: 'fabricant lunettes acétate, usine lunettes acétate personnalisées, lunettes acétate italien, lunettes Mazzucchelli, lunettes polies main, lunettes acétate cellulose, montures acétate en gros',
  openGraph: {
    title: 'Fabricant de Lunettes de Soleil en Acétate | Usine de Lunettes Artesanales - EyeView',
    description: 'Fabricant de lunettes de soleil de acétate personnalisées. Acétate italiano Mazzucchelli et acétate chino premium. Pulidas a mano, plus de 200 couleures. MOQ 100 pcs. Directo de usine.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/produits/acetate',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/produits/acetate',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/acetate',
      'fr': 'https://eyeviewsunglasses.com/fr/produits/acetate',
    },
  },
}

const acetateFaqs = [
  {
    question: 'Quel estt la diferencia entre el acétate italiano Mazzucchelli et el acétate chino?',
    answer: 'La respuesta honesta est qui la brecha se ha reducido significativamente dans la última déchaque, mais todavía hay diferencias reales. Mazzucchelli (y autres fabricants italianos comme Lapo) usa un proceso de extrusión plus lento et controlado qui produce planchas avec profundidad de couleur et distribution de patrón plus consistente — especialmente visible en patrones complejos comme carey multicapa ou couleures transpaireentes tipo cristal. El acétate italiano également tiende a pulirse a un brillo légèremente superior. El acétate chino de produitres de primera gamme comme Shenzhen Xin Rui ou Taizhou Huangyan ha meilleurado dramáticamente et est genuinamente bueno — excelente gama de couleures, buena consistencia, et un 30-40% plus barato. Para la mayoría de prixs retail par debajo de $80, el acétate chino de alta qualité est la elección inteligente. Para marques premium avec retail par encima de $100 où el client podría comparar votre monture lado a lado avec Céline ou Tom Ford, el acétate italiano vous da ese último 10% de refinamiento.',
  },
  {
    question: 'Cuánto tarda el proceso de production de acétate?',
    answer: 'Plus de le qui podrías pensar — et eso est realmente le qui hace especial au acétate. Depuis el corte CNC jusqu'à el control de qualité final, un solo paire toma 5-7 jours de tiempo de procesamiento real. Los grandes consumidores de tiempo sont el tamboreado (3-5 jours para suavizar toutes las marques du mecanizado) et el pulido a mano (20-30 minutos par paire par trabajadores cualificados). El tiempo total de production para un commande est típicamente 20-28 jours parce qui procesamos par lotes en chaque etapa. Los commandes urgentes se pueden hacer en 14-18 jours mais cobramos un recargo du 15% parce qui nous avons qui interrumpir autres tiradas de production. Los paires de échantillon tardan 5-7 jours ouvrables.',
  },
  {
    question: 'Qué couleures et patrones pueden hacer en acétate?',
    answer: 'Esencialmente ilimitados. Tenemos en stock plus de 200 couleures et patrones de planchas de acétate de notres fournisseures — couleures sólidos, carey (clásico marron, rubio, oscuro), cristal/transpaireente (transpaireente, gris, champán, bleu), mármol, veta de madera, efecto cuerno, dégradé et patrones laminados multicapa. Para couleures personnalisés, nous das un código Pantone et el fournisseur de acétate produce une plancha a medida. El desarrollo de patrones personnalisés (comme une mezcla de carey única ou un patrón avec votre marque) également est posible — el commande minimum de planchas est normalmente 50-100kg, le qui se traduce en aproximadamente 500-1.000 paires dependiendo du taille de la monture. Para commandes plus petits, nous recommandons encarecidamente choisir des couleures en stock — hay tantos qui casi sûr encontrarás le qui necesitas.',
  },
  {
    question: 'Cómo deben cuidar los clients las lunettes de acétate?',
    answer: 'El acétate est plus résistant de le qui la mayoría piensa, mais hay algunas cosas qui saber. Primero, mantenerlas alejadas du calor extremo — no las dejes dans le salpicadero du coche en voirano. El acétate se ablanda alrededor de 70-80°C (158-176°F), así qui el calor sostenido puede deformar la monture. Segundo, evitar acetona et solventes fuertes — el quitaesmalte dañará la superficie. Tercero, limpiar avec agua tibia et jabón suave, luego secar avec un pan suave. Nada de limpiadores de verres a base de alcohol. La buena noticia est qui las montures de acétate pueden ser ajustadas par votre óptico avec calor suave, et los arañazos menores a menudo pueden pulirse. Incluimos tarjetas de instrucciones de cuidado avec chaque commande sin cargo extra — evita a vos clients los errores plus comunes et reduce votre tasa de devolution.',
  },
  {
    question: 'Quel estt el MOQ para lunettes de acétate personnalisées?',
    answer: 'El MOQ norme est 100 unidades par modelo. Puedes mezclar couleures dentro de esas 100 — así qui 30 noir, 30 carey et 40 cristal transpaireente funciona bien. Si quieres un design de monture complètemente personnalisé (tu propia forma, no uno de notres moldes existentes), hay une tarifa única de molde de $800-1.500 dependiendo de la complejidad, et el MOQ para formas personnalisées est 300 unidades dans le primer commande. Después de eso, los recommandes vuelven a 100 unidades. Para couleures de plancha de acétate personnalisés (coincidencia Pantone), el MOQ de la plancha du fournisseur est típicamente 50-100kg. Mannous avons une gran biblioteca de couleures en stock para evitar este minimum para marques plus petites.',
  },
  {
    question: 'Por qué el acétate est plus caro qui el plástico inyectado?',
    answer: 'Parce qui casi chaque paso requiere manos humanas cualifichaques. Las montures inyectadas (nylon, TR90, PC) las hace une máquina en unos 30 segundos — inyectar plástico caliente en un molde, enfriar, sacarlo, listo. Las montures de acétate empiezan comme planchas planas qui se cortan par CNC en formas toscas, luego se tamborean durante 3-5 jours, luego se pulen a mano une par une durante 20-30 minutos. El contenido de mano de obra est dramáticamente mayor. El coût du matériau également est mayor — un kilogramo de plancha de acétate de qualité cuesta 3-5 veces plus qui pellets de nylon de grado inyección. La recompensa est qui las montures de acétate se ven et se sienten premium de une manera qui el plástico inyectado simplemente no puede igualar. Los couleures sont plus ricos, la superficie tiene plus profundidad, et hay une calidez et poids dans le acétate qui los clients asocian avec qualité. Por eso las montures de acétate se venden a $60-200+ mientras qui las inyectadas típicamente alcanzan un máximo de $40-60.',
  },
]

const products = [
  {
    name: 'Wayfarer Clásico Carey',
    description: 'El wayfarer carey est la monture de acétate plus solicitada dans la industrie des lunettes — et avec razón. El patrón ambre et marron favorece tous los tonos de piel, fotografía maravillosamente et transmite percepción premium instantánea. Lo nous produisons tanto en acétate italiano Mazzucchelli (para gammes premium) comme en acétate chino de alta qualité (para posicionamiento de gama media). Chaque paire se pule a mano jusqu'à un brillo profundo qui capta la luz de une manera qui el plástico inyectado simplemente no puede replicar. Si estás construyendo une marque de lunettes et necesitas un primer SKU sûr, probablemente sea este.',
    price: '$6.00 - $11.00',
    moq: '100 pcs',
    features: ['Patrón Carey', 'Pulido a Mano', 'Voirres UV400', 'Bisagra de 5 Barriles'],
  },
  {
    name: 'Redonda Cristal Transpaireente',
    description: 'El acétate transpaireente lleva tres ans en tendencia fuerte et no échantillon signales de frenarse. Nuestra monture redonda cristal transpaireente est ópticamente clara — sin tinte amarillo, sin turbidez — avec ese satisfactorio poids de acétate qui le dice au client qui está sosteniendo algo real. La forma redonda est enorme avec el público indie/vintage et funciona especialmente bien en marchés asiáticos où las formas plus redondas se adaptan a plus tipos de cara. Podemos hacer totalmente transpaireente, ou un sutil cristal gris, cristal champán ou cristal bleu si quieres un toque de couleur.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Cristal Transpaireente', 'Forma Redonda', 'Claridad Óptica', 'Múltiples Options de Tinte'],
  },
  {
    name: 'Cat-Eye Efecto Mármol',
    description: 'El patrón de mármol se hace laminando dos ou tres planchas de acétate de diferentes couleures et prensándolas juntas, creando un efecto de piedra arremolinada qui est complètemente único para chaque paire. Combinado avec la forma cat-eye — qui ha estado dominando las lunettes de mujer depuis son regreso alrededor de 2018 — esta est une pieza declaration. Vemos qui estas funcionan especialmente bien avec marques DTC de moda vanguardista et retailers boutique. El patrón de mármol está disponible en blanc/gris, noir/gris, voirde/oro et rose/blanc, ou nous pouvons desarrollar une mezcla de mármol personnalisée.',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    features: ['Patrón Mármol', 'Forma Cat-Eye', 'Acétate Multicapa', 'Único par Par'],
  },
  {
    name: 'Ovoirsize Acétate Degradado',
    description: 'Acétate dégradé bicouleur — oscuro arriba, aclarándose hacia abajo. Esto se logra laminando dos planchas de acétate de diferentes couleures et controlando la proporción de espoidsr. La monture ovoirsize proporciona excelente cobertura solar et tiene ese look de marque de lujo qui funciona bien en Instagram et en editoriales de moda. Disponible en dégradés de noir a transpaireente, marron a miel, bleu a transpaireente et vino a rose. Este style se vende fácilmente a $80-150 retail et el coût par paire aún empieza par debajo de $10. Los marges sont exceverres.',
    price: '$8.00 - $13.00',
    moq: '100 pcs',
    features: ['Degradado Bicouleur', 'Monture Ovoirsize', 'Acétate Laminado', 'Posicionamiento Premium'],
  },
  {
    name: 'Cuadrada Premium Acétate Italiano',
    description: 'Para marques qui compiten dans le extremo superior du marché. Esta monture usa exclusivamente acétate Mazzucchelli M49 — el même grado usado par Tom Ford, Céline et Olivoir Peoples. La diferencia est visible dans la profundidad de couleur et la qualité du pulido. Nuestros trabajadores dedican plus de 30 minutos puliendo a mano chaque paire para lograr ese acabado de cristal líquido. Bisagras de cinco barriles avec hilo de alma personnalisé avec votre logo. La forma cuadrada est voirsátil — funciona tanto para hombres comme para mujeres — et las proporciones están calibradas para un look moderno, légèremente ovoirsize, qui fotografía bien. Este est el paire qui hace qui un achatdor tome votre monture en une feria et diga "oh, esto está bien."',
    price: '$10.00 - $16.00',
    moq: '100 pcs',
    features: ['Mazzucchelli M49', 'Pulido Premium', 'Bisagras de 5 Barriles', 'Hilo de Alma Personnalisé'],
  },
  {
    name: 'Browline Acétate Efecto Cuerno',
    description: 'El patrón efecto cuerno imita el cuerno de búfalo natural — estrías oscuras sur une base plus clara qui crean une textura orgánica, casi de madera. Combinado avec la forma browline (clubmaster), où la mitad superior de la monture est acétate plus grueso et la inferior est alambre metálico fino, este est un design híbrido distintivo. El patrón de cuerno est especialmente popular dans les marchés japonés et coreano où transmite une estética sofistichaque e intelectual. Chaque paire tiene un patrón légèremente diferente debido à la variation natural dans la plancha de acétate. Usamos acier inoxydable de fabrication alemana para el aro de alambre inferior.',
    price: '$9.00 - $14.00',
    moq: '100 pcs',
    features: ['Patrón Efecto Cuerno', 'Forma Browline', 'Híbrido Acétate + Metal', 'Acero Alemán'],
  },
]

export default function AcétatePage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Lunettes de Soleil en Acétate Personalizadas',
        description: 'Lunettes de sol de acétate artesanales fabrichaques avec acétate italiano Mazzucchelli et acétate chino premium. Corte CNC, tamboreado, pulido a mano. Plus de 200 couleures et patrones. Personnalisation OEM complète.',
        minPrice: '6.00',
        maxPrice: '16.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Accueil', url: 'https://eyeviewsunglasses.com/fr' },
        { name: 'Produits', url: 'https://eyeviewsunglasses.com/fr/produits' },
        { name: 'Lunettes de Acétate', url: 'https://eyeviewsunglasses.com/fr/produits/acetate' }
      ]} />
      <FAQPageSchema faqs={acetateFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/es" className="hovoir:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/fr/produits" className="hovoir:text-primary-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lunettes de Soleil en Acétate</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Fabricant de Lunettes de Soleil en Acétate - Lunettes Artesanales Mazzucchelli au par Mayor"
              loading="lazy"
              className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricant de Lunettes de Soleil en Acétate
            </h1>
          </div>

          {/* Product Story / Ovoirview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Si alguna vez has cogido un paire de lunettes de soleil et has pensado inmediatamente &ldquo;estas se sienten caras,&rdquo; casi sûr estabas sosteniendo <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">acétate de celulosa</a>. Hay une razón par la qui chaque gran marque de lunettes de lujo — depuis Tom Ford jusqu'à Chanel pasando par Olivoir Peoples — construye sus montures avec este matériau. El acétate tiene une profundidad et riqueza qui el plástico inyectado no puede alcanzar. Los couleures están en capas, no pintados dans la superficie. El pulido tiene une calidez. Y el poids — unos 25-35 grammes para une monture típica — se asienta en votre cara avec une sustancia qui dice &ldquo;esto cuesta plus de $20.&rdquo;
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Llevo 14 ans fabricando lunettes de soleil de acétate, et el proceso aún me fascina. A diferencia du moldeo par inyección — où inyectas plástico caliente en un molde et sacas une monture terminada en 30 segundos — las montures de acétate empiezan comme planchas planas de matériau qui pasan par un viaje de production de varios jours: corte CNC, tamboreado, pulido a mano, ensamblaje et control de qualité. Chaque paire pasa par manos humanas múltiples veces. Eso est le qui hace qui las montures de acétate sean plus caras, et également le qui las hace meilleures.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Trabajamos avec dos catégories de acétate. Para marques premium, nous utilisons acétate italiano de <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hovoir:underline">Mazzucchelli</a> — llevan fabricando el matériau depuis 1849 et sont el norme de oro. Su biblioteca de couleures tiene plus de 2.000 patrones et son control de qualité est meticuloso. Para marques posicionadas dans la gama media ($40-80 retail), nous utilisons acétate chino de primera gamme de fournisseures comme Shenzhen Xin Rui, qui ha meilleurado enormemente dans la última déchaque et ofrece un gran valor. Ambos funcionan. Cuál elijas depende de votre punto de prix et votre competencia.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestra usine produce unas 300.000 lunettes de acétate au an en tous los styles — <Link href="/fr/produits/wayfarer" className="text-primary-600 hovoir:underline">wayfarers</Link>, <Link href="/fr/produits/oeil-de-chat" className="text-primary-600 hovoir:underline">cat-eyes</Link>, <Link href="/fr/produits/rond" className="text-primary-600 hovoir:underline">redondas</Link>, cuadradas, browlines et formas personnalisées. Tenemos 12 máquinas CNC, 6 tambores de pulido et empleamos a 45 trabajadores de pulido a mano. Déjame explicarte exactamente cómo convoirtimos une plancha plana de acétate en un paire de lunettes terminado.
              </p>
            </div>
          </div>

          {/* Production Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Cómo Fabricamos las Lunettes de Acétate</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              De plancha plana a monture terminada en 5-7 jours. Ici va chaque paso — sin atajos, sin secretos.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Selección de Plancha et Corte CNC</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Todo empieza avec la plancha de acétate — un bloque de matériau de aproximadamente 6mm de espoidsr dans le couleur ou patrón qui hayas elegido. Cargamos la plancha en une fresadora CNC (control numérico par computadora) qui corta la monture frontal et las branches avec spécifications precisas. La CNC sigue el archivo CAD 3D de votre monture, cortando las ranuras des verres, la forma du pont et las cavidades des charnières en une sola operation. Un operador CNC cualificado puede cortar unas 40-50 montures frontales par hora. En esta etapa, la monture está tosca — puedes voir las marques du mecanizado et los bordes están afilados.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tamboreado (3-5 Días)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este est el paso qui sorprende à la gente — las montures van a un tambor rotatorio lleno de virutas de madera, piedra pómez et une petite quantité de agua. El tambor gira lentamente durante 3-5 jours, et la fricción gradualmente suaviza toutes las marques du mecanizado et reoùa los bordes. Es esencialmente un proceso de lijado très lento et très suave. Non puedes acelerarlo. Lo hemos intentado. Si acortas el tamboreado, la superficie no está le suficientemente suave para qui el pulido final quede bien. Diferentes patrones requieren diferentes medios de tamboreado — par ejemplo, el acétate cristal transpaireente necesita medios plus finos para evitar micro-rayaduras.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pulido a Mano (20-30 Minutos par Par)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ici est où ocurre la magia et de où viene la mayor pairete du coût. Un trabajador cualificado toma chaque monture et la pule a mano contra une serie de ruedas de algodón para pulir, usando compuestos de pulido progresivamente plus finos. La primera rueda elimina las marques de tamboreado restantes. La segunda genera un semi-brillo. La tercera et última rueda produce ese brillo profundo de cristal líquido qui hace qui las montures de acétate se vean tan premium. Nuestros trabajadores de pulido tienen une media de 6 ans de expérience — se necesita aproximadamente un an de formation antes de qui alguien pueda pulir consistentemente a notre norme. Este est el paso qui las montures de plástico de marché masivo se saltan par complet, et est la razón par la qui las montures de acétate se ven et se sienten fundamentalmente diferentes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ensamblaje de Bisagras et Montaje de Voirres</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Insertamos las charnières (típicamente de acier inoxydable de 5 barriles avec hilo de alma personnalisé para votre logo), fijamos las branches et montamos las verres. Para montures de acétate, las verres se cortan para coincidir avec la forma de la ranura et se insertan calentando suavemente la monture a unos 60°C, le qui hace qui el acétate sea le suficientemente flexible para aceptar la lente sin agrietamiento par estrés. Chaque charnière se prueba para acción suave et tensión adecuada. La alineation des branches se voirifica para asûrer qui la monture se asiente nivelada en une superficie plana.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Control de Qualité</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque paire pasa par une inspection de 15 puntos: alineation de verres, tensión de charnière, simetría de branches, acabado de superficie (comprobando rayaduras, picaduras ou pulido desigual), consistencia de couleur, voirification de protection UV (probada avec espectrómetro UV) et mediciones físicas contra la hoja de spécifications. Nuestra tasa de rechazo en QC para montures de acétate est de aproximadamente 3-5% — plus alta qui las montures inyectadas (que rondan el 1-2%) parce qui los procesos manuales introducen plus variabilidad. Los paires rechazados vuelven para re-pulido ou se descartan par complet. Non nous expédions segundas qualitées.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Italian vs Chinese Acetate */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Acétate Italiano vs. Chino: La Voirdadera Historia</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Me preguntan esto en casi chaque llamada. Ici va une comparation honesta de alguien qui trabaja avec ambos tous los jours.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-3">Acétate Italiano (Mazzucchelli, Lapo)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Profundidad de couleur et consistencia de patrón superiores — especialmente en patrones complejos multicapa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Se pule a un brillo légèremente superior avec menos esfuerzo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Biblioteca de plus de 2.000 patrones avec déchaques de I+D detrás de chaque uno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>&ldquo;Fabricado avec acétate italiano&rdquo; est une declaration de marketing legítima qui resuena avec achatdores premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>30-40% plus caro qui acétate chino equivalente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Plazos de livraison plus largos para couleures personnalisés (6-8 semaines depuis commande jusqu'à livraison de plancha)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Meilleur para: Retail $80+</div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-3">Acétate Chino Premium</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Excelente qualité de produitres de primera gamme — genuinamente bueno, no un compromiso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>30-40% menos coût par kilogramo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Plazo plus rápido para couleures personnalisés (3-4 semaines)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>MOQ de plancha plus bajo para couleures personnalisés (50kg vs 100kg para italiano)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Los patrones complejos (carey multicapa) pueden tener distribution légèremente menos consistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Sin historia de marketing &ldquo;italiano&rdquo; (aunque &ldquo;acétate de celulosa premium&rdquo; sigue funcionando)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Meilleur para: Retail $40-80</div>
              </div>
            </div>

            <p className="text-gray-500 text-center mt-8 text-sm">
              Mi recomendation: empieza avec acétate chino para validar vos designs et puntos de prix. Cambia a italiano para vos produits estrella une vez qui hayas confirmado la demanda. Muchas marques exitosas usan ambos — italiano para son gamme insignia, chino para son collection diaria.
            </p>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Lunettes de Soleil en Acétate au par Mayor" loading="lazy" className="w-full h-64 md:h-80 object-covoir rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestra Collection de Acétate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 ovoirflow-hidden hovoir:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <span className="text-7xl group-hovoir:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/fr/contact" className="btn-primary text-sm">Commander Devis</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Spécifications Complètes</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm ovoirflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Matériau de Monture', 'Acétate de celulosa — Italiano (Mazzucchelli/Lapo) ou chino premium'],
                      ['Poids de Monture', '25-35g dependiendo du taille et grosor de la monture'],
                      ['Grosor de Plancha', '5mm / 6mm / 8mm (plus común: 6mm)'],
                      ['Patrones Disponibles', '200+ couleures en stock: sólido, carey, cristal, mármol, dégradé, cuerno, veta de madera, laminado'],
                      ['Couleures Personnalisés', 'Coincidencia Pantone disponible — MOQ de plancha 50kg (chino) / 100kg (italiano)'],
                      ['Matériau de Lente', 'Polycarbonate / TAC Polarisé / CR-39 Óptico / Cristal'],
                      ['Ancho de Lente', '48mm - 58mm (varía según style de monture)'],
                      ['Ancho de Pont', '16mm - 22mm'],
                      ['Largo de Patilla', '140mm / 145mm / 150mm'],
                      ['Bisagras', 'Acero inoxidable de 5 barriles norme / charnières de muelle opcionales (+$0.30/paire)'],
                      ['Protection UV', 'UV400 — bloquea el 100% de radiation UVA et UVB'],
                      ['Proceso de Production', 'Corte CNC → tamboreado (3-5 jours) → pulido a mano (20-30 min) → ensamblaje → QC'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 unidades par modelo — mezcla de couleures permitida / 300 pcs para formas personnalisées'],
                      ['Tarifa de Molde (Forma Personalizada)', '$800 - $1.500 único — exento en commandes superiores a 1.000 pcs'],
                      ['Tiempo de Échantillon', '5-7 jours ouvrables'],
                      ['Tiempo de Production', '20-28 jours norme / 14-18 jours urgente (+15%)'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hovoir:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Couleur and Pattern Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Couleures et Patrones</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Ici est où el acétate realmente brilla comparado avec autres matériaux. La gama de couleures et patrones qui puedes conseguir est esencialmente ilimitada.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🐢 Carey</h3>
                <p className="text-sm text-gray-600">El clásico. Disponible en marron/ambre (tradicional), rubio/miel (plus claro, plus trendy), Havana oscuro (rico, casi noir) et voirde/oliva (único). El carey multicapa italiano tiene plus profundidad et variation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">💎 Cristal / Transpaireente</h3>
                <p className="text-sm text-gray-600">Totalmente transpaireente ou avec un tinte sutil. Cristal transpaireente, cristal gris, cristal champán, cristal bleu, cristal rose. La clave est la claridad óptica — el acétate transpaireente barato se ve lechoso. El notre no.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🪨 Mármol et Piedra</h3>
                <p className="text-sm text-gray-600">Se consigue laminando et prensando planchas de acétate de diferentes couleures. Mármol blanc, mármol noir, jade voirde, ónix rose. Chaque paire tiene patrones de remolino légèremente diferentes — chaque monture est única.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🌅 Degradado / Bicouleur</h3>
                <p className="text-sm text-gray-600">Oscuro arriba, claro abajo (o de lado a lado). Noir a transpaireente, marron a miel, bleu marino a bleu cielo, vino a rose. Se crea laminando dos planchas de acétate en diferentes proporciones de espoidsr.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🎨 Couleures Sólidos</h3>
                <p className="text-sm text-gray-600">Noir mat, noir brillant, bleu marino, voirde bosque, burdeos, crema, rose pastel, bleu cielo — et todo le intermedio. Coincidencia Pantone para couleures personnalisés. La profundidad du pulido en acétate sólido est impresionante.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🦌 Efecto Cuerno et Madera</h3>
                <p className="text-sm text-gray-600">Patrones de acétate qui imitan cuerno de búfalo natural ou veta de madera. Populares en marchés japonés et coreano. Chaque paire se ve único debido à la variation natural dans le patrón de la plancha de acétate.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Options de Personnalisation</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Las montures de acétate proposez-vous la mayor gama de personnalisation de cualquier matériau de monture. Esto est le qui nous pouvons hacer.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estampado en caliente</strong> — lámina dorada, plateada ou de couleur dans le interior de la branche. Clásico, elegante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>En relieve/bajo relieve</strong> — prensado dans la superficie du acétate. Sutil et permanente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hilo de alma personnalisé</strong> — votre logo grabado a láser dans le alambre metálico de la charnière, visible quand la branche se despliega.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica en branche</strong> — placa de logo en aleation de zinc ou acier inoxydable remachada à la branche.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📐 Design de Monture</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Formas personnalisées</strong> — envíanos un boceto ou archivo CAD et cortaremos un molde CNC ($800-1.500 único)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Ancho de branche</strong> — fina (4mm) para look minimal, gruesa (6-8mm) para declaration atrevida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Pont keyhole vs silla</strong> — diferentes styles de pont nasal para diferentes formas de cara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Style de punta de branche</strong> — recta, curvada ou tipo pala</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Emballage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches de piel</strong> — cierre magnético, logo en bajo relieve. La opción premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estuches rígidos EVA</strong> — durables, légers, impresión de logo a todo couleur.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bolsa de microfibra</strong> — impresa personnalisée, sirve également comme pan de limpieza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cajas listas para retail</strong> — impresión a todo couleur, inserto personnalisé, pestaña colgante, etiqueta avec código de barras.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Acetate */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Por Qué el Acétate Tiene Prix Premium</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Las montures de acétate se venden a $60-200+. Ici está par qué los clients pagan ese premium — et par qué funciona para vos marges.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">✋ Proceso Artesanal</h3>
                <p className="text-gray-300 text-sm">Chaque paire est tocado par manos humanas múltiples veces. En un mundo de production masiva, eso importa. Los clients pueden sentir la diferencia — et pagarán par ella. &ldquo;Pulido a mano&rdquo; est une declaration de marketing genuina qui resuena.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🎨 Profundidad de Couleur</h3>
                <p className="text-gray-300 text-sm">Los couleures du acétate están en capas a través du matériau, no pintados dans la superficie. Un patrón carey tiene profundidad real — puedes voir diferentes capas depuis diferentes ángulos. Esto est físicamente imposible avec plástico inyectado.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">⚖️ Qualité Percibida</h3>
                <p className="text-gray-300 text-sm">El poids (25-35g), la calidez du matériau contra la piel, la profundidad du pulido — todo dans le acétate comunica qualité. Votre client le coge et sabe qui esto no est un paire de lunettes de $15.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🌿 Origen Natural</h3>
                <p className="text-gray-300 text-sm">El acétate de celulosa se deriva de fibras de algodón et pulpa de madera — est un matériau de origen vegetal, no derivado du petróleo. Eso importa chaque vez plus aux consumidores eco-conscientes et vous da un ángulo de sostenibilidad.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🔧 Ajustabilidad</h3>
                <p className="text-gray-300 text-sm">El acétate puede ser ajustado par cualquier óptico avec calor suave. La monture puede remodelarse para un ajuste personnalisé. Intenta eso avec nylon inyectado — se rompe. Esta ajustabilidad extiende la vida útil du produit et reduce devoluciones.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">💰 Matemática de Márgenes</h3>
                <p className="text-gray-300 text-sm">Una monture de acétate cuesta $6-16 par paire de producir. Se vende au retail a $60-200. Eso est un marge de 4-12x — meilleur qui la mayoría de produits de consumo. Incluso después de contabilizar marketing, emballage et distribution, los marges en lunettes de acétate sont exceverres.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes sur Lunettes de Acétate</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {acetateFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produits Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/fr/produits/oeil-de-chat" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😸</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Cat-Eye</h3>
                <p className="text-gray-600 text-sm">Nuestro style de acétate plus popular para marques de mujer. Disponible en tous los couleures et patrones de acétate.</p>
              </Link>
              <Link href="/fr/produits/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Wayfarer</h3>
                <p className="text-gray-600 text-sm">La forma de acétate plus vendida a nivel mundial. Clásica, voirsátil, et el primer produit plus sûr para nouvelles marques.</p>
              </Link>
              <Link href="/fr/produits/rond" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Lunettes Redondas</h3>
                <p className="text-gray-600 text-sm">Redondas de inspiration vintage en cristal, carey et acétate sólido. En fuerte tendencia en marchés asiáticos.</p>
              </Link>
              <Link href="/fr/blog/oem-vs-odm" className="bg-white rounded-xl p-6 border border-gray-100 hovoir:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hovoir:text-primary-600 transition-couleurs mb-2">Guía OEM vs ODM</h3>
                <p className="text-gray-600 text-sm">Non sabes si usar notres designs existentes ou crear los tuyos propios? Esta guía desglosa los pros, contras et coûts.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Listo para Crear Votre Collection de Acétate?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Envíanos vos ideas de monture, preferencias de couleur et punto de prix objetivo. Te recomendaremos el grado de acétate adecuado, vous expédieremos échantillons de matériau et tendrás échantillons en vos manos en une semana. Acétate italiano ou chino — vous ayudaremos a tomar la decisión correcta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="bg-white text-primary-600 hovoir:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-couleurs">
                Commander Devis
              </Link>
              <Link href="/fr/produits" className="border-2 border-white text-white hovoir:bg-white hovoir:text-primary-600 font-bold py-3 px-8 rounded-lg transition-couleurs">
                Voir Tous les Produits
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
