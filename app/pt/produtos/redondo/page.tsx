import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos de Sol Redondos no Atacado | Fabricante de Armações Circulares Vintage - EyeView',
  description: 'Fabricante de óculos de sol redondos no atacado. Armações circulares vintage em metal e acetato. Estilo retrô John Lennon, opções pequenas e oversized. MOQ 100 pçs. OEM/ODM direto de fábrica.',
  keywords: 'óculos de sol redondos no atacado, fabricante óculos circulares, armações redondas vintage, óculos retrô no atacado, óculos John Lennon, armações redondas metal, óculos redondos acetato atacado',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/redondo',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/round',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/redondo',
    },
  },
}

const products = [
  {
    name: 'Redondo Clássico Dourado',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8,00 - $12,00',
    moq: '100 pçs',
    description: 'O original. Fio de ouro fino, lentes perfeitamente circulares, plaquetas nasais de silicone ajustáveis. Esta é a armação que John Lennon tornou icônica e que todo amante do vintage ainda procura. Vendemos mais deste modelo do que de qualquer outro estilo redondo — e o fabricamos há 8 anos seguidos sem uma única mudança de design. Porque não se conserta o que não está quebrado.',
  },
  {
    name: 'Redondo Prateado',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$8,00 - $12,00',
    moq: '100 pçs',
    description: 'Mesma forma redonda clássica, tom mais frio. O acabamento em prata escovada atrai o público minimalista — fãs de design escandinavo, profissionais de tecnologia, o pessoal do "menos é mais". Combina perfeitamente com guarda-roupas neutros. Um dos nossos distribuidores escandinavos trabalha apenas com redondos prateados e vende mais de 3.000 pares por trimestre.',
  },
  {
    name: 'Redondo Vintage Preto',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8,50 - $12,50',
    moq: '100 pçs',
    description: 'Acetato preto grosso com um perfil marcante. Esta não é uma armação delicada de arame — é uma declaração. Pense em arquiteto, pense em professor de arte, pense em diretor criativo. A construção robusta confere um peso premium na mão que transmite qualidade. Popular entre boutiques de óculos independentes que querem algo com mais presença do que o metal.',
  },
  {
    name: 'Redondo Acetato Tartaruga',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9,00 - $13,00',
    moq: '100 pçs',
    description: 'Padrão tartaruga quente em acetato laminado. Os tons marrons e âmbar multitonais criam uma profundidade que armações de cor única simplesmente não conseguem igualar. Este é o "smart casual" dos óculos redondos — funciona com camiseta, funciona com blazer. Consistentemente um dos nossos top 5 em reposições em todas as linhas de produtos.',
  },
  {
    name: 'Redondo com Lentes Coloridas',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$9,50 - $13,50',
    moq: '100 pçs',
    description: 'Lentes rosas. Lentes azuis. Lentes amarelas. Lentes verdes. Este é o óculos de festival — Coachella, Glastonbury, Tomorrowland. A armação fina de metal dourado com lentes coloridas vibrantes captura aquela energia boêmia de espírito livre. Fornecemos para vários vendedores de merchandising de festivais de música que as vendem no local por 5-8x o custo de atacado. As margens são absurdas.',
  },
  {
    name: 'Redondo Oversized',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10,00 - $14,00',
    moq: '100 pçs',
    description: 'O irmão dramático. Lentes de 56-60mm que cobrem metade do rosto e fazem uma declaração do outro lado da sala. Os redondos oversized explodiram nas redes sociais — os influenciadores adoram as proporções. Mais cobertura solar que os redondos padrão também, então na verdade são mais protetores. Atualmente nosso estilo redondo de maior crescimento, 40% a mais ano após ano.',
  },
]

