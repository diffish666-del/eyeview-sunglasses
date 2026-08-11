import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Do Esboço à Amostra: Como Óculos de Sol Personalizados São Fabricados em 4 Semanas',
  description: 'Um dono de fábrica explica o processo completo de fabricação de óculos de sol personalizados — revisão de design, confecção de moldes, fornecimento de materiais, montagem, controle de qualidade e envio. Prazos reais, custos reais.',
  keywords: ['fabricação óculos de sol', 'processo fábrica óculos', 'óculos OEM prazos', 'moldes óculos sol', 'produção acetato óculos', 'desenvolvimento amostras óculos', 'fábrica óculos China', 'óculos sol personalizados fabricação'],
  alternates: {
    canonical: '/pt/blog/processo-fabricacao-oculos-sol',
  },
};

const takeaways = [
  'Um ciclo completo de produção de óculos de sol personalizados — do recebimento do seu esboço ao envio das amostras prontas — leva 4 semanas em uma fábrica chinesa bem organizada, com cada semana dedicada a uma fase distinta: revisão de design e confecção de moldes, fornecimento de materiais e primeiras amostras, montagem e controle de qualidade, e acabamento e preparação para envio',
  'Os custos dos moldes para armações de acetato personalizadas variam de $300 a $800 por molde dependendo da complexidade — este é o maior custo inicial na fabricação OEM de óculos, e pular a verificação de qualidade do molde leva a armações que deformam ou racham na dobradiça da haste (a falha nº 1 em pedidos personalizados)',
  'O fornecimento de materiais é onde importadores iniciantes perdem 1–2 semanas: as folhas de acetato levam 5–7 dias para chegar do fornecedor, componentes metálicos exigem fornecedores separados, e a correspondência de cor sem uma referência Pantone adiciona pelo menos 3 dias extras — sempre envie uma amostra física de cor com seu briefing de design',
  'A fase de montagem (Semana 3) envolve 12–15 pontos de controle de qualidade separados por par — pressão de inserção das lentes, tensão das hastes, alinhamento das dobradiças, torque dos parafusos e simetria da armação são todos medidos com calibres, não a olho — e qualquer par que falhe em um controle volta para retrabalho ou descarte',
  'O controle de qualidade final na Semana 4 não é uma, mas três inspeções: a equipe de QC interna da fábrica, uma verificação pontual do supervisor de produção, e (se contratada) uma inspeção de terceiros antes da embalagem — a diferença entre uma taxa de defeitos de 3% e 0,5% é simplesmente quantos controles de QC você paga',
  'O envio de fábricas chinesas para mercados ocidentais leva de 3 a 30 dias dependendo do método: frete aéreo (3–7 dias, $2–4/kg), frete marítimo (20–35 dias, $0,30–0,80/kg) ou ferrovia para a Europa (12–18 dias, $1–1,50/kg) — e o maior erro de envio é não considerar o tempo de desembaraço aduaneiro',
];

const quickStats = [
  { label: 'Custo molde acetato (por molde)', value: '$300–800' },
  { label: 'Pontos de controle por par', value: '12–15' },
  { label: 'Pedido mínimo OEM', value: '300–500 unid.' },
  { label: 'Frete aéreo para EUA/UE', value: '3–7 dias' },
  { label: 'Frete marítimo para EUA/UE', value: '20–35 dias' },
];

