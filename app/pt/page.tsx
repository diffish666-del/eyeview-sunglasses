import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: {
    absolute: 'Fabricante de Óculos de Sol no Atacado | Fábrica OEM de Óculos Personalizados - EyeView',
  },
  description: 'EyeView é um fabricante líder de óculos de sol no atacado com serviços OEM e ODM. Mais de 15 anos de experiência, mais de 500 clientes globais. Solicite seu orçamento grátis hoje.',
  openGraph: {
    title: 'Fabricante de Óculos de Sol no Atacado | Fábrica OEM - EyeView',
    description: 'EyeView é um fabricante líder de óculos de sol no atacado com serviços OEM e ODM. Mais de 15 anos de experiência, mais de 500 clientes globais.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://eyeviewsunglasses.com/pt',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt',
    languages: {
      'en': 'https://eyeviewsunglasses.com',
      'pt': 'https://eyeviewsunglasses.com/pt',
    },
  },
};

const stats = [
  { number: '15+', label: 'Anos de Experiência', emoji: '🏭' },
  { number: '500+', label: 'Clientes Globais', emoji: '🌍' },
  { number: '1M+', label: 'Pares Produzidos', emoji: '🕶️' },
  { number: '100%', label: 'Qualidade Garantida', emoji: '✅' },
];

const features = [
  {
    emoji: '🎨',
    title: 'Personalização Total',
    description: 'Do design da armação e cor das lentes à gravação do logo e embalagem personalizada — realizamos sua visão de óculos de sol com capacidades completas de fabricação OEM e ODM.',
  },
  {
    emoji: '💰',
    title: 'Preços Competitivos de Fábrica',
    description: 'Como fabricante direto com nossa própria planta de produção, eliminamos os custos de intermediários. Aproveite preços no atacado a partir de $1,50 por par com descontos por volume disponíveis.',
  },
  {
    emoji: '⚡',
    title: 'Entrega Rápida',
    description: 'Nosso processo de produção otimizado entrega amostras em 5-7 dias e pedidos em massa em 15-25 dias. Pedidos urgentes disponíveis para lançamentos e coleções de temporada.',
  },
  {
    emoji: '🔒',
    title: 'Controle de Qualidade Premium',
    description: 'Cada par passa por uma rigorosa inspeção de qualidade de 6 pontos. Nossos óculos atendem padrões internacionais incluindo FDA, CE, UV400 e certificação ANSI Z80.3.',
  },
  {
    emoji: '📦',
    title: 'Pedido Mínimo Baixo',
    description: 'Comece com apenas 50 peças por modelo — perfeito para novas marcas testando o mercado, lojas boutique e campanhas promocionais. Sem compromissos de estoque massivos.',
  },
  {
    emoji: '🌍',
    title: 'Envio e Logística Global',
    description: 'Enviamos para mais de 60 países via DHL, FedEx, UPS e transporte marítimo. Entrega porta a porta com documentação alfandegária completa e rastreamento em tempo real.',
  },
];

const products = [
  { name: 'Óculos de Sol Aviador', href: '/pt/produtos/aviador/', emoji: '✈️', description: 'Aviadores clássicos com armação de metal e lentes em formato de gota. Perfeitos para coleções de moda no atacado.' },
  { name: 'Óculos de Sol Wayfarer', href: '/pt/produtos/wayfarer/', emoji: '🎸', description: 'Icônicos óculos wayfarer de acetato. O estilo mais vendido para varejo e campanhas promocionais.' },
  { name: 'Óculos de Sol Olho de Gato', href: '/pt/produtos/olho-de-gato/', emoji: '😺', description: 'Armações olho de gato em tendência projetadas para o mercado de moda feminina. Designs ousados e elegantes.' },
  { name: 'Óculos de Sol Esportivos', href: '/pt/produtos/esportivo/', emoji: '🚴', description: 'Óculos esportivos de alto desempenho com designs envolventes e lentes resistentes a impacto.' },
  { name: 'Óculos de Sol Redondos', href: '/pt/produtos/redondo/', emoji: '🔵', description: 'Armações redondas de inspiração vintage com charme retrô. Populares em marcas de moda e lifestyle.' },
  { name: 'Óculos de Sol Infantis', href: '/pt/produtos/infantil/', emoji: '👶', description: 'Óculos seguros, duráveis e coloridos projetados especificamente para crianças de 3 a 12 anos.' },
  { name: 'Óculos de Sol Polarizados', href: '/pt/produtos/polarizado/', emoji: '🌊', description: 'Lentes polarizadas premium que eliminam o reflexo. Essenciais para esportes ao ar livre e aquáticos.' },
  { name: 'Óculos com Filtro de Luz Azul', href: '/pt/produtos/luz-azul/', emoji: '💻', description: 'Óculos de proteção digital que filtram a luz azul prejudicial de telas e dispositivos.' },
  { name: 'Óculos de Sol Ecológicos', href: '/pt/produtos/ecologico/', emoji: '🌱', description: 'Óculos sustentáveis de plástico oceânico reciclado, bambu e materiais bio-acetato.' },
  { name: 'Óculos de Sol de Acetato', href: '/pt/produtos/acetato/', emoji: '🎨', description: 'Armações de acetato artesanais em padrões premium. Acetato italiano Mazzucchelli disponível.' },
  { name: 'Óculos de Sol TR90', href: '/pt/produtos/tr90/', emoji: '🏋️', description: 'Armações ultraleves de nylon TR90 com flexibilidade de memória para esportes e uso diário.' },
];

