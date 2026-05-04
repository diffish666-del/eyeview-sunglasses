import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Occhiali Occhio di Gatto all'Ingrosso | Produttore Occhiali Cat Eye - EyeView`,
  description: `Produttore di occhiali occhio di gatto all'ingrosso. Montature donna in acetato, metallo e materiali misti. Colori di tendenza, OEM/ODM. MOQ 100 pezzi.`,
  keywords: `occhiali occhio di gatto ingrosso, produttore cat eye, occhiali donna ingrosso, montature cat eye acetato`,
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/prodotti/occhio-di-gatto',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/cat-eye',
      'it': 'https://eyeviewsunglasses.com/it/prodotti/occhio-di-gatto',
    },
  },
}

const products = [
  {
    name: 'Classic Black Cat Eye',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'The one every collection needs. Black acetate, polished hinges, that perfect upswept angle. It\'s the sunglasses equivalent of a little black dress — works with everything, sells to everyone. This is consistently our #1 reorder across all markets.',
  },
  {
    name: 'Leopard Print Cat Eye',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Animal print done right. The tortoiseshell pattern isn\'t painted on — it\'s created by layering different colored acetate sheets, so each pair has genuine depth and richness. A boutique owner in Melbourne told us these outsell solid colors 2-to-1 during spring.',
  },
  {
    name: 'Rose Gold Metal Cat Eye',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    description: 'Slim metal frame with rose gold electroplating that looks like it should cost $200. It doesn\'t. The thin wire construction gives a modern, refined take on the cat eye — perfect for the professional woman who wants style without shouting about it. Pairs beautifully with both blazers and beach cover-ups.',
  },
  {
    name: 'Oversized Cat Eye',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$9.50 - $13.50',
    moq: '100 pcs',
    description: 'Go big or go home. The oversized cat eye is basically Instagram bait — bold proportions, dramatic upswept tips, maximum face coverage. One online retailer told us this style gets more "where did you get those?" comments than anything else in their store. Great UV coverage too, which is a nice bonus.',
  },
  {
    name: 'Rhinestone Cat Eye',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$11.00 - $15.00',
    moq: '100 pcs',
    description: 'For the woman who treats sunglasses as jewelry. Hand-set crystals along the brow line and temple tips catch the light in a way that stops people mid-conversation. We offer clear, colored, and Swarovski-grade stones. These sell like crazy at resort shops, bridal boutiques, and party-themed retailers.',
  },
  {
    name: 'Vintage Cat Eye',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    description: 'Straight out of 1958. Narrow, sharply angled, with thick acetate temples that say "I know my fashion history." These are smaller than the oversized trend — intentionally. Collectors and vintage enthusiasts snap these up. If your market skews retro, rockabilly, or pin-up, this is your frame.',
  },
]

