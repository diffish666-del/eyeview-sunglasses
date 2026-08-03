import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats, ProsCons } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Óculos de Sol B2B vs B2C: Qual Modelo de Negócio Realmente Gera Dinheiro em 2026?',
  description: 'Um dono de fábrica que fornece tanto para atacadistas B2B quanto para marcas DTC compara os números reais: margens, fluxo de caixa, custos de aquisição de clientes e qual modelo sobrevive a uma crise.',
  keywords: ['negócio de óculos de sol B2B', 'marca eyewear B2C', 'atacado vs DTC óculos de sol', 'modelo de negócio óculos', 'margens de lucro eyewear', 'começar marca de óculos', 'estratégia DTC óculos'],
  alternates: {
    canonical: '/pt/blog/b2b-vs-b2c-oculos-sol',
  },
};

const takeaways = [
  'O B2B no atacado é um jogo de volume com 25–40% de margem bruta — previsível, de menor risco, mas você precisa de US$ 50K+ para começar e paciência para esperar 60–90 dias pelos prazos de pagamento líquido',
  'O DTC (direct-to-consumer) entrega 65–80% de margem bruta mas queima dinheiro em aquisição — a marca DTC média gasta US$ 18–35 para adquirir um cliente no Meta, e esse número sobe a cada trimestre',
  'O vencedor oculto que a maioria perde é o modelo híbrido: venda B2B para financiar operações, use DTC para construir valor de marca — as marcas fornecidas por fábrica que têm sucesso quase sempre começam pelo atacado',
  'O custo de aquisição de cliente (CAC) em eyewear DTC dobrou desde 2020 — um par de óculos de US$ 29 com CAC de US$ 25 te deixa com US$ 4 antes mesmo de pagar pelo produto, embalagem, frete ou devoluções',
  'O fluxo de caixa B2B é o assassino silencioso: prazos de pagamento líquido de 60 dias significam que você pode esperar 90 dias entre fazer o pedido na fábrica e ver a receita — planeje pelo menos 3 meses de capital de giro antes do seu primeiro pedido no atacado ser enviado',
  'A marca mínima viável custa US$ 8.000–15.000 para lançamento apenas no atacado vs. US$ 25.000–75.000 para DTC com um site profissional, orçamento de anúncios e estoque de segurança — e esse valor DTC pressupõe que você acerte os anúncios na primeira tentativa',
];

const quickStats = [
  { label: 'Margem Bruta B2B Atacado', value: '25–40% bruto' },
  { label: 'Margem Bruta DTC', value: '65–80%' },
  { label: 'CAC DTC (Meta Ads, 2026)', value: 'US$ 18–35/cliente' },
  { label: 'Capital Mínimo para Lançar B2B', value: 'US$ 8K–15K' },
  { label: 'Capital Mínimo para Lançar DTC', value: 'US$ 25K–75K' },
  { label: 'Prazos de Pagamento Líquido B2B', value: '30–90 dias' },
];

