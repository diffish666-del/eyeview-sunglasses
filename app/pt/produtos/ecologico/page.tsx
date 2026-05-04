import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Fabricante de Óculos de Sol Ecológicos | Óculos Sustentáveis no Atacado - EyeView',
  description: 'Fabricante de óculos de sol sustentáveis e ecológicos no atacado. Plástico reciclado do oceano, hastes de bambu, armações de bio-acetato. MOQ 200 pçs. Certificações verdes disponíveis.',
  keywords: 'fabricante óculos sustentáveis, óculos ecológicos no atacado, óculos reciclados, óculos bambu, óculos bio-acetato, fábrica óculos verdes, óculos plástico oceano',
  openGraph: {
    title: 'Fabricante de Óculos de Sol Ecológicos | Óculos Sustentáveis no Atacado - EyeView',
    description: 'Fabricante de óculos sustentáveis. Plástico reciclado do oceano, bambu, armações de bio-acetato. MOQ 200 pçs. Preços diretos de fábrica com certificações verdes.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/produtos/ecologico',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/ecologico',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/eco-friendly',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/ecologico',
    },
  },
}

const ecoFaqs = [
  {
    question: 'Quais materiais sustentáveis vocês oferecem para a fabricação de óculos de sol?',
    answer: 'Trabalhamos com quatro materiais ecológicos principais no momento. Primeiro é o plástico reciclado do oceano (rPET) — obtemos plástico pós-consumo coletado em limpezas costeiras no Sudeste Asiático e o processamos em pellets injetáveis. Segundo é o bambu, que usamos para as hastes (os braços da armação). Terceiro é o bio-acetato, especificamente o Eastman Acetate Renew, que substitui 60% da matéria-prima fóssil por conteúdo reciclado certificado por meio de reciclagem molecular. E quarto é a liga de alumínio reciclado para componentes metálicos das armações. Cada material tem custos, estética e argumentos ambientais diferentes, então ajudamos você a escolher o mais adequado para a história da sua marca e sua faixa de preço.',
  },
  {
    question: 'Quais certificações vocês podem fornecer para óculos ecológicos?',
    answer: 'Isso depende do que o seu mercado exige e quais declarações você quer fazer. Para os óculos em si, fornecemos CE (EN ISO 12312-1), conformidade FDA e testes UV400 — igual às nossas linhas padrão. Para declarações de sustentabilidade especificamente, o bio-acetato da Eastman vem com certificação de cadeia de custódia ISCC PLUS. Nossos fornecedores de bambu têm certificação FSC. Para plástico reciclado do oceano, podemos fornecer documentação dos nossos parceiros de coleta mostrando a origem e cadeia de custódia. Também temos ISO 14001 (gestão ambiental) para as operações da nossa fábrica. Se você precisar de certificações específicas para o seu mercado — digamos, documentação B Corp ou cálculos de pegada de carbono — podemos trabalhar com auditores externos para consegui-las. Leva cerca de 4-6 semanas extras.',
  },
  {
    question: 'Os óculos ecológicos são tão duráveis quanto os normais?',
    answer: 'Honestamente? Depende do material, mas a resposta curta é sim — eles aguentam perfeitamente para uso normal. O bio-acetato tem desempenho idêntico ao acetato tradicional porque a estrutura química é a mesma. O plástico reciclado do oceano (rPET) é bastante resistente — nós o injetamos da mesma forma que o nylon virgem, e ele passa em todos os nossos testes padrão de queda e fadiga de dobradiça (2.000 ciclos de abertura-fechamento). As hastes de bambu são naturalmente fortes e têm um belo veio, embora possam ser sensíveis à exposição prolongada à água — aplicamos um revestimento protetor de laca para lidar com isso. O alumínio reciclado é metalurgicamente idêntico ao alumínio virgem após ser refundido, então zero diferença em durabilidade. A única coisa que direi é que o bio-acetato pode ser ligeiramente mais sensível a solventes à base de acetona, então incluímos instruções de cuidado para seus clientes finais.',
  },
  {
    question: 'Qual é o pedido mínimo para óculos ecológicos?',
    answer: 'O MOQ é de 200 peças por modelo para a maioria dos materiais eco — um pouco maior que nosso mínimo padrão de 100 peças porque os materiais sustentáveis exigem tiragens de produção separadas para evitar contaminação com materiais convencionais. Para hastes de bambu especificamente, o MOQ é 300 peças porque os blanks de bambu são processados em lotes. Você pode misturar cores e opções de lente dentro desses mínimos. Para bio-acetato, se quiser uma cor ou padrão personalizado, o MOQ da placa de acetato da Eastman é tipicamente 50kg (suficiente para aproximadamente 500-600 pares), então sugerimos começar com a biblioteca de cores padrão deles para pedidos menores. Mantemos cerca de 15 cores de bio-acetato em estoque para pedidos de início rápido.',
  },
  {
    question: 'Quanto mais custam os óculos ecológicos comparados com os normais?',
    answer: 'Menos do que a maioria das pessoas espera. O bio-acetato acrescenta aproximadamente $1-2 por par comparado com acetato padrão — então um par que normalmente custa $6-8 sai por $7-10 em bio-acetato. As hastes de bambu acrescentam aproximadamente $0,50-1,00 por par versus hastes de plástico padrão. As armações de plástico reciclado do oceano (rPET) custam aproximadamente o mesmo que as de nylon virgem — às vezes até menos, dependendo dos preços do mercado de resina. O alumínio reciclado é tipicamente $0,50-1,00 a mais por par que o alumínio virgem. A história real está no lado do varejo: óculos sustentáveis têm um sobrepreço de 30-50% dos consumidores. Um par que seria vendido a $35 em materiais padrão pode ser vendido a $45-55 com credenciais ecológicas legítimas e a história de marca certa. Suas margens realmente melhoram.',
  },
  {
    question: 'Posso combinar diferentes materiais eco em um par de óculos?',
    answer: 'Com certeza, e alguns dos designs ecológicos mais vendidos que produzimos fazem exatamente isso. A combinação mais popular é uma armação frontal de plástico reciclado do oceano com hastes de bambu — te dá duas histórias de sustentabilidade em um produto e o contraste visual entre o plástico liso e o veio natural do bambu fica fantástico. Outra boa combinação é frente de bio-acetato com detalhes de alumínio reciclado nas hastes. Também já fizemos hastes de bambu em armações estilo aviador de alumínio reciclado. A única combinação que não funciona bem é armações frontais de bambu — o material não é dimensionalmente estável o suficiente para o corpo principal da armação onde as lentes se encaixam. Teremos prazer em enviar amostras de diferentes combinações de materiais para que você possa ver e sentir antes de se comprometer.',
  },
]