export default function RedondoPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Sol Redondos</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos de Sol Redondos no Atacado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lennon usou. Ozzy usou. Harry Potter usou. E agora seus clientes
            querem. Armações circulares vintage em metal, acetato e todos os tamanhos, desde
            intelectual sutil até declaração oversized. Direto de fábrica, MOQ 100 unidades.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Coleção de Óculos de Sol Redondos no Atacado - Armações Circulares Vintage"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">A Armação Que Moldou a Cultura</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              A armação redonda não começou como uma escolha de moda. No início dos anos 1900, era
              simplesmente a forma mais fácil de fabricar — círculos eram simples de polir. Mas então
              algo aconteceu. John Lennon pegou um par de redondos pequenos de arame nos anos 60
              e os transformou no símbolo visual de toda uma geração. Paz, amor e
              lentes perfeitamente circulares. Da noite para o dia, a armação redonda passou de &quot;funcional&quot; para
              &quot;revolucionária.&quot;
            </p>
            <p>
              A lista de pessoas que tornaram os redondos famosos parece um hall da fama cultural.
              Janis Joplin em Woodstock. Ozzy Osbourne no palco. Gandhi liderando uma nação.
              Steve Jobs lançando o iPhone. Cada um escolheu armações redondas — e cada um
              fez com que significassem algo diferente. Rebeldia. Criatividade. Sabedoria. Simplicidade.
              Esse é o poder dessa forma: ela se adapta a quem a usa.
            </p>
            <p>
              Avançando para agora. A Geração Z descobriu a moda vintage e mergulhou de cabeça. Os óculos
              de sol redondos são top-5 em vendas globais novamente, impulsionados pela cultura thrift, a
              moda de festivais e o lado estético do TikTok. A demanda é real e crescente — nossos
              pedidos de armações redondas aumentaram 35% ano após ano desde 2022. E com o <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">alerta da OMS sobre a exposição UV cumulativa</a>,
              óculos de moda que realmente protegem seus olhos são mais relevantes do que nunca.
              Se você não tem redondos em estoque, está deixando dinheiro na mesa.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Óculos de Sol Redondos no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">A Coleção Redondo</h2>
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
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Proteção UV400</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Logo personalizado disponível</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/pt/contato" className="btn-primary w-full block text-center">Solicitar Orçamento</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Pequenos, Médios ou Oversized? Importa Mais do Que Você Imagina</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            O tamanho da lente muda completamente a personalidade de uma armação redonda. Um redondo de 44mm
            sussurra &quot;intelectual.&quot; Um redondo de 60mm grita &quot;olhe para mim.&quot; Veja como escolher:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔍 Pequeno (42-48mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O tamanho autêntico &quot;Lennon&quot;. Pequeno e deliberado. Estes são para pessoas que
                se importam em acertar as proporções vintage exatamente. Não cobrem
                muito rosto — esse é o ponto. É sobre a estética, não sobre a cobertura.
                Muito popular com puristas vintage, compradores de óculos de grau e a
                &quot;geração Harry Potter.&quot; Mais vendidos em óticas.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Melhor para: rostos pequenos a médios</li>
                <li>• Vibe: intelectual, vintage autêntico</li>
                <li>• Mercado top: óticas, lojas vintage</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">👓 Médio (49-53mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A aposta segura. Os redondos médios se adaptam à maior variedade de rostos e atraem
                tanto homens quanto mulheres igualmente. Nem muito vintage, nem muito tendência — na medida certa.
                Se você é novo em ter armações redondas em estoque e não conhece seu mercado ainda,
                comece aqui. Estes têm a maior taxa de venda e a menor taxa de devolução
                de qualquer tamanho redondo que produzimos.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Melhor para: a maioria dos rostos adultos</li>
                <li>• Vibe: equilibrado, universalmente atraente</li>
                <li>• Mercado top: varejo geral, online</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔮 Oversized (54-62mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A peça de declaração. Os redondos oversized estão por todo Instagram e TikTok.
                Proporções grandes, máximo drama, muita cobertura solar. Estas são as
                armações que geram as reações de &quot;MEU DEUS, onde você comprou?&quot;. Atualmente
                nosso segmento de maior crescimento — 40% a mais ano após ano. Se seus clientes
                têm menos de 35 anos, provavelmente é isso que eles querem.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Melhor para: rostos médios a grandes</li>
                <li>• Vibe: ousado, pronto para redes sociais</li>
                <li>• Mercado top: marcas de moda, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Por Que os Redondos Sempre Voltam</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🎭" title="Peso Cultural" description="Mais de 60 anos de usuários icônicos. Nenhuma outra forma carrega tanta história e significado." />
            <FeatureCard icon="👓" title="Geometria Favorecedora" description="Círculos suavizam rostos angulares maravilhosamente. Mandíbula quadrada? Rosto diamante? Os redondos equilibram você." />
            <FeatureCard icon="✨" title="Apelo Unissex" description="Uma das poucas formas que vende igualmente bem para homens e mulheres. Dobre seu mercado instantaneamente." />
          </div>
        </section>

        {/* Specs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Especificações Técnicas</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Especificação</th>
                  <th className="p-4 text-left font-semibold">Metal</th>
                  <th className="p-4 text-left font-semibold">Acetato</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Material</td><td className="p-4 text-gray-600">Aço inoxidável / Titânio</td><td className="p-4 text-gray-600">Acetato estilo italiano</td></tr>
                <tr><td className="p-4 font-medium">Largura da Lente</td><td className="p-4 text-gray-600">42-58mm</td><td className="p-4 text-gray-600">46-62mm</td></tr>
                <tr><td className="p-4 font-medium">Ponte</td><td className="p-4 text-gray-600">18-22mm</td><td className="p-4 text-gray-600">18-24mm</td></tr>
                <tr><td className="p-4 font-medium">Comprimento da Haste</td><td className="p-4 text-gray-600">135-145mm</td><td className="p-4 text-gray-600">140-148mm</td></tr>
                <tr><td className="p-4 font-medium">Peso</td><td className="p-4 text-gray-600">15-22g</td><td className="p-4 text-gray-600">25-35g</td></tr>
                <tr><td className="p-4 font-medium">Opções de Lente</td><td className="p-4 text-gray-600">CR-39 / Cristal / TAC</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Plaquetas Nasais</td><td className="p-4 text-gray-600">Silicone ajustável</td><td className="p-4 text-gray-600">Ponte keyhole integrada</td></tr>
                <tr><td className="p-4 font-medium">Cores</td><td className="p-4 text-gray-600">12+ incluindo lentes coloridas</td><td className="p-4 text-gray-600">10+ opções</td></tr>
                <tr><td className="p-4 font-medium">Polarizado</td><td className="p-4 text-gray-600">TAC opcional</td><td className="p-4 text-gray-600">TAC opcional</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Estilos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/olho-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Óculos Olho de Gato</h3>
              <p className="text-sm text-gray-600">Outro ícone vintage — combina bem em coleções</p>
            </Link>
            <Link href="/pt/produtos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Redondos Polarizados</h3>
              <p className="text-sm text-gray-600">Adicione TAC antirreflexo a qualquer estilo redondo</p>
            </Link>
            <Link href="/pt/produtos/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Redondos Luz Azul</h3>
              <p className="text-sm text-gray-600">Armações vintage com proteção de tela</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Óculos redondos ficam bem em rostos redondos?"
              answer="Honestamente, depende. A sabedoria convencional diz 'não — círculos sobre círculos deixa tudo mais redondo.' E isso é verdade para algumas pessoas. Mas muita gente com rosto redondo usa mesmo assim porque gosta do visual. Nossa recomendação: se você está abastecendo para varejo geral, priorize redondos médios e oversized (que funcionam em mais formatos de rosto). Se um cliente com rosto redondo perguntar, sugira uma forma angular como nosso olho de gato ou wayfarer. Mas não os afaste — regras de moda existem para serem quebradas."
            />
            <FaqItem
              question="Metal ou acetato — qual é a diferença de verdade?"
              answer="Os redondos de metal são mais leves (15-22g vs 25-35g), mais finos e de aparência mais delicada. Têm plaquetas nasais ajustáveis para que se adaptem a mais formatos de rosto. Os redondos de acetato são mais ousados, mais pesados de uma forma 'premium', e vêm em muito mais cores e padrões — tartaruga, mármore, tons translúcidos. Ambos atendem os padrões de proteção UV da FDA. Metal diz 'intelectual minimalista.' Acetato diz 'criativo fashionista.' Ambos vendem bem, mas para clientes diferentes."
            />
            <FaqItem
              question="Posso obter armações redondas com lentes de grau?"
              answer="Com certeza. A forma redonda é na verdade a mais fácil de equipar com lentes de grau porque o círculo simétrico distribui a correção óptica uniformemente. Enviamos todas as nossas armações redondas prontas para grau com lentes de demonstração. Funciona para visão simples, bifocal e progressiva. Armações redondas de grau são um mercado enorme — pense em todos aqueles fãs de Harry Potter que realmente precisam de óculos!"
            />
            <FaqItem
              question="Quais cores de lente vendem melhor em armações redondas?"
              answer="Mais vendidas em ordem: (1) Verde clássico G-15 — o visual vintage autêntico, (2) Cinza — neutro, combina com tudo, (3) Marrom/âmbar — tom mais quente, ótimo contraste, (4) Espelhado azul — o público jovem adora, (5) Tingidos amarelo/rosa/laranja — compradores de festivais e boêmios. As lentes degradê (escuras em cima, mais claras embaixo) também estão muito em alta agora, especialmente em redondos oversized."
            />
            <FaqItem
              question="Qual é o MOQ e o prazo de entrega?"
              answer="100 unidades por estilo e cor para designs em estoque. 300 unidades para OEM personalizado (seu logo, cores Pantone, embalagem personalizada). A produção leva 15-25 dias para pedidos personalizados, 3-5 dias para itens em estoque. Também fazemos ODM completo — envie-nos um esboço ou foto de referência e criaremos um novo design do zero. Um cliente nos enviou por e-mail uma foto vintage de óculos de sol dos anos 60 e recriamos a armação em 3 semanas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">O Vintage Nunca Sai de Moda</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Marcas de moda, óticas, boutiques vintage, vendedores de merch de festivais — as armações
            redondas vendem em todo lugar. Peça amostras, confira a qualidade, e depois conversamos sobre números.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Solicitar Orçamento Grátis</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Óculos de Sol Redondos", "item": "https://eyeviewglasses.com/pt/produtos/redondo" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Óculos redondos ficam bem em rostos redondos?",
            "acceptedAnswer": { "@type": "Answer", "text": "Depende da pessoa. Convencionalmente, formas angulares são recomendadas para rostos redondos, mas muita gente com rostos redondos os usa por escolha. Os redondos médios e oversized funcionam em mais formatos de rosto do que os pequenos." }
          },
          {
            "@type": "Question",
            "name": "Qual é a diferença entre armações redondas de metal e acetato?",
            "acceptedAnswer": { "@type": "Answer", "text": "Os redondos de metal são mais leves (15-22g), mais finos e mais minimalistas com plaquetas nasais ajustáveis. Os redondos de acetato são mais ousados (25-35g), vêm em mais cores e padrões, e têm uma sensação premium e substancial." }
          },
          {
            "@type": "Question",
            "name": "Armações redondas podem ser feitas com lentes de grau?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sim — a forma redonda é a mais fácil para lentes de grau devido à geometria simétrica. Todas as nossas armações redondas são enviadas prontas para grau com lentes de demonstração para visão simples, bifocal e progressiva." }
          },
          {
            "@type": "Question",
            "name": "Quais cores de lente vendem melhor em armações redondas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mais vendidas: verde clássico G-15, cinza, marrom/âmbar, espelhado azul e lentes coloridas (amarelo, rosa, laranja) para compradores de festivais. Lentes degradê também são muito populares em redondos oversized." }
          },
          {
            "@type": "Question",
            "name": "Qual é o MOQ e o prazo de entrega?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 unidades por estilo para designs em estoque. 300 unidades para pedidos OEM personalizados. Produção: 15-25 dias personalizado, 3-5 dias estoque. Serviço de design ODM completo também disponível." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
