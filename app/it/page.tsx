import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: {
    absolute: 'Produttore di Occhiali da Sole all\'Ingrosso | Fabbrica OEM di Occhiali Personalizzati - EyeView',
  },
  description: 'EyeView è un produttore leader di occhiali da sole all\'ingrosso con servizi OEM e ODM. Oltre 15 anni di esperienza, più di 500 clienti globali. Richiedi il tuo preventivo gratuito oggi.',
  openGraph: {
    title: 'Produttore di Occhiali da Sole all\'Ingrosso | Fabbrica OEM - EyeView',
    description: 'EyeView è un produttore leader di occhiali da sole all\'ingrosso con servizi OEM e ODM. Oltre 15 anni di esperienza, più di 500 clienti globali.',
    type: 'website',
    locale: 'it_IT',
    url: 'https://eyeviewsunglasses.com/it',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it',
    languages: {
      'en': 'https://eyeviewsunglasses.com',
      'it': 'https://eyeviewsunglasses.com/it',
    },
  },
};

const stats = [
  { number: '15+', label: 'Anni di Esperienza', emoji: '🏭' },
  { number: '500+', label: 'Clienti Globali', emoji: '🌍' },
  { number: '1M+', label: 'Paia Prodotti', emoji: '🕶️' },
  { number: '100%', label: 'Qualità Garantita', emoji: '✅' },
];

const features = [
  {
    emoji: '🎨',
    title: 'Personalizzazione Completa',
    description: 'Dal design della montatura al colore delle lenti, dall\'incisione del logo al packaging personalizzato — realizziamo la tua visione unica di occhiali da sole con capacità complete di produzione OEM e ODM.',
  },
  {
    emoji: '💰',
    title: 'Prezzi Competitivi di Fabbrica',
    description: 'Come produttore diretto con il nostro stabilimento, eliminiamo i costi degli intermediari. Prezzi all\'ingrosso a partire da $1,50 al paio con sconti per grandi quantità.',
  },
  {
    emoji: '⚡',
    title: 'Consegna Rapida',
    description: 'Il nostro processo produttivo ottimizzato consegna campioni in 5-7 giorni e ordini in massa in 15-25 giorni. Ordini urgenti disponibili per lanci e collezioni stagionali.',
  },
  {
    emoji: '🔒',
    title: 'Controllo Qualità Premium',
    description: 'Ogni paio supera una rigorosa ispezione di qualità a 6 punti. I nostri occhiali rispettano gli standard internazionali tra cui FDA, CE, UV400 e certificazione ANSI Z80.3.',
  },
  {
    emoji: '📦',
    title: 'Ordine Minimo Basso',
    description: 'Inizia con soli 50 pezzi per modello — perfetto per nuovi brand che testano il mercato, boutique e campagne promozionali. Nessun impegno di inventario massiccio.',
  },
  {
    emoji: '🌍',
    title: 'Spedizione e Logistica Globale',
    description: 'Spediamo in oltre 60 paesi tramite DHL, FedEx, UPS e trasporto marittimo. Consegna porta a porta con documentazione doganale completa e tracciamento in tempo reale.',
  },
];

const products = [
  { name: 'Occhiali da Sole Aviatore', href: '/it/prodotti/aviatore/', emoji: '✈️', description: 'Aviatori classici con montatura in metallo e lenti a goccia. Perfetti per collezioni all\'ingrosso di moda.' },
  { name: 'Occhiali da Sole Wayfarer', href: '/it/prodotti/wayfarer/', emoji: '🎸', description: 'Iconici wayfarer in acetato. Lo stile più venduto per retail e campagne promozionali.' },
  { name: 'Occhiali da Sole Occhio di Gatto', href: '/it/prodotti/occhio-di-gatto/', emoji: '😺', description: 'Montature occhio di gatto di tendenza per il mercato della moda femminile. Design audaci ed eleganti.' },
  { name: 'Occhiali da Sole Sportivi', href: '/it/prodotti/sportivo/', emoji: '🚴', description: 'Occhiali sportivi ad alte prestazioni con design avvolgente e lenti resistenti agli urti.' },
  { name: 'Occhiali da Sole Rotondi', href: '/it/prodotti/rotondo/', emoji: '🔵', description: 'Montature rotonde di ispirazione vintage dal fascino retrò. Popolari nei brand di moda e lifestyle.' },
  { name: 'Occhiali da Sole per Bambini', href: '/it/prodotti/bambini/', emoji: '👶', description: 'Occhiali sicuri, resistenti e colorati progettati per bambini dai 3 ai 12 anni.' },
  { name: 'Occhiali da Sole Polarizzati', href: '/it/prodotti/polarizzato/', emoji: '🌊', description: 'Lenti polarizzate premium che eliminano il riflesso. Essenziali per sport all\'aperto e acquatici.' },
  { name: 'Occhiali con Filtro Luce Blu', href: '/it/prodotti/luce-blu/', emoji: '💻', description: 'Occhiali di protezione digitale che filtrano la luce blu dannosa da schermi e dispositivi.' },
  { name: 'Occhiali da Sole Ecologici', href: '/it/prodotti/ecologico/', emoji: '🌱', description: 'Occhiali sostenibili in plastica oceanica riciclata, bambù e materiali bio-acetato.' },
  { name: 'Occhiali da Sole in Acetato', href: '/it/prodotti/acetato/', emoji: '🎨', description: 'Montature in acetato artigianali con pattern premium. Mazzucchelli italiano disponibile.' },
  { name: 'Occhiali da Sole TR90', href: '/it/prodotti/tr90/', emoji: '🏋️', description: 'Montature ultraleggere in nylon TR90 con flessibilità a memoria per sport e uso quotidiano.' },
];

