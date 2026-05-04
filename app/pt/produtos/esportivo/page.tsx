import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos de Sol Esportivos no Atacado | Fabricante de Óculos Polarizados para Atletas - EyeView',
  description: 'Fabricante de óculos de sol esportivos no atacado. Lentes polarizadas TAC, armações TR90, design envolvente para ciclismo, corrida, pesca, golfe, esqui e beisebol. MOQ 100 pçs. OEM/ODM disponível.',
  keywords: 'óculos de sol esportivos no atacado, óculos esportivos polarizados, fabricante óculos esportivos, óculos ciclismo no atacado, óculos corrida, óculos pesca atacado, armações esportivas TR90, óculos envolventes OEM',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/esportivo',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sport',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/esportivo',
    },
  },
}

const sportCategories = [
  {
    name: 'Óculos de Ciclismo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pçs',
    description: 'Você está a 40 km/h em uma descida. Um inseto atinge seu olho. Acabou. É por isso que todo ciclista sério precisa de óculos adequados — não óculos fashion de posto de gasolina. Nossos óculos de ciclismo envolvem o rosto para bloquear vento, poeira e insetos de todos os ângulos. O sistema de lentes intercambiáveis permite trocar entre lentes transparentes para pedaladas ao amanhecer, amarelas para dias nublados e tons escuros para o sol do meio-dia. E as almofadas de borracha antideslizante? Elas realmente agarram mais firme quando você sua. Acabou a história de empurrar os óculos de volta no nariz no meio da subida.',
    features: ['Design aerodinâmico envolvente', 'Sistema de 3 lentes intercambiáveis', 'Almofadas de borracha ativadas pelo suor', 'Armação ventilada antiembaçante'],
  },
  {
    name: 'Óculos de Corrida',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$9.50 - $14.00',
    moq: '100 pçs',
    description: 'O negócio com óculos de corrida é o seguinte — se você sente eles no rosto, estão errados. Nossas armações para corrida pesam menos de 25 gramas. Isso é mais leve que uma pilha AA. Maratonistas usam por mais de 4 horas sem sequer notar. A armação flexível TR90 absorve o salto constante da corrida, e as lentes largas dão visão periférica completa para detectar aquele buraco ou aquele cachorro solto antes que seja tarde demais. Já tivemos donos de clubes de corrida que pediram mais de 500 pares de uma vez para equipes completas.',
    features: ['Menos de 25g — mais leves que uma pilha', 'Almofadas hidrofílicas antideslizantes', 'Visão periférica completa', 'Armação flexível que absorve impactos'],
  },
  {
    name: 'Óculos de Pesca',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$11.00 - $16.00',
    moq: '100 pçs',
    description: 'Imagine só — você está no lago às 6 da manhã, o sol rebatendo na água e você não consegue ver sua linha. Todo pescador conhece esse brilho cegante. Nossos óculos de pesca eliminam isso completamente. As lentes polarizadas removem o reflexo da superfície para que você possa ver dentro da água — localizar os peixes, ler a estrutura, observar sua isca. Os tons âmbar e cobre melhoram o contraste tanto em água doce quanto salgada. Um guia de pesca na Flórida nos disse que esses óculos "se pagaram na primeira saída." Também oferecemos opções de armação flutuante porque, sejamos honestos, óculos de sol e barcos nem sempre combinam bem.',
    features: ['Lentes polarizadas anti-reflexo', 'Tons âmbar/cobre de alto contraste', 'Opção de armação flutuante disponível', 'Dobradiças resistentes à água salgada'],
  },
  {
    name: 'Óculos de Golfe',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$10.50 - $15.50',
    moq: '100 pçs',
    description: 'Golfe é um jogo de centímetros, e você não consegue jogar centímetros se não enxerga a bola. Nossos óculos de golfe usam tons de lente rosa e âmbar que fazem uma bola branca se destacar contra um fairway verde. Acompanhar o voo da bola contra um céu brilhante? Fácil. Ler a inclinação em um green ensolarado? Muito mais claro. A armação é tão leve que você esquece que está usando no meio do swing — que é exatamente o objetivo. Fornecemos para várias pro shops de resorts de golfe em todo o Sudeste Asiático, e o feedback é sempre o mesmo: "Os jogadores realmente querem comprá-los depois de experimentar."',
    features: ['Lentes rosa/âmbar para rastrear a bola', 'Ajuste ultraleve para o swing', 'Proteção solar lateral nas hastes', 'Testados e aprovados em pro shops'],
  },
  {
    name: 'Óculos de Esqui e Snowboard',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$12.00 - $17.00',
    moq: '100 pçs',
    description: 'Você sabia que os níveis de UV aumentam 10% a cada 1.000 metros de altitude? No topo de uma pista de esqui, seus olhos estão levando uma surra. A cegueira da neve é real — e dolorosa. Nossos óculos de esqui usam lentes escuras de Categoria 3-4 que bloqueiam 92-97% da luz visível. O design envolvente e ajustado mantém o vento e a neve fora dos seus olhos, enquanto os canais de ventilação antiembaçante evitam aquele embaçamento irritante quando você respira forte em uma descida de moguls. As pontas das hastes compatíveis com capacete significam zero pontos de pressão sob o capacete. Uma loja de aluguel de esqui em Hokkaido nos pede 2.000 pares a cada temporada.',
    features: ['Proteção Cat 3-4 contra cegueira da neve', 'Canais de ventilação antiembaçante', 'Ajuste fechado contra o vento', 'Design compatível com capacete'],
  },
  {
    name: 'Óculos de Beisebol',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pçs',
    description: 'Um outfielder olhando para o sol em um fly ball — aquele instante de cegueira pode custar o jogo. Nossos óculos de beisebol são feitos exatamente para esse momento. As lentes polarizadas âmbar destacam uma bola branca contra o céu azul como nada mais. E estas não são armações frágeis — atendem aos padrões de impacto ASTM F803, o que significa que podem aguentar uma linha direta no rosto. O design envolvente seguro se mantém firme durante mergulhos de recepção e deslizamentos de cabeça. Já fornecemos para equipes de Little League, programas universitários e ligas recreativas em 12 países.',
    features: ['Proteção de impacto ASTM F803', 'Polarizado âmbar para rastrear a bola', 'Ajuste envolvente antideslizante', 'Lente de policarbonato inquebrável'],
  },
]

