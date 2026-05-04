import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Óculos com Filtro de Luz Azul no Atacado | Fabricante de Óculos para Computador - EyeView',
  description: 'Fabricante de óculos com filtro de luz azul no atacado. Óculos para computador, óculos gamer para alívio de fadiga visual digital. Opções de lentes transparentes e âmbar. MOQ 100 pçs. OEM/ODM direto de fábrica.',
  keywords: 'óculos luz azul no atacado, fabricante óculos para computador, óculos gamer no atacado, óculos filtro luz azul, óculos proteção de tela, óculos anti luz azul a granel, óculos fadiga visual digital',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/produtos/luz-azul/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/blue-light/',
      'pt': 'https://eyeviewsunglasses.com/pt/produtos/luz-azul/',
    },
  },
}

const products = [
  {
    name: 'Bloqueador de Luz Azul Clássico',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$6.00 - $10.00',
    moq: '100 pçs',
    description: 'Visual limpo e profissional com lentes transparentes que filtram a luz azul sem nenhum tom visível. Seus clientes podem usar em reuniões, em chamadas de Zoom, ou na mesa o dia inteiro sem parecer que estão usando óculos "especiais." Este é nosso modelo de luz azul mais vendido — supera tudo mais nesta categoria numa proporção de 3 para 1 porque parece óculos normais.',
  },
  {
    name: 'Óculos de Luz Azul Gamer',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$7.00 - $11.00',
    moq: '100 pçs',
    description: 'Feitos para o público gamer. As lentes com tom âmbar bloqueiam mais luz azul que as versões transparentes (60-90% vs 30-40%), e os gamers na verdade preferem o tom quente — melhora o contraste em ambientes de jogo escuros e reduz a intensidade de flashes brilhantes. Armação leve com almofadas nasais de borracha para aquelas sessões de 6 horas de Valorant. Um time de esports na Coreia encomendou 200 pares como equipamento da equipe.',
  },
  {
    name: 'Bloqueador de Luz Azul Lente Transparente',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$6.50 - $10.50',
    moq: '100 pçs',
    description: 'A opção discreta. Essas lentes têm um revestimento sutil de luz azul que é quase invisível — apenas um leve reflexo quando a luz incide no ângulo certo. Sem tom amarelado algum. Projetadas para pessoas que querem proteção mas não querem que ninguém saiba que estão usando óculos de luz azul. Populares entre profissionais, advogados, executivos — o público de "eu não uso óculos da moda."',
  },
  {
    name: 'Aviador com Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pçs',
    description: 'Quem disse que óculos para computador têm que ser sem graça? Esta armação aviador com lentes de luz azul traz estilo para a proteção de tela. A armação metálica fica elegante, as lentes transparentes filtram a luz azul, e o efeito geral é "piloto estiloso que também se preocupa com saúde visual." Ideal para clientes que já têm óculos de sol aviador e querem um par de ambientes internos combinando.',
  },
  {
    name: 'Wayfarer com Filtro de Luz Azul',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.50',
    moq: '100 pçs',
    description: 'A forma wayfarer em versão luz azul. Armação de acetato, visual profissional, proteção de tela genuína. Esta é a armação que recomendamos para programas de brindes corporativos — empresas compram de 50 a 500 pares com seu logo na haste para pacotes de bem-estar dos funcionários. Uma empresa de tecnologia em Bangalore encomendou 1.200 pares para toda a equipe de engenharia.',
  },
  {
    name: 'Óculos de Luz Azul Infantis',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$5.50 - $9.00',
    moq: '100 pçs',
    description: 'Crianças passam horas em tablets, celulares e notebooks — para escola, para jogos, para YouTube. Os pais se preocupam com isso. Esses óculos dão uma solução. Armações flexíveis dimensionadas para idades 5-12, materiais livres de BPA, e lentes com filtro de luz azul. Escolas em três países adotaram esses para seus programas de laboratório de informática. A tranquilidade de um pai preocupado, a partir de $5,50.',
  },
]

