import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Taxas de Importação de Óculos de Sol 2026: Tarifas para EUA, UE, Reino Unido, Austrália, Canadá',
  description: 'Guia completo de taxas de importação para óculos de sol. Códigos SH, tarifas por país, acordos de livre comércio e como calcular o custo de importação. Guia prático do dono de fábrica para economizar na alfândega.',
  keywords: ['taxas importação óculos sol', 'tarifas alfandegárias óculos', 'código SH óculos sol', 'calculadora imposto importação', 'desembaraço aduaneiro óculos', 'imposto importação eyewear', 'tarifa EUA óculos', 'direito UE óculos'],
  alternates: {
    canonical: '/pt/blog/taxas-importacao-oculos-sol',
  },
};

const takeaways = [
  'Código SH 9004.10: Óculos de sol se enquadram neste código harmonizado globalmente — tarifa EUA 2,0%, UE 2,9%, Reino Unido 2,0%, Austrália 5,0% (mas frequentemente 0% via ALCs), Canadá 0% sob regras do CPTPP',
  'O maior custo não é a tarifa — são as taxas de frete e despachante. Um envio de óculos de $5.000 pode pagar $100 em tarifas, mas $400 em honorários do transitário. Escolha seu parceiro logístico com cuidado.',
  'O Certificado de Origem é sua ferramenta mais poderosa para redução de tarifas. Se seus óculos são fabricados na China (ou Vietnã/Índia), você pode reivindicar taxas preferenciais sob vários ALCs — mas apenas com a documentação adequada',
  'As tarifas da Seção 301 sobre óculos chineses (SH 9004.10.0000) adicionaram 7,5% sobre a taxa base de 2,0% para importações nos EUA em 2026 — a taxa efetiva total é de 9,5%, a menos que você se qualifique para uma exclusão',
  'Fórmula do custo total: (Preço FOB × Quantidade + Frete + Seguro) × (1 + Taxa de Direito) + Despachante + Taxas Portuárias + Entrega Final. A maioria dos novos importadores subestima em 15-20% no primeiro pedido',
  'Os limites de valor importam: o de minimis dos EUA é $800 (envios abaixo pagam taxa zero), o sistema IOSS da UE permite IVA pré-cobrado em 150 € ou menos, Reino Unido tem limite de £135. Estruture pequenos pedidos de amostra para ficar abaixo destes limites',
];

const quickStats = [
  { label: 'Tarifa Base EUA (SH 9004.10)', value: '2,0%' },
  { label: 'Sobretaxa Seção 301 EUA', value: '+7,5%' },
  { label: 'Taxa de Direito UE', value: '2,9%' },
  { label: 'Taxa de Direito Reino Unido', value: '2,0%' },
  { label: 'Taxa de Direito Austrália', value: '5,0% (0% com CoO)' },
  { label: 'Taxa de Direito Canadá', value: '0% (CPTPP)' },
];