export default function EsportivoPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Sol Esportivos</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos de Sol Esportivos no Atacado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feitos para atletas que realmente precisam que seus óculos de sol tenham desempenho — não apenas que fiquem bonitos.
            Lentes polarizadas TAC, armações ultraleves TR90 e designs envolventes que ficam no lugar
            quando você está dando o máximo. De clubes de ciclismo a barcos de pesca, fornecemos os
            óculos que trabalham tão duro quanto as pessoas que os usam.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
            alt="Coleção de Óculos de Sol Esportivos - Óculos Polarizados para Ciclismo Corrida Pesca"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why Sport Sunglasses Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Por Que Óculos Baratos Não Servem para Esportes</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Vamos ser diretos: aqueles óculos de $3 do caixa da loja vão cair do seu rosto
              no momento em que você começar a suar. Vão embaçar quando você respirar forte. Vão
              pular a cada passada. E o pior de tudo — alguns deles nem bloqueiam UV direito,
              o que significa que são na verdade <em>mais perigosos</em> do que não usar nada. (Lentes
              escuras sem proteção UV dilatam as pupilas, deixando entrar mais radiação
              prejudicial. Nada bom.)
            </p>
            <p>
              Óculos esportivos de verdade resolvem problemas que atletas realmente têm. Ofuscamento
              em estradas molhadas durante uma pedalada matinal? As lentes polarizadas TAC eliminam. Armações que
              quebram com impacto? O nylon TR90 dobra em vez de quebrar — você pode literalmente torcê-los
              90 graus e eles voltam à forma original. Óculos que deslizam em nariz suado? As almofadas
              de borracha hidrofílica agarram <em>mais firme</em> quando molhadas. Isso não é marketing. É a diferença
              entre um equipamento que te ajuda a render e um equipamento que atrapalha. A <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Organização Mundial da Saúde</a> recomenda
              óculos com proteção UV para qualquer pessoa que passe tempo prolongado ao ar livre — e os atletas estão no topo dessa lista.
            </p>
            <p>
              Há mais de 8 anos fabricando óculos de sol esportivos, enviando para varejistas outdoor,
              equipes esportivas, redes de academias e empresas promocionais em mais de 50 países.
              Seja que você precise de 100 pares para um time de ciclismo ou 10.000 para um lançamento no varejo,
              nós cobrimos — e também colocamos seu logo neles.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Óculos de Sol Esportivos no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products with Unique Descriptions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Óculos Esportivos por Atividade</h2>
          <div className="space-y-12">
            {sportCategories.map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} no Atacado - EyeView`}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-semibold text-primary-600">{product.price}</span>
                    <span className="text-sm text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/pt/contato" className="btn-primary inline-block">
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Technology */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">A Tecnologia por Trás da Resistência</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🔬 Armações TR90 — Dobre, Elas Não Quebram</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TR90 é um nylon termoplástico originalmente desenvolvido na Suíça. É a mesma
                família de materiais usados em equipamentos esportivos de alta performance. O que o torna especial? É
                35% mais leve que armações de plástico comuns — a maioria das nossas armações esportivas pesa
                entre 22-28 gramas. Você pode dobrar uma armação TR90 90 graus e ela volta à forma original. Tente
                fazer isso com um par barato do mercado. Também é hipoalergênico, então nada de marcas vermelhas com coceira
                após uma pedalada longa. Funciona perfeitamente em condições de esqui abaixo de zero (-40°C) e não
                deforma em um carro quente (até 120°C).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>35% mais leve que plástico padrão</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Suporta dobra de 90° — sem quebrar</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Resiste de -40°C a 120°C</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hipoalergênico e livre de BPA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🛡️ Lentes Polarizadas TAC — 7 Camadas de Impressionar</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossas lentes TAC não são simplesmente um pedaço de plástico tingido. São um sanduíche de 7 camadas:
                revestimento duro na parte externa para resistência a arranhões, camadas de material TAC para resistência
                estrutural, um filme polarizante no centro que elimina 99% do ofuscamento, e revestimento
                UV por baixo que bloqueia tudo até 400nm. O resultado? Você coloca e o mundo simplesmente... fica nítido.
                O ofuscamento da estrada desaparece. O reflexo da água some. As cores ficam mais ricas.
                É o tipo de diferença que faz as pessoas dizerem &quot;não consigo mais voltar para lentes normais.&quot;
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Construção polarizada de 7 camadas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% do ofuscamento horizontal eliminado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Proteção UV400 completa</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Opção de policarbonato resistente a impactos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">O Que as Torna Diferentes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🏃" title="Incrivelmente Leves" description="Menos de 28g. Você vai esquecer que está usando — até alguém perguntar onde comprou." />
            <FeatureCard icon="🛡️" title="Resistentes a Impacto" description="Lentes de policarbonato que atendem ANSI Z87.1. Uma pedra não vai estragar sua pedalada." />
            <FeatureCard icon="💧" title="Sem Embaçar, Nunca" description="Canais ventilados mantêm o ar circulando. Suba uma ladeira em sprint — as lentes ficam claras." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Testado em laboratório, certificado. Bloqueia 100% de UVA/UVB/UVC. Não é só um adesivo." />
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Especificações em um Relance</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Especificação</th>
                  <th className="p-4 text-left font-semibold">Linha Padrão</th>
                  <th className="p-4 text-left font-semibold">Linha Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Material da Armação</td><td className="p-4 text-gray-600">PC (Policarbonato)</td><td className="p-4 text-gray-600">Nylon TR90</td></tr>
                <tr><td className="p-4 font-medium">Material da Lente</td><td className="p-4 text-gray-600">AC (Acrílico)</td><td className="p-4 text-gray-600">TAC Polarizado</td></tr>
                <tr><td className="p-4 font-medium">Largura da Lente</td><td className="p-4 text-gray-600">65-68mm</td><td className="p-4 text-gray-600">65-72mm</td></tr>
                <tr><td className="p-4 font-medium">Largura da Ponte</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">14-18mm</td></tr>
                <tr><td className="p-4 font-medium">Comprimento da Haste</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">130-140mm</td></tr>
                <tr><td className="p-4 font-medium">Peso</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">22-28g</td></tr>
                <tr><td className="p-4 font-medium">Proteção UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Polarização</td><td className="p-4 text-gray-600">Opcional</td><td className="p-4 text-gray-600">Padrão (TAC 1.1mm)</td></tr>
                <tr><td className="p-4 font-medium">Cores de Lente</td><td className="p-4 text-gray-600">5 opções</td><td className="p-4 text-gray-600">12+ opções</td></tr>
                <tr><td className="p-4 font-medium">Almofadas Nasais</td><td className="p-4 text-gray-600">Borracha fixa</td><td className="p-4 text-gray-600">Borracha hidrofílica ajustável</td></tr>
                <tr><td className="p-4 font-medium">Dobradiça</td><td className="p-4 text-gray-600">Barril padrão</td><td className="p-4 text-gray-600">Dobradiça de mola</td></tr>
                <tr><td className="p-4 font-medium">Certificações</td><td className="p-4 text-gray-600">CE, FDA</td><td className="p-4 text-gray-600">CE, FDA, ANSI Z87.1</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Você Também Pode se Interessar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Óculos Polarizados</h3>
              <p className="text-sm text-gray-600">Todos os nossos estilos polarizados em um só lugar</p>
            </Link>
            <Link href="/pt/produtos/infantil" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Óculos Esportivos para Crianças</h3>
              <p className="text-sm text-gray-600">Óculos seguros e resistentes para jovens atletas</p>
            </Link>
            <Link href="/pt/produtos/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Óculos de Luz Azul</h3>
              <p className="text-sm text-gray-600">Para quando o treino se move para ambientes internos</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas que Recebemos o Tempo Todo</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Qual é o pedido mínimo? Posso começar com pouco?"
              answer="Sim — 100 peças por estilo e cor é nosso MOQ padrão. Se quiser seu próprio logo e cores personalizadas, sobe para 300 peças. Mas honestamente, a maioria dos compradores de primeira viagem começa com um pedido misto de amostras para testar o mercado. Só nos diga o que você busca e encontraremos um jeito de fazer funcionar."
            />
            <FaqItem
              question="TR90 vs. policarbonato — qual devo escolher?"
              answer="Resposta curta: TR90 se puder investir. É 35% mais leve, muito mais flexível (você pode literalmente dobrá-lo completamente e ele volta à forma), e tem sensação premium. O policarbonato funciona perfeitamente para linhas econômicas — ainda é resistente a impactos e cumpre sua função. Mas se seus clientes são atletas sérios ou você se posiciona como marca premium, escolha TR90. A diferença de preço geralmente é de apenas $1-2 por par."
            />
            <FaqItem
              question="Todos os seus óculos esportivos são polarizados?"
              answer="A polarização está disponível em todos os modelos, mas nem sempre vem incluída por padrão na linha standard — é opcional. Na nossa linha premium, as lentes polarizadas TAC vêm de série. Oferecemos mais de 12 cores de lente incluindo cinza, marrom, âmbar, amarelo (ótimo para pouca luz), espelho azul, espelho vermelho e transparente. Também fazemos lentes fotocromáticas que se ajustam automaticamente à luz solar. São populares entre ciclistas que pedalam do amanhecer ao meio-dia."
            />
            <FaqItem
              question="Podem colocar nosso logo?"
              answer="Com certeza. Fazemos impressão de logo nas hastes (tampografia ou gravação a laser), gravação nas lentes, cores de armação personalizadas com correspondência Pantone, embalagem personalizada — tudo o que precisar. Um cliente nos enviou um rascunho em guardanapo de um design de armação e nós o transformamos em um protótipo 3D em duas semanas. Se você consegue sonhar, provavelmente conseguimos fazer."
            />
            <FaqItem
              question="Quais certificações vêm incluídas?"
              answer="Cada par é enviado com conformidade CE e FDA. Nossa linha premium também atende ANSI Z87.1 — esse é o padrão de resistência a impactos industrial, o que significa que essas lentes podem receber o golpe de uma bola de aço em alta velocidade sem estilhaçar. Fornecemos relatórios de testes UV400 de laboratórios independentes. Precisa de AS/NZS 1067 para o mercado australiano? Também fazemos."
            />
            <FaqItem
              question="Quão rápido conseguem enviar?"
              answer="Itens em estoque sem personalização: 3-5 dias úteis. Pedidos personalizados com seu logo e cores: 15-25 dias de produção, depois 5-7 dias de frete aéreo para a maioria dos países. O frete marítimo é mais barato mas leva 20-35 dias. Enviamos por DHL, FedEx, UPS — você escolhe. Pedidos urgentes? Fale conosco. Já conseguimos entregas em 10 dias quando um cliente tinha um prazo apertado."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Vamos Começar sua Linha Esportiva</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Times esportivos, lojas outdoor, marcas fitness, empresas promocionais — já trabalhamos com todos.
            Conte-nos o que precisa e enviaremos amostras para que você veja a qualidade por conta própria.
            Sem pressão, sem compromisso nas amostras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Preços para Equipes</Link>
            <Link href="/pt/produtos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos os Produtos</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://eyeviewglasses.com/pt" },
          { "@type": "ListItem", "position": 2, "name": "Produtos", "item": "https://eyeviewglasses.com/pt/produtos" },
          { "@type": "ListItem", "position": 3, "name": "Óculos de Sol Esportivos", "item": "https://eyeviewglasses.com/pt/produtos/esportivo" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qual é o pedido mínimo? Posso começar com pouco?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 peças por estilo e cor é nosso MOQ padrão. Pedidos com logo personalizado começam em 300 peças. A maioria dos compradores de primeira viagem começa com um pedido misto de amostras para testar o mercado." }
          },
          {
            "@type": "Question",
            "name": "TR90 vs. policarbonato — qual devo escolher?",
            "acceptedAnswer": { "@type": "Answer", "text": "TR90 se puder investir — é 35% mais leve, muito mais flexível e tem sensação premium. O policarbonato funciona bem para linhas econômicas. A diferença de preço geralmente é de apenas $1-2 por par." }
          },
          {
            "@type": "Question",
            "name": "Todos os seus óculos esportivos são polarizados?",
            "acceptedAnswer": { "@type": "Answer", "text": "A polarização está disponível em todos os modelos. É opcional na linha padrão e incluída por padrão na linha premium. Oferecemos mais de 12 cores de lente incluindo opções fotocromáticas." }
          },
          {
            "@type": "Question",
            "name": "Podem colocar nosso logo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Com certeza — impressão de logo nas hastes, gravação nas lentes, cores de armação personalizadas com correspondência Pantone e embalagem personalizada. Também podemos criar designs de armação completamente novos a partir do seu conceito." }
          },
          {
            "@type": "Question",
            "name": "Quais certificações vêm incluídas?",
            "acceptedAnswer": { "@type": "Answer", "text": "CE e FDA em cada par. A linha premium também atende ANSI Z87.1 para resistência a impactos. Relatórios de testes UV400 incluídos. AS/NZS 1067 disponível sob pedido." }
          },
          {
            "@type": "Question",
            "name": "Quão rápido conseguem enviar?",
            "acceptedAnswer": { "@type": "Answer", "text": "Itens em estoque enviam em 3-5 dias úteis. Pedidos personalizados levam 15-25 dias de produção mais 5-7 dias de frete aéreo. Pedidos urgentes possíveis — já conseguimos entregas em 10 dias." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}