const faqs = [
  {
    question: 'Qual é mais lucrativo: B2B no atacado ou DTC para óculos de sol?',
    answer: 'Por unidade, o DTC é muito mais lucrativo — 65–80% de margem bruta vs. 25–40% no atacado. Mas lucratividade não é só margem; é margem menos custo de aquisição, menos devoluções, menos despesas gerais. Uma marca DTC que vende 1.000 pares/mês a US$ 59 com 70% de margem mas gastando US$ 25 de CAC por par está ganhando cerca de US$ 16,30/unidade antes das despesas gerais. Um atacadista B2B movimentando 10.000 pares a US$ 8 FOB para uma única rede varejista pode ganhar US$ 1,50/unidade, mas em uma única transação com zero gasto publicitário. Volume × margem, não apenas percentual de margem, determina qual modelo gera mais dinheiro.',
  },
  {
    question: 'Quanto dinheiro eu preciso para começar uma marca de óculos de sol?',
    answer: 'Para uma marca B2B apenas no atacado: US$ 8.000–15.000 cobrem amostras (3–5 estilos × US$ 50–100 cada), estoque inicial (300–500 unidades em 5 estilos a US$ 3–8/unidade FOB), branding básico, um site simples e viagem para uma feira do setor. Para uma marca DTC: US$ 25.000–75.000 cobrem tudo isso mais uma plataforma de e-commerce profissional, fotografia de produto profissional, 2–3 meses de orçamento de anúncios a US$ 3.000–10.000/mês, envio de produtos para influenciadores e um estoque de segurança maior (1.000–3.000 unidades). O maior erro que vejo são marcas lançando DTC com US$ 10K — elas ficam sem orçamento de anúncios antes de aprender o que funciona.',
  },
  {
    question: 'Posso fazer tanto B2B quanto DTC com a mesma marca?',
    answer: 'Sim, mas seja estratégico na precificação. Se você vende óculos no atacado a US$ 8 FOB para varejistas que os revendem a US$ 39,99, e também vende os mesmos modelos DTC no seu site a US$ 29,99, você acabou de minar seus parceiros varejistas. Os varejistas vão te abandonar. A jogada híbrida é: (1) vender SKUs diferentes no atacado vs. DTC, ou (2) vender ao preço de varejo sugerido no seu canal DTC e oferecer aos varejistas uma margem competitiva, ou (3) usar seu negócio de atacado para financiar seu crescimento DTC — construir a marca diretamente enquanto mantém relacionamentos com varejistas através de janelas de exclusividade ou coleções específicas por canal.',
  },
  {
    question: 'Qual é o maior custo oculto no modelo DTC de óculos de sol?',
    answer: 'Devoluções. A taxa média de devolução para eyewear online é de 15–25% — muito mais alta que na maioria das categorias DTC porque o ajuste é subjetivo. Cada par devolvido custa o frete de ida, frete de volta, inspeção, reembalagem e possíveis danos. Em um par de US$ 59 com US$ 4 de frete de ida, uma devolução pode custar US$ 12–15 em logística total. Se 20% dos pedidos voltam, isso é efetivamente um custo de US$ 2,40–3,00 por unidade que não aparece no seu demonstrativo de resultados inicial. Some a isso a fraude de chargeback (clientes alegando que nunca receberam o item), e sua margem DTC real pode encolher de 8 a 12 pontos percentuais.',
  },
  {
    question: 'Quanto tempo até uma marca de óculos de sol se tornar lucrativa?',
    answer: 'B2B no atacado: 6–12 meses para atingir lucratividade se você conseguir 2–3 contas varejistas decentes (pedidos de US$ 3K–10K cada) no primeiro trimestre. DTC: 12–24 meses é realista, e 18+ meses é comum. O primeiro ano de DTC é quase sempre no prejuízo — você está pagando para aprender quais criativos funcionam, quais audiências convertem e qual é seu CAC sustentável. Marcas que forçam lucratividade no 6º mês frequentemente cortam gastos com anúncios de forma muito agressiva e estagnam o crescimento. As marcas que têm sucesso tratam o primeiro ano como um investimento em dados e infraestrutura de aquisição de clientes.',
  },
];

const b2bPros = [
  'Receita previsível de contas de atacado recorrentes',
  'Zero gasto com anúncios — seus varejistas cuidam da aquisição de clientes',
  'Menor capital inicial necessário (US$ 8K–15K)',
  'Sem dor de cabeça com devoluções — os varejistas arcam com elas, não você',
  'Mais fácil de escalar — um único pedido de compra pode ser de 5.000+ unidades',
];

const b2bCons = [
  'Prazos de pagamento líquido de 60 dias = 90 dias entre o pedido e o dinheiro em caixa',
  'Margens de 25–40% deixam pouca margem para erro no preço de fábrica',
  'Você fica a um comprador de rede sair do emprego de perder 40% da receita',
  'Chargebacks e descontos de remarcação corroem sua receita líquida',
  'Valor de marca limitado: o cliente conhece o varejista, não você',
];

const dtcPros = [
  '65–80% de margem bruta — cada venda parece uma vitória',
  'Você é dono dos dados dos clientes, lista de email e valor da marca',
  'Controle criativo — sua visão, sua marca, sua precificação',
  'Potencial ilimitado — nenhum comprador bloqueando seu crescimento',
  'Múltiplos de saída mais altos — marcas DTC vendem por 2–4× a receita',
];

