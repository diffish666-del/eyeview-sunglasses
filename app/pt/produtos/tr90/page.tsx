import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricante de Óculos de Sol TR90 | Fábrica de Óculos Ultraleves TR90 - EyeView',
  description: 'Fabricante de óculos de sol TR90. Armações ultraleves de Grilamid TR90 (15-20g), material com memória flexível, hipoalergênico. Esportivos, infantis, uso diário. MOQ 100 peças. Direto de fábrica.',
  keywords: 'fabricante óculos TR90, óculos TR90 no atacado, fábrica óculos ultraleves, Grilamid TR90, óculos flexíveis, fabricante óculos esportivos, óculos infantis no atacado',
  openGraph: {
    title: 'Fabricante de Óculos de Sol TR90 | Fábrica de Óculos Ultraleves TR90 - EyeView',
    description: 'Fabricante de óculos de sol TR90. Armações ultraleves de Grilamid TR90 (15-20g), flexíveis, hipoalergênicos. Óculos esportivos e infantis. MOQ 100 peças.',
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
    question: 'O que é exatamente o TR90 e por que é usado para óculos de sol?',
    answer: 'O TR90 é uma poliamida termoplástica (nylon) originalmente desenvolvida pela EMS-Grivory na Suíça sob a marca Grilamid TR90. Foi projetado especificamente para aplicações ópticas — ou seja, foi criado do zero para fabricar armações de óculos. As propriedades principais são: ultraleve (uma armação finalizada pesa apenas 15-20 gramas), extrema flexibilidade (você pode dobrá-lo quase ao meio e ele volta à forma original), memória (mantém sua forma durante anos de uso diário), hipoalergênico (sem níquel, sem BPA, sem reações na pele) e alta resistência ao calor (temperatura de deformação de aproximadamente 120°C). É fabricado por moldagem por injeção, então a produção é rápida e consistente — o que mantém os custos baixos. Basicamente, o TR90 dá a você uma armação que não pesa nada, nunca quebra e nunca irrita pele sensível. Por isso se tornou o material preferido para óculos esportivos, óculos infantis e armações leves de uso diário.',
  },
  {
    question: 'Como o TR90 se compara com armações de acetato e metal?',
    answer: 'A maneira mais fácil de entender o TR90 é compará-lo diretamente. Peso: armações TR90 pesam 15-20 gramas, as de acetato pesam 25-35 gramas e as de metal pesam 28-35 gramas. Então o TR90 é aproximadamente 40-50% mais leve que o acetato. Flexibilidade: o TR90 dobra e volta à forma; o acetato quebra se você dobrar demais; o metal deforma permanentemente. Durabilidade: o TR90 é praticamente inquebrável em uso normal; o acetato pode lascar ou rachar; o metal pode entortar. Opções de cor: o acetato ganha aqui com seus ricos padrões em camadas; o TR90 é mais limitado a cores sólidas e acabamentos de superfície. Percepção premium: o acetato tem uma sensação de luxo que o TR90 não consegue igualar; o TR90 parece técnico e esportivo. Custo: armações TR90 custam $4-8 por par, acetato $6-16 e metal $8-22. Conclusão: TR90 para desempenho e valor, acetato para luxo e estética, metal para estilo clássico.',
  },
  {
    question: 'As armações TR90 podem ser impressas ou coloridas com designs personalizados?',
    answer: 'Sim, mas as opções são diferentes do acetato. A cor do TR90 é determinada durante a moldagem por injeção — adicionamos pellets de cor masterbatch à resina Grilamid crua, então a cor penetra todo o material. Temos aproximadamente 30 cores padrão (preto fosco, preto brilhante, azul marinho fosco, cinza, vermelho, laranja, branco, transparente, etc.) e podemos igualar cores Pantone personalizadas com um mínimo de 500 peças. Para decoração de superfície, oferecemos tampografia (logos, padrões, gráficos multicoloridos na haste), impressão UV (impressão de qualidade fotográfica em cores completas em superfícies planas), transferência hidrográfica (impressão por imersão em água para padrões de camuflagem, fibra de carbono, veio de madeira que envolvem curvas) e gravação a laser. Também fazemos revestimento de borracha (um acabamento fosco de toque suave que adiciona aderência e sensação premium) e revestimento PVD metálico em detalhes da haste. A única coisa que o TR90 não pode fazer é replicar a profundidade de cor em camadas do acetato — padrões de tartaruga, mármore e cristal não são possíveis em material moldado por injeção.',
  },
  {
    question: 'O TR90 é seguro para óculos de sol infantis?',
    answer: 'O TR90 é provavelmente o melhor material para óculos infantis, e aqui está o porquê. Primeiro, é virtualmente inquebrável — crianças são duras com óculos, e o TR90 flexiona em vez de partir. Testamos nossas armações infantis com mais de 5.000 ciclos de abertura e fechamento de dobradiça sem nenhuma falha. Segundo, é hipoalergênico — sem níquel, sem BPA, sem ftalatos, sem látex. Crianças têm pele mais sensível que adultos, e armações metálicas com teor de níquel podem causar dermatite de contato. Terceiro, é ultraleve com 12-15 gramas para armações de tamanho infantil — óculos pesados escorregam de narizes pequenos e as crianças simplesmente os tiram. Quarto, o TR90 atende os padrões de segurança de brinquedos EN 71 (podemos fornecer documentação de testes), que alguns mercados exigem para óculos vendidos para menores de 14 anos. E quinto, o baixo custo ($3,50-6,00 por par para armações infantis) o torna econômico para pais que sabem que seu filho provavelmente vai perder ou quebrar em seis meses de qualquer forma.',
  },
  {
    question: 'Qual temperatura o TR90 suporta?',
    answer: 'O TR90 tem uma temperatura de deflexão térmica (HDT) de aproximadamente 120°C (248°F) a 1,8 MPa — significativamente mais alta que o nylon padrão (cerca de 75°C) e muito mais alta que o acetato (que amolece a 70-80°C). Em termos práticos, isso significa que armações TR90 podem sobreviver sem problemas a serem deixadas no painel de um carro no verão (que pode chegar a 70-90°C), a serem usadas em uma sauna, ou a serem expostas a água quente sem deformar. Este é um ponto de venda real, especialmente para marcas esportivas e de atividades ao ar livre — atletas deixam seus óculos em carros quentes, em painéis de barcos e em bolsas de academia junto a roupas suadas. O TR90 aguenta tudo isso. A extremidade fria é igualmente impressionante: o TR90 mantém sua flexibilidade até -40°C, então não fica quebradiço em condições de inverno. Para comparar, armações baratas de policarbonato podem ficar quebradiças abaixo de 0°C.',
  },
  {
    question: 'Qual é a quantidade mínima de pedido para óculos de sol TR90?',
    answer: 'O MOQ padrão é de 100 peças por modelo usando nossa biblioteca de moldes existentes — temos mais de 80 designs de armações TR90 em estoque cobrindo esportivos envolventes, wayfarers, redondos, retangulares, estilo aviador e formas infantis. Você pode misturar cores dentro dessas 100 peças. Para um design de armação completamente personalizado, cobramos uma taxa de molde de $1.500-3.000 dependendo da complexidade (os moldes TR90 são mais caros que a usinagem CNC de acetato porque os moldes de injeção são de aço e usinados com precisão). O MOQ para molde personalizado é de 500 peças no primeiro pedido. Para cores Pantone personalizadas, o mínimo é 500 peças porque precisamos misturar e testar o masterbatch. Para cores padrão em estoque, não há mínimo além das 100 peças base.',
  },
]

