import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricante de Óculos de Sol de Acetato | Fábrica de Óculos Artesanais - EyeView',
  description: 'Fabricante de óculos de sol de acetato personalizados. Acetato italiano Mazzucchelli e acetato chinês premium. Armações polidas à mão, mais de 200 cores. MOQ 100 pçs. Corte CNC, tamboreamento, direto de fábrica.',
  keywords: 'fabricante óculos acetato, fábrica óculos acetato personalizados, óculos acetato italiano, óculos Mazzucchelli, óculos polidos à mão, óculos acetato de celulose, armações acetato no atacado',
  openGraph: {
    title: 'Fabricante de Óculos de Sol de Acetato | Fábrica de Óculos Artesanais - EyeView',
    description: 'Fabricante de óculos de sol de acetato personalizados. Acetato italiano Mazzucchelli e acetato chinês premium. Polidos à mão, mais de 200 cores. MOQ 100 pçs. Direto de fábrica.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/produtos/acetato',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/acetato',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/acetate',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/acetato',
    },
  },
}

const acetateFaqs = [
  {
    question: 'Qual é a diferença entre o acetato italiano Mazzucchelli e o acetato chinês?',
    answer: 'A resposta honesta é que a diferença diminuiu significativamente na última década, mas ainda existem diferenças reais. A Mazzucchelli (e outros fabricantes italianos como a Lapo) usa um processo de extrusão mais lento e controlado que produz chapas com maior consistência na profundidade de cor e distribuição de padrões — especialmente visível em padrões complexos como tartaruga multicamada ou cores transparentes cristalinas. O acetato italiano também tende a polir com um brilho ligeiramente superior. O acetato chinês de produtores de primeira linha como Shenzhen Xin Rui ou Taizhou Huangyan melhorou dramaticamente e é genuinamente bom — excelente variedade de cores, boa consistência e cerca de 30-40% mais barato. Para a maioria dos preços de varejo abaixo de US$80, o acetato chinês de alta qualidade é a escolha inteligente. Para marcas premium com varejo acima de US$100, onde o cliente pode comparar sua armação lado a lado com Céline ou Tom Ford, o acetato italiano oferece aquele último 10% de refinamento.',
  },
  {
    question: 'Quanto tempo leva o processo de produção do acetato?',
    answer: 'Mais do que você imagina — e é exatamente isso que torna o acetato especial. Do corte CNC ao controle de qualidade final, um único par leva de 5 a 7 dias de processamento efetivo. O grande consumidor de tempo é o tamboreamento (3-5 dias para suavizar todas as marcas de usinagem) e o polimento manual (20-30 minutos por par por trabalhadores qualificados). O prazo total de produção de um pedido é tipicamente de 20-28 dias porque processamos em lotes em cada etapa. Pedidos urgentes podem ser feitos em 14-18 dias, mas cobramos uma sobretaxa de 15% porque precisamos interromper outras linhas de produção. Pares de amostra levam de 5 a 7 dias úteis.',
  },
  {
    question: 'Quais cores e padrões vocês fazem em acetato?',
    answer: 'Essencialmente ilimitadas. Temos mais de 200 cores e padrões de chapas de acetato em estoque de nossos fornecedores — cores sólidas, tartaruga (marrom clássico, loiro, escuro), cristal/transparente (transparente, cinza, champanhe, azul), mármore, grão de madeira, efeito chifre, degradê e padrões laminados multicamada. Para cores personalizadas, você nos fornece um código Pantone e o fornecedor de acetato produz uma chapa correspondente. O desenvolvimento de padrões personalizados (como uma mistura exclusiva de tartaruga ou um padrão com marca) também é possível — o pedido mínimo de chapa é geralmente de 50-100kg, o que se traduz em aproximadamente 500-1.000 pares, dependendo do tamanho da armação. Para pedidos menores, recomendamos fortemente escolher entre as cores em estoque — há tantas que você quase certamente encontrará o que precisa.',
  },
  {
    question: 'Como os clientes devem cuidar dos óculos de acetato?',
    answer: 'O acetato é mais resistente do que a maioria das pessoas imagina, mas há algumas coisas a saber. Primeiro, mantenha-os longe de calor extremo — não os deixe no painel do carro no verão. O acetato amolece em torno de 70-80°C (158-176°F), então o calor sustentado pode deformar a armação. Segundo, evite acetona e solventes fortes — removedor de esmalte danificará a superfície. Terceiro, limpe com água morna e sabão neutro, depois seque com um pano macio. Sem limpadores de lentes à base de álcool. A boa notícia é que armações de acetato podem ser ajustadas por seu óptico com calor suave, e arranhões menores podem frequentemente ser polidos. Incluímos cartões de instruções de cuidados com cada pedido sem custo adicional — isso evita que seus clientes cometam os erros mais comuns e reduz sua taxa de devolução.',
  },
  {
    question: 'Qual é o MOQ para óculos de acetato personalizados?',
    answer: 'O MOQ padrão é de 100 peças por modelo. Você pode misturar cores dentro dessas 100 — então 30 pretos, 30 tartaruga e 40 cristal transparente funciona perfeitamente. Se você quer um design de armação completamente personalizado (seu próprio formato, não um dos nossos moldes existentes), há uma taxa única de molde de US$800-1.500 dependendo da complexidade, e o MOQ para formatos personalizados é de 300 peças no primeiro pedido. Depois disso, reposições voltam a 100 peças. Para cores de chapa de acetato personalizadas (correspondência Pantone), o MOQ de chapa do fornecedor é tipicamente de 50-100kg. Mantemos uma grande biblioteca de cores em estoque para evitar esse mínimo para marcas menores.',
  },
  {
    question: 'Por que o acetato é mais caro que o plástico injetado?',
    answer: 'Porque quase todas as etapas requerem mãos humanas qualificadas. Armações injetadas (nylon, TR90, PC) são feitas por uma máquina em cerca de 30 segundos — injeta plástico quente em um molde, resfria, retira, pronto. Armações de acetato começam como chapas planas que são cortadas por CNC em formatos brutos, depois tamboreadas por 3-5 dias, depois polidas à mão uma a uma por 20-30 minutos. O conteúdo de mão de obra é dramaticamente maior. O custo do material também é mais alto — um quilograma de chapa de acetato de qualidade custa 3-5x mais que pellets de nylon para injeção. A recompensa é que armações de acetato parecem e se sentem premium de uma forma que o plástico injetado simplesmente não consegue igualar. As cores são mais ricas, a superfície tem mais profundidade e há um calor e peso no acetato que os clientes associam com qualidade. É por isso que armações de acetato têm varejo de US$60-200+ enquanto armações injetadas tipicamente chegam no máximo a US$40-60.',
  },
]

