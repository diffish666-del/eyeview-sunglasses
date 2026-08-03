import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feiras de Óculos de Sol 2026: Guia do Fabricante para Encontrar Fornecedores',
  description: 'Guia de um fabricante chinês sobre feiras de óculos de sol em 2026 — MIDO, SILMO, Vision Expo, IOFT, Feira Óptica de Hong Kong. Custos de estande, estratégias de avaliação de fornecedores e follow-up que realmente funciona.',
  keywords: 'feiras óculos de sol 2026, exposição eyewear 2026, MIDO óculos, SILMO eyewear, feira óptica sourcing, encontrar fornecedores óculos feiras',
  alternates: {
    canonical: '/pt/blog/guia-feiras-comerciais-oculos-sol',
    languages: {
      'en': '/blog/sunglasses-trade-shows-guide',
      'pt': '/pt/blog/guia-feiras-comerciais-oculos-sol',
    },
  },
}

const faqs = [
  {
    question: 'Qual é a melhor feira de óculos de sol para encontrar fabricantes?',
    answer: 'A MIDO em Milão (fevereiro) e a Feira Óptica de Hong Kong (novembro) são as duas melhores para acesso a fabricantes. A MIDO reúne fábricas europeias e globais — Itália, França, Japão, China — tudo em um só lugar. Hong Kong é mais concentrado: aproximadamente 70% dos expositores têm operações de fábrica na China continental, permitindo que você encontre tomadores de decisão da cadeia de suprimentos diretamente, sem o markup italiano.',
  },
  {
    question: 'Quanto custa expor em uma feira de óculos de sol?',
    answer: 'Um estande padrão de 9m² na MIDO ou SILMO custa entre US$4.000 e US$6.000. Estandes maiores tipo ilha (36m²+) podem chegar a US$25.000–US$80.000 quando se inclui montagem personalizada, iluminação e aluguel de mobiliário. A Vision Expo nos EUA é similar — US$4.500+ para um estande pequeno, US$15.000–US$50.000 para um espaço com marca. A maioria das fábricas chinesas nessas feiras tem estandes de 18–36m², o que indica que levam o negócio de exportação a sério.',
  },
  {
    question: 'Preciso me registrar com antecedência para feiras de óculos?',
    answer: 'Sim, sempre. MIDO, SILMO, Vision Expo e IOFT exigem pré-registro online. O registro presencial existe, mas você perderá 45–60 minutos na fila. A maioria das feiras abre o registro com 3–4 meses de antecedência e oferece preços com desconto para inscrição antecipada — a MIDO custava €35 antecipado vs. €55 na porta no ano passado. Leve seus documentos de registro da empresa; algumas feiras verificam se você é um comprador do setor antes de conceder acesso.',
  },
  {
    question: 'O que devo levar para uma feira ao me encontrar com fornecedores?',
    answer: 'Leve pouco, mas específico: 3–5 amostras de concorrentes como referência de qualidade, mais de 100 cartões de visita (você vai gastar mais do que imagina), uma ficha técnica com seu preço de varejo alvo, preferências de material e requisitos de certificação UV400, um carregador portátil, sapatos confortáveis e um caderno pequeno. O mais importante: fotos impressas exatamente do que você quer — a barreira do idioma desaparece quando você pode apontar para uma imagem.',
  },
  {
    question: 'Como faço o follow-up com fornecedores após uma feira?',
    answer: 'Envie um e-mail personalizado em até 48 horas — não um disparo genérico. Mencione algo específico da conversa no estande ("lembro que você mencionou seu fornecedor de acetato na Mazzucchelli"). Inclua fotos das suas amostras de referência. Solicite uma cotação com suas quantidades, não "qual o seu melhor preço". As fábricas recebem mais de 200 e-mails de "me envie seu catálogo" após cada feira; os que se destacam são aqueles que parecem um pedido real, não uma pescaria.',
  },
]

const PUBLISH_DATE = '2026-07-20'

