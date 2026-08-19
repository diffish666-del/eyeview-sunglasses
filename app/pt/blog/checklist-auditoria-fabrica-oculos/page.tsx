import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Auditoria de fábrica de óculos de sol: checklist de 20 pontos para avaliar fornecedores',
  description: 'O checklist de 20 pontos de um dono de fábrica para avaliar um fornecedor de óculos de sol antes de transferir dinheiro — instalações, certificações, controle de qualidade, amostras e sinais de alerta de trading companies.',
  keywords: ['auditoria fábrica óculos de sol', 'checklist avaliação fornecedor', 'como auditar uma fábrica', 'verificação fabricante óculos de sol', 'checklist auditoria fábrica', 'trading company vs fábrica', 'certificação fábrica óculos de sol', 'auditoria fornecedor OEM óculos de sol', 'auditoria fábrica óculos de sol China', 'checklist auditoria qualidade fornecedor'],
  alternates: {
    canonical: '/pt/blog/checklist-auditoria-fabrica-oculos',
    languages: {
      'en': '/blog/sunglasses-factory-audit-checklist',
      'de': '/de/blog/sonnenbrillen-fabrik-audit-checkliste',
      'es': '/es/blog/lista-auditoria-fabrica-gafas',
      'fr': '/fr/blog/checklist-audit-usine-lunettes',
      'it': '/it/blog/checklist-audit-fabbrica-occhiali',
      'pt': '/pt/blog/checklist-auditoria-fabrica-oculos',
    },
  },
};

const takeaways = [
  'A maioria das "auditorias de fábrica" falha porque os compradores verificam as coisas erradas — um tour pelo showroom e uma parede de certificados não provam nada; uma auditoria real prova que a fábrica possui e opera as máquinas que farão exatamente o seu produto, porque essa é a única coisa que um intermediário não consegue falsificar em uma videochamada',
  'O checklist de 20 pontos tem uma única função: provar a propriedade da produção. Se um fornecedor não consegue mostrar o molde de injeção do seu modelo de armação, os programas CNC de corte do acetato e os registros de controle de qualidade do mês passado em até 24 horas após você pedir, você está falando com um escritório de vendas, não com uma fábrica',
  'Certificações são necessárias, mas não suficientes — ISO 9001, marcação CE e registro na FDA não significam nada a menos que você verifique o número do certificado no banco de dados público do órgão emissor, porque um relatório de teste CE falsificado custa cerca de $20 para produzir em Shenzhen',
  'A forma mais rápida de identificar uma trading company: endereço comercial em Shenzhen com telefone de Wenzhou, resposta "podemos fazer qualquer coisa", amostra personalizada entregue em menos de 7 dias e fotos de produto que aparecem em dezenas de vitrines do Alibaba com nomes de empresas diferentes',
  'Você tem três opções de auditoria com três faixas de preço: auditoria remota ($0, detecta cerca de 60% dos golpes), visita presencial ($1.500–3.000, detecta cerca de 90%) e inspeção terceirizada como SGS ou TÜV ($400–800 por homem-dia, entrega um relatório defensável, mas zero conhecimento de mercado)',
];

const quickStats = [
  { label: 'Relatório de teste CE falsificado em Shenzhen', value: '~$20' },
  { label: '"Fábricas" do Alibaba que são na verdade traders', value: '60–70%' },
  { label: 'Auditoria presencial (voo + hotel + tradutor)', value: '$1.500–3.000' },
  { label: 'Auditoria terceirizada (SGS/BV/TÜV) por homem-dia', value: '$400–800' },
  { label: 'Auditoria remota detecta golpes', value: '~60%' },
];