const steps = [
  { step: '01', title: 'Richiesta e Consulenza', description: 'Condividi le tue esigenze — stile, quantità, personalizzazione e budget. Il nostro team offre consulenza esperta per aiutarti a scegliere i prodotti giusti per il tuo mercato.' },
  { step: '02', title: 'Design e Campionatura', description: 'Creiamo design dettagliati basati sulle tue specifiche. Ricevi campioni fisici in 5-7 giorni lavorativi per la tua revisione e approvazione prima della produzione in serie.' },
  { step: '03', title: 'Approvazione e Produzione', description: 'Una volta approvati i campioni, avviamo la produzione su larga scala. La nostra capacità gestisce ordini da 50 a oltre 100.000 pezzi con controllo qualità costante.' },
  { step: '04', title: 'Ispezione Qualità', description: 'Ogni lotto supera un\'ispezione di qualità completa a 6 punti che include test di protezione UV, durabilità delle cerniere, chiarezza delle lenti e allineamento delle montature.' },
  { step: '05', title: 'Spedizione e Consegna', description: 'Ci occupiamo di tutto: imballaggio, etichettatura e logistica. Scegli tra trasporto aereo express (5-7 giorni) o marittimo economico (20-30 giorni) con tracciamento completo e supporto doganale.' },
];

const faqs = [
  {
    question: 'Qual è l\'ordine minimo (MOQ) per occhiali da sole all\'ingrosso?',
    answer: 'Il nostro MOQ standard è di 50 pezzi per modello e combinazione di colore. Per i nuovi clienti che vogliono testare il mercato, offriamo pacchetti di avvio flessibili. Per ordini OEM personalizzati con incisione del logo o design unici, il MOQ può partire da 100-300 pezzi a seconda della complessità. Contattaci per requisiti specifici.',
  },
  {
    question: 'Quanto tempo ci vuole per produrre un ordine all\'ingrosso di occhiali da sole?',
    answer: 'I tempi di produzione variano in base alla dimensione dell\'ordine e al livello di personalizzazione. Gli ordini standard (design esistenti) vengono spediti in 15-20 giorni lavorativi. Gli ordini OEM personalizzati con nuovi design richiedono 20-30 giorni lavorativi inclusa la campionatura. La produzione urgente è disponibile a un costo aggiuntivo, riducendo i tempi a 10-15 giorni.',
  },
  {
    question: 'Offrite servizi di produzione OEM e ODM per occhiali da sole?',
    answer: 'Sì, forniamo sia servizi OEM (Original Equipment Manufacturing) che ODM (Original Design Manufacturing). Con l\'OEM, fornisci tu il design e noi produciamo. Con l\'ODM, il nostro team di design crea stili unici basati sulla direzione del tuo brand. Entrambe le opzioni includono posizionamento personalizzato del logo, packaging e etichettatura.',
  },
  {
    question: 'Quali certificazioni di qualità rispettano i vostri occhiali da sole?',
    answer: 'Tutti i nostri occhiali rispettano o superano gli standard internazionali di qualità tra cui protezione UV400 (bloccando il 99,9% dei raggi UVA e UVB), certificazione CE per i mercati europei, conformità FDA per gli Stati Uniti e standard ANSI Z80.3. Offriamo anche la certificazione EN ISO 12312-1 su richiesta.',
  },
  {
    question: 'Potete personalizzare gli occhiali con il nostro logo e packaging di marca?',
    answer: 'Assolutamente. Offriamo servizi di branding completi tra cui incisione laser del logo su montature e lenti, custodie stampate o incise personalizzate, panni in microfibra brandizzati, cartellini, etichette con codice a barre e packaging pronto per la vendita. Il nostro team di design può aiutare a creare un packaging che elevi l\'identità del tuo brand.',
  },
  {
    question: 'Quali tipi di lenti sono disponibili per ordini all\'ingrosso?',
    answer: 'Offriamo un\'ampia gamma di opzioni di lenti tra cui lenti standard UV400, lenti polarizzate (TAC e vetro), lenti fotocromatiche (transizione), lenti con filtro luce blu, lenti specchiate, lenti sfumate e montature predisposte per lenti graduate. Ogni tipo di lente è disponibile in molteplici colori e rivestimenti.',
  },
  {
    question: 'Effettuate spedizioni internazionali? Quali sono le opzioni di spedizione?',
    answer: 'Sì, spediamo in oltre 60 paesi in tutto il mondo. Le opzioni di spedizione includono DHL Express (3-5 giorni lavorativi), FedEx (3-7 giorni lavorativi), UPS (5-8 giorni lavorativi) e trasporto marittimo (20-35 giorni per ordini grandi). Gestiamo tutta la documentazione di esportazione e possiamo spedire DDP (Reso Sdoganato) o FOB secondo la tua preferenza.',
  },
  {
    question: 'Come posso iniziare con un ordine all\'ingrosso di occhiali da sole?',
    answer: 'Iniziare è semplice: 1) Contattaci via email a jacky@eyeviewsunglasses.com o WhatsApp al +86-18850281211 con le tue esigenze. 2) Il nostro team fornirà un preventivo dettagliato entro 24 ore. 3) Rivedi e approva i campioni. 4) Effettua il tuo ordine e noi ci occupiamo del resto. Accogliamo sia acquirenti alla prima esperienza che brand affermati.',
  },
];

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Come Ordinare Occhiali da Sole all\'Ingrosso da EyeView',
  description: 'Il nostro semplice processo in 5 passaggi rende facile ordinare occhiali da sole personalizzati all\'ingrosso, dalla richiesta iniziale alla consegna.',
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
      name: 'Richiesta e Consulenza',
      text: 'Condividi le tue esigenze — stile, quantità, personalizzazione e budget. Il nostro team offre consulenza esperta.',
      url: 'https://eyeviewsunglasses.com/it/contatti/',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design e Campionatura',
      text: 'Creiamo design dettagliati basati sulle tue specifiche. Ricevi campioni fisici in 5-7 giorni lavorativi.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Approvazione e Produzione',
      text: 'Una volta approvati i campioni, avviamo la produzione su larga scala con controllo qualità costante.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Ispezione Qualità',
      text: 'Ogni lotto supera un\'ispezione di qualità a 6 punti che include test UV, durabilità delle cerniere e chiarezza delle lenti.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Spedizione e Consegna',
      text: 'Ci occupiamo di imballaggio, etichettatura e logistica. Trasporto aereo express (5-7 giorni) o marittimo (20-30 giorni) con tracciamento completo.',
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eyeviewsunglasses.com/it' },
  ],
};

