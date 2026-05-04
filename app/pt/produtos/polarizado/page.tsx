import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos de Sol Polarizados no Atacado | Fabricante de Lentes TAC Premium - EyeView',
  description: 'Fabricante de óculos de sol polarizados no atacado. Lentes polarizadas TAC premium de 7 camadas, 99% de redução de ofuscamento, proteção UV400. Estilos para direção, pesca, esporte. MOQ 100 pçs. Direto de fábrica.',
  keywords: 'óculos de sol polarizados no atacado, lentes polarizadas TAC, fabricante óculos polarizados, óculos redução de ofuscamento, óculos polarizados para dirigir, óculos polarizados para pesca, lentes polarizadas CR-39 a granel',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/polarizado/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/polarized/',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/polarizado/',
    },
  },
}

const products = [
  {
    name: 'Aviador Polarizado',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$12.00 - $18.00',
    moq: '100 pçs',
    description: 'O aviador foi literalmente projetado para pilotos que precisavam enxergar através do ofuscamento da cabine. Adicione polarização e ele se torna os óculos de sol definitivos para dirigir. Nosso aviador polarizado corta o ofuscamento da estrada, o reflexo do painel e aquele brilho cegante do carro da frente. Fornecemos para uma empresa de aluguel de carros em Dubai que os entrega a cada cliente — são tão bons assim para dirigir.',
  },
  {
    name: 'Wayfarer Polarizado',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$11.00 - $17.00',
    moq: '100 pçs',
    description: 'O formato clássico wayfarer encontra a óptica séria. As lentes polarizadas TAC transformam essa armação fashion em uma potência funcional — o ofuscamento da praia, o reflexo da calçada da cidade, o brilho da superfície da água, tudo desaparece. Os clientes ganham o estilo que querem com proteção que não sabiam que precisavam. Nosso mais vendido versátil.',
  },
  {
    name: 'Esportivo Envolvente Polarizado',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pçs',
    description: 'Cobertura envolvente + lentes polarizadas = sem ofuscamento de nenhum ângulo. São projetados para atletas ao ar livre que precisam de proteção periférica — ciclistas em estradas molhadas, corredores de trilha em luz filtrada, trilheiros acima da linha das árvores. A armação TR90 mantém o peso abaixo de 26g. Um clube de ciclismo nos Países Baixos encomendou 600 pares para todos os seus membros.',
  },
  {
    name: 'Óculos Polarizados para Pesca',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$14.00 - $20.00',
    moq: '100 pçs',
    description: 'Pergunte a qualquer pescador sério e ele vai te dizer — lentes polarizadas não são opcionais para pescar. São essenciais. Nossos óculos polarizados para pesca cortam o ofuscamento da superfície para que você possa ver diretamente dentro da água. Localize o peixe, leia a estrutura, observe sua isca. Lentes âmbar para água doce, cinza-verde para água salgada. Uma empresa de pesca charter em Key West vem recomprando esses a cada trimestre há três anos seguidos.',
  },
  {
    name: 'Óculos Polarizados para Dirigir',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$12.50 - $18.50',
    moq: '100 pçs',
    description: 'Projetados especificamente para trás do volante. As lentes cinza mantêm a percepção real de cor (para que os semáforos pareçam corretos), enquanto eliminam o ofuscamento horizontal cegante que rebate do pavimento molhado, capôs e outros veículos. Revestimento antirreflexo traseiro para evitar que seu próprio rosto se reflita na lente. Esses são os que motoristas profissionais pedem.',
  },
  {
    name: 'Olho de Gato Polarizado',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pçs',
    description: 'Quem disse que polarizado tem que parecer esportivo? Essa armação olho de gato com lentes polarizadas TAC prova que você pode ter moda E função. Mulheres que dirigem, que passam tempo na praia, que sentam à beira da piscina — ganham a proteção contra ofuscamento que precisam embrulhada em uma armação que realmente querem usar. Estilo + substância. Nosso #1 em vendas de polarizados femininos.',
  },
]

