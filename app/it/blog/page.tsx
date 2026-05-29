import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog sull\'Industria degli Occhiali da Sole | Produzione e Branding',
  description: 'Conoscenze esperte da un produttore di occhiali da sole con 20 anni di esperienza. Guide OEM/ODM, tecnologia delle lenti, consigli di approvvigionamento e strategie per imprenditori.',
  keywords: 'blog occhiali da sole, industria eyewear, produzione occhiali, guida OEM occhiali, creare brand occhiali, guida lenti, trovare produttore',
  alternates: {
    canonical: '/it/blog',
    languages: {
      'en': '/blog',
      'it': '/it/blog',
    },
  },
}

const posts = [
  {
    slug: 'trovare-produttore-occhiali',
    title: 'Come Trovare un Produttore di Occhiali da Sole Affidabile nel 2026',
    excerpt: 'Un proprietario di fabbrica rivela dove trovare i produttori, come individuare gli intermediari su Alibaba, 10 criteri di valutazione e consigli di negoziazione dall\'altra parte del tavolo.',
    date: '28 aprile 2026',
    category: 'Approvvigionamento',
    readTime: '16 min di lettura',
    emoji: '🔍',
    featured: false,
  },
  {
    slug: 'guida-lenti-occhiali',
    title: 'Tipi di Lenti per Occhiali da Sole: Guida Completa 2026',
    excerpt: 'Policarbonato, CR-39, vetro o TAC? Grigio, marrone o a specchio? Polarizzate o no? Costi reali, confronti onesti e la strategia lenti per il tuo brand.',
    date: '25 aprile 2026',
    category: 'Tecnologia',
    readTime: '14 min di lettura',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM Occhiali da Sole: Qual è la Differenza? Guida Completa',
    excerpt: 'Dopo 3.000 conversazioni su OEM vs ODM, ecco la versione onesta -- costi reali, tempistiche reali e un framework decisionale che ti aiuta davvero a scegliere.',
    date: '20 aprile 2026',
    category: 'Produzione',
    readTime: '12 min di lettura',
    emoji: '🏭',
    featured: false,
  },
  {
    slug: 'creare-brand-occhiali',
    title: 'Come Creare il Tuo Brand di Occhiali da Sole: Guida Completa',
    excerpt: 'La guida completa dall\'idea alla prima vendita -- ricerca di mercato, approvvigionamento, branding, prezzi e marketing. Tutto quello che avrei voluto sapere quando ho iniziato nel 2006.',
    date: '28 marzo 2026',
    category: 'Business',
    readTime: '10 min di lettura',
    emoji: '🚀',
    featured: true,
  },
  {
    slug: 'confronto-materiali-montature',
    title: 'TR90 vs Acetato vs Metallo: Quale Materiale per la Montatura È Giusto?',
    excerpt: 'Dati reali sui costi, confronti di peso, test di resistenza e quale materiale funziona meglio per diverse strategie di brand.',
    date: '3 maggio 2026',
    category: 'Materiali',
    readTime: '14 min di lettura',
    emoji: '🔧',
    featured: false,
  },
  {
    slug: 'certificazione-fda-ce-occhiali',
    title: 'Certificazione FDA e CE per Occhiali da Sole: Guida alla Conformità',
    excerpt: 'Registrazione FDA, marcatura CE, test UV e standard ANSI -- tutto quello che serve per vendere legalmente negli USA, UE e nel mondo.',
    date: '4 maggio 2026',
    category: 'Conformità',
    readTime: '15 min di lettura',
    emoji: '📋',
    featured: false,
  },
  {
    slug: 'guida-importazione-occhiali',
    title: 'Come Importare Occhiali da Sole dalla Cina: Guida Completa 2026',
    excerpt: 'Approvvigionamento, spedizione, dazi doganali, controllo qualità e errori comuni da evitare -- dalla prospettiva di un proprietario di fabbrica cinese.',
    date: '4 maggio 2026',
    category: 'Importazione',
    readTime: '14 min di lettura',
    emoji: '🚢',
    featured: false,
  },
  {
    slug: 'packaging-personalizzato-occhiali',
    title: 'Packaging Personalizzato per Occhiali: Guida al Branding 2026',
    excerpt: 'Custodie rigide, pochette, scatole retail, cartellini -- ogni opzione con costi reali e consigli per un unboxing che fa la differenza.',
    date: '3 maggio 2026',
    category: 'Branding',
    readTime: '14 min di lettura',
    emoji: '📦',
    featured: false,
  },
  {
    slug: 'guida-rivestimenti-occhiali',
    title: 'Guida ai Rivestimenti: Specchio, Anti-Riflesso, Idrofobico e Altro',
    excerpt: 'Ogni tipo di rivestimento per lenti analizzato -- costi reali per paio e quali rivestimenti si combinano per massimizzare il valore.',
    date: '3 maggio 2026',
    category: 'Tecnologia',
    readTime: '13 min di lettura',
    emoji: '✨',
    featured: false,
  },
  {
    slug: 'tendenze-design-occhiali-2026',
    title: 'Tendenze Design Occhiali da Sole 2026: Cosa Si Vende Adesso',
    excerpt: 'Dati di vendita reali su cosa si muove -- montature oversize, revival Y2K, materiali sostenibili e acetato trasparente.',
    date: '4 maggio 2026',
    category: 'Tendenze',
    readTime: '12 min di lettura',
    emoji: '🔥',
    featured: false,
  },
  {
    slug: 'guida-occhiali-forma-viso',
    title: 'I Migliori Occhiali per la Tua Forma del Viso: Guida Completa',
    excerpt: 'Trova gli occhiali perfetti per viso rotondo, ovale, quadrato, a cuore e oblungo -- con consigli pratici per i brand.',
    date: '4 maggio 2026',
    category: 'Stile',
    readTime: '10 min di lettura',
    emoji: '😎',
    featured: false,
  },
  {
    slug: 'guida-moq-occhiali',
    title: 'Guida MOQ: Quante Paia Ordinare al Primo Ordine?',
    excerpt: 'ODM da 50 pezzi, OEM da 300+. La strategia intelligente per scalare il tuo primo ordine senza sovrainvestire.',
    date: '3 maggio 2026',
    category: 'Ordini',
    readTime: '11 min di lettura',
    emoji: '📊',
    featured: false,
  },
  {
    slug: 'strategia-prezzi-occhiali',
    title: 'Strategia di Prezzo: Dal Costo di Fabbrica al Prezzo al Dettaglio',
    excerpt: 'I numeri reali dell\'economia degli occhiali -- costi di fabbrica, markup all\'ingrosso, margini retail e strategie che funzionano.',
    date: '4 maggio 2026',
    category: 'Business',
    readTime: '13 min di lettura',
    emoji: '💰',
    featured: false,
  },
  {
    slug: 'controllo-qualita-occhiali',
    title: 'Controllo Qualità: Checklist di Ispezione in Fabbrica',
    excerpt: 'La checklist QC completa in 8 punti -- test lenti, ispezione montature, controllo cerniere, verifica UV e altro.',
    date: '4 maggio 2026',
    category: 'Qualità',
    readTime: '13 min di lettura',
    emoji: '✅',
    featured: false,
  },
  {
    slug: 'costi-avvio-brand-occhiali',
    title: 'Quanto Costa Lanciare un Brand di Occhiali nel 2026?',
    excerpt: 'Ogni singolo costo analizzato -- da $3.000 bootstrap a $50.000+ lancio premium. Numeri reali, senza nascondigli.',
    date: '4 maggio 2026',
    category: 'Business',
    readTime: '14 min di lettura',
    emoji: '🧮',
    featured: false,
  },
  {
    slug: 'produzione-sostenibile-occhiali',
    title: 'Produzione Sostenibile di Occhiali: Materiali Eco-Friendly',
    excerpt: 'Bio-acetato, nylon riciclato, plastica oceanica, packaging eco -- cosa significa davvero "sostenibile" e quanto costa.',
    date: '4 maggio 2026',
    category: 'Sostenibilità',
    readTime: '13 min di lettura',
    emoji: '🌿',
    featured: false,
  },
  {
    slug: 'uv400-vs-polarizzate',
    title: 'UV400 vs Polarizzate: Qual è la Differenza?',
    excerpt: 'Due tecnologie diverse che spesso vengono confuse. Cosa fa ciascuna, impatto sui costi e quando il tuo brand ha bisogno di una o entrambe.',
    date: '3 maggio 2026',
    category: 'Tecnologia',
    readTime: '12 min di lettura',
    emoji: '🕶️',
    featured: false,
  },
]

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Direttamente dalla Fabbrica
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informazioni senza filtri sulla produzione di occhiali da sole, approvvigionamento e creazione di brand --
            scritte da qualcuno che produce occhiali dal 2006.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div className="text-left">
              <div className="font-medium text-gray-900 text-sm">Scritto da Jacky Chen</div>
              <div className="text-xs text-gray-500">Fondatore, EyeView Sunglasses</div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="card mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 aspect-video md:aspect-auto flex items-center justify-center">
                <span className="text-8xl">{featured.emoji}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary-600 font-semibold text-sm mb-2">IN EVIDENZA</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <Link href={`/it/blog/${featured.slug}`} className="btn-primary self-start">
                  Leggi l&apos;Articolo
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/it/blog/${post.slug}`} className="card group">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">{post.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <section className="mt-20 bg-primary-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ricevi le Novità dalla Fabbrica nella Tua Casella Email
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Una email al mese. Niente fuffa -- solo consigli di produzione, tendenze di mercato
            e strategie di approvvigionamento che ti aiutano davvero a costruire un brand migliore.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Inserisci la tua email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Iscriviti
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
