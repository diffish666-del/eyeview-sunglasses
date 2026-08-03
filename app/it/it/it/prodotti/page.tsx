import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Collezione Occhiali da Sole all\'Ingrosso | Tutti gli Stili e Categorie',
  description: 'Scopri la nostra collezione completa di occhiali da sole all\'ingrosso: Aviatore, Wayfarer, Occhio di Gatto, Sportivo, Rotondo, Bambini, Polarizzato, Luce Blu, Ecologico, Acetato e TR90. Personalizzazione OEM disponibile. MOQ 50 pezzi.',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/prodotti/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/',
      'it': 'https://eyeviewsunglasses.com/it/prodotti/',
    },
  },
  openGraph: {
    title: 'Collezione Occhiali da Sole all\'Ingrosso | Tutti gli Stili e Categorie',
    description: 'Scopri la nostra collezione completa di occhiali da sole all\'ingrosso. Personalizzazione OEM e ODM disponibile per tutti gli stili.',
    url: 'https://eyeviewsunglasses.com/it/prodotti/',
  },
};

const products = [
  {
    name: 'Occhiali da Sole Aviatore',
    href: '/it/prodotti/aviatore/',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'occhiali aviatore all\'ingrosso',
    description: 'Il classico design aviatore con montature metalliche a goccia. Originariamente progettato per i piloti, oggi un must della moda globale. Disponibile in montature oro, argento, canna di fucile e oro rosa con un\'ampia selezione di colori lenti tra cui sfumati, specchiati e polarizzati. Perfetto per collezioni all\'ingrosso maschili e unisex.',
    moq: 'MOQ: 50 paia',
    price: 'Da $2,50/paio',
  },
  {
    name: 'Occhiali da Sole Wayfarer',
    href: '/it/prodotti/wayfarer/',
    emoji: '🎸',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'occhiali wayfarer all\'ingrosso',
    description: 'L\'iconica silhouette wayfarer realizzata in acetato premium. Questo stile universalmente lusinghiero è un best-seller da decenni. Disponibile in colori solidi, tartaruga e montature trasparenti. Ideale per negozi retail, brand online e omaggi promozionali.',
    moq: 'MOQ: 50 paia',
    price: 'Da $2,00/paio',
  },
  {
    name: 'Occhiali da Sole Occhio di Gatto',
    href: '/it/prodotti/occhio-di-gatto/',
    emoji: '😺',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
    keywords: 'occhiali occhio di gatto all\'ingrosso',
    description: 'Montature audaci e femminili che dominano il mercato dell\'eyewear femminile. Disponibili in versioni oversize, classiche e sottili con opzioni di abbellimento tra cui strass, accenti metallici e finiture sfumate. Un must per qualsiasi brand di accessori donna.',
    moq: 'MOQ: 50 paia',
    price: 'Da $2,30/paio',
  },
  {
    name: 'Occhiali da Sole Sportivi',
    href: '/it/prodotti/sportivo/',
    emoji: '🚴',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'occhiali sportivi all\'ingrosso',
    description: 'Occhiali sportivi ad alte prestazioni con design avvolgente, progettati per stili di vita attivi. Costruiti con montature TR90 e policarbonato resistenti agli urti, naselli in gomma e terminali antiscivolo. Ideali per brand di ciclismo, corsa, pesca, golf e sport outdoor.',
    moq: 'MOQ: 100 paia',
    price: 'Da $3,00/paio',
  },
  {
    name: 'Occhiali da Sole Rotondi',
    href: '/it/prodotti/rotondo/',
    emoji: '🔵',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'occhiali rotondi all\'ingrosso',
    description: 'Montature rotonde di ispirazione vintage con un\'estetica retrò senza tempo. Disponibili in metallo e acetato, dalle piccole cerchie stile John Lennon alle montature rotonde oversize. Popolari con brand di moda e merchandising per festival.',
    moq: 'MOQ: 50 paia',
    price: 'Da $2,00/paio',
  },
  {
    name: 'Occhiali da Sole per Bambini',
    href: '/it/prodotti/bambini/',
    emoji: '👶',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop',
    keywords: 'occhiali bambini all\'ingrosso',
    description: 'Occhiali sicuri, resistenti e colorati progettati specificamente per bambini dai 3 ai 12 anni. Realizzati con materiali flessibili e privi di BPA che resistono all\'uso intenso. Protezione UV400 con lenti infrangibili. Disponibili in colori divertenti e design adatti all\'età.',
    moq: 'MOQ: 100 paia',
    price: 'Da $1,50/paio',
  },
  {
    name: 'Occhiali da Sole Polarizzati',
    href: '/it/prodotti/polarizzato/',
    emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'occhiali polarizzati all\'ingrosso',
    description: 'Occhiali da sole polarizzati premium con lenti TAC che eliminano il riflesso da acqua, neve e superfici stradali. Disponibili in tutti gli stili inclusi aviatore, wayfarer, sportivo e avvolgente. Essenziali per brand outdoor, pesca e guida.',
    moq: 'MOQ: 100 paia',
    price: 'Da $3,50/paio',
  },
  {
    name: 'Occhiali con Filtro Luce Blu',
    href: '/it/prodotti/luce-blu/',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'occhiali luce blu all\'ingrosso',
    description: 'Occhiali di protezione digitale con tecnologia avanzata di filtraggio della luce blu. Bloccano il 30-50% della luce blu dannosa da schermi di computer, smartphone e illuminazione LED. Domanda crescente da brand aziendali, gaming e wellness.',
    moq: 'MOQ: 50 paia',
    price: 'Da $2,50/paio',
  },
  {
    name: 'Occhiali da Sole Ecologici',
    href: '/it/prodotti/ecologico/',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'produttore occhiali sostenibili',
    description: 'Eyewear sostenibile realizzato in plastica oceanica riciclata (rPET), bambù, bio-acetato e alluminio riciclato. Perfetto per brand che puntano ai consumatori eco-consapevoli. Posizionamento retail premium del 30-50%.',
    moq: 'MOQ: 100 paia',
    price: 'Da $3,00/paio',
  },
  {
    name: 'Occhiali da Sole in Acetato',
    href: '/it/prodotti/acetato/',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'produttore occhiali acetato',
    description: 'Montature in acetato artigianali in tartaruga, cristallo, marmo e pattern personalizzati. Acetato italiano Mazzucchelli premium e acetato cinese di alta qualità disponibili. Taglio CNC e lucidatura a mano per una finitura di lusso.',
    moq: 'MOQ: 100 paia',
    price: 'Da $4,00/paio',
  },
  {
    name: 'Occhiali da Sole TR90',
    href: '/it/prodotti/tr90/',
    emoji: '🏋️',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'produttore occhiali TR90',
    description: 'Montature ultraleggere in nylon TR90 (15-20g) con flessibilità a memoria e proprietà ipoallergeniche. Realizzate in Grilamid svizzero EMS-Grivory. Ideali per linee sportive, bambini e comfort quotidiano.',
    moq: 'MOQ: 100 paia',
    price: 'Da $2,50/paio',
  },
];