const products = [
  {
    name: 'Wayfarer Reciclado do Oceano',
    description: 'Fabricado com plástico pós-consumo certificado do oceano, coletado nas costas da Indonésia e Tailândia. Cada par usa aproximadamente 10 gramas de rPET recuperado — não é um número enorme, mas multiplique por alguns milhares de pares e faz diferença. A armação injetada tem a mesma aparência e sensação de qualquer armação premium de nylon. Podemos igualar cores Pantone, embora os acabamentos mais populares sejam azul oceano fosco, coral e preto carbono. Vem com um cartão explicativo sobre a procedência do plástico oceânico — seus clientes adoram isso.',
    price: '$5.50 - $9.00',
    moq: '200 pçs',
    features: ['Plástico Reciclado do Oceano', 'Proteção UV400', 'Correspondência de Cor Pantone', 'Cartão Informativo Incluído'],
  },
  {
    name: 'Clássico com Hastes de Bambu',
    description: 'Armação frontal de acetato padrão ou rPET combinada com hastes de bambu Moso acabadas à mão. Cada peça de bambu é seca em estufa, moldada por CNC, depois lixada à mão e laqueada para um acabamento suave. O veio natural significa que não existem dois pares exatamente iguais — o que na verdade é um ponto de venda para marcas de estilo artesanal. O bambu é proveniente de plantações certificadas FSC na província de Zhejiang. O bambu cresce até o tamanho de colheita em 3-5 anos versus décadas para madeira de lei, tornando-o um dos materiais mais renováveis do planeta.',
    price: '$6.00 - $10.00',
    moq: '300 pçs',
    features: ['Bambu FSC', 'Acabamento à Mão', 'Veio Único', 'Protegido com Laca'],
  },
  {
    name: 'Bio-Acetato Premium',
    description: 'O Eastman Acetate Renew é a referência em óculos sustentáveis agora. Usa tecnologia de reciclagem molecular para substituir 60% do material fóssil tradicional por conteúdo reciclado certificado — e o acetato resultante é quimicamente idêntico ao acetato convencional. Mesmas cores, mesmos padrões, mesmo acabamento polido à mão, mesma durabilidade. A diferença está puramente na cadeia de suprimentos, que é exatamente o tipo de declaração verificável que mantém sua marca longe de problemas de greenwashing. Oferecemos todas as cores padrão da Eastman mais correspondência Pantone personalizada.',
    price: '$7.00 - $11.00',
    moq: '200 pçs',
    features: ['Eastman Acetate Renew', 'Certificado ISCC PLUS', 'Polido à Mão', '60% Conteúdo Reciclado'],
  },
  {
    name: 'Aviador de Alumínio Reciclado',
    description: 'Nossa armação aviador clássica, refeita com liga de alumínio reciclado. O alumínio é proveniente de sucata pós-industrial — recortes de fabricação automotiva e aeroespacial que de outra forma seriam sub-reciclados. Uma vez refundido e remoldado, é metalurgicamente idêntico à liga 6061-T6 virgem. Mesma resistência, mesmo peso (18-22g), mesmos belos acabamentos anodizados. Podemos gravar "alumínio reciclado" na parte interna do braço da haste para seu marketing. Combina bem com lentes polarizadas para um pacote eco premium completo.',
    price: '$10.00 - $15.00',
    moq: '200 pçs',
    features: ['6061-T6 Reciclado', 'Acabamento Anodizado', 'Leve 18-22g', 'Fonte Pós-Industrial'],
  },
  {
    name: 'Combo Eco Completo',
    description: 'Nossa opção mais sustentável — armação frontal de plástico reciclado do oceano combinada com hastes de bambu FSC. Duas histórias eco em um produto. O contraste visual entre o plástico fosco liso e o veio natural do bambu rende fotos lindas para redes sociais e e-commerce. Incluímos um estojo de fibra de bambu com sua marca e uma tag de papelão reciclado com sua mensagem de sustentabilidade. Este é o par que conquista o cliente Gen Z que lê cada etiqueta e verifica cada declaração. Vários dos nossos clientes DTC reportam este estilo como o mais vendido por receita.',
    price: '$8.00 - $12.00',
    moq: '300 pçs',
    features: ['Plástico Oceânico + Bambu', 'Estojo de Fibra de Bambu', 'Tag Reciclada', 'Pronto para Instagram'],
  },
  {
    name: 'Eco Explorer para Crianças',
    description: 'Óculos sustentáveis para a próxima geração — literalmente. Armação de nylon de base biológica (derivado do óleo de mamona) com dobradiças de mola flexíveis para idades de 4-12. Os pais que compram para crianças são alguns dos consumidores mais eco-conscientes que existem, e estão dispostos a pagar um premium por produtos seguros e sustentáveis. As armações são livres de BPA, ftalatos e hipoalergênicas. Podemos fazer cores divertidas — azul oceano, verde floresta, laranja pôr do sol — com embalagem eco combinando. O MOQ é um pouco mais alto porque armações infantis exigem ferramental separado.',
    price: '$4.50 - $7.00',
    moq: '500 pçs',
    features: ['Nylon de Base Biológica', 'Livre de BPA/Ftalatos', 'Idades 4-12', 'Dobradiças de Mola'],
  },
]

