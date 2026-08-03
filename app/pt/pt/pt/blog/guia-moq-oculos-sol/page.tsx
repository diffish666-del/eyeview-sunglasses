import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guia de MOQ para Óculos de Sol: Quantos Pares Pedir na Primeira Vez?',
  description: 'Um dono de fábrica detalha o MOQ de óculos de sol para pedidos por atacado. ODM starts at 50-200 pieces, OEM at 300-1,000+. Learn the smart way to scale your first sunglasses order without overcommitting.',
  keywords: 'MOQ óculos atacado, quantidade mínima pedido óculos, pedido atacado óculos, MOQ ODM, MOQ OEM óculos',
  alternates: {
    canonical: '/pt/blog/guia-moq-oculos-sol',
    languages: {
      'en': '/blog/sunglasses-moq-guide',
      'pt': '/pt/blog/guia-moq-oculos-sol',
    },
  },
}

export default function SunglassesMoqGuidePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Guia de MOQ para Óculos de Sol: Quantos Pares Pedir na Primeira Vez?",
          "datePublished": "2026-05-03",
          "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica detalha o MOQ de óculos de sol para pedidos por atacado -- ODM, OEM, and custom mold minimums with a practical scaling strategy for new brands.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/guia-moq-oculos-sol" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the typical MOQ for wholesale sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "It depends on the production model. ODM (picking from existing designs) typically requires 50-200 pieces por modelo. OEM (custom designs using existing molds) runs 300-1,000 pieces por modelo. Fully custom mold orders start at 500+ pieces because the tooling investment needs to be justified. Some factories, including ours, offer lower MOQs for first-time orders to help new brands get started." }
            },
            {
              "@type": "Question",
              "name": "Can I order less than 100 pairs of sunglasses from a factory?",
              "acceptedAnswer": { "@type": "Answer", "text": "Some factories do offer MOQs below 100 for ODM orders -- we start at 50 pieces for first-time clients. However, be aware that very low quantities mean higher per-unit costs, sometimes 30-50% more than ordering 200+ pieces. If a factory advertises 'no MOQ,' they're likely a trading company reselling from stock, not an actual manufacturer." }
            },
            {
              "@type": "Question",
              "name": "Why do sunglasses factories have minimum order quantities?",
              "acceptedAnswer": { "@type": "Answer", "text": "MOQs exist because of production economics. Setting up a production line -- calibrating machines, mixing specific colors, configuring lens cutting equipment -- takes time and labor whether you're making 10 pairs or 10,000. Below a certain quantity, the setup costs por unidade make the order unprofitable for the factory. For OEM orders, there's also the mold investment ($500-3,000) that needs to be spread across enough units to make sense." }
            },
            {
              "@type": "Question",
              "name": "Should I start with ODM or OEM for my first sunglasses order?",
              "acceptedAnswer": { "@type": "Answer", "text": "Start with ODM. Every time. Unless you have deep pockets and a proven audience, ODM lets you test the market with lower risk -- smaller quantities, no mold fees, faster turnaround. Use your first 2-3 ODM orders to learn what your customers actually buy, then invest in custom OEM designs for your proven bestsellers. About 40% of our long-term OEM clients started with ODM first." }
            },
            {
              "@type": "Question",
              "name": "How much inventory should a new sunglasses brand keep in stock?",
              "acceptedAnswer": { "@type": "Answer", "text": "For your first order, keep it lean -- 3-5 styles, 50-100 pieces each. That's enough to test the market without drowning in unsold inventory. Once you know your bestsellers (usually within 60-90 days of selling), reorder those in larger quantities (200-500 pieces) and drop the styles that didn't move. The goal is to turn inventory fast, not to have a warehouse full of sunglasses collecting dust." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Atacado</span>
            <span>3 de maio de 2026</span>
            <span>•</span>
            <span>14 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guia de MOQ para Óculos de Sol: Quantos Pares Pedir na Primeira Vez?
          </h1>
          <p className="text-xl text-gray-600">
            A pergunta número um que recebo de novos donos de marcas não é sobre preço. É sobre 
            quantidade. Veja como planejar seu primeiro pedido sem ir à falência ou 
            acabar com uma garagem cheia de aviadores encalhados.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* Índice */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice</h2>
          <ul className="space-y-2">
            <li><a href="#what-is-moq" className="text-primary-600 hover:underline">O que MOQ Significa (e Por que Fábricas Têm Um)</a></li>
            <li><a href="#moq-ranges" className="text-primary-600 hover:underline">Faixas de MOQ para Óculos: ODM, OEM e Molde Personalizado</a></li>
            <li><a href="#why-moq-varies" className="text-primary-600 hover:underline">Por que o MOQ Varia Tanto Entre Fábricas</a></li>
            <li><a href="#smart-strategy" className="text-primary-600 hover:underline">A Estratégia Inteligente de Escala: Comece Pequeno, Prove, Depois Cresça</a></li>
            <li><a href="#first-order-math" className="text-primary-600 hover:underline">Matemática do Primeiro Pedido: Quanto Você Realmente Vai Gastar</a></li>
            <li><a href="#inventory-tips" className="text-primary-600 hover:underline">Gestão de Estoque para Novas Marcas</a></li>
            <li><a href="#negotiating-moq" className="text-primary-600 hover:underline">Como Negociar MOQs Menores (Sem Irritar Sua Fábrica)</a></li>
            <li><a href="#mistakes" className="text-primary-600 hover:underline">Os Maiores Erros de MOQ que Já Vi</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas que Ouço Toda Semana</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Duas semanas atrás, uma mulher de Toronto me mandou um e-mail. Ela passou seis meses projetando sua marca -- logo, site, conteúdo para Instagram, tudo. Então começou a ligar para fábricas e bateu em uma parede: &quot;Eles querem que eu peça 1.000 pares por modelo. Eu nem sei se alguém vai comprar isso ainda.&quot;
          </p>
          <p>
            Eu ouço alguma versão dessa história toda semana. E me parte o coração porque o problema não é que ela não estava pronta para começar uma marca. O problema é que ninguém explicou como o MOQ de óculos no atacado realmente funciona -- o que os números significam, por que existem e como usá-los estrategicamente em vez de simplesmente aceitar o que a fábrica jogar para você.
          </p>
          <p>
            Então aqui está. Tudo o que sei sobre quantidades mínimas de pedido após 20 anos administrando uma fábrica de óculos em Shenzhen. Sem enrolação, sem discurso de vendas -- apenas os números e o raciocínio por trás deles.
          </p>

          {/* What Is MOQ */}
          <h2 id="what-is-moq" className="text-3xl font-bold mt-16 mb-6">O que MOQ Significa (e Por que Fábricas Têm Um)</h2>
          <p>
            MOQ significa Quantidade Mínima de Pedido (Minimum Order Quantity). É o menor número de unidades que uma fábrica produzirá em um único pedido. Conceito simples. Mas entender <em>por que</em> ele existe vai mudar a forma como você pensa sobre seu primeiro pedido.
          </p>
          <p>
            Veja o que acontece quando você faz um pedido de, digamos, 200 pares de um estilo específico de óculos em preto fosco com lentes polarizadas fumê:
          </p>
          <ol>
            <li>Pegamos o molde e montamos na máquina de injeção. Isso leva 2-3 horas de um técnico.</li>
            <li>Calibramos a máquina para o material específico de acetato ou TR90 -- temperatura, pressão, tempo de ciclo. Mais uma hora.</li>
            <li>Misturamos a cor exata. Para preto fosco, é simples. Para um padrão tartaruga personalizado? Meio dia.</li>
            <li>Configuramos a linha de corte e revestimento de lentes para a especificação da sua lente. Polarizada fumê com revestimento antirreflexo é diferente de degradê marrom com apenas UV.</li>
            <li>Fazemos peças de teste e as inspecionamos antes de iniciar a produção.</li>
          </ol>
          <p>
            Tudo isso acontece independentemente de você pedir 50 pares ou 5.000. O custo de setup é praticamente o mesmo. Com 5.000 pares, esse custo de setup fica tão diluído que você mal percebe. Com 20 pares, ele dobra seu preço unitário. É por isso que MOQs existem -- é o ponto onde a matemática começa a fazer sentido para ambos os lados.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">A Realidade do Chão de Fábrica</h3>
            <p className="text-blue-800">
              Nossa linha de produção pode produzir cerca de 800 pares por dia em velocidade máxima. Quando paro essa linha para preparar um pedido de 30 peças, não estou apenas gastando tempo no seu pedido -- estou perdendo capacidade de produção para o pedido de 500 pares esperando atrás de você. MOQ não é sobre ganância. É sobre manter uma fábrica funcionando eficientemente para que os pedidos de todos sejam enviados no prazo.
            </p>
          </div>

          {/* MOQ Ranges */}
          <h2 id="moq-ranges" className="text-3xl font-bold mt-16 mb-6">Faixas de MOQ para Óculos: ODM, OEM e Molde Personalizado</h2>
          <p>
            Nem todos os pedidos de óculos são iguais. Seu MOQ depende inteiramente do tipo de produção que você está solicitando. Se não tem certeza sobre a diferença entre esses modelos, eu detalhei tudo no meu{' '}
            <Link href="/pt/blog/oem-vs-odm" className="text-primary-600 hover:underline">guia OEM vs ODM</Link>. 
            Mas aqui está o panorama de MOQ:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pedidos ODM: 50-200 Peças por Estilo</h3>
          <p>
            ODM significa que você está escolhendo entre designs que já existem no catálogo da fábrica. Os moldes já estão prontos. O processo de produção está ajustado. Você escolhe uma armação, seleciona suas opções de lente, adiciona seu logo e personaliza as cores.
          </p>
          <p>
            Como não há investimento em ferramental e o setup é mínimo, as fábricas podem aceitar MOQs baixos. A maioria faz 100-200 peças por modelo. Nós começamos com 50 para primeiros pedidos porque prefiro ajudar alguém a testar as águas do que vê-lo se afogar em um compromisso de 500 peças para o qual não estava pronto.
          </p>
          <ul>
            <li><strong>MOQ típico:</strong> 100-200 peças por modelo, por cor</li>
            <li><strong>Nosso MOQ para primeiro pedido:</strong> 50 peças por modelo</li>
            <li><strong>Faixa de custo unitário:</strong> $3,50-$8 dependendo dos materiais e lentes</li>
            <li><strong>Investimento inicial:</strong> $0 em ferramental, $0-$50 para setup do logo</li>
            <li><strong>Prazo de entrega:</strong> 20-45 dias</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pedidos OEM: 300-1.000 Peças por Estilo</h3>
          <p>
            OEM significa que você traz seu próprio design e nós construímos do zero. Isso exige novos moldes, novos setups de produção e frequentemente algumas rodadas de amostragem para acertar tudo.
          </p>
          <p>
            O MOQ mais alto não é arbitrário. O molde que você precisa custa $500-$3.000 dependendo da complexidade. Se você distribui $1.500 em 300 pares, são $5 por par só em ferramental -- além do custo de produção unitário. Com 1.000 pares, cai para $1,50. Com 3.000, são cinquenta centavos. A matemática empurra o MOQ para cima porque ninguém quer pagar $15 por par por algo que poderia ter por $7 pedindo mais.
          </p>
          <ul>
            <li><strong>MOQ típico:</strong> 300-1.000 peças por modelo, por cor</li>
            <li><strong>Faixa de custo unitário:</strong> $5-$15 dependendo da complexidade do design</li>
            <li><strong>Investimento inicial:</strong> $500-$3.000 por molde + $200-$800 para refinamento de design</li>
            <li><strong>Prazo de entrega:</strong> 45-90 dias</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pedidos com Molde Personalizado: 500+ Peças por Estilo</h3>
          <p>
            Aqui é a parte mais profunda. Moldes personalizados significam que você não está apenas projetando uma armação -- está projetando a ferramenta que faz a armação. Moldes complexos de múltiplas peças para armações de acetato com sistemas de dobradiça integrados, formatos incomuns ou designs oversized. Os moldes em si podem custar $2.000-$5.000 e levar 15-25 dias para fabricar.
          </p>
          <p>
            Nesse nível, a maioria das fábricas não aceita um pedido abaixo de 500 peças. E honestamente, se você está investindo $3.000+ em ferramental, deveria pedir pelo menos 500 para trazer o custo de ferramental por unidade abaixo de $6. Idealmente 1.000+.
          </p>
          <ul>
            <li><strong>MOQ típico:</strong> 500-2.000 peças por modelo</li>
            <li><strong>Faixa de custo unitário:</strong> $6-$18 dependendo dos materiais e complexidade</li>
            <li><strong>Investimento inicial:</strong> $2.000-$5.000+ por molde</li>
            <li><strong>Prazo de entrega:</strong> 60-120 dias</li>
          </ul>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Tipo de Pedido</th>
                  <th className="px-6 py-4 text-left">Faixa de MOQ</th>
                  <th className="px-6 py-4 text-left">Custo de Ferramental</th>
                  <th className="px-6 py-4 text-left">Preço Unitário</th>
                  <th className="px-6 py-4 text-left">Prazo de Entrega</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">ODM</td><td className="px-6 py-4">50-200</td><td className="px-6 py-4">$0</td><td className="px-6 py-4">$3,50-$8</td><td className="px-6 py-4">20-45 dias</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">OEM</td><td className="px-6 py-4">300-1.000</td><td className="px-6 py-4">$500-$3.000</td><td className="px-6 py-4">$5-$15</td><td className="px-6 py-4">45-90 dias</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Molde Personalizado</td><td className="px-6 py-4">500-2.000+</td><td className="px-6 py-4">$2.000-$5.000+</td><td className="px-6 py-4">$6-$18</td><td className="px-6 py-4">60-120 dias</td></tr>
              </tbody>
            </table>
          </div>

          {/* Why MOQ Varies */}
          <h2 id="why-moq-varies" className="text-3xl font-bold mt-16 mb-6">Por que o MOQ Varia Tanto Entre Fábricas</h2>
          <p>
            Você vai receber números de MOQ muito diferentes de fábricas diferentes. Uma cota 50 peças, outra diz 500, e uma terceira não fala com você abaixo de 2.000. Por quê?
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tamanho e Estrutura da Fábrica</h3>
          <p>
            Fábricas grandes com 10+ linhas de produção têm custos fixos altos. Precisam de pedidos grandes para justificar o funcionamento de uma linha. Uma fábrica menor como a nossa -- 3 linhas, 60 trabalhadores -- pode ser mais flexível. Podemos dedicar metade de uma linha a um pedido menor sem parar tudo o mais. Não é que fábricas grandes sejam gananciosas. A estrutura de custos delas genuinamente exige volume.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Trading Companies vs. Fábricas Reais</h3>
          <p>
            Esse é o que pega as pessoas. Se você vê &quot;sem MOQ&quot; ou &quot;MOQ: 1 peça&quot; no Alibaba, quase certamente está falando com uma trading company, não uma fábrica. Elas compram de múltiplas fábricas em grande quantidade, armazenam o produto e revendem em pequenas quantidades com margem. Não há nada de errado nisso se você sabe o que está recebendo -- mas está pagando 30-50% a mais por unidade, e a personalização se limita a colar uma etiqueta.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Restrições de Material</h3>
          <p>
            Alguns materiais têm seus próprios mínimos. Acetato italiano Mazzucchelli? O fornecedor exige compras mínimas de chapas. Certos filmes de lentes polarizadas vêm em rolos que produzem um número fixo de lentes. O MOQ da sua fábrica pode ser ditado pelos mínimos dos seus próprios fornecedores tanto quanto pela economia de produção.
          </p>

          {/* Smart Strategy */}
          <h2 id="smart-strategy" className="text-3xl font-bold mt-16 mb-6">A Estratégia Inteligente de Escala: Comece Pequeno, Prove, Depois Cresça</h2>
          <p>
            Se eu pudesse tatuar um conselho no braço de todo novo dono de marca, seria este: <strong>comece com o menor pedido viável, valide a demanda, depois escale.</strong> Já vi muita gente torrar $20.000 em uma coleção dos sonhos que ficou no quarto de hóspedes por dois anos. Não seja essa pessoa.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">O Plano de Escala em Três Fases:</h3>
            <ol className="text-primary-800 space-y-3">
              <li>
                <strong>Fase 1 -- Teste o Mercado com ODM (Mês 1-3):</strong> Peça 3-5 estilos, 50-100 peças cada. Investimento total: $1.500-$4.000. Seu objetivo ainda não é lucro -- são dados. Quais estilos vendem? Quais cores saem? Quem está comprando? Quão rápido esgotam? Cada resposta informa seu próximo pedido.
              </li>
              <li>
                <strong>Fase 2 -- Dobre a Aposta nos Vencedores (Mês 3-8):</strong> Seus dados dizem que a armação oversized quadrada em preto fosco vende 3x mais rápido que qualquer outra. Repeça esse estilo em quantidades maiores -- 200-500 peças. Elimine os estilos que não venderam. Adicione 1-2 novos estilos para continuar testando. Você ainda está no ODM, ainda com baixo risco, mas agora fazendo apostas mais inteligentes.
              </li>
              <li>
                <strong>Fase 3 -- Evolua para OEM (Mês 8-18):</strong> Você conhece seu bestseller por dentro e por fora. Seus clientes adoram armações oversized mas vivem pedindo um formato levemente mais arredondado. Agora -- e só agora -- você investe em um design OEM personalizado. Você não está adivinhando. Está construindo sobre demanda comprovada. Peça 300-500 peças do seu design personalizado enquanto mantém seus bestsellers ODM em rotação.
              </li>
            </ol>
          </div>

          <p>
            Um cliente de Portland fez exatamente isso em 2023. Primeiro pedido: 4 estilos ODM, 75 peças cada, $2.800 no total. Em 60 dias ele sabia que dois estilos eram vencedores e dois eram fracassos. Ele repetiu os vencedores com 300 peças cada, cortou os fracassos e adicionou dois novos estilos para testar. No mês 10, investiu em sua primeira armação OEM personalizada -- uma versão modificada do seu aviador mais vendido. Essa armação personalizada agora responde por 45% da receita dele. Mas ele não começou por aí. Ele conquistou esse direito com dados.
          </p>
          <p>
            Se você quer o roteiro completo para lançar uma marca dessa forma, escrevi um guia passo a passo sobre{' '}
            <Link href="/pt/blog/criar-marca-oculos-sol" className="text-primary-600 hover:underline">como criar sua marca de óculos de sol</Link> que cobre tudo, do conceito à primeira venda.
          </p>

          {/* First Order Math */}
          <h2 id="first-order-math" className="text-3xl font-bold mt-16 mb-6">Matemática do Primeiro Pedido: Quanto Você Realmente Vai Gastar</h2>
          <p>
            Deixe-me calcular os números reais para três cenários comuns de primeiro pedido. Esses incluem produção, amostras, frete e impostos -- não apenas o preço unitário que as fábricas adoram cotar isoladamente.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cenário A: O Teste Conservador (ODM, 3 Estilos × 50 Peças)</h3>
          <ul>
            <li><strong>Custo unitário:</strong> $5,50 média (lentes polarizadas, armações TR90) = $825</li>
            <li><strong>Setup do logo:</strong> $30 × 3 estilos = $90</li>
            <li><strong>Amostras:</strong> $25 × 6 pares (2 por modelo) = $150</li>
            <li><strong>Frete (aéreo, 15kg):</strong> $280</li>
            <li><strong>Impostos de importação (EUA, ~2,5%):</strong> ~$25</li>
            <li><strong>Total: ~$1.370 por 150 pares → $9,13 por par entregue</strong></li>
          </ul>
          <p>
            Se você vende no varejo a $35-45 por par, isso é aproximadamente 4x de margem. Venda 40 pares e você cobriu todo o investimento. Os outros 110 são lucro puro e capital para reinvestimento.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cenário B: O Lançamento Confiante (ODM, 5 Estilos × 150 Peças)</h3>
          <ul>
            <li><strong>Custo unitário:</strong> $4,80 média (desconto por volume entra) = $3.600</li>
            <li><strong>Setup do logo:</strong> $30 × 5 = $150</li>
            <li><strong>Amostras:</strong> $25 × 10 = $250</li>
            <li><strong>Frete (marítimo, ~60kg):</strong> $450</li>
            <li><strong>Impostos de importação (EUA):</strong> ~$100</li>
            <li><strong>Total: ~$4.550 por 750 pares → $6,07 por par entregue</strong></li>
          </ul>
          <p>
            Melhor economia por unidade, mas mais capital em risco. Isso faz sentido se você já tem um público -- uma marca existente, seguidores no Instagram, um ponto de venda.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cenário C: A Aposta OEM (1 Estilo Personalizado × 500 Peças)</h3>
          <ul>
            <li><strong>Molde/ferramental:</strong> $1.800</li>
            <li><strong>Refinamento de design:</strong> $400</li>
            <li><strong>Custo unitário:</strong> $7,50 × 500 = $3.750</li>
            <li><strong>Amostras (3 rodadas):</strong> $350</li>
            <li><strong>Frete (marítimo):</strong> $380</li>
            <li><strong>Impostos de importação:</strong> ~$105</li>
            <li><strong>Total: ~$6.785 por 500 pares → $13,57 por par entregue</strong></li>
          </ul>
          <p>
            Custo por par mais alto, mas você é dono do design. Se está vendendo no varejo a $89-129, as margens ainda são excelentes. Mas você precisa vender 500 pares idênticos -- sem variedade de estilos para proteger suas apostas. É por isso que recomendo as Fases 1 e 2 antes de pular para cá.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Os Custos que Todo Mundo Esquece</h3>
            <p className="text-amber-800">
              Embalagem ($0,50-$2 por par para estojo com marca e pano de microfibra), fotografia ($200-$500 para fotos de produto se você vende online) e gastos com marketing para realmente movimentar o estoque. Já vi fundadores acertarem o orçamento de produção e ficarem com zero dólares para contar a alguém que o produto existe. Reserve pelo menos 20-30% do seu investimento total para marketing. Óculos não se vendem sozinhos -- nem os realmente bons.
            </p>
          </div>

          {/* Inventory Tips */}
          <h2 id="inventory-tips" className="text-3xl font-bold mt-16 mb-6">Gestão de Estoque para Novas Marcas</h2>
          <p>
            Estoque é onde a maioria das novas marcas de óculos ou tem sucesso ou sangra dinheiro lentamente. Estoque demais amarra capital e enche sua garagem. Estoque de menos significa rupturas e vendas perdidas. Veja o que eu já vi funcionar:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">A Regra 80/20 do Estoque de Óculos</h3>
          <p>
            Em quase todas as marcas de óculos com que trabalhei, 20% dos estilos geram 80% da receita. Você não vai saber quais 20% até começar a vender. Por isso, seu primeiro pedido deve ser amplo e raso -- mais estilos em quantidades menores -- e seu segundo pedido deve ser estreito e profundo -- menos estilos em quantidades maiores.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Repeça Antes de Acabar</h3>
          <p>
            Prazos de entrega são reais. Se seu bestseller leva 30 dias para produzir e 10 dias para enviar, você precisa fazer o repedido quando ainda tiver 40 dias de estoque. A maioria dos donos de marca de primeira viagem espera até esgotar completamente, e então faz pedido em pânico. Essa lacuna de 40 dias entre &quot;esgotado&quot; e &quot;reabastecido&quot; são 40 dias de receita perdida e clientes decepcionados que podem nunca mais voltar.
          </p>
          <p>
            Minha regra de ouro: <strong>repeça quando estiver com 30% do seu estoque inicial.</strong> Se você pediu 100 pares e está com 30, é hora.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O Timing Sazonal Importa</h3>
          <p>
            Óculos de sol são sazonais na maioria dos mercados. América do Norte e Europa concentram 60-70% das vendas anuais entre março e agosto. Se você está lançando em janeiro, seu pedido deve ser menor -- suficiente para gerar buzz e testar a comunicação antes da demanda de primavera chegar. Faça seu grande pedido em fevereiro para entrega em abril/maio, bem quando as pessoas começam a comprar.
          </p>
          <p>
            O pior timing? Pedir 1.000 pares em setembro. Você vai ficar sentado na maioria deles até a primavera. São seis meses de capital parado sem fazer nada.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Não Diversifique Demais as Cores</h3>
          <p>
            Vejo isso constantemente: uma nova marca lança com uma armação em 8 cores diferentes. Parece variedade. Na prática, são 8 apostas pequenas em vez de 2-3 fortes. Comece com suas cores mais seguras -- preto fosco, tartaruga e uma opção ousada -- e expanda cores nos repedidos com base no que os clientes pedem. Cada variação de cor multiplica a complexidade da gestão de estoque.
          </p>

          {/* Negotiating MOQ */}
          <h2 id="negotiating-moq" className="text-3xl font-bold mt-16 mb-6">Como Negociar MOQs Menores (Sem Irritar Sua Fábrica)</h2>
          <p>
            MOQs não estão gravados em pedra. A maioria das fábricas tem flexibilidade, mas a forma como você aborda a conversa importa. Veja o que realmente funciona:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Mostre que Você É um Negócio Real</h3>
          <p>
            Fábricas reduzem MOQs para clientes que acreditam que vão voltar. Envie seu site, seu Instagram, seu plano de negócios -- qualquer coisa que mostre que você é sério, não só está pesquisando. Já reduzi nosso MOQ para 30 peças para uma cliente que apareceu com um briefing profissional, um cronograma claro e um plano de crescimento realista. Isso me disse que ela estaria pedindo 500 peças dentro de um ano.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Aceite um Preço Unitário Levemente Maior</h3>
          <p>
            A preocupação da fábrica com MOQs baixos é a cobertura de custos. Se você disser &quot;Sei que 50 peças está abaixo do seu MOQ padrão -- estou disposto a pagar 10-15% a mais no preço unitário&quot;, você acabou de resolver o problema deles. Esse prêmio desaparece no seu segundo pedido, maior.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Combine Estilos em um Único Pedido</h3>
          <p>
            Uma fábrica pode não querer produzir 50 peças de um estilo. Mas 50 peças de cada um de 4 estilos? Isso é um pedido de 200 peças -- muito mais atrativo. O custo de setup por modelo é o mesmo, mas o volume total do pedido torna a papelada e a logística valer a pena.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Seja Flexível com o Timing</h3>
          <p>
            Fábricas têm alta temporada (janeiro-março para pedidos de verão) e baixa temporada (agosto-outubro). Se você pode fazer seu pedido durante um período tranquilo, as fábricas são mais propensas a aceitar quantidades menores para manter as linhas rodando. Já aceitei pedidos de apenas 30 peças em setembro simplesmente porque tínhamos capacidade.
          </p>

          {/* Mistakes */}
          <h2 id="mistakes" className="text-3xl font-bold mt-16 mb-6">Os Maiores Erros de MOQ que Já Vi</h2>
          <p>
            Faço isso há tempo suficiente para ter um álbum de grandes sucessos de erros caros. Aprenda com a experiência dos outros:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pedir Demais de um Design Não Comprovado</h3>
          <p>
            Uma marca de Miami pediu 2.000 pares de uma única armação personalizada em 2024. Investiu $14.000. O design parecia incrível no papel -- formato geométrico oversized, metal rosé dourado. Lindo. Vendeu 280 pares em seis meses. Os outros 1.720 pares ainda estão em um armazém na Flórida. Aqueles $14.000 agora valem cerca de $3.000 em valor de liquidação. Deveriam ter pedido 300 e testado.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ir Direto para Moldes Personalizados</h3>
          <p>
            Tive um dono de marca de primeira viagem que queria moldes totalmente personalizados para 3 estilos. Investimento total em moldes: $8.500. Ele não tinha vendido um único par de óculos antes. Convenci-o a começar com ODM. Dois dos seus três &quot;designs dos sonhos&quot; revelaram ter zero demanda de mercado quando testou formatos similares via ODM. Ele economizou $5.600 em custos de molde e usou esse dinheiro para marketing. Hoje ele tem um molde personalizado -- para um design que validou pelo ODM primeiro.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Escolher a Fábrica Mais Barata em Vez da Fábrica Certa</h3>
          <p>
            Uma diferença de $2 por unidade não significa nada se a qualidade for ruim. Já tive clientes que vieram até nós após receberem uma remessa de uma fábrica mais barata onde 30% das dobradiças estavam frouxas, a polarização era inconsistente e a proteção UV estava abaixo da especificação. Gastaram mais com devoluções, reembolsos e danos à reputação do que economizaram no preço unitário. A cotação mais barata quase nunca é o melhor negócio. Navegue pelo nosso{' '}
            <Link href="/pt/produtos" className="text-primary-600 hover:underline">catálogo de produtos</Link> para ver como é a qualidade adequada a preços justos.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ignorar Frete e Impostos</h3>
          <p>
            Mencionei isso antes, mas vale repetir porque vejo todo mês. Sua fábrica cota $5 por par. Você pensa &quot;ótimo, $2.500 por 500 pares.&quot; Então o frete adiciona $400, impostos adicionam $125, despachante aduaneiro adiciona $150 e embalagem adiciona $500. Seu custo real entregue é $7,35 por par, não $5. Planeje com o número real.
          </p>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda para Planejar Seu Primeiro Pedido?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Faço chamadas gratuitas de 15 minutos com novos donos de marcas. Vamos analisar seu orçamento, seu mercado e seu cronograma, e vou dizer exatamente o que eu pediria no seu lugar. Sem compromisso, sem papo de vendas -- apenas 20 anos de experiência de fábrica ao seu lado.
            </p>
            <Link href="/pt/contato" className="btn-primary">
              Agende uma Ligação Grátis com o Jacky
            </Link>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Perguntas que Ouço Toda Semana</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qual é o MOQ típico para óculos de sol no atacado?</h3>
              <p className="text-gray-600">
                Depende do modelo de produção. ODM (escolhendo de designs existentes) geralmente exige 50-200 peças por modelo. OEM (designs personalizados usando moldes existentes) fica entre 300-1.000 peças por estilo. Pedidos com molde totalmente personalizado começam em 500+ peças. Algumas fábricas, incluindo a nossa, oferecem MOQs menores para primeiros pedidos para ajudar novas marcas a começarem.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Posso pedir menos de 100 pares de óculos de uma fábrica?</h3>
              <p className="text-gray-600">
                Algumas fábricas oferecem MOQs abaixo de 100 para pedidos ODM -- nós começamos com 50 peças para clientes de primeira vez. Esteja ciente de que quantidades muito baixas significam custos unitários mais altos, às vezes 30-50% a mais do que pedir 200+ peças. Se uma fábrica anuncia &quot;sem MOQ&quot;, provavelmente é uma trading company revendendo de estoque, não um fabricante real.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Por que fábricas de óculos têm quantidades mínimas de pedido?</h3>
              <p className="text-gray-600">
                Economia de produção. Preparar uma linha de produção -- calibrar máquinas, misturar cores, configurar equipamentos de lentes -- custa o mesmo quer você esteja fazendo 10 pares ou 10.000. Abaixo de certa quantidade, o custo de setup por unidade torna o pedido não lucrativo. Para OEM, também há o investimento em moldes ($500-$3.000) que precisa ser distribuído em unidades suficientes para fazer sentido financeiro.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Devo começar com ODM ou OEM no meu primeiro pedido de óculos?</h3>
              <p className="text-gray-600">
                Comece com ODM. A menos que você tenha muito capital e um público comprovado, o ODM permite testar o mercado com menor risco -- quantidades menores, sem custos de molde, prazo mais rápido. Use seus primeiros 2-3 pedidos ODM para aprender o que vende, depois invista em designs OEM personalizados para seus bestsellers comprovados. Cerca de 40% dos nossos clientes OEM de longo prazo começaram com ODM.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto estoque uma nova marca de óculos deve manter?</h3>
              <p className="text-gray-600">
                Para seu primeiro pedido, mantenha enxuto -- 3-5 estilos, 50-100 peças cada. É suficiente para testar o mercado sem se afogar em estoque encalhado. Quando identificar seus bestsellers (geralmente em 60-90 dias), repeça esses em quantidades maiores e elimine o que não vendeu. Gire o estoque rápido -- não deixe óculos juntando poeira no armazém.
              </p>
            </div>
          </div>

          {/* Artigos Relacionados */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais Direto da Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM Óculos: Qual é a Diferença?</h3>
                <p className="text-gray-600 text-sm">O detalhamento completo da fabricação OEM e ODM -- custos, prazos e como escolher o modelo certo para sua marca.</p>
              </Link>
              <Link href="/pt/blog/criar-marca-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Criar Sua Marca de Óculos de Sol: Guia Completo</h3>
                <p className="text-gray-600 text-sm">O guia completo da ideia à primeira venda -- tudo o que eu gostaria que alguém tivesse me dito quando comecei em 2006.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
