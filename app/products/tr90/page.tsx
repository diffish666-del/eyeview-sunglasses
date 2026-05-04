import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'TR90 Sunglasses Manufacturer | Lightweight TR90 Eyewear Factory - EyeView',
  description: 'TR90 sunglasses manufacturer. Ultra-lightweight Grilamid TR90 frames (15-20g), flexible memory material, hypoallergenic. Sports, kids, everyday. MOQ 100pcs. Factory direct.',
  keywords: 'TR90 sunglasses manufacturer, TR90 eyewear wholesale, lightweight sunglasses factory, Grilamid TR90, flexible sunglasses, sports sunglasses manufacturer, kids sunglasses wholesale',
  openGraph: {
    title: 'TR90 Sunglasses Manufacturer | Lightweight TR90 Eyewear Factory - EyeView',
    description: 'TR90 sunglasses manufacturer. Ultra-lightweight Grilamid TR90 frames (15-20g), flexible, hypoallergenic. Sports & kids eyewear. MOQ 100pcs.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/products/tr90',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/products/tr90',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/tr90',
      'es': 'https://eyeviewsunglasses.com/es/productos/tr90',
    },
  },
}

const tr90Faqs = [
  {
    question: 'What exactly is TR90 and why is it used for sunglasses?',
    answer: 'TR90 is a thermoplastic polyamide (nylon) originally developed by EMS-Grivory in Switzerland under the brand name Grilamid TR90. It was engineered for optical applications — meaning it was designed from the ground up to be made into eyewear frames. The key properties are: ultra-lightweight (a finished frame weighs just 15-20 grams), extreme flexibility (you can bend it almost in half and it springs back to shape), memory (it holds its shape over years of daily use), hypoallergenic (no nickel, no BPA, no skin reactions), and high heat resistance (deformation temperature around 120°C). It is injection-molded, so production is fast and consistent — which keeps costs down. Basically, TR90 gives you a frame that weighs nothing, never breaks, and never irritates sensitive skin. That is why it has become the go-to material for sports eyewear, kids glasses, and lightweight everyday frames.',
  },
  {
    question: 'How does TR90 compare to acetate and metal frames?',
    answer: 'The easiest way to understand TR90 is to compare it directly. Weight: TR90 frames weigh 15-20 grams, acetate frames weigh 25-35 grams, and metal frames weigh 28-35 grams. So TR90 is roughly 40-50% lighter than acetate. Flexibility: TR90 bends and springs back; acetate snaps if you bend it too far; metal bends permanently. Durability: TR90 is nearly unbreakable under normal use; acetate can chip or crack; metal can bend out of shape. Color options: acetate wins here with its rich layered patterns; TR90 is more limited to solid colors and surface finishes. Perceived premium: acetate has a luxury feel that TR90 cannot match; TR90 feels technical and sporty. Cost: TR90 frames run $4-8 per pair, acetate runs $6-16, and metal runs $8-22. Bottom line: TR90 for performance and value, acetate for luxury and aesthetics, metal for classic styling.',
  },
  {
    question: 'Can TR90 frames be printed or colored in custom designs?',
    answer: 'Yes, but the options are different from acetate. TR90 color is determined during injection molding — we add masterbatch color pellets to the raw Grilamid resin, so the color goes all the way through the material. We stock about 30 standard colors (matte black, gloss black, matte navy, grey, red, orange, white, transparent, etc.) and can Pantone-match custom colors with a minimum of 500 pieces. For surface decoration, we offer pad printing (logos, patterns, multi-color graphics on the temple), UV printing (full-color photographic-quality printing on flat surfaces), hydrographic transfer (water-dip printing for camo, wood grain, carbon fiber patterns that wrap around curves), and laser engraving. We also do rubber-coating (a soft-touch matte finish that adds grip and a premium feel) and metallic PVD coating on temple accents. The one thing TR90 cannot do is replicate the layered color depth of acetate — tortoiseshell, marble, and crystal patterns are not possible in injection-molded material.',
  },
  {
    question: 'Is TR90 safe for kids sunglasses?',
    answer: 'TR90 is arguably the best material for children\'s eyewear, and here is why. First, it is virtually unbreakable — kids are hard on glasses, and TR90 flexes instead of snapping. We have tested our kids frames with over 5,000 open-close hinge cycles with zero failure. Second, it is hypoallergenic — no nickel, no BPA, no phthalates, no latex. Kids have more sensitive skin than adults, and metal frames with nickel content can cause contact dermatitis. Third, it is ultra-lightweight at 12-15 grams for kids-sized frames — heavy glasses slide down small noses and kids just take them off. Fourth, TR90 meets EN 71 toy safety standards (we can provide testing documentation), which some markets require for eyewear sold to children under 14. And fifth, the low cost ($3.50-6.00 per pair for kids frames) makes it economical for parents who know their child will probably lose or break them within six months anyway.',
  },
  {
    question: 'What temperature can TR90 withstand?',
    answer: 'TR90 has a heat deflection temperature (HDT) of approximately 120°C (248°F) at 1.8 MPa — significantly higher than standard nylon (around 75°C) and much higher than acetate (which softens at 70-80°C). In practical terms, this means TR90 frames can safely survive being left on a car dashboard in summer (which can reach 70-90°C), being worn in a sauna, or being exposed to hot water without warping. This is a real selling point, especially for sports and outdoor brands — athletes leave their sunglasses in hot cars, on boat dashboards, and in gym bags next to sweaty clothes. TR90 handles all of it. The cold end is equally impressive: TR90 remains flexible down to -40°C, so it will not become brittle in winter conditions. For comparison, cheap polycarbonate frames can become brittle below 0°C.',
  },
  {
    question: 'What is the minimum order quantity for TR90 sunglasses?',
    answer: 'Standard MOQ is 100 pieces per model using our existing mold library — we have over 80 TR90 frame designs in stock covering sport wraps, wayfarers, rounds, rectangles, aviator-style, and kids shapes. You can mix colors within that 100 pieces. For a completely custom frame design, we charge a mold fee of $1,500-3,000 depending on complexity (TR90 molds are more expensive than acetate CNC tooling because injection molds are steel and precision-machined). Custom mold MOQ is 500 pieces on the first order. For custom Pantone-matched colors, minimum is 500 pieces because we need to mix and test the masterbatch. For standard stock colors, no minimum beyond the 100-piece base.',
  },
]

