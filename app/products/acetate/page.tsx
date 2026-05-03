import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Acetate Sunglasses Manufacturer | Handcrafted Acetate Eyewear Factory - EyeView',
  description: 'Custom acetate sunglasses manufacturer. Italian Mazzucchelli & premium Chinese acetate. Hand-polished frames, 200+ colors. MOQ 100pcs. CNC cut, barrel tumbled, factory direct.',
  keywords: 'acetate sunglasses manufacturer, custom acetate sunglasses factory, Italian acetate sunglasses, Mazzucchelli acetate, hand polished sunglasses, cellulose acetate eyewear, acetate frames wholesale',
  openGraph: {
    title: 'Acetate Sunglasses Manufacturer | Handcrafted Acetate Eyewear Factory - EyeView',
    description: 'Custom acetate sunglasses manufacturer. Italian Mazzucchelli & premium Chinese acetate. Hand-polished, 200+ colors. MOQ 100pcs. Factory direct.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/products/acetate',
  },
}

const acetateFaqs = [
  {
    question: 'What is the difference between Italian Mazzucchelli acetate and Chinese acetate?',
    answer: 'The honest answer is that the gap has narrowed significantly over the past decade, but there are still real differences. Mazzucchelli (and other Italian makers like Lapo) uses a slower, more controlled extrusion process that produces sheets with more consistent color depth and pattern distribution — especially visible in complex patterns like multi-layer tortoiseshell or crystal-clear transparent colors. Italian acetate also tends to polish to a slightly higher gloss. Chinese acetate from top-tier producers like Shenzhen Xin Rui or Taizhou Huangyan has improved dramatically and is genuinely good — excellent color range, good consistency, and about 30-40% cheaper. For most retail price points under $80, high-quality Chinese acetate is the smart choice. For premium brands retailing above $100 where the customer might compare your frame side-by-side with Céline or Tom Ford, Italian acetate gives you that last 10% of refinement.',
  },
  {
    question: 'How long does the acetate production process take?',
    answer: 'Longer than you might think — and that is actually what makes acetate special. From CNC cutting to final QC, a single pair takes 5-7 days of actual processing time. The big time sink is barrel tumbling (3-5 days to smooth all the machining marks) and hand polishing (20-30 minutes per pair by skilled workers). Total production lead time for an order is typically 20-28 days because we batch-process at each stage. Rush orders can be done in 14-18 days but we charge a 15% surcharge because we have to interrupt other production runs. Sample pairs take 5-7 business days.',
  },
  {
    question: 'What colors and patterns can you do in acetate?',
    answer: 'Essentially unlimited. We stock over 200 acetate sheet colors and patterns from our suppliers — solid colors, tortoiseshell (classic brown, blonde, dark), crystal/transparent (clear, grey, champagne, blue), marble, wood grain, horn effect, gradient, and multi-layer laminated patterns. For custom colors, you give us a Pantone code and the acetate supplier produces a matched sheet. Custom pattern development (like a unique tortoiseshell blend or a branded pattern) is also possible — minimum sheet order is usually 50-100kg, which translates to roughly 500-1,000 pairs depending on frame size. For smaller orders, we strongly recommend picking from existing stock colors — there are so many that you will almost certainly find what you need.',
  },
  {
    question: 'How should customers care for acetate sunglasses?',
    answer: 'Acetate is tougher than most people think, but there are a few things to know. First, keep them away from extreme heat — do not leave them on a car dashboard in summer. Acetate softens around 70-80°C (158-176°F), so sustained heat can warp the frame. Second, avoid acetone and harsh solvents — nail polish remover will damage the surface. Third, clean with warm water and mild soap, then dry with a soft cloth. No alcohol-based lens cleaners. The good news is that acetate frames can be adjusted by your optician with gentle heat, and minor scratches can often be buffed out. We include care instruction cards with every order at no extra charge — it saves your customers from the most common mistakes and reduces your return rate.',
  },
  {
    question: 'What is the MOQ for custom acetate sunglasses?',
    answer: 'Standard MOQ is 100 pieces per model. You can mix colors within that 100 — so 30 black, 30 tortoiseshell, and 40 crystal clear works fine. If you want a completely custom frame design (your own shape, not one of our existing molds), there is a one-time mold fee of $800-1,500 depending on complexity, and the MOQ for custom shapes is 300 pieces on the first order. After that, reorders go back to 100 pieces. For custom acetate sheet colors (Pantone matching), the sheet MOQ from the supplier is typically 50-100kg. We keep a large library of stock colors to avoid this minimum for smaller brands.',
  },
  {
    question: 'Why is acetate more expensive than injection-molded plastic?',
    answer: 'Because almost every step requires skilled human hands. Injection-molded frames (nylon, TR90, PC) are made by a machine in about 30 seconds — inject hot plastic into a mold, cool, pop it out, done. Acetate frames start as flat sheets that get CNC-cut into rough shapes, then barrel-tumbled for 3-5 days, then hand-polished one pair at a time for 20-30 minutes. The labor content is dramatically higher. Material cost is also higher — a kilogram of quality acetate sheet costs 3-5x more than injection-grade nylon pellets. The payoff is that acetate frames look and feel premium in a way that injection-molded plastic simply cannot match. The colors are richer, the surface has more depth, and there is a warmth and weight to acetate that customers associate with quality. That is why acetate frames retail at $60-200+ while injection-molded frames typically max out at $40-60.',
  },
]

