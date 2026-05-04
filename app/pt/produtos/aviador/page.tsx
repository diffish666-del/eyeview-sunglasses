import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Óculos de Sol Aviador no Atacado | Fabricante de Óculos Aviador OEM - EyeView',
  description: 'Fabricante líder de óculos de sol aviador no atacado. Óculos aviador personalizados com gravação de logo, armações de metal, lentes UV400/polarizadas. MOQ 100 pçs. Direto de fábrica. Solicite orçamento!',
  keywords: 'óculos de sol aviador no atacado, fabricante de óculos aviador, óculos aviador personalizados, OEM óculos aviador, óculos de sol no atacado, fabricante de óculos, armações metálicas no atacado',
  openGraph: {
    title: 'Óculos de Sol Aviador no Atacado | Fabricante OEM - EyeView',
    description: 'Fabricante líder de óculos de sol aviador no atacado. Logo personalizado, armações metálicas, lentes UV400/polarizadas. MOQ 100 pçs. Preços de fábrica.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/produtos/aviador',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/aviador',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/aviator',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/aviador',
    },
  },
}

const aviatorFaqs = [
  {
    question: 'Qual é o pedido mínimo para óculos aviador no atacado?',
    answer: 'Apenas 100 peças por modelo. E a parte boa é que você pode misturar dentro dessas 100. Então pode pedir 20 armações douradas com lentes cinza, 30 prateadas com azul espelhado e 50 pretas com degradê. Isso permite testar quais combinações seus clientes realmente compram em vez de adivinhar. A maioria dos nossos clientes de aviador começa com 200-300 peças em 2-3 combinações de cor, depois faz reposição das que mais venderam em quantidades maiores.',
  },
  {
    question: 'Quais opções de metal vocês oferecem para armações aviador?',
    answer: 'Três principais. O aço inoxidável é o mais popular — resistente, bonito, não mancha e custa US$8-12/par. A liga de alumínio é cerca de 40% mais leve (ótima para uso o dia todo) e custa US$10-14/par. E tem o beta-titânio para o segmento premium — hipoalergênico (a Organização Internacional de Normalização classifica o titânio como material biocompatível conforme ISO 5832), incrivelmente leve com 15-20 gramas e praticamente impossível de quebrar. O titânio custa US$14-22/par, mas permite que você venda a US$80-150+ no varejo, então as margens são melhores. Qualquer um deles pode receber revestimento em dourado, prateado, preto, ouro rosé ou cores personalizadas.',
  },
  {
    question: 'Posso gravar meu logo em óculos aviador?',
    answer: 'Com certeza, e é aqui que os aviadores de metal realmente se destacam em comparação com armações de plástico. A gravação a laser fica incrível em metal — nítida, permanente e elegante. Podemos gravar na parte interna ou externa das hastes. Se quiser algo mais chamativo, fazemos insígnias metálicas 3D (liga de zinco ou aço inoxidável) que são soldadas diretamente na haste ou na ponte. Também fazemos impressão em lentes para logos discretos no canto e plaquetas nasais gravadas sob medida, caso você realmente queira apostar forte na identidade da marca.',
  },
  {
    question: 'Vocês oferecem lentes polarizadas para aviador?',
    answer: 'Sim, e eu recomendo fortemente. Nossas lentes polarizadas TAC usam um filme de 7 camadas que elimina 99% do ofuscamento — a diferença é enorme, especialmente para dirigir. O argumento de negócio: aviadores polarizados vendem por 25-40% a mais no varejo do que os UV400 padrão. Um par que é vendido a US$40 sem polarização facilmente chega a US$50-55 polarizado. Também fazemos lentes fotocromáticas (escurecem na luz solar), revestimentos espelhados, antirreflexo e degradês. Misture e combine como quiser.',
  },
  {
    question: 'Qual a diferença entre aviador e wayfarer para atacado?',
    answer: 'Boa pergunta — recebemos muito essa. A versão curta: aviadores são de metal, wayfarers são de acetato/plástico. Isso significa que aviadores custam um pouco mais por par (US$8-14 vs US$5-11), mas também transmitem uma sensação mais premium. Aviadores tendem a ser ligeiramente mais masculinos e têm aquela herança militar/piloto a seu favor. Wayfarers são mais unissex e vêm em muito mais cores. Honestamente? A maioria das marcas de sucesso trabalha com ambos. Se tiver que escolher um, aviador se busca posicionamento premium, wayfarer se quer volume.',
  },
  {
    question: 'Que embalagens posso ter com meu pedido de aviador?',
    answer: 'Oferecemos a linha completa. A configuração mais popular é um estojo rígido (EVA com seu logo impresso) mais uma bolsa de microfibra que serve também como pano de limpeza. Custa cerca de US$1,50-2,50 por conjunto dependendo dos materiais. Também fazemos estojos de couro, latas metálicas, caixas de papelão personalizadas com impressão colorida, cartões de garantia e etiquetas. Para linhas premium, alguns clientes optam por caixas com fecho magnético ou até estojos de madeira. O MOQ para embalagem é de 500 peças — mas você pode usar embalagem genérica no primeiro pedido pequeno e mudar para personalizada na reposição.',
  },
]