export default function GuiaFeirasComerciaisOculosSolPage() {
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
          "headline": "Feiras de Óculos de Sol 2026: Guia do Fabricante para Encontrar Fornecedores",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guia de um fabricante chinês sobre feiras de óculos de sol em 2026 — MIDO, SILMO, Vision Expo, IOFT, Feira Óptica de Hong Kong. Custos de estande, estratégias de avaliação de fornecedores e follow-up que realmente funciona.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/guia-feiras-comerciais-oculos-sol" },
          "inLanguage": "pt"
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fornecimento</span>
            <span>20 de julho de 2026</span>
            <span>•</span>
            <span>8 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Feiras de Óculos de Sol 2026: Guia do Fabricante para Encontrar Fornecedores
          </h1>
          <p className="text-xl text-gray-600">
            Já trabalhei em estandes em mais de 30 feiras. A maioria dos compradores percorre o salão do jeito errado. Veja como fazer certo.
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
            <li><a href="#por-que-feiras" className="text-primary-600 hover:underline">Por Que as Feiras Ainda Importam na Era do Alibaba</a></li>
            <li><a href="#calendario" className="text-primary-600 hover:underline">Calendário das Principais Feiras 2026</a></li>
            <li><a href="#preparar" className="text-primary-600 hover:underline">O Que Preparar Antes de Ir</a></li>
            <li><a href="#avaliar" className="text-primary-600 hover:underline">Como Avaliar Fornecedores em uma Feira</a></li>
            <li><a href="#estrategia-estande" className="text-primary-600 hover:underline">A Estratégia de Visita que a Maioria dos Compradores Erra</a></li>
            <li><a href="#follow-up" className="text-primary-600 hover:underline">Follow-Up Pós-Feira que Realmente Funciona</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">

          {/* ─── Intro ─── */}
          <p className="text-xl text-gray-600 mb-8">
            Em 2019, um comprador entrou no nosso estande na MIDO Milão, pegou uma das nossas armações de acetato, 
            dobrou a haste quase plana contra a frente, segurou por três segundos e a colocou de volta na mesa. 
            Não disse nada. Apenas acenou com a cabeça, pegou um cartão de visita e foi embora. Dois meses depois, 
            ele fez um pedido de US$45.000.
          </p>
          <p>
            Essa é a questão das feiras. Você não consegue replicar esse momento no Alibaba. Não dá para 
            sentir a tensão da mola da dobradiça por mensagem. Não dá para cheirar acetato fresco ou segurar 
            uma lente polarizada contra as luzes do salão através de uma listagem de produto. Nos 15 anos em 
            que administro uma fábrica de óculos de sol na China, as feiras foram onde nossos melhores 
            relacionamentos com clientes começaram — não em uma caixa de entrada, não em uma plataforma B2B, 
            mas em uma mesa de estande de 3 metros com amostras entre nós.
          </p>
          <p>
            Mas aqui está o que ninguém conta: <strong>a maioria dos compradores é péssima em feiras.</strong> Eles 
            percorrem o salão como turistas, colecionam catálogos como lembrancinhas e voltam para casa com uma 
            sacola cheia de cartões de visita que nunca mais vão olhar. Eu assisti isso de trás do estande por 
            mais de uma década. Este guia é o oposto disso — é como entrar em qualquer feira de óculos em 2026 
            e sair com relacionamentos reais com fornecedores, não apenas uma pilha de folhetos.
          </p>

          {/* ─── Section 1: Por Que as Feiras Ainda Importam ─── */}
          <h2 id="por-que-feiras" className="text-3xl font-bold mt-16 mb-6">Por Que as Feiras Ainda Importam na Era do Alibaba</h2>
          <p>
            Recebo essa pergunta constantemente: &quot;Por que eu gastaria US$3.000 em passagens e hotéis 
            quando posso navegar por fornecedores no Alibaba de graça?&quot;
          </p>
          <p>
            Aqui vai a resposta honesta: <strong>cerca de 40–50% dos &quot;fabricantes&quot; no Alibaba são 
            empresas de trading.</strong> Eles não possuem uma única máquina de injeção. Pegam seu pedido, 
            aplicam uma margem de 15–30% e enviam para uma fábrica cujo nome você nunca vai saber. Já vi 
            empresas de trading entrarem no nosso estande, fotografarem nossas amostras e as listarem no 
            Alibaba como produtos próprios na mesma noite. Sei disso porque compradores depois me enviaram 
            screenshots perguntando por que &quot;nossas&quot; armações estavam listadas sob um nome de 
            empresa diferente.
          </p>
          <p>
            Em uma feira, você elimina o intermediário por padrão. O estande custa no mínimo US$4.000 — 
            empresas de trading não investem esse tipo de dinheiro em uma única feira. Você está diante de 
            alguém que ou é dono da fábrica ou administra as operações. Você pode perguntar &quot;onde fica 
            sua linha de produção?&quot; e observar a reação em tempo real. Pode abrir gavetas atrás do 
            expositor, verificar o interior das pontas das hastes em busca de marcas de molde e ver como as 
            amostras são realmente acabadas — não como foram fotografadas sob iluminação de estúdio.
          </p>
          <p>
            Mais um ponto importante: <strong>a fábrica que expõe na MIDO ou SILMO passou por um filtro.</strong> 
            Ela tem documentação de exportação. Tem funcionários que falam inglês. Entende os padrões 
            internacionais de qualidade. Investiu dinheiro sério para estar ali — um estande de 18m² com 
            iluminação adequada e vitrines na MIDO custa cerca de US$12.000–US$15.000 no total. Ninguém 
            gasta isso para dar golpe.
          </p>

          {/* ─── Section 2: O Calendário ─── */}
          <h2 id="calendario" className="text-3xl font-bold mt-16 mb-6">Calendário das Principais Feiras 2026</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">MIDO Milão — 7 a 9 de Fevereiro de 2026</h3>
          <p>
            Esta é a principal. Mais de 1.300 expositores de mais de 50 países, mais de 55.000 visitantes e 
            uma indústria de €38 bilhões concentrada no centro de convenções Fiera Milano Rho. Se você só 
            puder ir a uma feira este ano, que seja a MIDO.
          </p>
          <p>
            O salão é organizado por pavilhões — Design, Tech, Fashion, Lens e Asia. Para fornecimento, 
            você quer o <strong>Pavilhão Ásia</strong> e partes do Pavilhão Fashion. É lá que você encontra 
            fabricantes chineses, coreanos e de Hong Kong que produzem em volumes competitivos. O Pavilhão 
            Design é majoritariamente de marcas italianas e francesas de acetato premium — lindo de ver, 
            mas espere preços FOB em torno de US$12–US$25 por unidade para OEM, contra US$5–US$12 no 
            Pavilhão Ásia para qualidade equivalente.
          </p>
          <p>
            Lembro de um cliente do Canadá que passou dois dias inteiros no Pavilhão Design, se apaixonou 
            por armações italianas de acetato, recebeu cotação de €22/unidade FOB e entrou em pânico quando 
            percebeu que seu preço de varejo teria que ser acima de US$120 só para empatar. Ele nos encontrou 
            no Pavilhão Ásia no terceiro dia, viu armações com acetato Mazzucchelli a US$9,50/unidade e quase 
            me abraçou. Mesmo material. Cadeia de suprimentos diferente. É por isso que você percorre o 
            salão inteiro antes de tomar decisões.
          </p>
          <blockquote className="border-l-4 border-primary-600 pl-4 my-6 italic text-gray-700">
            <strong>Dica de profissional:</strong> A MIDO funciona de sábado a segunda. Sábado é um caos — 
            todos os compradores chegam de uma vez. Na segunda à tarde, o salão está tranquilo, os expositores 
            estão cansados mas relaxados, e você pode ter conversas reais. Já dei preços melhores na segunda 
            às 15h do que jamais daria no sábado às 11h quando há uma fila de pessoas esperando atrás de você.
          </blockquote>

          <h3 className="text-2xl font-bold mt-8 mb-4">Vision Expo East (Nova York) — 12 a 15 de Março de 2026</h3>
          <h3 className="text-2xl font-bold mt-8 mb-4">Vision Expo West (Las Vegas) — 16 a 19 de Setembro de 2026</h3>
          <p>
            As duas edições da Vision Expo são os maiores eventos de compra dos EUA, mas há uma distinção 
            que você precisa entender: dos aproximadamente 450 expositores em cada feira, apenas cerca de 
            <strong>180–200 são realmente fabricantes de óculos.</strong> O resto são laboratórios de lentes, 
            vendedores de equipamentos, marcas de armações, empresas de software e serviços optométricos. 
            Se você entrar procurando uma fábrica sem pré-filtrar o mapa do salão, vai desperdiçar metade 
            do dia falando com pessoas que querem te vender um sistema de gestão de clínica.
          </p>
          <p>
            A Vision Expo West em Las Vegas tende a ter uma presença mais forte de fabricantes internacionais — 
            mais fábricas chinesas, coreanas e japonesas do que a edição de Nova York. A feira de Vegas também 
            tem a vantagem de acontecer logo antes da SILMO Paris, então muitos fabricantes asiáticos fazem a 
            dobradinha: Vision Expo West em setembro e depois voam para Paris para a SILMO na semana seguinte.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">SILMO Paris — 25 a 28 de Setembro de 2026</h3>
          <p>
            A SILMO é a feira de design e tendências. 1.000 expositores, metade deles franceses ou italianos, 
            e a energia é claramente premium. Se a MIDO é onde você negocia preço unitário, a SILMO é onde 
            você identifica quais cores, formas e materiais vão dominar o mercado em 2027.
          </p>
          <p>
            Eu visito a SILMO todo ano como comprador, não como expositor. Percorro o salão com um caderno 
            e fotografo cada tendência que vejo — no ano passado eram acetatos caramel translúcidos e 
            silhuetas oversized dos anos 70. Este ano estou apostando em titânio slim com lentes degradê. 
            Se você está construindo uma marca, a SILMO vai te poupar seis meses de pesquisa de tendências 
            em dois dias.
          </p>
          <p>
            Uma ressalva: a SILMO é cara para os fabricantes exporem, o que significa que a presença de 
            fábricas chinesas é menor do que na MIDO ou Hong Kong. Você encontrará mais estúdios de design 
            e especialistas em OEM de alto padrão do que fabricantes de volume. Ótimo para inspiração. 
            Menos ótimo para negociar seu primeiro pedido de 500 peças.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">IOFT Tóquio — Outubro de 2026 (Datas a Confirmar)</h3>
          <p>
            A International Optical Fair Tokyo é menor — mais de 260 expositores — mas tem um peso acima 
            da sua categoria em qualidade. Se você precisa de armações japonesas de titânio, acetato de 
            precisão ou dobradiças usinadas com tolerâncias que fazem a maioria das fábricas suar, a IOFT 
            é a sua feira.
          </p>
          <p>
            Os fabricantes japoneses são notoriamente seletivos. Eles não buscam volume como as fábricas 
            chinesas. Os MOQs na IOFT tendem a ser de 300–500 peças, e o preço começa mais alto — pense 
            em US$15–US$30 FOB para armações de acetato contra US$5–US$12 da China. Mas o artesanato é 
            inegável. Já enviei compradores para a IOFT quando precisavam de algo que não conseguíamos 
            igualar em precisão, e digo isso como dono de fábrica.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Feira Óptica de Hong Kong — 4 a 6 de Novembro de 2026</h3>
          <p>
            Se você quer conhecer fabricantes chineses sem a complexidade de viajar para a China continental, 
            Hong Kong é a resposta. Mais de 700 expositores, a grande maioria com fábricas em Shenzhen, 
            Dongguan, Wenzhou e Xiamen — os quatro principais polos de fabricação de óculos.
          </p>
          <p>
            Hong Kong tem duas grandes vantagens sobre outras feiras. Primeiro: <strong>não exige visto</strong> para 
            a maioria das nacionalidades, o que elimina um enorme ponto de atrito. Segundo: os expositores 
            têm experiência em exportação. Qualquer fábrica chinesa com estande em Hong Kong está no mercado 
            internacional há anos — eles entendem seus requisitos de certificação, seus padrões de embalagem, 
            suas expectativas de envio. Você não está treinando eles; eles estão prontos.
          </p>
          <p>
            A feira de Hong Kong também acontece simultaneamente com uma zona dedicada a marcas, então você 
            pode ver o que as marcas acabadas estão vendendo para os varejistas enquanto também conhece as 
            fábricas por trás delas. Essa perspectiva dupla já vale a viagem.
          </p>

          {/* ─── Section 3: Preparação ─── */}
          <h2 id="preparar" className="text-3xl font-bold mt-16 mb-6">O Que Preparar Antes de Ir</h2>
          <p>
            Já vi compradores demais aparecerem apenas com o celular e boas intenções. Isso é um desperdício 
            de uma viagem de US$3.000. Aqui está o que os compradores sérios trazem:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>3–5 amostras físicas de referência.</strong> Traga óculos de sol de concorrentes ou 
            marcas que você admira. Quando você me entrega uma amostra e diz &quot;quero essa qualidade, 
            nessa faixa de preço, com essa sensação de dobradiça&quot;, eu posso te dizer em 30 segundos 
            se conseguimos fazer. Sem uma referência, estamos ambos tentando adivinhar.</li>
            <li><strong>Mais de 100 cartões de visita.</strong> Não 20. Não 50. Você vai distribuir mais 
            cartões do que espera, e ficar sem faz você parecer despreparado. Cartões profissionais, não 
            aqueles grátis com bordas perfuradas.</li>
            <li><strong>Uma ficha técnica de uma página.</strong> Faixa de preço de varejo alvo, materiais 
            preferidos (acetato, TR90, metal, titânio), requisitos de lente (polarizada, UV400, degradê, 
            fotocrômica), necessidades de certificação (FDA, CE, AS/NZS) e quantidade estimada do primeiro 
            pedido. Imprima 20 cópias. Entregue a cada fornecedor sério que você encontrar.</li>
            <li><strong>Mapa do salão com alvos pré-marcados.</strong> Baixe a lista de expositores e a 
            planta do salão pelo menos duas semanas antes da feira. Destaque cada fabricante da sua categoria. 
            Planeje sua rota para não ficar ziguezagueando entre os pavilhões. Dia um: visite todos os seus 
            alvos rapidamente (5–10 minutos cada). Dia dois: volte aos seus 3–5 favoritos para conversas 
            mais aprofundadas.</li>
            <li><strong>Um carregador portátil e um caderno físico.</strong> Seu celular vai descarregar 
            até as 14h. Anotar no papel também é mais rápido do que digitar — anote o número do estande, 
            nome do contato, duas coisas específicas que discutiram e uma nota de 1–10. Você vai esquecer 
            qual estande era qual na hora do jantar. Todo mundo esquece.</li>
          </ul>

          {/* ─── Section 4: Avaliando Fornecedores ─── */}
          <h2 id="avaliar" className="text-3xl font-bold mt-16 mb-6">Como Avaliar Fornecedores em uma Feira</h2>
          <p>
            Você está em um estande. As amostras parecem boas. O vendedor é simpático. E agora? Aqui está 
            o que eu verificaria se estivesse do seu lado da mesa:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">As Cinco Perguntas que Separam Fábricas de Falsificações</h3>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>&quot;Onde fica sua fábrica? Quantas linhas de produção vocês operam?&quot;</strong> — 
            Uma fábrica real responde isso instantaneamente. Uma trading hesita, dá uma resposta vaga ou diz 
            &quot;trabalhamos com várias fábricas parceiras&quot;. Esse é o seu sinal para seguir em frente.</li>
            <li><strong>&quot;Posso ver a parte interna da ponta da haste?&quot;</strong> — Pegue uma amostra, 
            observe atentamente o acabamento. As linhas de molde estão visíveis? O parafuso da dobradiça está 
            nivelado? O acetato parece sólido ou oco? Você não precisa ser engenheiro. Só precisa se importar 
            o suficiente para olhar. O expositor que te observa fazer isso sem recuar tem confiança no produto.</li>
            <li><strong>&quot;Qual é o prazo típico para um pedido OEM de 500 peças?&quot;</strong> — A resposta 
            certa é 30–45 dias. Se disserem 15 dias, ou estão fazendo ODM de estoque ou estão mentindo sobre 
            ser uma fábrica. Se disserem 90 dias, a produção deles está sobrecarregada e você será 
            despriorizado como comprador pequeno.</li>
            <li><strong>&quot;Quais certificações suas armações possuem? Posso ver a documentação?&quot;</strong> — 
            CE, FDA, UV400 e ISO 9001 são o básico. Uma fábrica séria tem a documentação no estande ou pode 
            enviar por e-mail em até uma hora. Se hesitarem na resposta, ou não têm certificação ou estão 
            usando certificados de terceiros — ambos são inaceitáveis.</li>
            <li><strong>&quot;Como vocês fazem o controle de qualidade em pedidos de exportação?&quot;</strong> — 
            Escute por detalhes específicos: &quot;Fazemos AQL 2.5 em cada pedido, enviamos fotos antes do 
            embarque e oferecemos inspeção de terceiros.&quot; Um vago &quot;garantimos qualidade&quot; não 
            significa nada. Uma fábrica que consegue descrever seu processo de QC em detalhes tem um. Uma 
            que não consegue, não tem.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Sinais de Alerta que Aprendi a Identificar</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Sem gaveta de amostras.</strong> Um estande apenas com vitrines e sem amostras de 
            reserva indica que estão mostrando protótipos, não peças de produção. Peça para ver &quot;como 
            fica a 500ª unidade, não a primeira.&quot;</li>
            <li><strong>Precificação rápida demais.</strong> Se você pergunta sobre uma armação e eles 
            cotam o preço em 10 segundos sem perguntar sobre quantidade, materiais ou personalização — 
            estão vendendo de estoque. Não é necessariamente ruim, mas você não está falando com um fabricante.</li>
            <li><strong>Sem endereço de fábrica no cartão de visita.</strong> Se o endereço é uma torre de 
            escritórios em um distrito comercial e não uma zona industrial, é um sinal de alerta. Fábricas 
            de Dongguan ficam em Dongguan, não em um escritório no Hong Kong Central.</li>
          </ul>

          {/* ─── Section 5: Estratégia de Visita ao Estande ─── */}
          <h2 id="estrategia-estande" className="text-3xl font-bold mt-16 mb-6">A Estratégia de Visita que a Maioria dos Compradores Erra</h2>
          <p>
            A maioria dos compradores faz isso: se aproxima do estande, pega uma armação, pergunta &quot;quanto 
            custa?&quot;, pega um catálogo e vai embora. Isso não é fornecimento. É vitrine com passos extras.
          </p>
          <p>
            Aqui está a estratégia que realmente funciona, aprendida observando os compradores mais bem-sucedidos 
            que visitam nosso estande:
          </p>
          <p>
            <strong>Dia um: reconhecimento.</strong> Percorra todo o salão. Passe 5–7 minutos por estande-alvo — 
            tempo suficiente para avaliar a qualidade das amostras, fazer as cinco perguntas acima e obter uma 
            faixa de preço aproximada. Não negocie. Não se comprometa. Tire fotos das amostras que você gostar 
            (peça permissão antes — alguns expositores são sensíveis a cópia de design), anote sua nota de 
            1–10 e siga em frente. Até o final do dia um, você deve ter visitado 15–25 estandes e reduzido 
            para 5 candidatos sérios.
          </p>
          <p>
            <strong>Dia dois: mergulho profundo.</strong> Volte aos seus 5 favoritos. Desta vez, sente-se. 
            Peça água. Abra o catálogo deles além das peças em exibição — peça para ver&nbsp;
            <Link href="/pt/produtos/" className="text-primary-600 hover:underline">a linha completa</Link>, 
            não apenas o que está na parede. Discuta sua ficha técnica em detalhes. Pergunte sobre&nbsp;
            <Link href="/pt/blog/guia-moq-oculos-sol" className="text-primary-600 hover:underline">flexibilidade de MOQ</Link> para 
            um primeiro pedido. O objetivo no dia dois é fazer a conversa ir fundo o suficiente para que 
            você possa fazer uma comparação real entre fornecedores — preço, capacidade, qualidade de 
            comunicação e intuição.
          </p>
          <p>
            <strong>Dia três: o fechamento tranquilo.</strong> A maioria dos compradores já voltou para casa 
            no terceiro dia, especialmente na MIDO onde segunda é o dia mais calmo. Essa é a sua vantagem. 
            Volte aos seus 2–3 principais fornecedores. A equipe do estande está menos estressada, mais 
            disposta a conversar e mais aberta a negociar. Já dei preços melhores e compartilhei informações 
            mais francas nas tardes de segunda do que durante o tumulto de sábado — porque os compradores 
            que ficam até o final são os sérios.
          </p>
          <p>
            <strong>O erro crítico:</strong> se dispersar por muitos estandes. Se você visitar 80 estandes 
            em três dias, não teve uma conversa real com nenhum deles. Você coletou 80 catálogos e zero 
            relacionamentos. Mire em 15–25 estandes no total, com conversas de acompanhamento significativas 
            em 5–7 deles.
          </p>

          {/* ─── Section 6: Follow-Up ─── */}
          <h2 id="follow-up" className="text-3xl font-bold mt-16 mb-6">Follow-Up Pós-Feira que Realmente Funciona</h2>
          <p>
            Após cada grande feira, recebo cerca de 250 e-mails na primeira semana. Talvez 10 deles gerem 
            negócios reais. Os outros 240 são alguma variação de &quot;Prazer em conhecê-lo, por favor 
            envie catálogo e melhor preço.&quot;
          </p>
          <p>
            Aqui está como são os 10 que funcionam:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Envie em até 48 horas.</strong> Não duas semanas depois. Não consigo lembrar qual 
            das 200 pessoas que vi naquele dia era você, a menos que você me lembre enquanto a memória 
            está fresca. O segundo dia após a feira é a janela ideal.</li>
            <li><strong>Mencione algo específico.</strong> &quot;Conversamos sobre seus modelos de acetato 
            com dobradiças de mola — você mencionou sua relação com o fornecedor Mazzucchelli&quot; — isso 
            me diz que você estava prestando atenção e que não é um disparo genérico para 50 fábricas.</li>
            <li><strong>Inclua sua ficha técnica e fotos de referência.</strong> As mesmas que você me 
            entregou no estande. Provavelmente tenho em algum lugar na minha pilha, mas anexar ao seu 
            e-mail me poupa a busca e aumenta a chance de eu responder no mesmo dia.</li>
            <li><strong>Informe suas quantidades e cronograma.</strong> &quot;Pretendo fazer um pedido 
            teste de 300 peças em outubro para três SKUs&quot; tem 10x mais chance de obter uma resposta 
            séria do que &quot;qual o seu melhor preço?&quot; O primeiro e-mail parece um cliente. O 
            segundo parece enrolação.</li>
            <li><strong>Peça um próximo passo específico.</strong> &quot;Você pode me enviar uma cotação 
            formal com preços FOB para os SKUs A, B e C até sexta-feira?&quot; Isso me dá uma ação clara 
            com prazo. Posso dizer sim ou não. De qualquer forma, a conversa avança.</li>
          </ol>
          <p>
            Mais uma coisa: se um fornecedor não responder em 3–4 dias úteis, faça um follow-up uma vez. 
            Se ainda não responder, risque-o da sua lista. Uma fábrica que não consegue responder a uma 
            consulta pós-feira de um comprador qualificado em uma semana está te dizendo tudo sobre como 
            lidará com sua comunicação de produção depois.
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
            <h2 className="text-3xl font-bold mb-4">Pule o Salão da Feira — Comece Direto</h2>
            <p className="text-xl mb-6 opacity-90">
              Se você não puder ir à MIDO ou Hong Kong este ano, vamos conversar. Fabricamos óculos de sol 
              desde 2006 — amostras em 3–7 dias, OEM a partir de 300 peças e cada par com certificação UV400.
            </p>
            <Link
              href="/pt/contato"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento Grátis
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200 not-prose">
            <h2 className="text-2xl font-bold mb-6">Mais do Chão de Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/produtos/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Ver Catálogo Completo</h3>
                <p className="text-gray-600 text-sm">Navegue por mais de 500 designs ODM e OEM de óculos de sol — acetato, metal, TR90 e mais.</p>
              </Link>
              <Link href="/pt/blog/encontrar-fabricante-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Encontrar um Fabricante Confiável</h3>
                <p className="text-gray-600 text-sm">10 critérios de avaliação, golpes do Alibaba para evitar e dicas reais de negociação do lado da fábrica.</p>
              </Link>
              <Link href="/pt/contato" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale Conosco</h3>
                <p className="text-gray-600 text-sm">Receba um orçamento personalizado para seu pedido de óculos de sol. Amostras em 3–7 dias.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
    </>
  )
}
