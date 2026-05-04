import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Óculos de Sol Wayfarer no Atacado | Fabricante de Óculos Wayfarer OEM - EyeView',
  description: 'Fabricante de óculos de sol wayfarer no atacado. Armações premium de acetato, lentes UV400/polarizadas, impressão de logo personalizado. MOQ 100 pçs. Preços de fábrica a partir de $5/par. Amostras grátis!',
  keywords: 'óculos de sol wayfarer no atacado, fabricante de óculos wayfarer, óculos wayfarer personalizados, óculos de acetato no atacado, óculos de sol no atacado, fabricante de óculos, OEM óculos wayfarer',
  openGraph: {
    title: 'Óculos de Sol Wayfarer no Atacado | Fabricante OEM - EyeView',
    description: 'Fabricante de óculos de sol wayfarer no atacado. Armações premium de acetato, logo personalizado, lentes UV400/polarizadas. MOQ 100 pçs. Direto de fábrica.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/produtos/wayfarer',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/wayfarer',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/wayfarer',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/wayfarer',
    },
  },
}

const wayfarerFaqs = [
  {
    question: 'Qual é a diferença entre óculos wayfarer de acetato e de plástico?',
    answer: 'Uma diferença grande, na verdade. O plástico padrão moldado por injeção (PC ou nylon) é barato e leve mas também parece e dá uma sensação de barato: fino, brilhante, meio oco. O acetato é um material de origem vegetal (feito de fibras de algodão e polpa de madeira) que é cortado de chapas sólidas e polido à mão. Tem uma profundidade de cor real, padrões naturais que não podem ser falsificados com plástico, e um peso que parece substancial. Nosso acetato vem de fornecedores italianos como Mazzucchelli que fabricam o material desde 1849. A diferença de preço é de cerca de $2-3 por par, mas o salto no valor percebido é enorme. Versão curta: se você quer cobrar mais de $20 no varejo, vá de acetato.',
  },
  {
    question: 'Quantas cores e padrões vocês oferecem para armações wayfarer?',
    answer: 'Mais de 200 e contando. Os clássicos — preto sólido, tartaruga escuro, tartaruga mel — estão sempre em estoque e prontos para enviar. Mas também temos cores transparentes (cristal, azul claro, rosa blush), combinações bicolor, efeitos mármore, padrões de veio de madeira e algumas coisas bem chamativas como acetato com glitter. Se você tem uma cor Pantone específica ou um padrão em mente, podemos conseguir chapas de acetato personalizadas — isso leva 7-10 dias extras e o MOQ sobe para 300 peças, mas vale a pena se você quer algo que ninguém mais tenha.',
  },
  {
    question: 'Como os wayfarers se comparam com os aviadores para minha marca?',
    answer: 'Sinceramente, são os dois estilos que recomendamos para toda marca nova começar, mas têm pontos fortes diferentes. Os wayfarers são de acetato, então vêm em muito mais cores e padrões — isso significa mais SKUs e mais variedade visual na sua página de produtos ou prateleira. Também custam menos por par ($5-11 vs $8-14 para aviadores) então suas margens podem ser melhores. Os aviadores são de metal e têm uma sensação mais premium e elegante. O wayfarer é mais casual, mais colorido, mais unissex. Se você tiver que escolher um: wayfarers para volume e variedade, aviadores para posicionamento premium. Mas falando sério, a maioria dos nossos clientes bem-sucedidos trabalha com ambos.',
  },
  {
    question: 'Quais opções de logo funcionam melhor em óculos wayfarer?',
    answer: 'Armações de acetato dão opções diferentes das de metal. O método mais popular é a estampagem a quente (lâmina dourada ou prateada) no interior da haste — fica limpo e premium. Também fazemos serigrafia (qualquer cor, interior ou exterior da haste), logos em relevo ou baixo-relevo pressionados diretamente no acetato, e insígnias de metal inseridas na haste. Para a frente da armação, alguns clientes colocam um pequeno rebite metálico ou tachão decorativo com seu logo. A estampagem a quente no interior da haste é onde a maioria das marcas começa — custa cerca de $0,15-0,20 extra por par.',
  },
  {
    question: 'Qual é o MOQ para óculos wayfarer personalizados?',
    answer: 'Igual a tudo que fabricamos — 100 peças por modelo. Você pode misturar cores dentro dessas 100, o que é ótimo para testar. Um primeiro pedido típico de uma marca nova se parece com algo assim: 30 pretos, 20 tartaruga, 20 transparentes, 15 preto fosco, 15 de algo divertido como azul ou rosa. Isso dá cinco opções na sua loja sem um compromisso financeiro enorme. Quando você faz novo pedido, a maioria dos clientes dobra nos 2-3 cores que venderam melhor e elimina as que não saíram.',
  },
]