const products = [
  {
    name: 'Aviador Clássico Dourado',
    description: 'Este é o que todo mundo imagina quando você diz "aviador." Aço inoxidável polido com tom dourado, formato gota, lentes verdes G-15 que cortam o ofuscamento sem deixar tudo com aparência estranha. O acabamento dourado tem revestimento PVD (não é tinta spray barata), então aguenta o uso diário. Vendemos mais deste do que qualquer outro SKU individual — e a maioria dos nossos clientes diz o mesmo. Se você está lançando uma marca de óculos e quer uma aposta segura, é este.',
    price: '$8.50 - $12.00',
    moq: '100 pçs',
    features: ['Aço Inoxidável', 'Lente Verde G-15', 'Acabamento PVD Dourado', 'Plaquetas de Silicone'],
  },
  {
    name: 'Aviador Espelhado Prateado',
    description: 'Armação prateada, lentes espelhadas prateadas — o tipo de óculos de sol que você vê em toda férias na praia. O revestimento espelhado reflete cerca de 60% da luz incidente, o que os torna genuinamente bons para condições de muita luminosidade (não apenas bonitos). A armação é aço inoxidável com banho de ródio que não vai manchar mesmo em ar salgado do litoral. As dobradiças de mola dão flexibilidade para se adaptar a diferentes tamanhos de cabeça sem ficar apertado ou frouxo demais. Grande sucesso para marcas de resort e lojas de praia.',
    price: '$9.00 - $13.00',
    moq: '100 pçs',
    features: ['Banho de Ródio', 'Revestimento Espelhado', 'Dobradiças de Mola', 'Resistente à Corrosão'],
  },
  {
    name: 'Aviador Stealth Preto Fosco',
    description: 'Para marcas que buscam aquele visual tático, sem frescura. O eletrobanho fosco dá à armação uma superfície completamente antirreflexo — uma sensação muito diferente do dourado ou prateado brilhante. Combinadas com lentes escuras fumê que bloqueiam 85% da luz visível, estes são proteção solar séria. Vemos muitos pedidos de marcas outdoor, empresas de suprimentos para forças de segurança e marcas de moda masculina. As pontas de haste reforçadas são um toque legal — seguram sem escorregar mesmo quando você sua.',
    price: '$9.00 - $13.00',
    moq: '100 pçs',
    features: ['Acabamento Fosco', 'Lente Fumê Escura', 'Pontas Reforçadas', 'Antirreflexo'],
  },
  {
    name: 'Aviador Fashion Ouro Rosé',
    description: 'O ouro rosé está em alta há cerca de cinco anos e não mostra sinais de desaceleração. O tom quente rosa-dourado fotografa lindamente (enorme para marcas que vendem pelo Instagram) e favorece praticamente todos os tons de pele. Combinamos com lentes degradê rosa — escuras em cima, claras embaixo — o que dá aquele visual de moda sem esforço. Feitas em liga de alumínio, pesam menos de 25 gramas. Se sua cliente é uma mulher de 22 anos comprando pelo celular, é nisso que ela vai clicar.',
    price: '$10.00 - $14.00',
    moq: '100 pçs',
    features: ['Liga de Alumínio', 'Lente Degradê Rosa', 'Menos de 25g', 'Tom Ouro Rosé'],
  },
  {
    name: 'Aviador Polarizado Espelhado Azul',
    description: 'Lentes espelhadas azul oceano vívido com polarização real por baixo — então ficam incríveis E realmente funcionam. O filme polarizado TAC bloqueia 99% do ofuscamento que rebate da água, estradas e neve. A armação gunmetal mantém o foco naquelas lentes. Esta é nossa recomendação número um para clientes que vendem para o público litorâneo/surf/pesca. Fotografam bem, funcionam bem e justificam um preço de varejo mais alto por causa da polarização. Custam cerca de US$2-3 a mais por par que os não polarizados, mas você pode cobrar US$15-20 a mais no varejo.',
    price: '$11.00 - $15.00',
    moq: '100 pçs',
    features: ['Polarizado TAC', 'Espelhado Azul', 'Armação Gunmetal', '99% Redução de Ofuscamento'],
  },
  {
    name: 'Aviador Premium de Titânio',
    description: 'O topo da nossa linha aviador. Armação de beta-titânio que pesa 15 gramas — você mal sente no rosto. O titânio é hipoalergênico (sem níquel, sem reações), à prova de corrosão, e você pode dobrá-lo e ele volta ao lugar. Combinamos com lentes ópticas CR-39 antirreflexo — a mesma qualidade que você encontraria em armações de grife de US$200+. Isto é para marcas que querem competir no segmento premium do mercado. Seu preço de varejo pode facilmente ser US$80-150+, e o custo por unidade ainda é apenas US$14-22. Faça as contas dessas margens.',
    price: '$14.00 - $22.00',
    moq: '100 pçs',
    features: ['Beta Titânio', 'Lente Óptica CR-39', 'Antirreflexo', 'Apenas 15 Gramas'],
  },
]