const products = [
  {
    name: 'Classic Tortoiseshell Wayfarer',
    description: 'The tortoiseshell wayfarer is the single most requested acetate frame in the eyewear industry — and for good reason. The amber-and-brown pattern flatters every skin tone, photographs beautifully, and carries instant premium perception. We produce this in both Italian Mazzucchelli acetate (for premium lines) and high-quality Chinese acetate (for mid-range positioning). Each pair is hand-polished to a deep gloss that catches light in a way injection-molded plastic simply cannot replicate. If you are building an eyewear brand and need one safe first SKU, this is probably it.',
    price: '$6.00 - $11.00',
    moq: '100 pcs',
    features: ['Tortoiseshell Pattern', 'Hand-Polished', 'UV400 Lenses', '5-Barrel Hinge'],
  },
  {
    name: 'Crystal Clear Round',
    description: 'Transparent acetate has been trending hard for three years running and shows no signs of slowing. Our crystal clear round frame is optically clear — no yellow tint, no cloudiness — with that satisfying acetate heft that tells the customer they are holding something real. The round shape is huge with the indie/vintage crowd and performs especially well in Asian markets where rounder shapes suit more face types. We can do fully clear, or a subtle crystal grey, crystal champagne, or crystal blue if you want a hint of color.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['Crystal Clear', 'Round Shape', 'Optical Clarity', 'Multiple Tint Options'],
  },
  {
    name: 'Marble Effect Cat-Eye',
    description: 'The marble pattern is made by layering two or three different colored acetate sheets and pressing them together, creating a swirled stone-like effect that is completely unique to each pair. Paired with the cat-eye shape — which has been dominating women\'s eyewear since its comeback around 2018 — this is a statement piece. We see these performing especially well with fashion-forward DTC brands and boutique retailers. The marble pattern is available in white/grey, black/grey, green/gold, and pink/white, or we can develop a custom marble blend.',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    features: ['Marble Pattern', 'Cat-Eye Shape', 'Multi-Layer Acetate', 'Unique Per Pair'],
  },
  {
    name: 'Gradient Acetate Oversized',
    description: 'Two-tone gradient acetate — dark at the top, fading to light at the bottom. This is achieved by laminating two acetate sheets of different colors and controlling the thickness ratio. The oversized frame provides excellent sun coverage and has that luxury-brand look that performs well on Instagram and in fashion editorials. Available in black-to-clear, brown-to-honey, blue-to-clear, and wine-to-pink gradients. This style retails easily at $80-150 and the per-pair cost still starts under $10. Margins are excellent.',
    price: '$8.00 - $13.00',
    moq: '100 pcs',
    features: ['Gradient Two-Tone', 'Oversized Frame', 'Laminated Acetate', 'Premium Positioning'],
  },
  {
    name: 'Italian Acetate Premium Square',
    description: 'For brands competing at the top end of the market. This frame uses exclusively Mazzucchelli M49 acetate — the same grade used by Tom Ford, Céline, and Oliver Peoples. The difference is visible in the color depth and the polish quality. Our workers spend 30+ minutes hand-polishing each pair to achieve that liquid-glass finish. Five-barrel hinges with custom logo core wire. The square shape is versatile — works for both men and women — and the proportions are calibrated for a modern, slightly oversized look that photographs well. This is the pair that makes a buyer pick up your frame at a trade show and go "oh, this is nice."',
    price: '$10.00 - $16.00',
    moq: '100 pcs',
    features: ['Mazzucchelli M49', 'Premium Polish', '5-Barrel Hinges', 'Custom Core Wire'],
  },
  {
    name: 'Horn-Effect Acetate Browline',
    description: 'The horn-effect pattern mimics natural buffalo horn — dark striations on a lighter base that create an organic, almost wooden texture. Combined with the browline (clubmaster) shape, where the top half of the frame is thicker acetate and the bottom is thin metal wire, this is a distinctive hybrid design. The horn pattern is especially popular in the Japanese and Korean markets where it carries a sophisticated, intellectual aesthetic. Each pair has a slightly different pattern because of natural variation in the acetate sheet. We use German-made stainless steel for the bottom wire rim.',
    price: '$9.00 - $14.00',
    moq: '100 pcs',
    features: ['Horn-Effect Pattern', 'Browline Shape', 'Acetate + Metal Hybrid', 'German Steel Wire'],
  },
]