export default function EcologicoPagePt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Óculos de Sol Ecológicos Sustentáveis',
        description: 'Óculos de sol sustentáveis fabricados com plástico reciclado do oceano, bambu, bio-acetato e alumínio reciclado. Proteção UV400, personalização OEM completa. Certificações verdes disponíveis.',
        minPrice: '4.50',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Início', url: 'https://eyeviewsunglasses.com/pt' },
        { name: 'Produtos', url: 'https://eyeviewsunglasses.com/pt/produtos' },
        { name: 'Óculos Ecológicos', url: 'https://eyeviewsunglasses.com/pt/produtos/ecologico' }
      ]} />
      <FAQPageSchema faqs={ecoFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/pt" className="hover:text-primary-600">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Óculos de Sol Ecológicos</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
              alt="Óculos de Sol Ecológicos Sustentáveis no Atacado - Bambu e Materiais Reciclados"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fabricante de Óculos de Sol Ecológicos
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Vou ser direto — cinco anos atrás, quando as marcas me perguntavam sobre &ldquo;óculos sustentáveis,&rdquo; eu era cético. Achava que era um truque de marketing que desapareceria em uma ou duas temporadas. Eu estava errado. Completamente errado. Em 2024, aproximadamente 35% das consultas de novos clientes mencionam especificamente a sustentabilidade como um requisito. Não um diferencial — um requisito. A mudança foi dramática, e está sendo impulsionada por uma coisa: a demanda do consumidor, especialmente de compradores da Geração Z e millennials que realmente verificam do que seus óculos de sol são feitos.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Então investimos. Nos últimos três anos, construímos cadeias de suprimentos dedicadas a materiais eco, obtivemos a <Link href="/pt/certificacoes" className="text-primary-600 hover:underline">certificação ISO 14001 de gestão ambiental</Link> para nossa fábrica, e desenvolvemos processos de produção para quatro materiais sustentáveis principais: plástico reciclado do oceano (rPET), bambu certificado FSC, <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Eastman Acetate Renew</a> (bio-acetato), e alumínio reciclado. Cada um tem propriedades, custos e histórias diferentes — e honestamente, qual é o certo para você depende inteiramente do seu posicionamento de marca e dos seus clientes.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Aqui vai o caso de negócio em uma frase: os <strong>óculos de sol sustentáveis</strong> tipicamente custam $0,50-2,00 a mais por par para produzir, mas têm um sobrepreço de varejo de 30-50%. Um wayfarer convencional que vende a $35 pode ser vendido a $45-55 com credenciais eco legítimas. Vi dezenas dos nossos clientes DTC fazer essa conta funcionar maravilhosamente. Uma marca em Amsterdã mudou toda a sua linha para bio-acetato em 2023 e viu seu valor médio de pedido subir 28% — mesmas armações, mesmas lentes, apenas material diferente e uma história melhor.
              </p>
              <p className="text-lg leading-relaxed">
                A palavra-chave aí é &ldquo;legítimo.&rdquo; O greenwashing vai destruir uma marca mais rápido que um produto ruim. Cada material que oferecemos vem com documentação rastreável — cadeia de custódia ISCC PLUS para bio-acetato, certificação FSC para bambu, registros de parceiros de coleta para plástico oceânico. Quando seu cliente escaneia o código QR na tag e vê de onde o material realmente veio, isso constrói o tipo de confiança que dinheiro não compra. Deixe-me explicar o que oferecemos.
              </p>
            </div>
          </div>

          {/* Sustainable Materials Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Nossos Materiais Sustentáveis</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Quatro materiais, quatro histórias diferentes. Aqui está uma visão honesta do que cada um realmente é, quanto custa e para quem é melhor.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">Plástico Reciclado do Oceano (rPET)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Temos parceria com organizações de coleta costeira na Indonésia, Tailândia e Filipinas que recolhem resíduos plásticos pós-consumo de praias e águas rasas. O PET coletado é classificado, limpo, triturado e reprocessado em pellets de grau injeção. Quimicamente, é polietileno tereftalato — resistente, leve e estável aos UV. Nós o injetamos da mesma forma que lidamos com nylon virgem. O resultado tem a mesma aparência e sensação de qualquer armação de plástico premium. As cores são ligeiramente mais limitadas que o material virgem (pretos profundos e cores escuras funcionam melhor), mas podemos igualar a maioria dos tons Pantone. O custo é aproximadamente o mesmo que o nylon padrão — às vezes até menos, dependendo dos preços de mercado da resina virgem.
                </p>
                <div className="text-primary-600 font-bold">$5,50 - $9,00 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🎋</div>
                <h3 className="text-xl font-bold mb-3">Hastes de Bambu</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bambu Moso (<em>Phyllostachys edulis</em>) de plantações certificadas FSC na província de Zhejiang, China. O bambu atinge a maturidade de colheita em 3-5 anos — comparado com 20-60 anos para madeira de lei — e se regenera a partir do mesmo sistema de raízes sem necessidade de replantio. Cada blank de haste é seco em estufa a 8-10% de umidade, cortado por CNC, lixado à mão em três granulometrias e acabado com uma laca de grau alimentício. O veio natural significa que cada par tem uma aparência ligeiramente única. As hastes de bambu acrescentam aproximadamente $0,50-1,00 por par sobre as hastes de plástico padrão. Combinam lindamente com armações frontais de rPET ou bio-acetato para um pacote eco completo. Uma observação: o bambu não é adequado para armações frontais (a parte que segura as lentes) porque não tem a precisão dimensional necessária para segurar as lentes de forma segura.
                </p>
                <div className="text-primary-600 font-bold">Acrescenta $0,50 - $1,00 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">♻️</div>
                <h3 className="text-xl font-bold mb-3">Bio-Acetato (Eastman Acetate Renew)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esta é a opção sustentável premium e a que mais me entusiasma. O <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">acetato de celulose</a> tem sido o material de armação de referência por décadas — e o <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Acetate Renew da Eastman</a> usa tecnologia de reciclagem molecular para substituir 60% do material fóssil tradicional por conteúdo reciclado certificado. O genial é que o resultado é quimicamente idêntico ao acetato convencional. Mesma dureza, mesmo polimento, mesma vivacidade de cor, mesma tudo. A diferença está puramente na cadeia de suprimentos, que é exatamente o tipo de declaração verificável que mantém sua marca longe de problemas de greenwashing. Possui certificação de balanço de massa ISCC PLUS, que é o padrão para declarações verificadas de conteúdo reciclado. Acrescenta $1-2 por par. Se sua marca é posicionada como premium e seus clientes leem rótulos, este é o material.
                </p>
                <div className="text-primary-600 font-bold">Acrescenta $1,00 - $2,00 / par</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">Alumínio Reciclado</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para estilos de armação metálica — especialmente <Link href="/pt/produtos/aviador" className="text-primary-600 hover:underline">aviadores</Link> — o alumínio reciclado é uma melhoria de sustentabilidade direta. Obtemos sucata de alumínio pós-industrial (recortes de fabricação automotiva e aeroespacial) e a refundimos em lingotes de liga 6061-T6. Uma vez remoldado, o alumínio reciclado é metalurgicamente idêntico ao material virgem. Mesma resistência, mesmo peso, mesma capacidade de anodização em qualquer cor. O benefício ambiental é significativo: reciclar alumínio usa 95% menos energia do que produzir alumínio virgem a partir de minério de bauxita. Acrescenta aproximadamente $0,50-1,00 por par. A única limitação é a documentação de rastreabilidade — mantemos registros por lote vinculando cada tiragem de produção à fonte de sucata, mas não é uma história tão elegante de cara ao consumidor como o plástico oceânico ou o bambu.
                </p>
                <div className="text-primary-600 font-bold">Acrescenta $0,50 - $1,00 / par</div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Óculos de Sol Ecológicos no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Nossa Coleção Ecológica</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🌿</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/pt/contato" className="btn-primary text-sm">Solicitar Orçamento</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Materiais Eco em um Relance</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Plástico Reciclado do Oceano (rPET)', 'PET pós-consumo injetado de limpezas costeiras. Mesma aparência/sensação do nylon virgem.'],
                      ['Bambu (Moso)', 'Certificado FSC, seco em estufa, cortado CNC, lixado à mão, revestido com laca. Apenas para hastes.'],
                      ['Bio-Acetato (Eastman Renew)', '60% conteúdo reciclado certificado por reciclagem molecular. Certificado ISCC PLUS. Quimicamente idêntico ao acetato padrão.'],
                      ['Alumínio Reciclado', 'Sucata pós-industrial 6061-T6, refundida. 95% menos energia vs alumínio virgem. Desempenho idêntico.'],
                      ['Material de Lente', 'Igual ao padrão: Policarbonato / TAC Polarizado / CR-39 — sem compromisso na óptica'],
                      ['Proteção UV', 'UV400 — bloqueia 100% de UVA (315-380nm) e UVB (280-315nm)'],
                      ['Certificações Disponíveis', 'CE · FDA · UV400 · ISO 9001 · ISO 14001 · ISCC PLUS (bio-acetato) · FSC (bambu)'],
                      ['Opções de Embalagem Eco', 'Estojos de fibra de bambu, caixas de papelão reciclado, sacos de amido de milho, impressão com tinta de soja'],
                      ['MOQ', '200 pçs (rPET, bio-acetato, alumínio reciclado) / 300 pçs (haste de bambu)'],
                      ['Custo Extra vs Padrão', 'rPET: $0 / Bambu: +$0,50-1,00 / Bio-acetato: +$1-2 / Alumínio reciclado: +$0,50-1,00'],
                      ['Prazo de Amostra', '5-7 dias úteis (materiais eco podem precisar de prazo de abastecimento)'],
                      ['Prazo de Produção', '18-25 dias padrão / 12-15 dias urgente'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* The Business Case for Eco */}
          <section className="mb-20 bg-green-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">O Caso de Negócio para Ser Verde</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Sustentabilidade não é caridade — é negócio inteligente. Aqui estão os números.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📈 30-50% de Sobrepreço no Varejo</h3>
                <p className="text-sm text-gray-600">Os consumidores consistentemente pagam mais por produtos sustentáveis verificados. Um wayfarer padrão de $35 se torna um wayfarer eco de $45-55. Sua margem por par realmente melhora mesmo com o custo maior do material.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎯 A Geração Z Exige</h3>
                <p className="text-sm text-gray-600">73% dos consumidores da Geração Z estão dispostos a pagar mais por produtos sustentáveis (First Insight, 2023). Se seu mercado-alvo tem menos de 35 anos, sustentabilidade não é opcional — é pré-requisito para chamar a atenção deles.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📰 Mina de Ouro para PR e Marketing</h3>
                <p className="text-sm text-gray-600">Produtos eco geram cobertura de mídia gratuita. Vimos clientes aparecerem na Vogue, GQ e blogs de sustentabilidade puramente pela história do material. Tente conseguir essa imprensa com uma armação de acetato padrão.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🔄 Maior Recompra</h3>
                <p className="text-sm text-gray-600">Marcas sustentáveis veem 20-30% mais retenção de clientes. Quando alguém compra sua missão eco, volta para a próxima coleção. Eles se tornam embaixadores, não apenas clientes.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏪 Preferência de Compradores de Varejo</h3>
                <p className="text-sm text-gray-600">Grandes varejistas (Nordstrom, REI, Whole Foods Market, boutiques independentes) estão ativamente buscando marcas de óculos sustentáveis para estocar. Uma linha eco abre portas que produtos convencionais não conseguem.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌍 Ventos Regulatórios a Favor</h3>
                <p className="text-sm text-gray-600">As regulamentações da UE sobre plásticos de uso único e responsabilidade estendida do produtor estão se endurecendo. Marcas que mudam para materiais sustentáveis agora estão à frente em vez de correndo para cumprir depois.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Opções de Personalização Eco</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Ser verde não significa ser genérico. Veja como tornamos seus óculos eco distintamente seus.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Gravação a laser</strong> em hastes de bambu — fica incrível com o veio natural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Logo em relevo</strong> em armações de bio-acetato ou rPET — prensado, sem tinta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Impressão no canto da lente</strong> — branding sutil que não compromete a mensagem eco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Tag com QR code</strong> — link para sua página de história de sustentabilidade</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Cores e Acabamentos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>rPET:</strong> Azul oceano fosco, coral, preto carbono, oliva — ou correspondência Pantone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bio-acetato:</strong> Gama completa de cores — tartaruga, cristal, mármore, degradê, cores sólidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bambu:</strong> Natural, carbonizado (mais escuro), ou tingido em tons terrosos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Alumínio reciclado:</strong> Qualquer cor anodizada — fosco ou brilhante</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Embalagem Eco</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Estojo rígido de fibra de bambu</strong> — biodegradável, com seu logo em relevo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Caixa de papelão reciclado</strong> — impressão com tinta de soja, papel FSC, sem plástico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bolsa de algodão orgânico</strong> — serve também como pano de limpeza, certificação GOTS disponível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Saco de amido de milho</strong> — envoltório interno compostável substitui o plástico padrão</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Quem Compra Óculos de Sol Ecológicos?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              O mercado de óculos sustentáveis explodiu. Veja para quem estamos produzindo agora.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🌱 Marcas DTC Sustentáveis</h3>
                <p className="text-gray-300 text-sm">O segmento de maior crescimento. São marcas nativas do Shopify construídas em torno de uma missão de sustentabilidade. Precisam de materiais com declarações eco verificáveis, boa fotografia e uma história que resista ao escrutínio. Bio-acetato e plástico oceânico são seus favoritos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏄 Marcas Outdoor e Surf</h3>
                <p className="text-gray-300 text-sm">Marcas do setor outdoor estão sob intensa pressão para serem sustentáveis. Óculos de plástico oceânico encaixam naturalmente — a história do material conecta diretamente com o estilo de vida do cliente. Vários dos nossos clientes de marcas de surf passaram a ser 100% eco.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏨 Hotéis e Resorts Eco</h3>
                <p className="text-gray-300 text-sm">Marcas de hospitalidade sustentável oferecendo óculos eco como amenidades para hóspedes ou itens de loja de presentes. Armações com hastes de bambu com o logo do resort gravado a laser são os mais vendidos aqui. Os hóspedes guardam como lembrança.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🎁 Programas Corporativos ESG</h3>
                <p className="text-gray-300 text-sm">Empresas cumprindo metas ESG (Ambiental, Social, Governança) trocando brindes corporativos por produtos sustentáveis. Óculos eco com o logo da empresa são um sucesso em conferências e eventos de equipe — muito melhor que mais uma caneta com marca.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">👶 Marcas de Óculos Infantis</h3>
                <p className="text-gray-300 text-sm">Pais que compram para crianças são hiper-conscientes sobre materiais — tanto por segurança quanto por razões ambientais. Armações de nylon de base biológica e bambu atendem ambos os requisitos. Este segmento cresce mais de 40% ao ano para nós.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🛒 Marcas Mainstream Indo para o Verde</h3>
                <p className="text-gray-300 text-sm">Marcas de óculos estabelecidas adicionando uma sub-linha eco. Já têm a distribuição — só precisam de um produto sustentável confiável. O bio-acetato é a troca mais fácil porque se encaixa diretamente no processo de produção de acetato existente.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes sobre Óculos Ecológicos</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {ecoFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Produtos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/pt/produtos/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Wayfarer</h3>
                <p className="text-gray-600 text-sm">Nosso wayfarer clássico está disponível em bio-acetato. Mesma forma icônica, mesmo acabamento polido à mão — agora com 60% de conteúdo reciclado certificado.</p>
              </Link>
              <Link href="/pt/produtos/aviador" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Óculos Aviador</h3>
                <p className="text-gray-600 text-sm">Aviadores de metal disponíveis em alumínio reciclado. Mesma sensação leve, mesmos acabamentos anodizados, com 95% menos energia na produção do material.</p>
              </Link>
              <Link href="/pt/certificacoes" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Nossas Certificações</h3>
                <p className="text-gray-600 text-sm">CE, FDA, ISO 9001, ISO 14001, ISCC PLUS, FSC — confira a lista completa de certificações e documentação de conformidade que fornecemos.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Ser Sustentável?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Conte-nos sobre sua marca, seu cliente-alvo e suas metas de sustentabilidade. Vamos recomendar os materiais eco adequados e enviar amostras em uma semana. Sem compromisso, sem pressão — apenas conselhos honestos de alguém que já ajudou mais de 100 marcas a fazer essa transição.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pt/contato" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Solicitar Orçamento
              </Link>
              <Link href="/pt/produtos" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                Ver Todos os Produtos
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
