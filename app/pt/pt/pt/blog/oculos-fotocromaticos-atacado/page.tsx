import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Guia de Óculos Fotocromáticos no Atacado: Preços de Lentes Transition, Pedido Mínimo e Fornecimento de Fábrica',
  description: 'Guia direto de fábrica para óculos fotocromáticos no atacado: níveis de qualidade de lentes, preços por volume, pedido mínimo (MOQ), testes de velocidade de clareamento e como evitar lentes fotocromáticas baratas que destroem a reputação da sua marca.',
  keywords: ['óculos fotocromáticos atacado', 'lentes transition por atacado', 'fabricante óculos fotocromáticos', 'óculos adaptativos à luz atacado', 'preço lentes fotocromáticas', 'fábrica óculos transition', 'óculos fotocromáticos por atacado', 'MOQ óculos fotocromáticos', 'níveis qualidade lentes fotocromáticas', 'óculos transition atacado'],
  alternates: {
    canonical: '/pt/blog/oculos-fotocromaticos-atacado',
    languages: {
      'en': '/blog/photochromic-sunglasses-wholesale-guide',
      'pt': '/pt/blog/oculos-fotocromaticos-atacado',
    },
  },
};

const takeaways = [
  'Nem todas as lentes fotocromáticas são iguais — existe um abismo de qualidade entre as lentes fotocromáticas de US$ 1,50/par dos catálogos genéricos de atacado e as lentes de US$ 8–12/par que realmente escurecem rápido, clareiam ao voltar para ambientes internos e duram mais de 2 anos sem degradação',
  'A qualidade das lentes fotocromáticas se resume a três fatores: velocidade de ativação (quão rápido escurecem no sol), velocidade de clareamento (quão rápido voltam a ficar transparentes em ambientes internos) e vida útil de ciclos (quantos ciclos de escurecimento/clareamento antes do corante fotocromático se degradar) — lentes baratas falham nos três e seus clientes vão perceber em semanas',
  'As fábricas chinesas oferecem lentes fotocromáticas em três níveis: nível básico (corante fotocromático apenas na superfície da lente, ~US$ 1,50–3/par), nível intermediário (fotocromático em massa, ~US$ 3–6/par) e nível premium (em massa com corante estabilizado contra UV, ~US$ 6–12/par no atacado) — o nível intermediário é o ponto ideal para a maioria dos compradores de atacado',
  'O pedido mínimo (MOQ) para óculos fotocromáticos personalizados começa em 500–1.000 unidades por modelo, mas você pode testar o mercado com 300 unidades de armações OEM de catálogo com lentes fotocromáticas — um pedido piloto de US$ 900–1.500 que permite validar a demanda antes de investir em moldes personalizados',
  'A maior reclamação dos consumidores finais sobre óculos fotocromáticos é que eles "não funcionam dentro do carro" — a maioria das lentes fotocromáticas é ativada por UV e os para-brisas dos carros bloqueiam UV, então elas permanecem claras dentro dos veículos; se seus clientes de atacado vendem para motoristas, você precisa especificar lentes fotocromáticas "para uso em carro" ou ser transparente sobre essa limitação',
  'O mercado global de lentes fotocromáticas deve atingir US$ 8,9 bilhões até 2030 (CAGR de 8,2%), impulsionado pelo envelhecimento da população que precisa de lentes fotocromáticas com grau e por entusiastas de atividades ao ar livre que querem um único par que funcione em todas as condições de luz — atacadistas que adicionarem uma linha fotocromática agora estão se posicionando para uma categoria que cresce mais rápido que os óculos de sol convencionais',
];

const quickStats = [
  { label: 'Mercado Global de Fotocromáticos (2030)', value: 'US$ 8,9 Bi' },
  { label: 'CAGR do Mercado (2024–2030)', value: '8,2%' },
  { label: 'Lente Fotocromática Básica', value: 'US$ 1,50–3,00/par' },
  { label: 'Lente Fotocromática Intermediária', value: 'US$ 3,00–6,00/par' },
  { label: 'Lente Fotocromática Premium', value: 'US$ 6,00–12,00/par' },
  { label: 'MOQ Armação Personalizada (Fotocromático)', value: '500–1.000 unid.' },
  { label: 'Tempo de Ativação (Lente de Qualidade)', value: '15–30 segundos' },
  { label: 'Tempo de Clareamento (Ambiente Interno)', value: '2–5 minutos' },
];