export default function PolarizedPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Sol Polarizados</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos de Sol Polarizados no Atacado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma vez que seus clientes experimentam os polarizados, nunca mais voltam atrás. O ofuscamento
            desaparece. As cores se destacam. Tudo simplesmente fica... melhor. Fabricamos óculos de
            sol polarizados TAC premium em cada estilo — aviador, wayfarer, esportivo, olho de gato —
            com lentes de 7 camadas que bloqueiam 99% do ofuscamento horizontal cegante.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
            alt="Coleção de Óculos de Sol Polarizados no Atacado - Lentes TAC Premium"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* How Polarization Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Como Funciona a Polarização (Versão Simples)</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Aqui vai a explicação de 30 segundos. A luz solar viaja em todas as direções — para cima,
              para baixo, para os lados. Quando rebate em uma superfície plana como água, uma estrada ou
              o capô de um carro, ela se &quot;organiza&quot; em ondas horizontais. Isso é o ofuscamento. É
              cegante, é irritante, e é realmente perigoso quando você está dirigindo ou na água.
            </p>
            <p>
              Uma <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">lente polarizada</a> contém
              um filme químico especial com faixas verticais microscópicas. Essas faixas atuam como
              persianas para a luz — deixam passar a luz vertical (normal) mas bloqueiam a
              luz horizontal (o ofuscamento). O resultado? O ofuscamento desaparece. As cores ficam
              mais ricas e naturais. O contraste se aguça. É como fazer upgrade de definição padrão
              para 4K para seus olhos.
            </p>
            <p>
              Porém, nem todas as lentes polarizadas são iguais. As baratas usam um filme
              polarizante fino colado na superfície da lente — descola, faz bolhas e se
              degrada em meses. Nossas lentes TAC intercalam o filme polarizante entre 6 camadas
              de material protetor, criando uma unidade fundida única que não se separará nem degradará.
              Essa é a diferença entre os polarizados de $2 de posto de gasolina e os polarizados de verdade.
              Seus clientes notam.
            </p>
          </div>
        </section>

        {/* Polarized vs Non-Polarized */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarizados vs. Não Polarizados: A Diferença Real</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Característica</th>
                  <th className="p-4 text-left font-semibold">Lente Tingida Regular</th>
                  <th className="p-4 text-left font-semibold">Lente Polarizada</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Redução de Ofuscamento</td><td className="p-4 text-gray-600">Escurece tudo por igual — ofuscamento incluso</td><td className="p-4 text-gray-600">Elimina especificamente o ofuscamento horizontal refletido</td></tr>
                <tr><td className="p-4 font-medium">Clareza Visual</td><td className="p-4 text-gray-600">Mais escuro mas não mais claro</td><td className="p-4 text-gray-600">Contraste mais nítido, percepção de cor aprimorada</td></tr>
                <tr><td className="p-4 font-medium">Segurança ao Dirigir</td><td className="p-4 text-gray-600">Reduz brilho, ofuscamento continua presente</td><td className="p-4 text-gray-600">Elimina ofuscamento de estrada/carros — significativamente mais seguro</td></tr>
                <tr><td className="p-4 font-medium">Pesca / Água</td><td className="p-4 text-gray-600">Não consegue ver sob a superfície</td><td className="p-4 text-gray-600">Enxerga através da superfície da água claramente</td></tr>
                <tr><td className="p-4 font-medium">Fadiga Visual</td><td className="p-4 text-gray-600">Continua apertando os olhos pelo ofuscamento</td><td className="p-4 text-gray-600">Os olhos relaxam — não precisa apertar os olhos</td></tr>
                <tr><td className="p-4 font-medium">Valor Percebido</td><td className="p-4 text-gray-600">Básico — clientes esperam UV como mínimo</td><td className="p-4 text-gray-600">Premium — clientes pagam $10-30 a mais no varejo</td></tr>
                <tr><td className="p-4 font-medium">Custo Adicional no Atacado</td><td className="p-4 text-gray-600">Linha base</td><td className="p-4 text-gray-600">+$1,50 - $3,00 por par</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            A conta é simples: os polarizados custam $1,50-3,00 a mais por par mas permitem cobrar $10-30 a mais no varejo. Esse é o melhor impulsionador de margem em óculos.
          </p>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop" alt="Óculos de Sol Polarizados no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Coleção Polarizada por Estilo</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Lente polarizada TAC de 7 camadas</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% de redução de ofuscamento</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Proteção UV400</li>
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

        {/* Lens Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tipos de Lentes Polarizadas: TAC vs. CR-39 vs. Cristal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-200">
              <h3 className="text-xl font-semibold mb-2">🏆 TAC Polarizada</h3>
              <p className="text-xs text-primary-600 font-semibold mb-4">MAIS POPULAR — 80% dos pedidos</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TAC (Celulose Triacetato) é o ponto ideal. Sete camadas fundidas: camada dura
                por fora, camadas estruturais TAC, filme polarizante no centro, revestimento
                UV por baixo. Mais leve que cristal, mais resistente que CR-39, e cerca de
                metade do custo do cristal polarizado. Isso é o que recomendamos para 90%
                dos compradores no atacado. É o carro-chefe da indústria por uma razão.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Peso: Leve (1.1mm padrão)</li>
                <li>• Impacto: Bom — não quebra</li>
                <li>• Óptica: Muito boa</li>
                <li>• Custo: $$ — melhor custo-benefício</li>
                <li>• Melhor para: maioria das aplicações</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🔬 CR-39 Polarizada</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">OPÇÃO PREMIUM</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">CR-39</a> é
                uma resina de grau óptico originalmente desenvolvida para óptica militar. Oferece
                a clareza visual mais nítida de qualquer material de lente plástica — os ópticos
                adoram. Resistente a arranhões, leve e opticamente superior ao TAC. Mas custa
                mais e é ligeiramente menos resistente a impacto. Escolha CR-39 quando a qualidade
                óptica for a prioridade máxima — marcas de luxo, especialistas em direção, óticas.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Peso: Leve</li>
                <li>• Impacto: Moderado</li>
                <li>• Óptica: Excelente — grau óptico</li>
                <li>• Custo: $$$ — premium</li>
                <li>• Melhor para: luxo, lojas ópticas</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">💎 Cristal Polarizado</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">CLAREZA SUPREMA</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nada supera o cristal em pureza óptica. Zero distorção, resistência superior
                a arranhões, e a polarização é integrada permanentemente — não vai se degradar com
                os anos. Mas o cristal é mais pesado, mais caro, e quebra com impacto (não
                ideal para esportes). O cristal polarizado é para o cliente purista que quer
                a melhor óptica absoluta e não se importa com o peso. Pense em entusiastas de
                pesca, capitães de barco, posicionamento de luxo.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Peso: Pesado</li>
                <li>• Impacto: Baixo — pode quebrar</li>
                <li>• Óptica: Perfeita — zero distorção</li>
                <li>• Custo: $$$$ — o mais alto</li>
                <li>• Melhor para: luxo, pesca, navegação</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7-Layer Construction */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Dentro de uma Lente Polarizada TAC: 7 Camadas</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Quando as pessoas perguntam &quot;por que suas lentes polarizadas custam mais que as de
                $0,50 do Alibaba?&quot; — é por isso. Cada lente é um sanduíche de 7 camadas, fundidas
                com precisão sob calor e pressão. As baratas? Colam um filme polarizante em um
                lado de uma lente regular. Descola. Faz bolhas. Embaça. As nossas não. Nunca.
                Há mais de 8 anos fabricando e nossa taxa de defeitos está abaixo de 0,3%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>UV400 — testada em laboratório, não apenas etiquetada</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>99% do ofuscamento horizontal eliminado</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Resistente a impacto — não quebra</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Revestimento duro resistente a arranhões</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-4">As 7 Camadas:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">1</span><span>Camada Dura (proteção contra arranhões)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">2</span><span>Camada Estrutural TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">3</span><span>Camada de Ligação TAC</span></div>
                <div className="flex justify-between p-2 bg-primary-100 rounded font-semibold"><span>4</span><span>Filme Polarizante (a mágica)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">5</span><span>Camada de Ligação TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">6</span><span>Camada Estrutural TAC</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">7</span><span>Revestimento de Proteção UV400</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Onde os Polarizados Fazem a Maior Diferença</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AppCard icon="🚗" title="Direção" desc="Ofuscamento da estrada eliminado. Reflexo do painel eliminado. Direção mais segura, ponto." />
            <AppCard icon="🎣" title="Pesca" desc="Enxergue sob a superfície da água. Localize peixes. Leia a estrutura. Uma mudança total." />
            <AppCard icon="⛵" title="Navegação" desc="O ofuscamento do mar aberto é brutal. Polarizados tornam confortável." />
            <AppCard icon="⛷️" title="Esportes na Neve" desc="A neve reflete 80% dos UV. Polarizados + tom escuro = prevenção de cegueira da neve." />
            <AppCard icon="🏖️" title="Praia" desc="Areia e água dobram o ofuscamento. Polarizados tornam os dias de praia realmente relaxantes." />
            <AppCard icon="🏌️" title="Golfe" desc="Leia o green sem apertar os olhos. Acompanhe a bola contra o céu." />
            <AppCard icon="🚴" title="Ciclismo" desc="Ofuscamento de estrada molhada nas pedaladas matinais. Lentes polarizadas cortam na raiz." />
            <AppCard icon="🏃" title="Corrida" desc="Ofuscamento do asfalto com sol baixo. Polarizados mantêm seus olhos descansados por quilômetros." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Coleções Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/esportivo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Óculos Esportivos</h3>
              <p className="text-sm text-gray-600">Todas as nossas armações esportivas com opções polarizadas</p>
            </Link>
            <Link href="/pt/produtos/olho-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Óculos Olho de Gato</h3>
              <p className="text-sm text-gray-600">Armações fashion com upgrade polarizado TAC</p>
            </Link>
            <Link href="/pt/produtos/redondo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Óculos Redondos</h3>
              <p className="text-sm text-gray-600">Redondos vintage com opções de lentes polarizadas</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas sobre Polarizados — Respondidas</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Como posso saber se as lentes são realmente polarizadas?"
              answer="Teste fácil: segure os óculos de sol em frente a uma tela LCD (celular ou computador) e gire-os 90 graus. Se forem verdadeiramente polarizados, a tela vai escurecer ou mudar de cor drasticamente em certos ângulos. Isso é o filtro polarizante bloqueando as ondas de luz da tela. Incluímos um cartão de teste de polarização com cada pedido para que seus clientes possam verificar por conta própria. É uma ótima ferramenta de venda — as pessoas adoram a demonstração."
            />
            <FaqItem
              question="As lentes polarizadas valem o custo extra?"
              answer="Do ponto de vista de margem, com certeza. Os polarizados acrescentam aproximadamente $1,50-3,00 ao seu custo no atacado por par, mas os clientes pagam $10-30 a mais no varejo por 'polarizado' na etiqueta. É o melhor upsell no negócio de óculos de sol. Do ponto de vista de desempenho — se seus clientes dirigem, pescam ou passam tempo perto da água, polarizados não são um luxo. São uma característica de segurança. O ofuscamento causa acidentes."
            />
            <FaqItem
              question="As lentes polarizadas podem afetar a visibilidade de telas de celular ou GPS?"
              answer="Às vezes, sim — e vale a pena saber. Lentes polarizadas podem fazer algumas telas LCD parecerem escuras ou mostrarem padrões de arco-íris em certos ângulos. A maioria das telas OLED modernas de celular lida bem com isso, mas unidades GPS mais antigas e algumas telas de painel de carro podem ser complicadas. Para óculos de direção especificamente, oferecemos lentes com um ângulo de polarização ligeiramente deslocado que reduz esse problema. Basta perguntar pela nossa opção polarizada 'otimizada para motorista'."
            />
            <FaqItem
              question="TAC, CR-39 ou cristal — qual lente polarizada devo escolher?"
              answer="Para a maioria dos compradores no atacado: TAC. É o melhor equilíbrio de qualidade, durabilidade e custo — e representa cerca de 80% dos nossos pedidos polarizados. Escolha CR-39 se vende para óticas ou mercados de luxo onde clareza óptica é a prioridade #1. Escolha cristal se está mirando entusiastas sérios de pesca/navegação que querem a melhor óptica absoluta e não se importam com armações mais pesadas. Na dúvida, comece com TAC."
            />
            <FaqItem
              question="Quais cores de lentes polarizadas vocês oferecem?"
              answer="Doze opções: cinza (neutro, cor real — melhor para dirigir), marrom (contraste aprimorado — ideal para uso diário), âmbar (contraste máximo — favorito para pesca), verde (visual clássico G-15), espelho azul, espelho vermelho, espelho dourado, espelho prateado, amarelo (condições de pouca luz), rosa (golfe/tênis), e fotocromático (ajusta automaticamente à luz). Cinza e marrom representam cerca de 60% de todos os pedidos, mas acabamentos espelhados estão crescendo rápido."
            />
            <FaqItem
              question="Qual é o MOQ e posso misturar polarizados com não polarizados?"
              answer="100 peças por estilo e cor. E sim — você pode misturar versões polarizadas e não polarizadas da mesma armação em um pedido. Muitos dos nossos varejistas têm ambas: não polarizados a $15-20 no varejo como ponto de entrada, e polarizados a $25-35 como o upsell premium. Mesma armação, lente diferente, maior valor médio de pedido. Varejistas espertos oferecem a demonstração comparativa direto no balcão."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">O Upsell Mais Fácil em Óculos</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Os polarizados custam um pouco mais para você. Vendem por muito mais. E os clientes genuinamente
            amam a diferença. Peça amostras, faça a demonstração com a tela LCD, e assista eles
            se venderem sozinhos. Amostras grátis disponíveis — você cobre o frete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Solicitar Catálogo Polarizado</Link>
            <Link href="/pt/produtos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos os Produtos</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Óculos de Sol Polarizados", "item": "https://eyeviewglasses.com/pt/produtos/polarizado" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como posso saber se as lentes são realmente polarizadas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Segure os óculos de sol em frente a uma tela LCD e gire-os 90 graus. Lentes verdadeiramente polarizadas farão a tela escurecer ou mudar de cor em certos ângulos. Incluímos um cartão de teste de polarização com cada pedido." }
          },
          {
            "@type": "Question",
            "name": "As lentes polarizadas valem o custo extra?",
            "acceptedAnswer": { "@type": "Answer", "text": "Com certeza. Os polarizados acrescentam $1,50-3,00 ao custo no atacado mas permitem cobrar $10-30 a mais no varejo. É o melhor upsell no negócio de óculos de sol." }
          },
          {
            "@type": "Question",
            "name": "As lentes polarizadas podem afetar a visibilidade de telas de celular ou GPS?",
            "acceptedAnswer": { "@type": "Answer", "text": "Algumas telas LCD podem parecer escuras em certos ângulos com lentes polarizadas. A maioria dos celulares OLED modernos lida bem. Oferecemos lentes polarizadas otimizadas para motorista com polarização deslocada para reduzir isso." }
          },
          {
            "@type": "Question",
            "name": "TAC, CR-39 ou cristal — qual lente polarizada devo escolher?",
            "acceptedAnswer": { "@type": "Answer", "text": "TAC para a maioria dos compradores (melhor custo-benefício, 80% dos pedidos). CR-39 para mercados de luxo/óptica. Cristal para entusiastas sérios de pesca/navegação que querem a melhor óptica absoluta." }
          },
          {
            "@type": "Question",
            "name": "Quais cores de lentes polarizadas vocês oferecem?",
            "acceptedAnswer": { "@type": "Answer", "text": "Doze opções incluindo cinza, marrom, âmbar, verde G-15, espelho azul/vermelho/dourado/prateado, amarelo, rosa e fotocromático. Cinza e marrom representam cerca de 60% dos pedidos." }
          },
          {
            "@type": "Question",
            "name": "Qual é o MOQ e posso misturar polarizados com não polarizados?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 peças por estilo e cor. Sim, pode misturar versões polarizadas e não polarizadas da mesma armação. Muitos varejistas têm ambas como níveis de entrada e premium." }
          }
        ]
      })}} />
    </main>
  )
}

function AppCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
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
