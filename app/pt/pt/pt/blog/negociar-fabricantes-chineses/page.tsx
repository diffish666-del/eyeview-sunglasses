import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como Negociar com Fabricantes Chineses de Óculos de Sol: Guia Interno',
  description: 'Dono de fábrica revela exatamente como negociar com fabricantes chineses de óculos de sol. Faixas de preço reais, flexibilidade de MOQ, frases que funcionam e o que os donos de fábrica realmente pensam.',
  keywords: 'negociar com fabricante chinês, negociação fábrica China, preços fornecedor óculos, dicas negociação fábrica, estratégia sourcing China, guanxi negócios China',
  alternates: {
    canonical: '/pt/blog/negociar-fabricantes-chineses',
    languages: {
      'en': '/blog/negotiate-chinese-manufacturers',
      'pt': '/pt/blog/negociar-fabricantes-chineses',
    },
  },
}

const faqs = [
  {
    question: 'Quanto posso realisticamente negociar de desconto no preço inicial de um fabricante chinês?',
    answer: 'Em um primeiro pedido, espere 5–10% de desconto sobre o preço publicado através de negociação padrão. Em pedidos recorrentes com volume crescente, 10–15% é alcançável. Os maiores descontos (15–20%) vêm após construir um relacionamento de 6–12 meses com pedidos consistentes — os donos de fábrica recompensam a confiabilidade muito mais do que táticas agressivas de negociação.',
  },
  {
    question: 'Qual é a melhor época do ano para negociar melhores preços com fábricas chinesas?',
    answer: 'Do final de fevereiro até março, logo após o Ano Novo Chinês, é a melhor janela de negociação. As fábricas reabriram, mas as carteiras de pedidos estão enxutas — elas precisam preencher as linhas de produção e manter os funcionários empregados. Dezembro também é bom porque as fábricas querem fechar o ano com números fortes. Evite setembro e outubro, quando as fábricas estão sobrecarregadas com pedidos pré-feriado e não têm incentivo nenhum para dar desconto.',
  },
  {
    question: 'Devo usar um agente de sourcing ou negociar diretamente com a fábrica?',
    answer: 'Para compradores de primeira viagem, um agente de sourcing pode fazer a ponte entre idioma e cultura, geralmente adicionando 3–5% ao seu custo. Para compradores experientes ou pedidos acima de US$5.000, negociar diretamente com a fábrica gera melhores preços e um relacionamento de longo prazo mais forte. A maioria dos clientes da EyeView faz a transição de agente para direto nos primeiros 2–3 pedidos, conforme ganham confiança.',
  },
  {
    question: 'Como negociar MOQ para baixo sem parecer um comprador pequeno que não vale o tempo deles?',
    answer: 'Em vez de simplesmente perguntar "pode reduzir o MOQ", reformule: ofereça pagar uma sobretaxa de 5–10% em um pedido menor ou divida o MOQ em 2–3 estilos. Por exemplo, em vez de 500 unidades de um estilo a US$3,50/unidade, proponha 300 unidades divididas em 3 estilos a US$4,00/unidade. A margem por unidade da fábrica aumenta, você ganha variedade e sinaliza que entende a economia de produção deles.',
  },
  {
    question: 'Quais condições de pagamento me dão mais poder de negociação?',
    answer: 'Oferecer 50% de depósito em vez dos 30% padrão pode gerar 3–5% de desconto. 100% antecipado por transferência geralmente gera 5–8% de desconto. Para relacionamentos contínuos, mudar para 30% de depósito com 70% antes do embarque (em vez de 30/70 contra B/L) te dá mais poder em novos pedidos. Nunca pague 100% antecipado para um fornecedor novo — use essa alavanca somente após 2–3 pedidos bem-sucedidos.',
  },
]

const PUBLISH_DATE = '2026-07-20'

export default function NegociarFabricantesChinesesPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }) }} />

    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Como Negociar com Fabricantes Chineses de Óculos de Sol: Guia Interno",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Dono de fábrica revela exatamente como negociar com fabricantes chineses de óculos de sol. Faixas de preço reais, flexibilidade de MOQ, frases que funcionam e o que os donos de fábrica realmente pensam quando você abre com 'qual o seu melhor preço'.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/negociar-fabricantes-chineses" },
          "inLanguage": "pt"
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fornecimento</span>
            <span>20 de julho de 2026</span>
            <span>•</span>
            <span>9 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Negociar com Fabricantes Chineses de Óculos de Sol: O Manual de um Insider
          </h1>
          <p className="text-xl text-gray-600">
            Eu administro uma fábrica de óculos de sol na China. Aqui está exatamente o que eu penso quando um comprador abre com &quot;qual o seu melhor preço&quot; — e o que você deveria dizer em vez disso.
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
            <li><a href="#psicologia" className="text-primary-600 hover:underline">A Psicologia da Negociação de Fábrica</a></li>
            <li><a href="#timing" className="text-primary-600 hover:underline">O Timing é Tudo</a></li>
            <li><a href="#melhor-preco" className="text-primary-600 hover:underline">O Que Realmente Consegue um Preço Melhor</a></li>
            <li><a href="#frases-fatais" className="text-primary-600 hover:underline">5 Frases que Matam Sua Negociação</a></li>
            <li><a href="#guanxi" className="text-primary-600 hover:underline">Construindo Guanxi — A Camada do Relacionamento</a></li>
            <li><a href="#script" className="text-primary-600 hover:underline">Script de Negociação de Exemplo</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">

          <p className="lead text-xl text-gray-600 mb-8">
            Na última terça-feira, recebi uma mensagem no WhatsApp de um comprador em Los Angeles. Primeira 
            linha: &quot;Qual o seu melhor preço para 500 wayfarers de acetato?&quot; Sem introdução. Sem 
            contexto. Sem reconhecimento de que há um ser humano do outro lado lendo isso às 22h na China 
            enquanto come macarrão frio na mesa de trabalho.
          </p>
          <p>
            Eu ainda respondi — eu sempre respondo. Mas aqui está o que passou pela minha cabeça: <em>Essa 
            pessoa não entende como funcionam as fábricas chinesas e está prestes a deixar dinheiro na mesa 
            sem nem saber.</em>
          </p>
          <p>
            Estou no chão de fábrica há mais de uma década. Participei de milhares de negociações — as boas, 
            as péssimas e aquelas em que os compradores saíram pagando 20% a mais do que precisavam porque 
            cometeram um simples erro nos primeiros cinco minutos. Este artigo é tudo que eu gostaria que os 
            compradores entendessem antes de apertar enviar naquela primeira mensagem. Nada de teoria. Nada 
            de frameworks de consultoria. Apenas o que realmente acontece quando você negocia com um fabricante 
            chinês de óculos de sol.
          </p>

          {/* ─── Section 1: A Psicologia da Negociação de Fábrica ─── */}
          <h2 id="psicologia" className="text-3xl font-bold mt-16 mb-6">A Psicologia da Negociação de Fábrica</h2>

          <p>
            Aqui vai algo que a maioria dos compradores ocidentais não percebe: os donos de fábrica chineses 
            não otimizam pelo preço máximo por unidade. Nós otimizamos por <strong>fluxo de caixa previsível 
            e utilização da linha de produção</strong>.
          </p>
          <p>
            Deixe-me dar um exemplo concreto. No mês passado, dois compradores me procuraram no mesmo dia 
            para o mesmo produto — uma armação clássica de acetato com lentes polarizadas. O Comprador A 
            pediu 300 peças pelo menor preço possível. O Comprador B disse: &quot;Preciso de 200 peças agora, 
            mas estou planejando refazer o pedido a cada 8 semanas se a qualidade for aprovada. Podemos 
            chegar a um valor que faça sentido para ambos?&quot;
          </p>
          <p>
            O Comprador A recebeu cotação de US$4,20 por unidade. O Comprador B? US$3,65 por unidade — uma 
            diferença de 13% — para metade da quantidade inicial. Por quê? Porque o Comprador B sinalizou 
            três coisas que importam mais para um dono de fábrica do que o tamanho do pedido:
          </p>

          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Estabilidade de volume.</strong> Um ciclo de reposição previsível a cada 8 semanas 
            significa que posso programar a produção de forma eficiente. Posso comprar matéria-prima em 
            volume. Posso manter meus funcionários qualificados em tarefas consistentes em vez de retreiná-los 
            a cada lote. Essa previsibilidade vale dinheiro real.</li>
            <li><strong>Confiabilidade de pagamento.</strong> Um comprador que fala em reposições está 
            sinalizando que está construindo um negócio, não apenas revendendo estoque. Empresas pagam 
            suas contas. Revendedores somem depois de um pedido.</li>
            <li><strong>Pensamento de longo prazo.</strong> Donos de fábrica investem em relacionamentos. 
            Absorvemos uma margem mais fina no primeiro pedido porque estamos apostando nos meses dois 
            até vinte e quatro.</li>
          </ol>

          <blockquote className="border-l-4 border-primary-600 pl-4 my-6 italic text-gray-700">
            &quot;A maior mudança de mentalidade que os compradores precisam fazer: pare de negociar preço 
            por unidade e comece a negociar uma parceria. Já dei 18% de desconto para compradores com pedidos 
            modestos que se comprometeram com um cronograma de 6 meses — e mantive o preço cheio para 
            compradores com grandes pedidos únicos que me trataram como uma máquina de vendas.&quot;
          </blockquote>

          <p>
            Outra coisa: os donos de fábrica chineses <strong>odeiam perder a face</strong>. Se você 
            pressionar demais no preço de uma forma que faça a negociação parecer uma batalha de soma zero, 
            muitos simplesmente vão parar de responder — não porque o negócio não funcione matematicamente, 
            mas porque você sinalizou que trabalhar com você será uma briga constante. Preferimos preencher 
            aquela vaga de produção com alguém agradável que pague 5% a mais.
          </p>

          {/* ─── Section 2: O Timing é Tudo ─── */}
          <h2 id="timing" className="text-3xl font-bold mt-16 mb-6">O Timing é Tudo</h2>

          <p>
            Você pode dizer todas as coisas certas e ainda assim conseguir um acordo pior do que alguém que 
            simplesmente perguntou na hora certa. Aqui está o calendário da fábrica que você precisa entender:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">O Calendário da Fábrica Chinesa de Óculos de Sol</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span><strong>15 Jan – 15 Fev</strong></span><span className="text-red-600">Fábrica fechada (Ano Novo Chinês)</span></li>
              <li className="flex justify-between"><span><strong>15 Fev – 31 Mar</strong></span><span className="text-green-600">🟢 MELHOR ÉPOCA PARA NEGOCIAR</span></li>
              <li className="flex justify-between"><span><strong>Abr – Jul</strong></span><span className="text-yellow-600">🟡 Produção estável, flexibilidade moderada</span></li>
              <li className="flex justify-between"><span><strong>Ago – Out</strong></span><span className="text-red-600">🔴 Alta temporada — zero poder de desconto</span></li>
              <li className="flex justify-between"><span><strong>Nov – Dez</strong></span><span className="text-green-600">🟢 Fechamento de ano — boa janela de negociação</span></li>
            </ul>
          </div>

          <p>
            <strong>Do final de fevereiro até março</strong> é a janela de ouro. Eis o porquê: o Ano Novo 
            Chinês paralisa todo o setor de manufatura por 2–4 semanas. Os funcionários viajam para casa, 
            alguns não voltam, e quando a fábrica reabre em meados de fevereiro, a carteira de pedidos está 
            enxuta. As linhas de produção estão ociosas. A gerência está olhando para cronogramas vazios e 
            uma folha de pagamento que ainda precisa ser cumprida. É quando estamos mais motivados a preencher 
            capacidade — e mais flexíveis nos preços.
          </p>
          <p>
            Eu pessoalmente já ofereci 12% abaixo da nossa taxa padrão no final de fevereiro para fechar um 
            contrato que manteria duas linhas de produção funcionando durante março. Em agosto? Não cederia 
            3% no mesmo pedido — já estamos na capacidade máxima e cada pedido novo significa hora extra.
          </p>
          <p>
            <strong>Dezembro é sua segunda melhor janela.</strong> Os donos de fábrica querem fechar o ano 
            com força. Metas de receita, bônus de desempenho para a gerência, relatórios anuais para 
            empréstimos bancários — tudo isso cria um viés para fechar negócios antes de 31 de dezembro. 
            Já aprovei descontos de 8–10% na última semana de dezembro que teria rejeitado em outubro.
          </p>
          <p>
            <strong>A pior época para negociar:</strong> setembro e outubro. As fábricas estão operando a 
            110% da capacidade para cumprir pedidos da temporada de festas e do próximo ano. Você tem zero 
            poder de barganha. Cada hora de produção já está vendida.
          </p>

          {/* ─── Section 3: O Que Realmente Consegue um Preço Melhor ─── */}
          <h2 id="melhor-preco" className="text-3xl font-bold mt-16 mb-6">O Que Realmente Consegue um Preço Melhor</h2>

          <p>
            Vamos falar sobre as alavancas específicas que movem o ponteiro do preço. Estas são as cinco 
            coisas pelas quais eu realmente ajusto o preço — em ordem de impacto:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">1. Compromisso de Volume ao Longo do Tempo (Impacto: 10–18%)</h3>
          <p>
            Um pedido único de 1.000 peças é legal. Um compromisso de 300 peças por mês durante 12 meses 
            é <em>transformador</em> para uma fábrica. São 3.600 peças de produção previsível que posso 
            planejar. Eu faço conta de lápis significativamente para esse tipo de compromisso — mesmo que a 
            quantidade por pedido seja menor do que a compra em volume única de um concorrente.
          </p>
          <p>
            <strong>Como usar isso:</strong> Em vez de &quot;Consegue um preço melhor?&quot;, diga &quot;Se 
            estruturarmos isso como um compromisso de 6 meses com pedidos mensais de 300 peças, que tipo de 
            preço você pode oferecer?&quot; Então espere. Deixe o dono da fábrica fazer as contas. O 
            silêncio é produtivo.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">2. Condições de Pagamento (Impacto: 3–8%)</h3>
          <p>
            O fluxo de caixa é a força vital de uma fábrica chinesa. A matéria-prima geralmente é paga 
            antecipadamente aos fornecedores. Os salários são mensais. As contas de energia não esperam. 
            Quando um comprador oferece melhores condições de pagamento, está efetivamente fornecendo capital 
            de giro sem juros — e isso vale um desconto.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Condições de Pagamento vs. Desconto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>30% depósito, 70% contra B/L</span><span className="text-gray-500">Padrão (referência)</span></li>
              <li className="flex justify-between"><span>50% depósito, 50% antes do embarque</span><span className="text-green-600">3–5% de desconto</span></li>
              <li className="flex justify-between"><span>100% antecipado por transferência</span><span className="text-green-600">5–8% de desconto</span></li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">⚠️ Use pagamento 100% antecipado apenas com fornecedores estabelecidos que você verificou em pedidos anteriores.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">3. Pedidos de Contêiner Misto e Múltiplos Estilos (Impacto: 5–10%)</h3>
          <p>
            Pedidos de um único estilo são ineficientes para as fábricas. Temos que configurar moldes, 
            ajustar máquinas e treinar funcionários para cada estilo — mas uma vez configurados, produzir 
            estilos adicionais não adiciona custo proporcional. Pedir 3 estilos com 200 peças cada em vez 
            de 1 estilo com 600 peças dá à fábrica um pipeline de produção mais completo com melhor 
            aproveitamento de material, e essa eficiência se traduz em melhor preço unitário.
          </p>
          <p>
            Além disso, um pedido misto me diz que você é uma marca de verdade com uma linha de produtos — 
            não alguém testando um único SKU na esperança do melhor. Isso me deixa mais disposto a investir 
            no relacionamento.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">4. Alocação de Produção Fora de Temporada (Impacto: 5–12%)</h3>
          <p>
            Volte ao calendário acima. Se você puder colocar seu pedido para produção em março em vez de 
            agosto, está fazendo um favor à fábrica ao preencher capacidade ociosa. Coloque dessa forma: 
            &quot;Vejo que seu calendário provavelmente está mais leve em março — se alocarmos a produção 
            nessa época, isso nos dá margem no preço?&quot; A maioria dos donos de fábrica vai apreciar que 
            você entende a dinâmica do negócio deles e vai retribuir com uma taxa melhor.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">5. Acordos de NDA e Exclusividade (Impacto: 3–7%)</h3>
          <p>
            Se você está desenvolvendo designs OEM personalizados, peça um NDA que também inclua um compromisso 
            de volume. &quot;Nos comprometemos com 2.000 peças em 12 meses para este design exclusivo.&quot; 
            Esse compromisso de exclusividade sinaliza intenção séria e parceria de longo prazo — duas coisas 
            que destravam melhores preços. Confira nosso guia completo sobre <Link href="/pt/blog/oem-vs-odm" className="text-primary-600 hover:underline">fabricação OEM vs ODM</Link> para 
            mais detalhes sobre essa distinção.
          </p>

          {/* ─── Section 4: 5 Frases que Matam Sua Negociação ─── */}
          <h2 id="frases-fatais" className="text-3xl font-bold mt-16 mb-6">5 Frases que Matam Sua Negociação (E o Que Dizer em Vez Disso)</h2>

          <p>
            Estas são frases reais que compradores já me disseram e que imediatamente derrubaram o poder de 
            barganha deles. Estou incluindo porque as vejo <em>constantemente</em>:
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;Qual o seu melhor preço?&quot;</p>
              <p className="text-gray-700 text-sm mb-2">Esta é a abertura mais prejudicial na negociação internacional. Aqui está o que eu escuto: &quot;Não fiz nenhuma pesquisa, não sei quanto custa produzir isso e vou colocar você contra todas as outras fábricas do Alibaba.&quot; Sinaliza caça ao menor preço com zero lealdade — e vou responder de acordo com um preço que proteja minha margem, porque não espero ouvir de você novamente.</p>
              <p className="font-bold text-green-800 mb-1">✅ Diga em vez disso:</p>
              <p className="text-gray-700 text-sm">&quot;Estamos procurando um parceiro de fabricação de longo prazo para nossa linha de óculos. Vi seu catálogo e gostei da coleção de acetato. Você pode me explicar sua estrutura de preços para pedidos na faixa de 300–500 peças e quais fatores permitiriam taxas melhores?&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;Consigo isso mais barato com [concorrente].&quot;</p>
              <p className="text-gray-700 text-sm mb-2">Isso não é uma tática de negociação na China — é um insulto. Você está me dizendo que meu produto é uma commodity sem diferenciação. Minha resposta geralmente é: &quot;Então você deveria comprar deles.&quot; E é sério. Não vou correr atrás de um comprador que vê minha décadas de experiência em fabricação como intercambiável com o menor lance em uma plataforma de sourcing.</p>
              <p className="font-bold text-green-800 mb-1">✅ Diga em vez disso:</p>
              <p className="text-gray-700 text-sm">&quot;Estamos avaliando alguns fabricantes, e sua qualidade e comunicação foram as melhores até agora. Se conseguirmos chegar a um preço em torno de US$3,80/unidade para esta especificação, estamos prontos para seguir com vocês. Isso é viável?&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;Preciso disso para semana que vem.&quot;</p>
              <p className="text-gray-700 text-sm mb-2">Pedidos urgentes na manufatura chinesa significam pagamento de hora extra, cronogramas de produção interrompidos e aquisição acelerada de materiais — tudo isso custa 20–30% a mais. Quando você exige urgência E desconto, acabou de sinalizar que não entende como as fábricas funcionam. Vou te dar o prazo, mas o preço vai incluir cada sobretaxa de urgência.</p>
              <p className="font-bold text-green-800 mb-1">✅ Diga em vez disso:</p>
              <p className="text-gray-700 text-sm">&quot;Qual é o prazo de produção padrão para esta quantidade? Somos flexíveis — se um prazo mais longo permitir um preço melhor, podemos nos planejar em torno disso.&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;Pode me enviar algumas amostras grátis primeiro?&quot;</p>
              <p className="text-gray-700 text-sm mb-2">Recebo 30–50 solicitações de amostra por mês. Os compradores que pedem amostras grátis sem se oferecer para cobrir o frete quase nunca se convertem em pedidos. Acompanhei isso por três anos — a taxa de conversão é inferior a 5%. Então, quando você começa com &quot;amostras grátis&quot;, você se identificou como baixa intenção. Eu ainda envio, mas você agora está na categoria mental de &quot;provavelmente não é sério&quot;.</p>
              <p className="font-bold text-green-800 mb-1">✅ Diga em vez disso:</p>
              <p className="text-gray-700 text-sm">&quot;Gostaria de pedir 3 amostras — o Wayfarer em tartaruga, o Redondo em preto e o Aviador em dourado. Posso cobrir as amostras mais o frete DHL. Qual é o processo e prazo para pedidos de amostra?&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;Vou fazer um pedido muito maior depois — só me dá um bom preço agora.&quot;</p>
              <p className="text-gray-700 text-sm mb-2">Todo dono de fábrica já ouviu isso mil vezes. É o Pedro e o lobo da manufatura. Se eu desse desconto antecipado para cada comprador que prometeu volume futuro, eu já teria falido. Promessas futuras valem exatamente zero na negociação de hoje.</p>
              <p className="font-bold text-green-800 mb-1">✅ Diga em vez disso:</p>
              <p className="text-gray-700 text-sm">&quot;Aqui está o que posso me comprometer agora: um pedido inicial de 300 peças. Se a qualidade e o prazo de entrega atenderem às expectativas, gostaria de estabelecer um acordo de compra para reposições mensais de 200–300 peças. Podemos estruturar o preço para refletir essa progressão?&quot;</p>
            </div>
          </div>

          {/* ─── Section 5: Construindo Guanxi ─── */}
          <h2 id="guanxi" className="text-3xl font-bold mt-16 mb-6">Construindo Guanxi — A Camada do Relacionamento que Compradores Ocidentais Ignoram</h2>

          <p>
            Se você levar uma coisa deste artigo inteiro, que seja isto: <strong>guanxi (关系) não é 
            &quot;networking&quot;. É um relacionamento recíproco de confiança e obrigação mútua que afeta 
            diretamente seus preços, qualidade e acesso.</strong>
          </p>
          <p>
            Aqui vai uma história real. Três anos atrás, um comprador de Melbourne — vamos chamá-lo de Dave — 
            veio visitar nossa fábrica em Xiamen. Ele passou duas horas no chão de fábrica, fez perguntas 
            inteligentes sobre nosso fornecimento de acetato e testes de dobradiça, e depois me acompanhou 
            para um hotpot em um lugar que eu gosto perto da fábrica. Conversamos sobre a visão da marca 
            dele, seus dois filhos e sua frustração com os markups do varejo australiano. Trocamos contatos 
            no WeChat. Ele me manda fotos dos filhos na praia usando protótipos. Eu mando saudações de 
            Ano Novo Chinês.
          </p>
          <p>
            No ano passado, quando o maior pedido do Dave teve um pequeno problema de alinhamento de dobradiça 
            descoberto durante o QC, eu tirei quatro funcionários de outra linha de produção para consertar 
            cada unidade manualmente durante um fim de semana. Sem custo. Sem atraso. Tente conseguir esse 
            nível de serviço de um fornecedor com quem você só trocou 17 e-mails transacionais.
          </p>
          <p>
            <strong>Movimentos práticos de guanxi que não custam nada:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Entre no WeChat.</strong> Não WhatsApp. Não e-mail. O WeChat é onde os negócios 
            chineses acontecem. Se você não está no WeChat, você é um ruído estrangeiro na caixa de entrada. 
            Baixe o app, adicione seu contato e responda às mensagens em horas, não dias.</li>
            <li><strong>Envie uma saudação de Ano Novo Chinês.</strong> O Ano Novo Chinês é nosso Natal, 
            Ação de Graças e Réveillon juntos. Uma simples mensagem no WeChat no final de janeiro dizendo 
            &quot;Feliz Ano Novo — desejando a você e sua família um próspero Ano do Cavalo&quot; te coloca 
            entre os 10% melhores compradores em esforço de relacionamento.</li>
            <li><strong>Visite a fábrica se puder.</strong> Eu sei que voos para Xiamen não são baratos. 
            Mas uma única visita à fábrica pode transformar seu relacionamento de &quot;comprador estrangeiro 
            #247&quot; para &quot;Dave de Melbourne que veio até aqui&quot;. O ROI dessa viagem — em preços, 
            prioridade de qualidade e resolução de problemas — normalmente se paga em dois pedidos.</li>
            <li><strong>Compartilhe uma refeição.</strong> A cultura de negócios chinesa trata as refeições 
            compartilhadas como moeda de relacionamento. Se você visitar, aceite o convite para jantar. Se 
            o dono da fábrica pagar a conta, deixe — e faça uma nota mental para retribuir na próxima visita 
            ou com um presente. Recusar hospitalidade pode ser interpretado como rejeitar o relacionamento.</li>
            <li><strong>Seja confiável com os pagamentos.</strong> Isso parece óbvio, mas pagar exatamente na 
            data em que você se comprometeu — nem um dia atrasado — é notado. Os donos de fábrica acompanham 
            isso. Um comprador que paga de forma confiável por 3 pedidos consecutivos recebe tratamento 
            preferencial que um pagador atrasado jamais receberá, não importa o tamanho dos pedidos.</li>
          </ul>

          {/* ─── Section 6: Script de Negociação de Exemplo ─── */}
          <h2 id="script" className="text-3xl font-bold mt-16 mb-6">Script de Negociação de Exemplo: Da Primeira Mensagem ao Fechamento</h2>

          <p>
            Aqui está um modelo que você pode adaptar. É essencialmente o que o Comprador B (aquele que 
            conseguiu US$3,65) me disse — eu dei uma limpada para ficar mais claro, mas a estrutura e o 
            tom são reais:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Mensagem 1 — Introdução (Dia 1)</h4>
            <p className="text-sm text-gray-700 italic mb-4">
              &quot;Oi — meu nome é [Nome] da [Empresa]. Estamos lançando uma marca de óculos de sol focada 
              em [nicho: moda sustentável / esportes outdoor / streetwear de luxo]. Cheguei até a EyeView 
              pelo blog e fiquei impressionado com a coleção de acetato. Estamos procurando um parceiro de 
              fabricação, não apenas um fornecedor — alguém com quem possamos crescer nos próximos anos. 
              Isso é algo que você estaria aberto a discutir?&quot;
            </p>

            <h4 className="font-semibold mb-3">Mensagem 2 — Especificações (Dia 2–3, após resposta inicial)</h4>
            <p className="text-sm text-gray-700 italic mb-4">
              &quot;Obrigado por responder. Temos interesse em três estilos do seu catálogo — o Wayfarer 
              Clássico, o Redondo de Metal e o Quadrado Oversized — em acetato com lentes polarizadas. 
              Nossas quantidades iniciais seriam 200 peças por estilo e, se a qualidade e o prazo atenderem 
              às expectativas, gostaríamos de estabelecer reposições a cada 6–8 semanas. Você pode nos 
              cotar com base nessa estrutura? Também estamos abertos a ajustar o cronograma para se adequar 
              ao seu calendário de produção, se isso ajudar no preço.&quot;
            </p>

            <h4 className="font-semibold mb-3">Mensagem 3 — Negociação (após receber a cotação)</h4>
            <p className="text-sm text-gray-700 italic mb-4">
              &quot;Obrigado pela cotação — o detalhamento de preços é muito útil. Vejo que o Wayfarer está 
              a US$4,50 e o Redondo a US$4,80. Considerando nosso compromisso com reposições regulares em 
              três estilos, há flexibilidade para aproximar o preço médio de US$3,80–4,00? Também podemos 
              oferecer 50% de depósito antecipado para ajudar com seus custos de material. E se as vagas de 
              produção de março tiverem demanda mais leve, ficamos felizes em programar para essa época.&quot;
            </p>

            <h4 className="font-semibold mb-3">Mensagem 4 — Fechamento</h4>
            <p className="text-sm text-gray-700 italic">
              &quot;Combinado — US$4,05 na média dos três estilos com 50% de depósito é justo. Vamos 
              prosseguir com o pedido de amostra para os três estilos. Se as amostras atenderem nossa 
              especificação, confirmaremos o pedido completo e o depósito em 7 dias. Também te adicionei 
              no WeChat — mais fácil para atualizações rápidas. Ansioso para construir algo juntos.&quot;
            </p>
          </div>

          <p>
            Perceba o que este script <strong>não</strong> faz: exigir o menor preço, ameaçar ir embora 
            ou fazer promessas vazias de volume. Ele enquadra a conversa como uma parceria, usa quantidades 
            e prazos específicos, oferece uma concessão nas condições de pagamento e respeita o calendário 
            de produção da fábrica. É assim que você consegue o preço de US$3,65 enquanto o outro cara 
            ainda está travado nos US$4,50.
          </p>

          <p>
            Para entender melhor as quantidades de pedido antes de negociar, leia nosso guia sobre <Link href="/pt/blog/guia-moq-oculos-sol" className="text-primary-600 hover:underline">requisitos de MOQ para óculos de sol</Link> — 
            conhecer esses números antes de entrar em contato te coloca imediatamente no nível superior de 
            compradores informados.
          </p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Perguntas Frequentes</h2>
          <div className="space-y-6 not-prose">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16 not-prose">
            <h2 className="text-3xl font-bold mb-4">Pronto para Negociar como um Insider?</h2>
            <p className="text-xl mb-6 opacity-90">
              Pule a abertura &quot;qual o seu melhor preço&quot;. Me conte sobre sua marca, seu cronograma 
              e onde você quer estar em 12 meses — e eu te dou uma cotação que realmente reflete o que 
              podemos construir juntos.
            </p>
            <Link
              href="/pt/contato"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200 not-prose">
            <h2 className="text-2xl font-bold mb-6">Mais do Chão de Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/produtos/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Ver Nosso Catálogo</h3>
                <p className="text-gray-600 text-sm">Veja nossa linha completa de armações de acetato, metal, TR90 e ecológicas — todas disponíveis para personalização OEM e ODM.</p>
              </Link>
              <Link href="/pt/blog/guia-moq-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de MOQ para Óculos de Sol</h3>
                <p className="text-gray-600 text-sm">Entenda as quantidades mínimas de pedido entre estilos e tipos de fabricação — saiba seus números antes de negociar.</p>
              </Link>
              <Link href="/pt/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM: Qual é o Certo para Você?</h3>
                <p className="text-gray-600 text-sm">As diferenças em custo, prazo, MOQ e personalização — escolha o caminho certo para o estágio da sua marca.</p>
              </Link>
              <Link href="/pt/blog/guia-importacao-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Importar Óculos de Sol da China</h3>
                <p className="text-gray-600 text-sm">Envio, alfândega, impostos e conformidade — tudo depois da porta da fábrica, explicado passo a passo.</p>
              </Link>
              <Link href="/pt/contato" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale Conosco</h3>
                <p className="text-gray-600 text-sm">Receba um orçamento para seu pedido de óculos de sol personalizados. Preços reais de um dono de fábrica real.</p>
              </Link>
              <Link href="/pt/produtos/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Ver Todos os Produtos</h3>
                <p className="text-gray-600 text-sm">Armações de acetato, metal, TR90, ecológicas e prontas para prescrição para cada nicho de marca.</p>
              </Link>
            </div>
          </div>

          {/* ═══════ RELATED POSTS ═══════ */}
          <section className="mt-16 pt-8 border-t not-prose">
            <h2 className="text-2xl font-bold mb-6">Continue Lendo</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/oem-vs-odm" className="card p-4">
                <h3 className="font-semibold mb-2">OEM vs ODM: Qual Caminho de Fabricação é o Certo para Sua Marca?</h3>
                <p className="text-sm text-gray-600">Custos, prazos, diferenças de MOQ — e qual começar.</p>
              </Link>
              <Link href="/pt/blog/guia-importacao-oculos-sol" className="card p-4">
                <h3 className="font-semibold mb-2">Como Importar Óculos de Sol da China: Guia Completo</h3>
                <p className="text-sm text-gray-600">Opções de envio, desembaraço aduaneiro, impostos e requisitos de conformidade.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
    </>
  )
}