const faqs = [
  {
    question: 'Qual é a diferença entre lentes fotocromáticas e lentes polarizadas?',
    answer: 'Lentes fotocromáticas mudam de tonalidade com base na exposição à luz UV — elas escurecem ao ar livre e clareiam em ambientes internos. Lentes polarizadas têm uma tonalidade fixa com um filme químico que bloqueia o brilho horizontal. Elas servem para propósitos completamente diferentes. Fotocromáticas são sobre conveniência (um par para ambientes internos e externos), polarizadas são sobre redução de reflexos (especialmente em água, neve e estradas). Você pode obter lentes fotocromáticas polarizadas, mas elas custam mais (US$ 8–18/par no atacado) porque você está combinando duas tecnologias em uma única lente. A maioria dos compradores de atacado começa com fotocromáticas padrão e adiciona fotocromáticas polarizadas como um SKU premium mais tarde.',
  },
  {
    question: 'Quanto tempo duram as lentes fotocromáticas antes de pararem de funcionar?',
    answer: 'Lentes fotocromáticas de qualidade (corante em massa, estabilizado contra UV) normalmente duram de 2 a 3 anos de uso diário antes que o efeito de escurecimento enfraqueça de forma perceptível. A degradação é gradual — as lentes não ficam tão escuras como antes e o tempo de clareamento aumenta. Lentes fotocromáticas básicas com revestimento superficial podem começar a se degradar em 6 a 12 meses, especialmente se o usuário fica ao ar livre por mais de 4 horas diárias. Essa é a razão número 1 para evitar as lentes fotocromáticas mais baratas para qualquer marca que se preocupa com clientes recorrentes. As moléculas do corante fotocromático literalmente se desgastam com a exposição repetida ao UV — cada ciclo de escurecimento/clareamento causa uma pequena fadiga molecular. No nível da fábrica, testamos a vida útil de ciclos usando uma lâmpada UV e um cronômetro: uma boa lente deve manter mais de 80% da sua capacidade de escurecimento após 3.000 ciclos.',
  },
  {
    question: 'Por que os óculos fotocromáticos custam mais que os óculos de sol comuns?',
    answer: 'A diferença de custo vem do próprio corante fotocromático e da complexidade de fabricação. Lentes de óculos de sol comuns usam um corante fixo que é misturado ao monômero da lente antes da injeção ou fundição — simples, barato, bem estabelecido. Lentes fotocromáticas exigem incorporar moléculas fotocromáticas em todo o material da lente (método em massa) ou aplicar um revestimento fotocromático na superfície da lente. O método em massa usa corantes fotocromáticos proprietários que custam de 5 a 10 vezes mais que os corantes comuns, e o processo de fabricação requer controle de temperatura mais rigoroso porque o calor degrada o composto fotocromático. No atacado, uma lente polarizada TAC padrão pode custar US$ 1,20/par em volume; uma lente fotocromática intermediária custa US$ 3,50–5,00/par. O valor adicional é real — não é apenas margem de marketing.',
  },
  {
    question: 'Posso comprar óculos fotocromáticos com grau no atacado?',
    answer: 'Sim, mas o fotocromático com grau tem uma cadeia de suprimentos diferente do fotocromático sem grau (plano). Óculos fotocromáticos planos são produzidos em massa no nível da fábrica usando lentes moldadas por injeção ou fundição. Lentes fotocromáticas com grau são tipicamente feitas por laboratórios ópticos que usinam a prescrição em um blank de lente fotocromática. Algumas fábricas chinesas com laboratórios ópticos internos podem produzir óculos fotocromáticos com grau em volume (mais de 500 unidades), mas o preço é mais alto — espere US$ 12–25/par para fotocromático com grau de visão simples e US$ 25–50/par para fotocromático com grau progressivo, dependendo da complexidade da prescrição e integração com a armação. Para compradores de atacado que estão entrando no mercado de fotocromático com grau, a abordagem mais simples é oferecer armações fotocromáticas com lentes demo e fazer parceria com um laboratório óptico local para o fornecimento da prescrição — isso evita o pesadelo de estoque de manter todas as combinações de prescrição possíveis.',
  },
  {
    question: 'O que devo verificar ao comprar óculos fotocromáticos de uma fábrica chinesa?',
    answer: 'Três coisas para testar antes de fazer um pedido em volume: (1) Velocidade de ativação e clareamento — leve um par de amostra para a luz solar direta e cronometre quanto tempo leva para escurecer completamente (deve ser menos de 30 segundos para lentes de qualidade) e quanto tempo para clarear em ambiente interno (menos de 5 minutos). (2) Sensibilidade à temperatura — lentes fotocromáticas escurecem mais no frio e menos no calor; uma boa lente ainda deve atingir mais de 70% de tonalidade a 35°C. Lentes baratas mal escurecem em dias quentes. (3) Vida útil de ciclos — peça à fábrica o nome do fornecedor do corante fotocromático e o relatório de teste de ciclos. Fábricas sérias usam corantes de empresas como Transitions Optical (agora parte da EssilorLuxottica), Hoya ou Corning — ou seus equivalentes chineses como Conant Optical ou Mingyue Optical. Se a fábrica não souber informar o nome do fornecedor do corante, caia fora. Além disso, sempre especifique que as lentes devem atender aos padrões ANSI Z80.3 ou EN ISO 12312-1 para proteção UV — fotocromático não significa automaticamente UV400, e você precisa de ambos.',
  },
  {
    question: 'Quais são as cores de lentes fotocromáticas mais populares para atacado?',
    answer: 'Fotocromático cinza é o mais vendido em todos os mercados — proporciona a percepção de cores mais natural e combina bem com qualquer cor de armação. Fotocromático marrom/âmbar é o segundo mais popular, especialmente em mercados com clima variável (Reino Unido, Norte da Europa, Noroeste do Pacífico dos EUA) porque aumenta o contraste em dias nublados. Fotocromático verde (frequentemente comercializado como G-15 fotocromático) tem um nicho de seguidores entre entusiastas de atividades ao ar livre e compradores militares/policiais. Fotocromático azul está crescendo no segmento de moda, particularmente nos mercados coreano e japonês. Para um primeiro pedido de fotocromático no atacado, recomendo 60% cinza, 30% marrom, 10% verde/outros — essa divisão cobre 95% da preferência dos clientes na maioria dos mercados. Evite estocar cores exóticas (fotocromático rosa, roxo, amarelo) a menos que você tenha um comprador específico solicitando — elas parecem interessantes na ficha técnica, mas ficam paradas no estoque.',
  },
];

