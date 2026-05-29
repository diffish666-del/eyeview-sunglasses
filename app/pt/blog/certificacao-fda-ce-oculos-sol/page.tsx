import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificação FDA e CE para Óculos de Sol: Guia Completo de Conformidade',
  description: 'Um dono de fábrica explica registro FDA, marcação CE, testes UV e normas ANSI para óculos de sol. Step-by-step compliance guide for selling eyewear in the US, EU, and globally.',
  keywords: 'certificação FDA óculos de sol, marcação CE óculos, conformidade eyewear, teste UV óculos, ANSI Z80.3, EN ISO 12312-1, regulamentação óculos',
  alternates: {
    canonical: '/pt/blog/certificacao-fda-ce-oculos-sol',
    languages: {
      'en': '/blog/fda-ce-certification-sunglasses',
      'pt': '/pt/blog/certificacao-fda-ce-oculos-sol',
    },
  },
}

export default function FdaCeCertificationPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Certificação FDA e CE para Óculos de Sol: Guia Completo de Conformidade",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica explica registro FDA, marcação CE, testes UV e requisitos de conformidade para vender óculos globalmente.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/certificacao-fda-ce-oculos-sol" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do sunglasses need FDA approval to sell in the US?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sunglasses don't need FDA 'approval' but they do need FDA compliance. The FDA classifies sunglasses as medical devices (Class I) under 21 CFR 886.5850. Manufacturers and importers must register their establishment with the FDA and list their products. The lenses must also meet impact resistance requirements under 21 CFR 801.410. There's no pre-market approval process -- it's registration and compliance with performance standards." }
            },
            {
              "@type": "Question",
              "name": "What is CE marking for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "CE marking indicates that sunglasses comply with EU safety, health, and environmental requirements. For sunglasses, the key standard is EN ISO 12312-1, which covers UV protection, optical quality, and mechanical strength. CE marking is mandatory for selling sunglasses in the EU, EEA, and UK. The manufacturer must create a Declaration of Conformity and apply the CE mark to the product or packaging." }
            },
            {
              "@type": "Question",
              "name": "How much does sunglasses compliance testing cost?",
              "acceptedAnswer": { "@type": "Answer", "text": "Basic UV400 testing costs $100-$300 por modelo. Full compliance testing (UV, impact resistance, optical quality, lens category verification) runs $300-$800 por modelo. FDA establishment registration is free. CE marking documentation costs $200-$500 if you hire a consultant. Most reputable factories include basic testing in their production costs and provide certificates at no extra charge." }
            },
            {
              "@type": "Question",
              "name": "What UV protection do sunglasses need?",
              "acceptedAnswer": { "@type": "Answer", "text": "For legal sale in most markets, sunglasses must block 99-100% of UVA and UVB radiation up to 400nm (UV400). In the US, the FDA requires 'adequate' UV protection. The EU standard EN ISO 12312-1 specifies maximum UV transmittance based on lens category (0-4). Australia's AS/NZS 1067 is the strictest, requiring UV400 blocking for all categories. Bottom line: UV400 certification is the global baseline -- don't sell sunglasses without it." }
            },
            {
              "@type": "Question",
              "name": "Can my sunglasses get seized at customs for non-compliance?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. US Customs and Border Protection (CBP) can detain sunglasses that lack proper FDA registration or don't meet impact resistance standards. EU customs regularly seizes shipments without CE marking. Australia is particularly strict -- non-compliant sunglasses are routinely seized and destroyed. I've personally seen clients lose entire shipments worth $10,000-$50,000 due to missing documentation. Compliance isn't optional." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Conformidade</span>
            <span>4 de maio de 2026</span>
            <span>•</span>
            <span>15 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificação FDA e CE para Óculos de Sol: Guia Completo de Conformidade
          </h1>
          <p className="text-xl text-gray-600">
            Ninguém cria uma marca de óculos de sol porque está empolgado com conformidade regulatória. 
            Mas pule essa etapa e seus óculos podem ser apreendidos na alfândega -- ou pior. Aqui está 
            tudo que você precisa saber, simplificado.
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
            <li><a href="#why-compliance" className="text-primary-600 hover:underline">Por que a Conformidade Importa (Histórias Reais de Terror)</a></li>
            <li><a href="#fda-us" className="text-primary-600 hover:underline">Requisitos FDA: Vendendo Óculos de Sol nos EUA</a></li>
            <li><a href="#ce-eu" className="text-primary-600 hover:underline">Marcação CE: Vendendo Óculos de Sol na UE</a></li>
            <li><a href="#uv-testing" className="text-primary-600 hover:underline">Proteção UV Standards</a></li>
            <li><a href="#ansi" className="text-primary-600 hover:underline">ANSI Z80.3: O Padrão Óptico dos EUA</a></li>
            <li><a href="#other-markets" className="text-primary-600 hover:underline">Outros Mercados: Austrália, Reino Unido, Japão</a></li>
            <li><a href="#testing-cost" className="text-primary-600 hover:underline">Custos de Testes e Onde Testar</a></li>
            <li><a href="#factory-role" className="text-primary-600 hover:underline">O que Sua Fábrica Deve Fornecer</a></li>
            <li><a href="#checklist" className="text-primary-600 hover:underline">Seu Checklist de Conformidade</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Exporto óculos de sol há 20 anos. Nesse tempo, vi três clientes 
            perderem remessas inteiras para apreensões alfandegárias -- totalizando mais de $120.000 em produto destruído. Cada 
            caso era evitável. Os testes teriam custado menos de $500.
          </p>

          <h2 id="why-compliance" className="text-3xl font-bold mt-16 mb-6">Por que a Conformidade Importa (Histórias Reais de Terror)</h2>
          <p>
            Deixe-me contar sobre o Carlos. Ele era um dono de marca de primeira viagem de Miami que encomendou 3.000 
            pares de óculos de sol em 2023. Armações lindas, ótima qualidade, investimento de $18.000. Ele enviou 
            por mar para o Porto de Miami. A Alfândega dos EUA sinalizou a remessa porque faltava documentação 
            de registro de estabelecimento FDA. As mercadorias ficaram retidas por 45 dias enquanto Carlos corria para se registrar 
            e colocar a documentação em ordem. Quando recebeu seus óculos, já tinha perdido toda a 
            janela de lançamento de verão. Os óculos estavam bem -- a documentação não.
          </p>
          <p>
            Depois tem a Lisa, que vendia óculos de sol na Amazon UK. Um concorrente denunciou seu anúncio por 
            falta de marcação CE. A Amazon removeu o anúncio, congelou seu estoque (600 pares no valor de £9.000), 
            e levou 3 meses para ser restabelecido depois que ela forneceu documentação CE adequada. Três 
            meses de zero vendas e capital congelado.
          </p>
          <p>
            Conformidade não é glamoroso. Mas é a diferença entre um lançamento tranquilo e um 
            desastre muito caro.
          </p>

          <h2 id="fda-us" className="text-3xl font-bold mt-16 mb-6">Requisitos FDA: Vendendo Óculos de Sol nos EUA</h2>
          <p>
            Algo que surpreende a maioria das pessoas: <strong>a FDA classifica óculos de sol como 
            dispositivos médicos</strong>. Especificamente, dispositivos médicos Classe I sob 21 CFR 886.5850. Não 
            entre em pânico -- Classe I é a categoria de menor risco, e os requisitos são diretos.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que Você Precisa Fazer</h3>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Passo 1: Registro de Estabelecimento FDA</h3>
            <p className="text-blue-800">
              Todo fabricante e importador de óculos de sol vendidos nos EUA deve se registrar na FDA. 
              Isso é feito online através do{' '}
              <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/device-registration-and-listing" target="_blank" rel="noopener" className="underline">sistema FURLS da FDA</a>. 
              O registro é gratuito mas deve ser renovado anualmente (1º de outubro a 31 de dezembro de cada ano). 
              Se sua fábrica na China é o fabricante, <em>eles</em> precisam se registrar. Se você importa 
              e vende sob sua própria marca, <em>você</em> também precisa se registrar como desenvolvedor de especificações.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Passo 2: Listagem de Produtos</h3>
            <p className="text-blue-800">
              Após o registro, você deve listar seus produtos de óculos de sol no banco de dados da FDA. Isso inclui 
              código do produto (HQF para óculos de sol sem prescrição), nome da marca e números de modelo. Também gratuito, 
              também feito pelo FURLS.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Passo 3: Conformidade de Resistência a Impacto</h3>
            <p className="text-blue-800">
              Sob 21 CFR 801.410, todas as lentes de óculos de sol sem prescrição devem passar no teste de 
              resistência a impacto da FDA: uma esfera de aço de 5/8 polegadas caída de 50 polegadas não deve fraturar a lente. 
              Este é o &quot;teste da bola.&quot; Sua fábrica deve realizar este teste em uma amostra estatística 
              de cada lote de produção e manter registros. Lentes de policarbonato e CR-39 geralmente 
              passam facilmente. Lentes de vidro requerem têmpera química ou térmica.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Passo 4: Requisitos de Rotulagem</h3>
            <p className="text-blue-800">
              Óculos de sol vendidos nos EUA devem incluir: nível de proteção UV na embalagem ou etiqueta, 
              alegação de resistência a impacto (se feita), nome e endereço do fabricante ou distribuidor, 
              e quaisquer avisos relevantes. Se você alega &quot;UV400&quot; ou &quot;100% proteção UV,&quot; 
              você deve ser capaz de comprová-lo com dados de teste.
            </p>
          </div>

          <h2 id="ce-eu" className="text-3xl font-bold mt-16 mb-6">Marcação CE: Vendendo Óculos de Sol na UE</h2>
          <p>
            A marcação CE é <strong>obrigatória</strong> para vender óculos de sol na União Europeia, no 
            Espaço Econômico Europeu (EEE) e no Reino Unido (que agora usa a marca UKCA, mas ainda aceita 
            CE para a maioria dos produtos até 2027).
          </p>
          <p>
            O padrão principal é <strong>EN ISO 12312-1:2022</strong> (Proteção ocular pessoal -- Óculos de sol 
            e óculos relacionados). Este padrão cobre:
          </p>
          <ul>
            <li><strong>Transmitância UV:</strong> Radiação UV máxima permitida passando pela lente, baseada na categoria do filtro</li>
            <li><strong>Qualidade óptica:</strong> Tolerâncias de potência esférica, astigmática e prismática</li>
            <li><strong>Resistência mecânica:</strong> Requisitos mínimos de robustez</li>
            <li><strong>Categorias de filtro (0-4):</strong> Quanta luz visível a lente transmite</li>
            <li><strong>Liberação de níquel:</strong> Para armações metálicas em contato com a pele</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Categorias de Filtro da Marcação CE</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Categoria</th>
                  <th className="px-6 py-4 text-left">Transmitância de Luz</th>
                  <th className="px-6 py-4 text-left">Uso Indicado</th>
                  <th className="px-6 py-4 text-left">Dirigir?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Cat 0</td><td className="px-6 py-4">80-100%</td><td className="px-6 py-4">Moda/interior</td><td className="px-6 py-4">Sim</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 1</td><td className="px-6 py-4">43-80%</td><td className="px-6 py-4">Sol fraco</td><td className="px-6 py-4">Sim</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 2</td><td className="px-6 py-4">18-43%</td><td className="px-6 py-4">Sol moderado</td><td className="px-6 py-4">Sim</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 3</td><td className="px-6 py-4">8-18%</td><td className="px-6 py-4">Sol forte</td><td className="px-6 py-4">Sim</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 4</td><td className="px-6 py-4">3-8%</td><td className="px-6 py-4">Extremo (geleiras, etc.)</td><td className="px-6 py-4 text-red-600 font-bold">NÃO</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            A maioria dos óculos de sol de moda se enquadra na <strong>Categoria 3</strong> (8-18% de transmitância). Este é 
            o ponto ideal para proteção solar diária. A Categoria 4 é muito escura e explicitamente proibida para 
            dirigir -- você deve incluir um aviso se vender lentes Cat 4.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que Você Precisa para Conformidade CE</h3>
          <ol>
            <li><strong>Testes conforme EN ISO 12312-1</strong> por um laboratório credenciado</li>
            <li><strong>Dossiê técnico</strong> documentando design, materiais, resultados de testes e avaliação de risco</li>
            <li><strong>Declaração de Conformidade (DoC)</strong> -- um documento formal declarando que seu produto atende aos requisitos da UE. Você (a marca/importador) assina isso.</li>
            <li><strong>Marca CE</strong> no produto ou em sua embalagem</li>
            <li><strong>Rotulagem obrigatória:</strong> Número da categoria do filtro, marca CE, nome do fabricante/importador, aviso de &quot;não adequado para dirigir&quot; se Cat 4</li>
          </ol>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Importante: Autocertificação</h3>
            <p className="text-amber-800">
              A marcação CE para óculos de sol é <strong>autocertificada</strong> -- você não precisa de um organismo 
              notificado para aprovar seu produto. Você (ou sua fábrica) realiza os testes, compila o dossiê 
              técnico e assina a Declaração de Conformidade. Isso torna o processo acessível, mas também significa 
              que você é legalmente responsável pela precisão de suas alegações. Não falsifique.
            </p>
          </div>

          <h2 id="uv-testing" className="text-3xl font-bold mt-16 mb-6">Padrões de Proteção UV</h2>
          <p>
            A proteção UV é o requisito de conformidade mais importante para óculos de sol. Lentes que 
            não bloqueiam adequadamente a radiação UV podem na verdade ser <em>mais perigosas</em> do que não usar 
            óculos de sol -- a tonalidade escura faz suas pupilas dilatarem, deixando entrar mais UV se a 
            lente não estiver bloqueando corretamente.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">UV400: A Base Global</h3>
          <p>
            <strong>UV400 significa que a lente bloqueia 99-100% da radiação UV até 400 nanômetros</strong>, 
            cobrindo tanto UVA (315-400nm) quanto UVB (280-315nm). Este é o padrão mínimo que você deve 
            atender para qualquer óculos de sol que venda, em qualquer lugar do mundo.
          </p>
          <p>
            Todo fabricante de lentes respeitável produz lentes compatíveis com UV400 por padrão. As propriedades de 
            bloqueio UV vêm do próprio material da lente (policarbonato naturalmente bloqueia UV400) 
            ou de revestimentos absorventes de UV aplicados durante a fabricação. Saiba mais sobre materiais de lentes no nosso{' '}
            <Link href="/pt/blog/uv400-vs-polarizado" className="text-primary-600 hover:underline">guia UV400 vs polarizado</Link>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Funciona o Teste UV</h3>
          <p>
            O teste UV é feito com um espectrofotômetro que mede a transmitância de luz em cada 
            comprimento de onda de 280nm a 780nm. O teste gera uma curva de transmitância mostrando exatamente 
            quanta luz UV, visível e infravermelha passa pela lente. Uma lente compatível com UV400 
            deve mostrar menos de 1% de transmitância abaixo de 400nm.
          </p>
          <p>
            O teste leva cerca de 5 minutos por lente e custa $50-$100 por amostra na maioria dos laboratórios. 
            Sua fábrica deve ter um espectrofotômetro internamente e testar cada lote de produção. Nós 
            temos -- e fornecemos os relatórios de teste com cada remessa.
          </p>

          <h2 id="ansi" className="text-3xl font-bold mt-16 mb-6">ANSI Z80.3: O Padrão Óptico dos EUA</h2>
          <p>
            Enquanto a FDA cobre resistência a impacto e segurança geral, a <strong>ANSI Z80.3</strong> 
            (American National Standards Institute) cobre a qualidade óptica de óculos de sol sem 
            prescrição. É tecnicamente voluntário nos EUA, mas é o benchmark reconhecido 
            e a maioria dos varejistas o exige.
          </p>
          <p>A ANSI Z80.3 cobre:</p>
          <ul>
            <li><strong>Potência óptica:</strong> As lentes não devem ter potência de prescrição significativa (±0,12 dioptrias máx)</li>
            <li><strong>Potência prismática:</strong> As lentes não devem causar deslocamento de imagem</li>
            <li><strong>Defeitos cosméticos:</strong> Bolhas, riscos, inclusões na lente</li>
            <li><strong>Transmitância UV:</strong> Deve atender requisitos específicos de bloqueio UV</li>
            <li><strong>Resistência a impacto:</strong> Alinhado com os requisitos da FDA</li>
          </ul>

          <h2 id="other-markets" className="text-3xl font-bold mt-16 mb-6">Outros Mercados: Austrália, Reino Unido, Japão</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Australia &amp; New Zealand (AS/NZS 1067)</h3>
          <p>
            A Austrália tem as <strong>regulamentações de óculos de sol mais rigorosas do mundo</strong>. A AS/NZS 1067 
            é obrigatória, não voluntária. Os óculos devem ser testados, categorizados (0-4) e rotulados com 
            sua categoria de lente, nível de proteção UV e declaração de conformidade. Óculos não conformes 
            são regularmente apreendidos na alfândega e destruídos. Se você está vendendo para a Austrália, não 
            corte caminhos na conformidade.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">United Kingdom (UKCA)</h3>
          <p>
            Pós-Brexit, o Reino Unido tecnicamente exige a marca UKCA em vez da CE. No entanto, o governo 
            britânico estendeu a aceitação da CE até pelo menos 2027 para a maioria dos produtos, incluindo 
            óculos de sol. Se você já tem marcação CE, está coberto para o mercado britânico por enquanto. 
            Fique atento a atualizações conforme o prazo de transição se aproxima.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Japan (JIS T 7333)</h3>
          <p>
            O Japão segue a JIS T 7333, que é semelhante à ISO 12312-1 mas com alguns requisitos específicos 
            do Japão. O mercado japonês é obcecado por qualidade, e varejistas frequentemente exigem relatórios 
            de testes de terceiros além do que é legalmente obrigatório.
          </p>

          <h2 id="testing-cost" className="text-3xl font-bold mt-16 mb-6">Custos de Testes e Onde Testar</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Tipo de Teste</th>
                  <th className="px-6 py-4 text-left">Custo por Modelo</th>
                  <th className="px-6 py-4 text-left">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Somente transmitância UV400</td><td className="px-6 py-4">$100-$300</td><td className="px-6 py-4">3-5 dias</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">EN ISO 12312-1 completo (CE)</td><td className="px-6 py-4">$300-$600</td><td className="px-6 py-4">5-10 dias</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Suíte completa ANSI Z80.3</td><td className="px-6 py-4">$300-$500</td><td className="px-6 py-4">5-10 dias</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">AS/NZS 1067 (Austrália)</td><td className="px-6 py-4">$400-$800</td><td className="px-6 py-4">7-14 dias</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Teste de bola FDA</td><td className="px-6 py-4">$50-$150</td><td className="px-6 py-4">1-3 dias</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Liberação de níquel (armações metálicas)</td><td className="px-6 py-4">$100-$200</td><td className="px-6 py-4">5-7 dias</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Laboratórios de Testes Recomendados</h3>
          <ul>
            <li><strong>SGS</strong> -- Líder global. Laboratórios na China, EUA, UE. Amplamente reconhecido.</li>
            <li><strong>Bureau Veritas</strong> -- Outra opção de primeiro nível com cobertura global.</li>
            <li><strong>Intertek</strong> -- Forte tanto em testes ópticos quanto de materiais.</li>
            <li><strong>TÜV Rheinland</strong> -- Especialmente confiável no mercado europeu.</li>
            <li><strong>Laboratórios universitários locais</strong> -- Frequentemente 30-50% mais baratos para testes UV básicos. Verifique se são credenciados.</li>
          </ul>

          <h2 id="factory-role" className="text-3xl font-bold mt-16 mb-6">O que Sua Fábrica Deve Fornecer</h2>
          <p>
            Uma boa fábrica -- que leva qualidade e conformidade a sério -- deve fornecer a maior parte 
            do que você precisa sem que você precise pedir. Aqui está o que fornecemos na EyeView, e 
            o que você deve esperar de qualquer fabricante respeitável:
          </p>
          <ul>
            <li><strong>Certificado de teste UV400</strong> para cada lote de produção (não apenas uma vez -- cada lote)</li>
            <li><strong>Modelo de Declaração de Conformidade CE</strong> que você pode personalizar com o nome da sua marca</li>
            <li><strong>Registros do teste de bola FDA</strong> arquivados e disponíveis mediante solicitação</li>
            <li><strong>Fichas de segurança de materiais (FISPQ)</strong> para materiais de armação</li>
            <li><strong>Certificação livre de níquel</strong> para componentes metálicos</li>
            <li><strong>Certificação de gestão da qualidade ISO 9001</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-red-900 mb-2">🚩 Sinais de Alerta</h3>
            <p className="text-red-800">
              Se uma fábrica não consegue fornecer certificados de teste UV em 24 horas após a solicitação, saia fora. 
              Se dizem &quot;todas as nossas lentes são UV400&quot; mas não conseguem mostrar os dados de teste, 
              saia fora. Se nunca ouviram falar de EN ISO 12312-1 ou ANSI Z80.3, <em>definitivamente</em> 
              saia fora. Documentação de conformidade é o mínimo de uma operação profissional.
            </p>
          </div>

          <h2 id="checklist" className="text-3xl font-bold mt-16 mb-6">Seu Checklist de Conformidade</h2>
          <p>
            Antes de enviar ou vender um único par, certifique-se de que cobriu estes itens:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para o Mercado dos EUA</h3>
          <ul>
            <li>☐ Registro de estabelecimento FDA (fabricante e/ou importador)</li>
            <li>☐ Listagem de produto FDA (código de produto HQF)</li>
            <li>☐ Registros do teste de impacto de bola arquivados</li>
            <li>☐ Certificado de teste UV400 para cada modelo</li>
            <li>☐ Rotulagem adequada (alegações UV, informações do fabricante)</li>
            <li>☐ Seguro de responsabilidade civil do produto</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para o Mercado da UE</h3>
          <ul>
            <li>☐ Testes conforme EN ISO 12312-1 por laboratório credenciado</li>
            <li>☐ Dossiê técnico compilado e armazenado</li>
            <li>☐ Declaração de Conformidade assinada</li>
            <li>☐ Marca CE aplicada ao produto/embalagem</li>
            <li>☐ Categoria do filtro claramente rotulada</li>
            <li>☐ Importador baseado na UE ou representante autorizado identificado</li>
            <li>☐ Aviso de adequação para dirigir se Cat 4</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para a Austrália</h3>
          <ul>
            <li>☐ Testes conforme AS/NZS 1067</li>
            <li>☐ Rótulo de categoria da lente no produto</li>
            <li>☐ Declaração de conformidade de proteção UV</li>
            <li>☐ Declaração de Conformidade do fornecedor</li>
          </ul>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Óculos de sol precisam de aprovação da FDA para vender nos EUA?</h3>
              <p className="text-gray-600">
                Não &quot;aprovação&quot; -- mas conformidade com a FDA, sim. Óculos de sol são dispositivos médicos Classe I. 
                Fabricantes/importadores devem se registrar na FDA e listar seus produtos. As lentes devem passar 
                nos testes de resistência a impacto. Não há processo de aprovação pré-mercado -- é registro 
                mais conformidade com padrões de desempenho.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">O que é marcação CE para óculos de sol?</h3>
              <p className="text-gray-600">
                A marcação CE mostra que seus óculos atendem aos requisitos de segurança da UE sob EN ISO 12312-1. Cobre 
                proteção UV, qualidade óptica e resistência mecânica. É obrigatória para vender na 
                UE/EEE/Reino Unido. Você autocertifica testando conforme o padrão, criando um dossiê técnico e assinando 
                uma Declaração de Conformidade.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto custa o teste de conformidade de óculos de sol?</h3>
              <p className="text-gray-600">
                Teste UV básico: $100-$300/modelo. Conformidade CE completa: $300-$600/modelo. ANSI Z80.3 completa: 
                $300-$500/modelo. AS/NZS 1067 australiana: $400-$800/modelo. O registro FDA é gratuito. A maioria 
                das boas fábricas inclui testes UV básicos nos custos de produção.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Qual proteção UV os óculos de sol precisam?</h3>
              <p className="text-gray-600">
                UV400 -- bloqueando 99-100% da radiação UV até 400nm -- é a base global. Todo 
                mercado importante exige proteção UV adequada. Não venda óculos de sol sem certificação UV400. 
                O risco para os consumidores (e sua responsabilidade) é alto demais.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Meus óculos podem ser apreendidos na alfândega por não conformidade?</h3>
              <p className="text-gray-600">
                Sim. A CBP dos EUA pode reter remessas sem registro FDA. A alfândega da UE regularmente apreende 
                produtos sem marcação CE. A Austrália é a mais rigorosa -- óculos não conformes são 
                rotineiramente destruídos. Vi clientes perderem $10.000-$50.000 em remessas apreendidas. 
                O custo dos testes de conformidade é uma fração disso.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda com Conformidade?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cuidamos da conformidade FDA, CE e UV para cada pedido que produzimos. Nossa equipe pode guiá-lo 
              pelos requisitos dos seus mercados específicos e fornecer toda a documentação necessária. 
              Sem custo extra para conformidade padrão -- faz parte de fazer negócios corretamente.
            </p>
            <Link href="/pt/contato" className="btn-primary">
              Pergunte ao Jacky Sobre Conformidade
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais Direto da Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/controle-qualidade-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Controle de Qualidade de Óculos de Sol: Checklist de Inspeção de Fábrica</h3>
                <p className="text-gray-600 text-sm">O que verificar antes de aprovar um lote de produção -- da clareza da lente à tensão da dobradiça.</p>
              </Link>
              <Link href="/pt/blog/guia-importacao-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Importar Óculos de Sol da China</h3>
                <p className="text-gray-600 text-sm">Guia completo de alfândega, taxas, frete e documentação.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
