import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: `Produttore Occhiali Wayfarer all'Ingrosso | Wayfarer OEM Personalizzati - EyeView`,
  description: `Produttore di occhiali wayfarer all'ingrosso. Montature in acetato premium, lenti UV400/polarizzate, stampa logo personalizzata. MOQ 100 pezzi.`,
  keywords: `occhiali wayfarer ingrosso, produttore wayfarer, wayfarer personalizzati, occhiali acetato ingrosso`,
  openGraph: {
    title: 'Wholesale Wayfarer Sunglasses Manufacturer | Custom Wayfarer OEM - EyeView',
    description: 'Wholesale wayfarer sunglasses manufacturer. Premium acetate frames, custom logo, UV400/polarized lenses. MOQ 100pcs. Factory direct.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/it/prodotti/wayfarer',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/prodotti/wayfarer',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/wayfarer',
      'it': 'https://eyeviewsunglasses.com/it/prodotti/wayfarer',
    },
  },
}

const wayfarerFaqs = [
  {
    question: 'What is the difference between acetate and plastic wayfarer sunglasses?',
    answer: 'Big difference, actually. Standard injection-molded plastic (PC or nylon) is cheap and lightweight but it looks and feels cheap too — thin, shiny, kind of hollow. Acetate is a plant-based material (made from cotton fibers and wood pulp) that gets cut from solid sheets and hand-polished. It has real depth of color, natural patterns you cannot fake with plastic, and a weight to it that feels substantial. Our acetate comes from Italian suppliers like Mazzucchelli who have been making the stuff since 1849. The price difference is about $2-3 per pair, but the perceived value jump is massive. Short version: if you want to charge more than $20 retail, go acetate.',
  },
  {
    question: 'How many colors and patterns do you offer for wayfarer frames?',
    answer: 'Over 200 and counting. The classic ones — solid black, dark tortoise, honey tortoise — are always in stock and ready to go. But we also carry transparent colors (clear, light blue, blush pink), two-tone combinations, marble effects, wood-grain patterns, and some pretty wild stuff like glitter-infused acetate. If you have a specific Pantone color or pattern in mind, we can source custom acetate sheets — that takes an extra 7-10 days and the MOQ goes up to 300 pieces, but it is worth it if you want something nobody else has.',
  },
  {
    question: 'How do wayfarers compare to aviators for my brand?',
    answer: 'They are honestly the two styles we recommend every new brand starts with, but they hit different notes. Wayfarers are acetate, so they come in way more colors and patterns — that means more SKUs and more visual variety on your product page or store shelf. They also cost less per pair ($5-11 vs $8-14 for aviators) so your margins can be better. Aviators are metal and have a more premium, sleek feel. The wayfarer is more casual, more colorful, more unisex. If you have to pick one: wayfarers for volume and variety, aviators for premium positioning. But seriously, most of our successful clients carry both.',
  },
  {
    question: 'What logo options work best on wayfarer sunglasses?',
    answer: 'Acetate frames give you different options than metal. The most popular method is hot stamping (gold or silver foil) on the inside of the temple — it looks clean and premium. We also do silk-screen printing (any color, inside or outside temple), embossed or debossed logos pressed directly into the acetate, and metal pin badges inserted into the temple. For the front frame, some clients do a small metal rivet or decorative stud with their logo. The inside-temple hot stamp is where most brands start — it runs about $0.15-0.20 per pair extra.',
  },
  {
    question: 'What is the MOQ for custom wayfarer sunglasses?',
    answer: 'Same as everything else we make — 100 pieces per model. You can mix colors within that 100, which is nice for testing. A typical first order from a new brand looks something like: 30 black, 20 tortoise, 20 clear, 15 matte black, 15 of something fun like a blue or pink. That gives you five options on your store without a huge financial commitment. When you reorder, most clients double down on the 2-3 colors that sold best and drop the ones that did not move.',
  },
]