const PUBLISH_DATE = '2026-08-04';
const SLUG = 'oculos-fotocromaticos-atacado';

export default function OculosFotocromaticosAtacado() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/pt/' },
          { name: 'Blog', href: '/pt/blog/' },
          { name: 'Guia de Óculos Fotocromáticos no Atacado' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Guia de Óculos Fotocromáticos no Atacado: Preços de Lentes Transition, Pedido Mínimo e Fornecimento de Fábrica",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guia direto de fábrica para óculos fotocromáticos no atacado: níveis de qualidade de lentes, preços por volume, pedido mínimo, testes de velocidade de clareamento e como evitar lentes fotocromáticas baratas que prejudicam sua marca.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Guia de Produto</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>14 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guia de Óculos Fotocromáticos no Atacado: Preços de Lentes Transition, Pedido Mínimo e Fornecimento de Fábrica
          </h1>
          <p className="text-xl text-gray-600">
            A maioria dos compradores de atacado sabe que lentes fotocromáticas existem. O que eles não sabem é que a diferença de qualidade entre uma lente fotocromática de US$ 1,50 e uma de US$ 8 é a diferença entre um cliente que compra uma vez e um cliente que conta para todo mundo que conhece para não confiar na sua marca. Este guia cobre o que eu aprendi exportando óculos fotocromáticos para compradores em mais de 40 países.
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
            <li><a href="#como-funcionam" className="text-primary-600 hover:underline">Como as Lentes Fotocromáticas Realmente Funcionam</a></li>
            <li><a href="#niveis-qualidade" className="text-primary-600 hover:underline">Os Três Níveis de Qualidade: Pelo Que Você Realmente Está Pagando</a></li>
            <li><a href="#precos-moq" className="text-primary-600 hover:underline">Preços no Atacado e Pedido Mínimo: Como é um Pedido Real de Fábrica</a></li>
            <li><a href="#demanda-mercado" className="text-primary-600 hover:underline">Quem Está Comprando Fotocromático no Atacado Agora</a></li>
            <li><a href="#controle-qualidade" className="text-primary-600 hover:underline">Controle de Qualidade: Como Testar Lentes Fotocromáticas Antes de Comprar</a></li>
            <li><a href="#problemas-comuns" className="text-primary-600 hover:underline">Os 4 Problemas Que Ninguém Te Conta</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        {/* ═══════ CORPO DO ARTIGO ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Principais Conclusões */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Dados Rápidos */}
          <QuickStats stats={quickStats} title="Dados Rápidos" />

          {/* ─── Seção 1: Como Funcionam ─── */}
          <h2 id="como-funcionam" className="text-3xl font-bold mt-16 mb-6">Como as Lentes Fotocromáticas Realmente Funcionam</h2>
          
          <p>Eu recebo uma versão desta pergunta de quase todo novo comprador de atacado: "As lentes fotocromáticas são um revestimento ou estão dentro da lente?" Pergunta justa — a resposta determina pelo que você está pagando.</p>
          
          <p>As moléculas fotocromáticas — geralmente haleto de prata ou compostos orgânicos de naftopirano — são incorporadas no material da lente. Quando a luz UV atinge essas moléculas, elas passam por uma reação química que altera sua estrutura molecular, fazendo com que absorvam mais luz visível. É isso que faz a lente parecer mais escura. Quando a fonte de UV desaparece (você entra em um ambiente interno), as moléculas revertem à sua estrutura original e a lente clareia.</p>
          
          <p>Existem duas maneiras de as fábricas colocarem essas moléculas em uma lente:</p>
          
          <p><strong>Fotocromático em massa:</strong> O corante fotocromático é misturado ao monômero líquido da lente antes da fundição ou injeção. O corante fica distribuído por toda a espessura da lente. Foi isso que a Transitions Optical foi pioneira nos anos 1990, e é o que toda lente fotocromática de qualidade usa hoje. A desvantagem: custa mais porque você está usando corante fotocromático em toda a lente, não apenas na superfície.</p>
          
          <p><strong>Fotocromático com revestimento superficial:</strong> O corante fotocromático é aplicado como um revestimento na superfície frontal de uma lente comum. É mais barato — o corante vai apenas na superfície — mas se desgasta. Cada arranhão, cada limpeza com um pano áspero, cada gota de protetor solar que cai na lente degrada um pouco o revestimento. Após 6 a 12 meses de uso regular, você tem um par de óculos que mal escurece.</p>
          
          <p>Quando um fornecedor te cotar US$ 1,50/par para lentes fotocromáticas, você está recebendo revestimento superficial. Ponto final. Ninguém consegue produzir fotocromático em massa de forma lucrativa a esse preço. Só a matéria-prima do corante custa mais que isso.</p>

          {/* ─── Seção 2: Níveis de Qualidade ─── */}
          <h2 id="niveis-qualidade" className="text-3xl font-bold mt-16 mb-6">Os Três Níveis de Qualidade: Pelo Que Você Realmente Está Pagando</h2>
          
          <p>Eu já estive no chão de fábrica quando um comprador argumentou que "fotocromático é tudo igual" e que todas as lentes são a mesma coisa. Não são. Aqui está o que o mercado realmente oferece, do mais básico ao premium.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Nível 1: Básico (Revestimento Superficial) — US$ 1,50–3,00/par</h3>
          
          <p>Estes são os óculos fotocromáticos que você vê no Alibaba por US$ 0,80–1,20 FOB. A lente é uma lente TAC ou policarbonato padrão com uma fina camada de revestimento fotocromático aplicada na superfície. Elas escurecem lentamente — 60 a 90 segundos para atingir a tonalidade total — e clareiam ainda mais devagar, às vezes de 8 a 10 minutos. Após 6 meses de uso diário, elas mal escurecem. A faixa de ativação é estreita: funcionam razoavelmente entre 15–25°C, mas mal ativam acima de 30°C.</p>
          
          <p>A pior parte: essas lentes frequentemente não atendem aos padrões UV400 de forma consistente. O revestimento fotocromático pode ter microfuros ou aplicação irregular que deixa a radiação UV passar. Se você está vendendo para mercados com leis fortes de proteção ao consumidor (UE, Austrália, EUA), essas lentes são um risco jurídico. Já vi carregamentos serem rejeitados na alfândega europeia porque o teste de laboratório mostrou bloqueio UV inconsistente em toda a superfície da lente.</p>
          
          <p><strong>Quem compra:</strong> Vendedores ambulantes, lojas de R$ 1,99, brindes promocionais, mercados onde ninguém processa por causa de óculos de sol. Não é para quem está construindo uma marca.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Nível 2: Intermediário (Em Massa, Corante Padrão) — US$ 3,00–6,00/par</h3>
          
          <p>Aqui é onde as coisas ficam interessantes. As lentes fotocromáticas intermediárias usam corante em massa — o composto fotocromático é misturado ao material da lente antes da moldagem. O tempo de ativação cai para 20 a 40 segundos, o clareamento leva de 3 a 5 minutos e as lentes mantêm um desempenho decente por 18 a 24 meses. A proteção UV400 é consistente em toda a superfície da lente porque os agentes bloqueadores de UV também estão em massa.</p>
          
          <p>O corante usado neste nível é tipicamente um composto genérico de naftopirano fornecido por empresas químicas chinesas como a Conant Optical. Não é nível Transitions, mas é funcional. A principal limitação é a sensibilidade à temperatura — essas lentes escurecem menos em um dia de verão a 35°C, o que é um problema real se seus clientes estão em climas quentes.</p>
          
          <p><strong>Quem compra:</strong> Marcas de mercado médio, vendedores da Amazon, óticas boutiques, empresas de produtos promocionais que se preocupam com a recorrência de clientes. É aqui que 70% dos nossos pedidos de fotocromático se encaixam. A proposta de valor funciona para a maioria dos compradores de atacado: as lentes realmente funcionam, os clientes ficam satisfeitos e o preço deixa espaço para margens de varejo saudáveis.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Nível 3: Premium (Em Massa, Corante Estabilizado contra UV) — US$ 6,00–12,00/par</h3>
          
          <p>Estas usam corantes fotocromáticos premium — licenciados da Transitions Optical, Hoya ou equivalentes chineses de alta qualidade que igualam seu desempenho. A ativação leva de 10 a 20 segundos, o clareamento é feito em menos de 2 minutos e a estabilidade térmica é muito melhor: essas lentes ainda atingem 75–85% de tonalidade mesmo a 35°C. A vida útil de ciclos ultrapassa 3.000 ciclos de escurecimento/clareamento com degradação mínima.</p>
          
          <p>O custo adicional vem de três fatores: o corante premium (3–4× o custo do intermediário), um composto estabilizador UV adicionado ao monômero da lente que protege as moléculas fotocromáticas da fadiga e um controle de qualidade mais rigoroso (cada lote é testado quanto à velocidade de ativação, velocidade de clareamento e bloqueio UV antes da liberação).</p>
          
          <p><strong>Quem compra:</strong> Marcas premium, redes de óticas, qualquer um que venda óculos de sol acima de R$ 250 no varejo. Se o posicionamento da sua marca é "qualidade", este é o seu nível. A diferença na experiência do cliente entre uma lente Nível 2 e Nível 3 é perceptível — e seus clientes vão perceber.</p>
          
          <p>Uma observação prática: algumas fábricas comercializam lentes Nível 2 como "qualidade Transitions" ou "comparável à Transitions". Não são. Se a fábrica não puder fornecer o nome do fornecedor do corante e um relatório de teste do lote, assuma que você está recebendo no máximo Nível 2.</p>

          {/* ─── Seção 3: Preços e MOQ ─── */}
          <h2 id="precos-moq" className="text-3xl font-bold mt-16 mb-6">Preços no Atacado e Pedido Mínimo: Como é um Pedido Real de Fábrica</h2>
          
          <p>Deixe-me te dar números reais, não preços de catálogo. Estas são cotações FOB Xiamen que eu enviaria para um comprador de atacado hoje, considerando armações padrão de acetato ou TR90 com lentes fotocromáticas.</p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Quantidade</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nível 1 (Superfície)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nível 2 (Em Massa)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nível 3 (Premium)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">300–500 unidades</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 2,80–3,50</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 5,00–7,00</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 10,00–14,00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">1.000–3.000 unidades</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 2,00–2,80</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 3,80–5,00</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 7,50–10,00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">3.000–10.000 unidades</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 1,50–2,00</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 3,00–3,80</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 6,00–7,50</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">10.000+ unidades</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 1,20–1,50</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 2,50–3,00</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 5,00–6,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Esses preços incluem a armação, lentes fotocromáticas, embalagem básica (saquinho plástico + flanelinha) e controle de qualidade padrão. Embalagem personalizada, impressão de logo, tags e estojos premium adicionam US$ 0,30–1,50/unidade dependendo da complexidade.</p>
          
          <p><strong>Realidade do pedido mínimo (MOQ):</strong> A maioria das fábricas em Xiamen e Wenzhou vai cotar 1.000–2.000 unidades de MOQ para óculos fotocromáticos. Mas aqui está o que realmente acontece no chão de fábrica: se você está comprando armações OEM de catálogo (moldes existentes) e apenas trocando as lentes para fotocromáticas, muitas fábricas aceitam 300–500 unidades para um pedido piloto — especialmente se você está pedindo 3 ou mais modelos. O preço por unidade sobe em quantidades baixas, mas um pedido piloto de US$ 1.500 é muito mais inteligente do que comprometer US$ 10.000 em um produto que você não testou no seu mercado.</p>
          
          <p><strong>Moldes para armações personalizadas:</strong> Se você quer seu próprio design de armação com lentes fotocromáticas, as taxas de molde ficam entre US$ 300–800 por molde, e você vai precisar de 2 a 4 moldes por modelo (tamanhos ou cores diferentes). O MOQ sobe para 1.000–2.000 unidades por modelo porque a fábrica precisa amortizar o custo do molde. Pedido total para uma primeira linha fotocromática personalizada com 3 modelos × 1.000 unidades cada: aproximadamente US$ 12.000–18.000 com preço Nível 2, mais US$ 2.000–3.000 em taxas de molde.</p>
          
          <p><strong>Prazo de entrega:</strong> 25–35 dias para OEM de catálogo com lentes fotocromáticas. 45–60 dias para armações personalizadas com fotocromático. Adicione 2 semanas se for fazer embalagem personalizada com caixas de marca. A produção da lente fotocromática em si não adiciona um prazo significativo — o gargalo quase sempre é a produção da armação, não a lente.</p>

          {/* ─── Seção 4: Demanda de Mercado ─── */}
          <h2 id="demanda-mercado" className="text-3xl font-bold mt-16 mb-6">Quem Está Comprando Fotocromático no Atacado Agora</h2>
          
          <p>Eu acompanho nossos dados de pedidos fotocromáticos trimestralmente. Aqui está como a demanda se parece em meados de 2026.</p>
          
          <p><strong>Óticas e optometristas</strong> são o segmento que mais cresce. Eles estão adicionando óculos fotocromáticos sem grau (plano) como venda complementar para clientes de óculos com prescrição. O argumento é simples: "Você já tem óculos de grau. Aqui está um par de óculos fotocromáticos para quando você estiver ao ar livre." Pedido médio: 200–500 unidades, majoritariamente Nível 2, lentes cinza.</p>
          
          <p><strong>Varejistas de artigos esportivos e outdoor</strong> são o segundo maior segmento — lojas de trilha, pesca, ciclismo e golfe. Esses compradores querem fotocromático polarizado (Nível 2 ou 3) e são exigentes quanto à durabilidade da armação. Eles perguntam sobre qualidade das dobradiças, resistência a arranhões da lente e se a armação flutua. Pedido médio: 300–800 unidades.</p>
          
          <p><strong>Empresas de brindes promocionais</strong> estão comprando fotocromático para presentes corporativos e brindes de eventos. Geralmente pedem Nível 1 porque o orçamento é apertado e o usuário final não está pagando pelos óculos. Mas alguns clientes corporativos de alto nível (bancos, seguradoras, concessionárias de carros de luxo) pedem fotocromático Nível 2 com logo personalizado como presente premium para clientes. Pedido médio: 500–2.000 unidades.</p>
          
          <p><strong>Vendedores da Amazon e e-commerce</strong> são uma caixa de surpresas. Os espertos compram Nível 2, precificam a R$ 150–250 no varejo e constroem uma marca em torno do "fotocromático acessível". Os menos experientes compram Nível 1, precificam a R$ 80 e se afogam em avaliações de 1 estrela sobre lentes que pararam de funcionar. Já vi pelo menos uma dúzia de anúncios de fotocromático na Amazon morrerem dessa forma. Não seja um deles.</p>
          
          <p><strong>Padrões geográficos de demanda:</strong> O Norte da Europa e o Reino Unido adoram fotocromático — o clima muda constantemente e as pessoas não querem carregar dois pares de óculos. Austrália e Oriente Médio são mercados desafiadores porque as altas temperaturas reduzem a ativação fotocromática — se você está vendendo para essas regiões, lentes Nível 3 são quase obrigatórias. O mercado dos EUA se divide aproximadamente 60/40 entre óticas (complemento de prescrição) e e-commerce direto ao consumidor.</p>

          {/* ─── Seção 5: Controle de Qualidade ─── */}
          <h2 id="controle-qualidade" className="text-3xl font-bold mt-16 mb-6">Controle de Qualidade: Como Testar Lentes Fotocromáticas Antes de Comprar</h2>
          
          <p>Você não precisa de um laboratório para identificar lentes fotocromáticas ruins. Aqui está o que eu digo para todo comprador fazer com suas amostras antes de fazer um pedido.</p>
          
          <p><strong>1. O teste do batente da porta.</strong> Fique em um ambiente interno bem iluminado. Segure uma lente até a metade através de uma porta aberta para a luz solar direta. Cronometre quantos segundos até que a metade exposta esteja visivelmente mais escura que a metade interna. Menos de 20 segundos: excelente. 20–40 segundos: aceitável. Mais de 60 segundos: rejeite. Este é o teste mais simples e pega as piores lentes imediatamente.</p>
          
          <p><strong>2. O teste de clareamento.</strong> Depois que a lente estiver completamente escurecida ao ar livre, entre em um ambiente interno e coloque os óculos sobre uma folha de papel branco. Cronometre quanto tempo leva para a lente voltar a ficar quase transparente. Menos de 3 minutos: excelente. 3–5 minutos: aceitável. Mais de 8 minutos: rejeite — seus clientes vão entrar em um restaurante e ficar sentados parecendo que estão usando óculos escuros no jantar por 10 minutos.</p>
          
          <p><strong>3. O teste do dia quente.</strong> Teste as lentes em um dia quente (30°C+). Lentes fotocromáticas naturalmente escurecem menos no calor, mas uma lente de qualidade ainda deve atingir mais de 70% da sua tonalidade máxima. Se a lente mal muda em um dia quente, ela será inútil no verão — que é exatamente quando a maioria das pessoas usa óculos de sol.</p>
          
          <p><strong>4. O teste do cartão UV.</strong> Compre um cartão de teste UV (custa cerca de R$ 10 em lojas online). Acenda uma lanterna UV através da lente em direção ao cartão. O cartão deve mostrar zero ou quase zero de transmissão UV. Se o cartão acender roxo, a lente não está bloqueando UV — e proteção UV é o objetivo principal dos óculos de sol, sejam fotocromáticos ou não.</p>
          
          <p><strong>5. O teste do arranhão (opcional, mas revelador).</strong> Arranhe levemente a superfície da lente com uma chave — apenas uma vez, na borda. Se o arranhão revelar uma camada base transparente sob uma camada superficial mais escura, você tem uma lente fotocromática com revestimento superficial. Lentes fotocromáticas em massa têm a mesma cor por toda a espessura. Este é um teste destrutivo, mas te diz exatamente pelo que você está pagando.</p>
          
          <p>Para pedidos em volume, exija o seguinte da fábrica: um relatório de espectrômetro de transmissão UV (mostrando conformidade UV400 em toda a superfície da lente, não apenas no centro), um vídeo ou relatório de teste de velocidade de ativação/clareamento e um certificado do lote informando o nome do fornecedor do corante fotocromático. Uma fábrica que não consegue fornecer isso está escondendo algo ou não sabe o que está vendendo — nenhuma das duas opções é aceitável.</p>

          {/* ─── Seção 6: Problemas Comuns ─── */}
          <h2 id="problemas-comuns" className="text-3xl font-bold mt-16 mb-6">Os 4 Problemas Que Ninguém Te Conta</h2>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 1: Não Funcionam Dentro do Carro</h3>
          
          <p>A maioria dos para-brisas de carros é de vidro laminado com uma camada intermediária bloqueadora de UV. Essa camada bloqueia 98–99% do UV — o que é ótimo para sua pele, mas acaba com a ativação fotocromática. Seus óculos fotocromáticos vão permanecer claros ou quase sem tonalidade enquanto você estiver dirigindo. Esta é a reclamação número 1 dos clientes sobre lentes fotocromáticas, e não é um defeito — é física. Algumas lentes fotocromáticas premium (como Transitions XTRActive) são formuladas para reagir à luz visível além do UV, então funcionam parcialmente atrás do para-brisa. Mas elas são mais caras (US$ 12–18/par no atacado) e ainda não escurecem tanto quanto na luz solar direta. Se seus clientes de atacado vendem para motoristas, especifique lentes fotocromáticas "para uso em carro" ou coloque um aviso claro na embalagem.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 2: A Temperatura Acaba com o Desempenho</h3>
          
          <p>As moléculas fotocromáticas são sensíveis à temperatura por natureza. A 0°C, elas escurecem profundamente e clareiam lentamente. A 35°C, a mesma lente pode atingir apenas 50–60% da sua tonalidade máxima. Esta é uma limitação fundamental da química fotocromática — a energia térmica em altas temperaturas empurra as moléculas de volta ao estado claro mais rápido do que o UV consegue empurrá-las ao estado escuro. As lentes Nível 3 atenuam isso com corantes estabilizados contra UV que alteram o ponto de equilíbrio, mas nenhuma lente fotocromática tem o mesmo desempenho a 35°C que tem a 20°C. Se você está vendendo para climas quentes (Sudeste Asiático, Oriente Médio, Sul dos EUA no verão), seja honesto com seus compradores sobre isso. Ou venda óculos polarizados em vez disso.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 3: Escurecimento Irregular no Primeiro Mês</h3>
          
          <p>Lentes fotocromáticas novas às vezes escurecem de forma irregular — o centro atinge a tonalidade total antes das bordas, ou vice-versa. Isso geralmente é um defeito de fabricação por distribuição irregular do corante durante o processo de fundição ou injeção. É mais comum em lentes Nível 1 (aplicação irregular do revestimento), mas pode acontecer no Nível 2 se o processo de mistura da fábrica for malfeito. Sempre verifique de 5 a 10 amostras aleatórias de posições diferentes no lote de produção quanto ao escurecimento uniforme. Se mais de 10% apresentarem irregularidade, rejeite o lote. Este problema não se resolve sozinho — ele piora com o envelhecimento da lente.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problema 4: O Rótulo "Fotocromático" Às Vezes É Mentira</h3>
          
          <p>Já peguei fornecedores vendendo lentes com tonalidade fixa em degradê e chamando de fotocromáticas. A lente é permanentemente tingida mais escura no topo e mais clara na parte inferior — parece uma lente fotocromática parcialmente ativada, mas nunca muda. A forma de detectar isso: coloque os óculos em uma gaveta escura por uma hora, depois verifique se a lente está completamente transparente. Se ainda houver tonalidade visível, não é fotocromático — é um degradê de tonalidade fixa. Este golpe é mais comum do que você imagina, especialmente em plataformas B2B onde o comprador está fazendo pedidos remotamente e confiando em fotos. Sempre, sempre teste as amostras você mesmo antes de transferir dinheiro.</p>

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
            <h2 className="text-3xl font-bold mb-4">Precisa de Óculos Fotocromáticos para Sua Linha de Atacado?</h2>
            <p className="text-xl mb-6 opacity-90">Me diga qual é o seu mercado-alvo, faixa de quantidade e qual nível te interessa. Envio especificações de amostras e uma cotação em até 24 horas — sem pressão, apenas números reais de uma fábrica que faz isso há 20 anos.</p>
            <Link
              href="/pt/contato"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Amostras Fotocromáticas e Cotação
            </Link>
          </div>

          {/* ═══════ CONTEÚDO RELACIONADO ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais do Chão de Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/blog/uv400-vs-polarizado" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">UV400 vs Polarizado: O Que Realmente Importa</h3>
                <p className="text-gray-600 text-sm">A diferença explicada por quem fabrica os dois tipos todos os dias.</p>
              </Link>
              <Link href="/pt/blog/guia-lentes-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Lentes para Óculos de Sol</h3>
                <p className="text-gray-600 text-sm">TAC, policarbonato, nylon, vidro — qual material de lente se encaixa no seu mercado.</p>
              </Link>
              <Link href="/pt/contato" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale Conosco</h3>
                <p className="text-gray-600 text-sm">Solicite uma cotação para seu pedido personalizado de óculos de sol no atacado.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
