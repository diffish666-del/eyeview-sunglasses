import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Exposição e Merchandising de Óculos de Sol no Varejo: Como Fazer Seus Óculos de Atacado Venderem',
  description: 'Guia prático de exposição de óculos de sol no varejo: expositores giratórios de balcão, vitrines de parede, merchandising de vitrine e materiais de PDV. Estratégias de exposição testadas em fábrica que realmente aumentam as taxas de venda no ponto de venda para marcas de óculos de atacado.',
  keywords: ['exposição de óculos de sol no varejo', 'merchandising de óculos de sol', 'expositor de óculos', 'display de balcão para óculos', 'PDV para óculos de atacado', 'expositor giratório de óculos', 'ideias de exposição de óculos no varejo', 'layout de loja de óculos', 'estratégia de merchandising de óculos', 'ponto de venda de óculos de sol'],
  alternates: {
    canonical: '/pt/blog/exposicao-varejo-oculos-sol',
  },
};

const takeaways = [
  'Os óculos de sol mais caros no seu expositor não são os de maior custo de atacado — são aqueles que os clientes não conseguem ver com clareza, não alcançam facilmente e não podem experimentar sem pedir ajuda; uma exposição ruim mata mais vendas do que um produto ruim jamais matará',
  'A colocação ao nível dos olhos gera 35% mais vendas por SKU do que a colocação na prateleira inferior — isso é o básico do varejo e, ainda assim, todo mês entro em óticas onde as armações premium estão na altura do joelho e os modelos de impulso de R$15 estão ao nível dos olhos',
  'Expositores de balcão (giratórios e bandejas escalonadas) convertem de 2 a 3 vezes mais do que expositores de parede para óculos de sol abaixo de R$50 no varejo, porque eliminam dois pontos de atrito: o cliente não precisa atravessar a loja e não precisa pedir a um funcionário para alcançar o produto',
  'A iluminação é a vendedora silenciosa dos óculos — temperatura de cor de 3500K-4000K com IRC 90+ faz as armações e lentes ficarem com a melhor aparência; a iluminação fluorescente (padrão na maioria dos espaços comerciais) adiciona um tom esverdeado às armações de acetato e faz as lentes polarizadas parecerem opacas',
  'O cliente médio toca de 3 a 5 armações antes de tomar a decisão de compra — se o seu expositor dificulta pegar, experimentar e devolver uma armação ao lugar, você está ativamente impedindo os clientes de alcançar o número de toques que precisam para comprar',
  'A rotação sazonal da exposição (não apenas a rotação de produtos) aumenta as vendas de óculos de sol na mesma loja em 12-18%: um expositor giratório com tema de praia em junho, uma vitrine de parede com tema de esqui em dezembro — sinais visuais simples que lembram os clientes de que eles precisam de óculos diferentes para condições diferentes',
];

const quickStats = [
  { label: 'Aumento: nível dos olhos vs prateleira inferior', value: '+35% vendas/SKU' },
  { label: 'Conversão: expositor de balcão vs parede', value: '2–3× maior' },
  { label: 'Aumento com rotação sazonal', value: '+12–18%' },
  { label: 'Armações tocadas antes da compra', value: '3–5 armações' },
  { label: 'TCC ideal para iluminação de exposição', value: '3500K–4000K' },
  { label: 'IRC mínimo para exposição de óculos', value: '90+' },
  { label: 'Capacidade do expositor giratório de balcão', value: '48–96 pares' },
  { label: 'Custo de produção de material de PDV', value: 'US$8–25/unidade (atacado)' },
];