const faqs = [
  {
    question: 'Quanto custa uma auditoria de fábrica de óculos de sol?',
    answer: 'Depende do método. Uma auditoria remota — videocaminhadas ao vivo, verificação de documentos e pedidos de fotos de moldes — não custa nada além do seu tempo e detecta cerca de 60% dos golpes. Uma visita presencial custa $1.500–3.000 quando você inclui voos, hotéis e tradutor, e detecta cerca de 90%. Uma empresa de inspeção terceirizada como SGS, Bureau Veritas ou TÜV cobra $400–800 por homem-dia por um relatório padronizado. Minha regra: sempre comece remoto, gaste o dinheiro da viagem apenas em pedidos acima de $20.000 e envolva um terceiro apenas quando seu comprador de varejo exigir uma auditoria de conformidade específica.',
  },
  {
    question: 'Posso auditar uma fábrica de óculos de sol remotamente?',
    answer: 'Sim, e você deveria — mas apenas se tornar a auditoria adversária. Uma videochamada ao vivo em que você vê a fábrica caminhar com um telefone do portão de entrada até as máquinas de injeção, com a data de hoje escrita em um quadro branco, prova mais do que um PDF brilhante. Peça para ver o molde do seu modelo exato de armação com o número de cavidades, solicite os registros de defeitos do controle de qualidade do mês passado e peça para segurarem a licença comercial diante da câmera para você verificar o nome e o endereço no registro nacional. Se um fornecedor não consegue produzir isso em 24 horas, trate como reprovação.',
  },
  {
    question: 'Quais certificações uma fábrica legítima de óculos de sol deve ter?',
    answer: 'No mínimo, ISO 9001 para gestão da qualidade, relatório de teste CE para EN ISO 12312-1 se você vende na UE, registro de estabelecimento na FDA se vende nos EUA e relatórios de teste de lente UV400 em nível de lote feitos em espectrofotômetro. Se seus compradores de varejo exigem fornecimento ético, procure também uma auditoria BSCI, Sedex ou SMETA. A chave é a verificação: cada uma dessas tem um banco de dados público que você pode consultar. Peça o número do certificado e valide você mesmo — um certificado na parede que você não verificou é decoração, não garantia.',
  },
  {
    question: 'Como diferencio uma trading company de uma fábrica real?',
    answer: 'Faça quatro perguntas: (1) Posso ver o molde de injeção do meu modelo de armação, e quantas cavidades ele tem? (2) Posso ver as máquinas CNC que cortam armações de acetato? (3) Qual é o MOQ para uma armação OEM personalizada? (4) Posso ver os registros de inspeção AQL do mês passado? Uma fábrica real responde às quatro com detalhes, fotos e números. Uma trading company responde "temos muitas fábricas parceiras", oferece MOQ de 100 peças e envia amostras mais rápido do que uma fábrica poderia fabricar o ferramental. Ferramental OEM real leva 15–30 dias — uma "amostra personalizada" em 3 dias é uma amostra comprada.',
  },
  {
    question: 'O que devo verificar nas amostras antes de fazer um pedido em volume?',
    answer: 'Você não está verificando se a amostra "parece bonita" — está verificando se é um padrão selado e reproduzível. Confirme que a amostra de pré-produção (PPS) está assinada e datada por ambas as partes, porque essa é a amostra de referência que seu pedido em volume deve igualar. Verifique a classe real do material na ficha técnica (qual chapa de acetato, qual classe de TR90, qual policarbonato), não o vago "plástico de alta qualidade". Cheque a tensão da dobradiça, o torque do parafuso, a inserção da lente e os resultados UV400 contra a especificação. Depois confirme que a fábrica se compromete por escrito a igualar a PPS na produção em massa com inspeção AQL 2.5 antes do envio.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'checklist-auditoria-fabrica-oculos';

export default function ChecklistAuditoriaFabricaOculos() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Início', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Checklist de auditoria de fábrica de óculos de sol' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Como auditar uma fábrica de óculos de sol: o checklist de 20 pontos para avaliar fornecedores — o guia de um dono de fábrica",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Fundador", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "O checklist de 20 pontos de um dono de fábrica para avaliar um fornecedor de óculos de sol antes de transferir dinheiro — instalações, certificações, controle de qualidade, amostras e sinais de alerta de trading companies.",
          "inLanguage": "pt",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/pt/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "pt",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}} />

        {/* ═══════ CABEÇALHO DO ARTIGO ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Fornecimento</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>9 min de leitura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como auditar uma fábrica de óculos de sol: o checklist de 20 pontos para avaliar fornecedores
          </h1>
          <p className="text-xl text-gray-600">
            No ano passado, um comprador transferiu $34.000 para uma "fábrica" em Shenzhen por 8.000 óculos de sol de acetato. Ele tinha feito sua auditoria — um tour em vídeo por uma oficina limpa, um PDF de um certificado ISO 9001, três amostras que pareciam perfeitas. O que ele não sabia: a oficina era alugada por hora, o certificado era um trabalho de Photoshop e as amostras vieram de uma fábrica diferente a 60 quilômetros de distância. Aqui está o checklist de 20 pontos que eu uso para garantir que isso nunca aconteça com um dos meus clientes.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Fundador, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ SUMÁRIO ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Sumário</h2>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary-600 hover:underline">Por que a maioria das "auditorias de fábrica" é perda de tempo</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">O checklist de 20 pontos: o que verificar antes de enviar dinheiro</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Sinais de alerta: sinais de que você está lidando com uma trading company, não uma fábrica</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Como conduzir a auditoria: remota vs presencial vs terceirizada</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Perguntas frequentes</a></li>
          </ul>
        </nav>

        {/* ═══════ CORPO DO ARTIGO ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Auditoria de fábrica de óculos de sol — fatos rápidos" />
          )}

          {/* ─── Seção 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Por que a maioria das "auditorias de fábrica" é perda de tempo</h2>

          <p>Já estive dos dois lados dessa mesa. Há 20 anos administro uma fábrica de óculos de sol e vi centenas de compradores voarem para a China, visitarem um prédio, apertarem mãos e transferirem dinheiro — apenas para descobrir, meses depois, que o prédio que visitaram não era a fábrica que fabricou o pedido deles.</p>

          <p>A verdade incômoda é que a maioria das auditorias de fábrica verifica as coisas erradas. Elas verificam as coisas que são fáceis de falsificar. E no triângulo industrial Shenzhen-Wenzhou-Xiamen, o fácil de falsificar é uma indústria inteira.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que os compradores costumam verificar — e por que não prova nada</h3>

          <p><strong>O showroom.</strong> Uma sala limpa com amostras na parede é a evidência mais superestimada do fornecimento. Toda trading company em Shenzhen tem um showroom. Alguns são mais bonitos que o meu. Elas os alugam, os abastecem com amostras compradas de fábricas reais e levam compradores até lá porque um comprador que vê "produto" para de perguntar sobre produção. Um showroom prova apenas que alguém quer vender algo para você.</p>

          <p><strong>A parede de certificados.</strong> Certificados ISO 9001 emoldurados, certificados CE, placas BSCI — isso é decoração. Um certificado ISO falsificado custa cerca de $20 e leva um dia para produzir. Eu pessoalmente já vi o mesmo número de certificado aparecer em três sites de "fábrica" diferentes com três nomes de empresas diferentes. Se você não verificou o número no banco de dados público do órgão emissor, você não verificou um certificado. Você olhou para um pedaço de papel.</p>

          <p><strong>A amostra.</strong> Aqui está a armadilha que pega a maioria dos compradores. Um trader envia uma amostra bonita, você aprova e acha que a auditoria terminou. Mas a amostra foi feita por uma fábrica real — só que não a que você está falando. O trader comprou da Fábrica A, enviou para você e, quando você pede em volume, ele terceiriza para o licitante mais barato, a Fábrica B, que nunca viu sua amostra. Sua amostra "aprovada" e sua produção agora não têm nada em comum, exceto o nome do modelo.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que uma auditoria real de fato verifica</h3>

          <p>Uma auditoria real tem exatamente um objetivo: <strong>provar que a entidade que você está pagando possui e opera os meios de produção do seu produto.</strong> Não "tem acesso a uma fábrica". Não "trabalha com parceiros". Possui as máquinas, opera as máquinas e consegue mostrar as máquinas rodando o seu produto exato hoje.</p>

          <p>Essa é a única coisa que um intermediário não consegue falsificar, porque é física. Uma trading company não consegue conjurar um molde de injeção com o seu logotipo na cavidade. Não consegue produzir os registros de defeitos do controle de qualidade do mês passado com números de série reais. Não consegue caminhar uma câmera do portão até uma linha de produção em funcionamento porque não possui uma linha de produção. Todo o resto — documentos, fotos, vídeos, showrooms, amostras — pode ser comprado, alugado ou photoshopado. A linha de produção física não pode.</p>

          <p>Então, quando você auditar, ignore o polimento. Ignore o escritório bonito e o bom inglês nos e-mails e o discurso de vendas suave. Isso é marketing. Concentre-se em uma pergunta, repetida de vinte maneiras diferentes: <em>você consegue provar que fabrica este produto você mesmo?</em> O resto deste guia são essas vinte perguntas.</p>

          {/* ─── Seção 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">O checklist de 20 pontos: o que verificar antes de enviar dinheiro</h2>

          <p>Este é o checklist que entrego a compradores de primeira viagem antes de transferirem um depósito. Está organizado em cinco grupos — instalações, equipamentos, certificações, amostras e controle de qualidade — porque um fornecedor pode falsificar qualquer um dos grupos, mas falsificar os cinco de uma vez é quase impossível. Passe por todos os pontos. Se mais de três reprovarem, vá embora.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Instalações e localização (pontos 1–4)</h3>

          <p><strong>1. A licença comercial corresponde ao endereço físico.</strong> Peça a licença comercial (营业执照) e verifique o endereço registrado, o representante legal e — criticamente — o escopo comercial. O escopo deve dizer "fabricação" (制造), não "comércio" ou "atacado" (贸易/批发). Uma empresa registrada como trading company nunca se tornará uma fábrica, não importa o que o site alegue. Faça a verificação cruzada do endereço no registro nacional.</p>

          <p><strong>2. O tamanho da fábrica faz sentido para a alegação.</strong> Uma fábrica de óculos de sol integrada de verdade — injeção, tamboreamento, pintura e montagem sob o mesmo teto — precisa de pelo menos 1.500–3.000 m². Se um fornecedor alega produção interna completa e o endereço é um escritório de 200 m² em uma torre comercial de Shenzhen, a conta não fecha. Pergunte a área total e o número de funcionários, depois se pergunte se essa pegada consegue conter fisicamente as máquinas que ele alega operar.</p>

          <p><strong>3. Caminhada ao vivo pelo chão de fábrica, não um vídeo gravado.</strong> Insista em uma videochamada ao vivo em que eles caminhem pelo chão de fábrica desde o portão de entrada. Peça que escrevam a data de hoje e seu nome em um quadro branco e o segurem diante da câmera primeiro. Um vídeo gravado é reutilizável e não significa nada; uma caminhada ao vivo com um quadro branco datado é difícil de encenar. Se a conexão estiver "ruim" toda santa vez, essa é a sua resposta.</p>

          <p><strong>4. Eles ocupam o prédio que mostram.</strong> Pergunte de quem é o nome no contrato de aluguel ou na escritura. O truque do showroom alugado por hora é real: um intermediário reserva um espaço de oficina compartilhado por uma tarde, o encena com amostras e faz três tours de compradores seguidos. O contrato de aluguel de uma fábrica real tem o nome da fábrica, e eles mostram as contas de luz ou o registro do imóvel sem hesitar.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Equipamentos e ferramental (pontos 5–8)</h3>

          <p><strong>5. Máquinas de moldagem por injeção — quantidade e tonelagem.</strong> Se suas armações são injetadas (TR90, policarbonato, nylon, acetato-injetado com aparência), a fábrica deve possuir máquinas de moldagem por injeção, normalmente de 80–250 toneladas. Pergunte quantas, de qual marca (Haitian, Chen Hsong, etc.) e quantas estão em operação. Sem máquinas de injeção significa sem armações injetadas internas, ponto final.</p>

          <p><strong>6. O molde do SEU modelo de armação.</strong> Este é o pedido mais revelador de toda a lista. Peça fotos do molde de injeção real da sua armação, incluindo o número de cavidades. Um molde de 4 cavidades produz cerca de 1.500 armações por dia. Se o fornecedor possui o molde, ele o fotografa imediatamente. Se possui o seu design mas não o molde, é um trader. E sempre confirme quem paga pelo molde e quem o possui quando o pedido termina — isso está escrito em todo contrato OEM sério.</p>

          <p><strong>7. Máquinas CNC para acetato.</strong> Armações de acetato são cortadas de chapa, não injetadas. Se um fornecedor alega fabricar armações de acetato e não tem roteadores CNC ou fresadoras, está comprando armações de acetato prontas de Wenzhou e revendendo. Peça para ver o CNC cortando o seu formato de acetato e peça o arquivo CAD da sua armação — uma fábrica real pode enviar o arquivo .dxf ou .stp do seu próprio modelo em um dia.</p>

          <p><strong>8. Equipamentos de acabamento.</strong> Uma fábrica completa também tem a linha de acabamento: barris de tamboreamento para polimento, cabines de pintura por spray, linha de revestimento UV, gravação a laser e tampografia para logotipos. Se terceirizam pintura ou gravação a laser, isso não é automaticamente desqualificante — muitas boas fábricas fazem isso — mas devem saber nomear o subcontratado e mostrar os registros de inspeção de recebimento quando as peças voltam.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Certificações e conformidade (pontos 9–12)</h3>

          <p><strong>9. ISO 9001 — verificada, não emoldurada.</strong> Peça o número do certificado e o nome do órgão certificador, depois procure no banco de dados público do órgão. Um certificado ISO emoldurado que não está no registro não vale nada. Um ISO 9001 válido diz que a fábrica tem processos de qualidade documentados — não diz que os segue, mas a ausência dele diz algo importante.</p>

          <p><strong>10. Relatório de teste CE para EN ISO 12312-1.</strong> Se você vende na UE, seus óculos de sol precisam de marcação CE respaldada por um relatório de teste real mostrando proteção UV400, qualidade da lente e segurança da armação. Peça o número do relatório e o laboratório emissor (TÜV, SGS, Intertek, etc.), depois verifique com o laboratório. Um relatório CE falsificado é um dos documentos falsificados mais comuns do setor.</p>

          <p><strong>11. Registro de estabelecimento na FDA (mercado dos EUA).</strong> Óculos de sol são um dispositivo médico Classe I nos EUA, o que significa que a fábrica deve ter um registro de estabelecimento na FDA. Você pode verificar isso no banco de dados público de registro de estabelecimentos da FDA em menos de cinco minutos. Se a fábrica disser "aprovado pela FDA" — cuidado com essa frase; a FDA registra estabelecimentos e libera dispositivos, não "aprova" óculos de sol. Linguagem descuidada sobre a FDA já é um sinal de alerta por si só.</p>

          <p><strong>12. Relatórios de teste UV400 e de lente — em nível de lote.</strong> Este é o único certificado que de fato protege os olhos do seu cliente, e o que a maioria dos compradores nunca pede. Todo lote de produção de lentes deve vir com um relatório de espectrofotômetro mostrando a transmitância de UVA e UVB. Peça o relatório do lote mais recente, não um teste de tipo de cinco anos atrás. Uma fábrica que faz controle de qualidade de lente de verdade produz isso em minutos.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Amostras e pré-produção (pontos 13–16)</h3>

          <p><strong>13. Amostra de pré-produção selada e assinada.</strong> Antes da produção em massa, você aprova uma amostra de pré-produção (PPS). Essa amostra deve ser assinada e datada por ambas as partes, selada e armazenada como a "amostra de referência" que a produção em massa deve igualar. Se a fábrica não oferece a etapa de PPS, ou a trata como opcional, trate como reprovação. Sem amostra de referência, não há base legal para uma disputa de qualidade depois.</p>

          <p><strong>14. Ficha técnica do material, não adjetivos.</strong> "Plástico de alta qualidade" não é um material. Obtenha a ficha técnica real: qual chapa de acetato (ex.: Mazzucchelli M49 ou equivalente), qual classe de TR90, qual resina de policarbonato e fornecedor. A ficha técnica tem fabricante, número de classe e propriedades físicas. Uma fábrica que não consegue produzir uma ficha técnica de material está comprando plástico misterioso.</p>

          <p><strong>15. Correspondência de cor com amostra física.</strong> Cor é onde pedidos em volume vão morrer. Aprove cores contra um conjunto de amostras físicas e fixe um código Pantone ou de cor de fábrica. Depois especifique a fonte de luz sob a qual a correspondência é julgada (luz do dia D65 é o padrão). "Vai ficar perto da amostra" não é uma especificação de cor. Obtenha o código exato por escrito.</p>

          <p><strong>16. Especificação de ferragem e dobradiça.</strong> A dobradiça é a primeira coisa a falhar em óculos baratos, e compradores nunca pensam nisso. Especifique o tipo de dobradiça (barril, mola ou flex), o torque do parafuso e se a dobradiça é de aço inox chapeado ou metal base. Peça o fornecedor da dobradiça e a especificação do chapeamento. Uma dobradiça de $0,02 em uma armação de $4 é como você obtém uma taxa de devolução de 15%.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Processo de controle de qualidade e produção (pontos 17–20)</h3>

          <p><strong>17. Registros de controle de qualidade da última produção, não uma promessa.</strong> Peça os relatórios de inspeção AQL da produção mais recente — as contagens reais de defeitos, o plano de amostragem e a destinação. Toda fábrica real tem isso. Um fornecedor que responde "verificamos tudo 100%" sem mostrar um único registro é um trader com um roteiro.</p>

          <p><strong>18. Padrão AQL por escrito.</strong> Para óculos de sol, o padrão do setor é AQL 2.5 em defeitos maiores e 4.0 em menores, amostragem nível II. Faça a fábrica se comprometer com isso no pedido de compra. Se hesitar em colocar um padrão de defeito por escrito, está planejando enviar o que sair da linha.</p>

          <p><strong>19. Inspeção em linha vs final.</strong> Uma fábrica competente faz controle de qualidade em várias etapas — inspeção de material recebido, verificações em linha após a injeção e após a pintura, e uma inspeção AQL final antes do empacotamento. Peça para te guiarem pelos pontos de controle de qualidade na chamada ao vivo. "Verificamos no final" é como uma fábrica acaba com 8.000 pares de parafusos soltos descobertos só depois de chegarem ao seu armazém.</p>

          <p><strong>20. Capacidade de embalagem e rotulagem.</strong> Embalagem pronta para varejo — código de barras, etiqueta pendurada, marcação de caixa e rótulos de conformidade — é onde muitas "fábricas" silenciosamente entregam para um escritório de comércio. Confirme que a fábrica faz a própria embalagem e consegue produzir sua caixa com marcações corretas e um código de barras verificável. Se a embalagem acontece "no nosso parceiro", você acabou de encontrar o intermediário.</p>

          {/* ─── Seção 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Sinais de alerta: sinais de que você está lidando com uma trading company, não uma fábrica</h2>

          <p>Entre 60% e 70% das "fábricas" que anunciam OEM de óculos de sol no Alibaba e no Made-in-China são trading companies. Algumas são honestas — uma boa trading company consegue um preço melhor do que você negociaria sozinho. Mas a maioria não é honesta, e a diferença entre uma armação de $6 e uma de $1,50 que desmonta é se a pessoa que você está pagando controla de fato a produção. Aqui estão os sinais de alerta que ensino meus clientes a reconhecer.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">A incompatibilidade endereço-telefone</h3>

          <p>Wenzhou é a capital do acetato da China. Xiamen e Taizhou dominam armações de metal e esportivas. Shenzhen é onde vivem os escritórios de comércio. Então, quando uma "fábrica" lista endereço em Shenzhen mas telefone de Wenzhou — ou endereço em Wenzhou com conta bancária em Hong Kong — você quase certamente está lidando com um intermediário. Peça o telefone fixo e ligue. Pergunte quem atende e em qual cidade. Uma ligação de dois minutos revela mais do que dez páginas de um site.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">"Podemos fazer qualquer coisa"</h3>

          <p>Uma fábrica real faz o que suas máquinas conseguem fazer. Ela tem 200–500 SKUs em que se especializa e dirá "fazemos acetato e armações injetadas, mas metal não é nosso forte". Uma trading company diz sim para tudo — acetato, metal, madeira, titânio, infantil, esportivo, prescrição. "Podemos fazer qualquer coisa" não é uma declaração de capacidade; é uma admissão de que o orador não possui máquinas específicas e terceirizará o que você pedir para quem for mais barato esta semana.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O prazo de amostra impossível</h3>

          <p>Ferramental OEM personalizado leva tempo. Um molde de injeção novo para o design da sua armação leva 15–30 dias. Programação CNC e corte de um novo formato de acetato leva 1–2 semanas. Então, quando uma "fábrica" promete uma amostra personalizada em 3–5 dias, não está fabricando uma amostra para você — está comprando uma armação existente e colando seu logotipo. Fábricas reais citam prazos reais e recuam quando você pede o impossível. Traders nunca recuam; só dizem sim e resolvem a mentira depois.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">As fotos que estão em toda parte</h3>

          <p>Faça busca reversa de imagem nas fotos de produto da vitrine deles. Se a mesma armação aparece sob 50 nomes de empresas diferentes, nenhuma dessas empresas a fabricou — as fotos da fábrica real vazaram e todo trader do ecossistema as usa. O mesmo vale para as fotos de "nossa fábrica" no site: se a foto é uma imagem de banco de imagens de uma sala limpa genérica, ou aparece em uma dúzia de sites, não é a fábrica deles. As fotos de uma fábrica real são levemente bagunçadas, levemente datadas e exclusivamente deles.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O MOQ suspeitosamente baixo</h3>

          <p>Fábricas OEM reais têm mínimos reais. Para armações personalizadas com seu próprio molde, o MOQ é normalmente 1.000–3.000 peças por cor. Para embalagem personalizada em armações de estoque, talvez 500. Uma trading company aceita feliz 100 peças porque não está fabricando nada — está comprando de outro e adicionando margem. Se o MOQ é baixo e o preço é baixo e o prazo é curto, você não está conseguindo uma oferta; está conseguindo um trader.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O preço que não pode ser real</h3>

          <p>Faça a conta do material. Uma boa chapa de acetato, um par de lentes CR-39 ou policarbonato de qualidade com UV400, dobradiças decentes e trabalho de acabamento — só o custo de material de uma armação decente fica em torno de $1,20–1,50. Então, quando alguém oferece uma armação de "alta qualidade" a $0,80 FOB, uma de duas coisas é verdade: os materiais não são o que alegam, ou alguém na cadeia está perdendo dinheiro (e não serão eles). Um preço abaixo do custo do material não é competitivo; é evidência de mentira.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Os termos de pagamento que gritam trader</h3>

          <p>Fábricas reais trabalham com 30% de depósito e 70% de saldo antes do envio, via T/T — às vezes com carta de crédito para pedidos grandes. Elas vendem capacidade de produção e têm fluxo de caixa. Uma trading company, em contraste, precisa do seu dinheiro antes de poder pagar a fábrica real, então pressiona por 100% antecipado ou empurra você para canais sem garantia. Desconfie de qualquer um que exija 100% de pré-pagamento e não consiga mostrar uma máquina. E nunca — nunca — envie um depósito para uma conta pessoal ou uma conta com nome diferente da empresa na licença.</p>

          {/* ─── Seção 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Como conduzir a auditoria: remota vs presencial vs terceirizada</h2>

          <p>Você tem três formas de conduzir essa auditoria, e elas respondem a perguntas diferentes a custos diferentes. Aqui está o panorama honesto de quem já viu as três falharem e as três terem sucesso.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Método</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Custo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">O que detecta</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Melhor para</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Auditoria remota</strong></td>
                  <td className="border border-gray-300 px-4 py-2">$0 + seu tempo</td>
                  <td className="border border-gray-300 px-4 py-2">~60% dos golpes (verificação de licença, caminhada ao vivo, fotos de molde, registros de CQ)</td>
                  <td className="border border-gray-300 px-4 py-2">Todo pedido — faça primeiro, sempre</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Visita presencial</strong></td>
                  <td className="border border-gray-300 px-4 py-2">$1.500–3.000 (voo, hotel, tradutor)</td>
                  <td className="border border-gray-300 px-4 py-2">~90% dos golpes (você toca o molde, sente o cheiro da linha de pintura, observa o CQ)</td>
                  <td className="border border-gray-300 px-4 py-2">Pedidos acima de $20.000 ou parceria de longo prazo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Terceirizada (SGS/BV/TÜV)</strong></td>
                  <td className="border border-gray-300 px-4 py-2">$400–800 por homem-dia</td>
                  <td className="border border-gray-300 px-4 py-2">Conformidade documentada, mas sem conhecimento de mercado ou produto</td>
                  <td className="border border-gray-300 px-4 py-2">Quando um comprador de varejo exige uma auditoria específica (BSCI, SMETA, etc.)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">A auditoria remota — grátis, rápida e inegociável</h3>

          <p>Uma auditoria remota custa apenas uma hora e um tom firme. Ela pega os golpes preguiçosos — aqueles em que a "fábrica" não consegue produzir uma licença, uma foto de molde ou uma caminhada ao vivo. Execute o checklist de 20 pontos por vídeo: licença comercial diante da câmera, quadro branco datado, caminhada ao vivo, fotos de molde, registros de CQ do mês passado. Uma auditoria remota não substitui as outras duas, mas é um filtro. Qualquer fornecedor que reprove nela nunca deve receber um centavo. Qualquer fornecedor que passe merece uma conversa.</p>

          <p>O erro mais comum que compradores cometem remotamente é ser educado demais. Eles perguntam "você poderia talvez me mostrar a fábrica?" e aceitam um PDF brilhante em troca. Não faça isso. Seja específico e adversário — educadamente. "Envie-me uma foto do molde de injeção da armação EV-204 com o número de cavidades, e o relatório AQL da sua última produção, em 24 horas." Pedidos específicos não podem ser satisfeitos por material de marketing. Pedidos vagos podem.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">A visita presencial — quando o dinheiro justifica a viagem</h3>

          <p>Nada supera estar no chão de fábrica. Você sente o cheiro da linha de pintura, ouve as máquinas de injeção, observa a equipe de CQ rejeitar um par ruim em tempo real e aperta a mão da pessoa que de fato assina o cronograma de produção. Essa viagem custa $1.500–3.000 quando você soma voos, hotéis e tradutor, então só faz sentido quando o tamanho do pedido justifica — minha regra de ouro é pedidos acima de $20.000, ou qualquer fornecedor que você planeje usar por anos.</p>

          <p>Quando for, leve o checklist. Não deixe que controlem o itinerário — uma trading company organiza um dia de reuniões, refeições e showrooms e mantém você longe de qualquer chão de produção real. Você quer ver três coisas com seus próprios olhos: o molde do seu produto, as máquinas fabricando a sua categoria de produto e os registros de CQ do último lote. Se o "tour da fábrica" nunca mostra de fato uma máquina funcionando, você visitou um escritório de vendas.</p>

          <p>E leve alguém que fale o idioma e o setor. Um tradutor genérico concorda com as alegações de um gerente de fábrica e não sabe que uma "máquina de injeção de 250 toneladas" não consegue produzir uma armação de 20 gramas na taxa que o fornecedor acabou de citar. Você quer alguém que saiba a diferença entre uma linha de produção real e uma encenada.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">A auditoria terceirizada — defensável, mas limitada</h3>

          <p>Empresas como SGS, Bureau Veritas e TÜV Rheinland auditam uma fábrica e entregam um relatório padronizado — instalações, força de trabalho, documentação, conformidade. Isso é genuinamente valioso em uma situação específica: quando um grande comprador de varejo exige um padrão de auditoria específico antes de estocar sua marca. Auditorias BSCI, SMETA e SEDEX existem porque varejistas precisam de um rastro de papel defensável sobre conformidade trabalhista e ambiental, e um relatório terceirizado é a moeda desse mundo.</p>

          <p>Mas entenda o que uma auditoria terceirizada não faz. O auditor verifica conformidade contra um checklist, não se a fábrica faz bons óculos de sol, nem se o preço é justo, nem se o molde da sua armação existe de fato. Um auditor confirma que a fábrica tem um extintor e uma política de RH e não dirá que a máquina de injeção está rodando a armação do seu concorrente, não a sua. Auditorias terceirizadas respondem "esta é uma fábrica em conformidade", não "esta é a fábrica certa para mim".</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Minha recomendação, em uma frase</h3>

          <p>Execute a auditoria remota em todo fornecedor, viaje presencialmente quando o pedido passar de $20.000 ou o relacionamento se tornar de longo prazo, e envolva um terceiro apenas quando um relatório de conformidade específico for o portão para uma grande conta de varejo. E nunca, em hipótese alguma, transfira dinheiro para alguém que reprovou na auditoria remota porque "parecia legal na videochamada". Legal é grátis. Uma fábrica real é verificável.</p>

          {/* ═══════ SEÇÃO DE FAQ ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Perguntas frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Pronto para pular os intermediários?</h2>
            <p className="text-xl mb-6 opacity-90">Envie sua especificação. Eu te guio por uma fábrica real em uma chamada ao vivo — o molde, as máquinas e os registros de CQ do mês passado — para que você possa nos avaliar com exatamente este checklist antes de transferir um único dólar.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Obter um orçamento grátis
            </Link>
          </div>

          {/* ═══════ CONTEÚDO RELACIONADO ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Mais do chão de fábrica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/find-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como encontrar um fabricante de óculos de sol</h3>
                <p className="text-gray-600 text-sm">Onde procurar, o que perguntar e como montar uma lista curta sem ser enganado.</p>
              </Link>
              <Link href="/blog/how-to-choose-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Como escolher um fabricante de óculos de sol</h3>
                <p className="text-gray-600 text-sm">Os critérios de seleção que separam uma fábrica real de um site polido.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Fale conosco</h3>
                <p className="text-gray-600 text-sm">Obtenha um orçamento para seu pedido personalizado de óculos de sol no atacado.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
