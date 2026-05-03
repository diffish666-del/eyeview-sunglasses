import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Wholesale Aviator Sunglasses Manufacturer | Custom Aviator Sunglasses OEM - EyeView',
  description: 'Leading wholesale aviator sunglasses manufacturer. Custom aviator sunglasses with logo engraving, metal frames, UV400/polarized lenses. MOQ 100pcs. Factory direct. Get quote!',
  keywords: 'wholesale aviator sunglasses, aviator sunglasses manufacturer, custom aviator sunglasses, OEM aviator sunglasses, bulk aviator sunglasses, metal frame sunglasses wholesale',
  openGraph: {
    title: 'Wholesale Aviator Sunglasses Manufacturer | Custom Aviator OEM - EyeView',
    description: 'Leading wholesale aviator sunglasses manufacturer. Custom logo, metal frames, UV400/polarized lenses. MOQ 100pcs. Factory direct pricing.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/products/aviator',
  },
}

const aviatorFaqs = [
  {
    question: 'What is the minimum order for wholesale aviator sunglasses?',
    answer: 'Just 100 pieces per model. And here is the nice part — you can mix within that 100. So you could do 20 gold frames with grey lenses, 30 silver with blue mirror, and 50 black with gradient. That lets you test which combos your customers actually buy instead of guessing. Most of our aviator clients start with 200-300 pieces across 2-3 color combos, then reorder the winners in bigger quantities.',
  },
  {
    question: 'What metal options do you have for aviator frames?',
    answer: 'Three main ones. Stainless steel is our most popular — tough, looks great, does not tarnish, and runs $8-12/pair. Aluminum alloy is about 40% lighter (great for all-day wear), costs $10-14/pair. And then there is beta-titanium for the premium end — hypoallergenic (the International Organization for Standardization classifies titanium as a biocompatible material per ISO 5832), insanely light at 15-20 grams, and nearly impossible to break. Titanium runs $14-22/pair but it lets you charge $80-150+ at retail, so the margins are actually better. Any of them can be plated in gold, silver, black, rose gold, or custom colors.',
  },
  {
    question: 'Can I get my logo engraved on aviator sunglasses?',
    answer: 'Absolutely, and honestly this is where metal aviators really shine compared to plastic frames. Laser engraving looks incredible on metal — crisp, permanent, and classy. We can engrave on the inside or outside of the temples. If you want something bolder, we do 3D metal badges (zinc alloy or stainless steel) that solder right onto the temple or bridge. There is also lens printing for subtle corner logos and custom-engraved nose pads if you really want to go all-in on branding.',
  },
  {
    question: 'Do you offer polarized lenses for aviators?',
    answer: 'We do, and I would strongly recommend them. Our TAC polarized lenses use a 7-layer film that kills 99% of glare — the difference is night and day, especially for driving. Here is the business case: polarized aviators sell for 25-40% more at retail than standard UV400. So a pair that retails at $40 non-polarized can easily sell at $50-55 polarized. We also do photochromic lenses (darken in sunlight), mirror coatings, anti-reflective coatings, and gradient tints. Mix and match however you want.',
  },
  {
    question: 'How are aviators different from wayfarers for wholesale?',
    answer: 'Good question — we get this a lot. The short version: aviators are metal, wayfarers are acetate/plastic. That means aviators cost a bit more per pair ($8-14 vs $5-11) but they also carry a more premium feel. Aviators tend to skew slightly more masculine and have that military/pilot heritage going for them. Wayfarers are more unisex and come in way more colors. Honestly? Most successful brands carry both. If you have to pick one, aviators if you are going for premium positioning, wayfarers if you want volume.',
  },
  {
    question: 'What packaging can I get with my aviator order?',
    answer: 'We do the whole range. Most popular setup is a branded hard case (EVA with your logo printed on it) plus a microfiber pouch that doubles as a cleaning cloth. Runs about $1.50-2.50 per set depending on materials. We also do leather cases, metal tins, custom cardboard boxes with full-color printing, warranty cards, and hang tags. For premium lines, some clients go with magnetic closure boxes or even wooden cases. Packaging MOQ is 500 pieces — but you can use generic packaging for your first small order and switch to custom on the reorder.',
  },
]