const products = [
  {
    name: 'Wayfarer Preto Clássico',
    description: 'O que começou tudo e continua superando todos os outros em vendas. Acetato preto sólido, lentes cinza UV400, acabamento polido. É o equivalente em óculos de sol a uma camiseta branca — combina com tudo e nunca sai de moda. Enviamos mais deste SKU individual do que de qualquer outro wayfarer do nosso catálogo. Se você está testando o mercado e só pode escolher uma cor, é esta. Toda e cada marca de óculos do planeta tem um wayfarer preto, e tem uma razão para isso.',
    price: '$5,50 - $9,00',
    moq: '100 pçs',
    features: ['Acetato Preto Sólido', 'Lente Cinza UV400', 'Acabamento Polido', 'Dobradiças de Mola'],
  },
  {
    name: 'Wayfarer Tartaruga',
    description: 'Acetato tartaruga escuro clássico — aquele padrão de redemoinhos âmbar e marrom que tem sido um básico de moda masculina por décadas. Cada par tem um padrão ligeiramente diferente por causa de como as chapas de acetato são cortadas, o que na verdade adiciona à sensação premium (não existem dois pares exatamente iguais). Usamos um tartaruga profundo e quente que fotografa bem e atrai todas as faixas etárias. É o segundo mais vendido da nossa linha wayfarer e muitas marcas o usam como sua opção "premium" ao lado do preto.',
    price: '$6,00 - $10,00',
    moq: '100 pçs',
    features: ['Padrão Tartaruga Escuro', 'Único por Par', 'Lente Degradê Marrom', 'Polido à Mão'],
  },
  {
    name: 'Wayfarer Cristal Transparente',
    description: 'Armação de acetato transparente com um leve brilho que captura a luz. Este estilo explodiu nos últimos anos — está por todo Instagram e TikTok, e o público jovem (18-30) responde muito bem. Combinado com lentes levemente tingidas em cinza ou azul para um visual limpo e moderno. A armação transparente também torna o logo mais visível se você faz branding no interior da haste. Grande vendedor para marcas fashion-forward e lojas de praia/resort. Espere que este fotografe muito bem para seus anúncios.',
    price: '$6,50 - $10,50',
    moq: '100 pçs',
    features: ['Acetato Transparente', 'Lente Tingida Suave', 'Favorito nas Redes Sociais', 'Branding Visível'],
  },
  {
    name: 'Wayfarer Preto Fosco',
    description: 'Mesma forma que o preto clássico mas com um acabamento fosco de toque suave que muda completamente a vibe. A superfície fosca é conseguida através de um processo especial de tamboreamento que remove o brilho sem afetar a durabilidade. Parece mais moderno, mais discreto — como a diferença entre uma capinha de celular brilhante e fosca. Combinado com lentes escuras esfumaçadas. Este vai bem com marcas streetwear, marcas minimalistas e qualquer marca que busque um visual de "luxo discreto". Custo por par ligeiramente mais alto pelo passo extra de acabamento.',
    price: '$6,50 - $10,50',
    moq: '100 pçs',
    features: ['Fosco Toque Suave', 'Acabamento Tamboreado', 'Lente Esfumaçada Escura', 'Estética Moderna'],
  },
  {
    name: 'Wayfarer Degradê Azul Oceano',
    description: 'Uma armação de acetato azul translúcido que degrada de azul marinho profundo no topo para azul mais claro embaixo — realmente chamativo pessoalmente. Combinado com lentes degradê azuis que combinam com o tom da armação. Este é o tipo de produto que faz alguém parar de rolar. Não é para toda marca (é mais declaração do que básico), mas para linhas resort, coleções de verão e marcas que querem se destacar em uma prateleira cheia, funciona. Vemos muitos pedidos deste para edições limitadas e lançamentos sazonais.',
    price: '$7,00 - $11,00',
    moq: '100 pçs',
    features: ['Acetato Degradê Azul', 'Lente Combinando', 'Peça de Declaração', 'Pronto para Edição Limitada'],
  },
  {
    name: 'Wayfarer Acetato Vermelho',
    description: 'Acetato vermelho ousado e sem desculpas que exige atenção. Não é vermelho cereja nem vermelho bombeiro — é mais um bordô-vermelho profundo e sofisticado que transmite confiança sem ser espalhafatoso. Combinado com lentes marrons para calorosidade. É um movimento poderoso em uma coleção: atrai o olhar no grid do seu site, destaca no Instagram e sinaliza que sua marca não tem medo de cor. Vende especialmente bem para mulheres e para marcas que miram no público consciente de moda. Um acréscimo inteligente ao lado dos seus básicos preto e tartaruga.',
    price: '$7,00 - $11,00',
    moq: '100 pçs',
    features: ['Acetato Vermelho Profundo', 'Lente Quente Marrom', 'Chama Atenção', 'Fashion Forward'],
  },
]