const products = [
  {
    name: 'Sport Wrap TR90',
    description: 'Our best-selling TR90 model. Full-wrap design that blocks wind, dust, and peripheral light. Rubber nose pads and temple tips provide non-slip grip even when you are sweating. The wrap shape follows the curvature of the face, providing 180-degree coverage without the "bug eye" look. Weighs just 18 grams — most customers forget they are wearing them within five minutes. This is the frame that cycling teams, running clubs, and fishing brands order in bulk. Available in 15 stock colors with polarized lens options.',
    price: '$4.50 - $7.50',
    moq: '100 pcs',
    features: ['Full Wrap Design', 'Rubber Grip', '18g Ultra-Light', 'Anti-Slip Temple'],
  },
  {
    name: 'TR90 Wayfarer',
    description: 'The classic wayfarer shape in TR90 instead of acetate. You lose the layered color depth of acetate, but you gain a frame that weighs 16 grams instead of 30, costs 40% less, and is nearly impossible to break. For brands targeting the $20-40 retail range where acetate pricing does not work, this is the sweet spot. We can rubber-coat the surface for a soft-touch matte finish that adds grip and a premium feel. Popular with DTC brands, promotional companies, and college bookstores.',
    price: '$4.00 - $6.50',
    moq: '100 pcs',
    features: ['Wayfarer Shape', '16g Weight', 'Rubber Coating Option', 'Budget-Friendly'],
  },
  {
    name: 'Kids Flex TR90',
    description: 'Sized for ages 4-12 with extra flexibility built into the design. The temples have an integrated flex zone that allows them to bend outward without breaking — important because kids grab their glasses by one arm and pull. Hypoallergenic, BPA-free, phthalate-free. Rubber nose pads sized for smaller bridges. Available in bright, fun colors — electric blue, hot pink, lime green, sunset orange, matte black (for the "cool kid" market). Weighs just 12 grams. Parents buy these because they know kids will abuse them. We have clients who sell these in 3-packs because parents expect to replace them.',
    price: '$3.50 - $6.00',
    moq: '100 pcs',
    features: ['Ages 4-12', 'Extra Flex Temples', '12g Weight', 'BPA/Phthalate Free'],
  },
  {
    name: 'TR90 Half-Frame Sport',
    description: 'Semi-rimless design where the TR90 frame holds the top of the lens and a thin nylon cord holds the bottom edge. This shaves off another 3-4 grams compared to full-frame, bringing total weight to about 14 grams. The open bottom edge also improves downward visibility, which is important for runners and cyclists who need to see the road beneath them. The exposed lens edge gives these a technical, performance-oriented look. Popular with running brands, triathlon brands, and golf eyewear lines.',
    price: '$5.00 - $8.00',
    moq: '100 pcs',
    features: ['Semi-Rimless', '14g Weight', 'Enhanced Downward View', 'Nylon Cord Bottom'],
  },
  {
    name: 'TR90 + Metal Combo',
    description: 'TR90 front frame with stainless steel or titanium temple arms. This hybrid gives you the lightweight flexibility of TR90 where it matters most (the front frame that touches your face) and the premium look of metal temples. The metal temples can be laser-engraved with your logo — which looks much sharper than printing on plastic. Weighs about 20 grams total. This is our go-to recommendation for brands that want a sport-to-casual crossover look — technical enough for outdoor use, stylish enough for a dinner out.',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    features: ['TR90 + Metal Hybrid', 'Laser Engravable', '20g Weight', 'Sport-Casual Crossover'],
  },
  {
    name: 'TR90 Shield / Visor',
    description: 'Single-lens shield design in TR90 — one continuous lens across both eyes with a TR90 upper frame and temple system. This is the style you see on professional cyclists, speed skaters, and ski racers. Maximum field of vision, zero frame obstruction in the central view, and aggressive aerodynamic styling. The single lens is polycarbonate with optional mirror, polarized, or photochromic coatings. Adjustable nose pad and ventilation ports to prevent fogging. If your brand targets serious athletes, this is the frame that earns credibility.',
    price: '$6.00 - $9.00',
    moq: '100 pcs',
    features: ['Single Shield Lens', 'Anti-Fog Vents', 'Max Field of Vision', 'Aero Design'],
  },
]