const products = [
  {
    name: 'Classic Gold Aviator',
    description: 'This is the one everyone pictures when you say "aviator." Polished gold-tone stainless steel, teardrop shape, green G-15 tinted lenses that cut glare without making everything look weird. The gold finish is PVD-coated (not cheap spray paint) so it holds up to daily wear. We sell more of these than any other single SKU — and most of our clients say the same. If you are starting an eyewear brand and want one safe bet, this is it.',
    price: '$8.50 - $12.00',
    moq: '100 pcs',
    features: ['Stainless Steel', 'G-15 Green Lens', 'PVD Gold Finish', 'Silicone Nose Pads'],
  },
  {
    name: 'Silver Mirror Aviator',
    description: 'Silver frame, silver mirror lenses — the kind of sunglasses you see on every beach vacation. The mirror coating reflects about 60% of incoming light, which makes these genuinely good for bright conditions (not just cool-looking). The frame is rhodium-plated stainless steel that will not tarnish even in salty coastal air. Spring hinges give them a little flex so they fit different head sizes without feeling too tight or too loose. Big seller for resort brands and beach shops.',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    features: ['Rhodium Plated', 'Mirror Coating', 'Spring Hinges', 'Corrosion Resistant'],
  },
  {
    name: 'Matte Black Stealth Aviator',
    description: 'For brands going after that tactical, no-nonsense look. The matte electroplating gives the frame a completely non-reflective surface — very different feel from shiny gold or silver. Paired with dark smoke lenses that block 85% of visible light, these are serious sun protection. We see a lot of orders for these from outdoor brands, law enforcement supply companies, and menswear labels. The reinforced temple tips are a nice touch — they grip without sliding even when you sweat.',
    price: '$9.00 - $13.00',
    moq: '100 pcs',
    features: ['Matte Finish', 'Dark Smoke Lens', 'Reinforced Tips', 'Non-Reflective'],
  },
  {
    name: 'Rose Gold Fashion Aviator',
    description: 'Rose gold has been the hot finish for about five years now and it shows no sign of slowing down. The warm pink-gold tone photographs beautifully (huge for brands that sell through Instagram), and it flatters basically every skin tone. We pair these with pink gradient lenses — dark at the top, light at the bottom — which gives them that effortless fashion look. Made from aluminum alloy so they come in at under 25 grams. If your customer is a 22-year-old woman shopping on her phone, this is what she is clicking on.',
    price: '$10.00 - $14.00',
    moq: '100 pcs',
    features: ['Aluminum Alloy', 'Pink Gradient Lens', 'Under 25g', 'Rose Gold Tone'],
  },
  {
    name: 'Blue Mirror Polarized Aviator',
    description: 'Vivid ocean blue mirror lenses with real polarization underneath — so they look amazing AND actually work. The TAC polarized film blocks 99% of glare bouncing off water, roads, and snow. Gunmetal frame keeps the focus on those lenses. This is our go-to recommendation for clients selling to the coastal/surf/fishing crowd. They photograph well, they perform well, and they justify a higher retail price because of the polarization. Runs about $2-3 more per pair than non-polarized, but you can charge $15-20 more at retail.',
    price: '$11.00 - $15.00',
    moq: '100 pcs',
    features: ['TAC Polarized', 'Blue Mirror', 'Gunmetal Frame', '99% Glare Reduction'],
  },
  {
    name: 'Premium Titanium Aviator',
    description: 'The top of our aviator line. Beta-titanium frame that weighs 15 grams — you barely feel it on your face. Titanium is hypoallergenic (no nickel, no reactions), corrosion-proof, and you can bend it and it springs right back. We pair these with anti-reflective CR-39 optical lenses — same grade you would find in $200+ designer frames. This is for brands that want to compete at the premium end of the market. Your retail price can easily be $80-150+, and the per-unit cost is still only $14-22. Do the math on those margins.',
    price: '$14.00 - $22.00',
    moq: '100 pcs',
    features: ['Beta Titanium', 'CR-39 Optical Lens', 'Anti-Reflective', 'Just 15 Grams'],
  },
]

