import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tipos de Lentes para Óculos de Sol: Guia Completo 2026',
  description: 'Um dono de fábrica detalha materiais, cores, revestimentos e polarização de lentes para óculos de sol. Custos reais, comparações honestas e conselhos de 20 anos na linha de produção.',
  keywords: 'tipos lentes óculos de sol, lentes polarizadas, materiais lentes, CR-39 vs policarbonato, cores lentes óculos, lentes fotocromáticas, revestimentos lentes, lentes TAC',
  alternates: {
    canonical: '/pt/blog/guia-lentes-oculos-sol',
    languages: {
      'en': '/blog/sunglasses-lens-guide',
      'pt': '/pt/blog/guia-lentes-oculos-sol',
    },
  },
}

export default function SunglassesLensGuidePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Tipos de Lentes para Óculos de Sol: Guia Completo 2026",
          "datePublished": "2026-04-25",
          "dateModified": "2026-05-02",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner breaks down sunglasses lens materials, colors, coatings, and polarization -- with real costs and honest comparisons.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/guia-lentes-oculos-sol" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the best lens material for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "There's no single 'best' -- it depends on use. Polycarbonate wins for impact resistance (sports, kids). CR-39 gives the sharpest optics for fashion and everyday wear. Glass is the gold standard for premium brands who want scratch resistance and perfect clarity. TAC is the budget king for polarized sunglasses. I've shipped millions of each." }
            },
            {
              "@type": "Question",
              "name": "Are polarized lenses worth it?",
              "acceptedAnswer": { "@type": "Answer", "text": "For driving, fishing, and water sports? 100% yes. The glare reduction is night-and-day different. For fashion and casual indoor/outdoor use? Bom ter but not essential. The wholesale cost difference is only $0.50-2.00 por par, but you can charge 30-60% more no varejo. So from a business perspective, polarized is almost always worth offering." }
            },
            {
              "@type": "Question",
              "name": "What color lens is best for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "Grey is the safe bet -- reduces brightness without changing colors. Brown/amber boosts contrast, great for driving and golf. Green gives you that classic Ray-Ban look with balanced color. Yellow is for low-light only. Blue and mirror? Mostly fashion. If you're a brand owner and can only pick two colors, go grey and brown -- they cover 70% of demand." }
            },
            {
              "@type": "Question",
              "name": "What are photochromic lenses?",
              "acceptedAnswer": { "@type": "Answer", "text": "They darken automatically in sunlight and go clear indoors. Cool tech, but with caveats: they don't work well behind car windshields (which block the UV that triggers the reaction), they're slower in hot weather, and the photochromic effect degrades after 2-3 years. Bom for outdoor enthusiasts who hate swapping between regular glasses and sunglasses." }
            },
            {
              "@type": "Question",
              "name": "What lens coatings should sunglasses have?",
              "acceptedAnswer": { "@type": "Answer", "text": "UV400 is mandatory -- non-negotiable. Anti-reflective coating is a close second (kills the annoying back-glare). After that: scratch-resistant for durability, hydrophobic if your customers are outdoorsy, oleophobic if they hate fingerprints. A full coating stack adds $0.80-2.50 por par wholesale but lets you charge $20-40 more no varejo." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Tecnologia</span>
            <span>25 de abril de 2026</span>
            <span>•</span>
            <span>14 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tipos de Lentes para Óculos de Sol: Guia Completo do Comprador para 2026
          </h1>
          <p className="text-xl text-gray-600">
            Já testei, quebrei e enviei mais lentes de óculos de sol do que consigo contar. Aqui está o que 20 anos 
            na linha de produção me ensinaram sobre o que realmente importa -- e o que é apenas marketing.
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
            <li><a href="#why-lenses-matter" className="text-primary-600 hover:underline">Por que Sua Escolha de Lente Importa Mais que a Armação</a></li>
            <li><a href="#lens-materials" className="text-primary-600 hover:underline">Os Quatro Materiais de Lente (E Quando Usar Cada Um)</a></li>
            <li><a href="#lens-colors" className="text-primary-600 hover:underline">Cores das Lentes: O que Cada Tonalidade Realmente Faz</a></li>
            <li><a href="#lens-coatings" className="text-primary-600 hover:underline">Revestimentos: Os Upgrades Invisíveis que Importam</a></li>
            <li><a href="#polarized-vs-non" className="text-primary-600 hover:underline">Polarizado vs Não Polarizado: A História Real</a></li>
            <li><a href="#photochromic" className="text-primary-600 hover:underline">Lentes Fotocromáticas: Tecnologia Legal, Limitações Reais</a></li>
            <li><a href="#choosing-lenses" className="text-primary-600 hover:underline">Escolhendo Lentes por Atividade</a></li>
            <li><a href="#for-brands" className="text-primary-600 hover:underline">Manual do Dono de Marca: Estratégia de Lentes por Faixa de Preço</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas que Ouço Toda Semana</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Três meses atrás, um dono de marca de Toronto me enviou duas amostras concorrentes. &quot;Jacky, essas parecem 
            idênticas. Mesmo formato de armação, mesma cor. Mas uma é vendida por $29 e a outra por $149. Qual é a diferença?&quot;
          </p>
          <p>
            Segurei as duas contra a janela. O par de $29 tinha um leve tom amarelado, distorção visível perto 
            das bordas, e o revestimento já mostrava micro-riscos do manuseio no transporte. 
            O par de $149? Cristalino. Zero distorção. Passei o polegar e a marca de dedo 
            simplesmente deslizou.
          </p>
          <p>
            Mesma armação. Lentes diferentes. Essa é a diferença.
          </p>
          <p>
            A maioria das pessoas gasta 90% do tempo escolhendo estilos de armação e 10% pensando nas lentes. Deveria 
            ser o contrário. A armação faz você ficar bonito. A lente faz você <em>enxergar</em> bem. E neste 
            negócio, devoluções e avaliações ruins quase sempre se devem à qualidade da lente, não ao design da armação.
          </p>

          {/* Why Lenses Matter */}
          <h2 id="why-lenses-matter" className="text-3xl font-bold mt-16 mb-6">Por que Sua Escolha de Lente Importa Mais que a Armação</h2>
          <p>
            Algo que me tira o sono: lentes escuras baratas sem proteção UV adequada 
            são <strong>piores do que não usar óculos de sol.</strong> A{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/ultraviolet-radiation" target="_blank" rel="noopener" className="text-primary-600 hover:underline">ficha informativa sobre radiação UV da Organização Mundial da Saúde</a>{' '}
            deixa isso bem claro.
          </p>
          <p>
            Por quê? A tonalidade escura faz suas pupilas dilatarem -- elas se abrem porque pensam que está escurecendo. Mas 
            se essas lentes não bloqueiam UV, você está canalizando <em>mais</em> radiação nociva para 
            pupilas bem abertas. É como abrir as janelas durante uma tempestade de areia porque você colocou uma venda nos olhos.
          </p>
          <p>Contra o que lentes de qualidade protegem:</p>
          <ul>
            <li><strong>Raios UVA (320-400nm):</strong> Os sorrateiros. Penetram fundo no seu olho. Associados a catarata e degeneração macular após anos de exposição.</li>
            <li><strong>Raios UVB (280-320nm):</strong> Os agressivos. Eles queimam. Já ouviu falar de fotoceratite? É basicamente uma queimadura solar na córnea. Nada agradável.</li>
            <li><strong>Ofuscamento:</strong> Luz refletida na água, estradas, neve, capôs de carros. Não é apenas incômodo -- é uma questão de segurança no trânsito. Lentes polarizadas existem por uma razão.</li>
          </ul>
          <p>
            Para donos de marcas: a proteção UV não é opcional. É uma exigência legal --{' '}
            <a href="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses" target="_blank" rel="noopener" className="text-primary-600 hover:underline">a FDA regula óculos de sol</a>{' '}
            como produtos emissores de radiação nos EUA, e a UE exige marcação CE. 
            Se for pego vendendo óculos sem certificação UV adequada, 
            sua remessa é apreendida na alfândega. Vi isso acontecer com um cliente de um concorrente em Hamburgo. 
            €40.000 em produto, confiscado. Não deixe isso acontecer com você.
          </p>

          {/* Lens Materials */}
          <h2 id="lens-materials" className="text-3xl font-bold mt-16 mb-6">Os Quatro Materiais de Lente (E Quando Usar Cada Um)</h2>
          <p>
            Quatro materiais dominam o mundo dos óculos de sol. Cada um tem seu ponto forte, e cada um tem coisas nas quais é 
            péssimo. Trabalhei com todos eles por duas décadas. Aqui está a versão sem filtro.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Policarbonato -- O Resistente</h3>
          <p>
            Originalmente desenvolvido para cúpulas de caças e viseiras de capacetes de astronautas. Isso já diz algo 
            sobre sua resistência a impactos. Uma vez vi um funcionário da fábrica pisar acidentalmente em uma 
            lente de policarbonato. Ela flexionou. Não rachou. Tente isso com vidro.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">No que é Ótimo</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>10x mais resistente a impactos que CR-39 ou vidro</li>
                <li>Leve -- gravidade específica de 1,20</li>
                <li>Proteção UV integrada (sem necessidade de revestimento extra)</li>
                <li>Não estilhaça nos seus olhos se algo atingir</li>
                <li>Fino mesmo em prescrições fortes</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Onde Deixa a Desejar</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Clareza óptica não é tão nítida quanto CR-39 ou vidro</li>
                <li>Risca mais facilmente -- precisa de revestimento rígido</li>
                <li>Leve aberração cromática nas bordas</li>
                <li>Mais caro que TAC</li>
              </ul>
            </div>
          </div>
          <p><strong>Quem deve usar:</strong> Marcas esportivas, óculos infantis, óculos de segurança, qualquer coisa ativa. Se seu cliente pode derrubar, sentar ou jogar seus óculos de sol, policarbonato.</p>
          <p><strong>Custo da lente no atacado:</strong> $1.50-$4.00 por par.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">CR-39 -- O Versátil</h3>
          <p>
            O CR-39 é o carro-chefe da indústria óptica desde 1947. O nome significa &quot;Columbia 
            Resin #39&quot; -- era literalmente a 39ª fórmula que tentaram. Ainda bem que continuaram após a #38. 
            (<a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 hover:underline">A história é fascinante</a> se você gosta de ciência dos materiais.)
          </p>
          <p>
            Este é meu favorito pessoal para óculos de sol de moda. A clareza óptica é notavelmente melhor que 
            o policarbonato -- segure uma lente CR-39 e uma de policarbonato lado a lado, olhe através delas para um texto fino, 
            e você verá a diferença imediatamente. As cores são mais fiéis, as bordas são mais nítidas.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">No que é Ótimo</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Excelente clareza óptica (valor Abbe: 58 -- técnico, mas importa)</li>
                <li>Melhor resistência a riscos que o policarbonato</li>
                <li>Aceita tonalização lindamente -- qualquer cor, qualquer degradê</li>
                <li>Leve o suficiente para uso o dia todo</li>
                <li>Bom custo-benefício pela qualidade</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Onde Deixa a Desejar</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Pode estilhaçar em impacto forte (não indicado para esportes)</li>
                <li>Proteção UV precisa ser adicionada como revestimento</li>
                <li>Mais grosso em prescrições altas</li>
                <li>Não é tão &quot;fino&quot; na moda quanto o policarbonato</li>
              </ul>
            </div>
          </div>
          <p><strong>Quem deve usar:</strong> Marcas de moda, uso diário, óculos de sol com grau, qualquer um focando nos mercados intermediário a premium. É o que eu recomendo para 60% dos nossos clientes de moda.</p>
          <p><strong>Custo da lente no atacado:</strong> $1.00-$3.50 por par.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Vidro -- O Rei Clássico</h3>
          <p>
            Existe uma razão pela qual a Ray-Ban usou vidro exclusivamente por décadas. Nada supera em termos de pureza 
            óptica. Quando seguro uma lente de vidro de qualidade e olho através dela, é como olhar através 
            de nada. A clareza é tão boa assim.
          </p>
          <p>
            Mas o vidro é pesado. E quebra. Tive um cliente em 2019 que insistiu em lentes de vidro para 
            sua linha premium. Produto lindo. Então ele levou um susto com responsabilidade quando a lente de um cliente 
            rachou durante um jogo de vôlei de praia. Ele mudou para CR-39 na temporada seguinte.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">No que é Ótimo</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Melhor clareza óptica que o dinheiro pode comprar (valor Abbe: 59+)</li>
                <li>Resistência a riscos que ri de chaves e moedas</li>
                <li>Não deforma, distorce ou degrada com o tempo</li>
                <li>Sensação premium -- você sente a qualidade na mão</li>
                <li>Resistência química (não reage a protetor solar ou suor)</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Onde Deixa a Desejar</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Pesado. Notavelmente mais pesado. (Gravidade específica: 2,54)</li>
                <li>Pode estilhaçar -- preocupação de segurança para uso ativo</li>
                <li>Mais caro para produzir e enviar</li>
                <li>Compatibilidade limitada com armações (lente pesada precisa de armação resistente)</li>
                <li>Não indicado para crianças, esportes ou aplicações de segurança</li>
              </ul>
            </div>
          </div>
          <p><strong>Quem deve usar:</strong> Marcas de luxo, linhas de moda premium, óculos para dirigir, qualquer um vendendo a $100+ no varejo que queira &quot;óptica de referência&quot; como diferencial.</p>
          <p><strong>Custo da lente no atacado:</strong> $3.00-$8.00+ por par.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">TAC -- O Campeão do Custo-Benefício</h3>
          <p>
            O TAC (Triacetato de Celulose) é o carro-chefe do mercado de óculos de sol polarizados acessíveis. 
            Se você já comprou óculos polarizados por menos de $30, quase certamente tinham lentes TAC. 
            É um sanduíche -- um filme polarizador prensado entre camadas de acetato de celulose.
          </p>
          <p>
            Vou ser honesto: o TAC não vai ganhar nenhum prêmio por qualidade óptica ou durabilidade. Mas faz 
            uma coisa muito bem: torna os óculos polarizados acessíveis. E para uma marca vendendo 
            a $15-$40 no varejo, é exatamente isso que importa.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">No que é Ótimo</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Opção de lente polarizada mais barata -- ponto final</li>
                <li>Material de lente mais leve do mercado</li>
                <li>Boa eficiência de polarização (bloqueia 99%+ do ofuscamento)</li>
                <li>Proteção UV400 inclusa de fábrica</li>
                <li>Disponível em todas as cores imagináveis</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Onde Deixa a Desejar</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Clareza óptica é... aceitável. Não é ótima.</li>
                <li>Risca só de olhar torto</li>
                <li>Pode deformar se deixado no painel quente do carro</li>
                <li>A camada de polarização pode delaminar após 1-2 anos</li>
                <li>Não indicado para uso com grau</li>
              </ul>
            </div>
          </div>
          <p><strong>Quem deve usar:</strong> Marcas econômicas, óculos promocionais, linhas polarizadas de entrada, produtos de posto de gasolina e lojas turísticas. Sem julgamento -- existe um mercado enorme para óculos polarizados acessíveis.</p>
          <p><strong>Custo da lente no atacado:</strong> $0,50-$2,00 por par. É, você leu certo.</p>

          {/* Material Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Propriedade</th>
                  <th className="px-4 py-3 text-left">Polycarbonate</th>
                  <th className="px-4 py-3 text-left">CR-39</th>
                  <th className="px-4 py-3 text-left">Glass</th>
                  <th className="px-4 py-3 text-left">TAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Clareza Óptica</td><td className="px-4 py-3">Bom</td><td className="px-4 py-3">Excelente</td><td className="px-4 py-3">Melhor</td><td className="px-4 py-3">Razoável</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Resistência a Impacto</td><td className="px-4 py-3">Melhor</td><td className="px-4 py-3">Razoável</td><td className="px-4 py-3">Fraco</td><td className="px-4 py-3">Razoável</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Resistência a Riscos</td><td className="px-4 py-3">Razoável</td><td className="px-4 py-3">Bom</td><td className="px-4 py-3">Melhor</td><td className="px-4 py-3">Fraco</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Peso</td><td className="px-4 py-3">Leve</td><td className="px-4 py-3">Leve</td><td className="px-4 py-3">Pesado</td><td className="px-4 py-3">Mais Leve</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Proteção UV</td><td className="px-4 py-3">Integrada</td><td className="px-4 py-3">Adicionada</td><td className="px-4 py-3">Adicionada</td><td className="px-4 py-3">Integrada</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Custo</td><td className="px-4 py-3">$$</td><td className="px-4 py-3">$$</td><td className="px-4 py-3">$$$</td><td className="px-4 py-3">$</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Minha Escolha Para</td><td className="px-4 py-3">Esportes</td><td className="px-4 py-3">Moda</td><td className="px-4 py-3">Luxo</td><td className="px-4 py-3">Polarizado econômico</td></tr>
              </tbody>
            </table>
          </div>

          {/* Lens Cors */}
          <h2 id="lens-colors" className="text-3xl font-bold mt-16 mb-6">Cores das Lentes: O que Cada Tonalidade Realmente Faz</h2>
          <p>
            A maioria das pessoas escolhe a cor da lente com base no que fica legal. Tudo bem para marcas de moda. Mas se 
            você está construindo uma linha esportiva ou de performance, ou se simplesmente quer dar aos seus clientes 
            conselhos genuinamente úteis, aqui está o que cada cor realmente faz com a luz.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                <h3 className="font-bold text-lg">Cinza</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                A Suíça das cores de lente -- neutra, confiável, não desagrada ninguém. Reduz o brilho uniformemente 
                em todo o espectro sem alterar as cores. O que você vê através do cinza é o que veria 
                sem óculos de sol, só que mais escuro.
              </p>
              <p className="text-sm"><strong>Use para:</strong> Dirigir, uso diário, qualquer coisa</p>
              <p className="text-sm"><strong>Minha opinião:</strong> Se você só pode ter uma cor em estoque, tenha cinza. Vende 3:1 sobre todas as outras nos dados da nossa fábrica.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-700"></div>
                <h3 className="font-bold text-lg">Marrom / Âmbar</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Filtra a luz azul, o que aguça o contraste e a percepção de profundidade. As coisas parecem &quot;mais quentes&quot; 
                e as bordas se destacam mais. Golfistas juram por elas porque fazem a bola se destacar contra a grama verde.
              </p>
              <p className="text-sm"><strong>Use para:</strong> Dirigir, golfe, pesca, trilhas</p>
              <p className="text-sm"><strong>Minha opinião:</strong> Segundo mais vendido. Combine cinza + marrom e você cobre 70% da demanda.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-700"></div>
                <h3 className="font-bold text-lg">Verde</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Pense no Ray-Ban G-15. Melhora levemente o contraste mantendo as cores naturais. Um bom meio-termo 
                entre a neutralidade do cinza e o calor do marrom. Tem uma vibe clássica e vintage que 
                certos públicos adoram.
              </p>
              <p className="text-sm"><strong>Use para:</strong> Ar livre em geral, golfe, tênis</p>
              <p className="text-sm"><strong>Minha opinião:</strong> Sólida 3ª opção. Especialmente popular na faixa etária de 35-55 anos. Clássico nunca morre.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                <h3 className="font-bold text-lg">Amarelo / Laranja</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                O especialista em pouca luz. Aumenta dramaticamente o contraste em condições nubladas, com neblina ou ao amanhecer/entardecer. 
                Não é escuro o suficiente para sol forte. Atiradores e pilotos usam lentes amarelas há décadas para identificar 
                alvos contra céus cinzentos.
              </p>
              <p className="text-sm"><strong>Use para:</strong> Dias nublados, amanhecer/entardecer, tiro, esqui</p>
              <p className="text-sm"><strong>Minha opinião:</strong> Nicho, mas com base de clientes fiéis. Ótimo para linhas esportivas específicas.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <h3 className="font-bold text-lg">Azul</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Vamos ser realistas -- azul é 90% moda, 10% função. Reduz um pouco o ofuscamento e melhora levemente 
                os tons quentes, mas as pessoas compram lentes azuis porque ficam estilosas. E essa é uma razão perfeitamente 
                válida neste negócio.
              </p>
              <p className="text-sm"><strong>Use para:</strong> Moda, uso casual, esportes na neve</p>
              <p className="text-sm"><strong>Minha opinião:</strong> Amigável para Instagram. Vende bem para o público de 18-30 anos.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-300"></div>
                <h3 className="font-bold text-lg">Espelhado</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Um revestimento reflexivo aplicado sobre uma tonalidade base. O espelho reflete a luz antes de entrar 
                na lente, proporcionando redução extra de ofuscamento além da tonalidade base. Além disso, as pessoas não conseguem ver 
                seus olhos. Algumas pessoas adoram isso. Outras detestam.
              </p>
              <p className="text-sm"><strong>Use para:</strong> Alto ofuscamento (praia, neve, água), moda</p>
              <p className="text-sm"><strong>Minha opinião:</strong> Espelhado adiciona $0,30-0,80/par no atacado mas permite cobrar $10-20 a mais no varejo. Upgrade de alta margem.</p>
            </div>
          </div>

          {/* Lens Coatings */}
          <h2 id="lens-coatings" className="text-3xl font-bold mt-16 mb-6">Revestimentos: Os Upgrades Invisíveis que Importam</h2>
          <p>
            Revestimentos não viram manchete. Ninguém posta &quot;olha o revestimento hidrofóbico dos meus óculos novos!&quot; 
            no Instagram. Mas revestimentos são o que separa um par de óculos de $30 de um de $130 
            -- e custam centavos para adicionar no nível da fábrica.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Revestimento Antirreflexo (AR)</h3>
          <p>
            Esse me irrita porque muitas marcas pulam. Eis o problema: a luz não 
            vem só da frente. Ela reflete na superfície <em>traseira</em> da sua lente também -- luz refletida 
            de trás de você atinge a superfície interna da lente e volta direto para seus olhos. É aquela 
            imagem fantasma irritante que você vê quando o sol está atrás de você. O revestimento AR elimina 99,5% disso.
          </p>
          <p><strong>Custo:</strong> $0,30-$1,00 por par no atacado. Eu coloco em tudo que enviamos. Tudo.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Revestimento Hidrofóbico</h3>
          <p>
            A água forma gotas e escorre em vez de se espalhar pela lente. Divisor de águas para qualquer um perto de 
            água, chuva ou umidade. Demonstrei isso para um cliente uma vez segurando uma lente com revestimento e uma 
            sem revestimento embaixo de uma torneira. A com revestimento secou em segundos. A sem revestimento parecia 
            um box de banheiro. Ele pediu hidrofóbico em toda a linha dele naquele dia.
          </p>
          <p><strong>Custo:</strong> $0,20-$0,80 por par no atacado.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Revestimento Oleofóbico</h3>
          <p>
            Mesma ideia do hidrofóbico, mas para óleos -- impressões digitais, oleosidade do rosto, resíduos de protetor solar. Sabe 
            como a tela do seu celular repele impressões digitais? Mesma tecnologia. Seus clientes não vão saber por que 
            os óculos deles ficam mais limpos que o par anterior. Só vão saber que gostam mais dos seus.
          </p>
          <p><strong>Custo:</strong> $0,25-$0,80 por par no atacado.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Revestimento Anti-Riscos</h3>
          <p>
            Nenhuma lente é à prova de riscos. Quem disser o contrário está vendendo algo. Mas um bom revestimento rígido 
            faz uma diferença real. Policarbonato sem revestimento anti-riscos vai parecer que perdeu uma 
            briga com um gato em um mês. Com o revestimento, ficará limpo por um ano de uso normal.
          </p>
          <p><strong>Custo:</strong> $0,15-$0,50 por par no atacado. Deveria ser padrão. Ponto final.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Revestimento Anti-Embaçante</h3>
          <p>
            Previne embaçamento quando você sai do ar-condicionado para o calor (ou vice-versa). O revestimento muda 
            a tensão superficial para que a umidade se espalhe em um filme fino e invisível em vez de formar gotículas visíveis. 
            Mais útil para óculos esportivos e mercados com alta umidade.
          </p>
          <p><strong>Custo:</strong> $0,30-$1,00 por par no atacado.</p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 O Segredo dos Revestimentos Combinados</h3>
            <p className="text-amber-800">
              Aqui está o que eu digo a todo dono de marca: um pacote completo de revestimentos (AR + hidrofóbico + oleofobico + 
              anti-riscos) adiciona $0,80-$2,50 por par no atacado. Você pode cobrar $20-$40 a mais no varejo. 
              Esse é o upgrade de maior margem em todo o negócio de óculos de sol. Oferecemos{' '}
              <Link href="/pt/produtos" className="text-amber-900 underline">pacotes de revestimento</Link> personalizáveis exatamente por essa razão.
            </p>
          </div>

          {/* Polarized vs Non-Polarized */}
          <h2 id="polarized-vs-non" className="text-3xl font-bold mt-16 mb-6">Polarizado vs Não Polarizado: A História Real</h2>
          <p>
            Tive uma discussão acalorada com um dono de marca no ano passado sobre polarização. Ele queria economizar $1,50 por 
            par usando não polarizado. Eu disse que ele perderia $15 por par em poder de preço no varejo. Ele não 
            ouviu. Seis meses depois me ligou para fazer novo pedido -- polarizado desta vez. &quot;Você tinha razão, Jacky. 
            Os clientes não paravam de perguntar.&quot;
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como a Polarização Realmente Funciona</h3>
          <p>
            Aula rápida de física -- vou ser breve. A luz normal vibra em todas as direções. Quando ela reflete 
            em uma superfície plana (estrada, água, neve, capô de carro), ela se torna &quot;horizontalmente polarizada&quot; -- ou seja, 
            vibra principalmente de um lado para o outro. Essa luz horizontal concentrada é o que seu cérebro percebe 
            como ofuscamento cegante.
          </p>
          <p>
            Uma lente polarizada tem um filtro com pequenas listras verticais. A luz horizontal é bloqueada. A luz vertical 
            passa. Resultado: o ofuscamento desaparece, mas você ainda consegue ver tudo o mais claramente. 
            A <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 hover:underline">física por trás da polarização</a> é 
            bem documentada se você quiser se aprofundar. Mas o efeito prático é genuinamente impressionante -- segure 
            uma lente polarizada sobre a água e veja o ofuscamento desaparecer. Você consegue ver até o fundo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Onde Lentes Polarizadas Brilham</h3>
          <ul>
            <li><strong>Dirigir:</strong> O ofuscamento da estrada desaparece. Reflexos de outros carros -- sumiram. É uma funcionalidade genuina de segurança.</li>
            <li><strong>Pesca:</strong> Você consegue ver os peixes através da superfície da água. Pescadores sérios não compram não polarizado.</li>
            <li><strong>Esportes aquáticos:</strong> Corta o ofuscamento da superfície como nada mais.</li>
            <li><strong>Neve:</strong> Reduz o ofuscamento branco intenso que causa cegueira da neve.</li>
            <li><strong>Uso diário:</strong> Menos fadiga ocular do ofuscamento urbano ambiente. Seus olhos simplesmente se sentem mais relaxados.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Onde Polarizado Fica Estranho</h3>
          <ul>
            <li><strong>Telas de celular e notebook:</strong> Telas LCD podem parecer escuras ou mostrar padrões de arco-íris em certos ângulos. A geração TikTok percebe isso imediatamente.</li>
            <li><strong>Pilotos:</strong> Instrumentos de cockpit usam displays LCD. Lentes polarizadas podem torná-los difíceis de ler. A maioria das autoridades de aviação desaconselha.</li>
            <li><strong>Alguns cenários de esqui:</strong> Alguns esquiadores experientes preferem não polarizado porque a polarização pode mascarar a aparência de placas de gelo.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">O Caso de Negócio para Polarizado</h3>
            <p className="text-blue-800">
              Adicionar polarização custa $0,50-$2,00 por par no atacado. O ágio no varejo? Preço 30-60% maior. 
              Um par não polarizado de $25 se torna um par polarizado de $35-$40. A demanda do consumidor por polarizado 
              cresceu cerca de 15% ao ano nos últimos cinco anos. Se você não está oferecendo, está 
              deixando dinheiro na mesa.
            </p>
          </div>

          {/* Photochromic */}
          <h2 id="photochromic" className="text-3xl font-bold mt-16 mb-6">Lentes Fotocromáticas: Tecnologia Legal, Limitações Reais</h2>
          <p>
            Lentes fotocromáticas (você pode conhecê-las como &quot;Transitions&quot;) escurecem automaticamente na luz solar 
            e ficam claras em ambientes internos. Elas usam moléculas reativas ao UV -- cloreto de prata ou compostos orgânicos -- 
            que mudam de forma quando o UV as atinge, absorvendo mais luz visível.
          </p>
          <p>
            Acho que são uma tecnologia genuinamente legal. Mas também acho que são supervalorizadas. Aqui está o que o 
            marketing não conta:
          </p>
          <ul>
            <li><strong>Para-brisas de carro bloqueiam UV.</strong> Para-brisas modernos têm camadas de filtragem UV. Como lentes fotocromáticas precisam de UV para escurecer, frequentemente não funcionam bem dentro de um carro. Você está dirigindo sob sol forte, apertando os olhos, se perguntando por que suas lentes &quot;automáticas&quot; não estão fazendo nada. Formulações mais novas são melhores nisso, mas ainda é um problema conhecido.</li>
            <li><strong>O calor as deixa preguiçosas.</strong> Acima de 35°C, as reações fotocromáticas desaceleram. As lentes podem não escurecer totalmente no pico do calor do verão -- exatamente quando você mais precisa delas.</li>
            <li><strong>Elas se desgastam.</strong> O efeito fotocromático degrada após 2-3 anos de uso diário. Ainda protegem contra UV, mas o escurecimento fica mais lento e menos dramático.</li>
            <li><strong>A velocidade de transição não é instantânea.</strong> Escurecer leva 30-60 segundos. Clarear leva 2-5 minutos. Se você entrar em um restaurante escuro, estará usando óculos de sol em ambiente fechado por um ou dois minutos. Um pouco constrangedor.</li>
          </ul>
          <p>
            Dito isso, para entusiastas do ar livre que realmente passam tempo alternando entre sol e sombra -- trilheiros, 
            ciclistas, trabalhadores da construção -- lentes fotocromáticas são uma conveniência real. Só gerencie as expectativas.
          </p>
          <p><strong>Custo no atacado:</strong> 2-4x mais que lentes tonalizadas padrão. Vale a pena oferecer como opção premium, não como padrão.</p>

          {/* Choosing by Atividade */}
          <h2 id="choosing-lenses" className="text-3xl font-bold mt-16 mb-6">Escolhendo Lentes por Atividade</h2>
          <p>
            Me perguntam &quot;qual lente devo usar para X?&quot; umas cinco vezes por dia. Aqui está minha cola -- 
            a mesma que mantenho colada na parede ao lado da minha mesa:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Atividade</th>
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Cor</th>
                  <th className="px-4 py-3 text-left">Polarizado?</th>
                  <th className="px-4 py-3 text-left">Revestimentos Essenciais</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Dirigir</td><td className="px-4 py-3">CR-39 ou Vidro</td><td className="px-4 py-3">Cinza ou Marrom</td><td className="px-4 py-3">Sim ✅</td><td className="px-4 py-3">AR, Anti-fog</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Pesca</td><td className="px-4 py-3">Polycarbonate</td><td className="px-4 py-3">Marrom ou Verde</td><td className="px-4 py-3">Com certeza ✅</td><td className="px-4 py-3">Hidrofóbico, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Corrida / Ciclismo</td><td className="px-4 py-3">Policarbonato</td><td className="px-4 py-3">Cinza ou Laranja</td><td className="px-4 py-3">Bom ter</td><td className="px-4 py-3">Anti-embaçante, Hidrofóbico</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Praia / Água</td><td className="px-4 py-3">Policarbonato</td><td className="px-4 py-3">Cinza ou Espelhado</td><td className="px-4 py-3">Sim ✅</td><td className="px-4 py-3">Hidrofóbico, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Esqui</td><td className="px-4 py-3">Policarbonato</td><td className="px-4 py-3">Marrom ou Amarelo</td><td className="px-4 py-3">Discutível</td><td className="px-4 py-3">Anti-embaçante, AR</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Moda / Casual</td><td className="px-4 py-3">CR-39 ou Vidro</td><td className="px-4 py-3">Vale tudo</td><td className="px-4 py-3">Opcional</td><td className="px-4 py-3">Oleophobic, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Golfe</td><td className="px-4 py-3">CR-39</td><td className="px-4 py-3">Marrom ou Verde</td><td className="px-4 py-3">Sim ✅</td><td className="px-4 py-3">AR, Scratch-resistant</td></tr>
              </tbody>
            </table>
          </div>

          {/* For Brand Owners */}
          <h2 id="for-brands" className="text-3xl font-bold mt-16 mb-6">Manual do Dono de Marca: Estratégia de Lentes por Faixa de Preço</h2>
          <p>
            Esta é a seção que eu gostaria que existisse quando comecei a ajudar marcas há 15 anos. Suas escolhas de lentes 
            precisam combinar com seu preço de varejo -- gaste demais e suas margens morrem, gaste de menos e suas 
            avaliações despencam.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Marcas Econômicas (US$10-$30 varejo)</h3>
          <p>As margens são apertadas. Cada centavo conta. Veja como fazer funcionar:</p>
          <ul>
            <li>TAC polarizado para seus SKUs &quot;polarizados&quot; -- clientes nessa faixa de preço não vão notar a diferença óptica em relação ao CR-39</li>
            <li>Policarbonato não polarizado para sua linha padrão</li>
            <li>UV400 é obrigatório (obviamente)</li>
            <li>Cinza e marrom cobrem 80% da demanda -- não faça estoque excessivo de cores</li>
            <li>Acabamentos espelhados adicionam $0,30-0,80/par mas permitem cobrar $5-10 a mais. Alto ROI.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Marcas Intermediárias (US$30-$80 varejo)</h3>
          <p>É aqui que a qualidade da lente se torna uma vantagem competitiva:</p>
          <ul>
            <li>CR-39 para estilos fashion, policarbonato para estilos esportivos</li>
            <li>Polarizado deve estar disponível em todos os estilos principais -- é esperado nessa faixa de preço</li>
            <li>Pacote de revestimento AR + hidrofóbico (o cliente sente a diferença)</li>
            <li>Gama completa de cores com opções espelhadas sazonais para fotos de produto dignas de Instagram</li>
            <li>Considere fotocromático como um SKU premium limitado -- gera buzz</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Marcas Premium (US$80+ varejo)</h3>
          <p>Nesse nível, você está competindo com Maui Jim e Ray-Ban. As lentes precisam justificar o preço:</p>
          <ul>
            <li>Vidro ou CR-39 premium -- nada menos</li>
            <li>Pacote completo de revestimentos: AR + hidrofóbico + oleofobico + anti-riscos</li>
            <li>Polarizado como <em>padrão</em>, não como upgrade</li>
            <li>Fotocromático disponível como opção</li>
            <li>Considere cores de tonalidade exclusivas personalizadas -- &quot;disponível apenas da [sua marca]&quot;</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Não Sabe Quais Lentes Servem para Sua Marca?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Envie-me seu preço de varejo alvo e seu cliente-alvo, e eu direi exatamente qual configuração de lente 
              maximiza suas margens sem sacrificar a qualidade. Já fiz isso para mais de 500 marcas -- 
              leva cerca de 10 minutos.
            </p>
            <Link href="/pt/contato" className="btn-primary">
              Pergunte ao Jacky Sobre Lentes
            </Link>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Perguntas que Ouço Toda Semana</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qual é o melhor material de lente para óculos de sol?</h3>
              <p className="text-gray-600">
                Não existe um único &quot;melhor.&quot; Policarbonato para esportes e durabilidade. CR-39 para a óptica 
                mais nítida no uso diário. Vidro para marcas premium que querem a melhor clareza e resistência a riscos. 
                TAC para polarizado acessível. Já enviei milhões de cada -- todos têm seu lugar.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Lentes polarizadas valem a pena?</h3>
              <p className="text-gray-600">
                Para dirigir, pescar e esportes aquáticos -- 100% sim. O aumento de custo no atacado é de apenas $0,50-$2,00 
                por par, mas você pode cobrar 30-60% a mais no varejo. Do ponto de vista de negócios, é uma das 
                melhores jogadas de margem da indústria.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qual cor de lente é melhor para óculos de sol?</h3>
              <p className="text-gray-600">
                Cinza é o coringa seguro. Marrom aumenta o contraste -- ótimo para dirigir e golfe. Verde é a 
                vibe clássica Ray-Ban. Amarelo é só para pouca luz. Azul e espelhado são jogadas de moda. Se você é 
                uma marca e só pode escolher duas, vá de cinza e marrom -- cobrem 70% da demanda dos clientes.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">O que são lentes fotocromáticas?</h3>
              <p className="text-gray-600">
                Escurecem na luz solar e ficam claras em ambientes internos. Tecnologia legal com ressalvas: não funcionam bem 
                atrás de para-brisas de carro, são mais lentas no calor, e o efeito degrada após 2-3 anos. Melhores 
                para entusiastas do ar livre que detestam trocar entre óculos comuns e óculos de sol.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quais revestimentos os óculos de sol devem ter?</h3>
              <p className="text-gray-600">
                UV400 é inegociável. Revestimento AR vem logo em seguida. Depois: anti-riscos para durabilidade, 
                hidrofóbico para clientes que gostam de atividades ao ar livre, oleofobico para quem odeia impressões digitais. Um pacote completo adiciona $0,80-$2,50 
                por par no atacado mas permite cobrar $20-$40 a mais no varejo. Faça as contas.
              </p>
            </div>
          </div>

          {/* Artigos Relacionados */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais Direto da Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM em Óculos de Sol: Guia Completo</h3>
                <p className="text-gray-600 text-sm">A análise honesta dos dois modelos de fabricação -- de quem dirige uma fábrica.</p>
              </Link>
              <Link href="/pt/blog/criar-marca-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Criar Sua Marca de Óculos de Sol</h3>
                <p className="text-gray-600 text-sm">O guia completo da ideia à primeira venda. Tudo que eu gostaria que alguém tivesse me dito em 2006.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