const faqs = [
  {
    question: 'Qual é o código SH para óculos de sol?',
    answer: 'Óculos de sol são classificados sob o Código SH 9004.10 — "Óculos, óculos de proteção e artigos semelhantes, corretivos, protetores ou outros, óculos de sol." Este é o código harmonizado usado globalmente. A subposição específica dos EUA é 9004.10.0000. Para óculos de sol com grau, use 9004.90.0000. Para óculos de segurança/industriais, use 9004.90.0090. Sempre confirme com seu despachante aduaneiro — penalidades por classificação incorreta começam em 2× o direito devido.',
  },
  {
    question: 'Quanto de imposto de importação pago em óculos de sol da China para os EUA?',
    answer: 'O direito base dos EUA para SH 9004.10 é de 2,0%. No entanto, as tarifas da Seção 301 sobre produtos de origem chinesa adicionam 7,5% (em 2026), elevando a taxa efetiva para 9,5%. Em um envio FOB de $10.000, são $950 em direitos antes de adicionar frete, seguro e taxas de despachante. Se você fabrica no Vietnã, Índia ou Bangladesh, evita totalmente a sobretaxa da Seção 301 — apenas os 2,0% base se aplicam.',
  },
  {
    question: 'Qual é o direito de importação da UE sobre óculos de sol da China?',
    answer: 'A UE aplica uma taxa de direito de 2,9% sobre óculos de sol SH 9004.10 da China. Sem tarifas adicionais além da taxa padrão. Para um envio de 8.000 €, são aproximadamente 232 € em direitos. A UE não tem equivalente à Seção 301. No entanto, o IVA se aplica à taxa do país de destino (19-27% dependendo do Estado-Membro). Use o sistema IOSS (Balcão Único de Importação) para envios abaixo de 150 € para pré-cobrar o IVA e agilizar o desembaraço aduaneiro.',
  },
  {
    question: 'Preciso de um Certificado de Origem para reduzir os direitos de importação?',
    answer: 'Sim — o Certificado de Origem (CoO) é o documento mais importante para redução de direitos. Para importações nos EUA da China, um CoO não reduz atualmente a sobretaxa da Seção 301, mas é essencial para reivindicações de ALC com outras origens. Para importações na Austrália, Canadá ou Reino Unido sob o CPTPP ou ALCs bilaterais, um CoO válido pode reduzir o direito para 0%. Sua fábrica deve fornecê-lo como parte dos documentos de envio — se não puderem ou não quiserem, encontre outro fornecedor. O CoO deve ser carimbado pelo CCPIT (Conselho Chinês para a Promoção do Comércio Internacional) para ser válido, o que custa cerca de $30-50 e leva 2-3 dias úteis.',
  },
  {
    question: 'Como calculo o custo total de importação para um pedido de óculos de sol?',
    answer: 'Custo total = Preço FOB × Quantidade + Frete Marítimo (ou Aéreo) + Seguro (tipicamente 0,3-0,5% do valor CIF) + Direito Aduaneiro (% do CIF) + Taxa de Despachante ($75-200 por entrada) + Taxas Portuárias/Destino + Entrega Final. Exemplo: 1.000 pares a $5/par FOB = $5.000. Frete marítimo = $600. Seguro = $28. CIF = $5.628. Direito EUA a 9,5% = $535. Despachante = $125. Taxas portuárias = $85. Entrega = $250. Custo total = $6.623. Custo por unidade = $6,62. Sempre adicione uma margem de 5-10% para flutuação cambial e taxas inesperadas.',
  },
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'taxas-importacao-oculos-sol';

export default function TaxasImportacaoOculosSolPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/pt/' },
          { name: 'Blog', href: '/pt/blog/' },
          { name: 'Taxas de Importação de Óculos de Sol 2026' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Taxas de Importação de Óculos de Sol 2026: Tarifas para EUA, UE, Reino Unido, Austrália, Canadá",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Guia completo de taxas de importação para óculos de sol. Códigos SH, tarifas por país, acordos de livre comércio e como calcular o custo de importação. Guia prático do dono de fábrica para economizar na alfândega.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Importação e Logística</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>13 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Taxas de Importação de Óculos de Sol 2026: Tarifas País por País
          </h1>
          <p className="text-xl text-gray-600">
            Após 20 anos enviando óculos da China para mais de 50 países, aqui está a verdade sobre as tarifas — os números, os atalhos e a documentação que realmente economiza seu dinheiro.
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
            <li><a href="#hs-codes" className="text-primary-600 hover:underline">Códigos SH para Óculos de Sol: Acertando na Classificação</a></li>
            <li><a href="#us-duties" className="text-primary-600 hover:underline">Direitos de Importação nos EUA: Seção 301 e a Realidade dos 9,5%</a></li>
            <li><a href="#eu-duties" className="text-primary-600 hover:underline">Direitos de Importação na UE: Tarifas Baixas, IVA Alto</a></li>
            <li><a href="#uk-au-ca" className="text-primary-600 hover:underline">Reino Unido, Austrália e Canadá: Oportunidades de ALC</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">Como Calcular o Custo Total (Com Números Reais)</a></li>
            <li><a href="#duty-reduction" className="text-primary-600 hover:underline">7 Maneiras de Reduzir Seus Direitos de Importação</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="Taxas de Direitos de Importação de Óculos de Sol em Resumo" />

          {/* ─── Section 1: HS Codes ─── */}
          <h2 id="hs-codes" className="text-3xl font-bold mt-16 mb-6">Códigos SH para Óculos de Sol: Acertando na Classificação</h2>
          <p>
            Antes de falarmos sobre taxas, vamos esclarecer uma coisa: se seu despachante aduaneiro registra o código SH errado, você não está economizando dinheiro — está criando um passivo. Já vi importadores tentarem classificar óculos de sol como &quot;acessórios de plástico&quot; (SH 3926) para obter uma taxa mais baixa, e a CBP pegou todos eles.
          </p>
          <p>
            Óculos de sol se enquadram no <strong>SH 9004.10</strong> — &quot;Óculos, óculos de proteção e artigos semelhantes, corretivos, protetores ou outros, óculos de sol.&quot; Este código é harmonizado globalmente, o que significa que cada país usa os mesmos seis primeiros dígitos. As principais sub-classificações:
          </p>
          <ul>
            <li><strong>9004.10.0000 (EUA):</strong> Óculos de sol — sem grau, incluindo óculos de moda e esportivos</li>
            <li><strong>9004.90.0000 (EUA):</strong> Outros óculos — óculos de sol com grau, óculos de segurança, óculos de leitura</li>
            <li><strong>9004.10.1000 (UE):</strong> Óculos de sol com lentes opticamente trabalhadas</li>
            <li><strong>9004.10.9100 (UE):</strong> Óculos de sol com lentes simplesmente moldadas (a maioria das exportações chinesas entra aqui)</li>
          </ul>
          <p>
            <strong>Dica profissional do chão de fábrica:</strong> Se seus óculos de sol têm proteção UV400 (que os nossos têm por padrão), eles ainda entram sob 9004.10. A distinção &quot;corretivo vs. protetor&quot; só importa se você estiver importando óculos com grau. A maioria dos pedidos de óculos no atacado de fornecedores como a EyeView é classificada corretamente como 9004.10, independentemente das características das lentes.
          </p>

          {/* ─── Section 2: US Duties ─── */}
          <h2 id="us-duties" className="text-3xl font-bold mt-16 mb-6">Direitos de Importação nos EUA: Seção 301 e a Realidade dos 9,5%</h2>
          <p>
            Os Estados Unidos são o maior mercado para importações de óculos de sol — e o mais caro em termos de direitos se você estiver comprando da China. Aqui está o detalhamento:
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Taxa NMF Base: 2,0%</h3>
          <p>
            Sob relações comerciais normais (NMF), HS 9004.10.0000 tem um direito ad valorem de 2,0%. São $20 por $1.000 de valor declarado. Nada mal.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Sobretaxa da Seção 301: +7,5%</h3>
          <p>
            É aqui que fica caro. As tarifas da Seção 301 — impostas sobre produtos de origem chinesa desde 2018 — aplicam 7,5% adicionais sobre HS 9004.10.0000 em 2026. A taxa original de 25% foi reduzida para 7,5% em 2020 e permaneceu lá. <strong>Direito total efetivo dos EUA sobre óculos chineses: 9,5%.</strong>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <p className="font-bold text-amber-800 mb-2">⚠️ A Seção 301 se Aplica ao País de Origem, Não ao País de Embarque</p>
            <p className="text-amber-700 text-sm">Se seus óculos são fabricados na China, mas enviados de um armazém em Hong Kong, a Seção 301 ainda se aplica. A Alfândega dos EUA analisa onde as mercadorias foram feitas, não de onde foram carregadas no navio. A única maneira de evitar a Seção 301 é fabricar totalmente fora da China.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">De Minimis: O Atalho dos $800</h3>
          <p>
            Sob a Seção 321, envios avaliados em $800 ou menos entram nos EUA livres de direitos — incluindo mercadorias da Seção 301. É assim que muitas marcas pequenas começam: peça 50-100 pares como amostras, divida em vários envios abaixo de $800 cada, e pague zero de direito. É completamente legal, desde que cada envio esteja genuinamente abaixo do limite e você não esteja dividindo pedidos artificialmente para evitar direitos (isso é chamado de &quot;abuso estruturado de minimis&quot; e a CBP está reprimindo).
          </p>

          {/* ─── Section 3: EU Duties ─── */}
          <h2 id="eu-duties" className="text-3xl font-bold mt-16 mb-6">Direitos de Importação na UE: Tarifas Baixas, IVA Alto</h2>
          <p>
            A UE é refrescantemente simples comparada aos EUA — sem Seção 301, sem sobretaxas de guerra comercial. Mas o IVA é onde o custo real se esconde.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Direito Padrão: 2,9%</h3>
          <p>
            Sob a Pauta Aduaneira Comum da UE (TARIC), HS 9004.10.9100 (óculos de sol com lentes simplesmente moldadas, que cobre a maioria das importações no atacado) tem uma taxa de direito de 2,9%. Isso é menos da metade da taxa efetiva dos EUA. Para um pedido avaliado em 10.000 € CIF, você paga 290 € em direitos.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IVA: O Custo Real</h3>
          <p>
            Isto é o que pega os novos importadores: a UE adiciona IVA sobre o valor com direitos pagos. Se suas mercadorias chegam na Alemanha (19% de IVA), o cálculo é:
          </p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 font-mono text-sm">
            <p>Valor CIF: 10.000 €</p>
            <p>Direito (2,9%): +290 €</p>
            <p>Valor com Direitos: 10.290 €</p>
            <p>IVA (19%): +1.955 €</p>
            <p className="font-bold">Total na Alfândega: 12.245 €</p>
          </div>
          <p>
            <strong>Importante:</strong> O IVA geralmente é recuperável se você for uma empresa registrada para IVA. Você paga na importação e recupera na sua próxima declaração de IVA. Mas precisa de fluxo de caixa para cobrir o intervalo de 90-120 dias entre o pagamento e o reembolso.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IOSS: IVA Pré-Pago para Pequenos Pedidos</h3>
          <p>
            O Balcão Único de Importação (IOSS) permite pré-cobrar o IVA no ponto de venda para envios abaixo de 150 €. O comprador paga o IVA no checkout, você o remete mensalmente a uma única autoridade fiscal da UE, e as mercadorias passam pela alfândega sem que o destinatário pague nada na entrega. A EyeView suporta faturamento compatível com IOSS — nos avise no momento do pedido e formataremos sua fatura comercial de acordo.
          </p>

          {/* ─── Section 4: UK, AU, CA ─── */}
          <h2 id="uk-au-ca" className="text-3xl font-bold mt-16 mb-6">Reino Unido, Austrália e Canadá: Oportunidades de ALC</h2>
          <p>
            Estes três mercados têm as melhores oportunidades de redução de direitos se você conhecer os acordos comerciais.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Reino Unido: 2,0% Base, SPG Disponível</h3>
          <p>
            Após o Brexit, o Reino Unido aplica um direito de 2,0% sobre óculos de sol HS 9004.10. Sob o Esquema de Preferências Generalizadas do Reino Unido (SPG), produtos da China se qualificam para taxas preferenciais — mas a margem de preferência no 9004.10 é zero (a taxa NMF já é o piso do SPG). O que muda o cálculo: o Esquema de Comércio para Países em Desenvolvimento (DCTS) do Reino Unido oferece 0% de direito para óculos fabricados em 65 países elegíveis, incluindo Índia e Paquistão. Se você conseguir armações de acetato de uma fábrica indiana, o direito britânico cai para zero.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Austrália: 5,0% Padrão, 0% Sob ALC</h3>
          <p>
            A tarifa padrão da Austrália sobre HS 9004.10 é de 5,0% — a mais alta entre os principais mercados. Mas o Acordo de Livre Comércio China-Austrália (ChAFTA) eliminou as tarifas sobre óculos de sol em 2019. <strong>Com um Certificado de Origem válido, o direito australiano é 0%.</strong> Cada cliente australiano para quem enviei economiza os 5% completos com a documentação CoO adequada. A papelada custa $35 no CCPIT e leva 3 dias. Para um pedido de $20.000, são $1.000 economizados.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Canadá: 0% Sob CPTPP</h3>
          <p>
            O Canadá eliminou as tarifas sobre óculos de sol de origem chinesa sob o Acordo Abrangente e Progressivo para a Parceria Transpacífica (CPTPP). <strong>Importadores canadenses pagam 0% de direito sobre HS 9004.10 da China</strong> — uma das poucas categorias onde a relação comercial China-Canadá favorece o importador. Apenas certifique-se de que sua fatura comercial indique claramente o país de origem como China e o código SH como 9004.10.
          </p>

          {/* ─── Section 5: Landed Cost ─── */}
          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">Como Calcular o Custo Total (Com Números Reais)</h2>
          <p>
            A maioria dos novos importadores olha para o preço FOB por unidade e pensa que esse é o custo deles. Não é. Aqui está um cálculo real de custo total para um pedido típico:
          </p>

          <div className="bg-gray-100 rounded-lg p-6 my-6 font-mono text-sm space-y-1">
            <p className="font-bold text-base mb-3">Exemplo: 1.000 Pares de Óculos de Acetato → EUA</p>
            <p>Preço FOB (1.000 × $5,00): <span className="float-right">$5.000,00</span></p>
            <p>Frete Marítimo (LCL, Xangai→LA): <span className="float-right">+$600,00</span></p>
            <p>Seguro Marítimo (0,5% do CIF): <span className="float-right">+$28,00</span></p>
            <p className="border-t border-gray-300 pt-1">Valor CIF (Base Aduaneira): <span className="float-right">$5.628,00</span></p>
            <p>Direito EUA (9,5% do CIF): <span className="float-right">+$534,66</span></p>
            <p>Taxa de Despachante Aduaneiro: <span className="float-right">+$125,00</span></p>
            <p>MPF (Taxa de Processamento de Mercadoria): <span className="float-right">+$29,66</span></p>
            <p>HMF (Taxa de Manutenção Portuária, 0,125%): <span className="float-right">+$7,04</span></p>
            <p>Taxas Portuárias/CFS: <span className="float-right">+$85,00</span></p>
            <p>Transporte Última Milha (Porto→Armazém): <span className="float-right">+$250,00</span></p>
            <p className="border-t border-gray-300 pt-1 font-bold">Custo Total: <span className="float-right">$6.659,36</span></p>
            <p className="font-bold text-primary-600">Custo Total Por Par: <span className="float-right">$6,66</span></p>
          </div>

          <p>
            Aquele par de $5,00 FOB na verdade custa $6,66 quando chega ao seu armazém — um acréscimo de 33% sobre o preço de fábrica. E este é o melhor cenário com frete marítimo. O frete aéreo adicionaria $800-1.200, elevando o custo total acima de $7,50/par.
          </p>

          {/* ─── Section 6: Duty Reduction ─── */}
          <h2 id="duty-reduction" className="text-3xl font-bold mt-16 mb-6">7 Maneiras de Reduzir Seus Direitos de Importação</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">1. Obtenha o Certificado de Origem — Sempre</h3>
          <p>
            Isso não é negociável para a Austrália, Canadá e qualquer mercado onde ALCs se aplicam. Peça à sua fábrica para incluir um CoO carimbado pelo CCPIT com cada envio acima de $500 em valor. Custo: $30-50. Economia potencial: 5% do valor CIF. ROI: 100× ou mais.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Use De Minimis para Amostras e Pedidos Pequenos</h3>
          <p>
            Mantenha os pedidos iniciais de amostra abaixo de $800 (EUA), 150 € (UE) ou £135 (Reino Unido) para entrar livres de direitos. Este é o melhor truque para testar novos estilos antes de se comprometer com volume.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. Considere a Fabricação Dividida</h3>
          <p>
            Se você está enviando para os EUA e a sobretaxa de 7,5% da Seção 301 está matando suas margens, considere fabricar no Vietnã ou Índia em vez da China. O Vietnã tem apenas taxas NMF (2,0%) sem Seção 301. O custo unitário de fábrica pode ser $0,30-0,50 mais alto, mas a economia em direitos geralmente supera o prêmio de fabricação em pedidos acima de $10.000.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Declare Valores Precisos — Mas Não Inflacionados</h3>
          <p>
            Declarar valor aduaneiro abaixo do real é ilegal. Mas declarar acima é simplesmente jogar dinheiro fora. Declare o valor real da transação (o que você pagou à fábrica). Não infle &quot;para fins de seguro&quot; — contrate um seguro de carga separado. Uma superdeclaração de $1.000 em um envio com destino aos EUA custa $95 em direitos desnecessários.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. Envie FCL em Vez de LCL Quando Possível</h3>
          <p>
            Se você está pedindo mais de 3.000 pares, um contêiner completo (FCL) é mais barato por unidade do que carga consolidada (LCL) e evita taxas de CFS (Estação de Carga de Contêineres) no destino. O ponto de equilíbrio fica tipicamente em torno de 5-8 metros cúbicos de óculos — aproximadamente 2.000-3.000 pares com embalagem.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Use um Despachante Aduaneiro Licenciado, Não o Padrão do Seu Transitário</h3>
          <p>
            Transitários frequentemente agrupam o desembaraço aduaneiro a taxas inflacionadas. Um despachante aduaneiro licenciado independente cobra $75-150 por entrada contra $200-350 de transitários que terceirizam o trabalho. Para importadores frequentes (mais de 12 envios/ano), uma fiança aduaneira contínua ($500/ano) é mais barata que fianças por envio ($50-75 cada).
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Programe Seus Envios Fora da Alta Temporada</h3>
          <p>
            As taxas de frete marítimo disparam 40-80% durante a alta temporada (agosto-outubro para estoque de Natal, janeiro-fevereiro antes do Ano Novo Chinês). Como o frete faz parte do seu valor CIF — e os direitos são calculados sobre o CIF — frete mais alto significa direitos mais altos. Envie em março-maio ou novembro para obter taxas de frete mais baixas e, por extensão, cálculos de direitos mais baixos.
          </p>

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
            <h2 className="text-3xl font-bold mb-4">Documentos de Envio? Nós Cuidamos Disso.</h2>
            <p className="text-xl mb-6 opacity-90">Cada pedido da EyeView inclui um Certificado de Origem carimbado pelo CCPIT, fatura comercial com códigos SH corretos e lista de embalagem formatada para os requisitos aduaneiros do seu país. Informe seu destino e otimizaremos sua documentação para minimizar os direitos.</p>
            <Link
              href="/pt/contato"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Cotação Gratuita
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais do Chão de Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/blog/guia-importar-oculos" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Importar Óculos de Sol da China</h3>
                <p className="text-gray-600 text-sm">Guia de importação passo a passo: alfândega, envio, controle de qualidade.</p>
              </Link>
              <Link href="/pt/blog/guia-moq-oculos" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Pedido Mínimo para Óculos</h3>
                <p className="text-gray-600 text-sm">Quantos pares pedir primeiro? Estratégias inteligentes de escala.</p>
              </Link>
              <Link href="/pt/contato" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale Conosco</h3>
                <p className="text-gray-600 text-sm">Receba uma cotação para seu pedido personalizado de óculos no atacado.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