export default function AviatorPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Wholesale Aviator Sunglasses',
        description: 'Classic teardrop aviator sunglasses with metal frames. Available in stainless steel, aluminum alloy, and titanium. UV400 and polarized lens options. Full OEM customization with logo engraving.',
        minPrice: '8.50',
        maxPrice: '22.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products' },
        { name: 'Aviator Sunglasses', url: 'https://eyeviewsunglasses.com/products/aviator' }
      ]} />
      <FAQPageSchema faqs={aviatorFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Aviator Sunglasses</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wholesale Aviator Sunglasses
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=500&fit=crop"
              alt="Wholesale Aviator Sunglasses - Custom OEM Metal Frame Eyewear Manufacturer"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Here is a fun bit of history: the aviator was never supposed to be a fashion item. Back in 1936, <a href="https://www.bausch.com/our-company/history/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bausch &amp; Lomb</a> got a contract from the U.S. Army Air Corps to design sunglasses for military pilots. The problem was specific — pilots were flying higher and faster than ever, and the sun was wrecking their vision. The solution? A big teardrop-shaped lens that covered the entire eye socket, a thin metal frame that weighed almost nothing under a flight helmet, and a double bridge across the nose to spread the pressure. They called them &ldquo;aviators&rdquo; because, well, that is who wore them.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Then World War II happened, and suddenly millions of soldiers were wearing these things. When they came home, they kept wearing them. By the 1960s and 70s, aviators had jumped from the cockpit to Hollywood — worn by everyone from Paul Newman to the cast of Top Gun. The style just stuck. Almost 90 years later, the basic design has barely changed, and aviators are still one of the top three selling sunglasses shapes worldwide. That is not a trend — that is a classic.
              </p>
              <p className="text-lg leading-relaxed">
                We produce over 200,000 pairs of <strong>custom aviator sunglasses</strong> per year for brands in 50+ countries. Our factory runs dedicated metal frame production lines with CNC machining, PVD electroplating, and precision lens mounting. Whether you need 100 pairs to test a new market or 50,000 pairs for a national retail rollout, we have the capacity and the experience. And because aviators are our bread and butter, we have the process dialed in — which means faster production, fewer defects, and better pricing.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our Aviator Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/contact" className="btn-primary text-sm">Get Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Full Specs</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Frame Material', 'Stainless Steel / Aluminum Alloy / Beta Titanium'],
                      ['Frame Weight', 'Steel: 28-32g | Aluminum: 18-22g | Titanium: 15-18g'],
                      ['Lens Material', 'Polycarbonate / TAC Polarized / CR-39 Optical / Glass'],
                      ['Lens Width', '55mm / 58mm / 60mm / 62mm'],
                      ['Bridge Width', '14mm / 15mm / 16mm / 18mm'],
                      ['Temple Length', '135mm / 140mm / 145mm'],
                      ['Lens Height', '48mm - 52mm (teardrop shape)'],
                      ['UV Protection', 'UV400 — blocks 100% of UVA (315-380nm) and UVB (280-315nm)'],
                      ['Polarization', 'Optional 7-layer TAC film — 99% glare reduction'],
                      ['Frame Colors', 'Gold, Silver, Gunmetal, Matte Black, Rose Gold, or custom PVD'],
                      ['Lens Colors', 'Grey, Green G-15, Brown, Blue, Pink, Mirror, Gradient'],
                      ['Nose Pads', 'Adjustable silicone with titanium arm'],
                      ['Hinges', 'Standard barrel or spring-loaded (flex fit)'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001 — docs available on request'],
                      ['MOQ', '100 pieces per model — mix colors allowed'],
                      ['Sample Time', '3-5 business days'],
                      ['Production Time', '15-20 days standard / 10-12 days rush'],
                    ].map(([label, value], i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{label}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Frame Material Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Picking the Right Metal for Your Aviators</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              This is one of the first decisions you will make, and it affects everything — cost, weight, durability, and how premium your product feels in someone&apos;s hand. Here is the honest breakdown.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔩</div>
                <h3 className="text-xl font-bold mb-3">Stainless Steel</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our most popular option and what we recommend for most brands. We use <a href="https://en.wikipedia.org/wiki/SAE_304_stainless_steel" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">304 or 316L grade steel</a> — the same stuff in good watches. It is strong, it does not corrode, and it takes plating beautifully. Gold, silver, black, rose gold — all of them look sharp on steel and hold up over time. The weight (28-32g) actually works in your favor here because customers associate that slight heft with quality. Best fit for brands retailing at $20-60.
                </p>
                <div className="text-primary-600 font-bold">$8 - $12 / pair</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🪶</div>
                <h3 className="text-xl font-bold mb-3">Aluminum Alloy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If your customers care about comfort — and especially if they wear sunglasses all day — aluminum is worth the upgrade. At 18-22g it is noticeably lighter than steel. We use <a href="https://en.wikipedia.org/wiki/6061_aluminium_alloy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">6061-T6 or 7075 aircraft-grade alloy</a> (same stuff they use in airplane fuselages, if you want a selling point). The frames can be anodized in pretty much any color, and the finish is really durable. Good fit for outdoor brands, athleisure lines, and the $40-80 retail range.
                </p>
                <div className="text-primary-600 font-bold">$10 - $14 / pair</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Titanium</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The prestige play. Beta-titanium at 15-18g is almost comically light — people put them on and immediately go &ldquo;wow.&rdquo; It is 100% hypoallergenic (no nickel at all), which is a real selling point for sensitive skin. And the flexibility is wild — you can bend the temples almost flat and they spring right back. The catch? It costs more. But here is the thing: titanium lets you retail at $80-200+ with a straight face. The per-pair margins are often better than cheaper frames.
                </p>
                <div className="text-primary-600 font-bold">$14 - $22 / pair</div>
              </div>
            </div>
          </section>

          {/* Lens Options */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Lens Options</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              The frame gets the attention, but the lens is what your customer actually looks through every day. Here is what we offer.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Polycarbonate (PC)</h3>
                <p className="text-sm text-gray-600">The standard. Impact-resistant, lightweight, shatter-proof — 10x stronger than glass. Works for everything from casual wear to sports. All our colors and mirror coatings are available on PC. This is what 70% of our clients use.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">TAC Polarized</h3>
                <p className="text-sm text-gray-600">Seven layers of polarized film sandwiched between PC. Kills 99% of reflected glare. The upgrade that justifies charging more. Adds about $2-3 to your per-pair cost but lets you charge $15-20 more at retail. Worth it.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">CR-39 Optical</h3>
                <p className="text-sm text-gray-600">If you want to compete with the big brands on lens quality, this is it. Abbe number of 58 means razor-sharp optics with zero distortion. Scratch-resistant. Lighter than glass. The choice for premium positioning.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Photochromic</h3>
                <p className="text-sm text-gray-600">Darkens in sunlight, clears indoors. Goes from Category 1 to Category 3 in about 30 seconds. Neat trick and a good selling point for customers who want one pair for everything. Adds about $3-4 per pair.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Glass</h3>
                <p className="text-sm text-gray-600">Old school, but some markets love it. Best optical clarity, most scratch-resistant, heaviest. Popular in Europe and Japan where glass lenses carry a premium perception. We can do mineral glass in all standard tints.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Coatings You Can Add</h3>
                <p className="text-sm text-gray-600">Mirror (silver, blue, gold, red, green, purple), anti-reflective, hydrophobic (repels water), oleophobic (resists fingerprints), and anti-fog. Stack them however you want.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Making Them Yours</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              This is where you turn a great pair of sunglasses into YOUR product. Here is everything we can customize.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Logo Work</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Laser engraving</strong> — our most popular. Clean, permanent, looks great on metal. Inside or outside temple.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Metal badge</strong> — a little 3D zinc alloy or steel badge soldered to the temple. Feels expensive.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Lens printing</strong> — small logo silk-screened in the corner of the lens. Subtle but visible.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Custom nose pads</strong> — your logo engraved or printed on the silicone pads. A nice detail.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Colors</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Frame:</strong> Gold, Silver, Black, Gunmetal, Rose Gold — or give us a Pantone code and we will match it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Lens tints:</strong> Grey, Green, Brown, Blue, Pink, Yellow, Red — or custom match</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Mirror:</strong> Silver, Blue, Gold, Red, Green, Purple, Rose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Gradient:</strong> Top-to-bottom fade in any lens color</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hard cases:</strong> EVA zipper, leather magnetic, or metal tin — all with your logo printed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Soft pouches:</strong> Microfiber drawstring with logo — doubles as a cleaning cloth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Retail boxes:</strong> Full-color printed cardboard, custom inserts, hang tabs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> Cleaning cloths, warranty cards, hang tags, stickers — all branded</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Who Buys Wholesale Aviators?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              We ship aviators to a pretty wide range of businesses. Here are the most common ones.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏪 Eyewear Brand Owners</h3>
                <p className="text-gray-300 text-sm">First-time and established brands building their product line. Aviators are usually the first style they launch — they are safe, they sell, and they look good in marketing photos.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🛍️ Retail Shops</h3>
                <p className="text-gray-300 text-sm">Boutiques, surf shops, optical stores, and department store buyers looking for their own house brand. Our 100-piece minimum means small shops can get in without huge risk.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🌐 Online Sellers</h3>
                <p className="text-gray-300 text-sm">Amazon, Shopify, Etsy sellers who need quality product at margins that work for e-commerce. We can provide product photos and descriptions to speed up your listing.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🎁 Corporate & Promo</h3>
                <p className="text-gray-300 text-sm">Companies ordering branded aviators for trade shows, golf tournaments, team gifts, and events. High perceived value at a price point that works for promotional budgets.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏨 Hotels & Resorts</h3>
                <p className="text-gray-300 text-sm">Hospitality brands offering custom aviators as guest amenities or gift shop items. Custom packaging with the resort name creates a nice souvenir guests actually keep.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">📦 Distributors</h3>
                <p className="text-gray-300 text-sm">Regional wholesalers supplying multiple retailers. Our volume pricing at 1,000+ and 5,000+ tiers gives distributors the margins they need to service their accounts.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Aviator Sunglasses FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {aviatorFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Wayfarer Sunglasses</h3>
                <p className="text-gray-600 text-sm">The other &ldquo;must have&rdquo; style. Acetate frames, tons of colors, and the best-selling shape worldwide. Most brands carry both aviators and wayfarers.</p>
              </Link>
              <Link href="/products/polarized" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Polarized Sunglasses</h3>
                <p className="text-gray-600 text-sm">Add polarized lenses to any aviator for a premium upgrade. 99% glare reduction, 25-40% higher retail price. The easiest way to boost your margins.</p>
              </Link>
              <Link href="/products/sport" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Sport Sunglasses</h3>
                <p className="text-gray-600 text-sm">If your customers need something tougher than aviators — TR90 wraparound frames with anti-slip grips for running, cycling, and outdoor sports.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Order Aviators?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Tell us what you need — style, quantity, any custom work — and we will get back to you within 24 hours with pricing.
              Samples ship in 3-5 days. No commitment until you are ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Get a Quote
              </Link>
              <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                View All Products
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
