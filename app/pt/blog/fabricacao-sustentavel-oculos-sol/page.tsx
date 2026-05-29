import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabricação Sustentável de Óculos de Sol: Materiais e Processos Ecológicos',
  description: 'Um dono de fábrica explica fabricação sustentável de óculos de sol -- bio-acetate, recycled nylon, ocean plastic, eco-friendly packaging, and what "sustainable" actually means in eyewear production.',
  keywords: 'óculos sustentáveis, fabricação ecológica eyewear, óculos reciclados, bio-acetato óculos, plástico oceânico óculos',
  alternates: {
    canonical: '/pt/blog/fabricacao-sustentavel-oculos-sol',
    languages: {
      'en': '/blog/sustainable-sunglasses-manufacturing',
      'pt': '/pt/blog/fabricacao-sustentavel-oculos-sol',
    },
  },
}

export default function SustainableSunglassesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Fabricação Sustentável de Óculos de Sol: Materiais e Processos Ecológicos",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica explica fabricação sustentável de óculos de sol -- materials, processes, and honest cost comparisons.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/fabricacao-sustentavel-oculos-sol" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are sustainable sunglasses made from?",
              "acceptedAnswer": { "@type": "Answer", "text": "The most common sustainable sunglasses materials are: bio-based acetate (made from cotton seed and wood pulp instead of petroleum), recycled nylon/TR90 (from ocean plastic or post-consumer waste), recycled metals (aluminum, stainless steel), bamboo and wood (for temples or full frames), and bio-based plastics like castor oil-derived nylon. Each has different cost, durability, and environmental impact profiles." }
            },
            {
              "@type": "Question",
              "name": "How much more do sustainable sunglasses cost to manufacture?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sustainable materials typically add 10-25% to manufacturing costs. Bio-acetate costs about 15% more than traditional acetate. Recycled nylon is 10-20% more than virgin nylon. However, the retail premium for 'sustainable' branding can be 30-50% higher, making it a profitable positioning strategy. The cost gap is also narrowing each year as demand scales up." }
            },
            {
              "@type": "Question",
              "name": "Is bio-acetate as durable as regular acetate?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. Bio-based acetate from reputable suppliers (like Mazzucchelli M49 or Eastman Acetate Renew) has virtually identical mechanical properties to traditional acetate -- same hardness, flexibility, polishing quality, and lifespan. The difference is in the raw material source (plant-based vs petroleum-based), not the finished product performance." }
            },
            {
              "@type": "Question",
              "name": "Are 'ocean plastic' sunglasses really made from ocean plastic?",
              "acceptedAnswer": { "@type": "Answer", "text": "Some are, but many use 'ocean-bound' plastic -- waste collected from coastal areas before it enters the ocean. True ocean-retrieved plastic requires extensive cleaning and processing, making it significantly more expensive. Both approaches are legitimate and environmentally beneficial, but the distinction matters for honest marketing. Always verify your supplier's certification (look for Ocean Bound Plastic Certification or similar third-party verification)." }
            },
            {
              "@type": "Question",
              "name": "What certifications should sustainable sunglasses have?",
              "acceptedAnswer": { "@type": "Answer", "text": "Key certifications to look for: GRS (Global Recycled Standard) for recycled materials, ISCC PLUS for bio-based content verification, FSC for wood/bamboo sourcing, OEKO-TEX for harmful substance testing, and ISO 14001 for the factory's environmental management system. Be cautious of brands claiming 'eco-friendly' without any third-party certification -- greenwashing is rampant in eyewear." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sustentabilidade</span>
            <span>4 de maio de 2026</span>
            <span>•</span>
            <span>14 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fabricação Sustentável de Óculos de Sol: Materiais e Processos Ecológicos
          </h1>
          <p className="text-xl text-gray-600">
            Vou ser honesto: &quot;fabricação sustentável&quot; é um dos termos mais abusados na 
            nossa indústria. Vou te contar o que é real, o que é greenwashing, e 
            quanto realmente custa fazer óculos ecológicos em 2026.
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
            <li><a href="#reality-check" className="text-primary-600 hover:underline">O Teste de Realidade da Sustentabilidade</a></li>
            <li><a href="#bio-acetate" className="text-primary-600 hover:underline">Bio-Acetato: A Opção Líder</a></li>
            <li><a href="#recycled-nylon" className="text-primary-600 hover:underline">Nylon Reciclado e TR90</a></li>
            <li><a href="#ocean-plastic" className="text-primary-600 hover:underline">Plástico Oceânico: Fato vs Marketing</a></li>
            <li><a href="#natural-materials" className="text-primary-600 hover:underline">Madeira, Bambu e Materiais Naturais</a></li>
            <li><a href="#sustainable-lenses" className="text-primary-600 hover:underline">Opções de Lentes Sustentáveis</a></li>
            <li><a href="#eco-packaging" className="text-primary-600 hover:underline">Embalagem Ecológica</a></li>
            <li><a href="#factory-practices" className="text-primary-600 hover:underline">Práticas Sustentáveis de Fábrica</a></li>
            <li><a href="#cost-comparison" className="text-primary-600 hover:underline">Comparação Real de Custos</a></li>
            <li><a href="#greenwashing" className="text-primary-600 hover:underline">Como Evitar Greenwashing</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Cinco anos atrás, talvez 2% dos nossos clientes perguntavam sobre materiais sustentáveis. Em 2026, 
            esse número está perto de 30% -- e subindo. Sustentabilidade deixou de ser um diferencial de nicho para se tornar 
            uma demanda real de mercado, especialmente para marcas que miram consumidores com menos de 35 anos.
          </p>

          <h2 id="reality-check" className="text-3xl font-bold mt-16 mb-6">O Teste de Realidade da Sustentabilidade</h2>
          <p>
            Antes de começarmos, preciso dizer algo que pode ser impopular: <strong>nenhum óculo de sol 
            é verdadeiramente &quot;impacto zero.&quot;</strong> Fabricar qualquer coisa requer energia, materiais 
            e transporte. O objetivo não é perfeição -- é melhoria significativa.
          </p>
          <p>
            Veja como é a real pegada ambiental da indústria de óculos de sol:
          </p>
          <ul>
            <li><strong>Materiais:</strong> O acetato tradicional vem de acetato de celulose derivado de petróleo. Nylon e policarbonato tradicionais são plásticos derivados de petróleo. Armações metálicas exigem mineração e refino.</li>
            <li><strong>Fabricação:</strong> Processos de corte CNC, polimento e revestimento consomem energia e água. Solventes químicos são usados no acabamento. Material desperdiçado do corte (30-40% da matéria-prima vira sucata).</li>
            <li><strong>Embalagem:</strong> Bolsas plásticas, inserts de espuma, blisters -- a maioria das embalagens convencionais é plástico de uso único.</li>
            <li><strong>Transporte:</strong> O envio da China para mercados globais adiciona pegada de carbono.</li>
          </ul>
          <p>
            A boa notícia? Cada uma dessas áreas tem alternativas viáveis hoje. Deixe-me guiá-lo 
            por elas.
          </p>

          <h2 id="bio-acetate" className="text-3xl font-bold mt-16 mb-6">Bio-Acetato: A Opção Líder</h2>
          <p>
            O bio-acetato é atualmente o <strong>material sustentável mais popular para armações</strong>, e 
            com razão. Parece e é idêntico ao toque ao acetato tradicional, mas é feito de 
            fontes vegetais renováveis em vez de petróleo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que é Bio-Acetato?</h3>
          <p>
            O acetato tradicional tecnicamente já é derivado de plantas -- é acetato de celulose, feito 
            de línteres de algodão e polpa de madeira. Mas os plastificantes usados para torná-lo flexível são 
            derivados de petróleo (ftalato de dietila). O bio-acetato substitui esses plastificantes de petróleo 
            por alternativas vegetais, tornando todo o material de origem biológica.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Principais Fornecedores de Bio-Acetato</h3>
          <ul>
            <li><strong>Mazzucchelli M49:</strong> Bio-acetato fabricado na Itália. Qualidade premium, ampla gama de cores. O padrão ouro. Cerca de 20% mais caro que o acetato padrão da Mazzucchelli.</li>
            <li><strong>Eastman Acetate Renew:</strong> Usa tecnologia de reciclagem molecular para incorporar conteúdo reciclado. Crescendo rápido no mercado.</li>
            <li><strong>Fabricantes chineses de bio-acetato:</strong> Vários fornecedores domésticos agora oferecem bio-acetato a preços mais competitivos. A qualidade varia -- testamos cada lote.</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Bio-Acetato: Os Números</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Custo adicional:</strong> 10-20% acima do acetato padrão</li>
              <li><strong>Durabilidade:</strong> Idêntica ao acetato padrão</li>
              <li><strong>Gama de cores:</strong> Gama completa disponível, incluindo padrões tartaruga</li>
              <li><strong>Biodegradabilidade:</strong> Biodegrada em condições de compostagem industrial (não na sua gaveta ou aterro sanitário)</li>
              <li><strong>Disponibilidade de fornecimento:</strong> Boa -- a maioria dos grandes fornecedores tem em estoque</li>
            </ul>
          </div>

          <h2 id="recycled-nylon" className="text-3xl font-bold mt-16 mb-6">Nylon Reciclado e TR90</h2>
          <p>
            Para armações esportivas e leves, o nylon reciclado é a principal opção sustentável. É 
            feito de resíduos pós-consumo -- tipicamente redes de pesca descartadas, fibras de carpete ou 
            sucata industrial de nylon.
          </p>
          <p>
            O nylon reciclado mais conhecido é o <strong>Econyl</strong> (da Aquafil), que regenera 
            resíduos de nylon em nylon 6 de qualidade virgem. Vários dos nossos clientes usam TR90 baseado em Econyl para 
            suas armações esportivas.
          </p>
          <ul>
            <li><strong>Custo adicional:</strong> 15-25% acima do nylon/TR90 virgem</li>
            <li><strong>Propriedades:</strong> Mesma flexibilidade, peso e durabilidade do material virgem</li>
            <li><strong>Certificação:</strong> Certificação GRS (Global Recycled Standard) disponível</li>
            <li><strong>Cores:</strong> Algumas limitações em cores muito claras/translucentes, mas a maioria das cores funciona bem</li>
          </ul>
          <p>
            Para mais informações sobre como o nylon reciclado se compara ao TR90 padrão e outros materiais, veja nosso{' '}
            <Link href="/pt/blog/comparacao-materiais-armacoes" className="text-primary-600 hover:underline">guia de comparação de materiais de armação</Link>.
          </p>

          <h2 id="ocean-plastic" className="text-3xl font-bold mt-16 mb-6">Plástico Oceânico: Fato vs Marketing</h2>
          <p>
            Preciso ser direto com você sobre óculos de &quot;plástico oceânico&quot; porque há 
            muito marketing enganoso por aí.
          </p>
          <p>
            Existem três categorias, e são muito diferentes:
          </p>
          <ol>
            <li className="mb-4"><strong>Plástico realmente retirado do oceano:</strong> Literalmente puxado do oceano. Requer limpeza, triagem e processamento extensivos. Muito caro. Oferta muito limitada. Talvez 5% dos produtos de &quot;plástico oceânico&quot; realmente usem isso.</li>
            <li className="mb-4"><strong>Plástico destinado ao oceano (ocean-bound):</strong> Resíduos coletados de áreas costeiras em até 50km de cursos d&apos;água, antes de entrar no oceano. É isso que a maioria dos produtos de &quot;plástico oceânico&quot; usa. É legítimo e ambientalmente significativo -- prevenir que o plástico chegue ao oceano é possivelmente mais impactante do que retirá-lo depois.</li>
            <li className="mb-4"><strong>Plástico reciclado &quot;inspirado no oceano&quot;:</strong> Plástico reciclado comum com marketing temático de oceano. É aqui que acontece o greenwashing. O material pode ser reciclado (bom!), mas não tem nada a ver com oceanos.</li>
          </ol>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Como Verificar Alegações de Plástico Oceânico</h3>
            <p className="text-amber-800">
              Peça a <strong>Certificação Ocean Bound Plastic</strong> (da Zero Plastic Oceans) ou 
              verificação semelhante de terceiros. Pergunte onde o plástico foi coletado, por quem e qual 
              porcentagem da armação é realmente plástico oceânico/destinado ao oceano vs material virgem. Fornecedores 
              legítimos conseguem responder essas perguntas imediatamente. Se o fornecedor for vago, desconfie.
            </p>
          </div>

          <h2 id="natural-materials" className="text-3xl font-bold mt-16 mb-6">Madeira, Bambu e Materiais Naturais</h2>
          <p>
            Armações de materiais naturais têm um nicho de mercado dedicado. Parecem distintas e contam uma 
            forte história de sustentabilidade. Aqui está a avaliação honesta:
          </p>
          <ul>
            <li><strong>Bambu:</strong> Crescimento rápido, renovável, visual distinto. Funciona melhor para hastes do que para armações inteiras. Armações totalmente de bambu são frágeis nos pontos de tensão. Custo: comparável ao acetato de gama média.</li>
            <li><strong>Madeira (nogueira, zebrawood, ébano):</strong> Padrões de veio bonitos. Mais pesada que armações plásticas. Requer vedamento cuidadoso para resistir à umidade. Melhor como material de haste com frente de metal/acetato.</li>
            <li><strong>Cortiça:</strong> Ultraleve, resistente à água, textura única. Limitada a hastes e peças de destaque. Nicho pequeno, mas crescente.</li>
            <li><strong>Plásticos de base biológica (nylon de óleo de mamona):</strong> Feito de óleo de mamona em vez de petróleo. Propriedades semelhantes ao nylon padrão. Disponibilidade crescente.</li>
          </ul>

          <h2 id="sustainable-lenses" className="text-3xl font-bold mt-16 mb-6">Opções de Lentes Sustentáveis</h2>
          <p>
            Lentes são mais difíceis de tornar sustentáveis do que armações porque os requisitos de qualidade óptica são 
            rigorosos. Mas existem opções:
          </p>
          <ul>
            <li><strong>Lentes de nylon de base biológica:</strong> Opção emergente usando nylon derivado de plantas. Qualidade óptica equivale às lentes de nylon convencionais. Custo adicional de 20-30%.</li>
            <li><strong>Policarbonato reciclado:</strong> Disponível em alguns fornecedores. Propriedades próximas ao policarbonato virgem, mas não idênticas -- diferenças mínimas na clareza óptica que a maioria dos consumidores não perceberá.</li>
            <li><strong>Lentes de vidro:</strong> Tecnicamente a opção mais reciclável e feita de materiais naturais abundantes (areia). Mas mais pesadas e frágeis que alternativas plásticas. Para detalhes sobre lentes, confira nosso{' '}
              <Link href="/pt/blog/lens-guide-update" className="text-primary-600 hover:underline">guia avançado de lentes</Link>.
            </li>
          </ul>

          <h2 id="eco-packaging" className="text-3xl font-bold mt-16 mb-6">Embalagem Ecológica</h2>
          <p>
            A embalagem é geralmente o lugar mais fácil para causar um impacto de sustentabilidade visível. E é 
            o que os clientes veem primeiro.
          </p>
          <ul>
            <li><strong>Caixas de papelão reciclado:</strong> Caixas de papel kraft 100% reciclado. Custo: comparável à embalagem padrão. A troca mais direta.</li>
            <li><strong>Bolsas de algodão orgânico:</strong> Substituem panos e bolsas de microfibra sintética. Custo: 10-15% mais. Servem como pano de limpeza também.</li>
            <li><strong>Estojos de cortiça:</strong> Leves, renováveis, distintos. Custo: 20-30% mais que estojos de couro PU.</li>
            <li><strong>Estojos de fibra de bambu:</strong> Alternativa biodegradável a estojos de plástico rígido. Boa proteção, história ecológica.</li>
            <li><strong>Tags de papel semente:</strong> Tags plantáveis que crescem em flores silvestres. Ótimo toque de marketing. Custo: $0,15-$0,30 por tag.</li>
            <li><strong>Tintas à base de soja:</strong> Para impressão em embalagens. Praticamente sem diferença de custo.</li>
          </ul>
          <p>
            Para opções completas de embalagem e custos, veja nosso{' '}
            <Link href="/pt/blog/embalagem-personalizada-oculos-sol" className="text-primary-600 hover:underline">guia de embalagem</Link>.
          </p>

          <h2 id="factory-practices" className="text-3xl font-bold mt-16 mb-6">Práticas Sustentáveis de Fábrica</h2>
          <p>
            Os materiais recebem a atenção do marketing, mas as práticas de fábrica frequentemente têm um impacto ambiental 
            maior. Veja o que fizemos na EyeView e o que você deve procurar em qualquer 
            fábrica:
          </p>
          <ul>
            <li><strong>Reciclagem de resíduos:</strong> Sucata de acetato (30-40% da matéria-prima) pode ser moída e reciclada em produtos de menor grau. Sucata metálica é vendida para recicladores. Reciclamos 85% dos nossos resíduos de produção.</li>
            <li><strong>Tratamento de água:</strong> Processos de polimento e revestimento usam água. Fábricas adequadas têm sistemas de tratamento de água que filtram e reciclam a água de processo.</li>
            <li><strong>Energia:</strong> Painéis solares nos telhados de fábricas são cada vez mais comuns em Wenzhou. Nossa instalação gera 30% da sua eletricidade com energia solar no telhado.</li>
            <li><strong>Gestão de químicos:</strong> Revestimentos à base de água em vez de solventes. Adesivos com baixo VOC. Descarte adequado de resíduos químicos.</li>
            <li><strong>ISO 14001:</strong> O padrão internacional para sistemas de gestão ambiental. Pergunte à sua fábrica se são certificados.</li>
          </ul>

          <h2 id="cost-comparison" className="text-3xl font-bold mt-16 mb-6">Comparação Real de Custos</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Componente</th>
                  <th className="px-6 py-4 text-left">Padrão</th>
                  <th className="px-6 py-4 text-left">Sustentável</th>
                  <th className="px-6 py-4 text-left">Ágio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Armação de acetato</td><td className="px-6 py-4">$2.50-$4.00</td><td className="px-6 py-4">$3.00-$5.00 (bio)</td><td className="px-6 py-4">+15-20%</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Armação TR90/nylon</td><td className="px-6 py-4">$1.50-$3.00</td><td className="px-6 py-4">$1.80-$3.75 (recycled)</td><td className="px-6 py-4">+15-25%</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Lentes polarizadas (par)</td><td className="px-6 py-4">$1.50-$3.00</td><td className="px-6 py-4">$2.00-$4.00 (bio-nylon)</td><td className="px-6 py-4">+20-30%</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Estojo rígido</td><td className="px-6 py-4">$1.00-$2.50</td><td className="px-6 py-4">$1.20-$3.00 (cork/bamboo)</td><td className="px-6 py-4">+15-25%</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Pano/bolsa</td><td className="px-6 py-4">$0,30-$0,80</td><td className="px-6 py-4">$0,40-$1,00 (algodão orgânico)</td><td className="px-6 py-4">+10-25%</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Caixa/embalagem</td><td className="px-6 py-4">$0,50-$1,50</td><td className="px-6 py-4">$0,50-$1,50 (kraft reciclado)</td><td className="px-6 py-4">+0-5%</td></tr>
                <tr className="bg-white font-bold"><td className="px-6 py-4">Total por par</td><td className="px-6 py-4">$7,30-$14,80</td><td className="px-6 py-4">$8,90-$18,25</td><td className="px-6 py-4">+15-25%</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            O ágio da sustentabilidade é real, mas gerenciável -- tipicamente 15-25% nos custos de fabricação. 
            E aqui está o caso de negócio: óculos sustentáveis são vendidos no varejo com um ágio de 30-50% sobre 
            produtos não sustentáveis comparáveis. Um par que custa $10 para fabricar de forma sustentável pode ser vendido 
            por $55-$65 em vez de $40-$45. A margem na verdade melhora. Para o quadro completo de preços, 
            leia nosso{' '}
            <Link href="/pt/blog/estrategia-precos-oculos-sol" className="text-primary-600 hover:underline">guia de estratégia de preços</Link>.
          </p>

          <h2 id="greenwashing" className="text-3xl font-bold mt-16 mb-6">Como Evitar Greenwashing</h2>
          <p>
            Se você vai divulgar seus óculos como sustentáveis, faça isso de forma honesta. Os consumidores estão 
            ficando mais atentos, e a reação contra greenwashing pode destruir uma marca mais rápido que qualquer defeito de produto.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Faça ✅</h3>
          <ul>
            <li>Especifique exatamente o que é sustentável -- &quot;armações feitas de bio-acetato&quot; é melhor do que &quot;óculos ecológicos&quot;</li>
            <li>Obtenha certificação de terceiros (GRS, ISCC PLUS, FSC)</li>
            <li>Seja transparente sobre o que <em>não</em> é sustentável no seu produto (talvez as lentes sejam de policarbonato padrão -- tudo bem, só não diga que o produto inteiro é eco)</li>
            <li>Compartilhe as certificações ambientais da sua fábrica</li>
            <li>Quantifique o impacto quando possível -- &quot;cada par usa 15g de plástico reciclado ocean-bound&quot;</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Não Faça ❌</h3>
          <ul>
            <li>Alegar &quot;100% sustentável&quot; -- nada é</li>
            <li>Usar termos vagos como &quot;amigo da terra&quot; ou &quot;verde&quot; sem especificidades</li>
            <li>Alegar &quot;biodegradável&quot; a menos que o produto realmente se biodegrada em condições realistas (a maioria do bio-acetato só se biodegrada em instalações de compostagem industrial)</li>
            <li>Usar imagens de oceano se seu produto não usa realmente materiais de origem oceânica</li>
            <li>Cobrar um ágio pela sustentabilidade sem entregar substância</li>
          </ul>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">De que são feitos os óculos de sol sustentáveis?</h3>
              <p className="text-gray-600">
                As opções mais comuns: bio-acetato (de algodão/polpa de madeira), nylon/TR90 reciclado 
                (de plástico oceânico ou pós-consumo), metais reciclados, bambu/madeira e plásticos 
                de base biológica. Cada um tem perfis diferentes de custo, durabilidade e impacto ambiental.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto a mais custam óculos sustentáveis para fabricar?</h3>
              <p className="text-gray-600">
                Tipicamente 10-25% a mais. Bio-acetato: +15%. Nylon reciclado: +15-25%. Mas óculos 
                sustentáveis são vendidos com ágio de 30-50% no varejo, então as margens na verdade melhoram. A diferença de custo 
                está diminuindo a cada ano.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">O bio-acetato é tão durável quanto o acetato comum?</h3>
              <p className="text-gray-600">
                Sim. De fornecedores renomados, o bio-acetato tem propriedades mecânicas idênticas -- mesma 
                dureza, flexibilidade, qualidade de polimento e vida útil. A diferença está na fonte da matéria-prima, 
                não no desempenho do produto acabado.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Óculos de &apos;plástico oceânico&apos; são realmente feitos de plástico do oceano?</h3>
              <p className="text-gray-600">
                A maioria usa plástico &quot;ocean-bound&quot; (coletado de áreas costeiras antes de chegar 
                ao oceano) em vez de plástico retirado do próprio oceano. Ambos são legítimos e 
                ambientalmente benéficos. Sempre verifique com certificação de terceiros como a 
                Certificação Ocean Bound Plastic.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quais certificações óculos sustentáveis devem ter?</h3>
              <p className="text-gray-600">
                Certificações-chave: GRS (Global Recycled Standard), ISCC PLUS (conteúdo de base biológica), 
                FSC (fornecimento de madeira/bambu), OEKO-TEX (substâncias nocivas), ISO 14001 (gestão 
                ambiental de fábrica). Tenha cautela com alegações de &quot;ecológico&quot; sem 
                nenhuma verificação de terceiros.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Quer Tornar Sua Marca Sustentável?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Oferecemos bio-acetato, nylon reciclado e opções de embalagem ecológica para todos os nossos 
              produtos ODM e OEM. Posso ajudá-lo a encontrar o equilíbrio certo entre sustentabilidade, qualidade 
              e custo para o posicionamento da sua marca.
            </p>
            <Link href="/pt/contato" className="btn-primary">
              Discuta Opções Sustentáveis com o Jacky
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais Direto da Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/comparacao-materiais-armacoes" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetato vs Metal: Guia de Materiais de Armação</h3>
                <p className="text-gray-600 text-sm">Comparação completa de materiais de armação incluindo opções sustentáveis.</p>
              </Link>
              <Link href="/pt/blog/tendencias-design-oculos-2026" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Tendências de Design de Óculos de Sol para 2026</h3>
                <p className="text-gray-600 text-sm">Sustentabilidade é uma das maiores tendências -- veja o que mais está em alta.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
