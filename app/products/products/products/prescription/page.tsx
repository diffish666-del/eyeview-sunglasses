import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Prescription Sunglasses Manufacturer | Custom Rx Eyewear Wholesale - EyeView',
  description: 'Prescription sunglasses manufacturer offering custom Rx eyewear wholesale. Single vision, progressive, bifocal lenses. Polarized prescription options. MOQ 100pcs. Factory direct.',
  keywords: 'prescription sunglasses manufacturer, custom Rx sunglasses wholesale, progressive sunglasses factory, polarized prescription sunglasses, photochromic Rx sunglasses, blue light prescription sunglasses, oem prescription eyewear',
  openGraph: {
    title: 'Prescription Sunglasses Manufacturer | Custom Rx Eyewear Wholesale - EyeView',
    description: 'Prescription sunglasses manufacturer. Single vision, progressive, bifocal Rx lenses. Polarized and photochromic options. MOQ 100pcs. Factory direct pricing.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/products/prescription/',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/products/prescription/',
  },
}

const rxFaqs = [
  {
    question: 'What prescription types can you manufacture?',
    answer: 'We cover the full range. Single vision is our bread and butter -- that is your standard distance or reading prescription in tinted lenses. Progressive (no-line bifocal) is the fastest-growing segment because customers want distance, intermediate, and near vision in one pair of sunglasses. We also do traditional bifocal (with the visible line) though demand has dropped significantly. For specialized needs, we can do prism lenses, anisometropic prescriptions (different power in each eye up to ±8.00 sphere), and even free-form digital surfacing for high-precision prescriptions. Our lens lab uses digital free-form generators that handle prescriptions from ±0.25 to ±8.00 sphere and up to ±4.00 cylinder for astigmatism.',
  },
  {
    question: 'What lens materials do you offer for prescription sunglasses?',
    answer: 'Three main options. Polycarbonate is the standard -- it is impact-resistant, lightweight (about 2.0g per lens), and inherently UV-blocking. This is what we recommend for most prescription sunglasses because it meets FDA drop-ball impact requirements without extra treatment. TR-90 (polyamide) is another lightweight option with slightly better optical clarity than polycarbonate, though it costs about $1-2 more per pair. For premium orders, we offer high-index 1.60 or 1.67 MR-8 polyurethane -- thinner, lighter, and optically superior with an Abbe value of 41 (versus 30 for polycarbonate, meaning less chromatic aberration). MR-8 adds $3-5 per pair but if your brand is positioned as premium and your customers have stronger prescriptions, the visual difference is noticeable.',
  },
  {
    question: 'Can prescription sunglasses be polarized?',
    answer: 'Yes, absolutely. We can put polarized treatment on any prescription lens material -- polycarbonate, TR-90, or MR-8. The polarized film is laminated between lens layers during the edging process, so the prescription curve and polarization work together seamlessly. Polarized prescription lenses add about $2-4 per pair depending on material. Tint options for polarized Rx lenses are limited to gray, brown, and green (those are the only colors that work with polarization technology), but within those three, we can match any density from 15% to 85% visible light transmission. For most prescription sunglasses, we recommend gray at 75-85% density -- it preserves true color perception while cutting glare.',
  },
  {
    question: 'What coatings can be applied to prescription sunglass lenses?',
    answer: 'Pretty much everything. The standard stack we recommend is: hard coat (scratch resistance) on both sides, then anti-reflective coating on the back surface (the side facing your eye) to eliminate reflected light bouncing off the inside of the lens, then hydrophobic/oleophobic top coat. For prescription sunglasses specifically, the backside AR coating is critical -- without it, customers see their own eye reflected in the lens, which is distracting and looks cheap. We can also do photochromic (transition) treatment on prescription lenses -- the lens darkens in UV light. This lets you sell one pair that works indoors and outdoors, which is a compelling product story.',
  },
  {
    question: 'What is the minimum order quantity for prescription sunglasses?',
    answer: 'MOQ is 100 pieces per frame style, but there is a catch with prescription: each individual prescription is unique, so you need to provide us with a prescription breakdown. For example, if your MOQ is 100 pairs, a typical distribution might be: 20 pairs at plano (no prescription, for customers who just want sunglasses), 30 pairs at -1.00 to -2.00 sphere (the most common range), 35 pairs at -2.25 to -4.00, 10 pairs at -4.25 to -6.00, and 5 pairs at -6.25+. We provide a standard prescription distribution template that is based on global refractive error data. If you are targeting a specific market -- say, older demographics for reading sunglasses -- we adjust the distribution accordingly.',
  },
  {
    question: 'How long does prescription sunglasses production take?',
    answer: 'Standard production time is 20-30 days from order confirmation, which is about 5-7 days longer than non-prescription because of the lens surfacing process. Single vision lenses take 3-5 days to surface, edge, and coat. Progressive lenses take 5-7 days because the free-form generator needs to create the gradient, and the surfacing is more precise. If you need rush orders, we can compress to 12-15 days for an additional 20% rush fee. For samples, plan on 7-10 business days. We keep blank stock in -1.50, -2.00, -2.50, and -3.00 sphere in gray and brown tint, so single vision samples in those prescriptions come back faster.',
  },
]