export default function ProductsPageIt() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Prodotti', href: '/it/prodotti/' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Collezione Occhiali da Sole all&apos;Ingrosso</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Esplora la nostra gamma completa di stili di occhiali da sole all&apos;ingrosso. Come produttore professionale di occhiali da sole, offriamo personalizzazione completa OEM e ODM per ogni categoria. Tutte le montature sono disponibili con branding personalizzato, opzioni lenti e packaging per rispecchiare l&apos;identità del tuo brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border group flex gap-6"
              >
                {product.image ? (
                  <img src={product.image} alt={`${product.name} all'Ingrosso - EyeView`} loading="lazy" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                ) : (
                  <span className="text-6xl flex-shrink-0">{product.emoji}</span>
                )}
                <div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{product.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary-600 font-semibold">{product.moq}</span>
                    <span className="text-green-600 font-semibold">{product.price}</span>
                  </div>
                  <span className="inline-block mt-3 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Vedi Dettagli →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Hai Bisogno di Occhiali da Sole Personalizzati all'Ingrosso?" description="Comunicaci le tue esigenze e ti forniremo un preventivo dettagliato entro 24 ore. Tutti gli stili sono completamente personalizzabili con il tuo branding." primaryText="Preventivo Gratuito" primaryHref="/it/contatti" secondaryText="Vedi Prodotti" secondaryHref="/it/prodotti" />
    </>
  );
}