export default function WayfarerPagePt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Wayfarer no Atacado',
        description: 'Óculos de sol wayfarer clássicos com armações premium de acetato. Mais de 200 cores e padrões disponíveis. Opções de lentes UV400 e polarizadas. Personalização OEM completa com impressão de logo.',
        minPrice: '5.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos Wayfarer', url: 'https://eyeviewsunglasses.com/pt/produtos/wayfarer' }
      ]} />
      <FAQPageSchema faqs={wayfarerFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Óculos Wayfarer</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Óculos de Sol Wayfarer no Atacado
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Óculos de Sol Wayfarer no Atacado - Fabricante de Armações de Acetato Personalizadas"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                O wayfarer tem uma história que nenhum outro modelo de óculos de sol pode igualar. Em 1952, um <a href="https://en.wikipedia.org/wiki/Ray-Ban_Wayfarer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">designer chamado Raymond Stegeman</a> na Bausch &amp; Lomb fez algo radical: abandonou o metal completamente e projetou uma armação de óculos feita de um novo material chamado acetato. O resultado era ousado, angular e completamente diferente de tudo que as pessoas tinham visto antes. Parecia o futuro.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hollywood percebeu rápido. James Dean usou wayfarer em <em>Juventude Transviada</em>. Audrey Hepburn usou em <em>Bonequinha de Luxo</em>. Nos anos 60, os wayfarers estavam em todo lugar — em estrelas do rock, políticos, artistas e pessoas comuns que simplesmente queriam ficar bem. As vendas caíram nos anos 70 e 80, mas então <em>Top Gun</em> e <em>Clube dos Cinco</em> os trouxeram de volta com força. O padrão se repetiu a cada década desde então: wayfarers caem ligeiramente, depois voltam mais fortes. A essa altura, chamá-los de &ldquo;tendência&rdquo; não faz sentido. São um item permanente.
              </p>
              <p className="text-lg leading-relaxed">
                Como <strong>fabricante de óculos wayfarer</strong>, produzimos essas armações em <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato de grau italiano</a> premium — o mesmo tipo de material usado por marcas de luxo que cobram $200-400 no varejo. O acetato é de origem vegetal (fibras de algodão e polpa de madeira), hipoalergênico, e tem uma riqueza de cor que o plástico moldado por injeção simplesmente não consegue replicar. Temos mais de 200 cores e padrões em estoque, e podemos conseguir acetato personalizado para requisitos únicos de marca. Com preços a partir de apenas $5,50 por par, wayfarers no atacado oferecem algumas das melhores margens de todo o negócio de óculos.
              </p>
            </div>
          </div>

          {/* Aviator vs Wayfarer Comparison */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-6">Wayfarer vs Aviador: Comparação Rápida</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Muitos dos nossos clientes perguntam com qual começar. Aqui vai a comparação honesta.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left font-semibold text-gray-700"></th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">🔲 Wayfarer</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">✈️ <Link href="/pt/produtos/aviador" className="text-primary-600 hover:underline">Aviador</Link></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-6 py-3 font-medium">Material da Armação</td><td className="px-6 py-3 text-gray-600">Acetato / Plástico PC</td><td className="px-6 py-3 text-gray-600">Aço inoxidável / Alumínio / Titânio</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Faixa de Preço</td><td className="px-6 py-3 text-gray-600">$5 - $11 / par</td><td className="px-6 py-3 text-gray-600">$8 - $22 / par</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Opções de Cor</td><td className="px-6 py-3 text-gray-600">200+ (grande variedade)</td><td className="px-6 py-3 text-gray-600">5-8 cores de revestimento</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Peso</td><td className="px-6 py-3 text-gray-600">25-32g</td><td className="px-6 py-3 text-gray-600">15-32g (varia por metal)</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Melhor Método de Logo</td><td className="px-6 py-3 text-gray-600">Estampagem a quente / relevo</td><td className="px-6 py-3 text-gray-600">Gravação a laser</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Estilo</td><td className="px-6 py-3 text-gray-600">Casual, colorido, ousado</td><td className="px-6 py-3 text-gray-600">Elegante, clássico, premium</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Ideal Para</td><td className="px-6 py-3 text-gray-600">Volume, variedade, moda</td><td className="px-6 py-3 text-gray-600">Posicionamento premium</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Óculos de Sol Wayfarer no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nossa Coleção Wayfarer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
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
                      <Link href="/pt/contato" className="btn-primary text-sm">Solicitar Orçamento</Link>
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
                      ['Material da Armação', 'Acetato de grau italiano (Mazzucchelli / similar) ou Plástico PC'],
                      ['Peso da Armação', 'Acetato: 28-32g | Plástico PC: 20-24g'],
                      ['Material da Lente', 'Policarbonato / TAC Polarizada / CR-39 Óptica'],
                      ['Largura da Lente', '50mm / 52mm / 54mm / 56mm'],
                      ['Largura da Ponte', '18mm / 20mm / 22mm'],
                      ['Comprimento da Haste', '140mm / 145mm / 150mm'],
                      ['Altura da Lente', '38mm - 44mm'],
                      ['Proteção UV', 'UV400 — bloqueia 100% da radiação UVA e UVB'],
                      ['Polarização', 'Opcional película TAC de 7 camadas — 99% de redução de reflexo'],
                      ['Cores da Armação', '200+ cores de acetato: sólido, tartaruga, transparente, mármore, degradê, personalizado'],
                      ['Cores da Lente', 'Cinza, Marrom, Verde, Azul, Rosa, Amarelo, Espelhado, Degradê — todas disponíveis'],
                      ['Dobradiças', 'Dobradiças de mola de 5 barris (padrão) ou 7 barris (premium)'],
                      ['Ponte Nasal', 'Ponte integrada keyhole ou sela — moldada na armação'],
                      ['Certificações', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 peças por modelo — mistura de cores permitida'],
                      ['Prazo de Amostra', '3-5 dias úteis'],
                      ['Prazo de Produção', '15-20 dias padrão / 10-12 dias urgente'],
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

          {/* Acetate Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Por Que o Acetato Importa (E Por Que Plástico Barato Não Serve)</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Se você vai vender wayfarers, precisa entender o material. Este é o fator mais importante em quão premium seu produto parece.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-green-700">✅ Acetato (O Que Recomendamos)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  O <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato</a> é feito de fibras de algodão e polpa de madeira — é tecnicamente um material de origem vegetal, o que é um bom ângulo de sustentabilidade para o marketing. É cortado de chapas sólidas (não moldado por injeção), o que significa que as cores vão de lado a lado. Arranhe a superfície e a cor ainda está lá. O material tem uma calorosidade e profundidade naturais que parecem caras. Também é hipoalergênico e ajustável — ópticos podem ajustar armações de acetato com calor para um ajuste personalizado.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nosso acetato vem de fabricantes italianos estabelecidos como <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> (fundada em 1849) que fornecem a mesma matéria-prima para casas de óculos de luxo. A diferença de custo vs plástico é de $2-3/par, mas o salto no valor percebido no varejo é de $20-40. É a melhor melhoria em retorno sobre investimento que você pode fazer.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-500">⚠️ PC / Plástico Moldado por Injeção</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Também oferecemos isso, e tem seu lugar — principalmente para produtos promocionais, linhas econômicas abaixo de $15 no varejo e óculos infantis onde a durabilidade importa mais que a sensação. O plástico PC é mais leve (20-24g vs 28-32g do acetato), mais barato ($3,50-6/par) e virtualmente indestrutível.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mas não tem sensação premium. A cor é superficial (pode ser arranhada), o acabamento é brilhante de um jeito que grita &ldquo;barato&rdquo; e não há variação natural de padrão. Se sua marca está posicionada acima dos óculos de posto de gasolina, vá de acetato. Se você está fazendo um brinde promocional de $5 para uma feira, plástico está ok. Não julgamos — fabricamos ambos.
                </p>
              </div>
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Personalização para Óculos Wayfarer</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              O acetato abre opções de branding que você não tem com armações metálicas. Veja o que funciona melhor.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Opções de Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estampagem a quente</strong> — lâmina dourada ou prateada prensada na haste. Limpo, luxuoso, nosso mais popular para wayfarers. ~$0,15-0,20/par.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Serigrafia</strong> — qualquer cor, interior ou exterior da haste. Mais visível que a estampagem a quente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Relevo / baixo-relevo</strong> — logo prensado diretamente no acetato. Sutil, tátil, muito premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Insígnia metálica</strong> — pequeno logo de metal inserido na haste. Efeito 3D que se destaca.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Cor e Padrão</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>200+ cores de acetato em estoque</strong> — sólido, tartaruga, transparente, mármore, veio de madeira, degradê</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Igualação Pantone personalizada</strong> — nos dê um código de cor e conseguimos o acetato sob medida (MOQ 300 pçs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Armações bicolor</strong> — cor diferente interior vs exterior para um visual em camadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Acabamento fosco ou brilhante</strong> — brilhante é padrão, fosco custa ~$0,30/par extra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Embalagem</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estojos rígidos:</strong> EVA, couro sintético ou papelão — todos com seu logo. $0,80-2,50/un dependendo do material.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bolsas de microfibra:</strong> impressas com sua marca, servem como pano de limpeza. $0,30-0,50/un.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Caixas de varejo:</strong> impressão em cores completas, tamanho personalizado, com inserto de espuma ou papelão. $0,60-1,50/un.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> panos de limpeza ($0,15), cartões de garantia ($0,08), tags ($0,10), adesivos ($0,05)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys */}
          <section className="mb-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Quem Compra Wayfarer no Atacado?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Os wayfarers são a forma de armação mais versátil em óculos. Veja quem está comprando e por quê.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🚀 Lançamentos de Marcas Novas</h3>
                <p className="text-gray-600 text-sm">Marcas de óculos iniciantes que querem um estilo seguro e que agrade a todos para lançar. O baixo custo por par deixa mais orçamento para marketing e embalagem.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛒 Vendedores E-Commerce</h3>
                <p className="text-gray-600 text-sm">Vendedores de Shopify, Amazon e Mercado Livre que precisam de um catálogo profundo de cores. As 200+ opções de acetato significam que você pode ter 10-20 anúncios únicos com uma única forma de armação.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎪 Empresas de Eventos e Promoção</h3>
                <p className="text-gray-600 text-sm">Eventos corporativos, festivais de música, casamentos, feiras — wayfarers de cor personalizada com logo são o brinde perfeito. As pessoas realmente guardam e usam.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏬 Lojas de Varejo e Boutiques</h3>
                <p className="text-gray-600 text-sm">Lojas físicas que querem sua própria marca. A variedade de cores permite encher um display com uma única forma de armação — o que simplifica o estoque.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">👗 Marcas de Moda e Vestuário</h3>
                <p className="text-gray-600 text-sm">Marcas de roupa adicionando óculos de sol como linha de acessórios. Wayfarers combinam com praticamente qualquer estética de moda, e a variedade de cores permite fazer coleções sazonais.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏖️ Resort e Turismo</h3>
                <p className="text-gray-600 text-sm">Hotéis, cruzeiros e lojas de turistas. Wayfarers personalizados com o nome do destino são ótimos souvenirs que as pessoas realmente usam — não mais um ímã de geladeira.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes sobre Óculos Wayfarer</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {wayfarerFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Você Também Pode Gostar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/produtos/aviador" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Aviador</h3>
                <p className="text-gray-600 text-sm">Armações metálicas, forma de gota, sensação premium. O outro &ldquo;indispensável&rdquo; em qualquer coleção de óculos. A maioria das marcas trabalha com aviadores e wayfarers.</p>
              </Link>
              <Link href="/pt/produtos/olho-de-gato" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😺</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Olho de Gato</h3>
                <p className="text-gray-600 text-sm">Se sua marca mira em mulheres, os olho de gato são o complemento perfeito aos wayfarers. Armações de acetato com pontas elevadas e um ar retrô-glam.</p>
              </Link>
              <Link href="/pt/produtos/polarizado" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Polarizados</h3>
                <p className="text-gray-600 text-sm">Adicione lentes polarizadas a qualquer wayfarer para um upgrade premium. Custa $2-3 a mais por par, permite cobrar $15-20 a mais no varejo.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Pedir Wayfarers?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Conte-nos quais cores e especificações você precisa e terá um orçamento de volta em 24 horas.
              Amostras são enviadas em 3-5 dias. Sem compromisso até que você dê o sinal verde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pt/contato" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Solicitar Orçamento
              </Link>
              <Link href="/pt/produtos" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Ver Todos os Produtos
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
