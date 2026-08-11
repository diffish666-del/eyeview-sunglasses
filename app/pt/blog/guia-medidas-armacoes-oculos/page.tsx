import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Medidas de Armações de Óculos de Sol Explicadas: DP, Largura da Ponte, Comprimento da Haste',
  description: 'Um dono de fábrica detalha as medidas de armações de óculos de sol — DP, largura da ponte, comprimento da haste, largura da armação — com dados reais de atacado para você parar de encomendar armações que não servem nos seus clientes.',
  keywords: ['medidas armações óculos de sol', 'DP distância pupilar óculos de sol', 'largura da ponte óculos de sol', 'comprimento da haste óculos de sol', 'largura da armação óculos de sol', 'guia de tamanhos óculos de sol atacado', 'como medir armações de óculos de sol', 'guia de ajuste óculos de sol em massa', 'ajuste asiático vs ajuste europeu óculos de sol', 'dimensões de armações de óculos de sol explicadas'],
  alternates: {
    canonical: '/pt/blog/guia-medidas-armacoes-oculos',
    languages: {
      'en': '/blog/sunglasses-frame-measurements-guide',
      'de': '/de/blog/sonnenbrillen-rahmenmessungen-leitfaden',
      'es': '/es/blog/guia-medidas-monturas-gafas',
      'fr': '/fr/blog/guide-mesures-montures-lunettes',
      'it': '/it/blog/guida-misure-montature-occhiali',
      'pt': '/pt/blog/guia-medidas-armacoes-oculos',
    },
  },
};

const takeaways = [
  'As medidas da armação não são apenas especificações técnicas — são a diferença entre um par de óculos de sol que fica na prateleira da loja e um que realmente é usado; erre a largura da ponte ou o comprimento da haste e sua armação de atacado de $8 vira estoque invendável, independentemente da qualidade das lentes',
  'A Distância Pupilar (DP) é a medida mais ignorada no atacado de óculos — a maioria dos catálogos de fábrica lista a DP da armação como um único número, mas a janela real de tolerância para um ajuste confortável é de apenas ±2mm por olho, o que significa que uma armação com DP de 64mm na verdade só serve rostos com DP entre 60–68mm antes que o desalinhamento óptico cause dores de cabeça',
  'Óculos de sol com ajuste asiático não são um truque de marketing — eles existem porque a ponte nasal asiática média é 2–4mm mais baixa e 3–5mm mais larga que a ponte nasal caucasiana média, exigindo armações com ponto de ponte mais baixo, menor largura de ponte e plaquetas nasais com mais ajuste vertical; se você vende para mercados asiáticos sem entender isso, metade das suas armações vai escorregar pelo rosto dos clientes',
  'O comprimento da haste é a dimensão que determina se suas armações vão servir cabeças europeias (média de 140–145mm), americanas (140–150mm) ou asiáticas (125–140mm) — uma haste de 145mm é o padrão universal mais seguro, mas se você comercializa especificamente para uma região, precisa ajustar sua especificação OEM de acordo',
  'O erro de medida mais comum que compradores de atacado cometem é encomendar armações com base em como elas parecem nas fotos em vez de como elas medem — uma armação com largura de lente de 55mm fica ótima em um modelo, mas serve confortavelmente apenas cerca de 40% dos rostos adultos; 52mm de largura de lente é o ponto ideal para ajuste universal entre gêneros e mercados',
];

const quickStats = [
  { label: 'DP de armação ideal universal', value: '62–64mm' },
  { label: 'Tolerância de conforto da DP por olho', value: '±2mm' },
  { label: 'Comprimento médio da haste na Europa', value: '140–145mm' },
  { label: 'Comprimento médio da haste na Ásia', value: '125–140mm' },
  { label: 'Faixa padrão de largura da ponte', value: '14–24mm' },
  { label: 'Largura de lente mais comum (universal)', value: '52mm' },
  { label: 'Ponte nasal asiática — mais baixa vs caucasiana', value: '2–4mm mais baixa' },
  { label: 'Devoluções de armações por mau ajuste', value: '12–18% das devoluções B2C' },
];