const dtcCons = [
  'CAC de US$ 18–35/cliente consome a maior parte dessa margem antes das despesas gerais',
  'Taxa de devolução de 15–25% em eyewear reduz a margem líquida em 8–12 pontos',
  'Exige conhecimento profundo em Meta Ads, email marketing e CRO',
  'US$ 25K–75K de capital mínimo para lançar; a maioria dos fundadores de primeira viagem erra nos cálculos de anúncios',
  'Sedento por dinheiro: você reinvestirá lucros em anúncios por 12–18 meses antes de ver renda líquida real',
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'b2b-vs-b2c-oculos-sol';

export default function B2BvsB2CSunglassesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/pt/' },
          { name: 'Blog', href: '/pt/blog/' },
          { name: 'Óculos de Sol B2B vs B2C: Qual Modelo de Negócio Realmente Gera Dinheiro' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Óculos de Sol B2B vs B2C: Qual Modelo de Negócio Realmente Gera Dinheiro em 2026?",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica que fornece tanto para atacadistas B2B quanto para marcas DTC compara os números reais: margens, fluxo de caixa, custos de aquisição de clientes e qual modelo sobrevive a uma crise.",
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

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Estratégia de Negócios</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Óculos de Sol B2B vs B2C: Qual Modelo de Negócio Realmente Gera Dinheiro em 2026?
          </h1>
          <p className="text-xl text-gray-600">
            Eu vi marcas tentarem os dois caminhos do chão de fábrica. Algumas estão fazendo US$ 2M/ano agora. Outras queimaram seis dígitos e desapareceram. Aqui estão os números que separam esses dois destinos.
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
            <li><a href="#the-real-numbers" className="text-primary-600 hover:underline">Os Números Reais: Economia Unitária B2B vs B2C</a></li>
            <li><a href="#b2b-deep" className="text-primary-600 hover:underline">B2B Atacado: O Construtor de Impérios de Fogo Lento</a></li>
            <li><a href="#dtc-deep" className="text-primary-600 hover:underline">DTC: Margens Altas, Riscos Altos</a></li>
            <li><a href="#hybrid" className="text-primary-600 hover:underline">O Modelo Híbrido: Por Que as Marcas Mais Inteligentes Fazem os Dois</a></li>
            <li><a href="#which-for-you" className="text-primary-600 hover:underline">Qual Modelo se Encaixa na Sua Situação?</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="B2B vs DTC em um Piscar de Olhos" />

          {/* ─── Section 1: The Real Numbers ─── */}
          <h2 id="the-real-numbers" className="text-3xl font-bold mt-16 mb-6">Os Números Reais: Economia Unitária B2B vs B2C</h2>
          <p>Deixe-me guiá-lo por um par real de óculos de sol. Não hipotético. Uma armação esportiva TR90 com lentes polarizadas — um dos nossos modelos de atacado mais vendidos. Preço FOB de fábrica para 500 unidades: <strong>US$ 4,80</strong> por par, incluindo branding básico e uma bolsa de microfibra.</p>

          <p>Se você vender esse par no <strong>atacado B2B</strong> para um varejista a US$ 8,00 por unidade, sua margem bruta é de 40%. O varejista o revende a US$ 29,99 e fica com a própria margem. Você ganha US$ 3,20 por par, multiplicado pelo número de unidades que o varejista comprar. Um pedido de rede de 2.000 unidades = US$ 6.400 de lucro bruto com praticamente zero custo de marketing além da sua prospecção inicial.</p>

          <p>Se você vender o mesmo par <strong>DTC</strong> a US$ 49,99 no seu próprio site, sua margem bruta é de 90,4% sobre o custo das mercadorias. Parece incrível. Mas aqui está o que realmente acontece: o anúncio no Facebook/Instagram para adquirir esse cliente custa em média US$ 22. Processamento de cartão de crédito: US$ 1,45. Embalagem premium para unboxing DTC: US$ 1,20. Frete de saída: US$ 4,50. Você já está em US$ 29,15 de custos antes de pagar pelo seu site, sua plataforma de email, suas fotos de produto ou seu próprio salário. Essa margem de 90% se torna 42% líquida antes das despesas gerais — ainda boa, mas não é &quot;vou me aposentar com isso&quot;, e apenas se seus anúncios converterem consistentemente.</p>

          <p>Há três anos, tive um cliente chamado Marcus que lançou uma marca DTC com um dos nossos modelos de acetato a US$ 69 no varejo. Nos primeiros três meses, o CAC era de US$ 14 e ele estava eufórico. No sexto mês, as mudanças de privacidade do iOS tinham degradado sua segmentação e o CAC subiu para US$ 31. Ele estava perdendo US$ 7 em cada novo cliente. Ele migrou para o atacado — mesmas armações, mesmo branding — e em quatro meses estava presente em 12 óticas independentes na Califórnia, fazendo US$ 35K/mês com 35% de margem e zero gasto com anúncios. Ele ainda mantém um site DTC, mas agora é uma vitrine de marca que direciona para seus revendedores, não seu principal motor de receita.</p>

          {/* ─── Section 2: B2B Deep Dive ─── */}
          <h2 id="b2b-deep" className="text-3xl font-bold mt-16 mb-6">B2B Atacado: O Construtor de Impérios de Fogo Lento</h2>

          <p>O atacado B2B não é sexy. Você não verá marcas de atacado no TechCrunch. Não existem influenciadores &quot;fundador de atacado&quot; no TikTok. Mas entre em qualquer Sunglass Hut, qualquer ótica independente, qualquer loja de souvenirs de resort — cada par nessas prateleiras passou por uma cadeia de suprimentos de atacado. Alguém fez 25–40% de margem nessa venda, e fez isso sem gastar um centavo em anúncios no Instagram.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Como o B2B Realmente Funciona</h3>
          <p>Você adquire óculos de sol de uma fábrica (ou você é a fábrica). Você monta um catálogo — tipicamente 20–50 modelos em 3–5 cores cada. Você identifica compradores varejistas: redes de óticas, boutiques independentes, lojas de souvenirs de resort, linhas de cruzeiro, compradores de brindes corporativos, distribuidores de produtos promocionais. Você envia amostras, negocia preços e despacha contra pedidos de compra. Pedido típico: 100–500 unidades por modelo. Ciclo típico de reposição: a cada 3–6 meses por conta.</p>
          <p>A mágica do B2B são as <strong>contas que se acumulam</strong>. Consiga cinco contas fazendo US$ 5K cada por trimestre, e você está com US$ 100K de receita anual com despesas de marketing quase zero. Consiga vinte contas nesse nível, e você está com US$ 400K. O fator limitante não é o orçamento de anúncios — é quantos compradores você consegue colocar no telefone.</p>

          <ProsCons good={b2bPros} bad={b2bCons} title="B2B Atacado" />

          <h3 className="text-2xl font-bold mt-10 mb-4">A Armadilha do Fluxo de Caixa no B2B</h3>
          <p>Aqui está o que os números de margem não contam: o B2B funciona a crédito. Você paga à sua fábrica 30% de entrada para iniciar a produção, 70% antes do embarque. Enquanto isso, seu cliente varejista te paga em 30 ou 60 dias líquidos. Tradução: você pode pagar US$ 12.000 à fábrica na primeira semana e não receber um dólar do seu cliente até a décima segunda semana. Se você tiver três pedidos em andamento simultaneamente — que é como o crescimento se parece — você pode ter US$ 36.000+ do seu próprio dinheiro empatado a qualquer momento.</p>
          <p>É por isso que eu digo aos empreendedores de atacado de primeira viagem: tenha seis meses de capital de giro antes de aceitar seu primeiro pedido. Não três meses. Seis. Porque o comprador que prometeu um pedido de compra em março pode não assinar até maio, e o departamento financeiro dele pode levar mais 45 dias para emitir seu primeiro cheque. Você está tocando um negócio, não uma instituição de caridade, e lacunas de fluxo de caixa matam empresas mais rápido do que produtos ruins jamais matarão.</p>

          {/* ─── Section 3: DTC Deep Dive ─── */}
          <h2 id="dtc-deep" className="text-3xl font-bold mt-16 mb-6">DTC: Margens Altas, Riscos Altos</h2>

          <p>Todos os donos de fábrica na China já viram uma marca DTC explodir de um pedido teste de US$ 3.000 para um pedido mensal de US$ 50.000 em seis meses. Acontece. Também é a exceção, não a regra. Para cada Warby Parker, existem 500 marcas das quais você nunca ouviu falar que queimaram seu capital de lançamento e fecharam silenciosamente.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">A Matemática DTC Que Ninguém Posta no LinkedIn</h3>
          <p>Um par de óculos de US$ 59. Custo das mercadorias: US$ 5,00 entregue. Margem bruta: 91,5%. Fica lindo num pitch deck.</p>
          <p>Custos reais por unidade vendida DTC:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Óculos (FOB + frete): <strong>US$ 5,00</strong></li>
            <li>Embalagem premium (caixa personalizada, bolsa, pano de limpeza, cartão de agradecimento): <strong>US$ 2,20</strong></li>
            <li>Aquisição de cliente (Meta/Google/TikTok combinados): <strong>US$ 22,00</strong></li>
            <li>Processamento de cartão (2,9% + US$ 0,30): <strong>US$ 2,01</strong></li>
            <li>Frete de saída (média USPS/UPS): <strong>US$ 4,80</strong></li>
            <li>Reserva para devoluções (20% de taxa de devolução × US$ 12 de custo por devolução): <strong>US$ 2,40</strong></li>
          </ul>
          <p>Custo total por unidade vendida: <strong>US$ 38,41</strong>. Contribuição líquida por unidade: US$ 20,59. Isso é uma margem líquida de 35% — ainda saudável, mas a anos-luz dos 91,5% de margem bruta que todo mundo cita. E esses US$ 20,59 precisam cobrir sua assinatura do Shopify, sua plataforma de email Klaviyo, fotografia de produto, envio para influenciadores, desenvolvimento do site, seu salário e o lucro. De repente, vender 1.000 pares por mês com contribuição de US$ 20,59 = US$ 20.590 para cobrir todas as despesas gerais. Se seus custos fixos mensais são US$ 12.000 (salário, software, prestadores de serviço, armazém), seu lucro líquido é US$ 8.590. Nada mal. Mas você vendeu US$ 59.000 em produtos para chegar lá.</p>

          <ProsCons good={dtcPros} bad={dtcCons} title="Óculos de Sol DTC" />

          <h3 className="text-2xl font-bold mt-10 mb-4">O Imposto das Plataformas de Anúncios</h3>
          <p>Marcas DTC não competem em produto — elas competem em atenção. E atenção em 2026 é cara. Os CPMs do Meta (custo por mil impressões) na categoria eyewear subiram de US$ 12–18 em 2020 para US$ 28–45 em 2026. O mesmo dólar de anúncio compra metade das impressões que comprava cinco anos atrás. O TikTok oferece CPMs mais baixos, mas taxas de conversão notoriamente instáveis — ótimo para reconhecimento de marca, péssimo para ROAS previsível.</p>
          <p>As marcas que estão vencendo no DTC em 2026 não são as com os melhores anúncios. São as com a melhor <strong>retenção</strong>. Se seu cliente médio compra 1,0 vez e desaparece, você quase certamente perderá dinheiro na primeira compra e nunca o recuperará. Se seu cliente médio compra 2,5 vezes ao longo de dois anos — através de compras repetidas, campanhas de email e lançamentos de novas coleções — a matemática se inverte. As melhores marcas DTC de eyewear que forneço têm taxa de recompra acima de 30% em 12 meses. As que fracassam ficam estagnadas abaixo de 10%.</p>

          {/* ─── Section 4: Hybrid Model ─── */}
          <h2 id="hybrid" className="text-3xl font-bold mt-16 mb-6">O Modelo Híbrido: Por Que as Marcas Mais Inteligentes Fazem os Dois</h2>

          <p>Existe um terceiro caminho que não recebe atenção suficiente: atacado primeiro, DTC depois. Aqui está o porquê de funcionar.</p>
          <p>Você lança como marca de atacado. Você coloca seus óculos em 10–15 varejistas independentes que cuidam do trabalho de frente com o cliente. Você constrói fluxo de caixa — pedidos de compra previsíveis com 35% de margem e zero gasto com anúncios. Você aprende quais modelos vendem, quais cores saem e o que os clientes realmente querem — dados que chegam gratuitamente dos seus parceiros varejistas em vez de custarem US$ 22 por ponto de dado em testes de anúncios.</p>
          <p>Após 12–18 meses, você tem uma linha de produtos validada, um nome de marca reconhecível (porque seu logo está em 15 prateleiras de lojas) e capital operacional dos lucros do atacado. Agora você lança o DTC — não como uma aposta desesperada, mas como uma expansão estratégica. Seu negócio de atacado financia seus testes de anúncios. Sua presença no varejo dá credibilidade ao seu site. Seus clientes existentes podem comprar de você na boutique local deles E online. E porque você não está queimando capital de risco para sobreviver, você pode se dar ao luxo de ser paciente com seu crescimento DTC.</p>
          <p>Eu vi esse manual exato funcionar para pelo menos seis marcas que forneço. Elas começaram com um pedido de atacado de US$ 10K, cresceram para US$ 200K–400K em receita de atacado ao longo de 18–24 meses, e então lançaram DTC de uma posição de força. Nenhuma delas é famosa. Todas são lucrativas.</p>

          {/* ─── Section 5: Which Model Fits You ─── */}
          <h2 id="which-for-you" className="text-3xl font-bold mt-16 mb-6">Qual Modelo se Encaixa na Sua Situação?</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">Vá de Atacado Primeiro Se:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Você tem US$ 8.000–15.000 e uma boa rede de contatos no varejo, hotelaria ou brindes corporativos</li>
            <li>Você prefere passar tempo no telefone com 50 compradores do que otimizando anúncios no Facebook</li>
            <li>Você quer receita previsível e composta sem o risco de plataforma das mudanças de algoritmo do Meta/Google</li>
            <li>Você está bem com crescimento mais lento e margens unitárias menores em troca de um risco drasticamente menor</li>
            <li>Você planeja eventualmente lançar DTC e quer uma pista financiada para testar anúncios sem queimar suas próprias economias</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Vá de DTC Primeiro Se:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Você tem US$ 25.000–75.000 em capital de lançamento e está confortável em perder dinheiro por 12–18 meses</li>
            <li>Você tem conhecimento profundo (ou um co-fundador com conhecimento profundo) em mídia social paga, email marketing e otimização de taxa de conversão</li>
            <li>Seu conceito de marca é visualmente distinto o suficiente para parar um dedo no meio do scroll — &quot;óculos premium para pessoas estilosas&quot; genérico não vai funcionar</li>
            <li>Você tem um motor de conteúdo: história do fundador, conteúdo de bastidores da fábrica, UGC de lifestyle — marcas DTC vivem e morrem pela velocidade criativa</li>
            <li>Seu objetivo é uma saída em escala de venture (múltiplo de 50×+ a receita) em vez de um negócio de estilo de vida — DTC pode escalar mais rápido que o atacado quando funciona</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Vá de Híbrido Se:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Você tem experiência em atacado ou acesso a compradores varejistas, mas também quer construir valor de marca de longo prazo</li>
            <li>Você consegue gerenciar conflito de canais — SKUs diferentes por canal, precificação MAP, janelas de exclusividade para varejistas</li>
            <li>Você é paciente: 18–24 meses construindo o atacado, depois lançamento DTC de uma posição de força no fluxo de caixa</li>
          </ul>

          {/* ═══════ FAQ SECTION ═══════ */}
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
            <h2 className="text-3xl font-bold mb-4">Pronto para Fabricar Sua Primeira Coleção?</h2>
            <p className="text-xl mb-6 opacity-90">Seja lançando no atacado, DTC ou híbrido — nós ajudamos você a construir a linha de produtos certa para seu modelo de negócio. MOQ a partir de 100 peças por modelo.</p>
            <Link
              href="/pt/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar um Orçamento Grátis
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais do Chão de Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/wholesale-sunglasses-pricing-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Preços de Óculos no Atacado 2026</h3>
                <p className="text-gray-600 text-sm">Preços reais direto de fábrica por material, estilo e quantidade.</p>
              </Link>
              <Link href="/blog/start-sunglasses-brand" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Começar uma Marca de Óculos</h3>
                <p className="text-gray-600 text-sm">O roteiro completo do conceito à primeira venda.</p>
              </Link>
              <Link href="/blog/sunglasses-pricing-strategy" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Estratégia de Preços para Óculos</h3>
                <p className="text-gray-600 text-sm">Como precificar sua linha para atacado, varejo e DTC.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
