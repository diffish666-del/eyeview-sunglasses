import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Occhiali Rotondi all'Ingrosso | Produttore Montature Circolari Vintage - EyeView`,
  description: `Produttore di occhiali rotondi all'ingrosso. Montature circolari vintage in metallo e acetato. Stile retro John Lennon, opzioni piccole e oversize. MOQ 100 pezzi.`,
  keywords: `occhiali rotondi ingrosso, produttore montature circolari, occhiali vintage rotondi, occhiali retro ingrosso`,
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/prodotti/rotondo',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/round',
      'it': 'https://eyeviewsunglasses.com/it/prodotti/rotondo',
    },
  },
}

const products = [
  {
    name: 'Classic Round Gold',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'The OG. Thin gold wire, perfectly circular lenses, adjustable silicone nose pads. This is the frame that John Lennon made iconic and that every vintage lover still reaches for. We sell more of these than any other round style — and we\'ve been making them for 8 years straight without a single design change. Because you don\'t fix what isn\'t broken.',
  },
  {
    name: 'Round Silver Frame',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Same classic round shape, cooler tone. Brushed silver finish appeals to the minimalist crowd — Scandinavian design fans, tech workers, the "less is more" people. Pairs perfectly with neutral wardrobes. One of our Scandinavian distributors stocks only silver rounds and moves 3,000+ pairs per quarter.',
  },
  {
    name: 'Vintage Round Black',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.50 - $12.50',
    moq: '100 pcs',
    description: 'Thick black acetate with a bold profile. This isn\'t a delicate wireframe — it\'s a statement. Think architect, think art professor, think creative director. The substantial construction gives it a premium weight in the hand that screams quality. Popular with independent eyewear boutiques that want something meatier than metal.',
  },
  {
    name: 'Round Acetate Tortoise',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Warm tortoiseshell pattern in layered acetate. The multi-tonal browns and ambers create depth that single-color frames just can\'t match. This is the "smart casual" of round sunglasses — works with a t-shirt, works with a blazer. Consistently one of our top 5 reorders across all product lines.',
  },
  {
    name: 'Round Colored Lens',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pcs',
    description: 'Pink lenses. Blue lenses. Yellow lenses. Green lenses. This is the festival frame — Coachella, Glastonbury, Tomorrowland. The thin gold metal frame with vivid colored lenses captures that free-spirit bohemian energy. We supply several music festival merchandise vendors who sell these on-site for 5-8x wholesale cost. Margins are ridiculous.',
  },
  {
    name: 'Oversized Round',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    description: 'The dramatic sibling. 56-60mm lenses that cover half your face and make a statement from across the room. Oversized rounds have exploded on social media — influencers love the proportions. More sun coverage than standard rounds too, so they\'re actually more protective. Currently our fastest-growing round style, up 40% year-over-year.',
  },
]

