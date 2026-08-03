import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TR90 vs Acetato vs Metal: Qual Material de Armação é Ideal para Sua Marca?',
  description: 'Um dono de fábrica detalha armações TR90, acetato e metal para óculos -- real cost data, weight comparisons, durability tests, and which material works best for different brand strategies.',
  keywords: 'comparação materiais armação óculos, óculos TR90, armações acetato, armações metal, TR90 vs acetato, custo materiais armação',
  alternates: {
    canonical: '/pt/blog/comparacao-materiais-armacoes',
    languages: {
      'en': '/blog/frame-material-comparison',
      'pt': '/pt/blog/comparacao-materiais-armacoes',
    },
  },
}

export default function Tr90VsAcetateVsMetalPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "TR90 vs Acetato vs Metal: Qual Material de Armação é Ideal para Sua Marca?",
          "datePublished": "2026-05-03",
          "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica detalha armações TR90, acetato e metal para óculos -- real cost data, weight comparisons, durability, and which material fits your brand.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/tr90-vs-acetate-vs-metal" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is TR90 and why is it used in sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "TR90 is a thermoplastic polyamide (nylon-based polymer) originally developed for medical and military use. It's extremely lightweight -- about 15-20 grams for a full frame -- and nearly unbreakable under normal use. It's become the go-to material for sport and lifestyle sunglasses because it flexes instead of snapping, resists sweat and chemicals, and costs $3-8 per frame at wholesale." }
            },
            {
              "@type": "Question",
              "name": "Is acetate better than TR90 for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "It depends on your brand positioning. Acetate looks and feels more premium -- richer colors, deeper patterns, heavier weight that signals quality. But TR90 is lighter, more durable, and cheaper. If you're building a fashion or luxury brand, acetate wins. If you're targeting sports, outdoor, or value-conscious customers, TR90 is the better choice." }
            },
            {
              "@type": "Question",
              "name": "How much do different sunglasses frame materials cost at wholesale?",
              "acceptedAnswer": { "@type": "Answer", "text": "Real factory pricing: TR90 frames run $3-8 por par, acetate frames cost $5-11, and metal frames range from $8-22 depending on the alloy and construction. These are frame-only costs -- add $1.50-8 for lenses depending on type and coatings." }
            },
            {
              "@type": "Question",
              "name": "Which sunglasses frame material is most durable?",
              "acceptedAnswer": { "@type": "Answer", "text": "TR90 wins on impact resistance -- it can flex 90+ degrees without breaking and survives being sat on, stepped on, or dropped repeatedly. Metal is rigid and can bend permanently or lose its shape. Acetate is between the two -- it's tough but can crack on hard impact. For durability in active use, TR90 is king." }
            },
            {
              "@type": "Question",
              "name": "Can I mix frame materials in my sunglasses line?",
              "acceptedAnswer": { "@type": "Answer", "text": "Absolutely -- and most successful brands do exactly that. A typical brand might have TR90 sport frames at $29-49 retail, acetate fashion frames at $79-149, and a couple of metal aviators at $99-179. Mixing materials lets you cover different price points and customer segments without diluting your brand." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Materiais</span>
            <span>3 de maio de 2026</span>
            <span>•</span>
            <span>14 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TR90 vs Acetato vs Metal: Qual Material de Armação é Ideal para Sua Marca?
          </h1>
          <p className="text-xl text-gray-600">
            Toda semana, alguém me pergunta: &quot;Jacky, qual material de armação devo usar?&quot; 
            Após 20 anos e cerca de 12 milhões de armações, aqui está a resposta real -- com dados de custo reais do nosso chão de fábrica.
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
            <li><a href="#why-material-matters" className="text-primary-600 hover:underline">Por que o Material da Armação Importa Mais do que Você Pensa</a></li>
            <li><a href="#tr90-breakdown" className="text-primary-600 hover:underline">TR90: O Atleta</a></li>
            <li><a href="#acetate-breakdown" className="text-primary-600 hover:underline">Acetato: O Ícone da Moda</a></li>
            <li><a href="#metal-breakdown" className="text-primary-600 hover:underline">Metal: O Clássico</a></li>
            <li><a href="#comparison-table" className="text-primary-600 hover:underline">Tabela Comparativa Lado a Lado</a></li>
            <li><a href="#cost-deep-dive" className="text-primary-600 hover:underline">Detalhamento Real de Custos do Chão de Fábrica</a></li>
            <li><a href="#retail-pricing" className="text-primary-600 hover:underline">Estratégia de Preços de Varejo por Material</a></li>
            <li><a href="#best-use-cases" className="text-primary-600 hover:underline">Qual Material para Qual Marca?</a></li>
            <li><a href="#mixing-materials" className="text-primary-600 hover:underline">A Jogada Inteligente: Misture Seus Materiais</a></li>
            <li><a href="#production-realities" className="text-primary-600 hover:underline">Realidades de Produção que Ninguém Fala</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas que Recebo Toda Semana</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Uma dona de marca de Portland me ligou mês passado. Ela estava indecisa entre TR90 e acetato havia seis semanas. 
            O designer dela queria acetato. O contador queria TR90. Os seguidores do Instagram dela não paravam de comentar &quot;amo a vibe metal&quot; 
            nos mood boards dela. Ela estava travada.
          </p>
          <p>
            Eu disse a ela o que digo a todos: não existe um material de armação universalmente &quot;melhor&quot;. Existe apenas o melhor material 
            <em>para sua marca, seus clientes e seu orçamento</em>. E após duas décadas dobrando, quebrando e 
            construindo armações de todos os materiais do mercado, posso te dizer exatamente como tomar essa decisão.
          </p>

          {/* Why Material Matters */}
          <h2 id="why-material-matters" className="text-3xl font-bold mt-16 mb-6">Por que o Material da Armação Importa Mais do que Você Pensa</h2>
          <p>
            Algo que me surpreendeu no início da minha carreira: os clientes geralmente não sabem dizer o nome do material 
            dos seus óculos de sol. Eles não entram numa loja e dizem &quot;eu gostaria de uma armação de poliamida termoplástica, por favor.&quot;
          </p>
          <p>
            Mas eles <em>sentem</em> a diferença instantaneamente. Pegam um par e em três segundos já fizeram um 
            julgamento: &quot;esses parecem baratos&quot; ou &quot;esses parecem caros.&quot; Essa reação instintiva? É quase totalmente sobre o material. 
            O peso na mão. A flexão quando abrem as hastes. O som que a dobradiça faz. A textura contra a pele.
          </p>
          <p>
            O material da armação determina seu custo de fabricação, seu teto de preço no varejo, seu cliente-alvo, a percepção 
            da sua marca e -- sinceramente -- se seu produto acaba no rosto de alguém ou numa gaveta depois de um uso. 
            Então sim, importa.
          </p>

          {/* TR90 Breakdown */}
          <h2 id="tr90-breakdown" className="text-3xl font-bold mt-16 mb-6">TR90: O Atleta</h2>
          <p>
            <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener" className="text-primary-600 hover:underline">TR90 é uma poliamida termoplástica</a> -- basicamente 
            um náilon super-engenheirado. Foi originalmente desenvolvido para equipamentos médicos e aplicações militares onde você 
            precisa de algo que não quebre, não irrite a pele e não pese quase nada. A indústria de óculos pegou emprestado, 
            e agora está em todo lugar.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">No que o TR90 se Destaca</h3>
          <p>
            <strong>Peso:</strong> Uma armação TR90 completa pesa 15-20 gramas. Para referência, isso é mais ou menos o peso de quatro 
            moedas no seu bolso. Tenho clientes cujos consumidores usam armações TR90 por 14 horas seguidas e esquecem que estão usando. 
            Sem marcas vermelhas no nariz, sem pontos doloridos atrás das orelhas. Para uso esportivo e ativo, nada supera.
          </p>
          <p>
            <strong>Durabilidade:</strong> Eu tenho uma armação TR90 na minha mesa que uso para demonstrações. Eu dobro, torço, sento em cima, 
            jogo do outro lado da sala. Faço isso há três anos com o mesmo par. Ainda funciona perfeitamente. O TR90 tem 
            o que os engenheiros chamam de &quot;memória&quot; -- você pode deformá-lo e ele volta à forma original. Tente isso com acetato 
            e você vai ouvir um estalo. Tente com metal e ele fica torto.
          </p>
          <p>
            <strong>Resistência química:</strong> Suor, protetor solar, água salgada, repelente -- nada disso afeta o TR90. Isso 
            importa mais do que as pessoas percebem. Já vi armações de acetato descoloridas pelo protetor solar depois de um verão. 
            O TR90 nem se abala.
          </p>
          <p>
            <strong>Custo:</strong> A moldagem por injeção de TR90 é rápida e eficiente. A matéria-prima é barata, os 
            moldes duram centenas de milhares de ciclos, e a velocidade de produção é cerca de 3x mais rápida que o acetato. 
            Isso se traduz diretamente no seu resultado financeiro.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Onde o TR90 Fica Devendo</h3>
          <p>
            <strong>Aparência e toque:</strong> Vou ser direto com você -- TR90 parece plástico. Porque é 
            plástico. Plástico de alta engenharia, mas plástico mesmo assim. Você não vai conseguir a profundidade de cor ou os ricos 
            padrões tartaruga que obtém com acetato. Acabamentos foscos ficam bem; TR90 brilhante pode parecer meio brinquedo 
            se não for feito com cuidado.
          </p>
          <p>
            <strong>Variedade de cores:</strong> Cores sólidas funcionam ótimo. Efeitos degradê, padrões multicoloridos, visuais 
            translúcidos -- são limitados comparados ao acetato. Conseguimos fazer cerca de 40 cores padrão em TR90 versus 200+ em acetato.
          </p>
          <p>
            <strong>Percepção:</strong> Justo ou não, TR90 não grita &quot;luxo.&quot; Clientes pegando uma armação de $150 esperam 
            peso e calor. TR90 parece leve e liso -- ótimo para esporte, mas alguns compradores de moda associam leve a barato.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">TR90 Quick Stats:</h3>
            <ul className="text-blue-800 space-y-1">
              <li><strong>Peso da armação:</strong> 15-20g</li>
              <li><strong>Custo de fábrica:</strong> $3-8 por armação</li>
              <li><strong>Faixa típica de varejo:</strong> $19-69</li>
              <li><strong>Velocidade de produção:</strong> Rápida -- moldagem por injeção em segundos</li>
              <li><strong>Ideal para:</strong> Esporte, outdoor, infantil, marcas de valor</li>
              <li><strong>Teste de flexão:</strong> Dobra 90°+ sem quebrar</li>
            </ul>
          </div>

          {/* Acetate Breakdown */}
          <h2 id="acetate-breakdown" className="text-3xl font-bold mt-16 mb-6">Acetato: O Ícone da Moda</h2>
          <p>
            O acetato é o material que construiu a indústria de óculos de luxo. Quando você pensa em Ray-Ban Wayfarer, 
            armações Tom Ford ou óculos oversized da Celine -- isso é acetato. É feito de fibras de algodão 
            e polpa de madeira processadas em placas de acetato de celulose, que são então cortadas, moldadas e polidas à mão. 
            O melhor material vem da <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Mazzucchelli na Itália</a>, 
            que produz desde 1849.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">No que o Acetato se Destaca</h3>
          <p>
            <strong>Estética:</strong> Nada chega perto. O acetato tem profundidade. Segure uma boa armação tartaruga de acetato 
            contra a luz e você verá camadas de âmbar, marrom e dourado se entrecruzando pelo material -- 
            cada par ligeiramente diferente. Não é um padrão impresso; é literalmente construído no material 
            no nível da placa. Você não consegue falsificar isso com plástico.
          </p>
          <p>
            <strong>Variedade de cores:</strong> 200+ cores e padrões, do preto clássico a designs multicamadas ousados 
            com cores internas e externas contrastantes. Translúcido, opaco, degradê, marmorizado -- o acetato faz tudo. 
            É por isso que marcas de moda o adoram. A cada temporada você pode lançar novas combinações de cores sem mudar 
            o formato da armação.
          </p>
          <p>
            <strong>Percepção premium:</strong> O acetato tem peso -- 25-35 gramas para uma armação típica. Ele aquece 
            na temperatura da pele. Faz um &quot;clique&quot; satisfatório quando as dobradiças fecham. São detalhes minúsculos, mas 
            somam para uma sensação de qualidade que justifica preços premium. Um cliente segurando uma armação de acetato 
            instintivamente espera pagar mais -- e está disposto a isso.
          </p>
          <p>
            <strong>Ajustabilidade:</strong> Aqueça suavemente uma armação de acetato e você pode remodelá-la para caber em qualquer rosto. 
            Óticos adoram isso. TR90 e metal também podem ser ajustados, mas o acetato oferece o ajuste mais preciso e permanente.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Onde o Acetato Fica Devendo</h3>
          <p>
            <strong>Durabilidade sob estresse:</strong> O acetato não flexiona como o TR90. Sente em uma armação de acetato 
            e há uma chance real de ela rachar. Deixe cair no concreto e as ponteiras das hastes podem lascar. Não é 
            frágil -- é mais resistente que vidro -- mas não tem aquela resiliência borrachosa.
          </p>
          <p>
            <strong>Sensibilidade química:</strong> Protetor solar, limpadores à base de álcool e alguns perfumes podem 
            danificar o acetato com o tempo. Eu sempre digo aos clientes para incluir um cartão de cuidados com armações de acetato -- &quot;limpe 
            com água e pano macio, evite sprays químicos.&quot; Não exige muita manutenção, mas também não é 
            à prova de tudo.
          </p>
          <p>
            <strong>Tempo de produção:</strong> Armações de acetato levam 3-5x mais tempo para produzir que TR90. Cada armação 
            é cortada de uma placa, depois passa por tamboreamento, polimento manual e várias etapas de acabamento. 
            Uma armação TR90 é moldada por injeção em segundos. Uma armação de acetato leva dias de processamento. Esse 
            trabalho aparece no seu custo unitário.
          </p>
          <p>
            <strong>Peso:</strong> 25-35 gramas versus 15-20 para TR90. Algumas pessoas acham armações de acetato pesadas 
            após uso prolongado, especialmente modelos maiores. Para uso esportivo o dia todo, não é ideal.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Acetate Quick Stats:</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Peso da armação:</strong> 25-35g</li>
              <li><strong>Custo de fábrica:</strong> $5-11 por armação</li>
              <li><strong>Faixa típica de varejo:</strong> $49-199</li>
              <li><strong>Velocidade de produção:</strong> Lenta -- processo de vários dias por armação</li>
              <li><strong>Ideal para:</strong> Moda, lifestyle, marcas premium e de luxo</li>
              <li><strong>Teste de flexão:</strong> Moderado -- resiste à dobra, pode rachar sob força</li>
            </ul>
          </div>

          {/* Metal Breakdown */}
          <h2 id="metal-breakdown" className="text-3xl font-bold mt-16 mb-6">Metal: O Clássico</h2>
          <p>
            Armações de metal existem desde os anos 1700. Benjamin Franklin usava óculos de metal. O 
            aviador -- provavelmente o formato de óculos mais icônico já criado -- é uma armação de metal. Quando você pensa em 
            &quot;clássico&quot;, pensa em metal.
          </p>
          <p>
            Os óculos de sol de metal de hoje usam aço inoxidável, titânio, alumínio, ligas de níquel ou 
            Monel (uma mistura de níquel e cobre). Cada liga tem propriedades diferentes, e a escolha afeta drasticamente 
            tanto o toque quanto o custo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">No que o Metal se Destaca</h3>
          <p>
            <strong>Perfis finos e elegantes:</strong> O metal permite criar armações incrivelmente finas. 
            Um design de metal aramado pode ter 1-2mm de espessura -- tente isso com acetato ou TR90 e vai quebrar. 
            Se a estética da sua marca é minimalista, elegante ou arquitetônica, metal é o seu material.
          </p>
          <p>
            <strong>Apelo atemporal:</strong> Os{' '}
            <Link href="/products/aviator" className="text-primary-600 hover:underline">aviadores</Link> de metal estão 
            em alta há 90 anos e contando. Os mesmos formatos básicos de armação de metal vendem década após década. 
            Se você está construindo uma marca &quot;compre para a vida toda&quot;, o metal comunica permanência de um jeito que o plástico nunca fará.
          </p>
          <p>
            <strong>Ajustabilidade:</strong> Um bom ótico pode fazer ajustes finos em uma armação de metal com ferramentas manuais em minutos. 
            Dobrar as plaquetas nasais, ajustar a curvatura da haste, apertar as dobradiças. O metal é o material de armação 
            mais ajustável, o que significa melhor encaixe em diferentes formatos de rosto.
          </p>
          <p>
            <strong>Faixa de peso:</strong> Esta surpreende as pessoas. Armações de titânio podem ser tão leves quanto 12-15 gramas -- 
            mais leves que TR90. Aço inoxidável é mais pesado, com 25-35 gramas. Então &quot;metal é pesado&quot; nem sempre é verdade; 
            depende da liga.
          </p>
          <p>
            <strong>Percepção premium:</strong> Armações de metal parecem caras. O toque frio do aço inoxidável escovado, 
            a flexão do titânio, o brilho do tom dourado polido -- são estímulos sensoriais que justificam 
            preços premium. Alguns dos nossos estilos OEM mais vendidos são armações de metal vendidas a $129-179 no varejo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Onde o Metal Fica Devendo</h3>
          <p>
            <strong>Custo:</strong> O metal é o material de armação mais caro em todos os aspectos. Os custos de matéria-prima 
            são mais altos, a fabricação envolve mais etapas (fundição, soldagem, galvanização, polimento), 
            e a necessidade de mão de obra qualificada eleva ainda mais o preço. Uma armação básica de aço inoxidável custa 
            $8-12 para produzir; titânio fica entre $15-22.
          </p>
          <p>
            <strong>Corrosão:</strong> Ligas metálicas mais baratas podem corroer, especialmente ao redor das plaquetas nasais e 
            das dobradiças onde o suor se acumula. Nós galvanizamos tudo para prevenir isso, mas a galvanização se desgasta com o tempo. 
            O titânio é a exceção -- é naturalmente resistente à corrosão, por isso custa mais.
          </p>
          <p>
            <strong>Deformação permanente:</strong> Dobre uma armação de metal além do seu limite elástico e ela fica torta. 
            Diferente do TR90 que volta ao normal, o metal mantém qualquer forma que você der a ele -- intencional ou não. 
            Já vi armações de metal arruinadas por serem enfiadas no bolso de trás.
          </p>
          <p>
            <strong>Alergias de pele:</strong> Alergia a níquel afeta cerca de 10-15% da população. Se suas 
            armações de metal contêm níquel (e a maioria das baratas contém), uma parte dos seus clientes vai ficar com 
            marcas vermelhas e coceira no nariz e orelhas. Usamos ligas sem níquel e galvanização hipoalergênica 
            para evitar isso, mas adiciona custo.
          </p>
          <p>
            <strong>Opções de cores limitadas:</strong> Armações de metal são tipicamente douradas, prateadas, grafite, pretas 
            ou rosé gold. Você pode fazer detalhes em esmalte colorido, mas não vai conseguir os padrões ousados e 
            cores disponíveis no acetato.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-purple-900 mb-2">Metal Quick Stats:</h3>
            <ul className="text-purple-800 space-y-1">
              <li><strong>Peso da armação:</strong> 12-35g (varia conforme a liga)</li>
              <li><strong>Custo de fábrica:</strong> $8-22 por armação</li>
              <li><strong>Faixa típica de varejo:</strong> $59-249</li>
              <li><strong>Velocidade de produção:</strong> Média -- fabricação em múltiplas etapas</li>
              <li><strong>Ideal para:</strong> Marcas clássicas, minimalistas, premium, profissionais</li>
              <li><strong>Teste de flexão:</strong> Baixo -- entorta permanentemente sob força</li>
            </ul>
          </div>

          {/* Comparison Table */}
          <h2 id="comparison-table" className="text-3xl font-bold mt-16 mb-6">Tabela Comparativa Lado a Lado</h2>
          <p>
            Aqui está a cola que eu gostaria de ter tido quando comecei neste negócio. Fixe na sua parede.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Fator</th>
                  <th className="px-6 py-4 text-left">TR90</th>
                  <th className="px-6 py-4 text-left">Acetate</th>
                  <th className="px-6 py-4 text-left">Metal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Peso da Armação</td><td className="px-6 py-4">15-20g</td><td className="px-6 py-4">25-35g</td><td className="px-6 py-4">12-35g</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Custo de Fábrica (só armação)</td><td className="px-6 py-4">$3-8</td><td className="px-6 py-4">$5-11</td><td className="px-6 py-4">$8-22</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Preço Típico de Varejo</td><td className="px-6 py-4">$19-69</td><td className="px-6 py-4">$49-199</td><td className="px-6 py-4">$59-249</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Resistência a Impacto</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Flexibilidade</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Visual/Toque Premium</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Opções de Cor</td><td className="px-6 py-4">~40 cores sólidas</td><td className="px-6 py-4">200+ padrões e cores</td><td className="px-6 py-4">5-8 tons metálicos</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Velocidade de Produção</td><td className="px-6 py-4">Rápida (segundos por armação)</td><td className="px-6 py-4">Lenta (dias por armação)</td><td className="px-6 py-4">Média (horas por armação)</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Resistência Química</td><td className="px-6 py-4">Excelente</td><td className="px-6 py-4">Moderada</td><td className="px-6 py-4">Varia conforme a liga</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Ajustabilidade</td><td className="px-6 py-4">Limitada</td><td className="px-6 py-4">Boa (com calor)</td><td className="px-6 py-4">Excelente</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Risco de Alergia</td><td className="px-6 py-4">Muito baixo</td><td className="px-6 py-4">Muito baixo</td><td className="px-6 py-4">Moderado (níquel)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Ideal Para</td><td className="px-6 py-4">Esporte, outdoor, infantil, valor</td><td className="px-6 py-4">Moda, lifestyle, luxo</td><td className="px-6 py-4">Clássico, minimalista, premium</td></tr>
              </tbody>
            </table>
          </div>

          {/* Cost Deep Dive */}
          <h2 id="cost-deep-dive" className="text-3xl font-bold mt-16 mb-6">Detalhamento Real de Custos do Chão de Fábrica</h2>
          <p>
            Vou te dar os números que ninguém mais publica. Esses são custos reais de produção da nossa 
            fábrica -- não estimativas, não médias, mas o que você vai pagar quando fizer um pedido.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Detalhamento de Custo da Armação TR90</h3>
          <ul>
            <li><strong>Pellets de TR90 bruto:</strong> $0,80-1,20 em material por armação</li>
            <li><strong>Moldagem por injeção:</strong> $0,50-1,00 (tempo de ciclo é 30-60 segundos)</li>
            <li><strong>Dobradiças:</strong> $0,30-0,80 (dobradiças com mola adicionam $0,40)</li>
            <li><strong>Tratamento de superfície:</strong> $0,20-0,50 (revestimento fosco, soft-touch, etc.)</li>
            <li><strong>Montagem e CQ:</strong> $0,40-0,80</li>
            <li><strong>Aplicação do logo:</strong> $0,10-0,30 (gravura a laser ou tampografia)</li>
            <li><strong>Custo total da armação:</strong> $3-8 dependendo da complexidade</li>
          </ul>
          <p>
            Confira nossa{' '}
            <Link href="/products/tr90" className="text-primary-600 hover:underline">coleção TR90</Link> para 
            ver a variedade de estilos possíveis nesses pontos de preço.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Detalhamento de Custo da Armação de Acetato</h3>
          <ul>
            <li><strong>Placa de acetato:</strong> $1,50-3,00 por armação (Mazzucchelli italiana adiciona $1-2 de premium sobre o acetato chinês)</li>
            <li><strong>Corte CNC:</strong> $0,60-1,00</li>
            <li><strong>Tamboreamento e polimento:</strong> $0,80-1,50 (é aqui que a mágica acontece -- 24-48 horas de tamboreamento dão ao acetato seu brilho característico)</li>
            <li><strong>Dobradiças:</strong> $0,40-1,00 (dobradiças de cinco tambores para premium, três tambores para padrão)</li>
            <li><strong>Acabamento manual:</strong> $0,50-1,50 (trabalhadores qualificados inspecionam e fazem retoques em cada armação)</li>
            <li><strong>Montagem e CQ:</strong> $0,50-1,00</li>
            <li><strong>Aplicação do logo:</strong> $0,15-0,40 (placas metálicas de logo custam mais)</li>
            <li><strong>Custo total da armação:</strong> $5-11 dependendo da origem do acetato e complexidade</li>
          </ul>
          <p>
            Navegue pelas nossas{' '}
            <Link href="/products/acetate" className="text-primary-600 hover:underline">armações de acetato</Link> e 
            você verá a diferença de qualidade que esse custo extra compra.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Detalhamento de Custo da Armação de Metal</h3>
          <ul>
            <li><strong>Fio/chapa de metal:</strong> $1,50-5,00 (aço inoxidável na faixa baixa, titânio na alta)</li>
            <li><strong>Estampagem/fundição:</strong> $1,00-3,00</li>
            <li><strong>Soldagem:</strong> $0,80-1,50 (união de pontes, hastes, peças terminais)</li>
            <li><strong>Galvanização:</strong> $1,00-3,00 (galvanização IP para durabilidade, PVD para acabamento luxo)</li>
            <li><strong>Plaquetas nasais e parafusos:</strong> $0,30-0,80</li>
            <li><strong>Polimento:</strong> $0,60-1,50</li>
            <li><strong>Montagem e CQ:</strong> $0,80-1,50</li>
            <li><strong>Logo:</strong> $0,20-0,50</li>
            <li><strong>Custo total da armação:</strong> $8-22 dependendo da liga e acabamento</li>
          </ul>
          <p>
            Nossa{' '}
            <Link href="/products/aviator" className="text-primary-600 hover:underline">coleção aviador</Link> mostra 
            o que você pode alcançar com armações de metal em diferentes faixas de preço.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Lembre-se: Esses São Custos Só da Armação</h3>
            <p className="text-amber-800">
              Adicione $1,50-8 por par para lentes (UV400 básica na faixa baixa, CR-39 polarizada na alta), 
              $0,30-1,50 para embalagem e $0,50-2,00 para frete por unidade. Seu custo total entregue por par 
              é tipicamente 40-60% maior que o custo só da armação.
            </p>
          </div>

          {/* Retail Pricing */}
          <h2 id="retail-pricing" className="text-3xl font-bold mt-16 mb-6">Estratégia de Preços de Varejo por Material</h2>
          <p>
            A escolha do material determina diretamente seu teto de preço no varejo e estrutura de margem. Aqui está o que 
            vi funcionar para nossos clientes de marca mais bem-sucedidos:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estratégia de Varejo para TR90</h3>
          <p>
            Custo entregue: $6-14 por par. Ponto ideal de varejo: $29-59. Isso dá uma margem de 4-5x, que é 
            saudável para marcas DTC. Acima de $69 no varejo, os clientes começam a comparar suas armações TR90 com opções 
            de acetato no mesmo preço -- e o acetato parece mais premium. Mantenha o TR90 na zona de valor a faixa média.
          </p>
          <p>
            Exceção: armações TR90 específicas para esporte (ciclismo, corrida, pesca) podem ser vendidas a $79-99 porque 
            os clientes estão pagando pela função, não pelo status fashion.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estratégia de Varejo para Acetato</h3>
          <p>
            Custo entregue: $9-18 por par. Ponto ideal de varejo: $79-149. É onde a maioria das marcas independentes de 
            óculos fashion vive -- e é uma faixa comprovada. Acetato italiano com lentes polarizadas? Você pode 
            chegar a $149-199 no varejo se seu branding suportar. Pense em{' '}
            <Link href="/products/wayfarer" className="text-primary-600 hover:underline">armações estilo wayfarer</Link> em 
            combinações de cores únicas com embalagem premium.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estratégia de Varejo para Metal</h3>
          <p>
            Custo entregue: $14-32 por par. Ponto ideal de varejo: $89-179. O metal oferece a faixa de preços 
            mais ampla porque a escolha da liga cria diferenças de custo enormes. Uma armação básica de aço inoxidável 
            a $89 no varejo e uma armação de titânio a $249 podem ser lucrativas.
          </p>

          {/* Melhor Use Estojos */}
          <h2 id="best-use-cases" className="text-3xl font-bold mt-16 mb-6">Qual Material para Qual Marca?</h2>
          <p>
            Deixe-me pintar alguns cenários reais com base em marcas com quem trabalhamos:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cenário 1: Marca Esportiva/Outdoor</h3>
          <p>
            <strong>Vá de TR90.</strong> Sem dúvida. Uma marca de ciclismo do Colorado veio até nós precisando de armações que 
            sobrevivam a quedas, não escorreguem com suor e não pesem quase nada. Fizemos uma armação TR90 
            envolvente com plaquetas nasais e ponteiras de borracha. Custo: $5,50 por armação. Eles vendem a $49. 
            As avaliações deles na Amazon estão cheias de gente dizendo &quot;sentei em cima e eles voltaram ao normal.&quot; Isso é o TR90 fazendo seu trabalho.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cenário 2: Marca de Moda/Lifestyle</h3>
          <p>
            <strong>Vá de acetato.</strong> Uma marca DTC do Brooklyn queria armações grossas e ousadas em combinações 
            de cores sazonais. Buscamos placas de acetato personalizadas -- uma temporada foi verde esmeralda com flocos dourados, 
            outra foi rosé empoeirado. As armações parecem custar $300. Eles vendem a $129. O material 
            faz metade do marketing por você.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cenário 3: Marca Minimalista/Profissional</h3>
          <p>
            <strong>Vá de metal.</strong> Uma marca escandinava queria armações ultrafinas e arquitetônicas em 
            prata escovada e preto fosco. Fizemos em aço inoxidável com hastes de beta-titânio japonês. 
            Limpo, preciso, elegante. Eles vendem a $159 e o cliente-alvo -- profissionais urbanos -- 
            adora a estética &quot;menos é mais&quot;.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Cenário 4: Marca Infantil/Familiar</h3>
          <p>
            <strong>Vá de TR90.</strong> Crianças destroem tudo. Uma marca familiar precisava de armações que sobrevivessem 
            a ser dobradas, mordidas, jogadas e pisadas por crianças. TR90 com dobradiças integradas (sem 
            parafusos para engolir). $3,50 por armação. Eles vendem kits de três por $39. As margens são 
            excelentes e a taxa de devolução é quase zero.
          </p>

          {/* Mixing Materials */}
          <h2 id="mixing-materials" className="text-3xl font-bold mt-16 mb-6">A Jogada Inteligente: Misture Seus Materiais</h2>
          <p>
            As melhores marcas não escolhem um único material -- usam os três estrategicamente. Aqui está 
            uma estrutura de coleção que recomendo para novos donos de marca:
          </p>
          <ul>
            <li><strong>2-3 modelos TR90 ($29-49 no varejo):</strong> Seu nível de entrada. Traz clientes para dentro. 
            Estilos esportivos e casuais que vendem por função e valor.</li>
            <li><strong>3-4 modelos de acetato ($79-129 no varejo):</strong> Sua linha principal. Designs de moda 
            com cores sazonais. É de onde vem a maior parte da sua receita.</li>
            <li><strong>1-2 modelos de metal ($99-179 no varejo):</strong> Seu nível premium. Formatos clássicos que 
            dão à sua marca um efeito halo de &quot;fazemos óculos sérios.&quot;</li>
          </ul>
          <p>
            Essa estrutura cobre três faixas de preço, três tipos de cliente e três casos de uso -- tudo 
            sob uma marca. Você não está deixando dinheiro na mesa, e não está forçando sua marca 
            a caber em uma caixa só.
          </p>

          {/* Production Realities */}
          <h2 id="production-realities" className="text-3xl font-bold mt-16 mb-6">Realidades de Produção que Ninguém Fala</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Diferenças de MOQ</h3>
          <p>
            TR90: 200-500 peças por modelo (moldes de injeção são caros de fazer, mas baratos de operar). 
            Acetato: 100-300 por modelo (sem moldes necessários -- cortado de placa). Metal: 300-1.000 por modelo 
            (moldes de fundição são complexos). Se você está começando pequeno, o acetato na verdade tem a 
            menor barreira de entrada por modelo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Diferenças de Prazo de Entrega</h3>
          <p>
            TR90: 25-35 dias. Uma vez que o molde está pronto, as armações saem rápido. Acetato: 35-50 dias. 
            As etapas de polimento e acabamento não podem ser apressadas sem sacrificar qualidade. 
            Metal: 30-45 dias. A galvanização é o gargalo -- você está essencialmente esperando a química.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Diferenças no Controle de Qualidade</h3>
          <p>
            O CQ do TR90 é majoritariamente automatizado -- moldagem por injeção consistente significa resultado consistente. 
            O CQ do acetato exige olhos experientes -- cada armação precisa de inspeção individual porque 
            o posicionamento do padrão varia. O CQ do metal foca na aderência da galvanização e juntas de solda -- 
            os modos de falha são diferentes. Usamos equipes de inspeção diferentes para cada material 
            porque a experiência não se transfere.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Uma Coisa que Gostaria que Mais Compradores Soubessem</h3>
          <p>
            O material da armação é apenas metade da equação. Uma armação TR90 de $3 com lentes CR-39 polarizadas de $5, 
            dobradiças premium com mola e embalagem bonita pode parecer mais premium do que uma 
            armação de acetato de $10 com lentes UV400 básicas e dobradiças baratas. Não gaste todo o seu 
            orçamento na armação e economize em todo o resto.
          </p>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda para Escolher?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Envie-me o conceito da sua marca e o preço de varejo alvo. Eu direi exatamente qual 
              material -- ou combinação de materiais -- oferece o melhor produto no seu ponto de preço. 
              Sem custo, sem compromisso. Faço isso porque economiza tempo para nós dois depois.
            </p>
            <Link href="/pt/contato" className="btn-primary">
              Receba uma Recomendação Gratuita de Material
            </Link>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Perguntas que Recebo Toda Semana</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">O que é TR90 e por que é usado em óculos de sol?</h3>
              <p className="text-gray-600">
                TR90 é uma poliamida termoplástica -- um tipo de polímero à base de náilon originalmente desenvolvido para 
                aplicações médicas e militares. Pesa cerca de 15-20 gramas para uma armação completa e é 
                praticamente inquebravel no uso normal. É a escolha principal para óculos esportivos e lifestyle 
                porque flexiona em vez de quebrar, resiste a suor e químicos, e custa $3-8 por 
                armação no atacado.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Acetato é melhor que TR90 para óculos de sol?</h3>
              <p className="text-gray-600">
                Depende do que você está vendendo. O acetato parece e transmite mais premium -- cores mais ricas, 
                padrões mais profundos, um peso satisfatório que sinaliza qualidade. O TR90 é mais leve, mais resistente e 
                mais barato. Construindo uma marca de moda? Acetato. Construindo uma marca esportiva ou de valor? TR90. 
                Construindo uma coleção completa? Use os dois.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto custam os diferentes materiais de armação no atacado?</h3>
              <p className="text-gray-600">
                Direto do nosso chão de fábrica: armações TR90 custam $3-8 por par, acetato custa $5-11, 
                e metal varia de $8-22 dependendo da liga. Esses são preços só da armação -- adicione 
                $1,50-8 para lentes, revestimentos e montagem.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qual material de armação é o mais durável?</h3>
              <p className="text-gray-600">
                TR90 vence em resistência ao impacto -- flexiona 90°+ sem quebrar e sobrevive a ser sentado, 
                pisado e derrubado. O metal é rígido e pode entortar permanentemente. O acetato é resistente mas pode 
                rachar em impactos fortes. Para uso ativo e durabilidade, TR90 é o rei.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Posso misturar materiais de armação na minha linha de óculos?</h3>
              <p className="text-gray-600">
                Você definitivamente deveria. As marcas mais bem-sucedidas têm armações esportivas TR90 a $29-49, armações 
                fashion de acetato a $79-149 e clássicos de metal a $99-179. Misturar materiais permite cobrir 
                múltiplas faixas de preço e tipos de cliente sem diluir sua marca.
              </p>
            </div>
          </div>

          {/* Artigos Relacionados */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais Direto da Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM em Óculos de Sol: Guia Completo</h3>
                <p className="text-gray-600 text-sm">A versão honesta de OEM vs ODM -- de alguém que está no chão de fábrica desde 2006.</p>
              </Link>
              <Link href="/pt/blog/guia-lentes-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Lentes para Óculos de Sol: Tudo que Você Precisa Saber</h3>
                <p className="text-gray-600 text-sm">As armações recebem a atenção, mas as lentes fazem o produto. Aqui está o detalhamento completo.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