const faqs = [
  {
    question: 'O que significam os três números nas armações de óculos de sol (ex.: 52□18-145)?',
    answer: 'Os três números seguem o padrão internacional de medidas de armações: o primeiro número (52) é a largura da lente em milímetros, medida horizontalmente na parte mais larga de uma única lente. O segundo número (18) é a largura da ponte — a distância entre as duas lentes no ponto mais estreito da ponte. O terceiro número (145) é o comprimento da haste, medido do parafuso da dobradiça até a ponta da haste, incluindo a curva atrás da orelha. Juntos, esses três números dão cerca de 80% do que você precisa saber sobre o ajuste da armação. O quarto número, que alguns fabricantes incluem, é a altura da lente — nem sempre impresso, mas fundamental para lentes progressivas ou de grau. Ao avaliar fichas técnicas de fábrica, peça sempre os quatro números se você planeja oferecer armações prontas para lentes de grau.',
  },
  {
    question: 'Como eu meço a distância pupilar (DP) para óculos de sol?',
    answer: 'A DP é a distância em milímetros entre os centros das suas duas pupilas. Existem dois tipos: DP binocular (distância entre as duas pupilas, normalmente 54–74mm em adultos) e DP monocular (distância de cada pupila ao centro da ponte nasal, normalmente 27–37mm por olho). Para o design da armação de óculos de sol, a relação crítica é: DP da armação = largura da lente + largura da ponte. Assim, uma armação 52□18 tem DP de armação de 70mm. Se seu cliente tem DP binocular de 62mm, essa armação é 8mm larga demais — os centros ópticos das lentes ficarão desalinhados com as pupilas, podendo causar cansaço visual e dores de cabeça. Como comprador de atacado, você quer armações com DP que esteja a no máximo 4mm da DP mais comum no seu mercado-alvo. A maioria das DPs de adultos se concentra entre 58–68mm, então armações com DP de 62–64mm atendem à faixa mais ampla.',
  },
  {
    question: 'Qual é a diferença entre óculos de sol com ajuste asiático e ajuste europeu?',
    answer: 'Óculos de sol com ajuste asiático (também chamado de ajuste de ponte baixa ou ajuste universal) têm três diferenças-chave em relação às armações padrão de ajuste europeu: (1) As plaquetas nasais ou a ponte ficam posicionadas 2–4mm mais abaixo no frontal da armação, porque a ponte nasal asiática fica mais baixa no rosto. (2) A largura da ponte é normalmente 1–3mm menor (15–17mm contra 17–20mm nas armações europeias) porque a estrutura óssea nasal asiática oferece menos suporte lateral — uma ponte mais larga fará a armação escorregar. (3) As plaquetas nasais, se ajustáveis, têm braços mais longos com maior curso vertical (8–10mm de ajuste de altura da plaqueta contra 5–6mm nas armações padrão). Além disso, a curvatura da armação (ângulo de envolvimento do rosto) costuma ser um pouco mais plana (3–5° contra o envolvimento padrão de 5–8°) para reduzir a pressão nas maçãs do rosto, que tendem a ser mais proeminentes nas estruturas faciais asiáticas. Não são ajustes menores — uma armação projetada para rostos europeus literalmente não fica no lugar em muitos clientes asiáticos, criando um ciclo constante de escorregar e empurrar de volta que destrói a experiência de uso.',
  },
  {
    question: 'Qual comprimento de haste devo especificar no meu pedido de óculos de sol de atacado?',
    answer: 'O comprimento da haste é a medida de armação mais dependente da região. Para o mercado europeu, especifique hastes de 140–145mm — isso serve aproximadamente 85% dos adultos europeus. Para o mercado norte-americano, 140–150mm é a faixa segura, com 145mm sendo a mais universal. Para mercados asiáticos, use mais curto: 125–140mm, porque a profundidade média da cabeça asiática (da frente para trás) é menor que a média europeia. Para mercados do Oriente Médio e do Sul da Ásia, 140–145mm geralmente funciona, mas você pode receber pedidos de 150mm para cabeças maiores. Se você está lançando uma linha de óculos de sol de ajuste universal vendida em vários continentes, especifique hastes de 145mm — é um pouco longa para rostos asiáticos e um pouco curta para cabeças europeias e americanas grandes, mas é a opção menos errada para uma abordagem de tamanho único. Para pedidos OEM, sempre recomendo produzir dois SKUs de comprimento de haste (140mm e 148mm) para qualquer armação unissex com largura de lente acima de 52mm — a diferença de custo de ferramental é zero para armações de acetato e mínima para armações injetadas, e isso dobra sua cobertura de ajuste.',
  },
  {
    question: 'Como a largura da ponte e o design das plaquetas nasais afetam o conforto dos óculos de sol?',
    answer: 'A largura da ponte é a medida que os compradores mais ignoram, e é a que causa mais reclamações de conforto. A ponte suporta 80–90% do peso da armação, então errá-la significa que a armação ou escorrega (larga demais) ou aperta o nariz (estreita demais). As larguras de ponte padrão variam de 14mm (estreita, comum em armações de metal com plaquetas nasais ajustáveis) a 24mm (larga, comum em armações de acetato de moda superdimensionadas). O ponto ideal para a maioria das armações unissex adultas é 17–19mm com plaquetas nasais ajustáveis ou uma ponte de buraco de fechadura bem contornada. O design das plaquetas nasais importa igualmente: rostos asiáticos precisam de plaquetas com mais espaço vertical (a plaqueta fica mais abaixo do aro da armação), rostos europeus precisam de espaço moderado, e rostos africanos muitas vezes se beneficiam de plaquetas mais afastadas com um ângulo mais plano. Pontes moldadas de acetato (pontes de sela de peça única) têm visual mais limpo, mas são implacáveis no ajuste — se a curva da ponte não combinar com o perfil do nariz do cliente, não há ajuste possível. Plaquetas nasais de metal ajustáveis em braços oferecem cerca de 8–10mm de ajuste de encaixe e devem ser o padrão para qualquer armação de atacado voltada a mercados diversos.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'guia-medidas-armacoes-oculos';

export default function GuiaMedidasArmacoesOculos() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/pt/' },
          { name: 'Blog', href: '/pt/blog/' },
          { name: 'Medidas de Armações de Óculos de Sol Explicadas' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Medidas de Armações de Óculos de Sol Explicadas: DP, Largura da Ponte, Comprimento da Haste — Um Guia do Comprador de Fábrica",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica detalha as medidas de armações de óculos de sol — DP, largura da ponte, comprimento da haste, largura da armação — com dados reais de atacado para você parar de encomendar armações que não servem nos seus clientes.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Know-How de Fábrica</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Medidas de Armações de Óculos de Sol Explicadas: DP, Largura da Ponte, Comprimento da Haste
          </h1>
          <p className="text-xl text-gray-600">
            A maioria dos compradores de atacado escolhe armações pela aparência na foto. Eu escolho pelos números — porque são as medidas que determinam se seus clientes vão realmente usar a porcaria. Aqui está tudo o que você precisa saber sobre medidas de armações de óculos de sol, de alguém que as fabrica há 20 anos.
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
            <li><a href="#section-1" className="text-primary-600 hover:underline">Por que as Medidas da Armação Importam para Compradores de Atacado</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">DP (Distância Pupilar) — O Que É e Por Que as Fábricas se Importam</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Largura da Ponte — A Variável de Ajuste Escondida</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Comprimento da Haste e Largura da Armação — Acertando o Ajuste Geral</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas Frequentes</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} title="Pontos-Chave" />

          {/* 🟡 GEO: Quick Stats */}
          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Fatos Rápidos sobre Medidas de Armações" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Por que as Medidas da Armação Importam para Compradores de Atacado</h2>
          
          <p>Deixe-me contar sobre um cliente que perdeu $18.000 em um contêiner de óculos de sol.</p>
          
          <p>Ele era um importador iniciante da Alemanha. Encomendou 3.000 wayfarers de acetato — boa qualidade, boas lentes, preço competitivo de $6 FOB. As amostras estavam lindas. Ele me mandou fotos da abertura da caixa, todo orgulhoso. Três meses depois, ele me ligou. As devoluções estavam em 22%. Os varejistas dele estavam devolvendo caixas. As armações eram largas demais para rostos europeus — 55mm de largura de lente com uma ponte de 20mm. A largura total da armação ficou em 142mm, o que é aceitável para um rosto americano grande, mas parece cômica e grande demais no homem europeu médio. Os clientes dele experimentavam, riam e colocavam de volta.</p>
          
          <p>Esse pedido custou $18.000 em produto, $4.200 em frete e seis meses de tempo perdido. Tudo porque ninguém verificou as medidas antes da produção.</p>
          
          <p>Vi isso acontecer dezenas de vezes em 20 anos. Compradores de atacado — especialmente os iniciantes — escolhem armações com base em fotos, estilo e cor. Eles olham a ficha técnica, veem os números e pensam "são só detalhes técnicos, a fábrica cuida disso". Eles não percebem que as medidas da armação são <strong>o maior determinante do escoamento das vendas</strong>. Uma armação que não serve o seu mercado-alvo não é um produto — é estoque morto com declaração alfandegária.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">O Custo Real de Errar as Medidas</h3>
          
          <p>Quando você encomenda armações que não servem nos seus clientes, você paga por isso de pelo menos quatro maneiras:</p>
          
          <p><strong>1. Devoluções diretas.</strong> No e-commerce B2C, as taxas de devolução de óculos por mau ajuste ficam em 12–18% em média — e isso para marcas que oferecem provador virtual e guias de tamanho detalhados. Se você é um atacadista que fornece lojas de varejo, o varejista não absorve esse custo. Ele devolve para você. Ou, pior, ele não faz novo pedido.</p>
          
          <p><strong>2. Danos à marca.</strong> Uma experiência ruim de ajuste cria um cliente que associa sua marca a desconforto. Esse cliente não diz "a largura da ponte estava 2mm acima". Ele diz "seus óculos de sol são desconfortáveis". E conta para cinco amigos. Em uma categoria em que a compra repetida depende quase inteiramente da satisfação com o ajuste, uma medida errada pode matar o valor do cliente ao longo da vida.</p>
          
          <p><strong>3. Estoque morto.</strong> Armações que não servem não podem ser "consertadas". Você não pode remoldar o acetato. Você não pode esticar uma haste de titânio. Esse estoque fica no armazém, acumulando custos de armazenagem, até você liquidá-lo a 40% do custo de aquisição. Já andei por armazéns de compradores em Roterdã, Los Angeles e Dubai — todos têm um canto cheio de "as armações que não serviam".</p>
          
          <p><strong>4. Oportunidade perdida.</strong> Cada dólar preso em armações mal ajustadas é um dólar que você não pode gastar em um novo pedido das armações que realmente vendem. No atacado de óculos de sol, o giro de estoque é tudo. Um lote de armações erradas atrasa todo o seu ciclo de caixa em 60–90 dias.</p>
          
          <p>As medidas da armação não são detalhes opcionais. São a especificação que separa um negócio de importação lucrativo de um depósito cheio de arrependimento. E a primeira medida que você precisa entender é a DP.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">DP (Distância Pupilar) — O Que É e Por Que as Fábricas se Importam</h2>
          
          <p>A distância pupilar — DP — é a distância entre os centros das suas duas pupilas, medida em milímetros. A DP típica de adultos varia de 54mm a 74mm, com a grande maioria concentrada entre 58–68mm. Para óculos de sol, uma DP de 62–64mm atende a maior parte do público adulto.</p>
          
          <p>Agora, aqui está o que a maioria dos compradores não entende: <strong>A DP da armação é diferente da DP pessoal.</strong></p>
          
          <p>A DP da armação é calculada como: <strong>Largura da Lente + Largura da Ponte.</strong> Se você tem uma armação 52□18, a DP da armação é 70mm (52 + 18). Isso significa que o centro óptico da lente esquerda está a 70mm do centro óptico da lente direita. Se o seu cliente tem uma DP pessoal de 62mm, esses centros ópticos estão 8mm distantes demais. Toda vez que ele olha através dessas lentes, os olhos se esforçam 4mm para fora de cada lado para se alinhar com o centro óptico.</p>
          
          <p>Para óculos de sol sem grau, alguns milímetros de desalinhamento de DP geralmente são toleráveis — lentes planas não têm um centro óptico definido. Mas se você vende armações prontas para lentes de grau, a DP se torna crítica. Um desalinhamento de 4mm+ por olho causará cansaço visual, dores de cabeça e visão periférica embaçada. Seus clientes vão culpar suas lentes — mas o problema real está na especificação da armação.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Faixas de DP por Mercado — O Que os Dados Dizem</h3>
          
          <p>Em 20 anos exportando para mais de 50 países, aqui está o que observei sobre a distribuição de DP em diferentes mercados:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Mercado</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DP média — homens adultos</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DP média — mulheres adultas</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Faixa segura de DP da armação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">América do Norte</td>
                  <td className="border border-gray-300 px-4 py-2">64–68mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–64mm</td>
                  <td className="border border-gray-300 px-4 py-2">63–66mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europa Setentrional</td>
                  <td className="border border-gray-300 px-4 py-2">63–67mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europa Meridional</td>
                  <td className="border border-gray-300 px-4 py-2">62–66mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–62mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Leste Asiático (China, Japão, Coreia)</td>
                  <td className="border border-gray-300 px-4 py-2">60–65mm</td>
                  <td className="border border-gray-300 px-4 py-2">57–62mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–63mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sudeste Asiático</td>
                  <td className="border border-gray-300 px-4 py-2">59–64mm</td>
                  <td className="border border-gray-300 px-4 py-2">56–61mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–62mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Oriente Médio</td>
                  <td className="border border-gray-300 px-4 py-2">63–68mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">América Latina</td>
                  <td className="border border-gray-300 px-4 py-2">62–67mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 italic">Estas são médias de nível de fábrica baseadas em padrões de pedidos de clientes e feedback de ajuste ao longo de duas décadas — não dados antropológicos revisados por pares, mas precisos o suficiente para projetar armações que servem clientes reais.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Como Ler a DP em uma Ficha Técnica de Fábrica</h3>
          
          <p>Quando você recebe uma ficha técnica de uma fábrica chinesa, a DP normalmente aparece de uma destas três formas:</p>
          
          <p><strong>1. DP da armação.</strong> Listada como um único número, geralmente 62–70mm. É largura da lente + largura da ponte. Informa a distância de centro a centro das lentes. Se esse número estiver a mais de 4mm da DP média do seu mercado-alvo, a armação causará problemas ópticos para usuários de lentes de grau e pode dar a impressão de olhos estrábicos ou desalinhados no rosto.</p>
          
          <p><strong>2. Faixa de descentração.</strong> Algumas fábricas melhores listam a "faixa de DP de ajuste", como "DP 60–68mm recomendada". Isso informa a faixa de DPs de clientes que podem usar a armação confortavelmente. Uma armação com DP de armação de 66mm e faixa de descentração de 60–72mm é mais versátil que uma com DP de armação de 70mm e faixa de 64–72mm — quanto mais estreita a faixa recomendada, mais específico é o ajuste.</p>
          
          <p><strong>3. Nenhuma DP listada.</strong> Se uma fábrica não lista a DP na ficha técnica, pergunte. Se eles não conseguirem informar a DP da armação em 24 horas, não faça pedido nessa fábrica. Estou falando sério. Qualquer fábrica que realmente fabrica óculos conhece a DP da armação de cada SKU do catálogo. Se não sabem ou não conseguem medir, provavelmente são uma trading company revendendo armações que não projetaram.</p>
          
          <p>A regra mais simples que dou a novos compradores: para uma linha de óculos de sol de ajuste universal, a DP da armação deve ser de <strong>62–64mm</strong>. Isso cobre aproximadamente 70% do mercado adulto global. Se você está mirando um público específico — armações femininas de ajuste estreito, armações masculinas grandes, infantil — ajuste de acordo. Mas para sua coleção unissex principal, a DP de armação de 62–64mm é a âncora em torno da qual você constrói.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Largura da Ponte — A Variável de Ajuste Escondida</h2>
          
          <p>Se a DP é a medida sobre a qual os compradores discutem, a largura da ponte é a que eles ignoram completamente — até as devoluções começarem a chegar.</p>
          
          <p>A ponte é a parte da armação que fica sobre o nariz. Ela suporta 80–90% do peso da armação. Em uma armação de acetato de 35 gramas, isso é cerca de 30 gramas de pressão constante para baixo sobre uma faixa de pele e cartilagem de talvez 6mm de largura. Erre a ponte, e até a armação de titânio mais leve fica desconfortável em menos de 20 minutos de uso.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Faixas Padrão de Largura da Ponte</h3>
          
          <p>A largura da ponte geralmente é o segundo número no trio padrão de medidas da armação (por exemplo, o "18" em 52□18-145). A faixa da indústria vai de 14mm a 24mm, mas a maioria das armações cai nestas categorias:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Largura da Ponte</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Uso Típico</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Mercados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>14–16mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Armações de metal com plaquetas nasais ajustáveis, aviadores, armações femininas pequenas de acetato</td>
                  <td className="border border-gray-300 px-4 py-2">Asiático, mulheres pequenas (todos os mercados)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>17–19mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acetato unissex universal, maioria dos wayfarers, armações ópticas padrão</td>
                  <td className="border border-gray-300 px-4 py-2">Global — a faixa mais comum para armações de mercado de massa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>20–22mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Acetato masculino grande, armações de moda superdimensionadas, aviadores sem plaquetas nasais</td>
                  <td className="border border-gray-300 px-4 py-2">América do Norte, Europa Setentrional, Oriente Médio — traços maiores</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>23–24mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Declarações de moda superdimensionadas, óculos de sol estilo escudo</td>
                  <td className="border border-gray-300 px-4 py-2">Moda de nicho — não use na linha principal de atacado a menos que seja solicitado</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Design da Ponte: Acetato vs Metal vs Injeção</h3>
          
          <p>A medida da ponte sozinha não diz se uma armação vai servir — o <strong>design da ponte</strong> é igualmente importante. Existem três tipos básicos:</p>
          
          <p><strong>Ponte de sela (acetato moldado).</strong> Uma única peça contínua de acetato moldada para assentar sobre o nariz. Visual limpo, sem partes móveis. A desvantagem: zero ajuste. Se a curva da ponte não combinar com o nariz do cliente, não há nada que você possa fazer. Pontes de sela funcionam melhor em armações com até 16mm de largura de ponte, onde o nariz naturalmente oferece mais suporte. Para armações acima de 18mm, uma ponte de sela é uma aposta — ela serve perfeitamente talvez 40% dos rostos e mal no restante.</p>
          
          <p><strong>Ponte de buraco de fechadura (keyhole).</strong> Uma ponte esculpida de acetato ou metal que cria um formato de "buraco de fechadura" — mais larga no topo, mais estreita no ponto de contato. Visualmente distinta, e o formato esculpido oferece mais pontos de contato do que uma sela plana, o que melhora a distribuição de peso. O design keyhole foi popularizado pelos wayfarers da Ray-Ban e continua sendo a melhor opção de ponte de acetato para armações acima de 18mm. Não é ajustável, mas o formato contornado compensa em parte.</p>
          
          <p><strong>Plaquetas nasais ajustáveis (braços de metal com plaquetas de silicone).</strong> É o que recomendo para 90% dos pedidos de atacado. Dois braços de metal independentes com plaquetas macias de silicone ou PVC que podem ser curvadas para dentro, para fora, para cima ou para baixo. Isso dá ao usuário ou ao oftalmologista cerca de 8–10mm de ajuste total de encaixe — suficiente para acomodar pontes nasais do perfil asiático estreito ao europeu largo. Sim, plaquetas nasais ajustáveis adicionam $0,30–0,50 ao custo da armação em comparação com uma sela moldada. Sim, valem a pena. Só a flexibilidade de ajuste reduz as devoluções em cerca de 40–60% em comparação com armações de ponte fixa, de acordo com o que meus clientes de longo prazo relatam.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">O Fator do Ajuste Asiático</h3>
          
          <p>Você não pode discutir largura da ponte com honestidade sem abordar o mercado de ajuste asiático. Esta é a realidade do chão de fábrica:</p>
          
          <p>A ponte nasal asiática média fica 2–4mm mais baixa no rosto e é 3–5mm mais larga em estrutura óssea do que a ponte nasal caucasiana média. Isso não é anedótico — é mensurável e consistente em grandes populações. Armações projetadas para rostos europeus ou americanos, com pontos de contato de ponte mais altos e larguras de ponte mais estreitas, não assentam corretamente na maioria dos rostos asiáticos. A armação vai ficar alta demais, as pontas das hastes não alcançarão corretamente atrás das orelhas e as lentes ficarão próximas demais dos olhos.</p>
          
          <p>Armações de ajuste asiático corrigem isso com três mudanças de design: (1) ponto de contato da ponte mais baixo no frontal da armação, (2) largura de ponte ligeiramente menor (15–17mm em vez de 17–19mm) e (3) plaquetas nasais com mais queda vertical (as plaquetas ficam posicionadas mais abaixo do aro da armação). Se 20% ou mais dos seus clientes de atacado vendem para mercados asiáticos, você precisa de um SKU de ajuste asiático na sua linha. Não tente fazer uma armação de ajuste europeu funcionar para rostos asiáticos — a geometria não coopera.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Comprimento da Haste e Largura da Armação — Acertando o Ajuste Geral</h2>
          
          <p>Se a largura da ponte determina o conforto, o comprimento da haste e a largura total da armação determinam se os óculos de sol ficam no seu rosto.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Comprimento da Haste: A Variável Regional</h3>
          
          <p>O comprimento da haste é medido do parafuso da dobradiça até a ponta da haste, seguindo a curva atrás da orelha. Os comprimentos padrão da indústria variam de 125mm a 155mm. Aqui está o que digo aos meus clientes de atacado:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Comprimento da Haste</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Rótulo de Tamanho da Armação</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ideal Para</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135mm</td>
                  <td className="border border-gray-300 px-4 py-2">Pequeno / Infantojuvenil</td>
                  <td className="border border-gray-300 px-4 py-2">Crianças, mulheres pequenas, armações femininas asiáticas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–140mm</td>
                  <td className="border border-gray-300 px-4 py-2">Pequeno–Médio</td>
                  <td className="border border-gray-300 px-4 py-2">Unissex asiático, mulheres europeias, mercado feminino em geral</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">140–145mm</td>
                  <td className="border border-gray-300 px-4 py-2">Médio</td>
                  <td className="border border-gray-300 px-4 py-2">Unissex europeu, ajuste universal global (padrão mais seguro)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–150mm</td>
                  <td className="border border-gray-300 px-4 py-2">Médio–Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Homens norte-americanos, homens europeus grandes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">150–155mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande / GG</td>
                  <td className="border border-gray-300 px-4 py-2">Tamanhos especiais grandes, big & tall, homens do Oriente Médio</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Erros de comprimento da haste são brutais porque são imediatamente óbvios para quem usa. Uma haste curta demais não alcança a orelha — a armação fica para a frente no rosto, as lentes ficam próximas demais dos olhos e tudo parece e se sente errado. Uma haste longa demais passa da orelha e a curva cai no pescoço em vez de atrás da orelha, fazendo a armação escorregar para a frente com o movimento da cabeça. Ambos são motivos de recusa para o cliente.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Como Especificar o Comprimento da Haste no Seu Pedido OEM</h3>
          
          <p>Quando você faz um pedido OEM a uma fábrica chinesa, especifica o comprimento da haste no tech pack ou no pedido de compra. Estas são as regras que dou aos meus clientes:</p>
          
          <p><strong>Para armações de acetato:</strong> Especificar um comprimento de haste diferente é fácil — a fábrica corta a haste de um blank de acetato mais longo. Nenhuma mudança de ferramental é necessária. Se você pedir hastes de 145mm em uma armação que normalmente sai com 140mm, é um simples ajuste de corte. Impacto no custo: zero. Isso significa que você pode encomendar a mesma armação de acetato com dois comprimentos de haste para mercados diferentes sem custo extra.</p>
          
          <p><strong>Para armações injetadas (TR90, policarbonato, nylon):</strong> O comprimento da haste é fixado pelo molde. Mudar o comprimento da haste exige um inserto de molde novo, que custa $200–400 por inserto de haste. Para uma fábrica que opera moldes de 4 cavidades, isso é $800–1.600 por modelo de armação para adicionar um segundo comprimento de haste. Esse custo só faz sentido se você estiver encomendando 3.000+ unidades por variante de comprimento de haste — abaixo desse volume, absorva o custo de ferramental na primeira rodada de produção.</p>
          
          <p><strong>Para armações de metal:</strong> O comprimento da haste é determinado pelo blank do braço de metal e pela matriz que curva a curvatura da orelha. Mudar o comprimento exige uma matriz nova ($100–200) e às vezes blanks de braço diferentes. Relativamente barato em comparação com moldes de injeção, mas ainda vale confirmar o custo antes de mudar as especificações.</p>
          
          <p>Minha recomendação para a maioria dos compradores de atacado: se você está encomendando acetato, peça dois comprimentos de haste (140mm e 148mm) e divida seu pedido em 40/60 ou 50/50. O custo é idêntico e você cobrirá 90% da sua base de clientes. Para armações injetadas, encomende hastes de 145mm como seu padrão universal, a menos que você tenha dados de vendas regionais que indiquem o contrário.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Largura Total da Armação — A Soma de Todas as Partes</h3>
          
          <p>A largura total da armação não é uma das três medidas padrão, mas é o número mais prático para o ajuste. Ela é calculada como: <strong>(Largura da Lente × 2) + Largura da Ponte + aproximadamente 3–5mm para a espessura do aro da armação em cada lado.</strong></p>
          
          <p>Por exemplo: uma armação 52□18-145 com 2mm de espessura de aro em cada lado tem largura total de aproximadamente (52 × 2) + 18 + (2 × 2) = 126mm. Esta é a extensão horizontal total da armação, de dobradiça da haste a dobradiça da haste.</p>
          
          <p>Aqui está um guia aproximado de tamanhos com base na largura total da armação:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Largura Total da Armação</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tamanho</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ajuste Típico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">115–125mm</td>
                  <td className="border border-gray-300 px-4 py-2">Pequeno</td>
                  <td className="border border-gray-300 px-4 py-2">Mulheres pequenas, jovem, rostos estreitos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135mm</td>
                  <td className="border border-gray-300 px-4 py-2">Médio</td>
                  <td className="border border-gray-300 px-4 py-2">Unissex adulto médio — o tamanho mais vendido no mundo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–145mm</td>
                  <td className="border border-gray-300 px-4 py-2">Grande</td>
                  <td className="border border-gray-300 px-4 py-2">Homens médios a grandes, moda feminina superdimensionada</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–155mm</td>
                  <td className="border border-gray-300 px-4 py-2">GG</td>
                  <td className="border border-gray-300 px-4 py-2">Homens grandes, tamanhos especiais</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>A faixa de largura total de 125–135mm é onde acontecem 60–70% das vendas globais de óculos de sol. Uma armação com largura de lente de 52mm e ponte de 17–19mm atinge quase exatamente essa faixa. Se você está lançando uma nova linha de atacado e não tem dados de vendas regionais para orientar suas decisões de tamanho, comece com armações na zona de 125–130mm de largura total com hastes de 145mm. Essa combinação serve mais rostos em mais mercados com menos reclamações.</p>

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
            <h2 className="text-3xl font-bold mb-4">Precisa de Medidas de Armação Especificadas para o Seu Mercado?</h2>
            <p className="text-xl mb-6 opacity-90">Conte-me sua região-alvo e o perfil demográfico dos seus clientes. Vou recomendar as especificações exatas de DP, largura da ponte, comprimento da haste e largura da armação que maximizam o ajuste e minimizam as devoluções — com base em 20 anos de dados de fábrica, não em achismos.</p>
            <Link
              href="/pt/contato/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Obter Orçamento Grátis
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais do Chão de Fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/blog/comparacao-materiais-armacoes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metal: Guia de Materiais de Armação</h3>
                <p className="text-gray-600 text-sm">Qual material de armação escolher com base em ajuste, durabilidade e custo de atacado.</p>
              </Link>
              <Link href="/pt/blog/guia-formato-rosto-oculos" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Formato de Rosto para Óculos de Sol</h3>
                <p className="text-gray-600 text-sm">Combine as medidas da armação com os formatos de rosto para vender mais.</p>
              </Link>
              <Link href="/pt/contato/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale Conosco</h3>
                <p className="text-gray-600 text-sm">Peça um orçamento para o seu pedido personalizado de óculos de sol de atacado.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