export default function CatEyePageIt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/it/prodotti" className="hover:text-primary-600">Prodotti</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Cat Eye Sunglasses</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wholesale Cat Eye Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The cat eye never goes out of style. Seriously — Audrey Hepburn wore them in the
            &apos;60s and they&apos;re still the #1 women&apos;s sunglasses shape today. We manufacture
            cat eye frames in acetate, metal, and mixed materials with full OEM customization.
            Your logo, your colors, your brand — our factory.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop"
            alt="Wholesale Cat Eye Sunglasses Collection - Women's Fashion Eyewear"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why Cat Eye */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Why Cat Eye Outsells Everything Else</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Here&apos;s a fact that surprises people: the cat eye shape has been the bestselling
              women&apos;s sunglasses silhouette for over 70 years. Not the aviator. Not the wayfarer.
              The cat eye. Why? Because it does something no other shape can — it lifts. That
              upswept angle creates the illusion of higher cheekbones and a more defined jawline.
              It&apos;s basically a mini facelift you can buy for $15.
            </p>
            <p>
              The shape was invented in 1939 by a New York designer named Altina Schinasi who was
              tired of &quot;ugly&quot; eyeglasses. She called them &quot;Harlequin&quot; frames. Marilyn Monroe
              made them famous. Audrey Hepburn made them iconic. And now, in 2024, they&apos;re bigger
              than ever — literally. The oversized cat eye is dominating Instagram, TikTok, and
              every fashion week from Milan to Seoul.
            </p>
            <p>
              For wholesale buyers, cat eye sunglasses are about as close to a sure thing as
              eyewear gets. They appeal across age groups (20-60+), work year-round, and carry
              strong perceived value. All our cat eye frames meet <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA UV protection standards</a> —
              because looking great shouldn&apos;t mean compromising on eye safety. Our factory
              moves over 200,000 cat eye frames per month across 40+ countries. We know this
              shape inside and out.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1200&h=500&fit=crop" alt="Wholesale Cat Eye Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">The Collection</h2>
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/it/contatti" className="btn-primary w-full block text-center">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Material Guide */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Acetate vs. Metal vs. Mixed — Which One&apos;s Right?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏛️ Acetate</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you want to charge premium retail prices, go acetate. It&apos;s made from <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">cotton
                and wood pulp</a> (yes, really), and the colors and patterns you can achieve are
                unreal — deep tortoiseshell, marble swirls, translucent candy tones. Each pair
                gets hand-polished for that glossy finish. Acetate <em>feels</em> expensive. Your
                customers will notice. Hypoallergenic too, so no complaints about skin reactions.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Rich colors — tortoise, marble, gradient</li>
                <li>• Hand-polished premium finish</li>
                <li>• Hypoallergenic, eco-friendly</li>
                <li>• Best for: boutiques, luxury positioning</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">⚙️ Metal</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Thin, sleek, modern. Metal cat eyes use stainless steel or nickel-free alloy with
                electroplated finishes — gold, silver, rose gold, matte black. The slim profile
                creates a refined look that acetate can&apos;t match. These are the frames for women
                who want their sunglasses to whisper, not shout. Great for professional and office-wear
                lines. Lighter than acetate too — most weigh under 22 grams.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Slim, elegant, lightweight (under 22g)</li>
                <li>• Gold, silver, rose gold finishes</li>
                <li>• Nickel-free options available</li>
                <li>• Best for: office wear, minimalist brands</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔗 Mixed Material</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The best of both worlds. Acetate front with thin metal temples — or vice versa.
                The two-tone material contrast is trending hard right now. Think: transparent pink
                acetate front with thin gold arms. Or black acetate with silver wire temples.
                These are the frames that make people stop and ask &quot;where did you get those?&quot;
                Currently our fastest-growing category.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Trendy two-tone aesthetic</li>
                <li>• Creative design possibilities</li>
                <li>• Fastest-growing category in 2024</li>
                <li>• Best for: trend-driven brands, DTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Color Trends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Colors Are Selling Right Now</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🔥 Hot This Season</h3>
                <div className="space-y-4">
                  <ColorTrend color="bg-red-800" name="Burgundy & Wine" description="Deep, warm tones killing it in fall/winter. Pair with brown gradient lenses for that cozy luxury vibe." />
                  <ColorTrend color="bg-pink-300" name="Soft Pink & Blush" description="Still going strong. Clear pink acetate is the single fastest-growing color in women's eyewear right now." />
                  <ColorTrend color="bg-green-700" name="Forest Green" description="The surprise hit of the year. A sophisticated alternative to tortoiseshell that nobody expected." />
                  <ColorTrend color="bg-amber-100 border border-gray-300" name="Transparent / Crystal" description="See-through frames in clear, champagne, light gray. Been trending for 3 years and showing no signs of slowing." />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">📊 The Evergreens (Always Reorder)</h3>
                <div className="space-y-4">
                  <ColorTrend color="bg-black" name="Classic Black" description="30-35% of all cat eye orders. Always. Every. Season. Stock it or regret it." />
                  <ColorTrend color="bg-amber-700" name="Tortoiseshell" description="The #2 seller. Multi-tonal browns work year-round, with everyone, everywhere." />
                  <ColorTrend color="bg-yellow-600" name="Gold Metal" description="Essential for any luxury or professional line. Gold cat eyes scream sophistication." />
                  <ColorTrend color="bg-gray-400" name="Gradient Two-Tone" description="Frames that fade from one color to another — black to clear, pink to peach. Very Instagram." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Specs</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Spec</th>
                  <th className="p-4 text-left font-semibold">Acetate</th>
                  <th className="p-4 text-left font-semibold">Metal</th>
                  <th className="p-4 text-left font-semibold">Mixed</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Lens Width</td><td className="p-4 text-gray-600">52-58mm</td><td className="p-4 text-gray-600">54-60mm</td><td className="p-4 text-gray-600">53-58mm</td></tr>
                <tr><td className="p-4 font-medium">Bridge</td><td className="p-4 text-gray-600">16-20mm</td><td className="p-4 text-gray-600">14-18mm</td><td className="p-4 text-gray-600">15-19mm</td></tr>
                <tr><td className="p-4 font-medium">Temple Length</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td><td className="p-4 text-gray-600">140-145mm</td></tr>
                <tr><td className="p-4 font-medium">Weight</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">18-24g</td><td className="p-4 text-gray-600">22-30g</td></tr>
                <tr><td className="p-4 font-medium">Lens</td><td className="p-4 text-gray-600">CR-39 / TAC</td><td className="p-4 text-gray-600">CR-39 / Nylon</td><td className="p-4 text-gray-600">CR-39 / TAC</td></tr>
                <tr><td className="p-4 font-medium">UV</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Hinge</td><td className="p-4 text-gray-600">5-barrel / Spring</td><td className="p-4 text-gray-600">Flex spring</td><td className="p-4 text-gray-600">5-barrel / Spring</td></tr>
                <tr><td className="p-4 font-medium">Nose Pads</td><td className="p-4 text-gray-600">Integrated keyhole</td><td className="p-4 text-gray-600">Adjustable silicone</td><td className="p-4 text-gray-600">Adjustable silicone</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">More Styles Worth a Look</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/it/prodotti/rotondo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Round Sunglasses</h3>
              <p className="text-sm text-gray-600">Vintage circles for retro lovers</p>
            </Link>
            <Link href="/it/prodotti/polarizzato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarized Options</h3>
              <p className="text-sm text-gray-600">Add TAC polarized to any cat eye</p>
            </Link>
            <Link href="/it/prodotti/bambini" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👧</div>
              <h3 className="font-semibold mb-2">Kids Cat Eye</h3>
              <p className="text-sm text-gray-600">Mini cat eyes for girls — adorable sellers</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Your Questions, Straight Answers</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Which face shapes work with cat eye?"
              answer="Almost all of them, honestly. Cat eye is one of the most forgiving shapes out there. Oval face? Perfect. Round face? The upswept angles add definition — looks great. Heart-shaped? Ideal match. Square face? Go with a softer, more rounded cat eye to balance the angles. The only face shape that can be tricky is very long/narrow faces, where an oversized cat eye might overwhelm. But even then, a petite cat eye works fine."
            />
            <FaqItem
              question="What's the MOQ for custom branded cat eyes?"
              answer="100 pieces per color for our existing designs. Want your own custom mold, Pantone-matched colors, and branded packaging? That's 300 pieces per style. Pro tip: you can mix different cat eye styles in one order to hit the minimum. So you could do 100 black classic + 100 leopard + 100 rose gold = 300 total. We're flexible."
            />
            <FaqItem
              question="Can these be made prescription-ready?"
              answer="Yep! All our acetate and metal cat eyes can ship with demo lenses so optical shops can pop in prescription lenses. We accommodate single vision, bifocal, and progressive prescriptions. The frame depth and lens curvature are designed for it. This is a great upsell for optical retailers — fashion frames with Rx capability."
            />
            <FaqItem
              question="What's trending in cat eye for 2024-2025?"
              answer="Big trends right now: oversized proportions (bigger is better), transparent/crystal acetate (especially pink and champagne), mixed materials (acetate front + metal arms), geometric angular cat eyes (less curved, more edgy), and soft pastels like lavender and sage green. The Y2K narrow cat eye revival is also still going strong with younger buyers. We track these trends every season and update our catalog accordingly."
            />
            <FaqItem
              question="Can I get samples before committing to a bulk order?"
              answer="Of course — we'd never expect you to order blind. Existing catalog styles? Free samples, you just cover shipping (usually $30-50 via DHL for 3-5 pairs). Want a custom sample with your specific modifications? Small fee of $50-100 per design, which we credit back to your first production order. So you're basically getting custom samples for free if you order. Turnaround is 7-10 days."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Stock the Shape That Sells Itself?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Boutiques, online stores, brand distributors — we work with all of them. Our
            women&apos;s cat eye wholesale program gives you competitive pricing, fast production,
            and full customization. Grab a free catalog and see what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/it/contatti" className="btn-primary">Request Catalog</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Cat Eye Sunglasses", "item": "https://eyeviewglasses.com/products/cat-eye" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which face shapes work with cat eye sunglasses?",
            "acceptedAnswer": { "@type": "Answer", "text": "Almost all of them. Cat eye works great with oval, round, heart-shaped, and square faces. The upswept angles add definition and lift to most facial structures." }
          },
          {
            "@type": "Question",
            "name": "What's the MOQ for custom branded cat eye sunglasses?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pieces per color for existing designs. Custom molds and branding start at 300 pieces per style. You can mix different cat eye styles in one order to hit the minimum." }
          },
          {
            "@type": "Question",
            "name": "Can cat eye frames be made prescription-ready?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, all acetate and metal cat eyes can ship with demo lenses for prescription installation. We accommodate single vision, bifocal, and progressive prescriptions." }
          },
          {
            "@type": "Question",
            "name": "What's trending in cat eye sunglasses for 2024-2025?",
            "acceptedAnswer": { "@type": "Answer", "text": "Big trends: oversized proportions, transparent acetate, mixed materials, geometric angular shapes, soft pastels, and Y2K narrow cat eye revival for younger buyers." }
          },
          {
            "@type": "Question",
            "name": "Can I get samples before a bulk order?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Free samples of existing styles — just cover shipping ($30-50 via DHL). Custom samples are $50-100 per design, credited back to your first production order." }
          }
        ]
      })}} />
    </main>
  )
}

function ColorTrend({ color, name, description }: { color: string; name: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full ${color} flex-shrink-0 mt-1`}></div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
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