export default function AcetatePage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Custom Acetate Sunglasses',
        description: 'Handcrafted acetate sunglasses manufactured with Italian Mazzucchelli and premium Chinese acetate. CNC cut, barrel tumbled, hand polished. 200+ colors and patterns. Full OEM customization.',
        minPrice: '6.00',
        maxPrice: '16.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products' },
        { name: 'Acetate Sunglasses', url: 'https://eyeviewsunglasses.com/products/acetate' }
      ]} />
      <FAQPageSchema faqs={acetateFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Acetate Sunglasses</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop"
              alt="Acetate Sunglasses Manufacturer - Italian Mazzucchelli Handcrafted Eyewear Wholesale"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Acetate Sunglasses Manufacturer
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                If you have ever picked up a pair of sunglasses and immediately thought &ldquo;these feel expensive,&rdquo; you were almost certainly holding <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">cellulose acetate</a>. There is a reason every major luxury eyewear brand — from Tom Ford to Chanel to Oliver Peoples — builds their frames from this material. Acetate has a depth and richness that injection-molded plastic cannot touch. The colors are layered, not surface-painted. The polish has a warmth to it. And the weight — about 25-35 grams for a typical frame — sits on your face with a substance that says &ldquo;this costs more than $20.&rdquo;
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I have been manufacturing acetate sunglasses for 14 years, and the process still fascinates me. Unlike injection molding — where you squirt hot plastic into a mold and pop out a finished frame in 30 seconds — acetate frames start as flat sheets of material that go through a multi-day production journey: CNC cutting, barrel tumbling, hand polishing, assembly, and quality control. Every single pair passes through human hands multiple times. That is what makes acetate frames more expensive, and it is also what makes them better.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We work with two categories of acetate. For premium brands, we use <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mazzucchelli</a> Italian acetate — they have been making the stuff since 1849 and they are the gold standard. Their color library has over 2,000 patterns and their quality control is meticulous. For brands positioned in the mid-range ($40-80 retail), we use top-tier Chinese acetate from suppliers like Shenzhen Xin Rui, which has improved enormously in the past decade and offers great value. Both work. Which one you choose depends on your price point and your competition.
              </p>
              <p className="text-lg leading-relaxed">
                Our factory produces about 300,000 pairs of acetate sunglasses per year across all styles — <Link href="/products/wayfarer" className="text-primary-600 hover:underline">wayfarers</Link>, <Link href="/products/cat-eye" className="text-primary-600 hover:underline">cat-eyes</Link>, <Link href="/products/round" className="text-primary-600 hover:underline">rounds</Link>, squares, browlines, and custom shapes. We run 12 CNC machines, 6 tumbling drums, and employ 45 hand-polishing workers. Let me walk you through exactly how we turn a flat sheet of acetate into a finished pair of sunglasses.
              </p>
            </div>
          </div>

          {/* Production Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">How We Make Acetate Sunglasses</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              From flat sheet to finished frame in 5-7 days. Here is every step — no shortcuts, no secrets.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sheet Selection & CNC Cutting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    It starts with the acetate sheet — a block of material roughly 6mm thick in whatever color or pattern you have chosen. We load the sheet into a CNC (computer numerical control) milling machine that cuts the front frame and temples to precise specifications. The CNC follows your frame&apos;s 3D CAD file, cutting the lens grooves, bridge shape, and hinge pockets all in one operation. A skilled CNC operator can cut about 40-50 front frames per hour. At this stage, the frame is rough — you can see the machining marks and the edges are sharp.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Barrel Tumbling (3-5 Days)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This is the step that surprises people — the frames go into a rotating drum filled with wood chips, pumice, and a small amount of water. The drum rotates slowly for 3-5 days, and the friction gradually smooths out all the machining marks and rounds the edges. It is essentially a very slow, very gentle sanding process. You cannot rush this. We have tried. If you shorten the tumble, the surface is not smooth enough for the final polish to look right. Different patterns require different tumbling media — for example, crystal clear acetate needs finer media to avoid micro-scratching.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hand Polishing (20-30 Minutes Per Pair)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This is where the magic happens and where most of the cost comes from. A skilled worker takes each frame and polishes it by hand against a series of cotton buffing wheels, using progressively finer polishing compounds. The first wheel removes any remaining tumbling marks. The second brings up a semi-gloss. The third and final wheel produces that deep, liquid-glass shine that makes acetate frames look so premium. Our polishing workers have an average of 6 years of experience — it takes about a year of training before someone can polish consistently to our standard. This is the step that mass-market plastic frames skip entirely, and it is the reason acetate frames look and feel fundamentally different.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hinge Assembly & Lens Fitting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We insert the hinges (typically 5-barrel stainless steel with custom core wire for your logo), attach the temples, and mount the lenses. For acetate frames, lenses are cut to match the groove shape and inserted by gently heating the frame to about 60°C, which makes the acetate flexible enough to accept the lens without stress cracking. Each hinge is tested for smooth action and proper tension. Temple alignment is checked to ensure the frame sits level on a flat surface.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every pair goes through a 15-point inspection: lens alignment, hinge tension, temple symmetry, surface finish (checking for scratches, pits, or uneven polish), color consistency, UV protection verification (tested with a UV spectrometer), and physical measurements against the spec sheet. Our QC rejection rate on acetate frames is about 3-5% — higher than injection-molded frames (which run about 1-2%) because the hand processes introduce more variability. Rejected pairs go back for re-polishing or are scrapped entirely. We do not ship seconds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Italian vs Chinese Acetate */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Italian vs. Chinese Acetate: The Real Story</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              I get asked this on almost every call. Here is an honest comparison from someone who works with both every day.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-3">Italian Acetate (Mazzucchelli, Lapo)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Superior color depth and pattern consistency — especially in complex multi-layer patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Polishes to a slightly higher gloss with less effort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>2,000+ pattern library with decades of R&amp;D behind each one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>&ldquo;Made with Italian acetate&rdquo; is a legitimate marketing claim that resonates with premium buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>30-40% more expensive than equivalent Chinese acetate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Longer lead times for custom colors (6-8 weeks from order to sheet delivery)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Best for: Retail $80+</div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <div className="text-3xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold mb-3">Premium Chinese Acetate</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Excellent quality from top-tier producers — genuinely good, not a compromise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>30-40% lower cost per kilogram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Faster custom color turnaround (3-4 weeks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Lower sheet MOQ for custom colors (50kg vs 100kg for Italian)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>Complex patterns (multi-layer tortoiseshell) can have slightly less consistent distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">⚠</span>
                    <span>No &ldquo;Italian&rdquo; marketing story (though &ldquo;premium cellulose acetate&rdquo; still works)</span>
                  </li>
                </ul>
                <div className="mt-4 text-primary-600 font-bold">Best for: Retail $40-80</div>
              </div>
            </div>

            <p className="text-gray-500 text-center mt-8 text-sm">
              My recommendation: start with Chinese acetate to validate your designs and price points. Switch to Italian for your hero products once you have confirmed demand. Many successful brands use both — Italian for their flagship line, Chinese for their everyday collection.
            </p>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop" alt="Wholesale Acetate Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our Acetate Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🕶️</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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
                      ['Frame Material', 'Cellulose acetate — Italian (Mazzucchelli/Lapo) or premium Chinese'],
                      ['Frame Weight', '25-35g depending on frame size and thickness'],
                      ['Sheet Thickness', '5mm / 6mm / 8mm (most common: 6mm)'],
                      ['Available Patterns', '200+ stock colors: solid, tortoiseshell, crystal, marble, gradient, horn, wood grain, laminated'],
                      ['Custom Colors', 'Pantone matching available — sheet MOQ 50kg (Chinese) / 100kg (Italian)'],
                      ['Lens Material', 'Polycarbonate / TAC Polarized / CR-39 Optical / Glass'],
                      ['Lens Width', '48mm - 58mm (varies by frame style)'],
                      ['Bridge Width', '16mm - 22mm'],
                      ['Temple Length', '140mm / 145mm / 150mm'],
                      ['Hinges', '5-barrel stainless steel standard / spring hinges optional (+$0.30/pair)'],
                      ['UV Protection', 'UV400 — blocks 100% of UVA and UVB radiation'],
                      ['Production Process', 'CNC cutting → barrel tumbling (3-5 days) → hand polishing (20-30 min) → assembly → QC'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA (21 CFR 801.410) · UV400 · ISO 9001'],
                      ['MOQ', '100 pieces per model — mix colors allowed / 300 pcs for custom frame shapes'],
                      ['Mold Fee (Custom Shape)', '$800 - $1,500 one-time — waived on orders above 1,000 pcs'],
                      ['Sample Time', '5-7 business days'],
                      ['Production Time', '20-28 days standard / 14-18 days rush (+15%)'],
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

          {/* Color and Pattern Options */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Colors & Patterns</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              This is where acetate really shines compared to other materials. The range of colors and patterns you can achieve is essentially limitless.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🐢 Tortoiseshell</h3>
                <p className="text-sm text-gray-600">The classic. Available in brown/amber (traditional), blonde/honey (lighter, trendier), dark Havana (rich, almost black), and green/olive (unique). Multi-layer Italian tortoiseshell has the most depth and variation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">💎 Crystal / Transparent</h3>
                <p className="text-sm text-gray-600">Fully transparent or with a subtle tint. Crystal clear, crystal grey, crystal champagne, crystal blue, crystal pink. The key is optical clarity — cheap clear acetate looks milky. Ours does not.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🪨 Marble & Stone</h3>
                <p className="text-sm text-gray-600">Achieved by layering and pressing different colored acetate sheets. White marble, black marble, green jade, pink onyx. Each pair has slightly different swirl patterns — every frame is one-of-a-kind.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🌅 Gradient / Two-Tone</h3>
                <p className="text-sm text-gray-600">Dark at top, light at bottom (or side-to-side). Black to clear, brown to honey, navy to sky blue, wine to pink. Created by laminating two acetate sheets at different thickness ratios.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🎨 Solid Colors</h3>
                <p className="text-sm text-gray-600">Matte black, glossy black, navy, forest green, burgundy, cream, pastel pink, sky blue — and anything in between. Pantone matching for custom colors. The polish depth on solid acetate is stunning.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">🦌 Horn & Wood Effect</h3>
                <p className="text-sm text-gray-600">Acetate patterns that mimic natural buffalo horn or wood grain. Popular in Japanese and Korean markets. Each pair looks unique due to natural variation in the acetate sheet pattern.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Customization Options</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Acetate frames offer the widest range of customization of any frame material. Here is what we can do.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hot stamping</strong> — gold, silver, or colored foil on the inside temple. Classic, elegant.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Embossed/debossed</strong> — pressed into the acetate surface. Subtle and permanent.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Custom core wire</strong> — your logo laser-engraved on the metal hinge wire visible when the temple folds out.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Metal temple badge</strong> — zinc alloy or stainless steel logo plate riveted to the temple.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📐 Frame Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Custom shapes</strong> — send us a sketch or CAD file and we will cut a CNC mold ($800-1,500 one-time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Temple width</strong> — thin (4mm) for minimal look, thick (6-8mm) for bold statement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Keyhole vs saddle bridge</strong> — different nose bridge styles for different face shapes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Temple tip style</strong> — straight, curved, or paddle-end</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Leather cases</strong> — magnetic closure, debossed logo. The premium choice.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hard EVA cases</strong> — durable, lightweight, full-color logo printing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Microfiber pouch</strong> — custom printed, doubles as cleaning cloth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Retail-ready boxes</strong> — full-color printed, custom insert, hang tab, barcode label.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Acetate */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Why Acetate Commands Premium Pricing</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              Acetate frames retail at $60-200+. Here is why customers pay that premium — and why it works for your margins.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">✋ Handcrafted Process</h3>
                <p className="text-gray-300 text-sm">Every pair is touched by human hands multiple times. In a world of mass production, that matters. Customers can feel the difference — and they will pay for it. &ldquo;Hand-polished&rdquo; is a genuine marketing claim that resonates.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🎨 Color Depth</h3>
                <p className="text-gray-300 text-sm">Acetate colors are layered through the material, not painted on the surface. A tortoiseshell pattern has actual depth — you can see different layers at different angles. This is physically impossible with injection-molded plastic.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">⚖️ Perceived Quality</h3>
                <p className="text-gray-300 text-sm">The weight (25-35g), the warmth of the material against skin, the depth of the polish — everything about acetate communicates quality. Your customer picks it up and knows this is not a $15 pair of sunglasses.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🌿 Natural Origin</h3>
                <p className="text-gray-300 text-sm">Cellulose acetate is derived from cotton linters and wood pulp — it is a plant-based material, not petroleum-based. That matters increasingly to eco-conscious consumers and gives you a sustainability angle.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">🔧 Adjustability</h3>
                <p className="text-gray-300 text-sm">Acetate can be adjusted by any optician with gentle heat. The frame can be reshaped for a custom fit. Try that with injection-molded nylon — it snaps. This adjustability extends the product&apos;s usable life and reduces returns.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-amber-400">💰 Margin Math</h3>
                <p className="text-gray-300 text-sm">An acetate frame costs $6-16 per pair to produce. It retails at $60-200. That is a 4-12x markup — better than most consumer products. Even after accounting for marketing, packaging, and distribution, the margins on acetate eyewear are excellent.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Acetate Sunglasses FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {acetateFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/products/cat-eye" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">😸</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Cat-Eye Sunglasses</h3>
                <p className="text-gray-600 text-sm">Our most popular acetate style for women&apos;s brands. Available in all acetate colors and patterns.</p>
              </Link>
              <Link href="/products/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Wayfarer Sunglasses</h3>
                <p className="text-gray-600 text-sm">The best-selling acetate shape worldwide. Classic, versatile, and the safest first product for new brands.</p>
              </Link>
              <Link href="/products/round" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">⭕</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Round Sunglasses</h3>
                <p className="text-gray-600 text-sm">Vintage-inspired rounds in crystal, tortoiseshell, and solid acetate. Trending strongly in Asian markets.</p>
              </Link>
              <Link href="/blog/oem-vs-odm" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">OEM vs ODM Guide</h3>
                <p className="text-gray-600 text-sm">Not sure whether to use our existing designs or create your own? This guide breaks down the pros, cons, and costs.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Acetate Collection?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Send us your frame ideas, color preferences, and target price point. We will recommend the right acetate grade, send you material swatches, and have samples in your hands within a week. Italian or Chinese acetate — we will help you make the right call.
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
