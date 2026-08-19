import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Incoterms de óculos de sol e guia de envio: FOB, CIF, EXW, DDP',
  description: 'Um dono de fábrica explica FOB, CIF, EXW e DDP para importadores de óculos de sol: números reais de frete, quem paga o quê e como escolher o Incoterm certo para o seu primeiro pedido.',
  keywords: ['incoterms óculos de sol', 'FOB vs CIF vs EXW vs DDP', 'guia envio óculos', 'importar óculos da china', 'custo frete óculos', 'incoterms explicados importadores', 'preço FOB óculos', 'envio DDP óculos', 'envio óculos china', 'desembaraço aduaneiro óculos de sol'],
  alternates: {
    canonical: '/pt/blog/guia-incoterms-envio-oculos',
    languages: {
      'en': '/blog/sunglasses-incoterms-shipping-guide',
      'de': '/de/blog/sonnenbrillen-incoterms-versand-ratgeber',
      'es': '/es/blog/guia-incoterms-envio-gafas-sol',
      'fr': '/fr/blog/guide-incoterms-expedition-lunettes',
      'it': '/it/blog/guida-incoterms-spedizione-occhiali',
    },
  },
};

const takeaways = [
  'Os Incoterms são um contrato de transferência de risco, não um cardápio de preços: FOB, CIF, EXW e DDP definem cada um um ponto de entrega preciso em que a responsabilidade (e o custo) da carga passa do vendedor para o comprador, e errar esse ponto é como os importadores perdem silenciosamente milhares num único contêiner',
  'Para um importador de óculos de sol de primeira viagem, FOB é quase sempre a resposta certa: a fábrica cuida do desembaraço de exportação e carrega a mercadoria no navio num porto chinês designado, e você controla o agente de carga, o seguro e a entrega — o custo total desembaraçado costuma ser 10–15% menor do que deixar o vendedor operar CIF ou DDP',
  'EXW (na fábrica) parece barato no orçamento, mas é uma armadilha para compradores novos — joga em você cada tarefa de exportação, cada documento de exportação e cada risco a partir do portão da fábrica, e um comprador que não sabe lidar com a alfândega de exportação chinesa pagará mais em erros do que jamais economizou no preço de vitrine',
  'DDP é o único termo em que o vendedor é responsável pelos impostos e taxas do país de destino, o que o torna sedutor para Amazon FBA e vendedores de varejo — mas você paga um prêmio de 8–15% para o vendedor absorver o risco aduaneiro, e perde a visibilidade do custo desembaraçado real que está pagando',
  'Os três custos ocultos que destroem a margem dos importadores são as taxas de demurrage e detention (US$ 50–150 por dia quando um contêiner fica tempo demais no porto), as taxas de movimentação no terminal de destino (muitas vezes US$ 200–500 por contêiner) e a carga não segurada — e nenhum deles aparece no preço unitário FOB que seu fornecedor cotou',
];

const quickStats = [
  { label: 'Frete marítimo típico, contêiner 40ft CN→EUA', value: 'US$ 2.500–4.500' },
  { label: 'Prêmio no custo desembaraçado de CIF/DDP vs FOB', value: '8–15%' },
  { label: 'Taxa de demurrage/detention por dia, por contêiner', value: 'US$ 50–150' },
  { label: 'Taxa de movimentação no terminal de destino (THC)', value: 'US$ 200–500' },
  { label: 'Parcela de importadores de primeira viagem que pagam caro no frete', value: '~40%' },
];