const faqs = [
  {
    question: 'Qual é o melhor tipo de expositor para vender óculos de sol em uma loja de varejo?',
    answer: 'Expositores giratórios de balcão para óculos de sol abaixo de R$50 no varejo — ficam ao nível dos olhos, os clientes podem girar e navegar sem pedir ajuda, e o movimento giratório faz cada par parecer uma descoberta. Vitrines de parede para óculos de sol premium (R$50+ no varejo) — a vitrine com frente de vidro sinaliza maior valor e protege o estoque caro contra danos por manuseio. Bandejas acrílicas escalonadas de balcão para óculos de sol de compra por impulso perto do caixa — apresentação plana que permite aos clientes ver a cor da lente e o formato da armação rapidamente. As configurações de varejo mais eficazes usam os três: vitrine de parede para a linha premium (imagem da marca), expositor giratório de balcão para a linha intermediária (motor de volume) e bandeja escalonada para os SKUs de impulso/complemento (impulsionador de margem).',
  },
  {
    question: 'Quantos óculos de sol devo expor de uma só vez?',
    answer: 'Mais do que você imagina, mas menos do que a capacidade máxima física do seu expositor. O ponto ideal é 70-80% da capacidade de exposição — variedade suficiente para que cada cliente encontre algo de que goste, mas não tão lotado a ponto de as armações individuais desaparecerem no ruído visual. Um expositor giratório de 72 pares deve exibir 50-55 pares com espaço de respiração entre eles. Se cada slot estiver preenchido, o expositor parece uma prateleira de depósito e o valor percebido de cada par cai. O espaço entre as armações sinaliza curadoria: alguém fez escolhas sobre o que mostrar, em vez de simplesmente despejar o estoque no expositor. Faça a rotação dos SKUs de baixo giro para fora e das novidades para dentro a cada 2-3 semanas — os clientes que retornam devem ver algo novo.',
  },
  {
    question: 'Os óculos de sol devem ser expostos com ou sem etiqueta de preço?',
    answer: 'Depende do seu posicionamento. Para óculos de sol abaixo de R$30, preços visíveis aumentam a conversão — os clientes se auto-qualificam e não precisam perguntar "quanto custa?" antes de decidir. Para óculos de sol entre R$50-100, as etiquetas de preço são neutras a ligeiramente positivas — os clientes esperam por elas e as usam para comparar valor entre estilos. Para óculos de sol acima de R$150, remova as etiquetas de preço visíveis — nessa faixa de preço, os clientes precisam se apaixonar pelo produto primeiro e ouvir o preço depois, idealmente de um vendedor que saiba contextualizar o valor. Uma regra simples: se seus clientes ficariam constrangidos em perguntar o preço, esconda-o; se eles ficariam irritados por ter que perguntar, mostre-o.',
  },
  {
    question: 'Que tipo de iluminação funciona melhor para um expositor de óculos de sol?',
    answer: 'Iluminação de trilho LED ou spots ajustáveis com temperatura de cor de 3500K-4000K e IRC 90+. Branco quente (3000K) faz as armações de acetato parecerem mais ricas, mas distorce a cor das lentes. Branco frio (5000K+) faz tudo parecer estéril e clínico — ótimo para uma sala de exames oftalmológicos, péssimo para vender moda. O IRC (Índice de Reprodução de Cor) importa mais do que a maioria dos lojistas imagina: qualquer valor abaixo de 90 IRC fará as lentes polarizadas parecerem turvas e as armações de acetato parecerem desbotadas. Cada seção do expositor precisa de sua própria fonte de luz dedicada — não dependa apenas da iluminação ambiente do teto. Posicione as luzes em um ângulo de 30 graus de cima para minimizar os reflexos nas lentes e maximizar os detalhes da armação. Fitas de LED dentro das vitrines de vidro com difusor (não LEDs expostos) criam um brilho uniforme que faz cada par parecer premium.',
  },
  {
    question: 'Como uma fábrica de óculos de sol pode ajudar com expositores de varejo e materiais de PDV?',
    answer: 'A maioria das fábricas chinesas de óculos de sol oferece soluções de expositores personalizados como parte dos pedidos de atacado. Expositores giratórios de balcão (US$15-40/unidade no atacado, dependendo do material e tamanho), bandejas de exposição personalizadas com sua logomarca (US$2-8/unidade), suportes para vitrine (US$5-15/unidade) e sinalização de PDV (Ponto de Venda) personalizada (US$1-5/unidade) são complementos padrão. As melhores fábricas projetam o expositor para combinar com a estética da sua marca — posicionamento do logotipo, esquema de cores e até o acabamento do material. Para pedidos maiores (3.000+ unidades), muitas fábricas incluem expositores básicos sem custo adicional. A conversa-chave para ter com sua fábrica: peça amostras de expositores junto com as amostras de produtos. Um expositor que parece bom em uma foto, mas desmorona após três meses de manuseio pelos clientes, é pior do que nenhum expositor — faz sua marca parecer barata. Especifique o material (acrílico, madeira, metal ou composto), solicite um teste de peso (um expositor que tomba quando está pela metade é perigoso) e pergunte sobre modularidade (você pode adicionar mais níveis ou trocar painéis conforme sua linha cresce?).',
  },
  {
    question: 'Com que frequência devo renovar o layout da exposição de óculos de sol?',
    answer: 'Renovação completa da exposição a cada estação (4× por ano), rotação menor a cada 2-3 semanas. A renovação sazonal deve mudar o tema visual: praia/verão → outono/tons quentes → inverno/esportes na neve → primavera/cores frescas. A rotação menor deve colocar as novidades na frente, mover os itens de baixo giro para posições secundárias e agrupar estilos complementares (aviadores com aviadores, wayfarers com wayfarers). Os clientes que visitam uma loja mensalmente perceberão e apreciarão que a exposição não está congelada no tempo. A pior coisa que você pode fazer é deixar os mesmos 12 pares nas mesmas posições por seis meses — isso sinaliza que nada está vendendo e que a loja está estagnada. Mesmo que o estoque não tenha mudado, reorganizar a exposição existente cria a impressão de novidade.',
  },
];