export default function RoundPageIt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/it/prodotti" className="hover:text-primary-600">Prodotti</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Round Sunglasses</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Round Sunglasses Wholesale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lennon wore them. Ozzy wore them. Harry Potter wore them. And now your customers
            want them. Vintage circular frames in metal, acetate, and every size from
            subtle intellectual to oversized statement. Factory direct, MOQ 100 pieces.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Round Sunglasses Wholesale Collection - Vintage Circular Frames"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">The Frame That Shaped Culture</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              The round frame didn&apos;t start as a fashion choice. In the early 1900s, it was
              just the easiest shape to manufacture — circles were simple to grind. But then
              something happened. John Lennon picked up a pair of small wire rounds in the 1960s
              and turned them into the visual symbol of an entire generation. Peace, love, and
              perfectly circular lenses. Overnight, the round frame went from &quot;functional&quot; to
              &quot;revolutionary.&quot;
            </p>
            <p>
              The list of people who made rounds famous reads like a cultural hall of fame.
              Janis Joplin at Woodstock. Ozzy Osbourne on stage. Gandhi leading a nation.
              Steve Jobs launching the iPhone. Each one chose round frames — and each one
              made them mean something different. Rebellion. Creativity. Wisdom. Simplicity.
              That&apos;s the power of this shape: it adapts to whoever wears it.
            </p>
            <p>
              Fast forward to now. Gen Z discovered vintage fashion and went all in. Round
              sunglasses are a top-5 global bestseller again, driven by thrift culture, festival
              fashion, and the aesthetic side of TikTok. The demand is real and growing — our
              round frame orders have increased 35% year-over-year since 2022. And with the <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">WHO warning about cumulative UV exposure</a>,
              fashion sunglasses that actually protect your eyes are more relevant than ever.
              If you&apos;re not stocking rounds, you&apos;re leaving money on the table.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Wholesale Round Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">The Round Collection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} Wholesale - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>UV400 protection</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Custom logo available</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/it/contatti" className="btn-primary w-full block text-center">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Small, Medium, or Oversized? It Matters More Than You Think</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The lens size completely changes the personality of a round frame. A 44mm round whispers
            &quot;intellectual.&quot; A 60mm round screams &quot;look at me.&quot; Here&apos;s how to choose:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔍 Small (42-48mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The authentic &quot;Lennon&quot; size. Small and deliberate. These are for people who
                care about getting the vintage proportions exactly right. They don&apos;t cover
                much face — that&apos;s the point. It&apos;s about the aesthetic, not the coverage.
                Very popular with vintage purists, prescription eyeglass buyers, and the
                &quot;Harry Potter generation.&quot; Best sellers in optical shops.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Best for: small to medium faces</li>
                <li>• Vibe: intellectual, authentic vintage</li>
                <li>• Top market: optical shops, vintage stores</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">👓 Medium (49-53mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The safe bet. Medium rounds fit the widest range of faces and appeal to
                both men and women equally. Not too vintage, not too trendy — just right.
                If you&apos;re new to stocking round frames and don&apos;t know your market yet,
                start here. These have the highest sell-through rate and lowest return
                rate of any round size we produce.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Best for: most adult faces</li>
                <li>• Vibe: balanced, universally appealing</li>
                <li>• Top market: general retail, online</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">🔮 Oversized (54-62mm)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The statement piece. Oversized rounds are all over Instagram and TikTok.
                Big proportions, maximum drama, lots of sun coverage. These are the
                frames that get the &quot;OMG where did you get those&quot; reactions. Currently
                our fastest-growing segment — up 40% year-over-year. If your customers
                are under 35, this is probably what they want.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Best for: medium to large faces</li>
                <li>• Vibe: bold, social media ready</li>
                <li>• Top market: fashion brands, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Rounds Keep Coming Back</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🎭" title="Cultural Weight" description="60+ years of iconic wearers. No other shape carries this much history and meaning." />
            <FeatureCard icon="👓" title="Flattering Geometry" description="Circles soften angular faces beautifully. Square jaw? Diamond face? Rounds balance you out." />
            <FeatureCard icon="✨" title="Unisex Appeal" description="One of the few shapes that sells equally well to men and women. Double your market instantly." />
          </div>
        </section>

        {/* Specs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Specs</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Spec</th>
                  <th className="p-4 text-left font-semibold">Metal</th>
                  <th className="p-4 text-left font-semibold">Acetate</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Material</td><td className="p-4 text-gray-600">Stainless steel / Titanium</td><td className="p-4 text-gray-600">Italian-style acetate</td></tr>
                <tr><td className="p-4 font-medium">Lens Width</td><td className="p-4 text-gray-600">42-58mm</td><td className="p-4 text-gray-600">46-62mm</td></tr>
                <tr><td className="p-4 font-medium">Bridge</td><td className="p-4 text-gray-600">18-22mm</td><td className="p-4 text-gray-600">18-24mm</td></tr>
                <tr><td className="p-4 font-medium">Temple Length</td><td className="p-4 text-gray-600">135-145mm</td><td className="p-4 text-gray-600">140-148mm</td></tr>
                <tr><td className="p-4 font-medium">Weight</td><td className="p-4 text-gray-600">15-22g</td><td className="p-4 text-gray-600">25-35g</td></tr>
                <tr><td className="p-4 font-medium">Lens Options</td><td className="p-4 text-gray-600">CR-39 / Glass / TAC</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Nose Pads</td><td className="p-4 text-gray-600">Adjustable silicone</td><td className="p-4 text-gray-600">Integrated keyhole</td></tr>
                <tr><td className="p-4 font-medium">Colors</td><td className="p-4 text-gray-600">12+ incl. colored tints</td><td className="p-4 text-gray-600">10+ options</td></tr>
                <tr><td className="p-4 font-medium">Polarized</td><td className="p-4 text-gray-600">Optional TAC</td><td className="p-4 text-gray-600">Optional TAC</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Related Styles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/it/prodotti/occhio-di-gatto" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Cat Eye Sunglasses</h3>
              <p className="text-sm text-gray-600">Another vintage icon — pairs well in collections</p>
            </Link>
            <Link href="/it/prodotti/polarizzato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarized Round</h3>
              <p className="text-sm text-gray-600">Add glare-cutting TAC to any round style</p>
            </Link>
            <Link href="/it/prodotti/luce-blu" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Blue Light Round</h3>
              <p className="text-sm text-gray-600">Vintage frames with screen protection</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Do round sunglasses work on round faces?"
              answer="Honestly? It depends. The conventional wisdom says 'no — circles on circles makes everything rounder.' And that's true for some people. But plenty of people with round faces rock them anyway because they like the look. Our recommendation: if you're stocking for general retail, lead with medium and oversized rounds (which work on more face shapes). If a customer with a round face asks, suggest an angular shape like our cat eye or wayfarer instead. But don't turn them away — fashion rules are meant to be broken."
            />
            <FaqItem
              question="Metal or acetate — what's the difference really?"
              answer="Metal rounds are lighter (15-22g vs 25-35g), thinner, and more delicate-looking. They have adjustable nose pads so they fit more face shapes. Acetate rounds are bolder, heavier in a 'premium' way, and come in way more colors and patterns — tortoiseshell, marble, translucent tones. Both meet FDA UV protection standards. Metal says 'minimalist intellectual.' Acetate says 'fashion-forward creative.' Both sell well, but for different customers."
            />
            <FaqItem
              question="Can I get round frames with prescription lenses?"
              answer="Absolutely. Round is actually the easiest shape to fit with prescription lenses because the symmetric circle distributes optical correction evenly. We ship all our round frames Rx-ready with demo lenses. Works for single vision, bifocal, and progressive. Round prescription frames are a huge market — think of all those Harry Potter fans who actually need glasses!"
            />
            <FaqItem
              question="What lens colors sell best in round frames?"
              answer="Top sellers in order: (1) Classic green G-15 — the authentic vintage look, (2) Gray — neutral, goes with everything, (3) Brown/amber — warmer tone, great contrast, (4) Blue mirror — younger crowd loves these, (5) Yellow/pink/orange tinted — festival and bohemian buyers. Gradient lenses (dark on top, lighter at bottom) are also huge right now, especially in oversized rounds."
            />
            <FaqItem
              question="What's the MOQ and turnaround time?"
              answer="100 pieces per style and color for stock designs. 300 pieces for custom OEM (your logo, Pantone colors, custom packaging). Production takes 15-25 days for custom orders, 3-5 days for stock items. We also do full ODM — send us a sketch or reference photo and we'll create a new design from scratch. One client emailed us a vintage photo of 1960s sunglasses and we recreated the frame in 3 weeks."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Vintage Never Gets Old</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Fashion brands, optical shops, vintage boutiques, festival merch vendors — round
            frames sell everywhere. Get samples, see the quality, then let&apos;s talk numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/it/contatti" className="btn-primary">Request Free Quote</Link>
            <Link href="/it/prodotti" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Browse All Products</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eyeviewglasses.com" },
          { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://eyeviewglasses.com/products" },
          { "@type": "ListItem", "position": 3, "name": "Round Sunglasses", "item": "https://eyeviewglasses.com/products/round" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do round sunglasses work on round faces?",
            "acceptedAnswer": { "@type": "Answer", "text": "It depends on the individual. Conventionally, angular shapes are recommended for round faces, but many people with round faces wear them by choice. Medium and oversized rounds work on more face shapes than small rounds." }
          },
          {
            "@type": "Question",
            "name": "What's the difference between metal and acetate round frames?",
            "acceptedAnswer": { "@type": "Answer", "text": "Metal rounds are lighter (15-22g), thinner, and more minimalist with adjustable nose pads. Acetate rounds are bolder (25-35g), come in more colors and patterns, and have a premium substantial feel." }
          },
          {
            "@type": "Question",
            "name": "Can round frames be made with prescription lenses?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — round is the easiest shape for prescription fitting due to symmetric geometry. All our round frames ship Rx-ready with demo lenses for single vision, bifocal, and progressive." }
          },
          {
            "@type": "Question",
            "name": "What lens colors sell best in round frames?",
            "acceptedAnswer": { "@type": "Answer", "text": "Top sellers: classic green G-15, gray, brown/amber, blue mirror, and colored tints (yellow, pink, orange) for festival buyers. Gradient lenses are also very popular in oversized rounds." }
          },
          {
            "@type": "Question",
            "name": "What's the MOQ and turnaround time?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pieces per style for stock designs. 300 pieces for custom OEM orders. Production: 15-25 days custom, 3-5 days stock. Full ODM design service also available." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}
