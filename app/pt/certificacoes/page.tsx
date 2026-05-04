import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificações e Conformidade de Óculos de Sol | FDA, CE, ISO 9001, UV400 - EyeView',
  description: 'Os óculos de sol EyeView atendem todos os padrões internacionais de segurança. Registrados na FDA, certificados CE, ISO 9001, UV400, conformidade ANSI Z80.3. Documentação completa disponível.',
  keywords: 'certificações óculos de sol, conformidade FDA óculos, certificação CE óculos, UV400, ISO 9001 óculos, ANSI Z80.3, CPSIA óculos infantis',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/certificacoes',
    languages: {
      'en': 'https://eyeviewsunglasses.com/certifications',
      'pt': 'https://eyeviewsunglasses.com/pt/certificacoes',
    },
  },
  openGraph: {
    title: 'Certificações e Conformidade de Óculos de Sol | FDA, CE, ISO 9001, UV400 - EyeView',
    description: 'Os óculos de sol EyeView atendem todos os padrões internacionais de segurança. Registrados na FDA, certificados CE, ISO 9001, UV400.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/pt/certificacoes',
    locale: 'pt_BR',
  },
}

export default function CertificationsPagePt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": "https://eyeviewsunglasses.com/pt"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Certificações",
              "item": "https://eyeviewsunglasses.com/pt/certificacoes"
            }
          ]
        })}} />

        {/* FAQPage Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Seus óculos de sol atendem os requisitos da FDA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Todos os óculos de sol EyeView estão em conformidade com a FDA 21 CFR 801.410, que regula óculos de sol como dispositivos médicos de venda livre. Cada par passa por testes de transmissão UV e resistência ao impacto conforme os requisitos da FDA. Fornecemos documentação completa de conformidade FDA com cada envio para os Estados Unidos."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês podem fornecer certificados CE para importação na UE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Com certeza. Fornecemos certificados CE em conformidade com EN ISO 12312-1:2013 para todos os óculos de sol enviados à União Europeia. Cada envio inclui uma Declaração de Conformidade, relatórios de testes de laboratórios credenciados e marcação CE no produto. Enviamos óculos de sol com certificação CE para mercados da UE desde 2008."
              }
            },
            {
              "@type": "Question",
              "name": "Qual nível de proteção UV suas lentes fornecem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Todas as lentes EyeView fornecem proteção UV400, que bloqueia 99,9-100% da radiação UVA e UVB até 400 nanômetros. Esta é a classificação de proteção UV mais alta disponível para óculos de sol. Cada lote de lentes é testado com um espectrofotômetro para verificar os níveis de transmissão UV antes que a produção continue."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês oferecem relatórios de testes de terceiros?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Fornecemos relatórios de testes de terceiros de laboratórios credenciados incluindo SGS, Intertek e Bureau Veritas. Os relatórios cobrem transmissão UV, resistência ao impacto, potência óptica e segurança de materiais. Esses relatórios são incluídos em cada envio sem custo adicional."
              }
            },
            {
              "@type": "Question",
              "name": "Seus óculos infantis estão em conformidade com CPSIA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Todos os óculos de sol infantis EyeView estão em conformidade com os requisitos CPSIA (Lei de Melhoria da Segurança de Produtos de Consumo), incluindo limites de teor de chumbo, restrições de ftalatos e testes obrigatórios de terceiros por laboratórios aceitos pelo CPSC. Fornecemos Certificados de Produto Infantil (CPC) para cada pedido de óculos infantis."
              }
            },
            {
              "@type": "Question",
              "name": "Posso usar seus certificados no marketing da minha própria marca?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Quando fabricamos óculos de sol sob sua marca (OEM/ODM), todos os certificados e relatórios de testes são emitidos para o nome da sua marca e as especificações do seu produto. Você pode usar esses certificados em seus materiais de marketing, embalagem de varejo e documentação de conformidade. Nós cuidamos de toda a papelada — você só precisa nos informar os detalhes da sua marca."
              }
            }
          ]
        })}} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Certificações e Conformidade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprendi da maneira difícil por que a conformidade importa. Há alguns anos, um dos nossos clientes
            teve um envio de 8.000 pares confiscado na alfândega de Hamburgo — não porque os óculos fossem
            ruins, mas porque o fornecedor anterior não tinha fornecido a documentação CE adequada.
            Oito mil pares, parados em um armazém, invendáveis. Esse cliente veio até nós, e garantimos
            que isso nunca acontecesse de novo. Cada par que enviamos sai da nossa{' '}
            <Link href="/pt/sobre-nos" className="text-primary-600 hover:underline">fábrica</Link> com
            a documentação certa, os testes certos e as certificações certas. Sem exceções.
          </p>
        </div>

        {/* Certification Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificações Internacionais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estes não são apenas logos em um site. Cada certificação representa testes reais,
              auditorias reais e trabalho de conformidade real que fazemos para cada pedido.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              icon="🇺🇸"
              name="Registrado na FDA"
              standard="21 CFR 801.410"
              description="A FDA classifica óculos de sol como dispositivos médicos de venda livre nos EUA. Nossa instalação é registrada na FDA, e cada par que enviamos para os Estados Unidos atende os requisitos de resistência ao impacto e proteção UV sob 21 CFR 801.410. Nós cuidamos da conformidade para que seu desembaraço aduaneiro seja tranquilo."
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
              linkText="Ver Requisitos FDA para Óculos de Sol →"
            />
            <CertificationCard
              icon="🇪🇺"
              name="Certificado CE"
              standard="EN ISO 12312-1:2013"
              description="Se você vende na Europa, a marcação CE não é opcional — é lei. Nossos óculos de sol estão em conformidade com EN ISO 12312-1:2013, cobrindo proteção UV, qualidade óptica, resistência mecânica e rotulagem. Cada envio para a UE inclui uma Declaração de Conformidade. Sem mais surpresas tipo Hamburgo."
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
              linkText="Saiba Mais Sobre a Marcação CE →"
            />
            <CertificationCard
              icon="🏭"
              name="ISO 9001:2015"
              standard="Sistema de Gestão de Qualidade"
              description="Todo nosso processo de fabricação — da inspeção de matérias-primas à embalagem final — opera sob um sistema de gestão de qualidade certificado ISO 9001:2015. Isso significa procedimentos documentados, auditorias internas regulares e melhoria contínua. Não é empolgante, mas é a razão pela qual nossa taxa de defeitos se mantém abaixo de 0,5%."
              link="https://www.iso.org/iso-9001-quality-management.html"
              linkText="Sobre ISO 9001 →"
            />
            <CertificationCard
              icon="☀️"
              name="Proteção UV400"
              standard="100% Bloqueio UVA/UVB"
              description={<>
                UV400 significa que nossas lentes bloqueiam todos os raios de luz com comprimentos de onda
                de até 400 nanômetros — isso cobre 100% da radiação UVA (315–400nm) e UVB (280–315nm).
                Testamos cada lote de lentes com um espectrofotômetro antes que a produção continue.
                Se um lote não atinge UV400, é rejeitado. Ponto final. Saiba mais sobre como testamos em nosso{' '}
                <Link href="/pt/produtos/polarizado" className="text-primary-600 hover:underline">guia de lentes</Link>.
              </>}
            />
            <CertificationCard
              icon="🔬"
              name="ANSI Z80.3"
              standard="Padrão Óptico dos EUA"
              description={<>
                ANSI Z80.3 é o Padrão Nacional Americano para óculos de sol sem prescrição. Cobre
                qualidade óptica, transmitância UV, resistência ao impacto e inflamabilidade. Embora não seja
                legalmente exigido como o registro FDA, os principais varejistas dos EUA esperam isso — e
                nós entregamos. Nossas{' '}
                <Link href="/pt/produtos/polarizado" className="text-primary-600 hover:underline">lentes polarizadas</Link> são
                testadas conforme as especificações ANSI Z80.3 para clareza óptica e eficiência de polarização.
              </>}
              link="https://www.ansi.org/"
              linkText="Visitar ANSI →"
            />
            <CertificationCard
              icon="👶"
              name="Conformidade CPSIA"
              standard="Segurança de Produtos Infantis"
              description={<>
                Nossos{' '}
                <Link href="/pt/produtos/infantil" className="text-primary-600 hover:underline">óculos de sol infantis</Link> atendem
                os requisitos CPSIA para produtos infantis, incluindo limites de teor de chumbo
                (abaixo de 100 ppm), restrições de ftalatos e testes obrigatórios de terceiros por laboratórios
                aceitos pelo CPSC. Cada pedido infantil é enviado com um Certificado de Produto Infantil (CPC).
                Porque quando se trata da segurança das crianças, não há margem para atalhos.
              </>}
              link="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/CPSIA"
              linkText="Guia Empresarial CPSIA →"
            />
          </div>
        </section>

        {/* Testing Process */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Inspeção de QC de 6 Pontos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada par de óculos de sol passa pelo nosso processo de controle de qualidade de 6 pontos antes
              de sair da fábrica. É assim que mantemos uma taxa de defeitos abaixo de 0,5%
              em milhões de pares produzidos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InspectionCard
              step={1}
              title="Teste de Transmissão UV"
              description="Cada lote de lentes é testado com um espectrofotômetro para verificar os níveis de proteção UV400. Medimos a transmitância em todo o espectro UV (280–400nm). Qualquer lote que não bloqueie 99,9%+ da radiação UV é rejeitado — sem retrabalho, sem exceções."
            />
            <InspectionCard
              step={2}
              title="Teste de Resistência ao Impacto"
              description="As lentes são submetidas ao teste de impacto de bola cadente conforme os padrões FDA 21 CFR 801.410. Uma bola de aço de 16g é largada de 127cm sobre a lente. Se rachar, lascar ou estilhaçar, o lote inteiro reprova. Este teste é inegociável para envios aos EUA."
            />
            <InspectionCard
              step={3}
              title="Teste de Ciclos de Dobradiça"
              description="Abrimos e fechamos cada design de dobradiça mais de 2.000 vezes usando equipamentos de teste automatizados para simular anos de uso diário. Dobradiças de mola, dobradiças de barril, dobradiças flex — cada tipo tem seu próprio requisito de contagem de ciclos. Dobradiças soltas ou duras significam redesign, não aprovação."
            />
            <InspectionCard
              step={4}
              title="Verificação Dimensional"
              description="As dimensões da armação são medidas contra a ficha de especificações original usando paquímetros digitais e comparadores ópticos. Comprimento da haste, largura da ponte, altura da lente — cada medida deve estar dentro da tolerância de ±0,5mm. É assim que garantimos a consistência de tamanhos entre produções."
            />
            <InspectionCard
              step={5}
              title="Controle de Clareza da Lente"
              description={<>
                A clareza óptica é testada para distorção, ondulação e desvio de potência. Usamos um
                lensômetro para verificar que as lentes sem prescrição tenham potência óptica zero (±0,06
                dioptrias máximo). Ninguém quer óculos de sol que deem dor de cabeça. Confira nosso{' '}
                <Link href="/pt/produtos/polarizado" className="text-primary-600 hover:underline">guia de tecnologia de lentes</Link> para
                mais informações sobre como garantimos a qualidade óptica.
              </>}
            />
            <InspectionCard
              step={6}
              title="Inspeção Cosmética"
              description="A verificação final é visual. Cada par é inspecionado sob iluminação padronizada em busca de arranhões, inconsistências de cor, revestimento desigual, bordas ásperas e defeitos de montagem. Nossa equipe de QC usa uma lista de verificação cosmética padronizada de 22 pontos. Se não parece certo, não é enviado."
            />
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O Que É Enviado Com Cada Pedido</h2>
              <p className="text-gray-600 mb-6">
                A documentação de conformidade não é algo secundário — faz parte do nosso processo de
                produção. Cada envio sai da nossa{' '}
                <Link href="/pt/sobre-nos" className="text-primary-600 hover:underline">fábrica</Link> com
                um pacote de documentação completo. Seu despachante aduaneiro e parceiros de varejo terão
                tudo o que precisam desde o primeiro dia.
              </p>
              <ul className="space-y-4">
                <DocumentItem
                  title="Relatórios de Testes de Terceiros"
                  description="Relatórios de transmissão UV, resistência ao impacto e segurança de materiais de laboratórios credenciados (SGS, Intertek ou Bureau Veritas). Emitidos conforme as especificações do seu produto e nome da marca."
                />
                <DocumentItem
                  title="Certificados de Conformidade"
                  description="Certificados CE, cartas de conformidade FDA e cópias de certificação ISO 9001. Todos vigentes e verificáveis. Atualizados anualmente ou quando os padrões mudam."
                />
                <DocumentItem
                  title="Declaração de Conformidade"
                  description="Declaração de Conformidade da UE conforme EN ISO 12312-1:2013, listando sua marca como fabricante/importador de registro. Pronta para desembaraço aduaneiro da UE."
                />
                <DocumentItem
                  title="Certificado de Produto Infantil (CPC)"
                  description="Para pedidos de óculos infantis: CPC em conformidade com CPSIA com detalhes do laboratório de testes de terceiros, padrões aplicáveis e identificação do produto. Exigido para todos os produtos infantis vendidos nos EUA."
                />
                <DocumentItem
                  title="Fichas de Dados de Segurança de Materiais"
                  description="MSDS para todos os materiais usados na produção — materiais de armação, revestimentos de lentes, componentes de dobradiça, materiais de embalagem. Essenciais para a conformidade de importação em muitos mercados."
                />
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
              <span className="text-8xl block mb-6">📋</span>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-primary-700 font-medium">Documentação Incluída</div>
                <div className="text-primary-600 text-sm mt-2">Cada pedido. Cada envio.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estas são as perguntas de conformidade que ouvimos com mais frequência de novos clientes.
              Se a sua não está aqui, é só perguntar — teremos prazer em ser específicos.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="Seus óculos de sol atendem os requisitos da FDA?"
              answer="Sim. Todos os óculos de sol EyeView estão em conformidade com a FDA 21 CFR 801.410, que regula óculos de sol como dispositivos médicos de venda livre. Cada par passa por testes de transmissão UV e resistência ao impacto conforme os requisitos da FDA. Fornecemos documentação completa de conformidade FDA com cada envio para os Estados Unidos."
            />
            <FAQItem
              question="Vocês podem fornecer certificados CE para importação na UE?"
              answer="Com certeza. Fornecemos certificados CE em conformidade com EN ISO 12312-1:2013 para todos os óculos de sol enviados à União Europeia. Cada envio inclui uma Declaração de Conformidade, relatórios de testes de laboratórios credenciados e marcação CE no produto. Enviamos óculos de sol com certificação CE para mercados da UE desde 2008."
            />
            <FAQItem
              question="Qual nível de proteção UV suas lentes fornecem?"
              answer="Todas as lentes EyeView fornecem proteção UV400, que bloqueia 99,9–100% da radiação UVA e UVB até 400 nanômetros. Esta é a classificação de proteção UV mais alta disponível para óculos de sol. Cada lote de lentes é testado com um espectrofotômetro para verificar os níveis de transmissão UV antes que a produção continue."
            />
            <FAQItem
              question="Vocês oferecem relatórios de testes de terceiros?"
              answer="Sim. Fornecemos relatórios de testes de terceiros de laboratórios credenciados incluindo SGS, Intertek e Bureau Veritas. Os relatórios cobrem transmissão UV, resistência ao impacto, potência óptica e segurança de materiais. Esses relatórios são incluídos em cada envio sem custo adicional."
            />
            <FAQItem
              question="Seus óculos infantis estão em conformidade com CPSIA?"
              answer="Sim. Todos os óculos de sol infantis EyeView estão em conformidade com os requisitos CPSIA, incluindo limites de teor de chumbo (abaixo de 100 ppm), restrições de ftalatos e testes obrigatórios de terceiros por laboratórios aceitos pelo CPSC. Cada pedido infantil é enviado com um Certificado de Produto Infantil (CPC)."
            />
            <FAQItem
              question="Posso usar seus certificados no marketing da minha própria marca?"
              answer="Sim. Quando fabricamos óculos de sol sob sua marca (OEM/ODM), todos os certificados e relatórios de testes são emitidos para o nome da sua marca e as especificações do seu produto. Você pode usá-los em seus materiais de marketing, embalagem de varejo e documentação de conformidade. Nós cuidamos de toda a papelada — você só precisa nos informar os detalhes da sua marca."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Documentação de Conformidade?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Seja para relatórios de testes de um pedido existente, certificados para um novo
            mercado, ou apenas para entender qual documentação você vai precisar — entre em contato. Vamos
            providenciar a documentação certa, rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pt/contato" className="btn-primary">
              Solicitar Documentação
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

function CertificationCard({ icon, name, standard, description, link, linkText }: {
  icon: string
  name: string
  standard: string
  description: string | React.ReactNode
  link?: string
  linkText?: string
}) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm text-primary-600 font-medium mb-3">{standard}</p>
      <div className="text-gray-600 text-sm mb-4">{description}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 text-sm font-medium hover:underline"
        >
          {linkText}
        </a>
      )}
    </div>
  )
}

function InspectionCard({ step, title, description }: {
  step: number
  title: string
  description: string | React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  )
}

function DocumentItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex gap-3">
      <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </li>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl shadow p-6 cursor-pointer">
      <summary className="font-bold text-gray-900 list-none flex items-center justify-between">
        <span>{question}</span>
        <span className="text-primary-600 text-xl group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-600 mt-4">{answer}</p>
    </details>
  )
}