const products = [
  {
    name: 'Single Vision Prescription Sunglasses',
    description: 'Standard distance or reading prescription in tinted sunglass lenses. Available in polycarbonate, TR-90, or high-index 1.60 MR-8 material. Tint options: gray, brown, green, or custom. This is the most common prescription sunglass order -- simple, reliable, and cost-effective. Covers 80% of the prescription market.',
    price: '$8.00 - $18.00',
    moq: '100 pcs',
    features: ['±0.25 to ±8.00 Sphere', 'Polycarbonate / MR-8', 'UV400 Protection', 'Hard Coat + AR Back'],
  },
  {
    name: 'Progressive Prescription Sunglasses',
    description: 'No-line bifocal prescription sunglasses with distance, intermediate, and near vision zones in a single tinted lens. The fastest-growing segment in the Rx sunglass market. We use digital free-form surfacing for a wide, comfortable reading zone -- older versions of progressives had a narrow "corridor" that made it hard to find the reading zone. Our free-form progressives have a 40% wider reading zone than traditional progressives. Adds $5-8 per pair over single vision.',
    price: '$15.00 - $28.00',
    moq: '100 pcs',
    features: ['Digital Free-Form', 'Wide Reading Zone', 'Add +1.00 to +3.00', 'Anti-Reflective Back'],
  },
  {
    name: 'Polarized Prescription Sunglasses',
    description: 'Prescription lenses with built-in polarization -- cuts glare from roads, water, and snow while correcting vision. Available in gray, brown, or green tint. The polarized film is laminated between lens layers during the edging process, so the prescription accuracy is not affected. This is the premium option that customers are willing to pay extra for. A pair that retails at $60 in standard prescription can sell at $90-120 polarized prescription.',
    price: '$12.00 - $25.00',
    moq: '100 pcs',
    features: ['TAC Polarized Film', 'Gray / Brown / Green', 'Glare Reduction 99%', 'UV400 + Polarized'],
  },
  {
    name: 'Photochromic Prescription Sunglasses',
    description: 'Transition lenses that clear up indoors and darken in sunlight. One pair that works everywhere -- this is a powerful product story for your brand. We offer two types: lens-color-change photochromic (the entire lens darkens) and clear-to-sunglass photochromic (starts clear, darkens to gray/brown/green in UV). The latter is more popular for sunglasses because customers get a clear prescription pair and a sunglass pair in one. Adds $4-6 per pair over standard prescription.',
    price: '$14.00 - $26.00',
    moq: '100 pcs',
    features: ['Clear-to-Dark Transition', 'UV-Activated', 'Indoor + Outdoor', '1-2 Min Activation'],
  },
  {
    name: 'Blue Light Prescription Sunglasses',
    description: 'Prescription sunglasses with blue light filtering -- for customers who spend hours on screens and also need outdoor sun protection. The lens blocks 90%+ of harmful blue light (415-455nm range) while maintaining a sunglass tint for outdoor use. The blue light filter is built into the lens material (not a coating that can scratch off), so it lasts the life of the lenses. This is a niche but growing category -- especially for professionals who commute and spend most of their day at a computer.',
    price: '$10.00 - $22.00',
    moq: '100 pcs',
    features: ['90%+ Blue Light Block', 'Built-In (Not Coated)', '415-455nm Range', 'Tinted for Outdoor'],
  },
  {
    name: 'Reading Sunglasses (Presbyopia)',
    description: 'Ready-made reading sunglasses in standard reading powers (+1.00 to +4.00) for the mass market. No custom prescription needed -- customers just pick their reading strength. These are perfect for retail display, pharmacy checkout, beach shops, and online direct sales. We produce them in batches of common powers, so the cost is much lower than custom prescription. Each pair includes a printed card showing the power and a simple eye chart for self-testing. Margins on reading sunglasses are excellent -- production cost $2-4, retail $15-30.',
    price: '$2.00 - $5.00',
    moq: '500 pcs',
    features: ['+1.00 to +4.00 Powers', 'Ready-Made (No Rx Needed)', 'Retail-Ready Packaging', 'Self-Test Card Included'],
  },
]