const products = [
  {
    name: 'Classic Black Wayfarer',
    description: 'The one that started it all and still outsells everything else. Solid black acetate, grey UV400 lenses, polished finish. This is the sunglasses equivalent of a white t-shirt — it goes with everything and never goes out of style. We have shipped more of this single SKU than any other wayfarer in our catalog. If you are testing the market and can only pick one color, this is it. Every single sunglasses brand on the planet carries a black wayfarer, and there is a reason for that.',
    price: '$5.50 - $9.00',
    moq: '100 pcs',
    features: ['Solid Black Acetate', 'Grey UV400 Lens', 'Polished Finish', 'Spring Hinges'],
  },
  {
    name: 'Tortoise Shell Wayfarer',
    description: 'Classic dark tortoise acetate — the amber and brown swirl pattern that has been a menswear staple for decades. Each pair has a slightly different pattern because of how acetate sheets are cut, which actually adds to the premium feel (no two pairs are exactly alike). We use a deep, warm tortoise that photographs well and appeals across age groups. This is the second-best seller in our wayfarer line and a lot of brands use it as their "premium" option next to the black.',
    price: '$6.00 - $10.00',
    moq: '100 pcs',
    features: ['Dark Tortoise Pattern', 'Unique Per Pair', 'Brown Gradient Lens', 'Hand-Polished'],
  },
  {
    name: 'Crystal Clear Wayfarer',
    description: 'Transparent acetate frame with a slight polish that catches the light. This style has exploded in the last few years — it is all over Instagram and TikTok, and the younger crowd (18-30) really responds to it. Paired with light grey or blue tinted lenses for a clean, modern look. The transparent frame also makes the logo more visible if you do inside-temple branding. Great seller for fashion-forward brands and beach/resort shops. Expect this one to photograph really well for your product listings.',
    price: '$6.50 - $10.50',
    moq: '100 pcs',
    features: ['Transparent Acetate', 'Light Tinted Lens', 'Social Media Favorite', 'Visible Branding'],
  },
  {
    name: 'Matte Black Wayfarer',
    description: 'Same shape as the classic black but with a soft-touch matte finish that completely changes the vibe. The matte surface is achieved through a special tumbling process that removes the gloss without affecting durability. It feels more modern, more understated — kind of like the difference between a glossy and matte phone case. Paired with dark smoke lenses. This one does well with streetwear brands, minimalist labels, and any brand going for a "stealth luxury" look. Slightly higher per-pair cost due to the extra finishing step.',
    price: '$6.50 - $10.50',
    moq: '100 pcs',
    features: ['Matte Soft-Touch', 'Tumbled Finish', 'Dark Smoke Lens', 'Modern Aesthetic'],
  },
  {
    name: 'Ocean Blue Gradient Wayfarer',
    description: 'A translucent blue acetate frame that fades from deep navy at the top to lighter blue at the bottom — really eye-catching in person. Paired with blue gradient lenses that match the frame tone. This is the kind of product that makes someone stop scrolling. It is not for every brand (it is more statement than staple), but for resort lines, summer collections, and brands that want to stand out on a crowded shelf, it works. We see a lot of these ordered for limited edition runs and seasonal drops.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Gradient Blue Acetate', 'Color-Matched Lens', 'Statement Piece', 'Limited Edition Ready'],
  },
  {
    name: 'Red Acetate Wayfarer',
    description: 'Bold, unapologetic red acetate that demands attention. Not cherry red or fire-engine red — more of a deep, sophisticated burgundy-red that reads as confident without being loud. Paired with brown lenses for warmth. This is a power move in a collection: it draws the eye on your website grid, it pops on Instagram, and it signals that your brand is not afraid of color. Sells especially well to women and to brands targeting the fashion-conscious crowd. A smart add alongside your black and tortoise staples.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Deep Red Acetate', 'Brown Warm Lens', 'Attention-Grabbing', 'Fashion Forward'],
  },
]