export default function BlueLightPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/pt" className="hover:text-primary-600">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/pt/produtos" className="hover:text-primary-600">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Óculos de Luz Azul</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Óculos com Filtro de Luz Azul no Atacado
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sete horas. É quanto tempo o adulto médio olha para uma tela por dia. Olhos secos,
            dores de cabeça, dificuldade para dormir — parece familiar? Óculos de luz azul são
            a categoria de maior crescimento em óculos, e os fabricamos para marcas em mais de
            40 países. Lentes transparentes, lentes âmbar, armações fashion, tamanhos infantis. MOQ 100 peças.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Óculos com Filtro de Luz Azul no Atacado - Coleção de Óculos para Computador"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* What Blue Light Does */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">O Que a Luz Azul Realmente Faz com Seus Olhos?</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              A luz azul está em toda parte. O sol a produz. Seu celular a produz. Seu
              notebook, sua TV, seus fluorescentes do escritório — todos bombardeiam seus olhos
              com luz azul o dia todo. E o problema é: nossos olhos não são bons em
              bloqueá-la. A luz azul (comprimentos de onda entre 380-500nm) passa direto
              pela córnea e cristalino para atingir a retina diretamente.
            </p>
            <p>
              A <a href="https://www.aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">Academia Americana de Oftalmologia</a> aponta
              que a fadiga visual digital afeta aproximadamente 65% dos adultos que usam
              telas regularmente. Os sintomas incluem olhos secos, visão embaçada, dores de
              cabeça e dor no pescoço/ombros. Mas o problema do sono pode ser o mais grave —
              a luz azul suprime a produção de melatonina, o hormônio que diz ao seu cérebro
              &quot;hora de dormir.&quot; Mexer no celular às 23h e seu cérebro acha que é
              meio-dia. Não é de se espantar que as pessoas não consigam dormir.
            </p>
            <p>
              É por isso que óculos de luz azul explodiram. Não são um dispositivo médico e não fazemos
              declarações médicas — mas milhões de pessoas relatam menos fadiga visual, menos
              dores de cabeça e melhor sono ao usá-los durante o tempo de tela. Projeta-se
              que o mercado atinja $4,5 bilhões globalmente até 2026, segundo pesquisas
              do setor. A <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA</a> regula
              óculos de sol e óculos como dispositivos médicos, e todos os nossos óculos de luz azul
              atendem seus padrões. Para compradores no atacado, esta é uma das categorias de
              maior crescimento em óculos neste momento.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Óculos com Filtro de Luz Azul no Atacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Coleção de Luz Azul</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Tecnologia de filtragem de luz azul</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Revestimento antirreflexo</li>
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

        {/* Lens Options */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transparente vs. Âmbar — Qual Lente Ter em Estoque?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔍 Lentes Transparentes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sem tom visível. A proteção está no revestimento, não na cor. São
                perfeitas para pessoas que precisam ver cores precisas — designers, fotógrafos,
                editores de vídeo — e qualquer um que não queira explicar por que seus óculos parecem
                amarelados. Bloqueiam 30-40% da luz azul na faixa de 415-455nm (os comprimentos
                de onda mais prejudiciais). Isso é o que vende em ambientes de escritório e profissionais.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Proteção invisível — sem tom</li>
                <li>• Precisão real de cor mantida</li>
                <li>• Bloqueia 30-40% de luz azul prejudicial</li>
                <li>• Melhor para: escritório, design, uso profissional</li>
                <li>• 70% dos nossos pedidos de luz azul são transparentes</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🟡 Lentes Âmbar / Amarelas</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tom quente visível. Bloqueiam significativamente mais luz azul — 60-90% dependendo
                da profundidade do tom. A cor âmbar filtra as frequências azuis intensas e
                cria uma experiência visual mais quente e confortável. Os gamers adoram. Pessoas
                que usam telas à noite adoram. O contraste aprimorado é uma
                vantagem genuína para gaming e leitura em condições de pouca luz.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tom âmbar visível — tonalidade quente</li>
                <li>• Bloqueia 60-90% de luz azul</li>
                <li>• Contraste aprimorado para gaming</li>
                <li>• Melhor para: gaming, uso noturno, leitura</li>
                <li>• Crescimento rápido — especialmente no mercado gamer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blue Light Technology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Como Funciona o Bloqueio de Luz Azul</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🔬 Método de Revestimento (Lentes Transparentes)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Um revestimento antirreflexo multicamadas é aplicado à superfície da lente. Uma
                  dessas camadas é especificamente ajustada para refletir os comprimentos de onda de
                  luz azul (415-455nm) para longe do olho. Você pode ver funcionando — incline a lente e
                  notará um leve reflexo azul-roxo. Essa é a luz azul ricocheteando em vez de
                  atravessar.
                </p>
                <p className="text-sm text-gray-500">Melhor para: uso profissional, trabalho com cor precisa</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🧪 Método de Substrato (Lentes Âmbar)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  O material bloqueador de azul é misturado diretamente na resina da lente durante
                  a fabricação. Isso cria uma lente que absorve luz azul em toda a sua espessura — não
                  apenas na superfície. O resultado é uma filtragem de luz azul mais forte e um tom
                  âmbar visível. Como a filtragem está no material da lente em si, não pode
                  desgastar nem ser arranhada.
                </p>
                <p className="text-sm text-gray-500">Melhor para: gaming, tempo de tela noturno, filtragem máxima</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Os Números Não Mentem</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="$4,5B" label="Mercado global até 2026" />
            <StatCard number="12%" label="Taxa de crescimento anual" />
            <StatCard number="7h+" label="Tempo de tela diário médio" />
            <StatCard number="65%" label="Adultos relatam fadiga visual" />
          </div>
          <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
            Óculos de luz azul não são modismo — o tempo de tela só vai aumentar.
            Trabalho remoto, ensino online, gaming mobile, streaming... o mercado continua crescendo
            porque o problema continua crescendo.
          </p>
        </section>

        {/* Who Buys These */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Quem Compra Óculos de Luz Azul?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TargetCard icon="👨‍💼" title="Trabalhadores de Escritório" desc="O maior segmento. 8 horas de tempo de tela por dia, todos os dias." />
            <TargetCard icon="🎮" title="Gamers" desc="Sessões maratona de gaming. Lentes âmbar são praticamente equipamento padrão agora." />
            <TargetCard icon="📱" title="Estudantes" desc="Aulas online, lição de casa no notebook, depois tempo de celular. Telas sem parar." />
            <TargetCard icon="👶" title="Crianças" desc="Tablets para escola, YouTube depois da escola. Pais querem proteção." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <TargetCard icon="🏢" title="Brindes Corporativos" desc="Empresas compram 50-1000 pares para programas de bem-estar dos funcionários." />
            <TargetCard icon="🎓" title="Escolas" desc="Laboratórios de informática adotando óculos de luz azul para alunos." />
            <TargetCard icon="💻" title="Trabalhadores Remotos" desc="Essenciais para o home office. Grande crescimento pós-2020." />
            <TargetCard icon="📖" title="Leitores" desc="Usuários de e-readers e tablets que leem por horas à noite." />
          </div>
        </section>

        {/* Prescription Option */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Opção Pronta para Prescrição</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Aqui está uma grande oportunidade que a maioria dos compradores no atacado perde:
              óculos de luz azul com prescrição. Aproximadamente 75% dos adultos precisam de alguma
              forma de correção visual. Isso significa que 75% dos clientes potenciais de luz
              azul também precisam de lentes com prescrição. Fabricamos todas as nossas armações de
              luz azul prontas para Rx — enviamos com lentes de demonstração para que as óticas
              possam instalar prescrições personalizadas. Monofocal, bifocal, progressivo — todos
              compatíveis.
            </p>
            <p>
              A margem em óculos de luz azul com prescrição é ainda melhor que os sem grau. Uma ótica pode cobrar $80-150 por um par de óculos de luz azul com
              prescrição que custa $8-12 no atacado pela armação. Adicione uma lente com
              prescrição de $15-25 do laboratório, e estão olhando para margens de 3-5x. É uma
              excelente venda adicional para qualquer ótica que já tenha nossas armações.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Produtos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pt/produtos/redondo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Redondos com Luz Azul</h3>
              <p className="text-sm text-gray-600">Armações redondas vintage com lentes de luz azul</p>
            </Link>
            <Link href="/pt/produtos/infantil" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Óculos Infantis</h3>
              <p className="text-sm text-gray-600">Coleção completa de óculos infantis com proteção UV</p>
            </Link>
            <Link href="/pt/produtos/olho-de-gato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Olho de Gato com Luz Azul</h3>
              <p className="text-sm text-gray-600">Armações olho de gato fashion com proteção de tela</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas sobre Luz Azul — Sem Jargão</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Óculos de luz azul realmente funcionam?"
              answer="Aqui vai a resposta honesta: a ciência ainda debate se a luz azul em si causa dano ocular a longo prazo. O que ESTÁ bem documentado é que o uso prolongado de telas causa fadiga visual digital — olhos secos, dores de cabeça, visão embaçada. Muitos usuários relatam alívio genuíno ao usar óculos de luz azul. O benefício para o sono tem evidências mais fortes — a luz azul suprime a melatonina, e filtrá-la à noite pode ajudá-lo a pegar no sono mais rápido. Não fazemos declarações médicas. Deixamos os clientes experimentar e decidir por si mesmos. A taxa de recompra fala por si."
            />
            <FaqItem
              question="Lentes transparentes ou âmbar — o que devo ter em estoque?"
              answer="Ambas, idealmente. Mas se só puder escolher uma, vá de transparentes. As lentes transparentes representam aproximadamente 70% dos nossos pedidos de luz azul porque parecem óculos normais e não alteram as cores. As lentes âmbar são as favoritas dos gamers (filtragem mais forte, contraste aprimorado) e vendem bem em lojas de gaming e para usuários de tela noturnos. Dica profissional: tenha transparentes para varejo geral, âmbar para públicos gamer/tech."
            />
            <FaqItem
              question="Quanta luz azul eles realmente bloqueiam?"
              answer="As lentes transparentes bloqueiam 30-40% da luz azul na faixa de 415-455nm (os comprimentos de onda potencialmente mais prejudiciais). As lentes âmbar bloqueiam 60-90% dependendo da profundidade do tom. Fornecemos relatórios de transmissão espectral com pedidos em grandes quantidades para que você possa mostrar aos clientes exatamente o que estão recebendo. Sem declarações vagas de 'bloqueia luz azul' — números reais, dados de teste reais."
            />
            <FaqItem
              question="Podem ser combinados com lentes de prescrição?"
              answer="Com certeza — e você deveria! Aproximadamente 75% dos adultos precisam de correção visual, então armações de luz azul prontas para Rx são um mercado enorme. Todas as nossas armações são enviadas com lentes de demonstração que as óticas podem substituir por lentes de luz azul com prescrição. Funciona com monofocal, bifocal e progressivo. A margem em óculos de luz azul com prescrição é excepcional — $80-150 no varejo em uma armação de $10 no atacado."
            />
            <FaqItem
              question="Qual a melhor forma de vender óculos de luz azul?"
              answer="A demonstração matadora: coloque um par no seu cliente e peça para olhar o celular por 30 segundos. Depois tire. A maioria das pessoas nota a diferença imediatamente — a tela parece mais dura sem eles. Esse momento de 'ahá' fecha a venda. Para lojas online, foque no problema (dores de cabeça, olhos secos, sono ruim) e na solução. Programas de brindes corporativos também são enormes — empresas compram centenas de pares para bem-estar dos funcionários. Podemos personalizar com logos de empresas."
            />
            <FaqItem
              question="Qual o MOQ e prazo de entrega?"
              answer="100 peças por estilo e cor. Itens em estoque enviam em 3-5 dias. Pedidos personalizados com seu logo e branding levam 15-25 dias. Também fazemos embalagem de brinde corporativo — caixas personalizadas com o nome da sua empresa, panos de microfibra com marca, o pacote completo. Uma startup de tecnologia encomendou 500 pares em embalagem personalizada como presentes de boas-vindas para novos funcionários. Custou aproximadamente $9 por par tudo incluso. Valor de varejo do presente percebido? $30-40 fácil."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">O Mercado que Continua Crescendo</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            O tempo de tela não vai diminuir. O trabalho remoto não vai embora. O gaming só
            fica maior. Óculos de luz azul são uma das apostas mais seguras em óculos
            neste momento. Peça amostras, teste você mesmo, e veja por que essa categoria
            converte tão bem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">Obter Catálogo de Luz Azul</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Óculos de Luz Azul", "item": "https://eyeviewglasses.com/pt/produtos/luz-azul" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Óculos de luz azul realmente funcionam?",
            "acceptedAnswer": { "@type": "Answer", "text": "A ciência sobre dano a longo prazo pela luz azul ainda é debatida, mas o alívio da fadiga visual digital é bem documentado. Muitos usuários relatam menos fadiga ocular, menos dores de cabeça e melhor sono. O benefício para o sono tem evidências mais fortes — a luz azul suprime a produção de melatonina." }
          },
          {
            "@type": "Question",
            "name": "Lentes transparentes ou âmbar — o que devo ter em estoque?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ambas idealmente, mas as lentes transparentes representam 70% dos pedidos. Parecem óculos normais e não alteram as cores. As lentes âmbar são populares entre gamers pela filtragem mais forte e contraste aprimorado." }
          },
          {
            "@type": "Question",
            "name": "Quanta luz azul esses óculos bloqueiam?",
            "acceptedAnswer": { "@type": "Answer", "text": "As lentes transparentes bloqueiam 30-40% da luz azul na faixa de 415-455nm. As lentes âmbar bloqueiam 60-90% dependendo da profundidade do tom. Fornecemos relatórios de transmissão espectral com pedidos em grandes quantidades." }
          },
          {
            "@type": "Question",
            "name": "Óculos de luz azul podem ser combinados com lentes de prescrição?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sim — todas as armações são enviadas prontas para Rx com lentes de demonstração. Aproximadamente 75% dos adultos precisam de correção visual, tornando óculos de luz azul com prescrição um mercado enorme com margens excepcionais." }
          },
          {
            "@type": "Question",
            "name": "Qual a melhor forma de vender óculos de luz azul?",
            "acceptedAnswer": { "@type": "Answer", "text": "A demonstração matadora: peça aos clientes para olhar o celular com os óculos, depois sem. A diferença é notada imediatamente. Para lojas online, foque no problema (dores de cabeça, olhos secos, sono ruim). Programas de brindes corporativos também são um canal enorme." }
          },
          {
            "@type": "Question",
            "name": "Qual o MOQ e prazo de entrega?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 peças por estilo. Itens em estoque enviam em 3-5 dias. Pedidos personalizados com logo e branding levam 15-25 dias. Embalagem de brinde corporativo disponível." }
          }
        ]
      })}} />
    </main>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function TargetCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
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
