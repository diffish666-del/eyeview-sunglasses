import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos de Sol Infantis no Atacado | Fabricante de Óculos com Proteção UV para Crianças - EyeView',
  description: 'Fabricante de óculos de sol infantis no atacado. Óculos seguros, livres de BPA, certificados CPSIA e EN71 para idades de 0-12. Armações flexíveis inquebráveis, proteção UV400. MOQ 100 peças.',
  keywords: 'óculos de sol infantis no atacado, fabricante óculos crianças, óculos bebê no atacado, óculos de sol para crianças, óculos juvenis a granel, óculos proteção UV crianças, óculos livres de BPA crianças, óculos certificados CPSIA',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/infantil/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/kids/',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/infantil/',
    },
  },
}

const products = [
  {
    name: 'Óculos de Sol para Bebês (0-3 anos)',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$5.50 - $8.50',
    moq: '100 pçs',
    description: 'Vamos ser honestos — bebês mastigam tudo. É por isso que essas armações são feitas de silicone grau alimentício, o mesmo material das bicos de mamadeira. Você poderia literalmente colocá-los na boca (seu bebê vai). Completamente livres de BPA, ftalatos, e macios o suficiente para não cutucar nem beliscar. A faixa ajustável os mantém no lugar mesmo quando seu pequeno está determinado a tirá-los. O que vai acontecer. Repetidamente.',
  },
  {
    name: 'Óculos de Sol para Crianças Pequenas (3-5 anos)',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$6.00 - $9.00',
    moq: '100 pçs',
    description: 'Sabe o que acontece com óculos de sol de crianças pequenas? Elas sentam em cima, pisam, jogam pela sala e enterram na caixa de areia. É por isso que os fabricamos com TPE — um material flexível que dobra, torce e aguenta todo tipo de abuso, e depois volta à forma original. Disponíveis em mais de 15 cores porque aparentemente toda criança de 4 anos tem uma opinião muito forte sobre sua cor favorita. (Geralmente é rosa. Ou verde dinossauro.)',
  },
  {
    name: 'Óculos de Sol Esportivos Infantis (6-9 anos)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pçs',
    description: 'Para a criança que está sempre ao ar livre — treino de futebol, aulas de natação, passeios de bicicleta pelo bairro. São versões reduzidas das nossas armações esportivas para adultos com armações flexíveis TR90 e cobertura envolvente. Opção polarizada disponível para viagens à praia e dias de neve. Uma liga esportiva juvenil na Califórnia encomendou 800 pares no ano passado para seu programa de verão. O feedback: "Finalmente, óculos esportivos que realmente servem em crianças."',
  },
  {
    name: 'Óculos Moda Olho de Gato para Meninas (6-10 anos)',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pçs',
    description: 'Mini olhos de gato para meninas que querem ficar parecidas com a mamãe (ou sua YouTuber favorita). Detalhes brilhantes, cores pastel, decorações de coração nas hastes — tudo o que faz uma menina de 7 anos gritar "EU AMEI!" Mesmos padrões de segurança de todas as nossas armações infantis, só que com muito mais brilho. São verdadeiras estrelas em boutiques infantis e lojas de resorts de praia.',
  },
  {
    name: 'Aviador Infantil (8-12 anos)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.00',
    moq: '100 pçs',
    description: 'Para o pré-adolescente que acha que é cool demais para óculos de sol "de criancinha." Esses aviadores parecem de adulto mas são dimensionados para rostos jovens (49-52mm de largura de lente). Armação metálica leve com dobradiças de mola que se adaptam a diferentes tamanhos de cabeça conforme as crianças crescem. Lentes de policarbonato resistentes a impacto para skate, ciclismo e o que mais crianças de 10 anos aprontam. (Spoiler: geralmente envolve pular de coisas.)',
  },
  {
    name: 'Óculos Polarizados Esportivos Infantis',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pçs',
    description: 'Para os atletas juniores que levam seu esporte a sério. As lentes polarizadas TAC cortam o reflexo da água, neve e asfalto — uma diferença real para crianças na natação, esqui ou pescando com o papai. Estes são nossos óculos premium para crianças e os que os pais pedem especificamente quando querem a melhor proteção que o dinheiro pode comprar. Uma escola de natação em Sydney os usa exclusivamente para suas aulas ao ar livre.',
  },
]