const faqs = [
  {
    question: 'Quanto tempo realmente leva para fabricar óculos de sol personalizados do zero?',
    answer: 'Na EyeView, o prazo padrão é de 4 semanas do esboço à amostra pronta. Semana 1: revisão de design e confecção de moldes. Semana 2: fornecimento de materiais, correspondência de cor e primeiras amostras de montagem. Semana 3: montagem completa com todos os controles de qualidade. Semana 4: acabamento, controle final, embalagem e preparação para envio. A produção em massa adiciona mais 3–5 semanas após a aprovação da amostra. Os atrasos mais comuns vêm de duas coisas: o comprador não fornece arquivos CAD claros ou referências de cor, e o fornecedor de folhas de acetato está atrasado — ambos evitáveis com boa comunicação.',
  },
  {
    question: 'Qual é o pedido mínimo para óculos de sol OEM personalizados?',
    answer: 'Para moldes personalizados (seu próprio design de armação), o pedido mínimo é tipicamente de 300–500 unidades por modelo e cor. Com 500 unidades × 3 cores, são 1.500 pares por modelo. Os custos do molde são separados — $300 a $800 por molde dependendo da complexidade. Uma armação de acetato típica precisa de 2 moldes (frontal + hastes). Para armações de estoque com marca personalizada (apenas impressão de logo, embalagem), o pedido mínimo cai para 100–200 unidades por modelo. A maioria dos novos empreendedores começa com 3–5 modelos de 300 unidades cada, totalizando cerca de 900–1.500 pares.',
  },
  {
    question: 'Quais materiais posso escolher para armações de óculos de sol personalizados?',
    answer: 'Os três principais materiais são acetato, TR90 e metal (aço inoxidável ou titânio). O acetato é a escolha premium — polido à mão, cores ricas, sensação mais pesada. O TR90 é leve, flexível e excelente para linhas esportivas ou infantis. As armações de metal funcionam bem para designs minimalistas e aviador. Cada material tem um processo de molde diferente: acetato 5–7 dias, TR90 mais rápido (3–5 dias), e o metal requer matrizes de estampagem em vez de moldes de injeção. Também trabalhamos com bio-acetato, nylon reciclado e composto de madeira para linhas ecológicas.',
  },
  {
    question: 'Como funciona o controle de qualidade durante a produção de óculos de sol personalizados?',
    answer: 'O QC funciona em três níveis. Primeiro, QC em linha durante a produção: cada par passa por 12–15 pontos de controle — pressão de inserção das lentes com medidor de força, tensão das hastes nos ângulos de abertura, parafusos das dobradiças com chave dinamométrica, simetria da armação em gabaritos de alinhamento. Segundo, QC de fim de linha: uma equipe dedicada inspeciona 100% dos pares prontos sob iluminação padronizada. Terceiro, amostragem AQL: se você contratou inspeção de terceiros (SGS, Bureau Veritas), eles coletam uma amostra estatística baseada no seu Nível de Qualidade Aceitável — tipicamente AQL 2,5 para defeitos maiores e AQL 4,0 para defeitos menores.',
  },
  {
    question: 'Quais opções de envio estão disponíveis para pedidos de óculos de sol personalizados da China?',
    answer: 'Três métodos principais. Frete aéreo (FedEx/DHL/UPS): 3–7 dias porta a porta, $2–4 por kg, ideal para amostras e pedidos pequenos. Frete marítimo (LCL ou FCL): 20–35 dias porto a porto mais 3–5 dias para alfândega, $0,30–0,80 por kg, ideal para pedidos grandes. Ferrovia para a Europa: 12–18 dias, $1–1,50 por kg, uma opção intermediária. Para um primeiro pedido típico de 500 pares (cerca de 35–40 kg embalados), o frete aéreo é a escolha mais prática. Para mais de 3.000 pares, o frete marítimo economiza $500–800. Gerenciamos toda a documentação de envio.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'processo-fabricacao-oculos-sol';

export default function ProcessoFabricacaoOculosSol() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/pt/' },
          { name: 'Blog', href: '/pt/blog/' },
          { name: 'Do Esboço à Amostra' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Do Esboço à Amostra: Como Óculos de Sol Personalizados São Fabricados em 4 Semanas",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica explica o processo completo de fabricação de óculos de sol personalizados. Prazos reais, custos reais.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/processo-fabricacao-oculos-sol" }
        })}} />

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

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Know-How de Fábrica</span>
            <span>11 de agosto de 2026</span>
            <span>•</span>
            <span>9 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Do Esboço à Amostra: Como Óculos de Sol Personalizados São Fabricados em 4 Semanas
          </h1>
          <p className="text-xl text-gray-600">
            Fabrico óculos de sol desde 2006, e a pergunta que mais me fazem é: &quot;O que realmente acontece depois que eu envio meu design?&quot; Esta é a explicação honesta — cada etapa, cada controle e cada possível atraso.
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
            <li><a href="#week-1" className="text-primary-600 hover:underline">Semana 1: Revisão de Design e Confecção de Moldes</a></li>
            <li><a href="#week-2" className="text-primary-600 hover:underline">Semana 2: Fornecimento de Materiais e Primeiras Amostras</a></li>
            <li><a href="#week-3" className="text-primary-600 hover:underline">Semana 3: Montagem e Controle de Qualidade</a></li>
            <li><a href="#week-4" className="text-primary-600 hover:underline">Semana 4: Acabamento, Embalagem e Preparação para Envio</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <KeyTakeaways items={takeaways} title="Pontos-Chave" />
          <QuickStats stats={quickStats} title="Fatos Rápidos" />

          {/* Semana 1 */}
          <h2 id="week-1" className="text-3xl font-bold mt-16 mb-6">Semana 1: Revisão de Design e Confecção de Moldes</h2>
          <p>O relógio começa a contar no momento em que seu e-mail chega na minha caixa de entrada. Você me envia um esboço — às vezes é um arquivo CAD profissional de um designer industrial, às vezes é uma foto de uma armação que você gosta com &quot;faça assim mas mais largo e em tartaruga&quot; rabiscado em um guardanapo. Ambos são viáveis. Um só leva mais tempo.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O Que Verificamos na Revisão de Design</h3>
          <p>Antes que qualquer coisa física aconteça, meu engenheiro-chefe dedica 2–3 horas ao seu design. Ele verifica seis coisas:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Relação largura da armação vs. largura da lente.</strong> Se sua armação tem 140 mm de largura mas as lentes têm 60 mm, as proporções ficarão erradas. Ajustamos isso antes da confecção do molde.</li>
            <li><strong>Ângulo haste-frontal.</strong> As hastes precisam de um ângulo de abertura específico (geralmente 8–10°) para que a armação se ajuste corretamente ao rosto.</li>
            <li><strong>Posicionamento e tipo de dobradiça.</strong> Dobradiça de mola, de barril ou oculta? Cada uma requer uma cavidade de molde diferente. As de mola adicionam $0,15–0,30 por par mas reduzem quebras em cerca de 40%.</li>
            <li><strong>Design da ponte.</strong> Uma ponte de buraco de fechadura se ajusta diferente de uma ponte de sela. O molde precisa prever o posicionamento das plaquetas nasais.</li>
            <li><strong>Profundidade da ranhura da lente.</strong> Armações de acetato precisam de uma ranhura de 1,0–1,2 mm para inserção da lente. Muito rasa e a lente salta. Muito profunda e a borda racha.</li>
            <li><strong>Especificação do material.</strong> É acetato, TR90, metal ou uma combinação? Materiais diferentes significam oficinas de molde e custos diferentes.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">O Processo de Confecção de Moldes</h3>
          <p>Para armações de acetato, usamos moldes de aço usinados por CNC. Um molde para o frontal e dois para as hastes (esquerda e direita). Cada molde custa $300–800 dependendo da complexidade. Moldes simples Wayfarer estão na faixa baixa. Armações gatinho superdimensionadas com curvatura complexa estão na faixa alta.</p>
          <p>A confecção do molde leva <strong>4–5 dias úteis</strong>. A oficina CNC fresada a cavidade negativa em um bloco de aço, polida a superfície da cavidade (é isso que dá às armações de acetato seu acabamento brilhante direto do molde) e fazemos uma prensagem de teste para verificar rebarbas, marcas de afundamento e consistência de espessura.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>⚠️ Erro Comum:</strong> Já tive compradores que me enviaram um render 3D lindo na tela mas fisicamente impossível de moldar. O acetato não se curva em ângulos impossíveis. Se seu arquivo CAD tem uma haste que curva 90° com 2 mm de espessura, ela vai quebrar na curva. <strong>Sempre forneça uma vista de perfil no seu envio CAD.</strong></p>
          <p>Até sexta-feira da Semana 1, seus moldes estão prontos. Temos uma armação de teste em acetato branco cru — sem cor ainda, sem polimento, apenas a forma base. Tiro fotos de cinco ângulos e envio para sua aprovação. É o primeiro momento &quot;uau&quot; para a maioria dos novos donos de marca.</p>

          {/* Semana 2 */}
          <h2 id="week-2" className="text-3xl font-bold mt-16 mb-6">Semana 2: Fornecimento de Materiais e Primeiras Amostras</h2>
          <p>A Semana 2 é sobre materiais e cor. É a fase onde as coisas ou fluem suavemente ou cada dia vira um jogo de &quot;onde está minha remessa?&quot;</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Obtemos as Folhas de Acetato</h3>
          <p>Não fabricamos as folhas de acetato internamente. Ninguém faz — a fabricação de folhas de acetato é uma indústria separada. Os principais fornecedores são Mazzucchelli (Itália, premium), Daicel (Japão, médio a premium) e vários fabricantes chineses (províncias de Jiangsu e Zhejiang, boa relação custo-benefício). O prazo vai de <strong>retirada no mesmo dia para cores de estoque</strong> a <strong>5–7 dias para combinações de cores laminadas sob medida</strong>.</p>
          <p>A correspondência de cor personalizada é onde ocorrem a maioria dos atrasos. Se você quer &quot;tartaruga escura com um toque de âmbar&quot;, preciso de uma referência física — um código Pantone, uma amostra de tecido ou uma armação existente. Sem referência, espere pelo menos 3 dias extras de vai-e-vem.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>💡 Dica Pro:</strong> Envie uma amostra física de cor com seu pacote de design. Não importa se é um chip Pantone, um pedaço cortado de uma armação antiga ou um cartão pintado. Qualquer coisa física supera qualquer código hexadecimal — as cores da tela mentem. Perdi mais tempo com correspondência de cor por causa de monitores não calibrados do que com qualquer outro problema em 15 anos.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Componentes Metálicos e Ferragens</h3>
          <p>Dobradiças, parafusos, plaquetas nasais e núcleos das hastes vêm de fornecedores de componentes metálicos separados — geralmente em Dongguan ou Wenzhou. Dobradiças de barril padrão estão em estoque e são enviadas no mesmo dia. Dobradiças personalizadas com marca (com seu logo gravado a laser) adicionam 3–5 dias e uma taxa de ferramental de $100–200.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Primeiras Amostras de Montagem</h3>
          <p>Até quinta ou sexta-feira da Semana 2, as folhas de acetato chegaram, os moldes estão funcionando em qualidade de produção e produzimos suas primeiras amostras de montagem. São <strong>5–10 pares</strong> nas suas cores escolhidas, totalmente montados com lentes, dobradiças e parafusos. Ainda não estão polidos no padrão final — isso acontece na Semana 4 — mas dão a você uma sensação completa da armação: peso, proporções, tensão das hastes e como as cores aparecem sob luz natural.</p>

          {/* Semana 3 */}
          <h2 id="week-3" className="text-3xl font-bold mt-16 mb-6">Semana 3: Montagem e Controle de Qualidade</h2>
          <p>A Semana 3 é quando a fábrica fica movimentada. É a fase de montagem e envolve mais controles do que a maioria dos compradores imagina. Um único par de óculos de acetato passa por <strong>12 a 15 mãos</strong> durante a montagem, cada uma fazendo uma tarefa específica e verificando o trabalho da pessoa anterior.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Corte e Inserção das Lentes</h3>
          <p>As lentes são cortadas em uma retificadora CNC — não à mão. A máquina lê as dimensões da ranhura da armação do arquivo CAD e corta cada lente com tolerância de 0,1 mm. Um operador carrega e descarrega a máquina, mas o corte é automatizado. Após o corte, chanframos a borda da lente (um bisel de 45°) para que deslize na ranhura sem lascar.</p>
          <p>A inserção das lentes em armações de acetato requer calor. A parte frontal da armação é aquecida a cerca de 60 °C para amolecer o acetato o suficiente para a lente entrar sob pressão. Muito frio e a lente arranha a ranhura. Muito quente e a armação deforma. Nossos técnicos de inserção fazem isso há 8–15 anos — conhecem a temperatura exata para cada formulação de acetato.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Os Pontos de Controle de Qualidade (12–15 por Par)</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-6 text-gray-700">
            <li><strong>Verificação visual da armação</strong> — arranhões, bolhas, marcas na superfície frontal</li>
            <li><strong>Verificação visual das lentes</strong> — arranhões, uniformidade do revestimento, partículas de poeira incorporadas</li>
            <li><strong>Pressão de inserção da lente</strong> — medida com medidor de força, faixa alvo 8–15 N</li>
            <li><strong>Tensão de abertura das hastes</strong> — ambas as hastes devem abrir suavemente com resistência igual</li>
            <li><strong>Fechamento das hastes</strong> — ambas devem fechar completamente e ficar planas contra o frontal</li>
            <li><strong>Alinhamento das dobradiças</strong> — verificado em gabarito; ambas exatamente na mesma altura</li>
            <li><strong>Torque dos parafusos</strong> — cada parafuso apertado a 0,3–0,5 N·m, verificado com torquímetro</li>
            <li><strong>Simetria da armação</strong> — medida em gabarito de alinhamento com marcações de referência</li>
            <li><strong>Alinhamento da ponte</strong> — verificado contra a especificação CAD</li>
            <li><strong>Fixação das plaquetas nasais</strong> (armações de metal) — braços simétricos, plaquetas firmemente fixadas</li>
            <li><strong>Teste de transmissão UV</strong> — cada lote amostrado com espectrômetro UV; deve bloquear 99%+ UV</li>
            <li><strong>Verificação do eixo de polarização</strong> (se aplicável) — orientação correta do eixo</li>
            <li><strong>Teste de resistência ao suor</strong> (amostrado) — 24 horas em solução de suor artificial, verificar descoloração</li>
            <li><strong>Teste de queda</strong> (amostrado) — queda de 1,5 m sobre concreto, a armação deve sobreviver sem rachaduras</li>
            <li><strong>Inspeção final geral</strong> — varredura de 20 segundos sob iluminação de 1000 lux</li>
          </ol>
          <p>Os pares que falham em qualquer controle recebem uma etiqueta vermelha e são encaminhados para a estação de retrabalho. Se uma única estação produzir mais de 5% de falhas em um dia, o supervisor interrompe a linha e investiga — geralmente um problema de calibração da máquina ou um lote defeituoso de componentes.</p>
          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800"><strong>🔧 Dentro da Fábrica:</strong> A falha de QC mais comum em pedidos personalizados é a <strong>assimetria de tensão das hastes</strong>. Uma haste abre muito frouxa, a outra muito apertada. Isso acontece porque o ponto de inserção da dobradiça na cavidade do molde está ligeiramente deslocado — por apenas 0,2 mm. Detectamos nos controles 4 e 5, mas significa reusinar essa cavidade do molde. Por isso a revisão do molde na Semana 1 é tão importante.</p>
          <p>Até o final da Semana 3, todos os pares de produção do seu pedido de amostra estão totalmente montados e passaram pelo QC interno. São óculos de sol completos — mas ainda não parecem produto de varejo. As armações precisam do polimento final, e nada está embalado.</p>

          {/* Semana 4 */}
          <h2 id="week-4" className="text-3xl font-bold mt-16 mb-6">Semana 4: Acabamento, Embalagem e Preparação para Envio</h2>
          <p>A Semana 4 transforma a produção de fábrica em produto de marca. É aqui que as armações são polidas até o brilho de espelho, as lentes recebem uma limpeza final, seu logo é aplicado e tudo é embalado para o envio.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Polimento e Acabamento das Armações</h3>
          <p>O polimento do acetato é um processo de 3 etapas: primeiro, um polimento grosso com disco de algodão e composto de pedra-pomes para remover linhas de molde. Segundo, um polimento médio com disco mais macio e composto mais fino. Terceiro, um polimento brilhante final — é aqui que surge o efeito &quot;molhado&quot;. Cada par recebe cerca de <strong>4–6 minutos de polimento total</strong>, à mão em uma politriz de bancada.</p>
          <p>TR90 e metal pulam a etapa de polimento mas recebem um tratamento diferente. O TR90 tem acabamento fosco por padrão. O metal recebe galvanoplastia — ouro, prata, gunmetal, ouro rosa — um processo separado que adiciona 1–2 dias.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Aplicação do Logo</h3>
          <p>O logo da sua marca é aplicado nesta fase. As opções incluem:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Estampagem a quente</strong> — lâmina metálica prensada na haste ou lente. $0,05–0,15 por estampa.</li>
            <li><strong>Gravação a laser</strong> — queima o logo na superfície. Permanente e preciso. $0,10–0,25 por gravação.</li>
            <li><strong>Tampografia</strong> — tinta transferida via almofada de silicone. $0,08–0,20 por impressão.</li>
            <li><strong>Placa metálica rebitada</strong> — pequena placa com seu logo na haste. Sensação premium. $0,30–0,80 por placa.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Controle de Qualidade Final Antes da Embalagem</h3>
          <p>Antes que qualquer coisa entre em uma caixa, cada par recebe uma inspeção final. Diferente do QC em linha da Semana 3 — é uma verificação independente de aprovado/reprovado por um inspetor de QC sênior que não participou da produção daqueles pares específicos.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Envio e Logística</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Método</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Trânsito</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Custo</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 p-3 font-medium">Aéreo (DHL/UPS/FedEx)</td><td className="border border-gray-200 p-3">3–7 dias</td><td className="border border-gray-200 p-3">$2–4/kg</td><td className="border border-gray-200 p-3 text-sm">Amostras e pedidos &lt;50 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Ferrovia (para Europa)</td><td className="border border-gray-200 p-3">12–18 dias</td><td className="border border-gray-200 p-3">$1–1,50/kg</td><td className="border border-gray-200 p-3 text-sm">Pedidos médios UE</td></tr>
                <tr><td className="border border-gray-200 p-3 font-medium">Marítimo LCL</td><td className="border border-gray-200 p-3">20–35 dias</td><td className="border border-gray-200 p-3">$0,30–0,80/kg</td><td className="border border-gray-200 p-3 text-sm">Pedidos 50–500 kg</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Marítimo FCL (20 pés)</td><td className="border border-gray-200 p-3">20–35 dias</td><td className="border border-gray-200 p-3">$1.500–3.000/contêiner</td><td className="border border-gray-200 p-3 text-sm">Pedidos 2.000 kg+</td></tr>
              </tbody>
            </table>
          </div>
          <p>E é isso. Quatro semanas. Do esboço ao produto enviado. Parece rápido quando escrevo assim — e honestamente, é rápido. A razão pela qual conseguimos fazer isso é que executamos este processo desde 2006. Os moldes são cortados pela mesma oficina CNC com que trabalhamos há 12 anos. O acetato vem de fornecedores com quem temos contratos trimestrais. Quando tudo está dentro de casa e cada um conhece seu trabalho, 4 semanas não é uma correria — é simplesmente o prazo padrão.</p>

          {/* FAQ */}
          <section className="mb-12">
            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-8">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-700 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Tem um Esboço? Vamos Transformá-lo em Óculos de Sol</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Envie-nos seu design — arquivo CAD, foto ou esboço em guardanapo — e terá armações de amostra em mãos em 4 semanas. Acetato, TR90, metal, biomateriais. OEM completo com sua marca.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pt/contato/" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
                Inicie Seu Projeto
              </Link>
              <Link href="/pt/produtos/" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-colors border-2 border-primary-400">
                Ver Modelos Existentes
              </Link>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/pt/blog/guia-importacao-oculos-sol" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Importação</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guia de Importação de Óculos de Sol da China</h3>
                <p className="text-gray-600 text-sm">Processo passo a passo para importar óculos da China.</p>
              </Link>
              <Link href="/pt/blog/comparacao-materiais-armacoes" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fabricação</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">TR90 vs Acetato vs Metal: Qual Material Para Sua Marca?</h3>
                <p className="text-gray-600 text-sm">Dados reais de custos, comparações de peso e testes de durabilidade.</p>
              </Link>
              <Link href="/pt/blog/guia-moq-oculos-sol" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fornecimento</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Guia de Pedidos Mínimos para Óculos de Sol</h3>
                <p className="text-gray-600 text-sm">O que o MOQ realmente significa no nível da fábrica.</p>
              </Link>
              <Link href="/pt/blog/oem-vs-odm" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Fabricação</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">OEM vs ODM Óculos de Sol: Qual é a Diferença?</h3>
                <p className="text-gray-600 text-sm">Custos reais, prazos reais e um quadro de decisão que funciona.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