const products = [
  {
    name: 'Sport Wrap TR90',
    description: 'Nosso modelo TR90 mais vendido. Design envolvente completo que bloqueia vento, poeira e luz periférica. As plaquetas nasais de borracha e as ponteiras da haste proporcionam aderência antiderrapante mesmo quando você está suando. A forma envolvente acompanha a curvatura do rosto, proporcionando cobertura de 180 graus sem o visual de "olho de inseto". Pesa apenas 18 gramas — a maioria dos clientes esquece que está usando em cinco minutos. Esta é a armação que equipes de ciclismo, clubes de corrida e marcas de pesca pedem em grandes quantidades. Disponível em 15 cores padrão com opções de lentes polarizadas.',
    price: '$4,50 - $7,50',
    moq: '100 pçs',
    features: ['Design Envolvente', 'Aderência de Borracha', '18g Ultraleve', 'Haste Antiderrapante'],
  },
  {
    name: 'TR90 Wayfarer',
    description: 'A clássica forma wayfarer em TR90 em vez de acetato. Você perde a profundidade de cor em camadas do acetato, mas ganha uma armação que pesa 16 gramas em vez de 30, custa 40% menos e é praticamente impossível de quebrar. Para marcas que miram na faixa de varejo de $20-40 onde o preço do acetato não funciona, este é o ponto ideal. Podemos revestir a superfície com borracha para um acabamento fosco de toque suave que adiciona aderência e sensação premium. Popular entre marcas DTC, empresas promocionais e livrarias universitárias.',
    price: '$4,00 - $6,50',
    moq: '100 pçs',
    features: ['Forma Wayfarer', '16g de Peso', 'Opção Revestimento Borracha', 'Preço Acessível'],
  },
  {
    name: 'Kids Flex TR90',
    description: 'Projetado para idades de 4 a 12 anos com flexibilidade extra incorporada no design. As hastes têm uma zona de flexão integrada que permite que se dobrem para fora sem quebrar — importante porque crianças pegam seus óculos por um braço e puxam. Hipoalergênico, livre de BPA, livre de ftalatos. Plaquetas nasais de borracha dimensionadas para pontes menores. Disponível em cores brilhantes e divertidas — azul elétrico, rosa intenso, verde limão, laranja pôr do sol, preto fosco (para o mercado do "garoto descolado"). Pesa apenas 12 gramas. Os pais compram porque sabem que as crianças vão maltratar. Temos clientes que vendem em packs de 3 porque os pais esperam ter que substituí-los.',
    price: '$3,50 - $6,00',
    moq: '100 pçs',
    features: ['Idades 4-12', 'Hastes Extra Flex', '12g de Peso', 'Sem BPA/Ftalatos'],
  },
  {
    name: 'TR90 Half-Frame Sport',
    description: 'Design semi-aro onde a armação TR90 segura a parte superior da lente e um fio de nylon fino segura a borda inferior. Isso elimina outros 3-4 gramas comparado com a armação completa, levando o peso total para cerca de 14 gramas. A borda inferior aberta também melhora a visibilidade para baixo, o que é importante para corredores e ciclistas que precisam ver a estrada abaixo deles. A borda exposta da lente dá um visual técnico e orientado para desempenho. Popular entre marcas de corrida, triathlon e linhas de óculos de golfe.',
    price: '$5,00 - $8,00',
    moq: '100 pçs',
    features: ['Semi-Aro', '14g de Peso', 'Visão Inferior Aprimorada', 'Fio de Nylon Inferior'],
  },
  {
    name: 'TR90 + Metal Combo',
    description: 'Armação frontal TR90 com hastes de aço inoxidável ou titânio. Este híbrido dá a você a flexibilidade leve do TR90 onde mais importa (a armação frontal que toca seu rosto) e o visual premium das hastes metálicas. As hastes de metal podem ser gravadas a laser com seu logo — o que fica muito mais nítido do que imprimir sobre plástico. Pesa cerca de 20 gramas no total. Esta é nossa recomendação favorita para marcas que querem um visual de transição esporte-casual — técnico o suficiente para uso ao ar livre, elegante o suficiente para um jantar.',
    price: '$7,00 - $11,00',
    moq: '100 pçs',
    features: ['Híbrido TR90 + Metal', 'Gravação a Laser', '20g de Peso', 'Crossover Esporte-Casual'],
  },
  {
    name: 'TR90 Shield / Visor',
    description: 'Design de viseira com lente única em TR90 — uma lente contínua que cobre ambos os olhos com uma armação superior TR90 e sistema de hastes. Este é o estilo que você vê em ciclistas profissionais, patinadores de velocidade e esquiadores de competição. Máximo campo de visão, zero obstrução da armação na visão central e estilo aerodinâmico agressivo. A lente única é de policarbonato com revestimentos opcionais de espelho, polarizado ou fotocromático. Plaqueta nasal ajustável e portas de ventilação para prevenir embaçamento. Se sua marca mira em atletas sérios, esta é a armação que ganha credibilidade.',
    price: '$6,00 - $9,00',
    moq: '100 pçs',
    features: ['Lente Viseira Única', 'Ventilação Anti-Embaçamento', 'Máximo Campo Visual', 'Design Aerodinâmico'],
  },
]