const PUBLISH_DATE = '2026-08-04';
const SLUG = 'exposicao-varejo-oculos-sol';

export default function ExposicaoVarejoOculosSol() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Guia de Exposição e Merchandising no Varejo' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Exposição e Merchandising de Óculos de Sol no Varejo: Como Fazer Seus Óculos de Atacado Venderem",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guia prático de exposição de óculos de sol no varejo: expositores giratórios de balcão, vitrines de parede, materiais de PDV e estratégias de exposição que aumentam as taxas de venda no ponto de venda.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/pt/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}} />

        {/* ═══════ CABEÇALHO DO ARTIGO ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Operações de Varejo</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>12 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exposição e Merchandising de Óculos de Sol no Varejo: Como Fazer Seus Óculos de Atacado Saírem da Prateleira
          </h1>
          <p className="text-xl text-gray-600">
            Já entrei em centenas de óticas, lojas de surf e quiosques de aeroporto ao longo de 20 anos neste negócio. As lojas que movimentam estoque nem sempre são as que têm os melhores produtos. São aquelas onde o produto é impossível de ignorar. Aqui está o que realmente funciona.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ ÍNDICE ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice</h2>
          <ul className="space-y-2">
            <li><a href="#tipos-de-expositores" className="text-primary-600 hover:underline">Tipos de Expositores: Balcão, Parede, Chão — Qual Usar Onde</a></li>
            <li><a href="#iluminacao" className="text-primary-600 hover:underline">Iluminação: A Vendedora Silenciosa</a></li>
            <li><a href="#layout" className="text-primary-600 hover:underline">Layout da Loja: Onde os Óculos de Sol Devem Ficar no Seu Espaço de Varejo</a></li>
            <li><a href="#materiais-pdv" className="text-primary-600 hover:underline">Materiais de PDV: O Que a Fábrica Pode Produzir Para Você</a></li>
            <li><a href="#sazonal" className="text-primary-600 hover:underline">Merchandising Sazonal: Por Que os Óculos de Sol de Janeiro Precisam de uma Exposição Diferente da de Julho</a></li>
            <li><a href="#erros" className="text-primary-600 hover:underline">5 Erros de Exposição Que Estão Custando Suas Vendas Agora</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        {/* ═══════ CORPO DO ARTIGO ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />
          <QuickStats stats={quickStats} title="Fatos Rápidos" />

          {/* ─── Seção 1: Tipos de Expositores ─── */}
          <h2 id="tipos-de-expositores" className="text-3xl font-bold mt-16 mb-6">Tipos de Expositores: Balcão, Parede, Chão — Qual Usar Onde</h2>
          
          <p>A maioria dos lojistas compra qualquer expositor que seu fornecedor oferece e considera o trabalho concluído. Isso é um erro. Onde você coloca o expositor importa tanto quanto o próprio expositor, e posições diferentes na loja exigem formatos de exposição diferentes.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Expositores Giratórios de Balcão — O Cavalo de Batalha</h3>
          
          <p>O expositor giratório de balcão é o formato mais eficaz para óculos de sol abaixo de R$50. Fica ao nível dos olhos. Convida à interação — os clientes naturalmente estendem a mão e giram. Cada volta revela novas opções, o que prolonga o tempo de navegação. O cliente médio passa de 40 a 90 segundos em um expositor giratório, contra 15 a 30 segundos em um expositor de parede estático. Esse tempo extra de permanência se traduz diretamente em vendas.</p>
          
          <p>Os expositores giratórios comportam de 48 a 96 pares, dependendo do tamanho. O formato de 72 pares é o padrão: três níveis de 24 pares cada. Coloque as novidades no nível superior (mais visível), os mais vendidos no meio (mais fácil de alcançar) e os itens de saldo ou excedente sazonal na parte inferior. Os pares do nível superior devem ficar levemente inclinados para cima — uma inclinação de 10 a 15 graus — para que os clientes vejam as lentes, não o topo da armação.</p>
          
          <p><strong>Custo:</strong> US$15-40/unidade no atacado de uma fábrica chinesa, US$50-120 de fornecedores nacionais de expositores. A versão de fábrica é quase sempre o mesmo acrílico ou plástico ABS da versão nacional — você está pagando por armazenagem local e envio mais rápido, não por qualidade superior.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Vitrines de Parede — A Opção Premium</h3>
          
          <p>As vitrines de parede com frente de vidro sinalizam qualidade. Quando um cliente vê um par de óculos de sol atrás do vidro, ele presume que custa mais — e geralmente está certo. Reserve as vitrines de parede para seus SKUs de R$50+ no varejo. O vidro também serve a um propósito prático: armações caras são menos manuseadas, o que significa menos arranhões, menos hastes tortas e menos conversas do tipo "este está danificado, tem outro?" com os clientes.</p>
          
          <p>A configuração ideal de vitrine de parede: 4 a 6 prateleiras, cada uma comportando 8 a 12 pares, com as faces inclinadas de 20 a 30 graus para baixo, para que os clientes possam ver toda a frente de cada armação da altura em que estão. Fitas de LED dentro da vitrine (bordas superior e inferior, difusas) criam o brilho uniforme que faz as armações de acetato parecerem ricas e as de metal parecerem polidas. Um espelho montado na lateral da vitrine ou na parede adjacente é inegociável — os clientes precisam se ver usando os óculos antes de comprar.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Bandejas Escalonadas de Balcão — O Motor de Compra por Impulso</h3>
          
          <p>Bandejas acrílicas planas ou levemente inclinadas no caixa são o formato de exposição mais barato e um dos mais eficazes. Uma bandeja de três níveis (degraus pequeno/médio/grande) comporta de 18 a 24 pares. Posicione-as perto do balcão do caixa com óculos de sol na faixa de R$10-25 e veja-os desaparecerem. A psicologia é simples: o cliente já está ali parado, já decidiu gastar dinheiro, e mais R$15 por um segundo par de óculos de sol não parece uma decisão — parece uma ideia de última hora.</p>
          
          <p>Uma dica específica: coloque as armações mais coloridas e chamativas nessas bandejas. Lentes espelhadas, cores vibrantes de acetato, formatos incomuns. Armações neutras pretas e tartaruga pertencem à parede — são uma compra considerada. A bandeja do caixa é para compras do tipo "ah, que legal, vou levar".</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Torres Giratórias de Chão — Para Varejo de Alto Fluxo</h3>
          
          <p>As torres de chão comportam de 120 a 200 pares e funcionam melhor em ambientes de varejo de alto fluxo — lojas de departamento, lojas de aeroporto, grandes redes de óticas. São grandes demais para uma boutique, onde dominariam o espaço. A vantagem é a capacidade pura: uma torre pode exibir uma linha completa de marca. A desvantagem é que os clientes precisam se abaixar para os níveis inferiores, o que significa que esses slots vendem 40-50% menos que os níveis do meio e do topo. Use os dois níveis inferiores para excesso de estoque ou acessórios (estojos, panos de limpeza, cordões) em vez do estoque principal.</p>

          {/* ─── Seção 2: Iluminação ─── */}
          <h2 id="iluminacao" className="text-3xl font-bold mt-16 mb-6">Iluminação: A Vendedora Silenciosa</h2>
          
          <p>Certa vez visitei a loja de um comprador em Hamburgo que tinha armações lindas — acetato italiano, dobradiças alemãs, lentes polarizadas premium — expostas sob as luzes fluorescentes padrão do teto. As armações pareciam cinzentas e sem vida. As lentes polarizadas tinham um reflexo de aparência oleosa que era, na verdade, o tubo fluorescente refletindo no revestimento da lente. Estavam vendendo talvez 15 pares por semana em um distrito comercial nobre.</p>
          
          <p>Trocaram para iluminação de trilho LED de 4000K com IRC 92. Mesmas armações. Mesmos preços. Mesma localização. As vendas subiram para mais de 30 pares por semana em dois meses. Isso não é conto de fadas — eu vi os números.</p>
          
          <p>Aqui está o que você precisa saber sobre iluminação de óculos de sol:</p>
          
          <p><strong>Temperatura de cor:</strong> 3500K-4000K é o ponto ideal. 3000K (branco quente) é amarelo demais — faz as lentes cinzas parecerem marrons e distorce a cor da armação. 5000K+ (branco frio/luz do dia) é muito forte — faz cada armação parecer clínica e desbota os tons quentes do acetato. 4000K é branco neutro com calor suficiente para fazer os tons de pele e os materiais das armações parecerem naturais.</p>
          
          <p><strong>IRC (Índice de Reprodução de Cor):</strong> 90 no mínimo, 95+ ideal. O IRC mede a precisão com que uma fonte de luz reproduz as cores em comparação com a luz solar natural. Os tubos fluorescentes padrão normalmente têm IRC de 70-80, e é por isso que tudo parece ligeiramente alterado sob iluminação de escritório. LED com IRC 90+ custa talvez 20% a mais por luminária e faz uma diferença visível na aparência dos seus produtos.</p>
          
          <p><strong>Posicionamento:</strong> Cada seção do expositor precisa de sua própria luz. Não dependa da iluminação ambiente do teto — ela cria sombras nos ângulos errados e deixa metade do seu estoque no escuro. Para expositores de parede, monte fitas de LED dentro da vitrine. Para expositores giratórios de balcão, use uma luminária de mesa ajustável ou um spot de trilho no teto posicionado em um ângulo de 30 a 45 graus de cima. O objetivo é uma iluminação uniforme em todas as armações, sem pontos quentes e sem zonas mortas.</p>
          
          <p><strong>Evite isto:</strong> Lâmpadas fluorescentes (tom esverdeado, baixo IRC, cintilação que alguns clientes conseguem perceber), lâmpadas LED sem difusor (criam sombras duras e pontos quentes nas lentes brilhantes) e luz solar direta através de uma janela (os raios UV degradam os materiais das armações ao longo do tempo e criam sombras desfavoráveis que mudam ao longo do dia).</p>

          {/* ─── Seção 3: Layout da Loja ─── */}
          <h2 id="layout" className="text-3xl font-bold mt-16 mb-6">Layout da Loja: Onde os Óculos de Sol Devem Ficar no Seu Espaço de Varejo</h2>
          
          <p>Se você tem uma ótica, os óculos de sol devem ser a primeira coisa que os clientes veem quando entram — não escondidos em um canto atrás do expositor de lentes de grau. Há uma razão para isso: óculos de grau são uma compra por necessidade. A pessoa entra porque precisa — os óculos quebraram, a receita mudou, o filho precisa de novas armações antes do início das aulas. Óculos de sol são uma compra por desejo. São divertidos. Fazem as pessoas se sentirem bem. Coloque o que é divertido na frente para criar uma primeira impressão positiva que se estende até a compra por necessidade.</p>
          
          <p>Para o varejo não oftálmico (lojas de surf, lojas de departamento, boutiques de roupa, quiosques de aeroporto), a regra é diferente: os óculos de sol devem ficar perto da entrada, mas sem bloqueá-la. O local ideal é de 3 a 5 metros da porta, no lado direito (direção natural de varredura visual da maioria das pessoas em ambientes de varejo ocidentais — inverter para o lado esquerdo em culturas de leitura da direita para a esquerda). Esta posição alcança os clientes depois que eles se orientaram no espaço, mas antes de se comprometerem a explorar um departamento específico. É o momento "ah, óculos de sol" — eles não estavam planejando olhar, mas agora estão.</p>
          
          <p><strong>A regra do espelho:</strong> Toda área de exposição de óculos de sol precisa de um espelho ao alcance do braço. Não do outro lado da sala. Não "tem um perto dos provadores". Ao alcance do braço. Se um cliente precisa andar 10 passos para se ver usando um par de óculos de sol, você acabou de criar uma oportunidade de 10 passos para ele largar os óculos e ir embora. Espelhos de parede ao lado da vitrine. Espelhos de mão no balcão. Um espelho de corpo inteiro por perto para a verificação de "como ficam com minha roupa". Espelhos são a ferramenta de venda mais barata do varejo e a mais frequentemente ausente.</p>
          
          <p><strong>Fluxo de tráfego:</strong> Se o layout da sua loja obriga os clientes a passar pelo expositor de óculos de sol para chegar a outra seção (provadores, caixa, banheiros), você está ganhando impressões gratuitas. Posicione o expositor ao longo de um caminho de tráfego natural, não em um canto sem saída. Cada cliente que passa vê o expositor, quer pretenda ou não. Uma porcentagem deles vai parar.</p>

          {/* ─── Seção 4: Materiais de PDV ─── */}
          <h2 id="materiais-pdv" className="text-3xl font-bold mt-16 mb-6">Materiais de PDV: O Que a Fábrica Pode Produzir Para Você</h2>
          
          <p>Materiais de Ponto de Venda — a sinalização, os cartões de marca e os expositores promocionais que ficam ao lado do seu produto — são algo que a maioria dos compradores de atacado ignora. Não deveriam. Bons materiais de PDV respondem às três perguntas que todo cliente faz quando vê uma marca nova pela primeira vez: "O que é isso?", "Por que eu deveria me importar?" e "Quanto custa?".</p>
          
          <p>Aqui está o que as fábricas chinesas de óculos de sol podem produzir como parte do seu pedido de atacado:</p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Item de PDV</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Custo no Atacado</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Pedido Mínimo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Cartão de cabeçalho da marca (suporte de balcão)</td>
                  <td className="border border-gray-300 px-4 py-2">US$1,50–3,00</td>
                  <td className="border border-gray-300 px-4 py-2">100</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Acrílico ou cartão grosso, impressão colorida</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Expositor giratório de balcão (personalizado)</td>
                  <td className="border border-gray-300 px-4 py-2">US$15–40</td>
                  <td className="border border-gray-300 px-4 py-2">50</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Acrílico de 3 níveis com impressão do logotipo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Suporte para vitrine</td>
                  <td className="border border-gray-300 px-4 py-2">US$5–15</td>
                  <td className="border border-gray-300 px-4 py-2">100</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Suporte para um par, diversos materiais</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Pôster de parede (marca/coleção)</td>
                  <td className="border border-gray-300 px-4 py-2">US$1–3</td>
                  <td className="border border-gray-300 px-4 py-2">200</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Tamanho A3/A2, fosco ou brilhante</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Cartão de características da lente (tent card)</td>
                  <td className="border border-gray-300 px-4 py-2">US$0,30–0,80</td>
                  <td className="border border-gray-300 px-4 py-2">500</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Pequeno cartão dobrável explicando a tecnologia das lentes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Torre de chão (personalizada)</td>
                  <td className="border border-gray-300 px-4 py-2">US$80–200</td>
                  <td className="border border-gray-300 px-4 py-2">20</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Metal + acrílico, capacidade de 150-200 pares</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>O item de PDV mais eficaz, na minha experiência, é o cartão de características da lente. É um pequeno cartão dobrável, mais ou menos do tamanho de um cartão de visita, que fica ao lado do expositor e explica — em dois ou três tópicos — o que torna as lentes especiais. "Proteção UV400", "Polarizadas — Reduzem o Brilho na Água e na Estrada", "Fotocromáticas — Escurecem com a Luz Solar". Este pequeno pedaço de papel responde à pergunta "por que eu deveria me importar" sem precisar de um vendedor. Custa 30 centavos e movimenta produto. Já vi cartões de características de lente aumentarem as vendas de óculos polarizados em 15-20% em lojas onde os clientes navegam sem assistência de funcionários.</p>

          {/* ─── Seção 5: Merchandising Sazonal ─── */}
          <h2 id="sazonal" className="text-3xl font-bold mt-16 mb-6">Merchandising Sazonal: Por Que os Óculos de Sol de Janeiro Precisam de uma Exposição Diferente da de Julho</h2>
          
          <p>A maioria dos lojistas trata os óculos de sol como um produto de verão. Montam uma exposição completa em maio e a desmontam em setembro. Isso deixa dinheiro na mesa por oito meses do ano.</p>
          
          <p>Óculos de sol vendem o ano todo — apenas o caso de uso muda conforme a estação. Verão é praia, piscina, festivais ao ar livre. Inverno é esportes na neve, sol baixo durante as poucas horas de luz e brilho refletido em estradas molhadas. Primavera e outono são direção, trilhas e as condições de luz de transição onde as lentes fotocromáticas e de tonalidade clara brilham. Sua exposição deve refletir isso.</p>
          
          <p><strong>Exposição de verão (maio-agosto):</strong> Vibrante, energética. Adereços de praia — areia, conchas, uma pequena toalha de praia como base de exposição. Foco em lentes polarizadas, revestimentos espelhados, cores vibrantes de armação. A mensagem é diversão, sol, estilo.</p>
          
          <p><strong>Exposição de inverno (novembro-fevereiro):</strong> Limpa, nítida, com foco em desempenho. Superfícies de exposição brancas, detalhes metálicos. Destaque para armações esportivas envolventes, lentes polarizadas para brilho da neve, lentes fotocromáticas. Inclua uma pequena placa: "O brilho da neve é 3× mais intenso que o brilho da praia — proteja seus olhos nas pistas."</p>
          
          <p><strong>Exposição de primavera/outono (março-abril, setembro-outubro):</strong> Esta é a estação de transição e o melhor momento para promover lentes de tonalidade clara e fotocromáticas. Temas de exposição: direção, aventura ao ar livre, "um par para condições variáveis". Destaque para lentes marrons e verdes (melhor contraste em luz variável).</p>
          
          <p>Mesmo que você não troque uma única armação do seu estoque, mudar o tema visual da sua exposição sinaliza aos clientes que você está atualizado, entende as estações e pensou sobre o que eles realmente precisam agora. Uma exposição com tema de esqui em janeiro em uma loja de surf chama a atenção porque é inesperado — e lembra os surfistas de que eles também precisam de óculos de sol na montanha.</p>

          {/* ─── Seção 6: 5 Erros de Exposição ─── */}
          <h2 id="erros" className="text-3xl font-bold mt-16 mb-6">5 Erros de Exposição Que Estão Custando Suas Vendas Agora</h2>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Erro 1: Expor Todos os SKUs Que Você Possui</h3>
          <p>Mais opções não geram mais vendas — geram paralisia por decisão. O cliente que olha para 60 pares de óculos de sol e não consegue decidir não comprará nada. Faça a curadoria da sua exposição. Mostre no máximo 20 a 30 pares em uma única área de visualização, agrupados por estilo (aviadores juntos, wayfarers juntos, armações esportivas juntas). Se um cliente quiser algo que você não tem em exposição, ele perguntará. O depósito é para o estoque. O expositor é para vender.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Erro 2: Armações Sujas ou Empoeiradas no Expositor</h3>
          <p>Não consigo contar em quantas lojas entrei onde as armações em exposição estão cobertas de marcas de dedo e poeira. Os clientes tocam nos óculos de sol — esse é o objetivo. Mas se as armações expostas parecem sujas, os clientes presumem que o produto é velho, indesejado ou mal feito. Limpe cada armação em exposição uma vez por dia. Leva 10 minutos e é a atividade de maior retorno sobre o investimento no varejo.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Erro 3: Mesma Exposição Por Mais de 6 Meses</h3>
          <p>Quando os clientes veem a mesma exposição toda vez que visitam, eles param de vê-la por completo. A cegueira de exposição é real. Se você não pode mudar o estoque, mude o layout. Troque os lados esquerdo e direito. Mude o expositor giratório de balcão para outro balcão. Faça a rotação de quais armações ficam ao nível dos olhos. O objetivo é fazer a exposição parecer diferente o suficiente para que os clientes que retornam percebam e deem uma nova olhada.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Erro 4: Sem Espelho, ou Espelho no Lugar Errado</h3>
          <p>Já disse isso, mas vale repetir porque é o erro mais comum no varejo de óculos. Sem espelho = sem compra. Espelho do outro lado da sala = compra abandonada no meio do caminho. Coloque um espelho onde o cliente está parado agora.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Erro 5: Usar o Expositor Como Depósito</h3>
          <p>O expositor giratório de balcão é para vender, não para armazenar estoque reserva. Quando um expositor fica abarrotado com pares extras na frente dos expostos, ou quando etiquetas e embalagens plásticas são deixadas porque "o cliente pode tirar", a mensagem para o cliente é: isto é uma prateleira de depósito, não uma experiência de varejo com curadoria. Se você precisa de armazenamento, compre um armário. O expositor é sagrado.</p>

          {/* ═══════ SEÇÃO DE PERGUNTAS FREQUENTES ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Quer Expositores Personalizados Com Seu Pedido de Atacado?</h2>
            <p className="text-xl mb-6 opacity-90">Produzimos expositores giratórios de balcão, vitrines de parede, sinalização de PDV e embalagens personalizadas junto com seus óculos de sol — um único envio, uma única fábrica, tudo personalizado conforme suas especificações. Envie seu logotipo e requisitos de expositores para um orçamento.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento de Expositores e PDV
            </Link>
          </div>

          {/* ═══════ CONTEÚDO RELACIONADO ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais do Chão de Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/custom-sunglasses-packaging" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Embalagens Personalizadas para Óculos de Sol</h3>
                <p className="text-gray-600 text-sm">Caixas, bolsas, estojos — quanto custa cada nível e o que seus clientes esperam.</p>
              </Link>
              <Link href="/blog/start-sunglasses-brand" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Criar uma Marca de Óculos de Sol</h3>
                <p className="text-gray-600 text-sm">O roteiro completo do conceito ao primeiro envio, direto da fábrica.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale Conosco</h3>
                <p className="text-gray-600 text-sm">Solicite um orçamento para seu pedido personalizado de óculos de sol e expositores no atacado.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
