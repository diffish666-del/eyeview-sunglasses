import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Óculos de Sol Olho de Gato no Atacado | Fabricante de Óculos Olho de Gato - EyeView',
  description: 'Fabricante de óculos de sol olho de gato no atacado. Óculos olho de gato femininos em acetato, metal e materiais mistos. Cores tendência, OEM/ODM. MOQ 100 pçs. Direto de fábrica.',
  keywords: 'óculos de sol olho de gato no atacado, fabricante de óculos olho de gato, óculos femininos no atacado, armações olho de gato, óculos de sol no atacado, fabricante de óculos, óculos olho de gato acetato, óculos retro vintage',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/olho-de-gato',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/cat-eye',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/olho-de-gato',
    },
  },
}

const catEyeFaqs = [
  {
    question: 'Quais formatos de rosto combinam com óculos olho de gato?',
    answer: 'Quase todos, honestamente. O olho de gato é um dos formatos mais favoráveis que existem. Rosto oval? Perfeito. Rosto redondo? Os ângulos elevados adicionam definição — fica ótimo. Formato de coração? Combinação ideal. Rosto quadrado? Escolha um olho de gato mais suave e arredondado para equilibrar os ângulos. O único formato de rosto que pode ser complicado é o muito alongado/estreito, onde um olho de gato oversized pode ficar excessivo. Mas mesmo assim, um olho de gato petite funciona bem.',
  },
  {
    question: 'Qual é o MOQ para óculos olho de gato com marca personalizada?',
    answer: '100 peças por cor para nossos designs existentes. Quer seu próprio molde personalizado, cores Pantone sob medida e embalagem com marca? São 300 peças por estilo. Dica profissional: você pode misturar diferentes estilos de olho de gato em um pedido para atingir o mínimo. Assim poderia fazer 100 preto clássico + 100 leopardo + 100 ouro rosé = 300 no total. Somos flexíveis.',
  },
  {
    question: 'Essas armações podem ser feitas com grau?',
    answer: 'Sim! Todas as nossas armações olho de gato de acetato e metal podem ser enviadas com lentes de demonstração para que as óticas coloquem lentes com grau. Acomodamos prescrições monofocais, bifocais e progressivas. A profundidade da armação e a curvatura da lente são projetadas para isso. É um excelente upsell para óticas — armações fashion com capacidade de grau.',
  },
  {
    question: 'Quais são as tendências em olho de gato para 2024-2025?',
    answer: 'Grandes tendências agora: proporções oversized (maior é melhor), acetato transparente/cristal (especialmente rosa e champanhe), materiais mistos (frente de acetato + hastes de metal), olho de gato geométrico angular (menos curvo, mais ousado), e pastéis suaves como lavanda e verde sálvia. O revival do olho de gato estreito Y2K também continua forte entre as compradoras mais jovens. Acompanhamos essas tendências a cada temporada e atualizamos nosso catálogo de acordo.',
  },
  {
    question: 'Posso obter amostras antes de me comprometer com um pedido grande?',
    answer: 'Claro — nunca esperaríamos que você pedisse às cegas. Estilos existentes do catálogo? Amostras grátis, você só cobre o frete (normalmente $30-50 via DHL por 3-5 pares). Quer uma amostra personalizada com suas modificações específicas? Pequena taxa de $50-100 por design, que creditamos no seu primeiro pedido de produção. Então basicamente você recebe amostras personalizadas de graça se fizer pedido. O prazo é de 7-10 dias.',
  },
]