const products = [
  {
    name: 'Wayfarer Tartaruga Clássico',
    description: 'O wayfarer tartaruga é a armação de acetato mais solicitada na indústria óptica — e com razão. O padrão âmbar e marrom favorece todos os tons de pele, fotografa lindamente e transmite uma percepção premium instantânea. Produzimos este em acetato italiano Mazzucchelli (para linhas premium) e acetato chinês de alta qualidade (para posicionamento intermediário). Cada par é polido à mão para um brilho profundo que captura a luz de uma forma que o plástico injetado simplesmente não consegue replicar. Se você está construindo uma marca de óculos e precisa de um primeiro SKU seguro, provavelmente é este.',
    price: '$6.00 - $11.00',
    moq: '100 pçs',
    features: ['Padrão Tartaruga', 'Polido à Mão', 'Lentes UV400', 'Dobradiça 5 Barricas'],
  },
  {
    name: 'Redondo Cristal Transparente',
    description: 'O acetato transparente está em alta há três anos seguidos e não mostra sinais de desaceleração. Nossa armação redonda cristal transparente é opticamente clara — sem tom amarelado, sem opacidade — com aquele peso satisfatório do acetato que diz ao cliente que ele está segurando algo real. O formato redondo é enorme com o público indie/vintage e tem desempenho especialmente bom nos mercados asiáticos, onde formatos mais redondos se adequam a mais tipos de rosto. Podemos fazer totalmente transparente, ou um cristal cinza sutil, cristal champanhe ou cristal azul se você quer um toque de cor.',
    price: '$7.00 - $11.00',
    moq: '100 pçs',
    features: ['Cristal Transparente', 'Formato Redondo', 'Clareza Óptica', 'Múltiplas Opções de Tonalidade'],
  },
  {
    name: 'Olho de Gato Efeito Mármore',
    description: 'O padrão mármore é feito pela sobreposição de duas ou três chapas de acetato de cores diferentes, prensadas juntas, criando um efeito de pedra espiralado completamente único em cada par. Combinado com o formato olho de gato — que domina os óculos femininos desde seu retorno por volta de 2018 — esta é uma peça statement. Vemos estes tendo desempenho especialmente bom com marcas DTC fashion-forward e varejistas boutique. O padrão mármore está disponível em branco/cinza, preto/cinza, verde/dourado e rosa/branco, ou podemos desenvolver uma mistura de mármore personalizada.',
    price: '$8.00 - $12.00',
    moq: '100 pçs',
    features: ['Padrão Mármore', 'Formato Olho de Gato', 'Acetato Multicamada', 'Único Por Par'],
  },
  {
    name: 'Acetato Degradê Oversized',
    description: 'Acetato degradê bicolor — escuro no topo, clareando na parte inferior. Isso é alcançado laminando duas chapas de acetato de cores diferentes e controlando a proporção de espessura. A armação oversized proporciona excelente cobertura solar e tem aquele visual de marca de luxo que funciona bem no Instagram e em editoriais de moda. Disponível em degradês preto para transparente, marrom para mel, azul para transparente e vinho para rosa. Este estilo tem varejo facilmente de US$80-150 e o custo por par ainda começa abaixo de US$10. As margens são excelentes.',
    price: '$8.00 - $13.00',
    moq: '100 pçs',
    features: ['Degradê Bicolor', 'Armação Oversized', 'Acetato Laminado', 'Posicionamento Premium'],
  },
  {
    name: 'Quadrado Premium em Acetato Italiano',
    description: 'Para marcas que competem no topo do mercado. Esta armação usa exclusivamente acetato Mazzucchelli M49 — o mesmo grau usado por Tom Ford, Céline e Oliver Peoples. A diferença é visível na profundidade de cor e na qualidade do polimento. Nossos trabalhadores gastam mais de 30 minutos polindo à mão cada par para alcançar aquele acabamento de vidro líquido. Dobradiças de cinco barricas com fio de núcleo personalizado com logo. O formato quadrado é versátil — funciona tanto para homens quanto para mulheres — e as proporções são calibradas para um visual moderno, ligeiramente oversized, que fotografa bem. Este é o par que faz um comprador pegar sua armação em uma feira e dizer "uau, isso é bonito."',
    price: '$10.00 - $16.00',
    moq: '100 pçs',
    features: ['Mazzucchelli M49', 'Polimento Premium', 'Dobradiças 5 Barricas', 'Fio de Núcleo Personalizado'],
  },
  {
    name: 'Browline Acetato Efeito Chifre',
    description: 'O padrão efeito chifre imita o chifre de búfalo natural — estrias escuras sobre uma base mais clara que criam uma textura orgânica, quase amadeirada. Combinado com o formato browline (clubmaster), onde a metade superior da armação é acetato mais grosso e a inferior é fio de metal fino, este é um design híbrido diferenciado. O padrão chifre é especialmente popular nos mercados japonês e coreano, onde carrega uma estética sofisticada e intelectual. Cada par tem um padrão ligeiramente diferente por causa da variação natural na chapa de acetato. Usamos aço inoxidável alemão para o aro inferior de fio.',
    price: '$9.00 - $14.00',
    moq: '100 pçs',
    features: ['Padrão Efeito Chifre', 'Formato Browline', 'Híbrido Acetato + Metal', 'Fio de Aço Alemão'],
  },
]