export default function HomePageIt() {
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
              Il Tuo <span className="text-yellow-300">Produttore di Occhiali da Sole all&apos;Ingrosso</span> e Fabbrica OEM di Fiducia
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              EyeView Sunglasses è un produttore leader di occhiali da sole all&apos;ingrosso con oltre 15 anni di esperienza nella produzione OEM e ODM. Aiutiamo brand, rivenditori e distributori in tutto il mondo a ottenere occhiali da sole personalizzati premium a prezzi competitivi diretti di fabbrica. Dagli aviatori classici alle montature occhio di gatto di tendenza, produciamo ogni stile con precisione e qualità.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/it/contatti/" className="inline-block bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                🕶️ Richiedi Preventivo Gratuito
              </Link>
              <Link href="/it/prodotti/" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
                Vedi Prodotti →
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché Scegliere EyeView come Produttore di Occhiali?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Come fabbrica di occhiali da sole consolidata, combiniamo esperienza produttiva, materiali di qualità e prezzi competitivi per offrire un valore eccezionale al tuo brand.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La Nostra Gamma di Occhiali da Sole all&apos;Ingrosso</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Esplora la nostra vasta collezione di stili di occhiali da sole all&apos;ingrosso. Ogni categoria è completamente personalizzabile con il tuo brand, opzioni lenti e modifiche alla montatura.
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
                  Scopri di Più →
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Come Ordinare Occhiali da Sole all&apos;Ingrosso</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Il nostro semplice processo in 5 passaggi rende facile ordinare occhiali personalizzati all&apos;ingrosso, dalla richiesta iniziale alla consegna a domicilio.
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
      <FAQSection faqs={faqs} title="Domande Frequenti sugli Occhiali da Sole all'Ingrosso" />

      {/* CTA */}
      <CTASection
        title="Pronto a Lanciare il Tuo Brand di Occhiali da Sole?"
        description="Ottieni il tuo preventivo gratuito oggi. Nessun minimo per la consulenza. Campioni disponibili in 5 giorni. Rispondiamo entro 24 ore."
        primaryText="Preventivo Gratuito"
        primaryHref="/it/contatti"
        secondaryText="Vedi Prodotti"
        secondaryHref="/it/prodotti"
      />
    </>
  );
}
