import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estratégia de Preços para Óculos de Sol: Do Custo de Fábrica ao Preço de Varejo',
  description: 'Um dono de fábrica revela a economia real de preços de óculos de sol -- factory costs, wholesale markup, retail margins, and pricing strategies that work for new and established brands.',
  keywords: 'preços óculos de sol, markup eyewear, preço atacado óculos, margem lucro óculos, estratégia preço varejo',
  alternates: {
    canonical: '/pt/blog/estrategia-precos-oculos-sol',
    languages: {
      'en': '/blog/sunglasses-pricing-strategy',
      'pt': '/pt/blog/estrategia-precos-oculos-sol',
    },
  },
}

export default function SunglassesPricingStrategyPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Estratégia de Preços para Óculos de Sol: Do Custo de Fábrica ao Preço de Varejo",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica revela a economia real de preços de óculos de sol -- from factory floor to retail shelf.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/estrategia-precos-oculos-sol" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the typical markup on sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "The typical markup chain: Fatory cost × 2-3 = wholesale price × 2-2.5 = retail price. So a pair that costs $5 to manufacture might wholesale at $12-15 and retail at $25-35. Direct-to-consumer (DTC) brands skip the wholesale step and capture the full margin, selling that same $5 pair for $25-45. Luxo brands apply even higher markups -- a $10-20 factory cost pair can retail for $200-500+." }
            },
            {
              "@type": "Question",
              "name": "How much do sunglasses cost to manufacture?",
              "acceptedAnswer": { "@type": "Answer", "text": "ODM sunglasses: $3-8 por par (including polarized lenses and basic packaging). OEM custom designs: $5-15+ por par depending on materials and complexity. Premium materials (Italian acetate, Zeiss lenses) can push costs to $15-30 por par. These are FOB factory costs -- add $2-5 por par for shipping, duties, and packaging to get your landed cost." }
            },
            {
              "@type": "Question",
              "name": "What price should I sell my sunglasses for?",
              "acceptedAnswer": { "@type": "Answer", "text": "Your retail price depends on your positioning: Econômico/value ($15-30): ODM frames, basic packaging, competing on price. Mid-range ($30-80): Quality ODM or basic OEM, good branding, DTC focus. Premium ($80-150): Custom OEM designs, premium materials, strong brand story. Luxo ($150+): Exclusive designs, premium everything, brand prestige. Most new DTC brands find success in the $30-60 range, which offers good margins on $5-10 factory costs while remaining accessible." }
            },
            {
              "@type": "Question",
              "name": "Should I offer free shipping on sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you're selling DTC. In 2026, free shipping is table stakes for online retail. Build the shipping cost ($3-7 per order) into your retail price. A pair priced at $42 with free shipping will outperform the same pair at $35 + $7 shipping, even though the customer pays the same amount. The psychology of 'free shipping' is powerful and well-documented." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Negócios</span>
            <span>4 de maio de 2026</span>
            <span>•</span>
            <span>13 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Estratégia de Preços para Óculos de Sol: Do Custo de Fábrica ao Preço de Varejo
          </h1>
          <p className="text-xl text-gray-600">
            Eu vejo os dois lados da equação de preços todos os dias -- quanto custa fabricar óculos de sol e 
            por quanto são vendidos. A diferença é maior do que a maioria das pessoas imagina, e entendê-la é a 
            chave para construir uma marca lucrativa.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice</h2>
          <ul className="space-y-2">
            <li><a href="#factory-costs" className="text-primary-600 hover:underline">Quanto Óculos de Sol Realmente Custam para Fabricar</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">Seu Custo Real Entregue</a></li>
            <li><a href="#markup-chain" className="text-primary-600 hover:underline">A Cadeia de Markup: Fábrica → Atacado → Varejo</a></li>
            <li><a href="#pricing-tiers" className="text-primary-600 hover:underline">Quatro Faixas de Preço e Para Quem São</a></li>
            <li><a href="#dtc-vs-wholesale" className="text-primary-600 hover:underline">DTC vs Atacado: Onde Está o Dinheiro</a></li>
            <li><a href="#pricing-psychology" className="text-primary-600 hover:underline">Psicologia de Preços que Funciona</a></li>
            <li><a href="#common-mistakes" className="text-primary-600 hover:underline">Erros de Precificação que Matam Marcas</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Aqui vai um fato que surpreende a maioria das pessoas: um par de óculos de sol que é vendido no varejo por $150 normalmente custa $8-$15 para fabricar. Isso é um markup de 10-20x. E os pares de luxo de $300+? Frequentemente $15-$30 para produzir. A indústria de óculos funciona com margens enormes -- e é exatamente isso que a torna atraente para novas marcas.
          </p>

          <h2 id="factory-costs" className="text-3xl font-bold mt-16 mb-6">Quanto Óculos de Sol Realmente Custam para Fabricar</h2>
          <p>
            Deixe-me detalhar os custos dos componentes de um par típico de óculos de sol. Esses são preços de fábrica de 2026 com base no que cobramos e no que sei que os concorrentes cobram.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Detalhamento de Custos por Componente</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Componente</th>
                  <th className="px-6 py-4 text-left">Econômico</th>
                  <th className="px-6 py-4 text-left">Intermediário</th>
                  <th className="px-6 py-4 text-left">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Armação (material + mão de obra)</td><td className="px-6 py-4">$1,00-$2,00</td><td className="px-6 py-4">$2,50-$5,00</td><td className="px-6 py-4">$5,00-$12,00</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Lentes (par)</td><td className="px-6 py-4">$0,50-$1,50</td><td className="px-6 py-4">$1,50-$3,00</td><td className="px-6 py-4">$3,00-$8,00</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Dobradiças &amp; ferragens</td><td className="px-6 py-4">$0,20-$0,50</td><td className="px-6 py-4">$0,50-$1,50</td><td className="px-6 py-4">$1,50-$3,00</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Apoios nasais</td><td className="px-6 py-4">$0,05-$0,10</td><td className="px-6 py-4">$0,10-$0,30</td><td className="px-6 py-4">$0,30-$0,80</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Aplicação do logo</td><td className="px-6 py-4">$0,10-$0,20</td><td className="px-6 py-4">$0,20-$0,50</td><td className="px-6 py-4">$0,50-$1,50</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Montagem &amp; CQ</td><td className="px-6 py-4">$0,50-$1,00</td><td className="px-6 py-4">$1,00-$2,00</td><td className="px-6 py-4">$2,00-$4,00</td></tr>
                <tr className="bg-white font-bold"><td className="px-6 py-4">Total FOB</td><td className="px-6 py-4">$2,35-$5,30</td><td className="px-6 py-4">$5,80-$12,30</td><td className="px-6 py-4">$12,30-$29,30</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Os maiores fatores de custo são o <strong>material da armação</strong> e a <strong>qualidade da lente</strong>. Uma armação padrão de TR90 com lentes polarizadas TAC custa $3-$5. O mesmo formato de armação em acetato italiano Mazzucchelli com lentes polarizadas CR-39 sobe para $8-$12. Para um aprofundamento nos custos de lentes, confira nosso{' '}
            <Link href="/pt/blog/guia-lentes-oculos-sol" className="text-primary-600 hover:underline">guia de lentes</Link>{' '}
            e nossa{' '}
            <Link href="/pt/blog/comparacao-materiais-armacoes" className="text-primary-600 hover:underline">comparação de materiais de armação</Link>.
          </p>

          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">Seu Custo Real Entregue</h2>
          <p>
            O custo de fábrica não é seu custo real. Você precisa adicionar tudo que acontece entre a fábrica e as mãos do seu cliente:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-3">Exemplo: Óculos ODM Intermediários</h3>
            <ul className="text-blue-800 space-y-2">
              <li><strong>Custo de fábrica (FOB):</strong> $6,00</li>
              <li><strong>Embalagem (estojo rígido + pano + caixa):</strong> $2,50</li>
              <li><strong>Frete internacional:</strong> $1,50 (marítimo) a $4,00 (aéreo)</li>
              <li><strong>Imposto de importação (2% EUA):</strong> $0,12</li>
              <li><strong>Seguro &amp; despachante aduaneiro:</strong> $0,30</li>
              <li><strong>Armazenagem doméstica:</strong> $0,20</li>
              <li className="font-bold pt-2 border-t border-blue-300">Custo total entregue: $10,62-$13,12</li>
            </ul>
          </div>

          <p>
            Este é o número que você usa para todos os cálculos de preço -- não o preço FOB da fábrica. Já vi muitas marcas novas precificarem com base no custo de fábrica e depois se perguntarem por que suas margens são mais finas do que o esperado. Para mais sobre custos de importação, veja nosso{' '}
            <Link href="/pt/blog/guia-importacao-oculos-sol" className="text-primary-600 hover:underline">guia de importação</Link>.
          </p>

          <h2 id="markup-chain" className="text-3xl font-bold mt-16 mb-6">A Cadeia de Markup: Fábrica → Atacado → Varejo</h2>
          <p>
            A cadeia de markup tradicional de óculos é brutal -- de um jeito bom se você é a marca:
          </p>
          <ol>
            <li><strong>Custo de fábrica → Preço de atacado:</strong> markup de 2-3x. Um custo de fábrica de $6 se torna um preço de atacado de $12-$18.</li>
            <li><strong>Atacado → Preço de varejo:</strong> markup de 2-2,5x. Aquele preço de atacado de $15 se torna $30-$38 no varejo.</li>
            <li><strong>Markup total:</strong> 4-8x da fábrica ao varejo. Aquele par de $6 é vendido por $25-$50.</li>
          </ol>
          <p>
            Para <strong>marcas DTC</strong>, você pula a etapa de atacado completamente. Você captura o markup completo de 4-8x em vez de dividi-lo com um varejista. É por isso que marcas DTC de óculos podem oferecer &quot;qualidade premium pela metade do preço&quot; e ainda ter margens excelentes.
          </p>

          <h2 id="pricing-tiers" className="text-3xl font-bold mt-16 mb-6">Quatro Faixas de Preço &amp; Para Quem São</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Faixa 1: Econômico ($15-$30 varejo)</h3>
          <ul>
            <li><strong>Custo de fábrica:</strong> $2-$5 por par</li>
            <li><strong>Custo entregue:</strong> $5-$9 por par</li>
            <li><strong>Margem bruta (DTC):</strong> 55-70%</li>
            <li><strong>Para quem é:</strong> Marcas de alto volume, vendedores da Amazon, produtos promocionais, óculos para festivais/eventos</li>
            <li><strong>Estratégia:</strong> Volume é rei. Você precisa vender muitos pares para funcionar. Baixo custo de aquisição de cliente é essencial.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Faixa 2: Intermediário ($30-$80 varejo)</h3>
          <ul>
            <li><strong>Custo de fábrica:</strong> $5-$10 por par</li>
            <li><strong>Custo entregue:</strong> $9-$16 por par</li>
            <li><strong>Margem bruta (DTC):</strong> 70-80%</li>
            <li><strong>Para quem é:</strong> A maioria das startups DTC, marcas de estilo de vida, marcas de nicho</li>
            <li><strong>Estratégia:</strong> O ponto ideal para novas marcas. Boas margens, preço acessível, espaço para gastos com marketing. É onde vivem marcas como Knockaround, Blenders e Shady Rays.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Faixa 3: Premium ($80-$150 varejo)</h3>
          <ul>
            <li><strong>Custo de fábrica:</strong> $8-$15 por par</li>
            <li><strong>Custo entregue:</strong> $14-$24 por par</li>
            <li><strong>Margem bruta (DTC):</strong> 75-85%</li>
            <li><strong>Para quem é:</strong> Marcas com forte identidade de design, designs OEM personalizados, marcas focadas em sustentabilidade</li>
            <li><strong>Estratégia:</strong> Exige designs únicos, embalagem premium e uma história de marca envolvente. Fotografia e apresentação devem ser impecáveis. O valor do ciclo de vida do cliente se torna crítico.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Faixa 4: Luxo ($150+ varejo)</h3>
          <ul>
            <li><strong>Custo de fábrica:</strong> $12-$30+ por par</li>
            <li><strong>Custo entregue:</strong> $20-$45+ por par</li>
            <li><strong>Margem bruta (DTC):</strong> 80-90%</li>
            <li><strong>Para quem é:</strong> Grifes de moda, marcas de celebridades, marcas de óculos com design inovador</li>
            <li><strong>Estratégia:</strong> A marca é tudo. O produto precisa ser excelente, mas a história da marca, a experiência e a exclusividade determinam o preço. Exige investimento significativo em marketing e paciência.</li>
          </ul>

          <h2 id="dtc-vs-wholesale" className="text-3xl font-bold mt-16 mb-6">DTC vs Atacado: Onde Está o Dinheiro</h2>
          <p>
            Deixe-me mostrar a matemática do mesmo par de óculos vendido por diferentes canais:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Canal</th>
                  <th className="px-6 py-4 text-left">Seu Preço</th>
                  <th className="px-6 py-4 text-left">Sua Receita</th>
                  <th className="px-6 py-4 text-left">Sua Margem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">DTC (seu site)</td><td className="px-6 py-4">$45 varejo</td><td className="px-6 py-4">$45</td><td className="px-6 py-4">$33 (73%)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Amazon</td><td className="px-6 py-4">$45 varejo</td><td className="px-6 py-4">$31 (após taxas)</td><td className="px-6 py-4">$19 (42%)</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Atacado para varejista</td><td className="px-6 py-4">$22 atacado</td><td className="px-6 py-4">$22</td><td className="px-6 py-4">$10 (22%)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Consignação</td><td className="px-6 py-4">$45 varejo (divisão 60/40)</td><td className="px-6 py-4">$27</td><td className="px-6 py-4">$15 (33%)</td></tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-2">*Baseado em custo entregue de $12 por par</p>
          </div>

          <p>
            A margem DTC é <strong>3,3x maior que a de atacado</strong> no mesmo produto. É por isso que a jogada inteligente para novas marcas é começar DTC, construir uma base de clientes e depois seletivamente adicionar contas de atacado quando você tiver poder de negociação para melhores condições.
          </p>

          <h2 id="pricing-psychology" className="text-3xl font-bold mt-16 mb-6">Psicologia de Preços que Funciona</h2>
          <p>
            Precificação não é só matemática -- é psicologia. Aqui estão as estratégias que vi nossos clientes mais bem-sucedidos usarem:
          </p>
          <ul>
            <li className="mb-4"><strong>Preço charm ($39 vs $40):</strong> Ainda funciona. $39 parece significativamente mais barato que $40, mesmo sendo $1 de diferença. As marcas DTC de óculos mais bem-sucedidas precificam a $29, $39, $49 ou $59.</li>
            <li className="mb-4"><strong>Limite de frete grátis:</strong> &quot;Frete grátis em pedidos acima de $50&quot; incentiva clientes a comprar dois pares. Se seu valor médio de pedido é $39, um limite de frete grátis de $50 pode aumentar o AOV em 30-40%.</li>
            <li className="mb-4"><strong>Preço de combo:</strong> &quot;Compre 2, ganhe 20% de desconto&quot; ou &quot;3 por $99&quot; (quando o preço individual é $39). Combos aumentam o AOV e movimentam mais estoque por transação.</li>
            <li className="mb-4"><strong>Preço âncora:</strong> Mostre seu preço de varejo ao lado de uma referência &quot;comparável a $120&quot;. Isso funciona especialmente bem se você está se posicionando como uma marca DTC que elimina intermediários.</li>
            <li className="mb-4"><strong>Consistência de preços entre estilos:</strong> Considere precificar todos os estilos no mesmo ponto de preço (ex.: todos a $39). Isso simplifica a decisão de compra e elimina a hesitação &quot;o par de $49 é realmente melhor que o de $39?&quot;.</li>
          </ul>

          <h2 id="common-mistakes" className="text-3xl font-bold mt-16 mb-6">Erros de Precificação que Matam Marcas</h2>
          <ol>
            <li className="mb-4"><strong>Precificar muito baixo.</strong> Este é o erro nº 1 que vejo. Novas marcas desvalorizam seu produto, precificam a $19-$25, e depois não conseguem bancar marketing, não conseguem lidar com devoluções e não conseguem reinvestir em estoque. Você precisa de margens, e precisa que sejam saudáveis. Melhor vender menos pares a $39 do que mais a $19.</li>
            <li className="mb-4"><strong>Esquecer do custo de aquisição de cliente (CAC).</strong> Se custa $10 em anúncios para adquirir um cliente e sua margem é $15, você só está ganhando $5 por venda. Isso é muito apertado. Construa sua precificação para sobreviver a um CAC de $10-$15 e ainda deixar espaço para lucro.</li>
            <li className="mb-4"><strong>Não considerar devoluções.</strong> Espere uma taxa de devolução de 5-10% para vendas online de óculos. Se você precifica muito apertado, devoluções comem seu lucro. Precifique com uma margem de segurança.</li>
            <li className="mb-4"><strong>Corrida para o fundo na Amazon.</strong> Guerras de preço na Amazon destroem valor para todos. Se você vai vender na Amazon, mantenha paridade de preço com seu site. Competir apenas por preço é uma estratégia perdedora a menos que você tenha escala massiva.</li>
            <li className="mb-4"><strong>Mudar preços com muita frequência.</strong> Vendas e descontos frequentes treinam clientes a esperarem por promoções. Se precisar dar desconto, use eventos de tempo limitado (Black Friday, liquidação sazonal) em vez de vendas constantes. Seu preço cheio deve ser seu preço real 90% do tempo.</li>
          </ol>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">💡 Minha Fórmula de Preço para Novas Marcas</h3>
            <p className="text-green-800">
              <strong>Preço de varejo = Custo entregue × 4-5 (DTC) ou × 2,5-3 (atacado).</strong> Se seu custo entregue é $10/par, precifique DTC a $40-$50. Isso dá espaço para marketing ($8-$12 por cliente), devoluções (5-10%) e um lucro saudável ($10-$15 por par). Simples, sustentável, e funciona para 80% das marcas de faixa intermediária. Para mais sobre como acertar o orçamento da sua startup, confira nosso{' '}
              <Link href="/pt/blog/custo-criar-marca-oculos-sol" className="text-green-700 underline">guia de custos para começar</Link>.
            </p>
          </div>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qual é o markup típico em óculos de sol?</h3>
              <p className="text-gray-600">
                Custo de fábrica × 2-3 = preço de atacado × 2-2,5 = preço de varejo. Markup total: 4-8x da fábrica ao varejo. Marcas DTC capturam a margem completa; atacado divide com varejistas. Marcas de luxo aplicam markups de 10-20x+.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto custa fabricar óculos de sol?</h3>
              <p className="text-gray-600">
                ODM: $3-$8/par. OEM: $5-$15+/par. Materiais premium podem chegar a $15-$30/par. Adicione $4-$8 para frete, impostos e embalagem para obter seu custo real entregue.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Por qual preço devo vender meus óculos?</h3>
              <p className="text-gray-600">
                Econômico: $15-$30. Intermediário: $30-$80. Premium: $80-$150. Luxo: $150+. A maioria das novas marcas DTC tem sucesso na faixa de $30-$60 -- boas margens, preço acessível, espaço para gastos com marketing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Devo oferecer frete grátis em óculos?</h3>
              <p className="text-gray-600">
                Sim, para vendas DTC. Inclua o custo de frete ($3-$7) no seu preço de varejo. &quot;$42 com frete grátis&quot; supera &quot;$35 + $7 de frete&quot; consistentemente. É o básico no e-commerce de 2026.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda com Seu Modelo de Preços?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vou fornecer um detalhamento de custos para seu produto específico -- materiais, 
              lentes, embalagem e frete. Com os números reais, você pode construir uma estratégia de preços 
              que realmente funciona.
            </p>
            <Link href="/pt/contato" className="btn-primary">
              Receba um Detalhamento de Custos
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais Direto da Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/custo-criar-marca-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Quanto Custa Criar uma Marca de Óculos de Sol?</h3>
                <p className="text-gray-600 text-sm">Detalhamento completo do orçamento de $5K para começar simples até $50K para lançamento premium.</p>
              </Link>
              <Link href="/pt/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM: Qual é a Diferença?</h3>
                <p className="text-gray-600 text-sm">O modelo de fabricação que você escolhe impacta diretamente seu poder de precificação.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