export default function AcetatoPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol de Acetato Personalizados',
        description: 'Óculos de sol de acetato artesanais fabricados com acetato italiano Mazzucchelli e acetato chinês premium. Corte CNC, tamboreamento, polimento à mão. Mais de 200 cores e padrões. Personalização OEM completa.',
        minPrice: '6.00',
        maxPrice: '16.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos de Acetato', url: 'https://eyeviewsunglasses.com/pt/produtos/acetato' }
      ]} />
      <FAQPageSchema faqs={acetateFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Óculos de Sol de Acetato</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Fabricante de Óculos de Sol de Acetato - Óculos Artesanais Italianos Mazzucchelli no Atacado"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricante de Óculos de Sol de Acetato
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Se você já pegou um par de óculos de sol e imediatamente pensou &ldquo;estes parecem caros&rdquo;, você quase certamente estava segurando <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato de celulose</a>. Há uma razão pela qual toda grande marca de óculos de luxo — de Tom Ford a Chanel a Oliver Peoples — constrói suas armações com este material. O acetato tem uma profundidade e riqueza que o plástico injetado não consegue tocar. As cores são em camadas, não pintadas na superfície. O polimento tem um calor. E o peso — cerca de 25-35 gramas para uma armação típica — assenta no seu rosto com uma substância que diz &ldquo;isso custa mais de US$20.&rdquo;
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Fabrico óculos de sol de acetato há 14 anos, e o processo ainda me fascina. Diferente da moldagem por injeção — onde você injeta plástico quente em um molde e retira uma armação pronta em 30 segundos — armações de acetato começam como chapas planas de material que passam por uma jornada de produção de vários dias: corte CNC, tamboreamento, polimento manual, montagem e controle de qualidade. Cada par passa pelas mãos humanas múltiplas vezes. É isso que torna as armações de acetato mais caras, e também é o que as torna melhores.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Trabalhamos com duas categorias de acetato. Para marcas premium, usamos acetato italiano <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> — eles fazem isso desde 1849 e são o padrão ouro. Sua biblioteca de cores tem mais de 2.000 padrões e seu controle de qualidade é meticuloso. Para marcas posicionadas na faixa intermediária (US$40-80 no varejo), usamos acetato chinês de primeira linha de fornecedores como Shenzhen Xin Rui, que melhorou enormemente na última década e oferece ótimo custo-benefício. Ambos funcionam. Qual você escolhe depende do seu ponto de preço e da sua concorrência.
              </p>
              <p className="text-lg leading-relaxed">
                Nossa fábrica produz cerca de 300.000 pares de óculos de sol de acetato por ano em todos os estilos — <Link href="/pt/produtos/wayfarer" className="text-primary-600 hover:underline">wayfarers</Link>, <Link href="/pt/produtos/olho-de-gato" className="text-primary-600 hover:underline">olho de gato</Link>, <Link href="/pt/produtos/redondo" className="text-primary-600 hover:underline">redondos</Link>, quadrados, browlines e formatos personalizados. Operamos 12 máquinas CNC, 6 tambores e empregamos 45 trabalhadores de polimento manual. Deixe-me mostrar exatamente como transformamos uma chapa plana de acetato em um par de óculos de sol acabado.
              </p>
            </div>
          </div>

          {/* Production Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Como Fabricamos Óculos de Sol de Acetato</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              De chapa plana a armação acabada em 5-7 dias. Aqui está cada etapa — sem atalhos, sem segredos.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Seleção da Chapa e Corte CNC</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Começa com a chapa de acetato — um bloco de material de aproximadamente 6mm de espessura na cor ou padrão que você escolheu. Carregamos a chapa em uma máquina de fresagem CNC (controle numérico computadorizado) que corta a frente da armação e as hastes com especificações precisas. O CNC segue o arquivo CAD 3D da sua armação, cortando as ranhuras das lentes, formato da ponte e encaixes das dobradiças em uma única operação. Um operador CNC qualificado pode cortar cerca de 40-50 frentes de armação por hora. Nesta fase, a armação é bruta — você pode ver as marcas de usinagem e as bordas são afiadas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tamboreamento (3-5 Dias)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Esta é a etapa que surpreende as pessoas — as armações vão para um tambor rotativo cheio de lascas de madeira, pedra-pomes e uma pequena quantidade de água. O tambor gira lentamente por 3-5 dias, e o atrito gradualmente suaviza todas as marcas de usinagem e arredonda as bordas. É essencialmente um processo de lixamento muito lento e muito suave. Você não pode apressar isso. Nós tentamos. Se você encurtar o tamboreamento, a superfície não fica suave o suficiente para o polimento final ficar correto. Padrões diferentes requerem meios de tamboreamento diferentes — por exemplo, acetato cristal transparente precisa de meios mais finos para evitar micro-arranhões.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Polimento Manual (20-30 Minutos Por Par)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    É aqui que a mágica acontece e de onde vem a maior parte do custo. Um trabalhador qualificado pega cada armação e a polia à mão contra uma série de rodas de polimento de algodão, usando compostos de polimento progressivamente mais finos. A primeira roda remove quaisquer marcas de tamboreamento restantes. A segunda traz um semi-brilho. A terceira e última roda produz aquele brilho profundo, de vidro líquido, que faz as armações de acetato parecerem tão premium. Nossos trabalhadores de polimento têm em média 6 anos de experiência — leva cerca de um ano de treinamento antes que alguém possa polir consistentemente no nosso padrão. Esta é a etapa que armações de plástico do mercado de massa pulam inteiramente, e é a razão pela qual armações de acetato parecem e se sentem fundamentalmente diferentes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Montagem de Dobradiças e Encaixe das Lentes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Inserimos as dobradiças (tipicamente 5 barricas de aço inoxidável com fio de núcleo personalizado para seu logo), fixamos as hastes e montamos as lentes. Para armações de acetato, as lentes são cortadas para corresponder ao formato da ranhura e inseridas aquecendo suavemente a armação a cerca de 60°C, o que torna o acetato flexível o suficiente para aceitar a lente sem rachaduras por estresse. Cada dobradiça é testada quanto à ação suave e tensão adequada. O alinhamento das hastes é verificado para garantir que a armação assente nivelada em uma superfície plana.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Controle de Qualidade</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cada par passa por uma inspeção de 15 pontos: alinhamento das lentes, tensão das dobradiças, simetria das hastes, acabamento da superfície (verificando arranhões, marcas ou polimento irregular), consistência de cor, verificação de proteção UV (testada com um espectrômetro UV) e medições físicas contra a folha de especificações. Nossa taxa de rejeição no CQ de armações de acetato é de cerca de 3-5% — mais alta que armações injetadas (que ficam em torno de 1-2%) porque os processos manuais introduzem mais variabilidade. Pares rejeitados voltam para repolimento ou são descartados inteiramente. Não enviamos produtos de segunda.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Italian vs Chinese Acetate */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Acetato Italiano vs. Chinês: A Verdade</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Me perguntam isso em quase toda ligação. Aqui está uma comparação honesta de alguém que trabalha com ambos todos os dias.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-3">Acetato Italiano (Mazzucchelli, Lapo)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Profundidade de cor e consistência de padrão superiores — especialmente em padrões multicamada complexos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Polia para um brilho ligeiramente mais alto com menos esforço</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Biblioteca de mais de 2.000 padrões com décadas de P&amp;D por trás de cada um</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>&ldquo;Feito com acetato italiano&rdquo; é uma alegação de marketing legítima que ressoa com compradores premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>30-40% mais caro que acetato chinês equivalente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Prazos de entrega mais longos para cores personalizadas (6-8 semanas do pedido à entrega da chapa)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Melhor para: Varejo US$80+</div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-3">Acetato Chinês Premium</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Excelente qualidade de produtores de primeira linha — genuinamente bom, não um compromisso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Custo 30-40% menor por quilograma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Prazo mais rápido para cores personalizadas (3-4 semanas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>MOQ de chapa menor para cores personalizadas (50kg vs 100kg para italiano)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Padrões complexos (tartaruga multicamada) podem ter distribuição ligeiramente menos consistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Sem a história de marketing &ldquo;italiano&rdquo; (embora &ldquo;acetato de celulose premium&rdquo; ainda funcione)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Melhor para: Varejo US$40-80</div>
              </div>
            </div>

            <p className="text-gray-500 text-center mt-8 text-sm">
              Minha recomendação: comece com acetato chinês para validar seus designs e pontos de preço. Mude para italiano para seus produtos estrela depois de confirmar a demanda. Muitas marcas de sucesso usam ambos — italiano para sua linha principal, chinês para sua coleção do dia a dia.
            </p>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Óculos de Sol de Acetato no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nossa Coleção de Acetato</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
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
                      ['Material da Armação', 'Acetato de celulose — Italiano (Mazzucchelli/Lapo) ou chinês premium'],
                      ['Peso da Armação', '25-35g dependendo do tamanho e espessura da armação'],
                      ['Espessura da Chapa', '5mm / 6mm / 8mm (mais comum: 6mm)'],
                      ['Padrões Disponíveis', 'Mais de 200 cores em estoque: sólidas, tartaruga, cristal, mármore, degradê, chifre, grão de madeira, laminados'],
                      ['Cores Personalizadas', 'Correspondência Pantone disponível — MOQ de chapa 50kg (chinês) / 100kg (italiano)'],
                      ['Material das Lentes', 'Policarbonato / TAC Polarizado / CR-39 Óptico / Vidro'],
                      ['Largura das Lentes', '48mm - 58mm (varia conforme o estilo da armação)'],
                      ['Largura da Ponte', '16mm - 22mm'],
                      ['Comprimento das Hastes', '140mm / 145mm / 150mm'],
                      ['Dobradiças', '5 barricas em aço inoxidável padrão / dobradiças com mola opcionais (+$0.30/par)'],
                      ['Proteção UV', 'UV400 — bloqueia 100% da radiação UVA e UVB'],
                      ['Processo de Produção', 'Corte CNC → tamboreamento (3-5 dias) → polimento manual (20-30 min) → montagem → CQ'],
                      ['Certificações', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 peças por modelo — mistura de cores permitida / 300 pçs para formatos personalizados'],
                      ['Taxa de Molde (Formato Personalizado)', '$800 - $1.500 única — dispensada em pedidos acima de 1.000 pçs'],
                      ['Prazo de Amostra', '5-7 dias úteis'],
                      ['Prazo de Produção', '20-28 dias padrão / 14-18 dias urgente (+15%)'],
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

          {/* Color and Pattern Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Cores e Padrões</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              É aqui que o acetato realmente brilha comparado a outros materiais. A variedade de cores e padrões que você pode alcançar é essencialmente ilimitada.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🐢 Tartaruga</h3>
                <p className="text-sm text-gray-600">O clássico. Disponível em marrom/âmbar (tradicional), loiro/mel (mais claro, mais moderno), Havana escuro (rico, quase preto) e verde/oliva (único). A tartaruga multicamada italiana tem mais profundidade e variação.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">💎 Cristal / Transparente</h3>
                <p className="text-sm text-gray-600">Totalmente transparente ou com um tom sutil. Cristal transparente, cristal cinza, cristal champanhe, cristal azul, cristal rosa. O segredo é a clareza óptica — acetato transparente barato parece leitoso. O nosso não.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🪨 Mármore e Pedra</h3>
                <p className="text-sm text-gray-600">Alcançado pela sobreposição e prensagem de chapas de acetato de cores diferentes. Mármore branco, mármore preto, jade verde, ônix rosa. Cada par tem padrões de espiral ligeiramente diferentes — cada armação é única.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🌅 Degradê / Bicolor</h3>
                <p className="text-sm text-gray-600">Escuro no topo, claro na parte inferior (ou lado a lado). Preto para transparente, marrom para mel, marinho para azul céu, vinho para rosa. Criado pela laminação de duas chapas de acetato em proporções de espessura diferentes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🎨 Cores Sólidas</h3>
                <p className="text-sm text-gray-600">Preto fosco, preto brilhante, marinho, verde floresta, bordô, creme, rosa pastel, azul céu — e qualquer coisa entre eles. Correspondência Pantone para cores personalizadas. A profundidade do polimento em acetato sólido é deslumbrante.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🦌 Efeito Chifre e Madeira</h3>
                <p className="text-sm text-gray-600">Padrões de acetato que imitam chifre de búfalo natural ou grão de madeira. Popular nos mercados japonês e coreano. Cada par parece único devido à variação natural no padrão da chapa de acetato.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opções de Personalização</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Armações de acetato oferecem a mais ampla variedade de personalização de qualquer material de armação. Aqui está o que podemos fazer.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Marca</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hot stamping</strong> — folha de ouro, prata ou colorida no interior da haste. Clássico, elegante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Relevo/baixo-relevo</strong> — prensado na superfície do acetato. Sutil e permanente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Fio de núcleo personalizado</strong> — seu logo gravado a laser no fio de metal da dobradiça, visível quando a haste é aberta.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica na haste</strong> — placa de logo em liga de zinco ou aço inoxidável rebitada na haste.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📐 Design da Armação</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Formatos personalizados</strong> — envie-nos um esboço ou arquivo CAD e cortaremos um molde CNC ($800-1.500 único)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Largura da haste</strong> — fina (4mm) para visual minimalista, grossa (6-8mm) para declaração ousada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Ponte keyhole vs sela</strong> — diferentes estilos de ponte nasal para diferentes formatos de rosto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estilo da ponta da haste</strong> — reta, curvada ou tipo raquete</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Embalagem</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estojos de couro</strong> — fecho magnético, logo em relevo. A escolha premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estojos rígidos EVA</strong> — duráveis, leves, impressão de logo em cores completas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bolsa de microfibra</strong> — impressa personalizada, funciona também como pano de limpeza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Caixas para varejo</strong> — impressão em cores completas, insert personalizado, aba de exposição, etiqueta com código de barras.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Acetate */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Por Que o Acetato Comanda Preços Premium</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Armações de acetato têm varejo de US$60-200+. Aqui está por que os clientes pagam esse premium — e por que funciona para suas margens.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">✋ Processo Artesanal</h3>
                <p className="text-gray-300 text-sm">Cada par é tocado por mãos humanas múltiplas vezes. Em um mundo de produção em massa, isso importa. Os clientes podem sentir a diferença — e vão pagar por isso. &ldquo;Polido à mão&rdquo; é uma alegação de marketing genuína que ressoa.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🎨 Profundidade de Cor</h3>
                <p className="text-gray-300 text-sm">As cores do acetato são em camadas através do material, não pintadas na superfície. Um padrão tartaruga tem profundidade real — você pode ver diferentes camadas em diferentes ângulos. Isso é fisicamente impossível com plástico injetado.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">⚖️ Qualidade Percebida</h3>
                <p className="text-gray-300 text-sm">O peso (25-35g), o calor do material contra a pele, a profundidade do polimento — tudo no acetato comunica qualidade. Seu cliente pega e sabe que este não é um par de óculos de US$15.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🌿 Origem Natural</h3>
                <p className="text-gray-300 text-sm">O acetato de celulose é derivado de línter de algodão e polpa de madeira — é um material de base vegetal, não derivado de petróleo. Isso importa cada vez mais para consumidores eco-conscientes e dá a você um ângulo de sustentabilidade.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🔧 Ajustabilidade</h3>
                <p className="text-gray-300 text-sm">O acetato pode ser ajustado por qualquer óptico com calor suave. A armação pode ser remodelada para um ajuste personalizado. Tente isso com nylon injetado — ele quebra. Essa ajustabilidade estende a vida útil do produto e reduz devoluções.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">💰 Matemática das Margens</h3>
                <p className="text-gray-300 text-sm">Uma armação de acetato custa US$6-16 por par para produzir. Tem varejo de US$60-200. Isso é um markup de 4-12x — melhor que a maioria dos produtos de consumo. Mesmo considerando marketing, embalagem e distribuição, as margens em óculos de acetato são excelentes.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes sobre Óculos de Acetato</h2>
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
            <h2 className="text-3xl font-bold text-center mb-10">Produtos Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/pt/produtos/olho-de-gato" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😸</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Olho de Gato</h3>
                <p className="text-gray-600 text-sm">Nosso estilo de acetato mais popular para marcas femininas. Disponível em todas as cores e padrões de acetato.</p>
              </Link>
              <Link href="/pt/produtos/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Wayfarer</h3>
                <p className="text-gray-600 text-sm">O formato de acetato mais vendido no mundo. Clássico, versátil e a aposta mais segura para novas marcas.</p>
              </Link>
              <Link href="/pt/produtos/redondo" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Redondos</h3>
                <p className="text-gray-600 text-sm">Redondos vintage em cristal, tartaruga e acetato sólido. Em forte tendência nos mercados asiáticos.</p>
              </Link>
              <Link href="/pt/blog/oem-vs-odm" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Guia OEM vs ODM</h3>
                <p className="text-gray-600 text-sm">Não sabe se deve usar nossos designs existentes ou criar o seu próprio? Este guia detalha os prós, contras e custos.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Criar Sua Coleção de Acetato?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Envie-nos suas ideias de armação, preferências de cores e ponto de preço alvo. Recomendaremos o grau de acetato certo, enviaremos amostras de materiais e teremos amostras nas suas mãos dentro de uma semana. Acetato italiano ou chinês — vamos ajudá-lo a tomar a decisão certa.
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