export default function TR90Page() {
  return (
    <>
      <ProductSchema product={{
        name: 'TR90 Lightweight Sunglasses',
        description: 'Ultra-lightweight TR90 Grilamid sunglasses. 15-20g frames, flexible memory material, hypoallergenic. Sports, kids, and everyday styles. Full OEM customization.',
        minPrice: '3.50',
        maxPrice: '11.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products' },
        { name: 'TR90 Sunglasses', url: 'https://eyeviewsunglasses.com/products/tr90' }
      ]} />
      <FAQPageSchema faqs={tr90Faqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">TR90 Sunglasses</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
              alt="TR90 Sunglasses Manufacturer - Lightweight Nylon Sports Eyewear Wholesale"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              TR90 Sunglasses Manufacturer
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Let me show you something. Pick up a pair of regular sunglasses — the kind you buy at a gas station. Now bend the temples. Hear that creak? That is cheap polycarbonate telling you it is about to snap. Now try the same thing with a TR90 frame. You can practically fold it in half. It springs right back. No creak, no crack, no permanent deformation. That flexibility is not a gimmick — it is the core engineering advantage of <a href="https://www.emsgrivory.com/en/products/grilamid-tr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grilamid TR90</a>, a thermoplastic <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">polyamide</a> developed by Swiss chemical company EMS-Grivory specifically for optical applications.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Here are the numbers that matter: a finished TR90 frame weighs 15-20 grams. For comparison, acetate frames weigh 25-35 grams and metal frames weigh 28-35 grams. That 10-15 gram difference might not sound like much on paper, but put a TR90 frame on your face after wearing acetate all day and you will immediately understand why athletes, outdoor professionals, and increasingly everyday consumers are switching. You forget they are there. No pressure on the nose, no sliding, no red marks behind the ears. For <Link href="/products/sport" className="text-primary-600 hover:underline">sports brands</Link> and <Link href="/products/kids" className="text-primary-600 hover:underline">kids eyewear</Link>, TR90 is not just a good option — it is the obvious choice.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                From a manufacturing standpoint, TR90 is injection-molded — meaning we feed Grilamid pellets into a heated barrel, inject the molten material into a precision steel mold under high pressure, and pop out a finished frame in about 45 seconds. Compare that to acetate frames which take 5-7 days of cutting, tumbling, and hand polishing. The result is faster production, lower per-unit cost, and extremely consistent quality. Our TR90 defect rate is under 0.5% — versus 3-5% for acetate. If you need large volumes at competitive prices without sacrificing quality, TR90 is the material that makes it possible.
              </p>
              <p className="text-lg leading-relaxed">
                We produce about 500,000 TR90 frames per year across sport wraps, casual wayfarers, kids styles, and hybrid sport-casual designs. Our mold library has over 80 designs ready to go, and we run four dedicated injection molding machines for TR90 production. Whether you are launching a sports eyewear brand, adding a kids line, or building a lightweight everyday collection, here is everything you need to know.
              </p>
            </div>
          </div>

          {/* Weight Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">The Weight Advantage</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Weight is the single biggest reason brands choose TR90. Here is how it compares to every other frame material we offer.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">TR90 (Grilamid)</span>
                    <span className="text-primary-600 font-bold">15 - 20g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-primary-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">The lightest option. Barely noticeable on the face. Ideal for all-day wear and active use.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Aluminum Alloy</span>
                    <span className="text-gray-600 font-bold">18 - 22g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Close to TR90 in weight, but rigid — no flex. Premium metal feel with good lightness.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Acetate</span>
                    <span className="text-gray-600 font-bold">25 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">The luxury material. Beautiful but heavier. That weight is part of its &ldquo;premium feel&rdquo; — but not ideal for sports.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Stainless Steel</span>
                    <span className="text-gray-600 font-bold">28 - 35g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Classic metal frames. The heft communicates quality but can cause fatigue during extended wear.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Standard Polycarbonate</span>
                    <span className="text-gray-600 font-bold">22 - 28g</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Cheaper than TR90 but heavier, less flexible, and more brittle. The budget option that TR90 outperforms.</p>
                </div>
              </div>
            </div>
          </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop" alt="Wholesale TR90 Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our TR90 Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🏃</span>
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
                      ['Frame Material', 'EMS-Grivory Grilamid TR90 (Swiss-engineered thermoplastic polyamide)'],
                      ['Frame Weight', '15-20g (full frame) / 12-15g (kids) / 14g (semi-rimless)'],
                      ['Flexibility', 'Memory material — bends to 90°+ and returns to original shape. 5,000+ flex cycles tested.'],
                      ['Heat Resistance', 'HDT 120°C (248°F) — survives car dashboards, saunas, hot water'],
                      ['Cold Resistance', 'Remains flexible to -40°C (-40°F) — no brittleness in winter'],
                      ['Hypoallergenic', 'Yes — no nickel, no BPA, no phthalates, no latex'],
                      ['Lens Material', 'Polycarbonate / TAC Polarized / Photochromic'],
                      ['UV Protection', 'UV400 — blocks 100% of UVA (315-380nm) and UVB (280-315nm)'],
                      ['Nose Pads', 'Integrated TPE rubber (non-slip) or adjustable silicone pads'],
                      ['Temple Tips', 'TPE rubber co-molded grip — anti-slip even when wet'],
                      ['Stock Colors', '30+ standard: matte black, gloss black, navy, grey, red, orange, white, transparent, etc.'],
                      ['Custom Colors', 'Pantone matching available — MOQ 500 pcs for custom masterbatch'],
                      ['Surface Finishes', 'Matte, gloss, rubber-coated (soft-touch), metallic PVD accents'],
                      ['Printing Options', 'Pad print, UV print, hydrographic transfer (camo, carbon fiber), laser engraving'],
                      ['Certifications', 'CE (EN ISO 12312-1) · FDA · UV400 · ISO 9001 · EN 71 (kids)'],
                      ['MOQ', '100 pcs per model (stock molds) / 500 pcs (custom molds)'],
                      ['Mold Fee (Custom)', '$1,500 - $3,000 one-time — steel injection mold'],
                      ['Sample Time', '3-5 business days'],
                      ['Production Time', '12-18 days standard / 8-10 days rush'],
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

          {/* Key Properties Deep Dive */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Why TR90 Outperforms Other Plastics</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Not all plastic frames are created equal. Here is what separates TR90 from standard polycarbonate and cheap nylon.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🪶 Ultra-Lightweight</h3>
                <p className="text-sm text-gray-600">At 1.14 g/cm³ density, TR90 is one of the lightest frame materials available. A full-frame sport wrap weighs just 18 grams — about the same as three sheets of paper. Customers literally forget they are wearing them, which is exactly what athletes need.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">💪 Memory Flexibility</h3>
                <p className="text-sm text-gray-600">TR90 has true shape memory — bend it, twist it, sit on it, and it returns to its original form. We test every frame design for 5,000+ open-close cycles and 90-degree temple flex with zero permanent deformation. Standard polycarbonate fails this test at around 500 cycles.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌡️ Temperature Tough</h3>
                <p className="text-sm text-gray-600">Heat deflection at 120°C means TR90 survives situations that destroy other plastics. Left on a car dashboard in Phoenix? Fine. Dropped in a hot tub? Fine. Stored in a sauna locker? Fine. Acetate would warp. Standard PC might deform. TR90 does not care.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🧪 Chemical Resistant</h3>
                <p className="text-sm text-gray-600">Resistant to sunscreen, insect repellent, sweat, saltwater, and most common chemicals. This matters for sport and outdoor use where frames are constantly exposed to these substances. Acetate, by contrast, can be damaged by sunscreen chemicals over time.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🛡️ Impact Resistant</h3>
                <p className="text-sm text-gray-600">TR90 absorbs impact energy through flex rather than cracking. Drop a TR90 frame from head height onto concrete and it bounces. Drop an acetate frame and it might chip. For sports eyewear and kids glasses, this is a safety feature, not just durability.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏭 Production Efficiency</h3>
                <p className="text-sm text-gray-600">Injection molding cycle time is about 45 seconds per frame — versus 5-7 days for acetate. This means faster delivery (12-18 days vs 20-28 days), lower per-unit cost, and sub-0.5% defect rates. For volume orders, the cost and speed advantage is significant.</p>
              </div>
            </div>
          </section>

          {/* Best Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Who Should Use TR90?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              TR90 is not the right material for every brand. Here is where it excels and where you might want something else.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-600">✅ Perfect For</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Sports brands</strong> — cycling, running, fishing, golf, skiing. TR90 is the industry standard for performance eyewear.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Kids eyewear</strong> — unbreakable, lightweight, hypoallergenic. The material was practically designed for children.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Everyday comfort lines</strong> — for brands positioning around all-day wearability and &ldquo;you forget they&apos;re there&rdquo; messaging.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Volume / value brands</strong> — low per-unit cost with genuine quality. $20-50 retail sweet spot.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Promotional / corporate</strong> — affordable enough for giveaways but quality enough that people actually wear them.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-yellow-200">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">⚡ Good Hybrid Option</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>TR90 + metal combos</strong> — TR90 front with metal temples for a sport-to-casual crossover look.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Prescription-ready sport</strong> — TR90 with RX-compatible lens grooves for optical insert or direct glazing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>Multi-line brands</strong> — many of our clients use TR90 for their sport/active line and acetate for their fashion line.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-red-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">❌ Not Ideal For</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Luxury / high-fashion</strong> — TR90 lacks the visual richness of acetate. No tortoiseshell, no marble, no crystal depth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>$100+ retail positioning</strong> — the material does not convey the premium feel needed at this price point (unless it is a performance/tech brand).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Classic/heritage styling</strong> — aviators and wayfarers in TR90 work but lack the warmth and character of metal or acetate.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">TR90 Customization Options</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              TR90 may be injection-molded, but that does not mean generic. Here is how we make each pair yours.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Colors & Finishes</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Through-color</strong> — 30+ stock colors, or Pantone match (MOQ 500 pcs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Rubber coating</strong> — soft-touch matte finish that adds grip and a premium feel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Hydrographic</strong> — water-transfer printing for camo, carbon fiber, wood grain patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Two-tone</strong> — different colors for frame front and temples using multi-shot molding</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🏷️ Logo & Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Pad printing</strong> — multi-color logo on temples, up to 4 colors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>UV printing</strong> — photographic quality, full-color, fine detail on flat surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Laser engraving</strong> — permanent, works on rubber-coated surfaces too</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Metal badge</strong> — zinc alloy logo plate embedded in the temple during molding</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Sport case</strong> — semi-rigid EVA with carabiner clip, branded. $1.00-1.80 per set.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Microfiber pouch</strong> — drawstring with printed logo. $0.30-0.60 each.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Retainer strap</strong> — branded neoprene strap. Great add-on for sport lines. $0.40-0.80.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Retail box</strong> — full-color printed, custom insert, spec card. $0.80-1.50.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lens Options for Sport */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Lens Options for TR90 Frames</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              The lens matters as much as the frame. Here are the options we pair with TR90 — especially for sport and active use.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🔵 TAC Polarized</h3>
                <p className="text-gray-300 text-sm">The most popular upgrade for sport TR90 frames. 7-layer polarized film kills 99% of reflected glare from water, roads, and snow. Essential for fishing, cycling, and driving. Adds $2-3 per pair but lets you charge $15-20 more at retail. Read our <Link href="/blog/sunglasses-lens-guide" className="text-blue-400 hover:underline">lens guide</Link> for the full breakdown.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌗 Photochromic</h3>
                <p className="text-gray-300 text-sm">Darkens in sunlight, clears indoors. Category 0-1 indoors to Category 2-3 outdoors in about 30 seconds. Great selling point for all-day sport use — start your run at dawn, finish at noon, one pair handles it all. Adds $3-4 per pair.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🪞 Mirror Coatings</h3>
                <p className="text-gray-300 text-sm">Silver, blue, red, gold, green, purple, rose — applied over polarized or standard PC lenses. The aggressive look pairs perfectly with sport TR90 frames. Blue mirror on a matte black TR90 wrap is one of our all-time best sellers.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🟡 Yellow/Amber (Low Light)</h3>
                <p className="text-gray-300 text-sm">Category 1 tint that enhances contrast in overcast, foggy, or low-light conditions. Popular for cycling, shooting, skiing, and driving at dusk. Not dark enough for bright sun — marketed as a dedicated low-light lens option.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">💧 Hydrophobic + Oleophobic</h3>
                <p className="text-gray-300 text-sm">Water-repellent and fingerprint-resistant coatings. Rain beads off, sweat wipes clean, smudges do not stick. Adds $0.50-1.00 per pair. Strongly recommended for sport lenses that will get rained on, sweated on, and handled with dirty fingers.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-blue-400">🌫️ Anti-Fog</h3>
                <p className="text-gray-300 text-sm">Hydrophilic coating that prevents condensation. Critical for cold-weather sports (skiing, snowboarding) and high-exertion activities where body heat meets cold air. Works for about 6-12 months of regular use. Adds $1-2 per pair.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">TR90 Sunglasses FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {tr90Faqs.map((faq, index) => (
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
              <Link href="/products/sport" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏃</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Sport Sunglasses</h3>
                <p className="text-gray-600 text-sm">Our full sport eyewear collection — wraps, shields, half-frames. Most styles available in TR90 with polarized and photochromic lens options.</p>
              </Link>
              <Link href="/products/kids" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Kids Sunglasses</h3>
                <p className="text-gray-600 text-sm">TR90 is the ideal material for children&apos;s eyewear — unbreakable, lightweight, hypoallergenic. Sized for ages 0-14.</p>
              </Link>
              <Link href="/blog/sunglasses-lens-guide" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Lens Guide</h3>
                <p className="text-gray-600 text-sm">Complete guide to sunglasses lenses — polarized, photochromic, mirror, CR-39. Learn which lens options pair best with TR90 frames.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Order TR90 Frames?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Tell us what you need — sport wraps, kids frames, casual styles, or something custom. We will send you samples from our 80+ mold library within 3-5 days. Pricing, production timeline, and customization options included. No commitment until you are ready to order.
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