const faqs = [
  {
    question: 'Qual é a diferença entre FOB e CIF na importação de óculos de sol?',
    answer: 'No FOB (Free On Board), a fábrica paga o desembaraço de exportação e o carregamento no porto chinês designado, e você assume a partir daí — você reserva o frete marítimo, contrata o seguro e cuida do desembaraço de importação. No CIF (Cost, Insurance, Freight), o vendedor paga o frete e um seguro básico até o porto de destino, e então lhe entrega a carga. FOB dá a você o controle do seu próprio agente de carga e costuma sair mais barato; CIF é mais simples, mas o vendedor escolhe o agente e você paga um acréscimo tanto no frete quanto no seguro. Para óculos de sol — carga leve e de baixa cubagem — o acréscimo de frete que um vendedor adiciona no CIF pode facilmente chegar a 8–15%.',
  },
  {
    question: 'Qual Incoterm é melhor para um importador de óculos de sol de primeira viagem?',
    answer: 'FOB, em quase todos os casos. Ele obriga a fábrica a cuidar da parte difícil — o desembaraço de exportação chinês — ao mesmo tempo em que dá a você o controle do agente de carga, do seguro e da entrega no destino, que é onde os importadores de primeira viagem mais perdem dinheiro quando outra pessoa opera isso. A única exceção: se o seu pedido for pequeno o bastante para viajar por courier aéreo (DDP expresso), ou se você faz Amazon FBA e quer que o vendedor entregue num armazém da Amazon com impostos pagos, DDP realmente vale o prêmio pela simplicidade. Para um primeiro contêiner completo, comece com FOB.',
  },
  {
    question: 'Quem paga os impostos e taxas alfandegárias em cada Incoterm?',
    answer: 'No EXW, FOB, CIF e CFR, o importador (você) paga todos os impostos de importação, IVA e taxas do país de destino — a responsabilidade do vendedor termina antes de a mercadoria chegar ao seu país. No DDP (Delivered Duty Paid), o vendedor é responsável pelos impostos e taxas de destino, que é exatamente a razão pela qual o DDP impõe um prêmio. Note que o DDP num embarque marítimo ainda exige que o vendedor (ou o despachante dele) desembarace a mercadoria em seu nome em muitos países, o que adiciona complexidade e custo — a maioria dos vendedores cotou o DDP 8–15% acima do FOB para cobrir esse risco.',
  },
  {
    question: 'Quanto custa enviar óculos de sol da China?',
    answer: 'Depende do volume e do destino, mas aqui estão números reais. Um contêiner de 40 pés da China para a costa leste dos EUA custa cerca de US$ 2.500–4.500 em frete marítimo, dependendo da estação; para a Europa, costuma ser US$ 2.000–3.500. Óculos de sol são leves e de baixa cubagem, então um único contêiner de 40ft pode levar 100.000–150.000 pares em saquinhos, o que coloca o custo do frete em apenas US$ 0,02–0,05 por par. O erro dos importadores de primeira viagem é pagar frete aéreo para uma quantidade que deveria ir por mar — o frete aéreo de óculos custa US$ 4–7 por quilograma, contra US$ 0,05–0,15 por quilograma por mar, e essa diferença apaga a sua margem.',
  },
  {
    question: 'O que são taxas de demurrage e detention, e como evitá-las?',
    answer: 'Demurrage é a taxa cobrada pelo armador quando um contêiner fica no porto além do tempo livre (normalmente 3–7 dias livres); detention é a taxa quando você segura o contêiner vazio além da janela de devolução permitida (normalmente 5–14 dias livres). Ambas custam US$ 50–150 por dia. Os importadores são atingidos quando a papelada aduaneira atrasa ou o transportador não faz a coleta a tempo. Você as evita alinhando despachante aduaneiro, agente de carga e agendamento de entrega antes mesmo de o navio chegar — o contêiner está no cronômetro a partir do momento em que é descarregado.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'guia-incoterms-envio-oculos';

export default function GuiaIncotermsEnvioOculos() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Incoterms de óculos de sol e guia de envio' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Incoterms de óculos de sol e guia de envio: FOB, CIF, EXW, DDP explicados para importadores",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica explica FOB, CIF, EXW e DDP para importadores de óculos de sol: números reais de frete, quem paga o quê e como escolher o Incoterm certo para o seu primeiro pedido.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/pt/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "pt",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}} />

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Importação &amp; Logística</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Incoterms de óculos de sol e guia de envio: FOB, CIF, EXW, DDP
          </h1>
          <p className="text-xl text-gray-600">
            Um comprador me enviou uma vez o orçamento de um concorrente perguntando por que era 12% mais barato que o meu. Mesma armação, mesmo MOQ, mesmas especificações. A diferença eram as três letras no final do preço: EXW. O concorrente cotava na fábrica, o que significava que o comprador pagaria do próprio bolso o desembaraço de exportação, o transporte até o porto, o frete marítimo, o seguro e os impostos de importação — nada disso aparecia no orçamento. Aqui está tudo o que eu gostaria que importadores de primeira viagem entendessem sobre Incoterms antes de fazer um depósito.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Índice</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">O que os Incoterms realmente são (e por que os importadores se queimam)</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">FOB vs CIF vs EXW vs DDP: os números reais de um dono de fábrica</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Como escolher o Incoterm certo para o seu primeiro pedido</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Custos ocultos que os importadores sempre esquecem</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas frequentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Envio de óculos — Números-chave" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">O que os Incoterms realmente são (e por que os importadores se queimam)</h2>

          <p>Os Incoterms — abreviação de International Commercial Terms (termos comerciais internacionais) — são um conjunto de códigos de três letras publicados pela Câmara de Comércio Internacional que definem uma única coisa: <strong>o ponto em que o risco e o custo da mercadoria passam do vendedor para o comprador.</strong> Essa é toda a função deles. Eles não definem quem é o dono da mercadoria. Não definem os termos de pagamento. Definem a entrega.</p>

          <p>Se você não lembrar de mais nada deste guia, lembre-se dessa frase. Incoterms são um ponto de entrega. Tudo o que está a jusante desse ponto é problema e custo seu; tudo o que está a montante é do vendedor.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Por que o ponto de entrega importa mais que o preço</h3>

          <p>Dois fornecedores podem cotar os "mesmos" óculos de sol a dois preços muito diferentes, e nenhum dos dois está mentindo. Uma fábrica que cota <strong>US$ 1,80 FOB Shenzhen</strong> está dizendo: "Vou desembaraçar esses óculos para exportação, levá-los ao porto e carregá-los no navio por US$ 1,80 o par." Um comerciante que cota <strong>US$ 1,50 EXW</strong> está dizendo: "Vou te entregar isso no estacionamento do meu armazém por US$ 1,50, e você resolve o resto." A "economia" de US$ 0,30 evapora no momento em que você paga o despachante de exportação, o transporte portuário, a movimentação no terminal e os erros que vai cometer fazendo tudo isso pela primeira vez.</p>

          <p>É por isso que importadores experientes sempre comparam orçamentos <em>no mesmo Incoterm.</em> Comparar um orçamento FOB com um EXW é comparar maçãs com um saco de pedaços de maçã desmontados. A coisa mais valiosa que você pode fazer como comprador é forçar cada fornecedor para a mesma base antes de comparar preços.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Os quatro termos que você realmente verá</h3>

          <p>Existem onze Incoterms na edição de 2020, mas no comércio de óculos de sol você verá quatro deles 95% das vezes. Aqui está cada um em uma frase simples, porque são as versões jurídicas que fazem os compradores tropeçar.</p>

          <p><strong>EXW (Ex Works / na fábrica).</strong> A única obrigação do vendedor é ter a mercadoria pronta em suas instalações. Você é responsável por tudo, do carregamento do caminhão no portão da fábrica até o desembaraço de importação no seu próprio país. É o orçamento que parece mais barato e o custo real mais alto para um comprador novo.</p>

          <p><strong>FOB (Free On Board / livre a bordo).</strong> O vendedor cuida do desembaraço de exportação e carrega a mercadoria no navio que você designa no porto designado. Risco e custo são transferidos para você no momento em que a mercadoria está a bordo. É o termo de referência do comércio de importação de óculos de sol.</p>

          <p><strong>CIF (Cost, Insurance, Freight).</strong> O vendedor paga o frete e um seguro básico até o porto de destino, e então entrega a mercadoria (e os documentos) lá. Você ainda paga os impostos e desembaraça. A pegadinha: o vendedor escolhe o agente de carga e adiciona margem tanto no frete quanto no seguro.</p>

          <p><strong>DDP (Delivered Duty Paid / entregue com impostos pagos).</strong> O vendedor assume a responsabilidade até o seu destino designado, incluindo impostos e taxas do país de destino. É o termo de máxima responsabilidade para o vendedor, que é exatamente por que impõe o preço mais alto.</p>

          <p>Também existem <strong>CFR</strong> (como CIF, mas sem o seguro) e <strong>FCA</strong> (o primo aéreo do FOB), que você encontrará ocasionalmente. Mas domine primeiro EXW, FOB, CIF e DDP, e entenderá o resto instantaneamente.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">FOB vs CIF vs EXW vs DDP: os números reais de um dono de fábrica</h2>

          <p>Deixe-me colocar números concretos nisso, porque Incoterms não significam nada no abstrato e tudo no concreto. Vou percorrer um pedido realista: <strong>10.000 pares de óculos de sol em acetato a US$ 1,80 FOB Shenzhen</strong>, enviados por mar a um comprador em Roterdã, na Holanda.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Item de custo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">EXW</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">FOB</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">CIF</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DDP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Preço unitário (10.000 pares)</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 1,50</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 1,80</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 1,95</td>
                  <td className="border border-gray-300 px-4 py-2">US$ 2,15</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Desembaraço de exportação + transporte na China</td>
                  <td className="border border-gray-300 px-4 py-2">Pago pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Incluído</td>
                  <td className="border border-gray-300 px-4 py-2">Incluído</td>
                  <td className="border border-gray-300 px-4 py-2">Incluído</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Frete marítimo (consolidado LCL)</td>
                  <td className="border border-gray-300 px-4 py-2">Pago pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Pago pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Incluído (com margem)</td>
                  <td className="border border-gray-300 px-4 py-2">Incluído</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Seguro</td>
                  <td className="border border-gray-300 px-4 py-2">Pago pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Pago pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Incluído (cobertura mínima)</td>
                  <td className="border border-gray-300 px-4 py-2">Incluído</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Impostos + IVA no destino</td>
                  <td className="border border-gray-300 px-4 py-2">Pagos pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Pagos pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Pagos pelo comprador</td>
                  <td className="border border-gray-300 px-4 py-2">Pagos pelo vendedor</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Quem controla o agente de carga?</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Comprador</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Comprador</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Vendedor</td>
                  <td className="border border-gray-300 px-4 py-2">Vendedor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lendo a tabela: para onde o dinheiro realmente vai</h3>

          <p>Veja os preços unitários. EXW parece US$ 0,30 mais barato que FOB, mas esses US$ 0,30 não compram exatamente nada — você ainda tem que pagar o desembaraço de exportação e o transporte, que para 10.000 pares de óculos de sol custam cerca de US$ 300–600, independentemente do preço unitário. Um comprador que "economizou" US$ 3.000 escolhendo EXW em vez de FOB gastará pelo menos esse valor em despachante de exportação chinês, transporte portuário e taxa de movimentação no terminal que a fábrica teria absorvido no FOB.</p>

          <p>Agora veja o CIF. O vendedor adicionou US$ 0,15 por par (US$ 1.500 no total) de frete e seguro. Para um embarque LCL de 10.000 pares — óculos são leves, isso dá cerca de 8–12 metros cúbicos — o frete real de Shenzhen a Roterdã fica em torno de US$ 400–700 em carga consolidada. O vendedor está cobrando de você cerca do dobro do custo real do frete e chamando isso de conveniência. Essa é a margem do CIF, e é assim que os vendedores ganham silenciosamente mais na sua logística do que no próprio produto.</p>

          <p>E o DDP a US$ 2,15? O vendedor adicionou US$ 0,35 por par para cobrir impostos de destino, gestão do IVA e o risco de errar a classificação aduaneira. Para um comprador que nunca importou, esses US$ 0,35 (cerca de US$ 3.500 neste pedido) provavelmente são dinheiro bem gasto — você está pagando alguém para absorver o risco aduaneiro. Para um comprador que já fez isso algumas vezes, esses mesmos US$ 3.500 são margem que você poderia manter operando FOB e desembaraçando sozinho com um despachante local.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O único número que muda tudo: frete por par</h3>

          <p>Aqui está o segredo de dono de fábrica que a maioria dos importadores nunca calcula: <strong>o custo de frete por par.</strong> Óculos de sol são absurdamente leves e de baixa cubagem. Um par de óculos em acetato num saquinho pesa cerca de 25–35 gramas e ocupa cerca de 0,6–1 litro embalado. Um contêiner de 40 pés leva cerca de 100.000–150.000 pares. Então um frete de contêiner de US$ 3.000 distribuído por 120.000 pares dá US$ 0,025 por par — dois centavos e meio.</p>

          <p>Compare isso com o frete aéreo a US$ 4–7 por quilograma: um par de 30 gramas custa US$ 0,12–0,21 para voar. Isso é 5 a 8 vezes mais por par. O frete aéreo só faz sentido para amostras, reposições urgentes de uma referência que vende rápido, ou marcas de alto valor onde a velocidade vale o prêmio. Para um pedido de atacado rotineiro, o frete marítimo a dois centavos por par é toda a razão pela qual importar óculos de sol da China é lucrativo. Se um fornecedor está roteando discretamente o seu pedido "barato" por via aérea sem te avisar, ele acabou de apagar a sua margem — é por isso que você sempre confirma a rota, não apenas o preço.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Como escolher o Incoterm certo para o seu primeiro pedido</h2>

          <p>Não existe um Incoterm "correto" único — existe apenas o Incoterm correto para <em>a sua situação.</em> Aqui está a estrutura de decisão que dou aos meus compradores, na ordem de frequência das minhas recomendações.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Comece com FOB (quase sempre)</h3>

          <p>Para um primeiro pedido completo por mar, FOB é o padrão. A razão é simples: coloca as duas coisas mais difíceis — o desembaraço de exportação chinês e o carregamento num navio — nas mãos da parte que faz isso todos os dias (a fábrica), mantendo o frete e o desembaraço no destino nas suas mãos, onde você pode controlar o custo e escolher um agente de carga de confiança. O trabalho da fábrica termina de forma limpa na amurada do navio, e daí em diante você tem visibilidade total.</p>

          <p>A única competência real que o FOB exige de você é encontrar um agente de carga decente e um despachante aduaneiro local. Ambos são serviços de commodity — peça a três agentes um orçamento para o mesmo embarque e você verá a diferença. Isso não é motivo para evitar FOB; é motivo para passar uma tarde obtendo três orçamentos.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Use DDP para pedidos pequenos, Amazon FBA e rapidez</h3>

          <p>O DDP vale o seu prêmio em três situações específicas. Primeiro, <strong>pedidos pequenos</strong>: se você está importando 500 pares por courier aéreo, a simplicidade de deixar o vendedor cuidar dos impostos supera a economia de fazer você mesmo. Segundo, <strong>Amazon FBA</strong>: um vendedor que entrega sua mercadoria num armazém da Amazon com impostos pagos e uma etiqueta de caixa FBA correta remove uma enorme quantidade de dor de cabeça operacional para um vendedor FBA que não quer tocar na alfândega. Terceiro, <strong>dropshipping de varejo ou lançamentos urgentes</strong> onde a previsibilidade importa mais que a margem.</p>

          <p>Só entre com os olhos abertos. DDP significa que o vendedor controla toda a cadeia, o que significa que você perde a visibilidade da decomposição do que está realmente pagando. Tudo bem quando o pedido é pequeno e a alternativa é um pesadelo aduaneiro; é menos bom quando você importa 20.000 pares e o prêmio DDP é de US$ 7.000 que você poderia ter mantido com um despachante competente.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Considere CIF apenas se você ainda não tem agente de carga</h3>

          <p>CIF é o meio-termo: o vendedor opera o frete e entrega a mercadoria no seu porto de destino. É genuinamente útil quando você ainda não tem um agente de carga e o pedido é grande demais para o conforto do DDP, mas pequeno demais para justificar construir uma relação de frete. O trade-off, de novo, é a margem e a perda de controle — o vendedor escolhe o agente, e o agente trabalha para o vendedor, não para você.</p>

          <p>Meu conselho honesto: pule completamente o CIF para negócios recorrentes. Use-o uma vez, no seu primeiro pedido, enquanto ainda está aprendendo. Depois arrume seu próprio agente no segundo pedido e mova tudo para FOB. CIF são as rodinhas; FOB é a bicicleta.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Evite EXW até dominar a logística de exportação chinesa</h3>

          <p>EXW tem exatamente um caso de uso legítimo: você já tem um agente de carga na China com licença de exportação, um acordo de transporte chinês e um despachante que cuida do desembaraço de exportação para você, e quer tirar cada centavo de logística do preço unitário. Essa é uma configuração real e sofisticada — alguns grandes importadores a operam. Não é, no entanto, por onde se começa.</p>

          <p>Para um comprador de primeira viagem, EXW é uma armadilha com um adesivo de desconto. Você pagará um despachante chinês pelo desembaraço de exportação, um transportador para levar a mercadoria ao porto, a movimentação no terminal — e se qualquer coisa der errado entre o portão da fábrica e o navio, é inteiramente problema seu. A fábrica, tendo te entregado a mercadoria no portão, tem zero responsabilidade e zero incentivo para ajudar. O que você economizou no preço unitário, você gastará — e provavelmente a mais — aprendendo do jeito difícil.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">A matriz de decisão de relance</h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Sua situação</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Incoterm recomendado</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Por quê</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Primeiro contêiner marítimo completo</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>FOB</strong></td>
                  <td className="border border-gray-300 px-4 py-2">A fábrica cuida da exportação; você controla frete e destino</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Pedido pequeno por courier aéreo</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">A simplicidade supera a economia em volumes pequenos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Entrega Amazon FBA</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Impostos pagos, entregue no armazém, etiqueta FBA tratada</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sem agente ainda, pedido médio</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>CIF</strong></td>
                  <td className="border border-gray-300 px-4 py-2">O vendedor opera o frete enquanto você constrói uma relação</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Agente chinês próprio + licença de exportação</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>EXW</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Tire o custo logístico quando souber operá-lo sozinho</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Custos ocultos que os importadores sempre esquecem</h2>

          <p>O preço unitário nunca é o preço. Toda vez que um importador de primeira viagem me envia sua "ótima oferta" e pergunta por que a mercadoria chegou 40% mais cara que o esperado, a resposta são sempre os mesmos cinco custos ocultos. Aqui estão eles, para que não te surpreendam.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Demurrage e detention — o relógio do porto</h3>

          <p>Quando o seu contêiner chega, o armador te dá alguns "dias livres" para retirá-lo — normalmente 3–7 dias de demurrage (o contêiner carregado parado no porto). Depois que você o tem, ganha 5–14 dias livres de "detention" para descarregar e devolver a caixa vazia. Exceda qualquer uma das janelas e o relógio começa a correr: <strong>US$ 50–150 por dia.</strong> Uma retenção aduaneira de duas semanas pode adicionar silenciosamente US$ 1.000–2.000 ao seu custo desembaraçado, e é a forma mais comum de importadores sangrarem dinheiro sem perceber. A solução é a preparação: alinhe despachante, agente e agendamento do caminhão antes mesmo de o navio atracar.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Movimentação no terminal de destino e taxas locais</h3>

          <p>Mesmo num embarque FOB ou CIF, o porto de destino tem uma pilha de taxas que o orçamento do vendedor nunca inclui: a taxa de movimentação no terminal (THC), taxas de documentação, a taxa de segurança do transportador e a "taxa de serviço portuário" que varia por terminal. Juntas, elas somam <strong>US$ 200–500 por contêiner</strong> e são cobradas do importador na chegada. Peça ao seu agente um orçamento de destino <em>tudo incluído</em> com antecedência — aqueles que detalham tudo — para que a fatura de chegada não seja uma surpresa.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Impostos e IVA sobre o valor desembaraçado, não sobre o preço FOB</h3>

          <p>A maioria dos importadores sabe que os impostos existem; a maioria subestima a base. O imposto de importação é calculado sobre o <em>valor aduaneiro</em>, que na maioria das jurisdições é o preço FOB mais frete mais seguro — essencialmente o valor CIF — e não o preço FOB que você negociou com a fábrica. Depois o IVA é cobrado sobre o valor com impostos inclusos. Então o seu imposto de 8% não é 8% de US$ 1,80; é 8% do valor desembaraçado, e o seu IVA de 21% é empilhado por cima. O impacto tributário efetivo é quase sempre maior que a alíquota de imposto declarada. Peça ao seu despachante para modelar o custo desembaraçado real antes de se comprometer com um preço unitário.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. O seguro que você nunca contratou</h3>

          <p>No FOB e no EXW, o seguro é responsabilidade sua, e a maioria dos compradores de primeira viagem o pula. Isso é um erro. Um contêiner perdido ou danificado sem seguro é perda total — você já pagou a fábrica, e a responsabilidade do armador é limitada a um valor minúsculo por quilograma pelas convenções internacionais. O seguro de carga marítima custa cerca de <strong>0,3–0,5% do valor da carga</strong> — alguns dólares para segurar alguns milhares de dólares de óculos. Contrate-o. No momento em que você é dono do risco (FOB a bordo, EXW no portão), você deveria ser dono do seguro também.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. O custo de errar o código HS</h3>

          <p>Óculos de sol se enquadram num código específico do Sistema Harmonizado (SH) — normalmente 9004.10 para óculos de sol, com subcódigos dependendo do material. Erre a classificação e a alfândega reclassificará sua mercadoria, muitas vezes a uma alíquota de imposto mais alta, mais multas, mais os dias de atraso (e as taxas de demurrage do ponto 1) enquanto resolvem o problema. Um despachante competente confirmará o código SH correto antes do embarque. Um barato simplesmente copiará o código que aparece na fatura do fornecedor. Não é aqui que você economiza US$ 50.</p>

          <p>Some esses cinco e você entende por que uma armação FOB de US$ 1,80 chega a US$ 2,40–2,80 quando está no seu armazém — e por que um comprador que comparou apenas preços unitários acha que foi enganado quando o verdadeiro culpado é o frete, os impostos e as taxas portuárias que ele nunca viu chegar.</p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Perguntas frequentes</h2>
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
            <h2 className="text-3xl font-bold mb-4">Obtenha um orçamento de custo desembaraçado, não só um preço unitário</h2>
            <p className="text-xl mb-6 opacity-90">Envie-me sua especificação e seu porto de destino. Vou te dar o preço FOB, a estimativa de frete e uma decomposição completa do custo desembaraçado — para você saber exatamente o que chega ao seu armazém antes de fazer um depósito.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Obter orçamento grátis
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais do chão de fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sunglasses-factory-audit-checklist" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Checklist de auditoria de fábrica de óculos</h3>
                <p className="text-gray-600 text-sm">Uma checklist de 20 pontos para avaliar um fornecedor antes de enviar dinheiro.</p>
              </Link>
              <Link href="/blog/how-to-choose-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como escolher um fabricante de óculos de sol</h3>
                <p className="text-gray-600 text-sm">Os critérios de seleção que separam uma fábrica real de um site polido.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale conosco</h3>
                <p className="text-gray-600 text-sm">Obtenha um orçamento para o seu pedido de atacado personalizado de óculos de sol.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
