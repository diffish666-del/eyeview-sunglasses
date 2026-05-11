import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Controle de Qualidade de Óculos de Sol: Checklist de Inspeção de Fábrica',
  description: 'Um dono de fábrica compartilha o checklist completo de QC para óculos — lens testing, frame inspection, hinge checks, UV verification, and what to look for before approving production.',
  keywords: 'controle qualidade óculos de sol, inspeção eyewear, padrões teste óculos, checklist QC óculos, defeitos óculos',
  alternates: {
    canonical: '/pt/blog/controle-qualidade-oculos-sol',
    languages: {
      'en': '/blog/sunglasses-quality-control',
      'pt': '/pt/blog/controle-qualidade-oculos-sol',
    },
  },
}

export default function SunglassesQualityControlPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Controle de Qualidade de Óculos de Sol: Checklist de Inspeção de Fábrica",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Um dono de fábrica compartilha o checklist completo de QC para óculos — from lens testing to packaging inspection.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/pt/blog/controle-qualidade-oculos-sol" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What should I check when inspecting sunglasses quality?",
              "acceptedAnswer": { "@type": "Answer", "text": "Key quality checks: lens clarity (no distortion, bubbles, or scratches), UV400 protection verification, hinge tension and smoothness, frame symmetry, color consistency across the batch, logo placement accuracy, nose pad alignment, and overall finish quality. Hold each pair up to text — any waviness or distortion in the text indicates poor optical quality." }
            },
            {
              "@type": "Question",
              "name": "What is AQL inspection for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "AQL (Acceptable Quality Level) is a statistical sampling method used in quality control. For sunglasses, the standard is AQL 2.5 for major defects (functional issues like lens distortion, broken hinges) and AQL 4.0 for minor defects (cosmetic issues like small scratches, slight color variation). This means for a batch of 1,000 pairs, you'd inspect about 80 randomly selected pairs and accept the batch if defects fall below the AQL threshold." }
            },
            {
              "@type": "Question",
              "name": "How much does third-party sunglasses inspection cost?",
              "acceptedAnswer": { "@type": "Answer", "text": "A standard pre-shipment inspection by companies like SGS, Bureau Veritas, or QIMA costs $200-$400 per inspection (one man-day). This covers a statistical sample of your order based on AQL standards. Full-day inspections for larger orders cost $300-$600. It's one of the best investments you can make — catching quality issues before shipping saves 10-50x the inspection cost." }
            },
            {
              "@type": "Question",
              "name": "What are the most common sunglasses defects?",
              "acceptedAnswer": { "@type": "Answer", "text": "The top 10 defects we catch in QC: 1) Lens distortion or optical aberrations, 2) Uneven hinge tension (one arm tighter than the other), 3) Frame asymmetry (one side higher than the other), 4) Scratches on lenses or frames, 5) Cor inconsistency between pairs, 6) Logo misalignment or poor print quality, 7) Loose screws, 8) Nose pad misalignment, 9) Fraco polishing (rough edges or surfaces), 10) Incorrect lens tint or coating." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fabricação</span>
            <span>4 de maio de 2026</span>
            <span>•</span>
            <span>14 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Controle de Qualidade de Óculos de Sol: Checklist de Inspeção de Fábrica
          </h1>
          <p className="text-xl text-gray-600">
            Vou compartilhar o checklist exato de CQ que nossos inspetores usam em cada lote de produção. 
            Este é o checklist que mantém nossa taxa de defeitos abaixo de 1%. Use-o tanto para 
            inspeção na fábrica quanto ao receber mercadorias no seu armazém.
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
            <li><a href="#why-qc" className="text-primary-600 hover:underline">Por que CQ Não é Negociável</a></li>
            <li><a href="#lens-inspection" className="text-primary-600 hover:underline">Checklist de Inspeção de Lentes</a></li>
            <li><a href="#frame-inspection" className="text-primary-600 hover:underline">Checklist de Inspeção de Armações</a></li>
            <li><a href="#hinge-inspection" className="text-primary-600 hover:underline">Inspeção de Dobradiças e Ferragens</a></li>
            <li><a href="#finish-inspection" className="text-primary-600 hover:underline">Inspeção de Acabamento e Estética</a></li>
            <li><a href="#functional-test" className="text-primary-600 hover:underline">Testes Funcionais</a></li>
            <li><a href="#packaging-inspection" className="text-primary-600 hover:underline">Inspeção de Embalagem</a></li>
            <li><a href="#aql" className="text-primary-600 hover:underline">Amostragem AQL: Quantos Inspecionar</a></li>
            <li><a href="#third-party" className="text-primary-600 hover:underline">Serviços de Inspeção de Terceiros</a></li>
            <li><a href="#common-defects" className="text-primary-600 hover:underline">Os 10 Defeitos Mais Comuns</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Um cliente me disse uma vez: &quot;Jacky, CQ é chato.&quot; Eu respondi: &quot;Lidar com 
            200 reclamações de clientes e uma taxa de devolução de 15% também é.&quot; Controle de qualidade é a parte menos 
            empolgante do negócio de óculos de sol — e a mais importante. Aqui está o sistema que funciona.
          </p>

          <h2 id="why-qc" className="text-3xl font-bold mt-16 mb-6">Por que CQ Não é Negociável</h2>
          <p>
            Cada par defeituoso que chega ao cliente custa a você:
          </p>
          <ul>
            <li><strong>$10-$15 em custos diretos:</strong> Frete de devolução, produto de reposição, tempo de atendimento ao cliente</li>
            <li><strong>1 avaliação negativa</strong> que afasta 5-10 clientes potenciais</li>
            <li><strong>Perda do valor vitalício do cliente:</strong> Um cliente que recebe um par ruim raramente volta. São $100-$300 em compras futuras perdidas.</li>
          </ul>
          <p>
            Compare isso com o custo de um CQ adequado: $200-$400 para uma inspeção de terceiros, ou $0 se 
            sua fábrica fizer direito. A conta é óbvia.
          </p>

          <h2 id="lens-inspection" className="text-3xl font-bold mt-16 mb-6">Checklist de Inspeção de Lentes</h2>
          <p>
            As lentes são o componente mais crítico. Uma armação bonita com lentes ruins é pior do que 
            uma armação feia com boas lentes.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Checklist de Qualidade das Lentes</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Clareza óptica:</strong> Segure as lentes diante de um texto (jornal, tela do celular). O texto deve estar nítido, sem nenhuma distorção, ondulação ou ampliação. Este é o teste mais importante de todos.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Qualidade da superfície:</strong> Sem arranhões, bolhas, inclusões ou manchas visíveis à distância normal de inspeção (30cm). Verifique ambas as superfícies, frontal e traseira.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Consistência de cor:</strong> Ambas as lentes devem ser idênticas na tonalidade. Segure-as lado a lado contra uma superfície branca. Mesmo diferenças leves são perceptíveis quando usadas.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Verificação de polarização:</strong> Se polarizadas, verifique com a tela de um celular — girar os óculos 90° deve escurecer/clarear a tela. Ambas as lentes devem reagir de forma idêntica. Veja nosso{' '}
                  <Link href="/pt/blog/uv400-vs-polarizado" className="text-primary-600 hover:underline">guia UV400 vs polarizado</Link>{' '}
                  para mais informações sobre testes de polarização.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Proteção UV:</strong> Verifique se o certificado de teste UV400 corresponde ao lote. Se possível, faça uma verificação pontual com um medidor de UV.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Qualidade do revestimento:</strong> Verifique a uniformidade dos revestimentos espelhados, a aplicação correta dos revestimentos antirreflexo e os revestimentos hidrofóbicos pingando água (deve formar gotas e escorrer). Mais sobre revestimentos em nosso{' '}
                  <Link href="/pt/blog/guia-revestimentos-oculos-sol" className="text-primary-600 hover:underline">guia de revestimentos</Link>.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Encaixe das lentes:</strong> As lentes devem ficar perfeitamente encaixadas na armação, sem folgas, rotação ou movimento. Pressione suavemente — não deve haver nenhuma folga.</div>
              </li>
            </ul>
          </div>

          <h2 id="frame-inspection" className="text-3xl font-bold mt-16 mb-6">Checklist de Inspeção de Armações</h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Checklist de Qualidade das Armações</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Simetria:</strong> Coloque os óculos em uma superfície plana, de frente para baixo. Ambas as hastes devem tocar a superfície de forma uniforme. Sem oscilação, sem inclinação. A frente da armação deve estar nivelada.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Consistência de cor:</strong> Compare 5-10 pares do mesmo lote. A cor deve ser uniforme. O acetato pode variar levemente entre as chapas — aceitável dentro de um tom.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Acabamento da superfície:</strong> Passe o dedo por todas as superfícies. Deve ser liso, sem pontos ásperos, bordas afiadas ou áreas não acabadas. Preste atenção especial ao aro interno onde há contato com a pele.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Peso:</strong> Pese 5-10 pares. O peso deve ser consistente (±2g para acetato, ±1g para TR90). Variação significativa indica inconsistência no material.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Dimensões:</strong> Meça a largura da lente, largura da ponte e comprimento da haste. Deve corresponder às especificações dentro de ±1mm.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Qualidade do material:</strong> Para acetato, verifique bolhas ou inclusões no material. Para metal, verifique corrosão pontual ou descoloração. Para TR90, verifique linhas de fluxo ou marcas de afundamento.</div>
              </li>
            </ul>
          </div>

          <h2 id="hinge-inspection" className="text-3xl font-bold mt-16 mb-6">Inspeção de Dobradiças e Ferragens</h2>
          <p>
            As dobradiças são o ponto de falha nº 1 em óculos de sol. Também são a reclamação nº 1 
            nas avaliações dos clientes. Acerte nisso.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Checklist de Dobradiças e Ferragens</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Tensão da dobradiça:</strong> Abra e feche as hastes 10 vezes. O movimento deve ser suave, mas firme — não frouxo, não duro. Ambos os lados devem parecer idênticos.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Mola das hastes (se com dobradiças de mola):</strong> As hastes devem flexionar para fora 15-20° além da posição aberta e retornar suavemente. Sem estalos, rangidos ou travamentos.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Aperto dos parafusos:</strong> Todos os parafusos devem estar apertados. Use uma chave de joalheiro para verificar — não devem girar facilmente. Composto de trava de rosca deve ser aplicado.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Alinhamento da dobradiça:</strong> Quando fechadas, as hastes devem ficar paralelas entre si e paralelas à frente da armação.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Acabamento metálico:</strong> Verifique o acabamento das dobradiças e parafusos quanto à consistência — sem ferrugem, descoloração ou defeitos no banho.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Plaquetas nasais:</strong> Se ajustáveis, verifique se movem suavemente e mantêm a posição. Se fixas, verifique alinhamento e conforto.</div>
              </li>
            </ul>
          </div>

          <h2 id="finish-inspection" className="text-3xl font-bold mt-16 mb-6">Inspeção de Acabamento e Estética</h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Checklist de Acabamento</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Posicionamento do logo:</strong> Posição, tamanho e nitidez devem corresponder exatamente à amostra aprovada. Verifique ambas as hastes, a frente da armação e quaisquer logos nas lentes.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Qualidade do método do logo:</strong> Gravação a laser deve ser limpa e com profundidade consistente. Impressão tampográfica deve ser nítida sem borrões. Logos metálicos devem estar firmemente fixados.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Qualidade do polimento:</strong> Armações de acetato devem ter um acabamento brilhante (ou fosco) consistente. Sem pontos opacos, áreas superpolidas ou resíduos de polimento em fendas.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Pintura/revestimento (se aplicável):</strong> Aplicação uniforme, sem escorrimentos, sem pontos finos, sem descascamento. Teste de adesão: aplique e remova fita adesiva — nenhum revestimento deve soltar.</div>
              </li>
            </ul>
          </div>

          <h2 id="functional-test" className="text-3xl font-bold mt-16 mb-6">Testes Funcionais</h2>
          <p>Além da inspeção visual, estes testes funcionais detectam problemas que verificações de aparência e tato não pegam:</p>
          <ul>
            <li><strong>Teste de uso:</strong> Coloque no rosto. Ficam nivelados? O peso está equilibrado? Apertam atrás das orelhas? As plaquetas nasais são confortáveis? 30 segundos de uso dizem mais do que 5 minutos de inspeção visual.</li>
            <li><strong>Teste de queda:</strong> Deixe cair da altura de uma mesa (75cm) em uma superfície dura. Devem sobreviver sem quebrar, trincar ou soltar as lentes. Isso simula acidentes do mundo real.</li>
            <li><strong>Teste de flexão:</strong> Flexione suavemente a frente da armação — deve ter leve flexibilidade e retornar à forma. Rígido = quebradiço. Flexível demais = material barato.</li>
            <li><strong>Retenção das hastes:</strong> Segure a armação e agite suavemente. As hastes devem permanecer abertas. Se fecharem facilmente, a tensão da dobradiça está muito frouxa.</li>
          </ul>

          <h2 id="packaging-inspection" className="text-3xl font-bold mt-16 mb-6">Inspeção de Embalagem</h2>
          <ul>
            <li>☐ Estojo fecha corretamente e protege os óculos</li>
            <li>☐ Pano de limpeza está limpo, com a marca correta e no tamanho certo</li>
            <li>☐ Etiquetas e tags possuem informações corretas (UV, CE, marca, modelo)</li>
            <li>☐ Caixa/estojo corresponde ao design aprovado — cores, texto, códigos de barras</li>
            <li>☐ Óculos encaixam corretamente no estojo sem movimento excessivo</li>
            <li>☐ Sem danos na embalagem por manuseio</li>
            <li>☐ Quantidade correta embalada por caixa</li>
          </ul>

          <h2 id="aql" className="text-3xl font-bold mt-16 mb-6">Amostragem AQL: Quantos Inspecionar</h2>
          <p>
            Você não pode inspecionar cada par individualmente (a menos que seu pedido seja muito pequeno). O AQL 
            (Nível de Qualidade Aceitável) indica quantos devem ser amostrados:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Tamanho do Pedido</th>
                  <th className="px-6 py-4 text-left">Tamanho da Amostra (AQL 2.5)</th>
                  <th className="px-6 py-4 text-left">Máx. Defeitos Maiores</th>
                  <th className="px-6 py-4 text-left">Máx. Defeitos Menores</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">50-90</td><td className="px-6 py-4">13</td><td className="px-6 py-4">1</td><td className="px-6 py-4">2</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">91-150</td><td className="px-6 py-4">20</td><td className="px-6 py-4">1</td><td className="px-6 py-4">3</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">151-280</td><td className="px-6 py-4">32</td><td className="px-6 py-4">2</td><td className="px-6 py-4">5</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">281-500</td><td className="px-6 py-4">50</td><td className="px-6 py-4">3</td><td className="px-6 py-4">7</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">501-1,200</td><td className="px-6 py-4">80</td><td className="px-6 py-4">5</td><td className="px-6 py-4">10</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">1,201-3,200</td><td className="px-6 py-4">125</td><td className="px-6 py-4">7</td><td className="px-6 py-4">14</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="third-party" className="text-3xl font-bold mt-16 mb-6">Serviços de Inspeção de Terceiros</h2>
          <p>
            Para pedidos acima de $3.000, eu recomendo fortemente uma inspeção pré-embarque por terceiros. 
            Sim, até da nossa fábrica. A verificação independente protege tanto você quanto nós.
          </p>
          <ul>
            <li><strong>SGS:</strong> $250-$400/inspeção. O maior nome em CQ. Amplamente confiável.</li>
            <li><strong>Bureau Veritas:</strong> $200-$350/inspeção. Forte na Ásia.</li>
            <li><strong>QIMA (anteriormente AsiaInspection):</strong> $199-$350/inspeção. Bom sistema de agendamento online, relatórios rápidos.</li>
            <li><strong>Intertek:</strong> $250-$400/inspeção. Fortes capacidades de teste óptico.</li>
          </ul>
          <p>
            Para o primeiro pedido de qualquer fábrica nova, esse é o melhor investimento de $200-$400 que você pode fazer. 
            É mais barato do que um lote inteiro de óculos defeituosos. Para conformidade contínua, veja nosso{' '}
            <Link href="/pt/blog/certificacao-fda-ce-oculos-sol" className="text-primary-600 hover:underline">guia de certificação</Link>.
          </p>

          <h2 id="common-defects" className="text-3xl font-bold mt-16 mb-6">Os 10 Defeitos Mais Comuns</h2>
          <p>
            Com base nos nossos dados internos de CQ dos últimos 3 anos, aqui estão os defeitos que detectamos com mais frequência:
          </p>
          <ol>
            <li className="mb-3"><strong>Distorção da lente (22% dos defeitos):</strong> Ondulação óptica visível ao olhar através da lente. Causada por espessura irregular da lente ou moldagem deficiente. Este é um defeito MAIOR — rejeição automática.</li>
            <li className="mb-3"><strong>Tensão desigual da dobradiça (18%):</strong> Uma haste mais apertada ou mais frouxa que a outra. Causada por torque inconsistente dos parafusos ou variação nos componentes da dobradiça. Defeito maior.</li>
            <li className="mb-3"><strong>Assimetria da armação (14%):</strong> Um lado fica mais alto que o outro quando colocado em uma superfície plana. Causado por empenamento durante o resfriamento (acetato) ou moldagem inconsistente (TR90).</li>
            <li className="mb-3"><strong>Arranhões na superfície (12%):</strong> Arranhões finos na lente ou na superfície da armação por manuseio durante a produção. Menor se superficial, maior se profundo.</li>
            <li className="mb-3"><strong>Inconsistência de cor (8%):</strong> Leves variações de tonalidade entre pares no mesmo lote. Comum com acetato devido à variação natural do material. Defeito menor, a menos que seja óbvio.</li>
            <li className="mb-3"><strong>Defeitos no logo (7%):</strong> Logos desalinhados, borrados ou incompletos. Geralmente por problemas na impressão tampográfica. Varia de menor a maior dependendo da gravidade.</li>
            <li className="mb-3"><strong>Parafusos soltos (6%):</strong> Parafusos que não estão com o torque adequado ou sem composto de trava de rosca. Defeito maior — vão cair durante o uso.</li>
            <li className="mb-3"><strong>Problemas nas plaquetas nasais (5%):</strong> Plaquetas desalinhadas, soltas ou desconfortáveis. De menor a maior dependendo do impacto no ajuste.</li>
            <li className="mb-3"><strong>Polimento fraco (5%):</strong> Pontos ásperos, brilho desigual ou resíduos de polimento. Defeito menor, mas afeta a qualidade percebida.</li>
            <li className="mb-3"><strong>Especificações erradas (3%):</strong> Cor de lente incorreta, cor de armação errada ou tamanho errado. Geralmente detectado cedo, mas devastador se passar despercebido.</li>
          </ol>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">O que devo verificar ao inspecionar a qualidade de óculos de sol?</h3>
              <p className="text-gray-600">
                Clareza das lentes (segure diante de um texto — zero distorção), verificação UV400, tensão 
                e suavidade das dobradiças, simetria da armação, consistência de cor, precisão do logo, alinhamento das plaquetas nasais 
                e acabamento geral. O teste de texto através da lente é a verificação individual mais importante.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">O que é inspeção AQL para óculos de sol?</h3>
              <p className="text-gray-600">
                AQL (Nível de Qualidade Aceitável) é amostragem estatística. Padrão: AQL 2.5 para defeitos 
                maiores, AQL 4.0 para defeitos menores. Para 1.000 pares, você inspecionaria ~80 pares 
                selecionados aleatoriamente e aceitaria o lote se os defeitos ficarem abaixo dos limites.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quanto custa uma inspeção de óculos de sol por terceiros?</h3>
              <p className="text-gray-600">
                $200-$400 por inspeção (um dia de trabalho) com empresas como SGS, Bureau Veritas ou 
                QIMA. O melhor investimento de $200-$400 que você pode fazer — detectar problemas antes do envio economiza 
                de 10 a 50 vezes o custo da inspeção.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Quais são os defeitos mais comuns em óculos de sol?</h3>
              <p className="text-gray-600">
                Top 5: distorção da lente (22%), tensão desigual da dobradiça (18%), assimetria da armação (14%), 
                arranhões na superfície (12%) e inconsistência de cor (8%). Distorção da lente e problemas 
                nas dobradiças são os mais críticos — afetam diretamente a experiência do usuário.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Quer Ver Nosso Processo de CQ em Ação?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Podemos mostrar nosso processo de CQ da fábrica em uma videochamada, ou enviar um relatório 
              detalhado de CQ de um lote de produção recente. Qualidade não é só uma alegação — é 
              algo que podemos mostrar.
            </p>
            <Link href="/pt/contato" className="btn-primary">
              Solicite um Tour de CQ da Fábrica
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais Direto da Fábrica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pt/blog/certificacao-fda-ce-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Guia de Certificação FDA e CE</h3>
                <p className="text-gray-600 text-sm">Testes de conformidade fazem parte do controle de qualidade — veja o que é exigido.</p>
              </Link>
              <Link href="/pt/blog/encontrar-fabricante-oculos-sol" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como Encontrar um Fabricante Confiável</h3>
                <p className="text-gray-600 text-sm">As capacidades de CQ são um fator-chave na escolha da fábrica certa.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
