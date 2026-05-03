import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polarized Sunglasses Wholesale | Premium TAC Lenses Manufacturer - EyeView',
  description: 'Wholesale polarized sunglasses manufacturer. Premium 7-layer TAC polarized lenses, 99% glare reduction, UV400 protection. Driving, fishing, sport styles. MOQ 100pcs. Factory direct.',
  keywords: 'polarized sunglasses wholesale, TAC polarized lenses, polarized sunglasses manufacturer, glare reduction sunglasses, polarized driving glasses, polarized fishing sunglasses, CR-39 polarized lenses bulk',
}

const products = [
  {
    name: 'Polarized Aviator',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$12.00 - $18.00',
    moq: '100 pcs',
    description: 'The aviator was literally designed for pilots who needed to see through cockpit glare. Add polarization and it becomes the ultimate driving sunglasses. Our polarized aviator cuts road glare, dashboard reflection, and that blinding flash from the car ahead. We supply these to a rental car company in Dubai that gives them to every customer — that\'s how good they are for driving.',
  },
  {
    name: 'Polarized Wayfarer',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$11.00 - $17.00',
    moq: '100 pcs',
    description: 'Classic wayfarer shape meets serious optics. The TAC polarized lenses transform this fashion frame into a functional powerhouse — beach glare, city sidewalk reflection, water surface shimmer all gone. Customers get the style they want with protection they didn\'t know they needed. Our bestselling all-rounder.',
  },
  {
    name: 'Polarized Sport Wrap',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pcs',
    description: 'Wraparound coverage + polarized lenses = no glare from any angle. These are built for outdoor athletes who need peripheral protection — cyclists on wet roads, trail runners in dappled sunlight, hikers above the tree line. TR90 frame keeps the weight under 26g. A cycling club in the Netherlands ordered 600 pairs for their entire membership.',
  },
  {
    name: 'Polarized Fishing Glasses',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$14.00 - $20.00',
    moq: '100 pcs',
    description: 'Ask any serious angler and they\'ll tell you — polarized lenses aren\'t optional for fishing. They\'re essential. Our fishing polarized glasses cut surface glare so you can see right into the water. Spot the fish, read the structure, watch your lure. Amber lenses for freshwater, gray-green for saltwater. A charter fishing company in Key West has been reordering these every quarter for three years straight.',
  },
  {
    name: 'Polarized Driving Glasses',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$12.50 - $18.50',
    moq: '100 pcs',
    description: 'Designed specifically for behind the wheel. Gray lenses maintain true color perception (so traffic lights look right), while killing the blinding horizontal glare that bounces off wet pavement, hoods, and other vehicles. Anti-reflective back coating prevents your own face from reflecting in the lens. These are the ones professional drivers ask for.',
  },
  {
    name: 'Polarized Cat Eye',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$13.00 - $19.00',
    moq: '100 pcs',
    description: 'Who says polarized has to look sporty? This cat eye frame with TAC polarized lenses proves you can have fashion AND function. Women who drive, who spend time at the beach, who sit by the pool — they get the glare protection they need wrapped in a frame they actually want to wear. Style + substance. Our #1 seller in women\'s polarized.',
  },
]