export default function PrescriptionSunglassesPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Prescription Sunglasses',
        description: 'Custom prescription sunglasses manufactured to your exact Rx. Single vision, progressive, polarized, and photochromic options. UV400 protection, full OEM customization.',
        minPrice: '2.00',
        maxPrice: '28.00',
        category: 'Prescription Sunglasses',
        material: 'CR-39, Polycarbonate, Glass'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products/' },
        { name: 'Prescription Sunglasses', url: 'https://eyeviewsunglasses.com/products/prescription/' }
      ]} />
      <FAQPageSchema faqs={rxFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products/" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Prescription Sunglasses</span>
          </nav>

          {/* Hero Image with Schema */}
          <div className="mb-12">
            <img
              src="/products/prescription.svg"
              alt="Prescription Sunglasses Manufacturer - Custom Rx Eyewear Wholesale"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Prescription Sunglasses Manufacturer
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Here is a number that will surprise you: <strong>4 billion people worldwide</strong> need vision correction. That is half the planet wearing glasses or contacts. And a significant portion of those people also need sunglasses -- either a tinted prescription pair for outdoors, or reading sunglasses for when they hit their mid-forties. The global prescription sunglass market is worth over $15 billion and growing at 6% annually (<a href="https://www.grandviewresearch.com/industry-analysis/eyeglass-lens-market" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grand View Research, 2024</a>). If your eyewear brand does not have a prescription offering, you are leaving half your potential customers on the table.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We have operated a digital lens lab in our factory since 2014. We use <a href="https://en.wikipedia.org/wiki/Free-form_optics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">digital free-form surfacing</a> equipment from Topcon and Hoya -- the same machines that independent optical labs use worldwide. The difference is that we integrate prescription lenses into sunglass frames at scale, with full OEM customization. Your brand, your frame choice, your lens material, your tint, your coatings -- all manufactured under one roof with the same quality control we apply to every pair we produce.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The business opportunity here is significant. Prescription sunglasses command <strong>2-3x the retail price</strong> of standard sunglasses. A wayfarer that sells for $35 non-prescription can sell for $80-120 with prescription lenses. And the customer loyalty is unmatched -- once someone finds a brand that makes prescription sunglasses they like, they come back every two years for a new pair (and they tell their friends). Let me show you what we can do.
              </p>
            </div>
          </div>

          {/* Lens Materials Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Prescription Lens Materials</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              The lens material determines thickness, weight, optical clarity, and price. Here is an honest comparison.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔵</div>
                <h3 className="text-xl font-bold mb-3">Polycarbonate</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The industry standard for prescription sunglass lenses. Impact-resistant (meets FDA drop-ball test), lightweight at 2.0g per lens, and inherently blocks 100% UV without any coating. The optical clarity is decent (Abbe value 30) -- fine for most prescriptions. The limitation is that polycarbonate is harder to coat, so the coating adhesion is not as strong as MR-8. We compensate with a plasma pre-treatment that significantly improves coating bond strength. Best for: everyday prescription sunglasses, sports eyewear, kids prescription.
                </p>
                <div className="text-primary-600 font-bold">$3-6 per lens (base)</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">MR-8 High-Index 1.60</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  MR-8 is a polyurethane material from Mitsui Chemicals (Japan) that is widely considered the best all-around lens material. It combines a high refractive index (1.60 -- thinner than polycarbonate) with excellent optical clarity (Abbe value 41 -- significantly less chromatic aberration). The coating adhesion is superb, which means the hard coat, AR, and hydrophobic layers bond more strongly and last longer. It is slightly heavier than polycarbonate (2.2g per lens) but the visual difference is worth it. Best for: premium prescription sunglasses, moderate to high prescriptions, fashion-forward brands.
                </p>
                <div className="text-primary-600 font-bold">$6-10 per lens (base)</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">High-Index 1.67</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For stronger prescriptions (above ±4.00 sphere), 1.67 high-index keeps the lenses thin and attractive. A -6.00 prescription in 1.67 index is roughly 30% thinner at the edge than the same prescription in 1.50 standard index. The trade-off is slightly lower Abbe value (32) and higher cost. For prescriptions above ±6.00, we recommend 1.67 or even 1.74 index (available on request). Thin lenses matter for sunglasses because thick edges are visible through the tint and look unattractive -- customers notice.
                </p>
                <div className="text-primary-600 font-bold">$8-14 per lens (base)</div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our Prescription Sunglass Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">👓</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-primary-600 font-bold">{product.price}</div>
                        <div className="text-xs text-gray-400">MOQ: {product.moq}</div>
                      </div>
                      <Link href="/contact/" className="btn-primary text-sm">Get Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prescription Distribution */}
          <section className="mb-20 bg-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">How to Plan Your Prescription Inventory</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Unlike standard sunglasses, prescription orders require you to distribute across different lens powers. Here is how we help you get it right.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-bold mb-4">Standard Prescription Distribution (per 100 pairs)</h3>
                <div className="space-y-3">
                  {[
                    ['Plano (no prescription)', '20 pairs', 'For customers who want tinted lenses only'],
                    ['SPH -0.25 to -2.00', '25 pairs', 'Mild myopia -- most common range globally'],
                    ['SPH -2.25 to -4.00', '30 pairs', 'Moderate myopia -- largest single segment'],
                    ['SPH -4.25 to -6.00', '15 pairs', 'Moderate-high myopia'],
                    ['SPH -6.25 to -8.00', '7 pairs', 'High myopia -- requires high-index material'],
                    ['CYL (astigmatism)', '3 pairs', 'Included across the above ranges as needed'],
                  ].map(([range, qty, note], i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-900 font-medium">{range}</span>
                      <span className="text-primary-600 font-bold">{qty}</span>
                      <span className="text-gray-500 text-sm">{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-3">📋 What We Need From You</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Frame selection</strong> -- any frame from our catalog or your custom design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Lens material preference</strong> -- we recommend based on your price point and target market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Prescription breakdown</strong> -- we provide a template, or use our standard distribution above</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Tint color and density</strong> -- gray and brown are top sellers; we can custom-match</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Coating preferences</strong> -- hard coat + backside AR is standard; add polarized/photochromic as needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Coatings Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Coating Options for Prescription Lenses</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Coatings make the difference between a good lens and a great one. Here is what each one does.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '🛡️', name: 'Hard Coat', desc: 'Anti-scratch layer applied to both surfaces. Essential for sunglass lenses that get set down on tables, tossed in bags, and exposed to sand and dust. Without it, polycarbonate lenses scratch within weeks. We use a thermal-cured silicone-based hard coat that passes the Steel Wool Test (ASTM D968).' },
                { icon: '🔇', name: 'Anti-Reflective (Back Surface)', desc: 'Applied to the back (eye-facing) surface only. Eliminates the annoying reflection of the wearer\'s eye that you see in cheap prescription sunglasses. Customers immediately notice the difference -- it makes the lenses look clearer and more premium. We strongly recommend this for any prescription sunglass over $50 retail.' },
                { icon: '💧', name: 'Hydrophobic / Oleophobic', desc: 'The "Teflon" layer on top. Repels water, oil, fingerprints, and sweat. Makes lenses much easier to clean and keeps them looking clear throughout the day. Especially important for sunglasses because sweat and sunscreen get on the lenses constantly. Lasts 1-2 years with normal use before degrading.' },
                { icon: '🌊', name: 'Polarized Film', desc: 'A polarizing film laminated between lens layers that blocks horizontally-polarized light -- the glare that bounces off roads, water, car hoods, and snow. Reduces eye fatigue significantly for driving and outdoor activities. Available in gray (neutral color), brown (enhances contrast), and green (balanced).' },
              ].map((coating, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="text-3xl mb-3">{coating.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{coating.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{coating.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Market Opportunity */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">The Prescription Sunglass Market Opportunity</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              This is not a niche. This is the biggest growth opportunity in eyewear right now.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">📊 $15B+ Market</h3>
                <p className="text-gray-300 text-sm">The global ophthalmic lens market was valued at $15.9 billion in 2023 and is growing at 6.1% CAGR. Prescription sunglasses are the fastest-growing sub-segment as more consumers want sun protection with vision correction.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">💰 2-3x Retail Price</h3>
                <p className="text-gray-300 text-sm">A standard sunglass retails at $30-60. The same frame with prescription lenses retails at $80-200. The manufacturing cost difference is $5-15 per pair. Your per-pair profit margin actually increases with prescription.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🔄 Higher Customer Loyalty</h3>
                <p className="text-gray-300 text-sm">Prescription sunglass customers switch brands less frequently than standard sunglass buyers. Once they find a brand that gets their prescription right and looks good, they come back every 1-2 years.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🏪 Less Competition</h3>
                <p className="text-gray-300 text-sm">Most DTC sunglass brands do not offer prescription lenses because of the operational complexity. This means less competition on Google Ads, less competition on Amazon, and less competition in retail. A significant moat for brands that do it well.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌍 4 Billion Potential Customers</h3>
                <p className="text-gray-300 text-sm">WHO estimates 4 billion people worldwide need vision correction. That number is growing with increased screen time and aging populations. Half the planet needs what you are selling.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">📱 E-Commerce Friendly</h3>
                <p className="text-sm">Customers can submit their prescription online (from their eye doctor) and order prescription sunglasses without visiting a store. This makes prescription sunglasses ideal for DTC e-commerce brands with a simple online ordering flow.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Prescription Sunglasses FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {rxFaqs.map((faq, index) => (
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
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/blue-light" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🖥️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Blue Light Sunglasses</h3>
                <p className="text-gray-600 text-sm">Screen-time eyewear that blocks harmful blue light. Pairs well with prescription lenses for customers who need both indoor and outdoor protection.</p>
              </Link>
              <Link href="/products/sport" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Sport Sunglasses</h3>
                <p className="text-gray-600 text-sm">Wraparound sport frames with prescription insert options. Ideal for athletes who need vision correction during outdoor training and competition.</p>
              </Link>
              <Link href="/certifications/" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Our Certifications</h3>
                <p className="text-gray-600 text-sm">FDA, CE, UV400, ANSI Z80.3 -- see the compliance standards our prescription lenses meet for the US, EU, and global markets.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Add Prescription to Your Line?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Tell us your target market, price point, and frame preferences. We will recommend the right lens materials, prescription distribution, and coatings for your brand. Samples available in 7-10 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Get a Quote
              </Link>
              <Link href="/products/" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors">
                View All Products
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
