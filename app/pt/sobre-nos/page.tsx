import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a EyeView | Fabricante de Óculos de Sol Desde 2006 | Fábrica OEM e ODM',
  description: 'EyeView Sunglasses é um fabricante líder de óculos de sol OEM/ODM fundado em 2006. Mais de 500 clientes de marcas em mais de 50 países. Certificados CE, FDA, ISO 9001. Preços diretos de fábrica.',
  keywords: 'fabricante de óculos de sol, fábrica de óculos, empresa de óculos OEM, fornecedor de óculos China, sobre EyeView, fabricante de óculos',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/sobre-nos',
    languages: {
      'en': 'https://eyeviewsunglasses.com/about',
      'pt': 'https://eyeviewsunglasses.com/pt/sobre-nos',
    },
  },
  openGraph: {
    title: 'Sobre a EyeView | Fabricante de Óculos de Sol Desde 2006',
    description: 'EyeView Sunglasses é um fabricante líder de óculos de sol OEM/ODM fundado em 2006. Mais de 500 clientes de marcas em mais de 50 países.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/sobre-nos',
    locale: 'pt_BR',
  },
}

export default function AboutPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EyeView Sunglasses",
          "url": "https://eyeviewsunglasses.com",
          "logo": "https://eyeviewsunglasses.com/logo.png",
          "foundingDate": "2006",
          "founder": { "@type": "Person", "name": "Jacky Chen" },
          "description": "Fabricante líder de óculos de sol OEM/ODM com mais de 500 clientes de marcas em mais de 50 países. Fábrica certificada CE, FDA, ISO 9001.",
          "address": { "@type": "PostalAddress", "addressCountry": "CN" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100, "maxValue": 200 },
          "sameAs": [],
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Chinese", "Portuguese"] }
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a EyeView Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De uma oficina de duas pessoas em 2006 a uma fábrica moderna que atende mais de 500 marcas no mundo todo.
            Aqui está quem somos e por que fazemos o que fazemos.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A EyeView começou em 2006 em uma oficina que, honestamente, não era muito maior do que
                  uma garagem para dois carros. Éramos eu — Jacky Chen — e um técnico, polindo armações
                  de acetato à mão e montando dobradiças manualmente. Nossa primeira &quot;produção&quot;
                  foi de 200 pares para uma loja de surf em Sydney. Embalei cada caixa pessoalmente.
                </p>
                <p>
                  Em 2010, já tínhamos superado a garagem e nos mudamos para nosso primeiro espaço de fábrica
                  de verdade. Adicionamos moldagem por injeção, compramos nossa primeira máquina CNC e contratamos
                  uma pequena equipe de controle de qualidade. A loja de surf em Sydney? Continuam sendo
                  clientes. Os pedidos deles são um pouco maiores agora.
                </p>
                <p>
                  Hoje, operamos uma instalação de 5.000 m² com 5 linhas de produção, mais de 150
                  funcionários e capacidade de produzir 10.000 pares por dia. Atendemos mais de
                  500 marcas em mais de 50 países — desde startups do Kickstarter que pedem 100 pares
                  até redes de varejo que pedem 50.000. A oficina ficou para trás há muito tempo, mas a
                  mentalidade não: cada par ainda é inspecionado como se fosse para aquela loja de
                  surf em Sydney.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-4">🏭</span>
                <span className="text-primary-600 font-medium">Desde 2006</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-600">
                Tornar a fabricação de óculos de sol de qualidade acessível para marcas de todos os
                tamanhos. Seja você um empreendedor solo com um esboço num guardanapo ou uma
                rede de varejo escalando para 100.000 unidades, você merece um parceiro de fabricação que trate
                sua marca como se fosse a dele. Sem orçamento mínimo exigido. Sem atitude. Apenas bom
                produto e comunicação honesta.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-gray-600">
                Ser a fábrica que a próxima geração de grandes marcas de óculos aponte e diga:
                &quot;Eles nos ajudaram a começar.&quot; Já ajudamos a lançar centenas de marcas.
                Queremos ajudar a lançar milhares mais — e manter crescendo as que já lançamos.
                Seu sucesso é nosso melhor marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">EyeView em Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">19+</div>
              <div className="text-primary-100">Anos no Mercado</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Clientes de Marcas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Países Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Pares Produzidos / Ano</div>
            </div>
          </div>
        </section>

        {/* Factory Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Capacidades da Fábrica</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa instalação foi construída para flexibilidade — produções pequenas e pedidos
              grandes, OEM e ODM, designs simples e engenharia complexa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard
              icon="⚙️"
              title="5 Linhas de Produção"
              description="Linhas dedicadas para armações de acetato, metal, TR90/injeção e materiais mistos. Cada linha otimizada para seu tipo de material."
            />
            <CapabilityCard
              icon="📦"
              title="10.000 Pares / Dia"
              description="Capacidade de produção diária em todas as linhas. Podemos escalar até 15.000/dia durante a alta temporada com turnos extras."
            />
            <CapabilityCard
              icon="📐"
              title="Instalação de 5.000 m²"
              description="Planta de produção moderna com zonas separadas para corte, montagem, polimento, controle de qualidade e embalagem. Limpa, organizada e eficiente."
            />
            <CapabilityCard
              icon="🔬"
              title="Laboratório de QC Interno"
              description="Testes de transmissão UV, testes de impacto, testes de ciclos de dobradiça e verificação dimensional — tudo feito internamente antes de qualquer envio."
            />
            <CapabilityCard
              icon="🎨"
              title="400+ Designs ODM"
              description="Catálogo de armações prontas para marca que abrange aviadores, wayfarers, olho de gato, esportivos, redondos, oversized e estilos infantis."
            />
            <CapabilityCard
              icon="🛠️"
              title="Capacidade OEM Completa"
              description="Do seu arquivo CAD ao produto acabado. Fabricação de moldes personalizados, prototipagem CNC e amostragem de pequenos lotes antes da produção em massa."
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificações e Conformidade</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada produto que enviamos atende os padrões internacionais de segurança e qualidade.
              Estes não são selos que colecionamos — são requisitos que levamos a sério.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <CertCard
              name="CE"
              description="Conformidade Europeia"
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
            />
            <CertCard
              name="FDA"
              description="Conformidade EUA"
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
            />
            <CertCard
              name="UV400"
              description="100% Proteção UV"
            />
            <CertCard
              name="ISO 9001"
              description="Gestão de Qualidade"
              link="https://www.iso.org/iso-9001-quality-management.html"
            />
            <CertCard
              name="ANSI Z80.3"
              description="Padrão Óptico EUA"
            />
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">As Pessoas Por Trás do Produto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos mais de 150 pessoas apaixonadas por fabricar excelentes óculos de sol. Aqui estão
              alguns dos rostos com quem você vai trabalhar diretamente.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamCard
              initials="JC"
              name="Jacky Chen"
              role="Fundador e CEO"
              bio="Fundou a EyeView em 2006 a partir de uma oficina na garagem. 20 anos de experiência em fabricação de óculos. Ainda inspeciona as amostras pessoalmente."
            />
            <TeamCard
              initials="LW"
              name="Lisa Wang"
              role="Diretora de Design"
              bio="Ex-designer de uma importante casa de óculos italiana. Entrou na EyeView em 2014. Lidera nossa equipe de design de 8 pessoas e gerencia todos os projetos OEM."
            />
            <TeamCard
              initials="DZ"
              name="David Zhang"
              role="Gerente de Produção"
              bio="15 anos no chão de fábrica. Supervisiona as 5 linhas de produção e mais de 80 trabalhadores de produção. Conhecido por sua obsessão com eficiência."
            />
            <TeamCard
              initials="SC"
              name="Sarah Chen"
              role="Diretora de Controle de Qualidade"
              bio="Formada em testes ópticos em um laboratório suíço. Dirige nosso departamento de QC com uma meta de taxa de defeitos de 0,5%. Nada é enviado sem a aprovação dela."
            />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Começamos com 200 pares ODM como teste. Três anos depois, pedimos 5.000 pares OEM personalizados por trimestre. A EyeView cresceu conosco — nunca nos pressionaram para pedir mais do que estávamos prontos."
              name="Rachel M."
              title="Fundadora, Coastal Shade Co."
              location="Melbourne, Austrália"
            />
            <TestimonialCard
              quote="Já tinha tido experiências ruins com duas fábricas antes de encontrar a EyeView. A diferença foi imediata — a equipe do Jacky realmente ouviu o que eu precisava em vez de simplesmente me cotar a opção mais barata. A qualidade tem sido consistente em 12 pedidos."
              name="Marcus T."
              title="CEO, Elevate Eyewear"
              location="Atlanta, EUA"
            />
            <TestimonialCard
              quote="O processo de amostragem me convenceu. Enviaram cinco pares em diferentes materiais para eu comparar lado a lado. Nenhuma outra fábrica ofereceu isso. Trabalhamos juntos há quatro anos e não tenho nenhuma reclamação."
              name="Henrik S."
              title="Comprador, Nordic Optics"
              location="Estocolmo, Suécia"
            />
            <TestimonialCard
              quote="Como uma startup sem experiência em óculos, eu esperava ser ignorado pelas fábricas de verdade. A EyeView tratou meu primeiro pedido de 100 peças com a mesma seriedade que seus clientes grandes. Essa lealdade funciona nos dois sentidos — agora somos uma das maiores contas deles."
              name="Priya K."
              title="Fundadora, Dusk & Dawn Eyewear"
              location="Toronto, Canadá"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O Que Defendemos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="Qualidade Sem Desculpas"
              description="Cada par é inspecionado. Cada lente é testada com UV. Cada dobradiça é submetida a ciclos. Não enviamos produto que não colocaríamos nosso próprio nome."
            />
            <ValueCard
              icon="🤝"
              title="Parcerias, Não Transações"
              description="80% da nossa receita vem de clientes recorrentes. Preferimos ganhar seu quinto pedido através de um ótimo serviço do que espremer seu primeiro pedido para margem máxima."
            />
            <ValueCard
              icon="💬"
              title="Comunicação Direta"
              description="Se algo vai levar 60 dias, dizemos 60 dias — não 30. Se um material não funciona para seu design, avisamos antes de você desperdiçar dinheiro em um molde. Sem surpresas."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Quer Ver o Que Podemos Fazer Pela Sua Marca?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Seja você lançando sua primeira linha ou escalando uma marca existente, adoraríamos
            conversar. Sem compromisso, sem pressão de venda — apenas uma conversa honesta sobre o que
            é possível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">
              Entre em Contato
            </Link>
            <Link href="/pt/produtos" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Ver Produtos
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function CapabilityCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function CertCard({ name, description, link }: { name: string; description: string; link?: string }) {
  const content = (
    <>
      <div className="text-2xl font-bold text-primary-600 mb-2">{name}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener" className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow block">
        {content}
      </a>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 text-center shadow">
      {content}
    </div>
  )
}

function TeamCard({ initials, name, role, bio }: { initials: string; name: string; role: string; bio: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {initials}
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-primary-600 text-sm font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, title, location }: { quote: string; name: string; title: string; location: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="text-primary-600 text-3xl mb-3">&ldquo;</div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-sm text-gray-400">{location}</div>
      </div>
    </div>
  )
}