const steps = [
  { step: '01', title: 'Consulta Inicial', description: 'Compartilhe seus requisitos — estilo, quantidade, necessidades de personalização e orçamento. Nossa equipe oferece orientação especializada para ajudá-lo a escolher os produtos certos para seu mercado.' },
  { step: '02', title: 'Design e Amostragem', description: 'Criamos designs detalhados com base nas suas especificações. Receba amostras físicas em 5-7 dias úteis para sua revisão e aprovação antes da produção em massa.' },
  { step: '03', title: 'Aprovação e Produção', description: 'Uma vez que você aprove as amostras, iniciamos a produção em grande escala. Nossa capacidade lida com pedidos de 50 a 100.000+ peças com controle de qualidade constante.' },
  { step: '04', title: 'Inspeção de Qualidade', description: 'Cada lote passa por uma inspeção de qualidade abrangente de 6 pontos incluindo testes de proteção UV, durabilidade de dobradiças, clareza de lentes e alinhamento de armações.' },
  { step: '05', title: 'Envio e Entrega', description: 'Cuidamos de toda a embalagem, etiquetagem e logística. Escolha entre frete aéreo expresso (5-7 dias) ou envio marítimo econômico (20-30 dias) com rastreamento completo e suporte alfandegário.' },
];

const faqs = [
  {
    question: 'Qual é o pedido mínimo (MOQ) para óculos de sol no atacado?',
    answer: 'Nosso MOQ padrão é de 50 peças por modelo e combinação de cor. Para novos clientes que queiram testar o mercado, oferecemos pacotes iniciais flexíveis. Para pedidos OEM personalizados com gravação de logo ou designs exclusivos, o MOQ pode começar em 100-300 peças dependendo da complexidade. Entre em contato para requisitos específicos.',
  },
  {
    question: 'Quanto tempo leva para produzir um pedido de óculos de sol no atacado?',
    answer: 'Os tempos de produção variam conforme o tamanho do pedido e nível de personalização. Pedidos padrão (designs existentes) normalmente são enviados em 15-20 dias úteis. Pedidos OEM personalizados com novos designs requerem 20-30 dias úteis incluindo amostragem. Produção urgente está disponível por um custo adicional, reduzindo o prazo para 10-15 dias.',
  },
  {
    question: 'Vocês oferecem serviços de fabricação OEM e ODM de óculos de sol?',
    answer: 'Sim, fornecemos tanto serviços OEM (Fabricação de Equipamento Original) quanto ODM (Fabricação de Design Original). Com OEM, você fornece o design e nós fabricamos. Com ODM, nossa equipe de design cria estilos exclusivos baseados na direção da sua marca. Ambas as opções incluem colocação personalizada de logo, embalagem e etiquetagem.',
  },
  {
    question: 'Quais certificações de qualidade seus óculos de sol atendem?',
    answer: 'Todos os nossos óculos atendem ou superam os padrões internacionais de qualidade incluindo proteção UV400 (bloqueando 99,9% dos raios UVA e UVB), certificação CE para mercados europeus, conformidade FDA para Estados Unidos, e padrões ANSI Z80.3. Também oferecemos certificação EN ISO 12312-1 sob solicitação.',
  },
  {
    question: 'Vocês podem personalizar óculos de sol com nosso logo e embalagem de marca?',
    answer: 'Com certeza. Oferecemos serviços completos de branding incluindo gravação a laser de logo em armações e lentes, estojos impressos ou gravados personalizados, panos de microfibra de marca, etiquetas penduradas, etiquetas com código de barras e embalagem pronta para varejo. Nossa equipe de design pode ajudar a criar uma embalagem que eleve a identidade da sua marca.',
  },
  {
    question: 'Quais tipos de lentes estão disponíveis para pedidos no atacado?',
    answer: 'Oferecemos uma ampla gama de opções de lentes incluindo lentes padrão UV400, lentes polarizadas (TAC e vidro), lentes fotocromáticas (transição), lentes de filtro de luz azul, lentes espelhadas, lentes degradê e armações prontas para prescrição. Cada tipo de lente está disponível em múltiplas cores e revestimentos.',
  },
  {
    question: 'Vocês fazem envios internacionais? Quais são as opções de envio?',
    answer: 'Sim, enviamos para mais de 60 países em todo o mundo. As opções de envio incluem DHL Express (3-5 dias úteis), FedEx (3-7 dias úteis), UPS (5-8 dias úteis) e frete marítimo (20-35 dias para pedidos grandes). Cuidamos de toda a documentação de exportação e podemos enviar DDP (Entregue com Direitos Pagos) ou FOB conforme sua preferência.',
  },
  {
    question: 'Como começo com um pedido de óculos de sol no atacado?',
    answer: 'Começar é simples: 1) Entre em contato por email em jacky@eyeviewsunglasses.com ou WhatsApp no +86-18850281211 com seus requisitos. 2) Nossa equipe fornecerá um orçamento detalhado em 24 horas. 3) Revise e aprove as amostras. 4) Faça seu pedido e nós cuidamos do resto. Recebemos tanto compradores de primeira viagem quanto marcas estabelecidas.',
  },
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como Pedir Óculos de Sol no Atacado na EyeView',
  description: 'Nosso simples processo de 5 passos torna fácil pedir óculos de sol personalizados no atacado, da consulta inicial à entrega.',
  totalTime: 'P25D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '1.50',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Consulta Inicial',
      text: 'Compartilhe seus requisitos — estilo, quantidade, necessidades de personalização e orçamento. Nossa equipe oferece orientação especializada.',
      url: 'https://eyeviewsunglasses.com/pt/contato/',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design e Amostragem',
      text: 'Criamos designs detalhados com base nas suas especificações. Receba amostras físicas em 5-7 dias úteis.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Aprovação e Produção',
      text: 'Uma vez que você aprove as amostras, iniciamos a produção em grande escala com controle de qualidade constante.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Inspeção de Qualidade',
      text: 'Cada lote passa por uma inspeção de qualidade de 6 pontos incluindo testes UV, durabilidade de dobradiças e clareza de lentes.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Envio e Entrega',
      text: 'Cuidamos da embalagem, etiquetagem e logística. Frete aéreo expresso (5-7 dias) ou envio marítimo (20-30 dias) com rastreamento completo.',
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://eyeviewsunglasses.com/pt' },
  ],
};