const products = [
  {
    name: 'Olho de Gato Preto Clássico',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pçs',
    description: 'O que toda coleção precisa. Acetato preto, dobradiças polidas, aquele ângulo elevado perfeito. É o equivalente em óculos de sol do vestido preto básico — funciona com tudo, vende para todas. É consistentemente nosso número 1 em recompra em todos os mercados.',
  },
  {
    name: 'Olho de Gato Leopardo',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pçs',
    description: 'Estampa animal bem feita. O padrão tartaruga não é pintado — é criado sobrepondo lâminas de acetato de cores diferentes, então cada par tem genuína profundidade e riqueza. Uma dona de boutique em Melbourne nos disse que esses superam as cores sólidas em vendas 2 para 1 durante a primavera.',
  },
  {
    name: 'Olho de Gato Metal Ouro Rosé',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pçs',
    description: 'Armação metálica fina com galvanização em ouro rosé que parece que deveria custar $200. Não custa. A construção em fio fino dá uma versão moderna e refinada do olho de gato — perfeita para a mulher profissional que quer estilo sem exagero. Combina maravilhosamente tanto com blazers quanto com saídas de praia.',
  },
  {
    name: 'Olho de Gato Oversized',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pçs',
    description: 'Vai grande ou vai pra casa. O olho de gato oversized é basicamente isca para Instagram — proporções ousadas, pontas dramaticamente elevadas, máxima cobertura facial. Um varejista online nos disse que este estilo recebe mais comentários de "onde você comprou?" do que qualquer outro da loja. Também oferece excelente proteção UV, o que é um belo bônus.',
  },
  {
    name: 'Olho de Gato com Cristais',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$11.00 - $15.00',
    moq: '100 pçs',
    description: 'Para a mulher que trata óculos de sol como joias. Cristais aplicados à mão ao longo da linha da sobrancelha e nas pontas das hastes captam a luz de uma forma que para conversas. Oferecemos pedras transparentes, coloridas e de grau Swarovski. Vendem muito em lojas de resort, boutiques de noivas e varejistas de festa.',
  },
  {
    name: 'Olho de Gato Vintage',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pçs',
    description: 'Direto de 1958. Estreitos, com ângulos pronunciados, com hastes grossas de acetato que dizem "eu conheço minha história da moda." São menores que a tendência oversized — intencionalmente. Colecionadoras e entusiastas do vintage arrebatam esses rapidamente. Se seu mercado é retrô, rockabilly ou pin-up, esta é sua armação.',
  },
]