export default function AviadorPagePt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Aviador no Atacado',
        description: 'Óculos de sol aviador clássicos com armação metálica em formato gota. Disponíveis em aço inoxidável, liga de alumínio e titânio. Opções de lentes UV400 e polarizadas. Personalização OEM completa com gravação de logo.',
        minPrice: '8.50',
        maxPrice: '22.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos Aviador', url: 'https://eyeviewsunglasses.com/pt/produtos/aviador' }
      ]} />
      <FAQPageSchema faqs={aviatorFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Óculos Aviador</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Óculos de Sol Aviador no Atacado
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
              alt="Óculos de Sol Aviador no Atacado - Fabricante OEM de Armações Metálicas"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Um dado curioso: o aviador nunca foi pensado como artigo de moda. Em 1936, a <a href="https://www.bausch.com/our-company/history/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bausch &amp; Lomb</a> conseguiu um contrato do Corpo Aéreo do Exército dos EUA para projetar óculos de sol para pilotos militares. O problema era específico — os pilotos estavam voando mais alto e mais rápido do que nunca, e o sol estava prejudicando a visão deles. A solução? Uma lente grande em formato de gota que cobria toda a cavidade ocular, uma armação metálica fina que não pesava quase nada sob um capacete de voo, e uma ponte dupla sobre o nariz para distribuir a pressão. Chamaram de &ldquo;aviador&rdquo; porque, bem, era quem usava.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Aí veio a Segunda Guerra Mundial, e de repente milhões de soldados estavam usando esses óculos. Quando voltaram para casa, continuaram usando. Nos anos 60 e 70, os aviadores tinham saltado da cabine do piloto para Hollywood — usados por todo mundo, de Paul Newman ao elenco de Top Gun. O estilo simplesmente pegou. Quase 90 anos depois, o design básico praticamente não mudou, e os aviadores continuam sendo um dos três modelos de óculos de sol mais vendidos no mundo. Isso não é tendência — é um clássico.
              </p>
              <p className="text-lg leading-relaxed">
                Produzimos mais de 200.000 pares de <strong>óculos aviador personalizados</strong> por ano para marcas em mais de 50 países. Nossa fábrica conta com linhas de produção dedicadas a armações metálicas com usinagem CNC, eletrobanho PVD e montagem de precisão de lentes. Se você precisa de 100 pares para testar um novo mercado ou 50.000 pares para um lançamento nacional no varejo, temos a capacidade e a experiência. E como os aviadores são nosso carro-chefe, temos o processo refinado — o que significa produção mais rápida, menos defeitos e preços melhores.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nossa Coleção Aviador</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
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
                      ['Material da Armação', 'Aço Inoxidável / Liga de Alumínio / Beta Titânio'],
                      ['Peso da Armação', 'Aço: 28-32g | Alumínio: 18-22g | Titânio: 15-18g'],
                      ['Material da Lente', 'Policarbonato / TAC Polarizada / CR-39 Óptica / Vidro'],
                      ['Largura da Lente', '55mm / 58mm / 60mm / 62mm'],
                      ['Largura da Ponte', '14mm / 15mm / 16mm / 18mm'],
                      ['Comprimento da Haste', '135mm / 140mm / 145mm'],
                      ['Altura da Lente', '48mm - 52mm (formato gota)'],
                      ['Proteção UV', 'UV400 — bloqueia 100% dos raios UVA (315-380nm) e UVB (280-315nm)'],
                      ['Polarização', 'Opcional filme TAC de 7 camadas — 99% de redução de ofuscamento'],
                      ['Cores da Armação', 'Dourado, Prateado, Gunmetal, Preto Fosco, Ouro Rosé ou PVD personalizado'],
                      ['Cores da Lente', 'Cinza, Verde G-15, Marrom, Azul, Rosa, Espelhado, Degradê'],
                      ['Plaquetas Nasais', 'Silicone ajustável com braço de titânio'],
                      ['Dobradiças', 'Barrica padrão ou com mola (ajuste flexível)'],
                      ['Certificações', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001 — documentação disponível sob solicitação'],
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

          {/* Frame Material Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Escolhendo o Metal Certo para Seus Aviadores</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Esta é uma das primeiras decisões que você vai tomar, e afeta tudo — custo, peso, durabilidade e o quão premium seu produto parece na mão de alguém. Aqui vai a análise honesta.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔩</div>
                <h3 className="text-xl font-bold mb-3">Aço Inoxidável</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nossa opção mais popular e a que recomendamos para a maioria das marcas. Usamos <a href="https://en.wikipedia.org/wiki/SAE_304_stainless_steel" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">aço grau 304 ou 316L</a> — o mesmo material de bons relógios. É forte, não corrói e aceita revestimento maravilhosamente. Dourado, prateado, preto, ouro rosé — todos ficam ótimos em aço e duram com o tempo. O peso (28-32g) joga a seu favor porque clientes associam esse leve peso com qualidade. Ideal para marcas com varejo de US$20-60.
                </p>
                <div className="text-primary-600 font-bold">US$8 - 12 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🪶</div>
                <h3 className="text-xl font-bold mb-3">Liga de Alumínio</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Se seus clientes valorizam conforto — e especialmente se usam óculos de sol o dia todo — o alumínio vale o investimento. Com 18-22g é visivelmente mais leve que o aço. Usamos <a href="https://en.wikipedia.org/wiki/6061_aluminium_alloy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">liga aeronáutica 6061-T6 ou 7075</a> (o mesmo material usado em fuselagens de aviões, caso queira um argumento de venda). As armações podem ser anodizadas em praticamente qualquer cor, e o acabamento é muito durável. Ideal para marcas outdoor, athleisure e a faixa de varejo de US$40-80.
                </p>
                <div className="text-primary-600 font-bold">US$10 - 14 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Titânio</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A jogada de prestígio. O beta-titânio com 15-18g é quase comicamente leve — as pessoas colocam e imediatamente dizem &ldquo;uau.&rdquo; É 100% hipoalergênico (sem níquel algum), o que é um verdadeiro argumento de venda para peles sensíveis. E a flexibilidade é impressionante — você pode dobrar as hastes quase até ficarem planas e elas voltam ao lugar. O porém? Custa mais. Mas veja: o titânio permite que você venda no varejo a US$80-200+ sem constrangimento. As margens por par costumam ser melhores do que armações mais baratas.
                </p>
                <div className="text-primary-600 font-bold">US$14 - 22 / par</div>
              </div>
            </div>
          </section>

          {/* Lens Options */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Opções de Lentes</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              A armação chama a atenção, mas a lente é o que seu cliente olha através todos os dias. Aqui está o que oferecemos.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Policarbonato (PC)</h3>
                <p className="text-sm text-gray-600">O padrão. Resistente a impactos, leve, inquebrável — 10x mais forte que vidro. Serve para tudo, de uso casual a esportes. Todas as nossas cores e revestimentos espelhados estão disponíveis em PC. É o que 70% dos nossos clientes usam.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">TAC Polarizada</h3>
                <p className="text-sm text-gray-600">Sete camadas de filme polarizado entre lâminas de PC. Elimina 99% do ofuscamento refletido. O upgrade que justifica cobrar mais. Adiciona cerca de US$2-3 ao custo por par, mas permite cobrar US$15-20 a mais no varejo. Vale a pena.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">CR-39 Óptica</h3>
                <p className="text-sm text-gray-600">Se quer competir com as grandes marcas em qualidade de lente, esta é a escolha. Número de Abbe de 58 significa óptica perfeita sem distorção. Resistente a riscos. Mais leve que vidro. A escolha para posicionamento premium.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Fotocromática</h3>
                <p className="text-sm text-gray-600">Escurece na luz solar, clareia em ambientes internos. Vai da Categoria 1 à Categoria 3 em cerca de 30 segundos. Recurso interessante e bom argumento de venda para clientes que querem um único par para tudo. Adiciona cerca de US$3-4 por par.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Vidro</h3>
                <p className="text-sm text-gray-600">Da velha escola, mas alguns mercados adoram. Melhor clareza óptica, mais resistente a riscos, mais pesado. Popular na Europa e Japão, onde lentes de vidro carregam percepção premium. Podemos fazer vidro mineral em todas as tonalidades padrão.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Revestimentos Disponíveis</h3>
                <p className="text-sm text-gray-600">Espelhado (prateado, azul, dourado, vermelho, verde, roxo), antirreflexo, hidrofóbico (repele água), oleofóbico (resiste a impressões digitais) e antiembaçante. Combine como quiser.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Faça do Seu Jeito</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              É aqui que você transforma um ótimo par de óculos de sol no SEU produto. Tudo o que podemos personalizar.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Logo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Gravação a laser</strong> — o mais popular. Limpo, permanente, fica ótimo em metal. Interior ou exterior da haste.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Insígnia metálica</strong> — uma pequena insígnia 3D de liga de zinco ou aço soldada à haste. Parece caro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Impressão na lente</strong> — pequeno logo serigrafado no canto da lente. Sutil mas visível.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Plaquetas personalizadas</strong> — seu logo gravado ou impresso nas plaquetas de silicone. Um detalhe bonito.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Cores</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Armação:</strong> Dourado, Prateado, Preto, Gunmetal, Ouro Rosé — ou nos dê um código Pantone e igualamos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tonalidades de lente:</strong> Cinza, Verde, Marrom, Azul, Rosa, Amarelo, Vermelho — ou cor personalizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Espelhado:</strong> Prateado, Azul, Dourado, Vermelho, Verde, Roxo, Rosé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Degradê:</strong> Degradê de cima para baixo em qualquer cor de lente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Embalagem</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Estojos rígidos:</strong> EVA com zíper, couro com fecho magnético ou lata metálica — todos com seu logo impresso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Bolsas macias:</strong> Microfibra com cordão e logo — serve também como pano de limpeza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Caixas de varejo:</strong> Papelão impresso em cores, insertos personalizados, abas para pendurar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> Panos de limpeza, cartões de garantia, etiquetas, adesivos — tudo com sua marca</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Quem Compra Aviadores no Atacado?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Enviamos aviadores para uma gama bem ampla de negócios. Estes são os mais comuns.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏪 Donos de Marcas de Óculos</h3>
                <p className="text-gray-300 text-sm">Marcas novas e estabelecidas construindo sua linha de produtos. Aviadores costumam ser o primeiro estilo lançado — são seguros, vendem e ficam bem em fotos de marketing.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🛍️ Lojas de Varejo</h3>
                <p className="text-gray-300 text-sm">Boutiques, lojas de surf, óticas e compradores de lojas de departamento buscando marca própria. Nosso mínimo de 100 peças permite que lojas pequenas entrem sem grande risco.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🌐 Vendedores Online</h3>
                <p className="text-gray-300 text-sm">Vendedores de Amazon, Shopify, Mercado Livre que precisam de produto de qualidade com margens que funcionem para e-commerce. Podemos fornecer fotos de produto e descrições para acelerar seus anúncios.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🎁 Corporativo e Promocional</h3>
                <p className="text-gray-300 text-sm">Empresas que pedem aviadores com marca para feiras, torneios de golfe, presentes de equipe e eventos. Alto valor percebido a um preço que funciona para orçamentos promocionais.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏨 Hotéis e Resorts</h3>
                <p className="text-gray-300 text-sm">Marcas de hotelaria oferecendo aviadores personalizados como amenities ou itens de loja de presentes. Embalagem personalizada com o nome do resort cria um belo souvenir que os hóspedes realmente guardam.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">📦 Distribuidores</h3>
                <p className="text-gray-300 text-sm">Atacadistas regionais que abastecem múltiplos varejistas. Nossos preços por volume em pedidos de 1.000+ e 5.000+ dão aos distribuidores as margens que precisam para atender suas contas.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes sobre Óculos Aviador</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {aviatorFaqs.map((faq, index) => (
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
              <Link href="/pt/produtos/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Wayfarer</h3>
                <p className="text-gray-600 text-sm">O outro estilo &ldquo;indispensável&rdquo;. Armações de acetato, muitas cores e o formato mais vendido no mundo. A maioria das marcas trabalha com aviadores e wayfarers.</p>
              </Link>
              <Link href="/pt/produtos/polarizado" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Polarizados</h3>
                <p className="text-gray-600 text-sm">Adicione lentes polarizadas a qualquer aviador para um upgrade premium. 99% de redução de ofuscamento, 25-40% a mais no preço de varejo. A forma mais fácil de melhorar suas margens.</p>
              </Link>
              <Link href="/pt/produtos/esportivo" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Esportivos</h3>
                <p className="text-gray-600 text-sm">Se seus clientes precisam de algo mais resistente que aviadores — armações TR90 envolventes com pegadas antiderrapantes para corrida, ciclismo e esportes ao ar livre.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Pedir Aviadores?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Conte-nos o que precisa — estilo, quantidade, qualquer personalização — e responderemos em 24 horas com preços.
              Amostras são enviadas em 3-5 dias. Sem compromisso até você estar pronto.
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