export default function WayfarerPageIt() {
  return (
    <>
      <ProductSchema product={{
        name: 'Wholesale Wayfarer Sunglasses',
        description: 'Classic square wayfarer sunglasses with premium acetate frames. Over 200 colors and patterns available. UV400 and polarized lens options. Full OEM customization with logo printing.',
        minPrice: '5.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products' },
        { name: 'Wayfarer Sunglasses', url: 'https://eyeviewsunglasses.com/products/wayfarer' }
      ]} />
      <FAQPageSchema faqs={wayfarerFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/it/prodotti" className="hover:text-primary-600">Prodotti</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Wayfarer Sunglasses</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wholesale Wayfarer Sunglasses
            </h1>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Wholesale Wayfarer Sunglasses - Custom Acetate Frame Eyewear Manufacturer"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                The wayfarer has a story that no other sunglasses shape can match. In 1952, a <a href="https://en.wikipedia.org/wiki/Ray-Ban_Wayfarer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">designer named Raymond Stegeman</a> at Bausch &amp; Lomb did something radical: he ditched metal entirely and designed a sunglasses frame made from a new material called acetate. The result was bold, angular, and completely unlike anything people had seen before. It looked like the future.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Hollywood noticed fast. James Dean wore wayfarers in <em>Rebel Without a Cause</em>. Audrey Hepburn wore them in <em>Breakfast at Tiffany&apos;s</em>. By the 1960s, wayfarers were everywhere — on rock stars, politicians, artists, and regular people who just wanted to look cool. Sales dipped in the 70s and 80s, then <em>Top Gun</em> and <em>The Breakfast Club</em> brought them roaring back. The pattern has repeated every decade since: wayfarers dip slightly, then come back stronger. At this point, calling them a &ldquo;trend&rdquo; misses the point. They are a permanent fixture.
              </p>
              <p className="text-lg leading-relaxed">
                As a <strong>wayfarer sunglasses manufacturer</strong>, we produce these frames in premium <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Italian-grade acetate</a> — the same type of material used by luxury brands charging $200-400 retail. Acetate is plant-based (cotton fibers and wood pulp), hypoallergenic, and has a richness of color that injection-molded plastic simply cannot replicate. We stock over 200 colors and patterns, and we can source custom acetate for unique brand requirements. With pricing starting at just $5.50 per pair, wholesale wayfarers offer some of the best margins in the entire eyewear business.
              </p>
            </div>
          </div>

          {/* Aviator vs Wayfarer Comparison */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-6">Wayfarer vs Aviator: Quick Comparison</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              A lot of our clients ask which one to start with. Here is the honest side-by-side.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left font-semibold text-gray-700"></th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">🔲 Wayfarer</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-700">✈️ <Link href="/it/prodotti/aviatore" className="text-primary-600 hover:underline">Aviator</Link></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-6 py-3 font-medium">Frame Material</td><td className="px-6 py-3 text-gray-600">Acetate / PC plastic</td><td className="px-6 py-3 text-gray-600">Stainless steel / Aluminum / Titanium</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Price Range</td><td className="px-6 py-3 text-gray-600">$5 - $11 / pair</td><td className="px-6 py-3 text-gray-600">$8 - $22 / pair</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Color Options</td><td className="px-6 py-3 text-gray-600">200+ (huge variety)</td><td className="px-6 py-3 text-gray-600">5-8 plating colors</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Weight</td><td className="px-6 py-3 text-gray-600">25-32g</td><td className="px-6 py-3 text-gray-600">15-32g (varies by metal)</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Best Logo Method</td><td className="px-6 py-3 text-gray-600">Hot stamping / embossed</td><td className="px-6 py-3 text-gray-600">Laser engraving</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Vibe</td><td className="px-6 py-3 text-gray-600">Casual, colorful, bold</td><td className="px-6 py-3 text-gray-600">Sleek, classic, premium</td></tr>
                    <tr><td className="px-6 py-3 font-medium">Best For</td><td className="px-6 py-3 text-gray-600">Volume, variety, fashion</td><td className="px-6 py-3 text-gray-600">Premium positioning</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Wholesale Wayfarer Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our Wayfarer Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
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
                      <Link href="/it/contatti" className="btn-primary text-sm">Get Quote</Link>
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
                      ['Frame Material', 'Italian-grade Acetate (Mazzucchelli / similar) or PC Plastic'],
                      ['Frame Weight', 'Acetate: 28-32g | PC Plastic: 20-24g'],
                      ['Lens Material', 'Polycarbonate / TAC Polarized / CR-39 Optical'],
                      ['Lens Width', '50mm / 52mm / 54mm / 56mm'],
                      ['Bridge Width', '18mm / 20mm / 22mm'],
                      ['Temple Length', '140mm / 145mm / 150mm'],
                      ['Lens Height', '38mm - 44mm'],
                      ['UV Protection', 'UV400 — blocks 100% of UVA and UVB radiation'],
                      ['Polarization', 'Optional 7-layer TAC film — 99% glare reduction'],
                      ['Frame Colors', '200+ acetate colors: solid, tortoise, transparent, marble, gradient, custom'],
                      ['Lens Colors', 'Grey, Brown, Green, Blue, Pink, Yellow, Mirror, Gradient — all available'],
                      ['Hinges', '5-barrel spring hinges (standard) or 7-barrel (premium)'],
                      ['Nose Bridge', 'Integrated keyhole or saddle bridge — molded into frame'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
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

          {/* Acetate Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Why Acetate Matters (And Why Cheap Plastic Doesn&apos;t Cut It)</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              If you are going to sell wayfarers, you need to understand the material. This is the single biggest factor in how premium your product feels.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-green-700">✅ Acetate (What We Recommend)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Acetate</a> is made from cotton fibers and wood pulp — it is technically a plant-based material, which is a nice sustainability angle for marketing. It is cut from solid sheets (not injection-molded), which means the colors go all the way through. Scratch the surface and the color is still there. The material has a natural warmth and depth that looks expensive. It is also hypoallergenic and adjustable — opticians can heat-adjust acetate frames for a custom fit.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our acetate comes from established Italian manufacturers like <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> (founded 1849) who supply the same raw material to luxury eyewear houses. The cost difference vs plastic is $2-3/pair, but the perceived value jump at retail is $20-40. That is the best ROI upgrade you can make.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-500">⚠️ PC / Injection-Molded Plastic</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We offer this too, and it has its place — mainly for promotional products, budget lines under $15 retail, and kids sunglasses where durability matters more than feel. PC plastic is lighter (20-24g vs 28-32g for acetate), cheaper ($3.50-6/pair), and virtually indestructible.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  But it does not feel premium. The color is surface-deep (it can scratch off), the finish is shiny in a way that screams &ldquo;cheap,&rdquo; and there is no natural pattern variation. If your brand is positioned above the gas station sunglasses tier, go with acetate. If you are doing a $5 promo giveaway at a trade show, plastic is fine. We will not judge — we make both.
                </p>
              </div>
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Customization for Wayfarer Sunglasses</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Acetate opens up some branding options you do not get with metal frames. Here is what works best.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Logo Options</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hot stamping</strong> — gold or silver foil pressed into the temple. Clean, luxe, our most popular for wayfarers. ~$0.15-0.20/pair.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Silk-screen printing</strong> — any color, inside or outside temple. More visible than hot stamping.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Embossed / debossed</strong> — logo pressed directly into the acetate. Subtle, tactile, very premium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Metal pin badge</strong> — small metal logo inserted into the temple. 3D effect that stands out.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Color &amp; Pattern</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>200+ stock acetate colors</strong> — solid, tortoise, transparent, marble, woodgrain, gradient</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Custom Pantone matching</strong> — give us a color code and we source the acetate to match (MOQ 300pcs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Two-tone frames</strong> — different color inside vs outside for a layered look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Matte or glossy finish</strong> — glossy is standard, matte costs ~$0.30/pair extra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hard cases:</strong> EVA, faux leather, or cardboard — all with your logo. $0.80-2.50/pc depending on material.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Microfiber pouches:</strong> printed with your brand, doubles as cleaning cloth. $0.30-0.50/pc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Retail boxes:</strong> full-color printed, custom size, with foam or cardboard insert. $0.60-1.50/pc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Extras:</strong> cleaning cloths ($0.15), warranty cards ($0.08), hang tags ($0.10), stickers ($0.05)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys */}
          <section className="mb-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Who Orders Wholesale Wayfarers?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Wayfarers are the most versatile frame shape in eyewear. Here is who is buying them and why.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🚀 New Brand Launches</h3>
                <p className="text-gray-600 text-sm">First-time eyewear brands that want a safe, crowd-pleasing style to launch with. Low per-pair cost means more budget left for marketing and packaging.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛒 E-Commerce Sellers</h3>
                <p className="text-gray-600 text-sm">Shopify, Amazon, and Etsy sellers who need a deep catalog of colors. The 200+ acetate options mean you can have 10-20 unique product listings from one frame shape.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎪 Event & Promo Companies</h3>
                <p className="text-gray-600 text-sm">Corporate events, music festivals, weddings, trade shows — custom-colored wayfarers with a logo are the perfect giveaway. People actually keep and wear them.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏬 Retail & Boutique Shops</h3>
                <p className="text-gray-600 text-sm">Brick-and-mortar stores that want their own house brand. The variety of colors lets you fill a display rack with just one frame shape — which simplifies inventory.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">👗 Fashion & Apparel Brands</h3>
                <p className="text-gray-600 text-sm">Clothing brands adding sunglasses as an accessory line. Wayfarers match virtually any fashion aesthetic, and the color range lets you do seasonal colorways.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏖️ Resort & Tourism</h3>
                <p className="text-gray-600 text-sm">Hotels, cruise lines, and tourist shops. Custom wayfarers with the destination name make great souvenirs that people actually use — not another fridge magnet.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Wayfarer Sunglasses FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {wayfarerFaqs.map((faq, index) => (
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
              <Link href="/it/prodotti/aviatore" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Aviator Sunglasses</h3>
                <p className="text-gray-600 text-sm">Metal frames, teardrop shape, premium feel. The other &ldquo;must have&rdquo; in any eyewear collection. Most brands carry both aviators and wayfarers.</p>
              </Link>
              <Link href="/it/prodotti/occhio-di-gatto" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😺</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Cat Eye Sunglasses</h3>
                <p className="text-gray-600 text-sm">If your brand targets women, cat-eyes are the perfect complement to wayfarers. Upswept acetate frames with a retro-glam vibe.</p>
              </Link>
              <Link href="/it/prodotti/polarizzato" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Polarized Sunglasses</h3>
                <p className="text-gray-600 text-sm">Add polarized lenses to any wayfarer for a premium upgrade. Costs $2-3 more per pair, lets you charge $15-20 more at retail.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Order Wayfarers?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Tell us what colors and specs you need and we will have a quote back to you within 24 hours.
              Samples ship in 3-5 days. No commitment until you say go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/it/contatti" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Get a Quote
              </Link>
              <Link href="/it/prodotti" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                View All Products
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