export default function OlhoDeGatoPagePt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Olho de Gato no Atacado',
        description: 'Óculos de sol olho de gato femininos com armações de acetato, metal e materiais mistos. Designs tendência com personalização OEM completa. UV400 e opções polarizadas.',
        minPrice: '8.00',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos Olho de Gato', url: 'https://eyeviewsunglasses.com/pt/produtos/olho-de-gato' }
      ]} />
      <FAQPageSchema faqs={catEyeFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Óculos Olho de Gato</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Óculos de Sol Olho de Gato no Atacado
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O olho de gato nunca sai de moda. Sério — Audrey Hepburn usou nos
              anos 60 e continua sendo o formato #1 em óculos de sol femininos hoje. Fabricamos
              armações olho de gato em acetato, metal e materiais mistos com personalização OEM completa.
              Seu logo, suas cores, sua marca — nossa fábrica.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop"
              alt="Coleção de Óculos de Sol Olho de Gato no Atacado - Óculos de Moda Femininos"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Why Olho de Gato */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Por Que o Olho de Gato Supera Tudo em Vendas</h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p>
                Aqui vai um dado que surpreende as pessoas: o formato olho de gato tem sido a silhueta
                de óculos de sol femininos mais vendida por mais de 70 anos. Não o aviador. Não o
                wayfarer. O olho de gato. Por quê? Porque faz algo que nenhum outro formato consegue — eleva.
                Aquele ângulo ascendente cria a ilusão de maçãs do rosto mais altas e uma mandíbula mais definida.
                É basicamente um mini lifting que você pode comprar por $15.
              </p>
              <p>
                O formato foi inventado em 1939 por uma designer nova-iorquina chamada Altina Schinasi que estava
                cansada de óculos &quot;feios&quot;. Ela os chamou de armações &quot;Arlequim&quot;. Marilyn Monroe
                os tornou famosos. Audrey Hepburn os tornou icônicos. E agora, em 2024, são maiores
                do que nunca — literalmente. O olho de gato oversized domina Instagram, TikTok e
                todas as semanas de moda de Milão a Seul.
              </p>
              <p>
                Para compradores no atacado, óculos de sol olho de gato são o mais próximo de uma
                aposta segura em óculos. Atraem todas as faixas etárias (20-60+), funcionam o ano inteiro e têm
                forte valor percebido. Todas as nossas armações olho de gato atendem aos <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">padrões de proteção UV da FDA</a> —
                porque ficar bonita não deveria significar comprometer a segurança ocular. Nossa fábrica
                produz mais de 200.000 armações olho de gato por mês em mais de 40 países. Conhecemos este
                formato por dentro e por fora.
              </p>
            </div>
          </section>

          {/* Hero Image */}
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop" alt="Óculos de Sol Olho de Gato no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Products Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">A Coleção</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="card group">
                  <div className="aspect-video overflow-hidden">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} no Atacado - EyeView`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary-600 font-semibold">{product.price}</span>
                      <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                    </div>
                    <Link href="/pt/contato" className="btn-primary w-full block text-center">
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Material Guide */}
          <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Acetato vs. Metal vs. Misto — Qual é o Ideal?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">🏛️ Acetato</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Se você quer cobrar preços premium no varejo, escolha acetato. É feito de <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">algodão
                  e polpa de madeira</a> (sim, de verdade), e as cores e padrões que se pode conseguir são
                  incríveis — tartaruga profundo, redemoinhos de mármore, tons caramelo translúcidos. Cada par
                  é polido à mão para aquele acabamento brilhante. O acetato <em>parece</em> caro. Suas
                  clientes vão notar. Também é hipoalergênico, então nada de reclamações sobre reações na pele.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Cores ricas — tartaruga, mármore, degradê</li>
                  <li>• Acabamento premium polido à mão</li>
                  <li>• Hipoalergênico, eco-friendly</li>
                  <li>• Ideal para: boutiques, posicionamento de luxo</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">⚙️ Metal</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Finas, elegantes, modernas. As olho de gato metálicas usam aço inoxidável ou liga livre de níquel com
                  acabamentos galvanizados — dourado, prateado, ouro rosé, preto fosco. O perfil fino
                  cria um visual refinado que o acetato não consegue igualar. São as armações para mulheres
                  que querem que seus óculos sussurrem, não gritem. Ótimas para linhas profissionais e de escritório.
                  Mais leves que o acetato também — a maioria pesa menos de 22 gramas.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Finas, elegantes, leves (menos de 22g)</li>
                  <li>• Acabamentos dourado, prateado, ouro rosé</li>
                  <li>• Opções livres de níquel disponíveis</li>
                  <li>• Ideal para: escritório, marcas minimalistas</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">🔗 Material Misto</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  O melhor dos dois mundos. Frente de acetato com hastes finas de metal — ou vice-versa.
                  O contraste de dois materiais está super em alta agora. Pense: frente de
                  acetato rosa transparente com hastes finas douradas. Ou acetato preto com hastes de arame prateado.
                  São as armações que fazem as pessoas pararem e perguntarem &quot;onde você conseguiu esses?&quot;
                  Atualmente nossa categoria de crescimento mais rápido.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Estética bicolor em tendência</li>
                  <li>• Possibilidades criativas de design</li>
                  <li>• Categoria de crescimento mais rápido em 2024</li>
                  <li>• Ideal para: marcas de tendência, venda direta</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Color Trends */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Quais Cores Estão Vendendo Agora</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🔥 Em Alta Esta Temporada</h3>
                  <div className="space-y-4">
                    <ColorTrend color="bg-red-800" name="Bordô e Vinho" description="Tons profundos e quentes arrasando no outono/inverno. Combine com lentes degradê marrons para aquela vibe de luxo aconchegante." />
                    <ColorTrend color="bg-pink-300" name="Rosa Suave e Blush" description="Continua forte. O acetato rosa transparente é a cor individual de crescimento mais rápido em óculos femininos agora." />
                    <ColorTrend color="bg-green-700" name="Verde Floresta" description="A surpresa do ano. Uma alternativa sofisticada ao tartaruga que ninguém esperava." />
                    <ColorTrend color="bg-amber-100 border border-gray-300" name="Transparente / Cristal" description="Armações transparentes em cristal, champanhe, cinza claro. Em tendência há 3 anos e sem sinais de desaceleração." />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">📊 Os Clássicos Eternos (Sempre Recompram)</h3>
                  <div className="space-y-4">
                    <ColorTrend color="bg-black" name="Preto Clássico" description="30-35% de todos os pedidos de olho de gato. Sempre. Toda. Temporada. Tenha em estoque ou se arrependa." />
                    <ColorTrend color="bg-amber-700" name="Tartaruga" description="O #2 em vendas. Os marrons multitom funcionam o ano inteiro, com todo mundo, em todo lugar." />
                    <ColorTrend color="bg-yellow-600" name="Metal Dourado" description="Essencial para qualquer linha de luxo ou profissional. Olho de gato dourados transpiram sofisticação." />
                    <ColorTrend color="bg-gray-400" name="Degradê Bicolor" description="Armações que fazem degradê de uma cor para outra — preto para transparente, rosa para pêssego. Super Instagram." />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Especificações</h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-left font-semibold">Especificação</th>
                    <th className="p-4 text-left font-semibold">Acetato</th>
                    <th className="p-4 text-left font-semibold">Metal</th>
                    <th className="p-4 text-left font-semibold">Misto</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-4 font-medium">Largura da Lente</td><td className="p-4 text-gray-600">52-58mm</td><td className="p-4 text-gray-600">54-60mm</td><td className="p-4 text-gray-600">53-58mm</td></tr>
                  <tr><td className="p-4 font-medium">Ponte</td><td className="p-4 text-gray-600">16-20mm</td><td className="p-4 text-gray-600">14-18mm</td><td className="p-4 text-gray-600">15-19mm</td></tr>
                  <tr><td className="p-4 font-medium">Comprimento da Haste</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td></tr>
                  <tr><td className="p-4 font-medium">Peso</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">18-24g</td><td className="p-4 text-gray-600">22-30g</td></tr>
                  <tr><td className="p-4 font-medium">Lente</td><td className="p-4 text-gray-600">CR-39 / TAC</td><td className="p-4 text-gray-600">CR-39 / Nylon</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                  <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                  <tr><td className="p-4 font-medium">Dobradiça</td><td className="p-4 text-gray-600">5 cilindros / Mola</td><td className="p-4 text-gray-600">Mola flexível</td><td className="p-4 text-gray-600">5 cilindros / Mola</td></tr>
                  <tr><td className="p-4 font-medium">Plaquetas Nasais</td><td className="p-4 text-gray-600">Keyhole integrado</td><td className="p-4 text-gray-600">Silicone ajustável</td><td className="p-4 text-gray-600">Silicone ajustável</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Mais Estilos que Valem a Pena Ver</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/produtos/wayfarer" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="font-semibold mb-2">Óculos Wayfarer</h3>
                <p className="text-sm text-gray-600">Clássicos de acetato para todos os públicos</p>
              </Link>
              <Link href="/pt/produtos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="font-semibold mb-2">Opções Polarizadas</h3>
                <p className="text-sm text-gray-600">Adicione TAC polarizada a qualquer olho de gato</p>
              </Link>
              <Link href="/pt/produtos/infantil" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">👧</div>
                <h3 className="font-semibold mb-2">Olho de Gato Infantil</h3>
                <p className="text-sm text-gray-600">Mini olho de gato para meninas — vendem sozinhos</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Suas Perguntas, Respostas Diretas</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {catEyeFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Pronta para Vender o Formato que Se Vende Sozinho?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Boutiques, lojas online, distribuidores de marcas — trabalhamos com todos eles. Nosso
              programa atacado de olho de gato feminino oferece preços competitivos, produção rápida
              e personalização completa. Peça um catálogo grátis e descubra o que é possível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pt/contato" className="btn-primary">Solicitar Catálogo</Link>
              <Link href="/pt/produtos" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Ver Todos os Produtos</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function ColorTrend({ color, name, description }: { color: string; name: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${color} flex-shrink-0 mt-1`}></div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