export default function KidsPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Sol Infantis</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos de Sol Infantis no Atacado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pais não brincam quando se trata dos olhos dos seus filhos. Nós também não.
            Cada par é livre de BPA, certificado UV400, e atende aos padrões de segurança
            CPSIA, ASTM F963 e EN71. Armações flexíveis que sobrevivem ao caos infantil. Proteção UV
            real — não apenas plástico tingido. Idades 0-12, a partir de $5,50.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop"
            alt="Óculos de Sol Infantis no Atacado - Proteção UV Segura para Crianças de 0-12 Anos"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Algo que a Maioria dos Pais Não Sabe</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Os olhos de uma criança deixam passar muito mais radiação UV do que os olhos de um adulto. Muito mais. Antes
              dos 10 anos, o cristalino de uma criança transmite mais de 75% dos raios UV-A e 70% dos
              raios UV-B diretamente para a retina. O cristalino de um adulto? Apenas cerca de 10%. Isso
              significa que os olhos do seu filho absorvem aproximadamente 6-7 vezes mais dano UV no mesmo dia
              ensolarado. E aqui vem a parte preocupante — a <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">OMS diz que até 80%</a> da exposição
              UV de toda a vida de uma pessoa acontece antes dos 18 anos.
            </p>
            <p>
              Então, quando um pai compra aqueles óculos de sol de novidade fofos por $2 em uma loja barata,
              aquelas lentes escuras tingidas podem na verdade estar piorando as coisas. Lentes escuras
              sem proteção UV real fazem as pupilas dilatarem, deixando entrar <em>mais</em> radiação
              prejudicial do que se não estivessem usando óculos de sol. É um problema. Um de verdade.
            </p>
            <p>
              É exatamente por isso que levamos óculos de sol infantis tão a sério. Cada par que fabricamos
              é testado em laboratório para conformidade UV400 — o que significa que bloqueiam 99,9% da
              radiação UV até 400 nanômetros. Fornecemos os relatórios de teste. Temos as
              certificações. Quando um pai pega um par dos nossos óculos de sol infantis, pode confiar
              que os olhos do seu filho estão realmente protegidos. Não apenas sombreados. Protegidos.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop" alt="Óculos de Sol Infantis no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">A Coleção Infantil</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Materiais seguros livres de BPA</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Armação flexível inquebrável</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>100% proteção UV400</li>
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

        {/* Safety Certifications */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certificações em que os Pais Podem Confiar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">CPSIA</h3>
              <p className="text-sm text-gray-600">A mais importante para o mercado dos EUA. Chumbo abaixo de 100ppm, zero ftalatos. Se você vende produtos infantis na América, <a href="https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">isso não é opcional — é lei</a>. Nós cobrimos isso.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">ASTM F963</h3>
              <p className="text-sm text-gray-600">O padrão de segurança de brinquedos dos EUA. Testes de riscos mecânicos (bordas afiadas, peças pequenas), inflamabilidade e produtos químicos tóxicos. Nossas armações passam nas três seções.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold mb-2">EN71</h3>
              <p className="text-sm text-gray-600">O padrão europeu de segurança de brinquedos. Três partes cobrindo segurança mecânica, inflamabilidade e migração de elementos tóxicos. Obrigatório para vender na UE.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-2">CE & FDA</h3>
              <p className="text-sm text-gray-600">CE para Europa, FDA para o mercado óptico dos EUA. Ambos verificam que nossas declarações de proteção UV são reais — não apenas adesivos de marketing em armações baratas.</p>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">De Que São Feitos? (Os Pais Sempre Perguntam)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🍼 Silicone Grau Alimentício (0-3 Anos)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O mesmo material dos bicos de mamadeira e mordedores. Se é seguro para ir
                na boca de um bebê — e vai ir na boca, garantido — é seguro para
                óculos de sol. Infinitamente dobráveis, impossivelmente macios, livres de BPA,
                ftalatos, PVC e látex. Não irritam a pele sensível do bebê. Projetamos esses
                para os pais que se preocupam com tudo. (Entendemos. Nós também somos pais.)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔄 Armações Flexíveis de TPE (3-8 Anos)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TPE (Elastômero Termoplástico) é o equivalente em materiais de &quot;tenta
                me quebrar, eu te desafio.&quot; Dobre. Torça. Sente em cima. Jogue de um
                carrinho em movimento. Volta à forma original. Testamos para
                sobreviver quedas de 1,5 metros (aproximadamente a altura de uma mesa) e
                mais de 500 ciclos de flexão. Porque crianças pequenas vão encontrar formas de
                testá-los que nenhum engenheiro jamais imaginou.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏃 Nylon TR90 (8-12 Anos)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para crianças mais velhas que praticam esportes, andam de bicicleta e geralmente
                são brutos com tudo que possuem. O TR90 é 35% mais leve que plástico
                comum, flexiona sem quebrar, e suporta temperaturas de -40°C a 120°C (então
                sim, sobrevive a ser esquecido em um carro quente). Hipoalergênico também —
                sem marcas vermelhas com coceira atrás das orelhas após um longo dia ao ar livre.
              </p>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Guia de Tamanhos por Idade</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Idade</th>
                  <th className="p-4 text-left font-semibold">Largura da Lente</th>
                  <th className="p-4 text-left font-semibold">Ponte</th>
                  <th className="p-4 text-left font-semibold">Haste</th>
                  <th className="p-4 text-left font-semibold">Material</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-semibold">Bebê (0-2)</td><td className="p-4 text-gray-600">36-40mm</td><td className="p-4 text-gray-600">10-12mm</td><td className="p-4 text-gray-600">Faixa</td><td className="p-4 text-gray-600">Silicone grau alimentício</td></tr>
                <tr><td className="p-4 font-semibold">Criança Pequena (2-4)</td><td className="p-4 text-gray-600">40-44mm</td><td className="p-4 text-gray-600">12-14mm</td><td className="p-4 text-gray-600">105-115mm</td><td className="p-4 text-gray-600">Silicone / TPE</td></tr>
                <tr><td className="p-4 font-semibold">Criança (4-7)</td><td className="p-4 text-gray-600">44-48mm</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">115-125mm</td><td className="p-4 text-gray-600">TPE / TPEE</td></tr>
                <tr><td className="p-4 font-semibold">Júnior (7-10)</td><td className="p-4 text-gray-600">48-52mm</td><td className="p-4 text-gray-600">15-17mm</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">TR90 / PC</td></tr>
                <tr><td className="p-4 font-semibold">Juvenil (10-12)</td><td className="p-4 text-gray-600">52-56mm</td><td className="p-4 text-gray-600">16-18mm</td><td className="p-4 text-gray-600">130-140mm</td><td className="p-4 text-gray-600">TR90 / Acetato</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Feitos para Crianças Reais, Não para Crianças Cuidadosas</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🛡️" title="Zero Químicos Nocivos" description="Livres de BPA. Livres de ftalatos. Livres de PVC. Livres de chumbo. Testamos tudo o que preocupa os pais." />
            <FeatureCard icon="🔄" title="Tente Quebrá-los" description="Dobre. Torça. Pise. Voltam à forma. Desafiamos seu filho a destruí-los." />
            <FeatureCard icon="☀️" title="UV400 Real" description="Testado em laboratório, não apenas declarado no rótulo. Fornecemos relatórios de teste. Os filhos dos seus clientes estão genuinamente protegidos." />
            <FeatureCard icon="💪" title="Lentes Inquebráveis" description="Lentes de policarbonato que não estilhaçam com impacto. Porque crianças caem. Muito." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produtos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/esportivo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Óculos Esportivos</h3>
              <p className="text-sm text-gray-600">Armações esportivas para adultos — pais e filhos podem combinar!</p>
            </Link>
            <Link href="/pt/produtos/polarizado" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Opções Polarizadas</h3>
              <p className="text-sm text-gray-600">Proteção premium contra reflexo para praia e neve</p>
            </Link>
            <Link href="/pt/produtos/luz-azul" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Óculos de Luz Azul Infantis</h3>
              <p className="text-sm text-gray-600">Proteção de tela para tablets e aulas online</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas dos Pais (Recebemos Diariamente)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Com que idade é cedo demais para óculos de sol?"
              answer="A Academia Americana de Oftalmologia diz 6 meses. Antes disso, mantenha os bebês na sombra com chapéus e coberturas de carrinho. Mas uma vez que tenham 6 meses e passem tempo ao ar livre, seus olhos precisam de proteção UV. Sabemos que parece cedo — mas lembre-se, os olhinhos deles deixam passar 6-7 vezes mais UV que os seus. Quanto antes começar, melhor."
            />
            <FaqItem
              question="São realmente protetores ou apenas bonitos?"
              answer="As duas coisas! Mas a proteção vem primeiro. Cada par bloqueia 99,9% da radiação UV até 400 nanômetros — verificado por testes de laboratório independentes. Enviamos os relatórios de teste se quiser. Cuidado com óculos de sol baratos para crianças que são apenas plástico escuro tingido sem filtro UV. Esses na verdade pioram as coisas dilatando as pupilas e deixando entrar mais raios prejudiciais. Nossos óculos são bonitos E seguros."
            />
            <FaqItem
              question="Meu filho destrói tudo. Esses vão sobreviver?"
              answer="Literalmente os projetamos para isso. As armações de silicone para bebês? Infinitamente dobráveis. As armações de TPE para crianças pequenas? Testadas para sobreviver mais de 500 ciclos de flexão e quedas de 1,5 metros. As armações TR90 para crianças maiores? Dobre 90 graus — voltam à posição. Não podemos prometer que sejam 100% indestrutíveis (crianças são criativas), mas são as armações mais resistentes que sabemos fazer."
            />
            <FaqItem
              question="Quais certificações eles têm? Preciso saber para minha loja."
              answer="Tudo o que você precisa: CPSIA (obrigatório para produtos infantis nos EUA — chumbo abaixo de 100ppm, zero ftalatos), ASTM F963 (segurança de brinquedos dos EUA), EN71 (segurança de brinquedos da UE), marcação CE, e padrões ópticos FDA. Fornecemos documentação completa de certificação com cada pedido no atacado. Se a alfândega fizer perguntas, você terá a papelada pronta."
            />
            <FaqItem
              question="Posso personalizar com nossa marca ou personagens de desenho?"
              answer="Totalmente. Cores personalizadas (mais de 20 padrão mais correspondência Pantone), designs de personagens nas hastes, logo da sua marca, armações com glitter, hastes que brilham no escuro — o que quiser. MOQ para designs personalizados é de 300 peças por estilo. Já fizemos colaborações com personagens licenciados, designs de mascotes escolares, e até conjuntos combinando pais e filhos. Só nos envie sua ideia e faremos um mockup."
            />
            <FaqItem
              question="Os óculos de sol para bebês vêm com faixas?"
              answer="Sim — faixas de neoprene ajustáveis removíveis, ajustáveis de 14cm a 18cm. Macias na pele do bebê, seguras o suficiente para manter em um bebê inquieto. Para armações de crianças pequenas (3-5 anos), oferecemos acessórios de faixa opcionais que encaixam e desencaixam. A maioria dos pais usa a faixa até os 3-4 anos, depois muda para hastes regulares quando a criança é grande o suficiente para mantê-los no lugar."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Proteja os Olhinhos. Ganhe a Confiança dos Pais.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiques infantis, lojas de brinquedos, consultórios pediátricos, acampamentos de verão, resorts
            de praia, papelarias — nossos óculos de sol infantis vendem em todos
            os lugares onde pais compram. Documentação completa de segurança incluída. Amostras
            gratuitas disponíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Obter Catálogo da Coleção Infantil</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Óculos de Sol Infantis", "item": "https://eyeviewglasses.com/pt/produtos/infantil" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Com que idade é cedo demais para óculos de sol?",
            "acceptedAnswer": { "@type": "Answer", "text": "A Academia Americana de Oftalmologia recomenda óculos de sol com proteção UV a partir dos 6 meses de idade. Os olhos das crianças transmitem 6-7 vezes mais radiação UV que os olhos dos adultos." }
          },
          {
            "@type": "Question",
            "name": "Os óculos de sol infantis são realmente protetores ou apenas decorativos?",
            "acceptedAnswer": { "@type": "Answer", "text": "Cada par bloqueia 99,9% da radiação UV até 400nm, verificado por testes de laboratório independentes. Fornecemos relatórios de teste. Cuidado com óculos de sol de novidade baratos sem proteção UV real." }
          },
          {
            "@type": "Question",
            "name": "Esses óculos de sol vão sobreviver ao meu filho?",
            "acceptedAnswer": { "@type": "Answer", "text": "Projetados para isso. As armações de silicone para bebês são infinitamente dobráveis. As armações de TPE para crianças pequenas sobrevivem mais de 500 ciclos de flexão e quedas de 1,5m. As armações TR90 para crianças maiores dobram 90° sem quebrar." }
          },
          {
            "@type": "Question",
            "name": "Quais certificações de segurança esses óculos infantis têm?",
            "acceptedAnswer": { "@type": "Answer", "text": "CPSIA (chumbo abaixo de 100ppm, zero ftalatos), ASTM F963, EN71, marcação CE, e padrões ópticos FDA. Documentação completa de certificação fornecida com cada pedido no atacado." }
          },
          {
            "@type": "Question",
            "name": "Posso personalizar óculos de sol infantis com logos de marca ou personagens?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sim — cores personalizadas, designs de personagens, logos de marca, armações com glitter, hastes que brilham no escuro. MOQ para designs personalizados é de 300 peças por estilo." }
          },
          {
            "@type": "Question",
            "name": "Os óculos de sol para bebês vêm com faixas para a cabeça?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sim — faixas de neoprene ajustáveis removíveis (14-18cm). As armações para crianças pequenas têm faixas opcionais com clipe. A maioria dos pais usa faixas até os 3-4 anos." }
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
