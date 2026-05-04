import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi è EyeView | Produttore di Occhiali dal 2006 | Fabbrica OEM e ODM',
  description: 'EyeView Sunglasses è un produttore leader di occhiali OEM/ODM fondato nel 2006. Oltre 500 clienti in 50+ paesi. Certificazioni CE, FDA, ISO 9001. Prezzi diretti di fabbrica.',
  keywords: 'produttore occhiali da sole, fabbrica occhiali, azienda OEM occhiali, fornitore occhiali Cina, chi è EyeView, produttore eyewear',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/chi-siamo',
    languages: {
      'en': 'https://eyeviewsunglasses.com/about',
      'it': 'https://eyeviewsunglasses.com/it/chi-siamo',
    },
  },
}

export default function AboutPageIt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EyeView Sunglasses",
          "url": "https://eyeviewsunglasses.com",
          "logo": "https://eyeviewsunglasses.com/logo.png",
          "foundingDate": "2006",
          "founder": { "@type": "Person", "name": "Jacky Chen" },
          "description": "Produttore leader OEM/ODM di occhiali da sole con oltre 500 clienti in 50+ paesi. Fabbrica certificata CE, FDA, ISO 9001.",
          "address": { "@type": "PostalAddress", "addressCountry": "CN" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100, "maxValue": 200 },
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Chinese", "Italian"] }
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chi è EyeView Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da un laboratorio di due persone nel 2006 a una fabbrica moderna che serve oltre 500 brand in tutto il mondo. Ecco chi siamo e perché facciamo quello che facciamo.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">La Nostra Storia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EyeView è nata nel 2006 in un laboratorio che, onestamente, non era molto più grande di un garage per due auto. C&apos;ero io — Jacky Chen — e un tecnico, a lucidare montature in acetato e assemblare cerniere a mano. La nostra prima &quot;produzione&quot; fu di 200 paia per un negozio di surf a Sydney. Ho impacchettato ogni scatola personalmente.
                </p>
                <p>
                  Entro il 2010, avevamo superato il garage e ci siamo trasferiti nel nostro primo vero spazio di fabbrica. Abbiamo aggiunto lo stampaggio a iniezione, comprato la nostra prima macchina CNC e assunto un piccolo team di controllo qualità. Il negozio di surf a Sydney? Sono ancora nostri clienti. I loro ordini sono un po&apos; più grandi ora.
                </p>
                <p>
                  Oggi gestiamo uno stabilimento di 5.000 m² con 5 linee di produzione, oltre 150 dipendenti e la capacità di produrre 10.000 paia al giorno. Abbiamo servito oltre 500 brand in 50+ paesi — dalle startup Kickstarter che ordinano 100 paia alle catene retail che ne ordinano 50.000. Il laboratorio è ormai un ricordo, ma la mentalità no: ogni paio viene ancora ispezionato come se dovesse andare a quel negozio di surf a Sydney.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-4">🏭</span>
                <span className="text-primary-600 font-medium">Dal 2006</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">La Nostra Missione</h2>
              <p className="text-gray-600">
                Rendere la produzione di occhiali da sole di qualità accessibile a brand di tutte le dimensioni. Che tu sia un imprenditore solitario con un disegno su un tovagliolo o una catena retail che scala a 100.000 unità, meriti un partner produttivo che tratti il tuo brand come il proprio. Nessun budget minimo richiesto. Nessuna arroganza. Solo buon prodotto e comunicazione onesta.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">La Nostra Visione</h2>
              <p className="text-gray-600">
                Essere la fabbrica che la prossima generazione di grandi brand di occhiali indicherà dicendo: &quot;Loro ci hanno aiutato a partire.&quot; Abbiamo già aiutato il lancio di centinaia di brand. Vogliamo aiutarne migliaia — e continuare a far crescere quelli che abbiamo già lanciato. Il tuo successo è il nostro miglior marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">EyeView in Numeri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">19+</div>
              <div className="text-primary-100">Anni di Attività</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Clienti Brand</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Paesi Serviti</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Paia Prodotti / Anno</div>
            </div>
          </div>
        </section>

        {/* Factory Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Capacità Produttive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Il nostro stabilimento è costruito per la flessibilità — piccole tirature e grandi ordini, OEM e ODM, design semplici e ingegneria complessa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard icon="⚙️" title="5 Linee di Produzione" description="Linee dedicate per montature in acetato, metallo, TR90/iniezione e materiali misti. Ogni linea ottimizzata per il suo tipo di materiale." />
            <CapabilityCard icon="📦" title="10.000 Paia / Giorno" description="Capacità produttiva giornaliera su tutte le linee. Possiamo aumentare fino a 15.000/giorno durante l'alta stagione con turni straordinari." />
            <CapabilityCard icon="📐" title="Stabilimento di 5.000 m²" description="Pavimento di fabbrica moderno con zone separate per taglio, assemblaggio, lucidatura, controllo qualità e imballaggio." />
            <CapabilityCard icon="🔬" title="Laboratorio QC Interno" description="Test di trasmissione UV, test d'impatto, test di ciclo cerniere e verifica dimensionale — tutto eseguito internamente." />
            <CapabilityCard icon="🎨" title="400+ Design ODM" description="Catalogo di montature pronte per il branding: aviatori, wayfarer, occhio di gatto, sportivi, rotondi, oversize e bambini." />
            <CapabilityCard icon="🛠️" title="Capacità OEM Completa" description="Dal tuo file CAD al prodotto finito. Creazione stampi, prototipazione CNC e campionatura prima della produzione in serie." />
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificazioni e Conformità</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ogni prodotto che spediamo rispetta gli standard internazionali di sicurezza e qualità. Non sono solo badge — sono requisiti che prendiamo molto seriamente.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <CertCard name="CE" description="Conformità Europea" link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en" />
            <CertCard name="FDA" description="Conformità USA" link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses" />
            <CertCard name="UV400" description="Protezione UV 100%" />
            <CertCard name="ISO 9001" description="Gestione Qualità" link="https://www.iso.org/iso-9001-quality-management.html" />
            <CertCard name="ANSI Z80.3" description="Standard Ottico USA" />
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Le Persone Dietro il Prodotto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Siamo oltre 150 persone che si dedicano a creare ottimi occhiali da sole. Ecco alcuni dei volti con cui lavorerai direttamente.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamCard initials="JC" name="Jacky Chen" role="Fondatore e CEO" bio="Ha fondato EyeView nel 2006 da un garage. 20 anni di esperienza nella produzione di occhiali. Ispeziona ancora i campioni personalmente." />
            <TeamCard initials="LW" name="Lisa Wang" role="Responsabile Design" bio="Ex designer in una grande casa di occhiali italiana. Si è unita a EyeView nel 2014. Guida il team di 8 designer e gestisce tutti i progetti OEM." />
            <TeamCard initials="DZ" name="David Zhang" role="Responsabile Produzione" bio="15 anni sul campo in fabbrica. Supervisiona tutte e 5 le linee di produzione e oltre 80 operai. Noto per la sua ossessione per l'efficienza." />
            <TeamCard initials="SC" name="Sarah Chen" role="Direttrice Controllo Qualità" bio="Formata in test ottici in un laboratorio svizzero. Gestisce il reparto QC con un obiettivo di tasso difetti dello 0,5%. Nulla viene spedito senza la sua approvazione." />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cosa Dicono i Nostri Clienti</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard quote="Abbiamo iniziato con 200 paia ODM come test. Tre anni dopo, ordiniamo 5.000 paia OEM personalizzati a trimestre. EyeView è cresciuta con noi — non ci hanno mai spinto a ordinare più di quanto fossimo pronti." name="Rachel M." title="Fondatrice, Coastal Shade Co." location="Melbourne, Australia" />
            <TestimonialCard quote="Ero stato fregato da due altre fabbriche prima di trovare EyeView. La differenza è stata immediata — il team di Jacky ha davvero ascoltato ciò di cui avevo bisogno invece di propormi solo l'opzione più economica. La qualità è stata costante in 12 ordini." name="Marcus T." title="CEO, Elevate Eyewear" location="Atlanta, USA" />
            <TestimonialCard quote="Il processo dei campioni mi ha convinto. Hanno inviato cinque paia in materiali diversi così potevo confrontarli fianco a fianco. Nessun'altra fabbrica lo ha offerto. Collaboriamo da quattro anni e non ho nulla da lamentare." name="Henrik S." title="Buyer, Nordic Optics" location="Stoccolma, Svezia" />
            <TestimonialCard quote="Come startup senza esperienza nel settore occhiali, mi aspettavo di essere ignorato dalle fabbriche vere. EyeView ha trattato il mio primo ordine di 100 pezzi con la stessa serietà dei loro grandi clienti. Quella lealtà è reciproca — ora siamo uno dei loro account più grandi." name="Priya K." title="Fondatrice, Dusk & Dawn Eyewear" location="Toronto, Canada" />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">I Nostri Valori</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard icon="🎯" title="Qualità Senza Scuse" description="Ogni paio viene ispezionato. Ogni lente viene testata per i UV. Ogni cerniera viene sottoposta a cicli di prova. Non spediamo prodotti su cui non metteremmo il nostro nome." />
            <ValueCard icon="🤝" title="Partnership, Non Transazioni" description="L'80% del nostro fatturato proviene da clienti abituali. Preferiamo guadagnare il tuo quinto ordine con un servizio eccellente piuttosto che spremere il massimo margine dal primo." />
            <ValueCard icon="💬" title="Parlare Chiaro" description="Se qualcosa richiede 60 giorni, diciamo 60 giorni — non 30. Se un materiale non funziona per il tuo design, te lo diciamo prima che sprechi soldi per uno stampo. Nessuna sorpresa." />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Vuoi Vedere Cosa Possiamo Fare per il Tuo Brand?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Che tu stia lanciando la tua prima linea o facendo crescere un brand esistente, ci piacerebbe parlarne. Nessun obbligo, nessuna pressione — solo una conversazione onesta su ciò che è possibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/it/contatti" className="btn-primary">Contattaci</Link>
            <Link href="/it/prodotti" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">Sfoglia i Prodotti</Link>
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
    return (<a href={link} target="_blank" rel="noopener" className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow block">{content}</a>)
  }
  return (<div className="bg-white rounded-xl p-6 text-center shadow">{content}</div>)
}

function TeamCard({ initials, name, role, bio }: { initials: string; name: string; role: string; bio: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">{initials}</div>
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