export default function TR90PagePt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Ultraleves TR90',
        description: 'Óculos de sol ultraleves de Grilamid TR90. Armações de 15-20g, material com memória flexível, hipoalergênico. Estilos esportivos, infantis e de uso diário. Personalização OEM completa.',
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
              alt="Fabricante de Óculos de Sol TR90 - Óculos Esportivos de Nylon Leve no Atacado"
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
                Deixe-me mostrar uma coisa. Pegue um par de óculos de sol comuns — daqueles que você compra em um posto de gasolina. Agora dobre as hastes. Ouviu aquele estalo? Isso é policarbonato barato dizendo que está prestes a partir. Agora tente o mesmo com uma armação TR90. Você pode praticamente dobrá-la ao meio. Ela volta à forma instantaneamente. Sem estalo, sem rachadura, sem deformação permanente. Essa flexibilidade não é um truque — é a vantagem de engenharia fundamental do <a href="https://www.emsgrivory.com/en/products/grilamid-tr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grilamid TR90</a>, uma <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">poliamida</a> termoplástica desenvolvida pela empresa química suíça EMS-Grivory especificamente para aplicações ópticas.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Aqui estão os números que importam: uma armação TR90 finalizada pesa 15-20 gramas. Para comparar, armações de acetato pesam 25-35 gramas e as de metal pesam 28-35 gramas. Essa diferença de 10-15 gramas pode não parecer muito no papel, mas coloque uma armação TR90 no rosto depois de usar acetato o dia todo e você vai entender imediatamente por que atletas, profissionais ao ar livre e cada vez mais consumidores comuns estão mudando. Você esquece que está usando. Sem pressão no nariz, sem escorregar, sem marcas vermelhas atrás das orelhas. Para <Link href="/pt/produtos/esportivo" className="text-primary-600 hover:underline">marcas esportivas</Link> e <Link href="/pt/produtos/infantil" className="text-primary-600 hover:underline">óculos infantis</Link>, o TR90 não é apenas uma boa opção — é a escolha óbvia.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Do ponto de vista de fabricação, o TR90 é moldado por injeção — o que significa que alimentamos pellets de Grilamid em um cilindro aquecido, injetamos o material fundido em um molde de aço de precisão sob alta pressão e retiramos uma armação finalizada em cerca de 45 segundos. Compare isso com armações de acetato que levam 5-7 dias de corte, tamboreamento e polimento à mão. O resultado é produção mais rápida, menor custo unitário e qualidade extremamente consistente. Nossa taxa de defeitos em TR90 é inferior a 0,5% — contra 3-5% do acetato. Se você precisa de grandes volumes a preços competitivos sem sacrificar qualidade, o TR90 é o material que torna isso possível.
              </p>
              <p className="text-lg leading-relaxed">
                Produzimos cerca de 500.000 armações TR90 por ano entre esportivos envolventes, wayfarers casuais, estilos infantis e designs híbridos esporte-casual. Nossa biblioteca de moldes tem mais de 80 designs prontos para uso, e operamos quatro máquinas de moldagem por injeção dedicadas à produção de TR90. Seja você lançando uma marca de óculos esportivos, adicionando uma linha infantil ou construindo uma coleção leve de uso diário, aqui está tudo o que você precisa saber.
              </p>
            </div>
          </div>

          {/* Weight Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">A Vantagem do Peso</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              O peso é a principal razão pela qual as marcas escolhem TR90. Veja como ele se compara a todos os outros materiais de armação que oferecemos.
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
                  <p className="text-sm text-gray-500 mt-2">A opção mais leve. Quase imperceptível no rosto. Ideal para uso o dia todo e atividade física.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Liga de Alumínio</span>
                    <span className="text-gray-600 font-bold">18 - 22g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Próximo ao TR90 em peso, mas rígido — sem flexão. Sensação metálica premium com boa leveza.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acetato</span>
                    <span className="text-gray-600 font-bold">25 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">O material de luxo. Bonito mas mais pesado. Esse peso faz parte da &ldquo;sensação premium&rdquo; — mas não é ideal para esportes.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Aço Inoxidável</span>
                    <span className="text-gray-600 font-bold">28 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Armações metálicas clássicas. O peso comunica qualidade mas pode causar fadiga durante uso prolongado.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Policarbonato Padrão</span>
                    <span className="text-gray-600 font-bold">22 - 28g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Mais barato que o TR90 mas mais pesado, menos flexível e mais frágil. A opção econômica que o TR90 supera.</p>
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
                      ['Material da Armação', 'EMS-Grivory Grilamid TR90 (poliamida termoplástica de engenharia suíça)'],
                      ['Peso da Armação', '15-20g (armação completa) / 12-15g (infantil) / 14g (semi-aro)'],
                      ['Flexibilidade', 'Material com memória — dobra a 90°+ e retorna à forma original. Mais de 5.000 ciclos de flexão testados.'],
                      ['Resistência ao Calor', 'HDT 120°C (248°F) — sobrevive a painéis de carro, saunas, água quente'],
                      ['Resistência ao Frio', 'Mantém a flexibilidade até -40°C (-40°F) — sem fragilidade no inverno'],
                      ['Hipoalergênico', 'Sim — sem níquel, sem BPA, sem ftalatos, sem látex'],
                      ['Material da Lente', 'Policarbonato / TAC Polarizado / Fotocromático'],
                      ['Proteção UV', 'UV400 — bloqueia 100% de UVA (315-380nm) e UVB (280-315nm)'],
                      ['Plaquetas Nasais', 'Borracha TPE integrada (antiderrapante) ou plaquetas de silicone ajustáveis'],
                      ['Ponteiras da Haste', 'Aderência de borracha TPE co-moldada — antiderrapante mesmo molhado'],
                      ['Cores em Estoque', '30+ padrão: preto fosco, preto brilhante, azul marinho, cinza, vermelho, laranja, branco, transparente, etc.'],
                      ['Cores Personalizadas', 'Igualação Pantone disponível — MOQ 500 pçs para masterbatch personalizado'],
                      ['Acabamentos de Superfície', 'Fosco, brilhante, revestimento de borracha (toque suave), detalhes PVD metálicos'],
                      ['Opções de Impressão', 'Tampografia, impressão UV, transferência hidrográfica (camuflagem, fibra de carbono), gravação a laser'],
                      ['Certificações', 'CE (EN ISO 12312-1) · FDA · UV400 · ISO 9001 · EN 71 (infantil)'],
                      ['MOQ', '100 pçs por modelo (moldes em estoque) / 500 pçs (moldes personalizados)'],
                      ['Taxa de Molde (Personalizado)', '$1.500 - $3.000 pagamento único — molde de injeção de aço'],
                      ['Prazo de Amostra', '3-5 dias úteis'],
                      ['Prazo de Produção', '12-18 dias padrão / 8-10 dias urgente'],
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
            <h2 className="text-3xl font-bold text-center mb-4">Por Que o TR90 Supera Outros Plásticos</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Nem todas as armações de plástico são iguais. Aqui está o que separa o TR90 do policarbonato padrão e do nylon barato.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🪶 Ultraleve</h3>
                <p className="text-sm text-gray-600">Com uma densidade de 1,14 g/cm³, o TR90 é um dos materiais de armação mais leves disponíveis. Um esportivo envolvente de armação completa pesa apenas 18 gramas — aproximadamente o mesmo que três folhas de papel. Os clientes literalmente esquecem que estão usando, que é exatamente o que atletas precisam.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">💪 Flexibilidade com Memória</h3>
                <p className="text-sm text-gray-600">O TR90 tem verdadeira memória de forma — dobre-o, torça-o, sente-se sobre ele, e volta à forma original. Testamos cada design de armação com mais de 5.000 ciclos de abertura-fechamento e flexão de haste a 90 graus sem deformação permanente. O policarbonato padrão falha neste teste por volta de 500 ciclos.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌡️ Resistente à Temperatura</h3>
                <p className="text-sm text-gray-600">A deflexão térmica a 120°C significa que o TR90 sobrevive a situações que destroem outros plásticos. Deixou no painel do carro em Phoenix? Sem problema. Caiu em uma banheira de hidromassagem? Sem problema. Guardou em um armário de sauna? Sem problema. O acetato deformaria. O PC padrão poderia deformar. O TR90 não se importa.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🧪 Resistente a Produtos Químicos</h3>
                <p className="text-sm text-gray-600">Resistente a protetor solar, repelente de insetos, suor, água salgada e a maioria dos produtos químicos comuns. Isso importa para uso esportivo e ao ar livre onde as armações estão constantemente expostas a essas substâncias. O acetato, por outro lado, pode ser danificado pelos químicos do protetor solar com o tempo.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛡️ Resistente a Impactos</h3>
                <p className="text-sm text-gray-600">O TR90 absorve a energia do impacto através da flexão em vez de rachar. Deixe cair uma armação TR90 da altura da cabeça no concreto e ela quica. Deixe cair uma armação de acetato e pode lascar. Para óculos esportivos e infantis, esta é uma característica de segurança, não apenas durabilidade.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏭 Eficiência de Produção</h3>
                <p className="text-sm text-gray-600">O tempo de ciclo de moldagem por injeção é de cerca de 45 segundos por armação — contra 5-7 dias para acetato. Isso significa entrega mais rápida (12-18 dias vs 20-28 dias), menor custo unitário e taxas de defeitos abaixo de 0,5%. Para pedidos de volume, a vantagem em custo e velocidade é significativa.</p>
              </div>
            </div>
          </section>

          {/* Best Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Quem Deve Usar TR90?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              O TR90 não é o material certo para todas as marcas. Aqui é onde ele se destaca e onde você pode querer algo diferente.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-600">✅ Perfeito Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Marcas esportivas</strong> — ciclismo, corrida, pesca, golfe, esqui. O TR90 é o padrão da indústria para óculos de desempenho.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Óculos infantis</strong> — inquebráveis, ultraleves, hipoalergênicos. O material foi praticamente projetado para crianças.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Linhas de conforto diário</strong> — para marcas que se posicionam em torno da comodidade o dia todo e da mensagem de &ldquo;você esquece que está usando&rdquo;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Marcas de volume/valor</strong> — baixo custo unitário com qualidade genuína. Faixa de varejo ideal de $20-50.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Promocional / corporativo</strong> — acessível o suficiente para brindes mas com qualidade suficiente para que as pessoas realmente usem.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-yellow-200">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">⚡ Boa Opção Híbrida</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Combos TR90 + metal</strong> — frente TR90 com hastes metálicas para um visual de transição esporte-casual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Esportivos com prescrição</strong> — TR90 com ranhuras de lente compatíveis com Rx para inserto óptico ou montagem direta.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Marcas multi-linha</strong> — muitos dos nossos clientes usam TR90 para sua linha esportiva/ativa e acetato para sua linha de moda.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">❌ Não Ideal Para</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Luxo / alta moda</strong> — o TR90 carece da riqueza visual do acetato. Sem tartaruga, sem mármore, sem profundidade de cristal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Posicionamento de varejo $100+</strong> — o material não transmite a sensação premium necessária nessa faixa de preço (a menos que seja uma marca de desempenho/tecnologia).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Estilo clássico/heritage</strong> — aviadores e wayfarers em TR90 funcionam mas carecem da calorosidade e caráter do metal ou acetato.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opções de Personalização TR90</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              O TR90 pode ser moldado por injeção, mas isso não significa genérico. Veja como tornamos cada par exclusivamente seu.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Cores e Acabamentos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cor integral</strong> — 30+ cores padrão, ou igualação Pantone (MOQ 500 pçs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Revestimento de borracha</strong> — acabamento fosco de toque suave que adiciona aderência e sensação premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hidrográfico</strong> — impressão por transferência em água para padrões de camuflagem, fibra de carbono, veio de madeira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bicolor</strong> — cores diferentes para frente e hastes usando moldagem multi-disparo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🏷️ Logo e Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tampografia</strong> — logo multicolorido nas hastes, até 4 cores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impressão UV</strong> — qualidade fotográfica, cores completas, detalhe fino em superfícies planas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Gravação a laser</strong> — permanente, funciona também em superfícies revestidas de borracha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Placa metálica</strong> — placa de logo de liga de zinco embutida na haste durante a moldagem</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Embalagem</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estojo esportivo</strong> — EVA semi-rígido com clipe mosquetão, com marca. $1,00-1,80 por conjunto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bolsa de microfibra</strong> — com cordão e logo impresso. $0,30-0,60 cada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Cordão de segurança</strong> — cordão de neoprene com marca. Excelente complemento para linhas esportivas. $0,40-0,80.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Caixa de varejo</strong> — impressão em cores completas, inserto personalizado, cartão de especificações. $0,80-1,50.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lens Options for Sport */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Opções de Lentes para Armações TR90</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              A lente importa tanto quanto a armação. Estas são as opções que combinamos com TR90 — especialmente para uso esportivo e ativo.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🔵 TAC Polarizado</h3>
                <p className="text-gray-300 text-sm">A melhoria mais popular para armações TR90 esportivas. A película polarizada de 7 camadas elimina 99% do reflexo refletido da água, estradas e neve. Essencial para pesca, ciclismo e direção. Adiciona $2-3 por par mas permite cobrar $15-20 a mais no varejo. Leia nosso <Link href="/pt/produtos/polarizado" className="text-blue-400 hover:underline">guia de lentes</Link> para o detalhamento completo.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌗 Fotocromático</h3>
                <p className="text-gray-300 text-sm">Escurece com a luz solar, clareia em ambientes internos. De Categoria 0-1 em interiores para Categoria 2-3 ao ar livre em cerca de 30 segundos. Ótimo ponto de venda para uso esportivo o dia todo — comece sua corrida ao amanhecer, termine ao meio-dia, um único par dá conta de tudo. Adiciona $3-4 por par.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🪞 Revestimentos Espelhados</h3>
                <p className="text-gray-300 text-sm">Prata, azul, vermelho, dourado, verde, roxo, rosa — aplicados sobre lentes polarizadas ou de PC padrão. O visual agressivo combina perfeitamente com armações TR90 esportivas. Espelhado azul em um envolvente TR90 preto fosco é um dos nossos produtos mais vendidos de todos os tempos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🟡 Amarelo/Âmbar (Pouca Luz)</h3>
                <p className="text-gray-300 text-sm">Tingimento de Categoria 1 que melhora o contraste em condições nubladas, com neblina ou pouca luz. Popular para ciclismo, tiro, esqui e direção ao entardecer. Não é escuro o suficiente para sol forte — comercializado como uma opção de lente dedicada para pouca luz.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">💧 Hidrofóbico + Oleofóbico</h3>
                <p className="text-gray-300 text-sm">Revestimentos repelentes à água e resistentes a impressões digitais. A chuva escorre, o suor limpa fácil, manchas não grudam. Adiciona $0,50-1,00 por par. Fortemente recomendado para lentes esportivas que vão receber chuva, suor e ser manuseadas com dedos sujos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌫️ Anti-Embaçamento</h3>
                <p className="text-gray-300 text-sm">Revestimento hidrofílico que previne condensação. Crítico para esportes em clima frio (esqui, snowboard) e atividades de alto esforço onde o calor corporal encontra ar frio. Funciona por cerca de 6-12 meses de uso regular. Adiciona $1-2 por par.</p>
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
                <p className="text-gray-600 text-sm">Nossa coleção completa de óculos esportivos — envolventes, viseiras, semi-aro. A maioria dos estilos disponíveis em TR90 com opções de lentes polarizadas e fotocromáticas.</p>
              </Link>
              <Link href="/pt/produtos/infantil" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos de Sol Infantis</h3>
                <p className="text-gray-600 text-sm">O TR90 é o material ideal para óculos infantis — inquebráveis, ultraleves, hipoalergênicos. Tamanhos para idades de 0 a 14 anos.</p>
              </Link>
              <Link href="/pt/produtos/polarizado" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Polarizados</h3>
                <p className="text-gray-600 text-sm">Guia completo de lentes para óculos de sol — polarizadas, fotocromáticas, espelhadas, CR-39. Descubra quais opções de lentes combinam melhor com armações TR90.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Pedir Armações TR90?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Conte-nos o que você precisa — esportivos envolventes, armações infantis, estilos casuais ou algo personalizado. Enviaremos amostras da nossa biblioteca de mais de 80 moldes em 3-5 dias. Preços, cronograma de produção e opções de personalização incluídos. Sem compromisso até que você esteja pronto para pedir.
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