export default function HomePagePt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Seu <span className="text-yellow-300">Fabricante de Óculos de Sol no Atacado</span> e Fábrica OEM de Confiança
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              EyeView Sunglasses é um fabricante líder de óculos de sol no atacado com mais de 15 anos de experiência em produção OEM e ODM. Ajudamos marcas, varejistas e distribuidores de todo o mundo a obter óculos de sol personalizados premium a preços competitivos diretos de fábrica. De aviadores clássicos a armações olho de gato em tendência, fabricamos cada estilo com precisão e qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pt/contato/" className="inline-block bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                🕶️ Solicitar Orçamento Grátis
              </Link>
              <Link href="/pt/produtos/" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
                Ver Produtos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 px-4 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl mb-2 block">{stat.emoji}</span>
                <div className="text-3xl md:text-4xl font-bold text-primary-700">{stat.number}</div>
                <div className="text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a EyeView como Seu Fabricante de Óculos?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Como fábrica de óculos de sol estabelecida, combinamos experiência em fabricação, materiais de qualidade e preços competitivos para entregar um valor excepcional à sua marca.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{feature.emoji}</span>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Linha de Óculos de Sol no Atacado</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore nossa extensa coleção de estilos de óculos de sol no atacado. Cada categoria é totalmente personalizável com sua marca, opções de lentes e modificações de armação.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border group"
              >
                <span className="text-5xl mb-4 block text-center">{product.emoji}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <span className="inline-block mt-4 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Ver Mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Pedir Óculos de Sol no Atacado</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nosso simples processo de 5 passos torna fácil pedir óculos personalizados no atacado, da consulta inicial à entrega na sua porta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Perguntas Frequentes sobre Óculos de Sol no Atacado" />

      {/* CTA */}
      <CTASection
        title="Pronto para Iniciar Sua Marca de Óculos de Sol?"
        description="Receba seu orçamento grátis hoje. Sem mínimo de consulta. Amostras disponíveis em 5 dias. Respondemos em 24 horas."
        primaryText="Orçamento Grátis"
        primaryHref="/pt/contato"
        secondaryText="Ver Produtos"
        secondaryHref="/pt/produtos"
      />
    </>
  );
}