export default function PolarizedPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Polarized Sunglasses</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Polarized Sunglasses Wholesale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Once your customers try polarized, they never go back. The glare disappears.
            The colors pop. Everything just looks... better. We manufacture premium TAC
            polarized sunglasses in every style — aviator, wayfarer, sport, cat eye — with
            7-layer lenses that block 99% of blinding horizontal glare.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
            alt="Polarized Sunglasses Wholesale Collection - Premium TAC Lenses"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* How Polarization Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">How Polarization Actually Works (Simple Version)</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Here&apos;s the 30-second explanation. Sunlight travels in all directions — up,
              down, sideways. When it bounces off a flat surface like water, a road, or a car
              hood, it gets &quot;organized&quot; into horizontal waves. That&apos;s glare. It&apos;s
              blinding, it&apos;s annoying, and it&apos;s actually dangerous when you&apos;re driving
              or on the water.
            </p>
            <p>
              A <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">polarized lens</a> contains
              a special chemical film with microscopic vertical stripes. These stripes act like
              venetian blinds for light — they let vertical light through (the normal stuff)
              but block horizontal light (the glare). The result? Glare vanishes. Colors look
              richer and more natural. Contrast sharpens. It&apos;s like upgrading from standard
              definition to 4K for your eyes.
            </p>
            <p>
              Not all polarized lenses are equal, though. Cheap ones use a thin polarizing
              film stuck to the lens surface — it peels, bubbles, and degrades in months. Our
              TAC lenses sandwich the polarizing film between 6 layers of protective material,
              creating a single fused unit that won&apos;t separate or degrade. That&apos;s the
              difference between $2 gas station polarized and real polarized. Your customers
              can tell.
            </p>
          </div>
        </section>

        {/* Polarized vs Non-Polarized */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarized vs. Non-Polarized: The Real Difference</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-left font-semibold">Regular Tinted Lens</th>
                  <th className="p-4 text-left font-semibold">Polarized Lens</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Glare Reduction</td><td className="p-4 text-gray-600">Dims everything equally — glare included</td><td className="p-4 text-gray-600">Specifically eliminates reflected horizontal glare</td></tr>
                <tr><td className="p-4 font-medium">Visual Clarity</td><td className="p-4 text-gray-600">Darker but not clearer</td><td className="p-4 text-gray-600">Sharper contrast, enhanced color perception</td></tr>
                <tr><td className="p-4 font-medium">Driving Safety</td><td className="p-4 text-gray-600">Reduces brightness, glare still present</td><td className="p-4 text-gray-600">Eliminates road/car glare — significantly safer</td></tr>
                <tr><td className="p-4 font-medium">Fishing / Water</td><td className="p-4 text-gray-600">Can&apos;t see below surface</td><td className="p-4 text-gray-600">See through water surface clearly</td></tr>
                <tr><td className="p-4 font-medium">Eye Fatigue</td><td className="p-4 text-gray-600">Still squinting in glare</td><td className="p-4 text-gray-600">Eyes relax — no squinting needed</td></tr>
                <tr><td className="p-4 font-medium">Perceived Value</td><td className="p-4 text-gray-600">Basic — customers expect UV at minimum</td><td className="p-4 text-gray-600">Premium — customers pay $10-30 more retail</td></tr>
                <tr><td className="p-4 font-medium">Wholesale Cost Add</td><td className="p-4 text-gray-600">Baseline</td><td className="p-4 text-gray-600">+$1.50 - $3.00 per pair</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            The math is simple: polarized costs you $1.50-3.00 more per pair but lets you charge $10-30 more retail. That&apos;s the best margin booster in eyewear.
          </p>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop" alt="Wholesale Polarized Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Polarized Collection by Style</h2>
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
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>7-layer TAC polarized lens</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% glare reduction</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>UV400 protection</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/contact" className="btn-primary w-full block text-center">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lens Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarized Lens Types: TAC vs. CR-39 vs. Glass</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-200">
              <h3 className="text-xl font-semibold mb-2">🏆 TAC Polarized</h3>
              <p className="text-xs text-primary-600 font-semibold mb-4">MOST POPULAR — 80% of orders</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TAC (Triacetate Cellulose) is the sweet spot. Seven layers fused together:
                hard coat on the outside, TAC structural layers, polarizing film in the center,
                UV coating underneath. Lighter than glass, tougher than CR-39, and about half
                the cost of glass polarized. This is what we recommend for 90% of wholesale
                buyers. It&apos;s the industry workhorse for a reason.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Weight: Light (1.1mm standard)</li>
                <li>• Impact: Good — won&apos;t shatter</li>
                <li>• Optics: Very good</li>
                <li>• Cost: $$ — best value</li>
                <li>• Best for: most applications</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🔬 CR-39 Polarized</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">PREMIUM OPTION</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">CR-39</a> is
                an optical-grade resin originally developed for military optics. It offers
                the sharpest visual clarity of any plastic lens material — opticians love it.
                Scratch-resistant, lightweight, and optically superior to TAC. But it costs
                more and is slightly less impact-resistant. Choose CR-39 when optical quality
                is the top priority — luxury brands, driving specialists, optical retailers.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Weight: Light</li>
                <li>• Impact: Moderate</li>
                <li>• Optics: Excellent — optical grade</li>
                <li>• Cost: $$$ — premium</li>
                <li>• Best for: luxury, optical shops</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">💎 Glass Polarized</h3>
              <p className="text-xs text-gray-500 font-semibold mb-4">ULTIMATE CLARITY</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nothing beats glass for optical purity. Zero distortion, superior scratch
                resistance, and the polarization is embedded permanently — it won&apos;t
                degrade over years. But glass is heavier, more expensive, and shatters on
                impact (not great for sports). Glass polarized is for the purist customer
                who wants the absolute best optics and doesn&apos;t mind the weight. Think
                fishing enthusiasts, boat captains, luxury positioning.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Weight: Heavy</li>
                <li>• Impact: Low — can shatter</li>
                <li>• Optics: Perfect — zero distortion</li>
                <li>• Cost: $$$$ — highest</li>
                <li>• Best for: luxury, fishing, boating</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7-Layer Construction */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Inside a TAC Polarized Lens: 7 Layers</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                When people ask &quot;why do your polarized lenses cost more than the ones on
                Alibaba for $0.50?&quot; — this is why. Each lens is a 7-layer sandwich, precision-fused
                under heat and pressure. The cheap ones? They slap a polarizing film on one side
                of a regular lens. It peels. It bubbles. It fogs. Ours won&apos;t. Ever. We&apos;ve
                been making these for 8+ years and our defect rate is under 0.3%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>UV400 — lab-tested, not just labeled</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>99% horizontal glare eliminated</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Impact resistant — won&apos;t shatter</li>
                <li className="flex items-center"><span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>Scratch-resistant hard coating</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-4">The 7 Layers:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">1</span><span>Hard Coat (scratch protection)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">2</span><span>TAC Structural Layer</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">3</span><span>TAC Bonding Layer</span></div>
                <div className="flex justify-between p-2 bg-primary-100 rounded font-semibold"><span>4</span><span>Polarizing Film (the magic)</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">5</span><span>TAC Bonding Layer</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">6</span><span>TAC Structural Layer</span></div>
                <div className="flex justify-between p-2 bg-gray-50 rounded"><span className="font-medium">7</span><span>UV400 Protection Coating</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Where Polarized Makes the Biggest Difference</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AppCard icon="🚗" title="Driving" desc="Road glare gone. Dashboard reflection gone. Safer driving, period." />
            <AppCard icon="🎣" title="Fishing" desc="See below the water surface. Spot fish. Read structure. Game-changer." />
            <AppCard icon="⛵" title="Boating" desc="Open water glare is brutal. Polarized makes it comfortable." />
            <AppCard icon="⛷️" title="Snow Sports" desc="Snow reflects 80% of UV. Polarized + dark tint = snow blindness prevention." />
            <AppCard icon="🏖️" title="Beach" desc="Sand and water double-glare. Polarized makes beach days actually relaxing." />
            <AppCard icon="🏌️" title="Golf" desc="Read the green without squinting. Track the ball against the sky." />
            <AppCard icon="🚴" title="Cycling" desc="Wet road glare on morning rides. Polarized lenses cut right through it." />
            <AppCard icon="🏃" title="Running" desc="Pavement glare at low sun angles. Polarized keeps your eyes fresh for miles." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Related Collections</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/products/sport" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Sport Sunglasses</h3>
              <p className="text-sm text-gray-600">All our sport frames with polarized options</p>
            </Link>
            <Link href="/products/cat-eye" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Cat Eye Sunglasses</h3>
              <p className="text-sm text-gray-600">Fashion frames with TAC polarized upgrades</p>
            </Link>
            <Link href="/products/round" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Round Sunglasses</h3>
              <p className="text-sm text-gray-600">Vintage rounds with polarized lens options</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Polarized Questions — Answered</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="How can I tell if lenses are really polarized?"
              answer="Easy test: hold the sunglasses in front of an LCD screen (phone or computer) and rotate them 90 degrees. If they're truly polarized, the screen will go dark or change color dramatically at certain angles. That's the polarizing filter blocking the screen's light waves. We include a polarization test card with every order so your customers can verify it themselves. It's a great selling tool — people love the demo."
            />
            <FaqItem
              question="Are polarized lenses worth the extra cost?"
              answer="From a margin perspective? Absolutely. Polarized adds about $1.50-3.00 to your wholesale cost per pair, but customers will pay $10-30 more at retail for 'polarized' on the label. It's the single best upsell in the sunglasses business. From a performance perspective — if your customers drive, fish, or spend time near water, polarized isn't a luxury. It's a safety feature. Glare causes accidents."
            />
            <FaqItem
              question="Can polarized lenses affect seeing phone or GPS screens?"
              answer="Sometimes, yes — and it's worth knowing about. Polarized lenses can make some LCD screens look dark or show rainbow patterns at certain angles. Most modern OLED phone screens handle it fine, but older GPS units and some car dashboard displays can be tricky. For driving glasses specifically, we offer lenses with a slightly offset polarization angle that reduces this issue. Just ask about our 'driver-optimized' polarized option."
            />
            <FaqItem
              question="TAC, CR-39, or glass — which polarized lens should I choose?"
              answer="For most wholesale buyers: TAC. It's the best balance of quality, durability, and cost — and it accounts for about 80% of our polarized orders. Go CR-39 if you're selling to optical shops or luxury markets where optical clarity is the #1 priority. Go glass if you're targeting serious fishing/boating enthusiasts who want the absolute best optics and don't mind heavier frames. When in doubt, start with TAC."
            />
            <FaqItem
              question="What colors of polarized lenses do you offer?"
              answer="Twelve options: gray (neutral, true color — best for driving), brown (enhanced contrast — great for everyday), amber (maximum contrast — fishing favorite), green (classic G-15 look), blue mirror, red mirror, gold mirror, silver mirror, yellow (low-light conditions), rose (golf/tennis), and photochromic (auto-adjusts to light). Gray and brown account for about 60% of all orders, but mirror finishes are growing fast."
            />
            <FaqItem
              question="What's the MOQ and can I mix polarized with non-polarized?"
              answer="100 pieces per style and color. And yes — you can mix polarized and non-polarized versions of the same frame in one order. A lot of our retailers stock both: non-polarized at $15-20 retail as the entry point, and polarized at $25-35 as the premium upsell. Same frame, different lens, bigger average order value. Smart retailers offer the comparison demo right at the counter."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">The Easiest Upsell in Eyewear</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Polarized costs you a little more. It sells for a lot more. And customers genuinely
            love the difference. Get samples, do the LCD test demo, and watch them sell
            themselves. Free samples available — you cover shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request Polarized Catalog</Link>
            <Link href="/products" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Browse All Products</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Polarized Sunglasses", "item": "https://eyeviewglasses.com/products/polarized" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I tell if lenses are really polarized?",
            "acceptedAnswer": { "@type": "Answer", "text": "Hold the sunglasses in front of an LCD screen and rotate 90 degrees. Truly polarized lenses will make the screen go dark or change color at certain angles. We include a polarization test card with every order." }
          },
          {
            "@type": "Question",
            "name": "Are polarized lenses worth the extra cost?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Polarized adds $1.50-3.00 wholesale cost but lets you charge $10-30 more retail. It's the single best upsell in the sunglasses business." }
          },
          {
            "@type": "Question",
            "name": "Can polarized lenses affect seeing phone or GPS screens?",
            "acceptedAnswer": { "@type": "Answer", "text": "Some LCD screens can appear dark at certain angles with polarized lenses. Most modern OLED phones handle it fine. We offer driver-optimized polarized lenses with offset polarization to reduce this." }
          },
          {
            "@type": "Question",
            "name": "TAC, CR-39, or glass — which polarized lens should I choose?",
            "acceptedAnswer": { "@type": "Answer", "text": "TAC for most buyers (best value, 80% of orders). CR-39 for luxury/optical markets. Glass for serious fishing/boating enthusiasts wanting the absolute best optics." }
          },
          {
            "@type": "Question",
            "name": "What colors of polarized lenses do you offer?",
            "acceptedAnswer": { "@type": "Answer", "text": "Twelve options including gray, brown, amber, green G-15, blue/red/gold/silver mirror, yellow, rose, and photochromic. Gray and brown account for about 60% of orders." }
          },
          {
            "@type": "Question",
            "name": "What's the MOQ and can I mix polarized with non-polarized?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pieces per style and color. Yes, you can mix polarized and non-polarized versions of the same frame. Many retailers stock both as entry and premium tiers." }
          }
        ]
      })}} />
    </main>
  )
}

function AppCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
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
